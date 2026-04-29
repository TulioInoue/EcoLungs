export const monthNames = [
  "january", "february", "march", "april", "may", "june", "july", "august", "september", "octuber", "november", "december"
]

interface citiesSummary {
  type: string;
  icon: string;
  text: string;
}

export const summaries: citiesSummary[] = [
  {
    type: "megacity",
    icon: "fi fi-ss-house-building",
    text:
      "As a primary global megacity and industrial hub, these locations are defined by intense urban density and massive transit networks. Socio-environmentally, it faces high concentrations of vehicular emissions and factory output, creating a complex atmospheric profile. Monitoring this city is crucial to understanding the intersection of rapid economic growth and public health, as the sheer volume of daily activities results in a persistent and heavy burden of various airborne pollutants.",
  },
  {
    type: "hilly",
    icon: "fi fi-ss-mountains",
    text:
      "Situated within a geographic basin or valley, cities like these is highly susceptible to the thermal inversion effect. During specific meteorological conditions, a layer of warm air traps cooler, polluted air near the ground level, preventing vertical dispersion. This socio-environmental setting is critical for health studies, as toxic gases remain concentrated for extended periods, significantly increasing the risk of acute respiratory distress and severe long-term pulmonary inflammation.",
  },
  {
    type: "industry",
    icon: "fi fi-ss-industry-windows",
    text:
      "These cities are a focal point for specific heavy industrial activities such as petroleum refining, large-scale mining, or intensive manufacturing. The socio-environmental profile is dominated by the direct impact of these economic drivers on the local atmosphere. Monitoring this location allows for the identification of chemical markers directly linked to resource extraction, providing a clear dataset on how specialized industrial zones affect local health and environmental sustainability over time.",
  },
  {
    type: "satellite",
    icon: "fi fi-ss-satellite",
    text:
      "Functioning as a strategic border city or satellite region, these locations offer unique insights into the transboundary movement of atmospheric pollutants. The socio-environmental focus here is on how industrial activities in neighboring territories influence local air quality via prevailing winds. By tracking these dynamics, the project can model the geographical spread of harmful gases and evaluate how regional transport policies affect the health of populations living far from sources.",
  },
  {
    type: "clean",
    icon: "fi fi-ss-tree-sapling",
    text:
      "Selected for scientific control reasons, these places maintain high environmental standards and benefits from favorable geographic ventilation. Its socio-environmental conditions represent a baseline for clean air, characterized by low industrial density and effective green policies. Analyzing this city is essential for comparative research, as it provides a necessary benchmark to measure the relative severity of pollution levels in more congested or industrial regions across the world.",
  },
];

export interface pollutantLevel {
  min: number;
  max: number | null;
  healthStatus: "Good" | "Moderate" | "Unhealthy";
  symptoms: string;
  diseases: string;
}
export interface pollutantData {
  id: string;
  name: string;
  formula: string;
  levels: pollutantLevel[];
}

export const pollutants: pollutantData[] = [
  {
    id: "no2",
    name: "Nitrogen Dioxide",
    formula: "NO₂",
    levels: [
      { min: 0, max: 40, healthStatus: "Good", symptoms: "None", diseases: "Low risk for general population" },
      { min: 40, max: 100, healthStatus: "Moderate", symptoms: "Mild cough, slight throat irritation", diseases: "Aggravation of asthma in sensitive children" },
      { min: 100, max: null, healthStatus: "Unhealthy", symptoms: "Wheezing, significant chest tightness", diseases: "Acute bronchitis, increased viral susceptibility" },
    ],
  },
  {
    id: "o3",
    name: "Ozone",
    formula: "O₃",
    levels: [
      { min: 0, max: 50, healthStatus: "Good", symptoms: "None", diseases: "Normal outdoor activity recommended" },
      { min: 50, max: 100, healthStatus: "Moderate", symptoms: "Minor decrease in lung function", diseases: "Early triggers for COPD/asthma patients" },
      { min: 100, max: null, healthStatus: "Unhealthy", symptoms: "Sharp chest pain, rapid shallow breathing", diseases: "Pulmonary edema, permanent lung tissue scarring" },
    ],
  },
  {
    id: "so2",
    name: "Sulfur Dioxide",
    formula: "SO₂",
    levels: [
      { min: 0, max: 20, healthStatus: "Good", symptoms: "None", diseases: "Clean air baseline" },
      { min: 20, max: 30, healthStatus: "Moderate", symptoms: "Slight nose/throat burning sensation", diseases: "Minor airway constriction in asthmatics" },
      { min: 40, max: null, healthStatus: "Unhealthy", symptoms: "Severe cough, heavy mucus production", diseases: "Bronchospasm, chemical pneumonitis" },
    ],
  },
  {
    id: "co",
    name: "Carbon Monoxide",
    formula: "CO",
    levels: [
      { min: 0, max: 4000, healthStatus: "Good", symptoms: "None", diseases: "Safe levels for healthy adults" },
      { min: 4000, max: 9000, healthStatus: "Moderate", symptoms: "Slight headache, reduced exercise tolerance", diseases: "Risks for patients with angina or heart disease" },
      { min: 9000, max: null, healthStatus: "Unhealthy", symptoms: "Dizziness, nausea, mental confusion", diseases: "Hypoxia, severe cardiovascular stress" },
    ],
  },
];
interface citiesInterface {
  color: string;
  icon: string;
  type: string;
  name: string;
  lat: number;
  lon: number;
  isSelected: boolean;
}

