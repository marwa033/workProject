(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"Ap4+":function(t,e,n){"use strict";var a=n("/xfr"),o=n("Jq2x"),r=n("cKS0");function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var c={setTranslate:function(){var t=this;if(t.params.scrollbar.el&&t.scrollbar.el){var e=t.scrollbar,n=e.dragSize,a=e.trackSize,o=e.$dragEl,r=e.$el,s=t.params.scrollbar,c=n,i=(a-n)*t.progress;t.rtlTranslate?(i=-i)>0?(c=n-i,i=0):-i+n>a&&(c=a+i):i<0?(c=n+i,i=0):i+n>a&&(c=a-i),t.isHorizontal()?(o.transform("translate3d("+i+"px, 0, 0)"),o[0].style.width=c+"px"):(o.transform("translate3d(0px, "+i+"px, 0)"),o[0].style.height=c+"px"),s.hide&&(clearTimeout(t.scrollbar.timeout),r[0].style.opacity=1,t.scrollbar.timeout=setTimeout(function(){r[0].style.opacity=0,r.transition(400)},1e3))}},setTransition:function(t){var e=this;e.params.scrollbar.el&&e.scrollbar.el&&e.scrollbar.$dragEl.transition(t)},updateSize:function(){var t=this;if(t.params.scrollbar.el&&t.scrollbar.el){var e=t.scrollbar,n=e.$dragEl,a=e.$el;n[0].style.width="",n[0].style.height="";var o,s=t.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,c=t.size/t.virtualSize,i=c*(s/t.size);o="auto"===t.params.scrollbar.dragSize?s*c:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?n[0].style.width=o+"px":n[0].style.height=o+"px",a[0].style.display=c>=1?"none":"",t.params.scrollbar.hide&&(a[0].style.opacity=0),Object(r.c)(e,{trackSize:s,divider:c,moveDivider:i,dragSize:o}),e.$el[t.params.watchOverflow&&t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}},getPointerPosition:function(t){return this.isHorizontal()?"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientX:t.clientX:"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientY:t.clientY},setDragPosition:function(t){var e,n=this,a=n.scrollbar,o=n.rtlTranslate,r=a.$el,s=a.dragSize,c=a.trackSize,i=a.dragStartPos;e=(a.getPointerPosition(t)-r.offset()[n.isHorizontal()?"left":"top"]-(null!==i?i:s/2))/(c-s),e=Math.max(Math.min(e,1),0),o&&(e=1-e);var l=n.minTranslate()+(n.maxTranslate()-n.minTranslate())*e;n.updateProgress(l),n.setTranslate(l),n.updateActiveIndex(),n.updateSlidesClasses()},onDragStart:function(t){var e=this,n=e.params.scrollbar,a=e.scrollbar,o=e.$wrapperEl,r=a.$el,s=a.$dragEl;e.scrollbar.isTouched=!0,e.scrollbar.dragStartPos=t.target===s[0]||t.target===s?a.getPointerPosition(t)-t.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,t.preventDefault(),t.stopPropagation(),o.transition(100),s.transition(100),a.setDragPosition(t),clearTimeout(e.scrollbar.dragTimeout),r.transition(0),n.hide&&r.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),e.emit("scrollbarDragStart",t)},onDragMove:function(t){var e=this,n=e.scrollbar,a=e.$wrapperEl,o=n.$el,r=n.$dragEl;e.scrollbar.isTouched&&(t.preventDefault?t.preventDefault():t.returnValue=!1,n.setDragPosition(t),a.transition(0),o.transition(0),r.transition(0),e.emit("scrollbarDragMove",t))},onDragEnd:function(t){var e=this,n=e.params.scrollbar,a=e.$wrapperEl,o=e.scrollbar.$el;e.scrollbar.isTouched&&(e.scrollbar.isTouched=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),a.transition("")),n.hide&&(clearTimeout(e.scrollbar.dragTimeout),e.scrollbar.dragTimeout=Object(r.e)(function(){o.css("opacity",0),o.transition(400)},1e3)),e.emit("scrollbarDragEnd",t),n.snapOnRelease&&e.slideToClosest())},enableDraggable:function(){var t=this;if(t.params.scrollbar.el){var e=Object(a.a)(),n=t.touchEventsTouch,o=t.touchEventsDesktop,r=t.params,s=t.support,c=t.scrollbar.$el[0],i=!(!s.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},l=!(!s.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};c&&(s.touch?(c.addEventListener(n.start,t.scrollbar.onDragStart,i),c.addEventListener(n.move,t.scrollbar.onDragMove,i),c.addEventListener(n.end,t.scrollbar.onDragEnd,l)):(c.addEventListener(o.start,t.scrollbar.onDragStart,i),e.addEventListener(o.move,t.scrollbar.onDragMove,i),e.addEventListener(o.end,t.scrollbar.onDragEnd,l)))}},disableDraggable:function(){var t=this;if(t.params.scrollbar.el){var e=Object(a.a)(),n=t.touchEventsTouch,o=t.touchEventsDesktop,r=t.params,s=t.support,c=t.scrollbar.$el[0],i=!(!s.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},l=!(!s.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};c&&(s.touch?(c.removeEventListener(n.start,t.scrollbar.onDragStart,i),c.removeEventListener(n.move,t.scrollbar.onDragMove,i),c.removeEventListener(n.end,t.scrollbar.onDragEnd,l)):(c.removeEventListener(o.start,t.scrollbar.onDragStart,i),e.removeEventListener(o.move,t.scrollbar.onDragMove,i),e.removeEventListener(o.end,t.scrollbar.onDragEnd,l)))}},init:function(){var t=this;if(t.params.scrollbar.el){var e=t.scrollbar,n=t.$el,a=t.params.scrollbar,s=Object(o.a)(a.el);t.params.uniqueNavElements&&"string"==typeof a.el&&s.length>1&&1===n.find(a.el).length&&(s=n.find(a.el));var c=s.find("."+t.params.scrollbar.dragClass);0===c.length&&(c=Object(o.a)('<div class="'+t.params.scrollbar.dragClass+'"></div>'),s.append(c)),Object(r.c)(e,{$el:s,el:s[0],$dragEl:c,dragEl:c[0]}),a.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}};e.a={name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){Object(r.a)(this,{scrollbar:s({isTouched:!1,timeout:null,dragTimeout:null},c)})},on:{init:function(t){t.scrollbar.init(),t.scrollbar.updateSize(),t.scrollbar.setTranslate()},update:function(t){t.scrollbar.updateSize()},resize:function(t){t.scrollbar.updateSize()},observerUpdate:function(t){t.scrollbar.updateSize()},setTranslate:function(t){t.scrollbar.setTranslate()},setTransition:function(t,e){t.scrollbar.setTransition(e)},destroy:function(t){t.scrollbar.destroy()}}}},jqCL:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n("fXoL"),o=n("ofXK");function r(t,e){if(1&t&&(a.Vb(0,"div",22),a.Qb(1,"img",23),a.Ub()),2&t){const t=a.jc(2);a.Cb(1),a.pc("src",t.responsableImg,a.Dc)}}function s(t,e){if(1&t){const t=a.Wb();a.Vb(0,"div",11),a.Vb(1,"button",12),a.fc("click",function(){return a.Ac(t),a.jc().toggleHint()}),a.Qb(2,"i",13),a.Ub(),a.Vb(3,"div",14),a.Vb(4,"button",15),a.fc("click",function(){return a.Ac(t),a.jc().toggleHint()}),a.Qb(5,"i",16),a.Ub(),a.Jc(6,r,2,1,"div",17),a.Vb(7,"div",18),a.Vb(8,"h6"),a.Lc(9),a.Ub(),a.Vb(10,"h3",19),a.Lc(11),a.Ub(),a.Vb(12,"button",20),a.fc("click",function(e){return a.Ac(t),a.jc().copyPhoneNumber(e)}),a.Qb(13,"i",21),a.Lc(14),a.Ub(),a.Ub(),a.Ub(),a.Ub()}if(2&t){const t=a.jc();a.Cb(3),a.Hb("opened",t.isOpenedHint),a.Cb(3),a.pc("ngIf",t.responsableImg),a.Cb(3),a.Mc(t.position),a.Cb(2),a.Mc(t.responsableName),a.Cb(1),a.Hb("copied",t.isCopied),a.Cb(2),a.Nc(" ",t.responsableMobile," ")}}function c(t,e){if(1&t&&(a.Vb(0,"h2"),a.Lc(1),a.Ub()),2&t){const t=a.jc();a.Cb(1),a.Mc(t.title)}}function i(t,e){if(1&t&&a.Qb(0,"img",23),2&t){const t=a.jc(2);a.pc("src",t.responsableImg,a.Dc)}}function l(t,e){if(1&t&&(a.Vb(0,"h6"),a.Lc(1),a.Ub()),2&t){const t=a.jc(2);a.Cb(1),a.Mc(t.position)}}function g(t,e){if(1&t&&(a.Vb(0,"h3",19),a.Lc(1),a.Ub()),2&t){const t=a.jc(2);a.Cb(1),a.Mc(t.responsableName)}}function p(t,e){if(1&t){const t=a.Wb();a.Vb(0,"button",20),a.fc("click",function(e){return a.Ac(t),a.jc(2).copyPhoneNumber(e)}),a.Qb(1,"i",21),a.Lc(2),a.Ub()}if(2&t){const t=a.jc(2);a.Hb("copied",t.isCopied),a.Cb(2),a.Nc(" ",t.responsableMobile," ")}}function d(t,e){if(1&t&&(a.Vb(0,"div",24),a.Vb(1,"div",25),a.Jc(2,i,1,1,"img",26),a.Jc(3,l,2,1,"h6",4),a.Jc(4,g,2,1,"h3",27),a.Jc(5,p,3,3,"button",28),a.Ub(),a.Ub()),2&t){const t=a.jc();a.Cb(2),a.pc("ngIf",t.responsableImg),a.Cb(1),a.pc("ngIf",t.position),a.Cb(1),a.pc("ngIf",t.responsableName),a.Cb(1),a.pc("ngIf",t.responsableMobile)}}const b=function(t,e){return{"background-image":t,"background-position-y":e}};let u=(()=>{class t{constructor(){this.defualtBgCover="../../../../../assets/images/page-custom-header.jpg",this.coverImage=this.defualtBgCover,this.isOpenedHint=!1,this.isCopied=!1}toggleHint(){this.isOpenedHint=!this.isOpenedHint}copyPhoneNumber(t){let e=t.target.textContent,n=document.createElement("input");n.setAttribute("value",e),document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Jb({type:t,selectors:[["app-page-header"]],inputs:{title:"title",responsableImg:"responsableImg",responsableName:"responsableName",responsableMobile:"responsableMobile",position:"position",coverImage:"coverImage"},decls:11,vars:9,consts:[[1,"page-custom-header",3,"ngStyle"],[1,"overlay"],["class","responsable-data",4,"ngIf"],["data-aos","fade-right",1,"title"],[4,"ngIf"],["class","user-data","data-aos","fade-left",4,"ngIf"],["data-aos","fade-up",1,"svg"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 1000 300","preserveAspectRatio","none",1,"nectar-shape-divider"],["d","M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"],["d","M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"],["d","M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"],[1,"responsable-data"],["data-aos","zoom-in",1,"user-btn",3,"click"],[1,"fa","fa-user"],[1,"data"],[1,"close-btn",3,"click"],[1,"fa","fa-times"],["class","user-image",4,"ngIf"],[1,"user-data"],[1,"name"],[1,"phone",3,"click"],[1,"fa","fa-copy"],[1,"user-image"],["alt","",3,"src"],["data-aos","fade-left",1,"user-data"],[1,"img"],["alt","",3,"src",4,"ngIf"],["class","name",4,"ngIf"],["class","phone",3,"copied","click",4,"ngIf"]],template:function(t,e){1&t&&(a.Vb(0,"header",0),a.Vb(1,"div",1),a.Jc(2,s,15,8,"div",2),a.Vb(3,"div",3),a.Jc(4,c,2,1,"h2",4),a.Ub(),a.Jc(5,d,6,4,"div",5),a.Vb(6,"div",6),a.ic(),a.Vb(7,"svg",7),a.Qb(8,"path",8),a.Qb(9,"path",9),a.Qb(10,"path",10),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&t&&(a.pc("ngStyle",a.uc(6,b,"url("+e.coverImage+")",e.coverImage==e.defualtBgCover?"70%":"0%")),a.Cb(1),a.Hb("centerd",!e.responsableImg),a.Cb(1),a.pc("ngIf",e.responsableImg),a.Cb(2),a.pc("ngIf",e.title),a.Cb(1),a.pc("ngIf",e.responsableImg))},directives:[o.m,o.l],styles:['.page-custom-header[_ngcontent-%COMP%]{background-attachment:fixed;background-size:cover;position:relative;height:100vh}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]{height:50vh}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:100%;height:100%;background-image:linear-gradient(rgba(29,38,113,.6),rgba(195,55,120,.8));display:flex;align-items:center;justify-content:space-between}.page-custom-header[_ngcontent-%COMP%]   .overlay.centerd[_ngcontent-%COMP%]{justify-content:center}.page-custom-header[_ngcontent-%COMP%]   .overlay.centerd[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .page-custom-header[_ngcontent-%COMP%]   .overlay.centerd[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-right:0!important}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{justify-content:center}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding-right:80px}@media (max-width:1100px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding-right:0}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]{display:none;position:relative}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]{display:block}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .user-btn[_ngcontent-%COMP%]{border:0;margin-left:8px;margin-right:15px;position:relative;bottom:3px;width:35px;height:35px;border-radius:50%;color:#fff;background-color:#509eff;display:flex;justify-content:center;align-items:center;box-shadow:1px 2px 3px rgba(0,0,0,.349)}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]{position:fixed;right:50%;background-color:#fff;z-index:100;padding:45px 15px 10px;margin-top:4px;text-align:center;border-radius:3px;transform:translateY(10px);opacity:0;pointer-events:none;box-shadow:0 3px 3px -2px rgb(0 0 0/20%),0 3px 4px 0 rgb(0 0 0/14%),0 1px 8px 0 rgb(0 0 0/12%);transition:.4s}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data.opened[_ngcontent-%COMP%]{transform:translateY(0) translateX(50%);opacity:1;pointer-events:unset}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{position:absolute;top:10px;right:15px;border:0;color:#ff002f}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{margin-bottom:12px}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:200px;border-radius:50%;transition:.3s}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{border-radius:0}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#6e6e6e}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:18px;margin:8px 0 12px}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]{color:#5066ff;border:0;background-color:#ededed;padding:5px 10px;position:relative}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .phone.copied[_ngcontent-%COMP%]:after{opacity:1}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .responsable-data[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]:after{content:"\u062a\u0645 \u0627\u0644\u0646\u0633\u062e";background-color:#464646;position:absolute;font-size:10px;color:#fff;display:block;right:105%;top:5px;width:80px;padding:3px 2px 6px 3px;border-radius:2px;pointer-events:none;transition:.2s;opacity:0}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-size:60px;text-shadow:0 0 1px #000}@media (max-width:1100px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-right:30px;font-size:45px}}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-right:15px;font-size:30px}}@media (max-width:350px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]{padding-left:80px;z-index:10}@media (max-width:1100px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]{padding-left:25px}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]{background-color:#fff;transform:translateY(0)}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:0}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]:hover   h6[_ngcontent-%COMP%]{transform:translateY(0);opacity:1;pointer-events:unset}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%], .page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]:hover   .phone[_ngcontent-%COMP%]{transform:translateX(0);opacity:1;pointer-events:unset}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{text-align:center;padding:24px 10px;background-color:initial;transition:.5s;transform:translateY(52px)}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:220px;max-height:220px;border-radius:50%;transition:.5s}@media (max-width:1000px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px;max-height:150px}}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#6e6e6e;margin:12px 5px;transform:translateY(20px);opacity:0;transition:.5s;pointer-events:none}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]{display:none}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:18px;margin:8px 0 12px;transform:translateX(-20px);opacity:0;transition:.5s;pointer-events:none}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] > .user-data[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]{color:#5066ff;border:0;background-color:#ededed;padding:5px 10px;position:relative;transform:translateX(10px);opacity:0;transition:.5s;pointer-events:none}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .phone.copied[_ngcontent-%COMP%]:after{opacity:1}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]:after{content:"\u062a\u0645 \u0627\u0644\u0646\u0633\u062e";background-color:#464646;position:absolute;font-size:10px;color:#fff;display:block;left:105%;top:5px;width:80px;padding:3px 2px 6px 3px;border-radius:2px;pointer-events:none;transition:.2s;opacity:0}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;width:100%;height:250px}@media (max-width:600px){.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]{display:none}}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:100%;width:100%}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:first-of-type{fill:#fff;opacity:.15}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-of-type(2){fill:#fff;opacity:.3}.page-custom-header[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:last-of-type{fill:#fff}']}),t})()}}]);