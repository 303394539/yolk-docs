(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"2N97":function(e,t,n){"use strict";function r(){const e=n("q1tI");return r=function(){return e},e}function o(e,t){return c(e)||l(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),t&&i.length===t)break}catch(l){a=!0,o=l}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function c(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const s="data-prefers-color",f="dumi:prefers-color";let d;class p{constructor(){this.color=void 0,this.callbacks=[],this.color=localStorage.getItem(f)||document.documentElement.getAttribute(s),["light","dark"].forEach((e=>{const t=this.getColorMedia(e),n=t=>{t.matches&&"auto"===this.color&&(document.documentElement.setAttribute(s,e),this.applyCallbacks())};t.addEventListener?t.addEventListener("change",n):t.addListener&&t.addListener(n)}))}getColorMedia(e){return window.matchMedia(`(prefers-color-scheme: ${e})`)}isColorMode(e){return this.getColorMedia(e).matches}applyCallbacks(){this.callbacks.forEach((e=>e(this.color)))}listen(e){this.callbacks.push(e)}unlisten(e){this.callbacks.splice(this.callbacks.indexOf(e),1)}set(e){return this.color=e,localStorage.setItem(f,e),this.applyCallbacks(),"auto"===e?document.documentElement.setAttribute(s,this.isColorMode("dark")?"dark":"light"):document.documentElement.setAttribute(s,e),e}}var m=()=>{const e=(0,r().useState)(),t=o(e,2),n=t[0],i=t[1],u=(0,r().useCallback)((e=>{d.set(e)}),[]);return(0,r().useEffect)((()=>(d=d||new p,d.listen(i),i(d.color),()=>d.unlisten(i))),[]),[n,u]};t.default=m},"3QDa":function(e,t,n){"use strict";function r(){const e=n("q1tI");return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("nLCz"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return f(e)||s(e,t)||l(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),t&&i.length===t)break}catch(l){a=!0,o=l}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function f(e){if(Array.isArray(e))return e}function d(e,t,n,r){return Object.entries(e[t]).reduce(((e,[t,o])=>(e[t]=o.map((e=>{const t=Object.assign({},e);return Object.keys(e).forEach((e=>{if(/^description(\.|$)/.test(e)){const o=e.match(/^description\.?(.*)$/),i=u(o,2),a=i[1];a&&a!==n||!a&&!r?delete t[e]:t.description=t[e]}})),t})),e)),{})}var p=e=>{const t=(0,r().useContext)(o.default),n=t.locale,i=t.config.locales,a=t.apis,l=!i.length||i[0].name===n,c=(0,r().useState)(d(a,e,n,l)),s=u(c,2),f=s[0],p=s[1];return(0,r().useEffect)((()=>{p(d(a,e,n,l))}),[a,e,n,l]),f};t.default=p},"6asN":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("LtsZ"),o=n("zqmC"),i=(0,o.LinkWrapper)(r.NavLink);t.default=i},"6xEa":function(e,t,n){var r,o=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function o(e,t){if(!r[e]){r[e]={};for(var n=0;n<e.length;n++)r[e][e.charAt(n)]=n}return r[e][t]}var i={compressToBase64:function(e){if(null==e)return"";var n=i._compress(e,6,(function(e){return t.charAt(e)}));switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:i._decompress(e.length,32,(function(n){return o(t,e.charAt(n))}))},compressToUTF16:function(t){return null==t?"":i._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:i._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=i.compress(e),n=new Uint8Array(2*t.length),r=0,o=t.length;r<o;r++){var u=t.charCodeAt(r);n[2*r]=u>>>8,n[2*r+1]=u%256}return n},decompressFromUint8Array:function(t){if(null===t||void 0===t)return i.decompress(t);for(var n=new Array(t.length/2),r=0,o=n.length;r<o;r++)n[r]=256*t[2*r]+t[2*r+1];var u=[];return n.forEach((function(t){u.push(e(t))})),i.decompress(u.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":i._compress(e,6,(function(e){return n.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),i._decompress(e.length,32,(function(t){return o(n,e.charAt(t))})))},compress:function(t){return i._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,n){if(null==e)return"";var r,o,i,u={},a={},l="",c="",s="",f=2,d=3,p=2,m=[],y=0,h=0;for(i=0;i<e.length;i+=1)if(l=e.charAt(i),Object.prototype.hasOwnProperty.call(u,l)||(u[l]=d++,a[l]=!0),c=s+l,Object.prototype.hasOwnProperty.call(u,c))s=c;else{if(Object.prototype.hasOwnProperty.call(a,s)){if(s.charCodeAt(0)<256){for(r=0;r<p;r++)y<<=1,h==t-1?(h=0,m.push(n(y)),y=0):h++;for(o=s.charCodeAt(0),r=0;r<8;r++)y=y<<1|1&o,h==t-1?(h=0,m.push(n(y)),y=0):h++,o>>=1}else{for(o=1,r=0;r<p;r++)y=y<<1|o,h==t-1?(h=0,m.push(n(y)),y=0):h++,o=0;for(o=s.charCodeAt(0),r=0;r<16;r++)y=y<<1|1&o,h==t-1?(h=0,m.push(n(y)),y=0):h++,o>>=1}f--,0==f&&(f=Math.pow(2,p),p++),delete a[s]}else for(o=u[s],r=0;r<p;r++)y=y<<1|1&o,h==t-1?(h=0,m.push(n(y)),y=0):h++,o>>=1;f--,0==f&&(f=Math.pow(2,p),p++),u[c]=d++,s=String(l)}if(""!==s){if(Object.prototype.hasOwnProperty.call(a,s)){if(s.charCodeAt(0)<256){for(r=0;r<p;r++)y<<=1,h==t-1?(h=0,m.push(n(y)),y=0):h++;for(o=s.charCodeAt(0),r=0;r<8;r++)y=y<<1|1&o,h==t-1?(h=0,m.push(n(y)),y=0):h++,o>>=1}else{for(o=1,r=0;r<p;r++)y=y<<1|o,h==t-1?(h=0,m.push(n(y)),y=0):h++,o=0;for(o=s.charCodeAt(0),r=0;r<16;r++)y=y<<1|1&o,h==t-1?(h=0,m.push(n(y)),y=0):h++,o>>=1}f--,0==f&&(f=Math.pow(2,p),p++),delete a[s]}else for(o=u[s],r=0;r<p;r++)y=y<<1|1&o,h==t-1?(h=0,m.push(n(y)),y=0):h++,o>>=1;f--,0==f&&(f=Math.pow(2,p),p++)}for(o=2,r=0;r<p;r++)y=y<<1|1&o,h==t-1?(h=0,m.push(n(y)),y=0):h++,o>>=1;while(1){if(y<<=1,h==t-1){m.push(n(y));break}h++}return m.join("")},decompress:function(e){return null==e?"":""==e?null:i._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,n,r){var o,i,u,a,l,c,s,f=[],d=4,p=4,m=3,y="",h=[],v={val:r(0),position:n,index:1};for(o=0;o<3;o+=1)f[o]=o;u=0,l=Math.pow(2,2),c=1;while(c!=l)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),u|=(a>0?1:0)*c,c<<=1;switch(u){case 0:u=0,l=Math.pow(2,8),c=1;while(c!=l)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),u|=(a>0?1:0)*c,c<<=1;s=e(u);break;case 1:u=0,l=Math.pow(2,16),c=1;while(c!=l)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),u|=(a>0?1:0)*c,c<<=1;s=e(u);break;case 2:return""}f[3]=s,i=s,h.push(s);while(1){if(v.index>t)return"";u=0,l=Math.pow(2,m),c=1;while(c!=l)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),u|=(a>0?1:0)*c,c<<=1;switch(s=u){case 0:u=0,l=Math.pow(2,8),c=1;while(c!=l)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),u|=(a>0?1:0)*c,c<<=1;f[p++]=e(u),s=p-1,d--;break;case 1:u=0,l=Math.pow(2,16),c=1;while(c!=l)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),u|=(a>0?1:0)*c,c<<=1;f[p++]=e(u),s=p-1,d--;break;case 2:return h.join("")}if(0==d&&(d=Math.pow(2,m),m++),f[s])y=f[s];else{if(s!==p)return null;y=i+i.charAt(0)}h.push(y),f[p++]=i+y.charAt(0),d--,i=y,0==d&&(d=Math.pow(2,m),m++)}}};return i}();r=function(){return o}.call(t,n,t,e),void 0===r||(e.exports=r)},"7sf/":function(e,t,n){"use strict";function r(){const e=n("q1tI");return r=function(){return e},e}function o(){const e=i(n("6xEa"));return o=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return f(e)||s(e,t)||l(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),t&&i.length===t)break}catch(l){a=!0,o=l}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function f(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const d={"zh-CN":"https://www.typescriptlang.org/zh/play","en-US":"https://www.typescriptlang.org/play"};var p=(e,t)=>{const n=(...e)=>{const t=/^zh|cn$/.test(e[0])?d["zh-CN"]:d["en-US"];return`${t}?skipLibCheck=true&jsx=1#code/${o().default.compressToEncodedURIComponent(e[1])}`},i=(0,r().useState)(n(e,t)),a=u(i,2),l=a[0],c=a[1];return(0,r().useEffect)((()=>{c(n(e,t))}),[e,t]),l};t.default=p},"U/TZ":function(e,t,n){"use strict";function r(){const e=n("q1tI");return r=function(){return e},e}function o(e,t){return c(e)||l(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),t&&i.length===t)break}catch(l){a=!0,o=l}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function c(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=(e,t)=>{const n=(...e)=>{const t={};return Object.keys(e[1]).forEach((n=>{const r=(n.match(/^(.+)\.([^_]+)$/)||[]).slice(1),i=o(r,2),u=i[0],a=i[1];a&&a!==e[0]||(t[u||n]=e[1][n])})),t},i=(0,r().useState)(n(e,t)),u=o(i,2),a=u[0],l=u[1];return(0,r().useEffect)((()=>{l(n(e,t))}),[e,t]),a};t.default=s},WWur:function(e,t,n){"use strict";const r=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let u=!1;try{u=document.execCommand("copy")}catch(a){}return n.remove(),i&&(o.removeAllRanges(),o.addRange(i)),r&&r.focus(),u};e.exports=r,e.exports.default=r},bYHP:function(e,t,n){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("q1tI")),i=n("LtsZ"),u=a(n("hKI/"));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=i?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(o,u,a):o[u]=e[u]}return o.default=e,n&&n.set(e,o),o}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){return h(e)||y(e,t)||p(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),t&&i.length===t)break}catch(l){a=!0,o=l}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function h(e){if(Array.isArray(e))return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}var w=new(function(){function e(){v(this,e),this.anchors=[],this.listeners=[],this.listener=void 0,this.listener=(0,u.default)(this._matchActiveAnchor.bind(this),200)}return g(e,[{key:"_matchActiveAnchor",value:function(){var e=this,t=this.anchors.findIndex((function(t,n){return t.getBoundingClientRect().top>128||n===e.anchors.length-1})),n=this.anchors[Math.max(0,t-1)],r=n.parentElement.id;this.listeners.forEach((function(e){return e(r)}))}},{key:"watch",value:function(e){0===this.anchors.length&&"undefined"!==typeof window&&window.addEventListener("scroll",this.listener),this.anchors.push(e),this.listener()}},{key:"unwatch",value:function(e){this.anchors.splice(this.anchors.findIndex((function(t){return t===e})),1),0===this.anchors.length&&"undefined"!==typeof window&&window.removeEventListener("scroll",this.listener)}},{key:"listen",value:function(e){this.listeners.push(e)}},{key:"unlisten",value:function(e){this.listeners.splice(this.listeners.findIndex((function(t){return t===e})),1)}}]),e}());function O(e){return e.offsetTop+(e.offsetParent?O(e.offsetParent):0)}var j=function e(t){var n,r=(null===(n=t.to.match(/(#[^&?]*)/))||void 0===n?void 0:n[1])||"",u=(0,o.useRef)(null),a=(0,o.useState)(!1),l=f(a,2),c=l[0],d=l[1];return(0,o.useEffect)((function(){var e,t;if(["H1","H2","H3"].includes(null===(e=u.current)||void 0===e||null===(t=e.parentElement)||void 0===t?void 0:t.tagName)&&u.current.parentElement.id){var n=u.current;return w.watch(n),function(){w.unwatch(n)}}var o=function(e){d(r==="#".concat(e))};return w.listen(o),function(){return w.unlisten(o)}}),[]),o.default.createElement(i.NavLink,s({},t,{ref:u,onClick:function(){return e.scrollToAnchor(r.substring(1))},isActive:function(){return c}}))};j.scrollToAnchor=function(e){window.requestAnimationFrame((function(){var t=document.getElementById(decodeURIComponent(e));t&&window.scrollTo(0,O(t)-100)}))};var A=j;t.default=A},beRK:function(e,t,n){"use strict";function r(){const e=n("q1tI");return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.getDemoUrl=t.getDemoRouteName=t.default=void 0;var o=i(n("nLCz"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return f(e)||s(e,t)||l(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),t&&i.length===t)break}catch(l){a=!0,o=l}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function f(e){if(Array.isArray(e))return e}function d(){return"BASEMENT"===Object({NODE_ENV:"production"}).PLATFORM_TYPE}const p=()=>d()?"_demos":"~demos";t.getDemoRouteName=p;const m=(e,t)=>{var n;const r=window,o=r.location,i=o.href,a=o.origin,l=i.split(/#\//),c=u(l,2),s=c[0],f=c[1],d="string"===typeof f;return[d?`${s}#`:a,`${(null===(n=window)||void 0===n?void 0:n.routerBase)||""}/`.replace(/\/\/$/,"/"),p(),"/",e,t?".html":""].join("")};t.getDemoUrl=m;var y=e=>{const t=(0,r().useContext)(o.default),n=t.config,i=(0,r().useState)(""),a=u(i,2),l=a[0],c=a[1];return(0,r().useEffect)((()=>{c(e?m(e,n.exportStatic&&n.exportStatic.htmlSuffix):null)}),[e,n]),l};t.default=y},dEAq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Link",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"NavLink",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"context",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"useApiData",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"useCodeSandbox",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"useCopy",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"useDemoUrl",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"useLocaleProps",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"useMotions",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"usePrefersColor",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"useRiddle",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"useSearch",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"useTSPlaygroundUrl",{enumerable:!0,get:function(){return y.default}});var r=v(n("nLCz")),o=v(n("zqmC")),i=v(n("6asN")),u=v(n("bYHP")),a=v(n("t/kZ")),l=v(n("dfPH")),c=v(n("o0kM")),s=v(n("zYLY")),f=v(n("r1Q5")),d=v(n("U/TZ")),p=v(n("beRK")),m=v(n("3QDa")),y=v(n("7sf/")),h=v(n("2N97"));function v(e){return e&&e.__esModule?e:{default:e}}},dfPH:function(e,t,n){"use strict";function r(){const e=n("q1tI");return r=function(){return e},e}function o(){const e=i(n("WWur"));return o=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return f(e)||s(e,t)||l(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),t&&i.length===t)break}catch(l){a=!0,o=l}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function f(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=()=>{const e=(0,r().useState)(),t=u(e,2),n=t[0],i=t[1],a=(0,r().useState)("ready"),l=u(a,2),c=l[0],s=l[1],f=(0,r().useCallback)((e=>{(0,o().default)(e),s("copied"),clearTimeout(n),i(setTimeout((()=>{s("ready")}),2e3))}),[]);return[f,c]};t.default=d},nLCz:function(e,t,n){"use strict";function r(){const e=o(n("q1tI"));return r=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r().default.createContext({config:{mode:"doc",title:"",navs:{},menus:{},locales:[],repository:{branch:"master"},theme:{}},meta:{title:""},menu:[],nav:[],base:"",routes:[],apis:{},demos:{}});t.default=i},o0kM:function(e,t,n){"use strict";function r(){const e=n("q1tI");return r=function(){return e},e}function o(e,t){return c(e)||l(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),t&&i.length===t)break}catch(l){a=!0,o=l}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function c(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const s="https://riddle.alibaba-inc.com/riddles/define";let f;const d=()=>{const e=(0,r().useState)(Boolean(f)),t=o(e,2),n=t[0],i=t[1];return(0,r().useEffect)((()=>{if(void 0===f){const e=document.createElement("img");setTimeout((()=>{e.src="",e.remove()}),200),e.onload=()=>{f=!0,i(!0),e.remove()},e.src="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png"}}),[]),n};function p(e){var t;const n=e.dependencies;let r=e.sources._.tsx||e.sources._.jsx;return r=r.replace(/^/,`import ReactDOM from 'react-dom@${(null===(t=n.react)||void 0===t?void 0:t.version)||"latest"}';\n`).replace("export default","const DumiDemo =").concat("\nReactDOM.render(<DumiDemo />, mountNode);"),r=r.replace(/(from ')((?:@[^/'"]+)?[^/'"]+)/g,((e,t,r)=>{let o=`${t}${r}`;return n[r]&&(o+=`@${n[r].version}`),o})),r}var m=e=>{const t=(0,r().useState)(),n=o(t,2),i=n[0],u=n[1],a=d();return(0,r().useEffect)((()=>{if(e&&a&&1===Object.keys(e.sources).length){const t=document.createElement("form"),n=document.createElement("input");return t.method="POST",t.target="_blank",t.style.display="none",t.action=s,t.appendChild(n),t.setAttribute("data-demo",e.title||""),n.name="data",n.value=JSON.stringify({title:e.titlle,js:p(e),css:Object.entries(e.dependencies).filter((([,e])=>e.css)).map((([e,{version:t,css:n}])=>`@import '~${n.replace(new RegExp(`^(${e})`),`$1@${t}`)}';`)).join("\n")}),document.body.appendChild(t),u((()=>()=>t.submit())),()=>t.remove()}}),[e,a]),i};t.default=m},r1Q5:function(e,t,n){"use strict";function r(){const e=n("q1tI");return r=function(){return e},e}function o(){const e=i(n("6xEa"));return o=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return f(e)||s(e,t)||l(e,t)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),t&&i.length===t)break}catch(l){a=!0,o=l}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function f(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const d="https://codesandbox.io/api/v1/sandboxes/define";function p(e){return o().default.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function m(e){const t=document.createElement("span");t.innerHTML=e;const n=t.textContent;return t.remove(),n}function y(e){const t=Boolean(e.sources._.tsx),n=t?".tsx":".jsx",r={},o={},i=Object.values(e.dependencies).filter((e=>e.css)),u=`App${n}`,a=`index${n}`;return Object.entries(e.dependencies).forEach((([e,{version:t}])=>{o[e]=t})),o["react-dom"]||(o["react-dom"]=o.react||"latest"),r["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},r["package.json"]={content:JSON.stringify({name:e.title,description:m(e.description)||"An auto-generated demo by dumi",main:a,dependencies:o,devDependencies:t?{typescript:"^3"}:{}},null,2)},r["index.html"]={content:'<div style="margin: 16px;" id="root"></div>'},r[a]={content:`/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n${i.map((({css:e})=>`import '${e}';`)).join("\n")}\nimport App from './App';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);`},Object.entries(e.sources).forEach((([e,{tsx:t,jsx:n,content:o}])=>{r["_"===e?u:e]={content:t||n||o}})),p({files:r})}var h=(e,t=d)=>{const n=(0,r().useState)(),o=u(n,2),i=o[0],a=o[1];return(0,r().useEffect)((()=>{if(e){const n=document.createElement("form"),r=document.createElement("input"),o=y(e);return n.method="POST",n.target="_blank",n.style.display="none",n.action=t,n.appendChild(r),n.setAttribute("data-demo",e.title||""),r.name="parameters",r.value=o,document.body.appendChild(n),a((()=>()=>n.submit())),()=>n.remove()}}),[e]),i};t.default=h},"t/kZ":function(e,t,n){"use strict";function r(){const e=n("q1tI");return r=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("dEAq");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return p(e)||d(e,t)||s(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),t&&i.length===t)break}catch(l){a=!0,o=l}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function p(e){if(Array.isArray(e))return e}const m=e=>{const t=(0,r().useContext)(o.context),n=t.locale,i=t.routes,u=t.config.locales,a=(0,r().useState)([]),c=l(a,2),s=c[0],f=c[1],d=(0,r().useState)([]),p=l(d,2),m=p[0],y=p[1];return(0,r().useEffect)((()=>{f(i.filter((({title:e,meta:t})=>{const r=(null===t||void 0===t?void 0:t.locale)===n,o=!(null===t||void 0===t?void 0:t.locale)&&(!u.length||n===u[0].name);return e&&(o||r)})).reduce(((e,t)=>{var n,r,o;const i={title:(null===(n=t.meta)||void 0===n?void 0:n.title)||t.title,path:t.path};return(null===(r=t.meta)||void 0===r?void 0:r.group)&&(i.parent=t.meta.group),e.push(i),e.push(...((null===(o=t.meta)||void 0===o?void 0:o.slugs)||[]).filter((({value:e})=>{var n;return e!==((null===(n=t.meta)||void 0===n?void 0:n.title)||t.title)})).map((e=>({title:e.value,path:`${t.path}#${e.heading}`,parent:i})))),e}),[]))}),[i.length,n]),(0,r().useEffect)((()=>{const t=null===e||void 0===e?void 0:e.trim().toUpperCase();if(t){const e=[];for(let n=0;n<s.length;n+=1)s[n].title.toUpperCase().indexOf(t)>-1&&e.push(s[n]);y(e)}else y([])}),[e,s.length]),m},y=()=>{const e=(0,r().useContext)(o.context),t=e.config.algolia,n=(0,r().useCallback)((e=>{window.docsearch(u({inputSelector:e},t))}),[t]);return n};var h=e=>{const t=(0,r().useContext)(o.context),n=t.config,i=m(e),u=y();return n.algolia?u:i};t.default=h},zYLY:function(e,t,n){"use strict";function r(){const e=n("q1tI");return r=function(){return e},e}function o(e,t){return c(e)||l(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),t&&i.length===t)break}catch(l){a=!0,o=l}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function c(e){if(Array.isArray(e))return e}function s(e,t,n,r=0){var i;if(r<t.length){const u=t[r],a=()=>s(e,t,n,r+1),l=u.match(/^([^:]+):?(.*)$/)||[],c=o(l,3),f=c[1],d=c[2];switch(f){case"autoplay":a();break;case"click":const t=d.match(/^(global\()?(.+?)\)?$/)||[],n=o(t,3),r=n[1],l=n[2],c=r?document:e;null===(i=c.querySelector(l))||void 0===i||i.click(),a();break;case"timeout":setTimeout(a,Number(d));break;case"capture":window.postMessage({type:"dumi:capture-element",value:d},"*"),a();break;default:console.warn(`[dumi: motion] unknown motion '${u}', skip.`),a()}}else n()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var f=(e,t)=>{const n=(0,r().useState)(!1),i=o(n,2),u=i[0],a=i[1],l=(0,r().useCallback)((()=>{u||(s(t,e,(()=>{a(!1)})),a(!0))}),[e,t,u]);return(0,r().useEffect)((()=>{"autoplay"===e[0]&&t&&l()}),[e,t]),[l,u]};t.default=f},zqmC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.LinkWrapper=void 0;var r=u(n("q1tI")),o=n("LtsZ"),i=["to"];function u(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=c(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var s=function(e){return function(t){var n=t.to,o=l(t,i),u=/^(\w+:)?\/\/|^(mailto|tel):/.test(n)||!n,c=r.default.isValidElement(o.children);return r.default.createElement(e,a({to:n||"",component:u?function(){return r.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n},o.children,n&&!c&&r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.default.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.default.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))}:void 0},o,u?{}:{onClick:function(){var e;window.scrollTo({top:0});for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];null===(e=o.onClick)||void 0===e||e.apply(this,n)}}))}};t.LinkWrapper=s;var f=s(o.Link);t.default=f}}]);