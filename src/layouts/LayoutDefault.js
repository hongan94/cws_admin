import React from "react";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import RouterDefine from "../routers/RouterDefine";
import { BrowserRouter as Router } from "react-router-dom";

function DefaultLayout(){
  return(
   <div className="sidebar-mini skin-green" style={{height: 'auto'}}>
      <div className="wrapper" style={{height: 'auto'}}>
        <Router>
          <Header></Header>
          <Sidebar></Sidebar>
          <div className="content-wrapper">
            <section className="content-header"></section>
            <section className="content"><RouterDefine /></section>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default DefaultLayout;