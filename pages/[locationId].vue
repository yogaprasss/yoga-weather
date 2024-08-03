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
const locationName = {
  jakarta: 'DKI Jakarta',
  bandung: 'Bandung',
  surabaya: 'Surabaya'
};
export default {
  name: 'weather-page',
  data() {
    return {
      locationId: '',
      location: ''
    };
  },
  created() {
    this.locationId = this.$route.params.locationId;
    // const url = import.meta.env.VITE_LOCATION_URL;
    // const apiKey = import.meta.env.VITE_API_KEY;
    // const query = `?apikey=${apiKey}&q=${this.locationId}`;
    // const result = await fetch(url + query);
    // this.item = await result.json();
    this.location = locationName[this.locationId];
  }
}
</script>

<style lang="css" scoped>
.weather-container {
  padding-top: 80px;
}
</style>