(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{WpQk:function(D,j,c){},"dMo/":function(D,j,c){"use strict";var a=c("kM82"),s=c.n(a),i=c("hKI/"),C=c.n(i),m=c("WpQk"),x=c.n(m);function e(t,r){return v(t)||_(t,r)||g(t,r)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(t,r){if(!!t){if(typeof t=="string")return l(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,r)}}function l(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,d=new Array(r);n<r;n++)d[n]=t[n];return d}function _(t,r){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var d=[],o=!0,O=!1,f,E;try{for(n=n.call(t);!(o=(f=n.next()).done)&&(d.push(f.value),!(r&&d.length===r));o=!0);}catch(A){O=!0,E=A}finally{try{!o&&n.return!=null&&n.return()}finally{if(O)throw E}}return d}}function v(t){if(Array.isArray(t))return t}var h=function(r){var n=r.children,d=Object(a.useRef)(),o=Object(a.useState)(!1),O=e(o,2),f=O[0],E=O[1],A=Object(a.useState)(!1),F=e(A,2),B=F[0],L=F[1];return Object(a.useEffect)(function(){var u=d.current,b=C()(function(){E(u.scrollLeft>0),L(u.scrollLeft<u.scrollWidth-u.offsetWidth)},100);return b(),u.addEventListener("scroll",b),window.addEventListener("resize",b),function(){u.removeEventListener("scroll",b),window.removeEventListener("resize",b)}},[]),s.a.createElement("div",{className:"__dumi-default-table"},s.a.createElement("div",{className:"__dumi-default-table-content",ref:d,"data-left-folded":f||void 0,"data-right-folded":B||void 0},s.a.createElement("table",null,n)))};j.a=h},ltIB:function(D,j,c){"use strict";c.r(j);var a=c("kM82"),s=c.n(a),i=c("dEAq"),C=c.n(i),m=c("H1Ra"),x=c("dMo/"),e=c("Z5qc"),M=c.n(e),g=s.a.memo(function(l){var _=l.demos;return Object(e.jsx)(e.Fragment,{children:Object(e.jsxs)("div",{className:"markdown",children:[Object(e.jsxs)("h3",{id:"defineconfig",children:[Object(e.jsx)(i.AnchorLink,{to:"#defineconfig","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"defineConfig"]}),Object(e.jsxs)("h5",{id:"\u5F00\u542F-hd-\u7684-umi-\u914D\u7F6E\u7EE7\u627F\u4E8E-umi-\u7684-defineconfig",children:[Object(e.jsx)(i.AnchorLink,{to:"#\u5F00\u542F-hd-\u7684-umi-\u914D\u7F6E\u7EE7\u627F\u4E8E-umi-\u7684-defineconfig","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"\u5F00\u542F HD \u7684 umi \u914D\u7F6E\uFF0C\u7EE7\u627F\u4E8E umi \u7684 defineConfig"]}),Object(e.jsx)(m.a,{code:`// .umirc.ts
import { defineConfig } from '@baic/yolk-umi-hd';

export default defineConfig({
  hd: {},
});`,lang:"tsx"}),Object(e.jsxs)("h4",{id:"api",children:[Object(e.jsx)(i.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"API"]}),Object(e.jsxs)(x.a,{children:[Object(e.jsx)("thead",{children:Object(e.jsxs)("tr",{children:[Object(e.jsx)("th",{align:"center",children:"\u53C2\u6570"}),Object(e.jsx)("th",{align:"center",children:"\u8BF4\u660E"}),Object(e.jsx)("th",{align:"center",children:"\u7C7B\u578B"}),Object(e.jsx)("th",{align:"center",children:"\u9ED8\u8BA4\u503C"})]})}),Object(e.jsx)("tbody",{children:Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{align:"center",children:"hd"}),Object(e.jsx)("td",{align:"center",children:"\u5F00\u542F hd \u6A21\u5F0F"}),Object(e.jsx)("td",{align:"center",children:"HD"}),Object(e.jsx)("td",{align:"center",children:"-"})]})})]}),Object(e.jsxs)("h4",{id:"hd",children:[Object(e.jsx)(i.AnchorLink,{to:"#hd","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"HD"]}),Object(e.jsxs)(x.a,{children:[Object(e.jsx)("thead",{children:Object(e.jsxs)("tr",{children:[Object(e.jsx)("th",{align:"center",children:"\u53C2\u6570"}),Object(e.jsx)("th",{align:"center",children:"\u8BF4\u660E"}),Object(e.jsx)("th",{align:"center",children:"\u7C7B\u578B"}),Object(e.jsx)("th",{align:"center",children:"\u9ED8\u8BA4\u503C"})]})}),Object(e.jsxs)("tbody",{children:[Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{align:"center",children:"rootFontSize"}),Object(e.jsx)("td",{align:"center",children:"\u57FA\u7840\u5B57\u4F53\u5927\u5C0F"}),Object(e.jsx)("td",{align:"center",children:"number"}),Object(e.jsx)("td",{align:"center",children:"14"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{align:"center",children:"rules"}),Object(e.jsx)("td",{align:"center",children:"\u9002\u914D\u89C4\u5219"}),Object(e.jsx)("td",{align:"center",children:"Rule"}),Object(e.jsx)("td",{align:"center",children:Object(e.jsxs)("code",{children:["{"," mode: 'vl', options: [14, 750] ","}"]})})]})]})]}),Object(e.jsxs)("h4",{id:"rule",children:[Object(e.jsx)(i.AnchorLink,{to:"#rule","aria-hidden":"true",tabIndex:-1,children:Object(e.jsx)("span",{className:"icon icon-link"})}),"Rule"]}),Object(e.jsxs)(x.a,{children:[Object(e.jsx)("thead",{children:Object(e.jsxs)("tr",{children:[Object(e.jsx)("th",{align:"center",children:"\u53C2\u6570"}),Object(e.jsx)("th",{align:"center",children:"\u8BF4\u660E"}),Object(e.jsx)("th",{align:"center",children:"\u7C7B\u578B"}),Object(e.jsx)("th",{align:"center",children:"\u9ED8\u8BA4\u503C"})]})}),Object(e.jsxs)("tbody",{children:[Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{align:"center",children:"minWidth"}),Object(e.jsx)("td",{align:"center",children:"\u6700\u5C0F\u5BBD\u5EA6"}),Object(e.jsx)("td",{align:"center",children:"number"}),Object(e.jsx)("td",{align:"center",children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{align:"center",children:"maxWidth"}),Object(e.jsx)("td",{align:"center",children:"\u6700\u5927\u5BBD\u5EA6"}),Object(e.jsx)("td",{align:"center",children:"number"}),Object(e.jsx)("td",{align:"center",children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{align:"center",children:"mode"}),Object(e.jsx)("td",{align:"center",children:"\u6A21\u5F0F"}),Object(e.jsx)("td",{align:"center",children:"vl | flex | vw | vh"}),Object(e.jsx)("td",{align:"center",children:"-"})]}),Object(e.jsxs)("tr",{children:[Object(e.jsx)("td",{align:"center",children:"options"}),Object(e.jsx)("td",{align:"center",children:"\u5C3A\u5BF8\u53C2\u6570"}),Object(e.jsx)("td",{align:"center",children:"number | [number, number]"}),Object(e.jsx)("td",{align:"center",children:"-"})]})]})]})]})})});j.default=function(l){var _=s.a.useContext(i.context),v=_.demos;return s.a.useEffect(function(){var h;l!=null&&(h=l.location)!==null&&h!==void 0&&h.hash&&i.AnchorLink.scrollToAnchor(decodeURIComponent(l.location.hash.slice(1)))},[]),Object(e.jsx)(g,{demos:v})}}}]);
