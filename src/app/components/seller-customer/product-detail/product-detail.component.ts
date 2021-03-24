import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '@ks89/angular-modal-gallery';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/shared/service/product-service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [NgbRatingConfig],
})
export class ProductDetailComponent implements OnInit {
  public closeResult: string;
  public counter: number = 1;
  public productId: '';
  public productDetails = null;
  public loading = false;
  public imagesRect: Image[] = [
    new Image(
      0,
      { img: 'assets/images/pro3/2.jpg' },
      { img: 'assets/images/pro3/1.jpg' }
    ),
    new Image(
      1,
      { img: 'assets/images/pro3/27.jpg' },
      { img: 'assets/images/pro3/27.jpg' }
    ),
  ];

  constructor(
    private modalService: NgbModal,
    config: NgbRatingConfig,
    private productService: ProductService,
    private activeRoute: ActivatedRoute
  ) {
    config.max = 5;
    config.readonly = false;
    this.productId = this.activeRoute.params['value'].product_id;
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

  increment() {
    if (this.counter <= this.productDetails.quantity) this.counter += 1;
  }

  decrement() {
    if (this.counter > 0) this.counter -= 1;
  }

  ngOnInit() {
    this.fetchProductById();
  }

  fetchProductById() {
    this.loading = true;
    this.productService.getProductById(this.productId).subscribe((res) => {
      console.log(res.body);
      this.imagesRect = [];
      this.productDetails = res.body;
      this.productDetails.imageUrls.map((url, ind) => {
        this.imagesRect.push(new Image(ind, { img: url }, { img: url }));
      });
      this.loading = false;
    });
  }
}
