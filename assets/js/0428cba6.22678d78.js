"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9842],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65534:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"3 - Node.js Example"},p=void 0,l={unversionedId:"guides/kafka/nodejs",id:"guides/kafka/nodejs",isDocsHomePage:!1,title:"3 - Node.js Example",description:"In this section we will listen to Kafka events and pipe them into a script on the commandline.",source:"@site/docs/common/guides/kafka/3-nodejs.md",sourceDirName:"guides/kafka",slug:"/guides/kafka/nodejs",permalink:"/common/guides/kafka/nodejs",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/guides/kafka/3-nodejs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3 - Node.js Example"},sidebar:"defaultSidebar",previous:{title:"2 - Ditto events",permalink:"/common/guides/kafka/consumer"},next:{title:"Identities",permalink:"/common/security/overview"}},c=[{value:"Pipe Ditto events into an existing database",id:"pipe-ditto-events-into-an-existing-database",children:[],level:2},{value:"Node.js example",id:"nodejs-example",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section we will listen to Kafka events and pipe them into a script on the commandline. "),(0,a.kt)("h2",{id:"pipe-ditto-events-into-an-existing-database"},"Pipe Ditto events into an existing database"),(0,a.kt)("p",null,"To stream events from your app starting at the beginning of time, replace\n",(0,a.kt)("inlineCode",{parentName:"p"},"--group $TOPIC")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"--offset 0 --partition 0"),". This could stream a\nsignificant number of events to your consumer for applications with a large\namount of data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$KAFKA/bin/kafka-console-consumer.sh \\\n --bootstrap-server $CLOUD_ENDPOINT \\\n --consumer-property security.protocol=SSL \\\n --consumer-property ssl.truststore.password=$CLUSTER_PW \\\n --consumer-property ssl.truststore.location=$CLUSTER_LOCATION \\\n --consumer-property ssl.keystore.password=$USER_PW \\\n --consumer-property ssl.keystore.location=$USER_LOCATION \\\n --topic $TOPIC --group $TOPIC \n")),(0,a.kt)("h2",{id:"nodejs-example"},"Node.js example"),(0,a.kt)("p",null,"We will now write a script that responds to Ditto events. This script assumes there is an HTTP server with a REST endpoint for mutating an external database."),(0,a.kt)("p",null,"Create a file ",(0,a.kt)("inlineCode",{parentName:"p"},"echo.js"),". You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"event-stream")," to split each item from the process.stdin and parse it as ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let es = require('event-stream')\nlet inspect = require('util').inspect\n\nprocess.stdin               \n    .pipe(es.split())                  \n    .pipe(es.map(function (data, cb) { \n        try {\n            let row = JSON.parse(data.toString())\n            return cb(null, inspect(row))\n        } catch (err ) {\n            return cb(null)\n        }\n    }))\n    .pipe(process.stdout)\n")),(0,a.kt)("p",null,"In a new terminal, pipe events from the Kafka script to the response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./all.sh | node echo.js\n")),(0,a.kt)("p",null,"If all is working, you should see events streaming into terminal as data is changed."))}d.isMDXComponent=!0}}]);