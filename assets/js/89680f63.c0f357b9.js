"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[264],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=l.createContext({}),s=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return l.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},v=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),v=s(t),d=r,m=v["".concat(u,".").concat(d)]||v[d]||p[d]||a;return t?l.createElement(m,i(i({ref:n},c),{},{components:t})):l.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=v;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}v.displayName="MDXCreateElement"},58215:function(e,n,t){var l=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return v}});var l=t(87462),r=t(67294),a=t(72389),i=t(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(63616),s=t(86010),c="tabItem_vU9c";function p(e){var n,t,a,i=e.lazy,p=e.block,v=e.defaultValue,d=e.values,m=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,u.lx)(k,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===v?v:null!=(n=null!=v?v:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),N=y.tabGroupChoices,E=y.setTabGroupChoices,T=(0,r.useState)(h),x=T[0],w=T[1],j=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=N[m];null!=P&&P!==x&&k.some((function(e){return e.value===P}))&&w(P)}var F=function(e){var n=e.currentTarget,t=j.indexOf(n),l=k[t].value;l!==x&&(O(n),w(l),null!=m&&E(m,l))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var l=j.indexOf(e.currentTarget)+1;t=j[l]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},g)},k.map((function(e){var n=e.value,t=e.label,a=e.attributes;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return j.push(e)},onKeyDown:C,onFocus:F,onClick:F},a,{className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function v(e){var n=(0,a.Z)();return r.createElement(p,(0,l.Z)({key:String(n)},e))}},31567:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return v},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var l=t(87462),r=t(63366),a=(t(67294),t(3905)),i=t(39960),o=t(44996),u=t(26396),s=t(58215),c=["components"],p={title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},v=void 0,d={unversionedId:"listening-to-events",id:"version-4.2.5/listening-to-events",title:"Listening to Events",description:"<Tabs",source:"@site/versioned_docs/version-4.2.5/listening-to-events.mdx",sourceDirName:".",slug:"/listening-to-events",permalink:"/egjs-flicking/docs/4.2.5/listening-to-events",editUrl:null,tags:[],version:"4.2.5",frontMatter:{title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},sidebar:"version-4.2.5/docs",previous:{title:"Using the Methods",permalink:"/egjs-flicking/docs/4.2.5/using-the-methods"},next:{title:"Handling errors",permalink:"/egjs-flicking/docs/4.2.5/error-handling"}},m=[],g={toc:m};function f(e){var n=e.components,t=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,l.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(u.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("p",null,"You can listen to Flicking's events with ",(0,a.kt)("a",{parentName:"p",href:"api/Flicking#on"},"Flicking#on")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// If you're using a package manager\nimport { EVENTS } from \"@egjs/flicking\";\n// Or, if you're using a CDN\nconst EVENTS = Flicking.EVENTS;\n\nflicking.on(EVENTS.MOVE, evt => {\n  console.log(evt);\n})\n"))),(0,a.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("p",null,"All events are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/react-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n'))),(0,a.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,a.kt)("p",null,"All event names are renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking\n  @ready="e => { ... }"\n  @move-end="e => { ... }"\n  v-on:need-panel="e => { ... }"\n>\n   {{ ... }}\n</Flicking>\n'))),(0,a.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,a.kt)("p",null,"All event names are renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking\n  @ready="e => { ... }"\n  @move-end="e => { ... }"\n  v-on:need-panel="e => { ... }"\n>\n   {{ ... }}\n</Flicking>\n'))),(0,a.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)("p",null,"You can listen events of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ngx-flicking")," using Angular's ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/event-binding"},"event binding"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking\n  [options]="{ needPanelThreshold: 50, renderOnlyVisible: true }"\n  (needPanel)="onNeedPanel($event)">\n  {{ ... }}\n</ngx-flicking>\n'))),(0,a.kt)(s.Z,{value:"preact",mdxType:"TabItem"},(0,a.kt)("p",null,"All events are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/preact-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n'))),(0,a.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"on:eventName")," syntax to listen Flicking events.",(0,a.kt)("br",{parentName:"p"}),"\n","All event properties are available in the event's ",(0,a.kt)("inlineCode",{parentName:"p"},"detail")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";\n  import "@egjs/svelte-flicking/dist/flicking.css";\n<\/script>\n\n<Flicking on:ready={e => {\n  console.log("READY!");\n}} on:move={e => {\n  // Event properties are placed in "detail"\n  console.log(e.detail);\n}}>\n  \x3c!-- Those will render "div" element --\x3e\n  <FlickingPanel>0</FlickingPanel>\n  <FlickingPanel>1</FlickingPanel>\n  <FlickingPanel>2</FlickingPanel>\n</Flicking>\n')))),(0,a.kt)("p",null,"See all available events at ",(0,a.kt)(i.Z,{to:(0,o.Z)("docs/api/Flicking#events"),mdxType:"Link"},"Flicking#events"),"."))}f.isMDXComponent=!0}}]);