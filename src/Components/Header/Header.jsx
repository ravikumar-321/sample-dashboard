import React from "react";
import "./Header.scss";
import { CgMenuLeftAlt } from "react-icons/cg";
import { ColorBox } from "..";

export const Header = ({ toggle }) => {
  return (
    <div className="Header">
      <div className="d-flex">
        <div className="humberger">
          <CgMenuLeftAlt onClick={toggle} size={25} />
        </div>
        <h4 className="ml-2 text-muted">Dashboard</h4>
      </div>
      <div className="d-flex">
        <ColorBox />
      </div>
    </div>
  );
};
