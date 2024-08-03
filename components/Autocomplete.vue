<template>
  <div :class="['container', { 'on-header': onHeader }]">
    <input placeholder="Search your location here" v-model="location" />
    <div v-if="isShowLoading" class="spinner-container">
      <Spinner :small="onHeader"></Spinner>
    </div>
    <div v-if="isShowList" class="options">
      <div v-if="options.length === 0 && !isError" class="not-found">No location found</div>
      <div v-else-if="options.length === 0 && isError" class="not-found error">
        An error has occured
      </div>
      <ul v-else>
        <li v-for="option in options" :key="option.value">
          <button class="option" @click="onSelectOption(option)">
            {{ option.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/utils/debounce';
import Spinner from './Spinner';
// import { getLocations } from '@/services/locations';

export default {
  name: 'Autocomplete',
  props: {
    onHeader: { type: Boolean, default: false }
  },
  data: () => {
    return {
      location: '',
      isShowList: false,
      options: [],
      isError: false,
      isShowLoading: false
    }
  },
  created() {
    this.fetchLocation = debounce(async (value) => {
      this.isShowList = false;
      if (value) {
        // const result = await getLocations(value);
        const result = [
          {
            "Version": 1,
            "Key": "208971",
            "Type": "City",
            "Rank": 10,
            "LocalizedName": "Jakarta",
            "Country": {
              "ID": "ID",
              "LocalizedName": "Indonesia"
            },
            "AdministrativeArea": {
              "ID": "JK",
              "LocalizedName": "Jakarta"
            }
          },
          {
            "Version": 1,
            "Key": "3430609",
            "Type": "City",
            "Rank": 25,
            "LocalizedName": "Jakarta Barat",
            "Country": {
              "ID": "ID",
              "LocalizedName": "Indonesia"
            },
            "AdministrativeArea": {
              "ID": "JK",
              "LocalizedName": "Jakarta"
            }
          },
          {
            "Version": 1,
            "Key": "1982856",
            "Type": "City",
            "Rank": 25,
            "LocalizedName": "Jakarta Pusat",
            "Country": {
              "ID": "ID",
              "LocalizedName": "Indonesia"
            },
            "AdministrativeArea": {
              "ID": "JK",
              "LocalizedName": "Jakarta"
            }
          },
          {
            "Version": 1,
            "Key": "3430607",
            "Type": "City",
            "Rank": 25,
            "LocalizedName": "Jakarta Selatan",
            "Country": {
              "ID": "ID",
              "LocalizedName": "Indonesia"
            },
            "AdministrativeArea": {
              "ID": "JK",
              "LocalizedName": "Jakarta"
            }
          },
          {
            "Version": 1,
            "Key": "3430608",
            "Type": "City",
            "Rank": 25,
            "LocalizedName": "Jakarta Timur",
            "Country": {
              "ID": "ID",
              "LocalizedName": "Indonesia"
            },
            "AdministrativeArea": {
              "ID": "JK",
              "LocalizedName": "Jakarta"
            }
          },
          {
            "Version": 1,
            "Key": "3430610",
            "Type": "City",
            "Rank": 25,
            "LocalizedName": "Jakarta Utara",
            "Country": {
              "ID": "ID",
              "LocalizedName": "Indonesia"
            },
            "AdministrativeArea": {
              "ID": "JK",
              "LocalizedName": "Jakarta"
            }
          },
          {
            "Version": 1,
            "Key": "3484709",
            "Type": "City",
            "Rank": 85,
            "LocalizedName": "Jakarta Baru",
            "Country": {
              "ID": "ID",
              "LocalizedName": "Indonesia"
            },
            "AdministrativeArea": {
              "ID": "MA",
              "LocalizedName": "Maluku"
            }
          },
          {
            "Version": 1,
            "Key": "3427242",
            "Type": "City",
            "Rank": 85,
            "LocalizedName": "Jakarta",
            "Country": {
              "ID": "PH",
              "LocalizedName": "Philippines"
            },
            "AdministrativeArea": {
              "ID": "TAW",
              "LocalizedName": "Tawi-Tawi"
            }
          }
        ];
        this.isShowLoading = true;
        setTimeout(() => {
          if (result) {
            this.options = result.map((item) => ({
              value: item.Key,
              name: item.LocalizedName,
              country: item.Country.LocalizedName,
              area: item.AdministrativeArea.LocalizedName,
            }));
            this.isError = false;
          } else {
            this.options = [];
            this.isError = true;
          }
          this.isShowLoading = false;
          this.isShowList = true;
        }, 5000);
      }
    }, 1000);
  },
  watch: {
    location(value) {
      this.fetchLocation(value);
    }
  },
  methods: {
    onSelectOption(value) {
      this.$emit('select-option', value);
      this.isShowList = false;
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  position: relative;
}

.container input {
  outline: none;
  height: 40px;
  width: calc(100% - 24px);
  max-width: 576px;
  border-radius: 20px;
  border: none;
  padding: 0 12px;
  font-size: 16px;
}

.container.on-header input {
  height: 32px;
  font-size: 14px;
}

.container .spinner-container {
  position: absolute;
  width: calc(100% - 24px);
  max-width: 576px;
  height: 40px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: end;
}

.container.on-header .spinner-container {
  height: 32px;
}

.options {
  position: absolute;
  width: 100%;
  max-width: 600px;
  min-height: 24px;
  background: white;
  border-radius: 8px;
  margin-top: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  left: 50%;
  transform: translateX(-50%);
}

.options .not-found {
  display: flex;
  justify-content: center;
  align-items: center;
}

.options ul {
  list-style-type: none;
  padding: 0;
}

.options ul .option {
  width: 100%;
  cursor: pointer;
  text-align: left;
  padding: 12px;
  background: transparent;
  border: none;
  font-size: 14px;
}

.options ul .option:hover {
  background: #fafafa;
}

.options ul > :first-child .option {
  border-radius: 8px 8px 0 0;
}

.options ul > :last-child .option {
  border-radius: 0 0 8px 8px;
}

.error {
  color: red;
}
</style>