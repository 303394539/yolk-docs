(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{LAgl:function(l,m,e){"use strict";e.r(m);var c=e("kM82"),r=e.n(c),o=e("dEAq"),_=e.n(o),u=e("H1Ra"),n=e("Z5qc"),f=e.n(n),i=r.a.memo(function(t){var s=t.demos;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"markdown",children:[Object(n.jsxs)("h3",{id:"useform",children:[Object(n.jsx)(o.AnchorLink,{to:"#useform","aria-hidden":"true",tabIndex:-1,children:Object(n.jsx)("span",{className:"icon icon-link"})}),"useForm"]}),Object(n.jsxs)("h5",{id:"antd-mobile-\u7684-useform-\u7684\u6269\u5C55",children:[Object(n.jsx)(o.AnchorLink,{to:"#antd-mobile-\u7684-useform-\u7684\u6269\u5C55","aria-hidden":"true",tabIndex:-1,children:Object(n.jsx)("span",{className:"icon icon-link"})}),"antd-mobile \u7684 useForm \u7684\u6269\u5C55"]}),Object(n.jsx)(u.a,{code:`import * as React from 'react';
import { Input } from 'taro-ui';
import { useForm } from '@baic/yolk-miniprogram-form';

export default () => {
  const [form] = useForm();
  const { createFormItem } = form;
  return (
    <Form form={form}>
      {createFormItem({ name: 'Input', rules: 'required' })(<Input />)}
    </Form>
  );
};`,lang:"tsx"})]})})});m.default=function(t){var s=r.a.useContext(o.context),d=s.demos;return r.a.useEffect(function(){var a;t!=null&&(a=t.location)!==null&&a!==void 0&&a.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),Object(n.jsx)(i,{demos:d})}}}]);
