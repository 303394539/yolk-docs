(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{OYlG:function(F,B,n){"use strict";n.r(B);var D=n("k1fw"),V=n("kM82"),T=n("RGYn"),S=n("o0o1"),P=n.n(S),b=n("9og8"),M=n("rlch"),L={"yolk-browser-base-demo":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h,e,o,r;return P.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=function(u,m){if(!m&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var y=e(m);if(y&&y.has(u))return y.get(u);var O={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in u)if(w!=="default"&&Object.prototype.hasOwnProperty.call(u,w)){var E=C?Object.getOwnPropertyDescriptor(u,w):null;E&&(E.get||E.set)?Object.defineProperty(O,w,E):O[w]=u[w]}return O.default=u,y&&y.set(u,O),O},e=function(u){if(typeof WeakMap!="function")return null;var m=new WeakMap,y=new WeakMap;return(e=function(C){return C?y:m})(u)},s=n("K+nK"),i.t0=s,i.next=6,Promise.resolve().then(n.t.bind(null,"o0o1",7));case 6:return i.t1=i.sent,f=(0,i.t0)(i.t1),i.t2=s,i.next=11,Promise.resolve().then(n.bind(null,"9og8"));case 11:return i.t3=i.sent,d=(0,i.t2)(i.t3),i.t4=s,i.next=16,Promise.resolve().then(n.bind(null,"tJVT"));case 16:return i.t5=i.sent,p=(0,i.t4)(i.t5),i.t6=o,i.next=21,Promise.resolve().then(n.t.bind(null,"kM82",7));case 21:return i.t7=i.sent,c=(0,i.t6)(i.t7),i.next=25,n.e(1).then(n.bind(null,"01EI"));case 25:return g=i.sent,i.next=28,Promise.all([n.e(1),n.e(2)]).then(n.bind(null,"CoIZ"));case 28:return a=i.sent,i.next=31,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 31:return h=i.sent,r=function(){var u=(0,a.usePreload)((0,d.default)(f.default.mark(function O(){return f.default.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,g.Util.delay(1e3);case 2:case"end":return w.stop()}},O)})),{loadingComponent:c.createElement(h.Loading,null)}),m=(0,p.default)(u,1),y=m[0];return y(c.createElement(c.Fragment,null,"\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u663E\u793A\u51FA\u6765\u4E86"))},i.abrupt("return",r);case 34:case"end":return i.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"17.0.2"},"@baic/yolk":{version:"2.0.1-alpha.44"},"@baic/yolk-browser-base":{version:"2.0.1-alpha.44"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-browser-base-demo"}},"yolk-mobile-form-demo":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h;return P.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var O=m?Object.getOwnPropertyDescriptor(t,y):null;O&&(O.get||O.set)?Object.defineProperty(u,y,O):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=n("K+nK"),o.t0=s,o.next=6,Promise.resolve().then(n.bind(null,"tJVT"));case 6:return o.t1=o.sent,f=(0,o.t0)(o.t1),o.t2=a,o.next=11,Promise.resolve().then(n.t.bind(null,"kM82",7));case 11:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=15,Promise.all([n.e(0),n.e(7),n.e(10)]).then(n.bind(null,"9ibs"));case 15:return p=o.sent,o.next=18,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 18:return c=o.sent,h=function(){var t=(0,c.useForm)(),i=(0,f.default)(t,1),l=i[0],u=l.createFormItem;return d.createElement(p.Form,{form:l},u({name:"Input",rules:"required"})(d.createElement(p.Input,null)))},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd-mobile":{version:"5.15.0"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-form-demo"}},"yolk-mobile-demo":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 9:return f=a.sent,c=function(){return s.createElement(f.BarCode,{value:"https://www.baidu.com"})},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { BarCode } from '@baic/yolk-mobile';

export default () => <BarCode value="https://www.baidu.com" />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u8F6C\u6362\u5B57\u7B26\u4E32\u4E3A\u6761\u5F62\u7801</p></div>',identifier:"yolk-mobile-demo"}},"yolk-mobile-demo-1":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 9:return f=a.sent,c=function(){return s.createElement(f.Provider,{iconfontScriptUrl:["//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js","//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js"]},s.createElement(f.Iconfont,{type:"icon-javascript"}),s.createElement(f.Iconfont,{type:"icon-java"}),s.createElement(f.Iconfont,{type:"icon-shoppingcart"}),s.createElement(f.Iconfont,{type:"icon-python"}))},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u901A\u8FC7\u7ED3\u5408Provider\u7684iconfontScriptUrl\u5B57\u6BB5\uFF0C\u521D\u59CB\u5316iconfont.cn\u7684\u8D44\u6E90\uFF0C\u7136\u540E\u76F4\u63A5\u4F7F\u7528</p></div>',identifier:"yolk-mobile-demo-1"}},"yolk-mobile-demo-2":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h;return P.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var O=m?Object.getOwnPropertyDescriptor(t,y):null;O&&(O.get||O.set)?Object.defineProperty(u,y,O):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=n("K+nK"),o.t0=s,o.next=6,Promise.resolve().then(n.bind(null,"tJVT"));case 6:return o.t1=o.sent,f=(0,o.t0)(o.t1),o.t2=a,o.next=11,Promise.resolve().then(n.t.bind(null,"kM82",7));case 11:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=15,Promise.all([n.e(0),n.e(7),n.e(10)]).then(n.bind(null,"9ibs"));case 15:return p=o.sent,o.next=18,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 18:return c=o.sent,h=function(){var t=(0,c.useForm)(),i=(0,f.default)(t,1),l=i[0],u=l.createFormItem;return d.createElement(p.Form,{form:l},u({label:"Input",name:"Input",rules:"required"})(d.createElement(c.Input,{maxLength:5})))},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd-mobile":{version:"5.15.0"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-2"}},"yolk-mobile-demo-3":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 9:return f=a.sent,c=function(){return s.createElement("div",{style:{position:"relative"}},s.createElement(f.Loading,null))},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Loading } from '@baic/yolk-mobile';

