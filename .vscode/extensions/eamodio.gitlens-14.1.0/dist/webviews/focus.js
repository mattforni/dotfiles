var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{S:()=>Ls});class o{constructor(e,t=!1){this.method=e,this.reset=t}}class n extends o{}class s extends o{}function r(e,t,o){e.method===t.method&&o(t.params,e)}const i=new n("webview/ready"),a=new n("webview/focus");new n("command/execute"),new n("configuration/preview"),new n("configuration/update"),new s("configuration/didChange"),new s("configuration/didPreview"),new s("webview/didOpenAnchor");const c=new n("focus/pr/openWorktree"),l=new n("focus/pr/switchToBranch"),h=new s("focus/didChange",!0);function d(e,t){let o,n,s,r,i;function a(e){const o=e-(n??0);return null==n||o>=t||o<0}function c(){const e=Date.now();if(a(e))l();else{i=setTimeout(c,t-(e-(n??0)))}}function l(){return i=void 0,o?function(){const t=o,n=s;return o=s=void 0,r=e.apply(n,t),r}():(o=s=void 0,r)}function h(...e){const l=Date.now(),h=a(l);return o=e,s=this,n=l,h&&null==i?(i=setTimeout(c,t),r):(null==i&&(i=setTimeout(c,t)),r)}return h.cancel=function(){null!=i&&clearTimeout(i),o=n=s=i=void 0},h.flush=function(){return null!=i?l():r},h.pending=function(){return null!=i},h}var u=(e=>(e.Off="off",e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e))(u||{});const b="";const f=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel=u.Off}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=p(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=p(this._logLevel),e===u.Off?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??b}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??b}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??b}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??b}${this.toLoggableParams(!1,o)}\n${String(e)}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??b}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??b}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??b}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??b}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return b;const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:b}};function p(e){switch(e){case u.Off:return 0;case u.Error:return 1;case u.Warn:return 2;case u.Info:return 3;case u.Debug:return 4;default:return 0}}var g,v;(v=g||(g={})).on=function(e,t,o,n){let s=!1;if("string"==typeof e){const r=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,r,n??!0),{dispose:()=>{s||(s=!0,document.removeEventListener(t,r,n??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,n??!1),{dispose:()=>{s||(s=!0,e.removeEventListener(t,r,n??!1))}}},v.insertTemplate=function(e,t,o){const n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const n=o.bindings[e];null!=n&&(t.textContent=String(n))}}},v.resetSlot=function(e){e.replaceChildren(),e.className=""};var m=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(m||{});function y(e,t){const o=e+t,n=t<0?o<0?0:o:o>255?255:o;return Math.round(n)}function w(e,t){return $(e,-t)}function $(e,t){const o=function(e){const t=q(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[n,s,r,i]=o,a=255*t/100;return`rgba(${y(n,a)}, ${y(s,a)}, ${y(r,a)}, ${i})`}function x(e,t){const o=B.from(e);return null==o?e:o.transparent(t/100).toString()}function k(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class C{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=k(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class _{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=k(Math.max(Math.min(1,t),0),3),this.l=k(Math.max(Math.min(1,o),0),3),this.a=k(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,s=e.a,r=Math.max(t,o,n),i=Math.min(t,o,n);let a=0,c=0;const l=(i+r)/2,h=r-i;if(h>0){switch(c=Math.min(l<=.5?h/(2*l):h/(2-2*l),1),r){case t:a=(o-n)/h+(o<n?6:0);break;case o:a=(n-t)/h+2;break;case n:a=(t-o)/h+4}a*=60,a=Math.round(a)}return new _(a,c,l,s)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:s}=e;let r,i,a;if(0===o)r=i=a=n;else{const e=n<.5?n*(1+o):n+o-n*o,s=2*n-e;r=_._hue2rgb(s,e,t+1/3),i=_._hue2rgb(s,e,t),a=_._hue2rgb(s,e,t-1/3)}return new C(Math.round(255*r),Math.round(255*i),Math.round(255*a),s)}}class A{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=k(Math.max(Math.min(1,t),0),3),this.v=k(Math.max(Math.min(1,o),0),3),this.a=k(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,s=Math.max(t,o,n),r=s-Math.min(t,o,n),i=0===s?0:r/s;let a;return a=0===r?0:s===t?((o-n)/r%6+6)%6:s===o?(n-t)/r+2:(t-o)/r+4,new A(Math.round(60*a),i,s,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:s}=e,r=n*o,i=r*(1-Math.abs(t/60%2-1)),a=n-r;let[c,l,h]=[0,0,0];return t<60?(c=r,l=i):t<120?(c=i,l=r):t<180?(l=r,h=i):t<240?(l=i,h=r):t<300?(c=i,h=r):t<=360&&(c=r,h=i),c=Math.round(255*(c+a)),l=Math.round(255*(l+a)),h=Math.round(255*(h+a)),new C(c,l,h,s)}}function S(e,t){return t.getPropertyValue(e).trim()}const P=class{static from(e){return e instanceof P?e:q(e)||P.red}static fromCssVariable(e,t){return q(S(e,t))||P.red}static fromHex(e){return N(e)||P.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:_.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:A.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof C)this.rgba=e;else if(e instanceof _)this._hsla=e,this.rgba=_.toRGBA(e);else{if(!(e instanceof A))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=A.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&C.equals(this.rgba,e.rgba)&&_.equals(this.hsla,e.hsla)&&A.equals(this.hsva,e.hsva))}getRelativeLuminance(){return k(.2126*P._relativeLuminanceForComponent(this.rgba.r)+.7152*P._relativeLuminanceForComponent(this.rgba.g)+.0722*P._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new B(new C(0,0,0,e.rgba.a));if(1===t)return new B(new C(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const s=(e,o)=>{const r=e.mix(o,.5),i=r.getRelativeLuminance();return Math.abs(t-i)<1e-7||!n--?r:i>t?s(e,r):s(r,o)},r=(o>t?s(B.black,e):s(e,B.white)).rgba;return new B(new C(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new P(new _(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new P(new _(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:n,a:s}=this.rgba;return new P(new C(t,o,n,s*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new P(new C(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,n=t.a,s=o+n*(1-o);if(s<1e-6)return P.transparent;const r=this.rgba.r*o/s+t.r*n*(1-o)/s,i=this.rgba.g*o/s+t.g*n*(1-o)/s,a=this.rgba.b*o/s+t.b*n*(1-o)/s;return new P(new C(r,i,a,s))}mix(e,t){return function(e,t,o){const n=e.rgba,s=t.rgba;return new B(new C(n.r+o*(s.r-n.r),n.g+o*(s.g-n.g),n.b+o*(s.b-n.b),n.a+o*(s.a-n.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:n,a:s}=this.rgba;return new P(new C(e.rgba.r-s*(e.rgba.r-t),e.rgba.g-s*(e.rgba.g-o),e.rgba.b-s*(e.rgba.b-n),1))}flatten(...e){const t=e.reduceRight(((e,t)=>P._flatten(t,e)));return P._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new P(new C(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return E(e);return O(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),s=t.getRelativeLuminance();return o=o*(s-n)/s,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};let B=P;function O(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function T(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function E(e){return`#${T(e.rgba.r)}${T(e.rgba.g)}${T(e.rgba.b)}`}B.white=new P(new C(255,255,255,1)),B.black=new P(new C(0,0,0,1)),B.red=new P(new C(255,0,0,1)),B.blue=new P(new C(0,0,255,1)),B.green=new P(new C(0,255,0,1)),B.cyan=new P(new C(0,255,255,1)),B.lightgrey=new P(new C(211,211,211,1)),B.transparent=new P(new C(0,0,0,0));const R=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function q(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===m.Hash)return N(e);const t=R.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new B(new C(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new B(new _(n[0],n[1],n[2],n[3]))}return B.red}function N(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==m.Hash)return null;switch(t){case 7:{const t=16*I(e.charCodeAt(1))+I(e.charCodeAt(2)),o=16*I(e.charCodeAt(3))+I(e.charCodeAt(4)),n=16*I(e.charCodeAt(5))+I(e.charCodeAt(6));return new B(new C(t,o,n,1))}case 9:{const t=16*I(e.charCodeAt(1))+I(e.charCodeAt(2)),o=16*I(e.charCodeAt(3))+I(e.charCodeAt(4)),n=16*I(e.charCodeAt(5))+I(e.charCodeAt(6)),s=16*I(e.charCodeAt(7))+I(e.charCodeAt(8));return new B(new C(t,o,n,s/255))}case 4:{const t=I(e.charCodeAt(1)),o=I(e.charCodeAt(2)),n=I(e.charCodeAt(3));return new B(new C(16*t+t,16*o+o,16*n+n))}case 5:{const t=I(e.charCodeAt(1)),o=I(e.charCodeAt(2)),n=I(e.charCodeAt(3)),s=I(e.charCodeAt(4));return new B(new C(16*t+t,16*o+o,16*n+n,(16*s+s)/255))}default:return null}}function I(e){switch(e){case m.Digit0:return 0;case m.Digit1:return 1;case m.Digit2:return 2;case m.Digit3:return 3;case m.Digit4:return 4;case m.Digit5:return 5;case m.Digit6:return 6;case m.Digit7:return 7;case m.Digit8:return 8;case m.Digit9:return 9;case m.a:case m.A:return 10;case m.b:case m.B:return 11;case m.c:case m.C:return 12;case m.d:case m.D:return 13;case m.e:case m.E:return 14;case m.f:case m.F:return 15}return 0}const M=class{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new F);const n=this.listeners.push(null==t?e:[e,t]),s={dispose:()=>{s.dispose=M._noop,this._disposed||n()}};return Array.isArray(o)&&o.push(s),s}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new F);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let L=M;L._noop=function(){};const U={done:!0,value:void 0},D=class{constructor(e){this.element=e,this.next=D.Undefined,this.prev=D.Undefined}};let z=D;z.Undefined=new D(void 0);class F{constructor(){this._first=z.Undefined,this._last=z.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===z.Undefined}clear(){this._first=z.Undefined,this._last=z.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new z(e);if(this._first===z.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===z.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===z.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==z.Undefined&&e.next!==z.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===z.Undefined&&e.next===z.Undefined?(this._first=z.Undefined,this._last=z.Undefined):e.next===z.Undefined?(this._last=this._last.prev,this._last.next=z.Undefined):e.prev===z.Undefined&&(this._first=this._first.next,this._first.prev=z.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===z.Undefined?U:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==z.Undefined;t=t.next)e.push(t.element);return e}}const j=new L,H=j.event;function V(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,s=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),r=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),i=t.style,a=S("--vscode-editor-background",o);let c=S("--vscode-editor-foreground",o);c||(c=S("--vscode-foreground",o));let l=S("--color-background",o);return i.setProperty("--color-background--lighten-05",$(l,5)),i.setProperty("--color-background--darken-05",w(l,5)),i.setProperty("--color-background--lighten-075",$(l,7.5)),i.setProperty("--color-background--darken-075",w(l,7.5)),i.setProperty("--color-background--lighten-10",$(l,10)),i.setProperty("--color-background--darken-10",w(l,10)),i.setProperty("--color-background--lighten-15",$(l,15)),i.setProperty("--color-background--darken-15",w(l,15)),i.setProperty("--color-background--lighten-30",$(l,30)),i.setProperty("--color-background--darken-30",w(l,30)),i.setProperty("--color-background--lighten-50",$(l,50)),i.setProperty("--color-background--darken-50",w(l,50)),l=S("--color-button-background",o),i.setProperty("--color-button-background--darken-30",w(l,30)),l=S("--color-highlight",o),i.setProperty("--color-highlight--75",x(l,75)),i.setProperty("--color-highlight--50",x(l,50)),i.setProperty("--color-highlight--25",x(l,25)),l=S("--color-button-secondary-background",o),i.setProperty("--color-button-secondary-background--darken-30",w(l,30)),l=S("--color-foreground",o),i.setProperty("--color-foreground--85",x(l,85)),i.setProperty("--color-foreground--75",x(l,75)),i.setProperty("--color-foreground--65",x(l,65)),i.setProperty("--color-foreground--50",x(l,50)),l=S("--color-link-foreground",o),i.setProperty("--color-link-foreground--darken-20",w(l,20)),i.setProperty("--color-link-foreground--lighten-20",$(l,20)),l=S("--color-alert-infoBackground",o),i.setProperty("--color-alert-infoHoverBackground",s?w(l,5):$(l,5)),l=S("--color-alert-warningBackground",o),i.setProperty("--color-alert-warningHoverBackground",s?w(l,5):$(l,5)),l=S("--color-alert-errorBackground",o),i.setProperty("--color-alert-errorHoverBackground",s?w(l,5):$(l,5)),l=s?w(a,5):$(a,5),i.setProperty("--color-alert-neutralBackground",l),i.setProperty("--color-alert-neutralHoverBackground",s?w(l,5):$(l,5)),{colors:{background:a,foreground:c},computedStyle:o,isLightTheme:s,isHighContrastTheme:r,isInitializing:null==e}}let W=0;function Q(){return 1073741824===W?W=1:W++,`webview:${W}`}class G{constructor(e){this.appName=e;const t=[],o=V();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(H(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",f.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},u.Off),this.log("ctor()"),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{j.fire(V(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("ctor(): initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(g.on(window,"message",this.onMessageReceived.bind(this))),this.sendCommand(i,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(g.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=d((e=>{this.sendCommand(a,e)}),150);this.bindDisposables.push(g.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),g.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){f.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=Q();this.log(`sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){const n=Q();this.log(`sendCommandWithCompletion(${n}): name=${e.method}`);const s=new Promise(((e,t)=>{let s;const i=[g.on(window,"message",(t=>{r(o,t.data,(o=>{t.data.completionId===n&&(i.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=s&&(clearTimeout(s),s=void 0)}}];s=setTimeout((()=>{s=void 0,i.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${o.method}`))}),6e4)}));return this.postMessage({id:n,method:e.method,params:t,completionId:n}),s}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}const Y=window,Z=Y.ShadowRoot&&(void 0===Y.ShadyCSS||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),K=new WeakMap;class X{constructor(e,t,o){if(this._$cssResult$=!0,o!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Z&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=K.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&K.set(t,e))}return e}toString(){return this.cssText}}const ee=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new X(o,e,J)},te=Z?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new X("string"==typeof e?e:e+"",void 0,J))(t)})(e):e;var oe;const ne=window,se=ne.trustedTypes,re=se?se.emptyScript:"",ie=ne.reactiveElementPolyfillSupport,ae={toAttribute(e,t){switch(t){case Boolean:e=e?re:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},ce=(e,t)=>t!==e&&(t==t||e==e),le={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:ce},he="finalized";class de extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||le}static finalize(){if(this.hasOwnProperty(he))return!1;this[he]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(te(e))}else void 0!==e&&t.push(te(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{Z?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),n=Y.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=le){var n;const s=this.constructor._$Ep(e,o);if(void 0!==s&&!0===o.reflect){const r=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:ae).toAttribute(t,o.type);this._$El=e,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(e,t){var o;const n=this.constructor,s=n._$Ev.get(e);if(void 0!==s&&this._$El!==s){const e=n.getPropertyOptions(s),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:ae;this._$El=s,this[s]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||ce)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var ue;de[he]=!0,de.elementProperties=new Map,de.elementStyles=[],de.shadowRootOptions={mode:"open"},null==ie||ie({ReactiveElement:de}),(null!==(oe=ne.reactiveElementVersions)&&void 0!==oe?oe:ne.reactiveElementVersions=[]).push("1.6.2");const be=window,fe=be.trustedTypes,pe=fe?fe.createPolicy("lit-html",{createHTML:e=>e}):void 0,ge="$lit$",ve=`lit$${(Math.random()+"").slice(9)}$`,me="?"+ve,ye=`<${me}>`,we=document,$e=()=>we.createComment(""),xe=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ke=Array.isArray,Ce=e=>ke(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),_e="[ \t\n\f\r]",Ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Pe=/>/g,Be=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Oe=/'/g,Te=/"/g,Ee=/^(?:script|style|textarea|title)$/i,Re=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),qe=Re(1),Ne=(Re(2),Symbol.for("lit-noChange")),Ie=Symbol.for("lit-nothing"),Me=new WeakMap,Le=we.createTreeWalker(we,129,null,!1);function Ue(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==pe?pe.createHTML(t):t}const De=(e,t)=>{const o=e.length-1,n=[];let s,r=2===t?"<svg>":"",i=Ae;for(let t=0;t<o;t++){const o=e[t];let a,c,l=-1,h=0;for(;h<o.length&&(i.lastIndex=h,c=i.exec(o),null!==c);)h=i.lastIndex,i===Ae?"!--"===c[1]?i=Se:void 0!==c[1]?i=Pe:void 0!==c[2]?(Ee.test(c[2])&&(s=RegExp("</"+c[2],"g")),i=Be):void 0!==c[3]&&(i=Be):i===Be?">"===c[0]?(i=null!=s?s:Ae,l=-1):void 0===c[1]?l=-2:(l=i.lastIndex-c[2].length,a=c[1],i=void 0===c[3]?Be:'"'===c[3]?Te:Oe):i===Te||i===Oe?i=Be:i===Se||i===Pe?i=Ae:(i=Be,s=void 0);const d=i===Be&&e[t+1].startsWith("/>")?" ":"";r+=i===Ae?o+ye:l>=0?(n.push(a),o.slice(0,l)+ge+o.slice(l)+ve+d):o+ve+(-2===l?(n.push(void 0),t):d)}return[Ue(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class ze{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let s=0,r=0;const i=e.length-1,a=this.parts,[c,l]=De(e,t);if(this.el=ze.createElement(c,o),Le.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=Le.nextNode())&&a.length<i;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(ge)||t.startsWith(ve)){const o=l[r++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+ge).split(ve),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?We:"?"===t[1]?Ge:"@"===t[1]?Ye:Ve})}else a.push({type:6,index:s})}for(const t of e)n.removeAttribute(t)}if(Ee.test(n.tagName)){const e=n.textContent.split(ve),t=e.length-1;if(t>0){n.textContent=fe?fe.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],$e()),Le.nextNode(),a.push({type:2,index:++s});n.append(e[t],$e())}}}else if(8===n.nodeType)if(n.data===me)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(ve,e+1));)a.push({type:7,index:s}),e+=ve.length-1}s++}}static createElement(e,t){const o=we.createElement("template");return o.innerHTML=e,o}}function Fe(e,t,o=e,n){var s,r,i,a;if(t===Ne)return t;let c=void 0!==n?null===(s=o._$Co)||void 0===s?void 0:s[n]:o._$Cl;const l=xe(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(i=(a=o)._$Co)&&void 0!==i?i:a._$Co=[])[n]=c:o._$Cl=c),void 0!==c&&(t=Fe(e,c._$AS(e,t.values),c,n)),t}class je{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:n}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:we).importNode(o,!0);Le.currentNode=s;let r=Le.nextNode(),i=0,a=0,c=n[0];for(;void 0!==c;){if(i===c.index){let t;2===c.type?t=new He(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new Ze(r,this,e)),this._$AV.push(t),c=n[++a]}i!==(null==c?void 0:c.index)&&(r=Le.nextNode(),i++)}return Le.currentNode=we,s}v(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class He{constructor(e,t,o,n){var s;this.type=2,this._$AH=Ie,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Fe(this,e,t),xe(e)?e===Ie||null==e||""===e?(this._$AH!==Ie&&this._$AR(),this._$AH=Ie):e!==this._$AH&&e!==Ne&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Ce(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Ie&&xe(this._$AH)?this._$AA.nextSibling.data=e:this.$(we.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:n}=e,s="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=ze.createElement(Ue(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.v(o);else{const e=new je(s,this),t=e.u(this.options);e.v(o),this.$(t),this._$AH=e}}_$AC(e){let t=Me.get(e.strings);return void 0===t&&Me.set(e.strings,t=new ze(e)),t}T(e){ke(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const s of e)n===t.length?t.push(o=new He(this.k($e()),this.k($e()),this,this.options)):o=t[n],o._$AI(s),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Ve{constructor(e,t,o,n,s){this.type=1,this._$AH=Ie,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Ie}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const s=this.strings;let r=!1;if(void 0===s)e=Fe(this,e,t,0),r=!xe(e)||e!==this._$AH&&e!==Ne,r&&(this._$AH=e);else{const n=e;let i,a;for(e=s[0],i=0;i<s.length-1;i++)a=Fe(this,n[o+i],t,i),a===Ne&&(a=this._$AH[i]),r||(r=!xe(a)||a!==this._$AH[i]),a===Ie?e=Ie:e!==Ie&&(e+=(null!=a?a:"")+s[i+1]),this._$AH[i]=a}r&&!n&&this.j(e)}j(e){e===Ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class We extends Ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ie?void 0:e}}const Qe=fe?fe.emptyScript:"";class Ge extends Ve{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Ie?this.element.setAttribute(this.name,Qe):this.element.removeAttribute(this.name)}}class Ye extends Ve{constructor(e,t,o,n,s){super(e,t,o,n,s),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=Fe(this,e,t,0))&&void 0!==o?o:Ie)===Ne)return;const n=this._$AH,s=e===Ie&&n!==Ie||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==Ie&&(n===Ie||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class Ze{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Fe(this,e)}}const Je=be.litHtmlPolyfillSupport;null==Je||Je(ze,He),(null!==(ue=be.litHtmlVersions)&&void 0!==ue?ue:be.litHtmlVersions=[]).push("2.7.5");var Ke,Xe;class et extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,s;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let i=r._$litPart$;if(void 0===i){const e=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:null;r._$litPart$=i=new He(t.insertBefore($e(),e),e,void 0,null!=o?o:{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return Ne}}et.finalized=!0,et._$litElement$=!0,null===(Ke=globalThis.litElementHydrateSupport)||void 0===Ke||Ke.call(globalThis,{LitElement:et});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:et});(null!==(Xe=globalThis.litElementVersions)&&void 0!==Xe?Xe:globalThis.litElementVersions=[]).push("3.3.2");const ot=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){customElements.define(e,t)}}})(e,t),nt=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function st(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):nt(e,t)}var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;ee`
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
`;const it=ee`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,at=ee`
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
`;ee`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${it}
	}
	a:hover {
		text-decoration: underline;
	}
`;var ct=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,ht=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?lt(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&ct(t,o,r),r};let dt=class extends et{constructor(){super(...arguments),this.full=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}render(){const e=qe`<slot></slot>`;return null!=this.href?qe`<a href=${this.href}>${e}</a>`:e}};dt.styles=[at,ee`
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
				${it}
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
		`],ht([st({type:Boolean,reflect:!0})],dt.prototype,"full",2),ht([st()],dt.prototype,"href",2),ht([st({reflect:!0})],dt.prototype,"role",1),ht([st()],dt.prototype,"appearance",2),ht([st({type:Number,reflect:!0})],dt.prototype,"tabIndex",2),dt=ht([ot("gk-button")],dt);var ut=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,ft=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?bt(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&ut(t,o,r),r};let pt=class extends et{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};pt.styles=ee`
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
	`,ft([st()],pt.prototype,"icon",2),ft([st()],pt.prototype,"modifier",2),ft([st({type:Number})],pt.prototype,"size",2),pt=ft([ot("code-icon")],pt);const gt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let vt;let mt,yt,wt;function $t(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,s,r]of gt){const i=Math.abs(o);if(i>=n||1e3===n){if(t){if(null==vt&&(null!=wt?vt=wt.resolvedOptions().locale:null!=yt?vt=yt.resolvedOptions().locale:(wt=new Intl.RelativeTimeFormat(mt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),vt=wt.resolvedOptions().locale)),"en"===vt||vt?.startsWith("en-")){return`${Math.round(i/s)}${r}`}return null==wt&&(wt=new Intl.RelativeTimeFormat(mt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),wt.format(Math.round(o/s),e)}return null==yt&&(yt=new Intl.RelativeTimeFormat(mt,{localeMatcher:"best fit",numeric:"auto",style:"long"})),yt.format(Math.round(o/s),e)}}return""}var xt=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.Paid=5]="Paid",e))(xt||{});function kt(e){switch(e){case"free+":return"GitLens Free";case"pro":return"GitLens Pro";case"teams":return"GitLens Teams";case"enterprise":return"GitLens Enterprise";default:return"GitLens"}}function Ct(e,t){return _t(e.plan.effective.expiresOn,t)}function _t(e,t){return null!=e?function(e,t,o){const n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(o){case"days":return Math.floor(n/864e5);case"hours":return Math.floor(n/36e5);case"minutes":return Math.floor(n/6e4);case"seconds":return Math.floor(n/1e3);default:return n}}(Date.now(),new Date(e),t):void 0}function At(e){return null!=e&&(5===e||1===e||3===e)}function St(e){return null!=e&&(1===e||3===e)}const Pt=ee`
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
`;var Bt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,Tt=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?Ot(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&Bt(t,o,r),r};let Et=class extends et{render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":Ie;switch(this.state){case xt.VerificationRequired:return qe`
					<p>You must verify your email before you can continue.</p>
					<gk-button appearance="${e}" href="command:gitlens.plus.resendVerification"
						>Resend verification email</gk-button
					>
					<gk-button appearance="${e}" href="command:gitlens.plus.validate"
						>Refresh verification status</gk-button
					>
				`;case xt.Free:return qe`
					<gk-button appearance="${e}" href="command:gitlens.plus.startPreviewTrial"
						>Preview Now</gk-button
					>
					<p>
						Preview Pro for 3 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a> to start a full 7-day Pro trial.
					</p>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case xt.FreePreviewTrialExpired:return qe`
					<p>
						Your 3-day Pro preview has ended, start a free Pro trial to get an additional 7 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a>.
					</p>
					<gk-button appearance="${e}" href="command:gitlens.plus.loginOrSignUp"
						>Start Free Pro Trial</gk-button
					>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case xt.FreePlusTrialExpired:return qe`
					<p>Your Pro trial has ended, please upgrade to continue to use this on privately hosted repos.</p>
					<gk-button appearance="${e}" href="command:gitlens.plus.purchase"
						>Upgrade to Pro</gk-button
					>
					<p>✨ A paid plan is required to use this on privately hosted repos.</p>
				`}}};Et.styles=[Pt,ee`
			:host {
				container-type: inline-size;
			}

			:host([appearance='welcome']) gk-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gk-button {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gk-button {
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
		`],Tt([st({type:String})],Et.prototype,"appearance",2),Tt([st({attribute:!1,type:Number})],Et.prototype,"state",2),Et=Tt([ot("gk-feature-gate-plus-state")],Et);var Rt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Nt=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?qt(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&Rt(t,o,r),r};let It=class extends et{render(){if(!this.visible||null!=this.state&&At(this.state))return void(this.hidden=!0);const e=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,qe`
			<section>
				<slot>
					<slot name="feature" hidden=${this.state===xt.Free?Ie:""}></slot>
				</slot>
				<gk-feature-gate-plus-state appearance=${e} .state=${this.state}></gk-feature-gate-plus-state>
			</section>
		`}};It.styles=ee`
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

		:host-context(body[data-placement='editor']) section ::slotted(gk-button),
		:host([appearance='alert']) section ::slotted(gk-button) {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	`,Nt([st()],It.prototype,"appearance",2),Nt([st({attribute:!1,type:Number})],It.prototype,"state",2),Nt([st({type:Boolean})],It.prototype,"visible",2),It=Nt([ot("gk-feature-gate")],It);const Mt=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===Mt.trustedTypes&&(Mt.trustedTypes={createPolicy:(e,t)=>t});const Lt={configurable:!1,enumerable:!1,writable:!1};void 0===Mt.FAST&&Reflect.defineProperty(Mt,"FAST",Object.assign({value:Object.create(null)},Lt));const Ut=Mt.FAST;if(void 0===Ut.getById){const e=Object.create(null);Reflect.defineProperty(Ut,"getById",Object.assign({value(t,o){let n=e[t];return void 0===n&&(n=o?e[t]=o():null),n}},Lt))}const Dt=Object.freeze([]);function zt(){const e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let n=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==n;)o=e.get(n),n=Reflect.getPrototypeOf(n);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}const Ft=Mt.FAST.getById(1,(()=>{const e=[],t=[];function o(){if(t.length)throw t.shift()}function n(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}function s(){let t=0;for(;t<e.length;)if(n(e[t]),t++,t>1024){for(let o=0,n=e.length-t;o<n;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&Mt.requestAnimationFrame(s),e.push(t)},process:s})})),jt=Mt.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let Ht=jt;const Vt=`fast-${Math.random().toString(36).substring(2,8)}`,Wt=`${Vt}{`,Qt=`}${Vt}`,Gt=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(Ht!==jt)throw new Error("The HTML policy can only be set once.");Ht=e},createHTML:e=>Ht.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(Vt),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${Vt}:`,"")),createInterpolationPlaceholder:e=>`${Wt}${e}${Qt}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${Vt}:${e}--\x3e`,queueUpdate:Ft.enqueue,processUpdates:Ft.process,nextUpdate:()=>new Promise(Ft.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class Yt{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){const t=this.spillover,o=this.source;if(void 0===t){const t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==n&&n.handleChange(o,e)}else for(let n=0,s=t.length;n<s;++n)t[n].handleChange(o,e)}}class Zt{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new Yt(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new Yt(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const Jt=Ut.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=Gt.queueUpdate;let n,s=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=s(e):t.set(e,o=new Zt(e))),o}const i=zt();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==n&&n.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,n=e[o];if(n!==t){e[o]=t;const s=e[this.callback];"function"==typeof s&&s.call(e,n,t),r(e).notify(this.name)}}}class c extends Yt{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const s=this.binding(e,t);return n=o,s}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,s=r(e),i=null===o?this.first:{};if(i.propertySource=e,i.propertyName=t,i.notifier=s,s.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;n=void 0,t=o.propertySource[o.propertyName],n=this,e===t&&(this.needsRefresh=!0)}o.next=i}this.last=i}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){s=e},getNotifier:r,track(e,t){void 0!==n&&n.watch(e,t)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(e,t){r(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),i(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:i,binding(e,t,o=this.isVolatileBinding(e)){return new c(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));function Kt(e,t){Jt.defineProperty(e,t)}function Xt(e,t,o){return Object.assign({},o,{get:function(){return Jt.trackVolatile(),o.get.apply(this)}})}const eo=Ut.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class to{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return eo.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){eo.set(e)}}Jt.defineProperty(to.prototype,"index"),Jt.defineProperty(to.prototype,"length");const oo=Object.seal(new to);class no{constructor(){this.targetIndex=0}}class so extends no{constructor(){super(...arguments),this.createPlaceholder=Gt.createInterpolationPlaceholder}}class ro extends no{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return Gt.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function io(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=Jt.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function ao(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function co(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function lo(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function ho(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function uo(e){Gt.setAttribute(this.target,this.targetName,e)}function bo(e){Gt.setBooleanAttribute(this.target,this.targetName,e)}function fo(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function po(e){this.target[this.targetName]=e}function go(e){const t=this.classVersions||Object.create(null),o=this.target;let n=this.version||0;if(null!=e&&e.length){const s=e.split(/\s+/);for(let e=0,r=s.length;e<r;++e){const r=s[e];""!==r&&(t[r]=n,o.classList.add(r))}}if(this.classVersions=t,this.version=n+1,0!==n){n-=1;for(const e in t)t[e]===n&&o.classList.remove(e)}}class vo extends so{constructor(e){super(),this.binding=e,this.bind=io,this.unbind=co,this.updateTarget=uo,this.isBindingVolatile=Jt.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=po,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>Gt.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=bo;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=ao,this.unbind=ho;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=go)}}targetAtContent(){this.updateTarget=fo,this.unbind=lo}createBehavior(e){return new mo(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class mo{constructor(e,t,o,n,s,r,i){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=n,this.unbind=s,this.updateTarget=r,this.targetName=i}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){to.setEvent(e);const t=this.binding(this.source,this.context);to.setEvent(null),!0!==t&&e.preventDefault()}}let yo=null;class wo{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){yo=this}static borrow(e){const t=yo||new wo;return t.directives=e,t.reset(),yo=null,t}}function $o(e){if(1===e.length)return e[0];let t;const o=e.length,n=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),s=new vo(((e,t)=>{let s="";for(let r=0;r<o;++r)s+=n[r](e,t);return s}));return s.targetName=t,s}const xo=Qt.length;function ko(e,t){const o=t.split(Wt);if(1===o.length)return null;const n=[];for(let t=0,s=o.length;t<s;++t){const s=o[t],r=s.indexOf(Qt);let i;if(-1===r)i=s;else{const t=parseInt(s.substring(0,r));n.push(e.directives[t]),i=s.substring(r+xo)}""!==i&&n.push(i)}return n}function Co(e,t,o=!1){const n=t.attributes;for(let s=0,r=n.length;s<r;++s){const i=n[s],a=i.value,c=ko(e,a);let l=null;null===c?o&&(l=new vo((()=>a)),l.targetName=i.name):l=$o(c),null!==l&&(t.removeAttributeNode(i),s--,r--,e.addFactory(l))}}function _o(e,t,o){const n=ko(e,t.textContent);if(null!==n){let s=t;for(let r=0,i=n.length;r<i;++r){const i=n[r],a=0===r?t:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);"string"==typeof i?a.textContent=i:(a.textContent=" ",e.captureContentBinding(i)),s=a,e.targetIndex++,a!==t&&o.nextNode()}e.targetIndex--}}const Ao=document.createRange();class So{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const o=e.parentNode;let n,s=this.firstChild;for(;s!==t;)n=s.nextSibling,o.insertBefore(s,e),s=n;o.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.appendChild(n),n=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.removeChild(n),n=o;e.removeChild(t);const s=this.behaviors,r=this.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(r)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const n=this.source;this.source=e,this.context=t;for(let s=0,r=o.length;s<r;++s){const r=o[s];r.unbind(n),r.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,s=o.length;n<s;++n)o[n].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,n=e.length;o<n;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Ao.setStartBefore(e[0].firstChild),Ao.setEndAfter(e[e.length-1].lastChild),Ao.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],n=o.behaviors,s=o.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(s)}}}}class Po{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=Gt.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const n=wo.borrow(t);Co(n,e,!0);const s=n.behaviorFactories;n.reset();const r=Gt.createTemplateWalker(o);let i;for(;i=r.nextNode();)switch(n.targetIndex++,i.nodeType){case 1:Co(n,i);break;case 3:_o(n,i,r);break;case 8:Gt.isMarker(i)&&n.addFactory(t[Gt.extractDirectiveIndexFromMarker(i)])}let a=0;(Gt.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),a=-1);const c=n.behaviorFactories;return n.release(),{fragment:o,viewBehaviorFactories:c,hostBehaviorFactories:s,targetOffset:a}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,n=new Array(this.behaviorCount),s=Gt.createTemplateWalker(t);let r=0,i=this.targetOffset,a=s.nextNode();for(let e=o.length;r<e;++r){const e=o[r],t=e.targetIndex;for(;null!==a;){if(i===t){n[r]=e.createBehavior(a);break}a=s.nextNode(),i++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,s=t.length;o<s;++o,++r)n[r]=t[o].createBehavior(e)}return new So(t,n)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const n=this.create(o);return n.bind(e,oo),n.appendTo(t),n}}const Bo=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Oo(e,...t){const o=[];let n="";for(let s=0,r=e.length-1;s<r;++s){const r=e[s];let i=t[s];if(n+=r,i instanceof Po){const e=i;i=()=>e}if("function"==typeof i&&(i=new vo(i)),i instanceof so){const e=Bo.exec(r);null!==e&&(i.targetName=e[2])}i instanceof no?(n+=i.createPlaceholder(o.length),o.push(i)):n+=i}return n+=e[e.length-1],new Po(n,o)}class To{createCSS(){return""}createBehavior(){}}class Eo{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function Ro(e){return e.map((e=>e instanceof Eo?Ro(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function qo(e){return e.map((e=>e instanceof Eo?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}Eo.create=(()=>{if(Gt.supportsAdoptedStyleSheets){const e=new Map;return t=>new Mo(t,e)}return e=>new Uo(e)})();let No=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},Io=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(Gt.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),No=(e,t)=>{e.adoptedStyleSheets.push(...t)},Io=(e,t)=>{for(const o of t){const t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class Mo extends Eo{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=qo(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=Ro(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){No(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Io(e,this.styleSheets),super.removeStylesFrom(e)}}let Lo=0;class Uo extends Eo{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=qo(e),this.styleSheets=Ro(e),this.styleClass="fast-style-class-"+ ++Lo}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const s=document.createElement("style");s.innerHTML=t[n],s.className=o,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,n=t.length;o<n;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}function Do(e,t){const o=[];let n="";const s=[];for(let r=0,i=e.length-1;r<i;++r){n+=e[r];let i=t[r];if(i instanceof To){const e=i.createBehavior();i=i.createCSS(),e&&s.push(e)}i instanceof Eo||i instanceof CSSStyleSheet?(""!==n.trim()&&(o.push(n),n=""),o.push(i)):n+=i}return n+=e[e.length-1],""!==n.trim()&&o.push(n),{styles:o,behaviors:s}}function zo(e,...t){const{styles:o,behaviors:n}=Do(e,t),s=Eo.create(o);return n.length&&s.withBehaviors(...n),s}class Fo extends To{constructor(e,t){super(),this.behaviors=t,this.css="";const o=e.reduce(((e,t)=>("string"==typeof t?this.css+=t:e.push(t),e)),[]);o.length&&(this.styles=Eo.create(o))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}const jo=Object.freeze({locate:zt()}),Ho={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e};class Vo{constructor(e,t,o=t.toLowerCase(),n="reflect",s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=n,this.converter=s,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===s&&(this.converter=Ho)}setValue(e,t){const o=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return Jt.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||Gt.queueUpdate((()=>{o.add(e);const n=e[this.fieldName];switch(t){case"reflect":const t=this.converter;Gt.setAttribute(e,this.attribute,void 0!==t?t.toView(n):n);break;case"boolean":Gt.setBooleanAttribute(e,this.attribute,n)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(jo.locate(e));for(let n=0,s=t.length;n<s;++n){const s=t[n];if(void 0!==s)for(let t=0,n=s.length;t<n;++t){const n=s[t];"string"==typeof n?o.push(new Vo(e,n)):o.push(new Vo(e,n.property,n.attribute,n.mode,n.converter))}}return o}}function Wo(e,t){let o;function n(e,t){arguments.length>1&&(o.property=t),jo.locate(e.constructor).push(o)}return arguments.length>1?(o={},void n(e,t)):(o=void 0===e?{}:e,n)}const Qo={mode:"open"},Go={},Yo=Ut.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class Zo{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=Vo.collect(e,t.attributes),n=new Array(o.length),s={},r={};for(let e=0,t=o.length;e<t;++e){const t=o[e];n[e]=t.attribute,s[t.name]=t,r[t.attribute]=t}this.attributes=o,this.observedAttributes=n,this.propertyLookup=s,this.attributeLookup=r,this.shadowOptions=void 0===t.shadowOptions?Qo:null===t.shadowOptions?void 0:Object.assign(Object.assign({},Qo),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?Go:Object.assign(Object.assign({},Go),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?Eo.create(t.styles):t.styles instanceof Eo?t.styles:Eo.create([t.styles])}get isDefined(){return!!Yo.getByType(this.type)}define(e=customElements){const t=this.type;if(Yo.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,n=e.length;t<n;++t)Jt.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}Zo.forType=Yo.getByType;const Jo=new WeakMap,Ko={bubbles:!0,composed:!0,cancelable:!0};function Xo(e){return e.shadowRoot||Jo.get(e)||null}class en extends Zt{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&Jo.set(e,t)}const n=Jt.getAccessors(e);if(n.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,s=n.length;o<s;++o){const s=n[o].name,r=e[s];void 0!==r&&(delete e[s],t[s]=r)}}}get isConnected(){return Jt.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,Jt.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=Xo(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=Xo(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,n=[];for(let s=0;s<o;++s){const o=e[s];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),n.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,oo)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const n=e.length,s=[];for(let r=0;r<n;++r){const n=e[r];if(o.has(n)){const e=o.get(n)-1;0===e||t?o.delete(n)&&s.push(n):o.set(n,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,oo);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,oo);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Ko),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let n=0,s=o.length;n<s;++n){const s=o[n];e[s]=t[s]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=Xo(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||Gt.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=Zo.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new en(e,o)}}function tn(e){return class extends e{constructor(){super(),en.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const on=Object.assign(tn(HTMLElement),{from:e=>tn(e),define:(e,t)=>new Zo(e,t).define().type});function nn(e){return function(t){new Zo(t,e).define()}}const sn=zo`
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
`,rn=(function(e,...t){const{styles:o,behaviors:n}=Do(e,t);return new Fo(o,n)})`
	outline: 1px solid var(--focus-color);
	outline-offset: -1px;
`,an=zo`
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
`;var cn=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,hn=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?ln(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&cn(t,o,r),r};const dn=Oo`<template role="img" tabindex="${e=>e.tabIndex??"0"}">
	<slot></slot>
</template>`,un=zo`
	${an}

	:host {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: var(--avatar-size, 2.4rem);
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		border: 1px solid var(--color-background);
		background-color: var(--avatar-bg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		transition: all ease 200ms;
		font-size: calc(var(--avatar-size) * 0.42);
	}

	:host(:hover) {
		transform: scale(1.2);
	}

	:host(:focus-visible) {
		${rn}
	}
`;let bn=class extends on{constructor(){super(...arguments),this.media="",this.static=!1}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),"media"===e&&t!==o&&(this.style.backgroundImage=`url(${this.media})`)}};hn([Wo],bn.prototype,"media",2),hn([Wo({mode:"boolean"})],bn.prototype,"static",2),bn=hn([nn({name:"avatar-item",template:dn,styles:un})],bn);class fn{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=Jt.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Dt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class pn extends fn{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function gn(e){return"string"==typeof e&&(e={property:e}),new ro("fast-slotted",pn,e)}function vn(...e){return e.some((e=>(e?.length??0)>0))}var mn=Object.defineProperty,yn=Object.getOwnPropertyDescriptor,wn=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?yn(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&mn(t,o,r),r};const $n=Oo`<template>
	<slot ${gn({property:"avatarNodes",filter:(xn=Node.ELEMENT_NODE,e=>e.nodeType===xn)})}></slot>
</template>`;var xn;const kn=zo`
	${an}

	:host {
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	slot::slotted(*:not(:first-child)) {
		margin-left: calc(var(--avatar-size, 2.4rem) * -0.2);
	}

	:host(:focus-within) slot::slotted(*),
	:host(:hover) slot::slotted(*) {
		opacity: 0.5;
	}

	:host(:focus-within) slot::slotted(*:focus),
	:host(:hover) slot::slotted(*:hover) {
		opacity: 1;
		z-index: var(--avatar-selected-zindex, 1) !important;
	}
`;let Cn=class extends on{constructor(){super(...arguments),this.zindex=1}avatarNodesChanged(){if(null==this.avatarNodes)return;const e=this.avatarNodes.length;e!==this.zindex-1&&(this.zindex=e+1,this.style.setProperty("--avatar-selected-zindex",this.zindex.toString())),this.avatarNodes.forEach(((t,o)=>{t.style.zIndex=(e-o).toString()}))}};wn([Kt],Cn.prototype,"avatarNodes",2),Cn=wn([nn({name:"avatar-stack",template:$n,styles:kn})],Cn);var _n=Object.defineProperty,An=Object.getOwnPropertyDescriptor;const Sn=Oo`
	<template role="table">
		<div class="thead" role="rowgroup">
			<slot name="head"></slot>
		</div>
		<div class="tbody" role="rowgroup">
			<slot></slot>
		</div>
	</template>
`,Pn=zo`
	${an}

	:host {
		display: table;
		border-collapse: collapse;
		width: 100%;
	}

	.thead {
		display: table-header-group;
		color: var(--table-heading);
	}

	.tbody {
		display: table-row-group;
		color: var(--table-text);
	}

	.tbody ::slotted(*:hover),
	.tbody ::slotted(*:focus-within) {
		background-color: var(--background-05);
	}
`;let Bn=class extends on{};Bn=((e,t,o,n)=>{for(var s,r=n>1?void 0:n?An(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&_n(t,o,r),r})([nn({name:"table-container",template:Sn,styles:Pn})],Bn);var On=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor;const En=Oo`
	<template role="row">
		<slot></slot>
	</template>
`,Rn=zo`
	${an}

	:host {
		display: table-row;
	}
`;let qn=class extends on{};qn=((e,t,o,n)=>{for(var s,r=n>1?void 0:n?Tn(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&On(t,o,r),r})([nn({name:"table-row",template:En,styles:Rn})],qn);var Nn=Object.defineProperty,In=Object.getOwnPropertyDescriptor,Mn=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?In(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&Nn(t,o,r),r};const Ln=Oo`
	<template role="${e=>e.cellRole}">
		<slot></slot>
	</template>
`,Un=zo`
	${an}

	:host {
		display: table-cell;
		vertical-align: top;
		padding: var(--table-spacing, 0.8rem);
		/* border-bottom: 1px solid var(--table-separator); */
		text-align: left;
	}

	:host(:first-child) {
		padding-left: var(--table-edge-spacing, 1.2rem);
	}
	:host(:last-child) {
		padding-right: var(--table-edge-spacing, 1.2rem);
	}

	:host([role='columnheader']) {
		text-transform: uppercase;
		font-weight: normal;
		padding-top: var(--table-heading-top-spacing, 0);
		padding-bottom: var(--table-heading-bottom-spacing, 1.2rem);
	}

	:host([pinned]) {
		background-color: var(--table-pinned-background);
		position: sticky;
		top: 0;
		z-index: 3;
	}
`;let Dn=class extends on{constructor(){super(...arguments),this.header="",this.pinned=!1}get cellRole(){switch(this.header){case"column":return"columnheader";case"row":return"rowheader";default:return"cell"}}};Mn([Wo],Dn.prototype,"header",2),Mn([Wo({mode:"boolean"})],Dn.prototype,"pinned",2),Dn=Mn([nn({name:"table-cell",template:Ln,styles:Un})],Dn);const{fromCharCode:zn}=String;new TextEncoder;const Fn=e=>"function"==typeof e,jn=()=>null;function Hn(e){return void 0===e?jn:Fn(e)?e:()=>e}function Vn(e,t,o){const n=Fn(e)?e:()=>e,s=Hn(t),r=Hn(o);return(e,t)=>n(e,t)?s(e,t):r(e,t)}var Wn=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,Gn=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?Qn(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&Wn(t,o,r),r};const Yn=Oo`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${gn("typeNodes")} name="type"></slot>
			<slot ${gn("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${gn("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${Vn((e=>e.caret),Oo`<span class="caret"></span>`)}
	</template>
`,Zn=zo`
	${an}

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
`;let Jn=class extends on{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return vn(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return vn(this.headingNodes)}};Gn([Wo({mode:"boolean"})],Jn.prototype,"open",2),Gn([Wo({mode:"boolean"})],Jn.prototype,"caret",2),Gn([Wo],Jn.prototype,"placement",2),Gn([Kt],Jn.prototype,"typeNodes",2),Gn([Kt],Jn.prototype,"actionsNodes",2),Gn([Kt],Jn.prototype,"headingNodes",2),Gn([Xt],Jn.prototype,"hasTopNodes",1),Gn([Xt],Jn.prototype,"hasHeadingNodes",1),Jn=Gn([nn({name:"pop-over",template:Yn,styles:Zn})],Jn);var Kn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,es=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?Xn(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&Kn(t,o,r),r};let ts=class extends et{constructor(){super(...arguments),this.placement="top end"}render(){const e=At(this.subscription?.state),t=St(this.subscription?.state);return qe`
			<span class="badge-container">
				<span class="badge ${e?"active":"inactive"}"
					>${t?qe`<span class="badge-trial">Trial</span>`:""}✨</span
				>
				<pop-over .placement=${this.placement} class="badge-popover">
					<span slot="heading"
						>${function(e,t){switch(e){case 4:return kt("free+");case 1:return`${kt("pro")} (Trial)`;case 3:return`${kt(t??"pro")} (Trial)`;case-1:return"GitLens (Unverified)";case 5:return kt(t??"pro");default:return"GitLens"}}(this.subscription?.state,this.subscription?.plan.effective.id)}${this.trialHtml}</span
					>
					${this.footnoteHtml}
				</pop-over>
			</span>
		`}get trialHtml(){if(!St(this.subscription?.state))return Ie;const e=Ct(this.subscription,"days")??0;return qe`<span class="badge-trial-left">${e<1?"<1 day":function(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}("day",e)} left</span>`}get footnoteHtml(){switch(this.subscription?.state){case xt.VerificationRequired:case xt.Free:case xt.FreePreviewTrialExpired:return qe`<span class="badge-footnote"
					>✨ Requires a trial or paid plan for use on privately hosted repos.</span
				>`;case xt.FreePlusTrialExpired:case xt.FreeInPreviewTrial:case xt.FreePlusInTrial:return qe`<span class="badge-footnote"
					>✨ Requires a paid plan for use on privately hosted repos.</span
				>`;case xt.Paid:return qe`<span class="badge-footnote"
					>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</span
				>`;default:return Ie}}};function os(e,t=new Date){const o=Math.floor((t.getTime()-e.getTime())/1e3);let n="ok";return Math.floor(o/31536e3)>=1||Math.floor(o/2592e3)>=1||Math.floor(o/604800)>=1?n="danger":Math.floor(o/86400)>=1&&(n="warning"),{label:$t(e,!0),tooltip:$t(e),status:n}}function ns(e,t,o){return{index:e,removed:t,addedCount:o}}ts.styles=[at,ee`
			:host {
				position: relative;
			}

			:host(:focus) {
				${it}
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
		`],es([st({reflect:!0})],ts.prototype,"placement",2),es([st({attribute:!1})],ts.prototype,"subscription",2),ts=es([ot("gk-feature-gate-badge")],ts);const ss=0,rs=1,is=2,as=3;function cs(e,t,o,n,s,r){let i=0,a=0;const c=Math.min(o-t,r-s);if(0===t&&0===s&&(i=function(e,t,o){for(let n=0;n<o;++n)if(e[n]!==t[n])return n;return o}(e,n,c)),o===e.length&&r===n.length&&(a=function(e,t,o){let n=e.length,s=t.length,r=0;for(;r<o&&e[--n]===t[--s];)r++;return r}(e,n,c-i)),s+=i,r-=a,(o-=a)-(t+=i)==0&&r-s==0)return Dt;if(t===o){const e=ns(t,[],0);for(;s<r;)e.removed.push(n[s++]);return[e]}if(s===r)return[ns(t,[],o-t)];const l=function(e){let t=e.length-1,o=e[0].length-1,n=e[t][o];const s=[];for(;t>0||o>0;){if(0===t){s.push(is),o--;continue}if(0===o){s.push(as),t--;continue}const r=e[t-1][o-1],i=e[t-1][o],a=e[t][o-1];let c;c=i<a?i<r?i:r:a<r?a:r,c===r?(r===n?s.push(ss):(s.push(rs),n=r),t--,o--):c===i?(s.push(as),t--,n=i):(s.push(is),o--,n=a)}return s.reverse(),s}(function(e,t,o,n,s,r){const i=r-s+1,a=o-t+1,c=new Array(i);let l,h;for(let e=0;e<i;++e)c[e]=new Array(a),c[e][0]=e;for(let e=0;e<a;++e)c[0][e]=e;for(let o=1;o<i;++o)for(let r=1;r<a;++r)e[t+r-1]===n[s+o-1]?c[o][r]=c[o-1][r-1]:(l=c[o-1][r]+1,h=c[o][r-1]+1,c[o][r]=l<h?l:h);return c}(e,t,o,n,s,r)),h=[];let d,u=t,b=s;for(let e=0;e<l.length;++e)switch(l[e]){case ss:void 0!==d&&(h.push(d),d=void 0),u++,b++;break;case rs:void 0===d&&(d=ns(u,[],0)),d.addedCount++,u++,d.removed.push(n[b]),b++;break;case is:void 0===d&&(d=ns(u,[],0)),d.addedCount++,u++;break;case as:void 0===d&&(d=ns(u,[],0)),d.removed.push(n[b]),b++}return void 0!==d&&h.push(d),h}const ls=Array.prototype.push;function hs(e,t,o,n){const s=ns(t,o,n);let r=!1,i=0;for(let t=0;t<e.length;t++){const o=e[t];if(o.index+=i,r)continue;const n=(a=s.index,c=s.index+s.removed.length,l=o.index,h=o.index+o.addedCount,c<l||h<a?-1:c===l||h===a?0:a<l?c<h?c-l:h-l:h<c?h-a:c-a);if(n>=0){e.splice(t,1),t--,i-=o.addedCount-o.removed.length,s.addedCount+=o.addedCount-n;const a=s.removed.length+o.removed.length-n;if(s.addedCount||a){let e=o.removed;if(s.index<o.index){const t=s.removed.slice(0,o.index-s.index);ls.apply(t,e),e=t}if(s.index+s.removed.length>o.index+o.addedCount){const t=s.removed.slice(o.index+o.addedCount-s.index);ls.apply(e,t)}s.removed=e,o.index<s.index&&(s.index=o.index)}else r=!0}else if(s.index<o.index){r=!0,e.splice(t,0,s),t++;const n=s.addedCount-s.removed.length;o.index+=n,i+=n}}var a,c,l,h;r||e.push(s)}function ds(e,t){let o=[];const n=function(e){const t=[];for(let o=0,n=e.length;o<n;o++){const n=e[o];hs(t,n.index,n.removed,n.addedCount)}return t}(t);for(let t=0,s=n.length;t<s;++t){const s=n[t];1!==s.addedCount||1!==s.removed.length?o=o.concat(cs(e,s.index,s.index+s.addedCount,s.removed,0,s.removed.length)):s.removed[0]!==e[s.index]&&o.push(s)}return o}let us=!1;function bs(e,t){let o=e.index;const n=t.length;return o>n?o=n-e.addedCount:o<0&&(o=n+e.removed.length+o-e.addedCount),o<0&&(o=0),e.index=o,e}class fs extends Yt{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,Gt.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,Gt.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const o=void 0===t?ds(this.source,e):cs(this.source,0,this.source.length,t,0,t.length);this.notify(o)}}const ps=Object.freeze({positioning:!1,recycle:!0});function gs(e,t,o,n){e.bind(t[o],n)}function vs(e,t,o,n){const s=Object.create(n);s.index=o,s.length=t.length,e.bind(t[o],s)}class ms{constructor(e,t,o,n,s,r){this.location=e,this.itemsBinding=t,this.templateBinding=n,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=gs,this.itemsBindingObserver=Jt.binding(t,this,o),this.templateBindingObserver=Jt.binding(n,this,s),r.positioning&&(this.bindView=vs)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=Dt);const t=this.itemsObserver,o=this.itemsObserver=Jt.getNotifier(this.items),n=t!==o;n&&null!==t&&t.unsubscribe(this),(n||e)&&o.subscribe(this)}updateViews(e){const t=this.childContext,o=this.views,n=this.bindView,s=this.items,r=this.template,i=this.options.recycle,a=[];let c=0,l=0;for(let h=0,d=e.length;h<d;++h){const d=e[h],u=d.removed;let b=0,f=d.index;const p=f+d.addedCount,g=o.splice(d.index,u.length),v=l=a.length+g.length;for(;f<p;++f){const e=o[f],h=e?e.firstChild:this.location;let d;i&&l>0?(b<=v&&g.length>0?(d=g[b],b++):(d=a[c],c++),l--):d=r.create(),o.splice(f,0,d),n(d,s,f,t),d.insertBefore(h)}g[b]&&a.push(...g.slice(b))}for(let e=c,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=o.length;e<t;++e){const n=o[e].context;n.length=t,n.index=e}}refreshAllViews(e=!1){const t=this.items,o=this.childContext,n=this.template,s=this.location,r=this.bindView;let i=t.length,a=this.views,c=a.length;if(0!==i&&!e&&this.options.recycle||(So.disposeContiguousBatch(a),c=0),0===c){this.views=a=new Array(i);for(let e=0;e<i;++e){const i=n.create();r(i,t,e,o),a[e]=i,i.insertBefore(s)}}else{let e=0;for(;e<i;++e)if(e<c){r(a[e],t,e,o)}else{const i=n.create();r(i,t,e,o),a.push(i),i.insertBefore(s)}const l=a.splice(e,c-e);for(e=0,i=l.length;e<i;++e)l[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,o=e.length;t<o;++t)e[t].unbind()}}class ys extends no{constructor(e,t,o){super(),this.itemsBinding=e,this.templateBinding=t,this.options=o,this.createPlaceholder=Gt.createBlockPlaceholder,function(){if(us)return;us=!0,Jt.setArrayObserverFactory((e=>new fs(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,o=e.push,n=e.reverse,s=e.shift,r=e.sort,i=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,o=t.apply(this,arguments),n=this.$fastController;return void 0!==n&&e&&n.addSplice(ns(this.length,[o],0)),o},e.push=function(){const e=o.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(bs(ns(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const o=n.apply(this,arguments);return void 0!==t&&t.reset(e),o},e.shift=function(){const e=this.length>0,t=s.apply(this,arguments),o=this.$fastController;return void 0!==o&&e&&o.addSplice(ns(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const o=r.apply(this,arguments);return void 0!==t&&t.reset(e),o},e.splice=function(){const e=i.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(bs(ns(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(bs(ns(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=Jt.isVolatileBinding(e),this.isTemplateBindingVolatile=Jt.isVolatileBinding(t)}createBehavior(e){return new ms(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}var ws=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,xs=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?$s(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&ws(t,o,r),r};const ks=Oo`
	<avatar-stack>
		${function(e,t,o=ps){return new ys(e,"function"==typeof t?t:()=>t,Object.assign(Object.assign({},ps),o))}((e=>e.avatarItems),Oo`<avatar-item media="${e=>e.avatarUrl}" title="${e=>e.name}"></avatar-item>`)}
		${Vn((e=>null!=e.avatarPlusItems),Oo`<avatar-item title="${e=>e.avatarPlusLabel}"
				>+${e=>e.avatarPlusItems?.length}</avatar-item
			>`)}
	</avatar-stack>
`,Cs=zo``;let _s=class extends on{constructor(){super(...arguments),this.avatars=[]}get avatarItems(){return this.avatars.length<=3?this.avatars:this.avatars.slice(0,2)}get avatarPlusItems(){if(!(this.avatars.length<=3))return this.avatars.slice(2)}get avatarPlusLabel(){if(null==this.avatarPlusItems)return;const e=this.avatarPlusItems.length;return this.avatarPlusItems.reduce(((t,o,n)=>`${t}, ${e===n-1?"and ":""}${o.name}`),"")}};xs([Kt],_s.prototype,"avatars",2),xs([Xt],_s.prototype,"avatarItems",1),xs([Xt],_s.prototype,"avatarPlusItems",1),xs([Xt],_s.prototype,"avatarPlusLabel",1),_s=xs([nn({name:"git-avatars",template:ks,styles:Cs})],_s);var As=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,Ps=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?Ss(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&As(t,o,r),r};const Bs=Oo`
	<template role="row">
		<table-cell class="status">
			${Vn((e=>!0===e.issue.closed),Oo`<code-icon icon="pass"></code-icon>`)}
			${Vn((e=>!0!==e.issue.closed),Oo`<code-icon icon="issues"></code-icon>`)}
		</table-cell>
		<table-cell class="time"
			><span class="${e=>e.lastUpdatedClass}" title="${e=>e.lastUpdatedLabel}"
				>${e=>e.lastUpdated}</span
			></table-cell
		>
		<table-cell>
			${e=>e.issue.title} <a href="${e=>e.issue.url}">#${e=>e.issue.id}</a><br />
			<small>
				<span class="tag"><code-icon icon="repo"></code-icon>${e=>e.issue.repository.repo}</span>
			</small>
		</table-cell>
		<table-cell class="vcenter participants">
			${Vn((e=>null!=e.issue.author),Oo`
					<avatar-stack>
						<avatar-item
							media="${e=>e.issue.author?.avatarUrl}"
							title="${e=>e.issue.author?.name} (author)"
						></avatar-item>
					</avatar-stack>
				`)}
			${Vn((e=>e.assignees.length>0),Oo`<git-avatars :avatars="${e=>e.issue.assignees}"></git-avatars>`)}
		</table-cell>
		<table-cell class="vcenter">${e=>e.issue.commentsCount}</table-cell>
		<table-cell class="vcenter">${e=>e.issue.thumbsUpCount}</table-cell>
		<table-cell class="vcenter actions">
			<a href="${e=>e.issue.url}" title="Open issue on remote"><code-icon icon="globe"></code-icon></a>
		</table-cell>
	</template>
`,Os=zo`
	${an}

	:host {
		display: table-row;
	}

	:host(:focus) {
		${rn}
	}

	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}

	a:hover {
		color: var(--vscode-textLink-activeForeground);
		text-decoration: underline;
	}

	a:focus {
		${rn}
	}

	code-icon {
		font-size: inherit;
	}

	.vcenter {
		vertical-align: middle;
	}

	.tag {
		display: inline-block;
		padding: 0.1rem 0.2rem;
		background-color: var(--background-05);
		color: var(--color-foreground--85);
		white-space: nowrap;
	}
	.tag code-icon {
		margin-right: 0.2rem;
	}

	.status {
		font-size: 1.6rem;
	}

	.time {
	}

	.icon-only {
	}

	.participants {
		white-space: nowrap;
	}

	.stats {
	}

	.actions {
		text-align: right;
		white-space: nowrap;
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
	.actions a:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
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

	.stat-added {
		color: var(--vscode-gitDecoration-addedResourceForeground);
	}
	.stat-deleted {
		color: var(--vscode-gitDecoration-deletedResourceForeground);
	}

	.issue-open {
		color: var(--vscode-gitlens-openAutolinkedIssueIconColor);
	}
	.issue-closed {
		color: var(--vscode-gitlens-closedAutolinkedIssueIconColor);
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

	.pull-request-draft {
		/* color: var(--vscode-pullRequests-draft); */
		color: var(--color-foreground--85);
	}
	.pull-request-open {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pull-request-merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
	.pull-request-closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pull-request-notification {
		color: var(--vscode-pullRequests-notification);
	}

	${sn}
`;let Ts=class extends on{get lastUpdatedDate(){return new Date(this.issue.date)}get lastUpdatedState(){return os(this.lastUpdatedDate)}get lastUpdated(){return $t(this.lastUpdatedDate,!0)}get lastUpdatedLabel(){return $t(this.lastUpdatedDate)}get lastUpdatedClass(){switch(this.lastUpdatedState.status){case"danger":return"indicator-error";case"warning":return"indicator-warning";default:return""}}get indicator(){return""}get indicatorLabel(){}get assignees(){const e=this.issue?.assignees;if(null==e)return[];const t=this.issue.author;return null!=t?e.filter((e=>e.url!==t.url)):e}};Ps([Kt],Ts.prototype,"issue",2),Ps([Kt],Ts.prototype,"reasons",2),Ps([Xt],Ts.prototype,"lastUpdatedDate",1),Ps([Xt],Ts.prototype,"lastUpdatedState",1),Ps([Xt],Ts.prototype,"lastUpdated",1),Ps([Xt],Ts.prototype,"lastUpdatedLabel",1),Ps([Xt],Ts.prototype,"lastUpdatedClass",1),Ps([Xt],Ts.prototype,"indicator",1),Ps([Xt],Ts.prototype,"indicatorLabel",1),Ps([Xt],Ts.prototype,"assignees",1),Ts=Ps([nn({name:"issue-row",template:Bs,styles:Os})],Ts);var Es=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,qs=(e,t,o,n)=>{for(var s,r=n>1?void 0:n?Rs(t,o):t,i=e.length-1;i>=0;i--)(s=e[i])&&(r=(n?s(t,o,r):s(r))||r);return n&&r&&Es(t,o,r),r};const Ns=Oo`
	<template role="row">
		<table-cell class="status">
			${Vn((e=>!0===e.pullRequest.isDraft),Oo`<code-icon icon="git-pull-request-draft" title="draft"></code-icon>`)}
			${Vn((e=>!0!==e.pullRequest.isDraft),Oo`<code-icon class="pull-request-draft" icon="git-pull-request" title="open"></code-icon>`)}
			${Vn((e=>"changes"===e.indicator),Oo`<code-icon class="indicator-error" icon="request-changes" title="changes requested"></code-icon>`)}
			${Vn((e=>"ready"===e.indicator),Oo`<code-icon class="indicator-info" icon="pass" title="approved and ready to merge"></code-icon>`)}
			${Vn((e=>"conflicting"===e.indicator),Oo`<code-icon
					class="indicator-error"
					icon="bracket-error"
					title="cannot be merged due to merge conflicts"
				></code-icon>`)}
			${Vn((e=>"checks"===e.indicator),Oo`<code-icon icon="error" title="checks failed"></code-icon>`)}
		</table-cell>
		<table-cell class="time"
			><span class="${e=>e.lastUpdatedClass}" title="${e=>e.lastUpdatedLabel}"
				>${e=>e.lastUpdated}</span
			></table-cell
		>
		<table-cell>
			${e=>e.pullRequest.title} <a href="${e=>e.pullRequest.url}">#${e=>e.pullRequest.id}</a><br />
			<small>
				<span class="tag"><code-icon icon="repo"></code-icon>${e=>e.pullRequest.refs?.base.repo}</span>
				into
				${Vn((e=>!0!==e.pullRequest.refs?.isCrossRepository),Oo`
						<span class="tag"
							><code-icon icon="source-control"></code-icon>${e=>e.pullRequest.refs?.base.branch}</span
						>
						from
						<span class="tag"
							><code-icon icon="source-control"></code-icon>${e=>e.pullRequest.refs?.head.branch}</span
						>
					`)}
				${Vn((e=>!0===e.pullRequest.refs?.isCrossRepository),Oo`
						<span class="tag"
							><code-icon icon="source-control"></code-icon>${e=>e.pullRequest.refs?.base.owner}:${e=>e.pullRequest.refs?.base.branch}</span
						>
						from
						<span class="tag"
							><code-icon icon="source-control"></code-icon>${e=>e.pullRequest.refs?.head.owner}:${e=>e.pullRequest.refs?.head.branch}</span
						>
					`)}
			</small>
		</table-cell>
		<table-cell class="vcenter participants">
			${Vn((e=>null!=e.pullRequest.author),Oo`
					<avatar-stack>
						<avatar-item
							media="${e=>e.pullRequest.author.avatarUrl}"
							title="${e=>e.pullRequest.author.name} (author)"
						></avatar-item>
					</avatar-stack>
				`)}
			${Vn((e=>e.assignees.length>0),Oo`<git-avatars :avatars="${e=>e.pullRequest.assignees}"></git-avatars>`)}
		</table-cell>
		<table-cell class="vcenter">${e=>e.pullRequest.comments}</table-cell>
		<table-cell class="vcenter stats"
			><span class="stat-added">+${e=>e.pullRequest.additions}</span>
			<span class="stat-deleted">-${e=>e.pullRequest.deletions}</span></table-cell
		>
		<table-cell class="vcenter actions">
			<a
				href="#"
				tabindex="${e=>e.isCurrentWorktree||e.isCurrentBranch?-1:null}"
				title="${e=>e.isCurrentWorktree?"Already on this workree":"Open Worktree..."}"
				aria-label="${e=>e.isCurrentWorktree?"Already on this workree":"Open Worktree..."}"
				@click="${(e,t)=>e.onOpenWorktreeClick(t.event)}"
				><code-icon icon="gl-worktrees-view"></code-icon></a
			><a
				href="#"
				tabindex="${e=>e.hasWorktree||e.isCurrentBranch?-1:null}"
				title="${e=>e.isCurrentBranch?"Already on this branch":"Switch to Branch..."}"
				aria-label="${e=>e.isCurrentBranch?"Already on this branch":"Switch to Branch..."}"
				@click="${(e,t)=>e.onSwitchBranchClick(t.event)}"
				><code-icon icon="gl-switch"></code-icon
			></a>
		</table-cell>
	</template>
`,Is=zo`
	${an}

	:host {
		display: table-row;
	}

	:host(:focus) {
		${rn}
	}

	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}

	a:hover {
		color: var(--vscode-textLink-activeForeground);
		text-decoration: underline;
	}

	a:focus {
		${rn}
	}

	code-icon {
		font-size: inherit;
	}

	.vcenter {
		vertical-align: middle;
	}

	.tag {
		display: inline-block;
		padding: 0.1rem 0.2rem;
		background-color: var(--background-05);
		color: var(--color-foreground--85);
		white-space: nowrap;
	}
	.tag code-icon {
		margin-right: 0.2rem;
	}

	.status {
		font-size: 1.6rem;
	}

	.time {
	}

	.icon-only {
	}

	.participants {
		white-space: nowrap;
	}

	.stats {
	}

	.actions {
		text-align: right;
		white-space: nowrap;
		width: 6.4rem;
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
	.actions a:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
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

	.stat-added {
		color: var(--vscode-gitDecoration-addedResourceForeground);
	}
	.stat-deleted {
		color: var(--vscode-gitDecoration-deletedResourceForeground);
	}

	.issue-open {
		color: var(--vscode-gitlens-openAutolinkedIssueIconColor);
	}
	.issue-closed {
		color: var(--vscode-gitlens-closedAutolinkedIssueIconColor);
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

	.pull-request-draft {
		/* color: var(--vscode-pullRequests-draft); */
		color: var(--color-foreground--85);
	}
	.pull-request-open {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pull-request-merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
	.pull-request-closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pull-request-notification {
		color: var(--vscode-pullRequests-notification);
	}

	${sn}
`;let Ms=class extends on{constructor(){super(...arguments),this.isCurrentBranch=!1,this.isCurrentWorktree=!1,this.hasWorktree=!1,this.hasLocalBranch=!1}get lastUpdatedDate(){return new Date(this.pullRequest.date)}get lastUpdatedState(){return os(this.lastUpdatedDate)}get lastUpdated(){return $t(this.lastUpdatedDate,!0)}get lastUpdatedLabel(){return $t(this.lastUpdatedDate)}get lastUpdatedClass(){switch(this.lastUpdatedState.status){case"danger":return"indicator-error";case"warning":return"indicator-warning";default:return""}}get indicator(){return null==this.pullRequest?"":!1===this.checks?"checks":"ChangesRequested"===this.pullRequest.reviewDecision?"changes":"Approved"===this.pullRequest.reviewDecision&&"Mergeable"===this.pullRequest.mergeableState?"ready":"Conflicting"===this.pullRequest.mergeableState?"conflicting":""}get indicatorLabel(){}get assignees(){const e=this.pullRequest?.assignees;if(null==e)return[];const t=this.pullRequest.author;return null!=t?e.filter((e=>e.name!==t.name)):e}onOpenWorktreeClick(e){if(this.isCurrentWorktree)return e.preventDefault(),void e.stopImmediatePropagation();this.$emit("open-worktree",this.pullRequest)}onSwitchBranchClick(e){if(this.isCurrentBranch)return e.preventDefault(),void e.stopImmediatePropagation();this.$emit("switch-branch",this.pullRequest)}};qs([Kt],Ms.prototype,"pullRequest",2),qs([Kt],Ms.prototype,"reasons",2),qs([Kt],Ms.prototype,"checks",2),qs([Kt],Ms.prototype,"isCurrentBranch",2),qs([Kt],Ms.prototype,"isCurrentWorktree",2),qs([Kt],Ms.prototype,"hasWorktree",2),qs([Kt],Ms.prototype,"hasLocalBranch",2),qs([Xt],Ms.prototype,"lastUpdatedDate",1),qs([Xt],Ms.prototype,"lastUpdatedState",1),qs([Xt],Ms.prototype,"lastUpdated",1),qs([Xt],Ms.prototype,"lastUpdatedLabel",1),qs([Xt],Ms.prototype,"lastUpdatedClass",1),qs([Xt],Ms.prototype,"indicator",1),qs([Xt],Ms.prototype,"indicatorLabel",1),qs([Xt],Ms.prototype,"assignees",1),Ms=qs([nn({name:"pull-request-row",template:Ns,styles:Is})],Ms);class Ls extends G{constructor(){super("FocusApp")}onInitialize(){this.renderContent()}onBind(){const e=super.onBind?.()??[];return e.push(g.on("#pr-filter [data-tab]","click",(e=>this.onSelectTab(e,(e=>{this._prFilter=e,this.renderPullRequests()})))),g.on("#issue-filter [data-tab]","click",(e=>this.onSelectTab(e,(e=>{this._issueFilter=e,this.renderIssues()})))),g.on("pull-request-row","open-worktree",((e,t)=>this.onOpenWorktree(e,t))),g.on("pull-request-row","switch-branch",((e,t)=>this.onSwitchBranch(e,t)))),e}onSwitchBranch(e,t){null!=e.detail?.refs?.head&&this.sendCommand(l,{pullRequest:e.detail})}onOpenWorktree(e,t){null!=e.detail?.refs?.head&&this.sendCommand(c,{pullRequest:e.detail})}onMessageReceived(e){const t=e.data;if(this.log(`onMessageReceived(${t.id}): name=${t.method}`),t.method===h.method)r(h,t,(e=>{this.state=e.state,this.setState(this.state),this.renderContent()}))}renderContent(){let e=document.getElementById("subscription-gate");null!=e&&(e.state=this.state.access.subscription.current.state,e.visible=!0!==this.state.access.allowed),e=document.getElementById("connection-gate"),null!=e&&(e.visible=!0===this.state.access.allowed&&!this.state.repos?.some((e=>e.isConnected)));document.getElementById("subscription-gate-badge").subscription=this.state.access.subscription.current,this.renderPullRequests(),this.renderIssues()}renderPullRequests(){const e=document.getElementById("pull-requests");if(null==e)return;e.querySelectorAll("pull-request-row").forEach((e=>e.remove()));const t=document.getElementById("no-pull-requests"),o=document.getElementById("loading-pull-requests");null==this.state.pullRequests||!0!==this.state.access.allowed?(t.setAttribute("hidden","true"),o.removeAttribute("hidden")):0===this.state.pullRequests.length?(t.removeAttribute("hidden"),o.setAttribute("hidden","true")):(t.setAttribute("hidden","true"),o.setAttribute("hidden","true"),this.state.pullRequests.forEach((({pullRequest:t,reasons:o,isCurrentBranch:n,isCurrentWorktree:s,hasWorktree:r,hasLocalBranch:i})=>{if(null==this._prFilter||""===this._prFilter||o.includes(this._prFilter)){const a=document.createElement("pull-request-row");a.pullRequest=t,a.reasons=o,a.isCurrentBranch=n,a.isCurrentWorktree=s,a.hasWorktree=r,a.hasLocalBranch=i,e.append(a)}})))}renderIssues(){const e=document.getElementById("issues");e.querySelectorAll("issue-row").forEach((e=>e.remove()));const t=document.getElementById("no-issues"),o=document.getElementById("loading-issues");null==this.state.issues||!0!==this.state.access.allowed?(t.setAttribute("hidden","true"),o.removeAttribute("hidden")):0===this.state.issues.length?(t.removeAttribute("hidden"),o.setAttribute("hidden","true")):(t.setAttribute("hidden","true"),o.setAttribute("hidden","true"),this.state.issues.forEach((({issue:t,reasons:o})=>{if(null==this._issueFilter||""===this._issueFilter||o.includes(this._issueFilter)){const n=document.createElement("issue-row");n.issue=t,n.reasons=o,e.append(n)}})))}onSelectTab(e,t){const o=e.target,n=o.dataset.tab;o.parentElement?.querySelectorAll("[data-tab]")?.forEach((e=>{e.dataset.tab!==n?e.classList.remove("is-active"):e.classList.add("is-active")})),t?.(n)}}new Ls;var Us=t.S;export{Us as FocusApp};