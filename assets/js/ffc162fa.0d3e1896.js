"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2223],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,h=c["".concat(o,".").concat(d)]||c[d]||k[d]||l;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4476:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={custom_edit_url:null},o=void 0,s={unversionedId:"api/CircularCamera",id:"version-4.0.0/api/CircularCamera",title:"CircularCamera",description:"A Camera that connects the last panel and the first panel, enabling continuous loop",source:"@site/versioned_docs/version-4.0.0/api/CircularCamera.mdx",sourceDirName:"api",slug:"/api/CircularCamera",permalink:"/egjs-flicking/docs/4.0.0/api/CircularCamera",editUrl:null,tags:[],version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"Camera",permalink:"/egjs-flicking/docs/4.0.0/api/Camera"},next:{title:"LinearCamera",permalink:"/egjs-flicking/docs/4.0.0/api/LinearCamera"}},m=[{value:"Properties",id:"properties",children:[{value:"element",id:"element",children:[],level:3},{value:"position",id:"position",children:[],level:3},{value:"alignPosition",id:"alignPosition",children:[],level:3},{value:"offset",id:"offset",children:[],level:3},{value:"range",id:"range",children:[],level:3},{value:"rangeDiff",id:"rangeDiff",children:[],level:3},{value:"visiblePanels",id:"visiblePanels",children:[],level:3},{value:"visibleRange",id:"visibleRange",children:[],level:3},{value:"anchorPoints",id:"anchorPoints",children:[],level:3},{value:"controlParams",id:"controlParams",children:[],level:3},{value:"atEdge",id:"atEdge",children:[],level:3},{value:"size",id:"size",children:[],level:3},{value:"progress",id:"progress",children:[],level:3},{value:"align",id:"align",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"updateRange",id:"updateRange",children:[],level:3},{value:"init",id:"init",children:[],level:3},{value:"destroy",id:"destroy",children:[],level:3},{value:"lookAt",id:"lookAt",children:[],level:3},{value:"getPrevAnchor",id:"getPrevAnchor",children:[],level:3},{value:"getNextAnchor",id:"getNextAnchor",children:[],level:3},{value:"getProgressInPanel",id:"getProgressInPanel",children:[],level:3},{value:"findAnchorIncludePosition",id:"findAnchorIncludePosition",children:[],level:3},{value:"findNearestAnchor",id:"findNearestAnchor",children:[],level:3},{value:"clampToReachablePosition",id:"clampToReachablePosition",children:[],level:3},{value:"canReach",id:"canReach",children:[],level:3},{value:"canSee",id:"canSee",children:[],level:3},{value:"updateAlignPos",id:"updateAlignPos",children:[],level:3},{value:"updateAnchors",id:"updateAnchors",children:[],level:3},{value:"updateAdaptiveHeight",id:"updateAdaptiveHeight",children:[],level:3},{value:"resetNeedPanelHistory",id:"resetNeedPanelHistory",children:[],level:3}],level:2}],k={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class CircularCamera extends Camera\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"Camera"},"Camera")," that connects the last panel and the first panel, enabling continuous loop"),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#element"},"element"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#position"},"position"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#alignPosition"},"alignPosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#offset"},"offset"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#range"},"range"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#rangeDiff"},"rangeDiff"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#visiblePanels"},"visiblePanels"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#visibleRange"},"visibleRange"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#anchorPoints"},"anchorPoints"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#controlParams"},"controlParams"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#atEdge"},"atEdge"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#size"},"size"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#progress"},"progress"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#align"},"align")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#updateRange"},"updateRange"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#init"},"init"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#destroy"},"destroy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#lookAt"},"lookAt"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getPrevAnchor"},"getPrevAnchor"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getNextAnchor"},"getNextAnchor"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getProgressInPanel"},"getProgressInPanel"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#findAnchorIncludePosition"},"findAnchorIncludePosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#findNearestAnchor"},"findNearestAnchor"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#clampToReachablePosition"},"clampToReachablePosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#canReach"},"canReach"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#canSee"},"canSee"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateAlignPos"},"updateAlignPos"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateAnchors"},"updateAnchors"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateAdaptiveHeight"},"updateAdaptiveHeight"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#resetNeedPanelHistory"},"resetNeedPanelHistory")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"element"},"element"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"The camera(",(0,l.kt)("inlineCode",{parentName:"p"},".flicking-camera"),") element"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": HTMLElement"),(0,l.kt)("h3",{id:"position"},"position"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Current position of the camera"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"alignPosition"},"alignPosition"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Align position inside the viewport where ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"'s ",(0,l.kt)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition")," should be located at"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"offset"},"offset"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Position offset, used for the ",(0,l.kt)("a",{parentName:"p",href:"Flicking#renderOnlyVisible"},"renderOnlyVisible")," option"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default"),": 0"),(0,l.kt)("h3",{id:"range"},"range"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"A range that Camera's ",(0,l.kt)("a",{parentName:"p",href:"Camera#position"},"position")," can reach"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"min"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"A minimum position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"min"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"A maximum position")))),(0,l.kt)("h3",{id:"rangeDiff"},"rangeDiff"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"A difference between Camera's minimum and maximum position that can reach"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"visiblePanels"},"visiblePanels"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"An array of visible panels from the current position"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array","<",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,l.kt)("h3",{id:"visibleRange"},"visibleRange"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"A range of the visible area from the current position"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"min"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"A minimum position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"min"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"A maximum position")))),(0,l.kt)("h3",{id:"anchorPoints"},"anchorPoints"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"An array of ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"s that Camera can be stopped at"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array","<",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),">"),(0,l.kt)("h3",{id:"controlParams"},"controlParams"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"A current parameters of the Camera for updating ",(0,l.kt)("a",{parentName:"p",href:"AxesController"},"AxesController")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"range"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Camera ",(0,l.kt)("a",{parentName:"td",href:"Camera#range"},"range"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"position"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Current position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"circular"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"A Boolean indicating whether the ",(0,l.kt)("a",{parentName:"td",href:"Flicking#circular"},"circular")," option is enabled")))),(0,l.kt)("h3",{id:"atEdge"},"atEdge"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"A Boolean value indicating whether Camera's over the minimum or maximum position reachable"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("h3",{id:"size"},"size"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Return the size of the viewport"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"progress"},"progress"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Return the camera's position progress from the first panel to last panel",(0,l.kt)("br",{parentName:"p"}),"\n","Range is from 0 to last panel's index"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"align"},"align"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"A value indicating where the ",(0,l.kt)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition")," should be located at inside the viewport element"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"ALIGN"},"ALIGN")," ","|"," string ","|"," number"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"updateRange"},"updateRange"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Update ",(0,l.kt)("a",{parentName:"p",href:"Camera#range"},"range")," of Camera"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,l.kt)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,l.kt)("h3",{id:"init"},"init"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Initialize Camera"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"An instance of ",(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"VAL_MUST_NOT_NULL")," If the camera element(",(0,l.kt)("inlineCode",{parentName:"p"},".flicking-camera"),") does not exist inside viewport element"),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Destroy Camera and return to initial state"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"lookAt"},"lookAt"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited"),(0,l.kt)("span",{className:"bulma-tag is-success"},"async")),(0,l.kt)("p",null,"Move to the given position and apply CSS transform"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"pos"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"A new position")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,l.kt)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,l.kt)("h3",{id:"getPrevAnchor"},"getPrevAnchor"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Return a previous ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," of given ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),(0,l.kt)("br",{parentName:"p"}),"\n","If it does not exist, return ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," instead"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The previous ",(0,l.kt)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"anchor"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint")),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"A reference ",(0,l.kt)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint"))))),(0,l.kt)("h3",{id:"getNextAnchor"},"getNextAnchor"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Return a next ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," of given ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),(0,l.kt)("br",{parentName:"p"}),"\n","If it does not exist, return ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," instead"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The next ",(0,l.kt)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"anchor"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint")),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"A reference ",(0,l.kt)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint"))))),(0,l.kt)("h3",{id:"getProgressInPanel"},"getProgressInPanel"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Return the camera's position progress in the panel below",(0,l.kt)("br",{parentName:"p"}),"\n","Value is from 0 to 1 when the camera's inside panel",(0,l.kt)("br",{parentName:"p"}),"\n","Value can be lower than 0 or bigger than 1 when it's in the margin area"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"panel"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"findAnchorIncludePosition"},"findAnchorIncludePosition"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Return ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," that includes given position",(0,l.kt)("br",{parentName:"p"}),"\n","If there's no ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," that includes the given position, return ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," instead"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint")," that includes the given position")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"position"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"A position to check")))),(0,l.kt)("h3",{id:"findNearestAnchor"},"findNearestAnchor"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Return ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," nearest to given position",(0,l.kt)("br",{parentName:"p"}),"\n","If there're no ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"s, return ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," instead"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint")," nearest to the given position")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"position"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"A position to check")))),(0,l.kt)("h3",{id:"clampToReachablePosition"},"clampToReachablePosition"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Clamp the given position between camera's range"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": number"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A clamped position")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"position"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"A position to clamp")))),(0,l.kt)("h3",{id:"canReach"},"canReach"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Check whether the given panel is inside of the Camera's range"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Whether the panel's inside Camera's range")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"panel"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"An instance of ",(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")," to check")))),(0,l.kt)("h3",{id:"canSee"},"canSee"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Check whether the given panel element is visible at the current position"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Whether the panel element is visible at the current position")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"panel"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"An instance of ",(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")," to check")))),(0,l.kt)("h3",{id:"updateAlignPos"},"updateAlignPos"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Update Camera's ",(0,l.kt)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"updateAnchors"},"updateAnchors"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Update Camera's ",(0,l.kt)("a",{parentName:"p",href:"Camera#anchorPoints"},"anchorPoints")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,l.kt)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,l.kt)("h3",{id:"updateAdaptiveHeight"},"updateAdaptiveHeight"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Update Viewport's height to active panel's height"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,l.kt)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,l.kt)("h3",{id:"resetNeedPanelHistory"},"resetNeedPanelHistory"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Reset the history of ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-needPanel"},"needPanel")," events so it can be triggered again"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"))}c.isMDXComponent=!0}}]);