"use strict";(self.webpackChunkyolk_docs=self.webpackChunkyolk_docs||[]).push([[742],{88660:function(a,t,_){_.r(t);var u=_(49230),r=_(23426),c=_(34803),m=_(2966),x=_(59561),s=_(67905),h=_(62862),p=_(29974),o=_(86466),d=_(55247),i=_(53360),n=_(24667),e=_(69787);function l(){return(0,e.jsx)(o.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h4",{id:"\u884C\u4E3A\u9A71\u52A8\u5F00\u53D1bdd\u7684\u65B9\u5F0F\u6765\u7F16\u5199\u548C\u8FD0\u884C\u6D4B\u8BD5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u884C\u4E3A\u9A71\u52A8\u5F00\u53D1bdd\u7684\u65B9\u5F0F\u6765\u7F16\u5199\u548C\u8FD0\u884C\u6D4B\u8BD5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),(0,e.jsx)("code",{children:n.texts[0].value})]}),(0,e.jsxs)("h3",{id:"vscode-\u96C6\u6210",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#vscode-\u96C6\u6210",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"VSCode \u96C6\u6210"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n.texts[1].value,(0,e.jsx)("code",{children:n.texts[2].value})]}),(0,e.jsx)("li",{children:n.texts[3].value})]}),(0,e.jsx)(s.Z,{lang:"json",children:n.texts[4].value}),(0,e.jsxs)("h2",{id:"\u884C\u4E3A\u5B9A\u4E49",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u884C\u4E3A\u5B9A\u4E49",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u884C\u4E3A\u5B9A\u4E49"]}),(0,e.jsx)(s.Z,{lang:"feature",children:n.texts[5].value}),(0,e.jsx)(s.Z,{lang:"feature",children:n.texts[6].value}),(0,e.jsxs)("h2",{id:"\u6D4B\u8BD5\u5F00\u53D1",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6D4B\u8BD5\u5F00\u53D1",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6D4B\u8BD5\u5F00\u53D1"]}),(0,e.jsx)(s.Z,{lang:"tsx",children:n.texts[7].value})]})})})})}t.default=l},24667:function(a,t,_){_.r(t),_.d(t,{texts:function(){return u}});const u=[{value:"\u884C\u4E3A\u9A71\u52A8\u5F00\u53D1\uFF08BDD\uFF09\u7684\u65B9\u5F0F\u6765\u7F16\u5199\u548C\u8FD0\u884C\u6D4B\u8BD5",paraId:0},{value:"\u5B89\u88C5\u63D2\u4EF6 ",paraId:1,tocIndex:1},{value:"Cucumber (Gherkin) Full Support",paraId:1,tocIndex:1},{value:"\u589E\u52A0\u914D\u7F6E",paraId:1,tocIndex:1},{value:`/**
 * .vscode/settings.json \u6216\u8005\u6539\u63D2\u4EF6\u9ED8\u8BA4\u914D\u7F6E
 */
{
  "cucumberautocomplete.steps": ["**/*.test.ts", "**/*.test.tsx", "**/*.test.js", "**/*.test.jsx"]
}
`,paraId:2,tocIndex:1},{value:`/**
 * __yest__/features/timer/index.feature
 */

Feature: \u5012\u8BA1\u65F6\u6309\u94AE
  Scenario: \u6D4B\u8BD5\u5012\u8BA1\u65F6\u6309\u94AE\u6587\u6848
    Given \u663E\u793A\u6709\u5012\u8BA1\u65F6\u6309\u94AE\u7684\u9875\u9762
    When \u7528\u6237\u770B\u5230\u8FD9\u4E2A\u6309\u94AE\u7684\u6587\u6848
    Then \u6309\u94AE\u7684\u6587\u6848\u4E3A \u83B7\u53D6\u9A8C\u8BC1\u7801
  Scenario: \u6D4B\u8BD5\u5012\u8BA1\u65F6\u6309\u94AE\u7684\u5012\u8BA1\u65F6\u529F\u80FD
    Given \u4F7F\u7528\u4E00\u4E2A 2 \u79D2\u7684\u5012\u8BA1\u65F6\u6309\u94AE
    When \u7528\u6237\u70B9\u51FB\u6309\u94AE
    Then \u6309\u94AE\u7684\u6587\u6848\u4E3A 1s\u540E\u91CD\u8BD5
    When \u7ECF\u8FC7 1 s\u4EE5\u540E
    Then \u6309\u94AE\u7684\u6587\u6848\u4E3A \u83B7\u53D6\u9A8C\u8BC1\u7801

`,paraId:3,tocIndex:2},{value:`/**
 * __yest__/features/timer/index.feature
 * \u5168\u4E2D\u6587\u65B9\u5F0F
 */

# language: zh-CN
\u529F\u80FD: \u5012\u8BA1\u65F6\u6309\u94AE
  \u573A\u666F: \u6D4B\u8BD5\u5012\u8BA1\u65F6\u6309\u94AE\u6587\u6848
    \u5047\u8BBE \u663E\u793A\u6709\u5012\u8BA1\u65F6\u6309\u94AE\u7684\u9875\u9762
    \u5F53 \u7528\u6237\u770B\u5230\u8FD9\u4E2A\u6309\u94AE\u7684\u6587\u6848
    \u90A3\u4E48 \u6309\u94AE\u7684\u6587\u6848\u4E3A \u83B7\u53D6\u9A8C\u8BC1\u7801
  \u573A\u666F: \u6D4B\u8BD5\u5012\u8BA1\u65F6\u6309\u94AE\u7684\u5012\u8BA1\u65F6\u529F\u80FD
    \u5047\u8BBE \u4F7F\u7528\u4E00\u4E2A 2 \u79D2\u7684\u5012\u8BA1\u65F6\u6309\u94AE
    \u5F53 \u7528\u6237\u70B9\u51FB\u6309\u94AE
    \u90A3\u4E48 \u6309\u94AE\u7684\u6587\u6848\u4E3A 1s\u540E\u91CD\u8BD5
    \u5F53 \u7ECF\u8FC7 1 s\u4EE5\u540E
    \u90A3\u4E48 \u6309\u94AE\u7684\u6587\u6848\u4E3A \u83B7\u53D6\u9A8C\u8BC1\u7801

`,paraId:4,tocIndex:2},{value:`/**
 * __yest__/features/timer/index.tsx.tsx
 */

import type { RenderResult } from '@testing-library/react';
import { act, render, waitFor } from '@testing-library/react';
import { defineFeature, loadFeature } from 'jest-cucumber';

import { TimerButton } from '@baic/yolk-web';

const feature = loadFeature(require.resolve('./index.feature'));

defineFeature(feature, (test) => {
  test('\u6D4B\u8BD5\u5012\u8BA1\u65F6\u6309\u94AE\u6587\u6848', async ({ given, when, then }) => {
    let renderResult: RenderResult;
    given('\u663E\u793A\u6709\u5012\u8BA1\u65F6\u6309\u94AE\u7684\u9875\u9762', () => {
      renderResult = render(<TimerButton time={2}>\u83B7\u53D6\u9A8C\u8BC1\u7801</TimerButton>);
    });

    let content: string | null = '';

    when('\u7528\u6237\u770B\u5230\u8FD9\u4E2A\u6309\u94AE\u7684\u6587\u6848', async () => {
      const { getByRole } = renderResult;
      content = await waitFor(() => getByRole('button').textContent);
    });
    then(/\u6309\u94AE\u7684\u6587\u6848\u4E3A (.*)/, (txt: string) => {
      expect(content).toStrictEqual(txt);
    });
  });

  test('\u6D4B\u8BD5\u5012\u8BA1\u65F6\u6309\u94AE\u7684\u5012\u8BA1\u65F6\u529F\u80FD', async ({ given, when, then }) => {
    beforeEach(() => {
      jest.useFakeTimers();
    });
    afterEach(() => {
      jest.clearAllTimers();
      jest.useRealTimers();
    });
    const mockCallback = jest.fn();
    let renderResult: RenderResult;
    given(/\u4F7F\u7528\u4E00\u4E2A (.*) \u79D2\u7684\u5012\u8BA1\u65F6\u6309\u94AE/, (time: number) => {
      renderResult = render(
        <TimerButton time={time} onClick={mockCallback}>
          \u83B7\u53D6\u9A8C\u8BC1\u7801
        </TimerButton>,
      );
    });

    when('\u7528\u6237\u70B9\u51FB\u6309\u94AE', async () => {
      const { getByRole } = renderResult;
      getByRole('button').click();
      await expect(mockCallback).toHaveBeenCalledWith(expect.anything());
      act(() => {
        jest.advanceTimersByTime(60);
      });
    });

    let content: string | null = '';
    then(/\u6309\u94AE\u7684\u6587\u6848\u4E3A (.*)/, async (txt: string) => {
      const { getByRole } = renderResult;
      content = await waitFor(() => getByRole('button').textContent);
      expect(content).toStrictEqual(txt);
    });

    when(/\u7ECF\u8FC7 (.*) s\u4EE5\u540E/, async (time: number) => {
      act(() => {
        jest.advanceTimersByTime(time * 1000 + 60);
      });
    });

    then(/\u6309\u94AE\u7684\u6587\u6848\u4E3A (.*)/, async (txt: string) => {
      const { getByRole } = renderResult;
      content = await waitFor(() => getByRole('button').textContent);
      expect(content).toStrictEqual(txt);
    });
  });
});

`,paraId:5,tocIndex:3}]}}]);
