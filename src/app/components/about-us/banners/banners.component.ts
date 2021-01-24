import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
})
export class BannersComponent implements OnInit {
  @ViewChild('addBannerModal') addBannerModal: ElementRef;
  public closeResult: string;
  public loading: boolean = false;
  public bannerImage;
  constructor(
    private modalService: NgbModal,
    // private productService: ProductService,
    private translate: TranslateService
  ) {}
  ngOnInit(): void {}

  saveBanner() {
    console.log('save');
  }

  getCroppedImage(croppedImg) {
    // console.log("crop image", croppedImg)
    this.bannerImage = croppedImg;
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

  onAddLabel() {
    // console.log('added', this.label);
    // if (this.label) this.totalAddedLabels.push(this.label);
    // this.label = '';
    this.modalService.dismissAll('close');
  }
  openAddModal() {
    this.open(this.addBannerModal);
  }
}
