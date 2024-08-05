<template>
  <div class="container">
    <div class="headline-container">
      <p class="title">
        <strong>{{ location.location }}, {{ location.area }}, {{ location.country }}</strong>
      </p>
      <div class="observation-time-desktop">
        <p class="title">Observed on</p>
        <p class="title">{{ dateObservedString }}</p>
      </div>
      <p class="title observation-time-mobile">
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
      <div class="temperature-mobile">
        <img :src="weatherIcons[temperatureData.icon]" alt="weather" height="50" />
        <p>{{ temperatureData.text }}</p>
        <h3>{{ temperatureData.value }}°{{ temperatureData.unit }}</h3>
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
  display: flex;
  justify-content: space-between;
}
.title {
  margin: 0;
  font-size: 16px;
}
.observation-time-desktop {
  text-align: right;
  display: block;
}
.observation-time-mobile {
  display: none;
}
.temperature-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.temperature-desktop {
  display: block;
}
.temperature-mobile {
  display: none;
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
.temperature-desktop p {
  text-align: center;
  font-size: 18px;
  margin: 8px 0 0;
}

@media (max-width: 575.98px) {
  .title {
    margin-bottom: 8px;
    text-align: left !important;
  }
  .headline-container {
    display: block;
  }
  .observation-time-desktop {
    display: none;
  }
  .observation-time-mobile {
    display: block;
  }
  .temperature-desktop {
    display: none;
  }
  .temperature-mobile {
    display: block;
    text-align: center;
  }
  .temperature-mobile h3 {
    font-size: 36px;
    margin: 0;
  }
  .temperature-mobile p {
    margin: 8px 0;
  }
}
</style>
