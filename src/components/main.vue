<template>
  <div id="parent">
    <div class="item">
      <div class="value">
        <h1>カテゴリー</h1>
      </div>
      <v-select class="dropper" :options="options"></v-select>
    </div>
    <div class="item">
      <div class="value">
        <h1>アピールポイント</h1>
      </div>
      <textarea v-model="message" class="text" placeholder="アピールポイントを記入してください。" cols="50" rows="3"></textarea>
    </div>
    <div class="item">
      <div class="value">
        <h1>写真のアップロード</h1>
      </div>
      <croppa v-model="Croppa" class="contents" canvas-color="#F2F2F2"></croppa>
    </div>
    <div class="item">
      <button class="button" @click="postData">
        <h2>投稿</h2>
      </button>
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
  name: "#app",
  data() {
    return {
      Croppa: null,
      options: ["スポーツ", "グルメ", "アクティビティ", "風景", "その他"]
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
body {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
}

h1,
.muted {
  color: #454545;
}

h2,
.muted {
  color: #f5f5f5;
}

h1 {
  font-size: 16px;
}

h2 {
  font-size: 16px;
}

#parent {
  padding-left: 16px;
  padding-right: 16px;
}

.item {
  margin-top: 20px;
}

.value {
  display: flex;
  margin-bottom: 10px;
}

.dropper {
  width: 100%;
}

.contents {
  width: 100%;
}

.text {
  width: 100%;
}

.button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 16px;
  background-color: #ef6e6e;
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