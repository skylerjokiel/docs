"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6410],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return t?r.createElement(h,a(a({ref:n},d),{},{components:t})):r.createElement(h,a({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31435:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={title:"API",sidebar_position:2},l=void 0,p={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"API",description:"POST /api/v1/store",source:"@site/docs/http/api.md",sourceDirName:".",slug:"/api",permalink:"/http/api",editUrl:"https://github.com/getditto/docs/tree/main/docs/http/api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"API",sidebar_position:2},sidebar:"docs",previous:{title:"Map",permalink:"/http/common/datamodel/map"},next:{title:"Transactions",permalink:"/http/how-it-works"}},d=[{value:"<code>POST /api/v1/store</code>",id:"post-apiv1store",children:[{value:"Example",id:"example",children:[],level:3},{value:"Distinct Values",id:"distinct-values",children:[],level:3}],level:2}],u={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"post-apiv1store"},(0,o.kt)("inlineCode",{parentName:"h2"},"POST /api/v1/store")),(0,o.kt)("p",null,"All RPC requests are POST requests to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<app-uuid>.cloud.ditto.live/api/v1/store"),".  "),(0,o.kt)("details",null,(0,o.kt)("summary",null,"RPC Request Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "RPC Request",\n  "description": "This is defines the contents of any request to /api/v1/store.  This object should be serialized as JSON or CBOR and be in the body of the POST",\n  "oneOf": [\n    {\n      "title": "Find Parameters",\n      "type": "object",\n      "required": [\n        "method",\n        "parameters"\n      ],\n      "properties": {\n        "method": {\n          "type": "string",\n          "enum": [\n            "find"\n          ]\n        },\n        "parameters": {\n          "type": "object",\n          "required": [\n            "args",\n            "collection",\n            "query"\n          ],\n          "properties": {\n            "args": {\n              "title": "Query Arguments",\n              "description": "If any variables are used in the query then the values should be passed in here.",\n              "type": [\n                "object",\n                "null"\n              ]\n            },\n            "collection": {\n              "title": "Collection",\n              "description": "The name of the collection to query",\n              "type": "string"\n            },\n            "describe": {\n              "title": "Describe",\n              "description": "Turns the query into a Describe query",\n              "default": false,\n              "type": "boolean"\n            },\n            "limit": {\n              "title": "Limit",\n              "description": "The maximum number of values to return",\n              "default": 1000,\n              "type": "integer",\n              "format": "uint32",\n              "maximum": 10000.0,\n              "minimum": 0.0\n            },\n            "offset": {\n              "title": "Offset",\n              "description": "The number of records to skip at the beginning of a query",\n              "type": [\n                "integer",\n                "null"\n              ],\n              "format": "uint32",\n              "minimum": 0.0\n            },\n            "query": {\n              "title": "Query",\n              "description": "The query to run",\n              "type": "string"\n            }\n          }\n        }\n      }\n    },\n    {\n      "title": "FindById Parameters",\n      "type": "object",\n      "required": [\n        "method",\n        "parameters"\n      ],\n      "properties": {\n        "method": {\n          "type": "string",\n          "enum": [\n            "findById"\n          ]\n        },\n        "parameters": {\n          "type": "object",\n          "required": [\n            "_id",\n            "collection"\n          ],\n          "properties": {\n            "_id": {\n              "$ref": "#/definitions/AnyValue"\n            },\n            "collection": {\n              "title": "Collection",\n              "description": "The name of the collection to query",\n              "type": "string"\n            }\n          }\n        }\n      }\n    },\n    {\n      "title": "Write Parameters",\n      "type": "object",\n      "required": [\n        "method",\n        "parameters"\n      ],\n      "properties": {\n        "method": {\n          "type": "string",\n          "enum": [\n            "write"\n          ]\n        },\n        "parameters": {\n          "type": "object",\n          "required": [\n            "commands"\n          ],\n          "properties": {\n            "commands": {\n              "title": "Commands",\n              "description": "The list of all write commands to be run.",\n              "type": "array",\n              "items": {\n                "$ref": "#/definitions/WriteCommand"\n              }\n            }\n          }\n        }\n      }\n    }\n  ],\n  "definitions": {\n    "AnyValue": true,\n    "UpdateCommand": {\n      "type": "object",\n      "required": [\n        "method",\n        "path"\n      ],\n      "properties": {\n        "method": {\n          "title": "Method",\n          "description": "The operation to perform on the property.",\n          "allOf": [\n            {\n              "$ref": "#/definitions/UpdateCommandMethod"\n            }\n          ]\n        },\n        "path": {\n          "type": "string"\n        },\n        "value": {\n          "title": "Value",\n          "description": "The value to use in the operation.",\n          "default": null,\n          "allOf": [\n            {\n              "$ref": "#/definitions/AnyValue"\n            }\n          ]\n        }\n      }\n    },\n    "UpdateCommandMethod": {\n      "type": "string",\n      "enum": [\n        "set",\n        "increment",\n        "replaceWithCounter"\n      ]\n    },\n    "WriteCommand": {\n      "oneOf": [\n        {\n          "title": "Update Command",\n          "description": "If a value matching this query exists, update it with each given command.",\n          "type": "object",\n          "required": [\n            "args",\n            "collection",\n            "commands",\n            "method",\n            "query"\n          ],\n          "properties": {\n            "args": {\n              "title": "Query Arguments",\n              "description": "If any variables are used in the query then the values should be passed in here.",\n              "type": [\n                "object",\n                "null"\n              ]\n            },\n            "collection": {\n              "type": "string"\n            },\n            "commands": {\n              "title": "Commands",\n              "description": "This is a series of commands to be applied to the matched documents.",\n              "type": "array",\n              "items": {\n                "$ref": "#/definitions/UpdateCommand"\n              }\n            },\n            "method": {\n              "type": "string",\n              "enum": [\n                "update"\n              ]\n            },\n            "query": {\n              "title": "Query",\n              "description": "The query to run",\n              "type": "string"\n            }\n          }\n        },\n        {\n          "title": "Upsert Command",\n          "description": "If a value matching this ID exists, update it with the contents of value.  If it doesn\'t exist, insert it.",\n          "type": "object",\n          "required": [\n            "collection",\n            "method",\n            "value"\n          ],\n          "properties": {\n            "collection": {\n              "type": "string"\n            },\n            "method": {\n              "type": "string",\n              "enum": [\n                "upsert"\n              ]\n            },\n            "value": {\n              "title": "Value to Upsert",\n              "description": "The new document to insert.  This must document be an object with an _id parameter",\n              "type": "object"\n            }\n          }\n        },\n        {\n          "title": "Remove Command",\n          "description": "Run a query and delete all documents that match.",\n          "type": "object",\n          "required": [\n            "args",\n            "collection",\n            "method",\n            "query"\n          ],\n          "properties": {\n            "args": {\n              "title": "Query Arguments",\n              "description": "If any variables are used in the query then the values should be passed in here.",\n              "type": [\n                "object",\n                "null"\n              ]\n            },\n            "collection": {\n              "type": "string"\n            },\n            "method": {\n              "type": "string",\n              "enum": [\n                "remove"\n              ]\n            },\n            "query": {\n              "title": "Query",\n              "description": "The query to run",\n              "type": "string"\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"RPC Response Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "title": "RpcResponse",\n  "anyOf": [\n    {\n      "title": "FindById Response",\n      "type": "object",\n      "properties": {\n        "document": {\n          "title": "Document",\n          "description": "The contents of the document, if found",\n          "anyOf": [\n            {\n              "$ref": "#/definitions/AnyValue"\n            },\n            {\n              "type": "null"\n            }\n          ]\n        },\n        "txnId": {\n          "title": "Transaction ID",\n          "type": [\n            "integer",\n            "null"\n          ],\n          "format": "uint64",\n          "minimum": 0.0\n        },\n        "version": {\n          "title": "Version",\n          "deprecated": true,\n          "type": [\n            "integer",\n            "null"\n          ],\n          "format": "uint64",\n          "minimum": 0.0\n        }\n      }\n    },\n    {\n      "title": "Find Response",\n      "type": "object",\n      "required": [\n        "documents"\n      ],\n      "properties": {\n        "documents": {\n          "title": "Documents",\n          "description": "All documents matching the query.  If none the array will be empty",\n          "type": "array",\n          "items": {\n            "$ref": "#/definitions/AnyValue"\n          }\n        },\n        "txnId": {\n          "title": "Transaction ID",\n          "type": [\n            "integer",\n            "null"\n          ],\n          "format": "uint64",\n          "minimum": 0.0\n        },\n        "version": {\n          "title": "Version",\n          "deprecated": true,\n          "type": [\n            "integer",\n            "null"\n          ],\n          "format": "uint64",\n          "minimum": 0.0\n        }\n      }\n    },\n    {\n      "title": "Write Response",\n      "type": "object",\n      "required": [\n        "results"\n      ],\n      "properties": {\n        "results": {\n          "title": "Results",\n          "description": "The individual results of each write command in the call",\n          "type": "array",\n          "items": {\n            "$ref": "#/definitions/WriteCommandResult"\n          }\n        }\n      }\n    }\n  ],\n  "definitions": {\n    "AnyValue": true,\n    "WriteCommandResult": {\n      "oneOf": [\n        {\n          "title": "Update Command Result",\n          "type": "object",\n          "required": [\n            "error",\n            "internalError",\n            "method",\n            "permissionDenied",\n            "transactionId",\n            "updated"\n          ],\n          "properties": {\n            "error": {\n              "title": "Error",\n              "description": "The number of records that matched the query but were not updated due to an problem applying the command.",\n              "type": "integer",\n              "format": "uint64",\n              "minimum": 0.0\n            },\n            "internalError": {\n              "title": "Internal Error",\n              "description": "The number of records that matched the query but were not updated due to some type of internal error",\n              "type": "integer",\n              "format": "uint64",\n              "minimum": 0.0\n            },\n            "method": {\n              "type": "string",\n              "enum": [\n                "update"\n              ]\n            },\n            "permissionDenied": {\n              "title": "Permission Denied",\n              "description": "The number of records that matched the query but the client doesn\'t have sufficient permission to update",\n              "type": "integer",\n              "format": "uint64",\n              "minimum": 0.0\n            },\n            "transactionId": {\n              "title": "Transaction ID",\n              "description": "The ID of the transaction for the update.  Use this to ensure read-follows-writes consistency.",\n              "type": "integer",\n              "format": "uint64",\n              "minimum": 0.0\n            },\n            "updated": {\n              "title": "Updated",\n              "description": "The number of documents successfully updated",\n              "type": "integer",\n              "format": "uint64",\n              "minimum": 0.0\n            }\n          }\n        },\n        {\n          "title": "Upsert Command Result",\n          "type": "object",\n          "required": [\n            "method",\n            "transactionId"\n          ],\n          "properties": {\n            "method": {\n              "type": "string",\n              "enum": [\n                "upsert"\n              ]\n            },\n            "transactionId": {\n              "title": "Transaction ID",\n              "description": "The ID of the transaction for the insert or update.  Use this to ensure read-follows-writes consistency.",\n              "type": "integer",\n              "format": "uint64",\n              "minimum": 0.0\n            }\n          }\n        },\n        {\n          "type": "object",\n          "required": [\n            "deleted",\n            "internalError",\n            "method",\n            "permissionDenied",\n            "transactionId"\n          ],\n          "properties": {\n            "deleted": {\n              "title": "Deleted",\n              "description": "The number of records that matched the query and were successfully deleted.",\n              "type": "integer",\n              "format": "uint64",\n              "minimum": 0.0\n            },\n            "internalError": {\n              "title": "Internal Error",\n              "description": "The number of records that matched the query but were not deleted due to some type of internal error",\n              "type": "integer",\n              "format": "uint64",\n              "minimum": 0.0\n            },\n            "method": {\n              "type": "string",\n              "enum": [\n                "remove"\n              ]\n            },\n            "permissionDenied": {\n              "title": "Permission Denied",\n              "description": "The number of records that matched the query but the client doesn\'t have sufficient permission to delete.",\n              "type": "integer",\n              "format": "uint64",\n              "minimum": 0.0\n            },\n            "transactionId": {\n              "title": "Transaction ID",\n              "description": "The ID of the transaction for the remove.  Use this to ensure read-follows-writes consistency.",\n              "type": "integer",\n              "format": "uint64",\n              "minimum": 0.0\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n'))),(0,o.kt)("p",null,"All methods will accept or return JSON or CBOR depending on the accept and content-type headers you use.  There are a few parameters that are required for all methods. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"write"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"find")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"findById"),".  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parameters"),": (object). Contain an object of parameters to that method.  The contents of the parameter field will depend on which method is being used.  ")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Below see an example HTTP request. Notice that commands is an array.  You are able to string together multiple write commands together in order here and each will be performed serially.  The response will contain an individual result object for each write command.  Each write will be in a separate transaction and the transaction IDs can be found in the response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --verbose -X POST --data \'{\n   "method": "write",\n   "parameters": {\n      "commands": [{\n         "method": "upsert",\n         "collection": "cars",\n         "value": {\n            "_id": "car",\n            "make": "Toyota",\n            "year": 2004\n         }\n      }]\n   }\n}\'  -H \'X-DITTO-CLIENT-ID: AAAAAAAAAAAAAAAAAAAAew==\' -H \'Content-Type: application/json\' -H \'Accept: application/json\' http://${APP_DOMAIN}/api/v1/store\n')),(0,o.kt)("p",null,"The resulting response will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"results":[{"method":"upsert","transactionId":62}]}\n')),(0,o.kt)("p",null,"For more examples, see the corresponding sections in the Concepts section for ",(0,o.kt)("a",{parentName:"p",href:"/concepts/querying"},"querying"),", ",(0,o.kt)("a",{parentName:"p",href:"/concepts/update"},"update"),", and ",(0,o.kt)("a",{parentName:"p",href:"/concepts/remove"},"remove"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Can I do a query inside of an upsert?")),(0,o.kt)("p",{parentName:"div"},"No. The HTTP API will look to see if a document with that _id\nexists, and then merge the two. "),(0,o.kt)("p",{parentName:"div"},"To implement ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," behavior, you must issue two HTTP requests.  First, send a ",(0,o.kt)("inlineCode",{parentName:"p"},"find"),", and then after a response, send an ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert")," request."))),(0,o.kt)("h3",{id:"distinct-values"},"Distinct Values"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST https://<app-uuid>.cloud.ditto.live/api/v1/documents/<collection>/distinct_values")),(0,o.kt)("p",null,"Query for the distinct values in a collection. Returns a single document containing the paths and their distinct values.  Paths are specified as json arrays of strings. This query expects a body of json in the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "filter": "true"\n  "paths": [\n    "widgets",\n    "nested.device_id",\n    "nested.tags[*]",\n    "nested",\n    "nested.tags"\n  ]\n}\n')),(0,o.kt)("p",null,"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"filter - The query used to select documents."),(0,o.kt)("li",{parentName:"ul"},"paths (list) - A list of DittoQl paths to get distinct values for. See Supported Paths section below."),(0,o.kt)("li",{parentName:"ul"},"timeout_millis (number, optional) - the timeout, in milliseconds")),(0,o.kt)("p",null,"Supported paths"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Field access. Eg. ",(0,o.kt)("inlineCode",{parentName:"li"},"fieldA"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"fieldA.fieldB"),"."),(0,o.kt)("li",{parentName:"ul"},"Array projection. Eg. ",(0,o.kt)("inlineCode",{parentName:"li"},"fieldA.arrayB[*]"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"fieldA.arrayB[*].fieldC"),"."),(0,o.kt)("li",{parentName:"ul"},"No other access methods are supported.")),(0,o.kt)("p",null,"Response"),(0,o.kt)("p",null,"  The response will contain an object where the keys are the requested paths (same format as the request) and their values are the unique values at the respective paths.\nNote that only primitive values are returned distinctly. Any arrays or objects present at the specified path will appear in the result as an empty array ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," or object ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," respectively."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: application/json\nX-DITTO-TXN-ID: 7\n{\n  "item": {\n    "widgets": [1, 2, 3],\n    "nested.device_id": ["device1", "device2"],\n    "nested.tags[*]": ["tag1", "tag2"],\n    "nested": [{}],\n    "nested.tags": [[]],\n  }\n}\n\n')))}m.isMDXComponent=!0}}]);