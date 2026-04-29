import style from "./Intro.module.css";
import colors from "../../../cssVariables.module.css";

import { summaries, cities } from "../../../data/data";
import { type weatherDataInterface } from "../../../data/functions";

import MapChart from "../../../components/graphs/Map";

interface introInterface {
  theme: boolean;
  city: string;
  data: weatherDataInterface[];
}

export default function Intro({ theme, city, data }: introInterface) {
  const type = cities.find((e) => e.name === city)!.type;
  const icon = cities.find((e) => e.name === city)!.icon;

  return (
    <section id={theme ? style.intro__light : style.intro__dark}>
      <div className={style.intro__overall__graphs}>
        <div className={style.intro__overall__graphs_map}>
          <MapChart
            data={[
              {
                name: city,
                value: [data[0].lon, data[0].lat, 1],
                color: theme
                  ? colors.lighterSecondaryColor
                  : colors.darkerSecondaryColor,
                symbolSize: 10,
              },
            ]}
            roam={false}
            titleColor={
              theme ? colors.lighterTextDarkColor : colors.darkerTextLightColor
            }
            titleText="City location"
            zoomIn={5}
            focus={[data[0].lon, data[0].lat]}
          />
        </div>
        <div className={style.intro__overall_content}>
          <strong>
            <i className={icon} />
            <span>{type}</span>
          </strong>
          <p>{summaries.find((summary) => summary.type === type)?.text}</p>
        </div>
      </div>
    </section>
  );
}
