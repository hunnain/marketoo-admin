import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { BannerService } from 'src/app/shared/service/banner/banner.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
})
export class BannersComponent implements OnInit {
  @ViewChild('addBannerModal') addBannerModal: ElementRef;
  public closeResult: string;
  public loading: boolean = false;
  public addMore: boolean = false;
  public banners: [];
  public bannerImage;
  public selectedBanner = null;
  isActive = new FormControl();
  constructor(
    private modalService: NgbModal,
    private bannerService: BannerService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.isActive.setValue(true);
    this.fetchBanners();
  }

  saveBanner() {
    console.log('save');
  }

  removeBase64(data) {
    let base = data;
    let splited = base.split('base64,');
    let byteImg = splited[1];
    return byteImg;
  }

  addBase64(data) {
    let base = `data:image/jpeg;base64,${data}`;
    return base;
  }

  addUpdateBanner() {
    let data = {
      IsActive: this.isActive.value,
      BannerImage: this.removeBase64(this.bannerImage),
    };
    console.log(data);

    this.loading = true;
    if (this.selectedBanner) {
      this.bannerService
        .updateBanner(this.selectedBanner.id, data)
        .subscribe((res) => {
          console.log(res);
          this.closeModal();
          // this.loading = false;
          this.fetchBanners();
        });
    } else {
      this.bannerService.AddBanner(data).subscribe((res) => {
        console.log(res);
        this.closeModal();
        // this.loading = false;
        this.fetchBanners();
      });
    }
  }

  getCroppedImage(croppedImg) {
    console.log('crop image', croppedImg);
    this.bannerImage = croppedImg;
  }

  onEdit(banner) {
    console.log('Edit', banner);
    this.selectedBanner = banner;
    this.isActive.setValue(banner.isActive);
    this.open(this.addBannerModal);
  }

  onDelete(banner) {
    console.log('Delete', banner);
    this.deleteBanner(banner.id);
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
    this.selectedBanner = null;
    this.open(this.addBannerModal);
  }

  closeModal() {
    this.selectedBanner = null;
    this.modalService.dismissAll('close');
  }

  fetchBanners() {
    this.loading = true;
    this.banners = [];
    this.bannerService.getAllBanners().subscribe(
      (res) => {
        if (res) {
          let noDataMsg = 'No Data Available';
          // this.cs.isLoading.next(false);
          this.loading = false;
          this.banners = res.body || [];
          this.addMore = this.banners.length < 3 ? true : false;
        }
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  deleteBanner(id) {
    this.bannerService.deleteBanner(id).subscribe(
      (res) => {
        if (res) {
          this.fetchBanners();
        }
      },
      (err) => {
        this.loading = false;
      }
    );
  }
}
