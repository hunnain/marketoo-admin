(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{K7XH:function(t,n,e){"use strict";e.r(n),e.d(n,"MessagesModule",(function(){return C}));var o=e("ofXK"),c=e("lDzL"),s=e("tyNb"),i=e("fXoL"),r=e("SvO3"),a=e("pqks"),b=e("sYmb");const g=function(t){return{right:t}};function d(t,n){if(1&t&&(i.Yb(0,"li",20),i.Yb(1,"span",21),i.Rc(2),i.Xb(),i.Xb()),2&t){const t=n.$implicit,e=i.oc();i.tc("ngClass",i.xc(2,g,t.user_id==e.user.id)),i.Cb(2),i.Sc(t.message)}}let p=(()=>{class t{constructor(){this.user={},this.messages=[],this.sendMsg=new i.n}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Mb({type:t,selectors:[["app-chat-box"]],inputs:{user:"user",messages:"messages"},outputs:{sendMsg:"sendMsg"},decls:29,vars:9,consts:[[2,"height","100%","min-height","300px"],[1,"row",2,"height","100%"],[1,"col-sm-12"],[1,"card","chat-container"],[1,"card-header"],[1,"list"],[1,"clearfix"],["alt","",1,"rounded-circle","user-image","blur-up","lazyloaded",3,"src"],[1,"status-circle","online"],[1,"about"],[1,"name"],[1,"status"],[1,"card-body","content"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"action-footer"],[1,"needs-validation"],[2,"display","grid","grid-template-columns","1fr 9fr 1fr","margin-top","5px"],[1,"icon-btn"],[1,"font-primary",2,"color","#fff !important",3,"icon"],["type","text",3,"placeholder"],[3,"ngClass"],[1,"msg"]],template:function(t,n){1&t&&(i.Yb(0,"div",0),i.Yb(1,"div",1),i.Yb(2,"div",2),i.Yb(3,"div",3),i.Yb(4,"div",4),i.Yb(5,"ul",5),i.Yb(6,"li",6),i.Tb(7,"img",7),i.Tb(8,"div",8),i.Yb(9,"div",9),i.Yb(10,"div",10),i.Rc(11),i.Xb(),i.Yb(12,"div",11),i.Rc(13),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Yb(14,"div",12),i.Yb(15,"ul"),i.Pc(16,d,3,4,"li",13),i.Xb(),i.Xb(),i.Yb(17,"div",14),i.Yb(18,"form",15),i.Yb(19,"div",16),i.Yb(20,"div",17),i.Yb(21,"span"),i.Tb(22,"app-feather-icons",18),i.Xb(),i.Xb(),i.Yb(23,"div"),i.Tb(24,"input",19),i.pc(25,"translate"),i.Xb(),i.Yb(26,"div",17),i.Yb(27,"span"),i.Tb(28,"app-feather-icons",18),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb(),i.Xb()),2&t&&(i.Cb(7),i.tc("src",n.user.img,i.Jc),i.Cb(4),i.Sc(n.user.name),i.Cb(2),i.Sc(n.user.status),i.Cb(3),i.tc("ngForOf",n.messages),i.Cb(6),i.tc("icon","paperclip"),i.Cb(2),i.uc("placeholder",i.qc(25,7,"messeges_Typehere")),i.Cb(4),i.tc("icon","send"))},directives:[o.k,a.a,o.j],pipes:[b.c],styles:[".chat-container[_ngcontent-%COMP%]{position:relative;height:100%}.chat-container[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{padding:10px 30px;border-bottom:1px solid #c1c1c1}.chat-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:20px}.chat-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:25px}.chat-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%]{text-align:right}.chat-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%]{background-color:#e1ffc7;color:#000}.chat-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%]{color:#898989;width:100%;background-color:#ddd;border:1px solid #f8f8f9;padding:10px 15px;border-radius:25px;letter-spacing:1px}.action-footer[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:0;background-color:#c1c1c1;height:45px}.action-footer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:40px;width:100%;border:none;outline:transparent;padding-left:10px}.action-footer[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]{height:40px;background-color:#c1c1c1}.action-footer[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;cursor:pointer}.card-header[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{float:left;width:52px;height:52px;margin-right:5px}.card-header[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{float:left;margin-top:5px;padding-left:10px}.card-header[_ngcontent-%COMP%]   .friend-list[_ngcontent-%COMP%]{text-align:right}"]}),t})();function l(t,n){1&t&&(i.Yb(0,"div",8),i.Rc(1," Click on user to start chat "),i.Xb())}function h(t,n){if(1&t&&i.Tb(0,"app-chat-box",9),2&t){const t=i.oc();i.tc("user",t.selectedUser)("messages",t.dummyMessages)}}const u=[{path:"",component:(()=>{class t{constructor(){this.selectedUser={},this.openChatScreen=!1,this.dummyMessages=[{user_id:1,message:"hello there"},{user_id:2,message:"Hi, how are you?"},{user_id:1,message:"I'm, how are you?"}]}ngOnInit(){}openChat(t){this.openChatScreen=!0,console.log("user",t),this.selectedUser=t}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Mb({type:t,selectors:[["app-list-message"]],decls:8,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","col-md-4",2,"margin-bottom","20px"],[1,"right-sidebar","chat-side-bar"],[3,"selectUser"],[1,"col-12","col-md-8",2,"margin-bottom","20px"],["class","no-chat-msg",4,"ngIf"],[3,"user","messages",4,"ngIf"],[1,"no-chat-msg"],[3,"user","messages"]],template:function(t,n){1&t&&(i.Yb(0,"div",0),i.Yb(1,"div",1),i.Yb(2,"div",2),i.Yb(3,"div",3),i.Yb(4,"app-right-sidebar",4),i.kc("selectUser",(function(t){return n.openChat(t)})),i.Xb(),i.Xb(),i.Xb(),i.Yb(5,"div",5),i.Pc(6,l,2,0,"div",6),i.Pc(7,h,1,2,"app-chat-box",7),i.Xb(),i.Xb(),i.Xb()),2&t&&(i.Cb(6),i.tc("ngIf",!n.openChatScreen),i.Cb(1),i.tc("ngIf",n.openChatScreen))},directives:[r.a,o.l,p],styles:[".chat-side-bar[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;box-shadow:0 0 9px hsla(0,0%,74.9%,.36);right:0!important;top:0!important;position:unset!important}.no-chat-msg[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;color:#c1c1c1;font-size:16px}"]}),t})(),data:{title:"All Messages",breadcrumb:"Messages"}}];let m=(()=>{class t{}return t.\u0275mod=i.Qb({type:t}),t.\u0275inj=i.Pb({factory:function(n){return new(n||t)},imports:[[s.h.forChild(u)],s.h]}),t})();var f=e("PCNd");let C=(()=>{class t{}return t.\u0275mod=i.Qb({type:t}),t.\u0275inj=i.Pb({factory:function(n){return new(n||t)},imports:[[o.c,m,c.f,f.a]]}),t})()}}]);