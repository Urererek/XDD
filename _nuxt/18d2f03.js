(window.webpackJsonp=window.webpackJsonp||[]).push([[0,28,33,40],{756:function(e,t,r){"use strict";r.r(t);r(133),r(169),r(93),r(3),r(59),r(40),r(15),r(65),r(58);var o={props:{template:{type:String,required:!1},type:{type:String,required:!0},source:{type:String,required:!1},maxWidth:{type:Number,required:!1,default:350},autoSize:{type:Boolean,required:!1,default:!1},fitSize:{type:Boolean,required:!1,default:!1},premium:{type:Boolean,required:!1,default:!1},hue:{type:Number,required:!1,default:0}},data:function(){return{loaded:!1,error:!1,safariFix:0,videoFail:!1,resolutions:{"animated-banner":{width:468,height:60},icon:{width:512,height:512},"discord-profile-banner":{width:680,height:240},"discord-server-banner":{width:960,height:540},"fivem-server-banner":{width:1865,heigth:108},frame:{width:256,height:256}}}},computed:{normalizedSource:function(){return this.source||this.templateData.image||""},isAnimated:function(){return!this.normalizedSource.endsWith("png")},resolution:function(){return this.resolutions[this.type]||{width:256,height:256}},relativeResolution:function(){if(this.autoSize&&this.loaded)return{width:"auto",height:"auto"};if(this.fitSize)return{width:"fit-content",height:"fit-content"};var e=this.resolution,t=e.width,r=e.height;return t>r?{width:"".concat(this.maxWidth,"px"),height:"".concat(Math.round(r/t*this.maxWidth),"px")}:{width:"".concat(Math.round(t/r*this.maxWidth),"px"),height:"".concat(this.maxWidth,"px")}},templateType:function(){return this.premium?"premium":"free"},templateData:function(){var e=this;return this.source?{image:this.source}:this.$store.state.templates[this.templateType][this.type]?this.$store.state.templates[this.templateType][this.type].find((function(t){return t.id===e.template})):{}},rawSource:function(){return this.normalizedSource.split(".").slice(0,-1).join(".")},supportsVideo:function(){return!(!window.Modernizr.video.webm&&!window.Modernizr.video.h264)||1!==this.safariFix&&(window.Modernizr.video&&(window.Modernizr.video.webm||window.Modernizr.video.h264))}},methods:{onLoad:function(){var e=this;this.safariFix>0||(this.loaded=!0,this.$nextTick((function(){e.safariFix=1,setTimeout((function(){e.safariFix=2}),50)})))},onVideoFail:function(){console.log("Failed to load webm/mp4 for ".concat(this.rawSource,", falling back to gif instead")),this.videoFail=!0}}},n=r(8),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rounded-lg overflow-hidden w-fit mx-auto",style:{width:e.loaded?e.relativeResolution.width:"256px",height:e.relativeResolution.height,maxHeight:e.resolution.height+"px",maxWidth:"100vw"}},[e.loaded||e.videoFail?e._e():r("SkeletonLoader",{staticClass:"block transition h-full w-full",class:{"opacity-100":!e.loaded,"opacity-0":e.loaded,invisible:e.loaded},style:{maxHeight:e.resolution.height+"px",maxWidth:"min("+e.resolution.width+"px, 50vw)"},attrs:{type:"rect",width:e.resolution.width,height:e.resolution.height,animation:"wave"}}),e._v(" "),e.isAnimated?r("div",{style:{height:"frame"===e.type?e.resolution.height+"px":"auto",width:"auto"}},[e.supportsVideo&&!e.videoFail?r("video",{staticClass:"max-w-full max-h-full block transition",class:{invisible:!e.loaded,"opacity-0":!e.loaded,"opacity-100":e.loaded,absolute:!e.loaded},style:{filter:"hue-rotate("+e.hue+"deg)"},attrs:{autoplay:"",loop:"",muted:"",playsinline:"",disableremoteplayback:""},domProps:{muted:!0},on:{canplay:e.onLoad}},[r("source",{attrs:{src:e.rawSource+".webm",type:"video/webm"},on:{error:e.onVideoFail}}),e._v(" "),r("source",{attrs:{src:e.rawSource+".mp4",type:"video/mp4"},on:{error:e.onVideoFail}})]):r("img",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"max-w-full max-h-full block",style:{filter:"hue-rotate("+e.hue+"deg)"},attrs:{src:e.rawSource+".gif"},on:{load:e.onLoad}})]):r("img",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"max-w-full max-h-full block",style:{filter:"hue-rotate("+e.hue+"deg)"},attrs:{src:e.templateData.image},on:{load:e.onLoad}})],1)}),[],!1,null,null,null);t.default=component.exports},771:function(e,t,r){var content=r(797);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(48).default)("de1545b4",content,!0,{sourceMap:!1})},777:function(e,t,r){"use strict";r.r(t);r(58);var o={props:{text:{type:String,default:"Server Name"},enabled:{type:Boolean,default:!1}},data:function(){return{showParent:this.enabled,showContent:this.enabled}},computed:{processedText:function(){var text=this.text;return text?(text.length>20&&(text=text.substring(0,20)+"..."),text):"Server Name"}},watch:{enabled:function(e){var t=this;e?(this.showParent=!0,setTimeout((function(){t.showContent=!0}),10)):(this.showContent=!1,setTimeout((function(){t.showParent=!1}),300))}}},n=r(8),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative rounded-lg overflow-hidden"},[e.showParent?r("div",{staticClass:"absolute w-full transition-opacity duration-300 z-10",class:{"opacity-100":e.showContent,"opacity-0":!e.showContent}},[r("svg",{staticClass:"absolute w-full left-0 top-0 pointer-events-none",attrs:{viewBox:"0 0 803 212",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("style",[e._v("\n        .txt {\n        font-size: 40px;\n        font-weight: 900;\n        fill: #fff;\n        }\n      ")]),e._v(" "),r("rect",{attrs:{width:"803",height:"212",fill:"url(#paint0_linear_1486_66)"}}),e._v(" "),r("g",{attrs:{filter:"url(#shadow)"}},[r("g",{attrs:{"clip-path":"url(#clip0_1486_66)"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M115 98C115 100.864 110.36 103.003 109.49 105.576C108.62 108.15 111.085 112.826 109.49 114.965C107.895 117.104 102.82 116.234 100.573 117.865C98.325 119.496 97.7087 124.535 94.99 125.441C92.2712 126.348 88.9363 122.541 86.0363 122.541C83.1363 122.541 79.6925 126.166 77.0825 125.441C74.4725 124.716 73.7475 119.496 71.5 117.865C69.2525 116.234 64.25 117.213 62.5825 114.965C60.915 112.718 63.4162 108.295 62.5825 105.576C61.7487 102.858 57 100.864 57 98C57 95.1363 61.64 92.9975 62.51 90.4238C63.38 87.85 60.915 83.1738 62.51 81.035C64.105 78.8963 69.2163 79.7663 71.5 78.135C73.7837 76.5038 74.3275 71.465 77.0463 70.45C79.765 69.435 83.1 73.4588 86 73.4588C88.9 73.4588 92.3438 69.8338 94.9538 70.5588C97.5638 71.2838 98.2525 76.5038 100.5 78.135C102.748 79.7663 107.75 78.7875 109.418 81.035C111.085 83.2825 108.584 87.705 109.418 90.4238C110.251 93.1425 115 95.1363 115 98Z",fill:"white"}}),e._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M86 80.2168L75 90.8532V105.035L86 115.671L97 105.035V90.8532L86 80.2168ZM93.3333 103.688L86 110.779L78.6667 103.688V92.3423L86 85.2514L93.3333 92.3423V103.688Z",fill:"#FF73FA"}}),e._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M88.7873 92.9448L86.0007 90.2502L82.334 93.7957V99.1848L88.7873 92.9448Z",fill:"#FF73FA"}}),e._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M83.3574 103.227L85.9974 105.78L89.6641 102.234V97.1287L83.3574 103.227Z",fill:"#FF73FA"}})]),e._v(" "),r("text",{staticClass:"txt",attrs:{x:"138",y:"113","font-family":"Noto Sans, sans-serif, ui-sans-serif"}},[e._v("\n          "+e._s(e.processedText)+"\n        ")]),e._v(" "),r("path",{attrs:{d:"M689 91L707 107L725 91",stroke:"white","stroke-width":"8",transform:"translate(0 -5)","data-c":"creavite.co"}})]),e._v(" "),r("defs",[r("linearGradient",{attrs:{id:"paint0_linear_1486_66",x1:"0",y1:"0",x2:"0",y2:"220",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{"stop-opacity":"0.65"}}),e._v(" "),r("stop",{attrs:{offset:"1","stop-opacity":"0"}})],1),e._v(" "),r("clipPath",{attrs:{id:"clip0_1486_66"}},[r("rect",{attrs:{width:"58",height:"58",fill:"white",transform:"translate(57 69)"}})]),e._v(" "),r("filter",{attrs:{id:"shadow"}},[r("feDropShadow",{attrs:{dx:"0",dy:"3",stdDeviation:"2",floodColor:"#000000",floodOpacity:"0.8"}})],1)],1)])]):e._e(),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},778:function(e,t,r){"use strict";r.r(t);r(53),r(78),r(26),r(29),r(79),r(83),r(27);var o=r(5),n=(r(41),r(93),r(3),r(15),r(57),r(783),r(40),r(756)),l=r(200),d=r(810),c=r(777);function f(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){d=!0,n=e},f:function(){try{l||null==r.return||r.return()}finally{if(d)throw n}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var m={components:{TemplateViewer:n.default,InputField:l.default,HueSlider:d.default,DiscordServerBannerMockup:c.default},props:{template:{type:String,required:!0},type:{type:String,required:!0}},data:function(){return{hue:0,formData:{features:[]},isOpen:!1,couponData:{},formError:null,processingRequest:!1,showServerBannerMockup:!1}},computed:{templateData:function(){var e=this;return this.$store.state.templates.premium[this.type].find((function(t){return t.id===e.template}))},beautifiedType:function(){return this.type.replace(/-/g," ")},tags:function(){var e=[];return this.templateData.hue&&e.push({name:"Colour",class:"pink"}),"animated-banner"===this.type&&this.templateData.serverIP&&e.push({name:"Server IP",class:"blue"}),e},fields:function(){var e;switch(this.templateData.type){case"animated-banner":e=[{id:"serverName",placeholder:"Server name",model:"serverName",required:!0}],this.templateData.serverIP&&e.push({id:"serverIP",placeholder:"Server IP",model:"serverIP",required:!1});for(var i=0;i<this.templateData.features;i++)e.push({id:"feature-".concat(i),placeholder:"Feature ".concat(i+1),model:"feature-".concat(i),required:!0});break;case"discord-profile-banner":e=[{id:"text",placeholder:"Your name",model:"text",required:!0}];break;case"discord-server-banner":e=[{id:"text",placeholder:"Server name",model:"text",required:!0}];break;case"fivem-server-banner":e=[{id:"text",placeholder:"Server Name",model:"text",required:!0}];for(var t=0;t<this.templateData.features;t++)e.push({id:"feature-".concat(t),placeholder:"Feature ".concat(t+1),model:"feature-".concat(t),required:!0})}return e},discountedPrice:function(){var e;if(!this.couponData||null===(e=this.couponData)||void 0===e||!e.active)return this.templateData.price;if("relative"===this.couponData.type||!isNaN(this.couponData.multiplier))return Math.round(this.templateData.price*this.couponData.multiplier*100)/100;if("absolute"===this.couponData.type){var t=Math.round(100*(this.templateData.price-this.couponData.amount))/100;if(t<=0)return 0;if(t>0)return this.templateData.price}return this.templateData.price},priceIsDiscounted:function(){return this.discountedPrice!==this.templateData.price}},methods:{applyCoupon:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.formData.coupon){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.$axios.$get("".concat(e.$config.API_URL,"/order/coupon"),{params:{c:e.formData.coupon}});case 5:e.couponData=t.sent,e.couponData.active?e.formError=null:e.formError="Invalid coupon","absolute"===e.couponData.type&&0!==e.discountedPrice&&(e.formError="Coupon is not valid for this product"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),e.formError="Invalid coupon";case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},onCouponInput:function(e){this.couponData={},e||(this.formError=null)},order:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n,i,l,d,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=f(e.fields),t.prev=1,r.s();case 3:if((o=r.n()).done){t.next=10;break}if(!(n=o.value).required||e.formData[n.model]){t.next=8;break}return e.formError="".concat(n.placeholder," is required"),t.abrupt("return");case 8:t.next=3;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),r.e(t.t0);case 15:return t.prev=15,r.f(),t.finish(15);case 18:return e.processingRequest=!0,t.next=21,e.applyCoupon();case 21:if(e.templateData.features>0)for(i=0;i<e.templateData.features;i++)e.formData.features[i]=e.formData["feature-".concat(i)],delete e.formData["feature-".concat(i)];return t.prev=22,t.next=25,e.$axios.$post("".concat(e.$config.API_URL,"/order/create/tebex"),{type:e.templateData.type,template:e.templateData.id,hue:e.hue,text:e.formData.text,features:e.formData.features,serverName:e.formData.serverName,serverIP:e.formData.serverIP,coupon:e.formData.coupon,campaign:e.$cookies.get("utm_campaign")||e.$cookies.get("utm_source")},{withCredentials:!0});case 25:l=t.sent,document.location.href=l.msg.link,t.next=35;break;case 29:return t.prev=29,t.t1=t.catch(22),console.error("Failed to create tebex order",t.t1),e.processingRequest=!1,e.$plausible.trackEvent("checkoutFail",{props:{templateType:e.templateData.type,templateId:e.templateData.id,appVersion:e.$config.GIT_REV.slice(0,7),error:(null===(d=t.t1.response)||void 0===d||null===(c=d.data)||void 0===c?void 0:c.msg)||"unknown"}}),t.abrupt("return",e.$modal.open({title:"Error",message:"There was an error creating your order. Please try again later or open a ticket in our [Discord server](https://discord.gg/creavite) and we'll help you out."}));case 35:case"end":return t.stop()}}),t,null,[[1,12,15,18],[22,29]])})))()},toggleServerBannerMockup:function(e){this.showServerBannerMockup=e}}},v=(r(870),r(8)),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"template max-w-max w-full mx-0 text-center p-5 rounded-md h-fit\n    flex flex-col\n    transition duration-300 transform hover:shadow-lg",class:{"shadow-lg":e.isOpen,"hover:-translate-y-2":!e.isOpen}},[r("div",{staticClass:"cursor-pointer",on:{click:function(t){e.isOpen=!e.isOpen}}},[r("DiscordServerBannerMockup",{attrs:{enabled:e.showServerBannerMockup,text:e.formData.text}},[r("TemplateViewer",e._b({staticClass:"mb-2",style:{maxWidth:"100%"},attrs:{"auto-size":!0,premium:!0,hue:e.hue}},"TemplateViewer",{type:e.type,template:e.template},!1))],1),e._v(" "),r("span",{staticClass:"uppercase text-gray-400 font-light tracking-widest text-md",domProps:{textContent:e._s(e.beautifiedType)}}),e._v(" "),r("h3",{staticClass:"text-gray-900 font-extrabold text-2xl mb-0",domProps:{textContent:e._s(e.templateData.name)}}),e._v(" "),r("span",{staticClass:"text-lg text-gray-900 font-light font-sans italic block"},[e.priceIsDiscounted?r("span",{staticClass:"mr-2 inline-block"},[e._v("\n        $"+e._s(e.discountedPrice)+"\n      ")]):e._e(),e._v(" "),r("span",{staticClass:"inline-block",class:{"line-through":e.priceIsDiscounted,"opacity-25":e.priceIsDiscounted}},[e._v("\n        $"+e._s(e.templateData.price)+"\n      ")])]),e._v(" "),e.tags.length>0?r("div",{staticClass:"flex justify-evenly flex-wrap mt-2"},e._l(e.tags,(function(t){return r("span",{key:t.name,staticClass:"tag px-3 py-1 rounded-md uppercase text-sm tracking-wider",class:t.class,domProps:{textContent:e._s(t.name)}})})),0):e._e()],1),e._v(" "),r("div",{staticClass:"overflow-hidden transition-all ease-in-out duration-500 h-full",class:{"max-h-0":!e.isOpen,"max-h-[600px]":e.isOpen,"mt-8":e.isOpen}},[e._l(e.fields,(function(t){return r("InputField",{key:t.id,ref:t.ref,refInFor:!0,staticClass:"w-full mb-4",attrs:{placeholder:t.placeholder+" "+(t.required?"":"(Optional)"),required:t.required,"display-chars-left":t.displayCharsLeft,maxlength:t.maxLength},model:{value:e.formData[t.model],callback:function(r){e.$set(e.formData,t.model,r)},expression:"formData[field.model]"}})})),e._v(" "),e.templateData.hue?r("HueSlider",{staticClass:"col-span-2 w-full mt-3",model:{value:e.hue,callback:function(t){e.hue=t},expression:"hue"}}):e._e(),e._v(" "),"discord-server-banner"===e.templateData.type?r("Checkbox",{staticClass:"mt-6 ml-1 text-left",attrs:{label:"Show mockup overlay",description:"This overlay will not be visible in your final render."},on:{change:e.toggleServerBannerMockup}}):e._e(),e._v(" "),r("InputField",{staticClass:"w-full mt-6",attrs:{placeholder:"Your email",required:!0,autocomplete:"email"},on:{input:function(t){e.formError=null}},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData['email']"}}),e._v(" "),r("div",{staticClass:"flex h-min gap-x-4 items-center mt-4"},[r("InputField",{staticClass:"w-full",attrs:{placeholder:"Coupon / key (optional)",required:!1,success:e.priceIsDiscounted},on:{input:e.onCouponInput},model:{value:e.formData.coupon,callback:function(t){e.$set(e.formData,"coupon",t)},expression:"formData['coupon']"}}),e._v(" "),r("Button",{attrs:{text:"Apply",small:!0},on:{click:e.applyCoupon}})],1),e._v(" "),e.formError?r("span",{staticClass:"mt-4 block text-red-500",domProps:{textContent:e._s(e.formError)}}):e._e(),e._v(" "),r("Button",{staticClass:"mt-4",attrs:{text:"Order","full-width":!0,loading:e.processingRequest},on:{click:e.order}})],2)])}),[],!1,null,"30dda4a8",null);t.default=component.exports;installComponents(component,{TemplateViewer:r(756).default})},783:function(e,t,r){"use strict";var o=r(7),n=r(784);o({target:"String",proto:!0,forced:r(785)("link")},{link:function(e){return n(this,"a","href",e)}})},784:function(e,t,r){var o=r(10),n=r(89),l=r(61),d=/"/g,c=o("".replace);e.exports=function(e,t,r,o){var f=l(n(e)),h="<"+t;return""!==r&&(h+=" "+r+'="'+c(l(o),d,"&quot;")+'"'),h+">"+f+"</"+t+">"}},785:function(e,t,r){var o=r(11);e.exports=function(e){return o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},796:function(e,t,r){"use strict";r(771)},797:function(e,t,r){var o=r(47)((function(i){return i[1]}));o.push([e.i,".hue-slider{outline:0;-webkit-appearance:none;width:inherit;height:4px;background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.hue-slider::-webkit-slider-thumb{border:3px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.025),0 1px 5px rgba(0,0,0,.25);height:24px;width:24px;border-radius:15px;background:hsl(var(--hue),100%,50%);cursor:pointer;-webkit-appearance:none}.hue-slider::-moz-range-thumb{border:3px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.025),0 1px 5px rgba(0,0,0,.25);height:15px;width:15px;border-radius:15px;background:hsl(var(--hue),100%,50%);cursor:pointer;-webkit-appearance:none}.hue-slider::-ms-thumb{border:4px solid #fff;box-shadow:0 0 0 1px rgba(0,0,0,.025),0 1px 5px rgba(0,0,0,.25);height:26px;width:26px;border-radius:15px;background:hsl(var(--hue),100%,50%);cursor:pointer;-webkit-appearance:none}",""]),e.exports=o},810:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{value:0}},computed:{reactiveStyles:function(){return{"--hue":this.value}}},methods:{onInput:function(e){this.value=parseInt(e.target.value),this.$emit("input",this.value)}}},n=(r(796),r(8)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("input",{staticClass:"hue-slider",style:e.reactiveStyles,attrs:{type:"range",max:"360",value:"0"},on:{input:e.onInput}})])}),[],!1,null,null,null);t.default=component.exports},834:function(e,t,r){var content=r(871);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(48).default)("246018bb",content,!0,{sourceMap:!1})},870:function(e,t,r){"use strict";r(834)},871:function(e,t,r){var o=r(47)((function(i){return i[1]}));o.push([e.i,'.tag[data-v-30dda4a8]{position:relative;z-index:2;border-width:1px;--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity));--tw-text-opacity:1;color:rgb(31 41 55 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms}.tag[data-v-30dda4a8]:before{position:absolute;content:"";top:0;right:0;bottom:0;left:0;z-index:-1;transition:opacity .5s ease;opacity:0;border-radius:0.375rem}.template:hover .tag[data-v-30dda4a8]{border-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.template:hover .tag[data-v-30dda4a8]:before{opacity:1}.tag.pink[data-v-30dda4a8]:before{background-image:linear-gradient(97.25deg,#e6a0ff,#ffafd5)}.tag.blue[data-v-30dda4a8]:before{background-image:linear-gradient(180deg,#a0c0ff,#afd4ff)}.tag.green[data-v-30dda4a8]:before{background-image:linear-gradient(97.25deg,#98ef90,#93e9ee)}',""]),e.exports=o}}]);