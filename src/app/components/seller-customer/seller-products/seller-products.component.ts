import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Button } from 'protractor';
import { CommonService } from 'src/app/shared/service/common.service';
import { SellerCustomerService } from 'src/app/shared/service/seller-customer-service/seller-customer.service';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.scss'],
})
export class SellerProductsComponent implements OnInit {
  loading: boolean = false;
  urls = ['', '', ''];
  tabsStructure = [
    {
      tab: 'Products',
      tabIcon: 'user',
      // buttons: ['Approve', 'Reject'],
    },
    { tab: 'Approved', tabIcon: 'settings', 
    // buttons: ['Remove From Approved'] 
  },
    { tab: 'Rejected', tabIcon: 'settings',
    //  buttons: ['Remove From Rejected']
     },
  ];
  constructor(
    private sellerService: SellerCustomerService,
    private cs: CommonService,
    private activeRoute: ActivatedRoute
  ) {
    if (this.activeRoute.params['value'].id)
      this.urls[0] = `admin/get-products-by-seller/${this.activeRoute.params['value'].id}`;

    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }
  // get-products-by-seller/MKSJvZu
  ngOnInit(): void {}

  generatePostData(data = [], status) {
    let temp = {};
    data.forEach((key) => {
      temp[key] = status;
    });
    return temp;
  }

  getData(data) {
    let postData = {};
    console.log(data);

    if (data.tab == 0) {
      if (data.button == 0) {
        postData = this.generatePostData(data.selected, 2);
      } else {
        postData = this.generatePostData(data.selected, 1);
      }
    } else if (data.tab == 1) {
      postData = this.generatePostData(data.selected, 0);
    } else {
      postData = this.generatePostData(data.selected, 0);
    }
    this.sellerService
      .approveRejectSellerProduct({ productList: postData })
      .subscribe((res) => {
        this.cs.isLoading.next(false);
        console.log(res);
      });
  }

  onEdit(id) {
    console.log(id);
  }
  onApprove(id) {
    let temp = { productList: { [id]: 2 } };
    this.updateProductStatus(temp);
  }
  onReject(data) {
    // where to put reason in payload
    let temp = { productList: { [data.id]: 1 } };
    this.updateProductStatus(temp);
  }
  onPending(id) {
    let temp = { productList: { [id]: 0 } };
    this.updateProductStatus(temp);
  }

  updateProductStatus(temp) {
    this.sellerService.approveRejectSellerProduct(temp).subscribe((res) => {
      this.cs.isLoading.next(false);
      console.log(res);
    });
  }
}
