"use strict";(self.webpackChunkyolk_docs=self.webpackChunkyolk_docs||[]).push([[28],{74151:function(l,n,e){e.r(n);var s=e(49020),m=e(3578),r=e(35994),c=e(70154),p=e(99426),t=e(58301),h=e(9312),j=e(357),i=e(62655),a=e(96345),o=e(55826),d=e(93418),_=e(70813);function u(){return(0,_.jsx)(i.dY,{children:(0,_.jsx)(o.Suspense,{fallback:(0,_.jsx)(a.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h5",{id:"wasm-\u7528\u6CD5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#wasm-\u7528\u6CD5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"wasm \u7528\u6CD5"]}),(0,_.jsx)(t.Z,{lang:"tsx",children:d.texts[0].value}),(0,_.jsx)(t.Z,{lang:"tsx",children:d.texts[1].value}),(0,_.jsxs)("h4",{id:"md5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#md5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"MD5"]}),(0,_.jsxs)("h5",{id:"md5\u5DE5\u5177",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#md5\u5DE5\u5177",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"md5\u5DE5\u5177"]}),(0,_.jsxs)("h4",{id:"aes",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#aes",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"AES"]}),(0,_.jsxs)("h5",{id:"aes\u52A0\u89E3\u5BC6\u5DE5\u5177",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#aes\u52A0\u89E3\u5BC6\u5DE5\u5177",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"aes\u52A0\u89E3\u5BC6\u5DE5\u5177"]})]})})})})}n.default=u},93418:function(l,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:`import * as React from 'react';
import { MD5, AES } from '@baic/yolk-wasm';

export default () => {
  console.log(MD5.string("1"));
  const iv = AES.iv();
  const encryptValue = AES.encrypt(iv, "\u52A0\u5BC6\u6570\u636E");
  console.log(iv, encryptValue, AES.decrypt(iv, "\u52A0\u5BC6\u6570\u636E"));
  return <></>;
};
`,paraId:0,tocIndex:0},{value:`import * as React from 'react';
// \u63A5\u5408yolk-umi \u53EF\u901A\u8FC7umi\u76F4\u63A5\u4F7F\u7528
import { wasm } from 'umi';

export default () => {
  console.log(wasm.MD5.string("1"));
  const iv = wasm.AES.iv();
  const encryptValue = wasm.AES.encrypt(iv, "\u52A0\u5BC6\u6570\u636E");
  console.log(iv, encryptValue, wasm.AES.decrypt(iv, "\u52A0\u5BC6\u6570\u636E"));
  return <></>;
};
`,paraId:1,tocIndex:0}]}}]);
