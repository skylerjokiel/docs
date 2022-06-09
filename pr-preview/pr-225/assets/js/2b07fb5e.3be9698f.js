(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5841],{76186:function(t,e,i){"use strict";i.r(e),i.d(e,{contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=i(87462),o=i(63366),a=(i(67294),i(3905)),r=i(93456),s=["components"],l={title:"Introduction"},u=void 0,d={unversionedId:"guides/authentication/intro",id:"guides/authentication/intro",isDocsHomePage:!1,title:"Introduction",description:'The "Online With Authentication" identity type is geared towards apps will be',source:"@site/docs/guides/authentication/1-intro.mdx",sourceDirName:"guides/authentication",slug:"/guides/authentication/intro",permalink:"/pr-preview/pr-225/guides/authentication/intro",editUrl:"https://github.com/getditto/docs/edit/master/docs/guides/authentication/1-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"4 - Producing events",permalink:"/pr-preview/pr-225/guides/kafka/producers"},next:{title:"Server-side Webhook",permalink:"/pr-preview/pr-225/guides/authentication/server"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"How it works",id:"how-it-works",children:[],level:2}],p={toc:c};function h(t){var e=t.components,i=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'The "Online With Authentication" identity type is geared towards apps will be\ndeployed in real world settings. "Online With Authentication" identity types\nare: '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"for apps that need to integrate with existing permissions"),(0,a.kt)("li",{parentName:"ul"},"for apps that need to integrate with existing authentication systems")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"This section will require knowledge of writing server side HTTP endpoints and handlers.")," The server side sample code is written in JavaScript (NodeJS with an ",(0,a.kt)("a",{parentName:"li",href:"https://expressjs.com/"},"Express"),"-like API), however you can use any framework or language of your choosing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"We will use Auth0 in this tutorial.")," But you can use any third-party identity provider. Each app can use multiple identity providers. Identity providers can be: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Your own service"),(0,a.kt)("li",{parentName:"ul"},"Facebook, Twitter, GitHub, etc..."),(0,a.kt)("li",{parentName:"ul"},"Okta, Auth0, Stytch, etc...")))))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this tutorial, you'll build a simple application so users can log in with a\na third-party provider using ",(0,a.kt)("a",{parentName:"p",href:"https://auth0.com/"},"Auth0"),". This is used to\nauthenticate read and/or write access to your Ditto database."),(0,a.kt)("p",null,"For the full application code in React and iOS, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/getditto/samples/tree/master/authentication"},"code samples on\nGitHub"),"."),(0,a.kt)("p",null,"We assume that you have already completed the Auth0 tutorial on their documentation before starting this tutorial. "),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,'To use the "Online With Authentication" system, your client application is expected to authenticate with your identity system and retrieve some sort of token ',(0,a.kt)("em",{parentName:"p"},"prior")," to syncing with Ditto. Often times this token is some sort of identity token, access token, commonly in the format of a JWT (JSON Web Token)."),(0,a.kt)("p",null,"Once your client application successfully has retrieved this token, it should pass it to the Ditto ",(0,a.kt)("inlineCode",{parentName:"p"},"authenticator")," which will pass it to an authentication webhook. As the developer, you are responsible for writing code and deploying the this webhook to an accessible URL. The authentication webhook will validate and decode the token from the client side and return identity and access control information back to your Ditto instance. "),(0,a.kt)("p",null,"The full flow is detailed in the diagram below:"),(0,a.kt)(r.Mermaid,{chart:"sequenceDiagram\n    Client App->>Your Authentication Mechanism: Send Credentials\n    Your Authentication Mechanism->>Client App: Return JWT\n    Client App->>Ditto Big Peer: JWT\n    Ditto Big Peer->>Auth Webhook: JWT \n    Auth Webhook->>Ditto Big Peer: Formatted Ditto Auth Response\n    Ditto Big Peer->>Client App: Ditto Credentials\n    rect rgba(0, 0, 255, .1)\n      Client App->Ditto Big Peer: Ditto Sync\n    end",config:{mermaid:{themeVariables:{fontFamily:"Helvetica"},sequence:{actorFontFamily:"Helvetica",noteFontFamily:"Helvetica",messageFontFamily:"Helvetica"},journey:{taskFontFamily:"Helvetica"}}},mdxType:"Mermaid"}))}h.isMDXComponent=!0},11748:function(t,e,i){var n={"./locale":89234,"./locale.js":89234};function o(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=a,t.exports=o,o.id=11748}}]);