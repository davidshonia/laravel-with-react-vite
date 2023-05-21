import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {ContextPrivder} from "./contexts/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContextPrivder>
            <RouterProvider router={router}/>
        </ContextPrivder>
    </React.StrictMode>,
)
