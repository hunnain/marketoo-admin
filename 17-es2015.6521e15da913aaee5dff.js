(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{k4aV:function(e,t,n){"use strict";n.r(t),n.d(t,"SellerCustomerModule",(function(){return Z}));var i=n("ofXK"),a=n("1kSV"),o=n("RS3s"),c=n("lDzL"),s=n("tyNb"),r=n("fXoL"),l=n("sYmb"),b=n("8MDM"),d=n("EfS0");let p=(()=>{class e{constructor(e,t,n,i,a,o){this.modalService=e,this.translate=t,this.activeRoute=n,this.router=i,this.sellerCustomerService=a,this.cs=o,this.loading=!1,this.img="assets/images/user.png",this.blast_notification=!1,this.id="",this.prefix="",this.details={coupons:0,onlinePaymentFee:0,rating:4,referrelDeduction:0,refund:0,shippingViaMarketooAccount:0,shippingViaOwnAccount:0,storeCredit:80,totalCancelledOrders:0,totalDeliveredOrders:0,totalOrders:12,totalRefundedOrders:0,transactionsManagementFee:0},this.selectedLang="en",this.selectedLang=this.translate.currentLang,this.translate.onLangChange.subscribe(e=>{this.selectedLang=e.lang}),this.cs.isLoading.subscribe(e=>{this.loading=e}),this.activeRoute.params.value.id&&(this.prefix=this.activeRoute.url.value[0].path,this.id=this.activeRoute.params.value.id,this.fetchById(this.id))}open(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then(e=>{this.closeResult=`Closed with: ${e}`},e=>{this.closeResult=`Dismissed ${this.getDismissReason(e)}`})}getDismissReason(e){return e===a.a.ESC?"by pressing ESC":e===a.a.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${e}`}ngOnInit(){}fetchById(e){this.sellerCustomerService.getById(this.prefix,e).subscribe(e=>{e&&(console.log("fetch res---",e.body),this.details=e.body||{},this.cs.isLoading.next(!1))})}updateStatus(e){this.approveReject(e)}gotoProducts(){this.router.navigate([`/sellers-customers/seller/${this.id}/product-list`])}approveReject(e){this.loading=!0,this.sellerCustomerService.approveRejectSeller(this.prefix,{uuid:this.id,status:e,notification:this.blast_notification}).subscribe(e=>{this.loading=!1,this.cs.isLoading.next(!1),console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(a.j),r.Sb(l.d),r.Sb(s.a),r.Sb(s.d),r.Sb(b.a),r.Sb(d.a))},e.\u0275cmp=r.Mb({type:e,selectors:[["app-view-detail"]],features:[r.Bb([a.u])],decls:44,vars:43,consts:[[1,"container-fluid"],[1,"card"],[1,"detail-header"],[1,"sub-header-1"],[2,"margin-bottom","0px"],[1,"sub-header-2"],[1,"row","product-page-main","card-body"],[1,"col-xl-8"],[1,"title-style"],[1,"col-xl-4"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"div",2),r.Yb(3,"div",3),r.Yb(4,"h3",4),r.Rc(5),r.pc(6,"translate"),r.Xb(),r.Xb(),r.Tb(7,"div",5),r.Xb(),r.Tb(8,"hr"),r.Yb(9,"div",6),r.Yb(10,"div",7),r.Yb(11,"div",8),r.Rc(12),r.pc(13,"translate"),r.Xb(),r.Yb(14,"div",8),r.Rc(15),r.pc(16,"translate"),r.Xb(),r.Yb(17,"div",8),r.Rc(18),r.pc(19,"translate"),r.Xb(),r.Yb(20,"div",8),r.Rc(21),r.pc(22,"translate"),r.Xb(),r.Yb(23,"div",8),r.Rc(24),r.pc(25,"translate"),r.Xb(),r.Yb(26,"div",8),r.Rc(27),r.pc(28,"translate"),r.Xb(),r.Yb(29,"div",8),r.Rc(30),r.pc(31,"translate"),r.Xb(),r.Yb(32,"div",8),r.Rc(33),r.pc(34,"translate"),r.Xb(),r.Yb(35,"div",8),r.Rc(36),r.pc(37,"translate"),r.Xb(),r.Yb(38,"div",8),r.Rc(39),r.pc(40,"translate"),r.Xb(),r.Xb(),r.Tb(41,"div",9),r.Yb(42,"button",10),r.kc("click",(function(){return t.gotoProducts()})),r.Rc(43," Products "),r.Xb(),r.Xb(),r.Xb(),r.Xb()),2&e&&(r.Cb(5),r.Tc(" ",r.qc(6,21,"sd_seller_detail")," "),r.Cb(7),r.Uc(" ",r.qc(13,23,"sd_online_payment_fee")," :",t.details.onlinePaymentFee," "),r.Cb(3),r.Uc(" ",r.qc(16,25,"sd_transaction_management_fee")," :",t.details.transactionsManagementFee," "),r.Cb(3),r.Uc(" ",r.qc(19,27,"sd_shipment_used")," :",t.details.onlinePaymentFee," "),r.Cb(3),r.Uc(" ",r.qc(22,29,"sd_refund_amount")," :",t.details.refund," "),r.Cb(3),r.Uc(" ",r.qc(25,31,"sd_return_orders")," :",t.details.onlinePaymentFee," "),r.Cb(3),r.Uc(" ",r.qc(28,33,"sd_exchange_orders")," :",t.details.onlinePaymentFee," "),r.Cb(3),r.Uc(" ",r.qc(31,35,"sd_cancelled_orders")," :",t.details.totalCancelledOrders," "),r.Cb(3),r.Uc(" ",r.qc(34,37,"sd_total_orders")," :",t.details.totalOrders," "),r.Cb(3),r.Uc(" ",r.qc(37,39,"sd_delivered_orders")," :",t.details.totalDeliveredOrders," "),r.Cb(3),r.Uc(" ",r.qc(40,41,"sd_performance")," :",t.details.onlinePaymentFee," "))},pipes:[l.c],styles:[".container-gap[_ngcontent-%COMP%]{margin-bottom:30px}.payment-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:10px}.font-size-13[_ngcontent-%COMP%]{font-size:13px}.order-summary[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.1);border-left:1px solid rgba(0,0,0,.1);border-top-left-radius:10px;margin-top:50px;padding:10px}.change-btn[_ngcontent-%COMP%]{cursor:pointer;color:#00f;margin-left:10px}.change-btn[_ngcontent-%COMP%]:hover{text-decoration:underline}.action[_ngcontent-%COMP%]{text-align:right}.box-file-input[_ngcontent-%COMP%]{width:50px;height:50px;background-color:#f1f4fb;position:relative;display:flex;align-items:center;justify-content:center;vertical-align:middle}.upload[_ngcontent-%COMP%]{position:absolute;width:70px;left:0;right:0;opacity:0}.imgUpload[_ngcontent-%COMP%]{width:50px}.modal-text-style-1[_ngcontent-%COMP%]{font-size:15px;font-family:Times New Roman,serif;color:#000}.modal-text-style-2[_ngcontent-%COMP%]{line-height:normal;font-size:15px;font-family:Calibri,sans-serif}.modal-text-style-3[_ngcontent-%COMP%]{margin:0 0 .0001pt;line-height:normal;font-size:15px;font-family:Calibri,s}.modal-text-style-4[_ngcontent-%COMP%]{font-size:16px;font-family:Helvetica,sans-serif;color:#000}.main-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{text-align:right}.main-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px}.main-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-size:10px}.main-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p.company-name[_ngcontent-%COMP%]{font-weight:700;font-size:15px}.main-container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700}.main-container[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%]{text-align:right}.main-container[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700;margin-bottom:0}.main-container[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.main-container[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{margin-bottom:5px}.main-container[_ngcontent-%COMP%]   .content-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:10px}.main-container[_ngcontent-%COMP%]   .table-section[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#4b5335;border-color:#4b5335}.main-container[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]{text-align:right}.main-container[_ngcontent-%COMP%]   .footer-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-weight:700}.main-container[_ngcontent-%COMP%]   .footer-desc[_ngcontent-%COMP%]{margin-top:20px;font-size:10px}.main-container[_ngcontent-%COMP%]   .footer-desc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{margin-top:5px}.title-style[_ngcontent-%COMP%]{font-weight:500}.detail-header[_ngcontent-%COMP%]{justify-content:space-between;padding:10px 10px 0}.detail-header[_ngcontent-%COMP%], .sub-header-1[_ngcontent-%COMP%]{display:flex;align-items:center}.sub-header-1[_ngcontent-%COMP%]{margin:10px 0 10px 20px}.sub-header-2[_ngcontent-%COMP%]{margin:0 10px;display:flex;align-items:flex-start}"]}),e})();var g=n("wd/R"),u=n("vjkr"),m=n("HDdC"),h=n("D0XW"),f=n("Kj3r");m.a.prototype.debounceTime=function(e,t=h.a){return Object(f.a)(e,t)(this)};var C=n("3Pt+"),v=n("pqks"),_=n("VkHG"),S=n("668k"),P=n("M9IT");function x(e,t){if(1&e){const e=r.Zb();r.Yb(0,"button",19),r.kc("click",(function(){r.Hc(e);const n=t.index;return r.oc().onSelectFilter(n)})),r.Rc(1),r.pc(2,"translate"),r.Xb()}if(2&e){const e=t.$implicit;r.Cb(1),r.Tc(" ",r.qc(2,1,e)," ")}}function y(e,t){if(1&e&&r.Tb(0,"input",20),2&e){const e=r.oc();r.tc("formControl",e.searchTerm)}}function w(e,t){if(1&e){const e=r.Zb();r.Yb(0,"span",32),r.Yb(1,"i",33),r.kc("click",(function(){r.Hc(e);const n=t.row;return r.oc(2).onSelectRow(n,"asd")})),r.Xb(),r.Xb()}}function O(e,t){if(1&e){const e=r.Zb();r.Yb(0,"div",35),r.Yb(1,"mat-paginator",36),r.kc("page",(function(t){return r.Hc(e),r.oc(3).pageEvent(t)})),r.Xb(),r.Xb()}if(2&e){const e=r.oc(3);r.Cb(1),r.tc("pageIndex",e.pagination.CurrentPage-1)("length",e.pagination.TotalCount)("pageSize",e.pagination.PageSize)("pageSizeOptions",e.pageSizeOptions)}}function Y(e,t){if(1&e&&r.Pc(0,O,2,4,"div",34),2&e){const e=r.oc(2);r.tc("ngIf",!e.loading)}}function X(e,t){if(1&e&&(r.Yb(0,"div",21),r.Yb(1,"ngx-datatable",22),r.Tb(2,"ngx-datatable-column",23),r.pc(3,"translate"),r.Tb(4,"ngx-datatable-column",24),r.pc(5,"translate"),r.Tb(6,"ngx-datatable-column",25),r.pc(7,"translate"),r.Tb(8,"ngx-datatable-column",26),r.pc(9,"translate"),r.Tb(10,"ngx-datatable-column",27),r.pc(11,"translate"),r.Tb(12,"ngx-datatable-column",28),r.pc(13,"translate"),r.Yb(14,"ngx-datatable-column",29),r.pc(15,"translate"),r.Pc(16,w,2,0,"ng-template",30),r.Xb(),r.Yb(17,"ngx-datatable-footer"),r.Pc(18,Y,1,1,"ng-template",31),r.Xb(),r.Xb(),r.Xb()),2&e){const e=r.oc();r.Cb(1),r.tc("rows",e.sellers)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto"),r.Cb(1),r.uc("name",r.qc(3,12,"sc_profile")),r.Cb(2),r.uc("name",r.qc(5,14,"sc_name")),r.Cb(2),r.uc("name",r.qc(7,16,"sc_member_since")),r.Cb(2),r.uc("name",r.qc(9,18,"sc_shop_url")),r.Cb(2),r.uc("name",r.qc(11,20,"sc_seller_code")),r.Cb(2),r.uc("name",r.qc(13,22,"sc_country")),r.Cb(2),r.uc("name",r.qc(15,24,"returnexchange_action"))}}let M=(()=>{class e{constructor(e,t,n){this.router=e,this.sellerService=t,this.cs=n,this.temp=[],this.loading=!1,this.filterOptions=["seller_filter_accountStatus","seller_filter_englishFname","seller_filter_country","seller_filter_contactNo","seller_filter_chineseFname","seller_filter_sellerId","seller_filter_email","seller_filter_designHallUrl"],this.selectedFilter="",this.searchTerm=new C.d,this.pagination={CurrentPage:1,HasNext:!1,HasPrevious:!1,PageSize:10,TotalCount:0,TotalPages:1},this.pageSizeOptions=[5,10,25,50],this.sellers=[]}ngOnInit(){this.formCtrlSub=this.searchTerm.valueChanges.debounceTime(2e3).subscribe(e=>{this.fetchSellers()}),this.fetchSellers()}updateFilter(e){const t=e.target.value.toLowerCase();this.searchTerm=t||"",this.fetchSellers()}onSelectFilter(e){this.selectedFilter=this.filterOptions[e].split("_")[2]}ngOnDestroy(){this.formCtrlSub.unsubscribe()}structureData(e=[]){if(console.log(e),e)return e.map(e=>Object.assign(Object.assign({},e),{image:`<img src='${e.imageUrl||"assets/images/user.png"}' class='img-30 mr-2'>`,memberSince:e.memberSince?g(e.memberSince).format("YYYY-MM-DD"):"---"}))}fetchSellers(){const{PageSize:e,CurrentPage:t}=this.pagination;this.loading=!0;let n=`PageSize=${e}&PageNumber=${t}&accountStatus=2`;n=n+"&"+Object(u.a)({[this.selectedFilter]:this.searchTerm.value}),this.sellerService.getFilteredSellerCustomer("sellers",n).subscribe(e=>{if(console.log(e),e){this.cs.isLoading.next(!1),this.sellers=this.structureData(e.body||[]);let t=JSON.parse(e.headers.get("X-Pagination"));t&&(this.pagination=t)}this.loading=!1})}onSelectRow(e,t){console.log(e,t),this.router.navigate([`/sellers-customers/seller/view-detail/${e.sellerId}`])}pageEvent(e){console.log(e),this.pagination.PageSize=e.pageSize,this.pagination.CurrentPage=e.pageIndex+1,this.fetchSellers()}onApplicantScreen(){this.router.navigate(["/sellers-customers/seller/new-applicants"])}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(s.d),r.Sb(b.a),r.Sb(d.a))},e.\u0275cmp=r.Mb({type:e,selectors:[["app-seller"]],viewQuery:function(e,t){var n;1&e&&r.Xc(c.d,!0),2&e&&r.Cc(n=r.lc())&&(t.table=n.first)},decls:25,vars:15,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],[2,"display","flex","align-items","center","font-weight","600"],[1,"font-danger",3,"icon"],[3,"btnType","loading","disabled","btnText","onSubmit"],["ngbDropdown","",1,"d-inline-block"],["myDrop","ngbDropdown"],["id","dropdownManual","ngbDropdownAnchor","",1,"btn","btn-custom","mr-2",2,"color","#f88379","display","inline-flex","align-items","center",3,"focus"],["ngbDropdownMenu","","aria-labelledby","dropdownManual"],["class","btn-custom drop","ngbDropdownItem","",3,"click",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-custom","mr-1"],[1,"card-body"],["style","width: auto; margin: 20px 0px","type","text","class","filter-ngx form-control","placeholder","Search...",3,"formControl",4,"ngIf"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],["class","custom-datatable",4,"ngIf"],["ngbDropdownItem","",1,"btn-custom","drop",3,"click"],["type","text","placeholder","Search...",1,"filter-ngx","form-control",2,"width","auto","margin","20px 0px",3,"formControl"],[1,"custom-datatable"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight"],["prop","image",3,"name"],["prop","englishFname",3,"name"],["prop","memberSince",3,"name"],["prop","designHallUrl",3,"name"],["prop","sellerId",3,"name"],["prop","country",3,"name"],["sortable","false","prop","order id",3,"name"],["ngx-datatable-cell-template",""],["ngx-datatable-footer-template",""],[2,"color","#f88379","cursor","pointer"],[1,"fa","fa-eye",3,"click"],["class","pagination","style","margin-bottom: 10px; width: -webkit-fill-available",4,"ngIf"],[1,"pagination",2,"margin-bottom","10px","width","-webkit-fill-available"],[2,"width","-webkit-fill-available",3,"pageIndex","length","pageSize","pageSizeOptions","page"]],template:function(e,t){if(1&e){const e=r.Zb();r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"div",2),r.Yb(3,"div",3),r.Yb(4,"div",4),r.Yb(5,"div"),r.Yb(6,"h4",5),r.Tb(7,"app-feather-icons",6),r.Rc(8),r.pc(9,"translate"),r.Xb(),r.Yb(10,"app-button",7),r.kc("onSubmit",(function(){return t.onApplicantScreen()})),r.Xb(),r.Xb(),r.Yb(11,"div"),r.Yb(12,"div",8,9),r.Yb(14,"button",10),r.kc("focus",(function(){return r.Hc(e),r.Dc(13).open()})),r.Tb(15,"app-feather-icons",6),r.Xb(),r.Yb(16,"div",11),r.Pc(17,x,3,3,"button",12),r.Xb(),r.Xb(),r.Yb(18,"button",13),r.Tb(19,"app-feather-icons",6),r.Xb(),r.Xb(),r.Xb(),r.Yb(20,"div",14),r.Pc(21,y,1,1,"input",15),r.Yb(22,"div",16),r.Tb(23,"app-loader",17),r.Xb(),r.Pc(24,X,19,26,"div",18),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()}2&e&&(r.Cb(7),r.tc("icon","users"),r.Cb(1),r.Uc("\xa0 ",null==t.pagination?null:t.pagination.TotalCount," ",r.qc(9,13,"sc_sellers")," "),r.Cb(2),r.tc("btnType","submit")("loading",!1)("disabled",t.loading)("btnText","New Applicants"),r.Cb(5),r.tc("icon","eye"),r.Cb(2),r.tc("ngForOf",t.filterOptions),r.Cb(2),r.tc("icon","download"),r.Cb(2),r.tc("ngIf",!t.loading),r.Cb(2),r.tc("loading",t.loading),r.Cb(1),r.tc("ngIf",!t.loading))},directives:[v.a,_.a,a.e,a.f,a.h,i.l,i.m,S.a,a.g,C.b,C.m,C.e,c.d,c.b,c.a,c.e,c.c,P.a],pipes:[l.c],styles:[".drop[_ngcontent-%COMP%]:active{background-color:#f88379;border:none!important;outline:none!important}"]}),e})();function k(e,t){if(1&e){const e=r.Zb();r.Yb(0,"button",18),r.kc("click",(function(){r.Hc(e);const n=t.index;return r.oc().onSelectFilter(n)})),r.Rc(1),r.pc(2,"translate"),r.Xb()}if(2&e){const e=t.$implicit;r.Cb(1),r.Tc(" ",r.qc(2,1,e)," ")}}function R(e,t){if(1&e){const e=r.Zb();r.Yb(0,"div",28),r.Yb(1,"mat-paginator",29),r.kc("page",(function(t){return r.Hc(e),r.oc(3).pageEvent(t)})),r.Xb(),r.Xb()}if(2&e){const e=r.oc(3);r.Cb(1),r.tc("pageIndex",e.pagination.CurrentPage-1)("length",e.pagination.TotalCount)("pageSize",e.pagination.PageSize)("pageSizeOptions",e.pageSizeOptions)}}function T(e,t){if(1&e&&r.Pc(0,R,2,4,"div",27),2&e){const e=r.oc(2);r.tc("ngIf",!e.loading)}}function D(e,t){if(1&e&&(r.Yb(0,"div",19),r.Yb(1,"ngx-datatable",20),r.Tb(2,"ngx-datatable-column",21),r.pc(3,"translate"),r.Tb(4,"ngx-datatable-column",22),r.pc(5,"translate"),r.Tb(6,"ngx-datatable-column",23),r.pc(7,"translate"),r.Tb(8,"ngx-datatable-column",24),r.pc(9,"translate"),r.Tb(10,"ngx-datatable-column",25),r.pc(11,"translate"),r.Yb(12,"ngx-datatable-footer"),r.Pc(13,T,1,1,"ng-template",26),r.Xb(),r.Xb(),r.Xb()),2&e){const e=r.oc();r.Cb(1),r.tc("rows",e.customers)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto"),r.Cb(1),r.uc("name",r.qc(3,10,"sc_profile")),r.Cb(2),r.uc("name",r.qc(5,12,"sc_username")),r.Cb(2),r.uc("name",r.qc(7,14,"sc_email")),r.Cb(2),r.uc("name",r.qc(9,16,"sc_member_since")),r.Cb(2),r.uc("name",r.qc(11,18,"sc_country"))}}let I=(()=>{class e{constructor(e,t,n){this.router=e,this.customerService=t,this.cs=n,this.temp=[],this.loading=!1,this.filterOptions=["customer_filter_none","customer_filter_username","customer_filter_customerId","customer_filter_email"],this.selectedFilter="",this.searchTerm=new C.d,this.pagination={CurrentPage:1,HasNext:!1,HasPrevious:!1,PageSize:10,TotalCount:0,TotalPages:1},this.pageSizeOptions=[5,10,25,50],this.customers=[]}ngOnInit(){this.formCtrlSub=this.searchTerm.valueChanges.debounceTime(2e3).subscribe(e=>{this.fetchSellers()}),this.fetchSellers()}updateFilter(e){const t=e.target.value.toLowerCase();this.searchTerm=t||""}onSelectFilter(e){this.selectedFilter=this.filterOptions[e].split("_")[2]}ngOnDestroy(){this.formCtrlSub.unsubscribe()}fetchSellers(){const{PageSize:e,CurrentPage:t}=this.pagination;this.loading=!0;let n=`PageSize=${e}&PageNumber=${t}`;n=n+"&"+Object(u.a)({[this.selectedFilter]:this.searchTerm.value}),this.customerService.getFilteredSellerCustomer("customers",n).subscribe(e=>{if(console.log(e),e){this.cs.isLoading.next(!1),this.loading=!1,this.customers=this.structureData(e.body||[]);let t=JSON.parse(e.headers.get("X-Pagination"));t&&(this.pagination=t)}})}structureData(e=[]){if(console.log(e),e)return e.map(e=>Object.assign(Object.assign({},e),{image:`<img src='${e.imageUrl||"assets/images/user.png"}' class='img-30 mr-2'>`,memberSince:e.memberSince?g(e.memberSince).format("YYYY-MM-DD"):"---"}))}onSelectRow(e){let t=`/seller-customer/view-detail/${e.replace(/#/g,"")}`;this.router.navigate([t])}pageEvent(e){console.log(e),this.pagination.PageSize=e.pageSize,this.pagination.CurrentPage=e.pageIndex+1,this.fetchSellers()}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(s.d),r.Sb(b.a),r.Sb(d.a))},e.\u0275cmp=r.Mb({type:e,selectors:[["app-customer"]],viewQuery:function(e,t){var n;1&e&&r.Xc(c.d,!0),2&e&&r.Cc(n=r.lc())&&(t.table=n.first)},decls:23,vars:11,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],[2,"display","flex","align-items","center","font-weight","600"],[1,"font-danger",3,"icon"],["type","button",1,"btn","btn-custom","mr-1"],["ngbDropdown","",1,"d-inline-block"],["myDrop","ngbDropdown"],["id","dropdownManual","ngbDropdownAnchor","",1,"btn","btn-custom","mr-2",2,"color","#f88379","display","inline-flex","align-items","center",3,"focus"],["ngbDropdownMenu","","aria-labelledby","dropdownManual"],["class","btn-custom drop","ngbDropdownItem","",3,"click",4,"ngFor","ngForOf"],[1,"card-body"],["type","text","placeholder","Search...",1,"filter-ngx","form-control",2,"width","auto","margin","20px 0px",3,"formControl"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],["class","custom-datatable",4,"ngIf"],["ngbDropdownItem","",1,"btn-custom","drop",3,"click"],[1,"custom-datatable"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight"],["prop","image",3,"name"],["prop","username",3,"name"],["prop","email",3,"name"],["prop","memberSince",3,"name"],["prop","country",3,"name"],["ngx-datatable-footer-template",""],["class","pagination","style","margin-bottom: 10px; width: -webkit-fill-available",4,"ngIf"],[1,"pagination",2,"margin-bottom","10px","width","-webkit-fill-available"],[2,"width","-webkit-fill-available",3,"pageIndex","length","pageSize","pageSizeOptions","page"]],template:function(e,t){if(1&e){const e=r.Zb();r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"div",2),r.Yb(3,"div",3),r.Yb(4,"div",4),r.Yb(5,"h4",5),r.Tb(6,"app-feather-icons",6),r.Rc(7),r.pc(8,"translate"),r.Xb(),r.Yb(9,"div"),r.Yb(10,"button",7),r.Tb(11,"app-feather-icons",6),r.Xb(),r.Yb(12,"div",8,9),r.Yb(14,"button",10),r.kc("focus",(function(){return r.Hc(e),r.Dc(13).open()})),r.Tb(15,"app-feather-icons",6),r.Xb(),r.Yb(16,"div",11),r.Pc(17,k,3,3,"button",12),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Yb(18,"div",13),r.Tb(19,"input",14),r.Yb(20,"div",15),r.Tb(21,"app-loader",16),r.Xb(),r.Pc(22,D,14,20,"div",17),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()}2&e&&(r.Cb(6),r.tc("icon","users"),r.Cb(1),r.Uc("\xa0 ",null==t.pagination?null:t.pagination.TotalCount," ",r.qc(8,9,"sc_customers")," "),r.Cb(4),r.tc("icon","download"),r.Cb(4),r.tc("icon","eye"),r.Cb(2),r.tc("ngForOf",t.filterOptions),r.Cb(2),r.tc("formControl",t.searchTerm),r.Cb(2),r.tc("loading",t.loading),r.Cb(1),r.tc("ngIf",!t.loading))},directives:[v.a,a.e,a.f,a.h,i.l,C.b,C.m,C.e,S.a,i.m,a.g,c.d,c.b,c.e,c.c,P.a],pipes:[l.c],styles:[".drop[_ngcontent-%COMP%]:active{background-color:#f88379;border:none!important;outline:none!important}"]}),e})();var j=n("Nj5G");let z=(()=>{class e{constructor(e,t,n){this.sellerService=e,this.cs=t,this.activeRoute=n,this.loading=!1,this.tabsStructure=[{tab:"Products",tabIcon:"user",params:"status=0",url:"",cardButtons:[!0,!0,!0],rejectModal:!0},{tab:"Approved",tabIcon:"settings",params:"status=2",cardButtons:[!0,!1,!0],rejectModal:!0},{tab:"Rejected",tabIcon:"settings",params:"status=1",cardButtons:[!0,!0,!1],rejectModal:!0}];let i=this.activeRoute.params.value.id;if(i){let e=`admin/get-products-by-seller/${i}`;this.tabsStructure[0].url=e,this.tabsStructure[1].url=e,this.tabsStructure[2].url=e}this.cs.isLoading.subscribe(e=>{this.loading=e})}ngOnInit(){}generatePostData(e=[],t){let n={};return e.forEach(e=>{n[e]=t}),n}getData(e){let t={};console.log(e),t=this.generatePostData(e.selected,0==e.tab?0==e.button?2:1:0),this.sellerService.approveRejectSellerProduct({productList:t}).subscribe(e=>{this.cs.isLoading.next(!1),console.log(e)})}onEdit(e){console.log(e)}onApprove(e){this.updateProductStatus({productList:{[e]:2}})}onReject(e){this.updateProductStatus({productList:{[e.id]:1}})}onPending(e){this.updateProductStatus({productList:{[e]:0}})}updateProductStatus(e){this.sellerService.approveRejectSellerProduct(e).subscribe(e=>{this.cs.isLoading.next(!1),console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(b.a),r.Sb(d.a),r.Sb(s.a))},e.\u0275cmp=r.Mb({type:e,selectors:[["app-seller-products"]],decls:1,vars:1,consts:[[3,"tabsStructure","sendSelected","onEditCard","onApproveCard","onRejectCard","onPendingCard"]],template:function(e,t){1&e&&(r.Yb(0,"app-product-tab-view",0),r.kc("sendSelected",(function(e){return t.getData(e)}))("onEditCard",(function(e){return t.onEdit(e)}))("onApproveCard",(function(e){return t.onApprove(e)}))("onRejectCard",(function(e){return t.onReject(e)}))("onPendingCard",(function(e){return t.onPending(e)})),r.Xb()),2&e&&r.tc("tabsStructure",t.tabsStructure)},directives:[j.a],styles:[""]}),e})();function H(e,t){if(1&e){const e=r.Zb();r.Yb(0,"span",24),r.Yb(1,"i",25),r.kc("click",(function(){r.Hc(e);const n=t.row,i=r.oc(2),a=r.Dc(16);return i.openFormModal(n,a)})),r.Xb(),r.Xb()}}function q(e,t){if(1&e){const e=r.Zb();r.Yb(0,"span",26),r.Yb(1,"i",27),r.kc("click",(function(){r.Hc(e);const n=t.row;return r.oc(2).onApproveSeller(n)})),r.Xb(),r.Xb(),r.Yb(2,"span",26),r.Yb(3,"i",28),r.kc("click",(function(){r.Hc(e);const n=t.row,i=r.oc(2),a=r.Dc(14);return i.onConfirmModal(n,a)})),r.Xb(),r.Xb()}}function F(e,t){if(1&e){const e=r.Zb();r.Yb(0,"div",30),r.Yb(1,"mat-paginator",31),r.kc("page",(function(t){return r.Hc(e),r.oc(3).pageEvent(t)})),r.Xb(),r.Xb()}if(2&e){const e=r.oc(3);r.Cb(1),r.tc("pageIndex",e.pagination.CurrentPage-1)("length",e.pagination.TotalCount)("pageSize",e.pagination.PageSize)("pageSizeOptions",e.pageSizeOptions)}}function L(e,t){if(1&e&&r.Pc(0,F,2,4,"div",29),2&e){const e=r.oc(2);r.tc("ngIf",!e.loading)}}function $(e,t){if(1&e&&(r.Yb(0,"div",13),r.Yb(1,"ngx-datatable",14),r.Tb(2,"ngx-datatable-column",15),r.pc(3,"translate"),r.Tb(4,"ngx-datatable-column",16),r.pc(5,"translate"),r.Tb(6,"ngx-datatable-column",17),r.pc(7,"translate"),r.Tb(8,"ngx-datatable-column",18),r.pc(9,"translate"),r.Tb(10,"ngx-datatable-column",19),r.pc(11,"translate"),r.Tb(12,"ngx-datatable-column",20),r.pc(13,"translate"),r.Yb(14,"ngx-datatable-column",21),r.pc(15,"translate"),r.Pc(16,H,2,0,"ng-template",22),r.Xb(),r.Yb(17,"ngx-datatable-column",21),r.pc(18,"translate"),r.Pc(19,q,4,0,"ng-template",22),r.Xb(),r.Yb(20,"ngx-datatable-footer"),r.Pc(21,L,1,1,"ng-template",23),r.Xb(),r.Xb(),r.Xb()),2&e){const e=r.oc();r.Cb(1),r.tc("rows",e.sellers)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto"),r.Cb(1),r.uc("name",r.qc(3,13,"sc_profile")),r.Cb(2),r.uc("name",r.qc(5,15,"sc_name")),r.Cb(2),r.uc("name",r.qc(7,17,"sc_member_since")),r.Cb(2),r.uc("name",r.qc(9,19,"sc_shop_url")),r.Cb(2),r.uc("name",r.qc(11,21,"sc_seller_code")),r.Cb(2),r.uc("name",r.qc(13,23,"sc_country")),r.Cb(2),r.uc("name",r.qc(15,25,"ap_signup")),r.Cb(3),r.uc("name",r.qc(18,27,"ap_action"))}}function U(e,t){if(1&e){const e=r.Zb();r.Yb(0,"div",32),r.Yb(1,"h5",33),r.Rc(2,"Update Price"),r.Xb(),r.Yb(3,"button",34),r.kc("click",(function(){return t.$implicit.dismiss("Cross click")})),r.Yb(4,"span",35),r.Rc(5,"\xd7"),r.Xb(),r.Xb(),r.Xb(),r.Yb(6,"div",36),r.Yb(7,"div",37),r.Yb(8,"div"),r.Yb(9,"label",38),r.Rc(10,"Reason"),r.Xb(),r.Yb(11,"input",39),r.kc("ngModelChange",(function(t){return r.Hc(e),r.oc().reason=t})),r.Xb(),r.Xb(),r.Xb(),r.Yb(12,"div",40),r.Yb(13,"button",41),r.kc("click",(function(){return r.Hc(e),r.oc().onRejectSeller()})),r.Rc(14," Reject "),r.Xb(),r.Xb(),r.Xb()}if(2&e){const e=r.oc();r.Cb(11),r.tc("ngModel",e.reason)}}function E(e,t){if(1&e){const e=r.Zb();r.Yb(0,"div",32),r.Yb(1,"h5",33),r.Rc(2,"Seller Form Data"),r.Xb(),r.Yb(3,"button",34),r.kc("click",(function(){return t.$implicit.dismiss("Cross click")})),r.Yb(4,"span",35),r.Rc(5,"\xd7"),r.Xb(),r.Xb(),r.Xb(),r.Yb(6,"div",36),r.Yb(7,"div",37),r.Yb(8,"div"),r.Yb(9,"label",38),r.Rc(10,"Reason"),r.Xb(),r.Yb(11,"input",39),r.kc("ngModelChange",(function(t){return r.Hc(e),r.oc().reason=t})),r.Xb(),r.Xb(),r.Xb(),r.Yb(12,"div",40),r.Yb(13,"button",41),r.kc("click",(function(){return t.$implicit.dismiss("Cross click")})),r.Rc(14," Reject "),r.Xb(),r.Xb(),r.Xb()}if(2&e){const e=r.oc();r.Cb(11),r.tc("ngModel",e.reason)}}const A=[{path:"",children:[{path:"seller",component:M,data:{title:"Sellers",breadcrumb:"Sellers"}},{path:"customer",component:I,data:{title:"Customers",breadcrumb:"Customers"}},{path:"seller/new-applicants",component:(()=>{class e{constructor(e,t,n,i){this.modalService=e,this.router=t,this.sellerService=n,this.cs=i,this.temp=[],this.loading=!1,this.filterOptions=["seller_filter_country","seller_filter_date","seller_filter_fname","seller_filter_lname","seller_filter_seller_url","seller_filter_seller_name","seller_filter_seller_code"],this.reason="",this.rejectId=null,this.pagination={CurrentPage:1,HasNext:!1,HasPrevious:!1,PageSize:10,TotalCount:0,TotalPages:1},this.pageSizeOptions=[5,10,25,50],this.sellers=[]}open(e){console.log(e),this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then(e=>{this.closeResult=`Closed with: ${e}`,this.reason=null},e=>{this.closeResult=`Dismissed ${this.getDismissReason(e)}`,this.reason=null})}getDismissReason(e){return e===a.a.ESC?"by pressing ESC":e===a.a.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${e}`}ngOnInit(){this.fetchSellers()}fetchById(e){this.sellerService.getById("seller",e).subscribe(e=>{e&&(console.log("fetch res---",e.body),this.details=e.body),this.cs.isLoading.next(!1)})}openFormModal(e,t){this.fetchById(e.sellerId),this.open(t)}structureData(e=[]){if(console.log(e),e)return e.map(e=>Object.assign(Object.assign({},e),{image:`<img src='${e.imageUrl||"assets/images/user.png"}' class='img-30 mr-2'>`,memberSince:e.memberSince?g(e.memberSince).format("YYYY-MM-DD"):"---"}))}fetchSellers(){const{PageSize:e,CurrentPage:t}=this.pagination;this.loading=!0,this.sellerService.getFilteredSellerCustomer("sellers",`PageSize=${e}&PageNumber=${t}&accountStatus=0`).subscribe(e=>{if(console.log(e),e){this.sellers=this.structureData(e.body||[]);let t=JSON.parse(e.headers.get("X-Pagination"));t&&(this.pagination=t),this.loading=!1,this.cs.isLoading.next(!1)}})}onSelectRow(e,t){console.log(e,t),this.router.navigate([`/sellers-customers/seller/view-detail/${e.sellerId}`])}pageEvent(e){console.log(e),this.pagination.PageSize=e.pageSize,this.pagination.CurrentPage=e.pageIndex+1,this.fetchSellers()}onConfirmModal(e,t){this.rejectId=e.sellerId,this.open(t)}onApproveSeller(e){this.updateStatus({uuid:e.sellerId,status:2})}onRejectSeller(){this.updateStatus({uuid:this.rejectId,status:1})}updateStatus(e){this.loading=!0,this.sellerService.approveRejectSeller("seller",Object.assign(Object.assign({},e),{notification:!0})).subscribe(e=>{this.loading=!1,this.cs.isLoading.next(!1),console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(a.j),r.Sb(s.d),r.Sb(b.a),r.Sb(d.a))},e.\u0275cmp=r.Mb({type:e,selectors:[["app-applicants"]],viewQuery:function(e,t){var n;1&e&&r.Xc(c.d,!0),2&e&&r.Cc(n=r.lc())&&(t.table=n.first)},decls:17,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],[2,"display","flex","align-items","center","font-weight","600"],[1,"font-danger",3,"icon"],[1,"card-body"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],["class","custom-datatable",4,"ngIf"],["ReasonModal",""],["SellerFormModal",""],[1,"custom-datatable"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight"],["prop","image",3,"name"],["prop","englishFname",3,"name"],["prop","memberSince",3,"name"],["prop","member_since",3,"name"],["prop","sellerId",3,"name"],["prop","country",3,"name"],["sortable","false","prop","order id",3,"name"],["ngx-datatable-cell-template",""],["ngx-datatable-footer-template",""],[2,"color","#f88379","cursor","pointer"],[1,"fa","fa-eye","fa-lg",3,"click"],[2,"color","#f88379","cursor","pointer","margin","0px 8px"],[1,"fa","fa-thumbs-o-up","fa-lg",3,"click"],[1,"fa","fa-thumbs-o-down","fa-lg",3,"click"],["class","pagination","style","margin-bottom: 10px; width: -webkit-fill-available",4,"ngIf"],[1,"pagination",2,"margin-bottom","10px","width","-webkit-fill-available"],[2,"width","-webkit-fill-available",3,"pageIndex","length","pageSize","pageSizeOptions","page"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"form-group"],["for","price"],["type","text","id","reason","aria-describedby","reason","placeholder","Enter Reason",1,"form-control",3,"ngModel","ngModelChange"],[1,"action"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"div",2),r.Yb(3,"div",3),r.Yb(4,"div",4),r.Yb(5,"h4",5),r.Tb(6,"app-feather-icons",6),r.Rc(7),r.pc(8,"translate"),r.Xb(),r.Xb(),r.Yb(9,"div",7),r.Yb(10,"div",8),r.Tb(11,"app-loader",9),r.Xb(),r.Pc(12,$,22,29,"div",10),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Pc(13,U,15,1,"ng-template",null,11,r.Qc),r.Pc(15,E,15,1,"ng-template",null,12,r.Qc)),2&e&&(r.Cb(6),r.tc("icon","users"),r.Cb(1),r.Uc("\xa0 ",t.sellers.length," ",r.qc(8,5,"ap_applicants")," "),r.Cb(4),r.tc("loading",t.loading),r.Cb(1),r.tc("ngIf",!t.loading))},directives:[v.a,S.a,i.m,c.d,c.b,c.a,c.e,c.c,P.a,C.b,C.m,C.p],pipes:[l.c],styles:[".drop[_ngcontent-%COMP%]:active{background-color:#f88379;border:none!important;outline:none!important}"]}),e})(),data:{title:"View Detail",breadcrumb:"View Detail"}},{path:"seller/view-detail/:id",component:p,data:{title:"View Detail",breadcrumb:"View Detail"}},{path:"seller/:id/product-list",component:z,data:{title:"Products",breadcrumb:"Products"}}]}];let N=(()=>{class e{}return e.\u0275mod=r.Qb({type:e}),e.\u0275inj=r.Pb({factory:function(t){return new(t||e)},imports:[[s.h.forChild(A)],s.h]}),e})();var B=n("PCNd");let Z=(()=>{class e{}return e.\u0275mod=r.Qb({type:e}),e.\u0275inj=r.Pb({factory:function(t){return new(t||e)},imports:[[i.c,a.k,C.t,C.h,N,o.b,c.f,B.a]]}),e})()}}]);