(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{301:function(t,e,n){var content=n(303);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("790a7675",content,!0,{sourceMap:!1})},302:function(t,e,n){"use strict";var d=n(301);n.n(d).a},303:function(t,e,n){(e=n(11)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},305:function(t,e,n){"use strict";var d=n(0).a.extend({props:{icon:{type:String}}}),r=(n(302),n(8)),o=n(44),c=n.n(o),l=n(289),component=Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports;c()(component,{VIcon:l.a})},346:function(t,e,n){var content=n(471);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("1e82844c",content,!0,{sourceMap:!1})},469:function(t){t.exports=JSON.parse('{"last_update":"2020/03/30 19:00"}')},470:function(t,e,n){"use strict";var d=n(346);n.n(d).a},471:function(t,e,n){(e=n(11)(!1)).push([t.i,".MainPage .Header[data-v-353db903]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-353db903]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-353db903]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-353db903]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-353db903]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-353db903]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-353db903]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-353db903]{padding:4px 8px}}",""]),t.exports=e},481:function(t,e,n){"use strict";n.r(e);var d=n(0),r=n(305),o=n(469),c=n(357),l=n(361),m=n(358),f=n(360),v=n(352),h=d.a.extend({components:{PageHeader:r.a,ConfirmedCasesDetailsCard:c.a,ConfirmedCasesNumberCard:l.a,ConfirmedCasesAttributesCard:m.a,TestedNumberCard:f.a},data:function(){var data={lastUpdate:o,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("京都府内の最新感染動向")}};return data},computed:{updatedAt:function(){return Object(v.a)(this.$data.lastUpdate.last_update)}},head:function(){return{title:this.$t("京都府内の最新感染動向")}}}),x=(n(470),n(8)),_=n(44),w=n.n(_),C=n(298),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.lastUpdate.last_update))])]),t._v(" "),["ja","ja-basic"].includes(t.$i18n.locale)?t._e():n("div",{staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("tested-number-card"),t._v(" "),n("confirmed-cases-attributes-card")],1)],1)}),[],!1,null,"353db903",null);e.default=component.exports;w()(component,{VRow:C.a})}}]);