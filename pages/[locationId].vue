<template>
  <div v-if="!isLoading">
    <Head>
      <Title>Weather Forecast for {{ location }} | YogaWeather</Title>
    </Head>
    {{ locationId }}
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
      location: '',
      isLoading: true
    };
  },
  created() {
    this.locationId = this.$route.params.locationId;
    setTimeout(() => {
      this.location = locationName[this.locationId];
      this.isLoading = false;
    }, 5000);
  }
}
</script>