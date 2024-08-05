<template>
  <div class="weather-container">
    <Head>
      <Title>Weather Forecast for {{ location }} | YogaWeather</Title>
    </Head>
    <div class="content">
      <div id="headline" class="data-container">
        <Headline
          :location="{ location, area, country }"
          :date-observed="data?.LocalObservationDateTime"
          :temperature-data="{
            icon: data?.WeatherIcon,
            text: data?.WeatherText,
            value: data?.Temperature?.[unit]?.Value,
            unit: data?.Temperature?.[unit]?.Unit
          }"
        />
      </div>
      <div id="more-headline">
        <div class="data-container small-container">
          <SimpleData
            :title="'Real Feel'"
            :value="String(data?.RealFeelTemperature?.[unit]?.Value)"
            :unit="data?.RealFeelTemperature?.[unit]?.Unit"
          />
        </div>
        <div class="data-container small-container">
          <TemperatureDifference
            :value="data?.Past24HourTemperatureDeparture?.[unit]?.Value"
            :unit="data?.Past24HourTemperatureDeparture?.[unit]?.Unit"
          />
        </div>
      </div>
      <div class="data-container more-data-container small-container">
        <SimpleData
          :title="'Humidity'"
          :value="String(data?.RelativeHumidity)"
          unit="%"
        />
      </div>
      <div class="data-container more-data-container small-container">
        <UVIndex :value="data?.UVIndex" :text="data?.UVIndexText" />
      </div>
    </div>
  </div>
</template>

<script>
import { decryptNumber, decryptText } from '@/utils/string';
import sampleData from '@/data/sample.json';

import Headline from '@/components/weather-components/Headline';
import SimpleData from '@/components/weather-components/SimpleData';
import TemperatureDifference from '@/components/weather-components/TemperatureDifference';
import UVIndex from '@/components/weather-components/UVIndex';

export default {
  name: 'weather-page',
  components: {
    Headline,
    SimpleData,
    TemperatureDifference,
    UVIndex
  },
  data() {
    return {
      locationId: '',
      location: '',
      area: '',
      country: '',
      data: {},
      unit: 'Metric'
    };
  },
  created() {
    const param = this.$route.params.locationId;
    const [id, location, area, country] = param.split('&');
    this.locationId = decryptNumber(id);
    this.location = decryptText(location);
    this.area = decryptText(area);
    this.country = decryptText(country);
    this.data = sampleData[0];
    // const url = import.meta.env.VITE_LOCATION_URL;
    // const apiKey = import.meta.env.VITE_API_KEY;
    // const query = `?apikey=${apiKey}&q=${this.locationId}`;
    // const result = await fetch(url + query);
    // this.item = await result.json();
  }
}
</script>

<style lang="css" scoped>
.weather-container {
  padding-top: 80px;
}
.weather-container .content {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
}
.data-container {
  background: rgba(181,225,203,0.5);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 12px;
  border-radius: 12px;
}
.data-container#headline {
  grid-column: span 6 / span 6;
  height: calc(200px - 24px);
}
#more-headline {
  grid-column: span 6 / span 6;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
.small-container {
  height: calc(200px - 24px);
}
.more-data-container {
  grid-column: span 3 / span 3;
}

@media (max-width: 575.98px) {
  .data-container#headline {
    grid-column: span 12 / span 12;
    height: calc(280px - 24px);
  }
  #more-headline {
    grid-column: span 12 / span 12;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  .small-container {
    height: calc(160px - 24px);
  }
  .more-data-container {
    grid-column: span 6 / span 6;
  }
}
</style>