export default () => (
  <div
    style={{
      position: 'relative',
    }}
  >
    <Loading />
  </div>
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-3"}},"yolk-mobile-demo-4":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h;return P.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var O=m?Object.getOwnPropertyDescriptor(t,y):null;O&&(O.get||O.set)?Object.defineProperty(u,y,O):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=n("K+nK"),o.t0=s,o.next=6,Promise.resolve().then(n.bind(null,"tJVT"));case 6:return o.t1=o.sent,f=(0,o.t0)(o.t1),o.t2=a,o.next=11,Promise.resolve().then(n.t.bind(null,"kM82",7));case 11:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=15,Promise.all([n.e(0),n.e(7),n.e(10)]).then(n.bind(null,"9ibs"));case 15:return p=o.sent,o.next=18,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 18:return c=o.sent,h=function(){var t=(0,c.useForm)(),i=(0,f.default)(t,1),l=i[0],u=l.createFormItem;return d.createElement(p.Form,{form:l},u({label:"default",name:"NumberInput",rules:"required"})(d.createElement(c.NumberInput,null)))},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd-mobile":{version:"5.15.0"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-4"}},"yolk-mobile-demo-5":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h;return P.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var O=m?Object.getOwnPropertyDescriptor(t,y):null;O&&(O.get||O.set)?Object.defineProperty(u,y,O):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=n("K+nK"),o.t0=s,o.next=6,Promise.resolve().then(n.bind(null,"tJVT"));case 6:return o.t1=o.sent,f=(0,o.t0)(o.t1),o.t2=a,o.next=11,Promise.resolve().then(n.t.bind(null,"kM82",7));case 11:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=15,Promise.all([n.e(0),n.e(7),n.e(10)]).then(n.bind(null,"9ibs"));case 15:return p=o.sent,o.next=18,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 18:return c=o.sent,h=function(){var t=(0,c.useForm)(),i=(0,f.default)(t,1),l=i[0],u=l.createFormItem;return d.createElement(p.Form,{form:l},u({label:"decimal",name:"NumberInput",rules:"required"})(d.createElement(c.NumberInput,{decimal:3})))},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd-mobile":{version:"5.15.0"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},title:"\u63A7\u5236\u5C0F\u6570\u4F4D",hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-5"}},"yolk-mobile-demo-6":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h;return P.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var O=m?Object.getOwnPropertyDescriptor(t,y):null;O&&(O.get||O.set)?Object.defineProperty(u,y,O):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=n("K+nK"),o.t0=s,o.next=6,Promise.resolve().then(n.bind(null,"tJVT"));case 6:return o.t1=o.sent,f=(0,o.t0)(o.t1),o.t2=a,o.next=11,Promise.resolve().then(n.t.bind(null,"kM82",7));case 11:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=15,Promise.all([n.e(0),n.e(7),n.e(10)]).then(n.bind(null,"9ibs"));case 15:return p=o.sent,o.next=18,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 18:return c=o.sent,h=function(){var t=(0,c.useForm)(),i=(0,f.default)(t,1),l=i[0],u=l.createFormItem;return d.createElement(p.Form,{form:l},u({label:"zeroStart",name:"NumberInput",rules:"required"})(d.createElement(c.NumberInput,{zeroStart:!0})))},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd-mobile":{version:"5.15.0"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},title:"\u5141\u8BB80\u5F00\u5934",hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-6"}},"yolk-mobile-demo-7":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h;return P.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var O=m?Object.getOwnPropertyDescriptor(t,y):null;O&&(O.get||O.set)?Object.defineProperty(u,y,O):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=n("K+nK"),o.t0=s,o.next=6,Promise.resolve().then(n.bind(null,"tJVT"));case 6:return o.t1=o.sent,f=(0,o.t0)(o.t1),o.t2=a,o.next=11,Promise.resolve().then(n.t.bind(null,"kM82",7));case 11:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=15,Promise.all([n.e(0),n.e(7),n.e(10)]).then(n.bind(null,"9ibs"));case 15:return p=o.sent,o.next=18,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 18:return c=o.sent,h=function(){var t=(0,c.useForm)(),i=(0,f.default)(t,1),l=i[0],u=l.createFormItem;return d.createElement(p.Form,{form:l},u({label:"negative",name:"NumberInput",rules:"required"})(d.createElement(c.NumberInput,{negative:!0})))},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"antd-mobile":{version:"5.15.0"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},title:"\u5141\u8BB8\u8D1F\u6570",hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-7"}},"yolk-mobile-demo-8":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 9:return f=a.sent,c=function(){return s.createElement(f.QrCode,{value:"https://www.baidu.com"})},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { QrCode } from '@baic/yolk-mobile';

export default () => <QrCode value="https://www.baidu.com" />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u8F6C\u6362\u5B57\u7B26\u4E32\u4E3A\u4E8C\u7EF4\u7801</p></div>',identifier:"yolk-mobile-demo-8"}},"yolk-mobile-demo-9":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 9:return f=a.sent,c=function(){return s.createElement(f.Required,null,"\u5FC5\u586B")},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Required } from '@baic/yolk-mobile';

export default () => <Required>\u5FC5\u586B</Required>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-mobile-demo-9"}},"yolk-mobile-demo-10":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 9:return f=a.sent,c=function(){return s.createElement(f.TimerButton,null,"\u9A8C\u8BC1\u7801")},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { TimerButton } from '@baic/yolk-mobile';

export default () => <TimerButton>\u9A8C\u8BC1\u7801</TimerButton>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7528\u4E8E\u5012\u8BA1\u65F6\u6309\u94AE</p></div>',identifier:"yolk-mobile-demo-10"}},"yolk-mobile-demo-11":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h,e,o;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(l,u){if(!u&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var m=h(u);if(m&&m.has(l))return m.get(l);var y={},O=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in l)if(C!=="default"&&Object.prototype.hasOwnProperty.call(l,C)){var w=O?Object.getOwnPropertyDescriptor(l,C):null;w&&(w.get||w.set)?Object.defineProperty(y,C,w):y[C]=l[C]}return y.default=l,m&&m.set(l,y),y},h=function(l){if(typeof WeakMap!="function")return null;var u=new WeakMap,m=new WeakMap;return(h=function(O){return O?m:u})(l)},s=n("K+nK"),t.t0=s,t.next=6,Promise.resolve().then(n.t.bind(null,"o0o1",7));case 6:return t.t1=t.sent,f=(0,t.t0)(t.t1),t.t2=s,t.next=11,Promise.resolve().then(n.bind(null,"9og8"));case 11:return t.t3=t.sent,d=(0,t.t2)(t.t3),t.t4=s,t.next=16,Promise.resolve().then(n.bind(null,"tJVT"));case 16:return t.t5=t.sent,p=(0,t.t4)(t.t5),t.t6=e,t.next=21,Promise.resolve().then(n.t.bind(null,"kM82",7));case 21:return t.t7=t.sent,c=(0,t.t6)(t.t7),t.next=25,n.e(1).then(n.bind(null,"01EI"));case 25:return g=t.sent,t.next=28,Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(8)]).then(n.bind(null,"oj9S"));case 28:return a=t.sent,o=function(){var l=(0,a.usePreload)((0,d.default)(f.default.mark(function y(){return f.default.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,g.Util.delay(1e3);case 2:case"end":return C.stop()}},y)}))),u=(0,p.default)(l,1),m=u[0];return m(c.createElement("div",null,"\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u663E\u793A\u51FA\u6765\u4E86"))},t.abrupt("return",o);case 31:case"end":return t.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Util } from '@baic/yolk';
import { usePreload } from '@baic/yolk-mobile';
export default () => {
  const [wrap] = usePreload(async () => {
    await Util.delay(1000);
  });
  return wrap(<div>\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u663E\u793A\u51FA\u6765\u4E86</div>);
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"17.0.2"},"@baic/yolk":{version:"2.0.1-alpha.44"},"@baic/yolk-mobile":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],transform:!0,description:'<div class="markdown"><p>\u7528\u4E8E\u9875\u9762\u9884\u52A0\u8F7Dloading\u6548\u679C</p></div>',identifier:"yolk-mobile-demo-11"}},"yolk-web-form-demo":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h,e;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in i)if(O!=="default"&&Object.prototype.hasOwnProperty.call(i,O)){var C=y?Object.getOwnPropertyDescriptor(i,O):null;C&&(C.get||C.set)?Object.defineProperty(m,O,C):m[O]=i[O]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=n("K+nK"),r.next=5,n.e(0).then(n.bind(null,"y8nQ"));case 5:return r.t0=s,r.next=8,Promise.resolve().then(n.bind(null,"Vl3Y"));case 8:return r.t1=r.sent,f=(0,r.t0)(r.t1),r.next=12,n.e(0).then(n.bind(null,"5NDa"));case 12:return r.t2=s,r.next=15,Promise.resolve().then(n.bind(null,"5rEg"));case 15:return r.t3=r.sent,d=(0,r.t2)(r.t3),r.t4=s,r.next=20,Promise.resolve().then(n.bind(null,"tJVT"));case 20:return r.t5=r.sent,p=(0,r.t4)(r.t5),r.t6=h,r.next=25,Promise.resolve().then(n.t.bind(null,"kM82",7));case 25:return r.t7=r.sent,c=(0,r.t6)(r.t7),r.next=29,Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"Lzc/"));case 29:return g=r.sent,e=function(){var i=(0,g.useForm)(),l=(0,p.default)(i,1),u=l[0],m=u.createFormItem;return c.createElement(f.default,{form:u},m({name:"Input",rules:"required"})(c.createElement(d.default,null)))},r.abrupt("return",e);case 32:case"end":return r.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-form":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-form-demo"}},"yolk-web-demo":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h,e;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in i)if(O!=="default"&&Object.prototype.hasOwnProperty.call(i,O)){var C=y?Object.getOwnPropertyDescriptor(i,O):null;C&&(C.get||C.set)?Object.defineProperty(m,O,C):m[O]=i[O]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=n("K+nK"),r.next=5,n.e(0).then(n.bind(null,"y8nQ"));case 5:return r.t0=s,r.next=8,Promise.resolve().then(n.bind(null,"Vl3Y"));case 8:return r.t1=r.sent,f=(0,r.t0)(r.t1),r.t2=s,r.next=13,Promise.resolve().then(n.bind(null,"tJVT"));case 13:return r.t3=r.sent,d=(0,r.t2)(r.t3),r.t4=h,r.next=18,Promise.resolve().then(n.t.bind(null,"kM82",7));case 18:return r.t5=r.sent,p=(0,r.t4)(r.t5),r.next=22,Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"Lzc/"));case 22:return c=r.sent,r.next=25,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 25:return g=r.sent,e=function(){var i=(0,c.useForm)(),l=(0,d.default)(i,1),u=l[0],m=u.createFormItem;return p.createElement(f.default,{form:u},m({name:"BankInput"})(p.createElement(g.BankInput,null)))},r.abrupt("return",e);case 28:case"end":return r.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-form":{version:"2.0.1-alpha.44"},"@baic/yolk-web":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u4ECENumberInput\u6269\u5C55</p></div>',identifier:"yolk-web-demo"}},"yolk-web-demo-1":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.BarCode,{value:"https://www.baidu.com"})},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { BarCode } from '@baic/yolk-web';

