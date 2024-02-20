import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){
  return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul
            className="sidebar-menu tree"
            data-widget="tree"
            role="menu"
            data-accordion="true"
          >
            <li className="treeview">
              <Link to="/dashboards">
                <i className="fa fa-plus-square"></i>
                <span>&nbsp;Dashboard</span>
              </Link>
            </li>
            <li className="treeview">
              <Link to="/admins">
                <i className="fa fa-plus-square"></i>
                <span>&nbsp;Admin</span>
              </Link>
            </li>
          </ul>
        </section>
      </aside>
  );
}
export default Sidebar;
