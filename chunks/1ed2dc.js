(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"0Bia":function(B,D,b){"use strict";b.r(D);var A=b("kM82"),t=b.n(A),E=b("dEAq"),oe=b("MZF8"),ie=b("mdU6"),ce=function(r){var e=r.location,o=Object(A.useContext)(E.context),c=o.base,s=o.locale,m=o.config.locales,_=m.find(function(y){var w=y.name;return w!==s});function O(y){var w=c.replace("/".concat(s),""),f=e.pathname.replace(new RegExp("^".concat(c,"(/|$)")),"".concat(w,"$1"))||"/";if(y!==m[0].name){var I="".concat(w,"/").concat(y).replace(/\/\//,"/"),L=e.pathname.replace(c.replace(/^\/$/,"//"),"");return"".concat(I).concat(L).replace(/\/$/,"")}return f}return _?t.a.createElement("div",{className:"__dumi-default-locale-select","data-locale-count":m.length},m.length>2?t.a.createElement("select",{value:s,onChange:function(w){return oe.a.push(O(w.target.value))}},m.map(function(y){return t.a.createElement("option",{value:y.name,key:y.name},y.label)})):t.a.createElement(E.Link,{to:O(_.name)},_.label)):null},Y=ce,U=b("fVI1"),se=function(r){var e=r.onMobileMenuClick,o=r.navPrefix,c=r.location,s=r.darkPrefix,m=Object(A.useContext)(E.context),_=m.base,O=m.config,y=O.mode,w=O.title,f=O.logo,I=m.nav;return t.a.createElement("div",{className:"__dumi-default-navbar","data-mode":y},t.a.createElement("button",{className:"__dumi-default-navbar-toggle",onClick:e}),t.a.createElement(E.Link,{className:"__dumi-default-navbar-logo",style:{backgroundImage:f&&"url('".concat(f,"')")},to:_,"data-plaintext":f===!1||void 0},w),t.a.createElement("nav",null,o,I.map(function(L){var R,x=Boolean((R=L.children)===null||R===void 0?void 0:R.length)&&t.a.createElement("ul",null,L.children.map(function(z){return t.a.createElement("li",{key:z.path},t.a.createElement(E.NavLink,{to:z.path},z.title))}));return t.a.createElement("span",{key:L.title||L.path},L.path?t.a.createElement(E.NavLink,{to:L.path,key:L.path},L.title):L.title,x)}),t.a.createElement("div",{className:"__dumi-default-navbar-tool"},t.a.createElement(Y,{location:c}),s)))},X=se,fe=b("hJnp"),de=["slugs"];function K(){return K=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o])}return a},K.apply(this,arguments)}function ee(a,r){if(a==null)return{};var e=te(a,r),o,c;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(c=0;c<s.length;c++)o=s[c],!(r.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,o)||(e[o]=a[o]))}return e}function te(a,r){if(a==null)return{};var e={},o=Object.keys(a),c,s;for(s=0;s<o.length;s++)c=o[s],!(r.indexOf(c)>=0)&&(e[c]=a[c]);return e}var me=function(r){var e=r.slugs,o=ee(r,de);return t.a.createElement("ul",K({role:"slug-list"},o),e.filter(function(c){var s=c.depth;return s>1&&s<4}).map(function(c){return t.a.createElement("li",{key:c.heading,title:c.value,"data-depth":c.depth},t.a.createElement(E.AnchorLink,{to:"#".concat(c.heading)},t.a.createElement("span",null,c.value)))}))},Z=me,Se=b("Mpie"),ve=function(r){var e=r.mobileMenuCollapsed,o=r.location,c=r.darkPrefix,s=Object(A.useContext)(E.context),m=s.config,_=m.logo,O=m.title,y=m.description,w=m.mode,f=m.repository.url,I=s.menu,L=s.nav,R=s.base,x=s.meta,z=Boolean((x.hero||x.features||x.gapless)&&w==="site")||x.sidemenu===!1||void 0;return t.a.createElement("div",{className:"__dumi-default-menu","data-mode":w,"data-hidden":z,"data-mobile-show":!e||void 0},t.a.createElement("div",{className:"__dumi-default-menu-inner"},t.a.createElement("div",{className:"__dumi-default-menu-header"},t.a.createElement(E.Link,{to:R,className:"__dumi-default-menu-logo",style:{backgroundImage:_&&"url('".concat(_,"')")}}),t.a.createElement("h1",null,O),t.a.createElement("p",null,y),/github\.com/.test(f)&&w==="doc"&&t.a.createElement("p",null,t.a.createElement("object",{type:"image/svg+xml",data:"https://img.shields.io/github/stars".concat(f.match(/((\/[^\/]+){2})$/)[1],"?style=social")}))),t.a.createElement("div",{className:"__dumi-default-menu-mobile-area"},!!L.length&&t.a.createElement("ul",{className:"__dumi-default-menu-nav-list"},L.map(function(v){var M,j=Boolean((M=v.children)===null||M===void 0?void 0:M.length)&&t.a.createElement("ul",null,v.children.map(function($){return t.a.createElement("li",{key:$.path||$.title},t.a.createElement(E.NavLink,{to:$.path},$.title))}));return t.a.createElement("li",{key:v.path||v.title},v.path?t.a.createElement(E.NavLink,{to:v.path},v.title):v.title,j)})),t.a.createElement(Y,{location:o}),c),t.a.createElement("ul",{className:"__dumi-default-menu-list"},!z&&I.map(function(v){var M,j=Boolean((M=x.slugs)===null||M===void 0?void 0:M.length),$=v.children&&Boolean(v.children.length),le=x.toc==="menu"&&!$&&j&&v.path===o.pathname.replace(/([^^])\/$/,"$1"),ue=$?v.children.map(function(H){return H.path}):[v.path,o.pathname.startsWith("".concat(v.path,"/"))&&x.title===v.title?o.pathname:null];return t.a.createElement("li",{key:v.path||v.title},t.a.createElement(E.NavLink,{to:v.path,isActive:function(){return ue.includes(o.pathname)}},v.title),Boolean(v.children&&v.children.length)&&t.a.createElement("ul",null,v.children.map(function(H){return t.a.createElement("li",{key:H.path},t.a.createElement(E.NavLink,{to:H.path,exact:!0},t.a.createElement("span",null,H.title)),Boolean(x.toc==="menu"&&typeof window!="undefined"&&H.path===o.pathname&&j)&&t.a.createElement(Z,{slugs:x.slugs}))})),le&&t.a.createElement(Z,{slugs:x.slugs}))}))))},he=ve,Ee=b("AK2Z");function J(){return J=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o])}return a},J.apply(this,arguments)}function ae(a,r){return h(a)||i(a,r)||u(a,r)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(a,r){if(!!a){if(typeof a=="string")return l(a,r);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(a,r)}}function l(a,r){(r==null||r>a.length)&&(r=a.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=a[e];return o}function i(a,r){var e=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var o=[],c=!0,s=!1,m,_;try{for(e=e.call(a);!(c=(m=e.next()).done)&&(o.push(m.value),!(r&&o.length===r));c=!0);}catch(O){s=!0,_=O}finally{try{!c&&e.return!=null&&e.return()}finally{if(s)throw _}}return o}}function h(a){if(Array.isArray(a))return a}var d=function(r,e){var o=e.toLowerCase().indexOf(r.toLowerCase()),c=r.length;return t.a.createElement(t.a.Fragment,null,e.substring(0,o),t.a.createElement("span",{className:"__dumi-default-search-highlight"},e.substring(o,o+c)),e.substring(o+c,e.length))},p=function(){var a=Object(A.useState)(""),r=ae(a,2),e=r[0],o=r[1],c=Object(A.useState)([]),s=ae(c,2),m=s[0],_=s[1],O=Object(A.useRef)(),y=Object(E.useSearch)(e),w=t.a.createElement("svg",{className:"__dumi-default-search-empty",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2347",width:"32",height:"32"},t.a.createElement("path",{d:"M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z"}));return Object(A.useEffect)(function(){Array.isArray(y)?_(y):typeof y=="function"&&y(".".concat(O.current.className))},[y]),t.a.createElement("div",{className:"__dumi-default-search"},t.a.createElement("input",J({className:"__dumi-default-search-input",type:"search",ref:O},Array.isArray(y)?{value:e,onChange:function(I){return o(I.target.value)}}:{})),t.a.createElement("ul",null,m.length>0&&m.map(function(f){var I;return t.a.createElement("li",{key:f.path,onClick:function(){return o("")}},t.a.createElement(E.AnchorLink,{to:f.path},((I=f.parent)===null||I===void 0?void 0:I.title)&&t.a.createElement("span",null,f.parent.title),d(e,f.title)))}),m.length===0&&e&&t.a.createElement("li",{style:{textAlign:"center"}},w)))},N=b("Zkgb");function C(a,r){return T(a)||g(a,r)||P(a,r)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(a,r){if(!!a){if(typeof a=="string")return S(a,r);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return S(a,r)}}function S(a,r){(r==null||r>a.length)&&(r=a.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=a[e];return o}function g(a,r){var e=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var o=[],c=!0,s=!1,m,_;try{for(e=e.call(a);!(c=(m=e.next()).done)&&(o.push(m.value),!(r&&o.length===r));c=!0);}catch(O){s=!0,_=O}finally{try{!c&&e.return!=null&&e.return()}finally{if(s)throw _}}return o}}function T(a){if(Array.isArray(a))return a}var F=function(r){var e=r.darkSwitch,o=r.onDarkSwitchClick,c=r.isSideMenu,s=["dark","light","auto"],m=Object(E.usePrefersColor)(),_=C(m,2),O=_[0],y=_[1],w=O,f=t.a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4026",width:"22",height:"22"},t.a.createElement("path",{d:"M915.2 476.16h-43.968c-24.704 0-44.736 16-44.736 35.84s20.032 35.904 44.736 35.904H915.2c24.768 0 44.8-16.064 44.8-35.904s-20.032-35.84-44.8-35.84zM512 265.6c-136.704 0-246.464 109.824-246.464 246.4 0 136.704 109.76 246.464 246.464 246.464S758.4 648.704 758.4 512c0-136.576-109.696-246.4-246.4-246.4z m0 425.6c-99.008 0-179.2-80.128-179.2-179.2 0-98.944 80.192-179.2 179.2-179.2S691.2 413.056 691.2 512c0 99.072-80.192 179.2-179.2 179.2zM197.44 512c0-19.84-19.136-35.84-43.904-35.84H108.8c-24.768 0-44.8 16-44.8 35.84s20.032 35.904 44.8 35.904h44.736c24.768 0 43.904-16.064 43.904-35.904zM512 198.464c19.776 0 35.84-20.032 35.84-44.8v-44.8C547.84 84.032 531.84 64 512 64s-35.904 20.032-35.904 44.8v44.8c0 24.768 16.128 44.864 35.904 44.864z m0 627.136c-19.776 0-35.904 20.032-35.904 44.8v44.736C476.096 940.032 492.16 960 512 960s35.84-20.032 35.84-44.8v-44.736c0-24.768-16.064-44.864-35.84-44.864z m329.92-592.832c17.472-17.536 20.288-43.072 6.4-57.024-14.016-14.016-39.488-11.2-57.024 6.336-4.736 4.864-26.496 26.496-31.36 31.36-17.472 17.472-20.288 43.008-6.336 57.024 13.952 14.016 39.488 11.2 57.024-6.336 4.8-4.864 26.496-26.56 31.296-31.36zM213.376 759.936c-4.864 4.8-26.56 26.624-31.36 31.36-17.472 17.472-20.288 42.944-6.4 56.96 14.016 13.952 39.552 11.2 57.024-6.336 4.8-4.736 26.56-26.496 31.36-31.36 17.472-17.472 20.288-43.008 6.336-56.96-14.016-13.952-39.552-11.072-56.96 6.336z m19.328-577.92c-17.536-17.536-43.008-20.352-57.024-6.336-14.08 14.016-11.136 39.488 6.336 57.024 4.864 4.864 26.496 26.56 31.36 31.424 17.536 17.408 43.008 20.288 56.96 6.336 14.016-14.016 11.264-39.488-6.336-57.024-4.736-4.864-26.496-26.56-31.296-31.424z m527.168 628.608c4.864 4.864 26.624 26.624 31.36 31.424 17.536 17.408 43.072 20.224 57.088 6.336 13.952-14.016 11.072-39.552-6.4-57.024-4.864-4.8-26.56-26.496-31.36-31.36-17.472-17.408-43.072-20.288-57.024-6.336-13.952 14.016-11.008 39.488 6.336 56.96z","p-id":"4027"})),I=t.a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3854",width:"22",height:"22"},t.a.createElement("path",{d:"M991.816611 674.909091a69.166545 69.166545 0 0 0-51.665455-23.272727 70.795636 70.795636 0 0 0-27.438545 5.585454A415.674182 415.674182 0 0 1 754.993338 698.181818c-209.594182 0-393.472-184.785455-393.472-395.636363 0-52.363636 38.539636-119.621818 69.515637-173.614546 4.887273-8.610909 9.634909-16.756364 14.103272-24.901818A69.818182 69.818182 0 0 0 384.631156 0a70.842182 70.842182 0 0 0-27.438545 5.585455C161.678429 90.298182 14.362065 307.898182 14.362065 512c0 282.298182 238.824727 512 532.38691 512a522.286545 522.286545 0 0 0 453.957818-268.334545A69.818182 69.818182 0 0 0 991.816611 674.909091zM546.679156 954.181818c-248.785455 0-462.941091-192-462.941091-442.181818 0-186.647273 140.637091-372.829091 300.939637-442.181818-36.817455 65.629091-92.578909 151.970909-92.578909 232.727273 0 250.181818 214.109091 465.454545 462.917818 465.454545a488.331636 488.331636 0 0 0 185.181091-46.545455 453.003636 453.003636 0 0 1-393.565091 232.727273z m103.656728-669.323636l-14.266182 83.781818a34.909091 34.909091 0 0 0 50.362182 36.770909l74.775272-39.563636 74.752 39.563636a36.142545 36.142545 0 0 0 16.174546 3.956364 34.909091 34.909091 0 0 0 34.210909-40.727273l-14.289455-83.781818 60.509091-59.345455a35.025455 35.025455 0 0 0-19.223272-59.578182l-83.61891-12.101818-37.376-76.101818a34.56 34.56 0 0 0-62.254545 0l-37.376 76.101818-83.618909 12.101818a34.909091 34.909091 0 0 0-19.246546 59.578182z m70.423272-64.698182a34.280727 34.280727 0 0 0 26.135273-19.083636l14.312727-29.090909 14.336 29.090909a34.257455 34.257455 0 0 0 26.135273 19.083636l32.046546 4.887273-23.272728 22.574545a35.234909 35.234909 0 0 0-10.007272 30.952727l5.46909 32.116364-28.625454-15.127273a34.490182 34.490182 0 0 0-32.302546 0l-28.695272 15.127273 5.469091-32.116364a35.141818 35.141818 0 0 0-9.984-30.952727l-23.272728-22.574545z","p-id":"3855"})),L=t.a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"11002",width:"22",height:"22"},t.a.createElement("path",{d:"M127.658667 492.885333c0-51.882667 10.24-101.717333 30.378666-149.162666s47.786667-88.064 81.92-122.538667 75.093333-61.781333 122.538667-81.92 96.938667-30.378667 149.162667-30.378667 101.717333 10.24 149.162666 30.378667 88.405333 47.786667 122.88 81.92 61.781333 75.093333 81.92 122.538667 30.378667 96.938667 30.378667 149.162666-10.24 101.717333-30.378667 149.162667-47.786667 88.405333-81.92 122.88-75.093333 61.781333-122.88 81.92-97.28 30.378667-149.162666 30.378667-101.717333-10.24-149.162667-30.378667-88.064-47.786667-122.538667-81.92-61.781333-75.093333-81.92-122.88-30.378667-96.938667-30.378666-149.162667z m329.045333 0c0 130.048 13.994667 244.394667 41.984 343.381334h12.970667c46.762667 0 91.136-9.216 133.461333-27.306667s78.848-42.666667 109.568-73.386667 54.954667-67.242667 73.386667-109.568 27.306667-86.698667 27.306666-133.461333c0-46.421333-9.216-90.794667-27.306666-133.12s-42.666667-78.848-73.386667-109.568-67.242667-54.954667-109.568-73.386667-86.698667-27.306667-133.461333-27.306666h-11.605334c-28.672 123.562667-43.349333 237.909333-43.349333 343.722666z","p-id":"11003"})),R=s.filter(function(v){return v!==w}),x=function(M,j){!c&&o&&o(M),j!==w&&y(j)},z=function(M){switch(M){case"dark":return t.a.createElement("button",{key:"dumi-dark-btn-moon",title:"Dark theme",onClick:function($){return x($,M)},className:"__dumi-default-dark-moon ".concat(M===w?"__dumi-default-dark-switch-active":"")},I);case"light":return t.a.createElement("button",{key:"dumi-dark-btn-sun",title:"Light theme",onClick:function($){return x($,M)},className:"__dumi-default-dark-sun ".concat(M===w?"__dumi-default-dark-switch-active":"")},f);case"auto":return t.a.createElement("button",{key:"dumi-dark-btn-auto",title:"Default to system",onClick:function($){return x($,M)},className:"__dumi-default-dark-auto ".concat(M===w?"__dumi-default-dark-switch-active":"")},L);default:}};return t.a.createElement("div",{className:"__dumi-default-dark"},t.a.createElement("div",{className:"__dumi-default-dark-switch ".concat(!c&&e?"__dumi-default-dark-switch-open":"")},c?s.map(function(v){return z(v)}):z(w)),!c&&e&&t.a.createElement("div",{className:"__dumi-default-dark-switch-list"},R.map(function(v){return z(v)})))},W=F,re=b("AQPS");function V(a,r){return Me(a)||Le(a,r)||ne(a,r)||pe()}function pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(a,r){if(!!a){if(typeof a=="string")return G(a,r);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return G(a,r)}}function G(a,r){(r==null||r>a.length)&&(r=a.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=a[e];return o}function Le(a,r){var e=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var o=[],c=!0,s=!1,m,_;try{for(e=e.call(a);!(c=(m=e.next()).done)&&(o.push(m.value),!(r&&o.length===r));c=!0);}catch(O){s=!0,_=O}finally{try{!c&&e.return!=null&&e.return()}finally{if(s)throw _}}return o}}function Me(a){if(Array.isArray(a))return a}var Ce=function(r){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"__dumi-default-layout-hero"},r.image&&t.a.createElement("img",{src:r.image}),t.a.createElement("h1",null,r.title),t.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.desc}}),r.actions&&r.actions.map(function(e){return t.a.createElement(E.Link,{to:e.link,key:e.text},t.a.createElement("button",{type:"button"},e.text))})))},xe=function(r){return t.a.createElement("div",{className:"__dumi-default-layout-features"},r.map(function(e){return t.a.createElement("dl",{key:e.title,style:{backgroundImage:e.icon?"url(".concat(e.icon,")"):void 0}},e.link?t.a.createElement(E.Link,{to:e.link},t.a.createElement("dt",null,e.title)):t.a.createElement("dt",null,e.title),t.a.createElement("dd",{dangerouslySetInnerHTML:{__html:e.desc}}))}))},Pe=function(r){var e,o,c=r.children,s=r.location,m=Object(A.useContext)(E.context),_=m.config,O=_.mode,y=_.repository,w=m.nav,f=m.meta,I=m.locale,L=y.url,R=y.branch,x=y.platform,z=Object(A.useState)(!0),v=V(z,2),M=v[0],j=v[1],$=Object(A.useState)(!1),le=V($,2),ue=le[0],H=le[1],ye=O==="site",Q=ye&&f.hero,q=ye&&f.features,Ne=f.sidemenu!==!1&&!Q&&!q&&!f.gapless,we=!Q&&!q&&Boolean((e=f.slugs)===null||e===void 0?void 0:e.length)&&(f.toc==="content"||f.toc===void 0)&&!f.gapless,ke=/^zh|cn$/i.test(I),Oe=new Date(f.updatedTime),Ie="".concat(Oe.toLocaleDateString([],{hour12:!1})," ").concat(Oe.toLocaleTimeString([],{hour12:!1})),ge={github:"GitHub",gitlab:"GitLab"}[((o=(L||"").match(/(github|gitlab)/))===null||o===void 0?void 0:o[1])||"nothing"]||x;return t.a.createElement("div",{className:"__dumi-default-layout","data-route":s.pathname,"data-show-sidemenu":String(Ne),"data-show-slugs":String(we),"data-site-mode":ye,"data-gapless":String(!!f.gapless),onClick:function(){H(!1),!M&&j(!0)}},t.a.createElement(X,{location:s,navPrefix:t.a.createElement(p,null),darkPrefix:t.a.createElement(W,{darkSwitch:ue,onDarkSwitchClick:function(_e){H(function(be){return!be}),_e.stopPropagation()},isSideMenu:!1}),onMobileMenuClick:function(_e){j(function(be){return!be}),_e.stopPropagation()}}),t.a.createElement(he,{darkPrefix:t.a.createElement(W,{darkSwitch:ue,isSideMenu:!0}),mobileMenuCollapsed:M,location:s}),we&&t.a.createElement(Z,{slugs:f.slugs,className:"__dumi-default-layout-toc"}),Q&&Ce(f.hero),q&&xe(f.features),t.a.createElement("div",{className:"__dumi-default-layout-content"},c,!Q&&!q&&f.filePath&&!f.gapless&&t.a.createElement("div",{className:"__dumi-default-layout-footer-meta"},ge&&t.a.createElement(E.Link,{to:"".concat(L,"/edit/").concat(R,"/").concat(f.filePath)},ke?"\u5728 ".concat(ge," \u4E0A\u7F16\u8F91\u6B64\u9875"):"Edit this doc on ".concat(ge)),t.a.createElement("span",{"data-updated-text":ke?"\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A":"Last update: "},Ie)),(Q||q)&&f.footer&&t.a.createElement("div",{className:"__dumi-default-layout-footer",dangerouslySetInnerHTML:{__html:f.footer}})))},$e=D.default=Pe},AK2Z:function(B,D,b){},AQPS:function(B,D,b){},"K+nK":function(B,D){function b(A){return A&&A.__esModule?A:{default:A}}B.exports=b},KcUY:function(B,D,b){"use strict";function A(n){return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},A(n)}Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var t=ce(b("kM82")),E=oe(b("nLCz"));function oe(n){return n&&n.__esModule?n:{default:n}}function ie(n){if(typeof WeakMap!="function")return null;var u=new WeakMap,l=new WeakMap;return(ie=function(h){return h?l:u})(n)}function ce(n,u){if(!u&&n&&n.__esModule)return n;if(n===null||A(n)!=="object"&&typeof n!="function")return{default:n};var l=ie(u);if(l&&l.has(n))return l.get(n);var i={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in n)if(d!=="default"&&Object.prototype.hasOwnProperty.call(n,d)){var p=h?Object.getOwnPropertyDescriptor(n,d):null;p&&(p.get||p.set)?Object.defineProperty(i,d,p):i[d]=n[d]}return i.default=n,l&&l.set(n,i),i}function Y(n,u){var l=typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(!l){if(Array.isArray(n)||(l=X(n))||u&&n&&typeof n.length=="number"){l&&(n=l);var i=0,h=function(){};return{s:h,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(k){throw k},f:h}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d=!0,p=!1,N;return{s:function(){l=l.call(n)},n:function(){var k=l.next();return d=k.done,k},e:function(k){p=!0,N=k},f:function(){try{!d&&l.return!=null&&l.return()}finally{if(p)throw N}}}}function U(n,u){return K(n)||de(n,u)||X(n,u)||se()}function se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,u){if(!!n){if(typeof n=="string")return fe(n,u);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return fe(n,u)}}function fe(n,u){(u==null||u>n.length)&&(u=n.length);for(var l=0,i=new Array(u);l<u;l++)i[l]=n[l];return i}function de(n,u){var l=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(l!=null){var i=[],h=!0,d=!1,p,N;try{for(l=l.call(n);!(h=(p=l.next()).done)&&(i.push(p.value),!(u&&i.length===u));h=!0);}catch(C){d=!0,N=C}finally{try{!h&&l.return!=null&&l.return()}finally{if(d)throw N}}return i}}function K(n){if(Array.isArray(n))return n}function ee(n,u){var l=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);u&&(i=i.filter(function(h){return Object.getOwnPropertyDescriptor(n,h).enumerable})),l.push.apply(l,i)}return l}function te(n){for(var u=1;u<arguments.length;u++){var l=arguments[u]!=null?arguments[u]:{};u%2?ee(Object(l),!0).forEach(function(i){me(n,i,l[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(l)):ee(Object(l)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(l,i))})}return n}function me(n,u,l){return u in n?Object.defineProperty(n,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[u]=l,n}var Z=function(u,l){var i=function(){for(var k,P=arguments.length,S=new Array(P),g=0;g<P;g++)S[g]=arguments[g];var T=S[1].replace(/([^^])\/$/,"$1");return te(te({},((k=S[0].find(function(F){var W=F.path;return W===T}))===null||k===void 0?void 0:k.meta)||{}),{},{__pathname:l})},h=(0,t.useState)(i(u,l)),d=U(h,2),p=d[0],N=d[1];return(0,t.useLayoutEffect)(function(){N(i(u,l))},[l]),p},Se=function(u,l){var i=function(){for(var k,P=arguments.length,S=new Array(P),g=0;g<P;g++)S[g]=arguments[g];return((k=S[0].find(function(T){return new RegExp("/".concat(T.name,"(/|$)")).test(S[1])}))===null||k===void 0?void 0:k.name)||u[0].name},h=(0,t.useState)(i(u,l)),d=U(h,2),p=d[0],N=d[1];return(0,t.useLayoutEffect)(function(){N(i(u,l))},[l]),p},ve=function(u,l,i){var h=function(){for(var P,S=arguments.length,g=new Array(S),T=0;T<S;T++)g[T]=arguments[T];for(var F=g[0].navs[g[1]]||[],W="*",re=F.length-1;re>=0;re-=1){var V=F[re],pe=[V].concat(V.children).filter(Boolean),ne=pe.find(function(G){return G.path&&new RegExp("^".concat(G.path.replace(/\.html$/,""),"(/|.|$)")).test(g[2])});if(ne){W=ne.path;break}}return((P=g[0].menus[g[1]])===null||P===void 0?void 0:P[W])||[]},d=(0,t.useState)(h(u,l,i)),p=U(d,2),N=p[0],C=p[1];return(0,t.useLayoutEffect)(function(){C(h(u,l,i))},[u.navs,u.menus,l,i]),N},he=function(u,l,i){var h=function(){for(var P=arguments.length,S=new Array(P),g=0;g<P;g++)S[g]=arguments[g];return S[0]===S[1][0].name?S[2].path:"".concat(i.path,"/").concat(u).replace(/\/\//,"/")},d=(0,t.useState)(h(u,l,i)),p=U(d,2),N=p[0],C=p[1];return(0,t.useLayoutEffect)(function(){C(h(u,l,i))},[u]),N},Ee=function n(u){var l,i=Y(u),h;try{for(i.s();!(h=i.n()).done;){var d=h.value;if(d.__dumiRoot){l=d.routes;break}else if(d.routes&&(l=n(d.routes)))break}}catch(p){i.e(p)}finally{i.f()}return l},J=function(u){var l=u.location,i=u.route,h=u.children,d=u.config,p=u.apis,N=u.demos,C=l.pathname.replace(i.path.replace(/^\/$/,"//"),""),k=Ee(u.routes)||[],P=Z(k,l.pathname),S=Se(d.locales,C),g=ve(d,S,l.pathname),T=he(S,d.locales,i);return t.default.createElement(E.default.Provider,{value:{config:d,meta:P.__pathname===l.pathname?P:{},locale:S,nav:d.navs[S]||[],menu:g,base:T,routes:k,apis:p,demos:N}},h)},ae=J;D.default=ae},Mpie:function(B,D,b){},Zkgb:function(B,D,b){},fVI1:function(B,D,b){},hJnp:function(B,D,b){},mdU6:function(B,D,b){}}]);
