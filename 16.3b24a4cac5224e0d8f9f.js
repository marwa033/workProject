(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{jqCL:function(n,t,e){"use strict";e.d(t,"a",function(){return b});var o=e("fXoL"),a=e("ofXK");function c(n,t){if(1&n&&(o.Vb(0,"div",22),o.Qb(1,"img",23),o.Ub()),2&n){const n=o.jc(2);o.Cb(1),o.pc("src",n.responsableImg,o.Dc)}}function r(n,t){if(1&n){const n=o.Wb();o.Vb(0,"div",11),o.Vb(1,"button",12),o.fc("click",function(){return o.Ac(n),o.jc().toggleHint()}),o.Qb(2,"i",13),o.Ub(),o.Vb(3,"div",14),o.Vb(4,"button",15),o.fc("click",function(){return o.Ac(n),o.jc().toggleHint()}),o.Qb(5,"i",16),o.Ub(),o.Jc(6,c,2,1,"div",17),o.Vb(7,"div",18),o.Vb(8,"h6"),o.Lc(9),o.Ub(),o.Vb(10,"h3",19),o.Lc(11),o.Ub(),o.Vb(12,"button",20),o.fc("click",function(t){return o.Ac(n),o.jc().copyPhoneNumber(t)}),o.Qb(13,"i",21),o.Lc(14),o.Ub(),o.Ub(),o.Ub(),o.Ub()}if(2&n){const n=o.jc();o.Cb(3),o.Hb("opened",n.isOpenedHint),o.Cb(3),o.pc("ngIf",n.responsableImg),o.Cb(3),o.Mc(n.position),o.Cb(2),o.Mc(n.responsableName),o.Cb(1),o.Hb("copied",n.isCopied),o.Cb(2),o.Nc(" ",n.responsableMobile," ")}}function s(n,t){if(1&n&&(o.Vb(0,"h2"),o.Lc(1),o.Ub()),2&n){const n=o.jc();o.Cb(1),o.Mc(n.title)}}function g(n,t){if(1&n&&o.Qb(0,"img",23),2&n){const n=o.jc(2);o.pc("src",n.responsableImg,o.Dc)}}function i(n,t){if(1&n&&(o.Vb(0,"h6"),o.Lc(1),o.Ub()),2&n){const n=o.jc(2);o.Cb(1),o.Mc(n.position)}}function p(n,t){if(1&n&&(o.Vb(0,"h3",19),o.Lc(1),o.Ub()),2&n){const n=o.jc(2);o.Cb(1),o.Mc(n.responsableName)}}function d(n,t){if(1&n){const n=o.Wb();o.Vb(0,"button",20),o.fc("click",function(t){return o.Ac(n),o.jc(2).copyPhoneNumber(t)}),o.Qb(1,"i",21),o.Lc(2),o.Ub()}if(2&n){const n=o.jc(2);o.Hb("copied",n.isCopied),o.Cb(2),o.Nc(" ",n.responsableMobile," ")}}function l(n,t){if(1&n&&(o.Vb(0,"div",24),o.Vb(1,"div",25),o.Jc(2,g,1,1,"img",26),o.Jc(3,i,2,1,"h6",4),o.Jc(4,p,2,1,"h3",27),o.Jc(5,d,3,3,"button",28),o.Ub(),o.Ub()),2&n){const n=o.jc();o.Cb(2),o.pc("ngIf",n.responsableImg),o.Cb(1),o.pc("ngIf",n.position),o.Cb(1),o.pc("ngIf",n.responsableName),o.Cb(1),o.pc("ngIf",n.responsableMobile)}}const C=function(n,t){return{"background-image":n,"background-position-y":t}};let b=(()=>{class n{constructor(){this.defualtBgCover="../../../../../assets/images/page-custom-header.jpg",this.coverImage=this.defualtBgCover,this.isOpenedHint=!1,this.isCopied=!1}toggleHint(){this.isOpenedHint=!this.isOpenedHint}copyPhoneNumber(n){let t=n.target.textContent,e=document.createElement("input");e.setAttribute("value",t),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3)}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Jb({type:n,selectors:[["app-page-header"]],inputs:{title:"title",responsableImg:"responsableImg",responsableName:"responsableName",responsableMobile:"responsableMobile",position:"position",coverImage:"coverImage"},decls:11,vars:9,consts:[[1,"page-custom-header",3,"ngStyle"],[1,"overlay"],["class","responsable-data",4,"ngIf"],["data-aos","fade-right",1,"title"],[4,"ngIf"],["class","user-data","data-aos","fade-left",4,"ngIf"],["data-aos","fade-up",1,"svg"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 1000 300","preserveAspectRatio","none",1,"nectar-shape-divider"],["d","M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"],["d","M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"],["d","M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"],[1,"responsable-data"],["data-aos","zoom-in",1,"user-btn",3,"click"],[1,"fa","fa-user"],[1,"data"],[1,"close-btn",3,"click"],[1,"fa","fa-times"],["class","user-image",4,"ngIf"],[1,"user-data"],[1,"name"],[1,"phone",3,"click"],[1,"fa","fa-copy"],[1,"user-image"],["alt","",3,"src"],["data-aos","fade-left",1,"user-data"],[1,"img"],["alt","",3,"src",4,"ngIf"],["class","name",4,"ngIf"],["class","phone",3,"copied","click",4,"ngIf"]],template:function(n,t){1&n&&(o.Vb(0,"header",0),o.Vb(1,"div",1),o.Jc(2,r,15,8,"div",2),o.Vb(3,"div",3),o.Jc(4,s,2,1,"h2",4),o.Ub(),o.Jc(5,l,6,4,"div",5),o.Vb(6,"div",6),o.ic(),o.Vb(7,"svg",7),o.Qb(8,"path",8),o.Qb(9,"path",9),o.Qb(10,"path",10),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&n&&(o.pc("ngStyle",o.uc(6,C,"url("+t.coverImage+")",t.coverImage==t.defualtBgCover?"70%":"0%")),o.Cb(1),o.Hb("centerd",!t.responsableImg),o.Cb(1),o.pc("ngIf",t.responsableImg),o.Cb(2),o.pc("ngIf",t.title),o.Cb(1),o.pc("ngIf",t.responsableImg))},directives:[a.m,a.l],styles:['.page-custom-header[_ngcontent-%COMP%]{background-attachment:fixed;background-size:cover;position:relative;height:100vh}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]{height:50vh}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:100%;height:100%;background-image:linear-gradient(rgba(29,38,113,.6),rgba(195,55,120,.8));display:flex;align-items:center;justify-content:space-between}.page-custom-header[_ngcontent-%COMP%]   .overlay.centerd[_ngcontent-%COMP%]{justify-content:center}.page-custom-header[_ngcontent-%COMP%]   .overlay.centerd[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .page-custom-header[_ngcontent-%COMP%]   .overlay.centerd[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-right:0!important}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{justify-content:center}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding-right:80px}@media (max-width:1100px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding-right:0}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]{display:none;position:relative}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]{display:block}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .user-btn[_ngcontent-%COMP%]{border:0;margin-left:8px;margin-right:15px;position:relative;bottom:3px;width:35px;height:35px;border-radius:50%;color:#fff;background-color:#509eff;display:flex;justify-content:center;align-items:center;box-shadow:1px 2px 3px rgba(0,0,0,.349)}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{position:fixed;right:50%;background-color:#fff;z-index:100;padding:45px 15px 10px;margin-top:4px;text-align:center;border-radius:3px;transform:translateY(10px);opacity:0;pointer-events:none;box-shadow:0 3px 3px -2px rgb(0 0 0/20%),0 3px 4px 0 rgb(0 0 0/14%),0 1px 8px 0 rgb(0 0 0/12%);transition:.4s}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data.opened[_ngcontent-%COMP%]{transform:translateY(0) translateX(50%);opacity:1;pointer-events:unset}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{position:absolute;top:10px;right:15px;border:0;color:#ff002f}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{margin-bottom:12px}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:200px;border-radius:50%;transition:.3s}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{border-radius:0}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#6e6e6e}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:18px;margin:8px 0 12px}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]{color:#5066ff;border:0;background-color:#ededed;padding:5px 10px;position:relative}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .phone.copied[_ngcontent-%COMP%]:after{opacity:1}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]:after{content:"\u062a\u0645 \u0627\u0644\u0646\u0633\u062e";background-color:#464646;position:absolute;font-size:10px;color:#fff;display:block;right:105%;top:5px;width:80px;padding:3px 2px 6px 3px;border-radius:2px;pointer-events:none;transition:.2s;opacity:0}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-size:60px;text-shadow:0 0 1px #000}@media (max-width:1100px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-right:30px;font-size:45px}}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-right:15px;font-size:30px}}@media (max-width:350px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]{padding-left:80px;z-index:10}@media (max-width:1100px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]{padding-left:25px}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]{background-color:#fff;transform:translateY(0)}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:0}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]:hover   h6[_ngcontent-%COMP%]{transform:translateY(0);opacity:1;pointer-events:unset}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%], .page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]:hover   .phone[_ngcontent-%COMP%]{transform:translateX(0);opacity:1;pointer-events:unset}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{text-align:center;padding:24px 10px;background-color:initial;transition:.5s;transform:translateY(52px)}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:220px;max-height:220px;border-radius:50%;transition:.5s}@media (max-width:1000px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px;max-height:150px}}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#6e6e6e;margin:12px 5px;transform:translateY(20px);opacity:0;transition:.5s;pointer-events:none}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]{display:none}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:18px;margin:8px 0 12px;transform:translateX(-20px);opacity:0;transition:.5s;pointer-events:none}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]{color:#5066ff;border:0;background-color:#ededed;padding:5px 10px;position:relative;transform:translateX(10px);opacity:0;transition:.5s;pointer-events:none}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .phone.copied[_ngcontent-%COMP%]:after{opacity:1}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]:after{content:"\u062a\u0645 \u0627\u0644\u0646\u0633\u062e";background-color:#464646;position:absolute;font-size:10px;color:#fff;display:block;left:105%;top:5px;width:80px;padding:3px 2px 6px 3px;border-radius:2px;pointer-events:none;transition:.2s;opacity:0}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;width:100%;height:250px}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]{display:none}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:100%;width:100%}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:first-of-type{fill:#fff;opacity:.15}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-of-type(2){fill:#fff;opacity:.3}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:last-of-type{fill:#fff}']}),n})()},ttbn:function(n,t,e){"use strict";e.r(t),e.d(t,"ContactUsModule",function(){return d});var o=e("ofXK"),a=e("FpXt"),c=e("tyNb"),r=e("fXoL"),s=e("vkVs"),g=e("jqCL");const i=[{path:"",component:(()=>{class n{constructor(n){this.loader=n}ngOnInit(){this.loader.showLoader(),setTimeout(()=>{this.loader.hideLoader()},2500)}}return n.\u0275fac=function(t){return new(t||n)(r.Pb(s.a))},n.\u0275cmp=r.Jb({type:n,selectors:[["app-contact-us"]],decls:25,vars:0,consts:[[1,"contactUs"],["title","\u0627\u062a\u0635\u0644 \u0628\u0646\u0627","responsableImg","../../../../../assets/images/images/contactUs.jpg","responsableName","\u0645\u062d\u0645\u062f \u062f\u0627\u0648\u0648\u062f \u0639\u0644\u064a","responsableMobile","0500453532","position","\u0645\u0633\u0624\u0648\u0644 \u0627\u062a\u0635\u0644 \u0628\u0646\u0627  ",2,"direction","rtl","text-align","right"],[1,"container","my-5"],[1,"row"],["data-aos","fade-right",1,"col-md-4"],[1,"card-counter","success"],[1,"fa","fa-phone"],[1,"count-numbers"],[1,"count-name"],["data-aos","fade-up",1,"col-md-4"],[1,"card-counter","danger"],[1,"fa","fa-bus"],["data-aos","fade-left",1,"col-md-4"],[1,"card-counter","info"],[1,"fa","fa-users"]],template:function(n,t){1&n&&(r.Vb(0,"div",0),r.Qb(1,"app-page-header",1),r.Vb(2,"div",2),r.Vb(3,"div",3),r.Vb(4,"div",4),r.Vb(5,"div",5),r.Qb(6,"i",6),r.Vb(7,"span",7),r.Lc(8,"0551557376"),r.Ub(),r.Vb(9,"span",8),r.Lc(10,"\u0627\u0644\u0642\u0628\u0648\u0644 \u0648\u0627\u0644\u062a\u0633\u062c\u064a\u0644"),r.Ub(),r.Ub(),r.Ub(),r.Vb(11,"div",9),r.Vb(12,"div",10),r.Qb(13,"i",11),r.Vb(14,"span",7),r.Lc(15,"0536229910"),r.Ub(),r.Vb(16,"span",8),r.Lc(17,"\u0627\u0644\u0646\u0642\u0644 \u0627\u0644\u0645\u062f\u0631\u0633\u064a "),r.Ub(),r.Ub(),r.Ub(),r.Vb(18,"div",12),r.Vb(19,"div",13),r.Qb(20,"i",14),r.Vb(21,"span",7),r.Lc(22,"0503719119"),r.Ub(),r.Vb(23,"span",8),r.Lc(24,"\u0627\u0644\u0639\u0644\u0627\u0642\u0627\u062a \u0627\u0644\u0639\u0627\u0645\u0629"),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub())},directives:[g.a],styles:[".card-counter[_ngcontent-%COMP%]{box-shadow:2px 2px 10px #dadada;margin:5px;padding:20px 10px;background-color:#fff;height:100px;border-radius:5px;transition:all .3s linear}.card-counter.primary[_ngcontent-%COMP%]{background-color:#007bff;color:#fff}.card-counter.danger[_ngcontent-%COMP%]{background-color:#ef5350;color:#fff}.card-counter.success[_ngcontent-%COMP%]{background-color:#66bb6a;color:#fff}.card-counter.info[_ngcontent-%COMP%]{background-color:#26c6da;color:#fff}.card-counter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:5em;opacity:.2}.card-counter[_ngcontent-%COMP%]   .count-numbers[_ngcontent-%COMP%]{position:absolute;right:35px;top:20px;font-size:22px;display:block}.card-counter[_ngcontent-%COMP%]   .count-name[_ngcontent-%COMP%]{position:absolute;right:35px;top:65px;font-style:italic;text-transform:capitalize;opacity:.8;display:block;font-size:18px}"]}),n})()}];let p=(()=>{class n{}return n.\u0275mod=r.Nb({type:n}),n.\u0275inj=r.Mb({factory:function(t){return new(t||n)},imports:[[c.f.forChild(i)],c.f]}),n})(),d=(()=>{class n{}return n.\u0275mod=r.Nb({type:n}),n.\u0275inj=r.Mb({factory:function(t){return new(t||n)},imports:[[o.c,p,a.a]]}),n})()}}]);