export default () => <BarCode value="https://www.baidu.com" />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u8F6C\u6362\u5B57\u7B26\u4E32\u4E3A\u6761\u5F62\u7801</p></div>',identifier:"yolk-web-demo-1"}},"yolk-web-demo-2":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.Collapse,{title:"\u6298\u53E0\u7EC4\u4EF6"},"\u8FD9\u91CC\u662F\u9690\u85CF\u5185\u5BB9")},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Collapse } from '@baic/yolk-web';

export default () => <Collapse title="\u6298\u53E0\u7EC4\u4EF6">\u8FD9\u91CC\u662F\u9690\u85CF\u5185\u5BB9</Collapse>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-demo-2"}},"yolk-web-demo-3":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.DatePicker,{autoFixDate:!0})},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { DatePicker } from '@baic/yolk-web';

export default () => <DatePicker autoFixDate />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u589E\u5F3A\u8F93\u5165\u80FD\u529B",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u589E\u5F3A\u8F93\u5165\u80FD\u529B\uFF0C\u53EF\u4FEE\u590D\u65E5\u671F</p></div>',identifier:"yolk-web-demo-3"}},"yolk-web-demo-4":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.Flex,null,s.createElement(f.Flex,null,"1"),s.createElement(f.Flex,null,"2"),s.createElement(f.Flex,null,"3"))},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Flex } from '@baic/yolk-web';

