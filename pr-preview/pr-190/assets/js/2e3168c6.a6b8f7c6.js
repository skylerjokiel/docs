"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5159],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96868:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"Animating UITableView with the Observe API",sidebar_position:2},l=void 0,c={unversionedId:"guides/ios/uitableview-animations-with-observe",id:"guides/ios/uitableview-animations-with-observe",isDocsHomePage:!1,title:"Animating UITableView with the Observe API",description:"The Ditto .observe callback will fire for any changes to the underlying query. These changes can happen from your own device or a replication. There are two parameters for the callback handler, the current snaphot of documents and an event which gives a bit more information about how snapshots evolve after subsequent calls.",source:"@site/docs/guides/ios/uitableview-animations-with-observe.md",sourceDirName:"guides/ios",slug:"/guides/ios/uitableview-animations-with-observe",permalink:"/pr-preview/pr-190/guides/ios/uitableview-animations-with-observe",editUrl:"https://github.com/getditto/docs/edit/master/docs/guides/ios/uitableview-animations-with-observe.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Animating UITableView with the Observe API",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Using Ditto with Codable Support",permalink:"/pr-preview/pr-190/guides/ios/codables"},next:{title:"Avoiding Excessive Memory Consumption",permalink:"/pr-preview/pr-190/guides/ios/avoiding-excessive-memory-consumption"}},u=[],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Ditto ",(0,a.kt)("inlineCode",{parentName:"p"},".observe")," callback will fire for any changes to the underlying query. These changes can happen from your own device or a replication. There are two parameters for the callback handler, the current snaphot of documents and an ",(0,a.kt)("em",{parentName:"p"},"event")," which gives a bit more information about how snapshots evolve after subsequent calls. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let liveQuery = myCollection.findAll().observe { [weak self] documents, event in\n    print("current snapshot of documents", documents)\n    print("event information", event)\n}\n')),(0,a.kt)("p",null,"The event parameter gives you information about how the live query has evolved from callback fire. It can tell you which document indices were inserted, updated, moved, or removed. The following example below shows a common pattern to parse the ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," parameter, and apply ",(0,a.kt)("inlineCode",{parentName:"p"},"tableView.performBatchUpdates")," using the indices."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport DittoSwift\n\nclass ViewController: UIViewController: {\n    \n    var liveQuery: DittoLiveQuery?\n    @IBOutlet weak var tableView!\n    var documents: [DittoDocument] = []\n    \n    override func viewDidLoad(){\n        super.viewDidLoad();\n        tableView.dataSource = self\n        \n        liveQuery = collection.findAll().observe { [weak self] docs, event in\n            guard let `self` = self else { return }\n            switch event {\n            case .update(let changes):\n                guard changes.insertions.count > 0 || changes.deletions.count > 0 || changes.updates.count > 0  || changes.moves.count > 0 else { return }\n                DispatchQueue.main.async {\n                    self.tableView.beginUpdates()\n                    self.tableView.performBatchUpdates({\n                        let deletionIndexPaths = changes.deletions.map { idx -> IndexPath in\n                            return IndexPath(row: idx, section: 0)\n                        }\n                        self.tableView.deleteRows(at: deletionIndexPaths, with: .automatic)\n                        let insertionIndexPaths = changes.insertions.map { idx -> IndexPath in\n                            return IndexPath(row: idx, section: 0)\n                        }\n                        self.tableView.insertRows(at: insertionIndexPaths, with: .automatic)\n                        let updateIndexPaths = changes.updates.map { idx -> IndexPath in\n                            return IndexPath(row: idx, section: 0)\n                        }\n                        self.tableView.reloadRows(at: updateIndexPaths, with: .automatic)\n                        for move in changes.moves {\n                            let from = IndexPath(row: move.from, section: 0)\n                            let to = IndexPath(row: move.to, section: 0)\n                            self.tableView.moveRow(at: from, to: to)\n                        }\n                    }) { _ in }\n                    // Set the tasks array backing the UITableView to the new documents\n                    self.tasks = docs\n                    self.tableView.endUpdates()\n                }\n            case .initial:\n                // Set the tasks array backing the UITableView to the new documents\n                self.tasks = docs\n                DispatchQueue.main.async {\n                    self.tableView.reloadData()\n                }\n            default: break\n            }\n        }\n    }\n}\n\nextension ViewController: UITableViewDataSource {\n\n    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {\n        return documents.count\n    }\n\n    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {\n        let document = documents[indexPath.row]\n        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell") ?? UITableViewCell(style: .default, reuseIdentifier: "Cell")\n        cell.textLabel?.text = document["text"].stringValue\n        return cell\n    }\n}\n')),(0,a.kt)("p",null,"Note: This code snippet assumes that you only have ",(0,a.kt)("strong",{parentName:"p"},"one")," ",(0,a.kt)("inlineCode",{parentName:"p"},"UITableView")," section."))}p.isMDXComponent=!0}}]);