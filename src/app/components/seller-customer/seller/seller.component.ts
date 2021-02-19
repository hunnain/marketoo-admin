import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CommonService } from 'src/app/shared/service/common.service';
import { SellerCustomerService } from 'src/app/shared/service/seller-customer-service/seller-customer.service';
import { sellerCustomerDB } from '../../../shared/tables/seller-customerDB';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss'],
})
export class SellerComponent implements OnInit {
  public temp = [];
  public loading = false;
  public filterOptions = [
    'seller_filter_country',
    'seller_filter_date',
    'seller_filter_fname',
    'seller_filter_lname',
    'seller_filter_seller_url',
    'seller_filter_seller_name',
    'seller_filter_seller_code',
  ];
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
    private cs: CommonService
  ) {
    // this.sellers = sellerCustomerDB.list_return;
  }

  ngOnInit() {
    this.fetchSellers();
  }

  fetchSellers() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}`;
    this.sellerService
      .getSellerOrCustomer('sellers', query)
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
            this.pagination = JSON.parse(res.headers.get('X-Pagination'));
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
