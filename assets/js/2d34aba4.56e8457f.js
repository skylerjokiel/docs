(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6069],{36593:(e,t,n)=>{"use strict";n.r(t),n.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(87462),a=(n(67294),n(3905));n(8209);const r={title:"Conflict-Free Replicated Data Types (CRDTs)",sidebar_position:1},i="Ditto Delta State CRDT",o={unversionedId:"how-it-works/crdt",id:"how-it-works/crdt",isDocsHomePage:!1,title:"Conflict-Free Replicated Data Types (CRDTs)",description:"Ditto's data types are based on CRDTs. CRDTs stand for Conflict Free Replicated Data Types.",source:"@site/docs/common/how-it-works/crdt.md",sourceDirName:"how-it-works",slug:"/how-it-works/crdt",permalink:"/common/how-it-works/crdt",editUrl:"https://github.com/getditto/docs/edit/main/docs/common/how-it-works/crdt.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Conflict-Free Replicated Data Types (CRDTs)",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Shared Key",permalink:"/common/security/shared-key"},next:{title:"Mesh Network",permalink:"/common/how-it-works/mesh-network"}},l=[{value:"Types",id:"types",children:[],level:2},{value:"Documents",id:"documents",children:[],level:2},{value:"Version Vector",id:"version-vector",children:[],level:2},{value:"Hybrid Logical Clock",id:"hybrid-logical-clock",children:[],level:2},{value:"Causal Consistency",id:"causal-consistency",children:[],level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ditto-delta-state-crdt"},"Ditto Delta State CRDT"),(0,a.kt)("p",null,"Ditto's data types are based on CRDTs. CRDTs stand for Conflict Free Replicated Data Types.\nCRDTs can be updated concurrently by multiple users in a distributed system, without locking or\nconsensus. Each user edits their own version of the data, and when the versions\nare replicated the concurrently edited versions merge together to form a single\nversion."),(0,a.kt)("p",null,'This merged version\'s value is deterministic, which means regardless of the\norder that the versions are merged the result is the same. As well as\ndeterministic we strive to make it unsurprising, and meaningful, in that the\nresult reflects the input, and some rational interpretation of the input. For\nexample, if two users set a register to the values "Coca-Cola" and "Pepsi" we\ndon\'t deterministically resolve all conflicting registers to the value "Sprite",\nbut instead pick whichever value of "Coca-Cola" or "Pepsi" was written at the\nlatest time.'),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Merge Semantics"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../datamodel/register"},"Register")),(0,a.kt)("td",{parentName:"tr",align:null},"A single primitive value (Number, String, Boolean, Binary File)"),(0,a.kt)("td",{parentName:"tr",align:null},"Last (temporal) Write Wins")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../datamodel/counter"},"Counter")),(0,a.kt)("td",{parentName:"tr",align:null},"A special number capable of preserving incrementing and decrementing semantics"),(0,a.kt)("td",{parentName:"tr",align:null},"The sum of all site's counters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../datamodel/map"},"Map")),(0,a.kt)("td",{parentName:"tr",align:null},"A dictionary of name->value mappings where name is a string and value is any of the other types"),(0,a.kt)("td",{parentName:"tr",align:null},"Remove wins, updates merge")))),(0,a.kt)("h2",{id:"documents"},"Documents"),(0,a.kt)("p",null,"The Ditto document is a JSON like document made from a CRDT Map that represents\nthe JSON Object. The JSON properties are map keys, and the values are any of the\ntypes listed above. One way to think about the types that make up a Ditto\ndocument is like a tree, where there are collections (Array and Map) and leaf\nvalues that are registers or counters."),(0,a.kt)("h2",{id:"version-vector"},"Version Vector"),(0,a.kt)("p",null,"The foundation of determining how data should be merged is using a Ditto document's ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Version_vector"},"version vector"),". The replication system uses the version vector to capture local and observed edits from other peers. "),(0,a.kt)("p",null,"Every time a change is made to a document, the version of that document is incremented by one.  When a peer incorporates changes from other peers, the local peer can use the incoming remote peer's version vectors to determine whether the changes are new or old. In other words, a peer can distinguish from other peer's incoming version vectors if the incoming data has \"happened before\" or not."),(0,a.kt)("p",null,"Say we have DocumentId: ",(0,a.kt)("inlineCode",{parentName:"p"},'"123abc"')," on Peer A. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'DocumentId: "123abc"\nVersion Vector: {\n  "A": 5,\n  "B": 1,\n  "C": 4\n}\n')),(0,a.kt)("p",null,"The version vector above represents that Peer ",(0,a.kt)("inlineCode",{parentName:"p"},'"A"')," has incorporated change from other peers ",(0,a.kt)("inlineCode",{parentName:"p"},'"B"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"C"')," at times ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," respectively."),(0,a.kt)("p",null,"If an incoming change arrives at Peer ",(0,a.kt)("inlineCode",{parentName:"p"},'"A"')," with ",(0,a.kt)("inlineCode",{parentName:"p"},'"B": 4'),", then Document will merge the incoming data. This is because Peer ",(0,a.kt)("inlineCode",{parentName:"p"},'"A"')," determined that the document's current state has yet not seen the new change. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'DocumentId: "123abc"\nVersion Vector: {\n  "A": 5,\n  "B": 1, // \ud83d\udc48 merge in {"B": 4} because 4 > 1\n  "C": 4\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Disclaimer: Ditto uses a ",(0,a.kt)("inlineCode",{parentName:"em"},"UInt128")," to represent the ",(0,a.kt)("inlineCode",{parentName:"em"},"Site_ID")," and ",(0,a.kt)("inlineCode",{parentName:"em"},"64bit timestamp")," for the ",(0,a.kt)("inlineCode",{parentName:"em"},"HLC"),". But for educational purposes,\nthis documentation will often use strings and numbers for readability. Please continue to the Hybrid Logical Clock portion below to learn more.")),(0,a.kt)("h2",{id:"hybrid-logical-clock"},"Hybrid Logical Clock"),(0,a.kt)("p",null,"Each document in each peer contains a hidden metadata map of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Site_ID")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"HLC"),". The HLC stands for a\nhybrid logical clock. This ",(0,a.kt)("inlineCode",{parentName:"p"},"HLC"),' is used to determine whether a change has "happened before".  '),(0,a.kt)("p",null,"It might be tempting to use physical clocks to resolve conflicts when attempting to merge concurrent data changes. However, it's essential to know that even quartz-crystal-based physical clocks can skew forwards or backward in time. Almost every device regularly attempts to synchronize with an NTP-synchronized clock server. But even then, the round trip time from the request to the server's response adds additional variability. In addition, there are limitations to nature and physics that will never allow two measurements of physical time to align precisely. Thus, these conditions led us to determine that physical clocks were not reliable in a distributed mesh network."),(0,a.kt)("p",null,"Although we decided that we could not build a system that resolved conflicts based purely on physical time, we needed to preserve the notion of physical time as not to confuse users of collaborative applications. However, each peer still needs a deterministic way to resolve conflicts. In other words, each peer when sharing CRDT deltas needs to always resolve conflicts exactly the same way. This requirement still needs ",(0,a.kt)("em",{parentName:"p"},"logical")," ordering. This requirement led us to implement the version vector with a Hybrid Logical Clock (often referred to as HLC)."),(0,a.kt)("p",null,"In Ditto's distributed system, the HLC is a 64-bit timestamp comprised of 48 bits of a physical timestamp and 16 bits of a monotonically increasing logical clock. "),(0,a.kt)("h2",{id:"causal-consistency"},"Causal Consistency"),(0,a.kt)("p",null,"Causal Consistency is guaranteed by Ditto. It is causally consistent across any number of related\nchanges, across many documents and different collections, as long as they are\nwithin the same Ditto AppID. "),(0,a.kt)("p",null,"To give an intuition about causal consistency,\nimagine the following scenario:"),(0,a.kt)("p",null,"On a social network Bob posts a message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Bob: "I lost my cat"\n')),(0,a.kt)("p",null,"Then after some time, he posts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Bob: "I found him! What a relief!"\n')),(0,a.kt)("p",null,"To which Sue replies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Sue: "Great news!"\n')),(0,a.kt)("p",null,"In contrast, an ",(0,a.kt)("strong",{parentName:"p"},"eventually consistent")," database shows messages in any order:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Bob: "I lost my cat"\nSue: "Great news!"\nBob: ...etc\n')),(0,a.kt)("p",null,"Ditto's Causal Consistency ensures that if a new message is written after seeing some\nprior message, then the new message is not visible unless that prior message is\nalso visible."),(0,a.kt)("p",null,"To help differentiate Causal Consistency from stronger consistency models, imagine that Alice replies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Alice: "Wonderful!"\n')),(0,a.kt)("p",null,'Causal Consistency allows that the two concurrent messages "Great news!" from\nSue and "Wonderful!" from Alice appear in any order. Both of the following results are valid with Causal Consistency:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Bob: "I lost my cat"\nBob: "I found him! What a relief!"\nSue: "Great news!"\nAlice: "Wonderful!"\n')),(0,a.kt)("p",null,"And:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Bob: "I lost my cat"\nBob: "I found him! What a relief!"\nAlice: "Wonderful!"\nSue: "Great news!"\n')))}m.isMDXComponent=!0},46700:(e,t,n)=>{var s={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=46700}}]);