function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{sIpu:function(t,e,n){"use strict";n.r(e),n.d(e,"AddsRevenueTrendModule",(function(){return L}));var a=n("ofXK"),o=n("1kSV"),i=n("3Pt+"),r=n("lDzL"),c=n("a5BO"),b=n("tyNb"),s=n("cy6r"),l=n("fXoL"),d=n("auHW"),p=n("sYmb"),g=n("EfS0"),u=n("pqks"),m=n("668k"),f=n("M9IT");function h(t,e){if(1&t){var n=l.Zb();l.Yb(0,"span",31),l.Yb(1,"i",32),l.kc("click",(function(){l.Hc(n);var t=e.value;return l.oc(2).onSelectRow(t)})),l.Xb(),l.Xb()}}function v(t,e){if(1&t){var n=l.Zb();l.Yb(0,"div",34),l.Yb(1,"mat-paginator",35),l.kc("page",(function(t){return l.Hc(n),l.oc(3).pageEvent(t)})),l.Xb(),l.Xb()}if(2&t){var a=l.oc(3);l.Cb(1),l.tc("pageIndex",a.pagination.CurrentPage-1)("length",a.pagination.TotalCount)("pageSize",a.pagination.PageSize)("pageSizeOptions",a.pageSizeOptions)}}function C(t,e){if(1&t&&l.Pc(0,v,2,4,"div",33),2&t){var n=l.oc(2);l.tc("ngIf",!n.loading)}}function _(t,e){if(1&t&&(l.Yb(0,"div",24),l.Yb(1,"ngx-datatable",25),l.Tb(2,"ngx-datatable-column",26),l.pc(3,"translate"),l.Tb(4,"ngx-datatable-column",27),l.pc(5,"translate"),l.Tb(6,"ngx-datatable-column",27),l.pc(7,"translate"),l.Tb(8,"ngx-datatable-column",27),l.pc(9,"translate"),l.Tb(10,"ngx-datatable-column",27),l.pc(11,"translate"),l.Tb(12,"ngx-datatable-column",27),l.pc(13,"translate"),l.Tb(14,"ngx-datatable-column",27),l.pc(15,"translate"),l.Yb(16,"ngx-datatable-column",28),l.pc(17,"translate"),l.Pc(18,h,2,0,"ng-template",29),l.Xb(),l.Yb(19,"ngx-datatable-footer"),l.Pc(20,C,1,1,"ng-template",30),l.Xb(),l.Xb(),l.Xb()),2&t){var n=l.oc();l.Cb(1),l.tc("rows",n.reimbursrments)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto"),l.Cb(1),l.uc("name",l.qc(3,13,"ads_investment_amount")),l.Cb(2),l.uc("name",l.qc(5,15,"ads_name")),l.Cb(2),l.uc("name",l.qc(7,17,"ads_seller_code")),l.Cb(2),l.uc("name",l.qc(9,19,"ads_advertise_date")),l.Cb(2),l.uc("name",l.qc(11,21,"ads_duration")),l.Cb(2),l.uc("name",l.qc(13,23,"ads_paid_keyword")),l.Cb(2),l.uc("name",l.qc(15,25,"ads_product_quality")),l.Cb(2),l.uc("name",l.qc(17,27,"ads_action"))}}var y,X=((y=function(){function t(e,n,a,o){var i=this;_classCallCheck(this,t),this.router=e,this.reimbursementService=n,this.translate=a,this.cs=o,this.reimbursrments=[],this.selected=[],this.loading=!1,this.pagination={CurrentPage:1,HasNext:!1,HasPrevious:!1,PageSize:10,TotalCount:0,TotalPages:1},this.pageSizeOptions=[5,10,25,50],this.reimbursrments=s.a.list_return,this.cs.isLoading.subscribe((function(t){i.loading=t}))}return _createClass(t,[{key:"onSelect",value:function(t){var e,n=t.selected;this.selected.splice(0,this.selected.length),(e=this.selected).push.apply(e,_toConsumableArray(n))}},{key:"onSelectRow",value:function(t){console.log(t)}},{key:"updateFilter",value:function(t){var e=t.target.value.toLowerCase(),n=this.reimbursrments.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e)||!e}));this.reimbursrments=n,this.table.offset=0}},{key:"ngOnInit",value:function(){}},{key:"pageEvent",value:function(t){console.log(t),this.pagination.PageSize=t.pageSize,this.pagination.CurrentPage=t.pageIndex+1,this.fetchReimbursements()}},{key:"fetchReimbursements",value:function(){var t=this,e=this.pagination,n=e.PageSize,a=e.CurrentPage;this.loading=!0,this.reimbursementService.getReimbursement("PageSize=".concat(n,"&PageNumber=").concat(a)).subscribe((function(e){e&&(t.cs.isLoading.next(!1),t.loading=!1,t.reimbursrments=e.body||[],console.log("reimbursement-res",e.headers.get("x-pagination")),t.pagination=JSON.parse(e.headers.get("X-Pagination")),console.log("pagination",t.pagination))}))}},{key:"onEdit",value:function(t){console.log("row click",t),this.router.navigate(["/reimbursements/edit-reimbursement/",t])}},{key:"onDelete",value:function(t){console.log("row click",t)}},{key:"setPage",value:function(t){console.log("page--",t)}}]),t}()).\u0275fac=function(t){return new(t||y)(l.Sb(b.d),l.Sb(d.a),l.Sb(p.d),l.Sb(g.a))},y.\u0275cmp=l.Mb({type:y,selectors:[["app-ads-revenue"]],viewQuery:function(t,e){var n;1&t&&l.Xc(r.d,!0),2&t&&l.Cc(n=l.lc())&&(e.table=n.first)},decls:75,vars:45,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-3","xl-50"],[1,"card","o-hidden","widget-cards"],[1,"dashboardReportBackground","card-body"],[1,"media","static-top-widget","row"],[1,"icons-widgets","col-4"],[1,"align-self-center","text-center"],[1,"font-warning",3,"icon"],[1,"media-body","col-8"],[1,"m-0"],[1,"mb-0"],[1,"counter",3,"CountTo","from","duration"],[1,"font-secondary",3,"icon"],[1,"col-xl-3","col-md-6","xl-50"],[1,"font-primary",3,"icon"],[1,"font-danger",3,"icon"],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"text-align","center"],[1,"card-body"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],["class","custom-datatable",4,"ngIf"],[1,"custom-datatable"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight"],["prop","amount",3,"name"],["prop","name",3,"name"],["prpp","action","sortable","false","prop","orderId",3,"name"],["ngx-datatable-cell-template",""],["ngx-datatable-footer-template",""],[2,"color","#f88379","cursor","pointer"],[1,"fa","fa-eye",3,"click"],["class","pagination","style","margin-bottom: 10px; width: -webkit-fill-available",4,"ngIf"],[1,"pagination",2,"margin-bottom","10px","width","-webkit-fill-available"],[2,"width","-webkit-fill-available",3,"pageIndex","length","pageSize","pageSizeOptions","page"]],template:function(t,e){1&t&&(l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"div",2),l.Yb(3,"div",3),l.Yb(4,"div",4),l.Yb(5,"div",5),l.Yb(6,"div",6),l.Yb(7,"div",7),l.Tb(8,"app-feather-icons",8),l.Xb(),l.Xb(),l.Yb(9,"div",9),l.Yb(10,"span",10),l.Rc(11),l.pc(12,"translate"),l.Xb(),l.Yb(13,"h3",11),l.Rc(14," $ "),l.Yb(15,"span",12),l.Rc(16),l.pc(17,"translate"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(18,"div",2),l.Yb(19,"div",3),l.Yb(20,"div",4),l.Yb(21,"div",5),l.Yb(22,"div",6),l.Yb(23,"div",7),l.Tb(24,"app-feather-icons",13),l.Xb(),l.Xb(),l.Yb(25,"div",9),l.Yb(26,"span",10),l.Rc(27),l.pc(28,"translate"),l.Xb(),l.Yb(29,"h3",11),l.Rc(30," $ "),l.Yb(31,"span",12),l.Rc(32),l.pc(33,"translate"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(34,"div",14),l.Yb(35,"div",3),l.Yb(36,"div",4),l.Yb(37,"div",5),l.Yb(38,"div",6),l.Yb(39,"div",7),l.Tb(40,"app-feather-icons",15),l.Xb(),l.Xb(),l.Yb(41,"div",9),l.Yb(42,"span",10),l.Rc(43),l.pc(44,"translate"),l.Xb(),l.Yb(45,"h3",11),l.Yb(46,"span",12),l.Rc(47),l.pc(48,"translate"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(49,"div",14),l.Yb(50,"div",3),l.Yb(51,"div",4),l.Yb(52,"div",5),l.Yb(53,"div",6),l.Yb(54,"div",7),l.Tb(55,"app-feather-icons",16),l.Xb(),l.Xb(),l.Yb(56,"div",9),l.Yb(57,"span",10),l.Rc(58),l.pc(59,"translate"),l.Xb(),l.Yb(60,"h3",11),l.Yb(61,"span",12),l.Rc(62),l.pc(63,"translate"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(64,"div",1),l.Yb(65,"div",17),l.Yb(66,"div",18),l.Yb(67,"div",19),l.Yb(68,"h5"),l.Rc(69),l.pc(70,"translate"),l.Xb(),l.Xb(),l.Yb(71,"div",20),l.Yb(72,"div",21),l.Tb(73,"app-loader",22),l.Xb(),l.Pc(74,_,21,29,"div",23),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()),2&t&&(l.Cb(8),l.tc("icon","navigation"),l.Cb(3),l.Sc(l.qc(12,27,"ads_total_revenue")),l.Cb(4),l.tc("CountTo",0)("from",0)("duration",2),l.Cb(1),l.Sc(l.qc(17,29,"ads_total_revenue_acc")),l.Cb(8),l.tc("icon","box"),l.Cb(3),l.Sc(l.qc(28,31,"ads_total_keyword_profit")),l.Cb(4),l.tc("CountTo",0)("from",0)("duration",2),l.Cb(1),l.Tc(" ",l.qc(33,33,"ads_total_keyword_profit_acc"),""),l.Cb(8),l.tc("icon","users"),l.Cb(3),l.Sc(l.qc(44,35,"ads_total_advertisers")),l.Cb(3),l.tc("CountTo",0)("from",0)("duration",2),l.Cb(1),l.Sc(l.qc(48,37,"ads_total_advertisers_acc")),l.Cb(8),l.tc("icon","users"),l.Cb(3),l.Sc(l.qc(59,39,"ads_total_advertise_prod")),l.Cb(3),l.tc("CountTo",0)("from",0)("duration",2),l.Cb(1),l.Sc(l.qc(63,41,"ads_total_advertise_prod_acc")),l.Cb(7),l.Sc(l.qc(70,43,"ads_heading")),l.Cb(4),l.tc("loading",e.loading),l.Cb(1),l.tc("ngIf",!e.loading))},directives:[u.a,c.a,m.a,a.l,r.d,r.b,r.a,r.e,r.c,f.a],pipes:[p.c],styles:['@charset "UTF-8";  .ngx-datatable .datatable-pager{display:block!important}h2[_ngcontent-%COMP%]{color:#333;font-size:28px;font-weight:300;line-height:1;letter-spacing:-.015em;margin-bottom:36px;max-width:600px}h2[_ngcontent-%COMP%]:before{background:#f88379;content:"";display:block;height:3px;margin:26px 0;width:50px}*[_ngcontent-%COMP%]{box-sizing:border-box;font-family:sans-serif}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}body[_ngcontent-%COMP%]{background-color:#eee;max-width:90%;margin:1.5em auto;padding:1rem}ul[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]{padding-left:0;overflow:hidden;display:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:1rem;background-color:#fff;list-style:none}thead[_ngcontent-%COMP%]{border-bottom:1px solid #eee}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{box-sizing:border-box;padding:12px 18px;font-size:12px}.eodr-data-table[_ngcontent-%COMP%]{border-bottom:1px solid #ebeff6;text-align:right;width:100%}.eodr-data-table-cell--non-numeric[_ngcontent-%COMP%]{text-align:left}.accordion[_ngcontent-%COMP%]{padding:0}.accordion--toggle[_ngcontent-%COMP%]{width:100%;display:block;background:#fff;border-bottom:1px solid #ebeff6;color:#000;padding:20px;border-radius:.15em;transition:background .3s ease}.accordion--toggle[_ngcontent-%COMP%]:hover{background:#fff}.accordion--item[_ngcontent-%COMP%]{background-color:#fff;position:relative;border-right:1px solid #ebeff6;border-bottom:1px solid #ebeff6;padding:2rem;text-align:center;flex-grow:1;flex-basis:100%}@media screen and (min-width:40em){.accordion--item[_ngcontent-%COMP%]{flex-basis:33.33%}}.accordion--item[_ngcontent-%COMP%]:last-child, .accordion--item[_ngcontent-%COMP%]:nth-child(3){border-right:none}.accordion--numberValue[_ngcontent-%COMP%]{font-size:6.25rem}.accordion--byline[_ngcontent-%COMP%]{color:#bbb;display:block;font-size:.75rem}.accordion--subitem[_ngcontent-%COMP%]{font-size:14px}.percentage-unit[_ngcontent-%COMP%]{font-size:16px;position:absolute;top:65px}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.toggle[_ngcontent-%COMP%]{position:relative}.is-collapsed[_ngcontent-%COMP%]:after, .is-expanded[_ngcontent-%COMP%]:after{font-family:FontAwesome;font-size:10px;position:absolute;right:25px;top:22px}.is-collapsed[_ngcontent-%COMP%]:after{content:"\uf078"}.is-expanded[_ngcontent-%COMP%]:after{content:"\uf077"}.is-expanded[_ngcontent-%COMP%]{color:#d60c8c}.on-target[_ngcontent-%COMP%]{color:green}.report-dashboard[_ngcontent-%COMP%]{margin-bottom:4rem}.report-dashboard[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-bottom:1rem}.report-dashboard-item[_ngcontent-%COMP%]{background-color:#fff;border-right:1px solid #ebeff6;border-bottom:1px solid #ebeff6;flex-grow:1;flex-basis:100%;text-align:center;padding:2rem;position:relative}.report-dashboard-item[_ngcontent-%COMP%]:last-child{border-right:none}@media screen and (min-width:20em){.report-dashboard-item[_ngcontent-%COMP%]{flex-basis:1%}}.report-dashboard-label[_ngcontent-%COMP%]{color:#999;display:block;font-size:.599rem;margin-bottom:.175rem}.report-dashboard-number[_ngcontent-%COMP%]{color:#525252;font-size:1.3rem}.dashboardReportBackground[_ngcontent-%COMP%]{background-color:#708238}']}),y),x=n("XjTe"),Y=n("Cr32");function P(t,e){1&t&&(l.Tb(0,"i",23),l.Rc(1),l.pc(2,"translate")),2&t&&(l.Cb(1),l.Sc(l.qc(2,1,"Boosting_result_trendingdown")))}function w(t,e){if(1&t&&(l.Yb(0,"div",12),l.Tb(1,"x-chartist",13),l.Xb()),2&t){var n=l.oc();l.Cb(1),l.tc("data",n.chart3.data)("type",n.chart3.type)("options",n.chart3.options)("events",n.chart3.events)}}function k(t,e){if(1&t&&(l.Yb(0,"div",12),l.Tb(1,"x-chartist",13),l.Xb()),2&t){var n=l.oc(2);l.Cb(1),l.tc("data",n.chart3.data)("type",n.chart3.type)("options",n.chart3.options)("events",n.chart3.events)}}function S(t,e){1&t&&(l.Tb(0,"i",24),l.Rc(1),l.pc(2,"translate"),l.Pc(3,k,2,4,"ng-template",16)),2&t&&(l.Cb(1),l.Tc("",l.qc(2,1,"Boosting_result_trendingup")," "))}function T(t,e){if(1&t){var n=l.Zb();l.Yb(0,"div",33),l.Yb(1,"mat-paginator",34),l.kc("page",(function(t){return l.Hc(n),l.oc(3).pageEvent(t)})),l.Xb(),l.Xb()}if(2&t){var a=l.oc(3);l.Cb(1),l.tc("pageIndex",a.pagination.CurrentPage-1)("length",a.pagination.TotalCount)("pageSize",a.pagination.PageSize)("pageSizeOptions",a.pageSizeOptions)}}function O(t,e){if(1&t&&l.Pc(0,T,2,4,"div",32),2&t){var n=l.oc(2);l.tc("ngIf",!n.loading)}}function M(t,e){if(1&t){var n=l.Zb();l.Yb(0,"div",25),l.Yb(1,"input",26),l.kc("keyup",(function(t){return l.Hc(n),l.oc().updateFilter(t)})),l.Xb(),l.Yb(2,"ngx-datatable",27),l.Tb(3,"ngx-datatable-column",28),l.pc(4,"translate"),l.Tb(5,"ngx-datatable-column",29),l.pc(6,"translate"),l.Tb(7,"ngx-datatable-column",30),l.pc(8,"translate"),l.Yb(9,"ngx-datatable-footer"),l.Pc(10,O,1,1,"ng-template",31),l.Xb(),l.Xb(),l.Xb()}if(2&t){var a=l.oc();l.Cb(2),l.tc("rows",a.reimbursrments)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto"),l.Cb(1),l.uc("name",l.qc(4,8,"ads_profile")),l.Cb(2),l.uc("name",l.qc(6,10,"ads_name")),l.Cb(2),l.uc("name",l.qc(8,12,"ads_reg_date"))}}var z,R,q,I=[{path:"",children:[{path:"ads-revenue",component:X,data:{title:"Revenue",breadcrumb:"Revenue"}},{path:"ads-trend",component:(z=function(){function t(e,n,a,o){var i=this;_classCallCheck(this,t),this.router=e,this.reimbursementService=n,this.translate=a,this.cs=o,this.reimbursrments=[],this.selected=[],this.loading=!1,this.prodSortFilter="1",this.productStatus="1",this.chart3=x.b,this.pagination={CurrentPage:1,HasNext:!1,HasPrevious:!1,PageSize:10,TotalCount:0,TotalPages:1},this.pageSizeOptions=[5,10,25,50],this.reimbursrments=s.a.list_return,this.cs.isLoading.subscribe((function(t){i.loading=t}))}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"pageEvent",value:function(t){console.log(t),this.pagination.PageSize=t.pageSize,this.pagination.CurrentPage=t.pageIndex+1,this.fetchReimbursements()}},{key:"fetchReimbursements",value:function(){var t=this,e=this.pagination,n=e.PageSize,a=e.CurrentPage;this.loading=!0,this.reimbursementService.getReimbursement("PageSize=".concat(n,"&PageNumber=").concat(a)).subscribe((function(e){e&&(t.cs.isLoading.next(!1),t.loading=!1,t.reimbursrments=e.body,console.log("reimbursement-res",e.headers.get("x-pagination")),t.pagination=JSON.parse(e.headers.get("X-Pagination")),console.log("pagination",t.pagination))}))}},{key:"updateFilter",value:function(t){var e=t.target.value.toLowerCase(),n=this.reimbursrments.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e)||!e}));this.reimbursrments=n,this.table.offset=0}},{key:"onEdit",value:function(t){console.log("row click",t),this.router.navigate(["/reimbursements/edit-reimbursement/",t])}},{key:"onDelete",value:function(t){console.log("row click",t)}},{key:"setPage",value:function(t){console.log("page--",t)}}]),t}(),z.\u0275fac=function(t){return new(t||z)(l.Sb(b.d),l.Sb(d.a),l.Sb(p.d),l.Sb(g.a))},z.\u0275cmp=l.Mb({type:z,selectors:[["app-ads-trend"]],viewQuery:function(t,e){var n;1&t&&l.Xc(r.d,!0),2&t&&l.Cc(n=l.lc())&&(e.table=n.first)},decls:65,vars:40,consts:[[1,"row",2,"margin-bottom","20px"],[1,"col-sm-12","col-md-6"],[1,"card","main-container",2,"height","100%"],[1,"card-header"],[1,"row"],[1,"col-12","col-sm-8",2,"display","flex","align-items","center","justify-content","flex-start"],[1,"font-primary",2,"color","#000 !important","margin-left","5px",3,"icon"],[1,"col-12","col-sm-4",2,"text-align","right"],[1,"form-control","digits",3,"ngModel","ngModelChange"],["value","1"],["value","2"],[1,"card-body"],[1,"market-chart"],[1,"board-chart","ct-golden-section",3,"data","type","options","events"],[1,"tab-coupon","mb-0"],["ngbTabTitle",""],["ngbTabContent",""],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"text-align","center"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],["class","custom-datatable",4,"ngIf"],[1,"icon-stats-down","mr-2"],[1,"icon-stats-up","mr-2"],[1,"custom-datatable"],["type","text","placeholder","Search...",1,"filter-ngx","form-control",3,"keyup"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight"],["prop","image",3,"name"],["prop","name",3,"name"],["prop","join_date",3,"name"],["ngx-datatable-footer-template",""],["class","pagination","style","margin-bottom: 10px; width: -webkit-fill-available",4,"ngIf"],[1,"pagination",2,"margin-bottom","10px","width","-webkit-fill-available"],[2,"width","-webkit-fill-available",3,"pageIndex","length","pageSize","pageSizeOptions","page"]],template:function(t,e){1&t&&(l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"div",2),l.Yb(3,"div",3),l.Yb(4,"div",4),l.Yb(5,"span",5),l.Yb(6,"h5"),l.Rc(7),l.pc(8,"translate"),l.Xb(),l.Tb(9,"app-feather-icons",6),l.Xb(),l.Yb(10,"span",7),l.Yb(11,"select",8),l.kc("ngModelChange",(function(t){return e.prodSortFilter=t})),l.Yb(12,"option",9),l.Rc(13),l.pc(14,"translate"),l.Xb(),l.Yb(15,"option",10),l.Rc(16),l.pc(17,"translate"),l.Xb(),l.Yb(18,"option",10),l.Rc(19),l.pc(20,"translate"),l.Xb(),l.Yb(21,"option",10),l.Rc(22),l.pc(23,"translate"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(24,"div",11),l.Yb(25,"div",12),l.Tb(26,"x-chartist",13),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(27,"div",1),l.Yb(28,"div",2),l.Yb(29,"div",3),l.Yb(30,"div",4),l.Yb(31,"span",5),l.Yb(32,"h5"),l.Rc(33),l.pc(34,"translate"),l.Xb(),l.Tb(35,"app-feather-icons",6),l.Xb(),l.Yb(36,"span",7),l.Yb(37,"select",8),l.kc("ngModelChange",(function(t){return e.prodSortFilter=t})),l.Yb(38,"option",9),l.Rc(39),l.pc(40,"translate"),l.Xb(),l.Yb(41,"option",10),l.Rc(42),l.pc(43,"translate"),l.Xb(),l.Yb(44,"option",10),l.Rc(45),l.pc(46,"translate"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(47,"div",11),l.Yb(48,"ngb-tabset",14),l.Yb(49,"ngb-tab"),l.Pc(50,P,3,3,"ng-template",15),l.Pc(51,w,2,4,"ng-template",16),l.Xb(),l.Yb(52,"ngb-tab"),l.Pc(53,S,4,3,"ng-template",15),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(54,"div",4),l.Yb(55,"div",17),l.Yb(56,"div",18),l.Yb(57,"div",19),l.Yb(58,"h5"),l.Rc(59),l.pc(60,"translate"),l.Xb(),l.Xb(),l.Yb(61,"div",11),l.Yb(62,"div",20),l.Tb(63,"app-loader",21),l.Xb(),l.Pc(64,M,11,14,"div",22),l.Xb(),l.Xb(),l.Xb(),l.Xb()),2&t&&(l.Cb(7),l.Sc(l.qc(8,20,"ads_topperformingads")),l.Cb(2),l.tc("icon","help-circle"),l.Cb(2),l.tc("ngModel",e.prodSortFilter),l.Cb(2),l.Tc(" ",l.qc(14,22,"ads_high_invest")," "),l.Cb(3),l.Tc(" ",l.qc(17,24,"ads_high_product")," "),l.Cb(3),l.Tc(" ",l.qc(20,26,"ads_high_clicks")," "),l.Cb(3),l.Tc(" ",l.qc(23,28,"ads_high_ads_score")," "),l.Cb(4),l.tc("data",e.chart3.data)("type",e.chart3.type)("options",e.chart3.options)("events",e.chart3.events),l.Cb(7),l.Sc(l.qc(34,30,"ads_toptrendinggroup")),l.Cb(2),l.tc("icon","help-circle"),l.Cb(2),l.tc("ngModel",e.prodSortFilter),l.Cb(2),l.Tc(" ",l.qc(40,32,"ads_cat")," "),l.Cb(3),l.Tc(" ",l.qc(43,34,"ads_sub_cat")," "),l.Cb(3),l.Tc(" ",l.qc(46,36,"ads_ex_sub_cat")," "),l.Cb(14),l.Sc(l.qc(60,38,"ads_heading")),l.Cb(4),l.tc("loading",e.loading),l.Cb(1),l.tc("ngIf",!e.loading))},directives:[u.a,i.v,i.m,i.p,i.q,i.x,Y.a,o.y,o.v,o.x,o.w,m.a,a.l,r.d,r.b,r.e,r.c,f.a],pipes:[p.c],styles:[".ngx-datatable .datatable-pager{display:block!important}"]}),z),data:{title:"Trend",breadcrumb:"Trend"}}]}],H=((R=function t(){_classCallCheck(this,t)}).\u0275mod=l.Qb({type:R}),R.\u0275inj=l.Pb({factory:function(t){return new(t||R)},imports:[[b.h.forChild(I)],b.h]}),R),A=n("PCNd"),L=((q=function t(){_classCallCheck(this,t)}).\u0275mod=l.Qb({type:q}),q.\u0275inj=l.Pb({factory:function(t){return new(t||q)},imports:[[a.c,H,o.k,i.t,r.f,A.a,c.b,i.h,Y.b]]}),q)}}]);