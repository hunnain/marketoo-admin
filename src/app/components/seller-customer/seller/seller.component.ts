import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CommonService } from 'src/app/shared/service/common.service';
import { SellerCustomerService } from 'src/app/shared/service/seller-customer-service/seller-customer.service';
import { sellerCustomerDB } from '../../../shared/tables/seller-customerDB';
import { generateUrl } from 'src/app/shared/utilities';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
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
  selectedFilter = [];
  searchTerm = new FormControl();
  formCtrlSub;
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
    this.formCtrlSub = this.searchTerm.valueChanges
      .debounceTime(2000)
      .subscribe((newValue) => {
        this.fetchSellers();
      });
    this.fetchSellers();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.searchTerm = val || '';
    this.fetchSellers();
  }

  onSelectFilter(filter) {
    let temp = this.filterOptions[filter];
    console.log(temp);
    if (!this.selectedFilter.includes(temp)) this.selectedFilter.push(temp);
  }
  filterRemove(index) {
    console.log(index);
    this.selectedFilter.splice(index, 1);
  }

  ngOnDestroy() {
    this.formCtrlSub.unsubscribe();
  }

  structureData(data = []) {
    console.log(data);
    if (data)
      return data.map((item) => {
        return {
          ...item,
          image: `<img src='${
            item.imageUrl || 'assets/images/user.png'
          }' class='img-30 mr-2'>`,
          memberSince: item.memberSince
            ? moment(item.memberSince).format('YYYY-MM-DD')
            : '---',
        };
      });
  }

  getKey(key) {
    let tempKey = key.match(/[A-Z][a-z]+/g).split('_')[2];
    console.log(tempKey);
    return tempKey;
  }
  
  generateUrlLocal(query) {
    let filters = {};
    this.selectedFilter.forEach((key) => {
      filters[this.getKey(key)] = this.searchTerm;
    });

    let que = query;
    if (query) que = query + '&' + generateUrl(filters);

    return que;
  }

  fetchSellers() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    // let filters = {};
    // this.selectedFilter.forEach((key) => {
    //   filters[this.getKey(key)] = this.searchTerm;
    // });
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}&accountStatus=2`;
    query = this.generateUrlLocal(query);
    // + '&' + generateUrl(filters);
    this.sellerService
      .getFilteredSellerCustomer('sellers', query)
      .subscribe((res) => {
        console.log(res);
        if (res) {
          this.cs.isLoading.next(false);
          this.sellers = this.structureData(res.body || []);
          let paginate = JSON.parse(res.headers.get('X-Pagination'));
          if (paginate) {
            this.pagination = paginate;
          }
        }
        this.loading = false;
      });
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
