import React, { useState } from "react";

import {
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaHome,
  FaGlobe,
  FaMoneyCheck,
  FaAngleDoubleLeft,
} from "react-icons/fa";
import { useDispatch} from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Action/authAction";

const Sidebar = ({ children }) => {
  const token = localStorage.getItem("token");
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuItem = [
    {
      path: "/home",
      name: "home",
      icon: <FaHome />,
      
    },
    {
      path: "/login",
      name: "login",
      icon: <FaGlobe />,
    },
    {
      path: "/register",
      name: "register",
      icon: <FaMoneyCheck />,
    },
    {
      path: "/Profile",
      name: "profile",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
    {
      path:"/home",
      name:"Logout",
      icon:<FaAngleDoubleLeft onClick={() => {
        dispatch(logout());
        navigate("/home");
      }}/>
    }
  ];
  return (
    <div className="container" >
      <div
        style={{ width: isOpen ? "250px" : "50px"}}
        className="sidebar"
      >
         
        <div className="top_section">
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
           activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="main">
          {children}</main>
    </div>
  );
};

export default Sidebar;