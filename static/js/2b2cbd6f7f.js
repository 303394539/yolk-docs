"use strict";(self.webpackChunkyolk_docs=self.webpackChunkyolk_docs||[]).push([[300],{52431:function(d,n,e){e.r(n);var o=e(98850),r=e(88147),m=e(54735),c=e(33656),h=e(85138),s=e(83399),p=e(24871),j=e(19440),i=e(54691),l=e(25567),u=e(55826),t=e(55627),_=e(70813);function a(){return(0,_.jsx)(i.dY,{children:(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)(l.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"\u67E5\u9605jest\u4E0E\u76F8\u5173\u751F\u6001\u7F16\u5199testts\u4EE3\u7801",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u67E5\u9605jest\u4E0E\u76F8\u5173\u751F\u6001\u7F16\u5199testts\u4EE3\u7801",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u67E5\u9605",(0,_.jsx)("a",{href:"https://jestjs.io/zh-Hans/",children:t.texts[0].value}),"\u4E0E\u76F8\u5173\u751F\u6001\uFF0C\u7F16\u5199",(0,_.jsx)("code",{children:t.texts[1].value}),"\u4EE3\u7801"]}),(0,_.jsxs)("h2",{id:"\u5B89\u88C5\u9009\u7528",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B89\u88C5\u9009\u7528",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5B89\u88C5(\u9009\u7528)"]}),(0,_.jsx)(s.Z,{lang:"shell",children:t.texts[2].value}),(0,_.jsxs)("h2",{id:"\u4F7F\u7528",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]}),(0,_.jsx)(s.Z,{lang:"ts",children:t.texts[3].value})]})})})})}n.default=a},55627:function(d,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"Jest",paraId:0},{value:"*.test.ts",paraId:0},{value:`npm install --save-dev playwright
npx playwright install
`,paraId:1,tocIndex:1},{value:`// <rootDir>/yest.config.ts
import { defineConfig } from '@baic/yolk-test';

export default defineConfig({
  moduleNameMapper: {
    /**
     * @description \u6D4B\u8BD5\u5185\u5BB9\u4F7F\u7528\u4E86antd-mobile\u53C2\u8003
     */
    // '\\\\.\\\\./\\\\.\\\\./\\\\.\\\\./components/(.*)$':
    //   '<rootDir>/node_modules/antd-mobile/cjs/components/$1',
    /**
     * @description \u6D4B\u8BD5\u56FE\u7247\u53C2\u8003(Mapper\u6587\u4EF6\u9700\u8981\u5728<rootDir>\u8303\u56F4\u5185\uFF0C\u4E0D\u7136\u62A5\u9519\uFF0C\u6240\u4EE5\u6CA1\u6709\u5185\u7F6E)
     */
    // '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    //   '<rootDir>/node_modules/@ant-design/tools/lib/jest/imagePreprocessor',
  },
});
`,paraId:2,tocIndex:2}]}}]);
