(window.webpackJsonp=window.webpackJsonp||[]).push([[63,52,53,54],{376:function(t){t.exports=JSON.parse('{"a":"https://groovy.bot","b":{"home":{"short":"Groovy","title":"Groovy - The Best Discord Music Bot","description":"An incredibly easy to use music bot for Discord that doesn\'t skip on features. Supports YouTube, Spotify, Apple Music and more. Invite Groovy today and start listening to your favorite songs together with your friends!"},"commands":{"short":"Groovy\'s Commands","title":"Groovy\'s Commands - A Highly Detailed Documentation","description":"Find documentation on all the commands and features Groovy offers as well as check which commands require which permissions!"},"premium":{"short":"Groovy Premium","title":"Groovy Premium - Spice Up Your Discord Server","description":"Unlock neat and powerful features like volume control and audio effects for Groovy in order to enhance your Discord server!"},"guilds":{"short":"Your Discord Servers","title":"Groovy Dashboard - Manage Your Discord Servers","description":"Manage and configure your Discord servers from anywhere in the world at one place!"},"guild":{"short":"Your Discord Server","title":"Configure Your Discord Server","description":"Configure your Discord server from anywhere in the world! Manage your premium upgrade if you\'ve applied one!"},"invite":{"short":"Invite Groovy","title":"Invite Groovy - Start Listening Today","description":"Invite Groovy to your Discord server today and start listening to your favorite songs together with your friends on the best music bot!"},"login":{"short":"Groovy Login","title":"Groovy Login - Manage Your Subscription And Upgrades","description":"Log in to Groovy\'s dashboard and manage all of your Discord server at one place! You\'ll also be able to subscribe to our premium plans and add or remove upgrades!"}}}')},396:function(t,e,o){"use strict";o.r(e);var r={props:{title:{type:String,required:!0,default:"N/A"},description:{type:String,required:!0,default:"N/A"},init:{type:Boolean,required:!1,default:!1}},data:()=>({active:!1}),computed:{maxActiveHeight(){return this.$refs.content.scrollHeight}},mounted(){this.active=this.init},methods:{toggle(){this.active=!this.active}}},n=o(8),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col bg-gray-base max-w-screen-xl p-4 rounded shadow-md overflow-hidden cursor-pointer mb-4 last:mb-0 w-full",on:{click:function(e){return t.toggle()}}},[o("div",{ref:"overview",staticClass:"flex items-center"},[o("fa",{class:(t.active?"transform origin-center rotate-90 transition duration-200 ease-in-out":"transform origin-center rotate-0 transition duration-200 ease-in-out")+" text-lg xl:text-xl w-4 h-4 xl:w-6 xl:h-6",attrs:{icon:"angle-right"}}),t._v(" "),o("p",{staticClass:"text-xl lg:text-2xl font-bold ml-2"},[t._v("\n      "+t._s(t.title)+"\n    ")])],1),t._v(" "),o("div",{ref:"content",style:"transition: max-height 200ms ease-in-out; "+(t.active?"max-height: "+t.maxActiveHeight+"px;":"max-height: 0;")},[o("p",{staticClass:"mt-4 lg:text-xl"},[t._v("\n      "+t._s(t.description)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},404:function(t){t.exports=JSON.parse('[{"content":"Groovy source code?","answer":"We don\'t plan on open-sourcing Groovy. There have already been cases of copyright owners attacking open-source repositories, and we don\'t want to be involved in that."},{"content":"What about premium users?","answer":"We\'ve initiated refunds for everyone, they can take a while depending on your bank."},{"content":"What are the alternatives?","answer":"We generally discourage you from using any music bot following this."},{"content":"Can\'t you just use a different platform?","answer":"That\'s delaying the inevitable. This has shown us that what we\'re doing is an issue, and other platforms will probably follow suit with YouTube."},{"content":"Is this related to YouTube Together?","answer":"We don\'t know. There have been rumors, but we can\'t confirm nor deny these."},{"content":"Why Groovy?","answer":"We\'re guessing Groovy won\'t be the only one getting such a notification. We were just very quick to respond to it and inform our users and partners."},{"content":"What can I do to help?","answer":"Stay in the community server & follow news - we\'ll be working on other cool things."},{"content":"Will Groovy be deleted?","answer":"No, it will most likely be offline."},{"content":"What\'s happening to the community server?","answer":"We will be keeping the Discord community server indefinitely."}]')},425:function(t,e,o){"use strict";o.r(e);var r={},n=o(8),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"max-w-full"},[o("div",{staticClass:"flex flex-col"},[t._m(0),t._v(" "),o("div",{staticClass:"flex flex-col lg:flex-row items-center lg:justify-center mt-4 lg:mt-6 px-8 mb-8 lg:mb-10"},[o("nuxt-link",{staticClass:"btn btn-primary text-center text-lg lg:text-xl font-bold rounded-full py-2 px-4 lg:py-3 lg:px-6 w-64 lg:mx-2",attrs:{to:"/store"}},[t._v("\n        Merch Store\n      ")]),t._v(" "),o("nuxt-link",{staticClass:"btn text-center text-lg lg:text-xl font-bold bg-gray-lightest text-gray-dark rounded-full py-2 px-4 lg:py-3 lg:px-6 w-64 mt-4 lg:mt-0 lg:mx-2",attrs:{to:"/support"}},[t._v("\n        Support Server\n      ")])],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col items-center px-8"},[o("h1",{staticClass:"text-center text-4xl lg:text-6xl font-bold"},[t._v("\n        Groovy has"),o("br"),t._v("ended its service.\n      ")]),t._v(" "),o("h2",{staticClass:"text-center text-2xl lg:text-3xl opacity-75 max-w-screen-md mt-2 lg:mt-4"},[t._v("\n        We have received legal notice and cooperated accordingly. Thank you everyone for flying with Groovy.\n      ")])])}],!1,null,null,null);e.default=component.exports},426:function(t,e,o){"use strict";o.r(e);var r=o(404),n={data:()=>({faq:r})},l=o(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col items-center"},[o("p",{staticClass:"bg-purple-light bg-opacity-75 transition-colors duration-150 hover:bg-opacity-90 uppercase select-none text-lg text-gray-lightest px-3 py-1 rounded shadow mb-8"},[t._v("\n    faq\n  ")]),t._v(" "),o("div",{staticClass:"content pb-4 xl:pb-8"},t._l(t.faq,(function(t,e){return o("shutdown-collapsible",{key:e+"-"+t.content.split(" ")[0],attrs:{title:t.content,description:t.answer}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ShutdownCollapsible:o(396).default})},438:function(t,e,o){t.exports=o.p+"img/7b5cd20.svg"},462:function(t,e,o){"use strict";o.r(e);var meta=o(376),{short:r,title:title,description:n}=meta.b.home,l={head(){return{title:title,meta:[{hid:"description",name:"description",content:n},{hid:"og:title",property:"og:title",content:title},{hid:"og:site_name",property:"og:site_name",content:r},{hid:"og:url",property:"og:url",content:"".concat(meta.a).concat(this.$route.path)},{hid:"og:description",property:"og:description",content:n}],link:[{rel:"canonical",href:"".concat(meta.a).concat(this.$route.path)}]}}},c=o(8),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"root overflow-hidden"},[r("div",{staticClass:"wrapper bg-gray-base bg-center bg-cover bg-clip-border",style:"background-image: url("+o(438)+")"},[r("div",{staticClass:"wrapper pt-40 lg:pt-52 pb-8 lg:pb-16"},[r("shutdown")],1)]),t._v(" "),r("div",{staticClass:"wrapper bg-gray-dark"},[r("div",{staticClass:"wrapper py-8 lg:py-12"},[r("shutdown-faq")],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Shutdown:o(425).default,ShutdownFaq:o(426).default})}}]);