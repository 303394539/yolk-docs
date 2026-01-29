"use strict";(self.webpackChunkyolk_docs=self.webpackChunkyolk_docs||[]).push([[2028],{23803:function(i,s,e){e.r(s);var n=e(47940),m=e(13465),r=e(13899),c=e(57524),h=e(7986),t=e(20619),x=e(81574),b=e(68156),o=e(80259),l=e(14488),a=e(94977),d=e(84903),_=e(74732);function u(){return(0,_.jsx)(o.dY,{children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(l.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h5",{id:"wasm-\u7528\u6CD5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#wasm-\u7528\u6CD5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"wasm \u7528\u6CD5"]}),(0,_.jsx)(t.Z,{lang:"tsx",children:d.texts[0].value}),(0,_.jsx)(t.Z,{lang:"tsx",children:d.texts[1].value}),(0,_.jsxs)("h4",{id:"md5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#md5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"MD5"]}),(0,_.jsxs)("h5",{id:"md5\u5DE5\u5177",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#md5\u5DE5\u5177",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"md5\u5DE5\u5177"]}),(0,_.jsxs)("h4",{id:"aes",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#aes",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"AES"]}),(0,_.jsxs)("h5",{id:"aes\u52A0\u89E3\u5BC6\u5DE5\u5177",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#aes\u52A0\u89E3\u5BC6\u5DE5\u5177",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"aes\u52A0\u89E3\u5BC6\u5DE5\u5177"]})]})})})})}s.default=u},84903:function(i,s,e){e.r(s),e.d(s,{texts:function(){return n}});const n=[{value:`import * as React from 'react';
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
