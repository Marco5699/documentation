(window.webpackJsonp=window.webpackJsonp||[]).push([[8,10,27],{312:function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"a",(function(){return a})),s.d(e,"j",(function(){return o})),s.d(e,"i",(function(){return c})),s.d(e,"f",(function(){return l})),s.d(e,"g",(function(){return u})),s.d(e,"h",(function(){return h})),s.d(e,"b",(function(){return d})),s.d(e,"e",(function(){return p})),s.d(e,"l",(function(){return f})),s.d(e,"m",(function(){return v})),s.d(e,"c",(function(){return g})),s.d(e,"k",(function(){return m}));s(26),s(51),s(180),s(73),s(106),s(49),s(103),s(50),s(313),s(70),s(316),s(52);var n=s(107),i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,o=/^(https?:|mailto:|tel:)/;function c(t){return decodeURI(t).replace(i,"").replace(r,"")}function l(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function h(t){return/^tel:/.test(t)}function d(t){if(l(t))return t;var e=t.match(i),s=e?e[0]:"",n=c(t);return a.test(n)?t:n+".html"+s}function p(t,e){var s=t.hash,n=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!n||s===n)&&c(t.path)===c(e)}function f(t,e,s){s&&(e=function(t,e,s){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var i=e.split("/");s&&i[i.length-1]||i.pop();for(var r=t.replace(/^\//,"").split("/"),a=0;a<r.length;a++){var o=r[a];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,s));for(var n=c(e),i=0;i<t.length;i++)if(c(t[i].path)===n)return Object.assign({},t[i],{type:"page",path:d(e)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function v(t,e,s,i){var r=s.pages,a=s.themeConfig,o=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||o.sidebar||a.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var c=o.sidebar||a.sidebar;if(c){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var s in e)if(0===(n=t.path,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(s))return{base:s,config:e[s]};var n;return{}}(e,c),u=l.base,h=l.config;return h?h.map((function(t){return function t(e,s,i,r){if("string"==typeof e)return f(s,e,i);if(Array.isArray(e))return Object.assign(f(s,e[0],i),{title:e[1]});r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var a=e.children||[],o=e.versions||[];return Object(n.a)({type:"group"},e,{children:a.map((function(e){return t(e,s,i,!0)})),collapsable:!1!==e.collapsable,versions:o.map((function(r){return Object(n.a)({},r,{status:r.name===e.currentVersion?"current":r.status,children:r.children.map((function(n){return t(e.path+r.name+n,s,i,!0)}))})}))})}(t,r,u)})):[]}return[]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},313:function(t,e,s){"use strict";var n=s(176),i=s(7),r=s(10),a=s(25),o=s(177),c=s(178);n("match",1,(function(t,e,s){return[function(e){var s=a(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,s):new RegExp(e)[t](String(s))},function(t){var n=s(e,t,this);if(n.done)return n.value;var a=i(t),l=String(this);if(!a.global)return c(a,l);var u=a.unicode;a.lastIndex=0;for(var h,d=[],p=0;null!==(h=c(a,l));){var f=String(h[0]);d[p]=f,""===f&&(a.lastIndex=o(l,r(a.lastIndex),u)),p++}return 0===p?null:d}]}))},315:function(t,e,s){"use strict";s.r(e);s(179),s(71),s(317);var n=s(312),i={props:{item:{required:!0}},computed:{link:function(){return Object(n.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:n.f,isMailto:n.g,isTel:n.h}},r=s(48),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isExternal(t.link)?s("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n    "+t._s(t.item.text)+"\n    "),s("OutboundLink")],1):s("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text)+"\n")])}),[],!1,null,null,null);e.default=a.exports},316:function(t,e,s){"use strict";var n=s(176),i=s(105),r=s(7),a=s(25),o=s(104),c=s(177),l=s(10),u=s(178),h=s(72),d=s(2),p=[].push,f=Math.min,v=!d((function(){return!RegExp(4294967295,"y")}));n("split",2,(function(t,e,s){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var n=String(a(this)),r=void 0===s?4294967295:s>>>0;if(0===r)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,r);for(var o,c,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=new RegExp(t.source,d+"g");(o=h.call(v,n))&&!((c=v.lastIndex)>f&&(u.push(n.slice(f,o.index)),o.length>1&&o.index<n.length&&p.apply(u,o.slice(1)),l=o[0].length,f=c,u.length>=r));)v.lastIndex===o.index&&v.lastIndex++;return f===n.length?!l&&v.test("")||u.push(""):u.push(n.slice(f)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var i=a(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,i,s):n.call(String(i),e,s)},function(t,i){var a=s(n,t,this,i,n!==e);if(a.done)return a.value;var h=r(t),d=String(this),p=o(h,RegExp),g=h.unicode,m=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(v?"y":"g"),_=new p(v?h:"^(?:"+h.source+")",m),y=void 0===i?4294967295:i>>>0;if(0===y)return[];if(0===d.length)return null===u(_,d)?[d]:[];for(var k=0,b=0,C=[];b<d.length;){_.lastIndex=v?b:0;var x,$=u(_,v?d:d.slice(b));if(null===$||(x=f(l(_.lastIndex+(v?0:b)),d.length))===k)b=c(d,b,g);else{if(C.push(d.slice(k,b)),C.length===y)return C;for(var w=1;w<=$.length-1;w++)if(C.push($[w]),C.length===y)return C;b=k=x}}return C.push(d.slice(k)),C}]}),!v)},317:function(t,e,s){"use strict";var n=s(0),i=s(318);n({target:"String",proto:!0,forced:s(319)("link")},{link:function(t){return i(this,"a","href",t)}})},318:function(t,e,s){var n=s(25),i=/"/g;t.exports=function(t,e,s,r){var a=String(n(t)),o="<"+e;return""!==s&&(o+=" "+s+'="'+String(r).replace(i,"&quot;")+'"'),o+">"+a+"</"+e+">"}},319:function(t,e,s){var n=s(2);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},330:function(t,e,s){"use strict";s.r(e);var n=s(328),i=s.n(n);if("undefined"!=typeof window)s(336);var r={props:{options:{type:Object,default:function(){return{}}}},mounted:function(){this.create()},destroyed:function(){i()(this.$el).slick("unslick")},methods:{create:function(){var t=i()(this.$el);t.on("afterChange",this.onAfterChange),t.on("beforeChange",this.onBeforeChange),t.on("breakpoint",this.onBreakpoint),t.on("destroy",this.onDestroy),t.on("edge",this.onEdge),t.on("init",this.onInit),t.on("reInit",this.onReInit),t.on("setPosition",this.onSetPosition),t.on("swipe",this.onSwipe),t.on("lazyLoaded",this.onLazyLoaded),t.on("lazyLoadError",this.onLazyLoadError),t.slick(this.options)},destroy:function(){var t=i()(this.$el);t.off("afterChange",this.onAfterChange),t.off("beforeChange",this.onBeforeChange),t.off("breakpoint",this.onBreakpoint),t.off("destroy",this.onDestroy),t.off("edge",this.onEdge),t.off("init",this.onInit),t.off("reInit",this.onReInit),t.off("setPosition",this.onSetPosition),t.off("swipe",this.onSwipe),t.off("lazyLoaded",this.onLazyLoaded),t.off("lazyLoadError",this.onLazyLoadError),i()(this.$el).slick("unslick")},reSlick:function(){this.destroy(),this.create()},next:function(){i()(this.$el).slick("slickNext")},prev:function(){i()(this.$el).slick("slickPrev")},pause:function(){i()(this.$el).slick("slickPause")},play:function(){i()(this.$el).slick("slickPlay")},goTo:function(t,e){i()(this.$el).slick("slickGoTo",t,e)},currentSlide:function(){return i()(this.$el).slick("slickCurrentSlide")},add:function(t,e,s){i()(this.$el).slick("slickAdd",t,e,s)},remove:function(t,e){i()(this.$el).slick("slickRemove",t,e)},filter:function(t){i()(this.$el).slick("slickFilter",t)},unfilter:function(){i()(this.$el).slick("slickUnfilter")},getOption:function(t){i()(this.$el).slick("slickGetOption",t)},setOption:function(t,e,s){i()(this.$el).slick("slickSetOption",t,e,s)},setPosition:function(){i()(this.$el).slick("setPosition")},onAfterChange:function(t,e,s){this.$emit("afterChange",t,e,s)},onBeforeChange:function(t,e,s,n){this.$emit("beforeChange",t,e,s,n)},onBreakpoint:function(t,e,s){this.$emit("breakpoint",t,e,s)},onDestroy:function(t,e){this.$emit("destroy",t,e)},onEdge:function(t,e,s){this.$emit("edge",t,e,s)},onInit:function(t,e){this.$emit("init",t,e)},onReInit:function(t,e){this.$emit("reInit",t,e)},onSetPosition:function(t,e){this.$emit("setPosition",t,e)},onSwipe:function(t,e,s){this.$emit("swipe",t,e,s)},onLazyLoaded:function(t,e,s,n){this.$emit("lazyLoaded",t,e,s,n)},onLazyLoadError:function(t,e,s,n){this.$emit("lazyLoadError",t,e,s,n)}}},a=s(48),o=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)}),[],!1,null,null,null);e.default=o.exports},335:function(t,e,s){t.exports=s.p+"assets/img/banner_china_logo.b173b6d7.png"},342:function(t,e,s){"use strict";s.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"max-w-xl w-full inline-block",attrs:{src:s(335),alt:"Pterodactyl"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section bg-white"},[e("div",{staticClass:"container text-center"},[e("h1",{staticClass:"text-blue mb-4"},[this._v("翼龙面板")]),this._v(" "),e("h3",{staticClass:"border-0 font-normal leading-normal mx-auto",staticStyle:{"max-width":"50rem"}},[this._v("\n                翼龙® 是一个免费的开源游戏服务器管理面板，使用 PHP、React 和 Go 构建。Pterodactyl 在设计时考虑了安全性，在隔离的 Docker\n                容器中运行所有游戏服务器，同时向最终用户展示了美观直观的 UI。\n            ")]),this._v(" "),e("h3",{staticClass:"border-0 leading-normal mx-auto mt-4",staticStyle:{"max-width":"50rem"}},[this._v("\n                不要再安于现状了。让游戏服务器成为您平台上的一等公民。\n            ")]),this._v(" "),e("img",{staticClass:"max-w-lg w-full m-4 inline-block",attrs:{src:"https://cdn.pterodactyl.io/site-assets/mockup-macbook-grey-1.0.png"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section bg-blue text-grey-lightest"},[s("div",{staticClass:"container text-center"},[s("h1",{staticClass:"mb-4"},[t._v("为什么选择翼龙®")]),t._v(" "),s("div",{staticClass:"flex flex-wrap"},[s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-lock"})]),t._v(" "),s("h3",[t._v("安全至上")]),t._v(" "),s("p",[t._v("安全性是该平台上的一等公民，具有 bcrypt 哈希、AES-256-CBC 加密和开箱即用的 HTTPS 支持。")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-beaker"})]),t._v(" "),s("h3",[t._v("现代化的工具")]),t._v(" "),s("p",[t._v("建立在现代堆栈上，利用最佳设计实践，使其易于进入和修改。")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-anchor"})]),t._v(" "),s("h3",[t._v("Docker的核心")]),t._v(" "),s("p",[t._v("所有服务器都在隔离的Docker容器中运行，限制了攻击媒介，提供了严格的资源限制，并提供了为每个特定游戏量身定做的环境。")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-wallet"})]),t._v(" "),s("h3",[t._v("免费和开源")]),t._v(" "),s("p",[t._v("翼龙是100%免费的，并在MIT许可下授权。我们所有的代码也是完全开源的。")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-browser"})]),t._v(" "),s("h3",[t._v("用户友好")]),t._v(" "),s("p",[t._v("把愤怒的点击和尖叫留给《守望先锋》吧。翼龙的界面设计得非常好，甚至连半藏都能使用它。")])]),t._v(" "),s("div",{staticClass:"feature"},[s("span",[s("i",{staticClass:"icon icon-expand"})]),t._v(" "),s("h3",[t._v("可扩展性")]),t._v(" "),s("p",[t._v("无论你是一家托管公司，还是下一个Hyplex，或者只是一些玩视频游戏的家伙，我们都能为你提供服务。")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left md:flex"},[s("div",{staticClass:"flex-none w-full md:w-1/2 md:pr-12"},[s("p",{staticClass:"my-4"},[t._v("\n                        自2015年以来，翼龙®一直在提供强大、高性能和安全的软件，使个人、网络和托管公司轻松地大规模运行游戏服务器。最重要的是？没有高昂的月费！\n                    ")]),t._v(" "),s("p",{staticClass:"my-4"},[t._v("\n                        今天就开始吧，看看为什么成千上万的用户信任翼龙®来管理他们的游戏服务器。\n                    ")])]),t._v(" "),s("div",{staticClass:"hidden md:block md:flex-1 md:pr-12"},[s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"https://github.com/pterodactyl"}},[t._v("GitHub")])]),t._v(" "),s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"https://github.com/sponsors/DaneEveritt"}},[t._v("赞助商")])]),t._v(" "),s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"https://paypal.me/PterodactylSoftware"}},[t._v("捐助")])]),t._v(" "),s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"/panel/troubleshooting.html"}},[t._v("故障处理")])]),t._v(" "),s("p",[s("a",{staticClass:"text-grey-lightest",attrs:{href:"https://github.com/parkervcp/eggs"}},[t._v("额外的游戏配置")])])]),t._v(" "),s("div",{staticClass:"text-center mt-8 md:flex-1 md:mt-0"},[s("a",{attrs:{href:"https://discord.gg/pterodactyl",target:"_blank",rel:"nofollow noopener"}},[s("img",{staticClass:"w-3/4",attrs:{src:"https://cdn.pterodactyl.io/site-assets/discord.png"}})])])])}],i=s(315),r=s(330),a={components:{NavLink:i.default,Slick:r.default},data:function(){return{slickOptions:{slidesToShow:1,centerMode:!0,centerPadding:"0",speed:1e3,autoplay:!0,variableWidth:!0,arrows:!1,dots:!0,pauseOnHover:!1,pauseOnDotsHover:!0}}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},o=s(48),c=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"header section bg-blue text-grey-lightest less-padding emphasize"},[s("div",{staticClass:"container z-10"},[s("div",{staticClass:"text-center"},[t._m(0),t._v(" "),s("div",{staticClass:"mt-4"},[s("router-link",{staticClass:"btn inline-block",attrs:{to:"/panel/getting_started.html"}},[t._v("让我们开始吧！")])],1)])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"section bg-white"},[s("div",{staticClass:"text-center"},[s("h1",[t._v("屏幕截图")]),t._v(" "),s("div",{staticClass:"screenshots"},[s("slick",{ref:"slick",attrs:{options:t.slickOptions}},[s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png"}})]),t._v(" "),s("a",{attrs:{href:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png"}},[s("img",{attrs:{src:"https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png"}})])])],1)])]),t._v(" "),s("div",{staticClass:"section bg-blue text-grey-lightest"},[s("div",{staticClass:"container text-center"},[s("h1",[t._v("开始吧")]),t._v(" "),s("p",{staticClass:"m-4"},[t._v("准备好在翼龙号上飞翔了吗？")]),t._v(" "),s("div",{staticClass:"mt-4"},[s("router-link",{staticClass:"btn inline-block",attrs:{to:"/project/introduction.html"}},[t._v("关于本项目")]),t._v(" "),s("a",{staticClass:"btn inline-block",attrs:{href:"https://discord.gg/pterodactyl"}},[t._v("Discord")])],1)])]),t._v(" "),s("div",{staticClass:"section bg-black text-grey-lighter text-sm less-padding"},[s("div",{staticClass:"container text-center"},[s("div",[s("img",{staticClass:"h-20",attrs:{src:t.$withBase("logos/banner_logo.png"),alt:"pterodactyl banner logo"}})]),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"footer"},[t._v("MIT Licensed | Pterodactyl® Copyright © 2015 - 2022 Dane Everitt &\n                contributors. | which Sinicizated by Pterodactyl-China.")])])])])}),n,!1,null,null,null);e.default=c.exports}}]);