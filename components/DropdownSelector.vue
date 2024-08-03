<template>
  <div class="container">
    <button class="selected-choices" @click="toggleChoices">
      {{ selectedOption }}
      <img src="@/assets/expand.svg" alt="expand" height="16" />
    </button>
    <div v-if="isShowChoices" class="choices-dropdown">
      <button v-for="{ value, detail } in options" :key="value" @click="selectOption(value)">
        {{ detail }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'language-changer',
  props: {
    modelValue: { type: String, default: '' },
    options: { type: Array, default: () => [] }
  },
  data() {
    return {
      isShowChoices: false
    };
  },
  computed: {
    selectedOption() {
      return this.options.find((item) => item.value === this.modelValue).label;
    }
  },
  methods: {
    toggleChoices() {
      this.isShowChoices = !this.isShowChoices;
    },
    selectOption(value) {
      this.$emit('update:modelValue', value);
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  position: relative;
}
.selected-choices {
  display: flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: 0;
  line-height: 1;
  font-size: 20px;
  color: #08592e;
  padding: 0;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}
.choices-dropdown {
  position: absolute;
  right: 0;
  top: 32px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
.choices-dropdown button {
  width: 100%;
  min-width: fit-content;
  text-wrap: nowrap;
  text-align: left;
  padding: 8px 12px;
  border: none;
}
</style>
