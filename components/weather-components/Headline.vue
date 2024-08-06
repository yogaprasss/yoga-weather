<template>
  <div class="container">
    <div class="headline-container">
      <p class="title">
        <strong>{{ location.location }}, {{ location.area }}, {{ location.country }}</strong>
      </p>
      <p class="title">
        Observed on {{ dateObservedString }}
      </p>
    </div>
    <div class="temperature-container">
      <div class="temperature-desktop">
        <div class="temperature-content">
          <img :src="weatherIcons[temperatureData.icon]" alt="weather" height="50" />
          <h3>{{ temperatureData.value }}°{{ temperatureData.unit }}</h3>
        </div>
        <p>{{ temperatureData.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from '@/utils/date';
import { weatherIcons } from '@/utils/icon';

export default {
  name: 'weather-headline',
  props: {
    location: { type: Object, default: () => ({ location: '', area: '', country: '' }) },
    dateObserved: { type: String, default: '' },
    temperatureData: {
      type: Object,
      default: () => ({ icon: 0, text: '', value: 0, unit: 'C' })
    }
  },
  computed: {
    dateObservedString() {
      return dateFormat(this.dateObserved);
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.headline-container {
  display: block;
}
.title {
  margin: 0 0 8px;
  font-size: 16px;
}
.temperature-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.temperature-content {
  display: flex;
  align-items: center;
  gap: 8px;
}
.temperature-content h3 {
  font-size: 44px;
  margin: 0;
  line-height: 1;
}
.temperature-content ~ p {
  text-align: center;
  font-size: 18px;
  margin: 8px 0 0;
}

@media (max-width: 575.98px) {
  .title {
    margin-bottom: 8px;
    text-align: left !important;
  }
}
</style>
