(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3TMC":function(t,e,a){"use strict";a.r(e),a.d(e,"CampaignModule",(function(){return P}));var i=a("ofXK"),n=a("1kSV"),o=a("3Pt+"),c=a("lDzL"),s=a("tyNb"),l=a("fXoL"),b=a("EfS0");let r=(()=>{class t{constructor(t){this.commonService=t}getAllCampaigns(t=""){return this.commonService.get(`admin/get-all-campaigns${t}`)}getRandomCampaigns(t=""){return this.commonService.get(`admin/get-random-campaigns${t}`)}updateCampaignStatus(t,e){return this.commonService.get(`admin/campaign-status-update/${t}-${e}`)}createCampaign(t){return this.commonService.post("admin/create-campaign",t)}removeCampaign(t){return this.commonService.delete(`admin/delete-campaign/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(l.gc(b.a))},t.\u0275prov=l.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=a("CRtM"),p=a("668k"),g=a("pqks"),m=a("VkHG"),u=a("sYmb");function h(t,e){if(1&t&&(l.Yb(0,"div",23),l.Yb(1,"h5",24),l.Rc(2,"Template"),l.Xb(),l.Yb(3,"button",25),l.kc("click",(function(){return e.$implicit.dismiss("Cross click")})),l.Yb(4,"span",26),l.Rc(5,"\xd7"),l.Xb(),l.Xb(),l.Xb(),l.Yb(6,"div",27),l.Tb(7,"div",28),l.Tb(8,"div",29),l.Xb()),2&t){const t=l.oc();l.Cb(7),l.tc("innerHTML",t.template,l.Ic)}}let f=(()=>{class t{constructor(t,e,a,i){this.router=t,this.campaignService=e,this.cs=a,this.modalService=i,this.name="",this.status=0,this.template="",this.campaigns=[],this.loading=!1,this.cs.isLoading.subscribe(t=>{this.loading=t})}open(t){console.log(t),this.modalService.open(t,{ariaLabelledBy:"modal-basic-title"}).result.then(t=>{this.closeResult=`Closed with: ${t}`},t=>{this.closeResult=`Dismissed ${this.getDismissReason(t)}`})}getDismissReason(t){return t===n.a.ESC?"by pressing ESC":t===n.a.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${t}`}ngOnInit(){}goBack(){this.router.navigate(["/campaign"])}handleChange(t,e){console.log(t,e),this.template=t}onAddCampaign(){console.log(this.name,this.template),this.loading=!0,this.campaignService.createCampaign({name:this.name,text:this.template,status:this.status}).subscribe(t=>{this.cs.isLoading.next(!1),this.goBack(),this.loading=!1})}onViewTemplate(t){this.open(t)}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(s.d),l.Sb(r),l.Sb(b.a),l.Sb(n.j))},t.\u0275cmp=l.Mb({type:t,selectors:[["app-campaign"]],decls:48,vars:15,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xl-8",2,"padding-right","0%"],["id","name","name","name","type","text","required","",1,"form-control","field-margin",3,"ngModel","placeholder","ngModelChange"],[2,"background","white"],[3,"text","textChange","textEmit"],[1,"col-xl-4",2,"padding-left","0%"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],[2,"background","white","margin","0px 10px","border-radius","10px 10px 0px 0px","padding","10px","border","solid lightgrey 1px","border-bottom","none"],[2,"align-items","center"],[2,"justify-content","flex-end","display","flex"],["type","button",1,"btn","btn-primary",3,"click"],[2,"align-items","center","display","flex"],[1,"font-warning",3,"icon"],["id","status","name","status",1,"form-control",3,"ngModel","ngModelChange"],["value","0"],["value","1"],[2,"margin","0px 10px"],[2,"margin","0px 10px","border-radius","0px 0px 10px 10px","padding","10px","justify-content","space-between","display","flex","background","#f4f4f4","border","solid lightgrey 1px","border-top","none"],[2,"color","#f88379","align-items","center","display","flex","font-weight","500","cursor","pointer","padding","0px 10px",3,"click"],[3,"btnType","loading","disabled","btnText","onSubmit"],["TemplateModal",""],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"innerHTML"],[1,"action"]],template:function(t,e){if(1&t){const t=l.Zb();l.Yb(0,"div",0),l.Yb(1,"h3"),l.Rc(2,"Add New Post"),l.Xb(),l.Yb(3,"div",1),l.Yb(4,"div",2),l.Yb(5,"div"),l.Yb(6,"input",3),l.kc("ngModelChange",(function(t){return e.name=t})),l.pc(7,"translate"),l.Xb(),l.Xb(),l.Tb(8,"br"),l.Yb(9,"div",4),l.Yb(10,"app-text-editor",5),l.kc("textChange",(function(t){return e.template=t}))("textEmit",(function(t){return e.handleChange(t,"template")})),l.Xb(),l.Xb(),l.Tb(11,"br"),l.Xb(),l.Yb(12,"div",6),l.Yb(13,"div",7),l.Tb(14,"app-loader",8),l.Xb(),l.Yb(15,"div"),l.Yb(16,"div",9),l.Yb(17,"div",10),l.Yb(18,"h3"),l.Rc(19),l.pc(20,"translate"),l.Xb(),l.Xb(),l.Tb(21,"hr"),l.Yb(22,"div"),l.Yb(23,"div",11),l.Yb(24,"button",12),l.kc("click",(function(){l.Hc(t);const a=l.Dc(47);return e.onViewTemplate(a)})),l.Rc(25," preview "),l.Xb(),l.Xb(),l.Tb(26,"br"),l.Yb(27,"div",13),l.Tb(28,"app-feather-icons",14),l.Rc(29,"\xa0 "),l.Yb(30,"span"),l.Rc(31,"Status :"),l.Xb(),l.Rc(32,"\xa0 "),l.Yb(33,"div"),l.Yb(34,"select",15),l.kc("ngModelChange",(function(t){return e.status=t})),l.Yb(35,"option",16),l.Rc(36,"Draft"),l.Xb(),l.Yb(37,"option",17),l.Rc(38,"Publish"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Tb(39,"br"),l.Xb(),l.Tb(40,"br"),l.Xb(),l.Tb(41,"hr",18),l.Yb(42,"div",19),l.Yb(43,"div",20),l.kc("click",(function(){return e.goBack()})),l.Rc(44," Go Back "),l.Xb(),l.Yb(45,"app-button",21),l.kc("onSubmit",(function(){return e.onAddCampaign()})),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Pc(46,h,9,1,"ng-template",null,22,l.Qc)}2&t&&(l.Cb(6),l.uc("placeholder",l.qc(7,11,"mag_name")),l.tc("ngModel",e.name),l.Cb(4),l.tc("text",e.template),l.Cb(4),l.tc("loading",e.loading),l.Cb(5),l.Sc(l.qc(20,13,"Publish")),l.Cb(9),l.tc("icon","key"),l.Cb(6),l.tc("ngModel",e.status),l.Cb(11),l.tc("btnType","submit")("loading",!1)("disabled",e.loading)("btnText","Add Campaign"))},directives:[o.b,o.u,o.m,o.p,d.a,p.a,g.a,o.v,o.q,o.x,m.a],pipes:[u.c],styles:[""]}),t})();var v=a("M9IT");function C(t,e){if(1&t){const t=l.Zb();l.Yb(0,"div"),l.Yb(1,"span",19),l.Yb(2,"i",20),l.kc("click",(function(){l.Hc(t);const a=e.row,i=l.oc(2),n=l.Dc(15);return i.onViewTemplate(a,n)})),l.Xb(),l.Xb(),l.Yb(3,"span",21),l.Yb(4,"i",22),l.kc("click",(function(){l.Hc(t);const a=e.row;return l.oc(2).onDelete(a)})),l.Xb(),l.Xb(),l.Xb()}}function x(t,e){if(1&t){const t=l.Zb();l.Yb(0,"div",24),l.Yb(1,"mat-paginator",25),l.kc("page",(function(e){return l.Hc(t),l.oc(3).pageEvent(e)})),l.Xb(),l.Xb()}if(2&t){const t=l.oc(3);l.Cb(1),l.tc("pageIndex",t.pagination.CurrentPage-1)("length",t.pagination.TotalCount)("pageSize",t.pagination.PageSize)("pageSizeOptions",t.pageSizeOptions)}}function X(t,e){if(1&t&&l.Pc(0,x,2,4,"div",23),2&t){const t=l.oc(2);l.tc("ngIf",!t.loading)}}function Y(t,e){if(1&t&&(l.Yb(0,"div",11),l.Yb(1,"ngx-datatable",12),l.Tb(2,"ngx-datatable-column",13),l.pc(3,"translate"),l.Tb(4,"ngx-datatable-column",14),l.pc(5,"translate"),l.Tb(6,"ngx-datatable-column",15),l.pc(7,"translate"),l.Yb(8,"ngx-datatable-column",16),l.pc(9,"translate"),l.Pc(10,C,5,0,"ng-template",17),l.Xb(),l.Yb(11,"ngx-datatable-footer"),l.Pc(12,X,1,1,"ng-template",18),l.Xb(),l.Xb(),l.Xb()),2&t){const t=l.oc();l.Cb(1),l.tc("rows",t.campaigns)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",5),l.Cb(1),l.uc("name",l.qc(3,10,"campaign_image")),l.Cb(2),l.uc("name",l.qc(5,12,"campaign_name")),l.Cb(2),l.uc("name",l.qc(7,14,"campaign_status")),l.Cb(2),l.uc("name",l.qc(9,16,"campaign_action"))}}function k(t,e){if(1&t){const t=l.Zb();l.Yb(0,"div",33),l.Yb(1,"button",34),l.kc("click",(function(){return l.Hc(t),l.oc(2).onPublish()})),l.Rc(2," Publish "),l.Xb(),l.Xb()}}function S(t,e){if(1&t&&(l.Yb(0,"div",26),l.Yb(1,"h5",27),l.Rc(2,"Template"),l.Xb(),l.Yb(3,"button",28),l.kc("click",(function(){return e.$implicit.dismiss("Cross click")})),l.Yb(4,"span",29),l.Rc(5,"\xd7"),l.Xb(),l.Xb(),l.Xb(),l.Yb(6,"div",30),l.Tb(7,"div",31),l.Pc(8,k,3,0,"div",32),l.Xb()),2&t){const t=l.oc();l.Cb(7),l.tc("innerHTML",t.selectedRow.text,l.Ic),l.Cb(1),l.tc("ngIf","Published"!=t.selectedRow.status)}}const y=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t,e,a,i){this.router=t,this.campaignService=e,this.cs=a,this.modalService=i,this.campaigns=[],this.temp=[],this.loading=!1,this.pagination={CurrentPage:1,HasNext:!1,HasPrevious:!1,PageSize:10,TotalCount:0,TotalPages:1},this.pageSizeOptions=[5,10,25,50],this.getCampaigns()}open(t){console.log(t),this.modalService.open(t,{ariaLabelledBy:"modal-basic-title"}).result.then(t=>{this.closeResult=`Closed with: ${t}`,this.selectedRow=null},t=>{this.closeResult=`Dismissed ${this.getDismissReason(t)}`,this.selectedRow=null})}getDismissReason(t){return t===n.a.ESC?"by pressing ESC":t===n.a.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${t}`}ngOnInit(){}onAdd(){this.router.navigate(["/campaign/create-campaign"])}onDelete(t){console.log(t,"delete"),this.campaignService.removeCampaign(t.id).subscribe(t=>{console.log("deleted"),this.getCampaigns()})}pageEvent(t){console.log(t),this.pagination.PageSize=t.pageSize,this.pagination.CurrentPage=t.pageIndex+1,this.getCampaigns()}getCampaigns(){const{PageSize:t,CurrentPage:e}=this.pagination;this.loading=!0,this.campaignService.getAllCampaigns(`?PageSize=${t}&PageNumber=${e}`).subscribe(t=>{if(t){this.cs.isLoading.next(!1),this.loading=!1,this.campaigns=t.body||[];let e=JSON.parse(t.headers.get("X-Pagination"));e&&(this.pagination=e)}})}onViewTemplate(t,e){this.selectedRow=t,this.open(e)}onPublish(){this.campaignService.updateCampaignStatus(this.selectedRow.id,1).subscribe(t=>{t&&(this.cs.isLoading.next(!1),this.loading=!1)})}}return t.\u0275fac=function(e){return new(e||t)(l.Sb(s.d),l.Sb(r),l.Sb(b.a),l.Sb(n.j))},t.\u0275cmp=l.Mb({type:t,selectors:[["app-campaign-list"]],viewQuery:function(t,e){var a;1&t&&l.Xc(c.d,!0),2&t&&l.Cc(a=l.lc())&&(e.table=a.first)},decls:16,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],[2,"margin-left","10px",3,"btnType","btnText","onSubmit"],[1,"card-body"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],["class","custom-datatable",4,"ngIf"],["TemplateModal",""],[1,"custom-datatable"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight","limit"],["prop","image",3,"name"],["prop","name",3,"name"],["prop","status",3,"name"],["sortable","false","prop","order id",3,"name"],["ngx-datatable-cell-template",""],["ngx-datatable-footer-template",""],[2,"color","#f88379","cursor","pointer"],[1,"fa","fa-eye",3,"click"],[2,"color","#f88379","cursor","pointer","margin-left","10px"],[1,"fa","fa-trash-o",3,"click"],["class","pagination","style","margin-bottom: 10px; width: -webkit-fill-available",4,"ngIf"],[1,"pagination",2,"margin-bottom","10px","width","-webkit-fill-available"],[2,"width","-webkit-fill-available",3,"pageIndex","length","pageSize","pageSizeOptions","page"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"innerHTML"],["class","action","style","text-align: end",4,"ngIf"],[1,"action",2,"text-align","end"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"div",2),l.Yb(3,"div",3),l.Yb(4,"div",4),l.Yb(5,"h5"),l.Rc(6),l.pc(7,"translate"),l.Xb(),l.Yb(8,"app-button",5),l.kc("onSubmit",(function(){return e.onAdd()})),l.Xb(),l.Xb(),l.Yb(9,"div",6),l.Tb(10,"br"),l.Yb(11,"div",7),l.Tb(12,"app-loader",8),l.Xb(),l.Pc(13,Y,13,18,"div",9),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Pc(14,S,9,2,"ng-template",null,10,l.Qc)),2&t&&(l.Cb(6),l.Sc(l.qc(7,5,"Campiagns")),l.Cb(2),l.tc("btnType","submit")("btnText","Add"),l.Cb(4),l.tc("loading",e.loading),l.Cb(1),l.tc("ngIf",!e.loading))},directives:[m.a,p.a,i.l,c.d,c.b,c.a,c.e,c.c,v.a],pipes:[u.c],styles:[""]}),t})(),data:{title:"Campaign",breadcrumb:"Campaign"}},{path:"create-campaign",component:f,data:{title:"Campaign",breadcrumb:"Campaign"}},{path:"edit-campaign/:id",component:f,data:{title:"Campaign",breadcrumb:"Campaign"}}]}];let w=(()=>{class t{}return t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(e){return new(e||t)},imports:[[s.h.forChild(y)],s.h]}),t})();var T=a("PCNd");let P=(()=>{class t{}return t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(e){return new(e||t)},imports:[[i.c,w,n.k,o.t,o.h,c.f,T.a]]}),t})()}}]);