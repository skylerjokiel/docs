"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5074],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?i.createElement(h,l(l({ref:t},m),{},{components:n})):i.createElement(h,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95171:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],o={title:"Timeseries",sidebar_position:3},s=void 0,p={unversionedId:"timeseries",id:"timeseries",isDocsHomePage:!1,title:"Timeseries",description:"Events",source:"@site/docs/http/timeseries.md",sourceDirName:".",slug:"/timeseries",permalink:"/http/timeseries",editUrl:"https://github.com/getditto/docs/tree/main/docs/http/timeseries.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Timeseries",sidebar_position:3},sidebar:"docs",previous:{title:"Remove",permalink:"/http/common/concepts/remove"},next:{title:"Register",permalink:"/http/common/datamodel/register"}},m=[{value:"Events",id:"events",children:[{value:"<code>POST</code>",id:"post",children:[{value:"TTL",id:"ttl",children:[],level:4}],level:3},{value:"<code>GET</code>",id:"get",children:[{value:"Filling missing fields",id:"filling-missing-fields",children:[{value:"Example",id:"example",children:[],level:5}],level:4}],level:3},{value:"<code>DELETE</code>",id:"delete",children:[],level:3}],level:2},{value:"Distinct Values",id:"distinct-values",children:[{value:"<code>POST</code>",id:"post-1",children:[],level:3}],level:2},{value:"JSON Representation of Key Resources",id:"json-representation-of-key-resources",children:[{value:"Event",id:"event",children:[],level:3},{value:"Datetime",id:"datetime",children:[],level:3}],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://<app-uuid>.cloud.ditto.live/api/v1/timeseries/<timeseries_id>/events")),(0,r.kt)("h3",{id:"post"},(0,r.kt)("inlineCode",{parentName:"h3"},"POST")),(0,r.kt)("p",null,"Batch Upload Events to a specific time series. Unless required, we won't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-DITTO-ENSURE-INSERT")," header unless we have reason to believe another client could by issuing a concurrent delete request. Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"_time")," is provided as a RFC3339 formatted string in this JSON API. See ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," JSON Schema below for details of the required fields."),(0,r.kt)("p",null,"  In the event the TimeSeries ",(0,r.kt)("inlineCode",{parentName:"p"},"my-time-series")," does not exist, the time series will be created provided the client's JWT contains a write permission with a regex matching ",(0,r.kt)("inlineCode",{parentName:"p"},"my-time-series"),"."),(0,r.kt)("p",null,"  Note that the DateTime provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"_time"),' is treated "as is" and is not validated beyond parsing and basic verification.'),(0,r.kt)("p",null,"  ",(0,r.kt)("em",{parentName:"p"},"NOTE: Each entry must be on a single line, new line characters delimit individual values in json-lines.")),(0,r.kt)("p",null,"  Example Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'POST /api/v1/timeseries/my-time-series/events HTTP/1.1\nContent-Type: application/json-l\nAuthorization: Bearer ${DITTO_JWT}\nX-DITTO-CLIENT-ID: AAAAAAAAAAAAAAAAAAAABQ==\n\n{ "_time": "2021-04-20T12:34:56.123456789Z", "temp": { "value": 30, "units": "celsius" }, "humidity": { "relative": 30, "absolute": 15, "units": "g/m3" } }\n')),(0,r.kt)("p",null,"  Response"),(0,r.kt)("p",null,"  Since the posted data is not returned, we use a Status 200 to indicate the new events have been accepted and are being replicated throughout Ditto. The ",(0,r.kt)("inlineCode",{parentName:"p"},"X-DITTO-TXN-ID")," header is provided to indicate the Transaction ID associated with the insert."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{"txn_id": 10}\n')),(0,r.kt)("h4",{id:"ttl"},"TTL"),(0,r.kt)("p",null,"An event can be given a 'TTL' or 'time to live,' after which the event will expire and be deleted from the database. The event expiration can be specified in 3 ways, in order of preference:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_expiration")," field in the event body."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X-EVENT-TTL-SECONDS")," in the HTTP header."),(0,r.kt)("li",{parentName:"ul"},"A document in the ",(0,r.kt)("inlineCode",{parentName:"li"},"__timeseries")," collection with ",(0,r.kt)("inlineCode",{parentName:"li"},"_id")," equal to the timeseries name and a ",(0,r.kt)("inlineCode",{parentName:"li"},"default_ttl_seconds")," field with a numeric value.")),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"_expiration")," field will be added automatically event to the event if it takes the expiration from the HTTP header or ",(0,r.kt)("inlineCode",{parentName:"p"},"__timeseries")," collection."),(0,r.kt)("h3",{id:"get"},(0,r.kt)("inlineCode",{parentName:"h3"},"GET")),(0,r.kt)("p",null,"Query a range of events in a TimeSeries using a half-open interval ",(0,r.kt)("inlineCode",{parentName:"p"},"[start, end)"),". Returns a stream of events in chronological order.\nNote also the X-DITTO-TXN-ID value is echoed back in the Response Header"),(0,r.kt)("p",null,"  Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"start (rfc3339 string, optional) - The earliest time that will be included. Defaults to 1970-01-01T00:00:0Z (epoch start)."),(0,r.kt)("li",{parentName:"ul"},"end (rfc3339 string, optional) - The earliest time AFTER the queried interval. Defaults to current time."),(0,r.kt)("li",{parentName:"ul"},"limit (number, optional) - The maximum number of events to return. Defaults to 1000."),(0,r.kt)("li",{parentName:"ul"},"filter (string, optional) - A dittoQL string"),(0,r.kt)("li",{parentName:"ul"},"fill_template (object, optional) - A fill operator template (see ",(0,r.kt)("a",{parentName:"li",href:"#filling-missing-fields"},"Filling missing fields")," section below)"),(0,r.kt)("li",{parentName:"ul"},"timeout_millis (number, optional) - the timeout, in milliseconds"),(0,r.kt)("li",{parentName:"ul"},"describe - a boolean that when absent or false does nothing, but when ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," rather than performing the query will return a single item that contains information about the query plan that would be executed for the given query")),(0,r.kt)("p",null,"Here is an example of the ",(0,r.kt)("inlineCode",{parentName:"p"},"describe")," parameter output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X GET "localhost:8000/00000000-0000-4000-8000-000000000000/api/v1/timeseries/0/events?describe=true&filter=device==1"\n{"item": {"index_scan":{"eq":1,"path":["device"]}}}\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("em",{parentName:"p"},"Note: the ",(0,r.kt)("inlineCode",{parentName:"em"},"null")," parameters are simply to show which parameters could be provided. These keys don't actually need to be present.")),(0,r.kt)("p",null,"  Example Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /api/v1/timeseries/my-time-series/events?start=2021-04-20T00%3A00%3A00.0Z&end=&limit=50&filter= HTTP/1.1\nAccept: application/json-l\nContent-Type: application/json\nX-DITTO-TXN-ID: 7\n")),(0,r.kt)("p",null,"  Or you can provide the query in the body of the request as a JSON object. If you want to sort your results using order-by then you must provide the query in the request body. JSON Query Object parameters are as above with the addition of a new parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"order_by")," which is an array of pairs ",(0,r.kt)("inlineCode",{parentName:"p"},"[path, direction]")," where the pair has to be encoded as an array in JSON (which has no tuple variant.) ",(0,r.kt)("inlineCode",{parentName:"p"},"Path")," is ditto_ql expression. Direction must be an integer where a negative integer indicates sort Descending, and a positive value means sort Ascending."),(0,r.kt)("h4",{id:"filling-missing-fields"},"Filling missing fields"),(0,r.kt)("p",null,"  By providing a fill template it's possible to fill absent fields (including nested ones) in the query results with a default value or a value from the previous result. ",(0,r.kt)("inlineCode",{parentName:"p"},'"$PREVIOUS"')," is a special value that resolves to the value of the previous result, in the absence of one it becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("h5",{id:"example"},"Example"),(0,r.kt)("p",null,"  Raw Results:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{"c": 1}'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{"b": 0, "n": {"a": 0, "c": 1}}'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{"a": 0}'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{"a": 0, "n": null}')),(0,r.kt)("p",{parentName:"li"},"Template:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{"a":  -1, "n": {"c": "$PREVIOUS"}}')),(0,r.kt)("p",{parentName:"li"},"Results:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{"a":  -1, "c": 1, "n": {"c": null}')," << ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," filled from the template, ",(0,r.kt)("inlineCode",{parentName:"p"},"n.c")," would get the previous value, but since there isn't any it gets null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{"a":  -1, "b": 0, "n": {"a": 0, "c": 1}}')," << ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," filled from the template, ",(0,r.kt)("inlineCode",{parentName:"p"},"n.c")," gets the same value as the previous result (above)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{"a": 0, "n": {"c": 1}}')," << ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," already exists and is unchanged, ",(0,r.kt)("inlineCode",{parentName:"p"},"n.c")," gets the same value as the previous result (above)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{"a": 0, "n": null}')," << ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," already exist and are left unchanged"))),(0,r.kt)("p",null,"Example JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "start": "2021-04-20T00:00:00.0Z"\n  "end": null,\n  "limit": 500,\n  "filter": "a >= 1",\n  "timeout_millis": 500,\n  "order_by": [["a.b", -1], ["c", 1]]\n}\n')),(0,r.kt)("p",null,"  Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: application/json-l\nX-DITTO-TXN-ID: 7\n\n{"item": {"_time": "2021-04-20T12:34:56.123456789Z", "value": {"temp": {"value": 30, "units": "celsius"}, "humidity": {"relative": 30, "absolute": 15, "units": "g/m3"}}}}\n\n')),(0,r.kt)("p",null,"  If there is an error once the stream has begun, it is communicated with a final json lines value, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"error": "Timeout"}\n\n')),(0,r.kt)("h3",{id:"delete"},(0,r.kt)("inlineCode",{parentName:"h3"},"DELETE")),(0,r.kt)("p",null,"Delete a Range of Events from a TimeSeries. Accepts most of the same arguments as GET to restrict DELETE to matching events."),(0,r.kt)("p",null,"  Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"start (rfc3339 string, optional) - The earliest time that will be included. Defaults to 1970-01-01T00:00:0Z (epoch start).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"end (rfc3339 string, optional) - The earliest time AFTER the queried interval. Defaults to current time."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"DELETE /api/v1/timeseries/my-time-series/events?start=2020-01-01T00%3A00%3A00.0Z&end=2021-01-01T00%3A00%3A00.0Z HTTP/1.1\nContent-Type: application/json\nX-DITTO-CLIENT-ID: AAAAAAAAAAAAAAAAAAAABQ==\n")),(0,r.kt)("p",{parentName:"li"},"Response"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{"txn_id": 15}\n')))),(0,r.kt)("h2",{id:"distinct-values"},"Distinct Values"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://<app-uuid>.cloud.ditto.live//api/v2/timeseries/<timeseries_id>/distinct_values")),(0,r.kt)("h3",{id:"post-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"POST")),(0,r.kt)("p",null,"Query for the distinct values in a timeseries, within a range of events in a TimeSeries using a half-open interval ",(0,r.kt)("inlineCode",{parentName:"p"},"[start, end)")," (optional). Returns a single document containing the paths and their distinct values.  Paths are specified as json arrays of strings. This query expects a body of json in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "start": null,\n  "end": null,\n  "paths": [\n    "minutes",\n    "nested.device_id",\n    "nested.tags[*]",\n    "nested",\n    "nested.tags"\n  ]\n}\n')),(0,r.kt)("p",null,"  Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"start (rfc3339 string, optional) - The earliest time that will be included. Defaults to 1970-01-01T00:00:0Z (epoch start).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"end (rfc3339 string, optional) - The earliest time AFTER the queried interval. Defaults to current time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"paths (list) - A list of DittoQl paths to get distinct values for. See Supported Paths section below.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"timeout_millis (number, optional) - the timeout, in milliseconds"),(0,r.kt)("p",{parentName:"li"},"Supported paths")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Field access. Eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldA"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldA.fieldB"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Array projection. Eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldA.arrayB[*]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldA.arrayB[*].fieldC"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"No other access methods are supported."),(0,r.kt)("p",{parentName:"li"},"Response"),(0,r.kt)("p",{parentName:"li"},"The response will contain an object where the keys are the requested paths (same format as the request) and their values are the unique values at the respective paths.\nNote that only primitive values are returned distinctly. Any arrays or objects present at the specified path will appear in the result as an empty array ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," or object ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," respectively."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: application/json\nX-DITTO-TXN-ID: 7\n{\n  "item": {\n    "minutes": [1, 2, 3],\n    "nested.device_id": ["device1", "device2"],\n    "nested.tags[*]": ["tag1", "tag2"],\n    "nested": [{}],\n    "nested.tags": [[]],\n  }\n}\n\n')),(0,r.kt)("p",{parentName:"li"},"Note also the X-DITTO-TXN-ID value is included the Response Header"),(0,r.kt)("p",{parentName:"li"},"If there is an error once the stream has begun, it is communicated with a final json lines value, for example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{"error": "Timeout"}\n\n')))),(0,r.kt)("h2",{id:"json-representation-of-key-resources"},"JSON Representation of Key Resources"),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"An Event is the fundamental element of a TimeSeries. It consists of a timestamp and a document. The JSON API interface may optionally not require the series_id or time value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "https://ditto.live/event.schema.json",\n  "title": "Event",\n  "description": "An element in a TimeSeries indexed by a TimeStamp",\n  "type": "object",\n  "properties": {\n    "time": {\n      "type": "string",\n      "format": "date-time",\n      "description": "The RFC 3339 Formated timestamp when the event occurred"\n    },\n    "value": {\n      "type": "object",\n      "description": "The content of the event"\n    },\n    "timeseries_id": {\n      "type": "string",\n      "description": "The ID of the TimeSeries of which this event is a member"\n    }\n  },\n  "required": ["time", "value"]\n}\n')),(0,r.kt)("h3",{id:"datetime"},"Datetime"),(0,r.kt)("p",null,"Datetimes are used to indicate when a particular event occurred. In a binary context, timestamps are stored with the ",(0,r.kt)("a",{parentName:"p",href:"https://cr.yp.to/libtai/tai64.html#tai64n"},"TAI64N")," format, but in a JSON context RFC 3339 formatted strings are used, including the fractional seconds. If the fractional seconds are not supplied, 0 nanoseconds are assumed. If an offset (timezone) is not supplied, UTC is assumed. The term ",(0,r.kt)("inlineCode",{parentName:"p"},"Datetime")," is used to represent the RFC3339-formated String representation, while ",(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp")," is used to represent the binary encoding. The two types are generally inter-convertable. However, some client libraries may not fully preserve the full resolution of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Datetime")," during round trip serialization."),(0,r.kt)("p",null,'Queries which require an interval of time to be specified, or events where full nanosecond resolution is not required, can "truncate" the ',(0,r.kt)("inlineCode",{parentName:"p"},"Datetime"),' by rounding down to the start of the period of interest and framing the query as a comparison. For example, when one only cares about events with hourly resolution, an event which occurred at T17:36:12.12345 can be "rounded" to T17:00:00.0. The right-most non-zero digit of the Datetime or Timestamp determines the resolution of the Timeseries.'),(0,r.kt)("p",null,"The JSON Validation Schema for a ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," String is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "Datetime.schema.json",\n  "title": "Datetime",\n  "type": "string",\n  "format": "date-time",\n  "contentSchema": {\n    "type": "object",\n    "properties": {\n      "full-year": { "type": "number" },\n      "month": { "type": "number" },\n      "day": { "type": "number" },\n      "hour": { "type": "number" },\n      "minute": { "type": "number" },\n      "second": { "type": "number" },\n      "secfrac": {\n        "type": "number",\n        "description": "The decimal number of fractional seconds into the indicated second when the event occurred",\n        "default": 0\n      },\n      "offset": {\n        "type": "number",\n        "description": "The number of hours +/- UTC for the local timezone where the event occurred",\n        "default": 0\n      }\n    },\n    "required": ["year", "month", "day", "hour", "minute", "second"]\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Timestamp")," has a binary representation which is more compact (12 bytes), shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct Timestamp {\n    pub epoch: i64,\n    pub nanos: u32\n}\n")))}u.isMDXComponent=!0}}]);