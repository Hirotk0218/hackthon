<template>
  <div id="parent">
    <div class="item">
      <div class="value">
        <h1>カテゴリー</h1>
      </div>
      <div class="dropper">
        <v-select :options="options"></v-select>
      </div>
    </div>
    <div class="item">
      <div class="value">
        <h1>アピールポイント</h1>
      </div>
      <textarea v-model="message" class="text" placeholder="アピールポイントを記入してください。" cols="50"></textarea>
    </div>
    <br />
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
  font-size: 20px;
  font-weight: 600;
}

h2 {
  font-size: 16px;
}

#parent {
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
}

.item {
  margin-top: 20px;
}

.value {
  display: flex;
  width: 100%;
  height: 60px;
  margin-right: 50px;
}

.dropper {
  display: flex;
  width: 100%;
}

.contents {
  display: flex;
}

.text {
  display: flex;
  width: 100%;
}

.button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
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