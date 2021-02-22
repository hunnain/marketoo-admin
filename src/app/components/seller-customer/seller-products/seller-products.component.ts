import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';
import { SellerCustomerService } from 'src/app/shared/service/seller-customer-service/seller-customer.service';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.scss'],
})
export class SellerProductsComponent implements OnInit {
  loading: boolean = false;
  tabsStructure =  [
    {
      tab: 'Products',
      tabIcon: 'user',
      params: 'status=0',
      // buttons: ['Approve', 'Reject'],
      url: '',
      cardButtons: [true, true, true],
      rejectModal: true,
    },
    {
      tab: 'Approved',
      tabIcon: 'settings',
      params: 'status=2',
      cardButtons: [true, false, true],
      rejectModal: true,
      // buttons: ['Remove From Approved']
    },
    {
      tab: 'Rejected',
      tabIcon: 'settings',
      params: 'status=1',
      cardButtons: [true, true, false],
      rejectModal: true,
      //  buttons: ['Remove From Rejected']
    },
  ];
  constructor(
    private sellerService: SellerCustomerService,
    private cs: CommonService,
    private activeRoute: ActivatedRoute
  ) {
    let sellerId = this.activeRoute.params['value'].id;
    if (sellerId) {
      let url = `admin/get-products-by-seller/${sellerId}`;
      this.tabsStructure[0].url = url;
      this.tabsStructure[1].url = url;
      this.tabsStructure[2].url = url;
    }

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
