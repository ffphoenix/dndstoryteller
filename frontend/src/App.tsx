import * as React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routesConfig from "./routes/routesConfig";
import getCurrentUser from './data/users/actions/getCurrentUser';

export default () => {
    const router = createBrowserRouter(routesConfig);
    return <RouterProvider router={router} />
}
