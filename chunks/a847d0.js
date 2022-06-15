(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{OYlG:function(b,B,r){"use strict";r.r(B);var D=r("k1fw"),H=r("kM82"),T=r("RGYn"),S=r("o0o1"),O=r.n(S),M=r("9og8"),w=r("rlch"),L={"yolk-browser-base-demo":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h,e,o,n;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=function(u,m){if(!m&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var y=e(m);if(y&&y.has(u))return y.get(u);var P={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var E in u)if(E!=="default"&&Object.prototype.hasOwnProperty.call(u,E)){var I=C?Object.getOwnPropertyDescriptor(u,E):null;I&&(I.get||I.set)?Object.defineProperty(P,E,I):P[E]=u[E]}return P.default=u,y&&y.set(u,P),P},e=function(u){if(typeof WeakMap!="function")return null;var m=new WeakMap,y=new WeakMap;return(e=function(C){return C?y:m})(u)},s=r("K+nK"),i.t0=s,i.next=6,Promise.resolve().then(r.t.bind(null,"o0o1",7));case 6:return i.t1=i.sent,c=(0,i.t0)(i.t1),i.t2=s,i.next=11,Promise.resolve().then(r.bind(null,"9og8"));case 11:return i.t3=i.sent,d=(0,i.t2)(i.t3),i.t4=s,i.next=16,Promise.resolve().then(r.bind(null,"tJVT"));case 16:return i.t5=i.sent,p=(0,i.t4)(i.t5),i.t6=o,i.next=21,Promise.resolve().then(r.t.bind(null,"kM82",7));case 21:return i.t7=i.sent,f=(0,i.t6)(i.t7),i.next=25,Promise.all([r.e(7),r.e(14)]).then(r.t.bind(null,"ag2L",7));case 25:return g=i.sent,i.next=28,Promise.all([r.e(7),r.e(9),r.e(54)]).then(r.t.bind(null,"hqn5",7));case 28:return a=i.sent,i.next=31,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 31:return h=i.sent,n=function(){var u=(0,a.usePreload)((0,d.default)(c.default.mark(function P(){return c.default.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,g.Util.delay(1e3);case 2:case"end":return E.stop()}},P)})),{loadingComponent:f.createElement(h.Loading,null)}),m=(0,p.default)(u,1),y=m[0];return y(f.createElement(f.Fragment,null,"\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u663E\u793A\u51FA\u6765\u4E86"))},i.abrupt("return",n);case 34:case"end":return i.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Util } from '@baic/yolk';
import { usePreload } from '@baic/yolk-browser-base';
import { Loading } from '@baic/yolk-web';
export default () => {
  const [wrap] = usePreload(
    async () => {
      await Util.delay(1000);
    },
    {
      loadingComponent: <Loading />,
    },
  );
  return wrap(<>\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u663E\u793A\u51FA\u6765\u4E86</>);
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"17.0.2"},"@baic/yolk":{version:"2.0.1-alpha.40"},"@baic/yolk-browser-base":{version:"2.0.1-alpha.40"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-browser-base-demo"}},"yolk-mobile-form-demo":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var P=m?Object.getOwnPropertyDescriptor(t,y):null;P&&(P.get||P.set)?Object.defineProperty(u,y,P):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=r("K+nK"),o.t0=s,o.next=6,Promise.resolve().then(r.bind(null,"tJVT"));case 6:return o.t1=o.sent,c=(0,o.t0)(o.t1),o.t2=a,o.next=11,Promise.resolve().then(r.t.bind(null,"kM82",7));case 11:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=15,Promise.all([r.e(0),r.e(8),r.e(12)]).then(r.bind(null,"9ibs"));case 15:return p=o.sent,o.next=18,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 18:return f=o.sent,h=function(){var t=(0,f.useForm)(),i=(0,c.default)(t,1),l=i[0],u=l.createFormItem;return d.createElement(p.Form,{form:l},u({name:"Input",rules:"required"})(d.createElement(p.Input,null)))},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Form, Input } from 'antd-mobile';
import { useForm } from '@baic/yolk-mobile';

export default () => {
  const [form] = useForm();
  const { createFormItem } = form;
  return (
    <Form form={form}>
      {createFormItem({ name: 'Input', rules: 'required' })(<Input />)}
    </Form>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd-mobile":{version:"5.15.0"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-form-demo"}},"yolk-mobile-demo":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 9:return c=a.sent,f=function(){return s.createElement(c.BarCode,{value:"https://www.baidu.com"})},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { BarCode } from '@baic/yolk-mobile';

export default () => <BarCode value="https://www.baidu.com" />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u8F6C\u6362\u5B57\u7B26\u4E32\u4E3A\u6761\u5F62\u7801</p></div>',identifier:"yolk-mobile-demo"}},"yolk-mobile-demo-1":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Provider,{iconfontScriptUrl:["//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js","//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js"]},s.createElement(c.Iconfont,{type:"icon-javascript"}),s.createElement(c.Iconfont,{type:"icon-java"}),s.createElement(c.Iconfont,{type:"icon-shoppingcart"}),s.createElement(c.Iconfont,{type:"icon-python"}))},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Provider, Iconfont } from '@baic/yolk-mobile';

export default () => {
  return (
    <Provider
      iconfontScriptUrl={[
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js',
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js',
      ]}
    >
      <Iconfont type="icon-javascript" />
      <Iconfont type="icon-java" />
      <Iconfont type="icon-shoppingcart" />
      <Iconfont type="icon-python" />
    </Provider>
  );
};`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u901A\u8FC7\u7ED3\u5408Provider\u7684iconfontScriptUrl\u5B57\u6BB5\uFF0C\u521D\u59CB\u5316iconfont.cn\u7684\u8D44\u6E90\uFF0C\u7136\u540E\u76F4\u63A5\u4F7F\u7528</p></div>',identifier:"yolk-mobile-demo-1"}},"yolk-mobile-demo-2":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var P=m?Object.getOwnPropertyDescriptor(t,y):null;P&&(P.get||P.set)?Object.defineProperty(u,y,P):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=r("K+nK"),o.t0=s,o.next=6,Promise.resolve().then(r.bind(null,"tJVT"));case 6:return o.t1=o.sent,c=(0,o.t0)(o.t1),o.t2=a,o.next=11,Promise.resolve().then(r.t.bind(null,"kM82",7));case 11:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=15,Promise.all([r.e(0),r.e(8),r.e(12)]).then(r.bind(null,"9ibs"));case 15:return p=o.sent,o.next=18,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 18:return f=o.sent,h=function(){var t=(0,f.useForm)(),i=(0,c.default)(t,1),l=i[0],u=l.createFormItem;return d.createElement(p.Form,{form:l},u({label:"Input",name:"Input",rules:"required"})(d.createElement(f.Input,{maxLength:5})))},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Form } from 'antd-mobile';
import { Input, useForm } from '@baic/yolk-mobile';

export default () => {
  const [form] = useForm();
  const { createFormItem } = form;
  return (
    <Form form={form}>
      {createFormItem({
        label: 'Input',
        name: 'Input',
        rules: 'required',
      })(<Input maxLength={5} />)}
    </Form>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd-mobile":{version:"5.15.0"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-2"}},"yolk-mobile-demo-3":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 9:return c=a.sent,f=function(){return s.createElement("div",{style:{position:"relative"}},s.createElement(c.Loading,null))},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Loading } from '@baic/yolk-mobile';

export default () => (
  <div
    style={{
      position: 'relative',
    }}
  >
    <Loading />
  </div>
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-3"}},"yolk-mobile-demo-4":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var P=m?Object.getOwnPropertyDescriptor(t,y):null;P&&(P.get||P.set)?Object.defineProperty(u,y,P):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=r("K+nK"),o.t0=s,o.next=6,Promise.resolve().then(r.bind(null,"tJVT"));case 6:return o.t1=o.sent,c=(0,o.t0)(o.t1),o.t2=a,o.next=11,Promise.resolve().then(r.t.bind(null,"kM82",7));case 11:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=15,Promise.all([r.e(0),r.e(8),r.e(12)]).then(r.bind(null,"9ibs"));case 15:return p=o.sent,o.next=18,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 18:return f=o.sent,h=function(){var t=(0,f.useForm)(),i=(0,c.default)(t,1),l=i[0],u=l.createFormItem;return d.createElement(p.Form,{form:l},u({label:"default",name:"NumberInput",rules:"required"})(d.createElement(f.NumberInput,null)))},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Form } from 'antd-mobile';
import { NumberInput, useForm } from '@baic/yolk-mobile';

export default () => {
  const [form] = useForm();
  const { createFormItem } = form;
  return (
    <Form form={form}>
      {createFormItem({
        label: 'default',
        name: 'NumberInput',
        rules: 'required',
      })(<NumberInput />)}
    </Form>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd-mobile":{version:"5.15.0"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-4"}},"yolk-mobile-demo-5":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var P=m?Object.getOwnPropertyDescriptor(t,y):null;P&&(P.get||P.set)?Object.defineProperty(u,y,P):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=r("K+nK"),o.t0=s,o.next=6,Promise.resolve().then(r.bind(null,"tJVT"));case 6:return o.t1=o.sent,c=(0,o.t0)(o.t1),o.t2=a,o.next=11,Promise.resolve().then(r.t.bind(null,"kM82",7));case 11:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=15,Promise.all([r.e(0),r.e(8),r.e(12)]).then(r.bind(null,"9ibs"));case 15:return p=o.sent,o.next=18,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 18:return f=o.sent,h=function(){var t=(0,f.useForm)(),i=(0,c.default)(t,1),l=i[0],u=l.createFormItem;return d.createElement(p.Form,{form:l},u({label:"decimal",name:"NumberInput",rules:"required"})(d.createElement(f.NumberInput,{decimal:3})))},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Form } from 'antd-mobile';
import { NumberInput, useForm } from '@baic/yolk-mobile';

export default () => {
  const [form] = useForm();
  const { createFormItem } = form;
  return (
    <Form form={form}>
      {createFormItem({
        label: 'decimal',
        name: 'NumberInput',
        rules: 'required',
      })(<NumberInput decimal={3} />)}
    </Form>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd-mobile":{version:"5.15.0"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},title:"\u63A7\u5236\u5C0F\u6570\u4F4D",hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-5"}},"yolk-mobile-demo-6":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var P=m?Object.getOwnPropertyDescriptor(t,y):null;P&&(P.get||P.set)?Object.defineProperty(u,y,P):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=r("K+nK"),o.t0=s,o.next=6,Promise.resolve().then(r.bind(null,"tJVT"));case 6:return o.t1=o.sent,c=(0,o.t0)(o.t1),o.t2=a,o.next=11,Promise.resolve().then(r.t.bind(null,"kM82",7));case 11:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=15,Promise.all([r.e(0),r.e(8),r.e(12)]).then(r.bind(null,"9ibs"));case 15:return p=o.sent,o.next=18,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 18:return f=o.sent,h=function(){var t=(0,f.useForm)(),i=(0,c.default)(t,1),l=i[0],u=l.createFormItem;return d.createElement(p.Form,{form:l},u({label:"zeroStart",name:"NumberInput",rules:"required"})(d.createElement(f.NumberInput,{zeroStart:!0})))},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Form } from 'antd-mobile';
import { NumberInput, useForm } from '@baic/yolk-mobile';

export default () => {
  const [form] = useForm();
  const { createFormItem } = form;
  return (
    <Form form={form}>
      {createFormItem({
        label: 'zeroStart',
        name: 'NumberInput',
        rules: 'required',
      })(<NumberInput zeroStart />)}
    </Form>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd-mobile":{version:"5.15.0"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},title:"\u5141\u8BB80\u5F00\u5934",hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-6"}},"yolk-mobile-demo-7":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var P=m?Object.getOwnPropertyDescriptor(t,y):null;P&&(P.get||P.set)?Object.defineProperty(u,y,P):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=r("K+nK"),o.t0=s,o.next=6,Promise.resolve().then(r.bind(null,"tJVT"));case 6:return o.t1=o.sent,c=(0,o.t0)(o.t1),o.t2=a,o.next=11,Promise.resolve().then(r.t.bind(null,"kM82",7));case 11:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=15,Promise.all([r.e(0),r.e(8),r.e(12)]).then(r.bind(null,"9ibs"));case 15:return p=o.sent,o.next=18,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 18:return f=o.sent,h=function(){var t=(0,f.useForm)(),i=(0,c.default)(t,1),l=i[0],u=l.createFormItem;return d.createElement(p.Form,{form:l},u({label:"negative",name:"NumberInput",rules:"required"})(d.createElement(f.NumberInput,{negative:!0})))},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Form } from 'antd-mobile';
import { NumberInput, useForm } from '@baic/yolk-mobile';

export default () => {
  const [form] = useForm();
  const { createFormItem } = form;
  return (
    <Form form={form}>
      {createFormItem({
        label: 'negative',
        name: 'NumberInput',
        rules: 'required',
      })(<NumberInput negative />)}
    </Form>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd-mobile":{version:"5.15.0"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},title:"\u5141\u8BB8\u8D1F\u6570",hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-7"}},"yolk-mobile-demo-8":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 9:return c=a.sent,f=function(){return s.createElement(c.QrCode,{value:"https://www.baidu.com"})},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { QrCode } from '@baic/yolk-mobile';

export default () => <QrCode value="https://www.baidu.com" />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u8F6C\u6362\u5B57\u7B26\u4E32\u4E3A\u4E8C\u7EF4\u7801</p></div>',identifier:"yolk-mobile-demo-8"}},"yolk-mobile-demo-9":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Required,null,"\u5FC5\u586B")},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Required } from '@baic/yolk-mobile';

export default () => <Required>\u5FC5\u586B</Required>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-9"}},"yolk-mobile-demo-10":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 9:return c=a.sent,f=function(){return s.createElement(c.TimerButton,null,"\u9A8C\u8BC1\u7801")},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { TimerButton } from '@baic/yolk-mobile';

export default () => <TimerButton>\u9A8C\u8BC1\u7801</TimerButton>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7528\u4E8E\u5012\u8BA1\u65F6\u6309\u94AE</p></div>',identifier:"yolk-mobile-demo-10"}},"yolk-mobile-demo-11":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h,e,o;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(l,u){if(!u&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var m=h(u);if(m&&m.has(l))return m.get(l);var y={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in l)if(C!=="default"&&Object.prototype.hasOwnProperty.call(l,C)){var E=P?Object.getOwnPropertyDescriptor(l,C):null;E&&(E.get||E.set)?Object.defineProperty(y,C,E):y[C]=l[C]}return y.default=l,m&&m.set(l,y),y},h=function(l){if(typeof WeakMap!="function")return null;var u=new WeakMap,m=new WeakMap;return(h=function(P){return P?m:u})(l)},s=r("K+nK"),t.t0=s,t.next=6,Promise.resolve().then(r.t.bind(null,"o0o1",7));case 6:return t.t1=t.sent,c=(0,t.t0)(t.t1),t.t2=s,t.next=11,Promise.resolve().then(r.bind(null,"9og8"));case 11:return t.t3=t.sent,d=(0,t.t2)(t.t3),t.t4=s,t.next=16,Promise.resolve().then(r.bind(null,"tJVT"));case 16:return t.t5=t.sent,p=(0,t.t4)(t.t5),t.t6=e,t.next=21,Promise.resolve().then(r.t.bind(null,"kM82",7));case 21:return t.t7=t.sent,f=(0,t.t6)(t.t7),t.next=25,Promise.all([r.e(7),r.e(14)]).then(r.t.bind(null,"ag2L",7));case 25:return g=t.sent,t.next=28,Promise.all([r.e(0),r.e(7),r.e(8),r.e(9),r.e(10)]).then(r.t.bind(null,"kigl",7));case 28:return a=t.sent,o=function(){var l=(0,a.usePreload)((0,d.default)(c.default.mark(function y(){return c.default.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,g.Util.delay(1e3);case 2:case"end":return C.stop()}},y)}))),u=(0,p.default)(l,1),m=u[0];return m(f.createElement("div",null,"\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u663E\u793A\u51FA\u6765\u4E86"))},t.abrupt("return",o);case 31:case"end":return t.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Util } from '@baic/yolk';
import { usePreload } from '@baic/yolk-mobile';
export default () => {
  const [wrap] = usePreload(async () => {
    await Util.delay(1000);
  });
  return wrap(<div>\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u663E\u793A\u51FA\u6765\u4E86</div>);
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"17.0.2"},"@baic/yolk":{version:"2.0.1-alpha.40"},"@baic/yolk-mobile":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],transform:!0,description:'<div class="markdown"><p>\u7528\u4E8E\u9875\u9762\u9884\u52A0\u8F7Dloading\u6548\u679C</p></div>',identifier:"yolk-mobile-demo-11"}},"yolk-web-form-demo":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h,e;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in i)if(P!=="default"&&Object.prototype.hasOwnProperty.call(i,P)){var C=y?Object.getOwnPropertyDescriptor(i,P):null;C&&(C.get||C.set)?Object.defineProperty(m,P,C):m[P]=i[P]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=r("K+nK"),n.next=5,r.e(0).then(r.bind(null,"y8nQ"));case 5:return n.t0=s,n.next=8,Promise.all([r.e(0),r.e(1),r.e(2),r.e(13)]).then(r.bind(null,"Vl3Y"));case 8:return n.t1=n.sent,c=(0,n.t0)(n.t1),n.next=12,r.e(0).then(r.bind(null,"5NDa"));case 12:return n.t2=s,n.next=15,Promise.all([r.e(0),r.e(1),r.e(55)]).then(r.bind(null,"5rEg"));case 15:return n.t3=n.sent,d=(0,n.t2)(n.t3),n.t4=s,n.next=20,Promise.resolve().then(r.bind(null,"tJVT"));case 20:return n.t5=n.sent,p=(0,n.t4)(n.t5),n.t6=h,n.next=25,Promise.resolve().then(r.t.bind(null,"kM82",7));case 25:return n.t7=n.sent,f=(0,n.t6)(n.t7),n.next=29,Promise.all([r.e(0),r.e(1),r.e(2),r.e(7),r.e(11)]).then(r.t.bind(null,"5OGM",7));case 29:return g=n.sent,e=function(){var i=(0,g.useForm)(),l=(0,p.default)(i,1),u=l[0],m=u.createFormItem;return f.createElement(c.default,{form:u},m({name:"Input",rules:"required"})(f.createElement(d.default,null)))},n.abrupt("return",e);case 32:case"end":return n.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Form, Input } from 'antd';
import { useForm } from '@baic/yolk-web-form';

export default () => {
  const [form] = useForm();
  const { createFormItem } = form;
  return (
    <Form form={form}>
      {createFormItem({ name: 'Input', rules: 'required' })(<Input />)}
    </Form>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-form":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-form-demo"}},"yolk-web-demo":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h,e;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in i)if(P!=="default"&&Object.prototype.hasOwnProperty.call(i,P)){var C=y?Object.getOwnPropertyDescriptor(i,P):null;C&&(C.get||C.set)?Object.defineProperty(m,P,C):m[P]=i[P]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=r("K+nK"),n.next=5,r.e(0).then(r.bind(null,"y8nQ"));case 5:return n.t0=s,n.next=8,Promise.all([r.e(0),r.e(1),r.e(2),r.e(13)]).then(r.bind(null,"Vl3Y"));case 8:return n.t1=n.sent,c=(0,n.t0)(n.t1),n.t2=s,n.next=13,Promise.resolve().then(r.bind(null,"tJVT"));case 13:return n.t3=n.sent,d=(0,n.t2)(n.t3),n.t4=h,n.next=18,Promise.resolve().then(r.t.bind(null,"kM82",7));case 18:return n.t5=n.sent,p=(0,n.t4)(n.t5),n.next=22,Promise.all([r.e(0),r.e(1),r.e(2),r.e(7),r.e(11)]).then(r.t.bind(null,"5OGM",7));case 22:return f=n.sent,n.next=25,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 25:return g=n.sent,e=function(){var i=(0,f.useForm)(),l=(0,d.default)(i,1),u=l[0],m=u.createFormItem;return p.createElement(c.default,{form:u},m({name:"BankInput"})(p.createElement(g.BankInput,null)))},n.abrupt("return",e);case 28:case"end":return n.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Form } from 'antd';
import { useForm } from '@baic/yolk-web-form';
import { BankInput } from '@baic/yolk-web';

export default () => {
  const [form] = useForm();
  const { createFormItem } = form;
  return (
    <Form form={form}>
      {createFormItem({ name: 'BankInput' })(<BankInput />)}
    </Form>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-form":{version:"2.0.1-alpha.40"},"@baic/yolk-web":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u4ECENumberInput\u6269\u5C55</p></div>',identifier:"yolk-web-demo"}},"yolk-web-demo-1":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.BarCode,{value:"https://www.baidu.com"})},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { BarCode } from '@baic/yolk-web';

export default () => <BarCode value="https://www.baidu.com" />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u8F6C\u6362\u5B57\u7B26\u4E32\u4E3A\u6761\u5F62\u7801</p></div>',identifier:"yolk-web-demo-1"}},"yolk-web-demo-2":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Collapse,{title:"\u6298\u53E0\u7EC4\u4EF6"},"\u8FD9\u91CC\u662F\u9690\u85CF\u5185\u5BB9")},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Collapse } from '@baic/yolk-web';

export default () => <Collapse title="\u6298\u53E0\u7EC4\u4EF6">\u8FD9\u91CC\u662F\u9690\u85CF\u5185\u5BB9</Collapse>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-demo-2"}},"yolk-web-demo-3":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.DatePicker,{autoFixDate:!0})},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { DatePicker } from '@baic/yolk-web';

export default () => <DatePicker autoFixDate />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u589E\u5F3A\u8F93\u5165\u80FD\u529B",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u589E\u5F3A\u8F93\u5165\u80FD\u529B\uFF0C\u53EF\u4FEE\u590D\u65E5\u671F</p></div>',identifier:"yolk-web-demo-3"}},"yolk-web-demo-4":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Flex,null,s.createElement(c.Flex,null,"1"),s.createElement(c.Flex,null,"2"),s.createElement(c.Flex,null,"3"))},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Flex } from '@baic/yolk-web';

export default () => (
  <Flex>
    <Flex>1</Flex>
    <Flex>2</Flex>
    <Flex>3</Flex>
  </Flex>
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-demo-4"}},"yolk-web-demo-5":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Grid,{data:[{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"}]})},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Grid } from '@baic/yolk-web';

export default () => (
  <Grid
    data={[
      {
        label: '\u6807\u9898',
        value: '\u5185\u5BB9',
      },
      {
        label: '\u6807\u9898',
        value: '\u5185\u5BB9',
      },
      {
        label: '\u6807\u9898',
        value: '\u5185\u5BB9',
      },
      {
        label: '\u6807\u9898',
        value: '\u5185\u5BB9',
      },
    ]}
  />
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7528\u4E8E\u4E00\u822C\u7684\u7F51\u683C\u6570\u636E\u5C55\u793A</p></div>',identifier:"yolk-web-demo-5"}},"yolk-web-demo-6":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Grid,{span:2,data:[{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"}]})},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Grid } from '@baic/yolk-web';

export default () => (
  <Grid
    span={2}
    data={[
      {
        label: '\u6807\u9898',
        value: '\u5185\u5BB9',
      },
      {
        label: '\u6807\u9898',
        value: '\u5185\u5BB9',
      },
      {
        label: '\u6807\u9898',
        value: '\u5185\u5BB9',
      },
      {
        label: '\u6807\u9898',
        value: '\u5185\u5BB9',
      },
    ]}
  />
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"span",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u4EE5\u63A7\u5236\u4E00\u884C\u4EFD\u6570</p></div>',identifier:"yolk-web-demo-6"}},"yolk-web-demo-7":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h,e;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in i)if(P!=="default"&&Object.prototype.hasOwnProperty.call(i,P)){var C=y?Object.getOwnPropertyDescriptor(i,P):null;C&&(C.get||C.set)?Object.defineProperty(m,P,C):m[P]=i[P]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=r("K+nK"),n.next=5,r.e(0).then(r.bind(null,"/zsF"));case 5:return n.t0=s,n.next=8,r.e(0).then(r.bind(null,"PArb"));case 8:return n.t1=n.sent,c=(0,n.t0)(n.t1),n.next=12,Promise.resolve().then(r.bind(null,"+L6B"));case 12:return n.t2=s,n.next=15,Promise.resolve().then(r.bind(null,"2/Rp"));case 15:return n.t3=n.sent,d=(0,n.t2)(n.t3),n.t4=s,n.next=20,Promise.resolve().then(r.bind(null,"tJVT"));case 20:return n.t5=n.sent,p=(0,n.t4)(n.t5),n.t6=h,n.next=25,Promise.resolve().then(r.t.bind(null,"kM82",7));case 25:return n.t7=n.sent,f=(0,n.t6)(n.t7),n.next=29,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 29:return g=n.sent,e=function(){var i=f.useState(!0),l=(0,p.default)(i,2),u=l[0],m=l[1],y=f.useCallback(function(){return m(!u)},[u]);return f.createElement(f.Fragment,null,f.createElement(d.default,{onClick:y},u?"\u5173\u95ED":"\u5F00\u542F","\u8FB9\u6846"),f.createElement(c.default,null),f.createElement(g.Grid,{bordered:u,data:[{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"}]}))},n.abrupt("return",e);case 32:case"end":return n.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Button, Divider } from 'antd';
import { Grid } from '@baic/yolk-web';

export default () => {
  const [bordered, setBordered] = React.useState(true);
  const onClickHandler = React.useCallback(() => setBordered(!bordered), [
    bordered,
  ]);
  return (
    <>
      <Button onClick={onClickHandler}>{bordered ? '\u5173\u95ED' : '\u5F00\u542F'}\u8FB9\u6846</Button>
      <Divider />
      <Grid
        bordered={bordered}
        data={[
          {
            label: '\u6807\u9898',
            value: '\u5185\u5BB9',
          },
          {
            label: '\u6807\u9898',
            value: '\u5185\u5BB9',
          },
          {
            label: '\u6807\u9898',
            value: '\u5185\u5BB9',
          },
          {
            label: '\u6807\u9898',
            value: '\u5185\u5BB9',
          },
        ]}
      />
    </>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},title:"bordered",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u4EE5\u63A7\u5236\u8FB9\u6846\u662F\u5426\u5C55\u793A</p></div>',identifier:"yolk-web-demo-7"}},"yolk-web-demo-8":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h,e;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in i)if(P!=="default"&&Object.prototype.hasOwnProperty.call(i,P)){var C=y?Object.getOwnPropertyDescriptor(i,P):null;C&&(C.get||C.set)?Object.defineProperty(m,P,C):m[P]=i[P]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=r("K+nK"),n.next=5,r.e(0).then(r.bind(null,"/zsF"));case 5:return n.t0=s,n.next=8,r.e(0).then(r.bind(null,"PArb"));case 8:return n.t1=n.sent,c=(0,n.t0)(n.t1),n.next=12,r.e(0).then(r.bind(null,"7Kak"));case 12:return n.t2=s,n.next=15,Promise.all([r.e(0),r.e(15)]).then(r.bind(null,"9yH6"));case 15:return n.t3=n.sent,d=(0,n.t2)(n.t3),n.t4=s,n.next=20,Promise.resolve().then(r.bind(null,"tJVT"));case 20:return n.t5=n.sent,p=(0,n.t4)(n.t5),n.t6=h,n.next=25,Promise.resolve().then(r.t.bind(null,"kM82",7));case 25:return n.t7=n.sent,f=(0,n.t6)(n.t7),n.next=29,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 29:return g=n.sent,e=function(){var i=f.useState("middle"),l=(0,p.default)(i,2),u=l[0],m=l[1],y=f.useCallback(function(P){return m(P.target.value)},[]);return f.createElement(f.Fragment,null,f.createElement(d.default.Group,{value:u,onChange:y},f.createElement(d.default.Button,{value:"small"},"small"),f.createElement(d.default.Button,{value:"middle"},"middle"),f.createElement(d.default.Button,{value:"large"},"large")),f.createElement(c.default,null),f.createElement(g.Grid,{size:u,data:[{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"}]}))},n.abrupt("return",e);case 32:case"end":return n.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Radio, Divider } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio/interface';
import { Grid, GridProps } from '@baic/yolk-web';

export default () => {
  const [size, setSize] = React.useState<GridProps['size']>('middle');
  const onChangeHandler = React.useCallback(
    (e: RadioChangeEvent) => setSize(e.target.value),
    [],
  );
  return (
    <>
      <Radio.Group value={size} onChange={onChangeHandler}>
        <Radio.Button value="small">small</Radio.Button>
        <Radio.Button value="middle">middle</Radio.Button>
        <Radio.Button value="large">large</Radio.Button>
      </Radio.Group>
      <Divider />
      <Grid
        size={size}
        data={[
          {
            label: '\u6807\u9898',
            value: '\u5185\u5BB9',
          },
          {
            label: '\u6807\u9898',
            value: '\u5185\u5BB9',
          },
          {
            label: '\u6807\u9898',
            value: '\u5185\u5BB9',
          },
          {
            label: '\u6807\u9898',
            value: '\u5185\u5BB9',
          },
        ]}
      />
    </>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},title:"size",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u4EE5\u63A7\u5236\u5C3A\u5BF8</p></div>',identifier:"yolk-web-demo-8"}},"yolk-web-demo-9":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h,e;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in i)if(P!=="default"&&Object.prototype.hasOwnProperty.call(i,P)){var C=y?Object.getOwnPropertyDescriptor(i,P):null;C&&(C.get||C.set)?Object.defineProperty(m,P,C):m[P]=i[P]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=r("K+nK"),n.next=5,r.e(0).then(r.bind(null,"y8nQ"));case 5:return n.t0=s,n.next=8,Promise.all([r.e(0),r.e(1),r.e(2),r.e(13)]).then(r.bind(null,"Vl3Y"));case 8:return n.t1=n.sent,c=(0,n.t0)(n.t1),n.t2=s,n.next=13,Promise.resolve().then(r.bind(null,"tJVT"));case 13:return n.t3=n.sent,d=(0,n.t2)(n.t3),n.t4=h,n.next=18,Promise.resolve().then(r.t.bind(null,"kM82",7));case 18:return n.t5=n.sent,p=(0,n.t4)(n.t5),n.next=22,Promise.all([r.e(0),r.e(1),r.e(2),r.e(7),r.e(11)]).then(r.t.bind(null,"5OGM",7));case 22:return f=n.sent,n.next=25,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 25:return g=n.sent,e=function(){var i=(0,f.useForm)(),l=(0,d.default)(i,1),u=l[0],m=u.createFormItem;return p.createElement(c.default,{form:u},p.createElement(g.Grid,{data:[{label:"\u6807\u9898",value:m({name:"content",rules:"required"})(p.createElement(g.Input,null)),required:!0},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"}]}))},n.abrupt("return",e);case 28:case"end":return n.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Form } from 'antd';
import { useForm } from '@baic/yolk-web-form';
import { Grid, Input } from '@baic/yolk-web';

export default () => {
  const [form] = useForm();
  const { createFormItem } = form;
  return (
    <Form form={form}>
      <Grid
        data={[
          {
            label: '\u6807\u9898',
            value: createFormItem({
              name: 'content',
              rules: 'required',
            })(<Input />),
            required: true,
          },
          {
            label: '\u6807\u9898',
            value: '\u5185\u5BB9',
          },
          {
            label: '\u6807\u9898',
            value: '\u5185\u5BB9',
          },
          {
            label: '\u6807\u9898',
            value: '\u5185\u5BB9',
          },
        ]}
      />
    </Form>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-form":{version:"2.0.1-alpha.40"},"@baic/yolk-web":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},title:"required",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u8F85\u52A9\u8868\u5355\u589E\u52A0label\u7684\u5FC5\u586B\u6807\u5FD7</p></div>',identifier:"yolk-web-demo-9"}},"yolk-web-demo-10":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Grid,{bordered:!1,itemDirection:"vertical",data:[{label:"\u6807\u9898",value:"\u5185\u5BB9",required:!0},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"}]})},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Grid } from '@baic/yolk-web';

export default () => (
  <Grid
    bordered={false}
    itemDirection="vertical"
    data={[
      {
        label: '\u6807\u9898',
        value: '\u5185\u5BB9',
        required: true,
      },
      {
        label: '\u6807\u9898',
        value: '\u5185\u5BB9',
      },
      {
        label: '\u6807\u9898',
        value: '\u5185\u5BB9',
      },
      {
        label: '\u6807\u9898',
        value: '\u5185\u5BB9',
      },
    ]}
  />
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"itemDirection",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u63A7\u5236\u5355\u9879\u5E03\u5C40\u65B9\u5411</p></div>',identifier:"yolk-web-demo-10"}},"yolk-web-demo-11":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Provider,{iconfontScriptUrl:["//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js","//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js"]},s.createElement(c.Iconfont,{type:"icon-javascript"}),s.createElement(c.Iconfont,{type:"icon-java"}),s.createElement(c.Iconfont,{type:"icon-shoppingcart"}),s.createElement(c.Iconfont,{type:"icon-python"}))},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Provider, Iconfont } from '@baic/yolk-web';

export default () => {
  return (
    <Provider
      iconfontScriptUrl={[
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js',
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js',
      ]}
    >
      <Iconfont type="icon-javascript" />
      <Iconfont type="icon-java" />
      <Iconfont type="icon-shoppingcart" />
      <Iconfont type="icon-python" />
    </Provider>
  );
};`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u901A\u8FC7\u7ED3\u5408Provider\u7684iconfontScriptUrl\u5B57\u6BB5\uFF0C\u521D\u59CB\u5316iconfont.cn\u7684\u8D44\u6E90\uFF0C\u7136\u540E\u76F4\u63A5\u4F7F\u7528</p></div>',identifier:"yolk-web-demo-11"}},"yolk-web-demo-12":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var P=m?Object.getOwnPropertyDescriptor(t,y):null;P&&(P.get||P.set)?Object.defineProperty(u,y,P):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=r("K+nK"),o.next=5,Promise.resolve().then(r.bind(null,"+L6B"));case 5:return o.t0=s,o.next=8,Promise.resolve().then(r.bind(null,"2/Rp"));case 8:return o.t1=o.sent,c=(0,o.t0)(o.t1),o.t2=s,o.next=13,Promise.resolve().then(r.bind(null,"tJVT"));case 13:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.t4=a,o.next=18,Promise.resolve().then(r.t.bind(null,"kM82",7));case 18:return o.t5=o.sent,p=(0,o.t4)(o.t5),o.next=22,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 22:return f=o.sent,h=function(){var t=p.useState(!1),i=(0,d.default)(t,2),l=i[0],u=i[1],m=p.useCallback(function(){return u(!0)},[]),y=p.useCallback(function(){return u(!1)},[]);return p.createElement(p.Fragment,null,p.createElement(c.default,{onClick:m},"\u9884\u89C8\u56FE\u7247"),p.createElement(f.ImagePreview,{visible:l,onClose:y,urls:["https://avatars.githubusercontent.com/u/1750965"],current:"https://avatars.githubusercontent.com/u/1750965"}))},o.abrupt("return",h);case 25:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Button } from 'antd';
import { ImagePreview } from '@baic/yolk-web';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const onClickHandler = React.useCallback(() => setVisible(true), []);
  const onCloseHandler = React.useCallback(() => setVisible(false), []);
  return (
    <>
      <Button onClick={onClickHandler}>\u9884\u89C8\u56FE\u7247</Button>
      <ImagePreview
        visible={visible}
        onClose={onCloseHandler}
        urls={['https://avatars.githubusercontent.com/u/1750965']}
        current="https://avatars.githubusercontent.com/u/1750965"
      />
    </>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7528\u4E8E\u9884\u89C8\u56FE\u7247</p></div>',identifier:"yolk-web-demo-12"}},"yolk-web-demo-13":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Input,null)},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Input } from '@baic/yolk-web';

export default () => <Input />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u4ECEantd.Input\u6269\u5C55</p></div>',identifier:"yolk-web-demo-13"}},"yolk-web-demo-14":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h,e,o,n;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=function(u,m){if(!m&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var y=e(m);if(y&&y.has(u))return y.get(u);var P={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var E in u)if(E!=="default"&&Object.prototype.hasOwnProperty.call(u,E)){var I=C?Object.getOwnPropertyDescriptor(u,E):null;I&&(I.get||I.set)?Object.defineProperty(P,E,I):P[E]=u[E]}return P.default=u,y&&y.set(u,P),P},e=function(u){if(typeof WeakMap!="function")return null;var m=new WeakMap,y=new WeakMap;return(e=function(C){return C?y:m})(u)},s=r("K+nK"),i.next=5,r.e(0).then(r.bind(null,"y8nQ"));case 5:return i.t0=s,i.next=8,Promise.all([r.e(0),r.e(1),r.e(2),r.e(13)]).then(r.bind(null,"Vl3Y"));case 8:return i.t1=i.sent,c=(0,i.t0)(i.t1),i.next=12,r.e(0).then(r.bind(null,"/zsF"));case 12:return i.t2=s,i.next=15,r.e(0).then(r.bind(null,"PArb"));case 15:return i.t3=i.sent,d=(0,i.t2)(i.t3),i.next=19,Promise.resolve().then(r.bind(null,"+L6B"));case 19:return i.t4=s,i.next=22,Promise.resolve().then(r.bind(null,"2/Rp"));case 22:return i.t5=i.sent,p=(0,i.t4)(i.t5),i.t6=s,i.next=27,Promise.resolve().then(r.bind(null,"tJVT"));case 27:return i.t7=i.sent,f=(0,i.t6)(i.t7),i.t8=o,i.next=32,Promise.resolve().then(r.t.bind(null,"kM82",7));case 32:return i.t9=i.sent,g=(0,i.t8)(i.t9),i.next=36,Promise.all([r.e(0),r.e(1),r.e(2),r.e(7),r.e(11)]).then(r.t.bind(null,"5OGM",7));case 36:return a=i.sent,i.next=39,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 39:return h=i.sent,n=function(){var u=(0,a.useForm)(),m=(0,f.default)(u,1),y=m[0],P=y.createFormItem,C=y.setFieldsValue,E=y.resetFields,I=g.useState(!0),N=(0,f.default)(I,2),F=N[0],A=N[1],V=g.useCallback(function(){F?(A(!1),C({grid_name:"\u67D0\u67D0",grid_age:18,grid_mobile:"13000000000",grid_bankNumber:"0000000000000000"})):(A(!0),E())},[F]);return g.createElement(g.Fragment,null,g.createElement(p.default,{onClick:V},F?"\u8BE6\u60C5":"\u7F16\u8F91"),g.createElement(d.default,null),g.createElement(h.Config,{edit:F},g.createElement(c.default,{form:y},g.createElement(h.Grid,{data:[{label:"\u59D3\u540D",value:P({name:"grid_name",rules:"required"})(g.createElement(h.Input,null)),required:F},{label:"\u5E74\u9F84",value:P({name:"grid_age",rules:"required"})(g.createElement(h.NumberInput,{maxLength:3})),required:F},{label:"\u7535\u8BDD\u53F7\u7801",value:P({name:"grid_mobile",rules:{required:!0,mobile:!0}})(g.createElement(h.MobileInput,null)),required:F},{label:"\u94F6\u884C\u5361\u53F7",value:P({name:"grid_bankNumber",rules:"required"})(g.createElement(h.BankInput,null)),required:F}]}))))},i.abrupt("return",n);case 42:case"end":return i.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Form, Button, Divider } from 'antd';
import { useForm } from '@baic/yolk-web-form';
import {
  Config,
  Input,
  NumberInput,
  MobileInput,
  BankInput,
  Grid,
} from '@baic/yolk-web';

export default () => {
  const [form] = useForm();
  const { createFormItem, setFieldsValue, resetFields } = form;
  const [edit, setEdit] = React.useState(true);
  const onClickHandler = React.useCallback(() => {
    if (edit) {
      setEdit(false);
      setFieldsValue({
        grid_name: '\u67D0\u67D0',
        grid_age: 18,
        grid_mobile: '13000000000',
        grid_bankNumber: '0000000000000000',
      });
    } else {
      setEdit(true);
      resetFields();
    }
  }, [edit]);
  return (
    <>
      <Button onClick={onClickHandler}>{edit ? '\u8BE6\u60C5' : '\u7F16\u8F91'}</Button>
      <Divider />
      <Config edit={edit}>
        <Form form={form}>
          <Grid
            data={[
              {
                label: '\u59D3\u540D',
                value: createFormItem({
                  name: 'grid_name',
                  rules: 'required',
                })(<Input />),
                required: edit,
              },
              {
                label: '\u5E74\u9F84',
                value: createFormItem({
                  name: 'grid_age',
                  rules: 'required',
                })(<NumberInput maxLength={3} />),
                required: edit,
              },
              {
                label: '\u7535\u8BDD\u53F7\u7801',
                value: createFormItem({
                  name: 'grid_mobile',
                  rules: {
                    required: true,
                    mobile: true,
                  },
                })(<MobileInput />),
                required: edit,
              },
              {
                label: '\u94F6\u884C\u5361\u53F7',
                value: createFormItem({
                  name: 'grid_bankNumber',
                  rules: 'required',
                })(<BankInput />),
                required: edit,
              },
            ]}
          />
        </Form>
      </Config>
    </>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-form":{version:"2.0.1-alpha.40"},"@baic/yolk-web":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},title:"Config\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u901A\u8FC7Config\u7EC4\u4EF6\uFF0C\u8FDB\u884C\u591A\u4E2A\u8F93\u5165\u7F16\u8F91\u72B6\u6001\u5207\u6362\uFF0C\u4FBF\u5229\u7F16\u8F91\u4E0E\u8BE6\u60C5\u9875\u9762\u5207\u6362</p></div>',identifier:"yolk-web-demo-14"}},"yolk-web-demo-15":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.LinkButton,{onClick:function(){}},"\u64CD\u4F5C")},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { LinkButton } from '@baic/yolk-web';

export default () => <LinkButton onClick={() => {}}>\u64CD\u4F5C</LinkButton>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u6CA1\u6709onClick\u5C5E\u6027\u4F1A\u81EA\u52A8\u4E3Adisabled\u72B6\u6001</p></div>',identifier:"yolk-web-demo-15"}},"yolk-web-demo-16":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.LinkButton.Merge,null,s.createElement(c.LinkButton,{onClick:function(){}},"\u4FEE\u6539"),s.createElement(c.LinkButton,null,"\u5220\u9664"))},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { LinkButton } from '@baic/yolk-web';

export default () => (
  <LinkButton.Merge>
    <LinkButton onClick={() => {}}>\u4FEE\u6539</LinkButton>
    <LinkButton>\u5220\u9664</LinkButton>
  </LinkButton.Merge>
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"LinkButton.Merge",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u5408\u5E76\u591A\u4E2A\u6309\u94AE\u4E3A\u9690\u85CF\u6309\u94AE</p></div>',identifier:"yolk-web-demo-16"}},"yolk-web-demo-17":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.LinkButton.Group,null,s.createElement(c.LinkButton,{onClick:function(){}},"\u7F16\u8F91"),s.createElement(c.LinkButton.Merge,null,s.createElement(c.LinkButton,{onClick:function(){}},"\u4FEE\u6539"),s.createElement(c.LinkButton,null,"\u5220\u9664")))},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { LinkButton } from '@baic/yolk-web';

export default () => (
  <LinkButton.Group>
    <LinkButton onClick={() => {}}>\u7F16\u8F91</LinkButton>
    <LinkButton.Merge>
      <LinkButton onClick={() => {}}>\u4FEE\u6539</LinkButton>
      <LinkButton>\u5220\u9664</LinkButton>
    </LinkButton.Merge>
  </LinkButton.Group>
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"LinkButton.Group",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7ED9\u591A\u4E2A\u6309\u94AE\u5206\u7EC4\uFF0C\u5305\u62ECLinkButton.Merge</p></div>',identifier:"yolk-web-demo-17"}},"yolk-web-demo-18":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement("div",{style:{position:"relative"}},s.createElement(c.Loading,null))},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Loading } from '@baic/yolk-web';

export default () => (
  <div
    style={{
      position: 'relative',
    }}
  >
    <Loading />
  </div>
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-demo-18"}},"yolk-web-demo-19":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.MobileInput,null)},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { MobileInput } from '@baic/yolk-web';

export default () => <MobileInput />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u4ECENumberInput\u6269\u5C55</p></div>',identifier:"yolk-web-demo-19"}},"yolk-web-demo-20":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.NumberInput,null)},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { NumberInput } from '@baic/yolk-web';

export default () => <NumberInput />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u4ECEInput\u6269\u5C55</p></div>',identifier:"yolk-web-demo-20"}},"yolk-web-demo-21":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.QrCode,{value:"https://www.baidu.com"})},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { QrCode } from '@baic/yolk-web';

export default () => <QrCode value="https://www.baidu.com" />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u8F6C\u6362\u5B57\u7B26\u4E32\u4E3A\u4E8C\u7EF4\u7801</p></div>',identifier:"yolk-web-demo-21"}},"yolk-web-demo-22":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.RangeNumber,null)},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { RangeNumber } from '@baic/yolk-web';

export default () => <RangeNumber />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7528\u4E8E\u533A\u95F4\u6570\u5B57</p></div>',identifier:"yolk-web-demo-22"}},"yolk-web-demo-23":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h,e;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in i)if(P!=="default"&&Object.prototype.hasOwnProperty.call(i,P)){var C=y?Object.getOwnPropertyDescriptor(i,P):null;C&&(C.get||C.set)?Object.defineProperty(m,P,C):m[P]=i[P]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=r("K+nK"),n.next=5,r.e(0).then(r.bind(null,"y8nQ"));case 5:return n.t0=s,n.next=8,Promise.all([r.e(0),r.e(1),r.e(2),r.e(13)]).then(r.bind(null,"Vl3Y"));case 8:return n.t1=n.sent,c=(0,n.t0)(n.t1),n.t2=s,n.next=13,Promise.resolve().then(r.bind(null,"tJVT"));case 13:return n.t3=n.sent,d=(0,n.t2)(n.t3),n.t4=h,n.next=18,Promise.resolve().then(r.t.bind(null,"kM82",7));case 18:return n.t5=n.sent,p=(0,n.t4)(n.t5),n.next=22,Promise.all([r.e(0),r.e(1),r.e(2),r.e(7),r.e(11)]).then(r.t.bind(null,"5OGM",7));case 22:return f=n.sent,n.next=25,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 25:return g=n.sent,e=function(){var i=(0,f.useForm)(),l=(0,d.default)(i,1),u=l[0],m=u.createFormItem;return p.createElement(c.default,{form:u},m({name:"RangeNumber"})(p.createElement(g.RangeNumber,null)))},n.abrupt("return",e);case 28:case"end":return n.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Form } from 'antd';
import { useForm } from '@baic/yolk-web-form';
import { RangeNumber } from '@baic/yolk-web';

export default () => {
  const [form] = useForm();
  const { createFormItem } = form;
  return (
    <Form form={form}>
      {createFormItem({
        name: 'RangeNumber',
      })(<RangeNumber />)}
    </Form>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-form":{version:"2.0.1-alpha.40"},"@baic/yolk-web":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},title:"\u63D0\u793A\u9519\u8BEF",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u914D\u5408\u8868\u5355\u53EF\u81EA\u9A8C\u9519\u8BEF\u5E76\u63D0\u793A</p></div>',identifier:"yolk-web-demo-23"}},"yolk-web-demo-24":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Required,null,"\u5FC5\u586B")},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Required } from '@baic/yolk-web';

export default () => <Required>\u5FC5\u586B</Required>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-demo-24"}},"yolk-web-demo-25":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h,e;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in i)if(P!=="default"&&Object.prototype.hasOwnProperty.call(i,P)){var C=y?Object.getOwnPropertyDescriptor(i,P):null;C&&(C.get||C.set)?Object.defineProperty(m,P,C):m[P]=i[P]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=r("K+nK"),n.next=5,r.e(0).then(r.bind(null,"y8nQ"));case 5:return n.t0=s,n.next=8,Promise.all([r.e(0),r.e(1),r.e(2),r.e(13)]).then(r.bind(null,"Vl3Y"));case 8:return n.t1=n.sent,c=(0,n.t0)(n.t1),n.t2=s,n.next=13,Promise.resolve().then(r.bind(null,"tJVT"));case 13:return n.t3=n.sent,d=(0,n.t2)(n.t3),n.t4=h,n.next=18,Promise.resolve().then(r.t.bind(null,"kM82",7));case 18:return n.t5=n.sent,p=(0,n.t4)(n.t5),n.next=22,Promise.all([r.e(0),r.e(1),r.e(2),r.e(7),r.e(11)]).then(r.t.bind(null,"5OGM",7));case 22:return f=n.sent,n.next=25,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 25:return g=n.sent,e=function(){var i=(0,f.useForm)(),l=(0,d.default)(i,1),u=l[0],m=u.createFormItem;return p.createElement(c.default,{form:u},p.createElement(g.SearchLayout,{data:[m({name:"name",label:"\u59D3\u540D",rules:"required"})(p.createElement(g.Input,null)),m({name:"age",label:"\u5E74\u9F84",rules:"required"})(p.createElement(g.NumberInput,{maxLength:3})),m({name:"mobile",label:"\u7535\u8BDD\u53F7\u7801",rules:{required:!0,mobile:!0}})(p.createElement(g.MobileInput,null)),m({name:"bankNumber",label:"\u94F6\u884C\u5361\u53F7",rules:"required"})(p.createElement(g.BankInput,null))]}))},n.abrupt("return",e);case 28:case"end":return n.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Form } from 'antd';
import { useForm } from '@baic/yolk-web-form';
import {
  SearchLayout,
  Input,
  NumberInput,
  MobileInput,
  BankInput,
} from '@baic/yolk-web';

export default () => {
  const [form] = useForm();
  const { createFormItem } = form;
  return (
    <Form form={form}>
      <SearchLayout
        data={[
          createFormItem({
            name: 'name',
            label: '\u59D3\u540D',
            rules: 'required',
          })(<Input />),
          createFormItem({
            name: 'age',
            label: '\u5E74\u9F84',
            rules: 'required',
          })(<NumberInput maxLength={3} />),
          createFormItem({
            name: 'mobile',
            label: '\u7535\u8BDD\u53F7\u7801',
            rules: {
              required: true,
              mobile: true,
            },
          })(<MobileInput />),
          createFormItem({
            name: 'bankNumber',
            label: '\u94F6\u884C\u5361\u53F7',
            rules: 'required',
          })(<BankInput />),
        ]}
      />
    </Form>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-form":{version:"2.0.1-alpha.40"},"@baic/yolk-web":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u901A\u8FC7Config\u7EC4\u4EF6\uFF0C\u8FDB\u884C\u591A\u4E2A\u8F93\u5165\u7F16\u8F91\u72B6\u6001\u5207\u6362\uFF0C\u4FBF\u5229\u7F16\u8F91\u4E0E\u8BE6\u60C5\u9875\u9762\u5207\u6362</p></div>',identifier:"yolk-web-demo-25"}},"yolk-web-demo-26":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Table,{columns:[{dataIndex:"a",title:"a",formatter:function(o){return o}},{dataIndex:"b",title:"b",ellipsis:!0},{dataIndex:"b",title:"b",ellipsis:5},{dataIndex:"b",title:"b",ellipsis:function(){return"123"}},{dataIndex:"a",title:"a",fontWeight:"bold"},{dataIndex:"a",title:"a",unit:"\u5143"},{dataIndex:"a",title:"a",tag:!0},{dataIndex:"a",title:"a",tag:{color:"red"}},{dataIndex:"a",title:"a",tag:"red"}],dataSource:[{a:"1",b:"124125125151251251515125",c:!0,d:null}]})},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Table } from '@baic/yolk-web';

export default () => (
  <Table
    columns={[
      {
        dataIndex: 'a',
        title: 'a',
        formatter: v => v,
      },
      {
        dataIndex: 'b',
        title: 'b',
        ellipsis: true,
      },
      {
        dataIndex: 'b',
        title: 'b',
        ellipsis: 5,
      },
      {
        dataIndex: 'b',
        title: 'b',
        ellipsis: () => '123',
      },
      {
        dataIndex: 'a',
        title: 'a',
        fontWeight: 'bold',
      },
      {
        dataIndex: 'a',
        title: 'a',
        unit: '\u5143',
      },
      {
        dataIndex: 'a',
        title: 'a',
        tag: true,
      },
      {
        dataIndex: 'a',
        title: 'a',
        tag: {
          color: 'red',
        },
      },
      {
        dataIndex: 'a',
        title: 'a',
        tag: 'red',
      },
    ]}
    dataSource={[
      {
        a: '1',
        b: '124125125151251251515125',
        c: true,
        d: null,
      },
    ]}
  />
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u5176\u4ED6\u5C5E\u6027\u7EE7\u627Fantd.Table, \u6269\u5C55\u4E86columns\u7684\u5B57\u6BB5</p></div>',identifier:"yolk-web-demo-26"}},"yolk-web-demo-27":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Table,{bordered:!0,dragSort:!0,columns:[{dataIndex:"a",title:"a"},{dataIndex:"b",title:"b"}],dataSource:[{a:"1",b:"1"},{a:"2",b:"2"}]})},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Table } from '@baic/yolk-web';

export default () => (
  <Table
    bordered
    dragSort
    columns={[
      {
        dataIndex: 'a',
        title: 'a',
      },
      {
        dataIndex: 'b',
        title: 'b',
      },
    ]}
    dataSource={[
      {
        a: '1',
        b: '1',
      },
      {
        a: '2',
        b: '2',
      },
    ]}
  />
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u62D6\u52A8\u6392\u5E8F",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u4EE5\u901A\u8FC7dragSort\u5F00\u542F\u6392\u5E8F</p></div>',identifier:"yolk-web-demo-27"}},"yolk-web-demo-28":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(n,t){if(!t&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var i=f(t);if(i&&i.has(n))return i.get(n);var l={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in n)if(m!=="default"&&Object.prototype.hasOwnProperty.call(n,m)){var y=u?Object.getOwnPropertyDescriptor(n,m):null;y&&(y.get||y.set)?Object.defineProperty(l,m,y):l[m]=n[m]}return l.default=n,i&&i.set(n,l),l},f=function(n){if(typeof WeakMap!="function")return null;var t=new WeakMap,i=new WeakMap;return(f=function(u){return u?i:t})(n)},s=r("K+nK"),e.next=5,Promise.resolve().then(r.bind(null,"miYZ"));case 5:return e.t0=s,e.next=8,Promise.resolve().then(r.bind(null,"tsqr"));case 8:return e.t1=e.sent,c=(0,e.t0)(e.t1),e.t2=g,e.next=13,Promise.resolve().then(r.t.bind(null,"kM82",7));case 13:return e.t3=e.sent,d=(0,e.t2)(e.t3),e.next=17,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 17:return p=e.sent,a=function(){return d.createElement(p.Table,{bordered:!0,dragSort:{header:{onSortEnd:function(t){var i=t.oldIndex,l=t.newIndex;return c.default.success("\u6392\u5E8F\u7ED3\u675F, \u4ECE".concat(i,"\u5230").concat(l))}},body:{onSortEnd:function(t){var i=t.oldIndex,l=t.newIndex;return c.default.success("\u6392\u5E8F\u7ED3\u675F, \u4ECE".concat(i,"\u5230").concat(l))}}},columns:[{dataIndex:"a",title:"a"},{dataIndex:"b",title:"b"}],dataSource:[{a:"1",b:"1"},{a:"2",b:"2"}]})},e.abrupt("return",a);case 20:case"end":return e.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { message } from 'antd';
import { Table } from '@baic/yolk-web';

export default () => (
  <Table
    bordered
    dragSort={{
      header: {
        onSortEnd: ({ oldIndex, newIndex }) =>
          message.success(\`\u6392\u5E8F\u7ED3\u675F, \u4ECE\${oldIndex}\u5230\${newIndex}\`),
      },
      body: {
        onSortEnd: ({ oldIndex, newIndex }) =>
          message.success(\`\u6392\u5E8F\u7ED3\u675F, \u4ECE\${oldIndex}\u5230\${newIndex}\`),
      },
    }}
    columns={[
      {
        dataIndex: 'a',
        title: 'a',
      },
      {
        dataIndex: 'b',
        title: 'b',
      },
    ]}
    dataSource={[
      {
        a: '1',
        b: '1',
      },
      {
        a: '2',
        b: '2',
      },
    ]}
  />
);`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},title:"\u62D6\u52A8\u6392\u5E8F",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u4EE5\u901A\u8FC7dragSort\u8BBE\u7F6E\u6392\u5E8F\u56DE\u8C03</p></div>',identifier:"yolk-web-demo-28"}},"yolk-web-demo-29":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(n,t){if(!t&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var i=f(t);if(i&&i.has(n))return i.get(n);var l={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in n)if(m!=="default"&&Object.prototype.hasOwnProperty.call(n,m)){var y=u?Object.getOwnPropertyDescriptor(n,m):null;y&&(y.get||y.set)?Object.defineProperty(l,m,y):l[m]=n[m]}return l.default=n,i&&i.set(n,l),l},f=function(n){if(typeof WeakMap!="function")return null;var t=new WeakMap,i=new WeakMap;return(f=function(u){return u?i:t})(n)},s=r("K+nK"),e.t0=s,e.next=6,r.e(0).then(r.bind(null,"eyie"));case 6:return e.t1=e.sent,c=(0,e.t0)(e.t1),e.t2=g,e.next=11,Promise.resolve().then(r.t.bind(null,"kM82",7));case 11:return e.t3=e.sent,d=(0,e.t2)(e.t3),e.next=15,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 15:return p=e.sent,a=function(){return d.createElement(p.Table,{bordered:!0,dragSort:{header:!1,body:{selfDrag:!1}},columns:[{title:"\u6392\u5E8F",render:function(){return p.Table.createDragSortComponent(d.createElement(c.default,{style:{cursor:"grab",color:"#999"}}))}},{dataIndex:"a",title:"a"},{dataIndex:"b",title:"b"}],dataSource:[{a:"1",b:"1"},{a:"2",b:"2"}]})},e.abrupt("return",a);case 18:case"end":return e.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { message } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Table } from '@baic/yolk-web';

export default () => (
  <Table
    bordered
    dragSort={{
      header: false,
      body: {
        selfDrag: false,
      },
    }}
    columns={[
      {
        title: '\u6392\u5E8F',
        render: () =>
          Table.createDragSortComponent(
            <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />,
          ),
      },
      {
        dataIndex: 'a',
        title: 'a',
      },
      {
        dataIndex: 'b',
        title: 'b',
      },
    ]}
    dataSource={[
      {
        a: '1',
        b: '1',
      },
      {
        a: '2',
        b: '2',
      },
    ]}
  />
);`}},dependencies:{"@babel/runtime":{version:"7.18.3"},"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.0.0"},"@baic/yolk-web":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.0.0"}},title:"\u62D6\u52A8\u6392\u5E8F",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u4EE5\u901A\u8FC7Table.createDragSortComponent\u8BBE\u7F6E\u6392\u5E8F\u89E6\u53D1\u7EC4\u4EF6</p></div>',identifier:"yolk-web-demo-29"}},"yolk-web-demo-30":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.TimerButton,null,"\u9A8C\u8BC1\u7801")},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { TimerButton } from '@baic/yolk-web';

export default () => <TimerButton>\u9A8C\u8BC1\u7801</TimerButton>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7528\u4E8E\u5012\u8BA1\u65F6\u6309\u94AE</p></div>',identifier:"yolk-web-demo-30"}},"yolk-web-demo-31":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.Title,null,"\u8FD9\u91CC\u662F\u6807\u9898")},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Title } from '@baic/yolk-web';

export default () => <Title>\u8FD9\u91CC\u662F\u6807\u9898</Title>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7528\u4E8E\u6807\u9898\u5C55\u793A</p></div>',identifier:"yolk-web-demo-31"}},"yolk-web-demo-32":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(n,t){if(!t&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var i=f(t);if(i&&i.has(n))return i.get(n);var l={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in n)if(m!=="default"&&Object.prototype.hasOwnProperty.call(n,m)){var y=u?Object.getOwnPropertyDescriptor(n,m):null;y&&(y.get||y.set)?Object.defineProperty(l,m,y):l[m]=n[m]}return l.default=n,i&&i.set(n,l),l},f=function(n){if(typeof WeakMap!="function")return null;var t=new WeakMap,i=new WeakMap;return(f=function(u){return u?i:t})(n)},s=r("K+nK"),e.next=5,Promise.resolve().then(r.bind(null,"+L6B"));case 5:return e.t0=s,e.next=8,Promise.resolve().then(r.bind(null,"2/Rp"));case 8:return e.t1=e.sent,c=(0,e.t0)(e.t1),e.t2=g,e.next=13,Promise.resolve().then(r.t.bind(null,"kM82",7));case 13:return e.t3=e.sent,d=(0,e.t2)(e.t3),e.next=17,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 17:return p=e.sent,a=function(){return d.createElement(p.Title,{toolbar:d.createElement(c.default,null,"\u63D0\u4EA4")},"\u8FD9\u91CC\u662F\u6807\u9898")},e.abrupt("return",a);case 20:case"end":return e.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Button } from 'antd';
import { Title } from '@baic/yolk-web';

export default () => <Title toolbar={<Button>\u63D0\u4EA4</Button>}>\u8FD9\u91CC\u662F\u6807\u9898</Title>;`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},title:"\u5DE5\u5177\u680F",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u901A\u8FC7\u5DE5\u5177\u680F\u589E\u52A0\u6309\u94AE\u529F\u80FD</p></div>',identifier:"yolk-web-demo-32"}},"yolk-web-demo-33":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h,e,o;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(l,u){if(!u&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var m=h(u);if(m&&m.has(l))return m.get(l);var y={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in l)if(C!=="default"&&Object.prototype.hasOwnProperty.call(l,C)){var E=P?Object.getOwnPropertyDescriptor(l,C):null;E&&(E.get||E.set)?Object.defineProperty(y,C,E):y[C]=l[C]}return y.default=l,m&&m.set(l,y),y},h=function(l){if(typeof WeakMap!="function")return null;var u=new WeakMap,m=new WeakMap;return(h=function(P){return P?m:u})(l)},s=r("K+nK"),t.t0=s,t.next=6,Promise.resolve().then(r.t.bind(null,"o0o1",7));case 6:return t.t1=t.sent,c=(0,t.t0)(t.t1),t.t2=s,t.next=11,Promise.resolve().then(r.bind(null,"9og8"));case 11:return t.t3=t.sent,d=(0,t.t2)(t.t3),t.t4=s,t.next=16,Promise.resolve().then(r.bind(null,"tJVT"));case 16:return t.t5=t.sent,p=(0,t.t4)(t.t5),t.t6=e,t.next=21,Promise.resolve().then(r.t.bind(null,"kM82",7));case 21:return t.t7=t.sent,f=(0,t.t6)(t.t7),t.next=25,Promise.all([r.e(7),r.e(14)]).then(r.t.bind(null,"ag2L",7));case 25:return g=t.sent,t.next=28,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 28:return a=t.sent,o=function(){var l=(0,a.usePreload)((0,d.default)(c.default.mark(function y(){return c.default.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,g.Util.delay(1e3);case 2:case"end":return C.stop()}},y)}))),u=(0,p.default)(l,1),m=u[0];return m(f.createElement(f.Fragment,null,"\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u663E\u793A\u51FA\u6765\u4E86"))},t.abrupt("return",o);case 31:case"end":return t.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Util } from '@baic/yolk';
import { usePreload } from '@baic/yolk-web';
export default () => {
  const [wrap] = usePreload(async () => {
    await Util.delay(1000);
  });
  return wrap(<>\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u663E\u793A\u51FA\u6765\u4E86</>);
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"17.0.2"},"@baic/yolk":{version:"2.0.1-alpha.40"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},transform:!0,hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-demo-33"}},"yolk-web-demo-34":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(o);if(n&&n.has(e))return n.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,n&&n.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(d=function(i){return i?n:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(r.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 9:return c=a.sent,f=function(){return s.createElement(c.WaterMark,{content:"\u6C34\u5370"},s.createElement("div",{style:{height:200}}))},a.abrupt("return",f);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { WaterMark } from '@baic/yolk-web';

export default () => (
  <WaterMark content="\u6C34\u5370">
    <div style={{ height: 200 }} />
  </WaterMark>
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.40"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u5305\u88F9\u7EC4\u4EF6\u663E\u793A\u6C34\u5370</p></div>',identifier:"yolk-web-demo-34"}},"yolk-web-demo-35":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h,e,o;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(l,u){if(!u&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var m=h(u);if(m&&m.has(l))return m.get(l);var y={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in l)if(C!=="default"&&Object.prototype.hasOwnProperty.call(l,C)){var E=P?Object.getOwnPropertyDescriptor(l,C):null;E&&(E.get||E.set)?Object.defineProperty(y,C,E):y[C]=l[C]}return y.default=l,m&&m.set(l,y),y},h=function(l){if(typeof WeakMap!="function")return null;var u=new WeakMap,m=new WeakMap;return(h=function(P){return P?m:u})(l)},s=r("K+nK"),t.next=5,r.e(0).then(r.bind(null,"7Kak"));case 5:return t.t0=s,t.next=8,Promise.all([r.e(0),r.e(15)]).then(r.bind(null,"9yH6"));case 8:return t.t1=t.sent,c=(0,t.t0)(t.t1),t.next=12,r.e(0).then(r.bind(null,"/zsF"));case 12:return t.t2=s,t.next=15,r.e(0).then(r.bind(null,"PArb"));case 15:return t.t3=t.sent,d=(0,t.t2)(t.t3),t.next=19,Promise.resolve().then(r.bind(null,"+L6B"));case 19:return t.t4=s,t.next=22,Promise.resolve().then(r.bind(null,"2/Rp"));case 22:return t.t5=t.sent,p=(0,t.t4)(t.t5),t.t6=s,t.next=27,Promise.resolve().then(r.bind(null,"tJVT"));case 27:return t.t7=t.sent,f=(0,t.t6)(t.t7),t.t8=e,t.next=32,Promise.resolve().then(r.t.bind(null,"kM82",7));case 32:return t.t9=t.sent,g=(0,t.t8)(t.t9),t.next=36,Promise.all([r.e(0),r.e(3),r.e(1),r.e(2),r.e(4)]).then(r.t.bind(null,"X0wP",7));case 36:return a=t.sent,o=function(){var l=g.useRef(null),u=g.useState("page"),m=(0,f.default)(u,2),y=m[0],P=m[1],C=g.useCallback(function(){var I;return(I=l.current)===null||I===void 0?void 0:I.open()},[]),E=g.useCallback(function(I){return P(I.target.value)},[]);return g.createElement(g.Fragment,null,g.createElement(p.default,{onClick:C},"\u6253\u5F00"),g.createElement(d.default,{type:"vertical"}),g.createElement(c.default.Group,{onChange:E,defaultValue:y},g.createElement(c.default,{value:"modal"},"Modal\u6A21\u5F0F"),g.createElement(c.default,{value:"page"},"Page\u6A21\u5F0F"),g.createElement(c.default,{value:"inline"},"Inline\u6A21\u5F0F")),g.createElement(d.default,null),g.createElement("div",{style:{position:"relative",overflow:"hidden",width:500,height:500,border:"1px solid #ddd"}},g.createElement(a.Wrapper,{ref:l,mode:y,title:"\u6807\u9898"},"\u8FD9\u91CC\u662F\u5185\u5BB9")))},t.abrupt("return",o);case 39:case"end":return t.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Button, Divider, Radio } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio/interface';
import { Wrapper, WrapperInstance } from '@baic/yolk-web';
import { Mode } from '@baic/yolk-web/lib/wrapper';

export default () => {
  const ref = React.useRef<WrapperInstance>(null);
  const [mode, setMode] = React.useState<Mode>('page');
  const onClickHandler = React.useCallback(() => ref.current?.open(), []);
  const onChangeHandler = React.useCallback(
    (e: RadioChangeEvent) => setMode(e.target.value),
    [],
  );
  return (
    <>
      <Button onClick={onClickHandler}>\u6253\u5F00</Button>
      <Divider type="vertical" />
      <Radio.Group onChange={onChangeHandler} defaultValue={mode}>
        <Radio value="modal">Modal\u6A21\u5F0F</Radio>
        <Radio value="page">Page\u6A21\u5F0F</Radio>
        <Radio value="inline">Inline\u6A21\u5F0F</Radio>
      </Radio.Group>
      <Divider />
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: 500,
          height: 500,
          border: '1px solid #ddd',
        }}
      >
        <Wrapper ref={ref} mode={mode} title="\u6807\u9898">
          \u8FD9\u91CC\u662F\u5185\u5BB9
        </Wrapper>
      </div>
    </>
  );
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-demo-35"}},"yolk-demo":{component:Object(w.c)({loader:function(){var v=Object(M.default)(O.a.mark(function W(){var s,c,d,p,f,g,a,h;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return g=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=f(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var P=m?Object.getOwnPropertyDescriptor(t,y):null;P&&(P.get||P.set)?Object.defineProperty(u,y,P):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},f=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(f=function(m){return m?l:i})(t)},s=r("K+nK"),o.next=5,Promise.resolve().then(r.bind(null,"+L6B"));case 5:return o.t0=s,o.next=8,Promise.resolve().then(r.bind(null,"2/Rp"));case 8:return o.t1=o.sent,c=(0,o.t0)(o.t1),o.t2=g,o.next=13,Promise.resolve().then(r.t.bind(null,"kM82",7));case 13:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=17,Promise.all([r.e(7),r.e(14)]).then(r.t.bind(null,"ag2L",7));case 17:return p=o.sent,a=(0,p.createTimerComponent)()(c.default),h=function(){return d.createElement(a,null,"\u9A8C\u8BC1\u7801")},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Button } from 'antd';

import { createTimerComponent } from '@baic/yolk';

const TimerButton = createTimerComponent()(Button);

export default () => <TimerButton>\u9A8C\u8BC1\u7801</TimerButton>;`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk":{version:"2.0.1-alpha.40"},"react-dom":{version:">=16.9.0"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],identifier:"yolk-demo"}}},X=r("Zs1V"),$=r("KcUY"),K=r.n($),G=r("Z5qc"),J=B.default=function(v){return Object(G.jsx)(K.a,Object(D.a)(Object(D.a)({},v),{},{config:T,demos:L,apis:X}))}},RGYn:function(b){b.exports=JSON.parse('{"menus":{"en-US":{"/change-log":[{"path":"/change-log","title":"\u53D1\u5E03\u7248\u672C","meta":{}}],"/getting-started":[{"path":"/getting-started","title":"\u5FEB\u901F\u4E0A\u624B","meta":{}}],"*":[{"path":"/","title":"Index","meta":{}}],"/multi-platform":[{"path":"/multi-platform","title":"\u652F\u6301\u591A\u5E73\u53F0\u7684\u4F7F\u7528\u533A\u522B","meta":{}}],"/component":[{"path":"/component","title":"\u7EC4\u4EF6","meta":{"order":0}},{"path":"/component/yolk","title":"yolk","meta":{}},{"path":"/component/yolk-browser-base","title":"yolk-browser-base","meta":{}},{"path":"/component/yolk-cli","title":"yolk-cli","meta":{}},{"path":"/component/yolk-ice","title":"yolk-ice","meta":{}},{"path":"/component/yolk-ice-h5app","title":"yolk-ice-h5app","meta":{}},{"path":"/component/yolk-ice-hd","title":"yolk-ice-hd","meta":{}},{"path":"/component/yolk-ice-mobile","title":"yolk-ice-mobile","meta":{}},{"path":"/component/yolk-ice-offiaccount","title":"yolk-ice-offiaccount","meta":{}},{"path":"/component/yolk-ice-web","title":"yolk-ice-web","meta":{}},{"path":"/component/yolk-ice-yidun","title":"yolk-ice-yidun","meta":{}},{"path":"/component/yolk-miniprogram","title":"yolk-miniprogram","meta":{}},{"path":"/component/yolk-miniprogram-form","title":"yolk-miniprogram-form","meta":{}},{"path":"/component/yolk-mobile","title":"yolk-mobile","meta":{}},{"path":"/component/yolk-mobile-form","title":"yolk-mobile-form","meta":{}},{"path":"/component/yolk-offiaccount","title":"yolk-offiaccount","meta":{}},{"path":"/component/yolk-taro","title":"yolk-taro","meta":{}},{"path":"/component/yolk-taro-base","title":"yolk-taro-base","meta":{}},{"path":"/component/yolk-umi","title":"yolk-umi","meta":{}},{"path":"/component/yolk-umi-h5app","title":"yolk-umi-h5app","meta":{}},{"path":"/component/yolk-umi-hd","title":"yolk-umi-hd","meta":{}},{"path":"/component/yolk-umi-mobile","title":"yolk-umi-mobile","meta":{}},{"path":"/component/yolk-umi-offiaccount","title":"yolk-umi-offiaccount","meta":{}},{"path":"/component/yolk-umi-web","title":"yolk-umi-web","meta":{}},{"path":"/component/yolk-umi-yidun","title":"yolk-umi-yidun","meta":{}},{"path":"/component/yolk-web","title":"yolk-web","meta":{}},{"path":"/component/yolk-web-form","title":"yolk-web-form","meta":{}},{"path":"/component/yolk-yidun","title":"yolk-yidun","meta":{}}],"/help":[{"path":"/help","title":"\u5E2E\u52A9","meta":{"order":0}},{"path":"/help/faq","title":"FAQ","meta":{"order":1}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u5FEB\u901F\u4E0A\u624B","order":1,"path":"/getting-started"},{"title":"\u7EC4\u4EF6","order":2,"path":"/component"},{"title":"\u591A\u5E73\u53F0","order":4,"path":"/multi-platform"},{"title":"\u66F4\u65B0\u65E5\u5FD7","order":5,"path":"/change-log"},{"path":"/help","title":"\u5E2E\u52A9","order":6}]},"title":"Yolk","logo":"https://avatars.githubusercontent.com/u/1750965","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}')},Zs1V:function(b){b.exports=JSON.parse("{}")}}]);
