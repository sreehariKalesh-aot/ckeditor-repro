<template>
  <div id="app">
    <div style="padding: 20px;">
      <h1>CKEditor Revision History Reproduction</h1>
      <Collaboration />
    </div>
  </div>
</template>

<script>
import Collaboration from './components/Collaboration.vue';

export default {
  name: 'App',
  components: {
    Collaboration
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
</style>
