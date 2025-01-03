
import React from "react"
import ReactDOM from "react-dom/client"
import logo from "../logo.jpg"
import Appcss from "../App.css"
import Header from '../components/Header'
import Body from "../components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "../components/About"
import Contact from "../components/Contact"
import ErrorHandler from "../components/ErrorHandler";
import RestaurantMenu from "../components/RestaurantMenu"

const App = ()=> {
    return (<div><Header/>
    <Outlet/></div>)
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <ErrorHandler/>,
        children: [    
            {
                path:"/",
                element: <Body/>
                },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantMenu/>
            },
        ]
    },


])
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}></RouterProvider>)