"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1305],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),v=s(t),d=a,m=v["".concat(u,".").concat(d)]||v[d]||p[d]||l;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=v;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(87462),a=t(67294),l=t(72389),i=t(79443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(63616),s=t(86010),c="tabItem_vU9c";function p(e){var n,t,l,i=e.lazy,p=e.block,v=e.defaultValue,d=e.values,m=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,u.lx)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===v?v:null!=(n=null!=v?v:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=g[0])?void 0:l.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),N=y.tabGroupChoices,E=y.setTabGroupChoices,T=(0,a.useState)(h),O=T[0],w=T[1],x=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=N[m];null!=P&&P!==O&&b.some((function(e){return e.value===P}))&&w(P)}var C=function(e){var n=e.currentTarget,t=x.indexOf(n),r=b[t].value;r!==O&&(j(n),w(r),null!=m&&E(m,r))},F=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;t=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return x.push(e)},onKeyDown:F,onFocus:C,onClick:C},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function v(e){var n=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},60337:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return v},default:function(){return m}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=t(26396),o=t(58215),u=["components"],s={title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},c=void 0,p={unversionedId:"listening-to-events",id:"version-4.0.0/listening-to-events",title:"Listening to Events",description:"<Tabs",source:"@site/versioned_docs/version-4.0.0/listening-to-events.mdx",sourceDirName:".",slug:"/listening-to-events",permalink:"/egjs-flicking/docs/4.0.0/listening-to-events",editUrl:null,tags:[],version:"4.0.0",frontMatter:{title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},sidebar:"version-4.0.0/docs",previous:{title:"Using the Methods",permalink:"/egjs-flicking/docs/4.0.0/using-the-methods"},next:{title:"Handling errors",permalink:"/egjs-flicking/docs/4.0.0/error-handling"}},v=[],d={toc:v};function m(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(i.Z,{groupId:"cfc",defaultValue:"js",lazy:!0,values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("p",null,"You can listen to Flicking's events with ",(0,l.kt)("a",{parentName:"p",href:"api/Flicking#on"},"Flicking#on")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// If you're using a package manager\nimport { EVENTS } from \"@egjs/flicking\";\n// Or, if you're using a CDN\nconst EVENTS = Flicking.EVENTS;\n\nflicking.on(EVENTS.MOVE, evt => {\n  console.log(evt);\n})\n"))),(0,l.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("p",null,"All events are prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/react-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n'))),(0,l.kt)(o.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("p",null,"All event names are renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",(0,l.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking\n  @ready="e => { ... }"\n  @move-end="e => { ... }"\n  v-on:need-panel="e => { ... }"\n>\n   {{ ... }}\n</Flicking>\n'))),(0,l.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("p",null,"You can listen events of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ngx-flicking")," using Angular's ",(0,l.kt)("a",{parentName:"p",href:"https://angular.io/guide/event-binding"},"event binding"),".",(0,l.kt)("br",{parentName:"p"}),"\n","In addition, we're providing one additional event to Angular.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"renderPanelChange")," event is an Angular-exclusive event that can be used for ",(0,l.kt)("a",{parentName:"p",href:"api/Flicking#renderOnlyVisible"},"renderOnlyVisible")," event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking\n  [options]="{ needPanelThreshold: 50, renderOnlyVisible: true }"\n  (needPanel)="onNeedPanel($event)"\n  (renderPanelChange)="onRenderPanelChange($event)">\n  {{ ... }}\n</ngx-flicking>\n'))),(0,l.kt)(o.Z,{value:"preact",mdxType:"TabItem"},(0,l.kt)("p",null,"All events are prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/preact-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n')))),(0,l.kt)("p",null,"See all available events at ",(0,l.kt)("a",{parentName:"p",href:"api/Flicking#events"},"Flicking#events"),"."))}m.isMDXComponent=!0}}]);