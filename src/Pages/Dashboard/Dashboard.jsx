import React, { useContext } from "react";
import "./Dashboard.scss";
import { themeContext } from "../../Context/themeContext";
import { Chart } from "../../Components/";

export const Dashboard = () => {
  const [theme] = useContext(themeContext);
  return (
    <div className="dashboard">
      <div className="chart-main">
        <Chart type={"line"} color={theme} />
        <Chart type={"bar"} color={theme} barWidth="40%" />
      </div>
    </div>
  );
};
