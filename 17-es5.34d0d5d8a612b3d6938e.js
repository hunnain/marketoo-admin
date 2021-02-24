function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{k4aV:function(e,t,n){"use strict";n.r(t),n.d(t,"SellerCustomerModule",(function(){return W}));var a,i=n("ofXK"),o=n("1kSV"),c=n("RS3s"),r=n("lDzL"),s=n("tyNb"),l=n("fXoL"),b=n("sYmb"),u=n("8MDM"),d=n("EfS0"),p=((a=function(){function e(t,n,a,i,o,c){var r=this;_classCallCheck(this,e),this.modalService=t,this.translate=n,this.activeRoute=a,this.router=i,this.sellerCustomerService=o,this.cs=c,this.loading=!1,this.img="assets/images/user.png",this.blast_notification=!1,this.id="",this.prefix="",this.details={},this.selectedLang="en",this.selectedLang=this.translate.currentLang,this.translate.onLangChange.subscribe((function(e){r.selectedLang=e.lang})),this.cs.isLoading.subscribe((function(e){r.loading=e})),this.activeRoute.params.value.id&&(this.prefix=this.activeRoute.url.value[0].path,this.id=this.activeRoute.params.value.id,this.fetchById(this.id))}return _createClass(e,[{key:"open",value:function(e){var t=this;this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then((function(e){t.closeResult="Closed with: ".concat(e)}),(function(e){t.closeResult="Dismissed ".concat(t.getDismissReason(e))}))}},{key:"getDismissReason",value:function(e){return e===o.a.ESC?"by pressing ESC":e===o.a.BACKDROP_CLICK?"by clicking on a backdrop":"with: ".concat(e)}},{key:"ngOnInit",value:function(){}},{key:"fetchById",value:function(e){var t=this;this.sellerCustomerService.getById(this.prefix,e).subscribe((function(e){e&&(console.log("fetch res---",e.body),t.details=e.body,t.cs.isLoading.next(!1))}))}},{key:"updateStatus",value:function(e){this.approveReject(e)}},{key:"gotoProducts",value:function(){this.router.navigate(["/sellers-customers/seller/".concat(this.id,"/product-list")])}},{key:"approveReject",value:function(e){var t=this;this.loading=!0,this.sellerCustomerService.approveRejectSeller(this.prefix,{uuid:this.id,status:e,notification:this.blast_notification}).subscribe((function(e){t.loading=!1,t.cs.isLoading.next(!1),console.log(e)}))}}]),e}()).\u0275fac=function(e){return new(e||a)(l.Sb(o.j),l.Sb(b.d),l.Sb(s.a),l.Sb(s.d),l.Sb(u.a),l.Sb(d.a))},a.\u0275cmp=l.Mb({type:a,selectors:[["app-view-detail"]],features:[l.Bb([o.u])],decls:44,vars:33,consts:[[1,"container-fluid"],[1,"card"],[1,"detail-header"],[1,"sub-header-1"],[2,"margin-bottom","0px"],[1,"sub-header-2"],[1,"row","product-page-main","card-body"],[1,"col-xl-8"],[1,"title-style"],[1,"col-xl-4"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"div",2),l.Yb(3,"div",3),l.Yb(4,"h3",4),l.Rc(5),l.pc(6,"translate"),l.Xb(),l.Xb(),l.Tb(7,"div",5),l.Xb(),l.Tb(8,"hr"),l.Yb(9,"div",6),l.Yb(10,"div",7),l.Yb(11,"div",8),l.Rc(12),l.pc(13,"translate"),l.Xb(),l.Yb(14,"div",8),l.Rc(15),l.pc(16,"translate"),l.Xb(),l.Yb(17,"div",8),l.Rc(18),l.pc(19,"translate"),l.Xb(),l.Yb(20,"div",8),l.Rc(21),l.pc(22,"translate"),l.Xb(),l.Yb(23,"div",8),l.Rc(24),l.pc(25,"translate"),l.Xb(),l.Yb(26,"div",8),l.Rc(27),l.pc(28,"translate"),l.Xb(),l.Yb(29,"div",8),l.Rc(30),l.pc(31,"translate"),l.Xb(),l.Yb(32,"div",8),l.Rc(33),l.pc(34,"translate"),l.Xb(),l.Yb(35,"div",8),l.Rc(36),l.pc(37,"translate"),l.Xb(),l.Yb(38,"div",8),l.Rc(39),l.pc(40,"translate"),l.Xb(),l.Xb(),l.Tb(41,"div",9),l.Yb(42,"button",10),l.kc("click",(function(){return t.gotoProducts()})),l.Rc(43," Products "),l.Xb(),l.Xb(),l.Xb(),l.Xb()),2&e&&(l.Cb(5),l.Tc(" ",l.qc(6,11,"sd_seller_detail")," "),l.Cb(7),l.Tc(" ",l.qc(13,13,"sd_online_payment_fee")," : "),l.Cb(3),l.Tc(" ",l.qc(16,15,"sd_transaction_management_fee")," : "),l.Cb(3),l.Tc("",l.qc(19,17,"sd_shipment_used")," :"),l.Cb(3),l.Tc("",l.qc(22,19,"sd_refund_amount")," :"),l.Cb(3),l.Tc("",l.qc(25,21,"sd_return_orders")," :"),l.Cb(3),l.Tc("",l.qc(28,23,"sd_exchange_orders")," :"),l.Cb(3),l.Tc("",l.qc(31,25,"sd_cancelled_orders")," :"),l.Cb(3),l.Tc("",l.qc(34,27,"sd_total_orders")," :"),l.Cb(3),l.Tc("",l.qc(37,29,"sd_delivered_orders")," :"),l.Cb(3),l.Tc("",l.qc(40,31,"sd_performance")," :"))},pipes:[b.c],styles:[".container-gap[_ngcontent-%COMP%]{margin-bottom:30px}.payment-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:10px}.font-size-13[_ngcontent-%COMP%]{font-size:13px}.order-summary[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.1);border-left:1px solid rgba(0,0,0,.1);border-top-left-radius:10px;margin-top:50px;padding:10px}.change-btn[_ngcontent-%COMP%]{cursor:pointer;color:#00f;margin-left:10px}.change-btn[_ngcontent-%COMP%]:hover{text-decoration:underline}.action[_ngcontent-%COMP%]{text-align:right}.box-file-input[_ngcontent-%COMP%]{width:50px;height:50px;background-color:#f1f4fb;position:relative;display:flex;align-items:center;justify-content:center;vertical-align:middle}.upload[_ngcontent-%COMP%]{position:absolute;width:70px;left:0;right:0;opacity:0}.imgUpload[_ngcontent-%COMP%]{width:50px}.modal-text-style-1[_ngcontent-%COMP%]{font-size:15px;font-family:Times New Roman,serif;color:#000}.modal-text-style-2[_ngcontent-%COMP%]{line-height:normal;font-size:15px;font-family:Calibri,sans-serif}.modal-text-style-3[_ngcontent-%COMP%]{margin:0 0 .0001pt;line-height:normal;font-size:15px;font-family:Calibri,s}.modal-text-style-4[_ngcontent-%COMP%]{font-size:16px;font-family:Helvetica,sans-serif;color:#000}.main-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{text-align:right}.main-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px}.main-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-size:10px}.main-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p.company-name[_ngcontent-%COMP%]{font-weight:700;font-size:15px}.main-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700}.main-container[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%]{text-align:right}.main-container[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700;margin-bottom:0}.main-container[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.main-container[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{margin-bottom:5px}.main-container[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:10px}.main-container[_ngcontent-%COMP%]   .table-section[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#4b5335;border-color:#4b5335}.main-container[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]{text-align:right}.main-container[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-weight:700}.main-container[_ngcontent-%COMP%]   .footer-desc[_ngcontent-%COMP%]{margin-top:20px;font-size:10px}.main-container[_ngcontent-%COMP%]   .footer-desc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{margin-top:5px}.title-style[_ngcontent-%COMP%]{font-weight:500}.detail-header[_ngcontent-%COMP%]{justify-content:space-between;padding:10px 10px 0}.detail-header[_ngcontent-%COMP%], .sub-header-1[_ngcontent-%COMP%]{display:flex;align-items:center}.sub-header-1[_ngcontent-%COMP%]{margin:10px 0 10px 20px}.sub-header-2[_ngcontent-%COMP%]{margin:0 10px;display:flex;align-items:flex-start}"]}),a),g=n("wd/R"),f=n("vjkr"),m=n("HDdC"),h=n("D0XW"),v=n("Kj3r");m.a.prototype.debounceTime=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.a;return Object(v.a)(e,t)(this)};var C=n("3Pt+"),_=n("pqks"),y=n("VkHG"),P=n("668k"),S=n("M9IT");function x(e,t){if(1&e){var n=l.Zb();l.Yb(0,"button",19),l.kc("click",(function(){l.Hc(n);var e=t.index;return l.oc().onSelectFilter(e)})),l.Rc(1),l.pc(2,"translate"),l.Xb()}if(2&e){var a=t.$implicit;l.Cb(1),l.Tc(" ",l.qc(2,1,a)," ")}}function k(e,t){if(1&e){var n=l.Zb();l.Yb(0,"span",31),l.Yb(1,"i",32),l.kc("click",(function(){l.Hc(n);var e=t.row;return l.oc(2).onSelectRow(e,"asd")})),l.Xb(),l.Xb()}}function w(e,t){if(1&e){var n=l.Zb();l.Yb(0,"div",34),l.Yb(1,"mat-paginator",35),l.kc("page",(function(e){return l.Hc(n),l.oc(3).pageEvent(e)})),l.Xb(),l.Xb()}if(2&e){var a=l.oc(3);l.Cb(1),l.tc("pageIndex",a.pagination.CurrentPage-1)("length",a.pagination.TotalCount)("pageSize",a.pagination.PageSize)("pageSizeOptions",a.pageSizeOptions)}}function Y(e,t){if(1&e&&l.Pc(0,w,2,4,"div",33),2&e){var n=l.oc(2);l.tc("ngIf",!n.loading)}}function X(e,t){if(1&e&&(l.Yb(0,"div",20),l.Yb(1,"ngx-datatable",21),l.Tb(2,"ngx-datatable-column",22),l.pc(3,"translate"),l.Tb(4,"ngx-datatable-column",23),l.pc(5,"translate"),l.Tb(6,"ngx-datatable-column",24),l.pc(7,"translate"),l.Tb(8,"ngx-datatable-column",25),l.pc(9,"translate"),l.Tb(10,"ngx-datatable-column",26),l.pc(11,"translate"),l.Tb(12,"ngx-datatable-column",27),l.pc(13,"translate"),l.Yb(14,"ngx-datatable-column",28),l.pc(15,"translate"),l.Pc(16,k,2,0,"ng-template",29),l.Xb(),l.Yb(17,"ngx-datatable-footer"),l.Pc(18,Y,1,1,"ng-template",30),l.Xb(),l.Xb(),l.Xb()),2&e){var n=l.oc();l.Cb(1),l.tc("rows",n.sellers)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto"),l.Cb(1),l.uc("name",l.qc(3,12,"sc_profile")),l.Cb(2),l.uc("name",l.qc(5,14,"sc_name")),l.Cb(2),l.uc("name",l.qc(7,16,"sc_member_since")),l.Cb(2),l.uc("name",l.qc(9,18,"sc_shop_url")),l.Cb(2),l.uc("name",l.qc(11,20,"sc_seller_code")),l.Cb(2),l.uc("name",l.qc(13,22,"sc_country")),l.Cb(2),l.uc("name",l.qc(15,24,"returnexchange_action"))}}var O,M=((O=function(){function e(t,n,a){_classCallCheck(this,e),this.router=t,this.sellerService=n,this.cs=a,this.temp=[],this.loading=!1,this.filterOptions=["seller_filter_accountStatus","seller_filter_englishFname","seller_filter_country","seller_filter_contactNo","seller_filter_chineseFname","seller_filter_sellerId","seller_filter_email","seller_filter_designHallUrl"],this.selectedFilter="",this.searchTerm=new C.d,this.pagination={CurrentPage:1,HasNext:!1,HasPrevious:!1,PageSize:10,TotalCount:0,TotalPages:1},this.pageSizeOptions=[5,10,25,50],this.sellers=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.formCtrlSub=this.searchTerm.valueChanges.debounceTime(2e3).subscribe((function(t){e.fetchSellers()})),this.fetchSellers()}},{key:"updateFilter",value:function(e){var t=e.target.value.toLowerCase();this.searchTerm=t||"",this.fetchSellers()}},{key:"onSelectFilter",value:function(e){this.selectedFilter=this.filterOptions[e].split("_")[2]}},{key:"ngOnDestroy",value:function(){this.formCtrlSub.unsubscribe()}},{key:"structureData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(console.log(e),e)return e.map((function(e){return Object.assign(Object.assign({},e),{image:"<img src='".concat(e.imageUrl||"assets/images/user.png","' class='img-30 mr-2'>"),memberSince:e.memberSince?g(e.memberSince).format("YYYY-MM-DD"):"---"})}))}},{key:"fetchSellers",value:function(){var e=this,t=this.pagination,n=t.PageSize,a=t.CurrentPage;this.loading=!0;var i="PageSize=".concat(n,"&PageNumber=").concat(a,"&accountStatus=2");i=i+"&"+Object(f.a)(_defineProperty({},this.selectedFilter,this.searchTerm.value)),this.sellerService.getFilteredSellerCustomer("sellers",i).subscribe((function(t){if(console.log(t),t){e.cs.isLoading.next(!1),e.sellers=e.structureData(t.body||[]);var n=JSON.parse(t.headers.get("X-Pagination"));n&&(e.pagination=n)}e.loading=!1}))}},{key:"onSelectRow",value:function(e,t){console.log(e,t),this.router.navigate(["/sellers-customers/seller/view-detail/".concat(e.sellerId)])}},{key:"pageEvent",value:function(e){console.log(e),this.pagination.PageSize=e.pageSize,this.pagination.CurrentPage=e.pageIndex+1,this.fetchSellers()}},{key:"onApplicantScreen",value:function(){this.router.navigate(["/sellers-customers/seller/new-applicants"])}}]),e}()).\u0275fac=function(e){return new(e||O)(l.Sb(s.d),l.Sb(u.a),l.Sb(d.a))},O.\u0275cmp=l.Mb({type:O,selectors:[["app-seller"]],viewQuery:function(e,t){var n;1&e&&l.Xc(r.d,!0),2&e&&l.Cc(n=l.lc())&&(t.table=n.first)},decls:25,vars:15,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],[2,"display","flex","align-items","center","font-weight","600"],[1,"font-danger",3,"icon"],[3,"btnType","loading","disabled","btnText","onSubmit"],["ngbDropdown","",1,"d-inline-block"],["myDrop","ngbDropdown"],["id","dropdownManual","ngbDropdownAnchor","",1,"btn","btn-custom","mr-2",2,"color","#f88379","display","inline-flex","align-items","center",3,"focus"],["ngbDropdownMenu","","aria-labelledby","dropdownManual"],["class","btn-custom drop","ngbDropdownItem","",3,"click",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-custom","mr-1"],[1,"card-body"],["type","text","placeholder","Search...",1,"filter-ngx","form-control",2,"width","auto","margin","20px 0px",3,"formControl"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],["class","custom-datatable",4,"ngIf"],["ngbDropdownItem","",1,"btn-custom","drop",3,"click"],[1,"custom-datatable"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight"],["prop","image",3,"name"],["prop","englishFname",3,"name"],["prop","memberSince",3,"name"],["prop","member_since",3,"name"],["prop","sellerId",3,"name"],["prop","country",3,"name"],["sortable","false","prop","order id",3,"name"],["ngx-datatable-cell-template",""],["ngx-datatable-footer-template",""],[2,"color","#f88379","cursor","pointer"],[1,"fa","fa-eye",3,"click"],["class","pagination","style","margin-bottom: 10px; width: -webkit-fill-available",4,"ngIf"],[1,"pagination",2,"margin-bottom","10px","width","-webkit-fill-available"],[2,"width","-webkit-fill-available",3,"pageIndex","length","pageSize","pageSizeOptions","page"]],template:function(e,t){if(1&e){var n=l.Zb();l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"div",2),l.Yb(3,"div",3),l.Yb(4,"div",4),l.Yb(5,"div"),l.Yb(6,"h4",5),l.Tb(7,"app-feather-icons",6),l.Rc(8),l.pc(9,"translate"),l.Xb(),l.Yb(10,"app-button",7),l.kc("onSubmit",(function(){return t.onApplicantScreen()})),l.Xb(),l.Xb(),l.Yb(11,"div"),l.Yb(12,"div",8,9),l.Yb(14,"button",10),l.kc("focus",(function(){return l.Hc(n),l.Dc(13).open()})),l.Tb(15,"app-feather-icons",6),l.Xb(),l.Yb(16,"div",11),l.Pc(17,x,3,3,"button",12),l.Xb(),l.Xb(),l.Yb(18,"button",13),l.Tb(19,"app-feather-icons",6),l.Xb(),l.Xb(),l.Xb(),l.Yb(20,"div",14),l.Tb(21,"input",15),l.Yb(22,"div",16),l.Tb(23,"app-loader",17),l.Xb(),l.Pc(24,X,19,26,"div",18),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()}2&e&&(l.Cb(7),l.tc("icon","users"),l.Cb(1),l.Uc("\xa0 ",t.sellers.length," ",l.qc(9,13,"sc_sellers")," "),l.Cb(2),l.tc("btnType","submit")("loading",!1)("disabled",t.loading)("btnText","New Applicants"),l.Cb(5),l.tc("icon","eye"),l.Cb(2),l.tc("ngForOf",t.filterOptions),l.Cb(2),l.tc("icon","download"),l.Cb(2),l.tc("formControl",t.searchTerm),l.Cb(2),l.tc("loading",t.loading),l.Cb(1),l.tc("ngIf",!t.loading))},directives:[_.a,y.a,o.e,o.f,o.h,i.k,C.b,C.m,C.e,P.a,i.l,o.g,r.d,r.b,r.a,r.e,r.c,S.a],pipes:[b.c],styles:[".drop[_ngcontent-%COMP%]:active{background-color:#f88379;border:none!important;outline:none!important}"]}),O);function T(e,t){if(1&e){var n=l.Zb();l.Yb(0,"button",18),l.kc("click",(function(){l.Hc(n);var e=t.index;return l.oc().onSelectFilter(e)})),l.Rc(1),l.pc(2,"translate"),l.Xb()}if(2&e){var a=t.$implicit;l.Cb(1),l.Tc(" ",l.qc(2,1,a)," ")}}function R(e,t){if(1&e){var n=l.Zb();l.Yb(0,"div",28),l.Yb(1,"mat-paginator",29),l.kc("page",(function(e){return l.Hc(n),l.oc(3).pageEvent(e)})),l.Xb(),l.Xb()}if(2&e){var a=l.oc(3);l.Cb(1),l.tc("pageIndex",a.pagination.CurrentPage-1)("length",a.pagination.TotalCount)("pageSize",a.pagination.PageSize)("pageSizeOptions",a.pageSizeOptions)}}function I(e,t){if(1&e&&l.Pc(0,R,2,4,"div",27),2&e){var n=l.oc(2);l.tc("ngIf",!n.loading)}}function j(e,t){if(1&e&&(l.Yb(0,"div",19),l.Yb(1,"ngx-datatable",20),l.Tb(2,"ngx-datatable-column",21),l.pc(3,"translate"),l.Tb(4,"ngx-datatable-column",22),l.pc(5,"translate"),l.Tb(6,"ngx-datatable-column",23),l.pc(7,"translate"),l.Tb(8,"ngx-datatable-column",24),l.pc(9,"translate"),l.Tb(10,"ngx-datatable-column",25),l.pc(11,"translate"),l.Yb(12,"ngx-datatable-footer"),l.Pc(13,I,1,1,"ng-template",26),l.Xb(),l.Xb(),l.Xb()),2&e){var n=l.oc();l.Cb(1),l.tc("rows",n.customers)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",5),l.Cb(1),l.uc("name",l.qc(3,11,"sc_profile")),l.Cb(2),l.uc("name",l.qc(5,13,"sc_username")),l.Cb(2),l.uc("name",l.qc(7,15,"sc_email")),l.Cb(2),l.uc("name",l.qc(9,17,"sc_member_since")),l.Cb(2),l.uc("name",l.qc(11,19,"sc_country"))}}var D,z,H=((D=function(){function e(t,n,a){_classCallCheck(this,e),this.router=t,this.customerService=n,this.cs=a,this.order=[],this.temp=[],this.loading=!1,this.filterOptions=["customer_filter_none","customer_filter_username","customer_filter_customerId","customer_filter_email"],this.selectedFilter="",this.searchTerm="",this.pagination={CurrentPage:1,HasNext:!1,HasPrevious:!1,PageSize:10,TotalCount:0,TotalPages:1},this.pageSizeOptions=[5,10,25,50],this.customers=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.fetchSellers()}},{key:"updateFilter",value:function(e){var t=e.target.value.toLowerCase();this.searchTerm=t||""}},{key:"onSelectFilter",value:function(e){this.selectedFilter=this.filterOptions[e].split("_")[2]}},{key:"fetchSellers",value:function(){var e=this,t=this.pagination,n=t.PageSize,a=t.CurrentPage;this.loading=!0;var i="PageSize=".concat(n,"&PageNumber=").concat(a);i=i+"&"+Object(f.a)(_defineProperty({},this.selectedFilter,this.searchTerm)),this.customerService.getFilteredSellerCustomer("customers",i).map((function(e){return Object.assign(Object.assign({},e),{body:e.body.map((function(e){return Object.assign(Object.assign({},e),{image:"<img src='".concat(e.image||"assets/images/user.png","' class='img-30 mr-2'>"),memberSince:e.memberSince?g(e.memberSince).format("YYYY-MM-DD"):"---",country:e.country||"---"})}))})})).subscribe((function(t){if(console.log(t),t){e.cs.isLoading.next(!1),e.loading=!1,e.customers=t.body;var n=JSON.parse(t.headers.get("X-Pagination"));n&&(e.pagination=n)}}))}},{key:"onSelectRow",value:function(e){var t="/seller-customer/view-detail/".concat(e.replace(/#/g,""));this.router.navigate([t])}},{key:"pageEvent",value:function(e){console.log(e),this.pagination.PageSize=e.pageSize,this.pagination.CurrentPage=e.pageIndex+1}}]),e}()).\u0275fac=function(e){return new(e||D)(l.Sb(s.d),l.Sb(u.a),l.Sb(d.a))},D.\u0275cmp=l.Mb({type:D,selectors:[["app-customer"]],viewQuery:function(e,t){var n;1&e&&l.Xc(r.d,!0),2&e&&l.Cc(n=l.lc())&&(t.table=n.first)},decls:25,vars:11,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],[2,"display","flex","align-items","center","font-weight","600"],[1,"font-danger",3,"icon"],["type","button",1,"btn","btn-custom","mr-1"],["ngbDropdown","",1,"d-inline-block"],["myDrop","ngbDropdown"],["id","dropdownManual","ngbDropdownAnchor","",1,"btn","btn-custom","mr-2",2,"color","#f88379","display","inline-flex","align-items","center",3,"focus"],["ngbDropdownMenu","","aria-labelledby","dropdownManual"],["class","btn-custom drop","ngbDropdownItem","",3,"click",4,"ngFor","ngForOf"],[1,"card-body"],["type","text","placeholder","Search...",1,"filter-ngx","form-control",2,"width","auto","margin","20px 0px",3,"keyup"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],["class","custom-datatable",4,"ngIf"],["ngbDropdownItem","",1,"btn-custom","drop",3,"click"],[1,"custom-datatable"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight","limit"],["prop","image",3,"name"],["prop","username",3,"name"],["prop","email",3,"name"],["prop","memberSince",3,"name"],["prop","country",3,"name"],["ngx-datatable-footer-template",""],["class","pagination","style","margin-bottom: 10px; width: -webkit-fill-available",4,"ngIf"],[1,"pagination",2,"margin-bottom","10px","width","-webkit-fill-available"],[2,"width","-webkit-fill-available",3,"pageIndex","length","pageSize","pageSizeOptions","page"]],template:function(e,t){if(1&e){var n=l.Zb();l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"div",2),l.Yb(3,"div",3),l.Yb(4,"div",4),l.Yb(5,"h4",5),l.Tb(6,"app-feather-icons",6),l.Rc(7),l.pc(8,"translate"),l.Xb(),l.Yb(9,"div"),l.Yb(10,"button",7),l.Tb(11,"app-feather-icons",6),l.Xb(),l.Yb(12,"div",8,9),l.Yb(14,"button",10),l.kc("focus",(function(){return l.Hc(n),l.Dc(13).open()})),l.Tb(15,"app-feather-icons",6),l.Xb(),l.Yb(16,"div",11),l.Pc(17,T,3,3,"button",12),l.Xb(),l.Xb(),l.Yb(18,"button",7),l.Tb(19,"app-feather-icons",6),l.Xb(),l.Xb(),l.Xb(),l.Yb(20,"div",13),l.Yb(21,"input",14),l.kc("keyup",(function(e){return t.updateFilter(e)})),l.Xb(),l.Yb(22,"div",15),l.Tb(23,"app-loader",16),l.Xb(),l.Pc(24,j,14,21,"div",17),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()}2&e&&(l.Cb(6),l.tc("icon","users"),l.Cb(1),l.Uc("\xa0 ",t.customers.length," ",l.qc(8,9,"sc_customers")," "),l.Cb(4),l.tc("icon","download"),l.Cb(4),l.tc("icon","eye"),l.Cb(2),l.tc("ngForOf",t.filterOptions),l.Cb(2),l.tc("icon","globe"),l.Cb(4),l.tc("loading",t.loading),l.Cb(1),l.tc("ngIf",!t.loading))},directives:[_.a,o.e,o.f,o.h,i.k,P.a,i.l,o.g,r.d,r.b,r.e,r.c,S.a],pipes:[b.c],styles:[".drop[_ngcontent-%COMP%]:active{background-color:#f88379;border:none!important;outline:none!important}"]}),D),q=n("Nj5G"),F=((z=function(){function e(t,n,a){var i=this;_classCallCheck(this,e),this.sellerService=t,this.cs=n,this.activeRoute=a,this.loading=!1,this.tabsStructure=[{tab:"Products",tabIcon:"user",params:"status=0",url:"",cardButtons:[!0,!0,!0],rejectModal:!0},{tab:"Approved",tabIcon:"settings",params:"status=2",cardButtons:[!0,!1,!0],rejectModal:!0},{tab:"Rejected",tabIcon:"settings",params:"status=1",cardButtons:[!0,!0,!1],rejectModal:!0}];var o=this.activeRoute.params.value.id;if(o){var c="admin/get-products-by-seller/".concat(o);this.tabsStructure[0].url=c,this.tabsStructure[1].url=c,this.tabsStructure[2].url=c}this.cs.isLoading.subscribe((function(e){i.loading=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"generatePostData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n={};return e.forEach((function(e){n[e]=t})),n}},{key:"getData",value:function(e){var t,n=this;console.log(e),t=this.generatePostData(e.selected,0==e.tab?0==e.button?2:1:0),this.sellerService.approveRejectSellerProduct({productList:t}).subscribe((function(e){n.cs.isLoading.next(!1),console.log(e)}))}},{key:"onEdit",value:function(e){console.log(e)}},{key:"onApprove",value:function(e){this.updateProductStatus({productList:_defineProperty({},e,2)})}},{key:"onReject",value:function(e){this.updateProductStatus({productList:_defineProperty({},e.id,1)})}},{key:"onPending",value:function(e){this.updateProductStatus({productList:_defineProperty({},e,0)})}},{key:"updateProductStatus",value:function(e){var t=this;this.sellerService.approveRejectSellerProduct(e).subscribe((function(e){t.cs.isLoading.next(!1),console.log(e)}))}}]),e}()).\u0275fac=function(e){return new(e||z)(l.Sb(u.a),l.Sb(d.a),l.Sb(s.a))},z.\u0275cmp=l.Mb({type:z,selectors:[["app-seller-products"]],decls:1,vars:1,consts:[[3,"tabsStructure","sendSelected","onEditCard","onApproveCard","onRejectCard","onPendingCard"]],template:function(e,t){1&e&&(l.Yb(0,"app-product-tab-view",0),l.kc("sendSelected",(function(e){return t.getData(e)}))("onEditCard",(function(e){return t.onEdit(e)}))("onApproveCard",(function(e){return t.onApprove(e)}))("onRejectCard",(function(e){return t.onReject(e)}))("onPendingCard",(function(e){return t.onPending(e)})),l.Xb()),2&e&&l.tc("tabsStructure",t.tabsStructure)},directives:[q.a],styles:[""]}),z);function L(e,t){if(1&e){var n=l.Zb();l.Yb(0,"span",24),l.Yb(1,"i",25),l.kc("click",(function(){l.Hc(n);var e=t.row,a=l.oc(2),i=l.Dc(16);return a.openFormModal(e,i)})),l.Xb(),l.Xb()}}function E(e,t){if(1&e){var n=l.Zb();l.Yb(0,"span",26),l.Yb(1,"i",27),l.kc("click",(function(){l.Hc(n);var e=t.row;return l.oc(2).onApproveSeller(e)})),l.Xb(),l.Xb(),l.Yb(2,"span",26),l.Yb(3,"i",28),l.kc("click",(function(){l.Hc(n);var e=t.row,a=l.oc(2),i=l.Dc(14);return a.onConfirmModal(e,i)})),l.Xb(),l.Xb()}}function N(e,t){if(1&e){var n=l.Zb();l.Yb(0,"div",30),l.Yb(1,"mat-paginator",31),l.kc("page",(function(e){return l.Hc(n),l.oc(3).pageEvent(e)})),l.Xb(),l.Xb()}if(2&e){var a=l.oc(3);l.Cb(1),l.tc("pageIndex",a.pagination.CurrentPage-1)("length",a.pagination.TotalCount)("pageSize",a.pagination.PageSize)("pageSizeOptions",a.pageSizeOptions)}}function A(e,t){if(1&e&&l.Pc(0,N,2,4,"div",29),2&e){var n=l.oc(2);l.tc("ngIf",!n.loading)}}function B(e,t){if(1&e&&(l.Yb(0,"div",13),l.Yb(1,"ngx-datatable",14),l.Tb(2,"ngx-datatable-column",15),l.pc(3,"translate"),l.Tb(4,"ngx-datatable-column",16),l.pc(5,"translate"),l.Tb(6,"ngx-datatable-column",17),l.pc(7,"translate"),l.Tb(8,"ngx-datatable-column",18),l.pc(9,"translate"),l.Tb(10,"ngx-datatable-column",19),l.pc(11,"translate"),l.Tb(12,"ngx-datatable-column",20),l.pc(13,"translate"),l.Yb(14,"ngx-datatable-column",21),l.pc(15,"translate"),l.Pc(16,L,2,0,"ng-template",22),l.Xb(),l.Yb(17,"ngx-datatable-column",21),l.pc(18,"translate"),l.Pc(19,E,4,0,"ng-template",22),l.Xb(),l.Yb(20,"ngx-datatable-footer"),l.Pc(21,A,1,1,"ng-template",23),l.Xb(),l.Xb(),l.Xb()),2&e){var n=l.oc();l.Cb(1),l.tc("rows",n.sellers)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto"),l.Cb(1),l.uc("name",l.qc(3,13,"sc_profile")),l.Cb(2),l.uc("name",l.qc(5,15,"sc_name")),l.Cb(2),l.uc("name",l.qc(7,17,"sc_member_since")),l.Cb(2),l.uc("name",l.qc(9,19,"sc_shop_url")),l.Cb(2),l.uc("name",l.qc(11,21,"sc_seller_code")),l.Cb(2),l.uc("name",l.qc(13,23,"sc_country")),l.Cb(2),l.uc("name",l.qc(15,25,"ap_signup")),l.Cb(3),l.uc("name",l.qc(18,27,"ap_action"))}}function Z(e,t){if(1&e){var n=l.Zb();l.Yb(0,"div",32),l.Yb(1,"h5",33),l.Rc(2,"Update Price"),l.Xb(),l.Yb(3,"button",34),l.kc("click",(function(){return t.$implicit.dismiss("Cross click")})),l.Yb(4,"span",35),l.Rc(5,"\xd7"),l.Xb(),l.Xb(),l.Xb(),l.Yb(6,"div",36),l.Yb(7,"div",37),l.Yb(8,"div"),l.Yb(9,"label",38),l.Rc(10,"Reason"),l.Xb(),l.Yb(11,"input",39),l.kc("ngModelChange",(function(e){return l.Hc(n),l.oc().reason=e})),l.Xb(),l.Xb(),l.Xb(),l.Yb(12,"div",40),l.Yb(13,"button",41),l.kc("click",(function(){return l.Hc(n),l.oc().onRejectSeller()})),l.Rc(14," Reject "),l.Xb(),l.Xb(),l.Xb()}if(2&e){var a=l.oc();l.Cb(11),l.tc("ngModel",a.reason)}}function U(e,t){if(1&e){var n=l.Zb();l.Yb(0,"div",32),l.Yb(1,"h5",33),l.Rc(2,"Seller Form Data"),l.Xb(),l.Yb(3,"button",34),l.kc("click",(function(){return t.$implicit.dismiss("Cross click")})),l.Yb(4,"span",35),l.Rc(5,"\xd7"),l.Xb(),l.Xb(),l.Xb(),l.Yb(6,"div",36),l.Yb(7,"div",37),l.Yb(8,"div"),l.Yb(9,"label",38),l.Rc(10,"Reason"),l.Xb(),l.Yb(11,"input",39),l.kc("ngModelChange",(function(e){return l.Hc(n),l.oc().reason=e})),l.Xb(),l.Xb(),l.Xb(),l.Yb(12,"div",40),l.Yb(13,"button",41),l.kc("click",(function(){return t.$implicit.dismiss("Cross click")})),l.Rc(14," Reject "),l.Xb(),l.Xb(),l.Xb()}if(2&e){var a=l.oc();l.Cb(11),l.tc("ngModel",a.reason)}}var Q,V,K,J=[{path:"",children:[{path:"seller",component:M,data:{title:"Sellers",breadcrumb:"Sellers"}},{path:"customer",component:H,data:{title:"Customers",breadcrumb:"Customers"}},{path:"seller/new-applicants",component:(Q=function(){function e(t,n,a,i){_classCallCheck(this,e),this.modalService=t,this.router=n,this.sellerService=a,this.cs=i,this.temp=[],this.loading=!1,this.filterOptions=["seller_filter_country","seller_filter_date","seller_filter_fname","seller_filter_lname","seller_filter_seller_url","seller_filter_seller_name","seller_filter_seller_code"],this.reason="",this.rejectId=null,this.pagination={CurrentPage:1,HasNext:!1,HasPrevious:!1,PageSize:10,TotalCount:0,TotalPages:1},this.pageSizeOptions=[5,10,25,50],this.sellers=[]}return _createClass(e,[{key:"open",value:function(e){var t=this;console.log(e),this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then((function(e){t.closeResult="Closed with: ".concat(e),t.reason=null}),(function(e){t.closeResult="Dismissed ".concat(t.getDismissReason(e)),t.reason=null}))}},{key:"getDismissReason",value:function(e){return e===o.a.ESC?"by pressing ESC":e===o.a.BACKDROP_CLICK?"by clicking on a backdrop":"with: ".concat(e)}},{key:"ngOnInit",value:function(){this.fetchSellers()}},{key:"fetchById",value:function(e){var t=this;this.sellerService.getById("seller",e).subscribe((function(e){e&&(console.log("fetch res---",e.body),t.details=e.body),t.cs.isLoading.next(!1)}))}},{key:"openFormModal",value:function(e,t){this.fetchById(e.sellerId),this.open(t)}},{key:"structureData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(console.log(e),e)return e.map((function(e){return Object.assign(Object.assign({},e),{image:"<img src='".concat(e.imageUrl||"assets/images/user.png","' class='img-30 mr-2'>"),memberSince:e.memberSince?g(e.memberSince).format("YYYY-MM-DD"):"---"})}))}},{key:"fetchSellers",value:function(){var e=this,t=this.pagination,n=t.PageSize,a=t.CurrentPage;this.loading=!0,this.sellerService.getFilteredSellerCustomer("sellers","PageSize=".concat(n,"&PageNumber=").concat(a,"&accountStatus=0")).subscribe((function(t){if(console.log(t),t){e.sellers=e.structureData(t.body||[]);var n=JSON.parse(t.headers.get("X-Pagination"));n&&(e.pagination=n),e.loading=!1,e.cs.isLoading.next(!1)}}))}},{key:"onSelectRow",value:function(e,t){console.log(e,t),this.router.navigate(["/sellers-customers/seller/view-detail/".concat(e.sellerId)])}},{key:"pageEvent",value:function(e){console.log(e),this.pagination.PageSize=e.pageSize,this.pagination.CurrentPage=e.pageIndex+1,this.fetchSellers()}},{key:"onConfirmModal",value:function(e,t){this.rejectId=e.sellerId,this.open(t)}},{key:"onApproveSeller",value:function(e){this.updateStatus({uuid:e.sellerId,status:2})}},{key:"onRejectSeller",value:function(){this.updateStatus({uuid:this.rejectId,status:1})}},{key:"updateStatus",value:function(e){var t=this;this.loading=!0,this.sellerService.approveRejectSeller("seller",Object.assign(Object.assign({},e),{notification:!0})).subscribe((function(e){t.loading=!1,t.cs.isLoading.next(!1),console.log(e)}))}}]),e}(),Q.\u0275fac=function(e){return new(e||Q)(l.Sb(o.j),l.Sb(s.d),l.Sb(u.a),l.Sb(d.a))},Q.\u0275cmp=l.Mb({type:Q,selectors:[["app-applicants"]],viewQuery:function(e,t){var n;1&e&&l.Xc(r.d,!0),2&e&&l.Cc(n=l.lc())&&(t.table=n.first)},decls:17,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],[2,"display","flex","align-items","center","font-weight","600"],[1,"font-danger",3,"icon"],[1,"card-body"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],["class","custom-datatable",4,"ngIf"],["ReasonModal",""],["SellerFormModal",""],[1,"custom-datatable"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight"],["prop","image",3,"name"],["prop","englishFname",3,"name"],["prop","memberSince",3,"name"],["prop","member_since",3,"name"],["prop","sellerId",3,"name"],["prop","country",3,"name"],["sortable","false","prop","order id",3,"name"],["ngx-datatable-cell-template",""],["ngx-datatable-footer-template",""],[2,"color","#f88379","cursor","pointer"],[1,"fa","fa-eye","fa-lg",3,"click"],[2,"color","#f88379","cursor","pointer","margin","0px 8px"],[1,"fa","fa-thumbs-o-up","fa-lg",3,"click"],[1,"fa","fa-thumbs-o-down","fa-lg",3,"click"],["class","pagination","style","margin-bottom: 10px; width: -webkit-fill-available",4,"ngIf"],[1,"pagination",2,"margin-bottom","10px","width","-webkit-fill-available"],[2,"width","-webkit-fill-available",3,"pageIndex","length","pageSize","pageSizeOptions","page"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"form-group"],["for","price"],["type","text","id","reason","aria-describedby","reason","placeholder","Enter Reason",1,"form-control",3,"ngModel","ngModelChange"],[1,"action"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"div",2),l.Yb(3,"div",3),l.Yb(4,"div",4),l.Yb(5,"h4",5),l.Tb(6,"app-feather-icons",6),l.Rc(7),l.pc(8,"translate"),l.Xb(),l.Xb(),l.Yb(9,"div",7),l.Yb(10,"div",8),l.Tb(11,"app-loader",9),l.Xb(),l.Pc(12,B,22,29,"div",10),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Pc(13,Z,15,1,"ng-template",null,11,l.Qc),l.Pc(15,U,15,1,"ng-template",null,12,l.Qc)),2&e&&(l.Cb(6),l.tc("icon","users"),l.Cb(1),l.Uc("\xa0 ",t.sellers.length," ",l.qc(8,5,"ap_applicants")," "),l.Cb(4),l.tc("loading",t.loading),l.Cb(1),l.tc("ngIf",!t.loading))},directives:[_.a,P.a,i.l,r.d,r.b,r.a,r.e,r.c,S.a,C.b,C.m,C.p],pipes:[b.c],styles:[".drop[_ngcontent-%COMP%]:active{background-color:#f88379;border:none!important;outline:none!important}"]}),Q),data:{title:"View Detail",breadcrumb:"View Detail"}},{path:"seller/view-detail/:id",component:p,data:{title:"View Detail",breadcrumb:"View Detail"}},{path:"seller/:id/product-list",component:F,data:{title:"Products",breadcrumb:"Products"}}]}],$=((V=function e(){_classCallCheck(this,e)}).\u0275mod=l.Qb({type:V}),V.\u0275inj=l.Pb({factory:function(e){return new(e||V)},imports:[[s.h.forChild(J)],s.h]}),V),G=n("PCNd"),W=((K=function e(){_classCallCheck(this,e)}).\u0275mod=l.Qb({type:K}),K.\u0275inj=l.Pb({factory:function(e){return new(e||K)},imports:[[i.c,o.k,C.t,C.h,$,c.b,r.f,G.a]]}),K)}}]);