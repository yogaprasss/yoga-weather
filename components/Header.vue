<template>
  <div class="header">
    <div class="header-container">
      <div class="header-content">
        <div class="search-mobile-btn">
          <button class="search-btn" @click="toggleSearch">
            <img v-if="isShowSearch" src="@/assets/close.svg" alt="search-icon" />
            <img v-else src="@/assets/search.svg" alt="search-icon" />
          </button>
        </div>
        <img src="@/assets/yw-text.png" alt="text" class="logo" />
        <div class="search-desktop">
          <Autocomplete on-header @select-option="onSelectOption" />
        </div>
        <div class="toolbar">
          <DropdownSelector v-model="unit" :options="unitOptions" />
          <DropdownSelector v-model="language" :options="languages" />
        </div>
      </div>
    </div>
    <div :class="['search-mobile-container', { show: isShowSearch }]">
      <Autocomplete on-header @select-option="onSelectOption" />
    </div>
  </div>
</template>

<script>
import Autocomplete from './Autocomplete';
import DropdownSelector from './DropdownSelector';
import { searchForKeyword } from '@/utils/search';

export default {
  name: 'layout-header',
  components: {
    DropdownSelector,
    Autocomplete
  },
  data() {
    return {
      language: 'en',
      languages: [
        { value: 'en', detail: 'English', label: 'EN' },
        { value: 'id', detail: 'Bahasa Indonesia', label: 'ID' },
      ],
      unit: 'metric',
      unitOptions: [
        { value: 'metric', detail: 'Metric - °C / km/h / km / m / hPa / mm', label: '°C' },
        { value: 'imperial', detail: 'Imperial - °F / mi/h / mi / ft / inHg / in', label: '°F' },
      ],
      isShowSearch: false
    };
  },
  watch: {
    '$route.params': function() {
      this.isShowSearch = false;
    }
  },
  methods: {
    toggleSearch() {
      this.isShowSearch = !this.isShowSearch;
    },
    onSelectOption(params) {
      searchForKeyword(params, this.$router);
    }
  }
}
</script>

<style lang="css" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.header-container {
  --padding-x: 1rem;
  width: calc(100vw - (2 * var(--padding-x)));
  height: 64px;
  background: #71c2a2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 var(--padding-x);
  z-index: 11;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 1024px;
  background: #71c2a2;
}
.logo {
  height: 40px;
}
.search-mobile-btn {
  display: none;
}
.search-desktop {
  width: 100%;
  max-width: calc(576px - 2rem);
  height: 32px;
}
.toolbar {
  /* Coming Soon */
  visibility: hidden;
  display: flex;
  align-items: center;
  gap: 12px;
}
.search-btn {
  display: none;
  background: transparent;
  border: 0;
  padding: 0;
}
.search-btn img {
  height: 24px;
}
.search-mobile-container {
  display: none;
}

@media (max-width: 575.98px) {
  .header-content {
    justify-content: center;
    position: relative;
  }
  .toolbar {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .search-btn {
    display: block;
  }
  .search-mobile-btn {
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .search-desktop {
    display: none;
  }
  .search-mobile-container {
    display: block;
    position: absolute;
    background: #71c2a2;
    width: calc(100% - 2rem);
    padding: .5rem 1rem;
    top: 0;
    z-index: -1;
    transition: .3s;
  }
  .search-mobile-container.show {
    top: 64px;
  }
}
</style>
