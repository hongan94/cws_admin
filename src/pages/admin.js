import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Search from "../components/Admin/Search";
import TableAdmin from "../components/Admin/TableAdmin";

function Admin(){
  return(
    <div className="admin main content">
      <Search />
      <div className="create new" style={{marginTop: '10px'}}>
        <Link to="/admin/new" className= "btn btn-sm btn-success">Thêm</Link>
      </div>
      <TableAdmin />
    </div>
  )
}

export default Admin;