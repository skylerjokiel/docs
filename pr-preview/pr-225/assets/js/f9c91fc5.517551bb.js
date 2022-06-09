"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[465],{82838:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(87462),r=t(63366),l=t(67294),o=t(86010),i=t(39960),s=t(32822),c=t(44996),u=t(13919),m="footerLogoLink_qW4Z",d=t(89750),f=["to","href","label","prependBaseUrlToHref"];function v(e){var n=e.to,t=e.href,o=e.label,s=e.prependBaseUrlToHref,m=(0,r.Z)(e,f),d=(0,c.Z)(n),v=(0,c.Z)(t,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,a.Z)({className:"footer__link-item"},t?{href:s?v:t}:{to:d},m),t&&!(0,u.Z)(t)?l.createElement("span",null,o):o)}var b=function(e){var n=e.sources,t=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:t,sources:n})};var p=function(){var e=(0,s.LU)().footer,n=e||{},t=n.copyright,a=n.links,r=void 0===a?[]:a,u=n.logo,d=void 0===u?{}:u,f={light:(0,c.Z)(d.src),dark:(0,c.Z)(d.srcDark||d.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links"},r.map((function(e,n){return l.createElement("div",{key:n,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,n){return e.html?l.createElement("li",{key:n,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(v,e))}))):null)}))),(d||t)&&l.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},d.href?l.createElement(i.Z,{href:d.href,className:m},l.createElement(b,{alt:d.alt,sources:f})):l.createElement(b,{alt:d.alt,sources:f})),t?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},12172:function(e,n,t){t.d(n,{Z:function(){return C}});var a=t(87462),r=t(67294),l=t(86010),o=t(95999),i=t(51588),s=t(40232),c=t(85350),u=t(32822),m=t(55662),d=t(31839),f=t(93783),v=t(80907),b=t(26475),p=t(55537),_=t(67804),h="toggle_2xs0",g="navbarHideable_1VR7",Z="navbarHidden_1FmO",E="navbarSidebarToggle_nWi-",N="navbarSidebarCloseSvg_fJdH",k="right";function w(){return(0,u.LU)().navbar.items}function y(){var e=(0,u.LU)().colorMode.disableSwitch,n=(0,c.Z)(),t=n.isDarkTheme,a=n.setLightTheme,l=n.setDarkTheme;return{isDarkTheme:t,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():a()}),[a,l]),disabled:e}}function I(e){var n=e.sidebarShown,t=e.toggleSidebar;(0,d.Z)(n);var i=w(),c=y(),m=function(e){var n,t=e.sidebarShown,a=e.toggleSidebar,l=null==(n=(0,u.g8)())?void 0:n({toggleSidebar:a}),o=(0,u.D9)(l),i=(0,r.useState)((function(){return!1})),s=i[0],c=i[1];(0,r.useEffect)((function(){l&&!o&&c(!0)}),[l,o]);var m=!!l;return(0,r.useEffect)((function(){m?t||c(!0):c(!1)}),[t,m]),{shown:s,hide:(0,r.useCallback)((function(){c(!1)}),[]),content:l}}({sidebarShown:n,toggleSidebar:t});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&r.createElement(s.Z,{className:E,checked:c.isDarkTheme,onChange:c.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:t},r.createElement(_.b0D,{width:20,height:20,className:N}))),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":m.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},i.map((function(e,n){return r.createElement(b.Z,(0,a.Z)({mobile:!0},e,{onClick:t,key:n}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},i.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:m.hide},r.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),m.content)))}var C=function(){var e,n=(0,u.LU)().navbar,t=n.hideOnScroll,o=n.style,c=function(){var e=(0,f.Z)(),n="mobile"===e,t=(0,r.useState)(!1),a=t[0],l=t[1];(0,u.Rb)((function(){a&&l(!1)}));var o=(0,r.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:n,toggle:o,shown:a}}(),d=y(),E=(0,v.gA)(),N=(0,m.Z)(t),C=N.navbarRef,D=N.isNavbarVisible,B=w(),S=B.some((function(e){return"search"===e.type})),L=function(e){return{leftItems:e.filter((function(e){var n;return"left"===(null!=(n=e.position)?n:k)})),rightItems:e.filter((function(e){var n;return"right"===(null!=(n=e.position)?n:k)}))}}(B),T=L.leftItems,A=L.rightItems;return r.createElement("nav",{ref:C,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":c.shown},e[g]=t,e[Z]=t&&!D,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==B?void 0:B.length)>0||E)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:c.toggle,onKeyDown:c.toggle},r.createElement(_.Oqj,{width:25,height:25})),r.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),T.map((function(e,n){return r.createElement(b.Z,(0,a.Z)({},e,{key:n}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},A.map((function(e,n){return r.createElement(b.Z,(0,a.Z)({},e,{key:n}))})),!d.disabled&&r.createElement(s.Z,{className:h,checked:d.isDarkTheme,onChange:d.toggle}),!S&&r.createElement(i.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:c.toggle}),c.shouldRender&&r.createElement(I,{sidebarShown:c.shown,toggleSidebar:c.toggle}))}},44517:function(e,n,t){t.d(n,{O:function(){return b}});var a=t(87462),r=t(63366),l=t(67294),o=t(86010),i=t(39960),s=t(44996),c=t(13919),u=t(26475),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function b(e){var n,t=e.activeBasePath,o=e.activeBaseRegex,u=e.to,d=e.href,f=e.label,v=e.activeClassName,b=void 0===v?"":v,p=e.prependBaseUrlToHref,_=(0,r.Z)(e,m),h=(0,s.Z)(u),g=(0,s.Z)(t),Z=(0,s.Z)(d,{forcePrependBaseUrl:!0}),E=f&&d&&!(0,c.Z)(d);return l.createElement(i.Z,(0,a.Z)({className:"inline"},d?{href:p?Z:d}:Object.assign({isNavLink:!0,activeClassName:null!=(n=_.className)&&n.includes(b)?"":b,to:h},t||o?{isActive:function(e,n){return o?new RegExp(o).test(n.pathname):n.pathname.startsWith(g)}}:null),_),E?l.createElement("span",{className:"inline"},f):f)}function p(e){var n=e.className,t=e.isDropdownItem,i=void 0!==t&&t,s=(0,r.Z)(e,d),c=l.createElement(b,(0,a.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",n)},s));return i?l.createElement("li",null,c):c}function _(e){var n=e.className,t=(e.isDropdownItem,(0,r.Z)(e,f));return l.createElement("li",{className:"menu__list-item"},l.createElement(b,(0,a.Z)({className:(0,o.Z)("menu__link",n)},t)))}n.Z=function(e){var n,t=e.mobile,o=void 0!==t&&t,i=(e.position,(0,r.Z)(e,v)),s=o?_:p;return l.createElement(s,(0,a.Z)({},i,{activeClassName:null!=(n=i.activeClassName)?n:(0,u.E)(o)}))}},79061:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(87462),r=t(63366),l=t(67294),o=t(44517),i=t(80907),s=t(86010),c=t(26475),u=t(32822),m=t(18780),d=["docId","label","docsPluginId"];function f(e){var n,t=e.docId,f=e.label,v=e.docsPluginId,b=(0,r.Z)(e,d),p=(0,i.Iw)(v),_=p.activeVersion,h=p.activeDoc,g=(0,u.J)(v).preferredVersion,Z=(0,i.yW)(v),E=function(e,n){var t=e.flatMap((function(e){return e.docs})),a=t.find((function(e){return e.id===n}));if(!a){var r=t.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+n+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([_,g,Z].filter(Boolean)),t),N=(0,c.E)(b.mobile);return l.createElement(o.Z,(0,a.Z)({exact:!0},b,{className:(0,s.Z)(b.className,(n={},n[N]=(null==h?void 0:h.sidebar)&&h.sidebar===E.sidebar,n)),activeClassName:N,label:null!=f?f:E.id,to:E.path}))}},43886:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(87462),r=t(63366),l=t(67294),o=t(44517),i=t(29553),s=t(80907),c=t(32822),u=t(95999),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(n){return n.id===e.mainDocId}))};function f(e){var n,t,f=e.mobile,v=e.docsPluginId,b=e.dropdownActiveClassDisabled,p=e.dropdownItemsBefore,_=e.dropdownItemsAfter,h=(0,r.Z)(e,m),g=(0,s.Iw)(v),Z=(0,s.gB)(v),E=(0,s.yW)(v),N=(0,c.J)(v),k=N.preferredVersion,w=N.savePreferredVersionName;var y,I=(y=Z.map((function(e){var n=(null==g?void 0:g.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:n.path,isActive:function(){return e===(null==g?void 0:g.activeVersion)},onClick:function(){w(e.name)}}})),[].concat(p,y,_)),C=null!=(n=null!=(t=g.activeVersion)?t:k)?n:E,D=f&&I?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):C.label,B=f&&I?void 0:d(C).path;return I.length<=1?l.createElement(o.Z,(0,a.Z)({},h,{mobile:f,label:D,to:B,isActive:b?function(){return!1}:void 0})):l.createElement(i.Z,(0,a.Z)({},h,{mobile:f,label:D,to:B,items:I,isActive:b?function(){return!1}:void 0}))}},85412:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(87462),r=t(63366),l=t(67294),o=t(44517),i=t(80907),s=t(32822),c=["label","to","docsPluginId"];function u(e){var n,t=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,c),f=(0,i.zu)(m),v=(0,s.J)(m).preferredVersion,b=(0,i.yW)(m),p=null!=(n=null!=f?f:v)?n:b,_=null!=t?t:p.label,h=null!=u?u:function(e){return e.docs.find((function(n){return n.id===e.mainDocId}))}(p).path;return l.createElement(o.Z,(0,a.Z)({},d,{label:_,to:h}))}},29553:function(e,n,t){var a=t(87462),r=t(63366),l=t(67294),o=t(86010),i=t(32822),s=t(44517),c=t(26475),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,n){return e.some((function(e){return function(e,n){return!!(0,i.Mg)(e.to,n)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(n))||!(!e.activeBasePath||!n.startsWith(e.activeBasePath))}(e,n)}))}function v(e){var n,t=e.items,i=e.position,m=e.className,d=(0,r.Z)(e,u),f=(0,l.useRef)(null),v=(0,l.useRef)(null),b=(0,l.useState)(!1),p=b[0],_=b[1];return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&_(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":p})},l.createElement(s.O,(0,a.Z)({className:(0,o.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),_(!p))}}),null!=(n=d.children)?n:d.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},t.map((function(e,n){return l.createElement(c.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),_(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:n}))}))))}function b(e){var n,t=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),v=(0,i.be)(),b=f(t,v),p=(0,i.uR)({initialState:function(){return!b}}),_=p.collapsed,h=p.toggleCollapsed,g=p.setCollapsed;return(0,l.useEffect)((function(){b&&g(!b)}),[v,b]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":_})},l.createElement(s.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),h()}}),null!=(n=d.children)?n:d.label),l.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},t.map((function(e,n){return l.createElement(c.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:n}))}))))}n.Z=function(e){var n=e.mobile,t=void 0!==n&&n,a=(0,r.Z)(e,d),o=t?b:v;return l.createElement(o,a)}},26475:function(e,n,t){t.d(n,{Z:function(){return g},E:function(){return h}});var a=t(63366),r=t(67294),l=t(44517),o=t(29553),i=t(87462),s=t(23264),c=t(52263),u=t(32822),m="iconLanguage_17ys",d=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var n=e.mobile,t=e.dropdownItemsBefore,l=e.dropdownItemsAfter,f=(0,a.Z)(e,d),v=(0,c.Z)().i18n,b=v.currentLocale,p=v.locales,_=v.localeConfigs,h=(0,u.l5)();function g(e){return _[e].label}var Z=p.map((function(e){var n="pathname://"+h.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:g(e),to:n,target:"_self",autoAddBaseUrl:!1,className:e===b?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),E=[].concat(t,Z,l),N=n?"Languages":g(b);return r.createElement(o.Z,(0,i.Z)({},f,{href:"#",mobile:n,label:r.createElement("span",null,r.createElement(s.Z,{className:m}),r.createElement("span",null,N)),items:E}))}var v=t(51588);function b(e){return e.mobile?null:r.createElement(v.Z,null)}var p=["type"],_={default:function(){return l.Z},localeDropdown:function(){return f},search:function(){return b},dropdown:function(){return o.Z},docsVersion:function(){return t(85412).Z},docsVersionDropdown:function(){return t(43886).Z},doc:function(){return t(79061).Z}};var h=function(e){return e?"menu__link--active":"navbar__link--active"};function g(e){var n=e.type,t=(0,a.Z)(e,p),l=function(e,n){return e&&"default"!==e?e:n?"dropdown":"default"}(n,void 0!==t.items),o=function(e){var n=_[e];if(!n)throw new Error('No NavbarItem component found for type "'+e+'".');return n()}(l);return r.createElement(o,t)}}}]);