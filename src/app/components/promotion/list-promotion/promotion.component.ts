import { Component, OnInit, ViewChild } from '@angular/core';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { reimbursementDB } from '../../../shared/tables/reimbursementDB';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { ReimbursementService } from 'src/app/shared/service/reimbursement/reimbursement.service';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from 'src/app/shared/service/common.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit {
  public reimbursrments = [];
  public selected = [];
  public loading: boolean = false;
  public closeResult: string;
  public title: string = '';
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
    private cs: CommonService,
    private modalService: NgbModal
  ) {
    this.reimbursrments = reimbursementDB.list_return;
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }

  open(content) {
    this.modalService
      .open(content, {
        size: 'md',
        backdrop: 'static',
        ariaLabelledBy: 'modal-basic-title',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onSelectRow(data) {
    console.log(data);
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

  addPromotion(content) {
    this.open(content);
  }

  onSubmit() {
    console.log('Submit');
  }
}