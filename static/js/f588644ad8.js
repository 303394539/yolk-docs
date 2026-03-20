"use strict";(self.webpackChunkyolk_docs=self.webpackChunkyolk_docs||[]).push([[2028],{88078:function(o,n,e){e.r(n);var t=e(57185),u=e(59659),r=e(79133),c=e(39809),h=e(20845),s=e(93951),p=e(71554),x=e(29320),d=e(20031),a=e(99024),l=e(94977),i=e(67161),_=e(74732);function m(){return(0,_.jsx)(d.dY,{children:(0,_.jsx)(l.Suspense,{fallback:(0,_.jsx)(a.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h5",{id:"wasm-\u7528\u6CD5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#wasm-\u7528\u6CD5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"wasm \u7528\u6CD5"]}),(0,_.jsx)(s.Z,{lang:"tsx",children:i.texts[0].value}),(0,_.jsx)(s.Z,{lang:"tsx",children:i.texts[1].value}),(0,_.jsxs)("h4",{id:"md5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#md5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"MD5"]}),(0,_.jsxs)("h5",{id:"md5\u5DE5\u5177",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#md5\u5DE5\u5177",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"md5\u5DE5\u5177"]}),(0,_.jsxs)("h4",{id:"aes",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#aes",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"AES"]}),(0,_.jsxs)("h5",{id:"aes\u52A0\u89E3\u5BC6\u5DE5\u5177",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#aes\u52A0\u89E3\u5BC6\u5DE5\u5177",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"aes\u52A0\u89E3\u5BC6\u5DE5\u5177"]})]})})})})}n.default=m},67161:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:`import * as React from 'react';
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
