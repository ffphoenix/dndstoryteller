import * as React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routesConfig from "./routes/routesConfig";

export default () => {
    const router = createBrowserRouter(routesConfig);
    console.log('print app');
    return <RouterProvider router={router} />
}
