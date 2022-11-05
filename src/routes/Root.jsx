import { Fragment } from "react";
import "../assets/style/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/error/Error";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import About from "../pages/about/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/services",
        element: <Services />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

export default function Root() {
    return (
        <Fragment>
            <RouterProvider router={router} />
        </Fragment>
    );
}