export default () => (
  <Flex>
    <Flex>1</Flex>
    <Flex>2</Flex>
    <Flex>3</Flex>
  </Flex>
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-demo-4"}},"yolk-web-demo-5":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.Grid,{data:[{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"}]})},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7528\u4E8E\u4E00\u822C\u7684\u7F51\u683C\u6570\u636E\u5C55\u793A</p></div>',identifier:"yolk-web-demo-5"}},"yolk-web-demo-6":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.Grid,{span:2,data:[{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"}]})},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"span",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u4EE5\u63A7\u5236\u4E00\u884C\u4EFD\u6570</p></div>',identifier:"yolk-web-demo-6"}},"yolk-web-demo-7":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h,e;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in i)if(O!=="default"&&Object.prototype.hasOwnProperty.call(i,O)){var C=y?Object.getOwnPropertyDescriptor(i,O):null;C&&(C.get||C.set)?Object.defineProperty(m,O,C):m[O]=i[O]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=n("K+nK"),r.next=5,n.e(0).then(n.bind(null,"/zsF"));case 5:return r.t0=s,r.next=8,Promise.resolve().then(n.bind(null,"PArb"));case 8:return r.t1=r.sent,f=(0,r.t0)(r.t1),r.next=12,Promise.resolve().then(n.bind(null,"+L6B"));case 12:return r.t2=s,r.next=15,Promise.resolve().then(n.bind(null,"2/Rp"));case 15:return r.t3=r.sent,d=(0,r.t2)(r.t3),r.t4=s,r.next=20,Promise.resolve().then(n.bind(null,"tJVT"));case 20:return r.t5=r.sent,p=(0,r.t4)(r.t5),r.t6=h,r.next=25,Promise.resolve().then(n.t.bind(null,"kM82",7));case 25:return r.t7=r.sent,c=(0,r.t6)(r.t7),r.next=29,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 29:return g=r.sent,e=function(){var i=c.useState(!0),l=(0,p.default)(i,2),u=l[0],m=l[1],y=c.useCallback(function(){return m(!u)},[u]);return c.createElement(c.Fragment,null,c.createElement(d.default,{onClick:y},u?"\u5173\u95ED":"\u5F00\u542F","\u8FB9\u6846"),c.createElement(f.default,null),c.createElement(g.Grid,{bordered:u,data:[{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"}]}))},r.abrupt("return",e);case 32:case"end":return r.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},title:"bordered",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u4EE5\u63A7\u5236\u8FB9\u6846\u662F\u5426\u5C55\u793A</p></div>',identifier:"yolk-web-demo-7"}},"yolk-web-demo-8":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h,e;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in i)if(O!=="default"&&Object.prototype.hasOwnProperty.call(i,O)){var C=y?Object.getOwnPropertyDescriptor(i,O):null;C&&(C.get||C.set)?Object.defineProperty(m,O,C):m[O]=i[O]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=n("K+nK"),r.next=5,n.e(0).then(n.bind(null,"/zsF"));case 5:return r.t0=s,r.next=8,Promise.resolve().then(n.bind(null,"PArb"));case 8:return r.t1=r.sent,f=(0,r.t0)(r.t1),r.next=12,n.e(0).then(n.bind(null,"7Kak"));case 12:return r.t2=s,r.next=15,Promise.resolve().then(n.bind(null,"9yH6"));case 15:return r.t3=r.sent,d=(0,r.t2)(r.t3),r.t4=s,r.next=20,Promise.resolve().then(n.bind(null,"tJVT"));case 20:return r.t5=r.sent,p=(0,r.t4)(r.t5),r.t6=h,r.next=25,Promise.resolve().then(n.t.bind(null,"kM82",7));case 25:return r.t7=r.sent,c=(0,r.t6)(r.t7),r.next=29,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 29:return g=r.sent,e=function(){var i=c.useState("middle"),l=(0,p.default)(i,2),u=l[0],m=l[1],y=c.useCallback(function(O){return m(O.target.value)},[]);return c.createElement(c.Fragment,null,c.createElement(d.default.Group,{value:u,onChange:y},c.createElement(d.default.Button,{value:"small"},"small"),c.createElement(d.default.Button,{value:"middle"},"middle"),c.createElement(d.default.Button,{value:"large"},"large")),c.createElement(f.default,null),c.createElement(g.Grid,{size:u,data:[{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"}]}))},r.abrupt("return",e);case 32:case"end":return r.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},title:"size",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u4EE5\u63A7\u5236\u5C3A\u5BF8</p></div>',identifier:"yolk-web-demo-8"}},"yolk-web-demo-9":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h,e;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in i)if(O!=="default"&&Object.prototype.hasOwnProperty.call(i,O)){var C=y?Object.getOwnPropertyDescriptor(i,O):null;C&&(C.get||C.set)?Object.defineProperty(m,O,C):m[O]=i[O]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=n("K+nK"),r.next=5,n.e(0).then(n.bind(null,"y8nQ"));case 5:return r.t0=s,r.next=8,Promise.resolve().then(n.bind(null,"Vl3Y"));case 8:return r.t1=r.sent,f=(0,r.t0)(r.t1),r.t2=s,r.next=13,Promise.resolve().then(n.bind(null,"tJVT"));case 13:return r.t3=r.sent,d=(0,r.t2)(r.t3),r.t4=h,r.next=18,Promise.resolve().then(n.t.bind(null,"kM82",7));case 18:return r.t5=r.sent,p=(0,r.t4)(r.t5),r.next=22,Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"Lzc/"));case 22:return c=r.sent,r.next=25,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 25:return g=r.sent,e=function(){var i=(0,c.useForm)(),l=(0,d.default)(i,1),u=l[0],m=u.createFormItem;return p.createElement(f.default,{form:u},p.createElement(g.Grid,{data:[{label:"\u6807\u9898",value:m({name:"content",rules:"required"})(p.createElement(g.Input,null)),required:!0},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"}]}))},r.abrupt("return",e);case 28:case"end":return r.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-form":{version:"2.0.1-alpha.44"},"@baic/yolk-web":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},title:"required",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u8F85\u52A9\u8868\u5355\u589E\u52A0label\u7684\u5FC5\u586B\u6807\u5FD7</p></div>',identifier:"yolk-web-demo-9"}},"yolk-web-demo-10":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.Grid,{bordered:!1,itemDirection:"vertical",data:[{label:"\u6807\u9898",value:"\u5185\u5BB9",required:!0},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"},{label:"\u6807\u9898",value:"\u5185\u5BB9"}]})},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"itemDirection",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u63A7\u5236\u5355\u9879\u5E03\u5C40\u65B9\u5411</p></div>',identifier:"yolk-web-demo-10"}},"yolk-web-demo-11":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.Provider,{iconfontScriptUrl:["//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js","//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js"]},s.createElement(f.Iconfont,{type:"icon-javascript"}),s.createElement(f.Iconfont,{type:"icon-java"}),s.createElement(f.Iconfont,{type:"icon-shoppingcart"}),s.createElement(f.Iconfont,{type:"icon-python"}))},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u901A\u8FC7\u7ED3\u5408Provider\u7684iconfontScriptUrl\u5B57\u6BB5\uFF0C\u521D\u59CB\u5316iconfont.cn\u7684\u8D44\u6E90\uFF0C\u7136\u540E\u76F4\u63A5\u4F7F\u7528</p></div>',identifier:"yolk-web-demo-11"}},"yolk-web-demo-12":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h;return P.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=g(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var O=m?Object.getOwnPropertyDescriptor(t,y):null;O&&(O.get||O.set)?Object.defineProperty(u,y,O):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},g=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(g=function(m){return m?l:i})(t)},s=n("K+nK"),o.next=5,Promise.resolve().then(n.bind(null,"+L6B"));case 5:return o.t0=s,o.next=8,Promise.resolve().then(n.bind(null,"2/Rp"));case 8:return o.t1=o.sent,f=(0,o.t0)(o.t1),o.t2=s,o.next=13,Promise.resolve().then(n.bind(null,"tJVT"));case 13:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.t4=a,o.next=18,Promise.resolve().then(n.t.bind(null,"kM82",7));case 18:return o.t5=o.sent,p=(0,o.t4)(o.t5),o.next=22,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 22:return c=o.sent,h=function(){var t=p.useState(!1),i=(0,d.default)(t,2),l=i[0],u=i[1],m=p.useCallback(function(){return u(!0)},[]),y=p.useCallback(function(){return u(!1)},[]);return p.createElement(p.Fragment,null,p.createElement(f.default,{onClick:m},"\u9884\u89C8\u56FE\u7247"),p.createElement(c.ImagePreview,{visible:l,onClose:y,urls:["https://avatars.githubusercontent.com/u/1750965"],current:"https://avatars.githubusercontent.com/u/1750965"}))},o.abrupt("return",h);case 25:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7528\u4E8E\u9884\u89C8\u56FE\u7247</p></div>',identifier:"yolk-web-demo-12"}},"yolk-web-demo-13":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.Input,null)},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Input } from '@baic/yolk-web';

export default () => <Input />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u4ECEantd.Input\u6269\u5C55</p></div>',identifier:"yolk-web-demo-13"}},"yolk-web-demo-14":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h,e,o,r;return P.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=function(u,m){if(!m&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var y=e(m);if(y&&y.has(u))return y.get(u);var O={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in u)if(w!=="default"&&Object.prototype.hasOwnProperty.call(u,w)){var E=C?Object.getOwnPropertyDescriptor(u,w):null;E&&(E.get||E.set)?Object.defineProperty(O,w,E):O[w]=u[w]}return O.default=u,y&&y.set(u,O),O},e=function(u){if(typeof WeakMap!="function")return null;var m=new WeakMap,y=new WeakMap;return(e=function(C){return C?y:m})(u)},s=n("K+nK"),i.next=5,n.e(0).then(n.bind(null,"y8nQ"));case 5:return i.t0=s,i.next=8,Promise.resolve().then(n.bind(null,"Vl3Y"));case 8:return i.t1=i.sent,f=(0,i.t0)(i.t1),i.next=12,n.e(0).then(n.bind(null,"/zsF"));case 12:return i.t2=s,i.next=15,Promise.resolve().then(n.bind(null,"PArb"));case 15:return i.t3=i.sent,d=(0,i.t2)(i.t3),i.next=19,Promise.resolve().then(n.bind(null,"+L6B"));case 19:return i.t4=s,i.next=22,Promise.resolve().then(n.bind(null,"2/Rp"));case 22:return i.t5=i.sent,p=(0,i.t4)(i.t5),i.t6=s,i.next=27,Promise.resolve().then(n.bind(null,"tJVT"));case 27:return i.t7=i.sent,c=(0,i.t6)(i.t7),i.t8=o,i.next=32,Promise.resolve().then(n.t.bind(null,"kM82",7));case 32:return i.t9=i.sent,g=(0,i.t8)(i.t9),i.next=36,Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"Lzc/"));case 36:return a=i.sent,i.next=39,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 39:return h=i.sent,r=function(){var u=(0,a.useForm)(),m=(0,c.default)(u,1),y=m[0],O=y.createFormItem,C=y.setFieldsValue,w=y.resetFields,E=g.useState(!0),N=(0,c.default)(E,2),I=N[0],A=N[1],G=g.useCallback(function(){I?(A(!1),C({grid_name:"\u67D0\u67D0",grid_age:18,grid_mobile:"13000000000",grid_bankNumber:"0000000000000000"})):(A(!0),w())},[I]);return g.createElement(g.Fragment,null,g.createElement(p.default,{onClick:G},I?"\u8BE6\u60C5":"\u7F16\u8F91"),g.createElement(d.default,null),g.createElement(h.Config,{edit:I},g.createElement(f.default,{form:y},g.createElement(h.Grid,{data:[{label:"\u59D3\u540D",value:O({name:"grid_name",rules:"required"})(g.createElement(h.Input,null)),required:I},{label:"\u5E74\u9F84",value:O({name:"grid_age",rules:"required"})(g.createElement(h.NumberInput,{maxLength:3})),required:I},{label:"\u7535\u8BDD\u53F7\u7801",value:O({name:"grid_mobile",rules:{required:!0,mobile:!0}})(g.createElement(h.MobileInput,null)),required:I},{label:"\u94F6\u884C\u5361\u53F7",value:O({name:"grid_bankNumber",rules:"required"})(g.createElement(h.BankInput,null)),required:I}]}))))},i.abrupt("return",r);case 42:case"end":return i.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-form":{version:"2.0.1-alpha.44"},"@baic/yolk-web":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},title:"Config\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u901A\u8FC7Config\u7EC4\u4EF6\uFF0C\u8FDB\u884C\u591A\u4E2A\u8F93\u5165\u7F16\u8F91\u72B6\u6001\u5207\u6362\uFF0C\u4FBF\u5229\u7F16\u8F91\u4E0E\u8BE6\u60C5\u9875\u9762\u5207\u6362</p></div>',identifier:"yolk-web-demo-14"}},"yolk-web-demo-15":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.LinkButton,{onClick:function(){}},"\u64CD\u4F5C")},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { LinkButton } from '@baic/yolk-web';

