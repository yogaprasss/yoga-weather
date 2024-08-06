<template>
  <div class="container">
    <p class="title">Temperature Difference</p>
    <div class="data-container">
      <div class="data-content">
        <h3>{{ dataWithUnit }}</h3>
        <p class="description">{{ dataContext }} than the last 24 hour</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'temperature-difference-data',
  props: {
    value: { type: Number, default: 0 },
    unit: { type: String, default: '' }
  },
  computed: {
    dataWithUnit() {
      if (['C', 'F'].includes(this.unit)) return `${Math.abs(this.value)}°${this.unit}`;
      return `${Math.abs(this.value)} ${this.unit}`;
    },
    dataContext() {
      if (this.value < 0) return 'lower';
      return 'higher';
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
.data-container h3 {
  font-size: 44px;
  margin: 0;
  line-height: 1;
}
.data-container .description {
  margin: 4px 0 0;
}
@media (max-width: 575.98px) {
  .title {
    margin-bottom: 8px;
    text-align: left !important;
  }
  .data-container h3 {
    font-size: 36px;
    margin: 0;
  }
}
</style>
