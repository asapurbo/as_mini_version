// dependencies
import CoursePlayer from './components/pages/studentPages/CoursePlayer';
import SLogin from './components/pages/studentPages/Login';
import Registration from './components/pages/studentPages/Registration';
import LeaderBoard from './components/pages/studentPages/LeaderBoard';
import Quiz from './components/pages/studentPages/Quiz';
import ALogin from './components/pages/adminPages/Login';
import _Videos from './components/pages/adminPages/_Videos';
import Assingnment from './components/pages/adminPages/Assingnment';
import AssingnmentSt from './components/pages/studentPages/Assingnment';
import AssingnmentMark from './components/pages/adminPages/AssingnmentMark';
import Dashboard from './components/pages/adminPages/Dashboard';
import Quizzes from './components/pages/adminPages/Quizzes';
import ARoot from './components/root/layouts/ARoot';

// react-router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SRoot from './components/root/layouts/SRoot';
import useAuth from './hook/useAuth';
import Public from './utils/Public';
import Private from './utils/Private';

const router = createBrowserRouter([
    // student router start
    {
        path: '/',
        element: (
            <Public>
                <SLogin />
            </Public>
        ),
    },
    {
        path: '/registration',
        element: (
            <Public>
                <Registration />
            </Public>
        ),
    },
    {
        path: '/assingnment/:assingnmentId',
        element: (
            <Private>
                <AssingnmentSt />
            </Private>
        ),
    },
    // nav same
    {
        element: (
            <Private>
                <SRoot />
            </Private>
        ),
        children: [
            {
                path: '/leader-board',
                element: (
                    <Private>
                        <LeaderBoard />
                    </Private>
                ),
            },
            {
                path: '/course-player',
                element: (
                    <Private>
                        <CoursePlayer />
                    </Private>
                ),
            },
        ],
    },
    {
        path: '/quiz/:videoId',
        element: (
            <Private>
                <Quiz />
            </Private>
        ),
    },
    // student router end

    // admin router start
    {
        path: '/admin',
        element: (
            <Private>
                <ALogin />
            </Private>
        ),
    },
    // same nav
    {
        element: (
            <Private>
                <ARoot />
            </Private>
        ),
        children: [
            {
                path: '/admin/videos',
                element: (
                    <Private>
                        <_Videos />
                    </Private>
                ),
            },
            {
                path: '/admin/assingnment',
                element: (
                    <Private>
                        <Assingnment />
                    </Private>
                ),
            },
            {
                path: '/admin/assingnment-mark',
                element: (
                    <Private>
                        <AssingnmentMark />
                    </Private>
                ),
            },
            {
                path: '/admin/dashboard',
                element: (
                    <Private>
                        <Dashboard />
                    </Private>
                ),
            },
            {
                path: '/admin/quizzes',
                element: (
                    <Private>
                        <Quizzes />
                    </Private>
                ),
            },
        ],
    },
]);

const App = () => {
    return useAuth() ? <RouterProvider router={router} /> : null;
};

export default App;