export default () => <LinkButton onClick={() => {}}>\u64CD\u4F5C</LinkButton>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u6CA1\u6709onClick\u5C5E\u6027\u4F1A\u81EA\u52A8\u4E3Adisabled\u72B6\u6001</p></div>',identifier:"yolk-web-demo-15"}},"yolk-web-demo-16":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.LinkButton.Merge,null,s.createElement(f.LinkButton,{onClick:function(){}},"\u4FEE\u6539"),s.createElement(f.LinkButton,null,"\u5220\u9664"))},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { LinkButton } from '@baic/yolk-web';

export default () => (
  <LinkButton.Merge>
    <LinkButton onClick={() => {}}>\u4FEE\u6539</LinkButton>
    <LinkButton>\u5220\u9664</LinkButton>
  </LinkButton.Merge>
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"LinkButton.Merge",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u5408\u5E76\u591A\u4E2A\u6309\u94AE\u4E3A\u9690\u85CF\u6309\u94AE</p></div>',identifier:"yolk-web-demo-16"}},"yolk-web-demo-17":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.LinkButton.Group,null,s.createElement(f.LinkButton,{onClick:function(){}},"\u7F16\u8F91"),s.createElement(f.LinkButton.Merge,null,s.createElement(f.LinkButton,{onClick:function(){}},"\u4FEE\u6539"),s.createElement(f.LinkButton,null,"\u5220\u9664")))},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { LinkButton } from '@baic/yolk-web';

export default () => (
  <LinkButton.Group>
    <LinkButton onClick={() => {}}>\u7F16\u8F91</LinkButton>
    <LinkButton.Merge>
      <LinkButton onClick={() => {}}>\u4FEE\u6539</LinkButton>
      <LinkButton>\u5220\u9664</LinkButton>
    </LinkButton.Merge>
  </LinkButton.Group>
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"LinkButton.Group",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7ED9\u591A\u4E2A\u6309\u94AE\u5206\u7EC4\uFF0C\u5305\u62ECLinkButton.Merge</p></div>',identifier:"yolk-web-demo-17"}},"yolk-web-demo-18":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement("div",{style:{position:"relative"}},s.createElement(f.Loading,null))},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Loading } from '@baic/yolk-web';

export default () => (
  <div
    style={{
      position: 'relative',
    }}
  >
    <Loading />
  </div>
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-demo-18"}},"yolk-web-demo-19":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.MobileInput,null)},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { MobileInput } from '@baic/yolk-web';

export default () => <MobileInput />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u4ECENumberInput\u6269\u5C55</p></div>',identifier:"yolk-web-demo-19"}},"yolk-web-demo-20":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.NumberInput,null)},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { NumberInput } from '@baic/yolk-web';

export default () => <NumberInput />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u4ECEInput\u6269\u5C55</p></div>',identifier:"yolk-web-demo-20"}},"yolk-web-demo-21":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.QrCode,{value:"https://www.baidu.com"})},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { QrCode } from '@baic/yolk-web';

export default () => <QrCode value="https://www.baidu.com" />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u8F6C\u6362\u5B57\u7B26\u4E32\u4E3A\u4E8C\u7EF4\u7801</p></div>',identifier:"yolk-web-demo-21"}},"yolk-web-demo-22":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.RangeNumber,null)},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { RangeNumber } from '@baic/yolk-web';

export default () => <RangeNumber />;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7528\u4E8E\u533A\u95F4\u6570\u5B57</p></div>',identifier:"yolk-web-demo-22"}},"yolk-web-demo-23":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h,e;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in i)if(O!=="default"&&Object.prototype.hasOwnProperty.call(i,O)){var C=y?Object.getOwnPropertyDescriptor(i,O):null;C&&(C.get||C.set)?Object.defineProperty(m,O,C):m[O]=i[O]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=n("K+nK"),r.next=5,n.e(0).then(n.bind(null,"y8nQ"));case 5:return r.t0=s,r.next=8,Promise.resolve().then(n.bind(null,"Vl3Y"));case 8:return r.t1=r.sent,f=(0,r.t0)(r.t1),r.t2=s,r.next=13,Promise.resolve().then(n.bind(null,"tJVT"));case 13:return r.t3=r.sent,d=(0,r.t2)(r.t3),r.t4=h,r.next=18,Promise.resolve().then(n.t.bind(null,"kM82",7));case 18:return r.t5=r.sent,p=(0,r.t4)(r.t5),r.next=22,Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"Lzc/"));case 22:return c=r.sent,r.next=25,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 25:return g=r.sent,e=function(){var i=(0,c.useForm)(),l=(0,d.default)(i,1),u=l[0],m=u.createFormItem;return p.createElement(f.default,{form:u},m({name:"RangeNumber"})(p.createElement(g.RangeNumber,null)))},r.abrupt("return",e);case 28:case"end":return r.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-form":{version:"2.0.1-alpha.44"},"@baic/yolk-web":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},title:"\u63D0\u793A\u9519\u8BEF",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u914D\u5408\u8868\u5355\u53EF\u81EA\u9A8C\u9519\u8BEF\u5E76\u63D0\u793A</p></div>',identifier:"yolk-web-demo-23"}},"yolk-web-demo-24":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.Required,null,"\u5FC5\u586B")},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Required } from '@baic/yolk-web';

