(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"M+gu":function(t,e,i){"use strict";i.r(e),i.d(e,"AboutUsModule",(function(){return L}));var n=i("ofXK"),o=i("1kSV"),a=i("3Pt+"),s=i("lDzL"),c=i("tyNb"),r=i("fXoL"),d=i("EfS0");let p=(()=>{class t{constructor(t){this.commonService=t}getAboutUs(t=""){return this.commonService.get(`common/get-about-us${t}`)}updateAboutUs(t){return this.commonService.post("admin/update-about-us",t)}}return t.\u0275fac=function(e){return new(e||t)(r.gc(d.a))},t.\u0275prov=r.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=i("VkHG"),l=i("668k"),u=i("pqks"),g=i("CRtM"),h=i("sYmb");function m(t,e){if(1&t){const t=r.Zb();r.Yb(0,"app-button",11),r.kc("onSubmit",(function(){return r.Hc(t),r.oc().onUpdate()})),r.Xb()}if(2&t){const t=r.oc();r.tc("btnType","submit")("loading",t.loading)("disabled",t.loading)("btnText","Update")}}function f(t,e){1&t&&r.Tb(0,"app-feather-icons",20),2&t&&r.tc("icon","chevron-down")}function C(t,e){1&t&&r.Tb(0,"app-feather-icons",20),2&t&&r.tc("icon","chevron-up")}function v(t,e){if(1&t&&(r.Yb(0,"div",18),r.Yb(1,"span"),r.Rc(2),r.pc(3,"translate"),r.Xb(),r.Pc(4,f,1,1,"app-feather-icons",19),r.Pc(5,C,1,1,"app-feather-icons",19),r.Xb()),2&t){const t=r.oc(),e=t.$implicit,i=t.index,n=r.oc(2);r.Cb(2),r.Sc(r.qc(3,3,e)),r.Cb(2),r.tc("ngIf",n.tabId!==i),r.Cb(1),r.tc("ngIf",n.tabId===i)}}function y(t,e){if(1&t&&r.Tb(0,"div",23),2&t){const t=r.oc(2).$implicit,e=r.oc(2);r.tc("innerHTML",e[t],r.Ic)}}function I(t,e){if(1&t){const t=r.Zb();r.Yb(0,"app-text-editor",24),r.kc("textChange",(function(e){r.Hc(t);const i=r.oc(2).$implicit;return r.oc(2)[i]=e}))("textEmit",(function(e){r.Hc(t);const i=r.oc(2).$implicit;return r.oc(2).handleChange(e,i)})),r.Xb()}if(2&t){const t=r.oc(2).$implicit,e=r.oc(2);r.tc("text",e[t])}}function X(t,e){if(1&t&&(r.Pc(0,y,1,1,"div",21),r.Pc(1,I,1,1,"app-text-editor",22)),2&t){const t=r.oc(3);r.tc("ngIf",!t.editable),r.Cb(1),r.tc("ngIf",t.editable)}}function P(t,e){1&t&&(r.Yb(0,"ngb-panel",15),r.Pc(1,v,6,5,"ng-template",16),r.Pc(2,X,2,2,"ng-template",17),r.Tb(3,"br"),r.Tb(4,"hr"),r.Tb(5,"br"),r.Xb()),2&t&&r.tc("id",e.index)}function x(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",12),r.Yb(1,"ngb-accordion",13),r.kc("panelChange",(function(e){return r.Hc(t),r.oc().changeTab(e)})),r.Pc(2,P,6,1,"ngb-panel",14),r.Tb(3,"br"),r.Xb(),r.Xb()}if(2&t){const t=r.oc();r.Cb(1),r.tc("closeOthers",!0),r.Cb(1),r.tc("ngForOf",t.keys)}}let Y=(()=>{class t{constructor(t,e){this.aboutUsService=t,this.cs=e,this.editable=!1,this.loading=!1,this.keys=["privacyPolicies","contactInfo","faqs","aboutShop","adsPolicies","termsAndConditions"],this.aboutUs={},this.privacyPolicies="",this.contactInfo="",this.faqs="",this.aboutShop="",this.adsPolicies="",this.termsAndConditions="",this.updateObj={},this.config1={editable:!0,spellcheck:!0,height:"15rem",minHeight:"5rem",placeholder:"Enter text here...",translate:"no",defaultParagraphSeparator:"p",defaultFontName:"Arial",toolbarHiddenButtons:[["bold","insertImage","insertVideo","link","unlink","toggleEditorMode","textColor","backgroundColor"]],customClasses:[{name:"quote",class:"quote"},{name:"redText",class:"redText"},{name:"titleText",class:"titleText",tag:"h1"}]},this.setData=t=>{this.privacyPolicies=t.privacyPolicies,this.contactInfo=t.contactInfo,this.faqs=t.faqs,this.aboutShop=t.aboutShop,this.adsPolicies=t.adsPolicies,this.termsAndConditions=t.termsAndConditions},this.fetchAboutUs(),this.cs.isLoading.subscribe(t=>{this.loading=t})}ngOnInit(){}fetchAboutUs(){this.loading=!0,this.aboutUsService.getAboutUs().subscribe(t=>{if(t){let e="No Data Available";this.loading=!1;let i=t.body;this.setData(i),this.updateObj={Faqs:i.faqs||e,AboutShop:i.aboutShop||e,AdsPolicies:i.adsPolicies||e,ContactInfo:i.contactInfo||e,PrivacyPolicies:i.privacyPolicies||e,TermsAndConditions:i.termsAndConditions||e}}},t=>{this.loading=!1})}onEditClick(){this.editable=!this.editable}onUpdate(){console.log(this.privacyPolicies,"55555"),this.loading=!0,this.aboutUsService.updateAboutUs(Object.assign({},this.updateObj)).subscribe(t=>{this.setData(t),this.editable=!1,this.cs.isLoading.next(!1),this.loading=!1},t=>{this.loading=!1})}handleChange(t,e){console.log(t,e);let i=Object.assign(Object.assign({},this.updateObj),{[e]:t});this.updateObj=i,console.log(this.updateObj)}changeTab(t){console.log("tab--",t),this.tabId=this.tabId&&this.tabId===t.panelId?void 0:t.panelId}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(p),r.Sb(d.a))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-about-us"]],decls:16,vars:10,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],[3,"btnType","loading","disabled","btnText","onSubmit"],["style","margin-left: 10px",3,"btnType","loading","disabled","btnText","onSubmit",4,"ngIf"],[1,"card-body"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],["class","about-us-class",4,"ngIf"],[2,"margin-left","10px",3,"btnType","loading","disabled","btnText","onSubmit"],[1,"about-us-class"],[3,"closeOthers","panelChange"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],["ngbPanelTitle",""],["ngbPanelContent",""],[1,"header-title",2,"display","flex","justify-content","space-between"],["class","font-primary",3,"icon",4,"ngIf"],[1,"font-primary",3,"icon"],[3,"innerHTML",4,"ngIf"],[3,"text","textChange","textEmit",4,"ngIf"],[3,"innerHTML"],[3,"text","textChange","textEmit"]],template:function(t,e){1&t&&(r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"div",2),r.Yb(3,"div",3),r.Yb(4,"div",4),r.Yb(5,"h5"),r.Rc(6),r.pc(7,"translate"),r.Xb(),r.Yb(8,"div"),r.Yb(9,"app-button",5),r.kc("onSubmit",(function(){return e.onEditClick()})),r.Xb(),r.Pc(10,m,1,4,"app-button",6),r.Xb(),r.Xb(),r.Yb(11,"div",7),r.Yb(12,"div",8),r.Tb(13,"app-loader",9),r.Xb(),r.Pc(14,x,4,2,"div",10),r.Tb(15,"br"),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()),2&t&&(r.Cb(6),r.Sc(r.qc(7,8,"ab_about_us")),r.Cb(3),r.tc("btnType","submit")("loading",!1)("disabled",e.loading)("btnText",e.editable?"Cancel":"Edit"),r.Cb(1),r.tc("ngIf",e.editable),r.Cb(3),r.tc("loading",e.loading),r.Cb(1),r.tc("ngIf",!e.loading))},directives:[b.a,n.l,l.a,o.b,n.k,o.l,o.n,o.m,u.a,g.a],pipes:[h.c],styles:[".about-us-class .accordion .card{margin:0!important}  .about-us-class .accordion .card .card-header{padding:0!important}  .about-us-class .accordion .card .card-header button{width:100%;color:#4b5335}"]}),t})();var k=i("rIor");const T=["imageCropper"],S=["inputFile"];let A=(()=>{class t{constructor(){this.roundCropper=!1,this.aspectRatio=1,this.getImage=new r.n,this.imageChangedEvent="",this.croppedImage="",this.showCropper=!1}ngOnInit(){}ngAfterViewInit(){}imageCropped(t){this.croppedImage=t.base64,this.getImage.next(this.croppedImage)}imageLoaded(){console.log("cropper open")}cropperReady(){}loadImageFailed(){}fileChangeEvent(t){console.log("event",t),this.imageChangedEvent=t}crop(){this.imageCropper.crop(),this.lastCropperPosition=this.getCurrentCropperPosition(),this.lastCroppedImage=new r.l(this.imageCropper.sourceImage.nativeElement),console.log("croppedImage",this.lastCroppedImage)}cancelCrop(){console.log("lastCroppedImage",this.lastCroppedImage),this.lastCroppedImage&&(this.imageCropper.sourceImage=this.lastCroppedImage),this.lastCropperPosition&&(this.imageCropper.cropper=this.getLastCropperPosition())}getCurrentCropperPosition(){return{x1:this.imageCropper.cropper.x1,x2:this.imageCropper.cropper.x2,y1:this.imageCropper.cropper.y1,y2:this.imageCropper.cropper.y2}}getLastCropperPosition(){return{x1:this.lastCropperPosition.x1,x2:this.lastCropperPosition.x2,y1:this.lastCropperPosition.y1,y2:this.lastCropperPosition.y2}}reCrop(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Mb({type:t,selectors:[["app-cropper"]],viewQuery:function(t,e){var i;1&t&&(r.Xc(T,!0),r.Xc(S,!0)),2&t&&(r.Cc(i=r.lc())&&(e.imageCropper=i.first),r.Cc(i=r.lc())&&(e.inputFile=i.first))},inputs:{roundCropper:"roundCropper",aspectRatio:"aspectRatio"},outputs:{getImage:"getImage"},decls:2,vars:5,consts:[["type","file","accept","image/*",3,"change"],["format","png",3,"imageChangedEvent","maintainAspectRatio","aspectRatio","autoCrop","roundCropper","imageCropped","imageLoaded","cropperReady","loadImageFailed"]],template:function(t,e){1&t&&(r.Yb(0,"input",0),r.kc("change",(function(t){return e.fileChangeEvent(t)})),r.Xb(),r.Yb(1,"image-cropper",1),r.kc("imageCropped",(function(t){return e.imageCropped(t)}))("imageLoaded",(function(){return e.imageLoaded()}))("cropperReady",(function(){return e.cropperReady()}))("loadImageFailed",(function(){return e.loadImageFailed()})),r.Xb()),2&t&&(r.Cb(1),r.tc("imageChangedEvent",e.imageChangedEvent)("maintainAspectRatio",!0)("aspectRatio",e.aspectRatio)("autoCrop",!0)("roundCropper",e.roundCropper))},directives:[k.a],styles:["p[_ngcontent-%COMP%]{font-family:Lato}image-cropper[_ngcontent-%COMP%]{max-height:33vh}"]}),t})();const R=["addBannerModal"];function w(t,e){if(1&t){const t=r.Zb();r.Yb(0,"div",8),r.Yb(1,"h5",9),r.Rc(2),r.pc(3,"translate"),r.Xb(),r.Yb(4,"button",10),r.kc("click",(function(){return e.$implicit.dismiss("Cross click")})),r.Yb(5,"span",11),r.Rc(6,"\xd7"),r.Xb(),r.Xb(),r.Xb(),r.Yb(7,"div",12),r.Yb(8,"div",13),r.Yb(9,"div"),r.Yb(10,"app-cropper",14),r.kc("getImage",(function(e){return r.Hc(t),r.oc().getCroppedImage(e)})),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Yb(11,"div",15),r.Yb(12,"button",5),r.kc("click",(function(){return r.Hc(t),r.oc().saveBanner()})),r.Rc(13),r.pc(14,"translate"),r.Xb(),r.Yb(15,"button",16),r.kc("click",(function(){return e.$implicit.dismiss("Cross click")})),r.Rc(16),r.pc(17,"translate"),r.Xb(),r.Xb()}if(2&t){const t=r.oc();r.Cb(2),r.Tc(" ",r.qc(3,5,"ban_add_banner")," "),r.Cb(8),r.tc("aspectRatio",7/3),r.Cb(2),r.tc("disabled",t.loading),r.Cb(1),r.Tc(" ",r.qc(14,7,"ban_add_banner")," "),r.Cb(3),r.Tc(" ",r.qc(17,9,"close")," ")}}const O=[{path:"",children:[{path:"about-us",component:Y,data:{title:"About Us",breadcrumb:"About Us"}},{path:"banner",component:(()=>{class t{constructor(t,e){this.modalService=t,this.translate=e,this.loading=!1}ngOnInit(){}saveBanner(){console.log("save")}getCroppedImage(t){this.bannerImage=t}open(t){this.modalService.open(t,{ariaLabelledBy:"modal-basic-title"}).result.then(t=>{this.closeResult=`Closed with: ${t}`},t=>{this.closeResult=`Dismissed ${this.getDismissReason(t)}`})}getDismissReason(t){return t===o.a.ESC?"by pressing ESC":t===o.a.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${t}`}onAddLabel(){this.modalService.dismissAll("close")}openAddModal(){this.open(this.addBannerModal)}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(o.j),r.Sb(h.d))},t.\u0275cmp=r.Mb({type:t,selectors:[["app-banners"]],viewQuery:function(t,e){var i;1&t&&r.Xc(R,!0),2&t&&r.Cc(i=r.lc())&&(e.addBannerModal=i.first)},decls:17,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"card-body"],["addBannerModal",""],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["ngbAutofocus","",1,"main-container"],[3,"aspectRatio","getImage"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-light",3,"click"]],template:function(t,e){1&t&&(r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"div",2),r.Yb(3,"div",3),r.Yb(4,"div",4),r.Yb(5,"h5"),r.Rc(6),r.pc(7,"translate"),r.Xb(),r.Yb(8,"button",5),r.kc("click",(function(){return e.openAddModal()})),r.Rc(9),r.pc(10,"translate"),r.Xb(),r.Xb(),r.Yb(11,"div",6),r.Yb(12,"div"),r.Yb(13,"h4"),r.Rc(14,"No Banners Availble"),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Pc(15,w,18,11,"ng-template",null,7,r.Qc)),2&t&&(r.Cb(6),r.Sc(r.qc(7,3,"ban_banners")),r.Cb(2),r.tc("disabled",e.loading),r.Cb(1),r.Tc(" ",r.qc(10,5,"ban_add_banner")," "))},directives:[A],pipes:[h.c],styles:[""]}),t})(),data:{title:"Banners",breadcrumb:"Banners"}}]}];let E=(()=>{class t{}return t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({factory:function(e){return new(e||t)},imports:[[c.h.forChild(O)],c.h]}),t})();var M=i("PCNd");let L=(()=>{class t{}return t.\u0275mod=r.Qb({type:t}),t.\u0275inj=r.Pb({factory:function(e){return new(e||t)},imports:[[n.c,E,o.k,a.t,a.h,s.f,M.a]]}),t})()}}]);