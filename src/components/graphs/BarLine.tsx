import ReactECharts from "echarts-for-react";

interface barChartInterface {
  title: string;
  xAxis: string[];
  barData: string[];
  lineData: string[];
  barColor: string;
  lineColor: string;
  barTooltipName: string;
  lineTooltipName: string;
  textColor: string;
  tooltipBackground: string;
  barTooltipUnit?: string;
  lineTooltipUnit?: string;
}

export default function BarLineChart({
  title,
  xAxis,
  barData,
  lineData,
  barColor,
  lineColor,
  barTooltipName,
  lineTooltipName,
  textColor,
  tooltipBackground,
  barTooltipUnit = "",
  lineTooltipUnit = "",
}: barChartInterface) {
  const option = {
    title: {
      text: title,
      left: "center",
      textStyle: {
        color: textColor,
        fontSize: 14,
      },
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: tooltipBackground,
      textStyle: {
        color: "#fff",
      },
      axisPointer: {
        type: "cross",
        label: { backgroundColor: "#6a7985" },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: xAxis,
        axisPointer: { type: "shadow" },
        axisLabel: { color: textColor }
      },
    ],
    yAxis: [
      {
        type: "value",
        name: `${barTooltipName} ${barTooltipUnit ? `(${barTooltipUnit})` : ""}`,
        axisLabel: { color: textColor  },
        nameTextStyle: { color: textColor },
      },
      {
        type: "value",
        name: `${lineTooltipName} ${lineTooltipUnit ? `(${lineTooltipUnit})` : ""}`,
        axisLabel: { color: textColor },
        nameTextStyle: { color: textColor }
      },
    ],
    series: [
      {
        name: barTooltipName,
        type: "bar",
        data: barData,
        itemStyle: { color: barColor },
        tooltip: {
          valueFormatter: (value: any) => value + ` ${barTooltipUnit}`,
        },
      },
      {
        name: lineTooltipName,
        type: "line",
        yAxisIndex: 1,
        data: lineData,
        itemStyle: { color: lineColor, width: 3 },
        tooltip: {
          valueFormatter: (value: any) => value + ` ${lineTooltipUnit}`,
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
}