export default () => <Required>\u5FC5\u586B</Required>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-demo-24"}},"yolk-web-demo-25":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h,e;return P.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return h=function(i,l){if(!l&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var u=a(l);if(u&&u.has(i))return u.get(i);var m={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in i)if(O!=="default"&&Object.prototype.hasOwnProperty.call(i,O)){var C=y?Object.getOwnPropertyDescriptor(i,O):null;C&&(C.get||C.set)?Object.defineProperty(m,O,C):m[O]=i[O]}return m.default=i,u&&u.set(i,m),m},a=function(i){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(a=function(y){return y?u:l})(i)},s=n("K+nK"),r.next=5,n.e(0).then(n.bind(null,"y8nQ"));case 5:return r.t0=s,r.next=8,Promise.resolve().then(n.bind(null,"Vl3Y"));case 8:return r.t1=r.sent,f=(0,r.t0)(r.t1),r.t2=s,r.next=13,Promise.resolve().then(n.bind(null,"tJVT"));case 13:return r.t3=r.sent,d=(0,r.t2)(r.t3),r.t4=h,r.next=18,Promise.resolve().then(n.t.bind(null,"kM82",7));case 18:return r.t5=r.sent,p=(0,r.t4)(r.t5),r.next=22,Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"Lzc/"));case 22:return c=r.sent,r.next=25,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 25:return g=r.sent,e=function(){var i=(0,c.useForm)(),l=(0,d.default)(i,1),u=l[0],m=u.createFormItem;return p.createElement(f.default,{form:u},p.createElement(g.SearchLayout,{data:[m({name:"name",label:"\u59D3\u540D",rules:"required"})(p.createElement(g.Input,null)),m({name:"age",label:"\u5E74\u9F84",rules:"required"})(p.createElement(g.NumberInput,{maxLength:3})),m({name:"mobile",label:"\u7535\u8BDD\u53F7\u7801",rules:{required:!0,mobile:!0}})(p.createElement(g.MobileInput,null)),m({name:"bankNumber",label:"\u94F6\u884C\u5361\u53F7",rules:"required"})(p.createElement(g.BankInput,null))]}))},r.abrupt("return",e);case 28:case"end":return r.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-form":{version:"2.0.1-alpha.44"},"@baic/yolk-web":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u901A\u8FC7Config\u7EC4\u4EF6\uFF0C\u8FDB\u884C\u591A\u4E2A\u8F93\u5165\u7F16\u8F91\u72B6\u6001\u5207\u6362\uFF0C\u4FBF\u5229\u7F16\u8F91\u4E0E\u8BE6\u60C5\u9875\u9762\u5207\u6362</p></div>',identifier:"yolk-web-demo-25"}},"yolk-web-demo-26":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.Table,{columns:[{dataIndex:"a",title:"a",formatter:function(o){return o}},{dataIndex:"b",title:"b",ellipsis:!0},{dataIndex:"b",title:"b",ellipsis:5},{dataIndex:"b",title:"b",ellipsis:function(){return"123"}},{dataIndex:"a",title:"a",fontWeight:"bold"},{dataIndex:"a",title:"a",unit:"\u5143"},{dataIndex:"a",title:"a",tag:!0},{dataIndex:"a",title:"a",tag:{color:"red"}},{dataIndex:"a",title:"a",tag:"red"}],dataSource:[{a:"1",b:"124125125151251251515125",c:!0,d:null}]})},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u5176\u4ED6\u5C5E\u6027\u7EE7\u627Fantd.Table, \u6269\u5C55\u4E86columns\u7684\u5B57\u6BB5</p></div>',identifier:"yolk-web-demo-26"}},"yolk-web-demo-27":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.Table,{bordered:!0,dragSort:!0,columns:[{dataIndex:"a",title:"a"},{dataIndex:"b",title:"b"}],dataSource:[{a:"1",b:"1"},{a:"2",b:"2"}]})},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u62D6\u52A8\u6392\u5E8F",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u4EE5\u901A\u8FC7dragSort\u5F00\u542F\u6392\u5E8F</p></div>',identifier:"yolk-web-demo-27"}},"yolk-web-demo-28":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(r,t){if(!t&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var i=c(t);if(i&&i.has(r))return i.get(r);var l={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in r)if(m!=="default"&&Object.prototype.hasOwnProperty.call(r,m)){var y=u?Object.getOwnPropertyDescriptor(r,m):null;y&&(y.get||y.set)?Object.defineProperty(l,m,y):l[m]=r[m]}return l.default=r,i&&i.set(r,l),l},c=function(r){if(typeof WeakMap!="function")return null;var t=new WeakMap,i=new WeakMap;return(c=function(u){return u?i:t})(r)},s=n("K+nK"),e.next=5,Promise.resolve().then(n.bind(null,"miYZ"));case 5:return e.t0=s,e.next=8,Promise.resolve().then(n.bind(null,"tsqr"));case 8:return e.t1=e.sent,f=(0,e.t0)(e.t1),e.t2=g,e.next=13,Promise.resolve().then(n.t.bind(null,"kM82",7));case 13:return e.t3=e.sent,d=(0,e.t2)(e.t3),e.next=17,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 17:return p=e.sent,a=function(){return d.createElement(p.Table,{bordered:!0,dragSort:{header:{onSortEnd:function(t){var i=t.oldIndex,l=t.newIndex;return f.default.success("\u6392\u5E8F\u7ED3\u675F, \u4ECE".concat(i,"\u5230").concat(l))}},body:{onSortEnd:function(t){var i=t.oldIndex,l=t.newIndex;return f.default.success("\u6392\u5E8F\u7ED3\u675F, \u4ECE".concat(i,"\u5230").concat(l))}}},columns:[{dataIndex:"a",title:"a"},{dataIndex:"b",title:"b"}],dataSource:[{a:"1",b:"1"},{a:"2",b:"2"}]})},e.abrupt("return",a);case 20:case"end":return e.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
);`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},title:"\u62D6\u52A8\u6392\u5E8F",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u4EE5\u901A\u8FC7dragSort\u8BBE\u7F6E\u6392\u5E8F\u56DE\u8C03</p></div>',identifier:"yolk-web-demo-28"}},"yolk-web-demo-29":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(r,t){if(!t&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var i=c(t);if(i&&i.has(r))return i.get(r);var l={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in r)if(m!=="default"&&Object.prototype.hasOwnProperty.call(r,m)){var y=u?Object.getOwnPropertyDescriptor(r,m):null;y&&(y.get||y.set)?Object.defineProperty(l,m,y):l[m]=r[m]}return l.default=r,i&&i.set(r,l),l},c=function(r){if(typeof WeakMap!="function")return null;var t=new WeakMap,i=new WeakMap;return(c=function(u){return u?i:t})(r)},s=n("K+nK"),e.t0=s,e.next=6,n.e(0).then(n.bind(null,"eyie"));case 6:return e.t1=e.sent,f=(0,e.t0)(e.t1),e.t2=g,e.next=11,Promise.resolve().then(n.t.bind(null,"kM82",7));case 11:return e.t3=e.sent,d=(0,e.t2)(e.t3),e.next=15,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 15:return p=e.sent,a=function(){return d.createElement(p.Table,{bordered:!0,dragSort:{header:!1,body:{selfDrag:!1}},columns:[{title:"\u6392\u5E8F",render:function(){return p.Table.createDragSortComponent(d.createElement(f.default,{style:{cursor:"grab",color:"#999"}}))}},{dataIndex:"a",title:"a"},{dataIndex:"b",title:"b"}],dataSource:[{a:"1",b:"1"},{a:"2",b:"2"}]})},e.abrupt("return",a);case 18:case"end":return e.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
);`}},dependencies:{"@babel/runtime":{version:"7.18.3"},"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.0.0"},"@baic/yolk-web":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.0.0"}},title:"\u62D6\u52A8\u6392\u5E8F",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u4EE5\u901A\u8FC7Table.createDragSortComponent\u8BBE\u7F6E\u6392\u5E8F\u89E6\u53D1\u7EC4\u4EF6</p></div>',identifier:"yolk-web-demo-29"}},"yolk-web-demo-30":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.TimerButton,null,"\u9A8C\u8BC1\u7801")},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { TimerButton } from '@baic/yolk-web';

