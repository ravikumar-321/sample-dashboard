import React, { useContext } from "react";
import "./ColorBox.scss";
import { FaCheck } from "react-icons/fa";
import { themeContext } from "../../Context/themeContext";
import { themes } from "./themes";

export const ColorBox = () => {
  const [theme, setTheme] = useContext(themeContext);

  const setColorTheme = (color) => setTheme(color);

  const showColors = themes.map(({ color, key }) => (
    <div
      key={key}
      style={{ background: color }}
      className="color-box"
      onClick={() => setColorTheme(color)}
    >
      {theme === color && <FaCheck />}
    </div>
  ));

  return <div className="color-container">{showColors}</div>;
};

export default ColorBox;
