import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CommonService } from 'src/app/shared/service/common.service';
import { SellerCustomerService } from 'src/app/shared/service/seller-customer-service/seller-customer.service';
// import { sellerCustomerDB } from '../../../shared/tables/seller-customerDB';
import { generateUrl } from 'src/app/shared/utilities';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  public temp = [];
  public loading = false;
  public filterOptions = [
    // 'customer_filter_none',
    'customer_filter_username',
    'customer_filter_customerId',
    'customer_filter_email',
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
  customers = [];
  constructor(
    private router: Router,
    private customerService: SellerCustomerService,
    private cs: CommonService
  ) {}

  ngOnInit() {
    this.formCtrlSub = this.searchTerm.valueChanges
      .debounceTime(2000)
      .subscribe((newValue) => {
        this.fetchCustomers();
      });
    this.fetchCustomers();
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    this.searchTerm = val || '';
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

  getKey(key) {
    let tempKey = key.split('_')[2];
    console.log(tempKey);
    return tempKey;
  }

  ngOnDestroy() {
    this.formCtrlSub.unsubscribe();
  }
  generateUrlLocal(query) {
    let filters = {};
    this.selectedFilter.forEach((key) => {
      filters[this.getKey(key)] = this.searchTerm.value;
    });

    let que = query;
    if (query) que = query + '&' + generateUrl(filters);
    console.log(que);

    return que;
  }

  fetchCustomers() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}`;
    // let filters = {};
    // this.selectedFilter.forEach((key) => {
    //   filters[this.getKey(key)] = this.searchTerm.value;
    // });
    // query = query + '&' + generateUrl(filters);
    query = this.generateUrlLocal(query);
    this.customerService
      .getFilteredSellerCustomer('customers', query)
      .subscribe(
        (res) => {
          console.log(res);
          if (res) {
            this.cs.isLoading.next(false);
            this.loading = false;
            this.customers = this.structureData(res.body || []);
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

  onSelectRow(row) {
    let route = `/seller-customer/view-detail/${row.replace(/#/g, '')}`;
    this.router.navigate([route]);
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.fetchCustomers();
  }
}
