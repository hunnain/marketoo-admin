import { Component, OnInit } from '@angular/core';
import { AboutUsService } from 'src/app/shared/service/about-us/about-us.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CommonService } from 'src/app/shared/service/common.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  editable: boolean = false;
  loading: boolean = false;
  keys = [
    'ab_privacy_policies',
    'ab_contact_info',
    'ab_faq',
    'ab_about_shop',
    'ab_ads_policies',
    'ab_terms_conditions',
    'ab_weekend_marketoo',
    'ab_return_exchange_policy',
  ];
  aboutUs = {};
  public tabId;
  ab_privacy_policies: string = '';
  ab_contact_info: string = '';
  ab_faq: string = '';
  ab_about_shop: string = '';
  ab_ads_policies: string = '';
  ab_terms_conditions: string = '';
  ab_weekend_marketoo: string = '';
  ab_return_exchange_policy: string = '';
  updateObj = {};
  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        'bold',
        'insertImage',
        'insertVideo',
        'link',
        'unlink',
        'toggleEditorMode',
        'textColor',
        'backgroundColor',
      ],
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  constructor(
    private aboutUsService: AboutUsService,
    private cs: CommonService
  ) {
    this.fetchAboutUs();
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }

  // toolbarHiddenButtons: [
  //   [
  //     'undo',
  //     'redo',
  //     'bold',
  //     'italic',
  //     'underline',
  //     'strikeThrough',
  //     'subscript',
  //     'superscript',
  //     'justifyLeft',
  //     'justifyCenter',
  //     'justifyRight',
  //     'justifyFull',
  //     'indent',
  //     'outdent',
  //     'insertUnorderedList',
  //     'insertOrderedList',
  //     'heading',
  //     'fontName'
  //   ],
  //   [
  //     'fontSize',
  //     'textColor',
  //     'backgroundColor',
  //     'customClasses',
  //     'link',
  //     'unlink',
  //     'insertImage',
  //     'insertVideo',
  //     'insertHorizontalRule',
  //     'removeFormat',
  //     'toggleEditorMode'
  //   ]
  // ];
  // generateConfig() {
  //   for (let i = 1; i < 6; i++) {
  //     this[`config${i}`] =
  //   }
  // }

  ngOnInit(): void {}

  fetchAboutUs() {
    this.loading = true;
    this.aboutUsService.getAboutUs().subscribe(
      (res) => {
        if (res) {
          let noDataMsg = 'No Data Available';
          // this.cs.isLoading.next(false);
          this.loading = false;
          let data = res.body;
          this.setData(data);
          this.updateObj = {
            ab_faq: data.faqs || noDataMsg,
            ab_about_shop: data.aboutShop || noDataMsg,
            ab_ads_policies: data.adsPolicies || noDataMsg,
            ab_contact_info: data.contactInfo || noDataMsg,
            ab_privacy_policies: data.privacyPolicies || noDataMsg,
            ab_terms_conditions: data.termsAndConditions || noDataMsg,
            ab_weekend_marketoo: data.weekendMarketoo || noDataMsg,
            ab_return_exchange_policy: data.returnExchangePolicy || noDataMsg,
          };
        }
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  setData = (data) => {
    this.ab_privacy_policies = data.privacyPolicies;
    this.ab_contact_info = data.contactInfo;
    this.ab_faq = data.faqs;
    this.ab_about_shop = data.aboutShop;
    this.ab_ads_policies = data.adsPolicies;
    this.ab_terms_conditions = data.termsAndConditions;
    this.ab_weekend_marketoo = data.weekendMarketoo;
    this.ab_return_exchange_policy = data.returnExchange;
  };

  onEditClick() {
    this.editable = !this.editable;
  }

  onUpdate() {
    console.log(this.ab_privacy_policies, '55555');
    this.loading = true;
    let tempObj = {
      Faqs: this.updateObj['ab_faq'],
      AboutShop: this.updateObj['ab_about_shop'],
      AdsPolicies: this.updateObj['ab_ads_policies'],
      ContactInfo: this.updateObj['ab_contact_info'],
      PrivacyPolicies: this.updateObj['ab_privacy_policies'],
      TermsAndConditions: this.updateObj['ab_terms_conditions'],
      WeekendMarketoo: this.updateObj['ab_weekend_marketoo'],
      ReturnExchangePolicy: this.updateObj['ab_return_exchange_policy'],
    };
    console.log(tempObj);

    this.aboutUsService.updateAboutUs(tempObj).subscribe(
      (res) => {
        this.setData(res);
        this.editable = false;
        this.cs.isLoading.next(false);
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  handleChange(data, key) {
    console.log(data, key);
    let obj = { ...this.updateObj, [key]: data };
    this.updateObj = obj;
    console.log(this.updateObj);
  }

  changeTab(tab) {
    console.log('tab--', tab);
    // this.tabId = tab.panelId
    if (!this.tabId || this.tabId !== tab.panelId) {
      this.tabId = tab.panelId;
    } else {
      this.tabId = undefined;
    }
  }
}