export default () => <TimerButton>\u9A8C\u8BC1\u7801</TimerButton>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7528\u4E8E\u5012\u8BA1\u65F6\u6309\u94AE</p></div>',identifier:"yolk-web-demo-30"}},"yolk-web-demo-31":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.Title,null,"\u8FD9\u91CC\u662F\u6807\u9898")},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Title } from '@baic/yolk-web';

export default () => <Title>\u8FD9\u91CC\u662F\u6807\u9898</Title>;`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u7528\u4E8E\u6807\u9898\u5C55\u793A</p></div>',identifier:"yolk-web-demo-31"}},"yolk-web-demo-32":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(r,t){if(!t&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var i=c(t);if(i&&i.has(r))return i.get(r);var l={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in r)if(m!=="default"&&Object.prototype.hasOwnProperty.call(r,m)){var y=u?Object.getOwnPropertyDescriptor(r,m):null;y&&(y.get||y.set)?Object.defineProperty(l,m,y):l[m]=r[m]}return l.default=r,i&&i.set(r,l),l},c=function(r){if(typeof WeakMap!="function")return null;var t=new WeakMap,i=new WeakMap;return(c=function(u){return u?i:t})(r)},s=n("K+nK"),e.next=5,Promise.resolve().then(n.bind(null,"+L6B"));case 5:return e.t0=s,e.next=8,Promise.resolve().then(n.bind(null,"2/Rp"));case 8:return e.t1=e.sent,f=(0,e.t0)(e.t1),e.t2=g,e.next=13,Promise.resolve().then(n.t.bind(null,"kM82",7));case 13:return e.t3=e.sent,d=(0,e.t2)(e.t3),e.next=17,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 17:return p=e.sent,a=function(){return d.createElement(p.Title,{toolbar:d.createElement(f.default,null,"\u63D0\u4EA4")},"\u8FD9\u91CC\u662F\u6807\u9898")},e.abrupt("return",a);case 20:case"end":return e.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Button } from 'antd';
import { Title } from '@baic/yolk-web';

export default () => <Title toolbar={<Button>\u63D0\u4EA4</Button>}>\u8FD9\u91CC\u662F\u6807\u9898</Title>;`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},title:"\u5DE5\u5177\u680F",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u53EF\u901A\u8FC7\u5DE5\u5177\u680F\u589E\u52A0\u6309\u94AE\u529F\u80FD</p></div>',identifier:"yolk-web-demo-32"}},"yolk-web-demo-33":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h,e,o;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(l,u){if(!u&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var m=h(u);if(m&&m.has(l))return m.get(l);var y={},O=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in l)if(C!=="default"&&Object.prototype.hasOwnProperty.call(l,C)){var w=O?Object.getOwnPropertyDescriptor(l,C):null;w&&(w.get||w.set)?Object.defineProperty(y,C,w):y[C]=l[C]}return y.default=l,m&&m.set(l,y),y},h=function(l){if(typeof WeakMap!="function")return null;var u=new WeakMap,m=new WeakMap;return(h=function(O){return O?m:u})(l)},s=n("K+nK"),t.t0=s,t.next=6,Promise.resolve().then(n.t.bind(null,"o0o1",7));case 6:return t.t1=t.sent,f=(0,t.t0)(t.t1),t.t2=s,t.next=11,Promise.resolve().then(n.bind(null,"9og8"));case 11:return t.t3=t.sent,d=(0,t.t2)(t.t3),t.t4=s,t.next=16,Promise.resolve().then(n.bind(null,"tJVT"));case 16:return t.t5=t.sent,p=(0,t.t4)(t.t5),t.t6=e,t.next=21,Promise.resolve().then(n.t.bind(null,"kM82",7));case 21:return t.t7=t.sent,c=(0,t.t6)(t.t7),t.next=25,n.e(1).then(n.bind(null,"01EI"));case 25:return g=t.sent,t.next=28,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 28:return a=t.sent,o=function(){var l=(0,a.usePreload)((0,d.default)(f.default.mark(function y(){return f.default.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,g.Util.delay(1e3);case 2:case"end":return C.stop()}},y)}))),u=(0,p.default)(l,1),m=u[0];return m(c.createElement(c.Fragment,null,"\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u663E\u793A\u51FA\u6765\u4E86"))},t.abrupt("return",o);case 31:case"end":return t.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Util } from '@baic/yolk';
import { usePreload } from '@baic/yolk-web';
export default () => {
  const [wrap] = usePreload(async () => {
    await Util.delay(1000);
  });
  return wrap(<>\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u663E\u793A\u51FA\u6765\u4E86</>);
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},react:{version:"17.0.2"},"@baic/yolk":{version:"2.0.1-alpha.44"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},transform:!0,hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-demo-33"}},"yolk-web-demo-34":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c;return P.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return p=function(e,o){if(!o&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(o);if(r&&r.has(e))return r.get(e);var t={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(l!=="default"&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(t,l,u):t[l]=e[l]}return t.default=e,r&&r.set(e,t),t},d=function(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(i){return i?r:o})(e)},a.t0=p,a.next=5,Promise.resolve().then(n.t.bind(null,"kM82",7));case 5:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=9,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 9:return f=a.sent,c=function(){return s.createElement(f.WaterMark,{content:"\u6C34\u5370"},s.createElement("div",{style:{height:200}}))},a.abrupt("return",c);case 12:case"end":return a.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { WaterMark } from '@baic/yolk-web';

