import ReactECharts from "echarts-for-react";

interface lineChartInterface {
  gas: string;
  title: string;
  textColor: string;
  tooltipBackground: string;
  tooltipUnit: string;
  labelText: string;
  lineColor: string;
  lineData: number[];
  xAxis: string[];
}

export default function LineChart({
  gas,
  title,
  textColor,
  tooltipBackground,
  tooltipUnit,
  labelText,
  lineColor,
  lineData,
  xAxis,
}: lineChartInterface) {
  const option = {
    title: {
      text: title,
      left: "center",
      textStyle: { color: textColor, fontSize: 14 },
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: tooltipBackground,
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: xAxis,
      axisLabel: { color: textColor },
    },
    yAxis: {
      type: "value",
      name: labelText,
      splitLine: { lineStyle: { type: "dashed" } },
      axisLabel: { color: textColor },
      nameTextStyle: { color: textColor, align: "left", padding: [0, 0, 10, -50] },
    },
    series: [
      {
        name: gas,
        type: "line",
        data: lineData,
        smooth: true,
        showSymbol: true,
        itemStyle: {
          color: lineColor}
        ,
        symbolStyle: {color: lineColor},
        lineStyle: { color: lineColor, width: 2 },
        tooltip: {
          valueFormatter: (value: any) => value + ` ${tooltipUnit}`,
        },
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "100%", width: "100%" }}
      notMerge={true}
    />
  );
}
