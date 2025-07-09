"use strict";(self.webpackChunkyolk_docs=self.webpackChunkyolk_docs||[]).push([[300],{86069:function(o,s,n){n.r(s);var a=n(87593),u=n(88651),c=n(95299),m=n(45576),h=n(58751),t=n(75506),p=n(62714),x=n(35844),r=n(48513),i=n(53355),d=n(55826),_=n(54870),e=n(70813);function l(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(d.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u67E5\u9605jest\u4E0E\u76F8\u5173\u751F\u6001\u7F16\u5199testts\u4EE3\u7801",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u67E5\u9605jest\u4E0E\u76F8\u5173\u751F\u6001\u7F16\u5199testts\u4EE3\u7801",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u67E5\u9605",(0,e.jsx)("a",{href:"https://jestjs.io/zh-Hans/",children:_.texts[0].value}),"\u4E0E\u76F8\u5173\u751F\u6001\uFF0C\u7F16\u5199",(0,e.jsx)("code",{children:_.texts[1].value}),"\u4EE3\u7801"]}),(0,e.jsxs)("h2",{id:"\u5B89\u88C5\u9009\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B89\u88C5\u9009\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5B89\u88C5(\u9009\u7528)"]}),(0,e.jsx)(t.Z,{lang:"shell",children:_.texts[2].value}),(0,e.jsxs)("h2",{id:"\u4F7F\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]}),(0,e.jsx)(t.Z,{lang:"ts",children:_.texts[3].value}),(0,e.jsxs)("h2",{id:"\u5982\u4F55\u6D4B\u8BD5\u7EC4\u4EF6",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u6D4B\u8BD5\u7EC4\u4EF6",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55\u6D4B\u8BD5\u7EC4\u4EF6"]}),(0,e.jsx)(t.Z,{lang:"tsx",children:_.texts[4].value}),(0,e.jsxs)("h2",{id:"\u5982\u4F55\u6D4B\u8BD5-react-hook",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u6D4B\u8BD5-react-hook",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55\u6D4B\u8BD5 ",(0,e.jsx)("code",{children:_.texts[5].value})]}),(0,e.jsx)(t.Z,{lang:"ts",children:_.texts[6].value}),(0,e.jsxs)("h2",{id:"\u5982\u4F55-mock-http-server",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55-mock-http-server",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55 mock ",(0,e.jsx)("code",{children:_.texts[7].value})]}),(0,e.jsx)(t.Z,{lang:"ts",children:_.texts[8].value}),(0,e.jsx)(t.Z,{lang:"ts",children:_.texts[9].value}),(0,e.jsxs)("h2",{id:"\u5982\u4F55-mock-umi",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55-mock-umi",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55 mock ",(0,e.jsx)("code",{children:_.texts[10].value})]}),(0,e.jsx)(t.Z,{lang:"ts",children:_.texts[11].value})]})})})})}s.default=l},54870:function(o,s,n){n.r(s),n.d(s,{texts:function(){return a}});const a=[{value:"Jest",paraId:0},{value:"*.test.ts",paraId:0},{value:`npm install --save-dev playwright
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
`,paraId:2,tocIndex:2},{value:`/**
 * ./Component.tsx
 */
const Component = () => {
  return <div>test</div>
}

/**
 * ./__yest__/index.test.tsx
 */
import { render, waitFor } from '@testing-library/react';

import Component from '../Component';

describe('Component', () => {
  test('render', async () => {

    const { container } = render(<Component />);

    const element = await waitFor(
      () => container.querySelector('div')?.textContent,
    );

    expect(element).toStrictEqual("test");

    expect(container).toMatchSnapshot();
  });
});
`,paraId:3,tocIndex:3},{value:"React Hook",paraId:0},{value:`/**
 * ./useData.ts
 */
const useData = () => {
  const [data, setData] = useState<any>({});
  return {
    data,
    setData,
  };
}

/**
 * ./__yest__/index.test.ts
 */
import { act, renderHook } from '@testing-library/react-hooks';
import useData from '../useData';

describe('hook', () => {
  test('useData', () => {
    const { result } = renderHook(() => useData({ id: 1 }));

    act(() => {
      result.current.setData({});
    });

    expect(result.current.data).toStrictEqual({});
  });
});
`,paraId:4,tocIndex:4},{value:"Http Server",paraId:0},{value:`/**
 * ./__yest__/index.test.ts
 */
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const data = {
  records: [
    {
      name: 'asd',
    },
    {
      name: 'asd',
    },
  ],
  current: data?.pageNum,
  size: data?.pageSize,
  total: 2,
};

const server = setupServer(
  http.post('http://mock.com/list', async ({ request }) => {
    const data = (await request.json()) as any;
    return HttpResponse.json(
      {
        code: 200,
        data,
        success: true,
        message: null,
      },
      {
        status: 200,
      },
    );
  }),
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('http', () => {
  test('render', async () => {
    const mockData = await (
      await fetch('http://mock.com/list', {
        method: 'POST',
        body: JSON.stringify({
          pageNum: 1,
          pageSize: 10,
        }),
      })
    ).json();
    expect(mockData.data).toStrictEqual(data);
  });
});
`,paraId:5,tocIndex:5},{value:`/**
 * node <= 16 \u4F7F\u7528 msw@1.x
 */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const data = {
  records: [
    {
      name: 'asd',
    },
    {
      name: 'asd',
    },
  ],
  current: data?.pageNum,
  size: data?.pageSize,
  total: 2,
};

const server = setupServer(
  rest.post('http://mock.com/list', async (req, res, ctx) => {
    const data = (await req.json()) as any;
    return res(ctx.json(
      {
        code: 200,
        data,
        success: true,
        message: null,
      },
    ));
  }),
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('http', () => {
  test('render', async () => {
    const mockData = await (
      await fetch('http://mock.com/list', {
        method: 'POST',
        body: JSON.stringify({
          pageNum: 1,
          pageSize: 10,
        }),
      })
    ).json();
    expect(mockData.data).toStrictEqual(data);
  });
});
`,paraId:6,tocIndex:5},{value:"umi",paraId:0},{value:`jest.mock('umi', () => {
  const { umiMockFactory } = jest.requireActual(
    '@baic/yolk-test/jest/setup/umi',
  );
  const { history, ...more } = umiMockFactory();
  return {
    ...more,
    history: {
      ...history,
      // \u4F8B\u5B50\uFF1A\u6BD4\u5982\u9700\u8981\u8865\u5145history.location.search
      location: {
        search: '?token=1',
      },
    },
  };
});
`,paraId:7,tocIndex:6}]}}]);
