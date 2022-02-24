"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4506],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){var a=n(67294),o=n(79443);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},30547:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},49366:function(e,t,n){var a=n(67294),o=n(80944),i=n(86010);t.Z=function(e){var t,n=e.lazy,r=(e.block,e.defaultValue),l=e.values,s=e.groupId,c=(e.className,a.Children.toArray(e.children)),u=null!=l?l:c.map((function(e){return{value:e.props.value,label:e.props.label}})),d=null!=r?r:null==(t=c.find((function(e){return e.props.default})))?void 0:t.props.value,p=(0,o.Z)(),m=p.tabGroupChoices,f=p.setTabGroupChoices,v=(0,a.useState)(d),g=v[0],b=v[1];if(null!=s){var y=m[s];null!=y&&y!==g&&u.some((function(e){return e.value===y}))&&b(y)}var T=function(e){b(e),null!=s&&f(s,e)};return a.createElement("div",{className:"tabs-container"},a.createElement("div",{className:"sm:hidden"},a.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),a.createElement("select",{id:"tabs",name:"tabs",value:g,onChange:function(e){return T(e.currentTarget.value)},className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},u.map((function(e){var t=e.value,n=e.label;return a.createElement("option",{value:t,key:t},null!=n?n:t)})))),a.createElement("div",{className:"hidden sm:block"},a.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},u.map((function(e){var t=e.value,n=e.label;return a.createElement("button",{key:t,onClick:function(){return T(t)},className:(0,i.Z)(g===t?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":g===t?"page":void 0},null!=n?n:t)})))),n?(0,a.cloneElement)(c.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},71545:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(49366),l=n(30547),s=["components"],c={title:"Monitoring Transport Conditions"},u=void 0,d={unversionedId:"advanced/monitoring-network-transports",id:"advanced/monitoring-network-transports",isDocsHomePage:!1,title:"Monitoring Transport Conditions",description:"If syncing over Bluetooth LE is a critical part of your application you may want to warn the user if they are missing the permission or if the hardware is disabled. Ditto will help you by reporting conditions via a delegate or callback object.",source:"@site/docs/advanced/monitoring-network-transports.md",sourceDirName:"advanced",slug:"/advanced/monitoring-network-transports",permalink:"/advanced/monitoring-network-transports",editUrl:"https://github.com/getditto/docs/edit/master/docs/advanced/monitoring-network-transports.md",tags:[],version:"current",frontMatter:{title:"Monitoring Transport Conditions"},sidebar:"tutorialSidebar",previous:{title:"Manual Network Transport Configuration",permalink:"/advanced/manual-network-transport-configuration"},next:{title:"Frequently Asked Questions",permalink:"/faq"}},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If syncing over Bluetooth LE is a critical part of your application you may want to warn the user if they are missing the permission or if the hardware is disabled. Ditto will help you by reporting conditions via a delegate or callback object."),(0,i.kt)("p",null,"First, while configuring Ditto, assign a delegate or a callback to receive notifications."),(0,i.kt)(r.Z,{groupId:"programming-language",defaultValue:"swift",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"ditto.tryStartSync()\n"))),(0,i.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// Setting up inside a ViewController\nlet ditto = Ditto(identity: DittoIdentity.onlinePlayground(appID: "REPLACE_ME_WITH_YOUR_APP_ID"))\nditto.delegate = self\ntry! ditto.tryStartSync()\n'))),(0,i.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},'// Setting up inside a ViewController\nDITIdentity *identity = [[DITIdentity alloc] initOnlinePlaygroundWithAppID:@"REPLACE_WITH_APP_ID"];\nDITDitto *ditto = [[DITDitto alloc] initWithIdentity:identity];\nditto.delegate = self;\n[ditto tryStartSync:nil];\n'))),(0,i.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Setting up inside an Activity\nval androidDependencies = DefaultAndroidDittoDependencies(applicationContext)\nval ditto = Ditto(androidDependencies, DittoIdentity.OnlinePlayground(androidDependencies, "REPLACE_WITH_APP_ID"))\nditto.callback = this\nditto.tryStartSync()\n'))),(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Setting up inside an Activity\nDefaultAndroidDittoDependencies androidDependencies = new DefaultAndroidDittoDependencies(getApplicationContext());\nDitto ditto = new Ditto(androidDependencies, new DittoIdentity.OnlinePlayground(androidDependenciesOne, "REPLACE_WITH_APP_ID"));\nditto.callback = this;\nditto.tryStartSync();\n'))),(0,i.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Setting up inside Main\nDittoIdentity identity = DittoIdentity.OnlinePlayground("REPLACE_WITH_APP_ID");\nDitto onlineDitto = new Ditto(identity);\nditto.tryStartSync();\n'))),(0,i.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// API coming soon.\n"))),(0,i.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// API coming soon\n")))),(0,i.kt)("p",null,"Now you can observe real time changes to the transport conditions:"),(0,i.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const transportConditionsObserver = ditto.observeTransportConditions((condition, source) => {\n    console.log(condition, source)\n})\n"))),(0,i.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'extension ViewController: DittoDelegate {\n    func transportConditionDidChange(transportID: Int64, condition: TransportCondition) {\n        if condition == .BleDisabled {\n            print("BLE disabled")\n        } else if condition == .NoBleCentralPermission {\n            print("Permission missing for BLE")\n        } else if condition == .NoBlePeripheralPermission {\n            print("Permission missing for BLE")\n        }\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},'@interface ViewController () <DITDittoDelegate>\n\n@end\n\n@implementation ViewController\n\n- (void)transportConditionChanged:(enum DITTransportCondition)condition forSubsystem:(enum DITConditionSource)source {\n    if (condition == DITTransportConditionBleDisabled) {\n        NSLog(@"BLE disabled");\n    } else if (condition == DITTransportConditionNoBleCentralPermission) {\n        NSLog(@"Permission missing for BLE");\n    } else if (condition == DITTransportConditionNoBlePeripheralPermission) {\n        NSLog(@"Permission missing for BLE");\n    }\n}\n\n@end\n'))),(0,i.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MainActivity : AppCompatActivity(), DittoCallback {\n    // ...\n    override fun transportConditionDidChange(transportId: Long, condition: TransportCondition) {\n        var toastText: String? = null\n        if (condition == TransportCondition.TRANSPORT_CONDITION_BLE_DISABLED) {\n            toastText = "BLE disabled"\n        } else if (condition == TransportCondition.TRANSPORT_CONDITION_NO_BLE_CENTRAL_PERMISSION) {\n            toastText = "Permission missing for BLE"\n        } else if (condition == TransportCondition.TRANSPORT_CONDITION_NO_BLE_PERIPHERAL_PERMISSION) {\n            toastText = "Permission missing for BLE"\n        }\n        toastText?.let {\n            Handler(mainLooper).post {\n                Toast.makeText(this, it, Toast.LENGTH_LONG).show()\n            }\n        }\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class MainActivity extends AppCompatActivity implements DittoCallback {\n    @Override\n    public void transportConditionDidChange(@NotNull DittoTransportCondition condition, @NotNull DittoConditionSource transportId) {\n        String toastText = null;\n        if (condition == DittoTransportCondition.BleDisabled) {\n            toastText = "BLE disabled";\n        } else if (condition == DittoTransportCondition.NoBleCentralPermission) {\n            toastText = "Permission missing for BLE";\n        } else if (condition == DittoTransportCondition.NoBlePeripheralPermission) {\n            toastText = "Permission missing for BLE";\n        }\n\n        if (toastText != null) {\n            String finalToastText = toastText;\n            runOnUiThread(new Runnable() {\n                @Override\n                public void run() {\n                    Toast.makeText(MainActivity.this, finalToastText, Toast.LENGTH_LONG).show();\n                }\n            });\n        }\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// API Not yet available\n"))),(0,i.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// API Not yet available\n"))),(0,i.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// API coming soon\n")))))}f.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);