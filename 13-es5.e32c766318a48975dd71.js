function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{qpc4:function(t,e,o){"use strict";o.r(e),o.d(e,"PromotionModule",(function(){return P}));var n,i=o("ofXK"),r=o("1kSV"),a=o("3Pt+"),c=o("lDzL"),s=o("tyNb"),l=o("fXoL"),u=o("EfS0"),d=((n=function(){function t(e){_classCallCheck(this,t),this.commonService=e}return _createClass(t,[{key:"getPromotion",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.commonService.get("common/get-promotion".concat(t))}},{key:"updatePromotion",value:function(t){return this.commonService.post("common/update-promotion",t)}}]),t}()).\u0275fac=function(t){return new(t||n)(l.gc(u.a))},n.\u0275prov=l.Ob({token:n,factory:n.\u0275fac,providedIn:"root"}),n),b=o("sYmb"),f=o("VkHG"),p=o("668k"),m=o("CRtM");function h(t,e){if(1&t&&l.Tb(0,"div",14),2&t){var o=l.oc(2);l.tc("innerHTML",o.promotionText,l.Ic)}}function g(t,e){if(1&t){var o=l.Zb();l.Yb(0,"app-text-editor",15),l.kc("textChange",(function(t){return l.Hc(o),l.oc(2).promotionText=t}))("textEmit",(function(t){return l.Hc(o),l.oc(2).handleChange(t,"promotionText")})),l.Xb()}if(2&t){var n=l.oc(2);l.tc("text",n.promotionText)}}function y(t,e){if(1&t&&(l.Yb(0,"div",10),l.Yb(1,"div"),l.Yb(2,"div",11),l.Pc(3,h,1,1,"div",12),l.Pc(4,g,1,1,"app-text-editor",13),l.Xb(),l.Tb(5,"hr"),l.Xb(),l.Xb()),2&t){var o=l.oc();l.Cb(3),l.tc("ngIf",!o.editable),l.Cb(1),l.tc("ngIf",o.editable)}}var v,k,C,S=[{path:"",component:(v=function(){function t(e,o,n,i,r){var a=this;_classCallCheck(this,t),this.router=e,this.promotionService=o,this.translate=n,this.cs=i,this.modalService=r,this.promotions=[],this.selected=[],this.loading=!1,this.title="",this.reimbursrments=[],this.promotionText="",this.editable=!1,this.pagination={CurrentPage:1,HasNext:!1,HasPrevious:!1,PageSize:10,TotalCount:0,TotalPages:1},this.pageSizeOptions=[5,10,25,50],this.config1={editable:!0,spellcheck:!0,height:"15rem",minHeight:"5rem",placeholder:"Enter text here...",translate:"no",defaultParagraphSeparator:"p",defaultFontName:"Arial",toolbarHiddenButtons:[["bold","insertImage","insertVideo","link","unlink","toggleEditorMode","textColor","backgroundColor"]],customClasses:[{name:"quote",class:"quote"},{name:"redText",class:"redText"},{name:"titleText",class:"titleText",tag:"h1"}]},this.cs.isLoading.subscribe((function(t){a.loading=t}))}return _createClass(t,[{key:"open",value:function(t){var e=this;this.modalService.open(t,{size:"md",backdrop:"static",ariaLabelledBy:"modal-basic-title"}).result.then((function(t){e.closeResult="Closed with: ".concat(t)}),(function(t){e.closeResult="Dismissed ".concat(e.getDismissReason(t))}))}},{key:"getDismissReason",value:function(t){return t===r.a.ESC?"by pressing ESC":t===r.a.BACKDROP_CLICK?"by clicking on a backdrop":"with: ".concat(t)}},{key:"onSelect",value:function(t){var e,o=t.selected;this.selected.splice(0,this.selected.length),(e=this.selected).push.apply(e,_toConsumableArray(o))}},{key:"onSelectRow",value:function(t){console.log(t)}},{key:"updateFilter",value:function(t){var e=t.target.value.toLowerCase(),o=this.promotions.filter((function(t){return-1!==t.name.toLowerCase().indexOf(e)||!e}));this.promotions=o,this.table.offset=0}},{key:"ngOnInit",value:function(){this.fetchPromotions()}},{key:"handleChange",value:function(t,e){this.tempPromotion=t}},{key:"fetchPromotions",value:function(){var t=this;this.loading=!0,this.promotionService.getPromotion().subscribe((function(e){e&&(console.log(e),t.cs.isLoading.next(!1),t.loading=!1,t.promotionText=e.body.Promotions,t.pagination=JSON.parse(e.headers.get("X-Pagination")))}))}},{key:"onEdit",value:function(t){console.log("row click",t),this.router.navigate(["/reimbursements/edit-reimbursement/",t])}},{key:"onDelete",value:function(t){console.log("row click",t)}},{key:"setPage",value:function(t){console.log("page--",t)}},{key:"addPromotion",value:function(t){this.open(t)}},{key:"onSubmit",value:function(){console.log("Submit")}},{key:"onEditClick",value:function(){this.editable=!this.editable}},{key:"onUpdate",value:function(){}}]),t}(),v.\u0275fac=function(t){return new(t||v)(l.Sb(s.d),l.Sb(d),l.Sb(b.d),l.Sb(u.a),l.Sb(r.j))},v.\u0275cmp=l.Mb({type:v,selectors:[["app-promotion"]],viewQuery:function(t,e){var o;1&t&&l.Xc(c.d,!0),2&t&&l.Cc(o=l.lc())&&(e.table=o.first)},decls:13,vars:9,consts:[[1,"container-fluid"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],[2,"margin-left","10px",3,"btnType","loading","disabled","btnText","onSubmit"],[1,"card-body"],[2,"display","flex","align-items","center","justify-content","center"],[3,"loading"],["class","custom-datatable",4,"ngIf"],[1,"custom-datatable"],[2,"background","white"],[3,"innerHTML",4,"ngIf"],[3,"text","textChange","textEmit",4,"ngIf"],[3,"innerHTML"],[3,"text","textChange","textEmit"]],template:function(t,e){1&t&&(l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"div",2),l.Yb(3,"div",3),l.Yb(4,"div",4),l.Yb(5,"h5"),l.Rc(6),l.pc(7,"translate"),l.Xb(),l.Yb(8,"app-button",5),l.kc("onSubmit",(function(){return e.editable?e.onUpdate():e.onEditClick()})),l.Xb(),l.Xb(),l.Yb(9,"div",6),l.Yb(10,"div",7),l.Tb(11,"app-loader",8),l.Xb(),l.Pc(12,y,6,2,"div",9),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()),2&t&&(l.Cb(6),l.Sc(l.qc(7,7,"Promotions")),l.Cb(2),l.tc("btnType","submit")("loading",e.loading)("disabled",e.loading)("btnText",e.editable?"Update":"Edit"),l.Cb(3),l.tc("loading",e.loading),l.Cb(1),l.tc("ngIf",!e.loading))},directives:[f.a,p.a,i.l,m.a],pipes:[b.c],styles:[""]}),v),data:{title:"Promotion",breadcrumb:"Promotion"}}],T=((k=function t(){_classCallCheck(this,t)}).\u0275mod=l.Qb({type:k}),k.\u0275inj=l.Pb({factory:function(t){return new(t||k)},imports:[[s.h.forChild(S)],s.h]}),k),x=o("PCNd"),P=((C=function t(){_classCallCheck(this,t)}).\u0275mod=l.Qb({type:C}),C.\u0275inj=l.Pb({factory:function(t){return new(t||C)},imports:[[i.c,T,r.k,a.t,a.h,c.f,x.a]]}),C)}}]);