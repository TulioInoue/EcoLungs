export interface weatherDataInterface {
  id: string;
  last_updated: string;
  cloud: number;
  co: number;
  condition: string;
  country: string;
  humidity: number;
  lat: number;
  lon: number;
  no2: number;
  o3: number;
  pm2_5: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  region: string;
  so2: number;
  temp_c: number;
  temp_f: number;
  tz_id: string;
  us_epa_index: number;
  uv: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
}

export const handleFetchWeatherData = async (
  datePrefix: string,
  cityName: string,
) => {
  try {
    const response = await fetch(import.meta.env.VITE_LAMBDA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: datePrefix,
        id: cityName,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data: weatherDataInterface[] = await response.json();
    return data;
  } catch (error) {
    alert("Erro ao buscar dados do servidor.");
  }
};

export function countGroupByData(
  data: weatherDataInterface[],
  key: keyof weatherDataInterface,
  transformKeyFunction?: (key: string|number) => string,
) {
  const counts: Record<string, number> = {};

  data.forEach((item) => {
    const condition = transformKeyFunction
      ? transformKeyFunction(item[key].toString().toLowerCase().trim()) ||
        "Unknown"
      : item[key].toString().toLowerCase().trim() || "Unknown";
    counts[condition] = (counts[condition] || 0) + 1;
  });

  return Object.entries(counts).map(([name, value]) => ({
    name,
    value,
  }));
}

export function sumByLastUpdatedBar(
  data: weatherDataInterface[],
  axisX: keyof weatherDataInterface,
  keyBar: keyof weatherDataInterface,
  keyLine: keyof weatherDataInterface,
): Record<string, { barSum: number; lineSum: number; count: number }> {
  return data.reduce(
    (acc, curr) => {
      const date = (curr[axisX] as string).split(" ")[0];
      if (!acc[date]) {
        acc[date] = { barSum: 0, lineSum: 0, count: 0 };
      }
      acc[date].barSum += +curr[keyBar];
      acc[date].lineSum += +curr[keyLine];
      acc[date].count += 1;
      return acc;
    },
    {} as Record<string, { barSum: number; lineSum: number; count: number }>,
  );
}

export function sumByLastUpdatedLine(
  data: weatherDataInterface[],
  axisX: keyof weatherDataInterface,
  keyLine: keyof weatherDataInterface,
): Record<string, { lineSum: number; count: number }> {
  return data.reduce(
    (acc, curr) => {
      const date = (curr[axisX] as string).split(" ")[0];
      if (!acc[date]) {
        acc[date] = { lineSum: 0, count: 0 };
      }
      acc[date].lineSum += +curr[keyLine];
      acc[date].count += 1;
      return acc;
    },
    {} as Record<string, { lineSum: number; count: number }>,
  );
}
