(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{348:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},v=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(t),v=a,d=b["".concat(l,".").concat(v)]||b[v]||p[v]||i;return t?r.a.createElement(d,o(o({ref:n},s),{},{components:t})):r.a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=v;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},349:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},350:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return l}));var a=t(16),r=t(356);function i(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,c=i.absolute,s=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(o)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+u:u}(i,t,e,n)}}}function l(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},351:function(e,n,t){"use strict";var a=t(0),r=t(352);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},352:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},353:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(351),l=t(349),o=t(60),c=t.n(o);var s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,o=e.defaultValue,b=e.values,p=e.groupId,v=e.className,d=Object(i.a)(),f=d.tabGroupChoices,m=d.setTabGroupChoices,g=Object(a.useState)(o),O=g[0],j=g[1],h=a.Children.toArray(e.children),k=[];if(null!=p){var y=f[p];null!=y&&y!==O&&b.some((function(e){return e.value===y}))&&j(y)}var N=function(e){var n=e.currentTarget,t=k.indexOf(n),a=b[t].value;j(a),null!=p&&(m(p,a),setTimeout((function(){var e,t,a,r,i,l,o,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,t>=0&&i<=s&&r<=o&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c.a.tabItemActive),setTimeout((function(){return n.classList.remove(c.a.tabItemActive)}),2e3))}),150))},E=function(e){var n,t;switch(e.keyCode){case u:var a=k.indexOf(e.target)+1;t=k[a]||k[0];break;case s:var r=k.indexOf(e.target)-1;t=k[r]||k[k.length-1]}null===(n=t)||void 0===n||n.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},v)},b.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:E,onFocus:N,onClick:N},t)}))),n?Object(a.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},354:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},356:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},357:function(e,n,t){"use strict";var a=t(8),r=t(0),i=t.n(r),l=t(10),o=t(356),c=t(7),s=Object(r.createContext)({collectLink:function(){}}),u=t(350);n.a=function(e){var n,t,b,p=e.isNavLink,v=e.to,d=e.href,f=e.activeClassName,m=e.isActive,g=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,j=void 0===O||O,h=Object(a.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=Object(u.b)().withBaseUrl,y=Object(r.useContext)(s),N=v||d,E=Object(o.a)(N),w=null==N?void 0:N.replace("pathname://",""),x=void 0!==w?(t=w,j&&function(e){return e.startsWith("/")}(t)?k(t):t):void 0,T=Object(r.useRef)(!1),C=p?l.e:l.c,P=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!P&&E&&null!=x&&window.docusaurus.prefetch(x),function(){P&&b&&b.disconnect()}}),[x,P,E]);var F=null!==(n=null==x?void 0:x.startsWith("#"))&&void 0!==n&&n,I=!x||!E||F;return x&&E&&!F&&!g&&y.collectLink(x),I?i.a.createElement("a",Object.assign({href:x},N&&!E&&{target:"_blank",rel:"noopener noreferrer"},h)):i.a.createElement(C,Object.assign({},h,{onMouseEnter:function(){T.current||null==x||(window.docusaurus.preload(x),T.current=!0)},innerRef:function(e){var n,t;P&&e&&E&&(n=e,t=function(){null!=x&&window.docusaurus.prefetch(x)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(n),b.disconnect(),t())}))}))).observe(n))},to:x||""},p&&{isActive:m,activeClassName:f}))}},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(8),i=(t(0),t(348)),l=t(357),o=t(350),c=t(353),s=t(354),u={title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},b={unversionedId:"listening-to-events",id:"listening-to-events",isDocsHomePage:!1,title:"Listening to Events",description:"<Tabs",source:"@site/docs/listening-to-events.mdx",sourceDirName:".",slug:"/listening-to-events",permalink:"/egjs-flicking/docs/next/listening-to-events",editUrl:null,version:"current",frontMatter:{title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},sidebar:"docs",previous:{title:"Using the Methods",permalink:"/egjs-flicking/docs/next/using-the-methods"},next:{title:"Handling errors",permalink:"/egjs-flicking/docs/next/error-handling"}},p=[],v={toc:p};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},v,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(c.a,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"js",mdxType:"TabItem"},Object(i.b)("p",null,"You can listen to Flicking's events with ",Object(i.b)("a",{parentName:"p",href:"api/Flicking#on"},"Flicking#on")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// If you're using a package manager\nimport { EVENTS } from \"@egjs/flicking\";\n// Or, if you're using a CDN\nconst EVENTS = Flicking.EVENTS;\n\nflicking.on(EVENTS.MOVE, evt => {\n  console.log(evt);\n})\n"))),Object(i.b)(s.a,{value:"react",mdxType:"TabItem"},Object(i.b)("p",null,"All events are prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"on-"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"camelCase"),"d."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/react-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n'))),Object(i.b)(s.a,{value:"vue",mdxType:"TabItem"},Object(i.b)("p",null,"All event names are renamed to ",Object(i.b)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",Object(i.b)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<Flicking\n  @ready="e => { ... }"\n  @move-end="e => { ... }"\n  v-on:need-panel="e => { ... }"\n>\n   {{ ... }}\n</Flicking>\n'))),Object(i.b)(s.a,{value:"vue3",mdxType:"TabItem"},Object(i.b)("p",null,"All event names are renamed to ",Object(i.b)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",Object(i.b)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<Flicking\n  @ready="e => { ... }"\n  @move-end="e => { ... }"\n  v-on:need-panel="e => { ... }"\n>\n   {{ ... }}\n</Flicking>\n'))),Object(i.b)(s.a,{value:"angular",mdxType:"TabItem"},Object(i.b)("p",null,"You can listen events of the ",Object(i.b)("inlineCode",{parentName:"p"},"ngx-flicking")," using Angular's ",Object(i.b)("a",{parentName:"p",href:"https://angular.io/guide/event-binding"},"event binding"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking\n  [options]="{ needPanelThreshold: 50, renderOnlyVisible: true }"\n  (needPanel)="onNeedPanel($event)">\n  {{ ... }}\n</ngx-flicking>\n'))),Object(i.b)(s.a,{value:"preact",mdxType:"TabItem"},Object(i.b)("p",null,"All events are prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"on-"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"camelCase"),"d."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/preact-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n'))),Object(i.b)(s.a,{value:"svelte",mdxType:"TabItem"},Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"on:eventName")," syntax to listen Flicking events.",Object(i.b)("br",{parentName:"p"}),"\n","All event properties are available in the event's ",Object(i.b)("inlineCode",{parentName:"p"},"detail")," property."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";\n  import "@egjs/svelte-flicking/dist/flicking.css";\n<\/script>\n\n<Flicking on:ready={e => {\n  console.log("READY!");\n}} on:move={e => {\n  // Event properties are placed in "detail"\n  console.log(e.detail);\n}}>\n  \x3c!-- Those will render "div" element --\x3e\n  <FlickingPanel>0</FlickingPanel>\n  <FlickingPanel>1</FlickingPanel>\n  <FlickingPanel>2</FlickingPanel>\n</Flicking>\n')))),Object(i.b)("p",null,"See all available events at ",Object(i.b)(l.a,{to:Object(o.a)("docs/api/Flicking#events"),mdxType:"Link"},"Flicking#events"),"."))}d.isMDXComponent=!0}}]);