"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[370],{95999:function(e,n,t){t.d(n,{Z:function(){return l},I:function(){return s}});var r=t(67294),o=/{\w+}/g,u="{}";function i(e,n){var t=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==n?void 0:n[o];if(void 0!==i){var a=r.isValidElement(i)?i:String(i);return t.push(a),u}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(u).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):i.split(u).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}var a=t(57529);function c(e){var n,t,r=e.id,o=e.message;if(void 0===r&&void 0===o)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(t=null!==(n=a[null!=r?r:o])&&void 0!==n?n:o)&&void 0!==t?t:r}function s(e,n){return i(c({message:e.message,id:e.id}),n)}function l(e){var n=e.children,t=e.id,r=e.values;if(n&&"string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");return i(c({message:n,id:t}),r)}},29935:function(e,n,t){t.d(n,{m:function(){return r}});var r="default"},28143:function(e,n,t){t.r(n),t.d(n,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=t(73727)},28084:function(e,n,t){t.r(n),t.d(n,{default:function(){return u},useAllPluginInstancesData:function(){return i},usePluginData:function(){return a}});var r=t(52263),o=t(29935);function u(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var n=u()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function a(e,n){void 0===n&&(n=o.m);var t=i(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},48408:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(28143);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!(0,r.matchPath)(n,{path:t.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return u};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=(0,n.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,u,i=(0,n.getActiveVersion)(e,t),a=null==i?void 0:i.docs.find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(u[e.name]=n)}))})),u):{}}};n.getDocVersionSuggestions=function(e,t){var r=(0,n.getLatestVersion)(e),o=(0,n.getActiveDocContext)(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},96730:function(e,n,t){n.Jo=n.Iw=n.zu=n.yW=n.gB=n.gA=n.zh=n._r=void 0;var r=t(70655),o=t(28143),u=(0,r.__importStar)(t(28084)),i=t(48408),a={};n._r=function(){var e;return null!==(e=(0,u.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};n.zh=function(e){return(0,u.usePluginData)("docusaurus-plugin-content-docs",e)};n.gA=function(e){void 0===e&&(e={});var t=(0,n._r)(),r=(0,o.useLocation)().pathname;return(0,i.getActivePlugin)(t,r,e)};n.gB=function(e){return(0,n.zh)(e).versions};n.yW=function(e){var t=(0,n.zh)(e);return(0,i.getLatestVersion)(t)};n.zu=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveVersion)(t,r)};n.Iw=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getActiveDocContext)(t,r)};n.Jo=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,i.getDocVersionSuggestions)(t,r)}},80907:function(e,n,t){t.d(n,{Iw:function(){return r.Iw},gA:function(){return r.gA},zu:function(){return r.zu},_r:function(){return r._r},Jo:function(){return r.Jo},zh:function(){return r.zh},yW:function(){return r.yW},gB:function(){return r.gB}});var r=t(96730)},60370:function(e,n,t){t.d(n,{pl:function(){return pe},zF:function(){return B},HX:function(){return m},PO:function(){return Y},L5:function(){return ie},Cv:function(){return ee},Cn:function(){return K},OC:function(){return xe},kM:function(){return le},WA:function(){return s},os:function(){return p},Mg:function(){return w},_f:function(){return l},bc:function(){return g},l5:function(){return d},nT:function(){return he},uR:function(){return O},J:function(){return se},Rb:function(){return we},be:function(){return be},SL:function(){return x},g8:function(){return $},D9:function(){return D},RF:function(){return ke},DA:function(){return Se},Si:function(){return Pe},LU:function(){return o},pe:function(){return y}});var r=t(52263);function o(){return(0,r.Z)().siteConfig.themeConfig}var u="localStorage";function i(e){if(void 0===e&&(e=u),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),a=!0),null}var n}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=i(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function l(e){void 0===e&&(e=u);var n=i(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(76775);function d(){var e=(0,r.Z)(),n=e.siteConfig,t=n.baseUrl,o=n.url,u=e.i18n,i=u.defaultLocale,a=u.currentLocale,c=(0,f.TH)().pathname,s=a===i?t:t.replace("/"+a+"/","/"),l=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+s:""+s+e+"/"}(n)+l}}}var v=/title=(["'])(.*?)\1/;function g(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var m="default";function p(e,n){return"docs-"+e+"-"+n}var h=t(80907),b=!!h._r,w=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},y=function(e){var n=(0,r.Z)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},E=t(67294),L=["zero","one","two","few","many","other"];function P(e){return L.filter((function(n){return e.includes(n)}))}P(["one","other"]);var C="undefined"!=typeof window?E.useLayoutEffect:E.useEffect;function S(e){var n=(0,E.useRef)(e);return C((function(){n.current=e}),[e]),(0,E.useCallback)((function(){return n.current.apply(n,arguments)}),[])}function D(e){var n=(0,E.useRef)();return C((function(){n.current=e})),n.current}function x(e){var n=(0,f.TH)(),t=D(n),r=S(e);(0,E.useEffect)((function(){r({location:n,previousLocation:t})}),[r,n,t])}var A=t(80102),R=t(10412),k=["collapsed"],V=["lazy"];function O(e){var n=e.initialState,t=(0,E.useState)(null!=n&&n),r=t[0],o=t[1],u=(0,E.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:u}}var M={display:"none",overflow:"hidden",height:"0px"},H={display:"block",overflow:"visible",height:"auto"};function T(e,n){var t=n?M:H;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function z(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,E.useRef)(!1);(0,E.useEffect)((function(){var e,u=n.current;function i(){var e,n,t=u.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t);return{transition:"height "+o+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function a(){var e=i();u.style.transition=e.transition,u.style.height=e.height}if(!o.current)return T(u,t),void(o.current=!0);return u.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){u.style.height=M.height,u.style.overflow=M.overflow}))):(u.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function I(e){if(!R.default.canUseDOM)return e?M:H}function N(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,u=e.animation,i=e.onCollapseTransitionEnd,a=e.className,c=e.disableSSRStyle,s=(0,E.useRef)(null);return z({collapsibleRef:s,collapsed:r,animation:u}),E.createElement(t,{ref:s,style:c?void 0:I(r),onTransitionEnd:function(e){"height"===e.propertyName&&(T(s.current,r),null==i||i(r))},className:a},o)}function j(e){var n=e.collapsed,t=(0,A.Z)(e,k),r=(0,E.useState)(!n),o=r[0],u=r[1];(0,E.useLayoutEffect)((function(){n||u(!0)}),[n]);var i=(0,E.useState)(n),a=i[0],c=i[1];return(0,E.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?E.createElement(N,Object.assign({},t,{collapsed:a})):null}function B(e){var n=e.lazy,t=(0,A.Z)(e,V),r=n?j:N;return E.createElement(r,Object.assign({},t))}var _=t(72389),Z=t(86010),F="details_2Ziz",U="isBrowser_2j9b",W="collapsibleContent_3OHp",q=["summary","children"];function J(e){return!!e&&("SUMMARY"===e.tagName||J(e.parentElement))}function X(e,n){return!!e&&(e===n||X(e.parentElement,n))}var Y=function(e){var n,t=e.summary,r=e.children,o=(0,A.Z)(e,q),u=(0,_.Z)(),i=(0,E.useRef)(null),a=O({initialState:!o.open}),c=a.collapsed,s=a.setCollapsed,l=(0,E.useState)(o.open),f=l[0],d=l[1];return E.createElement("details",Object.assign({},o,{ref:i,open:f,"data-collapsed":c,className:(0,Z.Z)(F,(n={},n[U]=u,n),o.className),onMouseDown:function(e){J(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;J(n)&&X(n,i.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),t,E.createElement(B,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),d(!e)}},E.createElement("div",{className:W},r)))};var G=(0,E.createContext)(null);function K(e){var n=e.children;return E.createElement(G.Provider,{value:(0,E.useState)(null)},n)}function Q(){var e=(0,E.useContext)(G);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function $(){var e=Q()[0];if(e){var n=e.component;return function(t){return E.createElement(n,Object.assign({},e.props,t))}}return function(){}}function ee(e){var n,t=e.component,r=e.props,o=Q()[1],u=(n=r,(0,E.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,E.useEffect)((function(){o({component:t,props:u})}),[o,t,u]),(0,E.useEffect)((function(){return function(){return o(null)}}),[o]),null}var ne=function(e){return"docs-preferred-version-"+e},te={save:function(e,n,t){s(ne(e),{persistence:n}).set(t)},read:function(e,n){return s(ne(e),{persistence:n}).get()},clear:function(e,n){s(ne(e),{persistence:n}).del()}};function re(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=te.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(te.clear(e,t),{preferredVersionName:null})}(e)})),o}function oe(){var e=(0,h._r)(),n=o().docs.versionPersistence,t=(0,E.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,E.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),u=r[0],i=r[1];return(0,E.useEffect)((function(){i(re({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[u,(0,E.useMemo)((function(){return{savePreferredVersion:function(e,t){te.save(e,n,t),i((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[n])]}var ue=(0,E.createContext)(null);function ie(e){var n=e.children;return b?E.createElement(ae,null,n):E.createElement(E.Fragment,null,n)}function ae(e){var n=e.children,t=oe();return E.createElement(ue.Provider,{value:t},n)}var ce=t(29935);function se(e){void 0===e&&(e=ce.m);var n=(0,h.zh)(e),t=function(){var e=(0,E.useContext)(ue);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),r=t[0],o=t[1],u=r[e].preferredVersionName;return{preferredVersion:u?n.versions.find((function(e){return e.name===u})):null,savePreferredVersionName:(0,E.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o,e])}}var le={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},blog:{}},fe=s("docusaurus.announcement.dismiss"),de=s("docusaurus.announcement.id"),ve=function(){return"true"===fe.get()},ge=function(e){return fe.set(String(e))},me=(0,E.createContext)(null),pe=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,_.Z)(),t=(0,E.useState)((function(){return!!n&&ve()})),r=t[0],u=t[1];(0,E.useEffect)((function(){u(ve())}),[]);var i=(0,E.useCallback)((function(){ge(!0),u(!0)}),[]);return(0,E.useEffect)((function(){if(e){var n=e.id,t=de.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;de.set(n),r&&ge(!1),!r&&ve()||u(!1)}}),[e]),(0,E.useMemo)((function(){return{isActive:!!e&&!r,close:i}}),[e,r,i])}();return E.createElement(me.Provider,{value:t},n)},he=function(){var e=(0,E.useContext)(me);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function be(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}t(95999);function we(e){!function(e){var n=(0,f.k6)().block,t=(0,E.useRef)(e);(0,E.useEffect)((function(){t.current=e}),[e]),(0,E.useEffect)((function(){return n((function(e,n){return t.current(e,n)}))}),[n,t])}((function(n,t){if("POP"===t)return e(n,t)}))}function ye(e){var n=e.getBoundingClientRect();return n.top===n.bottom?ye(e.parentNode):n}function Ee(e,n){var t,r=n.anchorTopOffset,o=e.find((function(e){return ye(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(ye(o))?o:null!==(t=e[e.indexOf(o)-1])&&void 0!==t?t:null:e[e.length-1]}function Le(){var e=(0,E.useRef)(0),n=o().navbar.hideOnScroll;return(0,E.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}var Pe=function(e){var n=(0,E.useRef)(void 0),t=Le();(0,E.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,u=e.minHeadingLevel,i=e.maxHeadingLevel;function a(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],o=n;o<=t;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:u,maxHeadingLevel:i}),c=Ee(a,{anchorTopOffset:t.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){var r;t?(n.current&&n.current!==e&&(null===(r=n.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===s)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])};function Ce(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=Ce({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function Se(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,E.useMemo)((function(){return Ce({toc:n,minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}var De=(0,E.createContext)(void 0);function xe(e){var n,t=e.children;return E.createElement(De.Provider,{value:(n=(0,E.useRef)(!0),(0,E.useMemo)((function(){return{scrollEventsEnabledRef:n,enableScrollEvents:function(){n.current=!0},disableScrollEvents:function(){n.current=!1}}}),[]))},t)}function Ae(){var e=(0,E.useContext)(De);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}var Re=function(){return R.default.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};function ke(e,n){void 0===n&&(n=[]);var t=Ae().scrollEventsEnabledRef,r=(0,E.useRef)(Re()),o=S(e);(0,E.useEffect)((function(){var e=function(){if(t.current){var e=Re();o&&o(e,r.current),r.current=e}},n={passive:!0};return e(),window.addEventListener("scroll",e,n),function(){return window.removeEventListener("scroll",e,n)}}),[o,t].concat(n))}},86010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);