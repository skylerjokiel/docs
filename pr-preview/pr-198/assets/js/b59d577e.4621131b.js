"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6137],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11550:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={sidebar_position:7,pagination_prev:"intro",pagination_next:"concepts/overview"},u="Linux (Raspberry Pi)",s={unversionedId:"installation/linux",id:"installation/linux",isDocsHomePage:!1,title:"Linux (Raspberry Pi)",description:"If you would like to run Ditto on a Linux device and leverage Bluetooth Low Energy please follow the instructions. These instructions are required to run on Linux regardless of the programming language. This means that if you are running the JavaScript (Node/Electron), C#, or C++ SDKs on Linux and need to use Bluetooth Low Energy, then you should follow these additional instructions.",source:"@site/docs/installation/linux.md",sourceDirName:"installation",slug:"/installation/linux",permalink:"/pr-preview/pr-198/installation/linux",editUrl:"https://github.com/getditto/docs/edit/master/docs/installation/linux.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,pagination_prev:"intro",pagination_next:"concepts/overview"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/pr-preview/pr-198/"},next:{title:"Overview",permalink:"/pr-preview/pr-198/concepts/overview"}},p=[],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linux-raspberry-pi"},"Linux (Raspberry Pi)"),(0,i.kt)("p",null,"If you would like to run Ditto on a Linux device and leverage Bluetooth Low Energy please follow the instructions. ",(0,i.kt)("strong",{parentName:"p"},"These instructions are required to run on Linux regardless of the programming language.")," This means that if you are running the JavaScript (Node/Electron), C#, or C++ SDKs on Linux and need to use Bluetooth Low Energy, then you should follow these additional instructions."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install or update BlueZ 5.51 or higher")),(0,i.kt)("p",null,"Your device will need to install or update BlueZ with version 5.51 or higher. We've outlined a quick snippet set of instructions below to install BlueZ 5.61 as an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get upgrade\nsudo apt-get install libdbus-1-dev libglib2.0-dev libudev-dev libical-dev libreadline-dev python-docutils -y\nwget http://www.kernel.org/pub/linux/bluetooth/bluez-5.61.tar.xz\ntar -xf bluez-5.61.tar.xz\ncd bluez-5.61\n./configure\nmake\nsudo make install\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add support for Linux to iOS connections.")),(0,i.kt)("p",null,"BlueZ 5.51 and above try to automatically read the battery status/service of devices when they connect. However, by default, iOS devices will prevent BlueZ services from reading the battery service. As a result, BlueZ connection attempts will cause iOS devices to show a pairing prompt constantly. Therefore, we will need to disable the battery service in BlueZ, use the following steps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the bluetooth service file. Depending on your system, it will be located either at ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/bluetooth.service"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/bluetooth.target.wants/bluetooth.service"),". Use your favorite text editor like vim or nano to edit these files. In addition, you may need sudo permission to write to this file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the line beginning with ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecStart=")," and add ",(0,i.kt)("inlineCode",{parentName:"p"},"-P battery")," to the end. Now the line should look like this:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ExecStart=/usr/lib/bluetooth/bluetoothd -P battery\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Save the file."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"systemctl daemon-reload")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"systemctl restart bluetooth")," to apply the changes to the Bluetooth service\nAfter that, BlueZ should be able to connect to iOS devices without prompting and Ditto Apps should be able to communicate over BLE between iOS and Linux.")))}d.isMDXComponent=!0}}]);