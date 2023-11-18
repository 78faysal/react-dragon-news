import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import NewsDetail from "../Pages/Home/NewsDetail";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/news.json')
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetail /></PrivateRoute>
            }
        ]
    }
])

export default routes;