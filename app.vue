<template>
  <div>
    <LayoutHeader v-if="$route.params.locationId" />
    <NuxtPage />
  </div>
</template>

<script>
import LayoutHeader from './components/Header';
export default {
  components: {
    LayoutHeader
  }
}
</script>

<style lang="css">
html {
  font-family: Arial, Helvetica, sans-serif;
}
body {
  margin: 0;
  display: flex;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(0deg, rgba(239,243,238,1) 20%, rgba(181,225,203,1) 60%, rgba(113,194,162,1) 100%);
  background-repeat: no-repeat;
  background-size: cover;
}
#__nuxt {
  width: 100%;
  max-width: 1024px;
  padding: 0 1rem;
  overflow-y: scroll;
}
.content {
  width: 100%;
  color: #08592e;
  position: relative;
}
</style>
