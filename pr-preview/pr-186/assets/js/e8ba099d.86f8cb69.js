(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7888],{40957:function(e,t,i){"use strict";i.r(t),i.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return p}});var o=i(87462),n=i(63366),a=(i(67294),i(3905)),r=i(93456),s=["components"],c={title:"Overview",sidebar_position:1},l=void 0,h={unversionedId:"security/online-with-authentication/overview",id:"security/online-with-authentication/overview",isDocsHomePage:!1,title:"Overview",description:'The "Online With Authentication" identity type is geared towards apps will be deployed in real world settings. "Online With Authentication" identity types are:',source:"@site/docs/security/online-with-authentication/overview.mdx",sourceDirName:"security/online-with-authentication",slug:"/security/online-with-authentication/overview",permalink:"/pr-preview/pr-186/security/online-with-authentication/overview",editUrl:"https://github.com/getditto/docs/edit/master/docs/security/online-with-authentication/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Designing Permissions",permalink:"/pr-preview/pr-186/security/designing-permissions"},next:{title:"Authentication API",permalink:"/pr-preview/pr-186/security/online-with-authentication/api"}},p=[{value:"How it works",id:"how-it-works",children:[],level:2},{value:"Example of authentication with Facebook and an iOS app with Ditto",id:"example-of-authentication-with-facebook-and-an-ios-app-with-ditto",children:[],level:2}],u={toc:p};function d(e){var t=e.components,i=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'The "Online With Authentication" identity type is geared towards apps will be deployed in real world settings. "Online With Authentication" identity types are: '),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"for apps that need to integrate with existing permissions"),(0,a.kt)("li",{parentName:"ul"},"for apps that need to integrate with existing authentication systems")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"The Ditto platform ",(0,a.kt)("strong",{parentName:"li"},"does not come with an identity provider"),'. Using "Online With Authentication" requires that that you have your own identity provider already set up. Each app can use multiple identity providers. Identity providers can be:',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Your own service"),(0,a.kt)("li",{parentName:"ul"},"Facebook, Twitter, GitHub, etc..."),(0,a.kt)("li",{parentName:"ul"},"Okta, Auth0, Stytch, etc...")))))),(0,a.kt)("p",null,"For a more thorough walkthrough, see the ",(0,a.kt)("a",{parentName:"p",href:"/guides/authentication/intro"},"tutorial"),".  "),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,'To use the "Online With Authentication" system, your client application is expected to authenticate with your identity system and retrieve some sort of token ',(0,a.kt)("em",{parentName:"p"},"prior")," to syncing with Ditto. Often times this token is some sort of identity token, access token, commonly in the format of a JWT (JSON Web Token)."),(0,a.kt)("p",null,"Once your client application successfully has retrieved this token, it should pass it to the Ditto ",(0,a.kt)("inlineCode",{parentName:"p"},"authenticator")," which will pass it to an authentication webhook. As the developer, you are responsible for writing code and deploying the this webhook to an accessible URL. The authentication webhook will validate and decode the token from the client side and return identity and access control information back to your Ditto instance. "),(0,a.kt)("p",null,"The full flow is detailed in the diagram below:"),(0,a.kt)(r.Mermaid,{chart:"sequenceDiagram\n    Client App->>Your Authentication Mechanism: Send Credentials\n    Your Authentication Mechanism->>Client App: Return JWT\n    Client App->>Ditto Big Peer: JWT\n    Ditto Big Peer->>Auth Webhook: JWT \n    Auth Webhook->>Ditto Big Peer: Formatted Ditto Auth Response\n    Ditto Big Peer->>Client App: Ditto Credentials\n    rect rgba(0, 0, 255, .1)\n      Client App->Ditto Big Peer: Ditto Sync\n    end",config:{mermaid:{themeVariables:{fontFamily:"Helvetica"},sequence:{actorFontFamily:"Helvetica",noteFontFamily:"Helvetica",messageFontFamily:"Helvetica"},journey:{taskFontFamily:"Helvetica"}}},mdxType:"Mermaid"}),(0,a.kt)("h2",{id:"example-of-authentication-with-facebook-and-an-ios-app-with-ditto"},"Example of authentication with Facebook and an iOS app with Ditto"),(0,a.kt)("p",null,"Let's say you're using something like Facebook authentication to identity users in ",(0,a.kt)("strong",{parentName:"p"},"Your App"),"."),(0,a.kt)("p",null,"Typically, an iOS application would use the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/ios/"},"Facebook SDK")," to login and retrieve a Facebook\n",(0,a.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/facebook-login/access-tokens/#ios"},"access token"),". When the Facebook SDK logs in it'll retrieve this access token which you can pass to the Ditto flow. Ditto's Big Peer will forward it to an ",(0,a.kt)("strong",{parentName:"p"},"Auth WebHook")," which is ",(0,a.kt)("em",{parentName:"p"},"an HTTP endpoint where you can write your own logic"),". This Auth WebHook HTTP endpoint needs to respond with JSON that describe the user's identity and the permissions."),(0,a.kt)(r.Mermaid,{chart:"sequenceDiagram\n    Your App->>Facebook SDK: Send Credentials\n    Facebook SDK->>Your App: Return Facebook Access Token\n    Your App->>Ditto Big Peer: Send Facebook Access Token\n    Note over Ditto Big Peer,Auth Webhook: Ditto Big Peer simply forwards the Facebook Access Token from your app to a registered webhook\n    Ditto Big Peer->>Auth Webhook: Forwards Facebook Access Token \n    Note over Auth Webhook,Ditto Big Peer: Your auth webhook logic is code that you write and can decide to give \n    Auth Webhook->>Ditto Big Peer: Auth webhook validates and returns a formatted Ditto Auth Response\n    Ditto Big Peer->>Your App: Ditto Credentials\n    Your App->Ditto Big Peer: Ditto can begin sync with Ditto Big Peer",mdxType:"Mermaid"}))}d.isMDXComponent=!0},11748:function(e,t,i){var o={"./locale":89234,"./locale.js":89234};function n(e){var t=a(e);return i(t)}function a(e){if(!i.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=a,e.exports=n,n.id=11748}}]);