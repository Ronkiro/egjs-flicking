(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),c=(n(0),n(348)),b={custom_edit_url:null},i={unversionedId:"api/ERROR_CODE",id:"version-4.1.0/api/ERROR_CODE",isDocsHomePage:!1,title:"ERROR_CODE",description:"`ts",source:"@site/versioned_docs/version-4.1.0/api/ERROR_CODE.mdx",sourceDirName:"api",slug:"/api/ERROR_CODE",permalink:"/egjs-flicking/docs/4.1.0/api/ERROR_CODE",editUrl:null,version:"4.1.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.0/api",previous:{title:"POSITION_KEY",permalink:"/egjs-flicking/docs/4.1.0/api/POSITION_KEY"},next:{title:"EVENTS",permalink:"/egjs-flicking/docs/4.1.0/api/EVENTS"}},o=[{value:"ERROR_CODE",id:"ERROR_CODE",children:[]}],l={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"const ERROR_CODE\n")),Object(c.b)("h3",{id:"ERROR_CODE"},"ERROR_CODE"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"Error codes of ",Object(c.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError"),". Below are the conditions where each error code occurs."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Type"),": object"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"WRONG_TYPE"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"Parameter type is wrong")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ELEMENT_NOT_FOUND"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"Element is not found inside page with the given CSS selector")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"VAL_MUST_NOT_NULL"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"Expected non-null value, but given ",Object(c.b)("inlineCode",{parentName:"td"},"null")," or ",Object(c.b)("inlineCode",{parentName:"td"},"undefined"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"NOT_ATTACHED_TO_FLICKING"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"When Flicking's component is not initialized (i.e. ",Object(c.b)("a",{parentName:"td",href:"Flicking#init"},"Flicking#init")," is not called)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"WRONG_OPTION"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"One of the options is wrong")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"INDEX_OUT_OF_RANGE"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"When the given index is out of possible range")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"POSITION_NOT_REACHABLE"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"When ",Object(c.b)("a",{parentName:"td",href:"Control#moveToPosition"},"Control#moveToPosition"),"'s position parameter is out of possible range.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"TRANSFORM_NOT_SUPPORTED"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"CSS ",Object(c.b)("inlineCode",{parentName:"td"},"transform")," property is not available(<=IE8)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"STOP_CALLED_BY_USER"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"When the event's ",Object(c.b)("inlineCode",{parentName:"td"},"stop()")," is called by user.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ANIMATION_INTERRUPTED"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"When the animation is interrupted by user.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ANIMATION_ALREADY_PLAYING"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"When the animation is already playing.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"NOT_ALLOWED_IN_FRAMEWORK"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"When the non-allowed method is called from frameworks (React, Angular, Vue...)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"NOT_INITIALIZED"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"When the ",Object(c.b)("a",{parentName:"td",href:"Flicking#init"},"Flicking#init")," is not called before but is needed")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"NO_ACTIVE"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"When there're no active panel that flicking has selected. This may be due to the absence of any panels")))))}p.isMDXComponent=!0},348:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},O=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),O=p(n),d=r,u=O["".concat(b,".").concat(d)]||O[d]||m[d]||c;return n?a.a.createElement(u,i(i({ref:t},l),{},{components:n})):a.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var l=2;l<c;l++)b[l]=n[l];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);