"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9357],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62331:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"1 - Setup"},i=void 0,l={unversionedId:"tutorial/swift/setup",id:"tutorial/swift/setup",isDocsHomePage:!1,title:"1 - Setup",description:"The following guide will show you how to build a task list application for iOS using SwiftUI.",source:"@site/docs/ios/tutorial/swift/1-setup.md",sourceDirName:"tutorial/swift",slug:"/tutorial/swift/setup",permalink:"/ios/tutorial/swift/setup",editUrl:"https://github.com/getditto/docs/tree/main/docs/ios/tutorial/swift/1-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1 - Setup"},sidebar:"docs",previous:{title:"Installation",permalink:"/ios/installation"},next:{title:"2 - Configure Ditto",permalink:"/ios/tutorial/swift/configure-ditto"}},p=[{value:"1-1 Create the App",id:"1-1-create-the-app",children:[],level:2},{value:"1-2 Add dependencies (Cocoapods or Swift Package Manager)",id:"1-2-add-dependencies-cocoapods-or-swift-package-manager",children:[],level:2}],c={toc:p};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following guide will show you how to build a task list application for iOS using ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swiftui/"},"SwiftUI"),"."),(0,o.kt)("p",null,"Before getting started, you will need the latest version of ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/xcode/id497799835"},"Xcode"),". This tutorial was written with Xcode 12.5.1. In addition, you should have a decent familiarity with Swift."),(0,o.kt)("h2",{id:"1-1-create-the-app"},"1-1 Create the App"),(0,o.kt)("p",null,"Once you've installed the latest version of Xcode installed, Click ",(0,o.kt)("strong",{parentName:"p"},"File > New Project")," and select ",(0,o.kt)("inlineCode",{parentName:"p"},"App")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(86479).Z})),(0,o.kt)("p",null,"Fill out the information on the form similar to the screenshot below. These are recommended values however they are not crucial to complete this tutorial:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: ",(0,o.kt)("inlineCode",{parentName:"li"},'"Tasks"')),(0,o.kt)("li",{parentName:"ul"},"Organization Identifier: ",(0,o.kt)("inlineCode",{parentName:"li"},'"live.ditto"'),". However, feel free to use your own value here."),(0,o.kt)("li",{parentName:"ul"},"Interface: SwiftUI"),(0,o.kt)("li",{parentName:"ul"},'Life Cycle: "UIKit App Delegate"'),(0,o.kt)("li",{parentName:"ul"},"Language: Swift")),(0,o.kt)("p",null,'And finally click "Next" and select a directory to create the application.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(57863).Z})),(0,o.kt)("h2",{id:"1-2-add-dependencies-cocoapods-or-swift-package-manager"},"1-2 Add dependencies (Cocoapods or Swift Package Manager)"),(0,o.kt)("p",null,"Follow the instructions on the ",(0,o.kt)("a",{parentName:"p",href:"/ios/installation"},"Installation page for iOS")," to use CocoaPods or Swift Package Manager."))}s.isMDXComponent=!0},86479:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/xcode-app-type-selection-49a7962e3ed8213fafe0ac0ea1869f0d.png"},57863:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/xcode-project-form-fill-ba7334a9a7a4b5c5d9638870cf16cfd0.png"}}]);