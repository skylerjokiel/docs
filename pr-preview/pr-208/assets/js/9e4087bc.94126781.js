"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3608,465],{97415:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(67294),r=n(97518),l=n(39960),o=n(95999);function i(e){var t=e.year,n=e.posts;return a.createElement(a.Fragment,null,a.createElement("h3",null,t),a.createElement("ul",null,n.map((function(e){return a.createElement("li",{key:e.metadata.date},a.createElement(l.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function c(e){var t=e.years;return a.createElement("section",{className:"margin-vert--lg"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},a.createElement(i,e))})))))}function s(e){var t,n,l=e.archive,i=(0,o.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,o.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),u=(t=l.blogPosts,n=t.reduceRight((function(e,t){var n=t.metadata.date.split("-")[0],a=e.get(n)||[];return e.set(n,[t].concat(a))}),new Map),Array.from(n,(function(e){return{year:e[0],posts:e[1]}})));return a.createElement(r.Z,{title:i,description:s},a.createElement("header",{className:"hero hero--primary"},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},i),a.createElement("p",{className:"hero__subtitle"},s))),a.createElement("main",null,u.length>0&&a.createElement(c,{years:u})))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},82838:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(63366),l=n(67294),o=n(86010),i=n(39960),c=n(32822),s=n(44996),u=n(13919),m="footerLogoLink_qW4Z",d=n(89750),f=["to","href","label","prependBaseUrlToHref"];function v(e){var t=e.to,n=e.href,o=e.label,c=e.prependBaseUrlToHref,m=(0,r.Z)(e,f),d=(0,s.Z)(t),v=(0,s.Z)(n,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,a.Z)({className:"footer__link-item"},n?{href:c?v:n}:{to:d},m),n&&!(0,u.Z)(n)?l.createElement("span",null,o):o)}var b=function(e){var t=e.sources,n=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:n,sources:t})};var h=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,u=t.logo,d=void 0===u?{}:u,f={light:(0,s.Z)(d.src),dark:(0,s.Z)(d.srcDark||d.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(v,e))}))):null)}))),(d||n)&&l.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},d.href?l.createElement(i.Z,{href:d.href,className:m},l.createElement(b,{alt:d.alt,sources:f})):l.createElement(b,{alt:d.alt,sources:f})),n?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null}},12172:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(87462),r=n(67294),l=n(86010),o=n(95999),i=n(51588),c=n(40232),s=n(85350),u=n(32822),m=n(55662),d=n(31839),f=n(93783),v=n(80907),b=n(26475),h=n(55537),p=n(67804),g="toggle_2xs0",_="navbarHideable_1VR7",E="navbarHidden_1FmO",Z="navbarSidebarToggle_nWi-",N="navbarSidebarCloseSvg_fJdH",k="right";function w(){return(0,u.LU)().navbar.items}function y(){var e=(0,u.LU)().colorMode.disableSwitch,t=(0,s.Z)(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():a()}),[a,l]),disabled:e}}function I(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,d.Z)(t);var i=w(),s=y(),m=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,l=null==(t=(0,u.g8)())?void 0:t({toggleSidebar:a}),o=(0,u.D9)(l),i=(0,r.useState)((function(){return!1})),c=i[0],s=i[1];(0,r.useEffect)((function(){l&&!o&&s(!0)}),[l,o]);var m=!!l;return(0,r.useEffect)((function(){m?n||s(!0):s(!1)}),[n,m]),{shown:c,hide:(0,r.useCallback)((function(){s(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(h.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&r.createElement(c.Z,{className:Z,checked:s.isDarkTheme,onChange:s.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(p.b0D,{width:20,height:20,className:N}))),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":m.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},i.map((function(e,t){return r.createElement(b.Z,(0,a.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},i.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:m.hide},r.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),m.content)))}var C=function(){var e,t=(0,u.LU)().navbar,n=t.hideOnScroll,o=t.style,s=function(){var e=(0,f.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],l=n[1];(0,u.Rb)((function(){a&&l(!1)}));var o=(0,r.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:o,shown:a}}(),d=y(),Z=(0,v.gA)(),N=(0,m.Z)(n),C=N.navbarRef,D=N.isNavbarVisible,B=w(),S=B.some((function(e){return"search"===e.type})),L=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:k)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:k)}))}}(B),T=L.leftItems,A=L.rightItems;return r.createElement("nav",{ref:C,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":s.shown},e[_]=n,e[E]=n&&!D,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==B?void 0:B.length)>0||Z)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:s.toggle,onKeyDown:s.toggle},r.createElement(p.Oqj,{width:25,height:25})),r.createElement(h.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),T.map((function(e,t){return r.createElement(b.Z,(0,a.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},A.map((function(e,t){return r.createElement(b.Z,(0,a.Z)({},e,{key:t}))})),!d.disabled&&r.createElement(c.Z,{className:g,checked:d.isDarkTheme,onChange:d.toggle}),!S&&r.createElement(i.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:s.toggle}),s.shouldRender&&r.createElement(I,{sidebarShown:s.shown,toggleSidebar:s.toggle}))}},44517:function(e,t,n){n.d(t,{O:function(){return b}});var a=n(87462),r=n(63366),l=n(67294),o=n(86010),i=n(39960),c=n(44996),s=n(13919),u=n(26475),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function b(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,u=e.to,d=e.href,f=e.label,v=e.activeClassName,b=void 0===v?"":v,h=e.prependBaseUrlToHref,p=(0,r.Z)(e,m),g=(0,c.Z)(u),_=(0,c.Z)(n),E=(0,c.Z)(d,{forcePrependBaseUrl:!0}),Z=f&&d&&!(0,s.Z)(d);return l.createElement(i.Z,(0,a.Z)({className:"inline"},d?{href:h?E:d}:Object.assign({isNavLink:!0,activeClassName:null!=(t=p.className)&&t.includes(b)?"":b,to:g},n||o?{isActive:function(e,t){return o?new RegExp(o).test(t.pathname):t.pathname.startsWith(_)}}:null),p),Z?l.createElement("span",{className:"inline"},f):f)}function h(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,r.Z)(e,d),s=l.createElement(b,(0,a.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?l.createElement("li",null,s):s}function p(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,f));return l.createElement("li",{className:"menu__list-item"},l.createElement(b,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,o=void 0!==n&&n,i=(e.position,(0,r.Z)(e,v)),c=o?p:h;return l.createElement(c,(0,a.Z)({},i,{activeClassName:null!=(t=i.activeClassName)?t:(0,u.E)(o)}))}},79061:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(87462),r=n(63366),l=n(67294),o=n(44517),i=n(80907),c=n(86010),s=n(26475),u=n(32822),m=n(18780),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,b=(0,r.Z)(e,d),h=(0,i.Iw)(v),p=h.activeVersion,g=h.activeDoc,_=(0,u.J)(v).preferredVersion,E=(0,i.yW)(v),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([p,_,E].filter(Boolean)),n),N=(0,s.E)(b.mobile);return l.createElement(o.Z,(0,a.Z)({exact:!0},b,{className:(0,c.Z)(b.className,(t={},t[N]=(null==g?void 0:g.sidebar)&&g.sidebar===Z.sidebar,t)),activeClassName:N,label:null!=f?f:Z.id,to:Z.path}))}},43886:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(87462),r=n(63366),l=n(67294),o=n(44517),i=n(29553),c=n(80907),s=n(32822),u=n(95999),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,b=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,p=e.dropdownItemsAfter,g=(0,r.Z)(e,m),_=(0,c.Iw)(v),E=(0,c.gB)(v),Z=(0,c.yW)(v),N=(0,s.J)(v),k=N.preferredVersion,w=N.savePreferredVersionName;var y,I=(y=E.map((function(e){var t=(null==_?void 0:_.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==_?void 0:_.activeVersion)},onClick:function(){w(e.name)}}})),[].concat(h,y,p)),C=null!=(t=null!=(n=_.activeVersion)?n:k)?t:Z,D=f&&I?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):C.label,B=f&&I?void 0:d(C).path;return I.length<=1?l.createElement(o.Z,(0,a.Z)({},g,{mobile:f,label:D,to:B,isActive:b?function(){return!1}:void 0})):l.createElement(i.Z,(0,a.Z)({},g,{mobile:f,label:D,to:B,items:I,isActive:b?function(){return!1}:void 0}))}},85412:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),r=n(63366),l=n(67294),o=n(44517),i=n(80907),c=n(32822),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),f=(0,i.zu)(m),v=(0,c.J)(m).preferredVersion,b=(0,i.yW)(m),h=null!=(t=null!=f?f:v)?t:b,p=null!=n?n:h.label,g=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return l.createElement(o.Z,(0,a.Z)({},d,{label:p,to:g}))}},29553:function(e,t,n){var a=n(87462),r=n(63366),l=n(67294),o=n(86010),i=n(32822),c=n(44517),s=n(26475),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,i.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,i=e.position,m=e.className,d=(0,r.Z)(e,u),f=(0,l.useRef)(null),v=(0,l.useRef)(null),b=(0,l.useState)(!1),h=b[0],p=b[1];return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&p(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":h})},l.createElement(c.O,(0,a.Z)({className:(0,o.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),p(!h))}}),null!=(t=d.children)?t:d.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),p(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function b(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),v=(0,i.be)(),b=f(n,v),h=(0,i.uR)({initialState:function(){return!b}}),p=h.collapsed,g=h.toggleCollapsed,_=h.setCollapsed;return(0,l.useEffect)((function(){b&&_(!b)}),[v,b]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":p})},l.createElement(c.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),g()}}),null!=(t=d.children)?t:d.label),l.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:p},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),o=n?b:v;return l.createElement(o,a)}},26475:function(e,t,n){n.d(t,{Z:function(){return _},E:function(){return g}});var a=n(63366),r=n(67294),l=n(44517),o=n(29553),i=n(87462),c=n(23264),s=n(52263),u=n(32822),m="iconLanguage_17ys",d=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,f=(0,a.Z)(e,d),v=(0,s.Z)().i18n,b=v.currentLocale,h=v.locales,p=v.localeConfigs,g=(0,u.l5)();function _(e){return p[e].label}var E=h.map((function(e){var t="pathname://"+g.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:_(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===b?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,E,l),N=t?"Languages":_(b);return r.createElement(o.Z,(0,i.Z)({},f,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(c.Z,{className:m}),r.createElement("span",null,N)),items:Z}))}var v=n(51588);function b(e){return e.mobile?null:r.createElement(v.Z,null)}var h=["type"],p={default:function(){return l.Z},localeDropdown:function(){return f},search:function(){return b},dropdown:function(){return o.Z},docsVersion:function(){return n(85412).Z},docsVersionDropdown:function(){return n(43886).Z},doc:function(){return n(79061).Z}};var g=function(e){return e?"menu__link--active":"navbar__link--active"};function _(e){var t=e.type,n=(0,a.Z)(e,h),l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),o=function(e){var t=p[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(l);return r.createElement(o,n)}}}]);