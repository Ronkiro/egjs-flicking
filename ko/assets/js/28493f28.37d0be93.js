"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7517],{19365:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(96540),r=n(20053);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>S});var a=n(58168),r=n(96540),i=n(20053),l=n(23104),s=n(72681),o=n(57485),u=n(31682),c=n(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[o,u]=m({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=o??d;return g({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var h=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),o(a))},g=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:p},l,{className:(0,i.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,i.A)("tabs-container",v.tabList)},r.createElement(y,(0,a.A)({},e,t)),r.createElement(b,(0,a.A)({},e,t)))}function S(e){const t=(0,h.A)();return r.createElement(k,(0,a.A)({key:String(t)},e))}},46641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>g});var a=n(58168),r=(n(96540),n(15680)),i=n(11470),l=n(19365),s=n(22355),o=n(86025);const u={title:"Server Side Rendering (SSR)",id:"ssr",slug:"/ssr",custom_edit_url:null,sidebar_position:7},c=void 0,d={unversionedId:"tutorials/ssr",id:"version-4.10.8/tutorials/ssr",title:"Server Side Rendering (SSR)",description:'As Flicking does not know the size of the panel element until it is rendered, it is hard to place the panels at the correct positions on Server-Side Rendering (SSR) unless you\'re using the "prev" align or using the bound option.',source:"@site/versioned_docs/version-4.10.8/tutorials/ssr.mdx",sourceDirName:"tutorials",slug:"/ssr",permalink:"/egjs-flicking/ko/docs/4.10.8/ssr",draft:!1,editUrl:null,tags:[],version:"4.10.8",sidebarPosition:7,frontMatter:{title:"Server Side Rendering (SSR)",id:"ssr",slug:"/ssr",custom_edit_url:null,sidebar_position:7},sidebar:"docs",previous:{title:"Polyfills",permalink:"/egjs-flicking/ko/docs/4.10.8/polyfills"},next:{title:"Rendering elements inside the wrapper element",permalink:"/egjs-flicking/ko/docs/4.10.8/viewport-slot"}},p={},g=[{value:"firstPanelSize",id:"firstpanelsize",level:3},{value:"hideBeforeInit",id:"hidebeforeinit",level:3},{value:"How to use",id:"how-to-use",level:3}],m={toc:g},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(f,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"As Flicking does not know the size of the panel element until it is rendered, it is hard to place the panels at the correct positions on Server-Side Rendering (SSR) unless you're using the ",(0,r.yg)("inlineCode",{parentName:"p"},'"prev"')," align or using the ",(0,r.yg)("inlineCode",{parentName:"p"},"bound")," option."),(0,r.yg)("p",null,"To solve this problem, Flicking offers 2 options for the frameworks, ",(0,r.yg)("inlineCode",{parentName:"p"},"firstPanelSize")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"hideBeforeInit"),"."),(0,r.yg)("h3",{id:"firstpanelsize"},"firstPanelSize"),(0,r.yg)("p",null,"If you know the exact size of the first panel element, like ",(0,r.yg)("inlineCode",{parentName:"p"},'"200px"')," or ",(0,r.yg)("inlineCode",{parentName:"p"},'"50%"'),", you can use that value to correctly place the panel elements before Flicking's mounted."),(0,r.yg)("img",{src:(0,o.A)("/img/firstPanelSize.png")}),(0,r.yg)("p",null,"But if the panel's size is responsive for the screen size or you're using a ",(0,r.yg)("inlineCode",{parentName:"p"},"circular")," option, this won't work well as Flicking doesn't know about other panel sizes.",(0,r.yg)("br",{parentName:"p"}),"\n","In that case, please use ",(0,r.yg)("inlineCode",{parentName:"p"},"hideBeforeInit")," instead."),(0,r.yg)("img",{src:(0,o.A)("/img/firstPanelSize-circular.gif")}),(0,r.yg)("h3",{id:"hidebeforeinit"},"hideBeforeInit"),(0,r.yg)("p",null,"Enabling this option will hide panel elements until it's mounted.",(0,r.yg)("br",{parentName:"p"}),"\n","This will show empty screen before it's mounted, so use this option only when you're okay with that."),(0,r.yg)("img",{src:(0,o.A)("/img/hideBeforeInit.gif")}),(0,r.yg)("h3",{id:"how-to-use"},"How to use"),(0,r.yg)(i.A,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,r.yg)(l.A,{value:"js",mdxType:"TabItem"},"In native JS, you can attach class `flicking-hidden` to the viewport element and remove that on `ready` event to mimic the behavior of `hideBeforeInit`.",(0,r.yg)(s.A,{className:"html",title:"html",mdxType:"CodeBlock"},'<div id="flicking" class="flicking-viewport flicking-hidden">\n  <div class="flicking-camera">\n    ...\n  </div>\n</div>'),(0,r.yg)(s.A,{className:"js",title:"js",mdxType:"CodeBlock"},'import Flicking, { EVENTS } from "@egjs/flicking";\n\nconst flicking = new Flicking("#flicking");\nflicking.once(EVENTS.READY, () => {\n  flicking.element.classList.remove("flicking-hidden");\n}')),(0,r.yg)(l.A,{value:"react",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n'))),(0,r.yg)(l.A,{value:"vue",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<Flicking :hideBeforeInit="true" :firstPanelSize="\'200px\'">\n   {{ ... }}\n</Flicking>\n'))),(0,r.yg)(l.A,{value:"vue3",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<Flicking :hideBeforeInit="true" :firstPanelSize="\'200px\'">\n   {{ ... }}\n</Flicking>\n'))),(0,r.yg)(l.A,{value:"angular",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking [hideBeforeInit]="true" [firstPanelSize]="\'200px\'">\n  {{ ... }}\n</ngx-flicking>\n'))),(0,r.yg)(l.A,{value:"preact",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n'))),(0,r.yg)(l.A,{value:"svelte",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n')))))}h.isMDXComponent=!0}}]);