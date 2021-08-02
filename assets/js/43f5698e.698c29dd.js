(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),b=(a(0),a(348)),c={custom_edit_url:null},l={unversionedId:"api/Camera",id:"version-4.2.0/api/Camera",isDocsHomePage:!1,title:"Camera",description:"`ts",source:"@site/versioned_docs/version-4.2.0/api/Camera.mdx",sourceDirName:"api",slug:"/api/Camera",permalink:"/egjs-flicking/docs/api/Camera",editUrl:null,version:"4.2.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.2.0/api",previous:{title:"BoundCamera",permalink:"/egjs-flicking/docs/api/BoundCamera"},next:{title:"CircularCamera",permalink:"/egjs-flicking/docs/api/CircularCamera"}},i=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"element",id:"element",children:[]},{value:"position",id:"position",children:[]},{value:"alignPosition",id:"alignPosition",children:[]},{value:"offset",id:"offset",children:[]},{value:"range",id:"range",children:[]},{value:"rangeDiff",id:"rangeDiff",children:[]},{value:"visiblePanels",id:"visiblePanels",children:[]},{value:"visibleRange",id:"visibleRange",children:[]},{value:"anchorPoints",id:"anchorPoints",children:[]},{value:"controlParams",id:"controlParams",children:[]},{value:"atEdge",id:"atEdge",children:[]},{value:"size",id:"size",children:[]},{value:"progress",id:"progress",children:[]},{value:"align",id:"align",children:[]}]},{value:"Methods",id:"methods",children:[{value:"updateRange",id:"updateRange",children:[]},{value:"init",id:"init",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"lookAt",id:"lookAt",children:[]},{value:"getPrevAnchor",id:"getPrevAnchor",children:[]},{value:"getNextAnchor",id:"getNextAnchor",children:[]},{value:"getProgressInPanel",id:"getProgressInPanel",children:[]},{value:"findAnchorIncludePosition",id:"findAnchorIncludePosition",children:[]},{value:"findNearestAnchor",id:"findNearestAnchor",children:[]},{value:"clampToReachablePosition",id:"clampToReachablePosition",children:[]},{value:"canReach",id:"canReach",children:[]},{value:"canSee",id:"canSee",children:[]},{value:"updateAlignPos",id:"updateAlignPos",children:[]},{value:"updateAnchors",id:"updateAnchors",children:[]},{value:"updateAdaptiveHeight",id:"updateAdaptiveHeight",children:[]},{value:"resetNeedPanelHistory",id:"resetNeedPanelHistory",children:[]}]}],p={toc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"class Camera\n")),Object(b.b)("p",null,"A component that manages actual movement inside the viewport"),Object(b.b)("div",{className:"container"},Object(b.b)("div",{className:"row mb-2"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Properties")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Methods"))),Object(b.b)("div",{className:"row"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#element"},"element"),Object(b.b)("br",null),Object(b.b)("a",{href:"#position"},"position"),Object(b.b)("br",null),Object(b.b)("a",{href:"#alignPosition"},"alignPosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#offset"},"offset"),Object(b.b)("br",null),Object(b.b)("a",{href:"#range"},"range"),Object(b.b)("br",null),Object(b.b)("a",{href:"#rangeDiff"},"rangeDiff"),Object(b.b)("br",null),Object(b.b)("a",{href:"#visiblePanels"},"visiblePanels"),Object(b.b)("br",null),Object(b.b)("a",{href:"#visibleRange"},"visibleRange"),Object(b.b)("br",null),Object(b.b)("a",{href:"#anchorPoints"},"anchorPoints"),Object(b.b)("br",null),Object(b.b)("a",{href:"#controlParams"},"controlParams"),Object(b.b)("br",null),Object(b.b)("a",{href:"#atEdge"},"atEdge"),Object(b.b)("br",null),Object(b.b)("a",{href:"#size"},"size"),Object(b.b)("br",null),Object(b.b)("a",{href:"#progress"},"progress"),Object(b.b)("br",null),Object(b.b)("a",{href:"#align"},"align")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#updateRange"},"updateRange"),Object(b.b)("br",null),Object(b.b)("a",{href:"#init"},"init"),Object(b.b)("br",null),Object(b.b)("a",{href:"#destroy"},"destroy"),Object(b.b)("br",null),Object(b.b)("a",{href:"#lookAt"},"lookAt"),Object(b.b)("br",null),Object(b.b)("a",{href:"#getPrevAnchor"},"getPrevAnchor"),Object(b.b)("br",null),Object(b.b)("a",{href:"#getNextAnchor"},"getNextAnchor"),Object(b.b)("br",null),Object(b.b)("a",{href:"#getProgressInPanel"},"getProgressInPanel"),Object(b.b)("br",null),Object(b.b)("a",{href:"#findAnchorIncludePosition"},"findAnchorIncludePosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#findNearestAnchor"},"findNearestAnchor"),Object(b.b)("br",null),Object(b.b)("a",{href:"#clampToReachablePosition"},"clampToReachablePosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#canReach"},"canReach"),Object(b.b)("br",null),Object(b.b)("a",{href:"#canSee"},"canSee"),Object(b.b)("br",null),Object(b.b)("a",{href:"#updateAlignPos"},"updateAlignPos"),Object(b.b)("br",null),Object(b.b)("a",{href:"#updateAnchors"},"updateAnchors"),Object(b.b)("br",null),Object(b.b)("a",{href:"#updateAdaptiveHeight"},"updateAdaptiveHeight"),Object(b.b)("br",null),Object(b.b)("a",{href:"#resetNeedPanelHistory"},"resetNeedPanelHistory")))),Object(b.b)("h2",{id:"constructor"},"Constructor"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"new Camera()\n")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Partial","<","CameraOptions",">"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"},"{}"),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"element"},"element"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"The camera(",Object(b.b)("inlineCode",{parentName:"p"},".flicking-camera"),") element"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": HTMLElement"),Object(b.b)("h3",{id:"position"},"position"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Current position of the camera"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"alignPosition"},"alignPosition"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Align position inside the viewport where ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel"),"'s ",Object(b.b)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition")," should be located at"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"offset"},"offset"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Position offset, used for the ",Object(b.b)("a",{parentName:"p",href:"Flicking#renderOnlyVisible"},"renderOnlyVisible")," option"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Default"),": 0"),Object(b.b)("h3",{id:"range"},"range"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A range that Camera's ",Object(b.b)("a",{parentName:"p",href:"Camera#position"},"position")," can reach"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": object"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"min"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"A minimum position")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"min"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"A maximum position")))),Object(b.b)("h3",{id:"rangeDiff"},"rangeDiff"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A difference between Camera's minimum and maximum position that can reach"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"visiblePanels"},"visiblePanels"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"An array of visible panels from the current position"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": Array","<",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel"),">"),Object(b.b)("h3",{id:"visibleRange"},"visibleRange"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A range of the visible area from the current position"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": object"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"min"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"A minimum position")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"min"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"A maximum position")))),Object(b.b)("h3",{id:"anchorPoints"},"anchorPoints"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"An array of ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"s that Camera can be stopped at"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": Array","<",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),">"),Object(b.b)("h3",{id:"controlParams"},"controlParams"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A current parameters of the Camera for updating ",Object(b.b)("a",{parentName:"p",href:"AxesController"},"AxesController")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": ",Object(b.b)("a",{parentName:"p",href:"ControlParams"},"ControlParams")),Object(b.b)("h3",{id:"atEdge"},"atEdge"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A Boolean value indicating whether Camera's over the minimum or maximum position reachable"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h3",{id:"size"},"size"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Return the size of the viewport"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"progress"},"progress"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Return the camera's position progress from the first panel to last panel",Object(b.b)("br",{parentName:"p"}),"\n","Range is from 0 to last panel's index"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"align"},"align"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"A value indicating where the ",Object(b.b)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition")," should be located at inside the viewport element"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": ",Object(b.b)("a",{parentName:"p",href:"ALIGN"},"ALIGN")," ","|"," string ","|"," number"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"updateRange"},"updateRange"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Update ",Object(b.b)("a",{parentName:"p",href:"Camera#range"},"range")," of Camera"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",Object(b.b)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Initialize Camera"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of ",Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"ERROR_CODE"},"VAL_MUST_NOT_NULL")," If the camera element(",Object(b.b)("inlineCode",{parentName:"p"},".flicking-camera"),") does not exist inside viewport element"),Object(b.b)("h3",{id:"destroy"},"destroy"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Destroy Camera and return to initial state"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("h3",{id:"lookAt"},"lookAt"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-success"},"async")),Object(b.b)("p",null,"Move to the given position and apply CSS transform"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"pos"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A new position")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",Object(b.b)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),Object(b.b)("h3",{id:"getPrevAnchor"},"getPrevAnchor"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Return a previous ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," of given ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),Object(b.b)("br",{parentName:"p"}),"\n","If it does not exist, return ",Object(b.b)("inlineCode",{parentName:"p"},"null")," instead"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"The previous ",Object(b.b)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"anchor"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A reference ",Object(b.b)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint"))))),Object(b.b)("h3",{id:"getNextAnchor"},"getNextAnchor"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Return a next ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," of given ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),Object(b.b)("br",{parentName:"p"}),"\n","If it does not exist, return ",Object(b.b)("inlineCode",{parentName:"p"},"null")," instead"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"The next ",Object(b.b)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"anchor"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A reference ",Object(b.b)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint"))))),Object(b.b)("h3",{id:"getProgressInPanel"},"getProgressInPanel"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Return the camera's position progress in the panel below",Object(b.b)("br",{parentName:"p"}),"\n","Value is from 0 to 1 when the camera's inside panel",Object(b.b)("br",{parentName:"p"}),"\n","Value can be lower than 0 or bigger than 1 when it's in the margin area"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"panel"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Panel"},"Panel")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h3",{id:"findAnchorIncludePosition"},"findAnchorIncludePosition"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Return ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," that includes given position",Object(b.b)("br",{parentName:"p"}),"\n","If there's no ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," that includes the given position, return ",Object(b.b)("inlineCode",{parentName:"p"},"null")," instead"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"The ",Object(b.b)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint")," that includes the given position")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"position"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A position to check")))),Object(b.b)("h3",{id:"findNearestAnchor"},"findNearestAnchor"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Return ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," nearest to given position",Object(b.b)("br",{parentName:"p"}),"\n","If there're no ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"s, return ",Object(b.b)("inlineCode",{parentName:"p"},"null")," instead"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"The ",Object(b.b)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint")," nearest to the given position")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"position"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A position to check")))),Object(b.b)("h3",{id:"clampToReachablePosition"},"clampToReachablePosition"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Clamp the given position between camera's range"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": number"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A clamped position")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"position"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A position to clamp")))),Object(b.b)("h3",{id:"canReach"},"canReach"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Check whether the given panel is inside of the Camera's range"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Whether the panel's inside Camera's range")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"panel"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Panel"},"Panel")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of ",Object(b.b)("a",{parentName:"td",href:"Panel"},"Panel")," to check")))),Object(b.b)("h3",{id:"canSee"},"canSee"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Check whether the given panel element is visible at the current position"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Whether the panel element is visible at the current position")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"panel"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Panel"},"Panel")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of ",Object(b.b)("a",{parentName:"td",href:"Panel"},"Panel")," to check")))),Object(b.b)("h3",{id:"updateAlignPos"},"updateAlignPos"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Update Camera's ",Object(b.b)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"updateAnchors"},"updateAnchors"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Update Camera's ",Object(b.b)("a",{parentName:"p",href:"Camera#anchorPoints"},"anchorPoints")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",Object(b.b)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),Object(b.b)("h3",{id:"updateAdaptiveHeight"},"updateAdaptiveHeight"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Update Viewport's height to active panel's height"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",Object(b.b)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),Object(b.b)("h3",{id:"resetNeedPanelHistory"},"resetNeedPanelHistory"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Reset the history of ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-needPanel"},"needPanel")," events so it can be triggered again"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"))}o.isMDXComponent=!0},348:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=o(a),m=n,j=O["".concat(c,".").concat(m)]||O[m]||s[m]||b;return a?r.a.createElement(j,l(l({ref:t},p),{},{components:a})):r.a.createElement(j,l({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);