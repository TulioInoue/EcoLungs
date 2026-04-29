import ReactECharts from "echarts-for-react";

interface donutChartInterface {
  data: object;
  title: string;
}

export default function DonutChart({ data, title }: donutChartInterface) {

  const option = {
    backgroundColor: "transparent",
    title: {
      text: title,
      left: "center",
      top: "0%",
      textStyle: {
        color: "#9ca3af",
        fontSize: 14,
        fontWeight: "normal",
      },
    },
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(31, 41, 55, 0.9)",
      borderColor: "#374151",
      textStyle: { color: "#fff" },
      formatter: "{b}: <b>{c}</b> ({d}%)",
    },
    legend: {
      bottom: "0%",
      left: "center",
      textStyle: { color: "#9ca3af" },
      itemWidth: 10,
      itemHeight: 10,
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "transparent",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },

        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
}
