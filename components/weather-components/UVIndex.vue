<template>
  <div class="container">
    <p class="title">UV Index</p>
    <div class="data-container">
      <div class="data-content">
        <h3>{{ value }}</h3>
        <p class="description">{{ text }}</p>
      </div>
    </div>
    <div class="index-bar-container">
      <div class="index-bar"></div>
      <div class="index-indicator" :style="{ left }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simple-data',
  props: {
    value: { type: Number, default: 0 },
    text: { type: String, default: '' }
  },
  computed: {
    left() {
      if (this.value === 0) return '8px';
      if (this.value > 12) return '100%';
      return `${(this.value / 12) * 100}%`;
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
.index-bar-container {
  width: 100%;
  position: relative;
}
.index-bar {
  width: 100%;
  height: 6px;
  background: linear-gradient(90deg, #0f0 0%, #ff0 20%, #f80 60%, #f00 65%, #f0f 98%);
  border-radius: 3px;
  border: 1px solid #bbb;
}
.index-indicator {
  position: absolute;
  top: 1px;
  width: 4px;
  height: 4px;
  border: 1px solid black;
  border-radius: 50%;
  background: white;
  transform: translateX(calc(1px - 100%));
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
