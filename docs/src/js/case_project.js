!function(e){function n(n){for(var t,a,c=n[0],u=n[1],p=n[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);for(l&&l(n);f.length;)f.shift()();return i.push.apply(i,p||[]),o()}function o(){for(var e,n=0;n<i.length;n++){for(var o=i[n],t=!0,c=1;c<o.length;c++){var u=o[c];0!==r[u]&&(t=!1)}t&&(i.splice(n--,1),e=a(a.s=o[0]))}return e}var t={},r={4:0},i=[];function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,n,o){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(o,t,function(n){return e[n]}.bind(null,t));return o},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var p=0;p<c.length;p++)n(c[p]);var l=u;i.push([60,0,1]),o()}({0:function(e,n){e.exports=jQuery},1:function(e,n,o){},2:function(e,n,o){"use strict";(function(e){o(3),o(10);e(".header-container.m .menu").on("click",(function(){e(".header-container.m .nav-container").slideToggle()}));var n=e(".banner-container").outerHeight(),t=n-e(".header-container").outerHeight();e(window).scroll((function(){e(window).scrollTop()>t?(e(".header-container").addClass("inner"),console.log(1)):e(".header-container").removeClass("inner")})),console.log(n)}).call(this,o(0))},3:function(e,n,o){},4:function(e,n,o){"use strict";o(5)},5:function(e,n,o){},60:function(e,n,o){"use strict";o.r(n),function(e){o(9),o(1),o(61),o(2),o(4);var n=o(6);new n.a(".project-swiper",{loop:!0,pagination:{el:".swiper-project-pagination",clickable:!0}});e(".work-tab-item").on("click",(function(){e(this).addClass("on").siblings().removeClass("on")}));new n.a(".work-swiper",{loop:!0,slidesPerView:4,slidesPerColumn:2,spaceBetween:10,slidesPerColumnFill:"row",navigation:{nextEl:".swiper-work-button-next",prevEl:".swiper-work-button-prev"}});e(".video-btn").on("click",(function(){var n=e(this).parent().data("video"),o=e(this).parent().data("img");e("#popup-video").attr("src",n),e("#popup-video").attr("poster",o),e(".video-popup-container").fadeIn().css("display","flex"),e("#popup-video").trigger("play")})),e(".video-popup-container .mask").on("click",(function(){e(".video-popup-container").fadeOut(),e("#popup-video").trigger("pause")}))}.call(this,o(0))},61:function(e,n,o){}});