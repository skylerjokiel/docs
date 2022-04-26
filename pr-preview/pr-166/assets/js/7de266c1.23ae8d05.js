"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3643],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72866:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n,a=r(87462),o=r(63366),i=(r(67294),r(3905)),l=["components"],s={title:"Overview",sidebar_position:1},p=void 0,c={unversionedId:"concepts/overview",id:"concepts/overview",isDocsHomePage:!1,title:"Overview",description:"Details",source:"@site/docs/concepts/overview.mdx",sourceDirName:"concepts",slug:"/concepts/overview",permalink:"pr-preview/pr-166/concepts/overview",editUrl:"https://github.com/getditto/docs/edit/master/docs/concepts/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Rust",permalink:"pr-preview/pr-166/installation/rust"},next:{title:"Documents",permalink:"pr-preview/pr-166/concepts/documents"}},u=[{value:"Details",id:"details",children:[{value:"Big Peer",id:"big-peer",children:[],level:3},{value:"Small Peer",id:"small-peer",children:[],level:3}],level:2}],d=(n="Lottie",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{path:"/animations/intro/data.json",mdxType:"Lottie"}),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("p",null,"The Ditto platform is a fully distributed database that runs in the cloud and on local devices. Each Ditto instance is a called a ",(0,i.kt)("strong",{parentName:"p"},"peer"),". There are two types of peers in the Ditto distributed database system: ",(0,i.kt)("strong",{parentName:"p"},"Big Peer")," and ",(0,i.kt)("strong",{parentName:"p"},"Small Peer"),". When you install Ditto in a client device like a web, desktop, mobile, or IoT application, you are installing a ",(0,i.kt)("strong",{parentName:"p"},"Small Peer"),". Running on the cloud is a ",(0,i.kt)("strong",{parentName:"p"},"Big Peer"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Big Peers")," and ",(0,i.kt)("strong",{parentName:"p"},"Small Peers")," can sync with eachother with a common ",(0,i.kt)("strong",{parentName:"p"},"appID"),". To get an ",(0,i.kt)("strong",{parentName:"p"},"appID"),", ",(0,i.kt)("a",{parentName:"p",href:"https://portal.ditto.live"},"create an app on our portal.")),(0,i.kt)("h3",{id:"big-peer"},"Big Peer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Big Peers will try to sync everything from the Small Peers. If a small peer adds, removes, or updates data, the big peer will be notified of these changes. We call this an ",(0,i.kt)("strong",{parentName:"li"},"altruistic replication strategy"),"."),(0,i.kt)("li",{parentName:"ul"},"The Big Peer is capable of storing a tremendous amount of data and is capable of of sharding and partitioning. While it still looks like any peer, underneath the hood, it is capable of scaling to meet the demands of large amount of data. ",(0,i.kt)("a",{parentName:"li",href:"/how-it-works/big-peer"},"Read more about its internal architecture here.")),(0,i.kt)("li",{parentName:"ul"},"To get data in or out of the Big Peer, you can use a Small Peer or the ",(0,i.kt)("a",{parentName:"li",href:"/guides/http"},"HTTP API"),", or using our Server Side Webhooks.")),(0,i.kt)("h3",{id:"small-peer"},"Small Peer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generally, a Small Peer is embedded in a web, mobile, desktop, or IoT application. We distribute the Small Peer as an SDK with several language bindings."),(0,i.kt)("li",{parentName:"ul"},"Small peers will ",(0,i.kt)("strong",{parentName:"li"},"only sync data down from nearby Small Peers or Big Peers")," when it has a ",(0,i.kt)("a",{parentName:"li",href:"/concepts/syncing-data"},"live query"),". We call this a ",(0,i.kt)("strong",{parentName:"li"},"selfish replication strategy"),". Small peers can stop syncing by disposing or stopping a live query."),(0,i.kt)("li",{parentName:"ul"},"Small peers are not ",(0,i.kt)("strong",{parentName:"li"},"not capable of sharding or partitioning"),". It will use whatever storage size the device allows but not any more. When you buy a mobile phone with 256 GB of storage, you're stuck until you buy a new one. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Small peers are capable of using device peer to peer communication tactics")," like Bluetooth Low Energy, Wi-Fi Direct, AWDL, Wi-Fi Aware, Local Area Network, and more to transmit data.")))}f.isMDXComponent=!0}}]);