import { Component,OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as chartData from '../../../shared/data/chart';


@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss']
})
export class MyPerformanceComponent implements OnInit {
  public closeResult: string;
  public productStatus: string = "1";
  public futureStatus: string;
  public pastStatus: string;

  public products = [
    {id:'1',text:"Product 1",additional:{
      img:'assets/images/digital-product/product-1.png'
    }},
    {id:'2',text:"Product 2",additional:{
      img:'assets/images/digital-product/product-2.png'
    }},
    {id:'3',text:"Product 3",additional:{
      img:'assets/images/digital-product/product-3.png'
    }},
    {id:'4',text:"Product 4",additional:{
      img:'assets/images/digital-product/product-4.png'
    }},
    {id:'5',text:"Product 5",additional:{
      img:'assets/images/digital-product/product-5.png'
    }},
    {id:'6',text:"Product 6",additional:{
      img:'assets/images/digital-product/product-6.png'
    }},
  ];

  public selectedProduct = {id:'1',text:"Product 1",additional:{img:'assets/images/digital-product/product-1.png'}}
  public prodSortFilter = "1"
  public chart3 = chartData.barChart1;

  constructor(private modalService: NgbModal,private activeModalService: NgbActiveModal) {}

  ngOnInit() {
  }

  selectProduct(event,prod){
    this.selectedProduct = prod;
  }

  open(content) {
     this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
    .result.then((result) => {
      console.log('result', result)
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      if(reason != 'update'){
        this.productStatus = this.pastStatus; 
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    });
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

  
  openChangeStatusModal(event,content){
    this.futureStatus = event;
    if(!this.pastStatus){
      this.pastStatus = this.productStatus;
    }
    this.open(content)
  }

  save(){
    this.pastStatus = this.productStatus;
    this.productStatus=this.futureStatus;
    this.modalService.dismissAll("update")
  }


}
