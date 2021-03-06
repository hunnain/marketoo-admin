import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';
import { Router } from '@angular/router';
import { ReimbursementService } from 'src/app/shared/service/reimbursement/reimbursement.service';
import { TranslateService } from '@ngx-translate/core';
// import { AllReimbursements } from '../../../shared/interfaces/reimbursement/reimbursement';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { reimbursementDB } from '../../../shared/tables/reimbursementDB';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as chartData from '../../../shared/data/chart';
@Component({
  selector: 'app-ads-trend',
  templateUrl: './ads-trend.component.html',
  styleUrls: ['./ads-trend.component.scss'],
})
export class AdsTrendComponent implements OnInit {
  public reimbursrments = [];
  public selected = [];
  public loading: boolean = false;
  public prodSortFilter = '1';
  public productStatus: string = '1';
  public chart3 = chartData.barChart1;
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
    private reimbursementService: ReimbursementService,
    public translate: TranslateService,
    private cs: CommonService
  ) {
    this.reimbursrments = reimbursementDB.list_return;
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }

  ngOnInit() {
    // this.fetchReimbursements();
  }
  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.fetchReimbursements();
  }

  fetchReimbursements() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}`;
    this.reimbursementService.getReimbursement(query).subscribe(
      (res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
          this.reimbursrments = res.body;
          console.log('reimbursement-res', res.headers.get('x-pagination'));
          this.pagination = JSON.parse(res.headers.get('X-Pagination'));
          console.log('pagination', this.pagination);
        }
      }
      //  ,err => {
      //   this.loading = false;
      //  }
    );
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.reimbursrments.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.reimbursrments = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onEdit(val) {
    console.log('row click', val);
    this.router.navigate(['/reimbursements/edit-reimbursement/', val]);
  }

  onDelete(val) {
    console.log('row click', val);
  }

  setPage(page) {
    console.log('page--', page);
  }
}
