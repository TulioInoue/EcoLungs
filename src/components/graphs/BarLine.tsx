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
      left: "center", // Alinhamento horizontal
      textStyle: {
        color: textColor,
        fontSize: 14,
      },
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: tooltipBackground, // Cor de fundo (escuro com transparência)
      textStyle: {
        color: "#fff", // Cor do texto dentro do tooltip
      },
      axisPointer: {
        type: "cross",
        label: { backgroundColor: "#6a7985" }, // Cor da etiqueta que segue o mouse nos eixos
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
        axisLabel: { formatter: `{value} ${barTooltipUnit}`, color: textColor  },
        nameTextStyle: { color: textColor }, // Cor do nome do eixo
      },
      {
        type: "value",
        name: `${lineTooltipName} ${lineTooltipUnit ? `(${lineTooltipUnit})` : ""}`,
        axisLabel: { formatter: `{value} ${lineTooltipUnit}`, color: textColor },
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
        itemStyle: { color: lineColor },
        lineStyle: { width: 3 },
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
