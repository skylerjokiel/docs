---
title: '2 - Configure Ditto'
---

## 2-1 Create Your Ditto App

Before we start coding, we first need to create a new app in the [portal](https://portal.ditto.live). Apps created on the portal will automatically sync data between them and also to the Ditto Big Peer.

Each app created on the portal has a unique `appID` which can be seen on your app's settings page once the app has been created. This ID is used in subsequent sections to configure your Ditto instance.

## 2-2 Add Permissions to the `Info.plist`

For Ditto to fully use all the network transports like Bluetooth Low Energy, Local Area Network, Apple Wireless Direct, the app will need to ask the user for permissions. These permission prompts need to be in the __Info.plist__ file of your project.

Follow the instructions on the [iOS Installation page](../../installation#platform-permissions).

## 2-3 Add `ditto` to `TasksApp.swift`

When Xcode generated your project, there should be a file called __TasksApp.swift__. We will need an instance of Ditto throughout this tutorial and the app's lifecycle.

1. First import Ditto with `import DittoSwift`
2. Construct an instance of Ditto with an online playground identity using the APP ID of the app that you just created on the portal. We are using an `.onlinePlayground` setup, which should suffice for this tutorial. However, you should never deploy this to a production environment like the Apple App Store.
3. We will call `startSync` as soon as the app's `ContentView` appears. Add two `@State` variables to capture if `ditto.startSync` throws an error. One variable will be `@State var isPresentingAlert = false` and the other is a `@State var errorMessage = ""`.
4. Add an `.onAppear` function and give it a plagyground token. Look for `"YOUR_APP_ID_HERE"` and insert your valid token. You can get a token from our [Big Peer portal](https://portal.ditto.live). If the `startSync()` fails, we will set `isPresentingAlert = true` and set the `errorMessage` to the error's `.localizedDescription`.
5. We will then present a `.alert` if `isPresentingAlert` is true. Notice that we will pass a `@State` variable as a binding type, which is why we denoted `$isPresentingAlert` prefixed with a `$`. To learn more about SwiftUI's `Binding` types like `@State` [click here.](https://developer.apple.com/tutorials/app-dev-training/managing-data-flow-between-views)

```swift title=TasksApp.swift
import SwiftUI
// 1.
// highlight-next-line
import DittoSwift

@main
struct TasksApp: App {

    // 2.
    // highlight-next-line
    var ditto = Ditto(identity: .onlinePlayground(appID: "YOUR_APP_ID_HERE", token: "YOUR_TOKEN_HERE"))

    // 3.
    // highlight-start
    @State var isPresentingAlert = false
    @State var errorMessage = ""
    // highlight-end

    var body: some Scene {
        WindowGroup {
            TasksListScreen(ditto: ditto)

                // 4
                // highlight-start
                .onAppear(perform: {
                    do {
                        try ditto.startSync()
                    } catch (let err){
                        isPresentingAlert = true
                        errorMessage = err.localizedDescription
                    }
                })
                // highlight-end
                // 5.
                // highlight-start
                .alert(isPresented: $isPresentingAlert) {
                    Alert(title: Text("Uh Oh"), message: Text("There was an error trying to start the sync. Here's the error \(errorMessage) Ditto will continue working as a local database."), dismissButton: .default(Text("Got it!")))
                }
                // highlight-end
        }
    }
}
```


## 2-4 Create a `Task` struct

Ditto is a document database, which represents all of its rows in the database a JSON-like structure. In this tutorial, we will define each task like so:

```jsonc
{
  "_id": "123abc",
  "body": "Get Milk",
  "isCompleted": true
}
```

These Task documents will all be in the "tasks" collection. We will be referencing this collection throughout this tutorial with:

```swift
let tasksCollection = ditto.store["tasks"]
```

Ditto documents have a flexible structure. Oftentimes, in strongly-typed languages like Swift, we will create a data structure give more definition to the app.

Create a new Swift file called __Task.swift__ in your project.

1. Add `import DittoSwift` to the top of the file.
2. Add the matching variables `let _id: String`, `let body: String`, and `let isCompleted: Bool` to the struct. We will use this to match the document values to to the struct.
3. Add an `init` constructor to `Task` that takes in a `DittoDocument`
4. In the `init` constructor, parse out the document's keys with Ditto's type safe value accessors. This will safely map all the document's values to the struct's variables that we created in step 2.
5. Add a second `init` constructor to `Task` that just takes a `String` and a `bool`
6. Add an `extension Task: Identifiable` right below the `Task` struct definition and implement `var id: String` to return the `_id` key. We add the `Identifiable` protocol to assist SwiftUI's `List` view and `ForEach` component in later sections. Collection views in SwiftUI require knowing if a view is unique to prevent wasteful redraws. While it may seem confusing, we are only allowing the protocol to read the `_id` that we added in step 2.

```swift title="Task.swift"
// 1.
import DittoSwift

struct Task {

    // 2.
    let _id: String
    let body: String
    let isCompleted: Bool

    // 3.
    init(document: DittoDocument) {
        // 4.
        _id = document["_id"].stringValue
        body = document["body"].stringValue
        isCompleted = document["isCompleted"].boolValue
    }
    
    // 5.
    init(body: String, isCompleted: Bool) {
        self._id = UUID().uuidString
        self.body = body
        self.isCompleted = isCompleted
    }
}

// 6.
extension Task: Identifiable {
    var id: String {
        return _id
    }
}

```

This data class takes a `DittoDocument` and safely parses out the values into native Swift types. We also added constructor that allows us to preview data without requiring Ditto.

So now in our application if we want an array of `Tasks`, `[Task]`, we can write the following code:

```swift
let tasks: [Task] = ditto.store["tasks"].find("!isDeleted").exec().map({ Task(document: $0) })
```

Once we set up our user interface, you'll notice that reading these values becomes a bit easier with this added structure.

## 2-5 Create a `TasksListScreen` view

When we generated the project, Xcode created a default `ContentView`, which need to swap out for a better starter view. Let's create a view called `TasksListScreen` which will show the list of the views.

1. Create a new __SwiftUI View__ View by clicking __File > New > SwiftUI View__

![Xcode File New SwiftUI view](./xcode-new-swiftui-view.png)

2. Name it __"TasksListScreen"__

3. At the top of the new __TasksListScreen.__Add Ditto with `import DittoSwift` at the top of the file

4. Create a constructor and a variable to pass `var ditto: Ditto`

5. Replace the `body` with `NavigationView` with a single `List` child. We will fill out the contents of the `List` in the next section. We've also added a couple of decorative navigation elements which we will hook up later. This includes a navigation title, `.navigationTitle` which shows the name of the app, a navigation plus button in `.navigationBarItems` and a `.sheet` that we will use navigate to an `EditScreen`. We will create the `EditScreen` later.

```swift title="TasksListScreen.swift"
import SwiftUI
// 3.
// highlight-next-line
import DittoSwift

struct TasksListScreen: View {

    // 4.
    // highlight-start
    let ditto: Ditto

    init(ditto: Ditto) {
        self.ditto = ditto
    }
    // highlight-end

    var body: some View {
        // 5.
        // highlight-start
        NavigationView {
            List {

            }
            .navigationTitle("Tasks - SwiftUI")
            .navigationBarItems(trailing: Button(action: {

            }, label: {
                Image(systemName: "plus")
            }))
            .sheet(isPresented: .constant(false), content: {

            })
        }
        // highlight-end
    }
}
```
