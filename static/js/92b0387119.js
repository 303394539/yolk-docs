"use strict";(self.webpackChunkyolk_docs=self.webpackChunkyolk_docs||[]).push([[742],{1753:function(o,n,e){e.r(n);var s=e(87593),d=e(88651),c=e(95299),m=e(45576),h=e(58751),i=e(75506),x=e(62714),b=e(35844),l=e(48513),r=e(53355),u=e(55826),t=e(91624),_=e(70813);function a(){return(0,_.jsx)(l.dY,{children:(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)(r.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h4",{id:"\u884C\u4E3A\u9A71\u52A8\u5F00\u53D1bdd\u7684\u65B9\u5F0F\u6765\u7F16\u5199\u548C\u8FD0\u884C\u6D4B\u8BD5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u884C\u4E3A\u9A71\u52A8\u5F00\u53D1bdd\u7684\u65B9\u5F0F\u6765\u7F16\u5199\u548C\u8FD0\u884C\u6D4B\u8BD5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),(0,_.jsx)("code",{children:t.texts[0].value})]}),(0,_.jsxs)("h2",{id:"\u884C\u4E3A\u5B9A\u4E49",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u884C\u4E3A\u5B9A\u4E49",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u884C\u4E3A\u5B9A\u4E49"]}),(0,_.jsx)(i.Z,{lang:"feature",children:t.texts[1].value}),(0,_.jsxs)("h2",{id:"\u6D4B\u8BD5\u5F00\u53D1",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6D4B\u8BD5\u5F00\u53D1",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u6D4B\u8BD5\u5F00\u53D1"]}),(0,_.jsx)(i.Z,{lang:"tsx",children:t.texts[2].value})]})})})})}n.default=a},91624:function(o,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:"\u884C\u4E3A\u9A71\u52A8\u5F00\u53D1\uFF08BDD\uFF09\u7684\u65B9\u5F0F\u6765\u7F16\u5199\u548C\u8FD0\u884C\u6D4B\u8BD5",paraId:0},{value:`/**
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

`,paraId:1,tocIndex:1},{value:`/**
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

`,paraId:2,tocIndex:2}]}}]);
