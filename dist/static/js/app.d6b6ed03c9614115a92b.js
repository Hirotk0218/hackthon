webpackJsonp([1],{0:function(e,t){},1:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("body",[t("div",{attrs:{id:"app"}},[t("router-view")],1)])},staticRenderFns:[]};var n=s("VU/8")({name:"App"},i,!1,function(e){s("lyVe")},null,null).exports,r=s("/ocq"),c=s("86jz"),o=s.n(c),l=s("T1ft"),d=s.n(l);s("R870"),s("9DG0");a.a.component("v-select",d.a),a.a.use(o.a);var u={name:"#app",data:()=>({Croppa:null,options:["風景","飲食店","インスタ映え","穴場","建物","有名人"]}),methods:{generateImage:function(){this.Croppa.generateDataUrl()||alert("no image")},postData:function(){liff.closeWindow()}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"parent"}},[s("div",{staticClass:"item"},[e._m(0),e._v(" "),s("v-select",{staticClass:"dropper",attrs:{options:e.options}})],1),e._v(" "),s("div",{staticClass:"item"},[e._m(1),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"text",attrs:{placeholder:"アピールポイントを記入してください。",cols:"50",rows:"3"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"item"},[e._m(2),e._v(" "),s("croppa",{staticClass:"contents",attrs:{"canvas-color":"#F2F2F2"},model:{value:e.Croppa,callback:function(t){e.Croppa=t},expression:"Croppa"}})],1),e._v(" "),s("div",{staticClass:"item"},[s("button",{staticClass:"button",on:{click:e.postData}},[s("h2",[e._v("投稿")])])]),e._v(" "),s("router-link",{attrs:{to:"/category"}},[e._v("category")])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"value"},[t("h1",[this._v("カテゴリー")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"value"},[t("h1",[this._v("アピールポイント")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"value"},[t("h1",[this._v("写真のアップロード")])])}]};var v=s("VU/8")(u,p,!1,function(e){s("vz8P")},"data-v-e4788ce2",null).exports,h=s("mtWM"),g=s.n(h),m={name:"CategorySelect",components:{},data:function(){return{userId:null,selectedCategory:[],selectedView:!0,selectedRestaurant:!0,selectedInstagram:!0,selectedSecret:!0,selectedBuilding:!0,selectedCelebrity:!0,viewIcon:requite("../asset/view.png"),restaurantIcon:"../asset/restaurant.png",instagramIcon:"../asset/instagram.png",secretIcon:"../asset/secret.png",buildingIcon:"../asset/building.png",celebrityIcon:"../asset/celebrity.png"}},methods:{async tapedAction(e){let t=[],s=!1;switch(this.selectedCategory.forEach(a=>{e!=a?t.push(a):s=!0}),s||t.push(e),this.selectedCategory=t,await this.setUserCategoryData(this.userId,t),e){case"view":this.selectedView?(this.selectedView=!1,this.viewIcon.set="../asset/view.png"):(this.selectedView=!0,this.viewIcon="../asset/view_hover.png");break;case"restaurant":this.selectedRestaurant?(this.selectedRestaurant=!1,this.viewIcon="../asset/restaurant.png"):(this.selectedRestaurant=!0,this.viewIcon="../asset/restaurant_hover.png");break;case"instagram":this.selectedInstagram?(this.selectedInstagram=!1,this.viewIcon="../asset/instagram.png"):(this.selectedInstagram=!0,this.viewIcon="../asset/instagram_hover.png");break;case"secret":this.selectedSecret?(this.selectedSecret=!1,this.viewIcon="../asset/secret.png"):(this.selectedSecret=!0,this.viewIcon="../asset/secret_hover.png");break;case"building":this.selectedBuilding?(this.selectedBuilding=!1,this.viewIcon="../asset/building.png"):(this.selectedBuilding=!0,this.viewIcon="../asset/building_hover.png");break;case"celebrity":this.selectedCelebrity?(this.selectedCelebrity=!1,this.viewIcon="../asset/celebrity.png"):(this.selectedCelebrity=!0,this.viewIcon="../asset/celebrity_hover.png")}},async setUserId(e){this.userId=e.userId,await this.getUserCategoryData(e.userId)},async getUserCategoryData(e){let t={userid:e},s=await g.a.post("https://yamatte.net/fukuoka/getcategory",t);0==(s=s.data).status&&0<s.data.length&&(this.selectedCategory=s.data[0].categories)},async setUserCategoryData(e,t){let s={userid:e,categories:t};await g.a.post("https://yamatte.net/fukuoka/setcategory",s)}},created(){window.getProfile(this.setUserId)}},f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"BaseView"},[s("div",{staticClass:"flexbox"},[s("div",{staticClass:"box"},[s("img",{attrs:{src:e.viewIcon,alt:""},on:{click:function(t){return e.tapedAction("view")}}})])])])},staticRenderFns:[]};var w=s("VU/8")(m,f,!1,function(e){s("xr0+")},"data-v-f5f7b7da",null).exports;a.a.use(r.a);var y=new r.a({mode:"history",base:"/",routes:[{path:"/",name:"main",component:v,props:!0},{path:"/category",name:"category",component:w,props:!0}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:y,components:{App:n},template:"<App/>"})},R870:function(e,t){},lyVe:function(e,t){},vz8P:function(e,t){},"xr0+":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d6b6ed03c9614115a92b.js.map