export const cities: citiesInterface[] = [
  // Megacidades e Polos Industriais (Alta densidade de poluentes)
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Beijing", lat: 39.9042, lon: 116.4074 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Shanghai", lat: 31.2304, lon: 121.4737 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Guangzhou", lat: 23.1291, lon: 113.2644 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Tokyo", lat: 35.6895, lon: 139.6917 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Seoul", lat: 37.5665, lon: 126.978 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Delhi", lat: 28.6139, lon: 77.209 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Mumbai", lat: 19.076, lon: 72.8777 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Kolkata", lat: 22.5726, lon: 88.3639 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Dhaka", lat: 23.8103, lon: 90.4125 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Karachi", lat: 24.8607, lon: 67.0011 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Cairo", lat: 30.0444, lon: 31.2357 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Lagos", lat: 6.5244, lon: 3.3792 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Kinshasa", lat: -4.4419, lon: 15.2663 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Mexico City", lat: 19.4326, lon: -99.1332 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Sao Paulo", lat: -23.5505, lon: -46.6333 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Jakarta", lat: -6.2088, lon: 106.8456 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Bangkok", lat: 13.7563, lon: 100.5018 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Manila", lat: 14.5995, lon: 120.9842 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Ho Chi Minh City", lat: 10.8231, lon: 106.6297 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Istanbul", lat: 41.0082, lon: 28.9784 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Moscow", lat: 55.7558, lon: 37.6173 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "London", lat: 51.5074, lon: -0.1278 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Paris", lat: 48.8566, lon: 2.3522 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Berlin", lat: 52.52, lon: 13.405 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Madrid", lat: 40.4168, lon: -3.7038 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Rome", lat: 41.9028, lon: 12.4964 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "New York", lat: 40.7128, lon: -74.006 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Chicago", lat: 41.8781, lon: -87.6298 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Houston", lat: 29.7604, lon: -95.3698 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Toronto", lat: 43.6532, lon: -79.3832 },
  { color: "", isSelected: false, icon: "fi fi-ss-house-building", type: "megacity", name: "Sydney", lat: -33.8688, lon: 151.2093 },

  // Cidades em Vales ou Bacias (Efeito de Inversão Térmica)
  { color: "", isSelected: false, icon: "fi fi-ss-mountains", type: "hilly", name: "Santiago", lat: -33.4489, lon: -70.6693 },
  { color: "", isSelected: false, icon: "fi fi-ss-mountains", type: "hilly", name: "Medellin", lat: 6.2442, lon: -75.5812 },
  { color: "", isSelected: false, icon: "fi fi-ss-mountains", type: "hilly", name: "Salt Lake City", lat: 40.7608, lon: -111.891 },
  { color: "", isSelected: false, icon: "fi fi-ss-mountains", type: "hilly", name: "Milan", lat: 45.4642, lon: 9.19 },
  { color: "", isSelected: false, icon: "fi fi-ss-mountains", type: "hilly", name: "Kathmandu", lat: 27.7172, lon: 85.324 },
  { color: "", isSelected: false, icon: "fi fi-ss-mountains", type: "hilly", name: "Tehran", lat: 35.6892, lon: 51.389 },
  { color: "", isSelected: false, icon: "fi fi-ss-mountains", type: "hilly", name: "Almaty", lat: 43.222, lon: 76.8512 },
  { color: "", isSelected: false, icon: "fi fi-ss-mountains", type: "hilly", name: "Ulaanbaatar", lat: 47.8864, lon: 106.9057 },
  { color: "", isSelected: false, icon: "fi fi-ss-mountains", type: "hilly", name: "Sarajevo", lat: 43.8563, lon: 18.4131 },
  { color: "", isSelected: false, icon: "fi fi-ss-mountains", type: "hilly", name: "Skopje", lat: 41.9981, lon: 21.4254 },
  { color: "", isSelected: false, icon: "fi fi-ss-mountains", type: "hilly", name: "Grenoble", lat: 45.1885, lon: 5.7245 },
  { color: "", isSelected: false, icon: "fi fi-ss-mountains", type: "hilly", name: "Stuttgart", lat: 48.7758, lon: 9.1829 },

  // Fronteiras e Regiões Satélites
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Singapore", lat: 1.3521, lon: 103.8198 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Kuala Lumpur", lat: 3.139, lon: 101.6869 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Johannesburg", lat: -26.2041, lon: 28.0473 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Nairobi", lat: -1.2921, lon: 36.8219 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Addis Ababa", lat: 9.0192, lon: 38.7469 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Casablanca", lat: 33.5731, lon: -7.5898 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Riyadh", lat: 24.7136, lon: 46.6753 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Dubai", lat: 25.2048, lon: 55.2708 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Kuwait City", lat: 29.3759, lon: 47.9774 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Doha", lat: 25.2854, lon: 51.531 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Tel Aviv", lat: 32.0853, lon: 34.7818 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Warsaw", lat: 52.2297, lon: 21.0122 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Kyiv", lat: 50.4501, lon: 30.5234 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Bucharest", lat: 44.4268, lon: 26.1025 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Athens", lat: 37.9838, lon: 23.7275 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Prague", lat: 50.0755, lon: 14.4378 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Vienna", lat: 48.2082, lon: 16.3738 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Brussels", lat: 50.8503, lon: 4.3517 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Amsterdam", lat: 52.3676, lon: 4.9041 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Stockholm", lat: 59.3293, lon: 18.0686 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Oslo", lat: 59.9139, lon: 10.7522 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Helsinki", lat: 60.1695, lon: 24.9354 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Copenhagen", lat: 55.6761, lon: 12.5683 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Dublin", lat: 53.3498, lon: -6.2603 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Lisbon", lat: 38.7223, lon: -9.1393 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Buenos Aires", lat: -34.6037, lon: -58.3816 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Lima", lat: -12.0464, lon: -77.0428 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Bogota", lat: 4.711, lon: -74.0721 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Quito", lat: -0.1807, lon: -78.4678 },
  { color: "", isSelected: false, icon: "fi fi-ss-satellite", type: "satellite", name: "Caracas", lat: 10.4806, lon: -66.9036 },

  // Focos de Atividade Específica (Petróleo/Indústria/Mineração)
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Norilsk", lat: 69.3535, lon: 88.2027 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Oskemen", lat: 49.9482, lon: 82.6278 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Linfen", lat: 36.0876, lon: 111.519 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Peshawar", lat: 34.0151, lon: 71.5249 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Lahore", lat: 31.5204, lon: 74.3587 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Baghdad", lat: 33.3152, lon: 44.3661 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Baku", lat: 40.4093, lon: 49.8671 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Perth", lat: -31.9505, lon: 115.8605 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Brisbane", lat: -27.4698, lon: 153.0251 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Vancouver", lat: 49.2827, lon: -123.1207 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Montreal", lat: 45.5017, lon: -73.5673 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Phoenix", lat: 33.4484, lon: -112.074 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Denver", lat: 39.7392, lon: -104.9903 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Atlanta", lat: 33.749, lon: -84.388 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Miami", lat: 25.7617, lon: -80.1918 },
  { color: "", isSelected: false, icon: "fi fi-ss-industry-windows", type: "industry", name: "Seattle", lat: 47.6062, lon: -122.3321 },

  // Cidades de Controle (Baixa poluição/Ar limpo para comparação)
  { color: "", isSelected: false, icon: "fi fi-ss-tree-sapling", type: "clean", name: "Reykjavik", lat: 64.1466, lon: -21.9426 },
  { color: "", isSelected: false, icon: "fi fi-ss-tree-sapling", type: "clean", name: "Wellington", lat: -41.2865, lon: 174.7762 },
  { color: "", isSelected: false, icon: "fi fi-ss-tree-sapling", type: "clean", name: "Zurich", lat: 47.3769, lon: 8.5417 },
  { color: "", isSelected: false, icon: "fi fi-ss-tree-sapling", type: "clean", name: "Calgary", lat: 51.0447, lon: -114.0719 },
  { color: "", isSelected: false, icon: "fi fi-ss-tree-sapling", type: "clean", name: "Hobart", lat: -42.8821, lon: 147.3272 },
  { color: "", isSelected: false, icon: "fi fi-ss-tree-sapling", type: "clean", name: "Honolulu", lat: 21.3069, lon: -157.8583 },
  { color: "", isSelected: false, icon: "fi fi-ss-tree-sapling", type: "clean", name: "Cape Town", lat: -33.9249, lon: 18.4241 },
  { color: "", isSelected: false, icon: "fi fi-ss-tree-sapling", type: "clean", name: "Edinburgh", lat: 55.9533, lon: -3.1883 },
  { color: "", isSelected: false, icon: "fi fi-ss-tree-sapling", type: "clean", name: "Berne", lat: 46.948, lon: 7.4474 },
  { color: "", isSelected: false, icon: "fi fi-ss-tree-sapling", type: "clean", name: "Auckland", lat: -36.8485, lon: 174.7633 },
];

