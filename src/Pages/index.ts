import { lazy } from 'react';

export const routePages = [
  // { path: '/', component: lazy(() => import('./Dashboard/Dashboard.page')) },
  { path: '/', component: lazy(() => import('./Newloan/Newloan.page')) },
  { path: '/newloan', component: lazy(() => import('./Newloan/Newloan.page')) },
  { path: '/inprogress', component: lazy(() => import('./Inprogress/Inprogress.page')) },
  { path: '/completed', component: lazy(() => import('./Completed/Completed.page')) },
  { path: '/payinterest', component: lazy(() => import('./Payinterest/Payinterest.page')) },
  // { path: '/interesthistory', component: lazy(() => import('./Interesthistory/Interesthistory.page'))},
  { path: '/auth', component: lazy(() => import('./Auth/Auth.page')) },
];
