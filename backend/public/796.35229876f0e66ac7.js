"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[796],{7796:(v,c,n)=>{n.r(c),n.d(c,{OrdersModule:()=>g});var i=n(9808),s=n(5271),e=n(1223),a=n(6854);function l(r,d){if(1&r&&(e.TgZ(0,"div",6)(1,"h2",7)(2,"button",8),e._uU(3),e.qZA()(),e.TgZ(4,"div",9)(5,"div",10)(6,"div",11)(7,"div",12)(8,"div",13),e._UZ(9,"img",14),e.qZA(),e.TgZ(10,"div",15)(11,"div",16)(12,"h6",17),e._uU(13),e.qZA(),e.TgZ(14,"p",18),e._uU(15),e.qZA(),e.TgZ(16,"p",18)(17,"small",19),e._uU(18),e.qZA()(),e.TgZ(19,"p",18)(20,"small",19)(21,"span",20),e._uU(22,"Ordered On:"),e.qZA(),e._uU(23),e.ALo(24,"date"),e.qZA()()()()()()()()()),2&r){const o=d.$implicit,t=d.index;e.xp6(1),e.MGl("id","heading-",t,""),e.xp6(1),e.uIk("data-bs-target","#collapse-"+t)("aria-controls","collapse-"+t),e.xp6(1),e.hij(" ",o.product.name," "),e.xp6(1),e.MGl("id","collapse-",t,""),e.uIk("aria-labelledby","heading-"+t),e.xp6(5),e.Q6J("src",o.product.image,e.LSH),e.xp6(4),e.hij("Order ID: ",o._id,""),e.xp6(2),e.Oqu(o.product.desc),e.xp6(3),e.Oqu(o.product.price),e.xp6(5),e.hij(" \xa0",e.xi3(24,11,o.orderedOn,"YYYY-mm-dd"),"")}}function p(r,d){1&r&&(e.TgZ(0,"div",21)(1,"div",22),e._uU(2,"No orders yet. Please check the catalogue"),e.qZA()())}const u=[{path:"",component:(()=>{class r{constructor(o){this.orderService=o,this.orders=[]}ngOnInit(){this.getOrders()}getOrders(){this.orderService.getOrders().subscribe(o=>{o&&(this.orders=o)})}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(a.p))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-orders"]],decls:6,vars:2,consts:[[1,"container","px-4","py-5"],[1,"row","justify-content-center"],[1,"col-12","col-md-10","col-xl-8"],["id","accordionExample",1,"accordion"],["class","accordion-item",4,"ngFor","ngForOf"],["class","w-100 text-center",4,"ngIf"],[1,"accordion-item"],[1,"accordion-header",3,"id"],["type","button","data-bs-toggle","collapse","aria-expanded","true",1,"accordion-button"],["data-bs-parent","#accordionExample",1,"accordion-collapse","collapse","show",3,"id"],[1,"accordion-body"],[1,"card","mb-3","border-0"],[1,"row","g-0"],[1,"col-md-4"],["alt","...",1,"img-fluid","rounded-start",3,"src"],[1,"col-md-8"],[1,"card-body"],[1,"card-title","text-muted"],[1,"card-text"],[1,"text-muted"],[1,"text-dark"],[1,"w-100","text-center"],[1,"lead"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,l,25,14,"div",4),e.qZA(),e.YNc(5,p,3,0,"div",5),e.qZA()()()),2&o&&(e.xp6(4),e.Q6J("ngForOf",t.orders),e.xp6(1),e.Q6J("ngIf",!t.orders||0==t.orders.length))},directives:[i.sg,i.O5],pipes:[i.uU],styles:[""]}),r})()}];let m=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[s.Bz.forChild(u)],s.Bz]}),r})(),g=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[i.ez,m]]}),r})()}}]);