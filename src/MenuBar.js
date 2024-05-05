import { useEffect, useRef, useState } from "react";
// import { FaChartPie, FaCube, FaCaretDown } from "react-icons/fa";
import {
  FaChartPie,
  FaCube,
  FaCaretDown,
  FaBars,
  FaEllipsisV,
} from "react-icons/fa";
import Map from "./Map";
import Worldmap from "./Worldmap";
import pie from "./pie.png";
import torch from "./torchlight.png";
import vector from "./vector.png";
import heart from "./heart.png";

function MenuBar() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showComponentsDropdown, setShowComponentsDropdown] = useState(false);
  const [showFormsDropdown, setShowFormssDropdown] = useState(false);
  const [tables, setTables] = useState(false);
  const [maps, setMaps] = useState(false);
  const [pages, setPages] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleComponentsDropdown = (e) => {
    e.preventDefault();
    setShowComponentsDropdown(!showComponentsDropdown);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  const toggleFormsDropdown = (e) => {
    e.preventDefault();
    setShowFormssDropdown(!showFormsDropdown);
  };
  const toggleTables = (e) => {
    e.preventDefault();
    setTables(!tables);
  };
  const toggleMaps = (e) => {
    e.preventDefault();
    setMaps(!maps);
  };
  const togglePages = (e) => {
    e.preventDefault();
    setPages(!pages);
  };

  return (
    <div className="main">
      {/* <div className="sidebar"> */}
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="bar">
          <div className="header">
            <span className="spa">CT CREATIVETIM</span>
            {/* <span> </span> */}
          </div>
          <div className="second">
            <div className="image">
              <img
                src="https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/default-avatar.png"
                alt=" "
              />
            </div>
            <div className="details">
              <div className="profile-dropdown">
                <a className="adc" href="/#" onClick={toggleProfileDropdown}>
                  <span>Tania Andrew</span>
                  <FaCaretDown className="dropdown-arrow" />
                </a>
                {showProfileDropdown && (
                  // <div className="show">
                  <ul className="nav">
                    <li>
                      <a href="!#">
                        <span className="one">MP</span>
                        <span className="two">My profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <span className="one">EP</span>
                        <span className="two">Edit Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="!#">
                        <span className="one">S</span>
                        <span className="two">Settings</span>
                      </a>
                    </li>
                  </ul>
                  // </div>
                )}
              </div>
              <ul className="nav">
                <li className="sub">
                  <a href="/" className="nava">
                    <p>
                      <i class="fa-solid fa-chart-pie icon"></i>DASHBOARD
                    </p>
                  </a>
                </li>
                <li className="sub">
                  <a
                    href="/"
                    // className="nava"
                    className="dropdown-toggle"
                    onClick={toggleComponentsDropdown}
                  >
                    <p>
                      <i class="fa-solid fa-cube icon"></i>COMPONENTS
                      <FaCaretDown className="dropdown-arrow" />
                    </p>
                    {/* <b></b> */}
                  </a>
                  {showComponentsDropdown && (
                    <ul className="nav">
                      {/* <li className="sub"> */}
                      <div className="show">
                        {/* <ul className="nav"> */}
                        <li>
                          <a href="/" className="nava">
                            <span className="one">B</span>
                            <span className="two"> Buttons</span>
                          </a>
                        </li>

                        <li>
                          <a href="/" className="nava">
                            <span className="one">GS</span>
                            <span className="two">Grid System</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">P</span>
                            <span className="two">Panels</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">SA</span>
                            <span className="two">Sweet Alert</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">N</span>
                            <span className="two">Notifications</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">I</span>
                            <span className="two">Icons</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">T</span>
                            <span className="two">Typograpghy</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>
                <li className="sub">
                  <a
                    href="/"
                    className="dropdown-toggle"
                    onClick={toggleFormsDropdown}
                  >
                    <p>
                      <i class="fa-solid fa-clipboard icon"></i>
                      FORMS
                    </p>
                  </a>
                  {showFormsDropdown && (
                    <ul className="nav">
                      <div className="show">
                        <li>
                          <a href="/" className="nava">
                            <span className="one">BF</span>
                            <span className="two"> Regular Forms</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">EF</span>
                            <span className="two"> Extended Forms</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">VF</span>
                            <span className="two"> Validation</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">W</span>
                            <span className="two"> Wizard</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>
                <li className="sub">
                  <a
                    href="/"
                    className="dropdown-toggle"
                    onClick={toggleTables}
                  >
                    <p>
                      <i class="fa-solid fa-newspaper icon"></i>
                      TABLES
                    </p>
                  </a>
                  {tables && (
                    <ul className="nav">
                      <div className="show">
                        <li>
                          <a href="/" className="nava">
                            <span className="one">RT</span>
                            <span className="two"> Regular Tables</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">ET</span>
                            <span className="two"> Extended Tables</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">BT</span>
                            <span className="two"> Bootstrap Tables</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">DT</span>
                            <span className="two">DataTables.Net</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>
                <li className="sub">
                  <a href="/" className="dropdown-toggle" onClick={toggleMaps}>
                    <p>
                      <i class="fa-solid fa-location-dot icon"></i>
                      MAPS
                    </p>
                  </a>
                  {maps && (
                    <ul className="nav">
                      <div className="show">
                        <li>
                          <a href="/" className="nava">
                            <span className="one">GM</span>
                            <span className="two"> Google Maps</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">VM</span>
                            <span className="two"> Vector Maps</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">FSM</span>
                            <span className="two"> Full Screen Map</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>
                <li className="sub">
                  <a href="/" className="dropdown-toggle">
                    <p>
                      <i class="fa-solid fa-chart-column icon"></i>
                      CHARTS
                    </p>
                  </a>
                </li>
                <li className="sub">
                  <a href="/" className="dropdown-toggle">
                    <p>
                      <i class="fa-solid fa-calendar-days icon"></i>
                      CALENDER
                    </p>
                  </a>
                </li>

                <li className="sub">
                  <a href="/" className="dropdown-toggle" onClick={togglePages}>
                    <p>
                      <i class="fa-solid fa-puzzle-piece icon"></i>
                      PAGES
                    </p>
                  </a>
                  {pages && (
                    <ul className="nav">
                      <div className="show">
                        <li>
                          <a href="/" className="nava">
                            <span className="one">LP</span>
                            <span className="two"> Google Maps</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">RP</span>
                            <span className="two"> Register Page</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">LSP</span>
                            <span className="two"> Lock Screen Page</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">UP</span>
                            <span className="two"> User Page</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" className="nava">
                            <span className="one">MCS</span>
                            <span className="two"> More Coming Soon</span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>
              </ul>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* <div className="background">
          <img
            src="background-image: url(../assets/img/sidebar-5.jpg) "
            alt="imego"
          />
        </div> */}
      </div>
      <div
        className={`panel ${showSidebar ? "sidebar-open" : "sidebar-closed"}`}
      >
        {/* <div
          className={`panel ${showSidebar ? "sidebar-open" : "sidebar-closed"}`}
        > */}
        <div className="navbar">
          <div className="hamburger-toggle">
            <div className="move">
              <div className="mini" onClick={toggleSidebar}>
                {showSidebar ? (
                  <FaEllipsisV className="round" />
                ) : (
                  <FaBars className="round" />
                )}
              </div>
              <a href="/" className="dash">
                Dashboard PRO
              </a>
              <i class="fa-solid fa-magnifying-glass search"></i>
              <input type="text" className="inp" placeholder="Search..." />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="num">
                <img src={pie} alt="pie" className="pie" />
                <p className="number">
                  Number
                  <br />
                  <h4>150GB</h4>
                </p>
                <div className="footer">
                  <hr />
                  <div>
                    <i
                      class="fa-solid fa-arrows-rotate icon2"
                      // style={{"color: #dbdbdb"}}
                    ></i>
                    Update now
                  </div>
                </div>
              </div>
              <div className="num">
                <img src={torch} alt="pie" className="pie" />
                <p className="number">
                  Revenue
                  <br />
                  <h4>$ 1,345</h4>
                </p>
                <div className="footer">
                  <hr />
                  <div>
                    <i class="fa-regular fa-calendar icon2"></i>
                    Last day
                  </div>
                </div>
              </div>
              <div className="num">
                <img src={vector} alt="pie" className="pie" />
                <p className="number">
                  Errors
                  <br />
                  <h4> 23</h4>
                </p>
                <div className="footer">
                  <hr />
                  <div>
                    <i class="fa-regular fa-clock icon2"></i>
                    In the last hour
                  </div>
                </div>
              </div>
              <div className="num">
                <img src={heart} alt="pie" className="pie" />
                <p className="number">
                  Followers
                  <br />
                  <h4>+45K</h4>
                </p>
                <div className="footer">
                  <hr />
                  <div>
                    <i
                      class="fa-solid fa-arrows-rotate icon2"
                      // style={{"color: #dbdbdb"}}
                    ></i>
                    Update now
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inside">
                <div className="top">
                  <div className="top-head">
                    <h5 className="fir">Global Sales by Top Locations</h5>
                    <p className="sec">All Products that were shipped</p>
                  </div>
                </div>
                <div className="matter">
                  <div className="tech">
                    <div className="left">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                className="count"
                                src="https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/flags/US.png"
                                alt=""
                              />
                            </td>
                            <td>USA</td>
                            <td>2.920</td>
                            <td>53.23%</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="count"
                                src="https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/flags/US.png"
                                alt=""
                              />
                            </td>
                            <td>USA</td>
                            <td>2.920</td>
                            <td>53.23%</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="count"
                                src="https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/flags/US.png"
                                alt=""
                              />
                            </td>
                            <td>USA</td>
                            <td>2.920</td>
                            <td>53.23%</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="count"
                                src="https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/flags/US.png"
                                alt=""
                              />
                            </td>
                            <td>USA</td>
                            <td>2.920</td>
                            <td>53.23%</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="count"
                                src="https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/flags/US.png"
                                alt=""
                              />
                            </td>
                            <td>USA</td>
                            <td>2.920</td>
                            <td>53.23%</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="count"
                                src="https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/flags/US.png"
                                alt=""
                              />
                            </td>
                            <td>USA</td>
                            <td>2.920</td>
                            <td>53.23%</td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                className="count"
                                src="https://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/flags/US.png"
                                alt=""
                              />
                            </td>
                            <td>USA</td>
                            <td>2.920</td>
                            <td>53.23%</td>
                          </tr>
                          <tr></tr>
                          <tr></tr>
                          <tr></tr>
                          <tr></tr>
                          <tr></tr>
                        </tbody>
                      </table>
                    </div>
                    {/* <div className="right"> */}
                    <div className="map">
                      <div className="jvectormap-container">
                        <Worldmap />
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="teja">
          <div className="col-md-12">saiteja</div>
        </div> */}

        {/* </div> */}
      </div>
    </div>
  );
}

export default MenuBar;
