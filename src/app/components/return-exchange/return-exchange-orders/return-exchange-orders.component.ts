import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CommonService } from 'src/app/shared/service/common.service';
import { ReturnExchangeService } from 'src/app/shared/service/return-exchange/return-exchange.service';
import { returnDB } from '../../../shared/tables/return-list';
import * as moment from 'moment';

@Component({
  selector: 'app-return-exchange-orders',
  templateUrl: './return-exchange-orders.component.html',
  styleUrls: ['./return-exchange-orders.component.scss'],
})
export class ReturnExchanngeOrderComponent implements OnInit {
  public returnExchange = [];
  public temp = [];
  public loading = false;
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
  constructor(
    private router: Router,
    private rxService: ReturnExchangeService,
    private cs: CommonService
  ) {
    this.fetchOrders();
  }

  ngOnInit() {}

  onSelectRow(row) {
    let route = `/return-exchange/view-detail/${row.replace(/#/g, '')}`;
    this.router.navigate([route]);
  }

  getFormatDate(date) {
    return moment(date).format('MMM DD,YY');
  }

  getProductsName(products) {
    if (products && products.length) {
      return products.map((prod) => prod.name).join(',');
    }
    return 'N/A';
  }

  onNotify(row) {
    console.log(row);
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.fetchOrders();
  }

  fetchOrders() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}`;
    this.rxService.getReturnExchange(query).subscribe(
      (res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
          this.returnExchange = res.body;
          let data = JSON.parse(res.headers.get('X-Pagination'));
          if (data) {
            this.pagination = data;
          }
        }
      }
      //  ,err => {
      //   this.loading = false;
      //  }
    );
  }
}
