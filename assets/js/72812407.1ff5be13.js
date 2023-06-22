"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84182],{85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),s=n(16550),o=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,u]=f({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var h=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function S(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},59209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),i=n(85162),s=n(60614),o=n(44996);const u={title:"Server Side Rendering (SSR)",id:"ssr",slug:"/ssr",custom_edit_url:null},c=void 0,d={unversionedId:"ssr",id:"version-4.2.5/ssr",title:"Server Side Rendering (SSR)",description:'As Flicking does not know the size of the panel element until it is rendered, it is hard to place the panels at the correct positions on Server-Side Rendering (SSR) unless you\'re using the "prev" align or using the bound option.',source:"@site/versioned_docs/version-4.2.5/ssr.mdx",sourceDirName:".",slug:"/ssr",permalink:"/egjs-flicking/docs/4.2.5/ssr",draft:!1,editUrl:null,tags:[],version:"4.2.5",frontMatter:{title:"Server Side Rendering (SSR)",id:"ssr",slug:"/ssr",custom_edit_url:null},sidebar:"version-4.2.5/docs",previous:{title:"Polyfills",permalink:"/egjs-flicking/docs/4.2.5/polyfills"},next:{title:"Migration Guide from v3 to v4",permalink:"/egjs-flicking/docs/4.2.5/migration-from-v3"}},p={},m=[{value:"firstPanelSize",id:"firstpanelsize",level:3},{value:"hideBeforeInit",id:"hidebeforeinit",level:3},{value:"How to use",id:"how-to-use",level:3}],f={toc:m},g="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As Flicking does not know the size of the panel element until it is rendered, it is hard to place the panels at the correct positions on Server-Side Rendering (SSR) unless you're using the ",(0,r.kt)("inlineCode",{parentName:"p"},'"prev"')," align or using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bound")," option."),(0,r.kt)("p",null,"To solve this problem, Flicking offers 2 options for the frameworks, ",(0,r.kt)("inlineCode",{parentName:"p"},"firstPanelSize")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hideBeforeInit"),"."),(0,r.kt)("h3",{id:"firstpanelsize"},"firstPanelSize"),(0,r.kt)("p",null,"If you know the exact size of the first panel element, like ",(0,r.kt)("inlineCode",{parentName:"p"},'"200px"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"50%"'),", you can use that value to correctly place the panel elements before Flicking's mounted."),(0,r.kt)("img",{src:(0,o.Z)("/img/firstPanelSize.png")}),(0,r.kt)("p",null,"But if the panel's size is responsive for the screen size or you're using a ",(0,r.kt)("inlineCode",{parentName:"p"},"circular")," option, this won't work well as Flicking doesn't know about other panel sizes.",(0,r.kt)("br",{parentName:"p"}),"\n","In that case, please use ",(0,r.kt)("inlineCode",{parentName:"p"},"hideBeforeInit")," instead."),(0,r.kt)("img",{src:(0,o.Z)("/img/firstPanelSize-circular.gif")}),(0,r.kt)("h3",{id:"hidebeforeinit"},"hideBeforeInit"),(0,r.kt)("p",null,"Enabling this option will hide panel elements until it's mounted.",(0,r.kt)("br",{parentName:"p"}),"\n","This will show empty screen before it's mounted, so use this option only when you're okay with that."),(0,r.kt)("img",{src:(0,o.Z)("/img/hideBeforeInit.gif")}),(0,r.kt)("h3",{id:"how-to-use"},"How to use"),(0,r.kt)(l.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},"In native JS, you can attach class `flicking-hidden` to the viewport element and remove that on `ready` event to mimic the behavior of `hideBeforeInit`.",(0,r.kt)(s.Z,{className:"html",title:"html",mdxType:"CodeBlock"},'<div id="flicking" class="flicking-viewport flicking-hidden">\n  <div class="flicking-camera">\n    ...\n  </div>\n</div>'),(0,r.kt)(s.Z,{className:"js",title:"js",mdxType:"CodeBlock"},'import Flicking, { EVENTS } from "@egjs/flicking";\n\nconst flicking = new Flicking("#flicking");\nflicking.once(EVENTS.READY, () => {\n  flicking.element.classList.remove("flicking-hidden");\n}')),(0,r.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n'))),(0,r.kt)(i.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking :hideBeforeInit="true" :firstPanelSize="\'200px\'">\n   {{ ... }}\n</Flicking>\n'))),(0,r.kt)(i.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking :hideBeforeInit="true" :firstPanelSize="\'200px\'">\n   {{ ... }}\n</Flicking>\n'))),(0,r.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking [hideBeforeInit]="true" [firstPanelSize]="\'200px\'">\n  {{ ... }}\n</ngx-flicking>\n'))),(0,r.kt)(i.Z,{value:"preact",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n'))),(0,r.kt)(i.Z,{value:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n')))))}h.isMDXComponent=!0}}]);