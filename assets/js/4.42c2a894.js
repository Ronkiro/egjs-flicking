(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{422:function(n,e,t){"use strict";t.d(e,"a",(function(){return S})),t.d(e,"b",(function(){return s})),t.d(e,"c",(function(){return o})),t.d(e,"d",(function(){return z})),t.d(e,"e",(function(){return r})),t.d(e,"f",(function(){return M}));var i=t(436),r=function(){function n(n,e){var t=this;void 0===n&&(n=""),void 0===e&&(e=1),this.update=function(){t._onMove()},this._onMove=function(){var n=t._flicking;n&&n.visiblePanels.forEach((function(n){var e=n.outsetProgress,i=n.element,r=t._selector?i.querySelector(t._selector):i,o=r.parentNode,s=r.getBoundingClientRect(),a="translate(-50%) translate("+(o.getBoundingClientRect().width-s.width)/2*e*t._scale+"px)";r.style.cssText+="transform: "+a+";-webkit-transform: "+a+";-ms-transform:"+a}))},this._flicking=null,this._selector=n,this._scale=e}var e=n.prototype;return Object.defineProperty(e,"selector",{get:function(){return this._selector},set:function(n){this._selector=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"scale",{get:function(){return this._scale},set:function(n){this._scale=n},enumerable:!1,configurable:!0}),e.init=function(n){this._flicking&&this.destroy(),this._flicking=n,n.on(i.b.MOVE,this._onMove),n.on(i.b.AFTER_RESIZE,this.update),this._onMove()},e.destroy=function(){this._flicking&&(this._flicking.off(i.b.MOVE,this._onMove),this._flicking=null)},n}(),o=function(){function n(n,e){var t=this;void 0===n&&(n=""),void 0===e&&(e=1),this.update=function(){t._onMove()},this._onMove=function(){var n=t._flicking,e=t._selector,i=t._scale;n&&n.visiblePanels.forEach((function(n){var t=n.outsetProgress,r=n.element,o=e?r.querySelector(e):r,s=Math.min(1,Math.max(0,1-Math.abs(t*i)));o.style.opacity=""+s}))},this._flicking=null,this._selector=n,this._scale=e}var e=n.prototype;return Object.defineProperty(e,"selector",{get:function(){return this._selector},set:function(n){this._selector=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"scale",{get:function(){return this._scale},set:function(n){this._scale=n},enumerable:!1,configurable:!0}),e.init=function(n){this._flicking&&this.destroy(),this._flicking=n,n.on(i.b.MOVE,this._onMove),n.on(i.b.AFTER_RESIZE,this.update),this._onMove()},e.destroy=function(){this._flicking&&(this._flicking.off(i.b.MOVE,this._onMove),this._flicking=null)},n}(),s=function(){function n(n){var e=this,t=void 0===n?{}:n,r=t.duration,o=void 0===r?2e3:r,s=t.direction,a=void 0===s?i.a.NEXT:s,c=t.stopOnHover,l=void 0!==c&&c;this._flicking=null,this._timerId=0,this._mouseEntered=!1,this.play=function(){var n=e._flicking,t=e._direction;n&&(e.stop(),e._mouseEntered||n.animating||(e._timerId=window.setTimeout((function(){t===i.a.NEXT?n.next().catch((function(){})):n.prev().catch((function(){})),e.play()}),e._duration)))},this.stop=function(){clearTimeout(e._timerId)},this._onMouseEnter=function(){e._mouseEntered=!0,e.stop()},this._onMouseLeave=function(){e._mouseEntered=!1,e.play()},this._duration=o,this._direction=a,this._stopOnHover=l}var e=n.prototype;return Object.defineProperty(e,"duration",{get:function(){return this._duration},set:function(n){this._duration=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"direction",{get:function(){return this._direction},set:function(n){this._direction=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"stopOnHover",{get:function(){return this._stopOnHover},set:function(n){this._stopOnHover=n},enumerable:!1,configurable:!0}),e.init=function(n){var e;if(this._flicking&&this.destroy(),n.on(((e={})[i.b.MOVE_START]=this.stop,e[i.b.HOLD_START]=this.stop,e[i.b.MOVE_END]=this.play,e[i.b.SELECT]=this.play,e)),this._flicking=n,this._stopOnHover){var t=this._flicking.element;t.addEventListener("mouseenter",this._onMouseEnter,!1),t.addEventListener("mouseleave",this._onMouseLeave,!1)}this.play()},e.destroy=function(){var n=this._flicking;if(this._mouseEntered=!1,this.stop(),n){n.off(i.b.MOVE_START,this.stop),n.off(i.b.HOLD_START,this.stop),n.off(i.b.MOVE_END,this.play),n.off(i.b.SELECT,this.play);var e=n.element;e.removeEventListener("mouseenter",this._onMouseEnter,!1),e.removeEventListener("mouseleave",this._onMouseLeave,!1),this._flicking=null}},e.update=function(){},n}(),a={CLICK:"click",MOUSE_DOWN:"mousedown",TOUCH_START:"touchstart"},c=".flicking-arrow-prev",l=".flicking-arrow-next",u="flicking-arrow-disabled",f=".flicking-pagination",h="flicking-pagination",_="bullets",d="bullet",p="bullet-active",v="fraction",g="fraction-current",b="fraction-total",m="uninitialized",E="scroll",y="slider",C="bullet-prev",x="bullet-next",k={BULLET:"bullet",FRACTION:"fraction",SCROLL:"scroll"},O={CAMERA:"camera",INDEX:"index"},P=function(n,e){n.classList?n.classList.add(e):n.className.split(" ").indexOf(e)<0&&(n.className=n.className+" "+e)},T=function(n,e){if(n.classList)n.classList.remove(e);else{var t=new RegExp("( |^)"+e+"( |$)","g");n.className.replace(t," ")}},L=function(n,e,t){var i=e.querySelector(n);if(!i)throw new Error("[Flicking-"+t+"] Couldn't find element with the given selector: "+n);return i},S=function(){function n(n){var e=this,t=void 0===n?{}:n,r=t.parentEl,o=void 0===r?null:r,s=t.prevElSelector,a=void 0===s?c:s,f=t.nextElSelector,h=void 0===f?l:f,_=t.disabledClass,d=void 0===_?u:_,p=t.moveCount,v=void 0===p?1:p,g=t.moveByViewportSize,b=void 0!==g&&g;this._flicking=null,this._preventInputPropagation=function(n){n.stopPropagation()},this._onPrevClick=function(){var n=e._flicking,t=n.camera,i=t.anchorPoints;if(!(n.animating||i.length<=0)){var r=i[0],o=e._moveCount;if(e._moveByViewportSize)n.control.moveToPosition(t.position-t.size,n.duration).catch(e._onCatch);else if(n.circularEnabled){for(var s=n.currentPanel,a=0;a<o;a++)s=s.prev();s.focus().catch(e._onCatch)}else n.index>r.panel.index?n.moveTo(Math.max(n.index-o,r.panel.index)).catch(e._onCatch):t.position>t.range.min&&n.moveTo(n.index).catch(e._onCatch)}},this._onNextClick=function(){var n=e._flicking,t=n.camera,i=t.anchorPoints;if(!(n.animating||i.length<=0)){var r=i[i.length-1],o=e._moveCount;if(e._moveByViewportSize)n.control.moveToPosition(t.position+t.size,n.duration).catch(e._onCatch);else if(n.circularEnabled){for(var s=n.currentPanel,a=0;a<o;a++)s=s.next();s.focus().catch(e._onCatch)}else n.index<r.panel.index?n.moveTo(Math.min(n.index+o,r.panel.index)).catch(e._onCatch):t.position>t.range.min&&n.moveTo(n.index).catch(e._onCatch)}},this._onAnimation=function(){var n=e._flicking,t=n.camera,i=n.control.controller;n.holding?e._updateClass(t.position):e._updateClass(i.animatingContext.end)},this._onCatch=function(n){if(!(n instanceof i.d))throw n},this._parentEl=o,this._prevElSelector=a,this._nextElSelector=h,this._disabledClass=d,this._moveCount=v,this._moveByViewportSize=b}var e=n.prototype;return Object.defineProperty(e,"prevEl",{get:function(){return this._prevEl},enumerable:!1,configurable:!0}),Object.defineProperty(e,"nextEl",{get:function(){return this._nextEl},enumerable:!1,configurable:!0}),Object.defineProperty(e,"parentEl",{get:function(){return this._parentEl},set:function(n){this._parentEl=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"prevElSelector",{get:function(){return this._prevElSelector},set:function(n){this._prevElSelector=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"nextElSelector",{get:function(){return this._nextElSelector},set:function(n){this._nextElSelector=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"disabledClass",{get:function(){return this._disabledClass},set:function(n){this._disabledClass=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"moveCount",{get:function(){return this._moveCount},set:function(n){this._moveCount=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"moveByViewportSize",{get:function(){return this._moveByViewportSize},set:function(n){this._moveByViewportSize=n},enumerable:!1,configurable:!0}),e.init=function(n){var e=this;this._flicking&&this.destroy(),this._flicking=n,n.on(i.b.MOVE,this._onAnimation);var t=this._parentEl?this._parentEl:n.element,r=L(this._prevElSelector,t,"Arrow"),o=L(this._nextElSelector,t,"Arrow");[a.MOUSE_DOWN,a.TOUCH_START].forEach((function(n){r.addEventListener(n,e._preventInputPropagation),o.addEventListener(n,e._preventInputPropagation)})),r.addEventListener(a.CLICK,this._onPrevClick),o.addEventListener(a.CLICK,this._onNextClick),this._prevEl=r,this._nextEl=o,this.update()},e.destroy=function(){var n=this,e=this._flicking;if(e){e.off(i.b.MOVE,this._onAnimation);var t=this._prevEl,r=this._nextEl;[a.MOUSE_DOWN,a.TOUCH_START].forEach((function(e){t.removeEventListener(e,n._preventInputPropagation),r.removeEventListener(e,n._preventInputPropagation)})),t.removeEventListener(a.CLICK,this._onPrevClick),r.removeEventListener(a.CLICK,this._onNextClick),this._flicking=null}},e.update=function(){this._updateClass(this._flicking.camera.position)},e._updateClass=function(n){var e=this._flicking,t=this._disabledClass,i=this._prevEl,r=this._nextEl,o=e.camera.range,s=!e.circularEnabled&&n<=o.min,a=!e.circularEnabled&&n>=o.max;s?P(i,t):T(i,t),a?P(r,t):T(r,t)},n}(),M=function(){function n(n){var e=this,t=void 0===n?{}:n,r=t.type,o=void 0===r?O.CAMERA:r,s=t.synchronizedFlickingOptions,a=void 0===s?[]:s;this._flicking=null,this._addEvents=function(n){n.forEach((function(n){var t=n.flicking,r=n.isSlidable,o=n.isClickable;"camera"===e._type&&(t.on(i.b.MOVE,e._onMove),t.on(i.b.MOVE_START,e._onMoveStart),t.on(i.b.MOVE_END,e._onMoveEnd)),"index"===e._type&&r&&t.on(i.b.WILL_CHANGE,e._onIndexChange),o&&t.on(i.b.SELECT,e._onIndexChange)}))},this._removeEvents=function(n){n.forEach((function(n){var t=n.flicking,r=n.isSlidable,o=n.isClickable;"camera"===e._type&&(t.off(i.b.MOVE,e._onMove),t.off(i.b.MOVE_START,e._onMoveStart),t.off(i.b.MOVE_END,e._onMoveEnd)),"index"===e._type&&r&&t.off(i.b.WILL_CHANGE,e._onIndexChange),o&&t.off(i.b.SELECT,e._onIndexChange)}))},this._onIndexChange=function(n){var t=n.currentTarget;t.initialized&&e._synchronizeByIndex(t,n.index)},this._onMove=function(n){var t=n.currentTarget.camera,i=(t.position-t.range.min)/t.rangeDiff;e._synchronizedFlickingOptions.forEach((function(e){var r=e.flicking;r!==n.currentTarget&&(t.position<t.range.min?r.camera.lookAt(t.position):t.position>t.range.max?r.camera.lookAt(r.camera.range.max+t.position-t.range.max):r.camera.lookAt(r.camera.range.min+r.camera.rangeDiff*i))}))},this._onMoveStart=function(n){e._synchronizedFlickingOptions.forEach((function(e){var t=e.flicking;t!==n.currentTarget&&t.disableInput()}))},this._onMoveEnd=function(n){e._synchronizedFlickingOptions.forEach((function(e){var t=e.flicking;t!==n.currentTarget&&(t.enableInput(),t.control.updateInput())}))},this._synchronizeByIndex=function(n,t){var i=e._synchronizedFlickingOptions,r=n.panels.find((function(n){return n.index===t})),o=n.panels[n.panels.length-1];r&&e._preventEvent((function(){i.forEach((function(n){var t=n.flicking,i=n.activeClass,s=t.panels[t.panels.length-1],a=r.position/(o.position+o.size/2)*(s.position+s.size/2);t.control.moveToPosition(a,500).catch((function(){})),i&&e._updateClass({flicking:t,activeClass:i},a)}))}))},this._updateClass=function(n,t){var i=e._findNearsetPanel(n.flicking,t);n.flicking.panels.forEach((function(e){return e.index===i.index?P(e.element,n.activeClass):T(e.element,n.activeClass)}))},this._findNearsetPanel=function(n,e){var t=n.panels.reduce((function(n,t,i){return Math.abs(t.position-e)<=n.range?{index:i,range:Math.abs(t.position-e)}:n}),{index:0,range:1/0}).index;return n.panels[t]},this._type=o,this._synchronizedFlickingOptions=a}var e=n.prototype;return Object.defineProperty(e,"type",{get:function(){return this._type},set:function(n){var e=this;this._preventEvent((function(){e._type=n}))},enumerable:!1,configurable:!0}),Object.defineProperty(e,"synchronizedFlickingOptions",{get:function(){return this._synchronizedFlickingOptions},set:function(n){var e=this;this._preventEvent((function(){e._synchronizedFlickingOptions=n}))},enumerable:!1,configurable:!0}),e.init=function(n){var e=this;this._flicking&&this.destroy(),this._flicking=n,this._addEvents(this._synchronizedFlickingOptions),this._synchronizedFlickingOptions.forEach((function(n){e._updateClass(n,0)}))},e.destroy=function(){this._flicking&&(this._removeEvents(this._synchronizedFlickingOptions),this._flicking=null)},e.update=function(){var n=this;this._synchronizedFlickingOptions.forEach((function(e){var t=e.flicking,i=e.activeClass;n._updateClass({flicking:t,activeClass:i},t.camera.position)}))},e._preventEvent=function(n){this._removeEvents(this._synchronizedFlickingOptions),n(),this._addEvents(this._synchronizedFlickingOptions)},n}(),w=function(n,e){return(w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])})(n,e)};function I(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}w(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}function F(n,e,t){if(t||2===arguments.length)for(var i,r=0,o=e.length;r<o;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return n.concat(i||e)}var A=function(){return function(n){var e=n.flicking,t=n.pagination,i=n.wrapper;this._flicking=e,this._pagination=t,this._wrapper=i}}(),N=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e._childs=[],e}I(e,n);var t=e.prototype;return t.render=function(){var n=this._flicking,e=this._pagination,t=e.renderBullet,r=e.classPrefix+"-"+_,o=e.classPrefix+"-"+d,s=e.classPrefix+"-"+p,c=n.camera.anchorPoints,l=this._wrapper;P(l,r),l.innerHTML=c.map((function(n,e){return t(o,e)})).join("\n");var u=[].slice.call(l.children);u.forEach((function(e,t){var r=c[t];r.panel.index===n.index&&P(e,s),e.addEventListener(a.MOUSE_DOWN,(function(n){n.stopPropagation()})),e.addEventListener(a.TOUCH_START,(function(n){n.stopPropagation()})),e.addEventListener(a.CLICK,(function(){n.moveTo(r.panel.index).catch((function(n){if(!(n instanceof i.d))throw n}))}))})),this._childs=u},t.update=function(n){var e=this._flicking,t=this._pagination,i=this._childs,r=t.classPrefix+"-"+p,o=e.camera.anchorPoints;if(!(o.length<=0)){i.forEach((function(n){T(n,r)}));var s=i[n-o[0].panel.index];P(s,r)}},e}(A),R=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}I(e,n);var t=e.prototype;return t.render=function(){var n=this._flicking,e=this._wrapper,t=this._pagination,i=t.classPrefix+"-"+v,r=t.classPrefix+"-"+g,o=t.classPrefix+"-"+b;P(e,i),e.innerHTML=t.renderFraction(r,o),this.update(n.index)},t.update=function(n){var e=this._flicking,t=this._wrapper,i=this._pagination,r=i.classPrefix+"-"+g,o=i.classPrefix+"-"+b,s=t.querySelector("."+r),a=t.querySelector("."+o),c=e.camera.anchorPoints,l=c.length>0?n-c[0].panel.index+1:0;s.innerHTML=i.fractionCurrentFormat(l),a.innerHTML=i.fractionTotalFormat(c.length)},e}(A),j=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e._bullets=[],e._bulletSize=0,e._previousIndex=-1,e._sliderIndex=-1,e.moveTo=function(n){var t=e._pagination,i=e._wrapper.firstElementChild,r=e._bulletSize,o=r*t.bulletCount;i.style.transform="translate("+(o/2-(n+.5)*r)+"px)",e._sliderIndex=n},e}I(e,n);var t=e.prototype;return t.render=function(){var n=this._wrapper,e=this._flicking,t=this._pagination,r=t.renderBullet,o=e.camera.anchorPoints,s=t.classPrefix+"-"+E,c=t.classPrefix+"-"+d,l=t.classPrefix+"-"+y,u=t.classPrefix+"-"+m,f=document.createElement("div");P(f,l),P(n,u),P(n,s),n.appendChild(f),f.innerHTML=o.map((function(n,e){return r(c,e)})).join("\n");var h=[].slice.call(f.children);if(h.forEach((function(n,t){var r=o[t];n.addEventListener(a.MOUSE_DOWN,(function(n){n.stopPropagation()})),n.addEventListener(a.TOUCH_START,(function(n){n.stopPropagation()})),n.addEventListener(a.CLICK,(function(){e.moveTo(r.panel.index).catch((function(n){if(!(n instanceof i.d))throw n}))}))})),!(h.length<=0)){var _=getComputedStyle(h[0]),p=h[0].clientWidth+parseFloat(_.marginLeft)+parseFloat(_.marginRight);n.style.width=p*t.bulletCount+"px",this._bullets=h,this._bulletSize=p,this.update(this._flicking.index),window.requestAnimationFrame((function(){T(n,u)}))}},t.update=function(n){var e=this._pagination,t=this._flicking,r=this._bullets,o=this._previousIndex,s=t.camera.anchorPoints,a=n-s[0].panel.index;if(!(s.length<=0)){var c=e.classPrefix+"-"+p,l=e.classPrefix+"-"+C,u=e.classPrefix+"-"+x,f=new RegExp("^"+l),h=new RegExp("^"+u);r.forEach((function(n,e){for(var t,i=e-a,r=0,o=n.className.split(" ");r<o.length;r++){var s=o[r];(s===c||f.test(s)||h.test(s))&&T(n,s)}P(n,0===i?c:i>0?(t=Math.abs(i),""+u+(t>1?t:"")):function(n){return""+l+(n>1?n:"")}(Math.abs(i)))})),e.scrollOnChange(a,{total:r.length,prevIndex:o,sliderIndex:this._sliderIndex,direction:a>o?i.a.NEXT:i.a.PREV,bullets:F([],r),moveTo:this.moveTo}),this._previousIndex=a}},e}(A),z=function(){function n(n){var e=this,t=void 0===n?{}:n,i=t.parentEl,r=void 0===i?null:i,o=t.selector,s=void 0===o?f:o,a=t.type,c=void 0===a?k.BULLET:a,l=t.classPrefix,u=void 0===l?h:l,_=t.bulletCount,d=void 0===_?5:_,p=t.renderBullet,v=void 0===p?function(n){return'<span class="'+n+'"></span>'}:p,g=t.renderFraction,b=void 0===g?function(n,e){return'<span class="'+n+'"></span>/<span class="'+e+'"></span>'}:g,m=t.fractionCurrentFormat,E=void 0===m?function(n){return n.toString()}:m,y=t.fractionTotalFormat,C=void 0===y?function(n){return n.toString()}:y,x=t.scrollOnChange,O=void 0===x?function(n,e){return e.moveTo(n)}:x;this._flicking=null,this.update=function(){e._removeAllChilds(),e._renderer.render()},this._onIndexChange=function(n){e._renderer.update(n.index)},this._parentEl=r,this._selector=s,this._type=c,this._classPrefix=u,this._bulletCount=d,this._renderBullet=v,this._renderFraction=b,this._fractionCurrentFormat=E,this._fractionTotalFormat=C,this._scrollOnChange=O}var e=n.prototype;return Object.defineProperty(e,"parentEl",{get:function(){return this._parentEl},set:function(n){this._parentEl=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"selector",{get:function(){return this._selector},set:function(n){this._selector=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"type",{get:function(){return this._type},set:function(n){this._type=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"classPrefix",{get:function(){return this._classPrefix},enumerable:!1,configurable:!0}),Object.defineProperty(e,"bulletCount",{get:function(){return this._bulletCount},set:function(n){this._bulletCount=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"renderBullet",{get:function(){return this._renderBullet},set:function(n){this._renderBullet=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"renderFraction",{get:function(){return this._renderFraction},set:function(n){this._renderFraction=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"fractionCurrentFormat",{get:function(){return this._fractionCurrentFormat},set:function(n){this._fractionCurrentFormat=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"fractionTotalFormat",{get:function(){return this._fractionTotalFormat},set:function(n){this._fractionTotalFormat=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"scrollOnChange",{get:function(){return this._scrollOnChange},set:function(n){this._scrollOnChange=n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"bulletWrapperclassPrefixClass",{set:function(n){this._classPrefix=n},enumerable:!1,configurable:!0}),e.init=function(n){this._flicking&&this.destroy(),this._flicking=n;var e=this._type,t=this._selector,r=(this._parentEl?this._parentEl:n.element).querySelector(t);if(!r)throw new Error("[Flicking-Pagination] Couldn't find element with the given selector: "+t);this._wrapper=r,this._renderer=this._createRenderer(e),n.on(i.b.WILL_CHANGE,this._onIndexChange),n.on(i.b.WILL_RESTORE,this._onIndexChange),n.on(i.b.PANEL_CHANGE,this.update),this.update()},e.destroy=function(){var n=this._flicking;n&&(n.off(i.b.WILL_CHANGE,this._onIndexChange),n.off(i.b.WILL_RESTORE,this._onIndexChange),n.off(i.b.PANEL_CHANGE,this.update),this._removeAllChilds(),this._flicking=null)},e._createRenderer=function(n){var e={flicking:this._flicking,pagination:this,wrapper:this._wrapper};switch(n){case k.BULLET:return new N(e);case k.FRACTION:return new R(e);case k.SCROLL:return new j(e);default:throw new Error('[Flicking-Pagination] type "'+n+'" is not supported.')}},e._removeAllChilds=function(){for(var n=this._wrapper;n.firstChild;)n.removeChild(n.firstChild)},n}()}}]);