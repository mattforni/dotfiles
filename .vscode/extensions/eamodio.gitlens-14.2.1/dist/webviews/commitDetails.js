var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{b:()=>Ui});var o=(e=>(e.Off="off",e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e))(o||{}),n=(e=>(e.Auto="auto",e.List="list",e.Tree="tree",e))(n||{});function i(e,t,o,n=!1,i){const r={name:"",relativePath:"",children:new Map,descendants:[]};let a=e.reduce(((e,n)=>{let i=e,s="";for(const e of t(n)){s=o(s,e),void 0===i.children&&(i.children=new Map);let t=i.children.get(e);void 0===t&&(t={name:e,relativePath:s,parent:i,children:void 0,descendants:void 0},i.children.set(e,t)),void 0===i.descendants&&(i.descendants=[]),i.descendants.push(n),i=t}return i.value=n,e}),r);return n&&(a=s(a,o,!0,i)),a}function s(e,t,o=!0,n){if(void 0===e.children)return e;const i=[...e.children.values()];for(const e of i)s(e,t,!1,n);if(!o&&1===i.length){const o=i[0];(void 0===o.value||n?.(o.value))&&(e.name=t(e.name,o.name),e.relativePath=o.relativePath,e.children=o.children,e.descendants=o.descendants,e.value=o.value)}return e}class r{constructor(e,t=!1){this.method=e,this.reset=t}}class a extends r{}class c extends r{}function l(e,t,o){e.method===t.method&&o(t.params,e)}const h=new a("webview/ready"),d=new a("webview/focus"),u=new a("command/execute");new a("configuration/preview"),new a("configuration/update"),new c("configuration/didChange"),new c("configuration/didPreview"),new c("webview/didOpenAnchor");const b=new a("commit/actions"),f=new a("commit/file/actions"),p=new a("commit/file/open"),g=new a("commit/file/openOnRemote"),m=new a("commit/file/compareWorking"),v=new a("commit/file/comparePrevious"),y=new a("commit/pickCommit"),w=new a("commit/searchCommit"),$=new a("commit/autolinkSettings"),x=new a("commit/explain"),k=new a("commit/pin"),C=new a("commit/navigate"),A=new a("commit/preferences"),_=new c("commit/didChange",!0),S=(new c("commit/didChange/rich"),new c("commit/didExplain"));function O(e,t){let o,n,i,s,r;function a(e){const o=e-(n??0);return null==n||o>=t||o<0}function c(){const e=Date.now();if(a(e))l();else{r=setTimeout(c,t-(e-(n??0)))}}function l(){return r=void 0,o?function(){const t=o,n=i;return o=i=void 0,s=e.apply(n,t),s}():(o=i=void 0,s)}function h(...e){const l=Date.now(),h=a(l);return o=e,i=this,n=l,h&&null==r?(r=setTimeout(c,t),s):(null==r&&(r=setTimeout(c,t)),s)}return h.cancel=function(){null!=r&&clearTimeout(r),o=n=i=r=void 0},h.flush=function(){return null!=r?l():s},h.pending=function(){return null!=r},h}const T="";const P=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel=o.Off}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=E(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=E(this._logLevel),e===o.Off?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??T}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??T}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??T}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??T}${this.toLoggableParams(!1,o)}\n${String(e)}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??T}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??T}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??T}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??T}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return T;const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:T}};function E(e){switch(e){case o.Off:return 0;case o.Error:return 1;case o.Warn:return 2;case o.Info:return 3;case o.Debug:return 4;default:return 0}}var M,B;(B=M||(M={})).on=function(e,t,o,n){let i=!1;if("string"==typeof e){const s=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,s,n??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,s,n??!0))}}}const s=function(e){o(e,this)};return e.addEventListener(t,s,n??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,s,n??!1))}}},B.insertTemplate=function(e,t,o){const n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const n=o.bindings[e];null!=n&&(t.textContent=String(n))}}},B.resetSlot=function(e){e.replaceChildren(),e.className=""};var L=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(L||{});function D(e,t){const o=e+t,n=t<0?o<0?0:o:o>255?255:o;return Math.round(n)}function N(e,t){return R(e,-t)}function R(e,t){const o=function(e){const t=G(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[n,i,s,r]=o,a=255*t/100;return`rgba(${D(n,a)}, ${D(i,a)}, ${D(s,a)}, ${r})`}function F(e,t){const o=V.from(e);return null==o?e:o.transparent(t/100).toString()}function I(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class H{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=I(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class U{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=I(Math.max(Math.min(1,t),0),3),this.l=I(Math.max(Math.min(1,o),0),3),this.a=I(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=e.a,s=Math.max(t,o,n),r=Math.min(t,o,n);let a=0,c=0;const l=(r+s)/2,h=s-r;if(h>0){switch(c=Math.min(l<=.5?h/(2*l):h/(2-2*l),1),s){case t:a=(o-n)/h+(o<n?6:0);break;case o:a=(n-t)/h+2;break;case n:a=(t-o)/h+4}a*=60,a=Math.round(a)}return new U(a,c,l,i)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:i}=e;let s,r,a;if(0===o)s=r=a=n;else{const e=n<.5?n*(1+o):n+o-n*o,i=2*n-e;s=U._hue2rgb(i,e,t+1/3),r=U._hue2rgb(i,e,t),a=U._hue2rgb(i,e,t-1/3)}return new H(Math.round(255*s),Math.round(255*r),Math.round(255*a),i)}}class q{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=I(Math.max(Math.min(1,t),0),3),this.v=I(Math.max(Math.min(1,o),0),3),this.a=I(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=Math.max(t,o,n),s=i-Math.min(t,o,n),r=0===i?0:s/i;let a;return a=0===s?0:i===t?((o-n)/s%6+6)%6:i===o?(n-t)/s+2:(t-o)/s+4,new q(Math.round(60*a),r,i,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:i}=e,s=n*o,r=s*(1-Math.abs(t/60%2-1)),a=n-s;let[c,l,h]=[0,0,0];return t<60?(c=s,l=r):t<120?(c=r,l=s):t<180?(l=s,h=r):t<240?(l=r,h=s):t<300?(c=r,h=s):t<=360&&(c=s,h=r),c=Math.round(255*(c+a)),l=Math.round(255*(l+a)),h=Math.round(255*(h+a)),new H(c,l,h,i)}}function z(e,t){return t.getPropertyValue(e).trim()}const j=class e{static from(t){return t instanceof e?t:G(t)||e.red}static fromCssVariable(t,o){return G(z(t,o))||e.red}static fromHex(t){return Z(t)||e.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:U.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:q.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof H)this.rgba=e;else if(e instanceof U)this._hsla=e,this.rgba=U.toRGBA(e);else{if(!(e instanceof q))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=q.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&H.equals(this.rgba,e.rgba)&&U.equals(this.hsla,e.hsla)&&q.equals(this.hsva,e.hsva))}getRelativeLuminance(){return I(.2126*e._relativeLuminanceForComponent(this.rgba.r)+.7152*e._relativeLuminanceForComponent(this.rgba.g)+.0722*e._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new V(new H(0,0,0,e.rgba.a));if(1===t)return new V(new H(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const i=(e,o)=>{const s=e.mix(o,.5),r=s.getRelativeLuminance();return Math.abs(t-r)<1e-7||!n--?s:r>t?i(e,s):i(s,o)},s=(o>t?i(V.black,e):i(e,V.white)).rgba;return new V(new H(s.r,s.g,s.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(t){return new e(new U(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new e(new U(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){const{r:o,g:n,b:i,a:s}=this.rgba;return new e(new H(o,n,i,s*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new e(new H(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){const o=t.rgba,n=this.rgba.a,i=o.a,s=n+i*(1-n);if(s<1e-6)return e.transparent;const r=this.rgba.r*n/s+o.r*i*(1-n)/s,a=this.rgba.g*n/s+o.g*i*(1-n)/s,c=this.rgba.b*n/s+o.b*i*(1-n)/s;return new e(new H(r,a,c,s))}mix(e,t){return function(e,t,o){const n=e.rgba,i=t.rgba;return new V(new H(n.r+o*(i.r-n.r),n.g+o*(i.g-n.g),n.b+o*(i.b-n.b),n.a+o*(i.a-n.a)))}(this,e,t)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;const{r:o,g:n,b:i,a:s}=this.rgba;return new e(new H(t.rgba.r-s*(t.rgba.r-o),t.rgba.g-s*(t.rgba.g-n),t.rgba.b-s*(t.rgba.b-i),1))}flatten(...t){const o=t.reduceRight(((t,o)=>e._flatten(o,t)));return e._flatten(this,o)}static _flatten(t,o){const n=1-t.rgba.a;return new e(new H(n*o.rgba.r+t.rgba.a*t.rgba.r,n*o.rgba.g+t.rgba.a*t.rgba.g,n*o.rgba.b+t.rgba.a*t.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return Q(e);return W(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-n)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};j.white=new j(new H(255,255,255,1)),j.black=new j(new H(0,0,0,1)),j.red=new j(new H(255,0,0,1)),j.blue=new j(new H(0,0,255,1)),j.green=new j(new H(0,255,0,1)),j.cyan=new j(new H(0,255,255,1)),j.lightgrey=new j(new H(211,211,211,1)),j.transparent=new j(new H(0,0,0,0));let V=j;function W(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function Y(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function Q(e){return`#${Y(e.rgba.r)}${Y(e.rgba.g)}${Y(e.rgba.b)}`}const K=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function G(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===L.Hash)return Z(e);const t=K.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new V(new H(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new V(new U(n[0],n[1],n[2],n[3]))}return V.red}function Z(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==L.Hash)return null;switch(t){case 7:{const t=16*X(e.charCodeAt(1))+X(e.charCodeAt(2)),o=16*X(e.charCodeAt(3))+X(e.charCodeAt(4)),n=16*X(e.charCodeAt(5))+X(e.charCodeAt(6));return new V(new H(t,o,n,1))}case 9:{const t=16*X(e.charCodeAt(1))+X(e.charCodeAt(2)),o=16*X(e.charCodeAt(3))+X(e.charCodeAt(4)),n=16*X(e.charCodeAt(5))+X(e.charCodeAt(6)),i=16*X(e.charCodeAt(7))+X(e.charCodeAt(8));return new V(new H(t,o,n,i/255))}case 4:{const t=X(e.charCodeAt(1)),o=X(e.charCodeAt(2)),n=X(e.charCodeAt(3));return new V(new H(16*t+t,16*o+o,16*n+n))}case 5:{const t=X(e.charCodeAt(1)),o=X(e.charCodeAt(2)),n=X(e.charCodeAt(3)),i=X(e.charCodeAt(4));return new V(new H(16*t+t,16*o+o,16*n+n,(16*i+i)/255))}default:return null}}function X(e){switch(e){case L.Digit0:return 0;case L.Digit1:return 1;case L.Digit2:return 2;case L.Digit3:return 3;case L.Digit4:return 4;case L.Digit5:return 5;case L.Digit6:return 6;case L.Digit7:return 7;case L.Digit8:return 8;case L.Digit9:return 9;case L.a:case L.A:return 10;case L.b:case L.B:return 11;case L.c:case L.C:return 12;case L.d:case L.D:return 13;case L.e:case L.E:return 14;case L.f:case L.F:return 15}return 0}const J=class e{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(t,o,n)=>{null==this.listeners&&(this.listeners=new ie);const i=this.listeners.push(null==o?t:[t,o]),s={dispose:()=>{s.dispose=e._noop,this._disposed||i()}};return Array.isArray(n)&&n.push(s),s}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new ie);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};J._noop=function(){};let ee=J;const te={done:!0,value:void 0},oe=class e{constructor(t){this.element=t,this.next=e.Undefined,this.prev=e.Undefined}};oe.Undefined=new oe(void 0);let ne=oe;class ie{constructor(){this._first=ne.Undefined,this._last=ne.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ne.Undefined}clear(){this._first=ne.Undefined,this._last=ne.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new ne(e);if(this._first===ne.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===ne.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===ne.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==ne.Undefined&&e.next!==ne.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===ne.Undefined&&e.next===ne.Undefined?(this._first=ne.Undefined,this._last=ne.Undefined):e.next===ne.Undefined?(this._last=this._last.prev,this._last.next=ne.Undefined):e.prev===ne.Undefined&&(this._first=this._first.next,this._first.prev=ne.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===ne.Undefined?te:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==ne.Undefined;t=t.next)e.push(t.element);return e}}const se=new ee,re=se.event;function ae(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,i=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),s=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),r=t.style,a=z("--vscode-editor-background",o);let c=z("--vscode-editor-foreground",o);c||(c=z("--vscode-foreground",o));let l=z("--color-background",o);return r.setProperty("--color-background--lighten-05",R(l,5)),r.setProperty("--color-background--darken-05",N(l,5)),r.setProperty("--color-background--lighten-075",R(l,7.5)),r.setProperty("--color-background--darken-075",N(l,7.5)),r.setProperty("--color-background--lighten-10",R(l,10)),r.setProperty("--color-background--darken-10",N(l,10)),r.setProperty("--color-background--lighten-15",R(l,15)),r.setProperty("--color-background--darken-15",N(l,15)),r.setProperty("--color-background--lighten-30",R(l,30)),r.setProperty("--color-background--darken-30",N(l,30)),r.setProperty("--color-background--lighten-50",R(l,50)),r.setProperty("--color-background--darken-50",N(l,50)),l=z("--color-button-background",o),r.setProperty("--color-button-background--darken-30",N(l,30)),l=z("--color-highlight",o),r.setProperty("--color-highlight--75",F(l,75)),r.setProperty("--color-highlight--50",F(l,50)),r.setProperty("--color-highlight--25",F(l,25)),l=z("--color-button-secondary-background",o),r.setProperty("--color-button-secondary-background--darken-30",N(l,30)),l=z("--color-foreground",o),r.setProperty("--color-foreground--85",F(l,85)),r.setProperty("--color-foreground--75",F(l,75)),r.setProperty("--color-foreground--65",F(l,65)),r.setProperty("--color-foreground--50",F(l,50)),l=z("--color-link-foreground",o),r.setProperty("--color-link-foreground--darken-20",N(l,20)),r.setProperty("--color-link-foreground--lighten-20",R(l,20)),l=z("--color-alert-infoBackground",o),r.setProperty("--color-alert-infoHoverBackground",i?N(l,5):R(l,5)),l=z("--color-alert-warningBackground",o),r.setProperty("--color-alert-warningHoverBackground",i?N(l,5):R(l,5)),l=z("--color-alert-errorBackground",o),r.setProperty("--color-alert-errorHoverBackground",i?N(l,5):R(l,5)),l=i?N(a,5):R(a,5),r.setProperty("--color-alert-neutralBackground",l),r.setProperty("--color-alert-neutralHoverBackground",i?N(l,5):R(l,5)),{colors:{background:a,foreground:c},computedStyle:o,isLightTheme:i,isHighContrastTheme:s,isInitializing:null==e}}let ce=0;function le(){return 1073741824===ce?ce=1:ce++,`webview:${ce}`}class he{constructor(e){this.appName=e;const t=[],n=ae();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(n),t.push(re(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",P.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},o.Off),this.log("ctor()"),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{se.fire(ae(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("ctor(): initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(M.on(window,"message",this.onMessageReceived.bind(this))),this.sendCommand(h,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(M.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=O((e=>{this.sendCommand(d,e)}),150);this.bindDisposables.push(M.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),M.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){P.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=le();this.log(`sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){const n=le();this.log(`sendCommandWithCompletion(${n}): name=${e.method}`);const i=new Promise(((e,t)=>{let i;const s=[M.on(window,"message",(t=>{l(o,t.data,(o=>{t.data.completionId===n&&(s.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=i&&(clearTimeout(i),i=void 0)}}];i=setTimeout((()=>{i=void 0,s.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${o.method}`))}),6e4)}));return this.postMessage({id:n,method:e.method,params:t,completionId:n}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}const de=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===de.trustedTypes&&(de.trustedTypes={createPolicy:(e,t)=>t});const ue={configurable:!1,enumerable:!1,writable:!1};void 0===de.FAST&&Reflect.defineProperty(de,"FAST",Object.assign({value:Object.create(null)},ue));const be=de.FAST;if(void 0===be.getById){const e=Object.create(null);Reflect.defineProperty(be,"getById",Object.assign({value(t,o){let n=e[t];return void 0===n&&(n=o?e[t]=o():null),n}},ue))}const fe=Object.freeze([]);function pe(){const e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let n=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==n;)o=e.get(n),n=Reflect.getPrototypeOf(n);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}const ge=de.FAST.getById(1,(()=>{const e=[],t=[];function o(){if(t.length)throw t.shift()}function n(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}function i(){let t=0;for(;t<e.length;)if(n(e[t]),t++,t>1024){for(let o=0,n=e.length-t;o<n;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&de.requestAnimationFrame(i),e.push(t)},process:i})})),me=de.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let ve=me;const ye=`fast-${Math.random().toString(36).substring(2,8)}`,we=`${ye}{`,$e=`}${ye}`,xe=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(ve!==me)throw new Error("The HTML policy can only be set once.");ve=e},createHTML:e=>ve.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(ye),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${ye}:`,"")),createInterpolationPlaceholder:e=>`${we}${e}${$e}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${ye}:${e}--\x3e`,queueUpdate:ge.enqueue,processUpdates:ge.process,nextUpdate:()=>new Promise(ge.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class ke{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){const t=this.spillover,o=this.source;if(void 0===t){const t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==n&&n.handleChange(o,e)}else for(let n=0,i=t.length;n<i;++n)t[n].handleChange(o,e)}}class Ce{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new ke(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new ke(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const Ae=be.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=xe.queueUpdate;let n,i=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function s(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=i(e):t.set(e,o=new Ce(e))),o}const r=pe();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==n&&n.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,n=e[o];if(n!==t){e[o]=t;const i=e[this.callback];"function"==typeof i&&i.call(e,n,t),s(e).notify(this.name)}}}class c extends ke{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const i=this.binding(e,t);return n=o,i}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,i=s(e),r=null===o?this.first:{};if(r.propertySource=e,r.propertyName=t,r.notifier=i,i.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;n=void 0,t=o.propertySource[o.propertyName],n=this,e===t&&(this.needsRefresh=!0)}o.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){i=e},getNotifier:s,track(e,t){void 0!==n&&n.watch(e,t)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(e,t){s(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),r(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:r,binding(e,t,o=this.isVolatileBinding(e)){return new c(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));function _e(e,t){Ae.defineProperty(e,t)}function Se(e,t,o){return Object.assign({},o,{get:function(){return Ae.trackVolatile(),o.get.apply(this)}})}const Oe=be.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class Te{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Oe.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){Oe.set(e)}}Ae.defineProperty(Te.prototype,"index"),Ae.defineProperty(Te.prototype,"length");const Pe=Object.seal(new Te);class Ee{constructor(){this.targetIndex=0}}class Me extends Ee{constructor(){super(...arguments),this.createPlaceholder=xe.createInterpolationPlaceholder}}class Be extends Ee{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return xe.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Le(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=Ae.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function De(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function Ne(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Re(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function Fe(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Ie(e){xe.setAttribute(this.target,this.targetName,e)}function He(e){xe.setBooleanAttribute(this.target,this.targetName,e)}function Ue(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function qe(e){this.target[this.targetName]=e}function ze(e){const t=this.classVersions||Object.create(null),o=this.target;let n=this.version||0;if(null!=e&&e.length){const i=e.split(/\s+/);for(let e=0,s=i.length;e<s;++e){const s=i[e];""!==s&&(t[s]=n,o.classList.add(s))}}if(this.classVersions=t,this.version=n+1,0!==n){n-=1;for(const e in t)t[e]===n&&o.classList.remove(e)}}class je extends Me{constructor(e){super(),this.binding=e,this.bind=Le,this.unbind=Ne,this.updateTarget=Ie,this.isBindingVolatile=Ae.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=qe,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>xe.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=He;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=De,this.unbind=Fe;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=ze)}}targetAtContent(){this.updateTarget=Ue,this.unbind=Re}createBehavior(e){return new Ve(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Ve{constructor(e,t,o,n,i,s,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=n,this.unbind=i,this.updateTarget=s,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Te.setEvent(e);const t=this.binding(this.source,this.context);Te.setEvent(null),!0!==t&&e.preventDefault()}}let We=null;class Ye{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){We=this}static borrow(e){const t=We||new Ye;return t.directives=e,t.reset(),We=null,t}}function Qe(e){if(1===e.length)return e[0];let t;const o=e.length,n=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),i=new je(((e,t)=>{let i="";for(let s=0;s<o;++s)i+=n[s](e,t);return i}));return i.targetName=t,i}const Ke=$e.length;function Ge(e,t){const o=t.split(we);if(1===o.length)return null;const n=[];for(let t=0,i=o.length;t<i;++t){const i=o[t],s=i.indexOf($e);let r;if(-1===s)r=i;else{const t=parseInt(i.substring(0,s));n.push(e.directives[t]),r=i.substring(s+Ke)}""!==r&&n.push(r)}return n}function Ze(e,t,o=!1){const n=t.attributes;for(let i=0,s=n.length;i<s;++i){const r=n[i],a=r.value,c=Ge(e,a);let l=null;null===c?o&&(l=new je((()=>a)),l.targetName=r.name):l=Qe(c),null!==l&&(t.removeAttributeNode(r),i--,s--,e.addFactory(l))}}function Xe(e,t,o){const n=Ge(e,t.textContent);if(null!==n){let i=t;for(let s=0,r=n.length;s<r;++s){const r=n[s],a=0===s?t:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);"string"==typeof r?a.textContent=r:(a.textContent=" ",e.captureContentBinding(r)),i=a,e.targetIndex++,a!==t&&o.nextNode()}e.targetIndex--}}const Je=document.createRange();class et{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const o=e.parentNode;let n,i=this.firstChild;for(;i!==t;)n=i.nextSibling,o.insertBefore(i,e),i=n;o.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.appendChild(n),n=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.removeChild(n),n=o;e.removeChild(t);const i=this.behaviors,s=this.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(s)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const n=this.source;this.source=e,this.context=t;for(let i=0,s=o.length;i<s;++i){const s=o[i];s.unbind(n),s.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,i=o.length;n<i;++n)o[n].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,n=e.length;o<n;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Je.setStartBefore(e[0].firstChild),Je.setEndAfter(e[e.length-1].lastChild),Je.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],n=o.behaviors,i=o.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(i)}}}}class tt{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=xe.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const n=Ye.borrow(t);Ze(n,e,!0);const i=n.behaviorFactories;n.reset();const s=xe.createTemplateWalker(o);let r;for(;r=s.nextNode();)switch(n.targetIndex++,r.nodeType){case 1:Ze(n,r);break;case 3:Xe(n,r,s);break;case 8:xe.isMarker(r)&&n.addFactory(t[xe.extractDirectiveIndexFromMarker(r)])}let a=0;(xe.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),a=-1);const c=n.behaviorFactories;return n.release(),{fragment:o,viewBehaviorFactories:c,hostBehaviorFactories:i,targetOffset:a}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,n=new Array(this.behaviorCount),i=xe.createTemplateWalker(t);let s=0,r=this.targetOffset,a=i.nextNode();for(let e=o.length;s<e;++s){const e=o[s],t=e.targetIndex;for(;null!==a;){if(r===t){n[s]=e.createBehavior(a);break}a=i.nextNode(),r++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,i=t.length;o<i;++o,++s)n[s]=t[o].createBehavior(e)}return new et(t,n)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const n=this.create(o);return n.bind(e,Pe),n.appendTo(t),n}}const ot=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function nt(e,...t){const o=[];let n="";for(let i=0,s=e.length-1;i<s;++i){const s=e[i];let r=t[i];if(n+=s,r instanceof tt){const e=r;r=()=>e}if("function"==typeof r&&(r=new je(r)),r instanceof Me){const e=ot.exec(s);null!==e&&(r.targetName=e[2])}r instanceof Ee?(n+=r.createPlaceholder(o.length),o.push(r)):n+=r}return n+=e[e.length-1],new tt(n,o)}class it{createCSS(){return""}createBehavior(){}}class st{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function rt(e){return e.map((e=>e instanceof st?rt(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function at(e){return e.map((e=>e instanceof st?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}st.create=(()=>{if(xe.supportsAdoptedStyleSheets){const e=new Map;return t=>new ht(t,e)}return e=>new ut(e)})();let ct=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},lt=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(xe.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),ct=(e,t)=>{e.adoptedStyleSheets.push(...t)},lt=(e,t)=>{for(const o of t){const t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class ht extends st{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=at(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=rt(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){ct(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){lt(e,this.styleSheets),super.removeStylesFrom(e)}}let dt=0;class ut extends st{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=at(e),this.styleSheets=rt(e),this.styleClass="fast-style-class-"+ ++dt}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const i=document.createElement("style");i.innerHTML=t[n],i.className=o,e.append(i)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,n=t.length;o<n;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}function bt(e,t){const o=[];let n="";const i=[];for(let s=0,r=e.length-1;s<r;++s){n+=e[s];let r=t[s];if(r instanceof it){const e=r.createBehavior();r=r.createCSS(),e&&i.push(e)}r instanceof st||r instanceof CSSStyleSheet?(""!==n.trim()&&(o.push(n),n=""),o.push(r)):n+=r}return n+=e[e.length-1],""!==n.trim()&&o.push(n),{styles:o,behaviors:i}}function ft(e,...t){const{styles:o,behaviors:n}=bt(e,t),i=st.create(o);return n.length&&i.withBehaviors(...n),i}const pt=Object.freeze({locate:pe()}),gt={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e};class mt{constructor(e,t,o=t.toLowerCase(),n="reflect",i){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=n,this.converter=i,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===i&&(this.converter=gt)}setValue(e,t){const o=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return Ae.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||xe.queueUpdate((()=>{o.add(e);const n=e[this.fieldName];switch(t){case"reflect":const t=this.converter;xe.setAttribute(e,this.attribute,void 0!==t?t.toView(n):n);break;case"boolean":xe.setBooleanAttribute(e,this.attribute,n)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(pt.locate(e));for(let n=0,i=t.length;n<i;++n){const i=t[n];if(void 0!==i)for(let t=0,n=i.length;t<n;++t){const n=i[t];"string"==typeof n?o.push(new mt(e,n)):o.push(new mt(e,n.property,n.attribute,n.mode,n.converter))}}return o}}function vt(e,t){let o;function n(e,t){arguments.length>1&&(o.property=t),pt.locate(e.constructor).push(o)}return arguments.length>1?(o={},void n(e,t)):(o=void 0===e?{}:e,n)}const yt={mode:"open"},wt={},$t=be.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class xt{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=mt.collect(e,t.attributes),n=new Array(o.length),i={},s={};for(let e=0,t=o.length;e<t;++e){const t=o[e];n[e]=t.attribute,i[t.name]=t,s[t.attribute]=t}this.attributes=o,this.observedAttributes=n,this.propertyLookup=i,this.attributeLookup=s,this.shadowOptions=void 0===t.shadowOptions?yt:null===t.shadowOptions?void 0:Object.assign(Object.assign({},yt),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?wt:Object.assign(Object.assign({},wt),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?st.create(t.styles):t.styles instanceof st?t.styles:st.create([t.styles])}get isDefined(){return!!$t.getByType(this.type)}define(e=customElements){const t=this.type;if($t.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,n=e.length;t<n;++t)Ae.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}xt.forType=$t.getByType;const kt=new WeakMap,Ct={bubbles:!0,composed:!0,cancelable:!0};function At(e){return e.shadowRoot||kt.get(e)||null}class _t extends Ce{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&kt.set(e,t)}const n=Ae.getAccessors(e);if(n.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,i=n.length;o<i;++o){const i=n[o].name,s=e[i];void 0!==s&&(delete e[i],t[i]=s)}}}get isConnected(){return Ae.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,Ae.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=At(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=At(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,n=[];for(let i=0;i<o;++i){const o=e[i];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),n.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,Pe)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const n=e.length,i=[];for(let s=0;s<n;++s){const n=e[s];if(o.has(n)){const e=o.get(n)-1;0===e||t?o.delete(n)&&i.push(n):o.set(n,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,Pe);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,Pe);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Ct),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let n=0,i=o.length;n<i;++n){const i=o[n];e[i]=t[i]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=At(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||xe.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=xt.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new _t(e,o)}}function St(e){return class extends e{constructor(){super(),_t.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const Ot=Object.assign(St(HTMLElement),{from:e=>St(e),define:(e,t)=>new xt(e,t).define().type});function Tt(e){return function(t){new xt(t,e).define()}}var Pt=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,Mt=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Et(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Pt(t,o,s),s};const Bt=nt`<a
	role="${e=>e.href?null:"button"}"
	type="${e=>e.href?null:"button"}"
	aria-label="${e=>e.label}"
	title="${e=>e.label}"
	><code-icon icon="${e=>e.icon}"></code-icon
></a>`,Lt=ft`
	:host {
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		border-radius: 0.5rem;
		color: inherit;
		padding: 0.2rem;
		vertical-align: text-bottom;
		text-decoration: none;
		cursor: pointer;
	}
	:host(:focus) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	:host(:hover) {
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	:host(:active) {
		background-color: var(--vscode-toolbar-activeBackground);
	}
`;let Dt=class extends Ot{constructor(){super(...arguments),this.label="",this.icon=""}};Mt([vt],Dt.prototype,"href",2),Mt([vt],Dt.prototype,"label",2),Mt([vt],Dt.prototype,"icon",2),Dt=Mt([Tt({name:"action-item",template:Bt,styles:Lt})],Dt);class Nt{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=Ae.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(fe),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Rt extends Nt{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ft(e){return"string"==typeof e&&(e={property:e}),new Be("fast-slotted",Rt,e)}const It=window,Ht=It.ShadowRoot&&(void 0===It.ShadyCSS||It.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ut=Symbol(),qt=new WeakMap;class zt{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ht&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=qt.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&qt.set(t,e))}return e}toString(){return this.cssText}}const jt=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new zt(o,e,Ut)},Vt=Ht?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new zt("string"==typeof e?e:e+"",void 0,Ut))(t)})(e):e;var Wt;const Yt=window,Qt=Yt.trustedTypes,Kt=Qt?Qt.emptyScript:"",Gt=Yt.reactiveElementPolyfillSupport,Zt={toAttribute(e,t){switch(t){case Boolean:e=e?Kt:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},Xt=(e,t)=>t!==e&&(t==t||e==e),Jt={attribute:!0,type:String,converter:Zt,reflect:!1,hasChanged:Xt},eo="finalized";class to extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=Jt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Jt}static finalize(){if(this.hasOwnProperty(eo))return!1;this[eo]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(Vt(e))}else void 0!==e&&t.push(Vt(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{Ht?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),n=It.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=Jt){var n;const i=this.constructor._$Ep(e,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:Zt).toAttribute(t,o.type);this._$El=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(e,t){var o;const n=this.constructor,i=n._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=n.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:Zt;this._$El=i,this[i]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||Xt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var oo;to[eo]=!0,to.elementProperties=new Map,to.elementStyles=[],to.shadowRootOptions={mode:"open"},null==Gt||Gt({ReactiveElement:to}),(null!==(Wt=Yt.reactiveElementVersions)&&void 0!==Wt?Wt:Yt.reactiveElementVersions=[]).push("1.6.3");const no=window,io=no.trustedTypes,so=io?io.createPolicy("lit-html",{createHTML:e=>e}):void 0,ro="$lit$",ao=`lit$${(Math.random()+"").slice(9)}$`,co="?"+ao,lo=`<${co}>`,ho=document,uo=()=>ho.createComment(""),bo=e=>null===e||"object"!=typeof e&&"function"!=typeof e,fo=Array.isArray,po=e=>fo(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),go="[ \t\n\f\r]",mo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vo=/-->/g,yo=/>/g,wo=RegExp(`>|${go}(?:([^\\s"'>=/]+)(${go}*=${go}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),$o=/'/g,xo=/"/g,ko=/^(?:script|style|textarea|title)$/i,Co=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Ao=Co(1),_o=(Co(2),Symbol.for("lit-noChange")),So=Symbol.for("lit-nothing"),Oo=new WeakMap,To=ho.createTreeWalker(ho,129,null,!1);function Po(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==so?so.createHTML(t):t}const Eo=(e,t)=>{const o=e.length-1,n=[];let i,s=2===t?"<svg>":"",r=mo;for(let t=0;t<o;t++){const o=e[t];let a,c,l=-1,h=0;for(;h<o.length&&(r.lastIndex=h,c=r.exec(o),null!==c);)h=r.lastIndex,r===mo?"!--"===c[1]?r=vo:void 0!==c[1]?r=yo:void 0!==c[2]?(ko.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=wo):void 0!==c[3]&&(r=wo):r===wo?">"===c[0]?(r=null!=i?i:mo,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?wo:'"'===c[3]?xo:$o):r===xo||r===$o?r=wo:r===vo||r===yo?r=mo:(r=wo,i=void 0);const d=r===wo&&e[t+1].startsWith("/>")?" ":"";s+=r===mo?o+lo:l>=0?(n.push(a),o.slice(0,l)+ro+o.slice(l)+ao+d):o+ao+(-2===l?(n.push(void 0),t):d)}return[Po(e,s+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class Mo{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,s=0;const r=e.length-1,a=this.parts,[c,l]=Eo(e,t);if(this.el=Mo.createElement(c,o),To.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=To.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(ro)||t.startsWith(ao)){const o=l[s++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+ro).split(ao),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?Ro:"?"===t[1]?Io:"@"===t[1]?Ho:No})}else a.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(ko.test(n.tagName)){const e=n.textContent.split(ao),t=e.length-1;if(t>0){n.textContent=io?io.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],uo()),To.nextNode(),a.push({type:2,index:++i});n.append(e[t],uo())}}}else if(8===n.nodeType)if(n.data===co)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(ao,e+1));)a.push({type:7,index:i}),e+=ao.length-1}i++}}static createElement(e,t){const o=ho.createElement("template");return o.innerHTML=e,o}}function Bo(e,t,o=e,n){var i,s,r,a;if(t===_o)return t;let c=void 0!==n?null===(i=o._$Co)||void 0===i?void 0:i[n]:o._$Cl;const l=bo(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(s=null==c?void 0:c._$AO)||void 0===s||s.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(r=(a=o)._$Co)&&void 0!==r?r:a._$Co=[])[n]=c:o._$Cl=c),void 0!==c&&(t=Bo(e,c._$AS(e,t.values),c,n)),t}class Lo{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:ho).importNode(o,!0);To.currentNode=i;let s=To.nextNode(),r=0,a=0,c=n[0];for(;void 0!==c;){if(r===c.index){let t;2===c.type?t=new Do(s,s.nextSibling,this,e):1===c.type?t=new c.ctor(s,c.name,c.strings,this,e):6===c.type&&(t=new Uo(s,this,e)),this._$AV.push(t),c=n[++a]}r!==(null==c?void 0:c.index)&&(s=To.nextNode(),r++)}return To.currentNode=ho,i}v(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Do{constructor(e,t,o,n){var i;this.type=2,this._$AH=So,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Bo(this,e,t),bo(e)?e===So||null==e||""===e?(this._$AH!==So&&this._$AR(),this._$AH=So):e!==this._$AH&&e!==_o&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):po(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==So&&bo(this._$AH)?this._$AA.nextSibling.data=e:this.$(ho.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=Mo.createElement(Po(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(o);else{const e=new Lo(i,this),t=e.u(this.options);e.v(o),this.$(t),this._$AH=e}}_$AC(e){let t=Oo.get(e.strings);return void 0===t&&Oo.set(e.strings,t=new Mo(e)),t}T(e){fo(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new Do(this.k(uo()),this.k(uo()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class No{constructor(e,t,o,n,i){this.type=1,this._$AH=So,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=So}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let s=!1;if(void 0===i)e=Bo(this,e,t,0),s=!bo(e)||e!==this._$AH&&e!==_o,s&&(this._$AH=e);else{const n=e;let r,a;for(e=i[0],r=0;r<i.length-1;r++)a=Bo(this,n[o+r],t,r),a===_o&&(a=this._$AH[r]),s||(s=!bo(a)||a!==this._$AH[r]),a===So?e=So:e!==So&&(e+=(null!=a?a:"")+i[r+1]),this._$AH[r]=a}s&&!n&&this.j(e)}j(e){e===So?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Ro extends No{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===So?void 0:e}}const Fo=io?io.emptyScript:"";class Io extends No{constructor(){super(...arguments),this.type=4}j(e){e&&e!==So?this.element.setAttribute(this.name,Fo):this.element.removeAttribute(this.name)}}class Ho extends No{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=Bo(this,e,t,0))&&void 0!==o?o:So)===_o)return;const n=this._$AH,i=e===So&&n!==So||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==So&&(n===So||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class Uo{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Bo(this,e)}}const qo=no.litHtmlPolyfillSupport;null==qo||qo(Mo,Do),(null!==(oo=no.litHtmlVersions)&&void 0!==oo?oo:no.litHtmlVersions=[]).push("2.8.0");var zo,jo;class Vo extends to{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,i;const s=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let r=s._$litPart$;if(void 0===r){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;s._$litPart$=r=new Do(t.insertBefore(uo(),e),e,void 0,null!=o?o:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return _o}}Vo.finalized=!0,Vo._$litElement$=!0,null===(zo=globalThis.litElementHydrateSupport)||void 0===zo||zo.call(globalThis,{LitElement:Vo});const Wo=globalThis.litElementPolyfillSupport;null==Wo||Wo({LitElement:Vo});(null!==(jo=globalThis.litElementVersions)&&void 0!==jo?jo:globalThis.litElementVersions=[]).push("3.3.3");const Yo=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){customElements.define(e,t)}}})(e,t),Qo=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function Ko(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):Qo(e,t)}var Go;null===(Go=window.HTMLSlotElement)||void 0===Go||Go.prototype.assignedElements;var Zo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,Jo=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Xo(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Zo(t,o,s),s};let en=class extends Vo{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};en.styles=jt`
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
	`,Jo([Ko()],en.prototype,"icon",2),Jo([Ko()],en.prototype,"modifier",2),Jo([Ko({type:Number})],en.prototype,"size",2),en=Jo([Yo("code-icon")],en);var tn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,nn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?on(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&tn(t,o,s),s};const sn=nt`<template role="navigation"><slot ${Ft("actionNodes")}></slot></template>`,rn=ft`
	:host {
		display: flex;
		align-items: center;
		user-select: none;
	}
`;let an=class extends Ot{actionNodesChanged(e,t){if(this.actionNodesDisposer?.(),!t?.length)return;const o=this.handleKeydown.bind(this),n=t?.filter((e=>1===e.nodeType)).map(((e,t)=>(e.setAttribute("tabindex",0===t?"0":"-1"),e.addEventListener("keydown",o,!1),{dispose:()=>{e?.removeEventListener("keydown",o,!1)}})));this.actionNodesDisposer=()=>{n?.forEach((({dispose:e})=>e()))}}disconnectedCallback(){this.actionNodesDisposer?.()}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target;let o=null;if("ArrowLeft"===e.key){if(o=t.previousElementSibling,null==o){const e=this.actionNodes.filter((e=>1===e.nodeType));o=e[e.length-1]??null}}else"ArrowRight"===e.key&&(o=t.nextElementSibling,null==o&&(o=this.actionNodes.find((e=>1===e.nodeType))??null));null!=o&&o!==t&&(t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};nn([_e],an.prototype,"actionNodes",2),an=nn([Tt({name:"action-nav",template:sn,styles:rn})],an);const cn=e=>"function"==typeof e,ln=()=>null;function hn(e){return void 0===e?ln:cn(e)?e:()=>e}function dn(e,t,o){const n=cn(e)?e:()=>e,i=hn(t),s=hn(o);return(e,t)=>n(e,t)?i(e,t):s(e,t)}const un=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,bn=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,fn=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let pn;const gn=new Map;let mn,vn,yn;function wn(e,t,o,n=!0){const i=`${o??""}:${t=t??void 0}`;let s=gn.get(i);if(null==s){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=bn.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(un))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let r;r=null==o?mn:"system"===o?void 0:[o],s=new Intl.DateTimeFormat(r,e),n&&gn.set(i,s)}if(null==t||bn.test(t))return s.format(e);function r(e){const t=`${o??""}:time:${e}`;let i=gn.get(t);if(null==i){const s={localeMatcher:"best fit",timeStyle:e};let r;r=null==o?mn:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(r,s),n&&gn.set(t,i)}return i}const a=s.formatToParts(e);return t.replace(un,((t,o,n,i,s,c,l,h,d,u,b,f,p,g,m)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in m){const o=m[t];if(null==o)continue;const n=a.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return xn(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=r("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??n)?.value??""}`}return n?.value??""}return""}))}const $n=["th","st","nd","rd"];function xn(e){const t=e%100;return`${e}${$n[(t-20)%10]??$n[t]??$n[0]}`}var kn=Object.defineProperty,Cn=Object.getOwnPropertyDescriptor,An=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Cn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&kn(t,o,s),s};let _n=class extends Vo{constructor(){super(...arguments),this.format="MMMM Do, YYYY h:mma",this.date=new Date}render(){return Ao`<time datetime="${this.date}" title="${wn(this.date,this.format??"MMMM Do, YYYY h:mma")}"
			>${function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,i,s]of fn){const r=Math.abs(o);if(r>=n||1e3===n)return t?(null==pn&&(null!=yn?pn=yn.resolvedOptions().locale:null!=vn?pn=vn.resolvedOptions().locale:(yn=new Intl.RelativeTimeFormat(mn,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),pn=yn.resolvedOptions().locale)),"en"===pn||pn?.startsWith("en-")?`${Math.round(r/i)}${s}`:(null==yn&&(yn=new Intl.RelativeTimeFormat(mn,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),yn.format(Math.round(o/i),e))):(null==vn&&(vn=new Intl.RelativeTimeFormat(mn,{localeMatcher:"best fit",numeric:"auto",style:"long"})),vn.format(Math.round(o/i),e))}return""}(this.date)}</time
		>`}};An([Ko()],_n.prototype,"format",2),An([Ko({converter:{toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))},reflect:!0})],_n.prototype,"date",2),_n=An([Yo("formatted-date")],_n);var Sn=Object.defineProperty,On=Object.getOwnPropertyDescriptor,Tn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?On(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Sn(t,o,s),s};const Pn=nt`
	<template>
		<a class="avatar" href="${e=>e.email?`mailto:${e.email}`:"#"}">
			${dn((e=>e.showAvatar),nt`<img class="thumb" lazy src="${e=>e.avatarUrl}" alt="${e=>e.name}" />`)}
			${dn((e=>!e.showAvatar),nt`<code-icon icon="person" size="32"></code-icon>`)}
		</a>
		<a class="name" href="${e=>e.email?`mailto:${e.email}`:"#"}">${e=>e.name}</a>
		<span class="date"
			>${e=>e.actionLabel} <formatted-date date=${e=>e.date} format="${e=>e.dateFormat}"></formatted-date
		></span>
	</template>
`,En=ft`
	:host {
		display: grid;
		gap: 0rem 1rem;
		justify-content: start;
	}
	a {
		color: var(--color-link-foreground);
		text-decoration: none;
	}
	.avatar {
		grid-column: 1;
		grid-row: 1 / 3;
		width: 36px;
	}
	.thumb {
		width: 100%;
		height: auto;
		border-radius: 0.4rem;
	}
	.name {
		grid-column: 2;
		grid-row: 1;
		font-size: 1.5rem;
	}
	.date {
		grid-column: 2;
		grid-row: 2;
		font-size: 1.3rem;
	}
`;let Mn=class extends Ot{constructor(){super(...arguments),this.name="",this.email="",this.date="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.committer=!1,this.actionLabel="committed"}};Tn([vt({mode:"reflect"})],Mn.prototype,"name",2),Tn([vt({mode:"reflect"})],Mn.prototype,"email",2),Tn([vt({mode:"reflect"})],Mn.prototype,"date",2),Tn([vt({mode:"reflect"})],Mn.prototype,"avatarUrl",2),Tn([vt({mode:"boolean"})],Mn.prototype,"showAvatar",2),Tn([vt({mode:"reflect"})],Mn.prototype,"dateFormat",2),Tn([vt({mode:"boolean"})],Mn.prototype,"committer",2),Tn([vt({mode:"reflect"})],Mn.prototype,"actionLabel",2),Mn=Tn([Tt({name:"commit-identity",template:Pn,styles:En})],Mn);var Bn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,Dn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Ln(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Bn(t,o,s),s};let Nn=class extends Vo{constructor(){super(...arguments),this.url="",this.name="",this.date="",this.status="merged",this.key="#1999"}renderDate(){return""===this.date?So:Ao`<formatted-date date="${this.date}"></formatted-date>`}render(){let e="issues";switch(this.status.toLowerCase()){case"":e="link";break;case"merged":e="git-merge";break;case"closed":e="pass"}return Ao`
			<span class="icon"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.key} ${""===this.status?this.status:So} ${this.renderDate()}</p>
		`}};Nn.styles=jt`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
			text-align: center;
			padding-top: 0.1rem;
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
			font-size: 1.4rem;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
			font-size: 1.3rem;
		}
	`,Dn([Ko()],Nn.prototype,"url",2),Dn([Ko()],Nn.prototype,"name",2),Dn([Ko()],Nn.prototype,"date",2),Dn([Ko()],Nn.prototype,"status",2),Dn([Ko()],Nn.prototype,"key",2),Nn=Dn([Yo("issue-pull-request")],Nn);var Rn=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,In=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Fn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Rn(t,o,s),s};let Hn=class extends Vo{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return Ao`<div class="skeleton" style=${e}></div>`}};Hn.styles=jt`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,In([Ko({type:Number})],Hn.prototype,"lines",2),Hn=In([Yo("skeleton-loader")],Hn);var Un=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,zn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?qn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Un(t,o,s),s};let jn=class extends Vo{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return Ao`
			<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
				><span class="label">+${this.added}</span></span
			>
			<span class="stat modified" title="${this.modified} modified" aria-label="${this.modified} modified"
				><span class="label">~${this.modified}</span></span
			>
			<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
				><span class="label">-${this.removed}</span></span
			>
		`}};jn.styles=jt`
        :host {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        }

        .stat {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
        }

        .stat code-icon {
            margin-right: 0.25rem;
        }

        .added {
            color: var(--vscode-gitDecoration-addedResourceForeground);
        }
        .modified {
            color: var(--vscode-gitDecoration-modifiedResourceForeground);
        }
        .deleted {
            color: var(--vscode-gitDecoration-deletedResourceForeground);
        }

        .label {
            flex-basis: 100%;
            text-align: center;
        }
    }
    `,zn([Ko({type:Number})],jn.prototype,"added",2),zn([Ko({type:Number})],jn.prototype,"modified",2),zn([Ko({type:Number})],jn.prototype,"removed",2),jn=zn([Yo("commit-stats")],jn);var Vn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Yn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Wn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Vn(t,o,s),s};let Qn=class extends Vo{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?Ao`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:Ao`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return Ao`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" class="content">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};Qn.styles=jt`
		:host {
			display: flex;
			flex-direction: column;
			background-color: var(--vscode-sideBar-background);
		}

		* {
			box-sizing: border-box;
		}

		.header {
			flex: none;
			display: flex;
			background-color: var(--vscode-sideBarSectionHeader-background);
			color: var(--vscode-sideBarSectionHeader-foreground);
			border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
			position: relative;
		}

		.header:focus-within {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}

		.label {
			appearance: none;
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 100%;
			padding: 0;
			border: none;
			text-align: left;
			font-family: var(--font-family);
			font-size: 1.1rem;
			line-height: 2.2rem;
			height: 2.2rem;
			background: transparent;
			color: inherit;
			cursor: pointer;
			outline: none;
			text-overflow: ellipsis;
		}

		.title {
			font-weight: bold;
			text-transform: uppercase;
		}

		.subtitle {
			margin-left: 1rem;
			opacity: 0.6;
		}

		.icon {
			font-weight: normal;
			margin: 0 0.2rem;
		}

		.content {
			overflow: auto;
			/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
			padding-top: 0.6rem;
		}

		:host([collapsable]:not([expanded])) .content,
		:host([collapsable][expanded='false']) .content {
			display: none;
		}

		slot[name='actions']::slotted(*) {
			flex: none;
			margin-left: auto;
		}
	`,Yn([Ko({type:Boolean,reflect:!0})],Qn.prototype,"collapsable",2),Yn([Ko({type:Boolean,reflect:!0})],Qn.prototype,"expanded",2),Yn([Ko({type:Boolean,reflect:!0})],Qn.prototype,"loading",2),Qn=Yn([Yo("webview-pane")],Qn);var Kn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,Zn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Gn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Kn(t,o,s),s};const Xn=nt`
	<template class="${e=>e.mode}${e=>e.active?" active":""}" role="progressbar">
		<div class="progress-bar"></div>
	</template>
`,Jn=ft`
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

	:host(.active) .progress-bar {
		display: inherit;
	}

	:host(.discrete) .progress-bar {
		left: 0;
		transition: width 0.1s linear;
	}

	:host(.discrete.done) .progress-bar {
		width: 100%;
	}

	:host(.infinite) .progress-bar {
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
`;let ei=class extends Ot{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}};Zn([vt({mode:"reflect"})],ei.prototype,"mode",2),Zn([vt({mode:"boolean"})],ei.prototype,"active",2),Zn([vt()],ei.prototype,"position",2),ei=Zn([Tt({name:"progress-indicator",template:Xn,styles:Jn})],ei);var ti=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,ni=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?oi(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&ti(t,o,s),s};const ii=nt`
	<template role="tree">
		<slot ${Ft("itemNodes")}></slot>
	</template>
`,si=ft`
	::slotted(*) {
		box-sizing: inherit;
	}
`;let ri=class extends Ot{itemNodesChanged(e,t){if(this.itemNodesDisposer?.(),!t?.length)return;const o=t?.filter((e=>1===e.nodeType)).map((e=>{const t=this.handleKeydown.bind(this),o=this.handleBeforeSelected.bind(this),n=this.handleSelected.bind(this);return e.addEventListener("keydown",t,!1),e.addEventListener("select",o,!1),e.addEventListener("selected",n,!1),{dispose:function(){e?.removeEventListener("keydown",t,!1),e?.removeEventListener("select",o,!1),e?.removeEventListener("selected",n,!1)}}}));this.itemNodesDisposer=()=>{o?.forEach((({dispose:e})=>e()))}}disconnectedCallback(){this.itemNodesDisposer?.()}handleBeforeSelected(e){if(!e.target)return;const t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.branch)return;function t(e){return parseInt(e.getAttribute("level")??"0",10)}function o(e){const o=t(e);let n=e.previousElementSibling;for(;n;){if(t(n)<o)return n;n=n.previousElementSibling}}const n=e.target,i=t(n);let s=n.nextElementSibling;for(;s&&i!=t(s);){const t=o(s);s.setAttribute("parentexpanded",!1===t?.expanded?"false":"true"),s.setAttribute("expanded",e.detail.expanded?"true":"false"),s=s.nextElementSibling}}handleKeydown(e){if(!e.target)return;const t=e.target;if("Enter"===e.key||" "===e.key)t.select({preserveFocus:"Enter"!==e.key,viewColumn:e.altKey?-2:void 0});else if("ArrowUp"===e.key){const e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){const e=t.nextElementSibling;e?.focus()}}};function ai(e,t,o){return{index:e,removed:t,addedCount:o}}ni([_e],ri.prototype,"itemNodes",2),ri=ni([Tt({name:"list-container",template:ii,styles:si})],ri);const ci=0,li=1,hi=2,di=3;function ui(e,t,o,n,i,s){let r=0,a=0;const c=Math.min(o-t,s-i);if(0===t&&0===i&&(r=function(e,t,o){for(let n=0;n<o;++n)if(e[n]!==t[n])return n;return o}(e,n,c)),o===e.length&&s===n.length&&(a=function(e,t,o){let n=e.length,i=t.length,s=0;for(;s<o&&e[--n]===t[--i];)s++;return s}(e,n,c-r)),i+=r,s-=a,(o-=a)-(t+=r)==0&&s-i==0)return fe;if(t===o){const e=ai(t,[],0);for(;i<s;)e.removed.push(n[i++]);return[e]}if(i===s)return[ai(t,[],o-t)];const l=function(e){let t=e.length-1,o=e[0].length-1,n=e[t][o];const i=[];for(;t>0||o>0;){if(0===t){i.push(hi),o--;continue}if(0===o){i.push(di),t--;continue}const s=e[t-1][o-1],r=e[t-1][o],a=e[t][o-1];let c;c=r<a?r<s?r:s:a<s?a:s,c===s?(s===n?i.push(ci):(i.push(li),n=s),t--,o--):c===r?(i.push(di),t--,n=r):(i.push(hi),o--,n=a)}return i.reverse(),i}(function(e,t,o,n,i,s){const r=s-i+1,a=o-t+1,c=new Array(r);let l,h;for(let e=0;e<r;++e)c[e]=new Array(a),c[e][0]=e;for(let e=0;e<a;++e)c[0][e]=e;for(let o=1;o<r;++o)for(let s=1;s<a;++s)e[t+s-1]===n[i+o-1]?c[o][s]=c[o-1][s-1]:(l=c[o-1][s]+1,h=c[o][s-1]+1,c[o][s]=l<h?l:h);return c}(e,t,o,n,i,s)),h=[];let d,u=t,b=i;for(let e=0;e<l.length;++e)switch(l[e]){case ci:void 0!==d&&(h.push(d),d=void 0),u++,b++;break;case li:void 0===d&&(d=ai(u,[],0)),d.addedCount++,u++,d.removed.push(n[b]),b++;break;case hi:void 0===d&&(d=ai(u,[],0)),d.addedCount++,u++;break;case di:void 0===d&&(d=ai(u,[],0)),d.removed.push(n[b]),b++}return void 0!==d&&h.push(d),h}const bi=Array.prototype.push;function fi(e,t,o,n){const i=ai(t,o,n);let s=!1,r=0;for(let t=0;t<e.length;t++){const o=e[t];if(o.index+=r,s)continue;const n=(a=i.index,c=i.index+i.removed.length,l=o.index,h=o.index+o.addedCount,c<l||h<a?-1:c===l||h===a?0:a<l?c<h?c-l:h-l:h<c?h-a:c-a);if(n>=0){e.splice(t,1),t--,r-=o.addedCount-o.removed.length,i.addedCount+=o.addedCount-n;const a=i.removed.length+o.removed.length-n;if(i.addedCount||a){let e=o.removed;if(i.index<o.index){const t=i.removed.slice(0,o.index-i.index);bi.apply(t,e),e=t}if(i.index+i.removed.length>o.index+o.addedCount){const t=i.removed.slice(o.index+o.addedCount-i.index);bi.apply(e,t)}i.removed=e,o.index<i.index&&(i.index=o.index)}else s=!0}else if(i.index<o.index){s=!0,e.splice(t,0,i),t++;const n=i.addedCount-i.removed.length;o.index+=n,r+=n}}var a,c,l,h;s||e.push(i)}function pi(e,t){let o=[];const n=function(e){const t=[];for(let o=0,n=e.length;o<n;o++){const n=e[o];fi(t,n.index,n.removed,n.addedCount)}return t}(t);for(let t=0,i=n.length;t<i;++t){const i=n[t];1!==i.addedCount||1!==i.removed.length?o=o.concat(ui(e,i.index,i.index+i.addedCount,i.removed,0,i.removed.length)):i.removed[0]!==e[i.index]&&o.push(i)}return o}let gi=!1;function mi(e,t){let o=e.index;const n=t.length;return o>n?o=n-e.addedCount:o<0&&(o=n+e.removed.length+o-e.addedCount),o<0&&(o=0),e.index=o,e}class vi extends ke{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,xe.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,xe.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const o=void 0===t?pi(this.source,e):ui(this.source,0,this.source.length,t,0,t.length);this.notify(o)}}const yi=Object.freeze({positioning:!1,recycle:!0});function wi(e,t,o,n){e.bind(t[o],n)}function $i(e,t,o,n){const i=Object.create(n);i.index=o,i.length=t.length,e.bind(t[o],i)}class xi{constructor(e,t,o,n,i,s){this.location=e,this.itemsBinding=t,this.templateBinding=n,this.options=s,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=wi,this.itemsBindingObserver=Ae.binding(t,this,o),this.templateBindingObserver=Ae.binding(n,this,i),s.positioning&&(this.bindView=$i)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=fe);const t=this.itemsObserver,o=this.itemsObserver=Ae.getNotifier(this.items),n=t!==o;n&&null!==t&&t.unsubscribe(this),(n||e)&&o.subscribe(this)}updateViews(e){const t=this.childContext,o=this.views,n=this.bindView,i=this.items,s=this.template,r=this.options.recycle,a=[];let c=0,l=0;for(let h=0,d=e.length;h<d;++h){const d=e[h],u=d.removed;let b=0,f=d.index;const p=f+d.addedCount,g=o.splice(d.index,u.length),m=l=a.length+g.length;for(;f<p;++f){const e=o[f],h=e?e.firstChild:this.location;let d;r&&l>0?(b<=m&&g.length>0?(d=g[b],b++):(d=a[c],c++),l--):d=s.create(),o.splice(f,0,d),n(d,i,f,t),d.insertBefore(h)}g[b]&&a.push(...g.slice(b))}for(let e=c,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=o.length;e<t;++e){const n=o[e].context;n.length=t,n.index=e}}refreshAllViews(e=!1){const t=this.items,o=this.childContext,n=this.template,i=this.location,s=this.bindView;let r=t.length,a=this.views,c=a.length;if(0!==r&&!e&&this.options.recycle||(et.disposeContiguousBatch(a),c=0),0===c){this.views=a=new Array(r);for(let e=0;e<r;++e){const r=n.create();s(r,t,e,o),a[e]=r,r.insertBefore(i)}}else{let e=0;for(;e<r;++e)if(e<c){s(a[e],t,e,o)}else{const r=n.create();s(r,t,e,o),a.push(r),r.insertBefore(i)}const l=a.splice(e,c-e);for(e=0,r=l.length;e<r;++e)l[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,o=e.length;t<o;++t)e[t].unbind()}}class ki extends Ee{constructor(e,t,o){super(),this.itemsBinding=e,this.templateBinding=t,this.options=o,this.createPlaceholder=xe.createBlockPlaceholder,function(){if(gi)return;gi=!0,Ae.setArrayObserverFactory((e=>new vi(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,o=e.push,n=e.reverse,i=e.shift,s=e.sort,r=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,o=t.apply(this,arguments),n=this.$fastController;return void 0!==n&&e&&n.addSplice(ai(this.length,[o],0)),o},e.push=function(){const e=o.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(mi(ai(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const o=n.apply(this,arguments);return void 0!==t&&t.reset(e),o},e.shift=function(){const e=this.length>0,t=i.apply(this,arguments),o=this.$fastController;return void 0!==o&&e&&o.addSplice(ai(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const o=s.apply(this,arguments);return void 0!==t&&t.reset(e),o},e.splice=function(){const e=r.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(mi(ai(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(mi(ai(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=Ae.isVolatileBinding(e),this.isTemplateBindingVolatile=Ae.isVolatileBinding(t)}createBehavior(e){return new xi(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const Ci={toView:function(e){return e.toString()},fromView:function(e){return parseInt(e,10)}};var Ai=Object.defineProperty,_i=Object.getOwnPropertyDescriptor,Si=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?_i(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Ai(t,o,s),s};const Oi=nt`
	<template
		role="treeitem"
		aria-expanded="${e=>!0===e.expanded?"true":"false"}"
		aria-hidden="${e=>e.isHidden}"
	>
		<button
			id="item"
			class="item"
			type="button"
			@click="${(e,t)=>e.onItemClick(t.event)}"
			@dblclick="${(e,t)=>e.onDblItemClick(t.event)}"
		>
			${function(e,t,o=yi){return new ki(e,"function"==typeof t?t:()=>t,Object.assign(Object.assign({},yi),o))}((e=>e.treeLeaves),nt`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`)}
			${dn((e=>e.branch),nt`<span class="node"
					><code-icon
						class="branch"
						icon="${e=>e.expanded?"chevron-down":"chevron-right"}"
					></code-icon
				></span>`)}
			<span class="icon"><slot name="icon"></slot></span>
			<span class="text">
				<span class="main"><slot></slot></span>
				<span class="description"><slot name="description"></slot></span>
			</span>
		</button>
		<nav class="actions"><slot name="actions"></slot></nav>
	</template>
`,Ti=ft`
	:host {
		box-sizing: border-box;
		padding-left: var(--gitlens-gutter-width);
		padding-right: var(--gitlens-scrollbar-gutter-width);
		padding-top: 0.1rem;
		padding-bottom: 0.1rem;
		line-height: 2.2rem;
		height: 2.2rem;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-size: var(--vscode-font-size);
		color: var(--vscode-sideBar-foreground);

		content-visibility: auto;
		contain-intrinsic-size: auto 2.2rem;
	}

	:host(:hover) {
		color: var(--vscode-list-hoverForeground);
		background-color: var(--vscode-list-hoverBackground);
	}

	:host([active]) {
		color: var(--vscode-list-inactiveSelectionForeground);
		background-color: var(--vscode-list-inactiveSelectionBackground);
	}

	:host(:focus-within) {
		outline: 1px solid var(--vscode-list-focusOutline);
		outline-offset: -0.1rem;
		color: var(--vscode-list-activeSelectionForeground);
		background-color: var(--vscode-list-activeSelectionBackground);
	}

	:host([aria-hidden='true']) {
		display: none;
	}

	* {
		box-sizing: border-box;
	}

	.item {
		appearance: none;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 0.6rem;
		width: 100%;
		padding: 0;
		text-decoration: none;
		color: inherit;
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
		min-width: 0;
	}

	.icon {
		display: inline-block;
		width: 1.6rem;
		text-align: center;
	}

	slot[name='icon']::slotted(*) {
		width: 1.6rem;
		aspect-ratio: 1;
		vertical-align: text-bottom;
	}

	.node {
		display: inline-block;
		width: 1.6rem;
		text-align: center;
	}

	.node--connector {
		position: relative;
	}
	.node--connector::before {
		content: '';
		position: absolute;
		height: 2.2rem;
		border-left: 1px solid transparent;
		top: 50%;
		transform: translate(-50%, -50%);
		left: 0.8rem;
		width: 0.1rem;
		transition: border-color 0.1s linear;
		opacity: 0.4;
	}

	:host-context(.indentGuides-always) .node--connector::before,
	:host-context(.indentGuides-onHover:focus-within) .node--connector::before,
	:host-context(.indentGuides-onHover:hover) .node--connector::before {
		border-color: var(--vscode-tree-indentGuidesStroke);
	}

	.text {
		overflow: hidden;
		white-space: nowrap;
		text-align: left;
		text-overflow: ellipsis;
		flex: 1;
	}

	.description {
		opacity: 0.7;
		margin-left: 0.3rem;
	}

	.actions {
		flex: none;
		user-select: none;
		color: var(--vscode-icon-foreground);
	}

	:host(:focus-within) .actions {
		color: var(--vscode-list-activeSelectionIconForeground);
	}

	:host(:not(:hover):not(:focus-within)) .actions {
		display: none;
	}

	slot[name='actions']::slotted(*) {
		display: flex;
		align-items: center;
	}
`;let Pi=class extends Ot{constructor(){super(...arguments),this.tree=!1,this.branch=!1,this.expanded=!0,this.parentexpanded=!0,this.level=1,this.active=!1}get treeLeaves(){const e=this.level-1;return e<1?[]:Array.from({length:e},((e,t)=>t+1))}get isHidden(){return!1===this.parentexpanded||!this.branch&&!this.expanded?"true":"false"}onItemClick(e){this.select(e.altKey?{viewColumn:-2}:void 0)}onDblItemClick(e){this.select({preview:!1,viewColumn:e.altKey||e.ctrlKey||e.metaKey?-2:void 0})}select(e,t=!1){this.$emit("select"),this.branch&&(this.expanded=!this.expanded),this.active=!0,t||window.requestAnimationFrame((()=>{this.$emit("selected",{tree:this.tree,branch:this.branch,expanded:this.expanded,level:this.level,showOptions:e})}))}deselect(){this.active=!1}focus(e){this.shadowRoot?.getElementById("item")?.focus(e)}};Si([vt({mode:"boolean"})],Pi.prototype,"tree",2),Si([vt({mode:"boolean"})],Pi.prototype,"branch",2),Si([vt({mode:"boolean"})],Pi.prototype,"expanded",2),Si([vt({mode:"boolean"})],Pi.prototype,"parentexpanded",2),Si([vt({converter:Ci})],Pi.prototype,"level",2),Si([vt({mode:"boolean"})],Pi.prototype,"active",2),Si([Se],Pi.prototype,"treeLeaves",1),Si([Se],Pi.prototype,"isHidden",1),Pi=Si([Tt({name:"list-item",template:Oi,styles:Ti})],Pi);class Ei{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}var Mi=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Li=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Bi(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Mi(t,o,s),s};const Di=nt`
	<list-item
		${Ni="base",new Be("fast-ref",Ei,Ni)}
		tree="${e=>e.tree}"
		level="${e=>e.level}"
		active="${e=>e.active}"
		expanded="${e=>e.expanded}"
		parentexpanded="${e=>e.parentexpanded}"
		@selected="${(e,t)=>e.onComparePrevious(t.event)}"
	>
		<img slot="icon" src="${e=>e.icon}" title="${e=>e.statusName}" alt="${e=>e.statusName}" />
		${e=>e.fileName}
		${dn((e=>!e.tree),nt`<span slot="description">${e=>e.filePath}</span>`)}
		<span slot="actions">
			<a
				class="change-list__action"
				@click="${(e,t)=>e.onOpenFile(t.event)}"
				href="#"
				title="Open file"
				aria-label="Open file"
				><code-icon icon="go-to-file"></code-icon
			></a>
			${dn((e=>!e.uncommitted),nt`
					<a
						class="change-list__action"
						@click="${(e,t)=>e.onCompareWorking(t.event)}"
						href="#"
						title="Open Changes with Working File"
						aria-label="Open Changes with Working File"
						><code-icon icon="git-compare"></code-icon
					></a>
					${dn((e=>!e.stash),nt`<a
								class="change-list__action"
								@click="${(e,t)=>e.onOpenFileOnRemote(t.event)}"
								href="#"
								title="Open on remote"
								aria-label="Open on remote"
								><code-icon icon="globe"></code-icon></a
							><a
								class="change-list__action"
								@click="${(e,t)=>e.onMoreActions(t.event)}"
								href="#"
								title="Show more actions"
								aria-label="Show more actions"
								><code-icon icon="ellipsis"></code-icon
							></a>`)}
				`)}
		</span>
	</list-item>
`;var Ni;const Ri=ft`
	.change-list__action {
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		border-radius: 0.25em;
		color: inherit;
		padding: 2px;
		vertical-align: text-bottom;
		text-decoration: none;
	}
	.change-list__action:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	.change-list__action:hover {
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	.change-list__action:active {
		background-color: var(--vscode-toolbar-activeBackground);
	}
`,Fi={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let Ii=class extends Ot{constructor(){super(...arguments),this.tree=!1,this.expanded=!0,this.parentexpanded=!0,this.level=1,this.active=!1,this.stash=!1,this.uncommitted=!1,this.icon="",this.path="",this.repo="",this.status=""}select(e){this.base?.select(e)}deselect(){this.base?.deselect()}focus(e){this.base?.focus(e)}get isHidden(){return this.base?.isHidden??"false"}get pathIndex(){return this.path.lastIndexOf("/")}get fileName(){return this.pathIndex>-1?this.path.substring(this.pathIndex+1):this.path}get filePath(){return!this.tree&&this.pathIndex>-1?this.path.substring(0,this.pathIndex):""}get statusName(){return""!==this.status?Fi[this.status]:""}getEventDetail(e){return{path:this.path,repoPath:this.repo,showOptions:e}}onOpenFile(e){this.$emit("file-open",this.getEventDetail({preview:!1,viewColumn:e.altKey?-2:void 0}))}onOpenFileOnRemote(e){this.$emit("file-open-on-remote",this.getEventDetail({preview:!1,viewColumn:e.altKey?-2:void 0}))}onCompareWorking(e){this.$emit("file-compare-working",this.getEventDetail({preview:!1,viewColumn:e.altKey?-2:void 0}))}onComparePrevious(e){this.$emit("file-compare-previous",this.getEventDetail(e.detail.showOptions))}onMoreActions(e){this.$emit("file-more-actions",this.getEventDetail())}};Li([vt({mode:"boolean"})],Ii.prototype,"tree",2),Li([vt({mode:"boolean"})],Ii.prototype,"expanded",2),Li([vt({mode:"boolean"})],Ii.prototype,"parentexpanded",2),Li([vt({converter:Ci})],Ii.prototype,"level",2),Li([vt({mode:"boolean"})],Ii.prototype,"active",2),Li([vt({mode:"boolean"})],Ii.prototype,"stash",2),Li([vt({mode:"boolean"})],Ii.prototype,"uncommitted",2),Li([vt],Ii.prototype,"icon",2),Li([vt],Ii.prototype,"path",2),Li([vt],Ii.prototype,"repo",2),Li([vt],Ii.prototype,"status",2),Li([Se],Ii.prototype,"fileName",1),Li([Se],Ii.prototype,"filePath",1),Ii=Li([Tt({name:"file-change-list-item",template:Di,styles:Ri})],Ii);const Hi="0000000000000000000000000000000000000000";class Ui extends he{constructor(){super("CommitDetailsApp")}onInitialize(){this.renderContent()}onBind(){return[M.on("file-change-list-item","file-open-on-remote",(e=>this.onOpenFileOnRemote(e.detail))),M.on("file-change-list-item","file-open",(e=>this.onOpenFile(e.detail))),M.on("file-change-list-item","file-compare-working",(e=>this.onCompareFileWithWorking(e.detail))),M.on("file-change-list-item","file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),M.on("file-change-list-item","file-more-actions",(e=>this.onFileMoreActions(e.detail))),M.on('[data-action="commit-actions"]',"click",(e=>this.onCommitActions(e))),M.on('[data-action="pick-commit"]',"click",(e=>this.onPickCommit(e))),M.on('[data-action="search-commit"]',"click",(e=>this.onSearchCommit(e))),M.on('[data-action="autolink-settings"]',"click",(e=>this.onAutolinkSettings(e))),M.on("[data-switch-value]","click",(e=>this.onToggleFilesLayout(e))),M.on('[data-action="pin"]',"click",(e=>this.onTogglePin(e))),M.on('[data-action="back"]',"click",(e=>this.onNavigate("back",e))),M.on('[data-action="forward"]',"click",(e=>this.onNavigate("forward",e))),M.on('[data-region="rich-pane"]',"expanded-change",(e=>this.onExpandedChange(e.detail))),M.on('[data-action="explain-commit"]',"click",(e=>this.onExplainCommit(e))),M.on('[data-action="switch-ai"]',"click",(e=>this.onSwitchAiModel(e)))]}onMessageReceived(e){const t=e.data;if(this.log(`onMessageReceived(${t.id}): name=${t.method}`),t.method===_.method)l(_,t,(e=>{e.state,this.state=e.state,this.setState(this.state),this.renderContent()}));else super.onMessageReceived?.(e)}onCommandClickedCore(e){const t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this.sendCommand(u,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onExplainCommit(e){const t=e.target;if("true"===t.getAttribute("aria-busy"))return;t.setAttribute("aria-busy","true"),e.preventDefault();const o=document.querySelector('[data-region="commit-explanation"]');try{const e=await this.sendCommandWithCompletion(x,void 0,S);o.classList.toggle("has-error",null!=e.error),e.error?o.innerHTML=`<p class="ai-content__summary scrollable">${e.error.message??"Error retrieving content"}</p>`:e.summary?o.innerHTML=`<p class="ai-content__summary scrollable">${e.summary}</p>`:o.innerHTML=""}catch(e){o.classList.add("has-error"),o.innerHTML='<p class="ai-content__summary scrollable">Error retrieving content</p>'}finally{t.removeAttribute("aria-busy"),o.scrollIntoView()}}onToggleFilesLayout(e){const t=e.target?.dataset.switchList??void 0;if(t===this.state.preferences?.files?.layout)return;const o={...this.state.preferences?.files,layout:t??n.Auto,compact:this.state.preferences?.files?.compact??!0,threshold:this.state.preferences?.files?.threshold??5,icon:this.state.preferences?.files?.icon??"type"};this.state.preferences={...this.state.preferences,files:o},this.renderFiles(this.state),this.sendCommand(A,{files:o})}onExpandedChange(e){this.state.preferences={...this.state.preferences,autolinksExpanded:e.expanded},this.sendCommand(A,{autolinksExpanded:e.expanded})}onNavigate(e,t){t.preventDefault(),this.sendCommand(C,{direction:e})}onTogglePin(e){e.preventDefault(),this.sendCommand(k,{pin:!this.state.pinned})}onAutolinkSettings(e){e.preventDefault(),this.sendCommand($,void 0)}onSearchCommit(e){this.sendCommand(w,void 0)}onPickCommit(e){this.sendCommand(y,void 0)}onOpenFileOnRemote(e){this.sendCommand(g,e)}onOpenFile(e){this.sendCommand(p,e)}onCompareFileWithWorking(e){this.sendCommand(m,e)}onCompareFileWithPrevious(e){this.sendCommand(v,e)}onFileMoreActions(e){this.sendCommand(f,e)}onCommitActions(e){if(e.preventDefault(),void 0===this.state.selected)return void e.stopPropagation();const t=e.target?.getAttribute("data-action-type");null!=t&&this.sendCommand(b,{action:t,alt:e.altKey})}renderCommit(e){const t=void 0!==e.selected,o=document.getElementById("empty"),n=document.getElementById("main");return o?.setAttribute("aria-hidden",t?"true":"false"),n?.setAttribute("aria-hidden",t?"false":"true"),t}renderRichContent(){this.renderCommit(this.state)&&(this.renderMessage(this.state),this.renderPullRequestAndAutolinks(this.state))}renderContent(){this.renderCommit(this.state)&&(this.renderActions(this.state),this.renderNavigation(this.state),this.renderPin(this.state),this.renderSha(this.state),this.renderMessage(this.state),this.renderAuthor(this.state),this.renderStats(this.state),this.renderFiles(this.state),this.renderPullRequestAndAutolinks(this.state),this.resetExplainCommit())}resetExplainCommit(){const e=document.querySelector('[data-region="explain-pane"]');e.removeAttribute("expanded"),e.querySelector("button").removeAttribute("aria-busy");const t=e.querySelector('[data-region="commit-explanation"]');t.classList.remove("has-error"),t.innerHTML=""}renderActions(e){const t=e.selected?.sha===Hi,o=t.toString();for(const e of document.querySelectorAll('[data-action-type="sha"],[data-action-type="more"]'))e.setAttribute("aria-hidden",o);document.querySelector('[data-action-type="scm"]')?.setAttribute("aria-hidden",(!t).toString())}renderNavigation(e){const t=document.querySelector('[data-action="back"]'),o=document.querySelector('[data-action="forward"]');if(null==t||null==o)return;e.navigationStack.count<=1?(t.setAttribute("aria-disabled","true"),t.classList.toggle("is-disabled",!0),o.setAttribute("aria-hidden","true"),o.classList.toggle("is-hidden",!0)):0===e.navigationStack.position?(t.setAttribute("aria-disabled","false"),t.classList.toggle("is-disabled",!1),o.setAttribute("aria-hidden","true"),o.classList.toggle("is-hidden",!0)):e.navigationStack.position===e.navigationStack.count-1?(t.setAttribute("aria-disabled","true"),t.classList.toggle("is-disabled",!0),o.setAttribute("aria-hidden","false"),o.classList.toggle("is-hidden",!1)):(t.setAttribute("aria-disabled","false"),t.classList.toggle("is-disabled",!1),o.setAttribute("aria-hidden","false"),o.classList.toggle("is-hidden",!1));const n=document.querySelector('[data-region="commit-hint"]');if(null==n)return;const i=n.closest(".commit-action");e.navigationStack.hint?(n.innerText=e.navigationStack.hint,i.setAttribute("aria-hidden","false"),i.classList.toggle("is-hidden",!1),i.setAttribute("data-action",e.pinned?"forward":"back")):(n.innerText="",i.removeAttribute("data-action"),i.removeAttribute("title"),i.setAttribute("aria-hidden","true"),i.classList.toggle("is-hidden",!0))}renderPin(e){const t=document.querySelector('[data-action="pin"]');if(null==t)return;const o=e.pinned?"Unpin this Commit\nRestores Automatic Following":"Pin this Commit\nSuspends Automatic Following";t.setAttribute("aria-label",o),t.setAttribute("title",o),t.classList.toggle("is-active",e.pinned),t.closest(".commit-details__actionbar")?.classList.toggle("is-pinned",e.pinned);const n=t.querySelector('[data-region="commit-pin"]');n?.setAttribute("icon",e.pinned?"gl-pinned-filled":"pin")}renderSha(e){const t=[...document.querySelectorAll('[data-region="shortsha"]')];if(0!==t.length)for(const o of t)o.textContent=e.selected.shortSha}renderChoices(){const e=document.querySelector('[data-region="choices"]');null!=e&&(e.setAttribute("aria-hidden","true"),e.innerHTML="")}renderStats(e){const t=document.querySelector('[data-region="stats"]');if(null!=t)if(null!=e.selected.stats?.changedFiles)if("number"==typeof e.selected.stats.changedFiles)t.innerHTML=`\n\t\t\t<commit-stats added="?" modified="${e.selected.stats.changedFiles}" removed="?"></commit-stats>\n\t\t`;else{const{added:o,deleted:n,changed:i}=e.selected.stats.changedFiles;t.innerHTML=`\n\t\t\t<commit-stats added="${o}" modified="${i}" removed="${n}"></commit-stats>\n\t\t`}else t.innerHTML=""}renderFiles(e){const t=document.querySelector('[data-region="files"]');if(null==t)return;const o=e.preferences?.files?.layout??n.Auto,s=document.querySelector("[data-switch-value]");if(s)switch(o){case n.Auto:s.setAttribute("data-switch-value","list"),s.setAttribute("icon","list-flat"),s.setAttribute("label","View as List");break;case n.List:s.setAttribute("data-switch-value","tree"),s.setAttribute("icon","list-tree"),s.setAttribute("label","View as Tree");break;case n.Tree:s.setAttribute("data-switch-value","auto"),s.setAttribute("icon","gl-list-auto"),s.setAttribute("label","View as Auto")}if(!e.selected.files?.length)return void(t.innerHTML="");let r;r=o===n.Auto?e.selected.files.length>(e.preferences?.files?.threshold??5):o===n.Tree;const a=null!=e.selected.stashNumber?"stash ":e.selected.sha===Hi?"uncommitted ":"";if(r){const o=i(e.selected.files,(e=>e.path.split("/")),((...e)=>e.join("/")),this.state.preferences?.files?.compact??!0),n=qi(o);t.innerHTML=`\n\t\t\t\t\t<li class="change-list__item">\n\t\t\t\t\t\t<list-container class="indentGuides-${e.indentGuides}">\n\t\t\t\t\t\t\t${n.map((({level:e,item:t})=>""===t.name?"":null==t.value?`\n\t\t\t\t\t\t\t\t\t\t\t<list-item level="${e}" tree branch>\n\t\t\t\t\t\t\t\t\t\t\t\t<code-icon slot="icon" icon="folder" title="Directory" aria-label="Directory"></code-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t${t.name}\n\t\t\t\t\t\t\t\t\t\t\t</list-item>\n\t\t\t\t\t\t\t\t\t\t`:`\n\t\t\t\t\t\t\t\t\t\t<file-change-list-item\n\t\t\t\t\t\t\t\t\t\t\ttree\n\t\t\t\t\t\t\t\t\t\t\tlevel="${e}"\n\t\t\t\t\t\t\t\t\t\t\t${a}\n\t\t\t\t\t\t\t\t\t\t\tpath="${t.value.path}"\n\t\t\t\t\t\t\t\t\t\t\trepo="${t.value.repoPath}"\n\t\t\t\t\t\t\t\t\t\t\ticon="${t.value.icon.dark}"\n\t\t\t\t\t\t\t\t\t\t\tstatus="${t.value.status}"\n\t\t\t\t\t\t\t\t\t\t></file-change-list-item>\n\t\t\t\t\t\t\t\t\t`)).join("")}\n\t\t\t\t\t\t</list-container>\n\t\t\t\t\t</li>`}else t.innerHTML=`\n\t\t\t\t<li class="change-list__item">\n\t\t\t\t\t<list-container>\n\t\t\t\t\t\t${e.selected.files.map((e=>`\n\t\t\t\t\t\t\t\t\t\t<file-change-list-item\n\t\t\t\t\t\t\t\t\t\t\t${a}\n\t\t\t\t\t\t\t\t\t\t\tpath="${e.path}"\n\t\t\t\t\t\t\t\t\t\t\trepo="${e.repoPath}"\n\t\t\t\t\t\t\t\t\t\t\ticon="${e.icon.dark}"\n\t\t\t\t\t\t\t\t\t\t\tstatus="${e.status}"\n\t\t\t\t\t\t\t\t\t\t></file-change-list-item>\n\t\t\t\t\t\t\t\t\t`)).join("")}\n\t\t\t\t\t</list-container>\n\t\t\t\t</li>`;t.setAttribute("aria-hidden","false")}renderAuthor(e){const t=document.querySelector('[data-region="author"]');null!=t&&(null!=e.selected?.stashNumber?(t.innerHTML=`\n\t\t\t\t<div class="commit-stashed">\n\t\t\t\t\t<span class="commit-stashed__media"><code-icon class="commit-stashed__icon" icon="inbox"></code-icon></span>\n\t\t\t\t\t<span class="commit-stashed__date">stashed <formatted-date date=${e.selected.author.date} dateFormat="${e.dateFormat}"></formatted-date></span>\n\t\t\t\t</div>\n\t\t\t`,t.setAttribute("aria-hidden","false")):null!=e.selected?.author?(t.innerHTML=`\n\t\t\t\t<commit-identity\n\t\t\t\t\tname="${e.selected.author.name}"\n\t\t\t\t\temail="${e.selected.author.email}"\n\t\t\t\t\tdate=${e.selected.author.date}\n\t\t\t\t\tdateFormat="${e.dateFormat}"\n\t\t\t\t\tavatarUrl="${e.selected.author.avatar??""}"\n\t\t\t\t\tshowAvatar="${e.preferences?.avatars??!0}"\n\t\t\t\t\tactionLabel="${e.selected.sha===Hi?"modified":"committed"}"\n\t\t\t\t></commit-identity>\n\t\t\t`,t.setAttribute("aria-hidden","false")):(t.innerHTML="",t.setAttribute("aria-hidden","true")))}renderTitle(e){const t=document.querySelector('[data-region="commit-title"]');null!=t&&(t.innerHTML=e.selected.shortSha)}renderMessage(e){const t=document.querySelector('[data-region="message"]');if(null==t)return;const o=e.selected.message.indexOf("\0\n\0");t.innerHTML=-1===o?`<strong>${e.selected.message}</strong>`:`<strong>${e.selected.message.substring(0,o)}</strong><br />${e.selected.message.substring(o+3)}`}renderPullRequestAndAutolinks(e){const t=document.querySelector('[data-region="rich-pane"]');if(null==t)return;t.expanded=this.state.preferences?.autolinksExpanded??!0,t.loading=!e.includeRichContent;const o=t.querySelector('[data-region="rich-info"]'),n=t.querySelector('[data-region="autolinks"]'),i=e.autolinkedIssues?.length??0;let s=e.selected.autolinks?.length??0,r=s;if(null!=e.pullRequest||i||s){let t=e.selected.autolinks;t?.length&&i&&(t=t.filter((t=>!e.autolinkedIssues?.some((e=>e.url===t.url))))),n?.setAttribute("aria-hidden","false"),o?.setAttribute("aria-hidden","true"),this.renderAutolinks({...e,selected:{...e.selected,autolinks:t}}),this.renderPullRequest(e),this.renderIssues(e),s=t?.length??0,r=(null!=e.pullRequest?1:0)+i+s}else n?.setAttribute("aria-hidden","true"),o?.setAttribute("aria-hidden","false");const a=t.querySelector('[data-region="autolink-count"]');null!=a&&(a.innerHTML=`${e.includeRichContent||s?`${r} found `:""}${e.includeRichContent?"":"…"}`)}renderAutolinks(e){const t=document.querySelector('[data-region="custom-autolinks"]');null!=t&&(e.selected.autolinks?.length?(t.innerHTML=e.selected.autolinks.map((e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),`\n\t\t\t\t\t\t<issue-pull-request\n\t\t\t\t\t\t\tname="${t?zi(t):""}"\n\t\t\t\t\t\t\turl="${e.url}"\n\t\t\t\t\t\t\tkey="${e.prefix}${e.id}"\n\t\t\t\t\t\t\tstatus=""\n\t\t\t\t\t\t></issue-pull-request>\n\t\t\t\t\t`})).join(""),t.setAttribute("aria-hidden","false")):(t.innerHTML="",t.setAttribute("aria-hidden","true")))}renderPullRequest(e){const t=document.querySelector('[data-region="pull-request"]');null!=t&&(null!=e.pullRequest?(t.innerHTML=`\n\t\t\t\t<issue-pull-request\n\t\t\t\t\tname="${zi(e.pullRequest.title)}"\n\t\t\t\t\turl="${e.pullRequest.url}"\n\t\t\t\t\tkey="#${e.pullRequest.id}"\n\t\t\t\t\tstatus="${e.pullRequest.state}"\n\t\t\t\t\tdate=${e.pullRequest.date}\n\t\t\t\t\tdateFormat="${e.dateFormat}"\n\t\t\t\t></issue-pull-request>\n\t\t\t`,t.setAttribute("aria-hidden","false")):(t.innerHTML="",t.setAttribute("aria-hidden","true")))}renderIssues(e){const t=document.querySelector('[data-region="issue"]');null!=t&&(e.autolinkedIssues?.length?(t.innerHTML=e.autolinkedIssues.map((e=>`\n\t\t\t\t\t\t<issue-pull-request\n\t\t\t\t\t\t\tname="${zi(e.title)}"\n\t\t\t\t\t\t\turl="${e.url}"\n\t\t\t\t\t\t\tkey="${e.id}"\n\t\t\t\t\t\t\tstatus="${e.closed?"closed":"opened"}"\n\t\t\t\t\t\t\tdate="${e.closed?e.closedDate:e.date}"\n\t\t\t\t\t\t></issue-pull-request>\n\t\t\t\t\t`)).join(""),t.setAttribute("aria-hidden","false")):(t.innerHTML="",t.setAttribute("aria-hidden","true")))}}function qi(e,t=0){const o=[];if(null==e)return o;if(o.push({level:t,item:e}),null!=e.children){const n=Array.from(e.children.values());n.sort(((e,t)=>e.value&&t.value?e.relativePath<t.relativePath?-1:e.relativePath>t.relativePath?1:0:(e.value?1:-1)-(t.value?1:-1))),n.forEach((e=>{o.push(...qi(e,t+1))}))}return o}function zi(e){return e.replace(/"/g,"&quot;")}new Ui;var ji=t.b;export{ji as CommitDetailsApp};