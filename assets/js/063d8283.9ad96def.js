"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9716],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},50494:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(87462),a=n(63366),o=n(86010),i=n(67294),c=n(45697),s=n.n(c),l=n(44225),u=n(90401),m=n(23184),d=n(53382),p=n(89713),f=n(35044),v=n(63680),y=n(78372),g=n(30396);var h=["className"],b=["className"],w=["className"],C=["className"],N=["className"],x=["className"],E=["className"],Z=function(e){var t=e.className,n=(0,a.Z)(e,h);return i.createElement(l.t,(0,r.Z)({className:(0,o.Z)("text-[#3ddb85]",t)},n))},k=function(e){var t=e.className,n=(0,a.Z)(e,b);return i.createElement(u.A,(0,r.Z)({className:(0,o.Z)("text-text",t)},n))};k.propTypes=Z.propTypes={className:s().string};var O=[{id:"javascript",name:"JavaScript",icon:function(e){return i.createElement("svg",(0,r.Z)({viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i.createElement("path",{d:"M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z",fill:"#F5DE19"}),i.createElement("path",{d:"M32.3894 37.6804C32.8 38.5145 33.4379 39.2155 34.2296 39.7027C35.0213 40.1899 35.9346 40.4435 36.8642 40.4342C38.7402 40.4342 39.9398 39.4962 39.9398 38.1968C39.9398 36.6478 38.7075 36.0936 36.6422 35.19L35.5097 34.7047C32.2396 33.3123 30.071 31.5688 30.071 27.8822C30.071 24.4865 32.6527 21.8997 36.7024 21.8997C38.0134 21.805 39.3232 22.0984 40.4686 22.7433C41.6139 23.3882 42.544 24.356 43.1428 25.5261L39.6025 27.7893C39.3719 27.2092 38.9704 26.7128 38.4512 26.3661C37.9321 26.0194 37.3198 25.8387 36.6956 25.8479C36.4232 25.8206 36.1482 25.8504 35.888 25.9353C35.6278 26.0202 35.3881 26.1584 35.1842 26.341C34.9804 26.5237 34.8168 26.7468 34.7039 26.9961C34.5911 27.2455 34.5314 27.5156 34.5287 27.7893C34.5287 29.1472 35.3703 29.698 37.3134 30.5431L38.4459 31.0284C42.2943 32.6789 44.4698 34.3604 44.4698 38.1417C44.4698 42.219 41.2668 44.453 36.9658 44.453C35.2899 44.5597 33.619 44.1793 32.1546 43.3574C30.6902 42.5356 29.495 41.3076 28.7131 39.8215L32.3894 37.6804ZM16.3917 38.0728C17.1025 39.3344 17.7496 40.4015 19.3055 40.4015C20.7925 40.4015 21.7323 39.8198 21.7323 37.5565V22.1579H26.2605V37.6168C26.2605 42.305 23.5067 44.4392 19.4983 44.4392C18.0814 44.5166 16.6742 44.1635 15.4617 43.4263C14.2493 42.689 13.2883 41.6022 12.7051 40.3086L16.3917 38.0728Z",fill:"black"}))}},{id:"android",name:"Android",icon:Z},{id:"ios",name:"iOS",icon:k},{id:"csharp",name:"C#",icon:function(e){var t=e.className,n=(0,a.Z)(e,E);return i.createElement(v.F,(0,r.Z)({className:(0,o.Z)("text-[#08940e]",t)},n))}},{id:"http",name:"HTTP",icon:p.d},{id:"raspberrypi",name:"RaspberryPi",icon:function(e){var t=e.className,n=(0,a.Z)(e,C);return i.createElement(g.n,(0,r.Z)({className:(0,o.Z)("text-[#cc2555]",t)},n))}},{id:"rust",name:"Rust",icon:function(e){var t=e.className,n=(0,a.Z)(e,w);return i.createElement(y.T,(0,r.Z)({className:(0,o.Z)("text-[black]",t)},n))}},{id:"cpp",name:"C++",icon:function(e){var t=e.className,n=(0,a.Z)(e,x);return i.createElement(m.q,(0,r.Z)({className:(0,o.Z)("text-[#283492]",t)},n))}},{id:"xamarin",name:"Xamarin",icon:function(e){var t=e.className,n=(0,a.Z)(e,N);return i.createElement(f.w,(0,r.Z)({className:(0,o.Z)("text-[#3097d8]",t)},n))},disabled:!0},{id:"flutter",name:"Flutter",icon:d.W,disabled:!0}]},480:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return v}});var r=n(87462),a=n(63366),o=n(67294),i=n(3905),c=n(80944),s=n(50494),l="platform";function u(e){var t=(0,c.Z)(),n=t.tabGroupChoices,r=t.setTabGroupChoices;n.platform;return o.createElement("div",{className:"grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 text-center"},s.Z.map((function(e){return e.disabled?o.createElement("div",{key:"/"+e.id+"-language-list",className:"language-card relative"},o.createElement("div",{className:"max-w-sm shadow-lg overflow-hidden"},o.createElement("div",{className:"overlay font-bold text-xl"},"Coming Soon"),o.createElement("div",{className:"px-6 text-center"},o.createElement(e.icon,{className:"h-28 mt-4"}),o.createElement("p",{className:"font-bold no-underline text-xl mt-2"},e.name)))):o.createElement("div",{key:"/"+e.id+"-language-list",className:"language-card"},o.createElement("a",{href:"/"+e.id+"/installation",className:"no-underline",onClick:function(t){return function(e,t){e.preventDefault(),r(l,t.id),window.location.href="/"+t.id+"/installation"}(t,e)}},o.createElement("div",{className:"max-w-sm shadow-lg overflow-hidden hover:bg-gray-100"},o.createElement("div",{className:"px-6"},o.createElement(e.icon,{className:"h-28 mt-4 m-auto"}),o.createElement("p",{className:"font-bold no-underline text-xl mt-2"},e.name)))))})))}var m=["components"],d={title:"Introduction",slug:"/",sidebar_position:1},p=void 0,f={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Ditto is a cross-platform peer-to-peer database that allows apps to sync with and even without internet connectivity.",source:"@site/docs/common/intro.mdx",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/getditto/docs/edit/master/docs/common/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",slug:"/",sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Overview",permalink:"/concepts/overview"}},v=[{value:"Documentation and Guides",id:"documentation-and-guides",children:[],level:2}],y={toc:v};function g(e){var t=e.components,n=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ditto is a cross-platform peer-to-peer database that allows apps to sync ",(0,i.kt)("em",{parentName:"p"},"with")," and ",(0,i.kt)("em",{parentName:"p"},"even without"),' internet connectivity.\nInstall Ditto into your application, then use the APIs to read and write data into its storage system, and it will then automatically sync any changes to other devices. Unlike other synchronization solutions, Ditto is designed for "peer-to-peer" synchronization where it can directly communicate with other devices even without an internet connection. In addition, Ditto automatically manages the complexity of using multiple network transports, like Bluetooth, P2P Wi-Fi, and Local Area Network, to find and connect to other devices and then synchronize any changes.'),(0,i.kt)("p",null,"In short, Ditto enables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blazing fast peer-to-peer and client-server sync"),(0,i.kt)("li",{parentName:"ul"},"Concurrent edits and conflict resolution"),(0,i.kt)("li",{parentName:"ul"},"Offline Caching with an embedded database "),(0,i.kt)("li",{parentName:"ul"},"Cross platform support on Web Browsers, iOS, Android, IoT, and server side apps."),(0,i.kt)("li",{parentName:"ul"},"Replicating structured data and even small or large binary files")),(0,i.kt)("h2",{id:"documentation-and-guides"},"Documentation and Guides"),(0,i.kt)(u,{mdxType:"LanguageGrid"}))}g.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);