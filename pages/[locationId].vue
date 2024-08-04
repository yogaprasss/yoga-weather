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
    </div>
  </div>
</template>

<script>
import { decryptNumber, decryptText } from '@/utils/string';
import sampleData from '@/data/sample.json';

import Headline from '@/components/weather-components/Headline';

export default {
  name: 'weather-page',
  components: {
    Headline
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
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem;
}
.data-container {
  background: rgba(181,225,203,0.5);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 12px;
  border-radius: 12px;
}
.data-container#headline {
  grid-column: span 4 / span 4;
  height: calc(400px + 1rem - 24px);
}

@media (max-width: 575.98px) {
  .data-container#headline {
    grid-column: span 6 / span 6;
    height: calc(320px - 24px);
  }
}
</style>