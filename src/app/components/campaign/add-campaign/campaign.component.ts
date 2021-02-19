import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private cs: CommonService
  ) {
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }
  public name: string = '';
  template = '';
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
    console.log(data, key);
    this.template = data;
    // console.log(this.updateObj);
  }

  onAddCampaign() {
    console.log(this.name, this.template);
    this.loading = true;
    this.campaignService
      .createCampaign({
        name: this.name,
        text: this.template,
        status: 'Drafted',
        publish: 'Immediate',
        template: {
          bold: true,
          color: 'black',
          italic: false,
          name: 'Arial',
          size: '16',
          underline: false,
        },
      })
      .subscribe((res) => {
        this.cs.isLoading.next(false);
        // this.getCampaigns();
        this.loading = false;
      });
  }

  onRedirect() {
    let route = `/campaign`;
    this.router.navigate([route]);
  }
}