export default () => (
  <WaterMark content="\u6C34\u5370">
    <div style={{ height: 200 }} />
  </WaterMark>
);`}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web":{version:"2.0.1-alpha.44"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],description:'<div class="markdown"><p>\u5305\u88F9\u7EC4\u4EF6\u663E\u793A\u6C34\u5370</p></div>',identifier:"yolk-web-demo-34"}},"yolk-web-demo-35":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h,e,o;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(l,u){if(!u&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var m=h(u);if(m&&m.has(l))return m.get(l);var y={},O=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in l)if(C!=="default"&&Object.prototype.hasOwnProperty.call(l,C)){var w=O?Object.getOwnPropertyDescriptor(l,C):null;w&&(w.get||w.set)?Object.defineProperty(y,C,w):y[C]=l[C]}return y.default=l,m&&m.set(l,y),y},h=function(l){if(typeof WeakMap!="function")return null;var u=new WeakMap,m=new WeakMap;return(h=function(O){return O?m:u})(l)},s=n("K+nK"),t.next=5,n.e(0).then(n.bind(null,"7Kak"));case 5:return t.t0=s,t.next=8,Promise.resolve().then(n.bind(null,"9yH6"));case 8:return t.t1=t.sent,f=(0,t.t0)(t.t1),t.next=12,n.e(0).then(n.bind(null,"/zsF"));case 12:return t.t2=s,t.next=15,Promise.resolve().then(n.bind(null,"PArb"));case 15:return t.t3=t.sent,d=(0,t.t2)(t.t3),t.next=19,Promise.resolve().then(n.bind(null,"+L6B"));case 19:return t.t4=s,t.next=22,Promise.resolve().then(n.bind(null,"2/Rp"));case 22:return t.t5=t.sent,p=(0,t.t4)(t.t5),t.t6=s,t.next=27,Promise.resolve().then(n.bind(null,"tJVT"));case 27:return t.t7=t.sent,c=(0,t.t6)(t.t7),t.t8=e,t.next=32,Promise.resolve().then(n.t.bind(null,"kM82",7));case 32:return t.t9=t.sent,g=(0,t.t8)(t.t9),t.next=36,Promise.all([n.e(0),n.e(3),n.e(1),n.e(2),n.e(4)]).then(n.bind(null,"ncZb"));case 36:return a=t.sent,o=function(){var l=g.useRef(null),u=g.useState("page"),m=(0,c.default)(u,2),y=m[0],O=m[1],C=g.useCallback(function(){var E;return(E=l.current)===null||E===void 0?void 0:E.open()},[]),w=g.useCallback(function(E){return O(E.target.value)},[]);return g.createElement(g.Fragment,null,g.createElement(p.default,{onClick:C},"\u6253\u5F00"),g.createElement(d.default,{type:"vertical"}),g.createElement(f.default.Group,{onChange:w,defaultValue:y},g.createElement(f.default,{value:"modal"},"Modal\u6A21\u5F0F"),g.createElement(f.default,{value:"page"},"Page\u6A21\u5F0F"),g.createElement(f.default,{value:"inline"},"Inline\u6A21\u5F0F")),g.createElement(d.default,null),g.createElement("div",{style:{position:"relative",overflow:"hidden",width:500,height:500,border:"1px solid #ddd"}},g.createElement(a.Wrapper,{ref:l,mode:y,title:"\u6807\u9898"},"\u8FD9\u91CC\u662F\u5185\u5BB9")))},t.abrupt("return",o);case 39:case"end":return t.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
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
};`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},hideActions:["CSB","EXTERNAL"],identifier:"yolk-web-demo-35"}},"yolk-demo":{component:Object(M.c)({loader:function(){var v=Object(b.default)(P.a.mark(function W(){var s,f,d,p,c,g,a,h;return P.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return g=function(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=c(i);if(l&&l.has(t))return l.get(t);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var O=m?Object.getOwnPropertyDescriptor(t,y):null;O&&(O.get||O.set)?Object.defineProperty(u,y,O):u[y]=t[y]}return u.default=t,l&&l.set(t,u),u},c=function(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(c=function(m){return m?l:i})(t)},s=n("K+nK"),o.next=5,Promise.resolve().then(n.bind(null,"+L6B"));case 5:return o.t0=s,o.next=8,Promise.resolve().then(n.bind(null,"2/Rp"));case 8:return o.t1=o.sent,f=(0,o.t0)(o.t1),o.t2=g,o.next=13,Promise.resolve().then(n.t.bind(null,"kM82",7));case 13:return o.t3=o.sent,d=(0,o.t2)(o.t3),o.next=17,n.e(1).then(n.bind(null,"01EI"));case 17:return p=o.sent,a=(0,p.createTimerComponent)()(f.default),h=function(){return d.createElement(a,null,"\u9A8C\u8BC1\u7801")},o.abrupt("return",h);case 21:case"end":return o.stop()}},W)}));function R(){return v.apply(this,arguments)}return R}(),loading:function(){return null}}),previewerProps:{sources:{_:{tsx:`import * as React from 'react';
import { Button } from 'antd';

import { createTimerComponent } from '@baic/yolk';

const TimerButton = createTimerComponent()(Button);

export default () => <TimerButton>\u9A8C\u8BC1\u7801</TimerButton>;`}},dependencies:{"@babel/runtime":{version:"7.18.3"},antd:{version:"4.21.2",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk":{version:"2.0.1-alpha.44"},"react-dom":{version:">=16.9.0"}},title:"\u4E00\u822C\u7528\u6CD5",hideActions:["CSB","EXTERNAL"],identifier:"yolk-demo"}}},$=n("Zs1V"),X=n("KcUY"),K=n.n(X),Z=n("Z5qc"),z=B.default=function(v){return Object(Z.jsx)(K.a,Object(D.a)(Object(D.a)({},v),{},{config:T,demos:L,apis:$}))}},RGYn:function(F){F.exports=JSON.parse('{"menus":{"en-US":{"/change-log":[{"path":"/change-log","title":"\u53D1\u5E03\u7248\u672C","meta":{}}],"/getting-started":[{"path":"/getting-started","title":"\u5FEB\u901F\u4E0A\u624B","meta":{}}],"*":[{"path":"/","title":"Index","meta":{}}],"/multi-platform":[{"path":"/multi-platform","title":"\u652F\u6301\u591A\u5E73\u53F0\u7684\u4F7F\u7528\u533A\u522B","meta":{}}],"/component":[{"path":"/component","title":"\u7EC4\u4EF6","meta":{"order":0}},{"path":"/component/yolk","title":"yolk","meta":{}},{"path":"/component/yolk-browser-base","title":"yolk-browser-base","meta":{}},{"path":"/component/yolk-cli","title":"yolk-cli","meta":{}},{"path":"/component/yolk-ice","title":"yolk-ice","meta":{}},{"path":"/component/yolk-ice-h5app","title":"yolk-ice-h5app","meta":{}},{"path":"/component/yolk-ice-hd","title":"yolk-ice-hd","meta":{}},{"path":"/component/yolk-ice-mobile","title":"yolk-ice-mobile","meta":{}},{"path":"/component/yolk-ice-offiaccount","title":"yolk-ice-offiaccount","meta":{}},{"path":"/component/yolk-ice-web","title":"yolk-ice-web","meta":{}},{"path":"/component/yolk-ice-yidun","title":"yolk-ice-yidun","meta":{}},{"path":"/component/yolk-miniprogram","title":"yolk-miniprogram","meta":{}},{"path":"/component/yolk-miniprogram-form","title":"yolk-miniprogram-form","meta":{}},{"path":"/component/yolk-mobile","title":"yolk-mobile","meta":{}},{"path":"/component/yolk-mobile-form","title":"yolk-mobile-form","meta":{}},{"path":"/component/yolk-offiaccount","title":"yolk-offiaccount","meta":{}},{"path":"/component/yolk-taro","title":"yolk-taro","meta":{}},{"path":"/component/yolk-taro-base","title":"yolk-taro-base","meta":{}},{"path":"/component/yolk-umi","title":"yolk-umi","meta":{}},{"path":"/component/yolk-umi-h5app","title":"yolk-umi-h5app","meta":{}},{"path":"/component/yolk-umi-hd","title":"yolk-umi-hd","meta":{}},{"path":"/component/yolk-umi-mobile","title":"yolk-umi-mobile","meta":{}},{"path":"/component/yolk-umi-offiaccount","title":"yolk-umi-offiaccount","meta":{}},{"path":"/component/yolk-umi-web","title":"yolk-umi-web","meta":{}},{"path":"/component/yolk-umi-yidun","title":"yolk-umi-yidun","meta":{}},{"path":"/component/yolk-web","title":"yolk-web","meta":{}},{"path":"/component/yolk-web-form","title":"yolk-web-form","meta":{}},{"path":"/component/yolk-yidun","title":"yolk-yidun","meta":{}}],"/help":[{"path":"/help","title":"\u5E2E\u52A9","meta":{"order":0}},{"path":"/help/faq","title":"FAQ","meta":{"order":1}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u5FEB\u901F\u4E0A\u624B","order":1,"path":"/getting-started"},{"title":"\u7EC4\u4EF6","order":2,"path":"/component"},{"title":"\u591A\u5E73\u53F0","order":4,"path":"/multi-platform"},{"title":"\u66F4\u65B0\u65E5\u5FD7","order":5,"path":"/change-log"},{"path":"/help","title":"\u5E2E\u52A9","order":6}]},"title":"Yolk","logo":"https://avatars.githubusercontent.com/u/1750965","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}')},Zs1V:function(F){F.exports=JSON.parse("{}")}}]);
