import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FaUsers } from "react-icons/fa6";

import { BiSolidPurchaseTagAlt } from "react-icons/bi";

import { AiOutlineStock } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { FaProductHunt, FaTruck, FaUser } from "react-icons/fa";

import { FaCogs, FaDollarSign } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { MdCategory, MdDashboard } from "react-icons/md";
import { RiCouponFill, RiLogoutBoxLine } from "react-icons/ri";

import { FiMenu } from "react-icons/fi";
import { RiMenuUnfold4Line } from "react-icons/ri";

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    } else {
      navigate("/"); // Redirect if no token
    }
  }, [navigate]);

  const handleLogout = () => {
    const logoutConfirm = window.confirm("Are you sure you want to logout?");
    if (logoutConfirm) {
      alert("Logout Successfully.");
      localStorage.removeItem("token");
      setIsLogin(false);
      navigate("/");
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  if (!isLogin) {
    return null; // Don't render sidebar if user isn't logged in
  }

  const links = [
    { to: "/dashboard", text: "Dashboard", icon: <MdDashboard /> },
    { to: "/referral", text: "Referral", icon: <FaProductHunt /> },
    { to: "/purchase", text: "Purchase", icon: <BiSolidPurchaseTagAlt /> },
    { to: "/users", text: "Users", icon: <FaUsers /> },
    { to: "/products", text: "Products", icon: <BiSolidPurchaseTagAlt /> },
    { to: "/payment", text: "Payments", icon: <IoWalletOutline /> },
    { to: "/orders", text: "Orders", icon: <FaTruck /> },
    { to: "/category", text: "Category", icon: <MdCategory /> },
    { to: "/coupons", text: "Coupons", icon: <RiCouponFill /> },
    { to: "/finance", text: "Finance", icon: <FaDollarSign /> },
    { to: "/analatics", text: "Analytics", icon: <BsGraphUp /> },
    { to: "/support", text: "Support", icon: <BiSupport /> },
    { to: "/inventory", text: "Inventory", icon: <AiOutlineStock /> },
    { to: "/profile", text: "Profile", icon: <FaUser /> },
    { to: "/settings", text: "Settings", icon: <FaCogs /> },
    {
      to: "/",
      text: "Logout",
      icon: <RiLogoutBoxLine />,
      action: handleLogout,
    },
  ];

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: isCollapsed ? 70 : 275,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isCollapsed ? 70 : 275,
            boxSizing: "border-box",
            backgroundColor: "#f5f5f5",
            // width: "280px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isCollapsed ? "center" : "space-between",
            p: 2,
            backgroundColor: "#ffffff",
            color: "#fff",
          }}
        >
          <IconButton onClick={toggleSidebar}>
            {isCollapsed ? (
              <FiMenu />
            ) : (
              <RiMenuUnfold4Line className="text-md" />
            )}
          </IconButton>
          <span
            style={{
              fontSize: isCollapsed ? "0" : "1.2rem",
              fontWeight: "bold",
              color: "#1976D2",
              textAlign: "start",
            }}
          >
            OurMacroLifeMLM
          </span>
        </Box>
        <List>
          {links.map((link, index) => (
            <ListItem
              button
              key={index}
              onClick={link.action || undefined}
              component={link.to ? NavLink : "button"}
              to={link.to || undefined}
              sx={{
                "&.active": { backgroundColor: "#e3f2fd" },
                justifyContent: isCollapsed ? "center" : "flex-start",
              }}
            >
              <ListItemIcon
                sx={{
                  color: "gray",
                  fontSize: "18px",
                  justifyContent: "center",
                }}
              >
                {link.icon}
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary={link.text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
