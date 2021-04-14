import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CommonService } from 'src/app/shared/service/common.service';
import { ReportProductService } from 'src/app/shared/service/report-product/report-product.service';
// import { returnDB } from '../../../shared/tables/return-list';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-report-product',
  templateUrl: './report-product.component.html',
  styleUrls: ['./report-product.component.scss'],
})
export class ReportProductComponent implements OnInit {
  public reportProduct = [];
  public closeResult: string;
  public temp = [];
  public loading = false;
  textMessage = '';
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
    private modalService: NgbModal,
    private router: Router,
    private rxService: ReportProductService,
    private cs: CommonService
  ) {
    this.fetchOrders();
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }

  openModal(content, data) {
    console.log(content, data);

    this.open(content);
  }

  open(content) {
    console.log(content);

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
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

  onSendMessage(): void {
    this.loading = true;
    // this.rxService
    //   .sendMessage({ receiverId: '', text: this.textMessage })
    //   .subscribe((res) => {
    //     console.log(res);
    //     this.textMessage = '';
    //     this.loading = false;
    //     this.modalService.dismissAll('update');
    //   });
    console.log(this.textMessage, 'Msg Sent');
  }

  fetchOrders() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}`;
    this.rxService.getReportProduct(query).subscribe(
      (res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
          this.reportProduct = res.body;
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
