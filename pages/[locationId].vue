<template>
  <div v-if="!isLoading">
    <Head>
      <Title>Weather Forecast for {{ location }} | YogaWeather</Title>
    </Head>
    {{ locationId }}
    {{ item }}
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
  async asyncData({ params }) {
    return { item: JSON.stringify(params) };
  },
  data() {
    return {
      locationId: '',
      location: '',
      isLoading: true,
      item: 'item'
    };
  },
  beforeCreated() {
    this.locationId = this.$route.params.locationId;
    setTimeout(() => {
      this.location = locationName[this.locationId];
      this.isLoading = false;
    }, 5000);
  }
}
</script>