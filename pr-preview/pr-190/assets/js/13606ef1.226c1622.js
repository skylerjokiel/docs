"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4425],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22450:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"Intro",sidebar_position:1,slug:"/concepts/security"},s=void 0,l={unversionedId:"security/intro",id:"security/intro",isDocsHomePage:!1,title:"Intro",description:'Most applications need way to control which users can write or read certain data. For example, you might build an application where senior staff members can READ and WRITE documents in the "menuItems" collection while junior staff members can only READ. This section will describe how you can:',source:"@site/docs/security/intro.mdx",sourceDirName:"security",slug:"/concepts/security",permalink:"/pr-preview/pr-190/concepts/security",editUrl:"https://github.com/getditto/docs/edit/master/docs/security/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Intro",sidebar_position:1,slug:"/concepts/security"},sidebar:"tutorialSidebar",previous:{title:"HTTP API",permalink:"/pr-preview/pr-190/guides/http"},next:{title:"Identities",permalink:"/pr-preview/pr-190/security/identities"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most applications need way to control which users can write or read certain data. For example, you might build an application where senior staff members can ",(0,o.kt)("inlineCode",{parentName:"p"},"READ")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"WRITE")," documents in the ",(0,o.kt)("inlineCode",{parentName:"p"},'"menuItems"')," collection while junior staff members can only ",(0,o.kt)("inlineCode",{parentName:"p"},"READ"),". This section will describe how you can:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Identify users "),(0,o.kt)("li",{parentName:"ol"},"Give users read or write control "),(0,o.kt)("li",{parentName:"ol"},"Integrate with your existing authentication systems")),(0,o.kt)("p",null,"Ditto security is controlled by ",(0,o.kt)("strong",{parentName:"p"},"identities"),". An identity is a combination of a ",(0,o.kt)("inlineCode",{parentName:"p"},"userID")," and a set of ",(0,o.kt)("inlineCode",{parentName:"p"},"permissions")," that identifies how a Ditto instance behaves with other ditto instances. "),(0,o.kt)("p",null,"There are several types of identities, but for the vast majority of applications you should be familiar with two in particular:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/concepts/online-playground"},"Online Playground")," - great for prototyping with Ditto. Beginners should start here!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/security/online-with-authentication/overview"},"Online With Authentication")," - for apps that you'll deploy with authentication and customized permissioning with webhooks ")),(0,o.kt)("p",null,"There are other identities geared towards peer-to-peer only scenarios. ",(0,o.kt)("a",{parentName:"p",href:"/security/identities"},"You can read more about them here.")))}d.isMDXComponent=!0}}]);