import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { sellerCustomerDB } from '../../../shared/tables/seller-customerDB';
@Component({
  selector: 'app-seller-customer',
  templateUrl: './seller-customer.component.html',
  styleUrls: ['./seller-customer.component.scss'],
})
export class SellerCustomerComponent implements OnInit {
  public order = [];
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
  constructor(private router: Router) {
    this.order = sellerCustomerDB.list_return;
  }

  ngOnInit() {}

  onSelectRow(row) {
    let route = `/seller-customer/view-detail/${row.replace(/#/g, '')}`;
    this.router.navigate([route]);
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    // this.fetchOrders();
  }
}