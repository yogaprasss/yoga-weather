<template>
  <div>
    <Head>
      <Title>Weather Forecast for {{ location }} | YogaWeather</Title>
    </Head>
    {{ locationId }}
    {{ item }}
  </div>
</template>

<script>
// const locationName = {
//   jakarta: 'DKI Jakarta',
//   bandung: 'Bandung',
//   surabaya: 'Surabaya'
// };
export default {
  name: 'weather-page',
  async asyncData({ params }) {
    return { item: JSON.stringify(params) };
  },
  data() {
    return {
      locationId: '',
      location: '',
      item: 'item'
    };
  },
  async beforeCreate() {
    this.locationId = this.$route.params.locationId;
    const url = import.meta.env.VITE_LOCATION_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const query = `?apikey=${apiKey}&q=${this.locationId}`;
    const result = await fetch(url + query);
    this.item = await result.json();
    this.location = this.item[1].LocalizedName;
  }
}
</script>