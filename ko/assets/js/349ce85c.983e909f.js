"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8320],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(t),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||l;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(87462),a=t(67294),l=t(72389),i=t(79443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(63616),s=t(86010),u="tabItem_vU9c";function p(e){var n,t,l,i=e.lazy,p=e.block,f=e.defaultValue,m=e.values,d=e.groupId,g=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,c.lx)(v,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===f?f:null!=(n=null!=f?f:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=k[0])?void 0:l.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),x=y.tabGroupChoices,N=y.setTabGroupChoices,T=(0,a.useState)(b),j=T[0],w=T[1],F=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=x[d];null!=E&&E!==j&&v.some((function(e){return e.value===E}))&&w(E)}var P=function(e){var n=e.currentTarget,t=F.indexOf(n),r=v[t].value;r!==j&&(O(n),w(r),null!=d&&N(d,r))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=F.indexOf(e.currentTarget)+1;t=F[r]||F[0];break;case"ArrowLeft":var a=F.indexOf(e.currentTarget)-1;t=F[a]||F[F.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},g)},v.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return F.push(e)},onKeyDown:C,onFocus:P,onClick:P},l,{className:(0,s.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(k.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function f(e){var n=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},84778:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return f},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=t(39960),o=t(44996),c=t(26396),s=t(58215),u=["components"],p={title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},f=void 0,m={unversionedId:"using-the-methods",id:"version-4.4.2/using-the-methods",title:"Using the Methods",description:"<Tabs",source:"@site/versioned_docs/version-4.4.2/using-the-methods.mdx",sourceDirName:".",slug:"/using-the-methods",permalink:"/egjs-flicking/ko/docs/4.4.2/using-the-methods",editUrl:null,tags:[],version:"4.4.2",frontMatter:{title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},sidebar:"version-4.4.2/docs",previous:{title:"Quick Start",permalink:"/egjs-flicking/ko/docs/4.4.2/quick-start"},next:{title:"Listening to Events",permalink:"/egjs-flicking/ko/docs/4.4.2/listening-to-events"}},d=[],g={toc:d};function k(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(c.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("p",null,"You can call methods directly from the Flicking instance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#el", options);\n\nflicking.next();\n'))),(0,l.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("p",null,"You can call methods of Flicking by getting a ",(0,l.kt)("inlineCode",{parentName:"p"},"ref")," of Flicking"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { createRef, Component } from "react";\nimport Flicking, { FlickingError } from "@egjs/react-flicking";\n\nclass MyComponent extends Component {\n  constructor(props) {\n    super(props);\n    this.flicking = createRef();\n    this.panels = [0, 1, 2];\n  }\n  render() {\n    return <Flicking ref={this.flicking}>\n      { this.panels.map(idx => <div className="panel" key={idx}>{idx}</div>) }\n    </Flicking>;\n  }\n  async moveToNextPanel() {\n    try {\n      await this.flicking.next();\n    } catch (e) {\n      console.log(e instanceof FlickingError); // true\n      console.log(e.code);\n    }\n  }\n}\n')),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),(0,l.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("p",null,"You can access instance of Flicking component with the ",(0,l.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<Flicking ref="flicking"></Flicking>\n')),(0,l.kt)("p",null,"Then call methods of it like"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"this.$refs.flicking.next();\n"))),(0,l.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,l.kt)("p",null,"You can access instance of Flicking component with the ",(0,l.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<Flicking ref="flicking"></Flicking>\n')),(0,l.kt)("p",null,"Then call methods of it like"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"this.$refs.flicking.next();\n"))),(0,l.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("p",null,"There're few ways to interact with child component in Angular.",(0,l.kt)("br",{parentName:"p"}),"\n","See ",(0,l.kt)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with Flicking."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'@Component({\n  selector: \'flicking-parent\',\n  template: `\n    <button (click)="flick.prev()">Prev</button>\n    <button (click)="flick.next()">Next</button>\n    <ngx-flicking #flick></ngx-flicking>\n  `\n})\nexport class FlickingParent { }\n'))),(0,l.kt)(s.Z,{value:"preact",mdxType:"TabItem"},(0,l.kt)("p",null,"You can call methods of Flicking by getting a ",(0,l.kt)("inlineCode",{parentName:"p"},"ref")," of Flicking"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { createRef, render } from "preact";\nimport Flicking, { FlickingError } from "@egjs/preact-flicking";\n\nconst ref = createRef();\nrender(<Flicking ref={ref}>{...}</Flicking>, dom);\n\nconst flicking = ref.current;\nflicking.next();\n')),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),(0,l.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,l.kt)("p",null,"You can use ",(0,l.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/bind-this"},"bind:this")," syntax of svelte to get the reference of Flicking."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";\n  import "@egjs/svelte-flicking/dist/flicking.css";\n\n  let flicking: Flicking;\n<\/script>\n\n<Flicking bind:this={flicking}>\n  \x3c!-- Those will render "div" element --\x3e\n  <FlickingPanel>0</FlickingPanel>\n  <FlickingPanel>1</FlickingPanel>\n  <FlickingPanel>2</FlickingPanel>\n</Flicking>\n<button on:click{() => { flicking.next(); }} />\n')))),(0,l.kt)("p",null,"See all available methods at our ",(0,l.kt)(i.Z,{to:(0,o.Z)("docs/api/Flicking#methods"),mdxType:"Link"},"API")," page."))}k.isMDXComponent=!0}}]);