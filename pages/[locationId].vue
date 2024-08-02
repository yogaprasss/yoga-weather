<template>
  <div>
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
      location: ''
    };
  },
  created() {
    this.locationId = this.$route.params.locationId;
    setTimeout(() => {
      this.location = locationName[this.locationId];
    }, 5000);
  }
}
</script>