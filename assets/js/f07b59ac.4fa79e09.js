(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{332:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),b=(n(0),n(356)),c={custom_edit_url:null},l={unversionedId:"api/State",id:"api/State",isDocsHomePage:!1,title:"State",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/docs/api/State.mdx",sourceDirName:"api",slug:"/api/State",permalink:"/egjs-flicking/docs/next/api/State",editUrl:null,version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"IdleState",permalink:"/egjs-flicking/docs/next/api/IdleState"},next:{title:"AnchorPoint",permalink:"/egjs-flicking/docs/next/api/AnchorPoint"}},i=[{value:"Properties",id:"properties",children:[{value:"holding",id:"holding",children:[]},{value:"animating",id:"animating",children:[]},{value:"delta",id:"delta",children:[]},{value:"targetPanel",id:"targetPanel",children:[]}]},{value:"Methods",id:"methods",children:[{value:"onEnter",id:"onEnter",children:[]},{value:"onHold",id:"onHold",children:[]},{value:"onChange",id:"onChange",children:[]},{value:"onRelease",id:"onRelease",children:[]},{value:"onAnimationEnd",id:"onAnimationEnd",children:[]},{value:"onFinish",id:"onFinish",children:[]}]}],o={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"class State\n")),Object(b.b)("p",null,"A component that shows the current status of the user input or the animation"),Object(b.b)("div",{className:"container"},Object(b.b)("div",{className:"row mb-2"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Properties")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Methods"))),Object(b.b)("div",{className:"row"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#holding"},"holding"),Object(b.b)("br",null),Object(b.b)("a",{href:"#animating"},"animating"),Object(b.b)("br",null),Object(b.b)("a",{href:"#delta"},"delta"),Object(b.b)("br",null),Object(b.b)("a",{href:"#targetPanel"},"targetPanel")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#onEnter"},"onEnter"),Object(b.b)("br",null),Object(b.b)("a",{href:"#onHold"},"onHold"),Object(b.b)("br",null),Object(b.b)("a",{href:"#onChange"},"onChange"),Object(b.b)("br",null),Object(b.b)("a",{href:"#onRelease"},"onRelease"),Object(b.b)("br",null),Object(b.b)("a",{href:"#onAnimationEnd"},"onAnimationEnd"),Object(b.b)("br",null),Object(b.b)("a",{href:"#onFinish"},"onFinish")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"holding"},"holding"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Whether user is clicking or touching"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h3",{id:"animating"},"animating"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Whether Flicking's animating"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h3",{id:"delta"},"delta"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A sum of delta values of change events from the last hold event of Axes"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"targetPanel"},"targetPanel"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A panel to set as ",Object(b.b)("a",{parentName:"p",href:"Control#activePanel"},"Control#activePanel")," after the animation is finished"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"onEnter"},"onEnter"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"An callback which is called when state has changed to this state"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"prevState"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"State"},"State")),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An previous state")))),Object(b.b)("h3",{id:"onHold"},"onHold"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"An event handler for Axes's ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-hold"},"hold")," event"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-hold"},"hold")," event of Axes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(b.b)("td",{parentName:"tr",align:"center"},"function"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),Object(b.b)("h3",{id:"onChange"},"onChange"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"An event handler for Axes's ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-change"},"change")," event"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-change"},"change")," event of Axes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(b.b)("td",{parentName:"tr",align:"center"},"function"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),Object(b.b)("h3",{id:"onRelease"},"onRelease"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"An event handler for Axes's ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of Axes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(b.b)("td",{parentName:"tr",align:"center"},"function"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),Object(b.b)("h3",{id:"onAnimationEnd"},"onAnimationEnd"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"An event handler for Axes's ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-animationEnd"},"animationEnd")," event"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-animationEnd"},"animationEnd")," event of Axes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(b.b)("td",{parentName:"tr",align:"center"},"function"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),Object(b.b)("h3",{id:"onFinish"},"onFinish"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"An event handler for Axes's ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-finish"},"finish")," event"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-finish"},"finish")," event of Axes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(b.b)("td",{parentName:"tr",align:"center"},"function"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))))}p.isMDXComponent=!0},356:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(n),d=a,m=O["".concat(c,".").concat(d)]||O[d]||j[d]||b;return n?r.a.createElement(m,l(l({ref:t},o),{},{components:n})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<b;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);