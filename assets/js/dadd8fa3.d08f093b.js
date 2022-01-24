"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9816],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6885:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={custom_edit_url:null},p=void 0,c={unversionedId:"api/Status",id:"version-4.1.1/api/Status",title:"Status",description:"Status",source:"@site/versioned_docs/version-4.1.1/api/Status.mdx",sourceDirName:"api",slug:"/api/Status",permalink:"/egjs-flicking/docs/4.1.1/api/Status",editUrl:null,tags:[],version:"4.1.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.1/api",previous:{title:"FreeControlOptions",permalink:"/egjs-flicking/docs/4.1.1/api/FreeControlOptions"},next:{title:"EVENT",permalink:"/egjs-flicking/docs/4.1.1/api/EVENT"}},s=[{value:"Status",id:"Status",children:[],level:3}],u={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Status\n")),(0,i.kt)("h3",{id:"Status"},"Status"),(0,i.kt)("div",{className:"bulma-tags"}),(0,i.kt)("p",null,"Flicking Status returned by ",(0,i.kt)("a",{parentName:"p",href:"Flicking#getStatus"},"Flicking#getStatus")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"index"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"An index of the active panel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"position"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A info to restore camera ",(0,i.kt)("a",{parentName:"td",href:"Camera#position"},"position"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"position.panel"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"An index of the panel camera is located at")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"position.progressInPanel"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A progress of the camera position inside the panel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"visibleOffset"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"An offset to visible panel's original index. This value is available only when ",(0,i.kt)("inlineCode",{parentName:"td"},"visiblePanelsOnly")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"panels"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A data array of panels")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"panels.index"),(0,i.kt)("td",{parentName:"tr",align:"center"},"index"),(0,i.kt)("td",{parentName:"tr",align:"center"},"An index of the panel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"panels.html"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:"center"},"An ",(0,i.kt)("inlineCode",{parentName:"td"},"outerHTML")," of the panel element")))))}d.isMDXComponent=!0}}]);