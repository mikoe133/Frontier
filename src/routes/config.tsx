import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('@/components/layout/Layout'));
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Index = lazy(() => import('@/pages/App'));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />
            },
        ],
    },
];

export default routes;
