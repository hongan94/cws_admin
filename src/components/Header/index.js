import React from "react";

function Header() {
  return (
    <header className="main-header">
      <a href="/admin" className="logo bgrgb-bluel active">
        <span className="logo-mini">
          <b>
            <img
              src="/uploads/202312/51/161805-41896113.png"
              width="32"
              height="32"
            ></img>
          </b>
        </span>
        <span className="logo-lg">
          <img
            src="/uploads/202312/51/161805-41896113.png"
            width="32"
            height="32"
          ></img>
          <b> Dashboard</b>
        </span>
      </a>
      <nav className="navbar navbar-static-top bgrgb-blue">
        <a
          href="#"
          className="sidebar-toggle"
          data-toggle="offcanvas"
          role="button"
        >
          <span className="sr-only">Toggle navigation</span>
        </a>
        <a className="navbar-brand active" target="_blank" href="/">
          <i className="fa fa-globe "></i> Website
        </a>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="">
              <a
                href="#"
                data-toggle="modal"
                aria-expanded="true"
                data-target="#exampleModal"
              >
                <i className="fa fa-qrcode" aria-hidden="true"></i>
              </a>
            </li>
            <li className="">
              <a href="/admin/profiles/16">
                <i className="fa fa-user"></i>
                <span className="hidden-xs">Hello: Thế giới giặt zily</span>
              </a>
            </li>
            <li className="">
              <a href="/logout/admin" className="bolder">
                <i className="fa fa-power-off"></i>
                <span className="hidden-xs">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
