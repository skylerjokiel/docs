"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4377],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return h}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=a.createContext({}),c=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,r(r({ref:e},s),{},{components:n})):a.createElement(m,r({ref:e},s))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79443:function(t,e,n){var a=(0,n(67294).createContext)(void 0);e.Z=a},80944:function(t,e,n){var a=n(67294),i=n(79443);e.Z=function(){var t=(0,a.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t}},30547:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,i=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},e)}},49366:function(t,e,n){var a=n(67294),i=n(80944),o=n(86010);e.Z=function(t){var e,n=t.lazy,r=(t.block,t.defaultValue),l=t.values,u=t.groupId,c=(t.className,a.Children.toArray(t.children)),s=null!=l?l:c.map((function(t){return{value:t.props.value,label:t.props.label}})),d=null!=r?r:null==(e=c.find((function(t){return t.props.default})))?void 0:e.props.value,p=(0,i.Z)(),h=p.tabGroupChoices,m=p.setTabGroupChoices,g=(0,a.useState)(d),v=g[0],y=g[1];if(null!=u){var k=h[u];null!=k&&k!==v&&s.some((function(t){return t.value===k}))&&y(k)}var f=function(t){y(t),null!=u&&m(u,t)};return a.createElement("div",{className:"tabs-container"},a.createElement("div",{className:"sm:hidden"},a.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),a.createElement("select",{id:"tabs",name:"tabs",value:v,onChange:function(t){return f(t.currentTarget.value)},className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},s.map((function(t){var e=t.value,n=t.label;return a.createElement("option",{value:e,key:e},null!=n?n:e)})))),a.createElement("div",{className:"hidden sm:block"},a.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},s.map((function(t){var e=t.value,n=t.label;return a.createElement("button",{key:e,onClick:function(){return f(e)},className:(0,o.Z)(v===e?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":v===e?"page":void 0},null!=n?n:e)})))),n?(0,a.cloneElement)(c.filter((function(t){return t.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},c.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==v})}))))}},28072:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=n(49366),l=n(30547),u=["components"],c={title:"Authentication API"},s=void 0,d={unversionedId:"security/online-with-authentication/api",id:"security/online-with-authentication/api",isDocsHomePage:!1,title:"Authentication API",description:"Creating your client",source:"@site/docs/security/online-with-authentication/api.mdx",sourceDirName:"security/online-with-authentication",slug:"/security/online-with-authentication/api",permalink:"/pr-preview/pr-186/security/online-with-authentication/api",editUrl:"https://github.com/getditto/docs/edit/master/docs/security/online-with-authentication/api.mdx",tags:[],version:"current",frontMatter:{title:"Authentication API"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/pr-preview/pr-186/security/online-with-authentication/overview"},next:{title:"Shared Key",permalink:"/pr-preview/pr-186/security/shared-key"}},p=[{value:"Creating your client",id:"creating-your-client",children:[],level:2},{value:"Login",id:"login",children:[],level:2},{value:"Logout",id:"logout",children:[],level:2}],h={toc:p};function m(t){var e=t.components,c=(0,i.Z)(t,u);return(0,o.kt)("wrapper",(0,a.Z)({},h,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-your-client"},"Creating your client"),(0,o.kt)("p",null,"Create the ditto client with the ",(0,o.kt)("inlineCode",{parentName:"p"},"onlineWithAuthentication")," identity. This\nidentity requires an authentication handler ",(0,o.kt)("inlineCode",{parentName:"p"},"authHandler"),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must refresh the auth token when it expires. You can do that by implementing\n",(0,o.kt)("inlineCode",{parentName:"p"},"authenticationExpiringSoon"),". If you do not implement this, then sync will stop when the token\nexpires. "))),(0,o.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { init, Ditto } from \"@dittolive/ditto\"\n(async () => {\n  await init() // you need to call this at least once before using any of the Ditto API\n\n  const authHandler = {\n    authenticationRequired: async function(authenticator) {\n      console.log(\"Login request.\");\n    },\n    authenticationExpiringSoon: function(authenticator, secondsRemaining) {\n      console.log(`Auth token expiring in ${secondsRemaining} seconds`)\n    }\n  }\n\n  const identity = {\n    type: 'onlineWithAuthentication',\n    appID: 'REPLACE_ME_WITH_YOUR_APP_ID',\n    authHandler\n  }\n\n  const ditto = new Ditto(identity, '/persistence/file/path')\n  ditto.tryStartSync()\n})()\n"))),(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'struct AuthDelegate: DittoAuthenticationDelegate {\n    func authenticationRequired(authenticator: DittoAuthenticator) {\n        print("Login request.)\n    }\n\n    func authenticationExpiringSoon(authenticator: DittoAuthenticator, secondsRemaining: Int64) {\n        print("Auth token expiring in \\(secondsRemaining)")\n    }\n}\n\nlet identity = DittoIdentity.onlineWithAuthentication(\n    appID: "REPLACE_ME_WITH_YOUR_APP_ID",\n    authenticationDelegate: AuthDelegate()\n)\n\nlet ditto = Ditto(identity: identity)\ntry! ditto.tryStartSync()\n'))),(0,o.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'@interface AuthDelegate : NSObject <DITAuthenticationDelegate>\n@end\n\n@implementation AuthDelegate\n- (void)authenticationRequired:(nonnull DITAuthenticator *)authenticator {\n      NSLog(@"Login request.");\n}\n\n- (void)authenticationExpiringSoon:(nonnull DITAuthenticator *)authenticator\n                  secondsRemaining:(int64_t)secondsRemaining {\n    NSLog(@"Auth token expiring in %lld seconds", secondsRemaining);\n}\n@end\n\nDITIdentity *identity = [[DITIdentity alloc] initOnlineWithAuthenticationWithAppID:@"REPLACE_ME_WITH_YOUR_APP_ID"\n                                                            authenticationDelegate:[[AuthDelegate alloc] init];\nDITDitto *ditto = [[DITDitto alloc] initWithIdentity:identity];\nNSError *error = nil;\n[ditto tryStartSync:&error];\n'))),(0,o.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class AuthCallback: DittoAuthenticationCallback {\n    override fun authenticationRequired(authenticator: DittoAuthenticator) {\n        println("Login request.")\n    }\n\n    override fun authenticationExpiringSoon(\n        authenticator: DittoAuthenticator,\n        secondsRemaining: Long\n    ) {\n        println("Auth token expiring in $secondsRemaining seconds")\n    }\n}\n\nval androidDependencies = AndroidDittoDependencies(context)\nval identity = DittoIdentity.OnlineWithAuthentication(\n    androidDependencies,\n    "REPLACE_ME_WITH_YOUR_APP_ID",\n    AuthCallback()\n)\nval ditto = Ditto(androidDependencies, identity)\ntry {\n  ditto.tryStartSync()\n} catch(e: DittoError) {\n  Log.e("Ditto error", e.message!!)\n}\n'))),(0,o.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\nclass AuthCallback implements DittoAuthenticationCallback {\n    @Override\n    public void authenticationRequired(@NonNull DittoAuthenticator authenticator) {\n        System.out.println("Login request.");\n    }\n\n    @Override\n    public void authenticationExpiringSoon(@NonNull DittoAuthenticator authenticator, long secondsRemaining) {\n        System.out.println("Auth token expiring in " + secondsRemaining + " seconds");\n    }\n}\n\nDittoDependencies androidDependencies = new DefaultAndroidDittoDependencies(this.context);\nDittoIdentity identity = new DittoIdentity.OnlineWithAuthentication(\n    customDirDependencies,\n    "REPLACE_ME_WITH_YOUR_APP_ID",\n    new AuthCallback()\n);\nDitto ditto = new Ditto(androidDependencies);\n\ntry {\n  ditto.tryStartSync();\n} catch(DittoError e) {\n  Log.e("Ditto Error", e.getMessage())\n}\n'))),(0,o.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'class AuthDelegate : IDittoAuthenticationDelegate\n{\n    public async void AuthenticationRequired(DittoAuthenticator authenticator)\n    {\n        System.Console.WriteLine($"Login request");\n    }\n\n    public async void AuthenticationExpiringSoon(DittoAuthenticator authenticator, long secondsRemaining)\n    {\n        System.Console.WriteLine($"Auth token expiring in {secondsRemaining} seconds");\n    }\n}\n\nvar identity = DittoIdentity.OnlineWithAuthentication(\n    "REPLACE_ME_WITH_YOUR_APP_ID",\n    new AuthDelegate());\n\ntry\n{\n    var ditto = new Ditto(identity);\n    ditto.TryStartSync();\n}\ncatch (DittoException ex)\n{\n    System.Console.WriteLine($"Ditto Error {ex.Message}");\n}\n'))),(0,o.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'class AuthCallback: public AuthenticationCallback {\npublic:\n  void authentication_required(std::shared_ptr<Authenticator> authenticator) {\n      std::cout << "Login request" << std::endl;\n  }\n\n  void authentication_expiring_soon(std::shared_ptr<Authenticator> authenticator,\n                                    std::int64_t seconds_remaining) {\n    std::cout << "Auth token expiring in " << seconds_remaining << " seconds" << std::endl;\n  }\n};\n\nIdentity identity = Identity::OnlineWithAuthentication(\n  "REPLACE_ME_WITH_YOUR_APP_ID",\n  std::make_shared<AuthCallback>()\n);\ntry {\n  Ditto ditto = Ditto(identity, "/your-persistence-path");\n  ditto.try_start_sync();\n} catch (const DittoError &err) {\n  std::cout << err.what() << std::endl;\n}\n'))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use dittolive_ditto::prelude::*;\nuse std::sync::Arc;\nuse std::time::Duration;\n\nstruct AuthHandler {\n    token: String,\n    provider: String,\n}\n\nimpl DittoAuthenticationEventHandler for AuthHandler {\n    fn authentication_required(&self, auth: dittolive_ditto::auth::DittoAuthenticator) {\n        ::log::info!("Login request.");\n    }\n\n    fn authentication_expiring_soon(\n        &self,\n        _auth: dittolive_ditto::auth::DittoAuthenticator,\n        seconds_remaining: std::time::Duration,\n    ) {\n        ::log::info!(\n            "Auth token expiring in {} seconds",\n            seconds_remaining.as_secs()\n        );\n    }\n}\n\nimpl Default for AuthHandler {\n    fn default() -> Self {\n        AuthHandler {\n            token: ThirdPartyAuth::get_token(),\n            provider: String::from("my-auth"),\n        }\n    }\n}\n\nlet mut ditto = Ditto::builder()\n    // creates a `ditto_data` folder in the directory containing the executing process\n    .with_root(Arc::new(PersistentRoot::current_exe()?))\n    .with_identity(|ditto_root| {\n      // Provided as an env var, may also be provided as hardcoded string\n      let app_id = AppId::from_env("DITTO_APP_ID")?;\n      let auth_event_handler = AuthHandler::default();\n      let enable_cloud_sync = true;\n      let custom_auth_url = None;\n      // return the Result<Identity, _> at the end of this closure\n      OnlineWithAuthentication::new(\n          ditto_root,\n          app_id,\n          auth_event_handler,\n          enable_cloud_sync,\n          custom_auth_url,\n      )\n    })\n    .with_transport_config(|_identity| {\n        let mut config = TransportConfig::enable_all_peer_to_peer()\n    })\n    .build()?;\n\nditto.try_start_sync()?;\n')))),(0,o.kt)("h2",{id:"login"},"Login"),(0,o.kt)("p",null,"Login takes two paramters: the first is ",(0,o.kt)("inlineCode",{parentName:"p"},"token"),", which should be a JSON web\ntoken (JWT). The second paramter is the name of the provider which you must add\nthrough the Ditto portal."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sample Authentication Webhook Endpoint in the Portal",src:n(32180).Z})),(0,o.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let accessToken = await ThirdPartyAuth.getToken()\nawait ditto.auth.loginWithToken(accessToken, 'my-auth')\n"))),(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'ditto.auth.loginWithToken(ThirdPartyAuth.getToken(), provider: "my-auth") { err in\n    print("Login request completed. Error? \\(err)")\n}\n'))),(0,o.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'[ditto auth loginWithToken:[ThirdPartyAuth getToken] provider:@"my-auth" completion:^(NSError * _Nullable err) {\n    NSLog(@"Login request completed. Error? %@", err);\n}];\n'))),(0,o.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'ditto.auth.loginWithToken(ThirdPartyAuth.getToken(), "my-auth") { err ->\n    println("Login request completed. Error? $err")\n}\n'))),(0,o.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'ditto.auth.loginWithToken(credentials.accessToken, "my-auth", err -> {\n    System.out.println("Login request completed. Error? " + err.toString());\n});\n'))),(0,o.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var res = await authenticator.LoginWithToken(ThirdPartyAuth.GetToken(), "my-auth");\nSystem.Console.WriteLine($"Login request completed. Error? {res}");\n'))),(0,o.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'authenticator->login_with_token("123", "my-auth", [](std::unique_ptr<DittoError> err) {\n  std::cout << "Login request completed. Error?" << err->what() << std::endl;\n});\n'))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'auth.login_with_token(&self.token, &self.provider) {\n    ::log::info!("Login request completed. Error? {:?}", &e);\n}\n'))),(0,o.kt)(l.Z,{value:"http",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://<CLOUD_ENDPOINT>/api/v1/collections/people/documents/<doc_id>' \\\n  --header 'X-HYDRA-CLIENT-ID: AAAAAAAAAAAAAAAAAAAABQ==' \\\n  --header 'Content-Type: application/json' \n")))),(0,o.kt)("h2",{id:"logout"},"Logout"),(0,o.kt)("p",null,"Logout will stop sync, shut down all replication sessions, and remove any cached\nauthentication credentials. Note that this does not remove any data from the\nstore. If you wish to delete data from the store then use the optional\n",(0,o.kt)("inlineCode",{parentName:"p"},"cleanupFn")," parameter to perform any required cleanup."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanupFn")," is an optional function that will be called with the relevant Ditto\ninstance as the sole argument that allows you to perform any required cleanup of\nthe store as part of the logout process."),(0,o.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function cleanupFn (ditto) {\n  await ditto.store.collection('cars').findAll().evict()\n}\nawait ditto.auth.logout(cleanupFn)\n"))),(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'ditto.auth.logout(cleanup: { ditto in\n    ditto.store.collection("cars").findAll().evict()\n})\n'))),(0,o.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'[ditto.auth logout:^(DITDitto *ditto) {\n  DITCollection *collection = [ditto.store collection:@"cars"];\n  [[collection findAll] evict];\n}];\n'))),(0,o.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'ditto.auth.logout {\n  ditto.store["cars"].findAll().evict()\n}\n'))),(0,o.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},' ditto.auth.logout(ditto -> {\n  ditto.store.collection("cars").findAll().evict();\n })\n'))),(0,o.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'ditto.Auth.Logout((Ditto ditto) =>\n{\n  ditto.Store.Collection("cars").FindAll().evict();\n});\n'))),(0,o.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'ditto.auth.logout({\n  ditto.store.collection("cars").findAll().evict();\n})\n'))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'ditto.auth.logout(|ditto| {\n  ditto.store().collection("cars")?.find_all().evict()?;\n});\n')))))}m.isMDXComponent=!0},86010:function(t,e,n){function a(t){var e,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function i(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(i&&(i+=" "),i+=e);return i}n.d(e,{Z:function(){return i}})},32180:function(t,e,n){e.Z=n.p+"assets/images/sample-authentication-webhook-endpoint-bcf6ba631bbd3e5b7a4d7f9fc802d2dc.png"}}]);