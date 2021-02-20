import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CommonService } from 'src/app/shared/service/common.service';
import { SellerCustomerService } from 'src/app/shared/service/seller-customer-service/seller-customer.service';
import { sellerCustomerDB } from '../../../shared/tables/seller-customerDB';
import { SharedService } from 'src/app/shared/service/shared.service';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss'],
})
export class SellerComponent implements OnInit {
  public temp = [];
  public loading = false;
  public filterOptions = [
    'seller_filter_accountStatus',
    'seller_filter_englishFname',
    'seller_filter_country',
    'seller_filter_contactNo',
    'seller_filter_chineseFname',
    'seller_filter_sellerId',
    'seller_filter_email',
    'seller_filter_designHallUrl',
  ];
  selectedFilter = '';
  searchTerm = '';
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  public pagination: Paginate = {
    CurrentPage: 1,
    HasNext: false,
    HasPrevious: false,
    PageSize: 10,
    TotalCount: 0,
    TotalPages: 1,
  };
  pageSizeOptions: number[] = [5, 10, 25, 50];
  public sellers = [];
  constructor(
    private router: Router,
    private sellerService: SellerCustomerService,
    private cs: CommonService,
    private ss: SharedService
  ) {
    // this.sellers = sellerCustomerDB.list_return;
  }

  ngOnInit() {
    this.fetchSellers();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.searchTerm = val || '';
    this.fetchSellers();
  }

  onSelectFilter(filter) {
    this.selectedFilter = this.filterOptions[filter].split('_')[2];
  }

  fetchSellers() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}&accountStatus=2`;
    query =
      query +
      '&' +
      this.ss.generateUrl({
        [this.selectedFilter]: this.searchTerm,
      });
    this.sellerService
      .getFilteredSellerCustomer('sellers', query)
      .map((dt) => {
        return {
          ...dt,
          body: dt.body.map((item) => {
            return {
              ...item,
              image: `<img src='${
                item.imageUrl || 'assets/images/user.png'
              }' class='img-30 mr-2'>`,
              memberSince: item.memberSince
                ? moment(item.memberSince).format('YYYY-MM-DD')
                : '---',
            };
          }),
        };
      })
      .subscribe(
        (res) => {
          console.log(res);
          if (res) {
            this.cs.isLoading.next(false);
            this.loading = false;
            this.sellers = res.body;
            let paginate = JSON.parse(res.headers.get('X-Pagination'));
            if (paginate) {
              this.pagination = paginate;
            }
          }
        }
        //  ,err => {
        //   this.loading = false;
        //  }
      );
  }

  onSelectRow(row, dt) {
    console.log(row, dt);
    let route = `/sellers-customers/seller/view-detail/${row.sellerId}`;
    this.router.navigate([route]);
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.fetchSellers();
  }

  onApplicantScreen() {
    this.router.navigate(['/sellers-customers/seller/new-applicants']);
  }
}
