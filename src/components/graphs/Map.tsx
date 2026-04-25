import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import worldMap from "../../data/map.json";

if (!echarts.getMap("world")) {
  echarts.registerMap("world", worldMap as any);
}

interface MapDataItem {
  name: string;
  value: [number, number, number];
  symbolSize: string | number;
  color: string;
}

interface MapChartInterface {
  titleColor: string;
  titleText: string;
  roam: boolean;
  data: MapDataItem[];
}

export default function MapChart({
  titleColor,
  titleText,
  roam,
  data,
}: MapChartInterface) {
  const scatterData = data.map((item) => ({
    name: item.name,
    value: item.value,
    symbolSize: +item.symbolSize,
    itemStyle: {
      color: item.color,
    },
  }));

  const option = {
    backgroundColor: "transparent",
    title: {
      text: titleText,
      left: "center",
      top: "2.5%",
      textStyle: {
        color: titleColor,
        fontSize: 14,
        fontWeight: "bold",
      },
    },
    toolbox: roam
      ? {
          show: true,
          left: "right",
          iconStyle: { borderColor: "#9ca3af" },
          feature: {
            restore: { title: "Reset View" },
          },
        }
      : null,
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(50, 50, 50, 0.9)",
      borderColor: "#374151",
      textStyle: { color: "#fff" },
      formatter: "{b}",
    },
    geo: {
      map: "world",
      roam: roam,

      scaleLimit: {
        min: 1,
        max: 5,
      },

      boundingCoords: [
        [-180, 85],
        [180, -60],
      ],

      center: [0, 20],
      zoom: 1.1,
      silent: true,

      itemStyle: {
        borderColor: "#374151",
        borderWidth: 0.5,
      },
      emphasis: {
        disabled: true,
      },
    },
    series: [
      {
        name: "Cities",
        type: "scatter",
        coordinateSystem: "geo",
        clip: true,
        data: scatterData,
        // symbolSize: 10,
        itemStyle: {
          shadowBlur: 5,
          shadowColor: "rgba(0,0,0,0.3)",
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ReactECharts
        option={option}
        style={{ height: "100%", width: "100%" }}
        opts={{ renderer: "canvas" }}
        notMerge={true}
      />
    </div>
  );
}
