var e={6544:e=>{var t={408:(e,t)=>{var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),f=Symbol.iterator,p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,g={};function m(e,t,o){this.props=e,this.context=t,this.refs=g,this.updater=o||p}function v(){}function y(e,t,o){this.props=e,this.context=t,this.refs=g,this.updater=o||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var w=y.prototype=new v;w.constructor=y,b(w,m.prototype),w.isPureReactComponent=!0;var k=Array.isArray,_=Object.prototype.hasOwnProperty,x={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var i,r={},s=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)_.call(t,i)&&!$.hasOwnProperty(i)&&(r[i]=t[i]);var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){for(var l=Array(c),h=0;h<c;h++)l[h]=arguments[h+2];r.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===r[i]&&(r[i]=c[i]);return{$$typeof:o,type:e,key:s,ref:a,props:r,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,i,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case n:c=!0}}if(c)return s=s(c=e),e=""===r?"."+E(c,0):r,k(s)?(i="",null!=e&&(i=e.replace(S,"$&/")+"/"),T(s,t,i,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,i+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",k(e))for(var l=0;l<e.length;l++){var h=r+E(a=e[l],l);c+=T(a,t,i,h,s)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),l=0;!(a=e.next()).done;)c+=T(a=a.value,t,i,h=r+E(a,l++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,o){if(null==e)return e;var n=[],i=0;return T(e,n,"","",(function(e){return t.call(o,e,i++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},M={transition:null},N={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:M,ReactCurrentOwner:x};t.Children={map:P,forEach:function(e,t,o){P(e,(function(){t.apply(this,arguments)}),o)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=i,t.Profiler=s,t.PureComponent=y,t.StrictMode=r,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=b({},e.props),r=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=x.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)_.call(t,l)&&!$.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){c=Array(l);for(var h=0;h<l;h++)c[h]=arguments[h+2];i.children=c}return{$$typeof:o,type:e.type,key:r,ref:s,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=A,t.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,o){return R.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,o){return R.current.useReducer(e,t,o)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return R.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return R.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{n.r(i),n.d(i,{AdditionsDeletions:()=>kt,Avatar:()=>Ot,AvatarGroup:()=>Rt,Badge:()=>Dt,Button:()=>Ut,ComplexityIndicator:()=>qt,FocusContainer:()=>uo,FocusItem:()=>co,FocusRow:()=>lo,FocusView:()=>ho,GkAdditionsDeletions:()=>St,GkAvatar:()=>Mt,GkAvatarGroup:()=>Nt,GkBadge:()=>Lt,GkButton:()=>jt,GkComplexityIndicator:()=>Vt,GkFocusItem:()=>fo,GkFocusRow:()=>po,GkFocusRowContainer:()=>bo,GkMenu:()=>Eo,GkMenuItem:()=>To,GkMenuLabel:()=>Po,GkRelativeDate:()=>io,GkTag:()=>Mo,GkTooltip:()=>No,Input:()=>ko,Menu:()=>Ao,MenuItem:()=>Co,MenuLabel:()=>So,Popover:()=>mt,RelativeDate:()=>no,Tag:()=>Ro,Tooltip:()=>yt,defineGkElement:()=>Bo,elementBaseStyles:()=>ge,focusOutlineStyle:()=>be,screenReaderStyles:()=>pe});const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class s{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=r.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(o,e))}return e}toString(){return this.cssText}}const a=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new s(n,e,o)},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e;var l;const h=window,d=h.trustedTypes,u=d?d.emptyScript:"",f=h.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},b=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:b},m="finalized";class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var o;const n=null!==(o=this.shadowRoot)&&void 0!==o?o:this.attachShadow(this.constructor.shadowRootOptions);return((o,n)=>{t?o.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),i=e.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=g){var n;const i=this.constructor._$Ep(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:p).toAttribute(t,o.type);this._$El=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$El=null}}_$AK(e,t){var o;const n=this.constructor,i=n._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=n.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:p;this._$El=i,this[i]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||b)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var y;v[m]=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:v}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.3");const w=window,k=w.trustedTypes,_=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,A="?"+$,C=`<${A}>`,S=document,E=()=>S.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,O="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,N=/>/g,B=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,F=/^(?:script|style|textarea|title)$/i,I=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),U=I(1),j=(I(2),Symbol.for("lit-noChange")),H=Symbol.for("lit-nothing"),z=new WeakMap,q=S.createTreeWalker(S,129,null,!1);function V(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==_?_.createHTML(t):t}class W{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const s=e.length-1,a=this.parts,[c,l]=((e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",s=R;for(let t=0;t<o;t++){const o=e[t];let a,c,l=-1,h=0;for(;h<o.length&&(s.lastIndex=h,c=s.exec(o),null!==c);)h=s.lastIndex,s===R?"!--"===c[1]?s=M:void 0!==c[1]?s=N:void 0!==c[2]?(F.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=B):void 0!==c[3]&&(s=B):s===B?">"===c[0]?(s=null!=i?i:R,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?B:'"'===c[3]?L:D):s===L||s===D?s=B:s===M||s===N?s=R:(s=B,i=void 0);const d=s===B&&e[t+1].startsWith("/>")?" ":"";r+=s===R?o+C:l>=0?(n.push(a),o.slice(0,l)+x+o.slice(l)+$+d):o+$+(-2===l?(n.push(void 0),t):d)}return[V(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]})(e,t);if(this.el=W.createElement(c,o),q.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=q.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(x)||t.startsWith($)){const o=l[r++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+x).split($),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?Z:"?"===t[1]?X:"@"===t[1]?ee:K})}else a.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(F.test(n.tagName)){const e=n.textContent.split($),t=e.length-1;if(t>0){n.textContent=k?k.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],E()),q.nextNode(),a.push({type:2,index:++i});n.append(e[t],E())}}}else if(8===n.nodeType)if(n.data===A)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf($,e+1));)a.push({type:7,index:i}),e+=$.length-1}i++}}static createElement(e,t){const o=S.createElement("template");return o.innerHTML=e,o}}function G(e,t,o=e,n){var i,r,s,a;if(t===j)return t;let c=void 0!==n?null===(i=o._$Co)||void 0===i?void 0:i[n]:o._$Cl;const l=T(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(s=(a=o)._$Co)&&void 0!==s?s:a._$Co=[])[n]=c:o._$Cl=c),void 0!==c&&(t=G(e,c._$AS(e,t.values),c,n)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(o,!0);q.currentNode=i;let r=q.nextNode(),s=0,a=0,c=n[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new Q(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new te(r,this,e)),this._$AV.push(t),c=n[++a]}s!==(null==c?void 0:c.index)&&(r=q.nextNode(),s++)}return q.currentNode=S,i}v(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Q{constructor(e,t,o,n){var i;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),T(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==j&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>P(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==H&&T(this._$AH)?this._$AA.nextSibling.data=e:this.$(S.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=W.createElement(V(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(o);else{const e=new Y(i,this),t=e.u(this.options);e.v(o),this.$(t),this._$AH=e}}_$AC(e){let t=z.get(e.strings);return void 0===t&&z.set(e.strings,t=new W(e)),t}T(e){P(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new Q(this.k(E()),this.k(E()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class K{constructor(e,t,o,n,i){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=G(this,e,t,0),r=!T(e)||e!==this._$AH&&e!==j,r&&(this._$AH=e);else{const n=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=G(this,n[o+s],t,s),a===j&&(a=this._$AH[s]),r||(r=!T(a)||a!==this._$AH[s]),a===H?e=H:e!==H&&(e+=(null!=a?a:"")+i[s+1]),this._$AH[s]=a}r&&!n&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Z extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}}const J=k?k.emptyScript:"";class X extends K{constructor(){super(...arguments),this.type=4}j(e){e&&e!==H?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class ee extends K{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=G(this,e,t,0))&&void 0!==o?o:H)===j)return;const n=this._$AH,i=e===H&&n!==H||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==H&&(n===H||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class te{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const oe=w.litHtmlPolyfillSupport;var ne,ie;null==oe||oe(W,Q),(null!==(y=w.litHtmlVersions)&&void 0!==y?y:w.litHtmlVersions=[]).push("2.8.0");class re extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,i;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let s=r._$litPart$;if(void 0===s){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=s=new Q(t.insertBefore(E(),e),e,void 0,null!=o?o:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return j}}re.finalized=!0,re._$litElement$=!0,null===(ne=globalThis.litElementHydrateSupport)||void 0===ne||ne.call(globalThis,{LitElement:re});const se=globalThis.litElementPolyfillSupport;null==se||se({LitElement:re}),(null!==(ie=globalThis.litElementVersions)&&void 0!==ie?ie:globalThis.litElementVersions=[]).push("3.3.3");const ae=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function ce(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):ae(e,t)}const le=({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,r=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(r.finisher=function(t){e(t,n)}),r}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}};function he(e,t){return le({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}var de;const ue=null!=(null===(de=window.HTMLSlotElement)||void 0===de?void 0:de.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));class fe extends re{}const pe=a`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,be=a``,ge=a`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,me=Math.min,ve=Math.max,ye=Math.round,we=(Math.floor,e=>({x:e,y:e})),ke={left:"right",right:"left",bottom:"top",top:"bottom"},_e={start:"end",end:"start"};function xe(e,t,o){return ve(e,me(t,o))}function $e(e,t){return"function"==typeof e?e(t):e}function Ae(e){return e.split("-")[0]}function Ce(e){return e.split("-")[1]}function Se(e){return"x"===e?"y":"x"}function Ee(e){return"y"===e?"height":"width"}function Te(e){return["top","bottom"].includes(Ae(e))?"y":"x"}function Pe(e){return Se(Te(e))}function Oe(e){return e.replace(/start|end/g,(e=>_e[e]))}function Re(e){return e.replace(/left|right|bottom|top/g,(e=>ke[e]))}function Me(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Ne(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Be(e,t,o){let{reference:n,floating:i}=e;const r=Te(t),s=Pe(t),a=Ee(s),c=Ae(t),l="y"===r,h=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,u=n[a]/2-i[a]/2;let f;switch(c){case"top":f={x:h,y:n.y-i.height};break;case"bottom":f={x:h,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:d};break;case"left":f={x:n.x-i.width,y:d};break;default:f={x:n.x,y:n.y}}switch(Ce(t)){case"start":f[s]-=u*(o&&l?-1:1);break;case"end":f[s]+=u*(o&&l?-1:1)}return f}async function De(e,t){var o;void 0===t&&(t={});const{x:n,y:i,platform:r,rects:s,elements:a,strategy:c}=e,{boundary:l="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:f=0}=$e(t,e),p=Me(f),b=a[u?"floating"===d?"reference":"floating":d],g=Ne(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(b)))||o?b:b.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:l,rootBoundary:h,strategy:c})),m="floating"===d?{...s.floating,x:n,y:i}:s.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),y=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},w=Ne(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,offsetParent:v,strategy:c}):m);return{top:(g.top-w.top+p.top)/y.y,bottom:(w.bottom-g.bottom+p.bottom)/y.y,left:(g.left-w.left+p.left)/y.x,right:(w.right-g.right+p.right)/y.x}}const Le=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o;const{placement:n,middlewareData:i,rects:r,initialPlacement:s,platform:a,elements:c}=t,{mainAxis:l=!0,crossAxis:h=!0,fallbackPlacements:d,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:p=!0,...b}=$e(e,t),g=Ae(n),m=Ae(s)===s,v=await(null==a.isRTL?void 0:a.isRTL(c.floating)),y=d||(m||!p?[Re(s)]:function(e){const t=Re(e);return[Oe(e),t,Oe(t)]}(s));d||"none"===f||y.push(...function(e,t,o,n){const i=Ce(e);let r=function(e,t,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:n:t?n:i;case"left":case"right":return t?r:s;default:return[]}}(Ae(e),"start"===o,n);return i&&(r=r.map((e=>e+"-"+i)),t&&(r=r.concat(r.map(Oe)))),r}(s,p,f,v));const w=[s,...y],k=await De(t,b),_=[];let x=(null==(o=i.flip)?void 0:o.overflows)||[];if(l&&_.push(k[g]),h){const e=function(e,t,o){void 0===o&&(o=!1);const n=Ce(e),i=Pe(e),r=Ee(i);let s="x"===i?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=Re(s)),[s,Re(s)]}(n,r,v);_.push(k[e[0]],k[e[1]])}if(x=[...x,{placement:n,overflows:_}],!_.every((e=>e<=0))){var $,A;const e=((null==($=i.flip)?void 0:$.index)||0)+1,t=w[e];if(t)return{data:{index:e,overflows:x},reset:{placement:t}};let o=null==(A=x.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:A.placement;if(!o)switch(u){case"bestFit":{var C;const e=null==(C=x.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:C[0];e&&(o=e);break}case"initialPlacement":o=s}if(n!==o)return{reset:{placement:o}}}return{}}}},Fe=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:n}=t,i=await async function(e,t){const{placement:o,platform:n,elements:i}=e,r=await(null==n.isRTL?void 0:n.isRTL(i.floating)),s=Ae(o),a=Ce(o),c="y"===Te(o),l=["left","top"].includes(s)?-1:1,h=r&&c?-1:1,d=$e(t,e);let{mainAxis:u,crossAxis:f,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&"number"==typeof p&&(f="end"===a?-1*p:p),c?{x:f*h,y:u*l}:{x:u*l,y:f*h}}(t,e);return{x:o+i.x,y:n+i.y,data:i}}}};function Ie(e){return He(e)?(e.nodeName||"").toLowerCase():"#document"}function Ue(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function je(e){var t;return null==(t=(He(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function He(e){return e instanceof Node||e instanceof Ue(e).Node}function ze(e){return e instanceof Element||e instanceof Ue(e).Element}function qe(e){return e instanceof HTMLElement||e instanceof Ue(e).HTMLElement}function Ve(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Ue(e).ShadowRoot)}function We(e){const{overflow:t,overflowX:o,overflowY:n,display:i}=Ze(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(i)}function Ge(e){return["table","td","th"].includes(Ie(e))}function Ye(e){const t=Qe(),o=Ze(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Qe(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ke(e){return["html","body","#document"].includes(Ie(e))}function Ze(e){return Ue(e).getComputedStyle(e)}function Je(e){return ze(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Xe(e){if("html"===Ie(e))return e;const t=e.assignedSlot||e.parentNode||Ve(e)&&e.host||je(e);return Ve(t)?t.host:t}function et(e){const t=Xe(e);return Ke(t)?e.ownerDocument?e.ownerDocument.body:e.body:qe(t)&&We(t)?t:et(t)}function tt(e,t){var o;void 0===t&&(t=[]);const n=et(e),i=n===(null==(o=e.ownerDocument)?void 0:o.body),r=Ue(n);return i?t.concat(r,r.visualViewport||[],We(n)?n:[]):t.concat(n,tt(n))}function ot(e){const t=Ze(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=qe(e),r=i?e.offsetWidth:o,s=i?e.offsetHeight:n,a=ye(o)!==r||ye(n)!==s;return a&&(o=r,n=s),{width:o,height:n,$:a}}function nt(e){return ze(e)?e:e.contextElement}function it(e){const t=nt(e);if(!qe(t))return we(1);const o=t.getBoundingClientRect(),{width:n,height:i,$:r}=ot(t);let s=(r?ye(o.width):o.width)/n,a=(r?ye(o.height):o.height)/i;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}const rt=we(0);function st(e){const t=Ue(e);return Qe()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:rt}function at(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const i=e.getBoundingClientRect(),r=nt(e);let s=we(1);t&&(n?ze(n)&&(s=it(n)):s=it(e));const a=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==Ue(e))&&t}(r,o,n)?st(r):we(0);let c=(i.left+a.x)/s.x,l=(i.top+a.y)/s.y,h=i.width/s.x,d=i.height/s.y;if(r){const e=Ue(r),t=n&&ze(n)?Ue(n):n;let o=e.frameElement;for(;o&&n&&t!==e;){const e=it(o),t=o.getBoundingClientRect(),n=Ze(o),i=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,r=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;c*=e.x,l*=e.y,h*=e.x,d*=e.y,c+=i,l+=r,o=Ue(o).frameElement}}return Ne({width:h,height:d,x:c,y:l})}function ct(e){return at(je(e)).left+Je(e).scrollLeft}function lt(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=Ue(e),n=je(e),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,a=0,c=0;if(i){r=i.width,s=i.height;const e=Qe();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:a,y:c}}(e,o);else if("document"===t)n=function(e){const t=je(e),o=Je(e),n=e.ownerDocument.body,i=ve(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=ve(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+ct(e);const a=-o.scrollTop;return"rtl"===Ze(n).direction&&(s+=ve(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:a}}(je(e));else if(ze(t))n=function(e,t){const o=at(e,!0,"fixed"===t),n=o.top+e.clientTop,i=o.left+e.clientLeft,r=qe(e)?it(e):we(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:i*r.x,y:n*r.y}}(t,o);else{const o=st(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return Ne(n)}function ht(e,t){const o=Xe(e);return!(o===t||!ze(o)||Ke(o))&&("fixed"===Ze(o).position||ht(o,t))}function dt(e,t,o){const n=qe(t),i=je(t),r="fixed"===o,s=at(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const c=we(0);if(n||!n&&!r)if(("body"!==Ie(t)||We(i))&&(a=Je(t)),n){const e=at(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&(c.x=ct(i));return{x:s.left+a.scrollLeft-c.x,y:s.top+a.scrollTop-c.y,width:s.width,height:s.height}}function ut(e,t){return qe(e)&&"fixed"!==Ze(e).position?t?t(e):e.offsetParent:null}function ft(e,t){const o=Ue(e);if(!qe(e))return o;let n=ut(e,t);for(;n&&Ge(n)&&"static"===Ze(n).position;)n=ut(n,t);return n&&("html"===Ie(n)||"body"===Ie(n)&&"static"===Ze(n).position&&!Ye(n))?o:n||function(e){let t=Xe(e);for(;qe(t)&&!Ke(t);){if(Ye(t))return t;t=Xe(t)}return null}(e)||o}const pt={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:n}=e;const i=qe(o),r=je(o);if(o===r)return t;let s={scrollLeft:0,scrollTop:0},a=we(1);const c=we(0);if((i||!i&&"fixed"!==n)&&(("body"!==Ie(o)||We(r))&&(s=Je(o)),qe(o))){const e=at(o);a=it(o),c.x=e.x+o.clientLeft,c.y=e.y+o.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-s.scrollLeft*a.x+c.x,y:t.y*a.y-s.scrollTop*a.y+c.y}},getDocumentElement:je,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const r=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let n=tt(e).filter((e=>ze(e)&&"body"!==Ie(e))),i=null;const r="fixed"===Ze(e).position;let s=r?Xe(e):e;for(;ze(s)&&!Ke(s);){const t=Ze(s),o=Ye(s);o||"fixed"!==t.position||(i=null),(r?!o&&!i:!o&&"static"===t.position&&i&&["absolute","fixed"].includes(i.position)||We(s)&&!o&&ht(e,s))?n=n.filter((e=>e!==s)):i=t,s=Xe(s)}return t.set(e,n),n}(t,this._c):[].concat(o),n],s=r[0],a=r.reduce(((e,o)=>{const n=lt(t,o,i);return e.top=ve(n.top,e.top),e.right=me(n.right,e.right),e.bottom=me(n.bottom,e.bottom),e.left=ve(n.left,e.left),e}),lt(t,s,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:ft,getElementRects:async function(e){let{reference:t,floating:o,strategy:n}=e;const i=this.getOffsetParent||ft,r=this.getDimensions;return{reference:dt(t,await i(o),n),floating:{x:0,y:0,...await r(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return ot(e)},getScale:it,isElement:ze,isRTL:function(e){return"rtl"===Ze(e).direction}},bt=a`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var gt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class mt extends fe{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[ge,pe,bt]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Fe(6),Le(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=$e(t,e),l={x:o,y:n},h=await De(e,c),d=Te(Ae(i)),u=Se(d);let f=l[u],p=l[d];if(r){const e="y"===u?"bottom":"right";f=xe(f+h["y"===u?"top":"left"],f,f-h[e])}if(s){const e="y"===d?"bottom":"right";p=xe(p+h["y"===d?"top":"left"],p,p-h[e])}const b=a.fn({...e,[u]:f,[d]:p});return{...b,data:{x:b.x-o,y:b.y-n}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:i,rects:r,platform:s,elements:a}=t,{element:c,padding:l=0}=$e(e,t)||{};if(null==c)return{};const h=Me(l),d={x:o,y:n},u=Pe(i),f=Ee(u),p=await s.getDimensions(c),b="y"===u,g=b?"top":"left",m=b?"bottom":"right",v=b?"clientHeight":"clientWidth",y=r.reference[f]+r.reference[u]-d[u]-r.floating[f],w=d[u]-r.reference[u],k=await(null==s.getOffsetParent?void 0:s.getOffsetParent(c));let _=k?k[v]:0;_&&await(null==s.isElement?void 0:s.isElement(k))||(_=a.floating[v]||r.floating[f]);const x=y/2-w/2,$=_/2-p[f]/2-1,A=me(h[g],$),C=me(h[m],$),S=A,E=_-p[f]-C,T=_/2-p[f]/2+x,P=xe(S,T,E),O=null!=Ce(i)&&T!=P&&r.reference[f]/2-(T<S?A:C)-p[f]/2<0?T<S?S-T:E-T:0;return{[u]:d[u]-O,data:{[u]:P,centerOffset:T-P+O}}}}))({element:this.arrowEl})),await((e,t,o)=>{const n=new Map,i={platform:pt,...o},r={...i.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,a=r.filter(Boolean),c=await(null==s.isRTL?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=Be(l,n,c),u=n,f={},p=0;for(let o=0;o<a.length;o++){const{name:r,fn:b}=a[o],{x:g,y:m,data:v,reset:y}=await b({x:h,y:d,initialPlacement:n,placement:u,strategy:i,middlewareData:f,rects:l,platform:s,elements:{reference:e,floating:t}});h=null!=g?g:h,d=null!=m?m:d,f={...f,[r]:{...f[r],...v}},y&&p<=50&&(p++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(l=!0===y.rects?await s.getElementRects({reference:e,floating:t,strategy:i}):y.rects),({x:h,y:d}=Be(l,u,c))),o=-1)}return{x:h,y:d,placement:u,strategy:i,middlewareData:f}})(e,t,{...i,platform:r})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:o,middlewareData:n})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=n.arrow?.x,t=n.arrow?.y,i={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[i]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?U`<div part="arrow" class="arrow"></div>`:""}render(){return U`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}gt([ce({type:Boolean})],mt.prototype,"arrow",void 0),gt([ce({type:Boolean})],mt.prototype,"hover",void 0),gt([ce()],mt.prototype,"placement",void 0),gt([ce({attribute:"popover-id"})],mt.prototype,"popoverId",void 0),gt([ce({attribute:"sr-visible",type:Boolean})],mt.prototype,"srVisible",void 0),gt([he('slot[name="trigger"]')],mt.prototype,"triggerSlot",void 0),gt([he(".popover")],mt.prototype,"popoverEl",void 0),gt([he(".arrow")],mt.prototype,"arrowEl",void 0),gt([ce({state:!0})],mt.prototype,"open",void 0);const vt=a`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size,14px);font-weight:var(--gk-tooltip-font-weight,bold);padding:var(--gk-tooltip-padding,10px 16px);width:max-content}`;class yt extends fe{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[ge,pe,vt]}static{this.elementName="gk-tooltip"}static{this.components=[mt]}render(){return U`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([ce({attribute:"sr-visible",type:Boolean})],yt.prototype,"srVisible",void 0);const wt=a`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class kt extends fe{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=wt}static{this.elementName="gk-additions-deletions"}static{this.components=[yt]}render(){return U`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([ce({attribute:"tooltip-text"})],kt.prototype,"tooltipText",void 0);const _t=new Set(["children","localName","ref","style","className"]),xt=new WeakMap,$t=(e,t,o,n,i)=>{const r=null==i?void 0:i[t];void 0===r||o===n?null==o&&t in HTMLElement.prototype?e.removeAttribute(t):e[t]=o:((e,t,o)=>{let n=xt.get(e);void 0===n&&xt.set(e,n=new Map);let i=n.get(t);void 0!==o?void 0===i?(n.set(t,i={handleEvent:o}),e.addEventListener(t,i)):i.handleEvent=o:void 0!==i&&(n.delete(t),e.removeEventListener(t,i))})(e,r,o)};function At(e=window.React,t,o,n,i){let r,s,a;if(void 0===t){const t=e;({tagName:s,elementClass:a,events:n,displayName:i}=t),r=t.react}else r=e,a=o,s=t;const c=r.Component,l=r.createElement,h=new Set(Object.keys(null!=n?n:{}));class d extends c{constructor(){super(...arguments),this.o=null}t(e){if(null!==this.o)for(const t in this.i)$t(this.o,t,this.props[t],e?e[t]:void 0,n)}componentDidMount(){var e;this.t(),null===(e=this.o)||void 0===e||e.removeAttribute("defer-hydration")}componentDidUpdate(e){this.t(e)}render(){const{_$Gl:e,...t}=this.props;this.h!==e&&(this.u=t=>{null!==e&&((e,t)=>{"function"==typeof e?e(t):e.current=t})(e,t),this.o=t,this.h=e}),this.i={};const o={ref:this.u};for(const[e,n]of Object.entries(t))_t.has(e)?o["className"===e?"class":e]=n:h.has(e)||e in a.prototype?this.i[e]=n:o[e]=n;return o.suppressHydrationWarning=!0,l(s,o)}}d.displayName=null!=i?i:a.name;const u=r.forwardRef(((e,t)=>l(d,{...e,_$Gl:t},null==e?void 0:e.children)));return u.displayName=d.displayName,u}var Ct=n(294);const St=At({react:Ct,tagName:"gk-additions-deletions",elementClass:kt}),Et=a`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size,11px);line-height:var(--gk-avatar-size,30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,Tt=a`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Pt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class Ot extends fe{static{this.styles=[ge,Et]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?U`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:U`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Pt([ce()],Ot.prototype,"src",void 0),Pt([ce()],Ot.prototype,"indicator",void 0);class Rt extends fe{static{this.elementName="gk-avatar-group"}static{this.styles=[ge,Tt]}render(){return U`<slot class="avatar-group" part="base"></slot>`}}const Mt=At({react:Ct,tagName:"gk-avatar",elementClass:Ot}),Nt=At({react:Ct,tagName:"gk-avatar-group",elementClass:Rt}),Bt=a`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size,12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Dt extends fe{constructor(){super(...arguments),this.variant="outline"}static{this.styles=Bt}static{this.elementName="gk-badge"}render(){return U`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([ce()],Dt.prototype,"variant",void 0);const Lt=At({react:Ct,tagName:"gk-badge",elementClass:Dt}),Ft=a`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var It=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class Ut extends fe{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Ft}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return U`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}It([ce({type:Boolean,reflect:!0})],Ut.prototype,"disabled",void 0),It([ce({reflect:!0})],Ut.prototype,"type",void 0),It([ce()],Ut.prototype,"variant",void 0);const jt=At({react:Ct,tagName:"gk-button",elementClass:Ut,events:{onClick:"click"}}),Ht=a`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var zt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class qt extends fe{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[ge,pe,Ht]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return U`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>U`<span class="complexity-indicator__box"></span>`))}</div>`}}zt([ce({type:Number})],qt.prototype,"level",void 0),zt([ce()],qt.prototype,"label",void 0);const Vt=At({react:Ct,tagName:"gk-complexity-indicator",elementClass:qt}),Wt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Gt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Yt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Qt;const Kt=new Map;let Zt,Jt,Xt;new Map;const eo=["th","st","nd","rd"];function to(e){const t=e%100;return`${e}${eo[(t-20)%10]??eo[t]??eo[0]}`}var oo=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class no extends fe{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[ge]}static{this.elementName="gk-date-from"}static{this.components=[yt]}get relativeTime(){return function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,t,n,i]of Yt){const r=Math.abs(o);if(r>=t||1e3===t)return null==Qt&&(null!=Xt?Qt=Xt.resolvedOptions().locale:null!=Jt?Qt=Jt.resolvedOptions().locale:(Xt=new Intl.RelativeTimeFormat(Zt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Qt=Xt.resolvedOptions().locale)),"en"===Qt||Qt?.startsWith("en-")?`${Math.round(r/n)}${i}`:(null==Xt&&(Xt=new Intl.RelativeTimeFormat(Zt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Xt.format(Math.round(o/n),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return U`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,o,n=!0){const i=`${o??""}:${t=t??void 0}`;let r=Kt.get(i);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Gt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Wt))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let s;s=null==o?Zt:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(s,e),n&&Kt.set(i,r)}if(null==t||Gt.test(t))return r.format(e);function s(e){const t=`${o??""}:time:${e}`;let i=Kt.get(t);if(null==i){const r={localeMatcher:"best fit",timeStyle:e};let s;s=null==o?Zt:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(s,r),n&&Kt.set(t,i)}return i}const a=r.formatToParts(e);return t.replace(Wt,((t,o,n,i,r,c,l,h,d,u,f,p,b,g,m)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in m){const o=m[t];if(null==o)continue;const n=a.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return to(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=s("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??n)?.value??""}`}return n?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}oo([ce({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],no.prototype,"date",void 0),oo([ce()],no.prototype,"format",void 0);const io=At({react:Ct,tagName:"gk-date-from",elementClass:no}),ro=a`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,so=a`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,ao=a`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class co extends fe{static{this.styles=[ge,ao]}static{this.elementName="gk-focus-item"}render(){return U`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class lo extends fe{static{this.styles=[ge,so]}static{this.elementName="gk-focus-row"}render(){return U`<div class="row" part="row"><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class ho extends fe{static{this.styles=a`div{color:var(--gk-color-primary)}`}static{this.elementName="gk-focus-view"}render(){return U`<div>Hello, World</div>`}}class uo extends fe{static{this.styles=[ge,so,ao,ro]}static{this.elementName="gk-focus-container"}render(){return U`<div class="row row--heading"><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const fo=At({react:Ct,tagName:"gk-focus-item",elementClass:co}),po=At({react:Ct,tagName:"gk-focus-row",elementClass:lo}),bo=At({react:Ct,tagName:"gk-focus-container",elementClass:uo});class go{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const mo=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends go{constructor(e){var t;if(super(e),1!==e.type||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var o,n;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(o=this.nt)||void 0===o?void 0:o.has(e))&&this.it.add(e);return this.render(t)}const i=e.element.classList;this.it.forEach((e=>{e in t||(i.remove(e),this.it.delete(e))}));for(const e in t){const o=!!t[e];o===this.it.has(e)||(null===(n=this.nt)||void 0===n?void 0:n.has(e))||(o?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return j}}),vo=e=>null!=e?e:H,yo=a`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var wo=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class ko extends fe{static{this.formAssociated=!0}static{this.styles=[ge,pe,yo]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="",this.internals=this.attachInternals()}firstUpdated(){this.internals.setFormValue(this.value)}render(){return U`<div class="field"><label class="${mo({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${mo({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${vo(this.autocomplete)}" autocorrect="${vo(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${vo(this.name)}" part="input" placeholder="${vo(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals.setFormValue(this.value)}}wo([ce()],ko.prototype,"autocomplete",void 0),wo([ce()],ko.prototype,"autocorrect",void 0),wo([ce({type:Boolean,reflect:!0})],ko.prototype,"disabled",void 0),wo([ce()],ko.prototype,"label",void 0),wo([ce({attribute:"label-visibility"})],ko.prototype,"labelVisibility",void 0),wo([ce()],ko.prototype,"name",void 0),wo([ce()],ko.prototype,"placeholder",void 0),wo([ce({type:Boolean,reflect:!0})],ko.prototype,"required",void 0),wo([ce({reflect:!0})],ko.prototype,"type",void 0),wo([ce()],ko.prototype,"value",void 0);const _o=a`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,xo=a`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size,12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,$o=a`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size,12px);font-weight:700;padding:5px 6px}`;class Ao extends fe{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[ge,_o]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),o=t.length;let n=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?n=(n-1+o)%o:"ArrowDown"===e.key?n=(n+1)%o:"Home"===e.key?n=0:"End"===e.key&&(n=o-1),this._setCurrentItem(t[n]),t[n].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return U`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([function(e){const{slot:t,selector:o}=null!=e?e:{};return le({descriptor:n=>({get(){var n;const i="slot"+(t?`[name=${t}]`:":not([name])"),r=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(i),s=null!=r?ue(r,e):[];return o?s.filter((e=>e.matches(o))):s},enumerable:!0,configurable:!0})})}({flatten:!0})],Ao.prototype,"slotChildren",void 0);class Co extends fe{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[ge,xo]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return U`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([ce({type:Boolean,reflect:!0})],Co.prototype,"disabled",void 0);class So extends fe{static{this.styles=[ge,$o]}static{this.elementName="gk-menu-label"}render(){return U`<slot class="menu-label" part="base"></slot>`}}const Eo=At({react:Ct,tagName:"gk-menu",elementClass:Ao,events:{onClick:"click"}}),To=At({react:Ct,tagName:"gk-menu-item",elementClass:Co}),Po=At({react:Ct,tagName:"gk-menu-label",elementClass:So}),Oo=a`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Ro extends fe{static{this.styles=[ge,Oo]}static{this.elementName="gk-tag"}render(){return U`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([ce()],Ro.prototype,"variant",void 0);const Mo=At({react:Ct,tagName:"gk-tag",elementClass:Ro}),No=At({react:Ct,tagName:"gk-tooltip",elementClass:yt});function Bo(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&Bo(...e.components))}))}})(),e.exports=i}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),void 0!==o&&Object.defineProperty(o,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var n={};(()=>{o.d(n,{S:()=>ni});class e{constructor(e,t=!1){this.method=e,this.reset=t}}class t extends e{}class i extends e{}function r(e,t,o){e.method===t.method&&o(t.params,e)}const s=new t("webview/ready"),a=new t("webview/focus");new t("command/execute"),new t("configuration/preview"),new t("configuration/update"),new i("configuration/didChange"),new i("configuration/didPreview"),new i("webview/didOpenAnchor");const c=new t("focus/pr/openWorktree"),l=new t("focus/pr/openBranch"),h=new t("focus/pr/switchToBranch"),d=new i("focus/didChange",!0);function u(e,t){let o,n,i,r,s;function a(e){const o=e-(n??0);return null==n||o>=t||o<0}function c(){const e=Date.now();if(a(e))l();else{s=setTimeout(c,t-(e-(n??0)))}}function l(){return s=void 0,o?function(){const t=o,n=i;return o=i=void 0,r=e.apply(n,t),r}():(o=i=void 0,r)}function h(...e){const l=Date.now(),h=a(l);return o=e,i=this,n=l,h&&null==s?(s=setTimeout(c,t),r):(null==s&&(s=setTimeout(c,t)),r)}return h.cancel=function(){null!=s&&clearTimeout(s),o=n=i=s=void 0},h.flush=function(){return null!=s?l():r},h.pending=function(){return null!=s},h}var f=(e=>(e.Off="off",e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e))(f||{});const p="";const b=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel=f.Off}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=g(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=g(this._logLevel),e===f.Off?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??p}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??p}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??p}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??p}${this.toLoggableParams(!1,o)}\n${String(e)}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??p}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??p}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??p}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??p}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return p;const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:p}};function g(e){switch(e){case f.Off:return 0;case f.Error:return 1;case f.Warn:return 2;case f.Info:return 3;case f.Debug:return 4;default:return 0}}var m,v;(v=m||(m={})).on=function(e,t,o,n){let i=!1;if("string"==typeof e){const r=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,r,n??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,r,n??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,n??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,r,n??!1))}}},v.insertTemplate=function(e,t,o){const n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const n=o.bindings[e];null!=n&&(t.textContent=String(n))}}},v.resetSlot=function(e){e.replaceChildren(),e.className=""};var y=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(y||{});function w(e,t){const o=e+t,n=t<0?o<0?0:o:o>255?255:o;return Math.round(n)}function k(e,t){return _(e,-t)}function _(e,t){const o=function(e){const t=B(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[n,i,r,s]=o,a=255*t/100;return`rgba(${w(n,a)}, ${w(i,a)}, ${w(r,a)}, ${s})`}function x(e,t){const o=P.from(e);return null==o?e:o.transparent(t/100).toString()}function $(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class A{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=$(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class C{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=$(Math.max(Math.min(1,t),0),3),this.l=$(Math.max(Math.min(1,o),0),3),this.a=$(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=e.a,r=Math.max(t,o,n),s=Math.min(t,o,n);let a=0,c=0;const l=(s+r)/2,h=r-s;if(h>0){switch(c=Math.min(l<=.5?h/(2*l):h/(2-2*l),1),r){case t:a=(o-n)/h+(o<n?6:0);break;case o:a=(n-t)/h+2;break;case n:a=(t-o)/h+4}a*=60,a=Math.round(a)}return new C(a,c,l,i)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:i}=e;let r,s,a;if(0===o)r=s=a=n;else{const e=n<.5?n*(1+o):n+o-n*o,i=2*n-e;r=C._hue2rgb(i,e,t+1/3),s=C._hue2rgb(i,e,t),a=C._hue2rgb(i,e,t-1/3)}return new A(Math.round(255*r),Math.round(255*s),Math.round(255*a),i)}}class S{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=$(Math.max(Math.min(1,t),0),3),this.v=$(Math.max(Math.min(1,o),0),3),this.a=$(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=Math.max(t,o,n),r=i-Math.min(t,o,n),s=0===i?0:r/i;let a;return a=0===r?0:i===t?((o-n)/r%6+6)%6:i===o?(n-t)/r+2:(t-o)/r+4,new S(Math.round(60*a),s,i,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:i}=e,r=n*o,s=r*(1-Math.abs(t/60%2-1)),a=n-r;let[c,l,h]=[0,0,0];return t<60?(c=r,l=s):t<120?(c=s,l=r):t<180?(l=r,h=s):t<240?(l=s,h=r):t<300?(c=s,h=r):t<=360&&(c=r,h=s),c=Math.round(255*(c+a)),l=Math.round(255*(l+a)),h=Math.round(255*(h+a)),new A(c,l,h,i)}}function E(e,t){return t.getPropertyValue(e).trim()}const T=class e{static from(t){return t instanceof e?t:B(t)||e.red}static fromCssVariable(t,o){return B(E(t,o))||e.red}static fromHex(t){return D(t)||e.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:C.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:S.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof A)this.rgba=e;else if(e instanceof C)this._hsla=e,this.rgba=C.toRGBA(e);else{if(!(e instanceof S))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=S.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&A.equals(this.rgba,e.rgba)&&C.equals(this.hsla,e.hsla)&&S.equals(this.hsva,e.hsva))}getRelativeLuminance(){return $(.2126*e._relativeLuminanceForComponent(this.rgba.r)+.7152*e._relativeLuminanceForComponent(this.rgba.g)+.0722*e._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new P(new A(0,0,0,e.rgba.a));if(1===t)return new P(new A(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const i=(e,o)=>{const r=e.mix(o,.5),s=r.getRelativeLuminance();return Math.abs(t-s)<1e-7||!n--?r:s>t?i(e,r):i(r,o)},r=(o>t?i(P.black,e):i(e,P.white)).rgba;return new P(new A(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(t){return new e(new C(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new e(new C(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){const{r:o,g:n,b:i,a:r}=this.rgba;return new e(new A(o,n,i,r*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new e(new A(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){const o=t.rgba,n=this.rgba.a,i=o.a,r=n+i*(1-n);if(r<1e-6)return e.transparent;const s=this.rgba.r*n/r+o.r*i*(1-n)/r,a=this.rgba.g*n/r+o.g*i*(1-n)/r,c=this.rgba.b*n/r+o.b*i*(1-n)/r;return new e(new A(s,a,c,r))}mix(e,t){return function(e,t,o){const n=e.rgba,i=t.rgba;return new P(new A(n.r+o*(i.r-n.r),n.g+o*(i.g-n.g),n.b+o*(i.b-n.b),n.a+o*(i.a-n.a)))}(this,e,t)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;const{r:o,g:n,b:i,a:r}=this.rgba;return new e(new A(t.rgba.r-r*(t.rgba.r-o),t.rgba.g-r*(t.rgba.g-n),t.rgba.b-r*(t.rgba.b-i),1))}flatten(...t){const o=t.reduceRight(((t,o)=>e._flatten(o,t)));return e._flatten(this,o)}static _flatten(t,o){const n=1-t.rgba.a;return new e(new A(n*o.rgba.r+t.rgba.a*t.rgba.r,n*o.rgba.g+t.rgba.a*t.rgba.g,n*o.rgba.b+t.rgba.a*t.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return M(e);return O(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-n)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};T.white=new T(new A(255,255,255,1)),T.black=new T(new A(0,0,0,1)),T.red=new T(new A(255,0,0,1)),T.blue=new T(new A(0,0,255,1)),T.green=new T(new A(0,255,0,1)),T.cyan=new T(new A(0,255,255,1)),T.lightgrey=new T(new A(211,211,211,1)),T.transparent=new T(new A(0,0,0,0));let P=T;function O(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function R(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function M(e){return`#${R(e.rgba.r)}${R(e.rgba.g)}${R(e.rgba.b)}`}const N=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function B(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===y.Hash)return D(e);const t=N.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new P(new A(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new P(new C(n[0],n[1],n[2],n[3]))}return P.red}function D(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==y.Hash)return null;switch(t){case 7:{const t=16*L(e.charCodeAt(1))+L(e.charCodeAt(2)),o=16*L(e.charCodeAt(3))+L(e.charCodeAt(4)),n=16*L(e.charCodeAt(5))+L(e.charCodeAt(6));return new P(new A(t,o,n,1))}case 9:{const t=16*L(e.charCodeAt(1))+L(e.charCodeAt(2)),o=16*L(e.charCodeAt(3))+L(e.charCodeAt(4)),n=16*L(e.charCodeAt(5))+L(e.charCodeAt(6)),i=16*L(e.charCodeAt(7))+L(e.charCodeAt(8));return new P(new A(t,o,n,i/255))}case 4:{const t=L(e.charCodeAt(1)),o=L(e.charCodeAt(2)),n=L(e.charCodeAt(3));return new P(new A(16*t+t,16*o+o,16*n+n))}case 5:{const t=L(e.charCodeAt(1)),o=L(e.charCodeAt(2)),n=L(e.charCodeAt(3)),i=L(e.charCodeAt(4));return new P(new A(16*t+t,16*o+o,16*n+n,(16*i+i)/255))}default:return null}}function L(e){switch(e){case y.Digit0:return 0;case y.Digit1:return 1;case y.Digit2:return 2;case y.Digit3:return 3;case y.Digit4:return 4;case y.Digit5:return 5;case y.Digit6:return 6;case y.Digit7:return 7;case y.Digit8:return 8;case y.Digit9:return 9;case y.a:case y.A:return 10;case y.b:case y.B:return 11;case y.c:case y.C:return 12;case y.d:case y.D:return 13;case y.e:case y.E:return 14;case y.f:case y.F:return 15}return 0}const F=class e{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(t,o,n)=>{null==this.listeners&&(this.listeners=new z);const i=this.listeners.push(null==o?t:[t,o]),r={dispose:()=>{r.dispose=e._noop,this._disposed||i()}};return Array.isArray(n)&&n.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new z);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};F._noop=function(){};let I=F;const U={done:!0,value:void 0},j=class e{constructor(t){this.element=t,this.next=e.Undefined,this.prev=e.Undefined}};j.Undefined=new j(void 0);let H=j;class z{constructor(){this._first=H.Undefined,this._last=H.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===H.Undefined}clear(){this._first=H.Undefined,this._last=H.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new H(e);if(this._first===H.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===H.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===H.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==H.Undefined&&e.next!==H.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===H.Undefined&&e.next===H.Undefined?(this._first=H.Undefined,this._last=H.Undefined):e.next===H.Undefined?(this._last=this._last.prev,this._last.next=H.Undefined):e.prev===H.Undefined&&(this._first=this._first.next,this._first.prev=H.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===H.Undefined?U:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==H.Undefined;t=t.next)e.push(t.element);return e}}const q=new I,V=q.event;function W(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,i=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),r=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),s=t.style,a=E("--vscode-editor-background",o);let c=E("--vscode-editor-foreground",o);c||(c=E("--vscode-foreground",o));let l=E("--color-background",o);return s.setProperty("--color-background--lighten-05",_(l,5)),s.setProperty("--color-background--darken-05",k(l,5)),s.setProperty("--color-background--lighten-075",_(l,7.5)),s.setProperty("--color-background--darken-075",k(l,7.5)),s.setProperty("--color-background--lighten-10",_(l,10)),s.setProperty("--color-background--darken-10",k(l,10)),s.setProperty("--color-background--lighten-15",_(l,15)),s.setProperty("--color-background--darken-15",k(l,15)),s.setProperty("--color-background--lighten-30",_(l,30)),s.setProperty("--color-background--darken-30",k(l,30)),s.setProperty("--color-background--lighten-50",_(l,50)),s.setProperty("--color-background--darken-50",k(l,50)),l=E("--color-button-background",o),s.setProperty("--color-button-background--darken-30",k(l,30)),l=E("--color-highlight",o),s.setProperty("--color-highlight--75",x(l,75)),s.setProperty("--color-highlight--50",x(l,50)),s.setProperty("--color-highlight--25",x(l,25)),l=E("--color-button-secondary-background",o),s.setProperty("--color-button-secondary-background--darken-30",k(l,30)),l=E("--color-foreground",o),s.setProperty("--color-foreground--85",x(l,85)),s.setProperty("--color-foreground--75",x(l,75)),s.setProperty("--color-foreground--65",x(l,65)),s.setProperty("--color-foreground--50",x(l,50)),l=E("--color-link-foreground",o),s.setProperty("--color-link-foreground--darken-20",k(l,20)),s.setProperty("--color-link-foreground--lighten-20",_(l,20)),l=E("--color-alert-infoBackground",o),s.setProperty("--color-alert-infoHoverBackground",i?k(l,5):_(l,5)),l=E("--color-alert-warningBackground",o),s.setProperty("--color-alert-warningHoverBackground",i?k(l,5):_(l,5)),l=E("--color-alert-errorBackground",o),s.setProperty("--color-alert-errorHoverBackground",i?k(l,5):_(l,5)),l=i?k(a,5):_(a,5),s.setProperty("--color-alert-neutralBackground",l),s.setProperty("--color-alert-neutralHoverBackground",i?k(l,5):_(l,5)),{colors:{background:a,foreground:c},computedStyle:o,isLightTheme:i,isHighContrastTheme:r,isInitializing:null==e}}let G=0;function Y(){return 1073741824===G?G=1:G++,`webview:${G}`}class Q{constructor(e){this.appName=e;const t=[],o=W();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(V(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",b.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},f.Off),this.log("ctor()"),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{q.fire(W(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("ctor(): initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(m.on(window,"message",this.onMessageReceived.bind(this))),this.sendCommand(s,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(m.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=u((e=>{this.sendCommand(a,e)}),150);this.bindDisposables.push(m.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),m.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){b.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=Y();this.log(`sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){const n=Y();this.log(`sendCommandWithCompletion(${n}): name=${e.method}`);const i=new Promise(((e,t)=>{let i;const s=[m.on(window,"message",(t=>{r(o,t.data,(o=>{t.data.completionId===n&&(s.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=i&&(clearTimeout(i),i=void 0)}}];i=setTimeout((()=>{i=void 0,s.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${o.method}`))}),6e4)}));return this.postMessage({id:n,method:e.method,params:t,completionId:n}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}var K=o(6544);const Z=window,J=Z.ShadowRoot&&(void 0===Z.ShadyCSS||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),ee=new WeakMap;class te{constructor(e,t,o){if(this._$cssResult$=!0,o!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=ee.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ee.set(t,e))}return e}toString(){return this.cssText}}const oe=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new te(o,e,X)},ne=J?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new te("string"==typeof e?e:e+"",void 0,X))(t)})(e):e;var ie;const re=window,se=re.trustedTypes,ae=se?se.emptyScript:"",ce=re.reactiveElementPolyfillSupport,le={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},he=(e,t)=>t!==e&&(t==t||e==e),de={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:he},ue="finalized";class fe extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||de}static finalize(){if(this.hasOwnProperty(ue))return!1;this[ue]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(ne(e))}else void 0!==e&&t.push(ne(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{J?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),n=Z.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=de){var n;const i=this.constructor._$Ep(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:le).toAttribute(t,o.type);this._$El=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$El=null}}_$AK(e,t){var o;const n=this.constructor,i=n._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=n.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:le;this._$El=i,this[i]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||he)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var pe;fe[ue]=!0,fe.elementProperties=new Map,fe.elementStyles=[],fe.shadowRootOptions={mode:"open"},null==ce||ce({ReactiveElement:fe}),(null!==(ie=re.reactiveElementVersions)&&void 0!==ie?ie:re.reactiveElementVersions=[]).push("1.6.3");const be=window,ge=be.trustedTypes,me=ge?ge.createPolicy("lit-html",{createHTML:e=>e}):void 0,ve="$lit$",ye=`lit$${(Math.random()+"").slice(9)}$`,we="?"+ye,ke=`<${we}>`,_e=document,xe=()=>_e.createComment(""),$e=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Ae=Array.isArray,Ce=e=>Ae(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),Se="[ \t\n\f\r]",Ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,Pe=/>/g,Oe=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Re=/'/g,Me=/"/g,Ne=/^(?:script|style|textarea|title)$/i,Be=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),De=Be(1),Le=(Be(2),Symbol.for("lit-noChange")),Fe=Symbol.for("lit-nothing"),Ie=new WeakMap,Ue=_e.createTreeWalker(_e,129,null,!1);function je(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==me?me.createHTML(t):t}const He=(e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",s=Ee;for(let t=0;t<o;t++){const o=e[t];let a,c,l=-1,h=0;for(;h<o.length&&(s.lastIndex=h,c=s.exec(o),null!==c);)h=s.lastIndex,s===Ee?"!--"===c[1]?s=Te:void 0!==c[1]?s=Pe:void 0!==c[2]?(Ne.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Oe):void 0!==c[3]&&(s=Oe):s===Oe?">"===c[0]?(s=null!=i?i:Ee,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?Oe:'"'===c[3]?Me:Re):s===Me||s===Re?s=Oe:s===Te||s===Pe?s=Ee:(s=Oe,i=void 0);const d=s===Oe&&e[t+1].startsWith("/>")?" ":"";r+=s===Ee?o+ke:l>=0?(n.push(a),o.slice(0,l)+ve+o.slice(l)+ye+d):o+ye+(-2===l?(n.push(void 0),t):d)}return[je(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class ze{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const s=e.length-1,a=this.parts,[c,l]=He(e,t);if(this.el=ze.createElement(c,o),Ue.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=Ue.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(ve)||t.startsWith(ye)){const o=l[r++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+ve).split(ye),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?Ye:"?"===t[1]?Ke:"@"===t[1]?Ze:Ge})}else a.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(Ne.test(n.tagName)){const e=n.textContent.split(ye),t=e.length-1;if(t>0){n.textContent=ge?ge.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],xe()),Ue.nextNode(),a.push({type:2,index:++i});n.append(e[t],xe())}}}else if(8===n.nodeType)if(n.data===we)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(ye,e+1));)a.push({type:7,index:i}),e+=ye.length-1}i++}}static createElement(e,t){const o=_e.createElement("template");return o.innerHTML=e,o}}function qe(e,t,o=e,n){var i,r,s,a;if(t===Le)return t;let c=void 0!==n?null===(i=o._$Co)||void 0===i?void 0:i[n]:o._$Cl;const l=$e(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(s=(a=o)._$Co)&&void 0!==s?s:a._$Co=[])[n]=c:o._$Cl=c),void 0!==c&&(t=qe(e,c._$AS(e,t.values),c,n)),t}class Ve{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:_e).importNode(o,!0);Ue.currentNode=i;let r=Ue.nextNode(),s=0,a=0,c=n[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new We(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new Je(r,this,e)),this._$AV.push(t),c=n[++a]}s!==(null==c?void 0:c.index)&&(r=Ue.nextNode(),s++)}return Ue.currentNode=_e,i}v(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class We{constructor(e,t,o,n){var i;this.type=2,this._$AH=Fe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=qe(this,e,t),$e(e)?e===Fe||null==e||""===e?(this._$AH!==Fe&&this._$AR(),this._$AH=Fe):e!==this._$AH&&e!==Le&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Ce(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Fe&&$e(this._$AH)?this._$AA.nextSibling.data=e:this.$(_e.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=ze.createElement(je(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(o);else{const e=new Ve(i,this),t=e.u(this.options);e.v(o),this.$(t),this._$AH=e}}_$AC(e){let t=Ie.get(e.strings);return void 0===t&&Ie.set(e.strings,t=new ze(e)),t}T(e){Ae(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new We(this.k(xe()),this.k(xe()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Ge{constructor(e,t,o,n,i){this.type=1,this._$AH=Fe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Fe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=qe(this,e,t,0),r=!$e(e)||e!==this._$AH&&e!==Le,r&&(this._$AH=e);else{const n=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=qe(this,n[o+s],t,s),a===Le&&(a=this._$AH[s]),r||(r=!$e(a)||a!==this._$AH[s]),a===Fe?e=Fe:e!==Fe&&(e+=(null!=a?a:"")+i[s+1]),this._$AH[s]=a}r&&!n&&this.j(e)}j(e){e===Fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Ye extends Ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Fe?void 0:e}}const Qe=ge?ge.emptyScript:"";class Ke extends Ge{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Fe?this.element.setAttribute(this.name,Qe):this.element.removeAttribute(this.name)}}class Ze extends Ge{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=qe(this,e,t,0))&&void 0!==o?o:Fe)===Le)return;const n=this._$AH,i=e===Fe&&n!==Fe||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==Fe&&(n===Fe||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class Je{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){qe(this,e)}}const Xe={O:ve,P:ye,A:we,C:1,M:He,L:Ve,R:Ce,D:qe,I:We,V:Ge,H:Ke,N:Ze,U:Ye,F:Je},et=be.litHtmlPolyfillSupport;null==et||et(ze,We),(null!==(pe=be.litHtmlVersions)&&void 0!==pe?pe:be.litHtmlVersions=[]).push("2.8.0");var tt,ot;class nt extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,i;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let s=r._$litPart$;if(void 0===s){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=s=new We(t.insertBefore(xe(),e),e,void 0,null!=o?o:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return Le}}nt.finalized=!0,nt._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:nt});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:nt});(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.3.3");const rt=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){customElements.define(e,t)}}})(e,t),st=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}},at=(e,t,o)=>{t.constructor.createProperty(o,e)};function ct(e){return(t,o)=>void 0!==o?at(e,t,o):st(e,t)}function lt(e){return ct({...e,state:!0})}function ht(e,t){return(({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,r=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(r.finisher=function(t){e(t,n)}),r}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}})({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}var dt;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements;function*ut(e,t){if(void 0!==e){let o=0;for(const n of e)yield t(n,o++)}}const ft=2;class pt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:bt}=Xe,gt=()=>document.createComment(""),mt=(e,t,o)=>{var n;const i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(gt(),r),n=i.insertBefore(gt(),r);o=new bt(t,n,e,e.options)}else{const t=o._$AB.nextSibling,s=o._$AM,a=s!==e;if(a){let t;null===(n=o._$AQ)||void 0===n||n.call(o,e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==s._$AU&&o._$AP(t)}if(t!==r||a){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,r),e=t}}}return o},vt=(e,t,o=e)=>(e._$AI(t,o),e),yt={},wt=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let o=e._$AA;const n=e._$AB.nextSibling;for(;o!==n;){const e=o.nextSibling;o.remove(),o=e}},kt=(e,t,o)=>{const n=new Map;for(let i=t;i<=o;i++)n.set(e[i],i);return n},_t=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends pt{constructor(e){if(super(e),e.type!==ft)throw Error("repeat() can only be used in text expressions")}ct(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const i=[],r=[];let s=0;for(const t of e)i[s]=n?n(t,s):s,r[s]=o(t,s),s++;return{values:r,keys:i}}render(e,t,o){return this.ct(e,t,o).values}update(e,[t,o,n]){var i;const r=(e=>e._$AH)(e),{values:s,keys:a}=this.ct(t,o,n);if(!Array.isArray(r))return this.ut=a,s;const c=null!==(i=this.ut)&&void 0!==i?i:this.ut=[],l=[];let h,d,u=0,f=r.length-1,p=0,b=s.length-1;for(;u<=f&&p<=b;)if(null===r[u])u++;else if(null===r[f])f--;else if(c[u]===a[p])l[p]=vt(r[u],s[p]),u++,p++;else if(c[f]===a[b])l[b]=vt(r[f],s[b]),f--,b--;else if(c[u]===a[b])l[b]=vt(r[u],s[b]),mt(e,l[b+1],r[u]),u++,b--;else if(c[f]===a[p])l[p]=vt(r[f],s[p]),mt(e,r[u],r[f]),f--,p++;else if(void 0===h&&(h=kt(a,p,b),d=kt(c,u,f)),h.has(c[u]))if(h.has(c[f])){const t=d.get(a[p]),o=void 0!==t?r[t]:null;if(null===o){const t=mt(e,r[u]);vt(t,s[p]),l[p]=t}else l[p]=vt(o,s[p]),mt(e,r[u],o),r[t]=null;p++}else wt(r[f]),f--;else wt(r[u]),u++;for(;p<=b;){const t=mt(e,l[b+1]);vt(t,s[p]),l[p++]=t}for(;u<=f;){const e=r[u++];null!==e&&wt(e)}return this.ut=a,((e,t=yt)=>{e._$AH=t})(e,l),Le}});function xt(e,t,o){return e?t():null==o?void 0:o()}const $t=oe`
	:host {
		--gk-additions-color: var(--vscode-gitDecoration-addedResourceForeground);
		--gk-deletions-color: var(--vscode-gitDecoration-deletedResourceForeground);

		--gk-avatar-background-color: var(--background-10);
		--gk-tag-background-color: var(--background-10);
		--gk-text-secondary-color: var(--color-foreground--85);

		--gk-menu-border-color: var(--background-30);
		--gk-menu-background-color: var(--background-10);
		--gk-menu-item-background-color-hover: var(--background-15);
		--gk-menu-item-font-color-disabled: var(--color-foreground--50);

		--gk-button-ghost-color: var(--color-foreground);
		--gk-button-ghost-color-active: var(--color-foreground--85);
		--gk-button-ghost-color-disabled: var(--color-foreground--50);
		--gk-button-outline-color: var(--color-foreground);
		--gk-button-outline-color-active: var(--background-10);
		--gk-button-outline-color-disabled: var(--color-foreground--50);

		--gk-tooltip-background-color: var(--popover-bg); // var(--vscode-editorHoverWidget-background);
		--gk-tooltip-font-color: var(--color-foreground); // var(--vscode-editorHoverWidget-foreground);
		--gk-tooltip-font-weight: normal;
		--gk-tooltip-font-size: 1.2rem;
	}
`,At=(oe`
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
`,oe`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`),Ct=oe`
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
`;oe`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${At}
	}
	a:hover {
		text-decoration: underline;
	}
`;var St=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,Tt=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Et(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&St(t,o,r),r};let Pt=class extends nt{constructor(){super(...arguments),this.full=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}render(){const e=De`<slot></slot>`;return null!=this.href?De`<a href=${this.href}>${e}</a>`:e}};Pt.styles=[Ct,oe`
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
				${At}
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
		`],Tt([ct({type:Boolean,reflect:!0})],Pt.prototype,"full",2),Tt([ct()],Pt.prototype,"href",2),Tt([ct({reflect:!0})],Pt.prototype,"role",1),Tt([ct()],Pt.prototype,"appearance",2),Tt([ct({type:Number,reflect:!0})],Pt.prototype,"tabIndex",2),Pt=Tt([rt("gl-button")],Pt);var Ot=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,Mt=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Rt(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Ot(t,o,r),r};let Nt=class extends nt{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Nt.styles=oe`
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
	`,Mt([ct()],Nt.prototype,"icon",2),Mt([ct()],Nt.prototype,"modifier",2),Mt([ct({type:Number})],Nt.prototype,"size",2),Nt=Mt([rt("code-icon")],Nt);const Bt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Dt;let Lt,Ft,It;function Ut(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,i,r]of Bt){const s=Math.abs(o);if(s>=n||1e3===n){if(t){if(null==Dt&&(null!=It?Dt=It.resolvedOptions().locale:null!=Ft?Dt=Ft.resolvedOptions().locale:(It=new Intl.RelativeTimeFormat(Lt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Dt=It.resolvedOptions().locale)),"en"===Dt||Dt?.startsWith("en-")){return`${Math.round(s/i)}${r}`}return null==It&&(It=new Intl.RelativeTimeFormat(Lt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),It.format(Math.round(o/i),e)}return null==Ft&&(Ft=new Intl.RelativeTimeFormat(Lt,{localeMatcher:"best fit",numeric:"auto",style:"long"})),Ft.format(Math.round(o/i),e)}}return""}var jt=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.Paid=5]="Paid",e))(jt||{});function Ht(e){switch(e){case"free+":return"GitLens Free";case"pro":return"GitLens Pro";case"teams":return"GitLens Teams";case"enterprise":return"GitLens Enterprise";default:return"GitLens"}}function zt(e,t){return qt(e.plan.effective.expiresOn,t)}function qt(e,t){return null!=e?function(e,t,o){const n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(o){case"days":return Math.floor(n/864e5);case"hours":return Math.floor(n/36e5);case"minutes":return Math.floor(n/6e4);case"seconds":return Math.floor(n/1e3);default:return n}}(Date.now(),new Date(e),t):void 0}function Vt(e){return null!=e&&(5===e||1===e||3===e)}function Wt(e){return null!=e&&(1===e||3===e)}const Gt=oe`
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
`;var Yt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,Kt=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Qt(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Yt(t,o,r),r};let Zt=class extends nt{render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":Fe;switch(this.state){case jt.VerificationRequired:return De`
					<p>You must verify your email before you can continue.</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.resendVerification"
						>Resend verification email</gl-button
					>
					<gl-button appearance="${e}" href="command:gitlens.plus.validate"
						>Refresh verification status</gl-button
					>
				`;case jt.Free:return De`
					<gl-button appearance="${e}" href="command:gitlens.plus.startPreviewTrial"
						>Preview Now</gl-button
					>
					<p>
						Preview Pro for 3 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a> to start a full 7-day Pro trial.
					</p>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case jt.FreePreviewTrialExpired:return De`
					<p>
						Your 3-day Pro preview has ended, start a free Pro trial to get an additional 7 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a>.
					</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.loginOrSignUp"
						>Start Free Pro Trial</gl-button
					>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case jt.FreePlusTrialExpired:return De`
					<p>Your Pro trial has ended, please upgrade to continue to use this on privately hosted repos.</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.purchase"
						>Upgrade to Pro</gl-button
					>
					<p>✨ A paid plan is required to use this on privately hosted repos.</p>
				`}}};Zt.styles=[Gt,oe`
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
		`],Kt([ct({type:String})],Zt.prototype,"appearance",2),Kt([ct({attribute:!1,type:Number})],Zt.prototype,"state",2),Zt=Kt([rt("gk-feature-gate-plus-state")],Zt);var Jt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,eo=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Xt(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Jt(t,o,r),r};let to=class extends nt{render(){if(!this.visible||null!=this.state&&Vt(this.state))return void(this.hidden=!0);const e=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,De`
			<section>
				<slot>
					<slot name="feature" hidden=${this.state===jt.Free?Fe:""}></slot>
				</slot>
				<gk-feature-gate-plus-state appearance=${e} .state=${this.state}></gk-feature-gate-plus-state>
			</section>
		`}};to.styles=oe`
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
	`,eo([ct()],to.prototype,"appearance",2),eo([ct({attribute:!1,type:Number})],to.prototype,"state",2),eo([ct({type:Boolean})],to.prototype,"visible",2),to=eo([rt("gk-feature-gate")],to);const{fromCharCode:oo}=String;new TextEncoder;const no=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===no.trustedTypes&&(no.trustedTypes={createPolicy:(e,t)=>t});const io={configurable:!1,enumerable:!1,writable:!1};void 0===no.FAST&&Reflect.defineProperty(no,"FAST",Object.assign({value:Object.create(null)},io));const ro=no.FAST;if(void 0===ro.getById){const e=Object.create(null);Reflect.defineProperty(ro,"getById",Object.assign({value(t,o){let n=e[t];return void 0===n&&(n=o?e[t]=o():null),n}},io))}const so=Object.freeze([]);function ao(){const e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let n=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==n;)o=e.get(n),n=Reflect.getPrototypeOf(n);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}const co=no.FAST.getById(1,(()=>{const e=[],t=[];function o(){if(t.length)throw t.shift()}function n(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}function i(){let t=0;for(;t<e.length;)if(n(e[t]),t++,t>1024){for(let o=0,n=e.length-t;o<n;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&no.requestAnimationFrame(i),e.push(t)},process:i})})),lo=no.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let ho=lo;const uo=`fast-${Math.random().toString(36).substring(2,8)}`,fo=`${uo}{`,po=`}${uo}`,bo=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(ho!==lo)throw new Error("The HTML policy can only be set once.");ho=e},createHTML:e=>ho.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(uo),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${uo}:`,"")),createInterpolationPlaceholder:e=>`${fo}${e}${po}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${uo}:${e}--\x3e`,queueUpdate:co.enqueue,processUpdates:co.process,nextUpdate:()=>new Promise(co.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class go{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){const t=this.spillover,o=this.source;if(void 0===t){const t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==n&&n.handleChange(o,e)}else for(let n=0,i=t.length;n<i;++n)t[n].handleChange(o,e)}}class mo{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new go(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new go(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const vo=ro.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=bo.queueUpdate;let n,i=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=i(e):t.set(e,o=new mo(e))),o}const s=ao();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==n&&n.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,n=e[o];if(n!==t){e[o]=t;const i=e[this.callback];"function"==typeof i&&i.call(e,n,t),r(e).notify(this.name)}}}class c extends go{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const i=this.binding(e,t);return n=o,i}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,i=r(e),s=null===o?this.first:{};if(s.propertySource=e,s.propertyName=t,s.notifier=i,i.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;n=void 0,t=o.propertySource[o.propertyName],n=this,e===t&&(this.needsRefresh=!0)}o.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){i=e},getNotifier:r,track(e,t){void 0!==n&&n.watch(e,t)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(e,t){r(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),s(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:s,binding(e,t,o=this.isVolatileBinding(e)){return new c(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));function yo(e,t){vo.defineProperty(e,t)}function wo(e,t,o){return Object.assign({},o,{get:function(){return vo.trackVolatile(),o.get.apply(this)}})}const ko=ro.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class _o{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return ko.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){ko.set(e)}}vo.defineProperty(_o.prototype,"index"),vo.defineProperty(_o.prototype,"length");const xo=Object.seal(new _o);class $o{constructor(){this.targetIndex=0}}class Ao extends $o{constructor(){super(...arguments),this.createPlaceholder=bo.createInterpolationPlaceholder}}class Co extends $o{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return bo.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function So(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=vo.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function Eo(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function To(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Po(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function Oo(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Ro(e){bo.setAttribute(this.target,this.targetName,e)}function Mo(e){bo.setBooleanAttribute(this.target,this.targetName,e)}function No(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Bo(e){this.target[this.targetName]=e}function Do(e){const t=this.classVersions||Object.create(null),o=this.target;let n=this.version||0;if(null!=e&&e.length){const i=e.split(/\s+/);for(let e=0,r=i.length;e<r;++e){const r=i[e];""!==r&&(t[r]=n,o.classList.add(r))}}if(this.classVersions=t,this.version=n+1,0!==n){n-=1;for(const e in t)t[e]===n&&o.classList.remove(e)}}class Lo extends Ao{constructor(e){super(),this.binding=e,this.bind=So,this.unbind=To,this.updateTarget=Ro,this.isBindingVolatile=vo.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Bo,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>bo.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Mo;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Eo,this.unbind=Oo;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=Do)}}targetAtContent(){this.updateTarget=No,this.unbind=Po}createBehavior(e){return new Fo(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Fo{constructor(e,t,o,n,i,r,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=n,this.unbind=i,this.updateTarget=r,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){_o.setEvent(e);const t=this.binding(this.source,this.context);_o.setEvent(null),!0!==t&&e.preventDefault()}}let Io=null;class Uo{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Io=this}static borrow(e){const t=Io||new Uo;return t.directives=e,t.reset(),Io=null,t}}function jo(e){if(1===e.length)return e[0];let t;const o=e.length,n=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),i=new Lo(((e,t)=>{let i="";for(let r=0;r<o;++r)i+=n[r](e,t);return i}));return i.targetName=t,i}const Ho=po.length;function zo(e,t){const o=t.split(fo);if(1===o.length)return null;const n=[];for(let t=0,i=o.length;t<i;++t){const i=o[t],r=i.indexOf(po);let s;if(-1===r)s=i;else{const t=parseInt(i.substring(0,r));n.push(e.directives[t]),s=i.substring(r+Ho)}""!==s&&n.push(s)}return n}function qo(e,t,o=!1){const n=t.attributes;for(let i=0,r=n.length;i<r;++i){const s=n[i],a=s.value,c=zo(e,a);let l=null;null===c?o&&(l=new Lo((()=>a)),l.targetName=s.name):l=jo(c),null!==l&&(t.removeAttributeNode(s),i--,r--,e.addFactory(l))}}function Vo(e,t,o){const n=zo(e,t.textContent);if(null!==n){let i=t;for(let r=0,s=n.length;r<s;++r){const s=n[r],a=0===r?t:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",e.captureContentBinding(s)),i=a,e.targetIndex++,a!==t&&o.nextNode()}e.targetIndex--}}const Wo=document.createRange();class Go{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const o=e.parentNode;let n,i=this.firstChild;for(;i!==t;)n=i.nextSibling,o.insertBefore(i,e),i=n;o.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.appendChild(n),n=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.removeChild(n),n=o;e.removeChild(t);const i=this.behaviors,r=this.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(r)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const n=this.source;this.source=e,this.context=t;for(let i=0,r=o.length;i<r;++i){const r=o[i];r.unbind(n),r.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,i=o.length;n<i;++n)o[n].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,n=e.length;o<n;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Wo.setStartBefore(e[0].firstChild),Wo.setEndAfter(e[e.length-1].lastChild),Wo.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],n=o.behaviors,i=o.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(i)}}}}class Yo{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=bo.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const n=Uo.borrow(t);qo(n,e,!0);const i=n.behaviorFactories;n.reset();const r=bo.createTemplateWalker(o);let s;for(;s=r.nextNode();)switch(n.targetIndex++,s.nodeType){case 1:qo(n,s);break;case 3:Vo(n,s,r);break;case 8:bo.isMarker(s)&&n.addFactory(t[bo.extractDirectiveIndexFromMarker(s)])}let a=0;(bo.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),a=-1);const c=n.behaviorFactories;return n.release(),{fragment:o,viewBehaviorFactories:c,hostBehaviorFactories:i,targetOffset:a}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,n=new Array(this.behaviorCount),i=bo.createTemplateWalker(t);let r=0,s=this.targetOffset,a=i.nextNode();for(let e=o.length;r<e;++r){const e=o[r],t=e.targetIndex;for(;null!==a;){if(s===t){n[r]=e.createBehavior(a);break}a=i.nextNode(),s++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,i=t.length;o<i;++o,++r)n[r]=t[o].createBehavior(e)}return new Go(t,n)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const n=this.create(o);return n.bind(e,xo),n.appendTo(t),n}}const Qo=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Ko(e,...t){const o=[];let n="";for(let i=0,r=e.length-1;i<r;++i){const r=e[i];let s=t[i];if(n+=r,s instanceof Yo){const e=s;s=()=>e}if("function"==typeof s&&(s=new Lo(s)),s instanceof Ao){const e=Qo.exec(r);null!==e&&(s.targetName=e[2])}s instanceof $o?(n+=s.createPlaceholder(o.length),o.push(s)):n+=s}return n+=e[e.length-1],new Yo(n,o)}class Zo{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=vo.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(so),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Jo extends Zo{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Xo(e){return"string"==typeof e&&(e={property:e}),new Co("fast-slotted",Jo,e)}const en=e=>"function"==typeof e,tn=()=>null;function on(e){return void 0===e?tn:en(e)?e:()=>e}class nn{createCSS(){return""}createBehavior(){}}class rn{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function sn(e){return e.map((e=>e instanceof rn?sn(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function an(e){return e.map((e=>e instanceof rn?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}rn.create=(()=>{if(bo.supportsAdoptedStyleSheets){const e=new Map;return t=>new hn(t,e)}return e=>new un(e)})();let cn=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},ln=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(bo.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),cn=(e,t)=>{e.adoptedStyleSheets.push(...t)},ln=(e,t)=>{for(const o of t){const t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class hn extends rn{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=an(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=sn(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){cn(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){ln(e,this.styleSheets),super.removeStylesFrom(e)}}let dn=0;class un extends rn{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=an(e),this.styleSheets=sn(e),this.styleClass="fast-style-class-"+ ++dn}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const i=document.createElement("style");i.innerHTML=t[n],i.className=o,e.append(i)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,n=t.length;o<n;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}function fn(e,t){const o=[];let n="";const i=[];for(let r=0,s=e.length-1;r<s;++r){n+=e[r];let s=t[r];if(s instanceof nn){const e=s.createBehavior();s=s.createCSS(),e&&i.push(e)}s instanceof rn||s instanceof CSSStyleSheet?(""!==n.trim()&&(o.push(n),n=""),o.push(s)):n+=s}return n+=e[e.length-1],""!==n.trim()&&o.push(n),{styles:o,behaviors:i}}function pn(e,...t){const{styles:o,behaviors:n}=fn(e,t),i=rn.create(o);return n.length&&i.withBehaviors(...n),i}const bn=Object.freeze({locate:ao()}),gn={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e};class mn{constructor(e,t,o=t.toLowerCase(),n="reflect",i){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=n,this.converter=i,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===i&&(this.converter=gn)}setValue(e,t){const o=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return vo.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||bo.queueUpdate((()=>{o.add(e);const n=e[this.fieldName];switch(t){case"reflect":const t=this.converter;bo.setAttribute(e,this.attribute,void 0!==t?t.toView(n):n);break;case"boolean":bo.setBooleanAttribute(e,this.attribute,n)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(bn.locate(e));for(let n=0,i=t.length;n<i;++n){const i=t[n];if(void 0!==i)for(let t=0,n=i.length;t<n;++t){const n=i[t];"string"==typeof n?o.push(new mn(e,n)):o.push(new mn(e,n.property,n.attribute,n.mode,n.converter))}}return o}}function vn(e,t){let o;function n(e,t){arguments.length>1&&(o.property=t),bn.locate(e.constructor).push(o)}return arguments.length>1?(o={},void n(e,t)):(o=void 0===e?{}:e,n)}const yn={mode:"open"},wn={},kn=ro.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class _n{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=mn.collect(e,t.attributes),n=new Array(o.length),i={},r={};for(let e=0,t=o.length;e<t;++e){const t=o[e];n[e]=t.attribute,i[t.name]=t,r[t.attribute]=t}this.attributes=o,this.observedAttributes=n,this.propertyLookup=i,this.attributeLookup=r,this.shadowOptions=void 0===t.shadowOptions?yn:null===t.shadowOptions?void 0:Object.assign(Object.assign({},yn),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?wn:Object.assign(Object.assign({},wn),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?rn.create(t.styles):t.styles instanceof rn?t.styles:rn.create([t.styles])}get isDefined(){return!!kn.getByType(this.type)}define(e=customElements){const t=this.type;if(kn.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,n=e.length;t<n;++t)vo.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}_n.forType=kn.getByType;const xn=new WeakMap,$n={bubbles:!0,composed:!0,cancelable:!0};function An(e){return e.shadowRoot||xn.get(e)||null}class Cn extends mo{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&xn.set(e,t)}const n=vo.getAccessors(e);if(n.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,i=n.length;o<i;++o){const i=n[o].name,r=e[i];void 0!==r&&(delete e[i],t[i]=r)}}}get isConnected(){return vo.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,vo.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=An(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=An(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,n=[];for(let i=0;i<o;++i){const o=e[i];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),n.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,xo)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const n=e.length,i=[];for(let r=0;r<n;++r){const n=e[r];if(o.has(n)){const e=o.get(n)-1;0===e||t?o.delete(n)&&i.push(n):o.set(n,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,xo);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,xo);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},$n),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let n=0,i=o.length;n<i;++n){const i=o[n];e[i]=t[i]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=An(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||bo.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=_n.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new Cn(e,o)}}function Sn(e){return class extends e{constructor(){super(),Cn.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const En=Object.assign(Sn(HTMLElement),{from:e=>Sn(e),define:(e,t)=>new _n(e,t).define().type});function Tn(...e){return e.some((e=>(e?.length??0)>0))}const Pn=pn`
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
`;var On=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,Mn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Rn(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&On(t,o,r),r};const Nn=Ko`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${Xo("typeNodes")} name="type"></slot>
			<slot ${Xo("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${Xo("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${function(e,t,o){const n=en(e)?e:()=>e,i=on(t),r=on(o);return(e,t)=>n(e,t)?i(e,t):r(e,t)}((e=>e.caret),Ko`<span class="caret"></span>`)}
	</template>
`,Bn=pn`
	${Pn}

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
`;let Dn=class extends En{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return Tn(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return Tn(this.headingNodes)}};var Ln;Mn([vn({mode:"boolean"})],Dn.prototype,"open",2),Mn([vn({mode:"boolean"})],Dn.prototype,"caret",2),Mn([vn],Dn.prototype,"placement",2),Mn([yo],Dn.prototype,"typeNodes",2),Mn([yo],Dn.prototype,"actionsNodes",2),Mn([yo],Dn.prototype,"headingNodes",2),Mn([wo],Dn.prototype,"hasTopNodes",1),Mn([wo],Dn.prototype,"hasHeadingNodes",1),Dn=Mn([(Ln={name:"pop-over",template:Nn,styles:Bn},function(e){new _n(e,Ln).define()})],Dn);var Fn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,Un=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?In(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Fn(t,o,r),r};let jn=class extends nt{constructor(){super(...arguments),this.placement="top end"}render(){const e=Vt(this.subscription?.state),t=Wt(this.subscription?.state);return De`
			<span class="badge-container">
				<span class="badge ${e?"active":"inactive"}"
					>${t?De`<span class="badge-trial">Trial</span>`:""}✨</span
				>
				<pop-over .placement=${this.placement} class="badge-popover">
					<span slot="heading"
						>${function(e,t){switch(e){case 4:return Ht("free+");case 1:return`${Ht("pro")} (Trial)`;case 3:return`${Ht(t??"pro")} (Trial)`;case-1:return"GitLens (Unverified)";case 5:return Ht(t??"pro");default:return"GitLens"}}(this.subscription?.state,this.subscription?.plan.effective.id)}${this.trialHtml}</span
					>
					${this.footnoteHtml}
				</pop-over>
			</span>
		`}get trialHtml(){if(!Wt(this.subscription?.state))return Fe;const e=zt(this.subscription,"days")??0;return De`<span class="badge-trial-left">${e<1?"<1 day":function(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}("day",e)} left</span>`}get footnoteHtml(){switch(this.subscription?.state){case jt.VerificationRequired:case jt.Free:case jt.FreePreviewTrialExpired:return De`<span class="badge-footnote"
					>✨ Requires a trial or paid plan for use on privately hosted repos.</span
				>`;case jt.FreePlusTrialExpired:case jt.FreeInPreviewTrial:case jt.FreePlusInTrial:return De`<span class="badge-footnote"
					>✨ Requires a paid plan for use on privately hosted repos.</span
				>`;case jt.Paid:return De`<span class="badge-footnote"
					>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</span
				>`;default:return Fe}}};jn.styles=[Ct,oe`
			:host {
				position: relative;
			}

			:host(:focus) {
				${At}
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
		`],Un([ct({reflect:!0})],jn.prototype,"placement",2),Un([ct({attribute:!1})],jn.prototype,"subscription",2),jn=Un([rt("gk-feature-gate-badge")],jn);const Hn=oe`
	.repo-branch {
		display: flex;
		flex-direction: column;
		gap: 0 0.4rem;
	}

	@media (max-width: 720px) {
		.repo-branch {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	.repo-branch__tag {
		cursor: pointer;
	}
`,zn=oe`
	.indicator-warning {
		color: var(--vscode-problemsWarningIcon-foreground);
	}
	.indicator-danger {
		color: var(--vscode-problemsErrorIcon-foreground);
	}
`;function qn(e,t=new Date){const o=Math.floor((t.getTime()-e.getTime())/1e3);let n="ok";return Math.floor(o/31536e3)>=1||Math.floor(o/2592e3)>=1||Math.floor(o/604800)>=1?n="danger":Math.floor(o/86400)>=1&&(n="warning"),{label:Ut(e,!0),tooltip:Ut(e),status:n}}var Vn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Gn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Wn(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Vn(t,o,r),r};let Yn=class extends nt{constructor(){super(),this.isCurrentBranch=!1,this.isCurrentWorktree=!1,this.hasWorktree=!1,this.hasLocalBranch=!1,(0,K.defineGkElement)(K.Tag,K.FocusRow,K.FocusItem,K.AvatarGroup,K.Avatar,K.RelativeDate,K.AdditionsDeletions,K.Tooltip)}get lastUpdatedDate(){return new Date(this.pullRequest.date)}get assignees(){const e=this.pullRequest?.assignees;if(null==e)return[];const t=this.pullRequest.author;return null!=t?e.filter((e=>e.name!==t.name)):e}get indicator(){return null==this.pullRequest?"":"ChangesRequested"===this.pullRequest.reviewDecision?"changes":"Approved"===this.pullRequest.reviewDecision&&"Mergeable"===this.pullRequest.mergeableState?"ready":"Conflicting"===this.pullRequest.mergeableState?"conflicting":""}get dateStyle(){return`indicator-${qn(this.lastUpdatedDate).status}`}render(){if(this.pullRequest)return De`
			<gk-focus-row>
				<span slot="key" class="key">
					${xt("changes"===this.indicator,(()=>De`<gk-tooltip>
								<code-icon slot="trigger" class="indicator-error" icon="request-changes"></code-icon>
								<span>changes requested</span>
							</gk-tooltip>`))}
					${xt("ready"===this.indicator,(()=>De`<gk-tooltip>
								<code-icon slot="trigger" class="indicator-info" icon="pass"></code-icon>
								<span>approved and ready to merge</span>
							</gk-tooltip>`))}
					${xt("conflicting"===this.indicator,(()=>De`<gk-tooltip>
								<code-icon slot="trigger" class="indicator-error" icon="bracket-error"></code-icon>
								<span>cannot be merged due to merge conflicts</span>
							</gk-tooltip>`))}
				</span>
				<gk-focus-item>
					<p>
						<span class="title"
							>${this.pullRequest.title}
							<a href="${this.pullRequest.url}">#${this.pullRequest.id}</a></span
						>
						<!-- &nbsp;
						<gk-badge>pending suggestions</gk-badge> -->
					</p>
					<p>
						<gk-badge variant="outline" class="row-type">PR</gk-badge>
						<gk-additions-deletions class="add-delete">
							<span slot="additions">${this.pullRequest.additions}</span>
							<span slot="deletions">${this.pullRequest.deletions}</span>
						</gk-additions-deletions>
						<gk-tooltip>
							<gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="comment-discussion"></code-icon></span>
								${this.pullRequest.comments}
							</gk-tag>
							<span>Comments</span>
						</gk-tooltip>
					</p>
					<span slot="people">
						<gk-avatar-group>
							${xt(null!=this.pullRequest.author,(()=>De`<gk-avatar
										src="${this.pullRequest.author.avatarUrl}"
										title="${this.pullRequest.author.name} (author)"
									></gk-avatar>`))}
							${xt(this.assignees.length>0,(()=>De`
									${_t(this.assignees,(e=>e.url),(e=>De`<gk-avatar
												src="${e.avatarUrl}"
												title="${e.name?`${e.name} (assignee)`:"(assignee)"}"
											></gk-avatar>`))}
								`))}
						</gk-avatar-group>
					</span>
					<span slot="date">
						<gk-date-from class="date ${this.dateStyle}" date="${this.lastUpdatedDate}"></gk-date-from>
					</span>
					<div slot="repo" class="repo-branch">
						<gk-tag class="repo-branch__tag" full @click=${this.onOpenBranchClick}>
							<span slot="prefix"><code-icon icon="source-control"></code-icon></span>
							${!0===this.pullRequest.refs?.isCrossRepository?De`${this.pullRequest.refs?.head.owner}:${this.pullRequest.refs?.head.branch}`:this.pullRequest.refs?.head.branch}
						</gk-tag>
						<gk-tag variant="ghost" class="repo-branch__tag" full>
							<span slot="prefix"><code-icon icon="repo"></code-icon></span>
							${this.pullRequest.refs?.base.repo}
						</gk-tag>
					</div>
					<nav slot="actions" class="actions">
						<gk-tooltip>
							<a
								slot="trigger"
								href="#"
								tabindex="${this.isCurrentWorktree||this.isCurrentBranch?-1:Fe}"
								aria-label="${this.isCurrentWorktree?"Already on this worktree":"Open Worktree..."}"
								@click="${this.onOpenWorktreeClick}"
								><code-icon icon="gl-worktrees-view"></code-icon
							></a>
							<span
								>${this.isCurrentWorktree?"Already on this worktree":"Open Worktree..."}</span
							> </gk-tooltip
						><gk-tooltip>
							<a
								slot="trigger"
								href="#"
								tabindex="${this.hasWorktree||this.isCurrentBranch?-1:Fe}"
								aria-label="${this.isCurrentBranch?"Already on this branch":this.hasWorktree?"This branch has a worktree":"Switch to Branch..."}"
								@click="${this.onSwitchBranchClick}"
								><code-icon icon="gl-switch"></code-icon
							></a>
							<span
								>${this.isCurrentBranch?"Already on this branch":this.hasWorktree?"This branch has a worktree":"Switch to Branch..."}</span
							>
						</gk-tooltip>
					</nav>
				</gk-focus-item>
			</gk-focus-row>
		`}onOpenBranchClick(e){this.dispatchEvent(new CustomEvent("open-branch",{detail:this.pullRequest}))}onOpenWorktreeClick(e){if(this.isCurrentWorktree)return e.preventDefault(),void e.stopImmediatePropagation();this.dispatchEvent(new CustomEvent("open-worktree",{detail:this.pullRequest}))}onSwitchBranchClick(e){if(this.isCurrentBranch||this.hasWorktree)return e.preventDefault(),void e.stopImmediatePropagation();this.dispatchEvent(new CustomEvent("switch-branch",{detail:this.pullRequest}))}};Yn.styles=[$t,Ct,zn,Hn,oe`
			:host {
				display: block;
			}

			p {
				margin: 0;
			}

			a {
				color: var(--vscode-textLink-foreground);
				text-decoration: none;
			}
			a:hover {
				text-decoration: underline;
			}
			a:focus {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.actions gk-tooltip {
				display: inline-block;
			}

			.actions a {
				box-sizing: border-box;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				width: 3.2rem;
				height: 3.2rem;
				border-radius: 0.5rem;
				color: inherit;
				padding: 0.2rem;
				vertical-align: text-bottom;
				text-decoration: none;
				cursor: pointer;
			}
			.actions a:hover {
				background-color: var(--vscode-toolbar-hoverBackground);
			}
			.actions a:active {
				background-color: var(--vscode-toolbar-activeBackground);
			}
			.actions a[tabindex='-1'] {
				opacity: 0.5;
				cursor: default;
			}

			.actions a code-icon {
				font-size: 1.6rem;
			}

			.indicator-info {
				color: var(--vscode-problemsInfoIcon-foreground);
			}
			.indicator-warning {
				color: var(--vscode-problemsWarningIcon-foreground);
			}
			.indicator-error {
				color: var(--vscode-problemsErrorIcon-foreground);
			}
			.indicator-neutral {
				color: var(--color-alert-neutralBorder);
			}

			.row-type {
				--gk-badge-outline-padding: 0.3rem 0.8rem;
				--gk-badge-font-size: 1.1rem;
				opacity: 0.5;
				vertical-align: middle;
			}

			.title {
				font-size: 1.4rem;
			}

			.add-delete {
				margin-left: 0.4rem;
				margin-right: 0.2rem;
			}

			.key {
				z-index: 1;
				position: relative;
			}

			.date {
				display: inline-block;
				min-width: 1.6rem;
			}
		`],Gn([ct({type:Number})],Yn.prototype,"rank",2),Gn([ct({type:Object})],Yn.prototype,"pullRequest",2),Gn([ct({type:Boolean})],Yn.prototype,"isCurrentBranch",2),Gn([ct({type:Boolean})],Yn.prototype,"isCurrentWorktree",2),Gn([ct({type:Boolean})],Yn.prototype,"hasWorktree",2),Gn([ct({type:Boolean})],Yn.prototype,"hasLocalBranch",2),Yn=Gn([rt("gk-pull-request-row")],Yn);var Qn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,Zn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Kn(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Qn(t,o,r),r};let Jn=class extends nt{constructor(){super(),(0,K.defineGkElement)(K.Tag,K.FocusRow,K.FocusItem,K.AvatarGroup,K.Avatar,K.RelativeDate,K.Tooltip)}get lastUpdatedDate(){return new Date(this.issue.date)}get dateStyle(){return`indicator-${qn(this.lastUpdatedDate).status}`}get assignees(){const e=this.issue?.assignees;if(null==e)return[];const t=this.issue.author;return null!=t?e.filter((e=>e.avatarUrl!==t.avatarUrl)):e}render(){if(this.issue)return De`
			<gk-focus-row>
				<span slot="key"></span>
				<gk-focus-item>
					<p>
						<span class="title">${this.issue.title} <a href="${this.issue.url}">#${this.issue.id}</a></span>
						<!-- &nbsp;
						<gk-badge>pending suggestions</gk-badge> -->
					</p>
					<p>
						<gk-badge variant="outline" class="row-type">Issue</gk-badge>
						<gk-tooltip
							><gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="comment-discussion"></code-icon></span>
								${this.issue.commentsCount} </gk-tag
							><span>Comments</span></gk-tooltip
						>
						<gk-tooltip
							><gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="thumbsup"></code-icon></span>
								${this.issue.thumbsUpCount} </gk-tag
							><span>Thumbs Up</span></gk-tooltip
						>
					</p>
					<span slot="people">
						<gk-avatar-group>
							${xt(null!=this.issue.author,(()=>De`<gk-avatar
										src="${this.issue.author.avatarUrl}"
										title="${this.issue.author.name} (author)"
									></gk-avatar>`))}
							${xt(this.assignees.length>0,(()=>De`
									${_t(this.assignees,(e=>e.url),(e=>De`<gk-avatar
												src="${e.avatarUrl}"
												title="${e.name?`${e.name} `:""}(assignee)"
											></gk-avatar>`))}
								`))}
						</gk-avatar-group>
					</span>
					<span slot="date">
						<gk-date-from class="date ${this.dateStyle}" date="${this.lastUpdatedDate}"></gk-date-from>
					</span>
					<div slot="repo">
						<gk-tag variant="ghost" full>
							<span slot="prefix"><code-icon icon="repo"></code-icon></span>
							${this.issue.repository.repo}
						</gk-tag>
					</div>
					<nav slot="actions" class="actions">
						<gk-tooltip>
							<a slot="trigger" href="${this.issue.url}"><code-icon icon="globe"></code-icon></a>
							<span>Open issue on remote</span>
						</gk-tooltip>
					</nav>
				</gk-focus-item>
			</gk-focus-row>
		`}};Jn.styles=[$t,Ct,zn,Hn,oe`
			:host {
				display: block;
			}

			p {
				margin: 0;
			}

			a {
				color: var(--vscode-textLink-foreground);
				text-decoration: none;
			}
			a:hover {
				text-decoration: underline;
			}
			a:focus {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.actions {
			}

			.actions a {
				box-sizing: border-box;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				width: 3.2rem;
				height: 3.2rem;
				border-radius: 0.5rem;
				color: inherit;
				padding: 0.2rem;
				vertical-align: text-bottom;
				text-decoration: none;
				cursor: pointer;
			}
			.actions a:hover {
				background-color: var(--vscode-toolbar-hoverBackground);
			}
			.actions a:active {
				background-color: var(--vscode-toolbar-activeBackground);
			}

			.actions a code-icon {
				font-size: 1.6rem;
			}

			.row-type {
				--gk-badge-outline-padding: 0.3rem 0.8rem;
				--gk-badge-font-size: 1.1rem;
				opacity: 0.5;
				vertical-align: middle;
			}

			.title {
				font-size: 1.4rem;
			}

			.date {
				display: inline-block;
				min-width: 1.6rem;
			}
		`],Zn([ct({type:Number})],Jn.prototype,"rank",2),Zn([ct({type:Object})],Jn.prototype,"issue",2),Jn=Zn([rt("gk-issue-row")],Jn);var Xn=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,ti=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?ei(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Xn(t,o,r),r};let oi=class extends nt{constructor(){super(),this.tabFilters=["prs","issues"],this.tabFilterOptions=[{label:"All",value:""},{label:"PRs",value:"prs"},{label:"Issues",value:"issues"}],this.mineFilters=["authored","assigned","review-requested","mentioned"],this.mineFilterOptions=[{label:"Mine",value:""},{label:"Opened by Me",value:"authored"},{label:"Assigned to Me",value:"assigned"},{label:"Needs my Review",value:"review-requested"},{label:"Mentions Me",value:"mentioned"}],(0,K.defineGkElement)(K.Button,K.Badge,K.Input,K.FocusContainer,K.Popover,K.Menu,K.MenuItem)}get subscriptionState(){return this.state?.access.subscription.current}get showSubscriptionGate(){return!1===this.state?.access.allowed}get showFeatureGate(){return!0!==this.state?.access.allowed}get showConnectionGate(){return!0===this.state?.access.allowed&&!this.state?.repos?.some((e=>e.isConnected))}get mineFilterMenuLabel(){return null!=this.selectedMineFilter&&""!==this.selectedMineFilter?this.mineFilterOptions.find((e=>e.value===this.selectedMineFilter))?.label:this.mineFilterOptions[0].label}get items(){if(this.isLoading)return[];const e=[];let t=0;return this.state?.pullRequests?.forEach((({pullRequest:o,reasons:n,isCurrentBranch:i,isCurrentWorktree:r,hasWorktree:s,hasLocalBranch:a})=>{e.push({isPullrequest:!0,state:{pullRequest:o,isCurrentBranch:i,isCurrentWorktree:r,hasWorktree:s,hasLocalBranch:a},rank:++t,tags:n})})),this.state?.issues?.forEach((({issue:o,reasons:n})=>{e.push({isPullrequest:!1,rank:++t,state:{issue:o},tags:n})})),e}get tabFilterOptionsWithCounts(){const e={};return this.tabFilters.forEach((t=>e[t]=0)),this.items.forEach((({isPullrequest:t})=>{const o=t?"prs":"issues";null!=e[o]&&e[o]++})),this.tabFilterOptions.map((t=>({...t,count:""===t.value?this.items.length:e[t.value]})))}get filteredItems(){if(0===this.items.length)return this.items;const e=null!=this.searchText&&""!==this.searchText,t=null!=this.selectedMineFilter&&""!==this.selectedMineFilter,o=null!=this.selectedTabFilter&&""!==this.selectedTabFilter;if(!e&&!t&&!o)return this.items;const n=this.searchText?.toLowerCase();return this.items.filter((i=>{if(o&&(!0===i.isPullrequest&&"issues"===this.selectedTabFilter||!1===i.isPullrequest&&"prs"===this.selectedTabFilter))return!1;if(t&&!i.tags.includes(this.selectedMineFilter))return!1;if(e){if(i.state.issue&&!i.state.issue.title.toLowerCase().includes(n))return!1;if(i.state.pullRequest&&!i.state.pullRequest.title.toLowerCase().includes(n))return!1}return!0}))}get isLoading(){return null==this.state?.pullRequests||null==this.state?.issues}loadingContent(){return De`
			<div class="alert">
				<span class="alert__content"><code-icon modifier="spin" icon="loading"></code-icon> Loading</span>
			</div>
		`}focusItemsContent(){return this.isLoading?this.loadingContent():0===this.filteredItems.length?De`
				<div class="alert">
					<span class="alert__content">None found</span>
				</div>
			`:De`
			${_t(this.filteredItems,(e=>e.rank),(({isPullrequest:e,rank:t,state:o})=>xt(e,(()=>De`<gk-pull-request-row
								.rank=${t}
								.pullRequest=${o.pullRequest}
								.isCurrentBranch=${o.isCurrentBranch}
								.isCurrentWorktree=${o.isCurrentWorktree}
								.hasWorktree=${o.hasWorktree}
								.hasLocalBranch=${o.hasLocalBranch}
							></gk-pull-request-row>`),(()=>De`<gk-issue-row .rank=${t} .issue=${o.issue}></gk-issue-row>`))))}
		`}render(){return null==this.state?this.loadingContent():De`
			<div class="app">
				<div class="app__toolbar">
					<span class="preview">Preview</span>
					<gk-feature-gate-badge
						.subscription=${this.subscriptionState}
						id="subscription-gate-badge"
					></gk-feature-gate-badge>
					<gk-button
						class="feedback"
						appearance="toolbar"
						href="https://github.com/gitkraken/vscode-gitlens/discussions/2535"
						title="Focus View Feedback"
						aria-label="Focus View Feedback"
						><code-icon icon="feedback"></code-icon
					></gk-button>
				</div>

				<div class="app__content">
					<gk-feature-gate
						.state=${this.subscriptionState?.state}
						.visible=${this.showFeatureGate}
						id="subscription-gate"
						class="scrollable"
						><p slot="feature">
							Brings all of your GitHub pull requests and issues into a unified actionable view to help to
							you more easily juggle work in progress, pending work, reviews, and more. Quickly see if
							anything requires your attention while keeping you focused.
						</p></gk-feature-gate
					>
					<gk-feature-gate .visible=${this.showConnectionGate} id="connection-gate" class="scrollable">
						<h3>No GitHub remotes are connected</h3>
						<p>
							This enables access to Pull Requests and Issues in the Focus View as well as provide
							additional information inside hovers and the Commit Details view, such as auto-linked issues
							and pull requests and avatars.
						</p>
						<gl-button appearance="alert" href="command:gitlens.connectRemoteProvider"
							>Connect to GitHub</gl-button
						>
					</gk-feature-gate>

					<div class="app__focus">
						<header class="app__header">
							<div class="app__header-group">
								<nav class="tab-filter" id="filter-focus-items">
									${ut(this.tabFilterOptionsWithCounts,(({label:e,value:t,count:o},n)=>De`
											<button
												class="tab-filter__tab ${(this.selectedTabFilter?t===this.selectedTabFilter:0===n)?"is-active":""}"
												type="button"
												data-tab="${t}"
												@click=${()=>this.selectedTabFilter=t}
											>
												${e} <gk-badge variant="filled">${o}</gk-badge>
											</button>
										`))}
								</nav>
								<gk-popover>
									<gk-button slot="trigger"
										><code-icon icon="list-filter"></code-icon> ${this.mineFilterMenuLabel}
										<code-icon icon="chevron-down"></code-icon
									></gk-button>
									<gk-menu class="mine-menu" @select=${this.onSelectMineFilter}>
										${ut(this.mineFilterOptions,(({label:e,value:t},o)=>De`
												<gk-menu-item
													data-value="${t}"
													?disabled=${this.selectedMineFilter?t===this.selectedMineFilter:0===o}
													>${e}</gk-menu-item
												>
											`))}
									</gk-menu>
								</gk-popover>
							</div>
							<div class="app__header-group">
								<gk-input
									class="app__search"
									label="Search field"
									label-visibility="sr-only"
									placeholder="Search"
									@input=${u(this.onSearchInput.bind(this),200)}
								>
									<code-icon slot="prefix" icon="search"></code-icon>
								</gk-input>
							</div>
						</header>
						<main class="app__main">
							<gk-focus-container id="list-focus-items">
								<span slot="key"><code-icon icon="circle-large-outline"></code-icon></span>
								<span slot="date"><code-icon icon="gl-clock"></code-icon></span>
								<span slot="repo">Repo / Branch</span>
								${this.focusItemsContent()}
							</gk-focus-container>
						</main>
					</div>
				</div>
			</div>
		`}onSearchInput(e){const t=e.target.value;""===t||t.length<3?this.searchText=void 0:this.searchText=t}onSelectMineFilter(e){const t=e.detail?.target;if(null!=t?.dataset?.value){this.selectedMineFilter=t.dataset.value;const e=t.closest("gk-popover");e?.hidePopover()}}createRenderRoot(){return this}};oi.styles=[$t],ti([ht("#subscription-gate",!0)],oi.prototype,"subscriptionEl",2),ti([ht("#connection-gate",!0)],oi.prototype,"connectionEl",2),ti([ht("#subscription-gate-badge",!0)],oi.prototype,"subScriptionBadgeEl",2),ti([lt()],oi.prototype,"selectedTabFilter",2),ti([lt()],oi.prototype,"selectedMineFilter",2),ti([lt()],oi.prototype,"searchText",2),ti([ct({type:Object})],oi.prototype,"state",2),oi=ti([rt("gl-focus-app")],oi);class ni extends Q{constructor(){super("FocusApp")}onInitialize(){this.attachState()}onBind(){const e=super.onBind?.()??[];return e.push(m.on("gk-pull-request-row","open-worktree",((e,t)=>this.onOpenWorktree(e,t))),m.on("gk-pull-request-row","open-branch",((e,t)=>this.onOpenBranch(e,t))),m.on("gk-pull-request-row","switch-branch",((e,t)=>this.onSwitchBranch(e,t)))),e}get component(){return null==this._component&&(this._component=document.getElementById("app")),this._component}attachState(){this.component.state=this.state}onOpenBranch(e,t){null!=e.detail?.refs?.head&&this.sendCommand(l,{pullRequest:e.detail})}onSwitchBranch(e,t){null!=e.detail?.refs?.head&&this.sendCommand(h,{pullRequest:e.detail})}onOpenWorktree(e,t){null!=e.detail?.refs?.head&&this.sendCommand(c,{pullRequest:e.detail})}onMessageReceived(e){const t=e.data;if(this.log(`onMessageReceived(${t.id}): name=${t.method}`),t.method===d.method)r(d,t,(e=>{this.state=e.state,this.setState(this.state),this.attachState()}))}}new ni})();var i=n.S;export{i as FocusApp};