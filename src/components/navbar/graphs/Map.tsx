import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import worldMap from "../../../data/map.json";

if (!echarts.getMap("world")) {
  echarts.registerMap("world", worldMap as any);
}

import { type citiesInterface } from "../../../data/data";

interface MapChartInterface {
  titleColor: string;
  titleText: string;
  pointColor: string;
  areaColor: string;
  data: citiesInterface[];
}

export default function MapChart({
  titleColor,
  titleText,
  pointColor,
  areaColor,
  data,
}: MapChartInterface) {
  const colors = {
    title: "#9ca3af",
    points: "#eab308",
    area: "#1f2937",
    border: "#374151",
  };

  const scatterData = data.map((city) => ({
    name: city.name,
    value: [city.lon, city.lat, 1],
  }));

  const option = {
    backgroundColor: "transparent",
    title: {
      text: titleText,
      left: "center",
      top: "-1%",
      textStyle: {
        color: titleColor,
        fontSize: 14,
        fontWeight: "bold",
      },
    },
    toolbox: {
      show: true,
      left: "right",
      iconStyle: { borderColor: "#9ca3af" },
      feature: {
        restore: { title: "Reset View" }, // Ícone para voltar ao centro original
      },
    },
    tooltip: {
      trigger: "item",
      // Customização do tooltip para os pontos
      backgroundColor: "rgba(50, 50, 50, 0.9)",
      borderColor: colors.border,
      textStyle: { color: "#fff" },
      formatter: "{b}",
    },
    geo: {
      map: "world",
      roam: true,

      // 1. Limites de Zoom: Impede que o usuário suma com o mapa diminuindo demais
      // ou se perca entrando "dentro" de uma rua aumentando demais.
      scaleLimit: {
        min: 1,
        max: 5,
      },

      // 2. Coordenadas Limite: Define a "caixa" onde o mapa existe.
      boundingCoords: [
        [-180, 85],
        [180, -60],
      ],

      center: [0, 20],
      zoom: 1.1,
      silent: true,

      itemStyle: {
        areaColor: areaColor,
        borderColor: colors.border,
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
        // 3. Otimização de Performance:
        // Impede que o scatter tente renderizar pontos fora da área visível
        clip: true,
        data: scatterData,
        symbolSize: 10,
        itemStyle: {
          color: pointColor,
          shadowBlur: 5,
          shadowColor: "#374151",
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
        // 4. Prevenção de perda: Esta prop garante que o gráfico se ajuste ao container
        notMerge={true}
      />
    </div>
  );
}
