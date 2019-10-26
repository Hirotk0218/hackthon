<template>
  <div id="app">
    <h1>カテゴリ</h1>
    <v-select :options="options"></v-select>
  </div>
</template>
 
<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
 
Vue.component('v-select', vSelect)
 
export default {
  name: '#app',
  data () {
    return {
      options: ['aaa', 'bbb']
    }
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
}
 
h1,.muted {
  color: #2c3e5099;
}
 
h1 {
  font-size: 26px;
  font-weight: 600;
}
 
#app {
  max-width: 30em;
  margin: 1em auto;
}
 
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>