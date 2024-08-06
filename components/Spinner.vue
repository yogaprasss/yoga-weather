<template>
  <div :class="['spinner', { small, large }]"></div>
</template>

<script>
export default {
  name: 'spinner',
  props: {
    small: { type: Boolean, default: false },
    large: { type: Boolean, default: false }
  }
};
</script>

<style lang="css" scoped>
.spinner {
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #71c2a2;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 1.25s linear infinite;
  animation: spin 1.25s linear infinite;
}

.spinner.small {
  width: 16px;
  height: 16px;
}

.spinner.large {
  width: 32px;
  height: 32px;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>