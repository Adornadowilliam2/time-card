import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import Admin from "./pages/Admin";
import ForgotPassword from "./pages/ForgotPassword";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/admin",
            element: <Admin />,
        },
        {
            path: "/forgotpass",
            element: <ForgotPassword />,
        },
       
   
    ]);

    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;