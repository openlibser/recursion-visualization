!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=r(1),a=n(o),i=r(2),s=n(i);$(function(){var t=$("#block-template").html();a["default"].parse(t);var e=10,r=function o(r){var i={n:r,condition:(0===r).toString(),blockId:"blockId"+r,callId:"callId"+r,return1Id:"return1Id"+r,return2Id:"return2Id"+r,prevId:"prevId"+(r+1)},u=a["default"].render(t,i),c=$(u),l=c.find("#callId"+r);if(l.css({backgroundColor:(0,s["default"])()}).on("click",function(){var t=+$(this).data("n");o(t-1),$(this).off("click")}),0===r&&(l.off("click").removeClass("func-call").css({backgroundColor:c.css("background-color")}),c.data("returnVal","1"),c.find("#return1Id"+r).addClass("return-active").on("click",function(){n(this)})),$(document.body).append(c),e>r){var f=$("#callId"+(r+1)),h=f.offset(),p=f.outerWidth(),d=f.outerHeight();c.css({position:"absolute",top:Math.floor(h.top)+"px",left:Math.floor(h.left)+"px",width:Math.floor(p)+"px",height:Math.floor(d)+"px",overflow:"hidden",backgroundColor:f.css("background-color")}),function(){var t=$("#callId"+(r+1)).parents(".recursion-step"),e=t.offset(),n=t.outerWidth(),o=t.outerHeight();c.css({top:Math.floor(e.top+o)+"px",left:Math.floor(e.left)+"px",width:Math.floor(n)-40+"px",height:Math.floor(o)+"px"})}()}},n=function i(t){var r=+$(t).parents(".recursion-step").data("n"),n=$(t).parents(".recursion-step");if(r===e){var o=n.data("returnVal")*r;return void n.html("factorial("+r+") = "+o)}var a=$("#blockId"+(r+1)),s=a.find("#callId"+(r+1)),u=s.offset(),c=s.outerWidth(),l=s.outerHeight(),f=n.data("returnVal");0===r?a.data("returnVal",f):a.data("returnVal",f*n.data("n")),n.css({top:Math.floor(u.top)+"px",left:Math.floor(u.left)+"px",width:Math.floor(c)+"px",height:Math.floor(l)+"px"}),n.one("webkitTransitionEnd 	                otransitionend 	                oTransitionEnd 	                msTransitionEnd 	                transitionend",function(t){n.remove(),s.remove();var e=a.find("#return2Id"+a.data("n"));e.addClass("return-active"),e.html(e.text().replace(";","")+a.data("returnVal")+";"),e.one("click",function(){i(e)})})};$("#init").submit(function(){return $("#start-block").hide(),$("#init").hide(),e=+$("#init").find("#input-value").val(),r(e),!1})})},function(t,e,r){var n,o,a;/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */
!function(r,i){"object"==typeof e&&e&&"string"!=typeof e.nodeName?i(e):(o=[e],n=i,a="function"==typeof n?n.apply(e,o):n,!(void 0!==a&&(t.exports=a)))}(this,function(t){function e(t){return"function"==typeof t}function r(t){return v(t)?"array":typeof t}function n(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(t,e){return null!=t&&"object"==typeof t&&e in t}function a(t,e){return g.call(t,e)}function i(t){return!a(b,t)}function s(t){return String(t).replace(/[&<>"'`=\/]/g,function(t){return w[t]})}function u(e,r){function o(){if(b&&!w)for(;g.length;)delete d[g.pop()];else g=[];b=!1,w=!1}function a(t){if("string"==typeof t&&(t=t.split(k,2)),!v(t)||2!==t.length)throw new Error("Invalid tags: "+t);s=new RegExp(n(t[0])+"\\s*"),u=new RegExp("\\s*"+n(t[1])),h=new RegExp("\\s*"+n("}"+t[1]))}if(!e)return[];var s,u,h,p=[],d=[],g=[],b=!1,w=!1;a(r||t.tags);for(var M,E,$,T,R,C,V=new f(e);!V.eos();){if(M=V.pos,$=V.scanUntil(s))for(var U=0,A=$.length;A>U;++U)T=$.charAt(U),i(T)?g.push(d.length):w=!0,d.push(["text",T,M,M+1]),M+=1,"\n"===T&&o();if(!V.scan(s))break;if(b=!0,E=V.scan(I)||"name",V.scan(y),"="===E?($=V.scanUntil(m),V.scan(m),V.scanUntil(u)):"{"===E?($=V.scanUntil(h),V.scan(x),V.scanUntil(u),E="&"):$=V.scanUntil(u),!V.scan(u))throw new Error("Unclosed tag at "+V.pos);if(R=[E,$,M,V.pos],d.push(R),"#"===E||"^"===E)p.push(R);else if("/"===E){if(C=p.pop(),!C)throw new Error('Unopened section "'+$+'" at '+M);if(C[1]!==$)throw new Error('Unclosed section "'+C[1]+'" at '+M)}else"name"===E||"{"===E||"&"===E?w=!0:"="===E&&a($)}if(C=p.pop())throw new Error('Unclosed section "'+C[1]+'" at '+V.pos);return l(c(d))}function c(t){for(var e,r,n=[],o=0,a=t.length;a>o;++o)e=t[o],e&&("text"===e[0]&&r&&"text"===r[0]?(r[1]+=e[1],r[3]=e[3]):(n.push(e),r=e));return n}function l(t){for(var e,r,n=[],o=n,a=[],i=0,s=t.length;s>i;++i)switch(e=t[i],e[0]){case"#":case"^":o.push(e),a.push(e),o=e[4]=[];break;case"/":r=a.pop(),r[5]=e[2],o=a.length>0?a[a.length-1][4]:n;break;default:o.push(e)}return n}function f(t){this.string=t,this.tail=t,this.pos=0}function h(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function p(){this.cache={}}var d=Object.prototype.toString,v=Array.isArray||function(t){return"[object Array]"===d.call(t)},g=RegExp.prototype.test,b=/\S/,w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},y=/\s*/,k=/\s+/,m=/\s*=/,x=/\s*\}/,I=/#|\^|\/|>|\{|&|=|!/;f.prototype.eos=function(){return""===this.tail},f.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var r=e[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},f.prototype.scanUntil=function(t){var e,r=this.tail.search(t);switch(r){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=e.length,e},h.prototype.push=function(t){return new h(t,this)},h.prototype.lookup=function(t){var r,n=this.cache;if(n.hasOwnProperty(t))r=n[t];else{for(var a,i,s=this,u=!1;s;){if(t.indexOf(".")>0)for(r=s.view,a=t.split("."),i=0;null!=r&&i<a.length;)i===a.length-1&&(u=o(r,a[i])),r=r[a[i++]];else r=s.view[t],u=o(s.view,t);if(u)break;s=s.parent}n[t]=r}return e(r)&&(r=r.call(this.view)),r},p.prototype.clearCache=function(){this.cache={}},p.prototype.parse=function(t,e){var r=this.cache,n=r[t];return null==n&&(n=r[t]=u(t,e)),n},p.prototype.render=function(t,e,r){var n=this.parse(t),o=e instanceof h?e:new h(e);return this.renderTokens(n,o,r,t)},p.prototype.renderTokens=function(t,e,r,n){for(var o,a,i,s="",u=0,c=t.length;c>u;++u)i=void 0,o=t[u],a=o[0],"#"===a?i=this.renderSection(o,e,r,n):"^"===a?i=this.renderInverted(o,e,r,n):">"===a?i=this.renderPartial(o,e,r,n):"&"===a?i=this.unescapedValue(o,e):"name"===a?i=this.escapedValue(o,e):"text"===a&&(i=this.rawValue(o)),void 0!==i&&(s+=i);return s},p.prototype.renderSection=function(t,r,n,o){function a(t){return i.render(t,r,n)}var i=this,s="",u=r.lookup(t[1]);if(u){if(v(u))for(var c=0,l=u.length;l>c;++c)s+=this.renderTokens(t[4],r.push(u[c]),n,o);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)s+=this.renderTokens(t[4],r.push(u),n,o);else if(e(u)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");u=u.call(r.view,o.slice(t[3],t[5]),a),null!=u&&(s+=u)}else s+=this.renderTokens(t[4],r,n,o);return s}},p.prototype.renderInverted=function(t,e,r,n){var o=e.lookup(t[1]);return!o||v(o)&&0===o.length?this.renderTokens(t[4],e,r,n):void 0},p.prototype.renderPartial=function(t,r,n){if(n){var o=e(n)?n(t[1]):n[t[1]];return null!=o?this.renderTokens(this.parse(o),r,n,o):void 0}},p.prototype.unescapedValue=function(t,e){var r=e.lookup(t[1]);return null!=r?r:void 0},p.prototype.escapedValue=function(e,r){var n=r.lookup(e[1]);return null!=n?t.escape(n):void 0},p.prototype.rawValue=function(t){return t[1]},t.name="mustache.js",t.version="2.2.1",t.tags=["{{","}}"];var M=new p;t.clearCache=function(){return M.clearCache()},t.parse=function(t,e){return M.parse(t,e)},t.render=function(t,e,n){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+r(t)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(t,e,n)},t.to_html=function(r,n,o,a){var i=t.render(r,n,o);return e(a)?void a(i):i},t.escape=s,t.Scanner=f,t.Context=h,t.Writer=p})},function(t,e,r){var n,o,a;!function(r,i){o=[],n=i,a="function"==typeof n?n.apply(e,o):n,!(void 0!==a&&(t.exports=a))}(this,function(){function t(t){var e=a(t.hue),r=u(e);return 0>r&&(r=360+r),r}function e(t,e){if("random"===e.luminosity)return u([0,100]);if("monochrome"===e.hue)return 0;var r=i(t),n=r[0],o=r[1];switch(e.luminosity){case"bright":n=55;break;case"dark":n=o-10;break;case"light":o=55}return u([n,o])}function r(t,e,r){var n=o(t,e),a=100;switch(r.luminosity){case"dark":a=n+20;break;case"light":n=(a+n)/2;break;case"random":n=0,a=100}return u([n,a])}function n(t,e){switch(e.format){case"hsvArray":return t;case"hslArray":return p(t);case"hsl":var r=p(t);return"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)";case"hsla":var n=p(t);return"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+Math.random()+")";case"rgbArray":return h(t);case"rgb":var o=h(t);return"rgb("+o.join(", ")+")";case"rgba":var a=h(t);return"rgba("+a.join(", ")+", "+Math.random()+")";default:return c(t)}}function o(t,e){for(var r=s(t).lowerBounds,n=0;n<r.length-1;n++){var o=r[n][0],a=r[n][1],i=r[n+1][0],u=r[n+1][1];if(e>=o&&i>=e){var c=(u-a)/(i-o),l=a-c*o;return c*e+l}}return 0}function a(t){if("number"==typeof parseInt(t)){var e=parseInt(t);if(360>e&&e>0)return[e,e]}if("string"==typeof t&&g[t]){var r=g[t];if(r.hueRange)return r.hueRange}return[0,360]}function i(t){return s(t).saturationRange}function s(t){t>=334&&360>=t&&(t-=360);for(var e in g){var r=g[e];if(r.hueRange&&t>=r.hueRange[0]&&t<=r.hueRange[1])return g[e]}return"Color not found"}function u(t){if(null===v)return Math.floor(t[0]+Math.random()*(t[1]+1-t[0]));var e=t[1]||1,r=t[0]||0;v=(9301*v+49297)%233280;var n=v/233280;return Math.floor(r+n*(e-r))}function c(t){function e(t){var e=t.toString(16);return 1==e.length?"0"+e:e}var r=h(t),n="#"+e(r[0])+e(r[1])+e(r[2]);return n}function l(t,e,r){var n=r[0][0],o=r[r.length-1][0],a=r[r.length-1][1],i=r[0][1];g[t]={hueRange:e,lowerBounds:r,saturationRange:[n,o],brightnessRange:[a,i]}}function f(){l("monochrome",null,[[0,0],[100,0]]),l("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),l("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),l("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),l("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),l("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),l("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),l("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function h(t){var e=t[0];0===e&&(e=1),360===e&&(e=359),e/=360;var r=t[1]/100,n=t[2]/100,o=Math.floor(6*e),a=6*e-o,i=n*(1-r),s=n*(1-a*r),u=n*(1-(1-a)*r),c=256,l=256,f=256;switch(o){case 0:c=n,l=u,f=i;break;case 1:c=s,l=n,f=i;break;case 2:c=i,l=n,f=u;break;case 3:c=i,l=s,f=n;break;case 4:c=u,l=i,f=n;break;case 5:c=n,l=i,f=s}var h=[Math.floor(255*c),Math.floor(255*l),Math.floor(255*f)];return h}function p(t){var e=t[0],r=t[1]/100,n=t[2]/100,o=(2-r)*n;return[e,Math.round(r*n/(1>o?o:2-o)*1e4)/100,o/2*100]}function d(t){for(var e=0,r=0;r!==t.length&&!(e>=Number.MAX_SAFE_INTEGER);r++)e+=t.charCodeAt(r);return e}var v=null,g={};f();var b=function(o){if(o=o||{},o.seed&&o.seed===parseInt(o.seed,10))v=o.seed;else if("string"==typeof o.seed)v=d(o.seed);else{if(void 0!==o.seed&&null!==o.seed)throw new TypeError("The seed value must be an integer or string");v=null}var a,i,s;if(null!==o.count&&void 0!==o.count){var u=o.count,c=[];for(o.count=null;u>c.length;)v&&o.seed&&(o.seed+=1),c.push(b(o));return o.count=u,c}return a=t(o),i=e(a,o),s=r(a,i,o),n([a,i,s],o)};return b})}]);