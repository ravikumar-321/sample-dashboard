import React, { useContext } from "react";
import "./Sidebar.scss";
import { RiDashboardLine } from "react-icons/ri";
import { sidebarItems } from "./sidebarItems";
import { themeContext } from "../../Context/themeContext";

const showSidebar = sidebarItems.map((item, key) => {
  return <li key={item.key}>{item.icon}</li>;
});

export const Sidebar = () => {
  const [theme] = useContext(themeContext);
  return (
    <div className="Sidebar" style={{ background: theme }}>
      <div className="logo">
        <RiDashboardLine size={22} />
      </div>
      <div className="sidebar-items">{showSidebar}</div>
    </div>
  );
};
