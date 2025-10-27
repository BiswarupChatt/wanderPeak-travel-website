import { useRoutes } from 'react-router-dom';
import MainLayout from '../layout/mainlayout/MainLayout';
import AuthLayout from '../layout/authLayout/AuthLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '', element: <Home /> },
                { path: 'about', element: <About /> },
                {path: '*', element: <NotFound />}
            ],
        },
        {
            path: '/auth',
            element: <AuthLayout />,
            children: [
                { path: 'login', element: <Login /> },
            ],
        },
    ]);

    return routes;
}
