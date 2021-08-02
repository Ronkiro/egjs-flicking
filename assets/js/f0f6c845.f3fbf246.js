(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{322:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),b=(a(0),a(348)),c={custom_edit_url:null},l={unversionedId:"api/AxesController",id:"version-4.1.1/api/AxesController",isDocsHomePage:!1,title:"AxesController",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/versioned_docs/version-4.1.1/api/AxesController.mdx",sourceDirName:"api",slug:"/api/AxesController",permalink:"/egjs-flicking/docs/4.1.1/api/AxesController",editUrl:null,version:"4.1.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.1/api",previous:{title:"LinearCamera",permalink:"/egjs-flicking/docs/4.1.1/api/LinearCamera"},next:{title:"Control",permalink:"/egjs-flicking/docs/4.1.1/api/Control"}},i=[{value:"Properties",id:"properties",children:[{value:"axes",id:"axes",children:[]},{value:"state",id:"state",children:[]},{value:"animatingContext",id:"animatingContext",children:[]},{value:"enabled",id:"enabled",children:[]},{value:"position",id:"position",children:[]},{value:"bounce",id:"bounce",children:[]}]},{value:"Methods",id:"methods",children:[{value:"init",id:"init",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"enable",id:"enable",children:[]},{value:"disable",id:"disable",children:[]},{value:"update",id:"update",children:[]},{value:"animateTo",id:"animateTo",children:[]}]}],o={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"class AxesController\n")),Object(b.b)("p",null,"A controller that handles the ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes")," events"),Object(b.b)("div",{className:"container"},Object(b.b)("div",{className:"row mb-2"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Properties")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Methods"))),Object(b.b)("div",{className:"row"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#axes"},"axes"),Object(b.b)("br",null),Object(b.b)("a",{href:"#state"},"state"),Object(b.b)("br",null),Object(b.b)("a",{href:"#animatingContext"},"animatingContext"),Object(b.b)("br",null),Object(b.b)("a",{href:"#enabled"},"enabled"),Object(b.b)("br",null),Object(b.b)("a",{href:"#position"},"position"),Object(b.b)("br",null),Object(b.b)("a",{href:"#bounce"},"bounce")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#init"},"init"),Object(b.b)("br",null),Object(b.b)("a",{href:"#destroy"},"destroy"),Object(b.b)("br",null),Object(b.b)("a",{href:"#enable"},"enable"),Object(b.b)("br",null),Object(b.b)("a",{href:"#disable"},"disable"),Object(b.b)("br",null),Object(b.b)("a",{href:"#update"},"update"),Object(b.b)("br",null),Object(b.b)("a",{href:"#animateTo"},"animateTo")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"axes"},"axes"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"An ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," instance"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": Axes"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"See"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html"},"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html"))),Object(b.b)("h3",{id:"state"},"state"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"A activated ",Object(b.b)("a",{parentName:"p",href:"State"},"State")," that shows the current status of the user input or the animation"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": ",Object(b.b)("a",{parentName:"p",href:"State"},"State")),Object(b.b)("h3",{id:"animatingContext"},"animatingContext"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A context of the current animation playing"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": object"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"start"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"A start position of the animation")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"end"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"A end position of the animation")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"offset"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"camera offset")))),Object(b.b)("h3",{id:"enabled"},"enabled"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A Boolean indicating whether the user input is enabled"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h3",{id:"position"},"position"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Current position value in ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," instance"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"bounce"},"bounce"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Actual bounce size(px)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": Array","<","number",">"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Initialize AxesController"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")))),Object(b.b)("h3",{id:"destroy"},"destroy"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Destroy AxesController and return to initial state"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("h3",{id:"enable"},"enable"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Enable input from the user (mouse/touch)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"disable"},"disable"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Disable input from the user (mouse/touch)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"update"},"update"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Update ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes"),"'s state"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",Object(b.b)("a",{parentName:"p",href:"AxesController#init"},"init")," is not called before"),Object(b.b)("h3",{id:"animateTo"},"animateTo"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Run Axes's ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#setTo"},"setTo")," using the given position"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target position")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"position"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A position to move")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"duration"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"If provided, it'll use its ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#setTo"},"setTo")," method instead")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"code"),Object(b.b)("th",{parentName:"tr",align:null},"condition"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),Object(b.b)("td",{parentName:"tr",align:null},"When ",Object(b.b)("a",{parentName:"td",href:"Control#init"},"init")," is not called before")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),Object(b.b)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")))))}s.isMDXComponent=!0},348:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=s(a),j=n,m=p["".concat(c,".").concat(j)]||p[j]||O[j]||b;return a?r.a.createElement(m,l(l({ref:t},o),{},{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);