import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '@ks89/angular-modal-gallery';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/shared/service/order-service/order.service';
import { CommonService } from 'src/app/shared/service/common.service';
import { Order } from 'src/app/shared/interfaces/order';
import * as moment from 'moment';
import {
  OrderStatusEnum,
  PaymentStatusEnum,
} from 'src/app/enums/order-details';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  providers: [NgbRatingConfig],
})
export class OrderDetailComponent implements OnInit {
  public closeResult: string;
  public status: string;
  public loading: boolean = false;
  public reason: string;
  public reasonDesc: string;
  public payment_status;
  public total: number;
  public img: string = 'assets/images/user.png';
  public order: Order;
  textMessage = '';
  payStatus = '';
  public dummyData = {
    'order id': '#51240',
    products: [
      'assets/images/electronics/product/25.jpg',
      'assets/images/electronics/product/13.jpg',
      'assets/images/electronics/product/16.jpg',
    ],
    payment_status: 'Paid',
    payment_method: 'Stripe',
    invoice_no: '123456',
    shipment_method: 'SF Express',
    user_info: {
      name: 'John Doe',
      contact: '714-508-5350',
      address: '17601 N Thomas Hill Rd, Sturgeon, MO, 65284',
    },
    shipping_address: '560 Graysville Rd, Guthrie, KY, 42234',
    billing_address: '17601 N Thomas Hill Rd, Sturgeon, MO, 65284',
    order_status: 'Delivered',
    date: 'Dec 10,18',
    total: 54671,
  };
  public statusEnums;
  public paymentEnums;
  public orderId: string;
  public fetching: boolean = false;
  public blast_notification: boolean = false;
  public seller_id: string = '';
  public shippingCost = '';
  public trackingDetails = '';
  constructor(
    private modalService: NgbModal,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private cs: CommonService
  ) {
    this.statusEnums = OrderStatusEnum;
    this.paymentEnums = PaymentStatusEnum;
    // this.status = this.dummyData.order_status;
    if (this.activeRoute.params['value'].id) {
      this.orderId = this.activeRoute.params['value'].id;
      this.fetchOrderById(this.orderId);
    }
  }

  open(content) {
    console.log(content);

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.prodImage = '';
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          this.prodImage = '';
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

  ngOnInit() { }

  fetchOrderById(id) {
    this.loading = true;
    this.orderService.getOrderById(id).subscribe((res) => {
      if (res) {
        console.log('fetch res---', res.body);
        this.order = res.body;
        this.cs.isLoading.next(false);
        this.loading = false;
      }
    });
  }

  // changeTotal(content) {
  //   // this.total = Number(this.dummyData.total);
  //   this.open(content);
  // }

  updateTotal() {
    // this.dummyData.total = this.dummyData.total + this.total;

    let obj = {
      amount: this.total,
      orderId: Number(this.orderId),
      reason: this.reason,
    };
    if (this.reason == 'other') {
      obj['reason'] = this.reasonDesc || '';
    }
    this.orderService.updateOrderPrice(obj).subscribe((res) => {
      if (res) {
        console.log('fetch res---', res);
        // let obj: Order = res;
        // this.order = obj;
        this.fetchOrderById(this.orderId);
        this.total = undefined;
        this.reason = undefined
        this.modalService.dismissAll('save button clicked');
        // this.cs.isLoading.next(false);
        // this.loading = false;
      }
    });
  }

  onMessageSend() {
    console.log(this.textMessage, 'message sent');
  }
  openModal(content) {
    this.open(content);
  }

  updateStatus() {
    // this.dummyData.order_status = this.status;
    this.orderService
      .updateOrderStatus(this.orderId, this.status)
      .subscribe((res) => {
        this.fetchOrderById(this.orderId);
        console.log(res);
      });
    this.modalService.dismissAll('save button clicked');
  }

  changeShipmentMethod(content) {
    this.open(content);
  }

  //FileUpload
  readUrlSizeImg(event: any) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.img = reader.result.toString();
    };
  }

  openInvoice(content) {
    console.log(content);

    this.open(content);
  }

  formatDate(date = '') {
    if (date) return moment(date).format('MMM DD,YY');
    else return '---';
  }

  onSendMessage(): void {
    this.loading = true;
    this.orderService
      .sendMessage({
        receiverId: this.order.customerId,
        text: this.textMessage,
      })
      .subscribe((res) => {
        console.log(res);
        this.textMessage = '';
        this.loading = false;
        this.modalService.dismissAll('update');
      });
    console.log(this.textMessage, 'Msg Sent');
  }

  onUpdatePaymentStatus() {
    console.log(this.payStatus, 'Payment Status');
    this.loading = true;
    this.orderService
      .updatePaymentStatus(this.orderId, this.payStatus)
      .subscribe((res) => {
        console.log(res);
        this.order['paymentStatus'] = this.paymentEnums[this.payStatus];
        this.payStatus = null;
        this.loading = false;
        this.modalService.dismissAll('update');
      });
  }

  updateShippingMethodStatus() {
    let obj = {
      orderId: this.orderId,
      CourierService: '',
      IsMarketooAccount: false,
      shippingCost: this.shippingCost,
      trackingDetails: this.trackingDetails,
    };
    console.log(obj);

    this.loading = true;
    this.orderService.updateShippingMethod(obj).subscribe((res) => {
      console.log(res);
      this.loading = false;
    });
  }

  formetDate(date) {
    let formatedDate = moment(date).format('DD-MM-YYYY');
    return formatedDate;
  }

  prodImage: string = '';
  OpenImage(img, content) {
    this.prodImage = img;
    this.open(content);
  }
  downloadImage() {
    console.log('download')
  }
}
