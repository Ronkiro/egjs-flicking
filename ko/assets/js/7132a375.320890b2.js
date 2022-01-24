"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[249],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:e},s),{},{components:n})):r.createElement(k,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79751:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={custom_edit_url:null},c=void 0,p={unversionedId:"api/AnchorPoint",id:"version-4.5.0/api/AnchorPoint",title:"AnchorPoint",description:"\uce74\uba54\ub77c\uac00 \uc815\uc9c0\ud574\uc57c\ud558\ub294 \uc2e4\uc81c \uc704\uce58\ub97c \ub2f4\uace0 \uc788\ub294 \ub370\uc774\ud130 \ucef4\ud3ec\ub10c\ud2b8",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.5.0/api/AnchorPoint.mdx",sourceDirName:"api",slug:"/api/AnchorPoint",permalink:"/egjs-flicking/ko/docs/api/AnchorPoint",editUrl:null,tags:[],version:"4.5.0",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"State",permalink:"/egjs-flicking/ko/docs/api/State"},next:{title:"FlickingError",permalink:"/egjs-flicking/ko/docs/api/FlickingError"}},s=[{value:"Constructor",id:"constructor",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"index",id:"index",children:[],level:3},{value:"position",id:"position",children:[],level:3},{value:"panel",id:"panel",children:[],level:3}],level:2}],u={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class AnchorPoint\n")),(0,o.kt)("p",null,"\uce74\uba54\ub77c\uac00 \uc815\uc9c0\ud574\uc57c\ud558\ub294 \uc2e4\uc81c \uc704\uce58\ub97c \ub2f4\uace0 \uc788\ub294 \ub370\uc774\ud130 \ucef4\ud3ec\ub10c\ud2b8"),(0,o.kt)("div",{className:"container"},(0,o.kt)("div",{className:"row mb-2"},(0,o.kt)("div",{className:"col col--12"},(0,o.kt)("strong",null,"Properties"))),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--12"},(0,o.kt)("a",{href:"#index"},"index"),(0,o.kt)("br",null),(0,o.kt)("a",{href:"#position"},"position"),(0,o.kt)("br",null),(0,o.kt)("a",{href:"#panel"},"panel")))),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"new AnchorPoint(options, options.index, options.position, options.panel)\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,o.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,o.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"options"),(0,o.kt)("td",{parentName:"tr",align:"center"},"object"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"\uc635\uc158 \uac1d\uccb4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"options.index"),(0,o.kt)("td",{parentName:"tr",align:"center"},"number"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"AnchorPoint\uc758 \uc778\ub371\uc2a4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"options.position"),(0,o.kt)("td",{parentName:"tr",align:"center"},"number"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"AnchorPoint\uc758 \uc88c\ud45c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"options.panel"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"AnchorPoint\uac00 \ucc38\uc870\ud558\uace0 \uc788\ub294 ",(0,o.kt)("a",{parentName:"td",href:"Panel"},"Panel"))))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"index"},"index"),(0,o.kt)("div",{className:"bulma-tags"},(0,o.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,o.kt)("p",null,"AnchorPoint\uc758 \uc778\ub371\uc2a4"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": number"),(0,o.kt)("h3",{id:"position"},"position"),(0,o.kt)("div",{className:"bulma-tags"},(0,o.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,o.kt)("p",null,"AnchorPoint\uc758 \uc88c\ud45c"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": number"),(0,o.kt)("h3",{id:"panel"},"panel"),(0,o.kt)("div",{className:"bulma-tags"},(0,o.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,o.kt)("p",null,"AnchorPoint\uac00 \ucc38\uc870\ud558\uace0 \uc788\ub294 ",(0,o.kt)("a",{parentName:"p",href:"Panel"},"Panel")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"Panel"},"Panel")))}m.isMDXComponent=!0}}]);