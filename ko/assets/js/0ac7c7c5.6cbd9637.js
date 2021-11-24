(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return f})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),c=(n(0),n(410)),i=n(418),o=n(412),l=n(414),s=n(415),u={title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},f={unversionedId:"using-the-methods",id:"version-4.1.1/using-the-methods",isDocsHomePage:!1,title:"Using the Methods",description:"<Tabs",source:"@site/versioned_docs/version-4.1.1/using-the-methods.mdx",sourceDirName:".",slug:"/using-the-methods",permalink:"/egjs-flicking/ko/docs/4.1.1/using-the-methods",editUrl:null,version:"4.1.1",frontMatter:{title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},sidebar:"version-4.1.1/docs",previous:{title:"Quick Start",permalink:"/egjs-flicking/ko/docs/4.1.1/quick-start"},next:{title:"Listening to Events",permalink:"/egjs-flicking/ko/docs/4.1.1/listening-to-events"}},p=[],b={toc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(l.a,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"js",mdxType:"TabItem"},Object(c.b)("p",null,"You can call methods directly from the Flicking instance."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#el", options);\n\nflicking.next();\n'))),Object(c.b)(s.a,{value:"react",mdxType:"TabItem"},Object(c.b)("p",null,"You can call methods of Flicking by getting a ",Object(c.b)("inlineCode",{parentName:"p"},"ref")," of Flicking"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'import { createRef, Component } from "react";\nimport Flicking, { FlickingError } from "@egjs/react-flicking";\n\nclass MyComponent extends Component {\n  constructor(props) {\n    super(props);\n    this.flicking = createRef();\n    this.panels = [0, 1, 2];\n  }\n  render() {\n    return <Flicking ref={this.flicking}>\n      { this.panels.map(idx => <div className="panel" key={idx}>{idx}</div>) }\n    </Flicking>;\n  }\n  async moveToNextPanel() {\n    try {\n      await this.flicking.next();\n    } catch (e) {\n      console.log(e instanceof FlickingError); // true\n      console.log(e.code);\n    }\n  }\n}\n')),Object(c.b)("p",null,"See ",Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),Object(c.b)(s.a,{value:"vue",mdxType:"TabItem"},Object(c.b)("p",null,"You can access instance of Flicking component with the ",Object(c.b)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'<Flicking ref="flicking"></Flicking>\n')),Object(c.b)("p",null,"Then call methods of it like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"this.$refs.flicking.next();\n"))),Object(c.b)(s.a,{value:"vue3",mdxType:"TabItem"},Object(c.b)("p",null,"You can access instance of Flicking component with the ",Object(c.b)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'<Flicking ref="flicking"></Flicking>\n')),Object(c.b)("p",null,"Then call methods of it like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"this.$refs.flicking.next();\n"))),Object(c.b)(s.a,{value:"angular",mdxType:"TabItem"},Object(c.b)("p",null,"There're few ways to interact with child component in Angular.",Object(c.b)("br",{parentName:"p"}),"\n","See ",Object(c.b)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with Flicking."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'@Component({\n  selector: \'flicking-parent\',\n  template: `\n    <button (click)="flick.prev()">Prev</button>\n    <button (click)="flick.next()">Next</button>\n    <ngx-flicking #flick></ngx-flicking>\n  `\n})\nexport class FlickingParent { }\n'))),Object(c.b)(s.a,{value:"preact",mdxType:"TabItem"},Object(c.b)("p",null,"You can call methods of Flicking by getting a ",Object(c.b)("inlineCode",{parentName:"p"},"ref")," of Flicking"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},'import { createRef, render } from "preact";\nimport Flicking, { FlickingError } from "@egjs/preact-flicking";\n\nconst ref = createRef();\nrender(<Flicking ref={ref}>{...}</Flicking>, dom);\n\nconst flicking = ref.current;\nflicking.next();\n')),Object(c.b)("p",null,"See ",Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info."))),Object(c.b)("p",null,"See all available methods at our ",Object(c.b)(i.a,{to:Object(o.a)("docs/api/Flicking#methods"),mdxType:"Link"},"API")," page."))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),b=r,d=f["".concat(i,".").concat(b)]||f[b]||p[b]||c;return n?a.a.createElement(d,o(o({ref:t},s),{},{components:n})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},411:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},412:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(16),a=n(413);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var c=void 0===r?{}:r,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(c,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},413:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},414:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(416),i=n(411),o=n(60),l=n.n(o);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,f=e.values,p=e.groupId,b=e.className,d=Object(c.a)(),m=d.tabGroupChoices,g=d.setTabGroupChoices,v=Object(r.useState)(o),h=v[0],j=v[1],O=r.Children.toArray(e.children),k=[];if(null!=p){var y=m[p];null!=y&&y!==h&&f.some((function(e){return e.value===y}))&&j(y)}var w=function(e){var t=e.currentTarget,n=k.indexOf(t),r=f[n].value;j(r),null!=p&&(g(p,r),setTimeout((function(){var e,n,r,a,c,i,o,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,c=e.right,i=window,o=i.innerHeight,s=i.innerWidth,n>=0&&c<=s&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case s:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},415:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},416:function(e,t,n){"use strict";var r=n(0),a=n(417);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},417:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},418:function(e,t,n){"use strict";var r=n(8),a=n(0),c=n.n(a),i=n(10),o=n(413),l=n(7),s=Object(a.createContext)({collectLink:function(){}}),u=n(412);t.a=function(e){var t,n,f,p=e.isNavLink,b=e.to,d=e.href,m=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,j=void 0===h||h,O=Object(r.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=Object(u.b)().withBaseUrl,y=Object(a.useContext)(s),w=b||d,x=Object(o.a)(w),N=null==w?void 0:w.replace("pathname://",""),C=void 0!==N?(n=N,j&&function(e){return e.startsWith("/")}(n)?k(n):n):void 0,T=Object(a.useRef)(!1),E=p?i.e:i.c,F=l.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!F&&x&&null!=C&&window.docusaurus.prefetch(C),function(){F&&f&&f.disconnect()}}),[C,F,x]);var I=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,P=!C||!x||I;return C&&x&&!I&&!v&&y.collectLink(C),P?c.a.createElement("a",Object.assign({href:C},w&&!x&&{target:"_blank",rel:"noopener noreferrer"},O)):c.a.createElement(E,Object.assign({},O,{onMouseEnter:function(){T.current||null==C||(window.docusaurus.preload(C),T.current=!0)},innerRef:function(e){var t,n;F&&e&&x&&(t=e,n=function(){null!=C&&window.docusaurus.prefetch(C)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:C||""},p&&{isActive:g,activeClassName:m}))}}}]);