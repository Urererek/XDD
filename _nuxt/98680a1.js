(window.webpackJsonp=window.webpackJsonp||[]).push([[64,14],{755:function(t,e,r){var content=r(758);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("771b93c2",content,!0,{sourceMap:!1})},757:function(t,e,r){"use strict";r(755)},758:function(t,e,r){var o=r(47)((function(i){return i[1]}));o.push([t.i,".hero[data-v-6efe0232]{position:relative;background:linear-gradient(180deg,#f6fbff,rgba(246,251,255,0));height:-moz-fit-content;height:fit-content;padding-bottom:3rem}.parts[data-v-6efe0232]{display:grid;grid-template-columns:repeat(1, minmax(0, 1fr))}@media (min-width: 768px){.parts[data-v-6efe0232]{grid-template-columns:repeat(2, minmax(0, 1fr))}}.parts[data-v-6efe0232],.parts>div[data-v-6efe0232]{z-index:2}.lines[data-v-6efe0232]{position:absolute;top:0;right:10%;width:50vw;height:100%;display:flex;justify-content:space-between}.lines div[data-v-6efe0232]{width:2px;height:100%;background:linear-gradient(180deg,rgba(0,0,0,.1),transparent)}",""]),t.exports=o},759:function(t,e,r){"use strict";r.r(e);r(15),r(57);var o={props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},gold:{type:Boolean,required:!1,default:!1}},computed:{processedTitle:function(){var title=this.title;return title?title=(title=title.replace(/\[/g,'<span class="highlight '.concat(this.gold?"gold":"",'">'))).replace(/\]/g,"</span>"):""}}},n=(r(757),r(8)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"hero",staticClass:"hero full-width-overflow pt-16"},[r("div",{staticClass:"container parts pt-20 md:pt-10"},[r("div",{staticClass:"mx-auto md:mx-0 text-center md:text-left max-w-md my-auto"},[r("h1",{staticClass:"text-5xl mb-4",domProps:{innerHTML:t._s(t.processedTitle)}}),t._v(" "),r("p",{staticClass:"italic text-lg text-gray-600",domProps:{textContent:t._s(t.subtitle)}})]),t._v(" "),t.$device.isMobile?t._e():r("div",{staticClass:"max-w-md m-auto hidden md:block"},[r("video",{style:{filter:t.gold?"hue-rotate(227deg) saturate(3)":"inherit"},attrs:{src:"/img/hero-illustration.webm",loop:"",muted:"",autoplay:"",playsinline:"",disableremoteplayback:"",loading:"lazy"},domProps:{muted:!0}})])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lines"},[r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div")])}],!1,null,"6efe0232",null);e.default=component.exports},896:function(t,e,r){"use strict";r.r(e);var o=r(759),n=r(388),l=r(843),d={components:{Hero:o.default,BannerAd:n.default,RoleIconMaker:l.default},data:function(){return{}},head:function(){return{title:"Free Discord Role Icon Maker",meta:[{hid:"description",name:"description",content:"Create your own Discord role icons with our free Discord role icon generator!"},{hid:"og:title",property:"og:title",content:"Free Discord Role Icon Maker"},{hid:"og:description",property:"og:description",content:"Create your own Discord role icons with our free Discord role icon generator!"},{hid:"twitter:title",name:"twitter:title",content:"Free Discord Role Icon Maker"},{hid:"twitter:description",name:"twitter:description",content:"Create your own Discord role icons with our free Discord role icon generator!"}]}}},c=r(8),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"mt-0 text-left"},[r("Hero",{attrs:{title:"Free [Discord Role Icon] Maker",subtitle:"Spice up your Discord server with our free Discord role icon maker."}})],1),t._v(" "),r("BannerAd",{staticClass:"mt-0 md:mt-4",attrs:{"slot-name":"top"}}),t._v(" "),r("div",{staticClass:"gads-center"},[r("adsbygoogle",{attrs:{"ad-slot":"2637310622"}})],1),t._v(" "),r("section",{staticClass:"mt-0"},[r("h2",{staticClass:"highlight"},[t._v("\n      Free Discord Role Icon Maker\n    ")]),t._v(" "),r("div",[r("RoleIconMaker")],1)]),t._v(" "),r("BannerAd",{attrs:{"slot-name":"mid"}}),t._v(" "),r("div",{staticClass:"gads-center"},[r("adsbygoogle",{attrs:{"ad-slot":"2936693520"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:r(759).default,RoleIconMaker:r(843).default})}}]);