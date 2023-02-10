<template>
  <div id="app">
    <navigation-menu/>
    <router-view/>
  </div>
</template>
<script>
import navigationMenu from '@/components/navigation-menu.vue'
export default {
  name: 'App',
  components: {
    navigationMenu,
  }
}
</script>
