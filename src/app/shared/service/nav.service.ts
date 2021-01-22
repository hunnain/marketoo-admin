import { Injectable, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { WINDOW } from './windows.service';
// Menu
export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root',
})
export class NavService {
  public screenWidth: any;
  public collapseSidebar: boolean = false;

  constructor(@Inject(WINDOW) private window) {
    this.onResize();
    if (this.screenWidth < 991) {
      this.collapseSidebar = true;
    }
  }

  // Windows width
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }

  MENUITEMS: Menu[] = [
    {
      path: '/dashboard/default',
      title: 'sidebar_Home',
      icon: 'home',
      type: 'link',
      badgeType: 'primary',
      active: false,
    },
    {
      // path: '/sellers-customers',
      // title: 'sidebar_Seller_Customer',
      // icon: 'user',
      // type: 'link',
      // badgeType: 'primary',
      // active: false,
      //
      title: 'sidebar_Seller_Customer',
      icon: 'user',
      type: 'sub',
      active: false,
      children: [
        {
          path: '/sellers-customers/seller',
          title: 'sidebar_Sc_Seller',
          type: 'link',
        },
        {
          path: '/sellers-customers/customer',
          title: 'sidebar_Sc_Customer',
          type: 'link',
        },
      ],
      // title: 'sidebar_Seller_Customer',
      // icon: 'user',
      // type: 'sub',
      // children: [
      //   { path: '/settings/profile', title: 'sidebar_Profile', type: 'link' },
      // ],
    },
    {
      title: 'sidebar_All_Orders',
      icon: 'dollar-sign',
      type: 'sub',
      active: false,
      children: [
        { path: '/sales/orders', title: 'sidebar_Orders', type: 'link' },
        // { path: '/sales/transactions', title: 'Transactions', type: 'link' },
      ],
    },
    {
      path: '/reimbursement',
      title: 'sidebar_Reimbursement',
      icon: 'user',
      type: 'link',
      badgeType: 'primary',
      active: false,
      // title: 'sidebar_Reimbursement',
      // icon: 'box',
      // type: 'sub',
      // active: false,
      // children: [
      //   {
      //     path: '/reimbursement/list-reimbursements',
      //     title: 'sidebar_Product_List',
      //     type: 'link',
      //   },
      //   {
      //     path: '/products/physical/add-product',
      //     title: 'sidebar_Add_Product',
      //     type: 'link',
      //   },
      //   // 	title: 'Physical', type: 'sub', children: [
      //   // 		{ path: '/products/physical/category', title: 'Category', type: 'link' },
      //   // 		{ path: '/products/physical/sub-category', title: 'Sub Category', type: 'link' },
      //   // 		{ path: '/products/physical/product-list', title: 'Product List', type: 'link' },
      //   // 		{ path: '/products/physical/product-detail', title: 'Product Detail', type: 'link' },
      //   // 		{ path: '/products/physical/add-product', title: 'Add Product', type: 'link' },
      //   // 	]
      //   // },
      //   // {
      //   // 	title: 'digital', type: 'sub', children: [
      //   // 		{ path: '/products/digital/digital-category', title: 'Category', type: 'link' },
      //   // 		{ path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
      //   // 		{ path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
      //   // 		{ path: '/products/digital/digital-add-product', title: 'Add Product', type: 'link' },
      //   // 	]
      //   // },
      // ],
    },

    {
      title: 'sidebar_Coupons_Store_Credit',
      icon: 'tag',
      type: 'sub',
      active: false,
      children: [
        {
          path: '/coupons/list-coupons',
          title: 'sidebar_List_Coupons',
          type: 'link',
        },
        {
          path: '/coupons/create-coupons',
          title: 'sidebar_Create_Coupons',
          type: 'link',
        },
        {
          path: '/coupons/create-store-credit',
          title: 'create_Store_Credit',
          type: 'link',
        },
      ],
    },

    {
      path: '/my-messages',
      title: 'sidebar_My_Messages',
      icon: 'message-square',
      type: 'link',
      badgeType: 'primary',
      active: false,
    },
    {
      title: 'sidebar_Ads_Revenue_Trend',
      icon: 'trending-up',
      type: 'sub',
      active: false,
      children: [
        {
          path: '/ads/ads-revenue',
          title: 'sidebar_Adds_Revenue',
          type: 'link',
        },
        {
          path: '/ads/ads-trend',
          title: 'sidebar_Adds_Trends',
          type: 'link',
        },
      ],
    },
    {
      path: '/return-exchange',
      title: 'sidebar_Return_Exchange',
      icon: 'package',
      type: 'link',
      badgeType: 'primary',
      active: false,
    },
    {
      path: '/notifications',
      title: 'sidebar_Notifications',
      icon: 'bell',
      type: 'link',
      badgeType: 'primary',
      active: false,
    },
    {
      path: '/campiagn',
      title: 'sidebar_Campaign',
      icon: 'package',
      type: 'link',
      badgeType: 'primary',
      active: false,
    },
    {
      path: '/promotion',
      title: 'sidebar_Promotion',
      icon: 'package',
      type: 'link',
      badgeType: 'primary',
      active: false,
    },
    // {
    //   path: '/weekend-markets',
    //   title: 'sidebar_Weekend_Markets',
    //   icon: 'package',
    //   type: 'link',
    //   badgeType: 'primary',
    //   active: false,
    // },
    // {
    //   path: '/about-us',
    //   title: 'sidebar_About_Us',
    //   icon: 'package',
    //   type: 'link',
    //   badgeType: 'primary',
    //   active: false,
    // },
    {
      title: 'sidebar_About_Us',
      icon: 'trending-up',
      type: 'sub',
      active: false,
      children: [
        {
          path: '/about-us/about-us',
          title: 'sidebar_About_Us',
          type: 'link',
        },
        {
          path: '/about-us/banner',
          title: 'sidebar_About_Us_banner',
          type: 'link',
        },
      ],
    },
    // {
    // 	title: 'Pages', icon: 'clipboard', type: 'sub', active: false, children: [
    // 		{ path: '/pages/list-page', title: 'List Page', type: 'link' },
    // 		{ path: '/pages/create-page', title: 'Create Page', type: 'link' },
    // 	]
    // },
    // {
    // 	title: 'Media', path: '/media', icon: 'camera', type: 'link', active: false
    // },
    // {
    // 	title: 'Menus', icon: 'align-left', type: 'sub', active: false, children: [
    // 		{ path: '/menus/list-menu', title: 'Menu Lists', type: 'link' },
    // 		{ path: '/menus/create-menu', title: 'Create Menu', type: 'link' },
    // 	]
    // },
    // {
    // 	title: 'Users', icon: 'user-plus', type: 'sub', active: false, children: [
    // 		{ path: '/users/list-user', title: 'User List', type: 'link' },
    // 		{ path: '/users/create-user', title: 'Create User', type: 'link' },
    // 	]
    // },
    // {
    // 	title: 'Vendors', icon: 'users', type: 'sub', active: false, children: [
    // 		{ path: '/vendors/list-vendors', title: 'Vendor List', type: 'link' },
    // 		{ path: '/vendors/create-vendors', title: 'Create Vendor', type: 'link' },
    // 	]
    // },
    // {
    // 	title: 'Localization', icon: 'chrome', type: 'sub', children: [
    // 		{ path: '/localization/translations', title: 'Translations', type: 'link' },
    // 		{ path: '/localization/currency-rates', title: 'Currency Rates', type: 'link' },
    // 		{ path: '/localization/taxes', title: 'Taxes', type: 'link' },
    // 	]
    // },
    // {
    // 	title: 'Reports', path: '/reports', icon: 'bar-chart', type: 'link', active: false
    // },
    // {
    // 	title: 'Invoice', path: '/invoice', icon: 'archive', type: 'link', active: false
    // },
    // {
    // 	title: 'Login', path: '/auth/login', icon: 'log-in', type: 'link', active: false
    // }
  ];
  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
