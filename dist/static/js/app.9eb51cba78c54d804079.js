webpackJsonp([1],{"+yu5":function(t,e){},0:function(t,e){},1:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("body",[e("div",{attrs:{id:"app"}},[e("router-view")],1)])},staticRenderFns:[]};var i=a("VU/8")({name:"App"},n,!1,function(t){a("lyVe")},null,null).exports,o=a("/ocq"),r=a("86jz"),c=a.n(r),l=a("T1ft"),p=a.n(l);a("R870"),a("9DG0");s.a.component("v-select",p.a),s.a.use(c.a);var u={name:"#app",data:()=>({Croppa:null,options:["スポーツ","グルメ","アクティビティ","風景","その他"]}),methods:{generateImage:function(){this.Croppa.generateDataUrl()||alert("no image")},postData:function(){liff.closeWindow()}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"parent"}},[a("div",{staticClass:"item"},[t._m(0),t._v(" "),a("v-select",{staticClass:"dropper",attrs:{options:t.options}})],1),t._v(" "),a("div",{staticClass:"item"},[t._m(1),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"text",attrs:{placeholder:"アピールポイントを記入してください。",cols:"50",rows:"3"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"item"},[t._m(2),t._v(" "),a("croppa",{staticClass:"contents",attrs:{"canvas-color":"#F2F2F2"},model:{value:t.Croppa,callback:function(e){t.Croppa=e},expression:"Croppa"}})],1),t._v(" "),a("div",{staticClass:"item"},[a("button",{staticClass:"button",on:{click:t.postData}},[a("h2",[t._v("投稿")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"value"},[e("h1",[this._v("カテゴリー")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"value"},[e("h1",[this._v("アピールポイント")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"value"},[e("h1",[this._v("写真のアップロード")])])}]};var m=a("VU/8")(u,v,!1,function(t){a("+yu5")},"data-v-467b35a0",null).exports;s.a.use(o.a);var d=new o.a({mode:"history",base:"/",routes:[{path:"/",name:"main",component:m,props:!0}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:d,components:{App:i},template:"<App/>"})},R870:function(t,e){},lyVe:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9eb51cba78c54d804079.js.map