import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'sellers-customers',
    loadChildren: () =>
      import('../../components/seller-customer/seller-customer.module').then(
        (m) => m.SellerCustomerModule
      ),
    data: {
      breadcrumb: 'Sellers & Customers',
    },

    // path: 'products',
    // loadChildren: () =>
    //   import('../../components/products/products.module').then(
    //     (m) => m.ProductsModule
    //   ),
    // data: {
    //   breadcrumb: 'Products',
    // },
  },
  {
    path: 'reimbursement',
    loadChildren: () =>
      import('../../components/reimbursement/reimbursement.module').then(
        (m) => m.ReimbursementsModule
      ),
    data: {
      breadcrumb: 'Reimbursement',
    },
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('../../components/sales/sales.module').then((m) => m.SalesModule),
    data: {
      breadcrumb: 'Sales',
    },
  },
  {
    path: 'coupons',
    loadChildren: () =>
      import('../../components/coupons/coupons.module').then(
        (m) => m.CouponsModule
      ),
    data: {
      breadcrumb: 'Coupons',
    },
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('../../components/pages/pages.module').then((m) => m.PagesModule),
    data: {
      breadcrumb: 'Pages',
    },
  },
  {
    path: 'media',
    loadChildren: () =>
      import('../../components/media/media.module').then((m) => m.MediaModule),
  },
  {
    path: 'menus',
    loadChildren: () =>
      import('../../components/menus/menus.module').then((m) => m.MenusModule),
    data: {
      breadcrumb: 'Menus',
    },
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../../components/users/users.module').then((m) => m.UsersModule),
    data: {
      breadcrumb: 'Users',
    },
  },
  {
    path: 'vendors',
    loadChildren: () =>
      import('../../components/vendors/vendors.module').then(
        (m) => m.VendorsModule
      ),
    data: {
      breadcrumb: 'Vendors',
    },
  },
  {
    path: 'localization',
    loadChildren: () =>
      import('../../components/localization/localization.module').then(
        (m) => m.LocalizationModule
      ),
    data: {
      breadcrumb: 'Localization',
    },
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('../../components/reports/reports.module').then(
        (m) => m.ReportsModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('../../components/setting/setting.module').then(
        (m) => m.SettingModule
      ),
    data: {
      breadcrumb: 'Settings',
    },
  },
  {
    path: 'invoice',
    loadChildren: () =>
      import('../../components/invoice/invoice.module').then(
        (m) => m.InvoiceModule
      ),
    data: {
      breadcrumb: 'Invoice',
    },
  },
  {
    path: 'my-messages',
    loadChildren: () =>
      import('../../components/messages/messages.module').then(
        (m) => m.MessagesModule
      ),
    data: {
      breadcrumb: 'My Messages',
    },
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('../../components/notification/notification.module').then(
        (m) => m.NotificationModule
      ),
    data: {
      breadcrumb: 'Notifications',
    },
  },
  {
    path: 'ads',
    loadChildren: () =>
      import(
        '../../components/adds-revenue-trends/ads-revenue-trend.module'
      ).then((m) => m.AddsRevenueTrendModule),
    data: {
      breadcrumb: 'Ads',
    },
  },
  {
    path: 'campaign',
    loadChildren: () =>
      import('../../components/campaign/campaign.module').then(
        (m) => m.CampaignModule
      ),
    data: {
      breadcrumb: 'campaign',
    },
  },
  {
    path: 'promotion',
    loadChildren: () =>
      import('../../components/promotion/promotion.module').then(
        (m) => m.PromotionModule
      ),
    data: {
      breadcrumb: 'Promotion',
    },
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('../../components/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
    data: {
      breadcrumb: 'About Us',
    },
  },
  {
    path: 'boosting',
    loadChildren: () =>
      import('../../components/boosting/boosting.module').then(
        (m) => m.BoostingModule
      ),
    data: {
      breadcrumb: 'Boosting',
    },
  },
  {
    path: 'return-exchange',
    loadChildren: () =>
      import('../../components/return-exchange/return-exchange.module').then(
        (m) => m.ReturnExchangeModule
      ),
    data: {
      breadcrumb: 'Return & Exchange',
    },
  },
  {
    path: 'refer-seller',
    loadChildren: () =>
      import('../../components/refer/refer.module').then((m) => m.ReferModule),
    data: {
      breadcrumb: 'Refer',
    },
  },
  {
    path: 'editor-choice',
    loadChildren: () =>
      import('../../components/editor-choice/editor-choice.module').then(
        (m) => m.EditorChoiceModule
      ),
    data: {
      breadcrumb: 'Editor Choice',
    },
  },
  {
    path: 'push-notifications',
    loadChildren: () =>
      import('../../components/push-notifications/push-notification.module').then((m) => m.PushNotificationModule),
    data: {
      breadcrumb: 'Push Notification',
    },
  }
];
