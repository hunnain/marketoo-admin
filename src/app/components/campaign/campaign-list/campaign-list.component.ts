import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CampaignService } from 'src/app/shared/service/campaign/campaign.service';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
})
export class CampaignListComponent implements OnInit {
  public campaigns = [];
  public temp = [];
  public loading = false;
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
    private campaignService: CampaignService,
    private cs: CommonService
  ) {
    this.getCampaigns();
  }

  ngOnInit() {}

  onAdd() {
    let route = `/campaign/create-campaign`;
    this.router.navigate([route]);
  }
  
  onEdit(row) {
    let route = `/campaign/edit-campaign/${row.replace(/#/g, '')}`;
    this.router.navigate([route]);
  }

  onDelete(row) {
    console.log(row, 'delete');
    this.campaignService.removeCampaign(row).subscribe((res) => {
      console.log('deleted');
      this.getCampaigns();
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
          this.campaigns = res.body;
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
