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
  aboutUs = {};
  privacyPolicies: string = '';
  contactInfo: string = '';
  faqs: string = '';
  aboutShop: string = '';
  adsPolicies: string = '';
  termsAndConditions: string = '';
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
          // this.cs.isLoading.next(false);
          this.loading = false;
          let data = res.body;
          this.setData(data);
          this.updateObj = {
            Faqs: data.faqs,
            AboutShop: data.aboutShop,
            AdsPolicies: data.adsPolicies,
            ContactInfo: data.contactInfo,
            PrivacyPolicies: data.privacyPolicies,
            TermsAndConditions: data.termsAndConditions,
          };
        }
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  setData = (data) => {
    this.privacyPolicies = data.privacyPolicies;
    this.contactInfo = data.contactInfo;
    this.faqs = data.faqs;
    this.aboutShop = data.aboutShop;
    this.adsPolicies = data.adsPolicies;
    this.termsAndConditions = data.termsAndConditions;
  };

  onEditClick() {
    this.editable = !this.editable;
  }

  onUpdate() {
    console.log(this.privacyPolicies, '55555');
    this.loading = true;
    this.aboutUsService.updateAboutUs({ ...this.updateObj }).subscribe(
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
    // console.log(data, key);
    let obj = { ...this.updateObj, [key]: data };
    this.updateObj = obj;
    console.log(this.updateObj);
  }
}
