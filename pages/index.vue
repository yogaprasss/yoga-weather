<template>
  <div id="home-page-container">
    <Head>
      <Title>Simple Weather Forecast | YogaWeather</Title>
    </Head>
    <div class="content" style="text-align: center;">
      <h3 class="headline">Welcome to</h3>
      <img src="@/assets/yw-text.png" alt="text" class="headline-logo" />
      <Autocomplete @select-option="onSelectOption" />
    </div>
  </div>
</template>

<script>
import Autocomplete from '@/components/Autocomplete';
import { searchForKeyword } from '@/utils/search';

export default {
  name: 'home-page',
  components: {
    Autocomplete
  },
  methods: {
    onSelectOption(params) {
      searchForKeyword(params, this.$router);
    }
  }
}
</script>

<style lang="css" scoped>
#home-page-container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.headline {
  font-size: 28px;
  line-height: 1.5;
  margin: 0;
}
.headline-logo {
  margin: .5rem 0 2rem;
  height: 72px;
}
</style>