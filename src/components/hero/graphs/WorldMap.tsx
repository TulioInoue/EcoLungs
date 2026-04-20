import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
// Importe o JSON local (ajuste o caminho se necessário)
import worldGeoJson from "./world.json";

import { data } from "./data";

// Registra o mapa imediatamente fora do componente
echarts.registerMap("world", worldGeoJson as any);

interface WorldMapInterface {
  areaColor: string;
  pointColor: string;
}

export default function WorldMap({ areaColor, pointColor }: WorldMapInterface) {
  const option = {
    backgroundColor: "transparent", // Combina melhor com dashboards
    tooltip: {
      trigger: "item",
      formatter: "{b}",
    },
    geo: {
      map: "world",
      roam: false,
      silent: true,
      itemStyle: {
        areaColor: areaColor,
        borderColor: "#111",
      },
    },
    series: [
      {
        name: "Locais",
        type: "scatter",
        coordinateSystem: "geo",
        data: data,
        symbolSize: 8,
        itemStyle: {
          color: pointColor, // Um amarelo vibrante costuma destacar bem
        },
      },
    ],
  };

  const onEvents = {
    click: (params: any) => {
      if (params.componentType === "series") {
        console.log("Ponto clicado:", params.name);
        alert(`Você selecionou: ${params.name}`);
      }
    },
  };

  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: "400px" }}
      onEvents={onEvents}
    />
  );
}
