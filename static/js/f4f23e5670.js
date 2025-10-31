"use strict";(self.webpackChunkyolk_docs=self.webpackChunkyolk_docs||[]).push([[2028],{84229:function(o,n,e){e.r(n);var s=e(23021),c=e(71499),m=e(26223),r=e(27586),p=e(10322),t=e(60707),x=e(61371),h=e(65729),d=e(81161),i=e(55813),u=e(21077),a=e(28749),_=e(59885);function l(){return(0,_.jsx)(d.dY,{children:(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)(i.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h5",{id:"wasm-\u7528\u6CD5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#wasm-\u7528\u6CD5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"wasm \u7528\u6CD5"]}),(0,_.jsx)(t.Z,{lang:"tsx",children:a.texts[0].value}),(0,_.jsx)(t.Z,{lang:"tsx",children:a.texts[1].value}),(0,_.jsxs)("h4",{id:"md5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#md5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"MD5"]}),(0,_.jsxs)("h5",{id:"md5\u5DE5\u5177",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#md5\u5DE5\u5177",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"md5\u5DE5\u5177"]}),(0,_.jsxs)("h4",{id:"aes",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#aes",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"AES"]}),(0,_.jsxs)("h5",{id:"aes\u52A0\u89E3\u5BC6\u5DE5\u5177",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#aes\u52A0\u89E3\u5BC6\u5DE5\u5177",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"aes\u52A0\u89E3\u5BC6\u5DE5\u5177"]})]})})})})}n.default=l},28749:function(o,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:`import * as React from 'react';
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
