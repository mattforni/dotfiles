let e,t,o,i,r;var s,a,l,c,h,d,p,u,b,g,f,m={602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},2379:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function o(e,t){for(var o,i="",r=0,s=-1,a=0,l=0;l<=e.length;++l){if(l<e.length)o=e.charCodeAt(l);else if(47===o)break;else o=47;if(47===o){if(s===l-1||1===a);else if(s!==l-1&&2===a){if(i.length<2||2!==r||46!==i.charCodeAt(i.length-1)||46!==i.charCodeAt(i.length-2)){if(i.length>2){var c=i.lastIndexOf("/");if(c!==i.length-1){-1===c?(i="",r=0):r=(i=i.slice(0,c)).length-1-i.lastIndexOf("/"),s=l,a=0;continue}}else if(2===i.length||1===i.length){i="",r=0,s=l,a=0;continue}}t&&(i.length>0?i+="/..":i="..",r=2)}else i.length>0?i+="/"+e.slice(s+1,l):i=e.slice(s+1,l),r=l-s-1;s=l,a=0}else 46===o&&-1!==a?++a:a=-1}return i}var i={resolve:function(){for(var e,i,r="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?i=arguments[a]:(void 0===e&&(e=process.cwd()),i=e),t(i),0!==i.length&&(r=i+"/"+r,s=47===i.charCodeAt(0));if(r=o(r,!s),s)if(r.length>0)return"/"+r;else return"/";return r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var i=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return(0!==(e=o(e,!i)).length||i||(e="."),e.length>0&&r&&(e+="/"),i)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,o=0;o<arguments.length;++o){var r=arguments[o];t(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":i.normalize(e)},relative:function(e,o){if(t(e),t(o),e===o||(e=i.resolve(e))===(o=i.resolve(o)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var s=e.length,a=s-r,l=1;l<o.length&&47===o.charCodeAt(l);++l);for(var c=o.length-l,h=a<c?a:c,d=-1,p=0;p<=h;++p){if(p===h){if(c>h){if(47===o.charCodeAt(l+p))return o.slice(l+p+1);else if(0===p)return o.slice(l+p)}else a>h&&(47===e.charCodeAt(r+p)?d=p:0===p&&(d=0));break}var u=e.charCodeAt(r+p);if(u!==o.charCodeAt(l+p))break;47===u&&(d=p)}var b="";for(p=r+d+1;p<=s;++p)(p===s||47===e.charCodeAt(p))&&(0===b.length?b+="..":b+="/..");return b.length>0?b+o.slice(l+d):(l+=d,47===o.charCodeAt(l)&&++l,o.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var o=e.charCodeAt(0),i=47===o,r=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(o=e.charCodeAt(a))){if(!s){r=a;break}}else s=!1;return -1===r?i?"/":".":i&&1===r?"//":e.slice(0,r)},basename:function(e,o){if(void 0!==o&&"string"!=typeof o)throw TypeError('"ext" argument must be a string');t(e);var i,r=0,s=-1,a=!0;if(void 0!==o&&o.length>0&&o.length<=e.length){if(o.length===e.length&&o===e)return"";var l=o.length-1,c=-1;for(i=e.length-1;i>=0;--i){var h=e.charCodeAt(i);if(47===h){if(!a){r=i+1;break}}else -1===c&&(a=!1,c=i+1),l>=0&&(h===o.charCodeAt(l)?-1==--l&&(s=i):(l=-1,s=c))}return r===s?s=c:-1===s&&(s=e.length),e.slice(r,s)}for(i=e.length-1;i>=0;--i)if(47===e.charCodeAt(i)){if(!a){r=i+1;break}}else -1===s&&(a=!1,s=i+1);return -1===s?"":e.slice(r,s)},extname:function(e){t(e);for(var o=-1,i=0,r=-1,s=!0,a=0,l=e.length-1;l>=0;--l){var c=e.charCodeAt(l);if(47===c){if(!s){i=l+1;break}continue}-1===r&&(s=!1,r=l+1),46===c?-1===o?o=l:1!==a&&(a=1):-1!==o&&(a=-1)}return -1===o||-1===r||0===a||1===a&&o===r-1&&o===i+1?"":e.slice(o,r)},format:function(e){var t,o;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,o=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+o:t+"/"+o:o},parse:function(e){t(e);var o,i={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return i;var r=e.charCodeAt(0),s=47===r;s?(i.root="/",o=1):o=0;for(var a=-1,l=0,c=-1,h=!0,d=e.length-1,p=0;d>=o;--d){if(47===(r=e.charCodeAt(d))){if(!h){l=d+1;break}continue}-1===c&&(h=!1,c=d+1),46===r?-1===a?a=d:1!==p&&(p=1):-1!==a&&(p=-1)}return -1===a||-1===c||0===p||1===p&&a===c-1&&a===l+1?-1!==c&&(0===l&&s?i.base=i.name=e.slice(1,c):i.base=i.name=e.slice(l,c)):(0===l&&s?(i.name=e.slice(1,a),i.base=e.slice(1,c)):(i.name=e.slice(l,a),i.base=e.slice(l,c)),i.ext=e.slice(a,c)),l>0?i.dir=e.slice(0,l-1):s&&(i.dir="/"),i},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i},6047:(e,t,o)=>{let i=o(602),r=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,s=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,a=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/yu,l=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,c=/\p{M}+/gu,h={limit:1/0,ellipsis:""},d=(e,t={},o={})=>{let p=t.limit??1/0,u=t.ellipsis??"",b=t?.ellipsisWidth??(u?d(u,h,o).width:0),g=o.ansiWidth??0,f=o.controlWidth??0,m=o.ambiguousWidth??1,v=o.emojiWidth??2,w=o.fullWidthWidth??2,x=o.regularWidth??1,_=o.wideWidth??2,$=0,C=0,P=e.length,S=0,A=!1,E=P,T=Math.max(0,p-b),O=0,D=0,B=0,F=0;e:for(;;){if(D>O||C>=P&&C>$){for(let t of(S=0,(e.slice(O,D)||e.slice($,C)).replaceAll(c,""))){let e=t.codePointAt(0)||0;if(B+(F=(0,i.isFullWidth)(e)?w:(0,i.isWide)(e)?_:m!==x&&(0,i.isAmbiguous)(e)?m:x)>T&&(E=Math.min(E,Math.max(O,$)+S)),B+F>p){A=!0;break e}S+=t.length,B+=F}O=D=0}if(C>=P)break;if(l.lastIndex=C,l.test(e)){if(B+(F=(S=l.lastIndex-C)*x)>T&&(E=Math.min(E,C+Math.floor((T-B)/x))),B+F>p){A=!0;break}B+=F,O=$,D=C,C=$=l.lastIndex;continue}if(r.lastIndex=C,r.test(e)){if(B+g>T&&(E=Math.min(E,C)),B+g>p){A=!0;break}B+=g,O=$,D=C,C=$=r.lastIndex;continue}if(s.lastIndex=C,s.test(e)){if(B+(F=(S=s.lastIndex-C)*f)>T&&(E=Math.min(E,C+Math.floor((T-B)/f))),B+F>p){A=!0;break}B+=F,O=$,D=C,C=$=s.lastIndex;continue}if(a.lastIndex=C,a.test(e)){if(B+v>T&&(E=Math.min(E,C)),B+v>p){A=!0;break}B+=v,O=$,D=C,C=$=a.lastIndex;continue}C+=1}return{width:A?T:B,index:A?E:P,truncated:A,ellipsed:A&&p>=b}};t.A=d}},v={};function w(e){var t=v[e];if(void 0!==t)return t.exports;var o=v[e]={exports:{}};return m[e](o,o.exports,w),o.exports}w.m=m,w.d=(e,t)=>{for(var o in t)w.o(t,o)&&!w.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce((t,o)=>(w.f[o](e,t),t),[])),w.u=e=>"lib-billboard.js",w.miniCssF=e=>{},w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),w.p="#{root}/dist/webviews/",Object.defineProperty(w,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}}),s={122:0},a=e=>{var t,o,{__webpack_esm_ids__:i,__webpack_esm_modules__:r,__webpack_esm_runtime__:a}=e,l=0;for(t in r)w.o(r,t)&&(w.m[t]=r[t]);for(a&&a(w);l<i.length;l++)o=i[l],w.o(s,o)&&s[o]&&s[o][0](),s[i[l]]=0},w.f.j=(e,t)=>{var o=w.o(s,e)?s[e]:void 0;if(0!==o)if(o)t.push(o[1]);else{var i=import(w.p+w.u(e)).then(a,t=>{throw 0!==s[e]&&(s[e]=void 0),t}),i=Promise.race([i,new Promise(t=>o=s[e]=[t])]);t.push(o[1]=i)}};let x=globalThis,_=x.ShadowRoot&&(void 0===x.ShadyCSS||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$=Symbol(),C=new WeakMap;let n=class n{constructor(e,t,o){if(this._$cssResult$=!0,o!==$)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(_&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=C.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&C.set(t,e))}return e}toString(){return this.cssText}};let P=e=>new n("string"==typeof e?e:e+"",void 0,$),S=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]),e,$),A=_?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return P(t)})(e):e,{is:E,defineProperty:T,getOwnPropertyDescriptor:O,getOwnPropertyNames:D,getOwnPropertySymbols:B,getPrototypeOf:F}=Object,j=globalThis,U=j.trustedTypes,q=U?U.emptyScript:"",V=j.reactiveElementPolyfillSupport,W={toAttribute(e,t){switch(t){case Boolean:e=e?q:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},G=(e,t)=>!E(e,t),K={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:G};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=K){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&T(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){let{get:i,set:r}=O(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){let s=i?.call(this);r?.call(this,t),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??K}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=F(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...D(e),...B(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(A(o));else void 0!==e&&t.push(A(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(_)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),i=x.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){let r=(void 0!==o.converter?.toAttribute?o.converter:W).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=o.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:W;this._$Em=i;let s=r.fromAttribute(t,e.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){let i=this.constructor,r=this[e];if(!(((o??=i.getPropertyOptions(e)).hasChanged??G)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:r},s){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==r||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e){let{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,V?.({ReactiveElement:y}),(j.reactiveElementVersions??=[]).push("2.1.1");let Z=globalThis,Y=Z.trustedTypes,X=Y?Y.createPolicy("lit-html",{createHTML:e=>e}):void 0,Q="$lit$",J=`lit$${Math.random().toFixed(9).slice(2)}$`,ee="?"+J,et=`<${ee}>`,eo=document,ei=()=>eo.createComment(""),er=e=>null===e||"object"!=typeof e&&"function"!=typeof e,es=Array.isArray,en=e=>es(e)||"function"==typeof e?.[Symbol.iterator],ea=`[ 	
\f\r]`,el=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ec=/-->/g,eh=/>/g,ed=RegExp(`>|${ea}(?:([^\\s"'>=/]+)(${ea}*=${ea}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ep=/'/g,eu=/"/g,eb=/^(?:script|style|textarea|title)$/i,eg=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),ef=eg(1),em=(eg(2),eg(3),Symbol.for("lit-noChange")),ev=Symbol.for("lit-nothing"),ey=new WeakMap,ew=eo.createTreeWalker(eo,129);function ex(e,t){if(!es(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==X?X.createHTML(t):t}let ek=(e,t)=>{let o=e.length-1,i=[],r,s=2===t?"<svg>":3===t?"<math>":"",a=el;for(let t=0;t<o;t++){let o=e[t],l,c,h=-1,d=0;for(;d<o.length&&(a.lastIndex=d,null!==(c=a.exec(o)));)d=a.lastIndex,a===el?"!--"===c[1]?a=ec:void 0!==c[1]?a=eh:void 0!==c[2]?(eb.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=ed):void 0!==c[3]&&(a=ed):a===ed?">"===c[0]?(a=r??el,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?ed:'"'===c[3]?eu:ep):a===eu||a===ep?a=ed:a===ec||a===eh?a=el:(a=ed,r=void 0);let p=a===ed&&e[t+1].startsWith("/>")?" ":"";s+=a===el?o+et:h>=0?(i.push(l),o.slice(0,h)+Q+o.slice(h)+J+p):o+J+(-2===h?t:p)}return[ex(e,s+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};let N=class N{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[c,h]=ek(e,t);if(this.el=N.createElement(c,o),ew.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ew.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Q)){let t=h[s++],o=i.getAttribute(e).split(J),a=/([.?@])?(.*)/.exec(t);l.push({type:1,index:r,name:a[2],strings:o,ctor:"."===a[1]?H:"?"===a[1]?I:"@"===a[1]?L:k}),i.removeAttribute(e)}else e.startsWith(J)&&(l.push({type:6,index:r}),i.removeAttribute(e));if(eb.test(i.tagName)){let e=i.textContent.split(J),t=e.length-1;if(t>0){i.textContent=Y?Y.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],ei()),ew.nextNode(),l.push({type:2,index:++r});i.append(e[t],ei())}}}else if(8===i.nodeType)if(i.data===ee)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(J,e+1));)l.push({type:7,index:r}),e+=J.length-1}r++}}static createElement(e,t){let o=eo.createElement("template");return o.innerHTML=e,o}};function e_(e,t,o=e,i){if(t===em)return t;let r=void 0!==i?o._$Co?.[i]:o._$Cl,s=er(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(e))._$AT(e,o,i),void 0!==i?(o._$Co??=[])[i]=r:o._$Cl=r),void 0!==r&&(t=e_(e,r._$AS(e,t.values),r,i)),t}let M=class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??eo).importNode(t,!0);ew.currentNode=i;let r=ew.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new R(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new z(r,this,e)),this._$AV.push(t),l=o[++a]}s!==l?.index&&(r=ew.nextNode(),s++)}return ew.currentNode=eo,i}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};let R=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=ev,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){er(e=e_(this,e,t))?e===ev||null==e||""===e?(this._$AH!==ev&&this._$AR(),this._$AH=ev):e!==this._$AH&&e!==em&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):en(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ev&&er(this._$AH)?this._$AA.nextSibling.data=e:this.T(eo.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=N.createElement(ex(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new M(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=ey.get(e.strings);return void 0===t&&ey.set(e.strings,t=new N(e)),t}k(e){es(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,i=0;for(let r of e)i===t.length?t.push(o=new R(this.O(ei()),this.O(ei()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,r){this.type=1,this._$AH=ev,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ev}_$AI(e,t=this,o,i){let r=this.strings,s=!1;if(void 0===r)(s=!er(e=e_(this,e,t,0))||e!==this._$AH&&e!==em)&&(this._$AH=e);else{let i,a,l=e;for(e=r[0],i=0;i<r.length-1;i++)(a=e_(this,l[o+i],t,i))===em&&(a=this._$AH[i]),s||=!er(a)||a!==this._$AH[i],a===ev?e=ev:e!==ev&&(e+=(a??"")+r[i+1]),this._$AH[i]=a}s&&!i&&this.j(e)}j(e){e===ev?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let H=class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ev?void 0:e}};let I=class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ev)}};let L=class L extends k{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){if((e=e_(this,e,t,0)??ev)===em)return;let o=this._$AH,i=e===ev&&o!==ev||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==ev&&(o===ev||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){e_(this,e)}};let e$=Z.litHtmlPolyfillSupport;e$?.(N,R),(Z.litHtmlVersions??=[]).push("3.3.1");let eC=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{let i=o?.renderBefore??t,r=i._$litPart$;if(void 0===r){let e=o?.renderBefore??null;i._$litPart$=r=new R(t.insertBefore(ei(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return em}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eC.litElementHydrateSupport?.({LitElement:lit_element_i});let eP=eC.litElementPolyfillSupport;eP?.({LitElement:lit_element_i}),(eC.litElementVersions??=[]).push("4.2.1");let eS=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eA={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:G};function ez(e){return(t,o)=>"object"==typeof o?((e=eA,t,o)=>{let{kind:i,metadata:r}=o,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),s.set(o.name,e),"accessor"===i){let{name:i}=o;return{set(o){let r=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){let{name:i}=o;return function(o){let r=this[i];t.call(this,o),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)})(e,t,o):((e,t,o)=>{let i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function eE(e){return ez({...e,state:!0,attribute:!1})}let eT=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function eO(e,t){return(o,i,r)=>{let s=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof i?o:r??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return eT(o,i,{get(){let o=e.call(this);return void 0===o&&(null!==(o=s(this))||this.hasUpdated)&&t.call(this,o),o}})}return eT(o,i,{get(){return s(this)}})}}let eD="0000000000000000000000000000000000000000:",eR=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,eI=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,eM=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,eL=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,eB=/(^[0-9a-f]{40}([\^@~:]\S*)?$)|(^[0]{40}(:|-)$)/,eN=/^(.*?)([\^@~:].*)?$/,eF=/^[0]{40}(?:[\^@~:]\S*)?:?$/,ej=/^[0]{40}([\^@~]\S*)?:$/;function eU(e,t){return!!t&&e.test(t)}function eH(e,t=!1){return"0000000000000000000000000000000000000000"===e||e===eD||!t&&eU(eF,e)}let eq=7;function eV(e,t){if("0000000000000000000000000000000000000000-"===e)return"(deleted)";if(!e)return t?.strings?.working??"";if(eH(e))return!function(e,t=!1){return e===eD||!t&&eU(ej,e)}(e)?t?.strings?.uncommitted??"Working Tree":t?.strings?.uncommittedStaged??"Index";if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return eI.test(e);case"qualified-double-dot":return eM.test(e);case"qualified-triple-dot":return eL.test(e);default:return eR.test(e)}}(e)||!eU(eB,e))return e;let o=Math.max(5,eq),i=eN.exec(e);if(null!=i){let[,e,t]=i;if(null!=t)return`${e.substring(0,o)}${t}`}return e.substring(0,o)}var eW=((l=eW||{})[l.VerificationRequired=-1]="VerificationRequired",l[l.Community=0]="Community",l[l.DeprecatedPreview=1]="DeprecatedPreview",l[l.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",l[l.Trial=3]="Trial",l[l.TrialExpired=4]="TrialExpired",l[l.TrialReactivationEligible=5]="TrialReactivationEligible",l[l.Paid=6]="Paid",l);let eG=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,eK=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,eZ=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],eY=new Map,eX=new Map;function eQ(e,t){let o=new Date(e.getTime());for(let[e,i]of Object.entries(t))if(i)switch(e){case"years":o.setFullYear(o.getFullYear()+i);break;case"months":o.setMonth(o.getMonth()+i);break;case"days":o.setDate(o.getDate()+i);break;case"hours":o.setHours(o.getHours()+i);break;case"minutes":o.setMinutes(o.getMinutes()+i);break;case"seconds":o.setSeconds(o.getSeconds()+i)}return o}function eJ(t,o,i,r=!0){o=o??void 0;let s=`${i??""}:${o}`,a=eY.get(s);if(null==a){let t=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=eK.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(eG))if(null!=t){for(let[e,i]of Object.entries(t))if(null!=i)switch(e){case"year":o.year=4===i.length?"numeric":"2-digit";break;case"month":switch(i.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":"DD"===i?o.day="2-digit":o.day="numeric";break;case"weekday":switch(i.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===i.length?"2-digit":"numeric",o.hour12="hh"===i||"h"===i;break;case"minute":o.minute=2===i.length?"2-digit":"numeric";break;case"second":o.second=2===i.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===i.length?"long":"short"}}return o}(o);a=new Intl.DateTimeFormat(null==i?e:"system"===i?void 0:[i],t),r&&eY.set(s,a)}if(null==o||eK.test(o))return a.format(t);let l=a.formatToParts(t);return o.replace(eG,(o,s,a,c,h,d,p,u,b,g,f,m,v,w,x)=>{if(null!=s)return s.substring(1,s.length-1);for(let[o,s]of Object.entries(x)){if(null==s)continue;let a=l.find(e=>e.type===o);if("Do"===s&&a?.type==="day"){var _=Number(a.value);let e=_%100;return`${_}${e0[(e-20)%10]??e0[e]??e0[0]}`}if("a"===s&&a?.type==="dayPeriod"){let o=(function(t){let o=`${i??""}:time:${t}`,s=eY.get(o);if(null==s){let a;a=null==i?e:"system"===i?void 0:[i],s=new Intl.DateTimeFormat(a,{localeMatcher:"best fit",timeStyle:t}),r&&eY.set(o,s)}return s})("short").formatToParts(t).find(e=>"dayPeriod"===e.type);return` ${(o??a)?.value??""}`}return a?.value??""}return""})}let e0=["th","st","nd","rd"];function e1(t,o){null==t&&(t="decimal");let i=`${o??""}:${t}`,r=eX.get(i);if(null==r){let s={localeMatcher:"best fit",style:t};r=new Intl.NumberFormat(null==o?e:"system"===o?void 0:[o],s),eX.set(i,r)}return r.format}let e2=["pro","advanced","teams","enterprise"];function e5(e){var t;return t=e.plan.actual.id,e2.includes(t)}function e8(e,t,o){let i,r,s,a,l,c,h,d,p,u,b=0;null!=o&&({edges:c,maxWait:h,signal:d,aggregator:p}=o);let g="leading"===(c??="trailing")||"both"===c,f="trailing"===c||"both"===c;function m(){if(null!=i){b=Date.now();let t=i,o=u;return u=void 0,i=void 0,s=e.apply(o,t)}}function v(){null!=a&&(clearTimeout(a),a=void 0)}function w(){null!=l&&(clearTimeout(l),l=void 0)}function x(){v(),w(),u=void 0,i=void 0,r=void 0,b=0}function _(...e){if(d?.aborted)return;let o=Date.now();null!=p&&null!=i?i=p(i,e):(u=this,i=e);let c=null==a&&null==l;r=o,v();let w=Date.now();if(r=w,a=setTimeout(()=>{a=void 0,function(e){let o=e-(r??0),i=e-b;return null==r||o>=t||o<0||null!=h&&i>=h}(Date.now())&&f&&m(),x()},t),null!=h&&!l){let e=h-(w-b);e>0?l=setTimeout(()=>{l=void 0,f&&null!=i&&m(),b=Date.now()},e):(f&&null!=i&&m(),x())}return g&&c?m():s}return _.cancel=x,_.flush=function(){return v(),w(),m()},_.pending=function(){return null!=a||null!=l},d?.addEventListener("abort",x,{once:!0}),_}var e4=w(2379);let e3=navigator?.userAgentData?.platform,e6=navigator.userAgent;"Linux"===e3||e6.includes("Linux"),"macOS"===e3||e6.includes("Macintosh"),"Windows"===e3||e6.includes("Windows");let IpcCall=class IpcCall{constructor(e,t,o=!1,i=!1){this.scope=e,this.reset=o,this.pack=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,o,i){super(e,t,o,i),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}};let IpcNotification=class IpcNotification extends IpcCall{};let e9=new IpcCommand("core","webview/ready"),e7=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let te=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let tt=new IpcCommand("core","telemetry/sendEvent"),to=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let ti=new IpcCommand("core","webview/focus/didChange"),tr=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let ts="timeline",tn=new IpcRequest(ts,"ref/choose"),ta=new IpcRequest(ts,"path/choose"),tl=new IpcCommand(ts,"point/open"),tc=new IpcCommand(ts,"config/update"),th=new IpcCommand(ts,"scope/update"),td=new IpcNotification(ts,"didChange");let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,o,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=o,this.subscribe=i??!1}};let context_consumer_s=class context_consumer_s{constructor(e,t,o,i){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=o,this.subscribe=i??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:o}]of this.subscriptions)t.has(e)||(t.add(e),o.dispatchEvent(new context_request_event_s(this.context,o,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function tp({context:e}){return(t,o)=>{let i=new WeakMap;if("object"==typeof o)return{get(){return t.get.call(this)},set(e){return i.get(this).setValue(e),t.set.call(this,e)},init(t){return i.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let r;t.constructor.addInitializer(t=>{i.set(t,new context_provider_i(t,{context:e}))});let s=Object.getOwnPropertyDescriptor(t,o);if(void 0===s){let e=new WeakMap;r={get(){return e.get(this)},set(t){i.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=s.set;r={...s,set(t){i.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,o,r)}}}function tu({context:e,subscribe:t}){return(o,i)=>{"object"==typeof i?i.addInitializer(function(){new context_consumer_s(this,{context:e,callback:e=>{o.set.call(this,e)},subscribe:t})}):o.constructor.addInitializer(o=>{new context_consumer_s(o,{context:e,callback:e=>{o[i]=e},subscribe:t})})}}let{fromCharCode:tb}=String;new TextEncoder;let tg=new TextDecoder,tf=new WeakMap;function tm(e,t){return function(o,i,r){let s=tf.get(o.constructor);null==s&&tf.set(o.constructor,s=[]),s.push({method:r.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,o){let i=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(i),i}update(e){let t=tf.get(this.constructor);if(null!=t)for(let{keys:o,method:i,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;let t=o.filter(t=>e.has(t));t.length&&i.call(this,t)}super.update(e)}};var tv=w(6047);function ty(e){let t=.001*performance.now(),o=Math.floor(t),i=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],(i-=e[1])<0&&(o--,i+=1e9)),[o,i]}var tw=((c=tw||{})[c.Hash=35]="Hash",c[c.Slash=47]="Slash",c[c.Digit0=48]="Digit0",c[c.Digit1=49]="Digit1",c[c.Digit2=50]="Digit2",c[c.Digit3=51]="Digit3",c[c.Digit4=52]="Digit4",c[c.Digit5=53]="Digit5",c[c.Digit6=54]="Digit6",c[c.Digit7=55]="Digit7",c[c.Digit8=56]="Digit8",c[c.Digit9=57]="Digit9",c[c.Backslash=92]="Backslash",c[c.A=65]="A",c[c.B=66]="B",c[c.C=67]="C",c[c.D=68]="D",c[c.E=69]="E",c[c.F=70]="F",c[c.Z=90]="Z",c[c.a=97]="a",c[c.b=98]="b",c[c.c=99]="c",c[c.d=100]="d",c[c.e=101]="e",c[c.f=102]="f",c[c.z=122]="z",c),tx=((h=tx||{}).AngleBracketLeftHeavy="❰",h.AngleBracketRightHeavy="❱",h.ArrowBack="↩",h.ArrowDown="↓",h.ArrowDownUp="⇵",h.ArrowDropRight="⤷",h.ArrowHeadRight="➤",h.ArrowLeft="←",h.ArrowLeftDouble="⇐",h.ArrowLeftRight="↔",h.ArrowLeftRightDouble="⇔",h.ArrowLeftRightDoubleStrike="⇎",h.ArrowLeftRightLong="⟷",h.ArrowRight="→",h.ArrowRightDouble="⇒",h.ArrowRightHollow="⇨",h.ArrowUp="↑",h.ArrowUpDown="⇅",h.ArrowUpRight="↗",h.ArrowsHalfLeftRight="⇋",h.ArrowsHalfRightLeft="⇌",h.ArrowsLeftRight="⇆",h.ArrowsRightLeft="⇄",h.Asterisk="∗",h.Bullseye="◎",h.Check="✔",h.Dash="—",h.Dot="•",h.Ellipsis="…",h.EnDash="–",h.Envelope="✉",h.EqualsTriple="≡",h.Flag="⚑",h.FlagHollow="⚐",h.MiddleEllipsis="⋯",h.MuchLessThan="≪",h.MuchGreaterThan="≫",h.Pencil="✎",h.Space=" ",h.SpaceThin=" ",h.SpaceThinnest=" ",h.SquareWithBottomShadow="❏",h.SquareWithTopShadow="❐",h.Warning="⚠",h.ZeroWidthSpace="​",h);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var tk=((d=tk||{}).File="file",d.Git="git",d.GitHub="github",d.GitLens="gitlens",d.GitLensAIMarkdown="gitlens-ai-markdown",d.PRs="pr",d.Remote="vscode-remote",d.Vsls="vsls",d.VslsScc="vsls-scc",d.Virtual="vscode-vfs",d);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let t_="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",t$=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${t_}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${t_}`,graph:`https://gitkraken.com/solutions/commit-graph?${t_}`,launchpad:`https://gitkraken.com/solutions/launchpad?${t_}`,platform:`https://gitkraken.com/devex?${t_}`,pricing:`https://gitkraken.com/gitlens/pricing?${t_}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${t_}`,security:`https://help.gitkraken.com/gitlens/security?${t_}`,workspaces:`https://gitkraken.com/solutions/workspaces?${t_}`,cli:`https://gitkraken.com/cli?${t_}`,browserExtension:`https://gitkraken.com/browser-extension?${t_}`,desktop:`https://gitkraken.com/git-client?${t_}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${t_}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${t_}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t_}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${t_}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${t_}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t_}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${t_}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${t_}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t_}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t_}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t_}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${t_}`});function tC(e){let[t,o]=ty(e);return 1e3*t+Math.floor(o/1e6)}let tP={ellipsisWidth:0,limit:0x40000000-1},tS={ansiWidth:0,controlWidth:0,ambiguousWidth:1,emojiWidth:2,fullWidthWidth:2,regularWidth:1,wideWidth:2};function tA(e,t,i){let r;if(null==i)return o??=e1(),`${o(t)} ${e}${1===t?"":"s"}`;let s=1===t?e:i.plural??`${e}s`;return i.only?s:(0===t?r=i.zero??t:!1===i.format?r=t:null!=i.format?r=i.format(t):(o??=e1(),r=o(t)),`${r}${i.infix??" "}${s}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var tz=((p=tz||{})[p.Off=0]="Off",p[p.Error=1]="Error",p[p.Warn=2]="Warn",p[p.Info=3]="Info",p[p.Debug=4]="Debug",p);let tE=["accessToken","password","token"],tT=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){if(null!=e.sanitizeKeys)for(let t of tE)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(tE);this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=tO(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=tO(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let o;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...o){let i;if(!(this.level<1)||this.isDebugging){if(null==(i=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(i=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,o)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let o;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let o;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,(e,o)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(o=t(e,o)),this.provider?.sanitizer!=null&&(o=this.provider.sanitizer(e,o)),o))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let o=t.map(e=>this.toLoggable(e)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function tO(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let tD=new WeakMap,tR={enabled:e=>tT.enabled(e)||tT.isDebugging,log:(e,t,o,...i)=>{switch(e){case"error":tT.error(void 0,t,o,...i);break;case"warn":tT.warn(t,o,...i);break;case"info":tT.log(t,o,...i);break;default:tT.debug(t,o,...i)}}},tI=0x40000000-1;function tM(){let e=0;return{get current(){return e},next:function(){return e===tI&&(e=0),++e},reset:function(){e=0}}}let tL=tM(),tB=new Map;function tN(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function tF(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let o=t?tL.current:void 0,i=tL.next();return{scopeId:i,prevScopeId:o,prefix:`${tN(i,o)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=tF(e,void 0),tT.configure({name:e,createChannel:function(e){return{name:e,appendLine:tT.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?tT.log(this.scope,e,...t):tT.log(e,t.shift(),...t)}};let tj="home";new IpcRequest(tj,"launchpad/summary"),new IpcRequest(tj,"overview/active"),new IpcRequest(tj,"overview/inactive"),new IpcRequest(tj,"overviewFilter"),new IpcCommand(tj,"overview/repository/change"),new IpcNotification(tj,"overview/repository/didChange"),new IpcCommand(tj,"previewEnabled/toggle"),new IpcCommand(tj,"section/collapse"),new IpcCommand(tj,"walkthrough/dismiss"),new IpcNotification(tj,"ai/allAccess/didChange"),new IpcCommand(tj,"ai/allAccess/dismiss"),new IpcCommand(tj,"overview/filter/set"),new IpcCommand(tj,"openInGraph"),new IpcNotification(tj,"repositories/didCompleteDiscovering"),new IpcNotification(tj,"previewEnabled/didChange"),new IpcNotification(tj,"repository/wip/didChange"),new IpcNotification(tj,"repositories/didChange"),new IpcNotification(tj,"walkthroughProgress/didChange"),new IpcNotification(tj,"integrations/didChange"),new IpcNotification(tj,"launchpad/didChange");let tU=new IpcNotification(tj,"subscription/didChange");new IpcNotification(tj,"org/settings/didChange"),new IpcNotification(tj,"home/ownerFilter/didChange"),new IpcNotification(tj,"account/didFocus");let tH="graph";new IpcCommand(tH,"chooseRepository"),new IpcCommand(tH,"dblclick"),new IpcCommand(tH,"dblclick"),new IpcCommand(tH,"avatars/get"),new IpcCommand(tH,"refs/metadata/get"),new IpcCommand(tH,"rows/get"),new IpcCommand(tH,"pullRequest/openDetails"),new IpcCommand(tH,"search/openInView"),new IpcCommand(tH,"columns/update"),new IpcCommand(tH,"refs/update/visibility"),new IpcCommand(tH,"filters/update/excludeTypes"),new IpcCommand(tH,"configuration/update"),new IpcCommand(tH,"search/update/mode"),new IpcCommand(tH,"filters/update/includedRefs"),new IpcCommand(tH,"selection/update"),new IpcRequest(tH,"chooseRef"),new IpcRequest(tH,"rows/ensure"),new IpcRequest(tH,"counts"),new IpcRequest(tH,"row/hover/get"),new IpcRequest(tH,"search"),new IpcNotification(tH,"repositories/integration/didChange"),new IpcNotification(tH,"didChange",!0,!0),new IpcNotification(tH,"configuration/didChange");let tq=new IpcNotification(tH,"subscription/didChange");new IpcNotification(tH,"org/settings/didChange"),new IpcNotification(tH,"avatars/didChange"),new IpcNotification(tH,"branchState/didChange"),new IpcNotification(tH,"refs/didChangeMetadata"),new IpcNotification(tH,"columns/didChange"),new IpcNotification(tH,"scrollMarkers/didChange"),new IpcNotification(tH,"refs/didChangeVisibility"),new IpcNotification(tH,"rows/didChange",void 0,!0),new IpcNotification(tH,"rows/stats/didChange"),new IpcNotification(tH,"selection/didChange"),new IpcNotification(tH,"workingTree/didChange"),new IpcNotification(tH,"didSearch"),new IpcNotification(tH,"didFetch"),new IpcNotification(tH,"featurePreview/didStart");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(tU.is(e)||tq.is(e)||td.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let o=`${e}|${t}`,i=this._promos.get(o);return null==i&&(i=this.ipc.sendRequest(te,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(o,i)),await i}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(tt,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};let tV=/\(([\s\S]*)\)/,tW=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,tG=/\s?=.*$/;function tK(e,t=!1){let o,i,r,s,a,l=0,c=!1,h=!1,d=!0;null!=e&&({args:o,if:i,enter:r,exit:s,prefix:a,logThreshold:l=0,scoped:c=!0,singleLine:h=!1,timed:d=!0}=e),l>0&&(h=!0,d=!0),d&&(c=!0);let p=tT.isDebugging,u=t?tT.debug:tT.log,b=p?"debug":"info";return(e,t,g)=>{let f,m;if("function"==typeof g.value?(f=g.value,m="value"):"function"==typeof g.get&&(f=g.get,m="get"),null==f||null==m)throw Error("Not supported");let v=!1!==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),o=(t=(t=t.replace(tW,"")||t).slice(0,t.indexOf("{"))).indexOf("("),i=t.indexOf(")");o=o>=0?o+1:0,i=i>0?i:t.indexOf("="),t=t.slice(o,i),t=`(${t})`;let r=tV.exec(t);return null!=r?r[1].split(",").map(e=>e.trim().replace(tG,"")):[]}(f):[];g[m]=function(...e){var g,m;let w,x;if(!p&&!tT.enabled(b)||null!=i&&!i.apply(this,e))return f.apply(this,e);let _=tL.current,$=tL.next(),C=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let o=t?.name??"",i=o.indexOf("_");-1!==i&&(o=o.substring(i+1));let r=tD.get(t);return r?.(e,o)??o}(this):void 0,P=C?c?`${tN($,_)} ${C}.${t}`:`${C}.${t}`:t;null!=a&&(P=a({id:$,instance:this,instanceName:C??"",name:t,prefix:P},...e)),c&&(g={scopeId:$,prevScopeId:_,prefix:P},g={prevScopeId:tL.current,...g},tB.set($,g),w=g);let S=null!=r?r(...e):"";if(!1===o||0===e.length)x="",h||u.call(tT,`${P}${S}`);else{let t,i,r,s;x="";let a=-1;for(s of e){if(i=v[++a],null!=(t=o?.[a])){if("boolean"==typeof t)continue;if(x.length>0&&(x+=", "),"string"==typeof t){x+=t;continue}r=String(t(s))}else x.length>0&&(x+=", "),r=tT.toLoggable(s);x+=i?`${i}=${r}`:r}h||u.call(tT,x?`${P}${S}(${x})`:`${P}${S}`)}if(h||d||null!=s){let t,o=d?ty():void 0,i=e=>{let t=void 0!==o?` [${tC(o)}ms]`:"";h?tT.error(e,x?`${P}${S}(${x})`:`${P}${S}`,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`):tT.error(e,P,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`),c&&tB.delete($)};try{t=f.apply(this,e)}catch(e){throw i(e),e}let r=e=>{let t,i,r,a;if(null!=o?(t=tC(o))>500?(i=tT.warn,r=` [*${t}ms] (slow)`):(i=u,r=` [${t}ms]`):(r="",i=u),null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${tT.toLoggable(e)}`);else w?.exitFailed?(a=w.exitFailed,i=(e,...t)=>tT.error(null,e,...t)):a="completed";h?(0===l||t>l)&&i.call(tT,x?`${P}${S}(${x}) ${a}${w?.exitDetails||""}${r}`:`${P}${S} ${a}${w?.exitDetails||""}${r}`):i.call(tT,x?`${P}(${x}) ${a}${w?.exitDetails||""}${r}`:`${P} ${a}${w?.exitDetails||""}${r}`),c&&tB.delete($)};return null!=t&&null!=(m=t)&&(m instanceof Promise||"function"==typeof m?.then)?t.then(r,i):r(t),t}return f.apply(this,e)}}}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...o){let i;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:tF(e??"",!1),i="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??tR,this._time=ty(),null!=i){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=ty(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=ty(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[o,i]=ty(this._time),r=1e3*o+Math.floor(i/1e6),s=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${r}ms]${e?.suffix??""}`)}};function tZ(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function tY(e,t){return new Promise(o=>{e.addEventListener(t,function i(r){r.target===e&&(e.removeEventListener(t,i),o())})})}(g||(g={})).on=function(e,t,o,i){let r=!1;if("string"==typeof e){let s=function(t){let i=t?.target?.closest(e);null!=i&&o(t,i)};return document.addEventListener(t,s,i??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,s,i??!0))}}}let s=function(e){o(e,this)};return e.addEventListener(t,s,i??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,s,i??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);let i=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=Emitter._noop,this._disposed||i()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let tX={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let o=new events_Node(e);if(this._first===events_Node.Undefined)this._first=o,this._last=o;else if(t){let e=this._last;this._last=o,o.prev=e,e.next=o}else{let e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(o))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?tX:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var tQ=Object.defineProperty,tJ=Object.getOwnPropertyDescriptor,t0=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?tJ(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&tQ(t,o,s),s};let t1=tM();function t2(){return`webview:${t1.next()}`}let t5=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=i??=acquireVsCodeApi(),this._disposable=g.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){let t=tB.get(tL.current),o=e.data;if(o.packed&&o.params instanceof Uint8Array){let i=function(e,t,...o){return(t?.provider??tR).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(tF(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),i?.stop()}if(this.replaceIpcPromisesWithPromises(o.params),null!=o.completionId){var i,r;let e=(i=o.method,r=o.completionId,`${i}|${r}`);this._pendingHandlers.get(e)?.(o);return}this._onReceiveMessage.fire(o)}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(let t in e){let o=e[t];null!=o&&"object"==typeof o&&"__ipc"in o&&"promise"===o.__ipc&&"id"in o&&"string"==typeof o.id&&"method"in o&&"string"==typeof o.method?e[t]=this.getResponsePromise(o.method,o.id):this.replaceIpcPromisesWithPromises(o)}}sendCommand(e,t){let o=t2();this.postMessage({id:o,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){let o=t2(),i=this.getResponsePromise(e.response.method,o);return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,completionId:o}),i}getResponsePromise(e,t){return new Promise((o,i)=>{var r,s;let a,l=(r=e,s=t,`${r}|${s}`);function c(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(l)}a=setTimeout(()=>{c.call(this),i(Error(`Timed out waiting for completion of ${l}`))},(tT.isDebugging?60:5)*6e4),this._pendingHandlers.set(l,e=>{if(c.call(this),e.method===to.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>i(Error(t.reason))):queueMicrotask(()=>o(t.value))}else queueMicrotask(()=>o(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function t8(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}t0([tK({args:{0:e=>`${e.data.id}, method=${e.data.method}`}},!0)],t5.prototype,"onMessageReceived",1),t0([tK({args:{0:e=>e.method,1:!1}},!0)],t5.prototype,"sendCommand",1),t0([tK({args:{0:e=>e.method,1:!1,2:!1}},!0)],t5.prototype,"sendRequest",1),t0([tK({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],t5.prototype,"postMessage",1),t5=t0([(u=e=>`${e.appName}(HostIpc)`,e=>void tD.set(e,u))],t5);let RGBA=class RGBA{constructor(e,t,o,i=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=t8(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,o,i){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=t8(Math.max(Math.min(1,t),0),3),this.l=t8(Math.max(Math.min(1,o),0),3),this.a=t8(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,i=e.b/255,r=e.a,s=Math.max(t,o,i),a=Math.min(t,o,i),l=0,c=0,h=(a+s)/2,d=s-a;if(d>0){switch(c=Math.min(h<=.5?d/(2*h):d/(2-2*h),1),s){case t:l=(o-i)/d+6*(o<i);break;case o:l=(i-t)/d+2;break;case i:l=(t-o)/d+4}l*=60,l=Math.round(l)}return new HSLA(l,c,h,r)}static _hue2rgb(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){let t,o,i,r=e.h/360,{s,l:a,a:l}=e;if(0===s)t=o=i=a;else{let e=a<.5?a*(1+s):a+s-a*s,l=2*a-e;t=HSLA._hue2rgb(l,e,r+1/3),o=HSLA._hue2rgb(l,e,r),i=HSLA._hue2rgb(l,e,r-1/3)}return new RGBA(Math.round(255*t),Math.round(255*o),Math.round(255*i),l)}};let HSVA=class HSVA{constructor(e,t,o,i){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=t8(Math.max(Math.min(1,t),0),3),this.v=t8(Math.max(Math.min(1,o),0),3),this.a=t8(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,i=e.b/255,r=Math.max(t,o,i),s=r-Math.min(t,o,i);return new HSVA(Math.round(60*(0===s?0:r===t?((o-i)/s%6+6)%6:r===o?(i-t)/s+2:(t-o)/s+4)),0===r?0:s/r,r,e.a)}static toRGBA(e){let{h:t,s:o,v:i,a:r}=e,s=i*o,a=s*(1-Math.abs(t/60%2-1)),l=i-s,[c,h,d]=[0,0,0];return t<60?(c=s,h=a):t<120?(c=a,h=s):t<180?(h=s,d=a):t<240?(h=a,d=s):t<300?(c=a,d=s):t<=360&&(c=s,d=a),new RGBA(c=Math.round((c+l)*255),h=Math.round((h+l)*255),d=Math.round((d+l)*255),r)}};function t4(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(t4(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){let e=Color._relativeLuminanceForComponent(this.rgba.r),t=Color._relativeLuminanceForComponent(this.rgba.g);return t8(.2126*e+.7152*t+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:o,b:i,a:r}=this.rgba;return new Color(new RGBA(t,o,i,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,o=this.rgba.a,i=t.a,r=o+i*(1-o);if(r<1e-6)return Color.transparent;let s=this.rgba.r*o/r+t.r*i*(1-o)/r;return new Color(new RGBA(s,this.rgba.g*o/r+t.g*i*(1-o)/r,this.rgba.b*o/r+t.b*i*(1-o)/r,r))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:o,b:i,a:r}=this.rgba;return new Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-o),e.rgba.b-r*(e.rgba.b-i),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let o=1-e.rgba.a;return new Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${t3(e.rgba.r)}${t3(e.rgba.g)}${t3(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;let i=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(r-i)/r,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;let i=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(i-r)/i,e.darken(o)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function t3(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let t6=new Emitter,t9=t6.event;function t7(e){let t=document.documentElement,o=window.getComputedStyle(t),i=document.body.classList,r=i.contains("vscode-light")||i.contains("vscode-high-contrast-light"),s=i.contains("vscode-high-contrast")||i.contains("vscode-high-contrast-light"),a=t4("--vscode-editor-background",o),l=t4("--vscode-editor-foreground",o);return l||(l=t4("--vscode-foreground",o)),{colors:{background:a,foreground:l},computedStyle:o,isLightTheme:r,isHighContrastTheme:s,isInitializing:null==e}}var oe=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,oo=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?ot(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&oe(t,o,s),s};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){var e;super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new t5(this.name),this._ipc.sendCommand(e9,void 0);let t=JSON.parse((e=this.bootstrap,tg.decode(function(e){let t=globalThis.atob(e),o=t.length,i=new Uint8Array(o),r=0,s=o-o%8;for(;r<s;r+=8)i[r]=t.charCodeAt(r),i[r+1]=t.charCodeAt(r+1),i[r+2]=t.charCodeAt(r+2),i[r+3]=t.charCodeAt(r+3),i[r+4]=t.charCodeAt(r+4),i[r+5]=t.charCodeAt(r+5),i[r+6]=t.charCodeAt(r+6),i[r+7]=t.charCodeAt(r+7);for(;r<o;r++)i[r]=t.charCodeAt(r);return i}(e))));this.bootstrap=void 0,this._ipc.replaceIpcPromisesWithPromises(t),this.onPersistState?.(t);let o=t7();null!=this.onThemeUpdated&&(this.onThemeUpdated(o),this.disposables.push(function(){let e=new MutationObserver(e=>{t6.fire(t7(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),this.disposables.push(t9(this.onThemeUpdated,this))),this.disposables.push(this._stateProvider=this.createStateProvider(t,this._ipc),this._ipc.onReceiveMessage(e=>{switch(!0){case ti.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case tr.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=e8(e=>{this._ipc.sendCommand(e7,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return ef`<slot></slot>`}};oo([ez({type:String})],GlAppHost.prototype,"name",2),oo([ez({type:String})],GlAppHost.prototype,"placement",2),oo([tp({context:"ipc"})],GlAppHost.prototype,"_ipc",2),oo([tp({context:"logger"})],GlAppHost.prototype,"_logger",2),oo([tp({context:"promos"})],GlAppHost.prototype,"_promos",2),oo([tp({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),oo([ez({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let oi=S`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}

	a:focus-visible {
		outline: 1px solid var(--color-focus-border);
		border-radius: 0.2rem;
	}

	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`,or=S`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;let TimelineStateProvider=class TimelineStateProvider{constructor(e,t,o){this._ipc=o,this._state=t,this.provider=new context_provider_i(e,{context:"state",initialValue:t}),this.disposable=this._ipc.onReceiveMessage(t=>{!0===td.is(t)&&(this._state={...t.params.state,timestamp:Date.now()},this.provider.setValue(this._state,!0),e.requestUpdate())})}get state(){return this._state}dispose(){this.disposable.dispose()}};let os=S`
	* {
		box-sizing: border-box;
	}

	:not(:defined) {
		visibility: hidden;
	}

	[hidden] {
		display: none !important;
	}

	/* roll into shared focus style */
	:focus-visible {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	b {
		font-weight: 600;
	}

	p {
		margin-top: 0;
	}

	ul {
		margin-top: 0;
		padding-left: 1.2em;
	}

	section,
	header {
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	h2 {
		font-weight: 400;
	}

	h3 {
		border: none;
		color: var(--color-view-header-foreground);
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 0;
		white-space: nowrap;
	}

	h4 {
		font-size: 1.5rem;
		font-weight: 400;
		margin: 0.5rem 0 1rem 0;
	}
`,on=S`
	:host {
		display: block;
		color: var(--color-view-foreground);
		font-family: var(--font-family);
		font-size: var(--font-size);
		margin: 0;
		padding: 0;
		height: 100vh;
		overflow: hidden;
	}

	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.header {
		flex: none;
		display: grid;
		grid-template-columns: 1fr min-content;
		align-items: center;
		grid-template-areas: 'details toolbox';
		margin: 0.5rem 1rem;
	}

	:host-context(body[data-placement='editor']) .header {
		margin-top: 1rem;
		margin-right: 1.5rem;
	}

	.details {
		grid-area: details;
		display: flex;
		gap: 1rem;
		align-items: center;
		font-size: var(--font-size);
		min-width: 0;
		margin-right: 1rem;
	}

	.details gl-breadcrumbs {
		flex: 1;
		min-width: 0;
		padding: 0.1rem 0;
		overflow: hidden;
	}

	.details .details__ref,
	.details .details__timeframe {
		min-width: 0;
		margin: 0;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.details .details__ref {
		flex: 0 100000000 auto;
		color: var(--color-foreground--75);
		font-size: 1.2rem;
		margin-left: auto;
	}

	.details .details__ref .ref {
		margin-left: 0.25rem;
	}

	.details .details__timeframe {
		flex: 0 0 auto;
		color: var(--color-foreground--75);
		margin-right: 0.6rem;
		user-select: none;
		white-space: nowrap;
		font-size: 1.2rem;
		margin-left: auto;
	}

	.toolbox {
		grid-area: toolbox;
		align-items: center;
		display: flex;
		gap: 0.3rem;
	}

	.toolbox gl-feature-badge {
		padding-bottom: 0.4rem;
	}

	:host-context(body[data-placement='editor']) .toolbox gl-feature-badge {
		padding-left: 0.4rem;
	}

	.select-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 100% 0 1;
		position: relative;
	}

	.select-container label {
		margin: 0 1rem 0 0;
		font-size: var(--font-size);
		user-select: none;
	}

	.select-container::after {
		font-family: codicon;
		content: '\\eab4';
		font-size: 1.4rem;
		pointer-events: none;
		top: 50%;
		right: 8px;
		transform: translateY(-50%);
		position: absolute;
		color: var(--vscode-foreground);
	}

	.select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		border: 1px solid var(--vscode-dropdown-border);
		cursor: pointer;
		font-family: inherit;
		min-height: 100%;
		padding: 2px 26px 2px 8px;
		background-color: var(--vscode-dropdown-background);
		border-radius: 0.3rem;
		box-sizing: border-box;
		color: var(--vscode-foreground);
		font-family: var(--font-family);
		height: 26px;
		user-select: none;
	}

	.timeline {
		flex: 1;
		min-height: 0;
	}

	.timeline__empty {
		padding: 0.4rem 2rem 1.3rem 2rem;
		font-size: var(--font-size);
	}

	.timeline__empty p {
		margin-top: 0;
	}

	:host-context(body[data-placement='view']) gl-feature-gate {
		background-color: var(--vscode-sideBar-background);
	}

	gl-feature-gate gl-feature-badge {
		vertical-align: super;
		margin-left: 0.4rem;
		margin-right: 0.4rem;
	}

	label {
		min-width: fit-content;
	}

	label[disabled] {
		opacity: 0.5;
	}

	.config__content {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		max-width: 30rem;
		min-width: 20rem;

		margin-bottom: 0.4rem;
	}

	.config__content menu-label {
		padding: 0;
		margin-bottom: -0.4rem;
	}

	.config__content section {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.breadcrumb-item-children {
		display: flex;
	}

	.breadcrumb-folder {
		cursor: pointer;
	}
`,oa=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52"}),ol=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146"});var oc=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,od=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?oh(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&oc(t,o,s),s};function op(e,t=""){return P(Object.entries(e).map(([e,o])=>(function(e,t,o=""){return`:host([icon='${o}${e}'])::before { content: '${t}'; }`})(e,o,t)).join(""))}let ou=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};ou.styles=S`
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
			vertical-align: var(--code-icon-v-align, text-bottom);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${op(oa)}
		${op(ol,"gl-")}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
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

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,od([ez({reflect:!0})],ou.prototype,"icon",2),od([ez({reflect:!0})],ou.prototype,"modifier",2),od([ez({type:Number})],ou.prototype,"size",2),od([ez({reflect:!0})],ou.prototype,"flip",2),od([ez({reflect:!0})],ou.prototype,"rotate",2),ou=od([eS("code-icon")],ou);var ob=Object.defineProperty,og=Object.defineProperties,of=Object.getOwnPropertyDescriptor,om=Object.getOwnPropertyDescriptors,ov=Object.getOwnPropertySymbols,oy=Object.prototype.hasOwnProperty,ow=Object.prototype.propertyIsEnumerable,ox=e=>{throw TypeError(e)},ok=(e,t,o)=>t in e?ob(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,o_=(e,t)=>{for(var o in t||(t={}))oy.call(t,o)&&ok(e,o,t[o]);if(ov)for(var o of ov(t))ow.call(t,o)&&ok(e,o,t[o]);return e},o$=(e,t)=>og(e,om(t)),oC=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?of(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ob(t,o,s),s},oP=(e,t,o)=>t.has(e)||ox("Cannot "+o),oS=new Map,oA=new WeakMap;function oz(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function oE(e,t){oS.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function oT(e,t,o){let i=oA.get(e);if(null==i?void 0:i[t])return oz(i[t],o.dir);let r=oS.get(t);return r?oz(r,o.dir):{keyframes:[],options:{duration:0}}}let oO=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ev,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ev||null==e)return this._t=void 0,this.it=e;if(e===em)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let oD=oO(unsafe_html_e);var oR=S`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,oI=S`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;let oM=new Set,oL=new Map,oB="ltr",oN="en",oF="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(oF){let e=new MutationObserver(oU);oB=document.documentElement.dir||"ltr",oN=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function oj(...e){e.map(e=>{let t=e.$code.toLowerCase();oL.has(t)?oL.set(t,Object.assign(Object.assign({},oL.get(t)),e)):oL.set(t,e),r||(r=e)}),oU()}function oU(){oF&&(oB=document.documentElement.dir||"ltr",oN=document.documentElement.lang||navigator.language),[...oM.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){oM.add(this.host)}hostDisconnected(){oM.delete(this.host)}dir(){return`${this.host.dir||oB}`.toLowerCase()}lang(){return`${this.host.lang||oN}`.toLowerCase()}getTranslationData(e){var t,o;let i=new Intl.Locale(e.replace(/_/g,"-")),r=null==i?void 0:i.language.toLowerCase(),s=null!=(o=null==(t=null==i?void 0:i.region)?void 0:t.toLowerCase())?o:"",a=oL.get(`${r}-${s}`),l=oL.get(r);return{locale:i,language:r,region:s,primary:a,secondary:l}}exists(e,t){var o;let{primary:i,secondary:s}=this.getTranslationData(null!=(o=t.lang)?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!i&&!!i[e]||!!s&&!!s[e]||!!t.includeFallback&&!!r&&!!r[e]}term(e,...t){let o,{primary:i,secondary:s}=this.getTranslationData(this.lang());if(i&&i[e])o=i[e];else if(s&&s[e])o=s[e];else{if(!r||!r[e])return String(e);o=r[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}};var oH={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};oj(oH);var oq=class extends LocalizeController{};oj(oH);var oV=S`
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
`,oW=class extends lit_element_i{constructor(){let e;super(),(e=f).has(this)?ox("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let o=new CustomEvent(e,o_({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){let i=customElements.get(e);if(!i){try{customElements.define(e,t,o)}catch(i){customElements.define(e,class extends t{},o)}return}let r=" (unknown version)",s=r;if("version"in t&&t.version&&(r=" v"+t.version),"version"in i&&i.version&&(s=" v"+i.version),r&&s&&r===s)return}attributeChangedCallback(e,t,o){let i,r;if(oP(this,i=f,"read from private field"),r?!r.call(this):!i.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),oP(this,e=f,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)})}};f=new WeakMap,oW.version="2.20.1",oW.dependencies={},oC([ez()],oW.prototype,"dir",2),oC([ez()],oW.prototype,"lang",2);let oG=Math.min,oK=Math.max,oZ=Math.round,oY=Math.floor,oX=e=>({x:e,y:e}),oQ={left:"right",right:"left",bottom:"top",top:"bottom"},oJ={start:"end",end:"start"};function o0(e,t){return"function"==typeof e?e(t):e}function o1(e){return e.split("-")[0]}function o2(e){return e.split("-")[1]}function o5(e){return"x"===e?"y":"x"}function o8(e){return"y"===e?"height":"width"}let o4=new Set(["top","bottom"]);function o3(e){return o4.has(o1(e))?"y":"x"}function o6(e){return e.replace(/start|end/g,e=>oJ[e])}let o9=["left","right"],o7=["right","left"],ie=["top","bottom"],it=["bottom","top"];function io(e){return e.replace(/left|right|bottom|top/g,e=>oQ[e])}function ii(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function ir(e){let{x:t,y:o,width:i,height:r}=e;return{width:i,height:r,top:o,left:t,right:t+i,bottom:o+r,x:t,y:o}}function is(e,t,o){let i,{reference:r,floating:s}=e,a=o3(t),l=o5(o3(t)),c=o8(l),h=o1(t),d="y"===a,p=r.x+r.width/2-s.width/2,u=r.y+r.height/2-s.height/2,b=r[c]/2-s[c]/2;switch(h){case"top":i={x:p,y:r.y-s.height};break;case"bottom":i={x:p,y:r.y+r.height};break;case"right":i={x:r.x+r.width,y:u};break;case"left":i={x:r.x-s.width,y:u};break;default:i={x:r.x,y:r.y}}switch(o2(t)){case"start":i[l]-=b*(o&&d?-1:1);break;case"end":i[l]+=b*(o&&d?-1:1)}return i}let ia=async(e,t,o)=>{let{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:a}=o,l=s.filter(Boolean),c=await (null==a.isRTL?void 0:a.isRTL(t)),h=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:d,y:p}=is(h,i,c),u=i,b={},g=0;for(let o=0;o<l.length;o++){let{name:s,fn:f}=l[o],{x:m,y:v,data:w,reset:x}=await f({x:d,y:p,initialPlacement:i,placement:u,strategy:r,middlewareData:b,rects:h,platform:a,elements:{reference:e,floating:t}});d=null!=m?m:d,p=null!=v?v:p,b={...b,[s]:{...b[s],...w}},x&&g<=50&&(g++,"object"==typeof x&&(x.placement&&(u=x.placement),x.rects&&(h=!0===x.rects?await a.getElementRects({reference:e,floating:t,strategy:r}):x.rects),{x:d,y:p}=is(h,u,c)),o=-1)}return{x:d,y:p,placement:u,strategy:r,middlewareData:b}};async function il(e,t){var o;void 0===t&&(t={});let{x:i,y:r,platform:s,rects:a,elements:l,strategy:c}=e,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:u=!1,padding:b=0}=o0(t,e),g=ii(b),f=l[u?"floating"===p?"reference":"floating":p],m=ir(await s.getClippingRect({element:null==(o=await (null==s.isElement?void 0:s.isElement(f)))||o?f:f.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(l.floating)),boundary:h,rootBoundary:d,strategy:c})),v="floating"===p?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,w=await (null==s.getOffsetParent?void 0:s.getOffsetParent(l.floating)),x=await (null==s.isElement?void 0:s.isElement(w))&&await (null==s.getScale?void 0:s.getScale(w))||{x:1,y:1},_=ir(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:w,strategy:c}):v);return{top:(m.top-_.top+g.top)/x.y,bottom:(_.bottom-m.bottom+g.bottom)/x.y,left:(m.left-_.left+g.left)/x.x,right:(_.right-m.right+g.right)/x.x}}let ic=new Set(["left","top"]);async function ih(e,t){let{placement:o,platform:i,elements:r}=e,s=await (null==i.isRTL?void 0:i.isRTL(r.floating)),a=o1(o),l=o2(o),c="y"===o3(o),h=ic.has(a)?-1:1,d=s&&c?-1:1,p=o0(t,e),{mainAxis:u,crossAxis:b,alignmentAxis:g}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&"number"==typeof g&&(b="end"===l?-1*g:g),c?{x:b*d,y:u*h}:{x:u*h,y:b*d}}function id(){return"undefined"!=typeof window}function ip(e){return ig(e)?(e.nodeName||"").toLowerCase():"#document"}function iu(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function ib(e){var t;return null==(t=(ig(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function ig(e){return!!id()&&(e instanceof Node||e instanceof iu(e).Node)}function im(e){return!!id()&&(e instanceof Element||e instanceof iu(e).Element)}function iv(e){return!!id()&&(e instanceof HTMLElement||e instanceof iu(e).HTMLElement)}function iy(e){return!!id()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof iu(e).ShadowRoot)}let iw=new Set(["inline","contents"]);function ix(e){let{overflow:t,overflowX:o,overflowY:i,display:r}=iO(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!iw.has(r)}let ik=new Set(["table","td","th"]),i_=[":popover-open",":modal"];function i$(e){return i_.some(t=>{try{return e.matches(t)}catch{return!1}})}let iC=["transform","translate","scale","rotate","perspective"],iP=["transform","translate","scale","rotate","perspective","filter"],iS=["paint","layout","strict","content"];function iA(e){let t=iz(),o=im(e)?iO(e):e;return iC.some(e=>!!o[e]&&"none"!==o[e])||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||iP.some(e=>(o.willChange||"").includes(e))||iS.some(e=>(o.contain||"").includes(e))}function iz(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let iE=new Set(["html","body","#document"]);function iT(e){return iE.has(ip(e))}function iO(e){return iu(e).getComputedStyle(e)}function iD(e){return im(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function iR(e){if("html"===ip(e))return e;let t=e.assignedSlot||e.parentNode||iy(e)&&e.host||ib(e);return iy(t)?t.host:t}function iI(e,t,o){var i;void 0===t&&(t=[]),void 0===o&&(o=!0);let r=function e(t){let o=iR(t);return iT(o)?t.ownerDocument?t.ownerDocument.body:t.body:iv(o)&&ix(o)?o:e(o)}(e),s=r===(null==(i=e.ownerDocument)?void 0:i.body),a=iu(r);if(s){let e=iM(a);return t.concat(a,a.visualViewport||[],ix(r)?r:[],e&&o?iI(e):[])}return t.concat(r,iI(r,[],o))}function iM(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function iL(e){let t=iO(e),o=parseFloat(t.width)||0,i=parseFloat(t.height)||0,r=iv(e),s=r?e.offsetWidth:o,a=r?e.offsetHeight:i,l=oZ(o)!==s||oZ(i)!==a;return l&&(o=s,i=a),{width:o,height:i,$:l}}function iB(e){return im(e)?e:e.contextElement}function iN(e){let t=iB(e);if(!iv(t))return oX(1);let o=t.getBoundingClientRect(),{width:i,height:r,$:s}=iL(t),a=(s?oZ(o.width):o.width)/i,l=(s?oZ(o.height):o.height)/r;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}let iF=oX(0);function ij(e){let t=iu(e);return iz()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:iF}function iU(e,t,o,i){var r;void 0===t&&(t=!1),void 0===o&&(o=!1);let s=e.getBoundingClientRect(),a=iB(e),l=oX(1);t&&(i?im(i)&&(l=iN(i)):l=iN(e));let c=(void 0===(r=o)&&(r=!1),i&&(!r||i===iu(a))&&r)?ij(a):oX(0),h=(s.left+c.x)/l.x,d=(s.top+c.y)/l.y,p=s.width/l.x,u=s.height/l.y;if(a){let e=iu(a),t=i&&im(i)?iu(i):i,o=e,r=iM(o);for(;r&&i&&t!==o;){let e=iN(r),t=r.getBoundingClientRect(),i=iO(r),s=t.left+(r.clientLeft+parseFloat(i.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(i.paddingTop))*e.y;h*=e.x,d*=e.y,p*=e.x,u*=e.y,h+=s,d+=a,r=iM(o=iu(r))}}return ir({width:p,height:u,x:h,y:d})}function iH(e,t){let o=iD(e).scrollLeft;return t?t.left+o:iU(ib(e)).left+o}function iq(e,t){let o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-iH(e,o),y:o.top+t.scrollTop}}let iV=new Set(["absolute","fixed"]);function iW(e,t,o){let i;if("viewport"===t)i=function(e,t){let o=iu(e),i=ib(e),r=o.visualViewport,s=i.clientWidth,a=i.clientHeight,l=0,c=0;if(r){s=r.width,a=r.height;let e=iz();(!e||e&&"fixed"===t)&&(l=r.offsetLeft,c=r.offsetTop)}let h=iH(i);if(h<=0){let e=i.ownerDocument,t=e.body,o=getComputedStyle(t),r="CSS1Compat"===e.compatMode&&parseFloat(o.marginLeft)+parseFloat(o.marginRight)||0,a=Math.abs(i.clientWidth-t.clientWidth-r);a<=25&&(s-=a)}else h<=25&&(s+=h);return{width:s,height:a,x:l,y:c}}(e,o);else if("document"===t)i=function(e){let t=ib(e),o=iD(e),i=e.ownerDocument.body,r=oK(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),s=oK(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight),a=-o.scrollLeft+iH(e),l=-o.scrollTop;return"rtl"===iO(i).direction&&(a+=oK(t.clientWidth,i.clientWidth)-r),{width:r,height:s,x:a,y:l}}(ib(e));else if(im(t))i=function(e,t){let o=iU(e,!0,"fixed"===t),i=o.top+e.clientTop,r=o.left+e.clientLeft,s=iv(e)?iN(e):oX(1),a=e.clientWidth*s.x,l=e.clientHeight*s.y;return{width:a,height:l,x:r*s.x,y:i*s.y}}(t,o);else{let o=ij(e);i={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return ir(i)}function iG(e){return"static"===iO(e).position}function iK(e,t){if(!iv(e)||"fixed"===iO(e).position)return null;if(t)return t(e);let o=e.offsetParent;return ib(e)===o&&(o=o.ownerDocument.body),o}function iZ(e,t){var o;let i=iu(e);if(i$(e))return i;if(!iv(e)){let t=iR(e);for(;t&&!iT(t);){if(im(t)&&!iG(t))return t;t=iR(t)}return i}let r=iK(e,t);for(;r&&(o=r,ik.has(ip(o)))&&iG(r);)r=iK(r,t);return r&&iT(r)&&iG(r)&&!iA(r)?i:r||function(e){let t=iR(e);for(;iv(t)&&!iT(t);){if(iA(t))return t;if(i$(t))break;t=iR(t)}return null}(e)||i}let iY=async function(e){let t=this.getOffsetParent||iZ,o=this.getDimensions,i=await o(e.floating);return{reference:function(e,t,o){let i=iv(t),r=ib(t),s="fixed"===o,a=iU(e,!0,s,t),l={scrollLeft:0,scrollTop:0},c=oX(0);if(i||!i&&!s)if(("body"!==ip(t)||ix(r))&&(l=iD(t)),i){let e=iU(t,!0,s,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else r&&(c.x=iH(r));s&&!i&&r&&(c.x=iH(r));let h=!r||i||s?oX(0):iq(r,l);return{x:a.left+l.scrollLeft-c.x-h.x,y:a.top+l.scrollTop-c.y-h.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},iX={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:i,strategy:r}=e,s="fixed"===r,a=ib(i),l=!!t&&i$(t.floating);if(i===a||l&&s)return o;let c={scrollLeft:0,scrollTop:0},h=oX(1),d=oX(0),p=iv(i);if((p||!p&&!s)&&(("body"!==ip(i)||ix(a))&&(c=iD(i)),iv(i))){let e=iU(i);h=iN(i),d.x=e.x+i.clientLeft,d.y=e.y+i.clientTop}let u=!a||p||s?oX(0):iq(a,c);return{width:o.width*h.x,height:o.height*h.y,x:o.x*h.x-c.scrollLeft*h.x+d.x+u.x,y:o.y*h.y-c.scrollTop*h.y+d.y+u.y}},getDocumentElement:ib,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:r}=e,s=[..."clippingAncestors"===o?i$(t)?[]:function(e,t){let o=t.get(e);if(o)return o;let i=iI(e,[],!1).filter(e=>im(e)&&"body"!==ip(e)),r=null,s="fixed"===iO(e).position,a=s?iR(e):e;for(;im(a)&&!iT(a);){let t=iO(a),o=iA(a);o||"fixed"!==t.position||(r=null),(s?!o&&!r:!o&&"static"===t.position&&!!r&&iV.has(r.position)||ix(a)&&!o&&function e(t,o){let i=iR(t);return!(i===o||!im(i)||iT(i))&&("fixed"===iO(i).position||e(i,o))}(e,a))?i=i.filter(e=>e!==a):r=t,a=iR(a)}return t.set(e,i),i}(t,this._c):[].concat(o),i],a=s[0],l=s.reduce((e,o)=>{let i=iW(t,o,r);return e.top=oK(i.top,e.top),e.right=oG(i.right,e.right),e.bottom=oG(i.bottom,e.bottom),e.left=oK(i.left,e.left),e},iW(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:iZ,getElementRects:iY,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:o}=iL(e);return{width:t,height:o}},getScale:iN,isElement:im,isRTL:function(e){return"rtl"===iO(e).direction}};function iQ(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let iJ=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,i;let r,s,{placement:a,rects:l,platform:c,elements:h}=t,{apply:d=()=>{},...p}=o0(e,t),u=await il(t,p),b=o1(a),g=o2(a),f="y"===o3(a),{width:m,height:v}=l.floating;"top"===b||"bottom"===b?(r=b,s=g===(await (null==c.isRTL?void 0:c.isRTL(h.floating))?"start":"end")?"left":"right"):(s=b,r="end"===g?"top":"bottom");let w=v-u.top-u.bottom,x=m-u.left-u.right,_=oG(v-u[r],w),$=oG(m-u[s],x),C=!t.middlewareData.shift,P=_,S=$;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(S=x),null!=(i=t.middlewareData.shift)&&i.enabled.y&&(P=w),C&&!g){let e=oK(u.left,0),t=oK(u.right,0),o=oK(u.top,0),i=oK(u.bottom,0);f?S=m-2*(0!==e||0!==t?e+t:oK(u.left,u.right)):P=v-2*(0!==o||0!==i?o+i:oK(u.top,u.bottom))}await d({...t,availableWidth:S,availableHeight:P});let A=await c.getDimensions(h.floating);return m!==A.width||v!==A.height?{reset:{rects:!0}}:{}}}},i0=oO(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let o in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.st)e in t||(o.remove(e),this.st.delete(e));for(let e in t){let i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return em}});function i1(e){var t=e;for(let e=t;e;e=i2(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=i2(t);e;e=i2(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||iA(t)||"BODY"===e.tagName))return e}return null}function i2(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var i5=class extends oW{constructor(){super(...arguments),this.localize=new oq(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),i=0,r=0,s=0,a=0,l=0,c=0,h=0,d=0;o?e.top<t.top?(i=e.left,r=e.bottom,s=e.right,a=e.bottom,l=t.left,c=t.top,h=t.right,d=t.top):(i=t.left,r=t.bottom,s=t.right,a=t.bottom,l=e.left,c=e.top,h=e.right,d=e.top):e.left<t.left?(i=e.right,r=e.top,s=t.left,a=t.top,l=e.right,c=e.bottom,h=t.left,d=t.bottom):(i=t.right,r=t.top,s=e.left,a=e.top,l=t.right,c=t.bottom,h=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,o,i){let r;void 0===i&&(i={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:h=!1}=i,d=iB(e),p=s||a?[...d?iI(d):[],...iI(t)]:[];p.forEach(e=>{s&&e.addEventListener("scroll",o,{passive:!0}),a&&e.addEventListener("resize",o)});let u=d&&c?function(e,t){let o,i=null,r=ib(e);function s(){var e;clearTimeout(o),null==(e=i)||e.disconnect(),i=null}return!function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),s();let h=e.getBoundingClientRect(),{left:d,top:p,width:u,height:b}=h;if(l||t(),!u||!b)return;let g=oY(p),f=oY(r.clientWidth-(d+u)),m={rootMargin:-g+"px "+-f+"px "+-oY(r.clientHeight-(p+b))+"px "+-oY(d)+"px",threshold:oK(0,oG(1,c))||1},v=!0;function w(t){let i=t[0].intersectionRatio;if(i!==c){if(!v)return a();i?a(!1,i):o=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==i||iQ(h,e.getBoundingClientRect())||a(),v=!1}try{i=new IntersectionObserver(w,{...m,root:r.ownerDocument})}catch{i=new IntersectionObserver(w,m)}i.observe(e)}(!0),s}(d,o):null,b=-1,g=null;l&&(g=new ResizeObserver(e=>{let[i]=e;i&&i.target===d&&g&&(g.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var e;null==(e=g)||e.observe(t)})),o()}),d&&!h&&g.observe(d),g.observe(t));let f=h?iU(e):null;return h&&function t(){let i=iU(e);f&&!iQ(f,i)&&o(),f=i,r=requestAnimationFrame(t)}(),o(),()=>{var e;p.forEach(e=>{s&&e.removeEventListener("scroll",o),a&&e.removeEventListener("resize",o)}),null==u||u(),null==(e=g)||e.disconnect(),g=null,h&&cancelAnimationFrame(r)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,o;let i;if(!this.active||!this.anchorEl)return;let r=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var o,i;let{x:r,y:s,placement:a,middlewareData:l}=t,c=await ih(t,e);return a===(null==(o=l.offset)?void 0:o.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:r+c.x,y:s+c.y,data:{...c,placement:a}}}}];this.sync?r.push(iJ({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&r.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var o,i,r,s,a;let{placement:l,middlewareData:c,rects:h,initialPlacement:d,platform:p,elements:u}=e,{mainAxis:b=!0,crossAxis:g=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:w=!0,...x}=o0(t,e);if(null!=(o=c.arrow)&&o.alignmentOffset)return{};let _=o1(l),$=o3(d),C=o1(d)===d,P=await (null==p.isRTL?void 0:p.isRTL(u.floating)),S=f||(C||!w?[io(d)]:function(e){let t=io(e);return[o6(e),t,o6(t)]}(d)),A="none"!==v;!f&&A&&S.push(...function(e,t,o,i){let r=o2(e),s=function(e,t,o){switch(e){case"top":case"bottom":if(o)return t?o7:o9;return t?o9:o7;case"left":case"right":return t?ie:it;default:return[]}}(o1(e),"start"===o,i);return r&&(s=s.map(e=>e+"-"+r),t&&(s=s.concat(s.map(o6)))),s}(d,w,v,P));let E=[d,...S],T=await il(e,x),O=[],D=(null==(i=c.flip)?void 0:i.overflows)||[];if(b&&O.push(T[_]),g){let e=function(e,t,o){void 0===o&&(o=!1);let i=o2(e),r=o5(o3(e)),s=o8(r),a="x"===r?i===(o?"end":"start")?"right":"left":"start"===i?"bottom":"top";return t.reference[s]>t.floating[s]&&(a=io(a)),[a,io(a)]}(l,h,P);O.push(T[e[0]],T[e[1]])}if(D=[...D,{placement:l,overflows:O}],!O.every(e=>e<=0)){let e=((null==(r=c.flip)?void 0:r.index)||0)+1,t=E[e];if(t&&("alignment"!==g||$===o3(t)||D.every(e=>o3(e.placement)!==$||e.overflows[0]>0)))return{data:{index:e,overflows:D},reset:{placement:t}};let o=null==(s=D.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:s.placement;if(!o)switch(m){case"bestFit":{let e=null==(a=D.filter(e=>{if(A){let t=o3(e.placement);return t===$||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(o=e);break}case"initialPlacement":o=d}if(l!==o)return{reset:{placement:o}}}return{}}}),this.shift&&r.push({name:"shift",options:o={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=o0(o,e),h={x:t,y:i},d=await il(e,c),p=o3(o1(r)),u=o5(p),b=h[u],g=h[p];if(s){let e="y"===u?"top":"left",t="y"===u?"bottom":"right",o=b+d[e],i=b-d[t];b=oK(o,oG(b,i))}if(a){let e="y"===p?"top":"left",t="y"===p?"bottom":"right",o=g+d[e],i=g-d[t];g=oK(o,oG(g,i))}let f=l.fn({...e,[u]:b,[p]:g});return{...f,data:{x:f.x-t,y:f.y-i,enabled:{[u]:s,[p]:a}}}}}),this.autoSize?r.push(iJ({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&r.push({name:"arrow",options:i={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:o,placement:r,rects:s,platform:a,elements:l,middlewareData:c}=e,{element:h,padding:d=0}=o0(i,e)||{};if(null==h)return{};let p=ii(d),u={x:t,y:o},b=o5(o3(r)),g=o8(b),f=await a.getDimensions(h),m="y"===b,v=m?"clientHeight":"clientWidth",w=s.reference[g]+s.reference[b]-u[b]-s.floating[g],x=u[b]-s.reference[b],_=await (null==a.getOffsetParent?void 0:a.getOffsetParent(h)),$=_?_[v]:0;$&&await (null==a.isElement?void 0:a.isElement(_))||($=l.floating[v]||s.floating[g]);let C=$/2-f[g]/2-1,P=oG(p[m?"top":"left"],C),S=oG(p[m?"bottom":"right"],C),A=$-f[g]-S,E=$/2-f[g]/2+(w/2-x/2),T=oK(P,oG(E,A)),O=!c.arrow&&null!=o2(r)&&E!==T&&s.reference[g]/2-(E<P?P:S)-f[g]/2<0,D=O?E<P?E-P:E-A:0;return{[b]:u[b]+D,data:{[b]:T,centerOffset:E-T-D,...O&&{alignmentOffset:D}},reset:O}}});let s="absolute"===this.strategy?e=>iX.getOffsetParent(e,i1):iX.getOffsetParent;((e,t,o)=>{let i=new Map,r={platform:iX,...o},s={...r.platform,_c:i};return ia(e,t,{...r,platform:s})})(this.anchorEl,this.popup,{placement:this.placement,middleware:r,strategy:this.strategy,platform:o$(o_({},iX),{getOffsetParent:s})}).then(({x:e,y:t,middlewareData:o,placement:i})=>{let r="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=o.arrow.x,t=o.arrow.y,i="",a="",l="",c="";if("start"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?o:"",c=r?"":o}else if("end"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":o,c=r?o:"",l="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(c="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(c="number"==typeof e?`${e}px`:"",i="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:l,left:c,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ef`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${i0({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${i0({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ef`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function i8(e,t){return new Promise(o=>{e.addEventListener(t,function i(r){r.target===e&&(e.removeEventListener(t,i),o())})})}function i4(e,t,o){return new Promise(i=>{if((null==o?void 0:o.duration)===1/0)throw Error("Promise-based animations must be finite.");let r=e.animate(t,o$(o_({},o),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function i3(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function i6(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function i9(e,t){let o=o_({waitUntilFirstUpdate:!1},t);return(t,i)=>{let{update:r}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach(t=>{if(e.has(t)){let r=e.get(t),s=this[t];r!==s&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[i](r,s)}}),r.call(this,e)}}}i5.styles=[oV,oI],oC([eO(".popup")],i5.prototype,"popup",2),oC([eO(".popup__arrow")],i5.prototype,"arrowEl",2),oC([ez()],i5.prototype,"anchor",2),oC([ez({type:Boolean,reflect:!0})],i5.prototype,"active",2),oC([ez({reflect:!0})],i5.prototype,"placement",2),oC([ez({reflect:!0})],i5.prototype,"strategy",2),oC([ez({type:Number})],i5.prototype,"distance",2),oC([ez({type:Number})],i5.prototype,"skidding",2),oC([ez({type:Boolean})],i5.prototype,"arrow",2),oC([ez({attribute:"arrow-placement"})],i5.prototype,"arrowPlacement",2),oC([ez({attribute:"arrow-padding",type:Number})],i5.prototype,"arrowPadding",2),oC([ez({type:Boolean})],i5.prototype,"flip",2),oC([ez({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],i5.prototype,"flipFallbackPlacements",2),oC([ez({attribute:"flip-fallback-strategy"})],i5.prototype,"flipFallbackStrategy",2),oC([ez({type:Object})],i5.prototype,"flipBoundary",2),oC([ez({attribute:"flip-padding",type:Number})],i5.prototype,"flipPadding",2),oC([ez({type:Boolean})],i5.prototype,"shift",2),oC([ez({type:Object})],i5.prototype,"shiftBoundary",2),oC([ez({attribute:"shift-padding",type:Number})],i5.prototype,"shiftPadding",2),oC([ez({attribute:"auto-size"})],i5.prototype,"autoSize",2),oC([ez()],i5.prototype,"sync",2),oC([ez({type:Object})],i5.prototype,"autoSizeBoundary",2),oC([ez({attribute:"auto-size-padding",type:Number})],i5.prototype,"autoSizePadding",2),oC([ez({attribute:"hover-bridge",type:Boolean})],i5.prototype,"hoverBridge",2);var i7=class extends oW{constructor(){super(),this.localize=new oq(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=i3(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=i3(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await i6(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:o}=oT(this,"tooltip.show",{dir:this.localize.dir()});await i4(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await i6(this.body);let{keyframes:e,options:o}=oT(this,"tooltip.hide",{dir:this.localize.dir()});await i4(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,i8(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,i8(this,"sl-after-hide")}render(){return ef`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${i0({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};i7.styles=[oV,oR],i7.dependencies={"sl-popup":i5},oC([eO("slot:not([name])")],i7.prototype,"defaultSlot",2),oC([eO(".tooltip__body")],i7.prototype,"body",2),oC([eO("sl-popup")],i7.prototype,"popup",2),oC([ez()],i7.prototype,"content",2),oC([ez()],i7.prototype,"placement",2),oC([ez({type:Boolean,reflect:!0})],i7.prototype,"disabled",2),oC([ez({type:Number})],i7.prototype,"distance",2),oC([ez({type:Boolean,reflect:!0})],i7.prototype,"open",2),oC([ez({type:Number})],i7.prototype,"skidding",2),oC([ez()],i7.prototype,"trigger",2),oC([ez({type:Boolean})],i7.prototype,"hoist",2),oC([i9("open",{waitUntilFirstUpdate:!0})],i7.prototype,"handleOpenChange",1),oC([i9(["content","distance","hoist","placement","skidding"])],i7.prototype,"handleOptionsChange",1),oC([i9("disabled")],i7.prototype,"handleDisabledChange",1),oE("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),oE("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),i7.define("sl-tooltip");var re=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,ro=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?rt(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&re(t,o,s),s};oE("tooltip.show",null),oE("tooltip.hide",null);let ri=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback?.()}render(){var e;return ef`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??ev}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?oD(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};ri.styles=S`
		sl-tooltip {
			--max-width: var(--gl-tooltip-max-width, 320px);
			--hide-delay: 0ms;
			--show-delay: 500ms;
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host {
			text-transform: var(--gl-tooltip-text-transform, inherit);
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		[slot='content'] hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
		}
	`,ro([ez()],ri.prototype,"content",2),ro([ez({reflect:!0})],ri.prototype,"placement",2),ro([ez({type:Boolean})],ri.prototype,"disabled",2),ro([ez({type:Number})],ri.prototype,"distance",2),ro([ez({type:Boolean})],ri.prototype,"hoist",2),ri=ro([eS("gl-tooltip")],ri);var rr=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,rn=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?rs(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&rr(t,o,s),s};let ra="gl-copy-container",rl=class extends lit_element_i{constructor(){super(...arguments),this.copyLabel="Copy",this.copiedLabel="Copied",this.disabled=!1,this.placement="top",this.timeout=1e3}disconnectedCallback(){this.cancelResetTimer(),super.disconnectedCallback?.()}connectedCallback(){super.connectedCallback?.(),this.label=this.copyLabel}render(){return this.content||this.disabled?ef`<gl-tooltip
			.content="${this.label}"
			placement="${this.placement??ev}"
			@click=${this.onClick}
		>
			<slot></slot>
		</gl-tooltip>`:ev}async onClick(e){if(this.cancelResetTimer(),this.content)try{await navigator.clipboard.writeText(this.content),this.label=this.copiedLabel}catch{this.label="Unable to Copy"}else this.label="Nothing to Copy";this.createResetTimer()}cancelResetTimer(){null!=this._resetTimer&&(clearTimeout(this._resetTimer),this._resetTimer=void 0)}createResetTimer(){this._resetTimer=setTimeout(()=>{this._resetTimer=void 0,this.label=this.copyLabel},this.timeout)}};rl.tagName=ra,rl.styles=S`
		:host {
			display: inline-block;
		}

		gl-tooltip {
			cursor: pointer;
		}

		:host([appearance='toolbar']) {
			--copy-background: transparent;
			--copy-foreground: var(--vscode-foreground);
			--copy-hover-background: var(--vscode-toolbar-hoverBackground);
			--copy-border: transparent;
			--copy-border-radius: var(--gk-action-radius, 0.3rem);
			--copy-padding: 0.4rem;

			border: 1px solid var(--copy-border);
			border-radius: var(--copy-border-radius);
			background: var(--copy-background);
			color: var(--copy-foreground);
		}

		:host([appearance='toolbar']:hover) {
			background: var(--copy-hover-background);
		}

		:host([appearance='toolbar']) gl-tooltip {
			padding: var(--copy-padding);
			display: flex;
			align-items: center;
			justify-content: center;
			min-height: 1.8rem;
			box-sizing: border-box;
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}
	`,rn([ez({reflect:!0})],rl.prototype,"appearance",2),rn([ez({reflect:!1})],rl.prototype,"content",2),rn([ez()],rl.prototype,"copyLabel",2),rn([ez()],rl.prototype,"copiedLabel",2),rn([ez({type:Boolean,reflect:!0})],rl.prototype,"disabled",2),rn([ez()],rl.prototype,"placement",2),rn([ez({type:Number})],rl.prototype,"timeout",2),rn([eE()],rl.prototype,"label",2),rl=rn([eS(ra)],rl);var rc=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,rd=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?rh(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&rc(t,o,s),s};let rp=class extends lit_element_i{constructor(){super(...arguments),this.size=12}get label(){return eV(this.sha,{strings:{uncommitted:"Working",uncommittedStaged:"Staged",working:"Working"}})}render(){return null==this.sha?ev:!this.sha||eH(this.sha)?ef`<span style="cursor:default;">${this.label}</span>`:ef`<gl-copy-container .content=${this.sha} placement="top">
			<span><code-icon class="icon" icon="git-commit" size="${this.size}"></code-icon>${this.label}</span>
		</gl-copy-container>`}};rp.styles=S`
		:host {
			display: inline-block;
			max-width: 100%;
			align-content: center;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			vertical-align: middle;
			margin-top: -3px;
		}

		.icon {
			margin: 0 0.3rem 0.1rem 0.2rem;
		}
	`,rd([ez({type:String})],rp.prototype,"sha",2),rd([ez({type:Number})],rp.prototype,"size",2),rp=rd([eS("gl-commit-sha")],rp);let ru=S`
	:host {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		position: relative;

		--scroller-track-top: unset;
		--scroller-track-left: 0;
		--scroller-track-width: 100%;
		--scroller-thumb-height: 0.6rem;
		--scroller-track-height: 1.2rem;
	}

	gl-chart-scroller {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		min-height: 0;
	}

	gl-chart-scroller::part(track) {
		--track-top: var(--scroller-track-top);
		--track-left: var(--scroller-track-left);
		--track-width: var(--scroller-track-width);
		--track-height: var(--scroller-track-height);
		--thumb-height: var(--scroller-thumb-height);
	}

	#chart {
		flex: 1;
		width: 100%;
		height: 100%;
		min-height: 0;
	}

	footer {
		flex: 0 0 auto;
		display: flex;
		align-items: center;
		margin: 0 1rem 0.4rem 1rem;
		gap: 0.8rem;
	}

	gl-chart-slider {
		flex: 1 0 auto;
		margin-left: 1.4rem;
	}

	gl-commit-sha {
		color: var(--color-foreground--75);
		text-align: right;
		min-width: 7.5rem; /* Ugly but stops the text from jumping around */
	}

	.bb svg {
		font: 10px var(--font-family);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.bb path,
	.bb line {
		fill: none;
	}

	:host-context(.vscode-dark) .bb path.domain,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb path.domain {
		stroke: var(--color-background--lighten-15);
	}

	:host-context(.vscode-light) .bb path.domain,
	:host-context(.vscode-high-contrast-light) .bb path.domain {
		stroke: var(--color-background--darken-15);
	}

	.bb text,
	.bb .bb-button {
		user-select: none;
		fill: var(--color-view-foreground);
	}

	.bb .bb-event-rects,
	.bb .bb-event-rect {
		cursor: pointer !important;
	}

	.bb .bb-event-rects:active,
	.bb .bb-event-rect:active {
		cursor: ew-resize !important;
	}

	.bb .bb-xgrid-focus,
	.bb .bb-ygrid-focus,
	.bb .bb-ygrid,
	.bb .bb-event-rect,
	.bb .bb-bars path {
		shape-rendering: crispEdges;
	}

	.bb .bb-legend-item text {
		fill: var(--color-foreground--85);
	}

	.bb .bb-legend-item-tile {
		stroke-width: 2px;
		transform: translate(0, 1px);
	}

	.bb .bb-chart-arc .bb-gauge-value {
		fill: #000;
	}

	.bb .bb-chart-arc path {
		stroke: #fff;
	}

	.bb .bb-chart-arc rect {
		stroke: #fff;
		stroke-width: 1;
	}

	.bb .bb-chart-arc text {
		fill: #fff;
		font-size: 13px;
	}

	.bb .bb-axis {
		shape-rendering: crispEdges;
	}

	.bb .bb-grid {
		pointer-events: none;
	}

	:host-context(.vscode-dark) .bb .bb-grid line,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb .bb-grid line {
		stroke: var(--color-background--lighten-05);
	}

	:host-context(.vscode-dark) .bb .bb-grid line.bb-ygrid,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb .bb-grid line.bb-ygrid {
		stroke: var(--color-background--lighten-05);
	}

	:host-context(.vscode-light) .bb .bb-grid line,
	:host-context(.vscode-high-contrast-light) .bb .bb-grid line {
		stroke: var(--color-background--darken-05);
	}

	:host-context(.vscode-light) .bb .bb-grid line.bb-ygrid,
	:host-context(.vscode-high-contrast-light) .bb .bb-grid line.bb-ygrid {
		stroke: var(--color-background--darken-05);
	}

	.bb .bb-grid text {
		fill: var(--color-view-foreground);
	}

	:host-context(.vscode-dark) .bb .bb-xgrid-focus line,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb .bb-xgrid-focus line {
		stroke: var(--color-background--lighten-30);
	}

	:host-context(.vscode-light) .bb .bb-xgrid-focus line,
	:host-context(.vscode-high-contrast-light) .bb .bb-xgrid-focus line {
		stroke: var(--color-background--darken-30);
	}

	.bb .bb-text.bb-empty {
		fill: #808080;
		font-size: 2em;
	}

	.bb .bb-line {
		stroke-width: 1px;
	}

	.bb .bb-circle._expanded_ {
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 3px;
	}

	.bb .bb-selected-circle {
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 3px;
	}

	.bb .bb-bar {
		stroke-width: 0;
		opacity: 0.9 !important;
		fill-opacity: 0.9 !important;
	}

	.bb .bb-bar._expanded_ {
		opacity: 1 !important;
		fill-opacity: 1 !important;
	}

	.bb .bb-candlestick {
		stroke-width: 1px;
	}

	.bb .bb-candlestick._expanded_ {
		fill-opacity: 0.75;
	}

	.bb .bb-target.bb-focused,
	.bb .bb-circles.bb-focused {
		opacity: 1;
	}

	.bb .bb-target.bb-focused path.bb-line,
	.bb .bb-target.bb-focused path.bb-step,
	.bb .bb-circles.bb-focused path.bb-line,
	.bb .bb-circles.bb-focused path.bb-step {
		stroke-width: 2px;
	}

	.bb .bb-target.bb-defocused,
	.bb .bb-circles.bb-defocused {
		opacity: 0.2 !important;
	}

	.bb .bb-target.bb-defocused .text-overlapping,
	.bb .bb-circles.bb-defocused .text-overlapping {
		opacity: 0.05 !important;
	}

	.bb .bb-region {
		fill: steelblue;
		fill-opacity: 0.1;
	}

	:host-context(.vscode-dark) .bb .bb-zoom-brush,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb .bb-zoom-brush {
		fill: white;
		fill-opacity: 0.2;
	}

	:host-context(.vscode-light) .bb .bb-zoom-brush,
	:host-context(.vscode-high-contrast-light) .bb .bb-zoom-brush {
		fill: black;
		fill-opacity: 0.1;
	}

	.bb .bb-brush .extent {
		fill-opacity: 0.1;
	}

	.bb .bb-legend-item {
		font-size: 12px;
		user-select: none;
	}

	.bb .bb-legend-item-hidden {
		opacity: 0.15;
	}

	.bb .bb-legend-background {
		opacity: 0.75;
		fill: white;
		stroke: lightgray;
		stroke-width: 1;
	}

	.bb .bb-title {
		font: 14px var(--font-family);
	}

	.bb .bb-tooltip-container {
		z-index: 10;
		user-select: none;
	}

	.bb .bb-area {
		stroke-width: 0;
		opacity: 0.2;
	}

	.bb .bb-chart-arcs-title {
		dominant-baseline: middle;
		font-size: 1.3em;
	}

	.bb text.bb-chart-arcs-gauge-title {
		dominant-baseline: middle;
		font-size: 2.7em;
	}

	.bb .bb-chart-arcs .bb-chart-arcs-background {
		fill: #e0e0e0;
		stroke: #fff;
	}

	.bb .bb-chart-arcs .bb-chart-arcs-gauge-unit {
		fill: #000;
		font-size: 16px;
	}

	.bb .bb-chart-arcs .bb-chart-arcs-gauge-max {
		fill: #777;
	}

	.bb .bb-chart-arcs .bb-chart-arcs-gauge-min {
		fill: #777;
	}

	.bb .bb-chart-radars .bb-levels polygon {
		fill: none;
		stroke: #848282;
		stroke-width: 0.5px;
	}

	.bb .bb-chart-radars .bb-levels text {
		fill: #848282;
	}

	.bb .bb-chart-radars .bb-axis line {
		stroke: #848282;
		stroke-width: 0.5px;
	}

	.bb .bb-chart-radars .bb-axis text {
		font-size: 1.15em;
		cursor: default;
	}

	.bb .bb-chart-radars .bb-shapes polygon {
		fill-opacity: 0.2;
		stroke-width: 1px;
	}

	.bb .bb-button {
		position: absolute;
		top: 0.4rem;
		right: -1.4rem;
		background-color: var(--color-button-background);
		color: var(--color-button-foreground);
		font-size: var(--font-size);
		font-family: var(--font-family);
	}

	:host-context([data-placement='view']) .bb .bb-button {
		margin-right: 2.8rem;
	}

	.bb .bb-zoom-reset {
		display: inline-block;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.notice {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10% 2rem 30% 2rem;
		font-size: var(--font-size);

		z-index: 1;
	}

	.notice--blur {
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);

		animation: fadeIn 0.2s ease-in;
		animation-fill-mode: forwards;
		opacity: 0;
	}

	:host-context([data-placement='view']) .notice--blur {
		animation-delay: 0.5s;
	}

	.notice p {
		margin: 0;
	}

	.bb-tooltip {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background-color: var(--color-hover-background);
		color: var(--color-hover-foreground);
		border: 1px solid var(--color-hover-border);
		box-shadow: 0 2px 8px var(--vscode-widget-shadow);
		font-size: var(--font-size);
		opacity: 1;
		white-space: nowrap;
		min-width: 0;
		max-width: 360px;
		overflow: hidden;
	}

	.bb-tooltip .author {
		font-weight: 600;
	}

	.bb-tooltip .branches {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		/* font-family: var(--vscode-editor-font-family); */
	}

	.bb-tooltip .sha {
		/* background: var(--vscode-textCodeBlock-background);
		border-radius: 0.3rem; */
		/* padding: 0.1rem 0.4rem 0.2rem 0.4rem; */
		font-family: var(--vscode-editor-font-family);
		margin-right: 0.4rem;
	}

	.bb-tooltip .additions {
		color: var(--vscode-gitDecoration-addedResourceForeground);
	}

	.bb-tooltip .deletions {
		color: var(--vscode-gitDecoration-deletedResourceForeground);
	}

	.bb-tooltip .date {
		flex: 1 1 auto;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		font-weight: normal;
		gap: 0.5rem;
		min-width: 0;
	}

	.bb-tooltip .date--relative {
		flex: 0 1 auto;
	}

	.bb-tooltip .date--absolute {
		flex: 0 100000 auto;
		font-style: italic;
	}

	.bb-tooltip .message {
		margin-left: 0rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		max-height: 50vh;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.bb-tooltip .message__content {
		white-space: pre-line;
	}

	:host-context([data-placement='editor']) .bb-axis-y .tick text {
		fill: var(--color-foreground--85);
	}

	:host-context([data-placement='view']) .bb-axis-y .tick text {
		transform: translate(0, 0.4rem);
		font-family: codicon;
		font-size: 1.5rem;
	}

	@media (max-height: 275px) {
		:host-context([data-placement='view']) .bb-axis-y .tick text {
			transform: none;
			font-size: 1rem;
		}
	}

	@media (max-height: 225px) {
		:host-context([data-placement='view']) .bb-axis-y .tick text {
			display: none;
		}
	}
`;var rb=S`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,rg=S`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,rf=new WeakMap,rm=new WeakMap,rv=new WeakMap,ry=new WeakSet,rw=new WeakMap,rx=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!t&&!r&&"string"==typeof o&&o.length>0&&void 0!==i&&(Array.isArray(i)?i.forEach(t=>{e.formData.append(o,t.toString())}):e.formData.append(o,i.toString()))},this.handleFormSubmit=e=>{var t;let o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=rf.get(this.form))||t.forEach(e=>{this.setUserInteracted(e,!0)})),!this.form||this.form.noValidate||o||i(this.host)||(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),rw.set(this.host,[])},this.handleInteraction=e=>{let t=rw.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=o_({form:e=>{let t=e.form;if(t){let o=e.getRootNode().querySelector(`#${t}`);if(o)return o}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),checkValidity:e=>"function"!=typeof e.checkValidity||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),rw.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),rw.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,rf.has(this.form)?rf.get(this.form).add(this.host):rf.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),rm.has(this.form)||(rm.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),rv.has(this.form)||(rv.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=rf.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),rm.has(this.form)&&(this.form.reportValidity=rm.get(this.form),rm.delete(this.form)),rv.has(this.form)&&(this.form.checkValidity=rv.get(this.form),rv.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ry.add(e):ry.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{t.hasAttribute(e)&&o.setAttribute(e,t.getAttribute(e))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){let t=this.host,o=!!ry.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}},rk=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(o$(o_({},rk),{valid:!1,valueMissing:!0})),Object.freeze(o$(o_({},rk),{valid:!1,customError:!0}));var r_=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};let{I:r$}={M:Q,P:J,A:ee,C:1,L:ek,R:M,D:en,V:e_,I:R,H:k,N:I,U:L,B:H,F:z},rC={},rP=oO(class extends directive_i{constructor(e){if(super(e),3!==e.type&&1!==e.type&&4!==e.type)throw Error("The `live` directive is not allowed on child or event bindings");if(void 0!==e.strings)throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===em||t===ev)return t;let o=e.element,i=e.name;if(3===e.type){if(t===o[i])return em}else if(4===e.type){if(!!t===o.hasAttribute(i))return em}else if(1===e.type&&o.getAttribute(i)===t+"")return em;return((e,t=rC)=>e._$AH=t)(e),t}});var rS=class extends oW{constructor(){super(...arguments),this.formControlController=new rx(this),this.hasSlotController=new r_(this,"help-text","label"),this.localize=new oq(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.resizeObserver)||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${100*e}%`)}syncTooltip(e){if(null!==this.output){let t=this.input.offsetWidth,o=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r="rtl"===this.localize.dir(),s=t*e;if(r){let r=`${t-s}px + ${e} * ${i}`;this.output.style.translate=`calc((${r} - ${o/2}px - ${i} / 2))`}else{let t=`${s}px - ${e} * ${i}`;this.output.style.translate=`calc(${t} - ${o/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),"none"!==this.tooltip&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=!!this.label||!!e,i=!!this.helpText||!!t;return ef`
      <div
        part="form-control"
        class=${i0({"form-control":!0,"form-control--medium":!0,"form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${i0({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${this.name??ev}
              ?disabled=${this.disabled}
              min=${this.min??ev}
              max=${this.max??ev}
              step=${this.step??ev}
              .value=${rP(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"!==this.tooltip&&!this.disabled?ef`
                  <output part="tooltip" class="range__tooltip">
                    ${"function"==typeof this.tooltipFormatter?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};rS.styles=[oV,rg,rb],oC([eO(".range__control")],rS.prototype,"input",2),oC([eO(".range__tooltip")],rS.prototype,"output",2),oC([eE()],rS.prototype,"hasFocus",2),oC([eE()],rS.prototype,"hasTooltip",2),oC([ez()],rS.prototype,"title",2),oC([ez()],rS.prototype,"name",2),oC([ez({type:Number})],rS.prototype,"value",2),oC([ez()],rS.prototype,"label",2),oC([ez({attribute:"help-text"})],rS.prototype,"helpText",2),oC([ez({type:Boolean,reflect:!0})],rS.prototype,"disabled",2),oC([ez({type:Number})],rS.prototype,"min",2),oC([ez({type:Number})],rS.prototype,"max",2),oC([ez({type:Number})],rS.prototype,"step",2),oC([ez()],rS.prototype,"tooltip",2),oC([ez({attribute:!1})],rS.prototype,"tooltipFormatter",2),oC([ez({reflect:!0})],rS.prototype,"form",2),oC([((e="value")=>(t,o)=>{let i=t.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(t,s,a){var l;let c=i.getPropertyOptions(e);if(t===("string"==typeof c.attribute?c.attribute:e)){let t=c.converter||W,i=("function"==typeof t?t:null!=(l=null==t?void 0:t.fromAttribute)?l:W.fromAttribute)(a,c.type);this[e]!==i&&(this[o]=i)}r.call(this,t,s,a)}})()],rS.prototype,"defaultValue",2),oC([(b={passive:!0},(e,t)=>{Object.assign("function"==typeof e?e:e[t],b)})],rS.prototype,"handleThumbDragStart",1),oC([i9("value",{waitUntilFirstUpdate:!0})],rS.prototype,"handleValueChange",1),oC([i9("disabled",{waitUntilFirstUpdate:!0})],rS.prototype,"handleDisabledChange",1),oC([i9("hasTooltip",{waitUntilFirstUpdate:!0})],rS.prototype,"syncRange",1),rS.define("sl-range");var rA=Object.defineProperty,rz=Object.getOwnPropertyDescriptor,rE=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?rz(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&rA(t,o,s),s};let rT="gl-chart-slider",rO=class extends GlElement{constructor(){super(...arguments),this._value=0,this._max=0,this._min=0,this._shift=!1}get data(){return this._data}set data(e){this._data!==e&&(this._data=e,this._min=0,this._max=(e?.length??1)-1)}get shift(){return this._shift}set shift(e){this._shift=e,e?this.style.setProperty("--gl-track-color-active","var(--sl-color-primary-600"):this.style.removeProperty("--gl-track-color-active")}get value(){return this.data?.[this._value]}render(){return ef`<div class="slider-container">
			<sl-range
				id="slider"
				.min=${this._min}
				.max=${this._max}
				.value=${this._value}
				.tooltip="top"
				.tooltipFormatter=${e=>"Hold shift to compare with working tree"}
				@sl-change=${this.handleSliderInput}
				@sl-input=${this.handleSliderInput}
				@click=${this.handleSliderInput}
			></sl-range>
		</div>`}select(e){let t;if("string"==typeof e)t=this.data?.findIndex(t=>t.sha===e);else{let o=e.toISOString();t=this.data?.findIndex(e=>e.date===o)}null!=t&&-1!==t&&(this._value=t)}handleSliderInput(e){if(!this.data?.length)return;let t=parseInt(e.target.value),o=new Date(this.data[t].date);this.emit("gl-slider-change",{date:o,shift:this.shift})}};rO.tagName=rT,rO.styles=S`
		:host {
			display: block;
		}

		.slider-container {
			width: 100%;
			position: relative;
			padding-bottom: 0.4rem;
		}

		sl-range::part(input) {
			--track-height: 3px;
			--thumb-size: 16px;
			--track-active-offset: 100%;
			--track-color-active: var(--gl-track-color-active, var(--sl-color-neutral-200));
		}

		sl-range::part(thumb) {
			cursor: pointer;
		}
	`,rE([eE()],rO.prototype,"_value",2),rE([ez({type:Array})],rO.prototype,"data",1),rE([ez({type:Boolean})],rO.prototype,"shift",1),rO=rE([eS(rT)],rO);var rD=S`
  :host {
    display: contents;
  }
`,rR=class extends oW{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let e=this.shadowRoot.querySelector("slot");if(null!==e){let t=e.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return ef` <slot @slotchange=${this.handleSlotChange}></slot> `}};rR.styles=[oV,rD],oC([ez({type:Boolean,reflect:!0})],rR.prototype,"disabled",2),oC([i9("disabled",{waitUntilFirstUpdate:!0})],rR.prototype,"handleDisabledChange",1),rR.define("sl-resize-observer");var rI=Object.defineProperty,rM=Object.getOwnPropertyDescriptor,rL=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?rM(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&rI(t,o,s),s};let rB="gl-chart-scroller",rN=class extends GlElement{constructor(){super(...arguments),this.position=0,this.size=100,this.onDragStart=e=>{if(!this.isScrollable())return;e.preventDefault(),e.stopPropagation();let t=e.currentTarget,o=t.parentElement;if(!o)return;t.setPointerCapture(e.pointerId);let[i,r]=this.range,s=this.visibleRange[1]-this.visibleRange[0];this._dragInfo={startX:e.clientX,startPosition:this.position,trackWidth:o.offsetWidth,viewRange:r-i,zoomRange:s,viewStart:i,maxPosition:100-this.size,pointerId:e.pointerId},this.emit("gl-scroll-start")},this.onDragMove=e=>{if(!this._dragInfo||e.pointerId!==this._dragInfo.pointerId)return;e.preventDefault(),e.stopPropagation();let t=(e.clientX-this._dragInfo.startX)/this._dragInfo.trackWidth*100,o=Math.max(0,Math.min(this._dragInfo.maxPosition,this._dragInfo.startPosition+t))/(100-this.size)*(this._dragInfo.viewRange-this._dragInfo.zoomRange),i=this._dragInfo.viewStart+o,r=i+this._dragInfo.zoomRange;this.emitScrollEvent(i,r)},this.onDragEnd=e=>{if(!this._dragInfo||e&&e.pointerId!==this._dragInfo.pointerId)return;let t=this.renderRoot.querySelector(".thumb");t&&this._dragInfo.pointerId&&t.releasePointerCapture(this._dragInfo.pointerId),this._dragInfo=void 0,this.requestUpdate(),this.emit("gl-scroll-end")},this.onTrackClick=e=>{if(!this.isScrollable()||e.target!==e.currentTarget)return;let t=e.currentTarget.getBoundingClientRect(),o=(e.clientX-t.left)/t.width,[i,r]=this.range,s=this.visibleRange[1]-this.visibleRange[0],a=r-i,l=i+a*o,c=Math.max(i,Math.min(r-s,l-s/2));this.emitScrollEvent(c,c+s)},this.onWheel=e=>{if(e.ctrlKey)return void Object.defineProperty(e,"ctrlKey",{value:!1});if(e.stopPropagation(),e.stopImmediatePropagation(),!this.isScrollable())return;let t=null!=this._wheelTimer;t&&clearTimeout(this._wheelTimer),this._wheelTimer=setTimeout(()=>{this._wheelTimer=void 0,this.emit("gl-scroll-end")},150),t||this.emit("gl-scroll-start");let[o,i]=this.range,[r,s]=this.visibleRange,a=s-r,l=e.deltaY*a*.001,c=Math.max(o,Math.min(i-a,r+l));this.emitScrollEvent(c,c+a)}}isScrollable(){return null!=this.range&&null!=this.visibleRange&&this.size<100}connectedCallback(){super.connectedCallback?.(),this.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0})}disconnectedCallback(){this.onDragEnd(),this.removeEventListener("wheel",this.onWheel),super.disconnectedCallback?.()}willUpdate(e){({size:this.size,position:this.position}=this.calculateScrollState()),this.style.setProperty("--thumb-width",`${this.size}%`),this.style.setProperty("--thumb-left",`${this.position}%`)}render(){return ef`<slot></slot>
			<div class="track" part="track" ?scrollable="${this.isScrollable()}" @pointerdown="${this.onTrackClick}">
				<div
					class="thumb"
					@pointerdown="${this.onDragStart}"
					@pointermove="${this.onDragMove}"
					@pointerup="${this.onDragEnd}"
					@pointercancel="${this.onDragEnd}"
					@lostpointercapture="${this.onDragEnd}"
				></div>
			</div>`}calculateScrollState(){if(null==this.range||null==this.visibleRange)return{position:0,size:100};let[e,t]=this.range,[o,i]=this.visibleRange,r=t-e,s=i-o;if(r<=1||s<=1)return{position:0,size:100};let a=Math.max(20,Math.min(100,s/r*100)),l=r-s;return l<=0?{position:0,size:a}:{position:Math.max(0,Math.min(100-a,(o-e)/l*(100-a))),size:a}}emitScrollEvent(e,t){this.visibleRange&&e===this.visibleRange[0]&&t===this.visibleRange[1]||this.emit("gl-scroll",{range:[e,t]})}};rN.tagName=rB,rN.styles=S`
		:host {
			--track-top: unset;
			--track-left: 0;
			--track-width: 100%;
			--track-height: 1.2rem;

			--thumb-height: 0.6rem;
			--thumb-width: 2rem;
			--thumb-left: 0;
		}

		.track {
			visibility: hidden;
			position: absolute;
			background: transparent;
			top: var(--track-top);
			left: var(--track-left);
			width: var(--track-width, 100%);
			height: var(--track-height, 1rem);
			z-index: 1;
		}

		.track[scrollable] {
			visibility: visible;
		}

		.thumb {
			position: absolute;
			top: 0;
			left: var(--thumb-left);
			height: var(--thumb-height);
			width: var(--thumb-width);
			min-width: 2rem;
			background: transparent;
			transition: background 1s linear;
			cursor: default;
		}

		/* :host(:focus-within) .thumb, */
		:host(:hover) .thumb {
			background: var(--vscode-scrollbarSlider-background);
			transition: none;
		}

		.thumb:hover {
			background: var(--vscode-scrollbarSlider-hoverBackground) !important;
		}

		.thumb:active {
			background: var(--vscode-scrollbarSlider-activeBackground) !important;
		}
	`,rL([ez({type:Array})],rN.prototype,"range",2),rL([ez({type:Array})],rN.prototype,"visibleRange",2),rL([eE()],rN.prototype,"position",2),rL([eE()],rN.prototype,"size",2),rN=rL([eS(rB)],rN);let rF=S`
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: auto;
		position: absolute;
		top: 5%;
		bottom: 45%;
		left: 0;
		right: 0;
	}

	::slotted(p) {
		padding-top: 1rem;
		color: var(--color-foreground--75);
		font-size: 1.4rem;
	}

	.watermark {
		width: 12rem;
		height: 12rem;
		fill: color-mix(in srgb, var(--color-foreground) 15%, var(--color-background));
		transform-origin: center;
	}
`,rj=S`
	@keyframes pulse {
		0% {
			transform: scale(0.9);
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(0.9);
		}
	}

	.watermark--pulse .watermark-path {
		transform: scale(0.9);
		animation: pulse 1.8s ease-in-out infinite;
		transform-origin: center;
	}

	/* Stagger the pulse animation for a wave effect on all paths */
	/* Targeting all paths using their order within the SVG */
	.watermark-path:nth-of-type(1) {
		/* Target the outer circle path */
		animation-delay: 0.2s;
	}

	.watermark-path:nth-of-type(2) {
		/* Target the connection path */
		animation-delay: 0.4s;
	}

	.watermark-path:nth-of-type(3) {
		/* Target the first dot path */
		animation-delay: 0.1s;
	}

	.watermark-path:nth-of-type(4) {
		/* Target the second dot path */
		animation-delay: 0.1s;
	}

	.watermark-path:nth-of-type(5) {
		/* Target the third dot path */
		animation-delay: 0.1s;
	}
`;var rU=Object.defineProperty,rH=Object.getOwnPropertyDescriptor,rq=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?rH(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&rU(t,o,s),s};let rV=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return ef`<div class="container">
			<svg
				class="watermark${this.pulse?" watermark--pulse":""}"
				viewBox="0 0 28 28"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					class="watermark-path"
					d="M14 3.25C12.5883 3.25 11.1904 3.52806 9.88615 4.0683C8.5819 4.60853 7.39683 5.40037 6.3986 6.3986C5.40037 7.39683 4.60853 8.5819 4.06829 9.88615C3.52806 11.1904 3.25 12.5883 3.25 14C3.25 15.4117 3.52806 16.8096 4.06829 18.1138C4.60853 19.4181 5.40037 20.6032 6.3986 21.6014C7.39683 22.5996 8.5819 23.3915 9.88615 23.9317C11.1904 24.4719 12.5883 24.75 14 24.75C16.8511 24.75 19.5854 23.6174 21.6014 21.6014C23.6174 19.5854 24.75 16.8511 24.75 14C24.75 11.1489 23.6174 8.41462 21.6014 6.3986C19.5854 4.38259 16.8511 3.25 14 3.25ZM2 14C2 10.8174 3.26428 7.76516 5.51472 5.51472C7.76516 3.26428 10.8174 2 14 2C17.1826 2 20.2348 3.26428 22.4853 5.51472C24.7357 7.76516 26 10.8174 26 14C26 17.1826 24.7357 20.2348 22.4853 22.4853C20.2348 24.7357 17.1826 26 14 26C10.8174 26 7.76516 24.7357 5.51472 22.4853C3.26428 20.2348 2 17.1826 2 14Z"
				/>
				<path class="watermark-path" d="M18 15L11.5 8.5L12.5 7.5L19 14L18 15ZM11.5 20V8H13V20H11.5Z" />
				<path
					class="watermark-path"
					d="M12.25 10.5C12.8467 10.5 13.419 10.2629 13.841 9.84099C14.2629 9.41903 14.5 8.84674 14.5 8.25C14.5 7.65326 14.2629 7.08097 13.841 6.65901C13.419 6.23705 12.8467 6 12.25 6C11.6533 6 11.081 6.23705 10.659 6.65901C10.2371 7.08097 10 7.65326 10 8.25C10 8.84674 10.2371 9.41903 10.659 9.84099C11.081 10.2629 11.6533 10.5 12.25 10.5Z"
				/>
				<path
					class="watermark-path"
					d="M18.25 16.5C18.5455 16.5 18.8381 16.4418 19.111 16.3287C19.384 16.2157 19.6321 16.0499 19.841 15.841C20.0499 15.6321 20.2157 15.384 20.3287 15.111C20.4418 14.8381 20.5 14.5455 20.5 14.25C20.5 13.9545 20.4418 13.6619 20.3287 13.389C20.2157 13.116 20.0499 12.8679 19.841 12.659C19.6321 12.4501 19.384 12.2843 19.111 12.1713C18.8381 12.0582 18.5455 12 18.25 12C17.6533 12 17.081 12.2371 16.659 12.659C16.2371 13.081 16 13.6533 16 14.25C16 14.8467 16.2371 15.419 16.659 15.841C17.081 16.2629 17.6533 16.5 18.25 16.5Z"
				/>
				<path
					class="watermark-path"
					d="M12.25 22C12.8467 22 13.419 21.7629 13.841 21.341C14.2629 20.919 14.5 20.3467 14.5 19.75C14.5 19.1533 14.2629 18.581 13.841 18.159C13.419 17.7371 12.8467 17.5 12.25 17.5C11.6533 17.5 11.081 17.7371 10.659 18.159C10.2371 18.581 10 19.1533 10 19.75C10 20.3467 10.2371 20.919 10.659 21.341C11.081 21.7629 11.6533 22 12.25 22Z"
				/>
			</svg>
			<slot></slot>
		</div>`}};rV.styles=[rF,rj],rq([ez({type:Boolean})],rV.prototype,"pulse",2),rV=rq([eS("gl-watermark-loader")],rV);var rW=Object.defineProperty,rG=Object.getOwnPropertyDescriptor,rK=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?rG(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&rW(t,o,s),s};let rZ="gl-timeline-chart",rY=class extends GlElement{constructor(){super(...arguments),this._slices=new Map,this._slicesByIndex=new Map,this._commitsByTimestamp=new Map,this.placement="editor",this.sliceBy="author",this._data=null,this._shiftKeyPressed=!1,this.onDataPointClicked=e8((e,t)=>{let o=e.x,i=o instanceof Date?o:new Date(o),r=this._commitsByTimestamp.get(i.getTime())?.sha;null!=r&&(this._shaHovered=void 0,this._shaSelected=r,this.slider?.select(r),this.emit("gl-commit-select",{id:r,shift:this._shiftKeyPressed}))},50),this.onDataPointHovered=(e,t)=>{let o=e.x,i=o instanceof Date?o:new Date(o),r=this._commitsByTimestamp.get(i.getTime())?.sha;this._shaHovered=r},this.onDataPointUnhovered=(e,t)=>{if(this._shaHovered=void 0,this._shaSelected){let e=this._data?.find(e=>e.sha===this._shaSelected)?.date;null!=e&&this.selectDataPoint(new Date(e))}},this.onDocumentKeyDown=e=>{this._shiftKeyPressed=e.shiftKey,("Escape"===e.key||"Esc"===e.key)&&this.resetZoom()},this.onDocumentKeyUp=e=>{this._shiftKeyPressed=e.shiftKey},this.onResize=e=>{this._chart&&this.updateChartSize(e.detail.entries[0].contentRect)},this.onZoom=e=>{this.zoomedRange=e[0]<=this.range[0]&&e[1]>=this.range[1]?void 0:e}}get compact(){return"editor"!==this.placement}get data(){return this._data}get dataPromise(){return this._dataPromise}set dataPromise(e){this._dataPromise!==e&&(this._dataPromise=e,this._dataPromise?.then(e=>{this._data=e,this._dataReversed=e.toReversed()},()=>this._data=void 0))}get range(){return this._range}set range(e){this._range=e,this._rangeScrollable=[e[0].getTime()-144e5,e[1].getTime()+432e5],this.resetZoom()}get zoomedRange(){return this._zoomedRange}set zoomedRange(e){this._zoomedRange=e,this._zoomedRangeScrollable=e?[e[0].getTime(),e[1].getTime()]:void 0}get zoomed(){return null!=this._zoomedRange}connectedCallback(){super.connectedCallback?.(),document.addEventListener("keydown",this.onDocumentKeyDown),document.addEventListener("keyup",this.onDocumentKeyUp)}disconnectedCallback(){document.removeEventListener("keydown",this.onDocumentKeyDown),document.removeEventListener("keyup",this.onDocumentKeyUp),this._loading?.cancel(),this._chart?.destroy(),this._chart=void 0,super.disconnectedCallback?.()}update(e){(e.has("dataPromise")||null==this.dataPromise)&&this.updateChart(),super.update(e)}updateChart(){this._loading?.pending||(this._loading=function(){let e={pending:!0,promise:void 0,fulfill:void 0,cancel:void 0};return e.promise=new Promise((t,o)=>{e.fulfill=function(o){e.pending=!1,t(o)},e.cancel=function(t){e.pending=!1,null!=t?o(t):o()}}),e}(),this._loading.promise.finally(()=>this._loading=void 0),this.emit("gl-loading",this._loading.promise)),null!=this.dataPromise&&(this._chartAborter?.abort(),this._chartAborter=new AbortController,this.renderChart(this.dataPromise,this._loading,this._chartAborter.signal))}render(){return ef`${this.renderNotice()}
			<gl-chart-scroller
				.range=${this._rangeScrollable}
				.visibleRange=${this._zoomedRangeScrollable}
				@gl-scroll=${this.onScroll}
				@gl-scroll-start=${this.onScrollStart}
				@gl-scroll-end=${this.onScrollEnd}
			>
				<sl-resize-observer @sl-resize=${this.onResize}>
					<div id="chart" tabindex="-1"></div>
				</sl-resize-observer>
				${this.data?.length?this.renderFooter():ev}
			</gl-chart-scroller>`}renderNotice(){return this._loading?.pending||null==this.data?ef`<div class="notice notice--blur">
				<gl-watermark-loader pulse><p>Loading...</p></gl-watermark-loader>
			</div>`:this.data.length?ev:ef`<div class="notice">
				<gl-watermark-loader><slot name="empty"></slot></gl-watermark-loader>
			</div>`}renderFooter(){let e=this._shaHovered??this._shaSelected;return ef`<footer>
			<gl-chart-slider
				.data=${this._dataReversed}
				?shift=${this._shiftKeyPressed}
				@gl-slider-change=${this.onSliderChanged}
				@mouseover=${this.onSliderMouseOver}
				@mouseout=${this.onSliderMouseOut}
			></gl-chart-slider>
			<span @mouseover=${this.onFooterShaMouseOver} @mouseout=${this.onFooterShaMouseOut}
				>${function(e,t=12){return ef`<gl-commit-sha .sha=${e} .size=${t}></gl-commit-sha>`}(e,16)}</span
			>
			${this.renderActions()}
		</footer>`}renderActions(){return ef`<div class="actions">
			${this.zoomed?ef`<gl-button
						appearance="toolbar"
						@click=${e=>e.shiftKey||e.altKey?this.resetZoom():this.zoom(-1)}
						aria-label="Zoom Out"
					>
						<code-icon icon="zoom-out"></code-icon>
						<span slot="tooltip">Zoom Out<br />[Alt] Reset Zoom</span>
					</gl-button>`:ev}
			<gl-button appearance="toolbar" @click=${()=>this.zoom(.5)} tooltip="Zoom In" aria-label="Zoom In">
				<code-icon icon="zoom-in"></code-icon>
			</gl-button>
		</div>`}onFooterShaMouseOver(){this._shaSelected&&this.showTooltip(this._data?.find(e=>e.sha===this._shaSelected))}onFooterShaMouseOut(){this.hideTooltip()}onScrollStart(){this._chart&&this.zoomed&&(this._transitionDuration=this._chart?.config("transition.duration"),this._chart?.config("transition.duration",0))}onScrollEnd(){this._chart&&this.zoomed&&this._chart?.config("transition.duration",this._transitionDuration)}onScroll(e){if(!this._chart||!this.zoomed)return;let t=[new Date(e.detail.range[0]),new Date(e.detail.range[1])];this._chart.zoom(t)}onSliderChanged(e){this.revealDate(e.detail.date,{focus:!0,select:!0});let t=this._commitsByTimestamp.get(e.detail.date.getTime()),o=t?.sha;this._shaHovered=void 0,this._shaSelected=o,this.showTooltip(t),null!=o&&this.emit("gl-commit-select",{id:o,shift:e.detail.shift})}onSliderMouseOver(e){this.showTooltip(this.slider?.value)}onSliderMouseOut(e){this.hideTooltip()}resetZoom(){this.zoomedRange=void 0,this._chart?.unzoom()}revealDate(e,t){let o,i;if(!this._chart||(this.selectDataPoint(e,t),!this.zoomedRange))return;let r=this.zoomedRange,s=r[1].getTime()-r[0].getTime();if(e<r[0])i=new Date((o=new Date(e.getTime()-.2*s)).getTime()+s),o<=this.range[0]&&(i=new Date((o=eQ(this.range[0],{hours:-12})).getTime()+s));else{if(!(e>r[1]))return;o=new Date((i=new Date(e.getTime()+.2*s)).getTime()-s),i>=this.range[1]&&(o=new Date((i=eQ(this.range[1],{hours:12})).getTime()-s))}this._chart.zoom([o,i])}selectDataPoint(e,t){let o=this.getInternalChart();if(null==o)return;let i=this.getDataPoint(e);if(null==i)return;t?.focus&&o.showGridFocus([i]);let{index:r}=i;if(null!=r&&(this._chart?.$.main.selectAll(`.bb-chart-circles .bb-shape-${r}`).each(()=>o.setExpand?.(r,null,!0)),t?.select)){let t=this._commitsByTimestamp.get(e.getTime())?.sha;this._shaHovered=void 0,this._shaSelected=t,null!=t&&this.slider?.select(t)}}showTooltip(e){null!=e&&this._chart?.tooltip.show({x:new Date(e.date)})}hideTooltip(){this._chart?.tooltip.hide()}zoom(e){if(0===e)return void this.resetZoom();if(!this._chart)return;let t=this._chart.zoom(),o=[t[0].getTime(),t[1].getTime()],i=o[1]-o[0],r=new Date((o[1]+o[0])/2),s=r.getTime()-i*(1-e)/2,a=r.getTime()+i*(1-e)/2;if(a-s<(this.range[1].getTime()-this.range[0].getTime())/40)return;let l=this._chart.zoom([new Date(s),new Date(a)]);e<0&&l[0].getTime()===o[0]&&l[1].getTime()===o[1]&&this.resetZoom()}calculateBubbleSize(e,{minRadius:t,maxRadius:o,q1:i,q3:r,maxChanges:s}){let a;return 0===e?t:(a=e<=i?t+e/i*10:e<=r?t+10+(e-i)/(r-i)*15:t+25+Math.log(e-r+1)/Math.log(s-r+1)*15,Math.max(t,Math.min(o,a)))}calculateChangeMetrics(e){let t=e.map(e=>(e.additions??0)+(e.deletions??0)).sort((e,t)=>e-t);return{maxChanges:t[t.length-1],q1:t[Math.floor(.25*t.length)],q3:t[Math.floor(.75*t.length)]}}getDataPoint(e){let t=e instanceof Date?e.getTime():new Date(e).getTime();return this._chart?.data()[0]?.values.find(e=>("number"==typeof e.x?e.x:e.x.getTime())===t)}getInternalChart(){try{let e=this._chart?.internal;return this._chart,e}catch{return}}getOnRenderedCallback(e){return function(){let t=this;null!=t&&t.$.main.selectAll(".bb-axis-y .tick text tspan").each(function(o){if(this==null)return;let i=e._slicesByIndex.get(-o.index),r=t.color(i);e.compact&&this.setAttribute("fill",r);let s=document.createElementNS("http://www.w3.org/2000/svg","title");s.textContent=i,this.appendChild(s)})}}prepareChartData(e,t){let o=e.length+1,i=Array(o);i[0]="time";let r=Array(o);r[0]="additions";let s=Array(o);s[0]="deletions";let a={time:"x",additions:"y2",deletions:"y2"},l={additions:"bar",deletions:"bar"},c={additions:"time",deletions:"time"};this._slices.clear(),this._slicesByIndex.clear();let h=0,d=(e,t,o)=>{let i=this._slices.get(e);null==i?(i={x:[`time.${e}`,t],y:h,z:new Map([[t,o]])},this._slices.set(e,i),this._slicesByIndex.set(h,e),a[e]="y",l[e]="scatter",c[e]=`time.${e}`,h--):(i.x.push(t),i.z.set(t,o))},p=0;for(let o of e){let{author:e,date:a,additions:l=0,deletions:c=0,branches:h}=o;this._commitsByTimestamp.set(new Date(a).getTime(),o),i[++p]=a,r[p]=l,s[p]=c;let u=this.calculateBubbleSize(l+c,t);if("branch"===this.sliceBy)for(let e of h?.length?h:[this.head??"HEAD"])d(e,a,u);else d(e,a,u)}let u=[i,r,s];for(let[e,t]of this._slices){u.push(t.x);let o=Array(t.x.length).fill(t.y);o[0]=e,u.push(o)}return{axes:a,columns:u,names:{additions:"Additions",deletions:"Deletions"},types:l,xs:c}}async renderChart(o,i,r){let s=await o;if(r.aborted)return void i?.cancel();this._slices.clear(),this._slicesByIndex.clear(),this._commitsByTimestamp.clear();let a={minRadius:6,maxRadius:50,...this.calculateChangeMetrics(s)},{bb:l,bar:c,scatter:h,selection:d,zoom:p}=await w.e(162).then(w.bind(w,3626));if(r.aborted)return void i?.cancel();this.range=s.length?[new Date(s[s.length-1].date),new Date(s[0].date)]:[new Date,new Date],c(),h();let u=this.prepareChartData(s,a);try{let o=-(this._slices.size+1),r=[...this._slicesByIndex.keys()];if(null==this._chart){let a={bindto:this.chartContainer,onafterinit:()=>{this.updateChartSize(),setTimeout(()=>i?.fulfill(),0)},onrendered:this.getOnRenderedCallback(this),clipPath:!0,data:{...u,colors:{additions:"rgba(73, 190, 71, 1)",deletions:"rgba(195, 32, 45, 1)"},groups:[["additions","deletions"]],selection:{enabled:d(),draggable:!1,grouped:!0,multiple:!1,isselectable:()=>!1},onclick:this.onDataPointClicked,onover:this.onDataPointHovered,onout:this.onDataPointUnhovered},axis:{x:{type:"timeseries",localtime:!0,height:this.compact?28:void 0,forceAsSingle:!0,tick:{fit:!1,format:e=>"number"==typeof e?e:eJ(e,this.shortDateFormat??"short"),outer:!0}},y:{max:0,min:o,padding:{top:75,bottom:75},tick:{format:e=>this.compact?"branch"===this.sliceBy?"":"":function(e,t,o="…"){if(!e)return e;let i=null==e||0===e.length?0:(0,tv.A)(e,tP,tS).width;return i<=30?e:`${e.slice(0,Math.floor(t/2)-1)}${o}${e.slice(i-Math.ceil(t/2))}`}(this._slicesByIndex.get(e)??"",30),outer:!0,values:r}},y2:{padding:this.compact?{top:0,bottom:0}:void 0,label:this.compact?void 0:{text:"Lines changed",position:"outer-middle"},show:!0,tick:{format:e=>this.compact?"":e,outer:!0}}},bar:{width:2,sensitivity:4,padding:2},scatter:{zerobased:!0},grid:{focus:{edge:!0,show:!0,y:!0},front:!1,lines:{front:!1},x:{show:!1},y:{show:!0}},legend:{show:!0,hide:["additions","deletions"],padding:4,item:{tile:{type:"circle",r:5},interaction:{dblclick:!0}},tooltip:!0},point:{r:e=>null==e||"function"==typeof e.data&&(e=e.data()[0],null==e)?0:null!=e.r?e.r:Math.max(6,this._slices.get(e.id)?.z.get(e.x.toISOString())??6),focus:{expand:{enabled:!0}},select:{r:6}},resize:{auto:!1},tooltip:{contents:(o,i,r,s)=>{var a;let l=o[0],c=new Date(l.x),h=this._commitsByTimestamp.get(c.getTime());if(null==h)return"";if(""===h.sha)return`<div class="bb-tooltip">
									<section class="author">Working Tree</section>
									<section class="message"><span class="message__content">No uncommitted changes</span></section>
								</div>`;let d=h.additions,p=h.deletions,u=null==d?"":`<span class="additions">+${tA("line",d)}</span>`,b=null==p?"":`<span class="deletions">-${tA("line",p)}</span>`;u&&(b=`, ${b}`);let g=h.branches?.length?`<section class="branches"><code-icon icon="git-branch"></code-icon> ${h.branches.join(", ")}</section>`:"";return`<div class="bb-tooltip">
									<section class="author">${h.author}</section>
									<section>
										<span class="sha"><code-icon icon="git-commit"></code-icon> ${eV(h.sha)}</span>
										<span class="changes">${u}${b}</span>
									</section>
									<section class="date">
										<code-icon icon="history"></code-icon><span class="date--relative">${(a=function(o,i){let r=("number"==typeof o?o:o.getTime())-new Date().getTime();for(let[o,i,s,a]of eZ)if(Math.abs(r)>=i||1e3===i)return null==t&&(t=new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"auto",style:"long"})),t.format(Math.round(r/s),o);return""}(c)).charAt(0).toUpperCase()+a.slice(1)}</span><span class="date--absolute">(${eJ(c,this.dateFormat)})</span>
									</section>
									${g}
									<section class="message"><span class="message__content">${h.message}</span></section>
								</div>`},show:!0},zoom:{enabled:p(),type:"wheel",extent:[1,40],onzoom:this.onZoom,onzoomend:this.onZoom}};this._chart=l.generate(a);let c=s[0];this._shaHovered=void 0,this._shaSelected=c?.sha,null!=c&&this.selectDataPoint(new Date(c.date),{select:!0})}else this._chart.config("axis.y.tick.values",r,!1),this._chart.config("axis.y.min",o,!1),this._chart.load({...u,resizeAfter:!0,unload:!0,done:()=>{let e;null!=this._shaSelected&&(e=s.find(e=>e.sha===this._shaSelected)),null==e&&(e=s[0],this._shaHovered=void 0,this._shaSelected=e?.sha),null!=e&&this.selectDataPoint(new Date(e.date),{select:!0}),setTimeout(()=>i?.fulfill(),0)}});return void await i.promise.catch(()=>{})}catch(e){i?.cancel()}}updateChartSize(e){(e??=this.chartContainer.getBoundingClientRect()).width>0&&e.height>0&&requestAnimationFrame(()=>{this._chart.resize({width:e.width,height:e.height}),this.updateScrollerTrackPosition()})}updateScrollerTrackPosition(){let e=this.shadowRoot?.querySelector(".bb-axis.bb-axis-x");if(null==e)return;let t=e.getBoundingClientRect(),o=this.chartContainer.getBoundingClientRect();this.style.setProperty("--scroller-track-top",`${t.top-(o.top-1)}px`),this.style.setProperty("--scroller-track-left",`${t.left+2}px`),this.style.setProperty("--scroller-track-width",`${t.width-2}px`)}};rY.tagName=rZ,rY.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},rY.styles=[ru],rK([eO("#chart")],rY.prototype,"chartContainer",2),rK([eO(rO.tagName)],rY.prototype,"slider",2),rK([eE()],rY.prototype,"_loading",2),rK([ez()],rY.prototype,"placement",2),rK([ez()],rY.prototype,"dateFormat",2),rK([ez({type:String})],rY.prototype,"head",2),rK([ez({type:Object})],rY.prototype,"scope",2),rK([ez()],rY.prototype,"shortDateFormat",2),rK([ez()],rY.prototype,"sliceBy",2),rK([eE()],rY.prototype,"_data",2),rK([ez({type:Object})],rY.prototype,"dataPromise",1),rK([eE()],rY.prototype,"_shaHovered",2),rK([eE()],rY.prototype,"_shaSelected",2),rK([eE()],rY.prototype,"_shiftKeyPressed",2),rK([eE()],rY.prototype,"_zoomedRange",2),rK([ez({type:Boolean,reflect:!0})],rY.prototype,"zoomed",1),rK([tK({args:{0:e=>e?.length}})],rY.prototype,"prepareChartData",1),rK([tK({args:!1})],rY.prototype,"renderChart",1),rY=rK([eS(rZ)],rY);let rX=S`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;S`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${rX}
	}
`;let rQ=S`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,rJ=S`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,r0=S`
	:focus-visible {
		${rQ}
	}
`;var r1=Object.defineProperty,r2=Object.getOwnPropertyDescriptor,r5=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?r2(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&r1(t,o,s),s};let r8=class extends lit_element_i{render(){return ef`<slot></slot>`}};r8.styles=S`
		* {
			box-sizing: border-box;
		}

		:host {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			gap: 0.4rem;
			overflow: hidden;
			font-size: var(--vscode-font-size);
			color: var(--vscode-foreground);
			width: 100%;
		}

		::slotted(gl-breadcrumb-item:not(:last-of-type))::after {
			content: '\\eab6'; /* chevron-right codicon */
			font-family: codicon;
			font-size: 12px;
			width: 12px;
			height: 12px;
			opacity: 0.6;
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
			position: relative;
			left: -0.6rem;
			margin-right: -0.6rem;
			transition:
				left 0.3s cubic-bezier(0.25, 1, 0.5, 1),
				margin-right 0.3s cubic-bezier(0.25, 1, 0.5, 1);
		}

		::slotted(gl-breadcrumb-item[collapsed]:not(:hover):not(:focus-within):not(:last-of-type))::after {
			left: -1.2rem;
			margin-right: -1.2rem;
		}

		::slotted(:last-child:not(gl-breadcrumb-item:last-of-type)) {
			margin-left: 1rem;
		}
	`,r8=r5([eS("gl-breadcrumbs")],r8);let r4=class extends lit_element_i{constructor(){super(...arguments),this.collapsibleState="none",this._shrink=1,this.onToggleCollapse=e=>{e.preventDefault(),e.stopPropagation(),e instanceof KeyboardEvent&&"Enter"!==e.key&&" "!==e.key||(this.collapsed=!this.collapsed)}}get collapsed(){return this._collapsed??"collapsed"===this.collapsibleState}set collapsed(e){this._collapsed=e}get collapsible(){return"none"!==this.collapsibleState}get shrink(){return this._shrink}set shrink(e){let t=this._shrink;this._shrink=e,this.style.setProperty("--gl-breadcrumb-item-shrink",String(e)),this.requestUpdate("shrink",t)}render(){let{collapsed:e,collapsible:t}=this;return ef`<div class=${i0({"breadcrumb-item":!0,collapsible:t})}>
			<span class="breadcrumb-content">
				${this.renderIcon(t,e)}
				<slot class="breadcrumb-label"></slot>
			</span>
			<slot name="children"></slot>
		</div>`}renderIcon(e,t){return this.icon?e||this.iconTooltip?ef`<gl-tooltip
			content="${e?t?"Click to Expand":"Click to Collapse":this.iconTooltip}"
			placement="bottom"
		>
			<code-icon
				class="breadcrumb-icon"
				icon="${this.icon}"
				tabindex="0"
				@click=${e?this.onToggleCollapse:void 0}
				@keyup=${e?this.onToggleCollapse:void 0}
			></code-icon>
		</gl-tooltip>`:ef`<code-icon class="breadcrumb-icon" icon="${this.icon}"></code-icon>`:ev}};r4.styles=[r0,S`
			* {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				flex-shrink: var(--gl-breadcrumb-item-shrink, 1);
			}

			:host([icon]) {
				min-width: calc(24px + 0.6rem);
			}

			:host(:hover),
			:host(:focus-within) {
				flex-shrink: 0;
			}

			.breadcrumb-item {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				width: 100%;
				cursor: default;
			}

			.breadcrumb-content {
				display: inline-flex;
				align-items: center;
				gap: 0.6rem;
				vertical-align: middle;
				max-width: 100%;
			}

			.breadcrumb-icon {
				flex-shrink: 0;
				z-index: 2;
			}

			.collapsible .breadcrumb-icon {
				cursor: pointer;
			}

			.breadcrumb-label {
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				max-width: 100vw;
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			}

			.breadcrumb-tooltip {
				display: inline-flex;
				align-items: center;
				vertical-align: middle;
			}

			slot[name='children'] {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				overflow: hidden;
				max-width: 100vw;
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			}

			:host([collapsed]) .breadcrumb-item:not(:hover):not(:focus-within) .breadcrumb-label,
			:host([collapsed]) .breadcrumb-item:not(:hover):not(:focus-within) slot[name='children'] {
				max-width: 0;
			}
		`],r5([eE()],r4.prototype,"_collapsed",2),r5([ez({type:Boolean,reflect:!0})],r4.prototype,"collapsed",1),r5([ez({type:String})],r4.prototype,"collapsibleState",2),r5([ez()],r4.prototype,"icon",2),r5([ez()],r4.prototype,"iconTooltip",2),r5([ez({type:Number})],r4.prototype,"shrink",1),r4=r5([eS("gl-breadcrumb-item")],r4);let r3=class extends lit_element_i{render(){return ef`<slot></slot>`}};r3.styles=S`
		:host {
			display: flex;
			flex-direction: row;
			align-items: center;
			white-space: nowrap;
			overflow: hidden;
			margin-right: 0.6rem;
		}

		:host::before {
			content: '\\eab6'; /* chevron-right codicon */
			font-family: codicon;
			font-size: 12px;
			width: 12px;
			height: 12px;
			opacity: 0.6;
			margin-right: 0.4rem;
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
		}

		.breadcrumb-label {
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`,r3=r5([eS("gl-breadcrumb-item-child")],r3);let r6=S`
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
`;S`
	* {
		box-sizing: border-box;
	}
`;let r9=S`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${rQ}
	}
	a:hover {
		text-decoration: underline;
	}
`,r7=S`
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

	:host-context(.preload) .scrollable {
		transition: none;
	}
`;S`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;var se=Object.defineProperty,st=Object.getOwnPropertyDescriptor,so=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?st(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&se(t,o,s),s};let si=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ef`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??ev}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ef`<gl-tooltip placement=${this.tooltipPlacement??ev}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ef`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??ev}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ef`<button
			class="control"
			role=${this.role??ev}
			aria-checked=${this.ariaChecked??ev}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};si.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},si.styles=[r6,S`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;
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
				border-radius: var(--gk-action-radius, 0.3rem);
				-webkit-font-smoothing: auto;
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);
				font-family: inherit;
				font-size: inherit;

				color: inherit;
				text-decoration: none;

				width: max-content;
				max-width: 100%;
				height: 100%;
				cursor: pointer;
			}

			/* When truncate is enabled, allow the control to shrink */
			:host([truncate]) .control {
				min-width: 0;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-flex;
				align-items: center;
				max-width: 100%;
			}

			/* Text truncation option - enabled via truncate attribute */
			:host([truncate]) .label {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block; /* Change from flex to block for ellipsis to work */
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${rJ}
			}

			:host([appearance='input']),
			:host([role='checkbox']:focus-within),
			:host([aria-checked]:focus-within) {
				outline-offset: -1px;
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='input']),
			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
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

			:host([appearance='input']) .control {
				padding: var(--button-input-padding);
				--button-line-height: 1.1;
				height: 1.8rem;
				gap: 0.2rem;
			}

			:host([appearance='input'][href]) > a,
			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([aria-checked]:hover:not([disabled]):not([aria-checked='true'])) {
				background-color: var(--vscode-inputOption-hoverBackground);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			:host([disabled][aria-checked='true']) {
				opacity: 0.8;
			}

			:host([aria-checked='true']) {
				background-color: var(--vscode-inputOption-activeBackground);
				color: var(--vscode-inputOption-activeForeground);
				border-color: var(--vscode-inputOption-activeBorder);
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],so([eO(".control")],si.prototype,"control",2),so([ez({reflect:!0})],si.prototype,"appearance",2),so([ez({type:Boolean,reflect:!0})],si.prototype,"disabled",2),so([ez({reflect:!0})],si.prototype,"density",2),so([ez({type:Boolean,reflect:!0})],si.prototype,"full",2),so([ez()],si.prototype,"href",2),so([ez()],si.prototype,"tooltip",2),so([ez()],si.prototype,"tooltipPlacement",2),so([ez({type:Boolean,reflect:!0})],si.prototype,"truncate",2),si=so([eS("gl-button")],si);let sr=S`
	:host {
		--checkbox-foreground: var(--vscode-checkbox-foreground);
		--checkbox-background: var(--vscode-checkbox-background);
		--checkbox-border: var(--vscode-checkbox-border);
		--checkbox-checked-foreground: var(--vscode-inputOption-activeForeground);
		--checkbox-checked-background: var(--vscode-inputOption-activeBackground);
		--checkbox-checked-border: var(--vscode-inputOption-activeBorder);
		--checkbox-active-background: var(--vscode-checkbox-selectBackground);
		--checkbox-active-border: var(--vscode-checkbox-selectBorder);
		--checkbox-hover-background: var(--vscode-inputOption-hoverBackground);
		--checkbox-radius: 3px;
		--checkbox-border-width: 1px;
		--checkbox-size: 1.6rem;
		--checkbox-spacing: 1rem;

		display: block;
		margin-block: 0.8rem;
	}

	label {
		display: flex;
		gap: var(--checkbox-spacing);
		align-items: center;
		user-select: none;
		white-space: nowrap;
		cursor: pointer;
		color: var(--checkbox-foreground);
	}

	:host([disabled]) label {
		cursor: default;
		opacity: 0.5;
	}

	.label-text {
		display: block;
		line-height: normal;
		margin-inline-end: var(--checkbox-spacing);
	}

	.input {
		position: absolute;
		z-index: -1;
		opacity: 0;
	}
	.control {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: var(--checkbox-size);
		height: var(--checkbox-size);
		box-sizing: border-box;
		border-radius: var(--checkbox-radius);
		color: var(--checkbox-foreground);
		background: var(--checkbox-background);
		border: var(--checkbox-border-width, 1px) solid var(--vscode-checkbox-border);
	}

	.input:hover + .control {
		background-color: var(--checkbox-hover-background);
	}

	.input:focus-visible + .control,
	.input:focus + .control {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 2px;
	}

	.input:active + .control {
		background-color: var(--checkbox-active-background);
		border-color: var(--checkbox-active-border);
	}

	:host([checked]) .control {
		color: var(--checkbox-checked-foreground);
		background-color: var(--checkbox-checked-background);
		border-color: var(--checkbox-checked-border);
	}

	code-icon {
		pointer-events: none;
	}
`;var ss=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,sa=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sn(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ss(t,o,s),s};let sl=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return ef` <code-icon icon="check"></code-icon> `}render(){return ef`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};function sc(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}sl.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},sl.styles=[sr],sa([ez({type:Boolean,reflect:!0})],sl.prototype,"disabled",2),sa([ez({type:String})],sl.prototype,"value",2),sa([ez({type:Boolean})],sl.prototype,"defaultChecked",1),sa([ez({type:Boolean,reflect:!0})],sl.prototype,"checked",2),sl=sa([eS("gl-checkbox")],sl),i5.define("sl-popup");var sh=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,sp=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sd(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sh(t,o,s),s};let su=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=tZ(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let o=tZ(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of su.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),su.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return ef`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body scrollable ${"menu"===this.appearance?"is-menu":""}"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return su.closeOthers(this),this.open=!0,su.openPopovers.add(this),tY(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,su.openPopovers.delete(this),tY(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};su.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},su.openPopovers=new Set,su.styles=[r7,S`
			:host {
				--hide-delay: 0ms;
				--show-delay: 500ms;

				display: contents;
			}

			.popover {
				--arrow-size: var(--sl-tooltip-arrow-size);
				--arrow-color: var(--sl-tooltip-background-color);
			}

			.popover::part(popup) {
				z-index: var(--sl-z-index-tooltip);
			}

			.popover::part(arrow) {
				border: 1px solid var(--gl-tooltip-border-color);
				z-index: 1;
			}

			.popover[placement^='top']::part(popup) {
				transform-origin: bottom;
			}

			.popover[placement^='bottom']::part(popup) {
				transform-origin: top;
			}

			.popover[placement^='left']::part(popup) {
				transform-origin: right;
			}

			.popover[placement^='right']::part(popup) {
				transform-origin: left;
			}

			.popover[data-current-placement^='top']::part(arrow) {
				border-top-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
			}

			.popover[data-current-placement^='bottom']::part(arrow) {
				border-bottom-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
			}

			.popover[data-current-placement^='left']::part(arrow) {
				border-bottom-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
			}

			.popover[data-current-placement^='right']::part(arrow) {
				border-top-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
			}

			.popover__body {
				display: block;
				width: fit-content;
				border: 1px solid var(--gl-tooltip-border-color);
				border-radius: var(--sl-tooltip-border-radius);
				box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
				background-color: var(--sl-tooltip-background-color);
				font-family: var(--sl-tooltip-font-family);
				font-size: var(--sl-tooltip-font-size);
				font-weight: var(--sl-tooltip-font-weight);
				line-height: var(--sl-tooltip-line-height);
				text-align: start;
				white-space: normal;
				color: var(--sl-tooltip-color);
				padding: var(--sl-tooltip-padding);
				user-select: none;
				-webkit-user-select: none;
				max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
				/* max-height: var(--auto-size-available-height);
			overflow: auto; */
				pointer-events: all;
			}

			.popover[data-current-placement^='top'] .popover__body,
			.popover[data-current-placement^='bottom'] .popover__body {
				width: max-content;
			}

			:host([appearance='menu']) {
				--sl-tooltip-padding: 0 var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
				--sl-tooltip-font-size: var(--vscode-font-size);
				--sl-tooltip-background-color: var(--vscode-menu-background);
				--arrow-color: var(--vscode-menu-background);
			}

			/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
		`],sp([eO("#popover")],su.prototype,"body",2),sp([eO("sl-popup")],su.prototype,"popup",2),sp([ez({reflect:!0})],su.prototype,"placement",2),sp([ez({type:Object})],su.prototype,"anchor",2),sp([ez({reflect:!0,type:Boolean})],su.prototype,"disabled",2),sp([ez({type:Number})],su.prototype,"distance",2),sp([ez({reflect:!0,type:Boolean})],su.prototype,"open",2),sp([ez({reflect:!0,type:Boolean})],su.prototype,"arrow",2),sp([ez({type:Number})],su.prototype,"skidding",2),sp([ez()],su.prototype,"trigger",2),sp([ez({type:Boolean})],su.prototype,"hoist",2),sp([ez({reflect:!0})],su.prototype,"appearance",2),sp([tm("open",{afterFirstUpdate:!0})],su.prototype,"handleOpenChange",1),sp([tm(["distance","hoist","placement","skidding"])],su.prototype,"handleOptionsChange",1),sp([tm("disabled")],su.prototype,"handleDisabledChange",1),su=sp([eS("gl-popover")],su);let sb=(e,t)=>{let o=e._$AN;if(void 0===o)return!1;for(let e of o)e._$AO?.(t,!1),sb(e,t);return!0},sg=e=>{let t,o;do{if(void 0===(t=e._$AM))break;(o=t._$AN).delete(e),e=t}while(0===o?.size)},sf=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),sy(t)}};function sm(e){void 0!==this._$AN?(sg(this),this._$AM=e,sf(this)):this._$AM=e}function sv(e,t=!1,o=0){let i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(i))for(let e=o;e<i.length;e++)sb(i[e],!1),sg(i[e]);else null!=i&&(sb(i,!1),sg(i));else sb(this,e)}let sy=e=>{2==e.type&&(e._$AP??=sv,e._$AQ??=sm)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),sf(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(sb(this,e),sg(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let sw=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!sw(e))??em}update(e,t){let o=this._$Cbt,i=o.length;this._$Cbt=t;let r=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!sw(a))return this._$Cwt=e,a;e<i&&a===o[e]||(this._$Cwt=0x3fffffff,i=0,Promise.resolve(a).then(async e=>{for(;s.get();)await s.get();let t=r.deref();if(void 0!==t){let o=t._$Cbt.indexOf(a);o>-1&&o<t._$Cwt&&(t._$Cwt=o,t.setValue(e))}}))}return em}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let sx=oO(until_c);var sk=Object.defineProperty,s_=Object.getOwnPropertyDescriptor,s$=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?s_(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sk(t,o,s),s};let sC=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return ef`${sx(this.promoPromise?.then(e=>this.renderPromo(e)),ev)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"icon":return ef`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(t.info)return this.hasPromo=!0,ef`<p class="promo" part="text">${oD(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,ef`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${t.link.title??ev}"
						>${oD(t.link.html)}</a
					>`}return this.hasPromo=!1,ev}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),sc(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};sC.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sC.styles=[S`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:focus-visible {
				${rQ}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],s$([eO('a,button,[tabindex="0"]')],sC.prototype,"_focusable",2),s$([ez({type:Object})],sC.prototype,"promoPromise",2),s$([ez({type:Object})],sC.prototype,"source",2),s$([ez({reflect:!0,type:String})],sC.prototype,"type",2),s$([ez({type:Boolean,reflect:!0,attribute:"has-promo"})],sC.prototype,"hasPromo",1),sC=s$([eS("gl-promo")],sC);var sP=Object.defineProperty,sS=Object.getOwnPropertyDescriptor,sA=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sS(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sP(t,o,s),s};let sz=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){var e,t;return null==this.subscription?0:(e=this.subscription,t=e.plan.effective.expiresOn,(null!=t?function(e,t,o,i){let r=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),s=i??Math.floor;switch(o){case"days":return s(r/864e5);case"hours":return s(r/36e5);case"minutes":return s(r/6e4);case"seconds":return s(r/1e3);default:return r}}(Date.now(),new Date(t),"days",Math.round):void 0)??0)}get state(){return this.subscription?.state}render(){return ef`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let e=this.preview?"Preview":"Pro";if(null!=this.subscription)if(this.state===eW.VerificationRequired)return ef`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else{var t;if(e5(this.subscription)||this.cloud&&null!=this.subscription.account)return ef`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.subscription).state?t.state===eW.Trial:t.plan.actual.id!==t.plan.effective.id)return ef`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return e}renderPopoverHeader(){let e=ef`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===eW.Paid?ef`<div class="popup-header">${e}</div>`:this.cloud?this.preview?ef`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:ef`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?ef`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:ef`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){let e;if(null==this.subscription)return ev;switch(this.state){case eW.Paid:var t;e=ef`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${sc("gitlens.showAccountView")}"
							>${t=this.subscription?.plan.actual.id??"pro",`GitLens ${function(e){switch(e){case"pro":return"Pro";case"advanced":return"Advanced";case"teams":return"Business";case"enterprise":return"Enterprise";default:return"Community"}}(t)}`}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case eW.VerificationRequired:e=ef`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${sc("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${sc("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case eW.Trial:{let t=this.daysRemaining;e=ef`<p>
						You have
						<strong>${t<1?"<1 day":tA("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case eW.TrialExpired:e=ef`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(ef`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case eW.TrialReactivationEligible:e=ef`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${tA("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${sc("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${tA("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:e=ef`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return ef`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return ef`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${sc("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${sc("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return ef`<div class="actions">
			${e??ev}
			<gl-button
				density="tight"
				href="${sc("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return ef`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"badge")}
			.source=${this.source}
		></gl-promo>`}};sz.styles=[r6,r9,S`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus-visible {
				${P(rQ)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.8rem;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],sA([ez({type:Boolean})],sz.prototype,"cloud",2),sA([ez({reflect:!0})],sz.prototype,"placement",2),sA([ez({type:Boolean})],sz.prototype,"preview",2),sA([tu({context:"promos"})],sz.prototype,"promos",2),sA([ez({type:Object})],sz.prototype,"source",2),sA([ez({attribute:!1})],sz.prototype,"subscription",2),sz=sA([eS("gl-feature-badge")],sz);var sE=Object.defineProperty,sT=Object.getOwnPropertyDescriptor,sO=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sT(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sE(t,o,s),s};let sD=class extends lit_element_i{firstUpdated(){"alert"===this.appearance&&queueMicrotask(()=>this.button.focus())}render(){let e=null==this.state;if(this.hidden=e,e)return;let t=(this.appearance??"alert")==="alert"?"alert":void 0;switch(this.state){case eW.VerificationRequired:return ef`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${t??ev}"
							href="${sc("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${t??ev}"
							href="${sc("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case eW.Community:if(this.featurePreview&&"expired"!==function(e){let t=e?.usages;if(!t?.length)return"eligible";let o=(new Date(t[t.length-1].expiresOn).getTime()-new Date().getTime())/36e5;return t.length<=3&&o>0&&o<24?"active":"expired"}(this.featurePreview))return ef`${this.renderFeaturePreview(this.featurePreview)}`;return ef`<slot name="feature"></slot>
					<p>
						Use on privately-hosted repos requires
						<a href="${t$.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ev}"
							href="${sc("gitlens.plus.signUp",this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${sc("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${tA("day",14)} of
						<a href="${t$.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case eW.TrialExpired:return ef`<slot name="feature"></slot>
					<p>Use on privately-hosted repos requires <a href="${t$.communityVsPro}">GitLens Pro</a>.</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ev}"
							href="${sc("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-gate"}})}"
							>Upgrade to Pro</gl-button
						>
					</p>
					<p>${this.renderPromo()}</p>`;case eW.TrialReactivationEligible:return ef`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ev}"
							href="${sc("gitlens.plus.reactivateProTrial",this.source)}"
							>Continue</gl-button
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${tA("day",14)}!
					</p> `}}renderFeaturePreview(e){let t=(this.appearance??"alert")==="alert"?"alert":void 0,o=e.usages.length;return 0===o?ef`<slot name="feature"></slot>
				<gl-button appearance="${t??ev}" href="${this.featurePreviewCommandLink??ev}"
					>Continue</gl-button
				>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
					repos, or
					<a href="${sc("gitlens.plus.login",this.source)}" title="Sign In">sign in</a
					>.<br />
					${"alert"!==t?ef`<br />`:""} For full access to all GitLens Pro features,
					<a href="${sc("gitlens.plus.signUp",this.source)}"
						>start your free ${14}-day Pro trial</a
					>
					— no credit card required.
				</p> `:ef`
			${this.renderFeaturePreviewStep(e,o)}
			<p class="actions-row">
				<gl-button
					class="inline"
					appearance="${t??ev}"
					href="${this.featurePreviewCommandLink??ev}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${sc("gitlens.plus.login",this.source)}" title="Sign In"
						>sign in</a
					></span
				>
			</p>
			<p>
				After continuing, you will have ${tA("day",3-o,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
				repos.<br />
				${"alert"!==t?ef`<br />`:""} For full access to all GitLens Pro features,
				<a href="${sc("gitlens.plus.signUp",this.source)}"
					>start your free ${14}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"!==e.feature)return ef`<slot name="feature"></slot>`;switch(t){case 1:return ef`<p>Try Commit Search</p>
							<p>
								Search for commits in your repo by author, commit message, SHA, file, change, or type.
								Turn on the commit filter to show only commits that match your query.
							</p>
							<p>
								<img
									src="${this.webroot??""}/media/graph-commit-search.webp"
									style="width:100%"
									alt="Graph Commit Search"
								/>
							</p> `;case 2:return ef`
							<p>Try the Graph Minimap</p>
							<p>
								Visualize the amount of changes to a repository over time, and inspect specific points
								in the history to locate branches, stashes, tags and pull requests.
							</p>
							<p>
								<img
									src="${this.webroot??""}/media/graph-minimap.webp"
									style="width:100%"
									alt="Graph Minimap"
								/>
							</p>
						`;default:return ef`<slot name="feature"></slot>`}}renderPromo(){return ef`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"gate")}
			.source=${this.source}
		></gl-promo>`}};sD.styles=[oi,S`
			:host {
				--gk-action-radius: 0.3rem;
			}

			:host([appearance='welcome']) gl-button:only-child {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button:not(.inline) {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button:not(.inline) {
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

			.actions {
				text-align: center;
			}

			.actions-row {
				display: flex;
				gap: 0.6em;
				align-items: baseline;
				justify-content: center;
				white-space: nowrap;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],sO([eO("gl-button")],sD.prototype,"button",2),sO([ez({type:Object})],sD.prototype,"featurePreview",2),sO([ez({type:String})],sD.prototype,"featurePreviewCommandLink",2),sO([ez({type:String})],sD.prototype,"appearance",2),sO([ez()],sD.prototype,"featureWithArticleIfNeeded",2),sO([tu({context:"promos"})],sD.prototype,"promos",2),sO([ez({type:Object})],sD.prototype,"source",2),sO([ez({attribute:!1,type:Number})],sD.prototype,"state",2),sO([ez({type:String})],sD.prototype,"webroot",2),sD=sO([eS("gl-feature-gate-plus-state")],sD);var sR=Object.defineProperty,sI=Object.getOwnPropertyDescriptor,sM=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sI(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sR(t,o,s),s};let sL=class extends lit_element_i{render(){var e;if(this.hidden||null!=(e=this.state)&&(e===eW.Trial||e===eW.Paid))return;let t=this.appearance??(document.body.getAttribute("data-placement")??"editor")==="editor"?"alert":"welcome";return ef`
			<section>
				<slot></slot>
				<gl-feature-gate-plus-state
					appearance=${t}
					.featurePreview=${this.featurePreview}
					.featurePreviewCommandLink=${this.featurePreviewCommandLink}
					.featureWithArticleIfNeeded=${this.featureWithArticleIfNeeded}
					.source=${this.source}
					.state=${this.state}
					.webroot=${this.webroot}
				>
					<slot name="feature" slot="feature"></slot>
				</gl-feature-gate-plus-state>
			</section>
		`}};sL.styles=[oi,S`
			:host {
				--background: var(--vscode-sideBar-background);
				--foreground: var(--vscode-sideBar-foreground);

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
				/* --link-foreground-active: var(--vscode-foreground); */

				/* --link-foreground: var(--vscode-textLink-foreground); */
				--link-foreground-active: var(--vscode-textLink-activeForeground);

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
		`],sM([ez({reflect:!0})],sL.prototype,"appearance",2),sM([ez({type:Object})],sL.prototype,"featurePreview",2),sM([ez({type:String})],sL.prototype,"featurePreviewCommandLink",2),sM([ez()],sL.prototype,"featureWithArticleIfNeeded",2),sM([ez({type:Object})],sL.prototype,"source",2),sM([ez({attribute:!1,type:Number})],sL.prototype,"state",2),sM([ez({type:String})],sL.prototype,"webroot",2),sL=sM([eS("gl-feature-gate")],sL);var sB=Object.defineProperty,sN=Object.getOwnPropertyDescriptor;let sF=class extends lit_element_i{render(){return ef`<slot></slot>`}};sF.styles=[r6,S`
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
				-webkit-font-smoothing: auto;
			}
		`],sF=((e,t,o,i)=>{for(var r,s=i>1?void 0:i?sN(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sB(t,o,s),s})([eS("menu-label")],sF);var sj=Object.defineProperty,sU=Object.getOwnPropertyDescriptor,sH=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sU(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sj(t,o,s),s};let sq=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return ef`<div class="progress-bar"></div>`}};sq.styles=S`
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
	`,sH([ez({reflect:!0})],sq.prototype,"mode",2),sH([ez({type:Boolean})],sq.prototype,"active",2),sH([ez()],sq.prototype,"position",2),sq=sH([eS("progress-indicator")],sq);let sV=S`
	:host {
		box-sizing: border-box;
		display: flex;
		align-items: center;

		max-width: 100%;
		min-width: 4.6rem;
	}

	* {
		box-sizing: border-box;
	}
`,sW=S`
	code-icon.picker-icon {
		font-size: 1rem;
		/* margin-top: 0.4rem; */
		margin-right: -0.25rem;
	}

	code-icon.picker-icon::before {
		margin-left: -0.4rem;
	}
`,sG=S`
	.truncated-button {
		max-width: 100%;
		min-width: 4rem;
	}
	gl-button[disabled] {
		opacity: 1;
		cursor: default;
	}
	.truncated-button__label {
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;var sK=Object.defineProperty,sZ=Object.getOwnPropertyDescriptor,sY=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sZ(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sK(t,o,s),s};let sX=class extends lit_element_i{constructor(){super(...arguments),this.icon=!1,this.size=13,this.worktree=!1}render(){let e,t;if(null==this.ref)return ev;switch(this.ref.refType){case"branch":e=this.worktree?"worktree":"branch",t=this.worktree?"gl-worktree":"git-branch";break;case"tag":e="tag",t="tag";break;default:e="revision",t="git-commit"}return ef`${this.icon?ef`<code-icon
						class="icon${e?` ${e}`:""}"
						icon="${t}"
						size="${this.size}"
					></code-icon>`:ev}<span class="label">${this.ref.name}</span>`}};sX.styles=S`
		:host {
			box-sizing: border-box;
			display: flex;
			align-content: center;

			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			gap: 0.4rem;
		}

		* {
			box-sizing: border-box;
		}

		.icon.tag,
		.icon.worktree {
			margin-right: 0.1rem;
		}

		.label {
			min-width: 2.4rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-weight: var(--font-weight, bold);
		}
	`,sY([ez({type:Boolean,reflect:!0})],sX.prototype,"icon",2),sY([ez({type:Object})],sX.prototype,"ref",2),sY([ez({type:Number})],sX.prototype,"size",2),sY([ez({type:Boolean})],sX.prototype,"worktree",2),sX=sY([eS("gl-ref-name")],sX);var sQ=Object.defineProperty,sJ=Object.getOwnPropertyDescriptor,s0=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sJ(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sQ(t,o,s),s};let s1=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.icon=!1,this.size=16,this.worktree=!1}render(){return ef`<gl-button appearance="toolbar" href=${this.href??ev} ?disabled=${this.disabled}
			>${null==this.ref?ef`<slot name="empty">&lt;missing&gt;</slot>`:ef`<gl-ref-name
						part="label"
						?icon=${this.icon}
						.ref=${this.ref}
						.size=${this.size}
						?worktree=${this.worktree}
					></gl-ref-name>`}<code-icon
				slot="suffix"
				class="picker-icon"
				icon="chevron-down"
				size="10"
			></code-icon
			><slot name="tooltip" slot="tooltip"></slot
		></gl-button>`}};s1.styles=[sV,S`
			:host {
				--font-weight: normal;
			}

			gl-button {
				max-width: 100%;
			}

			gl-ref-name:not([icon]) {
				padding-left: 0.2rem;
			}
		`,sW],s0([ez({type:Boolean,reflect:!0})],s1.prototype,"disabled",2),s0([ez({type:String,reflect:!0})],s1.prototype,"href",2),s0([ez({type:Boolean,reflect:!0})],s1.prototype,"icon",2),s0([ez({type:Object})],s1.prototype,"ref",2),s0([ez({type:Number})],s1.prototype,"size",2),s0([ez({type:Boolean})],s1.prototype,"worktree",2),s1=s0([eS("gl-ref-button")],s1);let s2=S`
	/*
	:host {
		display: inline-block;
	}
    */

	.indicator {
		box-sizing: border-box;
		display: inline-block;
		border-radius: calc(var(--gl-indicator-size, 0.8rem) * 2);
		width: var(--gl-indicator-size, 0.8rem);
		aspect-ratio: 1;
		background-color: var(--gl-indicator-color);
		vertical-align: text-bottom;
	}
`,s5=S`
	.indicator--pulse {
		animation: 1.5s ease 0s infinite normal none running pulse;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--gl-indicator-pulse-color);
		}
		70% {
			box-shadow: 0 0 0 var(--gl-indicator-size, 0.8rem) transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
`;var s8=Object.defineProperty,s4=Object.getOwnPropertyDescriptor,s3=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?s4(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&s8(t,o,s),s};let s6=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return ef`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};s6.styles=[s2,s5],s3([ez({type:Boolean})],s6.prototype,"pulse",2),s6=s3([eS("gl-indicator")],s6);var s9=Object.defineProperty,s7=Object.getOwnPropertyDescriptor,ne=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?s7(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&s9(t,o,s),s};let nt=class extends GlElement{constructor(){super(...arguments),this.connectIcon=!0,this.disabled=!1,this.icon=!0,this.hasMultipleRepositories=!1,this.expandable=!1}get icons(){if(this.repository?.provider===void 0)return;let e=0;if(this.icon&&e++,this.connectIcon&&this.repository.provider.integration?.connected===!1&&e++,0!==e)return e}get displayName(){return this.repository?.name??"none selected"}render(){return ef`
			${this.renderProviderIcon()}
			<gl-button
				class="truncated-button"
				appearance="toolbar"
				?disabled=${this.disabled}
				@click=${e=>this.emit("gl-click",{event:e,part:"label",repository:this.repository})}
			>
				<span class="truncated-button__label">${this.displayName}</span>
				${this.hasMultipleRepositories?ef`<code-icon
							slot="suffix"
							class="picker-icon"
							icon="chevron-down"
							aria-hidden="true"
						></code-icon>`:ev}
				<slot name="tooltip" slot="tooltip">${this.displayName}</slot>
			</gl-button>
		`}renderProviderIcon(){var e,t,o;if(!this.icon)return ev;let{repository:i}=this;if(!i?.provider)return ef`
				<gl-button part="provider-icon" appearance="toolbar" ?disabled=${!0}>
					<code-icon icon="gl-repository" aria-hidden="true"></code-icon>
				</gl-button>
			`;let{provider:r}=i,s=r.integration?.connected;return ef`<gl-popover placement="bottom" trigger="hover click focus">
				<gl-button
					slot="anchor"
					part="provider-icon"
					appearance="toolbar"
					href=${r.url??ev}
					aria-label=${`Open Repository on ${r.name}`}
					@click=${e=>this.emit("gl-click",{event:e,part:"icon",repository:this.repository})}
				>
					<code-icon
						icon=${"cloud"===r.icon?"cloud":`gl-provider-${r.icon}`}
						aria-hidden="true"
					></code-icon>
					${e=()=>ef`<gl-indicator class="indicator-dot"></gl-indicator>`,s?e(s):void 0}
				</gl-button>
				<span slot="content">
					Open Repository on ${r.name}
					<hr />
					${t=()=>ef`
							<span>
								<code-icon style="margin-top: -3px" icon="check" aria-hidden="true"></code-icon>
								Connected to ${r.name}
							</span>
						`,o=()=>!1!==s?ev:ef`
								<code-icon style="margin-top: -3px" icon="plug" aria-hidden="true"></code-icon>
								<a
									href=${sc("gitlens.plus.cloudIntegrations.connect",{integrationIds:[r.integration.id],source:this.source})}
								>
									Connect to ${i.provider.name}
								</a>
								<span>&mdash; not connected</span>
							`,s?t(s):o?.(s)}
				</span>
			</gl-popover>
			${this.renderConnectIcon()}`}renderConnectIcon(){if(!this.connectIcon)return ev;let{repository:e}=this;if(!e?.provider)return ev;let{provider:t}=e;return t.integration?.connected!==!1?ev:ef`
			<gl-button
				part="connect-icon"
				appearance="toolbar"
				href=${sc("gitlens.plus.cloudIntegrations.connect",{integrationIds:[t.integration.id],source:this.source})}
			>
				<code-icon icon="plug" style="color: var(--titlebar-fg)"></code-icon>
				<span slot="tooltip">
					Connect to ${t.name}
					<hr />
					View pull requests and issues in Home, Commit Graph, Launchpad, autolinks, and more
				</span>
			</gl-button>
		`}};nt.styles=[oi,or,sV,sG,S`
			:host([icons='1']:not([expandable])) {
				min-width: 7rem;
			}

			:host([icons='1'][expandable]) {
				min-width: 0;
			}

			:host([icons='2']:not([expandable])) {
				min-width: 9.4rem;
			}

			:host([icons='2'][expandable]) {
				min-width: 5.6rem;
			}

			.indicator-dot {
				--gl-indicator-color: green;
				--gl-indicator-size: 0.4rem;
				margin-left: -0.2rem;
			}

			/* :host([expandable]) .truncated-button {
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			} */

			:host([expandable]:not(:hover, :focus-within)) .truncated-button .picker-icon::before {
				visibility: hidden;
			}
			:host([expandable]:not(:hover, :focus-within)) .truncated-button {
				min-width: 0;
				max-width: 0;
			}
		`,sW],ne([ez({type:Boolean})],nt.prototype,"connectIcon",2),ne([ez({type:Boolean})],nt.prototype,"disabled",2),ne([ez({type:Boolean})],nt.prototype,"icon",2),ne([ez({type:Object})],nt.prototype,"repository",2),ne([ez({type:Boolean})],nt.prototype,"hasMultipleRepositories",2),ne([ez({type:Object})],nt.prototype,"source",2),ne([ez({type:Boolean,reflect:!0})],nt.prototype,"expandable",2),ne([ez({type:Number,reflect:!0})],nt.prototype,"icons",1),nt=ne([eS("gl-repo-button-group")],nt);var no=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,nr=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?ni(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&no(t,o,s),s};let ns=class extends GlAppHost{constructor(){super(...arguments),this._loading=!1,this.onChooseBaseRef=async e=>{if(e.target.disabled)return;let t=await this._ipc.sendRequest(tn,{scope:this.scope,type:"base"});t?.ref!=null&&this._ipc.sendCommand(th,{scope:this.scope,changes:{base:t.ref}})},this.onChooseHeadRef=async e=>{if(e.target.disabled)return;let t=e.target.getAttribute("location"),o=await this._ipc.sendRequest(tn,{scope:this.scope,type:"head"});if(o?.ref===null){this.config.showAllBranches||this._ipc.sendCommand(tc,{changes:{showAllBranches:!0}});return}if(o?.ref!=null){if("config"===t)return void this._ipc.sendCommand(th,{scope:this.scope,changes:{head:o.ref,base:this.config.showAllBranches?null:void 0}});this._ipc.sendCommand(th,{scope:this.scope,changes:{head:o.ref,base:null}}),this.config.showAllBranches&&this._ipc.sendCommand(tc,{changes:{showAllBranches:!1}})}},this.onChoosePath=async e=>{if(e.stopImmediatePropagation(),null==this.repository||null==this.scope)return;let t=await this._ipc.sendRequest(ta,{repoUri:this.repository.uri,ref:this.head,title:"Select a File or Folder to Visualize",initialPath:"file"===this.scope.type?(0,e4.dirname)(this.scope.relativePath):this.scope.relativePath});t?.picked!=null&&this._ipc.sendCommand(th,{scope:this.scope,changes:{type:t.picked.type,relativePath:t.picked.relativePath},altOrShift:e.altKey||e.shiftKey})},this.onChangeScope=e=>{let t=e.target?.closest("gl-breadcrumb-item-child")??e.target?.closest("gl-breadcrumb-item"),o=t?.getAttribute("type");if(null==o)return;if("repo"===o)return void this._ipc.sendCommand(th,{scope:this.scope,changes:{type:"repo"},altOrShift:e.altKey||e.shiftKey});let i=t?.getAttribute("value");null!=i&&this._ipc.sendCommand(th,{scope:this.scope,changes:{type:o,relativePath:i},altOrShift:e.altKey||e.shiftKey})}}createStateProvider(e,t){return new TimelineStateProvider(this,e,t)}onPersistState(e){this._ipc.setPersistedState({config:e.config,scope:e.scope})}connectedCallback(){super.connectedCallback?.(),eq=this.state.config.abbreviatedShaLength}get allowed(){return this.state.access?.allowed??!1}get base(){return this.scope?.base??this.repository?.ref}get config(){return this.state.config}get head(){return this.scope?.head??this.repository?.ref}get repository(){return this.state.repository}get scope(){return this.state.scope}get isShowAllBranchesSupported(){return!this.repository?.virtual}get isSliceBySupported(){return!this.repository?.virtual&&(this.scope?.type==="file"||this.scope?.type==="folder")}get sliceBy(){return this.isSliceBySupported&&this.config.showAllBranches?this.config.sliceBy:"author"}get subscription(){return this.state.access?.subscription?.current}renderGate(){return"editor"===this.placement?ef`<gl-feature-gate
				?hidden=${!1!==this.allowed}
				.source=${{source:"timeline",detail:"gate"}}
				.state=${this.subscription?.state}
				><p slot="feature">
					<a href="https://help.gitkraken.com/gitlens/gitlens-features/#visual-file-history-pro"
						>Visual History</a
					>
					<gl-feature-badge></gl-feature-badge>
					&mdash; visualize the evolution of a repository, branch, folder, or file and identify when the most
					impactful changes were made and by whom. Quickly see unmerged changes in files or folders, when
					slicing by branch.
				</p></gl-feature-gate
			>`:ef`<gl-feature-gate
			?hidden=${!1!==this.allowed}
			.source=${{source:"timeline",detail:"gate"}}
			.state=${this.subscription?.state}
			><p slot="feature">
				<a href="https://help.gitkraken.com/gitlens/gitlens-features/#visual-file-history-pro"
					>Visual File History</a
				>
				<gl-feature-badge></gl-feature-badge>
				&mdash; visualize the evolution of a file and quickly identify when the most impactful changes were made
				and by whom. Quickly see unmerged changes in files or folders, when slicing by branch.
			</p></gl-feature-gate
		>`}render(){return ef`${this.renderGate()}
			<div class="container">
				<progress-indicator ?active=${this._loading}></progress-indicator>
				<header class="header" ?hidden=${!this.scope}>
					<span class="details">${this.renderBreadcrumbs()} ${this.renderTimeframe()}</span>
					<span class="toolbox">
						${this.renderConfigPopover()}
						${"view"===this.placement?ef`<gl-button
									appearance="toolbar"
									href="command:gitlens.views.timeline.openInTab"
									tooltip="Open in Editor"
									aria-label="Open in Editor"
								>
									<code-icon icon="link-external"></code-icon>
								</gl-button>`:ev}
						${null==this.subscription||!e5(this.subscription)?ef`<gl-feature-badge
									placement="bottom"
									.source=${{source:"timeline",detail:"badge"}}
									.subscription=${this.subscription}
								></gl-feature-badge>`:ev}
					</span>
				</header>

				<main class="timeline">${this.renderChart()}</main>
			</div> `}renderBreadcrumbs(){return ef`<gl-breadcrumbs>
			${this.renderRepositoryBreadcrumbItem()}
			${this.renderBranchBreadcrumbItem()}${this.renderBreadcrumbPathItems()}
			${"editor"===this.placement?ef`<gl-button
						appearance="toolbar"
						density="compact"
						@click=${this.onChoosePath}
						tooltip="Choose File or Folder to Visualize..."
						aria-label="Choose File or Folder to Visualize..."
						><code-icon slot="prefix" icon="folder-opened"></code-icon>Choose File / Folder...</gl-button
					>`:ev}
		</gl-breadcrumbs>`}renderRepositoryBreadcrumbItem(){let e=this.state.repository;return null==e?ev:ef`<gl-breadcrumb-item
			collapsibleState="${this.state.scope?.relativePath?"collapsed":"expanded"}"
			icon="gl-repository"
			shrink="10000000"
			type="repo"
		>
			<gl-repo-button-group
				aria-label="Visualize Repository History"
				.connectIcon=${!1}
				.hasMultipleRepositories=${this.state.repositories.openCount>1}
				.icon=${!1}
				.repository=${e}
				.source=${{source:"timeline"}}
				@gl-click=${this.onChangeScope}
				><span slot="tooltip">
					Visualize Repository History
					<hr />
					${e.name}
				</span></gl-repo-button-group
			>
		</gl-breadcrumb-item>`}renderBranchBreadcrumbItem(){let{head:e,config:{showAllBranches:t}}=this;return ef`<gl-breadcrumb-item
			collapsibleState="expanded"
			icon="${t?"git-branch":function(e){switch(e?.refType){case"branch":return"git-branch";case"tag":return"tag";default:return"git-commit"}}(e)}"
			shrink="100000"
			type="ref"
		>
			<gl-ref-button .ref=${t?void 0:e} @click=${this.onChooseHeadRef}
				><span slot="empty">All Branches</span
				><span slot="tooltip"
					>Change Reference...
					<hr />
					${t?"Showing All Branches":ef`<gl-ref-name icon .ref=${e}></gl-ref-name>`}</span
				></gl-ref-button
			>
		</gl-breadcrumb-item>`}renderBreadcrumbPathItems(){let e=this.state.scope?.relativePath;if(!e)return ev;let t=[],o=e.split("/"),i=o.pop()||"",r=o.length;if(r){let e=o.shift(),i=e,r=ef`
				<gl-breadcrumb-item
					collapsibleState="expanded"
					icon="folder"
					type="${"folder"}"
					value="${e}"
				>
					<gl-button
						appearance="toolbar"
						@click=${this.onChangeScope}
						aria-label="Visualize folder history of ${e}"
						>${e}<span slot="tooltip"
							>Visualize Folder History
							<hr />
							${e}</span
						></gl-button
					>

					${o.length?ef`<span slot="children" class="breadcrumb-item-children">
								${o.map(e=>(i=`${i}/${e}`,ef`<gl-breadcrumb-item-child
										type="${"folder"}"
										value="${i}"
									>
										<gl-button
											appearance="toolbar"
											@click=${this.onChangeScope}
											aria-label="Visualize folder history of ${i}"
											>${e}<span slot="tooltip"
												>Visualize Folder History
												<hr />
												${i}</span
											></gl-button
										>
									</gl-breadcrumb-item-child>`))}
							</span>`:ev}
				</gl-breadcrumb-item>
			`;t.push(r)}return t.push(ef`
			<gl-breadcrumb-item
				collapsibleState="none"
				icon="${(this.scope?.type==="folder"?r?void 0:"folder":"file")??ev}"
				shrink="0"
				tooltip="${e}"
				type="${this.scope?.type==="folder"?"folder":"file"}"
				value="${e}"
			>
				<gl-copy-container
					tabindex="0"
					copyLabel="Copy Path&#10;&#10;${e}"
					.content=${e}
					placement="bottom"
				>
					<span>${i}</span>
				</gl-copy-container>
			</gl-breadcrumb-item>
		`),t}renderChart(){return this.scope||"view"!==this.placement?ef`<gl-timeline-chart
			id="chart"
			placement="${this.placement}"
			dateFormat="${this.state.config.dateFormat}"
			.dataPromise=${this.state.dataset}
			head="${this.head?.ref??"HEAD"}"
			.scope=${this.scope}
			shortDateFormat="${this.state.config.shortDateFormat}"
			sliceBy="${this.sliceBy}"
			@gl-commit-select=${this.onChartCommitSelected}
			@gl-loading=${e=>{this._loading=!0,e.detail.finally(()=>this._loading=!1)}}
		>
			<div slot="empty">
				${null==this.scope?ef`<p>Something went wrong</p>
							<p>Please close this tab and try again</p>`:ef`<p>No commits found for the specified time period</p>
							${this.renderPeriodSelect(this.state.config.period)}`}
			</div>
		</gl-timeline-chart>`:ef`<div class="timeline__empty">
				<p>There are no editors open that can provide file history information.</p>
			</div>`}renderConfigPopover(){let{config:{period:e}}=this;return ef`<gl-popover class="config" placement="bottom" trigger="hover focus click" hoist>
			<gl-button slot="anchor" appearance="toolbar">
				<code-icon icon="settings"></code-icon>
			</gl-button>
			<div slot="content" class="config__content">
				<menu-label>View Options</menu-label>
				${this.renderConfigHead()} ${this.renderConfigBase()} ${this.renderConfigShowAllBranches()}
				${this.renderPeriodSelect(e)} ${this.renderConfigSliceBy()}
			</div>
		</gl-popover>`}renderConfigHead(){let{head:e}=this,t=this.config.showAllBranches&&"branch"!==this.sliceBy;return ef`<section>
			<label for="head" ?disabled=${t}>Branch</label>
			<gl-ref-button
				name="head"
				?disabled=${t}
				icon
				.ref=${e}
				location="config"
				@click=${this.onChooseHeadRef}
				><span slot="tooltip"
					>Change Reference...
					<hr />
					${this.config.showAllBranches?"Showing All Branches":ef`<gl-ref-name icon .ref=${e}></gl-ref-name>`}</span
				></gl-ref-button
			>
		</section>`}renderConfigBase(){return ev}renderConfigShowAllBranches(){if(this.repository?.virtual)return ev;let{config:{showAllBranches:e}}=this;return ef`<section>
			<gl-checkbox
				value="all"
				.checked=${e}
				@gl-change-value=${e=>{this._ipc.sendCommand(tc,{changes:{showAllBranches:e.target.checked}})}}
				>View All Branches</gl-checkbox
			>
		</section>`}renderPeriodSelect(e){return ef`<section>
			<span class="select-container">
				<label for="periods">Timeframe</label>
				<select class="select" name="periods" position="below" .value=${e} @change=${this.onPeriodChanged}>
					<option value="7|D" ?selected=${"7|D"===e}>1 week</option>
					<option value="1|M" ?selected=${"1|M"===e}>1 month</option>
					<option value="3|M" ?selected=${"3|M"===e}>3 months</option>
					<option value="6|M" ?selected=${"6|M"===e}>6 months</option>
					<option value="9|M" ?selected=${"9|M"===e}>9 months</option>
					<option value="1|Y" ?selected=${"1|Y"===e}>1 year</option>
					<option value="2|Y" ?selected=${"2|Y"===e}>2 years</option>
					<option value="4|Y" ?selected=${"4|Y"===e}>4 years</option>
					<option value="all" ?selected=${"all"===e}>Full history</option>
				</select>
			</span>
		</section>`}renderConfigSliceBy(){if(!this.isSliceBySupported)return ev;let{sliceBy:e}=this;return ef`<section>
			<span class="select-container"
				><label for="sliceBy">Slice By</label>
				<select
					class="select"
					name="sliceBy"
					position="below"
					.value=${e}
					@change=${this.onSliceByChanged}
				>
					<option value="author" ?selected=${"author"===e}>Author</option>
					<option value="branch" ?selected=${"branch"===e}>Branch</option>
				</select></span
			>
		</section>`}renderTimeframe(){let e;switch(this.config.period){case"7|D":e="Up to 1wk ago";break;case"1|M":e="Up to 1mo ago";break;case"3|M":e="Up to 3mo ago";break;case"6|M":e="Up to 6mo ago";break;case"9|M":e="Up to 9mo ago";break;case"1|Y":e="Up to 1yr ago";break;case"2|Y":e="Up to 2yr ago";break;case"4|Y":e="Up to 4yr ago";break;case"all":e="All time";break;default:return ev}return ef`<span class="details__timeframe" tabindex="0">${e}</span>`}onChartCommitSelected(e){null!=e.detail.id&&this.fireSelectDataPoint(e.detail)}onPeriodChanged(e){let t=e.target,o=t.options[t.selectedIndex].value;(function(e){if("all"===e)return;let[t,o]=e.split("|");if(isNaN(Number(t))||"D"!==o&&"M"!==o&&"Y"!==o)throw Error(`Invalid period: ${e}`)})(o),this._ipc.sendCommand(tc,{changes:{period:o}})}onSliceByChanged(e){let t=e.target,o=t.options[t.selectedIndex].value;(function(e){if("author"!==e&&"branch"!==e)throw Error(`Invalid slice by: ${e}`)})(o),this._ipc.sendCommand(tc,{changes:{sliceBy:o}})}fireSelectDataPoint(e){let{scope:t}=this;null!=t&&(this._fireSelectDataPointDebounced??=e8(e=>this._ipc.sendCommand(tl,{scope:t,...e}),250,{maxWait:"file"===t.type?500:void 0}),this._fireSelectDataPointDebounced(e))}};ns.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ns.styles=[oi,or,os,on],nr([eO("#chart")],ns.prototype,"_chart",2),nr([eE()],ns.prototype,"_loading",2),ns=nr([eS("gl-timeline-app")],ns);export{ns as GlTimelineApp};