"use strict";(self.webpackChunkyolk_docs=self.webpackChunkyolk_docs||[]).push([[28],{70701:function(d,n,e){e.r(n);var s=e(42431),m=e(22938),u=e(81530),c=e(78790),h=e(89324),t=e(51399),p=e(31025),x=e(61753),a=e(86928),o=e(87749),l=e(55826),i=e(25660),_=e(70813);function r(){return(0,_.jsx)(a.dY,{children:(0,_.jsx)(l.Suspense,{fallback:(0,_.jsx)(o.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h5",{id:"wasm-\u7528\u6CD5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#wasm-\u7528\u6CD5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"wasm \u7528\u6CD5"]}),(0,_.jsx)(t.Z,{lang:"tsx",children:i.texts[0].value}),(0,_.jsx)(t.Z,{lang:"tsx",children:i.texts[1].value}),(0,_.jsxs)("h4",{id:"md5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#md5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"MD5"]}),(0,_.jsxs)("h5",{id:"md5\u5DE5\u5177",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#md5\u5DE5\u5177",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"md5\u5DE5\u5177"]}),(0,_.jsxs)("h4",{id:"aes",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#aes",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"AES"]}),(0,_.jsxs)("h5",{id:"aes\u52A0\u89E3\u5BC6\u5DE5\u5177",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#aes\u52A0\u89E3\u5BC6\u5DE5\u5177",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"aes\u52A0\u89E3\u5BC6\u5DE5\u5177"]})]})})})})}n.default=r},25660:function(d,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:`import * as React from 'react';
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
