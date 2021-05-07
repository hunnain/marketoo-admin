import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CampaignService } from 'src/app/shared/service/campaign/campaign.service';
import { CommonService } from 'src/app/shared/service/common.service';
import * as moment from 'moment';
@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
})
export class CampaignListComponent implements OnInit {
  public campaigns = [];
  public temp = [];
  public loading = false;
  public selectedCampaign = null;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  selectedRow;
  public closeResult: string;
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
    private campaignService: CampaignService,
    private cs: CommonService,
    private modalService: NgbModal
  ) {
    this.getCampaigns();
  }

  open(content) {
    console.log(content);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.selectedRow = null;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          this.selectedRow = null;
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

  onAdd() {
    let route = `/campaign/create-campaign`;
    this.router.navigate([route]);
  }

  // onEdit(row) {
  //   let route = `/campaign/edit-campaign/${row.replace(/#/g, '')}`;
  //   this.router.navigate([route]);
  // }

  onDelete(row) {
    console.log(row, 'delete');
    this.campaignService.removeCampaign(row.id).subscribe((res) => {
      console.log('deleted');
      this.getCampaigns();
    });
  }

  onGetById(row) {
    console.log(row, 'get by id');
    this.campaignService.getCampaignById(row.id).subscribe((res) => {
      console.log('res', res.body);
      this.selectedCampaign = res.body;
      // this.getCampaigns();
    });
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.getCampaigns();
  }

  getCampaigns() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `?PageSize=${PageSize}&PageNumber=${CurrentPage}`;
    this.campaignService.getAllCampaigns(query).subscribe(
      (res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
          this.campaigns = this.structureData(res.body || []);
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

  structureData(data = []) {
    console.log(data);
    if (data)
      return data.map((item) => {
        return {
          ...item,
          // imageUrl: `<img src='${
          //   item.imageUrl || 'assets/images/user.png'
          // }' class='img-30 mr-2'>`,
          creationDate: item.creationDate
            ? moment(item.creationDate).format('YYYY-MM-DD')
            : '---',
        };
      });
  }

  onViewTemplate(row, content) {
    this.selectedRow = row;
    this.onGetById(row);
    this.open(content);
  }

  onPublish() {
    this.campaignService
      .updateCampaignStatus(this.selectedRow.id, 1)
      .subscribe((res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
        }
      });
  }
}
