import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CommonService } from 'src/app/shared/service/common.service';
import { SellerCustomerService } from 'src/app/shared/service/seller-customer-service/seller-customer.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss'],
})
export class ApplicantsComponent implements OnInit {
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
  public closeResult: string;
  reason = '';
  rejectId = null;
  details: '';
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
    private modalService: NgbModal,
    private router: Router,
    private sellerService: SellerCustomerService,
    private cs: CommonService
  ) {
    // this.sellers = sellerCustomerDB.list_return;
  }

  open(content) {
    console.log(content);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.reason = null;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          this.reason = null;
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

  ngOnInit() {
    this.fetchSellers();
  }

  fetchById(id) {
    // this.loading = true;
    this.sellerService.getById('seller', id).subscribe((res) => {
      // console.log(res);
      if (res) {
        console.log('fetch res---', res.body);
        this.details = res.body;
        // this.fetching = false;
      }
      this.cs.isLoading.next(false);
    });
  }

  openFormModal(row, content) {
    this.fetchById(row.sellerId);
    let route = `seller/new-applicant/${row.sellerId}/form`;
    this.router.navigate([route]);
    // this.open(content);
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

  fetchSellers() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}&accountStatus=0`;
    this.sellerService
      .getFilteredSellerCustomer('sellers', query)
      // .map((dt) => {
      //   return {
      //     ...dt,
      //     body: ,
      //   };
      // })
      .subscribe(
        (res) => {
          console.log(res);
          if (res) {
            this.sellers = this.structureData(res.body || []);
            let paginate = JSON.parse(res.headers.get('X-Pagination'));
            if (paginate) this.pagination = paginate;
            this.loading = false;
            this.cs.isLoading.next(false);
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
  onConfirmModal(row, content) {
    this.rejectId = row.sellerId;
    this.open(content);
  }

  onApproveSeller(data) {
    let temp = {
      uuid: data.sellerId,
      status: 2,
    };
    this.updateStatus(temp);
  }
  onRejectSeller() {
    let temp = {
      uuid: this.rejectId,
      status: 1,
    };
    this.updateStatus(temp);
  }

  updateStatus(data) {
    this.loading = true;
    this.sellerService
      .approveRejectSeller('seller', {
        ...data,
        notification: true,
      })
      .subscribe((res) => {
        this.loading = false;
        this.cs.isLoading.next(false);
        console.log(res);
      });
  }
}
