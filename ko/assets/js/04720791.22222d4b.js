(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{356:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return o}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),s=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),p=s(a),j=n,o=p["".concat(c,".").concat(j)]||p[j]||m[j]||r;return a?b.a.createElement(o,l(l({ref:t},O),{},{components:a})):b.a.createElement(o,l({ref:t},O))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var O=2;O<r;O++)c[O]=a[O];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),b=a(8),r=(a(0),a(356)),c={custom_edit_url:null},l={unversionedId:"api/ExternalPanel",id:"version-4.1.1/api/ExternalPanel",isDocsHomePage:!1,title:"ExternalPanel",description:"`ts",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.1.1/api/ExternalPanel.mdx",sourceDirName:"api",slug:"/api/ExternalPanel",permalink:"/egjs-flicking/ko/docs/4.1.1/api/ExternalPanel",editUrl:null,version:"4.1.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.1/api",previous:{title:"ElementPanel",permalink:"/egjs-flicking/ko/docs/4.1.1/api/ElementPanel"},next:{title:"Panel",permalink:"/egjs-flicking/ko/docs/4.1.1/api/Panel"}},i=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"index",id:"index",children:[]},{value:"position",id:"position",children:[]},{value:"size",id:"size",children:[]},{value:"sizeIncludingMargin",id:"sizeIncludingMargin",children:[]},{value:"height",id:"height",children:[]},{value:"margin",id:"margin",children:[]},{value:"alignPosition",id:"alignPosition",children:[]},{value:"removed",id:"removed",children:[]},{value:"range",id:"range",children:[]},{value:"toggled",id:"toggled",children:[]},{value:"toggleDirection",id:"toggleDirection",children:[]},{value:"offset",id:"offset",children:[]},{value:"progress",id:"progress",children:[]},{value:"outsetProgress",id:"outsetProgress",children:[]},{value:"visibleRatio",id:"visibleRatio",children:[]},{value:"align",id:"align",children:[]}]},{value:"Methods",id:"methods",children:[{value:"resize",id:"resize",children:[]},{value:"contains",id:"contains",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"includePosition",id:"includePosition",children:[]},{value:"includeRange",id:"includeRange",children:[]},{value:"focus",id:"focus",children:[]},{value:"prev",id:"prev",children:[]},{value:"next",id:"next",children:[]},{value:"increaseIndex",id:"increaseIndex",children:[]},{value:"decreaseIndex",id:"decreaseIndex",children:[]},{value:"increasePosition",id:"increasePosition",children:[]},{value:"decreasePosition",id:"decreasePosition",children:[]},{value:"toggle",id:"toggle",children:[]},{value:"updateCircularToggleDirection",id:"updateCircularToggleDirection",children:[]}]}],O={toc:i};function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"class ExternalPanel extends Panel\n")),Object(r.b)("p",null,"\uc2ac\ub77c\uc774\ub4dc \ub370\uc774\ud130 \ucef4\ud3ec\ub10c\ud2b8\ub85c, \ub2e8\uc77c HTMLElement\uc758 \uc815\ubcf4\ub97c \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4"),Object(r.b)("div",{className:"container"},Object(r.b)("div",{className:"row mb-2"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("strong",null,"Properties")),Object(r.b)("div",{className:"col col--6"},Object(r.b)("strong",null,"Methods"))),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("a",{href:"#index"},"index"),Object(r.b)("br",null),Object(r.b)("a",{href:"#position"},"position"),Object(r.b)("br",null),Object(r.b)("a",{href:"#size"},"size"),Object(r.b)("br",null),Object(r.b)("a",{href:"#sizeIncludingMargin"},"sizeIncludingMargin"),Object(r.b)("br",null),Object(r.b)("a",{href:"#height"},"height"),Object(r.b)("br",null),Object(r.b)("a",{href:"#margin"},"margin"),Object(r.b)("br",null),Object(r.b)("a",{href:"#alignPosition"},"alignPosition"),Object(r.b)("br",null),Object(r.b)("a",{href:"#removed"},"removed"),Object(r.b)("br",null),Object(r.b)("a",{href:"#range"},"range"),Object(r.b)("br",null),Object(r.b)("a",{href:"#toggled"},"toggled"),Object(r.b)("br",null),Object(r.b)("a",{href:"#toggleDirection"},"toggleDirection"),Object(r.b)("br",null),Object(r.b)("a",{href:"#offset"},"offset"),Object(r.b)("br",null),Object(r.b)("a",{href:"#progress"},"progress"),Object(r.b)("br",null),Object(r.b)("a",{href:"#outsetProgress"},"outsetProgress"),Object(r.b)("br",null),Object(r.b)("a",{href:"#visibleRatio"},"visibleRatio"),Object(r.b)("br",null),Object(r.b)("a",{href:"#align"},"align")),Object(r.b)("div",{className:"col col--6"},Object(r.b)("a",{href:"#resize"},"resize"),Object(r.b)("br",null),Object(r.b)("a",{href:"#contains"},"contains"),Object(r.b)("br",null),Object(r.b)("a",{href:"#destroy"},"destroy"),Object(r.b)("br",null),Object(r.b)("a",{href:"#includePosition"},"includePosition"),Object(r.b)("br",null),Object(r.b)("a",{href:"#includeRange"},"includeRange"),Object(r.b)("br",null),Object(r.b)("a",{href:"#focus"},"focus"),Object(r.b)("br",null),Object(r.b)("a",{href:"#prev"},"prev"),Object(r.b)("br",null),Object(r.b)("a",{href:"#next"},"next"),Object(r.b)("br",null),Object(r.b)("a",{href:"#increaseIndex"},"increaseIndex"),Object(r.b)("br",null),Object(r.b)("a",{href:"#decreaseIndex"},"decreaseIndex"),Object(r.b)("br",null),Object(r.b)("a",{href:"#increasePosition"},"increasePosition"),Object(r.b)("br",null),Object(r.b)("a",{href:"#decreasePosition"},"decreasePosition"),Object(r.b)("br",null),Object(r.b)("a",{href:"#toggle"},"toggle"),Object(r.b)("br",null),Object(r.b)("a",{href:"#updateCircularToggleDirection"},"updateCircularToggleDirection")))),Object(r.b)("h2",{id:"constructor"},"Constructor"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"new ExternalPanel(options, options.el, options.index, options.align, options.flicking)\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"options"),Object(r.b)("td",{parentName:"tr",align:"center"},"object"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\uc635\uc158 \uc624\ube0c\uc81d\ud2b8")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"options.el"),Object(r.b)("td",{parentName:"tr",align:"center"},"HTMLElement"),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc774 \ucc38\uc870\ud558\ub294 ",Object(r.b)("inlineCode",{parentName:"td"},"HTMLElement"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"options.index"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc758 \ucd08\uae30 \uc778\ub371\uc2a4")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"options.align"),Object(r.b)("td",{parentName:"tr",align:"center"},"Constants.ALIGN ","|"," string ","|"," number"),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc758 \ucd08\uae30 ",Object(r.b)("a",{parentName:"td",href:"Flicking#align"},"align"),"\uac12")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"options.flicking"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc774 \ucc38\uc870\ud558\ub294 ",Object(r.b)("a",{parentName:"td",href:"Flicking"},"Flicking")," \uc778\uc2a4\ud134\uc2a4")))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"index"},"index"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110\uc758 \uc778\ub371\uc2a4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"position"},"position"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110\uc758 \ud604\uc7ac \uc88c\ud45c, ",Object(r.b)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition"),"\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"size"},"size"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uce90\uc2dc\ub41c \ud06c\uae30",Object(r.b)("br",{parentName:"p"}),"\n","\uc774 \uac12\uc740 ",Object(r.b)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal"),"\uc774 ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"\uc77c \uacbd\uc6b0 ",Object(r.b)("a",{parentName:"p",href:"Panel#element"},"element"),"\uc758 ",Object(r.b)("inlineCode",{parentName:"p"},"offsetWidth"),"\uc640 \ub3d9\uc77c\ud558\uace0, ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"\uc77c \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"p"},"offsetHeight"),"\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"sizeIncludingMargin"},"sizeIncludingMargin"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"CSS ",Object(r.b)("inlineCode",{parentName:"p"},"margin"),"\uc744 \ud3ec\ud568\ud55c \ud328\ub110\uc758 \ud06c\uae30",Object(r.b)("br",{parentName:"p"}),"\n","\uc774 \uac12\uc740 ",Object(r.b)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal"),"\uc774 ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"\uc77c \uacbd\uc6b0 margin left/right\uc744 \ud3ec\ud568\ud558\uace0, ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"\uc77c \uacbd\uc6b0 margin top/bottom\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"height"},"height"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \ub192\uc774"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"margin"},"margin"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 CSS ",Object(r.b)("inlineCode",{parentName:"p"},"margin")," \uac12"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": object"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"prev"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),"\uc774 ",Object(r.b)("inlineCode",{parentName:"td"},"true"),"\uc77c \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"td"},"margin-left"),", ",Object(r.b)("inlineCode",{parentName:"td"},"false"),"\uc77c \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"td"},"margin-top"),"\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"next"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),"\uc774 ",Object(r.b)("inlineCode",{parentName:"td"},"true"),"\uc77c \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"td"},"margin-right"),", ",Object(r.b)("inlineCode",{parentName:"td"},"false"),"\uc77c \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"td"},"margin-bottom"),"\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12")))),Object(r.b)("h3",{id:"alignPosition"},"alignPosition"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110\uc758 \uc815\ub82c \uae30\uc900 \uc704\uce58. ",Object(r.b)("a",{parentName:"p",href:"Camera"},"Camera"),"\uc758 \ubdf0\ud3ec\ud2b8 \ub0b4\uc5d0\uc11c\uc758 ",Object(r.b)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition"),"\uc774 \uc704\uce58\ud574\uc57c \ud558\ub294 \uacf3\uc785\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"removed"},"removed"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110\uc774 ",Object(r.b)("a",{parentName:"p",href:"Flicking#remove"},"remove"),"\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(r.b)("h3",{id:"range"},"range"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 Bounding box \ubc94\uc704"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": object"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"min"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"Bounding box's left(",Object(r.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / top(",Object(r.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"max"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"Bounding box's right(",Object(r.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / bottom(",Object(r.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")))),Object(r.b)("h3",{id:"toggled"},"toggled"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110\uc758 \uc704\uce58\uac00 circular \ub3d9\uc791\uc5d0 \uc758\ud574 \ud1a0\uae00\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(r.b)("h3",{id:"toggleDirection"},"toggleDirection"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110\uc758 \uc704\uce58\uac00 circular \ub3d9\uc791\uc5d0 \uc758\ud574 \ud1a0\uae00\ub418\ub294 \ubc29\ud5a5"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("a",{parentName:"p",href:"DIRECTION"},"DIRECTION")),Object(r.b)("h3",{id:"offset"},"offset"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"Panel#order"},"Panel#order"),"\uc5d0 \uc758\ud55c \uc2e4\uc81c \uc704\uce58 \ubcc0\uacbd\uac12"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"progress"},"progress"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\uc774 \ud328\ub110\ub85c\ubd80\ud130 \uc774\uc804/\ub2e4\uc74c \ud328\ub110\uc73c\ub85c\uc758 \uc774\ub3d9 \uc9c4\ud589\ub960"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"outsetProgress"},"outsetProgress"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud604\uc7ac \ud328\ub110\uc774 \ubdf0\ud3ec\ud2b8 \uc601\uc5ed \ubc16\uc73c\ub85c \uc644\uc804\ud788 \uc0ac\ub77c\uc9c0\ub294 \uc9c0\uc810\uc744 \uae30\uc900\uc73c\ub85c \ud558\ub294 \uc9c4\ud589\ub3c4(prev\ubc29\ud5a5: -1, \uc120\ud0dd \uc9c0\uc810: 0, next\ubc29\ud5a5: 1)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"visibleRatio"},"visibleRatio"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ubdf0\ud3ec\ud2b8 \uc548\uc5d0\uc11c \ud328\ub110\uc774 \ubcf4\uc774\ub294 \uc601\uc5ed\uc758 \ube44\uc728"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"align"},"align"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition"),"\uc774 \ud328\ub110 \ub0b4\uc758 \uc5b4\ub514\uc5d0 \uc704\uce58\ud574\uc57c \ud558\ub294\uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"resize"},"resize"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110\uc758 \ud06c\uae30\ub97c \uac31\uc2e0\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("h3",{id:"contains"},"contains"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud574\ub2f9 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc774 \ud328\ub110\uc758 ",Object(r.b)("a",{parentName:"p",href:"Panel#element"},"element")," \ub0b4\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud328\ub110\uc758 ",Object(r.b)("a",{parentName:"li",href:"Panel#element"},"element"),"\ub0b4\uc5d0 \ud574\ub2f9 \uc5d8\ub9ac\uba3c\ud2b8 \ud3ec\ud568 \uc5ec\ubd80")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"element"),Object(r.b)("td",{parentName:"tr",align:"center"},"HTMLElement"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 HTMLElement")))),Object(r.b)("h3",{id:"destroy"},"destroy"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ub0b4\ubd80 \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654\ud558\uace0 ",Object(r.b)("a",{parentName:"p",href:"Panel#removed"},"removed"),"\ub97c ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": void"),Object(r.b)("h3",{id:"includePosition"},"includePosition"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\uc8fc\uc5b4\uc9c4 \uc88c\ud45c\uac00 \ud604\uc7ac \ud328\ub110\uc758 ",Object(r.b)("a",{parentName:"p",href:"Panel#range"},"range"),"\ub0b4\uc5d0 \uc18d\ud574\uc788\ub294\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud574\ub2f9 \uc88c\ud45c\uac00 \ud328\ub110 \uc601\uc5ed \ub0b4\uc5d0 \uc18d\ud574\uc788\ub294\uc9c0 \uc5ec\ubd80")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"pos"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 \uc88c\ud45c")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"includeMargin"),Object(r.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"},"false"),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \uc601\uc5ed\uc5d0 ",Object(r.b)("a",{parentName:"td",href:"Panel#margin"},"margin"),"\uac12\uc744 \ud3ec\ud568\uc2dc\ud0b5\ub2c8\ub2e4")))),Object(r.b)("h3",{id:"includeRange"},"includeRange"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\uc8fc\uc5b4\uc9c4 \ubc94\uc704\uac00 \uc774 \ud328\ub110 \ub0b4\ubd80\uc5d0 \uc644\uc804\ud788 \ud3ec\ud568\ub418\ub294\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud574\ub2f9 \ubc94\uc704\uac00 \ud328\ub110 \uc601\uc5ed \ub0b4\uc5d0 \uc644\uc804\ud788 \uc18d\ud574\uc788\ub294\uc9c0 \uc5ec\ubd80")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"min"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 \ucd5c\uc18c \ubc94\uc704")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"max"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 \ucd5c\ub300 \ubc94\uc704")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"includeMargin"),Object(r.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"},"false"),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \uc601\uc5ed\uc5d0 ",Object(r.b)("a",{parentName:"td",href:"Panel#margin"},"margin"),"\uac12\uc744 \ud3ec\ud568\uc2dc\ud0b5\ub2c8\ub2e4")))),Object(r.b)("h3",{id:"focus"},"focus"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"Camera"},"Camera"),"\ub97c \uc774 \ud328\ub110\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud328\ub110 \ub3c4\ub2ec\uc2dc\uc5d0 resolve\ub418\ub294 Promise")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"duration"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\uc560\ub2c8\uba54\uc774\uc158 \uc9c4\ud589 \uc2dc\uac04 (\ub2e8\uc704: ms)")))),Object(r.b)("h3",{id:"prev"},"prev"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\uc774\uc804(",Object(r.b)("inlineCode",{parentName:"p"},"index - 1"),") \ud328\ub110\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774\uc804 \ud328\ub110\uc774 \uc5c6\uc744 \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," \ubaa8\ub4dc\uac00 \ud65c\uc131\ud654\ub418\uc5c8\uc744 \ub54c \uccab\ubc88\uc9f8 \ud328\ub110\uc5d0\uc11c \uc774 \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud560 \uacbd\uc6b0 \ub9c8\uc9c0\ub9c9 \ud328\ub110\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": ",Object(r.b)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc774\uc804 \ud328\ub110")),Object(r.b)("h3",{id:"next"},"next"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ub2e4\uc74c(",Object(r.b)("inlineCode",{parentName:"p"},"index + 1"),") \ud328\ub110\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \ub2e4\uc74c \ud328\ub110\uc774 \uc5c6\uc744 \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," \ubaa8\ub4dc\uac00 \ud65c\uc131\ud654\ub418\uc5c8\uc744 \ub54c \ub9c8\uc9c0\ub9c9 \ud328\ub110\uc5d0\uc11c \uc774 \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud560 \uacbd\uc6b0 \uccab\ubc88\uc9f8 \ud328\ub110\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": ",Object(r.b)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ub2e4\uc74c \ud328\ub110")),Object(r.b)("h3",{id:"increaseIndex"},"increaseIndex"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110\uc758 \uc778\ub371\uc2a4\ub97c \uc8fc\uc5b4\uc9c4 \uac12\ub9cc\ud07c \uc99d\uac00\uc2dc\ud0b5\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"val"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"0\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc815\uc218")))),Object(r.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(r.b)("strong",null,"internal")," use only."),Object(r.b)("h3",{id:"decreaseIndex"},"decreaseIndex"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110\uc758 \uc778\ub371\uc2a4\ub97c \uc8fc\uc5b4\uc9c4 \uac12\ub9cc\ud07c \uac10\uc18c\uc2dc\ud0b5\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"val"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"0\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc815\uc218")))),Object(r.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(r.b)("strong",null,"internal")," use only."),Object(r.b)("h3",{id:"increasePosition"},"increasePosition"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110\uc758 \uc704\uce58\ub97c \uc8fc\uc5b4\uc9c4 \uac12\ub9cc\ud07c \uc99d\uac00\uc2dc\ud0b5\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"val"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"0\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc815\uc218")))),Object(r.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(r.b)("strong",null,"internal")," use only."),Object(r.b)("h3",{id:"decreasePosition"},"decreasePosition"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110\uc758\uc704\uce58\ub97c \uc8fc\uc5b4\uc9c4 \uac12\ub9cc\ud07c \uac10\uc18c\uc2dc\ud0b5\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"val"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"0\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc815\uc218")))),Object(r.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(r.b)("strong",null,"internal")," use only."),Object(r.b)("h3",{id:"toggle"},"toggle"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"toggled")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"prevPos"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"newPos"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))),Object(r.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(r.b)("strong",null,"internal")," use only."),Object(r.b)("h3",{id:"updateCircularToggleDirection"},"updateCircularToggleDirection"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(r.b)("strong",null,"internal")," use only."))}s.isMDXComponent=!0}}]);