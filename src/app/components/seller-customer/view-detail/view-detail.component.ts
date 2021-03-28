import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '@ks89/angular-modal-gallery';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/shared/service/order-service/order.service';
import { CommonService } from 'src/app/shared/service/common.service';
import { SellerCustomerService } from 'src/app/shared/service/seller-customer-service/seller-customer.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss'],
  providers: [NgbRatingConfig],
})
export class ViewDetailComponent implements OnInit {
  public closeResult: string;
  public status: string;
  public refund_reason: string;
  public reason: string;
  public reasonDesc: string;
  public loading: boolean = false;
  public total: number;
  public img: string = 'assets/images/user.png';
  public blast_notification: boolean = false;

  public id = '';
  public prefix = '';
  details = {
    coupons: 0,
    onlinePaymentFee: 0,
    rating: 4,
    referrelDeduction: 0,
    refund: 0,
    shippingViaMarketooAccount: 0,
    shippingViaOwnAccount: 0,
    storeCredit: 80,
    totalCancelledOrders: 0,
    totalDeliveredOrders: 0,
    totalOrders: 12,
    totalRefundedOrders: 0,
    transactionsManagementFee: 0,
  };
  public selectedLang: string = 'en';
  constructor(
    private modalService: NgbModal,
    private translate: TranslateService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private sellerCustomerService: SellerCustomerService,
    private cs: CommonService
  ) {
    this.selectedLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((res) => {
      this.selectedLang = res.lang;
    });
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
    // console.log(this.activeRoute.url['value'][0].path);

    if (this.activeRoute.params['value'].id) {
      this.prefix = this.activeRoute.url['value'][0].path;
      this.id = this.activeRoute.params['value'].id;
      this.fetchById(this.id);
    }
  }

  open(content) {
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

  fetchById(id) {
    this.loading = true;
    this.sellerCustomerService.getById(this.prefix, id).subscribe((res) => {
      // console.log(res);
      if (res) {
        console.log('fetch res---', res.body);
        this.details = res.body || {};
        this.loading = false;
        this.cs.isLoading.next(false);
        // this.fetching = false;
      }
    });
  }

  updateStatus(status) {
    this.approveReject(status);
    // this.modalService.dismissAll('save button clicked');
  }

  //FileUpload
  // readUrlSizeImg(event: any) {
  //   if (event.target.files.length === 0) return;
  //   //Image upload validation
  //   var mimeType = event.target.files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     return;
  //   }
  //   // Image upload
  //   var reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   reader.onload = (_event) => {
  //     this.img = reader.result.toString();
  //   };
  // }

  // openInvoice(content) {
  //   this.open(content);
  // }

  // showDetail(content) {
  //   this.open(content);
  // }

  gotoProducts() {
    let route = `/sellers-customers/seller/${this.id}/product-list`;
    this.router.navigate([route]);
  }

  approveReject(status) {
    this.loading = true;
    this.sellerCustomerService
      .approveRejectSeller(this.prefix, {
        uuid: this.id,
        status,
        notification: this.blast_notification,
      })
      .subscribe((res) => {
        this.loading = false;
        this.cs.isLoading.next(false);
        console.log(res);
      });
  }
}
