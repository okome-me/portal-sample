<template>
  <div class="iframe">
      <iframe v-bind:src="menu.url">
      </iframe>
  </div>
</template>

<script>
/* eslint-disable */
const axios = require('axios')

export default {
  name: 'Iframe',
  props: ['name', 'menu'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iframe {
  height: 100%;
}
iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
