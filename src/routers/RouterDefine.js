import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import AdminList from "../pages/admins/AdminList";
import AdminEdit from "../pages/admins/AdminEdit";
import AdminNew from "../pages/admins/AdminNew";

function RouterDefine(){
  return(
    <Routes>
      <Route path="/dashboards" element={<Dashboard />} />
      <Route path="/admins" element={<AdminList />} />
      <Route path="/admin/:id/edit" element={<AdminEdit />} />
      <Route path="/admin/new" element={<AdminNew />} />
    </Routes>
  )
}

export default RouterDefine;
