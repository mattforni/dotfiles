var e,t={7507:(e,t,o)=>{(()=>{var t={2584:e=>{e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},4184:(e,t)=>{var o;!function(){var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var s=r.apply(null,o);s&&e.push(s)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},8514:(e,t,o)=>{var n=o(6115);e.exports=function(e,t,o){e&&n((function(){e.apply(o||null,t||[])}))}},5229:(e,t,o)=>{var n=o(2584),r=o(8514);e.exports=function(e,t){var o=t||{},i={};return void 0===e&&(e={}),e.on=function(t,o){return i[t]?i[t].push(o):i[t]=[o],e},e.once=function(t,o){return o._once=!0,e.on(t,o),e},e.off=function(t,o){var n=arguments.length;if(1===n)delete i[t];else if(0===n)i={};else{var r=i[t];if(!r)return e;r.splice(r.indexOf(o),1)}return e},e.emit=function(){var t=n(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var s=(i[t]||[]).slice(0);return function(){var i=n(arguments),a=this||e;if("error"===t&&!1!==o.throws&&!s.length)throw 1===i.length?i[0]:i;return s.forEach((function(n){o.async?r(n,i,a):n.apply(a,i),n._once&&e.off(t,n)})),e}},e}},3285:(e,t,o)=>{o(8691),e.exports=o(4579).Array.isArray},6981:(e,t,o)=>{o(2699),e.exports=o(4579).Object.assign},5627:(e,t,o)=>{o(6760);var n=o(4579).Object;e.exports=function(e,t){return n.create(e,t)}},7965:(e,t,o)=>{o(520),e.exports=o(4579).Object.entries},8613:(e,t,o)=>{o(961),e.exports=o(4579).Object.keys},433:(e,t,o)=>{o(9349),e.exports=o(4579).Object.setPrototypeOf},5663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},2159:(e,t,o)=>{var n=o(6727);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},7428:(e,t,o)=>{var n=o(7932),r=o(8728),i=o(6531);e.exports=function(e){return function(t,o,s){var a,l=n(t),c=r(l.length),d=i(s,c);if(e&&o!=o){for(;c>d;)if((a=l[d++])!=a)return!0}else for(;c>d;d++)if((e||d in l)&&l[d]===o)return e||d||0;return!e&&-1}}},2894:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},4579:e=>{var t=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},9216:(e,t,o)=>{var n=o(5663);e.exports=function(e,t,o){if(n(e),void 0===t)return e;switch(o){case 1:return function(o){return e.call(t,o)};case 2:return function(o,n){return e.call(t,o,n)};case 3:return function(o,n,r){return e.call(t,o,n,r)}}return function(){return e.apply(t,arguments)}}},8333:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},9666:(e,t,o)=>{e.exports=!o(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},7467:(e,t,o)=>{var n=o(6727),r=o(3938).document,i=n(r)&&n(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},3338:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},3856:(e,t,o)=>{var n=o(3938),r=o(4579),i=o(9216),s=o(1818),a=o(7069),l="prototype",c=function(e,t,o){var d,h,u,p=e&c.F,f=e&c.G,m=e&c.S,g=e&c.P,b=e&c.B,v=e&c.W,y=f?r:r[t]||(r[t]={}),w=y[l],C=f?n:m?n[t]:(n[t]||{})[l];for(d in f&&(o=t),o)(h=!p&&C&&void 0!==C[d])&&a(y,d)||(u=h?C[d]:o[d],y[d]=f&&"function"!=typeof C[d]?o[d]:b&&h?i(u,n):v&&C[d]==u?function(e){var t=function(t,o,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,o)}return new e(t,o,n)}return e.apply(this,arguments)};return t[l]=e[l],t}(u):g&&"function"==typeof u?i(Function.call,u):u,g&&((y.virtual||(y.virtual={}))[d]=u,e&c.R&&w&&!w[d]&&s(w,d,u)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},3938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},7069:e=>{var t={}.hasOwnProperty;e.exports=function(e,o){return t.call(e,o)}},1818:(e,t,o)=>{var n=o(4743),r=o(3101);e.exports=o(9666)?function(e,t,o){return n.f(e,t,r(1,o))}:function(e,t,o){return e[t]=o,e}},4881:(e,t,o)=>{var n=o(3938).document;e.exports=n&&n.documentElement},3758:(e,t,o)=>{e.exports=!o(9666)&&!o(7929)((function(){return 7!=Object.defineProperty(o(7467)("div"),"a",{get:function(){return 7}}).a}))},799:(e,t,o)=>{var n=o(2894);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},1421:(e,t,o)=>{var n=o(2894);e.exports=Array.isArray||function(e){return"Array"==n(e)}},6727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},6227:e=>{e.exports=!0},8082:(e,t,o)=>{var n=o(9666),r=o(6162),i=o(8195),s=o(6274),a=o(6530),l=o(799),c=Object.assign;e.exports=!c||o(7929)((function(){var e={},t={},o=Symbol(),n="abcdefghijklmnopqrst";return e[o]=7,n.split("").forEach((function(e){t[e]=e})),7!=c({},e)[o]||Object.keys(c({},t)).join("")!=n}))?function(e,t){for(var o=a(e),c=arguments.length,d=1,h=i.f,u=s.f;c>d;)for(var p,f=l(arguments[d++]),m=h?r(f).concat(h(f)):r(f),g=m.length,b=0;g>b;)p=m[b++],n&&!u.call(f,p)||(o[p]=f[p]);return o}:c},526:(e,t,o)=>{var n=o(2159),r=o(7856),i=o(3338),s=o(8989)("IE_PROTO"),a=function(){},l="prototype",c=function(){var e,t=o(7467)("iframe"),n=i.length;for(t.style.display="none",o(4881).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;n--;)delete c[l][i[n]];return c()};e.exports=Object.create||function(e,t){var o;return null!==e?(a[l]=n(e),o=new a,a[l]=null,o[s]=e):o=c(),void 0===t?o:r(o,t)}},4743:(e,t,o)=>{var n=o(2159),r=o(3758),i=o(3206),s=Object.defineProperty;t.f=o(9666)?Object.defineProperty:function(e,t,o){if(n(e),t=i(t,!0),n(o),r)try{return s(e,t,o)}catch(e){}if("get"in o||"set"in o)throw TypeError("Accessors not supported!");return"value"in o&&(e[t]=o.value),e}},7856:(e,t,o)=>{var n=o(4743),r=o(2159),i=o(6162);e.exports=o(9666)?Object.defineProperties:function(e,t){r(e);for(var o,s=i(t),a=s.length,l=0;a>l;)n.f(e,o=s[l++],t[o]);return e}},6183:(e,t,o)=>{var n=o(6274),r=o(3101),i=o(7932),s=o(3206),a=o(7069),l=o(3758),c=Object.getOwnPropertyDescriptor;t.f=o(9666)?c:function(e,t){if(e=i(e),t=s(t,!0),l)try{return c(e,t)}catch(e){}if(a(e,t))return r(!n.f.call(e,t),e[t])}},8195:(e,t)=>{t.f=Object.getOwnPropertySymbols},2963:(e,t,o)=>{var n=o(7069),r=o(7932),i=o(7428)(!1),s=o(8989)("IE_PROTO");e.exports=function(e,t){var o,a=r(e),l=0,c=[];for(o in a)o!=s&&n(a,o)&&c.push(o);for(;t.length>l;)n(a,o=t[l++])&&(~i(c,o)||c.push(o));return c}},6162:(e,t,o)=>{var n=o(2963),r=o(3338);e.exports=Object.keys||function(e){return n(e,r)}},6274:(e,t)=>{t.f={}.propertyIsEnumerable},4938:(e,t,o)=>{var n=o(3856),r=o(4579),i=o(7929);e.exports=function(e,t){var o=(r.Object||{})[e]||Object[e],s={};s[e]=t(o),n(n.S+n.F*i((function(){o(1)})),"Object",s)}},2050:(e,t,o)=>{var n=o(9666),r=o(6162),i=o(7932),s=o(6274).f;e.exports=function(e){return function(t){for(var o,a=i(t),l=r(a),c=l.length,d=0,h=[];c>d;)o=l[d++],n&&!s.call(a,o)||h.push(e?[o,a[o]]:a[o]);return h}}},3101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2906:(e,t,o)=>{var n=o(6727),r=o(2159),i=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=o(9216)(Function.call,o(6183).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,o){return i(e,o),t?e.__proto__=o:n(e,o),e}}({},!1):void 0),check:i}},8989:(e,t,o)=>{var n=o(250)("keys"),r=o(5730);e.exports=function(e){return n[e]||(n[e]=r(e))}},250:(e,t,o)=>{var n=o(4579),r=o(3938),i="__core-js_shared__",s=r[i]||(r[i]={});(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:o(6227)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},6531:(e,t,o)=>{var n=o(1052),r=Math.max,i=Math.min;e.exports=function(e,t){return(e=n(e))<0?r(e+t,0):i(e,t)}},1052:e=>{var t=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:t)(e)}},7932:(e,t,o)=>{var n=o(799),r=o(8333);e.exports=function(e){return n(r(e))}},8728:(e,t,o)=>{var n=o(1052),r=Math.min;e.exports=function(e){return e>0?r(n(e),9007199254740991):0}},6530:(e,t,o)=>{var n=o(8333);e.exports=function(e){return Object(n(e))}},3206:(e,t,o)=>{var n=o(6727);e.exports=function(e,t){if(!n(e))return e;var o,r;if(t&&"function"==typeof(o=e.toString)&&!n(r=o.call(e)))return r;if("function"==typeof(o=e.valueOf)&&!n(r=o.call(e)))return r;if(!t&&"function"==typeof(o=e.toString)&&!n(r=o.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},5730:e=>{var t=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+o).toString(36))}},8691:(e,t,o)=>{var n=o(3856);n(n.S,"Array",{isArray:o(1421)})},2699:(e,t,o)=>{var n=o(3856);n(n.S+n.F,"Object",{assign:o(8082)})},6760:(e,t,o)=>{var n=o(3856);n(n.S,"Object",{create:o(526)})},961:(e,t,o)=>{var n=o(6530),r=o(6162);o(4938)("keys",(function(){return function(e){return r(n(e))}}))},9349:(e,t,o)=>{var n=o(3856);n(n.S,"Object",{setPrototypeOf:o(2906).set})},520:(e,t,o)=>{var n=o(3856),r=o(2050)(!0);n(n.S,"Object",{entries:function(e){return r(e)}})},1808:(e,t,o)=>{var n=o(9638),r=o(4874),i=o.g.document,s=function(e,t,o,n){return e.addEventListener(t,o,n)},a=function(e,t,o,n){return e.removeEventListener(t,o,n)},l=[];function c(e,t,o){var n=function(e,t,o){var n,r;for(n=0;n<l.length;n++)if((r=l[n]).element===e&&r.type===t&&r.fn===o)return n}(e,t,o);if(n){var r=l[n].wrapper;return l.splice(n,1),r}}o.g.addEventListener||(s=function(e,t,n){return e.attachEvent("on"+t,function(e,t,n){var r=c(e,t,n)||function(e,t,n){return function(t){var r=t||o.g.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,n.call(e,r)}}(e,0,n);return l.push({wrapper:r,element:e,type:t,fn:n}),r}(e,t,n))},a=function(e,t,o){var n=c(e,t,o);if(n)return e.detachEvent("on"+t,n)}),e.exports={add:s,remove:a,fabricate:function(e,t,o){var s=-1===r.indexOf(t)?new n(t,{detail:o}):function(){var e;return i.createEvent?(e=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(e=i.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(s):e.fireEvent("on"+t,s)}}},4874:(e,t,o)=>{var n=[],r="",i=/^on/;for(r in o.g)i.test(r)&&n.push(r.slice(2));e.exports=n},9638:(e,t,o)=>{var n=o.g.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"function"==typeof document.createEvent?function(e,t){var o=document.createEvent("CustomEvent");return t?o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):o.initCustomEvent(e,!1,!1,void 0),o}:function(e,t){var o=document.createEventObject();return o.type=e,t?(o.bubbles=Boolean(t.bubbles),o.cancelable=Boolean(t.cancelable),o.detail=t.detail):(o.bubbles=!1,o.cancelable=!1,o.detail=void 0),o}},3249:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=void 0;var r=function(){};n(o(139)).default&&(r=document.addEventListener?function(e,t,o,n){return e.removeEventListener(t,o,n||!1)}:document.attachEvent?function(e,t,o){return e.detachEvent("on"+t,o)}:void 0);var i=r;t.default=i,e.exports=t.default},1416:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=void 0;var r=function(){};n(o(139)).default&&(r=document.addEventListener?function(e,t,o,n){return e.addEventListener(t,o,n||!1)}:document.attachEvent?function(e,t,o){return e.attachEvent("on"+t,(function(t){(t=t||window.event).target=t.target||t.srcElement,t.currentTarget=e,o.call(e,t)}))}:void 0);var i=r;t.default=i,e.exports=t.default},9981:(e,t)=>{t.__esModule=!0,t.default=function(e){return e&&e.ownerDocument||document},e.exports=t.default},1629:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=void 0;var r=n(o(139)).default?function(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):i(e,t)}:i;function i(e,t){if(t)do{if(t===e)return!0}while(t=t.parentNode);return!1}t.default=r,e.exports=t.default},7624:(e,t)=>{t.__esModule=!0,t.default=function(e){return e===e.window?e:9===e.nodeType&&(e.defaultView||e.parentWindow)},e.exports=t.default},2565:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){var t=(0,s.default)(e),o=(0,i.default)(t),n=t&&t.documentElement,a={top:0,left:0,height:0,width:0};if(t)return(0,r.default)(n,e)?(void 0!==e.getBoundingClientRect&&(a=e.getBoundingClientRect()),{top:a.top+(o.pageYOffset||n.scrollTop)-(n.clientTop||0),left:a.left+(o.pageXOffset||n.scrollLeft)-(n.clientLeft||0),width:(null==a.width?e.offsetWidth:a.width)||0,height:(null==a.height?e.offsetHeight:a.height)||0}):a};var r=n(o(1629)),i=n(o(7624)),s=n(o(9981));e.exports=t.default},2939:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){for(var t=(0,r.default)(e),o=e&&e.offsetParent;o&&"html"!==s(e)&&"static"===(0,i.default)(o,"position");)o=o.offsetParent;return o||t.documentElement};var r=n(o(9981)),i=n(o(162));function s(e){return e.nodeName&&e.nodeName.toLowerCase()}e.exports=t.default},7265:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e,t){var o,n={top:0,left:0};return"fixed"===(0,c.default)(e,"position")?o=e.getBoundingClientRect():(t=t||(0,s.default)(e),o=(0,i.default)(e),"html"!==function(e){return e.nodeName&&e.nodeName.toLowerCase()}(t)&&(n=(0,i.default)(t)),n.top+=parseInt((0,c.default)(t,"borderTopWidth"),10)-(0,a.default)(t)||0,n.left+=parseInt((0,c.default)(t,"borderLeftWidth"),10)-(0,l.default)(t)||0),(0,r.default)({},o,{top:o.top-n.top-(parseInt((0,c.default)(e,"marginTop"),10)||0),left:o.left-n.left-(parseInt((0,c.default)(e,"marginLeft"),10)||0)})};var r=n(o(434)),i=n(o(2565)),s=n(o(2939)),a=n(o(504)),l=n(o(5770)),c=n(o(162));e.exports=t.default},5770:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e,t){var o=(0,r.default)(e);if(void 0===t)return o?"pageXOffset"in o?o.pageXOffset:o.document.documentElement.scrollLeft:e.scrollLeft;o?o.scrollTo(t,"pageYOffset"in o?o.pageYOffset:o.document.documentElement.scrollTop):e.scrollLeft=t};var r=n(o(7624));e.exports=t.default},504:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e,t){var o=(0,r.default)(e);if(void 0===t)return o?"pageYOffset"in o?o.pageYOffset:o.document.documentElement.scrollTop:e.scrollTop;o?o.scrollTo("pageXOffset"in o?o.pageXOffset:o.document.documentElement.scrollLeft,t):e.scrollTop=t};var r=n(o(7624));e.exports=t.default},7023:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){if(!e)throw new TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):{getPropertyValue:function(t){var o=e.style;"float"==(t=(0,r.default)(t))&&(t="styleFloat");var n=e.currentStyle[t]||null;if(null==n&&o&&o[t]&&(n=o[t]),s.test(n)&&!i.test(t)){var a=o.left,l=e.runtimeStyle,c=l&&l.left;c&&(l.left=e.currentStyle.left),o.left="fontSize"===t?"1em":n,n=o.pixelLeft+"px",o.left=a,c&&(l.left=c)}return n}}};var r=n(o(3497)),i=/^(top|right|bottom|left)$/,s=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;e.exports=t.default},162:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e,t,o){var n="",d="",h=t;if("string"==typeof t){if(void 0===o)return e.style[(0,r.default)(t)]||(0,s.default)(e).getPropertyValue((0,i.default)(t));(h={})[t]=o}Object.keys(h).forEach((function(t){var o=h[t];o||0===o?(0,c.default)(t)?d+=t+"("+o+") ":n+=(0,i.default)(t)+": "+o+";":(0,a.default)(e,(0,i.default)(t))})),d&&(n+=l.transform+": "+d+";"),e.style.cssText+=";"+n};var r=n(o(3497)),i=n(o(4403)),s=n(o(7023)),a=n(o(1760)),l=o(702),c=n(o(3293));e.exports=t.default},1760:(e,t)=>{t.__esModule=!0,t.default=function(e,t){return"removeProperty"in e.style?e.style.removeProperty(t):e.style.removeAttribute(t)},e.exports=t.default},3293:(e,t)=>{t.__esModule=!0,t.default=function(e){return!(!e||!o.test(e))};var o=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.exports=t.default},702:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var r,i,s,a,l,c,d,h,u,p,f,m=n(o(139)),g="transform";if(t.transform=g,t.animationEnd=s,t.transitionEnd=i,t.transitionDelay=d,t.transitionTiming=c,t.transitionDuration=l,t.transitionProperty=a,t.animationDelay=f,t.animationTiming=p,t.animationDuration=u,t.animationName=h,m.default){var b=function(){for(var e,t,o=document.createElement("div").style,n={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},r=Object.keys(n),i="",s=0;s<r.length;s++){var a=r[s];if(a+"TransitionProperty"in o){i="-"+a.toLowerCase(),e=n[a]("TransitionEnd"),t=n[a]("AnimationEnd");break}}return!e&&"transitionProperty"in o&&(e="transitionend"),!t&&"animationName"in o&&(t="animationend"),o=null,{animationEnd:t,transitionEnd:e,prefix:i}}();r=b.prefix,t.transitionEnd=i=b.transitionEnd,t.animationEnd=s=b.animationEnd,t.transform=g=r+"-"+g,t.transitionProperty=a=r+"-transition-property",t.transitionDuration=l=r+"-transition-duration",t.transitionDelay=d=r+"-transition-delay",t.transitionTiming=c=r+"-transition-timing-function",t.animationName=h=r+"-animation-name",t.animationDuration=u=r+"-animation-duration",t.animationTiming=p=r+"-animation-delay",t.animationDelay=f=r+"-animation-timing-function"}var v={transform:g,end:i,property:a,timing:c,delay:d,duration:l};t.default=v},1908:(e,t)=>{t.__esModule=!0,t.default=function(e){return e.replace(o,(function(e,t){return t.toUpperCase()}))};var o=/-(.)/g;e.exports=t.default},3497:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){return(0,r.default)(e.replace(i,"ms-"))};var r=n(o(1908)),i=/^-ms-/;e.exports=t.default},1185:(e,t)=>{t.__esModule=!0,t.default=function(e){return e.replace(o,"-$1").toLowerCase()};var o=/([A-Z])/g;e.exports=t.default},4403:(e,t,o)=>{var n=o(4836);t.__esModule=!0,t.default=function(e){return(0,r.default)(e).replace(i,"-ms-")};var r=n(o(1185)),i=/^ms-/;e.exports=t.default},139:(e,t)=>{t.__esModule=!0,t.default=void 0;var o=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=o,e.exports=t.default},9425:e=>{var t={};function o(e){var o=t[e];return o?o.lastIndex=0:t[e]=o=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),o}e.exports={add:function(e,t){var n=e.className;n.length?o(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(o(t)," ").trim()}}},7137:(e,t,o)=>{var n=o(5229),r=o(1808),i=o(9425),s=document,a=s.documentElement;function l(e,t,n,i){o.g.navigator.pointerEnabled?r[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],i):o.g.navigator.msPointerEnabled?r[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],i):(r[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],i),r[t](e,n,i))}function c(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function d(e,t){return void 0!==o.g[t]?o.g[t]:a.clientHeight?a[e]:s.body[e]}function h(e,t,o){var n,r=e||{},i=r.className;return r.className+=" gu-hide",n=s.elementFromPoint(t,o),r.className=i,n}function u(){return!1}function p(){return!0}function f(e){return e.width||e.right-e.left}function m(e){return e.height||e.bottom-e.top}function g(e){return e.parentNode===s?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||v(e)}function v(e){return!!e&&"false"!==e.contentEditable&&("true"===e.contentEditable||v(g(e)))}function y(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function w(e,t){var o=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),n={pageX:"clientX",pageY:"clientY"};return e in n&&!(e in o)&&n[e]in o&&(e=n[e]),o[e]}e.exports=function(e,t){var o,v,C,x,S,_,T,R,k,E,O;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var I,M=null,D=t||{};void 0===D.moves&&(D.moves=p),void 0===D.accepts&&(D.accepts=p),void 0===D.invalid&&(D.invalid=function(){return!1}),void 0===D.containers&&(D.containers=e||[]),void 0===D.isContainer&&(D.isContainer=u),void 0===D.copy&&(D.copy=!1),void 0===D.copySortSource&&(D.copySortSource=!1),void 0===D.revertOnSpill&&(D.revertOnSpill=!1),void 0===D.removeOnSpill&&(D.removeOnSpill=!1),void 0===D.direction&&(D.direction="vertical"),void 0===D.ignoreInputTextSelection&&(D.ignoreInputTextSelection=!0),void 0===D.mirrorContainer&&(D.mirrorContainer=s.body);var $=n({containers:D.containers,start:function(e){var t=F(e);t&&B(t)},end:W,cancel:q,remove:Z,destroy:function(){A(!0),j({})},canMove:function(e){return!!F(e)},dragging:!1});return!0===D.removeOnSpill&&$.on("over",(function(e){i.rm(e,"gu-hide")})).on("out",(function(e){$.dragging&&i.add(e,"gu-hide")})),A(),$;function N(e){return-1!==$.containers.indexOf(e)||D.isContainer(e)}function A(e){var t=e?"remove":"add";l(a,t,"mousedown",L),l(a,t,"mouseup",j)}function P(e){l(a,e?"remove":"add","mousemove",G)}function z(e){var t=e?"remove":"add";r[t](a,"selectstart",H),r[t](a,"click",H)}function H(e){I&&e.preventDefault()}function L(e){if(_=e.clientX,T=e.clientY,1===c(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,o=F(t);o&&(I=o,P(),"mousedown"===e.type&&(b(t)?t.focus():e.preventDefault()))}}function G(e){if(I)if(0!==c(e)){if(void 0===e.clientX||e.clientX!==_||void 0===e.clientY||e.clientY!==T){if(D.ignoreInputTextSelection){var t=w("clientX",e),n=w("clientY",e);if(b(s.elementFromPoint(t,n)))return}var r=I;P(!0),z(),W(),B(r);var h,u={left:(h=C.getBoundingClientRect()).left+d("scrollLeft","pageXOffset"),top:h.top+d("scrollTop","pageYOffset")};x=w("pageX",e)-u.left,S=w("pageY",e)-u.top,i.add(E||C,"gu-transit"),function(){if(!o){var e=C.getBoundingClientRect();(o=C.cloneNode(!0)).style.width=f(e)+"px",o.style.height=m(e)+"px",i.rm(o,"gu-transit"),i.add(o,"gu-mirror"),D.mirrorContainer.appendChild(o),l(a,"add","mousemove",Q),i.add(D.mirrorContainer,"gu-unselectable"),$.emit("cloned",o,C,"mirror")}}(),Q(e)}}else j({})}function F(e){if(!($.dragging&&o||N(e))){for(var t=e;g(e)&&!1===N(g(e));){if(D.invalid(e,t))return;if(!(e=g(e)))return}var n=g(e);if(n&&!D.invalid(e,t)&&D.moves(e,n,t,y(e)))return{item:e,source:n}}}function B(e){var t,o;t=e.item,o=e.source,("boolean"==typeof D.copy?D.copy:D.copy(t,o))&&(E=e.item.cloneNode(!0),$.emit("cloned",E,e.item,"copy")),v=e.source,C=e.item,R=k=y(e.item),$.dragging=!0,$.emit("drag",C,v)}function W(){if($.dragging){var e=E||C;V(e,g(e))}}function U(){I=!1,P(!0),z(!0)}function j(e){if(U(),$.dragging){var t=E||C,n=w("clientX",e),r=w("clientY",e),i=X(h(o,n,r),n,r);i&&(E&&D.copySortSource||!E||i!==v)?V(t,i):D.removeOnSpill?Z():q()}}function V(e,t){var o=g(e);E&&D.copySortSource&&t===v&&o.removeChild(C),Y(t)?$.emit("cancel",e,v,v):$.emit("drop",e,t,v,k),K()}function Z(){if($.dragging){var e=E||C,t=g(e);t&&t.removeChild(e),$.emit(E?"cancel":"remove",e,t,v),K()}}function q(e){if($.dragging){var t=arguments.length>0?e:D.revertOnSpill,o=E||C,n=g(o),r=Y(n);!1===r&&t&&(E?n&&n.removeChild(E):v.insertBefore(o,R)),r||t?$.emit("cancel",o,v,v):$.emit("drop",o,n,v,k),K()}}function K(){var e=E||C;U(),o&&(i.rm(D.mirrorContainer,"gu-unselectable"),l(a,"remove","mousemove",Q),g(o).removeChild(o),o=null),e&&i.rm(e,"gu-transit"),O&&clearTimeout(O),$.dragging=!1,M&&$.emit("out",e,M,v),$.emit("dragend",e),v=C=E=R=k=O=M=null}function Y(e,t){var n;return n=void 0!==t?t:o?k:y(E||C),e===v&&n===R}function X(e,t,o){for(var n=e;n&&!r();)n=g(n);return n;function r(){if(!1===N(n))return!1;var r=J(n,e),i=ee(n,r,t,o);return!!Y(n,i)||D.accepts(C,n,v,i)}}function Q(e){if(o){e.preventDefault();var t=w("clientX",e),n=w("clientY",e),r=t-x,i=n-S;o.style.left=r+"px",o.style.top=i+"px";var s=E||C,a=h(o,t,n),l=X(a,t,n),c=null!==l&&l!==M;(c||null===l)&&(M&&f("out"),M=l,c&&f("over"));var d=g(s);if(l!==v||!E||D.copySortSource){var u,p=J(l,a);if(null!==p)u=ee(l,p,t,n);else{if(!0!==D.revertOnSpill||E)return void(E&&d&&d.removeChild(s));u=R,l=v}(null===u&&c||u!==s&&u!==y(s))&&(k=u,l.insertBefore(s,u),$.emit("shadow",s,l,v))}else d&&d.removeChild(s)}function f(e){$.emit(e,s,M,v)}}function J(e,t){for(var o=t;o!==e&&g(o)!==e;)o=g(o);return o===a?null:o}function ee(e,t,o,n){var r="horizontal"===D.direction,i=t!==e?function(){var e=t.getBoundingClientRect();return s(r?o>e.left+f(e)/2:n>e.top+m(e)/2)}():function(){var t,i,s,a=e.children.length;for(t=0;t<a;t++){if(s=(i=e.children[t]).getBoundingClientRect(),r&&s.left+s.width/2>o)return i;if(!r&&s.top+s.height/2>n)return i}return null}();return i;function s(e){return e?y(t):t}}}},9915:(e,t,o)=>{o.d(t,{Z:()=>m});var n=o(4184),r=o.n(n),i=o(6689),s=o.n(i);class a{name;notify;constructor(e,t){this.name=e,this.notify=t}}class l{observer;unsubscribeCallback;constructor(e,t){this.observer=e,this.unsubscribeCallback=t}unsubscribe(){this.unsubscribeCallback(this.observer)}}const c=new class{observers;constructor(){this.observers=new Set}broadcast(e){this.observers&&this.observers.forEach((t=>{e.name===t.name&&t.notify(e)}))}subscribe(e,t){const o=new a(e,t);return this.observers.add(o),new l(o,(e=>{this.observers.delete(e)}))}unsubscribe(e){e&&e.unsubscribe()}},d="ON_DRAG_START",h="ON_DRAG_END";let u=null;const p=new Map;class f extends s().Component{dndComponentRef=s().createRef();mounted=!1;onDragStartSubscription;onDragEndSubscription;constructor(e){super(e),this.onDragStartSubscription=c.subscribe(d,(e=>{const t=null!==e.content&&p.get(e.content);this.setState({isDroppable:this.canDrop(void 0,t,this.props.dndData)})})),this.onDragEndSubscription=c.subscribe(h,(()=>{this.mounted&&this.setState({isDroppable:!1})})),this.state={isDragging:!1,isDroppable:!1,isOver:!1}}componentDidMount(){if(this.mounted=!0,null!==u){const e=p.get(u);this.setState({isDroppable:this.canDrop(void 0,e,this.props.dndData)})}}componentWillUnmount(){this.mounted=!1,this.onDragStartSubscription.unsubscribe(),this.onDragEndSubscription.unsubscribe()}canDrop(e,t,o){const{canDrop:n}=this.props;return n&&("boolean"==typeof n||n(e,t,o))}addDragEndEventListenerOnce(){const e=this.dndComponentRef?.current;e&&(e.removeEventListener("dragend",this.onDragEnd),e.addEventListener("dragend",this.onDragEnd,{once:!0}))}isDraggable(){const{canDrag:e,dndData:t}=this.props;return!!e&&("boolean"==typeof e||e(t))}onDragEnter(e){if(e.stopPropagation(),this.setState({isOver:!0}),this.props.onDragEnter){const t=p.get(u);this.props.onDragEnter(e,t,this.props.dndData)}}onDragLeave(e){e.stopPropagation();const t=p.get(u);this.props.onDragLeave&&this.props.onDragLeave(e,t,this.props.dndData),this.setState({isDroppable:this.canDrop(void 0,t,this.props.dndData),isOver:!1})}onDrag(e){e.stopPropagation()}onDragOver(e){e.stopPropagation();const t=p.get(u);this.canDrop(e,t,this.props.dndData)&&(e.preventDefault(),this.setState({isOver:!0}))}onDragStart(e){e.stopPropagation();const{dndData:t,dndId:o,onBeginDrag:n}=this.props;u=o,p.set(u,t),this.addDragEndEventListenerOnce(),c.broadcast({name:d,content:u}),n&&n(e,t),this.setState({isDragging:!0})}onDragEnd=e=>{e.stopPropagation();const{dndData:t,onEndDrag:o}=this.props;o&&o(e,p.get(u),t),c.broadcast({name:h,content:u}),p.delete(u),u=null,this.mounted&&this.setState({isDragging:!1})};onDrop(e){e.stopPropagation();const{dndData:t,onDrop:o}=this.props;o&&(o(e,p.get(u),t),this.setState({isOver:!1}))}cloneChildrenWithShallowMergedProps(e,t){if(e)return s().Children.map(e,(e=>s().isValidElement(e)?s().cloneElement(e,t):e))}render(){const{children:e,className:t,forwardDndPropsToChildren:o,style:n}=this.props,{isDragging:i,isDroppable:a,isOver:l}=this.state,c=this.isDraggable(),d=r()("dnd-component",t,{draggable:c,dragging:i,droppable:a,hovering:l});return s().createElement("div",{className:d,draggable:c,onDrag:e=>this.onDrag(e),onDragEnter:e=>this.onDragEnter(e),onDragLeave:e=>this.onDragLeave(e),onDragOver:e=>this.onDragOver(e),onDragStart:e=>this.onDragStart(e),onDrop:e=>this.onDrop(e),ref:this.dndComponentRef,style:n},o?this.cloneChildrenWithShallowMergedProps(e,{isDraggable:c,isDragging:i,isDroppable:a,isOver:l}):e)}}var m=f},3607:(e,t,o)=>{o.d(t,{Z:()=>ns});var n={};o.r(n),o.d(n,{types:()=>ni});var r=o(4184),i=o.n(r),s=o(6689),a=o.n(s);function l(e){switch(e){case 48:return 0;case 49:return 1;case 50:return 2;case 51:return 3;case 52:return 4;case 53:return 5;case 54:return 6;case 55:return 7;case 56:return 8;case 57:return 9;case 97:case 65:return 10;case 98:case 66:return 11;case 99:case 67:return 12;case 100:case 68:return 13;case 101:case 69:return 14;case 102:case 70:return 15}return 0}function c(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}function d(e){const t=e.h/360,{s:o,l:n,a:r}=e;let i,s,a;if(0===o)i=s=a=n;else{const e=n<.5?n*(1+o):n+o-n*o,r=2*n-e;i=c(r,e,t+1/3),s=c(r,e,t),a=c(r,e,t-1/3)}return{type:"rgba",r:Math.round(255*i),g:Math.round(255*s),b:Math.round(255*a),a:r}}const h=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function u(e){if(0===(e=e.trim()).length)return null;if(35===e.charCodeAt(0))return function(e){const t=(e=e.trim()).length;if(0===t)return null;if(35!==e.charCodeAt(0))return null;if(7===t)return{type:"rgba",r:16*l(e.charCodeAt(1))+l(e.charCodeAt(2)),g:16*l(e.charCodeAt(3))+l(e.charCodeAt(4)),b:16*l(e.charCodeAt(5))+l(e.charCodeAt(6)),a:1};if(9===t)return{type:"rgba",r:16*l(e.charCodeAt(1))+l(e.charCodeAt(2)),g:16*l(e.charCodeAt(3))+l(e.charCodeAt(4)),b:16*l(e.charCodeAt(5))+l(e.charCodeAt(6)),a:(16*l(e.charCodeAt(7))+l(e.charCodeAt(8)))/255};if(4===t){const t=l(e.charCodeAt(1)),o=l(e.charCodeAt(2)),n=l(e.charCodeAt(3));return{type:"rgba",r:16*t+t,g:16*o+o,b:16*n+n,a:1}}if(5===t){const t=l(e.charCodeAt(1)),o=l(e.charCodeAt(2)),n=l(e.charCodeAt(3)),r=l(e.charCodeAt(4));return{type:"rgba",r:16*t+t,g:16*o+o,b:16*n+n,a:(16*r+r)/255}}return null}(e);const t=h.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}return"hsl"===o||"hsla"===o?d({h:n[0],s:n[1],l:n[2],a:n[3]}):{type:"rgba",r:n[0],g:n[1],b:n[2],a:n[3]}}const p=e=>{return"hsla"===(t=u(e)).type&&(t=d(t)),(299*t.r+587*t.g+114*t.b)/1e3<128?"#FFFFFF":"#000000";var t};var f=o(827),m=o(3308);const g=e=>!(e===f.o$||e===f.lH),b=/^.*(:?\n){0,2}/m;function v(e,t="\n"){return e.replace("\n"===t?b:new RegExp(`^.*(:?${t}){0,2}`,"m"),"")}const y=/^co-authored-by:\s*([^\s<>]+(?:\s+[^\s<>]+)*)\s*<([^<>]+)>/gim;function w(e){const t=[];for(let o=y.exec(e);null!==o;o=y.exec(e)){const[,e,n]=o;t.push({name:e,email:n})}return t}var C=o(376),x=o(7675);const S=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,_=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,T=new Map;let R;const k=["th","st","nd","rd"];function E(e){const t=e%100;return`${e}${k[(t-20)%10]??k[t]??k[0]}`}let O={};function I(e,t,o,n){const r=`${e}${n?"_compact":""}`;let i=O[e];return i||(i=o+e*t+t/2,O[r]=i,i)}const M={d:"d",fill:"fill","shape-rendering":"shapeRendering","stroke-linejoin":"strokeLinejoin","stroke-width":"strokeWidth","stroke-dasharray":"strokeDasharray",stroke:"stroke",x1:"x1",x2:"x2",y1:"y1",y2:"y2"};function D(e,t){let o="";for(const[e,n]of Object.entries(M)){const r=t[n];r&&(o+=` ${e}="${r}"`)}return`<${e}${o} />`}function $(e){return D("line",e)}function N(e,t,o,n){return{fill:"none",shapeRendering:"auto",strokeLinejoin:"round",strokeWidth:o,strokeDasharray:g(e)?n?1:2:0,stroke:t}}function A(e,t,o,n){return`${e}_${t}_${o||"+"}${n?"_compact":""}`}function P(e,t,o){return`${e}_${t||"+"}${o?"_compact":""}`}var z=o(5191),H=o(466);const L={"CommitDiffSection-FileAdded":"added","CommitDiffSection-FileDeleted":"deleted","CommitDiffSection-FileModified":"modified","CommitDiffSection-FileRenamed":"renamed","CommitDiffSection-NFilesAdded":"{0} added","CommitDiffSection-NFilesDeleted":"{0} deleted","CommitDiffSection-NFilesModified":"{0} modified","CommitDiffSection-NFilesRenamed":"{0} renamed","Graph-IsLoadingRows":"Loading...","Graph-NoCommits":"No commits","Graph-WorkInProgress":"Work in progress","GraphHeader-BranchTag":"BRANCH / TAG","GraphHeader-Changes":"CHANGES","GraphHeader-CommitAuthor":"AUTHOR","GraphHeader-CommitDateTime":"COMMIT DATE / TIME","GraphHeader-CommitGraph":"GRAPH","GraphHeader-CommitMessage":"COMMIT MESSAGE","GraphHeader-CommitSha":"SHA","GraphHeader-EditColumns":"Columns settings","GraphHeader-Filter":"Filter","GraphHeader-HiddenRefs-btn":"Hidden Branches / Tags","OptionalGraphZone-CommitAuthor":"Author","OptionalGraphZone-CommitDateTime":"Date / Time","OptionalGraphZone-CommitSha":"Sha","IssueIcon-Tooltip":"{0}: {1}","PullRequestIcon-Tooltip":"#{0}: {1}\n Double-click to open pull request on {2}","Ref-Current":"Current Branch","Ref-Local":"Local Branch","Ref-Remote":"Remote Branch","Ref-Tag":"Tag","RefZone-EnterBranchName":"enter branch name","RefZone-EnterTagName":"enter tag name","Timeline-1HourAgo":"1 hour ago","Timeline-NHoursAgo":"{0} hours ago","Timeline-Yesterday":"yesterday","Timeline-NDaysAgo":"{0} days ago","Timeline-1WeekAgo":"a week ago","Timeline-NWeeksAgo":"{0} weeks ago","Timeline-1MonthAgo":"a month ago","Timeline-NMonthsAgo":"{0} months ago","Timeline-1YearAgo":"a year ago","Timeline-NYearsAgo":"{0} years ago","Timeline-NPlusYearsAgo":"{0}+ years ago","UpstreamIndicatorIcon-BehindAndAheadTooltip":"{0} commit(s) behind and {1} commit(s) ahead of {2}\n Double-click to pull changes","UpstreamIndicatorIcon-BehindTooltip":"{0} commit(s) behind {1}\n Double-click to pull changes","UpstreamIndicatorIcon-AheadTooltip":"{0} commit(s) ahead of {1}\n Double-click to pull changes",ResizePanel:"Resize Panel",Stash:"Stash",Hide:"Hide",Show:"Show","WorkDirMessageInput-WIPPlaceholder":"WIP"};var G=o(8649),F=o(4561);const B={0:1,90:0,180:-1,270:0},W={0:0,90:1,180:0,270:-1},U=m.O5-m.NP,j=` A ${U} ${U} 0 0 0 `;function V(e,t,o){const n=B[o],r=W[o];return{x:e-m.O5*n,xOffset:-n*m.NP,y:t+m.O5*r,yOffset:r*m.NP}}const Z={};var q=function(e,t,o,n,r,i,s,a){const l=N(n,e,s,a);return l.d=function(e,t,o,n){const r=`${e}_${t}_${o}_${n}`;let i=Z[r];if(i)return i;const s=V(e,t,n),a=V(e,t,o);return i=`M ${s.x} ${s.y}${a.xOffset?` H ${s.x+a.xOffset}`:` V ${s.y+a.yOffset}`}${j}${a.x+s.xOffset} ${a.y+s.yOffset}${s.xOffset?` H ${a.x}`:` V ${a.y}`}`,Z[r]=i,i}(r,i,o,t),D("path",l)};let K={};function Y(e,t,o,n,r,i,s,a){const l=A(e,t,o,a);let c=K[l];return c||(c=function(e,t){return e===t}(t,e)?function(e,t,o,n,r,i,s){const a=N(o,e,i,s);return a.x1=I(t,n,r,s),a.x2=I(t,n,r,s),a.y1=0,a.y2=m.at/2,$(a)}(n[e],t,o,r,i,s,a):function(e,t,o,n,r,i,s,a){const l=N(n,e,s,a),c=t<o?-m.O5:m.O5,d={...l};d.x1=I(o,r,i,a),d.x2=I(o,r,i,a),d.y1=0,d.y2=m.An;const h={...l};return h.x1=I(o,r,i,a)+c,h.x2=I(t,r,i,a),h.y1=m.at/2,h.y2=m.at/2,`<g>${$(d)}${q(e,t>o?0:90,t>o?90:180,n,I(o,r,i,a)+c,m.An,s,a)}${$(h)}</g>`}(n[e],t,e,o,r,i,s,a),K[l]=c,c)}let X={};function Q(e,t,o,n,r,i,s){const a=P(e,t,s);let l=X[a];if(l)return l;const c=I(e,n,r,s),d=N(t,o[e],i,s);return d.x1=c,d.x2=c,d.y1=0,d.y2=m.at,l=$(d),X[a]=l,l}let J={};function ee(e,t,o,n,r,i,s,a){const l=A(e,t,o,a);let c=J[l];return c||(c=function(e,t){return e===t}(t,e)?function(e,t,o,n,r,i,s){const a=N(o,e,i,s);return a.x1=I(t,n,r,s),a.x2=I(t,n,r,s),a.y1=m.at/2,a.y2=m.at,$(a)}(n[e],t,o,r,i,s,a):function(e,t,o,n,r,i,s,a){const l=N(n,e,s,a),c=t<o?-m.O5:m.O5,d={...l};d.x1=I(o,r,i,a),d.x2=I(o,r,i,a),d.y1=m.at-m.$s,d.y2=m.at;const h={...l};return h.x1=I(o,r,i,a)+c,h.x2=I(t,r,i,a),h.y1=m.at/2,h.y2=m.at/2,`<g>${q(e,t<o?180:270,t<o?270:0,n,I(o,r,i,a)+c,m.at-m.$s,s,a)}${$(d)}${$(h)}</g>`}(n[e],t,e,o,r,i,s,a),J[l]=c,c)}let te={};function oe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ne(e){return ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(e)}function re(e){var t=function(e,t){if("object"!==ne(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==ne(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===ne(t)?t:String(t)}function ie(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,re(n.key),n)}}function se(e,t,o){return t&&ie(e.prototype,t),o&&ie(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function le(e,t){if(t&&("object"===ne(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ae(e)}function ce(e){return ce=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ce(e)}function de(e,t){return de=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},de(e,t)}function he(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&de(e,t)}function ue(e,t,o){return(t=re(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var pe=o(6871);function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},fe.apply(this,arguments)}function me(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=me(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}const ge=function(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=me(e))&&(n&&(n+=" "),n+=t);return n};function be(e){var t=e.cellCount,o=e.cellSize,n=e.computeMetadataCallback,r=e.computeMetadataCallbackProps,i=e.nextCellsCount,s=e.nextCellSize,a=e.nextScrollToIndex,l=e.scrollToIndex,c=e.updateScrollOffsetForScrollToIndex;t===i&&("number"!=typeof o&&"number"!=typeof s||o===s)||(n(r),l>=0&&l===a&&c())}function ve(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var ye=function(){function e(t){var o=t.cellCount,n=t.cellSizeGetter,r=t.estimatedCellSize;oe(this,e),ue(this,"_cellSizeAndPositionData",{}),ue(this,"_lastMeasuredIndex",-1),ue(this,"_lastBatchedIndex",-1),ue(this,"_cellCount",void 0),ue(this,"_cellSizeGetter",void 0),ue(this,"_estimatedCellSize",void 0),this._cellSizeGetter=n,this._cellCount=o,this._estimatedCellSize=r}return se(e,[{key:"areOffsetsAdjusted",value:function(){return!1}},{key:"configure",value:function(e){var t=e.cellCount,o=e.estimatedCellSize,n=e.cellSizeGetter;this._cellCount=t,this._estimatedCellSize=o,this._cellSizeGetter=n}},{key:"getCellCount",value:function(){return this._cellCount}},{key:"getEstimatedCellSize",value:function(){return this._estimatedCellSize}},{key:"getLastMeasuredIndex",value:function(){return this._lastMeasuredIndex}},{key:"getOffsetAdjustment",value:function(){return 0}},{key:"getSizeAndPositionOfCell",value:function(e){if(e<0||e>=this._cellCount)throw Error("Requested index ".concat(e," is outside of range 0..").concat(this._cellCount));if(e>this._lastMeasuredIndex)for(var t=this.getSizeAndPositionOfLastMeasuredCell(),o=t.offset+t.size,n=this._lastMeasuredIndex+1;n<=e;n++){var r=this._cellSizeGetter({index:n});if(void 0===r||isNaN(r))throw Error("Invalid size returned for cell ".concat(n," of value ").concat(r));null===r?(this._cellSizeAndPositionData[n]={offset:o,size:0},this._lastBatchedIndex=e):(this._cellSizeAndPositionData[n]={offset:o,size:r},o+=r,this._lastMeasuredIndex=e)}return this._cellSizeAndPositionData[e]}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._lastMeasuredIndex>=0?this._cellSizeAndPositionData[this._lastMeasuredIndex]:{offset:0,size:0}}},{key:"getTotalSize",value:function(){var e=this.getSizeAndPositionOfLastMeasuredCell();return e.offset+e.size+(this._cellCount-this._lastMeasuredIndex-1)*this._estimatedCellSize}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,o=void 0===t?"auto":t,n=e.containerSize,r=e.currentOffset,i=e.targetIndex;if(n<=0)return 0;var s,a=this.getSizeAndPositionOfCell(i),l=a.offset,c=l-n+a.size;switch(o){case"start":s=l;break;case"end":s=c;break;case"center":s=l-(n-a.size)/2;break;default:s=Math.max(c,Math.min(l,r))}var d=this.getTotalSize();return Math.max(0,Math.min(d-n,s))}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,o=e.offset;if(0===this.getTotalSize())return{};var n=o+t,r=this._findNearestCell(o),i=this.getSizeAndPositionOfCell(r);o=i.offset+i.size;for(var s=r;o<n&&s<this._cellCount-1;)s++,o+=this.getSizeAndPositionOfCell(s).size;return{start:r,stop:s}}},{key:"resetCell",value:function(e){this._lastMeasuredIndex=Math.min(this._lastMeasuredIndex,e-1)}},{key:"_binarySearch",value:function(e,t,o){for(;t<=e;){var n=t+Math.floor((e-t)/2),r=this.getSizeAndPositionOfCell(n).offset;if(r===o)return n;r<o?t=n+1:r>o&&(e=n-1)}return t>0?t-1:0}},{key:"_exponentialSearch",value:function(e,t){for(var o=1;e<this._cellCount&&this.getSizeAndPositionOfCell(e).offset<t;)e+=o,o*=2;return this._binarySearch(Math.min(e,this._cellCount-1),Math.floor(e/2),t)}},{key:"_findNearestCell",value:function(e){if(isNaN(e))throw Error("Invalid offset ".concat(e," specified"));e=Math.max(0,e);var t=this.getSizeAndPositionOfLastMeasuredCell(),o=Math.max(0,this._lastMeasuredIndex);return t.offset>=e?this._binarySearch(o,0,e):this._exponentialSearch(o,e)}}]),e}(),we=function(){function e(t){var o=t.maxScrollSize,n=void 0===o?"undefined"!=typeof window&&window.chrome?16777100:15e5:o,r=ve(t,["maxScrollSize"]);oe(this,e),ue(this,"_cellSizeAndPositionManager",void 0),ue(this,"_maxScrollSize",void 0),this._cellSizeAndPositionManager=new ye(r),this._maxScrollSize=n}return se(e,[{key:"areOffsetsAdjusted",value:function(){return this._cellSizeAndPositionManager.getTotalSize()>this._maxScrollSize}},{key:"configure",value:function(e){this._cellSizeAndPositionManager.configure(e)}},{key:"getCellCount",value:function(){return this._cellSizeAndPositionManager.getCellCount()}},{key:"getEstimatedCellSize",value:function(){return this._cellSizeAndPositionManager.getEstimatedCellSize()}},{key:"getLastMeasuredIndex",value:function(){return this._cellSizeAndPositionManager.getLastMeasuredIndex()}},{key:"getOffsetAdjustment",value:function(e){var t=e.containerSize,o=e.offset,n=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize(),i=this._getOffsetPercentage({containerSize:t,offset:o,totalSize:r});return Math.round(i*(r-n))}},{key:"getSizeAndPositionOfCell",value:function(e){return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(e)}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell()}},{key:"getTotalSize",value:function(){return Math.min(this._maxScrollSize,this._cellSizeAndPositionManager.getTotalSize())}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,o=void 0===t?"auto":t,n=e.containerSize,r=e.currentOffset,i=e.targetIndex;r=this._safeOffsetToOffset({containerSize:n,offset:r});var s=this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({align:o,containerSize:n,currentOffset:r,targetIndex:i});return this._offsetToSafeOffset({containerSize:n,offset:s})}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,o=e.offset;return o=this._safeOffsetToOffset({containerSize:t,offset:o}),this._cellSizeAndPositionManager.getVisibleCellRange({containerSize:t,offset:o})}},{key:"resetCell",value:function(e){this._cellSizeAndPositionManager.resetCell(e)}},{key:"_getOffsetPercentage",value:function(e){var t=e.containerSize,o=e.offset,n=e.totalSize;return n<=t?0:o/(n-t)}},{key:"_offsetToSafeOffset",value:function(e){var t=e.containerSize,o=e.offset,n=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();if(n===r)return o;var i=this._getOffsetPercentage({containerSize:t,offset:o,totalSize:n});return Math.round(i*(r-t))}},{key:"_safeOffsetToOffset",value:function(e){var t=e.containerSize,o=e.offset,n=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();if(n===r)return o;var i=this._getOffsetPercentage({containerSize:t,offset:o,totalSize:r});return Math.round(i*(n-t))}}]),e}();function Ce(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t={};return function(o){var n=o.callback,r=o.indices,i=Object.keys(r),s=!e||i.every((function(e){var t=r[e];return Array.isArray(t)?t.length>0:t>=0})),a=i.length!==Object.keys(t).length||i.some((function(e){var o=t[e],n=r[e];return Array.isArray(n)?o.join(",")!==n.join(","):o!==n}));t=r,s&&a&&n(r)}}var xe=-1;function Se(e){var t=e.cellSize,o=e.cellSizeAndPositionManager,n=e.previousCellsCount,r=e.previousCellSize,i=e.previousScrollToAlignment,s=e.previousScrollToIndex,a=e.previousSize,l=e.scrollOffset,c=e.scrollToAlignment,d=e.scrollToIndex,h=e.size,u=e.sizeJustIncreasedFromZero,p=e.updateScrollIndexCallback,f=o.getCellCount(),m=d>=0&&d<f;m&&(h!==a||u||!r||"number"==typeof t&&t!==r||c!==i||d!==s)?p(d):!m&&f>0&&(h<a||f<n)&&l>o.getTotalSize()-h&&p(f-1)}const _e=!("undefined"==typeof window||!window.document||!window.document.createElement);var Te,Re;function ke(e){if((!Te&&0!==Te||e)&&_e){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),Te=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Te}var Ee,Oe,Ie=(Re="undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).requestAnimationFrame||Re.webkitRequestAnimationFrame||Re.mozRequestAnimationFrame||Re.oRequestAnimationFrame||Re.msRequestAnimationFrame||function(e){return Re.setTimeout(e,1e3/60)},Me=Re.cancelAnimationFrame||Re.webkitCancelAnimationFrame||Re.mozCancelAnimationFrame||Re.oCancelAnimationFrame||Re.msCancelAnimationFrame||function(e){Re.clearTimeout(e)},De=Ie,$e=Me,Ne=function(e){return $e(e.id)},Ae=function(e,t){var o;Promise.resolve().then((function(){o=Date.now()}));var n={id:De((function r(){Date.now()-o>=t?e.call():n.id=De(r)}))};return n};function Pe(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function ze(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Pe(o,!0).forEach((function(t){ue(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Pe(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var He="requested",Le=(Oe=Ee=function(e){function t(e){var o;oe(this,t),ue(ae(o=le(this,ce(t).call(this,e))),"_onGridRenderedMemoizer",Ce()),ue(ae(o),"_onScrollMemoizer",Ce(!1)),ue(ae(o),"_deferredInvalidateColumnIndex",null),ue(ae(o),"_deferredInvalidateRowIndex",null),ue(ae(o),"_recomputeScrollLeftFlag",!1),ue(ae(o),"_recomputeScrollTopFlag",!1),ue(ae(o),"_horizontalScrollBarSize",0),ue(ae(o),"_verticalScrollBarSize",0),ue(ae(o),"_scrollbarPresenceChanged",!1),ue(ae(o),"_scrollingContainer",void 0),ue(ae(o),"_childrenToDisplay",void 0),ue(ae(o),"_columnStartIndex",void 0),ue(ae(o),"_columnStopIndex",void 0),ue(ae(o),"_rowStartIndex",void 0),ue(ae(o),"_rowStopIndex",void 0),ue(ae(o),"_renderedColumnStartIndex",0),ue(ae(o),"_renderedColumnStopIndex",0),ue(ae(o),"_renderedRowStartIndex",0),ue(ae(o),"_renderedRowStopIndex",0),ue(ae(o),"_initialScrollTop",void 0),ue(ae(o),"_initialScrollLeft",void 0),ue(ae(o),"_disablePointerEventsTimeoutId",void 0),ue(ae(o),"_styleCache",{}),ue(ae(o),"_cellCache",{}),ue(ae(o),"_debounceScrollEndedCallback",(function(){o._disablePointerEventsTimeoutId=null,o.setState({isScrolling:!1,needToResetStyleCache:!1})})),ue(ae(o),"_invokeOnGridRenderedHelper",(function(){var e=o.props.onSectionRendered;o._onGridRenderedMemoizer({callback:e,indices:{columnOverscanStartIndex:o._columnStartIndex,columnOverscanStopIndex:o._columnStopIndex,columnStartIndex:o._renderedColumnStartIndex,columnStopIndex:o._renderedColumnStopIndex,rowOverscanStartIndex:o._rowStartIndex,rowOverscanStopIndex:o._rowStopIndex,rowStartIndex:o._renderedRowStartIndex,rowStopIndex:o._renderedRowStopIndex}})})),ue(ae(o),"_onWheel",(function(e){var t=e.deltaX,n=e.deltaY;o.handleWheelEvent({deltaX:t,deltaY:n})})),ue(ae(o),"_setScrollingContainerRef",(function(e){e&&(e.removeEventListener("wheel",o.preventDefault),e.addEventListener("wheel",o.preventDefault,{passive:!1})),o._scrollingContainer=e})),ue(ae(o),"_onScroll",(function(e){e.target===o._scrollingContainer&&o.handleScrollEvent(e.target)}));var n=new we({cellCount:e.columnCount,cellSizeGetter:function(o){return t._wrapSizeGetter(e.columnWidth)(o)},estimatedCellSize:t._getEstimatedColumnSize(e)}),r=new we({cellCount:e.rowCount,cellSizeGetter:function(o){return t._wrapSizeGetter(e.rowHeight)(o)},estimatedCellSize:t._getEstimatedRowSize(e)});return o.state={instanceProps:{columnSizeAndPositionManager:n,rowSizeAndPositionManager:r,prevColumnWidth:e.columnWidth,prevRowHeight:e.rowHeight,prevColumnCount:e.columnCount,prevRowCount:e.rowCount,prevIsScrolling:!0===e.isScrolling,prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow,scrollbarSize:0,scrollbarSizeMeasured:!1},isScrolling:!1,scrollDirectionHorizontal:1,scrollDirectionVertical:1,scrollLeft:0,scrollTop:0,scrollPositionChangeReason:null,needToResetStyleCache:!1},e.scrollToRow>0&&(o._initialScrollTop=o._getCalculatedScrollTop(e,o.state)),e.scrollToColumn>0&&(o._initialScrollLeft=o._getCalculatedScrollLeft(e,o.state)),o}return he(t,e),se(t,[{key:"getOffsetForCell",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.alignment,o=void 0===t?this.props.scrollToAlignment:t,n=e.columnIndex,r=void 0===n?this.props.scrollToColumn:n,i=e.rowIndex,s=void 0===i?this.props.scrollToRow:i,a=ze({},this.props,{scrollToAlignment:o,scrollToColumn:r,scrollToRow:s});return{scrollLeft:this._getCalculatedScrollLeft(a),scrollTop:this._getCalculatedScrollTop(a)}}},{key:"getTotalRowsHeight",value:function(){return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize()}},{key:"getTotalColumnsWidth",value:function(){return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize()}},{key:"handleScrollEvent",value:function(e){var t=e.scrollLeft,o=void 0===t?0:t,n=e.scrollTop,r=void 0===n?0:n;if(!(r<0)){this._debounceScrollEnded();var i=this.props,s=i.autoHeight,a=i.autoWidth,l=i.height,c=i.width,d=this.state.instanceProps,h=d.scrollbarSize,u=d.rowSizeAndPositionManager.getTotalSize(),p=d.columnSizeAndPositionManager.getTotalSize(),f=Math.min(Math.max(0,p-c+h),o),m=Math.min(Math.max(0,u-l+h),r);if(this.state.scrollLeft!==f||this.state.scrollTop!==m){var g={isScrolling:!0,scrollDirectionHorizontal:f!==this.state.scrollLeft?f>this.state.scrollLeft?1:xe:this.state.scrollDirectionHorizontal,scrollDirectionVertical:m!==this.state.scrollTop?m>this.state.scrollTop?1:xe:this.state.scrollDirectionVertical,scrollPositionChangeReason:"observed"};s||(g.scrollTop=m),a||(g.scrollLeft=f),g.needToResetStyleCache=!1,this.setState(g)}this._invokeOnScrollMemoizer({scrollLeft:f,scrollTop:m,totalColumnsWidth:p,totalRowsHeight:u})}}},{key:"preventDefault",value:function(e){e.preventDefault()}},{key:"handleWheelEvent",value:function(e){var t=e.deltaX,o=e.deltaY;this._debounceScrollEnded();var n=this.props,r=n.autoHeight,i=n.autoWidth,s=n.height,a=n.width,l=this.state.instanceProps.scrollbarSize,c=this.state.instanceProps.rowSizeAndPositionManager.getTotalSize(),d=this.state.instanceProps.columnSizeAndPositionManager.getTotalSize(),h=Math.min(Math.max(0,d-a+l),Math.max(0,this._scrollingContainer.scrollLeft+t)),u=Math.min(Math.max(0,c-s+l),Math.max(0,this._scrollingContainer.scrollTop+o));if(this.state.scrollLeft!==h||this.state.scrollTop!==u){var p={isScrolling:!0,scrollDirectionHorizontal:h!==this.state.scrollLeft?h>this.state.scrollLeft?1:xe:this.state.scrollDirectionHorizontal,scrollDirectionVertical:u!==this.state.scrollTop?u>this.state.scrollTop?1:xe:this.state.scrollDirectionVertical,scrollPositionChangeReason:He};r||(p.scrollTop=u),i||(p.scrollLeft=h),p.needToResetStyleCache=!1,this.setState(p)}this._invokeOnScrollMemoizer({scrollLeft:h,scrollTop:u,totalColumnsWidth:d,totalRowsHeight:c})}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,o=e.rowIndex;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,t):t,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,o):o}},{key:"measureAllCells",value:function(){var e=this.props,t=e.columnCount,o=e.rowCount,n=this.state.instanceProps;n.columnSizeAndPositionManager.getSizeAndPositionOfCell(t-1),n.rowSizeAndPositionManager.getSizeAndPositionOfCell(o-1)}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n,i=this.props,s=i.scrollToColumn,a=i.scrollToRow,l=this.state.instanceProps;l.columnSizeAndPositionManager.resetCell(o),l.rowSizeAndPositionManager.resetCell(r),this._recomputeScrollLeftFlag=s>=0&&(1===this.state.scrollDirectionHorizontal?o<=s:o>=s),this._recomputeScrollTopFlag=a>=0&&(1===this.state.scrollDirectionVertical?r<=a:r>=a),this._styleCache={},this._cellCache={},this.forceUpdate()}},{key:"scrollToCell",value:function(e){var t=e.columnIndex,o=e.rowIndex,n=this.props,r=n.columnCount,i=n.onScrollToTargetCausedUpdate,s=this.state,a=s.scrollLeft,l=s.scrollTop,c=this.props,d=this.state,h=void 0,u=void 0;if(r>1&&void 0!==t){var p=this._updateScrollLeftForScrollToColumn(ze({},c,{scrollToColumn:t}),d,!0);p&&"number"==typeof p.scrollLeft&&p.scrollLeft>=0&&(h=p.scrollLeft)}if(void 0!==o){var f=this._updateScrollTopForScrollToRow(ze({},c,{scrollToRow:o}),d,!0);f&&"number"==typeof f.scrollTop&&f.scrollTop>=0&&(u=f.scrollTop)}if(i&&("number"==typeof h||"number"==typeof u)){var m="number"!=typeof h?h:a,g="number"!=typeof u?u:l;i({clientHeight:c.height,clientWidth:c.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:m,scrollTop:g,scrollWidth:this.getTotalColumnsWidth()})}}},{key:"componentDidMount",value:function(){var e=this.props,o=e.getScrollbarSize,n=e.height,r=e.scrollLeft,i=e.scrollToColumn,s=e.scrollTop,a=e.scrollToRow,l=e.width,c=this.state.instanceProps;if(this._initialScrollTop=0,this._initialScrollLeft=0,this._handleInvalidatedGridSize(),c.scrollbarSizeMeasured||this.setState((function(e){var t=ze({},e,{needToResetStyleCache:!1});return t.instanceProps.scrollbarSize=o(),t.instanceProps.scrollbarSizeMeasured=!0,t})),"number"==typeof r&&r>=0||"number"==typeof s&&s>=0){var d=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:r,scrollTop:s});d&&(d.needToResetStyleCache=!1,this.setState(d))}this._scrollingContainer&&(this._scrollingContainer.scrollLeft!==this.state.scrollLeft&&(this._scrollingContainer.scrollLeft=this.state.scrollLeft),this._scrollingContainer.scrollTop!==this.state.scrollTop&&(this._scrollingContainer.scrollTop=this.state.scrollTop));var h=n>0&&l>0;i>=0&&h&&this._updateScrollLeftForScrollToColumn(),a>=0&&h&&this._updateScrollTopForScrollToRow(),this._invokeOnGridRenderedHelper(),this._invokeOnScrollMemoizer({scrollLeft:r||0,scrollTop:s||0,totalColumnsWidth:c.columnSizeAndPositionManager.getTotalSize(),totalRowsHeight:c.rowSizeAndPositionManager.getTotalSize()}),this._maybeCallOnScrollbarPresenceChange()}},{key:"componentDidUpdate",value:function(e,t){var o=this,n=this.props,r=n.autoHeight,i=n.autoWidth,s=n.columnCount,a=n.height,l=n.rowCount,c=n.scrollToAlignment,d=n.scrollToColumn,h=n.scrollToRow,u=n.width,p=this.state,f=p.scrollLeft,m=p.scrollPositionChangeReason,g=p.scrollTop,b=p.instanceProps;this._handleInvalidatedGridSize();var v=s>0&&0===e.columnCount||l>0&&0===e.rowCount;m===He&&(!i&&f>=0&&(f!==this._scrollingContainer.scrollLeft||v)&&(this._scrollingContainer.scrollLeft=f),!r&&g>=0&&(g!==this._scrollingContainer.scrollTop||v)&&(this._scrollingContainer.scrollTop=g));var y=(0===e.width||0===e.height)&&a>0&&u>0;if(this._recomputeScrollLeftFlag?(this._recomputeScrollLeftFlag=!1,this._updateScrollLeftForScrollToColumn(this.props)):Se({cellSizeAndPositionManager:b.columnSizeAndPositionManager,previousCellsCount:e.columnCount,previousCellSize:e.columnWidth,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToColumn,previousSize:e.width,scrollOffset:f,scrollToAlignment:c,scrollToIndex:d,size:u,sizeJustIncreasedFromZero:y,updateScrollIndexCallback:function(){return o._updateScrollLeftForScrollToColumn(o.props)}}),this._recomputeScrollTopFlag?(this._recomputeScrollTopFlag=!1,this._updateScrollTopForScrollToRow(this.props)):Se({cellSizeAndPositionManager:b.rowSizeAndPositionManager,previousCellsCount:e.rowCount,previousCellSize:e.rowHeight,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToRow,previousSize:e.height,scrollOffset:g,scrollToAlignment:c,scrollToIndex:h,size:a,sizeJustIncreasedFromZero:y,updateScrollIndexCallback:function(){return o._updateScrollTopForScrollToRow(o.props)}}),this._invokeOnGridRenderedHelper(),f!==t.scrollLeft||g!==t.scrollTop){var w=b.rowSizeAndPositionManager.getTotalSize(),C=b.columnSizeAndPositionManager.getTotalSize();this._invokeOnScrollMemoizer({scrollLeft:f,scrollTop:g,totalColumnsWidth:C,totalRowsHeight:w})}this._maybeCallOnScrollbarPresenceChange()}},{key:"componentWillUnmount",value:function(){this._scrollingContainer&&this._scrollingContainer.removeEventListener("wheel",this.preventDefault),this._disablePointerEventsTimeoutId&&Ne(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoContainerWidth,o=e.autoHeight,n=e.autoWidth,r=e.className,i=e.containerProps,a=e.containerRole,l=e.containerStyle,c=e.height,d=e.id,h=e.noContentRenderer,u=e.role,p=e.style,f=e.tabIndex,m=e.width,g=this.state,b=g.instanceProps,v=g.needToResetStyleCache,y=this._isScrolling(),w={boxSizing:"border-box",direction:"ltr",height:o?"auto":c,position:"relative",width:n?"auto":m,WebkitOverflowScrolling:"touch",willChange:"transform"};v&&(this._styleCache={}),this.state.isScrolling||this._resetStyleCache(),this._calculateChildrenToRender(this.props,this.state);var C=b.columnSizeAndPositionManager.getTotalSize(),x=b.rowSizeAndPositionManager.getTotalSize(),S=x>c?b.scrollbarSize:0,_=C>m?b.scrollbarSize:0;_===this._horizontalScrollBarSize&&S===this._verticalScrollBarSize||(this._horizontalScrollBarSize=_,this._verticalScrollBarSize=S,this._scrollbarPresenceChanged=!0),w.overflowX=C+S<=m?"hidden":"auto",w.overflowY=x+_<=c?"hidden":"auto";var T=this._childrenToDisplay,R=0===T.length&&c>0&&m>0;return s.createElement("div",fe({ref:this._setScrollingContainerRef},i,{"aria-label":this.props["aria-label"],"aria-readonly":this.props["aria-readonly"],className:ge("ReactVirtualized__Grid",r),id:d,onScroll:this._onScroll,onWheel:this._onWheel,role:u,style:ze({},w,{},p),tabIndex:f}),T.length>0&&s.createElement("div",{className:"ReactVirtualized__Grid__innerScrollContainer",role:a,style:ze({width:t?"auto":C,height:x,maxWidth:C,maxHeight:x,overflow:"hidden",pointerEvents:y?"none":"",position:"relative"},l)},T),R&&h())}},{key:"_calculateChildrenToRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,o=e.cellRenderer,n=e.cellRangeRenderer,r=e.columnCount,i=e.deferredMeasurementCache,s=e.height,a=e.overscanColumnCount,l=e.overscanIndicesGetter,c=e.overscanRowCount,d=e.rowCount,h=e.width,u=e.isScrollingOptOut,p=t.scrollDirectionHorizontal,f=t.scrollDirectionVertical,m=t.instanceProps,g=this._initialScrollTop>0?this._initialScrollTop:t.scrollTop,b=this._initialScrollLeft>0?this._initialScrollLeft:t.scrollLeft,v=this._isScrolling(e,t);if(this._childrenToDisplay=[],s>0&&h>0){var y=m.columnSizeAndPositionManager.getVisibleCellRange({containerSize:h,offset:b}),w=m.rowSizeAndPositionManager.getVisibleCellRange({containerSize:s,offset:g}),C=m.columnSizeAndPositionManager.getOffsetAdjustment({containerSize:h,offset:b}),x=m.rowSizeAndPositionManager.getOffsetAdjustment({containerSize:s,offset:g});this._renderedColumnStartIndex=y.start,this._renderedColumnStopIndex=y.stop,this._renderedRowStartIndex=w.start,this._renderedRowStopIndex=w.stop;var S=l({direction:"horizontal",cellCount:r,overscanCellsCount:a,scrollDirection:p,startIndex:"number"==typeof y.start?y.start:0,stopIndex:"number"==typeof y.stop?y.stop:-1}),_=l({direction:"vertical",cellCount:d,overscanCellsCount:c,scrollDirection:f,startIndex:"number"==typeof w.start?w.start:0,stopIndex:"number"==typeof w.stop?w.stop:-1}),T=S.overscanStartIndex,R=S.overscanStopIndex,k=_.overscanStartIndex,E=_.overscanStopIndex;if(i){if(!i.hasFixedHeight())for(var O=k;O<=E;O++)if(!i.has(O,0)){T=0,R=r-1;break}if(!i.hasFixedWidth())for(var I=T;I<=R;I++)if(!i.has(0,I)){k=0,E=d-1;break}}this._childrenToDisplay=n({cellCache:this._cellCache,cellRenderer:o,columnSizeAndPositionManager:m.columnSizeAndPositionManager,columnStartIndex:T,columnStopIndex:R,deferredMeasurementCache:i,horizontalOffsetAdjustment:C,isScrolling:v,isScrollingOptOut:u,parent:this,rowSizeAndPositionManager:m.rowSizeAndPositionManager,rowStartIndex:k,rowStopIndex:E,scrollLeft:b,scrollTop:g,styleCache:this._styleCache,verticalOffsetAdjustment:x,visibleColumnIndices:y,visibleRowIndices:w}),this._columnStartIndex=T,this._columnStopIndex=R,this._rowStartIndex=k,this._rowStopIndex=E}}},{key:"_debounceScrollEnded",value:function(){var e=this.props.scrollingResetTimeInterval;this._disablePointerEventsTimeoutId&&Ne(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=Ae(this._debounceScrollEndedCallback,e)}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex&&"number"==typeof this._deferredInvalidateRowIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t})}}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,o=e.scrollLeft,n=e.scrollTop,r=e.totalColumnsWidth,i=e.totalRowsHeight;this._onScrollMemoizer({callback:function(e){var o=e.scrollLeft,n=e.scrollTop,s=t.props,a=s.height;(0,s.onScroll)({clientHeight:a,clientWidth:s.width,scrollHeight:i,scrollLeft:o,scrollTop:n,scrollWidth:r})},indices:{scrollLeft:o,scrollTop:n}})}},{key:"_isScrolling",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return Object.hasOwnProperty.call(e,"isScrolling")?Boolean(e.isScrolling):Boolean(t.isScrolling)}},{key:"_maybeCallOnScrollbarPresenceChange",value:function(){if(this._scrollbarPresenceChanged){var e=this.props.onScrollbarPresenceChange;this._scrollbarPresenceChanged=!1,e({horizontal:this._horizontalScrollBarSize>0,size:this.state.instanceProps.scrollbarSize,vertical:this._verticalScrollBarSize>0})}}},{key:"scrollToPosition",value:function(e){var o=e.scrollLeft,n=e.scrollTop,r=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:o,scrollTop:n});r&&(r.needToResetStyleCache=!1,this.setState(r))}},{key:"_getCalculatedScrollLeft",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollLeft(e,o)}},{key:"_updateScrollLeftForScrollToColumn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t._getScrollLeftForScrollToColumnStateUpdate(e,o);if(r)return r.needToResetStyleCache=!1,this.setState(r),e.onScrollToTargetCausedUpdate&&!n&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),r}},{key:"_getCalculatedScrollTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollTop(e,o)}},{key:"_resetStyleCache",value:function(){var e=this._styleCache,t=this._cellCache,o=this.props.isScrollingOptOut;this._cellCache={},this._styleCache={};for(var n=this._rowStartIndex;n<=this._rowStopIndex;n++)for(var r=this._columnStartIndex;r<=this._columnStopIndex;r++){var i="".concat(n,"-").concat(r);this._styleCache[i]=e[i],o&&(this._cellCache[i]=t[i])}}},{key:"_updateScrollTopForScrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t._getScrollTopForScrollToRowStateUpdate(e,o);if(r)return r.needToResetStyleCache=!1,this.setState(r),e.onScrollToTargetCausedUpdate&&!n&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),r}}],[{key:"getDerivedStateFromProps",value:function(e,o){var n={};0===e.columnCount&&0!==o.scrollLeft||0===e.rowCount&&0!==o.scrollTop?(n.scrollLeft=0,n.scrollTop=0):(e.scrollLeft!==o.scrollLeft&&e.scrollToColumn<0||e.scrollTop!==o.scrollTop&&e.scrollToRow<0)&&Object.assign(n,t._getScrollToPositionStateUpdate({prevState:o,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}));var r,i,s=o.instanceProps;return n.needToResetStyleCache=!1,e.columnWidth===s.prevColumnWidth&&e.rowHeight===s.prevRowHeight||(n.needToResetStyleCache=!0),s.columnSizeAndPositionManager.configure({cellCount:e.columnCount,estimatedCellSize:t._getEstimatedColumnSize(e),cellSizeGetter:t._wrapSizeGetter(e.columnWidth)}),s.rowSizeAndPositionManager.configure({cellCount:e.rowCount,estimatedCellSize:t._getEstimatedRowSize(e),cellSizeGetter:t._wrapSizeGetter(e.rowHeight)}),0!==s.prevColumnCount&&0!==s.prevRowCount||(s.prevColumnCount=0,s.prevRowCount=0),e.autoHeight&&!1===e.isScrolling&&!0===s.prevIsScrolling&&Object.assign(n,{isScrolling:!1}),be({cellCount:s.prevColumnCount,cellSize:"number"==typeof s.prevColumnWidth?s.prevColumnWidth:null,computeMetadataCallback:function(){return s.columnSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.columnCount,nextCellSize:"number"==typeof e.columnWidth?e.columnWidth:null,nextScrollToIndex:e.scrollToColumn,scrollToIndex:s.prevScrollToColumn,updateScrollOffsetForScrollToIndex:function(){r=t._getScrollLeftForScrollToColumnStateUpdate(e,o)}}),be({cellCount:s.prevRowCount,cellSize:"number"==typeof s.prevRowHeight?s.prevRowHeight:null,computeMetadataCallback:function(){return s.rowSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.rowCount,nextCellSize:"number"==typeof e.rowHeight?e.rowHeight:null,nextScrollToIndex:e.scrollToRow,scrollToIndex:s.prevScrollToRow,updateScrollOffsetForScrollToIndex:function(){i=t._getScrollTopForScrollToRowStateUpdate(e,o)}}),s.prevColumnCount=e.columnCount,s.prevColumnWidth=e.columnWidth,s.prevIsScrolling=!0===e.isScrolling,s.prevRowCount=e.rowCount,s.prevRowHeight=e.rowHeight,s.prevScrollToColumn=e.scrollToColumn,s.prevScrollToRow=e.scrollToRow,s.scrollbarSize=e.getScrollbarSize(),void 0===s.scrollbarSize?(s.scrollbarSizeMeasured=!1,s.scrollbarSize=0):s.scrollbarSizeMeasured=!0,n.instanceProps=s,ze({},n,{},r,{},i)}},{key:"_getEstimatedColumnSize",value:function(e){return"number"==typeof e.columnWidth?e.columnWidth:e.estimatedColumnSize}},{key:"_getEstimatedRowSize",value:function(e){return"number"==typeof e.rowHeight?e.rowHeight:e.estimatedRowSize}},{key:"_getScrollToPositionStateUpdate",value:function(e){var t=e.prevState,o=e.scrollLeft,n=e.scrollTop,r={scrollPositionChangeReason:He};return"number"==typeof o&&o>=0&&(r.scrollDirectionHorizontal=o>t.scrollLeft?1:xe,r.scrollLeft=o),"number"==typeof n&&n>=0&&(r.scrollDirectionVertical=n>t.scrollTop?1:xe,r.scrollTop=n),"number"==typeof o&&o>=0&&o!==t.scrollLeft||"number"==typeof n&&n>=0&&n!==t.scrollTop?r:{}}},{key:"_wrapSizeGetter",value:function(e){return"function"==typeof e?e:function(){return e}}},{key:"_getCalculatedScrollLeft",value:function(e,t){var o=e.columnCount,n=e.height,r=e.scrollToAlignment,i=e.scrollToColumn,s=e.width,a=t.scrollLeft,l=t.instanceProps;if(o>0){var c=o-1,d=i<0?c:Math.min(c,i),h=l.rowSizeAndPositionManager.getTotalSize(),u=l.scrollbarSizeMeasured&&h>n?l.scrollbarSize:0;return l.columnSizeAndPositionManager.getUpdatedOffsetForIndex({align:r,containerSize:s-u,currentOffset:a,targetIndex:d})}return 0}},{key:"_getScrollLeftForScrollToColumnStateUpdate",value:function(e,o){var n=o.scrollLeft,r=t._getCalculatedScrollLeft(e,o);return"number"==typeof r&&r>=0&&n!==r?t._getScrollToPositionStateUpdate({prevState:o,scrollLeft:r,scrollTop:-1}):{}}},{key:"_getCalculatedScrollTop",value:function(e,t){var o=e.height,n=e.rowCount,r=e.scrollToAlignment,i=e.scrollToRow,s=e.width,a=t.scrollTop,l=t.instanceProps;if(n>0){var c=n-1,d=i<0?c:Math.min(c,i),h=l.columnSizeAndPositionManager.getTotalSize(),u=l.scrollbarSizeMeasured&&h>s?l.scrollbarSize:0;return l.rowSizeAndPositionManager.getUpdatedOffsetForIndex({align:r,containerSize:o-u,currentOffset:a,targetIndex:d})}return 0}},{key:"_getScrollTopForScrollToRowStateUpdate",value:function(e,o){var n=o.scrollTop,r=t._getCalculatedScrollTop(e,o);return"number"==typeof r&&r>=0&&n!==r?t._getScrollToPositionStateUpdate({prevState:o,scrollLeft:-1,scrollTop:r}):{}}}]),t}(s.PureComponent),ue(Ee,"propTypes",null),Oe);ue(Le,"defaultProps",{"aria-label":"grid","aria-readonly":!0,autoContainerWidth:!1,autoHeight:!1,autoWidth:!1,cellRangeRenderer:function(e){for(var t=e.cellCache,o=e.cellRenderer,n=e.columnSizeAndPositionManager,r=e.columnStartIndex,i=e.columnStopIndex,s=e.deferredMeasurementCache,a=e.horizontalOffsetAdjustment,l=e.isScrolling,c=e.isScrollingOptOut,d=e.parent,h=e.rowSizeAndPositionManager,u=e.rowStartIndex,p=e.rowStopIndex,f=e.styleCache,m=e.verticalOffsetAdjustment,g=e.visibleColumnIndices,b=e.visibleRowIndices,v=[],y=n.areOffsetsAdjusted()||h.areOffsetsAdjusted(),w=!l&&!y,C=u;C<=p;C++)for(var x=h.getSizeAndPositionOfCell(C),S=r;S<=i;S++){var _=n.getSizeAndPositionOfCell(S),T=S>=g.start&&S<=g.stop&&C>=b.start&&C<=b.stop,R="".concat(C,"-").concat(S),k=void 0;w&&f[R]?k=f[R]:s&&!s.has(C,S)?k={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(k={height:x.size,left:_.offset+a,position:"absolute",top:x.offset+m,width:_.size},f[R]=k);var E={columnIndex:S,isScrolling:l,isVisible:T,key:R,parent:d,rowIndex:C,style:k},O=void 0;!c&&!l||a||m?O=o(E):(t[R]||(t[R]=o(E)),O=t[R]),null!=O&&!1!==O&&v.push(O)}return v},containerRole:"rowgroup",containerStyle:{},estimatedColumnSize:100,estimatedRowSize:30,getScrollbarSize:ke,noContentRenderer:function(){return null},onScroll:function(){},onScrollbarPresenceChange:function(){},onSectionRendered:function(){},overscanColumnCount:0,overscanIndicesGetter:function(e){var t=e.cellCount,o=e.overscanCellsCount,n=e.scrollDirection,r=e.startIndex,i=e.stopIndex;return 1===n?{overscanStartIndex:Math.max(0,r),overscanStopIndex:Math.min(t-1,i+o)}:{overscanStartIndex:Math.max(0,r-o),overscanStopIndex:Math.min(t-1,i)}},overscanRowCount:10,role:"grid",scrollingResetTimeInterval:150,scrollToAlignment:"auto",scrollToColumn:-1,scrollToRow:-1,style:{},tabIndex:0,isScrollingOptOut:!1}),(0,pe.polyfill)(Le);const Ge=Le;function Fe(e){var t=e.cellCount,o=e.overscanCellsCount,n=e.scrollDirection,r=e.startIndex,i=e.stopIndex;return o=Math.max(1,o),1===n?{overscanStartIndex:Math.max(0,r-1),overscanStopIndex:Math.min(t-1,i+o)}:{overscanStartIndex:Math.max(0,r-o),overscanStopIndex:Math.min(t-1,i+1)}}var Be,We;function Ue(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}var je,Ve,Ze=(We=Be=function(e){function t(){var e,o;oe(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return ue(ae(o=le(this,(e=ce(t)).call.apply(e,[this].concat(r)))),"state",{scrollToColumn:0,scrollToRow:0,instanceProps:{prevScrollToColumn:0,prevScrollToRow:0}}),ue(ae(o),"_columnStartIndex",0),ue(ae(o),"_columnStopIndex",0),ue(ae(o),"_rowStartIndex",0),ue(ae(o),"_rowStopIndex",0),ue(ae(o),"_onKeyDown",(function(e){var t=o.props,n=t.columnCount,r=t.disabled,i=t.mode,s=t.rowCount;if(!r){var a=o._getScrollState(),l=a.scrollToColumn,c=a.scrollToRow,d=o._getScrollState(),h=d.scrollToColumn,u=d.scrollToRow;switch(e.key){case"ArrowDown":u="cells"===i?Math.min(u+1,s-1):Math.min(o._rowStopIndex+1,s-1);break;case"ArrowLeft":h="cells"===i?Math.max(h-1,0):Math.max(o._columnStartIndex-1,0);break;case"ArrowRight":h="cells"===i?Math.min(h+1,n-1):Math.min(o._columnStopIndex+1,n-1);break;case"ArrowUp":u="cells"===i?Math.max(u-1,0):Math.max(o._rowStartIndex-1,0)}h===l&&u===c||(e.preventDefault(),o._updateScrollState({scrollToColumn:h,scrollToRow:u}))}})),ue(ae(o),"_onSectionRendered",(function(e){var t=e.columnStartIndex,n=e.columnStopIndex,r=e.rowStartIndex,i=e.rowStopIndex;o._columnStartIndex=t,o._columnStopIndex=n,o._rowStartIndex=r,o._rowStopIndex=i})),o}return he(t,e),se(t,[{key:"setScrollIndexes",value:function(e){var t=e.scrollToColumn,o=e.scrollToRow;this.setState({scrollToRow:o,scrollToColumn:t})}},{key:"render",value:function(){var e=this.props,t=e.className,o=e.children,n=this._getScrollState(),r=n.scrollToColumn,i=n.scrollToRow;return s.createElement("div",{className:t,onKeyDown:this._onKeyDown},o({onSectionRendered:this._onSectionRendered,scrollToColumn:r,scrollToRow:i}))}},{key:"_getScrollState",value:function(){return this.props.isControlled?this.props:this.state}},{key:"_updateScrollState",value:function(e){var t=e.scrollToColumn,o=e.scrollToRow,n=this.props,r=n.isControlled,i=n.onScrollToChange;"function"==typeof i&&i({scrollToColumn:t,scrollToRow:o}),r||this.setState({scrollToColumn:t,scrollToRow:o})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.isControlled?{}:e.scrollToColumn!==t.instanceProps.prevScrollToColumn||e.scrollToRow!==t.instanceProps.prevScrollToRow?function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Ue(o,!0).forEach((function(t){ue(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Ue(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},t,{scrollToColumn:e.scrollToColumn,scrollToRow:e.scrollToRow,instanceProps:{prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow}}):{}}}]),t}(s.PureComponent),ue(Be,"propTypes",null),We);function qe(e,t){var n,r=void 0!==(n=void 0!==t?t:"undefined"!=typeof window?window:"undefined"!=typeof self?self:o.g).document&&n.document.attachEvent;if(!r){var i=function(){var e=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(e){return n.setTimeout(e,20)};return function(t){return e(t)}}(),s=function(){var e=n.cancelAnimationFrame||n.mozCancelAnimationFrame||n.webkitCancelAnimationFrame||n.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,o=t.firstElementChild,n=t.lastElementChild,r=o.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,r.style.width=o.offsetWidth+1+"px",r.style.height=o.offsetHeight+1+"px",o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight},l=function(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&s(this.__resizeRAF__),this.__resizeRAF__=i((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(o){o.call(t,e)})))}))}},c=!1,d="",h="animationstart",u="Webkit Moz O ms".split(" "),p="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),f=n.document.createElement("fakeelement");if(void 0!==f.style.animationName&&(c=!0),!1===c)for(var m=0;m<u.length;m++)if(void 0!==f.style[u[m]+"AnimationName"]){d="-"+u[m].toLowerCase()+"-",h=p[m],c=!0;break}var g="resizeanim",b="@"+d+"keyframes "+g+" { from { opacity: 0; } to { opacity: 0; } } ",v=d+"animation: 1ms "+g+"; "}return{addResizeListener:function(t,o){if(r)t.attachEvent("onresize",o);else{if(!t.__resizeTriggers__){var i=t.ownerDocument,s=n.getComputedStyle(t);s&&"static"==s.position&&(t.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var o=(b||"")+".resize-triggers { "+(v||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',n=t.head||t.getElementsByTagName("head")[0],r=t.createElement("style");r.id="detectElementResize",r.type="text/css",null!=e&&r.setAttribute("nonce",e),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(t.createTextNode(o)),n.appendChild(r)}}(i),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=i.createElement("div")).className="resize-triggers";var c='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var d=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return c}});t.__resizeTriggers__.innerHTML=d.createHTML("")}else t.__resizeTriggers__.innerHTML=c;t.appendChild(t.__resizeTriggers__),a(t),t.addEventListener("scroll",l,!0),h&&(t.__resizeTriggers__.__animationListener__=function(e){e.animationName==g&&a(t)},t.__resizeTriggers__.addEventListener(h,t.__resizeTriggers__.__animationListener__))}t.__resizeListeners__.push(o)}},removeResizeListener:function(e,t){if(r)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",l,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(h,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}function Ke(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function Ye(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Ke(o,!0).forEach((function(t){ue(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Ke(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}ue(Ze,"defaultProps",{disabled:!1,isControlled:!1,mode:"edges",scrollToColumn:0,scrollToRow:0}),(0,pe.polyfill)(Ze);var Xe=(Ve=je=function(e){function t(){var e,o;oe(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return ue(ae(o=le(this,(e=ce(t)).call.apply(e,[this].concat(r)))),"state",{height:o.props.defaultHeight||0,width:o.props.defaultWidth||0}),ue(ae(o),"_parentNode",void 0),ue(ae(o),"_autoSizer",void 0),ue(ae(o),"_window",void 0),ue(ae(o),"_detectElementResize",void 0),ue(ae(o),"_onResize",(function(){var e=o.props,t=e.disableHeight,n=e.disableWidth,r=e.onResize;if(o._parentNode){var i=o._parentNode.offsetHeight||0,s=o._parentNode.offsetWidth||0,a=(o._window||window).getComputedStyle(o._parentNode)||{},l=parseInt(a.paddingLeft,10)||0,c=parseInt(a.paddingRight,10)||0,d=parseInt(a.paddingTop,10)||0,h=parseInt(a.paddingBottom,10)||0,u=i-d-h,p=s-l-c;(!t&&o.state.height!==u||!n&&o.state.width!==p)&&(o.setState({height:i-d-h,width:s-l-c}),r({height:i,width:s}))}})),ue(ae(o),"_setRef",(function(e){o._autoSizer=e})),o}return he(t,e),se(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=qe(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,o=e.className,n=e.disableHeight,r=e.disableWidth,i=e.style,a=this.state,l=a.height,c=a.width,d={overflow:"visible"},h={};return n||(d.height=0,h.height=l),r||(d.width=0,h.width=c),s.createElement("div",{className:o,ref:this._setRef,style:Ye({},d,{},i)},t(h))}}]),t}(s.Component),ue(je,"propTypes",null),Ve);ue(Xe,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}});var Qe,Je,et=o(6405),tt=o.n(et),ot=(Je=Qe=function(e){function t(){var e,o;oe(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return ue(ae(o=le(this,(e=ce(t)).call.apply(e,[this].concat(r)))),"_child",void 0),ue(ae(o),"_measure",(function(){var e=o.props,t=e.cache,n=e.columnIndex,r=void 0===n?0:n,i=e.parent,s=e.rowIndex,a=void 0===s?o.props.index||0:s,l=o._getCellMeasurements(),c=l.height,d=l.width;c===t.getHeight(a,r)&&d===t.getWidth(a,r)||(t.set(a,r,d,c),i&&"function"==typeof i.recomputeGridSize&&i.recomputeGridSize({columnIndex:r,rowIndex:a}))})),ue(ae(o),"_registerChild",(function(e){e&&Element,o._child=e,e&&o._maybeMeasureCell()})),o}return he(t,e),se(t,[{key:"componentDidMount",value:function(){this._maybeMeasureCell()}},{key:"componentDidUpdate",value:function(){this._maybeMeasureCell()}},{key:"render",value:function(){var e=this.props.children;return"function"==typeof e?e({measure:this._measure,registerChild:this._registerChild}):e}},{key:"_getCellMeasurements",value:function(){var e=this.props.cache,t=this._child||(0,et.findDOMNode)(this);if(t&&t.ownerDocument&&t.ownerDocument.defaultView&&t instanceof t.ownerDocument.defaultView.HTMLElement){var o=t.style.width,n=t.style.height;e.hasFixedWidth()||(t.style.width="auto"),e.hasFixedHeight()||(t.style.height="auto");var r=Math.ceil(t.offsetHeight),i=Math.ceil(t.offsetWidth);return o&&(t.style.width=o),n&&(t.style.height=n),{height:r,width:i}}return{height:0,width:0}}},{key:"_maybeMeasureCell",value:function(){var e=this.props,t=e.cache,o=e.columnIndex,n=void 0===o?0:o,r=e.parent,i=e.rowIndex,s=void 0===i?this.props.index||0:i;if(!t.has(s,n)){var a=this._getCellMeasurements(),l=a.height,c=a.width;t.set(s,n,c,l),r&&"function"==typeof r.invalidateCellSizeAfterRender&&r.invalidateCellSizeAfterRender({columnIndex:n,rowIndex:s})}}}]),t}(s.PureComponent),ue(Qe,"propTypes",null),Je);function nt(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function rt(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?nt(o,!0).forEach((function(t){ue(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):nt(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}ue(ot,"__internalCellMeasurerFlag",!1);var it="requested",st=function(e){function t(){var e,o;oe(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return ue(ae(o=le(this,(e=ce(t)).call.apply(e,[this].concat(r)))),"state",{isScrolling:!1,scrollLeft:0,scrollTop:0}),ue(ae(o),"_calculateSizeAndPositionDataOnNextUpdate",!1),ue(ae(o),"_onSectionRenderedMemoizer",Ce()),ue(ae(o),"_onScrollMemoizer",Ce(!1)),ue(ae(o),"_invokeOnSectionRenderedHelper",(function(){var e=o.props,t=e.cellLayoutManager,n=e.onSectionRendered;o._onSectionRenderedMemoizer({callback:n,indices:{indices:t.getLastRenderedIndices()}})})),ue(ae(o),"_setScrollingContainerRef",(function(e){o._scrollingContainer=e})),ue(ae(o),"_updateScrollPositionForScrollToCell",(function(){var e=o.props,t=e.cellLayoutManager,n=e.height,r=e.scrollToAlignment,i=e.scrollToCell,s=e.width,a=o.state,l=a.scrollLeft,c=a.scrollTop;if(i>=0){var d=t.getScrollPositionForCell({align:r,cellIndex:i,height:n,scrollLeft:l,scrollTop:c,width:s});d.scrollLeft===l&&d.scrollTop===c||o._setScrollPosition(d)}})),ue(ae(o),"_onScroll",(function(e){if(e.target===o._scrollingContainer){o._enablePointerEventsAfterDelay();var t=o.props,n=t.cellLayoutManager,r=t.height,i=t.isScrollingChange,s=t.width,a=o._scrollbarSize,l=n.getTotalSize(),c=l.height,d=l.width,h=Math.max(0,Math.min(d-s+a,e.target.scrollLeft)),u=Math.max(0,Math.min(c-r+a,e.target.scrollTop));if(o.state.scrollLeft!==h||o.state.scrollTop!==u){var p=e.cancelable?"observed":it;o.state.isScrolling||i(!0),o.setState({isScrolling:!0,scrollLeft:h,scrollPositionChangeReason:p,scrollTop:u})}o._invokeOnScrollMemoizer({scrollLeft:h,scrollTop:u,totalWidth:d,totalHeight:c})}})),o._scrollbarSize=ke(),void 0===o._scrollbarSize?(o._scrollbarSizeMeasured=!1,o._scrollbarSize=0):o._scrollbarSizeMeasured=!0,o}return he(t,e),se(t,[{key:"recomputeCellSizesAndPositions",value:function(){this._calculateSizeAndPositionDataOnNextUpdate=!0,this.forceUpdate()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.cellLayoutManager,o=e.scrollLeft,n=e.scrollToCell,r=e.scrollTop;this._scrollbarSizeMeasured||(this._scrollbarSize=ke(),this._scrollbarSizeMeasured=!0,this.setState({})),n>=0?this._updateScrollPositionForScrollToCell():(o>=0||r>=0)&&this._setScrollPosition({scrollLeft:o,scrollTop:r}),this._invokeOnSectionRenderedHelper();var i=t.getTotalSize(),s=i.height,a=i.width;this._invokeOnScrollMemoizer({scrollLeft:o||0,scrollTop:r||0,totalHeight:s,totalWidth:a})}},{key:"componentDidUpdate",value:function(e,t){var o=this.props,n=o.height,r=o.scrollToAlignment,i=o.scrollToCell,s=o.width,a=this.state,l=a.scrollLeft,c=a.scrollPositionChangeReason,d=a.scrollTop;c===it&&(l>=0&&l!==t.scrollLeft&&l!==this._scrollingContainer.scrollLeft&&(this._scrollingContainer.scrollLeft=l),d>=0&&d!==t.scrollTop&&d!==this._scrollingContainer.scrollTop&&(this._scrollingContainer.scrollTop=d)),n===e.height&&r===e.scrollToAlignment&&i===e.scrollToCell&&s===e.width||this._updateScrollPositionForScrollToCell(),this._invokeOnSectionRenderedHelper()}},{key:"componentWillUnmount",value:function(){this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoHeight,o=e.cellCount,n=e.cellLayoutManager,r=e.className,i=e.height,a=e.horizontalOverscanSize,l=e.id,c=e.noContentRenderer,d=e.style,h=e.verticalOverscanSize,u=e.width,p=this.state,f=p.isScrolling,m=p.scrollLeft,g=p.scrollTop;(this._lastRenderedCellCount!==o||this._lastRenderedCellLayoutManager!==n||this._calculateSizeAndPositionDataOnNextUpdate)&&(this._lastRenderedCellCount=o,this._lastRenderedCellLayoutManager=n,this._calculateSizeAndPositionDataOnNextUpdate=!1,n.calculateSizeAndPositionData());var b=n.getTotalSize(),v=b.height,y=b.width,w=Math.max(0,m-a),C=Math.max(0,g-h),x=Math.min(y,m+u+a),S=Math.min(v,g+i+h),_=i>0&&u>0?n.cellRenderers({height:S-C,isScrolling:f,width:x-w,x:w,y:C}):[],T={boxSizing:"border-box",direction:"ltr",height:t?"auto":i,position:"relative",WebkitOverflowScrolling:"touch",width:u,willChange:"transform"},R=v>i?this._scrollbarSize:0,k=y>u?this._scrollbarSize:0;return T.overflowX=y+R<=u?"hidden":"auto",T.overflowY=v+k<=i?"hidden":"auto",s.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:ge("ReactVirtualized__Collection",r),id:l,onScroll:this._onScroll,role:"grid",style:rt({},T,{},d),tabIndex:0},o>0&&s.createElement("div",{className:"ReactVirtualized__Collection__innerScrollContainer",style:{height:v,maxHeight:v,maxWidth:y,overflow:"hidden",pointerEvents:f?"none":"",width:y}},_),0===o&&c())}},{key:"_enablePointerEventsAfterDelay",value:function(){var e=this;this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=setTimeout((function(){(0,e.props.isScrollingChange)(!1),e._disablePointerEventsTimeoutId=null,e.setState({isScrolling:!1})}),150)}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,o=e.scrollLeft,n=e.scrollTop,r=e.totalHeight,i=e.totalWidth;this._onScrollMemoizer({callback:function(e){var o=e.scrollLeft,n=e.scrollTop,s=t.props,a=s.height;(0,s.onScroll)({clientHeight:a,clientWidth:s.width,scrollHeight:r,scrollLeft:o,scrollTop:n,scrollWidth:i})},indices:{scrollLeft:o,scrollTop:n}})}},{key:"_setScrollPosition",value:function(e){var t=e.scrollLeft,o=e.scrollTop,n={scrollPositionChangeReason:it};t>=0&&(n.scrollLeft=t),o>=0&&(n.scrollTop=o),(t>=0&&t!==this.state.scrollLeft||o>=0&&o!==this.state.scrollTop)&&this.setState(n)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return 0!==e.cellCount||0===t.scrollLeft&&0===t.scrollTop?e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop?e.scrollTop:t.scrollTop,scrollPositionChangeReason:it}:null:{scrollLeft:0,scrollTop:0,scrollPositionChangeReason:it}}}]),t}(s.PureComponent);ue(st,"defaultProps",{"aria-label":"grid",horizontalOverscanSize:0,noContentRenderer:function(){return null},onScroll:function(){return null},onSectionRendered:function(){return null},scrollToAlignment:"auto",scrollToCell:-1,style:{},verticalOverscanSize:0}),st.propTypes={},(0,pe.polyfill)(st);const at=st;var lt=function(){function e(t){var o=t.height,n=t.width,r=t.x,i=t.y;oe(this,e),this.height=o,this.width=n,this.x=r,this.y=i,this._indexMap={},this._indices=[]}return se(e,[{key:"addCellIndex",value:function(e){var t=e.index;this._indexMap[t]||(this._indexMap[t]=!0,this._indices.push(t))}},{key:"getCellIndices",value:function(){return this._indices}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y," ").concat(this.width,"x").concat(this.height)}}]),e}(),ct=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;oe(this,e),this._sectionSize=t,this._cellMetadata=[],this._sections={}}return se(e,[{key:"getCellIndices",value:function(e){var t=e.height,o=e.width,n=e.x,r=e.y,i={};return this.getSections({height:t,width:o,x:n,y:r}).forEach((function(e){return e.getCellIndices().forEach((function(e){i[e]=e}))})),Object.keys(i).map((function(e){return i[e]}))}},{key:"getCellMetadata",value:function(e){var t=e.index;return this._cellMetadata[t]}},{key:"getSections",value:function(e){for(var t=e.height,o=e.width,n=e.x,r=e.y,i=Math.floor(n/this._sectionSize),s=Math.floor((n+o-1)/this._sectionSize),a=Math.floor(r/this._sectionSize),l=Math.floor((r+t-1)/this._sectionSize),c=[],d=i;d<=s;d++)for(var h=a;h<=l;h++){var u="".concat(d,".").concat(h);this._sections[u]||(this._sections[u]=new lt({height:this._sectionSize,width:this._sectionSize,x:d*this._sectionSize,y:h*this._sectionSize})),c.push(this._sections[u])}return c}},{key:"getTotalSectionCount",value:function(){return Object.keys(this._sections).length}},{key:"toString",value:function(){var e=this;return Object.keys(this._sections).map((function(t){return e._sections[t].toString()}))}},{key:"registerCell",value:function(e){var t=e.cellMetadatum,o=e.index;this._cellMetadata[o]=t,this.getSections(t).forEach((function(e){return e.addCellIndex({index:o})}))}}]),e}();function dt(e){var t=e.align,o=void 0===t?"auto":t,n=e.cellOffset,r=e.cellSize,i=e.containerSize,s=e.currentOffset,a=n,l=a-i+r;switch(o){case"start":return a;case"end":return l;case"center":return a-(i-r)/2;default:return Math.max(l,Math.min(a,s))}}var ht=function(e){function t(e,o){var n;return oe(this,t),(n=le(this,ce(t).call(this,e,o)))._cellMetadata=[],n._lastRenderedCellIndices=[],n._cellCache=[],n._isScrollingChange=n._isScrollingChange.bind(ae(n)),n._setCollectionViewRef=n._setCollectionViewRef.bind(ae(n)),n}return he(t,e),se(t,[{key:"forceUpdate",value:function(){void 0!==this._collectionView&&this._collectionView.forceUpdate()}},{key:"recomputeCellSizesAndPositions",value:function(){this._cellCache=[],this._collectionView.recomputeCellSizesAndPositions()}},{key:"render",value:function(){var e=fe({},this.props);return s.createElement(at,fe({cellLayoutManager:this,isScrollingChange:this._isScrollingChange,ref:this._setCollectionViewRef},e))}},{key:"calculateSizeAndPositionData",value:function(){var e=this.props,t=function(e){for(var t=e.cellCount,o=e.cellSizeAndPositionGetter,n=[],r=new ct(e.sectionSize),i=0,s=0,a=0;a<t;a++){var l=o({index:a});if(null==l.height||isNaN(l.height)||null==l.width||isNaN(l.width)||null==l.x||isNaN(l.x)||null==l.y||isNaN(l.y))throw Error("Invalid metadata returned for cell ".concat(a,":\n        x:").concat(l.x,", y:").concat(l.y,", width:").concat(l.width,", height:").concat(l.height));i=Math.max(i,l.y+l.height),s=Math.max(s,l.x+l.width),n[a]=l,r.registerCell({cellMetadatum:l,index:a})}return{cellMetadata:n,height:i,sectionManager:r,width:s}}({cellCount:e.cellCount,cellSizeAndPositionGetter:e.cellSizeAndPositionGetter,sectionSize:e.sectionSize});this._cellMetadata=t.cellMetadata,this._sectionManager=t.sectionManager,this._height=t.height,this._width=t.width}},{key:"getLastRenderedIndices",value:function(){return this._lastRenderedCellIndices}},{key:"getScrollPositionForCell",value:function(e){var t=e.align,o=e.cellIndex,n=e.height,r=e.scrollLeft,i=e.scrollTop,s=e.width,a=this.props.cellCount;if(o>=0&&o<a){var l=this._cellMetadata[o];r=dt({align:t,cellOffset:l.x,cellSize:l.width,containerSize:s,currentOffset:r,targetIndex:o}),i=dt({align:t,cellOffset:l.y,cellSize:l.height,containerSize:n,currentOffset:i,targetIndex:o})}return{scrollLeft:r,scrollTop:i}}},{key:"getTotalSize",value:function(){return{height:this._height,width:this._width}}},{key:"cellRenderers",value:function(e){var t=this,o=e.height,n=e.isScrolling,r=e.width,i=e.x,s=e.y,a=this.props,l=a.cellGroupRenderer,c=a.cellRenderer;return this._lastRenderedCellIndices=this._sectionManager.getCellIndices({height:o,width:r,x:i,y:s}),l({cellCache:this._cellCache,cellRenderer:c,cellSizeAndPositionGetter:function(e){var o=e.index;return t._sectionManager.getCellMetadata({index:o})},indices:this._lastRenderedCellIndices,isScrolling:n})}},{key:"_isScrollingChange",value:function(e){e||(this._cellCache=[])}},{key:"_setCollectionViewRef",value:function(e){this._collectionView=e}}]),t}(s.PureComponent);function ut(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function pt(e,t){if(e){if("string"==typeof e)return ut(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?ut(e,t):void 0}}ue(ht,"defaultProps",{"aria-label":"grid",cellGroupRenderer:function(e){var t=e.cellCache,o=e.cellRenderer,n=e.cellSizeAndPositionGetter,r=e.indices,i=e.isScrolling;return r.map((function(e){var r=n({index:e}),s={index:e,isScrolling:i,key:e,style:{height:r.height,left:r.x,position:"absolute",top:r.y,width:r.width}};return i?(e in t||(t[e]=o(s)),t[e]):o(s)})).filter((function(e){return!!e}))}}),ht.propTypes={},(function(e){function t(e,o){var n;return oe(this,t),(n=le(this,ce(t).call(this,e,o)))._registerChild=n._registerChild.bind(ae(n)),n}return he(t,e),se(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,o=t.columnMaxWidth,n=t.columnMinWidth,r=t.columnCount,i=t.width;o===e.columnMaxWidth&&n===e.columnMinWidth&&r===e.columnCount&&i===e.width||this._registeredChild&&this._registeredChild.recomputeGridSize()}},{key:"render",value:function(){var e=this.props,t=e.children,o=e.columnMaxWidth,n=e.columnMinWidth,r=e.columnCount,i=e.width,s=n||1,a=o?Math.min(o,i):i,l=i/r;return l=Math.max(s,l),l=Math.min(a,l),l=Math.floor(l),t({adjustedWidth:Math.min(i,l*r),columnWidth:l,getColumnWidth:function(){return l},registerChild:this._registerChild})}},{key:"_registerChild",value:function(e){if(e&&"function"!=typeof e.recomputeGridSize)throw Error("Unexpected child type registered; only Grid/MultiGrid children are supported.");this._registeredChild=e,this._registeredChild&&this._registeredChild.recomputeGridSize()}}]),t}(s.PureComponent)).propTypes={};var ft=function(e){function t(e,o){var n;return oe(this,t),(n=le(this,ce(t).call(this,e,o)))._loadMoreRowsMemoizer=Ce(),n._onRowsRendered=n._onRowsRendered.bind(ae(n)),n._registerChild=n._registerChild.bind(ae(n)),n}return he(t,e),se(t,[{key:"resetLoadMoreRowsCache",value:function(e){this._loadMoreRowsMemoizer=Ce(),e&&this._doStuff(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"render",value:function(){return(0,this.props.children)({onRowsRendered:this._onRowsRendered,registerChild:this._registerChild})}},{key:"_loadUnloadedRanges",value:function(e){var t=this,o=this.props.loadMoreRows;e.forEach((function(e){var n=o(e);n&&n.then((function(){var o;(o={lastRenderedStartIndex:t._lastRenderedStartIndex,lastRenderedStopIndex:t._lastRenderedStopIndex,startIndex:e.startIndex,stopIndex:e.stopIndex}).startIndex>o.lastRenderedStopIndex||o.stopIndex<o.lastRenderedStartIndex||t._registeredChild&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o="function"==typeof e.recomputeGridSize?e.recomputeGridSize:e.recomputeRowHeights;o?o.call(e,t):e.forceUpdate()}(t._registeredChild,t._lastRenderedStartIndex)}))}))}},{key:"_onRowsRendered",value:function(e){var t=e.startIndex,o=e.stopIndex;this._lastRenderedStartIndex=t,this._lastRenderedStopIndex=o,this._doStuff(t,o)}},{key:"_doStuff",value:function(e,t){var o,n=this,r=this.props,i=r.isRowLoaded,s=r.minimumBatchSize,a=r.rowCount,l=r.threshold,c=function(e){for(var t=e.isRowLoaded,o=e.minimumBatchSize,n=e.rowCount,r=e.stopIndex,i=[],s=null,a=null,l=e.startIndex;l<=r;l++)t({index:l})?null!==a&&(i.push({startIndex:s,stopIndex:a}),s=a=null):(a=l,null===s&&(s=l));if(null!==a){for(var c=Math.min(Math.max(a,s+o-1),n-1),d=a+1;d<=c&&!t({index:d});d++)a=d;i.push({startIndex:s,stopIndex:a})}if(i.length)for(var h=i[0];h.stopIndex-h.startIndex+1<o&&h.startIndex>0;){var u=h.startIndex-1;if(t({index:u}))break;h.startIndex=u}return i}({isRowLoaded:i,minimumBatchSize:s,rowCount:a,startIndex:Math.max(0,e-l),stopIndex:Math.min(a-1,t+l)}),d=(o=[]).concat.apply(o,function(e){return function(e){if(Array.isArray(e))return ut(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||pt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(c.map((function(e){return[e.startIndex,e.stopIndex]}))));this._loadMoreRowsMemoizer({callback:function(){n._loadUnloadedRanges(c)},indices:{squashedUnloadedRanges:d}})}},{key:"_registerChild",value:function(e){this._registeredChild=e}}]),t}(s.PureComponent);ue(ft,"defaultProps",{minimumBatchSize:10,rowCount:0,threshold:15}),ft.propTypes={};var mt,gt,bt=(gt=mt=function(e){function t(){var e,o;oe(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return ue(ae(o=le(this,(e=ce(t)).call.apply(e,[this].concat(r)))),"Grid",void 0),ue(ae(o),"_cellRenderer",(function(e){var t=e.parent,n=e.rowIndex,r=e.style,i=e.isScrolling,s=e.isVisible,a=e.key,l=o.props.rowRenderer,c=Object.getOwnPropertyDescriptor(r,"width");return c&&c.writable&&(r.width="100%"),l({index:n,style:r,isScrolling:i,isVisible:s,key:a,parent:t})})),ue(ae(o),"_setRef",(function(e){o.Grid=e})),ue(ae(o),"_onScroll",(function(e){var t=e.clientHeight,n=e.scrollHeight,r=e.scrollTop;(0,o.props.onScroll)({clientHeight:t,scrollHeight:n,scrollTop:r})})),ue(ae(o),"_onScrollToRowCausedUpdate",(function(e){var t=e.clientHeight,n=e.scrollHeight,r=e.scrollTop;(0,o.props.onScrollToRowCausedUpdate)({clientHeight:t,scrollHeight:n,scrollTop:r})})),ue(ae(o),"_onSectionRendered",(function(e){var t=e.rowOverscanStartIndex,n=e.rowOverscanStopIndex,r=e.rowStartIndex,i=e.rowStopIndex;(0,o.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:n,startIndex:r,stopIndex:i})})),o}return he(t,e),se(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,o=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:o,columnIndex:0}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,o=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:o,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n;this.Grid&&this.Grid.recomputeGridSize({rowIndex:r,columnIndex:o})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e,columnIndex:0})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"render",value:function(){var e=this.props,t=e.className,o=e.noRowsRenderer,n=e.scrollToIndex,r=e.width,i=ge("ReactVirtualized__List",t);return s.createElement(Ge,fe({},this.props,{autoContainerWidth:!0,cellRenderer:this._cellRenderer,className:i,columnWidth:r,columnCount:1,noContentRenderer:o,onScroll:this._onScroll,onScrollToTargetCausedUpdate:this._onScrollToRowCausedUpdate,onSectionRendered:this._onSectionRendered,ref:this._setRef,scrollToRow:n}))}}]),t}(s.PureComponent),ue(mt,"propTypes",null),gt);ue(bt,"defaultProps",{autoHeight:!1,estimatedRowSize:30,onScroll:function(){},onScrollToRowCausedUpdate:function(){},noRowsRenderer:function(){return null},onRowsRendered:function(){},overscanIndicesGetter:Fe,overscanRowCount:10,scrollToAlignment:"auto",scrollToIndex:-1,style:{}});const vt=function(e,t,o,n,r){return"function"==typeof o?function(e,t,o,n,r){for(var i=o+1;t<=o;){var s=t+o>>>1;r(e[s],n)>=0?(i=s,o=s-1):t=s+1}return i}(e,void 0===n?0:0|n,void 0===r?e.length-1:0|r,t,o):function(e,t,o,n){for(var r=o+1;t<=o;){var i=t+o>>>1;e[i]>=n?(r=i,o=i-1):t=i+1}return r}(e,void 0===o?0:0|o,void 0===n?e.length-1:0|n,t)};function yt(e,t,o,n,r){this.mid=e,this.left=t,this.right=o,this.leftPoints=n,this.rightPoints=r,this.count=(t?t.count:0)+(o?o.count:0)+n.length}var wt=yt.prototype;function Ct(e,t){e.mid=t.mid,e.left=t.left,e.right=t.right,e.leftPoints=t.leftPoints,e.rightPoints=t.rightPoints,e.count=t.count}function xt(e,t){var o=Mt(t);e.mid=o.mid,e.left=o.left,e.right=o.right,e.leftPoints=o.leftPoints,e.rightPoints=o.rightPoints,e.count=o.count}function St(e,t){var o=e.intervals([]);o.push(t),xt(e,o)}function _t(e,t){var o=e.intervals([]),n=o.indexOf(t);return n<0?0:(o.splice(n,1),xt(e,o),1)}function Tt(e,t,o){for(var n=0;n<e.length&&e[n][0]<=t;++n){var r=o(e[n]);if(r)return r}}function Rt(e,t,o){for(var n=e.length-1;n>=0&&e[n][1]>=t;--n){var r=o(e[n]);if(r)return r}}function kt(e,t){for(var o=0;o<e.length;++o){var n=t(e[o]);if(n)return n}}function Et(e,t){return e-t}function Ot(e,t){return e[0]-t[0]||e[1]-t[1]}function It(e,t){return e[1]-t[1]||e[0]-t[0]}function Mt(e){if(0===e.length)return null;for(var t=[],o=0;o<e.length;++o)t.push(e[o][0],e[o][1]);t.sort(Et);var n=t[t.length>>1],r=[],i=[],s=[];for(o=0;o<e.length;++o){var a=e[o];a[1]<n?r.push(a):n<a[0]?i.push(a):s.push(a)}var l=s,c=s.slice();return l.sort(Ot),c.sort(It),new yt(n,Mt(r),Mt(i),l,c)}function Dt(e){this.root=e}wt.intervals=function(e){return e.push.apply(e,this.leftPoints),this.left&&this.left.intervals(e),this.right&&this.right.intervals(e),e},wt.insert=function(e){var t=this.count-this.leftPoints.length;if(this.count+=1,e[1]<this.mid)this.left?4*(this.left.count+1)>3*(t+1)?St(this,e):this.left.insert(e):this.left=Mt([e]);else if(e[0]>this.mid)this.right?4*(this.right.count+1)>3*(t+1)?St(this,e):this.right.insert(e):this.right=Mt([e]);else{var o=vt(this.leftPoints,e,Ot),n=vt(this.rightPoints,e,It);this.leftPoints.splice(o,0,e),this.rightPoints.splice(n,0,e)}},wt.remove=function(e){var t=this.count-this.leftPoints;if(e[1]<this.mid)return this.left?4*(this.right?this.right.count:0)>3*(t-1)?_t(this,e):2===(i=this.left.remove(e))?(this.left=null,this.count-=1,1):(1===i&&(this.count-=1),i):0;if(e[0]>this.mid)return this.right?4*(this.left?this.left.count:0)>3*(t-1)?_t(this,e):2===(i=this.right.remove(e))?(this.right=null,this.count-=1,1):(1===i&&(this.count-=1),i):0;if(1===this.count)return this.leftPoints[0]===e?2:0;if(1===this.leftPoints.length&&this.leftPoints[0]===e){if(this.left&&this.right){for(var o=this,n=this.left;n.right;)o=n,n=n.right;if(o===this)n.right=this.right;else{var r=this.left,i=this.right;o.count-=n.count,o.right=n.left,n.left=r,n.right=i}Ct(this,n),this.count=(this.left?this.left.count:0)+(this.right?this.right.count:0)+this.leftPoints.length}else this.left?Ct(this,this.left):Ct(this,this.right);return 1}for(r=vt(this.leftPoints,e,Ot);r<this.leftPoints.length&&this.leftPoints[r][0]===e[0];++r)if(this.leftPoints[r]===e)for(this.count-=1,this.leftPoints.splice(r,1),i=vt(this.rightPoints,e,It);i<this.rightPoints.length&&this.rightPoints[i][1]===e[1];++i)if(this.rightPoints[i]===e)return this.rightPoints.splice(i,1),1;return 0},wt.queryPoint=function(e,t){return e<this.mid?this.left&&(o=this.left.queryPoint(e,t))?o:Tt(this.leftPoints,e,t):e>this.mid?this.right&&(o=this.right.queryPoint(e,t))?o:Rt(this.rightPoints,e,t):kt(this.leftPoints,t);var o},wt.queryInterval=function(e,t,o){var n;return e<this.mid&&this.left&&(n=this.left.queryInterval(e,t,o))||t>this.mid&&this.right&&(n=this.right.queryInterval(e,t,o))?n:t<this.mid?Tt(this.leftPoints,t,o):e>this.mid?Rt(this.rightPoints,e,o):kt(this.leftPoints,o)};var $t=Dt.prototype;$t.insert=function(e){this.root?this.root.insert(e):this.root=new yt(e[0],null,null,[e],[e])},$t.remove=function(e){if(this.root){var t=this.root.remove(e);return 2===t&&(this.root=null),0!==t}return!1},$t.queryPoint=function(e,t){if(this.root)return this.root.queryPoint(e,t)},$t.queryInterval=function(e,t,o){if(e<=t&&this.root)return this.root.queryInterval(e,t,o)},Object.defineProperty($t,"count",{get:function(){return this.root?this.root.count:0}}),Object.defineProperty($t,"intervals",{get:function(){return this.root?this.root.intervals([]):[]}});var Nt,At,Pt=function(){function e(){oe(this,e),ue(this,"_columnSizeMap",{}),ue(this,"_intervalTree",new Dt(null)),ue(this,"_leftMap",{})}return se(e,[{key:"estimateTotalHeight",value:function(e,t,o){var n=e-this.count;return this.tallestColumnSize+Math.ceil(n/t)*o}},{key:"range",value:function(e,t,o){var n=this;this._intervalTree.queryInterval(e,e+t,(function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i,s,a=[],l=!0,c=!1;try{if(i=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;l=!1}else for(;!(l=(n=i.call(o)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=o.return&&(s=o.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}(e,t)||pt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,3),r=t[0],i=(t[1],t[2]);return o(i,n._leftMap[i],r)}))}},{key:"setPosition",value:function(e,t,o,n){this._intervalTree.insert([o,o+n,e]),this._leftMap[e]=t;var r=this._columnSizeMap,i=r[t];r[t]=void 0===i?o+n:Math.max(i,o+n)}},{key:"count",get:function(){return this._intervalTree.count}},{key:"shortestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var o in e){var n=e[o];t=0===t?n:Math.min(t,n)}return t}},{key:"tallestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var o in e){var n=e[o];t=Math.max(t,n)}return t}}]),e}();function zt(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function Ht(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?zt(o,!0).forEach((function(t){ue(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):zt(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var Lt=(At=Nt=function(e){function t(){var e,o;oe(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return ue(ae(o=le(this,(e=ce(t)).call.apply(e,[this].concat(r)))),"state",{isScrolling:!1,scrollTop:0}),ue(ae(o),"_debounceResetIsScrollingId",void 0),ue(ae(o),"_invalidateOnUpdateStartIndex",null),ue(ae(o),"_invalidateOnUpdateStopIndex",null),ue(ae(o),"_positionCache",new Pt),ue(ae(o),"_startIndex",null),ue(ae(o),"_startIndexMemoized",null),ue(ae(o),"_stopIndex",null),ue(ae(o),"_stopIndexMemoized",null),ue(ae(o),"_debounceResetIsScrollingCallback",(function(){o.setState({isScrolling:!1})})),ue(ae(o),"_setScrollingContainerRef",(function(e){o._scrollingContainer=e})),ue(ae(o),"_onScroll",(function(e){var t=o.props.height,n=e.currentTarget.scrollTop,r=Math.min(Math.max(0,o._getEstimatedTotalHeight()-t),n);n===r&&(o._debounceResetIsScrolling(),o.state.scrollTop!==r&&o.setState({isScrolling:!0,scrollTop:r}))})),o}return he(t,e),se(t,[{key:"clearCellPositions",value:function(){this._positionCache=new Pt,this.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.rowIndex;null===this._invalidateOnUpdateStartIndex?(this._invalidateOnUpdateStartIndex=t,this._invalidateOnUpdateStopIndex=t):(this._invalidateOnUpdateStartIndex=Math.min(this._invalidateOnUpdateStartIndex,t),this._invalidateOnUpdateStopIndex=Math.max(this._invalidateOnUpdateStopIndex,t))}},{key:"recomputeCellPositions",value:function(){var e=this._positionCache.count-1;this._positionCache=new Pt,this._populatePositionCache(0,e),this.forceUpdate()}},{key:"componentDidMount",value:function(){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback()}},{key:"componentDidUpdate",value:function(e,t){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback(),this.props.scrollTop!==e.scrollTop&&this._debounceResetIsScrolling()}},{key:"componentWillUnmount",value:function(){this._debounceResetIsScrollingId&&Ne(this._debounceResetIsScrollingId)}},{key:"render",value:function(){var e,t=this,o=this.props,n=o.autoHeight,r=o.cellCount,i=o.cellMeasurerCache,a=o.cellRenderer,l=o.className,c=o.height,d=o.id,h=o.keyMapper,u=o.overscanByPixels,p=o.role,f=o.style,m=o.tabIndex,g=o.width,b=o.rowDirection,v=this.state,y=v.isScrolling,w=v.scrollTop,C=[],x=this._getEstimatedTotalHeight(),S=this._positionCache.shortestColumnSize,_=this._positionCache.count,T=0;if(this._positionCache.range(Math.max(0,w-u),c+2*u,(function(o,n,r){var s;void 0===e?(T=o,e=o):(T=Math.min(T,o),e=Math.max(e,o)),C.push(a({index:o,isScrolling:y,key:h(o),parent:t,style:(s={height:i.getHeight(o)},ue(s,"ltr"===b?"left":"right",n),ue(s,"position","absolute"),ue(s,"top",r),ue(s,"width",i.getWidth(o)),s)}))})),S<w+c+u&&_<r)for(var R=Math.min(r-_,Math.ceil((w+c+u-S)/i.defaultHeight*g/i.defaultWidth)),k=_;k<_+R;k++)e=k,C.push(a({index:k,isScrolling:y,key:h(k),parent:this,style:{width:i.getWidth(k)}}));return this._startIndex=T,this._stopIndex=e,s.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:ge("ReactVirtualized__Masonry",l),id:d,onScroll:this._onScroll,role:p,style:Ht({boxSizing:"border-box",direction:"ltr",height:n?"auto":c,overflowX:"hidden",overflowY:x<c?"hidden":"auto",position:"relative",width:g,WebkitOverflowScrolling:"touch",willChange:"transform"},f),tabIndex:m},s.createElement("div",{className:"ReactVirtualized__Masonry__innerScrollContainer",style:{width:"100%",height:x,maxWidth:"100%",maxHeight:x,overflow:"hidden",pointerEvents:y?"none":"",position:"relative"}},C))}},{key:"_checkInvalidateOnUpdate",value:function(){if("number"==typeof this._invalidateOnUpdateStartIndex){var e=this._invalidateOnUpdateStartIndex,t=this._invalidateOnUpdateStopIndex;this._invalidateOnUpdateStartIndex=null,this._invalidateOnUpdateStopIndex=null,this._populatePositionCache(e,t),this.forceUpdate()}}},{key:"_debounceResetIsScrolling",value:function(){var e=this.props.scrollingResetTimeInterval;this._debounceResetIsScrollingId&&Ne(this._debounceResetIsScrollingId),this._debounceResetIsScrollingId=Ae(this._debounceResetIsScrollingCallback,e)}},{key:"_getEstimatedTotalHeight",value:function(){var e=this.props,t=e.cellCount,o=e.cellMeasurerCache,n=e.width,r=Math.max(1,Math.floor(n/o.defaultWidth));return this._positionCache.estimateTotalHeight(t,r,o.defaultHeight)}},{key:"_invokeOnScrollCallback",value:function(){var e=this.props,t=e.height,o=e.onScroll,n=this.state.scrollTop;this._onScrollMemoized!==n&&(o({clientHeight:t,scrollHeight:this._getEstimatedTotalHeight(),scrollTop:n}),this._onScrollMemoized=n)}},{key:"_invokeOnCellsRenderedCallback",value:function(){this._startIndexMemoized===this._startIndex&&this._stopIndexMemoized===this._stopIndex||((0,this.props.onCellsRendered)({startIndex:this._startIndex,stopIndex:this._stopIndex}),this._startIndexMemoized=this._startIndex,this._stopIndexMemoized=this._stopIndex)}},{key:"_populatePositionCache",value:function(e,t){for(var o=this.props,n=o.cellMeasurerCache,r=o.cellPositioner,i=e;i<=t;i++){var s=r(i),a=s.left,l=s.top;this._positionCache.setPosition(i,a,l,n.getHeight(i))}}}],[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.scrollTop&&t.scrollTop!==e.scrollTop?{isScrolling:!0,scrollTop:e.scrollTop}:null}}]),t}(s.PureComponent),ue(Nt,"propTypes",null),At);function Gt(){}ue(Lt,"defaultProps",{autoHeight:!1,keyMapper:function(e){return e},onCellsRendered:Gt,onScroll:Gt,overscanByPixels:20,role:"grid",scrollingResetTimeInterval:150,style:{},tabIndex:0,rowDirection:"ltr"}),(0,pe.polyfill)(Lt);var Ft=function(){function e(){var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};oe(this,e),ue(this,"_cellMeasurerCache",void 0),ue(this,"_columnIndexOffset",void 0),ue(this,"_rowIndexOffset",void 0),ue(this,"columnWidth",(function(e){var o=e.index;t._cellMeasurerCache.columnWidth({index:o+t._columnIndexOffset})})),ue(this,"rowHeight",(function(e){var o=e.index;t._cellMeasurerCache.rowHeight({index:o+t._rowIndexOffset})}));var n=o.cellMeasurerCache,r=o.columnIndexOffset,i=void 0===r?0:r,s=o.rowIndexOffset,a=void 0===s?0:s;this._cellMeasurerCache=n,this._columnIndexOffset=i,this._rowIndexOffset=a}return se(e,[{key:"clear",value:function(e,t){this._cellMeasurerCache.clear(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"clearAll",value:function(){this._cellMeasurerCache.clearAll()}},{key:"hasFixedHeight",value:function(){return this._cellMeasurerCache.hasFixedHeight()}},{key:"hasFixedWidth",value:function(){return this._cellMeasurerCache.hasFixedWidth()}},{key:"getHeight",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getHeight(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"getWidth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getWidth(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"has",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.has(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"set",value:function(e,t,o,n){this._cellMeasurerCache.set(e+this._rowIndexOffset,t+this._columnIndexOffset,o,n)}},{key:"defaultHeight",get:function(){return this._cellMeasurerCache.defaultHeight}},{key:"defaultWidth",get:function(){return this._cellMeasurerCache.defaultWidth}}]),e}();function Bt(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function Wt(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Bt(o,!0).forEach((function(t){ue(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Bt(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var Ut=function(e){function t(e,o){var n;oe(this,t),ue(ae(n=le(this,ce(t).call(this,e,o))),"state",{scrollLeft:0,scrollTop:0,scrollbarSize:0,showHorizontalScrollbar:!1,showVerticalScrollbar:!1}),ue(ae(n),"_deferredInvalidateColumnIndex",null),ue(ae(n),"_deferredInvalidateRowIndex",null),ue(ae(n),"_bottomLeftGridRef",(function(e){n._bottomLeftGrid=e})),ue(ae(n),"_bottomRightGridRef",(function(e){n._bottomRightGrid=e})),ue(ae(n),"_cellRendererBottomLeftGrid",(function(e){var t=e.rowIndex,o=ve(e,["rowIndex"]),r=n.props,i=r.cellRenderer,a=r.fixedRowCount;return t===r.rowCount-a?s.createElement("div",{key:o.key,style:Wt({},o.style,{height:20})}):i(Wt({},o,{parent:ae(n),rowIndex:t+a}))})),ue(ae(n),"_cellRendererBottomRightGrid",(function(e){var t=e.columnIndex,o=e.rowIndex,r=ve(e,["columnIndex","rowIndex"]),i=n.props,s=i.cellRenderer,a=i.fixedColumnCount,l=i.fixedRowCount;return s(Wt({},r,{columnIndex:t+a,parent:ae(n),rowIndex:o+l}))})),ue(ae(n),"_cellRendererTopRightGrid",(function(e){var t=e.columnIndex,o=ve(e,["columnIndex"]),r=n.props,i=r.cellRenderer,a=r.columnCount,l=r.fixedColumnCount;return t===a-l?s.createElement("div",{key:o.key,style:Wt({},o.style,{width:20})}):i(Wt({},o,{columnIndex:t+l,parent:ae(n)}))})),ue(ae(n),"_columnWidthRightGrid",(function(e){var t=e.index,o=n.props,r=o.columnCount,i=o.fixedColumnCount,s=o.columnWidth,a=n.state,l=a.scrollbarSize;return a.showHorizontalScrollbar&&t===r-i?l:"function"==typeof s?s({index:t+i}):s})),ue(ae(n),"_onScroll",(function(e){var t=e.scrollLeft,o=e.scrollTop;n.setState({scrollLeft:t,scrollTop:o});var r=n.props.onScroll;r&&r(e)})),ue(ae(n),"_onScrollbarPresenceChange",(function(e){var t=e.horizontal,o=e.size,r=e.vertical,i=n.state,s=i.showHorizontalScrollbar,a=i.showVerticalScrollbar;if(t!==s||r!==a){n.setState({scrollbarSize:o,showHorizontalScrollbar:t,showVerticalScrollbar:r});var l=n.props.onScrollbarPresenceChange;"function"==typeof l&&l({horizontal:t,size:o,vertical:r})}})),ue(ae(n),"_onScrollLeft",(function(e){var t=e.scrollLeft;n._onScroll({scrollLeft:t,scrollTop:n.state.scrollTop})})),ue(ae(n),"_onScrollTop",(function(e){var t=e.scrollTop;n._onScroll({scrollTop:t,scrollLeft:n.state.scrollLeft})})),ue(ae(n),"_rowHeightBottomGrid",(function(e){var t=e.index,o=n.props,r=o.fixedRowCount,i=o.rowCount,s=o.rowHeight,a=n.state,l=a.scrollbarSize;return a.showVerticalScrollbar&&t===i-r?l:"function"==typeof s?s({index:t+r}):s})),ue(ae(n),"_topLeftGridRef",(function(e){n._topLeftGrid=e})),ue(ae(n),"_topRightGridRef",(function(e){n._topRightGrid=e}));var r=e.deferredMeasurementCache,i=e.fixedColumnCount,a=e.fixedRowCount;return n._maybeCalculateCachedStyles(!0),r&&(n._deferredMeasurementCacheBottomLeftGrid=a>0?new Ft({cellMeasurerCache:r,columnIndexOffset:0,rowIndexOffset:a}):r,n._deferredMeasurementCacheBottomRightGrid=i>0||a>0?new Ft({cellMeasurerCache:r,columnIndexOffset:i,rowIndexOffset:a}):r,n._deferredMeasurementCacheTopRightGrid=i>0?new Ft({cellMeasurerCache:r,columnIndexOffset:i,rowIndexOffset:0}):r),n}return he(t,e),se(t,[{key:"forceUpdateGrids",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.forceUpdate(),this._bottomRightGrid&&this._bottomRightGrid.forceUpdate(),this._topLeftGrid&&this._topLeftGrid.forceUpdate(),this._topRightGrid&&this._topRightGrid.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,o):o,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,r):r}},{key:"measureAllCells",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.measureAllCells(),this._bottomRightGrid&&this._bottomRightGrid.measureAllCells(),this._topLeftGrid&&this._topLeftGrid.measureAllCells(),this._topRightGrid&&this._topRightGrid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n,i=this.props,s=i.fixedColumnCount,a=i.fixedRowCount,l=Math.max(0,o-s),c=Math.max(0,r-a);this._bottomLeftGrid&&this._bottomLeftGrid.recomputeGridSize({columnIndex:o,rowIndex:c}),this._bottomRightGrid&&this._bottomRightGrid.recomputeGridSize({columnIndex:l,rowIndex:c}),this._topLeftGrid&&this._topLeftGrid.recomputeGridSize({columnIndex:o,rowIndex:r}),this._topRightGrid&&this._topRightGrid.recomputeGridSize({columnIndex:l,rowIndex:r}),this._leftGridWidth=null,this._topGridHeight=null,this._maybeCalculateCachedStyles(!0)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.scrollLeft,o=e.scrollTop;if(t>0||o>0){var n={};t>0&&(n.scrollLeft=t),o>0&&(n.scrollTop=o),this.setState(n)}this._handleInvalidatedGridSize()}},{key:"componentDidUpdate",value:function(){this._handleInvalidatedGridSize()}},{key:"render",value:function(){var e=this.props,t=e.onScroll,o=e.onSectionRendered,n=(e.onScrollbarPresenceChange,e.scrollLeft,e.scrollToColumn),r=(e.scrollTop,e.scrollToRow),i=ve(e,["onScroll","onSectionRendered","onScrollbarPresenceChange","scrollLeft","scrollToColumn","scrollTop","scrollToRow"]);if(this._prepareForRender(),0===this.props.width||0===this.props.height)return null;var a=this.state,l=a.scrollLeft,c=a.scrollTop;return s.createElement("div",{style:this._containerOuterStyle},s.createElement("div",{style:this._containerTopStyle},this._renderTopLeftGrid(i),this._renderTopRightGrid(Wt({},i,{onScroll:t,scrollLeft:l}))),s.createElement("div",{style:this._containerBottomStyle},this._renderBottomLeftGrid(Wt({},i,{onScroll:t,scrollTop:c})),this._renderBottomRightGrid(Wt({},i,{onScroll:t,onSectionRendered:o,scrollLeft:l,scrollToColumn:n,scrollToRow:r,scrollTop:c}))))}},{key:"_getBottomGridHeight",value:function(e){return e.height-this._getTopGridHeight(e)}},{key:"_getLeftGridWidth",value:function(e){var t=e.fixedColumnCount,o=e.columnWidth;if(null==this._leftGridWidth)if("function"==typeof o){for(var n=0,r=0;r<t;r++)n+=o({index:r});this._leftGridWidth=n}else this._leftGridWidth=o*t;return this._leftGridWidth}},{key:"_getRightGridWidth",value:function(e){return e.width-this._getLeftGridWidth(e)}},{key:"_getTopGridHeight",value:function(e){var t=e.fixedRowCount,o=e.rowHeight;if(null==this._topGridHeight)if("function"==typeof o){for(var n=0,r=0;r<t;r++)n+=o({index:r});this._topGridHeight=n}else this._topGridHeight=o*t;return this._topGridHeight}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t}),this.forceUpdate()}}},{key:"_maybeCalculateCachedStyles",value:function(e){var t=this.props,o=t.columnWidth,n=t.enableFixedColumnScroll,r=t.enableFixedRowScroll,i=t.height,s=t.fixedColumnCount,a=t.fixedRowCount,l=t.rowHeight,c=t.style,d=t.styleBottomLeftGrid,h=t.styleBottomRightGrid,u=t.styleTopLeftGrid,p=t.styleTopRightGrid,f=t.width,m=e||i!==this._lastRenderedHeight||f!==this._lastRenderedWidth,g=e||o!==this._lastRenderedColumnWidth||s!==this._lastRenderedFixedColumnCount,b=e||a!==this._lastRenderedFixedRowCount||l!==this._lastRenderedRowHeight;(e||m||c!==this._lastRenderedStyle)&&(this._containerOuterStyle=Wt({height:i,overflow:"visible",width:f},c)),(e||m||b)&&(this._containerTopStyle={height:this._getTopGridHeight(this.props),position:"relative",width:f},this._containerBottomStyle={height:i-this._getTopGridHeight(this.props),overflow:"visible",position:"relative",width:f}),(e||d!==this._lastRenderedStyleBottomLeftGrid)&&(this._bottomLeftGridStyle=Wt({left:0,overflowX:"hidden",overflowY:n?"auto":"hidden",position:"absolute"},d)),(e||g||h!==this._lastRenderedStyleBottomRightGrid)&&(this._bottomRightGridStyle=Wt({left:this._getLeftGridWidth(this.props),position:"absolute"},h)),(e||u!==this._lastRenderedStyleTopLeftGrid)&&(this._topLeftGridStyle=Wt({left:0,overflowX:"hidden",overflowY:"hidden",position:"absolute",top:0},u)),(e||g||p!==this._lastRenderedStyleTopRightGrid)&&(this._topRightGridStyle=Wt({left:this._getLeftGridWidth(this.props),overflowX:r?"auto":"hidden",overflowY:"hidden",position:"absolute",top:0},p)),this._lastRenderedColumnWidth=o,this._lastRenderedFixedColumnCount=s,this._lastRenderedFixedRowCount=a,this._lastRenderedHeight=i,this._lastRenderedRowHeight=l,this._lastRenderedStyle=c,this._lastRenderedStyleBottomLeftGrid=d,this._lastRenderedStyleBottomRightGrid=h,this._lastRenderedStyleTopLeftGrid=u,this._lastRenderedStyleTopRightGrid=p,this._lastRenderedWidth=f}},{key:"_prepareForRender",value:function(){this._lastRenderedColumnWidth===this.props.columnWidth&&this._lastRenderedFixedColumnCount===this.props.fixedColumnCount||(this._leftGridWidth=null),this._lastRenderedFixedRowCount===this.props.fixedRowCount&&this._lastRenderedRowHeight===this.props.rowHeight||(this._topGridHeight=null),this._maybeCalculateCachedStyles(),this._lastRenderedColumnWidth=this.props.columnWidth,this._lastRenderedFixedColumnCount=this.props.fixedColumnCount,this._lastRenderedFixedRowCount=this.props.fixedRowCount,this._lastRenderedRowHeight=this.props.rowHeight}},{key:"_renderBottomLeftGrid",value:function(e){var t=e.enableFixedColumnScroll,o=e.fixedColumnCount,n=e.fixedRowCount,r=e.rowCount,i=e.hideBottomLeftGridScrollbar,a=this.state.showVerticalScrollbar;if(!o)return null;var l=a?1:0,c=this._getBottomGridHeight(e),d=this._getLeftGridWidth(e),h=this.state.showVerticalScrollbar?this.state.scrollbarSize:0,u=i?d+h:d,p=s.createElement(Ge,fe({},e,{cellRenderer:this._cellRendererBottomLeftGrid,className:this.props.classNameBottomLeftGrid,columnCount:o,deferredMeasurementCache:this._deferredMeasurementCacheBottomLeftGrid,height:c,onScroll:t?this._onScrollTop:void 0,ref:this._bottomLeftGridRef,rowCount:Math.max(0,r-n)+l,rowHeight:this._rowHeightBottomGrid,style:this._bottomLeftGridStyle,tabIndex:null,width:u}));return i?s.createElement("div",{className:"BottomLeftGrid_ScrollWrapper",style:Wt({},this._bottomLeftGridStyle,{height:c,width:d,overflowY:"hidden"})},p):p}},{key:"_renderBottomRightGrid",value:function(e){var t=e.columnCount,o=e.fixedColumnCount,n=e.fixedRowCount,r=e.rowCount,i=e.scrollToColumn,a=e.scrollToRow;return s.createElement(Ge,fe({},e,{cellRenderer:this._cellRendererBottomRightGrid,className:this.props.classNameBottomRightGrid,columnCount:Math.max(0,t-o),columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheBottomRightGrid,height:this._getBottomGridHeight(e),onScroll:this._onScroll,onScrollbarPresenceChange:this._onScrollbarPresenceChange,ref:this._bottomRightGridRef,rowCount:Math.max(0,r-n),rowHeight:this._rowHeightBottomGrid,scrollToColumn:i-o,scrollToRow:a-n,style:this._bottomRightGridStyle,width:this._getRightGridWidth(e)}))}},{key:"_renderTopLeftGrid",value:function(e){var t=e.fixedColumnCount,o=e.fixedRowCount;return t&&o?s.createElement(Ge,fe({},e,{className:this.props.classNameTopLeftGrid,columnCount:t,height:this._getTopGridHeight(e),ref:this._topLeftGridRef,rowCount:o,style:this._topLeftGridStyle,tabIndex:null,width:this._getLeftGridWidth(e)})):null}},{key:"_renderTopRightGrid",value:function(e){var t=e.columnCount,o=e.enableFixedRowScroll,n=e.fixedColumnCount,r=e.fixedRowCount,i=e.scrollLeft,a=e.hideTopRightGridScrollbar,l=this.state,c=l.showHorizontalScrollbar,d=l.scrollbarSize;if(!r)return null;var h=c?1:0,u=this._getTopGridHeight(e),p=this._getRightGridWidth(e),f=c?d:0,m=u,g=this._topRightGridStyle;a&&(m=u+f,g=Wt({},this._topRightGridStyle,{left:0}));var b=s.createElement(Ge,fe({},e,{cellRenderer:this._cellRendererTopRightGrid,className:this.props.classNameTopRightGrid,columnCount:Math.max(0,t-n)+h,columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheTopRightGrid,height:m,onScroll:o?this._onScrollLeft:void 0,ref:this._topRightGridRef,rowCount:r,scrollLeft:i,style:g,tabIndex:null,width:p}));return a?s.createElement("div",{className:"TopRightGrid_ScrollWrapper",style:Wt({},this._topRightGridStyle,{height:u,width:p,overflowX:"hidden"})},b):b}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft&&e.scrollLeft>=0?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop&&e.scrollTop>=0?e.scrollTop:t.scrollTop}:null}}]),t}(s.PureComponent);function jt(e){var t=e.className,o=e.columns,n=e.style;return s.createElement("div",{className:t,role:"row",style:n},o)}ue(Ut,"defaultProps",{classNameBottomLeftGrid:"",classNameBottomRightGrid:"",classNameTopLeftGrid:"",classNameTopRightGrid:"",enableFixedColumnScroll:!1,enableFixedRowScroll:!1,fixedColumnCount:0,fixedRowCount:0,scrollToColumn:-1,scrollToRow:-1,style:{},styleBottomLeftGrid:{},styleBottomRightGrid:{},styleTopLeftGrid:{},styleTopRightGrid:{},hideTopRightGridScrollbar:!1,hideBottomLeftGridScrollbar:!1}),Ut.propTypes={},(0,pe.polyfill)(Ut),(function(e){function t(e,o){var n;return oe(this,t),(n=le(this,ce(t).call(this,e,o))).state={clientHeight:0,clientWidth:0,scrollHeight:0,scrollLeft:0,scrollTop:0,scrollWidth:0},n._onScroll=n._onScroll.bind(ae(n)),n}return he(t,e),se(t,[{key:"render",value:function(){var e=this.props.children,t=this.state,o=t.clientHeight,n=t.clientWidth,r=t.scrollHeight,i=t.scrollLeft,s=t.scrollTop,a=t.scrollWidth;return e({clientHeight:o,clientWidth:n,onScroll:this._onScroll,scrollHeight:r,scrollLeft:i,scrollTop:s,scrollWidth:a})}},{key:"_onScroll",value:function(e){var t=e.clientHeight,o=e.clientWidth,n=e.scrollHeight,r=e.scrollLeft,i=e.scrollTop,s=e.scrollWidth;this.setState({clientHeight:t,clientWidth:o,scrollHeight:n,scrollLeft:r,scrollTop:i,scrollWidth:s})}}]),t}(s.PureComponent)).propTypes={},jt.propTypes=null;const Vt={ASC:"ASC",DESC:"DESC"};function Zt(e){var t=e.sortDirection,o=ge("ReactVirtualized__Table__sortableHeaderIcon",{"ReactVirtualized__Table__sortableHeaderIcon--ASC":t===Vt.ASC,"ReactVirtualized__Table__sortableHeaderIcon--DESC":t===Vt.DESC});return s.createElement("svg",{className:o,width:18,height:18,viewBox:"0 0 24 24"},t===Vt.ASC?s.createElement("path",{d:"M7 14l5-5 5 5z"}):s.createElement("path",{d:"M7 10l5 5 5-5z"}),s.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}function qt(e){var t=e.dataKey,o=e.label,n=e.sortBy,r=e.sortDirection,i=n===t,a=[s.createElement("span",{className:"ReactVirtualized__Table__headerTruncatedText",key:"label",title:"string"==typeof o?o:null},o)];return i&&a.push(s.createElement(Zt,{key:"SortIndicator",sortDirection:r})),a}function Kt(e){var t=e.className,o=e.columns,n=e.index,r=e.key,i=e.onRowClick,a=e.onRowDoubleClick,l=e.onRowMouseOut,c=e.onRowMouseOver,d=e.onRowRightClick,h=e.rowData,u=e.style,p={"aria-rowindex":n+1};return(i||a||l||c||d)&&(p["aria-label"]="row",p.tabIndex=0,i&&(p.onClick=function(e){return i({event:e,index:n,rowData:h})}),a&&(p.onDoubleClick=function(e){return a({event:e,index:n,rowData:h})}),l&&(p.onMouseOut=function(e){return l({event:e,index:n,rowData:h})}),c&&(p.onMouseOver=function(e){return c({event:e,index:n,rowData:h})}),d&&(p.onContextMenu=function(e){return d({event:e,index:n,rowData:h})})),s.createElement("div",fe({},p,{className:t,key:r,role:"row",style:u}),o)}Zt.propTypes={},qt.propTypes=null,Kt.propTypes=null;var Yt=function(e){function t(){return oe(this,t),le(this,ce(t).apply(this,arguments))}return he(t,e),t}(s.Component);function Xt(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function Qt(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Xt(o,!0).forEach((function(t){ue(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Xt(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}ue(Yt,"defaultProps",{cellDataGetter:function(e){var t=e.dataKey,o=e.rowData;return"function"==typeof o.get?o.get(t):o[t]},cellRenderer:function(e){var t=e.cellData;return null==t?"":String(t)},defaultSortDirection:Vt.ASC,flexGrow:0,flexShrink:1,headerRenderer:qt,style:{}}),Yt.propTypes={};var Jt=function(e){function t(e){var o;return oe(this,t),(o=le(this,ce(t).call(this,e))).state={scrollbarWidth:0},o._createColumn=o._createColumn.bind(ae(o)),o._createRow=o._createRow.bind(ae(o)),o._onScroll=o._onScroll.bind(ae(o)),o._onSectionRendered=o._onSectionRendered.bind(ae(o)),o._setRef=o._setRef.bind(ae(o)),o}return he(t,e),se(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,o=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:o}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,o=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:o,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,o=void 0===t?0:t,n=e.rowIndex,r=void 0===n?0:n;this.Grid&&this.Grid.recomputeGridSize({rowIndex:r,columnIndex:o})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"getScrollbarWidth",value:function(){if(this.Grid){var e=(0,et.findDOMNode)(this.Grid),t=e.clientWidth||0;return(e.offsetWidth||0)-t}return 0}},{key:"componentDidMount",value:function(){this._setScrollbarWidth()}},{key:"componentDidUpdate",value:function(){this._setScrollbarWidth()}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,n=t.className,r=t.disableHeader,i=t.gridClassName,a=t.gridStyle,l=t.headerHeight,c=t.headerRowRenderer,d=t.height,h=t.id,u=t.noRowsRenderer,p=t.rowClassName,f=t.rowStyle,m=t.scrollToIndex,g=t.style,b=t.width,v=this.state.scrollbarWidth,y=r?d:d-l,w="function"==typeof p?p({index:-1}):p,C="function"==typeof f?f({index:-1}):f;return this._cachedColumnStyles=[],s.Children.toArray(o).forEach((function(t,o){var n=e._getFlexStyleForColumn(t,t.props.style);e._cachedColumnStyles[o]=Qt({overflow:"hidden"},n)})),s.createElement("div",{"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-colcount":s.Children.toArray(o).length,"aria-rowcount":this.props.rowCount,className:ge("ReactVirtualized__Table",n),id:h,role:"grid",style:g},!r&&c({className:ge("ReactVirtualized__Table__headerRow",w),columns:this._getHeaderColumns(),style:Qt({height:l,overflow:"hidden",paddingRight:v,width:b},C)}),s.createElement(Ge,fe({},this.props,{"aria-readonly":null,autoContainerWidth:!0,className:ge("ReactVirtualized__Table__Grid",i),cellRenderer:this._createRow,columnWidth:b,columnCount:1,height:y,id:void 0,noContentRenderer:u,onScroll:this._onScroll,onSectionRendered:this._onSectionRendered,ref:this._setRef,role:"rowgroup",scrollbarWidth:v,scrollToRow:m,style:Qt({},a,{overflowX:"hidden"})})))}},{key:"_createColumn",value:function(e){var t=e.column,o=e.columnIndex,n=e.isScrolling,r=e.parent,i=e.rowData,a=e.rowIndex,l=this.props.onColumnClick,c=t.props,d=c.cellDataGetter,h=c.cellRenderer,u=c.className,p=c.columnData,f=c.dataKey,m=c.id,g=h({cellData:d({columnData:p,dataKey:f,rowData:i}),columnData:p,columnIndex:o,dataKey:f,isScrolling:n,parent:r,rowData:i,rowIndex:a}),b=this._cachedColumnStyles[o],v="string"==typeof g?g:null;return s.createElement("div",{"aria-colindex":o+1,"aria-describedby":m,className:ge("ReactVirtualized__Table__rowColumn",u),key:"Row"+a+"-Col"+o,onClick:function(e){l&&l({columnData:p,dataKey:f,event:e})},role:"gridcell",style:b,title:v},g)}},{key:"_createHeader",value:function(e){var t,o,n,r,i,a=e.column,l=e.index,c=this.props,d=c.headerClassName,h=c.headerStyle,u=c.onHeaderClick,p=c.sort,f=c.sortBy,m=c.sortDirection,g=a.props,b=g.columnData,v=g.dataKey,y=g.defaultSortDirection,w=g.disableSort,C=g.headerRenderer,x=g.id,S=g.label,_=!w&&p,T=ge("ReactVirtualized__Table__headerColumn",d,a.props.headerClassName,{ReactVirtualized__Table__sortableHeaderColumn:_}),R=this._getFlexStyleForColumn(a,Qt({},h,{},a.props.headerStyle)),k=C({columnData:b,dataKey:v,disableSort:w,label:S,sortBy:f,sortDirection:m});if(_||u){var E=f!==v?y:m===Vt.DESC?Vt.ASC:Vt.DESC,O=function(e){_&&p({defaultSortDirection:y,event:e,sortBy:v,sortDirection:E}),u&&u({columnData:b,dataKey:v,event:e})};i=a.props["aria-label"]||S||v,r="none",n=0,t=O,o=function(e){"Enter"!==e.key&&" "!==e.key||O(e)}}return f===v&&(r=m===Vt.ASC?"ascending":"descending"),s.createElement("div",{"aria-label":i,"aria-sort":r,className:T,id:x,key:"Header-Col"+l,onClick:t,onKeyDown:o,role:"columnheader",style:R,tabIndex:n},k)}},{key:"_createRow",value:function(e){var t=this,o=e.rowIndex,n=e.isScrolling,r=e.key,i=e.parent,a=e.style,l=this.props,c=l.children,d=l.onRowClick,h=l.onRowDoubleClick,u=l.onRowRightClick,p=l.onRowMouseOver,f=l.onRowMouseOut,m=l.rowClassName,g=l.rowGetter,b=l.rowRenderer,v=l.rowStyle,y=this.state.scrollbarWidth,w="function"==typeof m?m({index:o}):m,C="function"==typeof v?v({index:o}):v,x=g({index:o}),S=s.Children.toArray(c).map((function(e,r){return t._createColumn({column:e,columnIndex:r,isScrolling:n,parent:i,rowData:x,rowIndex:o,scrollbarWidth:y})})),_=ge("ReactVirtualized__Table__row",w),T=Qt({},a,{height:this._getRowHeight(o),overflow:"hidden",paddingRight:y},C);return b({className:_,columns:S,index:o,isScrolling:n,key:r,onRowClick:d,onRowDoubleClick:h,onRowRightClick:u,onRowMouseOver:p,onRowMouseOut:f,rowData:x,style:T})}},{key:"_getFlexStyleForColumn",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o="".concat(e.props.flexGrow," ").concat(e.props.flexShrink," ").concat(e.props.width,"px"),n=Qt({},t,{flex:o,msFlex:o,WebkitFlex:o});return e.props.maxWidth&&(n.maxWidth=e.props.maxWidth),e.props.minWidth&&(n.minWidth=e.props.minWidth),n}},{key:"_getHeaderColumns",value:function(){var e=this,t=this.props,o=t.children;return(t.disableHeader?[]:s.Children.toArray(o)).map((function(t,o){return e._createHeader({column:t,index:o})}))}},{key:"_getRowHeight",value:function(e){var t=this.props.rowHeight;return"function"==typeof t?t({index:e}):t}},{key:"_onScroll",value:function(e){var t=e.clientHeight,o=e.scrollHeight,n=e.scrollTop;(0,this.props.onScroll)({clientHeight:t,scrollHeight:o,scrollTop:n})}},{key:"_onSectionRendered",value:function(e){var t=e.rowOverscanStartIndex,o=e.rowOverscanStopIndex,n=e.rowStartIndex,r=e.rowStopIndex;(0,this.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:o,startIndex:n,stopIndex:r})}},{key:"_setRef",value:function(e){this.Grid=e}},{key:"_setScrollbarWidth",value:function(){var e=this.getScrollbarWidth();this.setState({scrollbarWidth:e})}}]),t}(s.PureComponent);ue(Jt,"defaultProps",{disableHeader:!1,estimatedRowSize:30,headerHeight:0,headerStyle:{},noRowsRenderer:function(){return null},onRowsRendered:function(){return null},onScroll:function(){return null},overscanIndicesGetter:Fe,overscanRowCount:10,rowRenderer:Kt,headerRowRenderer:jt,rowStyle:{},scrollToAlignment:"auto",scrollToIndex:-1,style:{}}),Jt.propTypes={};var eo=[],to=null,oo=null;function no(){oo&&(oo=null,document.body&&null!=to&&(document.body.style.pointerEvents=to),to=null)}function ro(){no(),eo.forEach((function(e){return e.__resetIsScrolling()}))}function io(e){e.currentTarget===window&&null==to&&document.body&&(to=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),function(){oo&&Ne(oo);var e=0;eo.forEach((function(t){e=Math.max(e,t.props.scrollingResetTimeInterval)})),oo=Ae(ro,e)}(),eo.forEach((function(t){t.props.scrollElement===e.currentTarget&&t.__handleWindowScrollEvent()}))}function so(e,t){eo.some((function(e){return e.props.scrollElement===t}))||t.addEventListener("scroll",io),eo.push(e)}function ao(e,t){(eo=eo.filter((function(t){return t!==e}))).length||(t.removeEventListener("scroll",io),oo&&(Ne(oo),no()))}var lo,co,ho=function(e){return e===window},uo=function(e){return e.getBoundingClientRect()};function po(e,t){if(e){if(ho(e)){var o=window,n=o.innerHeight,r=o.innerWidth;return{height:"number"==typeof n?n:0,width:"number"==typeof r?r:0}}return uo(e)}return{height:t.serverHeight,width:t.serverWidth}}function fo(e){return ho(e)&&document.documentElement?{top:"scrollY"in window?window.scrollY:document.documentElement.scrollTop,left:"scrollX"in window?window.scrollX:document.documentElement.scrollLeft}:{top:e.scrollTop,left:e.scrollLeft}}function mo(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}var go=function(){return"undefined"!=typeof window?window:void 0},bo=(co=lo=function(e){function t(){var e,o;oe(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return ue(ae(o=le(this,(e=ce(t)).call.apply(e,[this].concat(r)))),"_window",go()),ue(ae(o),"_isMounted",!1),ue(ae(o),"_positionFromTop",0),ue(ae(o),"_positionFromLeft",0),ue(ae(o),"_detectElementResize",void 0),ue(ae(o),"_child",void 0),ue(ae(o),"state",function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?mo(o,!0).forEach((function(t){ue(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):mo(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},po(o.props.scrollElement,o.props),{isScrolling:!1,scrollLeft:0,scrollTop:0})),ue(ae(o),"_registerChild",(function(e){e&&Element,o._child=e,o.updatePosition()})),ue(ae(o),"_onChildScroll",(function(e){var t=e.scrollTop;if(o.state.scrollTop!==t){var n=o.props.scrollElement;n&&("function"==typeof n.scrollTo?n.scrollTo(0,t+o._positionFromTop):n.scrollTop=t+o._positionFromTop)}})),ue(ae(o),"_registerResizeListener",(function(e){e===window?window.addEventListener("resize",o._onResize,!1):o._detectElementResize.addResizeListener(e,o._onResize)})),ue(ae(o),"_unregisterResizeListener",(function(e){e===window?window.removeEventListener("resize",o._onResize,!1):e&&o._detectElementResize.removeResizeListener(e,o._onResize)})),ue(ae(o),"_onResize",(function(){o.updatePosition()})),ue(ae(o),"__handleWindowScrollEvent",(function(){if(o._isMounted){var e=o.props.onScroll,t=o.props.scrollElement;if(t){var n=fo(t),r=Math.max(0,n.left-o._positionFromLeft),i=Math.max(0,n.top-o._positionFromTop);o.setState({isScrolling:!0,scrollLeft:r,scrollTop:i}),e({scrollLeft:r,scrollTop:i})}}})),ue(ae(o),"__resetIsScrolling",(function(){o.setState({isScrolling:!1})})),o}return he(t,e),se(t,[{key:"updatePosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollElement,t=this.props.onResize,o=this.state,n=o.height,r=o.width,i=this._child||et.findDOMNode(this);if(i instanceof Element&&e){var s=function(e,t){if(ho(t)&&document.documentElement){var o=document.documentElement,n=uo(e),r=uo(o);return{top:n.top-r.top,left:n.left-r.left}}var i=fo(t),s=uo(e),a=uo(t);return{top:s.top+i.top-a.top,left:s.left+i.left-a.left}}(i,e);this._positionFromTop=s.top,this._positionFromLeft=s.left}var a=po(e,this.props);n===a.height&&r===a.width||(this.setState({height:a.height,width:a.width}),t({height:a.height,width:a.width}))}},{key:"componentDidMount",value:function(){var e=this.props.scrollElement;this._detectElementResize=qe(),this.updatePosition(e),e&&(so(this,e),this._registerResizeListener(e)),this._isMounted=!0}},{key:"componentDidUpdate",value:function(e,t){var o=this.props.scrollElement,n=e.scrollElement;n!==o&&null!=n&&null!=o&&(this.updatePosition(o),ao(this,n),so(this,o),this._unregisterResizeListener(n),this._registerResizeListener(o))}},{key:"componentWillUnmount",value:function(){var e=this.props.scrollElement;e&&(ao(this,e),this._unregisterResizeListener(e)),this._isMounted=!1}},{key:"render",value:function(){var e=this.props.children,t=this.state,o=t.isScrolling,n=t.scrollTop,r=t.scrollLeft,i=t.height,s=t.width;return e({onChildScroll:this._onChildScroll,registerChild:this._registerChild,height:i,isScrolling:o,scrollLeft:r,scrollTop:n,width:s})}}]),t}(s.PureComponent),ue(lo,"propTypes",null),co);ue(bo,"defaultProps",{onResize:function(){},onScroll:function(){},scrollingResetTimeInterval:150,scrollElement:go(),serverHeight:0,serverWidth:0});var vo,yo=(vo=function(e,t){return vo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},vo(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}vo(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),wo=function(){return wo=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},wo.apply(this,arguments)},Co={top:{width:"100%",height:"10px",top:"-5px",left:"0px",cursor:"row-resize"},right:{width:"10px",height:"100%",top:"0px",right:"-5px",cursor:"col-resize"},bottom:{width:"100%",height:"10px",bottom:"-5px",left:"0px",cursor:"row-resize"},left:{width:"10px",height:"100%",top:"0px",left:"-5px",cursor:"col-resize"},topRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",top:"-10px",cursor:"ne-resize"},bottomRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",bottom:"-10px",cursor:"se-resize"},bottomLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",bottom:"-10px",cursor:"sw-resize"},topLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",top:"-10px",cursor:"nw-resize"}},xo=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onMouseDown=function(e){t.props.onResizeStart(e,t.props.direction)},t.onTouchStart=function(e){t.props.onResizeStart(e,t.props.direction)},t}return yo(t,e),t.prototype.render=function(){return s.createElement("div",{className:this.props.className||"",style:wo(wo({position:"absolute",userSelect:"none"},Co[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},t}(s.PureComponent),So=o(3316),_o=o.n(So),To=function(){var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},e(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),Ro=function(){return Ro=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},Ro.apply(this,arguments)},ko={width:"auto",height:"auto"},Eo=_o()((function(e,t,o){return Math.max(Math.min(e,o),t)})),Oo=_o()((function(e,t){return Math.round(e/t)*t})),Io=_o()((function(e,t){return new RegExp(e,"i").test(t)})),Mo=function(e){return Boolean(e.touches&&e.touches.length)},Do=_o()((function(e,t,o){void 0===o&&(o=0);var n=t.reduce((function(o,n,r){return Math.abs(n-e)<Math.abs(t[o]-e)?r:o}),0),r=Math.abs(t[n]-e);return 0===o||r<o?t[n]:e})),$o=_o()((function(e,t){return e.substr(e.length-t.length,t.length)===t})),No=_o()((function(e){return"auto"===(e=e.toString())||$o(e,"px")||$o(e,"%")||$o(e,"vh")||$o(e,"vw")||$o(e,"vmax")||$o(e,"vmin")?e:e+"px"})),Ao=function(e,t,o,n){if(e&&"string"==typeof e){if($o(e,"px"))return Number(e.replace("px",""));if($o(e,"%"))return t*(Number(e.replace("%",""))/100);if($o(e,"vw"))return o*(Number(e.replace("vw",""))/100);if($o(e,"vh"))return n*(Number(e.replace("vh",""))/100)}return e},Po=_o()((function(e,t,o,n,r,i,s){return n=Ao(n,e.width,t,o),r=Ao(r,e.height,t,o),i=Ao(i,e.width,t,o),s=Ao(s,e.height,t,o),{maxWidth:void 0===n?void 0:Number(n),maxHeight:void 0===r?void 0:Number(r),minWidth:void 0===i?void 0:Number(i),minHeight:void 0===s?void 0:Number(s)}})),zo=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],Ho="__resizable_base__",Lo=function(e){function t(t){var o=e.call(this,t)||this;return o.ratio=1,o.resizable=null,o.parentLeft=0,o.parentTop=0,o.resizableLeft=0,o.resizableRight=0,o.resizableTop=0,o.resizableBottom=0,o.targetLeft=0,o.targetTop=0,o.appendBase=function(){if(!o.resizable||!o.window)return null;var e=o.parentNode;if(!e)return null;var t=o.window.document.createElement("div");return t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.transform="scale(0, 0)",t.style.left="0",t.style.flex="0",t.classList?t.classList.add(Ho):t.className+=Ho,e.appendChild(t),t},o.removeBase=function(e){var t=o.parentNode;t&&t.removeChild(e)},o.ref=function(e){e&&(o.resizable=e)},o.state={isResizing:!1,width:void 0===(o.propsSize&&o.propsSize.width)?"auto":o.propsSize&&o.propsSize.width,height:void 0===(o.propsSize&&o.propsSize.height)?"auto":o.propsSize&&o.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},o.onResizeStart=o.onResizeStart.bind(o),o.onMouseMove=o.onMouseMove.bind(o),o.onMouseUp=o.onMouseUp.bind(o),o}return To(t,e),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||ko},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var e=0,t=0;if(this.resizable&&this.window){var o=this.resizable.offsetWidth,n=this.resizable.offsetHeight,r=this.resizable.style.position;"relative"!==r&&(this.resizable.style.position="relative"),e="auto"!==this.resizable.style.width?this.resizable.offsetWidth:o,t="auto"!==this.resizable.style.height?this.resizable.offsetHeight:n,this.resizable.style.position=r}return{width:e,height:t}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var e=this,t=this.props.size,o=function(t){if(void 0===e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&$o(e.propsSize[t].toString(),"%")){if($o(e.state[t].toString(),"%"))return e.state[t].toString();var o=e.getParentSize();return Number(e.state[t].toString().replace("px",""))/o[t]*100+"%"}return No(e.state[t])};return{width:t&&void 0!==t.width&&!this.state.isResizing?No(t.width):o("width"),height:t&&void 0!==t.height&&!this.state.isResizing?No(t.height):o("height")}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var e=this.appendBase();if(!e)return{width:0,height:0};var t=!1,o=this.parentNode.style.flexWrap;"wrap"!==o&&(t=!0,this.parentNode.style.flexWrap="wrap"),e.style.position="relative",e.style.minWidth="100%";var n={width:e.offsetWidth,height:e.offsetHeight};return t&&(this.parentNode.style.flexWrap=o),this.removeBase(e),n},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(this.resizable&&this.window){var e=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==e.flexBasis?e.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(e,t){var o=this.propsSize&&this.propsSize[t];return"auto"!==this.state[t]||this.state.original[t]!==e||void 0!==o&&"auto"!==o?e:"auto"},t.prototype.calculateNewMaxFromBoundary=function(e,t){var o,n,r=this.props.boundsByDirection,i=this.state.direction,s=r&&Io("left",i),a=r&&Io("top",i);if("parent"===this.props.bounds){var l=this.parentNode;l&&(o=s?this.resizableRight-this.parentLeft:l.offsetWidth+(this.parentLeft-this.resizableLeft),n=a?this.resizableBottom-this.parentTop:l.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(o=s?this.resizableRight:this.window.innerWidth-this.resizableLeft,n=a?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(o=s?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),n=a?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return o&&Number.isFinite(o)&&(e=e&&e<o?e:o),n&&Number.isFinite(n)&&(t=t&&t<n?t:n),{maxWidth:e,maxHeight:t}},t.prototype.calculateNewSizeFromDirection=function(e,t){var o=this.props.scale||1,n=this.props.resizeRatio||1,r=this.state,i=r.direction,s=r.original,a=this.props,l=a.lockAspectRatio,c=a.lockAspectRatioExtraHeight,d=a.lockAspectRatioExtraWidth,h=s.width,u=s.height,p=c||0,f=d||0;return Io("right",i)&&(h=s.width+(e-s.x)*n/o,l&&(u=(h-f)/this.ratio+p)),Io("left",i)&&(h=s.width-(e-s.x)*n/o,l&&(u=(h-f)/this.ratio+p)),Io("bottom",i)&&(u=s.height+(t-s.y)*n/o,l&&(h=(u-p)*this.ratio+f)),Io("top",i)&&(u=s.height-(t-s.y)*n/o,l&&(h=(u-p)*this.ratio+f)),{newWidth:h,newHeight:u}},t.prototype.calculateNewSizeFromAspectRatio=function(e,t,o,n){var r=this.props,i=r.lockAspectRatio,s=r.lockAspectRatioExtraHeight,a=r.lockAspectRatioExtraWidth,l=void 0===n.width?10:n.width,c=void 0===o.width||o.width<0?e:o.width,d=void 0===n.height?10:n.height,h=void 0===o.height||o.height<0?t:o.height,u=s||0,p=a||0;if(i){var f=(d-u)*this.ratio+p,m=(h-u)*this.ratio+p,g=(l-p)/this.ratio+u,b=(c-p)/this.ratio+u,v=Math.max(l,f),y=Math.min(c,m),w=Math.max(d,g),C=Math.min(h,b);e=Eo(e,v,y),t=Eo(t,w,C)}else e=Eo(e,l,c),t=Eo(t,d,h);return{newWidth:e,newHeight:t}},t.prototype.setBoundingClientRect=function(){if("parent"===this.props.bounds){var e=this.parentNode;if(e){var t=e.getBoundingClientRect();this.parentLeft=t.left,this.parentTop=t.top}}if(this.props.bounds&&"string"!=typeof this.props.bounds){var o=this.props.bounds.getBoundingClientRect();this.targetLeft=o.left,this.targetTop=o.top}if(this.resizable){var n=this.resizable.getBoundingClientRect(),r=n.left,i=n.top,s=n.right,a=n.bottom;this.resizableLeft=r,this.resizableRight=s,this.resizableTop=i,this.resizableBottom=a}},t.prototype.onResizeStart=function(e,t){if(this.resizable&&this.window){var o,n=0,r=0;if(e.nativeEvent&&function(e){return Boolean((e.clientX||0===e.clientX)&&(e.clientY||0===e.clientY))}(e.nativeEvent)?(n=e.nativeEvent.clientX,r=e.nativeEvent.clientY):e.nativeEvent&&Mo(e.nativeEvent)&&(n=e.nativeEvent.touches[0].clientX,r=e.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable&&!1===this.props.onResizeStart(e,t,this.resizable))return;this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var i=this.window.getComputedStyle(this.resizable);if("auto"!==i.flexBasis){var s=this.parentNode;if(s){var a=this.window.getComputedStyle(s).flexDirection;this.flexDir=a.startsWith("row")?"row":"column",o=i.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var l={original:{x:n,y:r,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:Ro(Ro({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(e.target).cursor||"auto"}),direction:t,flexBasis:o};this.setState(l)}},t.prototype.onMouseMove=function(e){if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&Mo(e))try{e.preventDefault(),e.stopPropagation()}catch(e){}var t=this.props,o=t.maxWidth,n=t.maxHeight,r=t.minWidth,i=t.minHeight,s=Mo(e)?e.touches[0].clientX:e.clientX,a=Mo(e)?e.touches[0].clientY:e.clientY,l=this.state,c=l.direction,d=l.original,h=l.width,u=l.height,p=this.getParentSize(),f=Po(p,this.window.innerWidth,this.window.innerHeight,o,n,r,i);o=f.maxWidth,n=f.maxHeight,r=f.minWidth,i=f.minHeight;var m=this.calculateNewSizeFromDirection(s,a),g=m.newHeight,b=m.newWidth,v=this.calculateNewMaxFromBoundary(o,n),y=this.calculateNewSizeFromAspectRatio(b,g,{width:v.maxWidth,height:v.maxHeight},{width:r,height:i});if(b=y.newWidth,g=y.newHeight,this.props.grid){var w=Oo(b,this.props.grid[0]),C=Oo(g,this.props.grid[1]),x=this.props.snapGap||0;b=0===x||Math.abs(w-b)<=x?w:b,g=0===x||Math.abs(C-g)<=x?C:g}this.props.snap&&this.props.snap.x&&(b=Do(b,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(g=Do(g,this.props.snap.y,this.props.snapGap));var S={width:b-d.width,height:g-d.height};h&&"string"==typeof h&&($o(h,"%")?b=b/p.width*100+"%":$o(h,"vw")?b=b/this.window.innerWidth*100+"vw":$o(h,"vh")&&(b=b/this.window.innerHeight*100+"vh")),u&&"string"==typeof u&&($o(u,"%")?g=g/p.height*100+"%":$o(u,"vw")?g=g/this.window.innerWidth*100+"vw":$o(u,"vh")&&(g=g/this.window.innerHeight*100+"vh"));var _={width:this.createSizeForCssProperty(b,"width"),height:this.createSizeForCssProperty(g,"height")};"row"===this.flexDir?_.flexBasis=_.width:"column"===this.flexDir&&(_.flexBasis=_.height),this.setState(_),this.props.onResize&&this.props.onResize(e,c,this.resizable,S)}},t.prototype.onMouseUp=function(e){var t=this.state,o=t.isResizing,n=t.direction,r=t.original;if(o&&this.resizable){var i={width:this.size.width-r.width,height:this.size.height-r.height};this.props.onResizeStop&&this.props.onResizeStop(e,n,this.resizable,i),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:Ro(Ro({},this.state.backgroundStyle),{cursor:"auto"})})}},t.prototype.updateSize=function(e){this.setState({width:e.width,height:e.height})},t.prototype.renderResizer=function(){var e=this,t=this.props,o=t.enable,n=t.handleStyles,r=t.handleClasses,i=t.handleWrapperStyle,a=t.handleWrapperClass,l=t.handleComponent;if(!o)return null;var c=Object.keys(o).map((function(t){return!1!==o[t]?s.createElement(xo,{key:t,direction:t,onResizeStart:e.onResizeStart,replaceStyles:n&&n[t],className:r&&r[t]},l&&l[t]?l[t]:null):null}));return s.createElement("div",{className:a,style:i},c)},t.prototype.render=function(){var e=this,t=Object.keys(this.props).reduce((function(t,o){return-1!==zo.indexOf(o)||(t[o]=e.props[o]),t}),{}),o=Ro(Ro(Ro({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(o.flexBasis=this.state.flexBasis);var n=this.props.as||"div";return s.createElement(n,Ro({ref:this.ref,style:o,className:this.props.className},t),this.state.isResizing&&s.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(s.PureComponent);const Go={top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},Fo={min:0,max:1/0},Bo=({height:e,heightConstraints:t,width:o,widthConstraints:n})=>({height:(0,F.u)(e,t.min,t.max),width:(0,F.u)(o,n.min,n.max)}),Wo=({enable:e,height:t,heightConstraints:o,resizeEdge:n,width:r=0,widthConstraints:i})=>({...Bo({height:t,widthConstraints:i,heightConstraints:o,width:r}),enable:void 0===e||e,horizontal:"left"===n||"right"===n,initialHeight:t,initialWidth:r,resizing:!1,isMouseWheeling:!1,vertical:"top"===n||"bottom"===n});class Uo extends a().PureComponent{static defaultProps={className:"",enable:!0,heightConstraints:Fo,resizeContentClassName:"",resizeHandleClassName:"",style:{},wrapperStyle:{},translate:()=>"",wrapChildrenInDivContainer:!0,widthConstraints:Fo};onWheelTimeOut;isMouseWheeling=!1;constructor(e){super(e),this.state=Wo(e)}componentWillReceiveProps(e){const{onResizeFromPropChange:t}=this.props,{height:o,resizing:n,width:r}=this.state,{onResizeFromPropChange:i}=e;if(n)return;const s=Wo(e);this.setState(s);const{height:a,width:l}=s,c=i||t;!c||a===o&&l===r||c({height:a,width:l,originalHeight:o,originalWidth:r})}_onResize=(e,t,o,{height:n,width:r})=>{const{onResize:i}=this.props,{height:s,horizontal:a,vertical:l,width:c}=this.state,{height:d,width:h}=(({deltaWidth:e,deltaHeight:t},{heightConstraints:o,widthConstraints:n},{initialHeight:r,initialWidth:i})=>Bo({height:r+t,heightConstraints:o,width:i+e,widthConstraints:n}))({deltaWidth:r,deltaHeight:n},this.props,this.state),u=a&&h!==c,p=l&&d!==s;(u||p)&&(this.setState({height:p?d:s,width:u?h:c,isMouseWheeling:!1}),i&&i({height:p?d:void 0,width:u?h:void 0}))};_onResizeStart=e=>{e.preventDefault(),e.stopPropagation();const{onResizeStart:t}=this.props,{height:o,horizontal:n,vertical:r,width:i}=this.state;this.setState({resizing:!0}),t&&t({height:r?o:void 0,width:n?i:void 0})};_onResizeEnd=()=>{const{onResizeEnd:e}=this.props,{height:t,horizontal:o,vertical:n,width:r,initialWidth:i,initialHeight:s}=this.state;this.setState({initialWidth:r,initialHeight:t,resizing:!1}),i===r&&s===t||e&&e({width:o?r:void 0,height:n?t:void 0})};_onWheel=()=>{this.isMouseWheeling||(this.isMouseWheeling=!0,this.setState({isMouseWheeling:!0})),clearTimeout(this.onWheelTimeOut),this.onWheelTimeOut=setTimeout((()=>{this.isMouseWheeling=!1,this.setState({isMouseWheeling:!1})}),50)};render(){const{children:e,className:t,handleStyles:o,resizeContentClassName:n,resizeEdge:r,resizeHandleClassName:s,style:l,translate:c,heightConstraints:d,wrapChildrenInDivContainer:h,widthConstraints:u}=this.props,{enable:p,height:f,horizontal:m,resizing:g,vertical:b,width:v,isMouseWheeling:y}=this.state,{display:w,...C}=l,{min:x,max:S}=u,{min:_,max:T}=d,R={...this.props.wrapperStyle};m&&(R.width=v,R.minWidth=v),b&&(R.height=f,R.minHeight=f);const k=i()("resizable",t,{resizing:g}),E=i()("contents",n,`resize-edge-${r}`,{horizontal:m,vertical:b}),O=i()(r,s,"resizable-handle",{horizontal:m,vertical:b}),I=a().createElement("span",{title:c("ResizePanel")});return a().createElement("div",{"data-testid":"resizable",onWheel:this._onWheel,style:{...R,display:w}},a().createElement(Lo,{className:k,"data-testid":"resizable-core",enable:{...Go,[r]:!y&&p},handleClasses:{[r]:O},handleComponent:{[r]:I},handleStyles:o,maxHeight:b?T:void 0,maxWidth:m?S:void 0,minHeight:b?_:void 0,minWidth:m?x:void 0,onResize:this._onResize,onResizeStart:this._onResizeStart,onResizeStop:this._onResizeEnd,size:{height:b?f:"100%",width:m?v:"100%"},style:C},h?a().createElement("div",{className:E,style:{userSelect:"none"}},e):e))}}var jo=o(7154);function Vo(e,t,o){const n=t*m.$0,{shape:r}=m.Qh[e],i=m.d_[r];if(!i)return{height:0,offset:0};const{baseHeight:s,minHeight:a,maxHeight:l}=i;let c=s*(o/n);void 0!==a&&c<a&&(c=a),void 0!==l&&c>l&&(c=l);const d=m.$0*(o/n);return{height:c,offset:c>=d?0:(d-c)/2}}function Zo(e,t,o){const n=o*m.$0;return e*m.$0/n*t}class qo extends a().PureComponent{canvas;componentDidMount(){this.updateCanvas()}componentWillReceiveProps(e){e.branchUpstreamRowIndices===this.props.branchUpstreamRowIndices&&e.markerRowIndices===this.props.markerRowIndices&&e.totalRows===this.props.totalRows&&e.viewportHeight===this.props.viewportHeight&&e.viewportWidth===this.props.viewportWidth&&e.markerColors===this.props.markerColors&&e.enabledScrollMarkerTypes===this.props.enabledScrollMarkerTypes&&e.scrollWidth===this.props.scrollWidth||this.updateCanvas()}updateCanvas(e){const{branchUpstreamRowIndices:t,enabledScrollMarkerTypes:o,viewportHeight:n,markerRowIndices:r,markerColors:i,scrollWidth:s,totalRows:a}=e||this.props,l=this.canvas.getContext("2d");l.canvas.width=s,l.canvas.height=n;const c=s/m.dF;l.clearRect(0,0,l.canvas.width,l.canvas.height);for(const[e,s]of Object.entries(m.Qh)){if(!(o.includes(e)||"remoteBranches"===e&&o.includes("localBranches")))continue;const d="remoteBranches"!==e||o.includes("remoteBranches")?r[e]||[]:t,h=i[e],u=s.lanes;h&&d.length&&(l.fillStyle=h,d.forEach((t=>{const{height:o,offset:r}=Vo(e,a,n);u.length&&l.fillRect(u[0]*c,Zo(t,n,a)+r-.5*o,c*u.length,o)})))}}render(){return a().createElement("canvas",{className:"graph-scroll-markers",ref:e=>this.canvas=e})}}var Ko=function({children:e,className:t,height:o,heightAdjustment:n,graphZoneType:r,scrollTop:i,style:s}){const l=m.qi[r].listId,c=document.getElementById(l),d=c?.scrollHeight||0;let h=o-28;void 0!==i&&(h=Number(s.top)-i,c&&d-o-i<0&&(h=o-n-28));const u={top:h,zIndex:2},p=a().createElement("span",{className:"absolute",style:u},e);return a().createElement("div",{className:t,style:s},c?tt().createPortal(p,document.getElementById("graph-container")):p)};function Yo({inline:e,getExternalIcon:t,message:o,size:n=100,useSimpleSpinner:r}){const s=i()("loading-spinner",{"inline-block":e,ml2:e,"shrink-0":e}),l=i()("spinner","mr1",{"inline-block":e}),c={height:n,width:n},d=i()("message",{"inline-block":e,mx2:e}),h=r?a().createElement("span",{className:l,style:c},t("loading")):a().createElement("div",{className:l,style:c},a().createElement("img",{className:"ring outer",src:"../../../images/spinner-outer-ring.svg",style:c}),a().createElement("img",{className:"ring inner",src:"../../../images/spinner-inner-ring.svg",style:c}),a().createElement("img",{className:"bg-img",src:"../../../images/spinner-kraken.svg",style:c}));return a().createElement("div",{className:s},h,o&&a().createElement("div",{className:d},o))}class Xo extends a().Component{render(){const{currentCommits:e,customFooterRow:t,graphZoneType:o,hasMoreCommits:n,height:r,horizontalScrollHeight:i,getExternalIcon:s,isLoadingRows:l,scrollTop:c,style:d,translate:h}=this.props,u=a().createElement(Yo,{className:"loading-spinner",getExternalIcon:s,size:20,useSimpleSpinner:!0}),p=a().createElement("div",{className:"flex items-center"},a().createElement("span",{style:{paddingRight:"5px"}},u)),f=0!==(e>0?e:0)||n?t:a().createElement(a().Fragment,null,h("Graph-NoCommits")),m=a().createElement("div",{className:"graph-adjust-commit-count p1"},l?p:f);return a().createElement(Ko,{graphZoneType:o,height:r,heightAdjustment:i,scrollTop:c,style:d},m)}}var Qo=Xo;function Jo({branchUpstreamRowIndices:e,rowCount:t,cellRenderersByIds:o,columnIndex:n,customFooterRow:r,enabledScrollMarkerTypes:s,enableResizer:l,getExternalIcon:c,getKeyForCell:d,graphHeight:h,graphWidth:u,graphZoneType:p,graphZones:f,hasMoreCommits:g,horizontalScrollHeight:b,isLoadingRows:v,markerColors:y,markerRowIndices:w,onResize:C,onResizeEnd:x,onResizeFromPropChange:S,onScroll:_,onScrollToRowCausedUpdate:T,onZoneEnter:R,scrollLeft:k,scrollToAlignment:E,scrollToIndex:O,scrollTop:I,smartCellRangeRenderer:M,translate:D,verticalScrollWidth:$}){const N=(0,z.zv)(p,f);if(!N)return null;const A=document.getElementById(N.listId),P=(0,z.SH)(p,f),H=(0,z.Xq)(t,g,v),L=(0,z.Jq)(t,g,v),G=(0,z.Jp)(N,t),F=(0,z.wE)(t,g,v),B=$>0,W=s.length>0,U=i()("graph-panel","react-virtualized-list","pad-for-horizontal-scrollbar",p===m.jZ?"z3":null,{"pad-for-vertical-scrollbar":B}),j=p===m.Wm?{...!P&&{position:"static"},...P&&{width:N.currentWidth>G?N.currentWidth:G,maxWidth:"none"}}:void 0,V=(e,i,s,l,f,y,w,C)=>a().createElement(Ge,{autoContainerWidth:!0,cellRangeRenderer:M,cellRenderer:i=>((e,i)=>{if(i.rowIndex>t-1)return H&&0===n?a().createElement(Qo,{currentCommits:t-1,customFooterRow:r,getExternalIcon:c,graphZoneType:p,hasMoreCommits:g,height:h,horizontalScrollHeight:b,isLoadingRows:v,key:d(i.rowIndex),scrollTop:I,style:i.style,translate:D}):void 0;const s={...i,style:{...i.style}};m.Gn===e&&(s.style.top=Number(i.style.top)-I);const l=o[e];return l?l(s):void 0})(e,i),className:s,columnCount:1,columnWidth:C,containerStyle:l,height:w,id:i,isScrolling:!1,key:i,onScrollToTargetCausedUpdate:T?e=>T(p,e,u,h,g):void 0,overscanRowCount:0,rowCount:L,rowHeight:m.$0,scrollLeft:k,scrollToAlignment:E,scrollTop:I,scrollToRow:O,style:f,tabIndex:null,width:y}),Z=V(N.type,N.listId,U,j,{position:"absolute"},N.currentWidth,h,G),q=Z&&a().createElement(a().Fragment,null,W&&P?a().createElement(qo,{branchUpstreamRowIndices:e,enabledScrollMarkerTypes:s,markerColors:y,markerRowIndices:w,scrollWidth:$,totalRows:L,viewportHeight:h<F?h:F,viewportWidth:N.currentWidth}):null,a().createElement(jo.Z,{contentHeight:F,contentWidth:G,displayHorizontalScrollbar:N.type===m.Wm,displayVerticalScrollbar:P,forceOnWheel:!P,forceVerticalScrollbar:P&&W,height:h,onScroll:e=>((e,t)=>{e.scrollTop>t&&A&&(0,z.BL)(A)||_(p,e,u,h,g)})(e,I),scrollLeft:k,scrollTop:I,width:N.currentWidth},Z)),K=P?a().createElement("div",{onWheelCapture:e=>((e,t)=>{let o=t+e.deltaY;o=o>=0?o:0,o>t&&A&&(0,z.BL)(A)||_(p,{clientHeight:F,clientWidth:G,scrollHeight:b,scrollLeft:0,scrollTop:o>=0?o:0,scrollWidth:$},u,h,g)})(e,I)},V(m.Gn,"timeline-column","graph-panel react-virtualized-list timeline-column",{overflow:"visible",zIndex:3,maxHeight:F},{position:"absolute",right:0,zIndex:3,maxHeight:h},1,h,1)):void 0,Y=a().createElement("div",{onMouseEnter:R},q,K);return P?Y:a().createElement(Uo,{enable:l,height:h,id:`${p}Column`,key:`${p}Column`,onResize:C?e=>C(N,e):void 0,onResizeEnd:x?e=>x(N,e):void 0,onResizeFromPropChange:S?e=>S(N,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z1",width:N.currentWidth,widthConstraints:(0,z.eR)(p,f,u)},Y)}var en=o(977),tn=o.n(en);const on="dnd-container";class nn extends a().PureComponent{dndDrake;childReactElementsById={};constructor(e){super(e),this.loadChildrenReactElements(this.props.children)}componentDidMount(){this.dndDrake&&this.dndDrake.on("drop",this.onDrop)}componentWillReceiveProps(e){this.props.children!==e.children&&this.loadChildrenReactElements(e.children)}componentWillUnmount(){this.dndDrake&&this.dndDrake.destroy()}onDrop=(e,t,o,n)=>{if(this.props.onDrop&&e.id){const t=this.sanitizeId(e.id),o=n?.id?this.sanitizeId(n.id):null,r=this.childReactElementsById[t],i=o?this.childReactElementsById[o]:null;r&&this.props.onDrop(r,i)}};isContainerCallback=e=>Boolean(e?.classList.contains(on));movesCallback=e=>Boolean(e?.id)&&this.isDraggable(e.id);acceptsCallback=(e,t,o,n)=>Boolean(e?.id)&&this.isDroppable(e.id,n?.id);invalidCallBack=()=>!1;dndDecorator=e=>{if(e){const t={isContainer:this.isContainerCallback,mirrorContainer:this.props.mirrorContainer,moves:this.movesCallback,accepts:this.acceptsCallback,invalid:this.invalidCallBack,direction:this.props.direction||"horizontal",copy:!1,copySortSource:!1,revertOnSpill:!1,removeOnSpill:!1,ignoreInputTextSelection:!0};this.dndDrake=tn()([e],t)}};loadChildrenReactElements(e){this.childReactElementsById={},e&&(e instanceof Array?e.forEach((e=>{a().isValidElement(e)&&this.addChildReactElement(e)})):a().isValidElement(e)&&this.addChildReactElement(e))}addChildReactElement(e){const t=e.props.id;t&&(this.childReactElementsById[this.sanitizeId(t)]=e)}sanitizeId(e){return e.trim().toLowerCase().replace(/-/g,"").replace(/_/g,"")}isDraggable(e){if(this.props.isDraggable){const t=this.sanitizeId(e),o=this.childReactElementsById[t];return Boolean(o)&&this.props.isDraggable(o)}return!1}isDroppable(e,t){if(this.props.isDroppable){const o=this.sanitizeId(e),n=t?this.sanitizeId(t):null,r=this.childReactElementsById[o],i=n?this.childReactElementsById[n]:null;if(r)return this.props.isDroppable(r,i)}return!1}render(){const{children:e,className:t}=this.props,o=i()(on,t);return a().createElement("div",{className:o,ref:this.dndDecorator},e)}}var rn=nn,sn=o(8613);function an(e,t){if(null==e)return{};var o,n,r={},i=sn(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}var ln=o(5627),cn=o(433);function dn(e,t){return dn=cn?cn.bind():function(e,t){return e.__proto__=t,e},dn(e,t)}function hn(e,t){e.prototype=ln(t.prototype),e.prototype.constructor=e,dn(e,t)}var un=o(6981);function pn(){return pn=un?un.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},pn.apply(this,arguments)}var fn,mn=o(5697),gn=o.n(mn),bn=o(2856),vn=o.n(bn),yn=o(8853),wn=o.n(yn),Cn=o(644),xn={in:gn().bool,mountOnEnter:gn().bool,unmountOnExit:gn().bool,appear:gn().bool,timeout:gn().number,onEnter:gn().func,onEntering:gn().func,onEntered:gn().func,onExit:gn().func,onExiting:gn().func,onExited:gn().func},Sn=((fn={})[Cn.d0]="in",fn[Cn.cn]="in",fn),_n=function(e){function t(){return e.apply(this,arguments)||this}return hn(t,e),t.prototype.render=function(){var e=this.props,t=e.className,o=e.children,n=an(e,["className","children"]);return a().createElement(Cn.ZP,n,(function(e,n){return a().cloneElement(o,pn({},n,{className:i()("fade",t,o.props.className,Sn[e])}))}))},t}(a().Component);_n.propTypes=xn,_n.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1};const Tn=_n;var Rn=pn({},vn().propTypes,{show:gn().bool,rootClose:gn().bool,onHide:gn().func,animation:gn().oneOfType([gn().bool,wn()]),onEnter:gn().func,onEntering:gn().func,onEntered:gn().func,onExit:gn().func,onExiting:gn().func,onExited:gn().func,placement:gn().oneOf(["top","right","bottom","left"])}),kn={animation:Tn,rootClose:!1,show:!1,placement:"right"},En=function(e){function t(){return e.apply(this,arguments)||this}return hn(t,e),t.prototype.render=function(){var e,t=this.props,o=t.animation,n=t.children,r=an(t,["animation","children"]),l=!0===o?Tn:o||null;return e=l?n:(0,s.cloneElement)(n,{className:i()(n.props.className,"in")}),a().createElement(vn(),pn({},r,{transition:l}),e)},t}(a().Component);En.propTypes=Rn,En.defaultProps=kn;const On=En;var In=o(5638),Mn=o.n(In),Dn=o(3562),$n=o.n(Dn),Nn=o(1143),An=o.n(Nn),Pn="large",zn="small",Hn={large:"lg",medium:"md",small:"sm",xsmall:"xs",lg:"lg",md:"md",sm:"sm",xs:"xs"};function Ln(e){return function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return"function"==typeof o[o.length-1]?e.apply(void 0,o):function(t){return e.apply(void 0,o.concat([t]))}}}function Gn(e,t){var o=(e.bsClass||"").trim();return null==o&&An()(!1),o+(t?"-"+t:"")}var Fn=Ln((function(e,t){var o=t.propTypes||(t.propTypes={}),n=t.defaultProps||(t.defaultProps={});return o.bsClass=gn().string,n.bsClass=e,t})),Bn=(Ln((function(e,t,o){"string"!=typeof t&&(o=t,t=void 0);var n=o.STYLES||[],r=o.propTypes||{};e.forEach((function(e){-1===n.indexOf(e)&&n.push(e)}));var i=gn().oneOf(n);return o.STYLES=n,i._values=n,o.propTypes=pn({},r,{bsStyle:i}),void 0!==t&&((o.defaultProps||(o.defaultProps={})).bsStyle=t),o})),Ln((function(e,t,o){"string"!=typeof t&&(o=t,t=void 0);var n=o.SIZES||[],r=o.propTypes||{};e.forEach((function(e){-1===n.indexOf(e)&&n.push(e)}));var i=[];n.forEach((function(e){var t=Hn[e];t&&t!==e&&i.push(t),i.push(e)}));var s=gn().oneOf(i);return s._values=i,o.SIZES=n,o.propTypes=pn({},r,{bsSize:s}),void 0!==t&&(o.defaultProps||(o.defaultProps={}),o.defaultProps.bsSize=t),o})));function Wn(e){var t,o=((t={})[Gn(e)]=!0,t);return e.bsSize&&(o[Gn(e,Hn[e.bsSize]||e.bsSize)]=!0),e.bsStyle&&(o[Gn(e,e.bsStyle)]=!0),o}function Un(e){return{bsClass:e.bsClass,bsSize:e.bsSize,bsStyle:e.bsStyle,bsRole:e.bsRole}}function jn(e){return"bsClass"===e||"bsSize"===e||"bsStyle"===e||"bsRole"===e}function Vn(e){var t={};return $n()(e).forEach((function(e){var o=e[0],n=e[1];jn(o)||(t[o]=n)})),[Un(e),t]}var Zn={id:Mn()(gn().oneOfType([gn().string,gn().number])),placement:gn().oneOf(["top","right","bottom","left"]),positionTop:gn().oneOfType([gn().number,gn().string]),positionLeft:gn().oneOfType([gn().number,gn().string]),arrowOffsetTop:gn().oneOfType([gn().number,gn().string]),arrowOffsetLeft:gn().oneOfType([gn().number,gn().string]),title:gn().node},qn=function(e){function t(){return e.apply(this,arguments)||this}return hn(t,e),t.prototype.render=function(){var e,t=this.props,o=t.placement,n=t.positionTop,r=t.positionLeft,s=t.arrowOffsetTop,l=t.arrowOffsetLeft,c=t.title,d=t.className,h=t.style,u=t.children,p=Vn(an(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","title","className","style","children"])),f=p[0],m=p[1],g=pn({},Wn(f),((e={})[o]=!0,e)),b=pn({display:"block",top:n,left:r},h),v={top:s,left:l};return a().createElement("div",pn({},m,{role:"tooltip",className:i()(d,g),style:b}),a().createElement("div",{className:"arrow",style:v}),c&&a().createElement("h3",{className:Gn(f,"title")},c),a().createElement("div",{className:Gn(f,"content")},u))},t}(a().Component);qn.propTypes=Zn,qn.defaultProps={placement:"right"};const Kn=Fn("popover",qn);function Yn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Xn=o(8149),Qn=o.n(Xn),Jn=o(1629),er=o.n(Jn);o(670);const tr=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)};function or(e,t){return Qn()(t)?t.indexOf(e)>=0:e===t}var nr=gn().oneOf(["click","hover","focus"]),rr=pn({},On.propTypes,{trigger:gn().oneOfType([nr,gn().arrayOf(nr)]),delay:gn().number,delayShow:gn().number,delayHide:gn().number,defaultOverlayShown:gn().bool,overlay:gn().node.isRequired,onBlur:gn().func,onClick:gn().func,onFocus:gn().func,onMouseOut:gn().func,onMouseOver:gn().func,target:gn().oneOf([null]),onHide:gn().oneOf([null]),show:gn().oneOf([null])}),ir=function(e){function t(t,o){var n;return(n=e.call(this,t,o)||this).handleToggle=n.handleToggle.bind(Yn(Yn(n))),n.handleDelayedShow=n.handleDelayedShow.bind(Yn(Yn(n))),n.handleDelayedHide=n.handleDelayedHide.bind(Yn(Yn(n))),n.handleHide=n.handleHide.bind(Yn(Yn(n))),n.handleMouseOver=function(e){return n.handleMouseOverOut(n.handleDelayedShow,e,"fromElement")},n.handleMouseOut=function(e){return n.handleMouseOverOut(n.handleDelayedHide,e,"toElement")},n._mountNode=null,n.state={show:t.defaultOverlayShown},n}hn(t,e);var o=t.prototype;return o.componentDidMount=function(){this._mountNode=document.createElement("div"),this.renderOverlay()},o.componentDidUpdate=function(){this.renderOverlay()},o.componentWillUnmount=function(){tt().unmountComponentAtNode(this._mountNode),this._mountNode=null,clearTimeout(this._hoverShowDelay),clearTimeout(this._hoverHideDelay)},o.handleDelayedHide=function(){var e=this;if(null!=this._hoverShowDelay)return clearTimeout(this._hoverShowDelay),void(this._hoverShowDelay=null);if(this.state.show&&null==this._hoverHideDelay){var t=null!=this.props.delayHide?this.props.delayHide:this.props.delay;t?this._hoverHideDelay=setTimeout((function(){e._hoverHideDelay=null,e.hide()}),t):this.hide()}},o.handleDelayedShow=function(){var e=this;if(null!=this._hoverHideDelay)return clearTimeout(this._hoverHideDelay),void(this._hoverHideDelay=null);if(!this.state.show&&null==this._hoverShowDelay){var t=null!=this.props.delayShow?this.props.delayShow:this.props.delay;t?this._hoverShowDelay=setTimeout((function(){e._hoverShowDelay=null,e.show()}),t):this.show()}},o.handleHide=function(){this.hide()},o.handleMouseOverOut=function(e,t,o){var n=t.currentTarget,r=t.relatedTarget||t.nativeEvent[o];r&&r===n||er()(n,r)||e(t)},o.handleToggle=function(){this.state.show?this.hide():this.show()},o.hide=function(){this.setState({show:!1})},o.makeOverlay=function(e,t){return a().createElement(On,pn({},t,{show:this.state.show,onHide:this.handleHide,target:this}),e)},o.show=function(){this.setState({show:!0})},o.renderOverlay=function(){tt().unstable_renderSubtreeIntoContainer(this,this._overlay,this._mountNode)},o.render=function(){var e=this.props,t=e.trigger,o=e.overlay,n=e.children,r=e.onBlur,i=e.onClick,l=e.onFocus,c=e.onMouseOut,d=e.onMouseOver,h=an(e,["trigger","overlay","children","onBlur","onClick","onFocus","onMouseOut","onMouseOver"]);delete h.delay,delete h.delayShow,delete h.delayHide,delete h.defaultOverlayShown;var u=a().Children.only(n),p=u.props,f={};return this.state.show&&(f["aria-describedby"]=o.props.id),f.onClick=tr(p.onClick,i),or("click",t)&&(f.onClick=tr(f.onClick,this.handleToggle)),or("hover",t)&&(f.onMouseOver=tr(p.onMouseOver,d,this.handleMouseOver),f.onMouseOut=tr(p.onMouseOut,c,this.handleMouseOut)),or("focus",t)&&(f.onFocus=tr(p.onFocus,l,this.handleDelayedShow),f.onBlur=tr(p.onBlur,r,this.handleDelayedHide)),this._overlay=this.makeOverlay(o,h),(0,s.cloneElement)(u,f)},t}(a().Component);ir.propTypes=rr,ir.defaultProps={defaultOverlayShown:!1,trigger:["hover","focus"]};const sr=ir;var ar={id:Mn()(gn().oneOfType([gn().string,gn().number])),placement:gn().oneOf(["top","right","bottom","left"]),positionTop:gn().oneOfType([gn().number,gn().string]),positionLeft:gn().oneOfType([gn().number,gn().string]),arrowOffsetTop:gn().oneOfType([gn().number,gn().string]),arrowOffsetLeft:gn().oneOfType([gn().number,gn().string])},lr=function(e){function t(){return e.apply(this,arguments)||this}return hn(t,e),t.prototype.render=function(){var e,t=this.props,o=t.placement,n=t.positionTop,r=t.positionLeft,s=t.arrowOffsetTop,l=t.arrowOffsetLeft,c=t.className,d=t.style,h=t.children,u=Vn(an(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","className","style","children"])),p=u[0],f=u[1],m=pn({},Wn(p),((e={})[o]=!0,e)),g=pn({top:n,left:r},d),b={top:s,left:l};return a().createElement("div",pn({},f,{role:"tooltip",className:i()(c,m),style:g}),a().createElement("div",{className:Gn(p,"arrow"),style:b}),a().createElement("div",{className:Gn(p,"inner")},h))},t}(a().Component);lr.propTypes=ar,lr.defaultProps={placement:"right"};const cr=Fn("tooltip",lr),dr={},hr=document.createElement("canvas");hr.id="gk-graph-avatar-canvas";class ur extends a().Component{image;constructor(e){super(e),this.image=new Image,this.image.crossOrigin="anonymous",this.image.onload=()=>this.refreshImage(),this.state={dataURL:void 0}}componentDidMount(){const{url:e}=this.props;e&&this.startImgLoading(e)}componentDidUpdate(e){const{url:t}=this.props;t&&e.url!==t&&this.startImgLoading(t)}componentWillUnmount(){this.image=void 0}refreshImage(){if(!this.image)return;let e;if(this.image.complete){const t=this.image.height,o=this.image.width,n=hr.getContext("2d");n.canvas.width=o,n.canvas.height=t,n.drawImage(this.image,0,0,o,t),e=hr.toDataURL(),dr[this.image.src]=e}this.setState({dataURL:e})}startImgLoading(e){if(!this.image)return;const t=dr[e];t?this.setState({dataURL:t}):this.image.src=e}render(){const{avatarClassName:e,avatarStyle:t,children:o,className:n,context:r,style:s,height:l,hint:c,size:d,width:h}=this.props,{dataURL:u}=this.state,p=!u,f=p?s:{...s,...t,background:`url(${u}) 0% 0% / ${d}px no-repeat`,height:l||d,width:h||d},m=i()(n,p?"":e,!p&&{avatar:!0}),g=p?a().createElement(a().Fragment,null,o):void 0;return a().createElement("div",{className:m,"data-test-class":"avatar","data-vscode-context":(0,z.q3)(r),style:f,title:c},g)}}var pr=ur;const fr=(e,t,o)=>a().createElement("span",{className:"ref-avatar"},a().createElement(pr,{avatarClassName:"mr1",context:o,size:14,url:e},t));function mr({icon:e,tooltipClassName:t="",tooltipId:o,tooltipText:n}){return n&&o?a().createElement(sr,{delayShow:400,overlay:a().createElement(cr,{className:i()("gk-graph","bs-tooltip",t),id:o},n),placement:"top",trigger:["hover","focus"]},e):a().createElement(a().Fragment,null," ",e," ")}function gr({id:e,toolTipText:t,getExternalIcon:o,issueTrackerType:n}){return a().createElement(mr,{icon:o(`issue-${n}`),tooltipClassName:"wide pull-left",tooltipId:`issue-tooltip-${e}`,tooltipText:t?t.trim():""})}function br({hostingServiceType:e,icon:t,id:o,toolTipText:n}){return a().createElement(mr,{icon:t,tooltipClassName:"wide pull-left",tooltipId:`pr-tooltip-${e}-${o}`,tooltipText:n?n.trim():""})}function vr({icon:e,type:t,upstream:o,tooltipText:n}){return a().createElement(mr,{icon:e,tooltipClassName:"wide pull-left",tooltipId:`upstream-indicator-tooltip-${t}-${o}`,tooltipText:n})}function yr({avatarUrl:e,context:t,icon:o,tooltipText:n}){return a().createElement(mr,{icon:fr(e,o,t),tooltipId:`remote-icon-${n||"tooltipText"}`,tooltipText:n})}var wr=o(9453),Cr=o(7334),xr=o(9915),Sr=function({name:e}){return a().createElement("span",{className:"ref-name truncate",style:{height:m.pj}},e)};function _r(e,t,o,n=0){const{annotated:r,refType:s,message:l,name:c}=t;let d,h,u;switch(s){case G.V.REMOTE:{const e=t;h=function(e){return e.hostingServiceType?`${G.V.REMOTE}-${e.hostingServiceType}`:G.V.REMOTE}(e),d=e.avatarUrl;const n=`${c} (${o("Ref-Remote")})`;u=e.owner?`${e.owner} -> ${n}`:n;break}case G.V.TAG:h=G.V.TAG,u=`${r&&l?l:c} (${o("Ref-Tag")})`;break;case G.V.HEAD:default:h=G.V.HEAD,u=`${c} (${o("Ref-Local")})`}const p=t.context||void 0,f=a().createElement("span",{className:i()("mr1"),"data-vscode-context":(0,z.q3)(p)},e(h));return a().createElement(yr,{avatarUrl:d||"",context:p,icon:f,key:`ref-icon-${n}-${s}-${c}`,tooltipText:u})}class Tr extends a().PureComponent{getContextForRefGroupIfExists(e,t,o){let n,r=!1,i=!1,s=!1;for(const a of e){if(a.refType===G.V.HEAD)return o?a.contextGroup||t:a.context;a.refType===G.V.REMOTE&&("origin"===a.owner?(r=!0,n=o?a.contextGroup||t:a.context):r||"upstream"!==a.owner?r||i||(s=!0,n=o?a.contextGroup||t:a.context):(i=!0,n=o?a.contextGroup||t:a.context)),r||i||s||(n=o?a.contextGroup||t:a.context)}return n}getDecoratedRefIcon(e,t,o,n,r){return a().createElement("div",{className:r,"data-vscode-context":(0,z.q3)(n),key:e,onClick:e=>this.onClickMetadata(e,o),onDoubleClick:e=>this.onDoubleClickMetadata(e,o)},t)}getPullRequestIconsAndTooltipsForRef(e,t,o){const{getExternalIcon:n,onMissingRefMetadata:r,translate:s}=this.props;let l;if(l=t.refType===G.V.HEAD?t.upstream?e?.[t.upstream.id]?.[wr.mQ]:null:(0,z.uV)(t,e,r,wr.mQ),!l||0===l.length)return null;const c=l,d=[];for(const e of c){const{context:r,hostingServiceType:l,id:c,title:h}=e;if(o.has(c))continue;o.add(c);const u={refId:t.id,type:wr.mQ,data:e},p=`pr-icon-${t.refType}-${t.name}-${c}`,f=this.getDecoratedRefIcon(p,n("pull-request"),u,r,i()("mr1","ref-pull-request"));d.push(a().createElement(br,{hostingServiceType:l,icon:f,id:c,key:p,toolTipText:h&&""!==h.trim()?s("PullRequestIcon-Tooltip",c,h,(0,Cr.y)(l)):""}))}return d}getUpstreamIndicatorIconsAndTooltipsForRef(e,t){const{getExternalIcon:o,onMissingRefMetadata:n,translate:r}=this.props,i=(0,z.uV)(t,e,n,wr.uq);if(!i||0===i.ahead&&0===i.behind)return null;const s=i,l={refId:t.id,type:wr.uq,data:s},c=s.ahead>0,d=s.behind>0,h=s.context;if(c||d){const e=c?`${s.ahead>99?"99+":s.ahead}`:"",n=d?`${s.behind>99?"99+":s.behind}`:"",i=`${s.owner}/${s.name}`;let u,p;d&&c?(u=r("UpstreamIndicatorIcon-BehindAndAheadTooltip",n,e,i),p="ahead-behind"):d?(u=r("UpstreamIndicatorIcon-BehindTooltip",n,i),p="behind"):c&&(u=r("UpstreamIndicatorIcon-AheadTooltip",e,i),p="ahead");const f=a().createElement(a().Fragment,null,d?a().createElement(a().Fragment,null,a().createElement("span",{className:"ref-upstream-behind"},n),o("upstream-behind")):null,c?a().createElement(a().Fragment,null,a().createElement("span",{className:"ref-upstream-ahead"},e),o("upstream-ahead")):null);return a().createElement(vr,{icon:this.getDecoratedRefIcon(`ref-upstream-${t.id}`,f,l,h,"ref-upstream"),tooltipText:u,type:p,upstream:i})}return null}getIssueIconsAndTooltipsForRef(e,t,o){const{getExternalIcon:n,onMissingRefMetadata:r,translate:s}=this.props,l=(0,z.uV)(t,e,r,wr.$M);if(!l||0===l.length)return null;const c=l,d=[];for(const e of c){if(o.has(e.id))continue;const r={refId:t.id,type:wr.$M,data:e};o.add(e.id);const l=a().createElement(gr,{getExternalIcon:n,id:e.id,issueTrackerType:e.issueTrackerType,key:`issue-icon-${e.id}`,toolTipText:e.title&&""!==e.title.trim()?s("IssueIcon-Tooltip",e.displayId,e.title):""}),c=t.context||void 0;d.push(this.getDecoratedRefIcon(`ref-issue-${e.id}`,l,r,c,i()("mr1","ref-issue")))}return d}onContextMenu=e=>{const{onContextMenu:t,refGroup:o,sha:n}=this.props;t(e,o,n)};onClick=e=>{const{onClick:t,refGroup:o,sha:n}=this.props;t(e,o,n)};onClickMetadata=(e,t)=>{e.stopPropagation();const{onClick:o,refGroup:n,sha:r}=this.props;o(e,n,r,t)};onDoubleClick=e=>{const{onDoubleClick:t,refGroup:o,sha:n}=this.props;t(e,o,n)};onDoubleClickMetadata=(e,t)=>{e.stopPropagation();const{onDoubleClick:o,refGroup:n,sha:r}=this.props;o(e,n,r,t)};render(){const{enableShowHideRefsOptions:e,hasActive:t,hasRefs:o,isActive:n,isGhostRef:r,getExternalIcon:s,groupIsHovered:l,isInUnsupportedRebase:c,onRefBeginDrag:d,onRefDragEnter:h,onRefDragLeave:u,onRefDrop:p,onRefCanDrag:f,onRefCanDrop:g,onRefEndDrag:b,isRefGroupIncluded:v,refGroup:y,refGroupContext:w,refMetadata:C,onHovered:x,onHideRefClick:S,sha:_,showRemoteNamesOnRefs:T,enabledRefMetadataTypes:R,translate:k,type:E}=this.props,O=i()("ref-node-wrapper","flex"),I={minWidth:0,marginLeft:3,height:m.cZ},M=i()("ref-node","flex","items-center","p1",{"has-active":t,"dim-ref":!o&&l,"is-active":n});let D="";y.length>0&&(D=T&&y[0].fullName||y[0].name);const $=a().createElement(Sr,{name:D}),N=[],A=[],P=[];let H=null;const L=new Set,F=new Set;y.forEach(((e,t)=>{if(N.push(_r(s,e,k,t)),R.includes(wr.$M)&&(e.refType===G.V.HEAD||e.refType===G.V.REMOTE)){const t=this.getIssueIconsAndTooltipsForRef(C,e,F);t&&P.push(...t)}if(R.includes(wr.mQ)&&e.refType===G.V.REMOTE){const t=this.getPullRequestIconsAndTooltipsForRef(C,e,L);t&&A.push(...t)}R.includes(wr.uq)&&e.refType===G.V.HEAD&&(H=this.getUpstreamIndicatorIconsAndTooltipsForRef(C,e))}));const B=[...N,...A,...P],W=n?a().createElement(mr,{icon:a().createElement("span",{className:i()("mr1")},s("check")),tooltipId:"ref-icon-current",tooltipText:k("Ref-Current")}):null,U=this.getContextForRefGroupIfExists(y,w),j=this.getContextForRefGroupIfExists(y,w,!0),V=e&&!t&&l&&!v?a().createElement(mr,{icon:a().createElement("span",{className:i()("mr1","button"),onClick:e=>S(e,y,_)},s("hide")),tooltipId:`ref-node-toggle-visibility-btn-${D}`,tooltipText:k("Hide")}):null,Z={commitType:E,isGhostRef:r,isInUnsupportedRebase:c,refGroup:y,sha:_};return a().createElement(xr.Z,{canDrag:e=>f(e),canDrop:(e,t,o)=>g(e,t,o),className:O,"data-vscode-context":(0,z.q3)(j),dndData:Z,dndId:`DndRefNode_${y[0].id}`,onBeginDrag:(e,t)=>d(e,t),onDragEnter:(e,t,o)=>h(e,t,o),onDragLeave:(e,t,o)=>u(e,t,o),onDrop:(e,t,o)=>p(e,t,o),onEndDrag:(e,t,o)=>b(e,t,o),style:I},a().createElement("span",{className:M,"data-test-class":"ref-node-span","data-vscode-context":(0,z.q3)(U),onContextMenu:c?void 0:this.onContextMenu,onDoubleClick:c?void 0:this.onDoubleClick,onMouseDown:this.onClick,onMouseEnter:e=>x(e,y,_),style:{minWidth:"100%"}},W,a().createElement("span",{className:"flex items-center"},B),$,H,a().createElement("span",{className:"flex ml-auto"},V)))}}class Rr extends a().Component{headIconsRef=a().createRef();constructor(e){super(e),this.state={showPopoverMenu:!1,refPopoverMenuTarget:void 0}}onHiddenRefsClick=e=>{const{showPopoverMenu:t}=this.state;this.setState({showPopoverMenu:!t,refPopoverMenuTarget:t?e.target:void 0})};onShowRefNodes=(e,t,o)=>{this.props.onToggleRefNodesShown(e,t,o),0===Object.keys(this.props.excludeRefsById).length&&this.onHiddenRefsClick(e)};compareGraphRefOpts(e,t){const o=e.name.localeCompare(t.name);return 0===o&&e.type===G.V.REMOTE?-1:o}render(){const{columnSetting:e,enableResizer:t,enableShowHideRefsOptions:o,getExternalIcon:n,graphWidth:r,graphZones:s,graphZoneType:l,excludeRefsById:c,includeOnlyRefsById:d,isDraggable:h,onFilterColumnClick:u,onHover:p,onResize:f,onResizeEnd:g,onResizeFromPropChange:b,onResizeStart:v,onUnhover:y,onSettingsClick:w,rowsStatsLoading:C,settingsContext:x,showRemoteNamesOnRefs:S,translate:_}=this.props,{showPopoverMenu:T,refPopoverMenuTarget:R}=this.state,k=(0,z.zv)(l,s);if(!k)return null;const E=(0,z.SH)(l,s),O=k.currentWidth-m.b4,I=`${l}-header`,M=k.currentWidth<=k.showIconWidth,D=e?.isFilterable||!1,$=M&&(D||o),N=i()("columns-btn",{"small-btn":$});let A=null,P=null;if(l===m.jZ){const e=Object.entries(c),t=Object.values(d),r=t.length>0,s=r&&t.some((e=>e.type===G.V.TAG)),l=e.filter((e=>e[1].type===G.V.TAG&&(!r||!s)||!d[e[0]]));l.length>0&&(P=l.sort(((e,t)=>this.compareGraphRefOpts(e[1],t[1]))).map(((e,t)=>{const o=e[0],r=e[1];c[o].id=o;const i={name:r.name,refType:r.type,owner:r.owner,avatarUrl:r.avatarUrl},s=!S&&"*"!==i.name||i.refType!==G.V.REMOTE?i.name:`${i.owner}/${i.name}`;return a().createElement("li",{id:o,key:o,onClick:e=>this.onShowRefNodes(e,[c[o]],!0)},_r(n,i,_,t),a().createElement("span",{className:"text-ellipsis"},s))})),A=o?a().createElement("div",{className:i()(N,"right","text-normal","button",T?"active":null)},a().createElement(mr,{icon:a().createElement("span",{onClick:this.onHiddenRefsClick},n("hide")),tooltipId:"header-ref-node-hidden-refs-btn",tooltipText:_("GraphHeader-HiddenRefs-btn")})):null)}const H=D?a().createElement("div",{className:i()(N,"columns-filter","right","fs-1",{filtering:e?.isFilterActive||!1})},a().createElement(mr,{icon:a().createElement("span",{className:"columns-filter-icon text-disabled hover-icon",id:`${l}-header-filter`,onClick:e=>u(e,l),style:{height:m.ze,marginBottom:m.wi}},n("filter")),tooltipId:"header-columns-filter",tooltipText:_("GraphHeader-Filter")})):null,L=!M&&l===m.WD&&C?a().createElement("span",{className:i()(N,"spinner")},n("loading")):null,F=a().createElement(On,{container:this,onHide:T?this.onHiddenRefsClick:void 0,placement:T?"bottom":void 0,rootClose:T,show:T,target:R},a().createElement(Kn,{className:i()({"is-last-header":E}),id:"opts-popover",style:{display:T?"block":"none"}},a().createElement("ul",null,P))),B=E&&w?a().createElement("div",{className:i()("columns-btn","columns-settings","right","fs-1"),"data-vscode-context":(0,z.q3)(x)},a().createElement(mr,{icon:a().createElement("span",{className:"columns-settings-icon text-disabled hover-icon",onClick:e=>w(e,r)},n("settings")),tooltipId:"header-columns-settings",tooltipText:_("GraphHeader-EditColumns")})):null,W=this.headIconsRef?.current?.clientWidth&&parseInt(this.headIconsRef.current.clientWidth,10)||0,U=a().createElement("div",{className:"header-columns-icons",ref:this.headIconsRef},B,L,H,A),j=M?a().createElement(a().Fragment,null,a().createElement("div",{className:i()(N,"justify-start",{ml1:!$}),style:{width:O-W},title:_(k.headerLabelUntranslated)},n((0,z.sH)(l))),U):a().createElement(a().Fragment,null,a().createElement("div",{className:"text-disabled text-ellipsis",style:{height:m.ze,overflow:"hidden",width:O-W}},a().createElement("span",{className:"fs-1 ml1 font-monospace"},_(k.headerLabelUntranslated))),U),V=a().createElement("div",{onMouseEnter:p,onMouseLeave:y},F,j),Z=i()("panel-bg0","graph-header",{"is-draggable":h,"is-last-header":E});return E?a().createElement("div",{className:Z,id:I,key:I,style:{minWidth:O,transform:"translate3d(0, 0, 0)",zIndex:2}},V):a().createElement("div",{className:Z,id:I,key:I,style:{display:"flex",minWidth:k.currentWidth,transform:"translate3d(0, 0, 0)",width:k.currentWidth,zIndex:2}},a().createElement(Uo,{className:Z,enable:t,handleStyles:{right:{right:0}},height:m.ze,onResize:f?e=>f(k,e):void 0,onResizeEnd:g?e=>g(k,e):void 0,onResizeFromPropChange:b?e=>b(k,e):void 0,onResizeStart:v?e=>v(k,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z2 border-right",style:{display:"flex"},translate:_,width:k.currentWidth,widthConstraints:(0,z.eR)(l,s,r)},V))}}const kr=Rr;class Er extends a().PureComponent{canDrag=!1;isDraggable=e=>this.canDrag&&e.props.isDraggable;isDroppable=(e,t)=>e.props.graphZoneType!==t?.props?.graphZoneType&&(!t||t.props.isDroppable);onDrop=(e,t)=>{this.props.onColumnReOrdered&&this.props.onColumnReOrdered(e.props.graphZoneType,t?t.props.graphZoneType:null)};onZoneHover=()=>{this.canDrag=!0};onZoneUnHover=()=>{this.canDrag=!1};render(){const{columnsSettings:e,dragAppendToContainer:t,enableResizer:o,enableShowHideRefsOptions:n,getExternalIcon:r,excludeRefsById:i,headerContext:s,includeOnlyRefsById:l,onFilterColumnClick:c,onPopupGraphHeaderContextMenu:d,onGraphZoneResize:h,onGraphZoneResizeEnd:u,onGraphZoneResizeFromPropChange:p,onSettingsClick:f,onToggleRefNodesShown:g,graphZones:b,repoPath:v,rowsStatsLoading:y,showRemoteNamesOnRefs:w,translate:C,width:x,height:S,settingsContext:_}=this.props,T=a().createElement("div",{className:"panel-bg0",style:{height:m.ze,marginBottom:m.wi,marginLeft:-m.mu,minWidth:m.mu+m.b4}});return a().createElement("div",{className:"graph-header flex","data-vscode-context":(0,z.q3)(s),onContextMenu:d?e=>d(e,x):void 0,style:{height:m.ze,marginBottom:m.wi}},T,a().createElement(rn,{className:"flex",direction:"horizontal",isDraggable:this.isDraggable,isDroppable:this.isDroppable,mirrorContainer:t,onDrop:this.onDrop},b.map((t=>a().createElement(kr,{columnSetting:e[t.type],enableResizer:o,enableShowHideRefsOptions:n,excludeRefsById:i,getExternalIcon:r,graphHeight:S,graphWidth:x,graphZones:b,graphZoneType:t.type,id:`${t.type}Header`,includeOnlyRefsById:l,isDraggable:t.isCustomizable,isDroppable:t.isCustomizable,key:`${t.type}Header`,onFilterColumnClick:c,onHover:this.onZoneHover,onResize:h,onResizeEnd:u,onResizeFromPropChange:p,onSettingsClick:f,onToggleRefNodesShown:g,onUnhover:this.onZoneUnHover,repoPath:v,rowsStatsLoading:y,settingsContext:_,showRemoteNamesOnRefs:w,translate:C})))))}}var Or=Er;function Ir(e){const{constraints:{max:t,min:o},stats:{files:n,additions:r,deletions:s},getExternalIcon:l,isLastColumn:c,isRowSelected:d,verticalScrollWidth:h,zoneWidth:u}=e,p=r+s,f=Math.max(o,Math.min(t,p));let g=c?h+m.SZ:m.SZ;p<=f&&(g+=m.SZ);const b=Math.max(m.QW,f/t*(u-52-g)),v=r/p*b,y=s/p*b;return a().createElement("div",{className:i()("changes-zone",d?"selected":null)},a().createElement("span",{className:"changes-files",style:{width:52}},a().createElement("span",{className:"mr1"},l("files")),a().createElement("span",{className:"mr1"},n>999?"999+":n)),a().createElement("span",{className:"changes-bar",style:{width:b}},r?a().createElement("div",{className:"changes-sub-bar added",style:{width:v}}):null,s?a().createElement("div",{className:"changes-sub-bar deleted",style:{width:y}}):null))}const Mr=i()("absolute","top-0","right-0","bottom-0","left-0","time-line"),Dr=i()(Mr,"z2");var $r=function({z2:e}){return a().createElement("div",{className:e?Dr:Mr,style:{height:2}})};const Nr=a().createElement("div",{className:"color-strip height-100",style:{width:2}}),Ar={},Pr={};class zr extends a().PureComponent{render(){const{clearCurrentlyHoveredGraphCommit:e,children:t,column:o,context:n,currentlyHoveredCommitSha:r,dimRowsOfSelectedCommit:s,getExternalIcon:l,graphZoneType:c,hasAvatars:d,highlightRowsOnRefHover:h,isDimmedMergeCommitRow:u,isHighlighted:p,isHovering:f,isLastColumn:g,isInUnsupportedRebase:b,isMissingHoveredRefGroup:v,isSelected:y,numGraphColumns:w,onContextMenu:C,onClickCommit:x,onDoubleClickCommit:S,rowContext:_,sha:T,showColorStrip:R,showConflictIcon:k,showTimeline:E,setAsCurrentlyHoveredGraphCommit:O,style:I,title:M,type:D,verticalScrollWidth:$,zoneWidth:N}=this.props,A=function(e,t){const o=e+t.toString();let n=Ar[o];return n||(n=i()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative",e,{"is-hovering":t}),Ar[o]=n,n)}(D,f),P=function(e,t,o,n,r,s=!1,a=!1,l=!1,c=!1){const d=`${e}${t}${n}${o}${s}${a}${l}${c}${r}`;let h=Pr[d];return h||(h=i()("column-"+(t%r+1),"graph-row","height-100-percent","flex",e,{"is-selected":n},{"is-highlighted":o},{"dimmed-row":c&&!o||s&&(a||l)}),Pr[d]=h,h)}(D,o,p,y,w,v,h,s,u),H=E?a().createElement($r,null):null;return a().createElement("div",{className:A,"data-vscode-context":(0,z.q3)(_),onContextMenu:b?void 0:e=>C(e,c,T),onDoubleClick:e=>S(e,c,T),onMouseDown:e=>x(e,c,T),onMouseEnter:e=>O(e,c,T,r),onMouseLeave:t=>e(t,c,T,r),style:I},H,a().createElement("div",{className:P,"data-vscode-context":(0,z.q3)(n)},R?Nr:null,k?a().createElement("span",{className:i()("ml2")},l("warning")):null,a().createElement("span",{className:i()("graph-zone","width-100","flex-1"),style:{lineHeight:`${m.cZ}px`,...g&&{width:N-$},...d&&{marginLeft:5}},title:M},t)))}}var Hr=(e,t)=>{const{processedRows:o,rowStatsConstraints:n,getExternalIcon:r,highlightRowsOnRefHover:i,isInUnsupportedRebase:s,numGraphColumns:l,clearCurrentlyHoveredGraphCommit:c,currentlyHoveredCommitSha:d,dimMergeCommits:h,dimRowsOfSelectedCommit:u,onCommitContextMenu:p,onClickCommit:g,onDoubleClickCommit:b,rowsStats:v,setAsCurrentlyHoveredGraphCommit:y}=e,w=new z.Dj(e);return({rowIndex:e,style:C})=>{const x=t(e),S=o[e],{sha:_,type:T,contexts:R}=S,k=R?.stats||void 0,E=R?.row||void 0,O=v?.[_];let I=[O?.files?`${O.files} files changed`:"",O?.additions?`${O.additions} lines added`:"",O?.deletions?`${O.deletions} lines deleted`:""].filter(Boolean).join(", ");I=T!==f.ch?I:"";const M=m.WD,D=w.isColumnFollowingGraphColumn(M),$=w.isLastColumn(M),N=w.getZoneWidth(M),A=w.getVerticalScrollWidth(M);return a().createElement(zr,{clearCurrentlyHoveredGraphCommit:c,column:S.column,context:k,currentlyHoveredCommitSha:d,dimRowsOfSelectedCommit:u,getExternalIcon:r,graphZoneType:M,highlightRowsOnRefHover:i,isDimmedMergeCommitRow:T===f.lH&&h,isHighlighted:w.isHighlighted(e),isHovering:w.isHovering(e),isInUnsupportedRebase:s,isLastColumn:$,isMissingHoveredRefGroup:w.isMissingHoveredRefGroup(e),isSelected:w.isSelected(e),key:x,numGraphColumns:l,onClickCommit:g,onContextMenu:p,onDoubleClickCommit:b,rowContext:E,setAsCurrentlyHoveredGraphCommit:y,sha:_,showColorStrip:D,showTimeline:w.hasTimeline(e),style:C,title:I,type:T,verticalScrollWidth:A,zoneWidth:N},O&&T!==f.ch?a().createElement(Ir,{constraints:n,getExternalIcon:r,isLastColumn:$,isRowSelected:w.isSelected(e),stats:O,verticalScrollWidth:A,zoneWidth:N}):null)}};function Lr(e){const t=(e||"").trim().toUpperCase();if(0===t.length)return"?";const o=t.split(" ");return 1===o.length?o[0][0]:o.length>1?o[0][0]+o[o.length-1][0]:"?"}function Gr(e,t){return e&&t?`${e} <${t}>`:e||t||""}class Fr extends a().Component{overlayTriggerRef;constructor(e){super(e),this.state={tooltipText:""}}componentDidUpdate(e,t){this.overlayTriggerRef&&this.state.tooltipText!==t.tooltipText&&this.overlayTriggerRef.show()}getDefaultAvatar=(e,t,o)=>{const{authorInitials:n,column:r,context:i,cssVariables:s,style:l,fontSize:c,minWidth:d,size:h,title:u=""}=this.props,f=void 0!==r&&s[(0,x.a2)(r)]||m.iq,g=p(f.trim()),b={alignItems:"center",backgroundColor:f,backgroundSize:h,color:g,display:"flex",fontSize:`${c}px`,fontWeight:"bold",height:e,justifyContent:"center",minWidth:d,top:o,width:t,...l};return a().createElement("div",{className:this.getAvatarClassName(),"data-vscode-context":(0,z.q3)(i),style:b,title:u},n?n.toUpperCase():"")};ensureTooltipText=()=>{const{tooltip:e}=this.props;this.setState({tooltipText:"function"==typeof e?e():e})};setOverlayTriggerRef=e=>{this.overlayTriggerRef=e};getAvatarClassName(){return i()("avatar","gravatar","rad2",this.props.className)}render(){const{tooltipText:e}=this.state,{avatarUrl:t,context:o,style:n,height:r,minWidth:i,size:s,title:l="",tooltip:c,top:d,useAuthorInitialsForAvatars:h,width:u}=this.props,p=r||s,f=u||s,g=d||m.P3/2-p/2,b={top:g,minWidth:i,...n},v=this.getDefaultAvatar(p,f,g),y=h?v:a().createElement("span",null,a().createElement(pr,{avatarClassName:this.getAvatarClassName(),avatarStyle:b,context:o,height:p,hint:l,size:s,url:t,width:f},this.getDefaultAvatar(p,f,g)));return c?a().createElement(sr,{delayShow:250,key:e,onEnter:this.ensureTooltipText,overlay:a().createElement(cr,{className:"gk-graph",id:"graph-gravatar-tooltip"},e),placement:"top",ref:this.setOverlayTriggerRef,trigger:["hover","focus"]},y):y}}var Br=(e,t)=>{const{avatarUrlByEmail:o,clearCurrentlyHoveredGraphCommit:n,cssVariables:r,currentlyHoveredCommitSha:s,dimMergeCommits:l,dimRowsOfSelectedCommit:c,getExternalIcon:d,highlightRowsOnRefHover:h,processedRows:u,isInUnsupportedRebase:p,onCommitContextMenu:g,onClickCommit:b,onDoubleClickCommit:y,numGraphColumns:C,setAsCurrentlyHoveredGraphCommit:x,useAuthorInitialsForAvatars:S}=e,_=new z.Dj(e);return({rowIndex:e,style:T})=>{const R=t(e),k=u[e],{author:E,email:O,message:I,sha:M,type:D,contexts:$}=k,N=m.GF,A=_.getActiveGraphZone(N);let P=D!==f.ch?E:void 0;const z=D!==f.ch?Gr(E,O):void 0,H=$?.author||void 0,L=$?.row||void 0,G=_.isColumnFollowingGraphColumn(N),F=_.isLastColumn(N),B=_.getZoneWidth(N),W=(B<=A.minimumWidth||A?.mode===m.Um.Rich)&&D!==f.ch;if(W){const e=()=>{const e=E&&""!==E.trim()&&"Unknown"!==E?Gr(E,O):O,t=w(v(I||""));let o="";if(0===t.length)o=e;else{t.unshift({email:O,name:E});for(let e=0;e<t.length;e+=1){const n=t[e];o+=Gr(n.name,n.email),e<t.length-1&&(o+=", ")}}return o},t=S?void 0:o[O];P=a().createElement(Fr,{authorInitials:Lr(E),avatarUrl:t,className:i()("node",`${f.o$}`,"z6"),column:k.column,context:$?.avatar||void 0,cssVariables:r,fontSize:10,height:m.LG,size:m.Y8,tooltip:e,useAuthorInitialsForAvatars:S,width:m.LG})}return a().createElement(zr,{clearCurrentlyHoveredGraphCommit:n,column:k.column,context:H,currentlyHoveredCommitSha:s,dimRowsOfSelectedCommit:c,getExternalIcon:d,graphZoneType:N,hasAvatars:W,highlightRowsOnRefHover:h,isDimmedMergeCommitRow:D===f.lH&&l,isHighlighted:_.isHighlighted(e),isHovering:_.isHovering(e),isInUnsupportedRebase:p,isLastColumn:F,isMissingHoveredRefGroup:_.isMissingHoveredRefGroup(e),isSelected:_.isSelected(e),key:R,numGraphColumns:C,onClickCommit:b,onContextMenu:g,onDoubleClickCommit:y,rowContext:L,setAsCurrentlyHoveredGraphCommit:x,sha:M,showColorStrip:G,showTimeline:_.hasTimeline(e),style:T,title:z,type:D,verticalScrollWidth:_.getVerticalScrollWidth(N),zoneWidth:B},P)}},Wr=(e,t)=>{const{processedRows:o,getExternalIcon:n,highlightRowsOnRefHover:r,isInUnsupportedRebase:i,numGraphColumns:s,formatCommitDateTime:l,clearCurrentlyHoveredGraphCommit:c,dimMergeCommits:d,dimRowsOfSelectedCommit:h,currentlyHoveredCommitSha:u,onCommitContextMenu:p,onClickCommit:g,onDoubleClickCommit:b,setAsCurrentlyHoveredGraphCommit:v}=e,y=new z.Dj(e);return({rowIndex:e,style:w})=>{const C=t(e),x=o[e],{date:S,sha:_,type:T,contexts:R}=x,k=S&&T!==f.ch?l(S,f.Gu.RowEntry):void 0,E=S&&T!==f.ch?l(S,f.Gu.Tooltip):void 0,O=R?.date||void 0,I=R?.row||void 0,M=m.PL,D=y.isColumnFollowingGraphColumn(M),$=y.isLastColumn(M),N=y.getZoneWidth(M),A=y.getVerticalScrollWidth(M);return a().createElement(zr,{clearCurrentlyHoveredGraphCommit:c,column:x.column,context:O,currentlyHoveredCommitSha:u,dimRowsOfSelectedCommit:h,getExternalIcon:n,graphZoneType:M,highlightRowsOnRefHover:r,isDimmedMergeCommitRow:T===f.lH&&d,isHighlighted:y.isHighlighted(e),isHovering:y.isHovering(e),isInUnsupportedRebase:i,isLastColumn:$,isMissingHoveredRefGroup:y.isMissingHoveredRefGroup(e),isSelected:y.isSelected(e),key:C,numGraphColumns:s,onClickCommit:g,onContextMenu:p,onDoubleClickCommit:b,rowContext:I,setAsCurrentlyHoveredGraphCommit:v,sha:_,showColorStrip:D,showTimeline:!1,style:w,title:E,type:T,verticalScrollWidth:A,zoneWidth:N},k)}},Ur={glyph:gn().string.isRequired},jr=function(e){function t(){return e.apply(this,arguments)||this}return hn(t,e),t.prototype.render=function(){var e,t=this.props,o=t.glyph,n=t.className,r=Vn(an(t,["glyph","className"])),s=r[0],l=r[1],c=pn({},Wn(s),((e={})[Gn(s,o)]=!0,e));return a().createElement("span",pn({},l,{className:i()(n,c)}))},t}(a().Component);jr.propTypes=Ur;const Vr=Fn("glyphicon",jr);var Zr={$bs_formGroup:gn().object},qr=function(e){function t(){return e.apply(this,arguments)||this}hn(t,e);var o=t.prototype;return o.getGlyph=function(e){switch(e){case"success":return"ok";case"warning":return"warning-sign";case"error":return"remove";default:return null}},o.renderDefaultFeedback=function(e,t,o,n){var r=this.getGlyph(e&&e.validationState);return r?a().createElement(Vr,pn({},n,{glyph:r,className:i()(t,o)})):null},o.render=function(){var e=this.props,t=e.className,o=e.children,n=Vn(an(e,["className","children"])),r=n[0],s=n[1],l=Wn(r);if(!o)return this.renderDefaultFeedback(this.context.$bs_formGroup,t,l,s);var c=a().Children.only(o);return a().cloneElement(c,pn({},s,{className:i()(c.props.className,t,l)}))},t}(a().Component);qr.defaultProps={bsRole:"feedback"},qr.contextTypes=Zr;const Kr=Fn("form-control-feedback",qr);var Yr={componentClass:wn()},Xr=function(e){function t(){return e.apply(this,arguments)||this}return hn(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,o=e.className,n=Vn(an(e,["componentClass","className"])),r=n[0],s=n[1],l=Wn(r);return a().createElement(t,pn({},s,{className:i()(o,l)}))},t}(a().Component);Xr.propTypes=Yr,Xr.defaultProps={componentClass:"p"};const Qr=Fn("form-control-static",Xr);var Jr={componentClass:wn(),type:gn().string,id:gn().string,inputRef:gn().func},ei={$bs_formGroup:gn().object},ti=function(e){function t(){return e.apply(this,arguments)||this}return hn(t,e),t.prototype.render=function(){var e,t=this.context.$bs_formGroup,o=t&&t.controlId,n=this.props,r=n.componentClass,s=n.type,l=n.id,c=void 0===l?o:l,d=n.inputRef,h=n.className,u=n.bsSize,p=Vn(an(n,["componentClass","type","id","inputRef","className","bsSize"])),f=p[0],m=p[1];return"file"!==s&&(e=Wn(f)),u&&(e[Gn({bsClass:"input"},Hn[u]||u)]=!0),a().createElement(r,pn({},m,{type:s,id:c,ref:d,className:i()(h,e)}))},t}(a().Component);ti.propTypes=Jr,ti.defaultProps={componentClass:"input"},ti.contextTypes=ei,ti.Feedback=Kr,ti.Static=Qr;const oi=Fn("form-control",Bn([zn,Pn],ti)),ni={ADDED:"added",DELETED:"deleted",MODIFIED:"modified",RENAMED:"renamed"};class ri extends a().Component{render(){const{fileDiffType:e,getExternalIcon:t,translate:o}=this.props;if(!e)return null;const n=(e=>{switch(e){case ni.ADDED:return"added";case ni.MODIFIED:return"modified";case ni.DELETED:return"deleted";case ni.RENAMED:return"renamed";default:return null}})(e),r=(e=>{switch(e){case ni.ADDED:return"color-green";case ni.MODIFIED:return"color-orange";case ni.DELETED:return"color-red";case ni.RENAMED:return"color-blue";default:return null}})(e),s=(e=>{switch(e){case ni.ADDED:return"CommitDiffSection-FileAdded";case ni.MODIFIED:return"CommitDiffSection-FileModified";case ni.DELETED:return"CommitDiffSection-FileDeleted";case ni.RENAMED:return"CommitDiffSection-FileRenamed";default:return null}})(e),l=i()("fs-1",r,"mr1");return a().createElement("span",{className:l,title:o(s)},n&&t(n))}}var ii=ri;const{ADDED:si,DELETED:ai,MODIFIED:li,RENAMED:ci}=ni,di={[si]:"CommitDiffSection-NFilesAdded",[ai]:"CommitDiffSection-NFilesDeleted",[li]:"CommitDiffSection-NFilesModified",[ci]:"CommitDiffSection-NFilesRenamed"};var hi=function({count:e,diffType:t,getExternalIcon:o,fileNodeListStyle:n,translate:r}){const i=n?e:r(di[t],e);let s,l;return n&&(s={fontSize:m.wd,marginRight:m.IX},l={fontSize:m.dH,margin:`0px ${m.VB}px 0px 0px`}),a().createElement("span",{className:"tiny-files-readout",style:s},a().createElement(ii,{fileDiffType:t,getExternalIcon:o,style:l,translate:r}),a().createElement("span",{className:"tiny-files-readout-text"},i))},ui=function({diffStats:e,fileNodeListStyle:t,getExternalIcon:o,translate:r}){const{types:i}=n;if(!e)return a().createElement("span",null);if(!Object.values(e).some((e=>Boolean(e))))return a().createElement("span",null);const s=e.modified?a().createElement(hi,{count:e.modified,diffType:i.MODIFIED,fileNodeListStyle:!0,getExternalIcon:o,translate:r}):null,l=e.added?a().createElement(hi,{count:e.added,diffType:i.ADDED,fileNodeListStyle:!0,getExternalIcon:o,translate:r}):null,c=e.deleted?a().createElement(hi,{count:e.deleted,diffType:i.DELETED,fileNodeListStyle:!0,getExternalIcon:o,translate:r}):null,d=e.renamed?a().createElement(hi,{count:e.renamed,diffType:i.RENAMED,fileNodeListStyle:!0,getExternalIcon:o,translate:r}):null,h=t?{marginLeft:m.aV}:null;return a().createElement("span",{className:"summary",style:h},s,l,c,d)};class pi extends a().Component{textWidthRef=a().createRef();wrapperRef=a().createRef();static defaultProps={style:{},value:""};componentDidMount(){this.wrapperRef?.current&&(this.wrapperRef.current.style.width="0px")}componentDidUpdate(){this.textWidthRef?.current&&this.wrapperRef?.current&&(this.wrapperRef.current.style.width=`${Number(this.textWidthRef.current.offsetWidth)+35}px`)}componentWillUnmount(){this.props.onBlur&&this.props.onBlur()}onWipKeyDown(e){e.stopPropagation()}render(){const{clearCurrentlyHoveredGraphCommit:e,currentlyHoveredCommitSha:t,getExternalIcon:o,graphZoneType:n,isCommitting:r,isHovering:s,isSelected:l,onBlur:c,onClickCommit:d,onContextMenu:h,onFocus:u,onMessageChange:p,setAsCurrentlyHoveredGraphCommit:m,sha:g,style:b,translate:v,value:y,workDirStats:w}=this.props,C=i()("graph-zone-column","pt3","pb3","pointer","height-100-percent","grow-3","graph-row-wrapper",f.ch,{"is-hovering":s}),x=i()("column-1","graph-row","flex",{"is-selected":l}),S=a().createElement(ui,{diffStats:w,getExternalIcon:o,translate:v}),_=a().createElement("div",{className:"work-dir-input",ref:this.wrapperRef},a().createElement(oi,{"data-test-class":"work-dir-input-field",disabled:r,onBlur:e=>c(e),onChange:e=>p(e.target.value),onContextMenu:e=>h(e,n,g),onFocus:e=>u(e),onKeyDown:e=>this.onWipKeyDown(e),placeholder:v("WorkDirMessageInput-WIPPlaceholder"),type:"text",value:y}),a().createElement("div",{className:"text-width","data-test-class":"work-dir-input-message",ref:this.textWidthRef},y));return a().createElement("div",{className:C,onMouseEnter:e=>m(e,n,g,t),onMouseLeave:o=>e(o,n,g,t),style:b},a().createElement("div",{className:x,"data-test-class":"work-dir-message-row-div",onMouseDown:e=>d(e,n,g)},_,S))}}var fi=(e,t)=>{const{dimMergeCommits:o,dimRowsOfSelectedCommit:n,processedRows:r,translate:i,getExternalIcon:s,graphCommitDescDisplayMode:l,highlightRowsOnRefHover:c,isInUnsupportedRebase:d,numGraphColumns:h,isCommitting:u,pendingCommitMessageSummary:p,workDirStats:g,onBlurWipNodeInput:b,onFocusWipNodeInput:v,onMessageChange:y,clearCurrentlyHoveredGraphCommit:w,currentlyHoveredCommitSha:C,onCommitContextMenu:x,onClickCommit:S,onDoubleClickCommit:_,setAsCurrentlyHoveredGraphCommit:T,wipMessageEditable:R}=e,k=new z.Dj(e);return({rowIndex:e,style:E})=>{const O=t(e),I=r[e],{displaySummary:M,displayBody:D,sha:$,type:N,contexts:A,message:P}=I,z=A?.message||void 0,H=A?.row||void 0,L=m.KE,G=k.isColumnFollowingGraphColumn(L),F=k.isLastColumn(L),B=k.getZoneWidth(L),W=k.getVerticalScrollWidth(L),U=k.isHovering(e),j=N===f.ch&&void 0!==g&&Object.keys(g).length>0,V=j&&!R?a().createElement(ui,{diffStats:g,getExternalIcon:s,translate:i}):null,Z=l===m.R_.ALWAYS||l===m.R_.ON_HOVER&&U,q=N!==f.ch||R?a().createElement(a().Fragment,null,a().createElement("span",{className:"message-zone--summary"},M),Z&&D?a().createElement("span",{className:"message-zone--body"},D):null):a().createElement("span",{style:{display:"flex",alignItems:"stretch",textOverflow:"ellipsis"}},Z?M:null,V);return j&&R?a().createElement(pi,{clearCurrentlyHoveredGraphCommit:w,currentlyHoveredCommitSha:C,getExternalIcon:s,graphZoneType:L,isCommitting:u,isHovering:k.isHovering(e),isSelected:k.isSelected(e),key:O,onBlur:b,onClickCommit:S,onContextMenu:x,onFocus:v,onMessageChange:y,setAsCurrentlyHoveredGraphCommit:T,sha:$,style:E,translate:i,value:p,workDirStats:g}):a().createElement(zr,{clearCurrentlyHoveredGraphCommit:w,column:I.column,context:z,currentlyHoveredCommitSha:C,dimRowsOfSelectedCommit:n,getExternalIcon:s,graphZoneType:L,highlightRowsOnRefHover:c,isDimmedMergeCommitRow:N===f.lH&&o,isHighlighted:k.isHighlighted(e),isHovering:U,isInUnsupportedRebase:d,isLastColumn:F,isMissingHoveredRefGroup:k.isMissingHoveredRefGroup(e),isSelected:k.isSelected(e),key:O,numGraphColumns:h,onClickCommit:S,onContextMenu:x,onDoubleClickCommit:_,rowContext:H,setAsCurrentlyHoveredGraphCommit:T,sha:$,showColorStrip:G,showConflictIcon:N===f.S7||N===f.br,showTimeline:k.hasTimeline(e),style:E,title:P,type:N,verticalScrollWidth:W,zoneWidth:B},q)}},mi=(e,t)=>{const{processedRows:o,getExternalIcon:n,highlightRowsOnRefHover:r,isInUnsupportedRebase:i,numGraphColumns:s,clearCurrentlyHoveredGraphCommit:l,currentlyHoveredCommitSha:c,dimMergeCommits:d,dimRowsOfSelectedCommit:h,onCommitContextMenu:u,onClickCommit:p,onDoubleClickCommit:g,setAsCurrentlyHoveredGraphCommit:b,shaLength:v}=e,y=new z.Dj(e);return({rowIndex:e,style:w})=>{const C=t(e),x=o[e],{sha:S,type:_,contexts:T}=x,R=((e,t=m.ai)=>e?e.substring(0,t):"")(S,v),k=T?.sha||void 0,E=T?.row||void 0,O=m.av,I=y.isColumnFollowingGraphColumn(O),M=y.isLastColumn(O),D=y.getZoneWidth(O),$=y.getVerticalScrollWidth(O);return a().createElement(zr,{clearCurrentlyHoveredGraphCommit:l,column:x.column,context:k,currentlyHoveredCommitSha:c,dimRowsOfSelectedCommit:h,getExternalIcon:n,graphZoneType:O,highlightRowsOnRefHover:r,isDimmedMergeCommitRow:_===f.lH&&d,isHighlighted:y.isHighlighted(e),isHovering:y.isHovering(e),isInUnsupportedRebase:i,isLastColumn:M,isMissingHoveredRefGroup:y.isMissingHoveredRefGroup(e),isSelected:y.isSelected(e),key:C,numGraphColumns:s,onClickCommit:p,onContextMenu:u,onDoubleClickCommit:g,rowContext:E,setAsCurrentlyHoveredGraphCommit:b,sha:S,showColorStrip:I,showTimeline:y.hasTimeline(e),style:w,type:_,verticalScrollWidth:$,zoneWidth:D},_!==f.ch?a().createElement("span",{className:"font-monospace pointer",title:R},R):null)}};function gi({hasRefs:e,isActiveSha:t,left:o,type:n,width:r}){const s=i()("ref-line","z4",{"is-active":t});return e&&function(e){return[f.o$,f.lH,f.S7].includes(e)}(n)?a().createElement("hr",{className:s,style:{left:o,width:r}}):null}var bi=gi;function vi({graphZoneModeConstants:{RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:e},hasRefs:t,isActiveSha:o,nodeOffset:n,type:r}){return a().createElement(gi,{hasRefs:t,isActiveSha:o,left:0,type:r,width:n+(r===f.lH?e:0)})}function yi({className:e,marginLeft:t}){return a().createElement("div",{className:i()("app-bg0","absolute","left-0","right-0","bottom-0","top-0","pt3","pb3",e),style:{marginLeft:t}},a().createElement("div",{className:"commit-bg-color height-100-percent width-100-percent"}))}const wi=(e,t,o,n)=>o+t*e+n/2;function Ci({column:e,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:t,COMMIT_NODE_DIAMETER:o,COMMIT_ZONE_GUTTER_WIDTH:n}}){return a().createElement(yi,{className:"z1",marginLeft:wi(e,t,n,o)})}function xi(){return a().createElement(yi,{marginLeft:0})}const Si=(e,t,o,n,r,s)=>{const l={height:s.COMMIT_MERGE_NODE_DIAMETER,left:o+s.COMMIT_MERGE_NODE_LEFT_OFFSET,marginTop:s.COMMIT_MERGE_NODE_TOP_OFFSET,opacity:n,width:s.COMMIT_MERGE_NODE_DIAMETER},c=i()("node",r,"z6"),d=a().createElement(cr,{className:"gk-graph",id:"graph-merge-node-tooltip"},Gr(t,e));return a().createElement(sr,{delayShow:250,overlay:d,placement:"top",trigger:["hover","focus"]},a().createElement("div",{className:c,"data-test-class":"tree-row-commit-node",style:l}))};class _i extends a().PureComponent{render(){const{authorEmail:e,authorName:t,getExternalIcon:o,graphZoneModeConstants:n,left:r,opacity:s,translate:l,type:c}=this.props;return(t||e)&&c===f.o$?n.IS_COMPACT?Si(e,t,r,s,f.lH,n):(({authorEmail:e,authorInitials:t,authorName:o,avatarUrl:n,column:r,context:s,cssVariables:l,graphZoneModeConstants:c,left:d,message:h,opacity:u,type:p,useAuthorInitialsForAvatars:f})=>a().createElement(Fr,{authorInitials:t,avatarUrl:n,className:i()("node",`${p}`,"z6"),column:r,context:s,cssVariables:l,fontSize:10,height:c.COMMIT_NODE_DIAMETER,size:c.COMMIT_ZONE_AVATAR_DIAMETER,style:{left:d,opacity:u},tooltip:()=>{const t=o&&""!==o.trim()&&"Unknown"!==o?Gr(o,e):e,n=w(v(h||""));let r="";if(0===n.length)r=t;else{n.unshift({email:e,name:o});for(let e=0;e<n.length;e+=1){const t=n[e];r+=Gr(t.name,t.email),e<n.length-1&&(r+=", ")}}return r},top:c.COMMIT_NODE_TOP_OFFSET,useAuthorInitialsForAvatars:f,width:c.COMMIT_NODE_DIAMETER}))(this.props):c===f.lH||c===f.S7||c===f.br?Si(e,t,r,s,c,n):((e,t,o,n,r,s,l,c=!1,d)=>{const h={height:d.COMMIT_NODE_DIAMETER,left:n,marginTop:d.COMMIT_NODE_TOP_OFFSET,opacity:r,width:d.COMMIT_NODE_DIAMETER};c&&(h.borderWidth=1);const u=i()("gk-graph","node",l,"z6",{compact:c});let p;p=l===f.kP?s("Stash"):l===f.ch?s("Graph-WorkInProgress"):Gr(o,t);const m=a().createElement(cr,{className:"gk-graph",id:"graph-other-node-tooltip"},p);return a().createElement(sr,{delayShow:250,overlay:m,placement:"top",trigger:["hover","focus"]},a().createElement("div",{className:u,"data-test-class":"tree-row-commit-node",style:h},l!==f.kP||c?null:a().createElement("span",null,e("stash"))))})(o,e,t,r,s,l,c,n.IS_COMPACT,n)}}class Ti extends a().Component{render(){const{columnColorByColumn:e,edgeColumnMax:t,edges:o,nodeColumn:n,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:r,COMMIT_ZONE_GUTTER_WIDTH:i,COMMIT_ZONE_LINE_WIDTH:s,IS_COMPACT:l}}=this.props,c=function(e,t,o,n,r,i,s,a){const l=function(e,t,o,n){let r="";for(let i=0;i<=t;i++){const{passThrough:t,starting:s,ending:a}=e[i]??{};r=`${r}_${A(i,o,s?.type,n)}_${A(i,o,a?.type,n)}_${P(i,t?.type,n)}`}return r}(e,t,o,a);let c=te[l];if(c)return c;let d="";for(let l=0;l<=t;l+=1){const t=e[l];if(!t)continue;const{passThrough:c,starting:h,ending:u}=t;d+=h?ee(l,o,h.type,n,r,i,s,a):"",d+=c?Q(l,c.type,n,r,i,s,a):"",d+=u?Y(l,o,u.type,n,r,i,s,a):""}return c=`url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><g>${d}</g></svg>')`,te[l]=c,c}(o,t,n,e,r,i,s,l);return a().createElement("div",{className:"absolute top-0 right-0 bottom-0 left-0 z2",style:{background:c}})}}var Ri=Ti;function ki({boxShadowAlpha:e,boxShadowLeft:t,children:o,className:n="",left:r,width:s}){return a().createElement("div",{className:i()("absolute","top-0","bottom-0","z3",n),style:{boxShadow:`${t}px 5px 10px rgba(0, 0, 0, ${e})`,left:r,width:s}},o)}function Ei({boxShadowAlpha:e,hasTimeline:t,scrollLeft:o,width:n}){return a().createElement(ki,{boxShadowAlpha:e,boxShadowLeft:5,className:"app-bg0 left-0",left:o,width:n},t?a().createElement($r,{z2:!0}):null)}function Oi({boxShadowAlpha:e,commitZoneWidth:t,hasTimeline:o,scrollLeft:n,width:r}){return a().createElement(ki,{boxShadowAlpha:e,boxShadowLeft:-5,left:n+t-r,width:r},o?a().createElement($r,{z2:!0}):null,a().createElement(xi,null))}class Ii extends a().PureComponent{render(){const{authorEmail:e,authorName:t,avatarContext:o,avatarUrl:n,clearCurrentlyHoveredGraphCommit:r,column:s,columnColorByColumn:l,commitZoneWidth:c,cssVariables:d,currentlyHoveredCommitSha:h,edgeColumnMax:u,edges:p,hasRefs:f,hasTimeline:g,getExternalIcon:b,graphZoneModeConstants:v,isActiveSha:y,isInUnsupportedRebase:w,isLastColumn:C,isSelected:x,leftGutterBoxShadowAlpha:S,leftGutterWidth:_,message:T,nodeOffset:R,nodeOpacity:k,numGraphColumns:E,onContextMenu:O,onClickCommit:I,onDoubleClickCommit:M,rightGutterBoxShadowAlpha:D,rightGutterWidth:$,rowContext:N,scrollLeft:A,setAsCurrentlyHoveredGraphCommit:P,sha:H,shouldShowRefLine:L,style:G,translate:F,type:B,useAuthorInitialsForAvatars:W,zoneContext:U}=this.props,j=s%E+1,V=i()("relative","commit-zone","height-100-percent","pt3",B,`column-${j}`,{"is-selected":x,"has-active":y}),Z=g?a().createElement($r,{z2:!0}):null,q=a().createElement("div",{className:V,"data-vscode-context":(0,z.q3)(U),onContextMenu:w?void 0:e=>O(e,m.Wm,H),onDoubleClick:e=>M(e,m.Wm,H),onMouseDown:e=>I(e,m.Wm,H),onMouseEnter:e=>P(e,m.Wm,H,h),onMouseLeave:e=>r(e,m.Wm,H,h),style:{...G,...C&&{width:"100%"}}},Z,a().createElement(Ei,{boxShadowAlpha:S,hasTimeline:g,scrollLeft:A,width:_}),L?a().createElement(vi,{graphZoneModeConstants:v,hasRefs:f,isActiveSha:y,nodeOffset:R,type:B}):null,a().createElement(_i,{authorEmail:e,authorInitials:Lr(t),authorName:t,avatarUrl:n,column:s,context:o,cssVariables:d,getExternalIcon:b,graphZoneModeConstants:v,left:R,message:T,opacity:k,translate:F,type:B,useAuthorInitialsForAvatars:W}),a().createElement(Ci,{column:s,graphZoneModeConstants:v}),a().createElement(Ri,{columnColorByColumn:l,edgeColumnMax:u,edges:p,graphZoneModeConstants:v,nodeColumn:s}),a().createElement(Oi,{boxShadowAlpha:D,commitZoneWidth:c,hasTimeline:g,scrollLeft:A,width:$}));return N?a().createElement("div",{"data-vscode-context":(0,z.q3)(N)},q):q}}var Mi=function(e,t){const{avatarUrlByEmail:o,onMissingAvatar:n,clearCurrentlyHoveredGraphCommit:r,columnColorByColumn:i,cssVariables:s,currentlyHoveredCommitSha:l,processedRows:c,getExternalIcon:d,graphZoneModeConstants:h,isInUnsupportedRebase:u,leftGutterBoxShadowAlpha:p,leftGutterWidth:f,onCommitContextMenu:g,onClickCommit:b,onDoubleClickCommit:v,nodeOffsetByColumn:y,nodeOpacityByColumn:w,numGraphColumns:C,rightGutterBoxShadowAlpha:x,rightGutterWidth:S,setAsCurrentlyHoveredGraphCommit:_,scrollLeft:T,shouldShowRefLine:R,translate:k,useAuthorInitialsForAvatars:E}=e,O=new z.Dj(e);return({rowIndex:e,style:I})=>{const M=t(e),D=c[e],$=m.Wm,N=O.getZoneWidth($),{email:A,author:P,contexts:z,message:H,sha:L,type:G}=D,F=D.column,B=z?.graph||void 0,W=z?.avatar||void 0,U=z?.row||void 0;let j;E||(j=o[A],j||n(A,L));const V=O.isLastColumn($);return a().createElement(Ii,{authorEmail:A,authorName:P,avatarContext:W,avatarUrl:j,clearCurrentlyHoveredGraphCommit:r,column:F,columnColorByColumn:i,commitZoneWidth:N,cssVariables:s,currentlyHoveredCommitSha:l,edgeColumnMax:D.edgeColumnMaxes,edges:D.edges,getExternalIcon:d,graphZoneModeConstants:h,hasRefs:D.hasRefs||!1,hasTimeline:O.hasTimeline(e),isActiveSha:O.rowContainsCurrentHeadRef(D),isInUnsupportedRebase:u,isLastColumn:V,isSelected:O.isSelected(e),key:M,leftGutterBoxShadowAlpha:p,leftGutterWidth:f,message:H,nodeOffset:y[F],nodeOpacity:w[F],numGraphColumns:C,onClickCommit:b,onContextMenu:g,onDoubleClickCommit:v,rightGutterBoxShadowAlpha:x,rightGutterWidth:S,rowContext:U,scrollLeft:T,setAsCurrentlyHoveredGraphCommit:_,sha:L,shouldShowRefLine:R,style:I,translate:k,type:G,useAuthorInitialsForAvatars:E,zoneContext:B})}};const Di=function(e,t,o){var n=0,r=!1;return a().Children.forEach(e,(function(e){r||a().isValidElement(e)&&t.call(o,e,n++)&&(r=!0)})),r};var $i={controlId:gn().string,validationState:gn().oneOf(["success","warning","error",null])},Ni={$bs_formGroup:gn().object.isRequired},Ai=function(e){function t(){return e.apply(this,arguments)||this}hn(t,e);var o=t.prototype;return o.getChildContext=function(){var e=this.props;return{$bs_formGroup:{controlId:e.controlId,validationState:e.validationState}}},o.hasFeedback=function(e){var t=this;return Di(e,(function(e){return"feedback"===e.props.bsRole||e.props.children&&t.hasFeedback(e.props.children)}))},o.render=function(){var e=this.props,t=e.validationState,o=e.className,n=e.children,r=function(e,t){var o={};["controlId"].forEach((function(e){o[e]=!0}));var n={};return $n()(e).forEach((function(e){var t=e[0],r=e[1];jn(t)||o[t]||(n[t]=r)})),[Un(e),n]}(an(e,["validationState","className","children"])),s=r[0],l=r[1],c=pn({},Wn(s),{"has-feedback":this.hasFeedback(n)});return t&&(c["has-"+t]=!0),a().createElement("div",pn({},l,{className:i()(o,c)}),n)},t}(a().Component);Ai.propTypes=$i,Ai.childContextTypes=Ni;const Pi=Fn("form-group",Bn([Pn,zn],Ai));function zi(e,t){return zi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},zi(e,t)}function Hi(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Li(e,t,o){return e===t||(e.correspondingElement?e.correspondingElement.classList.contains(o):e.classList.contains(o))}var Gi,Fi,Bi=(void 0===Gi&&(Gi=0),function(){return++Gi}),Wi={},Ui={},ji=["touchstart","touchmove"];function Vi(e,t){var o={};return-1!==ji.indexOf(t)&&Fi&&(o.passive=!e.props.preventDefault),o}class Zi extends a().PureComponent{handleClickOutside(){const{sha:e,shorthand:t,type:o,data:n}=this.props.createRefFormData;this.props.onCancel(t,e,o,n)}constructor(e){super(e);const{createRefFormData:t,formatRefShorthand:o}=this.props,{sha:n,shorthand:r,type:i,data:s}=t;this.state={currentShorthand:o(r,n,i,s),initShorthand:r}}static getDerivedStateFromProps(e,t){const{createRefFormData:o,formatRefShorthand:n}=e,{currentShorthand:r,initShorthand:i}=t,{sha:s,shorthand:a,type:l,data:c}=o,d=a!==i;return d&&n(a,s,l,c)!==r?{currentShorthand:n(a,s,l,c),initShorthand:a}:d?{currentShorthand:r,initShorthand:a}:null}onInputChange(e){let t=e||"";if(e){const{sha:e,type:o,data:n}=this.props.createRefFormData;t=this.props.formatRefShorthand(t,e,o,n)}this.setState({currentShorthand:t}),this.props.onRefShorthandChange?.(t)}render(){const{createRefFormData:e,isRefShorthandValid:t,onCancel:o,onContextMenu:n,onRefCreate:r,refZoneWidth:i,style:s,translate:l}=this.props,{currentShorthand:c}=this.state,{data:d,sha:h,type:u}=e,p=l(u===G.V.TAG?"RefZone-EnterTagName":"RefZone-EnterBranchName");return a().createElement("div",{className:"create-ref","data-testid":"create-ref",style:{...s,minWidth:i,width:i}},a().createElement(Pi,{validationState:0===c.length||t(c,h,u,d)?"success":"error"},a().createElement(oi,{autoFocus:!0,"data-testid":"create-ref-form-control",onChange:e=>this.onInputChange(e.target?.value),onContextMenu:e=>n(e,c,h,u,d),onKeyDown:e=>{e.stopPropagation(),"Escape"!==e.key?h&&"Enter"===e.key&&r(c,h,u,d):o(c,h,u,d)},placeholder:p,type:"text",value:c})))}}var qi=function(e,t){var o,n,r=e.displayName||e.name||"Component";return n=o=function(o){var n,i;function a(e){var n;return(n=o.call(this,e)||this).__outsideClickHandler=function(e){if("function"!=typeof n.__clickOutsideHandlerProp){var t=n.getInstance();if("function"!=typeof t.props.handleClickOutside){if("function"!=typeof t.handleClickOutside)throw new Error("WrappedComponent: "+r+" lacks a handleClickOutside(event) function for processing outside click events.");t.handleClickOutside(e)}else t.props.handleClickOutside(e)}else n.__clickOutsideHandlerProp(e)},n.__getComponentNode=function(){var e=n.getInstance();return t&&"function"==typeof t.setClickOutsideRef?t.setClickOutsideRef()(e):"function"==typeof e.setClickOutsideRef?e.setClickOutsideRef():(0,et.findDOMNode)(e)},n.enableOnClickOutside=function(){if("undefined"!=typeof document&&!Ui[n._uid]){void 0===Fi&&(Fi=function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),o=function(){};return window.addEventListener("testPassiveEventSupport",o,t),window.removeEventListener("testPassiveEventSupport",o,t),e}}()),Ui[n._uid]=!0;var e=n.props.eventTypes;e.forEach||(e=[e]),Wi[n._uid]=function(e){var t;null!==n.componentNode&&(n.props.preventDefault&&e.preventDefault(),n.props.stopPropagation&&e.stopPropagation(),n.props.excludeScrollbar&&(t=e,document.documentElement.clientWidth<=t.clientX||document.documentElement.clientHeight<=t.clientY)||function(e,t,o){if(e===t)return!0;for(;e.parentNode||e.host;){if(e.parentNode&&Li(e,t,o))return!0;e=e.parentNode||e.host}return e}(e.composed&&e.composedPath&&e.composedPath().shift()||e.target,n.componentNode,n.props.outsideClickIgnoreClass)===document&&n.__outsideClickHandler(e))},e.forEach((function(e){document.addEventListener(e,Wi[n._uid],Vi(Hi(n),e))}))}},n.disableOnClickOutside=function(){delete Ui[n._uid];var e=Wi[n._uid];if(e&&"undefined"!=typeof document){var t=n.props.eventTypes;t.forEach||(t=[t]),t.forEach((function(t){return document.removeEventListener(t,e,Vi(Hi(n),t))})),delete Wi[n._uid]}},n.getRef=function(e){return n.instanceRef=e},n._uid=Bi(),n}i=o,(n=a).prototype=Object.create(i.prototype),n.prototype.constructor=n,zi(n,i);var l=a.prototype;return l.getInstance=function(){if(e.prototype&&!e.prototype.isReactComponent)return this;var t=this.instanceRef;return t.getInstance?t.getInstance():t},l.componentDidMount=function(){if("undefined"!=typeof document&&document.createElement){var e=this.getInstance();if(t&&"function"==typeof t.handleClickOutside&&(this.__clickOutsideHandlerProp=t.handleClickOutside(e),"function"!=typeof this.__clickOutsideHandlerProp))throw new Error("WrappedComponent: "+r+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),this.props.disableOnClickOutside||this.enableOnClickOutside()}},l.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},l.componentWillUnmount=function(){this.disableOnClickOutside()},l.render=function(){var t=this.props;t.excludeScrollbar;var o=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(t,["excludeScrollbar"]);return e.prototype&&e.prototype.isReactComponent?o.ref=this.getRef:o.wrappedRef=this.getRef,o.disableOnClickOutside=this.disableOnClickOutside,o.enableOnClickOutside=this.enableOnClickOutside,(0,s.createElement)(e,o)},a}(s.Component),o.displayName="OnClickOutside("+r+")",o.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:t&&t.excludeScrollbar||!1,outsideClickIgnoreClass:"ignore-react-onclickoutside",preventDefault:!1,stopPropagation:!1},o.getClass=function(){return e.getClass?e.getClass():e},n}(Zi),Ki=function({hasActive:e,overflowCount:t}){return a().createElement("span",{className:i()("overflow-count ml1",{"is-active":e}),"data-test-class":"overflow-count"},"+",t)},Yi=function({style:e,children:t,column:o,numGraphColumns:n,onMouseEnter:r,onMouseLeave:s}){const l=e?.top||0;return a().createElement("div",{className:i()("gk-graph","ref-zone","column-"+(o%n+1))},a().createElement("ul",{onMouseEnter:r,onMouseLeave:s,style:{...e,top:l-m.cZ/2,position:"absolute",listStyle:"none",padding:0,zIndex:1}},t))},Xi=function({enabledRefMetadataTypes:e,column:t,context:o,enableShowHideRefsOptions:n,getTargetRef:r,hasActive:i,hasRefs:s,getExternalIcon:l,includeOnlyRefsById:c,includeOnlyRemotesByName:d,isGhostRef:h,isHovered:u,isInUnsupportedRebase:p,numGraphColumns:f,onMissingRefMetadata:g,refGroupContexts:b,refGroupsByName:v,refMetadata:y,refNodeHovered:w,sha:C,showRemoteNamesOnRefs:x,showContextMenuForGroupedRef:S,onClickRef:_,onDoubleClickRef:T,onToggleRefNodesShown:R,onRefBeginDrag:k,onRefCanDrag:E,onRefCanDrop:O,onRefDragEnter:I,onRefDragLeave:M,onRefDrop:D,onRefEndDrag:$,translate:N,type:A}){const P=(e,t,o)=>{const n=t.map((e=>({id:(0,z.qP)(e),name:e.name,type:e.refType,owner:e.owner,avatarUrl:e.avatarUrl})));R(e,n,!1,o)},H=v&&v.length>m.v6?v.slice(0,m.v6):v,L=H[0],F=u?H:[L],B=m.Vh+(L?.length||0)*m.B+(i?m.B:0),W=Object.values(c),U=W.length>0&&W.some((e=>e.type===G.V.TAG)),j=F.map((t=>{const o=t[0],r=b?.[o.name]||void 0,f=t.some((e=>{const t=(0,z.qP)(e);switch(e.refType){case G.V.TAG:return U&&Boolean(c[t]);case G.V.REMOTE:return Boolean(c[t])||e.owner&&d[e.owner];default:return Boolean(c[t])}})),m=a().createElement(Tr,{enabledRefMetadataTypes:e,enableShowHideRefsOptions:n,getExternalIcon:l,groupIsHovered:u,hasActive:i,hasRefs:s,isActive:o.isCurrentHead,isGhostRef:h,isInUnsupportedRebase:p,isRefGroupIncluded:f,key:`ref-node-${o.fullName||o.name}`,onClick:_,onContextMenu:S,onDoubleClick:T,onHideRefClick:P,onHovered:w,onMissingRefMetadata:g,onRefBeginDrag:k,onRefCanDrag:E,onRefCanDrop:O,onRefDragEnter:I,onRefDragLeave:M,onRefDrop:D,onRefEndDrag:$,refGroup:t,refGroupContext:r,refMetadata:y,sha:C,showRemoteNamesOnRefs:x,translate:N,type:A});return u?a().createElement("li",{key:m.key},m):m}));return u?a().createElement("div",{"data-vscode-context":(0,z.q3)(o),style:{height:100,position:"relative"}},a().createElement(On,{placement:"right",show:u,target:r},a().createElement(Yi,{column:t,numGraphColumns:f},j))):a().createElement("span",{"data-vscode-context":(0,z.q3)(o),style:{minWidth:B}},j)};const Qi={};class Ji extends a().PureComponent{refPopoverTarget;isContextMenuShown=!1;static defaultProps={style:{}};componentWillReceiveProps(e){this.props.hasRefs||!this.props.isSingleSelected||e.isSingleSelected||this.props.hoveredRefZoneSha!==this.props.sha||(this.props.refZoneUnhovered(),this.props.hoveredRefGroup&&this.props.refNodeUnhovered(void 0,this.props.hoveredRefGroup,this.props.sha))}getRefPopoverTarget=()=>this.refPopoverTarget;onCustomToggleRefNodesShown=(e,t,o,n)=>{this.props.onToggleRefNodesShown(e,t,o,n),this.props.refZoneUnhovered()};render(){const{enabledRefMetadataTypes:e,column:t,context:o,enableShowHideRefsOptions:n,showGhostRefsOnRowHover:r,hasActive:s,hasRefs:l,hasTimeline:c,hoveredRefGroup:d,hoveredRefZoneSha:h,getExternalIcon:u,includeOnlyRefsById:p,includeOnlyRemotesByName:f,isContainerWindowFocused:g,isInUnsupportedRebase:b,numGraphColumns:v,onClickRef:y,onDoubleClickRef:w,onMissingRefMetadata:C,onRefBeginDrag:x,onRefCanDrag:S,onRefCanDrop:_,onRefDragEnter:T,onRefDragLeave:R,onRefDrop:k,onRefEndDrag:E,refGroupContexts:O,refGroupsByName:I,refMetadata:M,refNodeHovered:D,refNodeUnhovered:$,refZoneHovered:N,refZoneUnhovered:A,sha:P,shouldShowRefLine:H,showColorStrip:L,showContextMenuForGroupedRef:G,showRemoteNamesOnRefs:F,style:B,translate:W,type:U,width:j}=this.props,V=h===P&&g,Z={minWidth:j,width:j},q={...B,...Z},K=c?a().createElement($r,null):null,Y=I.length,X=e=>{N(P),Y?D(e,I[0],P):d&&$(e,d,P)},Q=e=>{g&&this.isContextMenuShown?this.isContextMenuShown=!1:(A(),d&&$(e,d,P))},J=(0,z.h)(((e,t)=>{Q(e),x(e,t)})),ee=Y>0&&!l&&r,te=function(e,t,o,n,r,s){const a=`${e}${t}${o}${n}${r}${s}`;let l=Qi[a];return l||(l=i()("column-"+(t%r+1),"flex","pb3","pt3","ref-zone","relative",e,{"dim-ref":s,"has-active":n,z6:o,z1:!o}),Qi[a]=l,l)}(U,t,V,s,v,ee),oe=a().createElement("div",{className:"color-strip height-100",style:{width:2}});if(!Y)return a().createElement("div",{className:te,onMouseEnter:X,onWheel:Q,style:q},L?oe:null,K);const ne={minWidth:0,overflow:"hidden",width:j-m.PB},re=Y-1,ie=re>0&&!V?a().createElement(Ki,{hasActive:s,overflowCount:re}):null;return a().createElement("div",{className:te,onMouseEnter:X,onMouseLeave:Q,onWheel:Q,style:q},a().createElement("div",{ref:e=>this.refPopoverTarget=e}),L?oe:null,K,a().createElement("div",{className:"flex",style:ne},a().createElement(Xi,{column:t,context:o,enabledRefMetadataTypes:e,enableShowHideRefsOptions:n,getExternalIcon:u,getTargetRef:this.getRefPopoverTarget,hasActive:s,hasRefs:l,includeOnlyRefsById:p,includeOnlyRemotesByName:f,isGhostRef:ee,isHovered:V,isInUnsupportedRebase:b,numGraphColumns:v,onClickRef:y,onDoubleClickRef:w,onMissingRefMetadata:C,onRefBeginDrag:J,onRefCanDrag:S,onRefCanDrop:_,onRefDragEnter:(e,t,o)=>{V||o?.sha!==P||X(e),T(e,t,o)},onRefDragLeave:R,onRefDrop:k,onRefEndDrag:E,onToggleRefNodesShown:this.onCustomToggleRefNodesShown,refGroupContexts:O,refGroupsByName:I,refMetadata:M,refNodeHovered:D,sha:P,showContextMenuForGroupedRef:(e,t,o)=>{X(e),this.isContextMenuShown=!0,G(e,t,o)},showRemoteNamesOnRefs:F,translate:W,type:U}),ie),l&&H?a().createElement("div",{className:"absolute left-0 flex z1",style:Z},a().createElement(bi,{hasRefs:!0,isActiveSha:s,left:m.yv,type:U,width:"100%"})):null)}}var es=(e,t)=>{const{createRefFormData:o,formatRefShorthand:n,enableShowHideRefsOptions:r,enabledRefMetadataTypes:i,isRefShorthandValid:s,showGhostRefsOnRowHover:l,showRemoteNamesOnRefs:c,onDoubleClickRef:d,processedRows:h,includeOnlyRefsById:u,includeOnlyRemotesByName:p,isContainerWindowFocused:f,isInUnsupportedRebase:g,getExternalIcon:b,hoveredRefGroup:v,hoveredRefZoneSha:y,numGraphColumns:w,onClickRef:C,onMissingRefMetadata:x,onShowContextMenuForGroupedRef:S,onRefBeginDrag:_,onRefCanDrag:T,onRefCanDrop:R,onRefCreate:k,onRefCreateCancel:E,onRefCreateContextMenu:O,onRefDragEnter:I,onRefDragLeave:M,onRefDrop:D,onRefEndDrag:$,onRefNodeHovered:N,onRefNodeUnhovered:A,onRefShorthandChange:P,onRefZoneHovered:H,onRefZoneUnhovered:L,onToggleRefNodesShown:G,refMetadataById:F,shouldShowRefLine:B,translate:W}=e,U=new z.Dj(e);return({rowIndex:e,style:z})=>{const j=t(e),V=h[e],Z=m.jZ,q=U.getZoneWidth(Z),K=U.isHovering(e),{sha:Y,type:X,hasRefs:Q,contexts:J}=V,ee=J?.ref||void 0,te=J?.refGroups||void 0,oe=U.isSingleSelected(e),ne=(l||Q)&&(Q||K||oe)?U.getGraphRefGroupsByNameForRow(e):[],re=U.isColumnFollowingGraphColumn(Z);return o?.sha===Y?a().createElement(qi,{createRefFormData:o,formatRefShorthand:n,isRefShorthandValid:s,key:j,onCancel:E,onContextMenu:O,onRefCreate:k,onRefShorthandChange:P,refZoneWidth:q,style:z,translate:W}):a().createElement(Ji,{column:V.column,context:ee,enabledRefMetadataTypes:i,enableShowHideRefsOptions:r,getExternalIcon:b,hasActive:U.rowContainsCurrentHeadRef(V),hasRefs:Q||!1,hasTimeline:U.hasTimeline(e),hoveredRefGroup:v,hoveredRefZoneSha:y,includeOnlyRefsById:u,includeOnlyRemotesByName:p,isContainerWindowFocused:f,isInUnsupportedRebase:g,isSingleSelected:oe,key:j,numGraphColumns:w,onClickRef:C,onDoubleClickRef:d,onMissingRefMetadata:x,onRefBeginDrag:_,onRefCanDrag:T,onRefCanDrop:R,onRefDragEnter:I,onRefDragLeave:M,onRefDrop:D,onRefEndDrag:$,onToggleRefNodesShown:G,refGroupContexts:te,refGroupsByName:ne,refMetadata:F,refNodeHovered:N,refNodeUnhovered:A,refZoneHovered:H,refZoneUnhovered:L,sha:Y,shouldShowRefLine:B,showColorStrip:re,showContextMenuForGroupedRef:S,showGhostRefsOnRowHover:l,showRemoteNamesOnRefs:c,style:z,translate:W,type:X,width:q})}},ts=(e,t)=>{const{translate:o,processedRows:n}=e,r=i()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative"),s=new z.Dj(e);return({rowIndex:e,style:l})=>{const c=t(e),d=i()("graph-row","height-100-percent","flex"),h=s.hasTimeline(e),u=n[e],p=u.contexts?.row||void 0,f=u.timeLineEntry?.label||"",m=u.timeLineEntry?.value||0,g=h?a().createElement($r,null):null,b=h?a().createElement("span",{className:"time-line-message-container"},a().createElement("span",{className:"time-line-message"},o(f,m))):null;return a().createElement("div",{className:r,"data-vscode-context":(0,z.q3)(p),key:c,style:l},g,a().createElement("div",{className:d,"data-vscode-context":(0,z.q3)(p)},b))}};class os extends a().Component{graphContainerRef=a().createRef();resizeObserver;isSelectedBySha={};processedGraphRowBySha={};childrenBySha={};scrollToSha;headSha;headUpstreamSha;lastLazyLoadHeight=0;lastTopVisibleRowIndex=-1;lastBottomVisibleRowIndex=-1;maxColumns=0;orderedGraphRows=[];rowStatsConstraints={min:0,max:0};shouldFireShowMoreCommits=!0;columnsToFreeWhenFound={};hasMergeNodeChildBySha={};reserverInfoBySha={};columnsUsed={};rowsStats;workDirStats=m.OR;excludeByType={};excludeRefsById={};includeOnlyRefsById={};excludeRemotesByName={};includeOnlyRemotesByName={};scrollLeft=0;scrollTop=0;graphHeight=585;graphWidth=804;graphZoneModeConstants=(0,z.Ez)();graphZonesByType={};graphZoneOrdering=[m.jZ,m.Wm,m.KE,m.GF,m.WD,m.PL,m.av];clientHeight=0;missingAvatarsTimer;pendingMissingAvatars={};requestedMissingAvatars={};missingRefsMetadataTimer;pendingMissingRefsMetadata={};requestedMissingRefsMetadata={};markerRowIndices={};branchUpstreamRowIndices=[];downstreamsByUpstream={};timelinesInterval;constructor(e){super(e),this.resizeObserver=new ResizeObserver((e=>e.forEach((e=>this.onGraphResized(e.contentRect.width,e.contentRect.height))))),this.isSelectedBySha=this.props.isSelectedBySha||{},this.excludeByType=this.props.excludeByType||{},this.excludeRefsById=this.props.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),this.includeOnlyRefsById=this.props.includeOnlyRefsById||{},this.downstreamsByUpstream=this.props.downstreamsByUpstream||{},this.rowsStats=this.props.rowsStats||this.rowsStats,this.workDirStats=this.props.workDirStats||this.workDirStats,this.processRows(this.props.graphRows),this.cleanupSelections(),this.updateMarkerRowIndices(["selection","highlights"]);const t=(0,x.Ld)(this.props.cssVariables);this.graphZoneModeConstants=(0,z.Ez)(this.props.columnsSettings?.[m.Wm]?.mode),this.maybeSortGraphZoneOrderingFromSettings(this.props.columnsSettings),this.state={avatarUrlByEmail:this.props.avatarUrlByEmail||{},contexts:this.props.contexts,createRefFormData:this.props.createRefFormData,cssVariablesWithDefaults:t,columnColorByColumn:this.getColumnColorByColumn(t),currentlyHoveredCommitSha:void 0,dimMergeCommits:this.props.dimMergeCommits||!1,dimRowsOfSelectedCommit:!1,enableShowHideRefsOptions:this.props.enableShowHideRefsOptions||!1,highlightRowsOnRefHover:this.props.highlightRowsOnRefHover||!1,showGhostRefsOnRowHover:this.props.showGhostRefsOnRowHover||!1,showRemoteNamesOnRefs:this.props.showRemoteNamesOnRefs||!1,enabledRefMetadataTypes:this.props.enabledRefMetadataTypes||[],enabledScrollMarkerTypes:this.props.enabledScrollMarkerTypes||[],graphCommitDescDisplayMode:this.props.graphCommitDescDisplayMode||m.R_.ALWAYS,graphZones:this.initializeGraphZones(this.props.columnsSettings,this.graphZoneOrdering,580),hasMoreCommits:this.props.hasMoreCommits||!1,height:this.graphHeight,highlightedShas:this.props.highlightedShas,hoveredRefGroup:void 0,hoveredRefZoneSha:void 0,isContainerWindowFocused:void 0===this.props.isContainerWindowFocused||this.props.isContainerWindowFocused,isLoadingRows:this.props.isLoadingRows||!1,numGraphColumns:this.getNumGraphColumns(t),pendingCommitMessageSummary:this.props.pendingCommitMessageSummary||"",processedRows:[...this.orderedGraphRows],refMetadataById:this.props.refMetadataById,rowsStats:this.rowsStats,rowsStatsLoading:this.props.rowsStatsLoading||!1,useAuthorInitialsForAvatars:this.props.useAuthorInitialsForAvatars||!1,scrollLeft:this.getScrollLeft(),scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex(),scrollTop:this.getScrollTop(),shaLength:this.props.shaLength,themeOpacityFactor:this.props.themeOpacityFactor||m.X9.dark,width:this.graphWidth,workDirStats:this.workDirStats}}componentDidMount(){this.resizeObserver.observe(this.graphContainerRef.current),window.addEventListener("keydown",this.onWindowKeyDown),window.addEventListener("keyup",this.onWindowKeyUp),window.addEventListener("blur",this.onWindowBlur);const e=this.isSelectedBySha?this.getSelectedShas():[];e.length>0&&this.selectCommits(e,!1,!0)}componentWillReceiveProps(e){let t=!1,o=!1,n=!1;if(this.props.highlightedShas!==e.highlightedShas){this.setState({highlightedShas:e.highlightedShas});const t=[];Object.keys(e.highlightedShas||{}).forEach((o=>{e.highlightedShas[o]&&void 0!==this.processedGraphRowBySha[o]?.rowIndex&&t.push(this.processedGraphRowBySha[o].rowIndex)})),this.markerRowIndices={...this.markerRowIndices,highlights:t}}if(this.props.isSelectedBySha!==e.isSelectedBySha&&this.selectCommits(e.isSelectedBySha?Object.keys(e.isSelectedBySha):[],!1,!0),this.props.excludeByType!==e.excludeByType&&(this.excludeByType=e.excludeByType||{},e.graphRows?.length&&(o=!0)),this.props.excludeRefsById!==e.excludeRefsById&&(this.excludeRefsById=e.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),e.graphRows?.length&&(o=!0)),this.props.includeOnlyRefsById!==e.includeOnlyRefsById&&(this.includeOnlyRefsById=e.includeOnlyRefsById||{},this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),e.graphRows?.length&&(o=!0)),this.props.themeOpacityFactor!==e.themeOpacityFactor&&this.setState({themeOpacityFactor:e.themeOpacityFactor}),this.props.dimMergeCommits!==e.dimMergeCommits&&this.setState({dimMergeCommits:e.dimMergeCommits||!1}),this.props.highlightRowsOnRefHover!==e.highlightRowsOnRefHover&&this.setState({highlightRowsOnRefHover:e.highlightRowsOnRefHover||!1}),this.props.showGhostRefsOnRowHover!==e.showGhostRefsOnRowHover&&this.setState({showGhostRefsOnRowHover:e.showGhostRefsOnRowHover||!1}),this.props.showRemoteNamesOnRefs!==e.showRemoteNamesOnRefs&&this.setState({showRemoteNamesOnRefs:e.showRemoteNamesOnRefs||!1}),this.props.enabledRefMetadataTypes!==e.enabledRefMetadataTypes&&this.setState({enabledRefMetadataTypes:e.enabledRefMetadataTypes||[]}),this.props.enabledScrollMarkerTypes!==e.enabledScrollMarkerTypes&&this.setState({enabledScrollMarkerTypes:e.enabledScrollMarkerTypes||[]}),this.props.graphCommitDescDisplayMode!==e.graphCommitDescDisplayMode&&this.setState({graphCommitDescDisplayMode:e.graphCommitDescDisplayMode||m.R_.ALWAYS}),this.props.isContainerWindowFocused!==e.isContainerWindowFocused&&this.setState({dimRowsOfSelectedCommit:!1,isContainerWindowFocused:void 0===e.isContainerWindowFocused||e.isContainerWindowFocused}),this.props.downstreamsByUpstream!==e.downstreamsByUpstream&&(this.downstreamsByUpstream=e.downstreamsByUpstream||{},e.graphRows?.length&&(o=!0)),this.props.graphRows!==e.graphRows||this.props.cssVariables!==e.cssVariables||o){this.cleanEdgeCaches();const r=(0,x.Ld)(e.cssVariables);n=!0,this.setState({columnColorByColumn:this.getColumnColorByColumn(r),cssVariablesWithDefaults:r,numGraphColumns:this.getNumGraphColumns(r)}),this.cleanupSelections(),t=!0,(e.graphRows?.length<this.props.graphRows?.length||o)&&(this.lastLazyLoadHeight=0)}if(this.props.useAuthorInitialsForAvatars!==e.useAuthorInitialsForAvatars&&this.setState({useAuthorInitialsForAvatars:e.useAuthorInitialsForAvatars}),this.props.shaLength!==e.shaLength&&this.setState({shaLength:e.shaLength}),this.props.hasMoreCommits===e.hasMoreCommits&&this.props.onShowMoreCommits===e.onShowMoreCommits||this.setState({hasMoreCommits:e.hasMoreCommits||!1},(()=>this.loadMoreCommitsIfNecessary(this.graphHeight,this.state.hasMoreCommits))),this.props.isLoadingRows!==e.isLoadingRows&&this.setState({isLoadingRows:e.isLoadingRows||!1}),this.props.rowsStats!==e.rowsStats&&(this.rowsStats=e.rowsStats,this.updateRowStatsConstraints(),this.setState({rowsStats:e.rowsStats})),this.props.rowsStatsLoading!==e.rowsStatsLoading&&this.setState({rowsStatsLoading:e.rowsStatsLoading||!1}),this.props.workDirStats!==e.workDirStats&&(this.workDirStats=e.workDirStats||m.OR,!(0,z.Kk)(this.props.workDirStats)&&(0,z.Kk)(e.workDirStats)||(0,z.Kk)(this.props.workDirStats)&&!(0,z.Kk)(e.workDirStats)?(n=!0,this.setState({workDirStats:this.workDirStats})):this.setState({workDirStats:this.workDirStats})),this.props.avatarUrlByEmail!==e.avatarUrlByEmail&&(this.setState({avatarUrlByEmail:e.avatarUrlByEmail||{}}),this.requestedMissingAvatars={}),this.props.refMetadataById!==e.refMetadataById&&(this.setState({refMetadataById:e.refMetadataById}),this.requestedMissingRefsMetadata={}),this.props.columnsSettings!==e.columnsSettings){if(e.columnsSettings?.[m.Wm]?.mode!==this.props.columnsSettings?.[m.Wm]?.mode){this.cleanEdgeCaches(),this.graphZoneModeConstants=(0,z.Ez)(e.columnsSettings?.[m.Wm]?.mode),this.updateCommitZoneContentWidthFromChange();const o=this.graphZonesByType[m.Wm];o.currentWidth=o.contentWidth,o.preferredWidth=o.contentWidth,o.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,o.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.loadEdgesBySha(),t=!0}e.columnsSettings&&(this.updateZonesFromSettings(e.columnsSettings),t=!0)}if(this.props.contexts!==e.contexts&&this.setState({contexts:e.contexts}),this.props.pendingCommitMessageSummary!==e.pendingCommitMessageSummary&&this.setState({pendingCommitMessageSummary:e.pendingCommitMessageSummary||""}),this.props.enableShowHideRefsOptions!==e.enableShowHideRefsOptions&&this.setState({enableShowHideRefsOptions:e.enableShowHideRefsOptions}),this.props.createRefFormData!==e.createRefFormData&&(e.createRefFormData?.sha&&this.selectCommits([e.createRefFormData?.sha],!1,!0),this.setState({createRefFormData:e.createRefFormData})),n&&(this.processRows(e.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})),t){this.updateCommitZoneContentWidthFromChange();const e=this.getOrderedActiveGraphZones();this.expandLastZoneMinWidthForScrollbar(e),this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),this.setState({graphZones:e})}}componentWillUnmount(){window.removeEventListener("keydown",this.onWindowKeyDown),window.removeEventListener("keyup",this.onWindowKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.resizeObserver.disconnect()}onGraphVisibleRowsUpdatedThrottled=(0,z.P2)((()=>this.onGraphVisibleRowsUpdated()),250,20);onBlurWipNodeInput=e=>{this.props.onBlurWipNodeInput&&this.props.onBlurWipNodeInput(e)};onDoubleClickRef=(e,t,o,n)=>{this.props.onDoubleClickGraphRef&&this.props.onDoubleClickGraphRef(e,t,this.processedGraphRowBySha[o],n)};onFocusWipNodeInput=e=>{this.props.onFocusWipNodeInput&&this.props.onFocusWipNodeInput(e)};onFilterColumnClick=(e,t)=>{this.props.onFilterColumnClick&&this.props.onFilterColumnClick(e,t)};onCurrentlyHoveredGraphCommit=(e,t,o,n)=>{n!==o&&(this.props.onGraphRowHovered&&this.props.onGraphRowHovered(e,t,this.processedGraphRowBySha[o]),this.setState({currentlyHoveredCommitSha:o}))};onClearCurrentlyHoveredGraphCommit=(e,t,o,n)=>{n&&(this.props.onGraphRowUnhovered&&this.props.onGraphRowUnhovered(e,t,this.processedGraphRowBySha[o]),this.setState({currentlyHoveredCommitSha:void 0}))};onGraphColumnReOrdered=(e,t)=>{const o=this.graphZoneOrdering.indexOf(e);let n=t?this.graphZoneOrdering.indexOf(t):this.graphZoneOrdering.length-1;t&&o<n&&(n-=1),this.graphZoneOrdering.splice(o,1),this.graphZoneOrdering.splice(n,0,e);const r={};this.graphZoneOrdering.forEach(((e,t)=>{this.graphZonesByType[e].order=t,r[e]=this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e])})),this.setState({graphZones:this.initializeGraphZones(r,this.graphZoneOrdering,this.graphWidth)}),this.props.onGraphColumnsReOrdered&&this.props.onGraphColumnsReOrdered(r)};onGraphZoneResize=(0,z.h)(((e,t)=>{if(t?.width){const o=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(o,e,t,!1),this.setState({graphZones:o})}}));onGraphZoneResizeEnd=(0,z.h)(((e,t)=>{if(t?.width){const o=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(o,e,t,!0),this.setState({graphZones:o})}this.props.onColumnResized&&this.props.onColumnResized(e.type,this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e.type]))}));onPopupGraphHeaderContextMenu=(e,t)=>{this.props.onPopupGraphHeaderContextMenu&&this.props.onPopupGraphHeaderContextMenu(e,t)};onSettingsClick=(e,t)=>{this.props.onSettingsClick&&this.props.onSettingsClick(e,t)};onMessageChange=e=>{this.setState({pendingCommitMessageSummary:e}),this.props.onMessageChange&&this.props.onMessageChange(e)};onRefBeginDrag=(e,t)=>{this.props.onRefBeginDrag&&this.props.onRefBeginDrag(e,t)};onRefCanDrag=e=>!!this.props.onRefCanDrag&&this.props.onRefCanDrag(e);onRefCanDrop=(e,t,o)=>!!this.props.onRefCanDrop&&this.props.onRefCanDrop(e,t,o);onRefCreate=(e,t,o,n)=>{this.props.onRefCreate&&this.props.onRefCreate(e,t,o,n)};onRefCreateCancel=(e,t,o,n)=>{this.props.onRefCreateCancel&&this.props.onRefCreateCancel(e,t,o,n)};onRefCreateContextMenu=(e,t,o,n,r)=>{this.props.onRefCreateContextMenu&&this.props.onRefCreateContextMenu(e,t,o,n,r)};onRefDragEnter=(e,t,o)=>{this.props.onRefDragEnter&&this.props.onRefDragEnter(e,t,o)};onRefDragLeave=(e,t,o)=>{this.props.onRefDragLeave&&this.props.onRefDragLeave(e,t,o)};onRefDrop=(e,t,o)=>{this.props.onRefDrop&&this.props.onRefDrop(e,t,o)};onRefEndDrag=(e,t,o)=>{this.props.onRefEndDrag&&this.props.onRefEndDrag(e,t,o)};onZoneRowClick(e,t,o){if(0===e.button){const{enableMultiSelection:t}=this.props,n=this.isMacOSPlatform();t&&(!n&&e.ctrlKey||n&&e.metaKey)?this.selectCommits([o],!0,!1):t&&e.shiftKey||this.selectCommits([o],!1,!1)}}onClickRef=(e,t,o,n)=>{this.onZoneRowClick(e,m.jZ,o),this.props.onClickGraphRef&&this.props.onClickGraphRef(e,t,this.processedGraphRowBySha[o],n)};onClickCommit=(e,t,o)=>{if(this.onZoneRowClick(e,t,o),this.props.onClickGraphRow){const n=this.processedGraphRowBySha[o];this.props.onClickGraphRow(e,t,n)}};onDoubleClickCommit=(e,t,o)=>{if(this.props.onDoubleClickGraphRow){const n=this.processedGraphRowBySha[o];this.props.onDoubleClickGraphRow(e,t,n)}};onWindowKeyUp=e=>{switch(e.keyCode){case 91:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!1);break;case 17:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!1)}};onWindowBlur=()=>{this.dimRowsOfSelectedCommit(!1)};onWindowKeyDown=e=>{switch(e.keyCode){case 91:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!0);break;case 17:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!0);break;default:this.state.dimRowsOfSelectedCommit&&this.dimRowsOfSelectedCommit(!1)}};onKeyDown=e=>{switch(e.keyCode){case 38:this.selectPrevious(e.shiftKey);break;case 40:this.selectNext(e.shiftKey);break;case 72:this.selectHead(e.shiftKey)}};onRefNodeHovered=(e,t,o)=>{(!this.props.showGhostRefsOnRowHover||(0,z.PY)(this.isSelectedBySha,o)||this.processedGraphRowBySha[o]?.hasRefs)&&(this.props.onGraphRefNodeHovered&&this.props.onGraphRefNodeHovered(e,t,this.processedGraphRowBySha[o]),this.setState({hoveredRefGroup:[...t]}))};onRefNodeUnhovered=(e,t,o)=>{this.props.onGraphRefNodeUnhovered&&this.props.onGraphRefNodeUnhovered(e,t,this.processedGraphRowBySha[o]),this.setState({hoveredRefGroup:void 0})};onRefShorthandChange=e=>{const{createRefFormData:t}=this.state;this.setState({createRefFormData:{...t,shorthand:e}})};onRefZoneHovered=e=>{this.setState({hoveredRefZoneSha:e})};onRefZoneUnhovered=()=>{this.setState({hoveredRefZoneSha:void 0})};onShowMoreCommits=()=>{this.props.onShowMoreCommits&&this.shouldFireShowMoreCommits&&(this.props.onShowMoreCommits(),this.shouldFireShowMoreCommits=!1,setTimeout((()=>{this.shouldFireShowMoreCommits=!0}),250))};onScrollForZone=(e,t,o,n,r)=>{this.setScroll(e,t),this.props.onScrollForZone&&this.props.onScrollForZone(e,t),this.loadMoreCommitsIfNecessary(n,r)};loadMoreCommitsIfNecessary(e,t){if(!this.props.onShowMoreCommits||!t||!e||e<0||!this.scrollTop||this.scrollTop<0||!this.orderedGraphRows?.length)return;const o=this.scrollTop+e,n=this.orderedGraphRows.length*m.$0;o>n-m.qG&&o>this.lastLazyLoadHeight&&(this.lastLazyLoadHeight=Math.min(o,n-1),this.onShowMoreCommits())}onScrollToRowCausedUpdateForRefZone=(e,t)=>{this.setScroll(e,t),this.props.onScrollToRowCausedUpdateForRefZone&&this.props.onScrollToRowCausedUpdateForRefZone(e,t)};onCommitContextMenu=(e,t,o)=>{if(this.props.onRowContextMenu){const n=this.processedGraphRowBySha[o];this.props.onRowContextMenu(e,t,n)}};onRefContextMenu=(e,t,o)=>{if(this.props.onRefContextMenu){const n=this.processedGraphRowBySha[o];this.props.onRefContextMenu(e,t,n)}};selectCommits(e,t,o){t||Object.keys(this.isSelectedBySha).forEach((t=>{e.includes(t)||delete this.isSelectedBySha[t]}));const n=this.processedGraphRowBySha?Object.keys(this.processedGraphRowBySha):[];if(e.forEach((e=>{n.includes(e)&&(this.isSelectedBySha[e]=!t||!this.isSelectedBySha[e]||!this.isSelectedBySha[e],this.isSelectedBySha[e]&&this.selectSha(e,o))})),this.props.onSelectGraphRows){const e=this.getSelectedShas().map((e=>this.processedGraphRowBySha[e]));this.props.onSelectGraphRows(e)}this.updateMarkerRowIndices(["selection"]),this.setState({processedRows:[...this.orderedGraphRows]})}getCommitZoneContentWidthBetweenGutters(){return this.getCurrentWidthByZone(m.Wm)-this.getLeftGutterWidth()-this.getRightGutterWidth()}getSelectedShas(){const e=[];return Object.keys(this.isSelectedBySha).forEach((t=>{this.isSelectedBySha[t]&&e.push(t)})),e}getExcludeRemotesByName(){const e={};return Object.values(this.excludeRefsById).forEach((t=>{t.type===G.V.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)})),e}getIncludeOnlyRemotesByName(){const e={};return Object.values(this.includeOnlyRefsById).forEach((t=>{t.type===G.V.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)})),e}clearScrollToIndex=(0,z.h)((()=>{this.setState({scrollToIndex:void 0})}));getTopAndBottomVisibleRowIndex(){const{graphHeight:e,orderedGraphRows:t,scrollTop:o}=this,n=e||0;if(!n||!t||!t.length)return{top:-1,bottom:-1};const r=(n-m.rl)/m.$0,i=o/m.$0,s=i+(r-1);return{top:Math.max(Math.floor(i),0),bottom:Math.min(Math.ceil(s),t.length-1)}}getOffsetSha(e){const t=this.graphHeight||0,o=this.props.scrollRowPadding||0;if(!o||!t)return e;let n=o;if(n<=0)return e;const r=this.getTopAndBottomVisibleRowIndex(),i=r.top,s=r.bottom;if(-1===i||-1===s)return e;const a=Math.floor((s-i)/2);if(a<1)return e;n=Math.min(n,a);const l=this.orderedGraphRows.length,c=this.orderedGraphRows.findIndex((t=>t.sha===e));if(!c||!this.orderedGraphRows.length)return e;const d=s-n<c;return i+n>c?this.orderedGraphRows[Math.max(c-n,0)].sha||e:d&&this.orderedGraphRows[Math.min(c+n,l-1)].sha||e}selectSha(e,t=!1){const o=this.processedGraphRowBySha[e]?.column||0,n=this.getScrollLeft(),r=this.getCommitZoneContentWidthBetweenGutters(),i=this.getCurrentWidthByZone(m.Wm),s=this.getCommitZoneContentWidth(),a=o*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,l=n-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/3<=a,c=a<=n+r,d=Math.max(0,s-i),h=l&&c?n:(0,F.u)(a-r/2,0,d);this.setScrollToSha(t?this.getOffsetSha(e):e,h),this.setState({scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex()},this.clearScrollToIndex)}updateWidthByZone(e,t,o){const n=this.getOrderedActiveGraphZones(),r=this.graphZonesByType[t],i=(0,z.C_)(r,n,e);if(r.currentWidth=i,t===m.Wm){const e=Math.max(0,this.getCommitZoneContentWidth()-r.currentWidth);this.getScrollLeft()>e&&this.setScrollLeft(e)}o&&(r.preferredWidth=i)}updateCommitZoneContentWidthFromChange(){const e=this.graphZonesByType[m.Wm];if(!e.isHidden){const t=this.getOrderedActiveGraphZones(),o=this.getCommitZoneContentWidth();e.contentWidth=o,e.maximumWidth=o,e.currentWidth>o&&(e.currentWidth=(0,z.C_)(e,t,o)),this.setState({graphZones:t})}}getCurrentWidthByZone(e,t=!0){const o=t?this.getVerticalScrollWidth(m.Wm,this.props.cssVariables,!0):0,n=this.graphZonesByType[e];return n&&!n.isHidden?n.currentWidth-o:0}getCommitZoneContentWidth(){return(this.maxColumns||1)*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT}getCommitZoneWidth(e=!0){const t=e?this.getVerticalScrollWidth(m.Wm,this.props.cssVariables,!0):0;if(this.graphZonesByType[m.Wm])return this.graphZonesByType[m.Wm].currentWidth-t;const{columnsSettings:o}=this.props;return o?.[m.Wm]?o[m.Wm].width-t:m.qi[m.Wm].minimumWidth-t}getSingleColumnModeFactor(){const e=this.maxColumns,t=this.getCurrentWidthByZone(m.Wm);return 1===e?0:(0,F.u)(1-(t-2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)}setClientHeight(e){this.clientHeight=e}getClientHeight(){return this.clientHeight}setScroll(e,t){this.setClientHeight(t.clientHeight),null!=t.scrollTop&&this.setScrollTop(t.scrollTop),e===m.Wm&&null!=t.scrollLeft&&this.setScrollLeft(t.scrollLeft)}getNonAdjustedScrollLeft(){return this.scrollLeft}setScrollLeft(e){this.scrollLeft!==e&&(this.scrollLeft=e,this.setState({scrollLeft:e}))}getScrollLeft(){const e=this.getNonAdjustedScrollLeft();return this.getCommitZoneContentWidth()!==this.getCommitZoneWidth()?e:0}setScrollTop(e){this.scrollTop!==e&&(this.scrollTop=e,this.setState({scrollTop:e}),this.onGraphVisibleRowsUpdatedThrottled())}getScrollTop(){return this.scrollTop}getScrollToSha(){return this.scrollToSha}setScrollToSha(e,t){this.scrollToSha=e,this.setScrollLeft(t),this.onGraphVisibleRowsUpdated()}getScrollToIndex(){const e=this.getScrollToSha();if(e){const t=this.processedGraphRowBySha[e]?.rowIndex;return void 0===t?this.orderedGraphRows.findIndex((t=>t.sha===e)):t}return-1}getScrollToAlignment(){const e=this.getClientHeight(),t=this.getScrollTop(),o=this.getScrollToIndex();return(0,z.Ry)(m.$0,e,t,o)}getMinNodeOffset(){const e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return(1-t)*(e+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT)+t*(e+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getHorizontalScrollHeight(e,t,o){return this.graphZonesByType[e]?(0,z.KI)(e,this.getOrderedActiveGraphZones(),this.orderedGraphRows,t,o):0}getVerticalScrollWidth(e,t,o){return this.graphZonesByType[e]?(0,z.Ne)(e,this.getOrderedActiveGraphZones(),this.props.hasMoreCommits,this.props.isLoadingRows,this.graphHeight,this.orderedGraphRows,this.props.enabledScrollMarkerTypes?.length>0,t,o):0}getMaxNodeOffset(){const e=this.getCurrentWidthByZone(m.Wm),t=this.getScrollLeft(),o=this.getSingleColumnModeFactor();return(1-o)*(e+t+(this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH))+o*(t+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getAbsoluteNodeLeftByColumn(){const e={};for(let t=0;t<=this.maxColumns;t+=1)e[t]=this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH*t;return e}getNodeOffsetByColumn(){const e=this.getMinNodeOffset(),t=this.getMaxNodeOffset(),o=this.getAbsoluteNodeLeftByColumn(),n={};return Object.keys(o).forEach((r=>{const i=o[r];n[r]=(0,F.u)(i,e,t)})),n}getMaxNodeLeft(){return this.getScrollLeft()+(this.getCurrentWidthByZone(m.Wm)-this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)}getMinNodeLeft(){const e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return e+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT+t*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getRightGutterSlideOutFactor(){const e=this.getCurrentWidthByZone(m.Wm),t=this.getCommitZoneContentWidth(),o=this.getSingleColumnModeFactor();return(0,F.u)((e-(t-(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)))/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)+o/2}getNodeOpacityByColumn(){const e=this.getMinNodeLeft(),t=this.getMaxNodeLeft(),o=this.getAbsoluteNodeLeftByColumn(),n=this.getRightGutterSlideOutFactor(),r=this.getSingleColumnModeFactor(),i={};return Object.keys(o).forEach((s=>{const a=o[s],l=a-(e-r*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH),c=t+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-(a+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH*(1-n)),d=Math.min(l,c);i[s]=m.l3+(1-m.l3)*Math.max(d/(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2),r)})),i}getLeftGutterWidth(){const e=this.getSingleColumnModeFactor();return this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+e*(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2)}getRightGutterWidth(){return(1-this.getRightGutterSlideOutFactor())*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getBoxShadowAlphaForGutter(e,t){return.4*(1-Math.max(e,t))}getLeftGutterBoxShadowAlpha(e){const t=this.getScrollLeft(),o=this.getSingleColumnModeFactor();return e*this.getBoxShadowAlphaForGutter(o,(0,F.u)(1-t/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1))}getRightGutterBoxShadowAlpha(e){const t=this.getSingleColumnModeFactor(),o=this.getRightGutterSlideOutFactor();return e*this.getBoxShadowAlphaForGutter(t,o)}updateMarkerRowIndices(e){const t={...this.markerRowIndices};if(e.forEach((e=>{t[e]=[]})),e.includes("selection")&&this.getSelectedShas().forEach((e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&t.selection.push(this.processedGraphRowBySha[e].rowIndex)})),e.includes("highlights")){const e=this.state?.highlightedShas||this.props.highlightedShas||{};Object.keys(e).forEach((e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&t.highlights.push(this.processedGraphRowBySha[e].rowIndex)}))}this.markerRowIndices=t}getMarkerColors(){const e=getComputedStyle(document.documentElement),t={};return Object.values(m.Qh).forEach((o=>{const n=e.getPropertyValue(o.colorCssKey).trim();n&&(t[o.type]=n)})),t}initializeGraphZones(e,t,o){this.graphZonesByType={};const n=[];let r=0;t.forEach(((t,o)=>{const i=e?e[t]:void 0,s=m.qi[t],a=i?.width?i.width:s.minimumWidth,l={...s,type:t,currentWidth:a,preferredWidth:a,isHidden:i?.isHidden||!1,mode:i?.mode,order:s.isCustomizable&&void 0!==i?.order?i?.order:o};i?.isHidden||(r+=l.currentWidth),t===m.Wm&&(l.contentWidth=this.getCommitZoneContentWidth(),l.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,l.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.maxColumns>0&&(l.maximumWidth=l.contentWidth)),this.graphZonesByType[t]=l,l?.isHidden||n.push(l)}));const i=n[n.length-1];if(i){const e=(0,z.Zg)(this.props.cssVariables,!0),t=i.minimumWidth+e;(null==i.maximumWidth||i.maximumWidth>=t)&&(i.minimumWidth=t,null!=i.showIconWidth&&(i.showIconWidth+=e),n[n.length-1]=i)}for(n.forEach((e=>{const t=(0,z.C_)(e,n,e.currentWidth);t!==e.currentWidth&&(r-=e.currentWidth,e.currentWidth=t,r+=t)}));r>o;){const e=(0,z.tC)(n);if(!e)break;const t=e.currentWidth,i=r-o,s=Math.max(e.minimumWidth,t-i),a=t-s;this.graphZonesByType[e.type].currentWidth=s,r-=a}if(r<o){const e=t[t.length-1],r=o-(0,z.iM)(n,e);this.graphZonesByType[e].currentWidth=r}return n}maybeSortGraphZoneOrderingFromSettings(e){this.graphZoneOrdering.every((t=>void 0!==e?.[t]?.order))&&this.graphZoneOrdering.sort(((t,o)=>e[t].order<e[o].order?-1:e[t].order>e[o].order?1:0))}updateZonesFromSettings(e){let t=!1;this.graphZoneOrdering.forEach(((o,n)=>{const r=this.graphZonesByType[o],i=e?.[r.type];i&&(i.isHidden!==r.isHidden&&(t=!0,r.type!==m.WD||i.isHidden||this.updateRowStatsConstraints()),r.isHidden=i.isHidden,r.order=r.isCustomizable&&void 0!==i?.order?i?.order:n,r.mode=i.mode,r.preferredWidth=i.width??r.preferredWidth,r.currentWidth=r.preferredWidth)})),t&&this.graphZoneOrdering.forEach((e=>{const t=this.graphZonesByType[e];t.currentWidth=t.minimumWidth}))}getEdgeColumnMaxes(e){let t=0;const o=this.processedGraphRowBySha[e]?.edges||{};return Object.keys(o).forEach((e=>{t=Math.max(t,parseInt(e,10))})),t}getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t){const o={};let n,r,i,s;return Object.keys(t).forEach((a=>{n=t[a],r=n.passThrough,i=n.starting,s=r&&!g(r.type)?r:i&&!g(i.type)?i:r||i||void 0,s&&(s.parentSha===e.sha?o[a]={ending:s}:o[a]={passThrough:s})})),o}getFinalEdgeStateForGraphAndRow(e,t){const o=this.getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t),n=this.getStartingEdgesByColumn(e);let r;return Object.keys(n).forEach((e=>{o[e]||(o[e]={ending:void 0,passThrough:void 0,starting:void 0}),r=o[e],r.starting=n[e]})),o}loadEdgesBySha(){this.maxColumns=0,this.orderedGraphRows.forEach(((e,t)=>{const o=this.orderedGraphRows[t-1],n=o&&this.processedGraphRowBySha[o.sha]?.edges?this.processedGraphRowBySha[o.sha].edges:{};this.processedGraphRowBySha[e.sha].edges=this.getFinalEdgeStateForGraphAndRow(e,n);const r=this.getEdgeColumnMaxes(e.sha);this.processedGraphRowBySha[e.sha].edgeColumnMaxes=r,r>this.maxColumns&&(this.maxColumns=r)}))}processRows(e){this.loadRowsbySha(e||[]),this.loadEdgesBySha()}getStartingEdgesByColumn(e){const t={},o=e.parents;if(o.length>0){const n=e.type,r=this.processedGraphRowBySha[e.sha]?.column;void 0!==r&&(t[r]={parentSha:o[0],type:n});for(let e=1;e<o.length;e+=1){const r=o[e],i=this.processedGraphRowBySha[r]?.column;void 0!==i&&(t[i]={parentSha:r,type:n})}}return t}formatCommitDateTimeCallback=(e,t)=>this.props.formatCommitDateTime?this.props.formatCommitDateTime(e,t):function(e,t,o,n=!0){const r=`${o??""}:${t=t??void 0}`;let i=T.get(r);if(null==i){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=_.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(S))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let s;s=null==o?R:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(s,e),n&&T.set(r,i)}if(null==t||_.test(t))return i.format(e);function s(e){const t=`${o??""}:time:${e}`;let r=T.get(t);if(null==r){const i={localeMatcher:"best fit",timeStyle:e};let s;s=null==o?R:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(s,i),n&&T.set(t,r)}return r}const a=i.formatToParts(e);return t.replace(S,((t,o,n,r,i,l,c,d,h,u,p,f,m,g,b)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in b){const o=b[t];if(null==o)continue;const n=a.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return E(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=s("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??n)?.value??""}`}return n?.value??""}return""}))}(e,m.It);formatCommitMessageCallback=e=>this.props.formatCommitMessage?this.props.formatCommitMessage(e):e;formatRefShorthandCallback=(e,t,o,n)=>this.props.formatRefShorthand?this.props.formatRefShorthand(e,t,o,n):e.replace(/\s/g,"");isRefShorthandValidCallback=(e,t,o,n)=>!this.props.isRefShorthandValid||this.props.isRefShorthandValid(e,t,o,n);translateCallback=(e,...t)=>this.props.translate?this.props.translate(e,...t):L[e]?function(e,t){if(0===t.length)return e;let o=e;return t.forEach(((e,t)=>{const n=new RegExp(`\\{${t}\\}`,"g");o=o.replace(n,e)})),o}(L[e],t):`${e}`;getIconCallback=e=>this.props.getExternalIcon?this.props.getExternalIcon(e):a().createElement("span",null);onMissingAvatar=(e,t)=>{this.props.onEmailsMissingAvatarUrls&&!this.requestedMissingAvatars[e]&&(this.pendingMissingAvatars[e]=t,this.missingAvatarsTimer&&(clearTimeout(this.missingAvatarsTimer),this.missingAvatarsTimer=void 0),this.missingAvatarsTimer=setTimeout((()=>{const e={...this.pendingMissingAvatars};this.pendingMissingAvatars={};const t=Object.keys(e);if(t.length){for(const e of t)this.requestedMissingAvatars[e]=!0;this.props.onEmailsMissingAvatarUrls?.(e)}}),100))};onMissingRefMetadata=(e,t)=>{if(!this.props.onRefsMissingMetadata||this.requestedMissingRefsMetadata[e])return;const o=this.pendingMissingRefsMetadata[e]||[],n=t.filter((e=>!o.includes(e)));this.pendingMissingRefsMetadata[e]=[...o,...n],this.missingRefsMetadataTimer&&(clearTimeout(this.missingRefsMetadataTimer),this.missingRefsMetadataTimer=void 0),this.missingRefsMetadataTimer=setTimeout((()=>{const e={...this.pendingMissingRefsMetadata};this.pendingMissingRefsMetadata={};const t=Object.keys(e);if(t.length){for(const e of t)this.requestedMissingRefsMetadata[e]=!0;this.props.onRefsMissingMetadata?.(e)}}),100)};selectNext(e){const t=this.getSelectedShas(),o=t.length>0?t[t.length-1]:null;let n;if(e&&o){const e=this.processedGraphRowBySha[o];e?.parents?.length&&(n=e.parents[0])}else{const e=o?this.orderedGraphRows.findIndex((e=>e.sha===o)):-1,t=Math.min(e+1,this.orderedGraphRows.length-1);n=this.orderedGraphRows[t]?.sha}n&&this.selectCommits([n],!1,!0)}selectPrevious(e){const t=this.getSelectedShas(),o=t.length>0?t[0]:null;let n;if(e&&o){const e=this.childrenBySha[o];if(e?.length)for(let t=0;t<e.length;t+=1)if(t===e.length-1)n=e[t];else if(this.processedGraphRowBySha[e[t]]?.type!==f.kP){n=e[t];break}}else{const e=o?this.orderedGraphRows.findIndex((e=>e.sha===o)):-1,t=Math.max(-1,e-1);n=this.orderedGraphRows[t]?.sha,t<0&&(n=this.orderedGraphRows[0]?.sha)}n&&this.selectCommits([n],!1,!0)}selectHead(e){e&&this.headUpstreamSha?this.selectCommits([this.headUpstreamSha],!1,!0):this.headSha&&this.selectCommits([this.headSha],!1,!0)}getAvailableColumnAndUseIt(){let e=0;for(;this.columnsUsed[e];)e+=1;return this.columnsUsed[e]=!0,e}getColumns(e){this.hasMergeNodeChildBySha[e.sha]&&delete this.hasMergeNodeChildBySha[e.sha];const t=e.parents||[],o=this.columnsToFreeWhenFound[e.sha];if(void 0!==o)for(let e=0;e<o.length;e+=1)delete this.columnsUsed[o[e]];let n=0;const r=this.reserverInfoBySha[e.sha];let i,s;void 0!==r?.column?(n=r.column,delete this.reserverInfoBySha[e.sha]):n=this.getAvailableColumnAndUseIt();for(let o=0;o<t.length;o+=1)if(i=t[o],e.type===f.lH&&(this.hasMergeNodeChildBySha[i]=!0),s=this.reserverInfoBySha[i],0===o&&void 0!==s?.column&&s?.column!==n){const t=this.columnsToFreeWhenFound[i]||[],o=s?.type===f.kP&&e.type!==f.kP&&r?.newestDate>s?.newestDate;(s?.column>n||o)&&!this.hasMergeNodeChildBySha[i]?(this.reserverInfoBySha[i]={type:e.type,newestDate:r?.newestDate,column:n},t.push(s.column)):t.push(n),this.columnsToFreeWhenFound[i]=t}else void 0===s?.column&&(this.reserverInfoBySha[i]={type:e.type,newestDate:r?.column===n?r?.newestDate:e.date,column:0===o?n:this.getAvailableColumnAndUseIt()});return n}getFilteredHeadsForGraphRow(e,t){return e.heads.filter((e=>e.isCurrentHead||(t?void 0!==this.includeOnlyRefsById[(0,z.bY)(G.V.HEAD,e)]:!this.excludeByType.heads&&void 0===this.excludeRefsById[(0,z.bY)(G.V.HEAD,e)])))}getFilteredRemotesForGraphRow(e,t){return e.remotes.filter((e=>t?void 0!==this.includeOnlyRefsById[(0,z.bY)(G.V.REMOTE,e)]||!e.owner||void 0!==this.includeOnlyRemotesByName[e.owner]:(!this.excludeByType.remotes||e.owner&&this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0)&&void 0===this.excludeRefsById[(0,z.bY)(G.V.REMOTE,e)]&&(!e.owner||void 0===this.excludeRemotesByName[e.owner])))}getFilteredTagsForGraphRow(e,t,o){const n=t&&Object.values(this.includeOnlyRefsById).some((e=>e.type===G.V.TAG)),r=t&&(this.getFilteredHeadsForGraphRow(e,t).length>0||this.getFilteredRemotesForGraphRow(e,t).length>0);return e.tags.filter((e=>n?void 0!==this.includeOnlyRefsById[(0,z.bY)(G.V.TAG,e)]:!this.excludeByType.tags&&void 0===this.excludeRefsById[(0,z.bY)(G.V.TAG,e)]&&(!t||r||o)))}loadRowsbySha(e){this.orderedGraphRows=[],this.processedGraphRowBySha={},this.childrenBySha={},this.reserverInfoBySha={},this.columnsToFreeWhenFound={},this.columnsUsed={};const t=new Map,o={},n=[],r=[];this.branchUpstreamRowIndices=[];const i=[],s=[],a=[],l=[],c={};if((0,z.Kk)(this.workDirStats)&&e.length>0&&!(0,z.H1)(e[0].type)){const t=(0,z.DN)(e),o={sha:f.ch,parents:t?[t]:[],author:"",email:"",date:(new Date).getTime(),message:this.translateCallback("Graph-WorkInProgress"),type:f.ch,heads:[],remotes:[],tags:[]};this.workDirStats.context&&(o.contexts={row:this.workDirStats.context}),e.unshift(o)}else!(0,z.Kk)(this.workDirStats)&&e.length>0&&(0,z.H1)(e[0].type)&&e.shift();const d=Object.keys(this.includeOnlyRefsById).length>0;e.forEach(((e,h)=>{const u=this.childrenBySha[e.sha]?.length>0,p=e.heads?.length>0?this.getFilteredHeadsForGraphRow(e,d):[],m=e.remotes?.length>0?this.getFilteredRemotesForGraphRow(e,d):[],g=e.tags?.length>0?this.getFilteredTagsForGraphRow(e,d,Boolean(c[e.sha]||u)):[],b=e.parents?.length>0?e.parents.filter((e=>!o[e])):[],v=p.length>0||m.length>0||g.length>0,y=p.length>0||m.length>0;if(e.type!==f.o$&&e.type!==f.lH||c[e.sha]){if(e.type===f.kP&&this.excludeByType.stashes&&(o[e.sha]=!0),!o[e.sha]&&b.length>0){let e;for(e of b)c[e]=!0}}else e.type!==f.o$&&e.type!==f.lH||c[e.sha]||v||u||(o[e.sha]=!0);const w=o[e.sha],C=new H.A(this,{...e,heads:p,remotes:m,tags:g,parents:b},w?0:this.getColumns(e));if(!w){let o;const c=t.get(e.sha);c?.length&&(c.sort(((e,t)=>{if(e.parentIndexScore<t.parentIndexScore)return-1;if(e.parentIndexScore>t.parentIndexScore)return 1;if(e.parentIndexScore===t.parentIndexScore){if(e.rowEntered<t.rowEntered)return-1;if(e.rowEntered>t.rowEntered)return 1}return 0})),o=c[0],C.childRefs={heads:[...o?.heads||[]],remotes:[...o?.remotes||[]],tags:[...o?.tags||[]]},t.delete(e.sha));for(let n=0;n<b.length;n+=1){const r=b[n];this.childrenBySha[r]||(this.childrenBySha[r]=[]),this.childrenBySha[r].push(e.sha);let i=t.get(r);(y||o)&&void 0===i&&(i=[],t.set(r,i)),y?i?.unshift({sha:e.sha,parentIndexScore:n,rowEntered:h,heads:p,remotes:m,tags:g}):o&&i?.unshift({...o,parentIndexScore:n,rowEntered:h})}const d=this.orderedGraphRows.length;if(C.rowIndex=d,p.length>0&&(i.push(d),p.some((e=>e.isCurrentHead))&&(this.headSha=C.sha,n.push(d))),m.length>0){s.push(d);for(const e of m)e.current&&(r.push(d),this.headUpstreamSha=C.sha),this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0&&this.branchUpstreamRowIndices.push(d)}g.length>0&&a.push(d),e.type===f.kP&&l.push(d),this.orderedGraphRows.push(C)}this.processedGraphRowBySha[e.sha]=C})),this.markerRowIndices={...this.markerRowIndices,head:n,upstream:r,localBranches:i,remoteBranches:s,tags:a,stashes:l},clearInterval(this.timelinesInterval),this.updateTimelines(),this.timelinesInterval=setInterval((()=>{this.clearTimelines(),this.updateTimelines(),this.setState({processedRows:[...this.orderedGraphRows]})}),9e5),this.onGraphVisibleRowsUpdated()}updateRowStatsConstraints(){this.rowStatsConstraints=(0,z.L1)(null!=this.rowsStats?Object.values(this.rowsStats).map((e=>e.additions+e.deletions)):[])}updateTimelines(){const e=(0,z.yF)();Object.values(e).forEach((e=>{e.forEach((e=>{const{date:t}=e,o=this.orderedGraphRows.find((e=>e.date<t));o&&this.processedGraphRowBySha[o.sha]&&(this.processedGraphRowBySha[o.sha].timeLineEntry=e)}))}))}clearTimelines(){Object.keys(this.processedGraphRowBySha).forEach((e=>{this.processedGraphRowBySha[e].timeLineEntry&&delete this.processedGraphRowBySha[e].timeLineEntry}))}cleanupSelections(){const e=Object.keys(this.isSelectedBySha);for(let t=0;t<e.length;t+=1){const o=e[t];this.processedGraphRowBySha[o]||delete this.isSelectedBySha[o]}}getColumnColorByColumn(e){const t=this.getNumGraphColumns(e),o=this.maxColumns>t?this.maxColumns:t,n={};for(let i=0;i<=o;i+=1)if(i<t){const t=e[(0,x.a2)(i)];n[i]="rgba"===(r=u(t)).type?`rgba(${r.r}, ${r.g}, ${r.b}, ${Number(r.a.toFixed(2))})`:`hsla(${r.h}, ${(100*r.s).toFixed(2)}%, ${(100*r.l).toFixed(2)}%, ${Number(r.a.toFixed(2))})`}else{const e=n[i%t];n[i]=e}var r;return n}getNumGraphColumns(e){const t=e[C.i],o=Number.parseInt(t,m.uK);return Number.isNaN(o)?m.uK:o}expandLastZoneMinWidthForScrollbar(e){const t=e[e.length-1]?.type;if(!t)return;const o=(0,z.Zg)(this.props.cssVariables,!0),n=m.qi[t].minimumWidth+o,r=this.graphZonesByType[t];if(!r||null!=r.maximumWidth&&n>r.maximumWidth)return;r.minimumWidth=n;const i=m.qi[t].showIconWidth;null!=i&&(r.showIconWidth=i+o),r.currentWidth<r.minimumWidth&&(r.currentWidth=r.minimumWidth),r.preferredWidth<r.minimumWidth&&(r.preferredWidth=r.minimumWidth)}ensureZoneWidthsMatchGraphWidth(e,t){const o=(0,z.iM)(e);o>t&&this.shrinkZoneWidthsToFitWidth(e,t),o<t&&this.expandZoneWidthsToFitWidth(e,t)}shrinkZoneWidthsToFitWidth(e,t,o){let n=(0,z.iM)(e);for(;n>t;){const r=(0,z.tC)(e,o);if(!r)break;const i=(0,z.iM)(e,r.type);if(i+r.currentWidth>t){const o=(0,z.C_)(r,e,t-i);this.updateWidthByZone(o,r.type)}n=(0,z.iM)(e)}}getOrderedActiveGraphZones(){return this.graphZoneOrdering.sort(((e,t)=>this.graphZonesByType[e].order-this.graphZonesByType[t].order)).filter((e=>!this.graphZonesByType[e].isHidden)).map((e=>this.graphZonesByType[e]))}expandZoneWidthsToFitWidth(e,t,o){let n=(0,z.iM)(e);for(;n<t;){const r=(0,z.nv)(e,o);if(!r)break;const i=(0,z.iM)(e,r.type),s=r.maximumWidth?Math.min(r.maximumWidth,r.preferredWidth||1/0):r.preferredWidth||0;if(i+r.currentWidth<t){let o=t-i;!(0,z.SH)(r.type,e)&&o>s&&(o=s),o=(0,z.C_)(r,e,o),this.updateWidthByZone(o,r.type)}n=(0,z.iM)(e)}}onGraphHeaderRowMouseDown=e=>{1===e.button&&e.preventDefault()};onToggleRefNodesShown=(e,t,o,n)=>{t.forEach((e=>{o&&this.excludeRefsById[e.id]?delete this.excludeRefsById[e.id]:o||(this.excludeRefsById[e.id]=e)})),this.excludeRemotesByName=this.getExcludeRemotesByName(),this.props.onToggleRefsVisibilityClick&&this.props.onToggleRefsVisibilityClick(e,t,o,n?this.processedGraphRowBySha[n]:void 0),this.processRows(this.props.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})};cleanEdgeCaches(){te={},J={},X={},K={},O={}}onZoneEnter=(e,t,o,n)=>{t!==m.jZ&&(o&&n&&this.onRefNodeUnhovered(e,o,n),this.onRefZoneUnhovered())};adjustResizedGraphZone(e,t,o,n){if(o?.width){const r=t.currentWidth;this.updateWidthByZone(o.width,t.type,n);const i=(0,z.mb)(t.type,e),s=this.graphZonesByType[t.type];r>s.currentWidth&&this.expandZoneWidthsToFitWidth(e,this.graphWidth,i+1),r<s.currentWidth&&this.shrinkZoneWidthsToFitWidth(e,this.graphWidth,i-1)}}dimRowsOfSelectedCommit(e){this.setState({dimRowsOfSelectedCommit:e})}onGraphContainerBlurred=(e,t,o)=>{setTimeout((()=>{t&&o&&this.onRefNodeUnhovered(e,t,o),this.onRefZoneUnhovered()}),250)};onGraphContainerMouseEnter=e=>{this.props.onGraphMouseEnter&&this.props.onGraphMouseEnter(e)};onGraphContainerMouseLeave=e=>{this.props.onGraphMouseLeave&&this.props.onGraphMouseLeave(e)};onGraphResized=(0,z.h)(((e,t)=>{const o=Math.floor(t),n=Math.floor(e),r=o!==this.graphHeight,i=n!==this.graphWidth,s={};if(r&&(this.graphHeight=o,s.height=o),i){this.graphWidth=n;const e=this.getOrderedActiveGraphZones();this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),s.width=this.graphWidth,s.graphZones=e}(r||i)&&(this.setState(s),r&&this.onGraphVisibleRowsUpdatedThrottled(),this.props.onGraphResized&&this.props.onGraphResized(this.graphWidth,this.graphHeight))}));onGraphVisibleRowsUpdated(){if(!this.props.onGraphVisibleRowsChanged||!this.orderedGraphRows||!this.orderedGraphRows.length)return;const{top:e,bottom:t}=this.getTopAndBottomVisibleRowIndex();-1===e||-1===t||e>=this.orderedGraphRows.length||t>=this.orderedGraphRows.length||e===this.lastTopVisibleRowIndex&&t===this.lastBottomVisibleRowIndex||(this.lastTopVisibleRowIndex=e,this.lastBottomVisibleRowIndex=t,this.props.onGraphVisibleRowsChanged&&this.props.onGraphVisibleRowsChanged(this.orderedGraphRows[e],this.orderedGraphRows[t]))}getCurrentPlatform(){return this.props.platform||"darwin"}isMacOSPlatform(){return"darwin"===this.getCurrentPlatform()}getGraphColumnSettingFromZoneType(e){return{width:e.preferredWidth||0,isHidden:e.isHidden,mode:e.mode,order:e.order}}decorateWithHelmet=(e,t,o)=>{const n=(0,x.M)(t);return a().createElement(a().Fragment,null,a().createElement("style",{nonce:o},n),a().createElement("div",{className:"gk-graph"},e))};render(){const{columnsSettings:e,customFooterRow:t,isInUnsupportedRebase:o,isCommitting:n,repoPath:r,nonce:s,wipMessageEditable:l}=this.props,{avatarUrlByEmail:c,columnColorByColumn:d,contexts:h,createRefFormData:u,cssVariablesWithDefaults:p,currentlyHoveredCommitSha:f,dimMergeCommits:g,dimRowsOfSelectedCommit:b,enableShowHideRefsOptions:v,highlightRowsOnRefHover:y,showGhostRefsOnRowHover:w,showRemoteNamesOnRefs:C,enabledRefMetadataTypes:x,enabledScrollMarkerTypes:S,graphCommitDescDisplayMode:_,graphZones:T,hasMoreCommits:R,height:k,highlightedShas:E,hoveredRefGroup:O,hoveredRefZoneSha:I,themeOpacityFactor:M,isContainerWindowFocused:D,isLoadingRows:$,rowsStatsLoading:N,numGraphColumns:A,pendingCommitMessageSummary:P,processedRows:H,refMetadataById:L,useAuthorInitialsForAvatars:G,scrollToAlignment:F,scrollToIndex:B,scrollTop:W,scrollLeft:U,shaLength:j,width:V,workDirStats:Z}=this.state,q=i()("flex","graph-container"),K=(0,z.uM)(H),Y=(X=e=>K(e),({cellCache:e,cellRenderer:t,columnSizeAndPositionManager:o,columnStartIndex:n,columnStopIndex:r,deferredMeasurementCache:i,horizontalOffsetAdjustment:s,isScrolling:a,parent:l,rowSizeAndPositionManager:c,rowStartIndex:d,rowStopIndex:h,styleCache:u,verticalOffsetAdjustment:p,visibleColumnIndices:f,visibleRowIndices:m})=>{const g=[],b=e,v=o.areOffsetsAdjusted()||c.areOffsetsAdjusted(),y=!a&&!v;for(let e=d;e<=h;e+=1){const d=c.getSizeAndPositionOfCell(e);for(let c=n;c<=r;c+=1){const n=o.getSizeAndPositionOfCell(c),r=c>=f.start&&c<=f.stop&&e>=m.start&&e<=m.stop,h=`${e}-${c}`;let v;y&&u[h]?v=u[h]:i&&!i.has(e,c)?v={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(v={height:d.size,left:n.offset+s,position:"absolute",top:d.offset+p,width:n.size},u[h]=v);const w={columnIndex:c,isScrolling:a,isVisible:r,key:h,parent:l,rowIndex:e,style:v};let C;if(!a||s||p)C=t(w);else{const o=X(e);b[h]&&b[h].realKeyForCell===o||(b[h]={realKeyForCell:o,cell:t(w)}),C=b[h].cell}null!=C&&g.push(C)}}return g});var X;const Q=this.getLeftGutterWidth(),J=this.getRightGutterWidth(),ee=this.getRightGutterBoxShadowAlpha(M),te=this.getLeftGutterBoxShadowAlpha(M),oe=this.getNodeOffsetByColumn(),ne=this.getNodeOpacityByColumn(),re=(0,z.mb)(m.jZ,T),ie=(0,z.mb)(m.Wm,T),se=-1!==re&&-1!==ie&&ie-re==1,ae=!O,le={avatarUrlByEmail:c,createRefFormData:u,dimMergeCommits:g,dimRowsOfSelectedCommit:b,enableShowHideRefsOptions:v,highlightRowsOnRefHover:y,showGhostRefsOnRowHover:w,showRemoteNamesOnRefs:C,enabledRefMetadataTypes:x,enabledScrollMarkerTypes:S,isInUnsupportedRebase:o,isCommitting:n||!1,isContainerWindowFocused:D,pendingCommitMessageSummary:P,workDirStats:Z,repoPath:r,columnColorByColumn:d,currentlyHoveredCommitSha:f,cssVariables:p,graphCommitDescDisplayMode:_,graphZoneModeConstants:this.graphZoneModeConstants,graphZones:T,hasMoreCommits:R,height:k,highlightedShas:E,hoveredRefGroup:O,hoveredRefZoneSha:I,includeOnlyRefsById:this.includeOnlyRefsById,includeOnlyRemotesByName:this.includeOnlyRemotesByName,isLoadingRows:$,isSelectedBySha:this.isSelectedBySha,leftGutterBoxShadowAlpha:te,leftGutterWidth:Q,nodeOffsetByColumn:oe,nodeOpacityByColumn:ne,nonce:s,numGraphColumns:A,processedRows:H,processedGraphRowBySha:this.processedGraphRowBySha,refMetadataById:L,rightGutterBoxShadowAlpha:ee,rightGutterWidth:J,rowStatsConstraints:this.rowStatsConstraints,rowsStats:this.rowsStats,useAuthorInitialsForAvatars:G,scrollToAlignment:F,scrollLeft:U,scrollTop:W,shaLength:j,shouldShowRefLine:se,width:V,wipMessageEditable:l||!1,onMissingAvatar:this.onMissingAvatar,onMissingRefMetadata:this.onMissingRefMetadata,clearCurrentlyHoveredGraphCommit:this.onClearCurrentlyHoveredGraphCommit,setAsCurrentlyHoveredGraphCommit:this.onCurrentlyHoveredGraphCommit,onClickRef:this.onClickRef,onClickCommit:this.onClickCommit,onDoubleClickCommit:this.onDoubleClickCommit,onBlurWipNodeInput:this.onBlurWipNodeInput,onFocusWipNodeInput:this.onFocusWipNodeInput,onDoubleClickRef:this.onDoubleClickRef,onMessageChange:this.onMessageChange,onRefBeginDrag:this.onRefBeginDrag,onRefCanDrag:this.onRefCanDrag,onRefCanDrop:this.onRefCanDrop,onRefCreate:this.onRefCreate,onRefCreateCancel:this.onRefCreateCancel,onRefCreateContextMenu:this.onRefCreateContextMenu,onRefDragEnter:this.onRefDragEnter,onRefDragLeave:this.onRefDragLeave,onRefDrop:this.onRefDrop,onRefEndDrag:this.onRefEndDrag,onRefNodeHovered:this.onRefNodeHovered,onRefNodeUnhovered:this.onRefNodeUnhovered,onRefShorthandChange:this.onRefShorthandChange,onRefZoneHovered:this.onRefZoneHovered,onRefZoneUnhovered:this.onRefZoneUnhovered,onToggleRefNodesShown:this.onToggleRefNodesShown,onCommitContextMenu:this.onCommitContextMenu,onShowContextMenuForGroupedRef:this.onRefContextMenu,getExternalIcon:this.getIconCallback,formatCommitDateTime:this.formatCommitDateTimeCallback,formatRefShorthand:this.formatRefShorthandCallback,isRefShorthandValid:this.isRefShorthandValidCallback,translate:this.translateCallback},ce={[m.jZ]:es(le,K),[m.Wm]:Mi(le,K),[m.KE]:fi(le,K),[m.GF]:Br(le,K),[m.PL]:Wr(le,K),[m.av]:mi(le,K),[m.WD]:Hr(le,K),[m.Gn]:ts(le,K)},de=T.map(((e,o)=>a().createElement(Jo,{branchUpstreamRowIndices:this.branchUpstreamRowIndices,cellRenderersByIds:ce,columnIndex:o,customFooterRow:t,enabledScrollMarkerTypes:S,enableResizer:ae,getExternalIcon:this.getIconCallback,getKeyForCell:K,graphHeight:k-m.rl,graphWidth:V,graphZones:T,graphZoneType:e.type,hasMoreCommits:R,horizontalScrollHeight:this.getHorizontalScrollHeight(e.type,p),isLoadingRows:$,key:`${e.type}ColumnContainer`,markerColors:this.getMarkerColors(),markerRowIndices:this.markerRowIndices,onResize:this.onGraphZoneResize,onResizeEnd:this.onGraphZoneResizeEnd,onScroll:this.onScrollForZone,onScrollToRowCausedUpdate:e.type===m.jZ?this.onScrollToRowCausedUpdateForRefZone:void 0,onZoneEnter:t=>this.onZoneEnter(t,e.type,O,I),rowCount:H.length,scrollLeft:U,scrollToAlignment:e.type===m.jZ?F:void 0,scrollToIndex:e.type===m.jZ?B:void 0,scrollTop:W,smartCellRangeRenderer:Y,translate:this.translateCallback,verticalScrollWidth:this.getVerticalScrollWidth(e.type,p)}))),he=this.graphContainerRef?.current&&a().createElement(Or,{columnsSettings:e,dragAppendToContainer:this.graphContainerRef?.current,enableResizer:ae,enableShowHideRefsOptions:v,excludeRefsById:this.excludeRefsById,getExternalIcon:this.getIconCallback,graphZones:T,headerContext:h?.header,height:k,includeOnlyRefsById:this.includeOnlyRefsById,onColumnReOrdered:this.onGraphColumnReOrdered,onFilterColumnClick:this.onFilterColumnClick,onGraphZoneResize:this.onGraphZoneResize,onGraphZoneResizeEnd:this.onGraphZoneResizeEnd,onPopupGraphHeaderContextMenu:this.onPopupGraphHeaderContextMenu,onSettingsClick:this.onSettingsClick,onToggleRefNodesShown:this.onToggleRefNodesShown,repoPath:r,rowsStatsLoading:N,settingsContext:h?.settings,showRemoteNamesOnRefs:C,translate:this.translateCallback,width:V}),ue=a().createElement("div",{className:"graph-component","data-vscode-context":(0,z.q3)(h?.graph),onBlur:e=>this.onGraphContainerBlurred(e,O,I),onMouseEnter:this.onGraphContainerMouseEnter,onMouseLeave:this.onGraphContainerMouseLeave,ref:this.graphContainerRef,style:{height:"100%",width:"100%",position:"absolute"},tabIndex:-1},he,a().createElement("div",{className:E&&Object.keys(E).length?i()(q,"graph-highlighted"):q,id:"graph-container",onKeyDown:this.onKeyDown,onMouseDown:this.onGraphHeaderRowMouseDown,style:{height:k,width:V},tabIndex:-1},de));return this.decorateWithHelmet(ue,p,s)}}var ns=os},7154:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(6689),r=o.n(n),i=o(5191);class s extends r().PureComponent{horizontalScrollRef=r().createRef();scrollabbleContentRef=r().createRef();verticalScrollRef=r().createRef();outerHorizontalScrollRef=r().createRef();updateScrollbarValues(e,t){this.horizontalScrollRef?.current&&(this.horizontalScrollRef.current.scrollLeft=e||0),this.verticalScrollRef?.current&&(this.verticalScrollRef.current.scrollTop=t||0)}componentDidUpdate(e){const{scrollLeft:t,scrollTop:o}=this.props;e.scrollLeft===t&&e.scrollTop===o||this.updateScrollbarValues(t,o)}onHorizontalScroll(e){this.props.onScroll&&this.props.onScroll({clientHeight:this.props.height||0,clientWidth:e.target.clientWidth,scrollHeight:this.getAdjustedContentHeight(),scrollLeft:e.target.scrollLeft,scrollTop:this.props.scrollTop||0,scrollWidth:e.target.scrollWidth})}onVerticalScroll(e){this.props.onScroll&&this.props.onScroll({clientHeight:e.target.clientHeight,clientWidth:this.props.width||0,scrollHeight:e.target.scrollHeight,scrollLeft:this.props.scrollLeft||0,scrollTop:e.target.scrollTop,scrollWidth:this.props.contentWidth||0})}onWheel(e){if(!this.props.onScroll||!this.verticalScrollRef.current&&!this.props.forceOnWheel)return;const t=this.props.scrollTop||0;let o=t+e.deltaY;o=o>=0?o:0,o>t&&this.verticalScrollRef?.current&&(0,i.BL)(this.verticalScrollRef.current)&&(o=t),o!==this.props.scrollTop&&this.props.onScroll({clientHeight:this.props.height||0,clientWidth:this.props.width||0,scrollHeight:this.getAdjustedContentHeight(),scrollLeft:this.props.scrollLeft||0,scrollTop:o>=0?o:0,scrollWidth:this.props.contentWidth||0})}componentDidMount(){this.updateScrollbarValues(this.props.scrollLeft,this.props.scrollTop)}hasHorizontalScroll(){const{contentWidth:e,displayHorizontalScrollbar:t,forceHorizontalScrollbar:o,width:n}=this.props;return o||t&&n<e}hasVerticalScroll(){const{displayVerticalScrollbar:e,forceVerticalScrollbar:t,height:o}=this.props;return t||e&&o<this.getAdjustedContentHeight()}getHorizontalScrollbarTickness(){return parseInt(this.outerHorizontalScrollRef.current?.clientHeight,10)||0}getAdjustedContentHeight(){return this.props.contentHeight+this.getHorizontalScrollbarTickness()}adjustScrollWhileDragging(e){const t=this.getAdjustedContentHeight();if(!this.scrollabbleContentRef.current||this.props.height>=t||!this.props.onScroll)return;const o=this.scrollabbleContentRef.current.getBoundingClientRect(),n=e.clientY-o.top,r=Math.abs(t-this.props.height);let i;if(this.props.scrollTop>0&&n<=20){const e=this.props.scrollTop-20;i={clientHeight:o.height,clientWidth:o.width,scrollHeight:r,scrollLeft:this.props.scrollLeft||0,scrollTop:e>0?e:0,scrollWidth:this.props.contentWidth||0}}if(this.props.scrollTop<r&&n>=this.props.height-20){const e=this.props.scrollTop+20;i={clientHeight:o.height,clientWidth:o.width,scrollHeight:r,scrollLeft:this.props.scrollLeft||0,scrollTop:e<r?e:r,scrollWidth:this.props.contentWidth||0}}i&&this.props.onScroll(i)}render(){const{children:e,contentHeight:t,contentWidth:o,forceHorizontalScrollbar:n,forceVerticalScrollbar:i,height:s,width:a}=this.props,l=this.hasVerticalScroll(),c=this.hasHorizontalScroll(),d=c&&r().createElement("div",{className:"scrollbar-outer horizontal",ref:this.outerHorizontalScrollRef,style:{top:`calc(${s}px - var(--scrollable-scrollbar-thickness))`,width:a}},r().createElement("div",{className:"scrollbar-inner horizontal_scrollbar",onScroll:e=>this.onHorizontalScroll(e),ref:this.horizontalScrollRef,style:{overflowX:n?"scroll":"auto",width:l?`calc(${a}px - var(--scrollable-scrollbar-thickness))`:a}},r().createElement("div",{style:{height:"1px",width:o}}))),h=l&&r().createElement("div",{className:"scrollbar-outer vertical",style:{height:s}},r().createElement("div",{className:"scrollbar-inner vertical_scrollbar",onScroll:e=>this.onVerticalScroll(e),ref:this.verticalScrollRef,style:{overflowY:i?"scroll":"auto",height:c?`calc(${s}px - var(--scrollable-scrollbar-thickness))`:s}},r().createElement("div",{style:{height:`calc(${t}px + var(--scrollable-scrollbar-thickness))`,width:"1px"}})));return r().createElement("div",{className:"scrollbar-container",onWheelCapture:e=>this.onWheel(e)},r().createElement("div",{className:"scrollable-content",onDragOverCapture:e=>this.adjustScrollWhileDragging(e),ref:this.scrollabbleContentRef},e),d,h)}}var a=s},827:(e,t,o)=>{o.d(t,{Gu:()=>c,S7:()=>r,br:()=>s,ch:()=>l,kP:()=>a,lH:()=>i,o$:()=>n});const n="commit-node",r="merge-conflict-node",i="merge-node",s="unsupported-rebase-warning-node",a="stash-node",l="work-dir-changes";var c=(e=>(e.RowEntry="rowEntry",e.Tooltip="tooltip",e))(c||{})},8289:()=>{},376:(e,t,o)=>{o.d(t,{C:()=>r,i:()=>n});const n="--num-columns-supported",r={"--graph-row-height":"22px","--font-default":"'Open Sans', Arial, sans-serif !important","--font-monospace":"'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace","--font-size":"62.5%","--fs-1":"1rem","--fs-2":"1.2rem","--fs-3":"1.4rem","--fs-4":"1.6rem","--fs-5":"1.8rem","--fs-6":"2rem","--fs-7":"2.4rem","--button-xs-padding-y":".15rem","--button-xs-padding-x":".25rem","--button-small-padding-y":".25rem","--button-small-padding-x":".5rem","--button-medium-padding-y":".5rem","--button-medium-padding-x":".75rem","--button-large-padding-y":"1rem","--button-large-padding-x":"1.25rem","--button-radius":".2rem","--input-radius":"3px","--about-modal-bg-color":"#e2e4e9","--about-modal-width":"650px","--label__purple-color-f25":"rgba(197,23,182,0.25)","--registration-modal-width":"400px","--file-history-header-height":"35px","--shop-modal-width":"95vw","--shop-modal-height":"95vh","--scrollable-scrollbar-thickness":"14px","--mini-commit-col-left-width":"30px","--mini-commit-col-middle-padding":"6px","--mini-commit-col-right-width":"56px","--fuzzy-finder-repo-color":"rgba(46,206,157,0.1)","--fuzzy-finder-checkout-color":"rgba(6,105,247,0.1)","--fuzzy-finder-history-color":"rgba(197,23,182,0.1)","--handle-width":"7px","--shadow-color":"rgba(0,0,0,0.4)","--graph-color-5-f10":"rgba(205,1,1,0.1)","--graph-color-6-f10":"rgba(242,93,46,0.1)","--graph-color-7-f10":"rgba(242,202,51,0.1)","--graph-color-8-f10":"rgba(123,217,56,0.1)","--graph-color-9-f10":"rgba(46,206,157,0.1)","--graph-color-0-f10":"rgba(21,160,191,0.1)","--graph-color-1-f10":"rgba(6,105,247,0.1)","--graph-color-2-f10":"rgba(142,0,194,0.1)","--graph-color-3-f10":"rgba(197,23,182,0.1)","--graph-color-4-f10":"rgba(217,1,113,0.1)","--graph-color-5-f50":"rgba(205,1,1,0.5)","--graph-color-6-f50":"rgba(242,93,46,0.5)","--graph-color-7-f50":"rgba(242,202,51,0.5)","--graph-color-8-f50":"rgba(123,217,56,0.5)","--graph-color-9-f50":"rgba(46,206,157,0.5)","--graph-color-0-f50":"rgba(21,160,191,0.5)","--graph-color-1-f50":"rgba(6,105,247,0.5)","--graph-color-2-f50":"rgba(142,0,194,0.5)","--graph-color-3-f50":"rgba(197,23,182,0.5)","--graph-color-4-f50":"rgba(217,1,113,0.5)","--axo-orange":"#e75225","--axo-ink":"#141422","--axo-cream":"#f9efc1","--axo-yellow":"#d8c13a","--info-bar-height":"26px","--left-panel-header-height":"60px","--toolbar-height":"48px","--toolbar-border":"1px","--toolbar-item-height":"calc(var(--toolbar-height, 0px) - var(--toolbar-border, 1px))","--expand-detail-panel-transition":"flex-grow 250ms ease-in-out","--conflict-left-color":"rgba(21,160,191,0.25)","--conflict-right-color":"rgba(242,202,51,0.25)","--conflict-output-color":"rgba(197,23,182,0.25)","--graph-color-5-bg50":"#751012","--graph-color-6-bg50":"#873e29","--graph-color-7-bg50":"#87742b","--graph-color-8-bg50":"#4c7c2e","--graph-color-9-bg50":"#257660","--graph-color-0-bg50":"#195f71","--graph-color-1-bg50":"#11448d","--graph-color-2-bg50":"#550f73","--graph-color-3-bg50":"#711b6d","--graph-color-4-bg50":"#7b104a","--graph-color-5-bg45":"#6c1114","--graph-color-6-bg45":"#7c3a28","--graph-color-7-bg45":"#7c6b2a","--graph-color-8-bg45":"#47722c","--graph-color-9-bg45":"#246d5a","--graph-color-0-bg45":"#195969","--graph-color-1-bg45":"#124082","--graph-color-2-bg45":"#4f116b","--graph-color-3-bg45":"#681b65","--graph-color-4-bg45":"#711146","--graph-color-5-bg25":"#48171b","--graph-color-6-bg25":"#522e26","--graph-color-7-bg25":"#524927","--graph-color-8-bg25":"#344d28","--graph-color-9-bg25":"#214a42","--graph-color-0-bg25":"#1a3f4a","--graph-color-1-bg25":"#173158","--graph-color-2-bg25":"#39174b","--graph-color-3-bg25":"#461c48","--graph-color-4-bg25":"#4b1737","--graph-color-5-bg15":"#371a1e","--graph-color-6-bg15":"#3c2725","--graph-color-7-bg15":"#3c3825","--graph-color-8-bg15":"#2a3a26","--graph-color-9-bg15":"#1f3835","--graph-color-0-bg15":"#1b323a","--graph-color-1-bg15":"#192943","--graph-color-2-bg15":"#2d1a3b","--graph-color-3-bg15":"#351d39","--graph-color-4-bg15":"#381a2f","--semi-bold":"500","--bold":"600","--num-columns-supported":"10","--column-0-color":"#15a0bf","--column-1-color":"#0669f7","--column-2-color":"#8e00c2","--column-3-color":"#c517b6","--column-4-color":"#d90171","--column-5-color":"#cd0101","--column-6-color":"#f25d2e","--column-7-color":"#f2ca33","--column-8-color":"#7bd938","--column-9-color":"#2ece9d","--red":"#D9413D","--orange":"#DE9B43","--yellow":"#ECB91C","--green":"#5CB85C","--blue":"#4D88FF","--ltblue":"#5bc0de","--app__bg0":"#1C1E23","--toolbar__bg0":"rgb(42,45,52)","--toolbar__bg1":"rgb(51,55,63)","--toolbar__bg2":"rgb(65,70,80)","--panel__bg0":"rgb(39,42,49)","--panel__bg1":"rgb(50,54,63)","--panel__bg2":"rgb(61,66,77)","--input__bg":"rgba(0,0,0,0.2)","--input-bg-warn-color":"rgba(222,155,67,0.6)","--panel-border":"rgb(19,20,24)","--section-border":"rgba(255,255,255,0.08)","--subtle-border":"rgba(255,255,255,0.04)","--modal-overlay-color":"rgba(0,0,0,.5)","--graph-color-0":"#15a0bf","--graph-color-1":"#0669f7","--graph-color-2":"#8e00c2","--graph-color-3":"#c517b6","--graph-color-4":"#d90171","--graph-color-5":"#cd0101","--graph-color-6":"#f25d2e","--graph-color-7":"#f2ca33","--graph-color-8":"#7bd938","--graph-color-9":"#2ece9d","--text-selected":"#FFFFFF","--text-selected-row":"#FFFFFF","--text-dimmed":"rgba(255,255,255,0.2)","--text-dimmed-selected":"rgba(255,255,255,0.5)","--text-normal":"rgba(255,255,255,0.75)","--text-secondary":"rgba(255,255,255,0.6)","--text-disabled":"rgba(255,255,255,0.4)","--text-accent":"#93A9EC","--text-inverse":"#222222","--text-bright":"#FFFFFF","--btn-text":"rgba(255,255,255,0.75)","--btn-text-hover":"#FFFFFF","--default-border":"rgba(255,255,255,0.75)","--default-bg":"transparent","--default-hover":"transparent","--default-border-hover":"#FFFFFF","--primary-border":"#4D88FF","--primary-bg":"rgba(77,136,255,0.2)","--primary-hover":"rgba(77,136,255,0.6)","--success-border":"#5CB85C","--success-bg":"rgba(92,184,92,0.2)","--success-hover":"rgba(92,184,92,0.6)","--warning-border":"#DE9B43","--warning-bg":"rgba(222,155,67,0.2)","--warning-hover":"rgba(222,155,67,0.6)","--danger-border":"#D9413D","--danger-bg":"rgba(217,65,61,0.2)","--danger-hover":"rgba(217,65,61,0.6)","--hover-row":"rgba(77,136,255,0.1)","--hover-row-border":"none","--danger-row":"rgba(217,65,61,0.6)","--selected-row":"rgba(77,136,255,0.2)","--selected-row-border":"none","--warning-row":"rgba(222,155,67,0.6)","--droppable":"rgba(236,185,28,0.3)","--drop-target":"rgba(92,184,92,0.5)","--input--disabled":"rgba(0,0,0,0.1)","--link-color":"#40c5ec","--link-color-bright":"#40c5ec","--form-control-focus":"#4D88FF","--scroll-thumb-border":"#1C1E23","--scroll-thumb-bg":"rgb(65,70,80)","--scroll-thumb-bg-light":"rgb(111,119,136)","--wip-status":"rgba(77,136,255,0.4)","--card__bg":"rgb(61,66,77)","--card-shadow":"rgba(0,0,0,.2)","--statusbar__warning-bg":"#87742b","--label__yellow-color":"#f2ca33","--label__light-blue-color":"#15a0bf","--label__purple-color":"#c517b6","--filtering":"rgba(77,136,255,0.5)","--soloing":"rgba(222,155,67,0.5)","--checked-out":"rgba(92,184,92,0.3)","--soloed":"rgba(222,155,67,0.3)","--filter-match":"rgba(77,136,255,0.5)","--clone__progress":"rgba(77,136,255,0.7)","--toolbar__prompt":"rgba(77,136,255,0.2)","--verified":"rgba(92,184,92,0.3)","--unverified":"rgba(255,255,255,0.1)","--drop-sort-border":"#5CB85C","--terminal__repo-name-color":"turquoise","--terminal__repo-branch-color":"violet","--terminal__repo-tag-color":"lightcoral","--terminal__repo-upstream-color":"yellowgreen","--terminal__background":"#000000","--terminal__cursor":"#FFFFFF","--terminal__cursorAccent":"#000000","--terminal__foreground":"#FFFFFF","--terminal__selection":"#304676","--terminal__black":"#000000","--terminal__red":"#F24A4A","--terminal__green":"#0DBC79","--terminal__yellow":"#E5E510","--terminal__blue":"#4A98EE","--terminal__magenta":"#E063E0","--terminal__cyan":"#11A8CD","--terminal__white":"#E5E5E5","--terminal__brightBlack":"#686868","--terminal__brightRed":"#FF5656","--terminal__brightGreen":"#23D18B","--terminal__brightYellow":"#F5F543","--terminal__brightBlue":"#51A4FF","--terminal__brightMagenta":"#D670D6","--terminal__brightCyan":"#29B8DB","--terminal__brightWhite":"#E5E5E5","--code-bg":"#1C1E23","--code-foreground":"rgba(255,255,255,0.75)","--code-blame-color-0":"#15a0bf","--code-blame-color-1":"#0669f7","--code-blame-color-2":"#8e00c2","--code-blame-color-3":"#c517b6","--code-blame-color-4":"#d90171","--code-blame-color-5":"#cd0101","--code-blame-color-6":"#f25d2e","--code-blame-color-7":"#f2ca33","--code-blame-color-8":"#7bd938","--code-blame-color-9":"#2ece9d","--added-line":"rgba(92,184,92,0.2)","--deleted-line":"rgba(217,65,61,0.2)","--modified-line":"rgba(0,0,0,0.25)","--conflict-info-color":"#15a0bf","--conflict-left-border-color":"#15a0bf","--conflict-right-border-color":"#f2ca33","--conflict-output-border-color":"#c517b6","--scroll-marker-head-color":"#16c216","--scroll-marker-highlights-color":"#e6e62b","--scroll-marker-local-branches-color":"#ffa500","--scroll-marker-remote-branches-color":"#ffd68b","--scroll-marker-selection-color":"#0821ff","--scroll-marker-stashes-color":"#fb94ff","--scroll-marker-tags-color":"#affcff","--scroll-marker-upstream-color":"#9bff9b","--stats-added-color":"#347d39","--stats-deleted-color":"#c93c37","--stats-files-color":"#e2c08d","--stats-bar-border-radius":"3px","--stats-bar-height":"40%"}},7675:(e,t,o)=>{o.d(t,{Ld:()=>i,M:()=>s,a2:()=>r});var n=o(376);function r(e){return`--column-${e}-color`}function i(e={}){const t={};return Object.keys(e).forEach((o=>{o.includes("--graph-color-")||o.match(/^--column-\d+-color$/)?CSS.supports("color",e[o])&&(t[o]=e[o]):t[o]=e[o]})),function(e={}){return{...n.C,...e}}(t)}function s(e){const t=e||n.C;let o="";const r=Object.keys(t);o+=".gk-graph {\n";for(const e of r)o+=`${e}: ${t[e]};\n`;return o+="}\n",o}},2149:()=>{},3308:(e,t,o)=>{o.d(t,{$0:()=>s,$s:()=>d,An:()=>h,B:()=>A,B8:()=>k,GF:()=>ie,Gn:()=>te,IX:()=>q,It:()=>S,KE:()=>re,LG:()=>y,MQ:()=>Q,NP:()=>f,O5:()=>m,OR:()=>be,Oi:()=>B,P3:()=>p,PB:()=>D,PL:()=>se,QW:()=>G,Qh:()=>ue,RG:()=>de,R_:()=>ve,Rg:()=>$,SZ:()=>F,Um:()=>ce,VB:()=>K,Vh:()=>P,WD:()=>le,Wm:()=>ne,Wu:()=>g,X9:()=>j,Y8:()=>w,YJ:()=>ge,aV:()=>V,ai:()=>fe,am:()=>N,at:()=>u,av:()=>ae,b4:()=>ee,cZ:()=>a,dF:()=>r,dH:()=>Y,d_:()=>he,eq:()=>v,iq:()=>n,jZ:()=>oe,j_:()=>E,jg:()=>_,jn:()=>b,l3:()=>c,lG:()=>R,m8:()=>C,mt:()=>z,mu:()=>J,os:()=>X,pj:()=>O,q1:()=>x,qG:()=>l,qi:()=>me,rl:()=>i,uK:()=>pe,v1:()=>L,v6:()=>H,wd:()=>Z,wi:()=>U,wy:()=>I,xI:()=>T,yv:()=>M,ze:()=>W});const n="#199489",r=3,i=26,s=28,a=22,l=50*s,c=.5,d=3,h=3,u=s,p=a,f=3,m=p/2,g=56,b=56,v=32,y=a,w=y-4,C=55,x=50,S="short+short",_=55,T=50,R=50,k=50,E=55,O=18,I=32,M=2,D=6,$=14,N=5,A=$+N,P=10,z=55,H=100,L=50,G=10,F=25,B=58,W=22,U=2,j={dark:1,light:.5},V=10,Z=12,q=6,K=3,Y=12,X="auto",Q="center",J=7,ee=4,te="timelineMessage",oe="ref",ne="graph",re="message",ie="author",se="datetime",ae="sha",le="changes";var ce=(e=>(e.Compact="compact",e.Rich="rich",e.Text="text",e))(ce||{}),de=(e=>(e.Block="block",e.FullLine="fullLine",e.ThinLine="thinLine",e))(de||{});const he={block:{type:"block",baseHeight:1*s,minHeight:5,maxHeight:20},fullLine:{type:"fullLine",baseHeight:.5*s,minHeight:2,maxHeight:4},thinLine:{type:"thinLine",baseHeight:.25*s,minHeight:1,maxHeight:2}},ue={stashes:{type:"stashes",colorCssKey:"--color-graph-scroll-marker-stashes",lanes:[0],shape:"block"},tags:{type:"tags",colorCssKey:"--color-graph-scroll-marker-tags",lanes:[2],shape:"block"},remoteBranches:{type:"remoteBranches",colorCssKey:"--color-graph-scroll-marker-remote-branches",lanes:[2],shape:"block"},localBranches:{type:"localBranches",colorCssKey:"--color-graph-scroll-marker-local-branches",lanes:[0],shape:"block"},highlights:{type:"highlights",colorCssKey:"--color-graph-scroll-marker-highlights",lanes:[1],shape:"block"},upstream:{type:"upstream",colorCssKey:"--color-graph-scroll-marker-upstream",lanes:[1,2],shape:"block"},head:{type:"head",colorCssKey:"--scroll-marker-head-color",lanes:[0,1],shape:"block"},selection:{type:"selection",colorCssKey:"--color-graph-scroll-marker-selection",lanes:[0,1,2],shape:"fullLine"}},pe=10,fe=6,me={[ie]:{headerLabelUntranslated:"GraphHeader-CommitAuthor",isCustomizable:!0,listId:"commit-author-zone",minimumWidth:v,showIconWidth:C},[se]:{headerLabelUntranslated:"GraphHeader-CommitDateTime",isCustomizable:!0,listId:"commit-date-time-zone",minimumWidth:x,showIconWidth:_},[re]:{headerLabelUntranslated:"GraphHeader-CommitMessage",isCustomizable:!0,listId:"commit-message-zone",minimumWidth:k,showIconWidth:E},[ae]:{headerLabelUntranslated:"GraphHeader-CommitSha",isCustomizable:!0,listId:"commit-sha-zone",minimumWidth:T,showIconWidth:R},[ne]:{headerLabelUntranslated:"GraphHeader-CommitGraph",isCustomizable:!0,listId:"commit-zone",minimumWidth:g,showIconWidth:b},[oe]:{headerLabelUntranslated:"GraphHeader-BranchTag",isCustomizable:!0,listId:"ref-zone",minimumWidth:I,showIconWidth:z},[le]:{headerLabelUntranslated:"GraphHeader-Changes",isCustomizable:!0,listId:"changes-zone",minimumWidth:L,showIconWidth:B}},ge={hour:23,day:6,week:4,month:11,year:6},be={added:0,deleted:0,modified:0};var ve=(e=>(e.ALWAYS="ALWAYS",e.ON_HOVER="ON_HOVER",e.NEVER="NEVER",e))(ve||{})},5191:(e,t,o)=>{o.d(t,{BL:()=>u,C_:()=>I,DN:()=>z,Dj:()=>V,Ez:()=>N,H1:()=>H,Jp:()=>k,Jq:()=>T,KI:()=>E,Kk:()=>L,L1:()=>f,Ne:()=>O,P2:()=>h,PY:()=>F,Ry:()=>B,SH:()=>S,Xq:()=>_,Yv:()=>j,Zg:()=>C,bY:()=>b,eR:()=>$,h:()=>d,iM:()=>x,mb:()=>D,nv:()=>w,q3:()=>p,qP:()=>v,sH:()=>W,tC:()=>y,uM:()=>A,uV:()=>m,wE:()=>R,yF:()=>g,zv:()=>M});var n=o(4561),r=o(827),i=o(7675),s=o(8649),a=o(3308),l=o(9453),c=o(466);const d=e=>{let t;return(...o)=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame((()=>{e(...o)}))}},h=(e,t,o)=>{let n,r,i=!1,s=t;return(...a)=>{void 0!==o&&(r=(new Date).getTime(),s=!n||r-n>s+o?o:t),i||(e(...a),n=(new Date).getTime(),i=!0,setTimeout((()=>{i=!1}),s))}};function u(e){return Math.abs(e.scrollHeight-e.scrollTop-e.clientHeight)<1}function p(e){return e?"string"==typeof e?e:JSON.stringify(e):null}function f(e){const{length:t}=e;if(0===t)return{min:0,max:0};if(1===t)return{min:0,max:e[0]};e.sort(((e,t)=>e-t));const o=e[0],n=e[Math.floor(.25*t)],r=e[Math.floor(.5*t)],i=e[Math.floor(.75*t)],s=e[t-1],a=i-n;return{min:Math.max(o,r-1.5*a),max:Math.min(s,r+1.5*a)}}function m(e,t,o,n){const{id:r}=e;return!r||null===t||null===t?.[r]||n&&null===t?.[r]?.[n]?null:t&&r in t?n&&!t[r]?.[n]?(o(r,[n]),null):n?t?.[r]?.[n]:t?.[r]:(o(r,l.AI),null)}function g(){const e=new Date,t={hour:[],day:[],week:[],month:[],year:[]};let o;for(o=1;o<=a.YJ.hour;o+=1)t.hour.push({date:e.getTime()-36e5*o,label:1===o?"Timeline-1HourAgo":"Timeline-NHoursAgo",timeUnit:"hour",value:o});for(o=1;o<=a.YJ.day;o+=1)t.day.push({date:e.getTime()-864e5*o,label:1===o?"Timeline-Yesterday":"Timeline-NDaysAgo",timeUnit:"day",value:o});for(o=1;o<=a.YJ.week;o+=1)t.week.push({date:e.getTime()-6048e5*o,label:1===o?"Timeline-1WeekAgo":"Timeline-NWeeksAgo",timeUnit:"week",value:o});const n=new Date;for(n.setHours(0,0,0,0),o=1;o<=a.YJ.month;o+=1)n.setMonth(n.getMonth()-1),n.setHours(0,0,0,0),t.month.push({date:n.getTime(),label:1===o?"Timeline-1MonthAgo":"Timeline-NMonthsAgo",timeUnit:"month",value:o});const r=new Date;for(r.setHours(0,0,0,0),o=1;o<=a.YJ.year;o+=1){let e;switch(r.setFullYear(r.getFullYear()-1),r.setHours(0,0,0,0),o){case 1:e="Timeline-1YearAgo";break;case a.YJ.year:e="Timeline-NPlusYearsAgo";break;default:e="Timeline-NYearsAgo"}t.year.push({date:r.getTime(),label:e,timeUnit:"year",value:o})}return t}function b(e,t){if(t.id)return t.id;const o=t.owner||"";return e===s.V.REMOTE?`${e}/${o}/${t.name}`:`${e}/${t.name}`}function v(e){return b(e.refType,e)}function y(e,t=0){for(let o=e.length-1;o>=t;o-=1){const t=e[o];if(t.currentWidth>t.minimumWidth)return t}}function w(e,t=0){if(e.length){for(let o=t;o<e.length;o+=1){const t=e[o],n=t.maximumWidth?Math.min(t.maximumWidth,t.preferredWidth||1/0):t.preferredWidth;if(n&&t.currentWidth<n)return t}return e[e.length-1]}}function C(e,t=!1){const o="--scrollable-scrollbar-thickness",n=t||!e[o]?(0,i.Ld)(e):e,r=n[o]?parseInt(n[o],10):0;return Number.isNaN(r)?0:r}function x(e,t){let o=0;for(const n of e)t&&n.type===t||(o+=n.currentWidth);return o}const S=(e,t)=>e===t[t.length-1].type;function _(e,t,o){return t||o||0===e}function T(e,t,o){return e+(_(e,t,o)?1:0)}function R(e,t,o){const n=T(e,t,o);return a.$0*n}function k(e,t){return e.type===a.Wm&&t>0?e.contentWidth||0:e.currentWidth}function E(e,t,o,n,r){const i=M(e,t);return i?(s=i,a=o.length,s.currentWidth<k(s,a)?C(n,r):0):0;var s,a}function O(e,t,o,n,r,i,s,a,l){const c=M(e,t);if(!c)return 0;const d=function(e,t,o,n,r,i,s){const a=R(i,o,n);return S(e.type,t)&&(r<a||s)}(c,t,o,n,r,i.length,s);return d?C(a,l):0}function I(e,t,o){return(0,n.u)(o,e.minimumWidth||0,e.maximumWidth&&!S(e.type,t)?e.maximumWidth||0:Number.MAX_VALUE)}function M(e,t){return t.find((({type:t})=>t===e))}function D(e,t){return t.findIndex((({type:t})=>t===e))}function $(e,t,o){let n=0,r=0;const i=D(e,t);if(i>-1){const e=function(e,t=0){let o=0;for(let n=t;n<e.length;n+=1)o+=e[n].minimumWidth;return o}(t,i+1),s=function(e,t=e.length-1){let o=0;for(let n=0;n<=t;n+=1)o+=e[n].currentWidth;return o}(t,i-1),a=t[i].maximumWidth||Number.MAX_VALUE,l=Math.min(a,o-e-s);n=t[i].minimumWidth,r=l}return{min:n,max:r}}function N(e){const t=!!e&&e===a.Um.Compact,o=t?1:2,n=t?10:28,r=t?1:3,i=t?1:3,s=t?10:22,l=t?s:a.P3,c=t?s:s/2+1,d=t?45:56;return{COMMIT_ZONE_LINE_WIDTH:o,COMMIT_ZONE_GUTTER_WIDTH:n,COMMIT_ZONE_PADDING_LEFT:r,COMMIT_ZONE_PADDING_RIGHT:i,COMMIT_COLUMN_WIDTH:s,COMMIT_NODE_DIAMETER:l,COMMIT_MERGE_NODE_DIAMETER:c,COMMIT_NODE_TOP_OFFSET:.5*a.P3-.5*l,COMMIT_MERGE_NODE_LEFT_OFFSET:s/2-c/2,COMMIT_MERGE_NODE_TOP_OFFSET:.5*a.P3-.5*c,COMMIT_ZONE_AVATAR_DIAMETER:l-2*o,COMMIT_ZONE_VIEWPORT_WIDTH_MIN:l+r+i+n,COMMIT_ZONE_SHOW_ICON_WIDTH:d,IS_COMPACT:t,RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:l/2-c/2}}const A=e=>t=>t===e.length?"SHOW_MORE_COMMITS":e[t].sha;function P(e){return e instanceof c.A?Boolean(e.refsData?.activeGraphRef):!!e?.heads&&e.heads.some((e=>U(e)))}function z(e){const t=e.find(P);return t?.sha||void 0}function H(e){return[r.S7,r.br,r.ch].includes(e)}function L(e){return!!e&&Object.values(e).some((e=>e>0))}function G(e){return 1===Object.keys(e).length}function F(e,t){return!0===e[t]&&G(e)}function B(e,t,o,n){if(n<0)return a.os;const r=e+2,i=n*e;return i>=o-r&&i<o+t+r?a.os:a.MQ}function W(e){switch(e){case a.Wm:return"graph";case a.jZ:return"branch";case a.KE:return"message";case a.GF:return"author";case a.PL:return"datetime";case a.av:return"commit";case a.WD:return"changes";default:return""}}function U(e){return e.isCurrentHead}function j(e){return e.refType===s.V.HEAD&&U(e)}class V{props;constructor(e){this.props=e}getActiveGraphZone(e){const t=M(e,this.props.graphZones);return!t||t.isHidden?void 0:t}getGraphRefGroupsByNameForRow(e){const t=this.getRow(e);return t&&t.refsData?.orderedRefGroups||[]}getRow(e){if(!(e<0||e>this.props.processedRows.length-1))return this.props.processedRows[e]}getZoneWidth(e,t=!0){const o=t?this.getVerticalScrollWidth(e):0;return function(e,t){return M(e,t)?.currentWidth||a.qi[e].minimumWidth}(e,this.props.graphZones)-o}isDateTimeZoneActive(){return Boolean(this.getActiveGraphZone(a.PL))}isFirstRow(e){return 0===e}isColumnFollowingGraphColumn(e){return((e,t)=>{const o=D(e,t),n=D(a.Wm,t);return-1!==o&&-1!==n&&o-n==1})(e,this.props.graphZones)}isHighlighted(e){if(this.props.processedRows[e]&&this.props.highlightedShas){const t=this.props.processedRows[e]?.sha;return this.props.highlightedShas[t]||!1}return!1}isHovering(e){return!(!this.props.isContainerWindowFocused||!this.props.processedRows[e])&&this.props.currentlyHoveredCommitSha===this.props.processedRows[e]?.sha}isLastColumn(e){return S(e,this.props.graphZones)}getSelectedRefGroupByName(){if(G(this.props.isSelectedBySha)){const e=Object.keys(this.props.isSelectedBySha),t=this.props.processedGraphRowBySha[e[0]];if(t)return t.refsData?.orderedRefGroups||[]}return[]}getHorizontalScrollHeight(e){return E(e,this.props.graphZones,this.props.processedRows,this.props.cssVariables)}getVerticalScrollWidth(e){return O(e,this.props.graphZones,this.props.hasMoreCommits,this.props.isLoadingRows,this.props.height,this.props.processedRows,this.props.enabledScrollMarkerTypes.length>0,this.props.cssVariables)}isMissingHoveredRefGroup(e){if(!this.props.isContainerWindowFocused||this.props.highlightedShas)return!1;const t=this.getRow(e);if(!t)return!1;let o=[];if(this.props.dimRowsOfSelectedCommit){const e=this.getSelectedRefGroupByName();if(!e.length)return!1;o=e[0]}else{const{hoveredRefGroup:e}=this.props;if(!e?.length)return!1;o=e}const{name:n,refType:r}=o[0],i=r===s.V.TAG,a=t.tags.length>0&&!t.heads.length&&!t.remotes.length,{heads:l,tags:c,remotes:d}=!t.hasRefs||a&&!i?t.childRefs:t;return!(l.length||d.length||c.length)||!l.some((e=>e.name===n&&o.some((e=>e.refType===s.V.HEAD))))&&!d.some((e=>e.name===n&&o.some((t=>t.refType===s.V.REMOTE&&t.owner===e.owner))))&&!c.some((e=>e.name===n&&o.some((e=>e.refType===s.V.TAG))))}isSelected(e){const t=this.getRow(e)?.sha;return Boolean(t)&&!0===this.props.isSelectedBySha[t]}isSingleSelected(e){const t=this.getRow(e)?.sha;return Boolean(t)&&F(this.props.isSelectedBySha,t)}hasTimeline(e){return Boolean(this.props.processedRows[e]?.timeLineEntry)&&!this.isDateTimeZoneActive()&&!this.isFirstRow(e)}rowContainsCurrentHeadRef(e){return P(e)}}},9453:(e,t,o)=>{o.d(t,{$M:()=>i,AI:()=>s,mQ:()=>n,uq:()=>r});const n="pullRequest",r="upstream",i="issue",s=[n,r,i]},466:(e,t,o)=>{o.d(t,{A:()=>i});var n=o(8649),r=o(5191);class i{_graph;_message;_heads;_remotes;_tags;_activeGraphRef;_activeGraphRefGroup;_refGroupsByName;_orderedRefGroups;sha;parents;author;email;date;type;contexts;rowIndex;column;edgeColumnMaxes;edges;childRefs;timeLineEntry;summary;body;displayMessage;displaySummary;displayBody;set message(e){this._message!==e&&(this._message=e,this.displayMessage=this._graph.formatCommitMessageCallback(e),this.updateSummaryAndBody(e))}get message(){return this._message}get heads(){return this._heads}set heads(e){this._heads!==e&&(this._heads=e,this.initializeRefGroups())}set remotes(e){this._remotes!==e&&(this._remotes=e,this.initializeRefGroups())}get remotes(){return this._remotes}set tags(e){this._tags!==e&&(this._tags=e,this.initializeRefGroups())}get tags(){return this._tags}get hasRefs(){return this.heads.length>0||this.remotes.length>0||this.tags.length>0}get hasChildRefs(){return this.childRefs.heads.length>0||this.childRefs.remotes.length>0||this.childRefs.tags.length>0}get refsData(){if(this.hasRefs||this.hasChildRefs)return 0===this._orderedRefGroups.length&&this.loadGraphRefGroupsData(),{activeGraphRef:this._activeGraphRef,activeGraphRefGroup:this._activeGraphRefGroup,orderedRefGroups:this._orderedRefGroups,refGroupsByName:this._refGroupsByName}}constructor(e,t,o,n,r,i,s){this._graph=e,this._heads=t.heads||[],this._remotes=t.remotes||[],this._tags=t.tags||[],this._message=t.message,this.sha=t.sha,this.parents=t.parents,this.author=t.author,this.email=t.email,this.date=t.date,this.type=t.type,this.contexts=t.contexts,this.column=o||0,this.edgeColumnMaxes=n||0,this.edges=r||{},this.childRefs=i||{heads:[],tags:[],remotes:[]},this.timeLineEntry=s,this.initializeRefGroups(),this.updateSummaryAndBody(t.message)}updateSummaryAndBody(e){let t,o=e?e.trim():"";const n=o.indexOf("\n");-1!==n&&(t=o.substring(n+1).trim().replace(/\n+(?:\s+\n+)?/g," | "),o=o.substring(0,n)),this.body=t,this.summary=o,this.displaySummary=this._graph.formatCommitMessageCallback(o),this.displayBody=t?this._graph.formatCommitMessageCallback(t):void 0}initializeRefGroups(){this._activeGraphRefGroup=void 0,this._activeGraphRef=void 0,this._refGroupsByName={},this._orderedRefGroups=[]}addRefToRefGroup(e){const t=e.name;this._refGroupsByName[t]||(this._refGroupsByName[t]=[]),this._refGroupsByName[t].push(e)}loadGraphRefGroupsData(){this.initializeRefGroups();const e=[],{heads:t,tags:o,remotes:i}=this.hasRefs?this:this.childRefs;for(const o of t){const t={...o,refType:n.V.HEAD};this.addRefToRefGroup(t),(0,r.Yv)(t)?(this._activeGraphRefGroup=this._refGroupsByName[t.name],this._activeGraphRef=t,e.unshift(this._refGroupsByName[t.name])):e.push(this._refGroupsByName[t.name])}for(const t of i){const o={...t,fullName:t.owner?`${t.owner}/${t.name}`:t.name,refType:n.V.REMOTE},r=this._refGroupsByName[o.name];this.addRefToRefGroup(o),r||e.push(this._refGroupsByName[o.name])}for(const t of o){const o={...t,refType:n.V.TAG};this.addRefToRefGroup(o),e.push(this._refGroupsByName[o.name])}this._orderedRefGroups=e.sort(((e,t)=>e===this._activeGraphRefGroup?-1:t===this._activeGraphRefGroup?1:e.length>t.length?-1:e.length<t.length?1:e[0].name.localeCompare(t[0].name)))}}},7334:(e,t,o)=>{function n(e){switch(e){case"github":return"GitHub";case"githubEnterprise":return"GitHub Enterprise";case"gitlab":return"GitLab";case"gitlabSelfHosted":return"GitLab Self-Hosted";case"azureDevops":return"Azure DevOps";case"bitbucket":return"Bitbucket";case"bitbucketServer":return"Bitbucket Server";default:return e}}o.d(t,{y:()=>n})},8649:(e,t,o)=>{o.d(t,{V:()=>n});const n={HEAD:"head",REMOTE:"remote",TAG:"tag"}},664:()=>{},6756:()=>{},4561:(e,t,o)=>{function n(e,t,o){return(e=e<=o?e:o)>=t?e:t}o.d(t,{u:()=>n})},3316:e=>{function t(e,t,o,n){var r,i=null==(r=n)||"number"==typeof r||"boolean"==typeof r?n:o(n),s=t.get(i);return void 0===s&&(s=e.call(this,n),t.set(i,s)),s}function o(e,t,o){var n=Array.prototype.slice.call(arguments,3),r=o(n),i=t.get(r);return void 0===i&&(i=e.apply(this,n),t.set(r,i)),i}function n(e,t,o,n,r){return o.bind(t,e,n,r)}function r(e,r){return n(e,this,1===e.length?t:o,r.cache.create(),r.serializer)}function i(){return JSON.stringify(arguments)}function s(){this.cache=Object.create(null)}s.prototype.has=function(e){return e in this.cache},s.prototype.get=function(e){return this.cache[e]},s.prototype.set=function(e,t){this.cache[e]=t};var a={create:function(){return new s}};e.exports=function(e,t){var o=t&&t.cache?t.cache:a,n=t&&t.serializer?t.serializer:i;return(t&&t.strategy?t.strategy:r)(e,{cache:o,serializer:n})},e.exports.strategies={variadic:function(e,t){return n(e,this,o,t.cache.create(),t.serializer)},monadic:function(e,o){return n(e,this,t,o.cache.create(),o.serializer)}}},1143:e=>{e.exports=function(e,t,o,n,r,i,s,a){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[o,n,r,i,s,a],d=0;(l=new Error(t.replace(/%s/g,(function(){return c[d++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},621:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=s(o(6689)),i=s(o(2613));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)((function(e,t,o,i,s){var a=e[t],l=void 0===a?"undefined":n(a);return r.default.isValidElement(a)?new Error("Invalid "+i+" `"+s+"` of type ReactElement supplied to `"+o+"`, expected a ReactComponent or a DOMElement. You can usually obtain a ReactComponent or DOMElement from a ReactElement by attaching a ref to it."):"object"===l&&"function"==typeof a.render||1===a.nodeType?null:new Error("Invalid "+i+" `"+s+"` of value `"+a+"` supplied to `"+o+"`, expected a ReactComponent or a DOMElement.")})),e.exports=t.default},8853:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=s(o(6689)),r=o(9864),i=s(o(2613));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)((function(e,t,o,i,s){var a=e[t];return n.default.isValidElement(a)?new Error("Invalid "+i+" `"+s+"` of type ReactElement supplied to `"+o+"`,expected an element type (a string , component class, or function component)."):(0,r.isValidElementType)(a)?null:new Error("Invalid "+i+" `"+s+"` of value `"+a+"` supplied to `"+o+"`, expected an element type (a string , component class, or function component).")})),e.exports=t.default},5638:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,o,n,r,i){var s=n||"<<anonymous>>",a=i||o;if(null==t[o])return new Error("The "+r+" `"+a+"` is required to make `"+s+"` accessible for users of assistive technologies such as screen readers.");for(var l=arguments.length,c=Array(l>5?l-5:0),d=5;d<l;d++)c[d-5]=arguments[d];return e.apply(void 0,[t,o,n,r,i].concat(c))}},e.exports=t.default},2613:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,o,n,r,i,s){var a=r||"<<anonymous>>",l=s||n;if(null==o[n])return t?new Error("Required "+i+" `"+l+"` was not specified in `"+a+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),h=6;h<c;h++)d[h-6]=arguments[h];return e.apply(void 0,[o,n,a,i,l].concat(d))}var o=t.bind(null,!1);return o.isRequired=t.bind(null,!0),o},e.exports=t.default},2703:(e,t,o)=>{var n=o(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,o,r,i,s){if(s!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return o.PropTypes=o,o}},5697:(e,t,o)=>{e.exports=o(2703)()},414:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},977:(e,t,o)=>{var n=o(7137),r=o(2584);e.exports=function(){return n.apply(this,r(arguments)).on("cloned",(function(t){e(t),r(t.getElementsByTagName("*")).forEach(e)}));function e(e){e.removeAttribute("data-reactid")}}},9921:(e,t)=>{var o="function"==typeof Symbol&&Symbol.for,n=o?Symbol.for("react.element"):60103,r=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,c=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.async_mode"):60111,h=o?Symbol.for("react.concurrent_mode"):60111,u=o?Symbol.for("react.forward_ref"):60112,p=o?Symbol.for("react.suspense"):60113,f=o?Symbol.for("react.suspense_list"):60120,m=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,b=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,y=o?Symbol.for("react.responder"):60118,w=o?Symbol.for("react.scope"):60119;function C(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case h:case i:case a:case s:case p:return e;default:switch(e=e&&e.$$typeof){case c:case u:case g:case m:case l:return e;default:return t}}case r:return t}}}function x(e){return C(e)===h}t.AsyncMode=d,t.ConcurrentMode=h,t.ContextConsumer=c,t.ContextProvider=l,t.Element=n,t.ForwardRef=u,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=r,t.Profiler=a,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return x(e)||C(e)===d},t.isConcurrentMode=x,t.isContextConsumer=function(e){return C(e)===c},t.isContextProvider=function(e){return C(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return C(e)===u},t.isFragment=function(e){return C(e)===i},t.isLazy=function(e){return C(e)===g},t.isMemo=function(e){return C(e)===m},t.isPortal=function(e){return C(e)===r},t.isProfiler=function(e){return C(e)===a},t.isStrictMode=function(e){return C(e)===s},t.isSuspense=function(e){return C(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===h||e===a||e===s||e===p||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===u||e.$$typeof===v||e.$$typeof===y||e.$$typeof===w||e.$$typeof===b)},t.typeOf=C},9864:(e,t,o)=>{e.exports=o(9921)},6871:(e,t,o)=>{function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState(function(t){var o=this.constructor.getDerivedStateFromProps(e,t);return null!=o?o:null}.bind(this))}function i(e,t){try{var o=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,n)}finally{this.props=o,this.state=n}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,s=null,a=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==o||null!==s||null!==a){var l=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var d=t.componentDidUpdate;t.componentDidUpdate=function(e,t,o){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:o;d.call(this,e,t,n)}}return e}o.r(t),o.d(t,{polyfill:()=>s}),n.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},7281:(e,t,o)=>{t.__esModule=!0;var n=c(o(5697)),r=c(o(621)),i=c(o(6689)),s=c(o(6405)),a=c(o(3464)),l=c(o(290));function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function t(){var o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=Array(r),h=0;h<r;h++)c[h]=arguments[h];return o=n=d(this,e.call.apply(e,[this].concat(c))),n._mountOverlayTarget=function(){n._overlayTarget||(n._overlayTarget=document.createElement("div"),n._portalContainerNode=(0,a.default)(n.props.container,(0,l.default)(n).body),n._portalContainerNode.appendChild(n._overlayTarget))},n._unmountOverlayTarget=function(){n._overlayTarget&&(n._portalContainerNode.removeChild(n._overlayTarget),n._overlayTarget=null),n._portalContainerNode=null},n._renderOverlay=function(){var e=n.props.children?i.default.Children.only(n.props.children):null;if(null!==e){n._mountOverlayTarget();var t=!n._overlayInstance;n._overlayInstance=s.default.unstable_renderSubtreeIntoContainer(n,e,n._overlayTarget,(function(){t&&n.props.onRendered&&n.props.onRendered()}))}else n._unrenderOverlay(),n._unmountOverlayTarget()},n._unrenderOverlay=function(){n._overlayTarget&&(s.default.unmountComponentAtNode(n._overlayTarget),n._overlayInstance=null)},n.getMountNode=function(){return n._overlayTarget},d(n,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._isMounted=!0,this._renderOverlay()},t.prototype.componentDidUpdate=function(){this._renderOverlay()},t.prototype.componentWillReceiveProps=function(e){this._overlayTarget&&e.container!==this.props.container&&(this._portalContainerNode.removeChild(this._overlayTarget),this._portalContainerNode=(0,a.default)(e.container,(0,l.default)(this).body),this._portalContainerNode.appendChild(this._overlayTarget))},t.prototype.componentWillUnmount=function(){this._isMounted=!1,this._unrenderOverlay(),this._unmountOverlayTarget()},t.prototype.render=function(){return null},t}(i.default.Component);h.displayName="Portal",h.propTypes={container:n.default.oneOfType([r.default,n.default.func]),onRendered:n.default.func},t.default=h,e.exports=t.default},2856:(e,t,o)=>{t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=d(o(5697)),i=d(o(8853)),s=d(o(6689)),a=d(o(5425)),l=d(o(7487)),c=d(o(2395));function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(o,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,o,n));return r.handleHidden=function(){var e;r.setState({exited:!0}),r.props.onExited&&(e=r.props).onExited.apply(e,arguments)},r.state={exited:!o.show},r.onHiddenListener=r.handleHidden.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(e){e.show?this.setState({exited:!1}):e.transition||this.setState({exited:!0})},t.prototype.render=function(){var e=this.props,t=e.container,o=e.containerPadding,n=e.target,r=e.placement,i=e.shouldUpdatePosition,d=e.rootClose,h=e.children,u=e.transition,p=function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["container","containerPadding","target","placement","shouldUpdatePosition","rootClose","children","transition"]);if(!(p.show||u&&!this.state.exited))return null;var f=h;if(f=s.default.createElement(l.default,{container:t,containerPadding:o,target:n,placement:r,shouldUpdatePosition:i},f),u){var m=p.onExit,g=p.onExiting,b=p.onEnter,v=p.onEntering,y=p.onEntered;f=s.default.createElement(u,{in:p.show,appear:!0,onExit:m,onExiting:g,onExited:this.onHiddenListener,onEnter:b,onEntering:v,onEntered:y},f)}return d&&(f=s.default.createElement(c.default,{onRootClose:p.onHide},f)),s.default.createElement(a.default,{container:t},f)},t}(s.default.Component);h.propTypes=n({},a.default.propTypes,l.default.propTypes,{show:r.default.bool,rootClose:r.default.bool,onHide:function(e){var t=r.default.func;e.rootClose&&(t=t.isRequired);for(var o=arguments.length,n=Array(o>1?o-1:0),i=1;i<o;i++)n[i-1]=arguments[i];return t.apply(void 0,[e].concat(n))},transition:i.default,onEnter:r.default.func,onEntering:r.default.func,onEntered:r.default.func,onExit:r.default.func,onExiting:r.default.func,onExited:r.default.func}),t.default=h,e.exports=t.default},5425:(e,t,o)=>{t.__esModule=!0;var n=d(o(5697)),r=d(o(621)),i=d(o(6689)),s=d(o(6405)),a=d(o(3464)),l=d(o(290)),c=d(o(7281));function d(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return o=n=h(this,e.call.apply(e,[this].concat(i))),n.setContainer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props;n._portalContainerNode=(0,a.default)(e.container,(0,l.default)(n).body)},n.getMountNode=function(){return n._portalContainerNode},h(n,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.setContainer(),this.forceUpdate(this.props.onRendered)},t.prototype.componentWillReceiveProps=function(e){e.container!==this.props.container&&this.setContainer(e)},t.prototype.componentWillUnmount=function(){this._portalContainerNode=null},t.prototype.render=function(){return this.props.children&&this._portalContainerNode?s.default.createPortal(this.props.children,this._portalContainerNode):null},t}(i.default.Component);u.displayName="Portal",u.propTypes={container:n.default.oneOfType([r.default,n.default.func]),onRendered:n.default.func},t.default=s.default.createPortal?u:c.default,e.exports=t.default},7487:(e,t,o)=>{t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=p(o(4184)),i=p(o(5697)),s=p(o(621)),a=o(6689),l=p(a),c=p(o(6405)),d=p(o(7603)),h=p(o(3464)),u=p(o(290));function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}var m=function(e){function t(o,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,o,n));return r.getTarget=function(){var e=r.props.target,t="function"==typeof e?e():e;return t&&c.default.findDOMNode(t)||null},r.maybeUpdatePosition=function(e){var t=r.getTarget();(r.props.shouldUpdatePosition||t!==r._lastTarget||e)&&r.updatePosition(t)},r.state={positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null},r._needsFlush=!1,r._lastTarget=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.updatePosition(this.getTarget())},t.prototype.componentWillReceiveProps=function(){this._needsFlush=!0},t.prototype.componentDidUpdate=function(e){this._needsFlush&&(this._needsFlush=!1,this.maybeUpdatePosition(this.props.placement!==e.placement))},t.prototype.render=function(){var e=this.props,t=e.children,o=e.className,i=f(e,["children","className"]),s=this.state,c=s.positionLeft,d=s.positionTop,h=f(s,["positionLeft","positionTop"]);delete i.target,delete i.container,delete i.containerPadding,delete i.shouldUpdatePosition;var u=l.default.Children.only(t);return(0,a.cloneElement)(u,n({},i,h,{positionLeft:c,positionTop:d,className:(0,r.default)(o,u.props.className),style:n({},u.props.style,{left:c,top:d})}))},t.prototype.updatePosition=function(e){if(this._lastTarget=e,e){var t=c.default.findDOMNode(this),o=(0,h.default)(this.props.container,(0,u.default)(this).body);this.setState((0,d.default)(this.props.placement,t,e,o,this.props.containerPadding))}else this.setState({positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null})},t}(l.default.Component);m.propTypes={target:i.default.oneOfType([s.default,i.default.func]),container:i.default.oneOfType([s.default,i.default.func]),containerPadding:i.default.number,placement:i.default.oneOf(["top","right","bottom","left"]),shouldUpdatePosition:i.default.bool},m.displayName="Position",m.defaultProps={containerPadding:0,placement:"right",shouldUpdatePosition:!1},t.default=m,e.exports=t.default},2395:(e,t,o)=>{t.__esModule=!0;var n=c(o(1629)),r=c(o(5697)),i=c(o(6689)),s=c(o(6405)),a=c(o(6616)),l=c(o(290));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(o,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,o,r));return i.addEventListeners=function(){var e=i.props.event,t=(0,l.default)(i);i.documentMouseCaptureListener=(0,a.default)(t,e,i.handleMouseCapture,!0),i.documentMouseListener=(0,a.default)(t,e,i.handleMouse),i.documentKeyupListener=(0,a.default)(t,"keyup",i.handleKeyUp)},i.removeEventListeners=function(){i.documentMouseCaptureListener&&i.documentMouseCaptureListener.remove(),i.documentMouseListener&&i.documentMouseListener.remove(),i.documentKeyupListener&&i.documentKeyupListener.remove()},i.handleMouseCapture=function(e){var t;i.preventMouseRootClose=!!((t=e).metaKey||t.altKey||t.ctrlKey||t.shiftKey)||!function(e){return 0===e.button}(e)||(0,n.default)(s.default.findDOMNode(i),e.target)},i.handleMouse=function(e){!i.preventMouseRootClose&&i.props.onRootClose&&i.props.onRootClose(e)},i.handleKeyUp=function(e){27===e.keyCode&&i.props.onRootClose&&i.props.onRootClose(e)},i.preventMouseRootClose=!1,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.props.disabled||this.addEventListeners()},t.prototype.componentDidUpdate=function(e){!this.props.disabled&&e.disabled?this.addEventListeners():this.props.disabled&&!e.disabled&&this.removeEventListeners()},t.prototype.componentWillUnmount=function(){this.props.disabled||this.removeEventListeners()},t.prototype.render=function(){return this.props.children},t}(i.default.Component);d.displayName="RootCloseWrapper",d.propTypes={onRootClose:r.default.func,children:r.default.element,disabled:r.default.bool,event:r.default.oneOf(["click","mousedown"])},d.defaultProps={event:"click"},t.default=d,e.exports=t.default},6616:(e,t,o)=>{t.__esModule=!0,t.default=function(e,t,o,i){return(0,n.default)(e,t,o,i),{remove:function(){(0,r.default)(e,t,o,i)}}};var n=i(o(1416)),r=i(o(3249));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},7603:(e,t,o)=>{t.__esModule=!0,t.default=function(e,t,o,i,s){var a="BODY"===i.tagName?(0,n.default)(o):(0,r.default)(o,i),c=(0,n.default)(t),d=c.height,h=c.width,u=void 0,p=void 0,f=void 0,m=void 0;if("left"===e||"right"===e){p=a.top+(a.height-d)/2,u="left"===e?a.left-h:a.left+a.width;var g=function(e,t,o,n){var r=l(o),i=r.scroll,s=r.height,a=e-n-i,c=e+n-i+t;return a<0?-a:c>s?s-c:0}(p,d,i,s);p+=g,m=50*(1-2*g/d)+"%",f=void 0}else{if("top"!==e&&"bottom"!==e)throw new Error('calcOverlayPosition(): No such placement of "'+e+'" found.');u=a.left+(a.width-h)/2,p="top"===e?a.top-d:a.top+a.height;var b=function(e,t,o,n){var r=l(o).width,i=e-n,s=e+n+t;return i<0?-i:s>r?r-s:0}(u,h,i,s);u+=b,f=50*(1-2*b/h)+"%",m=void 0}return{positionLeft:u,positionTop:p,arrowOffsetLeft:f,arrowOffsetTop:m}};var n=a(o(2565)),r=a(o(7265)),i=a(o(504)),s=a(o(290));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=void 0,o=void 0,r=void 0;if("BODY"===e.tagName)t=window.innerWidth,o=window.innerHeight,r=(0,i.default)((0,s.default)(e).documentElement)||(0,i.default)(e);else{var a=(0,n.default)(e);t=a.width,o=a.height,r=(0,i.default)(e)}return{width:t,height:o,scroll:r}}e.exports=t.default},3464:(e,t,o)=>{t.__esModule=!0,t.default=function(e,t){return e="function"==typeof e?e():e,r.default.findDOMNode(e)||t};var n,r=(n=o(6405))&&n.__esModule?n:{default:n};e.exports=t.default},290:(e,t,o)=>{t.__esModule=!0,t.default=function(e){return(0,r.default)(n.default.findDOMNode(e))};var n=i(o(6405)),r=i(o(9981));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},644:(e,t,o)=>{t.ZP=t.cn=t.d0=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}(o(5697)),r=a(o(6689)),i=a(o(6405)),s=o(6871);function a(e){return e&&e.__esModule?e:{default:e}}o(4726);var l="unmounted",c="exited",d="entering";t.d0=d;var h="entered";t.cn=h;var u="exiting",p=function(e){var t,o;function n(t,o){var n;n=e.call(this,t,o)||this;var r,i=o.transitionGroup,s=i&&!i.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?s?(r=c,n.appearStatus=d):r=h:r=t.unmountOnExit||t.mountOnEnter?l:c,n.state={status:r},n.nextCallback=null,n}o=e,(t=n).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var s=n.prototype;return s.getChildContext=function(){return{transitionGroup:null}},n.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:c}:null},s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(e){var t=null;if(e!==this.props){var o=this.state.status;this.props.in?o!==d&&o!==h&&(t=d):o!==d&&o!==h||(t=u)}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var e,t,o,n=this.props.timeout;return e=t=o=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,o=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:o}},s.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var o=i.default.findDOMNode(this);t===d?this.performEnter(o,e):this.performExit(o)}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},s.performEnter=function(e,t){var o=this,n=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),s=r?i.appear:i.enter;t||n?(this.props.onEnter(e,r),this.safeSetState({status:d},(function(){o.props.onEntering(e,r),o.onTransitionEnd(e,s,(function(){o.safeSetState({status:h},(function(){o.props.onEntered(e,r)}))}))}))):this.safeSetState({status:h},(function(){o.props.onEntered(e)}))},s.performExit=function(e){var t=this,o=this.props.exit,n=this.getTimeouts();o?(this.props.onExit(e),this.safeSetState({status:u},(function(){t.props.onExiting(e),t.onTransitionEnd(e,n.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(e)}))},s.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},s.setNextCallback=function(e){var t=this,o=!0;return this.nextCallback=function(n){o&&(o=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},s.onTransitionEnd=function(e,t,o){this.setNextCallback(o);var n=null==t&&!this.props.addEndListener;e&&!n?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},s.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,o=t.children,n=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(t,["children"]);if(delete n.in,delete n.mountOnEnter,delete n.unmountOnExit,delete n.appear,delete n.enter,delete n.exit,delete n.timeout,delete n.addEndListener,delete n.onEnter,delete n.onEntering,delete n.onEntered,delete n.onExit,delete n.onExiting,delete n.onExited,"function"==typeof o)return o(e,n);var i=r.default.Children.only(o);return r.default.cloneElement(i,n)},n}(r.default.Component);function f(){}p.contextTypes={transitionGroup:n.object},p.childContextTypes={transitionGroup:function(){}},p.propTypes={},p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},p.UNMOUNTED=0,p.EXITED=1,p.ENTERING=2,p.ENTERED=3,p.EXITING=4;var m=(0,s.polyfill)(p);t.ZP=m},4726:(e,t,o)=>{var n;t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,(n=o(5697))&&n.__esModule,t.timeoutsShape=null,t.classNamesShape=null},6115:e=>{var t;t="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},e.exports=t},670:e=>{e.exports=function(){}},6689:e=>{e.exports=o(2735)},6405:e=>{e.exports=o(2788)},8149:(e,t,o)=>{e.exports=o(3285)},3562:(e,t,o)=>{e.exports=o(7965)},434:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{r.r(i),r.d(i,{CHANGES_BAR_MIN_WIDTH:()=>c.QW,CHANGES_BAR_RIGHT_MARGIN:()=>c.SZ,CHANGES_ZONE_MIN_WIDTH:()=>c.v1,CHANGES_ZONE_SHOW_ICON_WIDTH:()=>c.Oi,COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER:()=>c.Y8,COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER:()=>c.LG,COMMIT_AUTHOR_ZONE_MIN_WIDTH:()=>c.eq,COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH:()=>c.m8,COMMIT_DATE_TIME_ZONE_MIN_WIDTH:()=>c.q1,COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH:()=>c.jg,COMMIT_MESSAGE_ZONE_MIN_WIDTH:()=>c.B8,COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH:()=>c.j_,COMMIT_NODE_MIN_ALPHA:()=>c.l3,COMMIT_SHA_ZONE_MIN_WIDTH:()=>c.xI,COMMIT_SHA_ZONE_SHOW_ICON_WIDTH:()=>c.lG,COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN:()=>c.Wu,COMMIT_ZONE_EDGE_ARC_PADDING:()=>c.NP,COMMIT_ZONE_EDGE_ARC_RADIUS:()=>c.O5,COMMIT_ZONE_MARGIN_BOTTOM:()=>c.$s,COMMIT_ZONE_MARGIN_TOP:()=>c.An,COMMIT_ZONE_ROW_HEIGHT:()=>c.at,COMMIT_ZONE_ROW_INNER_HEIGHT:()=>c.P3,COMMIT_ZONE_SHOW_ICON_WIDTH:()=>c.jn,CommitDateTimeSources:()=>n.Gu,DEFAULT_AVATAR_BACKGROUND_COLOR:()=>c.iq,DEFAULT_COMMIT_SHA_LENGTH:()=>c.ai,DEFAULT_WORKDIR_STATS:()=>c.OR,DndComponent:()=>e.Z,GRAPH_HEADER_ROW_HEIGHT:()=>c.rl,GRAPH_ROW_HEIGHT:()=>c.$0,GRAPH_ROW_INNER_HEIGHT:()=>c.cZ,GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET:()=>c.qG,GRAPH_SCROLL_MARKER_LANES:()=>c.dF,GraphColumnMode:()=>c.Um,GraphMarkerShape:()=>c.RG,HEADER_ROW_HEIGHT:()=>c.ze,HEADER_ROW_MARGIN_BOTTOM:()=>c.wi,INLINE_SUMMARY_MARGIN_LEFT:()=>c.aV,LeftPanelToGraphMarginGap:()=>c.mu,OPACITY_FACTOR_BY_THEME:()=>c.X9,REF_NODE_ICON_MARGIN:()=>c.am,REF_NODE_ICON_SPACING:()=>c.B,REF_NODE_ICON_WIDTH:()=>c.Rg,REF_NODE_OUTER_SPACING:()=>c.Vh,REF_ZONE_MARGIN_LEFT:()=>c.yv,REF_ZONE_MARGIN_RIGHT:()=>c.PB,REF_ZONE_MAX_REFS_TO_RENDER:()=>c.v6,REF_ZONE_MIN_WIDTH:()=>c.wy,REF_ZONE_SHOW_ICON_WIDTH:()=>c.mt,REF_ZONE_TEXT_HEIGHT:()=>c.pj,ResizableHandleCorrection:()=>c.b4,SCROLL_TO_ALIGNMENT_AUTO:()=>c.os,SCROLL_TO_ALIGNMENT_CENTER:()=>c.MQ,ScrollbarContainer:()=>t.Z,TIMESTAMP_FORMAT_DATE_TIME:()=>c.It,TINY_FILES_READOUT_FONT_SIZE:()=>c.wd,TINY_FILES_READOUT_RIGHT_MARGIN:()=>c.IX,TINY_ICON_RIGHT_MARGIN:()=>c.VB,TINY_ICON_SIZE:()=>c.dH,allMetadataTypes:()=>d.AI,changesZone:()=>c.WD,commitAuthorZone:()=>c.GF,commitDateTimeZone:()=>c.PL,commitMessageZone:()=>c.KE,commitNodeType:()=>n.o$,commitShaZone:()=>c.av,commitZone:()=>c.Wm,default:()=>m,getHostingServiceName:()=>h.y,graphCommitDescDisplayModes:()=>c.R_,graphMarkerMetadata:()=>c.Qh,graphMarkerShapeMetadata:()=>c.d_,graphZoneMetaData:()=>c.qi,issueMetadataType:()=>d.$M,lookbackLimitByPeriod:()=>c.YJ,mergeConflictNodeType:()=>n.S7,mergeNodeType:()=>n.lH,numGraphColumnsDefault:()=>c.uK,pullRequestMetadataType:()=>d.mQ,refTypes:()=>u.V,refZone:()=>c.jZ,stashNodeType:()=>n.kP,timelineMsgRowRenderId:()=>c.Gn,unsupportedRebaseWarningNodeType:()=>n.br,upstreamMetadataType:()=>d.uq,workDirType:()=>n.ch});var e=r(9915),t=r(7154),o=r(3607),n=r(827),s=r(2149),a={};for(const e in s)["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType"].indexOf(e)<0&&(a[e]=()=>s[e]);r.d(i,a);var l=r(8289);a={};for(const e in l)["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType"].indexOf(e)<0&&(a[e]=()=>l[e]);r.d(i,a);var c=r(3308),d=r(9453),h=r(7334),u=r(8649),p=r(664);a={};for(const e in p)["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MAX_REFS_TO_RENDER","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphCommitDescDisplayModes","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refTypes"].indexOf(e)<0&&(a[e]=()=>p[e]);r.d(i,a);var f=r(6756);a={};for(const e in f)["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MAX_REFS_TO_RENDER","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphCommitDescDisplayModes","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refTypes"].indexOf(e)<0&&(a[e]=()=>f[e]);r.d(i,a);var m=o.Z})(),e.exports=i})()},4516:e=>{var t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))o.call(i,c)&&(a[c]=i[c]);if(t){s=t(i);for(var d=0;d<s.length;d++)n.call(i,s[d])&&(a[s[d]]=i[s[d]])}}return a}},3975:(e,t,o)=>{var n=o(2735),r=o(4516),i=o(9146);function s(e){for(var t=arguments.length-1,o="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)o+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,o,n,r,i,s,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[o,n,r,i,s,a],c=0;(e=Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",o)}function a(e,t,o,n,r,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(o,c)}catch(e){this.onError(e)}}n||s("227");var l=!1,c=null,d=!1,h=null,u={onError:function(e){l=!0,c=e}};function p(e,t,o,n,r,i,s,d,h){l=!1,c=null,a.apply(u,arguments)}var f=null,m={};function g(){if(f)for(var e in m){var t=m[e],o=f.indexOf(e);if(-1<o||s("96",e),!v[o])for(var n in t.extractEvents||s("97",e),v[o]=t,o=t.eventTypes){var r=void 0,i=o[n],a=t,l=n;y.hasOwnProperty(l)&&s("99",l),y[l]=i;var c=i.phasedRegistrationNames;if(c){for(r in c)c.hasOwnProperty(r)&&b(c[r],a,l);r=!0}else i.registrationName?(b(i.registrationName,a,l),r=!0):r=!1;r||s("98",n,e)}}}function b(e,t,o){w[e]&&s("100",e),w[e]=t,C[e]=t.eventTypes[o].dependencies}var v=[],y={},w={},C={},x=null,S=null,_=null;function T(e,t,o){var n=e.type||"unknown-event";e.currentTarget=_(o),function(e,t,o,n,r,i,a,u,f){if(p.apply(this,arguments),l){if(l){var m=c;l=!1,c=null}else s("198"),m=void 0;d||(d=!0,h=m)}}(n,t,void 0,e),e.currentTarget=null}function R(e,t){return null==t&&s("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function k(e,t,o){Array.isArray(e)?e.forEach(t,o):e&&t.call(o,e)}var E=null;function O(e){if(e){var t=e._dispatchListeners,o=e._dispatchInstances;if(Array.isArray(t))for(var n=0;n<t.length&&!e.isPropagationStopped();n++)T(e,t[n],o[n]);else t&&T(e,t,o);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}var I={injectEventPluginOrder:function(e){f&&s("101"),f=Array.prototype.slice.call(e),g()},injectEventPluginsByName:function(e){var t,o=!1;for(t in e)if(e.hasOwnProperty(t)){var n=e[t];m.hasOwnProperty(t)&&m[t]===n||(m[t]&&s("102",t),m[t]=n,o=!0)}o&&g()}};function M(e,t){var o=e.stateNode;if(!o)return null;var n=x(o);if(!n)return null;o=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break e;default:e=!1}return e?null:(o&&"function"!=typeof o&&s("231",t,typeof o),o)}function D(e){if(null!==e&&(E=R(E,e)),e=E,E=null,e&&(k(e,O),E&&s("95"),d))throw e=h,d=!1,h=null,e}var $=Math.random().toString(36).slice(2),N="__reactInternalInstance$"+$,A="__reactEventHandlers$"+$;function P(e){if(e[N])return e[N];for(;!e[N];){if(!e.parentNode)return null;e=e.parentNode}return 5===(e=e[N]).tag||6===e.tag?e:null}function z(e){return!(e=e[N])||5!==e.tag&&6!==e.tag?null:e}function H(e){if(5===e.tag||6===e.tag)return e.stateNode;s("33")}function L(e){return e[A]||null}function G(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function F(e,t,o){(t=M(e,o.dispatchConfig.phasedRegistrationNames[t]))&&(o._dispatchListeners=R(o._dispatchListeners,t),o._dispatchInstances=R(o._dispatchInstances,e))}function B(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,o=[];t;)o.push(t),t=G(t);for(t=o.length;0<t--;)F(o[t],"captured",e);for(t=0;t<o.length;t++)F(o[t],"bubbled",e)}}function W(e,t,o){e&&o&&o.dispatchConfig.registrationName&&(t=M(e,o.dispatchConfig.registrationName))&&(o._dispatchListeners=R(o._dispatchListeners,t),o._dispatchInstances=R(o._dispatchInstances,e))}function U(e){e&&e.dispatchConfig.registrationName&&W(e._targetInst,null,e)}function j(e){k(e,B)}var V=!("undefined"==typeof window||!window.document||!window.document.createElement);function Z(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var q={animationend:Z("Animation","AnimationEnd"),animationiteration:Z("Animation","AnimationIteration"),animationstart:Z("Animation","AnimationStart"),transitionend:Z("Transition","TransitionEnd")},K={},Y={};function X(e){if(K[e])return K[e];if(!q[e])return e;var t,o=q[e];for(t in o)if(o.hasOwnProperty(t)&&t in Y)return K[e]=o[t];return e}V&&(Y=document.createElement("div").style,"AnimationEvent"in window||(delete q.animationend.animation,delete q.animationiteration.animation,delete q.animationstart.animation),"TransitionEvent"in window||delete q.transitionend.transition);var Q=X("animationend"),J=X("animationiteration"),ee=X("animationstart"),te=X("transitionend"),oe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ne=null,re=null,ie=null;function se(){if(ie)return ie;var e,t,o=re,n=o.length,r="value"in ne?ne.value:ne.textContent,i=r.length;for(e=0;e<n&&o[e]===r[e];e++);var s=n-e;for(t=1;t<=s&&o[n-t]===r[i-t];t++);return ie=r.slice(e,1<t?1-t:void 0)}function ae(){return!0}function le(){return!1}function ce(e,t,o,n){for(var r in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=o,e=this.constructor.Interface)e.hasOwnProperty(r)&&((t=e[r])?this[r]=t(o):"target"===r?this.target=n:this[r]=o[r]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?ae:le,this.isPropagationStopped=le,this}function de(e,t,o,n){if(this.eventPool.length){var r=this.eventPool.pop();return this.call(r,e,t,o,n),r}return new this(e,t,o,n)}function he(e){e instanceof this||s("279"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function ue(e){e.eventPool=[],e.getPooled=de,e.release=he}r(ce.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ae)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ae)},persist:function(){this.isPersistent=ae},isPersistent:le,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=le,this._dispatchInstances=this._dispatchListeners=null}}),ce.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},ce.extend=function(e){function t(){}function o(){return n.apply(this,arguments)}var n=this;t.prototype=n.prototype;var i=new t;return r(i,o.prototype),o.prototype=i,o.prototype.constructor=o,o.Interface=r({},n.Interface,e),o.extend=n.extend,ue(o),o},ue(ce);var pe=ce.extend({data:null}),fe=ce.extend({data:null}),me=[9,13,27,32],ge=V&&"CompositionEvent"in window,be=null;V&&"documentMode"in document&&(be=document.documentMode);var ve=V&&"TextEvent"in window&&!be,ye=V&&(!ge||be&&8<be&&11>=be),we=String.fromCharCode(32),Ce={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},xe=!1;function Se(e,t){switch(e){case"keyup":return-1!==me.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function _e(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Te=!1;var Re={eventTypes:Ce,extractEvents:function(e,t,o,n){var r=void 0,i=void 0;if(ge)e:{switch(e){case"compositionstart":r=Ce.compositionStart;break e;case"compositionend":r=Ce.compositionEnd;break e;case"compositionupdate":r=Ce.compositionUpdate;break e}r=void 0}else Te?Se(e,o)&&(r=Ce.compositionEnd):"keydown"===e&&229===o.keyCode&&(r=Ce.compositionStart);return r?(ye&&"ko"!==o.locale&&(Te||r!==Ce.compositionStart?r===Ce.compositionEnd&&Te&&(i=se()):(re="value"in(ne=n)?ne.value:ne.textContent,Te=!0)),r=pe.getPooled(r,t,o,n),i?r.data=i:null!==(i=_e(o))&&(r.data=i),j(r),i=r):i=null,(e=ve?function(e,t){switch(e){case"compositionend":return _e(t);case"keypress":return 32!==t.which?null:(xe=!0,we);case"textInput":return(e=t.data)===we&&xe?null:e;default:return null}}(e,o):function(e,t){if(Te)return"compositionend"===e||!ge&&Se(e,t)?(e=se(),ie=re=ne=null,Te=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ye&&"ko"!==t.locale?null:t.data}}(e,o))?((t=fe.getPooled(Ce.beforeInput,t,o,n)).data=e,j(t)):t=null,null===i?t:null===t?i:[i,t]}},ke=null,Ee=null,Oe=null;function Ie(e){if(e=S(e)){"function"!=typeof ke&&s("280");var t=x(e.stateNode);ke(e.stateNode,e.type,t)}}function Me(e){Ee?Oe?Oe.push(e):Oe=[e]:Ee=e}function De(){if(Ee){var e=Ee,t=Oe;if(Oe=Ee=null,Ie(e),t)for(e=0;e<t.length;e++)Ie(t[e])}}function $e(e,t){return e(t)}function Ne(e,t,o){return e(t,o)}function Ae(){}var Pe=!1;function ze(e,t){if(Pe)return e(t);Pe=!0;try{return $e(e,t)}finally{Pe=!1,(null!==Ee||null!==Oe)&&(Ae(),De())}}var He={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Le(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!He[e.type]:"textarea"===t}function Ge(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function Fe(e){if(!V)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}function Be(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function We(e){e._valueTracker||(e._valueTracker=function(e){var t=Be(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==o&&"function"==typeof o.get&&"function"==typeof o.set){var r=o.get,i=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){n=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Ue(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),n="";return e&&(n=Be(e)?e.checked?"true":"false":e.value),(e=n)!==o&&(t.setValue(e),!0)}var je=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;je.hasOwnProperty("ReactCurrentDispatcher")||(je.ReactCurrentDispatcher={current:null});var Ve=/^(.*)[\\\/]/,Ze="function"==typeof Symbol&&Symbol.for,qe=Ze?Symbol.for("react.element"):60103,Ke=Ze?Symbol.for("react.portal"):60106,Ye=Ze?Symbol.for("react.fragment"):60107,Xe=Ze?Symbol.for("react.strict_mode"):60108,Qe=Ze?Symbol.for("react.profiler"):60114,Je=Ze?Symbol.for("react.provider"):60109,et=Ze?Symbol.for("react.context"):60110,tt=Ze?Symbol.for("react.concurrent_mode"):60111,ot=Ze?Symbol.for("react.forward_ref"):60112,nt=Ze?Symbol.for("react.suspense"):60113,rt=Ze?Symbol.for("react.memo"):60115,it=Ze?Symbol.for("react.lazy"):60116,st="function"==typeof Symbol&&Symbol.iterator;function at(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=st&&e[st]||e["@@iterator"])?e:null}function lt(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case tt:return"ConcurrentMode";case Ye:return"Fragment";case Ke:return"Portal";case Qe:return"Profiler";case Xe:return"StrictMode";case nt:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case et:return"Context.Consumer";case Je:return"Context.Provider";case ot:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case rt:return lt(e.type);case it:if(e=1===e._status?e._result:null)return lt(e)}return null}function ct(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var o="";break e;default:var n=e._debugOwner,r=e._debugSource,i=lt(e.type);o=null,n&&(o=lt(n.type)),n=i,i="",r?i=" (at "+r.fileName.replace(Ve,"")+":"+r.lineNumber+")":o&&(i=" (created by "+o+")"),o="\n    in "+(n||"Unknown")+i}t+=o,e=e.return}while(e);return t}var dt=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ht=Object.prototype.hasOwnProperty,ut={},pt={};function ft(e,t,o,n,r){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=o,this.propertyName=e,this.type=t}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){mt[e]=new ft(e,0,!1,e,null)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];mt[t]=new ft(t,1,!1,e[1],null)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){mt[e]=new ft(e,2,!1,e.toLowerCase(),null)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){mt[e]=new ft(e,2,!1,e,null)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){mt[e]=new ft(e,3,!1,e.toLowerCase(),null)})),["checked","multiple","muted","selected"].forEach((function(e){mt[e]=new ft(e,3,!0,e,null)})),["capture","download"].forEach((function(e){mt[e]=new ft(e,4,!1,e,null)})),["cols","rows","size","span"].forEach((function(e){mt[e]=new ft(e,6,!1,e,null)})),["rowSpan","start"].forEach((function(e){mt[e]=new ft(e,5,!1,e.toLowerCase(),null)}));var gt=/[\-:]([a-z])/g;function bt(e){return e[1].toUpperCase()}function vt(e,t,o,n){var r=mt.hasOwnProperty(t)?mt[t]:null;(null!==r?0===r.type:!n&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,o,n){if(null==t||function(e,t,o,n){if(null!==o&&0===o.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!n&&(null!==o?!o.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,o,n))return!0;if(n)return!1;if(null!==o)switch(o.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,o,r,n)&&(o=null),n||null===r?function(e){return!!ht.call(pt,e)||!ht.call(ut,e)&&(dt.test(e)?pt[e]=!0:(ut[e]=!0,!1))}(t)&&(null===o?e.removeAttribute(t):e.setAttribute(t,""+o)):r.mustUseProperty?e[r.propertyName]=null===o?3!==r.type&&"":o:(t=r.attributeName,n=r.attributeNamespace,null===o?e.removeAttribute(t):(o=3===(r=r.type)||4===r&&!0===o?"":""+o,n?e.setAttributeNS(n,t,o):e.setAttribute(t,o))))}function yt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function wt(e,t){var o=t.checked;return r({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=o?o:e._wrapperState.initialChecked})}function Ct(e,t){var o=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;o=yt(null!=t.value?t.value:o),e._wrapperState={initialChecked:n,initialValue:o,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function xt(e,t){null!=(t=t.checked)&&vt(e,"checked",t,!1)}function St(e,t){xt(e,t);var o=yt(t.value),n=t.type;if(null!=o)"number"===n?(0===o&&""===e.value||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if("submit"===n||"reset"===n)return void e.removeAttribute("value");t.hasOwnProperty("value")?Tt(e,t.type,o):t.hasOwnProperty("defaultValue")&&Tt(e,t.type,yt(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function _t(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}""!==(o=e.name)&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!!e._wrapperState.initialChecked,""!==o&&(e.name=o)}function Tt(e,t,o){"number"===t&&e.ownerDocument.activeElement===e||(null==o?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(gt,bt);mt[t]=new ft(t,1,!1,e,null)})),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(gt,bt);mt[t]=new ft(t,1,!1,e,"http://www.w3.org/1999/xlink")})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(gt,bt);mt[t]=new ft(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")})),["tabIndex","crossOrigin"].forEach((function(e){mt[e]=new ft(e,1,!1,e.toLowerCase(),null)}));var Rt={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function kt(e,t,o){return(e=ce.getPooled(Rt.change,e,t,o)).type="change",Me(o),j(e),e}var Et=null,Ot=null;function It(e){D(e)}function Mt(e){if(Ue(H(e)))return e}function Dt(e,t){if("change"===e)return t}var $t=!1;function Nt(){Et&&(Et.detachEvent("onpropertychange",At),Ot=Et=null)}function At(e){"value"===e.propertyName&&Mt(Ot)&&ze(It,e=kt(Ot,e,Ge(e)))}function Pt(e,t,o){"focus"===e?(Nt(),Ot=o,(Et=t).attachEvent("onpropertychange",At)):"blur"===e&&Nt()}function zt(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Mt(Ot)}function Ht(e,t){if("click"===e)return Mt(t)}function Lt(e,t){if("input"===e||"change"===e)return Mt(t)}V&&($t=Fe("input")&&(!document.documentMode||9<document.documentMode));var Gt={eventTypes:Rt,_isInputEventSupported:$t,extractEvents:function(e,t,o,n){var r=t?H(t):window,i=void 0,s=void 0,a=r.nodeName&&r.nodeName.toLowerCase();if("select"===a||"input"===a&&"file"===r.type?i=Dt:Le(r)?$t?i=Lt:(i=zt,s=Pt):(a=r.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===r.type||"radio"===r.type)&&(i=Ht),i&&(i=i(e,t)))return kt(i,o,n);s&&s(e,r,t),"blur"===e&&(e=r._wrapperState)&&e.controlled&&"number"===r.type&&Tt(r,"number",r.value)}},Ft=ce.extend({view:null,detail:null}),Bt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wt(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Bt[e])&&!!t[e]}function Ut(){return Wt}var jt=0,Vt=0,Zt=!1,qt=!1,Kt=Ft.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Ut,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=jt;return jt=e.screenX,Zt?"mousemove"===e.type?e.screenX-t:0:(Zt=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Vt;return Vt=e.screenY,qt?"mousemove"===e.type?e.screenY-t:0:(qt=!0,0)}}),Yt=Kt.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xt={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Qt={eventTypes:Xt,extractEvents:function(e,t,o,n){var r="mouseover"===e||"pointerover"===e,i="mouseout"===e||"pointerout"===e;if(r&&(o.relatedTarget||o.fromElement)||!i&&!r)return null;if(r=n.window===n?n:(r=n.ownerDocument)?r.defaultView||r.parentWindow:window,i?(i=t,t=(t=o.relatedTarget||o.toElement)?P(t):null):i=null,i===t)return null;var s=void 0,a=void 0,l=void 0,c=void 0;"mouseout"===e||"mouseover"===e?(s=Kt,a=Xt.mouseLeave,l=Xt.mouseEnter,c="mouse"):"pointerout"!==e&&"pointerover"!==e||(s=Yt,a=Xt.pointerLeave,l=Xt.pointerEnter,c="pointer");var d=null==i?r:H(i);if(r=null==t?r:H(t),(e=s.getPooled(a,i,o,n)).type=c+"leave",e.target=d,e.relatedTarget=r,(o=s.getPooled(l,t,o,n)).type=c+"enter",o.target=r,o.relatedTarget=d,n=t,i&&n)e:{for(r=n,c=0,s=t=i;s;s=G(s))c++;for(s=0,l=r;l;l=G(l))s++;for(;0<c-s;)t=G(t),c--;for(;0<s-c;)r=G(r),s--;for(;c--;){if(t===r||t===r.alternate)break e;t=G(t),r=G(r)}t=null}else t=null;for(r=t,t=[];i&&i!==r&&(null===(c=i.alternate)||c!==r);)t.push(i),i=G(i);for(i=[];n&&n!==r&&(null===(c=n.alternate)||c!==r);)i.push(n),n=G(n);for(n=0;n<t.length;n++)W(t[n],"bubbled",e);for(n=i.length;0<n--;)W(i[n],"captured",o);return[e,o]}};function Jt(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}var eo=Object.prototype.hasOwnProperty;function to(e,t){if(Jt(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;for(n=0;n<o.length;n++)if(!eo.call(t,o[n])||!Jt(e[o[n]],t[o[n]]))return!1;return!0}function oo(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(0!=(2&(t=t.return).effectTag))return 1}return 3===t.tag?2:3}function no(e){2!==oo(e)&&s("188")}function ro(e){if(e=function(e){var t=e.alternate;if(!t)return 3===(t=oo(e))&&s("188"),1===t?null:e;for(var o=e,n=t;;){var r=o.return,i=r?r.alternate:null;if(!r||!i)break;if(r.child===i.child){for(var a=r.child;a;){if(a===o)return no(r),e;if(a===n)return no(r),t;a=a.sibling}s("188")}if(o.return!==n.return)o=r,n=i;else{a=!1;for(var l=r.child;l;){if(l===o){a=!0,o=r,n=i;break}if(l===n){a=!0,n=r,o=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===o){a=!0,o=i,n=r;break}if(l===n){a=!0,n=i,o=r;break}l=l.sibling}a||s("189")}}o.alternate!==n&&s("190")}return 3!==o.tag&&s("188"),o.stateNode.current===o?e:t}(e),!e)return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}var io=ce.extend({animationName:null,elapsedTime:null,pseudoElement:null}),so=ce.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ao=Ft.extend({relatedTarget:null});function lo(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var co={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ho={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uo=Ft.extend({key:function(e){if(e.key){var t=co[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=lo(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?ho[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Ut,charCode:function(e){return"keypress"===e.type?lo(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?lo(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),po=Kt.extend({dataTransfer:null}),fo=Ft.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Ut}),mo=ce.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),go=Kt.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),bo=[["abort","abort"],[Q,"animationEnd"],[J,"animationIteration"],[ee,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[te,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],vo={},yo={};function wo(e,t){var o=e[0],n="on"+((e=e[1])[0].toUpperCase()+e.slice(1));t={phasedRegistrationNames:{bubbled:n,captured:n+"Capture"},dependencies:[o],isInteractive:t},vo[e]=t,yo[o]=t}[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach((function(e){wo(e,!0)})),bo.forEach((function(e){wo(e,!1)}));var Co={eventTypes:vo,isInteractiveTopLevelEventType:function(e){return void 0!==(e=yo[e])&&!0===e.isInteractive},extractEvents:function(e,t,o,n){var r=yo[e];if(!r)return null;switch(e){case"keypress":if(0===lo(o))return null;case"keydown":case"keyup":e=uo;break;case"blur":case"focus":e=ao;break;case"click":if(2===o.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=Kt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=po;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=fo;break;case Q:case J:case ee:e=io;break;case te:e=mo;break;case"scroll":e=Ft;break;case"wheel":e=go;break;case"copy":case"cut":case"paste":e=so;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Yt;break;default:e=ce}return j(t=e.getPooled(r,t,o,n)),t}},xo=Co.isInteractiveTopLevelEventType,So=[];function _o(e){var t=e.targetInst,o=t;do{if(!o){e.ancestors.push(o);break}var n;for(n=o;n.return;)n=n.return;if(!(n=3!==n.tag?null:n.stateNode.containerInfo))break;e.ancestors.push(o),o=P(n)}while(o);for(o=0;o<e.ancestors.length;o++){t=e.ancestors[o];var r=Ge(e.nativeEvent);n=e.topLevelType;for(var i=e.nativeEvent,s=null,a=0;a<v.length;a++){var l=v[a];l&&(l=l.extractEvents(n,t,i,r))&&(s=R(s,l))}D(s)}}var To=!0;function Ro(e,t){if(!t)return null;var o=(xo(e)?Eo:Oo).bind(null,e);t.addEventListener(e,o,!1)}function ko(e,t){if(!t)return null;var o=(xo(e)?Eo:Oo).bind(null,e);t.addEventListener(e,o,!0)}function Eo(e,t){Ne(Oo,e,t)}function Oo(e,t){if(To){var o=Ge(t);if(null===(o=P(o))||"number"!=typeof o.tag||2===oo(o)||(o=null),So.length){var n=So.pop();n.topLevelType=e,n.nativeEvent=t,n.targetInst=o,e=n}else e={topLevelType:e,nativeEvent:t,targetInst:o,ancestors:[]};try{ze(_o,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>So.length&&So.push(e)}}}var Io={},Mo=0,Do="_reactListenersID"+(""+Math.random()).slice(2);function $o(e){return Object.prototype.hasOwnProperty.call(e,Do)||(e[Do]=Mo++,Io[e[Do]]={}),Io[e[Do]]}function No(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Ao(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Po(e,t){var o,n=Ao(e);for(e=0;n;){if(3===n.nodeType){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ao(n)}}function zo(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?zo(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Ho(){for(var e=window,t=No();t instanceof e.HTMLIFrameElement;){try{e=t.contentDocument.defaultView}catch(e){break}t=No(e.document)}return t}function Lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Go(e){var t=Ho(),o=e.focusedElem,n=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&zo(o.ownerDocument.documentElement,o)){if(null!==n&&Lo(o))if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if((e=(t=o.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var r=o.textContent.length,i=Math.min(n.start,r);n=void 0===n.end?i:Math.min(n.end,r),!e.extend&&i>n&&(r=n,n=i,i=r),r=Po(o,i);var s=Po(o,n);r&&s&&(1!==e.rangeCount||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(r.node,r.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=o;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof o.focus&&o.focus(),o=0;o<t.length;o++)(e=t[o]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fo=V&&"documentMode"in document&&11>=document.documentMode,Bo={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Wo=null,Uo=null,jo=null,Vo=!1;function Zo(e,t){var o=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return Vo||null==Wo||Wo!==No(o)?null:("selectionStart"in(o=Wo)&&Lo(o)?o={start:o.selectionStart,end:o.selectionEnd}:o={anchorNode:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset},jo&&to(jo,o)?null:(jo=o,(e=ce.getPooled(Bo.select,Uo,e,t)).type="select",e.target=Wo,j(e),e))}var qo={eventTypes:Bo,extractEvents:function(e,t,o,n){var r,i=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;if(!(r=!i)){e:{i=$o(i),r=C.onSelect;for(var s=0;s<r.length;s++){var a=r[s];if(!i.hasOwnProperty(a)||!i[a]){i=!1;break e}}i=!0}r=!i}if(r)return null;switch(i=t?H(t):window,e){case"focus":(Le(i)||"true"===i.contentEditable)&&(Wo=i,Uo=t,jo=null);break;case"blur":jo=Uo=Wo=null;break;case"mousedown":Vo=!0;break;case"contextmenu":case"mouseup":case"dragend":return Vo=!1,Zo(o,n);case"selectionchange":if(Fo)break;case"keydown":case"keyup":return Zo(o,n)}return null}};function Ko(e,t){return e=r({children:void 0},t),(t=function(e){var t="";return n.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function Yo(e,t,o,n){if(e=e.options,t){t={};for(var r=0;r<o.length;r++)t["$"+o[r]]=!0;for(o=0;o<e.length;o++)r=t.hasOwnProperty("$"+e[o].value),e[o].selected!==r&&(e[o].selected=r),r&&n&&(e[o].defaultSelected=!0)}else{for(o=""+yt(o),t=null,r=0;r<e.length;r++){if(e[r].value===o)return e[r].selected=!0,void(n&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function Xo(e,t){return null!=t.dangerouslySetInnerHTML&&s("91"),r({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qo(e,t){var o=t.value;null==o&&(o=t.defaultValue,null!=(t=t.children)&&(null!=o&&s("92"),Array.isArray(t)&&(1>=t.length||s("93"),t=t[0]),o=t),null==o&&(o="")),e._wrapperState={initialValue:yt(o)}}function Jo(e,t){var o=yt(t.value),n=yt(t.defaultValue);null!=o&&((o=""+o)!==e.value&&(e.value=o),null==t.defaultValue&&e.defaultValue!==o&&(e.defaultValue=o)),null!=n&&(e.defaultValue=""+n)}function en(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}I.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),x=L,S=z,_=H,I.injectEventPluginsByName({SimpleEventPlugin:Co,EnterLeaveEventPlugin:Qt,ChangeEventPlugin:Gt,SelectEventPlugin:qo,BeforeInputEventPlugin:Re});var tn={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function on(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nn(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?on(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var rn,sn=void 0,an=(rn=function(e,t){if(e.namespaceURI!==tn.svg||"innerHTML"in e)e.innerHTML=t;else{for((sn=sn||document.createElement("div")).innerHTML="<svg>"+t+"</svg>",t=sn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,o,n){MSApp.execUnsafeLocalFunction((function(){return rn(e,t)}))}:rn);function ln(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&3===o.nodeType)return void(o.nodeValue=t)}e.textContent=t}var cn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dn=["Webkit","ms","Moz","O"];function hn(e,t,o){return null==t||"boolean"==typeof t||""===t?"":o||"number"!=typeof t||0===t||cn.hasOwnProperty(e)&&cn[e]?(""+t).trim():t+"px"}function un(e,t){for(var o in e=e.style,t)if(t.hasOwnProperty(o)){var n=0===o.indexOf("--"),r=hn(o,t[o],n);"float"===o&&(o="cssFloat"),n?e.setProperty(o,r):e[o]=r}}Object.keys(cn).forEach((function(e){dn.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cn[t]=cn[e]}))}));var pn=r({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fn(e,t){t&&(pn[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&s("137",e,""),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&s("60"),"object"==typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML||s("61")),null!=t.style&&"object"!=typeof t.style&&s("62",""))}function mn(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function gn(e,t){var o=$o(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=C[t];for(var n=0;n<t.length;n++){var r=t[n];if(!o.hasOwnProperty(r)||!o[r]){switch(r){case"scroll":ko("scroll",e);break;case"focus":case"blur":ko("focus",e),ko("blur",e),o.blur=!0,o.focus=!0;break;case"cancel":case"close":Fe(r)&&ko(r,e);break;case"invalid":case"submit":case"reset":break;default:-1===oe.indexOf(r)&&Ro(r,e)}o[r]=!0}}}function bn(){}var vn=null,yn=null;function wn(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Cn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var xn="function"==typeof setTimeout?setTimeout:void 0,Sn="function"==typeof clearTimeout?clearTimeout:void 0,_n=i.unstable_scheduleCallback,Tn=i.unstable_cancelCallback;function Rn(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}function kn(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}new Set;var En=[],On=-1;function In(e){0>On||(e.current=En[On],En[On]=null,On--)}function Mn(e,t){On++,En[On]=e.current,e.current=t}var Dn={},$n={current:Dn},Nn={current:!1},An=Dn;function Pn(e,t){var o=e.type.contextTypes;if(!o)return Dn;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var r,i={};for(r in o)i[r]=t[r];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zn(e){return null!=(e=e.childContextTypes)}function Hn(e){In(Nn),In($n)}function Ln(e){In(Nn),In($n)}function Gn(e,t,o){$n.current!==Dn&&s("168"),Mn($n,t),Mn(Nn,o)}function Fn(e,t,o){var n=e.stateNode;if(e=t.childContextTypes,"function"!=typeof n.getChildContext)return o;for(var i in n=n.getChildContext())i in e||s("108",lt(t)||"Unknown",i);return r({},o,n)}function Bn(e){var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||Dn,An=$n.current,Mn($n,t),Mn(Nn,Nn.current),!0}function Wn(e,t,o){var n=e.stateNode;n||s("169"),o?(t=Fn(e,t,An),n.__reactInternalMemoizedMergedChildContext=t,In(Nn),In($n),Mn($n,t)):In(Nn),Mn(Nn,o)}var Un=null,jn=null;function Vn(e){return function(t){try{return e(t)}catch(e){}}}function Zn(e,t,o,n){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function qn(e,t,o,n){return new Zn(e,t,o,n)}function Kn(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Yn(e,t){var o=e.alternate;return null===o?((o=qn(e.tag,t,e.key,e.mode)).elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.effectTag=0,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null),o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,o.contextDependencies=e.contextDependencies,o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Xn(e,t,o,n,r,i){var a=2;if(n=e,"function"==typeof e)Kn(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case Ye:return Qn(o.children,r,i,t);case tt:return Jn(o,3|r,i,t);case Xe:return Jn(o,2|r,i,t);case Qe:return(e=qn(12,o,t,4|r)).elementType=Qe,e.type=Qe,e.expirationTime=i,e;case nt:return(e=qn(13,o,t,r)).elementType=nt,e.type=nt,e.expirationTime=i,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Je:a=10;break e;case et:a=9;break e;case ot:a=11;break e;case rt:a=14;break e;case it:a=16,n=null;break e}s("130",null==e?e:typeof e,"")}return(t=qn(a,o,t,r)).elementType=e,t.type=n,t.expirationTime=i,t}function Qn(e,t,o,n){return(e=qn(7,e,n,t)).expirationTime=o,e}function Jn(e,t,o,n){return e=qn(8,e,n,t),t=0==(1&t)?Xe:tt,e.elementType=t,e.type=t,e.expirationTime=o,e}function er(e,t,o){return(e=qn(6,e,null,t)).expirationTime=o,e}function tr(e,t,o){return(t=qn(4,null!==e.children?e.children:[],e.key,t)).expirationTime=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function or(e,t){e.didError=!1;var o=e.earliestPendingTime;0===o?e.earliestPendingTime=e.latestPendingTime=t:o<t?e.earliestPendingTime=t:e.latestPendingTime>t&&(e.latestPendingTime=t),ir(t,e)}function nr(e,t){e.didError=!1,e.latestPingedTime>=t&&(e.latestPingedTime=0);var o=e.earliestPendingTime,n=e.latestPendingTime;o===t?e.earliestPendingTime=n===t?e.latestPendingTime=0:n:n===t&&(e.latestPendingTime=o),o=e.earliestSuspendedTime,n=e.latestSuspendedTime,0===o?e.earliestSuspendedTime=e.latestSuspendedTime=t:o<t?e.earliestSuspendedTime=t:n>t&&(e.latestSuspendedTime=t),ir(t,e)}function rr(e,t){var o=e.earliestPendingTime;return o>t&&(t=o),(e=e.earliestSuspendedTime)>t&&(t=e),t}function ir(e,t){var o=t.earliestSuspendedTime,n=t.latestSuspendedTime,r=t.earliestPendingTime,i=t.latestPingedTime;0===(r=0!==r?r:i)&&(0===e||n<e)&&(r=n),0!==(e=r)&&o>e&&(e=o),t.nextExpirationTimeToWorkOn=r,t.expirationTime=e}function sr(e,t){if(e&&e.defaultProps)for(var o in t=r({},t),e=e.defaultProps)void 0===t[o]&&(t[o]=e[o]);return t}var ar=(new n.Component).refs;function lr(e,t,o,n){o=null==(o=o(n,t=e.memoizedState))?t:r({},t,o),e.memoizedState=o,null!==(n=e.updateQueue)&&0===e.expirationTime&&(n.baseState=o)}var cr={isMounted:function(e){return!!(e=e._reactInternalFiber)&&2===oo(e)},enqueueSetState:function(e,t,o){e=e._reactInternalFiber;var n=ka(),r=Qi(n=Qs(n,e));r.payload=t,null!=o&&(r.callback=o),Vs(),es(e,r),oa(e,n)},enqueueReplaceState:function(e,t,o){e=e._reactInternalFiber;var n=ka(),r=Qi(n=Qs(n,e));r.tag=Vi,r.payload=t,null!=o&&(r.callback=o),Vs(),es(e,r),oa(e,n)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var o=ka(),n=Qi(o=Qs(o,e));n.tag=Zi,null!=t&&(n.callback=t),Vs(),es(e,n),oa(e,o)}};function dr(e,t,o,n,r,i,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,i,s):!t.prototype||!t.prototype.isPureReactComponent||(!to(o,n)||!to(r,i))}function hr(e,t,o){var n=!1,r=Dn,i=t.contextType;return"object"==typeof i&&null!==i?i=Ui(i):(r=zn(t)?An:$n.current,i=(n=null!=(n=t.contextTypes))?Pn(e,r):Dn),t=new t(o,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=cr,e.stateNode=t,t._reactInternalFiber=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function ur(e,t,o,n){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(o,n),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(o,n),t.state!==e&&cr.enqueueReplaceState(t,t.state,null)}function pr(e,t,o,n){var r=e.stateNode;r.props=o,r.state=e.memoizedState,r.refs=ar;var i=t.contextType;"object"==typeof i&&null!==i?r.context=Ui(i):(i=zn(t)?An:$n.current,r.context=Pn(e,i)),null!==(i=e.updateQueue)&&(rs(e,i,o,r,n),r.state=e.memoizedState),"function"==typeof(i=t.getDerivedStateFromProps)&&(lr(e,t,i,o),r.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof r.getSnapshotBeforeUpdate||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||(t=r.state,"function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),t!==r.state&&cr.enqueueReplaceState(r,r.state,null),null!==(i=e.updateQueue)&&(rs(e,i,o,r,n),r.state=e.memoizedState)),"function"==typeof r.componentDidMount&&(e.effectTag|=4)}var fr=Array.isArray;function mr(e,t,o){if(null!==(e=o.ref)&&"function"!=typeof e&&"object"!=typeof e){if(o._owner){o=o._owner;var n=void 0;o&&(1!==o.tag&&s("309"),n=o.stateNode),n||s("147",e);var r=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===r?t.ref:(t=function(e){var t=n.refs;t===ar&&(t=n.refs={}),null===e?delete t[r]:t[r]=e},t._stringRef=r,t)}"string"!=typeof e&&s("284"),o._owner||s("290",e)}return e}function gr(e,t){"textarea"!==e.type&&s("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function br(e){function t(t,o){if(e){var n=t.lastEffect;null!==n?(n.nextEffect=o,t.lastEffect=o):t.firstEffect=t.lastEffect=o,o.nextEffect=null,o.effectTag=8}}function o(o,n){if(!e)return null;for(;null!==n;)t(o,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function r(e,t,o){return(e=Yn(e,t)).index=0,e.sibling=null,e}function i(t,o,n){return t.index=n,e?null!==(n=t.alternate)?(n=n.index)<o?(t.effectTag=2,o):n:(t.effectTag=2,o):o}function a(t){return e&&null===t.alternate&&(t.effectTag=2),t}function l(e,t,o,n){return null===t||6!==t.tag?((t=er(o,e.mode,n)).return=e,t):((t=r(t,o)).return=e,t)}function c(e,t,o,n){return null!==t&&t.elementType===o.type?((n=r(t,o.props)).ref=mr(e,t,o),n.return=e,n):((n=Xn(o.type,o.key,o.props,null,e.mode,n)).ref=mr(e,t,o),n.return=e,n)}function d(e,t,o,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==o.containerInfo||t.stateNode.implementation!==o.implementation?((t=tr(o,e.mode,n)).return=e,t):((t=r(t,o.children||[])).return=e,t)}function h(e,t,o,n,i){return null===t||7!==t.tag?((t=Qn(o,e.mode,n,i)).return=e,t):((t=r(t,o)).return=e,t)}function u(e,t,o){if("string"==typeof t||"number"==typeof t)return(t=er(""+t,e.mode,o)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case qe:return(o=Xn(t.type,t.key,t.props,null,e.mode,o)).ref=mr(e,null,t),o.return=e,o;case Ke:return(t=tr(t,e.mode,o)).return=e,t}if(fr(t)||at(t))return(t=Qn(t,e.mode,o,null)).return=e,t;gr(e,t)}return null}function p(e,t,o,n){var r=null!==t?t.key:null;if("string"==typeof o||"number"==typeof o)return null!==r?null:l(e,t,""+o,n);if("object"==typeof o&&null!==o){switch(o.$$typeof){case qe:return o.key===r?o.type===Ye?h(e,t,o.props.children,n,r):c(e,t,o,n):null;case Ke:return o.key===r?d(e,t,o,n):null}if(fr(o)||at(o))return null!==r?null:h(e,t,o,n,null);gr(e,o)}return null}function f(e,t,o,n,r){if("string"==typeof n||"number"==typeof n)return l(t,e=e.get(o)||null,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case qe:return e=e.get(null===n.key?o:n.key)||null,n.type===Ye?h(t,e,n.props.children,r,n.key):c(t,e,n,r);case Ke:return d(t,e=e.get(null===n.key?o:n.key)||null,n,r)}if(fr(n)||at(n))return h(t,e=e.get(o)||null,n,r,null);gr(t,n)}return null}function m(r,s,a,l){for(var c=null,d=null,h=s,m=s=0,g=null;null!==h&&m<a.length;m++){h.index>m?(g=h,h=null):g=h.sibling;var b=p(r,h,a[m],l);if(null===b){null===h&&(h=g);break}e&&h&&null===b.alternate&&t(r,h),s=i(b,s,m),null===d?c=b:d.sibling=b,d=b,h=g}if(m===a.length)return o(r,h),c;if(null===h){for(;m<a.length;m++)(h=u(r,a[m],l))&&(s=i(h,s,m),null===d?c=h:d.sibling=h,d=h);return c}for(h=n(r,h);m<a.length;m++)(g=f(h,r,m,a[m],l))&&(e&&null!==g.alternate&&h.delete(null===g.key?m:g.key),s=i(g,s,m),null===d?c=g:d.sibling=g,d=g);return e&&h.forEach((function(e){return t(r,e)})),c}function g(r,a,l,c){var d=at(l);"function"!=typeof d&&s("150"),null==(l=d.call(l))&&s("151");for(var h=d=null,m=a,g=a=0,b=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(b=m,m=null):b=m.sibling;var y=p(r,m,v.value,c);if(null===y){m||(m=b);break}e&&m&&null===y.alternate&&t(r,m),a=i(y,a,g),null===h?d=y:h.sibling=y,h=y,m=b}if(v.done)return o(r,m),d;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=u(r,v.value,c))&&(a=i(v,a,g),null===h?d=v:h.sibling=v,h=v);return d}for(m=n(r,m);!v.done;g++,v=l.next())null!==(v=f(m,r,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),a=i(v,a,g),null===h?d=v:h.sibling=v,h=v);return e&&m.forEach((function(e){return t(r,e)})),d}return function(e,n,i,l){var c="object"==typeof i&&null!==i&&i.type===Ye&&null===i.key;c&&(i=i.props.children);var d="object"==typeof i&&null!==i;if(d)switch(i.$$typeof){case qe:e:{for(d=i.key,c=n;null!==c;){if(c.key===d){if(7===c.tag?i.type===Ye:c.elementType===i.type){o(e,c.sibling),(n=r(c,i.type===Ye?i.props.children:i.props)).ref=mr(e,c,i),n.return=e,e=n;break e}o(e,c);break}t(e,c),c=c.sibling}i.type===Ye?((n=Qn(i.props.children,e.mode,l,i.key)).return=e,e=n):((l=Xn(i.type,i.key,i.props,null,e.mode,l)).ref=mr(e,n,i),l.return=e,e=l)}return a(e);case Ke:e:{for(c=i.key;null!==n;){if(n.key===c){if(4===n.tag&&n.stateNode.containerInfo===i.containerInfo&&n.stateNode.implementation===i.implementation){o(e,n.sibling),(n=r(n,i.children||[])).return=e,e=n;break e}o(e,n);break}t(e,n),n=n.sibling}(n=tr(i,e.mode,l)).return=e,e=n}return a(e)}if("string"==typeof i||"number"==typeof i)return i=""+i,null!==n&&6===n.tag?(o(e,n.sibling),(n=r(n,i)).return=e,e=n):(o(e,n),(n=er(i,e.mode,l)).return=e,e=n),a(e);if(fr(i))return m(e,n,i,l);if(at(i))return g(e,n,i,l);if(d&&gr(e,i),void 0===i&&!c)switch(e.tag){case 1:case 0:s("152",(l=e.type).displayName||l.name||"Component")}return o(e,n)}}var vr=br(!0),yr=br(!1),wr={},Cr={current:wr},xr={current:wr},Sr={current:wr};function _r(e){return e===wr&&s("174"),e}function Tr(e,t){Mn(Sr,t),Mn(xr,e),Mn(Cr,wr);var o=t.nodeType;switch(o){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nn(null,"");break;default:t=nn(t=(o=8===o?t.parentNode:t).namespaceURI||null,o=o.tagName)}In(Cr),Mn(Cr,t)}function Rr(e){In(Cr),In(xr),In(Sr)}function kr(e){_r(Sr.current);var t=_r(Cr.current),o=nn(t,e.type);t!==o&&(Mn(xr,e),Mn(Cr,o))}function Er(e){xr.current===e&&(In(Cr),In(xr))}var Or=0,Ir=2,Mr=4,Dr=8,$r=16,Nr=32,Ar=64,Pr=128,zr=je.ReactCurrentDispatcher,Hr=0,Lr=null,Gr=null,Fr=null,Br=null,Wr=null,Ur=null,jr=0,Vr=null,Zr=0,qr=!1,Kr=null,Yr=0;function Xr(){s("307")}function Qr(e,t){if(null===t)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!Jt(e[o],t[o]))return!1;return!0}function Jr(e,t,o,n,r,i){if(Hr=i,Lr=t,Fr=null!==e?e.memoizedState:null,zr.current=null===Fr?ui:pi,t=o(n,r),qr){do{qr=!1,Yr+=1,Fr=null!==e?e.memoizedState:null,Ur=Br,Vr=Wr=Gr=null,zr.current=pi,t=o(n,r)}while(qr);Kr=null,Yr=0}return zr.current=hi,(e=Lr).memoizedState=Br,e.expirationTime=jr,e.updateQueue=Vr,e.effectTag|=Zr,e=null!==Gr&&null!==Gr.next,Hr=0,Ur=Wr=Br=Fr=Gr=Lr=null,jr=0,Vr=null,Zr=0,e&&s("300"),t}function ei(){zr.current=hi,Hr=0,Ur=Wr=Br=Fr=Gr=Lr=null,jr=0,Vr=null,Zr=0,qr=!1,Kr=null,Yr=0}function ti(){var e={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};return null===Wr?Br=Wr=e:Wr=Wr.next=e,Wr}function oi(){if(null!==Ur)Ur=(Wr=Ur).next,Fr=null!==(Gr=Fr)?Gr.next:null;else{null===Fr&&s("310");var e={memoizedState:(Gr=Fr).memoizedState,baseState:Gr.baseState,queue:Gr.queue,baseUpdate:Gr.baseUpdate,next:null};Wr=null===Wr?Br=e:Wr.next=e,Fr=Gr.next}return Wr}function ni(e,t){return"function"==typeof t?t(e):t}function ri(e){var t=oi(),o=t.queue;if(null===o&&s("311"),0<Yr){var n=o.dispatch;if(null!==Kr){var r=Kr.get(o);if(void 0!==r){Kr.delete(o);var i=t.memoizedState;do{i=e(i,r.action),r=r.next}while(null!==r);return Jt(i,t.memoizedState)||(_i=!0),t.memoizedState=i,t.baseUpdate===o.last&&(t.baseState=i),o.eagerReducer=e,o.eagerState=i,[i,n]}}return[t.memoizedState,n]}n=o.last;var a=t.baseUpdate;if(i=t.baseState,null!==a?(null!==n&&(n.next=null),n=a.next):n=null!==n?n.next:null,null!==n){var l=r=null,c=n,d=!1;do{var h=c.expirationTime;h<Hr?(d||(d=!0,l=a,r=i),h>jr&&(jr=h)):i=c.eagerReducer===e?c.eagerState:e(i,c.action),a=c,c=c.next}while(null!==c&&c!==n);d||(l=a,r=i),Jt(i,t.memoizedState)||(_i=!0),t.memoizedState=i,t.baseUpdate=l,t.baseState=r,o.eagerReducer=e,o.eagerState=i}return[t.memoizedState,o.dispatch]}function ii(e,t,o,n){return e={tag:e,create:t,destroy:o,deps:n,next:null},null===Vr?(Vr={lastEffect:null}).lastEffect=e.next=e:null===(t=Vr.lastEffect)?Vr.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,Vr.lastEffect=e),e}function si(e,t,o,n){var r=ti();Zr|=e,r.memoizedState=ii(t,o,void 0,void 0===n?null:n)}function ai(e,t,o,n){var r=oi();n=void 0===n?null:n;var i=void 0;if(null!==Gr){var s=Gr.memoizedState;if(i=s.destroy,null!==n&&Qr(n,s.deps))return void ii(Or,o,i,n)}Zr|=e,r.memoizedState=ii(t,o,i,n)}function li(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function ci(){}function di(e,t,o){25>Yr||s("301");var n=e.alternate;if(e===Lr||null!==n&&n===Lr)if(qr=!0,e={expirationTime:Hr,action:o,eagerReducer:null,eagerState:null,next:null},null===Kr&&(Kr=new Map),void 0===(o=Kr.get(t)))Kr.set(t,e);else{for(t=o;null!==t.next;)t=t.next;t.next=e}else{Vs();var r=ka(),i={expirationTime:r=Qs(r,e),action:o,eagerReducer:null,eagerState:null,next:null},a=t.last;if(null===a)i.next=i;else{var l=a.next;null!==l&&(i.next=l),a.next=i}if(t.last=i,0===e.expirationTime&&(null===n||0===n.expirationTime)&&null!==(n=t.eagerReducer))try{var c=t.eagerState,d=n(c,o);if(i.eagerReducer=n,i.eagerState=d,Jt(d,c))return}catch(e){}oa(e,r)}}var hi={readContext:Ui,useCallback:Xr,useContext:Xr,useEffect:Xr,useImperativeHandle:Xr,useLayoutEffect:Xr,useMemo:Xr,useReducer:Xr,useRef:Xr,useState:Xr,useDebugValue:Xr},ui={readContext:Ui,useCallback:function(e,t){return ti().memoizedState=[e,void 0===t?null:t],e},useContext:Ui,useEffect:function(e,t){return si(516,Pr|Ar,e,t)},useImperativeHandle:function(e,t,o){return o=null!=o?o.concat([e]):null,si(4,Mr|Nr,li.bind(null,t,e),o)},useLayoutEffect:function(e,t){return si(4,Mr|Nr,e,t)},useMemo:function(e,t){var o=ti();return t=void 0===t?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var n=ti();return t=void 0!==o?o(t):t,n.memoizedState=n.baseState=t,e=(e=n.queue={last:null,dispatch:null,eagerReducer:e,eagerState:t}).dispatch=di.bind(null,Lr,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},ti().memoizedState=e},useState:function(e){var t=ti();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={last:null,dispatch:null,eagerReducer:ni,eagerState:e}).dispatch=di.bind(null,Lr,e),[t.memoizedState,e]},useDebugValue:ci},pi={readContext:Ui,useCallback:function(e,t){var o=oi();t=void 0===t?null:t;var n=o.memoizedState;return null!==n&&null!==t&&Qr(t,n[1])?n[0]:(o.memoizedState=[e,t],e)},useContext:Ui,useEffect:function(e,t){return ai(516,Pr|Ar,e,t)},useImperativeHandle:function(e,t,o){return o=null!=o?o.concat([e]):null,ai(4,Mr|Nr,li.bind(null,t,e),o)},useLayoutEffect:function(e,t){return ai(4,Mr|Nr,e,t)},useMemo:function(e,t){var o=oi();t=void 0===t?null:t;var n=o.memoizedState;return null!==n&&null!==t&&Qr(t,n[1])?n[0]:(e=e(),o.memoizedState=[e,t],e)},useReducer:ri,useRef:function(){return oi().memoizedState},useState:function(e){return ri(ni)},useDebugValue:ci},fi=null,mi=null,gi=!1;function bi(e,t){var o=qn(5,null,null,0);o.elementType="DELETED",o.type="DELETED",o.stateNode=t,o.return=e,o.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=o,e.lastEffect=o):e.firstEffect=e.lastEffect=o}function vi(e,t){switch(e.tag){case 5:var o=e.type;return null!==(t=1!==t.nodeType||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function yi(e){if(gi){var t=mi;if(t){var o=t;if(!vi(e,t)){if(!(t=Rn(o))||!vi(e,t))return e.effectTag|=2,gi=!1,void(fi=e);bi(fi,o)}fi=e,mi=kn(t)}else e.effectTag|=2,gi=!1,fi=e}}function wi(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&18!==e.tag;)e=e.return;fi=e}function Ci(e){if(e!==fi)return!1;if(!gi)return wi(e),gi=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Cn(t,e.memoizedProps))for(t=mi;t;)bi(e,t),t=Rn(t);return wi(e),mi=fi?Rn(e.stateNode):null,!0}function xi(){mi=fi=null,gi=!1}var Si=je.ReactCurrentOwner,_i=!1;function Ti(e,t,o,n){t.child=null===e?yr(t,null,o,n):vr(t,e.child,o,n)}function Ri(e,t,o,n,r){o=o.render;var i=t.ref;return Wi(t,r),n=Jr(e,t,o,n,i,r),null===e||_i?(t.effectTag|=1,Ti(e,t,n,r),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=r&&(e.expirationTime=0),Ai(e,t,r))}function ki(e,t,o,n,r,i){if(null===e){var s=o.type;return"function"!=typeof s||Kn(s)||void 0!==s.defaultProps||null!==o.compare||void 0!==o.defaultProps?((e=Xn(o.type,null,n,null,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Ei(e,t,s,n,r,i))}return s=e.child,r<i&&(r=s.memoizedProps,(o=null!==(o=o.compare)?o:to)(r,n)&&e.ref===t.ref)?Ai(e,t,i):(t.effectTag|=1,(e=Yn(s,n)).ref=t.ref,e.return=t,t.child=e)}function Ei(e,t,o,n,r,i){return null!==e&&to(e.memoizedProps,n)&&e.ref===t.ref&&(_i=!1,r<i)?Ai(e,t,i):Ii(e,t,o,n,i)}function Oi(e,t){var o=t.ref;(null===e&&null!==o||null!==e&&e.ref!==o)&&(t.effectTag|=128)}function Ii(e,t,o,n,r){var i=zn(o)?An:$n.current;return i=Pn(t,i),Wi(t,r),o=Jr(e,t,o,n,i,r),null===e||_i?(t.effectTag|=1,Ti(e,t,o,r),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=r&&(e.expirationTime=0),Ai(e,t,r))}function Mi(e,t,o,n,r){if(zn(o)){var i=!0;Bn(t)}else i=!1;if(Wi(t,r),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),hr(t,o,n),pr(t,o,n,r),n=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=o.contextType;"object"==typeof c&&null!==c?c=Ui(c):c=Pn(t,c=zn(o)?An:$n.current);var d=o.getDerivedStateFromProps,h="function"==typeof d||"function"==typeof s.getSnapshotBeforeUpdate;h||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==n||l!==c)&&ur(t,s,n,c),Ki=!1;var u=t.memoizedState;l=s.state=u;var p=t.updateQueue;null!==p&&(rs(t,p,n,s,r),l=t.memoizedState),a!==n||u!==l||Nn.current||Ki?("function"==typeof d&&(lr(t,o,d,n),l=t.memoizedState),(a=Ki||dr(t,o,a,n,u,l,c))?(h||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.effectTag|=4)):("function"==typeof s.componentDidMount&&(t.effectTag|=4),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=c,n=a):("function"==typeof s.componentDidMount&&(t.effectTag|=4),n=!1)}else s=t.stateNode,a=t.memoizedProps,s.props=t.type===t.elementType?a:sr(t.type,a),l=s.context,"object"==typeof(c=o.contextType)&&null!==c?c=Ui(c):c=Pn(t,c=zn(o)?An:$n.current),(h="function"==typeof(d=o.getDerivedStateFromProps)||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==n||l!==c)&&ur(t,s,n,c),Ki=!1,l=t.memoizedState,u=s.state=l,null!==(p=t.updateQueue)&&(rs(t,p,n,s,r),u=t.memoizedState),a!==n||l!==u||Nn.current||Ki?("function"==typeof d&&(lr(t,o,d,n),u=t.memoizedState),(d=Ki||dr(t,o,a,n,l,u,c))?(h||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(n,u,c),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(n,u,c)),"function"==typeof s.componentDidUpdate&&(t.effectTag|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),t.memoizedProps=n,t.memoizedState=u),s.props=n,s.state=u,s.context=c,n=d):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),n=!1);return Di(e,t,o,n,i,r)}function Di(e,t,o,n,r,i){Oi(e,t);var s=0!=(64&t.effectTag);if(!n&&!s)return r&&Wn(t,o,!1),Ai(e,t,i);n=t.stateNode,Si.current=t;var a=s&&"function"!=typeof o.getDerivedStateFromError?null:n.render();return t.effectTag|=1,null!==e&&s?(t.child=vr(t,e.child,null,i),t.child=vr(t,null,a,i)):Ti(e,t,a,i),t.memoizedState=n.state,r&&Wn(t,o,!0),t.child}function $i(e){var t=e.stateNode;t.pendingContext?Gn(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Gn(0,t.context,!1),Tr(e,t.containerInfo)}function Ni(e,t,o){var n=t.mode,r=t.pendingProps,i=t.memoizedState;if(0==(64&t.effectTag)){i=null;var s=!1}else i={timedOutAt:null!==i?i.timedOutAt:0},s=!0,t.effectTag&=-65;if(null===e)if(s){var a=r.fallback;e=Qn(null,n,0,null),0==(1&t.mode)&&(e.child=null!==t.memoizedState?t.child.child:t.child),n=Qn(a,n,o,null),e.sibling=n,(o=e).return=n.return=t}else o=n=yr(t,null,r.children,o);else null!==e.memoizedState?(a=(n=e.child).sibling,s?(o=r.fallback,r=Yn(n,n.pendingProps),0==(1&t.mode)&&((s=null!==t.memoizedState?t.child.child:t.child)!==n.child&&(r.child=s)),n=r.sibling=Yn(a,o,a.expirationTime),o=r,r.childExpirationTime=0,o.return=n.return=t):o=n=vr(t,n.child,r.children,o)):(a=e.child,s?(s=r.fallback,(r=Qn(null,n,0,null)).child=a,0==(1&t.mode)&&(r.child=null!==t.memoizedState?t.child.child:t.child),(n=r.sibling=Qn(s,n,o,null)).effectTag|=2,o=r,r.childExpirationTime=0,o.return=n.return=t):n=o=vr(t,a,r.children,o)),t.stateNode=e.stateNode;return t.memoizedState=i,t.child=o,n}function Ai(e,t,o){if(null!==e&&(t.contextDependencies=e.contextDependencies),t.childExpirationTime<o)return null;if(null!==e&&t.child!==e.child&&s("153"),null!==t.child){for(o=Yn(e=t.child,e.pendingProps,e.expirationTime),t.child=o,o.return=t;null!==e.sibling;)e=e.sibling,(o=o.sibling=Yn(e,e.pendingProps,e.expirationTime)).return=t;o.sibling=null}return t.child}function Pi(e,t,o){var n=t.expirationTime;if(null!==e){if(e.memoizedProps!==t.pendingProps||Nn.current)_i=!0;else if(n<o){switch(_i=!1,t.tag){case 3:$i(t),xi();break;case 5:kr(t);break;case 1:zn(t.type)&&Bn(t);break;case 4:Tr(t,t.stateNode.containerInfo);break;case 10:Fi(t,t.memoizedProps.value);break;case 13:if(null!==t.memoizedState)return 0!==(n=t.child.childExpirationTime)&&n>=o?Ni(e,t,o):null!==(t=Ai(e,t,o))?t.sibling:null}return Ai(e,t,o)}}else _i=!1;switch(t.expirationTime=0,t.tag){case 2:n=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps;var r=Pn(t,$n.current);if(Wi(t,o),r=Jr(null,t,n,e,r,o),t.effectTag|=1,"object"==typeof r&&null!==r&&"function"==typeof r.render&&void 0===r.$$typeof){if(t.tag=1,ei(),zn(n)){var i=!0;Bn(t)}else i=!1;t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null;var a=n.getDerivedStateFromProps;"function"==typeof a&&lr(t,n,a,e),r.updater=cr,t.stateNode=r,r._reactInternalFiber=t,pr(t,n,e,o),t=Di(null,t,n,!0,i,o)}else t.tag=0,Ti(null,t,r,o),t=t.child;return t;case 16:switch(r=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),i=t.pendingProps,e=function(e){var t=e._result;switch(e._status){case 1:return t;case 2:case 0:throw t;default:switch(e._status=0,(t=(t=e._ctor)()).then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)})),e._status){case 1:return e._result;case 2:throw e._result}throw e._result=t,t}}(r),t.type=e,r=t.tag=function(e){if("function"==typeof e)return Kn(e)?1:0;if(null!=e){if((e=e.$$typeof)===ot)return 11;if(e===rt)return 14}return 2}(e),i=sr(e,i),a=void 0,r){case 0:a=Ii(null,t,e,i,o);break;case 1:a=Mi(null,t,e,i,o);break;case 11:a=Ri(null,t,e,i,o);break;case 14:a=ki(null,t,e,sr(e.type,i),n,o);break;default:s("306",e,"")}return a;case 0:return n=t.type,r=t.pendingProps,Ii(e,t,n,r=t.elementType===n?r:sr(n,r),o);case 1:return n=t.type,r=t.pendingProps,Mi(e,t,n,r=t.elementType===n?r:sr(n,r),o);case 3:return $i(t),null===(n=t.updateQueue)&&s("282"),r=null!==(r=t.memoizedState)?r.element:null,rs(t,n,t.pendingProps,null,o),(n=t.memoizedState.element)===r?(xi(),t=Ai(e,t,o)):(r=t.stateNode,(r=(null===e||null===e.child)&&r.hydrate)&&(mi=kn(t.stateNode.containerInfo),fi=t,r=gi=!0),r?(t.effectTag|=2,t.child=yr(t,null,n,o)):(Ti(e,t,n,o),xi()),t=t.child),t;case 5:return kr(t),null===e&&yi(t),n=t.type,r=t.pendingProps,i=null!==e?e.memoizedProps:null,a=r.children,Cn(n,r)?a=null:null!==i&&Cn(n,i)&&(t.effectTag|=16),Oi(e,t),1!==o&&1&t.mode&&r.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Ti(e,t,a,o),t=t.child),t;case 6:return null===e&&yi(t),null;case 13:return Ni(e,t,o);case 4:return Tr(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=vr(t,null,n,o):Ti(e,t,n,o),t.child;case 11:return n=t.type,r=t.pendingProps,Ri(e,t,n,r=t.elementType===n?r:sr(n,r),o);case 7:return Ti(e,t,t.pendingProps,o),t.child;case 8:case 12:return Ti(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(n=t.type._context,r=t.pendingProps,a=t.memoizedProps,Fi(t,i=r.value),null!==a){var l=a.value;if(0===(i=Jt(l,i)?0:0|("function"==typeof n._calculateChangedBits?n._calculateChangedBits(l,i):1073741823))){if(a.children===r.children&&!Nn.current){t=Ai(e,t,o);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var c=l.contextDependencies;if(null!==c){a=l.child;for(var d=c.first;null!==d;){if(d.context===n&&0!=(d.observedBits&i)){1===l.tag&&((d=Qi(o)).tag=Zi,es(l,d)),l.expirationTime<o&&(l.expirationTime=o),null!==(d=l.alternate)&&d.expirationTime<o&&(d.expirationTime=o),d=o;for(var h=l.return;null!==h;){var u=h.alternate;if(h.childExpirationTime<d)h.childExpirationTime=d,null!==u&&u.childExpirationTime<d&&(u.childExpirationTime=d);else{if(!(null!==u&&u.childExpirationTime<d))break;u.childExpirationTime=d}h=h.return}c.expirationTime<o&&(c.expirationTime=o);break}d=d.next}}else a=10===l.tag&&l.type===t.type?null:l.child;if(null!==a)a.return=l;else for(a=l;null!==a;){if(a===t){a=null;break}if(null!==(l=a.sibling)){l.return=a.return,a=l;break}a=a.return}l=a}}Ti(e,t,r.children,o),t=t.child}return t;case 9:return r=t.type,n=(i=t.pendingProps).children,Wi(t,o),n=n(r=Ui(r,i.unstable_observedBits)),t.effectTag|=1,Ti(e,t,n,o),t.child;case 14:return i=sr(r=t.type,t.pendingProps),ki(e,t,r,i=sr(r.type,i),n,o);case 15:return Ei(e,t,t.type,t.pendingProps,n,o);case 17:return n=t.type,r=t.pendingProps,r=t.elementType===n?r:sr(n,r),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,zn(n)?(e=!0,Bn(t)):e=!1,Wi(t,o),hr(t,n,r),pr(t,n,r,o),Di(null,t,n,!0,e,o)}s("156")}var zi={current:null},Hi=null,Li=null,Gi=null;function Fi(e,t){var o=e.type._context;Mn(zi,o._currentValue),o._currentValue=t}function Bi(e){var t=zi.current;In(zi),e.type._context._currentValue=t}function Wi(e,t){Hi=e,Gi=Li=null;var o=e.contextDependencies;null!==o&&o.expirationTime>=t&&(_i=!0),e.contextDependencies=null}function Ui(e,t){return Gi!==e&&!1!==t&&0!==t&&("number"==typeof t&&1073741823!==t||(Gi=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Li?(null===Hi&&s("308"),Li=t,Hi.contextDependencies={first:t,expirationTime:0}):Li=Li.next=t),e._currentValue}var ji=0,Vi=1,Zi=2,qi=3,Ki=!1;function Yi(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Xi(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Qi(e){return{expirationTime:e,tag:ji,payload:null,callback:null,next:null,nextEffect:null}}function Ji(e,t){null===e.lastUpdate?e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function es(e,t){var o=e.alternate;if(null===o){var n=e.updateQueue,r=null;null===n&&(n=e.updateQueue=Yi(e.memoizedState))}else n=e.updateQueue,r=o.updateQueue,null===n?null===r?(n=e.updateQueue=Yi(e.memoizedState),r=o.updateQueue=Yi(o.memoizedState)):n=e.updateQueue=Xi(r):null===r&&(r=o.updateQueue=Xi(n));null===r||n===r?Ji(n,t):null===n.lastUpdate||null===r.lastUpdate?(Ji(n,t),Ji(r,t)):(Ji(n,t),r.lastUpdate=t)}function ts(e,t){var o=e.updateQueue;null===(o=null===o?e.updateQueue=Yi(e.memoizedState):os(e,o)).lastCapturedUpdate?o.firstCapturedUpdate=o.lastCapturedUpdate=t:(o.lastCapturedUpdate.next=t,o.lastCapturedUpdate=t)}function os(e,t){var o=e.alternate;return null!==o&&t===o.updateQueue&&(t=e.updateQueue=Xi(t)),t}function ns(e,t,o,n,i,s){switch(o.tag){case Vi:return"function"==typeof(e=o.payload)?e.call(s,n,i):e;case qi:e.effectTag=-2049&e.effectTag|64;case ji:if(null==(i="function"==typeof(e=o.payload)?e.call(s,n,i):e))break;return r({},n,i);case Zi:Ki=!0}return n}function rs(e,t,o,n,r){Ki=!1;for(var i=(t=os(e,t)).baseState,s=null,a=0,l=t.firstUpdate,c=i;null!==l;){var d=l.expirationTime;d<r?(null===s&&(s=l,i=c),a<d&&(a=d)):(c=ns(e,0,l,c,o,n),null!==l.callback&&(e.effectTag|=32,l.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=l:(t.lastEffect.nextEffect=l,t.lastEffect=l))),l=l.next}for(d=null,l=t.firstCapturedUpdate;null!==l;){var h=l.expirationTime;h<r?(null===d&&(d=l,null===s&&(i=c)),a<h&&(a=h)):(c=ns(e,0,l,c,o,n),null!==l.callback&&(e.effectTag|=32,l.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=l:(t.lastCapturedEffect.nextEffect=l,t.lastCapturedEffect=l))),l=l.next}null===s&&(t.lastUpdate=null),null===d?t.lastCapturedUpdate=null:e.effectTag|=32,null===s&&null===d&&(i=c),t.baseState=i,t.firstUpdate=s,t.firstCapturedUpdate=d,e.expirationTime=a,e.memoizedState=c}function is(e,t,o){null!==t.firstCapturedUpdate&&(null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),t.firstCapturedUpdate=t.lastCapturedUpdate=null),ss(t.firstEffect,o),t.firstEffect=t.lastEffect=null,ss(t.firstCapturedEffect,o),t.firstCapturedEffect=t.lastCapturedEffect=null}function ss(e,t){for(;null!==e;){var o=e.callback;if(null!==o){e.callback=null;var n=t;"function"!=typeof o&&s("191",o),o.call(n)}e=e.nextEffect}}function as(e,t){return{value:e,source:t,stack:ct(t)}}function ls(e){e.effectTag|=4}var cs=void 0,ds=void 0,hs=void 0,us=void 0;cs=function(e,t){for(var o=t.child;null!==o;){if(5===o.tag||6===o.tag)e.appendChild(o.stateNode);else if(4!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ds=function(){},hs=function(e,t,o,n,i){var s=e.memoizedProps;if(s!==n){var a=t.stateNode;switch(_r(Cr.current),e=null,o){case"input":s=wt(a,s),n=wt(a,n),e=[];break;case"option":s=Ko(a,s),n=Ko(a,n),e=[];break;case"select":s=r({},s,{value:void 0}),n=r({},n,{value:void 0}),e=[];break;case"textarea":s=Xo(a,s),n=Xo(a,n),e=[];break;default:"function"!=typeof s.onClick&&"function"==typeof n.onClick&&(a.onclick=bn)}fn(o,n),a=o=void 0;var l=null;for(o in s)if(!n.hasOwnProperty(o)&&s.hasOwnProperty(o)&&null!=s[o])if("style"===o){var c=s[o];for(a in c)c.hasOwnProperty(a)&&(l||(l={}),l[a]="")}else"dangerouslySetInnerHTML"!==o&&"children"!==o&&"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(w.hasOwnProperty(o)?e||(e=[]):(e=e||[]).push(o,null));for(o in n){var d=n[o];if(c=null!=s?s[o]:void 0,n.hasOwnProperty(o)&&d!==c&&(null!=d||null!=c))if("style"===o)if(c){for(a in c)!c.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(l||(l={}),l[a]="");for(a in d)d.hasOwnProperty(a)&&c[a]!==d[a]&&(l||(l={}),l[a]=d[a])}else l||(e||(e=[]),e.push(o,l)),l=d;else"dangerouslySetInnerHTML"===o?(d=d?d.__html:void 0,c=c?c.__html:void 0,null!=d&&c!==d&&(e=e||[]).push(o,""+d)):"children"===o?c===d||"string"!=typeof d&&"number"!=typeof d||(e=e||[]).push(o,""+d):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&(w.hasOwnProperty(o)?(null!=d&&gn(i,o),e||c===d||(e=[])):(e=e||[]).push(o,d))}l&&(e=e||[]).push("style",l),i=e,(t.updateQueue=i)&&ls(t)}},us=function(e,t,o,n){o!==n&&ls(t)};var ps="function"==typeof WeakSet?WeakSet:Set;function fs(e,t){var o=t.source,n=t.stack;null===n&&null!==o&&(n=ct(o)),null!==o&&lt(o.type),t=t.value,null!==e&&1===e.tag&&lt(e.type)}function ms(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Xs(e,t)}else t.current=null}function gs(e,t,o){if(null!==(o=null!==(o=o.updateQueue)?o.lastEffect:null)){var n=o=o.next;do{if((n.tag&e)!==Or){var r=n.destroy;n.destroy=void 0,void 0!==r&&r()}(n.tag&t)!==Or&&(r=n.create,n.destroy=r()),n=n.next}while(n!==o)}}function bs(e){switch("function"==typeof jn&&jn(e),e.tag){case 0:case 11:case 14:case 15:var t=e.updateQueue;if(null!==t&&null!==(t=t.lastEffect)){var o=t=t.next;do{var n=o.destroy;if(void 0!==n){var r=e;try{n()}catch(e){Xs(r,e)}}o=o.next}while(o!==t)}break;case 1:if(ms(e),"function"==typeof(t=e.stateNode).componentWillUnmount)try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){Xs(e,t)}break;case 5:ms(e);break;case 4:ws(e)}}function vs(e){return 5===e.tag||3===e.tag||4===e.tag}function ys(e){e:{for(var t=e.return;null!==t;){if(vs(t)){var o=t;break e}t=t.return}s("160"),o=void 0}var n=t=void 0;switch(o.tag){case 5:t=o.stateNode,n=!1;break;case 3:case 4:t=o.stateNode.containerInfo,n=!0;break;default:s("161")}16&o.effectTag&&(ln(t,""),o.effectTag&=-17);e:t:for(o=e;;){for(;null===o.sibling;){if(null===o.return||vs(o.return)){o=null;break e}o=o.return}for(o.sibling.return=o.return,o=o.sibling;5!==o.tag&&6!==o.tag&&18!==o.tag;){if(2&o.effectTag)continue t;if(null===o.child||4===o.tag)continue t;o.child.return=o,o=o.child}if(!(2&o.effectTag)){o=o.stateNode;break e}}for(var r=e;;){if(5===r.tag||6===r.tag)if(o)if(n){var i=t,a=r.stateNode,l=o;8===i.nodeType?i.parentNode.insertBefore(a,l):i.insertBefore(a,l)}else t.insertBefore(r.stateNode,o);else n?(a=t,l=r.stateNode,8===a.nodeType?(i=a.parentNode).insertBefore(l,a):(i=a).appendChild(l),null!=(a=a._reactRootContainer)||null!==i.onclick||(i.onclick=bn)):t.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)break;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function ws(e){for(var t=e,o=!1,n=void 0,r=void 0;;){if(!o){o=t.return;e:for(;;){switch(null===o&&s("160"),o.tag){case 5:n=o.stateNode,r=!1;break e;case 3:case 4:n=o.stateNode.containerInfo,r=!0;break e}o=o.return}o=!0}if(5===t.tag||6===t.tag){e:for(var i=t,a=i;;)if(bs(a),null!==a.child&&4!==a.tag)a.child.return=a,a=a.child;else{if(a===i)break;for(;null===a.sibling;){if(null===a.return||a.return===i)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}r?(i=n,a=t.stateNode,8===i.nodeType?i.parentNode.removeChild(a):i.removeChild(a)):n.removeChild(t.stateNode)}else if(4===t.tag){if(null!==t.child){n=t.stateNode.containerInfo,r=!0,t.child.return=t,t=t.child;continue}}else if(bs(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;4===(t=t.return).tag&&(o=!1)}t.sibling.return=t.return,t=t.sibling}}function Cs(e,t){switch(t.tag){case 0:case 11:case 14:case 15:gs(Mr,Dr,t);break;case 1:case 3:case 12:case 17:break;case 5:var o=t.stateNode;if(null!=o){var n=t.memoizedProps;e=null!==e?e.memoizedProps:n;var r=t.type,i=t.updateQueue;t.updateQueue=null,null!==i&&function(e,t,o,n,r){e[A]=r,"input"===o&&"radio"===r.type&&null!=r.name&&xt(e,r),mn(o,n),n=mn(o,r);for(var i=0;i<t.length;i+=2){var s=t[i],a=t[i+1];"style"===s?un(e,a):"dangerouslySetInnerHTML"===s?an(e,a):"children"===s?ln(e,a):vt(e,s,a,n)}switch(o){case"input":St(e,r);break;case"textarea":Jo(e,r);break;case"select":t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!r.multiple,null!=(o=r.value)?Yo(e,!!r.multiple,o,!1):t!==!!r.multiple&&(null!=r.defaultValue?Yo(e,!!r.multiple,r.defaultValue,!0):Yo(e,!!r.multiple,r.multiple?[]:"",!1))}}(o,i,r,e,n)}break;case 6:null===t.stateNode&&s("162"),t.stateNode.nodeValue=t.memoizedProps;break;case 13:if(o=t.memoizedState,n=void 0,e=t,null===o?n=!1:(n=!0,e=t.child,0===o.timedOutAt&&(o.timedOutAt=ka())),null!==e&&function(e,t){for(var o=e;;){if(5===o.tag){var n=o.stateNode;if(t)n.style.display="none";else{n=o.stateNode;var r=o.memoizedProps.style;r=null!=r&&r.hasOwnProperty("display")?r.display:null,n.style.display=hn("display",r)}}else if(6===o.tag)o.stateNode.nodeValue=t?"":o.memoizedProps;else{if(13===o.tag&&null!==o.memoizedState){(n=o.child.sibling).return=o,o=n;continue}if(null!==o.child){o.child.return=o,o=o.child;continue}}if(o===e)break;for(;null===o.sibling;){if(null===o.return||o.return===e)return;o=o.return}o.sibling.return=o.return,o=o.sibling}}(e,n),null!==(o=t.updateQueue)){t.updateQueue=null;var a=t.stateNode;null===a&&(a=t.stateNode=new ps),o.forEach((function(e){var o=ea.bind(null,t,e);a.has(e)||(a.add(e),e.then(o,o))}))}break;default:s("163")}}var xs="function"==typeof WeakMap?WeakMap:Map;function Ss(e,t,o){(o=Qi(o)).tag=qi,o.payload={element:null};var n=t.value;return o.callback=function(){za(n),fs(e,t)},o}function _s(e,t,o){(o=Qi(o)).tag=qi;var n=e.type.getDerivedStateFromError;if("function"==typeof n){var r=t.value;o.payload=function(){return n(r)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(o.callback=function(){"function"!=typeof n&&(null===Gs?Gs=new Set([this]):Gs.add(this));var o=t.value,r=t.stack;fs(e,t),this.componentDidCatch(o,{componentStack:null!==r?r:""})}),o}function Ts(e){switch(e.tag){case 1:zn(e.type)&&Hn();var t=e.effectTag;return 2048&t?(e.effectTag=-2049&t|64,e):null;case 3:return Rr(),Ln(),0!=(64&(t=e.effectTag))&&s("285"),e.effectTag=-2049&t|64,e;case 5:return Er(e),null;case 13:return 2048&(t=e.effectTag)?(e.effectTag=-2049&t|64,e):null;case 18:default:return null;case 4:return Rr(),null;case 10:return Bi(e),null}}var Rs=je.ReactCurrentDispatcher,ks=je.ReactCurrentOwner,Es=1073741822,Os=!1,Is=null,Ms=null,Ds=0,$s=-1,Ns=!1,As=null,Ps=!1,zs=null,Hs=null,Ls=null,Gs=null;function Fs(){if(null!==Is)for(var e=Is.return;null!==e;){var t=e;switch(t.tag){case 1:var o=t.type.childContextTypes;null!=o&&Hn();break;case 3:Rr(),Ln();break;case 5:Er(t);break;case 4:Rr();break;case 10:Bi(t)}e=e.return}Ms=null,Ds=0,$s=-1,Ns=!1,Is=null}function Bs(){for(;null!==As;){var e=As.effectTag;if(16&e&&ln(As.stateNode,""),128&e){var t=As.alternate;null!==t&&(null!==(t=t.ref)&&("function"==typeof t?t(null):t.current=null))}switch(14&e){case 2:ys(As),As.effectTag&=-3;break;case 6:ys(As),As.effectTag&=-3,Cs(As.alternate,As);break;case 4:Cs(As.alternate,As);break;case 8:ws(e=As),e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,null!==(e=e.alternate)&&(e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null)}As=As.nextEffect}}function Ws(){for(;null!==As;){if(256&As.effectTag)e:{var e=As.alternate,t=As;switch(t.tag){case 0:case 11:case 15:gs(Ir,Or,t);break e;case 1:if(256&t.effectTag&&null!==e){var o=e.memoizedProps,n=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?o:sr(t.type,o),n),e.__reactInternalSnapshotBeforeUpdate=t}break e;case 3:case 5:case 6:case 4:case 17:break e;default:s("163")}}As=As.nextEffect}}function Us(e,t){for(;null!==As;){var o=As.effectTag;if(36&o){var n=As.alternate,r=As,i=t;switch(r.tag){case 0:case 11:case 15:gs($r,Nr,r);break;case 1:var a=r.stateNode;if(4&r.effectTag)if(null===n)a.componentDidMount();else{var l=r.elementType===r.type?n.memoizedProps:sr(r.type,n.memoizedProps);a.componentDidUpdate(l,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}null!==(n=r.updateQueue)&&is(0,n,a);break;case 3:if(null!==(n=r.updateQueue)){if(a=null,null!==r.child)switch(r.child.tag){case 5:case 1:a=r.child.stateNode}is(0,n,a)}break;case 5:i=r.stateNode,null===n&&4&r.effectTag&&wn(r.type,r.memoizedProps)&&i.focus();break;case 6:case 4:case 12:case 13:case 17:break;default:s("163")}}128&o&&(null!==(r=As.ref)&&(i=As.stateNode,"function"==typeof r?r(i):r.current=i)),512&o&&(zs=e),As=As.nextEffect}}function js(e,t){Ls=Hs=zs=null;var o=la;la=!0;do{if(512&t.effectTag){var n=!1,r=void 0;try{var i=t;gs(Pr,Or,i),gs(Or,Ar,i)}catch(e){n=!0,r=e}n&&Xs(t,r)}t=t.nextEffect}while(null!==t);la=o,0!==(o=e.expirationTime)&&Ea(e,o),fa||la||$a(1073741823,!1)}function Vs(){null!==Hs&&Tn(Hs),null!==Ls&&Ls()}function Zs(e,t){Ps=Os=!0,e.current===t&&s("177");var o=e.pendingCommitExpirationTime;0===o&&s("261"),e.pendingCommitExpirationTime=0;var n=t.expirationTime,r=t.childExpirationTime;for(function(e,t){if(e.didError=!1,0===t)e.earliestPendingTime=0,e.latestPendingTime=0,e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0;else{t<e.latestPingedTime&&(e.latestPingedTime=0);var o=e.latestPendingTime;0!==o&&(o>t?e.earliestPendingTime=e.latestPendingTime=0:e.earliestPendingTime>t&&(e.earliestPendingTime=e.latestPendingTime)),0===(o=e.earliestSuspendedTime)?or(e,t):t<e.latestSuspendedTime?(e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0,or(e,t)):t>o&&or(e,t)}ir(0,e)}(e,r>n?r:n),ks.current=null,n=void 0,1<t.effectTag?null!==t.lastEffect?(t.lastEffect.nextEffect=t,n=t.firstEffect):n=t:n=t.firstEffect,vn=To,yn=function(){var e=Ho();if(Lo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{var o=(t=(t=e.ownerDocument)&&t.defaultView||window).getSelection&&t.getSelection();if(o&&0!==o.rangeCount){t=o.anchorNode;var n=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{t.nodeType,r.nodeType}catch(e){t=null;break e}var i=0,s=-1,a=-1,l=0,c=0,d=e,h=null;t:for(;;){for(var u;d!==t||0!==n&&3!==d.nodeType||(s=i+n),d!==r||0!==o&&3!==d.nodeType||(a=i+o),3===d.nodeType&&(i+=d.nodeValue.length),null!==(u=d.firstChild);)h=d,d=u;for(;;){if(d===e)break t;if(h===t&&++l===n&&(s=i),h===r&&++c===o&&(a=i),null!==(u=d.nextSibling))break;h=(d=h).parentNode}d=u}t=-1===s||-1===a?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;return{focusedElem:e,selectionRange:t}}(),To=!1,As=n;null!==As;){r=!1;var a=void 0;try{Ws()}catch(e){r=!0,a=e}r&&(null===As&&s("178"),Xs(As,a),null!==As&&(As=As.nextEffect))}for(As=n;null!==As;){r=!1,a=void 0;try{Bs()}catch(e){r=!0,a=e}r&&(null===As&&s("178"),Xs(As,a),null!==As&&(As=As.nextEffect))}for(Go(yn),yn=null,To=!!vn,vn=null,e.current=t,As=n;null!==As;){r=!1,a=void 0;try{Us(e,o)}catch(e){r=!0,a=e}r&&(null===As&&s("178"),Xs(As,a),null!==As&&(As=As.nextEffect))}if(null!==n&&null!==zs){var l=js.bind(null,e,n);Hs=i.unstable_runWithPriority(i.unstable_NormalPriority,(function(){return _n(l)})),Ls=l}Os=Ps=!1,"function"==typeof Un&&Un(t.stateNode),o=t.expirationTime,0===(t=(t=t.childExpirationTime)>o?t:o)&&(Gs=null),function(e,t){e.expirationTime=t,e.finishedWork=null}(e,t)}function qs(e){for(;;){var t=e.alternate,o=e.return,n=e.sibling;if(0==(1024&e.effectTag)){Is=e;e:{var i=t,a=Ds,l=(t=e).pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 18:break;case 1:case 17:zn(t.type)&&Hn();break;case 3:Rr(),Ln(),(l=t.stateNode).pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),null!==i&&null!==i.child||(Ci(t),t.effectTag&=-3),ds(t);break;case 5:Er(t);var c=_r(Sr.current);if(a=t.type,null!==i&&null!=t.stateNode)hs(i,t,a,l,c),i.ref!==t.ref&&(t.effectTag|=128);else if(l){var d=_r(Cr.current);if(Ci(t)){i=(l=t).stateNode;var h=l.type,u=l.memoizedProps,p=c;switch(i[N]=l,i[A]=u,a=void 0,c=h){case"iframe":case"object":Ro("load",i);break;case"video":case"audio":for(h=0;h<oe.length;h++)Ro(oe[h],i);break;case"source":Ro("error",i);break;case"img":case"image":case"link":Ro("error",i),Ro("load",i);break;case"form":Ro("reset",i),Ro("submit",i);break;case"details":Ro("toggle",i);break;case"input":Ct(i,u),Ro("invalid",i),gn(p,"onChange");break;case"select":i._wrapperState={wasMultiple:!!u.multiple},Ro("invalid",i),gn(p,"onChange");break;case"textarea":Qo(i,u),Ro("invalid",i),gn(p,"onChange")}for(a in fn(c,u),h=null,u)u.hasOwnProperty(a)&&(d=u[a],"children"===a?"string"==typeof d?i.textContent!==d&&(h=["children",d]):"number"==typeof d&&i.textContent!==""+d&&(h=["children",""+d]):w.hasOwnProperty(a)&&null!=d&&gn(p,a));switch(c){case"input":We(i),_t(i,u,!0);break;case"textarea":We(i),en(i);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(i.onclick=bn)}a=h,l.updateQueue=a,(l=null!==a)&&ls(t)}else{u=t,i=a,p=l,h=9===c.nodeType?c:c.ownerDocument,d===tn.html&&(d=on(i)),d===tn.html?"script"===i?((i=h.createElement("div")).innerHTML="<script><\/script>",h=i.removeChild(i.firstChild)):"string"==typeof p.is?h=h.createElement(i,{is:p.is}):(h=h.createElement(i),"select"===i&&p.multiple&&(h.multiple=!0)):h=h.createElementNS(d,i),(i=h)[N]=u,i[A]=l,cs(i,t,!1,!1),p=i;var f=c,m=mn(h=a,u=l);switch(h){case"iframe":case"object":Ro("load",p),c=u;break;case"video":case"audio":for(c=0;c<oe.length;c++)Ro(oe[c],p);c=u;break;case"source":Ro("error",p),c=u;break;case"img":case"image":case"link":Ro("error",p),Ro("load",p),c=u;break;case"form":Ro("reset",p),Ro("submit",p),c=u;break;case"details":Ro("toggle",p),c=u;break;case"input":Ct(p,u),c=wt(p,u),Ro("invalid",p),gn(f,"onChange");break;case"option":c=Ko(p,u);break;case"select":p._wrapperState={wasMultiple:!!u.multiple},c=r({},u,{value:void 0}),Ro("invalid",p),gn(f,"onChange");break;case"textarea":Qo(p,u),c=Xo(p,u),Ro("invalid",p),gn(f,"onChange");break;default:c=u}fn(h,c),d=void 0;var g=h,b=p,v=c;for(d in v)if(v.hasOwnProperty(d)){var y=v[d];"style"===d?un(b,y):"dangerouslySetInnerHTML"===d?null!=(y=y?y.__html:void 0)&&an(b,y):"children"===d?"string"==typeof y?("textarea"!==g||""!==y)&&ln(b,y):"number"==typeof y&&ln(b,""+y):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(w.hasOwnProperty(d)?null!=y&&gn(f,d):null!=y&&vt(b,d,y,m))}switch(h){case"input":We(p),_t(p,u,!1);break;case"textarea":We(p),en(p);break;case"option":null!=u.value&&p.setAttribute("value",""+yt(u.value));break;case"select":(c=p).multiple=!!u.multiple,null!=(p=u.value)?Yo(c,!!u.multiple,p,!1):null!=u.defaultValue&&Yo(c,!!u.multiple,u.defaultValue,!0);break;default:"function"==typeof c.onClick&&(p.onclick=bn)}(l=wn(a,l))&&ls(t),t.stateNode=i}null!==t.ref&&(t.effectTag|=128)}else null===t.stateNode&&s("166");break;case 6:i&&null!=t.stateNode?us(i,t,i.memoizedProps,l):("string"!=typeof l&&(null===t.stateNode&&s("166")),i=_r(Sr.current),_r(Cr.current),Ci(t)?(a=(l=t).stateNode,i=l.memoizedProps,a[N]=l,(l=a.nodeValue!==i)&&ls(t)):(a=t,(l=(9===i.nodeType?i:i.ownerDocument).createTextNode(l))[N]=t,a.stateNode=l));break;case 13:if(l=t.memoizedState,0!=(64&t.effectTag)){t.expirationTime=a,Is=t;break e}l=null!==l,a=null!==i&&null!==i.memoizedState,null!==i&&!l&&a&&(null!==(i=i.child.sibling)&&(null!==(c=t.firstEffect)?(t.firstEffect=i,i.nextEffect=c):(t.firstEffect=t.lastEffect=i,i.nextEffect=null),i.effectTag=8)),(l||a)&&(t.effectTag|=4);break;case 4:Rr(),ds(t);break;case 10:Bi(t);break;default:s("156")}Is=null}if(t=e,1===Ds||1!==t.childExpirationTime){for(l=0,a=t.child;null!==a;)(i=a.expirationTime)>l&&(l=i),(c=a.childExpirationTime)>l&&(l=c),a=a.sibling;t.childExpirationTime=l}if(null!==Is)return Is;null!==o&&0==(1024&o.effectTag)&&(null===o.firstEffect&&(o.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==o.lastEffect&&(o.lastEffect.nextEffect=e.firstEffect),o.lastEffect=e.lastEffect),1<e.effectTag&&(null!==o.lastEffect?o.lastEffect.nextEffect=e:o.firstEffect=e,o.lastEffect=e))}else{if(null!==(e=Ts(e)))return e.effectTag&=1023,e;null!==o&&(o.firstEffect=o.lastEffect=null,o.effectTag|=1024)}if(null!==n)return n;if(null===o)break;e=o}return null}function Ks(e){var t=Pi(e.alternate,e,Ds);return e.memoizedProps=e.pendingProps,null===t&&(t=qs(e)),ks.current=null,t}function Ys(e,t){Os&&s("243"),Vs(),Os=!0;var o=Rs.current;Rs.current=hi;var n=e.nextExpirationTimeToWorkOn;n===Ds&&e===Ms&&null!==Is||(Fs(),Ds=n,Is=Yn((Ms=e).current,null),e.pendingCommitExpirationTime=0);for(var r=!1;;){try{if(t)for(;null!==Is&&!Ma();)Is=Ks(Is);else for(;null!==Is;)Is=Ks(Is)}catch(t){if(Gi=Li=Hi=null,ei(),null===Is)r=!0,za(t);else{null===Is&&s("271");var i=Is,a=i.return;if(null!==a){e:{var l=e,c=a,d=i,h=t;if(a=Ds,d.effectTag|=1024,d.firstEffect=d.lastEffect=null,null!==h&&"object"==typeof h&&"function"==typeof h.then){var u=h;h=c;var p=-1,f=-1;do{if(13===h.tag){var m=h.alternate;if(null!==m&&null!==(m=m.memoizedState)){f=10*(1073741822-m.timedOutAt);break}"number"==typeof(m=h.pendingProps.maxDuration)&&(0>=m?p=0:(-1===p||m<p)&&(p=m))}h=h.return}while(null!==h);h=c;do{if((m=13===h.tag)&&(m=void 0!==h.memoizedProps.fallback&&null===h.memoizedState),m){if(null===(c=h.updateQueue)?((c=new Set).add(u),h.updateQueue=c):c.add(u),0==(1&h.mode)){h.effectTag|=64,d.effectTag&=-1957,1===d.tag&&(null===d.alternate?d.tag=17:((a=Qi(1073741823)).tag=Zi,es(d,a))),d.expirationTime=1073741823;break e}c=a;var g=(d=l).pingCache;null===g?(g=d.pingCache=new xs,m=new Set,g.set(u,m)):void 0===(m=g.get(u))&&(m=new Set,g.set(u,m)),m.has(c)||(m.add(c),d=Js.bind(null,d,u,c),u.then(d,d)),-1===p?l=1073741823:(-1===f&&(f=10*(1073741822-rr(l,a))-5e3),l=f+p),0<=l&&$s<l&&($s=l),h.effectTag|=2048,h.expirationTime=a;break e}h=h.return}while(null!==h);h=Error((lt(d.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+ct(d))}Ns=!0,h=as(h,d),l=c;do{switch(l.tag){case 3:l.effectTag|=2048,l.expirationTime=a,ts(l,a=Ss(l,h,a));break e;case 1:if(p=h,f=l.type,d=l.stateNode,0==(64&l.effectTag)&&("function"==typeof f.getDerivedStateFromError||null!==d&&"function"==typeof d.componentDidCatch&&(null===Gs||!Gs.has(d)))){l.effectTag|=2048,l.expirationTime=a,ts(l,a=_s(l,p,a));break e}}l=l.return}while(null!==l)}Is=qs(i);continue}r=!0,za(t)}}break}if(Os=!1,Rs.current=o,Gi=Li=Hi=null,ei(),r)Ms=null,e.finishedWork=null;else if(null!==Is)e.finishedWork=null;else{if(null===(o=e.current.alternate)&&s("281"),Ms=null,Ns){if(r=e.latestPendingTime,i=e.latestSuspendedTime,a=e.latestPingedTime,0!==r&&r<n||0!==i&&i<n||0!==a&&a<n)return nr(e,n),void Ta(e,o,n,e.expirationTime,-1);if(!e.didError&&t)return e.didError=!0,n=e.nextExpirationTimeToWorkOn=n,t=e.expirationTime=1073741823,void Ta(e,o,n,t,-1)}t&&-1!==$s?(nr(e,n),(t=10*(1073741822-rr(e,n)))<$s&&($s=t),t=10*(1073741822-ka()),t=$s-t,Ta(e,o,n,e.expirationTime,0>t?0:t)):(e.pendingCommitExpirationTime=n,e.finishedWork=o)}}function Xs(e,t){for(var o=e.return;null!==o;){switch(o.tag){case 1:var n=o.stateNode;if("function"==typeof o.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===Gs||!Gs.has(n)))return es(o,e=_s(o,e=as(t,e),1073741823)),void oa(o,1073741823);break;case 3:return es(o,e=Ss(o,e=as(t,e),1073741823)),void oa(o,1073741823)}o=o.return}3===e.tag&&(es(e,o=Ss(e,o=as(t,e),1073741823)),oa(e,1073741823))}function Qs(e,t){var o=i.unstable_getCurrentPriorityLevel(),n=void 0;if(0==(1&t.mode))n=1073741823;else if(Os&&!Ps)n=Ds;else{switch(o){case i.unstable_ImmediatePriority:n=1073741823;break;case i.unstable_UserBlockingPriority:n=1073741822-10*(1+((1073741822-e+15)/10|0));break;case i.unstable_NormalPriority:n=1073741822-25*(1+((1073741822-e+500)/25|0));break;case i.unstable_LowPriority:case i.unstable_IdlePriority:n=1;break;default:s("313")}null!==Ms&&n===Ds&&--n}return o===i.unstable_UserBlockingPriority&&(0===ha||n<ha)&&(ha=n),n}function Js(e,t,o){var n=e.pingCache;null!==n&&n.delete(t),null!==Ms&&Ds===o?Ms=null:(t=e.earliestSuspendedTime,n=e.latestSuspendedTime,0!==t&&o<=t&&o>=n&&(e.didError=!1,(0===(t=e.latestPingedTime)||t>o)&&(e.latestPingedTime=o),ir(o,e),0!==(o=e.expirationTime)&&Ea(e,o)))}function ea(e,t){var o=e.stateNode;null!==o&&o.delete(t),null!==(e=ta(e,t=Qs(t=ka(),e)))&&(or(e,t),0!==(t=e.expirationTime)&&Ea(e,t))}function ta(e,t){e.expirationTime<t&&(e.expirationTime=t);var o=e.alternate;null!==o&&o.expirationTime<t&&(o.expirationTime=t);var n=e.return,r=null;if(null===n&&3===e.tag)r=e.stateNode;else for(;null!==n;){if(o=n.alternate,n.childExpirationTime<t&&(n.childExpirationTime=t),null!==o&&o.childExpirationTime<t&&(o.childExpirationTime=t),null===n.return&&3===n.tag){r=n.stateNode;break}n=n.return}return r}function oa(e,t){null!==(e=ta(e,t))&&(!Os&&0!==Ds&&t>Ds&&Fs(),or(e,t),Os&&!Ps&&Ms===e||Ea(e,e.expirationTime),Ca>wa&&(Ca=0,s("185")))}function na(e,t,o,n,r){return i.unstable_runWithPriority(i.unstable_ImmediatePriority,(function(){return e(t,o,n,r)}))}var ra=null,ia=null,sa=0,aa=void 0,la=!1,ca=null,da=0,ha=0,ua=!1,pa=null,fa=!1,ma=!1,ga=null,ba=i.unstable_now(),va=1073741822-(ba/10|0),ya=va,wa=50,Ca=0,xa=null;function Sa(){va=1073741822-((i.unstable_now()-ba)/10|0)}function _a(e,t){if(0!==sa){if(t<sa)return;null!==aa&&i.unstable_cancelCallback(aa)}sa=t,e=i.unstable_now()-ba,aa=i.unstable_scheduleCallback(Da,{timeout:10*(1073741822-t)-e})}function Ta(e,t,o,n,r){e.expirationTime=n,0!==r||Ma()?0<r&&(e.timeoutHandle=xn(Ra.bind(null,e,t,o),r)):(e.pendingCommitExpirationTime=o,e.finishedWork=t)}function Ra(e,t,o){e.pendingCommitExpirationTime=o,e.finishedWork=t,Sa(),ya=va,Na(e,o)}function ka(){return la||(Oa(),0!==da&&1!==da||(Sa(),ya=va)),ya}function Ea(e,t){null===e.nextScheduledRoot?(e.expirationTime=t,null===ia?(ra=ia=e,e.nextScheduledRoot=e):(ia=ia.nextScheduledRoot=e).nextScheduledRoot=ra):t>e.expirationTime&&(e.expirationTime=t),la||(fa?ma&&(ca=e,da=1073741823,Aa(e,1073741823,!1)):1073741823===t?$a(1073741823,!1):_a(e,t))}function Oa(){var e=0,t=null;if(null!==ia)for(var o=ia,n=ra;null!==n;){var r=n.expirationTime;if(0===r){if((null===o||null===ia)&&s("244"),n===n.nextScheduledRoot){ra=ia=n.nextScheduledRoot=null;break}if(n===ra)ra=r=n.nextScheduledRoot,ia.nextScheduledRoot=r,n.nextScheduledRoot=null;else{if(n===ia){(ia=o).nextScheduledRoot=ra,n.nextScheduledRoot=null;break}o.nextScheduledRoot=n.nextScheduledRoot,n.nextScheduledRoot=null}n=o.nextScheduledRoot}else{if(r>e&&(e=r,t=n),n===ia)break;if(1073741823===e)break;o=n,n=n.nextScheduledRoot}}ca=t,da=e}var Ia=!1;function Ma(){return!!Ia||!!i.unstable_shouldYield()&&(Ia=!0)}function Da(){try{if(!Ma()&&null!==ra){Sa();var e=ra;do{var t=e.expirationTime;0!==t&&va<=t&&(e.nextExpirationTimeToWorkOn=va),e=e.nextScheduledRoot}while(e!==ra)}$a(0,!0)}finally{Ia=!1}}function $a(e,t){if(Oa(),t)for(Sa(),ya=va;null!==ca&&0!==da&&e<=da&&!(Ia&&va>da);)Aa(ca,da,va>da),Oa(),Sa(),ya=va;else for(;null!==ca&&0!==da&&e<=da;)Aa(ca,da,!1),Oa();if(t&&(sa=0,aa=null),0!==da&&_a(ca,da),Ca=0,xa=null,null!==ga)for(e=ga,ga=null,t=0;t<e.length;t++){var o=e[t];try{o._onComplete()}catch(e){ua||(ua=!0,pa=e)}}if(ua)throw e=pa,pa=null,ua=!1,e}function Na(e,t){la&&s("253"),ca=e,da=t,Aa(e,t,!1),$a(1073741823,!1)}function Aa(e,t,o){if(la&&s("245"),la=!0,o){var n=e.finishedWork;null!==n?Pa(e,n,t):(e.finishedWork=null,-1!==(n=e.timeoutHandle)&&(e.timeoutHandle=-1,Sn(n)),Ys(e,o),null!==(n=e.finishedWork)&&(Ma()?e.finishedWork=n:Pa(e,n,t)))}else null!==(n=e.finishedWork)?Pa(e,n,t):(e.finishedWork=null,-1!==(n=e.timeoutHandle)&&(e.timeoutHandle=-1,Sn(n)),Ys(e,o),null!==(n=e.finishedWork)&&Pa(e,n,t));la=!1}function Pa(e,t,o){var n=e.firstBatch;if(null!==n&&n._expirationTime>=o&&(null===ga?ga=[n]:ga.push(n),n._defer))return e.finishedWork=t,void(e.expirationTime=0);e.finishedWork=null,e===xa?Ca++:(xa=e,Ca=0),i.unstable_runWithPriority(i.unstable_ImmediatePriority,(function(){Zs(e,t)}))}function za(e){null===ca&&s("246"),ca.expirationTime=0,ua||(ua=!0,pa=e)}function Ha(e,t){var o=fa;fa=!0;try{return e(t)}finally{(fa=o)||la||$a(1073741823,!1)}}function La(e,t){if(fa&&!ma){ma=!0;try{return e(t)}finally{ma=!1}}return e(t)}function Ga(e,t,o){fa||la||0===ha||($a(ha,!1),ha=0);var n=fa;fa=!0;try{return i.unstable_runWithPriority(i.unstable_UserBlockingPriority,(function(){return e(t,o)}))}finally{(fa=n)||la||$a(1073741823,!1)}}function Fa(e,t,o,n,r){var i=t.current;e:if(o){t:{2===oo(o=o._reactInternalFiber)&&1===o.tag||s("170");var a=o;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(zn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(null!==a);s("171"),a=void 0}if(1===o.tag){var l=o.type;if(zn(l)){o=Fn(o,l,a);break e}}o=a}else o=Dn;return null===t.context?t.context=o:t.pendingContext=o,t=r,(r=Qi(n)).payload={element:e},null!==(t=void 0===t?null:t)&&(r.callback=t),Vs(),es(i,r),oa(i,n),n}function Ba(e,t,o,n){var r=t.current;return Fa(e,t,o,r=Qs(ka(),r),n)}function Wa(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Ua(e){var t=1073741822-25*(1+((1073741822-ka()+500)/25|0));t>=Es&&(t=Es-1),this._expirationTime=Es=t,this._root=e,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function ja(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function Va(e,t,o){e={current:t=qn(3,null,null,t?3:0),containerInfo:e,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:o,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null},this._internalRoot=t.stateNode=e}function Za(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function qa(e,t,o,n,r){var i=o._reactRootContainer;if(i){if("function"==typeof r){var s=r;r=function(){var e=Wa(i._internalRoot);s.call(e)}}null!=e?i.legacy_renderSubtreeIntoContainer(e,t,r):i.render(t,r)}else{if(i=o._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var o;o=e.lastChild;)e.removeChild(o);return new Va(e,!1,t)}(o,n),"function"==typeof r){var a=r;r=function(){var e=Wa(i._internalRoot);a.call(e)}}La((function(){null!=e?i.legacy_renderSubtreeIntoContainer(e,t,r):i.render(t,r)}))}return Wa(i._internalRoot)}function Ka(e,t){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return Za(t)||s("200"),function(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ke,key:null==n?null:""+n,children:e,containerInfo:t,implementation:o}}(e,t,null,o)}ke=function(e,t,o){switch(t){case"input":if(St(e,o),t=o.name,"radio"===o.type&&null!=t){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var n=o[t];if(n!==e&&n.form===e.form){var r=L(n);r||s("90"),Ue(n),St(n,r)}}}break;case"textarea":Jo(e,o);break;case"select":null!=(t=o.value)&&Yo(e,!!o.multiple,t,!1)}},Ua.prototype.render=function(e){this._defer||s("250"),this._hasChildren=!0,this._children=e;var t=this._root._internalRoot,o=this._expirationTime,n=new ja;return Fa(e,t,null,o,n._onCommit),n},Ua.prototype.then=function(e){if(this._didComplete)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},Ua.prototype.commit=function(){var e=this._root._internalRoot,t=e.firstBatch;if(this._defer&&null!==t||s("251"),this._hasChildren){var o=this._expirationTime;if(t!==this){this._hasChildren&&(o=this._expirationTime=t._expirationTime,this.render(this._children));for(var n=null,r=t;r!==this;)n=r,r=r._next;null===n&&s("251"),n._next=r._next,this._next=t,e.firstBatch=this}this._defer=!1,Na(e,o),t=this._next,this._next=null,null!==(t=e.firstBatch=t)&&t._hasChildren&&t.render(t._children)}else this._next=null,this._defer=!1},Ua.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++)(0,e[t])()}},ja.prototype.then=function(e){if(this._didCommit)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},ja.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++){var o=e[t];"function"!=typeof o&&s("191",o),o()}}},Va.prototype.render=function(e,t){var o=this._internalRoot,n=new ja;return null!==(t=void 0===t?null:t)&&n.then(t),Ba(e,o,null,n._onCommit),n},Va.prototype.unmount=function(e){var t=this._internalRoot,o=new ja;return null!==(e=void 0===e?null:e)&&o.then(e),Ba(null,t,null,o._onCommit),o},Va.prototype.legacy_renderSubtreeIntoContainer=function(e,t,o){var n=this._internalRoot,r=new ja;return null!==(o=void 0===o?null:o)&&r.then(o),Ba(t,n,e,r._onCommit),r},Va.prototype.createBatch=function(){var e=new Ua(this),t=e._expirationTime,o=this._internalRoot,n=o.firstBatch;if(null===n)o.firstBatch=e,e._next=null;else{for(o=null;null!==n&&n._expirationTime>=t;)o=n,n=n._next;e._next=n,null!==o&&(o._next=e)}return e},$e=Ha,Ne=Ga,Ae=function(){la||0===ha||($a(ha,!1),ha=0)};var Ya={createPortal:Ka,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;return void 0===t&&("function"==typeof e.render?s("188"):s("268",Object.keys(e))),e=null===(e=ro(t))?null:e.stateNode},hydrate:function(e,t,o){return Za(t)||s("200"),qa(null,e,t,!0,o)},render:function(e,t,o){return Za(t)||s("200"),qa(null,e,t,!1,o)},unstable_renderSubtreeIntoContainer:function(e,t,o,n){return Za(o)||s("200"),(null==e||void 0===e._reactInternalFiber)&&s("38"),qa(e,t,o,!1,n)},unmountComponentAtNode:function(e){return Za(e)||s("40"),!!e._reactRootContainer&&(La((function(){qa(null,null,e,!1,(function(){e._reactRootContainer=null}))})),!0)},unstable_createPortal:function(){return Ka.apply(void 0,arguments)},unstable_batchedUpdates:Ha,unstable_interactiveUpdates:Ga,flushSync:function(e,t){la&&s("187");var o=fa;fa=!0;try{return na(e,t)}finally{fa=o,$a(1073741823,!1)}},unstable_createRoot:function(e,t){return Za(e)||s("299","unstable_createRoot"),new Va(e,!0,null!=t&&!0===t.hydrate)},unstable_flushControlled:function(e){var t=fa;fa=!0;try{na(e)}finally{(fa=t)||la||$a(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[z,H,L,I.injectEventPluginsByName,y,j,function(e){k(e,U)},Me,De,Oo,D]}};!function(e){var t=e.findFiberByHostInstance;(function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var o=t.inject(e);Un=Vn((function(e){return t.onCommitFiberRoot(o,e)})),jn=Vn((function(e){return t.onCommitFiberUnmount(o,e)}))}catch(e){}})(r({},e,{overrideProps:null,currentDispatcherRef:je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=ro(e))?null:e.stateNode},findFiberByHostInstance:function(e){return t?t(e):null}}))}({findFiberByHostInstance:P,bundleType:0,version:"16.8.4",rendererPackageName:"react-dom"});var Xa={default:Ya},Qa=Xa&&Ya||Xa;e.exports=Qa.default||Qa},2788:(e,t,o)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){}}(),e.exports=o(3975)},8447:(e,t,o)=>{var n=o(4516),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,d=r?Symbol.for("react.provider"):60109,h=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,o="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)o+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,o,n,r,i,s,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[o,n,r,i,s,a],c=0;(e=Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",o)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function C(e,t,o){this.props=e,this.context=t,this.refs=w,this.updater=o||y}function x(){}function S(e,t,o){this.props=e,this.context=t,this.refs=w,this.updater=o||y}C.prototype.isReactComponent={},C.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=C.prototype;var _=S.prototype=new x;_.constructor=S,n(_,C.prototype),_.isPureReactComponent=!0;var T={current:null},R={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,o){var n=void 0,r={},s=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,n)&&!E.hasOwnProperty(n)&&(r[n]=t[n]);var l=arguments.length-2;if(1===l)r.children=o;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===r[n]&&(r[n]=l[n]);return{$$typeof:i,type:e,key:s,ref:a,props:r,_owner:R.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var M=/\/+/g,D=[];function $(e,t,o,n){if(D.length){var r=D.pop();return r.result=e,r.keyPrefix=t,r.func=o,r.context=n,r.count=0,r}return{result:e,keyPrefix:t,func:o,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function A(e,t,o,n){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var a=!1;if(null===e)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case s:a=!0}}if(a)return o(n,e,""===t?"."+z(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=t+z(r=e[l],l);a+=A(r,c,o,n)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=b&&e[b]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),l=0;!(r=e.next()).done;)a+=A(r=r.value,c=t+z(r,l++),o,n);else"object"===r&&v("31","[object Object]"===(o=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":o,"");return a}function P(e,t,o){return null==e?0:A(e,"",t,o)}function z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function H(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,o){var n=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?G(e,n,o,(function(e){return e})):null!=e&&(I(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+o)),n.push(e))}function G(e,t,o,n,r){var i="";null!=o&&(i=(""+o).replace(M,"$&/")+"/"),P(e,L,t=$(t,i,n,r)),N(t)}function F(){var e=T.current;return null===e&&v("307"),e}var B={Children:{map:function(e,t,o){if(null==e)return e;var n=[];return G(e,n,null,t,o),n},forEach:function(e,t,o){if(null==e)return e;P(e,H,t=$(null,null,t,o)),N(t)},count:function(e){return P(e,(function(){return null}),null)},toArray:function(e){var t=[];return G(e,t,null,(function(e){return e})),t},only:function(e){return I(e)||v("143"),e}},createRef:function(){return{current:null}},Component:C,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,o){return F().useImperativeHandle(e,t,o)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,o){return F().useReducer(e,t,o)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:a,StrictMode:l,Suspense:f,createElement:O,cloneElement:function(e,t,o){null==e&&v("267",e);var r=void 0,s=n({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,c=R.current),void 0!==t.key&&(a=""+t.key);var d=void 0;for(r in e.type&&e.type.defaultProps&&(d=e.type.defaultProps),t)k.call(t,r)&&!E.hasOwnProperty(r)&&(s[r]=void 0===t[r]&&void 0!==d?d[r]:t[r])}if(1===(r=arguments.length-2))s.children=o;else if(1<r){d=Array(r);for(var h=0;h<r;h++)d[h]=arguments[h+2];s.children=d}return{$$typeof:i,type:e.type,key:a,ref:l,props:s,_owner:c}},createFactory:function(e){var t=O.bind(null,e);return t.type=e,t},isValidElement:I,version:"16.8.4",unstable_ConcurrentMode:u,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:T,ReactCurrentOwner:R,assign:n}},W={default:B},U=W&&B||W;e.exports=U.default||U},2735:(e,t,o)=>{e.exports=o(8447)},9666:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=null,r=!1,i=3,s=-1,a=-1,l=!1,c=!1;function d(){if(!l){var e=n.expirationTime;c?_():c=!0,S(p,e)}}function h(){var e=n,t=n.next;if(n===t)n=null;else{var o=n.previous;n=o.next=t,t.previous=o}e.next=e.previous=null,o=e.callback,t=e.expirationTime,e=e.priorityLevel;var r=i,s=a;i=e,a=t;try{var l=o()}finally{i=r,a=s}if("function"==typeof l)if(l={callback:l,priorityLevel:e,expirationTime:t,next:null,previous:null},null===n)n=l.next=l.previous=l;else{o=null,e=n;do{if(e.expirationTime>=t){o=e;break}e=e.next}while(e!==n);null===o?o=n:o===n&&(n=l,d()),(t=o.previous).next=o.previous=l,l.next=o,l.previous=t}}function u(){if(-1===s&&null!==n&&1===n.priorityLevel){l=!0;try{do{h()}while(null!==n&&1===n.priorityLevel)}finally{l=!1,null!==n?d():c=!1}}}function p(e){l=!0;var o=r;r=e;try{if(e)for(;null!==n;){var i=t.unstable_now();if(!(n.expirationTime<=i))break;do{h()}while(null!==n&&n.expirationTime<=i)}else if(null!==n)do{h()}while(null!==n&&!T())}finally{l=!1,r=o,null!==n?d():c=!1,u()}}var f,m,g=Date,b="function"==typeof setTimeout?setTimeout:void 0,v="function"==typeof clearTimeout?clearTimeout:void 0,y="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,w="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function C(e){f=y((function(t){v(m),e(t)})),m=b((function(){w(f),e(t.unstable_now())}),100)}if("object"==typeof performance&&"function"==typeof performance.now){var x=performance;t.unstable_now=function(){return x.now()}}else t.unstable_now=function(){return g.now()};var S,_,T,R=null;if("undefined"!=typeof window?R=window:void 0!==o.g&&(R=o.g),R&&R._schedMock){var k=R._schedMock;S=k[0],_=k[1],T=k[2],t.unstable_now=k[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var E=null,O=function(e){if(null!==E)try{E(e)}finally{E=null}};S=function(e){null!==E?setTimeout(S,0,e):(E=e,setTimeout(O,0,!1))},_=function(){E=null},T=function(){return!1}}else{var I=null,M=!1,D=-1,$=!1,N=!1,A=0,P=33,z=33;T=function(){return A<=t.unstable_now()};var H=new MessageChannel,L=H.port2;H.port1.onmessage=function(){M=!1;var e=I,o=D;I=null,D=-1;var n=t.unstable_now(),r=!1;if(0>=A-n){if(!(-1!==o&&o<=n))return $||($=!0,C(G)),I=e,void(D=o);r=!0}if(null!==e){N=!0;try{e(r)}finally{N=!1}}};var G=function(e){if(null!==I){C(G);var t=e-A+z;t<z&&P<z?(8>t&&(t=8),z=t<P?P:t):P=t,A=e+z,M||(M=!0,L.postMessage(void 0))}else $=!1};S=function(e,t){I=e,D=t,N||0>t?L.postMessage(void 0):$||($=!0,C(G))},_=function(){I=null,M=!1,D=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,o){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=i,r=s;i=e,s=t.unstable_now();try{return o()}finally{i=n,s=r,u()}},t.unstable_next=function(e){switch(i){case 1:case 2:case 3:var o=3;break;default:o=i}var n=i,r=s;i=o,s=t.unstable_now();try{return e()}finally{i=n,s=r,u()}},t.unstable_scheduleCallback=function(e,o){var r=-1!==s?s:t.unstable_now();if("object"==typeof o&&null!==o&&"number"==typeof o.timeout)o=r+o.timeout;else switch(i){case 1:o=r+-1;break;case 2:o=r+250;break;case 5:o=r+1073741823;break;case 4:o=r+1e4;break;default:o=r+5e3}if(e={callback:e,priorityLevel:i,expirationTime:o,next:null,previous:null},null===n)n=e.next=e.previous=e,d();else{r=null;var a=n;do{if(a.expirationTime>o){r=a;break}a=a.next}while(a!==n);null===r?r=n:r===n&&(n=e,d()),(o=r.previous).next=r.previous=e,e.next=r,e.previous=o}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)n=null;else{e===n&&(n=t);var o=e.previous;o.next=t,t.previous=o}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var o=i;return function(){var n=i,r=s;i=o,s=t.unstable_now();try{return e.apply(this,arguments)}finally{i=n,s=r,u()}}},t.unstable_getCurrentPriorityLevel=function(){return i},t.unstable_shouldYield=function(){return!r&&(null!==n&&n.expirationTime<a||T())},t.unstable_continueExecution=function(){null!==n&&d()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return n}},9146:(e,t,o)=>{e.exports=o(9666)}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[])),n.u=e=>"feature-billboard.js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},n.l=(t,o,r,i)=>{if(e[t])e[t].push(o);else{var s,a;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==t){s=d;break}}s||(a=!0,(s=document.createElement("script")).type="module",s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.src=t),e[t]=[o];var h=(o,n)=>{s.onerror=s.onload=null,clearTimeout(u);var r=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(n))),o)return o(n)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),a&&document.head.appendChild(s)}},n.p="#{root}/dist/webviews/",void 0!==n&&Object.defineProperty(n,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}}),(()=>{var e={786:0};n.f.j=(t,o)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise(((o,n)=>r=e[t]=[o,n]));o.push(r[2]=i);var s=n.p+n.u(t),a=new Error;n.l(s,(o=>{if(n.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}}),"chunk-"+t,t)}};var t=(t,o)=>{var r,i,[s,a,l]=o,c=0;if(s.some((t=>0!==e[t]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)l(n)}for(t&&t(o);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r={};(()=>{n.d(r,{q:()=>Ah});var e=n(2735),t=n.n(e),o=n(2788);class i{constructor(e,t=!1,o=!1){this.method=e,this.reset=t,this.pack=o}}class s extends i{}class a extends i{}function l(e,t,o){e.method===t.method&&o(t.params,e)}const c=new s("webview/ready"),d=new s("webview/focus");new s("command/execute"),new s("configuration/preview"),new s("configuration/update"),new a("configuration/didChange"),new a("configuration/didPreview"),new a("webview/didOpenAnchor");const h=new s("graph/chooseRepository"),u=new s("graph/dimMergeCommits"),p=new s("graph/dblclick"),f=new s("graph/rows/ensure"),m=new s("graph/avatars/get"),g=new s("graph/refs/metadata/get"),b=new s("graph/rows/get"),v=new s("graph/search"),y=new s("graph/search/openInView"),w=new s("graph/columns/update"),C=new s("graph/refs/update/visibility"),x=new s("graph/fitlers/update/excludeType"),S=new s("graph/configuration/update"),_=new s("graph/fitlers/update/includeOnlyRefs"),T=new s("graph/selection/update"),R=new a("graph/didChange",!0,!0),k=new a("graph/configuration/didChange"),E=new a("graph/subscription/didChange"),O=new a("graph/avatars/didChange"),I=new a("graph/refs/didChangeMetadata"),M=new a("graph/columns/didChange"),D=new a("graph/scrollMarkers/didChange"),$=new a("graph/focus/didChange"),N=new a("graph/window/focus/didChange"),A=new a("graph/refs/didChangeVisibility"),P=new a("graph/rows/didChange",void 0,!0),z=new a("graph/rows/stats/didChange"),H=new a("graph/selection/didChange"),L=new a("graph/workingTree/didChange"),G=new a("graph/rows/didEnsure"),F=new a("graph/didSearch"),B=new a("graph/didFetch");var W=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(W||{});function U(e,t){const o=e+t,n=t<0?o<0?0:o:o>255?255:o;return Math.round(n)}function j(e,t){return V(e,-t)}function V(e,t){const o=function(e){const t=se(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[n,r,i,s]=o,a=255*t/100;return`rgba(${U(n,a)}, ${U(r,a)}, ${U(i,a)}, ${s})`}function Z(e,t){const o=te.from(e);return null==o?e:o.transparent(t/100).toString()}function q(e,t,o){const n=te.from(e),r=te.from(t);return null==n||null==r?e:n.mix(r,o/100).toString()}function K(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class Y{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=K(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class X{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=K(Math.max(Math.min(1,t),0),3),this.l=K(Math.max(Math.min(1,o),0),3),this.a=K(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,r=e.a,i=Math.max(t,o,n),s=Math.min(t,o,n);let a=0,l=0;const c=(s+i)/2,d=i-s;if(d>0){switch(l=Math.min(c<=.5?d/(2*c):d/(2-2*c),1),i){case t:a=(o-n)/d+(o<n?6:0);break;case o:a=(n-t)/d+2;break;case n:a=(t-o)/d+4}a*=60,a=Math.round(a)}return new X(a,l,c,r)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:r}=e;let i,s,a;if(0===o)i=s=a=n;else{const e=n<.5?n*(1+o):n+o-n*o,r=2*n-e;i=X._hue2rgb(r,e,t+1/3),s=X._hue2rgb(r,e,t),a=X._hue2rgb(r,e,t-1/3)}return new Y(Math.round(255*i),Math.round(255*s),Math.round(255*a),r)}}class Q{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=K(Math.max(Math.min(1,t),0),3),this.v=K(Math.max(Math.min(1,o),0),3),this.a=K(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,r=Math.max(t,o,n),i=r-Math.min(t,o,n),s=0===r?0:i/r;let a;return a=0===i?0:r===t?((o-n)/i%6+6)%6:r===o?(n-t)/i+2:(t-o)/i+4,new Q(Math.round(60*a),s,r,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:r}=e,i=n*o,s=i*(1-Math.abs(t/60%2-1)),a=n-i;let[l,c,d]=[0,0,0];return t<60?(l=i,c=s):t<120?(l=s,c=i):t<180?(c=i,d=s):t<240?(c=s,d=i):t<300?(l=s,d=i):t<=360&&(l=i,d=s),l=Math.round(255*(l+a)),c=Math.round(255*(c+a)),d=Math.round(255*(d+a)),new Y(l,c,d,r)}}function J(e,t){return t.getPropertyValue(e).trim()}const ee=class e{static from(t){return t instanceof e?t:se(t)||e.red}static fromCssVariable(t,o){return se(J(t,o))||e.red}static fromHex(t){return ae(t)||e.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:X.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:Q.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof Y)this.rgba=e;else if(e instanceof X)this._hsla=e,this.rgba=X.toRGBA(e);else{if(!(e instanceof Q))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=Q.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&Y.equals(this.rgba,e.rgba)&&X.equals(this.hsla,e.hsla)&&Q.equals(this.hsva,e.hsva))}getRelativeLuminance(){return K(.2126*e._relativeLuminanceForComponent(this.rgba.r)+.7152*e._relativeLuminanceForComponent(this.rgba.g)+.0722*e._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new te(new Y(0,0,0,e.rgba.a));if(1===t)return new te(new Y(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const r=(e,o)=>{const i=e.mix(o,.5),s=i.getRelativeLuminance();return Math.abs(t-s)<1e-7||!n--?i:s>t?r(e,i):r(i,o)},i=(o>t?r(te.black,e):r(e,te.white)).rgba;return new te(new Y(i.r,i.g,i.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(t){return new e(new X(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new e(new X(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){const{r:o,g:n,b:r,a:i}=this.rgba;return new e(new Y(o,n,r,i*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new e(new Y(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){const o=t.rgba,n=this.rgba.a,r=o.a,i=n+r*(1-n);if(i<1e-6)return e.transparent;const s=this.rgba.r*n/i+o.r*r*(1-n)/i,a=this.rgba.g*n/i+o.g*r*(1-n)/i,l=this.rgba.b*n/i+o.b*r*(1-n)/i;return new e(new Y(s,a,l,i))}mix(e,t){return function(e,t,o){const n=e.rgba,r=t.rgba;return new te(new Y(n.r+o*(r.r-n.r),n.g+o*(r.g-n.g),n.b+o*(r.b-n.b),n.a+o*(r.a-n.a)))}(this,e,t)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;const{r:o,g:n,b:r,a:i}=this.rgba;return new e(new Y(t.rgba.r-i*(t.rgba.r-o),t.rgba.g-i*(t.rgba.g-n),t.rgba.b-i*(t.rgba.b-r),1))}flatten(...t){const o=t.reduceRight(((t,o)=>e._flatten(o,t)));return e._flatten(this,o)}static _flatten(t,o){const n=1-t.rgba.a;return new e(new Y(n*o.rgba.r+t.rgba.a*t.rgba.r,n*o.rgba.g+t.rgba.a*t.rgba.g,n*o.rgba.b+t.rgba.a*t.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return re(e);return oe(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(r-n)/r,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};ee.white=new ee(new Y(255,255,255,1)),ee.black=new ee(new Y(0,0,0,1)),ee.red=new ee(new Y(255,0,0,1)),ee.blue=new ee(new Y(0,0,255,1)),ee.green=new ee(new Y(0,255,0,1)),ee.cyan=new ee(new Y(0,255,255,1)),ee.lightgrey=new ee(new Y(211,211,211,1)),ee.transparent=new ee(new Y(0,0,0,0));let te=ee;function oe(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function ne(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function re(e){return`#${ne(e.rgba.r)}${ne(e.rgba.g)}${ne(e.rgba.b)}`}const ie=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function se(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===W.Hash)return ae(e);const t=ie.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new te(new Y(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new te(new X(n[0],n[1],n[2],n[3]))}return te.red}function ae(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==W.Hash)return null;switch(t){case 7:{const t=16*le(e.charCodeAt(1))+le(e.charCodeAt(2)),o=16*le(e.charCodeAt(3))+le(e.charCodeAt(4)),n=16*le(e.charCodeAt(5))+le(e.charCodeAt(6));return new te(new Y(t,o,n,1))}case 9:{const t=16*le(e.charCodeAt(1))+le(e.charCodeAt(2)),o=16*le(e.charCodeAt(3))+le(e.charCodeAt(4)),n=16*le(e.charCodeAt(5))+le(e.charCodeAt(6)),r=16*le(e.charCodeAt(7))+le(e.charCodeAt(8));return new te(new Y(t,o,n,r/255))}case 4:{const t=le(e.charCodeAt(1)),o=le(e.charCodeAt(2)),n=le(e.charCodeAt(3));return new te(new Y(16*t+t,16*o+o,16*n+n))}case 5:{const t=le(e.charCodeAt(1)),o=le(e.charCodeAt(2)),n=le(e.charCodeAt(3)),r=le(e.charCodeAt(4));return new te(new Y(16*t+t,16*o+o,16*n+n,(16*r+r)/255))}default:return null}}function le(e){switch(e){case W.Digit0:return 0;case W.Digit1:return 1;case W.Digit2:return 2;case W.Digit3:return 3;case W.Digit4:return 4;case W.Digit5:return 5;case W.Digit6:return 6;case W.Digit7:return 7;case W.Digit8:return 8;case W.Digit9:return 9;case W.a:case W.A:return 10;case W.b:case W.B:return 11;case W.c:case W.C:return 12;case W.d:case W.D:return 13;case W.e:case W.E:return 14;case W.f:case W.F:return 15}return 0}function ce(e){const t=.001*performance.now();let o=Math.floor(t),n=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],n-=e[1],n<0&&(o--,n+=1e9)),[o,n]}function de(e,t){let o,n,r,i,s;function a(e){const o=e-(n??0);return null==n||o>=t||o<0}function l(){const e=Date.now();if(a(e))c();else{s=setTimeout(l,t-(e-(n??0)))}}function c(){return s=void 0,o?function(){const t=o,n=r;return o=r=void 0,i=e.apply(n,t),i}():(o=r=void 0,i)}function d(...e){const c=Date.now(),d=a(c);return o=e,r=this,n=c,d&&null==s?(s=setTimeout(l,t),i):(null==s&&(s=setTimeout(l,t)),i)}return d.cancel=function(){null!=s&&clearTimeout(s),o=n=r=s=void 0},d.flush=function(){return null!=s?c():i},d.pending=function(){return null!=s},d}const he=",",ue="",pe="=",fe="{",me="(",ge=")",be=/\(([\s\S]*)\)/,ve=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,ye=/\s?=.*$/;const we="";const Ce=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=xe(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=xe(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??we}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??we}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??we}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??we}${this.toLoggableParams(!1,o)}${null!=e?`\n${String(e)}`:""}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??we}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??we}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??we}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??we}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return we;const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:we}};function xe(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}function Se(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??we}else t=e.constructor?.name??we;const o=t.indexOf("_");return-1===o?t:t.substr(o+1)}const _e={enabled:e=>Ce.enabled(e)||Ce.isDebugging,log:(e,t,o,...n)=>{switch(e){case"error":Ce.error("",t,o,...n);break;case"warn":Ce.warn(t,o,...n);break;case"info":Ce.log(t,o,...n);break;default:Ce.debug(t,o,...n)}}},Te=500,Re=2**30,ke=new Map;let Ee=0;function Oe(e){ke.delete(e)}function Ie(){return ke.get(Ee)}function Me(e,t){if(null!=t)return{scopeId:t.scopeId,prefix:`${t.prefix}${e}`};const o=De();return{scopeId:o,prefix:`[${String(o).padStart(5)}] ${e}`}}function De(){return Ee===Re&&(Ee=0),++Ee}const{fromCharCode:$e}=String;new TextEncoder;function Ne(e){const[t,o]=ce(e);return 1e3*t+Math.floor(o/1e6)}function Ae(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}const Pe="",ze=Symbol("logInstanceNameFn");function He(e){return function(e,t=!1){let o,n,r,i,s=0,a=!1,l=!1,c=!0;null!=e&&({args:o,enter:n,exit:r,prefix:i,logThreshold:s=0,scoped:a=!0,singleLine:l=!1,timed:c=!0}=e);s>0&&(l=!0,c=!0);c&&(a=!0);const d=Ce.isDebugging,h=t?Ce.debug:Ce.log,u=d?"debug":"info";return(e,t,p)=>{let f,m;if("function"==typeof p.value?(f=p.value,m="value"):"function"==typeof p.get&&(f=p.get,m="get"),null==f||null==m)throw new Error("Not supported");const g=!1!==o?function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(ve,ue)||t,t=t.slice(0,t.indexOf(fe));let o=t.indexOf(me),n=t.indexOf(ge);o=o>=0?o+1:0,n=n>0?n:t.indexOf(pe),t=t.slice(o,n),t=`(${t})`;const r=be.exec(t);return null!=r?r[1].split(he).map((e=>e.trim().replace(ye,ue))):[]}(f):[];p[m]=function(...e){if(!d&&!Ce.enabled(u))return f.apply(this,e);const p=De(),m=null!=this?this.constructor?.[ze]?.(this,Se(this))??Se(this):void 0;let b,v=m?a?`[${p.toString(16).padStart(5)}] ${m}.${t}`:`${m}.${t}`:t;null!=i&&(v=i({id:p,instance:this,instanceName:m??Pe,name:t,prefix:v},...e)),a&&(b={scopeId:p,prefix:v},function(e,t){ke.set(e,t)}(p,b));const y=null!=n?n(...e):Pe;let w;if(!1===o||0===e.length)w=Pe,l||h.call(Ce,`${v}${y}`);else{let t;w="";let n,r,i,s=-1;for(i of e){if(n=g[++s],t=o?.[s],null!=t){if("boolean"==typeof t)continue;if(w.length>0&&(w+=", "),"string"==typeof t){w+=t;continue}r=String(t(i))}else w.length>0&&(w+=", "),r=Ce.toLoggable(i);w+=n?`${n}=${r}`:r}l||h.call(Ce,w?`${v}${y}(${w})`:`${v}${y}`)}if(l||c||null!=r){const t=c?ce():void 0,o=e=>{const o=void 0!==t?` [${Ne(t)}ms]`:Pe;l?Ce.error(e,w?`${v}${y}(${w})`:`${v}${y}`,b?.exitDetails?`failed${b.exitDetails}${o}`:`failed${o}`):Ce.error(e,v,b?.exitDetails?`failed${b.exitDetails}${o}`:`failed${o}`),a&&Oe(p)};let n;try{n=f.apply(this,e)}catch(e){throw o(e),e}const i=e=>{let o,n,i,c;if(null!=t?(o=Ne(t),o>Te?(n=Ce.warn,i=` [*${o}ms] (slow)`):(n=h,i=` [${o}ms]`)):(i=Pe,n=h),null!=r)if("function"==typeof r)try{c=r(e)}catch(e){c=`@log.exit error: ${e}`}else!0===r&&(c=`returned ${Ce.toLoggable(e)}`);else b?.exitFailed?(c=b.exitFailed,n=Ce.error):c="completed";l?(0===s||o>s)&&n.call(Ce,w?`${v}${y}(${w}) ${c}${b?.exitDetails||Pe}${i}`:`${v}${y} ${c}${b?.exitDetails||Pe}${i}`):n.call(Ce,w?`${v}(${w}) ${c}${b?.exitDetails||Pe}${i}`:`${v} ${c}${b?.exitDetails||Pe}${i}`),a&&Oe(p)};return null!=n&&(null!=(C=n)&&(C instanceof Promise||"function"==typeof C?.then))?n.then(i,o):i(n),n}var C;return f.apply(this,e)}}}(e,!0)}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");class Le{constructor(e,t,...o){let n;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:Me(e??""),n="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??_e,this._time=ce(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){const[e,t]=ce(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=ce(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);const[o,n]=ce(this._time),r=1e3*o+Math.floor(n/1e6),i=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${i?`${i} `:""}[${r}ms]${e?.suffix??""}`)}}var Ge,Fe;(Fe=Ge||(Ge={})).on=function(e,t,o,n){let r=!1;if("string"==typeof e){const i=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,i,n??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,i,n??!0))}}}const i=function(e){o(e,this)};return e.addEventListener(t,i,n??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,i,n??!1))}}},Fe.insertTemplate=function(e,t,o){const n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const n=o.bindings[e];null!=n&&(t.textContent=String(n))}}},Fe.resetSlot=function(e){e.replaceChildren(),e.className=""};const Be=class e{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(t,o,n)=>{null==this.listeners&&(this.listeners=new Ze);const r=this.listeners.push(null==o?t:[t,o]),i={dispose:()=>{i.dispose=e._noop,this._disposed||r()}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new Ze);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};Be._noop=function(){};let We=Be;const Ue={done:!0,value:void 0},je=class e{constructor(t){this.element=t,this.next=e.Undefined,this.prev=e.Undefined}};je.Undefined=new je(void 0);let Ve=je;class Ze{constructor(){this._first=Ve.Undefined,this._last=Ve.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===Ve.Undefined}clear(){this._first=Ve.Undefined,this._last=Ve.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new Ve(e);if(this._first===Ve.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===Ve.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===Ve.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==Ve.Undefined&&e.next!==Ve.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===Ve.Undefined&&e.next===Ve.Undefined?(this._first=Ve.Undefined,this._last=Ve.Undefined):e.next===Ve.Undefined?(this._last=this._last.prev,this._last.next=Ve.Undefined):e.prev===Ve.Undefined&&(this._first=this._first.next,this._first.prev=Ve.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===Ve.Undefined?Ue:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==Ve.Undefined;t=t.next)e.push(t.element);return e}}const qe=new We,Ke=qe.event;function Ye(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,r=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),i=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),s=t.style,a=J("--vscode-editor-background",o);let l=J("--vscode-editor-foreground",o);l||(l=J("--vscode-foreground",o));let c=J("--color-background",o);return s.setProperty("--color-background--lighten-05",V(c,5)),s.setProperty("--color-background--darken-05",j(c,5)),s.setProperty("--color-background--lighten-075",V(c,7.5)),s.setProperty("--color-background--darken-075",j(c,7.5)),s.setProperty("--color-background--lighten-10",V(c,10)),s.setProperty("--color-background--darken-10",j(c,10)),s.setProperty("--color-background--lighten-15",V(c,15)),s.setProperty("--color-background--darken-15",j(c,15)),s.setProperty("--color-background--lighten-30",V(c,30)),s.setProperty("--color-background--darken-30",j(c,30)),s.setProperty("--color-background--lighten-50",V(c,50)),s.setProperty("--color-background--darken-50",j(c,50)),c=J("--color-button-background",o),s.setProperty("--color-button-background--darken-30",j(c,30)),c=J("--color-highlight",o),s.setProperty("--color-highlight--75",Z(c,75)),s.setProperty("--color-highlight--50",Z(c,50)),s.setProperty("--color-highlight--25",Z(c,25)),c=J("--color-button-secondary-background",o),s.setProperty("--color-button-secondary-background--darken-30",j(c,30)),c=J("--color-foreground",o),s.setProperty("--color-foreground--85",Z(c,85)),s.setProperty("--color-foreground--75",Z(c,75)),s.setProperty("--color-foreground--65",Z(c,65)),s.setProperty("--color-foreground--50",Z(c,50)),c=J("--color-link-foreground",o),s.setProperty("--color-link-foreground--darken-20",j(c,20)),s.setProperty("--color-link-foreground--lighten-20",V(c,20)),c=J("--color-alert-infoBackground",o),s.setProperty("--color-alert-infoHoverBackground",r?j(c,5):V(c,5)),c=J("--color-alert-warningBackground",o),s.setProperty("--color-alert-warningHoverBackground",r?j(c,5):V(c,5)),c=J("--color-alert-errorBackground",o),s.setProperty("--color-alert-errorHoverBackground",r?j(c,5):V(c,5)),c=r?j(a,5):V(a,5),s.setProperty("--color-alert-neutralBackground",c),s.setProperty("--color-alert-neutralHoverBackground",r?j(c,5):V(c,5)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:r,isHighContrastTheme:i,isInitializing:null==e}}var Xe=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor;let Je=0;function et(){return 1073741824===Je?Je=1:Je++,`webview:${Je}`}const tt=new TextDecoder;class ot{constructor(e){this.appName=e;const t=[],o=Ye();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(Ke(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",Ce.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log(`${e}()`),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{qe.fire(Ye(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log(`${e}(): initializing...`);try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(Ge.on(window,"message",(e=>this.onMessageReceivedCore(e)))),this.sendCommand(c,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(Ge.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}onMessageReceivedCore(e){const t=Ie(),o=e.data;if(o.packed&&o.params instanceof Uint8Array){const n=function(e,t,...o){return(t?.provider??_e).enabled(t?.logLevel??"info")?new Le(e,t,...o):void 0}(Me(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});o.params=JSON.parse(tt.decode(o.params)),n?.stop()}this.onMessageReceived(o)}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=de((e=>{this.sendCommand(d,e)}),150);this.bindDisposables.push(Ge.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),Ge.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){"string"==typeof e?Ce.log(e,...t):Ce.log(e,t.shift(),...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=et();this.log(`${this.appName}.sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){const n=et();this.log(`${this.appName}.sendCommandWithCompletion(${n}): name=${e.method}`);const r=new Promise(((e,t)=>{let r;const i=[Ge.on(window,"message",(t=>{l(o,t.data,(o=>{t.data.completionId===n&&(i.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=r&&(clearTimeout(r),r=void 0)}}];r=setTimeout((()=>{r=void 0,i.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${o.method}`))}),6e4)}));return this.postMessage({id:n,method:e.method,params:t,completionId:n}),r}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}((e,t,o,n)=>{for(var r,i=n>1?void 0:n?Qe(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);n&&i&&Xe(t,o,i)})([He({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],ot.prototype,"onMessageReceivedCore",1);var nt=n(7507),rt=n.n(nt);const it=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===it.trustedTypes&&(it.trustedTypes={createPolicy:(e,t)=>t});const st={configurable:!1,enumerable:!1,writable:!1};void 0===it.FAST&&Reflect.defineProperty(it,"FAST",Object.assign({value:Object.create(null)},st));const at=it.FAST;if(void 0===at.getById){const e=Object.create(null);Reflect.defineProperty(at,"getById",Object.assign({value(t,o){let n=e[t];return void 0===n&&(n=o?e[t]=o():null),n}},st))}const lt=Object.freeze([]);function ct(){const e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let n=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==n;)o=e.get(n),n=Reflect.getPrototypeOf(n);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}const dt=it.FAST.getById(1,(()=>{const e=[],t=[];function o(){if(t.length)throw t.shift()}function n(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}function r(){let t=0;for(;t<e.length;)if(n(e[t]),t++,t>1024){for(let o=0,n=e.length-t;o<n;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&it.requestAnimationFrame(r),e.push(t)},process:r})})),ht=it.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let ut=ht;const pt=`fast-${Math.random().toString(36).substring(2,8)}`,ft=`${pt}{`,mt=`}${pt}`,gt=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(ut!==ht)throw new Error("The HTML policy can only be set once.");ut=e},createHTML:e=>ut.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(pt),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${pt}:`,"")),createInterpolationPlaceholder:e=>`${ft}${e}${mt}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${pt}:${e}--\x3e`,queueUpdate:dt.enqueue,processUpdates:dt.process,nextUpdate:()=>new Promise(dt.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class bt{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){const t=this.spillover,o=this.source;if(void 0===t){const t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==n&&n.handleChange(o,e)}else for(let n=0,r=t.length;n<r;++n)t[n].handleChange(o,e)}}class vt{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new bt(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new bt(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const yt=at.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=gt.queueUpdate;let n,r=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function i(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=r(e):t.set(e,o=new vt(e))),o}const s=ct();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==n&&n.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,n=e[o];if(n!==t){e[o]=t;const r=e[this.callback];"function"==typeof r&&r.call(e,n,t),i(e).notify(this.name)}}}class l extends bt{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const r=this.binding(e,t);return n=o,r}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,r=i(e),s=null===o?this.first:{};if(s.propertySource=e,s.propertyName=t,s.notifier=r,r.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;n=void 0,t=o.propertySource[o.propertyName],n=this,e===t&&(this.needsRefresh=!0)}o.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){r=e},getNotifier:i,track(e,t){void 0!==n&&n.watch(e,t)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(e,t){i(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),s(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:s,binding(e,t,o=this.isVolatileBinding(e)){return new l(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));function wt(e,t){yt.defineProperty(e,t)}function Ct(e,t,o){return Object.assign({},o,{get:function(){return yt.trackVolatile(),o.get.apply(this)}})}const xt=at.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class St{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return xt.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){xt.set(e)}}yt.defineProperty(St.prototype,"index"),yt.defineProperty(St.prototype,"length");const _t=Object.seal(new St);class Tt{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function Rt(e){return e.map((e=>e instanceof Tt?Rt(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function kt(e){return e.map((e=>e instanceof Tt?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}Tt.create=(()=>{if(gt.supportsAdoptedStyleSheets){const e=new Map;return t=>new It(t,e)}return e=>new Dt(e)})();let Et=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},Ot=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(gt.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Et=(e,t)=>{e.adoptedStyleSheets.push(...t)},Ot=(e,t)=>{for(const o of t){const t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(Ya){}class It extends Tt{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=kt(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=Rt(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){Et(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Ot(e,this.styleSheets),super.removeStylesFrom(e)}}let Mt=0;class Dt extends Tt{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=kt(e),this.styleSheets=Rt(e),this.styleClass="fast-style-class-"+ ++Mt}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const r=document.createElement("style");r.innerHTML=t[n],r.className=o,e.append(r)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,n=t.length;o<n;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const $t=Object.freeze({locate:ct()}),Nt={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},At={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class Pt{constructor(e,t,o=t.toLowerCase(),n="reflect",r){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=n,this.converter=r,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===r&&(this.converter=Nt)}setValue(e,t){const o=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return yt.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||gt.queueUpdate((()=>{o.add(e);const n=e[this.fieldName];switch(t){case"reflect":const t=this.converter;gt.setAttribute(e,this.attribute,void 0!==t?t.toView(n):n);break;case"boolean":gt.setBooleanAttribute(e,this.attribute,n)}o.delete(e)}))}static collect(e,...t){const o=[];t.push($t.locate(e));for(let n=0,r=t.length;n<r;++n){const r=t[n];if(void 0!==r)for(let t=0,n=r.length;t<n;++t){const n=r[t];"string"==typeof n?o.push(new Pt(e,n)):o.push(new Pt(e,n.property,n.attribute,n.mode,n.converter))}}return o}}function zt(e,t){let o;function n(e,t){arguments.length>1&&(o.property=t),$t.locate(e.constructor).push(o)}return arguments.length>1?(o={},void n(e,t)):(o=void 0===e?{}:e,n)}const Ht={mode:"open"},Lt={},Gt=at.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class Ft{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=Pt.collect(e,t.attributes),n=new Array(o.length),r={},i={};for(let e=0,t=o.length;e<t;++e){const t=o[e];n[e]=t.attribute,r[t.name]=t,i[t.attribute]=t}this.attributes=o,this.observedAttributes=n,this.propertyLookup=r,this.attributeLookup=i,this.shadowOptions=void 0===t.shadowOptions?Ht:null===t.shadowOptions?void 0:Object.assign(Object.assign({},Ht),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?Lt:Object.assign(Object.assign({},Lt),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?Tt.create(t.styles):t.styles instanceof Tt?t.styles:Tt.create([t.styles])}get isDefined(){return!!Gt.getByType(this.type)}define(e=customElements){const t=this.type;if(Gt.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,n=e.length;t<n;++t)yt.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}Ft.forType=Gt.getByType;function Bt(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;const Wt=new WeakMap,Ut={bubbles:!0,composed:!0,cancelable:!0};function jt(e){return e.shadowRoot||Wt.get(e)||null}class Vt extends vt{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&Wt.set(e,t)}const n=yt.getAccessors(e);if(n.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,r=n.length;o<r;++o){const r=n[o].name,i=e[r];void 0!==i&&(delete e[r],t[r]=i)}}}get isConnected(){return yt.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,yt.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=jt(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=jt(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,n=[];for(let r=0;r<o;++r){const o=e[r];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),n.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,_t)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const n=e.length,r=[];for(let i=0;i<n;++i){const n=e[i];if(o.has(n)){const e=o.get(n)-1;0===e||t?o.delete(n)&&r.push(n):o.set(n,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<r.length;++t)r[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,_t);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,_t);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Ut),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let n=0,r=o.length;n<r;++n){const r=o[n];e[r]=t[r]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=jt(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||gt.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=Ft.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new Vt(e,o)}}function Zt(e){return class extends e{constructor(){super(),Vt.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const qt=Object.assign(Zt(HTMLElement),{from:e=>Zt(e),define:(e,t)=>new Ft(e,t).define().type});function Kt(e){return function(t){new Ft(t,e).define()}}const Yt=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(o){Reflect.defineMetadata(e,t,o)}},Reflect.defineMetadata=function(e,t,o){let n=Yt.get(o);void 0===n&&Yt.set(o,n=new Map),n.set(e,t)},Reflect.getOwnMetadata=function(e,t){const o=Yt.get(t);if(void 0!==o)return o.get(e)});class Xt{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,_o(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:o,key:n}=this;return this.container=this.key=void 0,o.registerResolver(n,new uo(n,e,t))}}function Qt(e){const t=e.slice(),o=Object.keys(e),n=o.length;let r;for(let i=0;i<n;++i)r=o[i],Do(r)||(t[r]=e[r]);return t}const Jt=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new uo(e,1,e),transient:e=>new uo(e,2,e)}),eo=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Jt.singleton})}),to=new Map;function oo(e){return t=>Reflect.getOwnMetadata(e,t)}let no=null;const ro=Object.freeze({createContainer:e=>new xo(null,Object.assign({},eo.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:ro.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(wo,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||ro.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new xo(e,Object.assign({},eo.default,t,{parentLocator:ro.findParentContainer})):no||(no=new xo(null,Object.assign({},eo.default,t,{parentLocator:()=>null}))),getDesignParamtypes:oo("design:paramtypes"),getAnnotationParamtypes:oo("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=to.get(e);if(void 0===t){const o=e.inject;if(void 0===o){const o=ro.getDesignParamtypes(e),n=ro.getAnnotationParamtypes(e);if(void 0===o)if(void 0===n){const o=Object.getPrototypeOf(e);t="function"==typeof o&&o!==Function.prototype?Qt(ro.getDependencies(o)):[]}else t=Qt(n);else if(void 0===n)t=Qt(o);else{t=Qt(o);let e,r=n.length;for(let o=0;o<r;++o)e=n[o],void 0!==e&&(t[o]=e);const i=Object.keys(n);let s;r=i.length;for(let e=0;e<r;++e)s=i[e],Do(s)||(t[s]=n[s])}}else t=Qt(o);to.set(e,t)}return t},defineProperty(e,t,o,n=!1){const r=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[r];if(void 0===e){const i=this instanceof HTMLElement?ro.findResponsibleContainer(this):ro.getOrCreateDOMContainer();if(e=i.get(o),this[r]=e,n&&this instanceof qt){const n=this.$fastController,i=()=>{ro.findResponsibleContainer(this).get(o)!==this[r]&&(this[r]=e,n.notify(t))};n.subscribe({handleChange:i},"isConnected")}}return e}})},createInterface(e,t){const o="function"==typeof e?e:t,n="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Eo,r="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),i=function(e,t,o){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${i.friendlyName}'`);if(t)ro.defineProperty(e,t,i,r);else{ro.getOrCreateAnnotationParamTypes(e)[o]=i}};return i.$isInterface=!0,i.friendlyName=n??"(anonymous)",null!=o&&(i.register=function(e,t){return o(new Xt(e,null!=t?t:i))}),i.toString=function(){return`InterfaceSymbol<${i.friendlyName}>`},i},inject:(...e)=>function(t,o,n){if("number"==typeof n){const o=ro.getOrCreateAnnotationParamTypes(t),r=e[0];void 0!==r&&(o[n]=r)}else if(o)ro.defineProperty(t,o,e[0]);else{const o=n?ro.getOrCreateAnnotationParamTypes(n.value):ro.getOrCreateAnnotationParamTypes(t);let r;for(let t=0;t<e.length;++t)r=e[t],void 0!==r&&(o[t]=r)}},transient:e=>(e.register=function(t){return To.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=ao)=>(e.register=function(t){return To.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),io=ro.createInterface("Container");function so(e){return function(t){const o=function(e,t,n){ro.inject(o)(e,t,n)};return o.$isResolver=!0,o.resolve=function(o,n){return e(t,o,n)},o}}ro.inject;const ao={scoped:!1};lo=(e,t,o,n)=>o.getAll(e,n);var lo;so(((e,t,o)=>()=>o.get(e))),so(((e,t,o)=>o.has(e,!0)?o.get(e):void 0));function co(e,t,o){ro.inject(co)(e,t,o)}co.$isResolver=!0,co.resolve=()=>{};so(((e,t,o)=>{const n=ho(e,t),r=new uo(e,0,n);return o.registerResolver(e,r),n})),so(((e,t,o)=>ho(e,t)));function ho(e,t){return t.getFactory(e).construct(t)}class uo{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const o=e.getFactory(this.state);if(null===o)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(n=null===(o=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===o?void 0:o.call(t,e))&&void 0!==n?n:null;default:return null}}}function po(e){return this.get(e)}function fo(e,t){return t(e)}class mo{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return o=void 0===t?new this.Type(...this.dependencies.map(po,e)):new this.Type(...this.dependencies.map(po,e),...t),null==this.transformers?o:this.transformers.reduce(fo,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const go={$isResolver:!0,resolve:(e,t)=>t};function bo(e){return"function"==typeof e.register}function vo(e){return function(e){return bo(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const yo=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),wo="__DI_LOCATE_PARENT__",Co=new Map;class xo{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(io,go),e instanceof Node&&e.addEventListener(wo,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,o,n,r,i;const s=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],Oo(t))if(bo(t))t.register(this,s);else if(void 0!==t.prototype)To.singleton(t,t).register(this);else for(o=Object.keys(t),r=0,i=o.length;r<i;++r)n=t[o[r]],Oo(n)&&(bo(n)?n.register(this,s):this.register(n));return--this.registerDepth,this}registerResolver(e,t){Ro(e);const o=this.resolvers,n=o.get(e);return null==n?o.set(e,t):n instanceof uo&&4===n.strategy?n.state.push(t):o.set(e,new uo(e,4,[n,t])),t}registerTransformer(e,t){const o=this.getResolver(e);if(null==o)return!1;if(o.getFactory){const e=o.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Ro(e),void 0!==e.resolve)return e;let o,n=this;for(;null!=n;){if(o=n.resolvers.get(e),null!=o)return o;if(null==n.parent){const o=vo(e)?this:n;return t?this.jitRegister(e,o):null}n=n.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(Ro(e),e.$isResolver)return e.resolve(this,this);let t,o=this;for(;null!=o;){if(t=o.resolvers.get(e),null!=t)return t.resolve(o,this);if(null==o.parent){const n=vo(e)?this:o;return t=this.jitRegister(e,n),t.resolve(o,this)}o=o.parent}throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){Ro(e);const o=this;let n,r=o;if(t){let t=lt;for(;null!=r;)n=r.resolvers.get(e),null!=n&&(t=t.concat(ko(n,r,o))),r=r.parent;return t}for(;null!=r;){if(n=r.resolvers.get(e),null!=n)return ko(n,r,o);if(r=r.parent,null==r)return lt}return lt}getFactory(e){let t=Co.get(e);if(void 0===t){if(Io(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Co.set(e,t=new mo(e,ro.getDependencies(e)))}return t}registerFactory(e,t){Co.set(e,t)}createChild(e){return new xo(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(yo.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(bo(e)){const o=e.register(t);if(!(o instanceof Object)||null==o.resolve){const o=t.resolvers.get(e);if(null!=o)return o;throw new Error("A valid resolver was not returned from the static register method")}return o}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}const So=new WeakMap;function _o(e){return function(t,o,n){if(So.has(n))return So.get(n);const r=e(t,o,n);return So.set(n,r),r}}const To=Object.freeze({instance:(e,t)=>new uo(e,0,t),singleton:(e,t)=>new uo(e,1,t),transient:(e,t)=>new uo(e,2,t),callback:(e,t)=>new uo(e,3,t),cachedCallback:(e,t)=>new uo(e,3,_o(t)),aliasTo:(e,t)=>new uo(t,5,e)});function Ro(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function ko(e,t,o){if(e instanceof uo&&4===e.strategy){const n=e.state;let r=n.length;const i=new Array(r);for(;r--;)i[r]=n[r].resolve(t,o);return i}return[e.resolve(t,o)]}const Eo="(anonymous)";function Oo(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Io=function(){const e=new WeakMap;let t=!1,o="",n=0;return function(r){return t=e.get(r),void 0===t&&(o=r.toString(),n=o.length,t=n>=29&&n<=100&&125===o.charCodeAt(n-1)&&o.charCodeAt(n-2)<=32&&93===o.charCodeAt(n-3)&&101===o.charCodeAt(n-4)&&100===o.charCodeAt(n-5)&&111===o.charCodeAt(n-6)&&99===o.charCodeAt(n-7)&&32===o.charCodeAt(n-8)&&101===o.charCodeAt(n-9)&&118===o.charCodeAt(n-10)&&105===o.charCodeAt(n-11)&&116===o.charCodeAt(n-12)&&97===o.charCodeAt(n-13)&&110===o.charCodeAt(n-14)&&88===o.charCodeAt(n-15),e.set(r,t)),t}}(),Mo={};function Do(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Mo[e];if(void 0!==t)return t;const o=e.length;if(0===o)return Mo[e]=!1;let n=0;for(let t=0;t<o;++t)if(n=e.charCodeAt(t),0===t&&48===n&&o>1||n<48||n>57)return Mo[e]=!1;return Mo[e]=!0}default:return!1}}function $o(e){return`${e.toLowerCase()}:presentation`}const No=new Map,Ao=Object.freeze({define(e,t,o){const n=$o(e);void 0===No.get(n)?No.set(n,t):No.set(n,!1),o.register(To.instance(n,t))},forTag(e,t){const o=$o(e),n=No.get(o);if(!1===n){return ro.findResponsibleContainer(t).get(o)}return n||null}});class Po{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?Tt.create(t):t instanceof Tt?t:Tt.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class zo extends qt{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Ao.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Lo(this===zo?class extends zo{}:this,e,t)}}function Ho(e,t,o){return"function"==typeof e?e(t,o):e}Bt([wt],zo.prototype,"template",void 0),Bt([wt],zo.prototype,"styles",void 0);class Lo{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const o=this.definition,n=this.overrideDefinition,r=`${o.prefix||t.elementPrefix}-${o.baseName}`;t.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Po(Ho(o.template,e,o),Ho(o.styles,e,o));e.definePresentation(t);let r=Ho(o.shadowOptions,e,o);e.shadowRootMode&&(r?n.shadowOptions||(r.mode=e.shadowRootMode):null!==r&&(r={mode:e.shadowRootMode})),e.defineElement({elementOptions:Ho(o.elementOptions,e,o),shadowOptions:r,attributes:Ho(o.attributes,e,o)})}})}}const Go=new Set(["children","localName","ref","style","className"]),Fo=Object.freeze(Object.create(null)),Bo="_default",Wo=new Map;function Uo(e){return e.events||(e.events={})}function jo(e,t,o){return!Go.has(o)}class Vo extends zo{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}Bt([zt({attribute:"fill"})],Vo.prototype,"fill",void 0),Bt([zt({attribute:"color"})],Vo.prototype,"color",void 0),Bt([zt({mode:"boolean"})],Vo.prototype,"circular",void 0);class Zo{constructor(){this.targetIndex=0}}class qo extends Zo{constructor(){super(...arguments),this.createPlaceholder=gt.createInterpolationPlaceholder}}class Ko extends Zo{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return gt.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Yo(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=yt.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function Xo(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function Qo(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Jo(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function en(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function tn(e){gt.setAttribute(this.target,this.targetName,e)}function on(e){gt.setBooleanAttribute(this.target,this.targetName,e)}function nn(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function rn(e){this.target[this.targetName]=e}function sn(e){const t=this.classVersions||Object.create(null),o=this.target;let n=this.version||0;if(null!=e&&e.length){const r=e.split(/\s+/);for(let e=0,i=r.length;e<i;++e){const i=r[e];""!==i&&(t[i]=n,o.classList.add(i))}}if(this.classVersions=t,this.version=n+1,0!==n){n-=1;for(const e in t)t[e]===n&&o.classList.remove(e)}}class an extends qo{constructor(e){super(),this.binding=e,this.bind=Yo,this.unbind=Qo,this.updateTarget=tn,this.isBindingVolatile=yt.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=rn,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>gt.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=on;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Xo,this.unbind=en;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=sn)}}targetAtContent(){this.updateTarget=nn,this.unbind=Jo}createBehavior(e){return new ln(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ln{constructor(e,t,o,n,r,i,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=n,this.unbind=r,this.updateTarget=i,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){St.setEvent(e);const t=this.binding(this.source,this.context);St.setEvent(null),!0!==t&&e.preventDefault()}}let cn=null;class dn{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){cn=this}static borrow(e){const t=cn||new dn;return t.directives=e,t.reset(),cn=null,t}}function hn(e){if(1===e.length)return e[0];let t;const o=e.length,n=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),r=new an(((e,t)=>{let r="";for(let i=0;i<o;++i)r+=n[i](e,t);return r}));return r.targetName=t,r}const un=mt.length;function pn(e,t){const o=t.split(ft);if(1===o.length)return null;const n=[];for(let t=0,r=o.length;t<r;++t){const r=o[t],i=r.indexOf(mt);let s;if(-1===i)s=r;else{const t=parseInt(r.substring(0,i));n.push(e.directives[t]),s=r.substring(i+un)}""!==s&&n.push(s)}return n}function fn(e,t,o=!1){const n=t.attributes;for(let r=0,i=n.length;r<i;++r){const s=n[r],a=s.value,l=pn(e,a);let c=null;null===l?o&&(c=new an((()=>a)),c.targetName=s.name):c=hn(l),null!==c&&(t.removeAttributeNode(s),r--,i--,e.addFactory(c))}}function mn(e,t,o){const n=pn(e,t.textContent);if(null!==n){let r=t;for(let i=0,s=n.length;i<s;++i){const s=n[i],a=0===i?t:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",e.captureContentBinding(s)),r=a,e.targetIndex++,a!==t&&o.nextNode()}e.targetIndex--}}const gn=document.createRange();class bn{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const o=e.parentNode;let n,r=this.firstChild;for(;r!==t;)n=r.nextSibling,o.insertBefore(r,e),r=n;o.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.appendChild(n),n=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.removeChild(n),n=o;e.removeChild(t);const r=this.behaviors,i=this.source;for(let e=0,t=r.length;e<t;++e)r[e].unbind(i)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const n=this.source;this.source=e,this.context=t;for(let r=0,i=o.length;r<i;++r){const i=o[r];i.unbind(n),i.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,r=o.length;n<r;++n)o[n].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,n=e.length;o<n;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){gn.setStartBefore(e[0].firstChild),gn.setEndAfter(e[e.length-1].lastChild),gn.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],n=o.behaviors,r=o.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(r)}}}}class vn{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=gt.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const n=dn.borrow(t);fn(n,e,!0);const r=n.behaviorFactories;n.reset();const i=gt.createTemplateWalker(o);let s;for(;s=i.nextNode();)switch(n.targetIndex++,s.nodeType){case 1:fn(n,s);break;case 3:mn(n,s,i);break;case 8:gt.isMarker(s)&&n.addFactory(t[gt.extractDirectiveIndexFromMarker(s)])}let a=0;(gt.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),a=-1);const l=n.behaviorFactories;return n.release(),{fragment:o,viewBehaviorFactories:l,hostBehaviorFactories:r,targetOffset:a}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,n=new Array(this.behaviorCount),r=gt.createTemplateWalker(t);let i=0,s=this.targetOffset,a=r.nextNode();for(let e=o.length;i<e;++i){const e=o[i],t=e.targetIndex;for(;null!==a;){if(s===t){n[i]=e.createBehavior(a);break}a=r.nextNode(),s++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,r=t.length;o<r;++o,++i)n[i]=t[o].createBehavior(e)}return new bn(t,n)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const n=this.create(o);return n.bind(e,_t),n.appendTo(t),n}}const yn=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function wn(e,...t){const o=[];let n="";for(let r=0,i=e.length-1;r<i;++r){const i=e[r];let s=t[r];if(n+=i,s instanceof vn){const e=s;s=()=>e}if("function"==typeof s&&(s=new an(s)),s instanceof qo){const e=yn.exec(i);null!==e&&(s.targetName=e[2])}s instanceof Zo?(n+=s.createPlaceholder(o.length),o.push(s)):n+=s}return n+=e[e.length-1],new vn(n,o)}const Cn=(e,t)=>wn`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class xn{createCSS(){return""}createBehavior(){}}function Sn(e,t){const o=[];let n="";const r=[];for(let i=0,s=e.length-1;i<s;++i){n+=e[i];let s=t[i];if(s instanceof xn){const e=s.createBehavior();s=s.createCSS(),e&&r.push(e)}s instanceof Tt||s instanceof CSSStyleSheet?(""!==n.trim()&&(o.push(n),n=""),o.push(s)):n+=s}return n+=e[e.length-1],""!==n.trim()&&o.push(n),{styles:o,behaviors:r}}function _n(e,...t){const{styles:o,behaviors:n}=Sn(e,t),r=Tt.create(o);return n.length&&r.withBehaviors(...n),r}function Tn(e){return`:host([hidden]){display:none}:host{display:${e}}`}function Rn(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const kn=document.createElement("div");class En{setProperty(e,t){gt.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){gt.queueUpdate((()=>this.target.removeProperty(e)))}}class On extends En{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class In extends En{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class Mn{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),yt.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),gt.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),gt.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:o}=this.style;if(o){const e=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[e].style}else this.target=null}}Bt([wt],Mn.prototype,"target",void 0);class Dn{constructor(e){this.target=e.style}setProperty(e,t){gt.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){gt.queueUpdate((()=>this.target.removeProperty(e)))}}class $n{setProperty(e,t){$n.properties[e]=t;for(const o of $n.roots.values())Pn.getOrCreate($n.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){delete $n.properties[e];for(const t of $n.roots.values())Pn.getOrCreate($n.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=$n;if(!t.has(e)){t.add(e);const o=Pn.getOrCreate(this.normalizeRoot(e));for(const e in $n.properties)o.setProperty(e,$n.properties[e])}}static unregisterRoot(e){const{roots:t}=$n;if(t.has(e)){t.delete(e);const o=Pn.getOrCreate($n.normalizeRoot(e));for(const e in $n.properties)o.removeProperty(e)}}static normalizeRoot(e){return e===kn?document:e}}$n.roots=new Set,$n.properties={};const Nn=new WeakMap,An=gt.supportsAdoptedStyleSheets?class extends En{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(Tt.create([t]))}}:Mn,Pn=Object.freeze({getOrCreate(e){if(Nn.has(e))return Nn.get(e);let t;return e===kn?t=new $n:e instanceof Document?t=gt.supportsAdoptedStyleSheets?new On:new In:t=e instanceof qt?new An(e):new Dn(e),Nn.set(e,t),t}});class zn extends xn{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=zn.uniqueId(),zn.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new zn({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return zn.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=Bn.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof zn&&(t=this.alias(t)),Bn.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),Bn.existsFor(e)&&Bn.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(kn,e),this}subscribe(e,t){const o=this.getOrCreateSubscriberSet(t);t&&!Bn.existsFor(t)&&Bn.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){const o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}zn.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),zn.tokensById=new Map;class Hn{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=yt.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,_t))}}class Ln{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),yt.getNotifier(this).notify(e.id))}get(e){return yt.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const Gn=new WeakMap,Fn=new WeakMap;class Bn{constructor(e){this.target=e,this.store=new Ln,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const o=zn.getTokenById(t);if(o&&(o.notify(this.target),zn.isCSSDesignToken(o))){const t=this.parent,n=this.isReflecting(o);if(t){const r=t.get(o),i=e.get(o);r===i||n?r===i&&n&&this.stopReflectToCSS(o):this.reflectToCSS(o)}else n||this.reflectToCSS(o)}}},Gn.set(e,this),yt.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof qt?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Gn.get(e)||new Bn(e)}static existsFor(e){return Gn.has(e)}static findParent(e){if(kn!==e.target){let t=Rn(e.target);for(;null!==t;){if(Gn.has(t))return Gn.get(t);t=Rn(t)}return Bn.getOrCreate(kn)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==kn?Bn.getOrCreate(kn):null}while(null!==o);return null}get parent(){return Fn.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const o=this.getRaw(e);return void 0!==o?(this.hydrate(e,o),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=Bn.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){zn.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),zn.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=Bn.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){Fn.get(this).removeChild(this)}}appendChild(e){e.parent&&Fn.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));Fn.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),yt.getNotifier(this.store).subscribe(e);for(const[t,o]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):o)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),yt.getNotifier(this.store).unsubscribe(e),e.parent===this&&Fn.delete(e)}contains(e){return function(e,t){let o=t;for(;null!==o;){if(o===e)return!0;o=Rn(o)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),Bn.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),Bn.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const o=zn.getTokenById(t);o&&this.hydrate(o,this.getRaw(o))}hydrate(e,t){if(!this.has(e)){const o=this.bindingObservers.get(e);zn.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const o=new Hn(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}Bn.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:o}=e;this.add(t,o)}add(e,t){Pn.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(Bn.getOrCreate(t).get(e)))}remove(e,t){Pn.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},Bt([wt],Bn.prototype,"children",void 0);const Wn=Object.freeze({create:function(e){return zn.from(e)},notifyConnection:e=>!(!e.isConnected||!Bn.existsFor(e))&&(Bn.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!Bn.existsFor(e))&&(Bn.getOrCreate(e).unbind(),!0),registerRoot(e=kn){$n.registerRoot(e)},unregisterRoot(e=kn){$n.unregisterRoot(e)}});function Un(e){const t=getComputedStyle(document.body),o=document.querySelector("body");if(o){const n=o.getAttribute("data-vscode-theme-kind");for(const[r,i]of e){let e=t.getPropertyValue(r).toString();if("vscode-high-contrast"===n)0===e.length&&i.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===i.name&&(e="transparent");else if("vscode-high-contrast-light"===n){if(0===e.length&&i.name.includes("background"))switch(i.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===i.name&&(e="transparent");i.setValueFor(o,e)}}}const jn=new Map;let Vn=!1;function Zn(e,t){const o=Wn.create(e);if(t){if(t.includes("--fake-vscode-token")){t=`${t}-${"id"+Math.random().toString(16).slice(2)}`}jn.set(t,o)}return Vn||(!function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{Un(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Un(e)}))}(jn),Vn=!0),o}const qn=Zn("background","--vscode-editor-background").withDefault("#1e1e1e"),Kn=Zn("border-width").withDefault(1),Yn=Zn("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),Xn=(Zn("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),Zn("corner-radius").withDefault(0)),Qn=Zn("design-unit").withDefault(4),Jn=Zn("disabled-opacity").withDefault(.4),er=Zn("focus-border","--vscode-focusBorder").withDefault("#007fd4"),tr=Zn("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),or=(Zn("font-weight","--vscode-font-weight").withDefault("400"),Zn("foreground","--vscode-foreground").withDefault("#cccccc")),nr=Zn("input-height").withDefault("26"),rr=Zn("input-min-width").withDefault("100px"),ir=Zn("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),sr=Zn("type-ramp-base-line-height").withDefault("normal"),ar=Zn("type-ramp-minus1-font-size").withDefault("11px"),lr=Zn("type-ramp-minus1-line-height").withDefault("16px"),cr=(Zn("type-ramp-minus2-font-size").withDefault("9px"),Zn("type-ramp-minus2-line-height").withDefault("16px"),Zn("type-ramp-plus1-font-size").withDefault("16px"),Zn("type-ramp-plus1-line-height").withDefault("24px"),Zn("scrollbarWidth").withDefault("10px")),dr=Zn("scrollbarHeight").withDefault("10px"),hr=Zn("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),ur=Zn("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),pr=Zn("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),fr=Zn("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),mr=Zn("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),gr=Zn("button-border","--vscode-button-border").withDefault("transparent"),br=Zn("button-icon-background").withDefault("transparent"),vr=Zn("button-icon-corner-radius").withDefault("5px"),yr=Zn("button-icon-outline-offset").withDefault(0),wr=Zn("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),Cr=Zn("button-icon-padding").withDefault("3px"),xr=Zn("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Sr=Zn("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),_r=Zn("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Tr=Zn("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Rr=Zn("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),kr=Zn("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Er=Zn("button-padding-horizontal").withDefault("11px"),Or=Zn("button-padding-vertical").withDefault("4px"),Ir=Zn("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Mr=Zn("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Dr=Zn("checkbox-corner-radius").withDefault(3),$r=(Zn("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),Zn("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771")),Nr=Zn("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Ar=Zn("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Pr=Zn("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),zr=Zn("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Hr=Zn("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),Lr=(Zn("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),Zn("dropdown-list-max-height").withDefault("200px")),Gr=Zn("input-background","--vscode-input-background").withDefault("#3c3c3c"),Fr=Zn("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),Br=(Zn("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),Zn("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff")),Wr=Zn("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Ur=Zn("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),jr=Zn("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Vr=Zn("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Zr=Zn("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),qr=(Zn("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),Zn("panel-view-border","--vscode-panel-border").withDefault("#80808059"),Zn("tag-corner-radius").withDefault("2px"));const Kr=class extends Vo{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}.compose({baseName:"badge",template:Cn,styles:(e,t)=>_n`
	${Tn("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${tr};
		font-size: ${ar};
		line-height: ${lr};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${fr};
		border: calc(${Kn} * 1px) solid ${gr};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${mr};
		display: flex;
		height: calc(${Qn} * 4px);
		justify-content: center;
		min-width: calc(${Qn} * 4px + 2px);
		min-height: calc(${Qn} * 4px + 2px);
		padding: 3px 6px;
	}
`});class Yr{}Bt([zt({attribute:"aria-atomic"})],Yr.prototype,"ariaAtomic",void 0),Bt([zt({attribute:"aria-busy"})],Yr.prototype,"ariaBusy",void 0),Bt([zt({attribute:"aria-controls"})],Yr.prototype,"ariaControls",void 0),Bt([zt({attribute:"aria-current"})],Yr.prototype,"ariaCurrent",void 0),Bt([zt({attribute:"aria-describedby"})],Yr.prototype,"ariaDescribedby",void 0),Bt([zt({attribute:"aria-details"})],Yr.prototype,"ariaDetails",void 0),Bt([zt({attribute:"aria-disabled"})],Yr.prototype,"ariaDisabled",void 0),Bt([zt({attribute:"aria-errormessage"})],Yr.prototype,"ariaErrormessage",void 0),Bt([zt({attribute:"aria-flowto"})],Yr.prototype,"ariaFlowto",void 0),Bt([zt({attribute:"aria-haspopup"})],Yr.prototype,"ariaHaspopup",void 0),Bt([zt({attribute:"aria-hidden"})],Yr.prototype,"ariaHidden",void 0),Bt([zt({attribute:"aria-invalid"})],Yr.prototype,"ariaInvalid",void 0),Bt([zt({attribute:"aria-keyshortcuts"})],Yr.prototype,"ariaKeyshortcuts",void 0),Bt([zt({attribute:"aria-label"})],Yr.prototype,"ariaLabel",void 0),Bt([zt({attribute:"aria-labelledby"})],Yr.prototype,"ariaLabelledby",void 0),Bt([zt({attribute:"aria-live"})],Yr.prototype,"ariaLive",void 0),Bt([zt({attribute:"aria-owns"})],Yr.prototype,"ariaOwns",void 0),Bt([zt({attribute:"aria-relevant"})],Yr.prototype,"ariaRelevant",void 0),Bt([zt({attribute:"aria-roledescription"})],Yr.prototype,"ariaRoledescription",void 0);class Xr{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Qr(e){return new Ko("fast-ref",Xr,e)}class Jr{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const ei=(e,t)=>wn`
    <span
        part="end"
        ${Qr("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Qr("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,ti=(e,t)=>wn`
    <span
        part="start"
        ${Qr("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Qr("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;wn`
    <span part="end" ${Qr("endContainer")}>
        <slot
            name="end"
            ${Qr("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,wn`
    <span part="start" ${Qr("startContainer")}>
        <slot
            name="start"
            ${Qr("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function oi(e,...t){const o=$t.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((o=>{"constructor"!==o&&Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t.prototype,o))}));$t.locate(t).forEach((e=>o.push(e)))}))}var ni;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(ni||(ni={}));const ri="ArrowDown",ii="ArrowLeft",si="ArrowRight",ai="ArrowUp",li="Enter",ci="Escape",di="Home",hi="End",ui=" ",pi="Tab",fi={ArrowDown:ri,ArrowLeft:ii,ArrowRight:si,ArrowUp:ai},mi="form-associated-proxy",gi="ElementInternals",bi=gi in window&&"setFormValue"in window[gi].prototype,vi=new WeakMap;function yi(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return bi}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?t.concat(Array.from(e)):t;return Object.freeze(o)}return lt}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),gt.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),gt.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!bi)return null;let e=vi.get(this);return e||(e=this.attachInternals(),vi.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,o){this.elementInternals?this.elementInternals.setValidity(e,t,o):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",mi),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",mi)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===li)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return zt({mode:"boolean"})(t.prototype,"disabled"),zt({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),zt({attribute:"current-value"})(t.prototype,"currentValue"),zt(t.prototype,"name"),zt({mode:"boolean"})(t.prototype,"required"),wt(t.prototype,"value"),t}function wi(e){class t extends(yi(e)){}class o extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return zt({attribute:"checked",mode:"boolean"})(o.prototype,"checkedAttribute"),zt({attribute:"current-checked",converter:Nt})(o.prototype,"currentChecked"),wt(o.prototype,"defaultChecked"),wt(o.prototype,"checked"),o}class Ci extends zo{}class xi extends(yi(Ci)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Si extends xi{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}Bt([zt({mode:"boolean"})],Si.prototype,"autofocus",void 0),Bt([zt({attribute:"form"})],Si.prototype,"formId",void 0),Bt([zt],Si.prototype,"formaction",void 0),Bt([zt],Si.prototype,"formenctype",void 0),Bt([zt],Si.prototype,"formmethod",void 0),Bt([zt({mode:"boolean"})],Si.prototype,"formnovalidate",void 0),Bt([zt],Si.prototype,"formtarget",void 0),Bt([zt],Si.prototype,"type",void 0),Bt([wt],Si.prototype,"defaultSlottedContent",void 0);class _i{}function Ti(e){return e?function(t,o,n){return 1===t.nodeType&&t.matches(e)}:function(e,t,o){return 1===e.nodeType}}Bt([zt({attribute:"aria-expanded"})],_i.prototype,"ariaExpanded",void 0),Bt([zt({attribute:"aria-pressed"})],_i.prototype,"ariaPressed",void 0),oi(_i,Yr),oi(Si,Jr,_i);class Ri{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=yt.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(lt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class ki extends Ri{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ei(e){return"string"==typeof e&&(e={property:e}),new Ko("fast-slotted",ki,e)}function Oi(...e){return e.every((e=>e instanceof HTMLElement))}let Ii;const Mi=function(){if("boolean"==typeof Ii)return Ii;if("undefined"==typeof window||!window.document||!window.document.createElement)return Ii=!1,Ii;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Ii=!0}catch(e){Ii=!1}finally{document.head.removeChild(e)}return Ii}()?"focus-visible":"focus",Di="not-allowed",$i=_n`
	${Tn("inline-flex")} :host {
		outline: none;
		font-family: ${tr};
		font-size: ${ir};
		line-height: ${sr};
		color: ${Sr};
		background: ${xr};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Or} ${Er};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${Kn} * 1px) solid ${gr};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${_r};
	}
	:host(:active) {
		background: ${xr};
	}
	.control:${Mi} {
		outline: calc(${Kn} * 1px) solid ${er};
		outline-offset: calc(${Kn} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Jn};
		background: ${xr};
		cursor: ${Di};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Qn} * 4px);
		height: calc(${Qn} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Ni=_n`
	:host([appearance='primary']) {
		background: ${xr};
		color: ${Sr};
	}
	:host([appearance='primary']:hover) {
		background: ${_r};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${xr};
	}
	:host([appearance='primary']) .control:${Mi} {
		outline: calc(${Kn} * 1px) solid ${er};
		outline-offset: calc(${Kn} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${xr};
	}
`,Ai=_n`
	:host([appearance='secondary']) {
		background: ${Tr};
		color: ${Rr};
	}
	:host([appearance='secondary']:hover) {
		background: ${kr};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${Tr};
	}
	:host([appearance='secondary']) .control:${Mi} {
		outline: calc(${Kn} * 1px) solid ${er};
		outline-offset: calc(${Kn} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${Tr};
	}
`,Pi=_n`
	:host([appearance='icon']) {
		background: ${br};
		border-radius: ${vr};
		color: ${or};
	}
	:host([appearance='icon']:hover) {
		background: ${wr};
		outline: 1px dotted ${Yn};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${Cr};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${wr};
	}
	:host([appearance='icon']) .control:${Mi} {
		outline: calc(${Kn} * 1px) solid ${er};
		outline-offset: ${yr};
	}
	:host([appearance='icon'][disabled]) {
		background: ${br};
	}
`;class zi extends Si{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,o){if("appearance"===e&&"icon"===o){this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")}"aria-label"===e&&(this.ariaLabel=o),"disabled"===e&&(this.disabled=null!==o)}}Bt([zt],zi.prototype,"appearance",void 0);const Hi=zi.compose({baseName:"button",template:(e,t)=>wn`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Qr("control")}
    >
        ${ti(0,t)}
        <span class="content" part="content">
            <slot ${Ei("defaultSlottedContent")}></slot>
        </span>
        ${ei(0,t)}
    </button>
`,styles:(e,t)=>_n`
	${$i}
	${Ni}
	${Ai}
	${Pi}
`,shadowOptions:{delegatesFocus:!0}});class Li extends zo{}class Gi extends(wi(Li)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Fi extends Gi{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly&&e.key===ui)this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}Bt([zt({attribute:"readonly",mode:"boolean"})],Fi.prototype,"readOnly",void 0),Bt([wt],Fi.prototype,"defaultSlottedNodes",void 0),Bt([wt],Fi.prototype,"indeterminate",void 0);const Bi=class extends Fi{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}.compose({baseName:"checkbox",template:(e,t)=>wn`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ei("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>_n`
	${Tn("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${Qn} * 1px) 0;
		user-select: none;
		font-size: ${ir};
		line-height: ${sr};
	}
	.control {
		position: relative;
		width: calc(${Qn} * 4px + 2px);
		height: calc(${Qn} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Dr} * 1px);
		border: calc(${Kn} * 1px) solid ${Mr};
		background: ${Ir};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${tr};
		color: ${or};
		padding-inline-start: calc(${Qn} * 2px + 2px);
		margin-inline-end: calc(${Qn} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${or};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${or};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${Ir};
		border-color: ${Mr};
	}
	:host(:enabled) .control:active {
		background: ${Ir};
		border-color: ${er};
	}
	:host(:${Mi}) .control {
		border: calc(${Kn} * 1px) solid ${er};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Di};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Jn};
	}
`,checkedIndicator:'\n\t\t<svg \n\t\t\tpart="checked-indicator"\n\t\t\tclass="checked-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"\n\t\t\t/>\n\t\t</svg>\n\t',indeterminateIndicator:'\n\t\t<div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n\t'});function Wi(e,t,o){return{index:e,removed:t,addedCount:o}}const Ui=0,ji=1,Vi=2,Zi=3;function qi(e,t,o,n,r,i){let s=0,a=0;const l=Math.min(o-t,i-r);if(0===t&&0===r&&(s=function(e,t,o){for(let n=0;n<o;++n)if(e[n]!==t[n])return n;return o}(e,n,l)),o===e.length&&i===n.length&&(a=function(e,t,o){let n=e.length,r=t.length,i=0;for(;i<o&&e[--n]===t[--r];)i++;return i}(e,n,l-s)),r+=s,i-=a,(o-=a)-(t+=s)==0&&i-r==0)return lt;if(t===o){const e=Wi(t,[],0);for(;r<i;)e.removed.push(n[r++]);return[e]}if(r===i)return[Wi(t,[],o-t)];const c=function(e){let t=e.length-1,o=e[0].length-1,n=e[t][o];const r=[];for(;t>0||o>0;){if(0===t){r.push(Vi),o--;continue}if(0===o){r.push(Zi),t--;continue}const i=e[t-1][o-1],s=e[t-1][o],a=e[t][o-1];let l;l=s<a?s<i?s:i:a<i?a:i,l===i?(i===n?r.push(Ui):(r.push(ji),n=i),t--,o--):l===s?(r.push(Zi),t--,n=s):(r.push(Vi),o--,n=a)}return r.reverse(),r}(function(e,t,o,n,r,i){const s=i-r+1,a=o-t+1,l=new Array(s);let c,d;for(let e=0;e<s;++e)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;++e)l[0][e]=e;for(let o=1;o<s;++o)for(let i=1;i<a;++i)e[t+i-1]===n[r+o-1]?l[o][i]=l[o-1][i-1]:(c=l[o-1][i]+1,d=l[o][i-1]+1,l[o][i]=c<d?c:d);return l}(e,t,o,n,r,i)),d=[];let h,u=t,p=r;for(let e=0;e<c.length;++e)switch(c[e]){case Ui:void 0!==h&&(d.push(h),h=void 0),u++,p++;break;case ji:void 0===h&&(h=Wi(u,[],0)),h.addedCount++,u++,h.removed.push(n[p]),p++;break;case Vi:void 0===h&&(h=Wi(u,[],0)),h.addedCount++,u++;break;case Zi:void 0===h&&(h=Wi(u,[],0)),h.removed.push(n[p]),p++}return void 0!==h&&d.push(h),d}const Ki=Array.prototype.push;function Yi(e,t,o,n){const r=Wi(t,o,n);let i=!1,s=0;for(let t=0;t<e.length;t++){const o=e[t];if(o.index+=s,i)continue;const n=(a=r.index,l=r.index+r.removed.length,c=o.index,d=o.index+o.addedCount,l<c||d<a?-1:l===c||d===a?0:a<c?l<d?l-c:d-c:d<l?d-a:l-a);if(n>=0){e.splice(t,1),t--,s-=o.addedCount-o.removed.length,r.addedCount+=o.addedCount-n;const a=r.removed.length+o.removed.length-n;if(r.addedCount||a){let e=o.removed;if(r.index<o.index){const t=r.removed.slice(0,o.index-r.index);Ki.apply(t,e),e=t}if(r.index+r.removed.length>o.index+o.addedCount){const t=r.removed.slice(o.index+o.addedCount-r.index);Ki.apply(e,t)}r.removed=e,o.index<r.index&&(r.index=o.index)}else i=!0}else if(r.index<o.index){i=!0,e.splice(t,0,r),t++;const n=r.addedCount-r.removed.length;o.index+=n,s+=n}}var a,l,c,d;i||e.push(r)}function Xi(e,t){let o=[];const n=function(e){const t=[];for(let o=0,n=e.length;o<n;o++){const n=e[o];Yi(t,n.index,n.removed,n.addedCount)}return t}(t);for(let t=0,r=n.length;t<r;++t){const r=n[t];1!==r.addedCount||1!==r.removed.length?o=o.concat(qi(e,r.index,r.index+r.addedCount,r.removed,0,r.removed.length)):r.removed[0]!==e[r.index]&&o.push(r)}return o}let Qi=!1;function Ji(e,t){let o=e.index;const n=t.length;return o>n?o=n-e.addedCount:o<0&&(o=n+e.removed.length+o-e.addedCount),o<0&&(o=0),e.index=o,e}class es extends bt{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,gt.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,gt.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const o=void 0===t?Xi(this.source,e):qi(this.source,0,this.source.length,t,0,t.length);this.notify(o)}}Object.freeze({positioning:!1,recycle:!0});function ts(e,t,o,n){e.bind(t[o],n)}function os(e,t,o,n){const r=Object.create(n);r.index=o,r.length=t.length,e.bind(t[o],r)}class ns{constructor(e,t,o,n,r,i){this.location=e,this.itemsBinding=t,this.templateBinding=n,this.options=i,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=ts,this.itemsBindingObserver=yt.binding(t,this,o),this.templateBindingObserver=yt.binding(n,this,r),i.positioning&&(this.bindView=os)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=lt);const t=this.itemsObserver,o=this.itemsObserver=yt.getNotifier(this.items),n=t!==o;n&&null!==t&&t.unsubscribe(this),(n||e)&&o.subscribe(this)}updateViews(e){const t=this.childContext,o=this.views,n=this.bindView,r=this.items,i=this.template,s=this.options.recycle,a=[];let l=0,c=0;for(let d=0,h=e.length;d<h;++d){const h=e[d],u=h.removed;let p=0,f=h.index;const m=f+h.addedCount,g=o.splice(h.index,u.length),b=c=a.length+g.length;for(;f<m;++f){const e=o[f],d=e?e.firstChild:this.location;let h;s&&c>0?(p<=b&&g.length>0?(h=g[p],p++):(h=a[l],l++),c--):h=i.create(),o.splice(f,0,h),n(h,r,f,t),h.insertBefore(d)}g[p]&&a.push(...g.slice(p))}for(let e=l,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=o.length;e<t;++e){const n=o[e].context;n.length=t,n.index=e}}refreshAllViews(e=!1){const t=this.items,o=this.childContext,n=this.template,r=this.location,i=this.bindView;let s=t.length,a=this.views,l=a.length;if(0!==s&&!e&&this.options.recycle||(bn.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(s);for(let e=0;e<s;++e){const s=n.create();i(s,t,e,o),a[e]=s,s.insertBefore(r)}}else{let e=0;for(;e<s;++e)if(e<l){i(a[e],t,e,o)}else{const s=n.create();i(s,t,e,o),a.push(s),s.insertBefore(r)}const c=a.splice(e,l-e);for(e=0,s=c.length;e<s;++e)c[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,o=e.length;t<o;++t)e[t].unbind()}}class rs extends Zo{constructor(e,t,o){super(),this.itemsBinding=e,this.templateBinding=t,this.options=o,this.createPlaceholder=gt.createBlockPlaceholder,function(){if(Qi)return;Qi=!0,yt.setArrayObserverFactory((e=>new es(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,o=e.push,n=e.reverse,r=e.shift,i=e.sort,s=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,o=t.apply(this,arguments),n=this.$fastController;return void 0!==n&&e&&n.addSplice(Wi(this.length,[o],0)),o},e.push=function(){const e=o.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Ji(Wi(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const o=n.apply(this,arguments);return void 0!==t&&t.reset(e),o},e.shift=function(){const e=this.length>0,t=r.apply(this,arguments),o=this.$fastController;return void 0!==o&&e&&o.addSplice(Wi(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const o=i.apply(this,arguments);return void 0!==t&&t.reset(e),o},e.splice=function(){const e=s.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Ji(Wi(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Ji(Wi(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=yt.isVolatileBinding(e),this.isTemplateBindingVolatile=yt.isVolatileBinding(t)}createBehavior(e){return new ns(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const is="focus",ss="focusin",as="focusout",ls="keydown",cs="none",ds="default",hs="sticky",us="default",ps="columnheader",fs="rowheader",ms="default",gs="header",bs="sticky-header";class vs extends zo{constructor(){super(),this.noTabbing=!1,this.generateHeader=ds,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,o)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const n=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),i=r[Math.max(0,Math.min(r.length-1,t))];o&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&i.scrollIntoView({block:"center",inline:"center"}),i.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach((e=>{e.addedNodes.forEach((e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,gt.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach(((t,o)=>{const n=t;n.rowIndex=o,n.gridTemplateColumns=e,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach((e=>{t=`${t}${""===t?"":" "}1fr`})),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=vs.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=vs.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new rs((e=>e.rowsData),(e=>e.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(is,this.handleFocus),this.addEventListener(ls,this.handleKeydown),this.addEventListener(as,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),gt.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(is,this.handleFocus),this.removeEventListener(ls,this.handleKeydown),this.removeEventListener(as,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const o=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,r=this.rowElements[o];switch(e.key){case ai:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case ri:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(t=this.focusRowIndex-1;t>=0;t--){const e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case"PageDown":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=o||r.offsetTop+r.offsetHeight<=n)return void this.focusOnCell(o,this.focusColumnIndex,!1);for(t=this.focusRowIndex+1;t<=o;t++){const e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>n){let t=0;this.generateHeader===hs&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case di:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case hi:e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,gt.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==cs&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);return this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===hs?bs:gs,void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}vs.generateColumns=e=>Object.getOwnPropertyNames(e).map(((e,t)=>({columnDataKey:e,gridColumn:`${t}`}))),Bt([zt({attribute:"no-tabbing",mode:"boolean"})],vs.prototype,"noTabbing",void 0),Bt([zt({attribute:"generate-header"})],vs.prototype,"generateHeader",void 0),Bt([zt({attribute:"grid-template-columns"})],vs.prototype,"gridTemplateColumns",void 0),Bt([wt],vs.prototype,"rowsData",void 0),Bt([wt],vs.prototype,"columnDefinitions",void 0),Bt([wt],vs.prototype,"rowItemTemplate",void 0),Bt([wt],vs.prototype,"cellItemTemplate",void 0),Bt([wt],vs.prototype,"headerCellItemTemplate",void 0),Bt([wt],vs.prototype,"focusRowIndex",void 0),Bt([wt],vs.prototype,"focusColumnIndex",void 0),Bt([wt],vs.prototype,"defaultRowItemTemplate",void 0),Bt([wt],vs.prototype,"rowElementTag",void 0),Bt([wt],vs.prototype,"rowElements",void 0);class ys extends Ri{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function ws(e){return"string"==typeof e&&(e={property:e}),new Ko("fast-children",ys,e)}class Cs extends zo{constructor(){super(...arguments),this.rowType=ms,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new rs((e=>e.columnDefinitions),(e=>e.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(as,this.handleFocusout),this.addEventListener(ls,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(as,this.handleFocusout),this.removeEventListener(ls,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case ii:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case si:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case di:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case hi:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===ms&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===ms&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}Bt([zt({attribute:"grid-template-columns"})],Cs.prototype,"gridTemplateColumns",void 0),Bt([zt({attribute:"row-type"})],Cs.prototype,"rowType",void 0),Bt([wt],Cs.prototype,"rowData",void 0),Bt([wt],Cs.prototype,"columnDefinitions",void 0),Bt([wt],Cs.prototype,"cellItemTemplate",void 0),Bt([wt],Cs.prototype,"headerCellItemTemplate",void 0),Bt([wt],Cs.prototype,"rowIndex",void 0),Bt([wt],Cs.prototype,"isActiveRow",void 0),Bt([wt],Cs.prototype,"activeCellItemTemplate",void 0),Bt([wt],Cs.prototype,"defaultCellItemTemplate",void 0),Bt([wt],Cs.prototype,"defaultHeaderCellItemTemplate",void 0),Bt([wt],Cs.prototype,"cellElements",void 0);const xs=wn`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,Ss=wn`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class _s extends zo{constructor(){super(...arguments),this.cellType=us,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(ss,this.handleFocusin),this.addEventListener(as,this.handleFocusout),this.addEventListener(ls,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(ss,this.handleFocusin),this.removeEventListener(as,this.handleFocusout),this.removeEventListener(ls,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===ps){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||null===this.columnDefinition||this.cellType===us&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===ps&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case li:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===ps){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case ci:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case ps:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Ss.render(this,this);break;case void 0:case fs:case us:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=xs.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}Bt([zt({attribute:"cell-type"})],_s.prototype,"cellType",void 0),Bt([zt({attribute:"grid-column"})],_s.prototype,"gridColumn",void 0),Bt([wt],_s.prototype,"rowData",void 0),Bt([wt],_s.prototype,"columnDefinition",void 0);const Ts=class extends vs{connectedCallback(){super.connectedCallback();this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}.compose({baseName:"data-grid",baseClass:vs,template:(e,t)=>{const o=function(e){const t=e.tagFor(Cs);return wn`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,t)=>t.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,t)=>t.parent.headerCellItemTemplate}"
    ></${t}>
`}(e),n=e.tagFor(Cs);return wn`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>n}"
            :defaultRowItemTemplate="${o}"
            ${ws({property:"rowElements",filter:Ti("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(e,t)=>_n`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`});const Rs=class extends Cs{}.compose({baseName:"data-grid-row",baseClass:Cs,template:(e,t)=>{const o=function(e){const t=e.tagFor(_s);return wn`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,t)=>t.index+1}"
        :rowData="${(e,t)=>t.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e),n=function(e){const t=e.tagFor(_s);return wn`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,t)=>t.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e);return wn`
        <template
            role="row"
            class="${e=>"default"!==e.rowType?e.rowType:""}"
            :defaultCellItemTemplate="${o}"
            :defaultHeaderCellItemTemplate="${n}"
            ${ws({property:"cellElements",filter:Ti('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Ei("slottedCellElements")}></slot>
        </template>
    `},styles:(e,t)=>_n`
	:host {
		display: grid;
		padding: calc((${Qn} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${qn};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Ar};
		outline: 1px dotted ${Yn};
		outline-offset: -1px;
	}
`});const ks=class extends _s{}.compose({baseName:"data-grid-cell",baseClass:_s,template:(e,t)=>wn`
        <template
            tabindex="-1"
            role="${e=>e.cellType&&"default"!==e.cellType?e.cellType:"gridcell"}"
            class="
            ${e=>"columnheader"===e.cellType?"column-header":"rowheader"===e.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(e,t)=>_n`
	:host {
		padding: calc(${Qn} * 1px) calc(${Qn} * 3px);
		color: ${or};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${tr};
		font-size: ${ir};
		line-height: ${sr};
		font-weight: 400;
		border: solid calc(${Kn} * 1px) transparent;
		border-radius: calc(${Xn} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${Mi}),
	:host(:focus),
	:host(:active) {
		background: ${$r};
		border: solid calc(${Kn} * 1px) ${er};
		color: ${Nr};
		outline: none;
	}
	:host(:${Mi}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${Nr} !important;
	}
`}),Es="horizontal",Os="separator";class Is extends zo{constructor(){super(...arguments),this.role=Os,this.orientation=Es}}Bt([zt],Is.prototype,"role",void 0),Bt([zt],Is.prototype,"orientation",void 0);const Ms=class extends Is{}.compose({baseName:"divider",template:(e,t)=>wn`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>_n`
	${Tn("block")} :host {
		border: none;
		border-top: calc(${Kn} * 1px) solid ${Pr};
		box-sizing: content-box;
		height: 0;
		margin: calc(${Qn} * 1px) 0;
		width: 100%;
	}
`});let Ds=0;function $s(e=""){return`${e}${Ds++}`}function Ns(e){return Oi(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class As extends zo{constructor(e,t,o,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),o&&(this.defaultSelected=o),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),yt.notify(this,"value")}get value(){var e;return yt.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}Bt([wt],As.prototype,"checked",void 0),Bt([wt],As.prototype,"content",void 0),Bt([wt],As.prototype,"defaultSelected",void 0),Bt([zt({mode:"boolean"})],As.prototype,"disabled",void 0),Bt([zt({attribute:"selected",mode:"boolean"})],As.prototype,"selectedAttribute",void 0),Bt([wt],As.prototype,"selected",void 0),Bt([zt({attribute:"value",mode:"fromView"})],As.prototype,"initialValue",void 0);class Ps{}Bt([wt],Ps.prototype,"ariaChecked",void 0),Bt([wt],Ps.prototype,"ariaPosInSet",void 0),Bt([wt],Ps.prototype,"ariaSelected",void 0),Bt([wt],Ps.prototype,"ariaSetSize",void 0),oi(Ps,Yr),oi(As,Jr,Ps);class zs extends zo{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return yt.track(this,"options"),this._options}set options(e){this._options=e,yt.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const o=e>t?-1:e<t?1:0,n=e+o;let r=null;switch(o){case-1:r=this.options.reduceRight(((e,t,o)=>!e&&!t.disabled&&o<n?t:e),r);break;case 1:r=this.options.reduce(((e,t,o)=>!e&&!t.disabled&&o>n?t:e),r)}return this.options.indexOf(r)}handleChange(e,t){if("selected"===t)zs.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),zs.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case di:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case ri:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case ai:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case hi:e.preventDefault(),this.selectLastOption();break;case pi:return this.focusAndScrollOptionIntoView(),!0;case li:case ci:return!0;case ui:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var o;if(this.hasSelectableOptions){if((null===(o=this.options[this.selectedIndex])||void 0===o?void 0:o.disabled)&&"number"==typeof e){const o=this.getSelectableIndex(e,t),n=o>-1?o:e;return this.selectedIndex=n,void(t===n&&this.selectedIndexChanged(t,n))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var o;const n=t.filter(zs.slottedOptionFilter);null===(o=this.options)||void 0===o||o.forEach((e=>{const t=yt.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=n.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let o=e.length;for(;o--;)if(t(e[o],o,e))return o;return-1}(this.options,(e=>!e.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,o;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(o=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==o?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Ns(t)&&e.push(t),e)),[]);const o=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=$s("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=o})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}zs.slottedOptionFilter=e=>Ns(e)&&!e.hidden,zs.TYPE_AHEAD_TIMEOUT_MS=1e3,Bt([zt({mode:"boolean"})],zs.prototype,"disabled",void 0),Bt([wt],zs.prototype,"selectedIndex",void 0),Bt([wt],zs.prototype,"selectedOptions",void 0),Bt([wt],zs.prototype,"slottedOptions",void 0),Bt([wt],zs.prototype,"typeaheadBuffer",void 0);class Hs{}function Ls(e,t,o=0){return[t,o]=[t,o].sort(((e,t)=>e-t)),t<=e&&e<o}Bt([wt],Hs.prototype,"ariaActiveDescendant",void 0),Bt([wt],Hs.prototype,"ariaDisabled",void 0),Bt([wt],Hs.prototype,"ariaExpanded",void 0),Bt([wt],Hs.prototype,"ariaMultiSelectable",void 0),oi(Hs,Yr),oi(zs,Hs);class Gs extends zs{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var o,n;this.ariaActiveDescendant=null!==(n=null===(o=this.options[t])||void 0===o?void 0:o.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=Ls(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Ls(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Ls(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=Ls(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const o=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return o&&!o.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:o}=e;switch(this.shouldSkipFocus=!1,t){case di:return void this.checkFirstOption(o);case ri:return void this.checkNextOption(o);case ai:return void this.checkPreviousOption(o);case hi:return void this.checkLastOption(o);case pi:return this.focusAndScrollOptionIntoView(),!0;case ci:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case ui:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var o;this.ariaMultiSelectable=t?"true":null,null===(o=this.options)||void 0===o||o.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var o;const n=Math.max(0,parseInt(null!==(o=null==t?void 0:t.toFixed())&&void 0!==o?o:"",10));n!==t&&gt.queueUpdate((()=>{this.size=n}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}Bt([wt],Gs.prototype,"activeIndex",void 0),Bt([zt({mode:"boolean"})],Gs.prototype,"multiple",void 0),Bt([zt({converter:At})],Gs.prototype,"size",void 0);class Fs extends Gs{}class Bs extends(yi(Fs)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const Ws="above",Us="below";class js extends Bs{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=$s("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void gt.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return yt.track(this,"value"),this._value}set value(e){var t,o,n,r,i,s,a;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(n=null===(o=this._options[this.selectedIndex])||void 0===o?void 0:o.value)&&void 0!==n?n:null,c=null!==(i=null===(r=this._options[t])||void 0===r?void 0:r.value)&&void 0!==i?i:null;-1!==t&&l===c||(e="",this.selectedIndex=t),e=null!==(a=null===(s=this.firstSelectedOption)||void 0===s?void 0:s.value)&&void 0!==a?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),yt.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,o;this.$fastController.isConnected&&(this.value=null!==(o=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==o?o:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Ws:Us,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Ws?~~e.top:~~t}get displayValue(){var e,t;return yt.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const o=e.relatedTarget;this.isSameNode(o)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(o))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{yt.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{yt.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var o;super.selectedOptionsChanged(e,t),null===(o=this.options)||void 0===o||o.forEach(((e,t)=>{var o;const n=null===(o=this.proxy)||void 0===o?void 0:o.options.item(t);n&&(n.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(zs.slottedOptionFilter),o=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===o?0:o}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case ui:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case di:case hi:e.preventDefault();break;case li:e.preventDefault(),this.open=!this.open;break;case ci:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case pi:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===ri||t===ai)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&yt.notify(this,"displayValue")}}Bt([zt({attribute:"open",mode:"boolean"})],js.prototype,"open",void 0),Bt([Ct],js.prototype,"collapsible",null),Bt([wt],js.prototype,"control",void 0),Bt([zt({attribute:"position"})],js.prototype,"positionAttribute",void 0),Bt([wt],js.prototype,"position",void 0),Bt([wt],js.prototype,"maxHeight",void 0);class Vs{}Bt([wt],Vs.prototype,"ariaControls",void 0),oi(Vs,Hs),oi(js,Jr,Vs);const Zs=e=>"function"==typeof e,qs=()=>null;function Ks(e){return void 0===e?qs:Zs(e)?e:()=>e}function Ys(e,t,o){const n=Zs(e)?e:()=>e,r=Ks(t),i=Ks(o);return(e,t)=>n(e,t)?r(e,t):i(e,t)}const Xs=class extends js{}.compose({baseName:"dropdown",template:(e,t)=>wn`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${Ys((e=>e.collapsible),wn`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Qr("control")}
                >
                    ${ti(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${ei(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Qr("listbox")}
        >
            <slot
                ${Ei({filter:zs.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>_n`
	${Tn("inline-flex")} :host {
		background: ${zr};
		box-sizing: border-box;
		color: ${or};
		contain: contents;
		font-family: ${tr};
		height: calc(${nr} * 1px);
		position: relative;
		user-select: none;
		min-width: ${rr};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${Kn} * 1px) solid ${Hr};
		border-radius: calc(${Xn} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${ir};
		line-height: ${sr};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${zr};
		border: calc(${Kn} * 1px) solid ${er};
		border-radius: calc(${Xn} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Lr};
		padding: 0 0 calc(${Qn} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${Mi}) .control {
		border-color: ${er};
	}
	:host(:not([disabled]):hover) {
		background: ${zr};
		border-color: ${Hr};
	}
	:host(:${Mi}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${$r};
		border: calc(${Kn} * 1px) solid ${er};
		color: ${Nr};
	}
	:host([disabled]) {
		cursor: ${Di};
		opacity: ${Jn};
	}
	:host([disabled]) .control {
		cursor: ${Di};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${zr};
		color: ${or};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${er};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${er};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${nr} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${nr} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${Qn} * 4px);
		min-width: calc(${Qn} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});class Qs extends zo{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{var e;null===(e=this.control)||void 0===e||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}Bt([zt],Qs.prototype,"download",void 0),Bt([zt],Qs.prototype,"href",void 0),Bt([zt],Qs.prototype,"hreflang",void 0),Bt([zt],Qs.prototype,"ping",void 0),Bt([zt],Qs.prototype,"referrerpolicy",void 0),Bt([zt],Qs.prototype,"rel",void 0),Bt([zt],Qs.prototype,"target",void 0),Bt([zt],Qs.prototype,"type",void 0),Bt([wt],Qs.prototype,"defaultSlottedContent",void 0);class Js{}Bt([zt({attribute:"aria-expanded"})],Js.prototype,"ariaExpanded",void 0),oi(Js,Yr),oi(Qs,Jr,Js);const ea=class extends Qs{}.compose({baseName:"link",template:(e,t)=>wn`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Qr("control")}
    >
        ${ti(0,t)}
        <span class="content" part="content">
            <slot ${Ei("defaultSlottedContent")}></slot>
        </span>
        ${ei(0,t)}
    </a>
`,styles:(e,t)=>_n`
	${Tn("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${Wr};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${tr};
		font-size: ${ir};
		line-height: ${sr};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${Kn} * 1px) solid transparent;
		border-radius: calc(${Xn} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${Br};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Br};
	}
	:host(:${Mi}) .control,
	:host(:focus) .control {
		border: calc(${Kn} * 1px) solid ${er};
	}
`,shadowOptions:{delegatesFocus:!0}});const ta=class extends As{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}.compose({baseName:"option",template:(e,t)=>wn`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${ti(0,t)}
        <span class="content" part="content">
            <slot ${Ei("content")}></slot>
        </span>
        ${ei(0,t)}
    </template>
`,styles:(e,t)=>_n`
	${Tn("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${Xn};
		border: calc(${Kn} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${or};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${ir};
		line-height: ${sr};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${Qn} / 2) * 1px)
			calc((${Qn} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${Mi}) {
		border-color: ${er};
		background: ${$r};
		color: ${or};
	}
	:host([aria-selected='true']) {
		background: ${$r};
		border: calc(${Kn} * 1px) solid ${er};
		color: ${Nr};
	}
	:host(:active) {
		background: ${$r};
		color: ${Nr};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${$r};
		border: calc(${Kn} * 1px) solid ${er};
		color: ${Nr};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${$r};
		color: ${or};
	}
	:host([disabled]) {
		cursor: ${Di};
		opacity: ${Jn};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`}),oa="horizontal";class na extends zo{constructor(){super(...arguments),this.orientation=oa,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",o=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((n,r)=>{if("tab"===n.slot){const e=this.activeTabIndex===r&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const t=this.tabIds[r],o=this.tabpanelIds[r];n.setAttribute("id",t),n.setAttribute("aria-selected",e?"true":"false"),n.setAttribute("aria-controls",o),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=n,this.activeid=t)}n.style[e]="",n.style[t]="",n.style[o]=`${r+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const o=this.tabIds[t],n=this.tabpanelIds[t];e.setAttribute("id",n),e.setAttribute("aria-labelledby",o),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case ii:e.preventDefault(),this.adjustBackward(e);break;case si:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case ai:e.preventDefault(),this.adjustBackward(e);break;case ri:e.preventDefault(),this.adjustForward(e)}switch(e.key){case di:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case hi:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let o=0;for(o=this.activetab?t.indexOf(this.activetab)+1:1,o===t.length&&(o=0);o<t.length&&t.length>1;){if(this.isFocusableElement(t[o])){this.moveToTabByIndex(t,o);break}if(this.activetab&&o===t.indexOf(this.activetab))break;o+1>=t.length?o=0:o+=1}},this.adjustBackward=e=>{const t=this.tabs;let o=0;for(o=this.activetab?t.indexOf(this.activetab)-1:0,o=o<0?t.length-1:o;o>=0&&t.length>1;){if(this.isFocusableElement(t[o])){this.moveToTabByIndex(t,o);break}o-1<0?o=t.length-1:o-=1}},this.moveToTabByIndex=(e,t)=>{const o=e[t];this.activetab=o,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,o.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${$s()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${$s()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===oa}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",o=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[o];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const r=this.activeIndicatorRef[o];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const i=r-n;this.activeIndicatorRef.style.transform=`${t}(${i}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){const t=this.tabs.filter((e=>this.isFocusableElement(e))),o=t.indexOf(this.activetab),n=function(e,t,o){return Math.min(Math.max(o,e),t)}(0,t.length-1,o+e),r=this.tabs.indexOf(t[n]);r>-1&&this.moveToTabByIndex(this.tabs,r)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}Bt([zt],na.prototype,"orientation",void 0),Bt([zt],na.prototype,"activeid",void 0),Bt([wt],na.prototype,"tabs",void 0),Bt([wt],na.prototype,"tabpanels",void 0),Bt([zt({mode:"boolean"})],na.prototype,"activeindicator",void 0),Bt([wt],na.prototype,"activeIndicatorRef",void 0),Bt([wt],na.prototype,"showActiveIndicator",void 0),oi(na,Jr);class ra extends zo{}Bt([zt({mode:"boolean"})],ra.prototype,"disabled",void 0);class ia extends zo{}const sa=class extends na{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=oa);this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}.compose({baseName:"panels",template:(e,t)=>wn`
    <template class="${e=>e.orientation}">
        ${ti(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Ei("tabs")}></slot>

            ${Ys((e=>e.showActiveIndicator),wn`
                    <div
                        ${Qr("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${ei(0,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${Ei("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>_n`
	${Tn("grid")} :host {
		box-sizing: border-box;
		font-family: ${tr};
		font-size: ${ir};
		line-height: ${sr};
		color: ${or};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${Qn} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${Qn} * 1px) calc(${Qn} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${Qn} / 4) * 1px);
		justify-self: center;
		background: ${Vr};
		margin: 0;
		border-radius: calc(${Xn} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`});const aa=class extends ra{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}.compose({baseName:"panel-tab",template:(e,t)=>wn`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>_n`
	${Tn("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${tr};
		font-size: ${ir};
		line-height: ${sr};
		height: calc(${Qn} * 7px);
		padding: calc(${Qn} * 1px) 0;
		color: ${Zr};
		fill: currentcolor;
		border-radius: calc(${Xn} * 1px);
		border: solid calc(${Kn} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${Vr};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${Vr};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${Vr};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${Vr};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${Vr};
		fill: currentcolor;
	}
	:host(:${Mi}) {
		outline: none;
		border: solid calc(${Kn} * 1px) ${jr};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${Qn} * 2px);
	}
`});const la=class extends ia{}.compose({baseName:"panel-view",template:(e,t)=>wn`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>_n`
	${Tn("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${Kn} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${ir};
		line-height: ${sr};
		padding: 10px calc((${Qn} + 2) * 1px);
	}
`});class ca extends zo{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,o="number"==typeof this.value?this.value:0,n=t-e;this.percentComplete=0===n?0:Math.fround((o-e)/n*100)}}Bt([zt({converter:At})],ca.prototype,"value",void 0),Bt([zt({converter:At})],ca.prototype,"min",void 0),Bt([zt({converter:At})],ca.prototype,"max",void 0),Bt([zt({mode:"boolean"})],ca.prototype,"paused",void 0),Bt([wt],ca.prototype,"percentComplete",void 0);const da=class extends ca{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,o){"value"===e&&this.removeAttribute("value")}}.compose({baseName:"progress-ring",template:(e,t)=>wn`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Ys((e=>"number"==typeof e.value),wn`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,wn`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>_n`
	${Tn("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${Qn} * 7px);
		width: calc(${Qn} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${Qn} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${Ur};
		stroke-width: calc(${Qn} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`,indeterminateIndicator:'\n\t\t<svg class="progress" part="progress" viewBox="0 0 16 16">\n\t\t\t<circle\n\t\t\t\tclass="background"\n\t\t\t\tpart="background"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t\t<circle\n\t\t\t\tclass="indeterminate-indicator-1"\n\t\t\t\tpart="indeterminate-indicator-1"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t</svg>\n\t'});class ha extends zo{}class ua extends(wi(ha)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class pa extends ua{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==ui)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}Bt([zt({attribute:"readonly",mode:"boolean"})],pa.prototype,"readOnly",void 0),Bt([wt],pa.prototype,"name",void 0),Bt([wt],pa.prototype,"defaultSlottedNodes",void 0);const fa=class extends pa{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}.compose({baseName:"radio",template:(e,t)=>wn`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ei("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>_n`
	${Tn("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${ir};
		line-height: ${sr};
		margin: calc(${Qn} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${Ir};
		border-radius: 999px;
		border: calc(${Kn} * 1px) solid ${Mr};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${Qn} * 4px);
		position: relative;
		outline: none;
		width: calc(${Qn} * 4px);
	}
	.label {
		color: ${or};
		cursor: pointer;
		font-family: ${tr};
		margin-inline-end: calc(${Qn} * 2px + 2px);
		padding-inline-start: calc(${Qn} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${or};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${Qn} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${Ir};
		border-color: ${Mr};
	}
	:host(:not([disabled])) .control:active {
		background: ${Ir};
		border-color: ${er};
	}
	:host(:${Mi}) .control {
		border: calc(${Kn} * 1px) solid ${er};
	}
	:host([aria-checked='true']) .control {
		background: ${Ir};
		border: calc(${Kn} * 1px) solid ${Mr};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${Ir};
		border: calc(${Kn} * 1px) solid ${Mr};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${Ir};
		border: calc(${Kn} * 1px) solid ${er};
	}
	:host([aria-checked="true"]:${Mi}:not([disabled])) .control {
		border: calc(${Kn} * 1px) solid ${er};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Di};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Jn};
	}
`,checkedIndicator:'\n\t\t<div part="checked-indicator" class="checked-indicator"></div>\n\t'});var ma;!function(e){e.ltr="ltr",e.rtl="rtl"}(ma||(ma={}));class ga extends zo{constructor(){super(...arguments),this.orientation=Es,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const o=e[t];this.isInsideToolbar||(o.setAttribute("tabindex","0"),o.readOnly?this.slottedRadioButtons.forEach((e=>{e!==o&&e.setAttribute("tabindex","-1")})):(o.checked=!0,this.selectedRadio=o)),this.focusedRadio=o,o.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,o=e.target,n=null!==o?t.indexOf(o):0,r=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===r&&n===r||r===t.length-1&&r===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,o)=>e===t.length&&this.isInsideToolbar&&o===si,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===ii,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(o,t,e.key))this.moveRightOffGroup();else for(o===t.length&&(o=0);o<t.length&&t.length>1;){if(!t[o].disabled){this.moveToRadioByIndex(t,o);break}if(this.focusedRadio&&o===t.indexOf(this.focusedRadio))break;if(o+1>=t.length){if(this.isInsideToolbar)break;o=0}else o+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,o=o<0?t.length-1:o,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;o>=0&&t.length>1;){if(!t[o].disabled){this.moveToRadioByIndex(t,o);break}if(this.focusedRadio&&o===t.indexOf(this.focusedRadio))break;o-1<0?o=t.length-1:o-=1}},this.keydownHandler=e=>{const t=e.key;if(t in fi&&this.isInsideFoundationToolbar)return!0;switch(t){case li:this.checkFocusedRadio();break;case si:case ri:this.direction===ma.ltr?this.moveRight(e):this.moveLeft(e);break;case ii:case ai:this.direction===ma.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?ma.rtl:ma.ltr})(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;if(t>1){e[t-1].checked=!0}let o=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),o=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!o){const o=e[t-1];o.checked=!0,this.focusedRadio=o,o.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}Bt([zt({attribute:"readonly",mode:"boolean"})],ga.prototype,"readOnly",void 0),Bt([zt({attribute:"disabled",mode:"boolean"})],ga.prototype,"disabled",void 0),Bt([zt],ga.prototype,"name",void 0),Bt([zt],ga.prototype,"value",void 0),Bt([zt],ga.prototype,"orientation",void 0),Bt([wt],ga.prototype,"childItems",void 0),Bt([wt],ga.prototype,"slottedRadioButtons",void 0);const ba=class extends ga{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}.compose({baseName:"radio-group",template:(e,t)=>wn`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===Es?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Ei({property:"slottedRadioButtons",filter:Ti("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>_n`
	${Tn("flex")} :host {
		align-items: flex-start;
		margin: calc(${Qn} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${or};
		font-size: ${ir};
		margin: calc(${Qn} * 1px) 0;
	}
`});const va=class extends Vo{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}.compose({baseName:"tag",template:Cn,styles:(e,t)=>_n`
	${Tn("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${tr};
		font-size: ${ar};
		line-height: ${lr};
	}
	.control {
		background-color: ${fr};
		border: calc(${Kn} * 1px) solid ${gr};
		border-radius: ${qr};
		color: ${mr};
		padding: calc(${Qn} * 0.5px) calc(${Qn} * 1px);
		text-transform: uppercase;
	}
`});class ya extends zo{}class wa extends(yi(ya)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Ca="text";class xa extends wa{constructor(){super(...arguments),this.type=Ca}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&gt.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}Bt([zt({attribute:"readonly",mode:"boolean"})],xa.prototype,"readOnly",void 0),Bt([zt({mode:"boolean"})],xa.prototype,"autofocus",void 0),Bt([zt],xa.prototype,"placeholder",void 0),Bt([zt],xa.prototype,"type",void 0),Bt([zt],xa.prototype,"list",void 0),Bt([zt({converter:At})],xa.prototype,"maxlength",void 0),Bt([zt({converter:At})],xa.prototype,"minlength",void 0),Bt([zt],xa.prototype,"pattern",void 0),Bt([zt({converter:At})],xa.prototype,"size",void 0),Bt([zt({mode:"boolean"})],xa.prototype,"spellcheck",void 0),Bt([wt],xa.prototype,"defaultSlottedNodes",void 0);class Sa{}oi(Sa,Yr),oi(xa,Jr,Sa);class _a extends zo{}class Ta extends(yi(_a)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const Ra="none";class ka extends Ta{constructor(){super(...arguments),this.resize=Ra,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}Bt([zt({mode:"boolean"})],ka.prototype,"readOnly",void 0),Bt([zt],ka.prototype,"resize",void 0),Bt([zt({mode:"boolean"})],ka.prototype,"autofocus",void 0),Bt([zt({attribute:"form"})],ka.prototype,"formId",void 0),Bt([zt],ka.prototype,"list",void 0),Bt([zt({converter:At})],ka.prototype,"maxlength",void 0),Bt([zt({converter:At})],ka.prototype,"minlength",void 0),Bt([zt],ka.prototype,"name",void 0),Bt([zt],ka.prototype,"placeholder",void 0),Bt([zt({converter:At,mode:"fromView"})],ka.prototype,"cols",void 0),Bt([zt({converter:At,mode:"fromView"})],ka.prototype,"rows",void 0),Bt([zt({mode:"boolean"})],ka.prototype,"spellcheck",void 0),Bt([wt],ka.prototype,"defaultSlottedNodes",void 0),oi(ka,Sa);const Ea=class extends ka{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}.compose({baseName:"text-area",template:(e,t)=>wn`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==Ra?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ei("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,t)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${Qr("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>_n`
	${Tn("inline-block")} :host {
		font-family: ${tr};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Fr};
		background: ${Gr};
		border-radius: calc(${Xn} * 1px);
		border: calc(${Kn} * 1px) solid ${Hr};
		font: inherit;
		font-size: ${ir};
		line-height: ${sr};
		padding: calc(${Qn} * 2px + 1px);
		width: 100%;
		min-width: ${rr};
		resize: none;
	}
	.control:hover:enabled {
		background: ${Gr};
		border-color: ${Hr};
	}
	.control:active:enabled {
		background: ${Gr};
		border-color: ${er};
	}
	.control:hover,
	.control:${Mi},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${cr};
		height: ${dr};
	}
	.control::-webkit-scrollbar-corner {
		background: ${Gr};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${hr};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${ur};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${pr};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${er};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${or};
		cursor: pointer;
		font-size: ${ir};
		line-height: ${sr};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Di};
	}
	:host([disabled]) {
		opacity: ${Jn};
	}
	:host([disabled]) .control {
		border-color: ${Hr};
	}
`,shadowOptions:{delegatesFocus:!0}});function Oa(e,t,o){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}const Ia=class extends xa{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}.compose({baseName:"text-field",template:(e,t)=>wn`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Ei({property:"defaultSlottedNodes",filter:Oa})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${ti(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Qr("control")}
            />
            ${ei(0,t)}
        </div>
    </template>
`,styles:(e,t)=>_n`
	${Tn("inline-block")} :host {
		font-family: ${tr};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Fr};
		background: ${Gr};
		border-radius: calc(${Xn} * 1px);
		border: calc(${Kn} * 1px) solid ${Hr};
		height: calc(${nr} * 1px);
		min-width: ${rr};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${Qn} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${Qn} * 2px + 1px);
		font-size: ${ir};
		line-height: ${sr};
	}
	.control:hover,
	.control:${Mi},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${or};
		cursor: pointer;
		font-size: ${ir};
		line-height: ${sr};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Qn} * 4px);
		height: calc(${Qn} * 4px);
	}
	.start {
		margin-inline-start: calc(${Qn} * 2px);
	}
	.end {
		margin-inline-end: calc(${Qn} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${Gr};
		border-color: ${Hr};
	}
	:host(:active:not([disabled])) .root {
		background: ${Gr};
		border-color: ${er};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${er};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Di};
	}
	:host([disabled]) {
		opacity: ${Jn};
	}
	:host([disabled]) .control {
		border-color: ${Hr};
	}
`,shadowOptions:{delegatesFocus:!0}}),Ma=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Da=new Map,$a=new Map;let Na=null;const Aa=ro.createInterface((e=>e.cachedCallback((e=>(null===Na&&(Na=new za(null,e)),Na))))),Pa=Object.freeze({tagFor:e=>$a.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return ro.findResponsibleContainer(e).get(Aa)},getOrCreate(e){if(!e)return null===Na&&(Na=ro.getOrCreateDOMContainer().get(Aa)),Na;const t=e.$$designSystem$$;if(t)return t;const o=ro.getOrCreateDOMContainer(e);if(o.has(Aa,!1))return o.get(Aa);{const t=new za(e,o);return o.register(To.instance(Aa,t)),t}}});class za{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Ma.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,o=[],n=this.disambiguate,r=this.shadowRootMode,i={elementPrefix:this.prefix,tryDefineElement(e,i,s){const a=function(e,t,o){return"string"==typeof e?{name:e,type:t,callback:o}:e}(e,i,s),{name:l,callback:c,baseClass:d}=a;let{type:h}=a,u=l,p=Da.get(u),f=!0;for(;p;){const e=n(u,h,p);switch(e){case Ma.ignoreDuplicate:return;case Ma.definitionCallbackOnly:f=!1,p=void 0;break;default:u=e,p=Da.get(u)}}f&&(($a.has(h)||h===zo)&&(h=class extends h{}),Da.set(u,h),$a.set(h,u),d&&$a.set(d,u)),o.push(new Ha(t,u,h,r,c,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&Wn.registerRoot(this.designTokenRoot)),t.registerWithContext(i,...e);for(const e of o)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class Ha{constructor(e,t,o,n,r,i){this.container=e,this.name=t,this.type=o,this.shadowRootMode=n,this.callback=r,this.willDefine=i,this.definition=null}definePresentation(e){Ao.define(this.name,e,this.container)}defineElement(e){this.definition=new Ft(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Pa.tagFor(e)}}const{wrap:La}=function(e,t){let o=[];const n={register(e,...t){o.forEach((o=>o.register(e,...t))),o=[]}};return{wrap:function(n,r={}){var i,s;n instanceof Lo&&(t?t.register(n):o.push(n),n=n.type);const a=Wo.get(n);if(a){const e=a.get(null!==(i=r.name)&&void 0!==i?i:Bo);if(e)return e}class l extends e.Component{constructor(){super(...arguments),this._element=null}_updateElement(e){const t=this._element;if(null===t)return;const o=this.props,n=e||Fo,i=Uo(r);for(const e in this._elementProps){const r=o[e],s=i[e];if(void 0===s)t[e]=r;else{const o=n[e];if(r===o)continue;void 0!==o&&t.removeEventListener(s,o),void 0!==r&&t.addEventListener(s,r)}}}componentDidMount(){this._updateElement()}componentDidUpdate(e){this._updateElement(e)}render(){const t=this.props.__forwardedRef;void 0!==this._ref&&this._userRef===t||(this._ref=e=>{null===this._element&&(this._element=e),null!==t&&function(e,t){"function"==typeof e?e(t):e.current=t}(t,e),this._userRef=t});const o={ref:this._ref},i=this._elementProps={},s=function(e,t){if(!t.keys)if(t.properties)t.keys=new Set(t.properties.concat(Object.keys(Uo(t))));else{const o=new Set(Object.keys(Uo(t))),n=yt.getAccessors(e.prototype);if(n.length>0)for(const e of n)jo(0,0,e.name)&&o.add(e.name);else for(const t in e.prototype)!(t in HTMLElement.prototype)&&jo(0,0,t)&&o.add(t);t.keys=o}return t.keys}(n,r),a=this.props;for(const e in a){const t=a[e];s.has(e)?i[e]=t:o["className"===e?"class":e]=t}return e.createElement(function(e,t){if(!t.name){const o=Ft.forType(e);if(!o)throw new Error("React wrappers must wrap a FASTElement or be configured with a name.");t.name=o.name}return t.name}(n,r),o)}}const c=e.forwardRef(((t,o)=>e.createElement(l,Object.assign(Object.assign({},t),{__forwardedRef:o}),null==t?void 0:t.children)));return Wo.has(n)||Wo.set(n,new Map),Wo.get(n).set(null!==(s=r.name)&&void 0!==s?s:Bo,c),c},registry:n}}(e,Pa.getOrCreate(Ga).withPrefix("vscode"));var Ga;La(Kr(),{name:"vscode-badge"}),La(Hi(),{name:"vscode-button"});const Fa=La(Bi(),{name:"vscode-checkbox",events:{onChange:"change"}}),Ba=(La(Ts(),{name:"vscode-data-grid"}),La(ks(),{name:"vscode-data-grid-cell"}),La(Rs(),{name:"vscode-data-grid-row"}),La(Ms(),{name:"vscode-divider"}),La(Xs(),{name:"vscode-dropdown",events:{onChange:"change"}}),La(ea(),{name:"vscode-link"}),La(ta(),{name:"vscode-option"}),La(sa(),{name:"vscode-panels",events:{onChange:"change"}}),La(aa(),{name:"vscode-panel-tab"}),La(la(),{name:"vscode-panel-view"}),La(da(),{name:"vscode-progress-ring"}),La(fa(),{name:"vscode-radio",events:{onChange:"change"}})),Wa=La(ba(),{name:"vscode-radio-group",events:{onChange:"change"}}),Ua=(La(va(),{name:"vscode-tag"}),La(Ea(),{name:"vscode-text-area",events:{onChange:"change",onInput:"input"}}),La(Ia(),{name:"vscode-text-field",events:{onChange:"change",onInput:"input"}}),navigator?.userAgentData?.platform),ja=navigator.userAgent,Va="Linux"===Ua||ja.indexOf("Linux")>=0,Za="macOS"===Ua||ja.indexOf("Macintosh")>=0,qa="Windows"===Ua||ja.indexOf("Windows")>=0;function Ka(e,t,o){return`command:${e}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:o}))}`}const Ya=new Set(["children","localName","ref","style","className"]),Xa=new WeakMap,Qa=(e,t,o,n,r)=>{const i=r?.[t];void 0===i||o===n?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):((e,t,o)=>{let n=Xa.get(e);void 0===n&&Xa.set(e,n=new Map);let r=n.get(t);void 0!==o?void 0===r?(n.set(t,r={handleEvent:o}),e.addEventListener(t,r)):r.handleEvent=o:void 0!==r&&(n.delete(t),e.removeEventListener(t,r))})(e,i,o)};function Ja(e,o){return(({react:e,tagName:t,elementClass:o,events:n,displayName:r})=>{const i=new Set(Object.keys(n??{})),s=e.forwardRef(((r,s)=>{const a=e.useRef(null),l=e.useRef(null),c={},d={};for(const[e,t]of Object.entries(r))Ya.has(e)?c["className"===e?"class":e]=t:i.has(e)||e in o.prototype?d[e]=t:c[e]=t;return e.useLayoutEffect((()=>{if(null!==l.current){for(const e in d)Qa(l.current,e,r[e],a.current?a.current[e]:void 0,n);a.current=r}})),e.useLayoutEffect((()=>{l.current?.removeAttribute("defer-hydration")}),[]),c.suppressHydrationWarning=!0,e.createElement(t,{...c,ref:e.useCallback((e=>{l.current=e,"function"==typeof s?s(e):null!==s&&(s.current=e)}),[s])})}));return s.displayName=r??o.name,s})({...o,elementClass:e,react:t()})}const el=_n`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;var tl=Object.defineProperty,ol=Object.getOwnPropertyDescriptor;const nl=wn`
	<template role="listbox">
		<slot></slot>
	</template>
`,rl=_n`
	${el}

	:host {
		width: max-content;
		background-color: var(--vscode-menu-background);
		border: 1px solid var(--vscode-menu-border);
	}
`;let il=class extends qt{};il=((e,t,o,n)=>{for(var r,i=n>1?void 0:n?ol(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&tl(t,o,i),i})([Kt({name:"menu-list",template:nl,styles:rl})],il);var sl=Object.defineProperty,al=Object.getOwnPropertyDescriptor,ll=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?al(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&sl(t,o,i),i};const cl=wn`
	<template tabindex="${e=>e.isInteractive?"0":null}" ?disabled="${e=>e.disabled}">
		<slot></slot>
	</template>
`,dl=_n`
	${el}

	:host {
		display: block;
		font-family: inherit;
		border: none;
		padding: 0 0.6rem;
		cursor: pointer;
		color: var(--vscode-menu-foreground);
		background-color: var(--vscode-menu-background);
		text-align: left;
		height: auto;
		line-height: 2.2rem;
	}

	:host([role='option']:hover) {
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-selectionBackground);
	}

	:host([disabled]) {
		pointer-events: none;
		cursor: default;
		opacity: 0.5;
	}

	:host([aria-selected='true']) {
		opacity: 1;
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-background);
	}
`;let hl=class extends qt{constructor(){super(...arguments),this.disabled=!1,this.role="option"}get isInteractive(){return!this.disabled&&"option"===this.role}};ll([zt({mode:"boolean"})],hl.prototype,"disabled",2),ll([zt],hl.prototype,"role",2),ll([Ct],hl.prototype,"isInteractive",1),hl=ll([Kt({name:"menu-item",template:cl,styles:dl})],hl);var ul=Object.defineProperty,pl=Object.getOwnPropertyDescriptor;const fl=wn`
	<template>
		<slot></slot>
	</template>
`,ml=_n`
	${el}

	:host {
		display: block;
		text-transform: uppercase;
		font-size: 0.84em;
		line-height: 2.2rem;
		padding-left: 0.6rem;
		padding-right: 0.6rem;
		margin: 0px;
		color: var(--vscode-menu-foreground);
		opacity: 0.6;
		user-select: none;
	}
`;let gl=class extends qt{};gl=((e,t,o,n)=>{for(var r,i=n>1?void 0:n?pl(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&ul(t,o,i),i})([Kt({name:"menu-label",template:fl,styles:ml})],gl);var bl=Object.defineProperty,vl=Object.getOwnPropertyDescriptor;const yl=wn``,wl=_n`
	${el}

	:host {
		display: block;
		height: 0;
		margin: 0.6rem;
		border-top: 0.1rem solid var(--vscode-menu-separatorBackground);
	}
`;let Cl=class extends qt{};Cl=((e,t,o,n)=>{for(var r,i=n>1?void 0:n?vl(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&bl(t,o,i),i})([Kt({name:"menu-divider",template:yl,styles:wl})],Cl);const xl=Ja(Cl,{tagName:"menu-divider"}),Sl=Ja(hl,{tagName:"menu-item"}),_l=Ja(gl,{tagName:"menu-label"}),Tl=Ja(il,{tagName:"menu-list"});function Rl(...e){return e.some((e=>(e?.length??0)>0))}function kl(e){return t=>t.nodeType===e}var El=Object.defineProperty,Ol=Object.getOwnPropertyDescriptor,Il=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?Ol(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&El(t,o,i),i};const Ml=wn`
	<template role="combobox">
		<slot ${Ei({property:"triggerNodes",filter:kl(Node.ELEMENT_NODE)})} name="trigger"></slot>
		<slot ${Ei({property:"contentNodes",filter:kl(Node.ELEMENT_NODE)})} name="content"></slot>
	</template>
`,Dl=_n`
	${el}

	:host {
		position: relative;
	}

	slot[name='content']::slotted(*)::before {
		font: normal normal normal 14px/1 codicon;
		display: inline-block;
		text-decoration: none;
		text-rendering: auto;
		text-align: center;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;

		vertical-align: middle;
		line-height: 2rem;
		letter-spacing: normal;
		content: '\\ea76';
		position: absolute;
		top: 2px;
		right: 5px;
		cursor: pointer;
		pointer-events: all;
		z-index: 10001;
	}

	slot[name='content']::slotted(*) {
		position: absolute;
		top: 100%;
		z-index: 10000;
	}

	:host([position='left']) slot[name='content']::slotted(*) {
		left: 0;
	}

	:host([position='right']) slot[name='content']::slotted(*) {
		right: 0;
	}

	:host(:not([open])) slot[name='content']::slotted(*) {
		display: none;
	}
`;let $l=class extends qt{constructor(){super(...arguments),this.open=!1,this.position="left",this.isTrackingOutside=!1}get triggerNode(){if(Rl(this.triggerNodes))return this.triggerNodes[0]}get contentNode(){if(Rl(this.contentNodes))return this.contentNodes[0]}connectedCallback(){super.connectedCallback(),this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.addEventListener("click",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.removeEventListener("click",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}close(){this.open=!1,this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerNode)&&(this.open=!this.open,this.updateToggle())}updateToggle(){null!=this.triggerNode&&(this.triggerNode.ariaExpanded=this.open.toString()),this.open&&(null!=this.contentNode&&window.requestAnimationFrame((()=>{this.contentNode?.focus()})),this.trackOutside())}handleDocumentEvent(e){if(!1===this.open)return;const t=e.composedPath();(!t.includes(this)||"click"===e.type&&'""'===window.getComputedStyle(t[0],"::before").content)&&this.close()}trackOutside(){!this.isTrackingOutside&&this.open&&(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1),null==this._webviewBlurEventHandler&&(this._webviewBlurEventHandler=()=>this.close()),window.addEventListener("webview-blur",this._webviewBlurEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0),null!=this._webviewBlurEventHandler&&(window.removeEventListener("webview-blur",this._webviewBlurEventHandler,!1),this._webviewBlurEventHandler=void 0))}};Il([zt({mode:"boolean"})],$l.prototype,"open",2),Il([zt()],$l.prototype,"position",2),Il([wt],$l.prototype,"triggerNodes",2),Il([wt],$l.prototype,"contentNodes",2),Il([Ct],$l.prototype,"triggerNode",1),Il([Ct],$l.prototype,"contentNode",1),$l=Il([Kt({name:"pop-menu",template:Ml,styles:Dl})],$l);const Nl=Ja($l,{tagName:"pop-menu"});var Al=Object.defineProperty,Pl=Object.getOwnPropertyDescriptor,zl=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?Pl(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&Al(t,o,i),i};const Hl=wn`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${Ei("typeNodes")} name="type"></slot>
			<slot ${Ei("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${Ei("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${Ys((e=>e.caret),wn`<span class="caret"></span>`)}
	</template>
`,Ll=_n`
	${el}

	:host {
		position: absolute;
		width: var(--popover-width, 100%);
		max-width: var(--popover-max-width, 30rem);
		padding: 1.2rem 1.2rem 1.2rem;
		/* update with a standardized z-index */
		z-index: 10;

		background-color: var(--popover-bg);
		box-shadow: 0 0.3rem 0.3rem 0 var(--vscode-widget-shadow);

		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	:host([caret]:not([placement~='bottom'])) {
		transform: translateY(0.8rem);
	}

	:host([caret][placement~='bottom']) {
		transform: translateY(-0.8rem);
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.5;
		margin-top: -0.4rem;
	}

	.heading {
		font-weight: 600;
	}

	.caret {
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.8rem solid transparent;
		border-right: 0.8rem solid transparent;
		border-bottom: 0.8rem solid var(--popover-bg);
	}

	:host(:not([placement~='bottom'])) .caret {
		bottom: 100%;
	}

	:host([placement~='bottom']) .caret {
		top: 100%;
		transform: rotate(180deg);
	}

	:host(:not([placement~='end'])) .caret {
		left: 1.2rem;
	}

	:host([placement~='end']) .caret {
		right: 1.2rem;
	}
`;let Gl=class extends qt{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return Rl(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return Rl(this.headingNodes)}};zl([zt({mode:"boolean"})],Gl.prototype,"open",2),zl([zt({mode:"boolean"})],Gl.prototype,"caret",2),zl([zt],Gl.prototype,"placement",2),zl([wt],Gl.prototype,"typeNodes",2),zl([wt],Gl.prototype,"actionsNodes",2),zl([wt],Gl.prototype,"headingNodes",2),zl([Ct],Gl.prototype,"hasTopNodes",1),zl([Ct],Gl.prototype,"hasHeadingNodes",1),Gl=zl([Kt({name:"pop-over",template:Hl,styles:Ll})],Gl);const Fl=Ja(Gl,{tagName:"pop-over"}),Bl=globalThis,Wl=Bl.ShadowRoot&&(void 0===Bl.ShadyCSS||Bl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ul=Symbol(),jl=new WeakMap;class Vl{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ul)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Wl&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=jl.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&jl.set(t,e))}return e}toString(){return this.cssText}}const Zl=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new Vl(o,e,Ul)},ql=Wl?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new Vl("string"==typeof e?e:e+"",void 0,Ul))(t)})(e):e,{is:Kl,defineProperty:Yl,getOwnPropertyDescriptor:Xl,getOwnPropertyNames:Ql,getOwnPropertySymbols:Jl,getPrototypeOf:ec}=Object,tc=globalThis,oc=tc.trustedTypes,nc=oc?oc.emptyScript:"",rc=tc.reactiveElementPolyfillSupport,ic=(e,t)=>e,sc={toAttribute(e,t){switch(t){case Boolean:e=e?nc:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},ac=(e,t)=>!Kl(e,t),lc={attribute:!0,type:String,converter:sc,reflect:!1,hasChanged:ac};Symbol.metadata??=Symbol("metadata"),tc.litPropertyMetadata??=new WeakMap;class cc extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=lc){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Yl(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){const{get:n,set:r}=Xl(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const i=n?.call(this);r.call(this,t),this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??lc}static _$Ei(){if(this.hasOwnProperty(ic("elementProperties")))return;const e=ec(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ic("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ic("properties"))){const e=this.properties,t=[...Ql(e),...Jl(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(ql(e))}else void 0!==e&&t.push(ql(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Wl)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of t){const t=document.createElement("style"),n=Bl.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:sc).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:sc;this._$Em=n,this[n]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,n=!1,r){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??ac)(n?r:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}cc.elementStyles=[],cc.shadowRootOptions={mode:"open"},cc[ic("elementProperties")]=new Map,cc[ic("finalized")]=new Map,rc?.({ReactiveElement:cc}),(tc.reactiveElementVersions??=[]).push("2.0.2");const dc=globalThis,hc=dc.trustedTypes,uc=hc?hc.createPolicy("lit-html",{createHTML:e=>e}):void 0,pc="$lit$",fc=`lit$${(Math.random()+"").slice(9)}$`,mc="?"+fc,gc=`<${mc}>`,bc=document,vc=()=>bc.createComment(""),yc=e=>null===e||"object"!=typeof e&&"function"!=typeof e,wc=Array.isArray,Cc=e=>wc(e)||"function"==typeof e?.[Symbol.iterator],xc="[ \t\n\f\r]",Sc=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_c=/-->/g,Tc=/>/g,Rc=RegExp(`>|${xc}(?:([^\\s"'>=/]+)(${xc}*=${xc}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),kc=/'/g,Ec=/"/g,Oc=/^(?:script|style|textarea|title)$/i,Ic=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Mc=Ic(1),Dc=(Ic(2),Symbol.for("lit-noChange")),$c=Symbol.for("lit-nothing"),Nc=new WeakMap,Ac=bc.createTreeWalker(bc,129);function Pc(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==uc?uc.createHTML(t):t}const zc=(e,t)=>{const o=e.length-1,n=[];let r,i=2===t?"<svg>":"",s=Sc;for(let t=0;t<o;t++){const o=e[t];let a,l,c=-1,d=0;for(;d<o.length&&(s.lastIndex=d,l=s.exec(o),null!==l);)d=s.lastIndex,s===Sc?"!--"===l[1]?s=_c:void 0!==l[1]?s=Tc:void 0!==l[2]?(Oc.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=Rc):void 0!==l[3]&&(s=Rc):s===Rc?">"===l[0]?(s=r??Sc,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?Rc:'"'===l[3]?Ec:kc):s===Ec||s===kc?s=Rc:s===_c||s===Tc?s=Sc:(s=Rc,r=void 0);const h=s===Rc&&e[t+1].startsWith("/>")?" ":"";i+=s===Sc?o+gc:c>=0?(n.push(a),o.slice(0,c)+pc+o.slice(c)+fc+h):o+fc+(-2===c?t:h)}return[Pc(e,i+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class Hc{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let r=0,i=0;const s=e.length-1,a=this.parts,[l,c]=zc(e,t);if(this.el=Hc.createElement(l,o),Ac.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Ac.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(pc)){const t=c[i++],o=n.getAttribute(e).split(fc),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:r,name:s[2],strings:o,ctor:"."===s[1]?Wc:"?"===s[1]?Uc:"@"===s[1]?jc:Bc}),n.removeAttribute(e)}else e.startsWith(fc)&&(a.push({type:6,index:r}),n.removeAttribute(e));if(Oc.test(n.tagName)){const e=n.textContent.split(fc),t=e.length-1;if(t>0){n.textContent=hc?hc.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],vc()),Ac.nextNode(),a.push({type:2,index:++r});n.append(e[t],vc())}}}else if(8===n.nodeType)if(n.data===mc)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(fc,e+1));)a.push({type:7,index:r}),e+=fc.length-1}r++}}static createElement(e,t){const o=bc.createElement("template");return o.innerHTML=e,o}}function Lc(e,t,o=e,n){if(t===Dc)return t;let r=void 0!==n?o._$Co?.[n]:o._$Cl;const i=yc(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(e),r._$AT(e,o,n)),void 0!==n?(o._$Co??=[])[n]=r:o._$Cl=r),void 0!==r&&(t=Lc(e,r._$AS(e,t.values),r,n)),t}class Gc{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??bc).importNode(t,!0);Ac.currentNode=n;let r=Ac.nextNode(),i=0,s=0,a=o[0];for(;void 0!==a;){if(i===a.index){let t;2===a.type?t=new Fc(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new Vc(r,this,e)),this._$AV.push(t),a=o[++s]}i!==a?.index&&(r=Ac.nextNode(),i++)}return Ac.currentNode=bc,n}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Fc{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=$c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Lc(this,e,t),yc(e)?e===$c||null==e||""===e?(this._$AH!==$c&&this._$AR(),this._$AH=$c):e!==this._$AH&&e!==Dc&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Cc(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$c&&yc(this._$AH)?this._$AA.nextSibling.data=e:this.$(bc.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,n="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=Hc.createElement(Pc(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new Gc(n,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=Nc.get(e.strings);return void 0===t&&Nc.set(e.strings,t=new Hc(e)),t}T(e){wc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const r of e)n===t.length?t.push(o=new Fc(this.k(vc()),this.k(vc()),this,this.options)):o=t[n],o._$AI(r),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Bc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,r){this.type=1,this._$AH=$c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=$c}_$AI(e,t=this,o,n){const r=this.strings;let i=!1;if(void 0===r)e=Lc(this,e,t,0),i=!yc(e)||e!==this._$AH&&e!==Dc,i&&(this._$AH=e);else{const n=e;let s,a;for(e=r[0],s=0;s<r.length-1;s++)a=Lc(this,n[o+s],t,s),a===Dc&&(a=this._$AH[s]),i||=!yc(a)||a!==this._$AH[s],a===$c?e=$c:e!==$c&&(e+=(a??"")+r[s+1]),this._$AH[s]=a}i&&!n&&this.O(e)}O(e){e===$c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Wc extends Bc{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===$c?void 0:e}}class Uc extends Bc{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==$c)}}class jc extends Bc{constructor(e,t,o,n,r){super(e,t,o,n,r),this.type=5}_$AI(e,t=this){if((e=Lc(this,e,t,0)??$c)===Dc)return;const o=this._$AH,n=e===$c&&o!==$c||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==$c&&(o===$c||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Vc{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Lc(this,e)}}const Zc=dc.litHtmlPolyfillSupport;Zc?.(Hc,Fc),(dc.litHtmlVersions??=[]).push("3.1.0");class qc extends cc{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const n=o?.renderBefore??t;let r=n._$litPart$;if(void 0===r){const e=o?.renderBefore??null;n._$litPart$=r=new Fc(t.insertBefore(vc(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Dc}}qc._$litElement$=!0,qc.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:qc});const Kc=globalThis.litElementPolyfillSupport;Kc?.({LitElement:qc});(globalThis.litElementVersions??=[]).push("4.0.2");const Yc=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},Xc={attribute:!0,type:String,converter:sc,reflect:!1,hasChanged:ac},Qc=(e=Xc,t,o)=>{const{kind:n,metadata:r}=o;let i=globalThis.litPropertyMetadata.get(r);if(void 0===i&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(o.name,e),"accessor"===n){const{name:n}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(n,r,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=o;return function(o){const r=this[n];t.call(this,o),this.requestUpdate(n,r,e)}}throw Error("Unsupported decorator location: "+n)};function Jc(e){return(t,o)=>"object"==typeof o?Qc(e,t,o):((e,t,o)=>{const n=t.hasOwnProperty(o);return t.constructor.createProperty(o,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}const ed=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,td=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,od=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let nd;const rd=new Map;let id,sd,ad;const ld=new Map;function cd(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,r,i]of od){const s=Math.abs(o);if(s>=n||1e3===n){if(t){if(null==nd&&(null!=ad?nd=ad.resolvedOptions().locale:null!=sd?nd=sd.resolvedOptions().locale:(ad=new Intl.RelativeTimeFormat(id,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),nd=ad.resolvedOptions().locale)),"en"===nd||nd?.startsWith("en-")){return`${Math.round(s/r)}${i}`}return null==ad&&(ad=new Intl.RelativeTimeFormat(id,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),ad.format(Math.round(o/r),e)}return null==sd&&(sd=new Intl.RelativeTimeFormat(id,{localeMatcher:"best fit",numeric:"auto",style:"long"})),sd.format(Math.round(o/r),e)}}return""}function dd(e,t,o,n=!0){const r=`${o??""}:${t=t??void 0}`;let i=rd.get(r);if(null==i){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=td.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(ed))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let s;s=null==o?id:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(s,e),n&&rd.set(r,i)}if(null==t||td.test(t))return i.format(e);function s(e){const t=`${o??""}:time:${e}`;let r=rd.get(t);if(null==r){const i={localeMatcher:"best fit",timeStyle:e};let s;s=null==o?id:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(s,i),n&&rd.set(t,r)}return r}const a=i.formatToParts(e);return t.replace(ed,((t,o,n,r,i,l,c,d,h,u,p,f,m,g,b)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in b){const o=b[t];if(null==o)continue;const n=a.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return ud(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=s("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??n)?.value??""}`}return n?.value??""}return""}))}const hd=["th","st","nd","rd"];function ud(e){const t=e%100;return`${e}${hd[(t-20)%10]??hd[t]??hd[0]}`}function pd(e,t,o){null==t&&(t="decimal");const n=`${o??""}:${t}`;let r=ld.get(n);if(null==r){const e={localeMatcher:"best fit",style:t};let i;i=null==o?id:"system"===o?void 0:[o],r=new Intl.NumberFormat(i,e),ld.set(n,r)}return r.format(e)}var fd=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.Paid=5]="Paid",e))(fd||{});function md(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function gd(e,t){return bd(e.plan.effective.expiresOn,t)}function bd(e,t){return null!=e?function(e,t,o){const n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(o){case"days":return Math.floor(n/864e5);case"hours":return Math.floor(n/36e5);case"minutes":return Math.floor(n/6e4);case"seconds":return Math.floor(n/1e3);default:return n}}(Date.now(),new Date(e),t):void 0}function vd(e){return null!=e&&(5===e||1===e||3===e)}function yd(e){return null!=e&&(1===e||3===e)}const wd=Zl`
	a {
		color: var(--link-foreground);
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`,Cd=(Zl`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`,Zl`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`),xd=Zl`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;Zl`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Cd}
	}
	a:hover {
		text-decoration: underline;
	}
`,Zl`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}
`;var Sd=Object.defineProperty,_d=Object.getOwnPropertyDescriptor,Td=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?_d(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&Sd(t,o,i),i};let Rd=class extends qc{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(e){super.updated(e),e.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){const e=Mc`<slot></slot>`;return null!=this.href?Mc`<a href=${this.href}>${e}</a>`:e}};Rd.styles=[xd,Zl`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem 1.1rem;
				--button-compact-padding: 0.4rem 0.4rem;
				--button-line-height: 1.694;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius);
			}

			:host(:not([href])) {
				padding: var(--button-padding);
			}

			:host([href]) > a {
				display: inline-block;
				padding: var(--button-padding);

				color: inherit;
				text-decoration: none;

				width: 100%;
				height: 100%;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus) {
				${Cd}
			}

			:host([full]) {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-padding: 0.4rem;
				--button-line-height: 1.6;
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) {
				padding: var(--button-compact-padding);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}
		`],Td([Jc({type:Boolean,reflect:!0})],Rd.prototype,"full",2),Td([Jc({type:Boolean,reflect:!0})],Rd.prototype,"disabled",2),Td([Jc({reflect:!0})],Rd.prototype,"density",2),Td([Jc()],Rd.prototype,"href",2),Td([Jc({reflect:!0})],Rd.prototype,"role",1),Td([Jc()],Rd.prototype,"appearance",2),Td([Jc({type:Number,reflect:!0})],Rd.prototype,"tabIndex",2),Rd=Td([Yc("gl-button")],Rd);var kd=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,Od=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?Ed(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&kd(t,o,i),i};let Id=class extends qc{render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":$c,t=Date.now()<new Date("2023-12-06T07:59:00.000Z").getTime();switch(this.state){case fd.VerificationRequired:return Mc`
					<p>You must verify your email before you can continue.</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.resendVerification"
						>Resend verification email</gl-button
					>
					<gl-button appearance="${e}" href="command:gitlens.plus.validate"
						>Refresh verification status</gl-button
					>
				`;case fd.Free:return Mc`
					<gl-button appearance="${e}" href="command:gitlens.plus.startPreviewTrial"
						>Preview Now</gl-button
					>
					<p>
						Preview Pro for 3 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a> to start a full 7-day GitKraken trial.
					</p>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case fd.FreePreviewTrialExpired:return Mc`
					<p>
						Your 3-day Pro preview has ended, start a free GitKraken trial to get an additional 7 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a>.
					</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.loginOrSignUp"
						>Start Free GitKraken Trial</gl-button
					>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case fd.FreePlusTrialExpired:return Mc`
					<p>
						Your GitKraken trial has ended, please upgrade to continue to use this on privately hosted
						repos.
					</p>
					${function(e,t,o){return e?t(e):o?.(e)}(t,(()=>Mc`<p style="text-align: center;">
								<a
									href=${"https://www.gitkraken.com/cw23?utm_source=cyber_week&utm_medium=gitlens_banner&utm_campaign=cyber_week_2023"}
									>Cyber Week Sale: <b>50% off first seat of Pro</b> — only $4/month!<br />
									Includes entire GitKraken suite of dev tools.</a
								>
							</p>`),(()=>Mc`<p style="text-align: center;">
								Special: <b>50% off first seat of Pro</b> — only $4/month!<br />
								Includes entire GitKraken suite of dev tools.
							</p>`))}
					<gl-button appearance="${e}" href="command:gitlens.plus.purchase"
						>Upgrade to Pro</gl-button
					>
					<p>✨ A paid plan is required to use this on privately hosted repos.</p>
				`}}};Id.styles=[wd,Zl`
			:host {
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}
		`],Od([Jc({type:String})],Id.prototype,"appearance",2),Od([Jc({attribute:!1,type:Number})],Id.prototype,"state",2),Id=Od([Yc("gk-feature-gate-plus-state")],Id);var Md=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,$d=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?Dd(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&Md(t,o,i),i};let Nd=class extends qc{render(){if(!this.visible||null!=this.state&&vd(this.state))return void(this.hidden=!0);const e=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,Mc`
			<section>
				<slot>
					<slot name="feature" hidden=${this.state===fd.Free?$c:""}></slot>
				</slot>
				<gk-feature-gate-plus-state appearance=${e} .state=${this.state}></gk-feature-gate-plus-state>
			</section>
		`}};Nd.styles=Zl`
		:host {
			--background: var(--vscode-sideBar-background);
			--foreground: var(--vscode-sideBar-foreground);
			--link-foreground: var(--vscode-textLink-foreground);
			--link-foreground-active: var(--vscode-textLink-activeForeground);

			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			overflow: auto;
			z-index: 100;

			box-sizing: border-box;
		}

		:host-context(body[data-placement='editor']),
		:host([appearance='alert']) {
			--background: transparent;
			--foreground: var(--vscode-editor-foreground);

			backdrop-filter: blur(3px) saturate(0.8);
			padding: 0 2rem;
		}

		::slotted(p) {
			margin: revert !important;
		}

		::slotted(p:first-child) {
			margin-top: 0 !important;
		}

		section {
			--section-foreground: var(--foreground);
			--section-background: var(--background);
			--section-border-color: transparent;

			display: flex;
			flex-direction: column;
			padding: 0 2rem 1.3rem 2rem;
			background: var(--section-background);
			color: var(--section-foreground);
			border: 1px solid var(--section-border-color);

			height: min-content;
		}

		:host-context(body[data-placement='editor']) section,
		:host([appearance='alert']) section {
			--section-foreground: var(--color-alert-foreground);
			--section-background: var(--color-alert-infoBackground);
			--section-border-color: var(--color-alert-infoBorder);

			--link-decoration-default: underline;
			--link-foreground: var(--vscode-foreground);
			--link-foreground-active: var(--vscode-foreground);

			border-radius: 0.3rem;
			max-width: 600px;
			max-height: min-content;
			margin: 0.2rem auto;
			padding: 1.3rem;
		}

		:host-context(body[data-placement='editor']) section ::slotted(gl-button),
		:host([appearance='alert']) section ::slotted(gl-button) {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	`,$d([Jc()],Nd.prototype,"appearance",2),$d([Jc({attribute:!1,type:Number})],Nd.prototype,"state",2),$d([Jc({type:Boolean})],Nd.prototype,"visible",2),Nd=$d([Yc("gk-feature-gate")],Nd);const Ad=Ja(Nd,{tagName:"gk-feature-gate"});var Pd=Object.defineProperty,zd=Object.getOwnPropertyDescriptor,Hd=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?zd(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&Pd(t,o,i),i};let Ld=class extends qc{constructor(){super(...arguments),this.placement="top end"}render(){const e=vd(this.subscription?.state),t=yd(this.subscription?.state);return Mc`
			<span class="badge-container">
				<span class="badge ${e?"active":"inactive"}"
					>${t?Mc`<span class="badge-trial">Trial</span>`:""}✨</span
				>
				<pop-over .placement=${this.placement} class="badge-popover">
					<span slot="heading"
						>${function(e,t){switch(e){case 4:return md("free+");case 1:return`${md("pro")} (Trial)`;case 3:return`${md(t??"pro")} (Trial)`;case-1:return"GitKraken (Unverified)";case 5:return md(t??"pro");default:return"GitKraken"}}(this.subscription?.state,this.subscription?.plan.effective.id)}${this.trialHtml}</span
					>
					${this.footnoteHtml}
				</pop-over>
			</span>
		`}get trialHtml(){if(!yd(this.subscription?.state))return $c;const e=gd(this.subscription,"days")??0;return Mc`<span class="badge-trial-left">${e<1?"<1 day":Ae("day",e)} left</span>`}get footnoteHtml(){switch(this.subscription?.state){case fd.VerificationRequired:case fd.Free:case fd.FreePreviewTrialExpired:return Mc`<span class="badge-footnote"
					>✨ Requires a trial or paid plan for use on privately hosted repos.</span
				>`;case fd.FreePlusTrialExpired:case fd.FreeInPreviewTrial:case fd.FreePlusInTrial:return Mc`<span class="badge-footnote"
					>✨ Requires a paid plan for use on privately hosted repos.</span
				>`;case fd.Paid:return Mc`<span class="badge-footnote"
					>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</span
				>`;default:return $c}}};Ld.styles=[xd,Zl`
			:host {
				position: relative;
			}

			:host(:focus) {
				${Cd}
			}

			.badge-container {
				position: relative;
			}

			.badge {
				cursor: help;
			}

			.badge.inactive {
				filter: grayscale(100%);
			}

			.badge-popover {
				width: max-content;
				top: 100%;
				text-align: left;
			}

			.badge-footnote {
				white-space: break-spaces;
			}

			.badge-trial {
				font-size: smaller;
				font-weight: 700;
				margin-right: 0.5rem;
				text-transform: uppercase;
				white-space: nowrap;
			}

			.badge-trial-left {
				font-weight: 400;
				opacity: 0.6;
				margin-left: 1rem;
			}

			.badge:not(:hover) ~ .badge-popover {
				display: none;
			}

			:host(:not([placement~='end'])) .badge-popover {
				left: 0;
			}

			:host([placement~='end']) .badge-popover {
				right: 0;
			}
		`],Hd([Jc({reflect:!0})],Ld.prototype,"placement",2),Hd([Jc({attribute:!1})],Ld.prototype,"subscription",2),Ld=Hd([Yc("gk-feature-gate-badge")],Ld);const Gd=Ja(Ld,{tagName:"gk-feature-gate-badge"}),Fd={toView:function(e){return e.toString()},fromView:function(e){return parseInt(e,10)}};var Bd=Object.defineProperty,Wd=Object.getOwnPropertyDescriptor,Ud=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?Wd(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&Bd(t,o,i),i};let jd=class extends qc{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};jd.styles=Zl`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: text-bottom;
			letter-spacing: normal;
		}

		:host([icon='add']):before {
			content: '\\ea60';
		}
		:host([icon='plus']):before {
			content: '\\ea60';
		}
		:host([icon='gist-new']):before {
			content: '\\ea60';
		}
		:host([icon='repo-create']):before {
			content: '\\ea60';
		}
		:host([icon='lightbulb']):before {
			content: '\\ea61';
		}
		:host([icon='light-bulb']):before {
			content: '\\ea61';
		}
		:host([icon='repo']):before {
			content: '\\ea62';
		}
		:host([icon='repo-delete']):before {
			content: '\\ea62';
		}
		:host([icon='gist-fork']):before {
			content: '\\ea63';
		}
		:host([icon='repo-forked']):before {
			content: '\\ea63';
		}
		:host([icon='git-pull-request']):before {
			content: '\\ea64';
		}
		:host([icon='git-pull-request-abandoned']):before {
			content: '\\ea64';
		}
		:host([icon='record-keys']):before {
			content: '\\ea65';
		}
		:host([icon='keyboard']):before {
			content: '\\ea65';
		}
		:host([icon='tag']):before {
			content: '\\ea66';
		}
		:host([icon='tag-add']):before {
			content: '\\ea66';
		}
		:host([icon='tag-remove']):before {
			content: '\\ea66';
		}
		:host([icon='person']):before {
			content: '\\ea67';
		}
		:host([icon='person-follow']):before {
			content: '\\ea67';
		}
		:host([icon='person-outline']):before {
			content: '\\ea67';
		}
		:host([icon='person-filled']):before {
			content: '\\ea67';
		}
		:host([icon='git-branch']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-create']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-delete']):before {
			content: '\\ea68';
		}
		:host([icon='source-control']):before {
			content: '\\ea68';
		}
		:host([icon='mirror']):before {
			content: '\\ea69';
		}
		:host([icon='mirror-public']):before {
			content: '\\ea69';
		}
		:host([icon='star']):before {
			content: '\\ea6a';
		}
		:host([icon='star-add']):before {
			content: '\\ea6a';
		}
		:host([icon='star-delete']):before {
			content: '\\ea6a';
		}
		:host([icon='star-empty']):before {
			content: '\\ea6a';
		}
		:host([icon='comment']):before {
			content: '\\ea6b';
		}
		:host([icon='comment-add']):before {
			content: '\\ea6b';
		}
		:host([icon='alert']):before {
			content: '\\ea6c';
		}
		:host([icon='warning']):before {
			content: '\\ea6c';
		}
		:host([icon='search']):before {
			content: '\\ea6d';
		}
		:host([icon='search-save']):before {
			content: '\\ea6d';
		}
		:host([icon='log-out']):before {
			content: '\\ea6e';
		}
		:host([icon='sign-out']):before {
			content: '\\ea6e';
		}
		:host([icon='log-in']):before {
			content: '\\ea6f';
		}
		:host([icon='sign-in']):before {
			content: '\\ea6f';
		}
		:host([icon='eye']):before {
			content: '\\ea70';
		}
		:host([icon='eye-unwatch']):before {
			content: '\\ea70';
		}
		:host([icon='eye-watch']):before {
			content: '\\ea70';
		}
		:host([icon='circle-filled']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-dot']):before {
			content: '\\ea71';
		}
		:host([icon='close-dirty']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint-disabled']):before {
			content: '\\ea71';
		}
		:host([icon='debug-hint']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-square']):before {
			content: '\\ea72';
		}
		:host([icon='edit']):before {
			content: '\\ea73';
		}
		:host([icon='pencil']):before {
			content: '\\ea73';
		}
		:host([icon='info']):before {
			content: '\\ea74';
		}
		:host([icon='issue-opened']):before {
			content: '\\ea74';
		}
		:host([icon='gist-private']):before {
			content: '\\ea75';
		}
		:host([icon='git-fork-private']):before {
			content: '\\ea75';
		}
		:host([icon='lock']):before {
			content: '\\ea75';
		}
		:host([icon='mirror-private']):before {
			content: '\\ea75';
		}
		:host([icon='close']):before {
			content: '\\ea76';
		}
		:host([icon='remove-close']):before {
			content: '\\ea76';
		}
		:host([icon='x']):before {
			content: '\\ea76';
		}
		:host([icon='repo-sync']):before {
			content: '\\ea77';
		}
		:host([icon='sync']):before {
			content: '\\ea77';
		}
		:host([icon='clone']):before {
			content: '\\ea78';
		}
		:host([icon='desktop-download']):before {
			content: '\\ea78';
		}
		:host([icon='beaker']):before {
			content: '\\ea79';
		}
		:host([icon='microscope']):before {
			content: '\\ea79';
		}
		:host([icon='vm']):before {
			content: '\\ea7a';
		}
		:host([icon='device-desktop']):before {
			content: '\\ea7a';
		}
		:host([icon='file']):before {
			content: '\\ea7b';
		}
		:host([icon='file-text']):before {
			content: '\\ea7b';
		}
		:host([icon='more']):before {
			content: '\\ea7c';
		}
		:host([icon='ellipsis']):before {
			content: '\\ea7c';
		}
		:host([icon='kebab-horizontal']):before {
			content: '\\ea7c';
		}
		:host([icon='mail-reply']):before {
			content: '\\ea7d';
		}
		:host([icon='reply']):before {
			content: '\\ea7d';
		}
		:host([icon='organization']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-filled']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-outline']):before {
			content: '\\ea7e';
		}
		:host([icon='new-file']):before {
			content: '\\ea7f';
		}
		:host([icon='file-add']):before {
			content: '\\ea7f';
		}
		:host([icon='new-folder']):before {
			content: '\\ea80';
		}
		:host([icon='file-directory-create']):before {
			content: '\\ea80';
		}
		:host([icon='trash']):before {
			content: '\\ea81';
		}
		:host([icon='trashcan']):before {
			content: '\\ea81';
		}
		:host([icon='history']):before {
			content: '\\ea82';
		}
		:host([icon='clock']):before {
			content: '\\ea82';
		}
		:host([icon='folder']):before {
			content: '\\ea83';
		}
		:host([icon='file-directory']):before {
			content: '\\ea83';
		}
		:host([icon='symbol-folder']):before {
			content: '\\ea83';
		}
		:host([icon='logo-github']):before {
			content: '\\ea84';
		}
		:host([icon='mark-github']):before {
			content: '\\ea84';
		}
		:host([icon='github']):before {
			content: '\\ea84';
		}
		:host([icon='terminal']):before {
			content: '\\ea85';
		}
		:host([icon='console']):before {
			content: '\\ea85';
		}
		:host([icon='repl']):before {
			content: '\\ea85';
		}
		:host([icon='zap']):before {
			content: '\\ea86';
		}
		:host([icon='symbol-event']):before {
			content: '\\ea86';
		}
		:host([icon='error']):before {
			content: '\\ea87';
		}
		:host([icon='stop']):before {
			content: '\\ea87';
		}
		:host([icon='variable']):before {
			content: '\\ea88';
		}
		:host([icon='symbol-variable']):before {
			content: '\\ea88';
		}
		:host([icon='array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-module']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-package']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-namespace']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-object']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-method']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-function']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-constructor']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-boolean']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-null']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-numeric']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-number']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-structure']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-struct']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-type-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-key']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-text']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-reference']):before {
			content: '\\ea94';
		}
		:host([icon='go-to-file']):before {
			content: '\\ea94';
		}
		:host([icon='symbol-enum']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-value']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-ruler']):before {
			content: '\\ea96';
		}
		:host([icon='symbol-unit']):before {
			content: '\\ea96';
		}
		:host([icon='activate-breakpoints']):before {
			content: '\\ea97';
		}
		:host([icon='archive']):before {
			content: '\\ea98';
		}
		:host([icon='arrow-both']):before {
			content: '\\ea99';
		}
		:host([icon='arrow-down']):before {
			content: '\\ea9a';
		}
		:host([icon='arrow-left']):before {
			content: '\\ea9b';
		}
		:host([icon='arrow-right']):before {
			content: '\\ea9c';
		}
		:host([icon='arrow-small-down']):before {
			content: '\\ea9d';
		}
		:host([icon='arrow-small-left']):before {
			content: '\\ea9e';
		}
		:host([icon='arrow-small-right']):before {
			content: '\\ea9f';
		}
		:host([icon='arrow-small-up']):before {
			content: '\\eaa0';
		}
		:host([icon='arrow-up']):before {
			content: '\\eaa1';
		}
		:host([icon='bell']):before {
			content: '\\eaa2';
		}
		:host([icon='bold']):before {
			content: '\\eaa3';
		}
		:host([icon='book']):before {
			content: '\\eaa4';
		}
		:host([icon='bookmark']):before {
			content: '\\eaa5';
		}
		:host([icon='debug-breakpoint-conditional-unverified']):before {
			content: '\\eaa6';
		}
		:host([icon='debug-breakpoint-conditional']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-conditional-disabled']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-data-unverified']):before {
			content: '\\eaa8';
		}
		:host([icon='debug-breakpoint-data']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-data-disabled']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-log-unverified']):before {
			content: '\\eaaa';
		}
		:host([icon='debug-breakpoint-log']):before {
			content: '\\eaab';
		}
		:host([icon='debug-breakpoint-log-disabled']):before {
			content: '\\eaab';
		}
		:host([icon='briefcase']):before {
			content: '\\eaac';
		}
		:host([icon='broadcast']):before {
			content: '\\eaad';
		}
		:host([icon='browser']):before {
			content: '\\eaae';
		}
		:host([icon='bug']):before {
			content: '\\eaaf';
		}
		:host([icon='calendar']):before {
			content: '\\eab0';
		}
		:host([icon='case-sensitive']):before {
			content: '\\eab1';
		}
		:host([icon='check']):before {
			content: '\\eab2';
		}
		:host([icon='checklist']):before {
			content: '\\eab3';
		}
		:host([icon='chevron-down']):before {
			content: '\\eab4';
		}
		:host([icon='chevron-left']):before {
			content: '\\eab5';
		}
		:host([icon='chevron-right']):before {
			content: '\\eab6';
		}
		:host([icon='chevron-up']):before {
			content: '\\eab7';
		}
		:host([icon='chrome-close']):before {
			content: '\\eab8';
		}
		:host([icon='chrome-maximize']):before {
			content: '\\eab9';
		}
		:host([icon='chrome-minimize']):before {
			content: '\\eaba';
		}
		:host([icon='chrome-restore']):before {
			content: '\\eabb';
		}
		:host([icon='circle-outline']):before {
			content: '\\eabc';
		}
		:host([icon='debug-breakpoint-unverified']):before {
			content: '\\eabc';
		}
		:host([icon='circle-slash']):before {
			content: '\\eabd';
		}
		:host([icon='circuit-board']):before {
			content: '\\eabe';
		}
		:host([icon='clear-all']):before {
			content: '\\eabf';
		}
		:host([icon='clippy']):before {
			content: '\\eac0';
		}
		:host([icon='close-all']):before {
			content: '\\eac1';
		}
		:host([icon='cloud-download']):before {
			content: '\\eac2';
		}
		:host([icon='cloud-upload']):before {
			content: '\\eac3';
		}
		:host([icon='code']):before {
			content: '\\eac4';
		}
		:host([icon='collapse-all']):before {
			content: '\\eac5';
		}
		:host([icon='color-mode']):before {
			content: '\\eac6';
		}
		:host([icon='comment-discussion']):before {
			content: '\\eac7';
		}
		:host([icon='credit-card']):before {
			content: '\\eac9';
		}
		:host([icon='dash']):before {
			content: '\\eacc';
		}
		:host([icon='dashboard']):before {
			content: '\\eacd';
		}
		:host([icon='database']):before {
			content: '\\eace';
		}
		:host([icon='debug-continue']):before {
			content: '\\eacf';
		}
		:host([icon='debug-disconnect']):before {
			content: '\\ead0';
		}
		:host([icon='debug-pause']):before {
			content: '\\ead1';
		}
		:host([icon='debug-restart']):before {
			content: '\\ead2';
		}
		:host([icon='debug-start']):before {
			content: '\\ead3';
		}
		:host([icon='debug-step-into']):before {
			content: '\\ead4';
		}
		:host([icon='debug-step-out']):before {
			content: '\\ead5';
		}
		:host([icon='debug-step-over']):before {
			content: '\\ead6';
		}
		:host([icon='debug-stop']):before {
			content: '\\ead7';
		}
		:host([icon='debug']):before {
			content: '\\ead8';
		}
		:host([icon='device-camera-video']):before {
			content: '\\ead9';
		}
		:host([icon='device-camera']):before {
			content: '\\eada';
		}
		:host([icon='device-mobile']):before {
			content: '\\eadb';
		}
		:host([icon='diff-added']):before {
			content: '\\eadc';
		}
		:host([icon='diff-ignored']):before {
			content: '\\eadd';
		}
		:host([icon='diff-modified']):before {
			content: '\\eade';
		}
		:host([icon='diff-removed']):before {
			content: '\\eadf';
		}
		:host([icon='diff-renamed']):before {
			content: '\\eae0';
		}
		:host([icon='diff']):before {
			content: '\\eae1';
		}
		:host([icon='discard']):before {
			content: '\\eae2';
		}
		:host([icon='editor-layout']):before {
			content: '\\eae3';
		}
		:host([icon='empty-window']):before {
			content: '\\eae4';
		}
		:host([icon='exclude']):before {
			content: '\\eae5';
		}
		:host([icon='extensions']):before {
			content: '\\eae6';
		}
		:host([icon='eye-closed']):before {
			content: '\\eae7';
		}
		:host([icon='file-binary']):before {
			content: '\\eae8';
		}
		:host([icon='file-code']):before {
			content: '\\eae9';
		}
		:host([icon='file-media']):before {
			content: '\\eaea';
		}
		:host([icon='file-pdf']):before {
			content: '\\eaeb';
		}
		:host([icon='file-submodule']):before {
			content: '\\eaec';
		}
		:host([icon='file-symlink-directory']):before {
			content: '\\eaed';
		}
		:host([icon='file-symlink-file']):before {
			content: '\\eaee';
		}
		:host([icon='file-zip']):before {
			content: '\\eaef';
		}
		:host([icon='files']):before {
			content: '\\eaf0';
		}
		:host([icon='filter']):before {
			content: '\\eaf1';
		}
		:host([icon='flame']):before {
			content: '\\eaf2';
		}
		:host([icon='fold-down']):before {
			content: '\\eaf3';
		}
		:host([icon='fold-up']):before {
			content: '\\eaf4';
		}
		:host([icon='fold']):before {
			content: '\\eaf5';
		}
		:host([icon='folder-active']):before {
			content: '\\eaf6';
		}
		:host([icon='folder-opened']):before {
			content: '\\eaf7';
		}
		:host([icon='gear']):before {
			content: '\\eaf8';
		}
		:host([icon='gift']):before {
			content: '\\eaf9';
		}
		:host([icon='gist-secret']):before {
			content: '\\eafa';
		}
		:host([icon='gist']):before {
			content: '\\eafb';
		}
		:host([icon='git-commit']):before {
			content: '\\eafc';
		}
		:host([icon='git-compare']):before {
			content: '\\eafd';
		}
		:host([icon='compare-changes']):before {
			content: '\\eafd';
		}
		:host([icon='git-merge']):before {
			content: '\\eafe';
		}
		:host([icon='github-action']):before {
			content: '\\eaff';
		}
		:host([icon='github-alt']):before {
			content: '\\eb00';
		}
		:host([icon='globe']):before {
			content: '\\eb01';
		}
		:host([icon='grabber']):before {
			content: '\\eb02';
		}
		:host([icon='graph']):before {
			content: '\\eb03';
		}
		:host([icon='gripper']):before {
			content: '\\eb04';
		}
		:host([icon='heart']):before {
			content: '\\eb05';
		}
		:host([icon='home']):before {
			content: '\\eb06';
		}
		:host([icon='horizontal-rule']):before {
			content: '\\eb07';
		}
		:host([icon='hubot']):before {
			content: '\\eb08';
		}
		:host([icon='inbox']):before {
			content: '\\eb09';
		}
		:host([icon='issue-reopened']):before {
			content: '\\eb0b';
		}
		:host([icon='issues']):before {
			content: '\\eb0c';
		}
		:host([icon='italic']):before {
			content: '\\eb0d';
		}
		:host([icon='jersey']):before {
			content: '\\eb0e';
		}
		:host([icon='json']):before {
			content: '\\eb0f';
		}
		:host([icon='kebab-vertical']):before {
			content: '\\eb10';
		}
		:host([icon='key']):before {
			content: '\\eb11';
		}
		:host([icon='law']):before {
			content: '\\eb12';
		}
		:host([icon='lightbulb-autofix']):before {
			content: '\\eb13';
		}
		:host([icon='link-external']):before {
			content: '\\eb14';
		}
		:host([icon='link']):before {
			content: '\\eb15';
		}
		:host([icon='list-ordered']):before {
			content: '\\eb16';
		}
		:host([icon='list-unordered']):before {
			content: '\\eb17';
		}
		:host([icon='live-share']):before {
			content: '\\eb18';
		}
		:host([icon='loading']):before {
			content: '\\eb19';
		}
		:host([icon='location']):before {
			content: '\\eb1a';
		}
		:host([icon='mail-read']):before {
			content: '\\eb1b';
		}
		:host([icon='mail']):before {
			content: '\\eb1c';
		}
		:host([icon='markdown']):before {
			content: '\\eb1d';
		}
		:host([icon='megaphone']):before {
			content: '\\eb1e';
		}
		:host([icon='mention']):before {
			content: '\\eb1f';
		}
		:host([icon='milestone']):before {
			content: '\\eb20';
		}
		:host([icon='mortar-board']):before {
			content: '\\eb21';
		}
		:host([icon='move']):before {
			content: '\\eb22';
		}
		:host([icon='multiple-windows']):before {
			content: '\\eb23';
		}
		:host([icon='mute']):before {
			content: '\\eb24';
		}
		:host([icon='no-newline']):before {
			content: '\\eb25';
		}
		:host([icon='note']):before {
			content: '\\eb26';
		}
		:host([icon='octoface']):before {
			content: '\\eb27';
		}
		:host([icon='open-preview']):before {
			content: '\\eb28';
		}
		:host([icon='package']):before {
			content: '\\eb29';
		}
		:host([icon='paintcan']):before {
			content: '\\eb2a';
		}
		:host([icon='pin']):before {
			content: '\\eb2b';
		}
		:host([icon='play']):before {
			content: '\\eb2c';
		}
		:host([icon='run']):before {
			content: '\\eb2c';
		}
		:host([icon='plug']):before {
			content: '\\eb2d';
		}
		:host([icon='preserve-case']):before {
			content: '\\eb2e';
		}
		:host([icon='preview']):before {
			content: '\\eb2f';
		}
		:host([icon='project']):before {
			content: '\\eb30';
		}
		:host([icon='pulse']):before {
			content: '\\eb31';
		}
		:host([icon='question']):before {
			content: '\\eb32';
		}
		:host([icon='quote']):before {
			content: '\\eb33';
		}
		:host([icon='radio-tower']):before {
			content: '\\eb34';
		}
		:host([icon='reactions']):before {
			content: '\\eb35';
		}
		:host([icon='references']):before {
			content: '\\eb36';
		}
		:host([icon='refresh']):before {
			content: '\\eb37';
		}
		:host([icon='regex']):before {
			content: '\\eb38';
		}
		:host([icon='remote-explorer']):before {
			content: '\\eb39';
		}
		:host([icon='remote']):before {
			content: '\\eb3a';
		}
		:host([icon='remove']):before {
			content: '\\eb3b';
		}
		:host([icon='replace-all']):before {
			content: '\\eb3c';
		}
		:host([icon='replace']):before {
			content: '\\eb3d';
		}
		:host([icon='repo-clone']):before {
			content: '\\eb3e';
		}
		:host([icon='repo-force-push']):before {
			content: '\\eb3f';
		}
		:host([icon='repo-pull']):before {
			content: '\\eb40';
		}
		:host([icon='repo-push']):before {
			content: '\\eb41';
		}
		:host([icon='report']):before {
			content: '\\eb42';
		}
		:host([icon='request-changes']):before {
			content: '\\eb43';
		}
		:host([icon='rocket']):before {
			content: '\\eb44';
		}
		:host([icon='root-folder-opened']):before {
			content: '\\eb45';
		}
		:host([icon='root-folder']):before {
			content: '\\eb46';
		}
		:host([icon='rss']):before {
			content: '\\eb47';
		}
		:host([icon='ruby']):before {
			content: '\\eb48';
		}
		:host([icon='save-all']):before {
			content: '\\eb49';
		}
		:host([icon='save-as']):before {
			content: '\\eb4a';
		}
		:host([icon='save']):before {
			content: '\\eb4b';
		}
		:host([icon='screen-full']):before {
			content: '\\eb4c';
		}
		:host([icon='screen-normal']):before {
			content: '\\eb4d';
		}
		:host([icon='search-stop']):before {
			content: '\\eb4e';
		}
		:host([icon='server']):before {
			content: '\\eb50';
		}
		:host([icon='settings-gear']):before {
			content: '\\eb51';
		}
		:host([icon='settings']):before {
			content: '\\eb52';
		}
		:host([icon='shield']):before {
			content: '\\eb53';
		}
		:host([icon='smiley']):before {
			content: '\\eb54';
		}
		:host([icon='sort-precedence']):before {
			content: '\\eb55';
		}
		:host([icon='split-horizontal']):before {
			content: '\\eb56';
		}
		:host([icon='split-vertical']):before {
			content: '\\eb57';
		}
		:host([icon='squirrel']):before {
			content: '\\eb58';
		}
		:host([icon='star-full']):before {
			content: '\\eb59';
		}
		:host([icon='star-half']):before {
			content: '\\eb5a';
		}
		:host([icon='symbol-class']):before {
			content: '\\eb5b';
		}
		:host([icon='symbol-color']):before {
			content: '\\eb5c';
		}
		:host([icon='symbol-constant']):before {
			content: '\\eb5d';
		}
		:host([icon='symbol-enum-member']):before {
			content: '\\eb5e';
		}
		:host([icon='symbol-field']):before {
			content: '\\eb5f';
		}
		:host([icon='symbol-file']):before {
			content: '\\eb60';
		}
		:host([icon='symbol-interface']):before {
			content: '\\eb61';
		}
		:host([icon='symbol-keyword']):before {
			content: '\\eb62';
		}
		:host([icon='symbol-misc']):before {
			content: '\\eb63';
		}
		:host([icon='symbol-operator']):before {
			content: '\\eb64';
		}
		:host([icon='symbol-property']):before {
			content: '\\eb65';
		}
		:host([icon='wrench']):before {
			content: '\\eb65';
		}
		:host([icon='wrench-subaction']):before {
			content: '\\eb65';
		}
		:host([icon='symbol-snippet']):before {
			content: '\\eb66';
		}
		:host([icon='tasklist']):before {
			content: '\\eb67';
		}
		:host([icon='telescope']):before {
			content: '\\eb68';
		}
		:host([icon='text-size']):before {
			content: '\\eb69';
		}
		:host([icon='three-bars']):before {
			content: '\\eb6a';
		}
		:host([icon='thumbsdown']):before {
			content: '\\eb6b';
		}
		:host([icon='thumbsup']):before {
			content: '\\eb6c';
		}
		:host([icon='tools']):before {
			content: '\\eb6d';
		}
		:host([icon='triangle-down']):before {
			content: '\\eb6e';
		}
		:host([icon='triangle-left']):before {
			content: '\\eb6f';
		}
		:host([icon='triangle-right']):before {
			content: '\\eb70';
		}
		:host([icon='triangle-up']):before {
			content: '\\eb71';
		}
		:host([icon='twitter']):before {
			content: '\\eb72';
		}
		:host([icon='unfold']):before {
			content: '\\eb73';
		}
		:host([icon='unlock']):before {
			content: '\\eb74';
		}
		:host([icon='unmute']):before {
			content: '\\eb75';
		}
		:host([icon='unverified']):before {
			content: '\\eb76';
		}
		:host([icon='verified']):before {
			content: '\\eb77';
		}
		:host([icon='versions']):before {
			content: '\\eb78';
		}
		:host([icon='vm-active']):before {
			content: '\\eb79';
		}
		:host([icon='vm-outline']):before {
			content: '\\eb7a';
		}
		:host([icon='vm-running']):before {
			content: '\\eb7b';
		}
		:host([icon='watch']):before {
			content: '\\eb7c';
		}
		:host([icon='whitespace']):before {
			content: '\\eb7d';
		}
		:host([icon='whole-word']):before {
			content: '\\eb7e';
		}
		:host([icon='window']):before {
			content: '\\eb7f';
		}
		:host([icon='word-wrap']):before {
			content: '\\eb80';
		}
		:host([icon='zoom-in']):before {
			content: '\\eb81';
		}
		:host([icon='zoom-out']):before {
			content: '\\eb82';
		}
		:host([icon='list-filter']):before {
			content: '\\eb83';
		}
		:host([icon='list-flat']):before {
			content: '\\eb84';
		}
		:host([icon='list-selection']):before {
			content: '\\eb85';
		}
		:host([icon='selection']):before {
			content: '\\eb85';
		}
		:host([icon='list-tree']):before {
			content: '\\eb86';
		}
		:host([icon='debug-breakpoint-function-unverified']):before {
			content: '\\eb87';
		}
		:host([icon='debug-breakpoint-function']):before {
			content: '\\eb88';
		}
		:host([icon='debug-breakpoint-function-disabled']):before {
			content: '\\eb88';
		}
		:host([icon='debug-stackframe-active']):before {
			content: '\\eb89';
		}
		:host([icon='debug-stackframe-dot']):before {
			content: '\\eb8a';
		}
		:host([icon='debug-stackframe']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-stackframe-focused']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-breakpoint-unsupported']):before {
			content: '\\eb8c';
		}
		:host([icon='symbol-string']):before {
			content: '\\eb8d';
		}
		:host([icon='debug-reverse-continue']):before {
			content: '\\eb8e';
		}
		:host([icon='debug-step-back']):before {
			content: '\\eb8f';
		}
		:host([icon='debug-restart-frame']):before {
			content: '\\eb90';
		}
		:host([icon='debug-alt']):before {
			content: '\\eb91';
		}
		:host([icon='call-incoming']):before {
			content: '\\eb92';
		}
		:host([icon='call-outgoing']):before {
			content: '\\eb93';
		}
		:host([icon='menu']):before {
			content: '\\eb94';
		}
		:host([icon='expand-all']):before {
			content: '\\eb95';
		}
		:host([icon='feedback']):before {
			content: '\\eb96';
		}
		:host([icon='group-by-ref-type']):before {
			content: '\\eb97';
		}
		:host([icon='ungroup-by-ref-type']):before {
			content: '\\eb98';
		}
		:host([icon='account']):before {
			content: '\\eb99';
		}
		:host([icon='bell-dot']):before {
			content: '\\eb9a';
		}
		:host([icon='debug-console']):before {
			content: '\\eb9b';
		}
		:host([icon='library']):before {
			content: '\\eb9c';
		}
		:host([icon='output']):before {
			content: '\\eb9d';
		}
		:host([icon='run-all']):before {
			content: '\\eb9e';
		}
		:host([icon='sync-ignored']):before {
			content: '\\eb9f';
		}
		:host([icon='pinned']):before {
			content: '\\eba0';
		}
		:host([icon='github-inverted']):before {
			content: '\\eba1';
		}
		:host([icon='server-process']):before {
			content: '\\eba2';
		}
		:host([icon='server-environment']):before {
			content: '\\eba3';
		}
		:host([icon='pass']):before {
			content: '\\eba4';
		}
		:host([icon='issue-closed']):before {
			content: '\\eba4';
		}
		:host([icon='stop-circle']):before {
			content: '\\eba5';
		}
		:host([icon='play-circle']):before {
			content: '\\eba6';
		}
		:host([icon='record']):before {
			content: '\\eba7';
		}
		:host([icon='debug-alt-small']):before {
			content: '\\eba8';
		}
		:host([icon='vm-connect']):before {
			content: '\\eba9';
		}
		:host([icon='cloud']):before {
			content: '\\ebaa';
		}
		:host([icon='merge']):before {
			content: '\\ebab';
		}
		:host([icon='export']):before {
			content: '\\ebac';
		}
		:host([icon='graph-left']):before {
			content: '\\ebad';
		}
		:host([icon='magnet']):before {
			content: '\\ebae';
		}
		:host([icon='notebook']):before {
			content: '\\ebaf';
		}
		:host([icon='redo']):before {
			content: '\\ebb0';
		}
		:host([icon='check-all']):before {
			content: '\\ebb1';
		}
		:host([icon='pinned-dirty']):before {
			content: '\\ebb2';
		}
		:host([icon='pass-filled']):before {
			content: '\\ebb3';
		}
		:host([icon='circle-large-filled']):before {
			content: '\\ebb4';
		}
		:host([icon='circle-large-outline']):before {
			content: '\\ebb5';
		}
		:host([icon='combine']):before {
			content: '\\ebb6';
		}
		:host([icon='gather']):before {
			content: '\\ebb6';
		}
		:host([icon='table']):before {
			content: '\\ebb7';
		}
		:host([icon='variable-group']):before {
			content: '\\ebb8';
		}
		:host([icon='type-hierarchy']):before {
			content: '\\ebb9';
		}
		:host([icon='type-hierarchy-sub']):before {
			content: '\\ebba';
		}
		:host([icon='type-hierarchy-super']):before {
			content: '\\ebbb';
		}
		:host([icon='git-pull-request-create']):before {
			content: '\\ebbc';
		}
		:host([icon='run-above']):before {
			content: '\\ebbd';
		}
		:host([icon='run-below']):before {
			content: '\\ebbe';
		}
		:host([icon='notebook-template']):before {
			content: '\\ebbf';
		}
		:host([icon='debug-rerun']):before {
			content: '\\ebc0';
		}
		:host([icon='workspace-trusted']):before {
			content: '\\ebc1';
		}
		:host([icon='workspace-untrusted']):before {
			content: '\\ebc2';
		}
		:host([icon='workspace-unknown']):before {
			content: '\\ebc3';
		}
		:host([icon='terminal-cmd']):before {
			content: '\\ebc4';
		}
		:host([icon='terminal-debian']):before {
			content: '\\ebc5';
		}
		:host([icon='terminal-linux']):before {
			content: '\\ebc6';
		}
		:host([icon='terminal-powershell']):before {
			content: '\\ebc7';
		}
		:host([icon='terminal-tmux']):before {
			content: '\\ebc8';
		}
		:host([icon='terminal-ubuntu']):before {
			content: '\\ebc9';
		}
		:host([icon='terminal-bash']):before {
			content: '\\ebca';
		}
		:host([icon='arrow-swap']):before {
			content: '\\ebcb';
		}
		:host([icon='copy']):before {
			content: '\\ebcc';
		}
		:host([icon='person-add']):before {
			content: '\\ebcd';
		}
		:host([icon='filter-filled']):before {
			content: '\\ebce';
		}
		:host([icon='wand']):before {
			content: '\\ebcf';
		}
		:host([icon='debug-line-by-line']):before {
			content: '\\ebd0';
		}
		:host([icon='inspect']):before {
			content: '\\ebd1';
		}
		:host([icon='layers']):before {
			content: '\\ebd2';
		}
		:host([icon='layers-dot']):before {
			content: '\\ebd3';
		}
		:host([icon='layers-active']):before {
			content: '\\ebd4';
		}
		:host([icon='compass']):before {
			content: '\\ebd5';
		}
		:host([icon='compass-dot']):before {
			content: '\\ebd6';
		}
		:host([icon='compass-active']):before {
			content: '\\ebd7';
		}
		:host([icon='azure']):before {
			content: '\\ebd8';
		}
		:host([icon='issue-draft']):before {
			content: '\\ebd9';
		}
		:host([icon='git-pull-request-closed']):before {
			content: '\\ebda';
		}
		:host([icon='git-pull-request-draft']):before {
			content: '\\ebdb';
		}
		:host([icon='debug-all']):before {
			content: '\\ebdc';
		}
		:host([icon='debug-coverage']):before {
			content: '\\ebdd';
		}
		:host([icon='run-errors']):before {
			content: '\\ebde';
		}
		:host([icon='folder-library']):before {
			content: '\\ebdf';
		}
		:host([icon='debug-continue-small']):before {
			content: '\\ebe0';
		}
		:host([icon='beaker-stop']):before {
			content: '\\ebe1';
		}
		:host([icon='graph-line']):before {
			content: '\\ebe2';
		}
		:host([icon='graph-scatter']):before {
			content: '\\ebe3';
		}
		:host([icon='pie-chart']):before {
			content: '\\ebe4';
		}
		:host([icon='bracket']):before {
			content: '\\eb0f';
		}
		:host([icon='bracket-dot']):before {
			content: '\\ebe5';
		}
		:host([icon='bracket-error']):before {
			content: '\\ebe6';
		}
		:host([icon='lock-small']):before {
			content: '\\ebe7';
		}
		:host([icon='azure-devops']):before {
			content: '\\ebe8';
		}
		:host([icon='verified-filled']):before {
			content: '\\ebe9';
		}
		:host([icon='newline']):before {
			content: '\\ebea';
		}
		:host([icon='layout']):before {
			content: '\\ebeb';
		}
		:host([icon='layout-activitybar-left']):before {
			content: '\\ebec';
		}
		:host([icon='layout-activitybar-right']):before {
			content: '\\ebed';
		}
		:host([icon='layout-panel-left']):before {
			content: '\\ebee';
		}
		:host([icon='layout-panel-center']):before {
			content: '\\ebef';
		}
		:host([icon='layout-panel-justify']):before {
			content: '\\ebf0';
		}
		:host([icon='layout-panel-right']):before {
			content: '\\ebf1';
		}
		:host([icon='layout-panel']):before {
			content: '\\ebf2';
		}
		:host([icon='layout-sidebar-left']):before {
			content: '\\ebf3';
		}
		:host([icon='layout-sidebar-right']):before {
			content: '\\ebf4';
		}
		:host([icon='layout-statusbar']):before {
			content: '\\ebf5';
		}
		:host([icon='layout-menubar']):before {
			content: '\\ebf6';
		}
		:host([icon='layout-centered']):before {
			content: '\\ebf7';
		}
		:host([icon='target']):before {
			content: '\\ebf8';
		}

		:host([icon='indent']):before {
			content: '\\ebf9';
		}
		:host([icon='record-small']):before {
			content: '\\ebfa';
		}
		:host([icon='error-small']):before {
			content: '\\ebfb';
		}
		:host([icon='terminal-decoration-error']):before {
			content: '\\ebfb';
		}
		:host([icon='arrow-circle-down']):before {
			content: '\\ebfc';
		}
		:host([icon='arrow-circle-left']):before {
			content: '\\ebfd';
		}
		:host([icon='arrow-circle-right']):before {
			content: '\\ebfe';
		}
		:host([icon='arrow-circle-up']):before {
			content: '\\ebff';
		}
		:host([icon='layout-sidebar-right-off']):before {
			content: '\\ec00';
		}
		:host([icon='layout-panel-off']):before {
			content: '\\ec01';
		}
		:host([icon='layout-sidebar-left-off']):before {
			content: '\\ec02';
		}
		:host([icon='blank']):before {
			content: '\\ec03';
		}
		:host([icon='heart-filled']):before {
			content: '\\ec04';
		}
		:host([icon='map']):before {
			content: '\\ec05';
		}
		:host([icon='map-filled']):before {
			content: '\\ec06';
		}
		:host([icon='circle-small']):before {
			content: '\\ec07';
		}
		:host([icon='bell-slash']):before {
			content: '\\ec08';
		}
		:host([icon='bell-slash-dot']):before {
			content: '\\ec09';
		}
		:host([icon='comment-unresolved']):before {
			content: '\\ec0a';
		}
		:host([icon='git-pull-request-go-to-changes']):before {
			content: '\\ec0b';
		}
		:host([icon='git-pull-request-new-changes']):before {
			content: '\\ec0c';
		}
		:host([icon='search-fuzzy']):before {
			content: '\\ec0d';
		}
		:host([icon='comment-draft']):before {
			content: '\\ec0e';
		}
		:host([icon='send']):before {
			content: '\\ec0f';
		}
		:host([icon='sparkle']):before {
			content: '\\ec10';
		}
		:host([icon='insert']):before {
			content: '\\ec11';
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}
		:host([icon='gl-commit-horizontal']):before {
			content: '\\f101';
		}
		:host([icon='gl-graph']):before {
			content: '\\f102';
		}
		:host([icon='gl-next-commit']):before {
			content: '\\f103';
		}
		:host([icon='gl-prev-commit-menu']):before {
			content: '\\f104';
		}
		:host([icon='gl-prev-commit']):before {
			content: '\\f105';
		}
		:host([icon='gl-compare-ref-working']):before {
			content: '\\f106';
		}
		:host([icon='gl-branches-view']):before {
			content: '\\f107';
		}
		:host([icon='gl-commit-view']):before {
			content: '\\f108';
		}
		:host([icon='gl-commits-view']):before {
			content: '\\f109';
		}
		:host([icon='gl-compare-view']):before {
			content: '\\f10a';
		}
		:host([icon='gl-contributors-view']):before {
			content: '\\f10b';
		}
		:host([icon='gl-history-view']):before {
			content: '\\f10c';
		}
		:host([icon='gl-remotes-view']):before {
			content: '\\f10d';
		}
		:host([icon='gl-repositories-view']):before {
			content: '\\f10e';
		}
		:host([icon='gl-search-view']):before {
			content: '\\f10f';
		}
		:host([icon='gl-stashes-view']):before {
			content: '\\f110';
		}
		:host([icon='gl-tags-view']):before {
			content: '\\f111';
		}
		:host([icon='gl-worktrees-view']):before {
			content: '\\f112';
		}
		:host([icon='gl-gitlens']):before {
			content: '\\f113';
		}
		:host([icon='gl-stash-pop']):before {
			content: '\\f114';
		}
		:host([icon='gl-stash-save']):before {
			content: '\\f115';
		}
		:host([icon='gl-unplug']):before {
			content: '\\f116';
		}
		:host([icon='gl-open-revision']):before {
			content: '\\f117';
		}
		:host([icon='gl-switch']):before {
			content: '\\f118';
		}
		:host([icon='gl-expand']):before {
			content: '\\f119';
		}
		:host([icon='gl-list-auto']):before {
			content: '\\f11a';
		}
		:host([icon='gl-arrow-up-force']):before {
			content: '\\f11b';
		}
		:host([icon='gl-pinned-filled']):before {
			content: '\\f11c';
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}
		:host([icon='gl-clock']):before {
			content: '\\f11d';
		}
		:host([icon='gl-provider-azdo']):before {
			content: '\\f11e';
		}
		:host([icon='gl-provider-bitbucket']):before {
			content: '\\f11f';
		}
		:host([icon='gl-provider-gerrit']):before {
			content: '\\f120';
		}
		:host([icon='gl-provider-gitea']):before {
			content: '\\f121';
		}
		:host([icon='gl-provider-github']):before {
			content: '\\f122';
		}
		:host([icon='gl-provider-gitlab']):before {
			content: '\\f123';
		}
		:host([icon='gl-gitlens-inspect']):before {
			content: '\\f124';
		}
		:host([icon='gl-workspaces-view']):before {
			content: '\\f125';
		}
		:host([icon='gl-cloud-patch']):before {
			content: '\\f128';
		}
		:host([icon='gl-cloud-patch-share']):before {
			content: '\\f129';
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}
	`,Ud([Jc()],jd.prototype,"icon",2),Ud([Jc()],jd.prototype,"modifier",2),Ud([Jc({type:Number})],jd.prototype,"size",2),jd=Ud([Yc("code-icon")],jd);var Vd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,qd=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?Zd(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&Vd(t,o,i),i};let Kd=class extends qc{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return Mc`<div class="progress-bar"></div>`}};Kd.styles=Zl`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,qd([Jc({reflect:!0})],Kd.prototype,"mode",2),qd([Jc({type:Boolean})],Kd.prototype,"active",2),qd([Jc()],Kd.prototype,"position",2),Kd=qd([Yc("progress-indicator")],Kd);var Yd=Object.defineProperty,Xd=Object.getOwnPropertyDescriptor,Qd=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?Xd(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&Yd(t,o,i),i};const Jd=new Map([["=:","message:"],["message:","message:"],["@:","author:"],["author:","author:"],["#:","commit:"],["commit:","commit:"],["?:","file:"],["file:","file:"],["~:","change:"],["change:","change:"]]),eh=wn`
	<template role="search">
		<pop-menu ${Qr("popmenu")} style="margin-left: -0.25rem;">
			<button
				type="button"
				class="action-button"
				slot="trigger"
				aria-label="${e=>e.label}"
				title="${e=>e.label}"
			>
				<code-icon icon="search" aria-hidden="true"></code-icon>
				<code-icon class="action-button__more" icon="chevron-down" aria-hidden="true"></code-icon>
			</button>
			<menu-list slot="content">
				<menu-label>Search by</menu-label>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("@me")}">
						My changes <small>@me</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("message:")}">
						Message <small>message: or =:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("author:")}">
						Author <small>author: or @:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("commit:")}">
						Commit SHA <small>commit: or #:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("file:")}">
						File <small>file: or ?:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${(e,t)=>e.handleInsertToken("change:")}">
						Change <small>change: or ~:</small>
					</button>
				</menu-item>
			</menu-list>
		</pop-menu>
		<div class="field">
			<input
				${Qr("input")}
				id="search"
				part="search"
				type="text"
				spellcheck="false"
				placeholder="${e=>e.placeholder}"
				:value="${e=>e.value}"
				aria-valid="${e=>!e.errorMessage}"
				aria-describedby="${e=>""!==e.errorMessage||null!=e.helpType?"help-text":""}"
				@input="${(e,t)=>e.handleInput(t.event)}"
				@keydown="${(e,t)=>e.handleShortcutKeys(t.event)}"
				@keyup="${(e,t)=>e.handleKeyup(t.event)}"
				@click="${(e,t)=>e.handleInputClick(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			/>
			<div class="message" id="help-text" aria-live="polite">
				${Ys((e=>""!==e.errorMessage),wn`${e=>e.errorMessage}${e=>e.helpType?wn`<br />`:""}`)}
				${Ys((e=>"message:"===e.helpType),wn`<span
						>Message: use quotes to search for phrases, e.g. message:"Updates dependencies"</span
					>`)}
				${Ys((e=>"author:"===e.helpType),wn`<span>Author: use a user's account, e.g. author:eamodio</span>`)}
				${Ys((e=>"commit:"===e.helpType),wn`<span>Commit: use a full or short Commit SHA, e.g. commit:4ce3a</span>`)}
				${Ys((e=>"file:"===e.helpType),wn`<span
						>File: use a filename with extension, e.g. file:package.json, or a glob pattern, e.g.
						file:*graph*
					</span>`)}
				${Ys((e=>"change:"===e.helpType),wn`<span>Change: use a regex pattern, e.g. change:update&#92;(param</span>`)}
			</div>
		</div>
		<div class="controls">
			<button
				class="control${e=>e.value?"":" is-hidden"}"
				type="button"
				role="button"
				aria-label="Clear"
				title="Clear"
				@click="${(e,t)=>e.handleClear(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="close"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Match All"
				title="Match All"
				aria-checked="${e=>e.matchAll}"
				@click="${(e,t)=>e.handleMatchAll(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="whole-word"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Match Case${e=>e.matchCaseOverride&&!e.matchCase?" (always on without regular expressions)":""}"
				title="Match Case${e=>e.matchCaseOverride&&!e.matchCase?" (always on without regular expressions)":""}"
				?disabled="${e=>!e.matchRegex}"
				aria-checked="${e=>e.matchCaseOverride}"
				@click="${(e,t)=>e.handleMatchCase(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="case-sensitive"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Use Regular Expression"
				title="Use Regular Expression"
				aria-checked="${e=>e.matchRegex}"
				@click="${(e,t)=>e.handleMatchRegex(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="regex"></code-icon>
			</button>
		</div>
	</template>
`,th=_n`
	* {
		box-sizing: border-box;
	}

	:host {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.4rem;
		position: relative;

		flex: auto 1 1;
	}

	label {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.2rem;
		width: 3.2rem;
		height: 2.4rem;
		color: var(--vscode-input-foreground);
		cursor: pointer;
		border-radius: 3px;
	}
	label:hover {
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	label:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	.icon-small {
		font-size: 1rem;
	}

	.field {
		position: relative;
		flex: auto 1 1;
	}

	input {
		width: 100%;
		height: 2.4rem;
		background-color: var(--vscode-input-background);
		color: var(--vscode-input-foreground);
		border: 1px solid var(--vscode-input-border);
		border-radius: 0.25rem;
		padding: 0 6.6rem 1px 0.4rem;
		font-family: inherit;
		font-size: inherit;
	}
	input:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	input::placeholder {
		color: var(--vscode-input-placeholderForeground);
	}

	input::-webkit-search-cancel-button {
		display: none;
	}

	input[aria-describedby='help-text'] {
		border-color: var(--vscode-inputValidation-infoBorder);
	}
	input[aria-describedby='help-text']:focus {
		outline-color: var(--vscode-inputValidation-infoBorder);
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	input[aria-valid='false'] {
		border-color: var(--vscode-inputValidation-errorBorder);
	}
	input[aria-valid='false']:focus {
		outline-color: var(--vscode-inputValidation-errorBorder);
	}

	.message {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		padding: 0.4rem;
		transform: translateY(-0.1rem);
		z-index: 1000;
		background-color: var(--vscode-inputValidation-infoBackground);
		border: 1px solid var(--vscode-inputValidation-infoBorder);
		color: var(--vscode-input-foreground);
		font-size: 1.2rem;
		line-height: 1.4;
	}

	input[aria-valid='false'] + .message {
		background-color: var(--vscode-inputValidation-errorBackground);
		border-color: var(--vscode-inputValidation-errorBorder);
	}

	input:not([aria-describedby='help-text']:focus) + .message {
		display: none;
	}

	.controls {
		position: absolute;
		top: 0.2rem;
		right: 0.2rem;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.1rem;
	}

	button {
		padding: 0;
		color: var(--vscode-input-foreground);
		border: 1px solid transparent;
		background: none;
	}
	button:focus:not([disabled]) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	button:not([disabled]) {
		cursor: pointer;
	}

	.control {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		text-align: center;
		border-radius: 0.25rem;
	}
	.control:hover:not([disabled]):not([aria-checked='true']) {
		background-color: var(--vscode-inputOption-hoverBackground);
	}
	.control[disabled] {
		opacity: 0.5;
	}
	.control[disabled][aria-checked='true'] {
		opacity: 0.8;
	}
	.control[aria-checked='true'] {
		background-color: var(--vscode-inputOption-activeBackground);
		color: var(--vscode-inputOption-activeForeground);
		border-color: var(--vscode-inputOption-activeBorder);
	}

	.control.is-hidden {
		display: none;
	}

	.action-button {
		position: relative;
		appearance: none;
		font-family: inherit;
		font-size: 1.2rem;
		line-height: 2.2rem;
		// background-color: var(--color-graph-actionbar-background);
		background-color: transparent;
		border: none;
		color: inherit;
		color: var(--color-foreground);
		padding: 0 0.75rem;
		cursor: pointer;
		border-radius: 3px;
		height: auto;

		display: grid;
		grid-auto-flow: column;
		grid-gap: 0.5rem;
		gap: 0.5rem;
		max-width: fit-content;
	}

	.action-button[disabled] {
		pointer-events: none;
		cursor: default;
		opacity: 1;
	}

	.action-button:hover {
		background-color: var(--color-graph-actionbar-selectedBackground);
		color: var(--color-foreground);
		text-decoration: none;
	}

	.action-button[aria-checked] {
		border: 1px solid transparent;
	}

	.action-button[aria-checked='true'] {
		background-color: var(--vscode-inputOption-activeBackground);
		color: var(--vscode-inputOption-activeForeground);
		border-color: var(--vscode-inputOption-activeBorder);
	}

	.action-button code-icon,
	.action-button .codicon[class*='codicon-'],
	.action-button .glicon[class*='glicon-'] {
		line-height: 2.2rem;
		vertical-align: bottom;
	}

	.action-button__more,
	.action-button__more.codicon[class*='codicon-'] {
		font-size: 1rem;
		margin-right: -0.25rem;
	}

	.action-button__more::before {
		margin-left: -0.25rem;
	}

	menu-item {
		padding: 0 0.5rem;
	}

	menu-list {
		padding-bottom: 0.5rem;
	}

	.menu-button {
		display: block;
		width: 100%;
		padding: 0.1rem 0.6rem 0 0.6rem;
		line-height: 2.2rem;
		text-align: left;
		color: var(--vscode-menu-foreground);
		border-radius: 3px;
	}

	.menu-button:hover {
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-selectionBackground);
	}
`;let oh=class extends qt{constructor(){super(...arguments),this.errorMessage="",this.label="Search",this.placeholder="Search...",this.value="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.debouncedEmitSearch=de(this.emitSearch.bind(this),250),this.searchHistory=[],this.searchHistoryPos=0}get matchCaseOverride(){return!this.matchRegex||this.matchCase}focus(e){this.input.focus(e)}handleFocus(e){this.popmenu.close()}handleClear(e){this.value="",this.debouncedEmitSearch()}updateHelpText(){null==this._updateHelpTextDebounced&&(this._updateHelpTextDebounced=de(this.updateHelpTextCore.bind(this),200)),this._updateHelpTextDebounced()}updateHelpTextCore(){const e=this.input?.selectionStart,t=this.value;if(null!=e&&0!==t.length&&t.includes(":")){const o=/(?:^|[\b\s]*)((=:|message:|@:|author:|#:|commit:|\?:|file:|~:|change:)(?:"[^"]*"?|\w*))(?:$|[\b\s])/gi;let n;for(;;){if(n=o.exec(t),null==n)break;const[,r,i]=n;if(e>n.index&&e<=n.index+r.trim().length)return void(this.helpType=Jd.get(i))}}this.helpType=void 0}handleInputClick(e){this.updateHelpText()}handleInput(e){const t=e.target?.value;this.value=t,this.updateHelpText(),this.debouncedEmitSearch()}handleMatchAll(e){this.matchAll=!this.matchAll,this.debouncedEmitSearch()}handleMatchCase(e){this.matchCase=!this.matchCase,this.debouncedEmitSearch()}handleMatchRegex(e){this.matchRegex=!this.matchRegex,this.debouncedEmitSearch()}handleKeyup(e){this.updateHelpText()}handleShortcutKeys(e){if(!["Enter","ArrowUp","ArrowDown"].includes(e.key)||e.ctrlKey||e.metaKey||e.altKey)return!0;if(e.preventDefault(),"Enter"===e.key)e.shiftKey?this.$emit("previous"):this.$emit("next");else if(0!==this.searchHistory.length){const t="ArrowDown"===e.key?1:-1,o=this.searchHistoryPos+t;if(o>-1&&o<this.searchHistory.length){this.searchHistoryPos=o;const e=this.searchHistory[o];e!==this.value&&(this.value=e,this.updateHelpText(),this.debouncedEmitSearch())}}return!1}handleInsertToken(e){this.value+=`${this.value.length>0?" ":""}${e}`,window.requestAnimationFrame((()=>{this.updateHelpText(),"@me"===e&&this.debouncedEmitSearch(),this.input.focus()}))}emitSearch(){const e={query:this.value,matchAll:this.matchAll,matchCase:this.matchCase,matchRegex:this.matchRegex};this.$emit("change",e)}setCustomValidity(e=""){this.errorMessage=e}logSearch(e){const t=this.searchHistory.length-1;this.searchHistoryPos<t||this.searchHistory[t]===e.query||(this.searchHistory.push(e.query),this.searchHistoryPos=this.searchHistory.length-1)}};Qd([wt],oh.prototype,"errorMessage",2),Qd([wt],oh.prototype,"helpType",2),Qd([zt],oh.prototype,"label",2),Qd([zt],oh.prototype,"placeholder",2),Qd([zt],oh.prototype,"value",2),Qd([zt({mode:"boolean"})],oh.prototype,"matchAll",2),Qd([zt({mode:"boolean"})],oh.prototype,"matchCase",2),Qd([zt({mode:"boolean"})],oh.prototype,"matchRegex",2),Qd([Ct],oh.prototype,"matchCaseOverride",1),oh=Qd([Kt({name:"search-input",template:eh,styles:th})],oh);var nh=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,ih=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?rh(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&nh(t,o,i),i};const sh=wn`<template>
	<search-input
		${Qr("searchInput")}
		id="search-input"
		:errorMessage="${e=>e.errorMessage}"
		label="${e=>e.label}"
		placeholder="${e=>e.placeholder}"
		matchAll="${e=>e.matchAll}"
		matchCase="${e=>e.matchCase}"
		matchRegex="${e=>e.matchRegex}"
		value="${e=>e.value}"
		@previous="${(e,t)=>{t.event.stopImmediatePropagation(),e.navigate("previous")}}"
		@next="${(e,t)=>{t.event.stopImmediatePropagation(),e.navigate("next")}}"
	></search-input>
	<div class="search-navigation" aria-label="Search navigation">
		<span class="count${e=>e.total<1&&e.valid&&e.resultsLoaded?" error":""}">
			${Ys((e=>e.searching),wn`<code-icon icon="loading" modifier="spin"></code-icon>`)}
			${Ys((e=>!e.searching&&e.total<1),wn`${e=>e.formattedLabel}`)}
			${Ys((e=>!e.searching&&e.total>0),wn`<span aria-current="step">${e=>e.step}</span> of
					<span
						class="${e=>e.resultsHidden?"sr-hidden":""}"
						title="${e=>e.resultsHidden?"Some search results are hidden or unable to be shown on the Commit Graph":""}"
						>${e=>e.total}${e=>e.more?"+":""}</span
					><span class="sr-only"> ${e=>e.formattedLabel}</span>`)}
		</span>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handlePrevious(t.event)}"
		>
			<code-icon
				icon="arrow-up"
				aria-label="Previous Match (Shift+Enter)
First Match (Shift+Click)"
				title="Previous Match (Shift+Enter)
First Match (Shift+Click)"
			></code-icon>
		</button>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handleNext(t.event)}"
		>
			<code-icon
				icon="arrow-down"
				aria-label="Next Match (Enter)
Last Match (Shift+Click)"
				title="Next Match (Enter)
Last Match (Shift+Click)"
			></code-icon>
		</button>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handleOpenInView(t.event)}"
		>
			<code-icon
				icon="link-external"
				aria-label="Show Results in Side Bar"
				title="Show Results in Side Bar"
			></code-icon>
		</button>
	</div>
	<progress-indicator active="${e=>e.searching}"></progress-indicator>
</template>`,ah=_n`
	:host {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		color: var(--color-foreground);
		flex: auto 1 1;
		position: relative;
	}
	:host(:focus) {
		outline: 0;
	}
	progress-indicator {
		top: -4px;
	}

	.search-navigation {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.3rem;
		color: var(--color-foreground);
	}
	.search-navigation:focus {
		outline: 0;
	}

	.count {
		flex: none;
		margin-right: 0.4rem;
		font-size: 1.2rem;
		min-width: 10ch;
	}

	.count.error {
		color: var(--vscode-errorForeground);
	}

	.button {
		width: 2.4rem;
		height: 2.4rem;
		padding: 0;
		color: inherit;
		border: none;
		border-radius: 3px;
		background: none;
		text-align: center;
	}
	.button[disabled] {
		color: var(--vscode-disabledForeground);
	}
	.button:focus {
		background-color: var(--vscode-toolbar-activeBackground);
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	.button:not([disabled]) {
		cursor: pointer;
	}
	.button:hover:not([disabled]) {
		color: var(--vscode-foreground);
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	.button > code-icon[icon='arrow-up'] {
		transform: translateX(-0.1rem);
	}

	.sr-hidden {
		color: var(--vscode-errorForeground);
	}

	.sr-only {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`;let lh=class extends qt{constructor(){super(...arguments),this.errorMessage="",this.label="Search",this.placeholder='Search commits (↑↓ for history), e.g. "Updates dependencies" author:eamodio',this.value="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.total=0,this.step=0,this.more=!1,this.searching=!1,this.valid=!1,this.resultsHidden=!1,this.resultsLabel="result",this.resultsLoaded=!1}get formattedLabel(){return Ae(this.resultsLabel,this.total,{zero:"No"})}get hasResults(){return this.total>1}connectedCallback(){super.connectedCallback(),this._disposable=Ge.on(window,"keydown",(e=>this.handleShortcutKeys(e)))}disconnectedCallback(){super.disconnectedCallback(),this._disposable?.dispose()}focus(e){this.searchInput?.focus(e)}navigate(e){const t={direction:e};this.$emit("navigate",t)}logSearch(e){this.searchInput?.logSearch(e)}handleShortcutKeys(e){if(!e.altKey)return"F3"===e.key&&!e.ctrlKey&&!e.metaKey||"g"===e.key&&e.metaKey&&!e.ctrlKey&&Za?(e.preventDefault(),e.stopImmediatePropagation(),void this.navigate(e.shiftKey?"previous":"next")):void("f"===e.key&&(e.metaKey&&!e.ctrlKey&&Za||e.ctrlKey&&!Za)&&(e.preventDefault(),e.stopImmediatePropagation(),this.focus()))}handlePrevious(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"first":"previous")}handleNext(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"last":"next")}handleOpenInView(e){e.stopImmediatePropagation(),this.$emit("openinview")}};ih([wt],lh.prototype,"errorMessage",2),ih([zt],lh.prototype,"label",2),ih([zt],lh.prototype,"placeholder",2),ih([zt],lh.prototype,"value",2),ih([zt({mode:"boolean"})],lh.prototype,"matchAll",2),ih([zt({mode:"boolean"})],lh.prototype,"matchCase",2),ih([zt({mode:"boolean"})],lh.prototype,"matchRegex",2),ih([zt({converter:Fd})],lh.prototype,"total",2),ih([zt({converter:Fd})],lh.prototype,"step",2),ih([zt({mode:"boolean"})],lh.prototype,"more",2),ih([zt({mode:"boolean"})],lh.prototype,"searching",2),ih([zt({mode:"boolean"})],lh.prototype,"valid",2),ih([zt({mode:"boolean"})],lh.prototype,"resultsHidden",2),ih([zt],lh.prototype,"resultsLabel",2),ih([zt({mode:"boolean"})],lh.prototype,"resultsLoaded",2),ih([Ct],lh.prototype,"formattedLabel",1),ih([Ct],lh.prototype,"hasResults",1),lh=ih([Kt({name:"search-box",template:sh,styles:ah})],lh);const ch=Ja(lh,{tagName:"search-box",events:{onChange:"change",onNavigate:"navigate",onOpenInView:"openinview"}});function*dh(e,t){for(const o of e)yield*t(o)}function*hh(...e){for(const t of e)if(null!=t)for(const e of t)yield e}var uh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,fh=(e,t,o,n)=>{for(var r,i=n>1?void 0:n?ph(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);return n&&i&&uh(t,o,i),i};const mh=wn`<template>
	<div id="spinner" ${Qr("spinner")}><code-icon icon="loading" modifier="spin"></code-icon></div>
	<div id="chart" ${Qr("chart")}></div>
	<div
		class="legend"
		title="${e=>"lines"===e.dataType?"Showing lines changed per day":"Showing commits per day"}"
	>
		<code-icon icon="${e=>"lines"===e.dataType?"request-changes":"git-commit"}"></code-icon>
	</div>
</template>`,gh=_n`
	:host {
		display: flex;
		position: relative;
		width: 100%;
		min-height: 24px;
		height: 40px;
		background: var(--color-background);
	}

	#chart {
		height: 100%;
		width: calc(100% - 1rem);
		overflow: hidden;
		position: initial !important;
	}

	#spinner {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
	}

	#spinner[aria-hidden='true'] {
		display: none;
	}

	.legend {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		z-index: 1;
		opacity: 0.7;
		cursor: help;
	}

	.bb svg {
		font: 10px var(--font-family);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.bb-chart {
		width: 100%;
		height: 100%;
	}

	.bb-event-rect {
		height: calc(100% + 2px);
		transform: translateY(-5px);
	}

	/*-- Grid --*/
	.bb-grid {
		pointer-events: none;
	}

	.bb-xgrid-focus line {
		stroke: var(--color-graph-minimap-focusLine);
	}

	/*-- Line --*/
	.bb path,
	.bb line {
		fill: none;
	}

	/*-- Point --*/
	.bb-circle._expanded_ {
		fill: var(--color-background);
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 1px;
	}

	.bb-selected-circle {
		fill: var(--color-background);
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 2px;
	}

	/*-- Bar --*/
	.bb-bar {
		stroke-width: 0;
	}
	.bb-bar._expanded_ {
		fill-opacity: 0.75;
	}

	/*-- Regions --*/

	.bb-regions {
		pointer-events: none;
	}

	.bb-region > rect:not([x]) {
		display: none;
	}

	.bb-region.visible-area {
		fill: var(--color-graph-minimap-visibleAreaBackground);
		/* transform: translateY(-4px); */
	}
	.bb-region.visible-area > rect {
		height: 100%;
	}

	.bb-region.marker-result {
		fill: var(--color-graph-minimap-marker-highlights);
		transform: translateX(-1px);
		z-index: 10;
	}
	.bb-region.marker-result > rect {
		width: 2px;
		height: 100%;
	}

	.bb-region.marker-head {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translateX(-1px);
	}
	.bb-region.marker-head > rect {
		width: 1px;
		height: 100%;
	}

	.bb-region.marker-head-arrow-left {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translate(-5px, -1px) skewX(45deg);
	}
	.bb-region.marker-head-arrow-left > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-head-arrow-right {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translate(1px, -1px) skewX(-45deg);
	}
	.bb-region.marker-head-arrow-right > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-upstream {
		fill: var(--color-graph-minimap-marker-upstream);
		stroke: var(--color-graph-minimap-marker-upstream);
		transform: translateX(-1px);
	}
	.bb-region.marker-upstream > rect {
		width: 1px;
		height: 100%;
	}

	.bb-region.marker-branch {
		fill: var(--color-graph-minimap-marker-local-branches);
		stroke: var(--color-graph-minimap-marker-local-branches);
		transform: translate(-2px, 35px);
	}
	.bb-region.marker-branch > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-remote {
		fill: var(--color-graph-minimap-marker-remote-branches);
		stroke: var(--color-graph-minimap-marker-remote-branches);
		transform: translate(-2px, 29px);
	}
	.bb-region.marker-remote > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-stash {
		fill: var(--color-graph-minimap-marker-stashes);
		stroke: var(--color-graph-minimap-marker-stashes);
		transform: translate(-2px, 35px);
	}
	.bb-region.marker-stash > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-tag {
		fill: var(--color-graph-minimap-marker-tags);
		stroke: var(--color-graph-minimap-marker-tags);
		transform: translate(-2px, 29px);
	}
	.bb-region.marker-tag > rect {
		width: 3px;
		height: 3px;
	}

	/*-- Zoom region --*/
	/*
	:host-context(.vscode-dark) .bb-zoom-brush {
		fill: white;
		fill-opacity: 0.2;
	}
	:host-context(.vscode-light) .bb-zoom-brush {
		fill: black;
		fill-opacity: 0.1;
	}
	*/

	/*-- Brush --*/
	/*
	.bb-brush .extent {
		fill-opacity: 0.1;
	}
	*/

	/*-- Button --*/
	/*
	.bb-button {
		position: absolute;
		top: 2px;
		right: 0;

		color: var(--color-button-foreground);

		font-size: var(--font-size);
		font-family: var(--font-family);
	}
	.bb-button .bb-zoom-reset {
		display: inline-block;
		padding: 0.1rem 0.3rem;
		cursor: pointer;
		font-family: 'codicon';
		font-display: block;

		background-color: var(--color-button-background);

		border: 1px solid var(--color-button-background);
		border-radius: 3px;
	}
	*/

	/*-- Tooltip --*/
	.bb-tooltip-container {
		top: unset !important;
		z-index: 10;
		user-select: none;
		min-width: 300px;
	}

	.bb-tooltip {
		display: flex;
		flex-direction: column;
		padding: 0.5rem 1rem;
		background-color: var(--color-hover-background);
		color: var(--color-hover-foreground);
		border: 1px solid var(--color-hover-border);
		box-shadow: 0 2px 8px var(--vscode-widget-shadow);
		font-size: var(--font-size);
		opacity: 1;
		white-space: nowrap;
	}

	.bb-tooltip .header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 1rem;
	}

	.bb-tooltip .header--title {
		font-weight: 600;
	}

	.bb-tooltip .header--description {
		font-weight: normal;
		font-style: italic;
	}

	.bb-tooltip .changes {
		margin: 0.5rem 0;
	}

	.bb-tooltip .refs {
		display: flex;
		font-size: 12px;
		gap: 0.5rem;
		flex-direction: row;
		flex-wrap: wrap;
		margin: 0.5rem 0;
		max-width: fit-content;
	}
	.bb-tooltip .refs:empty {
		margin: 0;
	}

	.bb-tooltip .refs .branch {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-branchBackground);
		border: 1px solid var(--color-graph-minimap-tip-branchBorder);
		color: var(--color-graph-minimap-tip-branchForeground);
	}
	.bb-tooltip .refs .branch.current {
		background-color: var(--color-graph-minimap-tip-headBackground);
		border: 1px solid var(--color-graph-minimap-tip-headBorder);
		color: var(--color-graph-minimap-tip-headForeground);
	}
	.bb-tooltip .refs .remote {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-remoteBackground);
		border: 1px solid var(--color-graph-minimap-tip-remoteBorder);
		color: var(--color-graph-minimap-tip-remoteForeground);
	}
	.bb-tooltip .refs .remote.current {
		background-color: var(--color-graph-minimap-tip-upstreamBackground);
		border: 1px solid var(--color-graph-minimap-tip-upstreamBorder);
		color: var(--color-graph-minimap-tip-upstreamForeground);
	}
	.bb-tooltip .refs .stash {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-stashBackground);
		border: 1px solid var(--color-graph-minimap-tip-stashBorder);
		color: var(--color-graph-minimap-tip-stashForeground);
	}
	.bb-tooltip .refs .tag {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-tagBackground);
		border: 1px solid var(--color-graph-minimap-tip-tagBorder);
		color: var(--color-graph-minimap-tip-tagForeground);
	}

	.bb-event-rects {
		cursor: pointer !important;
	}
`,bh=["marker-result","marker-head-arrow-left","marker-head-arrow-right","marker-head","marker-upstream","marker-branch","marker-stash","marker-remote","marker-tag","visible-area"];let vh=class extends qt{constructor(){super(...arguments),this.dataType="commits"}activeDayChanged(){this.select(this.activeDay)}dataChanged(e,t,o){this._loadTimer&&(clearTimeout(this._loadTimer),this._loadTimer=void 0),o&&(this._regions=void 0,this._markerRegions=void 0),this._loadTimer=setTimeout((()=>this.loadChart()),150)}dataTypeChanged(){this.dataChanged()}markersChanged(){this.dataChanged(void 0,void 0,!0)}searchResultsChanged(){this._chart?.regions.remove({classes:["marker-result"]}),null!=this.searchResults&&this._chart?.regions.add([...this.getSearchResultsRegions(this.searchResults)])}visibleDaysChanged(){this._chart?.regions.remove({classes:["visible-area"]}),null!=this.visibleDays&&this._chart?.regions.add(this.getVisibleAreaRegion(this.visibleDays))}connectedCallback(){super.connectedCallback(),this.dataChanged(void 0,void 0,!1)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=void 0}getInternalChart(){try{return this._chart?.internal}catch{return}}select(e,t=!1){if(null==e)return void this.unselect();const o=this.getData(e);if(null==o)return;const n=this.getInternalChart();if(null!=n&&(n.showGridFocus([o]),!t)){const{index:e}=o;this._chart.$.main.selectAll(`.bb-shape-${e}`).each((function(t){n.toggleShape?.(this,t,e)}))}}unselect(e,t=!1){if(t)this.getInternalChart()?.hideGridFocus();else if(null!=e){const t=this.getIndex(e);if(null==t)return;this._chart?.unselect(void 0,[t])}else this._chart?.unselect()}getData(e){return e=new Date(e).setHours(0,0,0,0),this._chart?.data()[0]?.values.find((t=>("number"==typeof t.x?t.x:t.x.getTime())===e))}getIndex(e){return this.getData(e)?.index}getMarkerRegions(){if(null==this._markerRegions)if(null!=this.markers){const e=dh(this.markers,(([e,t])=>dh(t,(t=>t.current&&"branch"===t.type?[{axis:"x",start:e,end:e,class:"marker-head"},{axis:"x",start:e,end:e,class:"marker-head-arrow-left"},{axis:"x",start:e,end:e,class:"marker-head-arrow-right"}]:[{axis:"x",start:e,end:e,class:t.current&&"remote"===t.type?"marker-upstream":`marker-${t.type}`}]))));this._markerRegions=e}else this._markerRegions=[];return this._markerRegions}getAllRegions(){if(null==this._regions){let e=this.getMarkerRegions();null!=this.visibleDays&&(e=hh([this.getVisibleAreaRegion(this.visibleDays)],e)),null!=this.searchResults&&(e=hh(e,this.getSearchResultsRegions(this.searchResults))),this._regions=[...e].sort(((e,t)=>bh.indexOf(t.class??"")-bh.indexOf(e.class??"")))}return this._regions}getSearchResultsRegions(e){return function*(e,t){for(const o of e)yield t(o)}(e.keys(),(e=>({axis:"x",start:e,end:e,class:"marker-result"})))}getVisibleAreaRegion(e){return{axis:"x",start:e.top,end:e.bottom,class:"visible-area"}}loadChart(){null==this._loading&&(this._loading=this.loadChartCore().then((()=>this._loading=void 0)))}async loadChartCore(){if(!this.data?.size)return this.spinner.setAttribute("aria-hidden","false"),this._chart?.destroy(),void(this._chart=void 0);const e="lines"===this.dataType,t=[],o=[],r=this.data.keys(),i=r[Symbol.iterator]().next().value;const s=new Date,a=new Date(i);let l,c,d,h,u,p=0;const f=s;for(;f>=a;)l=yh(f),c=this.data.get(l),t.push(l),e?(d=c?.activity?.additions??0,u=c?.activity?.deletions??0,h=d+u):h=c?.commits??0,p=Math.max(p,h),o.push(h),f.setDate(f.getDate()-1);const m=this.getAllRegions(),g=[];let b=0,v=0;for(const e of o)0!==e&&(g.push(e),b+=e,v+=e**2);g.sort(((e,t)=>e-t));const y=g.length,w=b/y,C=Math.sqrt(v/y-w**2);let x=-1;for(let e=y-1;e>=0;e--)if(Math.abs((g[e]-w)/C)<=3){x=e;break}const S=g[Math.floor(.25*y)],_=g[Math.floor(.75*y)],T=g[y-1],R=_+3*(_-S),k=g[x],E=Math.floor(Math.min(T,R>T-R?k:R+(k-R)/2)+.1*R);if(null==this._chart){const{bb:e,selection:r,spline:i,zoom:s}=await n.e(490).then(n.bind(n,1893));this._chart=e.generate({bindto:this.chart,data:{x:"date",axes:{activity:"y"},columns:[["date",...t],["activity",...o]],names:{activity:"Activity"},onclick:e=>{if("activity"!==e.id)return;const t=new Date(e.x),o=yh(t),n=this.searchResults?.get(o)?.sha??this.data?.get(o)?.sha;queueMicrotask((()=>{this.$emit("selected",{date:t,sha:n})}))},selection:{enabled:r(),grouped:!0,multiple:!1},colors:{activity:"var(--color-graph-minimap-line0)"},types:{activity:i()}},axis:{x:{inverted:!0,localtime:!0,type:"timeseries"},y:{min:0,max:E}},clipPath:!1,grid:{front:!1,focus:{show:!0}},legend:{show:!1},line:{point:!0,zerobased:!0},padding:{mode:"fit",bottom:-8,left:0,right:0,top:0},point:{show:!0,select:{r:5},focus:{only:!0,expand:{enabled:!0,r:3}},sensitivity:100},regions:m,resize:{auto:!0},spline:{interpolation:{type:"monotone-x"}},tooltip:{contents:(e,t,o,n)=>{const r=new Date(e[0].x),i=this.data?.get(yh(r)),s=this.markers?.get(yh(r));let a;s?.length&&(a=function(e,t){return e.reduce(((e,o)=>{const n=t(o),r=e.get(n);return void 0===r?e.set(n,[o]):r.push(o),e}),new Map)}(s,(e=>e.type)));const l=a?.get("stash")?.length??0,c="lines"===this.dataType;return`<div class="bb-tooltip">\n\t\t\t\t\t\t\t<div class="header">\n\t\t\t\t\t\t\t\t<span class="header--title">${dd(r,"MMMM Do, YYYY")}</span>\n\t\t\t\t\t\t\t\t<span class="header--description">(${function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(cd(r))})</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="changes">\n\t\t\t\t\t\t\t\t<span>${0===(i?.commits??0)?"No commits":`${Ae("commit",i?.commits??0,{format:e=>pd(e),zero:"No"})}${c?`, ${Ae("file",i?.files??0,{format:e=>pd(e),zero:"No"})}, ${Ae("line",(i?.activity?.additions??0)+(i?.activity?.deletions??0),{format:e=>pd(e),zero:"No"})} changed`:""}`}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t${null!=a?`\n\t\t\t\t\t\t\t<div class="refs">${l?`<span class="stash">${Ae("stash",l,{plural:"stashes"})}</span>`:""}${a?.get("branch")?.sort(((e,t)=>(e.current?-1:1)-(t.current?-1:1))).map((e=>`<span class="branch${e.current?" current":""}">${e.name}</span>`)).join("")??""}</div>\n\t\t\t\t\t\t\t<div class="refs">${a?.get("remote")?.sort(((e,t)=>(e.current?-1:1)-(t.current?-1:1)))?.map((e=>`<span class="remote${e.current?" current":""}">${e.name}</span>`)).join("")??""}${a?.get("tag")?.map((e=>`<span class="tag">${e.name}</span>`)).join("")??""}</div>`:""}\n\t\t\t\t\t\t</div>`},grouped:!0,position:(e,t,o,n,r)=>{let{x:i}=r;const s=n.getBoundingClientRect();return i+t>s.right&&(i=s.right-t),{top:0,left:i}}},transition:{duration:0},zoom:{enabled:s(),rescale:!1,type:"wheel",onzoom:de((()=>this.activeDayChanged()),250)},onafterinit:function(){const e=this.$.main.selectAll(".bb-axis-x").node();e?.remove();const t=this.$.main.selectAll(".bb-axis-y").node();t?.remove();const o=this.$.main.selectAll(".bb-grid").node();try{o?.removeAttribute("clip-path")}catch{}const n=this.$.main.selectAll(".bb-regions").node(),r=this.$.main.selectAll(".bb-chart").node();null!=n&&null!=r&&r.insertAdjacentElement("afterend",n)}})}else this._chart.load({columns:[["date",...t],["activity",...o]]}),this._chart.axis.max({y:E}),this._chart.regions(m);this.spinner.setAttribute("aria-hidden","true"),this.activeDayChanged()}};function yh(e){return new Date(e).setHours(0,0,0,0)}fh([wt],vh.prototype,"activeDay",2),fh([wt],vh.prototype,"data",2),fh([He({singleLine:!0})],vh.prototype,"dataChanged",1),fh([wt],vh.prototype,"dataType",2),fh([wt],vh.prototype,"markers",2),fh([wt],vh.prototype,"searchResults",2),fh([wt],vh.prototype,"visibleDays",2),fh([He({singleLine:!0})],vh.prototype,"loadChartCore",1),vh=fh([Kt({name:"graph-minimap",template:mh,styles:gh})],vh);const wh=Ja(vh,{tagName:"graph-minimap",events:{onSelected:"selected"}}),Ch=e=>(t,o)=>function(e,t="absolute",o="short+short",n){switch(n){case nt.CommitDateTimeSources.Tooltip:return`${dd(e,o)} (${cd(e)})`;case nt.CommitDateTimeSources.RowEntry:default:return"relative"===t?cd(e):dd(e,o)}}(t,e?.dateStyle,e?.dateFormat,o),xh=(()=>{const t={};return["head","remote","remote-github","remote-githubEnterprise","remote-gitlab","remote-gitlabSelfHosted","remote-bitbucket","remote-bitbucketServer","remote-azureDevops","tag","stash","check","loading","warning","added","modified","deleted","renamed","resolved","pull-request","show","hide","branch","graph","commit","author","datetime","message","changes","files"].forEach((o=>{t[o]=(0,e.createElement)("span",{className:`graph-icon icon--${o}`})})),["upstream-ahead","upstream-behind"].forEach((o=>{t[o]=(0,e.createElement)("span",{className:`graph-icon mini-icon icon--${o}`})})),t.settings=(0,e.createElement)("span",{className:"graph-icon icon--settings",style:{fontSize:"1.1rem",right:"0px",top:"-1px"}}),t})(),Sh=e=>xh[e],_h=(()=>{switch(qa?"web-windows":Za?"web-macOS":Va?"web-linux":"web"){case"web-macOS":return"darwin";case"web-windows":return"win32";default:return"linux"}})();function Th({subscriber:o,nonce:n,state:r,onChooseRepository:i,onColumnsChange:s,onDimMergeCommits:a,onDoubleClickRef:l,onDoubleClickRow:c,onEnsureRowPromise:d,onMissingAvatars:h,onMissingRefsMetadata:u,onMoreRows:p,onRefsVisibilityChange:f,onSearch:m,onSearchPromise:g,onSearchOpenInView:b,onSelectionChange:v,onExcludeType:y,onIncludeOnlyRef:w,onUpdateGraphConfiguration:C}){const x=(0,e.useRef)(null),[S,_]=(0,e.useState)(r.rows??[]),[T,R]=(0,e.useState)(r.rowsStats),[D,$]=(0,e.useState)(r.rowsStatsLoading),[G,W]=(0,e.useState)(r.avatars),[U,j]=(0,e.useState)(r.downstreams??{}),[V,Z]=(0,e.useState)(r.refsMetadata),[q,K]=(0,e.useState)(r.repositories??[]),[Y,X]=(0,e.useState)(q.find((e=>e.path===r.selectedRepository))),[Q,J]=(0,e.useState)(r.branchState),[ee,te]=(0,e.useState)(r.selectedRows),[oe,ne]=(0,e.useState)(r.activeRow),[re,ie]=(0,e.useState)(r.activeDay),[se,ae]=(0,e.useState)(r.visibleDays),[le,ce]=(0,e.useState)(r.config),[de,he]=(0,e.useState)(r.columns),[ue,pe]=(0,e.useState)(r.excludeRefs),[fe,me]=(0,e.useState)(r.excludeTypes),[ge,be]=(0,e.useState)(r.includeOnlyRefs),[ve,ye]=(0,e.useState)(r.context),[we,Ce]=(0,e.useState)(r.paging?.hasMore??!1),[xe,Se]=(0,e.useState)(r.loading),[_e,Te]=(0,e.useState)(r.theming),[Re,ke]=(0,e.useState)(r.branchName),[Ee,Oe]=(0,e.useState)(r.lastFetched),[Ie,Me]=(0,e.useState)(r.windowFocused),[De,$e]=(0,e.useState)(r.allowed??!1),[Ne,Pe]=(0,e.useState)(r.subscription),ze=(0,e.useRef)(null),[He,Le]=(0,e.useState)(void 0),{results:Ge,resultsError:Fe}=Ih(r),[Be,We]=(0,e.useState)(Ge),[Ue,je]=(0,e.useState)(Fe),[Ve,Ze]=(0,e.useState)(!1),[qe,Ke]=(0,e.useState)(!1),[Ye,Xe]=(0,e.useState)(r.workingTreeStats??{added:0,modified:0,deleted:0}),Qe=(0,e.useRef)(void 0),Je=(0,e.useRef)(new Set),et=(0,e.useRef)(new Set);function tt(e,t,o){switch(o&&Te(e.theming),t){case"didChangeTheme":o||Te(e.theming);break;case O:W(e.avatars);break;case N:Me(e.windowFocused);break;case I:Z(e.refsMetadata);break;case M:he(e.columns),ye(e.context);break;case P:_(e.rows??[]),R(e.rowsStats),$(e.rowsStatsLoading),te(e.selectedRows),W(e.avatars),j(e.downstreams??{}),Z(e.refsMetadata),Ce(e.paging?.hasMore??!1),Se(e.loading);break;case z:R(e.rowsStats),$(e.rowsStatsLoading);break;case F:{const{results:t,resultsError:o}=Ih(e);je(o),We(t),te(e.selectedRows),Ke(!1);break}case k:ce(e.config);break;case H:te(e.selectedRows);break;case A:pe(e.excludeRefs),me(e.excludeTypes),be(e.includeOnlyRefs);break;case E:$e(e.allowed??!1),Pe(e.subscription);break;case L:Xe(e.workingTreeStats??{added:0,modified:0,deleted:0});break;case B:Oe(e.lastFetched);break;default:{$e(e.allowed??!1),o||Te(e.theming),ke(e.branchName),Oe(e.lastFetched),he(e.columns),_(e.rows??[]),R(e.rowsStats),$(e.rowsStatsLoading),Xe(e.workingTreeStats??{added:0,modified:0,deleted:0}),ce(e.config),te(e.selectedRows),pe(e.excludeRefs),me(e.excludeTypes),be(e.includeOnlyRefs),ye(e.context),W(e.avatars??{}),j(e.downstreams??{}),J(e.branchState),Z(e.refsMetadata),Ce(e.paging?.hasMore??!1),K(e.repositories??[]),X(q.find((t=>t.path===e.selectedRepository))),Pe(e.subscription);const{results:t,resultsError:n}=Ih(e);je(n),We(t),Se(e.loading);break}}}(0,e.useEffect)((()=>o?.(tt)),[]);const ot=e=>{if("Enter"===e.key||" "===e.key){const t=Oh(oe??r.activeRow)?.id;if(null==t)return;const o=x.current?.graphContainerRef.current;if(!e.composedPath().some((e=>e===o)))return;const n=S.find((e=>e.sha===t));if(null==n)return;c?.(n,"Enter"!==e.key)}};(0,e.useEffect)((()=>(window.addEventListener("keydown",ot),()=>{window.removeEventListener("keydown",ot)})),[oe]);const it=(0,e.useMemo)((()=>{if(!le?.minimap)return;const e="lines"===(le?.minimapDataType??"commits");if(e&&null==T)return;const t=new Map,o=new Map,n=le?.minimapMarkerTypes??[];let r,i,s,a,l,c,d,h,u,p,f={head:void 0,branch:void 0,remote:void 0,tag:void 0};for(let m=S.length-1;m>=0;m--)h=S[m],r=Mh(h.date),r!==i&&(i=r,f={head:void 0,branch:void 0,remote:void 0,tag:void 0}),h.heads?.length&&(n.includes("head")||n.includes("localBranches"))&&(f.branch=h.sha,a=[],h.heads.forEach((e=>{e.isCurrentHead&&(f.head=h.sha),(n.includes("localBranches")||n.includes("head")&&e.isCurrentHead)&&a.push({type:"branch",name:e.name,current:e.isCurrentHead&&n.includes("head")})})),s=o.get(r),null==s?o.set(r,a):s.push(...a)),h.remotes?.length&&(n.includes("upstream")||n.includes("remoteBranches")||n.includes("localBranches"))&&(f.remote=h.sha,l=[],h.remotes.forEach((e=>{let t=!1;const o=U?.[`${e.owner}/${e.name}`]?.length;e.current&&(f.remote=h.sha,t=!0),(n.includes("remoteBranches")||n.includes("upstream")&&t||n.includes("localBranches")&&o)&&l.push({type:"remote",name:`${e.owner}/${e.name}`,current:t&&n.includes("upstream")})})),s=o.get(r),null==s?o.set(r,l):s.push(...l)),"stash-node"===h.type&&n.includes("stashes")&&(c={type:"stash",name:h.message},s=o.get(r),null==s?o.set(r,[c]):s.push(c)),h.tags?.length&&n.includes("tags")&&(f.tag=h.sha,d=h.tags.map((e=>({type:"tag",name:e.name}))),s=o.get(r),null==s?o.set(r,d):s.push(...d)),u=t.get(r),null==u?e?(p=T[h.sha],null!=p&&(u={activity:{additions:p.additions,deletions:p.deletions},commits:1,files:p.files,sha:h.sha},t.set(r,u))):(u={commits:1,sha:h.sha},t.set(r,u)):(u.commits++,u.sha=f.head??f.branch??f.remote??f.tag??u.sha,e&&(p=T[h.sha],null!=p&&(null==u.activity?u.activity={additions:p.additions,deletions:p.deletions}:(u.activity.additions+=p.additions,u.activity.deletions+=p.deletions),u.files=(u.files??0)+p.files)));return{stats:t,markers:o}}),[S,T,U,le?.minimap,le?.minimapDataType,le?.minimapMarkerTypes]),st=(0,e.useMemo)((()=>{if(!le?.minimap||!le.minimapMarkerTypes?.includes("highlights"))return;const e=new Map;if(null!=Be?.ids){let t,o,n,r;for([o,n]of Object.entries(Be.ids))t=Mh(n.date),r=e.get(t),null==r&&e.set(t,{type:"search-result",sha:o})}return e}),[Be,le?.minimap,le?.minimapMarkerTypes]),at=e=>{if(null==le?.minimapMarkerTypes)return;const t=e.target,o=t.value;if(t.checked){if(!le.minimapMarkerTypes.includes(o)){const e=[...le.minimapMarkerTypes,o];ce({...le,minimapMarkerTypes:e}),C?.({minimapMarkerTypes:e})}}else{const e=le.minimapMarkerTypes.indexOf(o);if(-1!==e){const t=[...le.minimapMarkerTypes];t.splice(e,1),ce({...le,minimapMarkerTypes:t}),C?.({minimapMarkerTypes:t})}}};(0,e.useEffect)((()=>{null==Ue&&null!=Be&&0!==Be.count&&null!=He&&ze.current?.logSearch(He)}),[Be]);const lt=(0,e.useMemo)((()=>{if(null==Be?.ids||!He?.query)return 0;const e=Oh(oe)?.id;let t=e?Be.ids[e]?.i:void 0;return null==t&&([t]=Rh(Be,He,oe)),t<1?1:t+1}),[oe,Be]),ct=(0,e.useMemo)((()=>null==ge||0===Object.keys(ge).length),[ge]),dt=(0,e.useMemo)((()=>!ct||null!=fe&&Object.values(fe).includes(!0)),[fe,ct,le?.dimMergeCommits]),ht=(0,e.useMemo)((()=>!ct),[ct]),ut=async e=>{if(null==d)return e;if(Je.current.has(e))return e;if(et.current.has(e))return;let t=setTimeout((()=>{t=void 0,Se(!0)}),500);const o=await d(e,!1);if(null==t?Se(!1):clearTimeout(t),o?.id===e)return Je.current.add(e),e;null!=o&&et.current.add(e)},pt=e=>{const t=e.target,o=t.value;if(!["branch-all","branch-current"].includes(o)&&!["remotes","stashes","tags","mergeCommits"].includes(o))return;const n=t.checked;if("mergeCommits"===o)return void a?.(n);const r=o,i=fe?.[r];(null==i&&n||null!=i&&i!==n)&&(me({...fe,[r]:n}),y?.(r,n))};return t().createElement(t().Fragment,null,t().createElement("header",{className:"titlebar graph-app__header"},t().createElement("div",{className:"titlebar__row titlebar__row--wrap"+(De?Y&&Q?.provider?.url?"":" no-remote-provider":" disallowed")},Y&&Q?.provider?.url&&t().createElement("a",{href:Q.provider.url,className:"action-button",style:{marginRight:"-0.5rem"},title:`Open Repository on ${Q.provider.name}`,"aria-label":`Open Repository on ${Q.provider.name}`},t().createElement("span",{className:"cloud"===Q.provider.icon?"codicon codicon-cloud action-button__icon":`glicon glicon-provider-${Q.provider.icon} action-button__icon`,"aria-hidden":"true"})),t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Switch to Another Repository...","aria-label":"Switch to Another Repository...",disabled:q.length<2,onClick:()=>{i?.()}},Y?.formattedName??"none selected",q.length>1&&t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),De&&Y&&t().createElement(t().Fragment,null,t().createElement("span",null,t().createElement("span",{className:"codicon codicon-chevron-right"})),t().createElement("a",{href:Ka("gitlens.graph.switchToAnotherBranch",r.webviewId,r.webviewInstanceId),className:"action-button",title:"Switch to Another Branch...","aria-label":"Switch to Another Branch..."},Re,t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement("span",null,t().createElement("span",{className:"codicon codicon-chevron-right"})),(()=>{const e=Ee&&new Date(Ee),o=e&&0!==e.getTime()?cd(e):void 0;let n="fetch",i="sync",s="Fetch",a=!1,l=!1,c="",d="Fetch from",h="remote";if(Q){a=Q.behind>0,l=Q.ahead>0;const e=`Branch ${Re} is`;h=`${Q.upstream}${Q.provider?.name?` on ${Q.provider?.name}`:""}`,a?(n="pull",i="arrow-down",s="Pull",c=`Pull from ${h}\n${e} ${Ae("commit",Q.behind)} behind of`):l&&(n="push",i="arrow-up",s="Push",c=`Push to ${h}\n${e} ${Ae("commit",Q.ahead)} ahead of`),c+=` ${h}`,d+=` ${h}`}if(null!=o){const e=`\nLast fetched ${o}`;c+=e,d+=e}return t().createElement("div",{className:"titlebar__group"},(a||l)&&t().createElement("a",{href:Ka(`gitlens.graph.${n}`,r.webviewId,r.webviewInstanceId),className:`action-button${a?" is-behind":""}${l?" is-ahead":""}`,title:c},t().createElement("span",{className:`codicon codicon-${i} action-button__icon`}),s,(l||a)&&t().createElement("span",null,t().createElement("span",{className:"pill action-button__pill"},l&&t().createElement("span",null,Q.ahead," ",t().createElement("span",{className:"codicon codicon-arrow-up"})),a&&t().createElement("span",null,Q.behind," ",t().createElement("span",{className:"codicon codicon-arrow-down"}))))),t().createElement("a",{href:Ka("gitlens.graph.fetch",r.webviewId,r.webviewInstanceId),className:"action-button",title:d},t().createElement("span",{className:"codicon codicon-sync action-button__icon"}),"Fetch",o&&t().createElement("span",{className:"action-button__small"},"(",o,")")))})()),t().createElement(Gd,{subscription:Ne}),t().createElement("div",{className:"popover"},t().createElement("a",{href:"command:gitlens.showFocusPage",className:"action-button popover__trigger"},"Try the Focus Preview"),t().createElement(Fl,{placement:"top end",className:"popover__content"},"Bring all of your GitHub pull requests and issues into a unified actionable to help to you more easily juggle work in progress, pending work, reviews, and more"))),De&&t().createElement("div",{className:"titlebar__row"},t().createElement("div",{className:"titlebar__group"},t().createElement(Nl,null,t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Filter Graph"},t().createElement("span",{className:"codicon codicon-filter"+(dt?"-filled":"")}),ht&&t().createElement("span",{className:"action-button__indicator"}),t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement(Tl,{slot:"content"},t().createElement(_l,null,"Filter options"),t().createElement(Sl,{role:"none"},t().createElement(Wa,{orientation:"vertical",value:ct&&!0!==Y?.isVirtual?"branch-all":"branch-current",readOnly:!0===Y?.isVirtual},!0!==Y?.isVirtual&&t().createElement(Ba,{name:"branching-toggle",value:"branch-all",onChange:e=>{const t=e.target,o=t.value,n=t.checked,r="branch-all"===o&&n;ct!==r&&w?.(r)}},"Show All Branches"),t().createElement(Ba,{name:"branching-toggle",value:"branch-current"},"Show Current Branch Only"))),t().createElement(xl,null),!0!==Y?.isVirtual&&t().createElement(t().Fragment,null,t().createElement(Sl,{role:"none"},t().createElement(Fa,{value:"remotes",onChange:pt,defaultChecked:fe?.remotes??!1},"Hide Remote-only Branches")),t().createElement(Sl,{role:"none"},t().createElement(Fa,{value:"stashes",onChange:pt,defaultChecked:fe?.stashes??!1},"Hide Stashes"))),t().createElement(Sl,{role:"none"},t().createElement(Fa,{value:"tags",onChange:pt,defaultChecked:fe?.tags??!1},"Hide Tags")),t().createElement(xl,null),t().createElement(Sl,{role:"none"},t().createElement(Fa,{value:"mergeCommits",onChange:pt,defaultChecked:le?.dimMergeCommits??!1},"Dim Merge Commit Rows")))),t().createElement("span",null,t().createElement("span",{className:"action-divider"})),t().createElement(ch,{ref:ze,label:"Search Commits",step:lt,total:Be?.count??0,valid:Boolean(He?.query&&He.query.length>2),more:Be?.paging?.hasMore??!1,searching:qe,value:He?.query??"",errorMessage:Ue?.error??"",resultsHidden:Ve,resultsLoaded:null!=Be,onChange:e=>(e=>{const t=e.detail;Le(t);const o=t.query.length>=3;We(void 0),je(void 0),Ze(!1),Ke(o),m?.(o?t:void 0)})(e),onNavigate:e=>(async e=>{if(null==Be)return;const t=e.detail?.direction??"next";let o,n,r,i=Be,s=i.count;"first"===t?(r=!1,o=0):"last"===t?(r=!1,o=-1):(r="next"===t,[o,n]=Rh(i,He,oe,r));let a=0;for(;a<1e3;){if(a++,-1==o)if(r)if(null!=He&&i?.paging?.hasMore){let e;Ke(!0);try{e=await(g?.(He,{more:!0}))}finally{Ke(!1)}null==e?.results||"error"in e.results?o=0:s<e.results.count?(i=e.results,o=s,s=i.count):o=0}else o=0;else if("last"===t&&null!=He&&i?.paging?.hasMore){let e;Ke(!0);try{e=await(g?.(He,{limit:0,more:!0}))}finally{Ke(!1)}null==e?.results||"error"in e.results||(s<e.results.count&&(i=e.results,s=i.count),o=s)}else o=s-1;if(n=n??Eh(i,o),null!=n&&(n=await ut(n),null!=n))break;Ze(!0),o=kh(o,r,i,He)}null!=n&&queueMicrotask((()=>x.current?.selectCommits([n],!1,!0)))})(e),onOpenInView:()=>{null!=He&&b?.(He)}}),t().createElement("span",null,t().createElement("span",{className:"action-divider"})),t().createElement("span",{className:"button-group"},t().createElement("button",{type:"button",role:"checkbox",className:"action-button",title:"Toggle Minimap","aria-label":"Toggle Minimap","aria-checked":le?.minimap??!1,onClick:e=>{C?.({minimap:!le?.minimap})}},t().createElement("span",{className:"codicon codicon-graph-line action-button__icon"})),t().createElement(Nl,{position:"right"},t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Minimap Options"},t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement(Tl,{slot:"content"},t().createElement(_l,null,"Chart"),t().createElement(Sl,{role:"none"},t().createElement(Wa,{orientation:"vertical",value:le?.minimapDataType??"commits"},t().createElement(Ba,{name:"minimap-datatype",value:"commits",onChange:e=>{if(null==le)return;const t=e.target;if("commits"===t.value){const e=t.checked?"commits":"lines";if(le.minimapDataType===e)return;ce({...le,minimapDataType:e}),C?.({minimapDataType:e})}}},"Commits"),t().createElement(Ba,{name:"minimap-datatype",value:"lines"},"Lines Changed"))),t().createElement(xl,null),t().createElement(_l,null,"Markers"),t().createElement(Sl,{role:"none"},t().createElement(Fa,{value:"localBranches",onChange:at,defaultChecked:le?.minimapMarkerTypes?.includes("localBranches")??!1},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"localBranches"}),"Local Branches")),t().createElement(Sl,{role:"none"},t().createElement(Fa,{value:"remoteBranches",onChange:at,defaultChecked:le?.minimapMarkerTypes?.includes("remoteBranches")??!0},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"remoteBranches"}),"Remote Branches")),t().createElement(Sl,{role:"none"},t().createElement(Fa,{value:"stashes",onChange:at,defaultChecked:le?.minimapMarkerTypes?.includes("stashes")??!1},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"stashes"}),"Stashes")),t().createElement(Sl,{role:"none"},t().createElement(Fa,{value:"tags",onChange:at,defaultChecked:le?.minimapMarkerTypes?.includes("tags")??!0},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"tags"}),"Tags"))))))),t().createElement("div",{className:"progress-container infinite"+(xe||D?" active":""),role:"progressbar"},t().createElement("div",{className:"progress-bar"}))),t().createElement(Ad,{className:"graph-app__gate",appearance:"alert",state:Ne?.state,visible:!De},t().createElement("p",{slot:"feature"},"Helps you easily visualize your repository and keep track of all work in progress.",t().createElement("br",null),t().createElement("br",null),"Use the rich commit search to find exactly what you're looking for. It's powerful filters allow you to search by a specific commit, message, author, a changed file or files, or even a specific code change.")),le?.minimap&&t().createElement(wh,{ref:Qe,activeDay:re,data:it?.stats,dataType:le?.minimapDataType??"commits",markers:it?.markers,searchResults:st,visibleDays:se,onSelected:e=>(e=>{let{sha:t}=e.detail;if(null==t){const o=e.detail.date?.getTime();if(null==o)return;t=S.reduce(((e,t)=>Math.abs(t.date-o)<Math.abs(e.date-o)?t:e)).sha}x.current?.selectCommits([t],!1,!0)})(e)}),t().createElement("main",{id:"main",className:"graph-app__main","aria-hidden":!De},void 0!==Y?t().createElement(t().Fragment,null,t().createElement(rt(),{ref:x,avatarUrlByEmail:G,columnsSettings:de,contexts:ve,cssVariables:_e?.cssVariables,dimMergeCommits:le?.dimMergeCommits,downstreamsByUpstream:U,enabledRefMetadataTypes:le?.enabledRefMetadataTypes,enabledScrollMarkerTypes:le?.scrollMarkerTypes,enableShowHideRefsOptions:!0,enableMultiSelection:le?.enableMultiSelection,excludeRefsById:ue,excludeByType:fe,formatCommitDateTime:Ch(le),getExternalIcon:Sh,graphRows:S,hasMoreCommits:we,highlightedShas:Be?.ids,highlightRowsOnRefHover:le?.highlightRowsOnRefHover,includeOnlyRefsById:ge,scrollRowPadding:le?.scrollRowPadding,showGhostRefsOnRowHover:le?.showGhostRefsOnRowHover,showRemoteNamesOnRefs:le?.showRemoteNamesOnRefs,isContainerWindowFocused:Ie,isLoadingRows:xe,isSelectedBySha:ee,nonce:n,onColumnResized:(e,t)=>{t.width&&s?.({[e]:{width:t.width,isHidden:t.isHidden,mode:t.mode,order:t.order}})},onDoubleClickGraphRow:(e,t,o)=>{t!==nt.refZone&&c?.(o,!0)},onDoubleClickGraphRef:(e,t,o,n)=>{t.length>0&&l?.(t[0],n)},onGraphColumnsReOrdered:e=>{const t={};for(const[o,n]of Object.entries(e))t[o]={...n};s?.(t)},onGraphMouseLeave:Qe.current?e=>{Qe.current?.unselect(void 0,!0)}:void 0,onGraphRowHovered:Qe.current?(e,t,o)=>{t!==nt.refZone&&null!=Qe.current&&Qe.current?.select(o.date,!0)}:void 0,onSettingsClick:e=>{const t=e.nativeEvent,o=new MouseEvent("contextmenu",{bubbles:!0,clientX:t.clientX,clientY:t.clientY});t.target?.dispatchEvent(o),t.stopImmediatePropagation()},onSelectGraphRows:e=>{const t=e[0],o=null!=t?`${t.sha}|${t.date}`:void 0;r.activeRow=o,ne(o),ie(t?.date),v?.(e)},onToggleRefsVisibilityClick:(e,t,o)=>{f?.(t,o)},onEmailsMissingAvatarUrls:e=>{h?.(e)},onRefsMissingMetadata:e=>{u?.(e)},onShowMoreCommits:()=>{Se(!0),p?.()},onGraphVisibleRowsChanged:Qe.current?(e,t)=>{ae({top:new Date(e.date).setHours(23,59,59,999),bottom:new Date(t.date).setHours(0,0,0,0)})}:void 0,platform:_h,refMetadataById:V,rowsStats:T,rowsStatsLoading:D,shaLength:le?.idLength,themeOpacityFactor:_e?.themeOpacityFactor,useAuthorInitialsForAvatars:!le?.avatars,workDirStats:Ye})):t().createElement("p",null,"No repository is selected")))}function Rh(e,t,o,n=!0){if(null==e.ids)return[0,void 0];const r=Oh(o),i=r?.id;if(null==i)return[0,void 0];let s,a,l;const c=e.ids[i];if(null!=c&&(s=c.i,a=i,l=s),null==s){const t=null!=r?.date?r.date+(n?1:-1):void 0;if(null==t)return[0,void 0];let o,i,c,d;for([i,{date:c,i:o}]of Object.entries(e.ids))n?c<t&&(null==d||c>d)&&(a=i,d=c,l=o):c>t&&(null==d||c<=d)&&(a=i,d=c,l=o);s=null==l?e.count-1:l+(n?-1:1)}return s=kh(s,n,e,t),s===l?[s,a]:[s,void 0]}function kh(e,t,o,n){return t?e<o.count-1?e++:e=null!=n&&o?.paging?.hasMore?-1:0:e>0?e--:e=null!=n&&o?.paging?.hasMore?-1:o.count-1,e}function Eh(e,t){const{ids:o}=e;for(const e in o)if(o[e].i===t)return e}function Oh(e){if(null==e)return;const[t,o]=e.split("|");return{id:t,date:Number(o)}}function Ih(e){let t,o;return null!=e.searchResults&&("error"in e.searchResults?o=e.searchResults:t=e.searchResults),{results:t,resultsError:o}}function Mh(e){return new Date(e).setHours(0,0,0,0)}var Dh=Object.defineProperty,$h=Object.getOwnPropertyDescriptor;const Nh=new Map([["--vscode-gitlens-graphLane1Color","#15a0bf"],["--vscode-gitlens-graphLane2Color","#0669f7"],["--vscode-gitlens-graphLane3Color","#8e00c2"],["--vscode-gitlens-graphLane4Color","#c517b6"],["--vscode-gitlens-graphLane5Color","#d90171"],["--vscode-gitlens-graphLane6Color","#cd0101"],["--vscode-gitlens-graphLane7Color","#f25d2e"],["--vscode-gitlens-graphLane8Color","#f2ca33"],["--vscode-gitlens-graphLane9Color","#7bd938"],["--vscode-gitlens-graphLane10Color","#2ece9d"]]);class Ah extends ot{constructor(){super("GraphApp")}onBind(){const e=super.onBind?.()??[];this.log("onBind()"),this.ensureTheming(this.state);const n=document.getElementById("root");return null!=n&&((0,o.render)(t().createElement(Th,{nonce:this.state.nonce,state:this.state,subscriber:e=>this.registerUpdateStateCallback(e),onColumnsChange:de((e=>this.onColumnsChanged(e)),250),onDimMergeCommits:e=>this.onDimMergeCommits(e),onRefsVisibilityChange:(e,t)=>this.onRefsVisibilityChanged(e,t),onChooseRepository:de((()=>this.onChooseRepository()),250),onDoubleClickRef:(e,t)=>this.onDoubleClickRef(e,t),onDoubleClickRow:(e,t)=>this.onDoubleClickRow(e,t),onMissingAvatars:(...e)=>this.onGetMissingAvatars(...e),onMissingRefsMetadata:(...e)=>this.onGetMissingRefsMetadata(...e),onMoreRows:(...e)=>this.onGetMoreRows(...e),onSearch:de(((e,t)=>this.onSearch(e,t)),250),onSearchPromise:(...e)=>this.onSearchPromise(...e),onSearchOpenInView:(...e)=>this.onSearchOpenInView(...e),onSelectionChange:de((e=>this.onSelectionChanged(e)),250),onEnsureRowPromise:this.onEnsureRowPromise.bind(this),onExcludeType:this.onExcludeType.bind(this),onIncludeOnlyRef:this.onIncludeOnlyRef.bind(this),onUpdateGraphConfiguration:this.onUpdateGraphConfiguration.bind(this)}),n),e.push({dispose:()=>(0,o.unmountComponentAtNode)(n)})),e}onMessageReceived(e){const t=Ie();switch(e.method){case R.method:l(R,e,((e,t)=>{this.setState({...this.state,...e.state},t)}));break;case B.method:l(B,e,((e,t)=>{this.state.lastFetched=e.lastFetched,this.setState(this.state,t)}));break;case O.method:l(O,e,((e,t)=>{this.state.avatars=e.avatars,this.setState(this.state,t)}));break;case $.method:l($,e,(e=>{window.dispatchEvent(new CustomEvent(e.focused?"webview-focus":"webview-blur"))}));break;case N.method:l(N,e,((e,t)=>{this.state.windowFocused=e.focused,this.setState(this.state,t)}));break;case M.method:l(M,e,((e,t)=>{this.state.columns=e.columns,this.state.context={...this.state.context,header:e.context,settings:e.settingsContext},this.setState(this.state,t)}));break;case A.method:l(A,e,((e,t)=>{this.state.excludeRefs=e.excludeRefs,this.state.excludeTypes=e.excludeTypes,this.state.includeOnlyRefs=e.includeOnlyRefs,this.setState(this.state,t)}));break;case I.method:l(I,e,((e,t)=>{this.state.refsMetadata=e.metadata,this.setState(this.state,t)}));break;case P.method:l(P,e,((e,o)=>{let n;if(e.rows.length&&null!=e.paging?.startingCursor&&null!=this.state.rows){const o=this.state.rows,r=o[o.length-1]?.sha;let i=o.length;const s=e.rows.length;if(this.log(t,`paging in ${s} rows into existing ${i} rows at ${e.paging.startingCursor} (last existing row: ${r})`),n=[],n.length=i+s,e.paging.startingCursor!==r){this.log(t,`searching for ${e.paging.startingCursor} in existing rows`);let r,a=0;for(r of o)if(n[a++]=r,r.sha===e.paging.startingCursor){this.log(t,`found ${e.paging.startingCursor} in existing rows`),i=a,i!==o.length&&(n.length=i+s);break}}else for(let e=0;e<i;e++)n[e]=o[e];for(let t=0;t<s;t++)n[i+t]=e.rows[t]}else this.log(t,`setting to ${e.rows.length} rows`),n=0===e.rows.length?this.state.rows:e.rows;this.state.avatars=e.avatars,this.state.downstreams=e.downstreams,void 0!==e.refsMetadata&&(this.state.refsMetadata=e.refsMetadata),this.state.rows=n,this.state.paging=e.paging,null!=e.rowsStats&&(this.state.rowsStats={...this.state.rowsStats,...e.rowsStats}),this.state.rowsStatsLoading=e.rowsStatsLoading,null!=e.selectedRows&&(this.state.selectedRows=e.selectedRows),this.state.loading=!1,this.setState(this.state,o),function(e,t,o){null!=e&&(e.exitDetails=t,null!=o&&(e.exitFailed=o))}(t,` • rows=${this.state.rows?.length??0}`)}));break;case z.method:l(z,e,((e,t)=>{this.state.rowsStats={...this.state.rowsStats,...e.rowsStats},this.state.rowsStatsLoading=e.rowsStatsLoading,this.setState(this.state,t)}));break;case D.method:l(D,e,((e,t)=>{this.state.context={...this.state.context,settings:e.context},this.setState(this.state,t)}));break;case F.method:l(F,e,((e,t)=>{this.state.searchResults=e.results,null!=e.selectedRows&&(this.state.selectedRows=e.selectedRows),this.setState(this.state,t)}));break;case H.method:l(H,e,((e,t)=>{this.state.selectedRows=e.selection,this.setState(this.state,t)}));break;case k.method:l(k,e,((e,t)=>{this.state.config=e.config,this.setState(this.state,t)}));break;case E.method:l(E,e,((e,t)=>{this.state.subscription=e.subscription,this.state.allowed=e.allowed,this.setState(this.state,t)}));break;case L.method:l(L,e,((e,t)=>{this.state.workingTreeStats=e.stats,this.setState(this.state,t)}));break;default:super.onMessageReceived?.(e)}}onThemeUpdated(e){const t=document.documentElement.style;t.setProperty("--graph-theme-opacity-factor",e.isLightTheme?"0.5":"1"),t.setProperty("--color-graph-actionbar-background",e.isLightTheme?j(e.colors.background,5):V(e.colors.background,5)),t.setProperty("--color-graph-background",e.isLightTheme?j(e.colors.background,5):V(e.colors.background,5)),t.setProperty("--color-graph-background2",e.isLightTheme?j(e.colors.background,10):V(e.colors.background,10));const o=J("--color-graph-text-selected-row",e.computedStyle);t.setProperty("--color-graph-text-dimmed-selected",Z(o,50)),t.setProperty("--color-graph-text-dimmed",Z(e.colors.foreground,20)),t.setProperty("--color-graph-text-normal",Z(e.colors.foreground,85)),t.setProperty("--color-graph-text-secondary",Z(e.colors.foreground,65)),t.setProperty("--color-graph-text-disabled",Z(e.colors.foreground,50));const n=te.from(e.colors.background),r=te.from(e.colors.foreground),i=n.getRelativeLuminance(),s=r.getRelativeLuminance(),a=e=>{let t,o;s>i?(o=s,t=i):(t=s,o=i);return e/1*(o-t)+t};let l=te.fromCssVariable("--vscode-scrollbarSlider-background",e.computedStyle);t.setProperty("--color-graph-minimap-visibleAreaBackground",l.luminance(a(e.isLightTheme?.6:.1)).toString()),e.isLightTheme||(l=te.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBackground",l.luminance(a(.55)).toString()),l=te.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBorder",l.luminance(a(.55)).toString()),l=te.fromCssVariable("--vscode-editor-foreground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchForeground",l.isLighter()?l.luminance(.01).toString():l.luminance(.99).toString()),l=te.fromCssVariable("--vscode-editor-foreground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-headForeground",l.isLighter()?l.luminance(.01).toString():l.luminance(.99).toString()),l=te.fromCssVariable("--vscode-editor-foreground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-upstreamForeground",l.isLighter()?l.luminance(.01).toString():l.luminance(.99).toString()));const c=a(e.isLightTheme?.72:.064),d=a(e.isLightTheme?.64:.076),h=a(e.isLightTheme?.92:.02);l=te.fromCssVariable("--branch-status-ahead-foreground",e.computedStyle),t.setProperty("--branch-status-ahead-background",l.luminance(c).toString()),t.setProperty("--branch-status-ahead-hover-background",l.luminance(d).toString()),t.setProperty("--branch-status-ahead-pill-background",l.luminance(h).toString()),l=te.fromCssVariable("--branch-status-behind-foreground",e.computedStyle),t.setProperty("--branch-status-behind-background",l.luminance(c).toString()),t.setProperty("--branch-status-behind-hover-background",l.luminance(d).toString()),t.setProperty("--branch-status-behind-pill-background",l.luminance(h).toString()),l=te.fromCssVariable("--branch-status-both-foreground",e.computedStyle),t.setProperty("--branch-status-both-background",l.luminance(c).toString()),t.setProperty("--branch-status-both-hover-background",l.luminance(d).toString()),t.setProperty("--branch-status-both-pill-background",l.luminance(h).toString()),e.isInitializing||(this.state.theming=void 0,this.setState(this.state,"didChangeTheme"))}setState(e,t){const o=this.ensureTheming(e);this.state=e,super.setState({timestamp:e.timestamp,selectedRepository:e.selectedRepository}),this.updateStateCallback?.(this.state,t,o)}ensureTheming(e){return null==e.theming&&(e.theming=this.getGraphTheming(),!0)}getGraphTheming(){const e=window.getComputedStyle(document.documentElement),t=J("--color-background",e),o={};let n,r=0;for(const[i,s]of Nh){n=J(i,e)||s,o[`--column-${r}-color`]=n,o[`--graph-color-${r}`]=n;for(const e of[15,25,45,50])o[`--graph-color-${r}-bg${e}`]=q(t,n,e);for(const e of[10,50])o[`--graph-color-${r}-f${e}`]=Z(n,e);r++}const i=document.body.classList.contains("vscode-high-contrast");return{cssVariables:{"--app__bg0":t,"--panel__bg0":J("--color-graph-background",e),"--panel__bg1":J("--color-graph-background2",e),"--section-border":J("--color-graph-background2",e),"--selected-row":J("--color-graph-selected-row",e),"--selected-row-border":i?`1px solid ${J("--color-graph-contrast-border",e)}`:"none","--hover-row":J("--color-graph-hover-row",e),"--hover-row-border":i?`1px dashed ${J("--color-graph-contrast-border",e)}`:"none","--scrollable-scrollbar-thickness":J("--graph-column-scrollbar-thickness",e),"--scroll-thumb-bg":J("--vscode-scrollbarSlider-background",e),"--scroll-marker-head-color":J("--color-graph-scroll-marker-head",e),"--scroll-marker-upstream-color":J("--color-graph-scroll-marker-upstream",e),"--scroll-marker-highlights-color":J("--color-graph-scroll-marker-highlights",e),"--scroll-marker-local-branches-color":J("--color-graph-scroll-marker-local-branches",e),"--scroll-marker-remote-branches-color":J("--color-graph-scroll-marker-remote-branches",e),"--scroll-marker-stashes-color":J("--color-graph-scroll-marker-stashes",e),"--scroll-marker-tags-color":J("--color-graph-scroll-marker-tags",e),"--scroll-marker-selection-color":J("--color-graph-scroll-marker-selection",e),"--stats-added-color":J("--color-graph-stats-added",e),"--stats-deleted-color":J("--color-graph-stats-deleted",e),"--stats-files-color":J("--color-graph-stats-files",e),"--stats-bar-border-radius":J("--graph-stats-bar-border-radius",e),"--stats-bar-height":J("--graph-stats-bar-height",e),"--text-selected":J("--color-graph-text-selected",e),"--text-selected-row":J("--color-graph-text-selected-row",e),"--text-hovered":J("--color-graph-text-hovered",e),"--text-dimmed-selected":J("--color-graph-text-dimmed-selected",e),"--text-dimmed":J("--color-graph-text-dimmed",e),"--text-normal":J("--color-graph-text-normal",e),"--text-secondary":J("--color-graph-text-secondary",e),"--text-disabled":J("--color-graph-text-disabled",e),"--text-accent":J("--color-link-foreground",e),"--text-inverse":J("--vscode-input-background",e),"--text-bright":J("--vscode-input-background",e),...o},themeOpacityFactor:parseInt(J("--graph-theme-opacity-factor",e))||1}}onColumnsChanged(e){this.sendCommand(w,{config:e})}onRefsVisibilityChanged(e,t){this.sendCommand(C,{refs:e,visible:t})}onChooseRepository(){this.sendCommand(h,void 0)}onDimMergeCommits(e){this.sendCommand(u,{dim:e})}onDoubleClickRef(e,t){this.sendCommand(p,{type:"ref",ref:e,metadata:t})}onDoubleClickRow(e,t){this.sendCommand(p,{type:"row",row:{id:e.sha,type:e.type},preserveFocus:t})}onGetMissingAvatars(e){this.sendCommand(m,{emails:e})}onGetMissingRefsMetadata(e){this.sendCommand(g,{metadata:e})}onGetMoreRows(e){this.sendCommand(b,{id:e})}onSearch(e,t){null==e&&(this.state.searchResults=void 0),this.sendCommand(v,{search:e,limit:t?.limit})}async onSearchPromise(e,t){try{return await this.sendCommandWithCompletion(v,{search:e,limit:t?.limit,more:t?.more},F)}catch{return}}onSearchOpenInView(e){this.sendCommand(y,{search:e})}async onEnsureRowPromise(e,t){try{return await this.sendCommandWithCompletion(f,{id:e,select:t},G)}catch{return}}onExcludeType(e,t){this.sendCommand(x,{key:e,value:t})}onIncludeOnlyRef(e){this.sendCommand(_,e?{}:{refs:[{id:"HEAD",type:"head",name:"HEAD"}]})}onUpdateGraphConfiguration(e){this.sendCommand(S,{changes:e})}onSelectionChanged(e){const t=e.filter((e=>null!=e)).map((e=>({id:e.sha,type:e.type})));this.sendCommand(T,{selection:t})}registerUpdateStateCallback(e){return this.updateStateCallback=e,()=>{this.updateStateCallback=void 0}}}((e,t,o,n)=>{for(var r,i=n>1?void 0:n?$h(t,o):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(n?r(t,o,i):r(i))||i);n&&i&&Dh(t,o,i)})([He({args:!1,singleLine:!0})],Ah.prototype,"setState",1),new Ah})();var i=r.q;export{i as GraphApp};