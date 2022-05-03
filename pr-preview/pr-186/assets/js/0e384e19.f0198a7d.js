"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9671],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:e},u),{},{components:n})):r.createElement(m,a({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62275:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(87462),o=n(67294),i=n(11248),a=n.n(i);function c(t){var e=(0,o.useRef)(null);return(0,o.useLayoutEffect)((function(){var n,r=e.current;return r&&(n=a().loadAnimation({container:r,path:t.path})),function(){var t;null==(t=n)||t.destroy()}}),[t.path]),o.createElement("div",(0,r.Z)({},t,{ref:e}))}},59881:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=n(62275),c=["components"],l={title:"Introduction",slug:"/",sidebar_position:1},s=void 0,u={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Ditto is a cross-platform peer-to-peer database that allows apps to sync with and even without internet connectivity.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/pr-preview/pr-186/",editUrl:"https://github.com/getditto/docs/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Supported Platforms",permalink:"/pr-preview/pr-186/installation/supported-platforms"}},p=[],d={toc:p};function f(t){var e=t.components,n=(0,o.Z)(t,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ditto is a cross-platform peer-to-peer database that allows apps to sync ",(0,i.kt)("em",{parentName:"p"},"with")," and ",(0,i.kt)("em",{parentName:"p"},"even without"),' internet connectivity.\nInstall Ditto into your application, then use the APIs to read and write data into its storage system, and it will then automatically sync any changes to other devices. Unlike other synchronization solutions, Ditto is designed for "peer-to-peer" synchronization where it can directly communicate with other devices even without an internet connection. In addition, Ditto automatically manages the complexity of using multiple network transports, like Bluetooth, P2P Wi-Fi, and Local Area Network, to find and connect to other devices and then synchronize any changes.'),(0,i.kt)("p",null,"In short, Ditto enables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blazing fast peer-to-peer and client-server sync"),(0,i.kt)("li",{parentName:"ul"},"Concurrent edits and conflict resolution"),(0,i.kt)("li",{parentName:"ul"},"Offline Caching with an embedded database "),(0,i.kt)("li",{parentName:"ul"},"Cross platform support on Web Browsers, iOS, Android, IoT, and server side apps."),(0,i.kt)("li",{parentName:"ul"},"Replicating structured data and even small or large binary files")),(0,i.kt)(a.Z,{path:"/animations/intro/data.json",mdxType:"Lottie"}))}f.isMDXComponent=!0}}]);