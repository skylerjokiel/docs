"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6017],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,u=m["".concat(d,".").concat(k)]||m[k]||c[k]||o;return n?i.createElement(u,l(l({ref:t},s),{},{components:n})):i.createElement(u,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55846:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return s}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],r={title:"5 - Editing Tasks"},d=void 0,p={unversionedId:"tutorials/jetpack-compose/edit-screen",id:"tutorials/jetpack-compose/edit-screen",isDocsHomePage:!1,title:"5 - Editing Tasks",description:"Our final screen will be the EditScreen. The EditScreen will be in charge of 3 functions:",source:"@site/docs/tutorials/jetpack-compose/5-edit-screen.md",sourceDirName:"tutorials/jetpack-compose",slug:"/tutorials/jetpack-compose/edit-screen",permalink:"/pr-preview/pr-208/tutorials/jetpack-compose/edit-screen",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/jetpack-compose/5-edit-screen.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5 - Editing Tasks"},sidebar:"tutorialSidebar",previous:{title:"4 - Showing the List of Tasks",permalink:"/pr-preview/pr-208/tutorials/jetpack-compose/tasks-list-screen"},next:{title:"1 - Setup",permalink:"/pr-preview/pr-208/tutorials/uikit/setup"}},s=[{value:"5-1 Creating the <code>@Composable</code> <code>EditForm</code>",id:"5-1-creating-the-composable-editform",children:[],level:2},{value:"5-2 Creating the <code>EditScreenViewModel</code>",id:"5-2-creating-the-editscreenviewmodel",children:[],level:2},{value:"5-3 Creating the <code>EditScreen</code>",id:"5-3-creating-the-editscreen",children:[],level:2},{value:"5-4",id:"5-4",children:[],level:2}],c={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Our final screen will be the ",(0,o.kt)("inlineCode",{parentName:"p"},"EditScreen"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"EditScreen")," will be in charge of 3 functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Editing an existing ",(0,o.kt)("inlineCode",{parentName:"li"},"Task")),(0,o.kt)("li",{parentName:"ul"},"Creating a ",(0,o.kt)("inlineCode",{parentName:"li"},"Task")," and inserting into the tasks collection"),(0,o.kt)("li",{parentName:"ul"},"Deleting an existing ",(0,o.kt)("inlineCode",{parentName:"li"},"Task"))),(0,o.kt)("h2",{id:"5-1-creating-the-composable-editform"},"5-1 Creating the ",(0,o.kt)("inlineCode",{parentName:"h2"},"@Composable")," ",(0,o.kt)("inlineCode",{parentName:"h2"},"EditForm")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"EditForm")," is a simple layout that includes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A constructor ",(0,o.kt)("inlineCode",{parentName:"li"},"canDelete: Boolean")," which determines whether or not to show a delete ",(0,o.kt)("inlineCode",{parentName:"li"},"Button")),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"body: String")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"isCompleted: Boolean")),(0,o.kt)("li",{parentName:"ol"},"Respective callback parameters for changes in the ",(0,o.kt)("inlineCode",{parentName:"li"},"TextField")," and save and delete ",(0,o.kt)("inlineCode",{parentName:"li"},"Button")," (see steps 4, 5, 6)"),(0,o.kt)("li",{parentName:"ol"},"An ",(0,o.kt)("inlineCode",{parentName:"li"},"TextField")," which we use to edit the ",(0,o.kt)("inlineCode",{parentName:"li"},"Task.body")),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"Switch")," which is used to edit the ",(0,o.kt)("inlineCode",{parentName:"li"},"Task.isCompleted")),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"Button")," for saving a task."),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"Button")," for deleting a task")),(0,o.kt)("p",null,"We've also included a ",(0,o.kt)("inlineCode",{parentName:"p"},"@Preview")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"EditForm"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"EditFormPreview",src:n(8e4).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="EditForm.kt"',title:'"EditForm.kt"'},'@Composable\nfun EditForm(\n    // 1\n    canDelete: Boolean,\n    // 2\n    body: String,\n    // 3\n    onBodyTextChange: ((body: String) -> Unit)? = null,\n    // 2\n    isComplete: Boolean = false,\n    // 3\n    onIsComplete: ((isCompleted: Boolean) -> Unit)? = null,\n    // 3\n    onSaveButtonClicked: (() -> Unit)? = null,\n    // 3\n    onDeleteButtonClicked: (() -> Unit)? = null,\n) {\n    Column(modifier = Modifier.padding(16.dp)) {\n        Text(text = "Body:")\n        // 4\n        TextField(\n            value = body,\n            onValueChange = { onBodyTextChange?.invoke(it) },\n            modifier = Modifier\n                .fillMaxWidth()\n                .padding(bottom = 12.dp)\n        )\n        Row(\n            modifier = Modifier\n                .fillMaxWidth()\n                .padding(bottom = 12.dp),\n            Arrangement.SpaceBetween\n        ) {\n            Text(text = "Is Complete:")\n            // 5\n            Switch(checked = isComplete, onCheckedChange = { onIsComplete?.invoke(it) })\n        }\n        // 6\n        Button(\n            onClick = {\n                onSaveButtonClicked?.invoke()\n            },\n            modifier = Modifier\n                .padding(bottom = 12.dp)\n                .fillMaxWidth(),\n        ) {\n            Text(\n                text = "Save",\n                modifier = Modifier.padding(8.dp)\n            )\n        }\n        if (canDelete) {\n            // 7\n            Button(\n                onClick = {\n                    onDeleteButtonClicked?.invoke()\n                },\n                colors = ButtonDefaults.buttonColors(\n                    backgroundColor = Color.Red,\n                    contentColor = Color.White),\n                modifier = Modifier\n                    .fillMaxWidth(),\n            ) {\n                Text(\n                    text = "Delete",\n                    modifier = Modifier.padding(8.dp)\n                )\n            }\n        }\n    }\n}\n\n@Preview(\n    showBackground = true,\n    device = Devices.PIXEL_3\n)\n@Composable\nfun EditFormPreview() {\n    EditForm(canDelete = true, "Hello")\n}\n')),(0,o.kt)("h2",{id:"5-2-creating-the-editscreenviewmodel"},"5-2 Creating the ",(0,o.kt)("inlineCode",{parentName:"h2"},"EditScreenViewModel")),(0,o.kt)("p",null,"Like the ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksListScreenViewModel"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"EditScreenViewModel")," is a ViewModel for the ",(0,o.kt)("inlineCode",{parentName:"p"},"EditScreen"),". Create a file called ",(0,o.kt)("strong",{parentName:"p"},"EditScreenViewModel.kt"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"This ViewModel will be given a ",(0,o.kt)("inlineCode",{parentName:"li"},"setupWithTask")," function that takes in a ",(0,o.kt)("inlineCode",{parentName:"li"},"taskId: String?"),". If the ",(0,o.kt)("inlineCode",{parentName:"li"},"taskId == null"),", then the user is attempting to ",(0,o.kt)("em",{parentName:"li"},"create")," a ",(0,o.kt)("inlineCode",{parentName:"li"},"Task"),". If the ",(0,o.kt)("inlineCode",{parentName:"li"},"taskId != null"),", the user has supplied to the ",(0,o.kt)("inlineCode",{parentName:"li"},"EditScreen")," a ",(0,o.kt)("inlineCode",{parentName:"li"},"taskId")," to ",(0,o.kt)("em",{parentName:"li"},"edit"),"."),(0,o.kt)("li",{parentName:"ol"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"taskId != null"),", we will fetch a task from Ditto, and assign it to ",(0,o.kt)("inlineCode",{parentName:"li"},"isCompleted: MutableLiveData<Boolean>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"body: MutableLiveData<String>")," and assign ",(0,o.kt)("inlineCode",{parentName:"li"},"canDelete: MutableLiveData<Boolean>")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ol"},"We add a ",(0,o.kt)("inlineCode",{parentName:"li"},"save")," functionality to either ",(0,o.kt)("inlineCode",{parentName:"li"},".insert")," or ",(0,o.kt)("inlineCode",{parentName:"li"},".update")," into Ditto depending if the ",(0,o.kt)("inlineCode",{parentName:"li"},"_id")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," or not."),(0,o.kt)("li",{parentName:"ol"},"We add another function, ",(0,o.kt)("inlineCode",{parentName:"li"},"delete"),", to call ",(0,o.kt)("inlineCode",{parentName:"li"},".remove"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="EditScreenViewModel.kt"',title:'"EditScreenViewModel.kt"'},'class EditScreenViewModel: ViewModel() {\n\n    var _id: String? = null;\n\n    // 2.\n    var body = MutableLiveData<String>("")\n    var isCompleted = MutableLiveData<Boolean>(false)\n    var canDelete = MutableLiveData<Boolean>(false)\n\n    // 1.\n    fun setupWithTask(taskId: String?) {\n        canDelete.value = taskId != null\n        val taskId: String = taskId?.let { it } ?: return;\n        val doc: DittoDocument = TasksApplication.ditto!!.store["tasks"]\n            .findByID(DittoDocumentID(taskId))\n            .exec()?.let { it } ?: return;\n        val task = Task(doc)\n        _id = task._id\n        body.value = task.body\n        isCompleted.value = task.isCompleted\n\n    }\n\n    // 3.\n    fun save() {\n        if (_id == null) {\n            // insert\n            TasksApplication.ditto!!.store["tasks"]\n                .insert(mapOf(\n                    "body" to body.value,\n                    "isCompleted" to isCompleted.value\n                ))\n        } else {\n            // update\n            TasksApplication.ditto!!.store["tasks"].findByID(DittoDocumentID(_id!!))\n                .update { mutableDoc ->\n                    val mutableDoc = mutableDoc?.let { it } ?: return@update\n                    mutableDoc["body"].set(body.value ?: "")\n                    mutableDoc["isCompleted"].set(isCompleted.value ?: "")\n                }\n        }\n    }\n\n    // 4.\n    fun delete() {\n        TasksApplication.ditto!!.store["tasks"].findByID(DittoDocumentID(_id!!))\n            .remove()\n    }\n}\n')),(0,o.kt)("h2",{id:"5-3-creating-the-editscreen"},"5-3 Creating the ",(0,o.kt)("inlineCode",{parentName:"h2"},"EditScreen")),(0,o.kt)("p",null,"Just like the ",(0,o.kt)("inlineCode",{parentName:"p"},"TasksListScreen")," in the previous section, we will now create an ",(0,o.kt)("inlineCode",{parentName:"p"},"EditScreen.kt"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a constructor that accepts a ",(0,o.kt)("inlineCode",{parentName:"li"},"navController")," and a ",(0,o.kt)("inlineCode",{parentName:"li"},"task: String?"),". See ",(0,o.kt)("a",{parentName:"li",href:"./navigation"},"the section on navigation")," to reference these values."),(0,o.kt)("li",{parentName:"ol"},"Create a reference to the ",(0,o.kt)("inlineCode",{parentName:"li"},"EditScreenViewModel")),(0,o.kt)("li",{parentName:"ol"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"setupWithTask")," with the ",(0,o.kt)("inlineCode",{parentName:"li"},"taskId")," from the constructor. The ",(0,o.kt)("inlineCode",{parentName:"li"},"EditScreenViewModel")," will now know if the user is attempting to edit or create a new task."),(0,o.kt)("li",{parentName:"ol"},"To help the user show if they are attempting or edit or create, we will show a ",(0,o.kt)("inlineCode",{parentName:"li"},"TopAppBar")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Text")," with an appropriate title."),(0,o.kt)("li",{parentName:"ol"},"We will call ",(0,o.kt)("inlineCode",{parentName:"li"},"observeAsState")," on the ",(0,o.kt)("inlineCode",{parentName:"li"},"EditScreenViewModel"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"MutableLiveData")," properties and extract the value to feed into our views."),(0,o.kt)("li",{parentName:"ol"},"Create a Scaffold with a ",(0,o.kt)("inlineCode",{parentName:"li"},"TopAppBar")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"content { EditForm... }")),(0,o.kt)("li",{parentName:"ol"},"Like before, we will bind all the change handlers from the ",(0,o.kt)("inlineCode",{parentName:"li"},"EditForm")," and the values back to the ",(0,o.kt)("inlineCode",{parentName:"li"},"viewModel")),(0,o.kt)("li",{parentName:"ol"},"Upon saving or deleting, we will tell the ",(0,o.kt)("inlineCode",{parentName:"li"},"navController")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"popBackStack"),", which will cause the app to go back to the ",(0,o.kt)("inlineCode",{parentName:"li"},"TasksListScreen"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="EditScreen.kt"',title:'"EditScreen.kt"'},'@Composable\nfun EditScreen(navController: NavController, taskId: String?) { // 1.\n    // 2.\n    val editScreenViewModel: EditScreenViewModel = viewModel();\n    // 3.\n    editScreenViewModel.setupWithTask(taskId = taskId)\n    // 4.\n    val topBarTitle = if (taskId == null) "New Task" else "Edit Task"\n\n    // 5.\n    val body: String by editScreenViewModel.body.observeAsState("")\n    val isCompleted: Boolean by editScreenViewModel.isCompleted.observeAsState(initial = false)\n    val canDelete: Boolean by editScreenViewModel.canDelete.observeAsState(initial = false)\n\n    // 6.\n    Scaffold(\n        topBar = {\n            TopAppBar(\n                title = { Text(topBarTitle) },\n                backgroundColor = colorResource(id = R.color.purple_700)\n            )\n        },\n        content = {\n            // 7.\n            EditForm(\n                canDelete = canDelete,\n                body = body,\n                onBodyTextChange = { editScreenViewModel.body.value = it },\n                isComplete = isCompleted,\n                onIsComplete = { editScreenViewModel.isCompleted.value = it },\n                onSaveButtonClicked = {\n                    editScreenViewModel.save()\n                    // 8.\n                    navController.popBackStack()\n                },\n                onDeleteButtonClicked = {\n                    editScreenViewModel.delete()\n                    // 8.\n                    navController.popBackStack()\n                }\n            )\n        }\n    )\n}\n')),(0,o.kt)("h2",{id:"5-4"},"5-4"),(0,o.kt)("p",null,"Finally you are now completely done with Tasks Jetpack Compose tutorial app."))}m.isMDXComponent=!0},8e4:function(e,t,n){t.Z=n.p+"assets/images/EditFormPreview-6f970f5c9d7658b6c9908fc3871c3f4b.png"}}]);