import React from 'react';
import { Path } from '@/constants/path';
import { SignInLayout } from '@/components/layouts/sign-in-layout';
import { Navigate } from 'react-router-dom';
import { AppLayout } from '@/components/layouts/app-layout';
import { DashBoard } from '@/apps/vcpx/pages/dashboard';
import { menus } from './menus';

const IS_INDEX_JSX = true;

export const routes = (mode, setMode) => [
  {
    path: Path.SIGN_IN,
    element: <SignInLayout />,
    children: [
      {
        index: true,
        element: <div>회원가입</div>,
        IS_INDEX_JSX,
      },
      {
        path: Path.SIGN_IN_FORGOT_PASSWORD,
        element: <div>비밀번호 찾기</div>,
        IS_INDEX_JSX,
      },
    ],
  },
  {
    path: Path.ERROR,
    children: [
      {
        path: Path.NOT_FOUND_ERROR,
        element: <div>페이지를 찾을 수 없는 에러페이지</div>,
      },
      { path: Path.SERVER_ERROR, element: <div>서버에러페이지</div> },
    ],
  },
  {
    path: Path.HELP,
    element: <SignInLayout />,
    children: [
      {
        index: true,
        element: <div>무엇을 도와드리지?</div>,
      },
      {
        path: Path.HELP_PASSWORD_CHANGE,
        element: <div>비밀번호 변경</div>,
        IS_INDEX_JSX,
      },
      {
        path: Path.HELP_SERVER_ERROR,
        element: <div>서버 에러페이지</div>,
      },
    ],
  },
  {
    path: '/',
    element: <AppLayout menuData={menus} mode={mode} setMode={setMode} />,
    errorElement: <div>에러페이지</div>,
    children: [
      {
        index: true,
        element: <Navigate to={Path.DASHBOARD} replace />,
      },
      {
        path: Path.DASHBOARD,
        element: <DashBoard />,
        IS_INDEX_JSX,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={Path.NOT_FOUND_ERROR} replace />,
  },
];
