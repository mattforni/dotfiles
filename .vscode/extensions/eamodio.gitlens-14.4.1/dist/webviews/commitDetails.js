var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};void 0!==e&&Object.defineProperty(e,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var t={};e.d(t,{b:()=>Ki,F:()=>Yi});class o{constructor(e,t=!1){this.method=e,this.reset=t}}class n extends o{}class i extends o{}function s(e,t,o){e.method===t.method&&o(t.params,e)}const r=new n("webview/ready"),a=new n("webview/focus"),c=new n("command/execute");new n("configuration/preview"),new n("configuration/update"),new i("configuration/didChange"),new i("configuration/didPreview"),new i("webview/didOpenAnchor");const l=new n("commit/actions"),h=new n("commit/file/actions"),d=new n("commit/file/open"),u=new n("commit/file/openOnRemote"),p=new n("commit/file/compareWorking"),f=new n("commit/file/comparePrevious"),b=new n("commit/file/stage"),g=new n("commit/file/unstage"),m=new n("commit/pickCommit"),v=new n("commit/searchCommit"),y=new n("commit/switchMode"),w=new n("commit/autolinkSettings"),x=new n("commit/explain"),k=new n("commit/pin"),$=new n("commit/navigate"),_=new n("commit/preferences/update"),C=new i("commit/didChange",!0),S=new i("commit/didChange/wip"),A=new i("commit/didExplain");function E(e,t){let o,n,i,s,r;function a(e){const o=e-(n??0);return null==n||o>=t||o<0}function c(){const e=Date.now();if(a(e))l();else{r=setTimeout(c,t-(e-(n??0)))}}function l(){return r=void 0,o?function(){const t=o,n=i;return o=i=void 0,s=e.apply(n,t),s}():(o=i=void 0,s)}function h(...e){const l=Date.now(),h=a(l);return o=e,i=this,n=l,h&&null==r?(r=setTimeout(c,t),s):(null==r&&(r=setTimeout(c,t)),s)}return h.cancel=function(){null!=r&&clearTimeout(r),o=n=i=r=void 0},h.flush=function(){return null!=r?l():s},h.pending=function(){return null!=r},h}const O="";const P=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=T(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=T(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??O}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??O}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??O}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??O}${this.toLoggableParams(!1,o)}\n${String(e)}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??O}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??O}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??O}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??O}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return O;const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:O}};function T(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}var M,N;(N=M||(M={})).on=function(e,t,o,n){let i=!1;if("string"==typeof e){const s=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,s,n??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,s,n??!0))}}}const s=function(e){o(e,this)};return e.addEventListener(t,s,n??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,s,n??!1))}}},N.insertTemplate=function(e,t,o){const n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const n=o.bindings[e];null!=n&&(t.textContent=String(n))}}},N.resetSlot=function(e){e.replaceChildren(),e.className=""};var R=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(R||{});function D(e,t){const o=e+t,n=t<0?o<0?0:o:o>255?255:o;return Math.round(n)}function B(e,t){return L(e,-t)}function L(e,t){const o=function(e){const t=Z(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[n,i,s,r]=o,a=255*t/100;return`rgba(${D(n,a)}, ${D(i,a)}, ${D(s,a)}, ${r})`}function U(e,t){const o=q.from(e);return null==o?e:o.transparent(t/100).toString()}function j(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class z{constructor(e,t,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=j(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class F{constructor(e,t,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=j(Math.max(Math.min(1,t),0),3),this.l=j(Math.max(Math.min(1,o),0),3),this.a=j(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=e.a,s=Math.max(t,o,n),r=Math.min(t,o,n);let a=0,c=0;const l=(r+s)/2,h=s-r;if(h>0){switch(c=Math.min(l<=.5?h/(2*l):h/(2-2*l),1),s){case t:a=(o-n)/h+(o<n?6:0);break;case o:a=(n-t)/h+2;break;case n:a=(t-o)/h+4}a*=60,a=Math.round(a)}return new F(a,c,l,i)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:i}=e;let s,r,a;if(0===o)s=r=a=n;else{const e=n<.5?n*(1+o):n+o-n*o,i=2*n-e;s=F._hue2rgb(i,e,t+1/3),r=F._hue2rgb(i,e,t),a=F._hue2rgb(i,e,t-1/3)}return new z(Math.round(255*s),Math.round(255*r),Math.round(255*a),i)}}class H{constructor(e,t,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=j(Math.max(Math.min(1,t),0),3),this.v=j(Math.max(Math.min(1,o),0),3),this.a=j(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=Math.max(t,o,n),s=i-Math.min(t,o,n),r=0===i?0:s/i;let a;return a=0===s?0:i===t?((o-n)/s%6+6)%6:i===o?(n-t)/s+2:(t-o)/s+4,new H(Math.round(60*a),r,i,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:i}=e,s=n*o,r=s*(1-Math.abs(t/60%2-1)),a=n-s;let[c,l,h]=[0,0,0];return t<60?(c=s,l=r):t<120?(c=r,l=s):t<180?(l=s,h=r):t<240?(l=r,h=s):t<300?(c=r,h=s):t<=360&&(c=s,h=r),c=Math.round(255*(c+a)),l=Math.round(255*(l+a)),h=Math.round(255*(h+a)),new z(c,l,h,i)}}function I(e,t){return t.getPropertyValue(e).trim()}const V=class e{static from(t){return t instanceof e?t:Z(t)||e.red}static fromCssVariable(t,o){return Z(I(t,o))||e.red}static fromHex(t){return X(t)||e.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:F.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:H.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof z)this.rgba=e;else if(e instanceof F)this._hsla=e,this.rgba=F.toRGBA(e);else{if(!(e instanceof H))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=H.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&z.equals(this.rgba,e.rgba)&&F.equals(this.hsla,e.hsla)&&H.equals(this.hsva,e.hsva))}getRelativeLuminance(){return j(.2126*e._relativeLuminanceForComponent(this.rgba.r)+.7152*e._relativeLuminanceForComponent(this.rgba.g)+.0722*e._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new q(new z(0,0,0,e.rgba.a));if(1===t)return new q(new z(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const i=(e,o)=>{const s=e.mix(o,.5),r=s.getRelativeLuminance();return Math.abs(t-r)<1e-7||!n--?s:r>t?i(e,s):i(s,o)},s=(o>t?i(q.black,e):i(e,q.white)).rgba;return new q(new z(s.r,s.g,s.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(t){return new e(new F(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new e(new F(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){const{r:o,g:n,b:i,a:s}=this.rgba;return new e(new z(o,n,i,s*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new e(new z(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){const o=t.rgba,n=this.rgba.a,i=o.a,s=n+i*(1-n);if(s<1e-6)return e.transparent;const r=this.rgba.r*n/s+o.r*i*(1-n)/s,a=this.rgba.g*n/s+o.g*i*(1-n)/s,c=this.rgba.b*n/s+o.b*i*(1-n)/s;return new e(new z(r,a,c,s))}mix(e,t){return function(e,t,o){const n=e.rgba,i=t.rgba;return new q(new z(n.r+o*(i.r-n.r),n.g+o*(i.g-n.g),n.b+o*(i.b-n.b),n.a+o*(i.a-n.a)))}(this,e,t)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;const{r:o,g:n,b:i,a:s}=this.rgba;return new e(new z(t.rgba.r-s*(t.rgba.r-o),t.rgba.g-s*(t.rgba.g-n),t.rgba.b-s*(t.rgba.b-i),1))}flatten(...t){const o=t.reduceRight(((t,o)=>e._flatten(o,t)));return e._flatten(this,o)}static _flatten(t,o){const n=1-t.rgba.a;return new e(new z(n*o.rgba.r+t.rgba.a*t.rgba.r,n*o.rgba.g+t.rgba.a*t.rgba.g,n*o.rgba.b+t.rgba.a*t.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return K(e);return W(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-n)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};V.white=new V(new z(255,255,255,1)),V.black=new V(new z(0,0,0,1)),V.red=new V(new z(255,0,0,1)),V.blue=new V(new z(0,0,255,1)),V.green=new V(new z(0,255,0,1)),V.cyan=new V(new z(0,255,255,1)),V.lightgrey=new V(new z(211,211,211,1)),V.transparent=new V(new z(0,0,0,0));let q=V;function W(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function Y(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function K(e){return`#${Y(e.rgba.r)}${Y(e.rgba.g)}${Y(e.rgba.b)}`}const G=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function Z(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===R.Hash)return X(e);const t=G.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new q(new z(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new q(new F(n[0],n[1],n[2],n[3]))}return q.red}function X(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==R.Hash)return null;switch(t){case 7:{const t=16*Q(e.charCodeAt(1))+Q(e.charCodeAt(2)),o=16*Q(e.charCodeAt(3))+Q(e.charCodeAt(4)),n=16*Q(e.charCodeAt(5))+Q(e.charCodeAt(6));return new q(new z(t,o,n,1))}case 9:{const t=16*Q(e.charCodeAt(1))+Q(e.charCodeAt(2)),o=16*Q(e.charCodeAt(3))+Q(e.charCodeAt(4)),n=16*Q(e.charCodeAt(5))+Q(e.charCodeAt(6)),i=16*Q(e.charCodeAt(7))+Q(e.charCodeAt(8));return new q(new z(t,o,n,i/255))}case 4:{const t=Q(e.charCodeAt(1)),o=Q(e.charCodeAt(2)),n=Q(e.charCodeAt(3));return new q(new z(16*t+t,16*o+o,16*n+n))}case 5:{const t=Q(e.charCodeAt(1)),o=Q(e.charCodeAt(2)),n=Q(e.charCodeAt(3)),i=Q(e.charCodeAt(4));return new q(new z(16*t+t,16*o+o,16*n+n,(16*i+i)/255))}default:return null}}function Q(e){switch(e){case R.Digit0:return 0;case R.Digit1:return 1;case R.Digit2:return 2;case R.Digit3:return 3;case R.Digit4:return 4;case R.Digit5:return 5;case R.Digit6:return 6;case R.Digit7:return 7;case R.Digit8:return 8;case R.Digit9:return 9;case R.a:case R.A:return 10;case R.b:case R.B:return 11;case R.c:case R.C:return 12;case R.d:case R.D:return 13;case R.e:case R.E:return 14;case R.f:case R.F:return 15}return 0}const J=class e{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(t,o,n)=>{null==this.listeners&&(this.listeners=new ie);const i=this.listeners.push(null==o?t:[t,o]),s={dispose:()=>{s.dispose=e._noop,this._disposed||i()}};return Array.isArray(n)&&n.push(s),s}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new ie);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};J._noop=function(){};let ee=J;const te={done:!0,value:void 0},oe=class e{constructor(t){this.element=t,this.next=e.Undefined,this.prev=e.Undefined}};oe.Undefined=new oe(void 0);let ne=oe;class ie{constructor(){this._first=ne.Undefined,this._last=ne.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ne.Undefined}clear(){this._first=ne.Undefined,this._last=ne.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new ne(e);if(this._first===ne.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===ne.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===ne.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==ne.Undefined&&e.next!==ne.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===ne.Undefined&&e.next===ne.Undefined?(this._first=ne.Undefined,this._last=ne.Undefined):e.next===ne.Undefined?(this._last=this._last.prev,this._last.next=ne.Undefined):e.prev===ne.Undefined&&(this._first=this._first.next,this._first.prev=ne.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===ne.Undefined?te:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==ne.Undefined;t=t.next)e.push(t.element);return e}}const se=new ee,re=se.event;function ae(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,i=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),s=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),r=t.style,a=I("--vscode-editor-background",o);let c=I("--vscode-editor-foreground",o);c||(c=I("--vscode-foreground",o));let l=I("--color-background",o);return r.setProperty("--color-background--lighten-05",L(l,5)),r.setProperty("--color-background--darken-05",B(l,5)),r.setProperty("--color-background--lighten-075",L(l,7.5)),r.setProperty("--color-background--darken-075",B(l,7.5)),r.setProperty("--color-background--lighten-10",L(l,10)),r.setProperty("--color-background--darken-10",B(l,10)),r.setProperty("--color-background--lighten-15",L(l,15)),r.setProperty("--color-background--darken-15",B(l,15)),r.setProperty("--color-background--lighten-30",L(l,30)),r.setProperty("--color-background--darken-30",B(l,30)),r.setProperty("--color-background--lighten-50",L(l,50)),r.setProperty("--color-background--darken-50",B(l,50)),l=I("--color-button-background",o),r.setProperty("--color-button-background--darken-30",B(l,30)),l=I("--color-highlight",o),r.setProperty("--color-highlight--75",U(l,75)),r.setProperty("--color-highlight--50",U(l,50)),r.setProperty("--color-highlight--25",U(l,25)),l=I("--color-button-secondary-background",o),r.setProperty("--color-button-secondary-background--darken-30",B(l,30)),l=I("--color-foreground",o),r.setProperty("--color-foreground--85",U(l,85)),r.setProperty("--color-foreground--75",U(l,75)),r.setProperty("--color-foreground--65",U(l,65)),r.setProperty("--color-foreground--50",U(l,50)),l=I("--color-link-foreground",o),r.setProperty("--color-link-foreground--darken-20",B(l,20)),r.setProperty("--color-link-foreground--lighten-20",L(l,20)),l=I("--color-alert-infoBackground",o),r.setProperty("--color-alert-infoHoverBackground",i?B(l,5):L(l,5)),l=I("--color-alert-warningBackground",o),r.setProperty("--color-alert-warningHoverBackground",i?B(l,5):L(l,5)),l=I("--color-alert-errorBackground",o),r.setProperty("--color-alert-errorHoverBackground",i?B(l,5):L(l,5)),l=i?B(a,5):L(a,5),r.setProperty("--color-alert-neutralBackground",l),r.setProperty("--color-alert-neutralHoverBackground",i?B(l,5):L(l,5)),{colors:{background:a,foreground:c},computedStyle:o,isLightTheme:i,isHighContrastTheme:s,isInitializing:null==e}}let ce=0;function le(){return 1073741824===ce?ce=1:ce++,`webview:${ce}`}class he{constructor(e){this.appName=e;const t=[],o=ae();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(re(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",P.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},"off"),this.log("ctor()"),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{se.fire(ae(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("ctor(): initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(M.on(window,"message",this.onMessageReceived.bind(this))),this.sendCommand(r,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(M.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=E((e=>{this.sendCommand(a,e)}),150);this.bindDisposables.push(M.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),M.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){P.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=le();this.log(`sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){const n=le();this.log(`sendCommandWithCompletion(${n}): name=${e.method}`);const i=new Promise(((e,t)=>{let i;const r=[M.on(window,"message",(t=>{s(o,t.data,(o=>{t.data.completionId===n&&(r.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=i&&(clearTimeout(i),i=void 0)}}];i=setTimeout((()=>{i=void 0,r.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${o.method}`))}),6e4)}));return this.postMessage({id:n,method:e.method,params:t,completionId:n}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}const de=window,ue=de.ShadowRoot&&(void 0===de.ShadyCSS||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol(),fe=new WeakMap;class be{constructor(e,t,o){if(this._$cssResult$=!0,o!==pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ue&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=fe.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&fe.set(t,e))}return e}toString(){return this.cssText}}const ge=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new be(o,e,pe)},me=ue?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new be("string"==typeof e?e:e+"",void 0,pe))(t)})(e):e;var ve;const ye=window,we=ye.trustedTypes,xe=we?we.emptyScript:"",ke=ye.reactiveElementPolyfillSupport,$e={toAttribute(e,t){switch(t){case Boolean:e=e?xe:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},_e=(e,t)=>t!==e&&(t==t||e==e),Ce={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:_e},Se="finalized";class Ae extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=Ce){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ce}static finalize(){if(this.hasOwnProperty(Se))return!1;this[Se]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(me(e))}else void 0!==e&&t.push(me(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{ue?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),n=de.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=Ce){var n;const i=this.constructor._$Ep(e,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:$e).toAttribute(t,o.type);this._$El=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(e,t){var o;const n=this.constructor,i=n._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=n.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:$e;this._$El=i,this[i]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||_e)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var Ee;Ae[Se]=!0,Ae.elementProperties=new Map,Ae.elementStyles=[],Ae.shadowRootOptions={mode:"open"},null==ke||ke({ReactiveElement:Ae}),(null!==(ve=ye.reactiveElementVersions)&&void 0!==ve?ve:ye.reactiveElementVersions=[]).push("1.6.3");const Oe=window,Pe=Oe.trustedTypes,Te=Pe?Pe.createPolicy("lit-html",{createHTML:e=>e}):void 0,Me="$lit$",Ne=`lit$${(Math.random()+"").slice(9)}$`,Re="?"+Ne,De=`<${Re}>`,Be=document,Le=()=>Be.createComment(""),Ue=e=>null===e||"object"!=typeof e&&"function"!=typeof e,je=Array.isArray,ze=e=>je(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),Fe="[ \t\n\f\r]",He=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ie=/-->/g,Ve=/>/g,qe=RegExp(`>|${Fe}(?:([^\\s"'>=/]+)(${Fe}*=${Fe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),We=/'/g,Ye=/"/g,Ke=/^(?:script|style|textarea|title)$/i,Ge=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),Ze=Ge(1),Xe=(Ge(2),Symbol.for("lit-noChange")),Qe=Symbol.for("lit-nothing"),Je=new WeakMap,et=Be.createTreeWalker(Be,129,null,!1);function tt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Te?Te.createHTML(t):t}const ot=(e,t)=>{const o=e.length-1,n=[];let i,s=2===t?"<svg>":"",r=He;for(let t=0;t<o;t++){const o=e[t];let a,c,l=-1,h=0;for(;h<o.length&&(r.lastIndex=h,c=r.exec(o),null!==c);)h=r.lastIndex,r===He?"!--"===c[1]?r=Ie:void 0!==c[1]?r=Ve:void 0!==c[2]?(Ke.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=qe):void 0!==c[3]&&(r=qe):r===qe?">"===c[0]?(r=null!=i?i:He,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?qe:'"'===c[3]?Ye:We):r===Ye||r===We?r=qe:r===Ie||r===Ve?r=He:(r=qe,i=void 0);const d=r===qe&&e[t+1].startsWith("/>")?" ":"";s+=r===He?o+De:l>=0?(n.push(a),o.slice(0,l)+Me+o.slice(l)+Ne+d):o+Ne+(-2===l?(n.push(void 0),t):d)}return[tt(e,s+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class nt{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,s=0;const r=e.length-1,a=this.parts,[c,l]=ot(e,t);if(this.el=nt.createElement(c,o),et.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=et.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(Me)||t.startsWith(Ne)){const o=l[s++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+Me).split(Ne),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?ct:"?"===t[1]?ht:"@"===t[1]?dt:at})}else a.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(Ke.test(n.tagName)){const e=n.textContent.split(Ne),t=e.length-1;if(t>0){n.textContent=Pe?Pe.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],Le()),et.nextNode(),a.push({type:2,index:++i});n.append(e[t],Le())}}}else if(8===n.nodeType)if(n.data===Re)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(Ne,e+1));)a.push({type:7,index:i}),e+=Ne.length-1}i++}}static createElement(e,t){const o=Be.createElement("template");return o.innerHTML=e,o}}function it(e,t,o=e,n){var i,s,r,a;if(t===Xe)return t;let c=void 0!==n?null===(i=o._$Co)||void 0===i?void 0:i[n]:o._$Cl;const l=Ue(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(s=null==c?void 0:c._$AO)||void 0===s||s.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(r=(a=o)._$Co)&&void 0!==r?r:a._$Co=[])[n]=c:o._$Cl=c),void 0!==c&&(t=it(e,c._$AS(e,t.values),c,n)),t}class st{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:Be).importNode(o,!0);et.currentNode=i;let s=et.nextNode(),r=0,a=0,c=n[0];for(;void 0!==c;){if(r===c.index){let t;2===c.type?t=new rt(s,s.nextSibling,this,e):1===c.type?t=new c.ctor(s,c.name,c.strings,this,e):6===c.type&&(t=new ut(s,this,e)),this._$AV.push(t),c=n[++a]}r!==(null==c?void 0:c.index)&&(s=et.nextNode(),r++)}return et.currentNode=Be,i}v(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class rt{constructor(e,t,o,n){var i;this.type=2,this._$AH=Qe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=it(this,e,t),Ue(e)?e===Qe||null==e||""===e?(this._$AH!==Qe&&this._$AR(),this._$AH=Qe):e!==this._$AH&&e!==Xe&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):ze(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Qe&&Ue(this._$AH)?this._$AA.nextSibling.data=e:this.$(Be.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=nt.createElement(tt(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(o);else{const e=new st(i,this),t=e.u(this.options);e.v(o),this.$(t),this._$AH=e}}_$AC(e){let t=Je.get(e.strings);return void 0===t&&Je.set(e.strings,t=new nt(e)),t}T(e){je(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new rt(this.k(Le()),this.k(Le()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class at{constructor(e,t,o,n,i){this.type=1,this._$AH=Qe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Qe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let s=!1;if(void 0===i)e=it(this,e,t,0),s=!Ue(e)||e!==this._$AH&&e!==Xe,s&&(this._$AH=e);else{const n=e;let r,a;for(e=i[0],r=0;r<i.length-1;r++)a=it(this,n[o+r],t,r),a===Xe&&(a=this._$AH[r]),s||(s=!Ue(a)||a!==this._$AH[r]),a===Qe?e=Qe:e!==Qe&&(e+=(null!=a?a:"")+i[r+1]),this._$AH[r]=a}s&&!n&&this.j(e)}j(e){e===Qe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class ct extends at{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Qe?void 0:e}}const lt=Pe?Pe.emptyScript:"";class ht extends at{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Qe?this.element.setAttribute(this.name,lt):this.element.removeAttribute(this.name)}}class dt extends at{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=it(this,e,t,0))&&void 0!==o?o:Qe)===Xe)return;const n=this._$AH,i=e===Qe&&n!==Qe||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==Qe&&(n===Qe||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class ut{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){it(this,e)}}const pt=Oe.litHtmlPolyfillSupport;null==pt||pt(nt,rt),(null!==(Ee=Oe.litHtmlVersions)&&void 0!==Ee?Ee:Oe.litHtmlVersions=[]).push("2.8.0");var ft,bt;class gt extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,i;const s=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let r=s._$litPart$;if(void 0===r){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;s._$litPart$=r=new rt(t.insertBefore(Le(),e),e,void 0,null!=o?o:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return Xe}}gt.finalized=!0,gt._$litElement$=!0,null===(ft=globalThis.litElementHydrateSupport)||void 0===ft||ft.call(globalThis,{LitElement:gt});const mt=globalThis.litElementPolyfillSupport;null==mt||mt({LitElement:gt});(null!==(bt=globalThis.litElementVersions)&&void 0!==bt?bt:globalThis.litElementVersions=[]).push("3.3.3");const vt=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){customElements.define(e,t)}}})(e,t),yt=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}},wt=(e,t,o)=>{t.constructor.createProperty(o,e)};function xt(e){return(t,o)=>void 0!==o?wt(e,t,o):yt(e,t)}function kt(e){return xt({...e,state:!0})}const $t=({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,s=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(s.finisher=function(t){e(t,n)}),s}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}};var _t;const Ct=null!=(null===(_t=window.HTMLSlotElement)||void 0===_t?void 0:_t.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));var St=Object.defineProperty,At=Object.getOwnPropertyDescriptor,Et=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?At(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&St(t,o,s),s};let Ot=class extends gt{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};Ot.styles=ge`
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
	`,Et([xt()],Ot.prototype,"icon",2),Et([xt()],Ot.prototype,"modifier",2),Et([xt({type:Number})],Ot.prototype,"size",2),Ot=Et([vt("code-icon")],Ot);var Pt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,Mt=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Tt(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Pt(t,o,s),s};let Nt=class extends gt{constructor(){super(...arguments),this.label="",this.icon=""}render(){return Ze`
			<a
				role="${this.href?Qe:"button"}"
				type="${this.href?Qe:"button"}"
				aria-label="${this.label}"
				title="${this.label}"
			>
				<code-icon icon="${this.icon}"></code-icon>
			</a>
		`}};Nt.styles=ge`
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
	`,Mt([xt()],Nt.prototype,"href",2),Mt([xt()],Nt.prototype,"label",2),Mt([xt()],Nt.prototype,"icon",2),Nt=Mt([vt("action-item")],Nt);const Rt=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===Rt.trustedTypes&&(Rt.trustedTypes={createPolicy:(e,t)=>t});const Dt={configurable:!1,enumerable:!1,writable:!1};void 0===Rt.FAST&&Reflect.defineProperty(Rt,"FAST",Object.assign({value:Object.create(null)},Dt));const Bt=Rt.FAST;if(void 0===Bt.getById){const e=Object.create(null);Reflect.defineProperty(Bt,"getById",Object.assign({value(t,o){let n=e[t];return void 0===n&&(n=o?e[t]=o():null),n}},Dt))}const Lt=Object.freeze([]);function Ut(){const e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let n=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==n;)o=e.get(n),n=Reflect.getPrototypeOf(n);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}const jt=Rt.FAST.getById(1,(()=>{const e=[],t=[];function o(){if(t.length)throw t.shift()}function n(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}function i(){let t=0;for(;t<e.length;)if(n(e[t]),t++,t>1024){for(let o=0,n=e.length-t;o<n;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&Rt.requestAnimationFrame(i),e.push(t)},process:i})})),zt=Rt.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let Ft=zt;const Ht=`fast-${Math.random().toString(36).substring(2,8)}`,It=`${Ht}{`,Vt=`}${Ht}`,qt=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(Ft!==zt)throw new Error("The HTML policy can only be set once.");Ft=e},createHTML:e=>Ft.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(Ht),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${Ht}:`,"")),createInterpolationPlaceholder:e=>`${It}${e}${Vt}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${Ht}:${e}--\x3e`,queueUpdate:jt.enqueue,processUpdates:jt.process,nextUpdate:()=>new Promise(jt.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class Wt{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){const t=this.spillover,o=this.source;if(void 0===t){const t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==n&&n.handleChange(o,e)}else for(let n=0,i=t.length;n<i;++n)t[n].handleChange(o,e)}}class Yt{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new Wt(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new Wt(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const Kt=Bt.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=qt.queueUpdate;let n,i=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function s(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=i(e):t.set(e,o=new Yt(e))),o}const r=Ut();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==n&&n.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,n=e[o];if(n!==t){e[o]=t;const i=e[this.callback];"function"==typeof i&&i.call(e,n,t),s(e).notify(this.name)}}}class c extends Wt{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const i=this.binding(e,t);return n=o,i}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,i=s(e),r=null===o?this.first:{};if(r.propertySource=e,r.propertyName=t,r.notifier=i,i.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;n=void 0,t=o.propertySource[o.propertyName],n=this,e===t&&(this.needsRefresh=!0)}o.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){i=e},getNotifier:s,track(e,t){void 0!==n&&n.watch(e,t)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(e,t){s(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),r(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:r,binding(e,t,o=this.isVolatileBinding(e)){return new c(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));const Gt=Bt.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class Zt{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Gt.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){Gt.set(e)}}Kt.defineProperty(Zt.prototype,"index"),Kt.defineProperty(Zt.prototype,"length");const Xt=Object.seal(new Zt);class Qt{constructor(){this.targetIndex=0}}class Jt extends Qt{constructor(){super(...arguments),this.createPlaceholder=qt.createInterpolationPlaceholder}}class eo extends Qt{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return qt.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function to(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=Kt.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function oo(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function no(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function io(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function so(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function ro(e){qt.setAttribute(this.target,this.targetName,e)}function ao(e){qt.setBooleanAttribute(this.target,this.targetName,e)}function co(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function lo(e){this.target[this.targetName]=e}function ho(e){const t=this.classVersions||Object.create(null),o=this.target;let n=this.version||0;if(null!=e&&e.length){const i=e.split(/\s+/);for(let e=0,s=i.length;e<s;++e){const s=i[e];""!==s&&(t[s]=n,o.classList.add(s))}}if(this.classVersions=t,this.version=n+1,0!==n){n-=1;for(const e in t)t[e]===n&&o.classList.remove(e)}}class uo extends Jt{constructor(e){super(),this.binding=e,this.bind=to,this.unbind=no,this.updateTarget=ro,this.isBindingVolatile=Kt.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=lo,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>qt.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=ao;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=oo,this.unbind=so;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=ho)}}targetAtContent(){this.updateTarget=co,this.unbind=io}createBehavior(e){return new po(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class po{constructor(e,t,o,n,i,s,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=n,this.unbind=i,this.updateTarget=s,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Zt.setEvent(e);const t=this.binding(this.source,this.context);Zt.setEvent(null),!0!==t&&e.preventDefault()}}let fo=null;class bo{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){fo=this}static borrow(e){const t=fo||new bo;return t.directives=e,t.reset(),fo=null,t}}function go(e){if(1===e.length)return e[0];let t;const o=e.length,n=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),i=new uo(((e,t)=>{let i="";for(let s=0;s<o;++s)i+=n[s](e,t);return i}));return i.targetName=t,i}const mo=Vt.length;function vo(e,t){const o=t.split(It);if(1===o.length)return null;const n=[];for(let t=0,i=o.length;t<i;++t){const i=o[t],s=i.indexOf(Vt);let r;if(-1===s)r=i;else{const t=parseInt(i.substring(0,s));n.push(e.directives[t]),r=i.substring(s+mo)}""!==r&&n.push(r)}return n}function yo(e,t,o=!1){const n=t.attributes;for(let i=0,s=n.length;i<s;++i){const r=n[i],a=r.value,c=vo(e,a);let l=null;null===c?o&&(l=new uo((()=>a)),l.targetName=r.name):l=go(c),null!==l&&(t.removeAttributeNode(r),i--,s--,e.addFactory(l))}}function wo(e,t,o){const n=vo(e,t.textContent);if(null!==n){let i=t;for(let s=0,r=n.length;s<r;++s){const r=n[s],a=0===s?t:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);"string"==typeof r?a.textContent=r:(a.textContent=" ",e.captureContentBinding(r)),i=a,e.targetIndex++,a!==t&&o.nextNode()}e.targetIndex--}}const xo=document.createRange();class ko{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const o=e.parentNode;let n,i=this.firstChild;for(;i!==t;)n=i.nextSibling,o.insertBefore(i,e),i=n;o.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.appendChild(n),n=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.removeChild(n),n=o;e.removeChild(t);const i=this.behaviors,s=this.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(s)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const n=this.source;this.source=e,this.context=t;for(let i=0,s=o.length;i<s;++i){const s=o[i];s.unbind(n),s.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,i=o.length;n<i;++n)o[n].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,n=e.length;o<n;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){xo.setStartBefore(e[0].firstChild),xo.setEndAfter(e[e.length-1].lastChild),xo.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],n=o.behaviors,i=o.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(i)}}}}class $o{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=qt.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const n=bo.borrow(t);yo(n,e,!0);const i=n.behaviorFactories;n.reset();const s=qt.createTemplateWalker(o);let r;for(;r=s.nextNode();)switch(n.targetIndex++,r.nodeType){case 1:yo(n,r);break;case 3:wo(n,r,s);break;case 8:qt.isMarker(r)&&n.addFactory(t[qt.extractDirectiveIndexFromMarker(r)])}let a=0;(qt.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),a=-1);const c=n.behaviorFactories;return n.release(),{fragment:o,viewBehaviorFactories:c,hostBehaviorFactories:i,targetOffset:a}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,n=new Array(this.behaviorCount),i=qt.createTemplateWalker(t);let s=0,r=this.targetOffset,a=i.nextNode();for(let e=o.length;s<e;++s){const e=o[s],t=e.targetIndex;for(;null!==a;){if(r===t){n[s]=e.createBehavior(a);break}a=i.nextNode(),r++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,i=t.length;o<i;++o,++s)n[s]=t[o].createBehavior(e)}return new ko(t,n)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const n=this.create(o);return n.bind(e,Xt),n.appendTo(t),n}}const _o=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class Co{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=Kt.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Lt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class So extends Co{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}class Ao{createCSS(){return""}createBehavior(){}}class Eo{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function Oo(e){return e.map((e=>e instanceof Eo?Oo(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function Po(e){return e.map((e=>e instanceof Eo?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}Eo.create=(()=>{if(qt.supportsAdoptedStyleSheets){const e=new Map;return t=>new No(t,e)}return e=>new Do(e)})();let To=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},Mo=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(qt.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),To=(e,t)=>{e.adoptedStyleSheets.push(...t)},Mo=(e,t)=>{for(const o of t){const t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class No extends Eo{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=Po(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=Oo(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){To(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Mo(e,this.styleSheets),super.removeStylesFrom(e)}}let Ro=0;class Do extends Eo{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Po(e),this.styleSheets=Oo(e),this.styleClass="fast-style-class-"+ ++Ro}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const i=document.createElement("style");i.innerHTML=t[n],i.className=o,e.append(i)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,n=t.length;o<n;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}function Bo(e,t){const o=[];let n="";const i=[];for(let s=0,r=e.length-1;s<r;++s){n+=e[s];let r=t[s];if(r instanceof Ao){const e=r.createBehavior();r=r.createCSS(),e&&i.push(e)}r instanceof Eo||r instanceof CSSStyleSheet?(""!==n.trim()&&(o.push(n),n=""),o.push(r)):n+=r}return n+=e[e.length-1],""!==n.trim()&&o.push(n),{styles:o,behaviors:i}}const Lo=Object.freeze({locate:Ut()}),Uo={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e};class jo{constructor(e,t,o=t.toLowerCase(),n="reflect",i){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=n,this.converter=i,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===i&&(this.converter=Uo)}setValue(e,t){const o=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return Kt.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||qt.queueUpdate((()=>{o.add(e);const n=e[this.fieldName];switch(t){case"reflect":const t=this.converter;qt.setAttribute(e,this.attribute,void 0!==t?t.toView(n):n);break;case"boolean":qt.setBooleanAttribute(e,this.attribute,n)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(Lo.locate(e));for(let n=0,i=t.length;n<i;++n){const i=t[n];if(void 0!==i)for(let t=0,n=i.length;t<n;++t){const n=i[t];"string"==typeof n?o.push(new jo(e,n)):o.push(new jo(e,n.property,n.attribute,n.mode,n.converter))}}return o}}const zo={mode:"open"},Fo={},Ho=Bt.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class Io{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=jo.collect(e,t.attributes),n=new Array(o.length),i={},s={};for(let e=0,t=o.length;e<t;++e){const t=o[e];n[e]=t.attribute,i[t.name]=t,s[t.attribute]=t}this.attributes=o,this.observedAttributes=n,this.propertyLookup=i,this.attributeLookup=s,this.shadowOptions=void 0===t.shadowOptions?zo:null===t.shadowOptions?void 0:Object.assign(Object.assign({},zo),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?Fo:Object.assign(Object.assign({},Fo),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?Eo.create(t.styles):t.styles instanceof Eo?t.styles:Eo.create([t.styles])}get isDefined(){return!!Ho.getByType(this.type)}define(e=customElements){const t=this.type;if(Ho.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,n=e.length;t<n;++t)Kt.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}Io.forType=Ho.getByType;const Vo=new WeakMap,qo={bubbles:!0,composed:!0,cancelable:!0};function Wo(e){return e.shadowRoot||Vo.get(e)||null}class Yo extends Yt{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&Vo.set(e,t)}const n=Kt.getAccessors(e);if(n.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,i=n.length;o<i;++o){const i=n[o].name,s=e[i];void 0!==s&&(delete e[i],t[i]=s)}}}get isConnected(){return Kt.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,Kt.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=Wo(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=Wo(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,n=[];for(let i=0;i<o;++i){const o=e[i];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),n.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,Xt)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const n=e.length,i=[];for(let s=0;s<n;++s){const n=e[s];if(o.has(n)){const e=o.get(n)-1;0===e||t?o.delete(n)&&i.push(n):o.set(n,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,Xt);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,Xt);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},qo),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let n=0,i=o.length;n<i;++n){const i=o[n];e[i]=t[i]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=Wo(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||qt.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=Io.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new Yo(e,o)}}function Ko(e){return class extends e{constructor(){super(),Yo.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const Go=Object.assign(Ko(HTMLElement),{from:e=>Ko(e),define:(e,t)=>new Io(e,t).define().type});var Zo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,Qo=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Xo(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Zo(t,o,s),s};const Jo=(function(e,...t){const o=[];let n="";for(let i=0,s=e.length-1;i<s;++i){const s=e[i];let r=t[i];if(n+=s,r instanceof $o){const e=r;r=()=>e}if("function"==typeof r&&(r=new uo(r)),r instanceof Jt){const e=_o.exec(s);null!==e&&(r.targetName=e[2])}r instanceof Qt?(n+=r.createPlaceholder(o.length),o.push(r)):n+=r}return n+=e[e.length-1],new $o(n,o)})`<template role="navigation"><slot ${en="actionNodes","string"==typeof en&&(en={property:en}),new eo("fast-slotted",So,en)}></slot></template>`;var en;const tn=(function(e,...t){const{styles:o,behaviors:n}=Bo(e,t),i=Eo.create(o);return n.length&&i.withBehaviors(...n),i})`
	:host {
		display: flex;
		align-items: center;
		user-select: none;
	}
`;let on=class extends Go{actionNodesChanged(e,t){if(this.actionNodesDisposer?.(),!t?.length)return;const o=this.handleKeydown.bind(this),n=t?.filter((e=>1===e.nodeType)).map(((e,t)=>(e.setAttribute("tabindex",0===t?"0":"-1"),e.addEventListener("keydown",o,!1),{dispose:()=>{e?.removeEventListener("keydown",o,!1)}})));this.actionNodesDisposer=()=>{n?.forEach((({dispose:e})=>e()))}}disconnectedCallback(){this.actionNodesDisposer?.()}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;const t=e.target;let o=null;if("ArrowLeft"===e.key){if(o=t.previousElementSibling,null==o){const e=this.actionNodes.filter((e=>1===e.nodeType));o=e[e.length-1]??null}}else"ArrowRight"===e.key&&(o=t.nextElementSibling,null==o&&(o=this.actionNodes.find((e=>1===e.nodeType))??null));null!=o&&o!==t&&(t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};var nn;Qo([function(e,t){Kt.defineProperty(e,t)}],on.prototype,"actionNodes",2),on=Qo([(nn={name:"action-nav",template:Jo,styles:tn},function(e){new Io(e,nn).define()})],on);const sn=()=>({toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))}),rn=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,an=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,cn=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let ln;const hn=new Map;let dn,un,pn;function fn(e,t,o,n=!0){const i=`${o??""}:${t=t??void 0}`;let s=hn.get(i);if(null==s){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=an.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(rn))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let r;r=null==o?dn:"system"===o?void 0:[o],s=new Intl.DateTimeFormat(r,e),n&&hn.set(i,s)}if(null==t||an.test(t))return s.format(e);function r(e){const t=`${o??""}:time:${e}`;let i=hn.get(t);if(null==i){const s={localeMatcher:"best fit",timeStyle:e};let r;r=null==o?dn:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(r,s),n&&hn.set(t,i)}return i}const a=s.formatToParts(e);return t.replace(rn,((t,o,n,i,s,c,l,h,d,u,p,f,b,g,m)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in m){const o=m[t];if(null==o)continue;const n=a.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return gn(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=r("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return` ${(t??n)?.value??""}`}return n?.value??""}return""}))}const bn=["th","st","nd","rd"];function gn(e){const t=e%100;return`${e}${bn[(t-20)%10]??bn[t]??bn[0]}`}var mn=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,yn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?vn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&mn(t,o,s),s};let wn=class extends gt{constructor(){super(...arguments),this.format="MMMM Do, YYYY h:mma",this.date=new Date}render(){return Ze`<time datetime="${this.date}" title="${fn(this.date,this.format??"MMMM Do, YYYY h:mma")}"
			>${function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,i,s]of cn){const r=Math.abs(o);if(r>=n||1e3===n)return t?(null==ln&&(null!=pn?ln=pn.resolvedOptions().locale:null!=un?ln=un.resolvedOptions().locale:(pn=new Intl.RelativeTimeFormat(dn,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),ln=pn.resolvedOptions().locale)),"en"===ln||ln?.startsWith("en-")?`${Math.round(r/i)}${s}`:(null==pn&&(pn=new Intl.RelativeTimeFormat(dn,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),pn.format(Math.round(o/i),e))):(null==un&&(un=new Intl.RelativeTimeFormat(dn,{localeMatcher:"best fit",numeric:"auto",style:"long"})),un.format(Math.round(o/i),e))}return""}(this.date)}</time
		>`}};yn([xt()],wn.prototype,"format",2),yn([xt({converter:sn(),reflect:!0})],wn.prototype,"date",2),wn=yn([vt("formatted-date")],wn);var xn=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,$n=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?kn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&xn(t,o,s),s};let _n=class extends gt{constructor(){super(...arguments),this.name="",this.email="",this.avatarUrl="https://www.gravatar.com/avatar/?s=64&d=robohash",this.showAvatar=!1,this.dateFormat="MMMM Do, YYYY h:mma",this.committer=!1,this.actionLabel="committed"}render(){return Ze`
			<a class="avatar" href="${this.email?`mailto:${this.email}`:"#"}">
				${this.showAvatar?Ze`<img class="thumb" src="${this.avatarUrl}" alt="${this.name}" />`:Ze`<code-icon icon="person" size="32"></code-icon>`}
			</a>
			<a class="name" href="${this.email?`mailto:${this.email}`:"#"}">${this.name}</a>
			<span class="date">
				${this.actionLabel}
				<formatted-date date=${this.date?.getTime()} format=${this.dateFormat}> </formatted-date>
			</span>
		`}};_n.styles=ge`
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
	`,$n([xt()],_n.prototype,"name",2),$n([xt()],_n.prototype,"email",2),$n([xt({converter:sn(),reflect:!0})],_n.prototype,"date",2),$n([xt()],_n.prototype,"avatarUrl",2),$n([xt({type:Boolean})],_n.prototype,"showAvatar",2),$n([xt()],_n.prototype,"dateFormat",2),$n([xt({type:Boolean})],_n.prototype,"committer",2),$n([xt()],_n.prototype,"actionLabel",2),_n=$n([vt("commit-identity")],_n);var Cn=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,An=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Sn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Cn(t,o,s),s};let En=class extends gt{constructor(){super(...arguments),this.url="",this.name="",this.date="",this.status="merged",this.type="autolink",this.key=""}renderDate(){return""===this.date?Qe:Ze`<formatted-date date="${this.date}"></formatted-date>`}render(){let e;switch(this.type){case"issue":e="closed"===this.status?"pass":"issues";break;case"pr":switch(this.status){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed";break;default:e="git-pull-request"}break;default:e="link"}return Ze`
			<span class="icon"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.key} ${this.status?this.status:Qe} ${this.renderDate()}</p>
		`}};En.styles=ge`
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
	`,An([xt()],En.prototype,"url",2),An([xt()],En.prototype,"name",2),An([xt()],En.prototype,"date",2),An([xt()],En.prototype,"status",2),An([xt()],En.prototype,"type",2),An([xt()],En.prototype,"key",2),En=An([vt("issue-pull-request")],En);var On=Object.defineProperty,Pn=Object.getOwnPropertyDescriptor,Tn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Pn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&On(t,o,s),s};let Mn=class extends gt{constructor(){super(...arguments),this.lines=1}render(){const e=`--skeleton-lines: ${this.lines};`;return Ze`<div class="skeleton" style=${e}></div>`}};Mn.styles=ge`
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
	`,Tn([xt({type:Number})],Mn.prototype,"lines",2),Mn=Tn([vt("skeleton-loader")],Mn);var Nn=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,Dn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Rn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Nn(t,o,s),s};let Bn=class extends gt{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return Ze`
			<span class="stat added" title="${this.added} added" aria-label="${this.added} added"
				><span class="label">+${this.added}</span></span
			>
			<span class="stat modified" title="${this.modified} modified" aria-label="${this.modified} modified"
				><span class="label">~${this.modified}</span></span
			>
			<span class="stat deleted" title="${this.removed} removed" aria-label="${this.removed} removed"
				><span class="label">-${this.removed}</span></span
			>
		`}};Bn.styles=ge`
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
    `,Dn([xt({type:Number})],Bn.prototype,"added",2),Dn([xt({type:Number})],Bn.prototype,"modified",2),Dn([xt({type:Number})],Bn.prototype,"removed",2),Bn=Dn([vt("commit-stats")],Bn);var Ln=Object.defineProperty,Un=Object.getOwnPropertyDescriptor,jn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Un(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Ln(t,o,s),s};let zn=class extends gt{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?Ze`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:Ze`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return Ze`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" class="content">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};zn.styles=ge`
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
	`,jn([xt({type:Boolean,reflect:!0})],zn.prototype,"collapsable",2),jn([xt({type:Boolean,reflect:!0})],zn.prototype,"expanded",2),jn([xt({type:Boolean,reflect:!0})],zn.prototype,"loading",2),zn=jn([vt("webview-pane")],zn);var Fn=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,In=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Hn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Fn(t,o,s),s};let Vn=class extends gt{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return Ze`<div class="progress-bar"></div>`}};Vn.styles=ge`
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
	`,In([xt({reflect:!0})],Vn.prototype,"mode",2),In([xt({type:Boolean})],Vn.prototype,"active",2),In([xt()],Vn.prototype,"position",2),Vn=In([vt("progress-indicator")],Vn);var qn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Yn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Wn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&qn(t,o,s),s};let Kn=class extends gt{handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),!this._listItems?.length)return;const t=this._listItems.map((e=>{const t=this.handleKeydown.bind(this),o=this.handleBeforeSelected.bind(this),n=this.handleSelected.bind(this);return e.addEventListener("keydown",t,!1),e.addEventListener("select",o,!1),e.addEventListener("selected",n,!1),{dispose:function(){e?.removeEventListener("keydown",t,!1),e?.removeEventListener("select",o,!1),e?.removeEventListener("selected",n,!1)}}}));this._slotSubscriptionsDisposer=()=>{t?.forEach((({dispose:e})=>e()))}}disconnectedCallback(){super.disconnectedCallback(),this._slotSubscriptionsDisposer?.()}handleBeforeSelected(e){if(!e.target)return;const t=e.target;null!=this._lastSelected&&this._lastSelected!==t&&this._lastSelected.deselect(),this._lastSelected=t}handleSelected(e){if(!e.target||!e.detail.branch)return;function t(e){return parseInt(e.getAttribute("level")??"0",10)}function o(e){const o=t(e);let n=e.previousElementSibling;for(;n;){if(t(n)<o)return n;n=n.previousElementSibling}}const n=e.target,i=t(n);let s=n.nextElementSibling;for(;s&&i!=t(s);){const t=o(s);s.parentexpanded=!1!==t?.expanded,s.expanded=e.detail.expanded,s=s.nextElementSibling}}handleKeydown(e){if(!e.target)return;const t=e.target;if("ArrowUp"===e.key){const e=t.previousElementSibling;e?.focus()}else if("ArrowDown"===e.key){const e=t.nextElementSibling;e?.focus()}}firstUpdated(){this.setAttribute("role","tree")}render(){return Ze`<slot @slotchange=${this.handleSlotChange}></slot>`}};Kn.styles=ge`
		::slotted(*) {
			box-sizing: inherit;
		}
	`,Yn([function(e){const{slot:t,selector:o}=null!=e?e:{};return $t({descriptor:n=>({get(){var n;const i="slot"+(t?`[name=${t}]`:":not([name])"),s=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(i),r=null!=s?Ct(s,e):[];return o?r.filter((e=>e.matches(o))):r},enumerable:!0,configurable:!0})})}()],Kn.prototype,"_listItems",2),Kn=Yn([vt("list-container")],Kn);var Gn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Xn=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Zn(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Gn(t,o,s),s};let Qn=class extends gt{constructor(){super(...arguments),this.tree=!1,this.branch=!1,this.expanded=!0,this.parentexpanded=!0,this.level=1,this.active=!1,this.hideIcon=!1}get treeLeaves(){const e=this.level-1;return e<1?[]:Array.from({length:e},((e,t)=>t+1))}get isHidden(){return!1===this.parentexpanded||!this.branch&&!this.expanded?"true":"false"}onItemClick(e){this.select(e.altKey?{viewColumn:-2}:void 0)}onDblItemClick(e){this.select({preview:!1,viewColumn:e.altKey||e.ctrlKey||e.metaKey?-2:void 0})}select(e,t=!1){this.dispatchEvent(new CustomEvent("select")),this.branch&&(this.expanded=!this.expanded),this.active=!0,t||window.requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent("selected",{detail:{tree:this.tree,branch:this.branch,expanded:this.expanded,level:this.level,showOptions:e}}))}))}deselect(){this.active=!1}focus(e){this.shadowRoot?.getElementById("item")?.focus(e)}firstUpdated(e){this.setAttribute("role","treeitem")}updated(){this.setAttribute("aria-expanded",this.expanded?"true":"false"),this.setAttribute("aria-hidden",this.isHidden)}render(){return Ze`
			<button
				id="item"
				class="item"
				type="button"
				@click="${this.onItemClick}"
				@dblclick="${this.onDblItemClick}"
			>
				${this.treeLeaves.map((()=>Ze`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`))}
				${this.branch?Ze`<span class="node"
							><code-icon
								class="branch"
								icon="${this.expanded?"chevron-down":"chevron-right"}"
							></code-icon
					  ></span>`:Qe}
				${this.hideIcon?Qe:Ze`<span class="icon"><slot name="icon"></slot></span>`}
				<span class="text">
					<span class="main"><slot></slot></span>
					<span class="description"><slot name="description"></slot></span>
				</span>
			</button>
			<nav class="actions"><slot name="actions"></slot></nav>
		`}};Qn.styles=ge`
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
			align-items: center;
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
			line-height: 1.6rem;
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
	`,Xn([xt({type:Boolean,reflect:!0})],Qn.prototype,"tree",2),Xn([xt({type:Boolean,reflect:!0})],Qn.prototype,"branch",2),Xn([xt({type:Boolean,reflect:!0})],Qn.prototype,"expanded",2),Xn([xt({type:Boolean,reflect:!0})],Qn.prototype,"parentexpanded",2),Xn([xt({type:Number})],Qn.prototype,"level",2),Xn([xt({type:Boolean})],Qn.prototype,"active",2),Xn([xt({attribute:"hide-icon",type:Boolean})],Qn.prototype,"hideIcon",2),Xn([kt()],Qn.prototype,"treeLeaves",1),Xn([kt()],Qn.prototype,"isHidden",1),Qn=Xn([vt("list-item")],Qn);var Jn=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,ti=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?ei(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Jn(t,o,s),s};const oi={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};let ni=class extends gt{get statusName(){return this.status?oi[this.status]:""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return Ze`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return Ze`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return Ze`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return Ze`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return Ze`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return Ze`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return Ze`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return Ze`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return Ze`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};ni.styles=[ge`
			:host-context(.vscode-high-contrast),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],ti([xt()],ni.prototype,"status",2),ti([kt()],ni.prototype,"statusName",1),ni=ti([vt("gl-git-status")],ni);var ii=Object.defineProperty,si=Object.getOwnPropertyDescriptor,ri=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?si(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&ii(t,o,s),s};let ai=class extends gt{constructor(){super(...arguments),this.tree=!1,this.expanded=!0,this.parentexpanded=!0,this.level=1,this.checkable=!1,this.checked=!1,this.active=!1,this.stash=!1,this.uncommitted=!1,this.readonly=!1,this.icon="",this.path="",this.repo="",this.staged=!1,this.status=""}select(e){this.baseRef.select(e)}deselect(){this.baseRef.deselect()}focus(e){this.baseRef.focus(e)}get isHidden(){return this.baseRef.isHidden??"false"}get pathIndex(){return this.path.lastIndexOf("/")}get fileName(){return this.pathIndex>-1?this.path.substring(this.pathIndex+1):this.path}get filePath(){return!this.tree&&this.pathIndex>-1?this.path.substring(0,this.pathIndex):""}render(){return Ze`
			<list-item
				?tree=${this.tree}
				level=${this.level}
				?active=${this.active}
				?expanded=${this.expanded}
				?parentexpanded=${this.parentexpanded}
				?checkable=${this.checkable}
				?checked=${this.checked}
				@selected=${this.onComparePrevious}
			>
				<gl-git-status slot="icon" .status=${this.status}></gl-git-status>
				${this.fileName} ${this.tree?Qe:Ze`<span slot="description">${this.filePath}</span>`}
				<span slot="actions">
					<a
						class="change-list__action"
						@click=${this.onOpenFile}
						href="#"
						title="Open file"
						aria-label="Open file"
					>
						<code-icon icon="go-to-file"></code-icon>
					</a>
					${this.uncommitted&&!this.readonly?this.staged?Ze`
									<a
										class="change-list__action"
										@click=${this.onUnstageFile}
										href="#"
										title="Unstage Changes"
										aria-label="Unstage Changes"
									>
										<code-icon icon="remove"></code-icon>
									</a>
							  `:Ze`
									<a
										class="change-list__action"
										@click=${this.onStageFile}
										href="#"
										title="Stage Changes"
										aria-label="Stage Changes"
									>
										<code-icon icon="plus"></code-icon>
									</a>
							  `:this.uncommitted?Qe:Ze`
								<a
									class="change-list__action"
									@click=${this.onCompareWorking}
									href="#"
									title="Open Changes with Working File"
									aria-label="Open Changes with Working File"
								>
									<code-icon icon="git-compare"></code-icon>
								</a>
								${this.stash?Qe:Ze`
											<a
												class="change-list__action"
												@click=${this.onOpenFileOnRemote}
												href="#"
												title="Open on remote"
												aria-label="Open on remote"
											>
												<code-icon icon="globe"></code-icon>
											</a>
											<a
												class="change-list__action"
												@click=${this.onMoreActions}
												href="#"
												title="Show more actions"
												aria-label="Show more actions"
											>
												<code-icon icon="ellipsis"></code-icon>
											</a>
									  `}
						  `}
				</span>
			</list-item>
		`}onOpenFile(e){const t=new CustomEvent("file-open",{detail:this.getEventDetail({preview:!1,viewColumn:e.altKey?-2:void 0})});this.dispatchEvent(t)}onOpenFileOnRemote(e){const t=new CustomEvent("file-open-on-remote",{detail:this.getEventDetail({preview:!1,viewColumn:e.altKey?-2:void 0})});this.dispatchEvent(t)}onCompareWorking(e){const t=new CustomEvent("file-compare-working",{detail:this.getEventDetail({preview:!1,viewColumn:e.altKey?-2:void 0})});this.dispatchEvent(t)}onComparePrevious(e){const t=new CustomEvent("file-compare-previous",{detail:this.getEventDetail(e.detail.showOptions)});this.dispatchEvent(t)}onMoreActions(e){const t=new CustomEvent("file-more-actions",{detail:this.getEventDetail()});this.dispatchEvent(t)}onStageFile(e){const t=new CustomEvent("file-stage",{detail:this.getEventDetail()});this.dispatchEvent(t)}onUnstageFile(e){const t=new CustomEvent("file-unstage",{detail:this.getEventDetail()});this.dispatchEvent(t)}getEventDetail(e){return{path:this.path,repoPath:this.repo,staged:this.staged,showOptions:e}}};ai.styles=ge`
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
	`,ri([function(e,t){return $t({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}("list-item")],ai.prototype,"baseRef",2),ri([xt({type:Boolean})],ai.prototype,"tree",2),ri([xt({type:Boolean,reflect:!0})],ai.prototype,"expanded",2),ri([xt({type:Boolean,reflect:!0})],ai.prototype,"parentexpanded",2),ri([xt({type:Number})],ai.prototype,"level",2),ri([xt({type:Boolean,reflect:!0})],ai.prototype,"checkable",2),ri([xt({type:Boolean,reflect:!0})],ai.prototype,"checked",2),ri([xt({type:Boolean})],ai.prototype,"active",2),ri([xt({type:Boolean})],ai.prototype,"stash",2),ri([xt({type:Boolean})],ai.prototype,"uncommitted",2),ri([xt({type:Boolean})],ai.prototype,"readonly",2),ri([xt({type:String})],ai.prototype,"icon",2),ri([xt({type:String})],ai.prototype,"path",2),ri([xt({type:String})],ai.prototype,"repo",2),ri([xt({type:Boolean})],ai.prototype,"staged",2),ri([xt({type:String})],ai.prototype,"status",2),ri([kt()],ai.prototype,"isHidden",1),ri([kt()],ai.prototype,"pathIndex",1),ri([kt()],ai.prototype,"fileName",1),ri([kt()],ai.prototype,"filePath",1),ai=ri([vt("file-change-list-item")],ai);var ci={408:(e,t)=>{var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator,f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,g={};function m(e,t,o){this.props=e,this.context=t,this.refs=g,this.updater=o||f}function v(){}function y(e,t,o){this.props=e,this.context=t,this.refs=g,this.updater=o||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var w=y.prototype=new v;w.constructor=y,b(w,m.prototype),w.isPureReactComponent=!0;var x=Array.isArray,k=Object.prototype.hasOwnProperty,$={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var i,s={},r=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(r=""+t.key),t)k.call(t,i)&&!_.hasOwnProperty(i)&&(s[i]=t[i]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var l=Array(c),h=0;h<c;h++)l[h]=arguments[h+2];s.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===s[i]&&(s[i]=c[i]);return{$$typeof:o,type:e,key:r,ref:a,props:s,_owner:$.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var A=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,i,s,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case n:c=!0}}if(c)return r=r(c=e),e=""===s?"."+E(c,0):s,x(r)?(i="",null!=e&&(i=e.replace(A,"$&/")+"/"),O(r,t,i,"",(function(e){return e}))):null!=r&&(S(r)&&(r=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(r,i+(!r.key||c&&c.key===r.key?"":(""+r.key).replace(A,"$&/")+"/")+e)),t.push(r)),1;if(c=0,s=""===s?".":s+":",x(e))for(var l=0;l<e.length;l++){var h=s+E(a=e[l],l);c+=O(a,t,i,h,r)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),l=0;!(a=e.next()).done;)c+=O(a=a.value,t,i,h=s+E(a,l++),r);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,o){if(null==e)return e;var n=[],i=0;return O(e,n,"","",(function(e){return t.call(o,e,i++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},N={transition:null},R={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:N,ReactCurrentOwner:$};t.Children={map:P,forEach:function(e,t,o){P(e,(function(){t.apply(this,arguments)}),o)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=i,t.Profiler=r,t.PureComponent=y,t.StrictMode=s,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=b({},e.props),s=e.key,r=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(r=t.ref,a=$.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)k.call(t,l)&&!_.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){c=Array(l);for(var h=0;h<l;h++)c[h]=arguments[h+2];i.children=c}return{$$typeof:o,type:e.type,key:s,ref:r,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return M.current.useCallback(e,t)},t.useContext=function(e){return M.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return M.current.useDeferredValue(e)},t.useEffect=function(e,t){return M.current.useEffect(e,t)},t.useId=function(){return M.current.useId()},t.useImperativeHandle=function(e,t,o){return M.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return M.current.useMemo(e,t)},t.useReducer=function(e,t,o){return M.current.useReducer(e,t,o)},t.useRef=function(e){return M.current.useRef(e)},t.useState=function(e){return M.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return M.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return M.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},li={};function hi(e){var t=li[e];if(void 0!==t)return t.exports;var o=li[e]={exports:{}};return ci[e](o,o.exports,hi),o.exports}hi.d=(e,t)=>{for(var o in t)hi.o(t,o)&&!hi.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},hi.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var di={};(()=>{hi.d(di,{Tn:()=>yt,qE:()=>Ot,HE:()=>Pt,Ct:()=>Rt,zx:()=>Ut,M1:()=>Ht,sX:()=>co,D0:()=>ro,fs:()=>ao,Tw:()=>Ct,ud:()=>Tt,wt:()=>Mt,ne:()=>Dt,Ku:()=>jt,FU:()=>It,XO:()=>lo,Ze:()=>ho,K$:()=>uo,cX:()=>Co,Js:()=>So,J9:()=>Ao,si:()=>oo,sg:()=>Po,hW:()=>To,II:()=>vo,v2:()=>ko,sN:()=>$o,Lb:()=>_o,J2:()=>bt,$$:()=>to,Vp:()=>Oo,u:()=>mt,fW:()=>Mo,WV:()=>fe,h4:()=>pe,kZ:()=>ue});const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class i{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=n.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(o,e))}return e}toString(){return this.cssText}}const s=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new i(n,e,o)},r=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,o))(t)})(e):e;var a;const c=window,l=c.trustedTypes,h=l?l.emptyScript:"",d=c.reactiveElementPolyfillSupport,u={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},p=(e,t)=>t!==e&&(t==t||e==e),f={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p},b="finalized";class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||f}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var o;const n=null!==(o=this.shadowRoot)&&void 0!==o?o:this.attachShadow(this.constructor.shadowRootOptions);return((o,n)=>{t?o.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),i=e.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=f){var n;const i=this.constructor._$Ep(e,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:u).toAttribute(t,o.type);this._$El=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(e,t){var o;const n=this.constructor,i=n._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=n.getPropertyOptions(i),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:u;this._$El=i,this[i]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||p)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var m;g[b]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:g}),(null!==(a=c.reactiveElementVersions)&&void 0!==a?a:c.reactiveElementVersions=[]).push("1.6.3");const v=window,y=v.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,$="?"+k,_=`<${$}>`,C=document,S=()=>C.createComment(""),A=e=>null===e||"object"!=typeof e&&"function"!=typeof e,E=Array.isArray,O="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,M=/>/g,N=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,D=/"/g,B=/^(?:script|style|textarea|title)$/i,L=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),U=L(1),j=(L(2),Symbol.for("lit-noChange")),z=Symbol.for("lit-nothing"),F=new WeakMap,H=C.createTreeWalker(C,129,null,!1);function I(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(t):t}class V{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,s=0;const r=e.length-1,a=this.parts,[c,l]=((e,t)=>{const o=e.length-1,n=[];let i,s=2===t?"<svg>":"",r=P;for(let t=0;t<o;t++){const o=e[t];let a,c,l=-1,h=0;for(;h<o.length&&(r.lastIndex=h,c=r.exec(o),null!==c);)h=r.lastIndex,r===P?"!--"===c[1]?r=T:void 0!==c[1]?r=M:void 0!==c[2]?(B.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=N):void 0!==c[3]&&(r=N):r===N?">"===c[0]?(r=null!=i?i:P,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?N:'"'===c[3]?D:R):r===D||r===R?r=N:r===T||r===M?r=P:(r=N,i=void 0);const d=r===N&&e[t+1].startsWith("/>")?" ":"";s+=r===P?o+_:l>=0?(n.push(a),o.slice(0,l)+x+o.slice(l)+k+d):o+k+(-2===l?(n.push(void 0),t):d)}return[I(e,s+(e[o]||"<?>")+(2===t?"</svg>":"")),n]})(e,t);if(this.el=V.createElement(c,o),H.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=H.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(x)||t.startsWith(k)){const o=l[s++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+x).split(k),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?X:"@"===t[1]?Q:K})}else a.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(B.test(n.tagName)){const e=n.textContent.split(k),t=e.length-1;if(t>0){n.textContent=y?y.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],S()),H.nextNode(),a.push({type:2,index:++i});n.append(e[t],S())}}}else if(8===n.nodeType)if(n.data===$)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(k,e+1));)a.push({type:7,index:i}),e+=k.length-1}i++}}static createElement(e,t){const o=C.createElement("template");return o.innerHTML=e,o}}function q(e,t,o=e,n){var i,s,r,a;if(t===j)return t;let c=void 0!==n?null===(i=o._$Co)||void 0===i?void 0:i[n]:o._$Cl;const l=A(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(s=null==c?void 0:c._$AO)||void 0===s||s.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(r=(a=o)._$Co)&&void 0!==r?r:a._$Co=[])[n]=c:o._$Cl=c),void 0!==c&&(t=q(e,c._$AS(e,t.values),c,n)),t}class W{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:C).importNode(o,!0);H.currentNode=i;let s=H.nextNode(),r=0,a=0,c=n[0];for(;void 0!==c;){if(r===c.index){let t;2===c.type?t=new Y(s,s.nextSibling,this,e):1===c.type?t=new c.ctor(s,c.name,c.strings,this,e):6===c.type&&(t=new J(s,this,e)),this._$AV.push(t),c=n[++a]}r!==(null==c?void 0:c.index)&&(s=H.nextNode(),r++)}return H.currentNode=C,i}v(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Y{constructor(e,t,o,n){var i;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),A(e)?e===z||null==e||""===e?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==j&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>E(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==z&&A(this._$AH)?this._$AA.nextSibling.data=e:this.$(C.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=V.createElement(I(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(o);else{const e=new W(i,this),t=e.u(this.options);e.v(o),this.$(t),this._$AH=e}}_$AC(e){let t=F.get(e.strings);return void 0===t&&F.set(e.strings,t=new V(e)),t}T(e){E(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new Y(this.k(S()),this.k(S()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class K{constructor(e,t,o,n,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let s=!1;if(void 0===i)e=q(this,e,t,0),s=!A(e)||e!==this._$AH&&e!==j,s&&(this._$AH=e);else{const n=e;let r,a;for(e=i[0],r=0;r<i.length-1;r++)a=q(this,n[o+r],t,r),a===j&&(a=this._$AH[r]),s||(s=!A(a)||a!==this._$AH[r]),a===z?e=z:e!==z&&(e+=(null!=a?a:"")+i[r+1]),this._$AH[r]=a}s&&!n&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}}const Z=y?y.emptyScript:"";class X extends K{constructor(){super(...arguments),this.type=4}j(e){e&&e!==z?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Q extends K{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=q(this,e,t,0))&&void 0!==o?o:z)===j)return;const n=this._$AH,i=e===z&&n!==z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==z&&(n===z||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class J{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const ee=v.litHtmlPolyfillSupport;var te,oe;null==ee||ee(V,Y),(null!==(m=v.litHtmlVersions)&&void 0!==m?m:v.litHtmlVersions=[]).push("2.8.0");class ne extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,i;const s=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let r=s._$litPart$;if(void 0===r){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;s._$litPart$=r=new Y(t.insertBefore(S(),e),e,void 0,null!=o?o:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return j}}ne.finalized=!0,ne._$litElement$=!0,null===(te=globalThis.litElementHydrateSupport)||void 0===te||te.call(globalThis,{LitElement:ne});const ie=globalThis.litElementPolyfillSupport;null==ie||ie({LitElement:ne}),(null!==(oe=globalThis.litElementVersions)&&void 0!==oe?oe:globalThis.litElementVersions=[]).push("3.3.3");const se=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function re(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):se(e,t)}const ae=({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,s=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(s.finisher=function(t){e(t,n)}),s}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}};function ce(e,t){return ae({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}var le;const he=null!=(null===(le=window.HTMLSlotElement)||void 0===le?void 0:le.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));class de extends ne{}const ue=s`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,pe=s``,fe=s`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,be=Math.min,ge=Math.max,me=Math.round,ve=(Math.floor,e=>({x:e,y:e})),ye={left:"right",right:"left",bottom:"top",top:"bottom"},we={start:"end",end:"start"};function xe(e,t,o){return ge(e,be(t,o))}function ke(e,t){return"function"==typeof e?e(t):e}function $e(e){return e.split("-")[0]}function _e(e){return e.split("-")[1]}function Ce(e){return"x"===e?"y":"x"}function Se(e){return"y"===e?"height":"width"}function Ae(e){return["top","bottom"].includes($e(e))?"y":"x"}function Ee(e){return Ce(Ae(e))}function Oe(e){return e.replace(/start|end/g,(e=>we[e]))}function Pe(e){return e.replace(/left|right|bottom|top/g,(e=>ye[e]))}function Te(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Me(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Ne(e,t,o){let{reference:n,floating:i}=e;const s=Ae(t),r=Ee(t),a=Se(r),c=$e(t),l="y"===s,h=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,u=n[a]/2-i[a]/2;let p;switch(c){case"top":p={x:h,y:n.y-i.height};break;case"bottom":p={x:h,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:d};break;case"left":p={x:n.x-i.width,y:d};break;default:p={x:n.x,y:n.y}}switch(_e(t)){case"start":p[r]-=u*(o&&l?-1:1);break;case"end":p[r]+=u*(o&&l?-1:1)}return p}async function Re(e,t){var o;void 0===t&&(t={});const{x:n,y:i,platform:s,rects:r,elements:a,strategy:c}=e,{boundary:l="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=ke(t,e),f=Te(p),b=a[u?"floating"===d?"reference":"floating":d],g=Me(await s.getClippingRect({element:null==(o=await(null==s.isElement?void 0:s.isElement(b)))||o?b:b.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(a.floating)),boundary:l,rootBoundary:h,strategy:c})),m="floating"===d?{...r.floating,x:n,y:i}:r.reference,v=await(null==s.getOffsetParent?void 0:s.getOffsetParent(a.floating)),y=await(null==s.isElement?void 0:s.isElement(v))&&await(null==s.getScale?void 0:s.getScale(v))||{x:1,y:1},w=Me(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,offsetParent:v,strategy:c}):m);return{top:(g.top-w.top+f.top)/y.y,bottom:(w.bottom-g.bottom+f.bottom)/y.y,left:(g.left-w.left+f.left)/y.x,right:(w.right-g.right+f.right)/y.x}}const De=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:i,middlewareData:s,rects:r,initialPlacement:a,platform:c,elements:l}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:b=!0,...g}=ke(e,t);if(null!=(o=s.arrow)&&o.alignmentOffset)return{};const m=$e(i),v=$e(a)===a,y=await(null==c.isRTL?void 0:c.isRTL(l.floating)),w=u||(v||!b?[Pe(a)]:function(e){const t=Pe(e);return[Oe(e),t,Oe(t)]}(a));u||"none"===f||w.push(...function(e,t,o,n){const i=_e(e);let s=function(e,t,o){const n=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:n:t?n:i;case"left":case"right":return t?s:r;default:return[]}}($e(e),"start"===o,n);return i&&(s=s.map((e=>e+"-"+i)),t&&(s=s.concat(s.map(Oe)))),s}(a,b,f,y));const x=[a,...w],k=await Re(t,g),$=[];let _=(null==(n=s.flip)?void 0:n.overflows)||[];if(h&&$.push(k[m]),d){const e=function(e,t,o){void 0===o&&(o=!1);const n=_e(e),i=Ee(e),s=Se(i);let r="x"===i?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=Pe(r)),[r,Pe(r)]}(i,r,y);$.push(k[e[0]],k[e[1]])}if(_=[..._,{placement:i,overflows:$}],!$.every((e=>e<=0))){var C,S;const e=((null==(C=s.flip)?void 0:C.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:_},reset:{placement:t}};let o=null==(S=_.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:S.placement;if(!o)switch(p){case"bestFit":{var A;const e=null==(A=_.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:A[0];e&&(o=e);break}case"initialPlacement":o=a}if(i!==o)return{reset:{placement:o}}}return{}}}},Be=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:n}=t,i=await async function(e,t){const{placement:o,platform:n,elements:i}=e,s=await(null==n.isRTL?void 0:n.isRTL(i.floating)),r=$e(o),a=_e(o),c="y"===Ae(o),l=["left","top"].includes(r)?-1:1,h=s&&c?-1:1,d=ke(t,e);let{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&"number"==typeof f&&(p="end"===a?-1*f:f),c?{x:p*h,y:u*l}:{x:u*l,y:p*h}}(t,e);return{x:o+i.x,y:n+i.y,data:i}}}};function Le(e){return ze(e)?(e.nodeName||"").toLowerCase():"#document"}function Ue(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function je(e){var t;return null==(t=(ze(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function ze(e){return e instanceof Node||e instanceof Ue(e).Node}function Fe(e){return e instanceof Element||e instanceof Ue(e).Element}function He(e){return e instanceof HTMLElement||e instanceof Ue(e).HTMLElement}function Ie(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Ue(e).ShadowRoot)}function Ve(e){const{overflow:t,overflowX:o,overflowY:n,display:i}=Ge(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(i)}function qe(e){return["table","td","th"].includes(Le(e))}function We(e){const t=Ye(),o=Ge(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function Ye(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ke(e){return["html","body","#document"].includes(Le(e))}function Ge(e){return Ue(e).getComputedStyle(e)}function Ze(e){return Fe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Xe(e){if("html"===Le(e))return e;const t=e.assignedSlot||e.parentNode||Ie(e)&&e.host||je(e);return Ie(t)?t.host:t}function Qe(e){const t=Xe(e);return Ke(t)?e.ownerDocument?e.ownerDocument.body:e.body:He(t)&&Ve(t)?t:Qe(t)}function Je(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const i=Qe(e),s=i===(null==(n=e.ownerDocument)?void 0:n.body),r=Ue(i);return s?t.concat(r,r.visualViewport||[],Ve(i)?i:[],r.frameElement&&o?Je(r.frameElement):[]):t.concat(i,Je(i,[],o))}function et(e){const t=Ge(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=He(e),s=i?e.offsetWidth:o,r=i?e.offsetHeight:n,a=me(o)!==s||me(n)!==r;return a&&(o=s,n=r),{width:o,height:n,$:a}}function tt(e){return Fe(e)?e:e.contextElement}function ot(e){const t=tt(e);if(!He(t))return ve(1);const o=t.getBoundingClientRect(),{width:n,height:i,$:s}=et(t);let r=(s?me(o.width):o.width)/n,a=(s?me(o.height):o.height)/i;return r&&Number.isFinite(r)||(r=1),a&&Number.isFinite(a)||(a=1),{x:r,y:a}}const nt=ve(0);function it(e){const t=Ue(e);return Ye()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:nt}function st(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const i=e.getBoundingClientRect(),s=tt(e);let r=ve(1);t&&(n?Fe(n)&&(r=ot(n)):r=ot(e));const a=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==Ue(e))&&t}(s,o,n)?it(s):ve(0);let c=(i.left+a.x)/r.x,l=(i.top+a.y)/r.y,h=i.width/r.x,d=i.height/r.y;if(s){const e=Ue(s),t=n&&Fe(n)?Ue(n):n;let o=e.frameElement;for(;o&&n&&t!==e;){const e=ot(o),t=o.getBoundingClientRect(),n=Ge(o),i=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,s=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;c*=e.x,l*=e.y,h*=e.x,d*=e.y,c+=i,l+=s,o=Ue(o).frameElement}}return Me({width:h,height:d,x:c,y:l})}function rt(e){return st(je(e)).left+Ze(e).scrollLeft}function at(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=Ue(e),n=je(e),i=o.visualViewport;let s=n.clientWidth,r=n.clientHeight,a=0,c=0;if(i){s=i.width,r=i.height;const e=Ye();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:a,y:c}}(e,o);else if("document"===t)n=function(e){const t=je(e),o=Ze(e),n=e.ownerDocument.body,i=ge(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=ge(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+rt(e);const a=-o.scrollTop;return"rtl"===Ge(n).direction&&(r+=ge(t.clientWidth,n.clientWidth)-i),{width:i,height:s,x:r,y:a}}(je(e));else if(Fe(t))n=function(e,t){const o=st(e,!0,"fixed"===t),n=o.top+e.clientTop,i=o.left+e.clientLeft,s=He(e)?ot(e):ve(1);return{width:e.clientWidth*s.x,height:e.clientHeight*s.y,x:i*s.x,y:n*s.y}}(t,o);else{const o=it(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return Me(n)}function ct(e,t){const o=Xe(e);return!(o===t||!Fe(o)||Ke(o))&&("fixed"===Ge(o).position||ct(o,t))}function lt(e,t,o){const n=He(t),i=je(t),s="fixed"===o,r=st(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const c=ve(0);if(n||!n&&!s)if(("body"!==Le(t)||Ve(i))&&(a=Ze(t)),n){const e=st(t,!0,s,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&(c.x=rt(i));return{x:r.left+a.scrollLeft-c.x,y:r.top+a.scrollTop-c.y,width:r.width,height:r.height}}function ht(e,t){return He(e)&&"fixed"!==Ge(e).position?t?t(e):e.offsetParent:null}function dt(e,t){const o=Ue(e);if(!He(e))return o;let n=ht(e,t);for(;n&&qe(n)&&"static"===Ge(n).position;)n=ht(n,t);return n&&("html"===Le(n)||"body"===Le(n)&&"static"===Ge(n).position&&!We(n))?o:n||function(e){let t=Xe(e);for(;He(t)&&!Ke(t);){if(We(t))return t;t=Xe(t)}return null}(e)||o}const ut={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:n}=e;const i=He(o),s=je(o);if(o===s)return t;let r={scrollLeft:0,scrollTop:0},a=ve(1);const c=ve(0);if((i||!i&&"fixed"!==n)&&(("body"!==Le(o)||Ve(s))&&(r=Ze(o)),He(o))){const e=st(o);a=ot(o),c.x=e.x+o.clientLeft,c.y=e.y+o.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-r.scrollLeft*a.x+c.x,y:t.y*a.y-r.scrollTop*a.y+c.y}},getDocumentElement:je,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const s=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let n=Je(e,[],!1).filter((e=>Fe(e)&&"body"!==Le(e))),i=null;const s="fixed"===Ge(e).position;let r=s?Xe(e):e;for(;Fe(r)&&!Ke(r);){const t=Ge(r),o=We(r);o||"fixed"!==t.position||(i=null),(s?!o&&!i:!o&&"static"===t.position&&i&&["absolute","fixed"].includes(i.position)||Ve(r)&&!o&&ct(e,r))?n=n.filter((e=>e!==r)):i=t,r=Xe(r)}return t.set(e,n),n}(t,this._c):[].concat(o),n],r=s[0],a=s.reduce(((e,o)=>{const n=at(t,o,i);return e.top=ge(n.top,e.top),e.right=be(n.right,e.right),e.bottom=be(n.bottom,e.bottom),e.left=ge(n.left,e.left),e}),at(t,r,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:dt,getElementRects:async function(e){let{reference:t,floating:o,strategy:n}=e;const i=this.getOffsetParent||dt,s=this.getDimensions;return{reference:lt(t,await i(o),n),floating:{x:0,y:0,...await s(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return et(e)},getScale:ot,isElement:Fe,isRTL:function(e){return"rtl"===Ge(e).direction}},pt=s`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var ft=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};class bt extends de{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[fe,ue,pt]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Be(6),De(),(t={padding:5},void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:a={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=ke(t,e),l={x:o,y:n},h=await Re(e,c),d=Ae($e(i)),u=Ce(d);let p=l[u],f=l[d];if(s){const e="y"===u?"bottom":"right";p=xe(p+h["y"===u?"top":"left"],p,p-h[e])}if(r){const e="y"===d?"bottom":"right";f=xe(f+h["y"===d?"top":"left"],f,f-h[e])}const b=a.fn({...e,[u]:p,[d]:f});return{...b,data:{x:b.x-o,y:b.y-n}}}})];var t;this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:i,rects:s,platform:r,elements:a,middlewareData:c}=t,{element:l,padding:h=0}=ke(e,t)||{};if(null==l)return{};const d=Te(h),u={x:o,y:n},p=Ee(i),f=Se(p),b=await r.getDimensions(l),g="y"===p,m=g?"top":"left",v=g?"bottom":"right",y=g?"clientHeight":"clientWidth",w=s.reference[f]+s.reference[p]-u[p]-s.floating[f],x=u[p]-s.reference[p],k=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l));let $=k?k[y]:0;$&&await(null==r.isElement?void 0:r.isElement(k))||($=a.floating[y]||s.floating[f]);const _=w/2-x/2,C=$/2-b[f]/2-1,S=be(d[m],C),A=be(d[v],C),E=S,O=$-b[f]-A,P=$/2-b[f]/2+_,T=xe(E,P,O),M=!c.arrow&&null!=_e(i)&&P!=T&&s.reference[f]/2-(P<E?S:A)-b[f]/2<0,N=M?P<E?P-E:P-O:0;return{[p]:u[p]+N,data:{[p]:T,centerOffset:P-T-N,...M&&{alignmentOffset:N}},reset:M}}}))({element:this.arrowEl})),await((e,t,o)=>{const n=new Map,i={platform:ut,...o},s={...i.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:r}=o,a=s.filter(Boolean),c=await(null==r.isRTL?void 0:r.isRTL(t));let l=await r.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=Ne(l,n,c),u=n,p={},f=0;for(let o=0;o<a.length;o++){const{name:s,fn:b}=a[o],{x:g,y:m,data:v,reset:y}=await b({x:h,y:d,initialPlacement:n,placement:u,strategy:i,middlewareData:p,rects:l,platform:r,elements:{reference:e,floating:t}});h=null!=g?g:h,d=null!=m?m:d,p={...p,[s]:{...p[s],...v}},y&&f<=50&&(f++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(l=!0===y.rects?await r.getElementRects({reference:e,floating:t,strategy:i}):y.rects),({x:h,y:d}=Ne(l,u,c))),o=-1)}return{x:h,y:d,placement:u,strategy:i,middlewareData:p}})(e,t,{...i,platform:s})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:o,middlewareData:n})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=n.arrow?.x,t=n.arrow?.y,i={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[i]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?U`<div part="arrow" class="arrow"></div>`:""}render(){return U`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}ft([re({type:Boolean})],bt.prototype,"arrow",void 0),ft([re({type:Boolean})],bt.prototype,"hover",void 0),ft([re()],bt.prototype,"placement",void 0),ft([re({attribute:"popover-id"})],bt.prototype,"popoverId",void 0),ft([re({attribute:"sr-visible",type:Boolean})],bt.prototype,"srVisible",void 0),ft([ce('slot[name="trigger"]')],bt.prototype,"triggerSlot",void 0),ft([ce(".popover")],bt.prototype,"popoverEl",void 0),ft([ce(".arrow")],bt.prototype,"arrowEl",void 0),ft([re({state:!0})],bt.prototype,"open",void 0);const gt=s`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);padding:var(--gk-tooltip-padding,10px 16px);max-width:var(--gk-tooltip-max-width,none);width:max-content}`;class mt extends de{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[fe,ue,gt]}static{this.elementName="gk-tooltip"}static{this.components=[bt]}render(){return U`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);s>3&&r&&Object.defineProperty(t,o,r)}([re({attribute:"sr-visible",type:Boolean})],mt.prototype,"srVisible",void 0);const vt=s`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class yt extends de{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=vt}static{this.elementName="gk-additions-deletions"}static{this.components=[mt]}render(){return U`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);s>3&&r&&Object.defineProperty(t,o,r)}([re({attribute:"tooltip-text"})],yt.prototype,"tooltipText",void 0);const wt=new Set(["children","localName","ref","style","className"]),xt=new WeakMap,kt=(e,t,o,n,i)=>{const s=null==i?void 0:i[t];void 0===s||o===n?null==o&&t in HTMLElement.prototype?e.removeAttribute(t):e[t]=o:((e,t,o)=>{let n=xt.get(e);void 0===n&&xt.set(e,n=new Map);let i=n.get(t);void 0!==o?void 0===i?(n.set(t,i={handleEvent:o}),e.addEventListener(t,i)):i.handleEvent=o:void 0!==i&&(n.delete(t),e.removeEventListener(t,i))})(e,s,o)};function $t(e=window.React,t,o,n,i){let s,r,a;if(void 0===t){const t=e;({tagName:r,elementClass:a,events:n,displayName:i}=t),s=t.react}else s=e,a=o,r=t;const c=s.Component,l=s.createElement,h=new Set(Object.keys(null!=n?n:{}));class d extends c{constructor(){super(...arguments),this.o=null}t(e){if(null!==this.o)for(const t in this.i)kt(this.o,t,this.props[t],e?e[t]:void 0,n)}componentDidMount(){var e;this.t(),null===(e=this.o)||void 0===e||e.removeAttribute("defer-hydration")}componentDidUpdate(e){this.t(e)}render(){const{_$Gl:e,...t}=this.props;this.h!==e&&(this.u=t=>{null!==e&&((e,t)=>{"function"==typeof e?e(t):e.current=t})(e,t),this.o=t,this.h=e}),this.i={};const o={ref:this.u};for(const[e,n]of Object.entries(t))wt.has(e)?o["className"===e?"class":e]=n:h.has(e)||e in a.prototype?this.i[e]=n:o[e]=n;return o.suppressHydrationWarning=!0,l(r,o)}}d.displayName=null!=i?i:a.name;const u=s.forwardRef(((e,t)=>l(d,{...e,_$Gl:t},null==e?void 0:e.children)));return u.displayName=d.displayName,u}var _t=hi(294);const Ct=$t({react:_t,tagName:"gk-additions-deletions",elementClass:yt}),St=s`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,At=s`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Et=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};class Ot extends de{static{this.styles=[fe,St]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?U`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:U`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Et([re()],Ot.prototype,"src",void 0),Et([re()],Ot.prototype,"indicator",void 0);class Pt extends de{static{this.elementName="gk-avatar-group"}static{this.styles=[fe,At]}render(){return U`<slot class="avatar-group" part="base"></slot>`}}const Tt=$t({react:_t,tagName:"gk-avatar",elementClass:Ot}),Mt=$t({react:_t,tagName:"gk-avatar-group",elementClass:Pt}),Nt=s`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Rt extends de{constructor(){super(...arguments),this.variant="outline"}static{this.styles=Nt}static{this.elementName="gk-badge"}render(){return U`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);s>3&&r&&Object.defineProperty(t,o,r)}([re()],Rt.prototype,"variant",void 0);const Dt=$t({react:_t,tagName:"gk-badge",elementClass:Rt}),Bt=s`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var Lt=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};class Ut extends de{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Bt}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return U`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}Lt([re({type:Boolean,reflect:!0})],Ut.prototype,"disabled",void 0),Lt([re({reflect:!0})],Ut.prototype,"type",void 0),Lt([re()],Ut.prototype,"variant",void 0);const jt=$t({react:_t,tagName:"gk-button",elementClass:Ut,events:{onClick:"click"}}),zt=s`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var Ft=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};class Ht extends de{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[fe,ue,zt]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return U`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>U`<span class="complexity-indicator__box"></span>`))}</div>`}}Ft([re({type:Number})],Ht.prototype,"level",void 0),Ft([re()],Ht.prototype,"label",void 0);const It=$t({react:_t,tagName:"gk-complexity-indicator",elementClass:Ht}),Vt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,qt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Wt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Yt;const Kt=new Map;let Gt,Zt,Xt;new Map;const Qt=["th","st","nd","rd"];function Jt(e){const t=e%100;return`${e}${Qt[(t-20)%10]??Qt[t]??Qt[0]}`}var eo=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};class to extends de{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[fe]}static{this.elementName="gk-date-from"}static{this.components=[mt]}get relativeTime(){return function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,t,n,i]of Wt){const s=Math.abs(o);if(s>=t||1e3===t)return null==Yt&&(null!=Xt?Yt=Xt.resolvedOptions().locale:null!=Zt?Yt=Zt.resolvedOptions().locale:(Xt=new Intl.RelativeTimeFormat(Gt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Yt=Xt.resolvedOptions().locale)),"en"===Yt||Yt?.startsWith("en-")?`${Math.round(s/n)}${i}`:(null==Xt&&(Xt=new Intl.RelativeTimeFormat(Gt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Xt.format(Math.round(o/n),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return U`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,o,n=!0){const i=`${o??""}:${t=t??void 0}`;let s=Kt.get(i);if(null==s){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=qt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Vt))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let r;r=null==o?Gt:"system"===o?void 0:[o],s=new Intl.DateTimeFormat(r,e),n&&Kt.set(i,s)}if(null==t||qt.test(t))return s.format(e);function r(e){const t=`${o??""}:time:${e}`;let i=Kt.get(t);if(null==i){const s={localeMatcher:"best fit",timeStyle:e};let r;r=null==o?Gt:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(r,s),n&&Kt.set(t,i)}return i}const a=s.formatToParts(e);return t.replace(Vt,((t,o,n,i,s,c,l,h,d,u,p,f,b,g,m)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in m){const o=m[t];if(null==o)continue;const n=a.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return Jt(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=r("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??n)?.value??""}`}return n?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}eo([re({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],to.prototype,"date",void 0),eo([re()],to.prototype,"format",void 0);const oo=$t({react:_t,tagName:"gk-date-from",elementClass:to}),no=s`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,io=s`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,so=s`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;class ro extends de{static{this.styles=[fe,so]}static{this.elementName="gk-focus-item"}render(){return U`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}}class ao extends de{static{this.styles=[fe,io]}static{this.elementName="gk-focus-row"}render(){return U`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class co extends de{static{this.styles=[fe,io,so,no]}static{this.elementName="gk-focus-container"}render(){return U`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const lo=$t({react:_t,tagName:"gk-focus-item",elementClass:ro}),ho=$t({react:_t,tagName:"gk-focus-row",elementClass:ao}),uo=$t({react:_t,tagName:"gk-focus-container",elementClass:co});class po{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const fo=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends po{constructor(e){var t;if(super(e),1!==e.type||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var o,n;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(o=this.nt)||void 0===o?void 0:o.has(e))&&this.it.add(e);return this.render(t)}const i=e.element.classList;this.it.forEach((e=>{e in t||(i.remove(e),this.it.delete(e))}));for(const e in t){const o=!!t[e];o===this.it.has(e)||(null===(n=this.nt)||void 0===n?void 0:n.has(e))||(o?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return j}}),bo=e=>null!=e?e:z,go=s`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var mo=function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r};class vo extends de{static{this.formAssociated=!0}static{this.styles=[fe,ue,go]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="",this.internals=this.attachInternals()}firstUpdated(){this.internals.setFormValue(this.value)}render(){return U`<div class="field"><label class="${fo({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${fo({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${bo(this.autocomplete)}" autocorrect="${bo(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${bo(this.name)}" part="input" placeholder="${bo(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals.setFormValue(this.value)}}mo([re()],vo.prototype,"autocomplete",void 0),mo([re()],vo.prototype,"autocorrect",void 0),mo([re({type:Boolean,reflect:!0})],vo.prototype,"disabled",void 0),mo([re()],vo.prototype,"label",void 0),mo([re({attribute:"label-visibility"})],vo.prototype,"labelVisibility",void 0),mo([re()],vo.prototype,"name",void 0),mo([re()],vo.prototype,"placeholder",void 0),mo([re({type:Boolean,reflect:!0})],vo.prototype,"required",void 0),mo([re({reflect:!0})],vo.prototype,"type",void 0),mo([re()],vo.prototype,"value",void 0);const yo=s`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,wo=s`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,xo=s`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;class ko extends de{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[fe,yo]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),o=t.length;let n=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?n=(n-1+o)%o:"ArrowDown"===e.key?n=(n+1)%o:"Home"===e.key?n=0:"End"===e.key&&(n=o-1),this._setCurrentItem(t[n]),t[n].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return U`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);s>3&&r&&Object.defineProperty(t,o,r)}([function(e){const{slot:t,selector:o}=null!=e?e:{};return ae({descriptor:n=>({get(){var n;const i="slot"+(t?`[name=${t}]`:":not([name])"),s=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(i),r=null!=s?he(s,e):[];return o?r.filter((e=>e.matches(o))):r},enumerable:!0,configurable:!0})})}({flatten:!0})],ko.prototype,"slotChildren",void 0);class $o extends de{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[fe,wo]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return U`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);s>3&&r&&Object.defineProperty(t,o,r)}([re({type:Boolean,reflect:!0})],$o.prototype,"disabled",void 0);class _o extends de{static{this.styles=[fe,xo]}static{this.elementName="gk-menu-label"}render(){return U`<slot class="menu-label" part="base"></slot>`}}const Co=$t({react:_t,tagName:"gk-menu",elementClass:ko,events:{onClick:"select"}}),So=$t({react:_t,tagName:"gk-menu-item",elementClass:$o}),Ao=$t({react:_t,tagName:"gk-menu-label",elementClass:_o}),Eo=s`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Oo extends de{static{this.styles=[fe,Eo]}static{this.elementName="gk-tag"}render(){return U`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,n){var i,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,o,r):i(t,o))||r);s>3&&r&&Object.defineProperty(t,o,r)}([re()],Oo.prototype,"variant",void 0);const Po=$t({react:_t,tagName:"gk-tag",elementClass:Oo}),To=$t({react:_t,tagName:"gk-tooltip",elementClass:mt});function Mo(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&Mo(...e.components))}))}})();var ui=di.Ct,pi=di.fW;const fi=e=>null!=e?e:Qe;function bi(e,t,o){return e?t():null==o?void 0:o()}const{fromCharCode:gi}=String;new TextEncoder;function mi(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}ge`
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
`;const vi=ge`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,yi=ge`
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
`;ge`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${vi}
	}
	a:hover {
		text-decoration: underline;
	}
`;var wi=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,ki=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?xi(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&wi(t,o,s),s};let $i=class extends gt{constructor(){super(...arguments),this.full=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}render(){const e=Ze`<slot></slot>`;return null!=this.href?Ze`<a href=${this.href}>${e}</a>`:e}};$i.styles=[yi,ge`
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
				${vi}
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
		`],ki([xt({type:Boolean,reflect:!0})],$i.prototype,"full",2),ki([xt()],$i.prototype,"href",2),ki([xt({reflect:!0})],$i.prototype,"role",1),ki([xt()],$i.prototype,"appearance",2),ki([xt({type:Number,reflect:!0})],$i.prototype,"tabIndex",2),$i=ki([vt("gl-button")],$i);const _i=2;class Ci{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class Si extends Ci{constructor(e){if(super(e),this.et=Qe,e.type!==_i)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Qe||null==e)return this.ft=void 0,this.et=e;if(e===Xe)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Si.directiveName="unsafeHTML",Si.resultType=1;const Ai=(e=>(...t)=>({_$litDirective$:e,values:t}))(Si);function Ei(e,t,o,n=!1,i){const s={name:"",relativePath:"",children:new Map,descendants:[]};let r=e.reduce(((e,n)=>{let i=e,s="";for(const e of t(n)){s=o(s,e),void 0===i.children&&(i.children=new Map);let t=i.children.get(e);void 0===t&&(t={name:e,relativePath:s,parent:i,children:void 0,descendants:void 0},i.children.set(e,t)),void 0===i.descendants&&(i.descendants=[]),i.descendants.push(n),i=t}return i.value=n,e}),s);return n&&(r=Oi(r,o,!0,i)),r}function Oi(e,t,o=!0,n){if(void 0===e.children)return e;const i=[...e.children.values()];for(const e of i)Oi(e,t,!1,n);if(!o&&1===i.length){const o=i[0];(void 0===o.value||n?.(o.value))&&(e.name=t(e.name,o.name),e.relativePath=o.relativePath,e.children=o.children,e.descendants=o.descendants,e.value=o.value)}return e}var Pi=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,Mi=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Ti(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Pi(t,o,s),s};class Ni extends gt{constructor(){super(...arguments),this.isUncommitted=!1,this.emptyText="No Files"}renderFileList(e,t){let o,n;if(this.isUncommitted){o=[],n=`indentGuides-${this.preferences?.indentGuides}`;const i=t.filter((e=>e.staged));if(i.length){o.push(Ze`<list-item tree branch hide-icon>Staged Changes</list-item>`);for(const t of i)o.push(this.renderFile(e,t,2,!0))}const s=t.filter((e=>!e.staged));if(s.length){o.push(Ze`<list-item tree branch hide-icon>Unstaged Changes</list-item>`);for(const t of s)o.push(this.renderFile(e,t,2,!0))}}else o=t.map((t=>this.renderFile(e,t)));return Ze`<list-container class=${fi(n)}>${o}</list-container>`}renderFileTree(e,t){const o=this.preferences?.files?.compact??!0;let n;if(this.isUncommitted){n=[];const i=t.filter((e=>e.staged));i.length&&(n.push(Ze`<list-item tree branch hide-icon>Staged Changes</list-item>`),n.push(...this.renderFileSubtree(e,i,1,o)));const s=t.filter((e=>!e.staged));s.length&&(n.push(Ze`<list-item tree branch hide-icon>Unstaged Changes</list-item>`),n.push(...this.renderFileSubtree(e,s,1,o)))}else n=this.renderFileSubtree(e,t,0,o);return Ze`<list-container class="indentGuides-${this.preferences?.indentGuides}">${n}</list-container>`}renderFileSubtree(e,t,o,n){const i=Ei(t,(e=>e.path.split("/")),((...e)=>e.join("/")),n);return Ri(i).map((({level:t,item:n})=>{if(""!==n.name)return null==n.value?Ze`
					<list-item level="${o+t}" tree branch>
						<code-icon slot="icon" icon="folder" title="Directory" aria-label="Directory"></code-icon>
						${n.name}
					</list-item>
				`:this.renderFile(e,n.value,o+t,!0)}))}renderFile(e,t,o=1,n=!1){return Ze`
			<file-change-list-item
				?tree=${n}
				level="${o}"
				?stash=${"stash"===e}
				?uncommitted=${this.isUncommitted}
				?readonly=${this.isUncommitted&&"wip"!==e}
				path="${t.path}"
				repo="${t.repoPath}"
				?staged=${t.staged}
				status="${t.status}"
			></file-change-list-item>
		`}renderChangedFiles(e,t){const o=this.preferences?.files?.layout??"auto";let n="tree",i="list-tree",s="View as Tree",r=!1;if(null!=this.preferences&&null!=this.files)switch(r="auto"===o?this.files.length>(this.preferences.files?.threshold??5):"tree"===o,o){case"auto":n="list",i="gl-list-auto",s="View as List";break;case"list":n="tree",i="list-flat",s="View as Tree";break;case"tree":n="auto",i="list-tree",s="View as Auto"}return Ze`
			<webview-pane collapsable expanded>
				<span slot="title">Files changed </span>
				<span slot="subtitle" data-region="stats">${t}</span>
				<action-nav slot="actions">
					<action-item
						data-action="files-layout"
						data-files-layout="${n}"
						label="${s}"
						icon="${i}"
					></action-item>
				</action-nav>

				<div class="change-list" data-region="files">
					${bi(null==this.files,(()=>Ze`
							<div class="section section--skeleton">
								<skeleton-loader></skeleton-loader>
							</div>
							<div class="section section--skeleton">
								<skeleton-loader></skeleton-loader>
							</div>
							<div class="section section--skeleton">
								<skeleton-loader></skeleton-loader>
							</div>
						`),(()=>bi(this.files.length>0,(()=>r?this.renderFileTree(e,this.files):this.renderFileList(e,this.files)),(()=>Ze`<div class="section"><p>${this.emptyText}</p></div>`))))}
				</div>
			</webview-pane>
		`}createRenderRoot(){return this}}function Ri(e,t=0){const o=[];if(null==e)return o;if(o.push({level:t,item:e}),null!=e.children){const n=Array.from(e.children.values());n.sort(((e,t)=>e.value&&t.value?e.relativePath<t.relativePath?-1:e.relativePath>t.relativePath?1:0:(e.value?1:-1)-(t.value?1:-1))),n.forEach((e=>{o.push(...Ri(e,t+1))}))}return o}Mi([xt({type:Array})],Ni.prototype,"files",2),Mi([xt({type:Boolean})],Ni.prototype,"isUncommitted",2),Mi([xt({type:Object})],Ni.prototype,"preferences",2),Mi([xt({attribute:"empty-text"})],Ni.prototype,"emptyText",2);var Di=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Li=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Bi(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Di(t,o,s),s};let Ui=class extends Ni{constructor(){super(...arguments),this.explainBusy=!1}get isStash(){return null!=this.state?.commit?.stashNumber}get shortSha(){return this.state?.commit?.shortSha??""}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}updated(e){e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="commit-explanation"]')?.scrollIntoView())}renderEmptyContent(){return Ze`
			<div class="section section--empty" id="empty">
				<p>Rich details for commits and stashes are shown as you navigate:</p>

				<ul class="bulleted">
					<li>lines in the text editor</li>
					<li>
						commits in the <a href="command:gitlens.showGraph">Commit Graph</a>,
						<a href="command:gitlens.showTimelineView">Visual File History</a>, or
						<a href="command:gitlens.showCommitsView">Commits view</a>
					</li>
					<li>stashes in the <a href="command:gitlens.showStashesView">Stashes view</a></li>
				</ul>

				<p>Alternatively, show your work-in-progress, or search for or choose a commit</p>

				<p class="button-container">
					<button class="button button--full" type="button" data-action="wip">Show Working Changes</button>
				</p>
				<p class="button-container">
					<span class="button-group">
						<button class="button button--full" type="button" data-action="pick-commit">
							Choose Commit...
						</button>
						<button
							class="button"
							type="button"
							data-action="search-commit"
							aria-label="Search for Commit"
							title="Search for Commit"
						>
							<code-icon icon="search"></code-icon>
						</button>
					</span>
				</p>
			</div>
		`}renderCommitMessage(){if(null==this.state?.commit)return;const e=this.state.commit.message,t=e.indexOf("\0\n\0");return Ze`
			<div class="section section--message">
				<div class="message-block">
					${bi(-1===t,(()=>Ze`<p class="message-block__text scrollable" data-region="message">
								<strong>${Ai(e)}</strong>
							</p>`),(()=>Ze`<p class="message-block__text scrollable" data-region="message">
								<strong>${Ai(e.substring(0,t))}</strong><br /><span
									>${Ai(e.substring(t+3))}</span
								>
							</p>`))}
				</div>
			</div>
		`}renderAutoLinks(){if(this.isUncommitted)return;const e=new Map;if(null!=this.state?.commit?.autolinks)for(const t of this.state.commit.autolinks)e.set(t.id,{type:"autolink",value:t});if(null!=this.state?.autolinkedIssues)for(const t of this.state.autolinkedIssues)e.set(t.id,{type:"issue",value:t});null!=this.state?.pullRequest&&e.set(this.state.pullRequest.id,{type:"pr",value:this.state.pullRequest});const t=[],o=[],n=[];for(const i of e.values())switch(i.type){case"autolink":t.push(i.value);break;case"issue":o.push(i.value);break;case"pr":n.push(i.value)}return Ze`
			<webview-pane
				collapsable
				?expanded=${this.state?.preferences?.autolinksExpanded??!0}
				?loading=${!this.state?.includeRichContent}
				data-region="rich-pane"
			>
				<span slot="title">Autolinks</span>
				<span slot="subtitle" data-region="autolink-count"
					>${this.state?.includeRichContent||e.size?`${e.size} found `:""}${this.state?.includeRichContent?"":"…"}</span
				>
				${bi(null==this.state,(()=>Ze`
						<div class="section" data-region="autolinks">
							<section class="auto-link" aria-label="Custom Autolinks" data-region="custom-autolinks">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="pull-request" aria-label="Pull request" data-region="pull-request">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
							<section class="issue" aria-label="Issue" data-region="issue">
								<skeleton-loader lines="2"></skeleton-loader>
							</section>
						</div>
					`),(()=>0===e.size?Ze`
								<div class="section" data-region="rich-info">
									<p>
										<code-icon icon="info"></code-icon>&nbsp;Use
										<a href="#" data-action="autolink-settings" title="Configure autolinks"
											>autolinks</a
										>
										to linkify external references, like Jira issues or Zendesk tickets, in commit
										messages.
									</p>
								</div>
							`:Ze`
							<div class="section" data-region="autolinks">
								${t.length?Ze`
											<section
												class="auto-link"
												aria-label="Custom Autolinks"
												data-region="custom-autolinks"
											>
												${t.map((e=>{let t=e.description??e.title;return void 0===t&&(t=`Custom Autolink ${e.prefix}${e.id}`),Ze`
														<issue-pull-request
															type="autolink"
															name="${t}"
															url="${e.url}"
															key="${e.prefix}${e.id}"
															status=""
														></issue-pull-request>
													`}))}
											</section>
									  `:void 0}
								${n.length?Ze`
											<section
												class="pull-request"
												aria-label="Pull request"
												data-region="pull-request"
											>
												${n.map((e=>Ze`
														<issue-pull-request
																type="pr"
																name="${e.title}"
																url="${e.url}"
																key="#${e.id}"
																status="${e.state}"
																date=${e.date}
																dateFormat="${this.state.preferences.dateFormat}"
															></issue-pull-request>
														</section>
									  				`))}
											</section>
									  `:void 0}
								${o.length?Ze`
											<section class="issue" aria-label="Issue" data-region="issue">
												${o.map((e=>Ze`
														<issue-pull-request
															type="issue"
															name="${e.title}"
															url="${e.url}"
															key="${e.id}"
															status="${e.state}"
															date="${e.closed?e.closedDate:e.date}"
															dateFormat="${this.state.preferences.dateFormat}"
														></issue-pull-request>
													`))}
											</section>
									  `:void 0}
							</div>
						`))}
			</webview-pane>
		`}renderExplainAi(){return Ze`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<span slot="subtitle"><code-icon icon="beaker" size="12"></code-icon></span>
				<action-nav slot="actions">
					<action-item data-action="switch-ai" label="Switch AI Model" icon="hubot"></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this commit.</p>
					<p class="button-container">
						<span class="button-group">
							<button
								class="button button--full button--busy"
								type="button"
								data-action="explain-commit"
								aria-busy="${this.explainBusy?"true":Qe}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
							>
								<code-icon icon="loading" modifier="spin"></code-icon>Explain this Commit
							</button>
						</span>
					</p>
					${bi(this.explain,(()=>Ze`
							<div
								class="ai-content${this.explain?.error?" has-error":""}"
								data-region="commit-explanation"
							>
								${bi(this.explain?.error,(()=>Ze`<p class="ai-content__summary scrollable">
											${this.explain.error.message??"Error retrieving content"}
										</p>`))}
								${bi(this.explain?.summary,(()=>Ze`<p class="ai-content__summary scrollable">${this.explain.summary}</p>`))}
							</div>
						`))}
				</div>
			</webview-pane>
		`}render(){if(null==this.state?.commit)return this.renderEmptyContent();const e=this.state.commit,t=this.state.pinned?"Unpin this Commit\nRestores Automatic Following":"Pin this Commit\nSuspends Automatic Following";return Ze`
			<div class="top-details">
				<div class="top-details__top-menu">
					<div class="top-details__actionbar${this.state.pinned?" is-pinned":""}">
						<div class="top-details__actionbar-group">
							<a
								class="commit-action${this.state.pinned?" is-active":""}"
								href="#"
								data-action="pin"
								aria-label="${t}"
								title="${t}"
								><code-icon
									icon="${this.state.pinned?"gl-pinned-filled":"pin"}"
									data-region="commit-pin"
								></code-icon
							></a>
							<a
								class="commit-action${this.navigation.back?"":" is-disabled"}"
								aria-disabled="${this.navigation.back?Qe:"true"}"
								href="#"
								data-action="back"
								aria-label="Back"
								title="Back"
								><code-icon icon="arrow-left" data-region="commit-back"></code-icon
							></a>
							${bi(this.navigation.forward,(()=>Ze`
									<a
										class="commit-action"
										href="#"
										data-action="forward"
										aria-label="Forward"
										title="Forward"
										><code-icon icon="arrow-right" data-region="commit-forward"></code-icon
									></a>
								`))}
							${bi(this.state.navigationStack?.hint,(()=>Ze`
									<a
										class="commit-action commit-action--emphasis-low"
										href="#"
										title="View this Commit"
										data-action="${this.state?.pinned?"forward":"back"}"
										><code-icon icon="git-commit"></code-icon
										><span data-region="commit-hint">${this.state.navigationStack?.hint}</span></a
									>
								`))}
						</div>
						<div class="top-details__actionbar-group">
							${bi(!this.isUncommitted,(()=>Ze`
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="sha"
										aria-label="Copy SHA
[⌥] Pick Commit..."
										title="Copy SHA
[⌥] Pick Commit..."
									>
										<code-icon icon="git-commit"></code-icon>
										<span class="top-details__sha" data-region="shortsha">${this.shortSha}</span></a
									>
								`),(()=>Ze`
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="scm"
										aria-label="Open SCM view"
										title="Open SCM view"
										><code-icon icon="source-control"></code-icon
									></a>
								`))}
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="graph"
								aria-label="Open in Commit Graph"
								title="Open in Commit Graph"
								><code-icon icon="gl-graph"></code-icon
							></a>
							${bi(!this.isUncommitted,(()=>Ze`
									<a
										class="commit-action"
										href="#"
										data-action="commit-actions"
										data-action-type="more"
										aria-label="Show Commit Actions"
										title="Show Commit Actions"
										><code-icon icon="kebab-vertical"></code-icon
									></a>
								`))}
						</div>
					</div>
					${bi(null!=e&&!this.isStash,(()=>Ze`
							<ul class="top-details__authors" aria-label="Authors">
								<li class="top-details__author" data-region="author">
									<commit-identity
										name="${e.author.name}"
										email="${e.author.email}"
										date=${e.author.date}
										dateFormat="${this.preferences?.dateFormat}"
										avatarUrl="${e.author.avatar??""}"
										showAvatar="${this.preferences?.avatars??!0}"
										actionLabel="${e.sha===Yi?"modified":"committed"}"
									></commit-identity>
								</li>
							</ul>
						`))}
				</div>
			</div>
			${this.renderCommitMessage()} ${this.renderAutoLinks()}
			${this.renderChangedFiles(this.isStash?"stash":"commit",this.renderCommitStats(e?.stats))}
			${this.renderExplainAi()}
		`}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key)return e.preventDefault(),void e.stopPropagation();this.explainBusy=!0}renderCommitStats(e){if(null==e?.changedFiles)return;if("number"==typeof e.changedFiles)return Ze`<commit-stats added="?" modified="${e.changedFiles}" removed="?"></commit-stats>`;const{added:t,deleted:o,changed:n}=e.changedFiles;return Ze`<commit-stats added="${t}" modified="${n}" removed="${o}"></commit-stats>`}};Li([xt({type:Object})],Ui.prototype,"state",2),Li([kt()],Ui.prototype,"isStash",1),Li([kt()],Ui.prototype,"shortSha",1),Li([kt()],Ui.prototype,"explainBusy",2),Li([xt({type:Object})],Ui.prototype,"explain",2),Ui=Li([vt("gl-commit-details")],Ui);var ji=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,Fi=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?zi(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&ji(t,o,s),s};let Hi=class extends Ni{render(){return Ze`
			<div class="top-details">
				<div class="top-details__top-menu">
					<div class="top-details__actionbar">
						<div class="top-details__actionbar-group">
							${bi(null==this.wip?.changes||null==this.files,(()=>"Loading..."),(()=>Ze`<span
										>${mi("change",this.files.length)} on
										<span
											class="top-details__actionbar--highlight"
											title="${this.wip.repositoryCount>1?`${this.wip.changes.repository.name}:${this.wip.changes.branchName}`:this.wip.changes.branchName}"
											>${this.wip.repositoryCount>1?`${this.wip.changes.repository.name}:${this.wip.changes.branchName}`:this.wip.changes.branchName}</span
										></span
									>`))}
						</div>
						<div class="top-details__actionbar-group">
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="scm"
								aria-label="Open SCM view"
								title="Open SCM view"
								><code-icon icon="source-control"></code-icon
							></a>
							<a
								class="commit-action"
								href="#"
								data-action="commit-actions"
								data-action-type="graph"
								aria-label="Open in Commit Graph"
								title="Open in Commit Graph"
								><code-icon icon="gl-graph"></code-icon
							></a>
						</div>
					</div>
				</div>
			</div>
			${this.renderChangedFiles("wip")}
		`}};Fi([xt({type:Object})],Hi.prototype,"wip",2),Hi=Fi([vt("gl-wip-details")],Hi);var Ii=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,qi=(e,t,o,n)=>{for(var i,s=n>1?void 0:n?Vi(t,o):t,r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n?i(t,o,s):i(s))||s);return n&&s&&Ii(t,o,s),s};let Wi=class extends gt{constructor(){super(),pi(ui)}get isUncommitted(){return this.state?.commit?.sha===Yi}get isStash(){return null!=this.state?.commit?.stashNumber}get navigation(){if(null==this.state?.navigationStack)return{back:!1,forward:!1};const e={back:!0,forward:!0};return this.state.navigationStack.count<=1?(e.back=!1,e.forward=!1):0===this.state.navigationStack.position?(e.back=!0,e.forward=!1):this.state.navigationStack.position===this.state.navigationStack.count-1&&(e.back=!1,e.forward=!0),e}render(){const e=this.state?.wip;return Ze`
			<div class="commit-detail-panel scrollable">
				<main id="main" tabindex="-1">
					<nav class="details-tab">
						<button
							class="details-tab__item ${"commit"===this.state?.mode?" is-active":""}"
							data-action="details"
						>
							${this.isStash?"Stash":"Commit"}
						</button>
						<button
							class="details-tab__item ${"wip"===this.state?.mode?" is-active":""}"
							data-action="wip"
							title="${fi("wip"===this.state?.mode&&e?.changes?.files.length?`${mi("change",e.changes.files.length)} on ${e.repositoryCount>1?`${e.changes.repository.name}:${e.changes.branchName}`:e.changes.branchName}`:void 0)}"
						>
							Working
							Changes${fi("wip"===this.state?.mode&&e?.changes?.files.length?Ze` &nbsp;<gk-badge variant="filled">${e.changes.files.length}</gk-badge>`:void 0)}
						</button>
					</nav>
					${bi("commit"===this.state?.mode,(()=>Ze`<gl-commit-details
								.state=${this.state}
								.files=${this.state?.commit?.files}
								.explain=${this.explain}
								.preferences=${this.state?.preferences}
								.isUncommitted=${this.isUncommitted}
							></gl-commit-details>`),(()=>Ze`<gl-wip-details
								.wip=${e}
								.files=${e?.changes?.files}
								.preferences=${this.state?.preferences}
								.isUncommitted=${!0}
								.emptyText=${"No working changes"}
							></gl-wip-details>`))}
				</main>
			</div>
		`}createRenderRoot(){return this}};qi([xt({type:Object})],Wi.prototype,"state",2),qi([xt({type:Object})],Wi.prototype,"explain",2),qi([kt()],Wi.prototype,"isUncommitted",1),qi([kt()],Wi.prototype,"isStash",1),Wi=qi([vt("gl-commit-details-app")],Wi);const Yi="0000000000000000000000000000000000000000";class Ki extends he{constructor(){super("CommitDetailsApp")}onInitialize(){this.attachState()}onBind(){return[M.on("file-change-list-item","file-open-on-remote",(e=>this.onOpenFileOnRemote(e.detail))),M.on("file-change-list-item","file-open",(e=>this.onOpenFile(e.detail))),M.on("file-change-list-item","file-compare-working",(e=>this.onCompareFileWithWorking(e.detail))),M.on("file-change-list-item","file-compare-previous",(e=>this.onCompareFileWithPrevious(e.detail))),M.on("file-change-list-item","file-more-actions",(e=>this.onFileMoreActions(e.detail))),M.on("file-change-list-item","file-stage",(e=>this.onStageFile(e.detail))),M.on("file-change-list-item","file-unstage",(e=>this.onUnstageFile(e.detail))),M.on('[data-action="commit-actions"]',"click",(e=>this.onCommitActions(e))),M.on('[data-action="pick-commit"]',"click",(e=>this.onPickCommit(e))),M.on('[data-action="wip"]',"click",(e=>this.onSwitchMode(e,"wip"))),M.on('[data-action="details"]',"click",(e=>this.onSwitchMode(e,"commit"))),M.on('[data-action="search-commit"]',"click",(e=>this.onSearchCommit(e))),M.on('[data-action="autolink-settings"]',"click",(e=>this.onAutolinkSettings(e))),M.on('[data-action="files-layout"]',"click",(e=>this.onToggleFilesLayout(e))),M.on('[data-action="pin"]',"click",(e=>this.onTogglePin(e))),M.on('[data-action="back"]',"click",(e=>this.onNavigate("back",e))),M.on('[data-action="forward"]',"click",(e=>this.onNavigate("forward",e))),M.on('[data-region="rich-pane"]',"expanded-change",(e=>this.onExpandedChange(e.detail))),M.on('[data-action="explain-commit"]',"click",(e=>this.onExplainCommit(e))),M.on('[data-action="switch-ai"]',"click",(e=>this.onSwitchAiModel(e)))]}onMessageReceived(e){const t=e.data;switch(this.log(`onMessageReceived(${t.id}): name=${t.method}`),t.method){case C.method:s(C,t,(e=>{e.state,this.state=e.state,this.setState(this.state),this.attachState()}));break;case S.method:s(S,t,(e=>{this.state={...this.state,...e},this.setState(this.state),this.attachState()}));break;default:super.onMessageReceived?.(e)}}onCommandClickedCore(e){const t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this.sendCommand(c,{command:t})}onSwitchAiModel(e){this.onCommandClickedCore("gitlens.switchAIModel")}async onExplainCommit(e){try{const e=await this.sendCommandWithCompletion(x,void 0,A);e.error?this.component.explain={error:{message:e.error.message??"Error retrieving content"}}:e.summary?this.component.explain={summary:e.summary}:this.component.explain=void 0}catch(e){this.component.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(e){const t=e.target?.dataset.filesLayout??void 0;if(t===this.state.preferences?.files?.layout)return;const o={...this.state.preferences?.files,layout:t??"auto"};this.state={...this.state,preferences:{...this.state.preferences,files:o}},this.attachState(),this.sendCommand(_,{files:o})}onExpandedChange(e){this.state={...this.state,preferences:{...this.state.preferences,autolinksExpanded:e.expanded}},this.attachState(),this.sendCommand(_,{autolinksExpanded:e.expanded})}onNavigate(e,t){t.preventDefault(),this.sendCommand($,{direction:e})}onTogglePin(e){e.preventDefault(),this.sendCommand(k,{pin:!this.state.pinned})}onAutolinkSettings(e){e.preventDefault(),this.sendCommand(w,void 0)}onPickCommit(e){this.sendCommand(m,void 0)}onSearchCommit(e){this.sendCommand(v,void 0)}onSwitchMode(e,t){this.state={...this.state,mode:t},this.attachState(),this.sendCommand(y,{mode:t,repoPath:this.state.commit?.repoPath})}onOpenFileOnRemote(e){this.sendCommand(u,e)}onOpenFile(e){this.sendCommand(d,e)}onCompareFileWithWorking(e){this.sendCommand(p,e)}onCompareFileWithPrevious(e){this.sendCommand(f,e)}onFileMoreActions(e){this.sendCommand(h,e)}onStageFile(e){this.sendCommand(b,e)}onUnstageFile(e){this.sendCommand(g,e)}onCommitActions(e){if(e.preventDefault(),void 0===this.state.commit)return void e.stopPropagation();const t=e.target?.getAttribute("data-action-type");null!=t&&this.sendCommand(l,{action:t,alt:e.altKey})}get component(){return null==this._component&&(this._component=document.getElementById("app")),this._component}attachState(){this.component.state=this.state}}new Ki;var Gi=t.b,Zi=t.F;export{Gi as CommitDetailsApp,Zi as uncommittedSha};