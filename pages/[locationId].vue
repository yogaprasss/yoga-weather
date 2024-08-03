<template>
  <div class="weather-container">
    <Head>
      <Title>Weather Forecast for {{ location }} | YogaWeather</Title>
    </Head>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
    {{ locationId }}
    <br>
  </div>
</template>

<script>
import { decryptNumber, decryptText } from '@/utils/string';

export default {
  name: 'weather-page',
  data() {
    return {
      locationId: '',
      location: '',
      area: '',
      country: ''
    };
  },
  created() {
    const param = this.$route.params.locationId;
    const [id, location, area, country] = param.split('&');
    this.locationId = decryptNumber(id);
    this.location = decryptText(location);
    this.area = decryptText(area);
    this.country = decryptText(country);
    console.log([this.locationId, this.location, this.area, this.country])
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
</style>