!function o(s,u,a){function c(t,e){if(!u[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=u[t]={exports:{}};s[t][0].call(i.exports,function(e){return c(s[t][1][e]||e)},i,i.exports,o,s,u,a)}return u[t].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)c(a[e]);return c}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Cursor=void 0;var r=(i.prototype.startBlinking=function(){var e=this;this.blinkerInterval=setInterval(function(){setTimeout(e.hide,0),setTimeout(e.show,.4*e.blinkTime)},this.blinkTime),this.show()},i.prototype.stopBlinking=function(){clearInterval(this.blinkerInterval)},i.prototype.hasMovedHook=function(){this.stopBlinking(),this.startBlinking()},i);function i(e){var t=this;this.blinkTime=1e3,this.hide=function(){t.element.classList.add("invisible"),t.element.classList.remove("visible")},this.show=function(){t.element.classList.add("visible"),t.element.classList.remove("invisible")},this.element=document.getElementById(e),this.startBlinking()}n.Cursor=r},{}],2:[function(e,t,n){"use strict";var l=function(e,s,u,a){return new(u=u||Promise)(function(n,t){function r(e){try{o(a.next(e))}catch(e){t(e)}}function i(e){try{o(a.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof u?t:new u(function(e){e(t)})).then(r,i)}o((a=a.apply(e,s||[])).next())})},f=function(n,r){var i,o,s,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,o&&(s=2&t[0]?o.return:t[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;switch(o=0,s&&(t=[2&t[0],s.value]),t[0]){case 0:case 1:s=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,o=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=r.call(n,u)}catch(e){t=[6,e],o=0}finally{i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};Object.defineProperty(n,"__esModule",{value:!0});var d=e("./Cursor");$(".viewport").scroll(function(){var n=$(document).scrollTop()+$(window).height()/2;n*=.9;function r(e){return Math.abs(n-(t=e,$(t).offset().top+$(t).height()/2));var t}var i=$("body").find("section"),t=i.get().reduce(function(e,t){return void 0===e&&(e=i[1]),r(e)<r(t)?e:t});i.get().forEach(function(e){e==t?$('nav div div a[href="#'+$(e).attr("id")+'"]').addClass("active"):$('nav div div a[href="#'+$(e).attr("id")+'"]').removeClass("active")})});var r,v,h,i,m,o,p,b={from:50,to:150},w={from:200,to:200},y={from:1e3,to:4e3},g=function(e){return Math.random()*(e.to-e.from)+e.from};$((v=(r={textId:"dev_text",cursorId:"dev_cursor",text:"I'm Benedek.",repetitionNumber:0}).textId,h=r.cursorId,i=r.text,m=void 0===i?"":i,o=r.repetitionNumber,p=void 0===o?1/0:o,new Promise(function(c){return l(void 0,void 0,void 0,function(){var i,o,s,t,n,r,u,a=this;return f(this,function(e){switch(e.label){case 0:return i=document.getElementById(v),o=m.split(""),s=new d.Cursor(h),t=function(){return new Promise(function(t){return l(void 0,void 0,void 0,function(){return f(this,function(e){switch(e.label){case 0:return o.length?[4,n(o.splice(0,1)[0])]:[3,2];case 1:return e.sent(),[3,0];case 2:return setTimeout(t.bind(this),g(w)),[2]}})})})},n=function(t){return new Promise(function(e){i.innerText+=t,setTimeout(e.bind(a),g(b)),s.hasMovedHook()})},r=function(){return new Promise(function(t){return l(void 0,void 0,void 0,function(){return f(this,function(e){switch(e.label){case 0:return i.innerText.length?[4,u(400)]:[3,2];case 1:e.sent(),e.label=2;case 2:return i.innerText.length?[4,u(40)]:[3,4];case 3:return e.sent(),[3,2];case 4:return o.reverse(),setTimeout(t.bind(this),g(y)),[2]}})})})},u=function(r){return void 0===r&&(r=g(b)),new Promise(function(e){var t=i.innerText,n=t.length;o.push(t.substring(n-1,n)),i.innerText=i.innerText.substring(0,n-1),setTimeout(e.bind(a),r),s.hasMovedHook()})},[4,t()];case 1:e.sent(),e.label=2;case 2:return p--?[4,r()]:[3,5];case 3:return e.sent(),[4,t()];case 4:return e.sent(),[3,2];case 5:return c(),[2]}})})}).then(function(){$("#overlay").animate({height:"0%"},800)})))},{"./Cursor":1}]},{},[2]);
//# sourceMappingURL=bundle.js.map
