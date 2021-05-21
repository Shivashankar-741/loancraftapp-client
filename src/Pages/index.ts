import { lazy } from 'react';

export const routePages = [
  { path: '/dashboard', component: lazy(() => import('./Dashboard/Dashboard.page')) },
  { path: '/newloan', component: lazy(() => import('./Newloan/Newloan.page')) },
  { path: '/inprogress', component: lazy(() => import('./Inprogress/Inprogress.page')) },
  { path: '/completed', component: lazy(() => import('./Completed/Completed.page')) },
  { path: '/payinterest', component: lazy(() => import('./Payinterest/Payinterest.page')) },
  { path: '/interesthistory', component: lazy(() => import('./Interesthistory/interesthistory.page')) },
];
