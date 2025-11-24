import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import appRoutes from "./routes";

const router = () => {
  return (
    <BrowserRouter>
        <Routes>
            {appRoutes.map((route, idx)=>(
                <Route key={idx} path={route.path} element={route.element}/>
            ))}
        </Routes>
    </BrowserRouter>
  )
}

export default router