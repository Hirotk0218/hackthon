<template>
  <div class="BaseView">
    <div class="flexbox">
      <div class="box">
        <img src="../asset/view_hover.png" alt v-on:click='tapedAction("view")' v-if="selectedView"/>
        <img src="../asset/view.png" alt v-on:click='tapedAction("view")' v-else/>
      </div>
      <div class="box">
        <img src="../asset/restaurant_hover.png" alt v-on:click='tapedAction("restaurant")' v-if="selectedRestaurant"/>
        <img src="../asset/restaurant.png" alt v-on:click='tapedAction("restaurant")' v-else/>
      </div>
      <div class="box">
        <img src="../asset/instagram_hover.png" alt v-on:click='tapedAction("instagram")' v-if="selectedInstagram"/>
        <img src="../asset/instagram.png" alt v-on:click='tapedAction("instagram")' v-else/>
      </div>
      <div class="box">
        <img src="../asset/secret_hover.png" alt v-on:click='tapedAction("secret")' v-if="selectedSecret"/>
        <img src="../asset/secret.png" alt v-on:click='tapedAction("secret")' v-else/>
      </div>
      <div class="box">
        <img src="../asset/building_hover.png" alt v-on:click='tapedAction("building")' v-if="selectedBuilding"/>
        <img src="../asset/building.png" alt v-on:click='tapedAction("building")' v-else/>
      </div>
      <div class="box">
        <img src="../asset/celebrity_hover.png" alt v-on:click='tapedAction("celebrity")' v-if="selectedBuilding"/>
        <img src="../asset/celebrity.png" alt v-on:click='tapedAction("celebrity")' v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CategorySelect",
  components: {},
  data: function() {
    return {
      // UserId
      userId: null,
      // 通知対象のカテゴリ
      selectedCategory: [],
      // 表示・非表示の切り替え
      selectedView: true,
      selectedRestaurant: true,
      selectedInstagram: true,
      selectedSecret: true,
      selectedBuilding: true,
      selectedCelebrity: true,
      // 表示用の画像リソース
      viewIcon: requite("../asset/view.png"),
      restaurantIcon: "../asset/restaurant.png",
      instagramIcon: "../asset/instagram.png",
      secretIcon: "../asset/secret.png",
      buildingIcon: "../asset/building.png",
      celebrityIcon: "../asset/celebrity.png"
    };
  },
  methods: {
    // カテゴリアイコンをタップしたときのイベント
    async tapedAction(categoryName) {
      // カテゴリに含まれている場合があるので消し去る
      let newCategories = [];
      let isRemoved = false;
      this.selectedCategory.forEach(category => {
        // 選択していないカテゴリ名はそのまま選択対象とする
        if (categoryName != category) {
          newCategories.push(category);
        } else {
          isRemoved = true;
        }
      });

      if (!isRemoved) {
        newCategories.push(categoryName);
      }
      this.selectedCategory = newCategories;
      await this.setUserCategoryData(this.userId, newCategories);

      switch (categoryName) {
        case "view":
          if (this.selectedView) {
            this.selectedView = false;
            this.viewIcon.set = "../asset/view.png";
          } else {
            this.selectedView = true;
            this.viewIcon = "../asset/view_hover.png";
          }
          break;

        case "restaurant":
          if (this.selectedRestaurant) {
            this.selectedRestaurant = false;
            this.viewIcon = "../asset/restaurant.png";
          } else {
            this.selectedRestaurant = true;
            this.viewIcon = "../asset/restaurant_hover.png";
          }
          break;

        case "instagram":
          if (this.selectedInstagram) {
            this.selectedInstagram = false;
            this.viewIcon = "../asset/instagram.png";
          } else {
            this.selectedInstagram = true;
            this.viewIcon = "../asset/instagram_hover.png";
          }
          break;

        case "secret":
          if (this.selectedSecret) {
            this.selectedSecret = false;
            this.viewIcon = "../asset/secret.png";
          } else {
            this.selectedSecret = true;
            this.viewIcon = "../asset/secret_hover.png";
          }
          break;

        case "building":
          if (this.selectedBuilding) {
            this.selectedBuilding = false;
            this.viewIcon = "../asset/building.png";
          } else {
            this.selectedBuilding = true;
            this.viewIcon = "../asset/building_hover.png";
          }
          break;

        case "celebrity":
          if (this.selectedCelebrity) {
            this.selectedCelebrity = false;
            this.viewIcon = "../asset/celebrity.png";
          } else {
            this.selectedCelebrity = true;
            this.viewIcon = "../asset/celebrity_hover.png";
          }
          break;
      }
    },
    async setUserId(profile) {
      this.userId = profile.userId;
      await this.getUserCategoryData(profile.userId);
    },
    async getUserCategoryData(userId) {
      let url = "https://yamatte.net/fukuoka/getcategory";
      let requestData = {
        userid: userId
      };
      let result = await axios.post(url, requestData);
      result = result.data;
      if (result.status == 0 && 0 < result.data.length) {
        // データがある場合
        this.selectedCategory = result.data[0].categories | [];
      }
    },
    async setUserCategoryData(userId, categories) {
      let url = "https://yamatte.net/fukuoka/setcategory";
      let requestData = {
        userid: userId,
        categories: categories
      };
      await axios.post(url, requestData);
    }
  },
  created() {
    // ユーザーIDを取得します
    window.getProfile(this.setUserId);
  }
};
</script>

<style scoped>
p {
  color: white;
}

.BaseView {
  width: 100vw;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.flexbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.box {
  width: 45vw;
  height: 45vw;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 10px;
  box-sizing: border-box;
}

img {
  width: 100%;
  height: 100%;
  border: solid 2px;
  border-radius: 10px;
  border-color: #ef6e6e;
}
</style>