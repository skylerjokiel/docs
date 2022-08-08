"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8260],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25442:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"2 - Configure Ditto"},s=void 0,c={unversionedId:"tutorial/xamarin/configure-ditto",id:"tutorial/xamarin/configure-ditto",isDocsHomePage:!1,title:"2 - Configure Ditto",description:"2-1 Create Your Ditto App",source:"@site/docs/csharp/tutorial/xamarin/2-configure-ditto.md",sourceDirName:"tutorial/xamarin",slug:"/tutorial/xamarin/configure-ditto",permalink:"/csharp/tutorial/xamarin/configure-ditto",editUrl:"https://github.com/getditto/docs/tree/main/docs/csharp/tutorial/xamarin/2-configure-ditto.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2 - Configure Ditto"},sidebar:"docs",previous:{title:"1 - Setup",permalink:"/csharp/tutorial/xamarin/setup"},next:{title:"3 - Showing the List of Tasks",permalink:"/csharp/tutorial/xamarin/tasks-list-screen"}},p=[{value:"2-1 Create Your Ditto App",id:"2-1-create-your-ditto-app",children:[],level:2},{value:"2-2 Add Permissions to the <code>Info.plist</code>",id:"2-2-add-permissions-to-the-infoplist",children:[],level:2},{value:"2-3 Add <code>ditto</code> to <code>AppDelegate.cs</code>",id:"2-3-add-ditto-to-appdelegatecs",children:[],level:2},{value:"2-4 Create a <code>Task</code> class",id:"2-4-create-a-task-class",children:[],level:2},{value:"2-5 Create the user interface",id:"2-5-create-the-user-interface",children:[],level:2}],d={toc:p};function u(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"2-1-create-your-ditto-app"},"2-1 Create Your Ditto App"),(0,o.kt)("p",null,"Before we start coding, we first need to create a new app in the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.ditto.live"},"portal"),". Apps created on the portal will automatically sync data between them and also to the Ditto Big Peer."),(0,o.kt)("p",null,"Each app created on the portal has a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"appID")," which can be seen on your app's settings page once the app has been created. This ID is used in subsequent sections to configure your Ditto instance."),(0,o.kt)("h2",{id:"2-2-add-permissions-to-the-infoplist"},"2-2 Add Permissions to the ",(0,o.kt)("inlineCode",{parentName:"h2"},"Info.plist")),(0,o.kt)("p",null,"For Ditto to fully use all the network transports like Bluetooth Low Energy, Local Area Network, Apple Wireless Direct, the app will need to ask the user for permissions. These permission prompts need to be in the ",(0,o.kt)("strong",{parentName:"p"},"Info.plist")," file of your project."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Locate the ",(0,o.kt)("strong",{parentName:"li"},"Info.plist")," file and open it"),(0,o.kt)("li",{parentName:"ol"},"Create 4 new entries using the ",(0,o.kt)("inlineCode",{parentName:"li"},"key, string")," pairs below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=Info.plist",title:"Info.plist"},"<key>NSBluetoothAlwaysUsageDescription</key>\n<string>Uses Bluetooth to connect and sync with nearby devices</string>\n<key>NSBluetoothPeripheralUsageDescription</key>\n<string>Uses Bluetooth to connect and sync with nearby devices</string>\n<key>NSLocalNetworkUsageDescription</key>\n<string>Uses WiFi to connect and sync with nearby devices</string>\n<key>NSBonjourServices</key>\n<array>\n  <string>_http-alt._tcp.</string>\n</array>\n")),(0,o.kt)("h2",{id:"2-3-add-ditto-to-appdelegatecs"},"2-3 Add ",(0,o.kt)("inlineCode",{parentName:"h2"},"ditto")," to ",(0,o.kt)("inlineCode",{parentName:"h2"},"AppDelegate.cs")),(0,o.kt)("p",null,"When Visual Studio generated your project, there should be a file called ",(0,o.kt)("strong",{parentName:"p"},"AppDelegate.cs"),". We will need an instance of Ditto throughout this tutorial and the app's lifecycle."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First import Ditto with ",(0,o.kt)("inlineCode",{parentName:"li"},"using DittoSDK")),(0,o.kt)("li",{parentName:"ol"},"Next, we'll need to hold a reference to our Ditto instance"),(0,o.kt)("li",{parentName:"ol"},"After the app has finished launching we will add a working directory. Currently, Xamarin.iOS apps need to provide a working directory inside the app's sandbox. Without this, the default directory used by the SDK won't be writable and an exception will be thrown."),(0,o.kt)("li",{parentName:"ol"},"Construct an instance of Ditto with an online playground identity using the APP ID and Playground Token of the app that you just created on the portal. We are using an ",(0,o.kt)("inlineCode",{parentName:"li"},".OnlinePlaygroundV2")," setup, which should suffice for this tutorial. However, you should never deploy this to a production environment."),(0,o.kt)("li",{parentName:"ol"},"We want to enable all peer to peer transport configurations"),(0,o.kt)("li",{parentName:"ol"},"We will call ",(0,o.kt)("inlineCode",{parentName:"li"},"tryStartSync"),". This method can throw an error in the event that the license token is invalid or expired.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift",metastring:"title=AppDelegate.cs",title:"AppDelegate.cs"},'using Foundation;\nusing UIKit;\nusing System;\n\n//1\n// highlight-next-line\nusing DittoSDK;\n\nnamespace Tasks\n{\n    // The UIApplicationDelegate for the application. This class is responsible for launching the\n    // User Interface of the application, as well as listening (and optionally responding) to application events from iOS.\n    [Register ("AppDelegate")]\n    public class AppDelegate : UIResponder, IUIApplicationDelegate {\n    \n        [Export("window")]\n        public UIWindow Window { get; set; }\n\n        //2\n        // highlight-next-line\n        internal Ditto ditto;\n\n        [Export ("application:didFinishLaunchingWithOptions:")]\n        public bool FinishedLaunching (UIApplication application, NSDictionary launchOptions)\n        {\n        \n            //3\n            // highlight-start\n            NSFileManager fileManager = new NSFileManager();\n            NSUrl url = fileManager.GetUrl(NSSearchPathDirectory.DocumentDirectory, NSSearchPathDomain.User, null, true, out NSError error);\n            if (error != null)\n            {\n                Console.WriteLine($"Error creating Documents directory: {error.LocalizedDescription}");\n            }\n            url = url.Append("ditto", true);\n\n            fileManager.CreateDirectory(url, true, null, out error);\n            if (error != null)\n            {\n                Console.WriteLine($"Error creating ditto directory: {error.LocalizedDescription}");\n            }\n\n            string workingDir = url.Path;\n            // highlight-end\n            \n            //4\n            //highlight-start\n            DittoIdentity identity = DittoIdentity.OnlinePlaygroundV2(appID: "REPLACE_ME", token: "REPLACE_ME"\n, false, workingDir: workingDir);\n\n            ditto = new Ditto(identity, workingDir);\n            //highlight-end\n            \n            //5\n            //highlight-start\n            var transportConfig = new DittoTransportConfig();\n            transportConfig.EnableAllPeerToPeer();\n            ditto.SetTransportConfig(transportConfig);\n            //highlight-end\n\n            //6\n            // highlight-next-line\n            ditto.TryStartSync();\n\n            return true;\n        }\n\n        // UISceneSession Lifecycle\n\n        [Export ("application:configurationForConnectingSceneSession:options:")]\n        public UISceneConfiguration GetConfiguration (UIApplication application, UISceneSession connectingSceneSession, UISceneConnectionOptions options)\n        {\n            // Called when a new scene session is being created.\n            // Use this method to select a configuration to create the new scene with.\n            return UISceneConfiguration.Create ("Default Configuration", connectingSceneSession.Role);\n        }\n\n        [Export ("application:didDiscardSceneSessions:")]\n        public void DidDiscardSceneSessions (UIApplication application, NSSet<UISceneSession> sceneSessions)\n        {\n            // Called when the user discards a scene session.\n            // If any sessions were discarded while the application was not running, this will be called shortly after `FinishedLaunching`.\n            // Use this method to release any resources that were specific to the discarded scenes, as they will not return.\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"2-4-create-a-task-class"},"2-4 Create a ",(0,o.kt)("inlineCode",{parentName:"h2"},"Task")," class"),(0,o.kt)("p",null,"Ditto is a document database, which represents all of its rows in the database a JSON-like structure. In this tutorial, we will define each task like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "_id": "123abc",\n  "body": "Get Milk",\n  "isCompleted": true\n}\n')),(0,o.kt)("p",null,'These Task documents will all be in the "tasks" collection. We will be referencing this collection throughout this tutorial with:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'var tasksCollection = ditto.store["tasks"]\n')),(0,o.kt)("p",null,"Create a new cs file called __Task.cs in your project."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import Ditto with ",(0,o.kt)("inlineCode",{parentName:"li"},"using DittoSDK")),(0,o.kt)("li",{parentName:"ol"},"Add the matching variables ",(0,o.kt)("inlineCode",{parentName:"li"},"public string _id;"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"public string body;"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"public bool isCompleted;")," to the class. We will use this to match the document values to to the class."),(0,o.kt)("li",{parentName:"ol"},"Add a constructor to ",(0,o.kt)("inlineCode",{parentName:"li"},"Task")," that takes in a ",(0,o.kt)("inlineCode",{parentName:"li"},"DittoDocument"),". Parse out the document's keys with Ditto's type safe value accessors. This will safely map all the document's values to the struct's variables that we created in step 1.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="Task.cs"',title:'"Task.cs"'},'// 1\nusing DittoSDK;\n\nnamespace Tasks\n{\n    public class Task\n    {\n        // 2\n        public string _id;\n        public string body;\n        public bool isCompleted;\n\n        // 3\n        public Task(DittoDocument document)\n        {\n            this._id = document["_id"].StringValue;\n            this.body = document["body"].StringValue;\n            this.isCompleted = document["isCompleted"].BooleanValue;\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Once we set up our user interface, you'll notice that reading these values becomes a bit easier with this added class."),(0,o.kt)("h2",{id:"2-5-create-the-user-interface"},"2-5 Create the user interface"),(0,o.kt)("p",null,"When we generated the project, Visual Studio created a default ",(0,o.kt)("inlineCode",{parentName:"p"},"Main.StoryBoard")," file."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Right click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Main.StoryBoard")," and select open with ",(0,o.kt)("inlineCode",{parentName:"p"},"Xcode Interface Builder"),". This will open up the Xcode application and allow you to design the user interface inside of Xcode using storyboards.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When Xcode opens select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Main")," file and open it. Delete the default ViewController.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Open the UI components Library and type "Navigation Controller" into the search. Drag a new Navigation Controller onto the screen. This will create a Navigation Controller and a Root View Controller with a Table View. Select the Navigation Controller and make sure the box ',(0,o.kt)("inlineCode",{parentName:"p"},"is initital view controller")," is selected.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Open the UI components Library again and type in "Bar Button Item". Drag the button to the top right of the "Root View Controller" screen. Then, select the button, go to the Inspector panel and select the ',(0,o.kt)("inlineCode",{parentName:"p"},"Attributes")," inspector. Change System Item to ",(0,o.kt)("inlineCode",{parentName:"p"},"Add"),". This will make the bar button item we just added into a ''",(0,o.kt)("strong",{parentName:"p"},"+"),"'' Sign")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the Root View Controller top bar. Then go to the Inspectors panel and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"identity"),' inspector. We will create a custom class for this View Controller. In the Class section type "TasksTableViewController".'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(38108).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Prototype cells")," and give it an identifier of ",(0,o.kt)("inlineCode",{parentName:"p"},"taskCell")))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(29875).Z})),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Save that file in Xcode, then open the poject up in Visual Studio again. At this point, Visual Studio should have auto generated two files for you. A ",(0,o.kt)("inlineCode",{parentName:"li"},"TasksTableViewController.cs")," file and a ",(0,o.kt)("inlineCode",{parentName:"li"},"TasksTableViewController.designer.cs")," file. These are the class files that were created from the TasksTableViewController we created in Xcode."),(0,o.kt)("li",{parentName:"ol"},"Open the project up in Xcode again and you should now see two new files added to the project directory. A TasksTableViewController ",(0,o.kt)("inlineCode",{parentName:"li"},"h")," file and a TasksTableViewController ",(0,o.kt)("inlineCode",{parentName:"li"},"m")," file."),(0,o.kt)("li",{parentName:"ol"},"Open the Main.storyboard file. While pressing the ",(0,o.kt)("inlineCode",{parentName:"li"},"control")," button on your keyboard select the button and drag under the ",(0,o.kt)("inlineCode",{parentName:"li"},"@interface SceneDelegate : UIResponder {\n}")," code inside the TasksTableViewController ",(0,o.kt)("inlineCode",{parentName:"li"},"h")," file. Fill the information as follows:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connection: Action"),(0,o.kt)("li",{parentName:"ul"},"Name: didClickAddTask"),(0,o.kt)("li",{parentName:"ul"},"Type: UIBarButtonItem")),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"Save the file")))}u.isMDXComponent=!0},38108:function(e,t,n){t.Z=n.p+"assets/images/TasksTableViewController-b0704177c53474426e0db4fc3c21b4a9.png"},29875:function(e,t,n){t.Z=n.p+"assets/images/taskCell-b69ee1c34191ff7501d9dc3a8d39559e.png"}}]);