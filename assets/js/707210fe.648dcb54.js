"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9373],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58651:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={custom_edit_url:null},c=void 0,p={unversionedId:"api/AnchorPoint",id:"version-4.0.0/api/AnchorPoint",title:"AnchorPoint",description:"A data component that has actual position where the camera should be stopped at",source:"@site/versioned_docs/version-4.0.0/api/AnchorPoint.mdx",sourceDirName:"api",slug:"/api/AnchorPoint",permalink:"/egjs-flicking/docs/4.0.0/api/AnchorPoint",editUrl:null,tags:[],version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"State",permalink:"/egjs-flicking/docs/4.0.0/api/State"},next:{title:"FlickingError",permalink:"/egjs-flicking/docs/4.0.0/api/FlickingError"}},s=[{value:"Constructor",id:"constructor",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"index",id:"index",children:[],level:3},{value:"position",id:"position",children:[],level:3},{value:"panel",id:"panel",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class AnchorPoint\n")),(0,o.kt)("p",null,"A data component that has actual position where the camera should be stopped at"),(0,o.kt)("div",{className:"container"},(0,o.kt)("div",{className:"row mb-2"},(0,o.kt)("div",{className:"col col--12"},(0,o.kt)("strong",null,"Properties"))),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--12"},(0,o.kt)("a",{href:"#index"},"index"),(0,o.kt)("br",null),(0,o.kt)("a",{href:"#position"},"position"),(0,o.kt)("br",null),(0,o.kt)("a",{href:"#panel"},"panel")))),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"new AnchorPoint(options, options.index, options.position, options.panel)\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,o.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,o.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"options"),(0,o.kt)("td",{parentName:"tr",align:"center"},"object"),(0,o.kt)("td",{parentName:"tr",align:"center"},"no"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"An options object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"options.index"),(0,o.kt)("td",{parentName:"tr",align:"center"},"number"),(0,o.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"Index of AnchorPoint")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"options.position"),(0,o.kt)("td",{parentName:"tr",align:"center"},"number"),(0,o.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"Position of AnchorPoint")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"options.panel"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,o.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"A ",(0,o.kt)("a",{parentName:"td",href:"Panel"},"Panel")," instance AnchorPoint is referencing to")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"index"},"index"),(0,o.kt)("div",{className:"bulma-tags"},(0,o.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,o.kt)("p",null,"Index of AnchorPoint"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": number"),(0,o.kt)("h3",{id:"position"},"position"),(0,o.kt)("div",{className:"bulma-tags"},(0,o.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,o.kt)("p",null,"Position of AnchorPoint"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": number"),(0,o.kt)("h3",{id:"panel"},"panel"),(0,o.kt)("div",{className:"bulma-tags"},(0,o.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"Panel"},"Panel")," instance AnchorPoint is referencing to"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"Panel"},"Panel")))}d.isMDXComponent=!0}}]);