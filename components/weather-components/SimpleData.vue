<template>
  <div class="container">
    <p class="title">{{ title }}</p>
    <div class="data-container">
      <div class="data-content">
        <h3>{{ dataWithUnit }}</h3>
        <p v-if="!!additionalInformation" class="additional-information">
          {{ additionalInformation }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simple-data',
  props: {
    title: { type: String, default: '' },
    value: { type: String, default: '' },
    unit: { type: String, default: '' },
    additionalInformation: { type: String, default: '' }
  },
  computed: {
    dataWithUnit() {
      if (['C', 'F'].includes(this.unit)) return `${this.value}°${this.unit}`;
      return `${this.value} ${this.unit}`;
    }
  }
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.title {
  margin: 0;
  font-size: 16px;
}
.data-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.data-container .data-content {
  text-align: center;
}
.data-content h3 {
  font-size: 44px;
  margin: 0;
  line-height: 1;
}
.additional-information {
  font-size: 14px;
  margin: 8px 0 0;
}
@media (max-width: 575.98px) {
  .title {
    margin-bottom: 8px;
    text-align: left !important;
  }
  .data-content h3 {
    font-size: 36px;
    margin: 0;
  }
}
</style>
