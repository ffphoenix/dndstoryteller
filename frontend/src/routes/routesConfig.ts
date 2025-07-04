import Layout from "../layouts/Layout";
import type {RouteObject} from "./roterCustomTypes";
import loginRoute from "../pages/auth/login/loginRoute";
import GuestLayout from "../layouts/GuestLayout";
import {redirect} from "react-router-dom";

const routes: RouteObject[] = [
    {
        path: '/',
        loader() {
            const user = sessionStorage.getItem('user');
            if (!user) {
                return redirect('/auth/login');
            } else {
                return { user };
            }
        },
        Component: Layout,
        children: [
            {
                path: '/',
                visibleOnSidebar: true
            }
        ]
    },
    {
        path: 'auth',
        Component: GuestLayout,
        children: [
            loginRoute
        ]
    }
];
export default routes;