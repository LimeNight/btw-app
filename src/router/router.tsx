import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router";
import App from "../App";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import CarPreview from "../components/pages/CarPreview";
import Service from "../components/pages/Service";
import Cars from "../components/pages/Cars";
import Profile from "../components/Profile";
import ProtectedRoute from "../components/shared/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/service",
                element: <Service />,
            },
            {
                path: "/cars",
                element: <Cars />,
            },
            {
                path: "/cars/:id",
                element: <CarPreview />
            },
            {
                path: "/profile/:_id",
                element: <ProtectedRoute children={<Profile />}/>
            }
        ]
    },
    {
        path: "/*",
        element: <Navigate to="/"/>,
    }
])

export default router