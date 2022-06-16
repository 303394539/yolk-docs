(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{nZGn:function(F,a,e){"use strict";e.r(a);var r=e("kM82"),c=e.n(r),n=e("dEAq"),j=e.n(n),i=e("H1Ra"),u=e("Z5qc"),h=e.n(u),d=c.a.memo(function(t){var s=t.demos;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"markdown",children:[Object(u.jsxs)("h2",{id:"-\u516C\u4F17\u53F7",children:[Object(u.jsx)(n.AnchorLink,{to:"#-\u516C\u4F17\u53F7","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u{1F31F} \u516C\u4F17\u53F7"]}),Object(u.jsxs)("h3",{id:"umi",children:[Object(u.jsx)(n.AnchorLink,{to:"#umi","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"umi"]}),Object(u.jsx)(i.a,{code:`/** .umirc.ts */
import defineConfig from '@baic/yolk-umi-mobile';

export default defineConfig({
  wechat: {}, // \u5F00\u542F\u5FAE\u4FE1sdk
});`,lang:"tsx"}),Object(u.jsx)(i.a,{code:`/** app.tsx */
import * as React from 'react';

import { Provider } from '@baic/yolk-mobile';

import request from '@/common/request';

import '@baic/yolk-mobile/lib/style/index.less';

export function rootContainer(container: React.ReactNode) {
  return (
    <Provider request={request}>
      {container}
    </Provider>
  );
}

export async function render(doRender: () => void) {
  /** \u5982\u679C\u5F00\u542Fwechat: {}\uFF0C\u9700\u8981\u5B8C\u6210sdk\u7684config\u914D\u7F6E */
  // await Wechat.init({config});
  doRender();
}`,lang:"tsx"}),Object(u.jsxs)("h3",{id:"ice",children:[Object(u.jsx)(n.AnchorLink,{to:"#ice","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"ice"]}),Object(u.jsx)(i.a,{code:`/** .icerc.ts */
import { defineConfig } from '@baic/yolk-ice-mobile';

export default defineConfig({
  wechat: {},
});`,lang:"tsx"}),Object(u.jsx)(i.a,{code:`/** app.tsx */
import { runApp, Wechat } from 'ice';

import { usePreload } from '@baic/yolk-web';

runApp({
  app: {
    addProvider: ({ children }) => {
      const [wrap] = usePreload(async () => {
        /** \u5982\u679C\u5F00\u542Fwechat: {}\uFF0C\u9700\u8981\u5B8C\u6210sdk\u7684config\u914D\u7F6E */
        // await Wechat.init({config});
      })
      return wrap(children);
    }
  }
});`,lang:"tsx"}),Object(u.jsxs)("h2",{id:"-h5app",children:[Object(u.jsx)(n.AnchorLink,{to:"#-h5app","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u{1F31F} H5+App"]}),Object(u.jsxs)("h5",{id:"\u5176\u4ED6\u5F00\u53D1\u4E00\u81F4\u9700\u8981\u901A\u8FC7hbuilderx\u6839\u636E\u751F\u6210\u7684h5app\u76EE\u5F55\u8FDB\u884C\u6253\u5305",children:[Object(u.jsx)(n.AnchorLink,{to:"#\u5176\u4ED6\u5F00\u53D1\u4E00\u81F4\u9700\u8981\u901A\u8FC7hbuilderx\u6839\u636E\u751F\u6210\u7684h5app\u76EE\u5F55\u8FDB\u884C\u6253\u5305","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u5176\u4ED6\u5F00\u53D1\u4E00\u81F4\uFF0C\u9700\u8981\u901A\u8FC7HBuilderX\u6839\u636E\u751F\u6210\u7684h5+app/\u76EE\u5F55\u8FDB\u884C\u6253\u5305"]}),Object(u.jsxs)("h5",{id:"\u914D\u7F6E",children:[Object(u.jsx)(n.AnchorLink,{to:"#\u914D\u7F6E","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u914D\u7F6E"]}),Object(u.jsx)(i.a,{code:`/** .umirc.ts */
import { defineConfig } from '@baic/yolk-umi-mobile';
export default defineConfig({
  'h5+app': {
    //H5+App\u7684\u914D\u7F6E
    // manifest: {
      // \u8FD9\u91CC\u662Fbuild\u4EE5\u540E\u7684\u5177\u4F53\u8BBF\u95EE\u5730\u5740
      // launch_path: 'http://xxx.xxx.xxx',
    // }, 
  },
});`,lang:"tsx"}),Object(u.jsxs)("h5",{id:"plus\u5BF9\u8C61",children:[Object(u.jsx)(n.AnchorLink,{to:"#plus\u5BF9\u8C61","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),Object(u.jsx)(n.Link,{to:"http://www.html5plus.org/doc/h5p.html",children:"plus"}),"\u5BF9\u8C61"]}),Object(u.jsx)(i.a,{code:`/** \u8FD0\u884C\u4EE5\u540E\u4F1A\u751F\u6210\u8865\u5145\u7C7B\u578BisH5AppPlusReady */
if (window.isH5AppPlusReady) {
  // plus\u51C6\u5907\u5C31\u7EEA\u53EF\u4F7F\u7528\u65B9\u6CD5
  // plus.navigator.closeSplashscreen()
}`,lang:"tsx"}),Object(u.jsxs)("h2",{id:"-\u5C0F\u7A0B\u5E8F",children:[Object(u.jsx)(n.AnchorLink,{to:"#-\u5C0F\u7A0B\u5E8F","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u{1F31F} \u5C0F\u7A0B\u5E8F"]}),Object(u.jsxs)("h5",{id:"\u5404\u4E2A\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u57FA\u672C\u4E00\u81F4yolk-\u4F1A\u6839\u636E-appid-\u683C\u5F0F\u5207\u6362\u542F\u52A8\u65B9\u5F0F\u901A\u8FC7-taro-\u4E0E-yolk-\u5185\u90E8\u517C\u5BB9\u5404\u5E73\u53F0",children:[Object(u.jsx)(n.AnchorLink,{to:"#\u5404\u4E2A\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u57FA\u672C\u4E00\u81F4yolk-\u4F1A\u6839\u636E-appid-\u683C\u5F0F\u5207\u6362\u542F\u52A8\u65B9\u5F0F\u901A\u8FC7-taro-\u4E0E-yolk-\u5185\u90E8\u517C\u5BB9\u5404\u5E73\u53F0","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),"\u5404\u4E2A\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u57FA\u672C\u4E00\u81F4\uFF0Cyolk \u4F1A\u6839\u636E appid \u683C\u5F0F\u5207\u6362\u542F\u52A8\u65B9\u5F0F\uFF0C\u901A\u8FC7 taro \u4E0E yolk \u5185\u90E8\u517C\u5BB9\u5404\u5E73\u53F0"]}),Object(u.jsxs)("h5",{id:"\u5934\u6761\u5C0F\u7A0B\u5E8F\u9700\u8981\u5305\u542B-projectttjson",children:[Object(u.jsx)(n.AnchorLink,{to:"#\u5934\u6761\u5C0F\u7A0B\u5E8F\u9700\u8981\u5305\u542B-projectttjson","aria-hidden":"true",tabIndex:-1,children:Object(u.jsx)("span",{className:"icon icon-link"})}),Object(u.jsx)("code",{children:"\u5934\u6761\u5C0F\u7A0B\u5E8F\u9700\u8981\u5305\u542B project.tt.json"})]})]})})});a.default=function(t){var s=c.a.useContext(n.context),l=s.demos;return c.a.useEffect(function(){var o;t!=null&&(o=t.location)!==null&&o!==void 0&&o.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),Object(u.jsx)(d,{demos:l})}}}]);
