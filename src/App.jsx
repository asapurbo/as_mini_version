// dependencies
import CoursePlayer from './components/pages/studentPages/CoursePlayer';
import SLogin from './components/pages/studentPages/Login';
import Registration from './components/pages/studentPages/Registration';
import LeaderBoard from './components/pages/studentPages/LeaderBoard';
import Quiz from './components/pages/studentPages/Quiz';
import ALogin from './components/pages/adminPages/Login';
import _Videos from './components/pages/adminPages/_Videos';
import Assingnment from './components/pages/adminPages/Assingnment';
import AssingnmentMark from './components/pages/adminPages/AssingnmentMark';
import Dashboard from './components/pages/adminPages/Dashboard';
import Quizzes from './components/pages/adminPages/Quizzes';
import ARoot from './components/root/layouts/ARoot';

// react-router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SRoot from './components/root/layouts/SRoot';

const router = createBrowserRouter([
    // student router start
    {
        path: '/',
        element: <SLogin />,
    },
    {
        path: '/registration',
        element: <Registration />,
    },
    // nav same
    {
        element: <SRoot />,
        children: [
            {
                path: '/leader-board',
                element: <LeaderBoard />,
            },
            {
                path: '/course-player',
                element: <CoursePlayer />,
            },
        ],
    },
    {
        path: '/quiz',
        element: <Quiz />,
    },
    // student router end

    // admin router start
    {
        path: '/admin',
        element: <ALogin />,
    },
    // same nav
    {
        element: <ARoot />,
        children: [
            {
                path: '/admin/videos',
                element: <_Videos />,
            },
            {
                path: '/admin/assingnment',
                element: <Assingnment />,
            },
            {
                path: '/admin/assingnment-mark',
                element: <AssingnmentMark />,
            },
            {
                path: '/admin/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/admin/quizzes',
                element: <Quizzes />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
