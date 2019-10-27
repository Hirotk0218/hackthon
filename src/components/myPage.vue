<template>
  <div id="parent">
    <div class="item">
       <img src="../asset/mypage_dummy.png"/>
    </div>
  </div>
</template>
 
<script>
import Vue from "vue";
import Croppa from "vue-croppa";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { Stream } from "stream";

Vue.component("v-select", vSelect);
Vue.use(Croppa);

export default {
  name: "#cell",
  data() {
    return {
      Croppa: null
    };
  },
  methods: {
    generateImage: function() {
      let url = this.Croppa.generateDataUrl();
      if (!url) {
        alert("no image");
        return;
      }
    },
    postData: function() {
      liff.closeWindow();
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#parent {
  width: 100vw;
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