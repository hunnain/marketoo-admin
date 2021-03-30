import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AuthServiceService } from 'src/app/shared/service/auth-service/auth-service.service';
import { CommonService } from 'src/app/shared/service/common.service';
import { SellerCustomerService } from 'src/app/shared/service/seller-customer-service/seller-customer.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up-data-view.component.html',
  styleUrls: ['./sign-up-data-view.component.scss'],
})
export class SignUpComponent implements OnInit {
  public isTranslate: boolean = false;
  public formData = {
    name: 'asd',
    deliver: '',
    placeProduct: '',
    avgPrice: '',
    instagram: '',
    facebook: '',
    website: '',
    provideProduct: '',
    category: '',
    designHall: '',
    brandName: '',
    refree: '',
    identity: '',
    email: '',
    contact: '',
    country: '',
    gender: '',
    nickName: '',
  };
  public sellerForm: FormGroup;
  public brandForm: FormGroup;
  public counter: number = 1;
  public loading: boolean = false;
  public productWishImages: Array<string> = [];
  public url = [
    {
      img: 'assets/images/attach.png',
    },
    {
      img: 'assets/images/attach.png',
    },
    {
      img: 'assets/images/attach.png',
    },
    {
      img: 'assets/images/attach.png',
    },
    {
      img: 'assets/images/attach.png',
    },
  ];
  prefix = 'seller';
  id = '';
  signUpData = null;
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private translate: TranslateService,
    private sellerCustomerService: SellerCustomerService,
    private cs: CommonService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });

    if (this.activeRoute.params['value'].id) {
      this.id = this.activeRoute.params['value'].id;
      this.fetchById(this.id);
    }
    this.sellerForm = this.fb.group({
      chineseFname: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
        ],
      ],
      englishFname: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}'),
        ],
      ],
      password: ['', [Validators.required]],
      sellerIdentity: ['', [Validators.required]],
      nick_name: ['', [Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
      contactNo: ['', [Validators.required]],
      hdySellBefore: [''],
      hdyHearAbtMarketoo: [''],
      interestedToJoinWm: [true],
      refereeUrl: [
        '',
        [
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
    });
    this.brandForm = this.fb.group({
      brandName: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
        ],
      ],
      designHallUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      brandUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      productCategory: ['', [Validators.required]],
      facebookUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      instaUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      avgPricePerProduct: ['', [Validators.required]],
      placeOfProduct: ['', [Validators.required]],
      deliverFrom: ['', [Validators.required]],
    });
  }

  fetchById(id) {
    // this.loading = true;
    this.sellerCustomerService.getById(this.prefix, id).subscribe((res) => {
      // console.log(res);
      if (res) {
        console.log('fetch res---', res.body);
        this.signUpData = res.body || {};
        this.cs.isLoading.next(false);
        // this.fetching = false;
      }
    });
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  //FileUpload
  imgs = [];
  readUrl(event: any, i) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      // this.url[i].img = reader.result.toString();
      let img = reader.result.toString();
      this.productWishImages[i] = reader.result.toString();
      let splited = img.split('base64,');
      let byteImg = splited[1];
      console.log(splited);
      this.imgs[i] = byteImg;
    };
  }

  ngOnInit() {}

  public config1: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    url: null,
    autoProcessQueue: false,
    autoQueue: false,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
  };

  public onUploadInit(args: any): void {}

  public onUploadError(args: any): void {}

  public onUploadSuccess(args: any): void {}

  changeLanguage() {
    this.isTranslate = !this.isTranslate;
    console.log(this.isTranslate, isPlatformBrowser(this.platformId));

    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(this.isTranslate ? 'zh-Hant' : 'en');
    }
  }

  createSeller() {
    // console.log('seller info',this.sellerForm.value)
    // console.log('brand info',this.brandForm.value)
    // console.log('byteImages',this.imgs)

    let data = {
      ...this.sellerForm.value,
      brandUu: { ...this.brandForm.value, productWishImages: this.imgs },
    };
    this.loading = true;
    this.authService.signUp(data).subscribe(
      (res) => {
        if (res) {
          // console.log(res, 'response');
          this.cs.isLoading.next(false);
          this.loading = false;
          this.router.navigate(['/login']);
        }
      }
      // ,
      // (error) => {
      //   console.log(error, 'error');
      //   this.loading = false;
      // }
    );
  }
}
