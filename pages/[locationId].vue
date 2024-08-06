<template>
  <div class="weather-container">
    <Head>
      <Title>Weather Forecast for {{ location }} | YogaWeather</Title>
    </Head>
    <div class="content">
      <div id="headline" :class="['data-container', { loading: isLoading }]">
        <Spinner v-if="isLoading" large />
        <Headline
          v-else
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
      <!-- Coming Soon -->
      <!-- <div id="forecast" class="data-container">

      </div> -->
      <div :class="['data-container', 'more-data-container', 'small-container', { loading: isLoading }]">
        <Spinner v-if="isLoading" large />
        <SimpleData
          v-else
          :title="'Real Feel'"
          :value="String(data?.RealFeelTemperature?.[unit]?.Value)"
          :unit="data?.RealFeelTemperature?.[unit]?.Unit"
        />
      </div>
      <div :class="['data-container', 'more-data-container', 'small-container', { loading: isLoading }]">
        <Spinner v-if="isLoading" large />
        <SimpleData
          v-else
          :title="'Temperature Difference'"
          :value="String(Math.abs(data?.Past24HourTemperatureDeparture?.[unit]?.Value))"
          :unit="data?.Past24HourTemperatureDeparture?.[unit]?.Unit"
          :additional-information="temperatureDifferenceInformation"
        />
      </div>
      <div :class="['data-container', 'more-data-container', 'small-container', { loading: isLoading }]">
        <Spinner v-if="isLoading" large />
        <SimpleData
          v-else
          :title="'Precipitation'"
          :value="String(data?.PrecipitationSummary?.Past24Hours?.[unit]?.Value)"
          :unit="data?.PrecipitationSummary?.Past24Hours?.[unit]?.Unit"
          :additional-information="'in the last 24 hour'"
        />
      </div>
      <div :class="['data-container', 'more-data-container', 'small-container', { loading: isLoading }]">
        <Spinner v-if="isLoading" large />
        <SimpleData
          v-else
          :title="'Humidity'"
          :value="String(data?.RelativeHumidity)"
          unit="%"
          :additional-information="dewPointInformation"
        />
      </div>
      <div :class="['data-container', 'more-data-container', 'small-container', { loading: isLoading }]">
        <Spinner v-if="isLoading" large />
        <UVIndex v-else :value="data?.UVIndex" :text="data?.UVIndexText" />
      </div>
      <div :class="['data-container', 'more-data-container', 'small-container', { loading: isLoading }]">
        <Spinner v-if="isLoading" large />
        <Wind
          v-else
          :speed="data?.Wind?.Speed?.[unit]?.Value"
          :unit="data?.Wind?.Speed?.[unit]?.Unit"
          :degree="data?.Wind?.Direction?.Degrees"
        />
      </div>
      <div :class="['data-container', 'more-data-container', 'small-container', { loading: isLoading }]">
        <Spinner v-if="isLoading" large />
        <SimpleData
          v-else
          :title="'Visibility'"
          :value="String(data?.Visibility?.[unit]?.Value)"
          :unit="data?.Visibility?.[unit]?.Unit"
        />
      </div>
      <div :class="['data-container', 'more-data-container', 'small-container', { loading: isLoading }]">
        <Spinner v-if="isLoading" large />
        <SimpleData
          v-else
          :title="'Pressure'"
          :value="String(unit === 'Metric'
            ? (data?.Pressure?.[unit]?.Value / 1000).toFixed(3)
            : data?.Pressure?.[unit]?.Value
          )"
          :unit="unit === 'Metric' ? 'hPa' : data?.Pressure?.[unit]?.Unit"
          :additional-information="pressureTendencyByCode(data?.PressureTendency?.Code)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { decryptNumber, decryptText, pressureTendencyByCode } from '@/utils/string';

import Spinner from '@/components/Spinner';
import Headline from '@/components/weather-components/Headline';
import SimpleData from '@/components/weather-components/SimpleData';
import UVIndex from '@/components/weather-components/UVIndex';
import Wind from '@/components/weather-components/Wind';

export default {
  name: 'weather-page',
  components: {
    Headline,
    SimpleData,
    UVIndex,
    Wind
  },
  data() {
    return {
      location: '',
      area: '',
      country: '',
      data: {},
      unit: 'Metric',
      isLoading: true
    };
  },
  computed: {
    dewPointInformation() {
      const value = this.data?.DewPoint?.[this.unit]?.Value;
      const unit = this.data?.DewPoint?.[this.unit]?.Unit;
      return `The dew point is ${value}°${unit} right now`;
    },
    temperatureDifferenceInformation() {
      const context = this.data?.Past24HourTemperatureDeparture?.[this.unit]?.Value < 0
        ? 'lower'
        : 'higher';
      if (this.data?.Past24HourTemperatureDeparture?.[this.unit]?.Value === 0) return '';
      return context + ' than the last 24 hour';
    }
  },
  methods: {
    async fetchData(locId) {
      this.isLoading = true;
      try {
        const result = await fetch('/api/weather?locationid=' + locId);
        const data = await result.json();
        if (result && data) {
          this.data = data[0];
          this.isLoading = false;
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
  async created() {
    const param = this.$route.params.locationId;
    const [id, location, area, country] = param.split('&');
    this.location = decryptText(location);
    this.area = decryptText(area);
    this.country = decryptText(country);
    await this.fetchData(decryptNumber(id));
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
  padding-bottom: 1rem;
}
.data-container {
  background: rgba(181,225,203,0.5);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 12px;
  border-radius: 12px;
}
.data-container.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.data-container#headline {
  grid-column: span 6 / span 6;
  height: calc(200px - 24px);
}
/* Coming Soon */
/* .data-container#forecast {
  grid-column: span 6 / span 6;
  height: calc(200px - 24px);
} */
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
  /* Coming Soon */
  /* .data-container#forecast {
    grid-column: span 12 / span 12;
    height: calc(280px - 24px);
  } */
  .small-container {
    height: calc(160px - 24px);
  }
  .more-data-container {
    grid-column: span 6 / span 6;
  }
}
</style>