import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '../../service/common.service';
import { ProductService } from '../../service/product-service/product.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product-tab-view',
  templateUrl: './product-tab-view.component.html',
  styleUrls: ['./product-tab-view.component.scss'],
})
export class ProductTabViewComponent implements OnInit {
  @Input() tabsHeading: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];
  @Input() tabsButtonLabels: string[] = [
    'tab 1 Button',
    'tab 1 Button',
    'tab 1 Button',
  ];
  reason: '';
  rejectId = null;
  @Input() tabsStructure = [
    {
      tab: 'Tab 1',
      tabIcon: 'user',
      buttons: ['button 1', 'button 2'],
      cardButtons: [true, true, true],
      url: 'product',
      rejectModal: true,
    },
    {
      tab: 'Tab 2',
      tabIcon: 'settings',
      buttons: ['button 1'],
      cardButtons: [true, false, true],
      url: 'product/get-editors-pick',
      rejectModal: true,
    },
  ];
  @Input() tabIcons: string[] = ['user', 'settings', 'settings'];
  @Input() tabUrls: string[] = [
    'product',
    'product/get-editors-pick',
    'product/get-editors-pick',
  ];

  @Output() sendSelected: EventEmitter<any> = new EventEmitter();
  @Output() onEditCard: EventEmitter<any> = new EventEmitter();
  @Output() onApproveCard: EventEmitter<any> = new EventEmitter();
  @Output() onRejectCard: EventEmitter<any> = new EventEmitter();
  @Output() onPendingCard: EventEmitter<any> = new EventEmitter();

  public loading: boolean = false;
  public closeResult: string;
  public filters = '';
  pagination = {
    CurrentPage: 1,
    HasNext: false,
    HasPrevious: false,
    PageSize: 10,
    TotalCount: 0,
    TotalPages: 1,
  };

  pageSizeOptions: number[] = [5, 10, 25, 50];
  public selectedLang: string = 'en';
  selectedTab = 0;

  constructor(
    private modalService: NgbModal,
    private productService: ProductService,
    private translate: TranslateService,
    private cs: CommonService
  ) {
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
    for (let index = 0; index < this.tabsStructure.length; index++) {
      this[`tab_list_${index}`] = [];
      this[`selected_tab_${index}`] = [];
    }
    this.selectedLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((res) => {
      this.selectedLang = res.lang;
    });
  }

  open(content) {
    console.log(content);

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.reason = null;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          this.reason = null;
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
    this.getTabData();
  }

  selectDeselectProd(data) {
    let id = data.target.name;
    let selected = [];
    selected = [...this[`selected_tab_${this.getTabIndex()}`]];
    if (selected.includes(id)) {
      let index = selected.indexOf(id);
      if (index != -1) selected.splice(index, 1);
    } else {
      selected.push(id);
    }
    this[`selected_tab_${this.getTabIndex()}`] = selected;
  }

  getChecked(id) {
    return this[`selected_tab_${this.getTabIndex()}`].includes(id);
  }

  checkDisabled(ind) {
    return !this[`selected_tab_${ind}`].length || this.loading;
  }

  sendIdsToParent(btnIndex) {
    let obj = {};
    let index = this.getTabIndex();
    obj = {
      selected: this[`selected_tab_${index}`],
      tab: index,
      button: btnIndex,
    };
    this.sendSelected.emit(obj);
    setTimeout(() => {
      this.reset();
    }, 3000);
  }

  reset() {
    this[`selected_tab_${this.getTabIndex()}`] = [];
    this.getTabData();
  }

  changeTab(data): void {
    this.selectedTab = data;
    this.getTabData();
  }

  getStateName(ind) {
    return `tab_list_${ind}`;
  }

  getTabProductData(ind) {
    return this[`tab_list_${ind}`];
  }

  getTabIndex() {
    let index;
    index = this.selectedTab;
    return Number(index);
  }

  generateUrl() {
    const { PageSize, CurrentPage } = this.pagination;
    let struct = this.tabsStructure[this.getTabIndex()];
    let url = `${struct['url']}?pageSize=${PageSize}&pageNumber=${CurrentPage}`;
    if (struct['params']) url = `${url}&${struct['params']}`;

    if (struct['url']) return url;
    else return '';
  }

  getTabData() {
    this[`tab_list_${this.getTabIndex()}`] = [];
    let url = this.generateUrl();
    if (url) {
      this.loading = true;

      this.productService.getCustomData(url).subscribe((res) => {
        let paginate = JSON.parse(res.headers.get('X-Pagination'));
        console.log('res', res, paginate);
        let templist = res.body || [];
        if (paginate) {
          this.pagination = paginate;
        }
        this.cs.isLoading.next(false);
        this.loading = false;
        this[`tab_list_${this.getTabIndex()}`] = JSON.parse(
          JSON.stringify(templist)
        );
        console.log(this[`tab_list_${this.getTabIndex()}`]);
      });
    }
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.getTabData();
  }

  pageNumberClick(pageNumber) {
    this.pagination['CurrentPage'] = pageNumber;
    this.getTabData();
  }

  prevPage() {
    if (this.pagination.CurrentPage > 1) {
      this.pagination['CurrentPage'] = this.pagination.CurrentPage - 1;
      this.getTabData();
    }
  }

  nextPage() {
    this.pagination['CurrentPage'] = this.pagination.CurrentPage + 1;
    this.getTabData();
  }
  
  onEdit(id) {
    console.log(id);
    this.onEditCard.emit(id);
  }

  onApprove(id) {
    console.log(id);
    this.onApproveCard.emit(id);
    setTimeout(() => {
      this.getTabData();
    }, 3000);
  }

  onReject() {
    // console.log(id);
    this.onRejectCard.emit({ id: this.rejectId, reason: this.reason });
    setTimeout(() => {
      this.getTabData();
      this.rejectId = null;
    }, 3000);
  }
  openConfirm(id, content, isModal) {
    if (isModal) {
      this.rejectId = id;
      this.open(content);
    } else {
      this.onRejectCard.emit(id);
      setTimeout(() => {
        this.getTabData();
        this.rejectId = null;
      }, 3000);
    }
  }
  onPending(id) {
    console.log(id);
    this.onPendingCard.emit(id);
  }
}
