"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1085],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=d(n),g=i,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||r;return n?a.createElement(m,o(o({ref:e},c),{},{components:n})):a.createElement(m,o({ref:e},c))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66715:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"2 - Create UI"},s=void 0,d={unversionedId:"tutorials/android-kotlin/create-ui",id:"tutorials/android-kotlin/create-ui",isDocsHomePage:!1,title:"2 - Create UI",description:"2-1 Adjust Existing Layouts",source:"@site/docs/tutorials/android-kotlin/2-create-ui.md",sourceDirName:"tutorials/android-kotlin",slug:"/tutorials/android-kotlin/create-ui",permalink:"/tutorials/android-kotlin/create-ui",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/android-kotlin/2-create-ui.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2 - Create UI"},sidebar:"tutorialSidebar",previous:{title:"1 - Setup",permalink:"/tutorials/android-kotlin/setup"},next:{title:"3 - Activities",permalink:"/tutorials/android-kotlin/activities"}},c=[{value:"2-1 Adjust Existing Layouts",id:"2-1-adjust-existing-layouts",children:[],level:2},{value:"2-2 Create AlertDialog Layout",id:"2-2-create-alertdialog-layout",children:[],level:2},{value:"2-3 Define Strings",id:"2-3-define-strings",children:[],level:2},{value:"2-4 Create DialogFragment",id:"2-4-create-dialogfragment",children:[],level:2}],u={toc:c};function p(t){var e=t.components,l=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"2-1-adjust-existing-layouts"},"2-1 Adjust Existing Layouts"),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"content_main.xml")," layout file and replace the XML in the text representation view. This will remove the existing text view and a recycler view that we will use to display the list of tasks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=content_main.xml",title:"content_main.xml"},'<?xml version="1.0" encoding="utf-8"?>\n<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    app:layout_behavior="@string/appbar_scrolling_view_behavior"\n    tools:context=".MainActivity"\n    tools:showIn="@layout/activity_main">\n\n    <androidx.recyclerview.widget.RecyclerView\n        android:id="@+id/recyclerView"\n        android:layout_width="match_parent"\n        android:layout_height="match_parent" />\n</androidx.constraintlayout.widget.ConstraintLayout>\n')),(0,r.kt)("p",null,"The layout should look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create UI Layout 1",src:n(30885).Z})),(0,r.kt)("p",null,"Now navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"activity_main.xml")," layout file and replace the XML in the text representation view. This will adjust the floating action button to use a white add icon:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=activity_main.xml",title:"activity_main.xml"},'<?xml version="1.0" encoding="utf-8"?>\n<androidx.coordinatorlayout.widget.CoordinatorLayout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    tools:context=".MainActivity">\n\n    <com.google.android.material.appbar.AppBarLayout\n        android:layout_width="match_parent"\n        android:layout_height="wrap_content"\n        android:theme="@style/Theme.Tasks.AppBarOverlay">\n\n        <androidx.appcompat.widget.Toolbar\n            android:id="@+id/toolbar"\n            android:layout_width="match_parent"\n            android:layout_height="?attr/actionBarSize"\n            android:background="?attr/colorPrimary"\n            app:popupTheme="@style/Theme.Tasks.PopupOverlay" />\n\n    </com.google.android.material.appbar.AppBarLayout>\n\n    <include layout="@layout/content_main" />\n\n    <com.google.android.material.floatingactionbutton.FloatingActionButton\n        android:id="@+id/addTaskButton"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:layout_gravity="bottom|end"\n        android:layout_margin="@dimen/fab_margin"\n        android:tint="#FFFFFF"\n        app:srcCompat="@android:drawable/ic_input_add" />\n\n</androidx.coordinatorlayout.widget.CoordinatorLayout>\n')),(0,r.kt)("p",null,"The layout should look like this now:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create UI Layout 2",src:n(92876).Z})),(0,r.kt)("h2",{id:"2-2-create-alertdialog-layout"},"2-2 Create AlertDialog Layout"),(0,r.kt)("p",null,"We now need to create a new layout resource file to define our alert dialog. Right click on the layouts folder in the project and Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"File \u2192 New \u2192 XML \u2192 Layout XML")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create UI Layout 3",src:n(91985).Z})),(0,r.kt)("p",null,"Name the resource file ",(0,r.kt)("inlineCode",{parentName:"p"},"dialog_new_task")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create UI Layout 4",src:n(2139).Z})),(0,r.kt)("p",null,"Open the new ",(0,r.kt)("inlineCode",{parentName:"p"},"dialog_new_task.xml")," layout file and replace the XML in the text representation view. This will add an editable text input to allow the user to enter the task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=dialog_new_task.xml",title:"dialog_new_task.xml"},'<?xml version="1.0" encoding="utf-8"?>\n<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"\n    android:orientation="vertical" android:layout_width="match_parent"\n    android:layout_height="match_parent">\n\n    <EditText\n        android:id="@+id/editText"\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        android:inputType="text" />\n</LinearLayout>\n\n')),(0,r.kt)("p",null,"The layout should look like this now:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create UI Layout 5",src:n(63114).Z})),(0,r.kt)("h2",{id:"2-3-define-strings"},"2-3 Define Strings"),(0,r.kt)("p",null,"We need to create a few string constants. Open ",(0,r.kt)("inlineCode",{parentName:"p"},"strings.xml")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/res/values")," folder and replace it with this XML:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=strings.xml",title:"strings.xml"},'<resources>\n    <string name="app_name">Tasks</string>\n    <string name="action_settings">Settings</string>\n    <string name="title_activity_main">Tasks</string>\n    <string name="add_new_task_dialog_title">Add New Task</string>\n    <string name="save">Save</string>\n</resources>\n\n')),(0,r.kt)("h2",{id:"2-4-create-dialogfragment"},"2-4 Create DialogFragment"),(0,r.kt)("p",null,"To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"AlertDialog")," we will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"DialogFragment"),". Create a new Kotlin class by right clicking the app folder within java in the project view:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create UI Layout 6",src:n(36927).Z})),(0,r.kt)("p",null,"Name the new file ",(0,r.kt)("inlineCode",{parentName:"p"},"NewTaskDialogFragment"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create UI Layout 7",src:n(70297).Z})),(0,r.kt)("p",null,"Replace the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"NewTaskDialogFragment.kt")," with this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=NewTaskDialogFragment.kt",title:"NewTaskDialogFragment.kt"},'package live.ditto.tasks\n\nimport android.app.Activity\nimport android.app.AlertDialog\nimport android.app.Dialog\nimport android.os.Bundle\nimport android.widget.TextView\nimport androidx.fragment.app.DialogFragment\n\nclass NewTaskDialogFragment: DialogFragment() {\n\n    interface NewTaskDialogListener {\n        fun onDialogSave(dialog: DialogFragment, task: String)\n        fun onDialogCancel(dialog: DialogFragment)\n    }\n\n    var newTaskDialogListener: NewTaskDialogListener? = null\n\n    companion object {\n        fun newInstance(title: Int): NewTaskDialogFragment {\n            val newTaskDialogFragment = NewTaskDialogFragment()\n            val args = Bundle()\n            args.putInt("dialog_title", title)\n            newTaskDialogFragment.arguments = args\n            return newTaskDialogFragment\n        }\n    }\n\n    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog { // 5\n        val title = arguments!!.getInt("dialog_title")\n        val builder = AlertDialog.Builder(activity)\n        builder.setTitle(title)\n\n        val dialogView = activity!!.layoutInflater.inflate(R.layout.dialog_new_task, null)\n        val task = dialogView.findViewById<TextView>(R.id.editText)\n\n        builder.setView(dialogView)\n            .setPositiveButton(R.string.save) { _, _ -> newTaskDialogListener?.onDialogSave(this, task.text.toString()) }\n            .setNegativeButton(android.R.string.cancel) { _, _ -> newTaskDialogListener?.onDialogCancel(this) }\n        return builder.create()\n    }\n\n    @Suppress("DEPRECATION")\n    override fun onAttach(activity: Activity) { // 6\n        super.onAttach(activity)\n        try {\n            newTaskDialogListener = activity as NewTaskDialogListener\n        } catch (e: ClassCastException) {\n            throw ClassCastException("$activity must implement NewTaskDialogListener")\n        }\n    }\n}\n\n')))}p.isMDXComponent=!0},30885:function(t,e,n){e.Z=n.p+"assets/images/create_ui1-fb003b3fa713da253f67e32526eb6c15.png"},92876:function(t,e,n){e.Z=n.p+"assets/images/create_ui2-1e6cdfe7c6253fbb71f317981389365d.png"},91985:function(t,e,n){e.Z=n.p+"assets/images/create_ui3-07908703032be3dadb5e6dd568a86c21.png"},2139:function(t,e,n){e.Z=n.p+"assets/images/create_ui4-9a2ac1d9826b40b92cf91596f7b45cbf.png"},63114:function(t,e,n){e.Z=n.p+"assets/images/create_ui5-403aa69e9b88678791292eaa5b311f4b.png"},36927:function(t,e,n){e.Z=n.p+"assets/images/create_ui6-b5042c21fb7ba9c3250a467bd022f55e.png"},70297:function(t,e,n){e.Z=n.p+"assets/images/create_ui7-a7cb488dd8d5c66876cfc9b323dc5f14.png"}}]);