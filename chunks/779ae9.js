(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{F4QJ:function(D,p,d){"use strict";Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;function l(){const t=g(d("kM82"));return l=function(){return t},t}function r(){const t=d("dEAq");return r=function(){return t},t}function g(t){return t&&t.__esModule?t:{default:t}}function E(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(t);o&&(m=m.filter(function(b){return Object.getOwnPropertyDescriptor(t,b).enumerable})),i.push.apply(i,m)}return i}function c(t){for(var o=1;o<arguments.length;o++){var i=arguments[o]!=null?arguments[o]:{};o%2?E(Object(i),!0).forEach(function(m){T(t,m,i[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):E(Object(i)).forEach(function(m){Object.defineProperty(t,m,Object.getOwnPropertyDescriptor(i,m))})}return t}function T(t,o,i){return o in t?Object.defineProperty(t,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[o]=i,t}const M=t=>t.render();var A=(t,o)=>{let i=[];const m=t.match.params.uuid,b=t.location.query.wrapper===void 0,v=o[m];if(v){const _=c(c({},v.previewerProps),{},{hideActions:(v.previewerProps.hideActions||[]).concat(["EXTERNAL"])});t.location.query.capture!==void 0&&(_.motions=(_.motions||[]).slice(),_.motions.unshift("autoplay"),_.motions.every(O=>!O.startsWith("capture"))&&_.motions.push("capture:[id|=root]")),b?i=[l().default.createElement(M,{render:()=>((0,r().useMotions)(_.motions||[],typeof window!="undefined"?document.documentElement:null),l().default.createElement("div",{},l().default.createElement(v.component)))})]:i=[_,l().default.createElement(v.component)]}return i};p.default=A},RZMt:function(D,p,d){},Zxc8:function(D,p,d){"use strict";d.r(p);var l=d("kM82"),r=d.n(l),g=d("k3GJ"),E=d("MZF8"),c=d("dEAq"),T=d.n(c),M=d("H1Ra"),A=d("RZMt"),t=d.n(A);function o(n,u){return _(n)||v(n,u)||m(n,u)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m(n,u){if(!!n){if(typeof n=="string")return b(n,u);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(n,u)}}function b(n,u){(u==null||u>n.length)&&(u=n.length);for(var a=0,f=new Array(u);a<u;a++)f[a]=n[a];return f}function v(n,u){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var f=[],y=!0,h=!1,S,C;try{for(a=a.call(n);!(y=(S=a.next()).done)&&(f.push(S.value),!(u&&f.length===u));y=!0);}catch(e){h=!0,C=e}finally{try{!y&&a.return!=null&&a.return()}finally{if(h)throw C}}return f}}function _(n){if(Array.isArray(n))return n}function O(n,u){var a,f=(a=n.match(/\.(\w+)$/))===null||a===void 0?void 0:a[1];return f||(f=u.tsx?"tsx":"jsx"),f}var J=function(u){var a,f,y,h=Object(l.useRef)(),S=Object(l.useContext)(c.context),C=S.locale,e=Object(c.useLocaleProps)(C,u),Z=Object(c.useDemoUrl)(e.identifier),x=e.demoUrl||Z,H=(E.a===null||E.a===void 0?void 0:E.a.location.hash)==="#".concat(e.identifier),X=Object.keys(e.sources).length===1,B=Object(c.useCodeSandbox)(((a=e.hideActions)===null||a===void 0?void 0:a.includes("CSB"))?null:e),I=Object(c.useRiddle)(((f=e.hideActions)===null||f===void 0?void 0:f.includes("RIDDLE"))?null:e),G=Object(c.useMotions)(e.motions||[],h.current),N=o(G,2),Q=N[0],z=N[1],V=Object(c.useCopy)(),L=o(V,2),Y=L[0],q=L[1],ee=Object(l.useState)(function(){return e.sources._?"_":Object.keys(e.sources)[0]}),k=o(ee,2),P=k[0],te=k[1],re=Object(l.useState)(O(P,e.sources[P])),U=o(re,2),j=U[0],ne=U[1],ae=Object(l.useState)(Boolean(e.defaultShowCode)),K=o(ae,2),w=K[0],oe=K[1],ie=Object(l.useState)(Math.random()),W=o(ie,2),ue=W[0],$=W[1],R=e.sources[P][j]||e.sources[P].content,ce=Object(c.useTSPlaygroundUrl)(C,R),le=Object(l.useRef)(),se=Object(c.usePrefersColor)(),de=o(se,1),fe=de[0],F=e.actionBarRender,me=F===void 0?function(s){return s}:F;Object(l.useEffect)(function(){$(Math.random())},[fe]);function _e(s){te(s),ne(O(s,e.sources[s]))}return r.a.createElement("div",{style:e.style,className:[e.className,"__dumi-default-previewer",H?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:e.identifier,"data-debug":e.debug||void 0,"data-iframe":e.iframe||void 0},e.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:h,className:"__dumi-default-previewer-demo",style:{transform:e.transform?"translate(0, 0)":void 0,padding:e.compact||e.iframe&&e.compact!==!1?"0":void 0,background:e.background}},e.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(e.iframe).replace(/(\d)$/,"$1px")},key:ue,src:x,ref:le}):e.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":e.title},e.title&&r.a.createElement(c.AnchorLink,{to:"#".concat(e.identifier)},e.title),e.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},me(r.a.createElement(r.a.Fragment,null,B&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:B}),I&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:I}),e.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:function(){return Q()}}),e.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return $(Math.random())}}),!((y=e.hideActions)===null||y===void 0?void 0:y.includes("EXTERNAL"))&&r.a.createElement(c.Link,{target:"_blank",to:x},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":q,onClick:function(){return Y(R)}}),j==="tsx"&&w&&r.a.createElement(c.Link,{target:"_blank",to:ce},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(w?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return oe(!w)}})))),w&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!X&&r.a.createElement(g.b,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:P,onChange:_e},Object.keys(e.sources).map(function(s){return r.a.createElement(g.a,{tab:s==="_"?"index.".concat(O(s,e.sources[s])):s,key:s})})),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(M.a,{code:R,lang:j,showCopy:!1}))))};p.default=J}}]);
