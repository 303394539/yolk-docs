(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{JjdP:function(e,n,t){"use strict";t.r(n),n["default"]={"component-demo":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.Collapse,{title:"\u6298\u53e0\u7ec4\u4ef6"},"\u8fd9\u91cc\u662f\u9690\u85cf\u5185\u5bb9")};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Collapse } from '@baic/yolk-web-ui';\n\nexport default () => <Collapse title=\"\u6298\u53e0\u7ec4\u4ef6\">\u8fd9\u91cc\u662f\u9690\u85cf\u5185\u5bb9</Collapse>;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},identifier:"component-demo"}},"component-demo-1":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.Flex,null,n.createElement(r.Flex,null,"1"),n.createElement(r.Flex,null,"2"),n.createElement(r.Flex,null,"3"))};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Flex } from '@baic/yolk-web-ui';\n\nexport default () => <Flex>\n  <Flex>1</Flex>\n  <Flex>2</Flex>\n  <Flex>3</Flex>\n</Flex>;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},identifier:"component-demo-1"}},"component-demo-2":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.Grid,{data:[{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"}]})};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Grid } from '@baic/yolk-web-ui';\n\nexport default () => <Grid data={[{\n  label: '\u6807\u9898',\n  value: '\u5185\u5bb9',\n},{\n  label: '\u6807\u9898',\n  value: '\u5185\u5bb9',\n},{\n  label: '\u6807\u9898',\n  value: '\u5185\u5bb9',\n},{\n  label: '\u6807\u9898',\n  value: '\u5185\u5bb9',\n}]} />;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u4e00\u822c\u7528\u6cd5",description:'<div class="markdown"><p>\u7528\u4e8e\u4e00\u822c\u7684\u7f51\u683c\u6570\u636e\u5c55\u793a</p></div>',identifier:"component-demo-2"}},"component-demo-3":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.Grid,{span:2,data:[{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"}]})};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Grid } from '@baic/yolk-web-ui';\n\nexport default () => <Grid span={2} data={[{\n  label: '\u6807\u9898',\n  value: '\u5185\u5bb9',\n},{\n  label: '\u6807\u9898',\n  value: '\u5185\u5bb9',\n},{\n  label: '\u6807\u9898',\n  value: '\u5185\u5bb9',\n},{\n  label: '\u6807\u9898',\n  value: '\u5185\u5bb9',\n}]} />;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"span",description:'<div class="markdown"><p>\u53ef\u4ee5\u63a7\u5236\u4e00\u884c\u4efd\u6570</p></div>',identifier:"component-demo-3"}},"component-demo-4":{component:function(){var e=t("3PQu"),n=t("K+nK");t("/zsF");var r=n(t("PArb"));t("+L6B");var o=n(t("2/Rp")),a=n(t("tJVT")),i=e(t("kM82")),l=(t("gdfu"),t("F/zp")),u=function(){var e=i.useState(!0),n=(0,a["default"])(e,2),t=n[0],u=n[1],c=i.useCallback((function(){return u(!t)}),[t]);return i.createElement(i.Fragment,null,i.createElement(o["default"],{onClick:c},t?"\u5173\u95ed":"\u5f00\u542f","\u8fb9\u6846"),i.createElement(r["default"],null),i.createElement(l.Grid,{bordered:t,data:[{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"}]}))};return i["default"].createElement(u)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Button, Divider } from 'antd';\nimport { Grid } from '@baic/yolk-web-ui';\n\nexport default () => {\n  const [bordered, setBordered] = React.useState(true);\n  const onClickHandler = React.useCallback(() => setBordered(!bordered), [bordered]);\n  return <>\n    <Button onClick={onClickHandler}>{bordered ? '\u5173\u95ed' : '\u5f00\u542f'}\u8fb9\u6846</Button>\n    <Divider />\n    <Grid bordered={bordered} data={[{\n      label: '\u6807\u9898',\n      value: '\u5185\u5bb9',\n    },{\n      label: '\u6807\u9898',\n      value: '\u5185\u5bb9',\n    },{\n      label: '\u6807\u9898',\n      value: '\u5185\u5bb9',\n    },{\n      label: '\u6807\u9898',\n      value: '\u5185\u5bb9',\n    }]} />\n  </>\n};"}},dependencies:{antd:{version:"4.15.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"},"react-dom":{version:">=16.9.0"}},title:"bordered",description:'<div class="markdown"><p>\u53ef\u4ee5\u63a7\u5236\u8fb9\u6846\u662f\u5426\u5c55\u793a</p></div>',identifier:"component-demo-4"}},"component-demo-5":{component:function(){var e=t("3PQu"),n=t("K+nK");t("/zsF");var r=n(t("PArb"));t("7Kak");var o=n(t("9yH6")),a=n(t("tJVT")),i=e(t("kM82")),l=(t("gdfu"),t("F/zp")),u=function(){var e=i.useState("middle"),n=(0,a["default"])(e,2),t=n[0],u=n[1],c=i.useCallback((function(e){return u(e.target.value)}),[]);return i.createElement(i.Fragment,null,i.createElement(o["default"].Group,{value:t,onChange:c},i.createElement(o["default"].Button,{value:"small"},"small"),i.createElement(o["default"].Button,{value:"middle"},"middle"),i.createElement(o["default"].Button,{value:"large"},"large")),i.createElement(r["default"],null),i.createElement(l.Grid,{size:t,data:[{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"}]}))};return i["default"].createElement(u)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Radio, Divider } from 'antd';\nimport { Grid } from '@baic/yolk-web-ui';\n\nexport default () => {\n  const [size, setSize] = React.useState('middle');\n  const onChangeHandler = React.useCallback((e) => setSize(e.target.value), []);\n  return <>\n    <Radio.Group value={size} onChange={onChangeHandler}>\n      <Radio.Button value=\"small\">small</Radio.Button>\n      <Radio.Button value=\"middle\">middle</Radio.Button>\n      <Radio.Button value=\"large\">large</Radio.Button>\n    </Radio.Group>\n    <Divider />\n    <Grid size={size} data={[{\n      label: '\u6807\u9898',\n      value: '\u5185\u5bb9',\n    },{\n      label: '\u6807\u9898',\n      value: '\u5185\u5bb9',\n    },{\n      label: '\u6807\u9898',\n      value: '\u5185\u5bb9',\n    },{\n      label: '\u6807\u9898',\n      value: '\u5185\u5bb9',\n    }]} />\n  </>\n};"}},dependencies:{antd:{version:"4.15.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"},"react-dom":{version:">=16.9.0"}},title:"size",description:'<div class="markdown"><p>\u53ef\u4ee5\u63a7\u5236\u5c3a\u5bf8</p></div>',identifier:"component-demo-5"}},"component-demo-6":{component:function(){var e=t("3PQu"),n=t("K+nK"),r=n(t("tJVT")),o=e(t("kM82")),a=t("ag2L"),i=t("F/zp"),l=function(){var e=(0,a.useForm)(),n=(0,r["default"])(e,1),t=n[0],l=t.createFormItem;return o.createElement(a.Form,{form:t},o.createElement(i.Grid,{data:[{label:"\u6807\u9898",value:l({name:"content",rules:"required"})(o.createElement(i.Input,null)),required:!0},{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"},{label:"\u6807\u9898",value:"\u5185\u5bb9"}]}))};return o["default"].createElement(l)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { useForm, Form } from '@baic/yolk';\nimport { Grid, Input } from '@baic/yolk-web-ui';\n\nexport default () => {\n  const [form] = useForm();\n  const { createFormItem } = form;\n  return <Form form={form}>\n    <Grid data={[{\n      label: '\u6807\u9898',\n      value: createFormItem({\n        name: 'content',\n        rules: 'required',\n      })(<Input />),\n      required: true,\n    },{\n      label: '\u6807\u9898',\n      value: '\u5185\u5bb9',\n    },{\n      label: '\u6807\u9898',\n      value: '\u5185\u5bb9',\n    },{\n      label: '\u6807\u9898',\n      value: '\u5185\u5bb9',\n    }]} />\n  </Form>\n};"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk":{version:"1.0.0-alpha.128"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"required",description:'<div class="markdown"><p>\u8f85\u52a9\u8868\u5355\u589e\u52a0label\u7684\u5fc5\u586b\u6807\u5fd7</p></div>',identifier:"component-demo-6"}},"component-demo-7":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.LinkButton,{onClick:function(){}},"\u64cd\u4f5c")};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { LinkButton } from '@baic/yolk-web-ui';\n\nexport default () => <LinkButton onClick={() => {}}>\u64cd\u4f5c</LinkButton>;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u4e00\u822c\u7528\u6cd5",description:'<div class="markdown"><p>\u6ca1\u6709onClick\u5c5e\u6027\u4f1a\u81ea\u52a8\u4e3adisabled\u72b6\u6001</p></div>',identifier:"component-demo-7"}},"component-demo-8":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.LinkButton.Merge,null,n.createElement(r.LinkButton,{onClick:function(){}},"\u4fee\u6539"),n.createElement(r.LinkButton,null,"\u5220\u9664"))};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { LinkButton } from '@baic/yolk-web-ui';\n\nexport default () => <LinkButton.Merge>\n  <LinkButton onClick={() => {}}>\u4fee\u6539</LinkButton>\n  <LinkButton>\u5220\u9664</LinkButton>\n</LinkButton.Merge>;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"LinkButton.Merge",description:'<div class="markdown"><p>\u5408\u5e76\u591a\u4e2a\u6309\u94ae\u4e3a\u9690\u85cf\u6309\u94ae</p></div>',identifier:"component-demo-8"}},"component-demo-9":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.LinkButton.Group,null,n.createElement(r.LinkButton,{onClick:function(){}},"\u7f16\u8f91"),n.createElement(r.LinkButton.Merge,null,n.createElement(r.LinkButton,{onClick:function(){}},"\u4fee\u6539"),n.createElement(r.LinkButton,null,"\u5220\u9664")))};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { LinkButton } from '@baic/yolk-web-ui';\n\nexport default () => <LinkButton.Group>\n  <LinkButton onClick={() => {}}>\u7f16\u8f91</LinkButton>\n  <LinkButton.Merge>\n    <LinkButton onClick={() => {}}>\u4fee\u6539</LinkButton>\n    <LinkButton>\u5220\u9664</LinkButton>\n  </LinkButton.Merge>\n</LinkButton.Group>;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"LinkButton.Group",description:'<div class="markdown"><p>\u7ed9\u591a\u4e2a\u6309\u94ae\u5206\u7ec4\uff0c\u5305\u62ecLinkButton.Merge</p></div>',identifier:"component-demo-9"}},"component-demo-10":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement("div",{style:{position:"relative"}},n.createElement(r.Loading,null))};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Loading } from '@baic/yolk-web-ui';\n\nexport default () => <div style={{\n  position: 'relative',\n}}>\n  <Loading />\n</div>;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},identifier:"component-demo-10"}},"component-demo-11":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.Required,null,"\u5fc5\u586b")};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Required } from '@baic/yolk-web-ui';\n\nexport default () => <Required>\u5fc5\u586b</Required>;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},identifier:"component-demo-11"}},"component-demo-12":{component:function(){var e=t("3PQu"),n=t("K+nK"),r=n(t("tJVT")),o=e(t("kM82")),a=t("ag2L"),i=t("F/zp"),l=function(){var e=(0,a.useForm)(),n=(0,r["default"])(e,1),t=n[0],l=t.createFormItem;return o.createElement(a.Form,{form:t},o.createElement(i.SearchLayout,{data:[l({name:"name",label:"\u59d3\u540d",rules:"required"})(o.createElement(i.Input,null)),l({name:"age",label:"\u5e74\u9f84",rules:"required"})(o.createElement(i.NumberInput,{maxLength:3})),l({name:"mobile",label:"\u7535\u8bdd\u53f7\u7801",rules:{required:!0,mobile:!0}})(o.createElement(i.MobileInput,null)),l({name:"bankNumber",label:"\u94f6\u884c\u5361\u53f7",rules:"required"})(o.createElement(i.BankInput,null))]}))};return o["default"].createElement(l)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Form, useForm } from '@baic/yolk';\nimport { SearchLayout, Input, NumberInput, MobileInput, BankInput } from '@baic/yolk-web-ui';\n\nexport default () => {\n  const [form] = useForm();\n  const { createFormItem } = form;\n  return <Form form={form}>\n    <SearchLayout data={[\n      createFormItem({\n        name: 'name',\n        label: '\u59d3\u540d',\n        rules: 'required',\n      })(<Input />),\n      createFormItem({\n        name: 'age',\n        label: '\u5e74\u9f84',\n        rules: 'required',\n      })(<NumberInput maxLength={3} />),\n      createFormItem({\n        name: 'mobile',\n        label: '\u7535\u8bdd\u53f7\u7801',\n        rules: {\n          required: true,\n          mobile: true,\n        },\n      })(<MobileInput />),\n      createFormItem({\n        name: 'bankNumber',\n        label: '\u94f6\u884c\u5361\u53f7',\n        rules: 'required',\n      })(<BankInput />)\n    ]}/>\n  </Form>\n};"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk":{version:"1.0.0-alpha.128"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u7528\u6cd5",description:'<div class="markdown"><p>\u901a\u8fc7Config\u7ec4\u4ef6\uff0c\u8fdb\u884c\u591a\u4e2a\u8f93\u5165\u7f16\u8f91\u72b6\u6001\u5207\u6362\uff0c\u4fbf\u5229\u7f16\u8f91\u4e0e\u8be6\u60c5\u9875\u9762\u5207\u6362</p></div>',identifier:"component-demo-12"}},"component-demo-13":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.Title,null,"\u8fd9\u91cc\u662f\u6807\u9898")};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Title } from '@baic/yolk-web-ui';\n\nexport default () => <Title>\u8fd9\u91cc\u662f\u6807\u9898</Title>;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u4e00\u822c\u7528\u6cd5",description:'<div class="markdown"><p>\u7528\u4e8e\u6807\u9898\u5c55\u793a</p></div>',identifier:"component-demo-13"}},"component-demo-14":{component:function(){var e=t("3PQu"),n=t("K+nK");t("+L6B");var r=n(t("2/Rp")),o=e(t("kM82")),a=(t("gdfu"),t("F/zp")),i=function(){return o.createElement(a.Title,{toolbar:o.createElement(r["default"],null,"\u63d0\u4ea4")},"\u8fd9\u91cc\u662f\u6807\u9898")};return o["default"].createElement(i)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Button } from 'antd';\nimport { Title } from '@baic/yolk-web-ui';\n\nexport default () => <Title toolbar={<Button>\u63d0\u4ea4</Button>}>\u8fd9\u91cc\u662f\u6807\u9898</Title>;"}},dependencies:{antd:{version:"4.15.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"},"react-dom":{version:">=16.9.0"}},title:"\u5de5\u5177\u680f",description:'<div class="markdown"><p>\u53ef\u901a\u8fc7\u5de5\u5177\u680f\u589e\u52a0\u6309\u94ae\u529f\u80fd</p></div>',identifier:"component-demo-14"}},"component-demo-15":{component:function(){var e=t("3PQu"),n=t("K+nK");t("7Kak");var r=n(t("9yH6"));t("/zsF");var o=n(t("PArb"));t("+L6B");var a=n(t("2/Rp")),i=n(t("tJVT")),l=e(t("kM82")),u=(t("gdfu"),t("F/zp")),c=function(){var e=l.createRef(),n=l.useState("page"),t=(0,i["default"])(n,2),c=t[0],d=t[1],m=l.useCallback((function(){var n;return null===(n=e.current)||void 0===n?void 0:n.open()}),[]),s=l.useCallback((function(e){return d(e.target.value)}),[]);return l.createElement(l.Fragment,null,l.createElement(a["default"],{onClick:m},"\u6253\u5f00"),l.createElement(o["default"],{type:"vertical"}),l.createElement(r["default"].Group,{onChange:s,defaultValue:c},l.createElement(r["default"],{value:"modal"},"Modal\u6a21\u5f0f"),l.createElement(r["default"],{value:"page"},"Page\u6a21\u5f0f"),l.createElement(r["default"],{value:"inline"},"Inline\u6a21\u5f0f")),l.createElement(o["default"],null),l.createElement("div",{style:{position:"relative",overflow:"hidden",width:500,height:500,border:"1px solid #ddd"}},l.createElement(u.Wrapper,{ref:e,mode:c,title:"\u6807\u9898"},"\u8fd9\u91cc\u662f\u5185\u5bb9")))};return l["default"].createElement(c)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Button, Divider, Radio } from 'antd';\nimport { Wrapper } from '@baic/yolk-web-ui';\nimport { WrapperInstance, Mode } from '@baic/yolk-web-ui/lib/wrapper';\n\nexport default () => {\n  const ref = React.createRef<WrapperInstance>();\n  const [mode, setMode] = React.useState<Mode>('page');\n  const onClickHandler = React.useCallback(() => ref.current?.open(), []);\n  const onChangeHandler = React.useCallback((e) => setMode(e.target.value), []);\n  return <>\n    <Button onClick={onClickHandler}>\u6253\u5f00</Button>\n    <Divider type=\"vertical\" />\n    <Radio.Group onChange={onChangeHandler} defaultValue={mode}>\n      <Radio value=\"modal\">Modal\u6a21\u5f0f</Radio>\n      <Radio value=\"page\">Page\u6a21\u5f0f</Radio>\n      <Radio value=\"inline\">Inline\u6a21\u5f0f</Radio>\n    </Radio.Group>\n    <Divider />\n    <div\n      style={{\n        position: 'relative',\n        overflow: 'hidden',\n        width: 500,\n        height: 500,\n        border: '1px solid #ddd',\n      }}\n    >\n      <Wrapper ref={ref} mode={mode} title=\"\u6807\u9898\">\u8fd9\u91cc\u662f\u5185\u5bb9</Wrapper>\n    </div>\n  </>\n}"}},dependencies:{antd:{version:"4.15.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"},"react-dom":{version:">=16.9.0"}},identifier:"component-demo-15"}},"component-demo-16":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.Input,null)};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Input } from '@baic/yolk-web-ui';\n\nexport default () => <Input />;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u7528\u6cd5",description:'<div class="markdown"><p>\u4eceantd.Input\u6269\u5c55</p></div>',identifier:"component-demo-16"}},"component-demo-17":{component:function(){var e=t("3PQu"),n=t("K+nK");t("/zsF");var r=n(t("PArb"));t("+L6B");var o=n(t("2/Rp")),a=n(t("tJVT")),i=e(t("kM82")),l=(t("gdfu"),t("ag2L")),u=t("F/zp"),c=function(){var e=(0,l.useForm)(),n=(0,a["default"])(e,1),t=n[0],c=t.createFormItem,d=t.setFieldsValue,m=t.resetFields,s=i.useState(!0),p=(0,a["default"])(s,2),f=p[0],v=p[1],b=i.useCallback((function(){f?(v(!1),d({name:"\u67d0\u67d0",age:18,mobile:"13000000000",bankNumber:"0000000000000000"})):(v(!0),m())}),[f]);return i.createElement(i.Fragment,null,i.createElement(o["default"],{onClick:b},"\u5207\u6362",f?"\u8be6\u60c5":"\u7f16\u8f91"),i.createElement(r["default"],null),i.createElement(u.Config,{edit:f},i.createElement(l.Form,{form:t},i.createElement(u.Grid,{data:[{label:"\u59d3\u540d",value:c({name:"grid-name",rules:"required"})(i.createElement(u.Input,null)),required:f},{label:"\u5e74\u9f84",value:c({name:"grid-age",rules:"required"})(i.createElement(u.NumberInput,{maxLength:3})),required:f},{label:"\u7535\u8bdd\u53f7\u7801",value:c({name:"grid-mobile",rules:{required:!0,mobile:!0}})(i.createElement(u.MobileInput,null)),required:f},{label:"\u94f6\u884c\u5361\u53f7",value:c({name:"grid-bankNumber",rules:"required"})(i.createElement(u.BankInput,null)),required:f}]}))))};return i["default"].createElement(c)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Button, Divider } from 'antd';\nimport { Form, useForm } from '@baic/yolk';\nimport { Config, Input, NumberInput, MobileInput, BankInput, Grid } from '@baic/yolk-web-ui';\n\nexport default () => {\n  const [form] = useForm();\n  const { createFormItem, setFieldsValue, resetFields } = form;\n  const [edit, setEdit] = React.useState(true);\n  const onClickHandler = React.useCallback(() => {\n    if (edit) {\n      setEdit(false);\n      console.log(123);\n      setFieldsValue({\n        name: '\u67d0\u67d0',\n        age: 18,\n        mobile: '13000000000',\n        bankNumber: '0000000000000000'\n      })\n    } else {\n      setEdit(true);\n      resetFields();\n    }\n  }, [edit]);\n  return <>\n    <Button onClick={onClickHandler}>\u5207\u6362{edit ? '\u8be6\u60c5' : '\u7f16\u8f91'}</Button>\n    <Divider />\n    <Config edit={edit}>\n      <Form form={form}>\n        <Grid data={[{\n          label: '\u59d3\u540d',\n          value: createFormItem({\n            name: 'grid-name',\n            rules: 'required',\n          })(<Input />),\n          required: edit,\n        },{\n          label: '\u5e74\u9f84',\n          value: createFormItem({\n            name: 'grid-age',\n            rules: 'required',\n          })(<NumberInput maxLength={3} />),\n          required: edit,\n        },{\n          label: '\u7535\u8bdd\u53f7\u7801',\n          value: createFormItem({\n            name: 'grid-mobile',\n            rules: {\n              required: true,\n              mobile: true,\n            },\n          })(<MobileInput />),\n          required: edit,\n        },{\n          label: '\u94f6\u884c\u5361\u53f7',\n          value: createFormItem({\n            name: 'grid-bankNumber',\n            rules: 'required',\n          })(<BankInput />),\n          required: edit,\n        }]}/>\n      </Form>\n    </Config>\n  </>\n};"}},dependencies:{antd:{version:"4.15.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk":{version:"1.0.0-alpha.128"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"},"react-dom":{version:">=16.9.0"}},title:"Config\u7528\u6cd5",description:'<div class="markdown"><p>\u901a\u8fc7Config\u7ec4\u4ef6\uff0c\u8fdb\u884c\u591a\u4e2a\u8f93\u5165\u7f16\u8f91\u72b6\u6001\u5207\u6362\uff0c\u4fbf\u5229\u7f16\u8f91\u4e0e\u8be6\u60c5\u9875\u9762\u5207\u6362</p></div>',identifier:"component-demo-17"}},"component-demo-18":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.NumberInput,null)};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { NumberInput } from '@baic/yolk-web-ui';\n\nexport default () => <NumberInput />;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u7528\u6cd5",description:'<div class="markdown"><p>\u4eceInput\u6269\u5c55</p></div>',identifier:"component-demo-18"}},"component-demo-19":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.MobileInput,null)};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { MobileInput } from '@baic/yolk-web-ui';\n\nexport default () => <MobileInput />;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u7528\u6cd5",description:'<div class="markdown"><p>\u4eceNumberInput\u6269\u5c55</p></div>',identifier:"component-demo-19"}},"component-demo-20":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.BankInput,null)};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { BankInput } from '@baic/yolk-web-ui';\n\nexport default () => <BankInput />;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u7528\u6cd5",description:'<div class="markdown"><p>\u4eceNumberInput\u6269\u5c55</p></div>',identifier:"component-demo-20"}},"component-demo-21":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.Provider,{iconfontScriptUrl:["//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js","//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js"]},n.createElement(r.Iconfont,{type:"icon-javascript"}),n.createElement(r.Iconfont,{type:"icon-java"}),n.createElement(r.Iconfont,{type:"icon-shoppingcart"}),n.createElement(r.Iconfont,{type:"icon-python"}))};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Provider, Iconfont } from '@baic/yolk-web-ui';\n\nexport default () => {\n  return <Provider iconfontScriptUrl={[\n    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js',\n    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js',\n  ]}>\n    <Iconfont type=\"icon-javascript\" />\n    <Iconfont type=\"icon-java\" />\n    <Iconfont type=\"icon-shoppingcart\" />\n    <Iconfont type=\"icon-python\" />\n  </Provider>\n};"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u7528\u6cd5",description:'<div class="markdown"><p>\u901a\u8fc7\u7ed3\u5408Provider\u7684iconfontScriptUrl\u5b57\u6bb5\uff0c\u521d\u59cb\u5316iconfont.cn\u7684\u8d44\u6e90\uff0c\u7136\u540e\u76f4\u63a5\u4f7f\u7528</p></div>',identifier:"component-demo-21"}},"component-demo-22":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.Table,{columns:[{dataIndex:"a",title:"a",formatter:function(e){return e}},{dataIndex:"b",title:"b",ellipsis:!0},{dataIndex:"b",title:"b",ellipsis:5},{dataIndex:"b",title:"b",ellipsis:function(){return"123"}},{dataIndex:"a",title:"a",fontWeight:"bold"},{dataIndex:"a",title:"a",unit:"\u5143"},{dataIndex:"a",title:"a",tag:!0},{dataIndex:"a",title:"a",tag:{color:"red"}},{dataIndex:"a",title:"a",tag:"red"}],dataSource:[{a:"1",b:"124125125151251251515125",c:!0,d:null}]})};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Table } from '@baic/yolk-web-ui';\n\nexport default () => <Table columns={[\n  {\n    dataIndex: 'a',\n    title: 'a',\n    formatter: (v) => v,\n  },\n  {\n    dataIndex: 'b',\n    title: 'b',\n    ellipsis: true,\n  },\n  {\n    dataIndex: 'b',\n    title: 'b',\n    ellipsis: 5,\n  },\n  {\n    dataIndex: 'b',\n    title: 'b',\n    ellipsis: () => '123',\n  },\n  {\n    dataIndex: 'a',\n    title: 'a',\n    fontWeight: 'bold',\n  },\n  {\n    dataIndex: 'a',\n    title: 'a',\n    unit: '\u5143',\n  },\n  {\n    dataIndex: 'a',\n    title: 'a',\n    tag: true,\n  },\n  {\n    dataIndex: 'a',\n    title: 'a',\n    tag: {\n      color: 'red',\n    },\n  },\n  {\n    dataIndex: 'a',\n    title: 'a',\n    tag: 'red',\n  },\n]}\ndataSource={[\n  {\n    a: '1',\n    b: '124125125151251251515125',\n    c: true,\n    d: null,\n  },\n]} />;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u7528\u6cd5",description:'<div class="markdown"><p>\u5176\u4ed6\u5c5e\u6027\u7ee7\u627fantd.Table, \u6269\u5c55\u4e86columns\u7684\u5b57\u6bb5</p></div>',identifier:"component-demo-22"}},"component-demo-23":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.QrCode,{value:"https://www.baidu.com"})};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { QrCode } from '@baic/yolk-web-ui';\n\nexport default () => <QrCode value=\"https://www.baidu.com\" />;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u7528\u6cd5",description:'<div class="markdown"><p>\u8f6c\u6362\u5b57\u7b26\u4e32\u4e3a\u4e8c\u7ef4\u7801</p></div>',identifier:"component-demo-23"}},"component-demo-24":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.TimerButton,null,"\u9a8c\u8bc1\u7801")};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { TimerButton } from '@baic/yolk-web-ui';\n\nexport default () => <TimerButton>\u9a8c\u8bc1\u7801</TimerButton>;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u7528\u6cd5",description:'<div class="markdown"><p>\u7528\u4e8e\u5012\u8ba1\u65f6\u6309\u94ae</p></div>',identifier:"component-demo-24"}},"component-demo-25":{component:function(){var e=t("3PQu"),n=t("K+nK");t("+L6B");var r=n(t("2/Rp")),o=n(t("tJVT")),a=e(t("kM82")),i=(t("gdfu"),t("F/zp")),l=function(){var e=a.useState(!1),n=(0,o["default"])(e,2),t=n[0],l=n[1],u=a.useCallback((function(){return l(!0)}),[]),c=a.useCallback((function(){return l(!1)}),[]);return a.createElement(a.Fragment,null,a.createElement(r["default"],{onClick:u},"\u9884\u89c8\u56fe\u7247"),a.createElement(i.ImagePreview,{visible:t,onClose:c,urls:["https://avatars.githubusercontent.com/u/1750965"],current:"https://avatars.githubusercontent.com/u/1750965"}))};return a["default"].createElement(l)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Button } from 'antd';\nimport { ImagePreview } from '@baic/yolk-web-ui';\n\nexport default () => {\n  const [visible, setVisible] = React.useState(false);\n  const onClickHandler = React.useCallback(() => setVisible(true), []);\n  const onCloseHandler = React.useCallback(() => setVisible(false), []);\n  return <>\n    <Button onClick={onClickHandler}>\u9884\u89c8\u56fe\u7247</Button>\n    <ImagePreview visible={visible} onClose={onCloseHandler} urls={['https://avatars.githubusercontent.com/u/1750965']} current='https://avatars.githubusercontent.com/u/1750965' />\n  </>\n};"}},dependencies:{antd:{version:"4.15.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"},"react-dom":{version:">=16.9.0"}},title:"\u7528\u6cd5",description:'<div class="markdown"><p>\u7528\u4e8e\u5012\u8ba1\u65f6\u6309\u94ae</p></div>',identifier:"component-demo-25"}},"component-demo-26":{component:function(){var e=t("3PQu"),n=e(t("kM82")),r=t("F/zp"),o=function(){return n.createElement(r.RangeNumber,null)};return n["default"].createElement(o)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { RangeNumber } from '@baic/yolk-web-ui';\n\nexport default () => <RangeNumber />;"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u7528\u6cd5",description:'<div class="markdown"><p>\u7528\u4e8e\u533a\u95f4\u6570\u5b57</p></div>',identifier:"component-demo-26"}},"component-demo-27":{component:function(){var e=t("3PQu"),n=t("K+nK"),r=n(t("tJVT")),o=e(t("kM82")),a=t("ag2L"),i=t("F/zp"),l=function(){var e=(0,a.useForm)(),n=(0,r["default"])(e,1),t=n[0],l=t.createFormItem;return o.createElement(a.Form,{form:t},l({name:"RangeNumber"})(o.createElement(i.RangeNumber,null)))};return o["default"].createElement(l)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Form, useForm } from '@baic/yolk';\nimport { RangeNumber } from '@baic/yolk-web-ui';\n\nexport default () => {\n  const [form] = useForm();\n  const { createFormItem } = form;\n  return <Form form={form}>\n    {createFormItem({\n      name: 'RangeNumber',\n    })(<RangeNumber />)}\n  </Form>;\n};"}},dependencies:{react:{version:"17.0.2"},"@baic/yolk":{version:"1.0.0-alpha.128"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"}},title:"\u63d0\u793a\u9519\u8bef",description:'<div class="markdown"><p>\u914d\u5408\u8868\u5355\u53ef\u81ea\u9a8c\u9519\u8bef\u5e76\u63d0\u793a</p></div>',identifier:"component-demo-27"}},"component-demo-28":{component:function(){var e=t("3PQu"),n=t("K+nK");t("+L6B");var r=n(t("2/Rp")),o=e(t("kM82")),a=(t("gdfu"),t("F/zp")),i=function(){var e=o.useCallback((function(){return a.Util.previewImage({urls:["https://avatars.githubusercontent.com/u/1750965"],current:"https://avatars.githubusercontent.com/u/1750965"})}),[]);return o.createElement(r["default"],{onClick:e},"\u9884\u89c8\u56fe\u7247")};return o["default"].createElement(i)},previewerProps:{sources:{_:{tsx:"import * as React from 'react';\nimport { Button } from 'antd';\nimport { Util } from '@baic/yolk-web-ui';\n\nexport default () => {\n  const onClickHandler = React.useCallback(() => Util.previewImage({\n    urls: ['https://avatars.githubusercontent.com/u/1750965'],\n    current: 'https://avatars.githubusercontent.com/u/1750965'\n  }), []);\n  return <Button onClick={onClickHandler}>\u9884\u89c8\u56fe\u7247</Button>;\n};"}},dependencies:{antd:{version:"4.15.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"@baic/yolk-web-ui":{version:"1.0.0-alpha.111"},"react-dom":{version:">=16.9.0"}},identifier:"component-demo-28"}}}},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);