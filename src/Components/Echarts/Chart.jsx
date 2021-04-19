import React from "react";
import ReactEcharts from "echarts-for-react";

export const Chart = ({ type, ...rest }) => {
  const options = {
    xAxis: {
      type: "category",
      title: "Category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    tooltip: {
      trigger: "axis",
    },
    animation: true,
    textStyle: {
      fontWeight: "bold",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type,
      },
    ],
    ...rest,
  };

  return (
    <>
      <div className="chart-container">
        <ReactEcharts option={options} />
      </div>
    </>
  );
};
