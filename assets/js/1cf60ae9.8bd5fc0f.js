"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6026],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=i,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88994:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],l={title:"2 - Configure Ditto"},s=void 0,c={unversionedId:"tutorial/uikit/configure-ditto",id:"tutorial/uikit/configure-ditto",isDocsHomePage:!1,title:"2 - Configure Ditto",description:"Now, the fun part - using Ditto! We will use CocoaPods to install the SDK.",source:"@site/docs/ios/tutorial/uikit/2-configure-ditto.md",sourceDirName:"tutorial/uikit",slug:"/tutorial/uikit/configure-ditto",permalink:"/ios/tutorial/uikit/configure-ditto",editUrl:"https://github.com/getditto/docs/tree/main/docs/ios/tutorial/uikit/2-configure-ditto.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2 - Configure Ditto"},sidebar:"docs",previous:{title:"1 - Setup",permalink:"/ios/tutorial/uikit/setup"},next:{title:"3 - Showing the List of Tasks",permalink:"/ios/tutorial/uikit/tasks-list-screen"}},p=[{value:"2-1 Setup CocoaPods",id:"2-1-setup-cocoapods",children:[],level:2},{value:"2-2 Integrate Ditto",id:"2-2-integrate-ditto",children:[],level:2},{value:"2-3 Permissions",id:"2-3-permissions",children:[],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now, the fun part - using Ditto! We will use CocoaPods to install the SDK."),(0,r.kt)("h2",{id:"2-1-setup-cocoapods"},"2-1 Setup CocoaPods"),(0,r.kt)("p",null,"If you need to install CocoaPods, please ",(0,r.kt)("a",{href:"https://guides.cocoapods.org/using/getting-started.html",target:"_blank"}," follow the installation instructions ")," at ",(0,r.kt)("a",{href:"https://cocoapods.org/",target:"_blank"}," CocoaPods.org "),"."),(0,r.kt)("h2",{id:"2-2-integrate-ditto"},"2-2 Integrate Ditto"),(0,r.kt)("p",null,"Close the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tasks.xcodeproj")," project for now because CocoaPods will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tasks.xcworkspace")," which automatically integrates the libraries into your project. Then in your terminal navigate to the directory which contains your ",(0,r.kt)("inlineCode",{parentName:"p"},"Tasks.xcodeproj")," file and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pod init\n")),(0,r.kt)("p",null,"This will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile")," which you will open and add Ditto to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=Podfile",title:"Podfile"},"# Uncomment the next line to define a global platform for your project\n# platform :ios, '9.0'\n\ntarget 'Tasks' do\n  # Comment the next line if you don't want to use dynamic frameworks\n  use_frameworks!\n\n  # Pods for Tasks\n  pod 'DittoSwift', '~> 1.0.6'\n\nend\n")),(0,r.kt)("p",null,"Save the ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile")," and close it then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pod install --repo-update\n")),(0,r.kt)("p",null,"This will install Ditto as a dependency and create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tasks.xcworkspace")," file with the SDK integrated. Once it is finished open up ",(0,r.kt)("inlineCode",{parentName:"p"},"Tasks.xcworkspace"),".\nYou now have Ditto installed in the application! To verify and ensure we can use the SDK add the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},"TasksTableViewController")," underneath ",(0,r.kt)("inlineCode",{parentName:"p"},"import UIKit"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import DittoSwift\n")),(0,r.kt)("h2",{id:"2-3-permissions"},"2-3 Permissions"),(0,r.kt)("p",null,"Since iOS 13 and Xcode 11 an app must ask the user's permission to use\nBluetooth. Ditto will activate Bluetooth by default, which means the user will\nreceive a permission prompt automatically. In addition, since iOS 14 an app must\nask the user's permission to use the Local Area Network to discover devices."),(0,r.kt)("p",null,"You must include several keys in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Info.plist")," file your app"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Privacy - Local Network Usage Description"),(0,r.kt)("li",{parentName:"ul"},"Privacy - Bluetooth Peripheral Usage Description"),(0,r.kt)("li",{parentName:"ul"},"Privacy - Bluetooth Always Usage Description"),(0,r.kt)("li",{parentName:"ul"},"A Bonjour service ",(0,r.kt)("inlineCode",{parentName:"li"},"_http-alt._tcp"),".")),(0,r.kt)("p",null,"These can be configured through Xcode's ",(0,r.kt)("em",{parentName:"p"},"Info")," project settings."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(27336).Z})),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Alternatively, add the keys directly to ",(0,r.kt)("inlineCode",{parentName:"p"},"Info.plist"),". Right click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Info.plist")," and hover to ",(0,r.kt)("inlineCode",{parentName:"p"},"Open as")," and then click ",(0,r.kt)("inlineCode",{parentName:"p"},"Source Code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=Info.plist",title:"Info.plist"},"<key>NSBluetoothAlwaysUsageDescription</key>\n<string>Uses Bluetooth to connect and sync with nearby devices</string>\n<key>NSBluetoothPeripheralUsageDescription</key>\n<string>Uses Bluetooth to connect and sync with nearby devices</string>\n<key>NSLocalNetworkUsageDescription</key>\n<string>Uses WiFi to connect and sync with nearby devices</string>\n<key>NSBonjourServices</key>\n<array>\n  <string>_http-alt._tcp.</string>\n</array>\n")))}d.isMDXComponent=!0},27336:function(e,t,n){t.Z=n.p+"assets/images/ios-permissions-8bbc0214c159ee53889bdc73b76db25d.png"}}]);