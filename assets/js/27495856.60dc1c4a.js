"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6623],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(a),k=r,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||l;return a?n.createElement(d,i(i({ref:e},m),{},{components:a})):n.createElement(d,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},33553:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={custom_edit_url:null},s=void 0,p={unversionedId:"api/AxesController",id:"version-4.0.0/api/AxesController",title:"AxesController",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/versioned_docs/version-4.0.0/api/AxesController.mdx",sourceDirName:"api",slug:"/api/AxesController",permalink:"/egjs-flicking/docs/4.0.0/api/AxesController",editUrl:null,tags:[],version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"LinearCamera",permalink:"/egjs-flicking/docs/4.0.0/api/LinearCamera"},next:{title:"Control",permalink:"/egjs-flicking/docs/4.0.0/api/Control"}},m=[{value:"Properties",id:"properties",children:[{value:"axes",id:"axes",children:[],level:3},{value:"state",id:"state",children:[],level:3},{value:"animatingContext",id:"animatingContext",children:[],level:3},{value:"enabled",id:"enabled",children:[],level:3},{value:"position",id:"position",children:[],level:3},{value:"bounce",id:"bounce",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"init",id:"init",children:[],level:3},{value:"destroy",id:"destroy",children:[],level:3},{value:"enable",id:"enable",children:[],level:3},{value:"disable",id:"disable",children:[],level:3},{value:"update",id:"update",children:[],level:3},{value:"animateTo",id:"animateTo",children:[],level:3}],level:2}],u={toc:m};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class AxesController\n")),(0,l.kt)("p",null,"A controller that handles the ",(0,l.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes")," events"),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#axes"},"axes"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#state"},"state"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#animatingContext"},"animatingContext"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#enabled"},"enabled"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#position"},"position"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#bounce"},"bounce")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#init"},"init"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#destroy"},"destroy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#enable"},"enable"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#disable"},"disable"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#update"},"update"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#animateTo"},"animateTo")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"axes"},"axes"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"An ",(0,l.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," instance"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Axes"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html"},"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html"))),(0,l.kt)("h3",{id:"state"},"state"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"A activated ",(0,l.kt)("a",{parentName:"p",href:"State"},"State")," that shows the current status of the user input or the animation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"State"},"State")),(0,l.kt)("h3",{id:"animatingContext"},"animatingContext"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"A context of the current animation playing"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"start"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"A start position of the animation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"end"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"A end position of the animation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"offset"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"camera offset")))),(0,l.kt)("h3",{id:"enabled"},"enabled"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"A Boolean indicating whether the user input is enabled"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("h3",{id:"position"},"position"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"Current position value in ",(0,l.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," instance"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"bounce"},"bounce"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"Actual bounce size(px)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array","<","number",">"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"init"},"init"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Initialize AxesController"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"An instance of Flicking")))),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Destroy AxesController and return to initial state"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"enable"},"enable"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Enable input from the user (mouse/touch)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"disable"},"disable"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Disable input from the user (mouse/touch)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"update"},"update"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Update ",(0,l.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes"),"'s state"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,l.kt)("a",{parentName:"p",href:"AxesController#init"},"init")," is not called before"),(0,l.kt)("h3",{id:"animateTo"},"animateTo"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Run Axes's ",(0,l.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#setTo"},"setTo")," using the given position"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target position")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"position"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"A position to move")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"If provided, it'll use its ",(0,l.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#setTo"},"setTo")," method instead")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"condition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,l.kt)("td",{parentName:"tr",align:null},"When ",(0,l.kt)("a",{parentName:"td",href:"Control#init"},"init")," is not called before")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,l.kt)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")))))}c.isMDXComponent=!0}}]);