(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="http://localhost:8080/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"3f35":function(t,e,a){"use strict";a("5fa8")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",{attrs:{id:"header"}},[a("div",{staticClass:"menu",on:{click:function(e){t.isShow=!0}}},[a("i",{staticClass:"iconfont icon-ziyuan"})]),a("h3",{staticClass:"title"},[a("router-link",{staticClass:"t",attrs:{to:{name:"Home"}}},[t._v(" 干货集中营 ")])],1),t._m(0)]),a("div",{staticClass:"side-navigation ",class:{active:t.isShow},on:{click:function(e){t.isShow=!1}}},[a("div",{staticClass:"nav",on:{click:function(t){t.stopPropagation()}}},[a("ul",[a("li",{on:{click:function(e){t.isShow=!1}}},[a("router-link",{attrs:{to:{name:"Home"}}},[t._v("首页")])],1),t._l(t.menus,(function(e){return a("li",{key:e._id,on:{click:function(e){t.isShow=!1}}},[a("router-link",{attrs:{to:"List/"+e._id}},[t._v(" "+t._s(e.title)+" ")])],1)}))],2)])]),a("router-view"),t._m(1),t._m(2)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{attrs:{id:"footer"}},[a("h6",[t._v("主页")]),a("div",{staticClass:"crpyright"},[t._v(" Copyright © 2015-2020 "),a("a",{attrs:{href:""}},[t._v("干货集中营")])]),a("ul",[a("li",[a("i",{staticClass:"iconfont icon-qq"})]),a("li",[a("i",{staticClass:"iconfont icon-weixin"})]),a("li",[a("i",{staticClass:"iconfont icon-weibo"})]),a("li",[a("i",{staticClass:"iconfont icon-icon1"})])]),a("hr"),a("span",[t._v("合作伙伴：hank")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scroll"},[a("i",{staticClass:"iconfont icon-jiantoushangsheng"})])}],o={data:function(){return{isShow:!1,menus:[]}},mounted:function(){var t=this;this.ajax({url:"https://gank.io/api/v2/categories/GanHuo",success:function(e){e=JSON.parse(e);100==e.status?t.menus=e.data:alert("获取失败！")}})}},r=o,c=(a("034f"),a("2877")),l=Object(c["a"])(r,s,i,!1,null,null,null),u=l.exports,p=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"swiper-container "},[t.banners&&0!=t.banners.length?a("swiper",{ref:"mySwiper",staticClass:"banner",attrs:{options:t.swiperOption}},[t._l(t.banners,(function(t){return a("swiper-slide",{key:t.image},[a("div",{staticClass:"simg",style:{backgroundImage:"url("+t.image+")"}})])})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1),a("div",{attrs:{id:"nav"}},[a("ul",[a("li",[a("router-link",{attrs:{to:{name:"Home"}}},[t._v("首页")])],1),a("li",[a("router-link",{attrs:{to:{name:"Home"}}},[t._v("首页")])],1),a("li",[a("router-link",{attrs:{to:{name:"Home"}}},[t._v("首页")])],1)])]),t._l(t.lists,(function(e){return a("article-item",t._b({key:e._id},"article-item",e,!1))})),a("div",{ref:"loadding",staticClass:"loadding"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.loaddingStage,expression:"loaddingStage"}]},[t._v(" 加载中....")])])],2)},f=[],v=(a("99af"),a("7212")),g=(a("c0ee"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"list"},[a("li",[a("router-link",{attrs:{to:"/Show/"+t._id}},[a("div",{staticClass:"lefting"},[a("img",{attrs:{src:t.images[0],alt:""}})]),a("div",{staticClass:"right"},[a("span",{staticClass:"label"},[t._v(t._s(t.type))]),a("h3",{staticClass:"hidden1"},[t._v(t._s(t.title))]),a("div",{staticClass:"desc hidden2"},[t._v(" "+t._s(t.desc)+" ")]),a("div",{staticClass:"copy"},[a("a",{attrs:{href:""}},[t._v(t._s(t.author))]),t._v("- "),a("a",{attrs:{href:""}},[t._v(t._s(t.type))]),a("span",{staticClass:"time"},[t._v(t._s(t._f("date")(t.createdAt)))])])])])],1)])])}),h=[],m=(a("ac1f"),a("5319"),a("4d63"),a("25f0"),{props:["_id","createdAt","title","author","type","images","desc","views"],filters:{date:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd",a=new Date(t);/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds()};for(var s in n)if(new RegExp("(".concat(s,")")).test(e)){var i=n[s]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:("00"+i).substr(i.length))}return e}}}),_=m,w=(a("71d0"),Object(c["a"])(_,g,h,!1,null,null,null)),y=w.exports,b={name:"Home",components:{swiper:v["swiper"],swiperSlide:v["swiperSlide"],ArticleItem:y},data:function(){return{banners:[],lists:[],page:1,totalPage:0,loaddingStage:!1,swiperOption:{loop:!0,autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}}},mounted:function(){var t=this;this.ajax({url:"https://gank.io/api/v2/banners",success:function(e){e=JSON.parse(e);100==e.status?t.banners=e.data:alert("获取失败！")}}),this.loaddingStage=!0,this.ajax({url:"https://gank.io/api/v2/data/category/GanHuo/type/All/page/1/count/10",success:function(e){e=JSON.parse(e);console.log(e),100==e.status?(t.lists=e.data,t.loaddingStage=!1,t.totalPage=e.page_count):alert("获取失败！")}});var e=this.$refs.loadding;window.onscroll=function(){0==t.loaddingStage&&e.getBoundingClientRect().bottom<window.innerHeight&&t.totalPage>t.page&&(t.loaddingStage=!0,t.page+=1,t.ajax({url:"https://gank.io/api/v2/data/category/GanHuo/type/All/page/"+t.page+"/count/10",success:function(e){e=JSON.parse(e);console.log(e),100==e.status?(t.lists=t.lists.concat(e.data),t.loaddingStage=!1):alert("获取失败！")}}))}}},C=b,S=(a("cccb"),Object(c["a"])(C,d,f,!1,null,null,null)),k=S.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[t._m(0),t._l(t.lists,(function(e){return a("article-item",t._b({key:e._id},"article-item",e,!1))}))],2)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner1"},[a("h3",[t._v("Fuuter")]),a("div",{staticClass:"descr"},[t._v(" The man who has made up his mind to win will never say “ Impossible”。（ Napoleon ） ")])])}],j={components:{ArticleItem:y},data:function(){return{lists:[]}},mounted:function(){var t=this;this.ajax({url:"https://gank.io/api/v2/data/category/GanHuo/type/All/page/1/count/10",success:function(e){e=JSON.parse(e);console.log(e),100==e.status?t.lists=e.data:alert("获取失败！")}})}},E=j,H=(a("ebb3"),Object(c["a"])(E,x,O,!1,null,null,null)),$=H.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[a("span",{staticClass:"label"},[t._v(t._s(t.articles.type))]),a("h3",[t._v(t._s(t.articles.title))]),a("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.articles.content)}})])},T=[],M=a("0e54"),J=a.n(M),N={data:function(){return{articles:{}}},mounted:function(){var t=this;this.ajax({url:" https://gank.io/api/v2/post/"+t.$route.params.id,success:function(e){e=JSON.parse(e);console.log(e),100==e.status?(t.articles=e.data,t.articles.content=J()(e.data.markdown)):alert("获取失败！")}})}},R=N,G=(a("3f35"),Object(c["a"])(R,P,T,!1,null,null,null)),A=G.exports;n["a"].use(p["a"]);var L=[{path:"/",name:"Home",component:k},{path:"/list/:cate_id",name:"List",component:$},{path:"/show/:id",name:"Show",component:A}],I=new p["a"]({routes:L}),q=I;a("fb6a");function U(t){if(t.url){var e=t.type||"GET",a=void 0==t.async||t.async,n=t.dataType||"text",s="";if(t.data)if("string"==typeof t.data)s=t.data;else{for(var i in t.data)s+=i+"="+t.data[i]+"&";s=s.slice(0,-1)}var o=new XMLHttpRequest;"GET"==e.toUpperCase()&&(s?o.open("GET",t.url+"?"+s,a):o.open("GET",t.url,a),o.send()),"POST"==e.toUpperCase()&&(o.open("POST",t.url,a),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o.send(s)),o.onreadystatechange=function(){4==o.readyState&&(200==o.status?"text"==n?t.success&&t.success(o.response):"xml"==n?t.success&&t.success(o.responseXML):"json"==n&&t.success&&t.success(JSON.parse(o.response)):404==o.status&&alert("请求失败"))}}else alert("请输入URL")}a("9c76");n["a"].config.productionTip=!1,n["a"].prototype.ajax=U,new n["a"]({router:q,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,e,a){},"5fa8":function(t,e,a){},"66c4":function(t,e,a){},"71d0":function(t,e,a){"use strict";a("66c4")},7547:function(t,e,a){},"85ec":function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")},ebb3:function(t,e,a){"use strict";a("7547")}});
//# sourceMappingURL=app.ac16aca3.js.map