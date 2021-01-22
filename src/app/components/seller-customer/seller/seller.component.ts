import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { sellerCustomerDB } from '../../../shared/tables/seller-customerDB';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss'],
})
export class SellerComponent implements OnInit {
  public order = [];
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
  constructor(private router: Router) {
    this.order = sellerCustomerDB.list_return;
  }

  ngOnInit() {}

  onSelectRow(row) {
    console.log(row);
    let route = `/sellers-customers/seller/view-detail/${23}`;
    this.router.navigate([route]);
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    // this.fetchOrders();
  }
}
