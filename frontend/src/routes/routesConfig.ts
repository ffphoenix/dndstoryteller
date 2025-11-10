import Layout from "../layouts/Layout";
import type {RouteObject} from "./roterCustomTypes";
import loginRoute from "../pages/auth/login/loginRoute";
import GuestLayout from "../layouts/GuestLayout";
import {redirect} from "react-router-dom";
import isUserLoggedIn from '../data/users/reducers/isUserLoggedIn';
import getCurrentUser from '../data/users/actions/getCurrentUser';

const routes: RouteObject[] = [
    {
        path: '/',
        loader() {
            if (!localStorage.getItem('auth-token')) {
                return redirect('/auth/login');
            }
            return null;
        },
        Component: Layout,
        children: [
            {
                path: '/',
                visibleOnSidebar: true
            }
        ]
    } as RouteObject,
    {
        path: 'auth',
        loader() {
          if (localStorage.getItem('auth-token')) {
            return redirect('/');
          }
          return null;
        },
        Component: GuestLayout,
        children: [
            loginRoute
        ]
    }
];
export default routes;