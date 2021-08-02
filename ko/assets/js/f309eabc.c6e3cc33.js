(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{325:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return s})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return f}));var t=r(3),i=r(8),o=(r(0),r(348)),c=r(357),a=r(350),l={title:"Handling errors",id:"error-handling",slug:"/error-handling",custom_edit_url:null},s={unversionedId:"error-handling",id:"error-handling",isDocsHomePage:!1,title:"Handling errors",description:"All known Flicking errors are thrown as FlickingError with a code property set as listed on the ERROR_CODE.",source:"@site/docs/error-handling.mdx",sourceDirName:".",slug:"/error-handling",permalink:"/egjs-flicking/ko/docs/next/error-handling",editUrl:null,version:"current",frontMatter:{title:"Handling errors",id:"error-handling",slug:"/error-handling",custom_edit_url:null},sidebar:"docs",previous:{title:"Listening to Events",permalink:"/egjs-flicking/ko/docs/next/listening-to-events"},next:{title:"Polyfills",permalink:"/egjs-flicking/ko/docs/next/polyfills"}},u=[],d={toc:u};function f(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All known Flicking errors are thrown as ",Object(o.b)(c.a,{to:Object(a.a)("docs/api/FlickingError"),mdxType:"Link"},"FlickingError")," with a `code` property set as listed on the ",Object(o.b)(c.a,{to:Object(a.a)("docs/api/ERROR_CODE"),mdxType:"Link"},"ERROR_CODE"),"."),Object(o.b)("p",null,"A common use-case for this is when you're calling a ",Object(o.b)(c.a,{to:Object(a.a)("docs/api/Flicking#prev"),mdxType:"Link"},"prev")," / ",Object(o.b)(c.a,{to:Object(a.a)("docs/api/Flicking#next"),mdxType:"Link"},"next")," / ",Object(o.b)(c.a,{to:Object(a.a)("docs/api/Flicking#moveTo"),mdxType:"Link"},"moveTo")," of Flicking which can throw an error when Flicking's already animating."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import { FlickingError, ERROR_CODE } from "@egjs/flicking";\n\ntry {\n  await flicking.next();\n} catch (err) {\n  if (err instanceof FlickingError) {\n    if (err.code === ERROR_CODE.ANIMATION_ALREADY_PLAYING) {\n      console.error("Animation is already playing!");\n    } else if (err.code === ERROR_CODE.ANIMATION_INTERRUPTED) {\n      console.error("Animation is interrupted by user.");\n    }\n  }\n}\n')),Object(o.b)("p",null,"See all possible error codes at ",Object(o.b)(c.a,{to:Object(a.a)("docs/api/ERROR_CODE"),mdxType:"Link"},"ERROR_CODE"),"."))}f.isMDXComponent=!0},348:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return b}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=t,b=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return r?i.a.createElement(b,a(a({ref:n},s),{},{components:r})):i.a.createElement(b,a({ref:n},s))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var s=2;s<o;s++)c[s]=r[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},350:function(e,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return c}));var t=r(16),i=r(356);function o(){var e=Object(t.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var o=void 0===t?{}:t,c=o.forcePrependBaseUrl,a=void 0!==c&&c,l=o.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(a)return n+r;var u=r.startsWith(n)?r:n+r.replace(/^\//,"");return s?e+u:u}(o,r,e,n)}}}function c(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},356:function(e,n,r){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!t(e)}r.d(n,"b",(function(){return t})),r.d(n,"a",(function(){return i}))},357:function(e,n,r){"use strict";var t=r(8),i=r(0),o=r.n(i),c=r(10),a=r(356),l=r(7),s=Object(i.createContext)({collectLink:function(){}}),u=r(350);n.a=function(e){var n,r,d,f=e.isNavLink,p=e.to,b=e.href,O=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],m=e.autoAddBaseUrl,j=void 0===m||m,y=Object(t.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(u.b)().withBaseUrl,k=Object(i.useContext)(s),w=p||b,E=Object(a.a)(w),R=null==w?void 0:w.replace("pathname://",""),x=void 0!==R?(r=R,j&&function(e){return e.startsWith("/")}(r)?h(r):r):void 0,C=Object(i.useRef)(!1),T=f?c.e:c.c,D=l.a.canUseIntersectionObserver;Object(i.useEffect)((function(){return!D&&E&&null!=x&&window.docusaurus.prefetch(x),function(){D&&d&&d.disconnect()}}),[x,D,E]);var A=null!==(n=null==x?void 0:x.startsWith("#"))&&void 0!==n&&n,P=!x||!E||A;return x&&E&&!A&&!v&&k.collectLink(x),P?o.a.createElement("a",Object.assign({href:x},w&&!E&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(T,Object.assign({},y,{onMouseEnter:function(){C.current||null==x||(window.docusaurus.preload(x),C.current=!0)},innerRef:function(e){var n,r;D&&e&&E&&(n=e,r=function(){null!=x&&window.docusaurus.prefetch(x)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(n),d.disconnect(),r())}))}))).observe(n))},to:x||""},f&&{isActive:g,activeClassName:O}))}}}]);