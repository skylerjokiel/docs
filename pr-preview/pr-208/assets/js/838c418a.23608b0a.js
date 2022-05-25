"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2823],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,w=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return n?a.createElement(w,s(s({ref:t},d),{},{components:n})):a.createElement(w,s({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85223:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),s=["components"],r={title:"3 - Showing the List of Tasks"},l=void 0,c={unversionedId:"tutorials/uikit/tasks-list-screen",id:"tutorials/uikit/tasks-list-screen",isDocsHomePage:!1,title:"3 - Showing the List of Tasks",description:"Almost done! We have our UI in place and Ditto installed, so let's add the logic to create and display tasks by using Ditto's APIs.",source:"@site/docs/tutorials/uikit/3-tasks-list-screen.md",sourceDirName:"tutorials/uikit",slug:"/tutorials/uikit/tasks-list-screen",permalink:"/pr-preview/pr-208/tutorials/uikit/tasks-list-screen",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/uikit/3-tasks-list-screen.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3 - Showing the List of Tasks"},sidebar:"tutorialSidebar",previous:{title:"2 - Configure Ditto",permalink:"/pr-preview/pr-208/tutorials/uikit/configure-ditto"},next:{title:"4 - Editing Tasks",permalink:"/pr-preview/pr-208/tutorials/uikit/edit-tasks"}},d=[{value:"3-1 Create Your Ditto App on the Portal",id:"3-1-create-your-ditto-app-on-the-portal",children:[],level:2},{value:"3-2 Setup TasksTableViewController",id:"3-2-setup-taskstableviewcontroller",children:[],level:2},{value:"3-3 Add A Task",id:"3-3-add-a-task",children:[],level:2},{value:"3-4 Configure UITableView To Display Task List",id:"3-4-configure-uitableview-to-display-task-list",children:[],level:2}],u={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Almost done! We have our UI in place and Ditto installed, so let's add the logic to create and display tasks by using Ditto's APIs."),(0,o.kt)("h2",{id:"3-1-create-your-ditto-app-on-the-portal"},"3-1 Create Your Ditto App on the Portal"),(0,o.kt)("p",null,"Before we start coding, we first need to create a new app in the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.ditto.live"},"portal"),". Apps created on the portal will automatically sync data between them and also to the Ditto Big Peer."),(0,o.kt)("p",null,"Each app created on the portal has a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"appID")," which can be seen on your app's settings page once the app has been created. This ID is used in subsequent sections to configure your Ditto instance."),(0,o.kt)("h2",{id:"3-2-setup-taskstableviewcontroller"},"3-2 Setup TasksTableViewController"),(0,o.kt)("p",null,"First, we need to add some variables that will be created on ",(0,o.kt)("inlineCode",{parentName:"p"},"viewDidLoad")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksTableViewController")," so adjust the class to match this code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'// Remember to import DittoSwift!\nimport DittoSwift\n\nclass TaskTableViewController: UITableViewController {\n    // These hold references to Ditto for easy access\n    var ditto: Ditto!\n    var store: DittoStore!\n    var liveQuery: DittoLiveQuery?\n    var collection: DittoCollection!\n\n    // This is the UITableView data source\n    var tasks: [DittoDocument] = []\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        \n        // Create an instance of Ditto\n        ditto = Ditto(identity: .onlinePlayground(appID: "REPLACE_ME"))\n\n        // This starts Ditto\'s background synchronization\n        ditto.tryStartSync()\n\n        // Create some helper variables for easy access\n        store = ditto.store\n        // We will store data in the "tasks" collection\n        // Ditto stores data as collections of documents\n        collection = store.collection("tasks")\n\n        // This function will create a "live-query" that will update\n        // our UITableView\n        setupTaskList()\n    }\n\n    func setupTaskList() {\n        // Query for all tasks\n        // Observe changes with a live-query and update the UITableView\n        liveQuery = collection.findAll().observe { [weak self] docs, event in\n            guard let `self` = self else { return }\n            switch event {\n            case .update(let changes):\n                guard changes.insertions.count > 0 || changes.deletions.count > 0 || changes.updates.count > 0  || changes.moves.count > 0 else { return }\n                DispatchQueue.main.async {\n                    self.tableView.beginUpdates()\n                    self.tableView.performBatchUpdates({\n                        let deletionIndexPaths = changes.deletions.map { idx -> IndexPath in\n                            return IndexPath(row: idx, section: 0)\n                        }\n                        self.tableView.deleteRows(at: deletionIndexPaths, with: .automatic)\n                        let insertionIndexPaths = changes.insertions.map { idx -> IndexPath in\n                            return IndexPath(row: idx, section: 0)\n                        }\n                        self.tableView.insertRows(at: insertionIndexPaths, with: .automatic)\n                        let updateIndexPaths = changes.updates.map { idx -> IndexPath in\n                            return IndexPath(row: idx, section: 0)\n                        }\n                        self.tableView.reloadRows(at: updateIndexPaths, with: .automatic)\n                        for move in changes.moves {\n                            let from = IndexPath(row: move.from, section: 0)\n                            let to = IndexPath(row: move.to, section: 0)\n                            self.tableView.moveRow(at: from, to: to)\n                        }\n                    }) { _ in }\n                    // Set the tasks array backing the UITableView to the new documents\n                    self.tasks = docs\n                    self.tableView.endUpdates()\n                }\n            case .initial:\n                // Set the tasks array backing the UITableView to the new documents\n                self.tasks = docs\n                DispatchQueue.main.async {\n                    self.tableView.reloadData()\n                }\n            default: break\n            }\n        }\n    }\n\n// remaining TaskTableViewController code...\n\n}\n')),(0,o.kt)("p",null,"Let's breakdown what this code does. First, we create the variables needed and then initialize them in ",(0,o.kt)("inlineCode",{parentName:"p"},"viewDidLoad()")," . To enable background synchronization, we need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"tryStartSync()")," which allows you to control when synchronization occurs. For this application we want it to run the entire time the app is in use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'// These hold references to Ditto for easy access\nvar ditto: Ditto!\nvar store: DittoStore!\nvar liveQuery: DittoLiveQuery?\nvar collection: DittoCollection!\n\n// This is the UITableView data source\nvar tasks: [DittoDocument] = []\n\noverride func viewDidLoad() {\n    super.viewDidLoad()\n\n    // Create an instance of Ditto\n    ditto = Ditto(identity: .onlinePlayground(appID: "REPLACE_ME"))\n\n    // This starts Ditto\'s background synchronization\n    ditto.tryStartSync()\n\n    // Create some helper variables for easy access\n    store = ditto.store\n    // We will store data in the "tasks" collection\n    // Ditto stores data as collections of documents\n    collection = store.collection("tasks")\n\n    // This function will create a "live-query" that will update\n    // our UITableView\n    setupTaskList()\n}\n')),(0,o.kt)("p",null,"After setting up the variables and starting Ditto, we then use Ditto's key API to observe changes to the database by creating a live-query in the ",(0,o.kt)("inlineCode",{parentName:"p"},"setupTaskList()")," function. This allows us to set the initial state of the ",(0,o.kt)("inlineCode",{parentName:"p"},"UITableView")," after the query is immediately run and then subsequently get callbacks for any new data changes that occur locally or that were synced from other devices:"),(0,o.kt)("p",null,"Note, that we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"observe")," API in Ditto. This API performs two functions. First, it sets up a local observer for data changes in the database that match the query and second it creates a subscription for the same query that will be used to request this data from other devices. For simplicity, we are using this combined API, but you can also call them independently. To learn more, see the ",(0,o.kt)("a",{href:"/concepts/syncing-data",target:"_blank"},"Observing Changes")," section in the documentation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func setupTaskList() {\n    liveQuery = collection.findAll().observe { [weak self] docs, event in\n        guard let `self` = self else { return }\n        switch event {\n        case .update(let changes):\n            guard changes.insertions.count > 0 || changes.deletions.count > 0 || changes.updates.count > 0  || changes.moves.count > 0 else { return }\n            DispatchQueue.main.async {\n                self.tableView.beginUpdates()\n                self.tableView.performBatchUpdates({\n                    let deletionIndexPaths = changes.deletions.map { idx -> IndexPath in\n                        return IndexPath(row: idx, section: 0)\n                    }\n                    self.tableView.deleteRows(at: deletionIndexPaths, with: .automatic)\n                    let insertionIndexPaths = changes.insertions.map { idx -> IndexPath in\n                        return IndexPath(row: idx, section: 0)\n                    }\n                    self.tableView.insertRows(at: insertionIndexPaths, with: .automatic)\n                    let updateIndexPaths = changes.updates.map { idx -> IndexPath in\n                        return IndexPath(row: idx, section: 0)\n                    }\n                    self.tableView.reloadRows(at: updateIndexPaths, with: .automatic)\n                    for move in changes.moves {\n                        let from = IndexPath(row: move.from, section: 0)\n                        let to = IndexPath(row: move.to, section: 0)\n                        self.tableView.moveRow(at: from, to: to)\n                    }\n                }) { _ in }\n                // Set the tasks array backing the UITableView to the new documents\n                self.tasks = docs\n                self.tableView.endUpdates()\n            }\n        case .initial:\n            // Set the tasks array backing the UITableView to the new documents\n            self.tasks = docs\n            DispatchQueue.main.async {\n                self.tableView.reloadData()\n            }\n        default: break\n        }\n    }\n}\n")),(0,o.kt)("p",null,"This is a best-practice when using Ditto, since it allows your UI to simply react to data changes which can come at any time given the ad-hoc nature of how Ditto synchronizes with nearby devices. With this in place, we can now add user actions and configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"UITableview")," to display the tasks."),(0,o.kt)("h2",{id:"3-3-add-a-task"},"3-3 Add A Task"),(0,o.kt)("p",null,"To allow the user to create a task we want to display an alert view in response to clicking the add bar item. Add the following code to the ",(0,o.kt)("inlineCode",{parentName:"p"},"didClickAddTask()")," function we added earlier:\ncode-tabs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'@IBAction func didClickAddTask(_ sender: UIBarButtonItem) {\n    // Create an alert\n    let alert = UIAlertController(\n        title: "Add New Task",\n        message: nil,\n        preferredStyle: .alert)\n\n    // Add a text field to the alert for the new task text\n    alert.addTextField(configurationHandler: nil)\n\n    alert.addAction(UIAlertAction(title: "Cancel", style: .cancel, handler: nil))\n\n    // Add a "OK" button to the alert.\n    alert.addAction(UIAlertAction(title: "OK", style: .default, handler: { [weak self] (_) in\n        guard let self = self else { return }\n        if let body = alert.textFields?[0].text\n        {\n            // Insert the data into Ditto\n            _ = try! self.collection.insert([\n                "body": body,\n                "isCompleted": false\n            ])\n        }\n    }))\n\n    // Present the alert to the user\n    present(alert, animated: true, completion: nil)\n}\n')),(0,o.kt)("p",null,"Take note that this logic is using the Ditto ",(0,o.kt)("inlineCode",{parentName:"p"},"insert()")," API to create a task document. Ditto's API is designed around JSON-compatible documents which are organized into collections:\ncode-tabs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'_ = try! self.collection.insert([\n    "body": body,\n    "isCompleted": false\n])\n')),(0,o.kt)("h2",{id:"3-4-configure-uitableview-to-display-task-list"},"3-4 Configure UITableView To Display Task List"),(0,o.kt)("p",null,"To ensure the UITableView can display the tasks, we need to configure it. Adjust\nyour ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksTableViewController")," to include the following code (these functions\nwere already created when the file was generated by Xcode):\ncode-tabs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'// MARK: - Table view data source\n\noverride func numberOfSections(in tableView: UITableView) -> Int {\n    return 1\n}\n\noverride func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {\n    return tasks.count\n}\n\n\noverride func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {\n    let cell = tableView.dequeueReusableCell(withIdentifier: "taskCell", for: indexPath)\n\n    // Configure the cell...\n    let task = tasks[indexPath.row]\n    cell.textLabel?.text = task["body"].stringValue\n    let taskComplete = task["isCompleted"].boolValue\n    if taskComplete {\n        cell.accessoryType = .checkmark\n    }\n    else {\n        cell.accessoryType = .none\n    }\n\n    return cell\n}\n')),(0,o.kt)("p",null,"Earlier, we created the ",(0,o.kt)("inlineCode",{parentName:"p"},"tasks")," array which is the data source to the ",(0,o.kt)("inlineCode",{parentName:"p"},"UITableView"),". This code configures the ",(0,o.kt)("inlineCode",{parentName:"p"},"UITableView")," to use this array and then configures the table view cell to display the task text and a checkmark on whether it is complete or not."))}h.isMDXComponent=!0}}]);