(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{WpQk:function(e,t,n){},"dMo/":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("hKI/"),c=n.n(l);n("WpQk");function i(e,t){return u(e)||s(e,t)||d(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(l.push(a.value),t&&l.length===t)break}catch(o){i=!0,r=o}finally{try{c||null==n["return"]||n["return"]()}finally{if(i)throw r}}return l}}function u(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),o=i(l,2),d=o[0],m=o[1],s=Object(a["useState"])(!1),u=i(s,2),E=u[0],h=u[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":d||void 0,"data-right-folded":E||void 0},r.a.createElement("table",null,t)))};t["a"]=E},vbyY:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dEAq"),c=n("H1Ra"),i=n("dMo/"),o=r.a.memo((function(e){e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u521d\u59cb\u5316\u9879\u76ee"},r.a.createElement(l["AnchorLink"],{to:"#\u521d\u59cb\u5316\u9879\u76ee","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u521d\u59cb\u5316\u9879\u76ee"),r.a.createElement(c["a"],{code:"$ yolk init",lang:"shell"}),r.a.createElement("h2",{id:"\u542f\u52a8\u9879\u76ee"},r.a.createElement(l["AnchorLink"],{to:"#\u542f\u52a8\u9879\u76ee","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u542f\u52a8\u9879\u76ee"),r.a.createElement(c["a"],{code:"$ yolk start",lang:"shell"}),r.a.createElement("h2",{id:"\u7f16\u8bd1\u9879\u76ee"},r.a.createElement(l["AnchorLink"],{to:"#\u7f16\u8bd1\u9879\u76ee","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7f16\u8bd1\u9879\u76ee"),r.a.createElement(c["a"],{code:"$ yolk build",lang:"shell"}),r.a.createElement("h2",{id:"yolkrc"},r.a.createElement(l["AnchorLink"],{to:"#yolkrc","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),".yolkrc"),r.a.createElement("h5",{id:"yolk\u5185\u7f6e\u914d\u7f6e\u6587\u4ef6"},r.a.createElement(l["AnchorLink"],{to:"#yolk\u5185\u7f6e\u914d\u7f6e\u6587\u4ef6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"yolk\u5185\u7f6e\u914d\u7f6e\u6587\u4ef6"),r.a.createElement(c["a"],{code:"{\n  \"eslintIgnore\": \"xxx\" // \u9ed8\u8ba4\u4e3a ['**/node_modules/**', '**/.umi/**', '**/.umi-production/**', '**/build/**', '**/dist/**', '**/lib/**', '**/public/**', '**/assets/**', '**/h5+app/**', '**/mock/**', '**/yolk/**', '**/yolk-web/**', '**/yolk-web-ui/**', '**/yolk-mobile/**', '**/yolk-mobile-ui/**', '**/yolk-miniapp/**', '**/yolk-miniapp-ui/**']\n}",lang:"json"}),r.a.createElement("h4",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{align:"center"},"\u53c2\u6570"),r.a.createElement("th",{align:"center"},"\u8bf4\u660e"),r.a.createElement("th",{align:"center"},"\u7c7b\u578b"),r.a.createElement("th",{align:"center"},"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"eslintIgnore"),r.a.createElement("td",{align:"center"},"\u5ffd\u7565commit\u65f6eslint\u4ee3\u7801\u68c0\u67e5\uff0c\u7b26\u5408glob\u8bed\u6cd5"),r.a.createElement("td",{align:"center"},"string | RegExp | array"),r.a.createElement("td",{align:"center"},"-")),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"stylelintIgnore"),r.a.createElement("td",{align:"center"},"\u5ffd\u7565commit\u65f6stylelint\u4ee3\u7801\u68c0\u67e5\uff0c\u7b26\u5408glob\u8bed\u6cd5"),r.a.createElement("td",{align:"center"},"string | RegExp | array"),r.a.createElement("td",{align:"center"},"-")),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"strict"),r.a.createElement("td",{align:"center"},"\u4e25\u683c\u6a21\u5f0f\uff0c\u5173\u95ed\u4ee5\u540e\u4f7f\u7528\u9879\u76ee\u5b9a\u4e49\u7684eslint\u89c4\u5219\u8fdb\u884c\u63d0\u4ea4\u68c0\u67e5"),r.a.createElement("td",{align:"center"},"boolean"),r.a.createElement("td",{align:"center"},"-"))))))}));t["default"]=function(e){var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((function(){var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:n})}}}]);