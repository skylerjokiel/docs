(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2653],{79846:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Check:()=>u,Clock:()=>k,contentTitle:()=>c,default:()=>w,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var o=n(87462),s=n(67294),i=n(3905),a=(n(8209),n(58057));const r=s.forwardRef((function(e,t){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}))})),l={title:"Overview",sidebar_position:1},c=void 0,d={unversionedId:"mesh-network/supported-transports",id:"mesh-network/supported-transports",isDocsHomePage:!1,title:"Overview",description:"export function Check() {",source:"@site/docs/common/mesh-network/supported-transports.mdx",sourceDirName:"mesh-network",slug:"/mesh-network/supported-transports",permalink:"/common/mesh-network/supported-transports",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/mesh-network/supported-transports.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Access Control Permissions",permalink:"/common/concepts/designing-permissions"},next:{title:"Online Playground",permalink:"/common/mesh-network/online-playground"}},p=[{value:"Intro to the Rainbow Connection",id:"intro-to-the-rainbow-connection",children:[],level:2},{value:"About the network transports",id:"about-the-network-transports",children:[{value:"Bluetooth Low Energy",id:"bluetooth-low-energy",children:[],level:3},{value:"Peer-to-Peer Wi-Fi",id:"peer-to-peer-wi-fi",children:[{value:"Apple Wireless Direct Link (AWDL)",id:"apple-wireless-direct-link-awdl",children:[],level:4},{value:"Wi-Fi Direct",id:"wi-fi-direct",children:[],level:4},{value:"Wi-Fi Aware",id:"wi-fi-aware",children:[],level:4}],level:3},{value:"Local Area Network",id:"local-area-network",children:[],level:3},{value:"WebSockets",id:"websockets",children:[],level:3},{value:"Universal Serial Bus (USB)",id:"universal-serial-bus-usb",children:[],level:3},{value:"The Ditto Multiplexer",id:"the-ditto-multiplexer",children:[],level:3}],level:2}];function u(){return(0,i.kt)(a.Z,{style:{width:20,height:20,margin:"auto",display:"block"},mdxType:"CheckIcon"})}function k(){return(0,i.kt)(r,{style:{width:20,height:20,margin:"auto",display:"block"},mdxType:"ClockIcon"})}const m={toc:p,Check:u,Clock:k},h="wrapper";function w(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following are the network transports supported by Ditto. By default Ditto will attempt to use all available transports if permissions are given."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(a.Z,{style:{width:18,height:18},mdxType:"CheckIcon"})," Already supported in our current releases."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(r,{style:{width:18,height:18},mdxType:"ClockIcon"})," Under development and will be released soon.")),(0,i.kt)("table",{class:"table table-bordered reference-document-table"},(0,i.kt)("thead",{class:"thead-dark"},(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"col"},"Transport"),(0,i.kt)("th",{scope:"col"},"iOS"),(0,i.kt)("th",{scope:"col"},"Android"),(0,i.kt)("th",{scope:"col"},"macOS"),(0,i.kt)("th",{scope:"col"},"Windows"),(0,i.kt)("th",{scope:"col"},"Linux"),(0,i.kt)("th",{scope:"col"},"Web Browser"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Bluetooth Low Energy (BLE)"),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Apple Wireless Direct Link (AWDL)"),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Wi-Fi Aware"),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Wi-Fi Direct"),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Clock"})),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Local Area Network (LAN)"),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"WebSockets"),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"})),(0,i.kt)("td",null,(0,i.kt)(u,{mdxType:"Check"}))),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Universal Serial Bus (USB)"),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Clock"})),(0,i.kt)("td",null,(0,i.kt)(k,{mdxType:"Clock"}))))),(0,i.kt)("h2",{id:"intro-to-the-rainbow-connection"},"Intro to the Rainbow Connection"),(0,i.kt)("p",null,"Ditto's ",(0,i.kt)("strong",{parentName:"p"},"Multiplexer")," automatically handles the complex process of establishing and maintaining these above transports for your apps and devices.\nTo learn more about these the capabilities of these transports, watch the narrated video below. "),(0,i.kt)("div",{className:"iframe-container",align:"center"},(0,i.kt)("iframe",{className:"responsive-iframe",width:"560",height:"315",src:"https://www.youtube.com/embed/8_A1CkYfzoM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("h2",{id:"about-the-network-transports"},"About the network transports"),(0,i.kt)("p",null,"The following details specific information about each transport. Please read to fully understand how each platform behaves to align your expectations. We provide some ",(0,i.kt)("em",{parentName:"p"},"estimates")," of distances and bandwidth however the environment and hardware can greatly affect these numbers."),(0,i.kt)("h3",{id:"bluetooth-low-energy"},"Bluetooth Low Energy"),(0,i.kt)("video",{autoPlay:!0,loop:!0,muted:!0},(0,i.kt)("source",{src:"/animations/transports/rainbow_connection/ble.webm",type:"video/webm"}),"Your browser does not support the video tag."),(0,i.kt)("p",null,"Ditto will use Bluetooth Low Energy (BLE) to form ",(0,i.kt)("strong",{parentName:"p"},"low-powered")," and ",(0,i.kt)("strong",{parentName:"p"},"high distance")," connections between devices. Depending on your device's chip, you may see some variation of distance and bandwidth. All devices that support Bluetooth Low Energy are fully capable of communicating with each other."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Devices can ",(0,i.kt)("em",{parentName:"li"},"discover")," each other at about 30m-60m away from each other but the connections can be sustained for further distances."),(0,i.kt)("li",{parentName:"ul"},"If your device is using a Bluetooth 4.0 chip, expect distances of 80 meters from point to point."),(0,i.kt)("li",{parentName:"ul"},"If your device is using a Bluetooth 5.x chip, expect impressive distances up to 130 meters from point to point.")),(0,i.kt)("p",null,"Most devices will have a Bluetooth 5.x chip if it was made during or after 2017. Bluetooth Low Energy is great for structured documents but performs poorly for large file sizes."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you intend to run Ditto on a Raspberry Pi or Linux device, ",(0,i.kt)("a",{parentName:"p",href:"/raspberrypi/installation"},"please follow the instructions to enable Bluetooth Low Energy support")))),(0,i.kt)("h3",{id:"peer-to-peer-wi-fi"},"Peer-to-Peer Wi-Fi"),(0,i.kt)("video",{autoPlay:!0,loop:!0,muted:!0},(0,i.kt)("source",{src:"/animations/transports/rainbow_connection/P2P.webm",type:"video/webm"}),"Your browser does not support the video tag."),"*connection maximum distance varies across P2P transport type",(0,i.kt)("h4",{id:"apple-wireless-direct-link-awdl"},"Apple Wireless Direct Link (AWDL)"),(0,i.kt)("p",null,"Apple Wireless Direct Link (AWDL) is most known for powering ",(0,i.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT204144"},"AirDrop")," and is only supported on iOS and macOS devices. Apple Wireless Direct Link does not require an internet connection and is capable of communicating as long as the device Wi-Fi settings are turned on."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distances are shorter than Bluetooth Low Energy with an average maximum of 35 meters from point-to-point."),(0,i.kt)("li",{parentName:"ul"},"However, the bandwidth is tremendously more powerful: capable of syncing 1 gigabyte of data in times as low as 8 seconds.")),(0,i.kt)("h4",{id:"wi-fi-direct"},"Wi-Fi Direct"),(0,i.kt)("p",null,"Wi-Fi Direct is supported on almost all Android (4.0 or higher, API Level 14 or higher) but only on some Windows 10 devices. P2P Wi-Fi Direct can achieve speeds as a fast as Apple Wireless Direct Link but unfortunately makes connections by requiring a permission alert to every new peer."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distances can be achieved as far as 80 meters"),(0,i.kt)("li",{parentName:"ul"},"Can send 1 gigabyte of data in times as low as 8 seconds.")),(0,i.kt)("h4",{id:"wi-fi-aware"},"Wi-Fi Aware"),(0,i.kt)("p",null,"Wi-Fi aware is a new open standard introduced to Android devices that closely resembles Apple Wireless Direct Link in terms of distance and bandwidth. It is supported at the operating system level since Android 8, however not all Android manufacturers have enabled it at the hardware level."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distances from point to point are approximately 40 meters"),(0,i.kt)("li",{parentName:"ul"},"It can sync 1 gigabyte files in as little as 8 seconds.")),(0,i.kt)("p",null,"In general most Google Pixel, Samsung, and LG phones built after 2018 can support Wi-Fi Aware. Other devices are being updated to include support. To check if your device can support Wi-Fi aware, ",(0,i.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=live.ditto.wifiawarechecker"},"download this app"),"."),(0,i.kt)("h3",{id:"local-area-network"},"Local Area Network"),(0,i.kt)("video",{autoPlay:!0,loop:!0,muted:!0},(0,i.kt)("source",{src:"/animations/transports/rainbow_connection/lan.webm",type:"video/webm"}),"Your browser does not support the video tag."),(0,i.kt)("p",null,"If devices are connected over the same Wi-Fi access point or via some other means like an ethernet cable, they can take advantage of communicating over the LAN or Local Area Network."),(0,i.kt)("p",null,"Many enterprise or educational networks may have Client Isolation Mode turned ",(0,i.kt)("strong",{parentName:"p"},"ON"),". If the network has this setting ",(0,i.kt)("strong",{parentName:"p"},"ON"),' then devices are unable to discover each other and form a connection. Almost all "home" settings have this setting turned ',(0,i.kt)("strong",{parentName:"p"},"OFF"),'. Different router manufacturers refer to this feature in a wide variety of different ways, but it generally has "isolation" in its name.'),(0,i.kt)("p",null,"Ditto's discovery protocol also uses ",(0,i.kt)("strong",{parentName:"p"},"UDP multicasting"),", which needs to be enabled if you want devices to automatically discover each other. If you don't enable multicasting, you will need to ",(0,i.kt)("a",{parentName:"p",href:"./manual#connecting-to-a-remote-ditto-instance"},"manually configure the connections")," between peers."),(0,i.kt)("p",null,"There are some limitations affecting LAN sync on ",(0,i.kt)("strong",{parentName:"p"},"iOS devices"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS devices will only sync with desktop platforms like Windows if you have ",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/forums/thread/663858"},"requested the multicast entitlement from Apple and applied it to your iOS app"),". Work is on the roadmap which will allow iOS devices to sync with all platforms, even without this entitlement."),(0,i.kt)("li",{parentName:"ul"},"iOS can always sync with other mobile devices like iOS and Android.")),(0,i.kt)("h3",{id:"websockets"},"WebSockets"),(0,i.kt)("p",null,"All devices support WebSocket connections. It is by far the most easily available network transports which require no permissions to work. In general, WebSockets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Require an internet connection for devices to communicate"),(0,i.kt)("li",{parentName:"ul"},"Cannot automatically discover each other like the other peer to peer transports.")),(0,i.kt)("p",null,"Devices need to specify an IP/PORT for a connection to be established. While most use cases require an internet connection. WebSockets can also work over the Local Area Network."),(0,i.kt)("h3",{id:"universal-serial-bus-usb"},"Universal Serial Bus (USB)"),(0,i.kt)("p",null,"If Ditto devices are active and share permissions for USB communication, Ditto will be able to form a wired connection between the two devices."),(0,i.kt)("h3",{id:"the-ditto-multiplexer"},"The Ditto Multiplexer"),(0,i.kt)("p",null,"Ditto automatically handles the complexity of maintaining the above transports. In production, the transports combine to look something like this.\nWatch how data is broken into chunks and sent across the different transports, efficiently switching as the network topology changes. "),(0,i.kt)("video",{autoPlay:!0,loop:!0,muted:!0},(0,i.kt)("source",{src:"/animations/transports/rainbow_connection/rainbow_connection_transparent.webm",type:"video/webm"}),"Your browser does not support the video tag."))}w.isMDXComponent=!0},46700:(e,t,n)=>{var o={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=i,e.exports=s,s.id=46700},58057:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(67294);const s=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}))}}]);