var e,t={7507:(e,t,n)=>{(()=>{var t={2584:e=>{e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},4184:(e,t)=>{var n;!function(){var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},8514:(e,t,n)=>{var o=n(6115);e.exports=function(e,t,n){e&&o((function(){e.apply(n||null,t||[])}))}},5229:(e,t,n)=>{var o=n(2584),r=n(8514);e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var o=arguments.length;if(1===o)delete i[t];else if(0===o)i={};else{var r=i[t];if(!r)return e;r.splice(r.indexOf(n),1)}return e},e.emit=function(){var t=o(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var s=(i[t]||[]).slice(0);return function(){var i=o(arguments),a=this||e;if("error"===t&&!1!==n.throws&&!s.length)throw 1===i.length?i[0]:i;return s.forEach((function(o){n.async?r(o,i,a):o.apply(a,i),o._once&&e.off(t,o)})),e}},e}},3285:(e,t,n)=>{n(8691),e.exports=n(4579).Array.isArray},6981:(e,t,n)=>{n(2699),e.exports=n(4579).Object.assign},5627:(e,t,n)=>{n(6760);var o=n(4579).Object;e.exports=function(e,t){return o.create(e,t)}},7965:(e,t,n)=>{n(520),e.exports=n(4579).Object.entries},8613:(e,t,n)=>{n(961),e.exports=n(4579).Object.keys},433:(e,t,n)=>{n(9349),e.exports=n(4579).Object.setPrototypeOf},5663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},2159:(e,t,n)=>{var o=n(6727);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},7428:(e,t,n)=>{var o=n(7932),r=n(8728),i=n(6531);e.exports=function(e){return function(t,n,s){var a,l=o(t),c=r(l.length),d=i(s,c);if(e&&n!=n){for(;c>d;)if((a=l[d++])!=a)return!0}else for(;c>d;d++)if((e||d in l)&&l[d]===n)return e||d||0;return!e&&-1}}},2894:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},4579:e=>{var t=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},9216:(e,t,n)=>{var o=n(5663);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},8333:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},9666:(e,t,n)=>{e.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},7467:(e,t,n)=>{var o=n(6727),r=n(3938).document,i=o(r)&&o(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},3338:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},3856:(e,t,n)=>{var o=n(3938),r=n(4579),i=n(9216),s=n(1818),a=n(7069),l="prototype",c=function(e,t,n){var d,h,u,p=e&c.F,f=e&c.G,m=e&c.S,g=e&c.P,b=e&c.B,v=e&c.W,y=f?r:r[t]||(r[t]={}),w=y[l],C=f?o:m?o[t]:(o[t]||{})[l];for(d in f&&(n=t),n)(h=!p&&C&&void 0!==C[d])&&a(y,d)||(u=h?C[d]:n[d],y[d]=f&&"function"!=typeof C[d]?n[d]:b&&h?i(u,o):v&&C[d]==u?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t[l]=e[l],t}(u):g&&"function"==typeof u?i(Function.call,u):u,g&&((y.virtual||(y.virtual={}))[d]=u,e&c.R&&w&&!w[d]&&s(w,d,u)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},3938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},7069:e=>{var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},1818:(e,t,n)=>{var o=n(4743),r=n(3101);e.exports=n(9666)?function(e,t,n){return o.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},4881:(e,t,n)=>{var o=n(3938).document;e.exports=o&&o.documentElement},3758:(e,t,n)=>{e.exports=!n(9666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(7467)("div"),"a",{get:function(){return 7}}).a}))},799:(e,t,n)=>{var o=n(2894);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},1421:(e,t,n)=>{var o=n(2894);e.exports=Array.isArray||function(e){return"Array"==o(e)}},6727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},6227:e=>{e.exports=!0},8082:(e,t,n)=>{var o=n(9666),r=n(6162),i=n(8195),s=n(6274),a=n(6530),l=n(799),c=Object.assign;e.exports=!c||n(7929)((function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=o}))?function(e,t){for(var n=a(e),c=arguments.length,d=1,h=i.f,u=s.f;c>d;)for(var p,f=l(arguments[d++]),m=h?r(f).concat(h(f)):r(f),g=m.length,b=0;g>b;)p=m[b++],o&&!u.call(f,p)||(n[p]=f[p]);return n}:c},526:(e,t,n)=>{var o=n(2159),r=n(7856),i=n(3338),s=n(8989)("IE_PROTO"),a=function(){},l="prototype",c=function(){var e,t=n(7467)("iframe"),o=i.length;for(t.style.display="none",n(4881).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;o--;)delete c[l][i[o]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(a[l]=o(e),n=new a,a[l]=null,n[s]=e):n=c(),void 0===t?n:r(n,t)}},4743:(e,t,n)=>{var o=n(2159),r=n(3758),i=n(3206),s=Object.defineProperty;t.f=n(9666)?Object.defineProperty:function(e,t,n){if(o(e),t=i(t,!0),o(n),r)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},7856:(e,t,n)=>{var o=n(4743),r=n(2159),i=n(6162);e.exports=n(9666)?Object.defineProperties:function(e,t){r(e);for(var n,s=i(t),a=s.length,l=0;a>l;)o.f(e,n=s[l++],t[n]);return e}},6183:(e,t,n)=>{var o=n(6274),r=n(3101),i=n(7932),s=n(3206),a=n(7069),l=n(3758),c=Object.getOwnPropertyDescriptor;t.f=n(9666)?c:function(e,t){if(e=i(e),t=s(t,!0),l)try{return c(e,t)}catch(e){}if(a(e,t))return r(!o.f.call(e,t),e[t])}},8195:(e,t)=>{t.f=Object.getOwnPropertySymbols},2963:(e,t,n)=>{var o=n(7069),r=n(7932),i=n(7428)(!1),s=n(8989)("IE_PROTO");e.exports=function(e,t){var n,a=r(e),l=0,c=[];for(n in a)n!=s&&o(a,n)&&c.push(n);for(;t.length>l;)o(a,n=t[l++])&&(~i(c,n)||c.push(n));return c}},6162:(e,t,n)=>{var o=n(2963),r=n(3338);e.exports=Object.keys||function(e){return o(e,r)}},6274:(e,t)=>{t.f={}.propertyIsEnumerable},4938:(e,t,n)=>{var o=n(3856),r=n(4579),i=n(7929);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],s={};s[e]=t(n),o(o.S+o.F*i((function(){n(1)})),"Object",s)}},2050:(e,t,n)=>{var o=n(9666),r=n(6162),i=n(7932),s=n(6274).f;e.exports=function(e){return function(t){for(var n,a=i(t),l=r(a),c=l.length,d=0,h=[];c>d;)n=l[d++],o&&!s.call(a,n)||h.push(e?[n,a[n]]:a[n]);return h}}},3101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2906:(e,t,n)=>{var o=n(6727),r=n(2159),i=function(e,t){if(r(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{(o=n(9216)(Function.call,n(6183).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:o(e,n),e}}({},!1):void 0),check:i}},8989:(e,t,n)=>{var o=n(250)("keys"),r=n(5730);e.exports=function(e){return o[e]||(o[e]=r(e))}},250:(e,t,n)=>{var o=n(4579),r=n(3938),i="__core-js_shared__",s=r[i]||(r[i]={});(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:o.version,mode:n(6227)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},6531:(e,t,n)=>{var o=n(1052),r=Math.max,i=Math.min;e.exports=function(e,t){return(e=o(e))<0?r(e+t,0):i(e,t)}},1052:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7932:(e,t,n)=>{var o=n(799),r=n(8333);e.exports=function(e){return o(r(e))}},8728:(e,t,n)=>{var o=n(1052),r=Math.min;e.exports=function(e){return e>0?r(o(e),9007199254740991):0}},6530:(e,t,n)=>{var o=n(8333);e.exports=function(e){return Object(o(e))}},3206:(e,t,n)=>{var o=n(6727);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},5730:e=>{var t=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+n).toString(36))}},8691:(e,t,n)=>{var o=n(3856);o(o.S,"Array",{isArray:n(1421)})},2699:(e,t,n)=>{var o=n(3856);o(o.S+o.F,"Object",{assign:n(8082)})},6760:(e,t,n)=>{var o=n(3856);o(o.S,"Object",{create:n(526)})},961:(e,t,n)=>{var o=n(6530),r=n(6162);n(4938)("keys",(function(){return function(e){return r(o(e))}}))},9349:(e,t,n)=>{var o=n(3856);o(o.S,"Object",{setPrototypeOf:n(2906).set})},520:(e,t,n)=>{var o=n(3856),r=n(2050)(!0);o(o.S,"Object",{entries:function(e){return r(e)}})},1808:(e,t,n)=>{var o=n(9638),r=n(4874),i=n.g.document,s=function(e,t,n,o){return e.addEventListener(t,n,o)},a=function(e,t,n,o){return e.removeEventListener(t,n,o)},l=[];function c(e,t,n){var o=function(e,t,n){var o,r;for(o=0;o<l.length;o++)if((r=l[o]).element===e&&r.type===t&&r.fn===n)return o}(e,t,n);if(o){var r=l[o].wrapper;return l.splice(o,1),r}}n.g.addEventListener||(s=function(e,t,o){return e.attachEvent("on"+t,function(e,t,o){var r=c(e,t,o)||function(e,t,o){return function(t){var r=t||n.g.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,o.call(e,r)}}(e,0,o);return l.push({wrapper:r,element:e,type:t,fn:o}),r}(e,t,o))},a=function(e,t,n){var o=c(e,t,n);if(o)return e.detachEvent("on"+t,o)}),e.exports={add:s,remove:a,fabricate:function(e,t,n){var s=-1===r.indexOf(t)?new o(t,{detail:n}):function(){var e;return i.createEvent?(e=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(e=i.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(s):e.fireEvent("on"+t,s)}}},4874:(e,t,n)=>{var o=[],r="",i=/^on/;for(r in n.g)i.test(r)&&o.push(r.slice(2));e.exports=o},9638:(e,t,n)=>{var o=n.g.CustomEvent;e.exports=function(){try{var e=new o("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?o:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}},3249:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=void 0;var r=function(){};o(n(139)).default&&(r=document.addEventListener?function(e,t,n,o){return e.removeEventListener(t,n,o||!1)}:document.attachEvent?function(e,t,n){return e.detachEvent("on"+t,n)}:void 0);var i=r;t.default=i,e.exports=t.default},1416:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=void 0;var r=function(){};o(n(139)).default&&(r=document.addEventListener?function(e,t,n,o){return e.addEventListener(t,n,o||!1)}:document.attachEvent?function(e,t,n){return e.attachEvent("on"+t,(function(t){(t=t||window.event).target=t.target||t.srcElement,t.currentTarget=e,n.call(e,t)}))}:void 0);var i=r;t.default=i,e.exports=t.default},9981:(e,t)=>{t.__esModule=!0,t.default=function(e){return e&&e.ownerDocument||document},e.exports=t.default},1629:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=void 0;var r=o(n(139)).default?function(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):i(e,t)}:i;function i(e,t){if(t)do{if(t===e)return!0}while(t=t.parentNode);return!1}t.default=r,e.exports=t.default},7624:(e,t)=>{t.__esModule=!0,t.default=function(e){return e===e.window?e:9===e.nodeType&&(e.defaultView||e.parentWindow)},e.exports=t.default},2565:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){var t=(0,s.default)(e),n=(0,i.default)(t),o=t&&t.documentElement,a={top:0,left:0,height:0,width:0};if(t)return(0,r.default)(o,e)?(void 0!==e.getBoundingClientRect&&(a=e.getBoundingClientRect()),{top:a.top+(n.pageYOffset||o.scrollTop)-(o.clientTop||0),left:a.left+(n.pageXOffset||o.scrollLeft)-(o.clientLeft||0),width:(null==a.width?e.offsetWidth:a.width)||0,height:(null==a.height?e.offsetHeight:a.height)||0}):a};var r=o(n(1629)),i=o(n(7624)),s=o(n(9981));e.exports=t.default},2939:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){for(var t=(0,r.default)(e),n=e&&e.offsetParent;n&&"html"!==s(e)&&"static"===(0,i.default)(n,"position");)n=n.offsetParent;return n||t.documentElement};var r=o(n(9981)),i=o(n(162));function s(e){return e.nodeName&&e.nodeName.toLowerCase()}e.exports=t.default},7265:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e,t){var n,o={top:0,left:0};return"fixed"===(0,c.default)(e,"position")?n=e.getBoundingClientRect():(t=t||(0,s.default)(e),n=(0,i.default)(e),"html"!==function(e){return e.nodeName&&e.nodeName.toLowerCase()}(t)&&(o=(0,i.default)(t)),o.top+=parseInt((0,c.default)(t,"borderTopWidth"),10)-(0,a.default)(t)||0,o.left+=parseInt((0,c.default)(t,"borderLeftWidth"),10)-(0,l.default)(t)||0),(0,r.default)({},n,{top:n.top-o.top-(parseInt((0,c.default)(e,"marginTop"),10)||0),left:n.left-o.left-(parseInt((0,c.default)(e,"marginLeft"),10)||0)})};var r=o(n(434)),i=o(n(2565)),s=o(n(2939)),a=o(n(504)),l=o(n(5770)),c=o(n(162));e.exports=t.default},5770:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e,t){var n=(0,r.default)(e);if(void 0===t)return n?"pageXOffset"in n?n.pageXOffset:n.document.documentElement.scrollLeft:e.scrollLeft;n?n.scrollTo(t,"pageYOffset"in n?n.pageYOffset:n.document.documentElement.scrollTop):e.scrollLeft=t};var r=o(n(7624));e.exports=t.default},504:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e,t){var n=(0,r.default)(e);if(void 0===t)return n?"pageYOffset"in n?n.pageYOffset:n.document.documentElement.scrollTop:e.scrollTop;n?n.scrollTo("pageXOffset"in n?n.pageXOffset:n.document.documentElement.scrollLeft,t):e.scrollTop=t};var r=o(n(7624));e.exports=t.default},7023:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){if(!e)throw new TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):{getPropertyValue:function(t){var n=e.style;"float"==(t=(0,r.default)(t))&&(t="styleFloat");var o=e.currentStyle[t]||null;if(null==o&&n&&n[t]&&(o=n[t]),s.test(o)&&!i.test(t)){var a=n.left,l=e.runtimeStyle,c=l&&l.left;c&&(l.left=e.currentStyle.left),n.left="fontSize"===t?"1em":o,o=n.pixelLeft+"px",n.left=a,c&&(l.left=c)}return o}}};var r=o(n(3497)),i=/^(top|right|bottom|left)$/,s=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;e.exports=t.default},162:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e,t,n){var o="",d="",h=t;if("string"==typeof t){if(void 0===n)return e.style[(0,r.default)(t)]||(0,s.default)(e).getPropertyValue((0,i.default)(t));(h={})[t]=n}Object.keys(h).forEach((function(t){var n=h[t];n||0===n?(0,c.default)(t)?d+=t+"("+n+") ":o+=(0,i.default)(t)+": "+n+";":(0,a.default)(e,(0,i.default)(t))})),d&&(o+=l.transform+": "+d+";"),e.style.cssText+=";"+o};var r=o(n(3497)),i=o(n(4403)),s=o(n(7023)),a=o(n(1760)),l=n(702),c=o(n(3293));e.exports=t.default},1760:(e,t)=>{t.__esModule=!0,t.default=function(e,t){return"removeProperty"in e.style?e.style.removeProperty(t):e.style.removeAttribute(t)},e.exports=t.default},3293:(e,t)=>{t.__esModule=!0,t.default=function(e){return!(!e||!n.test(e))};var n=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.exports=t.default},702:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var r,i,s,a,l,c,d,h,u,p,f,m=o(n(139)),g="transform";if(t.transform=g,t.animationEnd=s,t.transitionEnd=i,t.transitionDelay=d,t.transitionTiming=c,t.transitionDuration=l,t.transitionProperty=a,t.animationDelay=f,t.animationTiming=p,t.animationDuration=u,t.animationName=h,m.default){var b=function(){for(var e,t,n=document.createElement("div").style,o={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},r=Object.keys(o),i="",s=0;s<r.length;s++){var a=r[s];if(a+"TransitionProperty"in n){i="-"+a.toLowerCase(),e=o[a]("TransitionEnd"),t=o[a]("AnimationEnd");break}}return!e&&"transitionProperty"in n&&(e="transitionend"),!t&&"animationName"in n&&(t="animationend"),n=null,{animationEnd:t,transitionEnd:e,prefix:i}}();r=b.prefix,t.transitionEnd=i=b.transitionEnd,t.animationEnd=s=b.animationEnd,t.transform=g=r+"-"+g,t.transitionProperty=a=r+"-transition-property",t.transitionDuration=l=r+"-transition-duration",t.transitionDelay=d=r+"-transition-delay",t.transitionTiming=c=r+"-transition-timing-function",t.animationName=h=r+"-animation-name",t.animationDuration=u=r+"-animation-duration",t.animationTiming=p=r+"-animation-delay",t.animationDelay=f=r+"-animation-timing-function"}var v={transform:g,end:i,property:a,timing:c,delay:d,duration:l};t.default=v},1908:(e,t)=>{t.__esModule=!0,t.default=function(e){return e.replace(n,(function(e,t){return t.toUpperCase()}))};var n=/-(.)/g;e.exports=t.default},3497:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){return(0,r.default)(e.replace(i,"ms-"))};var r=o(n(1908)),i=/^-ms-/;e.exports=t.default},1185:(e,t)=>{t.__esModule=!0,t.default=function(e){return e.replace(n,"-$1").toLowerCase()};var n=/([A-Z])/g;e.exports=t.default},4403:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){return(0,r.default)(e).replace(i,"-ms-")};var r=o(n(1185)),i=/^ms-/;e.exports=t.default},139:(e,t)=>{t.__esModule=!0,t.default=void 0;var n=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=n,e.exports=t.default},9425:e=>{var t={};function n(e){var n=t[e];return n?n.lastIndex=0:t[e]=n=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),n}e.exports={add:function(e,t){var o=e.className;o.length?n(t).test(o)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(n(t)," ").trim()}}},7137:(e,t,n)=>{var o=n(5229),r=n(1808),i=n(9425),s=document,a=s.documentElement;function l(e,t,o,i){n.g.navigator.pointerEnabled?r[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[o],i):n.g.navigator.msPointerEnabled?r[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[o],i):(r[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[o],i),r[t](e,o,i))}function c(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function d(e,t){return void 0!==n.g[t]?n.g[t]:a.clientHeight?a[e]:s.body[e]}function h(e,t,n){var o,r=e||{},i=r.className;return r.className+=" gu-hide",o=s.elementFromPoint(t,n),r.className=i,o}function u(){return!1}function p(){return!0}function f(e){return e.width||e.right-e.left}function m(e){return e.height||e.bottom-e.top}function g(e){return e.parentNode===s?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||v(e)}function v(e){return!!e&&"false"!==e.contentEditable&&("true"===e.contentEditable||v(g(e)))}function y(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function w(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),o={pageX:"clientX",pageY:"clientY"};return e in o&&!(e in n)&&o[e]in n&&(e=o[e]),n[e]}e.exports=function(e,t){var n,v,C,x,S,_,T,R,k,E,O;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var I,M=null,D=t||{};void 0===D.moves&&(D.moves=p),void 0===D.accepts&&(D.accepts=p),void 0===D.invalid&&(D.invalid=function(){return!1}),void 0===D.containers&&(D.containers=e||[]),void 0===D.isContainer&&(D.isContainer=u),void 0===D.copy&&(D.copy=!1),void 0===D.copySortSource&&(D.copySortSource=!1),void 0===D.revertOnSpill&&(D.revertOnSpill=!1),void 0===D.removeOnSpill&&(D.removeOnSpill=!1),void 0===D.direction&&(D.direction="vertical"),void 0===D.ignoreInputTextSelection&&(D.ignoreInputTextSelection=!0),void 0===D.mirrorContainer&&(D.mirrorContainer=s.body);var $=o({containers:D.containers,start:function(e){var t=G(e);t&&B(t)},end:W,cancel:q,remove:Z,destroy:function(){N(!0),j({})},canMove:function(e){return!!G(e)},dragging:!1});return!0===D.removeOnSpill&&$.on("over",(function(e){i.rm(e,"gu-hide")})).on("out",(function(e){$.dragging&&i.add(e,"gu-hide")})),N(),$;function A(e){return-1!==$.containers.indexOf(e)||D.isContainer(e)}function N(e){var t=e?"remove":"add";l(a,t,"mousedown",L),l(a,t,"mouseup",j)}function P(e){l(a,e?"remove":"add","mousemove",F)}function z(e){var t=e?"remove":"add";r[t](a,"selectstart",H),r[t](a,"click",H)}function H(e){I&&e.preventDefault()}function L(e){if(_=e.clientX,T=e.clientY,1===c(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=G(t);n&&(I=n,P(),"mousedown"===e.type&&(b(t)?t.focus():e.preventDefault()))}}function F(e){if(I)if(0!==c(e)){if(void 0===e.clientX||e.clientX!==_||void 0===e.clientY||e.clientY!==T){if(D.ignoreInputTextSelection){var t=w("clientX",e),o=w("clientY",e);if(b(s.elementFromPoint(t,o)))return}var r=I;P(!0),z(),W(),B(r);var h,u={left:(h=C.getBoundingClientRect()).left+d("scrollLeft","pageXOffset"),top:h.top+d("scrollTop","pageYOffset")};x=w("pageX",e)-u.left,S=w("pageY",e)-u.top,i.add(E||C,"gu-transit"),function(){if(!n){var e=C.getBoundingClientRect();(n=C.cloneNode(!0)).style.width=f(e)+"px",n.style.height=m(e)+"px",i.rm(n,"gu-transit"),i.add(n,"gu-mirror"),D.mirrorContainer.appendChild(n),l(a,"add","mousemove",Q),i.add(D.mirrorContainer,"gu-unselectable"),$.emit("cloned",n,C,"mirror")}}(),Q(e)}}else j({})}function G(e){if(!($.dragging&&n||A(e))){for(var t=e;g(e)&&!1===A(g(e));){if(D.invalid(e,t))return;if(!(e=g(e)))return}var o=g(e);if(o&&!D.invalid(e,t)&&D.moves(e,o,t,y(e)))return{item:e,source:o}}}function B(e){var t,n;t=e.item,n=e.source,("boolean"==typeof D.copy?D.copy:D.copy(t,n))&&(E=e.item.cloneNode(!0),$.emit("cloned",E,e.item,"copy")),v=e.source,C=e.item,R=k=y(e.item),$.dragging=!0,$.emit("drag",C,v)}function W(){if($.dragging){var e=E||C;V(e,g(e))}}function U(){I=!1,P(!0),z(!0)}function j(e){if(U(),$.dragging){var t=E||C,o=w("clientX",e),r=w("clientY",e),i=X(h(n,o,r),o,r);i&&(E&&D.copySortSource||!E||i!==v)?V(t,i):D.removeOnSpill?Z():q()}}function V(e,t){var n=g(e);E&&D.copySortSource&&t===v&&n.removeChild(C),Y(t)?$.emit("cancel",e,v,v):$.emit("drop",e,t,v,k),K()}function Z(){if($.dragging){var e=E||C,t=g(e);t&&t.removeChild(e),$.emit(E?"cancel":"remove",e,t,v),K()}}function q(e){if($.dragging){var t=arguments.length>0?e:D.revertOnSpill,n=E||C,o=g(n),r=Y(o);!1===r&&t&&(E?o&&o.removeChild(E):v.insertBefore(n,R)),r||t?$.emit("cancel",n,v,v):$.emit("drop",n,o,v,k),K()}}function K(){var e=E||C;U(),n&&(i.rm(D.mirrorContainer,"gu-unselectable"),l(a,"remove","mousemove",Q),g(n).removeChild(n),n=null),e&&i.rm(e,"gu-transit"),O&&clearTimeout(O),$.dragging=!1,M&&$.emit("out",e,M,v),$.emit("dragend",e),v=C=E=R=k=O=M=null}function Y(e,t){var o;return o=void 0!==t?t:n?k:y(E||C),e===v&&o===R}function X(e,t,n){for(var o=e;o&&!r();)o=g(o);return o;function r(){if(!1===A(o))return!1;var r=J(o,e),i=ee(o,r,t,n);return!!Y(o,i)||D.accepts(C,o,v,i)}}function Q(e){if(n){e.preventDefault();var t=w("clientX",e),o=w("clientY",e),r=t-x,i=o-S;n.style.left=r+"px",n.style.top=i+"px";var s=E||C,a=h(n,t,o),l=X(a,t,o),c=null!==l&&l!==M;(c||null===l)&&(M&&f("out"),M=l,c&&f("over"));var d=g(s);if(l!==v||!E||D.copySortSource){var u,p=J(l,a);if(null!==p)u=ee(l,p,t,o);else{if(!0!==D.revertOnSpill||E)return void(E&&d&&d.removeChild(s));u=R,l=v}(null===u&&c||u!==s&&u!==y(s))&&(k=u,l.insertBefore(s,u),$.emit("shadow",s,l,v))}else d&&d.removeChild(s)}function f(e){$.emit(e,s,M,v)}}function J(e,t){for(var n=t;n!==e&&g(n)!==e;)n=g(n);return n===a?null:n}function ee(e,t,n,o){var r="horizontal"===D.direction,i=t!==e?function(){var e=t.getBoundingClientRect();return s(r?n>e.left+f(e)/2:o>e.top+m(e)/2)}():function(){var t,i,s,a=e.children.length;for(t=0;t<a;t++){if(s=(i=e.children[t]).getBoundingClientRect(),r&&s.left+s.width/2>n)return i;if(!r&&s.top+s.height/2>o)return i}return null}();return i;function s(e){return e?y(t):t}}}},9915:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(4184),r=n.n(o),i=n(6689),s=n.n(i);class a{name;notify;constructor(e,t){this.name=e,this.notify=t}}class l{observer;unsubscribeCallback;constructor(e,t){this.observer=e,this.unsubscribeCallback=t}unsubscribe(){this.unsubscribeCallback(this.observer)}}const c=new class{observers;constructor(){this.observers=new Set}broadcast(e){this.observers&&this.observers.forEach((t=>{e.name===t.name&&t.notify(e)}))}subscribe(e,t){const n=new a(e,t);return this.observers.add(n),new l(n,(e=>{this.observers.delete(e)}))}unsubscribe(e){e&&e.unsubscribe()}},d="ON_DRAG_START",h="ON_DRAG_END";let u=null;const p=new Map;class f extends s().Component{dndComponentRef=s().createRef();mounted=!1;onDragStartSubscription;onDragEndSubscription;constructor(e){super(e),this.onDragStartSubscription=c.subscribe(d,(e=>{const t=null!==e.content&&p.get(e.content);this.setState({isDroppable:this.canDrop(void 0,t,this.props.dndData)})})),this.onDragEndSubscription=c.subscribe(h,(()=>{this.mounted&&this.setState({isDroppable:!1})})),this.state={isDragging:!1,isDroppable:!1,isOver:!1}}componentDidMount(){if(this.mounted=!0,null!==u){const e=p.get(u);this.setState({isDroppable:this.canDrop(void 0,e,this.props.dndData)})}}componentWillUnmount(){this.mounted=!1,this.onDragStartSubscription.unsubscribe(),this.onDragEndSubscription.unsubscribe()}canDrop(e,t,n){const{canDrop:o}=this.props;return o&&("boolean"==typeof o||o(e,t,n))}addDragEndEventListenerOnce(){const e=this.dndComponentRef?.current;e&&(e.removeEventListener("dragend",this.onDragEnd),e.addEventListener("dragend",this.onDragEnd,{once:!0}))}isDraggable(){const{canDrag:e,dndData:t}=this.props;return!!e&&("boolean"==typeof e||e(t))}onDragEnter(e){if(e.stopPropagation(),this.setState({isOver:!0}),this.props.onDragEnter){const t=p.get(u);this.props.onDragEnter(e,t,this.props.dndData)}}onDragLeave(e){e.stopPropagation();const t=p.get(u);this.props.onDragLeave&&this.props.onDragLeave(e,t,this.props.dndData),this.setState({isDroppable:this.canDrop(void 0,t,this.props.dndData),isOver:!1})}onDrag(e){e.stopPropagation()}onDragOver(e){e.stopPropagation();const t=p.get(u);this.canDrop(e,t,this.props.dndData)&&(e.preventDefault(),this.setState({isOver:!0}))}onDragStart(e){e.stopPropagation();const{dndData:t,dndId:n,onBeginDrag:o}=this.props;u=n,p.set(u,t),this.addDragEndEventListenerOnce(),c.broadcast({name:d,content:u}),o&&o(e,t),this.setState({isDragging:!0})}onDragEnd=e=>{e.stopPropagation();const{dndData:t,onEndDrag:n}=this.props;n&&n(e,p.get(u),t),c.broadcast({name:h,content:u}),p.delete(u),u=null,this.mounted&&this.setState({isDragging:!1})};onDrop(e){e.stopPropagation();const{dndData:t,onDrop:n}=this.props;n&&(n(e,p.get(u),t),this.setState({isOver:!1}))}cloneChildrenWithShallowMergedProps(e,t){if(e)return s().Children.map(e,(e=>s().isValidElement(e)?s().cloneElement(e,t):e))}render(){const{children:e,className:t,forwardDndPropsToChildren:n,style:o}=this.props,{isDragging:i,isDroppable:a,isOver:l}=this.state,c=this.isDraggable(),d=r()("dnd-component",t,{draggable:c,dragging:i,droppable:a,hovering:l});return s().createElement("div",{className:d,draggable:c,onDrag:e=>this.onDrag(e),onDragEnter:e=>this.onDragEnter(e),onDragLeave:e=>this.onDragLeave(e),onDragOver:e=>this.onDragOver(e),onDragStart:e=>this.onDragStart(e),onDrop:e=>this.onDrop(e),ref:this.dndComponentRef,style:o},n?this.cloneChildrenWithShallowMergedProps(e,{isDraggable:c,isDragging:i,isDroppable:a,isOver:l}):e)}}var m=f},7589:(e,t,n)=>{n.d(t,{Z:()=>As});var o={};n.r(o),n.d(o,{types:()=>Ai});var r=n(4184),i=n.n(r),s=n(6689),a=n.n(s);function l(e){switch(e){case 48:return 0;case 49:return 1;case 50:return 2;case 51:return 3;case 52:return 4;case 53:return 5;case 54:return 6;case 55:return 7;case 56:return 8;case 57:return 9;case 97:case 65:return 10;case 98:case 66:return 11;case 99:case 67:return 12;case 100:case 68:return 13;case 101:case 69:return 14;case 102:case 70:return 15}return 0}function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function d(e){const t=e.h/360,{s:n,l:o,a:r}=e;let i,s,a;if(0===n)i=s=a=o;else{const e=o<.5?o*(1+n):o+n-o*n,r=2*o-e;i=c(r,e,t+1/3),s=c(r,e,t),a=c(r,e,t-1/3)}return{type:"rgba",r:Math.round(255*i),g:Math.round(255*s),b:Math.round(255*a),a:r}}const h=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function u(e){if(0===(e=e.trim()).length)return null;if(35===e.charCodeAt(0))return function(e){const t=(e=e.trim()).length;if(0===t)return null;if(35!==e.charCodeAt(0))return null;if(7===t)return{type:"rgba",r:16*l(e.charCodeAt(1))+l(e.charCodeAt(2)),g:16*l(e.charCodeAt(3))+l(e.charCodeAt(4)),b:16*l(e.charCodeAt(5))+l(e.charCodeAt(6)),a:1};if(9===t)return{type:"rgba",r:16*l(e.charCodeAt(1))+l(e.charCodeAt(2)),g:16*l(e.charCodeAt(3))+l(e.charCodeAt(4)),b:16*l(e.charCodeAt(5))+l(e.charCodeAt(6)),a:(16*l(e.charCodeAt(7))+l(e.charCodeAt(8)))/255};if(4===t){const t=l(e.charCodeAt(1)),n=l(e.charCodeAt(2)),o=l(e.charCodeAt(3));return{type:"rgba",r:16*t+t,g:16*n+n,b:16*o+o,a:1}}if(5===t){const t=l(e.charCodeAt(1)),n=l(e.charCodeAt(2)),o=l(e.charCodeAt(3)),r=l(e.charCodeAt(4));return{type:"rgba",r:16*t+t,g:16*n+n,b:16*o+o,a:(16*r+r)/255}}return null}(e);const t=h.exec(e);if(null==t)return null;const n=t[1];let o;switch(n){case"rgb":case"hsl":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}return"hsl"===n||"hsla"===n?d({h:o[0],s:o[1],l:o[2],a:o[3]}):{type:"rgba",r:o[0],g:o[1],b:o[2],a:o[3]}}const p=e=>{return"hsla"===(t=u(e)).type&&(t=d(t)),(299*t.r+587*t.g+114*t.b)/1e3<128?"#FFFFFF":"#000000";var t};var f=n(827),m=n(3308);const g=e=>!(e===f.o$||e===f.lH),b=/^.*(:?\n){0,2}/m;function v(e,t="\n"){return e.replace("\n"===t?b:new RegExp(`^.*(:?${t}){0,2}`,"m"),"")}const y=/^co-authored-by:\s*([^\s<>]+(?:\s+[^\s<>]+)*)\s*<([^<>]+)>/gim;function w(e){const t=[];for(let n=y.exec(e);null!==n;n=y.exec(e)){const[,e,o]=n;t.push({name:e,email:o})}return t}const C={"--graph-row-height":"22px","--font-default":"'Open Sans', Arial, sans-serif !important","--font-monospace":"'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace","--font-size":"62.5%","--fs-1":"1rem","--fs-2":"1.2rem","--fs-3":"1.4rem","--fs-4":"1.6rem","--fs-5":"1.8rem","--fs-6":"2rem","--fs-7":"2.4rem","--button-xs-padding-y":".15rem","--button-xs-padding-x":".25rem","--button-small-padding-y":".25rem","--button-small-padding-x":".5rem","--button-medium-padding-y":".5rem","--button-medium-padding-x":".75rem","--button-large-padding-y":"1rem","--button-large-padding-x":"1.25rem","--button-radius":".2rem","--input-radius":"3px","--about-modal-bg-color":"#e2e4e9","--about-modal-width":"650px","--label__purple-color-f25":"rgba(197,23,182,0.25)","--registration-modal-width":"400px","--file-history-header-height":"35px","--shop-modal-width":"95vw","--shop-modal-height":"95vh","--scrollable-scrollbar-thickness":"14px","--mini-commit-col-left-width":"30px","--mini-commit-col-middle-padding":"6px","--mini-commit-col-right-width":"56px","--fuzzy-finder-repo-color":"rgba(46,206,157,0.1)","--fuzzy-finder-checkout-color":"rgba(6,105,247,0.1)","--fuzzy-finder-history-color":"rgba(197,23,182,0.1)","--handle-width":"7px","--shadow-color":"rgba(0,0,0,0.4)","--graph-color-5-f10":"rgba(205,1,1,0.1)","--graph-color-6-f10":"rgba(242,93,46,0.1)","--graph-color-7-f10":"rgba(242,202,51,0.1)","--graph-color-8-f10":"rgba(123,217,56,0.1)","--graph-color-9-f10":"rgba(46,206,157,0.1)","--graph-color-0-f10":"rgba(21,160,191,0.1)","--graph-color-1-f10":"rgba(6,105,247,0.1)","--graph-color-2-f10":"rgba(142,0,194,0.1)","--graph-color-3-f10":"rgba(197,23,182,0.1)","--graph-color-4-f10":"rgba(217,1,113,0.1)","--graph-color-5-f50":"rgba(205,1,1,0.5)","--graph-color-6-f50":"rgba(242,93,46,0.5)","--graph-color-7-f50":"rgba(242,202,51,0.5)","--graph-color-8-f50":"rgba(123,217,56,0.5)","--graph-color-9-f50":"rgba(46,206,157,0.5)","--graph-color-0-f50":"rgba(21,160,191,0.5)","--graph-color-1-f50":"rgba(6,105,247,0.5)","--graph-color-2-f50":"rgba(142,0,194,0.5)","--graph-color-3-f50":"rgba(197,23,182,0.5)","--graph-color-4-f50":"rgba(217,1,113,0.5)","--axo-orange":"#e75225","--axo-ink":"#141422","--axo-cream":"#f9efc1","--axo-yellow":"#d8c13a","--info-bar-height":"26px","--left-panel-header-height":"60px","--toolbar-height":"48px","--toolbar-border":"1px","--toolbar-item-height":"calc(var(--toolbar-height, 0px) - var(--toolbar-border, 1px))","--expand-detail-panel-transition":"flex-grow 250ms ease-in-out","--conflict-left-color":"rgba(21,160,191,0.25)","--conflict-right-color":"rgba(242,202,51,0.25)","--conflict-output-color":"rgba(197,23,182,0.25)","--graph-color-5-bg50":"#751012","--graph-color-6-bg50":"#873e29","--graph-color-7-bg50":"#87742b","--graph-color-8-bg50":"#4c7c2e","--graph-color-9-bg50":"#257660","--graph-color-0-bg50":"#195f71","--graph-color-1-bg50":"#11448d","--graph-color-2-bg50":"#550f73","--graph-color-3-bg50":"#711b6d","--graph-color-4-bg50":"#7b104a","--graph-color-5-bg45":"#6c1114","--graph-color-6-bg45":"#7c3a28","--graph-color-7-bg45":"#7c6b2a","--graph-color-8-bg45":"#47722c","--graph-color-9-bg45":"#246d5a","--graph-color-0-bg45":"#195969","--graph-color-1-bg45":"#124082","--graph-color-2-bg45":"#4f116b","--graph-color-3-bg45":"#681b65","--graph-color-4-bg45":"#711146","--graph-color-5-bg25":"#48171b","--graph-color-6-bg25":"#522e26","--graph-color-7-bg25":"#524927","--graph-color-8-bg25":"#344d28","--graph-color-9-bg25":"#214a42","--graph-color-0-bg25":"#1a3f4a","--graph-color-1-bg25":"#173158","--graph-color-2-bg25":"#39174b","--graph-color-3-bg25":"#461c48","--graph-color-4-bg25":"#4b1737","--graph-color-5-bg15":"#371a1e","--graph-color-6-bg15":"#3c2725","--graph-color-7-bg15":"#3c3825","--graph-color-8-bg15":"#2a3a26","--graph-color-9-bg15":"#1f3835","--graph-color-0-bg15":"#1b323a","--graph-color-1-bg15":"#192943","--graph-color-2-bg15":"#2d1a3b","--graph-color-3-bg15":"#351d39","--graph-color-4-bg15":"#381a2f","--semi-bold":"500","--bold":"600","--num-columns-supported":"10","--column-0-color":"#15a0bf","--column-1-color":"#0669f7","--column-2-color":"#8e00c2","--column-3-color":"#c517b6","--column-4-color":"#d90171","--column-5-color":"#cd0101","--column-6-color":"#f25d2e","--column-7-color":"#f2ca33","--column-8-color":"#7bd938","--column-9-color":"#2ece9d","--red":"#D9413D","--orange":"#DE9B43","--yellow":"#ECB91C","--green":"#5CB85C","--blue":"#4D88FF","--ltblue":"#5bc0de","--app__bg0":"#1C1E23","--toolbar__bg0":"rgb(42,45,52)","--toolbar__bg1":"rgb(51,55,63)","--toolbar__bg2":"rgb(65,70,80)","--panel__bg0":"rgb(39,42,49)","--panel__bg1":"rgb(50,54,63)","--panel__bg2":"rgb(61,66,77)","--input__bg":"rgba(0,0,0,0.2)","--input-bg-warn-color":"rgba(222,155,67,0.6)","--panel-border":"rgb(19,20,24)","--section-border":"rgba(255,255,255,0.08)","--subtle-border":"rgba(255,255,255,0.04)","--modal-overlay-color":"rgba(0,0,0,.5)","--graph-color-0":"#15a0bf","--graph-color-1":"#0669f7","--graph-color-2":"#8e00c2","--graph-color-3":"#c517b6","--graph-color-4":"#d90171","--graph-color-5":"#cd0101","--graph-color-6":"#f25d2e","--graph-color-7":"#f2ca33","--graph-color-8":"#7bd938","--graph-color-9":"#2ece9d","--text-selected":"#FFFFFF","--text-selected-row":"#FFFFFF","--text-dimmed":"rgba(255,255,255,0.2)","--text-dimmed-selected":"rgba(255,255,255,0.5)","--text-normal":"rgba(255,255,255,0.75)","--text-secondary":"rgba(255,255,255,0.6)","--text-disabled":"rgba(255,255,255,0.4)","--text-accent":"#93A9EC","--text-inverse":"#222222","--text-bright":"#FFFFFF","--btn-text":"rgba(255,255,255,0.75)","--btn-text-hover":"#FFFFFF","--default-border":"rgba(255,255,255,0.75)","--default-bg":"transparent","--default-hover":"transparent","--default-border-hover":"#FFFFFF","--primary-border":"#4D88FF","--primary-bg":"rgba(77,136,255,0.2)","--primary-hover":"rgba(77,136,255,0.6)","--success-border":"#5CB85C","--success-bg":"rgba(92,184,92,0.2)","--success-hover":"rgba(92,184,92,0.6)","--warning-border":"#DE9B43","--warning-bg":"rgba(222,155,67,0.2)","--warning-hover":"rgba(222,155,67,0.6)","--danger-border":"#D9413D","--danger-bg":"rgba(217,65,61,0.2)","--danger-hover":"rgba(217,65,61,0.6)","--hover-row":"rgba(77,136,255,0.1)","--hover-row-border":"none","--danger-row":"rgba(217,65,61,0.6)","--selected-row":"rgba(77,136,255,0.2)","--selected-row-border":"none","--warning-row":"rgba(222,155,67,0.6)","--droppable":"rgba(236,185,28,0.3)","--drop-target":"rgba(92,184,92,0.5)","--input--disabled":"rgba(0,0,0,0.1)","--link-color":"#40c5ec","--link-color-bright":"#40c5ec","--form-control-focus":"#4D88FF","--scroll-thumb-border":"#1C1E23","--scroll-thumb-bg":"rgb(65,70,80)","--scroll-thumb-bg-light":"rgb(111,119,136)","--wip-status":"rgba(77,136,255,0.4)","--card__bg":"rgb(61,66,77)","--card-shadow":"rgba(0,0,0,.2)","--statusbar__warning-bg":"#87742b","--label__yellow-color":"#f2ca33","--label__light-blue-color":"#15a0bf","--label__purple-color":"#c517b6","--filtering":"rgba(77,136,255,0.5)","--soloing":"rgba(222,155,67,0.5)","--checked-out":"rgba(92,184,92,0.3)","--soloed":"rgba(222,155,67,0.3)","--filter-match":"rgba(77,136,255,0.5)","--clone__progress":"rgba(77,136,255,0.7)","--toolbar__prompt":"rgba(77,136,255,0.2)","--verified":"rgba(92,184,92,0.3)","--unverified":"rgba(255,255,255,0.1)","--drop-sort-border":"#5CB85C","--terminal__repo-name-color":"turquoise","--terminal__repo-branch-color":"violet","--terminal__repo-tag-color":"lightcoral","--terminal__repo-upstream-color":"yellowgreen","--terminal__background":"#000000","--terminal__cursor":"#FFFFFF","--terminal__cursorAccent":"#000000","--terminal__foreground":"#FFFFFF","--terminal__selection":"#304676","--terminal__black":"#000000","--terminal__red":"#F24A4A","--terminal__green":"#0DBC79","--terminal__yellow":"#E5E510","--terminal__blue":"#4A98EE","--terminal__magenta":"#E063E0","--terminal__cyan":"#11A8CD","--terminal__white":"#E5E5E5","--terminal__brightBlack":"#686868","--terminal__brightRed":"#FF5656","--terminal__brightGreen":"#23D18B","--terminal__brightYellow":"#F5F543","--terminal__brightBlue":"#51A4FF","--terminal__brightMagenta":"#D670D6","--terminal__brightCyan":"#29B8DB","--terminal__brightWhite":"#E5E5E5","--code-bg":"#1C1E23","--code-foreground":"rgba(255,255,255,0.75)","--code-blame-color-0":"#15a0bf","--code-blame-color-1":"#0669f7","--code-blame-color-2":"#8e00c2","--code-blame-color-3":"#c517b6","--code-blame-color-4":"#d90171","--code-blame-color-5":"#cd0101","--code-blame-color-6":"#f25d2e","--code-blame-color-7":"#f2ca33","--code-blame-color-8":"#7bd938","--code-blame-color-9":"#2ece9d","--added-line":"rgba(92,184,92,0.2)","--deleted-line":"rgba(217,65,61,0.2)","--modified-line":"rgba(0,0,0,0.25)","--conflict-info-color":"#15a0bf","--conflict-left-border-color":"#15a0bf","--conflict-right-border-color":"#f2ca33","--conflict-output-border-color":"#c517b6","--scroll-marker-head-color":"#16c216","--scroll-marker-highlights-color":"#e6e62b","--scroll-marker-local-branches-color":"#ffa500","--scroll-marker-remote-branches-color":"#ffd68b","--scroll-marker-selection-color":"#0821ff","--scroll-marker-stashes-color":"#fb94ff","--scroll-marker-tags-color":"#affcff","--scroll-marker-upstream-color":"#9bff9b","--stats-added-color":"#347d39","--stats-deleted-color":"#c93c37","--stats-files-color":"#e2c08d","--stats-bar-border-radius":"3px","--stats-bar-height":"40%"};function x(e){return`--column-${e}-color`}function S(e={}){const t={};return Object.keys(e).forEach((n=>{n.includes("--graph-color-")||n.match(/^--column-\d+-color$/)?CSS.supports("color",e[n])&&(t[n]=e[n]):t[n]=e[n]})),function(e={}){return{...C,...e}}(t)}const _=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,T=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,R=new Map;let k;const E=["th","st","nd","rd"];function O(e){const t=e%100;return`${e}${E[(t-20)%10]??E[t]??E[0]}`}let I={};function M(e,t,n,o){const r=`${e}${o?"_compact":""}`;let i=I[e];return i||(i=n+e*t+t/2,I[r]=i,i)}const D={d:"d",fill:"fill","shape-rendering":"shapeRendering","stroke-linejoin":"strokeLinejoin","stroke-width":"strokeWidth","stroke-dasharray":"strokeDasharray",stroke:"stroke",x1:"x1",x2:"x2",y1:"y1",y2:"y2"};function $(e,t){let n="";for(const[e,o]of Object.entries(D)){const r=t[o];r&&(n+=` ${e}="${r}"`)}return`<${e}${n} />`}function A(e){return $("line",e)}function N(e,t,n,o){return{fill:"none",shapeRendering:"auto",strokeLinejoin:"round",strokeWidth:n,strokeDasharray:g(e)?o?1:2:0,stroke:t}}function P(e,t,n,o){return`${e}_${t}_${n||"+"}${o?"_compact":""}`}function z(e,t,n){return`${e}_${t||"+"}${n?"_compact":""}`}function H(e,t,n){return(e=e<=n?e:n)>=t?e:t}var L=n(8649),F=n(9453);const G=e=>{let t;return(...n)=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame((()=>{e(...n)}))}};function B(e){return e?"string"==typeof e?e:JSON.stringify(e):null}function W(e,t,n,o){const{id:r}=e;return!r||null===t||null===t?.[r]||o&&null===t?.[r]?.[o]?null:t&&r in t?o&&!t[r]?.[o]?(n(r,[o]),null):o?t?.[r]?.[o]:t?.[r]:(n(r,F.AI),null)}function U(e,t){if(t.id)return t.id;const n=t.owner||"";return e===L.V.REMOTE?`${e}/${n}/${t.name}`:`${e}/${t.name}`}function j(e){return U(e.refType,e)}function V(e,t=0){for(let n=e.length-1;n>=t;n-=1){const t=e[n];if(t.currentWidth>t.minimumWidth)return t}}function Z(e,t=0){if(e.length){for(let n=t;n<e.length;n+=1){const t=e[n],o=t.maximumWidth?Math.min(t.maximumWidth,t.preferredWidth||1/0):t.preferredWidth;if(o&&t.currentWidth<o)return t}return e[e.length-1]}}function q(e,t=!1){const n="--scrollable-scrollbar-thickness",o=t||!e[n]?S(e):e,r=o[n]?parseInt(o[n],10):0;return Number.isNaN(r)?0:r}function K(e,t){let n=0;for(const o of e)t&&o.type===t||(n+=o.currentWidth);return n}const Y=(e,t)=>e===t[t.length-1].type;function X(e,t,n){return t||n||0===e}function Q(e,t,n){return e+(X(e,t,n)?1:0)}function J(e,t,n){const o=Q(e,t,n);return m.$0*o}function ee(e,t){return e.type===m.Wm&&t>0?e.contentWidth||0:e.currentWidth}function te(e,t,n,o,r){const i=re(e,t);return i?(s=i,a=n.length,s.currentWidth<ee(s,a)?q(o,r):0):0;var s,a}function ne(e,t,n,o,r,i,s,a,l){const c=re(e,t);if(!c)return 0;const d=function(e,t,n,o,r,i,s){const a=J(i,n,o);return Y(e.type,t)&&(r<a||s)}(c,t,n,o,r,i.length,s);return d?q(a,l):0}function oe(e,t,n){return H(n,e.minimumWidth||0,e.maximumWidth&&!Y(e.type,t)?e.maximumWidth||0:Number.MAX_VALUE)}function re(e,t){return t.find((({type:t})=>t===e))}function ie(e,t){return t.findIndex((({type:t})=>t===e))}function se(e,t,n){let o=0,r=0;const i=ie(e,t);if(i>-1){const e=function(e,t=0){let n=0;for(let o=t;o<e.length;o+=1)n+=e[o].minimumWidth;return n}(t,i+1),s=function(e,t=e.length-1){let n=0;for(let o=0;o<=t;o+=1)n+=e[o].currentWidth;return n}(t,i-1),a=t[i].maximumWidth||Number.MAX_VALUE,l=Math.min(a,n-e-s);o=t[i].minimumWidth,r=l}return{min:o,max:r}}function ae(e){const t=!!e&&e===m.Um.Compact,n=t?1:2,o=t?10:28,r=t?1:3,i=t?1:3,s=t?10:22,a=t?s:m.P3,l=t?s:s/2+1,c=t?45:56;return{COMMIT_ZONE_LINE_WIDTH:n,COMMIT_ZONE_GUTTER_WIDTH:o,COMMIT_ZONE_PADDING_LEFT:r,COMMIT_ZONE_PADDING_RIGHT:i,COMMIT_COLUMN_WIDTH:s,COMMIT_NODE_DIAMETER:a,COMMIT_MERGE_NODE_DIAMETER:l,COMMIT_NODE_TOP_OFFSET:.5*m.P3-.5*a,COMMIT_MERGE_NODE_LEFT_OFFSET:s/2-l/2,COMMIT_MERGE_NODE_TOP_OFFSET:.5*m.P3-.5*l,COMMIT_ZONE_AVATAR_DIAMETER:a-2*n,COMMIT_ZONE_VIEWPORT_WIDTH_MIN:a+r+i+o,COMMIT_ZONE_SHOW_ICON_WIDTH:c,IS_COMPACT:t,RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:a/2-l/2}}function le(e){return(e?.heads||[]).some((e=>e.isCurrentHead))}function ce(e){return[f.S7,f.br,f.ch].includes(e)}function de(e){return!!e&&Object.values(e).some((e=>e>0))}function he(e){return 1===Object.keys(e).length}function ue(e,t){return!0===e[t]&&he(e)}function pe(e,t){const{heads:n,tags:o,remotes:r}=e.hasRefs?e:e.childRefs,i=n?n.map((e=>({...e,refType:L.V.HEAD}))):[],s=o?o.map((e=>({...e,refType:L.V.TAG}))):[];return[...i,...r?r.map((e=>({...e,fullName:t&&e.owner?`${e.owner}/${e.name}`:e.name,refType:L.V.REMOTE}))):[],...s]}function fe(e){const t=[],n=e.sort(((e,t)=>me(e)?-1:me(t)?1:0));let o,r=!1;for(const e of n){r=!1,o=e.fullName||e.name;for(const n of t)if(n.length>0&&n[0].name===o){e.refType===L.V.HEAD?n.unshift(e):n.push(e),r=!0;break}r||t.push([e])}return t}function me(e){return e.refType===L.V.HEAD&&e.isCurrentHead}function ge(e){return e.find((e=>me(e)))}function be(e){for(const t of e)if(ge(t))return t;return e.length>0?e[0]:void 0}class ve{props;constructor(e){this.props=e}getActiveGraphZone(e){const t=re(e,this.props.graphZones);return!t||t.isHidden?void 0:t}getGraphRefGroupForRow(e){const t=this.getRow(e);return t?pe(t,this.props.showRemoteNamesOnRefs):[]}getGraphRefGroupsByNameForRow(e){const t=this.getGraphRefGroupForRow(e);return t?fe(t):[]}getRow(e){if(!(e<0||e>this.props.processedRows.length-1))return this.props.processedRows[e]}getZoneWidth(e,t=!0){const n=t?this.getVerticalScrollWidth(e):0;return function(e,t){return re(e,t)?.currentWidth||m.qi[e].minimumWidth}(e,this.props.graphZones)-n}isDateTimeZoneActive(){return Boolean(this.getActiveGraphZone(m.PL))}isFirstRow(e){return 0===e}isColumnFollowingGraphColumn(e){return((e,t)=>{const n=ie(e,t),o=ie(m.Wm,t);return-1!==n&&-1!==o&&n-o==1})(e,this.props.graphZones)}isHighlighted(e){if(this.props.processedRows[e]&&this.props.highlightedShas){const t=this.props.processedRows[e]?.sha;return this.props.highlightedShas[t]||!1}return!1}isHovering(e){return!(!this.props.isContainerWindowFocused||!this.props.processedRows[e])&&this.props.currentlyHoveredCommitSha===this.props.processedRows[e]?.sha}isLastColumn(e){return Y(e,this.props.graphZones)}getSelectedRefGroupByName(){if(he(this.props.isSelectedBySha)){const e=Object.keys(this.props.isSelectedBySha),t=this.props.processedGraphRowBySha[e[0]];if(t)return fe(pe(t,this.props.showRemoteNamesOnRefs))}return[]}getHorizontalScrollHeight(e){return te(e,this.props.graphZones,this.props.processedRows,this.props.cssVariables)}getVerticalScrollWidth(e){return ne(e,this.props.graphZones,this.props.hasMoreCommits,this.props.isLoadingRows,this.props.height,this.props.processedRows,this.props.enabledScrollMarkerTypes.length>0,this.props.cssVariables)}isMissingHoveredRefGroup(e){if(!this.props.isContainerWindowFocused||this.props.highlightedShas)return!1;const t=this.getRow(e);if(!t)return!1;let n=[];if(this.props.dimRowsOfSelectedCommit){const e=this.getSelectedRefGroupByName();if(!e.length)return!1;n=e[0]}else{const{hoveredRefGroup:e}=this.props;if(!e?.length)return!1;n=e}const{name:o,refType:r}=n[0],i=r===L.V.TAG,s=t.tags.length>0&&!t.heads.length&&!t.remotes.length,{heads:a,tags:l,remotes:c}=!t.hasRefs||s&&!i?t.childRefs:t;return!(a.length||c.length||l.length)||!a.some((e=>e.name===o&&n.some((e=>e.refType===L.V.HEAD))))&&!c.some((e=>e.name===o&&n.some((t=>t.refType===L.V.REMOTE&&t.owner===e.owner))))&&!l.some((e=>e.name===o&&n.some((e=>e.refType===L.V.TAG))))}isSelected(e){const t=this.getRow(e)?.sha;return Boolean(t)&&!0===this.props.isSelectedBySha[t]}isSingleSelected(e){const t=this.getRow(e)?.sha;return Boolean(t)&&ue(this.props.isSelectedBySha,t)}hasTimeline(e){return Boolean(this.props.processedRows[e]?.timeLineEntry)&&!this.isDateTimeZoneActive()&&!this.isFirstRow(e)}rowContainsCurrentHeadRef(e){return le(e)}}const ye={"CommitDiffSection-FileAdded":"added","CommitDiffSection-FileDeleted":"deleted","CommitDiffSection-FileModified":"modified","CommitDiffSection-FileRenamed":"renamed","CommitDiffSection-NFilesAdded":"{0} added","CommitDiffSection-NFilesDeleted":"{0} deleted","CommitDiffSection-NFilesModified":"{0} modified","CommitDiffSection-NFilesRenamed":"{0} renamed","Graph-IsLoadingRows":"Loading...","Graph-NoCommits":"No commits","Graph-WorkInProgress":"Work in progress","GraphHeader-BranchTag":"BRANCH / TAG","GraphHeader-Changes":"CHANGES","GraphHeader-CommitAuthor":"AUTHOR","GraphHeader-CommitDateTime":"COMMIT DATE / TIME","GraphHeader-CommitGraph":"GRAPH","GraphHeader-CommitMessage":"COMMIT MESSAGE","GraphHeader-CommitSha":"SHA","GraphHeader-EditColumns":"Columns settings","GraphHeader-Filter":"Filter","GraphHeader-HiddenRefs-btn":"Hidden Branches / Tags","OptionalGraphZone-CommitAuthor":"Author","OptionalGraphZone-CommitDateTime":"Date / Time","OptionalGraphZone-CommitSha":"Sha","IssueIcon-Tooltip":"{0}: {1}","PullRequestIcon-Tooltip":"#{0}: {1}\n Double-click to open pull request on {2}","Ref-Current":"Current Branch","Ref-Local":"Local Branch","Ref-Remote":"Remote Branch","Ref-Tag":"Tag","RefZone-EnterBranchName":"enter branch name","RefZone-EnterTagName":"enter tag name","Timeline-1HourAgo":"1 hour ago","Timeline-NHoursAgo":"{0} hours ago","Timeline-Yesterday":"yesterday","Timeline-NDaysAgo":"{0} days ago","Timeline-1WeekAgo":"a week ago","Timeline-NWeeksAgo":"{0} weeks ago","Timeline-1MonthAgo":"a month ago","Timeline-NMonthsAgo":"{0} months ago","Timeline-1YearAgo":"a year ago","Timeline-NYearsAgo":"{0} years ago","Timeline-NPlusYearsAgo":"{0}+ years ago","UpstreamIndicatorIcon-BehindAndAheadTooltip":"{0} commit(s) behind and {1} commit(s) ahead of {2}\n Double-click to pull changes","UpstreamIndicatorIcon-BehindTooltip":"{0} commit(s) behind {1}\n Double-click to pull changes","UpstreamIndicatorIcon-AheadTooltip":"{0} commit(s) ahead of {1}\n Double-click to pull changes",ResizePanel:"Resize Panel",Stash:"Stash",Hide:"Hide",Show:"Show","WorkDirMessageInput-WIPPlaceholder":"WIP"},we={0:1,90:0,180:-1,270:0},Ce={0:0,90:1,180:0,270:-1},xe=m.O5-m.NP,Se=` A ${xe} ${xe} 0 0 0 `;function _e(e,t,n){const o=we[n],r=Ce[n];return{x:e-m.O5*o,xOffset:-o*m.NP,y:t+m.O5*r,yOffset:r*m.NP}}const Te={};var Re=function(e,t,n,o,r,i,s,a){const l=N(o,e,s,a);return l.d=function(e,t,n,o){const r=`${e}_${t}_${n}_${o}`;let i=Te[r];if(i)return i;const s=_e(e,t,o),a=_e(e,t,n);return i=`M ${s.x} ${s.y}${a.xOffset?` H ${s.x+a.xOffset}`:` V ${s.y+a.yOffset}`}${Se}${a.x+s.xOffset} ${a.y+s.yOffset}${s.xOffset?` H ${a.x}`:` V ${a.y}`}`,Te[r]=i,i}(r,i,n,t),$("path",l)};let ke={};function Ee(e,t,n,o,r,i,s,a){const l=P(e,t,n,a);let c=ke[l];return c||(c=function(e,t){return e===t}(t,e)?function(e,t,n,o,r,i,s){const a=N(n,e,i,s);return a.x1=M(t,o,r,s),a.x2=M(t,o,r,s),a.y1=0,a.y2=m.at/2,A(a)}(o[e],t,n,r,i,s,a):function(e,t,n,o,r,i,s,a){const l=N(o,e,s,a),c=t<n?-m.O5:m.O5,d={...l};d.x1=M(n,r,i,a),d.x2=M(n,r,i,a),d.y1=0,d.y2=m.An;const h={...l};return h.x1=M(n,r,i,a)+c,h.x2=M(t,r,i,a),h.y1=m.at/2,h.y2=m.at/2,`<g>${A(d)}${Re(e,t>n?0:90,t>n?90:180,o,M(n,r,i,a)+c,m.An,s,a)}${A(h)}</g>`}(o[e],t,e,n,r,i,s,a),ke[l]=c,c)}let Oe={};function Ie(e,t,n,o,r,i,s){const a=z(e,t,s);let l=Oe[a];if(l)return l;const c=M(e,o,r,s),d=N(t,n[e],i,s);return d.x1=c,d.x2=c,d.y1=0,d.y2=m.at,l=A(d),Oe[a]=l,l}let Me={};function De(e,t,n,o,r,i,s,a){const l=P(e,t,n,a);let c=Me[l];return c||(c=function(e,t){return e===t}(t,e)?function(e,t,n,o,r,i,s){const a=N(n,e,i,s);return a.x1=M(t,o,r,s),a.x2=M(t,o,r,s),a.y1=m.at/2,a.y2=m.at,A(a)}(o[e],t,n,r,i,s,a):function(e,t,n,o,r,i,s,a){const l=N(o,e,s,a),c=t<n?-m.O5:m.O5,d={...l};d.x1=M(n,r,i,a),d.x2=M(n,r,i,a),d.y1=m.at-m.$s,d.y2=m.at;const h={...l};return h.x1=M(n,r,i,a)+c,h.x2=M(t,r,i,a),h.y1=m.at/2,h.y2=m.at/2,`<g>${Re(e,t<n?180:270,t<n?270:0,o,M(n,r,i,a)+c,m.at-m.$s,s,a)}${A(d)}${A(h)}</g>`}(o[e],t,e,n,r,i,s,a),Me[l]=c,c)}let $e={};function Ae(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ne(e){return Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ne(e)}function Pe(e){var t=function(e,t){if("object"!==Ne(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==Ne(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===Ne(t)?t:String(t)}function ze(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Pe(o.key),o)}}function He(e,t,n){return t&&ze(e.prototype,t),n&&ze(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Fe(e,t){if(t&&("object"===Ne(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Le(e)}function Ge(e){return Ge=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ge(e)}function Be(e,t){return Be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Be(e,t)}function We(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Be(e,t)}function Ue(e,t,n){return(t=Pe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var je=n(6871);function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ve.apply(this,arguments)}function Ze(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ze(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}const qe=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=Ze(e))&&(o&&(o+=" "),o+=t);return o};function Ke(e){var t=e.cellCount,n=e.cellSize,o=e.computeMetadataCallback,r=e.computeMetadataCallbackProps,i=e.nextCellsCount,s=e.nextCellSize,a=e.nextScrollToIndex,l=e.scrollToIndex,c=e.updateScrollOffsetForScrollToIndex;t===i&&("number"!=typeof n&&"number"!=typeof s||n===s)||(o(r),l>=0&&l===a&&c())}function Ye(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Xe=function(){function e(t){var n=t.cellCount,o=t.cellSizeGetter,r=t.estimatedCellSize;Ae(this,e),Ue(this,"_cellSizeAndPositionData",{}),Ue(this,"_lastMeasuredIndex",-1),Ue(this,"_lastBatchedIndex",-1),Ue(this,"_cellCount",void 0),Ue(this,"_cellSizeGetter",void 0),Ue(this,"_estimatedCellSize",void 0),this._cellSizeGetter=o,this._cellCount=n,this._estimatedCellSize=r}return He(e,[{key:"areOffsetsAdjusted",value:function(){return!1}},{key:"configure",value:function(e){var t=e.cellCount,n=e.estimatedCellSize,o=e.cellSizeGetter;this._cellCount=t,this._estimatedCellSize=n,this._cellSizeGetter=o}},{key:"getCellCount",value:function(){return this._cellCount}},{key:"getEstimatedCellSize",value:function(){return this._estimatedCellSize}},{key:"getLastMeasuredIndex",value:function(){return this._lastMeasuredIndex}},{key:"getOffsetAdjustment",value:function(){return 0}},{key:"getSizeAndPositionOfCell",value:function(e){if(e<0||e>=this._cellCount)throw Error("Requested index ".concat(e," is outside of range 0..").concat(this._cellCount));if(e>this._lastMeasuredIndex)for(var t=this.getSizeAndPositionOfLastMeasuredCell(),n=t.offset+t.size,o=this._lastMeasuredIndex+1;o<=e;o++){var r=this._cellSizeGetter({index:o});if(void 0===r||isNaN(r))throw Error("Invalid size returned for cell ".concat(o," of value ").concat(r));null===r?(this._cellSizeAndPositionData[o]={offset:n,size:0},this._lastBatchedIndex=e):(this._cellSizeAndPositionData[o]={offset:n,size:r},n+=r,this._lastMeasuredIndex=e)}return this._cellSizeAndPositionData[e]}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._lastMeasuredIndex>=0?this._cellSizeAndPositionData[this._lastMeasuredIndex]:{offset:0,size:0}}},{key:"getTotalSize",value:function(){var e=this.getSizeAndPositionOfLastMeasuredCell();return e.offset+e.size+(this._cellCount-this._lastMeasuredIndex-1)*this._estimatedCellSize}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,n=void 0===t?"auto":t,o=e.containerSize,r=e.currentOffset,i=e.targetIndex;if(o<=0)return 0;var s,a=this.getSizeAndPositionOfCell(i),l=a.offset,c=l-o+a.size;switch(n){case"start":s=l;break;case"end":s=c;break;case"center":s=l-(o-a.size)/2;break;default:s=Math.max(c,Math.min(l,r))}var d=this.getTotalSize();return Math.max(0,Math.min(d-o,s))}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,n=e.offset;if(0===this.getTotalSize())return{};var o=n+t,r=this._findNearestCell(n),i=this.getSizeAndPositionOfCell(r);n=i.offset+i.size;for(var s=r;n<o&&s<this._cellCount-1;)s++,n+=this.getSizeAndPositionOfCell(s).size;return{start:r,stop:s}}},{key:"resetCell",value:function(e){this._lastMeasuredIndex=Math.min(this._lastMeasuredIndex,e-1)}},{key:"_binarySearch",value:function(e,t,n){for(;t<=e;){var o=t+Math.floor((e-t)/2),r=this.getSizeAndPositionOfCell(o).offset;if(r===n)return o;r<n?t=o+1:r>n&&(e=o-1)}return t>0?t-1:0}},{key:"_exponentialSearch",value:function(e,t){for(var n=1;e<this._cellCount&&this.getSizeAndPositionOfCell(e).offset<t;)e+=n,n*=2;return this._binarySearch(Math.min(e,this._cellCount-1),Math.floor(e/2),t)}},{key:"_findNearestCell",value:function(e){if(isNaN(e))throw Error("Invalid offset ".concat(e," specified"));e=Math.max(0,e);var t=this.getSizeAndPositionOfLastMeasuredCell(),n=Math.max(0,this._lastMeasuredIndex);return t.offset>=e?this._binarySearch(n,0,e):this._exponentialSearch(n,e)}}]),e}(),Qe=function(){function e(t){var n=t.maxScrollSize,o=void 0===n?"undefined"!=typeof window&&window.chrome?16777100:15e5:n,r=Ye(t,["maxScrollSize"]);Ae(this,e),Ue(this,"_cellSizeAndPositionManager",void 0),Ue(this,"_maxScrollSize",void 0),this._cellSizeAndPositionManager=new Xe(r),this._maxScrollSize=o}return He(e,[{key:"areOffsetsAdjusted",value:function(){return this._cellSizeAndPositionManager.getTotalSize()>this._maxScrollSize}},{key:"configure",value:function(e){this._cellSizeAndPositionManager.configure(e)}},{key:"getCellCount",value:function(){return this._cellSizeAndPositionManager.getCellCount()}},{key:"getEstimatedCellSize",value:function(){return this._cellSizeAndPositionManager.getEstimatedCellSize()}},{key:"getLastMeasuredIndex",value:function(){return this._cellSizeAndPositionManager.getLastMeasuredIndex()}},{key:"getOffsetAdjustment",value:function(e){var t=e.containerSize,n=e.offset,o=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize(),i=this._getOffsetPercentage({containerSize:t,offset:n,totalSize:r});return Math.round(i*(r-o))}},{key:"getSizeAndPositionOfCell",value:function(e){return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(e)}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell()}},{key:"getTotalSize",value:function(){return Math.min(this._maxScrollSize,this._cellSizeAndPositionManager.getTotalSize())}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,n=void 0===t?"auto":t,o=e.containerSize,r=e.currentOffset,i=e.targetIndex;r=this._safeOffsetToOffset({containerSize:o,offset:r});var s=this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({align:n,containerSize:o,currentOffset:r,targetIndex:i});return this._offsetToSafeOffset({containerSize:o,offset:s})}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,n=e.offset;return n=this._safeOffsetToOffset({containerSize:t,offset:n}),this._cellSizeAndPositionManager.getVisibleCellRange({containerSize:t,offset:n})}},{key:"resetCell",value:function(e){this._cellSizeAndPositionManager.resetCell(e)}},{key:"_getOffsetPercentage",value:function(e){var t=e.containerSize,n=e.offset,o=e.totalSize;return o<=t?0:n/(o-t)}},{key:"_offsetToSafeOffset",value:function(e){var t=e.containerSize,n=e.offset,o=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();if(o===r)return n;var i=this._getOffsetPercentage({containerSize:t,offset:n,totalSize:o});return Math.round(i*(r-t))}},{key:"_safeOffsetToOffset",value:function(e){var t=e.containerSize,n=e.offset,o=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();if(o===r)return n;var i=this._getOffsetPercentage({containerSize:t,offset:n,totalSize:r});return Math.round(i*(o-t))}}]),e}();function Je(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t={};return function(n){var o=n.callback,r=n.indices,i=Object.keys(r),s=!e||i.every((function(e){var t=r[e];return Array.isArray(t)?t.length>0:t>=0})),a=i.length!==Object.keys(t).length||i.some((function(e){var n=t[e],o=r[e];return Array.isArray(o)?n.join(",")!==o.join(","):n!==o}));t=r,s&&a&&o(r)}}var et=-1;function tt(e){var t=e.cellSize,n=e.cellSizeAndPositionManager,o=e.previousCellsCount,r=e.previousCellSize,i=e.previousScrollToAlignment,s=e.previousScrollToIndex,a=e.previousSize,l=e.scrollOffset,c=e.scrollToAlignment,d=e.scrollToIndex,h=e.size,u=e.sizeJustIncreasedFromZero,p=e.updateScrollIndexCallback,f=n.getCellCount(),m=d>=0&&d<f;m&&(h!==a||u||!r||"number"==typeof t&&t!==r||c!==i||d!==s)?p(d):!m&&f>0&&(h<a||f<o)&&l>n.getTotalSize()-h&&p(f-1)}const nt=!("undefined"==typeof window||!window.document||!window.document.createElement);var ot,rt;function it(e){if((!ot&&0!==ot||e)&&nt){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),ot=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return ot}var st,at,lt=(rt="undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).requestAnimationFrame||rt.webkitRequestAnimationFrame||rt.mozRequestAnimationFrame||rt.oRequestAnimationFrame||rt.msRequestAnimationFrame||function(e){return rt.setTimeout(e,1e3/60)},ct=rt.cancelAnimationFrame||rt.webkitCancelAnimationFrame||rt.mozCancelAnimationFrame||rt.oCancelAnimationFrame||rt.msCancelAnimationFrame||function(e){rt.clearTimeout(e)},dt=lt,ht=ct,ut=function(e){return ht(e.id)},pt=function(e,t){var n;Promise.resolve().then((function(){n=Date.now()}));var o={id:dt((function r(){Date.now()-n>=t?e.call():o.id=dt(r)}))};return o};function ft(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function mt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ft(n,!0).forEach((function(t){Ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ft(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var gt="requested",bt=(at=st=function(e){function t(e){var n;Ae(this,t),Ue(Le(n=Fe(this,Ge(t).call(this,e))),"_onGridRenderedMemoizer",Je()),Ue(Le(n),"_onScrollMemoizer",Je(!1)),Ue(Le(n),"_deferredInvalidateColumnIndex",null),Ue(Le(n),"_deferredInvalidateRowIndex",null),Ue(Le(n),"_recomputeScrollLeftFlag",!1),Ue(Le(n),"_recomputeScrollTopFlag",!1),Ue(Le(n),"_horizontalScrollBarSize",0),Ue(Le(n),"_verticalScrollBarSize",0),Ue(Le(n),"_scrollbarPresenceChanged",!1),Ue(Le(n),"_scrollingContainer",void 0),Ue(Le(n),"_childrenToDisplay",void 0),Ue(Le(n),"_columnStartIndex",void 0),Ue(Le(n),"_columnStopIndex",void 0),Ue(Le(n),"_rowStartIndex",void 0),Ue(Le(n),"_rowStopIndex",void 0),Ue(Le(n),"_renderedColumnStartIndex",0),Ue(Le(n),"_renderedColumnStopIndex",0),Ue(Le(n),"_renderedRowStartIndex",0),Ue(Le(n),"_renderedRowStopIndex",0),Ue(Le(n),"_initialScrollTop",void 0),Ue(Le(n),"_initialScrollLeft",void 0),Ue(Le(n),"_disablePointerEventsTimeoutId",void 0),Ue(Le(n),"_styleCache",{}),Ue(Le(n),"_cellCache",{}),Ue(Le(n),"_debounceScrollEndedCallback",(function(){n._disablePointerEventsTimeoutId=null,n.setState({isScrolling:!1,needToResetStyleCache:!1})})),Ue(Le(n),"_invokeOnGridRenderedHelper",(function(){var e=n.props.onSectionRendered;n._onGridRenderedMemoizer({callback:e,indices:{columnOverscanStartIndex:n._columnStartIndex,columnOverscanStopIndex:n._columnStopIndex,columnStartIndex:n._renderedColumnStartIndex,columnStopIndex:n._renderedColumnStopIndex,rowOverscanStartIndex:n._rowStartIndex,rowOverscanStopIndex:n._rowStopIndex,rowStartIndex:n._renderedRowStartIndex,rowStopIndex:n._renderedRowStopIndex}})})),Ue(Le(n),"_onWheel",(function(e){var t=e.deltaX,o=e.deltaY;n.handleWheelEvent({deltaX:t,deltaY:o})})),Ue(Le(n),"_setScrollingContainerRef",(function(e){e&&(e.removeEventListener("wheel",n.preventDefault),e.addEventListener("wheel",n.preventDefault,{passive:!1})),n._scrollingContainer=e})),Ue(Le(n),"_onScroll",(function(e){e.target===n._scrollingContainer&&n.handleScrollEvent(e.target)}));var o=new Qe({cellCount:e.columnCount,cellSizeGetter:function(n){return t._wrapSizeGetter(e.columnWidth)(n)},estimatedCellSize:t._getEstimatedColumnSize(e)}),r=new Qe({cellCount:e.rowCount,cellSizeGetter:function(n){return t._wrapSizeGetter(e.rowHeight)(n)},estimatedCellSize:t._getEstimatedRowSize(e)});return n.state={instanceProps:{columnSizeAndPositionManager:o,rowSizeAndPositionManager:r,prevColumnWidth:e.columnWidth,prevRowHeight:e.rowHeight,prevColumnCount:e.columnCount,prevRowCount:e.rowCount,prevIsScrolling:!0===e.isScrolling,prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow,scrollbarSize:0,scrollbarSizeMeasured:!1},isScrolling:!1,scrollDirectionHorizontal:1,scrollDirectionVertical:1,scrollLeft:0,scrollTop:0,scrollPositionChangeReason:null,needToResetStyleCache:!1},e.scrollToRow>0&&(n._initialScrollTop=n._getCalculatedScrollTop(e,n.state)),e.scrollToColumn>0&&(n._initialScrollLeft=n._getCalculatedScrollLeft(e,n.state)),n}return We(t,e),He(t,[{key:"getOffsetForCell",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.alignment,n=void 0===t?this.props.scrollToAlignment:t,o=e.columnIndex,r=void 0===o?this.props.scrollToColumn:o,i=e.rowIndex,s=void 0===i?this.props.scrollToRow:i,a=mt({},this.props,{scrollToAlignment:n,scrollToColumn:r,scrollToRow:s});return{scrollLeft:this._getCalculatedScrollLeft(a),scrollTop:this._getCalculatedScrollTop(a)}}},{key:"getTotalRowsHeight",value:function(){return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize()}},{key:"getTotalColumnsWidth",value:function(){return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize()}},{key:"handleScrollEvent",value:function(e){var t=e.scrollLeft,n=void 0===t?0:t,o=e.scrollTop,r=void 0===o?0:o;if(!(r<0)){this._debounceScrollEnded();var i=this.props,s=i.autoHeight,a=i.autoWidth,l=i.height,c=i.width,d=this.state.instanceProps,h=d.scrollbarSize,u=d.rowSizeAndPositionManager.getTotalSize(),p=d.columnSizeAndPositionManager.getTotalSize(),f=Math.min(Math.max(0,p-c+h),n),m=Math.min(Math.max(0,u-l+h),r);if(this.state.scrollLeft!==f||this.state.scrollTop!==m){var g={isScrolling:!0,scrollDirectionHorizontal:f!==this.state.scrollLeft?f>this.state.scrollLeft?1:et:this.state.scrollDirectionHorizontal,scrollDirectionVertical:m!==this.state.scrollTop?m>this.state.scrollTop?1:et:this.state.scrollDirectionVertical,scrollPositionChangeReason:"observed"};s||(g.scrollTop=m),a||(g.scrollLeft=f),g.needToResetStyleCache=!1,this.setState(g)}this._invokeOnScrollMemoizer({scrollLeft:f,scrollTop:m,totalColumnsWidth:p,totalRowsHeight:u})}}},{key:"preventDefault",value:function(e){e.preventDefault()}},{key:"handleWheelEvent",value:function(e){var t=e.deltaX,n=e.deltaY;this._debounceScrollEnded();var o=this.props,r=o.autoHeight,i=o.autoWidth,s=o.height,a=o.width,l=this.state.instanceProps.scrollbarSize,c=this.state.instanceProps.rowSizeAndPositionManager.getTotalSize(),d=this.state.instanceProps.columnSizeAndPositionManager.getTotalSize(),h=Math.min(Math.max(0,d-a+l),Math.max(0,this._scrollingContainer.scrollLeft+t)),u=Math.min(Math.max(0,c-s+l),Math.max(0,this._scrollingContainer.scrollTop+n));if(this.state.scrollLeft!==h||this.state.scrollTop!==u){var p={isScrolling:!0,scrollDirectionHorizontal:h!==this.state.scrollLeft?h>this.state.scrollLeft?1:et:this.state.scrollDirectionHorizontal,scrollDirectionVertical:u!==this.state.scrollTop?u>this.state.scrollTop?1:et:this.state.scrollDirectionVertical,scrollPositionChangeReason:gt};r||(p.scrollTop=u),i||(p.scrollLeft=h),p.needToResetStyleCache=!1,this.setState(p)}this._invokeOnScrollMemoizer({scrollLeft:h,scrollTop:u,totalColumnsWidth:d,totalRowsHeight:c})}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,n=e.rowIndex;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,t):t,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,n):n}},{key:"measureAllCells",value:function(){var e=this.props,t=e.columnCount,n=e.rowCount,o=this.state.instanceProps;o.columnSizeAndPositionManager.getSizeAndPositionOfCell(t-1),o.rowSizeAndPositionManager.getSizeAndPositionOfCell(n-1)}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o,i=this.props,s=i.scrollToColumn,a=i.scrollToRow,l=this.state.instanceProps;l.columnSizeAndPositionManager.resetCell(n),l.rowSizeAndPositionManager.resetCell(r),this._recomputeScrollLeftFlag=s>=0&&(1===this.state.scrollDirectionHorizontal?n<=s:n>=s),this._recomputeScrollTopFlag=a>=0&&(1===this.state.scrollDirectionVertical?r<=a:r>=a),this._styleCache={},this._cellCache={},this.forceUpdate()}},{key:"scrollToCell",value:function(e){var t=e.columnIndex,n=e.rowIndex,o=this.props,r=o.columnCount,i=o.onScrollToTargetCausedUpdate,s=this.state,a=s.scrollLeft,l=s.scrollTop,c=this.props,d=this.state,h=void 0,u=void 0;if(r>1&&void 0!==t){var p=this._updateScrollLeftForScrollToColumn(mt({},c,{scrollToColumn:t}),d,!0);p&&"number"==typeof p.scrollLeft&&p.scrollLeft>=0&&(h=p.scrollLeft)}if(void 0!==n){var f=this._updateScrollTopForScrollToRow(mt({},c,{scrollToRow:n}),d,!0);f&&"number"==typeof f.scrollTop&&f.scrollTop>=0&&(u=f.scrollTop)}if(i&&("number"==typeof h||"number"==typeof u)){var m="number"!=typeof h?h:a,g="number"!=typeof u?u:l;i({clientHeight:c.height,clientWidth:c.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:m,scrollTop:g,scrollWidth:this.getTotalColumnsWidth()})}}},{key:"componentDidMount",value:function(){var e=this.props,n=e.getScrollbarSize,o=e.height,r=e.scrollLeft,i=e.scrollToColumn,s=e.scrollTop,a=e.scrollToRow,l=e.width,c=this.state.instanceProps;if(this._initialScrollTop=0,this._initialScrollLeft=0,this._handleInvalidatedGridSize(),c.scrollbarSizeMeasured||this.setState((function(e){var t=mt({},e,{needToResetStyleCache:!1});return t.instanceProps.scrollbarSize=n(),t.instanceProps.scrollbarSizeMeasured=!0,t})),"number"==typeof r&&r>=0||"number"==typeof s&&s>=0){var d=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:r,scrollTop:s});d&&(d.needToResetStyleCache=!1,this.setState(d))}this._scrollingContainer&&(this._scrollingContainer.scrollLeft!==this.state.scrollLeft&&(this._scrollingContainer.scrollLeft=this.state.scrollLeft),this._scrollingContainer.scrollTop!==this.state.scrollTop&&(this._scrollingContainer.scrollTop=this.state.scrollTop));var h=o>0&&l>0;i>=0&&h&&this._updateScrollLeftForScrollToColumn(),a>=0&&h&&this._updateScrollTopForScrollToRow(),this._invokeOnGridRenderedHelper(),this._invokeOnScrollMemoizer({scrollLeft:r||0,scrollTop:s||0,totalColumnsWidth:c.columnSizeAndPositionManager.getTotalSize(),totalRowsHeight:c.rowSizeAndPositionManager.getTotalSize()}),this._maybeCallOnScrollbarPresenceChange()}},{key:"componentDidUpdate",value:function(e,t){var n=this,o=this.props,r=o.autoHeight,i=o.autoWidth,s=o.columnCount,a=o.height,l=o.rowCount,c=o.scrollToAlignment,d=o.scrollToColumn,h=o.scrollToRow,u=o.width,p=this.state,f=p.scrollLeft,m=p.scrollPositionChangeReason,g=p.scrollTop,b=p.instanceProps;this._handleInvalidatedGridSize();var v=s>0&&0===e.columnCount||l>0&&0===e.rowCount;m===gt&&(!i&&f>=0&&(f!==this._scrollingContainer.scrollLeft||v)&&(this._scrollingContainer.scrollLeft=f),!r&&g>=0&&(g!==this._scrollingContainer.scrollTop||v)&&(this._scrollingContainer.scrollTop=g));var y=(0===e.width||0===e.height)&&a>0&&u>0;if(this._recomputeScrollLeftFlag?(this._recomputeScrollLeftFlag=!1,this._updateScrollLeftForScrollToColumn(this.props)):tt({cellSizeAndPositionManager:b.columnSizeAndPositionManager,previousCellsCount:e.columnCount,previousCellSize:e.columnWidth,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToColumn,previousSize:e.width,scrollOffset:f,scrollToAlignment:c,scrollToIndex:d,size:u,sizeJustIncreasedFromZero:y,updateScrollIndexCallback:function(){return n._updateScrollLeftForScrollToColumn(n.props)}}),this._recomputeScrollTopFlag?(this._recomputeScrollTopFlag=!1,this._updateScrollTopForScrollToRow(this.props)):tt({cellSizeAndPositionManager:b.rowSizeAndPositionManager,previousCellsCount:e.rowCount,previousCellSize:e.rowHeight,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToRow,previousSize:e.height,scrollOffset:g,scrollToAlignment:c,scrollToIndex:h,size:a,sizeJustIncreasedFromZero:y,updateScrollIndexCallback:function(){return n._updateScrollTopForScrollToRow(n.props)}}),this._invokeOnGridRenderedHelper(),f!==t.scrollLeft||g!==t.scrollTop){var w=b.rowSizeAndPositionManager.getTotalSize(),C=b.columnSizeAndPositionManager.getTotalSize();this._invokeOnScrollMemoizer({scrollLeft:f,scrollTop:g,totalColumnsWidth:C,totalRowsHeight:w})}this._maybeCallOnScrollbarPresenceChange()}},{key:"componentWillUnmount",value:function(){this._scrollingContainer&&this._scrollingContainer.removeEventListener("wheel",this.preventDefault),this._disablePointerEventsTimeoutId&&ut(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoContainerWidth,n=e.autoHeight,o=e.autoWidth,r=e.className,i=e.containerProps,a=e.containerRole,l=e.containerStyle,c=e.height,d=e.id,h=e.noContentRenderer,u=e.role,p=e.style,f=e.tabIndex,m=e.width,g=this.state,b=g.instanceProps,v=g.needToResetStyleCache,y=this._isScrolling(),w={boxSizing:"border-box",direction:"ltr",height:n?"auto":c,position:"relative",width:o?"auto":m,WebkitOverflowScrolling:"touch",willChange:"transform"};v&&(this._styleCache={}),this.state.isScrolling||this._resetStyleCache(),this._calculateChildrenToRender(this.props,this.state);var C=b.columnSizeAndPositionManager.getTotalSize(),x=b.rowSizeAndPositionManager.getTotalSize(),S=x>c?b.scrollbarSize:0,_=C>m?b.scrollbarSize:0;_===this._horizontalScrollBarSize&&S===this._verticalScrollBarSize||(this._horizontalScrollBarSize=_,this._verticalScrollBarSize=S,this._scrollbarPresenceChanged=!0),w.overflowX=C+S<=m?"hidden":"auto",w.overflowY=x+_<=c?"hidden":"auto";var T=this._childrenToDisplay,R=0===T.length&&c>0&&m>0;return s.createElement("div",Ve({ref:this._setScrollingContainerRef},i,{"aria-label":this.props["aria-label"],"aria-readonly":this.props["aria-readonly"],className:qe("ReactVirtualized__Grid",r),id:d,onScroll:this._onScroll,onWheel:this._onWheel,role:u,style:mt({},w,{},p),tabIndex:f}),T.length>0&&s.createElement("div",{className:"ReactVirtualized__Grid__innerScrollContainer",role:a,style:mt({width:t?"auto":C,height:x,maxWidth:C,maxHeight:x,overflow:"hidden",pointerEvents:y?"none":"",position:"relative"},l)},T),R&&h())}},{key:"_calculateChildrenToRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,n=e.cellRenderer,o=e.cellRangeRenderer,r=e.columnCount,i=e.deferredMeasurementCache,s=e.height,a=e.overscanColumnCount,l=e.overscanIndicesGetter,c=e.overscanRowCount,d=e.rowCount,h=e.width,u=e.isScrollingOptOut,p=t.scrollDirectionHorizontal,f=t.scrollDirectionVertical,m=t.instanceProps,g=this._initialScrollTop>0?this._initialScrollTop:t.scrollTop,b=this._initialScrollLeft>0?this._initialScrollLeft:t.scrollLeft,v=this._isScrolling(e,t);if(this._childrenToDisplay=[],s>0&&h>0){var y=m.columnSizeAndPositionManager.getVisibleCellRange({containerSize:h,offset:b}),w=m.rowSizeAndPositionManager.getVisibleCellRange({containerSize:s,offset:g}),C=m.columnSizeAndPositionManager.getOffsetAdjustment({containerSize:h,offset:b}),x=m.rowSizeAndPositionManager.getOffsetAdjustment({containerSize:s,offset:g});this._renderedColumnStartIndex=y.start,this._renderedColumnStopIndex=y.stop,this._renderedRowStartIndex=w.start,this._renderedRowStopIndex=w.stop;var S=l({direction:"horizontal",cellCount:r,overscanCellsCount:a,scrollDirection:p,startIndex:"number"==typeof y.start?y.start:0,stopIndex:"number"==typeof y.stop?y.stop:-1}),_=l({direction:"vertical",cellCount:d,overscanCellsCount:c,scrollDirection:f,startIndex:"number"==typeof w.start?w.start:0,stopIndex:"number"==typeof w.stop?w.stop:-1}),T=S.overscanStartIndex,R=S.overscanStopIndex,k=_.overscanStartIndex,E=_.overscanStopIndex;if(i){if(!i.hasFixedHeight())for(var O=k;O<=E;O++)if(!i.has(O,0)){T=0,R=r-1;break}if(!i.hasFixedWidth())for(var I=T;I<=R;I++)if(!i.has(0,I)){k=0,E=d-1;break}}this._childrenToDisplay=o({cellCache:this._cellCache,cellRenderer:n,columnSizeAndPositionManager:m.columnSizeAndPositionManager,columnStartIndex:T,columnStopIndex:R,deferredMeasurementCache:i,horizontalOffsetAdjustment:C,isScrolling:v,isScrollingOptOut:u,parent:this,rowSizeAndPositionManager:m.rowSizeAndPositionManager,rowStartIndex:k,rowStopIndex:E,scrollLeft:b,scrollTop:g,styleCache:this._styleCache,verticalOffsetAdjustment:x,visibleColumnIndices:y,visibleRowIndices:w}),this._columnStartIndex=T,this._columnStopIndex=R,this._rowStartIndex=k,this._rowStopIndex=E}}},{key:"_debounceScrollEnded",value:function(){var e=this.props.scrollingResetTimeInterval;this._disablePointerEventsTimeoutId&&ut(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=pt(this._debounceScrollEndedCallback,e)}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex&&"number"==typeof this._deferredInvalidateRowIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t})}}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,n=e.scrollLeft,o=e.scrollTop,r=e.totalColumnsWidth,i=e.totalRowsHeight;this._onScrollMemoizer({callback:function(e){var n=e.scrollLeft,o=e.scrollTop,s=t.props,a=s.height;(0,s.onScroll)({clientHeight:a,clientWidth:s.width,scrollHeight:i,scrollLeft:n,scrollTop:o,scrollWidth:r})},indices:{scrollLeft:n,scrollTop:o}})}},{key:"_isScrolling",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return Object.hasOwnProperty.call(e,"isScrolling")?Boolean(e.isScrolling):Boolean(t.isScrolling)}},{key:"_maybeCallOnScrollbarPresenceChange",value:function(){if(this._scrollbarPresenceChanged){var e=this.props.onScrollbarPresenceChange;this._scrollbarPresenceChanged=!1,e({horizontal:this._horizontalScrollBarSize>0,size:this.state.instanceProps.scrollbarSize,vertical:this._verticalScrollBarSize>0})}}},{key:"scrollToPosition",value:function(e){var n=e.scrollLeft,o=e.scrollTop,r=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:n,scrollTop:o});r&&(r.needToResetStyleCache=!1,this.setState(r))}},{key:"_getCalculatedScrollLeft",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollLeft(e,n)}},{key:"_updateScrollLeftForScrollToColumn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t._getScrollLeftForScrollToColumnStateUpdate(e,n);if(r)return r.needToResetStyleCache=!1,this.setState(r),e.onScrollToTargetCausedUpdate&&!o&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),r}},{key:"_getCalculatedScrollTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollTop(e,n)}},{key:"_resetStyleCache",value:function(){var e=this._styleCache,t=this._cellCache,n=this.props.isScrollingOptOut;this._cellCache={},this._styleCache={};for(var o=this._rowStartIndex;o<=this._rowStopIndex;o++)for(var r=this._columnStartIndex;r<=this._columnStopIndex;r++){var i="".concat(o,"-").concat(r);this._styleCache[i]=e[i],n&&(this._cellCache[i]=t[i])}}},{key:"_updateScrollTopForScrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t._getScrollTopForScrollToRowStateUpdate(e,n);if(r)return r.needToResetStyleCache=!1,this.setState(r),e.onScrollToTargetCausedUpdate&&!o&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),r}}],[{key:"getDerivedStateFromProps",value:function(e,n){var o={};0===e.columnCount&&0!==n.scrollLeft||0===e.rowCount&&0!==n.scrollTop?(o.scrollLeft=0,o.scrollTop=0):(e.scrollLeft!==n.scrollLeft&&e.scrollToColumn<0||e.scrollTop!==n.scrollTop&&e.scrollToRow<0)&&Object.assign(o,t._getScrollToPositionStateUpdate({prevState:n,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}));var r,i,s=n.instanceProps;return o.needToResetStyleCache=!1,e.columnWidth===s.prevColumnWidth&&e.rowHeight===s.prevRowHeight||(o.needToResetStyleCache=!0),s.columnSizeAndPositionManager.configure({cellCount:e.columnCount,estimatedCellSize:t._getEstimatedColumnSize(e),cellSizeGetter:t._wrapSizeGetter(e.columnWidth)}),s.rowSizeAndPositionManager.configure({cellCount:e.rowCount,estimatedCellSize:t._getEstimatedRowSize(e),cellSizeGetter:t._wrapSizeGetter(e.rowHeight)}),0!==s.prevColumnCount&&0!==s.prevRowCount||(s.prevColumnCount=0,s.prevRowCount=0),e.autoHeight&&!1===e.isScrolling&&!0===s.prevIsScrolling&&Object.assign(o,{isScrolling:!1}),Ke({cellCount:s.prevColumnCount,cellSize:"number"==typeof s.prevColumnWidth?s.prevColumnWidth:null,computeMetadataCallback:function(){return s.columnSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.columnCount,nextCellSize:"number"==typeof e.columnWidth?e.columnWidth:null,nextScrollToIndex:e.scrollToColumn,scrollToIndex:s.prevScrollToColumn,updateScrollOffsetForScrollToIndex:function(){r=t._getScrollLeftForScrollToColumnStateUpdate(e,n)}}),Ke({cellCount:s.prevRowCount,cellSize:"number"==typeof s.prevRowHeight?s.prevRowHeight:null,computeMetadataCallback:function(){return s.rowSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.rowCount,nextCellSize:"number"==typeof e.rowHeight?e.rowHeight:null,nextScrollToIndex:e.scrollToRow,scrollToIndex:s.prevScrollToRow,updateScrollOffsetForScrollToIndex:function(){i=t._getScrollTopForScrollToRowStateUpdate(e,n)}}),s.prevColumnCount=e.columnCount,s.prevColumnWidth=e.columnWidth,s.prevIsScrolling=!0===e.isScrolling,s.prevRowCount=e.rowCount,s.prevRowHeight=e.rowHeight,s.prevScrollToColumn=e.scrollToColumn,s.prevScrollToRow=e.scrollToRow,s.scrollbarSize=e.getScrollbarSize(),void 0===s.scrollbarSize?(s.scrollbarSizeMeasured=!1,s.scrollbarSize=0):s.scrollbarSizeMeasured=!0,o.instanceProps=s,mt({},o,{},r,{},i)}},{key:"_getEstimatedColumnSize",value:function(e){return"number"==typeof e.columnWidth?e.columnWidth:e.estimatedColumnSize}},{key:"_getEstimatedRowSize",value:function(e){return"number"==typeof e.rowHeight?e.rowHeight:e.estimatedRowSize}},{key:"_getScrollToPositionStateUpdate",value:function(e){var t=e.prevState,n=e.scrollLeft,o=e.scrollTop,r={scrollPositionChangeReason:gt};return"number"==typeof n&&n>=0&&(r.scrollDirectionHorizontal=n>t.scrollLeft?1:et,r.scrollLeft=n),"number"==typeof o&&o>=0&&(r.scrollDirectionVertical=o>t.scrollTop?1:et,r.scrollTop=o),"number"==typeof n&&n>=0&&n!==t.scrollLeft||"number"==typeof o&&o>=0&&o!==t.scrollTop?r:{}}},{key:"_wrapSizeGetter",value:function(e){return"function"==typeof e?e:function(){return e}}},{key:"_getCalculatedScrollLeft",value:function(e,t){var n=e.columnCount,o=e.height,r=e.scrollToAlignment,i=e.scrollToColumn,s=e.width,a=t.scrollLeft,l=t.instanceProps;if(n>0){var c=n-1,d=i<0?c:Math.min(c,i),h=l.rowSizeAndPositionManager.getTotalSize(),u=l.scrollbarSizeMeasured&&h>o?l.scrollbarSize:0;return l.columnSizeAndPositionManager.getUpdatedOffsetForIndex({align:r,containerSize:s-u,currentOffset:a,targetIndex:d})}return 0}},{key:"_getScrollLeftForScrollToColumnStateUpdate",value:function(e,n){var o=n.scrollLeft,r=t._getCalculatedScrollLeft(e,n);return"number"==typeof r&&r>=0&&o!==r?t._getScrollToPositionStateUpdate({prevState:n,scrollLeft:r,scrollTop:-1}):{}}},{key:"_getCalculatedScrollTop",value:function(e,t){var n=e.height,o=e.rowCount,r=e.scrollToAlignment,i=e.scrollToRow,s=e.width,a=t.scrollTop,l=t.instanceProps;if(o>0){var c=o-1,d=i<0?c:Math.min(c,i),h=l.columnSizeAndPositionManager.getTotalSize(),u=l.scrollbarSizeMeasured&&h>s?l.scrollbarSize:0;return l.rowSizeAndPositionManager.getUpdatedOffsetForIndex({align:r,containerSize:n-u,currentOffset:a,targetIndex:d})}return 0}},{key:"_getScrollTopForScrollToRowStateUpdate",value:function(e,n){var o=n.scrollTop,r=t._getCalculatedScrollTop(e,n);return"number"==typeof r&&r>=0&&o!==r?t._getScrollToPositionStateUpdate({prevState:n,scrollLeft:-1,scrollTop:r}):{}}}]),t}(s.PureComponent),Ue(st,"propTypes",null),at);Ue(bt,"defaultProps",{"aria-label":"grid","aria-readonly":!0,autoContainerWidth:!1,autoHeight:!1,autoWidth:!1,cellRangeRenderer:function(e){for(var t=e.cellCache,n=e.cellRenderer,o=e.columnSizeAndPositionManager,r=e.columnStartIndex,i=e.columnStopIndex,s=e.deferredMeasurementCache,a=e.horizontalOffsetAdjustment,l=e.isScrolling,c=e.isScrollingOptOut,d=e.parent,h=e.rowSizeAndPositionManager,u=e.rowStartIndex,p=e.rowStopIndex,f=e.styleCache,m=e.verticalOffsetAdjustment,g=e.visibleColumnIndices,b=e.visibleRowIndices,v=[],y=o.areOffsetsAdjusted()||h.areOffsetsAdjusted(),w=!l&&!y,C=u;C<=p;C++)for(var x=h.getSizeAndPositionOfCell(C),S=r;S<=i;S++){var _=o.getSizeAndPositionOfCell(S),T=S>=g.start&&S<=g.stop&&C>=b.start&&C<=b.stop,R="".concat(C,"-").concat(S),k=void 0;w&&f[R]?k=f[R]:s&&!s.has(C,S)?k={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(k={height:x.size,left:_.offset+a,position:"absolute",top:x.offset+m,width:_.size},f[R]=k);var E={columnIndex:S,isScrolling:l,isVisible:T,key:R,parent:d,rowIndex:C,style:k},O=void 0;!c&&!l||a||m?O=n(E):(t[R]||(t[R]=n(E)),O=t[R]),null!=O&&!1!==O&&v.push(O)}return v},containerRole:"rowgroup",containerStyle:{},estimatedColumnSize:100,estimatedRowSize:30,getScrollbarSize:it,noContentRenderer:function(){return null},onScroll:function(){},onScrollbarPresenceChange:function(){},onSectionRendered:function(){},overscanColumnCount:0,overscanIndicesGetter:function(e){var t=e.cellCount,n=e.overscanCellsCount,o=e.scrollDirection,r=e.startIndex,i=e.stopIndex;return 1===o?{overscanStartIndex:Math.max(0,r),overscanStopIndex:Math.min(t-1,i+n)}:{overscanStartIndex:Math.max(0,r-n),overscanStopIndex:Math.min(t-1,i)}},overscanRowCount:10,role:"grid",scrollingResetTimeInterval:150,scrollToAlignment:"auto",scrollToColumn:-1,scrollToRow:-1,style:{},tabIndex:0,isScrollingOptOut:!1}),(0,je.polyfill)(bt);const vt=bt;function yt(e){var t=e.cellCount,n=e.overscanCellsCount,o=e.scrollDirection,r=e.startIndex,i=e.stopIndex;return n=Math.max(1,n),1===o?{overscanStartIndex:Math.max(0,r-1),overscanStopIndex:Math.min(t-1,i+n)}:{overscanStartIndex:Math.max(0,r-n),overscanStopIndex:Math.min(t-1,i+1)}}var wt,Ct;function xt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var St,_t,Tt=(Ct=wt=function(e){function t(){var e,n;Ae(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ue(Le(n=Fe(this,(e=Ge(t)).call.apply(e,[this].concat(r)))),"state",{scrollToColumn:0,scrollToRow:0,instanceProps:{prevScrollToColumn:0,prevScrollToRow:0}}),Ue(Le(n),"_columnStartIndex",0),Ue(Le(n),"_columnStopIndex",0),Ue(Le(n),"_rowStartIndex",0),Ue(Le(n),"_rowStopIndex",0),Ue(Le(n),"_onKeyDown",(function(e){var t=n.props,o=t.columnCount,r=t.disabled,i=t.mode,s=t.rowCount;if(!r){var a=n._getScrollState(),l=a.scrollToColumn,c=a.scrollToRow,d=n._getScrollState(),h=d.scrollToColumn,u=d.scrollToRow;switch(e.key){case"ArrowDown":u="cells"===i?Math.min(u+1,s-1):Math.min(n._rowStopIndex+1,s-1);break;case"ArrowLeft":h="cells"===i?Math.max(h-1,0):Math.max(n._columnStartIndex-1,0);break;case"ArrowRight":h="cells"===i?Math.min(h+1,o-1):Math.min(n._columnStopIndex+1,o-1);break;case"ArrowUp":u="cells"===i?Math.max(u-1,0):Math.max(n._rowStartIndex-1,0)}h===l&&u===c||(e.preventDefault(),n._updateScrollState({scrollToColumn:h,scrollToRow:u}))}})),Ue(Le(n),"_onSectionRendered",(function(e){var t=e.columnStartIndex,o=e.columnStopIndex,r=e.rowStartIndex,i=e.rowStopIndex;n._columnStartIndex=t,n._columnStopIndex=o,n._rowStartIndex=r,n._rowStopIndex=i})),n}return We(t,e),He(t,[{key:"setScrollIndexes",value:function(e){var t=e.scrollToColumn,n=e.scrollToRow;this.setState({scrollToRow:n,scrollToColumn:t})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,o=this._getScrollState(),r=o.scrollToColumn,i=o.scrollToRow;return s.createElement("div",{className:t,onKeyDown:this._onKeyDown},n({onSectionRendered:this._onSectionRendered,scrollToColumn:r,scrollToRow:i}))}},{key:"_getScrollState",value:function(){return this.props.isControlled?this.props:this.state}},{key:"_updateScrollState",value:function(e){var t=e.scrollToColumn,n=e.scrollToRow,o=this.props,r=o.isControlled,i=o.onScrollToChange;"function"==typeof i&&i({scrollToColumn:t,scrollToRow:n}),r||this.setState({scrollToColumn:t,scrollToRow:n})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.isControlled?{}:e.scrollToColumn!==t.instanceProps.prevScrollToColumn||e.scrollToRow!==t.instanceProps.prevScrollToRow?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xt(n,!0).forEach((function(t){Ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{scrollToColumn:e.scrollToColumn,scrollToRow:e.scrollToRow,instanceProps:{prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow}}):{}}}]),t}(s.PureComponent),Ue(wt,"propTypes",null),Ct);function Rt(e,t){var o,r=void 0!==(o=void 0!==t?t:"undefined"!=typeof window?window:"undefined"!=typeof self?self:n.g).document&&o.document.attachEvent;if(!r){var i=function(){var e=o.requestAnimationFrame||o.mozRequestAnimationFrame||o.webkitRequestAnimationFrame||function(e){return o.setTimeout(e,20)};return function(t){return e(t)}}(),s=function(){var e=o.cancelAnimationFrame||o.mozCancelAnimationFrame||o.webkitCancelAnimationFrame||o.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,n=t.firstElementChild,o=t.lastElementChild,r=n.firstElementChild;o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight,r.style.width=n.offsetWidth+1+"px",r.style.height=n.offsetHeight+1+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},l=function(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&s(this.__resizeRAF__),this.__resizeRAF__=i((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(n){n.call(t,e)})))}))}},c=!1,d="",h="animationstart",u="Webkit Moz O ms".split(" "),p="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),f=o.document.createElement("fakeelement");if(void 0!==f.style.animationName&&(c=!0),!1===c)for(var m=0;m<u.length;m++)if(void 0!==f.style[u[m]+"AnimationName"]){d="-"+u[m].toLowerCase()+"-",h=p[m],c=!0;break}var g="resizeanim",b="@"+d+"keyframes "+g+" { from { opacity: 0; } to { opacity: 0; } } ",v=d+"animation: 1ms "+g+"; "}return{addResizeListener:function(t,n){if(r)t.attachEvent("onresize",n);else{if(!t.__resizeTriggers__){var i=t.ownerDocument,s=o.getComputedStyle(t);s&&"static"==s.position&&(t.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var n=(b||"")+".resize-triggers { "+(v||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',o=t.head||t.getElementsByTagName("head")[0],r=t.createElement("style");r.id="detectElementResize",r.type="text/css",null!=e&&r.setAttribute("nonce",e),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(t.createTextNode(n)),o.appendChild(r)}}(i),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=i.createElement("div")).className="resize-triggers";var c='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var d=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return c}});t.__resizeTriggers__.innerHTML=d.createHTML("")}else t.__resizeTriggers__.innerHTML=c;t.appendChild(t.__resizeTriggers__),a(t),t.addEventListener("scroll",l,!0),h&&(t.__resizeTriggers__.__animationListener__=function(e){e.animationName==g&&a(t)},t.__resizeTriggers__.addEventListener(h,t.__resizeTriggers__.__animationListener__))}t.__resizeListeners__.push(n)}},removeResizeListener:function(e,t){if(r)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",l,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(h,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}function kt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?kt(n,!0).forEach((function(t){Ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Ue(Tt,"defaultProps",{disabled:!1,isControlled:!1,mode:"edges",scrollToColumn:0,scrollToRow:0}),(0,je.polyfill)(Tt);var Ot=(_t=St=function(e){function t(){var e,n;Ae(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ue(Le(n=Fe(this,(e=Ge(t)).call.apply(e,[this].concat(r)))),"state",{height:n.props.defaultHeight||0,width:n.props.defaultWidth||0}),Ue(Le(n),"_parentNode",void 0),Ue(Le(n),"_autoSizer",void 0),Ue(Le(n),"_window",void 0),Ue(Le(n),"_detectElementResize",void 0),Ue(Le(n),"_onResize",(function(){var e=n.props,t=e.disableHeight,o=e.disableWidth,r=e.onResize;if(n._parentNode){var i=n._parentNode.offsetHeight||0,s=n._parentNode.offsetWidth||0,a=(n._window||window).getComputedStyle(n._parentNode)||{},l=parseInt(a.paddingLeft,10)||0,c=parseInt(a.paddingRight,10)||0,d=parseInt(a.paddingTop,10)||0,h=parseInt(a.paddingBottom,10)||0,u=i-d-h,p=s-l-c;(!t&&n.state.height!==u||!o&&n.state.width!==p)&&(n.setState({height:i-d-h,width:s-l-c}),r({height:i,width:s}))}})),Ue(Le(n),"_setRef",(function(e){n._autoSizer=e})),n}return We(t,e),He(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=Rt(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.disableHeight,r=e.disableWidth,i=e.style,a=this.state,l=a.height,c=a.width,d={overflow:"visible"},h={};return o||(d.height=0,h.height=l),r||(d.width=0,h.width=c),s.createElement("div",{className:n,ref:this._setRef,style:Et({},d,{},i)},t(h))}}]),t}(s.Component),Ue(St,"propTypes",null),_t);Ue(Ot,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}});var It,Mt,Dt=n(6405),$t=n.n(Dt),At=(Mt=It=function(e){function t(){var e,n;Ae(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ue(Le(n=Fe(this,(e=Ge(t)).call.apply(e,[this].concat(r)))),"_child",void 0),Ue(Le(n),"_measure",(function(){var e=n.props,t=e.cache,o=e.columnIndex,r=void 0===o?0:o,i=e.parent,s=e.rowIndex,a=void 0===s?n.props.index||0:s,l=n._getCellMeasurements(),c=l.height,d=l.width;c===t.getHeight(a,r)&&d===t.getWidth(a,r)||(t.set(a,r,d,c),i&&"function"==typeof i.recomputeGridSize&&i.recomputeGridSize({columnIndex:r,rowIndex:a}))})),Ue(Le(n),"_registerChild",(function(e){e&&Element,n._child=e,e&&n._maybeMeasureCell()})),n}return We(t,e),He(t,[{key:"componentDidMount",value:function(){this._maybeMeasureCell()}},{key:"componentDidUpdate",value:function(){this._maybeMeasureCell()}},{key:"render",value:function(){var e=this.props.children;return"function"==typeof e?e({measure:this._measure,registerChild:this._registerChild}):e}},{key:"_getCellMeasurements",value:function(){var e=this.props.cache,t=this._child||(0,Dt.findDOMNode)(this);if(t&&t.ownerDocument&&t.ownerDocument.defaultView&&t instanceof t.ownerDocument.defaultView.HTMLElement){var n=t.style.width,o=t.style.height;e.hasFixedWidth()||(t.style.width="auto"),e.hasFixedHeight()||(t.style.height="auto");var r=Math.ceil(t.offsetHeight),i=Math.ceil(t.offsetWidth);return n&&(t.style.width=n),o&&(t.style.height=o),{height:r,width:i}}return{height:0,width:0}}},{key:"_maybeMeasureCell",value:function(){var e=this.props,t=e.cache,n=e.columnIndex,o=void 0===n?0:n,r=e.parent,i=e.rowIndex,s=void 0===i?this.props.index||0:i;if(!t.has(s,o)){var a=this._getCellMeasurements(),l=a.height,c=a.width;t.set(s,o,c,l),r&&"function"==typeof r.invalidateCellSizeAfterRender&&r.invalidateCellSizeAfterRender({columnIndex:o,rowIndex:s})}}}]),t}(s.PureComponent),Ue(It,"propTypes",null),Mt);function Nt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Pt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Nt(n,!0).forEach((function(t){Ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Ue(At,"__internalCellMeasurerFlag",!1);var zt="requested",Ht=function(e){function t(){var e,n;Ae(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ue(Le(n=Fe(this,(e=Ge(t)).call.apply(e,[this].concat(r)))),"state",{isScrolling:!1,scrollLeft:0,scrollTop:0}),Ue(Le(n),"_calculateSizeAndPositionDataOnNextUpdate",!1),Ue(Le(n),"_onSectionRenderedMemoizer",Je()),Ue(Le(n),"_onScrollMemoizer",Je(!1)),Ue(Le(n),"_invokeOnSectionRenderedHelper",(function(){var e=n.props,t=e.cellLayoutManager,o=e.onSectionRendered;n._onSectionRenderedMemoizer({callback:o,indices:{indices:t.getLastRenderedIndices()}})})),Ue(Le(n),"_setScrollingContainerRef",(function(e){n._scrollingContainer=e})),Ue(Le(n),"_updateScrollPositionForScrollToCell",(function(){var e=n.props,t=e.cellLayoutManager,o=e.height,r=e.scrollToAlignment,i=e.scrollToCell,s=e.width,a=n.state,l=a.scrollLeft,c=a.scrollTop;if(i>=0){var d=t.getScrollPositionForCell({align:r,cellIndex:i,height:o,scrollLeft:l,scrollTop:c,width:s});d.scrollLeft===l&&d.scrollTop===c||n._setScrollPosition(d)}})),Ue(Le(n),"_onScroll",(function(e){if(e.target===n._scrollingContainer){n._enablePointerEventsAfterDelay();var t=n.props,o=t.cellLayoutManager,r=t.height,i=t.isScrollingChange,s=t.width,a=n._scrollbarSize,l=o.getTotalSize(),c=l.height,d=l.width,h=Math.max(0,Math.min(d-s+a,e.target.scrollLeft)),u=Math.max(0,Math.min(c-r+a,e.target.scrollTop));if(n.state.scrollLeft!==h||n.state.scrollTop!==u){var p=e.cancelable?"observed":zt;n.state.isScrolling||i(!0),n.setState({isScrolling:!0,scrollLeft:h,scrollPositionChangeReason:p,scrollTop:u})}n._invokeOnScrollMemoizer({scrollLeft:h,scrollTop:u,totalWidth:d,totalHeight:c})}})),n._scrollbarSize=it(),void 0===n._scrollbarSize?(n._scrollbarSizeMeasured=!1,n._scrollbarSize=0):n._scrollbarSizeMeasured=!0,n}return We(t,e),He(t,[{key:"recomputeCellSizesAndPositions",value:function(){this._calculateSizeAndPositionDataOnNextUpdate=!0,this.forceUpdate()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.cellLayoutManager,n=e.scrollLeft,o=e.scrollToCell,r=e.scrollTop;this._scrollbarSizeMeasured||(this._scrollbarSize=it(),this._scrollbarSizeMeasured=!0,this.setState({})),o>=0?this._updateScrollPositionForScrollToCell():(n>=0||r>=0)&&this._setScrollPosition({scrollLeft:n,scrollTop:r}),this._invokeOnSectionRenderedHelper();var i=t.getTotalSize(),s=i.height,a=i.width;this._invokeOnScrollMemoizer({scrollLeft:n||0,scrollTop:r||0,totalHeight:s,totalWidth:a})}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,o=n.height,r=n.scrollToAlignment,i=n.scrollToCell,s=n.width,a=this.state,l=a.scrollLeft,c=a.scrollPositionChangeReason,d=a.scrollTop;c===zt&&(l>=0&&l!==t.scrollLeft&&l!==this._scrollingContainer.scrollLeft&&(this._scrollingContainer.scrollLeft=l),d>=0&&d!==t.scrollTop&&d!==this._scrollingContainer.scrollTop&&(this._scrollingContainer.scrollTop=d)),o===e.height&&r===e.scrollToAlignment&&i===e.scrollToCell&&s===e.width||this._updateScrollPositionForScrollToCell(),this._invokeOnSectionRenderedHelper()}},{key:"componentWillUnmount",value:function(){this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoHeight,n=e.cellCount,o=e.cellLayoutManager,r=e.className,i=e.height,a=e.horizontalOverscanSize,l=e.id,c=e.noContentRenderer,d=e.style,h=e.verticalOverscanSize,u=e.width,p=this.state,f=p.isScrolling,m=p.scrollLeft,g=p.scrollTop;(this._lastRenderedCellCount!==n||this._lastRenderedCellLayoutManager!==o||this._calculateSizeAndPositionDataOnNextUpdate)&&(this._lastRenderedCellCount=n,this._lastRenderedCellLayoutManager=o,this._calculateSizeAndPositionDataOnNextUpdate=!1,o.calculateSizeAndPositionData());var b=o.getTotalSize(),v=b.height,y=b.width,w=Math.max(0,m-a),C=Math.max(0,g-h),x=Math.min(y,m+u+a),S=Math.min(v,g+i+h),_=i>0&&u>0?o.cellRenderers({height:S-C,isScrolling:f,width:x-w,x:w,y:C}):[],T={boxSizing:"border-box",direction:"ltr",height:t?"auto":i,position:"relative",WebkitOverflowScrolling:"touch",width:u,willChange:"transform"},R=v>i?this._scrollbarSize:0,k=y>u?this._scrollbarSize:0;return T.overflowX=y+R<=u?"hidden":"auto",T.overflowY=v+k<=i?"hidden":"auto",s.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:qe("ReactVirtualized__Collection",r),id:l,onScroll:this._onScroll,role:"grid",style:Pt({},T,{},d),tabIndex:0},n>0&&s.createElement("div",{className:"ReactVirtualized__Collection__innerScrollContainer",style:{height:v,maxHeight:v,maxWidth:y,overflow:"hidden",pointerEvents:f?"none":"",width:y}},_),0===n&&c())}},{key:"_enablePointerEventsAfterDelay",value:function(){var e=this;this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=setTimeout((function(){(0,e.props.isScrollingChange)(!1),e._disablePointerEventsTimeoutId=null,e.setState({isScrolling:!1})}),150)}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,n=e.scrollLeft,o=e.scrollTop,r=e.totalHeight,i=e.totalWidth;this._onScrollMemoizer({callback:function(e){var n=e.scrollLeft,o=e.scrollTop,s=t.props,a=s.height;(0,s.onScroll)({clientHeight:a,clientWidth:s.width,scrollHeight:r,scrollLeft:n,scrollTop:o,scrollWidth:i})},indices:{scrollLeft:n,scrollTop:o}})}},{key:"_setScrollPosition",value:function(e){var t=e.scrollLeft,n=e.scrollTop,o={scrollPositionChangeReason:zt};t>=0&&(o.scrollLeft=t),n>=0&&(o.scrollTop=n),(t>=0&&t!==this.state.scrollLeft||n>=0&&n!==this.state.scrollTop)&&this.setState(o)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return 0!==e.cellCount||0===t.scrollLeft&&0===t.scrollTop?e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop?e.scrollTop:t.scrollTop,scrollPositionChangeReason:zt}:null:{scrollLeft:0,scrollTop:0,scrollPositionChangeReason:zt}}}]),t}(s.PureComponent);Ue(Ht,"defaultProps",{"aria-label":"grid",horizontalOverscanSize:0,noContentRenderer:function(){return null},onScroll:function(){return null},onSectionRendered:function(){return null},scrollToAlignment:"auto",scrollToCell:-1,style:{},verticalOverscanSize:0}),Ht.propTypes={},(0,je.polyfill)(Ht);const Lt=Ht;var Ft=function(){function e(t){var n=t.height,o=t.width,r=t.x,i=t.y;Ae(this,e),this.height=n,this.width=o,this.x=r,this.y=i,this._indexMap={},this._indices=[]}return He(e,[{key:"addCellIndex",value:function(e){var t=e.index;this._indexMap[t]||(this._indexMap[t]=!0,this._indices.push(t))}},{key:"getCellIndices",value:function(){return this._indices}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y," ").concat(this.width,"x").concat(this.height)}}]),e}(),Gt=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;Ae(this,e),this._sectionSize=t,this._cellMetadata=[],this._sections={}}return He(e,[{key:"getCellIndices",value:function(e){var t=e.height,n=e.width,o=e.x,r=e.y,i={};return this.getSections({height:t,width:n,x:o,y:r}).forEach((function(e){return e.getCellIndices().forEach((function(e){i[e]=e}))})),Object.keys(i).map((function(e){return i[e]}))}},{key:"getCellMetadata",value:function(e){var t=e.index;return this._cellMetadata[t]}},{key:"getSections",value:function(e){for(var t=e.height,n=e.width,o=e.x,r=e.y,i=Math.floor(o/this._sectionSize),s=Math.floor((o+n-1)/this._sectionSize),a=Math.floor(r/this._sectionSize),l=Math.floor((r+t-1)/this._sectionSize),c=[],d=i;d<=s;d++)for(var h=a;h<=l;h++){var u="".concat(d,".").concat(h);this._sections[u]||(this._sections[u]=new Ft({height:this._sectionSize,width:this._sectionSize,x:d*this._sectionSize,y:h*this._sectionSize})),c.push(this._sections[u])}return c}},{key:"getTotalSectionCount",value:function(){return Object.keys(this._sections).length}},{key:"toString",value:function(){var e=this;return Object.keys(this._sections).map((function(t){return e._sections[t].toString()}))}},{key:"registerCell",value:function(e){var t=e.cellMetadatum,n=e.index;this._cellMetadata[n]=t,this.getSections(t).forEach((function(e){return e.addCellIndex({index:n})}))}}]),e}();function Bt(e){var t=e.align,n=void 0===t?"auto":t,o=e.cellOffset,r=e.cellSize,i=e.containerSize,s=e.currentOffset,a=o,l=a-i+r;switch(n){case"start":return a;case"end":return l;case"center":return a-(i-r)/2;default:return Math.max(l,Math.min(a,s))}}var Wt=function(e){function t(e,n){var o;return Ae(this,t),(o=Fe(this,Ge(t).call(this,e,n)))._cellMetadata=[],o._lastRenderedCellIndices=[],o._cellCache=[],o._isScrollingChange=o._isScrollingChange.bind(Le(o)),o._setCollectionViewRef=o._setCollectionViewRef.bind(Le(o)),o}return We(t,e),He(t,[{key:"forceUpdate",value:function(){void 0!==this._collectionView&&this._collectionView.forceUpdate()}},{key:"recomputeCellSizesAndPositions",value:function(){this._cellCache=[],this._collectionView.recomputeCellSizesAndPositions()}},{key:"render",value:function(){var e=Ve({},this.props);return s.createElement(Lt,Ve({cellLayoutManager:this,isScrollingChange:this._isScrollingChange,ref:this._setCollectionViewRef},e))}},{key:"calculateSizeAndPositionData",value:function(){var e=this.props,t=function(e){for(var t=e.cellCount,n=e.cellSizeAndPositionGetter,o=[],r=new Gt(e.sectionSize),i=0,s=0,a=0;a<t;a++){var l=n({index:a});if(null==l.height||isNaN(l.height)||null==l.width||isNaN(l.width)||null==l.x||isNaN(l.x)||null==l.y||isNaN(l.y))throw Error("Invalid metadata returned for cell ".concat(a,":\n        x:").concat(l.x,", y:").concat(l.y,", width:").concat(l.width,", height:").concat(l.height));i=Math.max(i,l.y+l.height),s=Math.max(s,l.x+l.width),o[a]=l,r.registerCell({cellMetadatum:l,index:a})}return{cellMetadata:o,height:i,sectionManager:r,width:s}}({cellCount:e.cellCount,cellSizeAndPositionGetter:e.cellSizeAndPositionGetter,sectionSize:e.sectionSize});this._cellMetadata=t.cellMetadata,this._sectionManager=t.sectionManager,this._height=t.height,this._width=t.width}},{key:"getLastRenderedIndices",value:function(){return this._lastRenderedCellIndices}},{key:"getScrollPositionForCell",value:function(e){var t=e.align,n=e.cellIndex,o=e.height,r=e.scrollLeft,i=e.scrollTop,s=e.width,a=this.props.cellCount;if(n>=0&&n<a){var l=this._cellMetadata[n];r=Bt({align:t,cellOffset:l.x,cellSize:l.width,containerSize:s,currentOffset:r,targetIndex:n}),i=Bt({align:t,cellOffset:l.y,cellSize:l.height,containerSize:o,currentOffset:i,targetIndex:n})}return{scrollLeft:r,scrollTop:i}}},{key:"getTotalSize",value:function(){return{height:this._height,width:this._width}}},{key:"cellRenderers",value:function(e){var t=this,n=e.height,o=e.isScrolling,r=e.width,i=e.x,s=e.y,a=this.props,l=a.cellGroupRenderer,c=a.cellRenderer;return this._lastRenderedCellIndices=this._sectionManager.getCellIndices({height:n,width:r,x:i,y:s}),l({cellCache:this._cellCache,cellRenderer:c,cellSizeAndPositionGetter:function(e){var n=e.index;return t._sectionManager.getCellMetadata({index:n})},indices:this._lastRenderedCellIndices,isScrolling:o})}},{key:"_isScrollingChange",value:function(e){e||(this._cellCache=[])}},{key:"_setCollectionViewRef",value:function(e){this._collectionView=e}}]),t}(s.PureComponent);function Ut(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function jt(e,t){if(e){if("string"==typeof e)return Ut(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ut(e,t):void 0}}Ue(Wt,"defaultProps",{"aria-label":"grid",cellGroupRenderer:function(e){var t=e.cellCache,n=e.cellRenderer,o=e.cellSizeAndPositionGetter,r=e.indices,i=e.isScrolling;return r.map((function(e){var r=o({index:e}),s={index:e,isScrolling:i,key:e,style:{height:r.height,left:r.x,position:"absolute",top:r.y,width:r.width}};return i?(e in t||(t[e]=n(s)),t[e]):n(s)})).filter((function(e){return!!e}))}}),Wt.propTypes={},(function(e){function t(e,n){var o;return Ae(this,t),(o=Fe(this,Ge(t).call(this,e,n)))._registerChild=o._registerChild.bind(Le(o)),o}return We(t,e),He(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.columnMaxWidth,o=t.columnMinWidth,r=t.columnCount,i=t.width;n===e.columnMaxWidth&&o===e.columnMinWidth&&r===e.columnCount&&i===e.width||this._registeredChild&&this._registeredChild.recomputeGridSize()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.columnMaxWidth,o=e.columnMinWidth,r=e.columnCount,i=e.width,s=o||1,a=n?Math.min(n,i):i,l=i/r;return l=Math.max(s,l),l=Math.min(a,l),l=Math.floor(l),t({adjustedWidth:Math.min(i,l*r),columnWidth:l,getColumnWidth:function(){return l},registerChild:this._registerChild})}},{key:"_registerChild",value:function(e){if(e&&"function"!=typeof e.recomputeGridSize)throw Error("Unexpected child type registered; only Grid/MultiGrid children are supported.");this._registeredChild=e,this._registeredChild&&this._registeredChild.recomputeGridSize()}}]),t}(s.PureComponent)).propTypes={};var Vt=function(e){function t(e,n){var o;return Ae(this,t),(o=Fe(this,Ge(t).call(this,e,n)))._loadMoreRowsMemoizer=Je(),o._onRowsRendered=o._onRowsRendered.bind(Le(o)),o._registerChild=o._registerChild.bind(Le(o)),o}return We(t,e),He(t,[{key:"resetLoadMoreRowsCache",value:function(e){this._loadMoreRowsMemoizer=Je(),e&&this._doStuff(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"render",value:function(){return(0,this.props.children)({onRowsRendered:this._onRowsRendered,registerChild:this._registerChild})}},{key:"_loadUnloadedRanges",value:function(e){var t=this,n=this.props.loadMoreRows;e.forEach((function(e){var o=n(e);o&&o.then((function(){var n;(n={lastRenderedStartIndex:t._lastRenderedStartIndex,lastRenderedStopIndex:t._lastRenderedStopIndex,startIndex:e.startIndex,stopIndex:e.stopIndex}).startIndex>n.lastRenderedStopIndex||n.stopIndex<n.lastRenderedStartIndex||t._registeredChild&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n="function"==typeof e.recomputeGridSize?e.recomputeGridSize:e.recomputeRowHeights;n?n.call(e,t):e.forceUpdate()}(t._registeredChild,t._lastRenderedStartIndex)}))}))}},{key:"_onRowsRendered",value:function(e){var t=e.startIndex,n=e.stopIndex;this._lastRenderedStartIndex=t,this._lastRenderedStopIndex=n,this._doStuff(t,n)}},{key:"_doStuff",value:function(e,t){var n,o=this,r=this.props,i=r.isRowLoaded,s=r.minimumBatchSize,a=r.rowCount,l=r.threshold,c=function(e){for(var t=e.isRowLoaded,n=e.minimumBatchSize,o=e.rowCount,r=e.stopIndex,i=[],s=null,a=null,l=e.startIndex;l<=r;l++)t({index:l})?null!==a&&(i.push({startIndex:s,stopIndex:a}),s=a=null):(a=l,null===s&&(s=l));if(null!==a){for(var c=Math.min(Math.max(a,s+n-1),o-1),d=a+1;d<=c&&!t({index:d});d++)a=d;i.push({startIndex:s,stopIndex:a})}if(i.length)for(var h=i[0];h.stopIndex-h.startIndex+1<n&&h.startIndex>0;){var u=h.startIndex-1;if(t({index:u}))break;h.startIndex=u}return i}({isRowLoaded:i,minimumBatchSize:s,rowCount:a,startIndex:Math.max(0,e-l),stopIndex:Math.min(a-1,t+l)}),d=(n=[]).concat.apply(n,function(e){return function(e){if(Array.isArray(e))return Ut(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||jt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(c.map((function(e){return[e.startIndex,e.stopIndex]}))));this._loadMoreRowsMemoizer({callback:function(){o._loadUnloadedRanges(c)},indices:{squashedUnloadedRanges:d}})}},{key:"_registerChild",value:function(e){this._registeredChild=e}}]),t}(s.PureComponent);Ue(Vt,"defaultProps",{minimumBatchSize:10,rowCount:0,threshold:15}),Vt.propTypes={};var Zt,qt,Kt=(qt=Zt=function(e){function t(){var e,n;Ae(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ue(Le(n=Fe(this,(e=Ge(t)).call.apply(e,[this].concat(r)))),"Grid",void 0),Ue(Le(n),"_cellRenderer",(function(e){var t=e.parent,o=e.rowIndex,r=e.style,i=e.isScrolling,s=e.isVisible,a=e.key,l=n.props.rowRenderer,c=Object.getOwnPropertyDescriptor(r,"width");return c&&c.writable&&(r.width="100%"),l({index:o,style:r,isScrolling:i,isVisible:s,key:a,parent:t})})),Ue(Le(n),"_setRef",(function(e){n.Grid=e})),Ue(Le(n),"_onScroll",(function(e){var t=e.clientHeight,o=e.scrollHeight,r=e.scrollTop;(0,n.props.onScroll)({clientHeight:t,scrollHeight:o,scrollTop:r})})),Ue(Le(n),"_onScrollToRowCausedUpdate",(function(e){var t=e.clientHeight,o=e.scrollHeight,r=e.scrollTop;(0,n.props.onScrollToRowCausedUpdate)({clientHeight:t,scrollHeight:o,scrollTop:r})})),Ue(Le(n),"_onSectionRendered",(function(e){var t=e.rowOverscanStartIndex,o=e.rowOverscanStopIndex,r=e.rowStartIndex,i=e.rowStopIndex;(0,n.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:o,startIndex:r,stopIndex:i})})),n}return We(t,e),He(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,n=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:n,columnIndex:0}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,n=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:n,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o;this.Grid&&this.Grid.recomputeGridSize({rowIndex:r,columnIndex:n})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e,columnIndex:0})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.noRowsRenderer,o=e.scrollToIndex,r=e.width,i=qe("ReactVirtualized__List",t);return s.createElement(vt,Ve({},this.props,{autoContainerWidth:!0,cellRenderer:this._cellRenderer,className:i,columnWidth:r,columnCount:1,noContentRenderer:n,onScroll:this._onScroll,onScrollToTargetCausedUpdate:this._onScrollToRowCausedUpdate,onSectionRendered:this._onSectionRendered,ref:this._setRef,scrollToRow:o}))}}]),t}(s.PureComponent),Ue(Zt,"propTypes",null),qt);Ue(Kt,"defaultProps",{autoHeight:!1,estimatedRowSize:30,onScroll:function(){},onScrollToRowCausedUpdate:function(){},noRowsRenderer:function(){return null},onRowsRendered:function(){},overscanIndicesGetter:yt,overscanRowCount:10,scrollToAlignment:"auto",scrollToIndex:-1,style:{}});const Yt=function(e,t,n,o,r){return"function"==typeof n?function(e,t,n,o,r){for(var i=n+1;t<=n;){var s=t+n>>>1;r(e[s],o)>=0?(i=s,n=s-1):t=s+1}return i}(e,void 0===o?0:0|o,void 0===r?e.length-1:0|r,t,n):function(e,t,n,o){for(var r=n+1;t<=n;){var i=t+n>>>1;e[i]>=o?(r=i,n=i-1):t=i+1}return r}(e,void 0===n?0:0|n,void 0===o?e.length-1:0|o,t)};function Xt(e,t,n,o,r){this.mid=e,this.left=t,this.right=n,this.leftPoints=o,this.rightPoints=r,this.count=(t?t.count:0)+(n?n.count:0)+o.length}var Qt=Xt.prototype;function Jt(e,t){e.mid=t.mid,e.left=t.left,e.right=t.right,e.leftPoints=t.leftPoints,e.rightPoints=t.rightPoints,e.count=t.count}function en(e,t){var n=dn(t);e.mid=n.mid,e.left=n.left,e.right=n.right,e.leftPoints=n.leftPoints,e.rightPoints=n.rightPoints,e.count=n.count}function tn(e,t){var n=e.intervals([]);n.push(t),en(e,n)}function nn(e,t){var n=e.intervals([]),o=n.indexOf(t);return o<0?0:(n.splice(o,1),en(e,n),1)}function on(e,t,n){for(var o=0;o<e.length&&e[o][0]<=t;++o){var r=n(e[o]);if(r)return r}}function rn(e,t,n){for(var o=e.length-1;o>=0&&e[o][1]>=t;--o){var r=n(e[o]);if(r)return r}}function sn(e,t){for(var n=0;n<e.length;++n){var o=t(e[n]);if(o)return o}}function an(e,t){return e-t}function ln(e,t){return e[0]-t[0]||e[1]-t[1]}function cn(e,t){return e[1]-t[1]||e[0]-t[0]}function dn(e){if(0===e.length)return null;for(var t=[],n=0;n<e.length;++n)t.push(e[n][0],e[n][1]);t.sort(an);var o=t[t.length>>1],r=[],i=[],s=[];for(n=0;n<e.length;++n){var a=e[n];a[1]<o?r.push(a):o<a[0]?i.push(a):s.push(a)}var l=s,c=s.slice();return l.sort(ln),c.sort(cn),new Xt(o,dn(r),dn(i),l,c)}function hn(e){this.root=e}Qt.intervals=function(e){return e.push.apply(e,this.leftPoints),this.left&&this.left.intervals(e),this.right&&this.right.intervals(e),e},Qt.insert=function(e){var t=this.count-this.leftPoints.length;if(this.count+=1,e[1]<this.mid)this.left?4*(this.left.count+1)>3*(t+1)?tn(this,e):this.left.insert(e):this.left=dn([e]);else if(e[0]>this.mid)this.right?4*(this.right.count+1)>3*(t+1)?tn(this,e):this.right.insert(e):this.right=dn([e]);else{var n=Yt(this.leftPoints,e,ln),o=Yt(this.rightPoints,e,cn);this.leftPoints.splice(n,0,e),this.rightPoints.splice(o,0,e)}},Qt.remove=function(e){var t=this.count-this.leftPoints;if(e[1]<this.mid)return this.left?4*(this.right?this.right.count:0)>3*(t-1)?nn(this,e):2===(i=this.left.remove(e))?(this.left=null,this.count-=1,1):(1===i&&(this.count-=1),i):0;if(e[0]>this.mid)return this.right?4*(this.left?this.left.count:0)>3*(t-1)?nn(this,e):2===(i=this.right.remove(e))?(this.right=null,this.count-=1,1):(1===i&&(this.count-=1),i):0;if(1===this.count)return this.leftPoints[0]===e?2:0;if(1===this.leftPoints.length&&this.leftPoints[0]===e){if(this.left&&this.right){for(var n=this,o=this.left;o.right;)n=o,o=o.right;if(n===this)o.right=this.right;else{var r=this.left,i=this.right;n.count-=o.count,n.right=o.left,o.left=r,o.right=i}Jt(this,o),this.count=(this.left?this.left.count:0)+(this.right?this.right.count:0)+this.leftPoints.length}else this.left?Jt(this,this.left):Jt(this,this.right);return 1}for(r=Yt(this.leftPoints,e,ln);r<this.leftPoints.length&&this.leftPoints[r][0]===e[0];++r)if(this.leftPoints[r]===e)for(this.count-=1,this.leftPoints.splice(r,1),i=Yt(this.rightPoints,e,cn);i<this.rightPoints.length&&this.rightPoints[i][1]===e[1];++i)if(this.rightPoints[i]===e)return this.rightPoints.splice(i,1),1;return 0},Qt.queryPoint=function(e,t){return e<this.mid?this.left&&(n=this.left.queryPoint(e,t))?n:on(this.leftPoints,e,t):e>this.mid?this.right&&(n=this.right.queryPoint(e,t))?n:rn(this.rightPoints,e,t):sn(this.leftPoints,t);var n},Qt.queryInterval=function(e,t,n){var o;return e<this.mid&&this.left&&(o=this.left.queryInterval(e,t,n))||t>this.mid&&this.right&&(o=this.right.queryInterval(e,t,n))?o:t<this.mid?on(this.leftPoints,t,n):e>this.mid?rn(this.rightPoints,e,n):sn(this.leftPoints,n)};var un=hn.prototype;un.insert=function(e){this.root?this.root.insert(e):this.root=new Xt(e[0],null,null,[e],[e])},un.remove=function(e){if(this.root){var t=this.root.remove(e);return 2===t&&(this.root=null),0!==t}return!1},un.queryPoint=function(e,t){if(this.root)return this.root.queryPoint(e,t)},un.queryInterval=function(e,t,n){if(e<=t&&this.root)return this.root.queryInterval(e,t,n)},Object.defineProperty(un,"count",{get:function(){return this.root?this.root.count:0}}),Object.defineProperty(un,"intervals",{get:function(){return this.root?this.root.intervals([]):[]}});var pn,fn,mn=function(){function e(){Ae(this,e),Ue(this,"_columnSizeMap",{}),Ue(this,"_intervalTree",new hn(null)),Ue(this,"_leftMap",{})}return He(e,[{key:"estimateTotalHeight",value:function(e,t,n){var o=e-this.count;return this.tallestColumnSize+Math.ceil(o/t)*n}},{key:"range",value:function(e,t,n){var o=this;this._intervalTree.queryInterval(e,e+t,(function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,s,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=i.call(n)).done)&&(a.push(o.value),a.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}(e,t)||jt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,3),r=t[0],i=(t[1],t[2]);return n(i,o._leftMap[i],r)}))}},{key:"setPosition",value:function(e,t,n,o){this._intervalTree.insert([n,n+o,e]),this._leftMap[e]=t;var r=this._columnSizeMap,i=r[t];r[t]=void 0===i?n+o:Math.max(i,n+o)}},{key:"count",get:function(){return this._intervalTree.count}},{key:"shortestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var n in e){var o=e[n];t=0===t?o:Math.min(t,o)}return t}},{key:"tallestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var n in e){var o=e[n];t=Math.max(t,o)}return t}}]),e}();function gn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function bn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?gn(n,!0).forEach((function(t){Ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var vn=(fn=pn=function(e){function t(){var e,n;Ae(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ue(Le(n=Fe(this,(e=Ge(t)).call.apply(e,[this].concat(r)))),"state",{isScrolling:!1,scrollTop:0}),Ue(Le(n),"_debounceResetIsScrollingId",void 0),Ue(Le(n),"_invalidateOnUpdateStartIndex",null),Ue(Le(n),"_invalidateOnUpdateStopIndex",null),Ue(Le(n),"_positionCache",new mn),Ue(Le(n),"_startIndex",null),Ue(Le(n),"_startIndexMemoized",null),Ue(Le(n),"_stopIndex",null),Ue(Le(n),"_stopIndexMemoized",null),Ue(Le(n),"_debounceResetIsScrollingCallback",(function(){n.setState({isScrolling:!1})})),Ue(Le(n),"_setScrollingContainerRef",(function(e){n._scrollingContainer=e})),Ue(Le(n),"_onScroll",(function(e){var t=n.props.height,o=e.currentTarget.scrollTop,r=Math.min(Math.max(0,n._getEstimatedTotalHeight()-t),o);o===r&&(n._debounceResetIsScrolling(),n.state.scrollTop!==r&&n.setState({isScrolling:!0,scrollTop:r}))})),n}return We(t,e),He(t,[{key:"clearCellPositions",value:function(){this._positionCache=new mn,this.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.rowIndex;null===this._invalidateOnUpdateStartIndex?(this._invalidateOnUpdateStartIndex=t,this._invalidateOnUpdateStopIndex=t):(this._invalidateOnUpdateStartIndex=Math.min(this._invalidateOnUpdateStartIndex,t),this._invalidateOnUpdateStopIndex=Math.max(this._invalidateOnUpdateStopIndex,t))}},{key:"recomputeCellPositions",value:function(){var e=this._positionCache.count-1;this._positionCache=new mn,this._populatePositionCache(0,e),this.forceUpdate()}},{key:"componentDidMount",value:function(){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback()}},{key:"componentDidUpdate",value:function(e,t){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback(),this.props.scrollTop!==e.scrollTop&&this._debounceResetIsScrolling()}},{key:"componentWillUnmount",value:function(){this._debounceResetIsScrollingId&&ut(this._debounceResetIsScrollingId)}},{key:"render",value:function(){var e,t=this,n=this.props,o=n.autoHeight,r=n.cellCount,i=n.cellMeasurerCache,a=n.cellRenderer,l=n.className,c=n.height,d=n.id,h=n.keyMapper,u=n.overscanByPixels,p=n.role,f=n.style,m=n.tabIndex,g=n.width,b=n.rowDirection,v=this.state,y=v.isScrolling,w=v.scrollTop,C=[],x=this._getEstimatedTotalHeight(),S=this._positionCache.shortestColumnSize,_=this._positionCache.count,T=0;if(this._positionCache.range(Math.max(0,w-u),c+2*u,(function(n,o,r){var s;void 0===e?(T=n,e=n):(T=Math.min(T,n),e=Math.max(e,n)),C.push(a({index:n,isScrolling:y,key:h(n),parent:t,style:(s={height:i.getHeight(n)},Ue(s,"ltr"===b?"left":"right",o),Ue(s,"position","absolute"),Ue(s,"top",r),Ue(s,"width",i.getWidth(n)),s)}))})),S<w+c+u&&_<r)for(var R=Math.min(r-_,Math.ceil((w+c+u-S)/i.defaultHeight*g/i.defaultWidth)),k=_;k<_+R;k++)e=k,C.push(a({index:k,isScrolling:y,key:h(k),parent:this,style:{width:i.getWidth(k)}}));return this._startIndex=T,this._stopIndex=e,s.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:qe("ReactVirtualized__Masonry",l),id:d,onScroll:this._onScroll,role:p,style:bn({boxSizing:"border-box",direction:"ltr",height:o?"auto":c,overflowX:"hidden",overflowY:x<c?"hidden":"auto",position:"relative",width:g,WebkitOverflowScrolling:"touch",willChange:"transform"},f),tabIndex:m},s.createElement("div",{className:"ReactVirtualized__Masonry__innerScrollContainer",style:{width:"100%",height:x,maxWidth:"100%",maxHeight:x,overflow:"hidden",pointerEvents:y?"none":"",position:"relative"}},C))}},{key:"_checkInvalidateOnUpdate",value:function(){if("number"==typeof this._invalidateOnUpdateStartIndex){var e=this._invalidateOnUpdateStartIndex,t=this._invalidateOnUpdateStopIndex;this._invalidateOnUpdateStartIndex=null,this._invalidateOnUpdateStopIndex=null,this._populatePositionCache(e,t),this.forceUpdate()}}},{key:"_debounceResetIsScrolling",value:function(){var e=this.props.scrollingResetTimeInterval;this._debounceResetIsScrollingId&&ut(this._debounceResetIsScrollingId),this._debounceResetIsScrollingId=pt(this._debounceResetIsScrollingCallback,e)}},{key:"_getEstimatedTotalHeight",value:function(){var e=this.props,t=e.cellCount,n=e.cellMeasurerCache,o=e.width,r=Math.max(1,Math.floor(o/n.defaultWidth));return this._positionCache.estimateTotalHeight(t,r,n.defaultHeight)}},{key:"_invokeOnScrollCallback",value:function(){var e=this.props,t=e.height,n=e.onScroll,o=this.state.scrollTop;this._onScrollMemoized!==o&&(n({clientHeight:t,scrollHeight:this._getEstimatedTotalHeight(),scrollTop:o}),this._onScrollMemoized=o)}},{key:"_invokeOnCellsRenderedCallback",value:function(){this._startIndexMemoized===this._startIndex&&this._stopIndexMemoized===this._stopIndex||((0,this.props.onCellsRendered)({startIndex:this._startIndex,stopIndex:this._stopIndex}),this._startIndexMemoized=this._startIndex,this._stopIndexMemoized=this._stopIndex)}},{key:"_populatePositionCache",value:function(e,t){for(var n=this.props,o=n.cellMeasurerCache,r=n.cellPositioner,i=e;i<=t;i++){var s=r(i),a=s.left,l=s.top;this._positionCache.setPosition(i,a,l,o.getHeight(i))}}}],[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.scrollTop&&t.scrollTop!==e.scrollTop?{isScrolling:!0,scrollTop:e.scrollTop}:null}}]),t}(s.PureComponent),Ue(pn,"propTypes",null),fn);function yn(){}Ue(vn,"defaultProps",{autoHeight:!1,keyMapper:function(e){return e},onCellsRendered:yn,onScroll:yn,overscanByPixels:20,role:"grid",scrollingResetTimeInterval:150,style:{},tabIndex:0,rowDirection:"ltr"}),(0,je.polyfill)(vn);var wn=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Ae(this,e),Ue(this,"_cellMeasurerCache",void 0),Ue(this,"_columnIndexOffset",void 0),Ue(this,"_rowIndexOffset",void 0),Ue(this,"columnWidth",(function(e){var n=e.index;t._cellMeasurerCache.columnWidth({index:n+t._columnIndexOffset})})),Ue(this,"rowHeight",(function(e){var n=e.index;t._cellMeasurerCache.rowHeight({index:n+t._rowIndexOffset})}));var o=n.cellMeasurerCache,r=n.columnIndexOffset,i=void 0===r?0:r,s=n.rowIndexOffset,a=void 0===s?0:s;this._cellMeasurerCache=o,this._columnIndexOffset=i,this._rowIndexOffset=a}return He(e,[{key:"clear",value:function(e,t){this._cellMeasurerCache.clear(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"clearAll",value:function(){this._cellMeasurerCache.clearAll()}},{key:"hasFixedHeight",value:function(){return this._cellMeasurerCache.hasFixedHeight()}},{key:"hasFixedWidth",value:function(){return this._cellMeasurerCache.hasFixedWidth()}},{key:"getHeight",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getHeight(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"getWidth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getWidth(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"has",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.has(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"set",value:function(e,t,n,o){this._cellMeasurerCache.set(e+this._rowIndexOffset,t+this._columnIndexOffset,n,o)}},{key:"defaultHeight",get:function(){return this._cellMeasurerCache.defaultHeight}},{key:"defaultWidth",get:function(){return this._cellMeasurerCache.defaultWidth}}]),e}();function Cn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function xn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Cn(n,!0).forEach((function(t){Ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Sn=function(e){function t(e,n){var o;Ae(this,t),Ue(Le(o=Fe(this,Ge(t).call(this,e,n))),"state",{scrollLeft:0,scrollTop:0,scrollbarSize:0,showHorizontalScrollbar:!1,showVerticalScrollbar:!1}),Ue(Le(o),"_deferredInvalidateColumnIndex",null),Ue(Le(o),"_deferredInvalidateRowIndex",null),Ue(Le(o),"_bottomLeftGridRef",(function(e){o._bottomLeftGrid=e})),Ue(Le(o),"_bottomRightGridRef",(function(e){o._bottomRightGrid=e})),Ue(Le(o),"_cellRendererBottomLeftGrid",(function(e){var t=e.rowIndex,n=Ye(e,["rowIndex"]),r=o.props,i=r.cellRenderer,a=r.fixedRowCount;return t===r.rowCount-a?s.createElement("div",{key:n.key,style:xn({},n.style,{height:20})}):i(xn({},n,{parent:Le(o),rowIndex:t+a}))})),Ue(Le(o),"_cellRendererBottomRightGrid",(function(e){var t=e.columnIndex,n=e.rowIndex,r=Ye(e,["columnIndex","rowIndex"]),i=o.props,s=i.cellRenderer,a=i.fixedColumnCount,l=i.fixedRowCount;return s(xn({},r,{columnIndex:t+a,parent:Le(o),rowIndex:n+l}))})),Ue(Le(o),"_cellRendererTopRightGrid",(function(e){var t=e.columnIndex,n=Ye(e,["columnIndex"]),r=o.props,i=r.cellRenderer,a=r.columnCount,l=r.fixedColumnCount;return t===a-l?s.createElement("div",{key:n.key,style:xn({},n.style,{width:20})}):i(xn({},n,{columnIndex:t+l,parent:Le(o)}))})),Ue(Le(o),"_columnWidthRightGrid",(function(e){var t=e.index,n=o.props,r=n.columnCount,i=n.fixedColumnCount,s=n.columnWidth,a=o.state,l=a.scrollbarSize;return a.showHorizontalScrollbar&&t===r-i?l:"function"==typeof s?s({index:t+i}):s})),Ue(Le(o),"_onScroll",(function(e){var t=e.scrollLeft,n=e.scrollTop;o.setState({scrollLeft:t,scrollTop:n});var r=o.props.onScroll;r&&r(e)})),Ue(Le(o),"_onScrollbarPresenceChange",(function(e){var t=e.horizontal,n=e.size,r=e.vertical,i=o.state,s=i.showHorizontalScrollbar,a=i.showVerticalScrollbar;if(t!==s||r!==a){o.setState({scrollbarSize:n,showHorizontalScrollbar:t,showVerticalScrollbar:r});var l=o.props.onScrollbarPresenceChange;"function"==typeof l&&l({horizontal:t,size:n,vertical:r})}})),Ue(Le(o),"_onScrollLeft",(function(e){var t=e.scrollLeft;o._onScroll({scrollLeft:t,scrollTop:o.state.scrollTop})})),Ue(Le(o),"_onScrollTop",(function(e){var t=e.scrollTop;o._onScroll({scrollTop:t,scrollLeft:o.state.scrollLeft})})),Ue(Le(o),"_rowHeightBottomGrid",(function(e){var t=e.index,n=o.props,r=n.fixedRowCount,i=n.rowCount,s=n.rowHeight,a=o.state,l=a.scrollbarSize;return a.showVerticalScrollbar&&t===i-r?l:"function"==typeof s?s({index:t+r}):s})),Ue(Le(o),"_topLeftGridRef",(function(e){o._topLeftGrid=e})),Ue(Le(o),"_topRightGridRef",(function(e){o._topRightGrid=e}));var r=e.deferredMeasurementCache,i=e.fixedColumnCount,a=e.fixedRowCount;return o._maybeCalculateCachedStyles(!0),r&&(o._deferredMeasurementCacheBottomLeftGrid=a>0?new wn({cellMeasurerCache:r,columnIndexOffset:0,rowIndexOffset:a}):r,o._deferredMeasurementCacheBottomRightGrid=i>0||a>0?new wn({cellMeasurerCache:r,columnIndexOffset:i,rowIndexOffset:a}):r,o._deferredMeasurementCacheTopRightGrid=i>0?new wn({cellMeasurerCache:r,columnIndexOffset:i,rowIndexOffset:0}):r),o}return We(t,e),He(t,[{key:"forceUpdateGrids",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.forceUpdate(),this._bottomRightGrid&&this._bottomRightGrid.forceUpdate(),this._topLeftGrid&&this._topLeftGrid.forceUpdate(),this._topRightGrid&&this._topRightGrid.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,n):n,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,r):r}},{key:"measureAllCells",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.measureAllCells(),this._bottomRightGrid&&this._bottomRightGrid.measureAllCells(),this._topLeftGrid&&this._topLeftGrid.measureAllCells(),this._topRightGrid&&this._topRightGrid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o,i=this.props,s=i.fixedColumnCount,a=i.fixedRowCount,l=Math.max(0,n-s),c=Math.max(0,r-a);this._bottomLeftGrid&&this._bottomLeftGrid.recomputeGridSize({columnIndex:n,rowIndex:c}),this._bottomRightGrid&&this._bottomRightGrid.recomputeGridSize({columnIndex:l,rowIndex:c}),this._topLeftGrid&&this._topLeftGrid.recomputeGridSize({columnIndex:n,rowIndex:r}),this._topRightGrid&&this._topRightGrid.recomputeGridSize({columnIndex:l,rowIndex:r}),this._leftGridWidth=null,this._topGridHeight=null,this._maybeCalculateCachedStyles(!0)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.scrollLeft,n=e.scrollTop;if(t>0||n>0){var o={};t>0&&(o.scrollLeft=t),n>0&&(o.scrollTop=n),this.setState(o)}this._handleInvalidatedGridSize()}},{key:"componentDidUpdate",value:function(){this._handleInvalidatedGridSize()}},{key:"render",value:function(){var e=this.props,t=e.onScroll,n=e.onSectionRendered,o=(e.onScrollbarPresenceChange,e.scrollLeft,e.scrollToColumn),r=(e.scrollTop,e.scrollToRow),i=Ye(e,["onScroll","onSectionRendered","onScrollbarPresenceChange","scrollLeft","scrollToColumn","scrollTop","scrollToRow"]);if(this._prepareForRender(),0===this.props.width||0===this.props.height)return null;var a=this.state,l=a.scrollLeft,c=a.scrollTop;return s.createElement("div",{style:this._containerOuterStyle},s.createElement("div",{style:this._containerTopStyle},this._renderTopLeftGrid(i),this._renderTopRightGrid(xn({},i,{onScroll:t,scrollLeft:l}))),s.createElement("div",{style:this._containerBottomStyle},this._renderBottomLeftGrid(xn({},i,{onScroll:t,scrollTop:c})),this._renderBottomRightGrid(xn({},i,{onScroll:t,onSectionRendered:n,scrollLeft:l,scrollToColumn:o,scrollToRow:r,scrollTop:c}))))}},{key:"_getBottomGridHeight",value:function(e){return e.height-this._getTopGridHeight(e)}},{key:"_getLeftGridWidth",value:function(e){var t=e.fixedColumnCount,n=e.columnWidth;if(null==this._leftGridWidth)if("function"==typeof n){for(var o=0,r=0;r<t;r++)o+=n({index:r});this._leftGridWidth=o}else this._leftGridWidth=n*t;return this._leftGridWidth}},{key:"_getRightGridWidth",value:function(e){return e.width-this._getLeftGridWidth(e)}},{key:"_getTopGridHeight",value:function(e){var t=e.fixedRowCount,n=e.rowHeight;if(null==this._topGridHeight)if("function"==typeof n){for(var o=0,r=0;r<t;r++)o+=n({index:r});this._topGridHeight=o}else this._topGridHeight=n*t;return this._topGridHeight}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t}),this.forceUpdate()}}},{key:"_maybeCalculateCachedStyles",value:function(e){var t=this.props,n=t.columnWidth,o=t.enableFixedColumnScroll,r=t.enableFixedRowScroll,i=t.height,s=t.fixedColumnCount,a=t.fixedRowCount,l=t.rowHeight,c=t.style,d=t.styleBottomLeftGrid,h=t.styleBottomRightGrid,u=t.styleTopLeftGrid,p=t.styleTopRightGrid,f=t.width,m=e||i!==this._lastRenderedHeight||f!==this._lastRenderedWidth,g=e||n!==this._lastRenderedColumnWidth||s!==this._lastRenderedFixedColumnCount,b=e||a!==this._lastRenderedFixedRowCount||l!==this._lastRenderedRowHeight;(e||m||c!==this._lastRenderedStyle)&&(this._containerOuterStyle=xn({height:i,overflow:"visible",width:f},c)),(e||m||b)&&(this._containerTopStyle={height:this._getTopGridHeight(this.props),position:"relative",width:f},this._containerBottomStyle={height:i-this._getTopGridHeight(this.props),overflow:"visible",position:"relative",width:f}),(e||d!==this._lastRenderedStyleBottomLeftGrid)&&(this._bottomLeftGridStyle=xn({left:0,overflowX:"hidden",overflowY:o?"auto":"hidden",position:"absolute"},d)),(e||g||h!==this._lastRenderedStyleBottomRightGrid)&&(this._bottomRightGridStyle=xn({left:this._getLeftGridWidth(this.props),position:"absolute"},h)),(e||u!==this._lastRenderedStyleTopLeftGrid)&&(this._topLeftGridStyle=xn({left:0,overflowX:"hidden",overflowY:"hidden",position:"absolute",top:0},u)),(e||g||p!==this._lastRenderedStyleTopRightGrid)&&(this._topRightGridStyle=xn({left:this._getLeftGridWidth(this.props),overflowX:r?"auto":"hidden",overflowY:"hidden",position:"absolute",top:0},p)),this._lastRenderedColumnWidth=n,this._lastRenderedFixedColumnCount=s,this._lastRenderedFixedRowCount=a,this._lastRenderedHeight=i,this._lastRenderedRowHeight=l,this._lastRenderedStyle=c,this._lastRenderedStyleBottomLeftGrid=d,this._lastRenderedStyleBottomRightGrid=h,this._lastRenderedStyleTopLeftGrid=u,this._lastRenderedStyleTopRightGrid=p,this._lastRenderedWidth=f}},{key:"_prepareForRender",value:function(){this._lastRenderedColumnWidth===this.props.columnWidth&&this._lastRenderedFixedColumnCount===this.props.fixedColumnCount||(this._leftGridWidth=null),this._lastRenderedFixedRowCount===this.props.fixedRowCount&&this._lastRenderedRowHeight===this.props.rowHeight||(this._topGridHeight=null),this._maybeCalculateCachedStyles(),this._lastRenderedColumnWidth=this.props.columnWidth,this._lastRenderedFixedColumnCount=this.props.fixedColumnCount,this._lastRenderedFixedRowCount=this.props.fixedRowCount,this._lastRenderedRowHeight=this.props.rowHeight}},{key:"_renderBottomLeftGrid",value:function(e){var t=e.enableFixedColumnScroll,n=e.fixedColumnCount,o=e.fixedRowCount,r=e.rowCount,i=e.hideBottomLeftGridScrollbar,a=this.state.showVerticalScrollbar;if(!n)return null;var l=a?1:0,c=this._getBottomGridHeight(e),d=this._getLeftGridWidth(e),h=this.state.showVerticalScrollbar?this.state.scrollbarSize:0,u=i?d+h:d,p=s.createElement(vt,Ve({},e,{cellRenderer:this._cellRendererBottomLeftGrid,className:this.props.classNameBottomLeftGrid,columnCount:n,deferredMeasurementCache:this._deferredMeasurementCacheBottomLeftGrid,height:c,onScroll:t?this._onScrollTop:void 0,ref:this._bottomLeftGridRef,rowCount:Math.max(0,r-o)+l,rowHeight:this._rowHeightBottomGrid,style:this._bottomLeftGridStyle,tabIndex:null,width:u}));return i?s.createElement("div",{className:"BottomLeftGrid_ScrollWrapper",style:xn({},this._bottomLeftGridStyle,{height:c,width:d,overflowY:"hidden"})},p):p}},{key:"_renderBottomRightGrid",value:function(e){var t=e.columnCount,n=e.fixedColumnCount,o=e.fixedRowCount,r=e.rowCount,i=e.scrollToColumn,a=e.scrollToRow;return s.createElement(vt,Ve({},e,{cellRenderer:this._cellRendererBottomRightGrid,className:this.props.classNameBottomRightGrid,columnCount:Math.max(0,t-n),columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheBottomRightGrid,height:this._getBottomGridHeight(e),onScroll:this._onScroll,onScrollbarPresenceChange:this._onScrollbarPresenceChange,ref:this._bottomRightGridRef,rowCount:Math.max(0,r-o),rowHeight:this._rowHeightBottomGrid,scrollToColumn:i-n,scrollToRow:a-o,style:this._bottomRightGridStyle,width:this._getRightGridWidth(e)}))}},{key:"_renderTopLeftGrid",value:function(e){var t=e.fixedColumnCount,n=e.fixedRowCount;return t&&n?s.createElement(vt,Ve({},e,{className:this.props.classNameTopLeftGrid,columnCount:t,height:this._getTopGridHeight(e),ref:this._topLeftGridRef,rowCount:n,style:this._topLeftGridStyle,tabIndex:null,width:this._getLeftGridWidth(e)})):null}},{key:"_renderTopRightGrid",value:function(e){var t=e.columnCount,n=e.enableFixedRowScroll,o=e.fixedColumnCount,r=e.fixedRowCount,i=e.scrollLeft,a=e.hideTopRightGridScrollbar,l=this.state,c=l.showHorizontalScrollbar,d=l.scrollbarSize;if(!r)return null;var h=c?1:0,u=this._getTopGridHeight(e),p=this._getRightGridWidth(e),f=c?d:0,m=u,g=this._topRightGridStyle;a&&(m=u+f,g=xn({},this._topRightGridStyle,{left:0}));var b=s.createElement(vt,Ve({},e,{cellRenderer:this._cellRendererTopRightGrid,className:this.props.classNameTopRightGrid,columnCount:Math.max(0,t-o)+h,columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheTopRightGrid,height:m,onScroll:n?this._onScrollLeft:void 0,ref:this._topRightGridRef,rowCount:r,scrollLeft:i,style:g,tabIndex:null,width:p}));return a?s.createElement("div",{className:"TopRightGrid_ScrollWrapper",style:xn({},this._topRightGridStyle,{height:u,width:p,overflowX:"hidden"})},b):b}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft&&e.scrollLeft>=0?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop&&e.scrollTop>=0?e.scrollTop:t.scrollTop}:null}}]),t}(s.PureComponent);function _n(e){var t=e.className,n=e.columns,o=e.style;return s.createElement("div",{className:t,role:"row",style:o},n)}Ue(Sn,"defaultProps",{classNameBottomLeftGrid:"",classNameBottomRightGrid:"",classNameTopLeftGrid:"",classNameTopRightGrid:"",enableFixedColumnScroll:!1,enableFixedRowScroll:!1,fixedColumnCount:0,fixedRowCount:0,scrollToColumn:-1,scrollToRow:-1,style:{},styleBottomLeftGrid:{},styleBottomRightGrid:{},styleTopLeftGrid:{},styleTopRightGrid:{},hideTopRightGridScrollbar:!1,hideBottomLeftGridScrollbar:!1}),Sn.propTypes={},(0,je.polyfill)(Sn),(function(e){function t(e,n){var o;return Ae(this,t),(o=Fe(this,Ge(t).call(this,e,n))).state={clientHeight:0,clientWidth:0,scrollHeight:0,scrollLeft:0,scrollTop:0,scrollWidth:0},o._onScroll=o._onScroll.bind(Le(o)),o}return We(t,e),He(t,[{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.clientHeight,o=t.clientWidth,r=t.scrollHeight,i=t.scrollLeft,s=t.scrollTop,a=t.scrollWidth;return e({clientHeight:n,clientWidth:o,onScroll:this._onScroll,scrollHeight:r,scrollLeft:i,scrollTop:s,scrollWidth:a})}},{key:"_onScroll",value:function(e){var t=e.clientHeight,n=e.clientWidth,o=e.scrollHeight,r=e.scrollLeft,i=e.scrollTop,s=e.scrollWidth;this.setState({clientHeight:t,clientWidth:n,scrollHeight:o,scrollLeft:r,scrollTop:i,scrollWidth:s})}}]),t}(s.PureComponent)).propTypes={},_n.propTypes=null;const Tn={ASC:"ASC",DESC:"DESC"};function Rn(e){var t=e.sortDirection,n=qe("ReactVirtualized__Table__sortableHeaderIcon",{"ReactVirtualized__Table__sortableHeaderIcon--ASC":t===Tn.ASC,"ReactVirtualized__Table__sortableHeaderIcon--DESC":t===Tn.DESC});return s.createElement("svg",{className:n,width:18,height:18,viewBox:"0 0 24 24"},t===Tn.ASC?s.createElement("path",{d:"M7 14l5-5 5 5z"}):s.createElement("path",{d:"M7 10l5 5 5-5z"}),s.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}function kn(e){var t=e.dataKey,n=e.label,o=e.sortBy,r=e.sortDirection,i=o===t,a=[s.createElement("span",{className:"ReactVirtualized__Table__headerTruncatedText",key:"label",title:"string"==typeof n?n:null},n)];return i&&a.push(s.createElement(Rn,{key:"SortIndicator",sortDirection:r})),a}function En(e){var t=e.className,n=e.columns,o=e.index,r=e.key,i=e.onRowClick,a=e.onRowDoubleClick,l=e.onRowMouseOut,c=e.onRowMouseOver,d=e.onRowRightClick,h=e.rowData,u=e.style,p={"aria-rowindex":o+1};return(i||a||l||c||d)&&(p["aria-label"]="row",p.tabIndex=0,i&&(p.onClick=function(e){return i({event:e,index:o,rowData:h})}),a&&(p.onDoubleClick=function(e){return a({event:e,index:o,rowData:h})}),l&&(p.onMouseOut=function(e){return l({event:e,index:o,rowData:h})}),c&&(p.onMouseOver=function(e){return c({event:e,index:o,rowData:h})}),d&&(p.onContextMenu=function(e){return d({event:e,index:o,rowData:h})})),s.createElement("div",Ve({},p,{className:t,key:r,role:"row",style:u}),n)}Rn.propTypes={},kn.propTypes=null,En.propTypes=null;var On=function(e){function t(){return Ae(this,t),Fe(this,Ge(t).apply(this,arguments))}return We(t,e),t}(s.Component);function In(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Mn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?In(n,!0).forEach((function(t){Ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):In(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Ue(On,"defaultProps",{cellDataGetter:function(e){var t=e.dataKey,n=e.rowData;return"function"==typeof n.get?n.get(t):n[t]},cellRenderer:function(e){var t=e.cellData;return null==t?"":String(t)},defaultSortDirection:Tn.ASC,flexGrow:0,flexShrink:1,headerRenderer:kn,style:{}}),On.propTypes={};var Dn=function(e){function t(e){var n;return Ae(this,t),(n=Fe(this,Ge(t).call(this,e))).state={scrollbarWidth:0},n._createColumn=n._createColumn.bind(Le(n)),n._createRow=n._createRow.bind(Le(n)),n._onScroll=n._onScroll.bind(Le(n)),n._onSectionRendered=n._onSectionRendered.bind(Le(n)),n._setRef=n._setRef.bind(Le(n)),n}return We(t,e),He(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,n=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:n}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,n=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:n,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o;this.Grid&&this.Grid.recomputeGridSize({rowIndex:r,columnIndex:n})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"getScrollbarWidth",value:function(){if(this.Grid){var e=(0,Dt.findDOMNode)(this.Grid),t=e.clientWidth||0;return(e.offsetWidth||0)-t}return 0}},{key:"componentDidMount",value:function(){this._setScrollbarWidth()}},{key:"componentDidUpdate",value:function(){this._setScrollbarWidth()}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.className,r=t.disableHeader,i=t.gridClassName,a=t.gridStyle,l=t.headerHeight,c=t.headerRowRenderer,d=t.height,h=t.id,u=t.noRowsRenderer,p=t.rowClassName,f=t.rowStyle,m=t.scrollToIndex,g=t.style,b=t.width,v=this.state.scrollbarWidth,y=r?d:d-l,w="function"==typeof p?p({index:-1}):p,C="function"==typeof f?f({index:-1}):f;return this._cachedColumnStyles=[],s.Children.toArray(n).forEach((function(t,n){var o=e._getFlexStyleForColumn(t,t.props.style);e._cachedColumnStyles[n]=Mn({overflow:"hidden"},o)})),s.createElement("div",{"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-colcount":s.Children.toArray(n).length,"aria-rowcount":this.props.rowCount,className:qe("ReactVirtualized__Table",o),id:h,role:"grid",style:g},!r&&c({className:qe("ReactVirtualized__Table__headerRow",w),columns:this._getHeaderColumns(),style:Mn({height:l,overflow:"hidden",paddingRight:v,width:b},C)}),s.createElement(vt,Ve({},this.props,{"aria-readonly":null,autoContainerWidth:!0,className:qe("ReactVirtualized__Table__Grid",i),cellRenderer:this._createRow,columnWidth:b,columnCount:1,height:y,id:void 0,noContentRenderer:u,onScroll:this._onScroll,onSectionRendered:this._onSectionRendered,ref:this._setRef,role:"rowgroup",scrollbarWidth:v,scrollToRow:m,style:Mn({},a,{overflowX:"hidden"})})))}},{key:"_createColumn",value:function(e){var t=e.column,n=e.columnIndex,o=e.isScrolling,r=e.parent,i=e.rowData,a=e.rowIndex,l=this.props.onColumnClick,c=t.props,d=c.cellDataGetter,h=c.cellRenderer,u=c.className,p=c.columnData,f=c.dataKey,m=c.id,g=h({cellData:d({columnData:p,dataKey:f,rowData:i}),columnData:p,columnIndex:n,dataKey:f,isScrolling:o,parent:r,rowData:i,rowIndex:a}),b=this._cachedColumnStyles[n],v="string"==typeof g?g:null;return s.createElement("div",{"aria-colindex":n+1,"aria-describedby":m,className:qe("ReactVirtualized__Table__rowColumn",u),key:"Row"+a+"-Col"+n,onClick:function(e){l&&l({columnData:p,dataKey:f,event:e})},role:"gridcell",style:b,title:v},g)}},{key:"_createHeader",value:function(e){var t,n,o,r,i,a=e.column,l=e.index,c=this.props,d=c.headerClassName,h=c.headerStyle,u=c.onHeaderClick,p=c.sort,f=c.sortBy,m=c.sortDirection,g=a.props,b=g.columnData,v=g.dataKey,y=g.defaultSortDirection,w=g.disableSort,C=g.headerRenderer,x=g.id,S=g.label,_=!w&&p,T=qe("ReactVirtualized__Table__headerColumn",d,a.props.headerClassName,{ReactVirtualized__Table__sortableHeaderColumn:_}),R=this._getFlexStyleForColumn(a,Mn({},h,{},a.props.headerStyle)),k=C({columnData:b,dataKey:v,disableSort:w,label:S,sortBy:f,sortDirection:m});if(_||u){var E=f!==v?y:m===Tn.DESC?Tn.ASC:Tn.DESC,O=function(e){_&&p({defaultSortDirection:y,event:e,sortBy:v,sortDirection:E}),u&&u({columnData:b,dataKey:v,event:e})};i=a.props["aria-label"]||S||v,r="none",o=0,t=O,n=function(e){"Enter"!==e.key&&" "!==e.key||O(e)}}return f===v&&(r=m===Tn.ASC?"ascending":"descending"),s.createElement("div",{"aria-label":i,"aria-sort":r,className:T,id:x,key:"Header-Col"+l,onClick:t,onKeyDown:n,role:"columnheader",style:R,tabIndex:o},k)}},{key:"_createRow",value:function(e){var t=this,n=e.rowIndex,o=e.isScrolling,r=e.key,i=e.parent,a=e.style,l=this.props,c=l.children,d=l.onRowClick,h=l.onRowDoubleClick,u=l.onRowRightClick,p=l.onRowMouseOver,f=l.onRowMouseOut,m=l.rowClassName,g=l.rowGetter,b=l.rowRenderer,v=l.rowStyle,y=this.state.scrollbarWidth,w="function"==typeof m?m({index:n}):m,C="function"==typeof v?v({index:n}):v,x=g({index:n}),S=s.Children.toArray(c).map((function(e,r){return t._createColumn({column:e,columnIndex:r,isScrolling:o,parent:i,rowData:x,rowIndex:n,scrollbarWidth:y})})),_=qe("ReactVirtualized__Table__row",w),T=Mn({},a,{height:this._getRowHeight(n),overflow:"hidden",paddingRight:y},C);return b({className:_,columns:S,index:n,isScrolling:o,key:r,onRowClick:d,onRowDoubleClick:h,onRowRightClick:u,onRowMouseOver:p,onRowMouseOut:f,rowData:x,style:T})}},{key:"_getFlexStyleForColumn",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="".concat(e.props.flexGrow," ").concat(e.props.flexShrink," ").concat(e.props.width,"px"),o=Mn({},t,{flex:n,msFlex:n,WebkitFlex:n});return e.props.maxWidth&&(o.maxWidth=e.props.maxWidth),e.props.minWidth&&(o.minWidth=e.props.minWidth),o}},{key:"_getHeaderColumns",value:function(){var e=this,t=this.props,n=t.children;return(t.disableHeader?[]:s.Children.toArray(n)).map((function(t,n){return e._createHeader({column:t,index:n})}))}},{key:"_getRowHeight",value:function(e){var t=this.props.rowHeight;return"function"==typeof t?t({index:e}):t}},{key:"_onScroll",value:function(e){var t=e.clientHeight,n=e.scrollHeight,o=e.scrollTop;(0,this.props.onScroll)({clientHeight:t,scrollHeight:n,scrollTop:o})}},{key:"_onSectionRendered",value:function(e){var t=e.rowOverscanStartIndex,n=e.rowOverscanStopIndex,o=e.rowStartIndex,r=e.rowStopIndex;(0,this.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:n,startIndex:o,stopIndex:r})}},{key:"_setRef",value:function(e){this.Grid=e}},{key:"_setScrollbarWidth",value:function(){var e=this.getScrollbarWidth();this.setState({scrollbarWidth:e})}}]),t}(s.PureComponent);Ue(Dn,"defaultProps",{disableHeader:!1,estimatedRowSize:30,headerHeight:0,headerStyle:{},noRowsRenderer:function(){return null},onRowsRendered:function(){return null},onScroll:function(){return null},overscanIndicesGetter:yt,overscanRowCount:10,rowRenderer:En,headerRowRenderer:_n,rowStyle:{},scrollToAlignment:"auto",scrollToIndex:-1,style:{}}),Dn.propTypes={};var $n=[],An=null,Nn=null;function Pn(){Nn&&(Nn=null,document.body&&null!=An&&(document.body.style.pointerEvents=An),An=null)}function zn(){Pn(),$n.forEach((function(e){return e.__resetIsScrolling()}))}function Hn(e){e.currentTarget===window&&null==An&&document.body&&(An=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),function(){Nn&&ut(Nn);var e=0;$n.forEach((function(t){e=Math.max(e,t.props.scrollingResetTimeInterval)})),Nn=pt(zn,e)}(),$n.forEach((function(t){t.props.scrollElement===e.currentTarget&&t.__handleWindowScrollEvent()}))}function Ln(e,t){$n.some((function(e){return e.props.scrollElement===t}))||t.addEventListener("scroll",Hn),$n.push(e)}function Fn(e,t){($n=$n.filter((function(t){return t!==e}))).length||(t.removeEventListener("scroll",Hn),Nn&&(ut(Nn),Pn()))}var Gn,Bn,Wn=function(e){return e===window},Un=function(e){return e.getBoundingClientRect()};function jn(e,t){if(e){if(Wn(e)){var n=window,o=n.innerHeight,r=n.innerWidth;return{height:"number"==typeof o?o:0,width:"number"==typeof r?r:0}}return Un(e)}return{height:t.serverHeight,width:t.serverWidth}}function Vn(e){return Wn(e)&&document.documentElement?{top:"scrollY"in window?window.scrollY:document.documentElement.scrollTop,left:"scrollX"in window?window.scrollX:document.documentElement.scrollLeft}:{top:e.scrollTop,left:e.scrollLeft}}function Zn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var qn=function(){return"undefined"!=typeof window?window:void 0},Kn=(Bn=Gn=function(e){function t(){var e,n;Ae(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return Ue(Le(n=Fe(this,(e=Ge(t)).call.apply(e,[this].concat(r)))),"_window",qn()),Ue(Le(n),"_isMounted",!1),Ue(Le(n),"_positionFromTop",0),Ue(Le(n),"_positionFromLeft",0),Ue(Le(n),"_detectElementResize",void 0),Ue(Le(n),"_child",void 0),Ue(Le(n),"state",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Zn(n,!0).forEach((function(t){Ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},jn(n.props.scrollElement,n.props),{isScrolling:!1,scrollLeft:0,scrollTop:0})),Ue(Le(n),"_registerChild",(function(e){e&&Element,n._child=e,n.updatePosition()})),Ue(Le(n),"_onChildScroll",(function(e){var t=e.scrollTop;if(n.state.scrollTop!==t){var o=n.props.scrollElement;o&&("function"==typeof o.scrollTo?o.scrollTo(0,t+n._positionFromTop):o.scrollTop=t+n._positionFromTop)}})),Ue(Le(n),"_registerResizeListener",(function(e){e===window?window.addEventListener("resize",n._onResize,!1):n._detectElementResize.addResizeListener(e,n._onResize)})),Ue(Le(n),"_unregisterResizeListener",(function(e){e===window?window.removeEventListener("resize",n._onResize,!1):e&&n._detectElementResize.removeResizeListener(e,n._onResize)})),Ue(Le(n),"_onResize",(function(){n.updatePosition()})),Ue(Le(n),"__handleWindowScrollEvent",(function(){if(n._isMounted){var e=n.props.onScroll,t=n.props.scrollElement;if(t){var o=Vn(t),r=Math.max(0,o.left-n._positionFromLeft),i=Math.max(0,o.top-n._positionFromTop);n.setState({isScrolling:!0,scrollLeft:r,scrollTop:i}),e({scrollLeft:r,scrollTop:i})}}})),Ue(Le(n),"__resetIsScrolling",(function(){n.setState({isScrolling:!1})})),n}return We(t,e),He(t,[{key:"updatePosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollElement,t=this.props.onResize,n=this.state,o=n.height,r=n.width,i=this._child||Dt.findDOMNode(this);if(i instanceof Element&&e){var s=function(e,t){if(Wn(t)&&document.documentElement){var n=document.documentElement,o=Un(e),r=Un(n);return{top:o.top-r.top,left:o.left-r.left}}var i=Vn(t),s=Un(e),a=Un(t);return{top:s.top+i.top-a.top,left:s.left+i.left-a.left}}(i,e);this._positionFromTop=s.top,this._positionFromLeft=s.left}var a=jn(e,this.props);o===a.height&&r===a.width||(this.setState({height:a.height,width:a.width}),t({height:a.height,width:a.width}))}},{key:"componentDidMount",value:function(){var e=this.props.scrollElement;this._detectElementResize=Rt(),this.updatePosition(e),e&&(Ln(this,e),this._registerResizeListener(e)),this._isMounted=!0}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.scrollElement,o=e.scrollElement;o!==n&&null!=o&&null!=n&&(this.updatePosition(n),Fn(this,o),Ln(this,n),this._unregisterResizeListener(o),this._registerResizeListener(n))}},{key:"componentWillUnmount",value:function(){var e=this.props.scrollElement;e&&(Fn(this,e),this._unregisterResizeListener(e)),this._isMounted=!1}},{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.isScrolling,o=t.scrollTop,r=t.scrollLeft,i=t.height,s=t.width;return e({onChildScroll:this._onChildScroll,registerChild:this._registerChild,height:i,isScrolling:n,scrollLeft:r,scrollTop:o,width:s})}}]),t}(s.PureComponent),Ue(Gn,"propTypes",null),Bn);Ue(Kn,"defaultProps",{onResize:function(){},onScroll:function(){},scrollingResetTimeInterval:150,scrollElement:qn(),serverHeight:0,serverWidth:0});var Yn,Xn=(Yn=function(e,t){return Yn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Yn(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Yn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),Qn=function(){return Qn=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},Qn.apply(this,arguments)},Jn={top:{width:"100%",height:"10px",top:"-5px",left:"0px",cursor:"row-resize"},right:{width:"10px",height:"100%",top:"0px",right:"-5px",cursor:"col-resize"},bottom:{width:"100%",height:"10px",bottom:"-5px",left:"0px",cursor:"row-resize"},left:{width:"10px",height:"100%",top:"0px",left:"-5px",cursor:"col-resize"},topRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",top:"-10px",cursor:"ne-resize"},bottomRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",bottom:"-10px",cursor:"se-resize"},bottomLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",bottom:"-10px",cursor:"sw-resize"},topLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",top:"-10px",cursor:"nw-resize"}},eo=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onMouseDown=function(e){t.props.onResizeStart(e,t.props.direction)},t.onTouchStart=function(e){t.props.onResizeStart(e,t.props.direction)},t}return Xn(t,e),t.prototype.render=function(){return s.createElement("div",{className:this.props.className||"",style:Qn(Qn({position:"absolute",userSelect:"none"},Jn[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},t}(s.PureComponent),to=n(3316),no=n.n(to),oo=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ro=function(){return ro=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},ro.apply(this,arguments)},io={width:"auto",height:"auto"},so=no()((function(e,t,n){return Math.max(Math.min(e,n),t)})),ao=no()((function(e,t){return Math.round(e/t)*t})),lo=no()((function(e,t){return new RegExp(e,"i").test(t)})),co=function(e){return Boolean(e.touches&&e.touches.length)},ho=no()((function(e,t,n){void 0===n&&(n=0);var o=t.reduce((function(n,o,r){return Math.abs(o-e)<Math.abs(t[n]-e)?r:n}),0),r=Math.abs(t[o]-e);return 0===n||r<n?t[o]:e})),uo=no()((function(e,t){return e.substr(e.length-t.length,t.length)===t})),po=no()((function(e){return"auto"===(e=e.toString())||uo(e,"px")||uo(e,"%")||uo(e,"vh")||uo(e,"vw")||uo(e,"vmax")||uo(e,"vmin")?e:e+"px"})),fo=function(e,t,n,o){if(e&&"string"==typeof e){if(uo(e,"px"))return Number(e.replace("px",""));if(uo(e,"%"))return t*(Number(e.replace("%",""))/100);if(uo(e,"vw"))return n*(Number(e.replace("vw",""))/100);if(uo(e,"vh"))return o*(Number(e.replace("vh",""))/100)}return e},mo=no()((function(e,t,n,o,r,i,s){return o=fo(o,e.width,t,n),r=fo(r,e.height,t,n),i=fo(i,e.width,t,n),s=fo(s,e.height,t,n),{maxWidth:void 0===o?void 0:Number(o),maxHeight:void 0===r?void 0:Number(r),minWidth:void 0===i?void 0:Number(i),minHeight:void 0===s?void 0:Number(s)}})),go=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],bo="__resizable_base__",vo=function(e){function t(t){var n=e.call(this,t)||this;return n.ratio=1,n.resizable=null,n.parentLeft=0,n.parentTop=0,n.resizableLeft=0,n.resizableRight=0,n.resizableTop=0,n.resizableBottom=0,n.targetLeft=0,n.targetTop=0,n.appendBase=function(){if(!n.resizable||!n.window)return null;var e=n.parentNode;if(!e)return null;var t=n.window.document.createElement("div");return t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.transform="scale(0, 0)",t.style.left="0",t.style.flex="0",t.classList?t.classList.add(bo):t.className+=bo,e.appendChild(t),t},n.removeBase=function(e){var t=n.parentNode;t&&t.removeChild(e)},n.ref=function(e){e&&(n.resizable=e)},n.state={isResizing:!1,width:void 0===(n.propsSize&&n.propsSize.width)?"auto":n.propsSize&&n.propsSize.width,height:void 0===(n.propsSize&&n.propsSize.height)?"auto":n.propsSize&&n.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},n.onResizeStart=n.onResizeStart.bind(n),n.onMouseMove=n.onMouseMove.bind(n),n.onMouseUp=n.onMouseUp.bind(n),n}return oo(t,e),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||io},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var e=0,t=0;if(this.resizable&&this.window){var n=this.resizable.offsetWidth,o=this.resizable.offsetHeight,r=this.resizable.style.position;"relative"!==r&&(this.resizable.style.position="relative"),e="auto"!==this.resizable.style.width?this.resizable.offsetWidth:n,t="auto"!==this.resizable.style.height?this.resizable.offsetHeight:o,this.resizable.style.position=r}return{width:e,height:t}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var e=this,t=this.props.size,n=function(t){if(void 0===e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&uo(e.propsSize[t].toString(),"%")){if(uo(e.state[t].toString(),"%"))return e.state[t].toString();var n=e.getParentSize();return Number(e.state[t].toString().replace("px",""))/n[t]*100+"%"}return po(e.state[t])};return{width:t&&void 0!==t.width&&!this.state.isResizing?po(t.width):n("width"),height:t&&void 0!==t.height&&!this.state.isResizing?po(t.height):n("height")}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var e=this.appendBase();if(!e)return{width:0,height:0};var t=!1,n=this.parentNode.style.flexWrap;"wrap"!==n&&(t=!0,this.parentNode.style.flexWrap="wrap"),e.style.position="relative",e.style.minWidth="100%";var o={width:e.offsetWidth,height:e.offsetHeight};return t&&(this.parentNode.style.flexWrap=n),this.removeBase(e),o},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(this.resizable&&this.window){var e=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==e.flexBasis?e.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(e,t){var n=this.propsSize&&this.propsSize[t];return"auto"!==this.state[t]||this.state.original[t]!==e||void 0!==n&&"auto"!==n?e:"auto"},t.prototype.calculateNewMaxFromBoundary=function(e,t){var n,o,r=this.props.boundsByDirection,i=this.state.direction,s=r&&lo("left",i),a=r&&lo("top",i);if("parent"===this.props.bounds){var l=this.parentNode;l&&(n=s?this.resizableRight-this.parentLeft:l.offsetWidth+(this.parentLeft-this.resizableLeft),o=a?this.resizableBottom-this.parentTop:l.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(n=s?this.resizableRight:this.window.innerWidth-this.resizableLeft,o=a?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(n=s?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),o=a?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return n&&Number.isFinite(n)&&(e=e&&e<n?e:n),o&&Number.isFinite(o)&&(t=t&&t<o?t:o),{maxWidth:e,maxHeight:t}},t.prototype.calculateNewSizeFromDirection=function(e,t){var n=this.props.scale||1,o=this.props.resizeRatio||1,r=this.state,i=r.direction,s=r.original,a=this.props,l=a.lockAspectRatio,c=a.lockAspectRatioExtraHeight,d=a.lockAspectRatioExtraWidth,h=s.width,u=s.height,p=c||0,f=d||0;return lo("right",i)&&(h=s.width+(e-s.x)*o/n,l&&(u=(h-f)/this.ratio+p)),lo("left",i)&&(h=s.width-(e-s.x)*o/n,l&&(u=(h-f)/this.ratio+p)),lo("bottom",i)&&(u=s.height+(t-s.y)*o/n,l&&(h=(u-p)*this.ratio+f)),lo("top",i)&&(u=s.height-(t-s.y)*o/n,l&&(h=(u-p)*this.ratio+f)),{newWidth:h,newHeight:u}},t.prototype.calculateNewSizeFromAspectRatio=function(e,t,n,o){var r=this.props,i=r.lockAspectRatio,s=r.lockAspectRatioExtraHeight,a=r.lockAspectRatioExtraWidth,l=void 0===o.width?10:o.width,c=void 0===n.width||n.width<0?e:n.width,d=void 0===o.height?10:o.height,h=void 0===n.height||n.height<0?t:n.height,u=s||0,p=a||0;if(i){var f=(d-u)*this.ratio+p,m=(h-u)*this.ratio+p,g=(l-p)/this.ratio+u,b=(c-p)/this.ratio+u,v=Math.max(l,f),y=Math.min(c,m),w=Math.max(d,g),C=Math.min(h,b);e=so(e,v,y),t=so(t,w,C)}else e=so(e,l,c),t=so(t,d,h);return{newWidth:e,newHeight:t}},t.prototype.setBoundingClientRect=function(){if("parent"===this.props.bounds){var e=this.parentNode;if(e){var t=e.getBoundingClientRect();this.parentLeft=t.left,this.parentTop=t.top}}if(this.props.bounds&&"string"!=typeof this.props.bounds){var n=this.props.bounds.getBoundingClientRect();this.targetLeft=n.left,this.targetTop=n.top}if(this.resizable){var o=this.resizable.getBoundingClientRect(),r=o.left,i=o.top,s=o.right,a=o.bottom;this.resizableLeft=r,this.resizableRight=s,this.resizableTop=i,this.resizableBottom=a}},t.prototype.onResizeStart=function(e,t){if(this.resizable&&this.window){var n,o=0,r=0;if(e.nativeEvent&&function(e){return Boolean((e.clientX||0===e.clientX)&&(e.clientY||0===e.clientY))}(e.nativeEvent)?(o=e.nativeEvent.clientX,r=e.nativeEvent.clientY):e.nativeEvent&&co(e.nativeEvent)&&(o=e.nativeEvent.touches[0].clientX,r=e.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable&&!1===this.props.onResizeStart(e,t,this.resizable))return;this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var i=this.window.getComputedStyle(this.resizable);if("auto"!==i.flexBasis){var s=this.parentNode;if(s){var a=this.window.getComputedStyle(s).flexDirection;this.flexDir=a.startsWith("row")?"row":"column",n=i.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var l={original:{x:o,y:r,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:ro(ro({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(e.target).cursor||"auto"}),direction:t,flexBasis:n};this.setState(l)}},t.prototype.onMouseMove=function(e){if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&co(e))try{e.preventDefault(),e.stopPropagation()}catch(e){}var t=this.props,n=t.maxWidth,o=t.maxHeight,r=t.minWidth,i=t.minHeight,s=co(e)?e.touches[0].clientX:e.clientX,a=co(e)?e.touches[0].clientY:e.clientY,l=this.state,c=l.direction,d=l.original,h=l.width,u=l.height,p=this.getParentSize(),f=mo(p,this.window.innerWidth,this.window.innerHeight,n,o,r,i);n=f.maxWidth,o=f.maxHeight,r=f.minWidth,i=f.minHeight;var m=this.calculateNewSizeFromDirection(s,a),g=m.newHeight,b=m.newWidth,v=this.calculateNewMaxFromBoundary(n,o),y=this.calculateNewSizeFromAspectRatio(b,g,{width:v.maxWidth,height:v.maxHeight},{width:r,height:i});if(b=y.newWidth,g=y.newHeight,this.props.grid){var w=ao(b,this.props.grid[0]),C=ao(g,this.props.grid[1]),x=this.props.snapGap||0;b=0===x||Math.abs(w-b)<=x?w:b,g=0===x||Math.abs(C-g)<=x?C:g}this.props.snap&&this.props.snap.x&&(b=ho(b,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(g=ho(g,this.props.snap.y,this.props.snapGap));var S={width:b-d.width,height:g-d.height};h&&"string"==typeof h&&(uo(h,"%")?b=b/p.width*100+"%":uo(h,"vw")?b=b/this.window.innerWidth*100+"vw":uo(h,"vh")&&(b=b/this.window.innerHeight*100+"vh")),u&&"string"==typeof u&&(uo(u,"%")?g=g/p.height*100+"%":uo(u,"vw")?g=g/this.window.innerWidth*100+"vw":uo(u,"vh")&&(g=g/this.window.innerHeight*100+"vh"));var _={width:this.createSizeForCssProperty(b,"width"),height:this.createSizeForCssProperty(g,"height")};"row"===this.flexDir?_.flexBasis=_.width:"column"===this.flexDir&&(_.flexBasis=_.height),this.setState(_),this.props.onResize&&this.props.onResize(e,c,this.resizable,S)}},t.prototype.onMouseUp=function(e){var t=this.state,n=t.isResizing,o=t.direction,r=t.original;if(n&&this.resizable){var i={width:this.size.width-r.width,height:this.size.height-r.height};this.props.onResizeStop&&this.props.onResizeStop(e,o,this.resizable,i),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:ro(ro({},this.state.backgroundStyle),{cursor:"auto"})})}},t.prototype.updateSize=function(e){this.setState({width:e.width,height:e.height})},t.prototype.renderResizer=function(){var e=this,t=this.props,n=t.enable,o=t.handleStyles,r=t.handleClasses,i=t.handleWrapperStyle,a=t.handleWrapperClass,l=t.handleComponent;if(!n)return null;var c=Object.keys(n).map((function(t){return!1!==n[t]?s.createElement(eo,{key:t,direction:t,onResizeStart:e.onResizeStart,replaceStyles:o&&o[t],className:r&&r[t]},l&&l[t]?l[t]:null):null}));return s.createElement("div",{className:a,style:i},c)},t.prototype.render=function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return-1!==go.indexOf(n)||(t[n]=e.props[n]),t}),{}),n=ro(ro(ro({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(n.flexBasis=this.state.flexBasis);var o=this.props.as||"div";return s.createElement(o,ro({ref:this.ref,style:n,className:this.props.className},t),this.state.isResizing&&s.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(s.PureComponent);const yo={top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},wo={min:0,max:1/0},Co=({height:e,heightConstraints:t,width:n,widthConstraints:o})=>({height:H(e,t.min,t.max),width:H(n,o.min,o.max)}),xo=({enable:e,height:t,heightConstraints:n,resizeEdge:o,width:r=0,widthConstraints:i})=>({...Co({height:t,widthConstraints:i,heightConstraints:n,width:r}),enable:void 0===e||e,horizontal:"left"===o||"right"===o,initialHeight:t,initialWidth:r,resizing:!1,isMouseWheeling:!1,vertical:"top"===o||"bottom"===o});class So extends a().PureComponent{static defaultProps={className:"",enable:!0,heightConstraints:wo,resizeContentClassName:"",resizeHandleClassName:"",style:{},wrapperStyle:{},translate:()=>"",wrapChildrenInDivContainer:!0,widthConstraints:wo};onWheelTimeOut;isMouseWheeling=!1;constructor(e){super(e),this.state=xo(e)}componentWillReceiveProps(e){const{onResizeFromPropChange:t}=this.props,{height:n,resizing:o,width:r}=this.state,{onResizeFromPropChange:i}=e;if(o)return;const s=xo(e);this.setState(s);const{height:a,width:l}=s,c=i||t;!c||a===n&&l===r||c({height:a,width:l,originalHeight:n,originalWidth:r})}_onResize=(e,t,n,{height:o,width:r})=>{const{onResize:i}=this.props,{height:s,horizontal:a,vertical:l,width:c}=this.state,{height:d,width:h}=(({deltaWidth:e,deltaHeight:t},{heightConstraints:n,widthConstraints:o},{initialHeight:r,initialWidth:i})=>Co({height:r+t,heightConstraints:n,width:i+e,widthConstraints:o}))({deltaWidth:r,deltaHeight:o},this.props,this.state),u=a&&h!==c,p=l&&d!==s;(u||p)&&(this.setState({height:p?d:s,width:u?h:c,isMouseWheeling:!1}),i&&i({height:p?d:void 0,width:u?h:void 0}))};_onResizeStart=e=>{e.preventDefault(),e.stopPropagation();const{onResizeStart:t}=this.props,{height:n,horizontal:o,vertical:r,width:i}=this.state;this.setState({resizing:!0}),t&&t({height:r?n:void 0,width:o?i:void 0})};_onResizeEnd=()=>{const{onResizeEnd:e}=this.props,{height:t,horizontal:n,vertical:o,width:r,initialWidth:i,initialHeight:s}=this.state;this.setState({initialWidth:r,initialHeight:t,resizing:!1}),i===r&&s===t||e&&e({width:n?r:void 0,height:o?t:void 0})};_onWheel=()=>{this.isMouseWheeling||(this.isMouseWheeling=!0,this.setState({isMouseWheeling:!0})),clearTimeout(this.onWheelTimeOut),this.onWheelTimeOut=setTimeout((()=>{this.isMouseWheeling=!1,this.setState({isMouseWheeling:!1})}),50)};render(){const{children:e,className:t,handleStyles:n,resizeContentClassName:o,resizeEdge:r,resizeHandleClassName:s,style:l,translate:c,heightConstraints:d,wrapChildrenInDivContainer:h,widthConstraints:u}=this.props,{enable:p,height:f,horizontal:m,resizing:g,vertical:b,width:v,isMouseWheeling:y}=this.state,{display:w,...C}=l,{min:x,max:S}=u,{min:_,max:T}=d,R={...this.props.wrapperStyle};m&&(R.width=v,R.minWidth=v),b&&(R.height=f,R.minHeight=f);const k=i()("resizable",t,{resizing:g}),E=i()("contents",o,`resize-edge-${r}`,{horizontal:m,vertical:b}),O=i()(r,s,"resizable-handle",{horizontal:m,vertical:b}),I=a().createElement("span",{title:c("ResizePanel")});return a().createElement("div",{"data-testid":"resizable",onWheel:this._onWheel,style:{...R,display:w}},a().createElement(vo,{className:k,"data-testid":"resizable-core",enable:{...yo,[r]:!y&&p},handleClasses:{[r]:O},handleComponent:{[r]:I},handleStyles:n,maxHeight:b?T:void 0,maxWidth:m?S:void 0,minHeight:b?_:void 0,minWidth:m?x:void 0,onResize:this._onResize,onResizeStart:this._onResizeStart,onResizeStop:this._onResizeEnd,size:{height:b?f:"100%",width:m?v:"100%"},style:C},h?a().createElement("div",{className:E,style:{userSelect:"none"}},e):e))}}var _o=n(7154);function To(e,t,n){const o=t*m.$0,{shape:r}=m.Qh[e],i=m.d_[r];if(!i)return{height:0,offset:0};const{baseHeight:s,minHeight:a,maxHeight:l}=i;let c=s*(n/o);void 0!==a&&c<a&&(c=a),void 0!==l&&c>l&&(c=l);const d=m.$0*(n/o);return{height:c,offset:c>=d?0:(d-c)/2}}function Ro(e,t,n){const o=n*m.$0;return e*m.$0/o*t}class ko extends a().PureComponent{canvas;componentDidMount(){this.updateCanvas()}componentWillReceiveProps(e){e.branchUpstreamRowIndices===this.props.branchUpstreamRowIndices&&e.markerRowIndices===this.props.markerRowIndices&&e.totalRows===this.props.totalRows&&e.viewportHeight===this.props.viewportHeight&&e.viewportWidth===this.props.viewportWidth&&e.markerColors===this.props.markerColors&&e.enabledScrollMarkerTypes===this.props.enabledScrollMarkerTypes&&e.scrollWidth===this.props.scrollWidth||this.updateCanvas()}updateCanvas(e){const{branchUpstreamRowIndices:t,enabledScrollMarkerTypes:n,viewportHeight:o,markerRowIndices:r,markerColors:i,scrollWidth:s,totalRows:a}=e||this.props,l=this.canvas.getContext("2d");l.canvas.width=s,l.canvas.height=o;const c=s/m.dF;l.clearRect(0,0,l.canvas.width,l.canvas.height);for(const[e,s]of Object.entries(m.Qh)){if(!(n.includes(e)||"remoteBranches"===e&&n.includes("localBranches")))continue;const d="remoteBranches"!==e||n.includes("remoteBranches")?r[e]||[]:t,h=i[e],u=s.lanes;h&&d.length&&(l.fillStyle=h,d.forEach((t=>{const{height:n,offset:r}=To(e,a,o);u.length&&l.fillRect(u[0]*c,Ro(t,o,a)+r-.5*n,c*u.length,n)})))}}render(){return a().createElement("canvas",{className:"graph-scroll-markers",ref:e=>this.canvas=e})}}var Eo=function({children:e,className:t,height:n,heightAdjustment:o,graphZoneType:r,scrollTop:i,style:s}){const l=m.qi[r].listId,c=document.getElementById(l),d=c?.scrollHeight||0;let h=n-28;void 0!==i&&(h=Number(s.top)-i,c&&d-n-i<0&&(h=n-o-28));const u={top:h,zIndex:2},p=a().createElement("span",{className:"absolute",style:u},e);return a().createElement("div",{className:t,style:s},c?$t().createPortal(p,document.getElementById("graph-container")):p)};function Oo({inline:e,getExternalIcon:t,message:n,size:o=100,useSimpleSpinner:r}){const s=i()("loading-spinner",{"inline-block":e,ml2:e,"shrink-0":e}),l=i()("spinner","mr1",{"inline-block":e}),c={height:o,width:o},d=i()("message",{"inline-block":e,mx2:e}),h=r?a().createElement("span",{className:l,style:c},t("loading")):a().createElement("div",{className:l,style:c},a().createElement("img",{className:"ring outer",src:"../../../images/spinner-outer-ring.svg",style:c}),a().createElement("img",{className:"ring inner",src:"../../../images/spinner-inner-ring.svg",style:c}),a().createElement("img",{className:"bg-img",src:"../../../images/spinner-kraken.svg",style:c}));return a().createElement("div",{className:s},h,n&&a().createElement("div",{className:d},n))}class Io extends a().Component{render(){const{currentCommits:e,graphZoneType:t,hasMoreCommits:n,height:o,horizontalScrollHeight:r,getExternalIcon:i,isLoadingRows:s,scrollTop:l,style:c,translate:d}=this.props,h=a().createElement(Oo,{className:"loading-spinner",getExternalIcon:i,size:20,useSimpleSpinner:!0}),u=0!==(e>0?e:0)||n?null:a().createElement(a().Fragment,null,d("Graph-NoCommits")),p=a().createElement("div",{className:"graph-adjust-commit-count p1"},s?a().createElement("div",{className:"flex items-center"},a().createElement("span",{style:{paddingRight:"5px"}},h)):u);return a().createElement(Eo,{graphZoneType:t,height:o,heightAdjustment:r,scrollTop:l,style:c},p)}}var Mo=Io;function Do({branchUpstreamRowIndices:e,rowCount:t,cellRenderersByIds:n,columnIndex:o,enabledScrollMarkerTypes:r,enableResizer:s,getExternalIcon:l,getKeyForCell:c,graphHeight:d,graphWidth:h,graphZoneType:u,graphZones:p,hasMoreCommits:f,horizontalScrollHeight:g,isLoadingRows:b,markerColors:v,markerRowIndices:y,onResize:w,onResizeEnd:C,onResizeFromPropChange:x,onScroll:S,onScrollToRowCausedUpdate:_,onZoneEnter:T,scrollLeft:R,scrollToAlignment:k,scrollToIndex:E,scrollTop:O,smartCellRangeRenderer:I,translate:M,verticalScrollWidth:D}){const $=re(u,p);if(!$)return null;const A=document.getElementById($.listId),N=Y(u,p),P=X(t,f,b),z=Q(t,f,b),H=ee($,t),L=J(t,f,b),F=D>0,G=r.length>0,B=i()("graph-panel","react-virtualized-list","pad-for-horizontal-scrollbar",u===m.jZ?"z3":null,{"pad-for-vertical-scrollbar":F}),W=u===m.Wm?{...!N&&{position:"static"},...N&&{width:$.currentWidth>H?$.currentWidth:H,maxWidth:"none"}}:void 0;let U=0;const j=(e,t)=>{const n={...t};var o;e===m.Gn&&(n.scrollTop=O+U),n.scrollTop>O&&A&&(o=A,Math.abs(o.scrollHeight-o.scrollTop-o.clientHeight)<1)||S(u,n,h,d,f)},V=(e,r,i,s,p,v,y,w)=>a().createElement(vt,{autoContainerWidth:!0,cellRangeRenderer:I,cellRenderer:r=>((e,r)=>{if(r.rowIndex>t-1)return P&&0===o?a().createElement(Mo,{currentCommits:t-1,getExternalIcon:l,graphZoneType:u,hasMoreCommits:f,height:d,horizontalScrollHeight:g,isLoadingRows:b,key:c(r.rowIndex),scrollTop:O,style:r.style,translate:M}):void 0;const i={...r,style:{...r.style}};m.Gn===e&&(i.style.top=Number(r.style.top)-O);const s=n[e];return s?s(i):void 0})(e,r),className:i,columnCount:1,columnWidth:w,containerStyle:s,height:y,id:r,isScrolling:!1,key:r,onScroll:t=>j(e,t),onScrollToTargetCausedUpdate:_?e=>_(u,e,h,d,f):void 0,overscanRowCount:0,rowCount:z,rowHeight:m.$0,scrollLeft:R,scrollToAlignment:k,scrollTop:O,scrollToRow:E,style:p,tabIndex:null,width:v}),Z=V($.type,$.listId,B,W,{position:"absolute"},$.currentWidth,d,H),q=Z&&a().createElement(a().Fragment,null,G&&N?a().createElement(ko,{branchUpstreamRowIndices:e,enabledScrollMarkerTypes:r,markerColors:v,markerRowIndices:y,scrollWidth:D,totalRows:z,viewportHeight:d<L?d:L,viewportWidth:$.currentWidth}):null,a().createElement(_o.Z,{contentHeight:L,contentWidth:H,displayHorizontalScrollbar:$.type===m.Wm,displayVerticalScrollbar:N,forceVerticalScrollbar:N&&G,height:d,onScroll:e=>j($.type,e),scrollLeft:R,scrollTop:O,width:$.currentWidth},Z)),K=N?V(m.Gn,"timeline-column","graph-panel react-virtualized-list timeline-column",{overflow:"visible",zIndex:3,maxHeight:L},{position:"absolute",right:0,zIndex:3,maxHeight:d},1,d,1):void 0,te=a().createElement("div",{onMouseEnter:T,onWheelCapture:e=>{U=e.deltaY}},q,K);return N?te:a().createElement(So,{enable:s,height:d,id:`${u}Column`,key:`${u}Column`,onResize:w?e=>w($,e):void 0,onResizeEnd:C?e=>C($,e):void 0,onResizeFromPropChange:x?e=>x($,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z1",width:$.currentWidth,widthConstraints:se(u,p,h)},te)}var $o=n(977),Ao=n.n($o);const No="dnd-container";class Po extends a().PureComponent{dndDrake;childReactElementsById={};constructor(e){super(e),this.loadChildrenReactElements(this.props.children)}componentDidMount(){this.dndDrake&&this.dndDrake.on("drop",this.onDrop)}componentWillReceiveProps(e){this.props.children!==e.children&&this.loadChildrenReactElements(e.children)}componentWillUnmount(){this.dndDrake&&this.dndDrake.destroy()}onDrop=(e,t,n,o)=>{if(this.props.onDrop&&e.id){const t=this.sanitizeId(e.id),n=o?.id?this.sanitizeId(o.id):null,r=this.childReactElementsById[t],i=n?this.childReactElementsById[n]:null;r&&this.props.onDrop(r,i)}};isContainerCallback=e=>Boolean(e?.classList.contains(No));movesCallback=e=>Boolean(e?.id)&&this.isDraggable(e.id);acceptsCallback=(e,t,n,o)=>Boolean(e?.id)&&this.isDroppable(e.id,o?.id);invalidCallBack=()=>!1;dndDecorator=e=>{if(e){const t={isContainer:this.isContainerCallback,mirrorContainer:this.props.mirrorContainer,moves:this.movesCallback,accepts:this.acceptsCallback,invalid:this.invalidCallBack,direction:this.props.direction||"horizontal",copy:!1,copySortSource:!1,revertOnSpill:!1,removeOnSpill:!1,ignoreInputTextSelection:!0};this.dndDrake=Ao()([e],t)}};loadChildrenReactElements(e){this.childReactElementsById={},e&&(e instanceof Array?e.forEach((e=>{a().isValidElement(e)&&this.addChildReactElement(e)})):a().isValidElement(e)&&this.addChildReactElement(e))}addChildReactElement(e){const t=e.props.id;t&&(this.childReactElementsById[this.sanitizeId(t)]=e)}sanitizeId(e){return e.trim().toLowerCase().replace(/-/g,"").replace(/_/g,"")}isDraggable(e){if(this.props.isDraggable){const t=this.sanitizeId(e),n=this.childReactElementsById[t];return Boolean(n)&&this.props.isDraggable(n)}return!1}isDroppable(e,t){if(this.props.isDroppable){const n=this.sanitizeId(e),o=t?this.sanitizeId(t):null,r=this.childReactElementsById[n],i=o?this.childReactElementsById[o]:null;if(r)return this.props.isDroppable(r,i)}return!1}render(){const{children:e,className:t}=this.props,n=i()(No,t);return a().createElement("div",{className:n,ref:this.dndDecorator},e)}}var zo=Po,Ho=n(8613);function Lo(e,t){if(null==e)return{};var n,o,r={},i=Ho(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var Fo=n(5627),Go=n(433);function Bo(e,t){return Bo=Go?Go.bind():function(e,t){return e.__proto__=t,e},Bo(e,t)}function Wo(e,t){e.prototype=Fo(t.prototype),e.prototype.constructor=e,Bo(e,t)}var Uo=n(6981);function jo(){return jo=Uo?Uo.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},jo.apply(this,arguments)}var Vo,Zo=n(5697),qo=n.n(Zo),Ko=n(2856),Yo=n.n(Ko),Xo=n(8853),Qo=n.n(Xo),Jo=n(644),er={in:qo().bool,mountOnEnter:qo().bool,unmountOnExit:qo().bool,appear:qo().bool,timeout:qo().number,onEnter:qo().func,onEntering:qo().func,onEntered:qo().func,onExit:qo().func,onExiting:qo().func,onExited:qo().func},tr=((Vo={})[Jo.d0]="in",Vo[Jo.cn]="in",Vo),nr=function(e){function t(){return e.apply(this,arguments)||this}return Wo(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.children,o=Lo(e,["className","children"]);return a().createElement(Jo.ZP,o,(function(e,o){return a().cloneElement(n,jo({},o,{className:i()("fade",t,n.props.className,tr[e])}))}))},t}(a().Component);nr.propTypes=er,nr.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1};const or=nr;var rr=jo({},Yo().propTypes,{show:qo().bool,rootClose:qo().bool,onHide:qo().func,animation:qo().oneOfType([qo().bool,Qo()]),onEnter:qo().func,onEntering:qo().func,onEntered:qo().func,onExit:qo().func,onExiting:qo().func,onExited:qo().func,placement:qo().oneOf(["top","right","bottom","left"])}),ir={animation:or,rootClose:!1,show:!1,placement:"right"},sr=function(e){function t(){return e.apply(this,arguments)||this}return Wo(t,e),t.prototype.render=function(){var e,t=this.props,n=t.animation,o=t.children,r=Lo(t,["animation","children"]),l=!0===n?or:n||null;return e=l?o:(0,s.cloneElement)(o,{className:i()(o.props.className,"in")}),a().createElement(Yo(),jo({},r,{transition:l}),e)},t}(a().Component);sr.propTypes=rr,sr.defaultProps=ir;const ar=sr;var lr=n(5638),cr=n.n(lr),dr=n(3562),hr=n.n(dr),ur=n(1143),pr=n.n(ur),fr="large",mr="small",gr={large:"lg",medium:"md",small:"sm",xsmall:"xs",lg:"lg",md:"md",sm:"sm",xs:"xs"};function br(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return"function"==typeof n[n.length-1]?e.apply(void 0,n):function(t){return e.apply(void 0,n.concat([t]))}}}function vr(e,t){var n=(e.bsClass||"").trim();return null==n&&pr()(!1),n+(t?"-"+t:"")}var yr=br((function(e,t){var n=t.propTypes||(t.propTypes={}),o=t.defaultProps||(t.defaultProps={});return n.bsClass=qo().string,o.bsClass=e,t})),wr=(br((function(e,t,n){"string"!=typeof t&&(n=t,t=void 0);var o=n.STYLES||[],r=n.propTypes||{};e.forEach((function(e){-1===o.indexOf(e)&&o.push(e)}));var i=qo().oneOf(o);return n.STYLES=o,i._values=o,n.propTypes=jo({},r,{bsStyle:i}),void 0!==t&&((n.defaultProps||(n.defaultProps={})).bsStyle=t),n})),br((function(e,t,n){"string"!=typeof t&&(n=t,t=void 0);var o=n.SIZES||[],r=n.propTypes||{};e.forEach((function(e){-1===o.indexOf(e)&&o.push(e)}));var i=[];o.forEach((function(e){var t=gr[e];t&&t!==e&&i.push(t),i.push(e)}));var s=qo().oneOf(i);return s._values=i,n.SIZES=o,n.propTypes=jo({},r,{bsSize:s}),void 0!==t&&(n.defaultProps||(n.defaultProps={}),n.defaultProps.bsSize=t),n})));function Cr(e){var t,n=((t={})[vr(e)]=!0,t);return e.bsSize&&(n[vr(e,gr[e.bsSize]||e.bsSize)]=!0),e.bsStyle&&(n[vr(e,e.bsStyle)]=!0),n}function xr(e){return{bsClass:e.bsClass,bsSize:e.bsSize,bsStyle:e.bsStyle,bsRole:e.bsRole}}function Sr(e){return"bsClass"===e||"bsSize"===e||"bsStyle"===e||"bsRole"===e}function _r(e){var t={};return hr()(e).forEach((function(e){var n=e[0],o=e[1];Sr(n)||(t[n]=o)})),[xr(e),t]}var Tr={id:cr()(qo().oneOfType([qo().string,qo().number])),placement:qo().oneOf(["top","right","bottom","left"]),positionTop:qo().oneOfType([qo().number,qo().string]),positionLeft:qo().oneOfType([qo().number,qo().string]),arrowOffsetTop:qo().oneOfType([qo().number,qo().string]),arrowOffsetLeft:qo().oneOfType([qo().number,qo().string]),title:qo().node},Rr=function(e){function t(){return e.apply(this,arguments)||this}return Wo(t,e),t.prototype.render=function(){var e,t=this.props,n=t.placement,o=t.positionTop,r=t.positionLeft,s=t.arrowOffsetTop,l=t.arrowOffsetLeft,c=t.title,d=t.className,h=t.style,u=t.children,p=_r(Lo(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","title","className","style","children"])),f=p[0],m=p[1],g=jo({},Cr(f),((e={})[n]=!0,e)),b=jo({display:"block",top:o,left:r},h),v={top:s,left:l};return a().createElement("div",jo({},m,{role:"tooltip",className:i()(d,g),style:b}),a().createElement("div",{className:"arrow",style:v}),c&&a().createElement("h3",{className:vr(f,"title")},c),a().createElement("div",{className:vr(f,"content")},u))},t}(a().Component);Rr.propTypes=Tr,Rr.defaultProps={placement:"right"};const kr=yr("popover",Rr);function Er(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Or=n(8149),Ir=n.n(Or),Mr=n(1629),Dr=n.n(Mr);n(670);const $r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];e.apply(this,o),t.apply(this,o)}}),null)};function Ar(e,t){return Ir()(t)?t.indexOf(e)>=0:e===t}var Nr=qo().oneOf(["click","hover","focus"]),Pr=jo({},ar.propTypes,{trigger:qo().oneOfType([Nr,qo().arrayOf(Nr)]),delay:qo().number,delayShow:qo().number,delayHide:qo().number,defaultOverlayShown:qo().bool,overlay:qo().node.isRequired,onBlur:qo().func,onClick:qo().func,onFocus:qo().func,onMouseOut:qo().func,onMouseOver:qo().func,target:qo().oneOf([null]),onHide:qo().oneOf([null]),show:qo().oneOf([null])}),zr=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).handleToggle=o.handleToggle.bind(Er(Er(o))),o.handleDelayedShow=o.handleDelayedShow.bind(Er(Er(o))),o.handleDelayedHide=o.handleDelayedHide.bind(Er(Er(o))),o.handleHide=o.handleHide.bind(Er(Er(o))),o.handleMouseOver=function(e){return o.handleMouseOverOut(o.handleDelayedShow,e,"fromElement")},o.handleMouseOut=function(e){return o.handleMouseOverOut(o.handleDelayedHide,e,"toElement")},o._mountNode=null,o.state={show:t.defaultOverlayShown},o}Wo(t,e);var n=t.prototype;return n.componentDidMount=function(){this._mountNode=document.createElement("div"),this.renderOverlay()},n.componentDidUpdate=function(){this.renderOverlay()},n.componentWillUnmount=function(){$t().unmountComponentAtNode(this._mountNode),this._mountNode=null,clearTimeout(this._hoverShowDelay),clearTimeout(this._hoverHideDelay)},n.handleDelayedHide=function(){var e=this;if(null!=this._hoverShowDelay)return clearTimeout(this._hoverShowDelay),void(this._hoverShowDelay=null);if(this.state.show&&null==this._hoverHideDelay){var t=null!=this.props.delayHide?this.props.delayHide:this.props.delay;t?this._hoverHideDelay=setTimeout((function(){e._hoverHideDelay=null,e.hide()}),t):this.hide()}},n.handleDelayedShow=function(){var e=this;if(null!=this._hoverHideDelay)return clearTimeout(this._hoverHideDelay),void(this._hoverHideDelay=null);if(!this.state.show&&null==this._hoverShowDelay){var t=null!=this.props.delayShow?this.props.delayShow:this.props.delay;t?this._hoverShowDelay=setTimeout((function(){e._hoverShowDelay=null,e.show()}),t):this.show()}},n.handleHide=function(){this.hide()},n.handleMouseOverOut=function(e,t,n){var o=t.currentTarget,r=t.relatedTarget||t.nativeEvent[n];r&&r===o||Dr()(o,r)||e(t)},n.handleToggle=function(){this.state.show?this.hide():this.show()},n.hide=function(){this.setState({show:!1})},n.makeOverlay=function(e,t){return a().createElement(ar,jo({},t,{show:this.state.show,onHide:this.handleHide,target:this}),e)},n.show=function(){this.setState({show:!0})},n.renderOverlay=function(){$t().unstable_renderSubtreeIntoContainer(this,this._overlay,this._mountNode)},n.render=function(){var e=this.props,t=e.trigger,n=e.overlay,o=e.children,r=e.onBlur,i=e.onClick,l=e.onFocus,c=e.onMouseOut,d=e.onMouseOver,h=Lo(e,["trigger","overlay","children","onBlur","onClick","onFocus","onMouseOut","onMouseOver"]);delete h.delay,delete h.delayShow,delete h.delayHide,delete h.defaultOverlayShown;var u=a().Children.only(o),p=u.props,f={};return this.state.show&&(f["aria-describedby"]=n.props.id),f.onClick=$r(p.onClick,i),Ar("click",t)&&(f.onClick=$r(f.onClick,this.handleToggle)),Ar("hover",t)&&(f.onMouseOver=$r(p.onMouseOver,d,this.handleMouseOver),f.onMouseOut=$r(p.onMouseOut,c,this.handleMouseOut)),Ar("focus",t)&&(f.onFocus=$r(p.onFocus,l,this.handleDelayedShow),f.onBlur=$r(p.onBlur,r,this.handleDelayedHide)),this._overlay=this.makeOverlay(n,h),(0,s.cloneElement)(u,f)},t}(a().Component);zr.propTypes=Pr,zr.defaultProps={defaultOverlayShown:!1,trigger:["hover","focus"]};const Hr=zr;var Lr={id:cr()(qo().oneOfType([qo().string,qo().number])),placement:qo().oneOf(["top","right","bottom","left"]),positionTop:qo().oneOfType([qo().number,qo().string]),positionLeft:qo().oneOfType([qo().number,qo().string]),arrowOffsetTop:qo().oneOfType([qo().number,qo().string]),arrowOffsetLeft:qo().oneOfType([qo().number,qo().string])},Fr=function(e){function t(){return e.apply(this,arguments)||this}return Wo(t,e),t.prototype.render=function(){var e,t=this.props,n=t.placement,o=t.positionTop,r=t.positionLeft,s=t.arrowOffsetTop,l=t.arrowOffsetLeft,c=t.className,d=t.style,h=t.children,u=_r(Lo(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","className","style","children"])),p=u[0],f=u[1],m=jo({},Cr(p),((e={})[n]=!0,e)),g=jo({top:o,left:r},d),b={top:s,left:l};return a().createElement("div",jo({},f,{role:"tooltip",className:i()(c,m),style:g}),a().createElement("div",{className:vr(p,"arrow"),style:b}),a().createElement("div",{className:vr(p,"inner")},h))},t}(a().Component);Fr.propTypes=Lr,Fr.defaultProps={placement:"right"};const Gr=yr("tooltip",Fr),Br={},Wr=document.createElement("canvas");Wr.id="gk-graph-avatar-canvas";class Ur extends a().Component{image;constructor(e){super(e),this.image=new Image,this.image.crossOrigin="anonymous",this.image.onload=()=>this.refreshImage(),this.state={dataURL:void 0}}componentDidMount(){const{url:e}=this.props;e&&this.startImgLoading(e)}componentDidUpdate(e){const{url:t}=this.props;t&&e.url!==t&&this.startImgLoading(t)}componentWillUnmount(){this.image=void 0}refreshImage(){if(!this.image)return;let e;if(this.image.complete){const t=this.image.height,n=this.image.width,o=Wr.getContext("2d");o.canvas.width=n,o.canvas.height=t,o.drawImage(this.image,0,0,n,t),e=Wr.toDataURL(),Br[this.image.src]=e}this.setState({dataURL:e})}startImgLoading(e){if(!this.image)return;const t=Br[e];t?this.setState({dataURL:t}):this.image.src=e}render(){const{avatarClassName:e,avatarStyle:t,children:n,className:o,context:r,style:s,height:l,hint:c,size:d,width:h}=this.props,{dataURL:u}=this.state,p=!u,f=p?s:{...s,...t,background:`url(${u}) 0% 0% / ${d}px no-repeat`,height:l||d,width:h||d},m=i()(o,p?"":e,!p&&{avatar:!0}),g=p?a().createElement(a().Fragment,null,n):void 0;return a().createElement("div",{className:m,"data-test-class":"avatar","data-vscode-context":B(r),style:f,title:c},g)}}var jr=Ur;const Vr=(e,t,n)=>a().createElement("span",{className:"ref-avatar"},a().createElement(jr,{avatarClassName:"mr1",context:n,size:14,url:e},t));function Zr({icon:e,tooltipClassName:t="",tooltipId:n,tooltipText:o}){return o&&n?a().createElement(Hr,{delayShow:400,overlay:a().createElement(Gr,{className:i()("gk-graph","bs-tooltip",t),id:n},o),placement:"top",trigger:["hover","focus"]},e):a().createElement(a().Fragment,null," ",e," ")}function qr({id:e,toolTipText:t,getExternalIcon:n,issueTrackerType:o}){return a().createElement(Zr,{icon:n(`issue-${o}`),tooltipClassName:"wide pull-left",tooltipId:`issue-tooltip-${e}`,tooltipText:t?t.trim():""})}function Kr({hostingServiceType:e,icon:t,id:n,toolTipText:o}){return a().createElement(Zr,{icon:t,tooltipClassName:"wide pull-left",tooltipId:`pr-tooltip-${e}-${n}`,tooltipText:o?o.trim():""})}function Yr({icon:e,type:t,upstream:n,tooltipText:o}){return a().createElement(Zr,{icon:e,tooltipClassName:"wide pull-left",tooltipId:`upstream-indicator-tooltip-${t}-${n}`,tooltipText:o})}function Xr({avatarUrl:e,context:t,icon:n,tooltipText:o}){return a().createElement(Zr,{icon:Vr(e,n,t),tooltipId:`remote-icon-${o||"tooltipText"}`,tooltipText:o})}var Qr=n(7334),Jr=n(9915),ei=function({name:e}){return a().createElement("span",{className:"ref-name truncate",style:{height:m.pj}},e)};function ti(e,t,n,o=0){const{refType:r,name:s}=t;let l,c,d="";switch(r){case L.V.REMOTE:{const e=t;c=function(e){return e.hostingServiceType?`${L.V.REMOTE}-${e.hostingServiceType}`:L.V.REMOTE}(e),l=e.avatarUrl;const o=`${s} (${n("Ref-Remote")})`;d=e.owner?`${e.owner} -> ${o}`:o;break}case L.V.TAG:c=L.V.TAG,d=`${s} (${n("Ref-Tag")})`;break;case L.V.HEAD:default:c=L.V.HEAD,d=`${s} (${n("Ref-Local")})`}const h=t.context||void 0,u=a().createElement("span",{className:i()("mr1"),"data-vscode-context":B(h)},e(c));return a().createElement(Xr,{avatarUrl:l||"",context:h,icon:u,key:`ref-icon-${o}-${r}-${s}`,tooltipText:d})}class ni extends a().PureComponent{getContextForRefGroupIfExists(e,t,n){let o,r=!1,i=!1,s=!1;for(const a of e){if(a.refType===L.V.HEAD)return n?a.contextGroup||t:a.context;a.refType===L.V.REMOTE&&("origin"===a.owner?(r=!0,o=n?a.contextGroup||t:a.context):r||"upstream"!==a.owner?r||i||(s=!0,o=n?a.contextGroup||t:a.context):(i=!0,o=n?a.contextGroup||t:a.context)),r||i||s||(o=n?a.contextGroup||t:a.context)}return o}getDecoratedRefIcon(e,t,n,o,r){return a().createElement("div",{className:r,"data-vscode-context":B(o),key:e,onClick:e=>this.onClickMetadata(e,n),onDoubleClick:e=>this.onDoubleClickMetadata(e,n)},t)}getPullRequestIconsAndTooltipsForRef(e,t,n){const{getExternalIcon:o,onMissingRefMetadata:r,translate:s}=this.props;let l;if(l=t.refType===L.V.HEAD?t.upstream?e?.[t.upstream.id]?.[F.mQ]:null:W(t,e,r,F.mQ),!l||0===l.length)return null;const c=l,d=[];for(const e of c){const{context:r,hostingServiceType:l,id:c,title:h}=e;if(n.has(c))continue;n.add(c);const u={refId:t.id,type:F.mQ,data:e},p=`pr-icon-${t.refType}-${t.name}-${c}`,f=this.getDecoratedRefIcon(p,o("pull-request"),u,r,i()("mr1","ref-pull-request"));d.push(a().createElement(Kr,{hostingServiceType:l,icon:f,id:c,key:p,toolTipText:h&&""!==h.trim()?s("PullRequestIcon-Tooltip",c,h,(0,Qr.y)(l)):""}))}return d}getUpstreamIndicatorIconsAndTooltipsForRef(e,t){const{getExternalIcon:n,onMissingRefMetadata:o,translate:r}=this.props,i=W(t,e,o,F.uq);if(!i||0===i.ahead&&0===i.behind)return null;const s=i,l={refId:t.id,type:F.uq,data:s},c=s.ahead>0,d=s.behind>0,h=s.context;if(c||d){const e=c?`${s.ahead>99?"99+":s.ahead}`:"",o=d?`${s.behind>99?"99+":s.behind}`:"",i=`${s.owner}/${s.name}`;let u,p;d&&c?(u=r("UpstreamIndicatorIcon-BehindAndAheadTooltip",o,e,i),p="ahead-behind"):d?(u=r("UpstreamIndicatorIcon-BehindTooltip",o,i),p="behind"):c&&(u=r("UpstreamIndicatorIcon-AheadTooltip",e,i),p="ahead");const f=a().createElement(a().Fragment,null,d?a().createElement(a().Fragment,null,a().createElement("span",{className:"ref-upstream-behind"},o),n("upstream-behind")):null,c?a().createElement(a().Fragment,null,a().createElement("span",{className:"ref-upstream-ahead"},e),n("upstream-ahead")):null);return a().createElement(Yr,{icon:this.getDecoratedRefIcon(`ref-upstream-${t.id}`,f,l,h,"ref-upstream"),tooltipText:u,type:p,upstream:i})}return null}getIssueIconsAndTooltipsForRef(e,t,n){const{getExternalIcon:o,onMissingRefMetadata:r,translate:s}=this.props,l=W(t,e,r,F.$M);if(!l||0===l.length)return null;const c=l,d=[];for(const e of c){if(n.has(e.id))continue;const r={refId:t.id,type:F.$M,data:e};n.add(e.id);const l=a().createElement(qr,{getExternalIcon:o,id:e.id,issueTrackerType:e.issueTrackerType,key:`issue-icon-${e.id}`,toolTipText:e.title&&""!==e.title.trim()?s("IssueIcon-Tooltip",e.displayId,e.title):""}),c=t.context||void 0;d.push(this.getDecoratedRefIcon(`ref-issue-${e.id}`,l,r,c,i()("mr1","ref-issue")))}return d}onContextMenu=e=>{const{onContextMenu:t,refGroup:n,sha:o}=this.props;t(e,n,o)};onClick=e=>{const{onClick:t,refGroup:n,sha:o}=this.props;t(e,n,o)};onClickMetadata=(e,t)=>{e.stopPropagation();const{onClick:n,refGroup:o,sha:r}=this.props;n(e,o,r,t)};onDoubleClick=e=>{const{onDoubleClick:t,refGroup:n,sha:o}=this.props;t(e,n,o)};onDoubleClickMetadata=(e,t)=>{e.stopPropagation();const{onDoubleClick:n,refGroup:o,sha:r}=this.props;n(e,o,r,t)};render(){const{enableShowHideRefsOptions:e,hasActive:t,hasRefs:n,isGhostRef:o,getExternalIcon:r,groupIsHovered:s,isInUnsupportedRebase:l,onRefBeginDrag:c,onRefDragEnter:d,onRefDragLeave:h,onRefDrop:u,onRefCanDrag:p,onRefCanDrop:f,onRefEndDrag:g,isRefGroupIncluded:b,refGroup:v,refGroupContext:y,refMetadata:w,onHovered:C,onHideRefClick:x,sha:S,enabledRefMetadataTypes:_,translate:T,type:R}=this.props,k=function(e){return Boolean(ge(e))}(v),E=t&&(!s||k),O=i()("ref-node-wrapper","flex"),I={minWidth:0,marginLeft:3,height:m.cZ},M=i()("ref-node","flex","items-center","p1",{"has-active":t,"dim-ref":!n&&s,"is-active":E}),D=v.length?v[0].fullName||v[0].name:"",$=a().createElement(ei,{name:D}),A=[],N=[],P=[];let z=null;const H=new Set,G=new Set;v.forEach(((e,t)=>{if(A.push(ti(r,e,T,t)),_.includes(F.$M)&&(e.refType===L.V.HEAD||e.refType===L.V.REMOTE)){const t=this.getIssueIconsAndTooltipsForRef(w,e,G);t&&P.push(...t)}if(_.includes(F.mQ)&&e.refType===L.V.REMOTE){const t=this.getPullRequestIconsAndTooltipsForRef(w,e,H);t&&N.push(...t)}_.includes(F.uq)&&e.refType===L.V.HEAD&&(z=this.getUpstreamIndicatorIconsAndTooltipsForRef(w,e))}));const W=[...A,...N,...P],U=E?a().createElement(Zr,{icon:a().createElement("span",{className:i()("mr1")},r("check")),tooltipId:"ref-icon-current",tooltipText:T("Ref-Current")}):null,j=this.getContextForRefGroupIfExists(v,y),V=this.getContextForRefGroupIfExists(v,y,!0),Z=e&&!k&&s&&!b?a().createElement(Zr,{icon:a().createElement("span",{className:i()("mr1","button"),onClick:e=>x(e,v,S)},r("hide")),tooltipId:`ref-node-toggle-visibility-btn-${D}`,tooltipText:T("Hide")}):null,q={commitType:R,isGhostRef:o,isInUnsupportedRebase:l,refGroup:v,sha:S};return a().createElement(Jr.Z,{canDrag:e=>p(e),canDrop:(e,t,n)=>f(e,t,n),className:O,"data-vscode-context":B(V),dndData:q,dndId:`DndRefNode_${v[0].id}`,onBeginDrag:(e,t)=>c(e,t),onDragEnter:(e,t,n)=>d(e,t,n),onDragLeave:(e,t,n)=>h(e,t,n),onDrop:(e,t,n)=>u(e,t,n),onEndDrag:(e,t,n)=>g(e,t,n),style:I},a().createElement("span",{className:M,"data-test-class":"ref-node-span","data-vscode-context":B(j),onClick:this.onClick,onContextMenu:l?void 0:this.onContextMenu,onDoubleClick:l?void 0:this.onDoubleClick,onMouseDown:this.onClick,onMouseEnter:e=>C(e,v,S),style:{minWidth:"100%"}},U,a().createElement("span",{className:"flex items-center"},W),$,z,a().createElement("span",{className:"flex ml-auto"},Z)))}}class oi extends a().Component{constructor(e){super(e),this.state={showPopoverMenu:!1,refPopoverMenuTarget:void 0}}onHiddenRefsClick=e=>{const{showPopoverMenu:t}=this.state;this.setState({showPopoverMenu:!t,refPopoverMenuTarget:t?e.target:void 0})};onShowRefNodes=(e,t,n)=>{this.props.onToggleRefNodesShown(e,t,n),0===Object.keys(this.props.excludeRefsById).length&&this.onHiddenRefsClick(e)};compareGraphRefOpts(e,t){return e.name<t.name?-1:e.name>t.name?1:e.name===t.name&&e.type===L.V.REMOTE?-1:0}render(){const{columnSetting:e,enableResizer:t,enableShowHideRefsOptions:n,getExternalIcon:o,graphWidth:r,graphZones:s,graphZoneType:l,excludeRefsById:c,includeOnlyRefsById:d,isDraggable:h,onFilterColumnClick:u,onHover:p,onResize:f,onResizeEnd:g,onResizeFromPropChange:b,onResizeStart:v,onUnhover:y,rowsStatsLoading:w,showRemoteNamesOnRefs:C,translate:x}=this.props,{showPopoverMenu:S,refPopoverMenuTarget:_}=this.state,T=re(l,s);if(!T)return null;const R=Y(l,s),k=T.currentWidth-m.b4;let E=null,O=null;if(l===m.jZ){const e=Object.entries(c),t=Object.values(d),r=t.length>0,s=r&&t.some((e=>e.type===L.V.TAG)),l=e.filter((e=>e[1].type===L.V.TAG&&(!r||!s)||!d[e[0]]));l.length>0&&(O=l.sort(((e,t)=>this.compareGraphRefOpts(e[1],t[1]))).map(((e,t)=>{const n=e[0],r=e[1];c[n].id=n;const i={name:r.name,refType:r.type,owner:r.owner,avatarUrl:r.avatarUrl},s=!C&&"*"!==i.name||i.refType!==L.V.REMOTE?i.name:`${i.owner}/${i.name}`;return a().createElement("li",{id:n,key:n,onClick:e=>this.onShowRefNodes(e,[c[n]],!0)},ti(o,i,x,t),a().createElement("span",{className:"text-ellipsis"},s))})),E=n?a().createElement("div",{className:i()("right","text-normal","button",S?"active":null),style:{height:0}},a().createElement(Zr,{icon:a().createElement("span",{onClick:this.onHiddenRefsClick},o("hide")),tooltipId:"header-ref-node-hidden-refs-btn",tooltipText:x("GraphHeader-HiddenRefs-btn")})):null)}const I=`${l}-header`,M=T.currentWidth<=T.showIconWidth,D=!M&&e?.isFilterable?a().createElement("div",{className:i()("columns-btn columns-filter","right","fs-1",{filtering:e?.isFilterActive||!1})},a().createElement(Zr,{icon:a().createElement("span",{className:"columns-filter-icon text-disabled hover-icon",id:`${l}-header-filter`,onClick:e=>u(e,l),style:{height:m.ze,marginBottom:m.wi}},o("filter")),tooltipId:"header-columns-filter",tooltipText:x("GraphHeader-Filter")})):null,$=M?a().createElement("div",{className:"columns-btn flex justify-start ml1",style:{width:T.currentWidth},title:x(T.headerLabelUntranslated)},o(function(e){switch(e){case m.Wm:return"graph";case m.jZ:return"branch";case m.KE:return"message";case m.GF:return"author";case m.PL:return"datetime";case m.av:return"commit";case m.WD:return"changes";default:return""}}(l))):a().createElement("div",{className:"text-disabled text-ellipsis",style:{height:m.ze,overflow:"hidden",width:R&&!D?`calc(${k}px - var(--fs-2))`:k}},a().createElement("span",{className:"fs-1 ml1 font-monospace"},x(T.headerLabelUntranslated)),D),A=a().createElement(a().Fragment,null,l===m.WD&&w&&a().createElement("span",{className:"spinner"},o("loading")),E,a().createElement(ar,{container:this,onHide:S?this.onHiddenRefsClick:void 0,placement:S?"bottom":void 0,rootClose:S,show:S,target:_},a().createElement(kr,{id:"opts-popover",style:{display:S?"block":"none"}},a().createElement("ul",null,O)))),N=a().createElement("div",{onMouseEnter:p,onMouseLeave:y},A,$),P=i()("panel-bg0","graph-header",{"is-draggable":h,"is-last-header":R});return R?a().createElement("div",{className:P,id:I,key:I,style:{minWidth:k,transform:"translate3d(0, 0, 0)",zIndex:2}},N):a().createElement("div",{className:P,id:I,key:I,style:{display:"flex",minWidth:T.currentWidth,transform:"translate3d(0, 0, 0)",width:T.currentWidth,zIndex:2}},a().createElement(So,{className:P,enable:t,handleStyles:{right:{right:0}},height:m.ze,onResize:f?e=>f(T,e):void 0,onResizeEnd:g?e=>g(T,e):void 0,onResizeFromPropChange:b?e=>b(T,e):void 0,onResizeStart:v?e=>v(T,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z2 border-right",style:{display:"flex"},translate:x,width:T.currentWidth,widthConstraints:se(l,s,r)},N))}}const ri=oi;class ii extends a().PureComponent{canDrag=!1;isDraggable=e=>this.canDrag&&e.props.isDraggable;isDroppable=(e,t)=>e.props.graphZoneType!==t?.props?.graphZoneType&&(!t||t.props.isDroppable);onDrop=(e,t)=>{this.props.onColumnReOrdered&&this.props.onColumnReOrdered(e.props.graphZoneType,t?t.props.graphZoneType:null)};onZoneHover=()=>{this.canDrag=!0};onZoneUnHover=()=>{this.canDrag=!1};render(){const{columnsSettings:e,dragAppendToContainer:t,enableResizer:n,enableShowHideRefsOptions:o,getExternalIcon:r,excludeRefsById:i,headerContext:s,includeOnlyRefsById:l,onFilterColumnClick:c,onPopupGraphHeaderContextMenu:d,onGraphZoneResize:h,onGraphZoneResizeEnd:u,onGraphZoneResizeFromPropChange:p,onSettingsClick:f,onToggleRefNodesShown:g,graphZones:b,repoPath:v,rowsStatsLoading:y,showRemoteNamesOnRefs:w,translate:C,width:x,height:S,settingsContext:_}=this.props,T=a().createElement("div",{className:"panel-bg0",style:{height:m.ze,marginBottom:m.wi,marginLeft:-m.mu,minWidth:m.mu+m.b4}}),R=a().createElement("div",{className:"columns-settings","data-vscode-context":B(_)},a().createElement(Zr,{icon:a().createElement("span",{className:"columns-settings-icon text-disabled hover-icon",onClick:e=>f(e,x)},r("settings")),tooltipId:"header-columns-settings",tooltipText:C("GraphHeader-EditColumns")}));return a().createElement("div",{className:"graph-header flex","data-vscode-context":B(s),onContextMenu:d?e=>d(e,x):void 0,style:{height:m.ze,marginBottom:m.wi}},T,R,a().createElement(zo,{className:"flex",direction:"horizontal",isDraggable:this.isDraggable,isDroppable:this.isDroppable,mirrorContainer:t,onDrop:this.onDrop},b.map((t=>a().createElement(ri,{columnSetting:e[t.type],enableResizer:n,enableShowHideRefsOptions:o,excludeRefsById:i,getExternalIcon:r,graphHeight:S,graphWidth:x,graphZones:b,graphZoneType:t.type,id:`${t.type}Header`,includeOnlyRefsById:l,isDraggable:t.isCustomizable,isDroppable:t.isCustomizable,key:`${t.type}Header`,onFilterColumnClick:c,onHover:this.onZoneHover,onResize:h,onResizeEnd:u,onResizeFromPropChange:p,onToggleRefNodesShown:g,onUnhover:this.onZoneUnHover,repoPath:v,rowsStatsLoading:y,showRemoteNamesOnRefs:w,translate:C})))))}}var si=ii;function ai(e){const{constraints:{max:t,min:n},stats:{files:o,additions:r,deletions:s},getExternalIcon:l,isLastColumn:c,isRowSelected:d,verticalScrollWidth:h,zoneWidth:u}=e,p=r+s,f=Math.max(n,Math.min(t,p));let g=c?h+m.SZ:m.SZ;p<=f&&(g+=m.SZ);const b=Math.max(m.QW,f/t*(u-52-g)),v=r/p*b,y=s/p*b;return a().createElement("div",{className:i()("changes-zone",d?"selected":null)},a().createElement("span",{className:"changes-files",style:{width:52}},a().createElement("span",{className:"mr1"},l("files")),a().createElement("span",{className:"mr1"},o>999?"999+":o)),a().createElement("span",{className:"changes-bar",style:{width:b}},r?a().createElement("div",{className:"changes-sub-bar added",style:{width:v}}):null,s?a().createElement("div",{className:"changes-sub-bar deleted",style:{width:y}}):null))}const li=i()("absolute","top-0","right-0","bottom-0","left-0","time-line"),ci=i()(li,"z2");var di=function({z2:e}){return a().createElement("div",{className:e?ci:li,style:{height:2}})};const hi=a().createElement("div",{className:"color-strip height-100",style:{width:2}}),ui={},pi={};class fi extends a().PureComponent{render(){const{clearCurrentlyHoveredGraphCommit:e,children:t,column:n,context:o,currentlyHoveredCommitSha:r,dimRowsOfSelectedCommit:s,getExternalIcon:l,graphZoneType:c,hasAvatars:d,highlightRowsOnRefHover:h,isDimmedMergeCommitRow:u,isHighlighted:p,isHovering:f,isLastColumn:g,isInUnsupportedRebase:b,isMissingHoveredRefGroup:v,isSelected:y,numGraphColumns:w,onContextMenu:C,onClickCommit:x,onDoubleClickCommit:S,rowContext:_,sha:T,showColorStrip:R,showConflictIcon:k,showTimeline:E,setAsCurrentlyHoveredGraphCommit:O,style:I,title:M,type:D,verticalScrollWidth:$,zoneWidth:A}=this.props,N=function(e,t){const n=e+t.toString();let o=ui[n];return o||(o=i()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative",e,{"is-hovering":t}),ui[n]=o,o)}(D,f),P=function(e,t,n,o,r,s=!1,a=!1,l=!1,c=!1){const d=`${e}${t}${o}${n}${s}${a}${l}${c}${r}`;let h=pi[d];return h||(h=i()("column-"+(t%r+1),"graph-row","height-100-percent","flex",e,{"is-selected":o},{"is-highlighted":n},{"dimmed-row":c&&!n||s&&(a||l)}),pi[d]=h,h)}(D,n,p,y,w,v,h,s,u),z=E?a().createElement(di,null):null;return a().createElement("div",{className:N,"data-vscode-context":B(_),onContextMenu:b?void 0:e=>C(e,c,T),onDoubleClick:e=>S(e,c,T),onMouseDown:e=>x(e,c,T),onMouseEnter:e=>O(e,c,T,r),onMouseLeave:t=>e(t,c,T,r),style:I},z,a().createElement("div",{className:P,"data-vscode-context":B(o)},R?hi:null,k?a().createElement("span",{className:i()("ml2")},l("warning")):null,a().createElement("span",{className:i()("graph-zone","width-100","flex-1"),style:{lineHeight:`${m.cZ}px`,...g&&{width:A-$},...d&&{marginLeft:5}},title:M},t)))}}var mi=(e,t)=>{const{processedRows:n,rowStatsConstraints:o,getExternalIcon:r,highlightRowsOnRefHover:i,isInUnsupportedRebase:s,numGraphColumns:l,clearCurrentlyHoveredGraphCommit:c,currentlyHoveredCommitSha:d,dimMergeCommits:h,dimRowsOfSelectedCommit:u,onCommitContextMenu:p,onClickCommit:g,onDoubleClickCommit:b,rowsStats:v,setAsCurrentlyHoveredGraphCommit:y}=e,w=new ve(e);return({rowIndex:e,style:C})=>{const x=t(e),S=n[e],{sha:_,type:T,contexts:R}=S,k=R?.stats||void 0,E=R?.row||void 0,O=v?.[_];let I=[O?.files?`${O.files} files changed`:"",O?.additions?`${O.additions} lines added`:"",O?.deletions?`${O.deletions} lines deleted`:""].filter(Boolean).join(", ");I=T!==f.ch?I:"";const M=m.WD,D=w.isColumnFollowingGraphColumn(M),$=w.isLastColumn(M),A=w.getZoneWidth(M),N=w.getVerticalScrollWidth(M);return a().createElement(fi,{clearCurrentlyHoveredGraphCommit:c,column:S.column,context:k,currentlyHoveredCommitSha:d,dimRowsOfSelectedCommit:u,getExternalIcon:r,graphZoneType:M,highlightRowsOnRefHover:i,isDimmedMergeCommitRow:T===f.lH&&h,isHighlighted:w.isHighlighted(e),isHovering:w.isHovering(e),isInUnsupportedRebase:s,isLastColumn:$,isMissingHoveredRefGroup:w.isMissingHoveredRefGroup(e),isSelected:w.isSelected(e),key:x,numGraphColumns:l,onClickCommit:g,onContextMenu:p,onDoubleClickCommit:b,rowContext:E,setAsCurrentlyHoveredGraphCommit:y,sha:_,showColorStrip:D,showTimeline:w.hasTimeline(e),style:C,title:I,type:T,verticalScrollWidth:N,zoneWidth:A},O&&T!==f.ch?a().createElement(ai,{constraints:o,getExternalIcon:r,isLastColumn:$,isRowSelected:w.isSelected(e),stats:O,verticalScrollWidth:N,zoneWidth:A}):null)}};function gi(e){const t=(e||"").trim().toUpperCase();if(0===t.length)return"?";const n=t.split(" ");return 1===n.length?n[0][0]:n.length>1?n[0][0]+n[n.length-1][0]:"?"}function bi(e,t){return e&&t?`${e} <${t}>`:e||t||""}class vi extends a().Component{overlayTriggerRef;constructor(e){super(e),this.state={tooltipText:""}}componentDidUpdate(e,t){this.overlayTriggerRef&&this.state.tooltipText!==t.tooltipText&&this.overlayTriggerRef.show()}getDefaultAvatar=(e,t,n)=>{const{authorInitials:o,column:r,context:i,cssVariables:s,style:l,fontSize:c,minWidth:d,size:h,title:u=""}=this.props,f=void 0!==r&&s[x(r)]||m.iq,g=p(f.trim()),b={alignItems:"center",backgroundColor:f,backgroundSize:h,color:g,display:"flex",fontSize:`${c}px`,fontWeight:"bold",height:e,justifyContent:"center",minWidth:d,top:n,width:t,...l};return a().createElement("div",{className:this.getAvatarClassName(),"data-vscode-context":B(i),style:b,title:u},o?o.toUpperCase():"")};ensureTooltipText=()=>{const{tooltip:e}=this.props;this.setState({tooltipText:"function"==typeof e?e():e})};setOverlayTriggerRef=e=>{this.overlayTriggerRef=e};getAvatarClassName(){return i()("avatar","gravatar","rad2",this.props.className)}render(){const{tooltipText:e}=this.state,{avatarUrl:t,context:n,style:o,height:r,minWidth:i,size:s,title:l="",tooltip:c,top:d,useAuthorInitialsForAvatars:h,width:u}=this.props,p=r||s,f=u||s,g=d||m.P3/2-p/2,b={top:g,minWidth:i,...o},v=this.getDefaultAvatar(p,f,g),y=h?v:a().createElement("span",null,a().createElement(jr,{avatarClassName:this.getAvatarClassName(),avatarStyle:b,context:n,height:p,hint:l,size:s,url:t,width:f},this.getDefaultAvatar(p,f,g)));return c?a().createElement(Hr,{delayShow:250,key:e,onEnter:this.ensureTooltipText,overlay:a().createElement(Gr,{className:"gk-graph",id:"graph-gravatar-tooltip"},e),placement:"top",ref:this.setOverlayTriggerRef,trigger:["hover","focus"]},y):y}}var yi=(e,t)=>{const{avatarUrlByEmail:n,clearCurrentlyHoveredGraphCommit:o,cssVariables:r,currentlyHoveredCommitSha:s,dimMergeCommits:l,dimRowsOfSelectedCommit:c,getExternalIcon:d,highlightRowsOnRefHover:h,processedRows:u,isInUnsupportedRebase:p,onCommitContextMenu:g,onClickCommit:b,onDoubleClickCommit:y,numGraphColumns:C,setAsCurrentlyHoveredGraphCommit:x,useAuthorInitialsForAvatars:S}=e,_=new ve(e);return({rowIndex:e,style:T})=>{const R=t(e),k=u[e],{author:E,email:O,message:I,sha:M,type:D,contexts:$}=k,A=m.GF,N=_.getActiveGraphZone(A);let P=D!==f.ch?E:void 0;const z=D!==f.ch?bi(E,O):void 0,H=$?.author||void 0,L=$?.row||void 0,F=_.isColumnFollowingGraphColumn(A),G=_.isLastColumn(A),B=_.getZoneWidth(A),W=(B<=N.minimumWidth||N?.mode===m.Um.Rich)&&D!==f.ch;if(W){const e=()=>{const e=E&&""!==E.trim()&&"Unknown"!==E?bi(E,O):O,t=w(v(I||""));let n="";if(0===t.length)n=e;else{t.unshift({email:O,name:E});for(let e=0;e<t.length;e+=1){const o=t[e];n+=bi(o.name,o.email),e<t.length-1&&(n+=", ")}}return n},t=S?void 0:n[O];P=a().createElement(vi,{authorInitials:gi(E),avatarUrl:t,className:i()("node",`${f.o$}`,"z6"),column:k.column,context:$?.avatar||void 0,cssVariables:r,fontSize:10,height:m.LG,size:m.Y8,tooltip:e,useAuthorInitialsForAvatars:S,width:m.LG})}return a().createElement(fi,{clearCurrentlyHoveredGraphCommit:o,column:k.column,context:H,currentlyHoveredCommitSha:s,dimRowsOfSelectedCommit:c,getExternalIcon:d,graphZoneType:A,hasAvatars:W,highlightRowsOnRefHover:h,isDimmedMergeCommitRow:D===f.lH&&l,isHighlighted:_.isHighlighted(e),isHovering:_.isHovering(e),isInUnsupportedRebase:p,isLastColumn:G,isMissingHoveredRefGroup:_.isMissingHoveredRefGroup(e),isSelected:_.isSelected(e),key:R,numGraphColumns:C,onClickCommit:b,onContextMenu:g,onDoubleClickCommit:y,rowContext:L,setAsCurrentlyHoveredGraphCommit:x,sha:M,showColorStrip:F,showTimeline:_.hasTimeline(e),style:T,title:z,type:D,verticalScrollWidth:_.getVerticalScrollWidth(A),zoneWidth:B},P)}},wi=(e,t)=>{const{processedRows:n,getExternalIcon:o,highlightRowsOnRefHover:r,isInUnsupportedRebase:i,numGraphColumns:s,formatCommitDateTime:l,clearCurrentlyHoveredGraphCommit:c,dimMergeCommits:d,dimRowsOfSelectedCommit:h,currentlyHoveredCommitSha:u,onCommitContextMenu:p,onClickCommit:g,onDoubleClickCommit:b,setAsCurrentlyHoveredGraphCommit:v}=e,y=new ve(e);return({rowIndex:e,style:w})=>{const C=t(e),x=n[e],{date:S,sha:_,type:T,contexts:R}=x,k=S&&T!==f.ch?l(S,f.Gu.RowEntry):void 0,E=S&&T!==f.ch?l(S,f.Gu.Tooltip):void 0,O=R?.date||void 0,I=R?.row||void 0,M=m.PL,D=y.isColumnFollowingGraphColumn(M),$=y.isLastColumn(M),A=y.getZoneWidth(M),N=y.getVerticalScrollWidth(M);return a().createElement(fi,{clearCurrentlyHoveredGraphCommit:c,column:x.column,context:O,currentlyHoveredCommitSha:u,dimRowsOfSelectedCommit:h,getExternalIcon:o,graphZoneType:M,highlightRowsOnRefHover:r,isDimmedMergeCommitRow:T===f.lH&&d,isHighlighted:y.isHighlighted(e),isHovering:y.isHovering(e),isInUnsupportedRebase:i,isLastColumn:$,isMissingHoveredRefGroup:y.isMissingHoveredRefGroup(e),isSelected:y.isSelected(e),key:C,numGraphColumns:s,onClickCommit:g,onContextMenu:p,onDoubleClickCommit:b,rowContext:I,setAsCurrentlyHoveredGraphCommit:v,sha:_,showColorStrip:D,showTimeline:!1,style:w,title:E,type:T,verticalScrollWidth:N,zoneWidth:A},k)}},Ci={glyph:qo().string.isRequired},xi=function(e){function t(){return e.apply(this,arguments)||this}return Wo(t,e),t.prototype.render=function(){var e,t=this.props,n=t.glyph,o=t.className,r=_r(Lo(t,["glyph","className"])),s=r[0],l=r[1],c=jo({},Cr(s),((e={})[vr(s,n)]=!0,e));return a().createElement("span",jo({},l,{className:i()(o,c)}))},t}(a().Component);xi.propTypes=Ci;const Si=yr("glyphicon",xi);var _i={$bs_formGroup:qo().object},Ti=function(e){function t(){return e.apply(this,arguments)||this}Wo(t,e);var n=t.prototype;return n.getGlyph=function(e){switch(e){case"success":return"ok";case"warning":return"warning-sign";case"error":return"remove";default:return null}},n.renderDefaultFeedback=function(e,t,n,o){var r=this.getGlyph(e&&e.validationState);return r?a().createElement(Si,jo({},o,{glyph:r,className:i()(t,n)})):null},n.render=function(){var e=this.props,t=e.className,n=e.children,o=_r(Lo(e,["className","children"])),r=o[0],s=o[1],l=Cr(r);if(!n)return this.renderDefaultFeedback(this.context.$bs_formGroup,t,l,s);var c=a().Children.only(n);return a().cloneElement(c,jo({},s,{className:i()(c.props.className,t,l)}))},t}(a().Component);Ti.defaultProps={bsRole:"feedback"},Ti.contextTypes=_i;const Ri=yr("form-control-feedback",Ti);var ki={componentClass:Qo()},Ei=function(e){function t(){return e.apply(this,arguments)||this}return Wo(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,n=e.className,o=_r(Lo(e,["componentClass","className"])),r=o[0],s=o[1],l=Cr(r);return a().createElement(t,jo({},s,{className:i()(n,l)}))},t}(a().Component);Ei.propTypes=ki,Ei.defaultProps={componentClass:"p"};const Oi=yr("form-control-static",Ei);var Ii={componentClass:Qo(),type:qo().string,id:qo().string,inputRef:qo().func},Mi={$bs_formGroup:qo().object},Di=function(e){function t(){return e.apply(this,arguments)||this}return Wo(t,e),t.prototype.render=function(){var e,t=this.context.$bs_formGroup,n=t&&t.controlId,o=this.props,r=o.componentClass,s=o.type,l=o.id,c=void 0===l?n:l,d=o.inputRef,h=o.className,u=o.bsSize,p=_r(Lo(o,["componentClass","type","id","inputRef","className","bsSize"])),f=p[0],m=p[1];return"file"!==s&&(e=Cr(f)),u&&(e[vr({bsClass:"input"},gr[u]||u)]=!0),a().createElement(r,jo({},m,{type:s,id:c,ref:d,className:i()(h,e)}))},t}(a().Component);Di.propTypes=Ii,Di.defaultProps={componentClass:"input"},Di.contextTypes=Mi,Di.Feedback=Ri,Di.Static=Oi;const $i=yr("form-control",wr([mr,fr],Di)),Ai={ADDED:"added",DELETED:"deleted",MODIFIED:"modified",RENAMED:"renamed"};class Ni extends a().Component{render(){const{fileDiffType:e,getExternalIcon:t,translate:n}=this.props;if(!e)return null;const o=(e=>{switch(e){case Ai.ADDED:return"added";case Ai.MODIFIED:return"modified";case Ai.DELETED:return"deleted";case Ai.RENAMED:return"renamed";default:return null}})(e),r=(e=>{switch(e){case Ai.ADDED:return"color-green";case Ai.MODIFIED:return"color-orange";case Ai.DELETED:return"color-red";case Ai.RENAMED:return"color-blue";default:return null}})(e),s=(e=>{switch(e){case Ai.ADDED:return"CommitDiffSection-FileAdded";case Ai.MODIFIED:return"CommitDiffSection-FileModified";case Ai.DELETED:return"CommitDiffSection-FileDeleted";case Ai.RENAMED:return"CommitDiffSection-FileRenamed";default:return null}})(e),l=i()("fs-1",r,"mr1");return a().createElement("span",{className:l,title:n(s)},o&&t(o))}}var Pi=Ni;const{ADDED:zi,DELETED:Hi,MODIFIED:Li,RENAMED:Fi}=Ai,Gi={[zi]:"CommitDiffSection-NFilesAdded",[Hi]:"CommitDiffSection-NFilesDeleted",[Li]:"CommitDiffSection-NFilesModified",[Fi]:"CommitDiffSection-NFilesRenamed"};var Bi=function({count:e,diffType:t,getExternalIcon:n,fileNodeListStyle:o,translate:r}){const i=o?e:r(Gi[t],e);let s,l;return o&&(s={fontSize:m.wd,marginRight:m.IX},l={fontSize:m.dH,margin:`0px ${m.VB}px 0px 0px`}),a().createElement("span",{className:"tiny-files-readout",style:s},a().createElement(Pi,{fileDiffType:t,getExternalIcon:n,style:l,translate:r}),a().createElement("span",{className:"tiny-files-readout-text"},i))},Wi=function({diffStats:e,fileNodeListStyle:t,getExternalIcon:n,translate:r}){const{types:i}=o;if(!e)return a().createElement("span",null);if(!Object.values(e).some((e=>Boolean(e))))return a().createElement("span",null);const s=e.modified?a().createElement(Bi,{count:e.modified,diffType:i.MODIFIED,fileNodeListStyle:!0,getExternalIcon:n,translate:r}):null,l=e.added?a().createElement(Bi,{count:e.added,diffType:i.ADDED,fileNodeListStyle:!0,getExternalIcon:n,translate:r}):null,c=e.deleted?a().createElement(Bi,{count:e.deleted,diffType:i.DELETED,fileNodeListStyle:!0,getExternalIcon:n,translate:r}):null,d=e.renamed?a().createElement(Bi,{count:e.renamed,diffType:i.RENAMED,fileNodeListStyle:!0,getExternalIcon:n,translate:r}):null,h=t?{marginLeft:m.aV}:null;return a().createElement("span",{className:"summary",style:h},s,l,c,d)};class Ui extends a().Component{textWidthRef=a().createRef();wrapperRef=a().createRef();static defaultProps={style:{},value:""};componentDidMount(){this.wrapperRef?.current&&(this.wrapperRef.current.style.width="0px")}componentDidUpdate(){this.textWidthRef?.current&&this.wrapperRef?.current&&(this.wrapperRef.current.style.width=`${Number(this.textWidthRef.current.offsetWidth)+35}px`)}componentWillUnmount(){this.props.onBlur&&this.props.onBlur()}onWipKeyDown(e){e.stopPropagation()}render(){const{clearCurrentlyHoveredGraphCommit:e,currentlyHoveredCommitSha:t,getExternalIcon:n,graphZoneType:o,isCommitting:r,isHovering:s,isSelected:l,onBlur:c,onClickCommit:d,onContextMenu:h,onFocus:u,onMessageChange:p,setAsCurrentlyHoveredGraphCommit:m,sha:g,style:b,translate:v,value:y,workDirStats:w}=this.props,C=i()("graph-zone-column","pt3","pb3","pointer","height-100-percent","grow-3","graph-row-wrapper",f.ch,{"is-hovering":s}),x=i()("column-1","graph-row","flex",{"is-selected":l}),S=a().createElement(Wi,{diffStats:w,getExternalIcon:n,translate:v}),_=a().createElement("div",{className:"work-dir-input",ref:this.wrapperRef},a().createElement($i,{"data-test-class":"work-dir-input-field",disabled:r,onBlur:e=>c(e),onChange:e=>p(e.target.value),onContextMenu:e=>h(e,o,g),onFocus:e=>u(e),onKeyDown:e=>this.onWipKeyDown(e),placeholder:v("WorkDirMessageInput-WIPPlaceholder"),type:"text",value:y}),a().createElement("div",{className:"text-width","data-test-class":"work-dir-input-message",ref:this.textWidthRef},y));return a().createElement("div",{className:C,onMouseEnter:e=>m(e,o,g,t),onMouseLeave:n=>e(n,o,g,t),style:b},a().createElement("div",{className:x,"data-test-class":"work-dir-message-row-div",onMouseDown:e=>d(e,o,g)},_,S))}}var ji=(e,t)=>{const{dimMergeCommits:n,dimRowsOfSelectedCommit:o,processedRows:r,translate:i,getExternalIcon:s,highlightRowsOnRefHover:l,isInUnsupportedRebase:c,numGraphColumns:d,isCommitting:h,pendingCommitMessageSummary:u,workDirStats:p,onBlurWipNodeInput:g,onFocusWipNodeInput:b,onMessageChange:v,clearCurrentlyHoveredGraphCommit:y,currentlyHoveredCommitSha:w,onCommitContextMenu:C,onClickCommit:x,onDoubleClickCommit:S,setAsCurrentlyHoveredGraphCommit:_,wipMessageEditable:T}=e,R=new ve(e);return({rowIndex:e,style:k})=>{const E=t(e),O=r[e],{sha:I,type:M,contexts:D}=O;let $,A,N;M===f.ch?($=i("Graph-WorkInProgress"),A=$):($=O.message,A=O.summary,N=O.body||void 0);const P=D?.message||void 0,z=D?.row||void 0,H=m.KE,L=R.isColumnFollowingGraphColumn(H),F=R.isLastColumn(H),G=R.getZoneWidth(H),B=R.getVerticalScrollWidth(H),W=M===f.ch&&void 0!==p&&Object.keys(p).length>0,U=W&&!T?a().createElement(Wi,{diffStats:p,getExternalIcon:s,translate:i}):null,j=M!==f.ch||T?a().createElement(a().Fragment,null,a().createElement("span",{className:"message-zone--summary"},A),N?a().createElement("span",{className:"message-zone--body"},N):null):a().createElement("span",{style:{display:"flex",alignItems:"stretch",textOverflow:"ellipsis"}},A,U);return W&&T?a().createElement(Ui,{clearCurrentlyHoveredGraphCommit:y,currentlyHoveredCommitSha:w,getExternalIcon:s,graphZoneType:H,isCommitting:h,isHovering:R.isHovering(e),isSelected:R.isSelected(e),key:E,onBlur:g,onClickCommit:x,onContextMenu:C,onFocus:b,onMessageChange:v,setAsCurrentlyHoveredGraphCommit:_,sha:I,style:k,translate:i,value:u,workDirStats:p}):a().createElement(fi,{clearCurrentlyHoveredGraphCommit:y,column:O.column,context:P,currentlyHoveredCommitSha:w,dimRowsOfSelectedCommit:o,getExternalIcon:s,graphZoneType:H,highlightRowsOnRefHover:l,isDimmedMergeCommitRow:M===f.lH&&n,isHighlighted:R.isHighlighted(e),isHovering:R.isHovering(e),isInUnsupportedRebase:c,isLastColumn:F,isMissingHoveredRefGroup:R.isMissingHoveredRefGroup(e),isSelected:R.isSelected(e),key:E,numGraphColumns:d,onClickCommit:x,onContextMenu:C,onDoubleClickCommit:S,rowContext:z,setAsCurrentlyHoveredGraphCommit:_,sha:I,showColorStrip:L,showConflictIcon:M===f.S7||M===f.br,showTimeline:R.hasTimeline(e),style:k,title:$,type:M,verticalScrollWidth:B,zoneWidth:G},j)}},Vi=(e,t)=>{const{processedRows:n,getExternalIcon:o,highlightRowsOnRefHover:r,isInUnsupportedRebase:i,numGraphColumns:s,clearCurrentlyHoveredGraphCommit:l,currentlyHoveredCommitSha:c,dimMergeCommits:d,dimRowsOfSelectedCommit:h,onCommitContextMenu:u,onClickCommit:p,onDoubleClickCommit:g,setAsCurrentlyHoveredGraphCommit:b,shaLength:v}=e,y=new ve(e);return({rowIndex:e,style:w})=>{const C=t(e),x=n[e],{sha:S,type:_,contexts:T}=x,R=((e,t=m.ai)=>e?e.substring(0,t):"")(S,v),k=T?.sha||void 0,E=T?.row||void 0,O=m.av,I=y.isColumnFollowingGraphColumn(O),M=y.isLastColumn(O),D=y.getZoneWidth(O),$=y.getVerticalScrollWidth(O);return a().createElement(fi,{clearCurrentlyHoveredGraphCommit:l,column:x.column,context:k,currentlyHoveredCommitSha:c,dimRowsOfSelectedCommit:h,getExternalIcon:o,graphZoneType:O,highlightRowsOnRefHover:r,isDimmedMergeCommitRow:_===f.lH&&d,isHighlighted:y.isHighlighted(e),isHovering:y.isHovering(e),isInUnsupportedRebase:i,isLastColumn:M,isMissingHoveredRefGroup:y.isMissingHoveredRefGroup(e),isSelected:y.isSelected(e),key:C,numGraphColumns:s,onClickCommit:p,onContextMenu:u,onDoubleClickCommit:g,rowContext:E,setAsCurrentlyHoveredGraphCommit:b,sha:S,showColorStrip:I,showTimeline:y.hasTimeline(e),style:w,type:_,verticalScrollWidth:$,zoneWidth:D},_!==f.ch?a().createElement("span",{className:"font-monospace pointer",title:R},R):null)}};function Zi({hasRefs:e,isActiveSha:t,left:n,type:o,width:r}){const s=i()("ref-line","z4",{"is-active":t});return e&&function(e){return[f.o$,f.lH,f.S7].includes(e)}(o)?a().createElement("hr",{className:s,style:{left:n,width:r}}):null}var qi=Zi;function Ki({graphZoneModeConstants:{RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:e},hasRefs:t,isActiveSha:n,nodeOffset:o,type:r}){return a().createElement(Zi,{hasRefs:t,isActiveSha:n,left:0,type:r,width:o+(r===f.lH?e:0)})}function Yi({className:e,marginLeft:t}){return a().createElement("div",{className:i()("app-bg0","absolute","left-0","right-0","bottom-0","top-0","pt3","pb3",e),style:{marginLeft:t}},a().createElement("div",{className:"commit-bg-color height-100-percent width-100-percent"}))}const Xi=(e,t,n,o)=>n+t*e+o/2;function Qi({column:e,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:t,COMMIT_NODE_DIAMETER:n,COMMIT_ZONE_GUTTER_WIDTH:o}}){return a().createElement(Yi,{className:"z1",marginLeft:Xi(e,t,o,n)})}function Ji(){return a().createElement(Yi,{marginLeft:0})}const es=(e,t,n,o,r,s)=>{const l={height:s.COMMIT_MERGE_NODE_DIAMETER,left:n+s.COMMIT_MERGE_NODE_LEFT_OFFSET,marginTop:s.COMMIT_MERGE_NODE_TOP_OFFSET,opacity:o,width:s.COMMIT_MERGE_NODE_DIAMETER},c=i()("node",r,"z6"),d=a().createElement(Gr,{className:"gk-graph",id:"graph-merge-node-tooltip"},bi(t,e));return a().createElement(Hr,{delayShow:250,overlay:d,placement:"top",trigger:["hover","focus"]},a().createElement("div",{className:c,"data-test-class":"tree-row-commit-node",style:l}))};class ts extends a().PureComponent{render(){const{authorEmail:e,authorName:t,getExternalIcon:n,graphZoneModeConstants:o,left:r,opacity:s,translate:l,type:c}=this.props;return(t||e)&&c===f.o$?o.IS_COMPACT?es(e,t,r,s,f.lH,o):(({authorEmail:e,authorInitials:t,authorName:n,avatarUrl:o,column:r,context:s,cssVariables:l,graphZoneModeConstants:c,left:d,message:h,opacity:u,type:p,useAuthorInitialsForAvatars:f})=>a().createElement(vi,{authorInitials:t,avatarUrl:o,className:i()("node",`${p}`,"z6"),column:r,context:s,cssVariables:l,fontSize:10,height:c.COMMIT_NODE_DIAMETER,size:c.COMMIT_ZONE_AVATAR_DIAMETER,style:{left:d,opacity:u},tooltip:()=>{const t=n&&""!==n.trim()&&"Unknown"!==n?bi(n,e):e,o=w(v(h||""));let r="";if(0===o.length)r=t;else{o.unshift({email:e,name:n});for(let e=0;e<o.length;e+=1){const t=o[e];r+=bi(t.name,t.email),e<o.length-1&&(r+=", ")}}return r},top:c.COMMIT_NODE_TOP_OFFSET,useAuthorInitialsForAvatars:f,width:c.COMMIT_NODE_DIAMETER}))(this.props):c===f.lH||c===f.S7||c===f.br?es(e,t,r,s,c,o):((e,t,n,o,r,s,l,c=!1,d)=>{const h={height:d.COMMIT_NODE_DIAMETER,left:o,marginTop:d.COMMIT_NODE_TOP_OFFSET,opacity:r,width:d.COMMIT_NODE_DIAMETER};c&&(h.borderWidth=1);const u=i()("gk-graph","node",l,"z6",{compact:c});let p;p=l===f.kP?s("Stash"):l===f.ch?s("Graph-WorkInProgress"):bi(n,t);const m=a().createElement(Gr,{className:"gk-graph",id:"graph-other-node-tooltip"},p);return a().createElement(Hr,{delayShow:250,overlay:m,placement:"top",trigger:["hover","focus"]},a().createElement("div",{className:u,"data-test-class":"tree-row-commit-node",style:h},l!==f.kP||c?null:a().createElement("span",null,e("stash"))))})(n,e,t,r,s,l,c,o.IS_COMPACT,o)}}class ns extends a().Component{render(){const{columnColorByColumn:e,edgeColumnMax:t,edges:n,nodeColumn:o,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:r,COMMIT_ZONE_GUTTER_WIDTH:i,COMMIT_ZONE_LINE_WIDTH:s,IS_COMPACT:l}}=this.props,c=function(e,t,n,o,r,i,s,a){const l=function(e,t,n,o){let r="";for(let i=0;i<=t;i++){const{passThrough:t,starting:s,ending:a}=e[i]??{};r=`${r}_${P(i,n,s?.type,o)}_${P(i,n,a?.type,o)}_${z(i,t?.type,o)}`}return r}(e,t,n,a);let c=$e[l];if(c)return c;let d="";for(let l=0;l<=t;l+=1){const t=e[l];if(!t)continue;const{passThrough:c,starting:h,ending:u}=t;d+=h?De(l,n,h.type,o,r,i,s,a):"",d+=c?Ie(l,c.type,o,r,i,s,a):"",d+=u?Ee(l,n,u.type,o,r,i,s,a):""}return c=`url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><g>${d}</g></svg>')`,$e[l]=c,c}(n,t,o,e,r,i,s,l);return a().createElement("div",{className:"absolute top-0 right-0 bottom-0 left-0 z2",style:{background:c}})}}var os=ns;function rs({boxShadowAlpha:e,boxShadowLeft:t,children:n,className:o="",left:r,width:s}){return a().createElement("div",{className:i()("absolute","top-0","bottom-0","z3",o),style:{boxShadow:`${t}px 5px 10px rgba(0, 0, 0, ${e})`,left:r,width:s}},n)}function is({boxShadowAlpha:e,hasTimeline:t,scrollLeft:n,width:o}){return a().createElement(rs,{boxShadowAlpha:e,boxShadowLeft:5,className:"app-bg0 left-0",left:n,width:o},t?a().createElement(di,{z2:!0}):null)}function ss({boxShadowAlpha:e,commitZoneWidth:t,hasTimeline:n,scrollLeft:o,width:r}){return a().createElement(rs,{boxShadowAlpha:e,boxShadowLeft:-5,left:o+t-r,width:r},n?a().createElement(di,{z2:!0}):null,a().createElement(Ji,null))}class as extends a().PureComponent{render(){const{authorEmail:e,authorName:t,avatarContext:n,avatarUrl:o,clearCurrentlyHoveredGraphCommit:r,column:s,columnColorByColumn:l,commitZoneWidth:c,cssVariables:d,currentlyHoveredCommitSha:h,edgeColumnMax:u,edges:p,hasRefs:f,hasTimeline:g,getExternalIcon:b,graphZoneModeConstants:v,isActiveSha:y,isInUnsupportedRebase:w,isLastColumn:C,isSelected:x,leftGutterBoxShadowAlpha:S,leftGutterWidth:_,message:T,nodeOffset:R,nodeOpacity:k,numGraphColumns:E,onContextMenu:O,onClickCommit:I,onDoubleClickCommit:M,rightGutterBoxShadowAlpha:D,rightGutterWidth:$,rowContext:A,scrollLeft:N,setAsCurrentlyHoveredGraphCommit:P,sha:z,shouldShowRefLine:H,style:L,translate:F,type:G,useAuthorInitialsForAvatars:W,zoneContext:U}=this.props,j=s%E+1,V=i()("relative","commit-zone","height-100-percent","pt3",G,`column-${j}`,{"is-selected":x,"has-active":y}),Z=g?a().createElement(di,{z2:!0}):null,q=a().createElement("div",{className:V,"data-vscode-context":B(U),onContextMenu:w?void 0:e=>O(e,m.Wm,z),onDoubleClick:e=>M(e,m.Wm,z),onMouseDown:e=>I(e,m.Wm,z),onMouseEnter:e=>P(e,m.Wm,z,h),onMouseLeave:e=>r(e,m.Wm,z,h),style:{...L,...C&&{width:"100%"}}},Z,a().createElement(is,{boxShadowAlpha:S,hasTimeline:g,scrollLeft:N,width:_}),H?a().createElement(Ki,{graphZoneModeConstants:v,hasRefs:f,isActiveSha:y,nodeOffset:R,type:G}):null,a().createElement(ts,{authorEmail:e,authorInitials:gi(t),authorName:t,avatarUrl:o,column:s,context:n,cssVariables:d,getExternalIcon:b,graphZoneModeConstants:v,left:R,message:T,opacity:k,translate:F,type:G,useAuthorInitialsForAvatars:W}),a().createElement(Qi,{column:s,graphZoneModeConstants:v}),a().createElement(os,{columnColorByColumn:l,edgeColumnMax:u,edges:p,graphZoneModeConstants:v,nodeColumn:s}),a().createElement(ss,{boxShadowAlpha:D,commitZoneWidth:c,hasTimeline:g,scrollLeft:N,width:$}));return A?a().createElement("div",{"data-vscode-context":B(A)},q):q}}var ls=function(e,t){const{avatarUrlByEmail:n,onMissingAvatar:o,clearCurrentlyHoveredGraphCommit:r,columnColorByColumn:i,cssVariables:s,currentlyHoveredCommitSha:l,processedRows:c,getExternalIcon:d,graphZoneModeConstants:h,isInUnsupportedRebase:u,leftGutterBoxShadowAlpha:p,leftGutterWidth:f,onCommitContextMenu:g,onClickCommit:b,onDoubleClickCommit:v,nodeOffsetByColumn:y,nodeOpacityByColumn:w,numGraphColumns:C,rightGutterBoxShadowAlpha:x,rightGutterWidth:S,setAsCurrentlyHoveredGraphCommit:_,scrollLeft:T,shouldShowRefLine:R,translate:k,useAuthorInitialsForAvatars:E}=e,O=new ve(e);return({rowIndex:e,style:I})=>{const M=t(e),D=c[e],$=m.Wm,A=O.getZoneWidth($),{email:N,author:P,contexts:z,message:H,sha:L,type:F}=D,G=D.column,B=z?.graph||void 0,W=z?.avatar||void 0,U=z?.row||void 0;let j;E||(j=n[N],j||o(N,L));const V=O.isLastColumn($);return a().createElement(as,{authorEmail:N,authorName:P,avatarContext:W,avatarUrl:j,clearCurrentlyHoveredGraphCommit:r,column:G,columnColorByColumn:i,commitZoneWidth:A,cssVariables:s,currentlyHoveredCommitSha:l,edgeColumnMax:D.edgeColumnMaxes,edges:D.edges,getExternalIcon:d,graphZoneModeConstants:h,hasRefs:D.hasRefs||!1,hasTimeline:O.hasTimeline(e),isActiveSha:O.rowContainsCurrentHeadRef(D),isInUnsupportedRebase:u,isLastColumn:V,isSelected:O.isSelected(e),key:M,leftGutterBoxShadowAlpha:p,leftGutterWidth:f,message:H,nodeOffset:y[G],nodeOpacity:w[G],numGraphColumns:C,onClickCommit:b,onContextMenu:g,onDoubleClickCommit:v,rightGutterBoxShadowAlpha:x,rightGutterWidth:S,rowContext:U,scrollLeft:T,setAsCurrentlyHoveredGraphCommit:_,sha:L,shouldShowRefLine:R,style:I,translate:k,type:F,useAuthorInitialsForAvatars:E,zoneContext:B})}};const cs=function(e,t,n){var o=0,r=!1;return a().Children.forEach(e,(function(e){r||a().isValidElement(e)&&t.call(n,e,o++)&&(r=!0)})),r};var ds={controlId:qo().string,validationState:qo().oneOf(["success","warning","error",null])},hs={$bs_formGroup:qo().object.isRequired},us=function(e){function t(){return e.apply(this,arguments)||this}Wo(t,e);var n=t.prototype;return n.getChildContext=function(){var e=this.props;return{$bs_formGroup:{controlId:e.controlId,validationState:e.validationState}}},n.hasFeedback=function(e){var t=this;return cs(e,(function(e){return"feedback"===e.props.bsRole||e.props.children&&t.hasFeedback(e.props.children)}))},n.render=function(){var e=this.props,t=e.validationState,n=e.className,o=e.children,r=function(e,t){var n={};["controlId"].forEach((function(e){n[e]=!0}));var o={};return hr()(e).forEach((function(e){var t=e[0],r=e[1];Sr(t)||n[t]||(o[t]=r)})),[xr(e),o]}(Lo(e,["validationState","className","children"])),s=r[0],l=r[1],c=jo({},Cr(s),{"has-feedback":this.hasFeedback(o)});return t&&(c["has-"+t]=!0),a().createElement("div",jo({},l,{className:i()(n,c)}),o)},t}(a().Component);us.propTypes=ds,us.childContextTypes=hs;const ps=yr("form-group",wr([fr,mr],us));function fs(e,t){return fs=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},fs(e,t)}function ms(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function gs(e,t,n){return e===t||(e.correspondingElement?e.correspondingElement.classList.contains(n):e.classList.contains(n))}var bs,vs,ys=(void 0===bs&&(bs=0),function(){return++bs}),ws={},Cs={},xs=["touchstart","touchmove"];function Ss(e,t){var n={};return-1!==xs.indexOf(t)&&vs&&(n.passive=!e.props.preventDefault),n}class _s extends a().PureComponent{handleClickOutside(){const{sha:e,shorthand:t,type:n,data:o}=this.props.createRefFormData;this.props.onCancel(t,e,n,o)}constructor(e){super(e);const{createRefFormData:t,formatRefShorthand:n}=this.props,{sha:o,shorthand:r,type:i,data:s}=t;this.state={currentShorthand:n(r,o,i,s),initShorthand:r}}static getDerivedStateFromProps(e,t){const{createRefFormData:n,formatRefShorthand:o}=e,{currentShorthand:r,initShorthand:i}=t,{sha:s,shorthand:a,type:l,data:c}=n,d=a!==i;return d&&o(a,s,l,c)!==r?{currentShorthand:o(a,s,l,c),initShorthand:a}:d?{currentShorthand:r,initShorthand:a}:null}onInputChange(e){let t=e||"";if(e){const{sha:e,type:n,data:o}=this.props.createRefFormData;t=this.props.formatRefShorthand(t,e,n,o)}this.setState({currentShorthand:t})}render(){const{createRefFormData:e,isRefShorthandValid:t,onCancel:n,onContextMenu:o,onRefCreate:r,refZoneWidth:i,style:s,translate:l}=this.props,{currentShorthand:c}=this.state,{data:d,sha:h,type:u}=e,p=l(u===L.V.TAG?"RefZone-EnterTagName":"RefZone-EnterBranchName");return a().createElement("div",{className:"create-ref","data-testid":"create-ref",style:{...s,minWidth:i,width:i}},a().createElement(ps,{validationState:0===c.length||t(c,h,u,d)?"success":"error"},a().createElement($i,{autoFocus:!0,"data-testid":"create-ref-form-control",onChange:e=>this.onInputChange(e.target?.value),onContextMenu:e=>o(e,c,h,u,d),onKeyDown:e=>{e.stopPropagation(),"Escape"!==e.key?h&&"Enter"===e.key&&r(c,h,u,d):n(c,h,u,d)},placeholder:p,type:"text",value:c})))}}var Ts=function(e,t){var n,o,r=e.displayName||e.name||"Component";return o=n=function(n){var o,i;function a(e){var o;return(o=n.call(this,e)||this).__outsideClickHandler=function(e){if("function"!=typeof o.__clickOutsideHandlerProp){var t=o.getInstance();if("function"!=typeof t.props.handleClickOutside){if("function"!=typeof t.handleClickOutside)throw new Error("WrappedComponent: "+r+" lacks a handleClickOutside(event) function for processing outside click events.");t.handleClickOutside(e)}else t.props.handleClickOutside(e)}else o.__clickOutsideHandlerProp(e)},o.__getComponentNode=function(){var e=o.getInstance();return t&&"function"==typeof t.setClickOutsideRef?t.setClickOutsideRef()(e):"function"==typeof e.setClickOutsideRef?e.setClickOutsideRef():(0,Dt.findDOMNode)(e)},o.enableOnClickOutside=function(){if("undefined"!=typeof document&&!Cs[o._uid]){void 0===vs&&(vs=function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};return window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),e}}()),Cs[o._uid]=!0;var e=o.props.eventTypes;e.forEach||(e=[e]),ws[o._uid]=function(e){var t;null!==o.componentNode&&(o.props.preventDefault&&e.preventDefault(),o.props.stopPropagation&&e.stopPropagation(),o.props.excludeScrollbar&&(t=e,document.documentElement.clientWidth<=t.clientX||document.documentElement.clientHeight<=t.clientY)||function(e,t,n){if(e===t)return!0;for(;e.parentNode||e.host;){if(e.parentNode&&gs(e,t,n))return!0;e=e.parentNode||e.host}return e}(e.composed&&e.composedPath&&e.composedPath().shift()||e.target,o.componentNode,o.props.outsideClickIgnoreClass)===document&&o.__outsideClickHandler(e))},e.forEach((function(e){document.addEventListener(e,ws[o._uid],Ss(ms(o),e))}))}},o.disableOnClickOutside=function(){delete Cs[o._uid];var e=ws[o._uid];if(e&&"undefined"!=typeof document){var t=o.props.eventTypes;t.forEach||(t=[t]),t.forEach((function(t){return document.removeEventListener(t,e,Ss(ms(o),t))})),delete ws[o._uid]}},o.getRef=function(e){return o.instanceRef=e},o._uid=ys(),o}i=n,(o=a).prototype=Object.create(i.prototype),o.prototype.constructor=o,fs(o,i);var l=a.prototype;return l.getInstance=function(){if(e.prototype&&!e.prototype.isReactComponent)return this;var t=this.instanceRef;return t.getInstance?t.getInstance():t},l.componentDidMount=function(){if("undefined"!=typeof document&&document.createElement){var e=this.getInstance();if(t&&"function"==typeof t.handleClickOutside&&(this.__clickOutsideHandlerProp=t.handleClickOutside(e),"function"!=typeof this.__clickOutsideHandlerProp))throw new Error("WrappedComponent: "+r+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),this.props.disableOnClickOutside||this.enableOnClickOutside()}},l.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},l.componentWillUnmount=function(){this.disableOnClickOutside()},l.render=function(){var t=this.props;t.excludeScrollbar;var n=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["excludeScrollbar"]);return e.prototype&&e.prototype.isReactComponent?n.ref=this.getRef:n.wrappedRef=this.getRef,n.disableOnClickOutside=this.disableOnClickOutside,n.enableOnClickOutside=this.enableOnClickOutside,(0,s.createElement)(e,n)},a}(s.Component),n.displayName="OnClickOutside("+r+")",n.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:t&&t.excludeScrollbar||!1,outsideClickIgnoreClass:"ignore-react-onclickoutside",preventDefault:!1,stopPropagation:!1},n.getClass=function(){return e.getClass?e.getClass():e},o}(_s),Rs=function({hasActive:e,overflowCount:t}){return a().createElement("span",{className:i()("overflow-count ml1",{"is-active":e}),"data-test-class":"overflow-count"},"+",t)},ks=function({style:e,children:t,column:n,numGraphColumns:o,onMouseEnter:r,onMouseLeave:s}){const l=e?.top||0;return a().createElement("div",{className:i()("gk-graph","ref-zone","column-"+(n%o+1))},a().createElement("ul",{onMouseEnter:r,onMouseLeave:s,style:{...e,top:l-m.cZ/2,position:"absolute",listStyle:"none",padding:0,zIndex:1}},t))},Es=function({enabledRefMetadataTypes:e,column:t,context:n,enableShowHideRefsOptions:o,getTargetRef:r,hasActive:i,hasRefs:s,getExternalIcon:l,includeOnlyRefsById:c,includeOnlyRemotesByName:d,isGhostRef:h,isHovered:u,isInUnsupportedRebase:p,numGraphColumns:f,onMissingRefMetadata:g,refGroupContexts:b,refGroupsByName:v,refMetadata:y,refNodeHovered:w,sha:C,showContextMenuForGroupedRef:x,onClickRef:S,onDoubleClickRef:_,onToggleRefNodesShown:T,onRefBeginDrag:R,onRefCanDrag:k,onRefCanDrop:E,onRefDragEnter:O,onRefDragLeave:I,onRefDrop:M,onRefEndDrag:D,translate:$,type:A}){const N=(e,t,n)=>{const o=t.map((e=>({id:j(e),name:e.name,type:e.refType,owner:e.owner,avatarUrl:e.avatarUrl})));T(e,o,!1,n)},P=u?v:[be(v)].filter((e=>Boolean(e))),z=m.Vh+(v[0]?.length||0)*m.B+(i?m.B:0),H=Object.values(c),F=H.length>0&&H.some((e=>e.type===L.V.TAG)),G=P.map((t=>{const n=ge(t)||t[0],r=b?.[n.name]||void 0,f=t.some((e=>{const t=j(e);switch(e.refType){case L.V.TAG:return F&&Boolean(c[t]);case L.V.REMOTE:return Boolean(c[t])||e.owner&&d[e.owner];default:return Boolean(c[t])}})),m=a().createElement(ni,{enabledRefMetadataTypes:e,enableShowHideRefsOptions:o,getExternalIcon:l,groupIsHovered:u,hasActive:i,hasRefs:s,isGhostRef:h,isInUnsupportedRebase:p,isRefGroupIncluded:f,key:`ref-node-${n.fullName||n.name}`,onClick:S,onContextMenu:x,onDoubleClick:_,onHideRefClick:N,onHovered:w,onMissingRefMetadata:g,onRefBeginDrag:R,onRefCanDrag:k,onRefCanDrop:E,onRefDragEnter:O,onRefDragLeave:I,onRefDrop:M,onRefEndDrag:D,refGroup:t,refGroupContext:r,refMetadata:y,sha:C,translate:$,type:A});return u?a().createElement("li",{key:m.key},m):m}));return u?a().createElement("div",{"data-vscode-context":B(n),style:{height:100,position:"relative"}},a().createElement(ar,{placement:"right",show:u,target:r},a().createElement(ks,{column:t,numGraphColumns:f},G))):a().createElement("span",{"data-vscode-context":B(n),style:{minWidth:z}},G)};const Os={};class Is extends a().PureComponent{refPopoverTarget;isContextMenuShown=!1;static defaultProps={style:{}};componentWillReceiveProps(e){this.props.hasRefs||!this.props.isSingleSelected||e.isSingleSelected||this.props.hoveredRefZoneSha!==this.props.sha||(this.props.refZoneUnhovered(),this.props.hoveredRefGroup&&this.props.refNodeUnhovered(void 0,this.props.hoveredRefGroup,this.props.sha))}getRefPopoverTarget=()=>this.refPopoverTarget;onCustomToggleRefNodesShown=(e,t,n,o)=>{this.props.onToggleRefNodesShown(e,t,n,o),this.props.refZoneUnhovered()};render(){const{enabledRefMetadataTypes:e,column:t,context:n,enableShowHideRefsOptions:o,showGhostRefsOnRowHover:r,hasActive:s,hasRefs:l,hasTimeline:c,hoveredRefGroup:d,hoveredRefZoneSha:h,getExternalIcon:u,includeOnlyRefsById:p,includeOnlyRemotesByName:f,isContainerWindowFocused:g,isInUnsupportedRebase:b,numGraphColumns:v,onClickRef:y,onDoubleClickRef:w,onMissingRefMetadata:C,onRefBeginDrag:x,onRefCanDrag:S,onRefCanDrop:_,onRefDragEnter:T,onRefDragLeave:R,onRefDrop:k,onRefEndDrag:E,refGroupContexts:O,refGroupsByName:I,refMetadata:M,refNodeHovered:D,refNodeUnhovered:$,refZoneHovered:A,refZoneUnhovered:N,sha:P,shouldShowRefLine:z,showColorStrip:H,showContextMenuForGroupedRef:L,style:F,translate:B,type:W,width:U}=this.props,j=h===P&&g,V={minWidth:U,width:U},Z={...F,...V},q=c?a().createElement(di,null):null,K=I.length,Y=e=>{A(P),K?D(e,I[0],P):d&&$(e,d,P)},X=e=>{g&&this.isContextMenuShown?this.isContextMenuShown=!1:(N(),d&&$(e,d,P))},Q=G(((e,t)=>{X(e),x(e,t)})),J=K>0&&!l&&r,ee=function(e,t,n,o,r,s){const a=`${e}${t}${n}${o}${r}${s}`;let l=Os[a];return l||(l=i()("column-"+(t%r+1),"flex","pb3","pt3","ref-zone","relative",e,{"dim-ref":s,"has-active":o,z6:n,z1:!n}),Os[a]=l,l)}(W,t,j,s,v,J),te=a().createElement("div",{className:"color-strip height-100",style:{width:2}});if(!K)return a().createElement("div",{className:ee,onMouseEnter:Y,onWheel:X,style:Z},H?te:null,q);const ne={minWidth:0,overflow:"hidden",width:U-m.PB},oe=K-1,re=oe>0&&!j?a().createElement(Rs,{hasActive:s,overflowCount:oe}):null;return a().createElement("div",{className:ee,onMouseEnter:Y,onMouseLeave:X,onWheel:X,style:Z},a().createElement("div",{ref:e=>this.refPopoverTarget=e}),H?te:null,q,a().createElement("div",{className:"flex",style:ne},a().createElement(Es,{column:t,context:n,enabledRefMetadataTypes:e,enableShowHideRefsOptions:o,getExternalIcon:u,getTargetRef:this.getRefPopoverTarget,hasActive:s,hasRefs:l,includeOnlyRefsById:p,includeOnlyRemotesByName:f,isGhostRef:J,isHovered:j,isInUnsupportedRebase:b,numGraphColumns:v,onClickRef:y,onDoubleClickRef:w,onMissingRefMetadata:C,onRefBeginDrag:Q,onRefCanDrag:S,onRefCanDrop:_,onRefDragEnter:(e,t,n)=>{j||n?.sha!==P||Y(e),T(e,t,n)},onRefDragLeave:R,onRefDrop:k,onRefEndDrag:E,onToggleRefNodesShown:this.onCustomToggleRefNodesShown,refGroupContexts:O,refGroupsByName:I,refMetadata:M,refNodeHovered:D,sha:P,showContextMenuForGroupedRef:(e,t,n)=>{Y(e),this.isContextMenuShown=!0,L(e,t,n)},translate:B,type:W}),re),l&&z?a().createElement("div",{className:"absolute left-0 flex z1",style:V},a().createElement(qi,{hasRefs:!0,isActiveSha:s,left:m.yv,type:W,width:"100%"})):null)}}var Ms=(e,t)=>{const{createRefFormData:n,formatRefShorthand:o,enableShowHideRefsOptions:r,enabledRefMetadataTypes:i,isRefShorthandValid:s,showGhostRefsOnRowHover:l,onDoubleClickRef:c,processedRows:d,includeOnlyRefsById:h,includeOnlyRemotesByName:u,isContainerWindowFocused:p,isInUnsupportedRebase:f,getExternalIcon:g,hoveredRefGroup:b,hoveredRefZoneSha:v,numGraphColumns:y,onClickRef:w,onMissingRefMetadata:C,onShowContextMenuForGroupedRef:x,onRefBeginDrag:S,onRefCanDrag:_,onRefCanDrop:T,onRefCreate:R,onRefCreateCancel:k,onRefCreateContextMenu:E,onRefDragEnter:O,onRefDragLeave:I,onRefDrop:M,onRefEndDrag:D,onRefNodeHovered:$,onRefNodeUnhovered:A,onRefZoneHovered:N,onRefZoneUnhovered:P,onToggleRefNodesShown:z,refMetadataById:H,shouldShowRefLine:L,translate:F}=e,G=new ve(e);return({rowIndex:e,style:B})=>{const W=t(e),U=d[e],j=m.jZ,V=G.isLastColumn(j),Z=G.getZoneWidth(j),q=G.isHovering(e),{sha:K,type:Y,hasRefs:X,contexts:Q}=U,J=Q?.ref||void 0,ee=Q?.refGroups||void 0,te=G.isSingleSelected(e),ne=G.getVerticalScrollWidth(j),oe=(l||X)&&(X||q||te)?G.getGraphRefGroupsByNameForRow(e):[],re=G.isColumnFollowingGraphColumn(j);return n?.sha===K?a().createElement(Ts,{createRefFormData:n,formatRefShorthand:o,isRefShorthandValid:s,key:W,onCancel:k,onContextMenu:E,onRefCreate:R,refZoneWidth:Z,style:B,translate:F}):a().createElement(Is,{column:U.column,context:J,enabledRefMetadataTypes:i,enableShowHideRefsOptions:r,getExternalIcon:g,hasActive:G.rowContainsCurrentHeadRef(U),hasRefs:X||!1,hasTimeline:G.hasTimeline(e),hoveredRefGroup:b,hoveredRefZoneSha:v,includeOnlyRefsById:h,includeOnlyRemotesByName:u,isContainerWindowFocused:p,isInUnsupportedRebase:f,isSingleSelected:te,key:W,numGraphColumns:y,onClickRef:w,onDoubleClickRef:c,onMissingRefMetadata:C,onRefBeginDrag:S,onRefCanDrag:_,onRefCanDrop:T,onRefDragEnter:O,onRefDragLeave:I,onRefDrop:M,onRefEndDrag:D,onToggleRefNodesShown:z,refGroupContexts:ee,refGroupsByName:oe,refMetadata:H,refNodeHovered:$,refNodeUnhovered:A,refZoneHovered:N,refZoneUnhovered:P,sha:K,shouldShowRefLine:L,showColorStrip:re,showContextMenuForGroupedRef:x,showGhostRefsOnRowHover:l,style:B,translate:F,type:Y,width:V?Z-ne:Z})}},Ds=(e,t)=>{const{translate:n,processedRows:o}=e,r=i()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative"),s=new ve(e);return({rowIndex:e,style:l})=>{const c=t(e),d=i()("graph-row","height-100-percent","flex"),h=s.hasTimeline(e),u=o[e],p=u.contexts?.row||void 0,f=u.timeLineEntry?.label||"",m=u.timeLineEntry?.value||0,g=h?a().createElement(di,null):null,b=h?a().createElement("span",{className:"time-line-message-container"},a().createElement("span",{className:"time-line-message"},n(f,m))):null;return a().createElement("div",{className:r,"data-vscode-context":B(p),key:c,style:l},g,a().createElement("div",{className:d,"data-vscode-context":B(p)},b))}};class $s extends a().PureComponent{graphContainerRef=a().createRef();resizeObserver;isSelectedBySha={};processedGraphRowBySha={};childrenBySha={};scrollToSha;headSha;headUpstreamSha;lastLazyLoadHeight=0;lastTopVisibleRowIndex=-1;lastBottomVisibleRowIndex=-1;maxColumns=0;orderedGraphRows=[];rowStatsConstraints={min:0,max:0};shouldFireShowMoreCommits=!0;columnsToFreeWhenFound={};hasMergeNodeChildBySha={};reserverInfoBySha={};columnsUsed={};rowsStats;workDirStats=m.OR;excludeByType={};excludeRefsById={};includeOnlyRefsById={};excludeRemotesByName={};includeOnlyRemotesByName={};scrollLeft=0;scrollTop=0;graphHeight=585;graphWidth=804;graphZoneModeConstants=ae();graphZonesByType={};graphZoneOrdering=[m.jZ,m.Wm,m.KE,m.GF,m.WD,m.PL,m.av];clientHeight=0;missingAvatarsTimer;pendingMissingAvatars={};requestedMissingAvatars={};missingRefsMetadataTimer;pendingMissingRefsMetadata={};requestedMissingRefsMetadata={};markerRowIndices={};branchUpstreamRowIndices=[];downstreamsByUpstream={};timelinesInterval;constructor(e){super(e),this.resizeObserver=new ResizeObserver((e=>e.forEach((e=>this.onGraphResized(e.contentRect.width,e.contentRect.height))))),this.isSelectedBySha=this.props.isSelectedBySha||{},this.excludeByType=this.props.excludeByType||{},this.excludeRefsById=this.props.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),this.includeOnlyRefsById=this.props.includeOnlyRefsById||{},this.downstreamsByUpstream=this.props.downstreamsByUpstream||{},this.rowsStats=this.props.rowsStats||this.rowsStats,this.workDirStats=this.props.workDirStats||this.workDirStats,this.processRows(this.props.graphRows),this.cleanupSelections(),this.updateMarkerRowIndices(["selection","highlights"]);const t=S(this.props.cssVariables);this.graphZoneModeConstants=ae(this.props.columnsSettings?.[m.Wm]?.mode),this.maybeSortGraphZoneOrderingFromSettings(this.props.columnsSettings),this.state={avatarUrlByEmail:this.props.avatarUrlByEmail||{},contexts:this.props.contexts,createRefFormData:this.props.createRefFormData,cssVariablesWithDefaults:t,columnColorByColumn:this.getColumnColorByColumn(t),currentlyHoveredCommitSha:void 0,dimMergeCommits:this.props.dimMergeCommits||!1,dimRowsOfSelectedCommit:!1,enableShowHideRefsOptions:this.props.enableShowHideRefsOptions||!1,highlightRowsOnRefHover:this.props.highlightRowsOnRefHover||!1,showGhostRefsOnRowHover:this.props.showGhostRefsOnRowHover||!1,showRemoteNamesOnRefs:this.props.showRemoteNamesOnRefs||!1,enabledRefMetadataTypes:this.props.enabledRefMetadataTypes||[],enabledScrollMarkerTypes:this.props.enabledScrollMarkerTypes||[],graphZones:this.initializeGraphZones(this.props.columnsSettings,this.graphZoneOrdering,580),hasMoreCommits:this.props.hasMoreCommits||!1,height:this.graphHeight,highlightedShas:this.props.highlightedShas,hoveredRefGroup:void 0,hoveredRefZoneSha:void 0,isContainerWindowFocused:void 0===this.props.isContainerWindowFocused||this.props.isContainerWindowFocused,isLoadingRows:this.props.isLoadingRows||!1,numGraphColumns:this.getNumGraphColumns(t),pendingCommitMessageSummary:this.props.pendingCommitMessageSummary||"",processedRows:[...this.orderedGraphRows],refMetadataById:this.props.refMetadataById,rowsStats:this.rowsStats,rowsStatsLoading:this.props.rowsStatsLoading||!1,useAuthorInitialsForAvatars:this.props.useAuthorInitialsForAvatars||!1,scrollLeft:this.getScrollLeft(),scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex(),scrollTop:this.getScrollTop(),shaLength:this.props.shaLength,themeOpacityFactor:this.props.themeOpacityFactor||m.X9.dark,width:this.graphWidth,workDirStats:this.workDirStats}}componentDidMount(){this.resizeObserver.observe(this.graphContainerRef.current),window.addEventListener("keydown",this.onWindowKeyDown),window.addEventListener("keyup",this.onWindowKeyUp),window.addEventListener("blur",this.onWindowBlur);const e=this.isSelectedBySha?this.getSelectedShas():[];e.length>0&&this.selectCommits(e,!1,!0)}componentWillReceiveProps(e){let t=!1,n=!1,o=!1;if(this.props.highlightedShas!==e.highlightedShas){this.setState({highlightedShas:e.highlightedShas});const t=[];Object.keys(e.highlightedShas||{}).forEach((n=>{e.highlightedShas[n]&&void 0!==this.processedGraphRowBySha[n]?.rowIndex&&t.push(this.processedGraphRowBySha[n].rowIndex)})),this.markerRowIndices={...this.markerRowIndices,highlights:t}}if(this.props.isSelectedBySha!==e.isSelectedBySha&&this.selectCommits(e.isSelectedBySha?Object.keys(e.isSelectedBySha):[],!1,!0),this.props.excludeByType!==e.excludeByType&&(this.excludeByType=e.excludeByType||{},e.graphRows?.length&&(n=!0)),this.props.excludeRefsById!==e.excludeRefsById&&(this.excludeRefsById=e.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),e.graphRows?.length&&(n=!0)),this.props.includeOnlyRefsById!==e.includeOnlyRefsById&&(this.includeOnlyRefsById=e.includeOnlyRefsById||{},this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),e.graphRows?.length&&(n=!0)),this.props.themeOpacityFactor!==e.themeOpacityFactor&&this.setState({themeOpacityFactor:e.themeOpacityFactor}),this.props.dimMergeCommits!==e.dimMergeCommits&&this.setState({dimMergeCommits:e.dimMergeCommits||!1}),this.props.highlightRowsOnRefHover!==e.highlightRowsOnRefHover&&this.setState({highlightRowsOnRefHover:e.highlightRowsOnRefHover||!1}),this.props.showGhostRefsOnRowHover!==e.showGhostRefsOnRowHover&&this.setState({showGhostRefsOnRowHover:e.showGhostRefsOnRowHover||!1}),this.props.showRemoteNamesOnRefs!==e.showRemoteNamesOnRefs&&this.setState({showRemoteNamesOnRefs:e.showRemoteNamesOnRefs||!1}),this.props.enabledRefMetadataTypes!==e.enabledRefMetadataTypes&&this.setState({enabledRefMetadataTypes:e.enabledRefMetadataTypes||[]}),this.props.enabledScrollMarkerTypes!==e.enabledScrollMarkerTypes&&this.setState({enabledScrollMarkerTypes:e.enabledScrollMarkerTypes||[]}),this.props.isContainerWindowFocused!==e.isContainerWindowFocused&&this.setState({dimRowsOfSelectedCommit:!1,isContainerWindowFocused:void 0===e.isContainerWindowFocused||e.isContainerWindowFocused}),this.props.downstreamsByUpstream!==e.downstreamsByUpstream&&(this.downstreamsByUpstream=e.downstreamsByUpstream||{},e.graphRows?.length&&(n=!0)),this.props.graphRows!==e.graphRows||this.props.cssVariables!==e.cssVariables||n){this.cleanEdgeCaches();const r=S(e.cssVariables);o=!0,this.setState({columnColorByColumn:this.getColumnColorByColumn(r),cssVariablesWithDefaults:r,numGraphColumns:this.getNumGraphColumns(r)}),this.cleanupSelections(),t=!0,(e.graphRows?.length<this.props.graphRows?.length||n)&&(this.lastLazyLoadHeight=0)}if(this.props.useAuthorInitialsForAvatars!==e.useAuthorInitialsForAvatars&&this.setState({useAuthorInitialsForAvatars:e.useAuthorInitialsForAvatars}),this.props.shaLength!==e.shaLength&&this.setState({shaLength:e.shaLength}),this.props.hasMoreCommits!==e.hasMoreCommits&&this.setState({hasMoreCommits:e.hasMoreCommits||!1}),this.props.isLoadingRows!==e.isLoadingRows&&this.setState({isLoadingRows:e.isLoadingRows||!1}),this.props.rowsStats!==e.rowsStats&&(this.rowsStats=e.rowsStats,this.updateRowStatsConstraints(),this.setState({rowsStats:e.rowsStats})),this.props.rowsStatsLoading!==e.rowsStatsLoading&&this.setState({rowsStatsLoading:e.rowsStatsLoading||!1}),this.props.workDirStats!==e.workDirStats&&(this.workDirStats=e.workDirStats||m.OR,!de(this.props.workDirStats)&&de(e.workDirStats)||de(this.props.workDirStats)&&!de(e.workDirStats)?(o=!0,this.setState({workDirStats:this.workDirStats})):this.setState({workDirStats:this.workDirStats})),this.props.avatarUrlByEmail!==e.avatarUrlByEmail&&(this.setState({avatarUrlByEmail:e.avatarUrlByEmail||{}}),this.requestedMissingAvatars={}),this.props.refMetadataById!==e.refMetadataById&&(this.setState({refMetadataById:e.refMetadataById}),this.requestedMissingRefsMetadata={}),this.props.columnsSettings!==e.columnsSettings){if(e.columnsSettings?.[m.Wm]?.mode!==this.props.columnsSettings?.[m.Wm]?.mode){this.cleanEdgeCaches(),this.graphZoneModeConstants=ae(e.columnsSettings?.[m.Wm]?.mode),this.updateCommitZoneContentWidthFromChange();const n=this.graphZonesByType[m.Wm];n.currentWidth=n.contentWidth,n.preferredWidth=n.contentWidth,n.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,n.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.loadEdgesBySha(),t=!0}e.columnsSettings&&(this.updateZonesFromSettings(e.columnsSettings),t=!0)}if(this.props.contexts!==e.contexts&&this.setState({contexts:e.contexts}),this.props.pendingCommitMessageSummary!==e.pendingCommitMessageSummary&&this.setState({pendingCommitMessageSummary:e.pendingCommitMessageSummary||""}),this.props.enableShowHideRefsOptions!==e.enableShowHideRefsOptions&&this.setState({enableShowHideRefsOptions:e.enableShowHideRefsOptions}),this.props.createRefFormData!==e.createRefFormData&&(e.createRefFormData?.sha&&this.selectCommits([e.createRefFormData?.sha],!1,!0),this.setState({createRefFormData:e.createRefFormData})),o&&(this.processRows(e.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})),t){this.updateCommitZoneContentWidthFromChange();const e=this.getOrderedActiveGraphZones();this.expandLastZoneMinWidthForScrollbar(e),this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),this.setState({graphZones:e})}}componentWillUnmount(){window.removeEventListener("keydown",this.onWindowKeyDown),window.removeEventListener("keyup",this.onWindowKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.resizeObserver.disconnect()}onGraphVisibleRowsUpdatedThrottled=((e,t,n)=>{let o,r,i=!1,s=250;return(...t)=>{r=(new Date).getTime(),s=!o||r-o>s+20?20:250,i||(e(...t),o=(new Date).getTime(),i=!0,setTimeout((()=>{i=!1}),s))}})((()=>this.onGraphVisibleRowsUpdated()));onBlurWipNodeInput=e=>{this.props.onBlurWipNodeInput&&this.props.onBlurWipNodeInput(e)};onDoubleClickRef=(e,t,n,o)=>{this.props.onDoubleClickGraphRef&&this.props.onDoubleClickGraphRef(e,t,this.processedGraphRowBySha[n],o)};onFocusWipNodeInput=e=>{this.props.onFocusWipNodeInput&&this.props.onFocusWipNodeInput(e)};onFilterColumnClick=(e,t)=>{this.props.onFilterColumnClick&&this.props.onFilterColumnClick(e,t)};onCurrentlyHoveredGraphCommit=(e,t,n,o)=>{o!==n&&(this.props.onGraphRowHovered&&this.props.onGraphRowHovered(e,t,this.processedGraphRowBySha[n]),this.setState({currentlyHoveredCommitSha:n}))};onClearCurrentlyHoveredGraphCommit=(e,t,n,o)=>{o&&(this.props.onGraphRowUnhovered&&this.props.onGraphRowUnhovered(e,t,this.processedGraphRowBySha[n]),this.setState({currentlyHoveredCommitSha:void 0}))};onGraphColumnReOrdered=(e,t)=>{const n=this.graphZoneOrdering.indexOf(e);let o=t?this.graphZoneOrdering.indexOf(t):this.graphZoneOrdering.length-1;t&&n<o&&(o-=1),this.graphZoneOrdering.splice(n,1),this.graphZoneOrdering.splice(o,0,e);const r={};this.graphZoneOrdering.forEach(((e,t)=>{this.graphZonesByType[e].order=t,r[e]=this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e])})),this.setState({graphZones:this.initializeGraphZones(r,this.graphZoneOrdering,this.graphWidth)}),this.props.onGraphColumnsReOrdered&&this.props.onGraphColumnsReOrdered(r)};onGraphZoneResize=G(((e,t)=>{if(t?.width){const n=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(n,e,t,!1),this.setState({graphZones:n})}}));onGraphZoneResizeEnd=G(((e,t)=>{if(t?.width){const n=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(n,e,t,!0),this.setState({graphZones:n})}this.props.onColumnResized&&this.props.onColumnResized(e.type,this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e.type]))}));onPopupGraphHeaderContextMenu=(e,t)=>{this.props.onPopupGraphHeaderContextMenu&&this.props.onPopupGraphHeaderContextMenu(e,t)};onSettingsClick=(e,t)=>{this.props.onSettingsClick&&this.props.onSettingsClick(e,t)};onMessageChange=e=>{this.setState({pendingCommitMessageSummary:e}),this.props.onMessageChange&&this.props.onMessageChange(e)};onRefBeginDrag=(e,t)=>{this.props.onRefBeginDrag&&this.props.onRefBeginDrag(e,t)};onRefCanDrag=e=>!!this.props.onRefCanDrag&&this.props.onRefCanDrag(e);onRefCanDrop=(e,t,n)=>!!this.props.onRefCanDrop&&this.props.onRefCanDrop(e,t,n);onRefCreate=(e,t,n,o)=>{this.props.onRefCreate&&this.props.onRefCreate(e,t,n,o)};onRefCreateCancel=(e,t,n,o)=>{this.props.onRefCreateCancel&&this.props.onRefCreateCancel(e,t,n,o)};onRefCreateContextMenu=(e,t,n,o,r)=>{this.props.onRefCreateContextMenu&&this.props.onRefCreateContextMenu(e,t,n,o,r)};onRefDragEnter=(e,t,n)=>{this.props.onRefDragEnter&&this.props.onRefDragEnter(e,t,n)};onRefDragLeave=(e,t,n)=>{this.props.onRefDragLeave&&this.props.onRefDragLeave(e,t,n)};onRefDrop=(e,t,n)=>{this.props.onRefDrop&&this.props.onRefDrop(e,t,n)};onRefEndDrag=(e,t,n)=>{this.props.onRefEndDrag&&this.props.onRefEndDrag(e,t,n)};onZoneRowClick(e,t,n){if(0===e.button){const{enableMultiSelection:t}=this.props,o=this.isMacOSPlatform();t&&(!o&&e.ctrlKey||o&&e.metaKey)?this.selectCommits([n],!0,!1):t&&e.shiftKey||this.selectCommits([n],!1,!1)}}onClickRef=(e,t,n,o)=>{this.onZoneRowClick(e,m.jZ,n),this.props.onClickGraphRef&&this.props.onClickGraphRef(e,t,this.processedGraphRowBySha[n],o)};onClickCommit=(e,t,n)=>{if(this.onZoneRowClick(e,t,n),this.props.onClickGraphRow){const o=this.processedGraphRowBySha[n];this.props.onClickGraphRow(e,t,o)}};onDoubleClickCommit=(e,t,n)=>{if(this.props.onDoubleClickGraphRow){const o=this.processedGraphRowBySha[n];this.props.onDoubleClickGraphRow(e,t,o)}};onWindowKeyUp=e=>{switch(e.keyCode){case 91:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!1);break;case 17:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!1)}};onWindowBlur=()=>{this.dimRowsOfSelectedCommit(!1)};onWindowKeyDown=e=>{switch(e.keyCode){case 91:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!0);break;case 17:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!0);break;default:this.state.dimRowsOfSelectedCommit&&this.dimRowsOfSelectedCommit(!1)}};onKeyDown=e=>{switch(e.keyCode){case 38:this.selectPrevious(e.shiftKey);break;case 40:this.selectNext(e.shiftKey);break;case 72:this.selectHead(e.shiftKey)}};onRefNodeHovered=(e,t,n)=>{(!this.props.showGhostRefsOnRowHover||ue(this.isSelectedBySha,n)||this.processedGraphRowBySha[n]?.hasRefs)&&(this.props.onGraphRefNodeHovered&&this.props.onGraphRefNodeHovered(e,t,this.processedGraphRowBySha[n]),this.setState({hoveredRefGroup:[...t]}))};onRefNodeUnhovered=(e,t,n)=>{this.props.onGraphRefNodeUnhovered&&this.props.onGraphRefNodeUnhovered(e,t,this.processedGraphRowBySha[n]),this.setState({hoveredRefGroup:void 0})};onRefZoneHovered=e=>{this.setState({hoveredRefZoneSha:e})};onRefZoneUnhovered=()=>{this.setState({hoveredRefZoneSha:void 0})};onShowMoreCommits=()=>{this.props.onShowMoreCommits&&this.shouldFireShowMoreCommits&&(this.props.onShowMoreCommits(),this.shouldFireShowMoreCommits=!1,setTimeout((()=>{this.shouldFireShowMoreCommits=!0}),100))};onScrollForZone=(e,t,n,o,r)=>{if(this.setScroll(e,t),this.props.onScrollForZone&&this.props.onScrollForZone(e,t),!this.props.onShowMoreCommits||!r||!o||o<0||!this.scrollTop||this.scrollTop<0||!this.orderedGraphRows?.length)return;const i=this.scrollTop+o,s=this.orderedGraphRows.length*m.$0;i>s-m.qG&&i>this.lastLazyLoadHeight&&(this.lastLazyLoadHeight=Math.min(i,s-1),this.onShowMoreCommits())};onScrollToRowCausedUpdateForRefZone=(e,t)=>{this.setScroll(e,t),this.props.onScrollToRowCausedUpdateForRefZone&&this.props.onScrollToRowCausedUpdateForRefZone(e,t)};onCommitContextMenu=(e,t,n)=>{if(this.props.onRowContextMenu){const o=this.processedGraphRowBySha[n];this.props.onRowContextMenu(e,t,o)}};onRefContextMenu=(e,t,n)=>{if(this.props.onRefContextMenu){const o=this.processedGraphRowBySha[n];this.props.onRefContextMenu(e,t,o)}};selectCommits(e,t,n){t||Object.keys(this.isSelectedBySha).forEach((t=>{e.includes(t)||delete this.isSelectedBySha[t]}));const o=this.processedGraphRowBySha?Object.keys(this.processedGraphRowBySha):[];if(e.forEach((e=>{o.includes(e)&&(this.isSelectedBySha[e]=!t||!this.isSelectedBySha[e]||!this.isSelectedBySha[e],this.isSelectedBySha[e]&&this.selectSha(e,n))})),this.props.onSelectGraphRows){const e=this.getSelectedShas().map((e=>this.processedGraphRowBySha[e]));this.props.onSelectGraphRows(e)}this.updateMarkerRowIndices(["selection"]),this.setState({processedRows:[...this.orderedGraphRows]})}getCommitZoneContentWidthBetweenGutters(){return this.getCurrentWidthByZone(m.Wm)-this.getLeftGutterWidth()-this.getRightGutterWidth()}getSelectedShas(){const e=[];return Object.keys(this.isSelectedBySha).forEach((t=>{this.isSelectedBySha[t]&&e.push(t)})),e}getExcludeRemotesByName(){const e={};return Object.values(this.excludeRefsById).forEach((t=>{t.type===L.V.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)})),e}getIncludeOnlyRemotesByName(){const e={};return Object.values(this.includeOnlyRefsById).forEach((t=>{t.type===L.V.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)})),e}clearScrollToIndex=()=>{setTimeout((()=>this.setState({scrollToIndex:void 0})),100)};getTopAndBottomVisibleRowIndex(){const{graphHeight:e,orderedGraphRows:t,scrollTop:n}=this,o=e||0;if(!o||!t||!t.length)return{top:-1,bottom:-1};const r=(o-m.rl)/m.$0,i=n/m.$0,s=i+(r-1);return{top:Math.max(Math.floor(i),0),bottom:Math.min(Math.ceil(s),t.length-1)}}getOffsetSha(e){const t=this.graphHeight||0,n=this.props.scrollRowPadding||0;if(!n||!t)return e;let o=n;if(o<=0)return e;const r=this.getTopAndBottomVisibleRowIndex(),i=r.top,s=r.bottom;if(-1===i||-1===s)return e;const a=Math.floor((s-i)/2);if(a<1)return e;o=Math.min(o,a);const l=this.orderedGraphRows.length,c=this.orderedGraphRows.findIndex((t=>t.sha===e));if(!c||!this.orderedGraphRows.length)return e;const d=s-o<c;return i+o>c?this.orderedGraphRows[Math.max(c-o,0)].sha||e:d&&this.orderedGraphRows[Math.min(c+o,l-1)].sha||e}selectSha(e,t=!1){const n=this.processedGraphRowBySha[e]?.column||0,o=this.getScrollLeft(),r=this.getCommitZoneContentWidthBetweenGutters(),i=this.getCurrentWidthByZone(m.Wm),s=this.getCommitZoneContentWidth(),a=n*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,l=o-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/3<=a,c=a<=o+r,d=Math.max(0,s-i),h=l&&c?o:H(a-r/2,0,d);this.setScrollToSha(t?this.getOffsetSha(e):e,h),this.setState({scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex()},this.clearScrollToIndex)}updateWidthByZone(e,t,n){const o=this.getOrderedActiveGraphZones(),r=this.graphZonesByType[t],i=oe(r,o,e);if(r.currentWidth=i,t===m.Wm){const e=Math.max(0,this.getCommitZoneContentWidth()-r.currentWidth);this.getScrollLeft()>e&&this.setScrollLeft(e)}n&&(r.preferredWidth=i)}updateCommitZoneContentWidthFromChange(){const e=this.graphZonesByType[m.Wm];if(!e.isHidden){const t=this.getOrderedActiveGraphZones(),n=this.getCommitZoneContentWidth();e.contentWidth=n,e.maximumWidth=n,e.currentWidth>n&&(e.currentWidth=oe(e,t,n)),this.setState({graphZones:t})}}getCurrentWidthByZone(e,t=!0){const n=t?this.getVerticalScrollWidth(m.Wm,this.props.cssVariables,!0):0,o=this.graphZonesByType[e];return o&&!o.isHidden?o.currentWidth-n:0}getCommitZoneContentWidth(){return(this.maxColumns||1)*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT}getCommitZoneWidth(e=!0){const t=e?this.getVerticalScrollWidth(m.Wm,this.props.cssVariables,!0):0;if(this.graphZonesByType[m.Wm])return this.graphZonesByType[m.Wm].currentWidth-t;const{columnsSettings:n}=this.props;return n?.[m.Wm]?n[m.Wm].width-t:m.qi[m.Wm].minimumWidth-t}getSingleColumnModeFactor(){const e=this.maxColumns,t=this.getCurrentWidthByZone(m.Wm);return 1===e?0:H(1-(t-2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)}setClientHeight(e){this.clientHeight=e}getClientHeight(){return this.clientHeight}setScroll(e,t){this.setClientHeight(t.clientHeight),null!=t.scrollTop&&this.setScrollTop(t.scrollTop),e===m.Wm&&null!=t.scrollLeft&&this.setScrollLeft(t.scrollLeft)}getNonAdjustedScrollLeft(){return this.scrollLeft}setScrollLeft(e){this.scrollLeft!==e&&(this.scrollLeft=e,this.setState({scrollLeft:e}))}getScrollLeft(){const e=this.getNonAdjustedScrollLeft();return this.getCommitZoneContentWidth()!==this.getCommitZoneWidth()?e:0}setScrollTop(e){this.scrollTop!==e&&(this.scrollTop=e,this.setState({scrollTop:e}),this.onGraphVisibleRowsUpdatedThrottled())}getScrollTop(){return this.scrollTop}getScrollToSha(){return this.scrollToSha}setScrollToSha(e,t){this.scrollToSha=e,this.setScrollLeft(t),this.onGraphVisibleRowsUpdated()}getScrollToIndex(){const e=this.getScrollToSha();return this.orderedGraphRows.findIndex((t=>t.sha===e))}getScrollToAlignment(){const e=this.getClientHeight(),t=this.getScrollTop(),n=this.getScrollToIndex();return function(e,t,n,o){if(o<0)return m.os;const r=e+2,i=o*e;return i>=n-r&&i<n+t+r?m.os:m.MQ}(m.$0,e,t,n)}getMinNodeOffset(){const e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return(1-t)*(e+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT)+t*(e+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getHorizontalScrollHeight(e,t,n){return this.graphZonesByType[e]?te(e,this.getOrderedActiveGraphZones(),this.orderedGraphRows,t,n):0}getVerticalScrollWidth(e,t,n){return this.graphZonesByType[e]?ne(e,this.getOrderedActiveGraphZones(),this.props.hasMoreCommits,this.props.isLoadingRows,this.graphHeight,this.orderedGraphRows,this.props.enabledScrollMarkerTypes?.length>0,t,n):0}getMaxNodeOffset(){const e=this.getCurrentWidthByZone(m.Wm),t=this.getScrollLeft(),n=this.getSingleColumnModeFactor();return(1-n)*(e+t+(this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH))+n*(t+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getAbsoluteNodeLeftByColumn(){const e={};for(let t=0;t<=this.maxColumns;t+=1)e[t]=this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH*t;return e}getNodeOffsetByColumn(){const e=this.getMinNodeOffset(),t=this.getMaxNodeOffset(),n=this.getAbsoluteNodeLeftByColumn(),o={};return Object.keys(n).forEach((r=>{const i=n[r];o[r]=H(i,e,t)})),o}getMaxNodeLeft(){return this.getScrollLeft()+(this.getCurrentWidthByZone(m.Wm)-this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)}getMinNodeLeft(){const e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return e+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT+t*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getRightGutterSlideOutFactor(){const e=this.getCurrentWidthByZone(m.Wm),t=this.getCommitZoneContentWidth(),n=this.getSingleColumnModeFactor();return H((e-(t-(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)))/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)+n/2}getNodeOpacityByColumn(){const e=this.getMinNodeLeft(),t=this.getMaxNodeLeft(),n=this.getAbsoluteNodeLeftByColumn(),o=this.getRightGutterSlideOutFactor(),r=this.getSingleColumnModeFactor(),i={};return Object.keys(n).forEach((s=>{const a=n[s],l=a-(e-r*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH),c=t+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-(a+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH*(1-o)),d=Math.min(l,c);i[s]=m.l3+(1-m.l3)*Math.max(d/(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2),r)})),i}getLeftGutterWidth(){const e=this.getSingleColumnModeFactor();return this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+e*(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2)}getRightGutterWidth(){return(1-this.getRightGutterSlideOutFactor())*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getBoxShadowAlphaForGutter(e,t){return.4*(1-Math.max(e,t))}getLeftGutterBoxShadowAlpha(e){const t=this.getScrollLeft(),n=this.getSingleColumnModeFactor();return e*this.getBoxShadowAlphaForGutter(n,H(1-t/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1))}getRightGutterBoxShadowAlpha(e){const t=this.getSingleColumnModeFactor(),n=this.getRightGutterSlideOutFactor();return e*this.getBoxShadowAlphaForGutter(t,n)}updateMarkerRowIndices(e){const t={...this.markerRowIndices};if(e.forEach((e=>{t[e]=[]})),e.includes("selection")&&this.getSelectedShas().forEach((e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&t.selection.push(this.processedGraphRowBySha[e].rowIndex)})),e.includes("highlights")){const e=this.state?.highlightedShas||this.props.highlightedShas||{};Object.keys(e).forEach((e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&t.highlights.push(this.processedGraphRowBySha[e].rowIndex)}))}this.markerRowIndices=t}getMarkerColors(){const e=getComputedStyle(document.documentElement),t={};return Object.values(m.Qh).forEach((n=>{const o=e.getPropertyValue(n.colorCssKey).trim();o&&(t[n.type]=o)})),t}initializeGraphZones(e,t,n){this.graphZonesByType={};const o=[];let r=0;t.forEach(((t,n)=>{const i=e?e[t]:void 0,s=m.qi[t],a=i?.width?i.width:s.minimumWidth,l={...s,type:t,currentWidth:a,preferredWidth:a,isHidden:i?.isHidden||!1,mode:i?.mode,order:s.isCustomizable&&void 0!==i?.order?i?.order:n};i?.isHidden||(r+=l.currentWidth),t===m.Wm&&(l.contentWidth=this.getCommitZoneContentWidth(),l.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,l.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.maxColumns>0&&(l.maximumWidth=l.contentWidth)),this.graphZonesByType[t]=l,l?.isHidden||o.push(l)}));const i=o[o.length-1];if(i){const e=q(this.props.cssVariables,!0),t=i.minimumWidth+e;(null==i.maximumWidth||i.maximumWidth>=t)&&(i.minimumWidth=t,null!=i.showIconWidth&&(i.showIconWidth+=e),o[o.length-1]=i)}for(o.forEach((e=>{const t=oe(e,o,e.currentWidth);t!==e.currentWidth&&(r-=e.currentWidth,e.currentWidth=t,r+=t)}));r>n;){const e=V(o);if(!e)break;const t=e.currentWidth,i=r-n,s=Math.max(e.minimumWidth,t-i),a=t-s;this.graphZonesByType[e.type].currentWidth=s,r-=a}if(r<n){const e=t[t.length-1],r=n-K(o,e);this.graphZonesByType[e].currentWidth=r}return o}maybeSortGraphZoneOrderingFromSettings(e){this.graphZoneOrdering.every((t=>void 0!==e?.[t]?.order))&&this.graphZoneOrdering.sort(((t,n)=>e[t].order<e[n].order?-1:e[t].order>e[n].order?1:0))}updateZonesFromSettings(e){let t=!1;this.graphZoneOrdering.forEach(((n,o)=>{const r=this.graphZonesByType[n],i=e?.[r.type];i&&(i.isHidden!==r.isHidden&&(t=!0,r.type!==m.WD||i.isHidden||this.updateRowStatsConstraints()),r.isHidden=i.isHidden,r.order=r.isCustomizable&&void 0!==i?.order?i?.order:o,r.mode=i.mode,r.preferredWidth=i.width??r.preferredWidth,r.currentWidth=r.preferredWidth)})),t&&this.graphZoneOrdering.forEach((e=>{const t=this.graphZonesByType[e];t.currentWidth=t.minimumWidth}))}getEdgeColumnMaxes(e){let t=0;const n=this.processedGraphRowBySha[e]?.edges||{};return Object.keys(n).forEach((e=>{t=Math.max(t,parseInt(e,10))})),t}getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t){const n={};let o,r,i,s;return Object.keys(t).forEach((a=>{o=t[a],r=o.passThrough,i=o.starting,s=r&&!g(r.type)?r:i&&!g(i.type)?i:r||i||void 0,s&&(s.parentSha===e.sha?n[a]={ending:s}:n[a]={passThrough:s})})),n}getFinalEdgeStateForGraphAndRow(e,t){const n=this.getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t),o=this.getStartingEdgesByColumn(e);let r;return Object.keys(o).forEach((e=>{n[e]||(n[e]={ending:void 0,passThrough:void 0,starting:void 0}),r=n[e],r.starting=o[e]})),n}loadEdgesBySha(){this.maxColumns=0,this.orderedGraphRows.forEach(((e,t)=>{const n=this.orderedGraphRows[t-1],o=n&&this.processedGraphRowBySha[n.sha]?.edges?this.processedGraphRowBySha[n.sha].edges:{};this.processedGraphRowBySha[e.sha].edges=this.getFinalEdgeStateForGraphAndRow(e,o);const r=this.getEdgeColumnMaxes(e.sha);this.processedGraphRowBySha[e.sha].edgeColumnMaxes=r,r>this.maxColumns&&(this.maxColumns=r)}))}processRows(e){this.loadRowsbySha(e||[]),this.loadEdgesBySha()}getStartingEdgesByColumn(e){const t={},n=e.parents;if(n.length>0){const o=e.type,r=this.processedGraphRowBySha[e.sha]?.column;void 0!==r&&(t[r]={parentSha:n[0],type:o});for(let e=1;e<n.length;e+=1){const r=n[e],i=this.processedGraphRowBySha[r]?.column;void 0!==i&&(t[i]={parentSha:r,type:o})}}return t}formatCommitDateTimeCallback=(e,t)=>this.props.formatCommitDateTime?this.props.formatCommitDateTime(e,t):function(e,t,n,o=!0){const r=`${n??""}:${t=t??void 0}`;let i=R.get(r);if(null==i){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=T.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:n}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:n||void 0}}const n={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(_))if(null!=t)for(const e in t){const o=t[e];if(null!=o)switch(e){case"year":n.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:n.month="long";break;case 3:n.month="short";break;case 2:n.month="2-digit";break;case 1:n.month="numeric"}break;case"day":n.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:n.weekday="long";break;case 3:n.weekday="short";break;case 2:n.weekday="narrow"}break;case"hour":n.hour=2===o.length?"2-digit":"numeric",n.hour12="hh"===o||"h"===o;break;case"minute":n.minute=2===o.length?"2-digit":"numeric";break;case"second":n.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":n.fractionalSecondDigits=3;break;case"dayPeriod":n.dayPeriod="narrow",n.hour12=!0,n.hourCycle="h12";break;case"timeZoneName":n.timeZoneName=2===o.length?"long":"short"}}return n}(t);let s;s=null==n?k:"system"===n?void 0:[n],i=new Intl.DateTimeFormat(s,e),o&&R.set(r,i)}if(null==t||T.test(t))return i.format(e);function s(e){const t=`${n??""}:time:${e}`;let r=R.get(t);if(null==r){const i={localeMatcher:"best fit",timeStyle:e};let s;s=null==n?k:"system"===n?void 0:[n],r=new Intl.DateTimeFormat(s,i),o&&R.set(t,r)}return r}const a=i.formatToParts(e);return t.replace(_,((t,n,o,r,i,l,c,d,h,u,p,f,m,g,b)=>{if(null!=n)return n.substring(1,n.length-1);for(const t in b){const n=b[t];if(null==n)continue;const o=a.find((e=>e.type===t));if("Do"===n&&"day"===o?.type)return O(Number(o.value));if("a"===n&&"dayPeriod"===o?.type){const t=s("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??o)?.value??""}`}return o?.value??""}return""}))}(e,m.It);formatRefShorthandCallback=(e,t,n,o)=>this.props.formatRefShorthand?this.props.formatRefShorthand(e,t,n,o):e.replace(/\s/g,"");isRefShorthandValidCallback=(e,t,n,o)=>!this.props.isRefShorthandValid||this.props.isRefShorthandValid(e,t,n,o);translateCallback=(e,...t)=>this.props.translate?this.props.translate(e,...t):ye[e]?function(e,t){if(0===t.length)return e;let n=e;return t.forEach(((e,t)=>{const o=new RegExp(`\\{${t}\\}`,"g");n=n.replace(o,e)})),n}(ye[e],t):`${e}`;getIconCallback=e=>this.props.getExternalIcon?this.props.getExternalIcon(e):a().createElement("span",null);onMissingAvatar=(e,t)=>{this.props.onEmailsMissingAvatarUrls&&!this.requestedMissingAvatars[e]&&(this.pendingMissingAvatars[e]=t,this.missingAvatarsTimer&&(clearTimeout(this.missingAvatarsTimer),this.missingAvatarsTimer=void 0),this.missingAvatarsTimer=setTimeout((()=>{const e={...this.pendingMissingAvatars};this.pendingMissingAvatars={};const t=Object.keys(e);if(t.length){for(const e of t)this.requestedMissingAvatars[e]=!0;this.props.onEmailsMissingAvatarUrls?.(e)}}),100))};onMissingRefMetadata=(e,t)=>{if(!this.props.onRefsMissingMetadata||this.requestedMissingRefsMetadata[e])return;const n=this.pendingMissingRefsMetadata[e]||[],o=t.filter((e=>!n.includes(e)));this.pendingMissingRefsMetadata[e]=[...n,...o],this.missingRefsMetadataTimer&&(clearTimeout(this.missingRefsMetadataTimer),this.missingRefsMetadataTimer=void 0),this.missingRefsMetadataTimer=setTimeout((()=>{const e={...this.pendingMissingRefsMetadata};this.pendingMissingRefsMetadata={};const t=Object.keys(e);if(t.length){for(const e of t)this.requestedMissingRefsMetadata[e]=!0;this.props.onRefsMissingMetadata?.(e)}}),100)};selectNext(e){const t=this.getSelectedShas(),n=t.length>0?t[t.length-1]:null;let o;if(e&&n){const e=this.processedGraphRowBySha[n];e?.parents?.length&&(o=e.parents[0])}else{const e=n?this.orderedGraphRows.findIndex((e=>e.sha===n)):-1,t=Math.min(e+1,this.orderedGraphRows.length-1);o=this.orderedGraphRows[t]?.sha}o&&this.selectCommits([o],!1,!0)}selectPrevious(e){const t=this.getSelectedShas(),n=t.length>0?t[0]:null;let o;if(e&&n){const e=this.childrenBySha[n];if(e?.length)for(let t=0;t<e.length;t+=1)if(t===e.length-1)o=e[t];else if(this.processedGraphRowBySha[e[t]]?.type!==f.kP){o=e[t];break}}else{const e=n?this.orderedGraphRows.findIndex((e=>e.sha===n)):-1,t=Math.max(-1,e-1);o=this.orderedGraphRows[t]?.sha,t<0&&(o=this.orderedGraphRows[0]?.sha)}o&&this.selectCommits([o],!1,!0)}selectHead(e){e&&this.headUpstreamSha?this.selectCommits([this.headUpstreamSha],!1,!0):this.headSha&&this.selectCommits([this.headSha],!1,!0)}getAvailableColumnAndUseIt(){let e=0;for(;this.columnsUsed[e];)e+=1;return this.columnsUsed[e]=!0,e}getColumns(e){this.hasMergeNodeChildBySha[e.sha]&&delete this.hasMergeNodeChildBySha[e.sha];const t=e.parents||[],n=this.columnsToFreeWhenFound[e.sha];if(void 0!==n)for(let e=0;e<n.length;e+=1)delete this.columnsUsed[n[e]];let o=0;const r=this.reserverInfoBySha[e.sha];let i,s;void 0!==r?.column?(o=r.column,delete this.reserverInfoBySha[e.sha]):o=this.getAvailableColumnAndUseIt();for(let n=0;n<t.length;n+=1)if(i=t[n],e.type===f.lH&&(this.hasMergeNodeChildBySha[i]=!0),s=this.reserverInfoBySha[i],0===n&&void 0!==s?.column&&s?.column!==o){const t=this.columnsToFreeWhenFound[i]||[],n=s?.type===f.kP&&e.type!==f.kP&&r?.newestDate>s?.newestDate;(s?.column>o||n)&&!this.hasMergeNodeChildBySha[i]?(this.reserverInfoBySha[i]={type:e.type,newestDate:r?.newestDate,column:o},t.push(s.column)):t.push(o),this.columnsToFreeWhenFound[i]=t}else void 0===s?.column&&(this.reserverInfoBySha[i]={type:e.type,newestDate:r?.column===o?r?.newestDate:e.date,column:0===n?o:this.getAvailableColumnAndUseIt()});return o}getFilteredHeadsForGraphRow(e,t){return e.heads.filter((e=>e.isCurrentHead||(t?void 0!==this.includeOnlyRefsById[U(L.V.HEAD,e)]:!this.excludeByType.heads&&void 0===this.excludeRefsById[U(L.V.HEAD,e)])))}getFilteredRemotesForGraphRow(e,t){return e.remotes.filter((e=>t?void 0!==this.includeOnlyRefsById[U(L.V.REMOTE,e)]||!e.owner||void 0!==this.includeOnlyRemotesByName[e.owner]:(!this.excludeByType.remotes||e.owner&&this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0)&&void 0===this.excludeRefsById[U(L.V.REMOTE,e)]&&(!e.owner||void 0===this.excludeRemotesByName[e.owner])))}getFilteredTagsForGraphRow(e,t,n){const o=t&&Object.values(this.includeOnlyRefsById).some((e=>e.type===L.V.TAG)),r=t&&(this.getFilteredHeadsForGraphRow(e,t).length>0||this.getFilteredRemotesForGraphRow(e,t).length>0);return e.tags.filter((e=>o?void 0!==this.includeOnlyRefsById[U(L.V.TAG,e)]:!this.excludeByType.tags&&void 0===this.excludeRefsById[U(L.V.TAG,e)]&&(!t||r||n)))}loadRowsbySha(e){this.orderedGraphRows=[],this.processedGraphRowBySha={},this.childrenBySha={},this.reserverInfoBySha={},this.columnsToFreeWhenFound={},this.columnsUsed={};const t=new Map,n={},o=[],r=[];this.branchUpstreamRowIndices=[];const i=[],s=[],a=[],l=[],c={};if(de(this.workDirStats)&&e.length>0&&!ce(e[0].type)){const t=function(e){const t=e.find(le);return t?.sha||void 0}(e),n={sha:f.ch,parents:t?[t]:[],author:"",email:"",date:(new Date).getTime(),message:"",type:f.ch,heads:[],remotes:[],tags:[],childRefs:{heads:[],tags:[],remotes:[]}};this.workDirStats.context&&(n.contexts={row:this.workDirStats.context}),e.unshift(n)}else!de(this.workDirStats)&&e.length>0&&ce(e[0].type)&&e.shift();const d=Object.keys(this.includeOnlyRefsById).length>0;e.forEach(((e,h)=>{const u=this.childrenBySha[e.sha]?.length>0,p=e.heads?.length>0?this.getFilteredHeadsForGraphRow(e,d):[],m=e.remotes?.length>0?this.getFilteredRemotesForGraphRow(e,d):[],g=e.tags?.length>0?this.getFilteredTagsForGraphRow(e,d,Boolean(c[e.sha]||u)):[],b=e.parents?.length>0?e.parents.filter((e=>!n[e])):[],v=p.length>0||m.length>0||g.length>0,y=p.length>0||m.length>0;if(e.type!==f.o$&&e.type!==f.lH||c[e.sha]){if(e.type===f.kP&&this.excludeByType.stashes&&(n[e.sha]=!0),!n[e.sha]&&b.length>0){let e;for(e of b)c[e]=!0}}else e.type!==f.o$&&e.type!==f.lH||c[e.sha]||v||u||(n[e.sha]=!0);const w=n[e.sha],{summary:C,body:x}=this.getSummaryAndBody(e.message),S={...e,heads:p,remotes:m,tags:g,parents:b,column:w?0:this.getColumns(e),edgeColumnMaxes:0,edges:{},hasRefs:v,summary:C,body:x,childRefs:{heads:[],tags:[],remotes:[]}};if(!w){let n;const c=t.get(e.sha);c?.length&&(c.sort(((e,t)=>{if(e.parentIndexScore<t.parentIndexScore)return-1;if(e.parentIndexScore>t.parentIndexScore)return 1;if(e.parentIndexScore===t.parentIndexScore){if(e.rowEntered<t.rowEntered)return-1;if(e.rowEntered>t.rowEntered)return 1}return 0})),n=c[0],S.childRefs={heads:[...n?.heads||[]],remotes:[...n?.remotes||[]],tags:[...n?.tags||[]]},t.delete(e.sha));for(let o=0;o<b.length;o+=1){const r=b[o];this.childrenBySha[r]||(this.childrenBySha[r]=[]),this.childrenBySha[r].push(e.sha);let i=t.get(r);(y||n)&&void 0===i&&(i=[],t.set(r,i)),y?i?.unshift({sha:e.sha,parentIndexScore:o,rowEntered:h,heads:p,remotes:m,tags:g}):n&&i?.unshift({...n,parentIndexScore:o,rowEntered:h})}const d=this.orderedGraphRows.length;if(S.rowIndex=d,p.length>0&&(i.push(d),p.some((e=>e.isCurrentHead))&&(this.headSha=S.sha,o.push(d))),m.length>0){s.push(d);for(const e of m)e.current&&(r.push(d),this.headUpstreamSha=S.sha),this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0&&this.branchUpstreamRowIndices.push(d)}g.length>0&&a.push(d),e.type===f.kP&&l.push(d),this.orderedGraphRows.push(S)}this.processedGraphRowBySha[e.sha]=S})),this.markerRowIndices={...this.markerRowIndices,head:o,upstream:r,localBranches:i,remoteBranches:s,tags:a,stashes:l},clearInterval(this.timelinesInterval),this.updateTimelines(),this.timelinesInterval=setInterval((()=>{this.clearTimelines(),this.updateTimelines(),this.setState({processedRows:[...this.orderedGraphRows]})}),9e5),this.onGraphVisibleRowsUpdated()}getSummaryAndBody(e){const t={summary:e.trim()},n=t.summary.indexOf("\n");return-1!==n&&(t.body=t.summary.substring(n+1).trim().replace(/\n+(?:\s+\n+)?/g," | "),t.summary=t.summary.substring(0,n)),t}updateRowStatsConstraints(){this.rowStatsConstraints=function(e){const{length:t}=e;if(0===t)return{min:0,max:0};if(1===t)return{min:0,max:e[0]};e.sort(((e,t)=>e-t));const n=e[0],o=e[Math.floor(.25*t)],r=e[Math.floor(.5*t)],i=e[Math.floor(.75*t)],s=e[t-1],a=i-o;return{min:Math.max(n,r-1.5*a),max:Math.min(s,r+1.5*a)}}(null!=this.rowsStats?Object.values(this.rowsStats).map((e=>e.additions+e.deletions)):[])}updateTimelines(){const e=function(){const e=new Date,t={hour:[],day:[],week:[],month:[],year:[]};let n;for(n=1;n<=m.YJ.hour;n+=1)t.hour.push({date:e.getTime()-36e5*n,label:1===n?"Timeline-1HourAgo":"Timeline-NHoursAgo",timeUnit:"hour",value:n});for(n=1;n<=m.YJ.day;n+=1)t.day.push({date:e.getTime()-864e5*n,label:1===n?"Timeline-Yesterday":"Timeline-NDaysAgo",timeUnit:"day",value:n});for(n=1;n<=m.YJ.week;n+=1)t.week.push({date:e.getTime()-6048e5*n,label:1===n?"Timeline-1WeekAgo":"Timeline-NWeeksAgo",timeUnit:"week",value:n});const o=new Date;for(o.setHours(0,0,0,0),n=1;n<=m.YJ.month;n+=1)o.setMonth(o.getMonth()-1),o.setHours(0,0,0,0),t.month.push({date:o.getTime(),label:1===n?"Timeline-1MonthAgo":"Timeline-NMonthsAgo",timeUnit:"month",value:n});const r=new Date;for(r.setHours(0,0,0,0),n=1;n<=m.YJ.year;n+=1){let e;switch(r.setFullYear(r.getFullYear()-1),r.setHours(0,0,0,0),n){case 1:e="Timeline-1YearAgo";break;case m.YJ.year:e="Timeline-NPlusYearsAgo";break;default:e="Timeline-NYearsAgo"}t.year.push({date:r.getTime(),label:e,timeUnit:"year",value:n})}return t}();Object.values(e).forEach((e=>{e.forEach((e=>{const{date:t}=e,n=this.orderedGraphRows.find((e=>e.date<t));n&&this.processedGraphRowBySha[n.sha]&&(this.processedGraphRowBySha[n.sha].timeLineEntry=e)}))}))}clearTimelines(){Object.keys(this.processedGraphRowBySha).forEach((e=>{this.processedGraphRowBySha[e].timeLineEntry&&delete this.processedGraphRowBySha[e].timeLineEntry}))}cleanupSelections(){const e=Object.keys(this.isSelectedBySha);for(let t=0;t<e.length;t+=1){const n=e[t];this.processedGraphRowBySha[n]||delete this.isSelectedBySha[n]}}getColumnColorByColumn(e){const t=this.getNumGraphColumns(e),n=this.maxColumns>t?this.maxColumns:t,o={};for(let i=0;i<=n;i+=1)if(i<t){const t=e[x(i)];o[i]="rgba"===(r=u(t)).type?`rgba(${r.r}, ${r.g}, ${r.b}, ${Number(r.a.toFixed(2))})`:`hsla(${r.h}, ${(100*r.s).toFixed(2)}%, ${(100*r.l).toFixed(2)}%, ${Number(r.a.toFixed(2))})`}else{const e=o[i%t];o[i]=e}var r;return o}getNumGraphColumns(e){const t=e["--num-columns-supported"],n=Number.parseInt(t,m.uK);return Number.isNaN(n)?m.uK:n}expandLastZoneMinWidthForScrollbar(e){const t=e[e.length-1]?.type;if(!t)return;const n=q(this.props.cssVariables,!0),o=m.qi[t].minimumWidth+n,r=this.graphZonesByType[t];if(!r||null!=r.maximumWidth&&o>r.maximumWidth)return;r.minimumWidth=o;const i=m.qi[t].showIconWidth;null!=i&&(r.showIconWidth=i+n),r.currentWidth<r.minimumWidth&&(r.currentWidth=r.minimumWidth),r.preferredWidth<r.minimumWidth&&(r.preferredWidth=r.minimumWidth)}ensureZoneWidthsMatchGraphWidth(e,t){const n=K(e);n>t&&this.shrinkZoneWidthsToFitWidth(e,t),n<t&&this.expandZoneWidthsToFitWidth(e,t)}shrinkZoneWidthsToFitWidth(e,t,n){let o=K(e);for(;o>t;){const r=V(e,n);if(!r)break;const i=K(e,r.type);if(i+r.currentWidth>t){const n=oe(r,e,t-i);this.updateWidthByZone(n,r.type)}o=K(e)}}getOrderedActiveGraphZones(){return this.graphZoneOrdering.sort(((e,t)=>this.graphZonesByType[e].order<this.graphZonesByType[t].order?-1:this.graphZonesByType[e].order>this.graphZonesByType[t].order?1:0)).filter((e=>!this.graphZonesByType[e].isHidden)).map((e=>this.graphZonesByType[e]))}expandZoneWidthsToFitWidth(e,t,n){let o=K(e);for(;o<t;){const r=Z(e,n);if(!r)break;const i=K(e,r.type),s=r.maximumWidth?Math.min(r.maximumWidth,r.preferredWidth||1/0):r.preferredWidth||0;if(i+r.currentWidth<t){let n=t-i;!Y(r.type,e)&&n>s&&(n=s),n=oe(r,e,n),this.updateWidthByZone(n,r.type)}o=K(e)}}onGraphHeaderRowMouseDown=e=>{1===e.button&&e.preventDefault()};onToggleRefNodesShown=(e,t,n,o)=>{t.forEach((e=>{n&&this.excludeRefsById[e.id]?delete this.excludeRefsById[e.id]:n||(this.excludeRefsById[e.id]=e)})),this.excludeRemotesByName=this.getExcludeRemotesByName(),this.props.onToggleRefsVisibilityClick&&this.props.onToggleRefsVisibilityClick(e,t,n,o?this.processedGraphRowBySha[o]:void 0),this.processRows(this.props.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})};cleanEdgeCaches(){$e={},Me={},Oe={},ke={},I={}}onZoneEnter=(e,t,n,o)=>{t!==m.jZ&&(n&&o&&this.onRefNodeUnhovered(e,n,o),this.onRefZoneUnhovered())};adjustResizedGraphZone(e,t,n,o){if(n?.width){const r=t.currentWidth;this.updateWidthByZone(n.width,t.type,o);const i=ie(t.type,e),s=this.graphZonesByType[t.type];r>s.currentWidth&&this.expandZoneWidthsToFitWidth(e,this.graphWidth,i+1),r<s.currentWidth&&this.shrinkZoneWidthsToFitWidth(e,this.graphWidth,i-1)}}dimRowsOfSelectedCommit(e){this.setState({dimRowsOfSelectedCommit:e})}onGraphContainerBlurred=(e,t,n)=>{t&&n&&this.onRefNodeUnhovered(e,t,n),this.onRefZoneUnhovered()};onGraphContainerMouseEnter=e=>{this.props.onGraphMouseEnter&&this.props.onGraphMouseEnter(e)};onGraphContainerMouseLeave=e=>{this.props.onGraphMouseLeave&&this.props.onGraphMouseLeave(e)};onGraphResized=G(((e,t)=>{const n=Math.floor(t),o=Math.floor(e),r=n!==this.graphHeight,i=o!==this.graphWidth,s={};if(r&&(this.graphHeight=n,s.height=n),i){this.graphWidth=o;const e=this.getOrderedActiveGraphZones();this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),s.width=this.graphWidth,s.graphZones=e}(r||i)&&(this.setState(s),r&&this.onGraphVisibleRowsUpdatedThrottled(),this.props.onGraphResized&&this.props.onGraphResized(this.graphWidth,this.graphHeight))}));onGraphVisibleRowsUpdated(){if(!this.props.onGraphVisibleRowsChanged||!this.orderedGraphRows||!this.orderedGraphRows.length)return;const{top:e,bottom:t}=this.getTopAndBottomVisibleRowIndex();-1===e||-1===t||e>=this.orderedGraphRows.length||t>=this.orderedGraphRows.length||e===this.lastTopVisibleRowIndex&&t===this.lastBottomVisibleRowIndex||(this.lastTopVisibleRowIndex=e,this.lastBottomVisibleRowIndex=t,this.props.onGraphVisibleRowsChanged&&this.props.onGraphVisibleRowsChanged(this.orderedGraphRows[e],this.orderedGraphRows[t]))}getCurrentPlatform(){return this.props.platform||"darwin"}isMacOSPlatform(){return"darwin"===this.getCurrentPlatform()}getGraphColumnSettingFromZoneType(e){return{width:e.preferredWidth||0,isHidden:e.isHidden,mode:e.mode,order:e.order}}decorateWithHelmet=(e,t,n)=>{const o=function(e){const t=e||C;let n="";const o=Object.keys(t);n+=".gk-graph {\n";for(const e of o)n+=`${e}: ${t[e]};\n`;return n+="}\n",n}(t);return a().createElement(a().Fragment,null,a().createElement("style",{nonce:n},o),a().createElement("div",{className:"gk-graph"},e))};render(){const{columnsSettings:e,isInUnsupportedRebase:t,isCommitting:n,repoPath:o,nonce:r,wipMessageEditable:s}=this.props,{avatarUrlByEmail:l,columnColorByColumn:c,contexts:d,createRefFormData:h,cssVariablesWithDefaults:u,currentlyHoveredCommitSha:p,dimMergeCommits:f,dimRowsOfSelectedCommit:g,enableShowHideRefsOptions:b,highlightRowsOnRefHover:v,showGhostRefsOnRowHover:y,showRemoteNamesOnRefs:w,enabledRefMetadataTypes:C,enabledScrollMarkerTypes:x,graphZones:S,hasMoreCommits:_,height:T,highlightedShas:R,hoveredRefGroup:k,hoveredRefZoneSha:E,themeOpacityFactor:O,isContainerWindowFocused:I,isLoadingRows:M,rowsStatsLoading:D,numGraphColumns:$,pendingCommitMessageSummary:A,processedRows:N,refMetadataById:P,useAuthorInitialsForAvatars:z,scrollToAlignment:H,scrollToIndex:L,scrollTop:F,scrollLeft:G,shaLength:W,width:U,workDirStats:j}=this.state,V=i()("flex","graph-container"),Z=(q=N,e=>e===q.length?"SHOW_MORE_COMMITS":q[e].sha);var q;const K=(Y=e=>Z(e),({cellCache:e,cellRenderer:t,columnSizeAndPositionManager:n,columnStartIndex:o,columnStopIndex:r,deferredMeasurementCache:i,horizontalOffsetAdjustment:s,isScrolling:a,parent:l,rowSizeAndPositionManager:c,rowStartIndex:d,rowStopIndex:h,styleCache:u,verticalOffsetAdjustment:p,visibleColumnIndices:f,visibleRowIndices:m})=>{const g=[],b=e,v=n.areOffsetsAdjusted()||c.areOffsetsAdjusted(),y=!a&&!v;for(let e=d;e<=h;e+=1){const d=c.getSizeAndPositionOfCell(e);for(let c=o;c<=r;c+=1){const o=n.getSizeAndPositionOfCell(c),r=c>=f.start&&c<=f.stop&&e>=m.start&&e<=m.stop,h=`${e}-${c}`;let v;y&&u[h]?v=u[h]:i&&!i.has(e,c)?v={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(v={height:d.size,left:o.offset+s,position:"absolute",top:d.offset+p,width:o.size},u[h]=v);const w={columnIndex:c,isScrolling:a,isVisible:r,key:h,parent:l,rowIndex:e,style:v};let C;if(!a||s||p)C=t(w);else{const n=Y(e);b[h]&&b[h].realKeyForCell===n||(b[h]={realKeyForCell:n,cell:t(w)}),C=b[h].cell}null!=C&&g.push(C)}}return g});var Y;const X=this.getLeftGutterWidth(),Q=this.getRightGutterWidth(),J=this.getRightGutterBoxShadowAlpha(O),ee=this.getLeftGutterBoxShadowAlpha(O),te=this.getNodeOffsetByColumn(),ne=this.getNodeOpacityByColumn(),oe=ie(m.jZ,S),re=ie(m.Wm,S),se=-1!==oe&&-1!==re&&re-oe==1,ae=!k,le={avatarUrlByEmail:l,createRefFormData:h,dimMergeCommits:f,dimRowsOfSelectedCommit:g,enableShowHideRefsOptions:b,highlightRowsOnRefHover:v,showGhostRefsOnRowHover:y,showRemoteNamesOnRefs:w,enabledRefMetadataTypes:C,enabledScrollMarkerTypes:x,isInUnsupportedRebase:t,isCommitting:n||!1,isContainerWindowFocused:I,pendingCommitMessageSummary:A,workDirStats:j,repoPath:o,columnColorByColumn:c,currentlyHoveredCommitSha:p,cssVariables:u,graphZoneModeConstants:this.graphZoneModeConstants,graphZones:S,hasMoreCommits:_,height:T,highlightedShas:R,hoveredRefGroup:k,hoveredRefZoneSha:E,includeOnlyRefsById:this.includeOnlyRefsById,includeOnlyRemotesByName:this.includeOnlyRemotesByName,isLoadingRows:M,isSelectedBySha:this.isSelectedBySha,leftGutterBoxShadowAlpha:ee,leftGutterWidth:X,nodeOffsetByColumn:te,nodeOpacityByColumn:ne,nonce:r,numGraphColumns:$,processedRows:N,processedGraphRowBySha:this.processedGraphRowBySha,refMetadataById:P,rightGutterBoxShadowAlpha:J,rightGutterWidth:Q,rowStatsConstraints:this.rowStatsConstraints,rowsStats:this.rowsStats,useAuthorInitialsForAvatars:z,scrollToAlignment:H,scrollLeft:G,scrollTop:F,shaLength:W,shouldShowRefLine:se,width:U,wipMessageEditable:s||!1,onMissingAvatar:this.onMissingAvatar,onMissingRefMetadata:this.onMissingRefMetadata,clearCurrentlyHoveredGraphCommit:this.onClearCurrentlyHoveredGraphCommit,setAsCurrentlyHoveredGraphCommit:this.onCurrentlyHoveredGraphCommit,onClickRef:this.onClickRef,onClickCommit:this.onClickCommit,onDoubleClickCommit:this.onDoubleClickCommit,onBlurWipNodeInput:this.onBlurWipNodeInput,onFocusWipNodeInput:this.onFocusWipNodeInput,onDoubleClickRef:this.onDoubleClickRef,onMessageChange:this.onMessageChange,onRefBeginDrag:this.onRefBeginDrag,onRefCanDrag:this.onRefCanDrag,onRefCanDrop:this.onRefCanDrop,onRefCreate:this.onRefCreate,onRefCreateCancel:this.onRefCreateCancel,onRefCreateContextMenu:this.onRefCreateContextMenu,onRefDragEnter:this.onRefDragEnter,onRefDragLeave:this.onRefDragLeave,onRefDrop:this.onRefDrop,onRefEndDrag:this.onRefEndDrag,onRefNodeHovered:this.onRefNodeHovered,onRefNodeUnhovered:this.onRefNodeUnhovered,onRefZoneHovered:this.onRefZoneHovered,onRefZoneUnhovered:this.onRefZoneUnhovered,onToggleRefNodesShown:this.onToggleRefNodesShown,onCommitContextMenu:this.onCommitContextMenu,onShowContextMenuForGroupedRef:this.onRefContextMenu,getExternalIcon:this.getIconCallback,formatCommitDateTime:this.formatCommitDateTimeCallback,formatRefShorthand:this.formatRefShorthandCallback,isRefShorthandValid:this.isRefShorthandValidCallback,translate:this.translateCallback},ce={[m.jZ]:Ms(le,Z),[m.Wm]:ls(le,Z),[m.KE]:ji(le,Z),[m.GF]:yi(le,Z),[m.PL]:wi(le,Z),[m.av]:Vi(le,Z),[m.WD]:mi(le,Z),[m.Gn]:Ds(le,Z)},de=S.map(((e,t)=>a().createElement(Do,{branchUpstreamRowIndices:this.branchUpstreamRowIndices,cellRenderersByIds:ce,columnIndex:t,enabledScrollMarkerTypes:x,enableResizer:ae,getExternalIcon:this.getIconCallback,getKeyForCell:Z,graphHeight:T-m.rl,graphWidth:U,graphZones:S,graphZoneType:e.type,hasMoreCommits:_,horizontalScrollHeight:this.getHorizontalScrollHeight(e.type,u),isLoadingRows:M,key:`${e.type}ColumnContainer`,markerColors:this.getMarkerColors(),markerRowIndices:this.markerRowIndices,onResize:this.onGraphZoneResize,onResizeEnd:this.onGraphZoneResizeEnd,onScroll:this.onScrollForZone,onScrollToRowCausedUpdate:e.type===m.jZ?this.onScrollToRowCausedUpdateForRefZone:void 0,onZoneEnter:t=>this.onZoneEnter(t,e.type,k,E),rowCount:N.length,scrollLeft:G,scrollToAlignment:e.type===m.jZ?H:void 0,scrollToIndex:e.type===m.jZ?L:void 0,scrollTop:F,smartCellRangeRenderer:K,translate:this.translateCallback,verticalScrollWidth:this.getVerticalScrollWidth(e.type,u)}))),he=this.graphContainerRef?.current&&a().createElement(si,{columnsSettings:e,dragAppendToContainer:this.graphContainerRef?.current,enableResizer:ae,enableShowHideRefsOptions:b,excludeRefsById:this.excludeRefsById,getExternalIcon:this.getIconCallback,graphZones:S,headerContext:d?.header,height:T,includeOnlyRefsById:this.includeOnlyRefsById,onColumnReOrdered:this.onGraphColumnReOrdered,onFilterColumnClick:this.onFilterColumnClick,onGraphZoneResize:this.onGraphZoneResize,onGraphZoneResizeEnd:this.onGraphZoneResizeEnd,onPopupGraphHeaderContextMenu:this.onPopupGraphHeaderContextMenu,onSettingsClick:this.onSettingsClick,onToggleRefNodesShown:this.onToggleRefNodesShown,repoPath:o,rowsStatsLoading:D,settingsContext:d?.settings,showRemoteNamesOnRefs:w,translate:this.translateCallback,width:U}),ue=a().createElement("div",{className:"graph-component","data-vscode-context":B(d?.graph),onBlur:e=>this.onGraphContainerBlurred(e,k,E),onMouseEnter:this.onGraphContainerMouseEnter,onMouseLeave:this.onGraphContainerMouseLeave,ref:this.graphContainerRef,style:{height:"100%",width:"100%",position:"absolute"},tabIndex:-1},he,a().createElement("div",{className:R&&Object.keys(R).length?i()(V,"graph-highlighted"):V,id:"graph-container",onKeyDown:this.onKeyDown,onMouseDown:this.onGraphHeaderRowMouseDown,style:{height:T,width:U},tabIndex:-1},de));return this.decorateWithHelmet(ue,u,r)}}var As=$s},7154:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(6689),r=n.n(o);class i extends r().PureComponent{horizontalScrollRef=r().createRef();scrollabbleContentRef=r().createRef();verticalScrollRef=r().createRef();outerHorizontalScrollRef=r().createRef();updateScrollbarValues(e,t){this.horizontalScrollRef?.current&&(this.horizontalScrollRef.current.scrollLeft=e||0),this.verticalScrollRef?.current&&(this.verticalScrollRef.current.scrollTop=t||0)}componentDidUpdate(e){const{scrollLeft:t,scrollTop:n}=this.props;e.scrollLeft===t&&e.scrollTop===n||this.updateScrollbarValues(t,n)}onHorizontalScroll(e){this.props.onScroll&&this.props.onScroll({clientHeight:this.props.height||0,clientWidth:e.target.clientWidth,scrollHeight:this.getAdjustedContentHeight(),scrollLeft:e.target.scrollLeft,scrollTop:this.props.scrollTop||0,scrollWidth:e.target.scrollWidth})}onVerticalScroll(e){this.props.onScroll&&this.props.onScroll({clientHeight:e.target.clientHeight,clientWidth:this.props.width||0,scrollHeight:e.target.scrollHeight,scrollLeft:this.props.scrollLeft||0,scrollTop:e.target.scrollTop,scrollWidth:this.props.contentWidth||0})}componentDidMount(){this.updateScrollbarValues(this.props.scrollLeft,this.props.scrollTop)}hasHorizontalScroll(){const{contentWidth:e,displayHorizontalScrollbar:t,forceHorizontalScrollbar:n,width:o}=this.props;return n||t&&o<e}hasVerticalScroll(){const{displayVerticalScrollbar:e,forceVerticalScrollbar:t,height:n}=this.props;return t||e&&n<this.getAdjustedContentHeight()}getHorizontalScrollbarTickness(){return parseInt(this.outerHorizontalScrollRef.current?.clientHeight,10)||0}getAdjustedContentHeight(){return this.props.contentHeight+this.getHorizontalScrollbarTickness()}adjustScrollWhileDragging(e){const t=this.getAdjustedContentHeight();if(!this.scrollabbleContentRef.current||this.props.height>=t||!this.props.onScroll)return;const n=this.scrollabbleContentRef.current.getBoundingClientRect(),o=e.clientY-n.top,r=Math.abs(t-this.props.height);let i;if(this.props.scrollTop>0&&o<=20){const e=this.props.scrollTop-20;i={clientHeight:n.height,clientWidth:n.width,scrollHeight:r,scrollLeft:this.props.scrollLeft||0,scrollTop:e>0?e:0,scrollWidth:this.props.contentWidth||0}}if(this.props.scrollTop<r&&o>=this.props.height-20){const e=this.props.scrollTop+20;i={clientHeight:n.height,clientWidth:n.width,scrollHeight:r,scrollLeft:this.props.scrollLeft||0,scrollTop:e<r?e:r,scrollWidth:this.props.contentWidth||0}}i&&this.props.onScroll(i)}render(){const{children:e,contentHeight:t,contentWidth:n,forceHorizontalScrollbar:o,forceVerticalScrollbar:i,height:s,width:a}=this.props,l=this.hasVerticalScroll(),c=this.hasHorizontalScroll(),d=c&&r().createElement("div",{className:"scrollbar-outer horizontal",ref:this.outerHorizontalScrollRef,style:{top:`calc(${s}px - var(--scrollable-scrollbar-thickness))`,width:a}},r().createElement("div",{className:"scrollbar-inner horizontal_scrollbar",onScroll:e=>this.onHorizontalScroll(e),ref:this.horizontalScrollRef,style:{overflowX:o?"scroll":"auto",width:l?`calc(${a}px - var(--scrollable-scrollbar-thickness))`:a}},r().createElement("div",{style:{height:"1px",width:n}}))),h=l&&r().createElement("div",{className:"scrollbar-outer vertical",style:{height:s}},r().createElement("div",{className:"scrollbar-inner vertical_scrollbar",onScroll:e=>this.onVerticalScroll(e),ref:this.verticalScrollRef,style:{overflowY:i?"scroll":"auto",height:c?`calc(${s}px - var(--scrollable-scrollbar-thickness))`:s}},r().createElement("div",{style:{height:`calc(${t}px + var(--scrollable-scrollbar-thickness))`,width:"1px"}})));return r().createElement("div",{className:"scrollbar-container"},r().createElement("div",{className:"scrollable-content",onDragOverCapture:e=>this.adjustScrollWhileDragging(e),ref:this.scrollabbleContentRef},e),d,h)}}var s=i},827:(e,t,n)=>{n.d(t,{Gu:()=>c,S7:()=>r,br:()=>s,ch:()=>l,kP:()=>a,lH:()=>i,o$:()=>o});const o="commit-node",r="merge-conflict-node",i="merge-node",s="unsupported-rebase-warning-node",a="stash-node",l="work-dir-changes";var c=(e=>(e.RowEntry="rowEntry",e.Tooltip="tooltip",e))(c||{})},8289:()=>{},2149:()=>{},3308:(e,t,n)=>{n.d(t,{$0:()=>s,$s:()=>d,An:()=>h,B:()=>N,B8:()=>k,GF:()=>re,Gn:()=>ee,IX:()=>Z,It:()=>S,KE:()=>oe,LG:()=>y,MQ:()=>X,NP:()=>f,O5:()=>m,OR:()=>ge,Oi:()=>G,P3:()=>p,PB:()=>D,PL:()=>ie,QW:()=>L,Qh:()=>he,RG:()=>ce,Rg:()=>$,SZ:()=>F,Um:()=>le,VB:()=>q,Vh:()=>P,WD:()=>ae,Wm:()=>ne,Wu:()=>g,X9:()=>U,Y8:()=>w,YJ:()=>me,aV:()=>j,ai:()=>pe,am:()=>A,at:()=>u,av:()=>se,b4:()=>J,cZ:()=>a,dF:()=>r,dH:()=>K,d_:()=>de,eq:()=>v,iq:()=>o,jZ:()=>te,j_:()=>E,jg:()=>_,jn:()=>b,l3:()=>c,lG:()=>R,m8:()=>C,mt:()=>z,mu:()=>Q,os:()=>Y,pj:()=>O,q1:()=>x,qG:()=>l,qi:()=>fe,rl:()=>i,uK:()=>ue,v1:()=>H,wd:()=>V,wi:()=>W,wy:()=>I,xI:()=>T,yv:()=>M,ze:()=>B});const o="#199489",r=3,i=26,s=28,a=22,l=50*s,c=.5,d=3,h=3,u=s,p=a,f=3,m=p/2,g=56,b=56,v=32,y=a,w=y-4,C=55,x=50,S="short+short",_=55,T=50,R=50,k=50,E=55,O=18,I=32,M=2,D=6,$=14,A=5,N=$+A,P=10,z=55,H=50,L=10,F=25,G=58,B=22,W=2,U={dark:1,light:.5},j=10,V=12,Z=6,q=3,K=12,Y="auto",X="center",Q=7,J=4,ee="timelineMessage",te="ref",ne="graph",oe="message",re="author",ie="datetime",se="sha",ae="changes";var le=(e=>(e.Compact="compact",e.Rich="rich",e.Text="text",e))(le||{}),ce=(e=>(e.Block="block",e.FullLine="fullLine",e.ThinLine="thinLine",e))(ce||{});const de={block:{type:"block",baseHeight:1*s,minHeight:5,maxHeight:20},fullLine:{type:"fullLine",baseHeight:.5*s,minHeight:2,maxHeight:4},thinLine:{type:"thinLine",baseHeight:.25*s,minHeight:1,maxHeight:2}},he={stashes:{type:"stashes",colorCssKey:"--color-graph-scroll-marker-stashes",lanes:[0],shape:"block"},tags:{type:"tags",colorCssKey:"--color-graph-scroll-marker-tags",lanes:[2],shape:"block"},remoteBranches:{type:"remoteBranches",colorCssKey:"--color-graph-scroll-marker-remote-branches",lanes:[2],shape:"block"},localBranches:{type:"localBranches",colorCssKey:"--color-graph-scroll-marker-local-branches",lanes:[0],shape:"block"},highlights:{type:"highlights",colorCssKey:"--color-graph-scroll-marker-highlights",lanes:[1],shape:"block"},upstream:{type:"upstream",colorCssKey:"--color-graph-scroll-marker-upstream",lanes:[1,2],shape:"block"},head:{type:"head",colorCssKey:"--scroll-marker-head-color",lanes:[0,1],shape:"block"},selection:{type:"selection",colorCssKey:"--color-graph-scroll-marker-selection",lanes:[0,1,2],shape:"fullLine"}},ue=10,pe=6,fe={[re]:{headerLabelUntranslated:"GraphHeader-CommitAuthor",isCustomizable:!0,listId:"commit-author-zone",minimumWidth:v,showIconWidth:C},[ie]:{headerLabelUntranslated:"GraphHeader-CommitDateTime",isCustomizable:!0,listId:"commit-date-time-zone",minimumWidth:x,showIconWidth:_},[oe]:{headerLabelUntranslated:"GraphHeader-CommitMessage",isCustomizable:!0,listId:"commit-message-zone",minimumWidth:k,showIconWidth:E},[se]:{headerLabelUntranslated:"GraphHeader-CommitSha",isCustomizable:!0,listId:"commit-sha-zone",minimumWidth:T,showIconWidth:R},[ne]:{headerLabelUntranslated:"GraphHeader-CommitGraph",isCustomizable:!0,listId:"commit-zone",minimumWidth:g,showIconWidth:b},[te]:{headerLabelUntranslated:"GraphHeader-BranchTag",isCustomizable:!0,listId:"ref-zone",minimumWidth:I,showIconWidth:z},[ae]:{headerLabelUntranslated:"GraphHeader-Changes",isCustomizable:!0,listId:"changes-zone",minimumWidth:H,showIconWidth:G}},me={hour:23,day:6,week:4,month:11,year:6},ge={added:0,deleted:0,modified:0}},9453:(e,t,n)=>{n.d(t,{$M:()=>i,AI:()=>s,mQ:()=>o,uq:()=>r});const o="pullRequest",r="upstream",i="issue",s=[o,r,i]},7334:(e,t,n)=>{function o(e){switch(e){case"github":return"GitHub";case"githubEnterprise":return"GitHub Enterprise";case"gitlab":return"GitLab";case"gitlabSelfHosted":return"GitLab Self-Hosted";case"azureDevops":return"Azure DevOps";case"bitbucket":return"Bitbucket";case"bitbucketServer":return"Bitbucket Server";default:return e}}n.d(t,{y:()=>o})},8649:(e,t,n)=>{n.d(t,{V:()=>o});const o={HEAD:"head",REMOTE:"remote",TAG:"tag"}},664:()=>{},6756:()=>{},3316:e=>{function t(e,t,n,o){var r,i=null==(r=o)||"number"==typeof r||"boolean"==typeof r?o:n(o),s=t.get(i);return void 0===s&&(s=e.call(this,o),t.set(i,s)),s}function n(e,t,n){var o=Array.prototype.slice.call(arguments,3),r=n(o),i=t.get(r);return void 0===i&&(i=e.apply(this,o),t.set(r,i)),i}function o(e,t,n,o,r){return n.bind(t,e,o,r)}function r(e,r){return o(e,this,1===e.length?t:n,r.cache.create(),r.serializer)}function i(){return JSON.stringify(arguments)}function s(){this.cache=Object.create(null)}s.prototype.has=function(e){return e in this.cache},s.prototype.get=function(e){return this.cache[e]},s.prototype.set=function(e,t){this.cache[e]=t};var a={create:function(){return new s}};e.exports=function(e,t){var n=t&&t.cache?t.cache:a,o=t&&t.serializer?t.serializer:i;return(t&&t.strategy?t.strategy:r)(e,{cache:n,serializer:o})},e.exports.strategies={variadic:function(e,t){return o(e,this,n,t.cache.create(),t.serializer)},monadic:function(e,n){return o(e,this,t,n.cache.create(),n.serializer)}}},1143:e=>{e.exports=function(e,t,n,o,r,i,s,a){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,i,s,a],d=0;(l=new Error(t.replace(/%s/g,(function(){return c[d++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},621:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=s(n(6689)),i=s(n(2613));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)((function(e,t,n,i,s){var a=e[t],l=void 0===a?"undefined":o(a);return r.default.isValidElement(a)?new Error("Invalid "+i+" `"+s+"` of type ReactElement supplied to `"+n+"`, expected a ReactComponent or a DOMElement. You can usually obtain a ReactComponent or DOMElement from a ReactElement by attaching a ref to it."):"object"===l&&"function"==typeof a.render||1===a.nodeType?null:new Error("Invalid "+i+" `"+s+"` of value `"+a+"` supplied to `"+n+"`, expected a ReactComponent or a DOMElement.")})),e.exports=t.default},8853:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(6689)),r=n(9864),i=s(n(2613));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)((function(e,t,n,i,s){var a=e[t];return o.default.isValidElement(a)?new Error("Invalid "+i+" `"+s+"` of type ReactElement supplied to `"+n+"`,expected an element type (a string , component class, or function component)."):(0,r.isValidElementType)(a)?null:new Error("Invalid "+i+" `"+s+"` of value `"+a+"` supplied to `"+n+"`, expected an element type (a string , component class, or function component).")})),e.exports=t.default},5638:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,o,r,i){var s=o||"<<anonymous>>",a=i||n;if(null==t[n])return new Error("The "+r+" `"+a+"` is required to make `"+s+"` accessible for users of assistive technologies such as screen readers.");for(var l=arguments.length,c=Array(l>5?l-5:0),d=5;d<l;d++)c[d-5]=arguments[d];return e.apply(void 0,[t,n,o,r,i].concat(c))}},e.exports=t.default},2613:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,o,r,i,s){var a=r||"<<anonymous>>",l=s||o;if(null==n[o])return t?new Error("Required "+i+" `"+l+"` was not specified in `"+a+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),h=6;h<c;h++)d[h-6]=arguments[h];return e.apply(void 0,[n,o,a,i,l].concat(d))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},2703:(e,t,n)=>{var o=n(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},5697:(e,t,n)=>{e.exports=n(2703)()},414:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},977:(e,t,n)=>{var o=n(7137),r=n(2584);e.exports=function(){return o.apply(this,r(arguments)).on("cloned",(function(t){e(t),r(t.getElementsByTagName("*")).forEach(e)}));function e(e){e.removeAttribute("data-reactid")}}},9921:(e,t)=>{var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,h=n?Symbol.for("react.concurrent_mode"):60111,u=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,f=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function C(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case d:case h:case i:case a:case s:case p:return e;default:switch(e=e&&e.$$typeof){case c:case u:case g:case m:case l:return e;default:return t}}case r:return t}}}function x(e){return C(e)===h}t.AsyncMode=d,t.ConcurrentMode=h,t.ContextConsumer=c,t.ContextProvider=l,t.Element=o,t.ForwardRef=u,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=r,t.Profiler=a,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return x(e)||C(e)===d},t.isConcurrentMode=x,t.isContextConsumer=function(e){return C(e)===c},t.isContextProvider=function(e){return C(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return C(e)===u},t.isFragment=function(e){return C(e)===i},t.isLazy=function(e){return C(e)===g},t.isMemo=function(e){return C(e)===m},t.isPortal=function(e){return C(e)===r},t.isProfiler=function(e){return C(e)===a},t.isStrictMode=function(e){return C(e)===s},t.isSuspense=function(e){return C(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===h||e===a||e===s||e===p||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===u||e.$$typeof===v||e.$$typeof===y||e.$$typeof===w||e.$$typeof===b)},t.typeOf=C},9864:(e,t,n)=>{e.exports=n(9921)},6871:(e,t,n)=>{function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function i(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,a=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==a){var l=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var d=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;d.call(this,e,t,o)}}return e}n.r(t),n.d(t,{polyfill:()=>s}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},7281:(e,t,n)=>{t.__esModule=!0;var o=c(n(5697)),r=c(n(621)),i=c(n(6689)),s=c(n(6405)),a=c(n(3464)),l=c(n(290));function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=Array(r),h=0;h<r;h++)c[h]=arguments[h];return n=o=d(this,e.call.apply(e,[this].concat(c))),o._mountOverlayTarget=function(){o._overlayTarget||(o._overlayTarget=document.createElement("div"),o._portalContainerNode=(0,a.default)(o.props.container,(0,l.default)(o).body),o._portalContainerNode.appendChild(o._overlayTarget))},o._unmountOverlayTarget=function(){o._overlayTarget&&(o._portalContainerNode.removeChild(o._overlayTarget),o._overlayTarget=null),o._portalContainerNode=null},o._renderOverlay=function(){var e=o.props.children?i.default.Children.only(o.props.children):null;if(null!==e){o._mountOverlayTarget();var t=!o._overlayInstance;o._overlayInstance=s.default.unstable_renderSubtreeIntoContainer(o,e,o._overlayTarget,(function(){t&&o.props.onRendered&&o.props.onRendered()}))}else o._unrenderOverlay(),o._unmountOverlayTarget()},o._unrenderOverlay=function(){o._overlayTarget&&(s.default.unmountComponentAtNode(o._overlayTarget),o._overlayInstance=null)},o.getMountNode=function(){return o._overlayTarget},d(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._isMounted=!0,this._renderOverlay()},t.prototype.componentDidUpdate=function(){this._renderOverlay()},t.prototype.componentWillReceiveProps=function(e){this._overlayTarget&&e.container!==this.props.container&&(this._portalContainerNode.removeChild(this._overlayTarget),this._portalContainerNode=(0,a.default)(e.container,(0,l.default)(this).body),this._portalContainerNode.appendChild(this._overlayTarget))},t.prototype.componentWillUnmount=function(){this._isMounted=!1,this._unrenderOverlay(),this._unmountOverlayTarget()},t.prototype.render=function(){return null},t}(i.default.Component);h.displayName="Portal",h.propTypes={container:o.default.oneOfType([r.default,o.default.func]),onRendered:o.default.func},t.default=h,e.exports=t.default},2856:(e,t,n)=>{t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=d(n(5697)),i=d(n(8853)),s=d(n(6689)),a=d(n(5425)),l=d(n(7487)),c=d(n(2395));function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,o));return r.handleHidden=function(){var e;r.setState({exited:!0}),r.props.onExited&&(e=r.props).onExited.apply(e,arguments)},r.state={exited:!n.show},r.onHiddenListener=r.handleHidden.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(e){e.show?this.setState({exited:!1}):e.transition||this.setState({exited:!0})},t.prototype.render=function(){var e=this.props,t=e.container,n=e.containerPadding,o=e.target,r=e.placement,i=e.shouldUpdatePosition,d=e.rootClose,h=e.children,u=e.transition,p=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["container","containerPadding","target","placement","shouldUpdatePosition","rootClose","children","transition"]);if(!(p.show||u&&!this.state.exited))return null;var f=h;if(f=s.default.createElement(l.default,{container:t,containerPadding:n,target:o,placement:r,shouldUpdatePosition:i},f),u){var m=p.onExit,g=p.onExiting,b=p.onEnter,v=p.onEntering,y=p.onEntered;f=s.default.createElement(u,{in:p.show,appear:!0,onExit:m,onExiting:g,onExited:this.onHiddenListener,onEnter:b,onEntering:v,onEntered:y},f)}return d&&(f=s.default.createElement(c.default,{onRootClose:p.onHide},f)),s.default.createElement(a.default,{container:t},f)},t}(s.default.Component);h.propTypes=o({},a.default.propTypes,l.default.propTypes,{show:r.default.bool,rootClose:r.default.bool,onHide:function(e){var t=r.default.func;e.rootClose&&(t=t.isRequired);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.apply(void 0,[e].concat(o))},transition:i.default,onEnter:r.default.func,onEntering:r.default.func,onEntered:r.default.func,onExit:r.default.func,onExiting:r.default.func,onExited:r.default.func}),t.default=h,e.exports=t.default},5425:(e,t,n)=>{t.__esModule=!0;var o=d(n(5697)),r=d(n(621)),i=d(n(6689)),s=d(n(6405)),a=d(n(3464)),l=d(n(290)),c=d(n(7281));function d(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=o=h(this,e.call.apply(e,[this].concat(i))),o.setContainer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.props;o._portalContainerNode=(0,a.default)(e.container,(0,l.default)(o).body)},o.getMountNode=function(){return o._portalContainerNode},h(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.setContainer(),this.forceUpdate(this.props.onRendered)},t.prototype.componentWillReceiveProps=function(e){e.container!==this.props.container&&this.setContainer(e)},t.prototype.componentWillUnmount=function(){this._portalContainerNode=null},t.prototype.render=function(){return this.props.children&&this._portalContainerNode?s.default.createPortal(this.props.children,this._portalContainerNode):null},t}(i.default.Component);u.displayName="Portal",u.propTypes={container:o.default.oneOfType([r.default,o.default.func]),onRendered:o.default.func},t.default=s.default.createPortal?u:c.default,e.exports=t.default},7487:(e,t,n)=>{t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=p(n(4184)),i=p(n(5697)),s=p(n(621)),a=n(6689),l=p(a),c=p(n(6405)),d=p(n(7603)),h=p(n(3464)),u=p(n(290));function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}var m=function(e){function t(n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,o));return r.getTarget=function(){var e=r.props.target,t="function"==typeof e?e():e;return t&&c.default.findDOMNode(t)||null},r.maybeUpdatePosition=function(e){var t=r.getTarget();(r.props.shouldUpdatePosition||t!==r._lastTarget||e)&&r.updatePosition(t)},r.state={positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null},r._needsFlush=!1,r._lastTarget=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.updatePosition(this.getTarget())},t.prototype.componentWillReceiveProps=function(){this._needsFlush=!0},t.prototype.componentDidUpdate=function(e){this._needsFlush&&(this._needsFlush=!1,this.maybeUpdatePosition(this.props.placement!==e.placement))},t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,i=f(e,["children","className"]),s=this.state,c=s.positionLeft,d=s.positionTop,h=f(s,["positionLeft","positionTop"]);delete i.target,delete i.container,delete i.containerPadding,delete i.shouldUpdatePosition;var u=l.default.Children.only(t);return(0,a.cloneElement)(u,o({},i,h,{positionLeft:c,positionTop:d,className:(0,r.default)(n,u.props.className),style:o({},u.props.style,{left:c,top:d})}))},t.prototype.updatePosition=function(e){if(this._lastTarget=e,e){var t=c.default.findDOMNode(this),n=(0,h.default)(this.props.container,(0,u.default)(this).body);this.setState((0,d.default)(this.props.placement,t,e,n,this.props.containerPadding))}else this.setState({positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null})},t}(l.default.Component);m.propTypes={target:i.default.oneOfType([s.default,i.default.func]),container:i.default.oneOfType([s.default,i.default.func]),containerPadding:i.default.number,placement:i.default.oneOf(["top","right","bottom","left"]),shouldUpdatePosition:i.default.bool},m.displayName="Position",m.defaultProps={containerPadding:0,placement:"right",shouldUpdatePosition:!1},t.default=m,e.exports=t.default},2395:(e,t,n)=>{t.__esModule=!0;var o=c(n(1629)),r=c(n(5697)),i=c(n(6689)),s=c(n(6405)),a=c(n(6616)),l=c(n(290));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,r));return i.addEventListeners=function(){var e=i.props.event,t=(0,l.default)(i);i.documentMouseCaptureListener=(0,a.default)(t,e,i.handleMouseCapture,!0),i.documentMouseListener=(0,a.default)(t,e,i.handleMouse),i.documentKeyupListener=(0,a.default)(t,"keyup",i.handleKeyUp)},i.removeEventListeners=function(){i.documentMouseCaptureListener&&i.documentMouseCaptureListener.remove(),i.documentMouseListener&&i.documentMouseListener.remove(),i.documentKeyupListener&&i.documentKeyupListener.remove()},i.handleMouseCapture=function(e){var t;i.preventMouseRootClose=!!((t=e).metaKey||t.altKey||t.ctrlKey||t.shiftKey)||!function(e){return 0===e.button}(e)||(0,o.default)(s.default.findDOMNode(i),e.target)},i.handleMouse=function(e){!i.preventMouseRootClose&&i.props.onRootClose&&i.props.onRootClose(e)},i.handleKeyUp=function(e){27===e.keyCode&&i.props.onRootClose&&i.props.onRootClose(e)},i.preventMouseRootClose=!1,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.props.disabled||this.addEventListeners()},t.prototype.componentDidUpdate=function(e){!this.props.disabled&&e.disabled?this.addEventListeners():this.props.disabled&&!e.disabled&&this.removeEventListeners()},t.prototype.componentWillUnmount=function(){this.props.disabled||this.removeEventListeners()},t.prototype.render=function(){return this.props.children},t}(i.default.Component);d.displayName="RootCloseWrapper",d.propTypes={onRootClose:r.default.func,children:r.default.element,disabled:r.default.bool,event:r.default.oneOf(["click","mousedown"])},d.defaultProps={event:"click"},t.default=d,e.exports=t.default},6616:(e,t,n)=>{t.__esModule=!0,t.default=function(e,t,n,i){return(0,o.default)(e,t,n,i),{remove:function(){(0,r.default)(e,t,n,i)}}};var o=i(n(1416)),r=i(n(3249));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},7603:(e,t,n)=>{t.__esModule=!0,t.default=function(e,t,n,i,s){var a="BODY"===i.tagName?(0,o.default)(n):(0,r.default)(n,i),c=(0,o.default)(t),d=c.height,h=c.width,u=void 0,p=void 0,f=void 0,m=void 0;if("left"===e||"right"===e){p=a.top+(a.height-d)/2,u="left"===e?a.left-h:a.left+a.width;var g=function(e,t,n,o){var r=l(n),i=r.scroll,s=r.height,a=e-o-i,c=e+o-i+t;return a<0?-a:c>s?s-c:0}(p,d,i,s);p+=g,m=50*(1-2*g/d)+"%",f=void 0}else{if("top"!==e&&"bottom"!==e)throw new Error('calcOverlayPosition(): No such placement of "'+e+'" found.');u=a.left+(a.width-h)/2,p="top"===e?a.top-d:a.top+a.height;var b=function(e,t,n,o){var r=l(n).width,i=e-o,s=e+o+t;return i<0?-i:s>r?r-s:0}(u,h,i,s);u+=b,f=50*(1-2*b/h)+"%",m=void 0}return{positionLeft:u,positionTop:p,arrowOffsetLeft:f,arrowOffsetTop:m}};var o=a(n(2565)),r=a(n(7265)),i=a(n(504)),s=a(n(290));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=void 0,n=void 0,r=void 0;if("BODY"===e.tagName)t=window.innerWidth,n=window.innerHeight,r=(0,i.default)((0,s.default)(e).documentElement)||(0,i.default)(e);else{var a=(0,o.default)(e);t=a.width,n=a.height,r=(0,i.default)(e)}return{width:t,height:n,scroll:r}}e.exports=t.default},3464:(e,t,n)=>{t.__esModule=!0,t.default=function(e,t){return e="function"==typeof e?e():e,r.default.findDOMNode(e)||t};var o,r=(o=n(6405))&&o.__esModule?o:{default:o};e.exports=t.default},290:(e,t,n)=>{t.__esModule=!0,t.default=function(e){return(0,r.default)(o.default.findDOMNode(e))};var o=i(n(6405)),r=i(n(9981));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},644:(e,t,n)=>{t.ZP=t.cn=t.d0=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(5697)),r=a(n(6689)),i=a(n(6405)),s=n(6871);function a(e){return e&&e.__esModule?e:{default:e}}n(4726);var l="unmounted",c="exited",d="entering";t.d0=d;var h="entered";t.cn=h;var u="exiting",p=function(e){var t,n;function o(t,n){var o;o=e.call(this,t,n)||this;var r,i=n.transitionGroup,s=i&&!i.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?s?(r=c,o.appearStatus=d):r=h:r=t.unmountOnExit||t.mountOnEnter?l:c,o.state={status:r},o.nextCallback=null,o}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.getChildContext=function(){return{transitionGroup:null}},o.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:c}:null},s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==h&&(t=d):n!==d&&n!==h||(t=u)}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},s.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.default.findDOMNode(this);t===d?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},s.performEnter=function(e,t){var n=this,o=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),s=r?i.appear:i.enter;t||o?(this.props.onEnter(e,r),this.safeSetState({status:d},(function(){n.props.onEntering(e,r),n.onTransitionEnd(e,s,(function(){n.safeSetState({status:h},(function(){n.props.onEntered(e,r)}))}))}))):this.safeSetState({status:h},(function(){n.props.onEntered(e)}))},s.performExit=function(e){var t=this,n=this.props.exit,o=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:u},(function(){t.props.onExiting(e),t.onTransitionEnd(e,o.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(e)}))},s.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},s.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},s.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var o=null==t&&!this.props.addEndListener;e&&!o?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},s.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"==typeof n)return n(e,o);var i=r.default.Children.only(n);return r.default.cloneElement(i,o)},o}(r.default.Component);function f(){}p.contextTypes={transitionGroup:o.object},p.childContextTypes={transitionGroup:function(){}},p.propTypes={},p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},p.UNMOUNTED=0,p.EXITED=1,p.ENTERING=2,p.ENTERED=3,p.EXITING=4;var m=(0,s.polyfill)(p);t.ZP=m},4726:(e,t,n)=>{var o;t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,(o=n(5697))&&o.__esModule,t.timeoutsShape=null,t.classNamesShape=null},6115:e=>{var t;t="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},e.exports=t},670:e=>{e.exports=function(){}},6689:e=>{e.exports=n(2735)},6405:e=>{e.exports=n(2788)},8149:(e,t,n)=>{e.exports=n(3285)},3562:(e,t,n)=>{e.exports=n(7965)},434:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{r.r(i),r.d(i,{CHANGES_BAR_MIN_WIDTH:()=>c.QW,CHANGES_BAR_RIGHT_MARGIN:()=>c.SZ,CHANGES_ZONE_MIN_WIDTH:()=>c.v1,CHANGES_ZONE_SHOW_ICON_WIDTH:()=>c.Oi,COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER:()=>c.Y8,COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER:()=>c.LG,COMMIT_AUTHOR_ZONE_MIN_WIDTH:()=>c.eq,COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH:()=>c.m8,COMMIT_DATE_TIME_ZONE_MIN_WIDTH:()=>c.q1,COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH:()=>c.jg,COMMIT_MESSAGE_ZONE_MIN_WIDTH:()=>c.B8,COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH:()=>c.j_,COMMIT_NODE_MIN_ALPHA:()=>c.l3,COMMIT_SHA_ZONE_MIN_WIDTH:()=>c.xI,COMMIT_SHA_ZONE_SHOW_ICON_WIDTH:()=>c.lG,COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN:()=>c.Wu,COMMIT_ZONE_EDGE_ARC_PADDING:()=>c.NP,COMMIT_ZONE_EDGE_ARC_RADIUS:()=>c.O5,COMMIT_ZONE_MARGIN_BOTTOM:()=>c.$s,COMMIT_ZONE_MARGIN_TOP:()=>c.An,COMMIT_ZONE_ROW_HEIGHT:()=>c.at,COMMIT_ZONE_ROW_INNER_HEIGHT:()=>c.P3,COMMIT_ZONE_SHOW_ICON_WIDTH:()=>c.jn,CommitDateTimeSources:()=>o.Gu,DEFAULT_AVATAR_BACKGROUND_COLOR:()=>c.iq,DEFAULT_COMMIT_SHA_LENGTH:()=>c.ai,DEFAULT_WORKDIR_STATS:()=>c.OR,DndComponent:()=>e.Z,GRAPH_HEADER_ROW_HEIGHT:()=>c.rl,GRAPH_ROW_HEIGHT:()=>c.$0,GRAPH_ROW_INNER_HEIGHT:()=>c.cZ,GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET:()=>c.qG,GRAPH_SCROLL_MARKER_LANES:()=>c.dF,GraphColumnMode:()=>c.Um,GraphMarkerShape:()=>c.RG,HEADER_ROW_HEIGHT:()=>c.ze,HEADER_ROW_MARGIN_BOTTOM:()=>c.wi,INLINE_SUMMARY_MARGIN_LEFT:()=>c.aV,LeftPanelToGraphMarginGap:()=>c.mu,OPACITY_FACTOR_BY_THEME:()=>c.X9,REF_NODE_ICON_MARGIN:()=>c.am,REF_NODE_ICON_SPACING:()=>c.B,REF_NODE_ICON_WIDTH:()=>c.Rg,REF_NODE_OUTER_SPACING:()=>c.Vh,REF_ZONE_MARGIN_LEFT:()=>c.yv,REF_ZONE_MARGIN_RIGHT:()=>c.PB,REF_ZONE_MIN_WIDTH:()=>c.wy,REF_ZONE_SHOW_ICON_WIDTH:()=>c.mt,REF_ZONE_TEXT_HEIGHT:()=>c.pj,ResizableHandleCorrection:()=>c.b4,SCROLL_TO_ALIGNMENT_AUTO:()=>c.os,SCROLL_TO_ALIGNMENT_CENTER:()=>c.MQ,ScrollbarContainer:()=>t.Z,TIMESTAMP_FORMAT_DATE_TIME:()=>c.It,TINY_FILES_READOUT_FONT_SIZE:()=>c.wd,TINY_FILES_READOUT_RIGHT_MARGIN:()=>c.IX,TINY_ICON_RIGHT_MARGIN:()=>c.VB,TINY_ICON_SIZE:()=>c.dH,allMetadataTypes:()=>d.AI,changesZone:()=>c.WD,commitAuthorZone:()=>c.GF,commitDateTimeZone:()=>c.PL,commitMessageZone:()=>c.KE,commitNodeType:()=>o.o$,commitShaZone:()=>c.av,commitZone:()=>c.Wm,default:()=>m,getHostingServiceName:()=>h.y,graphMarkerMetadata:()=>c.Qh,graphMarkerShapeMetadata:()=>c.d_,graphZoneMetaData:()=>c.qi,issueMetadataType:()=>d.$M,lookbackLimitByPeriod:()=>c.YJ,mergeConflictNodeType:()=>o.S7,mergeNodeType:()=>o.lH,numGraphColumnsDefault:()=>c.uK,pullRequestMetadataType:()=>d.mQ,refTypes:()=>u.V,refZone:()=>c.jZ,stashNodeType:()=>o.kP,timelineMsgRowRenderId:()=>c.Gn,unsupportedRebaseWarningNodeType:()=>o.br,upstreamMetadataType:()=>d.uq,workDirType:()=>o.ch});var e=r(9915),t=r(7154),n=r(7589),o=r(827),s=r(2149),a={};for(const e in s)["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType"].indexOf(e)<0&&(a[e]=()=>s[e]);r.d(i,a);var l=r(8289);a={};for(const e in l)["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType"].indexOf(e)<0&&(a[e]=()=>l[e]);r.d(i,a);var c=r(3308),d=r(9453),h=r(7334),u=r(8649),p=r(664);a={};for(const e in p)["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refTypes"].indexOf(e)<0&&(a[e]=()=>p[e]);r.d(i,a);var f=r(6756);a={};for(const e in f)["default","DndComponent","ScrollbarContainer","CommitDateTimeSources","commitNodeType","mergeConflictNodeType","mergeNodeType","stashNodeType","unsupportedRebaseWarningNodeType","workDirType","CHANGES_BAR_MIN_WIDTH","CHANGES_BAR_RIGHT_MARGIN","CHANGES_ZONE_MIN_WIDTH","CHANGES_ZONE_SHOW_ICON_WIDTH","COMMIT_AUTHOR_ZONE_AVATAR_INNER_DIAMETER","COMMIT_AUTHOR_ZONE_AVATAR_OUTER_DIAMETER","COMMIT_AUTHOR_ZONE_MIN_WIDTH","COMMIT_AUTHOR_ZONE_SHOW_ICON_WIDTH","COMMIT_DATE_TIME_ZONE_MIN_WIDTH","COMMIT_DATE_TIME_ZONE_SHOW_ICON_WIDTH","COMMIT_MESSAGE_ZONE_MIN_WIDTH","COMMIT_MESSAGE_ZONE_SHOW_ICON_WIDTH","COMMIT_NODE_MIN_ALPHA","COMMIT_SHA_ZONE_MIN_WIDTH","COMMIT_SHA_ZONE_SHOW_ICON_WIDTH","COMMIT_ZONE_DEFAULT_VIEWPORT_WIDTH_MIN","COMMIT_ZONE_EDGE_ARC_PADDING","COMMIT_ZONE_EDGE_ARC_RADIUS","COMMIT_ZONE_MARGIN_BOTTOM","COMMIT_ZONE_MARGIN_TOP","COMMIT_ZONE_ROW_HEIGHT","COMMIT_ZONE_ROW_INNER_HEIGHT","COMMIT_ZONE_SHOW_ICON_WIDTH","DEFAULT_AVATAR_BACKGROUND_COLOR","DEFAULT_COMMIT_SHA_LENGTH","DEFAULT_WORKDIR_STATS","GRAPH_HEADER_ROW_HEIGHT","GRAPH_ROW_HEIGHT","GRAPH_ROW_INNER_HEIGHT","GRAPH_ROW_LAZY_LOAD_COMMITS_OFFSET","GRAPH_SCROLL_MARKER_LANES","GraphColumnMode","GraphMarkerShape","HEADER_ROW_HEIGHT","HEADER_ROW_MARGIN_BOTTOM","INLINE_SUMMARY_MARGIN_LEFT","LeftPanelToGraphMarginGap","OPACITY_FACTOR_BY_THEME","REF_NODE_ICON_MARGIN","REF_NODE_ICON_SPACING","REF_NODE_ICON_WIDTH","REF_NODE_OUTER_SPACING","REF_ZONE_MARGIN_LEFT","REF_ZONE_MARGIN_RIGHT","REF_ZONE_MIN_WIDTH","REF_ZONE_SHOW_ICON_WIDTH","REF_ZONE_TEXT_HEIGHT","ResizableHandleCorrection","SCROLL_TO_ALIGNMENT_AUTO","SCROLL_TO_ALIGNMENT_CENTER","TIMESTAMP_FORMAT_DATE_TIME","TINY_FILES_READOUT_FONT_SIZE","TINY_FILES_READOUT_RIGHT_MARGIN","TINY_ICON_RIGHT_MARGIN","TINY_ICON_SIZE","changesZone","commitAuthorZone","commitDateTimeZone","commitMessageZone","commitShaZone","commitZone","graphMarkerMetadata","graphMarkerShapeMetadata","graphZoneMetaData","lookbackLimitByPeriod","numGraphColumnsDefault","refZone","timelineMsgRowRenderId","allMetadataTypes","issueMetadataType","pullRequestMetadataType","upstreamMetadataType","getHostingServiceName","refTypes"].indexOf(e)<0&&(a[e]=()=>f[e]);r.d(i,a);var m=n.Z})(),e.exports=i})()},4516:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))n.call(i,c)&&(a[c]=i[c]);if(t){s=t(i);for(var d=0;d<s.length;d++)o.call(i,s[d])&&(a[s[d]]=i[s[d]])}}return a}},3975:(e,t,n)=>{var o=n(2735),r=n(4516),i=n(9146);function s(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);!function(e,t,n,o,r,i,s,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,r,i,s,a],c=0;(e=Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}function a(e,t,n,o,r,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}o||s("227");var l=!1,c=null,d=!1,h=null,u={onError:function(e){l=!0,c=e}};function p(e,t,n,o,r,i,s,d,h){l=!1,c=null,a.apply(u,arguments)}var f=null,m={};function g(){if(f)for(var e in m){var t=m[e],n=f.indexOf(e);if(-1<n||s("96",e),!v[n])for(var o in t.extractEvents||s("97",e),v[n]=t,n=t.eventTypes){var r=void 0,i=n[o],a=t,l=o;y.hasOwnProperty(l)&&s("99",l),y[l]=i;var c=i.phasedRegistrationNames;if(c){for(r in c)c.hasOwnProperty(r)&&b(c[r],a,l);r=!0}else i.registrationName?(b(i.registrationName,a,l),r=!0):r=!1;r||s("98",o,e)}}}function b(e,t,n){w[e]&&s("100",e),w[e]=t,C[e]=t.eventTypes[n].dependencies}var v=[],y={},w={},C={},x=null,S=null,_=null;function T(e,t,n){var o=e.type||"unknown-event";e.currentTarget=_(n),function(e,t,n,o,r,i,a,u,f){if(p.apply(this,arguments),l){if(l){var m=c;l=!1,c=null}else s("198"),m=void 0;d||(d=!0,h=m)}}(o,t,void 0,e),e.currentTarget=null}function R(e,t){return null==t&&s("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function k(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var E=null;function O(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var o=0;o<t.length&&!e.isPropagationStopped();o++)T(e,t[o],n[o]);else t&&T(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}var I={injectEventPluginOrder:function(e){f&&s("101"),f=Array.prototype.slice.call(e),g()},injectEventPluginsByName:function(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var o=e[t];m.hasOwnProperty(t)&&m[t]===o||(m[t]&&s("102",t),m[t]=o,n=!0)}n&&g()}};function M(e,t){var n=e.stateNode;if(!n)return null;var o=x(n);if(!o)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(o=!o.disabled)||(o=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!o;break e;default:e=!1}return e?null:(n&&"function"!=typeof n&&s("231",t,typeof n),n)}function D(e){if(null!==e&&(E=R(E,e)),e=E,E=null,e&&(k(e,O),E&&s("95"),d))throw e=h,d=!1,h=null,e}var $=Math.random().toString(36).slice(2),A="__reactInternalInstance$"+$,N="__reactEventHandlers$"+$;function P(e){if(e[A])return e[A];for(;!e[A];){if(!e.parentNode)return null;e=e.parentNode}return 5===(e=e[A]).tag||6===e.tag?e:null}function z(e){return!(e=e[A])||5!==e.tag&&6!==e.tag?null:e}function H(e){if(5===e.tag||6===e.tag)return e.stateNode;s("33")}function L(e){return e[N]||null}function F(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function G(e,t,n){(t=M(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=R(n._dispatchListeners,t),n._dispatchInstances=R(n._dispatchInstances,e))}function B(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=F(t);for(t=n.length;0<t--;)G(n[t],"captured",e);for(t=0;t<n.length;t++)G(n[t],"bubbled",e)}}function W(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=M(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=R(n._dispatchListeners,t),n._dispatchInstances=R(n._dispatchInstances,e))}function U(e){e&&e.dispatchConfig.registrationName&&W(e._targetInst,null,e)}function j(e){k(e,B)}var V=!("undefined"==typeof window||!window.document||!window.document.createElement);function Z(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var q={animationend:Z("Animation","AnimationEnd"),animationiteration:Z("Animation","AnimationIteration"),animationstart:Z("Animation","AnimationStart"),transitionend:Z("Transition","TransitionEnd")},K={},Y={};function X(e){if(K[e])return K[e];if(!q[e])return e;var t,n=q[e];for(t in n)if(n.hasOwnProperty(t)&&t in Y)return K[e]=n[t];return e}V&&(Y=document.createElement("div").style,"AnimationEvent"in window||(delete q.animationend.animation,delete q.animationiteration.animation,delete q.animationstart.animation),"TransitionEvent"in window||delete q.transitionend.transition);var Q=X("animationend"),J=X("animationiteration"),ee=X("animationstart"),te=X("transitionend"),ne="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oe=null,re=null,ie=null;function se(){if(ie)return ie;var e,t,n=re,o=n.length,r="value"in oe?oe.value:oe.textContent,i=r.length;for(e=0;e<o&&n[e]===r[e];e++);var s=o-e;for(t=1;t<=s&&n[o-t]===r[i-t];t++);return ie=r.slice(e,1<t?1-t:void 0)}function ae(){return!0}function le(){return!1}function ce(e,t,n,o){for(var r in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(r)&&((t=e[r])?this[r]=t(n):"target"===r?this.target=o:this[r]=n[r]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?ae:le,this.isPropagationStopped=le,this}function de(e,t,n,o){if(this.eventPool.length){var r=this.eventPool.pop();return this.call(r,e,t,n,o),r}return new this(e,t,n,o)}function he(e){e instanceof this||s("279"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function ue(e){e.eventPool=[],e.getPooled=de,e.release=he}r(ce.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ae)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ae)},persist:function(){this.isPersistent=ae},isPersistent:le,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=le,this._dispatchInstances=this._dispatchListeners=null}}),ce.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},ce.extend=function(e){function t(){}function n(){return o.apply(this,arguments)}var o=this;t.prototype=o.prototype;var i=new t;return r(i,n.prototype),n.prototype=i,n.prototype.constructor=n,n.Interface=r({},o.Interface,e),n.extend=o.extend,ue(n),n},ue(ce);var pe=ce.extend({data:null}),fe=ce.extend({data:null}),me=[9,13,27,32],ge=V&&"CompositionEvent"in window,be=null;V&&"documentMode"in document&&(be=document.documentMode);var ve=V&&"TextEvent"in window&&!be,ye=V&&(!ge||be&&8<be&&11>=be),we=String.fromCharCode(32),Ce={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},xe=!1;function Se(e,t){switch(e){case"keyup":return-1!==me.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function _e(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Te=!1;var Re={eventTypes:Ce,extractEvents:function(e,t,n,o){var r=void 0,i=void 0;if(ge)e:{switch(e){case"compositionstart":r=Ce.compositionStart;break e;case"compositionend":r=Ce.compositionEnd;break e;case"compositionupdate":r=Ce.compositionUpdate;break e}r=void 0}else Te?Se(e,n)&&(r=Ce.compositionEnd):"keydown"===e&&229===n.keyCode&&(r=Ce.compositionStart);return r?(ye&&"ko"!==n.locale&&(Te||r!==Ce.compositionStart?r===Ce.compositionEnd&&Te&&(i=se()):(re="value"in(oe=o)?oe.value:oe.textContent,Te=!0)),r=pe.getPooled(r,t,n,o),i?r.data=i:null!==(i=_e(n))&&(r.data=i),j(r),i=r):i=null,(e=ve?function(e,t){switch(e){case"compositionend":return _e(t);case"keypress":return 32!==t.which?null:(xe=!0,we);case"textInput":return(e=t.data)===we&&xe?null:e;default:return null}}(e,n):function(e,t){if(Te)return"compositionend"===e||!ge&&Se(e,t)?(e=se(),ie=re=oe=null,Te=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ye&&"ko"!==t.locale?null:t.data}}(e,n))?((t=fe.getPooled(Ce.beforeInput,t,n,o)).data=e,j(t)):t=null,null===i?t:null===t?i:[i,t]}},ke=null,Ee=null,Oe=null;function Ie(e){if(e=S(e)){"function"!=typeof ke&&s("280");var t=x(e.stateNode);ke(e.stateNode,e.type,t)}}function Me(e){Ee?Oe?Oe.push(e):Oe=[e]:Ee=e}function De(){if(Ee){var e=Ee,t=Oe;if(Oe=Ee=null,Ie(e),t)for(e=0;e<t.length;e++)Ie(t[e])}}function $e(e,t){return e(t)}function Ae(e,t,n){return e(t,n)}function Ne(){}var Pe=!1;function ze(e,t){if(Pe)return e(t);Pe=!0;try{return $e(e,t)}finally{Pe=!1,(null!==Ee||null!==Oe)&&(Ne(),De())}}var He={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Le(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!He[e.type]:"textarea"===t}function Fe(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function Ge(e){if(!V)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}function Be(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function We(e){e._valueTracker||(e._valueTracker=function(e){var t=Be(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){o=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(e){o=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Ue(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Be(e)?e.checked?"true":"false":e.value),(e=o)!==n&&(t.setValue(e),!0)}var je=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;je.hasOwnProperty("ReactCurrentDispatcher")||(je.ReactCurrentDispatcher={current:null});var Ve=/^(.*)[\\\/]/,Ze="function"==typeof Symbol&&Symbol.for,qe=Ze?Symbol.for("react.element"):60103,Ke=Ze?Symbol.for("react.portal"):60106,Ye=Ze?Symbol.for("react.fragment"):60107,Xe=Ze?Symbol.for("react.strict_mode"):60108,Qe=Ze?Symbol.for("react.profiler"):60114,Je=Ze?Symbol.for("react.provider"):60109,et=Ze?Symbol.for("react.context"):60110,tt=Ze?Symbol.for("react.concurrent_mode"):60111,nt=Ze?Symbol.for("react.forward_ref"):60112,ot=Ze?Symbol.for("react.suspense"):60113,rt=Ze?Symbol.for("react.memo"):60115,it=Ze?Symbol.for("react.lazy"):60116,st="function"==typeof Symbol&&Symbol.iterator;function at(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=st&&e[st]||e["@@iterator"])?e:null}function lt(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case tt:return"ConcurrentMode";case Ye:return"Fragment";case Ke:return"Portal";case Qe:return"Profiler";case Xe:return"StrictMode";case ot:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case et:return"Context.Consumer";case Je:return"Context.Provider";case nt:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case rt:return lt(e.type);case it:if(e=1===e._status?e._result:null)return lt(e)}return null}function ct(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var o=e._debugOwner,r=e._debugSource,i=lt(e.type);n=null,o&&(n=lt(o.type)),o=i,i="",r?i=" (at "+r.fileName.replace(Ve,"")+":"+r.lineNumber+")":n&&(i=" (created by "+n+")"),n="\n    in "+(o||"Unknown")+i}t+=n,e=e.return}while(e);return t}var dt=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ht=Object.prototype.hasOwnProperty,ut={},pt={};function ft(e,t,n,o,r){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){mt[e]=new ft(e,0,!1,e,null)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];mt[t]=new ft(t,1,!1,e[1],null)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){mt[e]=new ft(e,2,!1,e.toLowerCase(),null)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){mt[e]=new ft(e,2,!1,e,null)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){mt[e]=new ft(e,3,!1,e.toLowerCase(),null)})),["checked","multiple","muted","selected"].forEach((function(e){mt[e]=new ft(e,3,!0,e,null)})),["capture","download"].forEach((function(e){mt[e]=new ft(e,4,!1,e,null)})),["cols","rows","size","span"].forEach((function(e){mt[e]=new ft(e,6,!1,e,null)})),["rowSpan","start"].forEach((function(e){mt[e]=new ft(e,5,!1,e.toLowerCase(),null)}));var gt=/[\-:]([a-z])/g;function bt(e){return e[1].toUpperCase()}function vt(e,t,n,o){var r=mt.hasOwnProperty(t)?mt[t]:null;(null!==r?0===r.type:!o&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,o){if(null==t||function(e,t,n,o){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,o))return!0;if(o)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,r,o)&&(n=null),o||null===r?function(e){return!!ht.call(pt,e)||!ht.call(ut,e)&&(dt.test(e)?pt[e]=!0:(ut[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=null===n?3!==r.type&&"":n:(t=r.attributeName,o=r.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(r=r.type)||4===r&&!0===n?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}function yt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function wt(e,t){var n=t.checked;return r({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Ct(e,t){var n=null==t.defaultValue?"":t.defaultValue,o=null!=t.checked?t.checked:t.defaultChecked;n=yt(null!=t.value?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function xt(e,t){null!=(t=t.checked)&&vt(e,"checked",t,!1)}function St(e,t){xt(e,t);var n=yt(t.value),o=t.type;if(null!=n)"number"===o?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===o||"reset"===o)return void e.removeAttribute("value");t.hasOwnProperty("value")?Tt(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tt(e,t.type,yt(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function _t(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!("submit"!==o&&"reset"!==o||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Tt(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(gt,bt);mt[t]=new ft(t,1,!1,e,null)})),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(gt,bt);mt[t]=new ft(t,1,!1,e,"http://www.w3.org/1999/xlink")})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(gt,bt);mt[t]=new ft(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")})),["tabIndex","crossOrigin"].forEach((function(e){mt[e]=new ft(e,1,!1,e.toLowerCase(),null)}));var Rt={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function kt(e,t,n){return(e=ce.getPooled(Rt.change,e,t,n)).type="change",Me(n),j(e),e}var Et=null,Ot=null;function It(e){D(e)}function Mt(e){if(Ue(H(e)))return e}function Dt(e,t){if("change"===e)return t}var $t=!1;function At(){Et&&(Et.detachEvent("onpropertychange",Nt),Ot=Et=null)}function Nt(e){"value"===e.propertyName&&Mt(Ot)&&ze(It,e=kt(Ot,e,Fe(e)))}function Pt(e,t,n){"focus"===e?(At(),Ot=n,(Et=t).attachEvent("onpropertychange",Nt)):"blur"===e&&At()}function zt(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Mt(Ot)}function Ht(e,t){if("click"===e)return Mt(t)}function Lt(e,t){if("input"===e||"change"===e)return Mt(t)}V&&($t=Ge("input")&&(!document.documentMode||9<document.documentMode));var Ft={eventTypes:Rt,_isInputEventSupported:$t,extractEvents:function(e,t,n,o){var r=t?H(t):window,i=void 0,s=void 0,a=r.nodeName&&r.nodeName.toLowerCase();if("select"===a||"input"===a&&"file"===r.type?i=Dt:Le(r)?$t?i=Lt:(i=zt,s=Pt):(a=r.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===r.type||"radio"===r.type)&&(i=Ht),i&&(i=i(e,t)))return kt(i,n,o);s&&s(e,r,t),"blur"===e&&(e=r._wrapperState)&&e.controlled&&"number"===r.type&&Tt(r,"number",r.value)}},Gt=ce.extend({view:null,detail:null}),Bt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wt(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Bt[e])&&!!t[e]}function Ut(){return Wt}var jt=0,Vt=0,Zt=!1,qt=!1,Kt=Gt.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Ut,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=jt;return jt=e.screenX,Zt?"mousemove"===e.type?e.screenX-t:0:(Zt=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Vt;return Vt=e.screenY,qt?"mousemove"===e.type?e.screenY-t:0:(qt=!0,0)}}),Yt=Kt.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xt={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Qt={eventTypes:Xt,extractEvents:function(e,t,n,o){var r="mouseover"===e||"pointerover"===e,i="mouseout"===e||"pointerout"===e;if(r&&(n.relatedTarget||n.fromElement)||!i&&!r)return null;if(r=o.window===o?o:(r=o.ownerDocument)?r.defaultView||r.parentWindow:window,i?(i=t,t=(t=n.relatedTarget||n.toElement)?P(t):null):i=null,i===t)return null;var s=void 0,a=void 0,l=void 0,c=void 0;"mouseout"===e||"mouseover"===e?(s=Kt,a=Xt.mouseLeave,l=Xt.mouseEnter,c="mouse"):"pointerout"!==e&&"pointerover"!==e||(s=Yt,a=Xt.pointerLeave,l=Xt.pointerEnter,c="pointer");var d=null==i?r:H(i);if(r=null==t?r:H(t),(e=s.getPooled(a,i,n,o)).type=c+"leave",e.target=d,e.relatedTarget=r,(n=s.getPooled(l,t,n,o)).type=c+"enter",n.target=r,n.relatedTarget=d,o=t,i&&o)e:{for(r=o,c=0,s=t=i;s;s=F(s))c++;for(s=0,l=r;l;l=F(l))s++;for(;0<c-s;)t=F(t),c--;for(;0<s-c;)r=F(r),s--;for(;c--;){if(t===r||t===r.alternate)break e;t=F(t),r=F(r)}t=null}else t=null;for(r=t,t=[];i&&i!==r&&(null===(c=i.alternate)||c!==r);)t.push(i),i=F(i);for(i=[];o&&o!==r&&(null===(c=o.alternate)||c!==r);)i.push(o),o=F(o);for(o=0;o<t.length;o++)W(t[o],"bubbled",e);for(o=i.length;0<o--;)W(i[o],"captured",n);return[e,n]}};function Jt(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}var en=Object.prototype.hasOwnProperty;function tn(e,t){if(Jt(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++)if(!en.call(t,n[o])||!Jt(e[n[o]],t[n[o]]))return!1;return!0}function nn(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(0!=(2&(t=t.return).effectTag))return 1}return 3===t.tag?2:3}function on(e){2!==nn(e)&&s("188")}function rn(e){if(e=function(e){var t=e.alternate;if(!t)return 3===(t=nn(e))&&s("188"),1===t?null:e;for(var n=e,o=t;;){var r=n.return,i=r?r.alternate:null;if(!r||!i)break;if(r.child===i.child){for(var a=r.child;a;){if(a===n)return on(r),e;if(a===o)return on(r),t;a=a.sibling}s("188")}if(n.return!==o.return)n=r,o=i;else{a=!1;for(var l=r.child;l;){if(l===n){a=!0,n=r,o=i;break}if(l===o){a=!0,o=r,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,o=r;break}if(l===o){a=!0,o=i,n=r;break}l=l.sibling}a||s("189")}}n.alternate!==o&&s("190")}return 3!==n.tag&&s("188"),n.stateNode.current===n?e:t}(e),!e)return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}var sn=ce.extend({animationName:null,elapsedTime:null,pseudoElement:null}),an=ce.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ln=Gt.extend({relatedTarget:null});function cn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var dn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},un=Gt.extend({key:function(e){if(e.key){var t=dn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=cn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?hn[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Ut,charCode:function(e){return"keypress"===e.type?cn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?cn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),pn=Kt.extend({dataTransfer:null}),fn=Gt.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Ut}),mn=ce.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),gn=Kt.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),bn=[["abort","abort"],[Q,"animationEnd"],[J,"animationIteration"],[ee,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[te,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],vn={},yn={};function wn(e,t){var n=e[0],o="on"+((e=e[1])[0].toUpperCase()+e.slice(1));t={phasedRegistrationNames:{bubbled:o,captured:o+"Capture"},dependencies:[n],isInteractive:t},vn[e]=t,yn[n]=t}[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach((function(e){wn(e,!0)})),bn.forEach((function(e){wn(e,!1)}));var Cn={eventTypes:vn,isInteractiveTopLevelEventType:function(e){return void 0!==(e=yn[e])&&!0===e.isInteractive},extractEvents:function(e,t,n,o){var r=yn[e];if(!r)return null;switch(e){case"keypress":if(0===cn(n))return null;case"keydown":case"keyup":e=un;break;case"blur":case"focus":e=ln;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=Kt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=pn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=fn;break;case Q:case J:case ee:e=sn;break;case te:e=mn;break;case"scroll":e=Gt;break;case"wheel":e=gn;break;case"copy":case"cut":case"paste":e=an;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Yt;break;default:e=ce}return j(t=e.getPooled(r,t,n,o)),t}},xn=Cn.isInteractiveTopLevelEventType,Sn=[];function _n(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var o;for(o=n;o.return;)o=o.return;if(!(o=3!==o.tag?null:o.stateNode.containerInfo))break;e.ancestors.push(n),n=P(o)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var r=Fe(e.nativeEvent);o=e.topLevelType;for(var i=e.nativeEvent,s=null,a=0;a<v.length;a++){var l=v[a];l&&(l=l.extractEvents(o,t,i,r))&&(s=R(s,l))}D(s)}}var Tn=!0;function Rn(e,t){if(!t)return null;var n=(xn(e)?En:On).bind(null,e);t.addEventListener(e,n,!1)}function kn(e,t){if(!t)return null;var n=(xn(e)?En:On).bind(null,e);t.addEventListener(e,n,!0)}function En(e,t){Ae(On,e,t)}function On(e,t){if(Tn){var n=Fe(t);if(null===(n=P(n))||"number"!=typeof n.tag||2===nn(n)||(n=null),Sn.length){var o=Sn.pop();o.topLevelType=e,o.nativeEvent=t,o.targetInst=n,e=o}else e={topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]};try{ze(_n,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>Sn.length&&Sn.push(e)}}}var In={},Mn=0,Dn="_reactListenersID"+(""+Math.random()).slice(2);function $n(e){return Object.prototype.hasOwnProperty.call(e,Dn)||(e[Dn]=Mn++,In[e[Dn]]={}),In[e[Dn]]}function An(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Nn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pn(e,t){var n,o=Nn(e);for(e=0;o;){if(3===o.nodeType){if(n=e+o.textContent.length,e<=t&&n>=t)return{node:o,offset:t-e};e=n}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Nn(o)}}function zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Hn(){for(var e=window,t=An();t instanceof e.HTMLIFrameElement;){try{e=t.contentDocument.defaultView}catch(e){break}t=An(e.document)}return t}function Ln(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Fn(e){var t=Hn(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zn(n.ownerDocument.documentElement,n)){if(null!==o&&Ln(n))if(t=o.start,void 0===(e=o.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(o.start,r);o=void 0===o.end?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=Pn(n,i);var s=Pn(n,o);r&&s&&(1!==e.rangeCount||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gn=V&&"documentMode"in document&&11>=document.documentMode,Bn={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Wn=null,Un=null,jn=null,Vn=!1;function Zn(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return Vn||null==Wn||Wn!==An(n)?null:("selectionStart"in(n=Wn)&&Ln(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},jn&&tn(jn,n)?null:(jn=n,(e=ce.getPooled(Bn.select,Un,e,t)).type="select",e.target=Wn,j(e),e))}var qn={eventTypes:Bn,extractEvents:function(e,t,n,o){var r,i=o.window===o?o.document:9===o.nodeType?o:o.ownerDocument;if(!(r=!i)){e:{i=$n(i),r=C.onSelect;for(var s=0;s<r.length;s++){var a=r[s];if(!i.hasOwnProperty(a)||!i[a]){i=!1;break e}}i=!0}r=!i}if(r)return null;switch(i=t?H(t):window,e){case"focus":(Le(i)||"true"===i.contentEditable)&&(Wn=i,Un=t,jn=null);break;case"blur":jn=Un=Wn=null;break;case"mousedown":Vn=!0;break;case"contextmenu":case"mouseup":case"dragend":return Vn=!1,Zn(n,o);case"selectionchange":if(Gn)break;case"keydown":case"keyup":return Zn(n,o)}return null}};function Kn(e,t){return e=r({children:void 0},t),(t=function(e){var t="";return o.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function Yn(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n)return e[r].selected=!0,void(o&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function Xn(e,t){return null!=t.dangerouslySetInnerHTML&&s("91"),r({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qn(e,t){var n=t.value;null==n&&(n=t.defaultValue,null!=(t=t.children)&&(null!=n&&s("92"),Array.isArray(t)&&(1>=t.length||s("93"),t=t[0]),n=t),null==n&&(n="")),e._wrapperState={initialValue:yt(n)}}function Jn(e,t){var n=yt(t.value),o=yt(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=o&&(e.defaultValue=""+o)}function eo(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}I.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),x=L,S=z,_=H,I.injectEventPluginsByName({SimpleEventPlugin:Cn,EnterLeaveEventPlugin:Qt,ChangeEventPlugin:Ft,SelectEventPlugin:qn,BeforeInputEventPlugin:Re});var to={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function no(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oo(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?no(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ro,io=void 0,so=(ro=function(e,t){if(e.namespaceURI!==to.svg||"innerHTML"in e)e.innerHTML=t;else{for((io=io||document.createElement("div")).innerHTML="<svg>"+t+"</svg>",t=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,o){MSApp.execUnsafeLocalFunction((function(){return ro(e,t)}))}:ro);function ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var lo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},co=["Webkit","ms","Moz","O"];function ho(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||lo.hasOwnProperty(e)&&lo[e]?(""+t).trim():t+"px"}function uo(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var o=0===n.indexOf("--"),r=ho(n,t[n],o);"float"===n&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}Object.keys(lo).forEach((function(e){co.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lo[t]=lo[e]}))}));var po=r({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fo(e,t){t&&(po[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&s("137",e,""),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&s("60"),"object"==typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML||s("61")),null!=t.style&&"object"!=typeof t.style&&s("62",""))}function mo(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function go(e,t){var n=$n(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=C[t];for(var o=0;o<t.length;o++){var r=t[o];if(!n.hasOwnProperty(r)||!n[r]){switch(r){case"scroll":kn("scroll",e);break;case"focus":case"blur":kn("focus",e),kn("blur",e),n.blur=!0,n.focus=!0;break;case"cancel":case"close":Ge(r)&&kn(r,e);break;case"invalid":case"submit":case"reset":break;default:-1===ne.indexOf(r)&&Rn(r,e)}n[r]=!0}}}function bo(){}var vo=null,yo=null;function wo(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Co(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var xo="function"==typeof setTimeout?setTimeout:void 0,So="function"==typeof clearTimeout?clearTimeout:void 0,_o=i.unstable_scheduleCallback,To=i.unstable_cancelCallback;function Ro(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}function ko(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}new Set;var Eo=[],Oo=-1;function Io(e){0>Oo||(e.current=Eo[Oo],Eo[Oo]=null,Oo--)}function Mo(e,t){Oo++,Eo[Oo]=e.current,e.current=t}var Do={},$o={current:Do},Ao={current:!1},No=Do;function Po(e,t){var n=e.type.contextTypes;if(!n)return Do;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r,i={};for(r in n)i[r]=t[r];return o&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zo(e){return null!=(e=e.childContextTypes)}function Ho(e){Io(Ao),Io($o)}function Lo(e){Io(Ao),Io($o)}function Fo(e,t,n){$o.current!==Do&&s("168"),Mo($o,t),Mo(Ao,n)}function Go(e,t,n){var o=e.stateNode;if(e=t.childContextTypes,"function"!=typeof o.getChildContext)return n;for(var i in o=o.getChildContext())i in e||s("108",lt(t)||"Unknown",i);return r({},n,o)}function Bo(e){var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||Do,No=$o.current,Mo($o,t),Mo(Ao,Ao.current),!0}function Wo(e,t,n){var o=e.stateNode;o||s("169"),n?(t=Go(e,t,No),o.__reactInternalMemoizedMergedChildContext=t,Io(Ao),Io($o),Mo($o,t)):Io(Ao),Mo(Ao,n)}var Uo=null,jo=null;function Vo(e){return function(t){try{return e(t)}catch(e){}}}function Zo(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function qo(e,t,n,o){return new Zo(e,t,n,o)}function Ko(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Yo(e,t){var n=e.alternate;return null===n?((n=qo(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.contextDependencies=e.contextDependencies,n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xo(e,t,n,o,r,i){var a=2;if(o=e,"function"==typeof e)Ko(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case Ye:return Qo(n.children,r,i,t);case tt:return Jo(n,3|r,i,t);case Xe:return Jo(n,2|r,i,t);case Qe:return(e=qo(12,n,t,4|r)).elementType=Qe,e.type=Qe,e.expirationTime=i,e;case ot:return(e=qo(13,n,t,r)).elementType=ot,e.type=ot,e.expirationTime=i,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Je:a=10;break e;case et:a=9;break e;case nt:a=11;break e;case rt:a=14;break e;case it:a=16,o=null;break e}s("130",null==e?e:typeof e,"")}return(t=qo(a,n,t,r)).elementType=e,t.type=o,t.expirationTime=i,t}function Qo(e,t,n,o){return(e=qo(7,e,o,t)).expirationTime=n,e}function Jo(e,t,n,o){return e=qo(8,e,o,t),t=0==(1&t)?Xe:tt,e.elementType=t,e.type=t,e.expirationTime=n,e}function er(e,t,n){return(e=qo(6,e,null,t)).expirationTime=n,e}function tr(e,t,n){return(t=qo(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nr(e,t){e.didError=!1;var n=e.earliestPendingTime;0===n?e.earliestPendingTime=e.latestPendingTime=t:n<t?e.earliestPendingTime=t:e.latestPendingTime>t&&(e.latestPendingTime=t),ir(t,e)}function or(e,t){e.didError=!1,e.latestPingedTime>=t&&(e.latestPingedTime=0);var n=e.earliestPendingTime,o=e.latestPendingTime;n===t?e.earliestPendingTime=o===t?e.latestPendingTime=0:o:o===t&&(e.latestPendingTime=n),n=e.earliestSuspendedTime,o=e.latestSuspendedTime,0===n?e.earliestSuspendedTime=e.latestSuspendedTime=t:n<t?e.earliestSuspendedTime=t:o>t&&(e.latestSuspendedTime=t),ir(t,e)}function rr(e,t){var n=e.earliestPendingTime;return n>t&&(t=n),(e=e.earliestSuspendedTime)>t&&(t=e),t}function ir(e,t){var n=t.earliestSuspendedTime,o=t.latestSuspendedTime,r=t.earliestPendingTime,i=t.latestPingedTime;0===(r=0!==r?r:i)&&(0===e||o<e)&&(r=o),0!==(e=r)&&n>e&&(e=n),t.nextExpirationTimeToWorkOn=r,t.expirationTime=e}function sr(e,t){if(e&&e.defaultProps)for(var n in t=r({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var ar=(new o.Component).refs;function lr(e,t,n,o){n=null==(n=n(o,t=e.memoizedState))?t:r({},t,n),e.memoizedState=n,null!==(o=e.updateQueue)&&0===e.expirationTime&&(o.baseState=n)}var cr={isMounted:function(e){return!!(e=e._reactInternalFiber)&&2===nn(e)},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var o=ka(),r=Qi(o=Qs(o,e));r.payload=t,null!=n&&(r.callback=n),Vs(),es(e,r),na(e,o)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var o=ka(),r=Qi(o=Qs(o,e));r.tag=Vi,r.payload=t,null!=n&&(r.callback=n),Vs(),es(e,r),na(e,o)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=ka(),o=Qi(n=Qs(n,e));o.tag=Zi,null!=t&&(o.callback=t),Vs(),es(e,o),na(e,n)}};function dr(e,t,n,o,r,i,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(o,i,s):!t.prototype||!t.prototype.isPureReactComponent||(!tn(n,o)||!tn(r,i))}function hr(e,t,n){var o=!1,r=Do,i=t.contextType;return"object"==typeof i&&null!==i?i=Ui(i):(r=zo(t)?No:$o.current,i=(o=null!=(o=t.contextTypes))?Po(e,r):Do),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=cr,e.stateNode=t,t._reactInternalFiber=e,o&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function ur(e,t,n,o){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,o),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&cr.enqueueReplaceState(t,t.state,null)}function pr(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs=ar;var i=t.contextType;"object"==typeof i&&null!==i?r.context=Ui(i):(i=zo(t)?No:$o.current,r.context=Po(e,i)),null!==(i=e.updateQueue)&&(rs(e,i,n,r,o),r.state=e.memoizedState),"function"==typeof(i=t.getDerivedStateFromProps)&&(lr(e,t,i,n),r.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof r.getSnapshotBeforeUpdate||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||(t=r.state,"function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),t!==r.state&&cr.enqueueReplaceState(r,r.state,null),null!==(i=e.updateQueue)&&(rs(e,i,n,r,o),r.state=e.memoizedState)),"function"==typeof r.componentDidMount&&(e.effectTag|=4)}var fr=Array.isArray;function mr(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){n=n._owner;var o=void 0;n&&(1!==n.tag&&s("309"),o=n.stateNode),o||s("147",e);var r=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===r?t.ref:(t=function(e){var t=o.refs;t===ar&&(t=o.refs={}),null===e?delete t[r]:t[r]=e},t._stringRef=r,t)}"string"!=typeof e&&s("284"),n._owner||s("290",e)}return e}function gr(e,t){"textarea"!==e.type&&s("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function br(e){function t(t,n){if(e){var o=t.lastEffect;null!==o?(o.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,o){if(!e)return null;for(;null!==o;)t(n,o),o=o.sibling;return null}function o(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function r(e,t,n){return(e=Yo(e,t)).index=0,e.sibling=null,e}function i(t,n,o){return t.index=o,e?null!==(o=t.alternate)?(o=o.index)<n?(t.effectTag=2,n):o:(t.effectTag=2,n):n}function a(t){return e&&null===t.alternate&&(t.effectTag=2),t}function l(e,t,n,o){return null===t||6!==t.tag?((t=er(n,e.mode,o)).return=e,t):((t=r(t,n)).return=e,t)}function c(e,t,n,o){return null!==t&&t.elementType===n.type?((o=r(t,n.props)).ref=mr(e,t,n),o.return=e,o):((o=Xo(n.type,n.key,n.props,null,e.mode,o)).ref=mr(e,t,n),o.return=e,o)}function d(e,t,n,o){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=tr(n,e.mode,o)).return=e,t):((t=r(t,n.children||[])).return=e,t)}function h(e,t,n,o,i){return null===t||7!==t.tag?((t=Qo(n,e.mode,o,i)).return=e,t):((t=r(t,n)).return=e,t)}function u(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=er(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case qe:return(n=Xo(t.type,t.key,t.props,null,e.mode,n)).ref=mr(e,null,t),n.return=e,n;case Ke:return(t=tr(t,e.mode,n)).return=e,t}if(fr(t)||at(t))return(t=Qo(t,e.mode,n,null)).return=e,t;gr(e,t)}return null}function p(e,t,n,o){var r=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==r?null:l(e,t,""+n,o);if("object"==typeof n&&null!==n){switch(n.$$typeof){case qe:return n.key===r?n.type===Ye?h(e,t,n.props.children,o,r):c(e,t,n,o):null;case Ke:return n.key===r?d(e,t,n,o):null}if(fr(n)||at(n))return null!==r?null:h(e,t,n,o,null);gr(e,n)}return null}function f(e,t,n,o,r){if("string"==typeof o||"number"==typeof o)return l(t,e=e.get(n)||null,""+o,r);if("object"==typeof o&&null!==o){switch(o.$$typeof){case qe:return e=e.get(null===o.key?n:o.key)||null,o.type===Ye?h(t,e,o.props.children,r,o.key):c(t,e,o,r);case Ke:return d(t,e=e.get(null===o.key?n:o.key)||null,o,r)}if(fr(o)||at(o))return h(t,e=e.get(n)||null,o,r,null);gr(t,o)}return null}function m(r,s,a,l){for(var c=null,d=null,h=s,m=s=0,g=null;null!==h&&m<a.length;m++){h.index>m?(g=h,h=null):g=h.sibling;var b=p(r,h,a[m],l);if(null===b){null===h&&(h=g);break}e&&h&&null===b.alternate&&t(r,h),s=i(b,s,m),null===d?c=b:d.sibling=b,d=b,h=g}if(m===a.length)return n(r,h),c;if(null===h){for(;m<a.length;m++)(h=u(r,a[m],l))&&(s=i(h,s,m),null===d?c=h:d.sibling=h,d=h);return c}for(h=o(r,h);m<a.length;m++)(g=f(h,r,m,a[m],l))&&(e&&null!==g.alternate&&h.delete(null===g.key?m:g.key),s=i(g,s,m),null===d?c=g:d.sibling=g,d=g);return e&&h.forEach((function(e){return t(r,e)})),c}function g(r,a,l,c){var d=at(l);"function"!=typeof d&&s("150"),null==(l=d.call(l))&&s("151");for(var h=d=null,m=a,g=a=0,b=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(b=m,m=null):b=m.sibling;var y=p(r,m,v.value,c);if(null===y){m||(m=b);break}e&&m&&null===y.alternate&&t(r,m),a=i(y,a,g),null===h?d=y:h.sibling=y,h=y,m=b}if(v.done)return n(r,m),d;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=u(r,v.value,c))&&(a=i(v,a,g),null===h?d=v:h.sibling=v,h=v);return d}for(m=o(r,m);!v.done;g++,v=l.next())null!==(v=f(m,r,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),a=i(v,a,g),null===h?d=v:h.sibling=v,h=v);return e&&m.forEach((function(e){return t(r,e)})),d}return function(e,o,i,l){var c="object"==typeof i&&null!==i&&i.type===Ye&&null===i.key;c&&(i=i.props.children);var d="object"==typeof i&&null!==i;if(d)switch(i.$$typeof){case qe:e:{for(d=i.key,c=o;null!==c;){if(c.key===d){if(7===c.tag?i.type===Ye:c.elementType===i.type){n(e,c.sibling),(o=r(c,i.type===Ye?i.props.children:i.props)).ref=mr(e,c,i),o.return=e,e=o;break e}n(e,c);break}t(e,c),c=c.sibling}i.type===Ye?((o=Qo(i.props.children,e.mode,l,i.key)).return=e,e=o):((l=Xo(i.type,i.key,i.props,null,e.mode,l)).ref=mr(e,o,i),l.return=e,e=l)}return a(e);case Ke:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(e,o.sibling),(o=r(o,i.children||[])).return=e,e=o;break e}n(e,o);break}t(e,o),o=o.sibling}(o=tr(i,e.mode,l)).return=e,e=o}return a(e)}if("string"==typeof i||"number"==typeof i)return i=""+i,null!==o&&6===o.tag?(n(e,o.sibling),(o=r(o,i)).return=e,e=o):(n(e,o),(o=er(i,e.mode,l)).return=e,e=o),a(e);if(fr(i))return m(e,o,i,l);if(at(i))return g(e,o,i,l);if(d&&gr(e,i),void 0===i&&!c)switch(e.tag){case 1:case 0:s("152",(l=e.type).displayName||l.name||"Component")}return n(e,o)}}var vr=br(!0),yr=br(!1),wr={},Cr={current:wr},xr={current:wr},Sr={current:wr};function _r(e){return e===wr&&s("174"),e}function Tr(e,t){Mo(Sr,t),Mo(xr,e),Mo(Cr,wr);var n=t.nodeType;switch(n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oo(null,"");break;default:t=oo(t=(n=8===n?t.parentNode:t).namespaceURI||null,n=n.tagName)}Io(Cr),Mo(Cr,t)}function Rr(e){Io(Cr),Io(xr),Io(Sr)}function kr(e){_r(Sr.current);var t=_r(Cr.current),n=oo(t,e.type);t!==n&&(Mo(xr,e),Mo(Cr,n))}function Er(e){xr.current===e&&(Io(Cr),Io(xr))}var Or=0,Ir=2,Mr=4,Dr=8,$r=16,Ar=32,Nr=64,Pr=128,zr=je.ReactCurrentDispatcher,Hr=0,Lr=null,Fr=null,Gr=null,Br=null,Wr=null,Ur=null,jr=0,Vr=null,Zr=0,qr=!1,Kr=null,Yr=0;function Xr(){s("307")}function Qr(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jt(e[n],t[n]))return!1;return!0}function Jr(e,t,n,o,r,i){if(Hr=i,Lr=t,Gr=null!==e?e.memoizedState:null,zr.current=null===Gr?ui:pi,t=n(o,r),qr){do{qr=!1,Yr+=1,Gr=null!==e?e.memoizedState:null,Ur=Br,Vr=Wr=Fr=null,zr.current=pi,t=n(o,r)}while(qr);Kr=null,Yr=0}return zr.current=hi,(e=Lr).memoizedState=Br,e.expirationTime=jr,e.updateQueue=Vr,e.effectTag|=Zr,e=null!==Fr&&null!==Fr.next,Hr=0,Ur=Wr=Br=Gr=Fr=Lr=null,jr=0,Vr=null,Zr=0,e&&s("300"),t}function ei(){zr.current=hi,Hr=0,Ur=Wr=Br=Gr=Fr=Lr=null,jr=0,Vr=null,Zr=0,qr=!1,Kr=null,Yr=0}function ti(){var e={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};return null===Wr?Br=Wr=e:Wr=Wr.next=e,Wr}function ni(){if(null!==Ur)Ur=(Wr=Ur).next,Gr=null!==(Fr=Gr)?Fr.next:null;else{null===Gr&&s("310");var e={memoizedState:(Fr=Gr).memoizedState,baseState:Fr.baseState,queue:Fr.queue,baseUpdate:Fr.baseUpdate,next:null};Wr=null===Wr?Br=e:Wr.next=e,Gr=Fr.next}return Wr}function oi(e,t){return"function"==typeof t?t(e):t}function ri(e){var t=ni(),n=t.queue;if(null===n&&s("311"),0<Yr){var o=n.dispatch;if(null!==Kr){var r=Kr.get(n);if(void 0!==r){Kr.delete(n);var i=t.memoizedState;do{i=e(i,r.action),r=r.next}while(null!==r);return Jt(i,t.memoizedState)||(_i=!0),t.memoizedState=i,t.baseUpdate===n.last&&(t.baseState=i),n.eagerReducer=e,n.eagerState=i,[i,o]}}return[t.memoizedState,o]}o=n.last;var a=t.baseUpdate;if(i=t.baseState,null!==a?(null!==o&&(o.next=null),o=a.next):o=null!==o?o.next:null,null!==o){var l=r=null,c=o,d=!1;do{var h=c.expirationTime;h<Hr?(d||(d=!0,l=a,r=i),h>jr&&(jr=h)):i=c.eagerReducer===e?c.eagerState:e(i,c.action),a=c,c=c.next}while(null!==c&&c!==o);d||(l=a,r=i),Jt(i,t.memoizedState)||(_i=!0),t.memoizedState=i,t.baseUpdate=l,t.baseState=r,n.eagerReducer=e,n.eagerState=i}return[t.memoizedState,n.dispatch]}function ii(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},null===Vr?(Vr={lastEffect:null}).lastEffect=e.next=e:null===(t=Vr.lastEffect)?Vr.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,Vr.lastEffect=e),e}function si(e,t,n,o){var r=ti();Zr|=e,r.memoizedState=ii(t,n,void 0,void 0===o?null:o)}function ai(e,t,n,o){var r=ni();o=void 0===o?null:o;var i=void 0;if(null!==Fr){var s=Fr.memoizedState;if(i=s.destroy,null!==o&&Qr(o,s.deps))return void ii(Or,n,i,o)}Zr|=e,r.memoizedState=ii(t,n,i,o)}function li(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function ci(){}function di(e,t,n){25>Yr||s("301");var o=e.alternate;if(e===Lr||null!==o&&o===Lr)if(qr=!0,e={expirationTime:Hr,action:n,eagerReducer:null,eagerState:null,next:null},null===Kr&&(Kr=new Map),void 0===(n=Kr.get(t)))Kr.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}else{Vs();var r=ka(),i={expirationTime:r=Qs(r,e),action:n,eagerReducer:null,eagerState:null,next:null},a=t.last;if(null===a)i.next=i;else{var l=a.next;null!==l&&(i.next=l),a.next=i}if(t.last=i,0===e.expirationTime&&(null===o||0===o.expirationTime)&&null!==(o=t.eagerReducer))try{var c=t.eagerState,d=o(c,n);if(i.eagerReducer=o,i.eagerState=d,Jt(d,c))return}catch(e){}na(e,r)}}var hi={readContext:Ui,useCallback:Xr,useContext:Xr,useEffect:Xr,useImperativeHandle:Xr,useLayoutEffect:Xr,useMemo:Xr,useReducer:Xr,useRef:Xr,useState:Xr,useDebugValue:Xr},ui={readContext:Ui,useCallback:function(e,t){return ti().memoizedState=[e,void 0===t?null:t],e},useContext:Ui,useEffect:function(e,t){return si(516,Pr|Nr,e,t)},useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,si(4,Mr|Ar,li.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4,Mr|Ar,e,t)},useMemo:function(e,t){var n=ti();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=ti();return t=void 0!==n?n(t):t,o.memoizedState=o.baseState=t,e=(e=o.queue={last:null,dispatch:null,eagerReducer:e,eagerState:t}).dispatch=di.bind(null,Lr,e),[o.memoizedState,e]},useRef:function(e){return e={current:e},ti().memoizedState=e},useState:function(e){var t=ti();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={last:null,dispatch:null,eagerReducer:oi,eagerState:e}).dispatch=di.bind(null,Lr,e),[t.memoizedState,e]},useDebugValue:ci},pi={readContext:Ui,useCallback:function(e,t){var n=ni();t=void 0===t?null:t;var o=n.memoizedState;return null!==o&&null!==t&&Qr(t,o[1])?o[0]:(n.memoizedState=[e,t],e)},useContext:Ui,useEffect:function(e,t){return ai(516,Pr|Nr,e,t)},useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ai(4,Mr|Ar,li.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ai(4,Mr|Ar,e,t)},useMemo:function(e,t){var n=ni();t=void 0===t?null:t;var o=n.memoizedState;return null!==o&&null!==t&&Qr(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)},useReducer:ri,useRef:function(){return ni().memoizedState},useState:function(e){return ri(oi)},useDebugValue:ci},fi=null,mi=null,gi=!1;function bi(e,t){var n=qo(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function vi(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function yi(e){if(gi){var t=mi;if(t){var n=t;if(!vi(e,t)){if(!(t=Ro(n))||!vi(e,t))return e.effectTag|=2,gi=!1,void(fi=e);bi(fi,n)}fi=e,mi=ko(t)}else e.effectTag|=2,gi=!1,fi=e}}function wi(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&18!==e.tag;)e=e.return;fi=e}function Ci(e){if(e!==fi)return!1;if(!gi)return wi(e),gi=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Co(t,e.memoizedProps))for(t=mi;t;)bi(e,t),t=Ro(t);return wi(e),mi=fi?Ro(e.stateNode):null,!0}function xi(){mi=fi=null,gi=!1}var Si=je.ReactCurrentOwner,_i=!1;function Ti(e,t,n,o){t.child=null===e?yr(t,null,n,o):vr(t,e.child,n,o)}function Ri(e,t,n,o,r){n=n.render;var i=t.ref;return Wi(t,r),o=Jr(e,t,n,o,i,r),null===e||_i?(t.effectTag|=1,Ti(e,t,o,r),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=r&&(e.expirationTime=0),Ni(e,t,r))}function ki(e,t,n,o,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Ko(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Xo(n.type,null,o,null,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Ei(e,t,s,o,r,i))}return s=e.child,r<i&&(r=s.memoizedProps,(n=null!==(n=n.compare)?n:tn)(r,o)&&e.ref===t.ref)?Ni(e,t,i):(t.effectTag|=1,(e=Yo(s,o)).ref=t.ref,e.return=t,t.child=e)}function Ei(e,t,n,o,r,i){return null!==e&&tn(e.memoizedProps,o)&&e.ref===t.ref&&(_i=!1,r<i)?Ni(e,t,i):Ii(e,t,n,o,i)}function Oi(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Ii(e,t,n,o,r){var i=zo(n)?No:$o.current;return i=Po(t,i),Wi(t,r),n=Jr(e,t,n,o,i,r),null===e||_i?(t.effectTag|=1,Ti(e,t,n,r),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=r&&(e.expirationTime=0),Ni(e,t,r))}function Mi(e,t,n,o,r){if(zo(n)){var i=!0;Bo(t)}else i=!1;if(Wi(t,r),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),hr(t,n,o),pr(t,n,o,r),o=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;"object"==typeof c&&null!==c?c=Ui(c):c=Po(t,c=zo(n)?No:$o.current);var d=n.getDerivedStateFromProps,h="function"==typeof d||"function"==typeof s.getSnapshotBeforeUpdate;h||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==o||l!==c)&&ur(t,s,o,c),Ki=!1;var u=t.memoizedState;l=s.state=u;var p=t.updateQueue;null!==p&&(rs(t,p,o,s,r),l=t.memoizedState),a!==o||u!==l||Ao.current||Ki?("function"==typeof d&&(lr(t,n,d,o),l=t.memoizedState),(a=Ki||dr(t,n,a,o,u,l,c))?(h||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.effectTag|=4)):("function"==typeof s.componentDidMount&&(t.effectTag|=4),t.memoizedProps=o,t.memoizedState=l),s.props=o,s.state=l,s.context=c,o=a):("function"==typeof s.componentDidMount&&(t.effectTag|=4),o=!1)}else s=t.stateNode,a=t.memoizedProps,s.props=t.type===t.elementType?a:sr(t.type,a),l=s.context,"object"==typeof(c=n.contextType)&&null!==c?c=Ui(c):c=Po(t,c=zo(n)?No:$o.current),(h="function"==typeof(d=n.getDerivedStateFromProps)||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==o||l!==c)&&ur(t,s,o,c),Ki=!1,l=t.memoizedState,u=s.state=l,null!==(p=t.updateQueue)&&(rs(t,p,o,s,r),u=t.memoizedState),a!==o||l!==u||Ao.current||Ki?("function"==typeof d&&(lr(t,n,d,o),u=t.memoizedState),(d=Ki||dr(t,n,a,o,l,u,c))?(h||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(o,u,c),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(o,u,c)),"function"==typeof s.componentDidUpdate&&(t.effectTag|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),t.memoizedProps=o,t.memoizedState=u),s.props=o,s.state=u,s.context=c,o=d):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),o=!1);return Di(e,t,n,o,i,r)}function Di(e,t,n,o,r,i){Oi(e,t);var s=0!=(64&t.effectTag);if(!o&&!s)return r&&Wo(t,n,!1),Ni(e,t,i);o=t.stateNode,Si.current=t;var a=s&&"function"!=typeof n.getDerivedStateFromError?null:o.render();return t.effectTag|=1,null!==e&&s?(t.child=vr(t,e.child,null,i),t.child=vr(t,null,a,i)):Ti(e,t,a,i),t.memoizedState=o.state,r&&Wo(t,n,!0),t.child}function $i(e){var t=e.stateNode;t.pendingContext?Fo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Fo(0,t.context,!1),Tr(e,t.containerInfo)}function Ai(e,t,n){var o=t.mode,r=t.pendingProps,i=t.memoizedState;if(0==(64&t.effectTag)){i=null;var s=!1}else i={timedOutAt:null!==i?i.timedOutAt:0},s=!0,t.effectTag&=-65;if(null===e)if(s){var a=r.fallback;e=Qo(null,o,0,null),0==(1&t.mode)&&(e.child=null!==t.memoizedState?t.child.child:t.child),o=Qo(a,o,n,null),e.sibling=o,(n=e).return=o.return=t}else n=o=yr(t,null,r.children,n);else null!==e.memoizedState?(a=(o=e.child).sibling,s?(n=r.fallback,r=Yo(o,o.pendingProps),0==(1&t.mode)&&((s=null!==t.memoizedState?t.child.child:t.child)!==o.child&&(r.child=s)),o=r.sibling=Yo(a,n,a.expirationTime),n=r,r.childExpirationTime=0,n.return=o.return=t):n=o=vr(t,o.child,r.children,n)):(a=e.child,s?(s=r.fallback,(r=Qo(null,o,0,null)).child=a,0==(1&t.mode)&&(r.child=null!==t.memoizedState?t.child.child:t.child),(o=r.sibling=Qo(s,o,n,null)).effectTag|=2,n=r,r.childExpirationTime=0,n.return=o.return=t):o=n=vr(t,a,r.children,n)),t.stateNode=e.stateNode;return t.memoizedState=i,t.child=n,o}function Ni(e,t,n){if(null!==e&&(t.contextDependencies=e.contextDependencies),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child&&s("153"),null!==t.child){for(n=Yo(e=t.child,e.pendingProps,e.expirationTime),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Yo(e,e.pendingProps,e.expirationTime)).return=t;n.sibling=null}return t.child}function Pi(e,t,n){var o=t.expirationTime;if(null!==e){if(e.memoizedProps!==t.pendingProps||Ao.current)_i=!0;else if(o<n){switch(_i=!1,t.tag){case 3:$i(t),xi();break;case 5:kr(t);break;case 1:zo(t.type)&&Bo(t);break;case 4:Tr(t,t.stateNode.containerInfo);break;case 10:Gi(t,t.memoizedProps.value);break;case 13:if(null!==t.memoizedState)return 0!==(o=t.child.childExpirationTime)&&o>=n?Ai(e,t,n):null!==(t=Ni(e,t,n))?t.sibling:null}return Ni(e,t,n)}}else _i=!1;switch(t.expirationTime=0,t.tag){case 2:o=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps;var r=Po(t,$o.current);if(Wi(t,n),r=Jr(null,t,o,e,r,n),t.effectTag|=1,"object"==typeof r&&null!==r&&"function"==typeof r.render&&void 0===r.$$typeof){if(t.tag=1,ei(),zo(o)){var i=!0;Bo(t)}else i=!1;t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null;var a=o.getDerivedStateFromProps;"function"==typeof a&&lr(t,o,a,e),r.updater=cr,t.stateNode=r,r._reactInternalFiber=t,pr(t,o,e,n),t=Di(null,t,o,!0,i,n)}else t.tag=0,Ti(null,t,r,n),t=t.child;return t;case 16:switch(r=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),i=t.pendingProps,e=function(e){var t=e._result;switch(e._status){case 1:return t;case 2:case 0:throw t;default:switch(e._status=0,(t=(t=e._ctor)()).then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)})),e._status){case 1:return e._result;case 2:throw e._result}throw e._result=t,t}}(r),t.type=e,r=t.tag=function(e){if("function"==typeof e)return Ko(e)?1:0;if(null!=e){if((e=e.$$typeof)===nt)return 11;if(e===rt)return 14}return 2}(e),i=sr(e,i),a=void 0,r){case 0:a=Ii(null,t,e,i,n);break;case 1:a=Mi(null,t,e,i,n);break;case 11:a=Ri(null,t,e,i,n);break;case 14:a=ki(null,t,e,sr(e.type,i),o,n);break;default:s("306",e,"")}return a;case 0:return o=t.type,r=t.pendingProps,Ii(e,t,o,r=t.elementType===o?r:sr(o,r),n);case 1:return o=t.type,r=t.pendingProps,Mi(e,t,o,r=t.elementType===o?r:sr(o,r),n);case 3:return $i(t),null===(o=t.updateQueue)&&s("282"),r=null!==(r=t.memoizedState)?r.element:null,rs(t,o,t.pendingProps,null,n),(o=t.memoizedState.element)===r?(xi(),t=Ni(e,t,n)):(r=t.stateNode,(r=(null===e||null===e.child)&&r.hydrate)&&(mi=ko(t.stateNode.containerInfo),fi=t,r=gi=!0),r?(t.effectTag|=2,t.child=yr(t,null,o,n)):(Ti(e,t,o,n),xi()),t=t.child),t;case 5:return kr(t),null===e&&yi(t),o=t.type,r=t.pendingProps,i=null!==e?e.memoizedProps:null,a=r.children,Co(o,r)?a=null:null!==i&&Co(o,i)&&(t.effectTag|=16),Oi(e,t),1!==n&&1&t.mode&&r.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Ti(e,t,a,n),t=t.child),t;case 6:return null===e&&yi(t),null;case 13:return Ai(e,t,n);case 4:return Tr(t,t.stateNode.containerInfo),o=t.pendingProps,null===e?t.child=vr(t,null,o,n):Ti(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,Ri(e,t,o,r=t.elementType===o?r:sr(o,r),n);case 7:return Ti(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ti(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,a=t.memoizedProps,Gi(t,i=r.value),null!==a){var l=a.value;if(0===(i=Jt(l,i)?0:0|("function"==typeof o._calculateChangedBits?o._calculateChangedBits(l,i):1073741823))){if(a.children===r.children&&!Ao.current){t=Ni(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var c=l.contextDependencies;if(null!==c){a=l.child;for(var d=c.first;null!==d;){if(d.context===o&&0!=(d.observedBits&i)){1===l.tag&&((d=Qi(n)).tag=Zi,es(l,d)),l.expirationTime<n&&(l.expirationTime=n),null!==(d=l.alternate)&&d.expirationTime<n&&(d.expirationTime=n),d=n;for(var h=l.return;null!==h;){var u=h.alternate;if(h.childExpirationTime<d)h.childExpirationTime=d,null!==u&&u.childExpirationTime<d&&(u.childExpirationTime=d);else{if(!(null!==u&&u.childExpirationTime<d))break;u.childExpirationTime=d}h=h.return}c.expirationTime<n&&(c.expirationTime=n);break}d=d.next}}else a=10===l.tag&&l.type===t.type?null:l.child;if(null!==a)a.return=l;else for(a=l;null!==a;){if(a===t){a=null;break}if(null!==(l=a.sibling)){l.return=a.return,a=l;break}a=a.return}l=a}}Ti(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=(i=t.pendingProps).children,Wi(t,n),o=o(r=Ui(r,i.unstable_observedBits)),t.effectTag|=1,Ti(e,t,o,n),t.child;case 14:return i=sr(r=t.type,t.pendingProps),ki(e,t,r,i=sr(r.type,i),o,n);case 15:return Ei(e,t,t.type,t.pendingProps,o,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:sr(o,r),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,zo(o)?(e=!0,Bo(t)):e=!1,Wi(t,n),hr(t,o,r),pr(t,o,r,n),Di(null,t,o,!0,e,n)}s("156")}var zi={current:null},Hi=null,Li=null,Fi=null;function Gi(e,t){var n=e.type._context;Mo(zi,n._currentValue),n._currentValue=t}function Bi(e){var t=zi.current;Io(zi),e.type._context._currentValue=t}function Wi(e,t){Hi=e,Fi=Li=null;var n=e.contextDependencies;null!==n&&n.expirationTime>=t&&(_i=!0),e.contextDependencies=null}function Ui(e,t){return Fi!==e&&!1!==t&&0!==t&&("number"==typeof t&&1073741823!==t||(Fi=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Li?(null===Hi&&s("308"),Li=t,Hi.contextDependencies={first:t,expirationTime:0}):Li=Li.next=t),e._currentValue}var ji=0,Vi=1,Zi=2,qi=3,Ki=!1;function Yi(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Xi(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Qi(e){return{expirationTime:e,tag:ji,payload:null,callback:null,next:null,nextEffect:null}}function Ji(e,t){null===e.lastUpdate?e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function es(e,t){var n=e.alternate;if(null===n){var o=e.updateQueue,r=null;null===o&&(o=e.updateQueue=Yi(e.memoizedState))}else o=e.updateQueue,r=n.updateQueue,null===o?null===r?(o=e.updateQueue=Yi(e.memoizedState),r=n.updateQueue=Yi(n.memoizedState)):o=e.updateQueue=Xi(r):null===r&&(r=n.updateQueue=Xi(o));null===r||o===r?Ji(o,t):null===o.lastUpdate||null===r.lastUpdate?(Ji(o,t),Ji(r,t)):(Ji(o,t),r.lastUpdate=t)}function ts(e,t){var n=e.updateQueue;null===(n=null===n?e.updateQueue=Yi(e.memoizedState):ns(e,n)).lastCapturedUpdate?n.firstCapturedUpdate=n.lastCapturedUpdate=t:(n.lastCapturedUpdate.next=t,n.lastCapturedUpdate=t)}function ns(e,t){var n=e.alternate;return null!==n&&t===n.updateQueue&&(t=e.updateQueue=Xi(t)),t}function os(e,t,n,o,i,s){switch(n.tag){case Vi:return"function"==typeof(e=n.payload)?e.call(s,o,i):e;case qi:e.effectTag=-2049&e.effectTag|64;case ji:if(null==(i="function"==typeof(e=n.payload)?e.call(s,o,i):e))break;return r({},o,i);case Zi:Ki=!0}return o}function rs(e,t,n,o,r){Ki=!1;for(var i=(t=ns(e,t)).baseState,s=null,a=0,l=t.firstUpdate,c=i;null!==l;){var d=l.expirationTime;d<r?(null===s&&(s=l,i=c),a<d&&(a=d)):(c=os(e,0,l,c,n,o),null!==l.callback&&(e.effectTag|=32,l.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=l:(t.lastEffect.nextEffect=l,t.lastEffect=l))),l=l.next}for(d=null,l=t.firstCapturedUpdate;null!==l;){var h=l.expirationTime;h<r?(null===d&&(d=l,null===s&&(i=c)),a<h&&(a=h)):(c=os(e,0,l,c,n,o),null!==l.callback&&(e.effectTag|=32,l.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=l:(t.lastCapturedEffect.nextEffect=l,t.lastCapturedEffect=l))),l=l.next}null===s&&(t.lastUpdate=null),null===d?t.lastCapturedUpdate=null:e.effectTag|=32,null===s&&null===d&&(i=c),t.baseState=i,t.firstUpdate=s,t.firstCapturedUpdate=d,e.expirationTime=a,e.memoizedState=c}function is(e,t,n){null!==t.firstCapturedUpdate&&(null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),t.firstCapturedUpdate=t.lastCapturedUpdate=null),ss(t.firstEffect,n),t.firstEffect=t.lastEffect=null,ss(t.firstCapturedEffect,n),t.firstCapturedEffect=t.lastCapturedEffect=null}function ss(e,t){for(;null!==e;){var n=e.callback;if(null!==n){e.callback=null;var o=t;"function"!=typeof n&&s("191",n),n.call(o)}e=e.nextEffect}}function as(e,t){return{value:e,source:t,stack:ct(t)}}function ls(e){e.effectTag|=4}var cs=void 0,ds=void 0,hs=void 0,us=void 0;cs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ds=function(){},hs=function(e,t,n,o,i){var s=e.memoizedProps;if(s!==o){var a=t.stateNode;switch(_r(Cr.current),e=null,n){case"input":s=wt(a,s),o=wt(a,o),e=[];break;case"option":s=Kn(a,s),o=Kn(a,o),e=[];break;case"select":s=r({},s,{value:void 0}),o=r({},o,{value:void 0}),e=[];break;case"textarea":s=Xn(a,s),o=Xn(a,o),e=[];break;default:"function"!=typeof s.onClick&&"function"==typeof o.onClick&&(a.onclick=bo)}fo(n,o),a=n=void 0;var l=null;for(n in s)if(!o.hasOwnProperty(n)&&s.hasOwnProperty(n)&&null!=s[n])if("style"===n){var c=s[n];for(a in c)c.hasOwnProperty(a)&&(l||(l={}),l[a]="")}else"dangerouslySetInnerHTML"!==n&&"children"!==n&&"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&"autoFocus"!==n&&(w.hasOwnProperty(n)?e||(e=[]):(e=e||[]).push(n,null));for(n in o){var d=o[n];if(c=null!=s?s[n]:void 0,o.hasOwnProperty(n)&&d!==c&&(null!=d||null!=c))if("style"===n)if(c){for(a in c)!c.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(l||(l={}),l[a]="");for(a in d)d.hasOwnProperty(a)&&c[a]!==d[a]&&(l||(l={}),l[a]=d[a])}else l||(e||(e=[]),e.push(n,l)),l=d;else"dangerouslySetInnerHTML"===n?(d=d?d.__html:void 0,c=c?c.__html:void 0,null!=d&&c!==d&&(e=e||[]).push(n,""+d)):"children"===n?c===d||"string"!=typeof d&&"number"!=typeof d||(e=e||[]).push(n,""+d):"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&(w.hasOwnProperty(n)?(null!=d&&go(i,n),e||c===d||(e=[])):(e=e||[]).push(n,d))}l&&(e=e||[]).push("style",l),i=e,(t.updateQueue=i)&&ls(t)}},us=function(e,t,n,o){n!==o&&ls(t)};var ps="function"==typeof WeakSet?WeakSet:Set;function fs(e,t){var n=t.source,o=t.stack;null===o&&null!==n&&(o=ct(n)),null!==n&&lt(n.type),t=t.value,null!==e&&1===e.tag&&lt(e.type)}function ms(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Xs(e,t)}else t.current=null}function gs(e,t,n){if(null!==(n=null!==(n=n.updateQueue)?n.lastEffect:null)){var o=n=n.next;do{if((o.tag&e)!==Or){var r=o.destroy;o.destroy=void 0,void 0!==r&&r()}(o.tag&t)!==Or&&(r=o.create,o.destroy=r()),o=o.next}while(o!==n)}}function bs(e){switch("function"==typeof jo&&jo(e),e.tag){case 0:case 11:case 14:case 15:var t=e.updateQueue;if(null!==t&&null!==(t=t.lastEffect)){var n=t=t.next;do{var o=n.destroy;if(void 0!==o){var r=e;try{o()}catch(e){Xs(r,e)}}n=n.next}while(n!==t)}break;case 1:if(ms(e),"function"==typeof(t=e.stateNode).componentWillUnmount)try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){Xs(e,t)}break;case 5:ms(e);break;case 4:ws(e)}}function vs(e){return 5===e.tag||3===e.tag||4===e.tag}function ys(e){e:{for(var t=e.return;null!==t;){if(vs(t)){var n=t;break e}t=t.return}s("160"),n=void 0}var o=t=void 0;switch(n.tag){case 5:t=n.stateNode,o=!1;break;case 3:case 4:t=n.stateNode.containerInfo,o=!0;break;default:s("161")}16&n.effectTag&&(ao(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||vs(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}for(var r=e;;){if(5===r.tag||6===r.tag)if(n)if(o){var i=t,a=r.stateNode,l=n;8===i.nodeType?i.parentNode.insertBefore(a,l):i.insertBefore(a,l)}else t.insertBefore(r.stateNode,n);else o?(a=t,l=r.stateNode,8===a.nodeType?(i=a.parentNode).insertBefore(l,a):(i=a).appendChild(l),null!=(a=a._reactRootContainer)||null!==i.onclick||(i.onclick=bo)):t.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)break;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function ws(e){for(var t=e,n=!1,o=void 0,r=void 0;;){if(!n){n=t.return;e:for(;;){switch(null===n&&s("160"),n.tag){case 5:o=n.stateNode,r=!1;break e;case 3:case 4:o=n.stateNode.containerInfo,r=!0;break e}n=n.return}n=!0}if(5===t.tag||6===t.tag){e:for(var i=t,a=i;;)if(bs(a),null!==a.child&&4!==a.tag)a.child.return=a,a=a.child;else{if(a===i)break;for(;null===a.sibling;){if(null===a.return||a.return===i)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}r?(i=o,a=t.stateNode,8===i.nodeType?i.parentNode.removeChild(a):i.removeChild(a)):o.removeChild(t.stateNode)}else if(4===t.tag){if(null!==t.child){o=t.stateNode.containerInfo,r=!0,t.child.return=t,t=t.child;continue}}else if(bs(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;4===(t=t.return).tag&&(n=!1)}t.sibling.return=t.return,t=t.sibling}}function Cs(e,t){switch(t.tag){case 0:case 11:case 14:case 15:gs(Mr,Dr,t);break;case 1:case 3:case 12:case 17:break;case 5:var n=t.stateNode;if(null!=n){var o=t.memoizedProps;e=null!==e?e.memoizedProps:o;var r=t.type,i=t.updateQueue;t.updateQueue=null,null!==i&&function(e,t,n,o,r){e[N]=r,"input"===n&&"radio"===r.type&&null!=r.name&&xt(e,r),mo(n,o),o=mo(n,r);for(var i=0;i<t.length;i+=2){var s=t[i],a=t[i+1];"style"===s?uo(e,a):"dangerouslySetInnerHTML"===s?so(e,a):"children"===s?ao(e,a):vt(e,s,a,o)}switch(n){case"input":St(e,r);break;case"textarea":Jn(e,r);break;case"select":t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!r.multiple,null!=(n=r.value)?Yn(e,!!r.multiple,n,!1):t!==!!r.multiple&&(null!=r.defaultValue?Yn(e,!!r.multiple,r.defaultValue,!0):Yn(e,!!r.multiple,r.multiple?[]:"",!1))}}(n,i,r,e,o)}break;case 6:null===t.stateNode&&s("162"),t.stateNode.nodeValue=t.memoizedProps;break;case 13:if(n=t.memoizedState,o=void 0,e=t,null===n?o=!1:(o=!0,e=t.child,0===n.timedOutAt&&(n.timedOutAt=ka())),null!==e&&function(e,t){for(var n=e;;){if(5===n.tag){var o=n.stateNode;if(t)o.style.display="none";else{o=n.stateNode;var r=n.memoizedProps.style;r=null!=r&&r.hasOwnProperty("display")?r.display:null,o.style.display=ho("display",r)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else{if(13===n.tag&&null!==n.memoizedState){(o=n.child.sibling).return=n,n=o;continue}if(null!==n.child){n.child.return=n,n=n.child;continue}}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}(e,o),null!==(n=t.updateQueue)){t.updateQueue=null;var a=t.stateNode;null===a&&(a=t.stateNode=new ps),n.forEach((function(e){var n=ea.bind(null,t,e);a.has(e)||(a.add(e),e.then(n,n))}))}break;default:s("163")}}var xs="function"==typeof WeakMap?WeakMap:Map;function Ss(e,t,n){(n=Qi(n)).tag=qi,n.payload={element:null};var o=t.value;return n.callback=function(){za(o),fs(e,t)},n}function _s(e,t,n){(n=Qi(n)).tag=qi;var o=e.type.getDerivedStateFromError;if("function"==typeof o){var r=t.value;n.payload=function(){return o(r)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){"function"!=typeof o&&(null===Fs?Fs=new Set([this]):Fs.add(this));var n=t.value,r=t.stack;fs(e,t),this.componentDidCatch(n,{componentStack:null!==r?r:""})}),n}function Ts(e){switch(e.tag){case 1:zo(e.type)&&Ho();var t=e.effectTag;return 2048&t?(e.effectTag=-2049&t|64,e):null;case 3:return Rr(),Lo(),0!=(64&(t=e.effectTag))&&s("285"),e.effectTag=-2049&t|64,e;case 5:return Er(e),null;case 13:return 2048&(t=e.effectTag)?(e.effectTag=-2049&t|64,e):null;case 18:default:return null;case 4:return Rr(),null;case 10:return Bi(e),null}}var Rs=je.ReactCurrentDispatcher,ks=je.ReactCurrentOwner,Es=1073741822,Os=!1,Is=null,Ms=null,Ds=0,$s=-1,As=!1,Ns=null,Ps=!1,zs=null,Hs=null,Ls=null,Fs=null;function Gs(){if(null!==Is)for(var e=Is.return;null!==e;){var t=e;switch(t.tag){case 1:var n=t.type.childContextTypes;null!=n&&Ho();break;case 3:Rr(),Lo();break;case 5:Er(t);break;case 4:Rr();break;case 10:Bi(t)}e=e.return}Ms=null,Ds=0,$s=-1,As=!1,Is=null}function Bs(){for(;null!==Ns;){var e=Ns.effectTag;if(16&e&&ao(Ns.stateNode,""),128&e){var t=Ns.alternate;null!==t&&(null!==(t=t.ref)&&("function"==typeof t?t(null):t.current=null))}switch(14&e){case 2:ys(Ns),Ns.effectTag&=-3;break;case 6:ys(Ns),Ns.effectTag&=-3,Cs(Ns.alternate,Ns);break;case 4:Cs(Ns.alternate,Ns);break;case 8:ws(e=Ns),e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,null!==(e=e.alternate)&&(e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null)}Ns=Ns.nextEffect}}function Ws(){for(;null!==Ns;){if(256&Ns.effectTag)e:{var e=Ns.alternate,t=Ns;switch(t.tag){case 0:case 11:case 15:gs(Ir,Or,t);break e;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,o=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:sr(t.type,n),o),e.__reactInternalSnapshotBeforeUpdate=t}break e;case 3:case 5:case 6:case 4:case 17:break e;default:s("163")}}Ns=Ns.nextEffect}}function Us(e,t){for(;null!==Ns;){var n=Ns.effectTag;if(36&n){var o=Ns.alternate,r=Ns,i=t;switch(r.tag){case 0:case 11:case 15:gs($r,Ar,r);break;case 1:var a=r.stateNode;if(4&r.effectTag)if(null===o)a.componentDidMount();else{var l=r.elementType===r.type?o.memoizedProps:sr(r.type,o.memoizedProps);a.componentDidUpdate(l,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}null!==(o=r.updateQueue)&&is(0,o,a);break;case 3:if(null!==(o=r.updateQueue)){if(a=null,null!==r.child)switch(r.child.tag){case 5:case 1:a=r.child.stateNode}is(0,o,a)}break;case 5:i=r.stateNode,null===o&&4&r.effectTag&&wo(r.type,r.memoizedProps)&&i.focus();break;case 6:case 4:case 12:case 13:case 17:break;default:s("163")}}128&n&&(null!==(r=Ns.ref)&&(i=Ns.stateNode,"function"==typeof r?r(i):r.current=i)),512&n&&(zs=e),Ns=Ns.nextEffect}}function js(e,t){Ls=Hs=zs=null;var n=la;la=!0;do{if(512&t.effectTag){var o=!1,r=void 0;try{var i=t;gs(Pr,Or,i),gs(Or,Nr,i)}catch(e){o=!0,r=e}o&&Xs(t,r)}t=t.nextEffect}while(null!==t);la=n,0!==(n=e.expirationTime)&&Ea(e,n),fa||la||$a(1073741823,!1)}function Vs(){null!==Hs&&To(Hs),null!==Ls&&Ls()}function Zs(e,t){Ps=Os=!0,e.current===t&&s("177");var n=e.pendingCommitExpirationTime;0===n&&s("261"),e.pendingCommitExpirationTime=0;var o=t.expirationTime,r=t.childExpirationTime;for(function(e,t){if(e.didError=!1,0===t)e.earliestPendingTime=0,e.latestPendingTime=0,e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0;else{t<e.latestPingedTime&&(e.latestPingedTime=0);var n=e.latestPendingTime;0!==n&&(n>t?e.earliestPendingTime=e.latestPendingTime=0:e.earliestPendingTime>t&&(e.earliestPendingTime=e.latestPendingTime)),0===(n=e.earliestSuspendedTime)?nr(e,t):t<e.latestSuspendedTime?(e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0,nr(e,t)):t>n&&nr(e,t)}ir(0,e)}(e,r>o?r:o),ks.current=null,o=void 0,1<t.effectTag?null!==t.lastEffect?(t.lastEffect.nextEffect=t,o=t.firstEffect):o=t:o=t.firstEffect,vo=Tn,yo=function(){var e=Hn();if(Ln(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(t=(t=e.ownerDocument)&&t.defaultView||window).getSelection&&t.getSelection();if(n&&0!==n.rangeCount){t=n.anchorNode;var o=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{t.nodeType,r.nodeType}catch(e){t=null;break e}var i=0,s=-1,a=-1,l=0,c=0,d=e,h=null;t:for(;;){for(var u;d!==t||0!==o&&3!==d.nodeType||(s=i+o),d!==r||0!==n&&3!==d.nodeType||(a=i+n),3===d.nodeType&&(i+=d.nodeValue.length),null!==(u=d.firstChild);)h=d,d=u;for(;;){if(d===e)break t;if(h===t&&++l===o&&(s=i),h===r&&++c===n&&(a=i),null!==(u=d.nextSibling))break;h=(d=h).parentNode}d=u}t=-1===s||-1===a?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;return{focusedElem:e,selectionRange:t}}(),Tn=!1,Ns=o;null!==Ns;){r=!1;var a=void 0;try{Ws()}catch(e){r=!0,a=e}r&&(null===Ns&&s("178"),Xs(Ns,a),null!==Ns&&(Ns=Ns.nextEffect))}for(Ns=o;null!==Ns;){r=!1,a=void 0;try{Bs()}catch(e){r=!0,a=e}r&&(null===Ns&&s("178"),Xs(Ns,a),null!==Ns&&(Ns=Ns.nextEffect))}for(Fn(yo),yo=null,Tn=!!vo,vo=null,e.current=t,Ns=o;null!==Ns;){r=!1,a=void 0;try{Us(e,n)}catch(e){r=!0,a=e}r&&(null===Ns&&s("178"),Xs(Ns,a),null!==Ns&&(Ns=Ns.nextEffect))}if(null!==o&&null!==zs){var l=js.bind(null,e,o);Hs=i.unstable_runWithPriority(i.unstable_NormalPriority,(function(){return _o(l)})),Ls=l}Os=Ps=!1,"function"==typeof Uo&&Uo(t.stateNode),n=t.expirationTime,0===(t=(t=t.childExpirationTime)>n?t:n)&&(Fs=null),function(e,t){e.expirationTime=t,e.finishedWork=null}(e,t)}function qs(e){for(;;){var t=e.alternate,n=e.return,o=e.sibling;if(0==(1024&e.effectTag)){Is=e;e:{var i=t,a=Ds,l=(t=e).pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 18:break;case 1:case 17:zo(t.type)&&Ho();break;case 3:Rr(),Lo(),(l=t.stateNode).pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),null!==i&&null!==i.child||(Ci(t),t.effectTag&=-3),ds(t);break;case 5:Er(t);var c=_r(Sr.current);if(a=t.type,null!==i&&null!=t.stateNode)hs(i,t,a,l,c),i.ref!==t.ref&&(t.effectTag|=128);else if(l){var d=_r(Cr.current);if(Ci(t)){i=(l=t).stateNode;var h=l.type,u=l.memoizedProps,p=c;switch(i[A]=l,i[N]=u,a=void 0,c=h){case"iframe":case"object":Rn("load",i);break;case"video":case"audio":for(h=0;h<ne.length;h++)Rn(ne[h],i);break;case"source":Rn("error",i);break;case"img":case"image":case"link":Rn("error",i),Rn("load",i);break;case"form":Rn("reset",i),Rn("submit",i);break;case"details":Rn("toggle",i);break;case"input":Ct(i,u),Rn("invalid",i),go(p,"onChange");break;case"select":i._wrapperState={wasMultiple:!!u.multiple},Rn("invalid",i),go(p,"onChange");break;case"textarea":Qn(i,u),Rn("invalid",i),go(p,"onChange")}for(a in fo(c,u),h=null,u)u.hasOwnProperty(a)&&(d=u[a],"children"===a?"string"==typeof d?i.textContent!==d&&(h=["children",d]):"number"==typeof d&&i.textContent!==""+d&&(h=["children",""+d]):w.hasOwnProperty(a)&&null!=d&&go(p,a));switch(c){case"input":We(i),_t(i,u,!0);break;case"textarea":We(i),eo(i);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(i.onclick=bo)}a=h,l.updateQueue=a,(l=null!==a)&&ls(t)}else{u=t,i=a,p=l,h=9===c.nodeType?c:c.ownerDocument,d===to.html&&(d=no(i)),d===to.html?"script"===i?((i=h.createElement("div")).innerHTML="<script><\/script>",h=i.removeChild(i.firstChild)):"string"==typeof p.is?h=h.createElement(i,{is:p.is}):(h=h.createElement(i),"select"===i&&p.multiple&&(h.multiple=!0)):h=h.createElementNS(d,i),(i=h)[A]=u,i[N]=l,cs(i,t,!1,!1),p=i;var f=c,m=mo(h=a,u=l);switch(h){case"iframe":case"object":Rn("load",p),c=u;break;case"video":case"audio":for(c=0;c<ne.length;c++)Rn(ne[c],p);c=u;break;case"source":Rn("error",p),c=u;break;case"img":case"image":case"link":Rn("error",p),Rn("load",p),c=u;break;case"form":Rn("reset",p),Rn("submit",p),c=u;break;case"details":Rn("toggle",p),c=u;break;case"input":Ct(p,u),c=wt(p,u),Rn("invalid",p),go(f,"onChange");break;case"option":c=Kn(p,u);break;case"select":p._wrapperState={wasMultiple:!!u.multiple},c=r({},u,{value:void 0}),Rn("invalid",p),go(f,"onChange");break;case"textarea":Qn(p,u),c=Xn(p,u),Rn("invalid",p),go(f,"onChange");break;default:c=u}fo(h,c),d=void 0;var g=h,b=p,v=c;for(d in v)if(v.hasOwnProperty(d)){var y=v[d];"style"===d?uo(b,y):"dangerouslySetInnerHTML"===d?null!=(y=y?y.__html:void 0)&&so(b,y):"children"===d?"string"==typeof y?("textarea"!==g||""!==y)&&ao(b,y):"number"==typeof y&&ao(b,""+y):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(w.hasOwnProperty(d)?null!=y&&go(f,d):null!=y&&vt(b,d,y,m))}switch(h){case"input":We(p),_t(p,u,!1);break;case"textarea":We(p),eo(p);break;case"option":null!=u.value&&p.setAttribute("value",""+yt(u.value));break;case"select":(c=p).multiple=!!u.multiple,null!=(p=u.value)?Yn(c,!!u.multiple,p,!1):null!=u.defaultValue&&Yn(c,!!u.multiple,u.defaultValue,!0);break;default:"function"==typeof c.onClick&&(p.onclick=bo)}(l=wo(a,l))&&ls(t),t.stateNode=i}null!==t.ref&&(t.effectTag|=128)}else null===t.stateNode&&s("166");break;case 6:i&&null!=t.stateNode?us(i,t,i.memoizedProps,l):("string"!=typeof l&&(null===t.stateNode&&s("166")),i=_r(Sr.current),_r(Cr.current),Ci(t)?(a=(l=t).stateNode,i=l.memoizedProps,a[A]=l,(l=a.nodeValue!==i)&&ls(t)):(a=t,(l=(9===i.nodeType?i:i.ownerDocument).createTextNode(l))[A]=t,a.stateNode=l));break;case 13:if(l=t.memoizedState,0!=(64&t.effectTag)){t.expirationTime=a,Is=t;break e}l=null!==l,a=null!==i&&null!==i.memoizedState,null!==i&&!l&&a&&(null!==(i=i.child.sibling)&&(null!==(c=t.firstEffect)?(t.firstEffect=i,i.nextEffect=c):(t.firstEffect=t.lastEffect=i,i.nextEffect=null),i.effectTag=8)),(l||a)&&(t.effectTag|=4);break;case 4:Rr(),ds(t);break;case 10:Bi(t);break;default:s("156")}Is=null}if(t=e,1===Ds||1!==t.childExpirationTime){for(l=0,a=t.child;null!==a;)(i=a.expirationTime)>l&&(l=i),(c=a.childExpirationTime)>l&&(l=c),a=a.sibling;t.childExpirationTime=l}if(null!==Is)return Is;null!==n&&0==(1024&n.effectTag)&&(null===n.firstEffect&&(n.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect),1<e.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e))}else{if(null!==(e=Ts(e)))return e.effectTag&=1023,e;null!==n&&(n.firstEffect=n.lastEffect=null,n.effectTag|=1024)}if(null!==o)return o;if(null===n)break;e=n}return null}function Ks(e){var t=Pi(e.alternate,e,Ds);return e.memoizedProps=e.pendingProps,null===t&&(t=qs(e)),ks.current=null,t}function Ys(e,t){Os&&s("243"),Vs(),Os=!0;var n=Rs.current;Rs.current=hi;var o=e.nextExpirationTimeToWorkOn;o===Ds&&e===Ms&&null!==Is||(Gs(),Ds=o,Is=Yo((Ms=e).current,null),e.pendingCommitExpirationTime=0);for(var r=!1;;){try{if(t)for(;null!==Is&&!Ma();)Is=Ks(Is);else for(;null!==Is;)Is=Ks(Is)}catch(t){if(Fi=Li=Hi=null,ei(),null===Is)r=!0,za(t);else{null===Is&&s("271");var i=Is,a=i.return;if(null!==a){e:{var l=e,c=a,d=i,h=t;if(a=Ds,d.effectTag|=1024,d.firstEffect=d.lastEffect=null,null!==h&&"object"==typeof h&&"function"==typeof h.then){var u=h;h=c;var p=-1,f=-1;do{if(13===h.tag){var m=h.alternate;if(null!==m&&null!==(m=m.memoizedState)){f=10*(1073741822-m.timedOutAt);break}"number"==typeof(m=h.pendingProps.maxDuration)&&(0>=m?p=0:(-1===p||m<p)&&(p=m))}h=h.return}while(null!==h);h=c;do{if((m=13===h.tag)&&(m=void 0!==h.memoizedProps.fallback&&null===h.memoizedState),m){if(null===(c=h.updateQueue)?((c=new Set).add(u),h.updateQueue=c):c.add(u),0==(1&h.mode)){h.effectTag|=64,d.effectTag&=-1957,1===d.tag&&(null===d.alternate?d.tag=17:((a=Qi(1073741823)).tag=Zi,es(d,a))),d.expirationTime=1073741823;break e}c=a;var g=(d=l).pingCache;null===g?(g=d.pingCache=new xs,m=new Set,g.set(u,m)):void 0===(m=g.get(u))&&(m=new Set,g.set(u,m)),m.has(c)||(m.add(c),d=Js.bind(null,d,u,c),u.then(d,d)),-1===p?l=1073741823:(-1===f&&(f=10*(1073741822-rr(l,a))-5e3),l=f+p),0<=l&&$s<l&&($s=l),h.effectTag|=2048,h.expirationTime=a;break e}h=h.return}while(null!==h);h=Error((lt(d.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+ct(d))}As=!0,h=as(h,d),l=c;do{switch(l.tag){case 3:l.effectTag|=2048,l.expirationTime=a,ts(l,a=Ss(l,h,a));break e;case 1:if(p=h,f=l.type,d=l.stateNode,0==(64&l.effectTag)&&("function"==typeof f.getDerivedStateFromError||null!==d&&"function"==typeof d.componentDidCatch&&(null===Fs||!Fs.has(d)))){l.effectTag|=2048,l.expirationTime=a,ts(l,a=_s(l,p,a));break e}}l=l.return}while(null!==l)}Is=qs(i);continue}r=!0,za(t)}}break}if(Os=!1,Rs.current=n,Fi=Li=Hi=null,ei(),r)Ms=null,e.finishedWork=null;else if(null!==Is)e.finishedWork=null;else{if(null===(n=e.current.alternate)&&s("281"),Ms=null,As){if(r=e.latestPendingTime,i=e.latestSuspendedTime,a=e.latestPingedTime,0!==r&&r<o||0!==i&&i<o||0!==a&&a<o)return or(e,o),void Ta(e,n,o,e.expirationTime,-1);if(!e.didError&&t)return e.didError=!0,o=e.nextExpirationTimeToWorkOn=o,t=e.expirationTime=1073741823,void Ta(e,n,o,t,-1)}t&&-1!==$s?(or(e,o),(t=10*(1073741822-rr(e,o)))<$s&&($s=t),t=10*(1073741822-ka()),t=$s-t,Ta(e,n,o,e.expirationTime,0>t?0:t)):(e.pendingCommitExpirationTime=o,e.finishedWork=n)}}function Xs(e,t){for(var n=e.return;null!==n;){switch(n.tag){case 1:var o=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof o.componentDidCatch&&(null===Fs||!Fs.has(o)))return es(n,e=_s(n,e=as(t,e),1073741823)),void na(n,1073741823);break;case 3:return es(n,e=Ss(n,e=as(t,e),1073741823)),void na(n,1073741823)}n=n.return}3===e.tag&&(es(e,n=Ss(e,n=as(t,e),1073741823)),na(e,1073741823))}function Qs(e,t){var n=i.unstable_getCurrentPriorityLevel(),o=void 0;if(0==(1&t.mode))o=1073741823;else if(Os&&!Ps)o=Ds;else{switch(n){case i.unstable_ImmediatePriority:o=1073741823;break;case i.unstable_UserBlockingPriority:o=1073741822-10*(1+((1073741822-e+15)/10|0));break;case i.unstable_NormalPriority:o=1073741822-25*(1+((1073741822-e+500)/25|0));break;case i.unstable_LowPriority:case i.unstable_IdlePriority:o=1;break;default:s("313")}null!==Ms&&o===Ds&&--o}return n===i.unstable_UserBlockingPriority&&(0===ha||o<ha)&&(ha=o),o}function Js(e,t,n){var o=e.pingCache;null!==o&&o.delete(t),null!==Ms&&Ds===n?Ms=null:(t=e.earliestSuspendedTime,o=e.latestSuspendedTime,0!==t&&n<=t&&n>=o&&(e.didError=!1,(0===(t=e.latestPingedTime)||t>n)&&(e.latestPingedTime=n),ir(n,e),0!==(n=e.expirationTime)&&Ea(e,n)))}function ea(e,t){var n=e.stateNode;null!==n&&n.delete(t),null!==(e=ta(e,t=Qs(t=ka(),e)))&&(nr(e,t),0!==(t=e.expirationTime)&&Ea(e,t))}function ta(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var o=e.return,r=null;if(null===o&&3===e.tag)r=e.stateNode;else for(;null!==o;){if(n=o.alternate,o.childExpirationTime<t&&(o.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===o.return&&3===o.tag){r=o.stateNode;break}o=o.return}return r}function na(e,t){null!==(e=ta(e,t))&&(!Os&&0!==Ds&&t>Ds&&Gs(),nr(e,t),Os&&!Ps&&Ms===e||Ea(e,e.expirationTime),Ca>wa&&(Ca=0,s("185")))}function oa(e,t,n,o,r){return i.unstable_runWithPriority(i.unstable_ImmediatePriority,(function(){return e(t,n,o,r)}))}var ra=null,ia=null,sa=0,aa=void 0,la=!1,ca=null,da=0,ha=0,ua=!1,pa=null,fa=!1,ma=!1,ga=null,ba=i.unstable_now(),va=1073741822-(ba/10|0),ya=va,wa=50,Ca=0,xa=null;function Sa(){va=1073741822-((i.unstable_now()-ba)/10|0)}function _a(e,t){if(0!==sa){if(t<sa)return;null!==aa&&i.unstable_cancelCallback(aa)}sa=t,e=i.unstable_now()-ba,aa=i.unstable_scheduleCallback(Da,{timeout:10*(1073741822-t)-e})}function Ta(e,t,n,o,r){e.expirationTime=o,0!==r||Ma()?0<r&&(e.timeoutHandle=xo(Ra.bind(null,e,t,n),r)):(e.pendingCommitExpirationTime=n,e.finishedWork=t)}function Ra(e,t,n){e.pendingCommitExpirationTime=n,e.finishedWork=t,Sa(),ya=va,Aa(e,n)}function ka(){return la||(Oa(),0!==da&&1!==da||(Sa(),ya=va)),ya}function Ea(e,t){null===e.nextScheduledRoot?(e.expirationTime=t,null===ia?(ra=ia=e,e.nextScheduledRoot=e):(ia=ia.nextScheduledRoot=e).nextScheduledRoot=ra):t>e.expirationTime&&(e.expirationTime=t),la||(fa?ma&&(ca=e,da=1073741823,Na(e,1073741823,!1)):1073741823===t?$a(1073741823,!1):_a(e,t))}function Oa(){var e=0,t=null;if(null!==ia)for(var n=ia,o=ra;null!==o;){var r=o.expirationTime;if(0===r){if((null===n||null===ia)&&s("244"),o===o.nextScheduledRoot){ra=ia=o.nextScheduledRoot=null;break}if(o===ra)ra=r=o.nextScheduledRoot,ia.nextScheduledRoot=r,o.nextScheduledRoot=null;else{if(o===ia){(ia=n).nextScheduledRoot=ra,o.nextScheduledRoot=null;break}n.nextScheduledRoot=o.nextScheduledRoot,o.nextScheduledRoot=null}o=n.nextScheduledRoot}else{if(r>e&&(e=r,t=o),o===ia)break;if(1073741823===e)break;n=o,o=o.nextScheduledRoot}}ca=t,da=e}var Ia=!1;function Ma(){return!!Ia||!!i.unstable_shouldYield()&&(Ia=!0)}function Da(){try{if(!Ma()&&null!==ra){Sa();var e=ra;do{var t=e.expirationTime;0!==t&&va<=t&&(e.nextExpirationTimeToWorkOn=va),e=e.nextScheduledRoot}while(e!==ra)}$a(0,!0)}finally{Ia=!1}}function $a(e,t){if(Oa(),t)for(Sa(),ya=va;null!==ca&&0!==da&&e<=da&&!(Ia&&va>da);)Na(ca,da,va>da),Oa(),Sa(),ya=va;else for(;null!==ca&&0!==da&&e<=da;)Na(ca,da,!1),Oa();if(t&&(sa=0,aa=null),0!==da&&_a(ca,da),Ca=0,xa=null,null!==ga)for(e=ga,ga=null,t=0;t<e.length;t++){var n=e[t];try{n._onComplete()}catch(e){ua||(ua=!0,pa=e)}}if(ua)throw e=pa,pa=null,ua=!1,e}function Aa(e,t){la&&s("253"),ca=e,da=t,Na(e,t,!1),$a(1073741823,!1)}function Na(e,t,n){if(la&&s("245"),la=!0,n){var o=e.finishedWork;null!==o?Pa(e,o,t):(e.finishedWork=null,-1!==(o=e.timeoutHandle)&&(e.timeoutHandle=-1,So(o)),Ys(e,n),null!==(o=e.finishedWork)&&(Ma()?e.finishedWork=o:Pa(e,o,t)))}else null!==(o=e.finishedWork)?Pa(e,o,t):(e.finishedWork=null,-1!==(o=e.timeoutHandle)&&(e.timeoutHandle=-1,So(o)),Ys(e,n),null!==(o=e.finishedWork)&&Pa(e,o,t));la=!1}function Pa(e,t,n){var o=e.firstBatch;if(null!==o&&o._expirationTime>=n&&(null===ga?ga=[o]:ga.push(o),o._defer))return e.finishedWork=t,void(e.expirationTime=0);e.finishedWork=null,e===xa?Ca++:(xa=e,Ca=0),i.unstable_runWithPriority(i.unstable_ImmediatePriority,(function(){Zs(e,t)}))}function za(e){null===ca&&s("246"),ca.expirationTime=0,ua||(ua=!0,pa=e)}function Ha(e,t){var n=fa;fa=!0;try{return e(t)}finally{(fa=n)||la||$a(1073741823,!1)}}function La(e,t){if(fa&&!ma){ma=!0;try{return e(t)}finally{ma=!1}}return e(t)}function Fa(e,t,n){fa||la||0===ha||($a(ha,!1),ha=0);var o=fa;fa=!0;try{return i.unstable_runWithPriority(i.unstable_UserBlockingPriority,(function(){return e(t,n)}))}finally{(fa=o)||la||$a(1073741823,!1)}}function Ga(e,t,n,o,r){var i=t.current;e:if(n){t:{2===nn(n=n._reactInternalFiber)&&1===n.tag||s("170");var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(zo(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(null!==a);s("171"),a=void 0}if(1===n.tag){var l=n.type;if(zo(l)){n=Go(n,l,a);break e}}n=a}else n=Do;return null===t.context?t.context=n:t.pendingContext=n,t=r,(r=Qi(o)).payload={element:e},null!==(t=void 0===t?null:t)&&(r.callback=t),Vs(),es(i,r),na(i,o),o}function Ba(e,t,n,o){var r=t.current;return Ga(e,t,n,r=Qs(ka(),r),o)}function Wa(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Ua(e){var t=1073741822-25*(1+((1073741822-ka()+500)/25|0));t>=Es&&(t=Es-1),this._expirationTime=Es=t,this._root=e,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function ja(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function Va(e,t,n){e={current:t=qo(3,null,null,t?3:0),containerInfo:e,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:n,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null},this._internalRoot=t.stateNode=e}function Za(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function qa(e,t,n,o,r){var i=n._reactRootContainer;if(i){if("function"==typeof r){var s=r;r=function(){var e=Wa(i._internalRoot);s.call(e)}}null!=e?i.legacy_renderSubtreeIntoContainer(e,t,r):i.render(t,r)}else{if(i=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Va(e,!1,t)}(n,o),"function"==typeof r){var a=r;r=function(){var e=Wa(i._internalRoot);a.call(e)}}La((function(){null!=e?i.legacy_renderSubtreeIntoContainer(e,t,r):i.render(t,r)}))}return Wa(i._internalRoot)}function Ka(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return Za(t)||s("200"),function(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ke,key:null==o?null:""+o,children:e,containerInfo:t,implementation:n}}(e,t,null,n)}ke=function(e,t,n){switch(t){case"input":if(St(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=L(o);r||s("90"),Ue(o),St(o,r)}}}break;case"textarea":Jn(e,n);break;case"select":null!=(t=n.value)&&Yn(e,!!n.multiple,t,!1)}},Ua.prototype.render=function(e){this._defer||s("250"),this._hasChildren=!0,this._children=e;var t=this._root._internalRoot,n=this._expirationTime,o=new ja;return Ga(e,t,null,n,o._onCommit),o},Ua.prototype.then=function(e){if(this._didComplete)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},Ua.prototype.commit=function(){var e=this._root._internalRoot,t=e.firstBatch;if(this._defer&&null!==t||s("251"),this._hasChildren){var n=this._expirationTime;if(t!==this){this._hasChildren&&(n=this._expirationTime=t._expirationTime,this.render(this._children));for(var o=null,r=t;r!==this;)o=r,r=r._next;null===o&&s("251"),o._next=r._next,this._next=t,e.firstBatch=this}this._defer=!1,Aa(e,n),t=this._next,this._next=null,null!==(t=e.firstBatch=t)&&t._hasChildren&&t.render(t._children)}else this._next=null,this._defer=!1},Ua.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++)(0,e[t])()}},ja.prototype.then=function(e){if(this._didCommit)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},ja.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++){var n=e[t];"function"!=typeof n&&s("191",n),n()}}},Va.prototype.render=function(e,t){var n=this._internalRoot,o=new ja;return null!==(t=void 0===t?null:t)&&o.then(t),Ba(e,n,null,o._onCommit),o},Va.prototype.unmount=function(e){var t=this._internalRoot,n=new ja;return null!==(e=void 0===e?null:e)&&n.then(e),Ba(null,t,null,n._onCommit),n},Va.prototype.legacy_renderSubtreeIntoContainer=function(e,t,n){var o=this._internalRoot,r=new ja;return null!==(n=void 0===n?null:n)&&r.then(n),Ba(t,o,e,r._onCommit),r},Va.prototype.createBatch=function(){var e=new Ua(this),t=e._expirationTime,n=this._internalRoot,o=n.firstBatch;if(null===o)n.firstBatch=e,e._next=null;else{for(n=null;null!==o&&o._expirationTime>=t;)n=o,o=o._next;e._next=o,null!==n&&(n._next=e)}return e},$e=Ha,Ae=Fa,Ne=function(){la||0===ha||($a(ha,!1),ha=0)};var Ya={createPortal:Ka,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;return void 0===t&&("function"==typeof e.render?s("188"):s("268",Object.keys(e))),e=null===(e=rn(t))?null:e.stateNode},hydrate:function(e,t,n){return Za(t)||s("200"),qa(null,e,t,!0,n)},render:function(e,t,n){return Za(t)||s("200"),qa(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,o){return Za(n)||s("200"),(null==e||void 0===e._reactInternalFiber)&&s("38"),qa(e,t,n,!1,o)},unmountComponentAtNode:function(e){return Za(e)||s("40"),!!e._reactRootContainer&&(La((function(){qa(null,null,e,!1,(function(){e._reactRootContainer=null}))})),!0)},unstable_createPortal:function(){return Ka.apply(void 0,arguments)},unstable_batchedUpdates:Ha,unstable_interactiveUpdates:Fa,flushSync:function(e,t){la&&s("187");var n=fa;fa=!0;try{return oa(e,t)}finally{fa=n,$a(1073741823,!1)}},unstable_createRoot:function(e,t){return Za(e)||s("299","unstable_createRoot"),new Va(e,!0,null!=t&&!0===t.hydrate)},unstable_flushControlled:function(e){var t=fa;fa=!0;try{oa(e)}finally{(fa=t)||la||$a(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[z,H,L,I.injectEventPluginsByName,y,j,function(e){k(e,U)},Me,De,On,D]}};!function(e){var t=e.findFiberByHostInstance;(function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Uo=Vo((function(e){return t.onCommitFiberRoot(n,e)})),jo=Vo((function(e){return t.onCommitFiberUnmount(n,e)}))}catch(e){}})(r({},e,{overrideProps:null,currentDispatcherRef:je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=rn(e))?null:e.stateNode},findFiberByHostInstance:function(e){return t?t(e):null}}))}({findFiberByHostInstance:P,bundleType:0,version:"16.8.4",rendererPackageName:"react-dom"});var Xa={default:Ya},Qa=Xa&&Ya||Xa;e.exports=Qa.default||Qa},2788:(e,t,n)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){}}(),e.exports=n(3975)},8447:(e,t,n)=>{var o=n(4516),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,d=r?Symbol.for("react.provider"):60109,h=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);!function(e,t,n,o,r,i,s,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,r,i,s,a],c=0;(e=Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function C(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||y}function x(){}function S(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||y}C.prototype.isReactComponent={},C.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=C.prototype;var _=S.prototype=new x;_.constructor=S,o(_,C.prototype),_.isPureReactComponent=!0;var T={current:null},R={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var o=void 0,r={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,o)&&!E.hasOwnProperty(o)&&(r[o]=t[o]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===r[o]&&(r[o]=l[o]);return{$$typeof:i,type:e,key:s,ref:a,props:r,_owner:R.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var M=/\/+/g,D=[];function $(e,t,n,o){if(D.length){var r=D.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=o,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:o,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function N(e,t,n,o){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var a=!1;if(null===e)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case s:a=!0}}if(a)return n(o,e,""===t?"."+z(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=t+z(r=e[l],l);a+=N(r,c,n,o)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=b&&e[b]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),l=0;!(r=e.next()).done;)a+=N(r=r.value,c=t+z(r,l++),n,o);else"object"===r&&v("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return a}function P(e,t,n){return null==e?0:N(e,"",t,n)}function z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function H(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var o=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,o,n,(function(e){return e})):null!=e&&(I(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n)),o.push(e))}function F(e,t,n,o,r){var i="";null!=n&&(i=(""+n).replace(M,"$&/")+"/"),P(e,L,t=$(t,i,o,r)),A(t)}function G(){var e=T.current;return null===e&&v("307"),e}var B={Children:{map:function(e,t,n){if(null==e)return e;var o=[];return F(e,o,null,t,n),o},forEach:function(e,t,n){if(null==e)return e;P(e,H,t=$(null,null,t,n)),A(t)},count:function(e){return P(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){return I(e)||v("143"),e}},createRef:function(){return{current:null}},Component:C,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return G().useCallback(e,t)},useContext:function(e,t){return G().useContext(e,t)},useEffect:function(e,t){return G().useEffect(e,t)},useImperativeHandle:function(e,t,n){return G().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return G().useLayoutEffect(e,t)},useMemo:function(e,t){return G().useMemo(e,t)},useReducer:function(e,t,n){return G().useReducer(e,t,n)},useRef:function(e){return G().useRef(e)},useState:function(e){return G().useState(e)},Fragment:a,StrictMode:l,Suspense:f,createElement:O,cloneElement:function(e,t,n){null==e&&v("267",e);var r=void 0,s=o({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,c=R.current),void 0!==t.key&&(a=""+t.key);var d=void 0;for(r in e.type&&e.type.defaultProps&&(d=e.type.defaultProps),t)k.call(t,r)&&!E.hasOwnProperty(r)&&(s[r]=void 0===t[r]&&void 0!==d?d[r]:t[r])}if(1===(r=arguments.length-2))s.children=n;else if(1<r){d=Array(r);for(var h=0;h<r;h++)d[h]=arguments[h+2];s.children=d}return{$$typeof:i,type:e.type,key:a,ref:l,props:s,_owner:c}},createFactory:function(e){var t=O.bind(null,e);return t.type=e,t},isValidElement:I,version:"16.8.4",unstable_ConcurrentMode:u,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:T,ReactCurrentOwner:R,assign:o}},W={default:B},U=W&&B||W;e.exports=U.default||U},2735:(e,t,n)=>{e.exports=n(8447)},9666:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=null,r=!1,i=3,s=-1,a=-1,l=!1,c=!1;function d(){if(!l){var e=o.expirationTime;c?_():c=!0,S(p,e)}}function h(){var e=o,t=o.next;if(o===t)o=null;else{var n=o.previous;o=n.next=t,t.previous=n}e.next=e.previous=null,n=e.callback,t=e.expirationTime,e=e.priorityLevel;var r=i,s=a;i=e,a=t;try{var l=n()}finally{i=r,a=s}if("function"==typeof l)if(l={callback:l,priorityLevel:e,expirationTime:t,next:null,previous:null},null===o)o=l.next=l.previous=l;else{n=null,e=o;do{if(e.expirationTime>=t){n=e;break}e=e.next}while(e!==o);null===n?n=o:n===o&&(o=l,d()),(t=n.previous).next=n.previous=l,l.next=n,l.previous=t}}function u(){if(-1===s&&null!==o&&1===o.priorityLevel){l=!0;try{do{h()}while(null!==o&&1===o.priorityLevel)}finally{l=!1,null!==o?d():c=!1}}}function p(e){l=!0;var n=r;r=e;try{if(e)for(;null!==o;){var i=t.unstable_now();if(!(o.expirationTime<=i))break;do{h()}while(null!==o&&o.expirationTime<=i)}else if(null!==o)do{h()}while(null!==o&&!T())}finally{l=!1,r=n,null!==o?d():c=!1,u()}}var f,m,g=Date,b="function"==typeof setTimeout?setTimeout:void 0,v="function"==typeof clearTimeout?clearTimeout:void 0,y="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,w="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function C(e){f=y((function(t){v(m),e(t)})),m=b((function(){w(f),e(t.unstable_now())}),100)}if("object"==typeof performance&&"function"==typeof performance.now){var x=performance;t.unstable_now=function(){return x.now()}}else t.unstable_now=function(){return g.now()};var S,_,T,R=null;if("undefined"!=typeof window?R=window:void 0!==n.g&&(R=n.g),R&&R._schedMock){var k=R._schedMock;S=k[0],_=k[1],T=k[2],t.unstable_now=k[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var E=null,O=function(e){if(null!==E)try{E(e)}finally{E=null}};S=function(e){null!==E?setTimeout(S,0,e):(E=e,setTimeout(O,0,!1))},_=function(){E=null},T=function(){return!1}}else{var I=null,M=!1,D=-1,$=!1,A=!1,N=0,P=33,z=33;T=function(){return N<=t.unstable_now()};var H=new MessageChannel,L=H.port2;H.port1.onmessage=function(){M=!1;var e=I,n=D;I=null,D=-1;var o=t.unstable_now(),r=!1;if(0>=N-o){if(!(-1!==n&&n<=o))return $||($=!0,C(F)),I=e,void(D=n);r=!0}if(null!==e){A=!0;try{e(r)}finally{A=!1}}};var F=function(e){if(null!==I){C(F);var t=e-N+z;t<z&&P<z?(8>t&&(t=8),z=t<P?P:t):P=t,N=e+z,M||(M=!0,L.postMessage(void 0))}else $=!1};S=function(e,t){I=e,D=t,A||0>t?L.postMessage(void 0):$||($=!0,C(F))},_=function(){I=null,M=!1,D=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var o=i,r=s;i=e,s=t.unstable_now();try{return n()}finally{i=o,s=r,u()}},t.unstable_next=function(e){switch(i){case 1:case 2:case 3:var n=3;break;default:n=i}var o=i,r=s;i=n,s=t.unstable_now();try{return e()}finally{i=o,s=r,u()}},t.unstable_scheduleCallback=function(e,n){var r=-1!==s?s:t.unstable_now();if("object"==typeof n&&null!==n&&"number"==typeof n.timeout)n=r+n.timeout;else switch(i){case 1:n=r+-1;break;case 2:n=r+250;break;case 5:n=r+1073741823;break;case 4:n=r+1e4;break;default:n=r+5e3}if(e={callback:e,priorityLevel:i,expirationTime:n,next:null,previous:null},null===o)o=e.next=e.previous=e,d();else{r=null;var a=o;do{if(a.expirationTime>n){r=a;break}a=a.next}while(a!==o);null===r?r=o:r===o&&(o=e,d()),(n=r.previous).next=r.previous=e,e.next=r,e.previous=n}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)o=null;else{e===o&&(o=t);var n=e.previous;n.next=t,t.previous=n}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=i;return function(){var o=i,r=s;i=n,s=t.unstable_now();try{return e.apply(this,arguments)}finally{i=o,s=r,u()}}},t.unstable_getCurrentPriorityLevel=function(){return i},t.unstable_shouldYield=function(){return!r&&(null!==o&&o.expirationTime<a||T())},t.unstable_continueExecution=function(){null!==o&&d()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return o}},9146:(e,t,n)=>{e.exports=n(9666)}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"feature-billboard.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},o.l=(t,n,r,i)=>{if(e[t])e[t].push(n);else{var s,a;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==t){s=d;break}}s||(a=!0,(s=document.createElement("script")).type="module",s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=t),e[t]=[n];var h=(n,o)=>{s.onerror=s.onload=null,clearTimeout(u);var r=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(o))),n)return n(o)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),a&&document.head.appendChild(s)}},o.p="#{root}/dist/webviews/",void 0!==o&&Object.defineProperty(o,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}}),(()=>{var e={786:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=i);var s=o.p+o.u(t),a=new Error;o.l(s,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,i,[s,a,l]=n,c=0;if(s.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)l(o)}for(t&&t(n);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r={};(()=>{o.d(r,{q:()=>xh});var e=o(2735),t=o.n(e),n=o(2788);class i{constructor(e,t=!1){this.method=e,this.reset=t}}class s extends i{}class a extends i{}function l(e,t,n){e.method===t.method&&n(t.params,e)}const c=new s("webview/ready"),d=new s("webview/focus");new s("command/execute"),new s("configuration/preview"),new s("configuration/update"),new a("configuration/didChange"),new a("configuration/didPreview"),new a("webview/didOpenAnchor");const h=new s("graph/chooseRepository"),u=new s("graph/dimMergeCommits"),p=new s("graph/dblclick"),f=new s("graph/rows/ensure"),m=new s("graph/avatars/get"),g=new s("graph/refs/metadata/get"),b=new s("graph/rows/get"),v=new s("graph/search"),y=new s("graph/search/openInView"),w=new s("graph/columns/update"),C=new s("graph/refs/update/visibility"),x=new s("graph/fitlers/update/excludeType"),S=new s("graph/configuration/update"),_=new s("graph/fitlers/update/includeOnlyRefs"),T=new s("graph/selection/update"),R=new a("graph/didChange",!0),k=new a("graph/configuration/didChange"),E=new a("graph/subscription/didChange"),O=new a("graph/avatars/didChange"),I=new a("graph/refs/didChangeMetadata"),M=new a("graph/columns/didChange"),D=new a("graph/scrollMarkers/didChange"),$=new a("graph/focus/didChange"),A=new a("graph/window/focus/didChange"),N=new a("graph/refs/didChangeVisibility"),P=new a("graph/rows/didChange"),z=new a("graph/rows/stats/didChange"),H=new a("graph/selection/didChange"),L=new a("graph/workingTree/didChange"),F=new a("graph/rows/didEnsure"),G=new a("graph/didSearch"),B=new a("graph/didFetch");var W=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(W||{});function U(e,t){const n=e+t,o=t<0?n<0?0:n:n>255?255:n;return Math.round(o)}function j(e,t){return V(e,-t)}function V(e,t){const n=function(e){const t=se(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==n)return e;const[o,r,i,s]=n,a=255*t/100;return`rgba(${U(o,a)}, ${U(r,a)}, ${U(i,a)}, ${s})`}function Z(e,t){const n=te.from(e);return null==n?e:n.transparent(t/100).toString()}function q(e,t,n){const o=te.from(e),r=te.from(t);return null==o||null==r?e:o.mix(r,n/100).toString()}function K(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}class Y{constructor(e,t,n,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,n)),this.a=K(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class X{constructor(e,t,n,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=K(Math.max(Math.min(1,t),0),3),this.l=K(Math.max(Math.min(1,n),0),3),this.a=K(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,n=e.g/255,o=e.b/255,r=e.a,i=Math.max(t,n,o),s=Math.min(t,n,o);let a=0,l=0;const c=(s+i)/2,d=i-s;if(d>0){switch(l=Math.min(c<=.5?d/(2*c):d/(2-2*c),1),i){case t:a=(n-o)/d+(n<o?6:0);break;case n:a=(o-t)/d+2;break;case o:a=(t-n)/d+4}a*=60,a=Math.round(a)}return new X(a,l,c,r)}static _hue2rgb(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}static toRGBA(e){const t=e.h/360,{s:n,l:o,a:r}=e;let i,s,a;if(0===n)i=s=a=o;else{const e=o<.5?o*(1+n):o+n-o*n,r=2*o-e;i=X._hue2rgb(r,e,t+1/3),s=X._hue2rgb(r,e,t),a=X._hue2rgb(r,e,t-1/3)}return new Y(Math.round(255*i),Math.round(255*s),Math.round(255*a),r)}}class Q{constructor(e,t,n,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=K(Math.max(Math.min(1,t),0),3),this.v=K(Math.max(Math.min(1,n),0),3),this.a=K(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,n=e.g/255,o=e.b/255,r=Math.max(t,n,o),i=r-Math.min(t,n,o),s=0===r?0:i/r;let a;return a=0===i?0:r===t?((n-o)/i%6+6)%6:r===n?(o-t)/i+2:(t-n)/i+4,new Q(Math.round(60*a),s,r,e.a)}static toRGBA(e){const{h:t,s:n,v:o,a:r}=e,i=o*n,s=i*(1-Math.abs(t/60%2-1)),a=o-i;let[l,c,d]=[0,0,0];return t<60?(l=i,c=s):t<120?(l=s,c=i):t<180?(c=i,d=s):t<240?(c=s,d=i):t<300?(l=s,d=i):t<=360&&(l=i,d=s),l=Math.round(255*(l+a)),c=Math.round(255*(c+a)),d=Math.round(255*(d+a)),new Y(l,c,d,r)}}function J(e,t){return t.getPropertyValue(e).trim()}const ee=class e{static from(t){return t instanceof e?t:se(t)||e.red}static fromCssVariable(t,n){return se(J(t,n))||e.red}static fromHex(t){return ae(t)||e.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:X.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:Q.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof Y)this.rgba=e;else if(e instanceof X)this._hsla=e,this.rgba=X.toRGBA(e);else{if(!(e instanceof Q))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=Q.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&Y.equals(this.rgba,e.rgba)&&X.equals(this.hsla,e.hsla)&&Q.equals(this.hsva,e.hsva))}getRelativeLuminance(){return K(.2126*e._relativeLuminanceForComponent(this.rgba.r)+.7152*e._relativeLuminanceForComponent(this.rgba.g)+.0722*e._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new te(new Y(0,0,0,e.rgba.a));if(1===t)return new te(new Y(255,255,255,e.rgba.a));const n=e.getRelativeLuminance();let o=20;const r=(e,n)=>{const i=e.mix(n,.5),s=i.getRelativeLuminance();return Math.abs(t-s)<1e-7||!o--?i:s>t?r(e,i):r(i,n)},i=(n>t?r(te.black,e):r(e,te.white)).rgba;return new te(new Y(i.r,i.g,i.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),n=e.getRelativeLuminance();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(t){return new e(new X(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new e(new X(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){const{r:n,g:o,b:r,a:i}=this.rgba;return new e(new Y(n,o,r,i*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new e(new Y(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){const n=t.rgba,o=this.rgba.a,r=n.a,i=o+r*(1-o);if(i<1e-6)return e.transparent;const s=this.rgba.r*o/i+n.r*r*(1-o)/i,a=this.rgba.g*o/i+n.g*r*(1-o)/i,l=this.rgba.b*o/i+n.b*r*(1-o)/i;return new e(new Y(s,a,l,i))}mix(e,t){return function(e,t,n){const o=e.rgba,r=t.rgba;return new te(new Y(o.r+n*(r.r-o.r),o.g+n*(r.g-o.g),o.b+n*(r.b-o.b),o.a+n*(r.a-o.a)))}(this,e,t)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;const{r:n,g:o,b:r,a:i}=this.rgba;return new e(new Y(t.rgba.r-i*(t.rgba.r-n),t.rgba.g-i*(t.rgba.g-o),t.rgba.b-i*(t.rgba.b-r),1))}flatten(...t){const n=t.reduceRight(((t,n)=>e._flatten(n,t)));return e._flatten(this,n)}static _flatten(t,n){const o=1-t.rgba.a;return new e(new Y(o*n.rgba.r+t.rgba.a*t.rgba.r,o*n.rgba.g+t.rgba.a*t.rgba.g,o*n.rgba.b+t.rgba.a*t.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return re(e);return ne(e)}(this)),this._toString}static getLighterColor(e,t,n){if(e.isLighterThan(t))return e;n=n||.5;const o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return n=n*(r-o)/r,e.lighten(n)}static getDarkerColor(e,t,n){if(e.isDarkerThan(t))return e;n=n||.5;const o=e.getRelativeLuminance();return n=n*(o-t.getRelativeLuminance())/o,e.darken(n)}};ee.white=new ee(new Y(255,255,255,1)),ee.black=new ee(new Y(0,0,0,1)),ee.red=new ee(new Y(255,0,0,1)),ee.blue=new ee(new Y(0,0,255,1)),ee.green=new ee(new Y(0,255,0,1)),ee.cyan=new ee(new Y(0,255,255,1)),ee.lightgrey=new ee(new Y(211,211,211,1)),ee.transparent=new ee(new Y(0,0,0,0));let te=ee;function ne(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function oe(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function re(e){return`#${oe(e.rgba.r)}${oe(e.rgba.g)}${oe(e.rgba.b)}`}const ie=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function se(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===W.Hash)return ae(e);const t=ie.exec(e);if(null==t)return null;const n=t[1];let o;switch(n){case"rgb":case"hsl":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(n){case"rgb":case"rgba":return new te(new Y(o[0],o[1],o[2],o[3]));case"hsl":case"hsla":return new te(new X(o[0],o[1],o[2],o[3]))}return te.red}function ae(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==W.Hash)return null;switch(t){case 7:{const t=16*le(e.charCodeAt(1))+le(e.charCodeAt(2)),n=16*le(e.charCodeAt(3))+le(e.charCodeAt(4)),o=16*le(e.charCodeAt(5))+le(e.charCodeAt(6));return new te(new Y(t,n,o,1))}case 9:{const t=16*le(e.charCodeAt(1))+le(e.charCodeAt(2)),n=16*le(e.charCodeAt(3))+le(e.charCodeAt(4)),o=16*le(e.charCodeAt(5))+le(e.charCodeAt(6)),r=16*le(e.charCodeAt(7))+le(e.charCodeAt(8));return new te(new Y(t,n,o,r/255))}case 4:{const t=le(e.charCodeAt(1)),n=le(e.charCodeAt(2)),o=le(e.charCodeAt(3));return new te(new Y(16*t+t,16*n+n,16*o+o))}case 5:{const t=le(e.charCodeAt(1)),n=le(e.charCodeAt(2)),o=le(e.charCodeAt(3)),r=le(e.charCodeAt(4));return new te(new Y(16*t+t,16*n+n,16*o+o,(16*r+r)/255))}default:return null}}function le(e){switch(e){case W.Digit0:return 0;case W.Digit1:return 1;case W.Digit2:return 2;case W.Digit3:return 3;case W.Digit4:return 4;case W.Digit5:return 5;case W.Digit6:return 6;case W.Digit7:return 7;case W.Digit8:return 8;case W.Digit9:return 9;case W.a:case W.A:return 10;case W.b:case W.B:return 11;case W.c:case W.C:return 12;case W.d:case W.D:return 13;case W.e:case W.E:return 14;case W.f:case W.F:return 15}return 0}function ce(e,t){let n,o,r,i,s;function a(e){const n=e-(o??0);return null==o||n>=t||n<0}function l(){const e=Date.now();if(a(e))c();else{s=setTimeout(l,t-(e-(o??0)))}}function c(){return s=void 0,n?function(){const t=n,o=r;return n=r=void 0,i=e.apply(o,t),i}():(n=r=void 0,i)}function d(...e){const c=Date.now(),d=a(c);return n=e,r=this,o=c,d&&null==s?(s=setTimeout(l,t),i):(null==s&&(s=setTimeout(l,t)),i)}return d.cancel=function(){null!=s&&clearTimeout(s),n=o=r=s=void 0},d.flush=function(){return null!=s?c():i},d.pending=function(){return null!=s},d}const de=",",he="",ue="=",pe="{",fe="(",me=")",ge=/\(([\s\S]*)\)/,be=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,ve=/\s?=.*$/;const ye="";const we=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,n=!1){this.provider=e,this._isDebugging=n,this.logLevel=t}enabled(e){return this.level>=Ce(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=Ce(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let n;"string"==typeof e?n=e:(n=t.shift(),null!=e&&(n=`${e.prefix} ${n??ye}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${n??ye}${this.toLoggableParams(!0,t)}`)}error(e,t,...n){if(this.level<1&&!this.isDebugging)return;let o;if(o=null==t||"string"==typeof t?t:`${t.prefix} ${n.shift()??ye}`,null==o){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??ye}${this.toLoggableParams(!1,n)}\n${String(e)}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let n;"string"==typeof e?n=e:(n=t.shift(),null!=e&&(n=`${e.prefix} ${n??ye}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${n??ye}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let n;"string"==typeof e?n=e:(n=t.shift(),null!=e&&(n=`${e.prefix} ${n??ye}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${n??ye}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const n=this.provider.toLoggable?.(e);if(null!=n)return n;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return ye;const n=t.map((e=>this.toLoggable(e))).join(", ");return 0!==n.length?` — ${n}`:ye}};function Ce(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}var xe,Se;(Se=xe||(xe={})).on=function(e,t,n,o){let r=!1;if("string"==typeof e){const i=function(t){const o=t?.target?.closest(e);null!=o&&n(t,o)};return document.addEventListener(t,i,o??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,i,o??!0))}}}const i=function(e){n(e,this)};return e.addEventListener(t,i,o??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,i,o??!1))}}},Se.insertTemplate=function(e,t,n){const o=document.getElementById(e);if(t.replaceChildren(o?.content.cloneNode(!0)),t.className=o.className,null!=n?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(n.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=n?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const o=n.bindings[e];null!=o&&(t.textContent=String(o))}}},Se.resetSlot=function(e){e.replaceChildren(),e.className=""};const _e=class e{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(t,n,o)=>{null==this.listeners&&(this.listeners=new Oe);const r=this.listeners.push(null==n?t:[t,n]),i={dispose:()=>{i.dispose=e._noop,this._disposed||r()}};return Array.isArray(o)&&o.push(i),i}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new Oe);for(let t=this.listeners.iterator(),n=t.next();!n.done;n=t.next())this._deliveryQueue.push([n.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};_e._noop=function(){};let Te=_e;const Re={done:!0,value:void 0},ke=class e{constructor(t){this.element=t,this.next=e.Undefined,this.prev=e.Undefined}};ke.Undefined=new ke(void 0);let Ee=ke;class Oe{constructor(){this._first=Ee.Undefined,this._last=Ee.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===Ee.Undefined}clear(){this._first=Ee.Undefined,this._last=Ee.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const n=new Ee(e);if(this._first===Ee.Undefined)this._first=n,this._last=n;else if(t){const e=this._last;this._last=n,n.prev=e,e.next=n}else{const e=this._first;this._first=n,n.next=e,e.prev=n}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(n))}}shift(){if(this._first===Ee.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===Ee.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==Ee.Undefined&&e.next!==Ee.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===Ee.Undefined&&e.next===Ee.Undefined?(this._first=Ee.Undefined,this._last=Ee.Undefined):e.next===Ee.Undefined?(this._last=this._last.prev,this._last.next=Ee.Undefined):e.prev===Ee.Undefined&&(this._first=this._first.next,this._first.prev=Ee.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===Ee.Undefined?Re:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==Ee.Undefined;t=t.next)e.push(t.element);return e}}const Ie=new Te,Me=Ie.event;function De(e){const t=document.documentElement,n=window.getComputedStyle(t),o=document.body.classList,r=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),i=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),s=t.style,a=J("--vscode-editor-background",n);let l=J("--vscode-editor-foreground",n);l||(l=J("--vscode-foreground",n));let c=J("--color-background",n);return s.setProperty("--color-background--lighten-05",V(c,5)),s.setProperty("--color-background--darken-05",j(c,5)),s.setProperty("--color-background--lighten-075",V(c,7.5)),s.setProperty("--color-background--darken-075",j(c,7.5)),s.setProperty("--color-background--lighten-10",V(c,10)),s.setProperty("--color-background--darken-10",j(c,10)),s.setProperty("--color-background--lighten-15",V(c,15)),s.setProperty("--color-background--darken-15",j(c,15)),s.setProperty("--color-background--lighten-30",V(c,30)),s.setProperty("--color-background--darken-30",j(c,30)),s.setProperty("--color-background--lighten-50",V(c,50)),s.setProperty("--color-background--darken-50",j(c,50)),c=J("--color-button-background",n),s.setProperty("--color-button-background--darken-30",j(c,30)),c=J("--color-highlight",n),s.setProperty("--color-highlight--75",Z(c,75)),s.setProperty("--color-highlight--50",Z(c,50)),s.setProperty("--color-highlight--25",Z(c,25)),c=J("--color-button-secondary-background",n),s.setProperty("--color-button-secondary-background--darken-30",j(c,30)),c=J("--color-foreground",n),s.setProperty("--color-foreground--85",Z(c,85)),s.setProperty("--color-foreground--75",Z(c,75)),s.setProperty("--color-foreground--65",Z(c,65)),s.setProperty("--color-foreground--50",Z(c,50)),c=J("--color-link-foreground",n),s.setProperty("--color-link-foreground--darken-20",j(c,20)),s.setProperty("--color-link-foreground--lighten-20",V(c,20)),c=J("--color-alert-infoBackground",n),s.setProperty("--color-alert-infoHoverBackground",r?j(c,5):V(c,5)),c=J("--color-alert-warningBackground",n),s.setProperty("--color-alert-warningHoverBackground",r?j(c,5):V(c,5)),c=J("--color-alert-errorBackground",n),s.setProperty("--color-alert-errorHoverBackground",r?j(c,5):V(c,5)),c=r?j(a,5):V(a,5),s.setProperty("--color-alert-neutralBackground",c),s.setProperty("--color-alert-neutralHoverBackground",r?j(c,5):V(c,5)),{colors:{background:a,foreground:l},computedStyle:n,isLightTheme:r,isHighContrastTheme:i,isInitializing:null==e}}let $e=0;function Ae(){return 1073741824===$e?$e=1:$e++,`webview:${$e}`}class Ne{constructor(e){this.appName=e;const t=[],n=De();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(n),t.push(Me(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",we.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log("ctor()"),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{Ie.fire(De(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("ctor(): initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(xe.on(window,"message",this.onMessageReceived.bind(this))),this.sendCommand(c,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(xe.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=ce((e=>{this.sendCommand(d,e)}),150);this.bindDisposables.push(xe.on(document,"focusin",(t=>{const n=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===n||(this._focused=!0,this._inputFocused=n,e({focused:!0,inputFocused:n}))})),xe.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){we.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){const n=Ae();this.log(`sendCommand(${n}): name=${e.method}`),this.postMessage({id:n,method:e.method,params:t})}async sendCommandWithCompletion(e,t,n){const o=Ae();this.log(`sendCommandWithCompletion(${o}): name=${e.method}`);const r=new Promise(((e,t)=>{let r;const i=[xe.on(window,"message",(t=>{l(n,t.data,(n=>{t.data.completionId===o&&(i.forEach((e=>e.dispose())),queueMicrotask((()=>e(n))))}))})),{dispose:function(){null!=r&&(clearTimeout(r),r=void 0)}}];r=setTimeout((()=>{r=void 0,i.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${n.method}`))}),6e4)}));return this.postMessage({id:o,method:e.method,params:t,completionId:o}),r}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}var Pe=o(7507),ze=o.n(Pe);const He=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===He.trustedTypes&&(He.trustedTypes={createPolicy:(e,t)=>t});const Le={configurable:!1,enumerable:!1,writable:!1};void 0===He.FAST&&Reflect.defineProperty(He,"FAST",Object.assign({value:Object.create(null)},Le));const Fe=He.FAST;if(void 0===Fe.getById){const e=Object.create(null);Reflect.defineProperty(Fe,"getById",Object.assign({value(t,n){let o=e[t];return void 0===o&&(o=n?e[t]=n():null),o}},Le))}const Ge=Object.freeze([]);function Be(){const e=new WeakMap;return function(t){let n=e.get(t);if(void 0===n){let o=Reflect.getPrototypeOf(t);for(;void 0===n&&null!==o;)n=e.get(o),o=Reflect.getPrototypeOf(o);n=void 0===n?[]:n.slice(0),e.set(t,n)}return n}}const We=He.FAST.getById(1,(()=>{const e=[],t=[];function n(){if(t.length)throw t.shift()}function o(e){try{e.call()}catch(e){t.push(e),setTimeout(n,0)}}function r(){let t=0;for(;t<e.length;)if(o(e[t]),t++,t>1024){for(let n=0,o=e.length-t;n<o;n++)e[n]=e[n+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&He.requestAnimationFrame(r),e.push(t)},process:r})})),Ue=He.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let je=Ue;const Ve=`fast-${Math.random().toString(36).substring(2,8)}`,Ze=`${Ve}{`,qe=`}${Ve}`,Ke=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(je!==Ue)throw new Error("The HTML policy can only be set once.");je=e},createHTML:e=>je.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(Ve),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${Ve}:`,"")),createInterpolationPlaceholder:e=>`${Ze}${e}${qe}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${Ve}:${e}--\x3e`,queueUpdate:We.enqueue,processUpdates:We.process,nextUpdate:()=>new Promise(We.enqueue),setAttribute(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)},setBooleanAttribute(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class Ye{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}notify(e){const t=this.spillover,n=this.source;if(void 0===t){const t=this.sub1,o=this.sub2;void 0!==t&&t.handleChange(n,e),void 0!==o&&o.handleChange(n,e)}else for(let o=0,r=t.length;o<r;++o)t[o].handleChange(n,e)}}class Xe{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const n=this.subscribers[e];void 0!==n&&n.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var n;if(t){let n=this.subscribers[t];void 0===n&&(this.subscribers[t]=n=new Ye(this.source)),n.subscribe(e)}else this.sourceSubscribers=null!==(n=this.sourceSubscribers)&&void 0!==n?n:new Ye(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var n;if(t){const n=this.subscribers[t];void 0!==n&&n.unsubscribe(e)}else null===(n=this.sourceSubscribers)||void 0===n||n.unsubscribe(e)}}const Qe=Fe.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,n=Ke.queueUpdate;let o,r=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function i(e){let n=e.$fastController||t.get(e);return void 0===n&&(Array.isArray(e)?n=r(e):t.set(e,n=new Xe(e))),n}const s=Be();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==o&&o.watch(e,this.name),e[this.field]}setValue(e,t){const n=this.field,o=e[n];if(o!==t){e[n]=t;const r=e[this.callback];"function"==typeof r&&r.call(e,o,t),i(e).notify(this.name)}}}class l extends Ye{constructor(e,t,n=!1){super(e,t),this.binding=e,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const n=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const r=this.binding(e,t);return o=n,r}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const n=this.last,r=i(e),s=null===n?this.first:{};if(s.propertySource=e,s.propertyName=t,s.notifier=r,r.subscribe(this,t),null!==n){if(!this.needsRefresh){let t;o=void 0,t=n.propertySource[n.propertyName],o=this,e===t&&(this.needsRefresh=!0)}n.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){r=e},getNotifier:i,track(e,t){void 0!==o&&o.watch(e,t)},trackVolatile(){void 0!==o&&(o.needsRefresh=!0)},notify(e,t){i(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),s(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:s,binding(e,t,n=this.isVolatileBinding(e)){return new l(e,t,n)},isVolatileBinding:t=>e.test(t.toString())})}));function Je(e,t){Qe.defineProperty(e,t)}function et(e,t,n){return Object.assign({},n,{get:function(){return Qe.trackVolatile(),n.get.apply(this)}})}const tt=Fe.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class nt{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return tt.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){tt.set(e)}}Qe.defineProperty(nt.prototype,"index"),Qe.defineProperty(nt.prototype,"length");const ot=Object.seal(new nt);class rt{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function it(e){return e.map((e=>e instanceof rt?it(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function st(e){return e.map((e=>e instanceof rt?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}rt.create=(()=>{if(Ke.supportsAdoptedStyleSheets){const e=new Map;return t=>new ct(t,e)}return e=>new ht(e)})();let at=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},lt=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(Ke.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),at=(e,t)=>{e.adoptedStyleSheets.push(...t)},lt=(e,t)=>{for(const n of t){const t=e.adoptedStyleSheets.indexOf(n);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class ct extends rt{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=st(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=it(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let n=t.get(e);return void 0===n&&(n=new CSSStyleSheet,n.replaceSync(e),t.set(e,n)),n}))}return this._styleSheets}addStylesTo(e){at(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){lt(e,this.styleSheets),super.removeStylesFrom(e)}}let dt=0;class ht extends rt{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=st(e),this.styleSheets=it(e),this.styleClass="fast-style-class-"+ ++dt}addStylesTo(e){const t=this.styleSheets,n=this.styleClass;e=this.normalizeTarget(e);for(let o=0;o<t.length;o++){const r=document.createElement("style");r.innerHTML=t[o],r.className=n,e.append(r)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let n=0,o=t.length;n<o;++n)e.removeChild(t[n]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const ut=Object.freeze({locate:Be()}),pt={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},ft={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class mt{constructor(e,t,n=t.toLowerCase(),o="reflect",r){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=n,this.mode=o,this.converter=r,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===o&&void 0===r&&(this.converter=pt)}setValue(e,t){const n=e[this.fieldName],o=this.converter;void 0!==o&&(t=o.fromView(t)),n!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](n,t),e.$fastController.notify(this.name))}getValue(e){return Qe.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,n=this.guards;n.has(e)||"fromView"===t||Ke.queueUpdate((()=>{n.add(e);const o=e[this.fieldName];switch(t){case"reflect":const t=this.converter;Ke.setAttribute(e,this.attribute,void 0!==t?t.toView(o):o);break;case"boolean":Ke.setBooleanAttribute(e,this.attribute,o)}n.delete(e)}))}static collect(e,...t){const n=[];t.push(ut.locate(e));for(let o=0,r=t.length;o<r;++o){const r=t[o];if(void 0!==r)for(let t=0,o=r.length;t<o;++t){const o=r[t];"string"==typeof o?n.push(new mt(e,o)):n.push(new mt(e,o.property,o.attribute,o.mode,o.converter))}}return n}}function gt(e,t){let n;function o(e,t){arguments.length>1&&(n.property=t),ut.locate(e.constructor).push(n)}return arguments.length>1?(n={},void o(e,t)):(n=void 0===e?{}:e,o)}const bt={mode:"open"},vt={},yt=Fe.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class wt{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const n=mt.collect(e,t.attributes),o=new Array(n.length),r={},i={};for(let e=0,t=n.length;e<t;++e){const t=n[e];o[e]=t.attribute,r[t.name]=t,i[t.attribute]=t}this.attributes=n,this.observedAttributes=o,this.propertyLookup=r,this.attributeLookup=i,this.shadowOptions=void 0===t.shadowOptions?bt:null===t.shadowOptions?void 0:Object.assign(Object.assign({},bt),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?vt:Object.assign(Object.assign({},vt),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?rt.create(t.styles):t.styles instanceof rt?t.styles:rt.create([t.styles])}get isDefined(){return!!yt.getByType(this.type)}define(e=customElements){const t=this.type;if(yt.register(this)){const e=this.attributes,n=t.prototype;for(let t=0,o=e.length;t<o;++t)Qe.defineProperty(n,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}wt.forType=yt.getByType;function Ct(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;const xt=new WeakMap,St={bubbles:!0,composed:!0,cancelable:!0};function _t(e){return e.shadowRoot||xt.get(e)||null}class Tt extends Xe{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const n=t.shadowOptions;if(void 0!==n){const t=e.attachShadow(n);"closed"===n.mode&&xt.set(e,t)}const o=Qe.getAccessors(e);if(o.length>0){const t=this.boundObservables=Object.create(null);for(let n=0,r=o.length;n<r;++n){const r=o[n].name,i=e[r];void 0!==i&&(delete e[r],t[r]=i)}}}get isConnected(){return Qe.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,Qe.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=_t(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const n=e.behaviors;e.addStylesTo(t),null!==n&&this.addBehaviors(n)}}removeStyles(e){const t=_t(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const n=e.behaviors;e.removeStylesFrom(t),null!==n&&this.removeBehaviors(n)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),n=e.length,o=[];for(let r=0;r<n;++r){const n=e[r];t.has(n)?t.set(n,t.get(n)+1):(t.set(n,1),o.push(n))}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].bind(e,ot)}}removeBehaviors(e,t=!1){const n=this.behaviors;if(null===n)return;const o=e.length,r=[];for(let i=0;i<o;++i){const o=e[i];if(n.has(o)){const e=n.get(o)-1;0===e||t?n.delete(o)&&r.push(o):n.set(o,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<r.length;++t)r[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,ot);const t=this.behaviors;if(null!==t)for(const[n]of t)n.bind(e,ot);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[n]of t)n.unbind(e)}}onAttributeChangedCallback(e,t,n){const o=this.definition.attributeLookup[e];void 0!==o&&o.onAttributeChangedCallback(this.element,n)}emit(e,t,n){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},St),n)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const n=Object.keys(t);for(let o=0,r=n.length;o<r;++o){const r=n[o];e[r]=t[r]}this.boundObservables=null}const n=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,n=_t(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||Ke.removeChildNodes(n),e&&(this.view=e.render(t,n,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const n=wt.forType(e.constructor);if(void 0===n)throw new Error("Missing FASTElement definition.");return e.$fastController=new Tt(e,n)}}function Rt(e){return class extends e{constructor(){super(),Tt.forCustomElement(this)}$emit(e,t,n){return this.$fastController.emit(e,t,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,n){this.$fastController.onAttributeChangedCallback(e,t,n)}}}const kt=Object.assign(Rt(HTMLElement),{from:e=>Rt(e),define:(e,t)=>new wt(e,t).define().type});function Et(e){return function(t){new wt(t,e).define()}}const Ot=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(n){Reflect.defineMetadata(e,t,n)}},Reflect.defineMetadata=function(e,t,n){let o=Ot.get(n);void 0===o&&Ot.set(n,o=new Map),o.set(e,t)},Reflect.getOwnMetadata=function(e,t){const n=Ot.get(t);if(void 0!==n)return n.get(e)});class It{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,nn(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:n,key:o}=this;return this.container=this.key=void 0,n.registerResolver(o,new Ut(o,e,t))}}function Mt(e){const t=e.slice(),n=Object.keys(e),o=n.length;let r;for(let i=0;i<o;++i)r=n[i],hn(r)||(t[r]=e[r]);return t}const Dt=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new Ut(e,1,e),transient:e=>new Ut(e,2,e)}),$t=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Dt.singleton})}),At=new Map;function Nt(e){return t=>Reflect.getOwnMetadata(e,t)}let Pt=null;const zt=Object.freeze({createContainer:e=>new en(null,Object.assign({},$t.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:zt.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(Qt,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||zt.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new en(e,Object.assign({},$t.default,t,{parentLocator:zt.findParentContainer})):Pt||(Pt=new en(null,Object.assign({},$t.default,t,{parentLocator:()=>null}))),getDesignParamtypes:Nt("design:paramtypes"),getAnnotationParamtypes:Nt("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=At.get(e);if(void 0===t){const n=e.inject;if(void 0===n){const n=zt.getDesignParamtypes(e),o=zt.getAnnotationParamtypes(e);if(void 0===n)if(void 0===o){const n=Object.getPrototypeOf(e);t="function"==typeof n&&n!==Function.prototype?Mt(zt.getDependencies(n)):[]}else t=Mt(o);else if(void 0===o)t=Mt(n);else{t=Mt(n);let e,r=o.length;for(let n=0;n<r;++n)e=o[n],void 0!==e&&(t[n]=e);const i=Object.keys(o);let s;r=i.length;for(let e=0;e<r;++e)s=i[e],hn(s)||(t[s]=o[s])}}else t=Mt(n);At.set(e,t)}return t},defineProperty(e,t,n,o=!1){const r=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[r];if(void 0===e){const i=this instanceof HTMLElement?zt.findResponsibleContainer(this):zt.getOrCreateDOMContainer();if(e=i.get(n),this[r]=e,o&&this instanceof kt){const o=this.$fastController,i=()=>{zt.findResponsibleContainer(this).get(n)!==this[r]&&(this[r]=e,o.notify(t))};o.subscribe({handleChange:i},"isConnected")}}return e}})},createInterface(e,t){const n="function"==typeof e?e:t,o="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||an,r="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),i=function(e,t,n){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${i.friendlyName}'`);if(t)zt.defineProperty(e,t,i,r);else{zt.getOrCreateAnnotationParamTypes(e)[n]=i}};return i.$isInterface=!0,i.friendlyName=o??"(anonymous)",null!=n&&(i.register=function(e,t){return n(new It(e,null!=t?t:i))}),i.toString=function(){return`InterfaceSymbol<${i.friendlyName}>`},i},inject:(...e)=>function(t,n,o){if("number"==typeof o){const n=zt.getOrCreateAnnotationParamTypes(t),r=e[0];void 0!==r&&(n[o]=r)}else if(n)zt.defineProperty(t,n,e[0]);else{const n=o?zt.getOrCreateAnnotationParamTypes(o.value):zt.getOrCreateAnnotationParamTypes(t);let r;for(let t=0;t<e.length;++t)r=e[t],void 0!==r&&(n[t]=r)}},transient:e=>(e.register=function(t){return on.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=Ft)=>(e.register=function(t){return on.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),Ht=zt.createInterface("Container");function Lt(e){return function(t){const n=function(e,t,o){zt.inject(n)(e,t,o)};return n.$isResolver=!0,n.resolve=function(n,o){return e(t,n,o)},n}}zt.inject;const Ft={scoped:!1};Gt=(e,t,n,o)=>n.getAll(e,o);var Gt;Lt(((e,t,n)=>()=>n.get(e))),Lt(((e,t,n)=>n.has(e,!0)?n.get(e):void 0));function Bt(e,t,n){zt.inject(Bt)(e,t,n)}Bt.$isResolver=!0,Bt.resolve=()=>{};Lt(((e,t,n)=>{const o=Wt(e,t),r=new Ut(e,0,o);return n.registerResolver(e,r),o})),Lt(((e,t,n)=>Wt(e,t)));function Wt(e,t){return t.getFactory(e).construct(t)}class Ut{constructor(e,t,n){this.key=e,this.strategy=t,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const n=e.getFactory(this.state);if(null===n)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return n.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,n,o;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(o=null===(n=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===n?void 0:n.call(t,e))&&void 0!==o?o:null;default:return null}}}function jt(e){return this.get(e)}function Vt(e,t){return t(e)}class Zt{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let n;return n=void 0===t?new this.Type(...this.dependencies.map(jt,e)):new this.Type(...this.dependencies.map(jt,e),...t),null==this.transformers?n:this.transformers.reduce(Vt,n)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const qt={$isResolver:!0,resolve:(e,t)=>t};function Kt(e){return"function"==typeof e.register}function Yt(e){return function(e){return Kt(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const Xt=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Qt="__DI_LOCATE_PARENT__",Jt=new Map;class en{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Ht,qt),e instanceof Node&&e.addEventListener(Qt,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,n,o,r,i;const s=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],ln(t))if(Kt(t))t.register(this,s);else if(void 0!==t.prototype)on.singleton(t,t).register(this);else for(n=Object.keys(t),r=0,i=n.length;r<i;++r)o=t[n[r]],ln(o)&&(Kt(o)?o.register(this,s):this.register(o));return--this.registerDepth,this}registerResolver(e,t){rn(e);const n=this.resolvers,o=n.get(e);return null==o?n.set(e,t):o instanceof Ut&&4===o.strategy?o.state.push(t):n.set(e,new Ut(e,4,[o,t])),t}registerTransformer(e,t){const n=this.getResolver(e);if(null==n)return!1;if(n.getFactory){const e=n.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(rn(e),void 0!==e.resolve)return e;let n,o=this;for(;null!=o;){if(n=o.resolvers.get(e),null!=n)return n;if(null==o.parent){const n=Yt(e)?this:o;return t?this.jitRegister(e,n):null}o=o.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(rn(e),e.$isResolver)return e.resolve(this,this);let t,n=this;for(;null!=n;){if(t=n.resolvers.get(e),null!=t)return t.resolve(n,this);if(null==n.parent){const o=Yt(e)?this:n;return t=this.jitRegister(e,o),t.resolve(n,this)}n=n.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){rn(e);const n=this;let o,r=n;if(t){let t=Ge;for(;null!=r;)o=r.resolvers.get(e),null!=o&&(t=t.concat(sn(o,r,n))),r=r.parent;return t}for(;null!=r;){if(o=r.resolvers.get(e),null!=o)return sn(o,r,n);if(r=r.parent,null==r)return Ge}return Ge}getFactory(e){let t=Jt.get(e);if(void 0===t){if(cn(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Jt.set(e,t=new Zt(e,zt.getDependencies(e)))}return t}registerFactory(e,t){Jt.set(e,t)}createChild(e){return new en(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Xt.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Kt(e)){const n=e.register(t);if(!(n instanceof Object)||null==n.resolve){const n=t.resolvers.get(e);if(null!=n)return n;throw new Error("A valid resolver was not returned from the static register method")}return n}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const n=this.config.defaultResolver(e,t);return t.resolvers.set(e,n),n}}}const tn=new WeakMap;function nn(e){return function(t,n,o){if(tn.has(o))return tn.get(o);const r=e(t,n,o);return tn.set(o,r),r}}const on=Object.freeze({instance:(e,t)=>new Ut(e,0,t),singleton:(e,t)=>new Ut(e,1,t),transient:(e,t)=>new Ut(e,2,t),callback:(e,t)=>new Ut(e,3,t),cachedCallback:(e,t)=>new Ut(e,3,nn(t)),aliasTo:(e,t)=>new Ut(t,5,e)});function rn(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function sn(e,t,n){if(e instanceof Ut&&4===e.strategy){const o=e.state;let r=o.length;const i=new Array(r);for(;r--;)i[r]=o[r].resolve(t,n);return i}return[e.resolve(t,n)]}const an="(anonymous)";function ln(e){return"object"==typeof e&&null!==e||"function"==typeof e}const cn=function(){const e=new WeakMap;let t=!1,n="",o=0;return function(r){return t=e.get(r),void 0===t&&(n=r.toString(),o=n.length,t=o>=29&&o<=100&&125===n.charCodeAt(o-1)&&n.charCodeAt(o-2)<=32&&93===n.charCodeAt(o-3)&&101===n.charCodeAt(o-4)&&100===n.charCodeAt(o-5)&&111===n.charCodeAt(o-6)&&99===n.charCodeAt(o-7)&&32===n.charCodeAt(o-8)&&101===n.charCodeAt(o-9)&&118===n.charCodeAt(o-10)&&105===n.charCodeAt(o-11)&&116===n.charCodeAt(o-12)&&97===n.charCodeAt(o-13)&&110===n.charCodeAt(o-14)&&88===n.charCodeAt(o-15),e.set(r,t)),t}}(),dn={};function hn(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=dn[e];if(void 0!==t)return t;const n=e.length;if(0===n)return dn[e]=!1;let o=0;for(let t=0;t<n;++t)if(o=e.charCodeAt(t),0===t&&48===o&&n>1||o<48||o>57)return dn[e]=!1;return dn[e]=!0}default:return!1}}function un(e){return`${e.toLowerCase()}:presentation`}const pn=new Map,fn=Object.freeze({define(e,t,n){const o=un(e);void 0===pn.get(o)?pn.set(o,t):pn.set(o,!1),n.register(on.instance(o,t))},forTag(e,t){const n=un(e),o=pn.get(n);if(!1===o){return zt.findResponsibleContainer(t).get(n)}return o||null}});class mn{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?rt.create(t):t instanceof rt?t:rt.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class gn extends kt{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=fn.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new vn(this===gn?class extends gn{}:this,e,t)}}function bn(e,t,n){return"function"==typeof e?e(t,n):e}Ct([Je],gn.prototype,"template",void 0),Ct([Je],gn.prototype,"styles",void 0);class vn{constructor(e,t,n){this.type=e,this.elementDefinition=t,this.overrideDefinition=n,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const n=this.definition,o=this.overrideDefinition,r=`${n.prefix||t.elementPrefix}-${n.baseName}`;t.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new mn(bn(n.template,e,n),bn(n.styles,e,n));e.definePresentation(t);let r=bn(n.shadowOptions,e,n);e.shadowRootMode&&(r?o.shadowOptions||(r.mode=e.shadowRootMode):null!==r&&(r={mode:e.shadowRootMode})),e.defineElement({elementOptions:bn(n.elementOptions,e,n),shadowOptions:r,attributes:bn(n.attributes,e,n)})}})}}const yn=new Set(["children","localName","ref","style","className"]),wn=Object.freeze(Object.create(null)),Cn="_default",xn=new Map;function Sn(e){return e.events||(e.events={})}function _n(e,t,n){return!yn.has(n)}function Tn(e,t){let n=[];const o={register(e,...t){n.forEach((n=>n.register(e,...t))),n=[]}};return{wrap:function(o,r={}){var i,s;o instanceof vn&&(t?t.register(o):n.push(o),o=o.type);const a=xn.get(o);if(a){const e=a.get(null!==(i=r.name)&&void 0!==i?i:Cn);if(e)return e}class l extends e.Component{constructor(){super(...arguments),this._element=null}_updateElement(e){const t=this._element;if(null===t)return;const n=this.props,o=e||wn,i=Sn(r);for(const e in this._elementProps){const r=n[e],s=i[e];if(void 0===s)t[e]=r;else{const n=o[e];if(r===n)continue;void 0!==n&&t.removeEventListener(s,n),void 0!==r&&t.addEventListener(s,r)}}}componentDidMount(){this._updateElement()}componentDidUpdate(e){this._updateElement(e)}render(){const t=this.props.__forwardedRef;void 0!==this._ref&&this._userRef===t||(this._ref=e=>{null===this._element&&(this._element=e),null!==t&&function(e,t){"function"==typeof e?e(t):e.current=t}(t,e),this._userRef=t});const n={ref:this._ref},i=this._elementProps={},s=function(e,t){if(!t.keys)if(t.properties)t.keys=new Set(t.properties.concat(Object.keys(Sn(t))));else{const n=new Set(Object.keys(Sn(t))),o=Qe.getAccessors(e.prototype);if(o.length>0)for(const e of o)_n(0,0,e.name)&&n.add(e.name);else for(const t in e.prototype)!(t in HTMLElement.prototype)&&_n(0,0,t)&&n.add(t);t.keys=n}return t.keys}(o,r),a=this.props;for(const e in a){const t=a[e];s.has(e)?i[e]=t:n["className"===e?"class":e]=t}return e.createElement(function(e,t){if(!t.name){const n=wt.forType(e);if(!n)throw new Error("React wrappers must wrap a FASTElement or be configured with a name.");t.name=n.name}return t.name}(o,r),n)}}const c=e.forwardRef(((t,n)=>e.createElement(l,Object.assign(Object.assign({},t),{__forwardedRef:n}),null==t?void 0:t.children)));return xn.has(o)||xn.set(o,new Map),xn.get(o).set(null!==(s=r.name)&&void 0!==s?s:Cn,c),c},registry:o}}class Rn extends gn{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}Ct([gt({attribute:"fill"})],Rn.prototype,"fill",void 0),Ct([gt({attribute:"color"})],Rn.prototype,"color",void 0),Ct([gt({mode:"boolean"})],Rn.prototype,"circular",void 0);class kn{constructor(){this.targetIndex=0}}class En extends kn{constructor(){super(...arguments),this.createPlaceholder=Ke.createInterpolationPlaceholder}}class On extends kn{constructor(e,t,n){super(),this.name=e,this.behavior=t,this.options=n}createPlaceholder(e){return Ke.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function In(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=Qe.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function Mn(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function Dn(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function $n(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function An(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Nn(e){Ke.setAttribute(this.target,this.targetName,e)}function Pn(e){Ke.setBooleanAttribute(this.target,this.targetName,e)}function zn(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Hn(e){this.target[this.targetName]=e}function Ln(e){const t=this.classVersions||Object.create(null),n=this.target;let o=this.version||0;if(null!=e&&e.length){const r=e.split(/\s+/);for(let e=0,i=r.length;e<i;++e){const i=r[e];""!==i&&(t[i]=o,n.classList.add(i))}}if(this.classVersions=t,this.version=o+1,0!==o){o-=1;for(const e in t)t[e]===o&&n.classList.remove(e)}}class Fn extends En{constructor(e){super(),this.binding=e,this.bind=In,this.unbind=Dn,this.updateTarget=Nn,this.isBindingVolatile=Qe.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Hn,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,n)=>Ke.createHTML(e(t,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Pn;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Mn,this.unbind=An;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=Ln)}}targetAtContent(){this.updateTarget=zn,this.unbind=$n}createBehavior(e){return new Gn(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Gn{constructor(e,t,n,o,r,i,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=n,this.bind=o,this.unbind=r,this.updateTarget=i,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){nt.setEvent(e);const t=this.binding(this.source,this.context);nt.setEvent(null),!0!==t&&e.preventDefault()}}let Bn=null;class Wn{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Bn=this}static borrow(e){const t=Bn||new Wn;return t.directives=e,t.reset(),Bn=null,t}}function Un(e){if(1===e.length)return e[0];let t;const n=e.length,o=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),r=new Fn(((e,t)=>{let r="";for(let i=0;i<n;++i)r+=o[i](e,t);return r}));return r.targetName=t,r}const jn=qe.length;function Vn(e,t){const n=t.split(Ze);if(1===n.length)return null;const o=[];for(let t=0,r=n.length;t<r;++t){const r=n[t],i=r.indexOf(qe);let s;if(-1===i)s=r;else{const t=parseInt(r.substring(0,i));o.push(e.directives[t]),s=r.substring(i+jn)}""!==s&&o.push(s)}return o}function Zn(e,t,n=!1){const o=t.attributes;for(let r=0,i=o.length;r<i;++r){const s=o[r],a=s.value,l=Vn(e,a);let c=null;null===l?n&&(c=new Fn((()=>a)),c.targetName=s.name):c=Un(l),null!==c&&(t.removeAttributeNode(s),r--,i--,e.addFactory(c))}}function qn(e,t,n){const o=Vn(e,t.textContent);if(null!==o){let r=t;for(let i=0,s=o.length;i<s;++i){const s=o[i],a=0===i?t:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",e.captureContentBinding(s)),r=a,e.targetIndex++,a!==t&&n.nextNode()}e.targetIndex--}}const Kn=document.createRange();class Yn{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const n=e.parentNode;let o,r=this.firstChild;for(;r!==t;)o=r.nextSibling,n.insertBefore(r,e),r=o;n.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let n,o=this.firstChild;for(;o!==t;)n=o.nextSibling,e.appendChild(o),o=n;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let n,o=this.firstChild;for(;o!==t;)n=o.nextSibling,e.removeChild(o),o=n;e.removeChild(t);const r=this.behaviors,i=this.source;for(let e=0,t=r.length;e<t;++e)r[e].unbind(i)}bind(e,t){const n=this.behaviors;if(this.source!==e)if(null!==this.source){const o=this.source;this.source=e,this.context=t;for(let r=0,i=n.length;r<i;++r){const i=n[r];i.unbind(o),i.bind(e,t)}}else{this.source=e,this.context=t;for(let o=0,r=n.length;o<r;++o)n[o].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let n=0,o=e.length;n<o;++n)e[n].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Kn.setStartBefore(e[0].firstChild),Kn.setEndAfter(e[e.length-1].lastChild),Kn.deleteContents();for(let t=0,n=e.length;t<n;++t){const n=e[t],o=n.behaviors,r=n.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(r)}}}}class Xn{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=Ke.createHTML(t);const n=e.content.firstElementChild;null!==n&&"TEMPLATE"===n.tagName&&(e=n)}else e=t;const n=function(e,t){const n=e.content;document.adoptNode(n);const o=Wn.borrow(t);Zn(o,e,!0);const r=o.behaviorFactories;o.reset();const i=Ke.createTemplateWalker(n);let s;for(;s=i.nextNode();)switch(o.targetIndex++,s.nodeType){case 1:Zn(o,s);break;case 3:qn(o,s,i);break;case 8:Ke.isMarker(s)&&o.addFactory(t[Ke.extractDirectiveIndexFromMarker(s)])}let a=0;(Ke.isMarker(n.firstChild)||1===n.childNodes.length&&t.length)&&(n.insertBefore(document.createComment(""),n.firstChild),a=-1);const l=o.behaviorFactories;return o.release(),{fragment:n,viewBehaviorFactories:l,hostBehaviorFactories:r,targetOffset:a}}(e,this.directives);this.fragment=n.fragment,this.viewBehaviorFactories=n.viewBehaviorFactories,this.hostBehaviorFactories=n.hostBehaviorFactories,this.targetOffset=n.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,o=new Array(this.behaviorCount),r=Ke.createTemplateWalker(t);let i=0,s=this.targetOffset,a=r.nextNode();for(let e=n.length;i<e;++i){const e=n[i],t=e.targetIndex;for(;null!==a;){if(s===t){o[i]=e.createBehavior(a);break}a=r.nextNode(),s++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let n=0,r=t.length;n<r;++n,++i)o[i]=t[n].createBehavior(e)}return new Yn(t,o)}render(e,t,n){"string"==typeof t&&(t=document.getElementById(t)),void 0===n&&(n=t);const o=this.create(n);return o.bind(e,ot),o.appendTo(t),o}}const Qn=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Jn(e,...t){const n=[];let o="";for(let r=0,i=e.length-1;r<i;++r){const i=e[r];let s=t[r];if(o+=i,s instanceof Xn){const e=s;s=()=>e}if("function"==typeof s&&(s=new Fn(s)),s instanceof En){const e=Qn.exec(i);null!==e&&(s.targetName=e[2])}s instanceof kn?(o+=s.createPlaceholder(n.length),n.push(s)):o+=s}return o+=e[e.length-1],new Xn(o,n)}const eo=(e,t)=>Jn`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class to{createCSS(){return""}createBehavior(){}}function no(e,t){const n=[];let o="";const r=[];for(let i=0,s=e.length-1;i<s;++i){o+=e[i];let s=t[i];if(s instanceof to){const e=s.createBehavior();s=s.createCSS(),e&&r.push(e)}s instanceof rt||s instanceof CSSStyleSheet?(""!==o.trim()&&(n.push(o),o=""),n.push(s)):o+=s}return o+=e[e.length-1],""!==o.trim()&&n.push(o),{styles:n,behaviors:r}}function oo(e,...t){const{styles:n,behaviors:o}=no(e,t),r=rt.create(n);return o.length&&r.withBehaviors(...o),r}function ro(e){return`:host([hidden]){display:none}:host{display:${e}}`}function io(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const so=document.createElement("div");class ao{setProperty(e,t){Ke.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){Ke.queueUpdate((()=>this.target.removeProperty(e)))}}class lo extends ao{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class co extends ao{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class ho{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),Qe.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),Ke.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),Ke.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:n}=this.style;if(n){const e=n.insertRule(":host{}",n.cssRules.length);this.target=n.cssRules[e].style}else this.target=null}}Ct([Je],ho.prototype,"target",void 0);class uo{constructor(e){this.target=e.style}setProperty(e,t){Ke.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){Ke.queueUpdate((()=>this.target.removeProperty(e)))}}class po{setProperty(e,t){po.properties[e]=t;for(const n of po.roots.values())go.getOrCreate(po.normalizeRoot(n)).setProperty(e,t)}removeProperty(e){delete po.properties[e];for(const t of po.roots.values())go.getOrCreate(po.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=po;if(!t.has(e)){t.add(e);const n=go.getOrCreate(this.normalizeRoot(e));for(const e in po.properties)n.setProperty(e,po.properties[e])}}static unregisterRoot(e){const{roots:t}=po;if(t.has(e)){t.delete(e);const n=go.getOrCreate(po.normalizeRoot(e));for(const e in po.properties)n.removeProperty(e)}}static normalizeRoot(e){return e===so?document:e}}po.roots=new Set,po.properties={};const fo=new WeakMap,mo=Ke.supportsAdoptedStyleSheets?class extends ao{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(rt.create([t]))}}:ho,go=Object.freeze({getOrCreate(e){if(fo.has(e))return fo.get(e);let t;return e===so?t=new po:e instanceof Document?t=Ke.supportsAdoptedStyleSheets?new lo:new co:t=e instanceof kt?new mo(e):new uo(e),fo.set(e,t),t}});class bo extends to{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=bo.uniqueId(),bo.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new bo({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return bo.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=xo.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof bo&&(t=this.alias(t)),xo.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),xo.existsFor(e)&&xo.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(so,e),this}subscribe(e,t){const n=this.getOrCreateSubscriberSet(t);t&&!xo.existsFor(t)&&xo.getOrCreate(t),n.has(e)||n.add(e)}unsubscribe(e,t){const n=this.subscribers.get(t||this);n&&n.has(e)&&n.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}bo.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),bo.tokensById=new Map;class vo{constructor(e,t,n){this.source=e,this.token=t,this.node=n,this.dependencies=new Set,this.observer=Qe.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,ot))}}class yo{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),Qe.getNotifier(this).notify(e.id))}get(e){return Qe.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const wo=new WeakMap,Co=new WeakMap;class xo{constructor(e){this.target=e,this.store=new yo,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const n=bo.getTokenById(t);if(n&&(n.notify(this.target),bo.isCSSDesignToken(n))){const t=this.parent,o=this.isReflecting(n);if(t){const r=t.get(n),i=e.get(n);r===i||o?r===i&&o&&this.stopReflectToCSS(n):this.reflectToCSS(n)}else o||this.reflectToCSS(n)}}},wo.set(e,this),Qe.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof kt?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return wo.get(e)||new xo(e)}static existsFor(e){return wo.has(e)}static findParent(e){if(so!==e.target){let t=io(e.target);for(;null!==t;){if(wo.has(t))return wo.get(t);t=io(t)}return xo.getOrCreate(so)}return null}static findClosestAssignedNode(e,t){let n=t;do{if(n.has(e))return n;n=n.parent?n.parent:n.target!==so?xo.getOrCreate(so):null}while(null!==n);return null}get parent(){return Co.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const n=this.getRaw(e);return void 0!==n?(this.hydrate(e,n),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=xo.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){bo.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),bo.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=xo.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){Co.get(this).removeChild(this)}}appendChild(e){e.parent&&Co.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));Co.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),Qe.getNotifier(this.store).subscribe(e);for(const[t,n]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):n)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),Qe.getNotifier(this.store).unsubscribe(e),e.parent===this&&Co.delete(e)}contains(e){return function(e,t){let n=t;for(;null!==n;){if(n===e)return!0;n=io(n)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),xo.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),xo.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const n=bo.getTokenById(t);n&&this.hydrate(n,this.getRaw(n))}hydrate(e,t){if(!this.has(e)){const n=this.bindingObservers.get(e);bo.isDerivedDesignTokenValue(t)?n?n.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(n&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const n=new vo(t,e,this);return this.bindingObservers.set(e,n),n}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}xo.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:n}=e;this.add(t,n)}add(e,t){go.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(xo.getOrCreate(t).get(e)))}remove(e,t){go.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},Ct([Je],xo.prototype,"children",void 0);const So=Object.freeze({create:function(e){return bo.from(e)},notifyConnection:e=>!(!e.isConnected||!xo.existsFor(e))&&(xo.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!xo.existsFor(e))&&(xo.getOrCreate(e).unbind(),!0),registerRoot(e=so){po.registerRoot(e)},unregisterRoot(e=so){po.unregisterRoot(e)}});function _o(e){const t=getComputedStyle(document.body),n=document.querySelector("body");if(n){const o=n.getAttribute("data-vscode-theme-kind");for(const[r,i]of e){let e=t.getPropertyValue(r).toString();if("vscode-high-contrast"===o)0===e.length&&i.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===i.name&&(e="transparent");else if("vscode-high-contrast-light"===o){if(0===e.length&&i.name.includes("background"))switch(i.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===i.name&&(e="transparent");i.setValueFor(n,e)}}}const To=new Map;let Ro=!1;function ko(e,t){const n=So.create(e);if(t){if(t.includes("--fake-vscode-token")){t=`${t}-${"id"+Math.random().toString(16).slice(2)}`}To.set(t,n)}return Ro||(!function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{_o(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),_o(e)}))}(To),Ro=!0),n}const Eo=ko("background","--vscode-editor-background").withDefault("#1e1e1e"),Oo=ko("border-width").withDefault(1),Io=ko("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),Mo=(ko("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),ko("corner-radius").withDefault(0)),Do=ko("design-unit").withDefault(4),$o=ko("disabled-opacity").withDefault(.4),Ao=ko("focus-border","--vscode-focusBorder").withDefault("#007fd4"),No=ko("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),Po=(ko("font-weight","--vscode-font-weight").withDefault("400"),ko("foreground","--vscode-foreground").withDefault("#cccccc")),zo=ko("input-height").withDefault("26"),Ho=ko("input-min-width").withDefault("100px"),Lo=ko("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),Fo=ko("type-ramp-base-line-height").withDefault("normal"),Go=ko("type-ramp-minus1-font-size").withDefault("11px"),Bo=ko("type-ramp-minus1-line-height").withDefault("16px"),Wo=(ko("type-ramp-minus2-font-size").withDefault("9px"),ko("type-ramp-minus2-line-height").withDefault("16px"),ko("type-ramp-plus1-font-size").withDefault("16px"),ko("type-ramp-plus1-line-height").withDefault("24px"),ko("scrollbarWidth").withDefault("10px")),Uo=ko("scrollbarHeight").withDefault("10px"),jo=ko("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Vo=ko("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Zo=ko("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),qo=ko("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Ko=ko("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Yo=ko("button-border","--vscode-button-border").withDefault("transparent"),Xo=ko("button-icon-background").withDefault("transparent"),Qo=ko("button-icon-corner-radius").withDefault("5px"),Jo=ko("button-icon-outline-offset").withDefault(0),er=ko("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),tr=ko("button-icon-padding").withDefault("3px"),nr=ko("button-primary-background","--vscode-button-background").withDefault("#0e639c"),or=ko("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),rr=ko("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),ir=ko("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),sr=ko("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),ar=ko("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),lr=ko("button-padding-horizontal").withDefault("11px"),cr=ko("button-padding-vertical").withDefault("4px"),dr=ko("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),hr=ko("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),ur=ko("checkbox-corner-radius").withDefault(3),pr=(ko("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),ko("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771")),fr=ko("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),mr=ko("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),gr=ko("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),br=ko("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),vr=ko("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),yr=(ko("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),ko("dropdown-list-max-height").withDefault("200px")),wr=ko("input-background","--vscode-input-background").withDefault("#3c3c3c"),Cr=ko("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),xr=(ko("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),ko("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff")),Sr=ko("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),_r=ko("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Tr=ko("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Rr=ko("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),kr=ko("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),Er=(ko("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),ko("panel-view-border","--vscode-panel-border").withDefault("#80808059"),ko("tag-corner-radius").withDefault("2px"));const Or=class extends Rn{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}.compose({baseName:"badge",template:eo,styles:(e,t)=>oo`
	${ro("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${No};
		font-size: ${Go};
		line-height: ${Bo};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${qo};
		border: calc(${Oo} * 1px) solid ${Yo};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${Ko};
		display: flex;
		height: calc(${Do} * 4px);
		justify-content: center;
		min-width: calc(${Do} * 4px + 2px);
		min-height: calc(${Do} * 4px + 2px);
		padding: 3px 6px;
	}
`});class Ir{}Ct([gt({attribute:"aria-atomic"})],Ir.prototype,"ariaAtomic",void 0),Ct([gt({attribute:"aria-busy"})],Ir.prototype,"ariaBusy",void 0),Ct([gt({attribute:"aria-controls"})],Ir.prototype,"ariaControls",void 0),Ct([gt({attribute:"aria-current"})],Ir.prototype,"ariaCurrent",void 0),Ct([gt({attribute:"aria-describedby"})],Ir.prototype,"ariaDescribedby",void 0),Ct([gt({attribute:"aria-details"})],Ir.prototype,"ariaDetails",void 0),Ct([gt({attribute:"aria-disabled"})],Ir.prototype,"ariaDisabled",void 0),Ct([gt({attribute:"aria-errormessage"})],Ir.prototype,"ariaErrormessage",void 0),Ct([gt({attribute:"aria-flowto"})],Ir.prototype,"ariaFlowto",void 0),Ct([gt({attribute:"aria-haspopup"})],Ir.prototype,"ariaHaspopup",void 0),Ct([gt({attribute:"aria-hidden"})],Ir.prototype,"ariaHidden",void 0),Ct([gt({attribute:"aria-invalid"})],Ir.prototype,"ariaInvalid",void 0),Ct([gt({attribute:"aria-keyshortcuts"})],Ir.prototype,"ariaKeyshortcuts",void 0),Ct([gt({attribute:"aria-label"})],Ir.prototype,"ariaLabel",void 0),Ct([gt({attribute:"aria-labelledby"})],Ir.prototype,"ariaLabelledby",void 0),Ct([gt({attribute:"aria-live"})],Ir.prototype,"ariaLive",void 0),Ct([gt({attribute:"aria-owns"})],Ir.prototype,"ariaOwns",void 0),Ct([gt({attribute:"aria-relevant"})],Ir.prototype,"ariaRelevant",void 0),Ct([gt({attribute:"aria-roledescription"})],Ir.prototype,"ariaRoledescription",void 0);class Mr{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Dr(e){return new On("fast-ref",Mr,e)}class $r{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Ar=(e,t)=>Jn`
    <span
        part="end"
        ${Dr("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Dr("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Nr=(e,t)=>Jn`
    <span
        part="start"
        ${Dr("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Dr("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;Jn`
    <span part="end" ${Dr("endContainer")}>
        <slot
            name="end"
            ${Dr("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Jn`
    <span part="start" ${Dr("startContainer")}>
        <slot
            name="start"
            ${Dr("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function Pr(e,...t){const n=ut.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((n=>{"constructor"!==n&&Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n))}));ut.locate(t).forEach((e=>n.push(e)))}))}var zr;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(zr||(zr={}));const Hr="ArrowDown",Lr="ArrowLeft",Fr="ArrowRight",Gr="ArrowUp",Br="Enter",Wr="Escape",Ur="Home",jr="End",Vr=" ",Zr="Tab",qr={ArrowDown:Hr,ArrowLeft:Lr,ArrowRight:Fr,ArrowUp:Gr},Kr="form-associated-proxy",Yr="ElementInternals",Xr=Yr in window&&"setFormValue"in window[Yr].prototype,Qr=new WeakMap;function Jr(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Xr}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=e?t.concat(Array.from(e)):t;return Object.freeze(n)}return Ge}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),Ke.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),Ke.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Xr)return null;let e=Qr.get(this);return e||(e=this.attachInternals(),Qr.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,n){this.elementInternals?this.elementInternals.setValidity(e,t,n):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Kr),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Kr)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===Br)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return gt({mode:"boolean"})(t.prototype,"disabled"),gt({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),gt({attribute:"current-value"})(t.prototype,"currentValue"),gt(t.prototype,"name"),gt({mode:"boolean"})(t.prototype,"required"),Je(t.prototype,"value"),t}function ei(e){class t extends(Jr(e)){}class n extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return gt({attribute:"checked",mode:"boolean"})(n.prototype,"checkedAttribute"),gt({attribute:"current-checked",converter:pt})(n.prototype,"currentChecked"),Je(n.prototype,"defaultChecked"),Je(n.prototype,"checked"),n}class ti extends gn{}class ni extends(Jr(ti)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class oi extends ni{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}Ct([gt({mode:"boolean"})],oi.prototype,"autofocus",void 0),Ct([gt({attribute:"form"})],oi.prototype,"formId",void 0),Ct([gt],oi.prototype,"formaction",void 0),Ct([gt],oi.prototype,"formenctype",void 0),Ct([gt],oi.prototype,"formmethod",void 0),Ct([gt({mode:"boolean"})],oi.prototype,"formnovalidate",void 0),Ct([gt],oi.prototype,"formtarget",void 0),Ct([gt],oi.prototype,"type",void 0),Ct([Je],oi.prototype,"defaultSlottedContent",void 0);class ri{}function ii(e){return e?function(t,n,o){return 1===t.nodeType&&t.matches(e)}:function(e,t,n){return 1===e.nodeType}}Ct([gt({attribute:"aria-expanded"})],ri.prototype,"ariaExpanded",void 0),Ct([gt({attribute:"aria-pressed"})],ri.prototype,"ariaPressed",void 0),Pr(ri,Ir),Pr(oi,$r,ri);class si{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=Qe.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Ge),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class ai extends si{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function li(e){return"string"==typeof e&&(e={property:e}),new On("fast-slotted",ai,e)}function ci(...e){return e.every((e=>e instanceof HTMLElement))}let di;const hi=function(){if("boolean"==typeof di)return di;if("undefined"==typeof window||!window.document||!window.document.createElement)return di=!1,di;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),di=!0}catch(e){di=!1}finally{document.head.removeChild(e)}return di}()?"focus-visible":"focus",ui="not-allowed",pi=oo`
	${ro("inline-flex")} :host {
		outline: none;
		font-family: ${No};
		font-size: ${Lo};
		line-height: ${Fo};
		color: ${or};
		background: ${nr};
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
		padding: ${cr} ${lr};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${Oo} * 1px) solid ${Yo};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${rr};
	}
	:host(:active) {
		background: ${nr};
	}
	.control:${hi} {
		outline: calc(${Oo} * 1px) solid ${Ao};
		outline-offset: calc(${Oo} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${$o};
		background: ${nr};
		cursor: ${ui};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Do} * 4px);
		height: calc(${Do} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,fi=oo`
	:host([appearance='primary']) {
		background: ${nr};
		color: ${or};
	}
	:host([appearance='primary']:hover) {
		background: ${rr};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${nr};
	}
	:host([appearance='primary']) .control:${hi} {
		outline: calc(${Oo} * 1px) solid ${Ao};
		outline-offset: calc(${Oo} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${nr};
	}
`,mi=oo`
	:host([appearance='secondary']) {
		background: ${ir};
		color: ${sr};
	}
	:host([appearance='secondary']:hover) {
		background: ${ar};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${ir};
	}
	:host([appearance='secondary']) .control:${hi} {
		outline: calc(${Oo} * 1px) solid ${Ao};
		outline-offset: calc(${Oo} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${ir};
	}
`,gi=oo`
	:host([appearance='icon']) {
		background: ${Xo};
		border-radius: ${Qo};
		color: ${Po};
	}
	:host([appearance='icon']:hover) {
		background: ${er};
		outline: 1px dotted ${Io};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${tr};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${er};
	}
	:host([appearance='icon']) .control:${hi} {
		outline: calc(${Oo} * 1px) solid ${Ao};
		outline-offset: ${Jo};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Xo};
	}
`;class bi extends oi{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,n){if("appearance"===e&&"icon"===n){this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")}"aria-label"===e&&(this.ariaLabel=n),"disabled"===e&&(this.disabled=null!==n)}}Ct([gt],bi.prototype,"appearance",void 0);const vi=bi.compose({baseName:"button",template:(e,t)=>Jn`
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
        ${Dr("control")}
    >
        ${Nr(0,t)}
        <span class="content" part="content">
            <slot ${li("defaultSlottedContent")}></slot>
        </span>
        ${Ar(0,t)}
    </button>
`,styles:(e,t)=>oo`
	${pi}
	${fi}
	${mi}
	${gi}
`,shadowOptions:{delegatesFocus:!0}});class yi extends gn{}class wi extends(ei(yi)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ci extends wi{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly&&e.key===Vr)this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}Ct([gt({attribute:"readonly",mode:"boolean"})],Ci.prototype,"readOnly",void 0),Ct([Je],Ci.prototype,"defaultSlottedNodes",void 0),Ct([Je],Ci.prototype,"indeterminate",void 0);const xi=class extends Ci{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}.compose({baseName:"checkbox",template:(e,t)=>Jn`
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
            <slot ${li("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>oo`
	${ro("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${Do} * 1px) 0;
		user-select: none;
		font-size: ${Lo};
		line-height: ${Fo};
	}
	.control {
		position: relative;
		width: calc(${Do} * 4px + 2px);
		height: calc(${Do} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${ur} * 1px);
		border: calc(${Oo} * 1px) solid ${hr};
		background: ${dr};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${No};
		color: ${Po};
		padding-inline-start: calc(${Do} * 2px + 2px);
		margin-inline-end: calc(${Do} * 2px + 2px);
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
		fill: ${Po};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${Po};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${dr};
		border-color: ${hr};
	}
	:host(:enabled) .control:active {
		background: ${dr};
		border-color: ${Ao};
	}
	:host(:${hi}) .control {
		border: calc(${Oo} * 1px) solid ${Ao};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${ui};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${$o};
	}
`,checkedIndicator:'\n\t\t<svg \n\t\t\tpart="checked-indicator"\n\t\t\tclass="checked-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"\n\t\t\t/>\n\t\t</svg>\n\t',indeterminateIndicator:'\n\t\t<div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n\t'});function Si(e,t,n){return{index:e,removed:t,addedCount:n}}const _i=0,Ti=1,Ri=2,ki=3;function Ei(e,t,n,o,r,i){let s=0,a=0;const l=Math.min(n-t,i-r);if(0===t&&0===r&&(s=function(e,t,n){for(let o=0;o<n;++o)if(e[o]!==t[o])return o;return n}(e,o,l)),n===e.length&&i===o.length&&(a=function(e,t,n){let o=e.length,r=t.length,i=0;for(;i<n&&e[--o]===t[--r];)i++;return i}(e,o,l-s)),r+=s,i-=a,(n-=a)-(t+=s)==0&&i-r==0)return Ge;if(t===n){const e=Si(t,[],0);for(;r<i;)e.removed.push(o[r++]);return[e]}if(r===i)return[Si(t,[],n-t)];const c=function(e){let t=e.length-1,n=e[0].length-1,o=e[t][n];const r=[];for(;t>0||n>0;){if(0===t){r.push(Ri),n--;continue}if(0===n){r.push(ki),t--;continue}const i=e[t-1][n-1],s=e[t-1][n],a=e[t][n-1];let l;l=s<a?s<i?s:i:a<i?a:i,l===i?(i===o?r.push(_i):(r.push(Ti),o=i),t--,n--):l===s?(r.push(ki),t--,o=s):(r.push(Ri),n--,o=a)}return r.reverse(),r}(function(e,t,n,o,r,i){const s=i-r+1,a=n-t+1,l=new Array(s);let c,d;for(let e=0;e<s;++e)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;++e)l[0][e]=e;for(let n=1;n<s;++n)for(let i=1;i<a;++i)e[t+i-1]===o[r+n-1]?l[n][i]=l[n-1][i-1]:(c=l[n-1][i]+1,d=l[n][i-1]+1,l[n][i]=c<d?c:d);return l}(e,t,n,o,r,i)),d=[];let h,u=t,p=r;for(let e=0;e<c.length;++e)switch(c[e]){case _i:void 0!==h&&(d.push(h),h=void 0),u++,p++;break;case Ti:void 0===h&&(h=Si(u,[],0)),h.addedCount++,u++,h.removed.push(o[p]),p++;break;case Ri:void 0===h&&(h=Si(u,[],0)),h.addedCount++,u++;break;case ki:void 0===h&&(h=Si(u,[],0)),h.removed.push(o[p]),p++}return void 0!==h&&d.push(h),d}const Oi=Array.prototype.push;function Ii(e,t,n,o){const r=Si(t,n,o);let i=!1,s=0;for(let t=0;t<e.length;t++){const n=e[t];if(n.index+=s,i)continue;const o=(a=r.index,l=r.index+r.removed.length,c=n.index,d=n.index+n.addedCount,l<c||d<a?-1:l===c||d===a?0:a<c?l<d?l-c:d-c:d<l?d-a:l-a);if(o>=0){e.splice(t,1),t--,s-=n.addedCount-n.removed.length,r.addedCount+=n.addedCount-o;const a=r.removed.length+n.removed.length-o;if(r.addedCount||a){let e=n.removed;if(r.index<n.index){const t=r.removed.slice(0,n.index-r.index);Oi.apply(t,e),e=t}if(r.index+r.removed.length>n.index+n.addedCount){const t=r.removed.slice(n.index+n.addedCount-r.index);Oi.apply(e,t)}r.removed=e,n.index<r.index&&(r.index=n.index)}else i=!0}else if(r.index<n.index){i=!0,e.splice(t,0,r),t++;const o=r.addedCount-r.removed.length;n.index+=o,s+=o}}var a,l,c,d;i||e.push(r)}function Mi(e,t){let n=[];const o=function(e){const t=[];for(let n=0,o=e.length;n<o;n++){const o=e[n];Ii(t,o.index,o.removed,o.addedCount)}return t}(t);for(let t=0,r=o.length;t<r;++t){const r=o[t];1!==r.addedCount||1!==r.removed.length?n=n.concat(Ei(e,r.index,r.index+r.addedCount,r.removed,0,r.removed.length)):r.removed[0]!==e[r.index]&&n.push(r)}return n}let Di=!1;function $i(e,t){let n=e.index;const o=t.length;return n>o?n=o-e.addedCount:n<0&&(n=o+e.removed.length+n-e.addedCount),n<0&&(n=0),e.index=n,e}class Ai extends Ye{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,Ke.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,Ke.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const n=void 0===t?Mi(this.source,e):Ei(this.source,0,this.source.length,t,0,t.length);this.notify(n)}}Object.freeze({positioning:!1,recycle:!0});function Ni(e,t,n,o){e.bind(t[n],o)}function Pi(e,t,n,o){const r=Object.create(o);r.index=n,r.length=t.length,e.bind(t[n],r)}class zi{constructor(e,t,n,o,r,i){this.location=e,this.itemsBinding=t,this.templateBinding=o,this.options=i,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Ni,this.itemsBindingObserver=Qe.binding(t,this,n),this.templateBindingObserver=Qe.binding(o,this,r),i.positioning&&(this.bindView=Pi)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=Ge);const t=this.itemsObserver,n=this.itemsObserver=Qe.getNotifier(this.items),o=t!==n;o&&null!==t&&t.unsubscribe(this),(o||e)&&n.subscribe(this)}updateViews(e){const t=this.childContext,n=this.views,o=this.bindView,r=this.items,i=this.template,s=this.options.recycle,a=[];let l=0,c=0;for(let d=0,h=e.length;d<h;++d){const h=e[d],u=h.removed;let p=0,f=h.index;const m=f+h.addedCount,g=n.splice(h.index,u.length),b=c=a.length+g.length;for(;f<m;++f){const e=n[f],d=e?e.firstChild:this.location;let h;s&&c>0?(p<=b&&g.length>0?(h=g[p],p++):(h=a[l],l++),c--):h=i.create(),n.splice(f,0,h),o(h,r,f,t),h.insertBefore(d)}g[p]&&a.push(...g.slice(p))}for(let e=l,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=n.length;e<t;++e){const o=n[e].context;o.length=t,o.index=e}}refreshAllViews(e=!1){const t=this.items,n=this.childContext,o=this.template,r=this.location,i=this.bindView;let s=t.length,a=this.views,l=a.length;if(0!==s&&!e&&this.options.recycle||(Yn.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(s);for(let e=0;e<s;++e){const s=o.create();i(s,t,e,n),a[e]=s,s.insertBefore(r)}}else{let e=0;for(;e<s;++e)if(e<l){i(a[e],t,e,n)}else{const s=o.create();i(s,t,e,n),a.push(s),s.insertBefore(r)}const c=a.splice(e,l-e);for(e=0,s=c.length;e<s;++e)c[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,n=e.length;t<n;++t)e[t].unbind()}}class Hi extends kn{constructor(e,t,n){super(),this.itemsBinding=e,this.templateBinding=t,this.options=n,this.createPlaceholder=Ke.createBlockPlaceholder,function(){if(Di)return;Di=!0,Qe.setArrayObserverFactory((e=>new Ai(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,n=e.push,o=e.reverse,r=e.shift,i=e.sort,s=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,n=t.apply(this,arguments),o=this.$fastController;return void 0!==o&&e&&o.addSplice(Si(this.length,[n],0)),n},e.push=function(){const e=n.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice($i(Si(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const n=o.apply(this,arguments);return void 0!==t&&t.reset(e),n},e.shift=function(){const e=this.length>0,t=r.apply(this,arguments),n=this.$fastController;return void 0!==n&&e&&n.addSplice(Si(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const n=i.apply(this,arguments);return void 0!==t&&t.reset(e),n},e.splice=function(){const e=s.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice($i(Si(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice($i(Si(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=Qe.isVolatileBinding(e),this.isTemplateBindingVolatile=Qe.isVolatileBinding(t)}createBehavior(e){return new zi(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const Li="focus",Fi="focusin",Gi="focusout",Bi="keydown",Wi="none",Ui="default",ji="sticky",Vi="default",Zi="columnheader",qi="rowheader",Ki="default",Yi="header",Xi="sticky-header";class Qi extends gn{constructor(){super(),this.noTabbing=!1,this.generateHeader=Ui,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,n)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const o=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[o].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),i=r[Math.max(0,Math.min(r.length-1,t))];n&&this.scrollHeight!==this.clientHeight&&(o<this.focusRowIndex&&this.scrollTop>0||o>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&i.scrollIntoView({block:"center",inline:"center"}),i.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach((e=>{e.addedNodes.forEach((e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,Ke.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach(((t,n)=>{const o=t;o.rowIndex=n,o.gridTemplateColumns=e,this.columnDefinitionsStale&&(o.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach((e=>{t=`${t}${""===t?"":" "}1fr`})),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=Qi.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=Qi.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Hi((e=>e.rowsData),(e=>e.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Li,this.handleFocus),this.addEventListener(Bi,this.handleKeydown),this.addEventListener(Gi,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),Ke.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Li,this.handleFocus),this.removeEventListener(Bi,this.handleKeydown),this.removeEventListener(Gi,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const n=this.rowElements.length-1,o=this.offsetHeight+this.scrollTop,r=this.rowElements[n];switch(e.key){case Gr:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Hr:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(t=this.focusRowIndex-1;t>=0;t--){const e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case"PageDown":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=n||r.offsetTop+r.offsetHeight<=o)return void this.focusOnCell(n,this.focusColumnIndex,!1);for(t=this.focusRowIndex+1;t<=n;t++){const e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>o){let t=0;this.generateHeader===ji&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case Ur:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case jr:e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,Ke.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Wi&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);return this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===ji?Xi:Yi,void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}Qi.generateColumns=e=>Object.getOwnPropertyNames(e).map(((e,t)=>({columnDataKey:e,gridColumn:`${t}`}))),Ct([gt({attribute:"no-tabbing",mode:"boolean"})],Qi.prototype,"noTabbing",void 0),Ct([gt({attribute:"generate-header"})],Qi.prototype,"generateHeader",void 0),Ct([gt({attribute:"grid-template-columns"})],Qi.prototype,"gridTemplateColumns",void 0),Ct([Je],Qi.prototype,"rowsData",void 0),Ct([Je],Qi.prototype,"columnDefinitions",void 0),Ct([Je],Qi.prototype,"rowItemTemplate",void 0),Ct([Je],Qi.prototype,"cellItemTemplate",void 0),Ct([Je],Qi.prototype,"headerCellItemTemplate",void 0),Ct([Je],Qi.prototype,"focusRowIndex",void 0),Ct([Je],Qi.prototype,"focusColumnIndex",void 0),Ct([Je],Qi.prototype,"defaultRowItemTemplate",void 0),Ct([Je],Qi.prototype,"rowElementTag",void 0),Ct([Je],Qi.prototype,"rowElements",void 0);class Ji extends si{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function es(e){return"string"==typeof e&&(e={property:e}),new On("fast-children",Ji,e)}class ts extends gn{constructor(){super(...arguments),this.rowType=Ki,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Hi((e=>e.columnDefinitions),(e=>e.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Gi,this.handleFocusout),this.addEventListener(Bi,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Gi,this.handleFocusout),this.removeEventListener(Bi,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case Lr:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case Fr:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case Ur:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case jr:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===Ki&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===Ki&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}Ct([gt({attribute:"grid-template-columns"})],ts.prototype,"gridTemplateColumns",void 0),Ct([gt({attribute:"row-type"})],ts.prototype,"rowType",void 0),Ct([Je],ts.prototype,"rowData",void 0),Ct([Je],ts.prototype,"columnDefinitions",void 0),Ct([Je],ts.prototype,"cellItemTemplate",void 0),Ct([Je],ts.prototype,"headerCellItemTemplate",void 0),Ct([Je],ts.prototype,"rowIndex",void 0),Ct([Je],ts.prototype,"isActiveRow",void 0),Ct([Je],ts.prototype,"activeCellItemTemplate",void 0),Ct([Je],ts.prototype,"defaultCellItemTemplate",void 0),Ct([Je],ts.prototype,"defaultHeaderCellItemTemplate",void 0),Ct([Je],ts.prototype,"cellElements",void 0);const ns=Jn`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,os=Jn`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class rs extends gn{constructor(){super(...arguments),this.cellType=Vi,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Fi,this.handleFocusin),this.addEventListener(Gi,this.handleFocusout),this.addEventListener(Bi,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Fi,this.handleFocusin),this.removeEventListener(Gi,this.handleFocusout),this.removeEventListener(Bi,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===Zi){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||null===this.columnDefinition||this.cellType===Vi&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===Zi&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case Br:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===Zi){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case Wr:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case Zi:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=os.render(this,this);break;case void 0:case qi:case Vi:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=ns.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}Ct([gt({attribute:"cell-type"})],rs.prototype,"cellType",void 0),Ct([gt({attribute:"grid-column"})],rs.prototype,"gridColumn",void 0),Ct([Je],rs.prototype,"rowData",void 0),Ct([Je],rs.prototype,"columnDefinition",void 0);const is=class extends Qi{connectedCallback(){super.connectedCallback();this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}.compose({baseName:"data-grid",baseClass:Qi,template:(e,t)=>{const n=function(e){const t=e.tagFor(ts);return Jn`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,t)=>t.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,t)=>t.parent.headerCellItemTemplate}"
    ></${t}>
`}(e),o=e.tagFor(ts);return Jn`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>o}"
            :defaultRowItemTemplate="${n}"
            ${es({property:"rowElements",filter:ii("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(e,t)=>oo`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`});const ss=class extends ts{}.compose({baseName:"data-grid-row",baseClass:ts,template:(e,t)=>{const n=function(e){const t=e.tagFor(rs);return Jn`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,t)=>t.index+1}"
        :rowData="${(e,t)=>t.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e),o=function(e){const t=e.tagFor(rs);return Jn`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,t)=>t.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e);return Jn`
        <template
            role="row"
            class="${e=>"default"!==e.rowType?e.rowType:""}"
            :defaultCellItemTemplate="${n}"
            :defaultHeaderCellItemTemplate="${o}"
            ${es({property:"cellElements",filter:ii('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${li("slottedCellElements")}></slot>
        </template>
    `},styles:(e,t)=>oo`
	:host {
		display: grid;
		padding: calc((${Do} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${Eo};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${mr};
		outline: 1px dotted ${Io};
		outline-offset: -1px;
	}
`});const as=class extends rs{}.compose({baseName:"data-grid-cell",baseClass:rs,template:(e,t)=>Jn`
        <template
            tabindex="-1"
            role="${e=>e.cellType&&"default"!==e.cellType?e.cellType:"gridcell"}"
            class="
            ${e=>"columnheader"===e.cellType?"column-header":"rowheader"===e.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(e,t)=>oo`
	:host {
		padding: calc(${Do} * 1px) calc(${Do} * 3px);
		color: ${Po};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${No};
		font-size: ${Lo};
		line-height: ${Fo};
		font-weight: 400;
		border: solid calc(${Oo} * 1px) transparent;
		border-radius: calc(${Mo} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${hi}),
	:host(:focus),
	:host(:active) {
		background: ${pr};
		border: solid calc(${Oo} * 1px) ${Ao};
		color: ${fr};
		outline: none;
	}
	:host(:${hi}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${fr} !important;
	}
`}),ls="horizontal",cs="separator";class ds extends gn{constructor(){super(...arguments),this.role=cs,this.orientation=ls}}Ct([gt],ds.prototype,"role",void 0),Ct([gt],ds.prototype,"orientation",void 0);const hs=class extends ds{}.compose({baseName:"divider",template:(e,t)=>Jn`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>oo`
	${ro("block")} :host {
		border: none;
		border-top: calc(${Oo} * 1px) solid ${gr};
		box-sizing: content-box;
		height: 0;
		margin: calc(${Do} * 1px) 0;
		width: 100%;
	}
`});let us=0;function ps(e=""){return`${e}${us++}`}function fs(e){return ci(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class ms extends gn{constructor(e,t,n,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),n&&(this.defaultSelected=n),o&&(this.selected=o),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),Qe.notify(this,"value")}get value(){var e;return Qe.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}Ct([Je],ms.prototype,"checked",void 0),Ct([Je],ms.prototype,"content",void 0),Ct([Je],ms.prototype,"defaultSelected",void 0),Ct([gt({mode:"boolean"})],ms.prototype,"disabled",void 0),Ct([gt({attribute:"selected",mode:"boolean"})],ms.prototype,"selectedAttribute",void 0),Ct([Je],ms.prototype,"selected",void 0),Ct([gt({attribute:"value",mode:"fromView"})],ms.prototype,"initialValue",void 0);class gs{}Ct([Je],gs.prototype,"ariaChecked",void 0),Ct([Je],gs.prototype,"ariaPosInSet",void 0),Ct([Je],gs.prototype,"ariaSelected",void 0),Ct([Je],gs.prototype,"ariaSetSize",void 0),Pr(gs,Ir),Pr(ms,$r,gs);class bs extends gn{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return Qe.track(this,"options"),this._options}set options(e){this._options=e,Qe.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const n=e>t?-1:e<t?1:0,o=e+n;let r=null;switch(n){case-1:r=this.options.reduceRight(((e,t,n)=>!e&&!t.disabled&&n<o?t:e),r);break;case 1:r=this.options.reduce(((e,t,n)=>!e&&!t.disabled&&n>o?t:e),r)}return this.options.indexOf(r)}handleChange(e,t){if("selected"===t)bs.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),bs.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case Ur:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case Hr:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case Gr:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case jr:e.preventDefault(),this.selectLastOption();break;case Zr:return this.focusAndScrollOptionIntoView(),!0;case Br:case Wr:return!0;case Vr:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var n;if(this.hasSelectableOptions){if((null===(n=this.options[this.selectedIndex])||void 0===n?void 0:n.disabled)&&"number"==typeof e){const n=this.getSelectableIndex(e,t),o=n>-1?n:e;return this.selectedIndex=o,void(t===o&&this.selectedIndexChanged(t,o))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var n;const o=t.filter(bs.slottedOptionFilter);null===(n=this.options)||void 0===n||n.forEach((e=>{const t=Qe.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=o.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let n=e.length;for(;n--;)if(t(e[n],n,e))return n;return-1}(this.options,(e=>!e.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,n;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(fs(t)&&e.push(t),e)),[]);const n=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=ps("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=n})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}bs.slottedOptionFilter=e=>fs(e)&&!e.hidden,bs.TYPE_AHEAD_TIMEOUT_MS=1e3,Ct([gt({mode:"boolean"})],bs.prototype,"disabled",void 0),Ct([Je],bs.prototype,"selectedIndex",void 0),Ct([Je],bs.prototype,"selectedOptions",void 0),Ct([Je],bs.prototype,"slottedOptions",void 0),Ct([Je],bs.prototype,"typeaheadBuffer",void 0);class vs{}function ys(e,t,n=0){return[t,n]=[t,n].sort(((e,t)=>e-t)),t<=e&&e<n}Ct([Je],vs.prototype,"ariaActiveDescendant",void 0),Ct([Je],vs.prototype,"ariaDisabled",void 0),Ct([Je],vs.prototype,"ariaExpanded",void 0),Ct([Je],vs.prototype,"ariaMultiSelectable",void 0),Pr(vs,Ir),Pr(bs,vs);class ws extends bs{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var n,o;this.ariaActiveDescendant=null!==(o=null===(n=this.options[t])||void 0===n?void 0:n.id)&&void 0!==o?o:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=ys(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=ys(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=ys(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=ys(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const n=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return n&&!n.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(n),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:n}=e;switch(this.shouldSkipFocus=!1,t){case Ur:return void this.checkFirstOption(n);case Hr:return void this.checkNextOption(n);case Gr:return void this.checkPreviousOption(n);case jr:return void this.checkLastOption(n);case Zr:return this.focusAndScrollOptionIntoView(),!0;case Wr:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Vr:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var n;this.ariaMultiSelectable=t?"true":null,null===(n=this.options)||void 0===n||n.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var n;const o=Math.max(0,parseInt(null!==(n=null==t?void 0:t.toFixed())&&void 0!==n?n:"",10));o!==t&&Ke.queueUpdate((()=>{this.size=o}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}Ct([Je],ws.prototype,"activeIndex",void 0),Ct([gt({mode:"boolean"})],ws.prototype,"multiple",void 0),Ct([gt({converter:ft})],ws.prototype,"size",void 0);class Cs extends ws{}class xs extends(Jr(Cs)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const Ss="above",_s="below";class Ts extends xs{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=ps("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void Ke.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return Qe.track(this,"value"),this._value}set value(e){var t,n,o,r,i,s,a;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(o=null===(n=this._options[this.selectedIndex])||void 0===n?void 0:n.value)&&void 0!==o?o:null,c=null!==(i=null===(r=this._options[t])||void 0===r?void 0:r.value)&&void 0!==i?i:null;-1!==t&&l===c||(e="",this.selectedIndex=t),e=null!==(a=null===(s=this.firstSelectedOption)||void 0===s?void 0:s.value)&&void 0!==a?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),Qe.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,n;this.$fastController.isConnected&&(this.value=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==n?n:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Ss:_s,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Ss?~~e.top:~~t}get displayValue(){var e,t;return Qe.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const n=e.relatedTarget;this.isSameNode(n)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(n))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{Qe.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{Qe.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var n;super.selectedOptionsChanged(e,t),null===(n=this.options)||void 0===n||n.forEach(((e,t)=>{var n;const o=null===(n=this.proxy)||void 0===n?void 0:n.options.item(t);o&&(o.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(bs.slottedOptionFilter),n=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===n?0:n}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case Vr:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case Ur:case jr:e.preventDefault();break;case Br:e.preventDefault(),this.open=!this.open;break;case Wr:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case Zr:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Hr||t===Gr)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&Qe.notify(this,"displayValue")}}Ct([gt({attribute:"open",mode:"boolean"})],Ts.prototype,"open",void 0),Ct([et],Ts.prototype,"collapsible",null),Ct([Je],Ts.prototype,"control",void 0),Ct([gt({attribute:"position"})],Ts.prototype,"positionAttribute",void 0),Ct([Je],Ts.prototype,"position",void 0),Ct([Je],Ts.prototype,"maxHeight",void 0);class Rs{}Ct([Je],Rs.prototype,"ariaControls",void 0),Pr(Rs,vs),Pr(Ts,$r,Rs);const ks=e=>"function"==typeof e,Es=()=>null;function Os(e){return void 0===e?Es:ks(e)?e:()=>e}function Is(e,t,n){const o=ks(e)?e:()=>e,r=Os(t),i=Os(n);return(e,t)=>o(e,t)?r(e,t):i(e,t)}const Ms=class extends Ts{}.compose({baseName:"dropdown",template:(e,t)=>Jn`
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
        ${Is((e=>e.collapsible),Jn`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Dr("control")}
                >
                    ${Nr(0,t)}
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
                    ${Ar(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Dr("listbox")}
        >
            <slot
                ${li({filter:bs.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>oo`
	${ro("inline-flex")} :host {
		background: ${br};
		box-sizing: border-box;
		color: ${Po};
		contain: contents;
		font-family: ${No};
		height: calc(${zo} * 1px);
		position: relative;
		user-select: none;
		min-width: ${Ho};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${Oo} * 1px) solid ${vr};
		border-radius: calc(${Mo} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Lo};
		line-height: ${Fo};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${br};
		border: calc(${Oo} * 1px) solid ${Ao};
		border-radius: calc(${Mo} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${yr};
		padding: 0 0 calc(${Do} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${hi}) .control {
		border-color: ${Ao};
	}
	:host(:not([disabled]):hover) {
		background: ${br};
		border-color: ${vr};
	}
	:host(:${hi}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${pr};
		border: calc(${Oo} * 1px) solid ${Ao};
		color: ${fr};
	}
	:host([disabled]) {
		cursor: ${ui};
		opacity: ${$o};
	}
	:host([disabled]) .control {
		cursor: ${ui};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${br};
		color: ${Po};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${Ao};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${Ao};
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
		bottom: calc(${zo} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${zo} * 1px);
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
		min-height: calc(${Do} * 4px);
		min-width: calc(${Do} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});class Ds extends gn{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{var e;null===(e=this.control)||void 0===e||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}Ct([gt],Ds.prototype,"download",void 0),Ct([gt],Ds.prototype,"href",void 0),Ct([gt],Ds.prototype,"hreflang",void 0),Ct([gt],Ds.prototype,"ping",void 0),Ct([gt],Ds.prototype,"referrerpolicy",void 0),Ct([gt],Ds.prototype,"rel",void 0),Ct([gt],Ds.prototype,"target",void 0),Ct([gt],Ds.prototype,"type",void 0),Ct([Je],Ds.prototype,"defaultSlottedContent",void 0);class $s{}Ct([gt({attribute:"aria-expanded"})],$s.prototype,"ariaExpanded",void 0),Pr($s,Ir),Pr(Ds,$r,$s);const As=class extends Ds{}.compose({baseName:"link",template:(e,t)=>Jn`
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
        ${Dr("control")}
    >
        ${Nr(0,t)}
        <span class="content" part="content">
            <slot ${li("defaultSlottedContent")}></slot>
        </span>
        ${Ar(0,t)}
    </a>
`,styles:(e,t)=>oo`
	${ro("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${Sr};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${No};
		font-size: ${Lo};
		line-height: ${Fo};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${Oo} * 1px) solid transparent;
		border-radius: calc(${Mo} * 1px);
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
		color: ${xr};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${xr};
	}
	:host(:${hi}) .control,
	:host(:focus) .control {
		border: calc(${Oo} * 1px) solid ${Ao};
	}
`,shadowOptions:{delegatesFocus:!0}});const Ns=class extends ms{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}.compose({baseName:"option",template:(e,t)=>Jn`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Nr(0,t)}
        <span class="content" part="content">
            <slot ${li("content")}></slot>
        </span>
        ${Ar(0,t)}
    </template>
`,styles:(e,t)=>oo`
	${ro("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${Mo};
		border: calc(${Oo} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${Po};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Lo};
		line-height: ${Fo};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${Do} / 2) * 1px)
			calc((${Do} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${hi}) {
		border-color: ${Ao};
		background: ${pr};
		color: ${Po};
	}
	:host([aria-selected='true']) {
		background: ${pr};
		border: calc(${Oo} * 1px) solid ${Ao};
		color: ${fr};
	}
	:host(:active) {
		background: ${pr};
		color: ${fr};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${pr};
		border: calc(${Oo} * 1px) solid ${Ao};
		color: ${fr};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${pr};
		color: ${Po};
	}
	:host([disabled]) {
		cursor: ${ui};
		opacity: ${$o};
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
`}),Ps="horizontal";class zs extends gn{constructor(){super(...arguments),this.orientation=Ps,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",n=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((o,r)=>{if("tab"===o.slot){const e=this.activeTabIndex===r&&this.isFocusableElement(o);this.activeindicator&&this.isFocusableElement(o)&&(this.showActiveIndicator=!0);const t=this.tabIds[r],n=this.tabpanelIds[r];o.setAttribute("id",t),o.setAttribute("aria-selected",e?"true":"false"),o.setAttribute("aria-controls",n),o.addEventListener("click",this.handleTabClick),o.addEventListener("keydown",this.handleTabKeyDown),o.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=o,this.activeid=t)}o.style[e]="",o.style[t]="",o.style[n]=`${r+1}`,this.isHorizontal()?o.classList.remove("vertical"):o.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const n=this.tabIds[t],o=this.tabpanelIds[t];e.setAttribute("id",o),e.setAttribute("aria-labelledby",n),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Lr:e.preventDefault(),this.adjustBackward(e);break;case Fr:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case Gr:e.preventDefault(),this.adjustBackward(e);break;case Hr:e.preventDefault(),this.adjustForward(e)}switch(e.key){case Ur:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case jr:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)+1:1,n===t.length&&(n=0);n<t.length&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}if(this.activetab&&n===t.indexOf(this.activetab))break;n+1>=t.length?n=0:n+=1}},this.adjustBackward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)-1:0,n=n<0?t.length-1:n;n>=0&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}n-1<0?n=t.length-1:n-=1}},this.moveToTabByIndex=(e,t)=>{const n=e[t];this.activetab=n,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,n.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${ps()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${ps()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Ps}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",n=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const r=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const i=r-o;this.activeIndicatorRef.style.transform=`${t}(${i}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){const t=this.tabs.filter((e=>this.isFocusableElement(e))),n=t.indexOf(this.activetab),o=(r=0,i=t.length-1,s=n+e,Math.min(Math.max(s,r),i));var r,i,s;const a=this.tabs.indexOf(t[o]);a>-1&&this.moveToTabByIndex(this.tabs,a)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}Ct([gt],zs.prototype,"orientation",void 0),Ct([gt],zs.prototype,"activeid",void 0),Ct([Je],zs.prototype,"tabs",void 0),Ct([Je],zs.prototype,"tabpanels",void 0),Ct([gt({mode:"boolean"})],zs.prototype,"activeindicator",void 0),Ct([Je],zs.prototype,"activeIndicatorRef",void 0),Ct([Je],zs.prototype,"showActiveIndicator",void 0),Pr(zs,$r);class Hs extends gn{}Ct([gt({mode:"boolean"})],Hs.prototype,"disabled",void 0);class Ls extends gn{}const Fs=class extends zs{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Ps);this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}.compose({baseName:"panels",template:(e,t)=>Jn`
    <template class="${e=>e.orientation}">
        ${Nr(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${li("tabs")}></slot>

            ${Is((e=>e.showActiveIndicator),Jn`
                    <div
                        ${Dr("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Ar(0,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${li("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>oo`
	${ro("grid")} :host {
		box-sizing: border-box;
		font-family: ${No};
		font-size: ${Lo};
		line-height: ${Fo};
		color: ${Po};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${Do} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${Do} * 1px) calc(${Do} * 1px) 0;
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
		height: calc((${Do} / 4) * 1px);
		justify-self: center;
		background: ${Rr};
		margin: 0;
		border-radius: calc(${Mo} * 1px);
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
`});const Gs=class extends Hs{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}.compose({baseName:"panel-tab",template:(e,t)=>Jn`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>oo`
	${ro("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${No};
		font-size: ${Lo};
		line-height: ${Fo};
		height: calc(${Do} * 7px);
		padding: calc(${Do} * 1px) 0;
		color: ${kr};
		fill: currentcolor;
		border-radius: calc(${Mo} * 1px);
		border: solid calc(${Oo} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${Rr};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${Rr};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${Rr};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${Rr};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${Rr};
		fill: currentcolor;
	}
	:host(:${hi}) {
		outline: none;
		border: solid calc(${Oo} * 1px) ${Tr};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${Do} * 2px);
	}
`});const Bs=class extends Ls{}.compose({baseName:"panel-view",template:(e,t)=>Jn`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>oo`
	${ro("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${Oo} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${Lo};
		line-height: ${Fo};
		padding: 10px calc((${Do} + 2) * 1px);
	}
`});class Ws extends gn{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,n="number"==typeof this.value?this.value:0,o=t-e;this.percentComplete=0===o?0:Math.fround((n-e)/o*100)}}Ct([gt({converter:ft})],Ws.prototype,"value",void 0),Ct([gt({converter:ft})],Ws.prototype,"min",void 0),Ct([gt({converter:ft})],Ws.prototype,"max",void 0),Ct([gt({mode:"boolean"})],Ws.prototype,"paused",void 0),Ct([Je],Ws.prototype,"percentComplete",void 0);const Us=class extends Ws{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,n){"value"===e&&this.removeAttribute("value")}}.compose({baseName:"progress-ring",template:(e,t)=>Jn`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Is((e=>"number"==typeof e.value),Jn`
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
            `,Jn`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>oo`
	${ro("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${Do} * 7px);
		width: calc(${Do} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${Do} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${_r};
		stroke-width: calc(${Do} / 2 * 1px);
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
`,indeterminateIndicator:'\n\t\t<svg class="progress" part="progress" viewBox="0 0 16 16">\n\t\t\t<circle\n\t\t\t\tclass="background"\n\t\t\t\tpart="background"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t\t<circle\n\t\t\t\tclass="indeterminate-indicator-1"\n\t\t\t\tpart="indeterminate-indicator-1"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t</svg>\n\t'});class js extends gn{}class Vs extends(ei(js)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Zs extends Vs{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==Vr)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}Ct([gt({attribute:"readonly",mode:"boolean"})],Zs.prototype,"readOnly",void 0),Ct([Je],Zs.prototype,"name",void 0),Ct([Je],Zs.prototype,"defaultSlottedNodes",void 0);const qs=class extends Zs{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}.compose({baseName:"radio",template:(e,t)=>Jn`
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
            <slot ${li("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>oo`
	${ro("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${Lo};
		line-height: ${Fo};
		margin: calc(${Do} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${dr};
		border-radius: 999px;
		border: calc(${Oo} * 1px) solid ${hr};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${Do} * 4px);
		position: relative;
		outline: none;
		width: calc(${Do} * 4px);
	}
	.label {
		color: ${Po};
		cursor: pointer;
		font-family: ${No};
		margin-inline-end: calc(${Do} * 2px + 2px);
		padding-inline-start: calc(${Do} * 2px + 2px);
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
		background: ${Po};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${Do} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${dr};
		border-color: ${hr};
	}
	:host(:not([disabled])) .control:active {
		background: ${dr};
		border-color: ${Ao};
	}
	:host(:${hi}) .control {
		border: calc(${Oo} * 1px) solid ${Ao};
	}
	:host([aria-checked='true']) .control {
		background: ${dr};
		border: calc(${Oo} * 1px) solid ${hr};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${dr};
		border: calc(${Oo} * 1px) solid ${hr};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${dr};
		border: calc(${Oo} * 1px) solid ${Ao};
	}
	:host([aria-checked="true"]:${hi}:not([disabled])) .control {
		border: calc(${Oo} * 1px) solid ${Ao};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${ui};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${$o};
	}
`,checkedIndicator:'\n\t\t<div part="checked-indicator" class="checked-indicator"></div>\n\t'});var Ks;!function(e){e.ltr="ltr",e.rtl="rtl"}(Ks||(Ks={}));class Ys extends gn{constructor(){super(...arguments),this.orientation=ls,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const n=e[t];this.isInsideToolbar||(n.setAttribute("tabindex","0"),n.readOnly?this.slottedRadioButtons.forEach((e=>{e!==n&&e.setAttribute("tabindex","-1")})):(n.checked=!0,this.selectedRadio=n)),this.focusedRadio=n,n.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,n=e.target,o=null!==n?t.indexOf(n):0,r=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===r&&o===r||r===t.length-1&&r===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,n)=>e===t.length&&this.isInsideToolbar&&n===Fr,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Lr,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(n,t,e.key))this.moveRightOffGroup();else for(n===t.length&&(n=0);n<t.length&&t.length>1;){if(!t[n].disabled){this.moveToRadioByIndex(t,n);break}if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;if(n+1>=t.length){if(this.isInsideToolbar)break;n=0}else n+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,n=n<0?t.length-1:n,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;n>=0&&t.length>1;){if(!t[n].disabled){this.moveToRadioByIndex(t,n);break}if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;n-1<0?n=t.length-1:n-=1}},this.keydownHandler=e=>{const t=e.key;if(t in qr&&this.isInsideFoundationToolbar)return!0;switch(t){case Br:this.checkFocusedRadio();break;case Fr:case Hr:this.direction===Ks.ltr?this.moveRight(e):this.moveLeft(e);break;case Lr:case Gr:this.direction===Ks.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?Ks.rtl:Ks.ltr})(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;if(t>1){e[t-1].checked=!0}let n=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),n=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!n){const n=e[t-1];n.checked=!0,this.focusedRadio=n,n.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}Ct([gt({attribute:"readonly",mode:"boolean"})],Ys.prototype,"readOnly",void 0),Ct([gt({attribute:"disabled",mode:"boolean"})],Ys.prototype,"disabled",void 0),Ct([gt],Ys.prototype,"name",void 0),Ct([gt],Ys.prototype,"value",void 0),Ct([gt],Ys.prototype,"orientation",void 0),Ct([Je],Ys.prototype,"childItems",void 0),Ct([Je],Ys.prototype,"slottedRadioButtons",void 0);const Xs=class extends Ys{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}.compose({baseName:"radio-group",template:(e,t)=>Jn`
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
            class="positioning-region ${e=>e.orientation===ls?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${li({property:"slottedRadioButtons",filter:ii("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>oo`
	${ro("flex")} :host {
		align-items: flex-start;
		margin: calc(${Do} * 1px) 0;
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
		color: ${Po};
		font-size: ${Lo};
		margin: calc(${Do} * 1px) 0;
	}
`});const Qs=class extends Rn{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}.compose({baseName:"tag",template:eo,styles:(e,t)=>oo`
	${ro("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${No};
		font-size: ${Go};
		line-height: ${Bo};
	}
	.control {
		background-color: ${qo};
		border: calc(${Oo} * 1px) solid ${Yo};
		border-radius: ${Er};
		color: ${Ko};
		padding: calc(${Do} * 0.5px) calc(${Do} * 1px);
		text-transform: uppercase;
	}
`});class Js extends gn{}class ea extends(Jr(Js)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const ta="text";class na extends ea{constructor(){super(...arguments),this.type=ta}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&Ke.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}Ct([gt({attribute:"readonly",mode:"boolean"})],na.prototype,"readOnly",void 0),Ct([gt({mode:"boolean"})],na.prototype,"autofocus",void 0),Ct([gt],na.prototype,"placeholder",void 0),Ct([gt],na.prototype,"type",void 0),Ct([gt],na.prototype,"list",void 0),Ct([gt({converter:ft})],na.prototype,"maxlength",void 0),Ct([gt({converter:ft})],na.prototype,"minlength",void 0),Ct([gt],na.prototype,"pattern",void 0),Ct([gt({converter:ft})],na.prototype,"size",void 0),Ct([gt({mode:"boolean"})],na.prototype,"spellcheck",void 0),Ct([Je],na.prototype,"defaultSlottedNodes",void 0);class oa{}Pr(oa,Ir),Pr(na,$r,oa);class ra extends gn{}class ia extends(Jr(ra)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const sa="none";class aa extends ia{constructor(){super(...arguments),this.resize=sa,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}Ct([gt({mode:"boolean"})],aa.prototype,"readOnly",void 0),Ct([gt],aa.prototype,"resize",void 0),Ct([gt({mode:"boolean"})],aa.prototype,"autofocus",void 0),Ct([gt({attribute:"form"})],aa.prototype,"formId",void 0),Ct([gt],aa.prototype,"list",void 0),Ct([gt({converter:ft})],aa.prototype,"maxlength",void 0),Ct([gt({converter:ft})],aa.prototype,"minlength",void 0),Ct([gt],aa.prototype,"name",void 0),Ct([gt],aa.prototype,"placeholder",void 0),Ct([gt({converter:ft,mode:"fromView"})],aa.prototype,"cols",void 0),Ct([gt({converter:ft,mode:"fromView"})],aa.prototype,"rows",void 0),Ct([gt({mode:"boolean"})],aa.prototype,"spellcheck",void 0),Ct([Je],aa.prototype,"defaultSlottedNodes",void 0),Pr(aa,oa);const la=class extends aa{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}.compose({baseName:"text-area",template:(e,t)=>Jn`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==sa?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${li("defaultSlottedNodes")}></slot>
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
            ${Dr("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>oo`
	${ro("inline-block")} :host {
		font-family: ${No};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Cr};
		background: ${wr};
		border-radius: calc(${Mo} * 1px);
		border: calc(${Oo} * 1px) solid ${vr};
		font: inherit;
		font-size: ${Lo};
		line-height: ${Fo};
		padding: calc(${Do} * 2px + 1px);
		width: 100%;
		min-width: ${Ho};
		resize: none;
	}
	.control:hover:enabled {
		background: ${wr};
		border-color: ${vr};
	}
	.control:active:enabled {
		background: ${wr};
		border-color: ${Ao};
	}
	.control:hover,
	.control:${hi},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${Wo};
		height: ${Uo};
	}
	.control::-webkit-scrollbar-corner {
		background: ${wr};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${jo};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${Vo};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${Zo};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${Ao};
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
		color: ${Po};
		cursor: pointer;
		font-size: ${Lo};
		line-height: ${Fo};
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
		cursor: ${ui};
	}
	:host([disabled]) {
		opacity: ${$o};
	}
	:host([disabled]) .control {
		border-color: ${vr};
	}
`,shadowOptions:{delegatesFocus:!0}});function ca(e,t,n){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}const da=class extends na{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}.compose({baseName:"text-field",template:(e,t)=>Jn`
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
                ${li({property:"defaultSlottedNodes",filter:ca})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Nr(0,t)}
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
                ${Dr("control")}
            />
            ${Ar(0,t)}
        </div>
    </template>
`,styles:(e,t)=>oo`
	${ro("inline-block")} :host {
		font-family: ${No};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Cr};
		background: ${wr};
		border-radius: calc(${Mo} * 1px);
		border: calc(${Oo} * 1px) solid ${vr};
		height: calc(${zo} * 1px);
		min-width: ${Ho};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${Do} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${Do} * 2px + 1px);
		font-size: ${Lo};
		line-height: ${Fo};
	}
	.control:hover,
	.control:${hi},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${Po};
		cursor: pointer;
		font-size: ${Lo};
		line-height: ${Fo};
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
		width: calc(${Do} * 4px);
		height: calc(${Do} * 4px);
	}
	.start {
		margin-inline-start: calc(${Do} * 2px);
	}
	.end {
		margin-inline-end: calc(${Do} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${wr};
		border-color: ${vr};
	}
	:host(:active:not([disabled])) .root {
		background: ${wr};
		border-color: ${Ao};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${Ao};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${ui};
	}
	:host([disabled]) {
		opacity: ${$o};
	}
	:host([disabled]) .control {
		border-color: ${vr};
	}
`,shadowOptions:{delegatesFocus:!0}}),ha=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ua=new Map,pa=new Map;let fa=null;const ma=zt.createInterface((e=>e.cachedCallback((e=>(null===fa&&(fa=new ba(null,e)),fa))))),ga=Object.freeze({tagFor:e=>pa.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return zt.findResponsibleContainer(e).get(ma)},getOrCreate(e){if(!e)return null===fa&&(fa=zt.getOrCreateDOMContainer().get(ma)),fa;const t=e.$$designSystem$$;if(t)return t;const n=zt.getOrCreateDOMContainer(e);if(n.has(ma,!1))return n.get(ma);{const t=new ba(e,n);return n.register(on.instance(ma,t)),t}}});class ba{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>ha.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,n=[],o=this.disambiguate,r=this.shadowRootMode,i={elementPrefix:this.prefix,tryDefineElement(e,i,s){const a=function(e,t,n){return"string"==typeof e?{name:e,type:t,callback:n}:e}(e,i,s),{name:l,callback:c,baseClass:d}=a;let{type:h}=a,u=l,p=ua.get(u),f=!0;for(;p;){const e=o(u,h,p);switch(e){case ha.ignoreDuplicate:return;case ha.definitionCallbackOnly:f=!1,p=void 0;break;default:u=e,p=ua.get(u)}}f&&((pa.has(h)||h===gn)&&(h=class extends h{}),ua.set(u,h),pa.set(h,u),d&&pa.set(d,u)),n.push(new va(t,u,h,r,c,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&So.registerRoot(this.designTokenRoot)),t.registerWithContext(i,...e);for(const e of n)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class va{constructor(e,t,n,o,r,i){this.container=e,this.name=t,this.type=n,this.shadowRootMode=o,this.callback=r,this.willDefine=i,this.definition=null}definePresentation(e){fn.define(this.name,e,this.container)}defineElement(e){this.definition=new wt(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return ga.tagFor(e)}}const{wrap:ya}=Tn(e,ga.getOrCreate(wa).withPrefix("vscode"));var wa;ya(Or(),{name:"vscode-badge"}),ya(vi(),{name:"vscode-button"});const Ca=ya(xi(),{name:"vscode-checkbox",events:{onChange:"change"}}),xa=(ya(is(),{name:"vscode-data-grid"}),ya(as(),{name:"vscode-data-grid-cell"}),ya(ss(),{name:"vscode-data-grid-row"}),ya(hs(),{name:"vscode-divider"}),ya(Ms(),{name:"vscode-dropdown",events:{onChange:"change"}}),ya(As(),{name:"vscode-link"}),ya(Ns(),{name:"vscode-option"}),ya(Fs(),{name:"vscode-panels",events:{onChange:"change"}}),ya(Gs(),{name:"vscode-panel-tab"}),ya(Bs(),{name:"vscode-panel-view"}),ya(Us(),{name:"vscode-progress-ring"}),ya(qs(),{name:"vscode-radio",events:{onChange:"change"}})),Sa=ya(Xs(),{name:"vscode-radio-group",events:{onChange:"change"}}),_a=(ya(Qs(),{name:"vscode-tag"}),ya(la(),{name:"vscode-text-area",events:{onChange:"change",onInput:"input"}}),ya(da(),{name:"vscode-text-field",events:{onChange:"change",onInput:"input"}}),navigator?.userAgentData?.platform),Ta=navigator.userAgent,Ra="Linux"===_a||Ta.indexOf("Linux")>=0,ka="macOS"===_a||Ta.indexOf("Macintosh")>=0,Ea="Windows"===_a||Ta.indexOf("Windows")>=0;function Oa(e){const t=.001*performance.now();let n=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(n-=e[0],o-=e[1],o<0&&(n--,o+=1e9)),[n,o]}const{fromCharCode:Ia}=String;new TextEncoder;function Ma(e){const[t,n]=Oa(e);return 1e3*t+Math.floor(n/1e6)}function Da(e,t,n){if(null==n)return`${t} ${e}${1===t?"":"s"}`;const o=1===t?e:n.plural??`${e}s`;return n.only?o:`${0===t?n.zero??t:n.format?.(t)??t}${n.infix??" "}${o}`}function $a(e,t){return`command:${e}?${encodeURIComponent(JSON.stringify({webview:t}))}`}const{wrap:Aa}=Tn(t()),Na=oo`
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
`;var Pa=Object.defineProperty,za=Object.getOwnPropertyDescriptor;const Ha=Jn`
	<template role="listbox">
		<slot></slot>
	</template>
`,La=oo`
	${Na}

	:host {
		width: max-content;
		background-color: var(--vscode-menu-background);
		border: 1px solid var(--vscode-menu-border);
	}
`;let Fa=class extends kt{};Fa=((e,t,n,o)=>{for(var r,i=o>1?void 0:o?za(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Pa(t,n,i),i})([Et({name:"menu-list",template:Ha,styles:La})],Fa);var Ga=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,Wa=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Ba(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Ga(t,n,i),i};const Ua=Jn`
	<template tabindex="${e=>e.isInteractive?"0":null}" ?disabled="${e=>e.disabled}">
		<slot></slot>
	</template>
`,ja=oo`
	${Na}

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
`;let Va=class extends kt{constructor(){super(...arguments),this.disabled=!1,this.role="option"}get isInteractive(){return!this.disabled&&"option"===this.role}};Wa([gt({mode:"boolean"})],Va.prototype,"disabled",2),Wa([gt],Va.prototype,"role",2),Wa([et],Va.prototype,"isInteractive",1),Va=Wa([Et({name:"menu-item",template:Ua,styles:ja})],Va);var Za=Object.defineProperty,qa=Object.getOwnPropertyDescriptor;const Ka=Jn`
	<template>
		<slot></slot>
	</template>
`,Ya=oo`
	${Na}

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
`;let Xa=class extends kt{};Xa=((e,t,n,o)=>{for(var r,i=o>1?void 0:o?qa(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Za(t,n,i),i})([Et({name:"menu-label",template:Ka,styles:Ya})],Xa);var Qa=Object.defineProperty,Ja=Object.getOwnPropertyDescriptor;const el=Jn``,tl=oo`
	${Na}

	:host {
		display: block;
		height: 0;
		margin: 0.6rem;
		border-top: 0.1rem solid var(--vscode-menu-separatorBackground);
	}
`;let nl=class extends kt{};nl=((e,t,n,o)=>{for(var r,i=o>1?void 0:o?Ja(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Qa(t,n,i),i})([Et({name:"menu-divider",template:el,styles:tl})],nl);const ol=Aa(nl),rl=Aa(Va),il=Aa(Xa),sl=Aa(Fa);function al(...e){return e.some((e=>(e?.length??0)>0))}function ll(e){return t=>t.nodeType===e}var cl=Object.defineProperty,dl=Object.getOwnPropertyDescriptor,hl=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?dl(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&cl(t,n,i),i};const ul=Jn`
	<template role="combobox">
		<slot ${li({property:"triggerNodes",filter:ll(Node.ELEMENT_NODE)})} name="trigger"></slot>
		<slot ${li({property:"contentNodes",filter:ll(Node.ELEMENT_NODE)})} name="content"></slot>
	</template>
`,pl=oo`
	${Na}

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
`;let fl=class extends kt{constructor(){super(...arguments),this.open=!1,this.position="left",this.isTrackingOutside=!1}get triggerNode(){if(al(this.triggerNodes))return this.triggerNodes[0]}get contentNode(){if(al(this.contentNodes))return this.contentNodes[0]}connectedCallback(){super.connectedCallback(),this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.addEventListener("click",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.removeEventListener("click",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}close(){this.open=!1,this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerNode)&&(this.open=!this.open,this.updateToggle())}updateToggle(){null!=this.triggerNode&&(this.triggerNode.ariaExpanded=this.open.toString()),this.open&&(null!=this.contentNode&&window.requestAnimationFrame((()=>{this.contentNode?.focus()})),this.trackOutside())}handleDocumentEvent(e){if(!1===this.open)return;const t=e.composedPath();(!t.includes(this)||"click"===e.type&&'""'===window.getComputedStyle(t[0],"::before").content)&&this.close()}trackOutside(){!this.isTrackingOutside&&this.open&&(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1),null==this._webviewBlurEventHandler&&(this._webviewBlurEventHandler=()=>this.close()),window.addEventListener("webview-blur",this._webviewBlurEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0),null!=this._webviewBlurEventHandler&&(window.removeEventListener("webview-blur",this._webviewBlurEventHandler,!1),this._webviewBlurEventHandler=void 0))}};hl([gt({mode:"boolean"})],fl.prototype,"open",2),hl([gt()],fl.prototype,"position",2),hl([Je],fl.prototype,"triggerNodes",2),hl([Je],fl.prototype,"contentNodes",2),hl([et],fl.prototype,"triggerNode",1),hl([et],fl.prototype,"contentNode",1),fl=hl([Et({name:"pop-menu",template:ul,styles:pl})],fl);const ml=Aa(fl);var gl=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,vl=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?bl(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&gl(t,n,i),i};const yl=Jn`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${li("typeNodes")} name="type"></slot>
			<slot ${li("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${li("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${Is((e=>e.caret),Jn`<span class="caret"></span>`)}
	</template>
`,wl=oo`
	${Na}

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
`;let Cl=class extends kt{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return al(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return al(this.headingNodes)}};vl([gt({mode:"boolean"})],Cl.prototype,"open",2),vl([gt({mode:"boolean"})],Cl.prototype,"caret",2),vl([gt],Cl.prototype,"placement",2),vl([Je],Cl.prototype,"typeNodes",2),vl([Je],Cl.prototype,"actionsNodes",2),vl([Je],Cl.prototype,"headingNodes",2),vl([et],Cl.prototype,"hasTopNodes",1),vl([et],Cl.prototype,"hasHeadingNodes",1),Cl=vl([Et({name:"pop-over",template:yl,styles:wl})],Cl);const xl=Aa(Cl),Sl=window,_l=Sl.ShadowRoot&&(void 0===Sl.ShadyCSS||Sl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tl=Symbol(),Rl=new WeakMap;class kl{constructor(e,t,n){if(this._$cssResult$=!0,n!==Tl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(_l&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=Rl.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Rl.set(t,e))}return e}toString(){return this.cssText}}const El=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1]),e[0]);return new kl(n,e,Tl)},Ol=_l?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new kl("string"==typeof e?e:e+"",void 0,Tl))(t)})(e):e;var Il;const Ml=window,Dl=Ml.trustedTypes,$l=Dl?Dl.emptyScript:"",Al=Ml.reactiveElementPolyfillSupport,Nl={toAttribute(e,t){switch(t){case Boolean:e=e?$l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},Pl=(e,t)=>t!==e&&(t==t||e==e),zl={attribute:!0,type:String,converter:Nl,reflect:!1,hasChanged:Pl},Hl="finalized";class Ll extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const o=this._$Ep(n,t);void 0!==o&&(this._$Ev.set(o,n),e.push(o))})),e}static createProperty(e,t=zl){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||zl}static finalize(){if(this.hasOwnProperty(Hl))return!1;this[Hl]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(Ol(e))}else void 0!==e&&t.push(Ol(e));return t}static _$Ep(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{_l?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const n=document.createElement("style"),o=Sl.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=t.cssText,e.appendChild(n)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=zl){var o;const r=this.constructor._$Ep(e,n);if(void 0!==r&&!0===n.reflect){const i=(void 0!==(null===(o=n.converter)||void 0===o?void 0:o.toAttribute)?n.converter:Nl).toAttribute(t,n.type);this._$El=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$El=null}}_$AK(e,t){var n;const o=this.constructor,r=o._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=o.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:Nl;this._$El=r,this[r]=i.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let o=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Pl)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var Fl;Ll[Hl]=!0,Ll.elementProperties=new Map,Ll.elementStyles=[],Ll.shadowRootOptions={mode:"open"},null==Al||Al({ReactiveElement:Ll}),(null!==(Il=Ml.reactiveElementVersions)&&void 0!==Il?Il:Ml.reactiveElementVersions=[]).push("1.6.3");const Gl=window,Bl=Gl.trustedTypes,Wl=Bl?Bl.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ul="$lit$",jl=`lit$${(Math.random()+"").slice(9)}$`,Vl="?"+jl,Zl=`<${Vl}>`,ql=document,Kl=()=>ql.createComment(""),Yl=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Xl=Array.isArray,Ql=e=>Xl(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),Jl="[ \t\n\f\r]",ec=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tc=/-->/g,nc=/>/g,oc=RegExp(`>|${Jl}(?:([^\\s"'>=/]+)(${Jl}*=${Jl}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),rc=/'/g,ic=/"/g,sc=/^(?:script|style|textarea|title)$/i,ac=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),lc=ac(1),cc=(ac(2),Symbol.for("lit-noChange")),dc=Symbol.for("lit-nothing"),hc=new WeakMap,uc=ql.createTreeWalker(ql,129,null,!1);function pc(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Wl?Wl.createHTML(t):t}const fc=(e,t)=>{const n=e.length-1,o=[];let r,i=2===t?"<svg>":"",s=ec;for(let t=0;t<n;t++){const n=e[t];let a,l,c=-1,d=0;for(;d<n.length&&(s.lastIndex=d,l=s.exec(n),null!==l);)d=s.lastIndex,s===ec?"!--"===l[1]?s=tc:void 0!==l[1]?s=nc:void 0!==l[2]?(sc.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=oc):void 0!==l[3]&&(s=oc):s===oc?">"===l[0]?(s=null!=r?r:ec,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?oc:'"'===l[3]?ic:rc):s===ic||s===rc?s=oc:s===tc||s===nc?s=ec:(s=oc,r=void 0);const h=s===oc&&e[t+1].startsWith("/>")?" ":"";i+=s===ec?n+Zl:c>=0?(o.push(a),n.slice(0,c)+Ul+n.slice(c)+jl+h):n+jl+(-2===c?(o.push(void 0),t):h)}return[pc(e,i+(e[n]||"<?>")+(2===t?"</svg>":"")),o]};class mc{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,i=0;const s=e.length-1,a=this.parts,[l,c]=fc(e,t);if(this.el=mc.createElement(l,n),uc.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=uc.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith(Ul)||t.startsWith(jl)){const n=c[i++];if(e.push(t),void 0!==n){const e=o.getAttribute(n.toLowerCase()+Ul).split(jl),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?wc:"?"===t[1]?xc:"@"===t[1]?Sc:yc})}else a.push({type:6,index:r})}for(const t of e)o.removeAttribute(t)}if(sc.test(o.tagName)){const e=o.textContent.split(jl),t=e.length-1;if(t>0){o.textContent=Bl?Bl.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],Kl()),uc.nextNode(),a.push({type:2,index:++r});o.append(e[t],Kl())}}}else if(8===o.nodeType)if(o.data===Vl)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(jl,e+1));)a.push({type:7,index:r}),e+=jl.length-1}r++}}static createElement(e,t){const n=ql.createElement("template");return n.innerHTML=e,n}}function gc(e,t,n=e,o){var r,i,s,a;if(t===cc)return t;let l=void 0!==o?null===(r=n._$Co)||void 0===r?void 0:r[o]:n._$Cl;const c=Yl(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,n,o)),void 0!==o?(null!==(s=(a=n)._$Co)&&void 0!==s?s:a._$Co=[])[o]=l:n._$Cl=l),void 0!==l&&(t=gc(e,l._$AS(e,t.values),l,o)),t}class bc{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:o}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:ql).importNode(n,!0);uc.currentNode=r;let i=uc.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new vc(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new _c(i,this,e)),this._$AV.push(t),l=o[++a]}s!==(null==l?void 0:l.index)&&(i=uc.nextNode(),s++)}return uc.currentNode=ql,r}v(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class vc{constructor(e,t,n,o){var r;this.type=2,this._$AH=dc,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cp=null===(r=null==o?void 0:o.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=gc(this,e,t),Yl(e)?e===dc||null==e||""===e?(this._$AH!==dc&&this._$AR(),this._$AH=dc):e!==this._$AH&&e!==cc&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Ql(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==dc&&Yl(this._$AH)?this._$AA.nextSibling.data=e:this.$(ql.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=mc.createElement(pc(o.h,o.h[0]),this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(n);else{const e=new bc(r,this),t=e.u(this.options);e.v(n),this.$(t),this._$AH=e}}_$AC(e){let t=hc.get(e.strings);return void 0===t&&hc.set(e.strings,t=new mc(e)),t}T(e){Xl(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const r of e)o===t.length?t.push(n=new vc(this.k(Kl()),this.k(Kl()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class yc{constructor(e,t,n,o,r){this.type=1,this._$AH=dc,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=dc}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,o){const r=this.strings;let i=!1;if(void 0===r)e=gc(this,e,t,0),i=!Yl(e)||e!==this._$AH&&e!==cc,i&&(this._$AH=e);else{const o=e;let s,a;for(e=r[0],s=0;s<r.length-1;s++)a=gc(this,o[n+s],t,s),a===cc&&(a=this._$AH[s]),i||(i=!Yl(a)||a!==this._$AH[s]),a===dc?e=dc:e!==dc&&(e+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}i&&!o&&this.j(e)}j(e){e===dc?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class wc extends yc{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===dc?void 0:e}}const Cc=Bl?Bl.emptyScript:"";class xc extends yc{constructor(){super(...arguments),this.type=4}j(e){e&&e!==dc?this.element.setAttribute(this.name,Cc):this.element.removeAttribute(this.name)}}class Sc extends yc{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=gc(this,e,t,0))&&void 0!==n?n:dc)===cc)return;const o=this._$AH,r=e===dc&&o!==dc||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==dc&&(o===dc||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class _c{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){gc(this,e)}}const Tc=Gl.litHtmlPolyfillSupport;null==Tc||Tc(mc,vc),(null!==(Fl=Gl.litHtmlVersions)&&void 0!==Fl?Fl:Gl.litHtmlVersions=[]).push("2.8.0");var Rc,kc;class Ec extends Ll{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{var o,r;const i=null!==(o=null==n?void 0:n.renderBefore)&&void 0!==o?o:t;let s=i._$litPart$;if(void 0===s){const e=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;i._$litPart$=s=new vc(t.insertBefore(Kl(),e),e,void 0,null!=n?n:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return cc}}Ec.finalized=!0,Ec._$litElement$=!0,null===(Rc=globalThis.litElementHydrateSupport)||void 0===Rc||Rc.call(globalThis,{LitElement:Ec});const Oc=globalThis.litElementPolyfillSupport;null==Oc||Oc({LitElement:Ec});(null!==(kc=globalThis.litElementVersions)&&void 0!==kc?kc:globalThis.litElementVersions=[]).push("3.3.3");const Ic=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:o}=t;return{kind:n,elements:o,finisher(t){customElements.define(e,t)}}})(e,t),Mc=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function Dc(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):Mc(e,t)}var $c;null===($c=window.HTMLSlotElement)||void 0===$c||$c.prototype.assignedElements;const Ac=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Nc=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Pc=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let zc;const Hc=new Map;let Lc,Fc,Gc;const Bc=new Map;function Wc(e,t){const n=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,o,r,i]of Pc){const s=Math.abs(n);if(s>=o||1e3===o){if(t){if(null==zc&&(null!=Gc?zc=Gc.resolvedOptions().locale:null!=Fc?zc=Fc.resolvedOptions().locale:(Gc=new Intl.RelativeTimeFormat(Lc,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),zc=Gc.resolvedOptions().locale)),"en"===zc||zc?.startsWith("en-")){return`${Math.round(s/r)}${i}`}return null==Gc&&(Gc=new Intl.RelativeTimeFormat(Lc,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Gc.format(Math.round(n/r),e)}return null==Fc&&(Fc=new Intl.RelativeTimeFormat(Lc,{localeMatcher:"best fit",numeric:"auto",style:"long"})),Fc.format(Math.round(n/r),e)}}return""}function Uc(e,t,n,o=!0){const r=`${n??""}:${t=t??void 0}`;let i=Hc.get(r);if(null==i){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Nc.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:n}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:n||void 0}}const n={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Ac))if(null!=t)for(const e in t){const o=t[e];if(null!=o)switch(e){case"year":n.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:n.month="long";break;case 3:n.month="short";break;case 2:n.month="2-digit";break;case 1:n.month="numeric"}break;case"day":n.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:n.weekday="long";break;case 3:n.weekday="short";break;case 2:n.weekday="narrow"}break;case"hour":n.hour=2===o.length?"2-digit":"numeric",n.hour12="hh"===o||"h"===o;break;case"minute":n.minute=2===o.length?"2-digit":"numeric";break;case"second":n.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":n.fractionalSecondDigits=3;break;case"dayPeriod":n.dayPeriod="narrow",n.hour12=!0,n.hourCycle="h12";break;case"timeZoneName":n.timeZoneName=2===o.length?"long":"short"}}return n}(t);let s;s=null==n?Lc:"system"===n?void 0:[n],i=new Intl.DateTimeFormat(s,e),o&&Hc.set(r,i)}if(null==t||Nc.test(t))return i.format(e);function s(e){const t=`${n??""}:time:${e}`;let r=Hc.get(t);if(null==r){const i={localeMatcher:"best fit",timeStyle:e};let s;s=null==n?Lc:"system"===n?void 0:[n],r=new Intl.DateTimeFormat(s,i),o&&Hc.set(t,r)}return r}const a=i.formatToParts(e);return t.replace(Ac,((t,n,o,r,i,l,c,d,h,u,p,f,m,g,b)=>{if(null!=n)return n.substring(1,n.length-1);for(const t in b){const n=b[t];if(null==n)continue;const o=a.find((e=>e.type===t));if("Do"===n&&"day"===o?.type)return Vc(Number(o.value));if("a"===n&&"dayPeriod"===o?.type){const t=s("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??o)?.value??""}`}return o?.value??""}return""}))}const jc=["th","st","nd","rd"];function Vc(e){const t=e%100;return`${e}${jc[(t-20)%10]??jc[t]??jc[0]}`}function Zc(e,t,n){null==t&&(t="decimal");const o=`${n??""}:${t}`;let r=Bc.get(o);if(null==r){const e={localeMatcher:"best fit",style:t};let i;i=null==n?Lc:"system"===n?void 0:[n],r=new Intl.NumberFormat(i,e),Bc.set(o,r)}return r.format(e)}var qc=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.Paid=5]="Paid",e))(qc||{});function Kc(e){switch(e){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function Yc(e,t){return Xc(e.plan.effective.expiresOn,t)}function Xc(e,t){return null!=e?function(e,t,n){const o=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(n){case"days":return Math.floor(o/864e5);case"hours":return Math.floor(o/36e5);case"minutes":return Math.floor(o/6e4);case"seconds":return Math.floor(o/1e3);default:return o}}(Date.now(),new Date(e),t):void 0}function Qc(e){return null!=e&&(5===e||1===e||3===e)}function Jc(e){return null!=e&&(1===e||3===e)}El`
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
`;const ed=El`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,td=El`
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
`;El`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${ed}
	}
	a:hover {
		text-decoration: underline;
	}
`;var nd=Object.defineProperty,od=Object.getOwnPropertyDescriptor,rd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?od(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&nd(t,n,i),i};let id=class extends Ec{constructor(){super(...arguments),this.full=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}render(){const e=lc`<slot></slot>`;return null!=this.href?lc`<a href=${this.href}>${e}</a>`:e}};id.styles=[td,El`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem 1.1rem;
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
				${ed}
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
		`],rd([Dc({type:Boolean,reflect:!0})],id.prototype,"full",2),rd([Dc()],id.prototype,"href",2),rd([Dc({reflect:!0})],id.prototype,"role",1),rd([Dc()],id.prototype,"appearance",2),rd([Dc({type:Number,reflect:!0})],id.prototype,"tabIndex",2),id=rd([Ic("gl-button")],id);const sd=El`
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
`;var ad=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,cd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?ld(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&ad(t,n,i),i};let dd=class extends Ec{render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":dc;switch(this.state){case qc.VerificationRequired:return lc`
					<p>You must verify your email before you can continue.</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.resendVerification"
						>Resend verification email</gl-button
					>
					<gl-button appearance="${e}" href="command:gitlens.plus.validate"
						>Refresh verification status</gl-button
					>
				`;case qc.Free:return lc`
					<gl-button appearance="${e}" href="command:gitlens.plus.startPreviewTrial"
						>Preview Now</gl-button
					>
					<p>
						Preview Pro for 3 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a> to start a full 7-day GitKraken trial.
					</p>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case qc.FreePreviewTrialExpired:return lc`
					<p>
						Your 3-day Pro preview has ended, start a free GitKraken trial to get an additional 7 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a>.
					</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.loginOrSignUp"
						>Start Free GitKraken Trial</gl-button
					>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case qc.FreePlusTrialExpired:return lc`
					<p>
						Your GitKraken trial has ended, please upgrade to continue to use this on privately hosted
						repos.
					</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.purchase"
						>Upgrade to Pro</gl-button
					>
					<p>✨ A paid plan is required to use this on privately hosted repos.</p>
				`}}};dd.styles=[sd,El`
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
		`],cd([Dc({type:String})],dd.prototype,"appearance",2),cd([Dc({attribute:!1,type:Number})],dd.prototype,"state",2),dd=cd([Ic("gk-feature-gate-plus-state")],dd);var hd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,pd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?ud(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&hd(t,n,i),i};let fd=class extends Ec{render(){if(!this.visible||null!=this.state&&Qc(this.state))return void(this.hidden=!0);const e=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,lc`
			<section>
				<slot>
					<slot name="feature" hidden=${this.state===qc.Free?dc:""}></slot>
				</slot>
				<gk-feature-gate-plus-state appearance=${e} .state=${this.state}></gk-feature-gate-plus-state>
			</section>
		`}};fd.styles=El`
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
	`,pd([Dc()],fd.prototype,"appearance",2),pd([Dc({attribute:!1,type:Number})],fd.prototype,"state",2),pd([Dc({type:Boolean})],fd.prototype,"visible",2),fd=pd([Ic("gk-feature-gate")],fd);const md=Aa(fd,{name:"gk-feature-gate",properties:["state","visible"]});var gd=Object.defineProperty,bd=Object.getOwnPropertyDescriptor,vd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?bd(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&gd(t,n,i),i};let yd=class extends Ec{constructor(){super(...arguments),this.placement="top end"}render(){const e=Qc(this.subscription?.state),t=Jc(this.subscription?.state);return lc`
			<span class="badge-container">
				<span class="badge ${e?"active":"inactive"}"
					>${t?lc`<span class="badge-trial">Trial</span>`:""}✨</span
				>
				<pop-over .placement=${this.placement} class="badge-popover">
					<span slot="heading"
						>${function(e,t){switch(e){case 4:return Kc("free+");case 1:return`${Kc("pro")} (Trial)`;case 3:return`${Kc(t??"pro")} (Trial)`;case-1:return"GitKraken (Unverified)";case 5:return Kc(t??"pro");default:return"GitKraken"}}(this.subscription?.state,this.subscription?.plan.effective.id)}${this.trialHtml}</span
					>
					${this.footnoteHtml}
				</pop-over>
			</span>
		`}get trialHtml(){if(!Jc(this.subscription?.state))return dc;const e=Yc(this.subscription,"days")??0;return lc`<span class="badge-trial-left">${e<1?"<1 day":Da("day",e)} left</span>`}get footnoteHtml(){switch(this.subscription?.state){case qc.VerificationRequired:case qc.Free:case qc.FreePreviewTrialExpired:return lc`<span class="badge-footnote"
					>✨ Requires a trial or paid plan for use on privately hosted repos.</span
				>`;case qc.FreePlusTrialExpired:case qc.FreeInPreviewTrial:case qc.FreePlusInTrial:return lc`<span class="badge-footnote"
					>✨ Requires a paid plan for use on privately hosted repos.</span
				>`;case qc.Paid:return lc`<span class="badge-footnote"
					>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</span
				>`;default:return dc}}};yd.styles=[td,El`
			:host {
				position: relative;
			}

			:host(:focus) {
				${ed}
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
		`],vd([Dc({reflect:!0})],yd.prototype,"placement",2),vd([Dc({attribute:!1})],yd.prototype,"subscription",2),yd=vd([Ic("gk-feature-gate-badge")],yd);const wd=Aa(yd,{name:"gk-feature-gate-badge",properties:["placement","subscription"]}),Cd={toView:function(e){return e.toString()},fromView:function(e){return parseInt(e,10)}};var xd=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,_d=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Sd(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&xd(t,n,i),i};let Td=class extends Ec{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Td.styles=El`
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
	`,_d([Dc()],Td.prototype,"icon",2),_d([Dc()],Td.prototype,"modifier",2),_d([Dc({type:Number})],Td.prototype,"size",2),Td=_d([Ic("code-icon")],Td);var Rd=Object.defineProperty,kd=Object.getOwnPropertyDescriptor,Ed=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?kd(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Rd(t,n,i),i};let Od=class extends Ec{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return lc`<div class="progress-bar"></div>`}};Od.styles=El`
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
	`,Ed([Dc({reflect:!0})],Od.prototype,"mode",2),Ed([Dc({type:Boolean})],Od.prototype,"active",2),Ed([Dc()],Od.prototype,"position",2),Od=Ed([Ic("progress-indicator")],Od);var Id=Object.defineProperty,Md=Object.getOwnPropertyDescriptor,Dd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Md(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Id(t,n,i),i};const $d=new Map([["=:","message:"],["message:","message:"],["@:","author:"],["author:","author:"],["#:","commit:"],["commit:","commit:"],["?:","file:"],["file:","file:"],["~:","change:"],["change:","change:"]]),Ad=Jn`
	<template role="search">
		<pop-menu ${Dr("popmenu")} style="margin-left: -0.25rem;">
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
				${Dr("input")}
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
				${Is((e=>""!==e.errorMessage),Jn`${e=>e.errorMessage}${e=>e.helpType?Jn`<br />`:""}`)}
				${Is((e=>"message:"===e.helpType),Jn`<span
						>Message: use quotes to search for phrases, e.g. message:"Updates dependencies"</span
					>`)}
				${Is((e=>"author:"===e.helpType),Jn`<span>Author: use a user's account, e.g. author:eamodio</span>`)}
				${Is((e=>"commit:"===e.helpType),Jn`<span>Commit: use a full or short Commit SHA, e.g. commit:4ce3a</span>`)}
				${Is((e=>"file:"===e.helpType),Jn`<span
						>File: use a filename with extension, e.g. file:package.json, or a glob pattern, e.g.
						file:*graph*
					</span>`)}
				${Is((e=>"change:"===e.helpType),Jn`<span>Change: use a regex pattern, e.g. change:update&#92;(param</span>`)}
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
`,Nd=oo`
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
`;let Pd=class extends kt{constructor(){super(...arguments),this.errorMessage="",this.label="Search",this.placeholder="Search...",this.value="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.debouncedEmitSearch=ce(this.emitSearch.bind(this),250),this.searchHistory=[],this.searchHistoryPos=0}get matchCaseOverride(){return!this.matchRegex||this.matchCase}focus(e){this.input.focus(e)}handleFocus(e){this.popmenu.close()}handleClear(e){this.value="",this.debouncedEmitSearch()}updateHelpText(){null==this._updateHelpTextDebounced&&(this._updateHelpTextDebounced=ce(this.updateHelpTextCore.bind(this),200)),this._updateHelpTextDebounced()}updateHelpTextCore(){const e=this.input?.selectionStart,t=this.value;if(null!=e&&0!==t.length&&t.includes(":")){const n=/(?:^|[\b\s]*)((=:|message:|@:|author:|#:|commit:|\?:|file:|~:|change:)(?:"[^"]*"?|\w*))(?:$|[\b\s])/gi;let o;for(;;){if(o=n.exec(t),null==o)break;const[,r,i]=o;if(e>o.index&&e<=o.index+r.trim().length)return void(this.helpType=$d.get(i))}}this.helpType=void 0}handleInputClick(e){this.updateHelpText()}handleInput(e){const t=e.target?.value;this.value=t,this.updateHelpText(),this.debouncedEmitSearch()}handleMatchAll(e){this.matchAll=!this.matchAll,this.debouncedEmitSearch()}handleMatchCase(e){this.matchCase=!this.matchCase,this.debouncedEmitSearch()}handleMatchRegex(e){this.matchRegex=!this.matchRegex,this.debouncedEmitSearch()}handleKeyup(e){this.updateHelpText()}handleShortcutKeys(e){if(!["Enter","ArrowUp","ArrowDown"].includes(e.key)||e.ctrlKey||e.metaKey||e.altKey)return!0;if(e.preventDefault(),"Enter"===e.key)e.shiftKey?this.$emit("previous"):this.$emit("next");else if(0!==this.searchHistory.length){const t="ArrowDown"===e.key?1:-1,n=this.searchHistoryPos+t;if(n>-1&&n<this.searchHistory.length){this.searchHistoryPos=n;const e=this.searchHistory[n];e!==this.value&&(this.value=e,this.updateHelpText(),this.debouncedEmitSearch())}}return!1}handleInsertToken(e){this.value+=`${this.value.length>0?" ":""}${e}`,window.requestAnimationFrame((()=>{this.updateHelpText(),"@me"===e&&this.debouncedEmitSearch(),this.input.focus()}))}emitSearch(){const e={query:this.value,matchAll:this.matchAll,matchCase:this.matchCase,matchRegex:this.matchRegex};this.$emit("change",e)}setCustomValidity(e=""){this.errorMessage=e}logSearch(e){const t=this.searchHistory.length-1;this.searchHistoryPos<t||this.searchHistory[t]===e.query||(this.searchHistory.push(e.query),this.searchHistoryPos=this.searchHistory.length-1)}};Dd([Je],Pd.prototype,"errorMessage",2),Dd([Je],Pd.prototype,"helpType",2),Dd([gt],Pd.prototype,"label",2),Dd([gt],Pd.prototype,"placeholder",2),Dd([gt],Pd.prototype,"value",2),Dd([gt({mode:"boolean"})],Pd.prototype,"matchAll",2),Dd([gt({mode:"boolean"})],Pd.prototype,"matchCase",2),Dd([gt({mode:"boolean"})],Pd.prototype,"matchRegex",2),Dd([et],Pd.prototype,"matchCaseOverride",1),Pd=Dd([Et({name:"search-input",template:Ad,styles:Nd})],Pd);var zd=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,Ld=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Hd(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&zd(t,n,i),i};const Fd=Jn`<template>
	<search-input
		${Dr("searchInput")}
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
			${Is((e=>e.searching),Jn`<code-icon icon="loading" modifier="spin"></code-icon>`)}
			${Is((e=>!e.searching&&e.total<1),Jn`${e=>e.formattedLabel}`)}
			${Is((e=>!e.searching&&e.total>0),Jn`<span aria-current="step">${e=>e.step}</span> of
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
</template>`,Gd=oo`
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
`;let Bd=class extends kt{constructor(){super(...arguments),this.errorMessage="",this.label="Search",this.placeholder='Search commits (↑↓ for history), e.g. "Updates dependencies" author:eamodio',this.value="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.total=0,this.step=0,this.more=!1,this.searching=!1,this.valid=!1,this.resultsHidden=!1,this.resultsLabel="result",this.resultsLoaded=!1}get formattedLabel(){return Da(this.resultsLabel,this.total,{zero:"No"})}get hasResults(){return this.total>1}connectedCallback(){super.connectedCallback(),this._disposable=xe.on(window,"keydown",(e=>this.handleShortcutKeys(e)))}disconnectedCallback(){super.disconnectedCallback(),this._disposable?.dispose()}focus(e){this.searchInput?.focus(e)}navigate(e){const t={direction:e};this.$emit("navigate",t)}logSearch(e){this.searchInput?.logSearch(e)}handleShortcutKeys(e){if(!e.altKey)return"F3"===e.key&&!e.ctrlKey&&!e.metaKey||"g"===e.key&&e.metaKey&&!e.ctrlKey&&ka?(e.preventDefault(),e.stopImmediatePropagation(),void this.navigate(e.shiftKey?"previous":"next")):void("f"===e.key&&(e.metaKey&&!e.ctrlKey&&ka||e.ctrlKey&&!ka)&&(e.preventDefault(),e.stopImmediatePropagation(),this.focus()))}handlePrevious(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"first":"previous")}handleNext(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"last":"next")}handleOpenInView(e){e.stopImmediatePropagation(),this.$emit("openinview")}};Ld([Je],Bd.prototype,"errorMessage",2),Ld([gt],Bd.prototype,"label",2),Ld([gt],Bd.prototype,"placeholder",2),Ld([gt],Bd.prototype,"value",2),Ld([gt({mode:"boolean"})],Bd.prototype,"matchAll",2),Ld([gt({mode:"boolean"})],Bd.prototype,"matchCase",2),Ld([gt({mode:"boolean"})],Bd.prototype,"matchRegex",2),Ld([gt({converter:Cd})],Bd.prototype,"total",2),Ld([gt({converter:Cd})],Bd.prototype,"step",2),Ld([gt({mode:"boolean"})],Bd.prototype,"more",2),Ld([gt({mode:"boolean"})],Bd.prototype,"searching",2),Ld([gt({mode:"boolean"})],Bd.prototype,"valid",2),Ld([gt({mode:"boolean"})],Bd.prototype,"resultsHidden",2),Ld([gt],Bd.prototype,"resultsLabel",2),Ld([gt({mode:"boolean"})],Bd.prototype,"resultsLoaded",2),Ld([et],Bd.prototype,"formattedLabel",1),Ld([et],Bd.prototype,"hasResults",1),Bd=Ld([Et({name:"search-box",template:Fd,styles:Gd})],Bd);const Wd=Aa(Bd,{events:{onChange:"change",onNavigate:"navigate",onOpenInView:"openinview"}});const Ud=500,jd=2**30,Vd=new Map;let Zd=0;function qd(e){Vd.delete(e)}function Kd(){return Zd===jd&&(Zd=0),++Zd}const Yd="",Xd=Symbol("logInstanceNameFn");function Qd(e){return function(e,t=!1){let n,o,r,i,s,a,l=0,c=!1,d=!1,h=!0;null!=e&&({args:n,condition:o,enter:r,exit:i,prefix:s,sanitize:a,logThreshold:l=0,scoped:c=!0,singleLine:d=!1,timed:h=!0}=e);l>0&&(d=!0,h=!0);h&&(c=!0);const u=t?we.debug.bind(we):we.log.bind(we),p=we.warn.bind(we);return(e,f,m)=>{let g,b;if("function"==typeof m.value?(g=m.value,b="value"):"function"==typeof m.get&&(g=m.get,b="get"),null==g||null==b)throw new Error("Not supported");const v=function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(be,he)||t,t=t.slice(0,t.indexOf(pe));let n=t.indexOf(fe),o=t.indexOf(me);n=n>=0?n+1:0,o=o>0?o:t.indexOf(ue),t=t.slice(n,o),t=`(${t})`;const r=ge.exec(t);return null!=r?r[1].split(de).map((e=>e.trim().replace(ve,he))):[]}(g);m[b]=function(...m){const b=Kd();if(!we.isDebugging&&!we.enabled("debug")&&(!we.enabled("info")||t)||null!=o&&!o(...m))return g.apply(this,m);let y;null!=this?(y=function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??ye}else t=e.constructor?.name??ye;const n=t.indexOf("_");return-1===n?t:t.substr(n+1)}(this),this.constructor?.[Xd]&&(y=e.constructor[Xd](this,y))):y=Yd;let w,C=`${c?`[${b.toString(16).padStart(5)}] `:Yd}${y?`${y}.`:Yd}${f}`;null!=s&&(C=s({id:b,instance:this,instanceName:y,name:f,prefix:C},...m)),c&&(w={scopeId:b,prefix:C},function(e,t){Vd.set(e,t)}(b,w));const x=null!=r?r(...m):Yd;let S;if(!1===n||0===m.length)S=Yd,d||u(`${C}${x}`);else{let e;S="";let o,r,i,s=-1;for(i of m){if(o=v[++s],e=n?.[s],null!=e){if("boolean"==typeof e)continue;if(S.length>0&&(S+=", "),"string"==typeof e){S+=e;continue}r=String(e(i))}else S.length>0&&(S+=", "),r=we.toLoggable(i,a);S+=o?`${o}=${r}`:r}d||u(`${C}${x}${S&&(t||we.enabled("debug")||we.isDebugging)?`(${S})`:Yd}`)}if(d||h||null!=i){const e=h?Oa():void 0,n=t=>{const n=void 0!==e?` [${Ma(e)}ms]`:Yd;d?we.error(t,`${C}${x}${S?`(${S})`:Yd}`,`failed${w?.exitDetails?w.exitDetails:Yd}${n}`):we.error(t,C,`failed${w?.exitDetails?w.exitDetails:Yd}${n}`),c&&qd(b)};let o;try{o=g.apply(this,m)}catch(e){throw n(e),e}const r=n=>{let o,r,s,a;if(null!=e?(o=Ma(e),o>Ud?(r=p,s=` [*${o}ms] (slow)`):(r=u,s=` [${o}ms]`)):(s=Yd,r=u),null!=i)if("function"==typeof i)try{a=i(n)}catch(e){a=`@log.exit error: ${e}`}else!0===i&&(a=`returned ${we.toLoggable(n)}`);else a="completed";d?(0===l||o>l)&&r(`${C}${x}${S&&(t||we.enabled("debug")||we.isDebugging)?`(${S})`:Yd} ${a}${w?.exitDetails?w.exitDetails:Yd}${s}`):r(`${C}${S&&(t||we.enabled("debug")||we.isDebugging)?`(${S})`:Yd} ${a}${w?.exitDetails?w.exitDetails:Yd}${s}`),c&&qd(b)};if(null!=o&&(null!=(_=o)&&(_ instanceof Promise||"function"==typeof _?.then))){o.then(r).catch(n)}else r(o);return o}var _;return g.apply(this,m)}}}(e,!0)}function*Jd(e,t){for(const n of e)yield*t(n)}function*eh(...e){for(const t of e)if(null!=t)for(const e of t)yield e}var th=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,oh=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?nh(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&th(t,n,i),i};const rh=Jn`<template>
	<div id="spinner" ${Dr("spinner")}><code-icon icon="loading" modifier="spin"></code-icon></div>
	<div id="chart" ${Dr("chart")}></div>
	<div
		class="legend"
		title="${e=>"lines"===e.dataType?"Showing lines changed per day":"Showing commits per day"}"
	>
		<code-icon icon="${e=>"lines"===e.dataType?"request-changes":"git-commit"}"></code-icon>
	</div>
</template>`,ih=oo`
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
`,sh=["marker-result","marker-head-arrow-left","marker-head-arrow-right","marker-head","marker-upstream","marker-branch","marker-stash","marker-remote","marker-tag","visible-area"];let ah=class extends kt{constructor(){super(...arguments),this.dataType="commits"}activeDayChanged(){this.select(this.activeDay)}dataChanged(e,t,n){this._loadTimer&&(clearTimeout(this._loadTimer),this._loadTimer=void 0),n&&(this._regions=void 0,this._markerRegions=void 0),this._loadTimer=setTimeout((()=>this.loadChart()),150)}dataTypeChanged(){this.dataChanged()}markersChanged(){this.dataChanged(void 0,void 0,!0)}searchResultsChanged(){this._chart?.regions.remove({classes:["marker-result"]}),null!=this.searchResults&&this._chart?.regions.add([...this.getSearchResultsRegions(this.searchResults)])}visibleDaysChanged(){this._chart?.regions.remove({classes:["visible-area"]}),null!=this.visibleDays&&this._chart?.regions.add(this.getVisibleAreaRegion(this.visibleDays))}connectedCallback(){super.connectedCallback(),this.dataChanged(void 0,void 0,!1)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=void 0}getInternalChart(){try{return this._chart?.internal}catch{return}}select(e,t=!1){if(null==e)return void this.unselect();const n=this.getData(e);if(null==n)return;const o=this.getInternalChart();if(null!=o&&(o.showGridFocus([n]),!t)){const{index:e}=n;this._chart.$.main.selectAll(`.bb-shape-${e}`).each((function(t){o.toggleShape?.(this,t,e)}))}}unselect(e,t=!1){if(t)this.getInternalChart()?.hideGridFocus();else if(null!=e){const t=this.getIndex(e);if(null==t)return;this._chart?.unselect(void 0,[t])}else this._chart?.unselect()}getData(e){return e=new Date(e).setHours(0,0,0,0),this._chart?.data()[0]?.values.find((t=>("number"==typeof t.x?t.x:t.x.getTime())===e))}getIndex(e){return this.getData(e)?.index}getMarkerRegions(){if(null==this._markerRegions)if(null!=this.markers){const e=Jd(this.markers,(([e,t])=>Jd(t,(t=>t.current&&"branch"===t.type?[{axis:"x",start:e,end:e,class:"marker-head"},{axis:"x",start:e,end:e,class:"marker-head-arrow-left"},{axis:"x",start:e,end:e,class:"marker-head-arrow-right"}]:[{axis:"x",start:e,end:e,class:t.current&&"remote"===t.type?"marker-upstream":`marker-${t.type}`}]))));this._markerRegions=e}else this._markerRegions=[];return this._markerRegions}getAllRegions(){if(null==this._regions){let e=this.getMarkerRegions();null!=this.visibleDays&&(e=eh([this.getVisibleAreaRegion(this.visibleDays)],e)),null!=this.searchResults&&(e=eh(e,this.getSearchResultsRegions(this.searchResults))),this._regions=[...e].sort(((e,t)=>sh.indexOf(t.class??"")-sh.indexOf(e.class??"")))}return this._regions}getSearchResultsRegions(e){return function*(e,t){for(const n of e)yield t(n)}(e.keys(),(e=>({axis:"x",start:e,end:e,class:"marker-result"})))}getVisibleAreaRegion(e){return{axis:"x",start:e.top,end:e.bottom,class:"visible-area"}}loadChart(){null==this._loading&&(this._loading=this.loadChartCore().then((()=>this._loading=void 0)))}async loadChartCore(){if(!this.data?.size)return this.spinner.setAttribute("aria-hidden","false"),this._chart?.destroy(),void(this._chart=void 0);const e="lines"===this.dataType,t=[],n=[],r=this.data.keys(),i=r[Symbol.iterator]().next().value;const s=new Date,a=new Date(i);let l,c,d,h,u,p=0;const f=s;for(;f>=a;)l=lh(f),c=this.data.get(l),t.push(l),e?(d=c?.activity?.additions??0,u=c?.activity?.deletions??0,h=d+u):h=c?.commits??0,p=Math.max(p,h),n.push(h),f.setDate(f.getDate()-1);const m=this.getAllRegions(),g=[];let b=0,v=0;for(const e of n)0!==e&&(g.push(e),b+=e,v+=e**2);g.sort(((e,t)=>e-t));const y=g.length,w=b/y,C=Math.sqrt(v/y-w**2);let x=-1;for(let e=y-1;e>=0;e--)if(Math.abs((g[e]-w)/C)<=3){x=e;break}const S=g[Math.floor(.25*y)],_=g[Math.floor(.75*y)],T=g[y-1],R=_+3*(_-S),k=g[x],E=Math.floor(Math.min(T,R>T-R?k:R+(k-R)/2)+.1*R);if(null==this._chart){const{bb:e,selection:r,spline:i,zoom:s}=await o.e(490).then(o.bind(o,1893));this._chart=e.generate({bindto:this.chart,data:{x:"date",axes:{activity:"y"},columns:[["date",...t],["activity",...n]],names:{activity:"Activity"},onclick:e=>{if("activity"!==e.id)return;const t=new Date(e.x),n=lh(t),o=this.searchResults?.get(n)?.sha??this.data?.get(n)?.sha;queueMicrotask((()=>{this.$emit("selected",{date:t,sha:o})}))},selection:{enabled:r(),grouped:!0,multiple:!1},colors:{activity:"var(--color-graph-minimap-line0)"},types:{activity:i()}},axis:{x:{inverted:!0,localtime:!0,type:"timeseries"},y:{min:0,max:E}},clipPath:!1,grid:{front:!1,focus:{show:!0}},legend:{show:!1},line:{point:!0,zerobased:!0},padding:{mode:"fit",bottom:-8,left:0,right:0,top:0},point:{show:!0,select:{r:5},focus:{only:!0,expand:{enabled:!0,r:3}},sensitivity:100},regions:m,resize:{auto:!0},spline:{interpolation:{type:"monotone-x"}},tooltip:{contents:(e,t,n,o)=>{const r=new Date(e[0].x),i=this.data?.get(lh(r)),s=this.markers?.get(lh(r));let a;s?.length&&(a=function(e,t){return e.reduce(((e,n)=>{const o=t(n),r=e.get(o);return void 0===r?e.set(o,[n]):r.push(n),e}),new Map)}(s,(e=>e.type)));const l=a?.get("stash")?.length??0,c="lines"===this.dataType;return`<div class="bb-tooltip">\n\t\t\t\t\t\t\t<div class="header">\n\t\t\t\t\t\t\t\t<span class="header--title">${Uc(r,"MMMM Do, YYYY")}</span>\n\t\t\t\t\t\t\t\t<span class="header--description">(${function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(Wc(r))})</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="changes">\n\t\t\t\t\t\t\t\t<span>${0===(i?.commits??0)?"No commits":`${Da("commit",i?.commits??0,{format:e=>Zc(e),zero:"No"})}${c?`, ${Da("file",i?.files??0,{format:e=>Zc(e),zero:"No"})}, ${Da("line",(i?.activity?.additions??0)+(i?.activity?.deletions??0),{format:e=>Zc(e),zero:"No"})} changed`:""}`}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t${null!=a?`\n\t\t\t\t\t\t\t<div class="refs">${l?`<span class="stash">${Da("stash",l,{plural:"stashes"})}</span>`:""}${a?.get("branch")?.sort(((e,t)=>(e.current?-1:1)-(t.current?-1:1))).map((e=>`<span class="branch${e.current?" current":""}">${e.name}</span>`)).join("")??""}</div>\n\t\t\t\t\t\t\t<div class="refs">${a?.get("remote")?.sort(((e,t)=>(e.current?-1:1)-(t.current?-1:1)))?.map((e=>`<span class="remote${e.current?" current":""}">${e.name}</span>`)).join("")??""}${a?.get("tag")?.map((e=>`<span class="tag">${e.name}</span>`)).join("")??""}</div>`:""}\n\t\t\t\t\t\t</div>`},grouped:!0,position:(e,t,n,o,r)=>{let{x:i}=r;const s=o.getBoundingClientRect();return i+t>s.right&&(i=s.right-t),{top:0,left:i}}},transition:{duration:0},zoom:{enabled:s(),rescale:!1,type:"wheel",onzoom:ce((()=>this.activeDayChanged()),250)},onafterinit:function(){const e=this.$.main.selectAll(".bb-axis-x").node();e?.remove();const t=this.$.main.selectAll(".bb-axis-y").node();t?.remove();const n=this.$.main.selectAll(".bb-grid").node();try{n?.removeAttribute("clip-path")}catch{}const o=this.$.main.selectAll(".bb-regions").node(),r=this.$.main.selectAll(".bb-chart").node();null!=o&&null!=r&&r.insertAdjacentElement("afterend",o)}})}else this._chart.load({columns:[["date",...t],["activity",...n]]}),this._chart.axis.max({y:E}),this._chart.regions(m);this.spinner.setAttribute("aria-hidden","true"),this.activeDayChanged()}};function lh(e){return new Date(e).setHours(0,0,0,0)}oh([Je],ah.prototype,"activeDay",2),oh([Je],ah.prototype,"data",2),oh([Qd({singleLine:!0})],ah.prototype,"dataChanged",1),oh([Je],ah.prototype,"dataType",2),oh([Je],ah.prototype,"markers",2),oh([Je],ah.prototype,"searchResults",2),oh([Je],ah.prototype,"visibleDays",2),oh([Qd({singleLine:!0})],ah.prototype,"loadChartCore",1),ah=oh([Et({name:"graph-minimap",template:rh,styles:ih})],ah);const ch=Aa(ah,{events:{onSelected:"selected"}}),dh=e=>(t,n)=>function(e,t="absolute",n="short+short",o){switch(o){case Pe.CommitDateTimeSources.Tooltip:return`${Uc(e,n)} (${Wc(e)})`;case Pe.CommitDateTimeSources.RowEntry:default:return"relative"===t?Wc(e):Uc(e,n)}}(t,e?.dateStyle,e?.dateFormat,n),hh=(()=>{const t={};return["head","remote","remote-github","remote-githubEnterprise","remote-gitlab","remote-gitlabSelfHosted","remote-bitbucket","remote-bitbucketServer","remote-azureDevops","tag","stash","check","loading","warning","added","modified","deleted","renamed","resolved","pull-request","show","hide","branch","graph","commit","author","datetime","message","changes","files"].forEach((n=>{t[n]=(0,e.createElement)("span",{className:`graph-icon icon--${n}`})})),["upstream-ahead","upstream-behind"].forEach((n=>{t[n]=(0,e.createElement)("span",{className:`graph-icon mini-icon icon--${n}`})})),t.settings=(0,e.createElement)("span",{className:"graph-icon icon--settings",style:{fontSize:"1.1rem",right:"0px",top:"-1px"}}),t})(),uh=e=>hh[e],ph=(()=>{switch(Ea?"web-windows":ka?"web-macOS":Ra?"web-linux":"web"){case"web-macOS":return"darwin";case"web-windows":return"win32";default:return"linux"}})();function fh({subscriber:n,nonce:o,state:r,onChooseRepository:i,onColumnsChange:s,onDimMergeCommits:a,onDoubleClickRef:l,onDoubleClickRow:c,onEnsureRowPromise:d,onMissingAvatars:h,onMissingRefsMetadata:u,onMoreRows:p,onRefsVisibilityChange:f,onSearch:m,onSearchPromise:g,onSearchOpenInView:b,onSelectionChange:v,onExcludeType:y,onIncludeOnlyRef:w,onUpdateGraphConfiguration:C}){const x=(0,e.useRef)(null),[S,_]=(0,e.useState)(r.rows??[]),[T,R]=(0,e.useState)(r.rowsStats),[D,$]=(0,e.useState)(r.rowsStatsLoading),[F,W]=(0,e.useState)(r.avatars),[U,j]=(0,e.useState)(r.downstreams??{}),[V,Z]=(0,e.useState)(r.refsMetadata),[q,K]=(0,e.useState)(r.repositories??[]),[Y,X]=(0,e.useState)(q.find((e=>e.path===r.selectedRepository))),[Q,J]=(0,e.useState)(r.branchState),[ee,te]=(0,e.useState)(r.selectedRows),[ne,oe]=(0,e.useState)(r.activeRow),[re,ie]=(0,e.useState)(r.activeDay),[se,ae]=(0,e.useState)(r.visibleDays),[le,ce]=(0,e.useState)(r.config),[de,he]=(0,e.useState)(r.columns),[ue,pe]=(0,e.useState)(r.excludeRefs),[fe,me]=(0,e.useState)(r.excludeTypes),[ge,be]=(0,e.useState)(r.includeOnlyRefs),[ve,ye]=(0,e.useState)(r.context),[we,Ce]=(0,e.useState)(r.paging?.hasMore??!1),[xe,Se]=(0,e.useState)(r.loading),[_e,Te]=(0,e.useState)(r.theming),[Re,ke]=(0,e.useState)(r.branchName),[Ee,Oe]=(0,e.useState)(r.lastFetched),[Ie,Me]=(0,e.useState)(r.windowFocused),[De,$e]=(0,e.useState)(r.allowed??!1),[Ae,Ne]=(0,e.useState)(r.subscription),He=(0,e.useRef)(null),[Le,Fe]=(0,e.useState)(void 0),{results:Ge,resultsError:Be}=yh(r),[We,Ue]=(0,e.useState)(Ge),[je,Ve]=(0,e.useState)(Be),[Ze,qe]=(0,e.useState)(!1),[Ke,Ye]=(0,e.useState)(!1),[Xe,Qe]=(0,e.useState)(r.workingTreeStats??{added:0,modified:0,deleted:0}),Je=(0,e.useRef)(void 0),et=(0,e.useRef)(new Set),tt=(0,e.useRef)(new Set);function nt(e,t,n){switch(n&&Te(e.theming),t){case"didChangeTheme":n||Te(e.theming);break;case O:W(e.avatars);break;case A:Me(e.windowFocused);break;case I:Z(e.refsMetadata);break;case M:he(e.columns),ye(e.context);break;case P:_(e.rows??[]),R(e.rowsStats),$(e.rowsStatsLoading),te(e.selectedRows),W(e.avatars),j(e.downstreams??{}),Z(e.refsMetadata),Ce(e.paging?.hasMore??!1),Se(e.loading);break;case z:R(e.rowsStats),$(e.rowsStatsLoading);break;case G:{const{results:t,resultsError:n}=yh(e);Ve(n),Ue(t),te(e.selectedRows),Ye(!1);break}case k:ce(e.config);break;case H:te(e.selectedRows);break;case N:pe(e.excludeRefs),me(e.excludeTypes),be(e.includeOnlyRefs);break;case E:$e(e.allowed??!1),Ne(e.subscription);break;case L:Qe(e.workingTreeStats??{added:0,modified:0,deleted:0});break;case B:Oe(e.lastFetched);break;default:{$e(e.allowed??!1),n||Te(e.theming),ke(e.branchName),Oe(e.lastFetched),he(e.columns),_(e.rows??[]),R(e.rowsStats),$(e.rowsStatsLoading),Qe(e.workingTreeStats??{added:0,modified:0,deleted:0}),ce(e.config),te(e.selectedRows),pe(e.excludeRefs),me(e.excludeTypes),be(e.includeOnlyRefs),ye(e.context),W(e.avatars??{}),j(e.downstreams??{}),J(e.branchState),Z(e.refsMetadata),Ce(e.paging?.hasMore??!1),K(e.repositories??[]),X(q.find((t=>t.path===e.selectedRepository))),Ne(e.subscription);const{results:t,resultsError:o}=yh(e);Ve(o),Ue(t),Se(e.loading);break}}}(0,e.useEffect)((()=>n?.(nt)),[]);const ot=e=>{if("Enter"===e.key||" "===e.key){const t=vh(ne??r.activeRow)?.id;if(null==t)return;const n=x.current?.graphContainerRef.current;if(!e.composedPath().some((e=>e===n)))return;const o=S.find((e=>e.sha===t));if(null==o)return;c?.(o,"Enter"!==e.key)}};(0,e.useEffect)((()=>(window.addEventListener("keydown",ot),()=>{window.removeEventListener("keydown",ot)})),[ne]);const rt=(0,e.useMemo)((()=>{if(!le?.minimap)return;const e="lines"===(le?.minimapDataType??"commits");if(e&&null==T)return;const t=new Map,n=new Map,o=le?.minimapMarkerTypes??[];let r,i,s,a,l,c,d,h,u,p,f={head:void 0,branch:void 0,remote:void 0,tag:void 0};for(let m=S.length-1;m>=0;m--)h=S[m],r=wh(h.date),r!==i&&(i=r,f={head:void 0,branch:void 0,remote:void 0,tag:void 0}),h.heads?.length&&(o.includes("head")||o.includes("localBranches"))&&(f.branch=h.sha,a=[],h.heads.forEach((e=>{e.isCurrentHead&&(f.head=h.sha),(o.includes("localBranches")||o.includes("head")&&e.isCurrentHead)&&a.push({type:"branch",name:e.name,current:e.isCurrentHead&&o.includes("head")})})),s=n.get(r),null==s?n.set(r,a):s.push(...a)),h.remotes?.length&&(o.includes("upstream")||o.includes("remoteBranches")||o.includes("localBranches"))&&(f.remote=h.sha,l=[],h.remotes.forEach((e=>{let t=!1;const n=U?.[`${e.owner}/${e.name}`]?.length;e.current&&(f.remote=h.sha,t=!0),(o.includes("remoteBranches")||o.includes("upstream")&&t||o.includes("localBranches")&&n)&&l.push({type:"remote",name:`${e.owner}/${e.name}`,current:t&&o.includes("upstream")})})),s=n.get(r),null==s?n.set(r,l):s.push(...l)),"stash-node"===h.type&&o.includes("stashes")&&(c={type:"stash",name:h.message},s=n.get(r),null==s?n.set(r,[c]):s.push(c)),h.tags?.length&&o.includes("tags")&&(f.tag=h.sha,d=h.tags.map((e=>({type:"tag",name:e.name}))),s=n.get(r),null==s?n.set(r,d):s.push(...d)),u=t.get(r),null==u?e?(p=T[h.sha],null!=p&&(u={activity:{additions:p.additions,deletions:p.deletions},commits:1,files:p.files,sha:h.sha},t.set(r,u))):(u={commits:1,sha:h.sha},t.set(r,u)):(u.commits++,u.sha=f.head??f.branch??f.remote??f.tag??u.sha,e&&(p=T[h.sha],null!=p&&(null==u.activity?u.activity={additions:p.additions,deletions:p.deletions}:(u.activity.additions+=p.additions,u.activity.deletions+=p.deletions),u.files=(u.files??0)+p.files)));return{stats:t,markers:n}}),[S,T,U,le?.minimap,le?.minimapDataType,le?.minimapMarkerTypes]),it=(0,e.useMemo)((()=>{if(!le?.minimap||!le.minimapMarkerTypes?.includes("highlights"))return;const e=new Map;if(null!=We?.ids){let t,n,o,r;for([n,o]of Object.entries(We.ids))t=wh(o.date),r=e.get(t),null==r&&e.set(t,{type:"search-result",sha:n})}return e}),[We,le?.minimap,le?.minimapMarkerTypes]),st=e=>{if(null==le?.minimapMarkerTypes)return;const t=e.target,n=t.value;if(t.checked){if(!le.minimapMarkerTypes.includes(n)){const e=[...le.minimapMarkerTypes,n];ce({...le,minimapMarkerTypes:e}),C?.({minimapMarkerTypes:e})}}else{const e=le.minimapMarkerTypes.indexOf(n);if(-1!==e){const t=[...le.minimapMarkerTypes];t.splice(e,1),ce({...le,minimapMarkerTypes:t}),C?.({minimapMarkerTypes:t})}}};(0,e.useEffect)((()=>{null==je&&null!=We&&0!==We.count&&null!=Le&&He.current?.logSearch(Le)}),[We]);const at=(0,e.useMemo)((()=>{if(null==We?.ids||!Le?.query)return 0;const e=vh(ne)?.id;let t=e?We.ids[e]?.i:void 0;return null==t&&([t]=mh(We,Le,ne)),t<1?1:t+1}),[ne,We]),lt=(0,e.useMemo)((()=>null==ge||0===Object.keys(ge).length),[ge]),ct=(0,e.useMemo)((()=>!lt||null!=fe&&Object.values(fe).includes(!0)),[fe,lt,le?.dimMergeCommits]),dt=(0,e.useMemo)((()=>!lt),[lt]),ht=async e=>{if(null==d)return e;if(et.current.has(e))return e;if(tt.current.has(e))return;let t=setTimeout((()=>{t=void 0,Se(!0)}),500);const n=await d(e,!1);if(null==t?Se(!1):clearTimeout(t),n?.id===e)return et.current.add(e),e;null!=n&&tt.current.add(e)},ut=e=>{const t=e.target,n=t.value;if(!["branch-all","branch-current"].includes(n)&&!["remotes","stashes","tags","mergeCommits"].includes(n))return;const o=t.checked;if("mergeCommits"===n)return void a?.(o);const r=n,i=fe?.[r];(null==i&&o||null!=i&&i!==o)&&(me({...fe,[r]:o}),y?.(r,o))};return t().createElement(t().Fragment,null,t().createElement("header",{className:"titlebar graph-app__header"},t().createElement("div",{className:"titlebar__row titlebar__row--wrap"+(De?Y&&Q?.provider?.url?"":" no-remote-provider":" disallowed")},Y&&Q?.provider?.url&&t().createElement("a",{href:Q.provider.url,className:"action-button",style:{marginRight:"-0.5rem"},title:`Open Repository on ${Q.provider.name}`,"aria-label":`Open Repository on ${Q.provider.name}`},t().createElement("span",{className:"cloud"===Q.provider.icon?"codicon codicon-cloud action-button__icon":`glicon glicon-provider-${Q.provider.icon} action-button__icon`,"aria-hidden":"true"})),t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Switch to Another Repository...","aria-label":"Switch to Another Repository...",disabled:q.length<2,onClick:()=>{i?.()}},Y?.formattedName??"none selected",q.length>1&&t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),De&&Y&&t().createElement(t().Fragment,null,t().createElement("span",null,t().createElement("span",{className:"codicon codicon-chevron-right"})),t().createElement("a",{href:$a("gitlens.graph.switchToAnotherBranch",r.webviewId),className:"action-button",title:"Switch to Another Branch...","aria-label":"Switch to Another Branch..."},Re,t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement("span",null,t().createElement("span",{className:"codicon codicon-chevron-right"})),(()=>{const e=Ee&&new Date(Ee),n=e&&0!==e.getTime()?Wc(e):void 0;let o="fetch",i="sync",s="Fetch",a=!1,l=!1,c="",d="Fetch from",h="remote";if(Q){a=Q.behind>0,l=Q.ahead>0;const e=`Branch ${Re} is`;h=`${Q.upstream}${Q.provider?.name?` on ${Q.provider?.name}`:""}`,a?(o="pull",i="arrow-down",s="Pull",c=`Pull from ${h}\n${e} ${Da("commit",Q.behind)} behind of`):l&&(o="push",i="arrow-up",s="Push",c=`Push to ${h}\n${e} ${Da("commit",Q.ahead)} ahead of`),c+=` ${h}`,d+=` ${h}`}if(null!=n){const e=`\nLast fetched ${n}`;c+=e,d+=e}return t().createElement("div",{className:"titlebar__group"},(a||l)&&t().createElement("a",{href:$a(`gitlens.graph.${o}`,r.webviewId),className:`action-button${a?" is-behind":""}${l?" is-ahead":""}`,title:c},t().createElement("span",{className:`codicon codicon-${i} action-button__icon`}),s,(l||a)&&t().createElement("span",null,t().createElement("span",{className:"pill action-button__pill"},l&&t().createElement("span",null,Q.ahead," ",t().createElement("span",{className:"codicon codicon-arrow-up"})),a&&t().createElement("span",null,Q.behind," ",t().createElement("span",{className:"codicon codicon-arrow-down"}))))),t().createElement("a",{href:$a("gitlens.graph.fetch",r.webviewId),className:"action-button",title:d},t().createElement("span",{className:"codicon codicon-sync action-button__icon"}),"Fetch",n&&t().createElement("span",{className:"action-button__small"},"(",n,")")))})()),t().createElement(wd,{subscription:Ae}),t().createElement("div",{className:"popover"},t().createElement("a",{href:"command:gitlens.showFocusPage",className:"action-button popover__trigger"},"Try the Focus Preview"),t().createElement(xl,{placement:"top end",className:"popover__content"},"Bring all of your GitHub pull requests and issues into a unified actionable to help to you more easily juggle work in progress, pending work, reviews, and more"))),De&&t().createElement("div",{className:"titlebar__row"},t().createElement("div",{className:"titlebar__group"},t().createElement(ml,null,t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Filter Graph"},t().createElement("span",{className:"codicon codicon-filter"+(ct?"-filled":"")}),dt&&t().createElement("span",{className:"action-button__indicator"}),t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement(sl,{slot:"content"},t().createElement(il,null,"Filter options"),t().createElement(rl,{role:"none"},t().createElement(Sa,{orientation:"vertical",value:lt&&!0!==Y?.isVirtual?"branch-all":"branch-current",readOnly:!0===Y?.isVirtual},!0!==Y?.isVirtual&&t().createElement(xa,{name:"branching-toggle",value:"branch-all",onChange:e=>{const t=e.target,n=t.value,o=t.checked,r="branch-all"===n&&o;lt!==r&&w?.(r)}},"Show All Branches"),t().createElement(xa,{name:"branching-toggle",value:"branch-current"},"Show Current Branch Only"))),t().createElement(ol,null),!0!==Y?.isVirtual&&t().createElement(t().Fragment,null,t().createElement(rl,{role:"none"},t().createElement(Ca,{value:"remotes",onChange:ut,defaultChecked:fe?.remotes??!1},"Hide Remote-only Branches")),t().createElement(rl,{role:"none"},t().createElement(Ca,{value:"stashes",onChange:ut,defaultChecked:fe?.stashes??!1},"Hide Stashes"))),t().createElement(rl,{role:"none"},t().createElement(Ca,{value:"tags",onChange:ut,defaultChecked:fe?.tags??!1},"Hide Tags")),t().createElement(ol,null),t().createElement(rl,{role:"none"},t().createElement(Ca,{value:"mergeCommits",onChange:ut,defaultChecked:le?.dimMergeCommits??!1},"Dim Merge Commit Rows")))),t().createElement("span",null,t().createElement("span",{className:"action-divider"})),t().createElement(Wd,{ref:He,label:"Search Commits",step:at,total:We?.count??0,valid:Boolean(Le?.query&&Le.query.length>2),more:We?.paging?.hasMore??!1,searching:Ke,value:Le?.query??"",errorMessage:je?.error??"",resultsHidden:Ze,resultsLoaded:null!=We,onChange:e=>(e=>{const t=e.detail;Fe(t);const n=t.query.length>=3;Ue(void 0),Ve(void 0),qe(!1),Ye(n),m?.(n?t:void 0)})(e),onNavigate:e=>(async e=>{if(null==We)return;const t=e.detail?.direction??"next";let n,o,r,i=We,s=i.count;"first"===t?(r=!1,n=0):"last"===t?(r=!1,n=-1):(r="next"===t,[n,o]=mh(i,Le,ne,r));let a=0;for(;a<1e3;){if(a++,-1==n)if(r)if(null!=Le&&i?.paging?.hasMore){let e;Ye(!0);try{e=await(g?.(Le,{more:!0}))}finally{Ye(!1)}null==e?.results||"error"in e.results?n=0:s<e.results.count?(i=e.results,n=s,s=i.count):n=0}else n=0;else if("last"===t&&null!=Le&&i?.paging?.hasMore){let e;Ye(!0);try{e=await(g?.(Le,{limit:0,more:!0}))}finally{Ye(!1)}null==e?.results||"error"in e.results||(s<e.results.count&&(i=e.results,s=i.count),n=s)}else n=s-1;if(o=o??bh(i,n),null!=o&&(o=await ht(o),null!=o))break;qe(!0),n=gh(n,r,i,Le)}null!=o&&queueMicrotask((()=>x.current?.selectCommits([o],!1,!0)))})(e),onOpenInView:()=>{null!=Le&&b?.(Le)}}),t().createElement("span",null,t().createElement("span",{className:"action-divider"})),t().createElement("span",{className:"button-group"},t().createElement("button",{type:"button",role:"checkbox",className:"action-button",title:"Toggle Minimap","aria-label":"Toggle Minimap","aria-checked":le?.minimap??!1,onClick:e=>{C?.({minimap:!le?.minimap})}},t().createElement("span",{className:"codicon codicon-graph-line action-button__icon"})),t().createElement(ml,{position:"right"},t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Minimap Options"},t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement(sl,{slot:"content"},t().createElement(il,null,"Chart"),t().createElement(rl,{role:"none"},t().createElement(Sa,{orientation:"vertical",value:le?.minimapDataType??"commits"},t().createElement(xa,{name:"minimap-datatype",value:"commits",onChange:e=>{if(null==le)return;const t=e.target;if("commits"===t.value){const e=t.checked?"commits":"lines";if(le.minimapDataType===e)return;ce({...le,minimapDataType:e}),C?.({minimapDataType:e})}}},"Commits"),t().createElement(xa,{name:"minimap-datatype",value:"lines"},"Lines Changed"))),t().createElement(ol,null),t().createElement(il,null,"Markers"),t().createElement(rl,{role:"none"},t().createElement(Ca,{value:"localBranches",onChange:st,defaultChecked:le?.minimapMarkerTypes?.includes("localBranches")??!1},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"localBranches"}),"Local Branches")),t().createElement(rl,{role:"none"},t().createElement(Ca,{value:"remoteBranches",onChange:st,defaultChecked:le?.minimapMarkerTypes?.includes("remoteBranches")??!0},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"remoteBranches"}),"Remote Branches")),t().createElement(rl,{role:"none"},t().createElement(Ca,{value:"stashes",onChange:st,defaultChecked:le?.minimapMarkerTypes?.includes("stashes")??!1},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"stashes"}),"Stashes")),t().createElement(rl,{role:"none"},t().createElement(Ca,{value:"tags",onChange:st,defaultChecked:le?.minimapMarkerTypes?.includes("tags")??!0},t().createElement("span",{className:"minimap-marker-swatch","data-marker":"tags"}),"Tags"))))))),t().createElement("div",{className:"progress-container infinite"+(xe||D?" active":""),role:"progressbar"},t().createElement("div",{className:"progress-bar"}))),t().createElement(md,{className:"graph-app__gate",appearance:"alert",state:Ae?.state,visible:!De},t().createElement("p",{slot:"feature"},"Helps you easily visualize your repository and keep track of all work in progress.",t().createElement("br",null),t().createElement("br",null),"Use the rich commit search to find exactly what you're looking for. It's powerful filters allow you to search by a specific commit, message, author, a changed file or files, or even a specific code change.")),le?.minimap&&t().createElement(ch,{ref:Je,activeDay:re,data:rt?.stats,dataType:le?.minimapDataType??"commits",markers:rt?.markers,searchResults:it,visibleDays:se,onSelected:e=>(e=>{let{sha:t}=e.detail;if(null==t){const n=e.detail.date?.getTime();if(null==n)return;t=S.reduce(((e,t)=>Math.abs(t.date-n)<Math.abs(e.date-n)?t:e)).sha}x.current?.selectCommits([t],!1,!0)})(e)}),t().createElement("main",{id:"main",className:"graph-app__main","aria-hidden":!De},void 0!==Y?t().createElement(t().Fragment,null,t().createElement(ze(),{ref:x,avatarUrlByEmail:F,columnsSettings:de,contexts:ve,cssVariables:_e?.cssVariables,dimMergeCommits:le?.dimMergeCommits,downstreamsByUpstream:U,enabledRefMetadataTypes:le?.enabledRefMetadataTypes,enabledScrollMarkerTypes:le?.scrollMarkerTypes,enableShowHideRefsOptions:!0,enableMultiSelection:le?.enableMultiSelection,excludeRefsById:ue,excludeByType:fe,formatCommitDateTime:dh(le),getExternalIcon:uh,graphRows:S,hasMoreCommits:we,highlightedShas:We?.ids,highlightRowsOnRefHover:le?.highlightRowsOnRefHover,includeOnlyRefsById:ge,scrollRowPadding:le?.scrollRowPadding,showGhostRefsOnRowHover:le?.showGhostRefsOnRowHover,showRemoteNamesOnRefs:le?.showRemoteNamesOnRefs,isContainerWindowFocused:Ie,isLoadingRows:xe,isSelectedBySha:ee,nonce:o,onColumnResized:(e,t)=>{t.width&&s?.({[e]:{width:t.width,isHidden:t.isHidden,mode:t.mode,order:t.order}})},onDoubleClickGraphRow:(e,t,n)=>{t!==Pe.refZone&&c?.(n,!0)},onDoubleClickGraphRef:(e,t,n,o)=>{t.length>0&&l?.(t[0],o)},onGraphColumnsReOrdered:e=>{const t={};for(const[n,o]of Object.entries(e))t[n]={...o};s?.(t)},onGraphMouseLeave:Je.current?e=>{Je.current?.unselect(void 0,!0)}:void 0,onGraphRowHovered:Je.current?(e,t,n)=>{t!==Pe.refZone&&null!=Je.current&&Je.current?.select(n.date,!0)}:void 0,onSettingsClick:e=>{const t=e.nativeEvent,n=new MouseEvent("contextmenu",{bubbles:!0,clientX:t.clientX,clientY:t.clientY});t.target?.dispatchEvent(n),t.stopImmediatePropagation()},onSelectGraphRows:e=>{const t=e[0],n=null!=t?`${t.sha}|${t.date}`:void 0;r.activeRow=n,oe(n),ie(t?.date),v?.(e)},onToggleRefsVisibilityClick:(e,t,n)=>{f?.(t,n)},onEmailsMissingAvatarUrls:e=>{h?.(e)},onRefsMissingMetadata:e=>{u?.(e)},onShowMoreCommits:()=>{Se(!0),p?.()},onGraphVisibleRowsChanged:Je.current?(e,t)=>{ae({top:new Date(e.date).setHours(23,59,59,999),bottom:new Date(t.date).setHours(0,0,0,0)})}:void 0,platform:ph,refMetadataById:V,rowsStats:T,rowsStatsLoading:D,shaLength:le?.idLength,themeOpacityFactor:_e?.themeOpacityFactor,useAuthorInitialsForAvatars:!le?.avatars,workDirStats:Xe})):t().createElement("p",null,"No repository is selected")))}function mh(e,t,n,o=!0){if(null==e.ids)return[0,void 0];const r=vh(n),i=r?.id;if(null==i)return[0,void 0];let s,a,l;const c=e.ids[i];if(null!=c&&(s=c.i,a=i,l=s),null==s){const t=null!=r?.date?r.date+(o?1:-1):void 0;if(null==t)return[0,void 0];let n,i,c,d;for([i,{date:c,i:n}]of Object.entries(e.ids))o?c<t&&(null==d||c>d)&&(a=i,d=c,l=n):c>t&&(null==d||c<=d)&&(a=i,d=c,l=n);s=null==l?e.count-1:l+(o?-1:1)}return s=gh(s,o,e,t),s===l?[s,a]:[s,void 0]}function gh(e,t,n,o){return t?e<n.count-1?e++:e=null!=o&&n?.paging?.hasMore?-1:0:e>0?e--:e=null!=o&&n?.paging?.hasMore?-1:n.count-1,e}function bh(e,t){const{ids:n}=e;for(const e in n)if(n[e].i===t)return e}function vh(e){if(null==e)return;const[t,n]=e.split("|");return{id:t,date:Number(n)}}function yh(e){let t,n;return null!=e.searchResults&&("error"in e.searchResults?n=e.searchResults:t=e.searchResults),{results:t,resultsError:n}}function wh(e){return new Date(e).setHours(0,0,0,0)}const Ch=new Map([["--vscode-gitlens-graphLane1Color","#15a0bf"],["--vscode-gitlens-graphLane2Color","#0669f7"],["--vscode-gitlens-graphLane3Color","#8e00c2"],["--vscode-gitlens-graphLane4Color","#c517b6"],["--vscode-gitlens-graphLane5Color","#d90171"],["--vscode-gitlens-graphLane6Color","#cd0101"],["--vscode-gitlens-graphLane7Color","#f25d2e"],["--vscode-gitlens-graphLane8Color","#f2ca33"],["--vscode-gitlens-graphLane9Color","#7bd938"],["--vscode-gitlens-graphLane10Color","#2ece9d"]]);class xh extends Ne{constructor(){super("GraphApp")}onBind(){const e=super.onBind?.()??[];this.log("onBind()"),this.ensureTheming(this.state);const o=document.getElementById("root");return null!=o&&((0,n.render)(t().createElement(fh,{nonce:this.state.nonce,state:this.state,subscriber:e=>this.registerEvents(e),onColumnsChange:ce((e=>this.onColumnsChanged(e)),250),onDimMergeCommits:e=>this.onDimMergeCommits(e),onRefsVisibilityChange:(e,t)=>this.onRefsVisibilityChanged(e,t),onChooseRepository:ce((()=>this.onChooseRepository()),250),onDoubleClickRef:(e,t)=>this.onDoubleClickRef(e,t),onDoubleClickRow:(e,t)=>this.onDoubleClickRow(e,t),onMissingAvatars:(...e)=>this.onGetMissingAvatars(...e),onMissingRefsMetadata:(...e)=>this.onGetMissingRefsMetadata(...e),onMoreRows:(...e)=>this.onGetMoreRows(...e),onSearch:ce(((e,t)=>this.onSearch(e,t)),250),onSearchPromise:(...e)=>this.onSearchPromise(...e),onSearchOpenInView:(...e)=>this.onSearchOpenInView(...e),onSelectionChange:ce((e=>this.onSelectionChanged(e)),250),onEnsureRowPromise:this.onEnsureRowPromise.bind(this),onExcludeType:this.onExcludeType.bind(this),onIncludeOnlyRef:this.onIncludeOnlyRef.bind(this),onUpdateGraphConfiguration:this.onUpdateGraphConfiguration.bind(this)}),o),e.push({dispose:()=>(0,n.unmountComponentAtNode)(o)})),e}onMessageReceived(e){const t=e.data;switch(this.log(`onMessageReceived(${t.id}): name=${t.method}`),t.method){case R.method:l(R,t,((e,t)=>{this.setState({...this.state,...e.state},t)}));break;case B.method:l(B,t,((e,t)=>{this.state.lastFetched=e.lastFetched,this.setState(this.state,t)}));break;case O.method:l(O,t,((e,t)=>{this.state.avatars=e.avatars,this.setState(this.state,t)}));break;case $.method:l($,t,(e=>{window.dispatchEvent(new CustomEvent(e.focused?"webview-focus":"webview-blur"))}));break;case A.method:l(A,t,((e,t)=>{this.state.windowFocused=e.focused,this.setState(this.state,t)}));break;case M.method:l(M,t,((e,t)=>{this.state.columns=e.columns,this.state.context={...this.state.context,header:e.context,settings:e.settingsContext},this.setState(this.state,t)}));break;case N.method:l(N,t,((e,t)=>{this.state.excludeRefs=e.excludeRefs,this.state.excludeTypes=e.excludeTypes,this.state.includeOnlyRefs=e.includeOnlyRefs,this.setState(this.state,t)}));break;case I.method:l(I,t,((e,t)=>{this.state.refsMetadata=e.metadata,this.setState(this.state,t)}));break;case P.method:l(P,t,((e,n)=>{let o;if(e.rows.length&&null!=e.paging?.startingCursor&&null!=this.state.rows){const n=this.state.rows,r=n[n.length-1]?.sha;let i=n.length;const s=e.rows.length;if(this.log(`onMessageReceived(${t.id}:${t.method}): paging in ${s} rows into existing ${i} rows at ${e.paging.startingCursor} (last existing row: ${r})`),o=[],o.length=i+s,e.paging.startingCursor!==r){this.log(`onMessageReceived(${t.id}:${t.method}): searching for ${e.paging.startingCursor} in existing rows`);let r,a=0;for(r of n)if(o[a++]=r,r.sha===e.paging.startingCursor){this.log(`onMessageReceived(${t.id}:${t.method}): found ${e.paging.startingCursor} in existing rows`),i=a,i!==n.length&&(o.length=i+s);break}}else for(let e=0;e<i;e++)o[e]=n[e];for(let t=0;t<s;t++)o[i+t]=e.rows[t]}else this.log(`onMessageReceived(${t.id}:${t.method}): setting to ${e.rows.length} rows`),o=0===e.rows.length?this.state.rows:e.rows;this.state.avatars=e.avatars,this.state.downstreams=e.downstreams,void 0!==e.refsMetadata&&(this.state.refsMetadata=e.refsMetadata),this.state.rows=o,this.state.paging=e.paging,null!=e.rowsStats&&(this.state.rowsStats={...this.state.rowsStats,...e.rowsStats}),this.state.rowsStatsLoading=e.rowsStatsLoading,null!=e.selectedRows&&(this.state.selectedRows=e.selectedRows),this.state.loading=!1,this.setState(this.state,n)}));break;case z.method:l(z,t,((e,t)=>{this.state.rowsStats={...this.state.rowsStats,...e.rowsStats},this.state.rowsStatsLoading=e.rowsStatsLoading,this.setState(this.state,t)}));break;case D.method:l(D,t,((e,t)=>{this.state.context={...this.state.context,settings:e.context},this.setState(this.state,t)}));break;case G.method:l(G,t,((e,t)=>{this.state.searchResults=e.results,null!=e.selectedRows&&(this.state.selectedRows=e.selectedRows),this.setState(this.state,t)}));break;case H.method:l(H,t,((e,t)=>{this.state.selectedRows=e.selection,this.setState(this.state,t)}));break;case k.method:l(k,t,((e,t)=>{this.state.config=e.config,this.setState(this.state,t)}));break;case E.method:l(E,t,((e,t)=>{this.state.subscription=e.subscription,this.state.allowed=e.allowed,this.setState(this.state,t)}));break;case L.method:l(L,t,((e,t)=>{this.state.workingTreeStats=e.stats,this.setState(this.state,t)}));break;default:super.onMessageReceived?.(e)}}onThemeUpdated(e){const t=document.documentElement.style;t.setProperty("--graph-theme-opacity-factor",e.isLightTheme?"0.5":"1"),t.setProperty("--color-graph-actionbar-background",e.isLightTheme?j(e.colors.background,5):V(e.colors.background,5)),t.setProperty("--color-graph-background",e.isLightTheme?j(e.colors.background,5):V(e.colors.background,5)),t.setProperty("--color-graph-background2",e.isLightTheme?j(e.colors.background,10):V(e.colors.background,10));const n=J("--color-graph-text-selected-row",e.computedStyle);t.setProperty("--color-graph-text-dimmed-selected",Z(n,50)),t.setProperty("--color-graph-text-dimmed",Z(e.colors.foreground,20)),t.setProperty("--color-graph-text-normal",Z(e.colors.foreground,85)),t.setProperty("--color-graph-text-secondary",Z(e.colors.foreground,65)),t.setProperty("--color-graph-text-disabled",Z(e.colors.foreground,50));const o=te.from(e.colors.background),r=te.from(e.colors.foreground),i=o.getRelativeLuminance(),s=r.getRelativeLuminance(),a=e=>{let t,n;s>i?(n=s,t=i):(t=s,n=i);return e/1*(n-t)+t};let l=te.fromCssVariable("--vscode-scrollbarSlider-background",e.computedStyle);t.setProperty("--color-graph-minimap-visibleAreaBackground",l.luminance(a(e.isLightTheme?.6:.1)).toString()),e.isLightTheme||(l=te.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBackground",l.luminance(a(.55)).toString()),l=te.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBorder",l.luminance(a(.55)).toString()),l=te.fromCssVariable("--vscode-editor-foreground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchForeground",l.isLighter()?l.luminance(.01).toString():l.luminance(.99).toString()),l=te.fromCssVariable("--vscode-editor-foreground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-headForeground",l.isLighter()?l.luminance(.01).toString():l.luminance(.99).toString()),l=te.fromCssVariable("--vscode-editor-foreground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-upstreamForeground",l.isLighter()?l.luminance(.01).toString():l.luminance(.99).toString()));const c=a(e.isLightTheme?.72:.064),d=a(e.isLightTheme?.64:.076),h=a(e.isLightTheme?.92:.02);l=te.fromCssVariable("--branch-status-ahead-foreground",e.computedStyle),t.setProperty("--branch-status-ahead-background",l.luminance(c).toString()),t.setProperty("--branch-status-ahead-hover-background",l.luminance(d).toString()),t.setProperty("--branch-status-ahead-pill-background",l.luminance(h).toString()),l=te.fromCssVariable("--branch-status-behind-foreground",e.computedStyle),t.setProperty("--branch-status-behind-background",l.luminance(c).toString()),t.setProperty("--branch-status-behind-hover-background",l.luminance(d).toString()),t.setProperty("--branch-status-behind-pill-background",l.luminance(h).toString()),l=te.fromCssVariable("--branch-status-both-foreground",e.computedStyle),t.setProperty("--branch-status-both-background",l.luminance(c).toString()),t.setProperty("--branch-status-both-hover-background",l.luminance(d).toString()),t.setProperty("--branch-status-both-pill-background",l.luminance(h).toString()),e.isInitializing||(this.state.theming=void 0,this.setState(this.state,"didChangeTheme"))}setState(e,t){this.log("setState()");const n=this.ensureTheming(e);this.state=e,super.setState({timestamp:e.timestamp,selectedRepository:e.selectedRepository}),this.callback?.(this.state,t,n)}ensureTheming(e){return null==e.theming&&(e.theming=this.getGraphTheming(),!0)}getGraphTheming(){const e=window.getComputedStyle(document.documentElement),t=J("--color-background",e),n={};let o,r=0;for(const[i,s]of Ch){o=J(i,e)||s,n[`--column-${r}-color`]=o,n[`--graph-color-${r}`]=o;for(const e of[15,25,45,50])n[`--graph-color-${r}-bg${e}`]=q(t,o,e);for(const e of[10,50])n[`--graph-color-${r}-f${e}`]=Z(o,e);r++}const i=document.body.classList.contains("vscode-high-contrast");return{cssVariables:{"--app__bg0":t,"--panel__bg0":J("--color-graph-background",e),"--panel__bg1":J("--color-graph-background2",e),"--section-border":J("--color-graph-background2",e),"--selected-row":J("--color-graph-selected-row",e),"--selected-row-border":i?`1px solid ${J("--color-graph-contrast-border",e)}`:"none","--hover-row":J("--color-graph-hover-row",e),"--hover-row-border":i?`1px dashed ${J("--color-graph-contrast-border",e)}`:"none","--scrollable-scrollbar-thickness":J("--graph-column-scrollbar-thickness",e),"--scroll-thumb-bg":J("--vscode-scrollbarSlider-background",e),"--scroll-marker-head-color":J("--color-graph-scroll-marker-head",e),"--scroll-marker-upstream-color":J("--color-graph-scroll-marker-upstream",e),"--scroll-marker-highlights-color":J("--color-graph-scroll-marker-highlights",e),"--scroll-marker-local-branches-color":J("--color-graph-scroll-marker-local-branches",e),"--scroll-marker-remote-branches-color":J("--color-graph-scroll-marker-remote-branches",e),"--scroll-marker-stashes-color":J("--color-graph-scroll-marker-stashes",e),"--scroll-marker-tags-color":J("--color-graph-scroll-marker-tags",e),"--scroll-marker-selection-color":J("--color-graph-scroll-marker-selection",e),"--stats-added-color":J("--color-graph-stats-added",e),"--stats-deleted-color":J("--color-graph-stats-deleted",e),"--stats-files-color":J("--color-graph-stats-files",e),"--stats-bar-border-radius":J("--graph-stats-bar-border-radius",e),"--stats-bar-height":J("--graph-stats-bar-height",e),"--text-selected":J("--color-graph-text-selected",e),"--text-selected-row":J("--color-graph-text-selected-row",e),"--text-hovered":J("--color-graph-text-hovered",e),"--text-dimmed-selected":J("--color-graph-text-dimmed-selected",e),"--text-dimmed":J("--color-graph-text-dimmed",e),"--text-normal":J("--color-graph-text-normal",e),"--text-secondary":J("--color-graph-text-secondary",e),"--text-disabled":J("--color-graph-text-disabled",e),"--text-accent":J("--color-link-foreground",e),"--text-inverse":J("--vscode-input-background",e),"--text-bright":J("--vscode-input-background",e),...n},themeOpacityFactor:parseInt(J("--graph-theme-opacity-factor",e))||1}}onColumnsChanged(e){this.sendCommand(w,{config:e})}onRefsVisibilityChanged(e,t){this.sendCommand(C,{refs:e,visible:t})}onChooseRepository(){this.sendCommand(h,void 0)}onDimMergeCommits(e){this.sendCommand(u,{dim:e})}onDoubleClickRef(e,t){this.sendCommand(p,{type:"ref",ref:e,metadata:t})}onDoubleClickRow(e,t){this.sendCommand(p,{type:"row",row:{id:e.sha,type:e.type},preserveFocus:t})}onGetMissingAvatars(e){this.sendCommand(m,{emails:e})}onGetMissingRefsMetadata(e){this.sendCommand(g,{metadata:e})}onGetMoreRows(e){this.sendCommand(b,{id:e})}onSearch(e,t){null==e&&(this.state.searchResults=void 0),this.sendCommand(v,{search:e,limit:t?.limit})}async onSearchPromise(e,t){try{return await this.sendCommandWithCompletion(v,{search:e,limit:t?.limit,more:t?.more},G)}catch{return}}onSearchOpenInView(e){this.sendCommand(y,{search:e})}async onEnsureRowPromise(e,t){try{return await this.sendCommandWithCompletion(f,{id:e,select:t},F)}catch{return}}onExcludeType(e,t){this.sendCommand(x,{key:e,value:t})}onIncludeOnlyRef(e){this.sendCommand(_,e?{}:{refs:[{id:"HEAD",type:"head",name:"HEAD"}]})}onUpdateGraphConfiguration(e){this.sendCommand(S,{changes:e})}onSelectionChanged(e){const t=e.filter((e=>null!=e)).map((e=>({id:e.sha,type:e.type})));this.sendCommand(T,{selection:t})}registerEvents(e){return this.callback=e,()=>{this.callback=void 0}}}new xh})();var i=r.q;export{i as GraphApp};