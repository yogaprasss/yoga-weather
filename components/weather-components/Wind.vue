<template>
  <div class="container">
    <p class="title">Wind</p>
    <div class="data-container">
      <div class="compass-container">
        <p id="north-direction" class="compass-direction">N</p>
        <p id="east-direction" class="compass-direction">E</p>
        <p id="south-direction" class="compass-direction">S</p>
        <p id="west-direction" class="compass-direction">W</p>
        <div class="speed-container">
          <div>
            <p>{{ speed }}</p>
            <p>{{ unit }}</p>
          </div>
        </div>
        <div
          class="pointer-hand"
          :style="{ transform: `translate(-50%, -50%) rotate(${(degree + 180) % 360}deg)` }"
        >
          <div class="front"></div>
          <div class="rear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wind-data',
  props: {
    speed: { type: Number, default: 0 },
    unit: { type: String, default: '' },
    degree: { type: Number, default: 0 }
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
.compass-container {
  width: 132px;
  height: 132px;
  position: relative;
}
.compass-direction {
  position: absolute;
  line-height: 1;
  margin: 0;
  color: #08592e80;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
}
#north-direction, #south-direction {
  left: 50%;
  transform: translateX(-50%);
}
#west-direction, #east-direction {
  top: 50%;
  transform: translateY(-50%);
}
#south-direction {
  bottom: 0;
}
#east-direction {
  right: 0;
}
.speed-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1.5px solid #08592e;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.speed-container p {
  font-size: 14px;
  line-height: 1;
  margin: 0;
  text-align: center;
}
.speed-container p:first-child {
  font-size: 18px;
  font-weight: bold;
}
.pointer-hand {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1.5px solid #08592e;
  border-radius: 50%;
  width: 56px;
  height: 56px;
}
.pointer-hand .front {
  position: absolute;
  background: #08592e;
  width: 2px;
  height: 12px;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
}
.pointer-hand .front::after {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 8px solid #08592e;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 0;
}
.pointer-hand .rear {
  position: absolute;
  background: #08592e;
  width: 2px;
  height: 12px;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
}
.pointer-hand .rear::after {
  content: '';
  position: absolute;
  bottom: -7px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #08592e;
}
@media (max-width: 575.98px) {
  .title {
    margin-bottom: 8px;
    text-align: left !important;
  }
  .compass-container {
    width: 108px;
    height: 108px;
  }
  .speed-container, .pointer-hand {
    width: 48px;
    height: 48px;
  }
  .speed-container p {
    font-size: 12px;
  }
  .speed-container p:first-child {
    font-size: 16px;
    font-weight: bold;
  }
  .pointer-hand .front {
    height: 8px;
    top: -8px;
  }
  .pointer-hand .rear {
    height: 8px;
    bottom: -8px;
  }
}
</style>
