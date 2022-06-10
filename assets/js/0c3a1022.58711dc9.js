"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9302],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,h=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22201:function(e,t,n){n.r(t),n.d(t,{Check:function(){return k},Clock:function(){return h},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=n(14653),i=n(67804),s=["components"],c={title:"Supported Transports",sidebar_position:100},p=void 0,u={unversionedId:"mesh-network/supported-transports",id:"mesh-network/supported-transports",isDocsHomePage:!1,title:"Supported Transports",description:"export function Check() {",source:"@site/docs/common/mesh-network/supported-transports.md",sourceDirName:"mesh-network",slug:"/mesh-network/supported-transports",permalink:"/mesh-network/supported-transports",editUrl:"https://github.com/getditto/docs/edit/master/docs/common/mesh-network/supported-transports.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Supported Transports",sidebar_position:100}},d=[{value:"About the network transports",id:"about-the-network-transports",children:[{value:"Bluetooth Low Energy",id:"bluetooth-low-energy",children:[],level:3},{value:"Apple Wireless Direct Link (AWDL)",id:"apple-wireless-direct-link-awdl",children:[],level:3},{value:"Wi-Fi Direct",id:"wi-fi-direct",children:[],level:3},{value:"Wi-Fi Aware",id:"wi-fi-aware",children:[],level:3},{value:"Local Area Network",id:"local-area-network",children:[],level:3},{value:"WebSockets",id:"websockets",children:[],level:3},{value:"Universal Serial Bus (USB)",id:"universal-serial-bus-usb",children:[],level:3}],level:2}];function k(){return(0,l.kt)(a.nQG,{style:{width:20,height:20,margin:"auto",display:"block"},mdxType:"CheckIcon"})}function h(){return(0,l.kt)(i.T39,{style:{width:20,height:20,margin:"auto",display:"block"},mdxType:"ClockIcon"})}var m={toc:d,Check:k,Clock:h};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The following are the network transports supported by Ditto. By default Ditto will attempt to use all available transports if permissions are given."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(a.nQG,{style:{width:18,height:18},mdxType:"CheckIcon"})," Means already supported in our current releases."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(i.T39,{style:{width:18,height:18},mdxType:"ClockIcon"})," Means that the feature is under development and will be released soon.")),(0,l.kt)("table",{class:"table table-bordered reference-document-table"},(0,l.kt)("thead",{class:"thead-dark"},(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"col"},"Transport"),(0,l.kt)("th",{scope:"col"},"iOS"),(0,l.kt)("th",{scope:"col"},"Android"),(0,l.kt)("th",{scope:"col"},"macOS"),(0,l.kt)("th",{scope:"col"},"Windows"),(0,l.kt)("th",{scope:"col"},"Linux"),(0,l.kt)("th",{scope:"col"},"Web Browser"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},"Bluetooth Low Energy (BLE)"),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null,(0,l.kt)(h,{mdxType:"Clock"})),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},"Apple Wireless Direct Link (AWDL)"),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null),(0,l.kt)("td",null),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},"Wi-Fi Aware"),(0,l.kt)("td",null),(0,l.kt)("td",null,(0,l.kt)(h,{mdxType:"Clock"})),(0,l.kt)("td",null),(0,l.kt)("td",null),(0,l.kt)("td",null),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},"Wi-Fi Direct"),(0,l.kt)("td",null),(0,l.kt)("td",null,(0,l.kt)(h,{mdxType:"Clock"})),(0,l.kt)("td",null),(0,l.kt)("td",null,(0,l.kt)(h,{mdxType:"Clock"})),(0,l.kt)("td",null,(0,l.kt)(h,{mdxType:"Clock"})),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},"Local Area Network (LAN)"),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},"WebSockets"),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"})),(0,l.kt)("td",null,(0,l.kt)(k,{mdxType:"Check"}))),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},"Universal Serial Bus (USB)"),(0,l.kt)("td",null,(0,l.kt)(h,{mdxType:"Clock"})),(0,l.kt)("td",null,(0,l.kt)(h,{mdxType:"Clock"})),(0,l.kt)("td",null,(0,l.kt)(h,{mdxType:"Clock"})),(0,l.kt)("td",null,(0,l.kt)(h,{mdxType:"Clock"})),(0,l.kt)("td",null,(0,l.kt)(h,{mdxType:"Clock"})),(0,l.kt)("td",null,(0,l.kt)(h,{mdxType:"Clock"}))))),(0,l.kt)("h2",{id:"about-the-network-transports"},"About the network transports"),(0,l.kt)("p",null,"The following details specific information about each transport. Please read to fully understand how each platform behaves to align your expectations. We provide some ",(0,l.kt)("em",{parentName:"p"},"estimates")," of distances and bandwidth however the environment and hardware can greatly affect these numbers."),(0,l.kt)("h3",{id:"bluetooth-low-energy"},"Bluetooth Low Energy"),(0,l.kt)("p",null,"Ditto will use Bluetooth Low Energy (BLE) to form ",(0,l.kt)("strong",{parentName:"p"},"low-powered")," and ",(0,l.kt)("strong",{parentName:"p"},"high distance")," connections between devices. Depending on your device's chip, you may see some variation of distance and bandwidth. All devices that support Bluetooth Low Energy are fully capable of communicating with each other."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Devices can ",(0,l.kt)("em",{parentName:"li"},"discover")," each other at about 30m-60m away from each other but the connections can be sustained for further distances."),(0,l.kt)("li",{parentName:"ul"},"If your device is using a Bluetooth 4.0 chip, expect distances of 80 meters from point to point."),(0,l.kt)("li",{parentName:"ul"},"If your device i using a Bluetooth 5.x chip, expect impressive distances up to 130 meters from point to point.")),(0,l.kt)("p",null,"Most devices will have a Bluetooth 5.x chip if it was made during or after 2017. Bluetooth Low Energy is great for structured documents but performs poorly for large file sizes."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you intend to run Ditto on a Raspberry Pi or Linux device, ",(0,l.kt)("a",{parentName:"p",href:"/raspberrypi/installation"},"please follow the instructions to enable Bluetooth Low Energy support"))),(0,l.kt)("h3",{id:"apple-wireless-direct-link-awdl"},"Apple Wireless Direct Link (AWDL)"),(0,l.kt)("p",null,"Apple Wireless Direct Link (AWDL) is most known for powering ",(0,l.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT204144"},"AirDrop")," and is only supported on iOS and macOS devices. Apple Wireless Direct Link does not require an internet connection and is capable of communicating as long as the device Wi-Fi settings are turned on."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Distances are shorter than Bluetooth Low Energy with an average maximum of 35 meters from point-to-point."),(0,l.kt)("li",{parentName:"ul"},"However, the bandwidth is tremendously more powerful: capable of syncing 1 gigabyte of data in times as low as 8 seconds.")),(0,l.kt)("h3",{id:"wi-fi-direct"},"Wi-Fi Direct"),(0,l.kt)("p",null,"Wi-Fi Direct is supported on almost all Android (4.0 or higher, API Level 14 or higher) but only on some Windows 10 devices. P2P Wi-Fi Direct can achieve speeds as a fast as Apple Wireless Direct Link but unfortunately makes connections by requiring a permission alert to every new peer."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Distances can be achieved as far as 80 meters"),(0,l.kt)("li",{parentName:"ul"},"Can send 1 gigabyte of data in times as low as 8 seconds.")),(0,l.kt)("h3",{id:"wi-fi-aware"},"Wi-Fi Aware"),(0,l.kt)("p",null,"Wi-Fi aware is a new open standard introduced to Android devices that closely resembles Apple Wireless Direct Link in terms of distance and bandwidth. It is supported at the operating system level since Android 8, however not all Android manufacturers have enabled it at the hardware level."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Distances from point to point are approximately 40 meters"),(0,l.kt)("li",{parentName:"ul"},"It can sync 1 gigabyte files in as little as 8 seconds.")),(0,l.kt)("p",null,"In general most Google Pixel, Samsung, and LG phones built after 2018 can support Wi-Fi Aware. Other devices are being updated to include support. To check if your device can support Wi-Fi aware, ",(0,l.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=live.ditto.wifiawarechecker"},"download this app"),"."),(0,l.kt)("h3",{id:"local-area-network"},"Local Area Network"),(0,l.kt)("p",null,"If devices are connected over the same Wi-Fi access point or via some other means like an ethernet cable, they can take advantage of communicating over the LAN or Local Area Network."),(0,l.kt)("p",null,"Many enterprise or educational networks may have Client Isolation Mode turned ",(0,l.kt)("strong",{parentName:"p"},"ON"),". If the network has this setting ",(0,l.kt)("strong",{parentName:"p"},"ON"),' then devices are unable to discover each other and form a connection. Almost all "home" settings have this setting turned ',(0,l.kt)("strong",{parentName:"p"},"OFF"),'. Different router manufacturers refer to this feature in a wide variety of different ways, but it generally has "isolation" in its name.'),(0,l.kt)("p",null,"Ditto's discovery protocol also uses ",(0,l.kt)("strong",{parentName:"p"},"UDP multicasting"),", which needs to be enabled if you want devices to automatically discover each other. If you don't enable multicasting, you will need to ",(0,l.kt)("a",{parentName:"p",href:"./manual#connecting-to-a-remote-ditto-instance"},"manually configure the connections")," between peers."),(0,l.kt)("p",null,"There are some limitations affecting LAN sync on ",(0,l.kt)("strong",{parentName:"p"},"iOS devices"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"iOS devices and desktop platforms like Windows will only sync if you have ",(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/forums/thread/663858"},"requested the multicast entitlement from Apple and applied it to your iOS app"),". Work is on the roadmap which will allow iOS devices to sync with all platforms, even without this entitlement."),(0,l.kt)("li",{parentName:"ul"},"iOS can always sync with other mobile devices like iOS and Android.")),(0,l.kt)("h3",{id:"websockets"},"WebSockets"),(0,l.kt)("p",null,"All devices support WebSocket connections. It is by far the most easily available network transports which require no permissions to work. In general, WebSockets:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Require an internet connection for devices to communicate"),(0,l.kt)("li",{parentName:"ul"},"Cannot automatically discover each other like the other peer to peer transports.")),(0,l.kt)("p",null,"Devices need to specify an IP/PORT for a connection to be established. While most use cases require an internet connection. WebSockets can also work over the Local Area Network."),(0,l.kt)("h3",{id:"universal-serial-bus-usb"},"Universal Serial Bus (USB)"),(0,l.kt)("p",null,"If Ditto devices are active and share permissions for USB communication, Ditto will be able to form a wired connection between the two devices."))}f.isMDXComponent=!0}}]);