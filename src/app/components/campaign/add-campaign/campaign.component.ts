import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  DropzoneComponent,
  DropzoneConfigInterface,
  DropzoneDirective,
} from 'ngx-dropzone-wrapper';
import { CampaignService } from 'src/app/shared/service/campaign/campaign.service';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent implements OnInit {
  constructor(
    private router: Router,
    private campaignService: CampaignService,
    private cs: CommonService,
    private modalService: NgbModal
  ) {
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }
  @ViewChild(DropzoneComponent, { static: false })
  componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective, { static: false })
  directiveRef?: DropzoneDirective;
  public closeResult: string;
  public name: string = '';
  status = 0;
  template = '';
  image = null;
  open(content) {
    console.log(content);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          // this.selectedRow = null;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          // this.selectedRow = null;
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

  ngOnInit(): void {
    // this.getCampaigns();
  }

  campaigns = [];
  public loading: boolean = false;

  // getCampaigns() {
  //   this.loading = true;
  //   this.campaignService.getAllCampaigns().subscribe((res) => {
  //     console.log(res);
  //     this.loading = false;
  //     this.campaigns = res.body;
  //   });
  // }

  // deleteCampaign(id) {
  //   console.log(id);
  //   this.loading = true;
  //   this.campaignService.removeCampaign(id).subscribe((res) => {
  //     this.getCampaigns();
  //     // this.loading = false;
  //   });
  // }

  goBack() {
    let route = `/campaign`;
    this.router.navigate([route]);
  }

  handleChange(data, key) {
    // console.log(data, key);
    this.template = data;
    // console.log(this.updateObj);
  }

  onAddCampaign() {
    // console.log(this.name, this.template);
    this.loading = true;
    this.campaignService
      .createCampaign({
        name: this.name,
        text: this.template,
        status: this.status,
        image: this.removeBase64(this.image.dataURL),
      })
      .subscribe((res) => {
        this.cs.isLoading.next(false);
        this.goBack();
        this.loading = false;
      });
  }
  onViewTemplate(content) {
    // console.log(this.template);
    this.open(content);
  }
  public config: DropzoneConfigInterface = {
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    addRemoveLinks: true,

    clickable: true,
    acceptedFiles: 'image/*',
    maxFilesize: 10,
    autoProcessQueue: false,
    autoQueue: false,
    createImageThumbnails: true
  };

  public onUploadError(args: any): void { }

  public fileAdded(file: File): void {
    console.log('💻', 'on dropzone file added', file);
    this.image = file;
  }
  public removeFile(file: any): void {
    console.log('💻', 'on dropzone remove', file);
    this.image = null;
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
}
