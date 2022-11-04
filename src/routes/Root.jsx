import { Fragment } from "react";
import "../assets/style/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/error/Error";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
]);

export default function Root() {
    return (
        <Fragment>
            <RouterProvider router={router} />
        </Fragment>
    );
}
