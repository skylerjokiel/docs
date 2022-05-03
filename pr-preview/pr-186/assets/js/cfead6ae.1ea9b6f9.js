"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4127],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?i.createElement(h,o(o({ref:n},p),{},{components:t})):i.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67386:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o=["components"],s={title:"Designing Permissions",sidebar_position:3},l=void 0,c={unversionedId:"security/designing-permissions",id:"security/designing-permissions",isDocsHomePage:!1,title:"Designing Permissions",description:"Ditto identities use the following JSON to describe permissions attributed to a",source:"@site/docs/security/designing-permissions.mdx",sourceDirName:"security",slug:"/security/designing-permissions",permalink:"/pr-preview/pr-186/security/designing-permissions",editUrl:"https://github.com/getditto/docs/edit/master/docs/security/designing-permissions.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Designing Permissions",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Identities",permalink:"/pr-preview/pr-186/security/identities"},next:{title:"Overview",permalink:"/pr-preview/pr-186/security/online-with-authentication/overview"}},p=[{value:"Rejecting a user",id:"rejecting-a-user",children:[],level:2},{value:"Accepting a user",id:"accepting-a-user",children:[{value:"The <code>permissions</code> response key",id:"the-permissions-response-key",children:[],level:3},{value:"Granting full permissions on all collections and all documents",id:"granting-full-permissions-on-all-collections-and-all-documents",children:[],level:3},{value:"Granting selective permissions on certain documents",id:"granting-selective-permissions-on-certain-documents",children:[],level:3}],level:2}],d={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ditto identities use the following JSON to describe permissions attributed to a\nparticular ",(0,a.kt)("inlineCode",{parentName:"p"},"userID"),", and accept or reject reads and writes from individual\nclients. This information can be encoded within the certificate\n",(0,a.kt)("a",{parentName:"p",href:"/how-it-works/certificate-security"},"manually")," or with the ",(0,a.kt)("a",{parentName:"p",href:"/security/online-with-authentication/overview"},"Online with Authentication\nidentity"),". When using\n",(0,a.kt)("inlineCode",{parentName:"p"},"onlineWithAuthentication"),", Ditto sends an HTTP POST request to your server-side\nauthentication webhook. Your server should respond with the permissions granted\nto that user."),(0,a.kt)("h2",{id:"rejecting-a-user"},"Rejecting a user"),(0,a.kt)("p",null,"To reject a user, specify the JSON payload below. When using a webhook with ",(0,a.kt)("inlineCode",{parentName:"p"},"onlineWithAuthentication"),", you do not need to manipulate the HTTP response status."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "authenticate": false\n}\n')),(0,a.kt)("h2",{id:"accepting-a-user"},"Accepting a user"),(0,a.kt)("h3",{id:"the-permissions-response-key"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"permissions")," response key"),(0,a.kt)("p",null,"Access control describes what documents a user can or cannot read or write. Again, we leverage the existing ",(0,a.kt)("a",{parentName:"p",href:"/concepts/querying"},"Ditto query language")," to describe these rules. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authenticate")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," to tell the webhook that the user has successfully validated"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expirationSeconds")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," property on how long the authentication session is valid for before a refresh is required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userID")," is a ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," which identifies the the ",(0,a.kt)("inlineCode",{parentName:"li"},"userID"),". This should be ",(0,a.kt)("em",{parentName:"li"},"unique")," across users within your app. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"permissions")," which describes all the types of access control for collections and documents that this user can ",(0,a.kt)("inlineCode",{parentName:"li"},"read")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"write"))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Currently, Ditto is only able to provide access control rules on document ",(0,a.kt)("inlineCode",{parentName:"p"},"_id")," fields. It is not able to provide access control on mutable properties. However, we are working towards the ability to write access rules on all document properties."))),(0,a.kt)("h3",{id:"granting-full-permissions-on-all-collections-and-all-documents"},"Granting full permissions on all collections and all documents"),(0,a.kt)("p",null,"To grant full ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," permissions to ",(0,a.kt)("em",{parentName:"p"},"all collections")," and ",(0,a.kt)("em",{parentName:"p"},"all documents"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "authenticate": true,\n  "expirationSeconds": 28800,\n  "userID": "123abc",\n  "permissions": {\n    // highlight-start\n    "read": {\n      "everything": true,\n      "queriesByCollection": {}\n    },\n    "write": {\n      "everything": false,\n      "queriesByCollection": {}\n    }\n    // highlight-end\n  }\n}\n')),(0,a.kt)("p",null,"To grant full ",(0,a.kt)("inlineCode",{parentName:"p"},"write")," permissions to ",(0,a.kt)("em",{parentName:"p"},"all collections")," and ",(0,a.kt)("em",{parentName:"p"},"all documents"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "authenticate": true,\n  "expirationSeconds": 28800,\n  "userID": "123abc",\n  "permissions": {\n    "read": {\n      "everything": false,\n      "queriesByCollection": {}\n    },\n    "write": {\n      "everything": true,\n      "queriesByCollection": {}\n    }\n  }\n}\n')),(0,a.kt)("p",null,"To grant full ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"write")," permissions to ",(0,a.kt)("em",{parentName:"p"},"all collections")," and ",(0,a.kt)("em",{parentName:"p"},"all documents"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "authenticate": true,\n  "expirationSeconds": 28800,\n  "userID": "123abc",\n  "permissions": {\n    "read": {\n      "everything": true,\n      "queriesByCollection": {}\n    },\n    "write": {\n      "everything": true,\n      "queriesByCollection": {}\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"granting-selective-permissions-on-certain-documents"},"Granting selective permissions on certain documents"),(0,a.kt)("p",null,"To grant selective permissions on specific documents, add to the ",(0,a.kt)("inlineCode",{parentName:"p"},"queriesByCollection")," property inside either the ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"write")," property. Each key inside ",(0,a.kt)("inlineCode",{parentName:"p"},"queriesByCollection")," is a reference to the collection. Each value is an array of ",(0,a.kt)("a",{parentName:"p",href:"/concepts/querying"},"ditto queries")," describing which documents the user can read or write."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Currently, you can ",(0,a.kt)("strong",{parentName:"p"},"only specify a permission query on the ",(0,a.kt)("inlineCode",{parentName:"strong"},"_id")," field of a document"),". Mutable properties are currently not supported. We are working on adding this feature."))),(0,a.kt)("p",null,"The following write permissions below describe that ",(0,a.kt)("inlineCode",{parentName:"p"},'userID: "123abc"')," can"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"write")," to documents in the ",(0,a.kt)("inlineCode",{parentName:"li"},'"books"')," collection where the ",(0,a.kt)("inlineCode",{parentName:"li"},"_id.title")," value ",(0,a.kt)("inlineCode",{parentName:"li"},"endsWith('Potter')"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"write")," to any document in the ",(0,a.kt)("inlineCode",{parentName:"li"},'"newspapers"')," collection. We use a single value of ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"read")," to documents in the ",(0,a.kt)("inlineCode",{parentName:"li"},'"books"')," collection where the ",(0,a.kt)("inlineCode",{parentName:"li"},"_id.title")," value ",(0,a.kt)("inlineCode",{parentName:"li"},"endsWith('Potter')"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "authenticate": true,\n  "expirationSeconds": 28800,\n  "userID": "123abc",\n  "permissions": {\n    "write": {\n      "everything": false, // ensure that this is false\n      "queriesByCollection": {\n        // highlight-start\n        // 1. \n        "books": [\n          "endsWith(_id.title, \'Potter\')"\n        ],\n        // highlight-end\n        \n        // highlight-start\n        // 2. \n        "newspapers": [\n          "true"\n        ]\n        // highlight-end\n      }\n    },\n    "read": {\n      "everything": false, // ensure that this is false\n      "queriesByCollection": {\n        // highlight-start\n        // 3.\n        "books": [\n          "endsWith(_id.title, \'Potter\')"\n        ],\n        // highlight-end\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Here is a full example for a complex permissions query: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "authenticate": true,\n  "identity": {\n      "provider": "facebook",\n      "id": true\n  },\n  "expirationSeconds": 3600,\n  "permissions": {\n      "read": {\n          "everything": true,\n          "queriesByCollection": {\n              "cars": ["_id == \'my-specific-id\'", "_id == \'id1\' || _id == \'id2"],\n              "boats": ["_id > 100", "_id > -10 && _id < 10"],\n              "foods": ["_id == false"],\n              "books": ["endsWith(_id, \'Potter\')"]\n          }\n      },\n      "write": {\n          "everything": true,\n          "queriesByCollection": {\n              "cars": ["_id.price > 1500 && _id.currency == \'USD\'", "_id.color == \'red"],\n              "boats": ["regex(_id, \'^Wave.*\')"]\n          }\n      },\n  }\n}\n')))}u.isMDXComponent=!0}}]);