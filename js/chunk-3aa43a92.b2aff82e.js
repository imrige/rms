(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3aa43a92"],{2030:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PageView",[a("a-row",{attrs:{gutter:t.gutter}},[a("a-col",{attrs:{span:8}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"text-center"},[a("a-avatar",{staticClass:"mb-3",attrs:{src:t.user.avatar,size:96}}),a("h2",[t._v(t._s(t.user.nickname))])],1),a("a-list",[a("a-list-item",[a("a-list-item-meta",{attrs:{title:"上次登录"}}),a("span",[t._v(t._s(t.user.time))])],1),a("a-list-item",[a("a-list-item-meta",{attrs:{title:"身份角色"}}),a("span",[t._v(t._s(t.user.role))])],1)],1)],1)],1),a("a-col",{attrs:{span:16}},[a("a-card",{attrs:{bordered:!1,tabList:t.tabList,activeTabKey:t.activeTabKey},on:{tabChange:t.bindClickTab}},[a("keep-alive",[t.$route.meta.keepalive?a("router-view"):t._e()],1),t.$route.meta.keepalive?t._e():a("router-view")],1)],1)],1)],1)},n=[],c=(a("efce"),a("4634"),a("ed8b"),a("e4e2")),i=a("c8c3"),s=a("591a");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l=[{tab:"通知管理",key:"/account/center/notification"},{tab:"消息中心",key:"/account/center/message"},{tab:"操作日志",key:"/account/center/logs"}],p={name:"Center",inject:["gutter"],components:{PageView:i["a"]},data:function(){return{tabList:l,activeTabKey:""}},computed:u({},Object(s["c"])({user:function(t){return t.account.user}})),mounted:function(){this.activeTabKey=this.$route.path},methods:{bindClickTab:function(t){this.$router.push(t),this.activeTabKey=t}},watch:{$route:function(t){this.activeTabKey=t.path}}},b=p,f=a("4e82"),v=Object(f["a"])(b,r,n,!1,null,null,null);e["default"]=v.exports},c8c3:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$route.meta.showPageHeader?[a("iPageHeader",{attrs:{title:t.title||t.$route.name}},[t.content?[t._v("\n                "+t._s(t.content)+"\n            ")]:t.$slots.content?[t._t("content")]:t._e(),t.$slots.extra?a("template",{slot:"extra"},[t._t("extra")],2):t._e()],2)]:t._e(),a("div",{staticClass:"ant-layout-content-wrapper"},[t._t("default")],2)],2)},n=[],c={name:"PageView",props:{title:{type:String},content:{type:String}}},i=c,s=a("4e82"),o=Object(s["a"])(i,r,n,!1,null,null,null);e["a"]=o.exports},e323:function(t,e,a){"use strict";var r=a("d3d8"),n=a("0614");t.exports=function(t,e,a){e in t?r.f(t,e,n(0,a)):t[e]=a}},efce:function(t,e,a){var r=a("2498"),n=a("f36d"),c=a("61173"),i=a("e493"),s=a("e323");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,a,r=c(t),o=i.f,u=n(r),l={},p=0;while(u.length>p)a=o(r,e=u[p++]),void 0!==a&&s(l,e,a);return l}})},f36d:function(t,e,a){var r=a("cb2e"),n=a("9d61"),c=a("8cac"),i=a("3f8b").Reflect;t.exports=i&&i.ownKeys||function(t){var e=r.f(c(t)),a=n.f;return a?e.concat(a(t)):e}}}]);
//# sourceMappingURL=chunk-3aa43a92.b2aff82e.js.map