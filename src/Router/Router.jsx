
import Root from "../Root/Root";

import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";

 const  Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children:[
                {path:'/',
                element: <Home />},

        ]
    }
])

export default Router