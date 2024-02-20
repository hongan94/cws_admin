import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Admin from "../pages/admin";

function RouterDefine(){
  return(
    <Routes>
      <Route path="/dashboards" element={<Dashboard />} />
      <Route path="/admins" element={<Admin />} />
    </Routes>
  )
}

export default RouterDefine;
