(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3TMC":function(t,e,a){"use strict";a.r(e),a.d(e,"CampaignModule",(function(){return D}));var i=a("ofXK"),n=a("1kSV"),o=a("3Pt+"),c=a("lDzL"),s=a("tyNb"),r=a("fXoL"),l=a("EfS0");let b=(()=>{class t{constructor(t){this.commonService=t}getAllCampaigns(t=""){return this.commonService.get(`admin/get-all-campaigns${t}`)}getRandomCampaigns(t=""){return this.commonService.get(`admin/get-random-campaigns${t}`)}updateCampaignStatus(t,e){return this.commonService.get(`admin/campaign-status-update/${t}-${e}`)}createCampaign(t){return this.commonService.post("admin/create-campaign",t)}removeCampaign(t){return this.commonService.delete(`admin/delete-campaign/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(r.gc(l.a))},t.\u0275prov=r.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=a("YpNe"),p=a("CRtM"),g=a("668k"),m=a("VkHG"),u=a("pqks"),h=a("sYmb");function f(t,e){if(1&t&&(r.Yb(0,"div",23),r.Yb(1,"h5",24),r.Rc(2,"Template"),r.Xb(),r.Yb(3,"button",25),r.kc("click",(function(){return e.$implicit.dismiss("Cross click")})),r.Yb(4,"span",26),r.Rc(5,"\xd7"),r.Xb(),r.Xb(),r.Xb(),r.Yb(6,"div",27),r.Tb(7,"div",28),r.Tb(8,"div",29),r.Xb()),2&t){const t=r.oc();r.Cb(7),r.tc("innerHTML",t.template,r.Ic)}}let v=(()=>{class t{constructor(t,e,a,i){this.router=t,this.campaignService=e,this.cs=a,this.modalService=i,this.name="",this.status=0,this.template="",this.campaigns=[],this.loading=!1,this.config={clickable:!0,maxFiles:1,autoReset:null,errorReset:null,cancelReset:null,autoProcessQueue:!1,autoQueue:!1,addRemoveLinks:!0},this.cs.isLoading.subscribe(t=>{this.loading=t})}open(t){console.log(t),this.modalService.open(t,{ariaLabelledBy:"modal-basic-title"}).result.then(t=>{this.closeResult=`Closed with: ${t}`},t=>{this.closeResult=`Dismissed ${this.getDismissReason(t)}`})}getDismissReason(t){return t===n.a.ESC?"by pressing ESC":t===n.a.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${t}`}ngOnInit(){}goBack(){this.router.navigate(["/campaign"])}handleChange(t,e){this.template=t}onAddCampaign(){this.loading=!0,this.campaignService.createCampaign({name:this.name,text:this.template,status:this.status}).subscribe(t=>{this.cs.isLoading.next(!1),this.goBack(),this.loading=!1})}onViewTemplate(t){this.open(t)}onUploadError(t){}onUploadSuccess(t){}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(s.d),r.Sb(b),r.Sb(l.a),r.Sb(n.j))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-campaign"]],decls:49,vars:21,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xl-8",2,"padding-right","0%"],["id","name","name","name","type","text","required","",1,"form-control","field-margin",3,"ngModel","placeholder","ngModelChange"],[3,"config","message","error","success"],[2,"background","white"],[3,"text","textChange","textEmit"],[1,"col-xl-4",2,"padding-left","0%"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],[2,"background","white","margin","0px 10px","border-radius","10px 10px 0px 0px","padding","10px","border","solid lightgrey 1px","border-bottom","none"],[2,"align-items","center"],[2,"justify-content","flex-end","display","flex"],[3,"btnType","loading","disabled","btnText","onSubmit"],[2,"align-items","center","display","flex"],[1,"font-warning",3,"icon"],["id","status","name","status",1,"form-control",3,"ngModel","ngModelChange"],["value","0"],["value","1"],[2,"margin","0px 10px"],[2,"margin","0px 10px","border-radius","0px 0px 10px 10px","padding","10px","justify-content","space-between","display","flex","background","#f4f4f4","border","solid lightgrey 1px","border-top","none"],[2,"color","#f88379","align-items","center","display","flex","font-weight","500","cursor","pointer","padding","0px 10px",3,"click"],["TemplateModal",""],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"innerHTML"],[1,"action"]],template:function(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",0),r.Yb(1,"h3"),r.Rc(2,"Add New Post"),r.Xb(),r.Yb(3,"div",1),r.Yb(4,"div",2),r.Yb(5,"div"),r.Yb(6,"input",3),r.kc("ngModelChange",(function(t){return e.name=t})),r.pc(7,"translate"),r.Xb(),r.Xb(),r.Tb(8,"br"),r.Yb(9,"dropzone",4),r.kc("error",(function(t){return e.onUploadError(t)}))("success",(function(t){return e.onUploadSuccess(t)})),r.Xb(),r.Tb(10,"br"),r.Yb(11,"div",5),r.Yb(12,"app-text-editor",6),r.kc("textChange",(function(t){return e.template=t}))("textEmit",(function(t){return e.handleChange(t,"template")})),r.Xb(),r.Xb(),r.Tb(13,"br"),r.Xb(),r.Yb(14,"div",7),r.Yb(15,"div",8),r.Tb(16,"app-loader",9),r.Xb(),r.Yb(17,"div"),r.Yb(18,"div",10),r.Yb(19,"div",11),r.Yb(20,"h3"),r.Rc(21),r.pc(22,"translate"),r.Xb(),r.Xb(),r.Tb(23,"hr"),r.Yb(24,"div"),r.Yb(25,"div",12),r.Yb(26,"app-button",13),r.kc("onSubmit",(function(){r.Hc(t);const a=r.Dc(48);return e.onViewTemplate(a)})),r.Xb(),r.Xb(),r.Tb(27,"br"),r.Yb(28,"div",14),r.Tb(29,"app-feather-icons",15),r.Rc(30,"\xa0 "),r.Yb(31,"span"),r.Rc(32,"Status :"),r.Xb(),r.Rc(33,"\xa0 "),r.Yb(34,"div"),r.Yb(35,"select",16),r.kc("ngModelChange",(function(t){return e.status=t})),r.Yb(36,"option",17),r.Rc(37,"Draft"),r.Xb(),r.Yb(38,"option",18),r.Rc(39,"Publish"),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Tb(40,"br"),r.Xb(),r.Tb(41,"br"),r.Xb(),r.Tb(42,"hr",19),r.Yb(43,"div",20),r.Yb(44,"div",21),r.kc("click",(function(){return e.goBack()})),r.Rc(45," Go Back "),r.Xb(),r.Yb(46,"app-button",13),r.kc("onSubmit",(function(){return e.onAddCampaign()})),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Pc(47,f,9,1,"ng-template",null,22,r.Qc)}2&t&&(r.Cb(6),r.uc("placeholder",r.qc(7,17,"mag_name")),r.tc("ngModel",e.name),r.Cb(3),r.tc("config",e.config)("message","Click or drag images here to upload"),r.Cb(3),r.tc("text",e.template),r.Cb(4),r.tc("loading",e.loading),r.Cb(5),r.Sc(r.qc(22,19,"Publish")),r.Cb(5),r.tc("btnType","submit")("loading",!1)("disabled",!e.template)("btnText","Preview"),r.Cb(3),r.tc("icon","key"),r.Cb(6),r.tc("ngModel",e.status),r.Cb(11),r.tc("btnType","submit")("loading",!1)("disabled",e.loading)("btnText","Add Campaign"))},directives:[o.b,o.u,o.m,o.p,d.b,p.a,g.a,m.a,u.a,o.v,o.q,o.x],pipes:[h.c],styles:[""]}),t})();var C=a("wd/R"),x=a("M9IT");function Y(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div"),r.Yb(1,"span",19),r.Yb(2,"i",20),r.kc("click",(function(){r.Hc(t);const a=e.row,i=r.oc(2),n=r.Dc(15);return i.onViewTemplate(a,n)})),r.Xb(),r.Xb(),r.Yb(3,"span",21),r.Yb(4,"i",22),r.kc("click",(function(){r.Hc(t);const a=e.row;return r.oc(2).onDelete(a)})),r.Xb(),r.Xb(),r.Xb()}}function X(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",24),r.Yb(1,"mat-paginator",25),r.kc("page",(function(e){return r.Hc(t),r.oc(3).pageEvent(e)})),r.Xb(),r.Xb()}if(2&t){const t=r.oc(3);r.Cb(1),r.tc("pageIndex",t.pagination.CurrentPage-1)("length",t.pagination.TotalCount)("pageSize",t.pagination.PageSize)("pageSizeOptions",t.pageSizeOptions)}}function S(t,e){if(1&t&&r.Pc(0,X,2,4,"div",23),2&t){const t=r.oc(2);r.tc("ngIf",!t.loading)}}function k(t,e){if(1&t&&(r.Yb(0,"div",11),r.Yb(1,"ngx-datatable",12),r.Tb(2,"ngx-datatable-column",13),r.pc(3,"translate"),r.Tb(4,"ngx-datatable-column",14),r.pc(5,"translate"),r.Tb(6,"ngx-datatable-column",15),r.pc(7,"translate"),r.Yb(8,"ngx-datatable-column",16),r.pc(9,"translate"),r.Pc(10,Y,5,0,"ng-template",17),r.Xb(),r.Yb(11,"ngx-datatable-footer"),r.Pc(12,S,1,1,"ng-template",18),r.Xb(),r.Xb(),r.Xb()),2&t){const t=r.oc();r.Cb(1),r.tc("rows",t.campaigns)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",5),r.Cb(1),r.uc("name",r.qc(3,10,"campaign_name")),r.Cb(2),r.uc("name",r.qc(5,12,"campaign_status")),r.Cb(2),r.uc("name",r.qc(7,14,"campaign_image")),r.Cb(2),r.uc("name",r.qc(9,16,"campaign_action"))}}function w(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",33),r.Yb(1,"button",34),r.kc("click",(function(){return r.Hc(t),r.oc(2).onPublish()})),r.Rc(2," Publish "),r.Xb(),r.Xb()}}function y(t,e){if(1&t&&(r.Yb(0,"div",26),r.Yb(1,"h5",27),r.Rc(2,"Template"),r.Xb(),r.Yb(3,"button",28),r.kc("click",(function(){return e.$implicit.dismiss("Cross click")})),r.Yb(4,"span",29),r.Rc(5,"\xd7"),r.Xb(),r.Xb(),r.Xb(),r.Yb(6,"div",30),r.Tb(7,"div",31),r.Pc(8,w,3,0,"div",32),r.Xb()),2&t){const t=r.oc();r.Cb(7),r.tc("innerHTML",t.selectedRow.text,r.Ic),r.Cb(1),r.tc("ngIf","Published"!=t.selectedRow.status)}}const T=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t,e,a,i){this.router=t,this.campaignService=e,this.cs=a,this.modalService=i,this.campaigns=[],this.temp=[],this.loading=!1,this.pagination={CurrentPage:1,HasNext:!1,HasPrevious:!1,PageSize:10,TotalCount:0,TotalPages:1},this.pageSizeOptions=[5,10,25,50],this.getCampaigns()}open(t){console.log(t),this.modalService.open(t,{ariaLabelledBy:"modal-basic-title"}).result.then(t=>{this.closeResult=`Closed with: ${t}`,this.selectedRow=null},t=>{this.closeResult=`Dismissed ${this.getDismissReason(t)}`,this.selectedRow=null})}getDismissReason(t){return t===n.a.ESC?"by pressing ESC":t===n.a.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${t}`}ngOnInit(){}onAdd(){this.router.navigate(["/campaign/create-campaign"])}onDelete(t){console.log(t,"delete"),this.campaignService.removeCampaign(t.id).subscribe(t=>{console.log("deleted"),this.getCampaigns()})}pageEvent(t){console.log(t),this.pagination.PageSize=t.pageSize,this.pagination.CurrentPage=t.pageIndex+1,this.getCampaigns()}getCampaigns(){const{PageSize:t,CurrentPage:e}=this.pagination;this.loading=!0,this.campaignService.getAllCampaigns(`?PageSize=${t}&PageNumber=${e}`).subscribe(t=>{if(t){this.cs.isLoading.next(!1),this.loading=!1,this.campaigns=this.structureData(t.body||[]);let e=JSON.parse(t.headers.get("X-Pagination"));e&&(this.pagination=e)}})}structureData(t=[]){if(console.log(t),t)return t.map(t=>Object.assign(Object.assign({},t),{creationDate:t.creationDate?C(t.creationDate).format("YYYY-MM-DD"):"---"}))}onViewTemplate(t,e){this.selectedRow=t,this.open(e)}onPublish(){this.campaignService.updateCampaignStatus(this.selectedRow.id,1).subscribe(t=>{t&&(this.cs.isLoading.next(!1),this.loading=!1)})}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(s.d),r.Sb(b),r.Sb(l.a),r.Sb(n.j))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-campaign-list"]],viewQuery:function(t,e){var a;1&t&&r.Xc(c.d,!0),2&t&&r.Cc(a=r.lc())&&(e.table=a.first)},decls:16,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],[2,"margin-left","10px",3,"btnType","btnText","onSubmit"],[1,"card-body"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],["class","custom-datatable",4,"ngIf"],["TemplateModal",""],[1,"custom-datatable"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight","limit"],["prop","name",3,"name"],["prop","status",3,"name"],["prop","creationDate",3,"name"],["sortable","false","prop","order id",3,"name"],["ngx-datatable-cell-template",""],["ngx-datatable-footer-template",""],[2,"color","#f88379","cursor","pointer"],[1,"fa","fa-eye",3,"click"],[2,"color","#f88379","cursor","pointer","margin-left","10px"],[1,"fa","fa-trash-o",3,"click"],["class","pagination","style","margin-bottom: 10px; width: -webkit-fill-available",4,"ngIf"],[1,"pagination",2,"margin-bottom","10px","width","-webkit-fill-available"],[2,"width","-webkit-fill-available",3,"pageIndex","length","pageSize","pageSizeOptions","page"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"innerHTML"],["class","action","style","text-align: end",4,"ngIf"],[1,"action",2,"text-align","end"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"div",2),r.Yb(3,"div",3),r.Yb(4,"div",4),r.Yb(5,"h5"),r.Rc(6),r.pc(7,"translate"),r.Xb(),r.Yb(8,"app-button",5),r.kc("onSubmit",(function(){return e.onAdd()})),r.Xb(),r.Xb(),r.Yb(9,"div",6),r.Tb(10,"br"),r.Yb(11,"div",7),r.Tb(12,"app-loader",8),r.Xb(),r.Pc(13,k,13,18,"div",9),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Pc(14,y,9,2,"ng-template",null,10,r.Qc)),2&t&&(r.Cb(6),r.Sc(r.qc(7,5,"Campiagns")),r.Cb(2),r.tc("btnType","submit")("btnText","Add"),r.Cb(4),r.tc("loading",e.loading),r.Cb(1),r.tc("ngIf",!e.loading))},directives:[m.a,g.a,i.m,c.d,c.b,c.a,c.e,c.c,x.a],pipes:[h.c],styles:[""]}),t})(),data:{title:"Campaign",breadcrumb:"Campaign"}},{path:"create-campaign",component:v,data:{title:"Campaign",breadcrumb:"Campaign"}},{path:"edit-campaign/:id",component:v,data:{title:"Campaign",breadcrumb:"Campaign"}}]}];let R=(()=>{class t{}return t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({factory:function(e){return new(e||t)},imports:[[s.h.forChild(T)],s.h]}),t})();var P=a("PCNd");const M={maxFilesize:50,url:"https://httpbin.org/post"};let D=(()=>{class t{}return t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({factory:function(e){return new(e||t)},providers:[{provide:d.a,useValue:M},n.c],imports:[[i.c,R,n.k,d.d,o.t,o.h,c.f,P.a]]}),t})()}}]);