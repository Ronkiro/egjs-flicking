"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1947],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return o}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=n.createContext({}),m=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(k.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(a),o=r,u=d["".concat(k,".").concat(o)]||d[o]||s[o]||l;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function o(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var k in t)hasOwnProperty.call(t,k)&&(p[k]=t[k]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12780:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return k},metadata:function(){return m},toc:function(){return c},default:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={custom_edit_url:null},k=void 0,m={unversionedId:"api/VanillaRenderer",id:"api/VanillaRenderer",title:"VanillaRenderer",description:"PropertiesMethods",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/VanillaRenderer.mdx",sourceDirName:"api",slug:"/api/VanillaRenderer",permalink:"/egjs-flicking/ko/docs/next/api/VanillaRenderer",editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Renderer",permalink:"/egjs-flicking/ko/docs/next/api/Renderer"},next:{title:"Component",permalink:"/egjs-flicking/ko/docs/next/api/Component"}},c=[{value:"Properties",id:"properties",children:[{value:"panels",id:"panels",children:[],level:3},{value:"panelCount",id:"panelCount",children:[],level:3},{value:"strategy",id:"strategy",children:[],level:3},{value:"align",id:"align",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"render",id:"render",children:[],level:3},{value:"init",id:"init",children:[],level:3},{value:"destroy",id:"destroy",children:[],level:3},{value:"getPanel",id:"getPanel",children:[],level:3},{value:"updatePanelSize",id:"updatePanelSize",children:[],level:3},{value:"batchInsert",id:"batchInsert",children:[],level:3},{value:"batchRemove",id:"batchRemove",children:[],level:3},{value:"checkPanelContentsReady",id:"checkPanelContentsReady",children:[],level:3}],level:2}],s={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class VanillaRenderer extends Renderer\n")),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#panels"},"panels"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#panelCount"},"panelCount"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#strategy"},"strategy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#align"},"align")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#render"},"render"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#init"},"init"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#destroy"},"destroy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getPanel"},"getPanel"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updatePanelSize"},"updatePanelSize"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#batchInsert"},"batchInsert"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#batchRemove"},"batchRemove"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#checkPanelContentsReady"},"checkPanelContentsReady")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"panels"},"panels"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\uc804\uccb4 \ud328\ub110\ub4e4\uc758 \ubc30\uc5f4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array","<",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"Panel"},"Panel"))),(0,l.kt)("h3",{id:"panelCount"},"panelCount"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\uc804\uccb4 \ud328\ub110\uc758 \uac1c\uc218"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"strategy"},"strategy"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This member is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"align"},"align"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"\uc5d0 \uacf5\ud1b5\uc801\uc73c\ub85c \uc801\uc6a9\ud560 ",(0,l.kt)("a",{parentName:"p",href:"Panel#align"},"align")," \uac12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"render"},"render"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8 \ub0b4\ubd80\uc5d0 \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"init"},"init"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Renderer\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Flicking\uc758 \uc778\uc2a4\ud134\uc2a4")))),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Renderer\ub97c \ucd08\uae30 \uc0c1\ud0dc\ub85c \ub418\ub3cc\ub9bd\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"getPanel"},"getPanel"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc5d0 \ud574\ub2f9\ud558\ub294 ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc5d0 \ud574\ub2f9\ud558\ub294 \ud328\ub110\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc5d0 \ud574\ub2f9\ud558\ub294 \ud328\ub110")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"Panel"},"Panel"))),(0,l.kt)("h3",{id:"updatePanelSize"},"updatePanelSize"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ubaa8\ub4e0 \ud328\ub110\uc758 \ud06c\uae30\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"batchInsert"},"batchInsert"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc5d0 \uc0c8\ub85c\uc6b4 \ud328\ub110\ub4e4\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n","\ud574\ub2f9 \uc778\ub371\uc2a4\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc778\ub371\uc2a4\ub97c \uac00\uc9c4 \uae30\uc874 \ud328\ub110\ub4e4\uc740 \ucd94\uac00\ud55c \ud328\ub110\uc758 \uac1c\uc218\ub9cc\ud07c \uc778\ub371\uc2a4\uac00 \uc99d\uac00\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": Array","<",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucd94\uac00\ub41c \ud328\ub110\ub4e4\uc758 \ubc30\uc5f4")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ucd94\uac00\ud560 \uc544\uc774\ud15c\ub4e4\uc758 \ubc30\uc5f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc0c8\ub85c \ud328\ub110\ub4e4\uc744 \ucd94\uac00\ud560 \uc778\ub371\uc2a4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.elements"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","any",">"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc5d8\ub9ac\uba3c\ud2b8\uc758 \ubc30\uc5f4 \ud639\uc740 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud3ec\ud568\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc758 \ubc30\uc5f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.hasDOMInElements"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ub0b4\ubd80\uc5d0 \uc2e4\uc81c DOM \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \ud3ec\ud568\ud558\uace0 \uc788\ub294\uc9c0 \uc5ec\ubd80. true\ub85c \uc124\uc815\ud560 \uacbd\uc6b0, \ub80c\ub354\ub7ec\ub294 \ud574\ub2f9 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8 \ub0b4\ubd80\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4")))),(0,l.kt)("h3",{id:"batchRemove"},"batchRemove"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc758 \ud328\ub110\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n","\ud574\ub2f9 \uc778\ub371\uc2a4\ubcf4\ub2e4 \ud070 \uc778\ub371\uc2a4\ub97c \uac00\uc9c4 \uae30\uc874 \ud328\ub110\ub4e4\uc740 \uc81c\uac70\ud55c \ud328\ub110\uc758 \uac1c\uc218\ub9cc\ud07c \uc778\ub371\uc2a4\uac00 \uac10\uc18c\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"[]"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc81c\uac70\ub41c \ud328\ub110\ub4e4\uc758 \ubc30\uc5f4")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc81c\uac70\ud560 \uc544\uc774\ud15c\ub4e4\uc758 \ubc30\uc5f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc81c\uac70\ud560 \ud328\ub110\uc758 \uc778\ub371\uc2a4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.deleteCount"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"index")," \uc774\ud6c4\ub85c \uc81c\uac70\ud560 \ud328\ub110\uc758 \uac1c\uc218")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.hasDOMInElements"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ub0b4\ubd80\uc5d0 \uc2e4\uc81c DOM \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \ud3ec\ud568\ud558\uace0 \uc788\ub294\uc9c0 \uc5ec\ubd80. true\ub85c \uc124\uc815\ud560 \uacbd\uc6b0, \ub80c\ub354\ub7ec\ub294 \ud574\ub2f9 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8 \ub0b4\ubd80\uc5d0\uc11c \uc81c\uac70\ud569\ub2c8\ub2e4")))),(0,l.kt)("h3",{id:"checkPanelContentsReady"},"checkPanelContentsReady"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"checkingPanels"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."))}d.isMDXComponent=!0}}]);