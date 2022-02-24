"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9436],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=i.createContext({}),s=function(t){var e=i.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=s(t.components);return i.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(n),h=a,y=p["".concat(d,".").concat(h)]||p[h]||c[h]||o;return n?i.createElement(y,r(r({ref:e},u),{},{components:n})):i.createElement(y,r({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79443:function(t,e,n){var i=(0,n(67294).createContext)(void 0);e.Z=i},80944:function(t,e,n){var i=n(67294),a=n(79443);e.Z=function(){var t=(0,i.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t}},30547:function(t,e,n){var i=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},49366:function(t,e,n){var i=n(67294),a=n(80944),o=n(86010);e.Z=function(t){var e,n=t.lazy,r=(t.block,t.defaultValue),l=t.values,d=t.groupId,s=(t.className,i.Children.toArray(t.children)),u=null!=l?l:s.map((function(t){return{value:t.props.value,label:t.props.label}})),c=null!=r?r:null==(e=s.find((function(t){return t.props.default})))?void 0:e.props.value,p=(0,a.Z)(),h=p.tabGroupChoices,y=p.setTabGroupChoices,m=(0,i.useState)(c),g=m[0],f=m[1];if(null!=d){var v=h[d];null!=v&&v!==g&&u.some((function(t){return t.value===v}))&&f(v)}var D=function(t){f(t),null!=d&&y(d,t)};return i.createElement("div",{className:"tabs-container"},i.createElement("div",{className:"sm:hidden"},i.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),i.createElement("select",{id:"tabs",name:"tabs",value:g,onChange:function(t){return D(t.currentTarget.value)},className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},u.map((function(t){var e=t.value,n=t.label;return i.createElement("option",{value:e,key:e},null!=n?n:e)})))),i.createElement("div",{className:"hidden sm:block"},i.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},u.map((function(t){var e=t.value,n=t.label;return i.createElement("button",{key:e,onClick:function(){return D(e)},className:(0,o.Z)(g===e?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":g===e?"page":void 0},null!=n?n:e)})))),n?(0,i.cloneElement)(s.filter((function(t){return t.props.value===g}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},s.map((function(t,e){return(0,i.cloneElement)(t,{key:e,hidden:t.props.value!==g})}))))}},85294:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return y}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=n(49366),l=n(30547),d=["components"],s={title:"Ditto Identities"},u=void 0,c={unversionedId:"advanced/identities",id:"advanced/identities",isDocsHomePage:!1,title:"Ditto Identities",description:"This document explains in detail what Ditto Identities are, the different types of Identities available, the capabilities of each Identity, and how to configure your Ditto App to use a specific Identity.",source:"@site/docs/advanced/identities.md",sourceDirName:"advanced",slug:"/advanced/identities",permalink:"/advanced/identities",editUrl:"https://github.com/getditto/docs/edit/master/docs/advanced/identities.md",tags:[],version:"current",frontMatter:{title:"Ditto Identities"},sidebar:"tutorialSidebar",previous:{title:"Supported Network Transports",permalink:"/advanced/supported-network-transports"},next:{title:"Loading the JavaScript ditto.wasm File",permalink:"/advanced/loading-the-javascript-wasm-file"}},p=[{value:"Ditto Identity Lifecycle",id:"ditto-identity-lifecycle",children:[],level:3},{value:"Parts of a Ditto Identity",id:"parts-of-a-ditto-identity",children:[],level:3},{value:"Subtypes of Ditto Identity",id:"subtypes-of-ditto-identity",children:[],level:3},{value:"Configuring an OnlineWithAuthentication Ditto Identity",id:"configuring-an-onlinewithauthentication-ditto-identity",children:[],level:2},{value:"Configuring an OnlinePlayground Ditto Identity",id:"configuring-an-onlineplayground-ditto-identity",children:[],level:2}],h={toc:p};function y(t){var e=t.components,n=(0,a.Z)(t,d);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document explains in detail what Ditto Identities are, the different types of Identities available, the capabilities of each Identity, and how to configure your Ditto App to use a specific Identity."),(0,o.kt)("p",null,"Identity, Authentication, and Access Control within Ditto Apps is controlled by Ditto Identities."),(0,o.kt)("p",null,"The Ditto Identity is one of the main inputs to the Ditto Constructor and controls how your local Ditto instance will communicate with the Ditto Cloud and other Ditto Peers."),(0,o.kt)("p",null,"A Ditto Identity is typically validated by the Ditto Cloud and then used to establish trust and secure communications with peer instances."),(0,o.kt)("p",null,"Further, your Ditto Identity determines the read and write permissions to data and is associated to a set of access control permissions."),(0,o.kt)("p",null,"Each Ditto Identity is associated to a single Ditto App via a globally unique AppId and may not be used across multiple Ditto Apps."),(0,o.kt)("p",null,"Each App User that should be uniquely identified should have a distinct Ditto Identity."),(0,o.kt)("h3",{id:"ditto-identity-lifecycle"},"Ditto Identity Lifecycle"),(0,o.kt)("p",null,"While highly configurable, each Ditto Identity has a typical life cycle. First, early in the Apps life cycle the Ditto Identity is constructed."),(0,o.kt)("p",null,"Typically the only prerequisites are a Ditto persistance root (working directory for local data storage, where configured) and a globally unique Ditto App Id. In order to sync Documents and Timeseries Events, all App instances, regardless of SDK language, ",(0,o.kt)("em",{parentName:"p"},"must")," have the same globally unique Ditto AppId. Therefore this value will typically be incorporated in the App's bundle or provided to the App when it starts."),(0,o.kt)("p",null,"Some Ditto Identities require additional inputs to construct, and these will be discussed subsequently."),(0,o.kt)("p",null,"Next the Ditto Identity is consumed by the Ditto constructor, yielding a properly configured ",(0,o.kt)("inlineCode",{parentName:"p"},"Ditto")," instance. The Ditto instance will contain a Ditto Authenticator and often your own type which implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"DittoAuthEventHandler")," interface and provides login credentials. Ditto will use these types to contact the configured Auth Url and supply the login credentials to an Authentication Provider. If the credentials are valid, then the Authentication Provider will return to Ditto an Authentication Token, validating its credentials and granting the Ditto instance individualized permissions. The Ditto instance can now sync with the Ditto Cloud (Big Peer)."),(0,o.kt)("p",null,'Generally the Ditto Cloud is not the actual Auth Provider, but a "proxy" to your own "source of truth" for identities, credential validation, and permissions.'),(0,o.kt)("p",null,"Depending on the Identity used, the Ditto instance may then request the Ditto Cloud (Big Peer) sign an x509 certificate, using the previously validated credentials and Authentication Token as proof of its identity. The Ditto Cloud will then return the signed x509 certificate. This certificate may then be presented to other Ditto peers to mutually establish trust and create encrypted communications channels."),(0,o.kt)("h3",{id:"parts-of-a-ditto-identity"},"Parts of a Ditto Identity"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AppId"),' - Uniquely Identifies a Ditto-based App. It establishes a top-level "namespace" within which all Ditto Identities, collections of documents, timeseries events, and permissions live. It is a part of all Identity types. It may be either a string or, more typically, a UUID v4 lowercased and hyphenated. Only ',(0,o.kt)("inlineCode",{parentName:"li"},"UUIDv4")," ",(0,o.kt)("inlineCode",{parentName:"li"},"AppId"),"s registered with the Ditto Cloud can be used to sync with Ditto Cloud."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CustomAuthUrl")," - The URL of an Auth Provider which can validate credentials and issue Auth Tokens and x509 certificates. The default values is ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<app-id>.cloud.ditto.live/"),". A ",(0,o.kt)("inlineCode",{parentName:"li"},"CustomAuthUrl")," is only required when another, possibly self-hosted, Auth Provider is preferred. ",(0,o.kt)("inlineCode",{parentName:"li"},"OfflinePlayground"),", SharedKey, and Manual Identities don't require any AuthURL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EnableCloudSync")," - Whether Ditto should attempt to sync with ",(0,o.kt)("inlineCode",{parentName:"li"},"wss://<app-id>.cloud.ditto.live"),". Only used by ",(0,o.kt)("inlineCode",{parentName:"li"},"OnlineWithAuthentication")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"OnlinePlayground")," Identities. If you're hosting your own Ditto Big Peer, this should be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," and a custom SyncUrl provided to the Ditto ",(0,o.kt)("inlineCode",{parentName:"li"},"TransportConfig"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WorkingDir")," (DittoRoot) - A location where Ditto can cache Auth Tokens, x509 certificates, and other auth-related data. Typically the same as the working directory containing Ditto's local data store."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AuthEventHandler")," (Callback) - A type defined by the App developer which implements the ",(0,o.kt)("inlineCode",{parentName:"li"},"DittoAuthEventHandler")," (",(0,o.kt)("inlineCode",{parentName:"li"},"DittoAuthCallback"),") Trait/Interface/Protocol. Typically responsible for obtaining and storing credentials like a username, password, or other token from the App's user and then supplying them to Ditto when authentication is required.")),(0,o.kt)("h3",{id:"subtypes-of-ditto-identity"},"Subtypes of Ditto Identity"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OnlineWithAuthentication")," - Use this identity for most production Apps. The ",(0,o.kt)("inlineCode",{parentName:"li"},"OnlineWithAuthentication")," identity supports both Cloud and peer-to-peer sync with secure authentication, encryption, and access control. Use typically requires configuring an Authentication Provider for your App within the Ditto Cloud portal, which can validate user-provided credentials. This identity also requires a developer-provided implementation of the ",(0,o.kt)("inlineCode",{parentName:"li"},"DittoAuthEventHandler")," (",(0,o.kt)("inlineCode",{parentName:"li"},"DittoAuthCallback"),") interface."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OnlinePlayground")," - A simplified version of the ",(0,o.kt)("inlineCode",{parentName:"li"},"OnlineWithAuthentication")," Identity for prototyping and development use. All modes of sync are supported but no Authentication Provider needs to be configured. Instead, all users will receive full read and write permissions to all App collections and timeseries. Do not use this Identity in production. No ",(0,o.kt)("inlineCode",{parentName:"li"},"DittoAuthEventHandler")," needs to be provided."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SharedKey"),' - A secure Identity used for "private" Apps where the developer trusts all users, the Ditto-based App, and devices and would prefer a fully self-contained deployment. Ditto instances are each provided with a pre-shared key that is used for mutual authentication. This Identity does NOT support Cloud sync. Typically used with some external device management solution which can provide and rotate the pre-shared key. Given that this identity doesn\'t use the Ditto cloud, Ditto instances using this identity must be activated with an offline only license token that can be requested from the app settings page on the ',(0,o.kt)("a",{parentName:"li",href:"https://portal.ditto.live"},"portal"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Manual")," - An advanced Identity where the App developer will provide each Ditto instance with an x509 Client Certificate signed by a common, trusted Certificate Authority. Like ",(0,o.kt)("inlineCode",{parentName:"li"},"SharedKey")," typically deployed along side existing PKI and device management solutions. This Identity cannot sync with ",(0,o.kt)("inlineCode",{parentName:"li"},"cloud.ditto.live")," but may sync with a custom deployment of a Big Peer. Given that this identity doesn't use the Ditto cloud, Ditto instances using this identity must be activated with an offline only license token that can be requested from the app settings page on the ",(0,o.kt)("a",{parentName:"li",href:"https://portal.ditto.live"},"portal"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OfflinePlayground")," - An ",(0,o.kt)("em",{parentName:"li"},"unsecured")," identity suitable for local testing, CI/CD pipelines, and peer-to-peer sync. Cloud sync is not permitted. All peers are automatically trusted and no authentication takes place. Do ",(0,o.kt)("em",{parentName:"li"},"not")," use this Identity in production. Given that this identity doesn't use the Ditto cloud, Ditto instances using this identity must be activated with an offline only license token that can be requested from the app settings page on the ",(0,o.kt)("a",{parentName:"li",href:"https://portal.ditto.live"},"portal"),".")),(0,o.kt)("h2",{id:"configuring-an-onlinewithauthentication-ditto-identity"},"Configuring an OnlineWithAuthentication Ditto Identity"),(0,o.kt)("p",null,"Below find example code for how to set up a Ditto ",(0,o.kt)("inlineCode",{parentName:"p"},"OnlineWithAuthentication")," Identity for each SDK language. This is the most complex Identity to configure. The other Identity types follow a similar but heavily simplified pattern."),(0,o.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { init, Ditto } from \"@dittolive/ditto\"\n(async () => {\n  await init() // you need to call this at least once before using any of the Ditto API\n  const authHandler = {\n    authenticationRequired: function(authenticator) {\n      authenticator.loginWithToken(ThirdPartyAuth.getToken(), \"third_party\", (err) => {\n        console.log(`Login request completed. Error? ${err}`)\n      })\n    },\n    authenticationExpiringSoon: function(authenticator, secondsRemaining) {\n      console.log(`Auth token expiring in ${secondsRemaining} seconds`)\n    }\n  }\n\n  const identity = {\n    type: 'onlineWithAuthentication',\n    appID: 'REPLACE_ME_WITH_YOUR_APP_ID',\n    authHandler\n  }\n  const ditto = new Ditto(identity, '/persistence/file/path')\n  ditto.tryStartSync()\n})()\n"))),(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'struct AuthDelegate: DittoAuthenticationDelegate {\n    func authenticationRequired(authenticator: DittoAuthenticator) {\n        authenticator.loginWithToken(ThirdPartyAuth.getToken(), provider: "third_party") { err in\n            print("Login request completed. Error? \\(err)")\n        }\n    }\n\n    func authenticationExpiringSoon(authenticator: DittoAuthenticator, secondsRemaining: Int64) {\n        print("Auth token expiring in \\(secondsRemaining)")\n    }\n}\nlet identity = DittoIdentity.onlineWithAuthentication(\n    appID: "REPLACE_ME_WITH_YOUR_APP_ID",\n    authenticationDelegate: AuthDelegate()\n)\nlet ditto = Ditto(identity: identity)\ntry! ditto.tryStartSync()\n'))),(0,o.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'@interface AuthDelegate : NSObject <DITAuthenticationDelegate>\n@end\n\n@implementation AuthDelegate\n- (void)authenticationRequired:(nonnull DITAuthenticator *)authenticator {\n    [authenticator loginWithToken:[ThirdPartyAuth getToken] provider:@"third_party" completion:^(NSError * _Nullable err) {\n        NSLog(@"Login request completed. Error? %@", err);\n    }];\n}\n\n- (void)authenticationExpiringSoon:(nonnull DITAuthenticator *)authenticator\n                  secondsRemaining:(int64_t)secondsRemaining {\n    NSLog(@"Auth token expiring in %lld seconds", secondsRemaining);\n}\n@end\nDITIdentity *identity = [[DITIdentity alloc] initOnlineWithAuthenticationWithAppID:@"REPLACE_ME_WITH_YOUR_APP_ID"\n                                                            authenticationDelegate:[[AuthDelegate alloc] init];\nDITDitto *ditto = [[DITDitto alloc] initWithIdentity:identity];\nNSError *error = nil;\n[ditto tryStartSync:&error];\n'))),(0,o.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'try {\n  val androidDependencies = AndroidDittoDependencies(context)\n  class AuthCallback: DittoAuthenticationCallback {\n      override fun authenticationRequired(authenticator: DittoAuthenticator) {\n          authenticator.loginWithToken(ThirdPartyAuth.getToken(), "third_party") { err ->\n              println("Login request completed. Error? $err")\n          }\n      }\n\n      override fun authenticationExpiringSoon(\n          authenticator: DittoAuthenticator,\n          secondsRemaining: Long\n      ) {\n          println("Auth token expiring in $secondsRemaining seconds")\n      }\n  }\n\n  val identity = DittoIdentity.OnlineWithAuthentication(\n      androidDependencies,\n      "REPLACE_ME_WITH_YOUR_APP_ID",\n      AuthCallback()\n  )\n  val ditto = Ditto(androidDependencies, identity)\n  ditto.tryStartSync()\n} catch(e: DittoError) {\n  Log.e("Ditto error", e.message!!)\n}\n\n'))),(0,o.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'DittoDependencies androidDependencies = new DefaultAndroidDittoDependencies(this.context);\nclass AuthCallback implements DittoAuthenticationCallback {\n    @Override\n    public void authenticationRequired(@NonNull DittoAuthenticator authenticator) {\n        authenticator.loginWithToken(ThirdPartyAuth.getToken(), "third_party", err -> {\n            System.out.println("Login request completed. Error? " + err.toString());\n        });\n    }\n\n    @Override\n    public void authenticationExpiringSoon(@NonNull DittoAuthenticator authenticator, long secondsRemaining) {\n        System.out.println("Auth token expiring in " + secondsRemaining + " seconds");\n    }\n}\n\nDittoIdentity identity = new DittoIdentity.OnlineWithAuthentication(\n    customDirDependencies,\n    "REPLACE_ME_WITH_YOUR_APP_ID",\n    new AuthCallback()\n);\nDitto ditto = new Ditto(androidDependencies);\n\ntry {\n  ditto.tryStartSync();\n} catch(DittoError e) {\n  Log.e("Ditto Error", e.getMessage())\n}\n'))),(0,o.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'class AuthDelegate : IDittoAuthenticationDelegate\n{\n    public async void AuthenticationRequired(DittoAuthenticator authenticator)\n    {\n        var res = await authenticator.LoginWithToken(ThirdPartyAuth.GetToken(), "third_party");\n        System.Console.WriteLine($"Login request completed. Error? {res}");\n    }\n\n    public async void AuthenticationExpiringSoon(DittoAuthenticator authenticator, long secondsRemaining)\n    {\n        System.Console.WriteLine($"Auth token expiring in {secondsRemaining} seconds");\n    }\n}\n\nvar identity = DittoIdentity.OnlineWithAuthentication(\n    "REPLACE_ME_WITH_YOUR_APP_ID",\n    new AuthDelegate());\n\ntry\n{\n    var ditto = new Ditto(identity);\n    ditto.TryStartSync();\n}\ncatch (DittoException ex)\n{\n    System.Console.WriteLine($"Ditto Error {ex.Message}");\n}\n'))),(0,o.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'class AuthCallback: public AuthenticationCallback {\npublic:\n  void authentication_required(std::shared_ptr<Authenticator> authenticator) {\n    authenticator->login_with_token("123", "third_party", [](std::unique_ptr<DittoError> err) {\n      std::cout << "Login request completed. Error?" << err->what() << std::endl;\n    });\n  }\n\n  void authentication_expiring_soon(std::shared_ptr<Authenticator> authenticator,\n                                    std::int64_t seconds_remaining) {\n    std::cout << "Auth token expiring in " << seconds_remaining << " seconds" << std::endl;\n  }\n};\n\nIdentity identity = Identity::OnlineWithAuthentication(\n  "REPLACE_ME_WITH_YOUR_APP_ID",\n  std::make_shared<AuthCallback>()\n);\ntry {\n  Ditto ditto = Ditto(identity, "/your-persistence-path");\n  ditto.try_start_sync();\n} catch (const DittoError &err) {\n  std::cout << err.what() << std::endl;\n}\n'))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use dittolive_ditto::prelude::*;\nuse std::sync::Arc;\nuse std::time::Duration;\n\nstruct AuthHandler {\n    token: String, // Some credential your Auth Provider will recognize\n    provider: String, // Must match a provider name configured in Ditto Cloud\n}\n\nimpl DittoAuthenticationEventHandler for AuthHandler {\n    fn authentication_required(&self, auth: dittolive_ditto::auth::DittoAuthenticator) {\n        auth.login_with_token(&self.token, &self.provider) {\n            ::log::info!("Login request completed. Error? {:?}", &e);\n        }\n    }\n\n    fn authentication_expiring_soon(\n        &self,\n        _auth: dittolive_ditto::auth::DittoAuthenticator,\n        seconds_remaining: std::time::Duration,\n    ) {\n        ::log::info!(\n            "Auth token expiring in {} seconds",\n            seconds_remaining.as_secs()\n        );\n    }\n}\n\nimpl Default for AuthHandler {\n    fn default() -> Self {\n        AuthHandler {\n            token: ThirdPartyAuth::get_token(),\n            provider: String::from("third_party"),\n        }\n    }\n}\n\nlet mut ditto = Ditto::builder()\n    // creates a `ditto_data` folder in the directory containing the executing process\n    .with_root(Arc::new(PersistentRoot::current_exe()?))\n    .with_identity(|ditto_root| {\n      // Provided as an env var, may also be provided as hardcoded string\n      let app_id = AppId::from_env("DITTO_APP_ID")?;\n      let auth_event_handler = AuthHandler::default();\n      let enable_cloud_sync = true;\n      let custom_auth_url = None;\n      // return the Result<Identity, _> at the end of this closure\n      OnlineWithAuthentication::new(\n          ditto_root,\n          app_id,\n          auth_event_handler,\n          enable_cloud_sync,\n          custom_auth_url,\n      )\n    })\n    .with_transport_config(|_identity| {\n        let mut config = TransportConfig::enable_all_peer_to_peer()\n    })\n    .build()?;\n\nditto.try_start_sync()?;\n')))),(0,o.kt)("h2",{id:"configuring-an-onlineplayground-ditto-identity"},"Configuring an OnlinePlayground Ditto Identity"),(0,o.kt)("p",null,"When first experimenting with Ditto, you can also use a simpler ",(0,o.kt)("inlineCode",{parentName:"p"},"OnlinePlayground")," Identity as shown below."),(0,o.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { init, Ditto } from \"@dittolive/ditto\"\n(async () => {\n  await init() // you need to call this at least once before using any of the Ditto API\n  const identity = { type: 'onlinePlayground', appID: 'REPLACE_ME_WITH_YOUR_APP_ID' }\n  const ditto = new Ditto(identity, '/persistence/file/path')\n  ditto.tryStartSync()\n})()\n"))),(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let ditto = Ditto(identity: DittoIdentity.onlinePlayground(appID: "REPLACE_ME_WITH_YOUR_APP_ID"))\ntry! ditto.tryStartSync()\n'))),(0,o.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'\nDITIdentity *identity = [[DITIdentity alloc] initOnlinePlaygroundWithAppID:@"REPLACE_ME_WITH_YOUR_APP_ID"];\nDITDitto *ditto = [[DITDitto alloc] initWithIdentity:identity];\nNSError *error = nil;\n[ditto tryStartSync:&error];\n'))),(0,o.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'try {\n  val androidDependencies = AndroidDittoDependencies(context)\n  val identity = DittoIdentity.OnlinePlayground(androidDependencies, appID = "REPLACE_ME_WITH_YOUR_APP_ID")\n  val ditto = Ditto(androidDependencies, identity)\n  ditto.tryStartSync()\n} catch(e: DittoError) {\n  Log.e("Ditto error", e.message!!)\n}\n\n'))),(0,o.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'DittoDependencies androidDependencies = new DefaultAndroidDittoDependencies(this.context);\nDittoIdentity identity = new DittoIdentity.OnlinePlayground(androidDependencies, "REPLACE_ME_WITH_YOUR_APP_ID");\nDitto ditto = new Ditto(androidDependencies, identity);\n\ntry {\n  ditto.tryStartSync();\n} catch(DittoError e) {\n  Log.e("Ditto Error", e.getMessage())\n}\n'))),(0,o.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'try\n{\n    var identity = DittoIdentity.OnlinePlayground("REPLACE_ME_WITH_YOUR_APP_ID");\n    var ditto = new Ditto(identity);\n    ditto.TryStartSync();\n}\ncatch (DittoException ex)\n{\n    System.Console.WriteLine($"Ditto Error {ex.Message}");\n}\n'))),(0,o.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'auto identity = Identity::OnlinePlayground("REPLACE_ME_WITH_YOUR_APP_ID");\ntry {\n  Ditto ditto = Ditto(identity, "/your-persistence-path");\n  ditto.try_start_sync();\n} catch (const DittoError &err) {\n  std::cout << err.what() << std::endl;\n}\n'))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use dittolive_ditto::prelude::*;\nuse std::sync::Arc;\nuse std::time::Duration;\n\nlet mut ditto = Ditto::builder()\n    // creates a `ditto_data` folder in the directory containing the executing process\n    .with_root(Arc::new(PersistentRoot::current_exe()?))\n    .with_identity(|ditto_root| {\n      // Provided as an env var, may also be provided as hardcoded string\n      let app_id = AppId::from_env("DITTO_APP_ID")?;\n      let enable_cloud_sync = true;\n      let custom_auth_url = None;\n      // return the Result<Identity, _> at the end of this closure\n      OnlinePlayground::new(ditto_root, app_id, enable_cloud_sync, custom_auth_url)\n    })\n    .with_transport_config(|_identity| {\n        let mut config = TransportConfig::enable_all_peer_to_peer()\n    })\n    .build()?;\n\nditto.try_start_sync()?;\n')))))}y.isMDXComponent=!0},86010:function(t,e,n){function i(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=i(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=i(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})}}]);