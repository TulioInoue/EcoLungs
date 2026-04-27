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

