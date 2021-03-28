import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as moment from 'moment';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CommonService } from 'src/app/shared/service/common.service';
import { OrderService } from 'src/app/shared/service/order-service/order.service';
import { generateUrl } from 'src/app/shared/utilities';
import 'rxjs/add/operator/debounceTime';
import { orderDB } from '../../../shared/tables/order-list';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  public orders = [];
  public temp = [];

  public filterOptions = [
    'order_filter_none',
    'order_filter_orderId',
    'order_filter_customerId',
    'order_filter_sellerId',
    // 'order_filter_paymentStatus',
  ];
  selectedFilter = 'orderId';
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
  public loading: boolean = false;

  constructor(
    private router: Router,
    private orderService: OrderService,
    private cs: CommonService,
    public translate: TranslateService
  ) {
    // this.orders = orderDB.list_order;
  }
  onSelectFilter(filter) {
    this.selectedFilter = this.filterOptions[filter].split('_')[2];
  }

  fetchOrders() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}`;
    // console.log(this.searchTerm.value);

    query =
      query +
      '&' +
      generateUrl({
        [this.selectedFilter]:
          this.selectedFilter == 'orderId'
            ? Number(this.searchTerm.value)
            : this.searchTerm.value,
      });
    this.orderService.getFilteredOrders(query).subscribe(
      (res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
          this.orders = res.body;
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

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.searchTerm = val || '';
    this.fetchOrders();
  }

  ngOnInit() {
    this.formCtrlSub = this.searchTerm.valueChanges
      .debounceTime(2000)
      .subscribe((newValue) => {
        this.fetchOrders();
      });
    this.fetchOrders();
  }

  onSelectRow(row) {
    let route = `/sales/order-detail/${row}`;
    this.router.navigate([route]);
  }

  setPage(page) {
    console.log('page--', page);
  }

  getFormatDate(date) {
    return moment(date).format('MMM DD,YY');
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.fetchOrders();
  }

  getProductsName(products) {
    if (products && products.length) {
      return products.map((prod) => prod.name).join(',');
    }
    return 'N/A';
  }

  ngOnDestroy() {
    this.formCtrlSub.unsubscribe();
  }
}
