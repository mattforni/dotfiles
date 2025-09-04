let e,t,r,o,i,a,s,c,u,h,d,p,f;var g,m,b,v={602:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},1169:(e,t,r)=>{var o,i,a=r(2026),s=r(8975),c=r(6723);function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var E=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var O=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function P(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=$&&e[$]||e["@@iterator"])?e:null}var D,A,B=Symbol.for("react.client.reference"),W=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=Object.assign;function G(e){if(void 0===D)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||"",A=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+D+e+A}var j=!1;function U(e,t){if(!e||j)return"";j=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var r=function(){throw Error()};if(Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(r,[])}catch(e){var o=e}Reflect.construct(e,[],r)}else{try{r.call()}catch(e){o=e}e.call(r.prototype)}}else{try{throw Error()}catch(e){o=e}(r=e())&&"function"==typeof r.catch&&r.catch(function(){})}}catch(e){if(e&&o&&"string"==typeof e.stack)return[e.stack,o.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=o.DetermineComponentFrameRoot(),s=a[0],c=a[1];if(s&&c){var u=s.split(`
`),h=c.split(`
`);for(i=o=0;o<u.length&&!u[o].includes("DetermineComponentFrameRoot");)o++;for(;i<h.length&&!h[i].includes("DetermineComponentFrameRoot");)i++;if(o===u.length||i===h.length)for(o=u.length-1,i=h.length-1;1<=o&&0<=i&&u[o]!==h[i];)i--;for(;1<=o&&0<=i;o--,i--)if(u[o]!==h[i]){if(1!==o||1!==i)do if(o--,i--,0>i||u[o]!==h[i]){var d=`
`+u[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=i)break}}}finally{j=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?G(r):""}function V(e){try{var t="";do t+=function(e){switch(e.tag){case 26:case 27:case 5:return G(e.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 15:return U(e.type,!1);case 11:return U(e.type.render,!1);case 1:return U(e.type,!0);default:return""}}(e),e=e.return;while(e)return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function Z(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(r=t.return),e=t.return;while(e)}return 3===t.tag?r:null}function K(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function Q(e){if(Z(e)!==e)throw Error(u(188))}var X=Array.isArray,J=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},et=[],er=-1;function en(e){return{current:e}}function ei(e){0>er||(e.current=et[er],et[er]=null,er--)}function ea(e,t){et[++er]=e.current,e.current=t}var es=en(null),el=en(null),ec=en(null),eu=en(null);function eh(e,t){switch(ea(ec,t),ea(el,e),ea(es,null),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?cO(t):0;break;default:if(t=(e=8===e?t.parentNode:t).tagName,e=e.namespaceURI)t=c$(e=cO(e),t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ei(es),ea(es,t)}function ed(){ei(es),ei(el),ei(ec)}function ep(e){null!==e.memoizedState&&ea(eu,e);var t=es.current,r=c$(t,e.type);t!==r&&(ea(el,e),ea(es,r))}function ef(e){el.current===e&&(ei(es),ei(el)),eu.current===e&&(ei(eu),ua._currentValue=ee)}var eg=Object.prototype.hasOwnProperty,em=a.unstable_scheduleCallback,eb=a.unstable_cancelCallback,ev=a.unstable_shouldYield,ey=a.unstable_requestPaint,ew=a.unstable_now,eS=a.unstable_getCurrentPriorityLevel,ex=a.unstable_ImmediatePriority,eC=a.unstable_UserBlockingPriority,ek=a.unstable_NormalPriority,e_=a.unstable_LowPriority,eR=a.unstable_IdlePriority,eT=a.log,eE=a.unstable_setDisableYieldValue,eM=null,eO=null;function e$(e){if("function"==typeof eT&&eE(e),eO&&"function"==typeof eO.setStrictMode)try{eO.setStrictMode(eM,e)}catch{}}var eI=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(ez(e)/eP|0)|0},ez=Math.log,eP=Math.LN2,eD=128,eA=4194304;function eL(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194176&e;case 4194304:case 8388608:case 0x1000000:case 0x2000000:return 0x3c00000&e;case 0x4000000:return 0x4000000;case 0x8000000:return 0x8000000;case 0x10000000:return 0x10000000;case 0x20000000:return 0x20000000;case 0x40000000:return 0;default:return e}}function eN(e,t){var r=e.pendingLanes;if(0===r)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,s=e.warmLanes;e=0!==e.finishedLanes;var c=0x7ffffff&r;return 0!==c?0!=(r=c&~i)?o=eL(r):0!=(a&=c)?o=eL(a):e||0!=(s=c&~s)&&(o=eL(s)):0!=(c=r&~i)?o=eL(c):0!==a?o=eL(a):e||0!=(s=r&~s)&&(o=eL(s)),0===o?0:0!==t&&t!==o&&0==(t&i)&&((i=o&-o)>=(s=t&-t)||32===i&&0!=(4194176&s))?t:o}function eH(e,t){return 0==(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function eB(){var e=eD;return 0==(4194176&(eD<<=1))&&(eD=128),e}function eW(){var e=eA;return 0==(0x3c00000&(eA<<=1))&&(eA=4194304),e}function eF(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function eG(e,t){e.pendingLanes|=t,0x10000000!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ej(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-eI(t);e.entangledLanes|=t,e.entanglements[o]=0x40000000|e.entanglements[o]|4194218&r}function eU(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-eI(r),i=1<<o;i&t|e[o]&t&&(e[o]|=t),r&=~i}}function eV(e){return 2<(e&=-e)?8<e?0!=(0x7ffffff&e)?32:0x10000000:8:2}function eq(){var e=J.p;return 0!==e?e:void 0===(e=window.event)?32:uy(e.type)}var eZ=Math.random().toString(36).slice(2),eK="__reactFiber$"+eZ,eY="__reactProps$"+eZ,eQ="__reactContainer$"+eZ,eX="__reactEvents$"+eZ,eJ="__reactListeners$"+eZ,e0="__reactHandles$"+eZ,e1="__reactResources$"+eZ,e2="__reactMarker$"+eZ;function e5(e){delete e[eK],delete e[eY],delete e[eX],delete e[eJ],delete e[e0]}function e3(e){var t=e[eK];if(t)return t;for(var r=e.parentNode;r;){if(t=r[eQ]||r[eK]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=cF(e);null!==e;){if(r=e[eK])return r;e=cF(e)}return t}r=(e=r).parentNode}return null}function e6(e){if(e=e[eK]||e[eQ]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function e4(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(u(33))}function e8(e){var t=e[e1];return t||(t=e[e1]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function e7(e){e[e2]=!0}var e9=new Set,te={};function tt(e,t){tr(e,t),tr(e+"Capture",t)}function tr(e,t){for(te[e]=t,e=0;e<t.length;e++)e9.add(t[e])}var to="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,tn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ti={},ta={};function ts(e,t,r){if(eg.call(ta,t)||!eg.call(ti,t)&&(tn.test(t)?ta[t]=!0:(ti[t]=!0,!1)))if(null===r)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if("data-"!==o&&"aria-"!==o)return void e.removeAttribute(t)}e.setAttribute(t,""+r)}}function tl(e,t,r){if(null===r)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function tc(e,t,r,o){if(null===o)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+o)}}function tu(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function th(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function td(e){e._valueTracker||(e._valueTracker=function(e){var t=th(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==r&&"function"==typeof r.get&&"function"==typeof r.set){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){o=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(e){o=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function tp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=th(e)?e.checked?"true":"false":e.value),(e=o)!==r&&(t.setValue(e),!0)}function tf(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch{return e.body}}var tg=/[\n"\\]/g;function tm(e){return e.replace(tg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function tb(e,t,r,o,i,a,s,c){e.name="",null!=s&&"function"!=typeof s&&"symbol"!=typeof s&&"boolean"!=typeof s?e.type=s:e.removeAttribute("type"),null!=t?"number"===s?(0===t&&""===e.value||e.value!=t)&&(e.value=""+tu(t)):e.value!==""+tu(t)&&(e.value=""+tu(t)):"submit"!==s&&"reset"!==s||e.removeAttribute("value"),null!=t?ty(e,s,tu(t)):null!=r?ty(e,s,tu(r)):null!=o&&e.removeAttribute("value"),null==i&&null!=a&&(e.defaultChecked=!!a),null!=i&&(e.checked=i&&"function"!=typeof i&&"symbol"!=typeof i),null!=c&&"function"!=typeof c&&"symbol"!=typeof c&&"boolean"!=typeof c?e.name=""+tu(c):e.removeAttribute("name")}function tv(e,t,r,o,i,a,s,c){if(null!=a&&"function"!=typeof a&&"symbol"!=typeof a&&"boolean"!=typeof a&&(e.type=a),null!=t||null!=r){if(("submit"===a||"reset"===a)&&null==t)return;r=null!=r?""+tu(r):"",t=null!=t?""+tu(t):r,c||t===e.value||(e.value=t),e.defaultValue=t}o="function"!=typeof(o=null!=o?o:i)&&"symbol"!=typeof o&&!!o,e.checked=c?e.checked:!!o,e.defaultChecked=!!o,null!=s&&"function"!=typeof s&&"symbol"!=typeof s&&"boolean"!=typeof s&&(e.name=s)}function ty(e,t,r){"number"===t&&tf(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function tw(e,t,r,o){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&o&&(e[r].defaultSelected=!0)}else{for(i=0,r=""+tu(r),t=null;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function tS(e,t,r){if(null!=t&&((t=""+tu(t))!==e.value&&(e.value=t),null==r)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=null!=r?""+tu(r):""}function tx(e,t,r,o){if(null==t){if(null!=o){if(null!=r)throw Error(u(92));if(X(o)){if(1<o.length)throw Error(u(93));o=o[0]}r=o}null==r&&(r=""),t=r}e.defaultValue=r=tu(t),(o=e.textContent)===r&&""!==o&&null!==o&&(e.value=o)}function tC(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType){r.nodeValue=t;return}}e.textContent=t}var tk=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function t_(e,t,r){var o=0===t.indexOf("--");null==r||"boolean"==typeof r||""===r?o?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":o?e.setProperty(t,r):"number"!=typeof r||0===r||tk.has(t)?"float"===t?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function tR(e,t,r){if(null!=t&&"object"!=typeof t)throw Error(u(62));if(e=e.style,null!=r){for(var o in r)!r.hasOwnProperty(o)||null!=t&&t.hasOwnProperty(o)||(0===o.indexOf("--")?e.setProperty(o,""):"float"===o?e.cssFloat="":e[o]="");for(var i in t)o=t[i],t.hasOwnProperty(i)&&r[i]!==o&&t_(e,i,o)}else for(var a in t)t.hasOwnProperty(a)&&t_(e,a,t[a])}function tT(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function t$(e){return tM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var tI=null;function tz(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var tP=null,tD=null;function tA(e){var t=e6(e);if(t&&(e=t.stateNode)){var r=e[eY]||null;switch(e=t.stateNode,t.type){case"input":if(tb(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+tm(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var i=o[eY]||null;if(!i)throw Error(u(90));tb(o,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<r.length;t++)(o=r[t]).form===e.form&&tp(o)}break;case"textarea":tS(e,r.value,r.defaultValue);break;case"select":null!=(t=r.value)&&tw(e,!!r.multiple,t,!1)}}}var tL=!1;function tN(e,t,r){if(tL)return e(t,r);tL=!0;try{return e(t)}finally{if(tL=!1,(null!==tP||null!==tD)&&(lx(),tP&&(t=tP,e=tD,tD=tP=null,tA(t),e)))for(t=0;t<e.length;t++)tA(e[t])}}function tH(e,t){var r=e.stateNode;if(null===r)return null;var o=r[eY]||null;if(null===o)return null;switch(r=o[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(o="button"!==(e=e.type)&&"input"!==e&&"select"!==e&&"textarea"!==e),e=!o;break;default:e=!1}if(e)return null;if(r&&"function"!=typeof r)throw Error(u(231,t,typeof r));return r}var tB=!1;if(to)try{var tW={};Object.defineProperty(tW,"passive",{get:function(){tB=!0}}),window.addEventListener("test",tW,tW),window.removeEventListener("test",tW,tW)}catch{tB=!1}var tF=null,tG=null,tj=null;function tU(){if(tj)return tj;var e,t,r=tG,o=r.length,i="value"in tF?tF.value:tF.textContent,a=i.length;for(e=0;e<o&&r[e]===i[e];e++);var s=o-e;for(t=1;t<=s&&r[o-t]===i[a-t];t++);return tj=i.slice(e,1<t?1-t:void 0)}function tV(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function tq(){return!0}function tZ(){return!1}function tK(e){function t(t,r,o,i,a){for(var s in this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?tq:tZ,this.isPropagationStopped=tZ,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=tq)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=tq)},persist:function(){},isPersistent:tq}),t}var tY,tQ,tX,tJ={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},t0=tK(tJ),t1=F({},tJ,{view:0,detail:0}),t3=tK(t1),t6=F({},t1,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tX&&(tX&&"mousemove"===e.type?(tY=e.screenX-tX.screenX,tQ=e.screenY-tX.screenY):tQ=tY=0,tX=e),tY)},movementY:function(e){return"movementY"in e?e.movementY:tQ}}),t4=tK(t6),t8=tK(F({},t6,{dataTransfer:0})),t7=tK(F({},t1,{relatedTarget:0})),t9=tK(F({},tJ,{animationName:0,elapsedTime:0,pseudoElement:0})),re=tK(F({},tJ,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),rt=tK(F({},tJ,{data:0})),rr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ro={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ri(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=rn[e])&&!!t[e]}function ra(){return ri}var rs=tK(F({},t1,{key:function(e){if(e.key){var t=rr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tV(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?ro[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(e){return"keypress"===e.type?tV(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tV(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),rl=tK(F({},t6,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rc=tK(F({},t1,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra})),ru=tK(F({},tJ,{propertyName:0,elapsedTime:0,pseudoElement:0})),rh=tK(F({},t6,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),rd=tK(F({},tJ,{newState:0,oldState:0})),rp=[9,13,27,32],rf=to&&"CompositionEvent"in window,rg=null;to&&"documentMode"in document&&(rg=document.documentMode);var rm=to&&"TextEvent"in window&&!rg,rb=to&&(!rf||rg&&8<rg&&11>=rg),rv=!1;function ry(e,t){switch(e){case"keyup":return -1!==rp.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rw(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var rS=!1,rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rC(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!rx[e.type]:"textarea"===t}function rk(e,t,r,o){tP?tD?tD.push(o):tD=[o]:tP=o,0<(t=cm(t,"onChange")).length&&(r=new t0("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var r_=null,rR=null;function rT(e){cl(e,0)}function rE(e){if(tp(e4(e)))return e}function rM(e,t){if("change"===e)return t}var rO=!1;if(to){if(to){var r$="oninput"in document;if(!r$){var rI=document.createElement("div");rI.setAttribute("oninput","return;"),r$="function"==typeof rI.oninput}o=r$}else o=!1;rO=o&&(!document.documentMode||9<document.documentMode)}function rz(){r_&&(r_.detachEvent("onpropertychange",rP),rR=r_=null)}function rP(e){if("value"===e.propertyName&&rE(rR)){var t=[];rk(t,rR,e,tz(e)),tN(rT,t)}}function rD(e,t,r){"focusin"===e?(rz(),r_=t,rR=r,r_.attachEvent("onpropertychange",rP)):"focusout"===e&&rz()}function rA(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return rE(rR)}function rL(e,t){if("click"===e)return rE(t)}function rN(e,t){if("input"===e||"change"===e)return rE(t)}var rH="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function rB(e,t){if(rH(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var i=r[o];if(!eg.call(t,i)||!rH(e[i],t[i]))return!1}return!0}function rW(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rF(e,t){var r,o=rW(e);for(e=0;o;){if(3===o.nodeType){if(r=e+o.textContent.length,e<=t&&r>=t)return{node:o,offset:t-e};e=r}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=rW(o)}}function rG(e){e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window;for(var t=tf(e.document);t instanceof e.HTMLIFrameElement;){try{var r="string"==typeof t.contentWindow.location.href}catch{r=!1}if(r)e=t.contentWindow;else break;t=tf(e.document)}return t}function rj(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var rU=to&&"documentMode"in document&&11>=document.documentMode,rV=null,rq=null,rZ=null,rK=!1;function rY(e,t,r){var o=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;rK||null==rV||rV!==tf(o)||(o="selectionStart"in(o=rV)&&rj(o)?{start:o.selectionStart,end:o.selectionEnd}:{anchorNode:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset},rZ&&rB(rZ,o)||(rZ=o,0<(o=cm(rq,"onSelect")).length&&(t=new t0("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=rV)))}function rQ(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var rX={animationend:rQ("Animation","AnimationEnd"),animationiteration:rQ("Animation","AnimationIteration"),animationstart:rQ("Animation","AnimationStart"),transitionrun:rQ("Transition","TransitionRun"),transitionstart:rQ("Transition","TransitionStart"),transitioncancel:rQ("Transition","TransitionCancel"),transitionend:rQ("Transition","TransitionEnd")},rJ={},r0={};function r1(e){if(rJ[e])return rJ[e];if(!rX[e])return e;var t,r=rX[e];for(t in r)if(r.hasOwnProperty(t)&&t in r0)return rJ[e]=r[t];return e}to&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete rX.animationend.animation,delete rX.animationiteration.animation,delete rX.animationstart.animation),"TransitionEvent"in window||delete rX.transitionend.transition);var r2=r1("animationend"),r5=r1("animationiteration"),r3=r1("animationstart"),r6=r1("transitionrun"),r4=r1("transitionstart"),r8=r1("transitioncancel"),r7=r1("transitionend"),r9=new Map,oe="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ot(e,t){r9.set(e,t),tt(t,[e])}var or=[],oo=0,on=0;function oi(){for(var e=oo,t=on=oo=0;t<e;){var r=or[t];or[t++]=null;var o=or[t];or[t++]=null;var i=or[t];or[t++]=null;var a=or[t];if(or[t++]=null,null!==o&&null!==i){var s=o.pending;null===s?i.next=i:(i.next=s.next,s.next=i),o.pending=i}0!==a&&oc(r,i,a)}}function oa(e,t,r,o){or[oo++]=e,or[oo++]=t,or[oo++]=r,or[oo++]=o,on|=o,e.lanes|=o,null!==(e=e.alternate)&&(e.lanes|=o)}function os(e,t,r,o){return oa(e,t,r,o),ou(e)}function ol(e,t){return oa(e,null,null,t),ou(e)}function oc(e,t,r){e.lanes|=r;var o=e.alternate;null!==o&&(o.lanes|=r);for(var i=!1,a=e.return;null!==a;)a.childLanes|=r,null!==(o=a.alternate)&&(o.childLanes|=r),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(i=!0)),e=a,a=a.return;i&&null!==t&&3===e.tag&&(a=e.stateNode,i=31-eI(r),null===(e=(a=a.hiddenUpdates)[i])?a[i]=[t]:e.push(t),t.lane=0x20000000|r)}function ou(e){if(50<lh)throw lh=0,lp=null,Error(u(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var oh={},od=new WeakMap;function op(e,t){if("object"==typeof e&&null!==e){var r=od.get(e);return void 0!==r?r:(t={value:e,source:t,stack:V(t)},od.set(e,t),t)}return{value:e,source:t,stack:V(t)}}var of=[],og=0,om=null,ob=0,ov=[],oy=0,ow=null,oS=1,ox="";function oC(e,t){of[og++]=ob,of[og++]=om,om=e,ob=t}function ok(e,t,r){ov[oy++]=oS,ov[oy++]=ox,ov[oy++]=ow,ow=e;var o=oS;e=ox;var i=32-eI(o)-1;o&=~(1<<i),r+=1;var a=32-eI(t)+i;if(30<a){var s=i-i%5;a=(o&(1<<s)-1).toString(32),o>>=s,i-=s,oS=1<<32-eI(t)+i|r<<i|o,ox=a+e}else oS=1<<a|r<<i|o,ox=e}function o_(e){null!==e.return&&(oC(e,1),ok(e,1,0))}function oR(e){for(;e===om;)om=of[--og],of[og]=null,ob=of[--og],of[og]=null;for(;e===ow;)ow=ov[--oy],ov[oy]=null,ox=ov[--oy],ov[oy]=null,oS=ov[--oy],ov[oy]=null}var oT=null,oE=null,oM=!1,oO=null,o$=!1,oI=Error(u(519));function oz(e){throw oN(op(Error(u(418,"")),e)),oI}function oP(e){var t=e.stateNode,r=e.type,o=e.memoizedProps;switch(t[eK]=e,t[eY]=o,r){case"dialog":cc("cancel",t),cc("close",t);break;case"iframe":case"object":case"embed":cc("load",t);break;case"video":case"audio":for(r=0;r<ca.length;r++)cc(ca[r],t);break;case"source":cc("error",t);break;case"img":case"image":case"link":cc("error",t),cc("load",t);break;case"details":cc("toggle",t);break;case"input":cc("invalid",t),tv(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),td(t);break;case"select":cc("invalid",t);break;case"textarea":cc("invalid",t),tx(t,o.value,o.defaultValue,o.children),td(t)}"string"!=typeof(r=o.children)&&"number"!=typeof r&&"bigint"!=typeof r||t.textContent===""+r||!0===o.suppressHydrationWarning||cx(t.textContent,r)?(null!=o.popover&&(cc("beforetoggle",t),cc("toggle",t)),null!=o.onScroll&&cc("scroll",t),null!=o.onScrollEnd&&cc("scrollend",t),null!=o.onClick&&(t.onclick=cC),t=!0):t=!1,t||oz(e)}function oD(e){for(oT=e.return;oT;)switch(oT.tag){case 3:case 27:o$=!0;return;case 5:case 13:o$=!1;return;default:oT=oT.return}}function oA(e){if(e!==oT)return!1;if(!oM)return oD(e),oM=!0,!1;var t,r=!1;if((t=3!==e.tag&&27!==e.tag)&&((t=5===e.tag)&&(t="form"===(t=e.type)||"button"===t||cI(e.type,e.memoizedProps)),t=!t),t&&(r=!0),r&&oE&&oz(e),oD(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(u(317));e:{for(r=0,e=e.nextSibling;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===r){oE=cW(e.nextSibling);break e}r--}else"$"!==t&&"$!"!==t&&"$?"!==t||r++;e=e.nextSibling}oE=null}}else oE=oT?cW(e.stateNode.nextSibling):null;return!0}function oL(){oE=oT=null,oM=!1}function oN(e){null===oO?oO=[e]:oO.push(e)}var oH=Error(u(460)),oB=Error(u(474)),oW={then:function(){}};function oF(e){return"fulfilled"===(e=e.status)||"rejected"===e}function oG(){}function oj(e,t,r){switch(void 0===(r=e[r])?e.push(t):r!==t&&(t.then(oG,oG),t=r),t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===oH)throw Error(u(483));throw e;default:if("string"==typeof t.status)t.then(oG,oG);else{if(null!==(e=sj)&&100<e.shellSuspendCounter)throw Error(u(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var r=t;r.status="fulfilled",r.value=e}},function(e){if("pending"===t.status){var r=t;r.status="rejected",r.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===oH)throw Error(u(483));throw e}throw oU=t,oH}}var oU=null;function oV(){if(null===oU)throw Error(u(459));var e=oU;return oU=null,e}var oq=null,oZ=0;function oK(e){var t=oZ;return oZ+=1,null===oq&&(oq=[]),oj(oq,e,t)}function oY(e,t){e.ref=void 0!==(t=t.props.ref)?t:null}function oQ(e,t){if(t.$$typeof===h)throw Error(u(525));throw Error(u(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oX(e){return(0,e._init)(e._payload)}function oJ(e){function t(t,r){if(e){var o=t.deletions;null===o?(t.deletions=[r],t.flags|=16):o.push(r)}}function r(r,o){if(!e)return null;for(;null!==o;)t(r,o),o=o.sibling;return null}function o(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=sE(e,t)).index=0,e.sibling=null,e}function a(t,r,o){return(t.index=o,e)?null!==(o=t.alternate)?(o=o.index)<r?(t.flags|=0x2000002,r):o:(t.flags|=0x2000002,r):(t.flags|=1048576,r)}function s(t){return e&&null===t.alternate&&(t.flags|=0x2000002),t}function c(e,t,r,o){return null===t||6!==t.tag?(t=sz(r,e.mode,o)).return=e:(t=i(t,r)).return=e,t}function h(e,t,r,o){var a=r.type;return a===f?m(e,t,r.props.children,o,r.key):(null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===T&&oX(a)===t.type)?oY(t=i(t,r.props),r):oY(t=sO(r.type,r.key,r.props,null,e.mode,o),r),t.return=e,t)}function g(e,t,r,o){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?(t=sP(r,e.mode,o)).return=e:(t=i(t,r.children||[])).return=e,t}function m(e,t,r,o,a){return null===t||7!==t.tag?(t=s$(r,e.mode,o,a)).return=e:(t=i(t,r)).return=e,t}function b(e,t,r){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=sz(""+t,e.mode,r)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case d:return oY(r=sO(t.type,t.key,t.props,null,e.mode,r),t),r.return=e,r;case p:return(t=sP(t,e.mode,r)).return=e,t;case T:return b(e,t=(0,t._init)(t._payload),r)}if(X(t)||P(t))return(t=s$(t,e.mode,r,null)).return=e,t;if("function"==typeof t.then)return b(e,oK(t),r);if(t.$$typeof===w)return b(e,aP(e,t),r);oQ(e,t)}return null}function v(e,t,r,o){var i=null!==t?t.key:null;if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return null!==i?null:c(e,t,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case d:return r.key===i?h(e,t,r,o):null;case p:return r.key===i?g(e,t,r,o):null;case T:return v(e,t,r=(i=r._init)(r._payload),o)}if(X(r)||P(r))return null!==i?null:m(e,t,r,o,null);if("function"==typeof r.then)return v(e,t,oK(r),o);if(r.$$typeof===w)return v(e,t,aP(e,r),o);oQ(e,r)}return null}function S(e,t,r,o,i){if("string"==typeof o&&""!==o||"number"==typeof o||"bigint"==typeof o)return c(t,e=e.get(r)||null,""+o,i);if("object"==typeof o&&null!==o){switch(o.$$typeof){case d:return h(t,e=e.get(null===o.key?r:o.key)||null,o,i);case p:return g(t,e=e.get(null===o.key?r:o.key)||null,o,i);case T:return S(e,t,r,o=(0,o._init)(o._payload),i)}if(X(o)||P(o))return m(t,e=e.get(r)||null,o,i,null);if("function"==typeof o.then)return S(e,t,r,oK(o),i);if(o.$$typeof===w)return S(e,t,r,aP(t,o),i);oQ(t,o)}return null}return function(c,h,g,m){try{oZ=0;var x=function c(h,g,m,x){if("object"==typeof m&&null!==m&&m.type===f&&null===m.key&&(m=m.props.children),"object"==typeof m&&null!==m){switch(m.$$typeof){case d:e:{for(var C=m.key;null!==g;){if(g.key===C){if((C=m.type)===f){if(7===g.tag){r(h,g.sibling),(x=i(g,m.props.children)).return=h,h=x;break e}}else if(g.elementType===C||"object"==typeof C&&null!==C&&C.$$typeof===T&&oX(C)===g.type){r(h,g.sibling),oY(x=i(g,m.props),m),x.return=h,h=x;break e}r(h,g);break}t(h,g),g=g.sibling}m.type===f?(x=s$(m.props.children,h.mode,x,m.key)).return=h:(oY(x=sO(m.type,m.key,m.props,null,h.mode,x),m),x.return=h),h=x}return s(h);case p:e:{for(C=m.key;null!==g;){if(g.key===C)if(4===g.tag&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){r(h,g.sibling),(x=i(g,m.children||[])).return=h,h=x;break e}else{r(h,g);break}t(h,g),g=g.sibling}(x=sP(m,h.mode,x)).return=h,h=x}return s(h);case T:return c(h,g,m=(C=m._init)(m._payload),x)}if(X(m))return function(i,s,c,u){for(var h=null,d=null,p=s,f=s=0,g=null;null!==p&&f<c.length;f++){p.index>f?(g=p,p=null):g=p.sibling;var m=v(i,p,c[f],u);if(null===m){null===p&&(p=g);break}e&&p&&null===m.alternate&&t(i,p),s=a(m,s,f),null===d?h=m:d.sibling=m,d=m,p=g}if(f===c.length)return r(i,p),oM&&oC(i,f),h;if(null===p){for(;f<c.length;f++)null!==(p=b(i,c[f],u))&&(s=a(p,s,f),null===d?h=p:d.sibling=p,d=p);return oM&&oC(i,f),h}for(p=o(p);f<c.length;f++)null!==(g=S(p,i,f,c[f],u))&&(e&&null!==g.alternate&&p.delete(null===g.key?f:g.key),s=a(g,s,f),null===d?h=g:d.sibling=g,d=g);return e&&p.forEach(function(e){return t(i,e)}),oM&&oC(i,f),h}(h,g,m,x);if(P(m)){if("function"!=typeof(C=P(m)))throw Error(u(150));return function(i,s,c,h){if(null==c)throw Error(u(151));for(var d=null,p=null,f=s,g=s=0,m=null,w=c.next();null!==f&&!w.done;g++,w=c.next()){f.index>g?(m=f,f=null):m=f.sibling;var x=v(i,f,w.value,h);if(null===x){null===f&&(f=m);break}e&&f&&null===x.alternate&&t(i,f),s=a(x,s,g),null===p?d=x:p.sibling=x,p=x,f=m}if(w.done)return r(i,f),oM&&oC(i,g),d;if(null===f){for(;!w.done;g++,w=c.next())null!==(w=b(i,w.value,h))&&(s=a(w,s,g),null===p?d=w:p.sibling=w,p=w);return oM&&oC(i,g),d}for(f=o(f);!w.done;g++,w=c.next())null!==(w=S(f,i,g,w.value,h))&&(e&&null!==w.alternate&&f.delete(null===w.key?g:w.key),s=a(w,s,g),null===p?d=w:p.sibling=w,p=w);return e&&f.forEach(function(e){return t(i,e)}),oM&&oC(i,g),d}(h,g,m=C.call(m),x)}if("function"==typeof m.then)return c(h,g,oK(m),x);if(m.$$typeof===w)return c(h,g,aP(h,m),x);oQ(h,m)}return"string"==typeof m&&""!==m||"number"==typeof m||"bigint"==typeof m?(m=""+m,null!==g&&6===g.tag?(r(h,g.sibling),(x=i(g,m)).return=h):(r(h,g),(x=sz(m,h.mode,x)).return=h),s(h=x)):r(h,g)}(c,h,g,m);return oq=null,x}catch(e){if(e===oH)throw e;var C=sR(29,e,null,c.mode);return C.lanes=m,C.return=c,C}finally{}}}var o0=oJ(!0),o1=oJ(!1),o2=en(null),o5=en(0);function o3(e,t){ea(o5,e=sX),ea(o2,t),sX=e|t.baseLanes}function o6(){ea(o5,sX),ea(o2,o2.current)}function o4(){sX=o5.current,ei(o2),ei(o5)}var o8=en(null),o7=null;function o9(e){var t=e.alternate;ea(no,1&no.current),ea(o8,e),null===o7&&(null===t||null!==o2.current?o7=e:null!==t.memoizedState&&(o7=e))}function ne(e){if(22===e.tag){if(ea(no,no.current),ea(o8,e),null===o7){var t=e.alternate;null!==t&&null!==t.memoizedState&&(o7=e)}}else nt(e)}function nt(){ea(no,no.current),ea(o8,o8.current)}function nr(e){ei(o8),o7===e&&(o7=null),ei(no)}var no=en(0);function nn(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni="undefined"!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},na=a.unstable_scheduleCallback,ns=a.unstable_NormalPriority,nl={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nc(){return{controller:new ni,data:new Map,refCount:0}}function nu(e){e.refCount--,0===e.refCount&&na(ns,function(){e.controller.abort()})}var nh=null,nd=0,np=0,nf=null;function ng(){if(0==--nd&&null!==nh){null!==nf&&(nf.status="fulfilled");var e=nh;nh=null,np=0,nf=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var nm=W.S;W.S=function(e,t){"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e,t){if(null===nh){var r=nh=[];nd=0,np=ct(),nf={status:"pending",value:void 0,then:function(e){r.push(e)}}}nd++,t.then(ng,ng)}(0,t),null!==nm&&nm(e,t)};var nb=en(null);function nv(){var e=nb.current;return null!==e?e:sj.pooledCache}function ny(e,t){null===t?ea(nb,nb.current):ea(nb,t.pool)}function nw(){var e=nv();return null===e?null:{parent:nl._currentValue,pool:e}}var nS=0,nx=null,nC=null,nk=null,n_=!1,nR=!1,nT=!1,nE=0,nM=0,nO=null,n$=0;function nI(){throw Error(u(321))}function nz(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!rH(e[r],t[r]))return!1;return!0}function nP(e,t,r,o,i,a){return nS=a,nx=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,W.H=null===e||null===e.memoizedState?ij:iU,nT=!1,a=r(o,i),nT=!1,nR&&(a=nA(t,r,o,i)),nD(e),a}function nD(e){W.H=iF;var t=null!==nC&&null!==nC.next;if(nS=0,nk=nC=nx=null,n_=!1,nM=0,nO=null,t)throw Error(u(300));null===e||i7||null!==(e=e.dependencies)&&a$(e)&&(i7=!0)}function nA(e,t,r,o){nx=e;var i=0;do{if(nR&&(nO=null),nM=0,nR=!1,25<=i)throw Error(u(301));if(i+=1,nk=nC=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}W.H=iV,a=t(r,o)}while(nR)return a}function nL(){var e=W.H,t=e.useState()[0];return t="function"==typeof t.then?nG(t):t,e=e.useState()[0],(null!==nC?nC.memoizedState:null)!==e&&(nx.flags|=1024),t}function nN(){var e=0!==nE;return nE=0,e}function nH(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function nB(e){if(n_){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}n_=!1}nS=0,nk=nC=nx=null,nR=!1,nM=nE=0,nO=null}function nW(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===nk?nx.memoizedState=nk=e:nk=nk.next=e,nk}function nF(){if(null===nC){var e=nx.alternate;e=null!==e?e.memoizedState:null}else e=nC.next;var t=null===nk?nx.memoizedState:nk.next;if(null!==t)nk=t,nC=e;else{if(null===e){if(null===nx.alternate)throw Error(u(467));throw Error(u(310))}e={memoizedState:(nC=e).memoizedState,baseState:nC.baseState,baseQueue:nC.baseQueue,queue:nC.queue,next:null},null===nk?nx.memoizedState=nk=e:nk=nk.next=e}return nk}function nG(e){var t=nM;return nM+=1,null===nO&&(nO=[]),e=oj(nO,e,t),t=nx,null===(null===nk?t.memoizedState:nk.next)&&(W.H=null===(t=t.alternate)||null===t.memoizedState?ij:iU),e}function nj(e){if(null!==e&&"object"==typeof e){if("function"==typeof e.then)return nG(e);if(e.$$typeof===w)return az(e)}throw Error(u(438,String(e)))}function nU(e){var t=null,r=nx.updateQueue;if(null!==r&&(t=r.memoCache),null==t){var o=nx.alternate;null!==o&&null!==(o=o.updateQueue)&&null!=(o=o.memoCache)&&(t={data:o.data.map(function(e){return e.slice()}),index:0})}if(null==t&&(t={data:[],index:0}),null===r&&(r=i(),nx.updateQueue=r),r.memoCache=t,void 0===(r=t.data[t.index]))for(r=t.data[t.index]=Array(e),o=0;o<e;o++)r[o]=O;return t.index++,r}function nV(e,t){return"function"==typeof t?t(e):t}function nq(e){return nZ(nF(),nC,e)}function nZ(e,t,r){var o=e.queue;if(null===o)throw Error(u(311));o.lastRenderedReducer=r;var i=e.baseQueue,a=o.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,o.pending=null}if(a=e.baseState,null===i)e.memoizedState=a;else{t=i.next;var c=s=null,h=null,d=t,p=!1;do{var f=-0x20000001&d.lane;if(f!==d.lane?(sV&f)===f:(nS&f)===f){var g=d.revertLane;if(0===g)null!==h&&(h=h.next={lane:0,revertLane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),f===np&&(p=!0);else if((nS&g)===g){d=d.next,g===np&&(p=!0);continue}else f={lane:0,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},null===h?(c=h=f,s=a):h=h.next=f,nx.lanes|=g,s0|=g;f=d.action,nT&&r(a,f),a=d.hasEagerState?d.eagerState:r(a,f)}else g={lane:f,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},null===h?(c=h=g,s=a):h=h.next=g,nx.lanes|=f,s0|=f;d=d.next}while(null!==d&&d!==t)if(null===h?s=a:h.next=c,!rH(a,e.memoizedState)&&(i7=!0,p&&null!==(r=nf)))throw r;e.memoizedState=a,e.baseState=s,e.baseQueue=h,o.lastRenderedState=a}return null===i&&(o.lanes=0),[e.memoizedState,o.dispatch]}function nK(e){var t=nF(),r=t.queue;if(null===r)throw Error(u(311));r.lastRenderedReducer=e;var o=r.dispatch,i=r.pending,a=t.memoizedState;if(null!==i){r.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i)rH(a,t.memoizedState)||(i7=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),r.lastRenderedState=a}return[a,o]}function nY(e,t,r){var o=nx,i=nF(),a=oM;if(a){if(void 0===r)throw Error(u(407));r=r()}else r=t();var s=!rH((nC||i).memoizedState,r);if(s&&(i.memoizedState=r,i7=!0),i=i.queue,id(nJ.bind(null,o,i,e),[e]),i.getSnapshot!==t||s||null!==nk&&1&nk.memoizedState.tag){if(o.flags|=2048,is(9,nX.bind(null,o,i,r,t),{destroy:void 0},null),null===sj)throw Error(u(349));a||0!=(60&nS)||nQ(o,t,r)}return r}function nQ(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=nx.updateQueue)?(t=i(),nx.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function nX(e,t,r,o){t.value=r,t.getSnapshot=o,n0(t)&&n1(e)}function nJ(e,t,r){return r(function(){n0(t)&&n1(e)})}function n0(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!rH(e,r)}catch{return!0}}function n1(e){var t=ol(e,2);null!==t&&lb(t,e,2)}function n2(e){var t=nW();if("function"==typeof e){var r=e;if(e=r(),nT){e$(!0);try{r()}finally{e$(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nV,lastRenderedState:e},t}function n5(e,t,r,o){return e.baseState=r,nZ(e,nC,"function"==typeof o?o:nV)}function n3(e,t,r,o,i){if(iH(e))throw Error(u(485));if(null!==(e=t.action)){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==W.T?r(!0):a.isTransition=!1,o(a),null===(r=t.pending)?(a.next=t.pending=a,n6(t,a)):(a.next=r.next,t.pending=r.next=a)}}function n6(e,t){var r=t.action,o=t.payload,i=e.state;if(t.isTransition){var a=W.T,s={};W.T=s;try{var c=r(i,o),u=W.S;null!==u&&u(s,c),n4(e,t,c)}catch(r){n7(e,t,r)}finally{W.T=a}}else try{a=r(i,o),n4(e,t,a)}catch(r){n7(e,t,r)}}function n4(e,t,r){null!==r&&"object"==typeof r&&"function"==typeof r.then?r.then(function(r){n8(e,t,r)},function(r){return n7(e,t,r)}):n8(e,t,r)}function n8(e,t,r){t.status="fulfilled",t.value=r,n9(t),e.state=r,null!==(t=e.pending)&&((r=t.next)===t?e.pending=null:(r=r.next,t.next=r,n6(e,r)))}function n7(e,t,r){var o=e.pending;if(e.pending=null,null!==o){o=o.next;do t.status="rejected",t.reason=r,n9(t),t=t.next;while(t!==o)}e.action=null}function n9(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ie(e,t){return t}function it(e,t){if(oM){var r=sj.formState;if(null!==r){e:{var o=nx;if(oM){if(oE){t:{for(var i=oE,a=o$;8!==i.nodeType;)if(!a||null===(i=cW(i.nextSibling))){i=null;break t}i="F!"===(a=i.data)||"F"===a?i:null}if(i){oE=cW(i.nextSibling),o="F!"===i.data;break e}}oz(o)}o=!1}o&&(t=r[0])}}return(r=nW()).memoizedState=r.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ie,lastRenderedState:t},r.queue=o,r=iD.bind(null,nx,o),o.dispatch=r,o=n2(!1),a=iN.bind(null,nx,!1,o.queue),o=nW(),i={state:t,dispatch:null,action:e,pending:null},o.queue=i,r=n3.bind(null,nx,i,a,r),i.dispatch=r,o.memoizedState=e,[t,r,!1]}function ir(e){return io(nF(),nC,e)}function io(e,t,r){t=nZ(e,t,ie)[0],e=nq(nV)[0],t="object"==typeof t&&null!==t&&"function"==typeof t.then?nG(t):t;var o=nF(),i=o.queue,a=i.dispatch;return r!==o.memoizedState&&(nx.flags|=2048,is(9,ii.bind(null,i,r),{destroy:void 0},null)),[t,a,e]}function ii(e,t){e.action=t}function ia(e){var t=nF(),r=nC;if(null!==r)return io(t,r,e);nF(),t=t.memoizedState;var o=(r=nF()).queue.dispatch;return r.memoizedState=e,[t,o,!1]}function is(e,t,r,o){return e={tag:e,create:t,inst:r,deps:o,next:null},null===(t=nx.updateQueue)&&(t=i(),nx.updateQueue=t),null===(r=t.lastEffect)?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e),e}function il(){return nF().memoizedState}function ic(e,t,r,o){var i=nW();nx.flags|=e,i.memoizedState=is(1|t,r,{destroy:void 0},void 0===o?null:o)}function iu(e,t,r,o){var i=nF();o=void 0===o?null:o;var a=i.memoizedState.inst;null!==nC&&null!==o&&nz(o,nC.memoizedState.deps)?i.memoizedState=is(t,r,a,o):(nx.flags|=e,i.memoizedState=is(1|t,r,a,o))}function ih(e,t){ic(8390656,8,e,t)}function id(e,t){iu(2048,8,e,t)}function ip(e,t){return iu(4,2,e,t)}function ig(e,t){return iu(4,4,e,t)}function im(e,t){if("function"==typeof t){var r=t(e=e());return function(){"function"==typeof r?r():t(null)}}if(null!=t)return t.current=e=e(),function(){t.current=null}}function ib(e,t,r){r=null!=r?r.concat([e]):null,iu(4,4,im.bind(null,t,e),r)}function iv(){}function iy(e,t){var r=nF();t=void 0===t?null:t;var o=r.memoizedState;return null!==t&&nz(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function iw(e,t){var r=nF();t=void 0===t?null:t;var o=r.memoizedState;if(null!==t&&nz(t,o[1]))return o[0];if(o=e(),nT){e$(!0);try{e()}finally{e$(!1)}}return r.memoizedState=[o,t],o}function iS(e,t,r){return void 0===r||0!=(0x40000000&nS)?e.memoizedState=t:(e.memoizedState=r,e=lm(),nx.lanes|=e,s0|=e,r)}function ix(e,t,r,o){return rH(r,t)?r:null!==o2.current?(rH(e=iS(e,r,o),t)||(i7=!0),e):0==(42&nS)?(i7=!0,e.memoizedState=r):(e=lm(),nx.lanes|=e,s0|=e,t)}function iC(e,t,r,o,i){var a=J.p;J.p=0!==a&&8>a?a:8;var s=W.T,c={};W.T=c,iN(e,!1,t,r);try{var u=i(),h=W.S;if(null!==h&&h(c,u),null!==u&&"object"==typeof u&&"function"==typeof u.then){var d,p,f=(d=[],p={status:"pending",value:null,reason:null,then:function(e){d.push(e)}},u.then(function(){p.status="fulfilled",p.value=o;for(var e=0;e<d.length;e++)(0,d[e])(o)},function(e){for(p.status="rejected",p.reason=e,e=0;e<d.length;e++)(0,d[e])(void 0)}),p);iA(e,t,f,lg(e))}else iA(e,t,o,lg(e))}catch(r){iA(e,t,{then:function(){},status:"rejected",reason:r},lg())}finally{J.p=a,W.T=s}}function ik(){}function i_(e,t,r,o){if(5!==e.tag)throw Error(u(476));var i=iR(e).queue;iC(e,i,t,ee,null===r?ik:function(){return iT(e),r(o)})}function iR(e){var t=e.memoizedState;if(null!==t)return t;var r={};return(t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nV,lastRenderedState:ee},next:null}).next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nV,lastRenderedState:r},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function iT(e){var t=iR(e).next.queue;iA(e,t,{},lg())}function iE(){return az(ua)}function iM(){return nF().memoizedState}function i$(){return nF().memoizedState}function iI(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var r=lg(),o=aB(t,e=aH(r),r);null!==o&&(lb(o,t,r),aW(o,t,r)),t={cache:nc()},e.payload=t;return}t=t.return}}function iP(e,t,r){var o=lg();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},iH(e)?iB(t,r):null!==(r=os(e,t,r,o))&&(lb(r,e,o),iW(r,t,o))}function iD(e,t,r){iA(e,t,r,lg())}function iA(e,t,r,o){var i={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(iH(e))iB(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var s=t.lastRenderedState,c=a(s,r);if(i.hasEagerState=!0,i.eagerState=c,rH(c,s))return oa(e,t,i,0),null===sj&&oi(),!1}catch{}finally{}if(null!==(r=os(e,t,i,o)))return lb(r,e,o),iW(r,t,o),!0}return!1}function iN(e,t,r,o){if(o={lane:2,revertLane:ct(),action:o,hasEagerState:!1,eagerState:null,next:null},iH(e)){if(t)throw Error(u(479))}else null!==(t=os(e,r,o,2))&&lb(t,e,2)}function iH(e){var t=e.alternate;return e===nx||null!==t&&t===nx}function iB(e,t){nR=n_=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function iW(e,t,r){if(0!=(4194176&r)){var o=t.lanes;o&=e.pendingLanes,t.lanes=r|=o,eU(e,r)}}i=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};var iF={readContext:az,use:nj,useCallback:nI,useContext:nI,useEffect:nI,useImperativeHandle:nI,useLayoutEffect:nI,useInsertionEffect:nI,useMemo:nI,useReducer:nI,useRef:nI,useState:nI,useDebugValue:nI,useDeferredValue:nI,useTransition:nI,useSyncExternalStore:nI,useId:nI};iF.useCacheRefresh=nI,iF.useMemoCache=nI,iF.useHostTransitionStatus=nI,iF.useFormState=nI,iF.useActionState=nI,iF.useOptimistic=nI;var ij={readContext:az,use:nj,useCallback:function(e,t){return nW().memoizedState=[e,void 0===t?null:t],e},useContext:az,useEffect:ih,useImperativeHandle:function(e,t,r){r=null!=r?r.concat([e]):null,ic(4194308,4,im.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ic(4194308,4,e,t)},useInsertionEffect:function(e,t){ic(4,2,e,t)},useMemo:function(e,t){var r=nW();t=void 0===t?null:t;var o=e();if(nT){e$(!0);try{e()}finally{e$(!1)}}return r.memoizedState=[o,t],o},useReducer:function(e,t,r){var o=nW();if(void 0!==r){var i=r(t);if(nT){e$(!0);try{r(t)}finally{e$(!1)}}}else i=t;return o.memoizedState=o.baseState=i,o.queue=e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},e=e.dispatch=iP.bind(null,nx,e),[o.memoizedState,e]},useRef:function(e){return nW().memoizedState={current:e}},useState:function(e){var t=(e=n2(e)).queue,r=iD.bind(null,nx,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:iv,useDeferredValue:function(e,t){return iS(nW(),e,t)},useTransition:function(){var e=n2(!1);return e=iC.bind(null,nx,e.queue,!0,!1),nW().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var o=nx,i=nW();if(oM){if(void 0===r)throw Error(u(407));r=r()}else{if(r=t(),null===sj)throw Error(u(349));0!=(60&sV)||nQ(o,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,ih(nJ.bind(null,o,a,e),[e]),o.flags|=2048,is(9,nX.bind(null,o,a,r,t),{destroy:void 0},null),r},useId:function(){var e=nW(),t=sj.identifierPrefix;if(oM){var r=ox,o=oS;t=":"+t+"R"+(r=(o&~(1<<32-eI(o)-1)).toString(32)+r),0<(r=nE++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=n$++).toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return nW().memoizedState=iI.bind(null,nx)}};ij.useMemoCache=nU,ij.useHostTransitionStatus=iE,ij.useFormState=it,ij.useActionState=it,ij.useOptimistic=function(e){var t=nW();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=iN.bind(null,nx,!0,r),r.dispatch=t,[e,t]};var iU={readContext:az,use:nj,useCallback:iy,useContext:az,useEffect:id,useImperativeHandle:ib,useInsertionEffect:ip,useLayoutEffect:ig,useMemo:iw,useReducer:nq,useRef:il,useState:function(){return nq(nV)},useDebugValue:iv,useDeferredValue:function(e,t){return ix(nF(),nC.memoizedState,e,t)},useTransition:function(){var e=nq(nV)[0],t=nF().memoizedState;return["boolean"==typeof e?e:nG(e),t]},useSyncExternalStore:nY,useId:iM};iU.useCacheRefresh=i$,iU.useMemoCache=nU,iU.useHostTransitionStatus=iE,iU.useFormState=ir,iU.useActionState=ir,iU.useOptimistic=function(e,t){return n5(nF(),nC,e,t)};var iV={readContext:az,use:nj,useCallback:iy,useContext:az,useEffect:id,useImperativeHandle:ib,useInsertionEffect:ip,useLayoutEffect:ig,useMemo:iw,useReducer:nK,useRef:il,useState:function(){return nK(nV)},useDebugValue:iv,useDeferredValue:function(e,t){var r=nF();return null===nC?iS(r,e,t):ix(r,nC.memoizedState,e,t)},useTransition:function(){var e=nK(nV)[0],t=nF().memoizedState;return["boolean"==typeof e?e:nG(e),t]},useSyncExternalStore:nY,useId:iM};function iq(e,t,r,o){r=null==(r=r(o,t=e.memoizedState))?t:F({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}iV.useCacheRefresh=i$,iV.useMemoCache=nU,iV.useHostTransitionStatus=iE,iV.useFormState=ia,iV.useActionState=ia,iV.useOptimistic=function(e,t){var r=nF();return null!==nC?n5(r,nC,e,t):(r.baseState=e,[e,r.queue.dispatch])};var iZ={isMounted:function(e){return!!(e=e._reactInternals)&&Z(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=lg(),i=aH(o);i.payload=t,null!=r&&(i.callback=r),null!==(t=aB(e,i,o))&&(lb(t,e,o),aW(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=lg(),i=aH(o);i.tag=1,i.payload=t,null!=r&&(i.callback=r),null!==(t=aB(e,i,o))&&(lb(t,e,o),aW(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=lg(),o=aH(r);o.tag=2,null!=t&&(o.callback=t),null!==(t=aB(e,o,r))&&(lb(t,e,r),aW(t,e,r))}};function iK(e,t,r,o,i,a,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(o,a,s):!t.prototype||!t.prototype.isPureReactComponent||!rB(r,o)||!rB(i,a)}function iY(e,t,r,o){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,o),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&iZ.enqueueReplaceState(t,t.state,null)}function iQ(e,t){var r=t;if("ref"in t)for(var o in r={},t)"ref"!==o&&(r[o]=t[o]);if(e=e.defaultProps)for(var i in r===t&&(r=F({},r)),e)void 0===r[i]&&(r[i]=e[i]);return r}var iX="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)};function iJ(e){iX(e)}function i0(e){}function i1(e){iX(e)}function i2(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function i5(e,t,r){try{(0,e.onCaughtError)(r.value,{componentStack:r.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function i3(e,t,r){return(r=aH(r)).tag=3,r.payload={element:null},r.callback=function(){i2(e,t)},r}function i6(e){return(e=aH(e)).tag=3,e}function i4(e,t,r,o){var i=r.type.getDerivedStateFromError;if("function"==typeof i){var a=o.value;e.payload=function(){return i(a)},e.callback=function(){i5(t,r,o)}}var s=r.stateNode;null!==s&&"function"==typeof s.componentDidCatch&&(e.callback=function(){i5(t,r,o),"function"!=typeof i&&(null===li?li=new Set([this]):li.add(this));var e=o.stack;this.componentDidCatch(o.value,{componentStack:null!==e?e:""})})}var i8=Error(u(461)),i7=!1;function i9(e,t,r,o){t.child=null===e?o1(t,null,r,o):o0(t,e.child,r,o)}function ae(e,t,r,o,i){r=r.render;var a=t.ref;if("ref"in o){var s={};for(var c in o)"ref"!==c&&(s[c]=o[c])}else s=o;return(aI(t),o=nP(e,t,r,s,a,i),c=nN(),null===e||i7)?(oM&&c&&o_(t),t.flags|=1,i9(e,t,o,i),t.child):(nH(e,t,i),aw(e,t,i))}function at(e,t,r,o,i){if(null===e){var a=r.type;return"function"!=typeof a||sT(a)||void 0!==a.defaultProps||null!==r.compare?((e=sO(r.type,null,o,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,ar(e,t,a,o,i))}if(a=e.child,!aS(e,i)){var s=a.memoizedProps;if((r=null!==(r=r.compare)?r:rB)(s,o)&&e.ref===t.ref)return aw(e,t,i)}return t.flags|=1,(e=sE(a,o)).ref=t.ref,e.return=t,t.child=e}function ar(e,t,r,o,i){if(null!==e){var a=e.memoizedProps;if(rB(a,o)&&e.ref===t.ref)if(i7=!1,t.pendingProps=o=a,!aS(e,i))return t.lanes=e.lanes,aw(e,t,i);else 0!=(131072&e.flags)&&(i7=!0)}return aa(e,t,r,o,i)}function ao(e,t,r){var o=t.pendingProps,i=o.children,a=0!=(2&t.stateNode._pendingVisibility),s=null!==e?e.memoizedState:null;if(ai(e,t),"hidden"===o.mode||a){if(0!=(128&t.flags)){if(o=null!==s?s.baseLanes|r:r,null!==e){for(a=0,i=t.child=e.child;null!==i;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~o}else t.childLanes=0,t.child=null;return an(e,t,o,r)}if(0==(0x20000000&r))return t.lanes=t.childLanes=0x20000000,an(e,t,null!==s?s.baseLanes|r:r,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&ny(t,null!==s?s.cachePool:null),null!==s?o3(t,s):o6(),ne(t)}else null!==s?(ny(t,s.cachePool),o3(t,s),nt(t),t.memoizedState=null):(null!==e&&ny(t,null),o6(),nt(t));return i9(e,t,i,r),t.child}function an(e,t,r,o){var i=nv();return t.memoizedState={baseLanes:r,cachePool:i=null===i?null:{parent:nl._currentValue,pool:i}},null!==e&&ny(t,null),o6(),ne(t),null!==e&&aO(e,t,o,!0),null}function ai(e,t){var r=t.ref;if(null===r)null!==e&&null!==e.ref&&(t.flags|=2097664);else{if("function"!=typeof r&&"object"!=typeof r)throw Error(u(284));(null===e||e.ref!==r)&&(t.flags|=2097664)}}function aa(e,t,r,o,i){return(aI(t),r=nP(e,t,r,o,void 0,i),o=nN(),null===e||i7)?(oM&&o&&o_(t),t.flags|=1,i9(e,t,r,i),t.child):(nH(e,t,i),aw(e,t,i))}function as(e,t,r,o,i,a){return(aI(t),t.updateQueue=null,r=nA(t,o,r,i),nD(e),o=nN(),null===e||i7)?(oM&&o&&o_(t),t.flags|=1,i9(e,t,r,a),t.child):(nH(e,t,a),aw(e,t,a))}function al(e,t,r,o,i){if(aI(t),null===t.stateNode){var a=oh,s=r.contextType;"object"==typeof s&&null!==s&&(a=az(s)),t.memoizedState=null!==(a=new r(o,a)).state&&void 0!==a.state?a.state:null,a.updater=iZ,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=o,a.state=t.memoizedState,a.refs={},aL(t),s=r.contextType,a.context="object"==typeof s&&null!==s?az(s):oh,a.state=t.memoizedState,"function"==typeof(s=r.getDerivedStateFromProps)&&(iq(t,r,s,o),a.state=t.memoizedState),"function"==typeof r.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(s=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),s!==a.state&&iZ.enqueueReplaceState(a,a.state,null),aU(t,o,a,i),aj(),a.state=t.memoizedState),"function"==typeof a.componentDidMount&&(t.flags|=4194308),o=!0}else if(null===e){a=t.stateNode;var c=t.memoizedProps,u=iQ(r,c);a.props=u;var h=a.context,d=r.contextType;s=oh,"object"==typeof d&&null!==d&&(s=az(d));var p=r.getDerivedStateFromProps;d="function"==typeof p||"function"==typeof a.getSnapshotBeforeUpdate,c=t.pendingProps!==c,d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(c||h!==s)&&iY(t,a,o,s),aA=!1;var f=t.memoizedState;a.state=f,aU(t,o,a,i),aj(),h=t.memoizedState,c||f!==h||aA?("function"==typeof p&&(iq(t,r,p,o),h=t.memoizedState),(u=aA||iK(t,r,u,o,f,h,s))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=h),a.props=o,a.state=h,a.context=s,o=u):("function"==typeof a.componentDidMount&&(t.flags|=4194308),o=!1)}else{a=t.stateNode,aN(e,t),d=iQ(r,s=t.memoizedProps),a.props=d,p=t.pendingProps,f=a.context,h=r.contextType,u=oh,"object"==typeof h&&null!==h&&(u=az(h)),(h="function"==typeof(c=r.getDerivedStateFromProps)||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==p||f!==u)&&iY(t,a,o,u),aA=!1,f=t.memoizedState,a.state=f,aU(t,o,a,i),aj();var g=t.memoizedState;s!==p||f!==g||aA||null!==e&&null!==e.dependencies&&a$(e.dependencies)?("function"==typeof c&&(iq(t,r,c,o),g=t.memoizedState),(d=aA||iK(t,r,d,o,f,g,u)||null!==e&&null!==e.dependencies&&a$(e.dependencies))?(h||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(o,g,u),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(o,g,u)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=g),a.props=o,a.state=g,a.context=u,o=d):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return a=o,ai(e,t),o=0!=(128&t.flags),a||o?(a=t.stateNode,r=o&&"function"!=typeof r.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&o?(t.child=o0(t,e.child,null,i),t.child=o0(t,null,r,i)):i9(e,t,r,i),t.memoizedState=a.state,e=t.child):e=aw(e,t,i),e}function ac(e,t,r,o){return oL(),t.flags|=256,i9(e,t,r,o),t.child}var au={dehydrated:null,treeContext:null,retryLane:0};function ah(e){return{baseLanes:e,cachePool:nw()}}function ad(e,t,r){return e=null!==e?e.childLanes&~r:0,t&&(e|=s3),e}function ap(e,t,r){var o,i=t.pendingProps,a=!1,s=0!=(128&t.flags);if((o=s)||(o=(null===e||null!==e.memoizedState)&&0!=(2&no.current)),o&&(a=!0,t.flags&=-129),o=0!=(32&t.flags),t.flags&=-33,null===e){if(oM){if(a?o9(t):nt(t),oM){var c,h=oE;if(c=h){r:{for(c=h,h=o$;8!==c.nodeType;)if(!h||null===(c=cW(c.nextSibling))){h=null;break r}h=c}null!==h?(t.memoizedState={dehydrated:h,treeContext:null!==ow?{id:oS,overflow:ox}:null,retryLane:0x20000000},(c=sR(18,null,null,0)).stateNode=h,c.return=t,t.child=c,oT=t,oE=null,c=!0):c=!1}c||oz(t)}if(null!==(h=t.memoizedState)&&null!==(h=h.dehydrated))return"$!"===h.data?t.lanes=16:t.lanes=0x20000000,null;nr(t)}return(h=i.children,i=i.fallback,a)?(nt(t),h=ag({mode:"hidden",children:h},a=t.mode),i=s$(i,a,r,null),h.return=t,i.return=t,h.sibling=i,t.child=h,(a=t.child).memoizedState=ah(r),a.childLanes=ad(e,o,r),t.memoizedState=au,i):(o9(t),af(t,h))}if(null!==(c=e.memoizedState)&&null!==(h=c.dehydrated)){if(s)256&t.flags?(o9(t),t.flags&=-257,t=am(e,t,r)):null!==t.memoizedState?(nt(t),t.child=e.child,t.flags|=128,t=null):(nt(t),a=i.fallback,h=t.mode,i=ag({mode:"visible",children:i.children},h),a=s$(a,h,r,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,o0(t,e.child,null,r),(i=t.child).memoizedState=ah(r),i.childLanes=ad(e,o,r),t.memoizedState=au,t=a);else if(o9(t),"$!"===h.data){if(o=h.nextSibling&&h.nextSibling.dataset)var d=o.dgst;o=d,(i=Error(u(419))).stack="",i.digest=o,oN({value:i,source:null,stack:null}),t=am(e,t,r)}else if(i7||aO(e,t,r,!1),o=0!=(r&e.childLanes),i7||o){if(null!==(o=sj)){if(0!=(42&(i=r&-r)))i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 0x1000000:case 0x2000000:i=64;break;case 0x10000000:i=0x8000000;break;default:i=0}if(0!==(i=0!=(i&(o.suspendedLanes|r))?0:i)&&i!==c.retryLane)throw c.retryLane=i,ol(e,i),lb(o,e,i),i8}"$?"===h.data||lM(),t=am(e,t,r)}else"$?"===h.data?(t.flags|=128,t.child=e.child,t=lY.bind(null,e),h._reactRetry=t,t=null):(e=c.treeContext,oE=cW(h.nextSibling),oT=t,oM=!0,oO=null,o$=!1,null!==e&&(ov[oy++]=oS,ov[oy++]=ox,ov[oy++]=ow,oS=e.id,ox=e.overflow,ow=t),t=af(t,i.children),t.flags|=4096);return t}return a?(nt(t),a=i.fallback,h=t.mode,d=(c=e.child).sibling,(i=sE(c,{mode:"hidden",children:i.children})).subtreeFlags=0x1e00000&c.subtreeFlags,null!==d?a=sE(d,a):(a=s$(a,h,r,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,null===(h=e.child.memoizedState)?h=ah(r):(null!==(c=h.cachePool)?(d=nl._currentValue,c=c.parent!==d?{parent:d,pool:d}:c):c=nw(),h={baseLanes:h.baseLanes|r,cachePool:c}),a.memoizedState=h,a.childLanes=ad(e,o,r),t.memoizedState=au,i):(o9(t),e=(r=e.child).sibling,(r=sE(r,{mode:"visible",children:i.children})).return=t,r.sibling=null,null!==e&&(null===(o=t.deletions)?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=r,t.memoizedState=null,r)}function af(e,t){return(t=ag({mode:"visible",children:t},e.mode)).return=e,e.child=t}function ag(e,t){return sI(e,t,0,null)}function am(e,t,r){return o0(t,e.child,null,r),e=af(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ab(e,t,r){e.lanes|=t;var o=e.alternate;null!==o&&(o.lanes|=t),aE(e.return,t,r)}function av(e,t,r,o,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=r,a.tailMode=i)}function ay(e,t,r){var o=t.pendingProps,i=o.revealOrder,a=o.tail;if(i9(e,t,o.children,r),0!=(2&(o=no.current)))o=1&o|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ab(e,r,t);else if(19===e.tag)ab(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(ea(no,o),i){case"forwards":for(i=null,r=t.child;null!==r;)null!==(e=r.alternate)&&null===nn(e)&&(i=r),r=r.sibling;null===(r=i)?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),av(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===nn(e)){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}av(t,!0,r,null,a);break;case"together":av(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aw(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),s0|=t.lanes,0==(r&t.childLanes)){if(null===e)return null;else if(aO(e,t,r,!1),0==(r&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(u(153));if(null!==t.child){for(r=sE(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=sE(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function aS(e,t){return 0!=(e.lanes&t)||!!(null!==(e=e.dependencies)&&a$(e))}function ax(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps)i7=!0;else{if(!aS(e,r)&&0==(128&t.flags))return i7=!1,function(e,t,r){switch(t.tag){case 3:eh(t,t.stateNode.containerInfo),aR(t,nl,e.memoizedState.cache),oL();break;case 27:case 5:ep(t);break;case 4:eh(t,t.stateNode.containerInfo);break;case 10:aR(t,t.type,t.memoizedProps.value);break;case 13:var o=t.memoizedState;if(null!==o){if(null!==o.dehydrated)return o9(t),t.flags|=128,null;if(0!=(r&t.child.childLanes))return ap(e,t,r);return o9(t),null!==(e=aw(e,t,r))?e.sibling:null}o9(t);break;case 19:var i=0!=(128&e.flags);if((o=0!=(r&t.childLanes))||(aO(e,t,r,!1),o=0!=(r&t.childLanes)),i){if(o)return ay(e,t,r);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),ea(no,no.current),!o)return null;break;case 22:case 23:return t.lanes=0,ao(e,t,r);case 24:aR(t,nl,e.memoizedState.cache)}return aw(e,t,r)}(e,t,r);i7=0!=(131072&e.flags)}else i7=!1,oM&&0!=(1048576&t.flags)&&ok(t,ob,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var o=t.elementType,i=o._init;if(o=i(o._payload),t.type=o,"function"==typeof o)sT(o)?(e=iQ(o,e),t.tag=1,t=al(null,t,o,e,r)):(t.tag=0,t=aa(null,t,o,e,r));else{if(null!=o){if((i=o.$$typeof)===S){t.tag=11,t=ae(null,t,o,e,r);break e}else if(i===_){t.tag=14,t=at(null,t,o,e,r);break e}}throw Error(u(306,t=function e(t){if(null==t)return null;if("function"==typeof t)return t.$$typeof===B?null:t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case f:return"Fragment";case p:return"Portal";case m:return"Profiler";case g:return"StrictMode";case x:return"Suspense";case C:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case w:return(t.displayName||"Context")+".Provider";case v:return(t._context.displayName||"Context")+".Consumer";case S:var r=t.render;return(t=t.displayName)||(t=""!==(t=r.displayName||r.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case _:return null!==(r=t.displayName||null)?r:e(t.type)||"Memo";case T:r=t._payload,t=t._init;try{return e(t(r))}catch{}}return null}(o)||o,""))}}return t;case 0:return aa(e,t,t.type,t.pendingProps,r);case 1:return i=iQ(o=t.type,t.pendingProps),al(e,t,o,i,r);case 3:e:{if(eh(t,t.stateNode.containerInfo),null===e)throw Error(u(387));var a=t.pendingProps;o=(i=t.memoizedState).element,aN(e,t),aU(t,a,null,r);var s=t.memoizedState;if(aR(t,nl,a=s.cache),a!==i.cache&&aM(t,[nl],r,!0),aj(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=ac(e,t,a,r);break e}else if(a!==o){oN(o=op(Error(u(424)),t)),t=ac(e,t,a,r);break e}else for(oE=cW(t.stateNode.containerInfo.firstChild),oT=t,oM=!0,oO=null,o$=!0,r=o1(t,null,a,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling;else{if(oL(),a===o){t=aw(e,t,r);break e}i9(e,t,a,r)}t=t.child}return t;case 26:return ai(e,t),null===e?(r=cY(t.type,null,t.pendingProps,null))?t.memoizedState=r:oM||(r=t.type,e=t.pendingProps,(o=cM(ec.current).createElement(r))[eK]=t,o[eY]=e,cR(o,r,e),e7(o),t.stateNode=o):t.memoizedState=cY(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ep(t),null===e&&oM&&(o=t.stateNode=cG(t.type,t.pendingProps,ec.current),oT=t,o$=!0,oE=cW(o.firstChild)),o=t.pendingProps.children,null!==e||oM?i9(e,t,o,r):t.child=o0(t,null,o,r),ai(e,t),t.child;case 5:return null===e&&oM&&((i=o=oE)&&(null!==(o=function(e,t,r,o){for(;1===e.nodeType;){if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(o){if(!e[e2])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence")||i!==r.rel||e.getAttribute("href")!==(null==r.href?null:r.href)||e.getAttribute("crossorigin")!==(null==r.crossOrigin?null:r.crossOrigin)||e.getAttribute("title")!==(null==r.title?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==r.src?null:r.src)||e.getAttribute("type")!==(null==r.type?null:r.type)||e.getAttribute("crossorigin")!==(null==r.crossOrigin?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==r.name?null:""+r.name;if("hidden"===r.type&&e.getAttribute("name")===i)return e}if(null===(e=cW(e.nextSibling)))break}return null}(o,t.type,t.pendingProps,o$))?(t.stateNode=o,oT=t,oE=cW(o.firstChild),o$=!1,i=!0):i=!1),i||oz(t)),ep(t),i=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,o=a.children,cI(i,a)?o=null:null!==s&&cI(i,s)&&(t.flags|=32),null!==t.memoizedState&&(ua._currentValue=i=nP(e,t,nL,null,null,r)),ai(e,t),i9(e,t,o,r),t.child;case 6:return null===e&&oM&&((e=r=oE)&&(null!==(r=function(e,t,r){if(""===t)return null;for(;3!==e.nodeType;)if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!r||null===(e=cW(e.nextSibling)))return null;return e}(r,t.pendingProps,o$))?(t.stateNode=r,oT=t,oE=null,e=!0):e=!1),e||oz(t)),null;case 13:return ap(e,t,r);case 4:return eh(t,t.stateNode.containerInfo),o=t.pendingProps,null===e?t.child=o0(t,null,o,r):i9(e,t,o,r),t.child;case 11:return ae(e,t,t.type,t.pendingProps,r);case 7:return i9(e,t,t.pendingProps,r),t.child;case 8:case 12:return i9(e,t,t.pendingProps.children,r),t.child;case 10:return o=t.pendingProps,aR(t,t.type,o.value),i9(e,t,o.children,r),t.child;case 9:return i=t.type._context,o=t.pendingProps.children,aI(t),o=o(i=az(i)),t.flags|=1,i9(e,t,o,r),t.child;case 14:return at(e,t,t.type,t.pendingProps,r);case 15:return ar(e,t,t.type,t.pendingProps,r);case 19:return ay(e,t,r);case 22:return ao(e,t,r);case 24:return aI(t),o=az(nl),null===e?(null===(i=nv())&&(i=sj,a=nc(),i.pooledCache=a,a.refCount++,null!==a&&(i.pooledCacheLanes|=r),i=a),t.memoizedState={parent:o,cache:i},aL(t),aR(t,nl,i)):(0!=(e.lanes&r)&&(aN(e,t),aU(t,null,null,r),aj()),i=e.memoizedState,a=t.memoizedState,i.parent!==o?(i={parent:o,cache:o},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),aR(t,nl,o)):(aR(t,nl,o=a.cache),o!==i.cache&&aM(t,[nl],r,!0))),i9(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}var aC=en(null),ak=null,a_=null;function aR(e,t,r){ea(aC,t._currentValue),t._currentValue=r}function aT(e){e._currentValue=aC.current,ei(aC)}function aE(e,t,r){for(;null!==e;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==o&&(o.childLanes|=t)):null!==o&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function aM(e,t,r,o){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var a=i.dependencies;if(null!==a){var s=i.child;a=a.firstContext;e:for(;null!==a;){var c=a;a=i;for(var h=0;h<t.length;h++)if(c.context===t[h]){a.lanes|=r,null!==(c=a.alternate)&&(c.lanes|=r),aE(a.return,r,e),o||(s=null);break e}a=c.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(u(341));s.lanes|=r,null!==(a=s.alternate)&&(a.lanes|=r),aE(s,r,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function aO(e,t,r,o){e=null;for(var i=t,a=!1;null!==i;){if(!a){if(0!=(524288&i.flags))a=!0;else if(0!=(262144&i.flags))break}if(10===i.tag){var s=i.alternate;if(null===s)throw Error(u(387));if(null!==(s=s.memoizedProps)){var c=i.type;rH(i.pendingProps.value,s.value)||(null!==e?e.push(c):e=[c])}}else if(i===eu.current){if(null===(s=i.alternate))throw Error(u(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(ua):e=[ua])}i=i.return}null!==e&&aM(t,e,r,o),t.flags|=262144}function a$(e){for(e=e.firstContext;null!==e;){if(!rH(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aI(e){ak=e,a_=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function az(e){return aD(ak,e)}function aP(e,t){return null===ak&&aI(e),aD(e,t)}function aD(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},null===a_){if(null===e)throw Error(u(308));a_=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else a_=a_.next=t;return r}var aA=!1;function aL(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function aN(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aH(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aB(e,t,r){var o=e.updateQueue;if(null===o)return null;if(o=o.shared,0!=(2&sG)){var i=o.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),o.pending=t,t=ou(e),oc(e,null,r),t}return oa(e,o,t,r),ou(e)}function aW(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194176&r))){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,eU(e,r)}}function aF(e,t){var r=e.updateQueue,o=e.alternate;if(null!==o&&r===(o=o.updateQueue)){var i=null,a=null;if(null!==(r=r.firstBaseUpdate)){do{var s={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};null===a?i=a=s:a=a.next=s,r=r.next}while(null!==r)null===a?i=a=t:a=a.next=t}else i=a=t;r={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var aG=!1;function aj(){if(aG){var e=nf;if(null!==e)throw e}}function aU(e,t,r,o){aG=!1;var i=e.updateQueue;aA=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(null!==c){i.shared.pending=null;var u=c,h=u.next;u.next=null,null===s?a=h:s.next=h,s=u;var d=e.alternate;null!==d&&(c=(d=d.updateQueue).lastBaseUpdate)!==s&&(null===c?d.firstBaseUpdate=h:c.next=h,d.lastBaseUpdate=u)}if(null!==a){var p=i.baseState;for(s=0,d=h=u=null,c=a;;){var f=-0x20000001&c.lane,g=f!==c.lane;if(g?(sV&f)===f:(o&f)===f){0!==f&&f===np&&(aG=!0),null!==d&&(d=d.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var m=e,b=c;switch(f=t,b.tag){case 1:if("function"==typeof(m=b.payload)){p=m.call(r,p,f);break e}p=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null==(f="function"==typeof(m=b.payload)?m.call(r,p,f):m))break e;p=F({},p,f);break e;case 2:aA=!0}}null!==(f=c.callback)&&(e.flags|=64,g&&(e.flags|=8192),null===(g=i.callbacks)?i.callbacks=[f]:g.push(f))}else g={lane:f,tag:c.tag,payload:c.payload,callback:c.callback,next:null},null===d?(h=d=g,u=p):d=d.next=g,s|=f;if(null===(c=c.next))if(null===(c=i.shared.pending))break;else c=(g=c).next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}null===d&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=d,null===a&&(i.shared.lanes=0),s0|=s,e.lanes=s,e.memoizedState=p}}function aV(e,t){if("function"!=typeof e)throw Error(u(191,e));e.call(t)}function aq(e,t){var r=e.callbacks;if(null!==r)for(e.callbacks=null,e=0;e<r.length;e++)aV(r[e],t)}function aZ(e,t){try{var r=t.updateQueue,o=null!==r?r.lastEffect:null;if(null!==o){var i=o.next;r=i;do{if((r.tag&e)===e){o=void 0;var a=r.create;r.inst.destroy=o=a()}r=r.next}while(r!==i)}}catch(e){lj(t,t.return,e)}}function aK(e,t,r){try{var o=t.updateQueue,i=null!==o?o.lastEffect:null;if(null!==i){var a=i.next;o=a;do{if((o.tag&e)===e){var s=o.inst,c=s.destroy;if(void 0!==c){s.destroy=void 0,i=t;try{c()}catch(e){lj(i,r,e)}}}o=o.next}while(o!==a)}}catch(e){lj(t,t.return,e)}}function aY(e){var t=e.updateQueue;if(null!==t){var r=e.stateNode;try{aq(t,r)}catch(t){lj(e,e.return,t)}}}function aQ(e,t,r){r.props=iQ(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(r){lj(e,t,r)}}function aX(e,t){try{var r=e.ref;if(null!==r){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=o;break;default:i=o}"function"==typeof r?e.refCleanup=r(i):r.current=i}}catch(r){lj(e,t,r)}}function aJ(e,t){var r=e.ref,o=e.refCleanup;if(null!==r)if("function"==typeof o)try{o()}catch(r){lj(e,t,r)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"==typeof r)try{r(null)}catch(r){lj(e,t,r)}else r.current=null}function a0(e){var t=e.type,r=e.memoizedProps,o=e.stateNode;try{switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(t){lj(e,e.return,t)}}function a1(e,t,r){try{var o=e.stateNode;(function(e,t,r,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,s=null,c=null,h=null,d=null,p=null;for(m in r){var f=r[m];if(r.hasOwnProperty(m)&&null!=f)switch(m){case"checked":case"value":break;case"defaultValue":h=f;default:o.hasOwnProperty(m)||ck(e,t,m,null,o,f)}}for(var g in o){var m=o[g];if(f=r[g],o.hasOwnProperty(g)&&(null!=m||null!=f))switch(g){case"type":a=m;break;case"name":i=m;break;case"checked":d=m;break;case"defaultChecked":p=m;break;case"value":s=m;break;case"defaultValue":c=m;break;case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(u(137,t));break;default:m!==f&&ck(e,t,g,m,o,f)}}tb(e,s,c,h,d,p,a,i);return;case"select":for(a in m=s=c=g=null,r)if(h=r[a],r.hasOwnProperty(a)&&null!=h)switch(a){case"value":break;case"multiple":m=h;default:o.hasOwnProperty(a)||ck(e,t,a,null,o,h)}for(i in o)if(a=o[i],h=r[i],o.hasOwnProperty(i)&&(null!=a||null!=h))switch(i){case"value":g=a;break;case"defaultValue":c=a;break;case"multiple":s=a;default:a!==h&&ck(e,t,i,a,o,h)}t=c,r=s,o=m,null!=g?tw(e,!!r,g,!1):!!o!=!!r&&(null!=t?tw(e,!!r,t,!0):tw(e,!!r,r?[]:"",!1));return;case"textarea":for(c in m=g=null,r)if(i=r[c],r.hasOwnProperty(c)&&null!=i&&!o.hasOwnProperty(c))switch(c){case"value":case"children":break;default:ck(e,t,c,null,o,i)}for(s in o)if(i=o[s],a=r[s],o.hasOwnProperty(s)&&(null!=i||null!=a))switch(s){case"value":g=i;break;case"defaultValue":m=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(u(91));break;default:i!==a&&ck(e,t,s,i,o,a)}tS(e,g,m);return;case"option":for(var b in r)g=r[b],r.hasOwnProperty(b)&&null!=g&&!o.hasOwnProperty(b)&&("selected"===b?e.selected=!1:ck(e,t,b,null,o,g));for(h in o)g=o[h],m=r[h],o.hasOwnProperty(h)&&g!==m&&(null!=g||null!=m)&&("selected"===h?e.selected=g&&"function"!=typeof g&&"symbol"!=typeof g:ck(e,t,h,g,o,m));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in r)g=r[v],r.hasOwnProperty(v)&&null!=g&&!o.hasOwnProperty(v)&&ck(e,t,v,null,o,g);for(d in o)if(g=o[d],m=r[d],o.hasOwnProperty(d)&&g!==m&&(null!=g||null!=m))switch(d){case"children":case"dangerouslySetInnerHTML":if(null!=g)throw Error(u(137,t));break;default:ck(e,t,d,g,o,m)}return;default:if(tT(t)){for(var w in r)g=r[w],r.hasOwnProperty(w)&&void 0!==g&&!o.hasOwnProperty(w)&&c_(e,t,w,void 0,o,g);for(p in o)g=o[p],m=r[p],o.hasOwnProperty(p)&&g!==m&&(void 0!==g||void 0!==m)&&c_(e,t,p,g,o,m);return}}for(var S in r)g=r[S],r.hasOwnProperty(S)&&null!=g&&!o.hasOwnProperty(S)&&ck(e,t,S,null,o,g);for(f in o)g=o[f],m=r[f],o.hasOwnProperty(f)&&g!==m&&(null!=g||null!=m)&&ck(e,t,f,g,o,m)})(o,e.type,r,t),o[eY]=t}catch(t){lj(e,e.return,t)}}function a2(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag||4===e.tag}function a5(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||a2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&27!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function a3(e,t,r){var o=e.tag;if(5===o||6===o)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==o&&27!==o&&null!==(e=e.child))for(a3(e,t,r),e=e.sibling;null!==e;)a3(e,t,r),e=e.sibling}var a6=!1,a4=!1,a8=!1,a7="function"==typeof WeakSet?WeakSet:Set,a9=null,se=!1;function st(e,t,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:sd(e,r),4&o&&aZ(5,r);break;case 1:if(sd(e,r),4&o)if(e=r.stateNode,null===t)try{e.componentDidMount()}catch(e){lj(r,r.return,e)}else{var i=iQ(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){lj(r,r.return,e)}}64&o&&aY(r),512&o&&aX(r,r.return);break;case 3:if(sd(e,r),64&o&&null!==(o=r.updateQueue)){if(e=null,null!==r.child)switch(r.child.tag){case 27:case 5:case 1:e=r.child.stateNode}try{aq(o,e)}catch(e){lj(r,r.return,e)}}break;case 26:sd(e,r),512&o&&aX(r,r.return);break;case 27:case 5:sd(e,r),null===t&&4&o&&a0(r),512&o&&aX(r,r.return);break;case 12:default:sd(e,r);break;case 13:sd(e,r),4&o&&sa(e,r);break;case 22:if(!(i=null!==r.memoizedState||a6)){t=null!==t&&null!==t.memoizedState||a4;var a=a6,s=a4;a6=i,(a4=t)&&!s?function e(t,r,o){for(o=o&&0!=(8772&r.subtreeFlags),r=r.child;null!==r;){var i=r.alternate,a=t,s=r,c=s.flags;switch(s.tag){case 0:case 11:case 15:e(a,s,o),aZ(4,s);break;case 1:if(e(a,s,o),"function"==typeof(a=(i=s).stateNode).componentDidMount)try{a.componentDidMount()}catch(e){lj(i,i.return,e)}if(null!==(a=(i=s).updateQueue)){var u=i.stateNode;try{var h=a.shared.hiddenCallbacks;if(null!==h)for(a.shared.hiddenCallbacks=null,a=0;a<h.length;a++)aV(h[a],u)}catch(e){lj(i,i.return,e)}}o&&64&c&&aY(s),aX(s,s.return);break;case 26:case 27:case 5:e(a,s,o),o&&null===i&&4&c&&a0(s),aX(s,s.return);break;case 12:default:e(a,s,o);break;case 13:e(a,s,o),o&&4&c&&sa(a,s);break;case 22:null===s.memoizedState&&e(a,s,o),aX(s,s.return)}r=r.sibling}}(e,r,0!=(8772&r.subtreeFlags)):sd(e,r),a6=a,a4=s}512&o&&("manual"===r.memoizedProps.mode?aX(r,r.return):aJ(r,r.return))}}var sr=null,so=!1;function sn(e,t,r){for(r=r.child;null!==r;)si(e,t,r),r=r.sibling}function si(e,t,r){if(eO&&"function"==typeof eO.onCommitFiberUnmount)try{eO.onCommitFiberUnmount(eM,r)}catch{}switch(r.tag){case 26:a4||aJ(r,t),sn(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode).parentNode.removeChild(r);break;case 27:a4||aJ(r,t);var o=sr,i=so;for(sr=r.stateNode,sn(e,t,r),t=(r=r.stateNode).attributes;t.length;)r.removeAttributeNode(t[0]);e5(r),sr=o,so=i;break;case 5:a4||aJ(r,t);case 6:i=sr;var a=so;if(sr=null,sn(e,t,r),sr=i,so=a,null!==sr)if(so)try{e=sr,o=r.stateNode,8===e.nodeType?e.parentNode.removeChild(o):e.removeChild(o)}catch(e){lj(r,t,e)}else try{sr.removeChild(r.stateNode)}catch(e){lj(r,t,e)}break;case 18:null!==sr&&(so?(t=sr,r=r.stateNode,8===t.nodeType?cH(t.parentNode,r):1===t.nodeType&&cH(t,r),uL(t)):cH(sr,r.stateNode));break;case 4:o=sr,i=so,sr=r.stateNode.containerInfo,so=!0,sn(e,t,r),sr=o,so=i;break;case 0:case 11:case 14:case 15:a4||aK(2,r,t),a4||aK(4,r,t),sn(e,t,r);break;case 1:a4||(aJ(r,t),"function"==typeof(o=r.stateNode).componentWillUnmount&&aQ(r,t,o)),sn(e,t,r);break;case 21:default:sn(e,t,r);break;case 22:a4||aJ(r,t),a4=(o=a4)||null!==r.memoizedState,sn(e,t,r),a4=o}}function sa(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))try{uL(e)}catch(e){lj(t,t.return,e)}}function ss(e,t){var r=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new a7),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new a7),t;default:throw Error(u(435,e.tag))}}(e);t.forEach(function(t){var o=lQ.bind(null,e,t);r.has(t)||(r.add(t),t.then(o,o))})}function sl(e,t){var r=t.deletions;if(null!==r)for(var o=0;o<r.length;o++){var i=r[o],a=e,s=t,c=s;e:for(;null!==c;){switch(c.tag){case 27:case 5:sr=c.stateNode,so=!1;break e;case 3:case 4:sr=c.stateNode.containerInfo,so=!0;break e}c=c.return}if(null===sr)throw Error(u(160));si(a,s,i),sr=null,so=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)su(t,e),t=t.sibling}var sc=null;function su(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:sl(t,e),sh(e),4&o&&(aK(3,e,e.return),aZ(3,e),aK(5,e,e.return));break;case 1:sl(t,e),sh(e),512&o&&(a4||null===r||aJ(r,r.return)),64&o&&a6&&null!==(e=e.updateQueue)&&null!==(o=e.callbacks)&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===r?o:r.concat(o));break;case 26:var i=sc;if(sl(t,e),sh(e),512&o&&(a4||null===r||aJ(r,r.return)),4&o){var a=null!==r?r.memoizedState:null;if(o=e.memoizedState,null===r)if(null===o)if(null===e.stateNode){e:{o=e.type,r=e.memoizedProps,i=i.ownerDocument||i;t:switch(o){case"title":(!(a=i.getElementsByTagName("title")[0])||a[e2]||a[eK]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=i.createElement(o),i.head.insertBefore(a,i.querySelector("head > title"))),cR(a,o,r),a[eK]=e,e7(a),o=a;break e;case"link":var s=c8("link","href",i).get(o+(r.href||""));if(s){for(var c=0;c<s.length;c++)if((a=s[c]).getAttribute("href")===(null==r.href?null:r.href)&&a.getAttribute("rel")===(null==r.rel?null:r.rel)&&a.getAttribute("title")===(null==r.title?null:r.title)&&a.getAttribute("crossorigin")===(null==r.crossOrigin?null:r.crossOrigin)){s.splice(c,1);break t}}cR(a=i.createElement(o),o,r),i.head.appendChild(a);break;case"meta":if(s=c8("meta","content",i).get(o+(r.content||""))){for(c=0;c<s.length;c++)if((a=s[c]).getAttribute("content")===(null==r.content?null:""+r.content)&&a.getAttribute("name")===(null==r.name?null:r.name)&&a.getAttribute("property")===(null==r.property?null:r.property)&&a.getAttribute("http-equiv")===(null==r.httpEquiv?null:r.httpEquiv)&&a.getAttribute("charset")===(null==r.charSet?null:r.charSet)){s.splice(c,1);break t}}cR(a=i.createElement(o),o,r),i.head.appendChild(a);break;default:throw Error(u(468,o))}a[eK]=e,e7(a),o=a}e.stateNode=o}else c7(i,e.type,e.stateNode);else e.stateNode=c2(i,o,e.memoizedProps);else a!==o?(null===a?null!==r.stateNode&&(r=r.stateNode).parentNode.removeChild(r):a.count--,null===o?c7(i,e.type,e.stateNode):c2(i,o,e.memoizedProps)):null===o&&null!==e.stateNode&&a1(e,e.memoizedProps,r.memoizedProps)}break;case 27:if(4&o&&null===e.alternate){i=e.stateNode,a=e.memoizedProps;try{for(var h=i.firstChild;h;){var d=h.nextSibling,p=h.nodeName;h[e2]||"HEAD"===p||"BODY"===p||"SCRIPT"===p||"STYLE"===p||"LINK"===p&&"stylesheet"===h.rel.toLowerCase()||i.removeChild(h),h=d}for(var f=e.type,g=i.attributes;g.length;)i.removeAttributeNode(g[0]);cR(i,f,a),i[eK]=e,i[eY]=a}catch(t){lj(e,e.return,t)}}case 5:if(sl(t,e),sh(e),512&o&&(a4||null===r||aJ(r,r.return)),32&e.flags){i=e.stateNode;try{tC(i,"")}catch(t){lj(e,e.return,t)}}4&o&&null!=e.stateNode&&(i=e.memoizedProps,a1(e,i,null!==r?r.memoizedProps:i)),1024&o&&(a8=!0);break;case 6:if(sl(t,e),sh(e),4&o){if(null===e.stateNode)throw Error(u(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(t){lj(e,e.return,t)}}break;case 3:if(c4=null,i=sc,sc=cV(t.containerInfo),sl(t,e),sc=i,sh(e),4&o&&null!==r&&r.memoizedState.isDehydrated)try{uL(t.containerInfo)}catch(t){lj(e,e.return,t)}a8&&(a8=!1,function e(t){if(1024&t.subtreeFlags)for(t=t.child;null!==t;){var r=t;e(r),5===r.tag&&1024&r.flags&&r.stateNode.reset(),t=t.sibling}}(e));break;case 4:o=sc,sc=cV(e.stateNode.containerInfo),sl(t,e),sh(e),sc=o;break;case 12:default:sl(t,e),sh(e);break;case 13:sl(t,e),sh(e),8192&e.child.flags&&null!==e.memoizedState!=(null!==r&&null!==r.memoizedState)&&(s9=ew()),4&o&&null!==(o=e.updateQueue)&&(e.updateQueue=null,ss(e,o));break;case 22:if(512&o&&(a4||null===r||aJ(r,r.return)),h=null!==e.memoizedState,d=null!==r&&null!==r.memoizedState,p=a6,f=a4,a6=p||h,a4=f||d,sl(t,e),a4=f,a6=p,sh(e),(t=e.stateNode)._current=e,t._visibility&=-3,t._visibility|=2&t._pendingVisibility,8192&o&&(t._visibility=h?-2&t._visibility:1|t._visibility,h&&(t=a6||a4,null===r||d||t||function e(t){for(t=t.child;null!==t;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:aK(4,r,r.return),e(r);break;case 1:aJ(r,r.return);var o=r.stateNode;"function"==typeof o.componentWillUnmount&&aQ(r,r.return,o),e(r);break;case 26:case 27:case 5:aJ(r,r.return),e(r);break;case 22:aJ(r,r.return),null===r.memoizedState&&e(r);break;default:e(r)}t=t.sibling}}(e)),null===e.memoizedProps||"manual"!==e.memoizedProps.mode))e:for(r=null,t=e;;){if(5===t.tag||26===t.tag||27===t.tag){if(null===r){d=r=t;try{if(i=d.stateNode,h)a=i.style,"function"==typeof a.setProperty?a.setProperty("display","none","important"):a.display="none";else{s=d.stateNode;var m=null!=(c=d.memoizedProps.style)&&c.hasOwnProperty("display")?c.display:null;s.style.display=null==m||"boolean"==typeof m?"":(""+m).trim()}}catch(e){lj(d,d.return,e)}}}else if(6===t.tag){if(null===r){d=t;try{d.stateNode.nodeValue=h?"":d.memoizedProps}catch(e){lj(d,d.return,e)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}4&o&&null!==(o=e.updateQueue)&&null!==(r=o.retryQueue)&&(o.retryQueue=null,ss(e,r));break;case 19:sl(t,e),sh(e),4&o&&null!==(o=e.updateQueue)&&(e.updateQueue=null,ss(e,o));case 21:}}function sh(e){var t=e.flags;if(2&t){try{if(27!==e.tag){e:{for(var r=e.return;null!==r;){if(a2(r)){var o=r;break e}r=r.return}throw Error(u(160))}switch(o.tag){case 27:var i=o.stateNode,a=a5(e);a3(e,a,i);break;case 5:var s=o.stateNode;32&o.flags&&(tC(s,""),o.flags&=-33);var c=a5(e);a3(e,c,s);break;case 3:case 4:var h=o.stateNode.containerInfo,d=a5(e);!function e(t,r,o){var i=t.tag;if(5===i||6===i)t=t.stateNode,r?8===o.nodeType?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(8===o.nodeType?(r=o.parentNode).insertBefore(t,o):(r=o).appendChild(t),null!=(o=o._reactRootContainer)||null!==r.onclick||(r.onclick=cC));else if(4!==i&&27!==i&&null!==(t=t.child))for(e(t,r,o),t=t.sibling;null!==t;)e(t,r,o),t=t.sibling}(e,d,h);break;default:throw Error(u(161))}}}catch(t){lj(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function sd(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)st(e,t.alternate,t),t=t.sibling}function sp(e,t){var r=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==r&&(null!=e&&e.refCount++,null!=r&&nu(r))}function sf(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&nu(e))}function sg(e,t,r,o){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)sm(e,t,r,o),t=t.sibling}function sm(e,t,r,o){var i=t.flags;switch(t.tag){case 0:case 11:case 15:sg(e,t,r,o),2048&i&&aZ(9,t);break;case 3:sg(e,t,r,o),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&nu(e)));break;case 12:if(2048&i){sg(e,t,r,o),e=t.stateNode;try{var a=t.memoizedProps,s=a.id,c=a.onPostCommit;"function"==typeof c&&c(s,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(e){lj(t,t.return,e)}}else sg(e,t,r,o);break;case 23:break;case 22:a=t.stateNode,null!==t.memoizedState?4&a._visibility?sg(e,t,r,o):sb(e,t):4&a._visibility?sg(e,t,r,o):(a._visibility|=4,function e(t,r,o,i,a){for(a=a&&0!=(10256&r.subtreeFlags),r=r.child;null!==r;){var s=r,c=s.flags;switch(s.tag){case 0:case 11:case 15:e(t,s,o,i,a),aZ(8,s);break;case 23:break;case 22:var u=s.stateNode;null!==s.memoizedState?4&u._visibility?e(t,s,o,i,a):sb(t,s):(u._visibility|=4,e(t,s,o,i,a)),a&&2048&c&&sp(s.alternate,s);break;case 24:e(t,s,o,i,a),a&&2048&c&&sf(s.alternate,s);break;default:e(t,s,o,i,a)}r=r.sibling}}(e,t,r,o,0!=(10256&t.subtreeFlags))),2048&i&&sp(t.alternate,t);break;case 24:sg(e,t,r,o),2048&i&&sf(t.alternate,t);break;default:sg(e,t,r,o)}}function sb(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var r=t,o=r.flags;switch(r.tag){case 22:sb(e,r),2048&o&&sp(r.alternate,r);break;case 24:sb(e,r),2048&o&&sf(r.alternate,r);break;default:sb(e,r)}t=t.sibling}}var sv=8192;function sy(e){if(e.subtreeFlags&sv)for(e=e.child;null!==e;)sw(e),e=e.sibling}function sw(e){switch(e.tag){case 26:sy(e),e.flags&sv&&null!==e.memoizedState&&function(e,t,r){if(null===ue)throw Error(u(475));var o=ue;if("stylesheet"===t.type&&("string"!=typeof r.media||!1!==matchMedia(r.media).matches)&&0==(4&t.state.loading)){if(null===t.instance){var i=cQ(r.href),a=e.querySelector(cX(i));if(a){null!==(e=a._p)&&"object"==typeof e&&"function"==typeof e.then&&(o.count++,o=ur.bind(o),e.then(o,o)),t.state.loading|=4,t.instance=a,e7(a);return}a=e.ownerDocument||e,r=cJ(r),(i=cj.get(i))&&c3(r,i),e7(a=a.createElement("link"));var s=a;s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),cR(a,"link",r),t.instance=a}null===o.stylesheets&&(o.stylesheets=new Map),o.stylesheets.set(t,e),(e=t.state.preload)&&0==(3&t.state.loading)&&(o.count++,t=ur.bind(o),e.addEventListener("load",t),e.addEventListener("error",t))}}(sc,e.memoizedState,e.memoizedProps);break;case 5:default:sy(e);break;case 3:case 4:var t=sc;sc=cV(e.stateNode.containerInfo),sy(e),sc=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=sv,sv=0x1000000,sy(e),sv=t):sy(e))}}function sS(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(null!==e)}}function sx(e){var t=e.deletions;if(0!=(16&e.flags)){if(null!==t)for(var r=0;r<t.length;r++){var o=t[r];a9=o,sk(o,e)}sS(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)sC(e),e=e.sibling}function sC(e){switch(e.tag){case 0:case 11:case 15:sx(e),2048&e.flags&&aK(9,e,e.return);break;case 3:case 12:default:sx(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&4&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-5,function e(t){var r=t.deletions;if(0!=(16&t.flags)){if(null!==r)for(var o=0;o<r.length;o++){var i=r[o];a9=i,sk(i,t)}sS(t)}for(t=t.child;null!==t;){switch((r=t).tag){case 0:case 11:case 15:aK(8,r,r.return),e(r);break;case 22:4&(o=r.stateNode)._visibility&&(o._visibility&=-5,e(r));break;default:e(r)}t=t.sibling}}(e)):sx(e)}}function sk(e,t){for(;null!==a9;){var r=a9;switch(r.tag){case 0:case 11:case 15:aK(8,r,t);break;case 23:case 22:if(null!==r.memoizedState&&null!==r.memoizedState.cachePool){var o=r.memoizedState.cachePool.pool;null!=o&&o.refCount++}break;case 24:nu(r.memoizedState.cache)}if(null!==(o=r.child))o.return=r,a9=o;else for(r=e;null!==a9;){var i=(o=a9).sibling,a=o.return;if(!function e(t){var r=t.alternate;null!==r&&(t.alternate=null,e(r)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(r=t.stateNode)&&e5(r),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(o),o===r){a9=null;break}if(null!==i){i.return=a,a9=i;break}a9=a}}}function s_(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sR(e,t,r,o){return new s_(e,t,r,o)}function sT(e){return!(!(e=e.prototype)||!e.isReactComponent)}function sE(e,t){var r=e.alternate;return null===r?((r=sR(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=0x1e00000&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function sM(e,t){e.flags&=0x1e00002;var r=e.alternate;return null===r?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,e.dependencies=null===(t=r.dependencies)?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function sO(e,t,r,o,i,a){var s=0;if(o=e,"function"==typeof e)sT(e)&&(s=1);else if("string"==typeof e)s=!function(e,t,r){if(1===r||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break;return!0;case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break;if("stylesheet"===t.rel)return e=t.disabled,"string"==typeof t.precedence&&null==e;return!0;case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return!0}return!1}(e,r,es.current)?"html"===e||"head"===e||"body"===e?27:5:26;else e:switch(e){case f:return s$(r.children,i,a,t);case g:s=8,i|=24;break;case m:return(e=sR(12,r,t,2|i)).elementType=m,e.lanes=a,e;case x:return(e=sR(13,r,t,i)).elementType=x,e.lanes=a,e;case C:return(e=sR(19,r,t,i)).elementType=C,e.lanes=a,e;case E:return sI(r,i,a,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case b:case w:s=10;break e;case v:s=9;break e;case S:s=11;break e;case _:s=14;break e;case T:s=16,o=null;break e}s=29,r=Error(u(130,null===e?"null":typeof e,"")),o=null}return(t=sR(s,r,t,i)).elementType=e,t.type=o,t.lanes=a,t}function s$(e,t,r,o){return(e=sR(7,e,o,t)).lanes=r,e}function sI(e,t,r,o){(e=sR(22,e,o,t)).elementType=E,e.lanes=r;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=i._current;if(null===e)throw Error(u(456));if(0==(2&i._pendingVisibility)){var t=ol(e,2);null!==t&&(i._pendingVisibility|=2,lb(t,e,2))}},attach:function(){var e=i._current;if(null===e)throw Error(u(456));if(0!=(2&i._pendingVisibility)){var t=ol(e,2);null!==t&&(i._pendingVisibility&=-3,lb(t,e,2))}}};return e.stateNode=i,e}function sz(e,t,r){return(e=sR(6,e,null,t)).lanes=r,e}function sP(e,t,r){return(t=sR(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sD(e){e.flags|=4}function sA(e,t){if("stylesheet"!==t.type||0!=(4&t.state.loading))e.flags&=-0x1000001;else if(e.flags|=0x1000000,!c9(t)){if(null!==(t=o8.current)&&((4194176&sV)===sV?null!==o7:(0x3c00000&sV)!==sV&&0==(0x20000000&sV)||t!==o7))throw oU=oW,oB;e.flags|=8192}}function sL(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?eW():0x20000000,e.lanes|=t,s6|=t)}function sN(e,t){if(!oM)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;null!==r;)null!==r.alternate&&(o=r),r=r.sibling;null===o?t||null===e.tail?e.tail=null:e.tail.sibling=null:o.sibling=null}}function sH(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,o=0;if(t)for(var i=e.child;null!==i;)r|=i.lanes|i.childLanes,o|=0x1e00000&i.subtreeFlags,o|=0x1e00000&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function sB(e,t){switch(oR(t),t.tag){case 3:aT(nl),ed();break;case 26:case 27:case 5:ef(t);break;case 4:ed();break;case 13:nr(t);break;case 19:ei(no);break;case 10:aT(t.type);break;case 22:case 23:nr(t),o4(),null!==e&&ei(nb);break;case 24:aT(nl)}}var sW={getCacheForType:function(e){var t=az(nl),r=t.data.get(e);return void 0===r&&(r=e(),t.data.set(e,r)),r}},sF="function"==typeof WeakMap?WeakMap:Map,sG=0,sj=null,sU=null,sV=0,sq=0,sZ=null,sK=!1,sY=!1,sQ=!1,sX=0,sJ=0,s0=0,s1=0,s5=0,s3=0,s6=0,s4=null,s8=null,s7=!1,s9=0,le=1/0,ln=null,li=null,la=!1,ls=null,ll=0,lc=0,lu=null,lh=0,lp=null;function lg(){if(0!=(2&sG)&&0!==sV)return sV&-sV;if(null!==W.T){var e=np;return 0!==e?e:ct()}return eq()}function lm(){0===s3&&(s3=0==(0x20000000&sV)||oM?eB():0x20000000);var e=o8.current;return null!==e&&(e.flags|=32),s3}function lb(e,t,r){(e===sj&&2===sq||null!==e.cancelPendingCommit)&&(l_(e,0),lS(e,sV,s3,!1)),eG(e,r),(0==(2&sG)||e!==sj)&&(e===sj&&(0==(2&sG)&&(s1|=r),4===sJ&&lS(e,sV,s3,!1)),l6(e))}function lv(e,t,r){if(0!=(6&sG))throw Error(u(327));for(var o=!r&&0==(60&t)&&0==(t&e.expiredLanes)||eH(e,t),i=o?function(e,t){var r=sG;sG|=2;var o=lT(),i=lE();sj!==e||sV!==t?(ln=null,le=ew()+500,l_(e,t)):sY=eH(e,t);e:for(;;)try{if(0!==sq&&null!==sU){t=sU;var a=sZ;t:switch(sq){case 1:sq=0,sZ=null,lP(e,t,a,1);break;case 2:if(oF(a)){sq=0,sZ=null,lz(t);break}t=function(){2===sq&&sj===e&&(sq=7),l6(e)},a.then(t,t);break e;case 3:sq=7;break e;case 4:sq=5;break e;case 7:oF(a)?(sq=0,sZ=null,lz(t)):(sq=0,sZ=null,lP(e,t,a,7));break;case 5:var s=null;switch(sU.tag){case 26:s=sU.memoizedState;case 5:case 27:var c=sU;if(s?c9(s):1){sq=0,sZ=null;var h=c.sibling;if(null!==h)sU=h;else{var d=c.return;null!==d?(sU=d,lD(d)):sU=null}break t}}sq=0,sZ=null,lP(e,t,a,5);break;case 6:sq=0,sZ=null,lP(e,t,a,6);break;case 8:lk(),sJ=6;break e;default:throw Error(u(462))}}for(;null!==sU&&!ev();)l$(sU);break}catch(t){lR(e,t)}return(a_=ak=null,W.H=o,W.A=i,sG=r,null!==sU)?0:(sj=null,sV=0,oi(),sJ)}(e,t):lO(e,t,!0),a=o;;){if(0===i)sY&&!o&&lS(e,t,0,!1);else if(6===i)lS(e,t,0,!sK);else{if(r=e.current.alternate,a&&!function(e){for(var t=e;;){var r=t.tag;if((0===r||11===r||15===r)&&16384&t.flags&&null!==(r=t.updateQueue)&&null!==(r=r.stores))for(var o=0;o<r.length;o++){var i=r[o],a=i.getSnapshot;i=i.value;try{if(!rH(a(),i))return!1}catch{return!1}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(r)){i=lO(e,t,!1),a=!1;continue}if(2===i){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=0!=(s=-0x20000001&e.pendingLanes)?s:0x20000000&s?0x20000000:0;if(0!==s){t=s;e:{i=s4;var c=e.current.memoizedState.isDehydrated;if(c&&(l_(e,s).flags|=256),2!==(s=lO(e,s,!1))){if(sQ&&!c){e.errorRecoveryDisabledLanes|=a,s1|=a,i=4;break e}a=s8,s8=i,null!==a&&ly(a)}i=s}if(a=!1,2!==i)continue}}if(1===i){l_(e,0),lS(e,t,0,!0);break}e:{switch(o=e,i){case 0:case 1:throw Error(u(345));case 4:if((4194176&t)===t){lS(o,t,s3,!sK);break e}break;case 2:s8=null;break;case 3:case 5:break;default:throw Error(u(329))}if(o.finishedWork=r,o.finishedLanes=t,(0x3c00000&t)===t&&10<(a=s9+300-ew())){if(lS(o,t,s3,!sK),0!==eN(o,0))break e;o.timeoutHandle=cP(lw.bind(null,o,r,s8,ln,s7,t,s3,s1,s6,sK,2,-0,0),a);break e}lw(o,r,s8,ln,s7,t,s3,s1,s6,sK,0,-0,0)}}break}l6(e)}function ly(e){null===s8?s8=e:s8.push.apply(s8,e)}function lw(e,t,r,o,i,a,s,c,h,d,p,f,g){var m=t.subtreeFlags;if((8192&m||0x1002000==(0x1002000&m))&&(ue={stylesheets:null,count:0,unsuspend:ut},sw(t),null!==(t=function(){if(null===ue)throw Error(u(475));var e=ue;return e.stylesheets&&0===e.count&&un(e,e.stylesheets),0<e.count?function(t){var r=setTimeout(function(){if(e.stylesheets&&un(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}()))){e.cancelPendingCommit=t(lN.bind(null,e,r,o,i,s,c,h,1,f,g)),lS(e,a,s,!d);return}lN(e,r,o,i,s,c,h,p,f,g)}function lS(e,t,r,o){t&=~s5,t&=~s1,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var i=t;0<i;){var a=31-eI(i),s=1<<a;o[a]=-1,i&=~s}0!==r&&ej(e,r,t)}function lx(){return 0!=(6&sG)||(l4(0,!1),!1)}function lk(){if(null!==sU){if(0===sq)var e=sU.return;else e=sU,a_=ak=null,nB(e),oq=null,oZ=0,e=sU;for(;null!==e;)sB(e.alternate,e),e=e.return;sU=null}}function l_(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;-1!==r&&(e.timeoutHandle=-1,cD(r)),null!==(r=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,r()),lk(),sj=e,sU=r=sE(e.current,null),sV=t,sq=0,sZ=null,sK=!1,sY=eH(e,t),sQ=!1,s6=s3=s5=s1=s0=sJ=0,s8=s4=null,s7=!1,0!=(8&t)&&(t|=32&t);var o=e.entangledLanes;if(0!==o)for(e=e.entanglements,o&=t;0<o;){var i=31-eI(o),a=1<<i;t|=e[i],o&=~a}return sX=t,oi(),r}function lR(e,t){nx=null,W.H=iF,t===oH?(t=oV(),sq=3):t===oB?(t=oV(),sq=4):sq=t===i8?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,sZ=t,null===sU&&(sJ=1,i2(e,op(t,e.current)))}function lT(){var e=W.H;return W.H=iF,null===e?iF:e}function lE(){var e=W.A;return W.A=sW,e}function lM(){sJ=4,sK||(4194176&sV)!==sV&&null!==o8.current||(sY=!0),0==(0x7ffffff&s0)&&0==(0x7ffffff&s1)||null===sj||lS(sj,sV,s3,!1)}function lO(e,t,r){var o=sG;sG|=2;var i=lT(),a=lE();(sj!==e||sV!==t)&&(ln=null,l_(e,t)),t=!1;var s=sJ;e:for(;;)try{if(0!==sq&&null!==sU){var c=sU,u=sZ;switch(sq){case 8:lk(),s=6;break e;case 3:case 2:case 6:null===o8.current&&(t=!0);var h=sq;if(sq=0,sZ=null,lP(e,c,u,h),r&&sY){s=0;break e}break;default:h=sq,sq=0,sZ=null,lP(e,c,u,h)}}(function(){for(;null!==sU;)l$(sU)})(),s=sJ;break}catch(t){lR(e,t)}return t&&e.shellSuspendCounter++,a_=ak=null,sG=o,W.H=i,W.A=a,null===sU&&(sj=null,sV=0,oi()),s}function l$(e){var t=ax(e.alternate,e,sX);e.memoizedProps=e.pendingProps,null===t?lD(e):sU=t}function lz(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=as(r,t,t.pendingProps,t.type,void 0,sV);break;case 11:t=as(r,t,t.pendingProps,t.type.render,t.ref,sV);break;case 5:nB(t);default:sB(r,t),t=ax(r,t=sU=sM(t,sX),sX)}e.memoizedProps=e.pendingProps,null===t?lD(e):sU=t}function lP(e,t,r,o){a_=ak=null,nB(t),oq=null,oZ=0;var i=t.return;try{if(function(e,t,r,o,i){if(r.flags|=32768,null!==o&&"object"==typeof o&&"function"==typeof o.then){if(null!==(t=r.alternate)&&aO(t,r,i,!0),null!==(r=o8.current)){switch(r.tag){case 13:return null===o7?lM():null===r.alternate&&0===sJ&&(sJ=3),r.flags&=-257,r.flags|=65536,r.lanes=i,o===oW?r.flags|=16384:(null===(t=r.updateQueue)?r.updateQueue=new Set([o]):t.add(o),lU(e,o,i)),!1;case 22:return r.flags|=65536,o===oW?r.flags|=16384:(null===(t=r.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=t):null===(r=t.retryQueue)?t.retryQueue=new Set([o]):r.add(o),lU(e,o,i)),!1}throw Error(u(435,r.tag))}return lU(e,o,i),lM(),!1}if(oM)return null!==(t=o8.current)?(0==(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,o!==oI&&oN(op(e=Error(u(422),{cause:o}),r))):(o!==oI&&oN(op(t=Error(u(423),{cause:o}),r)),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,o=op(o,r),i=i3(e.stateNode,o,i),aF(e,i),4!==sJ&&(sJ=2)),!1;var a=Error(u(520),{cause:o});if(a=op(a,r),null===s4?s4=[a]:s4.push(a),4!==sJ&&(sJ=2),null===t)return!0;o=op(o,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=i&-i,r.lanes|=e,e=i3(r.stateNode,o,e),aF(r,e),!1;case 1:if(t=r.type,a=r.stateNode,0==(128&r.flags)&&("function"==typeof t.getDerivedStateFromError||null!==a&&"function"==typeof a.componentDidCatch&&(null===li||!li.has(a))))return r.flags|=65536,i&=-i,r.lanes|=i,i4(i=i6(i),e,r,o),aF(r,i),!1}r=r.return}while(null!==r)return!1}(e,i,t,r,sV)){sJ=1,i2(e,op(r,e.current)),sU=null;return}}catch(t){if(null!==i)throw sU=i,t;sJ=1,i2(e,op(r,e.current)),sU=null;return}32768&t.flags?(oM||1===o?e=!0:sY||0!=(0x20000000&sV)?e=!1:(sK=e=!0,(2===o||3===o||6===o)&&null!==(o=o8.current)&&13===o.tag&&(o.flags|=16384)),lL(t,e)):lD(t)}function lD(e){var t=e;do{if(0!=(32768&t.flags))return void lL(t,sK);e=t.return;var r=function(e,t,r){var o=t.pendingProps;switch(oR(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return sH(t),null;case 3:return r=t.stateNode,o=null,null!==e&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),aT(nl),ed(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(null===e||null===e.child)&&(oA(t)?sD(t):null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==oO&&(ly(oO),oO=null))),sH(t),null;case 26:return r=t.memoizedState,null===e?(sD(t),null!==r?(sH(t),sA(t,r)):(sH(t),t.flags&=-0x1000001)):r?r!==e.memoizedState?(sD(t),sH(t),sA(t,r)):(sH(t),t.flags&=-0x1000001):(e.memoizedProps!==o&&sD(t),sH(t),t.flags&=-0x1000001),null;case 27:ef(t),r=ec.current;var i=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==o&&sD(t);else{if(!o){if(null===t.stateNode)throw Error(u(166));return sH(t),null}e=es.current,oA(t)?oP(t,e):(e=cG(i,o,r),t.stateNode=e,sD(t))}return sH(t),null;case 5:if(ef(t),r=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==o&&sD(t);else{if(!o){if(null===t.stateNode)throw Error(u(166));return sH(t),null}if(e=es.current,oA(t))oP(t,e);else{switch(i=cM(ec.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":(e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"==typeof o.is?i.createElement("select",{is:o.is}):i.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e="string"==typeof o.is?i.createElement(r,{is:o.is}):i.createElement(r)}}e[eK]=t,e[eY]=o;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)e.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(t.stateNode=e,cR(e,r,o),r){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break;case"img":e=!0;break;default:e=!1}e&&sD(t)}}return sH(t),t.flags&=-0x1000001,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==o&&sD(t);else{if("string"!=typeof o&&null===t.stateNode)throw Error(u(166));if(e=ec.current,oA(t)){if(e=t.stateNode,r=t.memoizedProps,o=null,null!==(i=oT))switch(i.tag){case 27:case 5:o=i.memoizedProps}e[eK]=t,(e=!!(e.nodeValue===r||null!==o&&!0===o.suppressHydrationWarning||cx(e.nodeValue,r)))||oz(t)}else(e=cM(e).createTextNode(o))[eK]=t,t.stateNode=e}return sH(t),null;case 13:if(o=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=oA(t),null!==o&&null!==o.dehydrated){if(null===e){if(!i)throw Error(u(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(u(317));i[eK]=t}else oL(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;sH(t),i=!1}else null!==oO&&(ly(oO),oO=null),i=!0;if(!i){if(256&t.flags)return nr(t),t;return nr(t),null}}if(nr(t),0!=(128&t.flags))return t.lanes=r,t;if(r=null!==o,e=null!==e&&null!==e.memoizedState,r){o=t.child,i=null,null!==o.alternate&&null!==o.alternate.memoizedState&&null!==o.alternate.memoizedState.cachePool&&(i=o.alternate.memoizedState.cachePool.pool);var a=null;null!==o.memoizedState&&null!==o.memoizedState.cachePool&&(a=o.memoizedState.cachePool.pool),a!==i&&(o.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),sL(t,t.updateQueue),sH(t),null;case 4:return ed(),null===e&&cd(t.stateNode.containerInfo),sH(t),null;case 10:return aT(t.type),sH(t),null;case 19:if(ei(no),null===(i=t.memoizedState))return sH(t),null;if(o=0!=(128&t.flags),null===(a=i.rendering))if(o)sN(i,!1);else{if(0!==sJ||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=nn(e))){for(t.flags|=128,sN(i,!1),e=a.updateQueue,t.updateQueue=e,sL(t,e),t.subtreeFlags=0,e=r,r=t.child;null!==r;)sM(r,e),r=r.sibling;return ea(no,1&no.current|2),t.child}e=e.sibling}null!==i.tail&&ew()>le&&(t.flags|=128,o=!0,sN(i,!1),t.lanes=4194304)}else{if(!o)if(null!==(e=nn(a))){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,sL(t,e),sN(i,!0),null===i.tail&&"hidden"===i.tailMode&&!a.alternate&&!oM)return sH(t),null}else 2*ew()-i.renderingStartTime>le&&0x20000000!==r&&(t.flags|=128,o=!0,sN(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=i.last)?e.sibling=a:t.child=a,i.last=a)}if(null!==i.tail)return t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ew(),t.sibling=null,e=no.current,ea(no,o?1&e|2:1&e),t;return sH(t),null;case 22:case 23:return nr(t),o4(),o=null!==t.memoizedState,null!==e?null!==e.memoizedState!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?0!=(0x20000000&r)&&0==(128&t.flags)&&(sH(t),6&t.subtreeFlags&&(t.flags|=8192)):sH(t),null!==(r=t.updateQueue)&&sL(t,r.retryQueue),r=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),o=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(o=t.memoizedState.cachePool.pool),o!==r&&(t.flags|=2048),null!==e&&ei(nb),null;case 24:return r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),aT(nl),sH(t),null;case 25:return null}throw Error(u(156,t.tag))}(t.alternate,t,sX);if(null!==r){sU=r;return}if(null!==(t=t.sibling)){sU=t;return}sU=t=e}while(null!==t)0===sJ&&(sJ=5)}function lL(e,t){do{var r=function(e,t){switch(oR(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return aT(nl),ed(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return ef(t),null;case 13:if(nr(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(u(340));oL()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return ei(no),null;case 4:return ed(),null;case 10:return aT(t.type),null;case 22:case 23:return nr(t),o4(),null!==e&&ei(nb),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return aT(nl),null;default:return null}}(e.alternate,e);if(null!==r){r.flags&=32767,sU=r;return}if(null!==(r=e.return)&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&null!==(e=e.sibling)){sU=e;return}sU=e=r}while(null!==e)sJ=6,sU=null}function lN(e,t,r,o,i,a,s,c,h,d){var p=W.T,f=J.p;try{J.p=2,W.T=null,function(e,t,r,o,i,a,s,c){do lB();while(null!==ls)if(0!=(6&sG))throw Error(u(327));var h,d,p=e.finishedWork;if(o=e.finishedLanes,null!==p){if(e.finishedWork=null,e.finishedLanes=0,p===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var f=p.lanes|p.childLanes;!function(e,t,r,o,i,a){var s=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var c=e.entanglements,u=e.expirationTimes,h=e.hiddenUpdates;for(r=s&~r;0<r;){var d=31-eI(r),p=1<<d;c[d]=0,u[d]=-1;var f=h[d];if(null!==f)for(h[d]=null,d=0;d<f.length;d++){var g=f[d];null!==g&&(g.lane&=-0x20000001)}r&=~p}0!==o&&ej(e,o,0),0!==a&&0===i&&0!==e.tag&&(e.suspendedLanes|=a&~(s&~t))}(e,o,f|=on,a,s,c),e===sj&&(sU=sj=null,sV=0),0==(10256&p.subtreeFlags)&&0==(10256&p.flags)||la||(la=!0,lc=f,lu=r,h=ek,d=function(){return lB(!0),null},em(h,d)),r=0!=(15990&p.flags),0!=(15990&p.subtreeFlags)||r?(r=W.T,W.T=null,a=J.p,J.p=2,s=sG,sG|=4,function(e,t){if(e=e.containerInfo,cT=ud,rj(e=rG(e))){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var o=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(o&&0!==o.rangeCount){r=o.anchorNode;var i,a=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var c=0,h=-1,d=-1,p=0,f=0,g=e,m=null;t:for(;;){for(;g!==r||0!==a&&3!==g.nodeType||(h=c+a),g!==s||0!==o&&3!==g.nodeType||(d=c+o),3===g.nodeType&&(c+=g.nodeValue.length),null!==(i=g.firstChild);)m=g,g=i;for(;;){if(g===e)break t;if(m===r&&++p===a&&(h=c),m===s&&++f===o&&(d=c),null!==(i=g.nextSibling))break;m=(g=m).parentNode}g=i}r=-1===h||-1===d?null:{start:h,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(cE={focusedElem:e,selectionRange:r},ud=!1,a9=t;null!==a9;)if(e=(t=a9).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,a9=e;else for(;null!==a9;){switch(s=(t=a9).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!=(1024&e)&&null!==s){e=void 0,r=t,a=s.memoizedProps,s=s.memoizedState,o=r.stateNode;try{var b=iQ(r.type,a,r.elementType===r.type);e=o.getSnapshotBeforeUpdate(b,s),o.__reactInternalSnapshotBeforeUpdate=e}catch(e){lj(r,r.return,e)}}break;case 3:if(0!=(1024&e)){if(9===(r=(e=t.stateNode.containerInfo).nodeType))cB(e);else if(1===r)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cB(e);break;default:e.textContent=""}}break;default:if(0!=(1024&e))throw Error(u(163))}if(null!==(e=t.sibling)){e.return=t.return,a9=e;break}a9=t.return}b=se,se=!1}(e,p),su(p,e),function(e,t){var r=rG(t);t=e.focusedElem;var o=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&function e(t,r){return!!t&&!!r&&(t===r||(!t||3!==t.nodeType)&&(r&&3===r.nodeType?e(t,r.parentNode):"contains"in t?t.contains(r):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(r))))}(t.ownerDocument.documentElement,t)){if(null!==o&&rj(t)){if(e=o.start,void 0===(r=o.end)&&(r=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(r,t.value.length);else if((r=(e=t.ownerDocument||document)&&e.defaultView||window).getSelection){r=r.getSelection();var i=t.textContent.length,a=Math.min(o.start,i);o=void 0===o.end?a:Math.min(o.end,i),!r.extend&&a>o&&(i=o,o=a,a=i),i=rF(t,a);var s=rF(t,o);i&&s&&(1!==r.rangeCount||r.anchorNode!==i.node||r.anchorOffset!==i.offset||r.focusNode!==s.node||r.focusOffset!==s.offset)&&((e=e.createRange()).setStart(i.node,i.offset),r.removeAllRanges(),a>o?(r.addRange(e),r.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),r.addRange(e)))}}for(e=[],r=t;r=r.parentNode;)1===r.nodeType&&e.push({element:r,left:r.scrollLeft,top:r.scrollTop});for("function"==typeof t.focus&&t.focus(),t=0;t<e.length;t++)(r=e[t]).element.scrollLeft=r.left,r.element.scrollTop=r.top}}(cE,e.containerInfo),ud=!!cT,cE=cT=null,e.current=p,st(e,p.alternate,p),ey(),sG=s,J.p=a,W.T=r):e.current=p,la?(la=!1,ls=e,ll=o):lH(e,f),0===(f=e.pendingLanes)&&(li=null);var g=p.stateNode;if(eO&&"function"==typeof eO.onCommitFiberRoot)try{eO.onCommitFiberRoot(eM,g,void 0,128==(128&g.current.flags))}catch{}if(l6(e),null!==t)for(i=e.onRecoverableError,p=0;p<t.length;p++)i((f=t[p]).value,{componentStack:f.stack});0!=(3&ll)&&lB(),f=e.pendingLanes,0!=(4194218&o)&&0!=(42&f)?e===lp?lh++:(lh=0,lp=e):lh=0,l4(0,!1)}}(e,t,r,o,f,i,a,s,c,h,d)}finally{W.T=p,J.p=f}}function lH(e,t){0==(e.pooledCacheLanes&=t)&&null!=(t=e.pooledCache)&&(e.pooledCache=null,nu(t))}function lB(){if(null!==ls){var e=ls,t=lc;lc=0;var r=eV(ll),o=W.T,i=J.p;try{if(J.p=32>r?32:r,W.T=null,null===ls)var a=!1;else{r=lu,lu=null;var s=ls,c=ll;if(ls=null,ll=0,0!=(6&sG))throw Error(u(331));var h=sG;if(sG|=4,sC(s.current),sm(s,s.current,c,r),sG=h,l4(0,!1),eO&&"function"==typeof eO.onPostCommitFiberRoot)try{eO.onPostCommitFiberRoot(eM,s)}catch{}a=!0}return a}finally{J.p=i,W.T=o,lH(e,t)}}return!1}function lG(e,t,r){t=op(r,t),t=i3(e.stateNode,t,2),null!==(e=aB(e,t,2))&&(eG(e,2),l6(e))}function lj(e,t,r){if(3===e.tag)lG(e,e,r);else for(;null!==t;){if(3===t.tag){lG(t,e,r);break}if(1===t.tag){var o=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof o.componentDidCatch&&(null===li||!li.has(o))){e=op(r,e),null!==(o=aB(t,r=i6(2),2))&&(i4(r,o,t,e),eG(o,2),l6(o));break}}t=t.return}}function lU(e,t,r){var o=e.pingCache;if(null===o){o=e.pingCache=new sF;var i=new Set;o.set(t,i)}else void 0===(i=o.get(t))&&(i=new Set,o.set(t,i));i.has(r)||(sQ=!0,i.add(r),e=lV.bind(null,e,t,r),t.then(e,e))}function lV(e,t,r){var o=e.pingCache;null!==o&&o.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,sj===e&&(sV&r)===r&&(4===sJ||3===sJ&&(0x3c00000&sV)===sV&&300>ew()-s9?0==(2&sG)&&l_(e,0):s5|=r,s6===sV&&(s6=0)),l6(e)}function lK(e,t){0===t&&(t=eW()),null!==(e=ol(e,t))&&(eG(e,t),l6(e))}function lY(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),lK(e,r)}function lQ(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;null!==i&&(r=i.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(u(314))}null!==o&&o.delete(t),lK(e,r)}var lJ=null,l0=null,l1=!1,l2=!1,l5=!1,l3=0;function l6(e){var t;e!==l0&&null===e.next&&(null===l0?lJ=l0=e:l0=l0.next=e),l2=!0,l1||(l1=!0,t=l8,cL(function(){0!=(6&sG)?em(ex,t):t()}))}function l4(e,t){if(!l5&&l2){l5=!0;do for(var r=!1,o=lJ;null!==o;){if(!t)if(0!==e){var i=o.pendingLanes;if(0===i)var a=0;else{var s=o.suspendedLanes,c=o.pingedLanes;a=0xc000055&(a=(1<<31-eI(42|e)+1)-1&(i&~(s&~c)))?0xc000055&a|1:a?2|a:0}0!==a&&(r=!0,ce(o,a))}else a=sV,0==(3&(a=eN(o,o===sj?a:0)))||eH(o,a)||(r=!0,ce(o,a));o=o.next}while(r)l5=!1}}function l8(){l2=l1=!1;var e,t=0;0!==l3&&(((e=window.event)&&"popstate"===e.type?e===cz||(cz=e,0):(cz=null,1))||(t=l3),l3=0);for(var r=ew(),o=null,i=lJ;null!==i;){var a=i.next,s=l7(i,r);0===s?(i.next=null,null===o?lJ=a:o.next=a,null===a&&(l0=o)):(o=i,(0!==t||0!=(3&s))&&(l2=!0)),i=a}l4(t,!1)}function l7(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=-0x3c00001&e.pendingLanes;0<a;){var s=31-eI(a),c=1<<s,u=i[s];-1===u?(0==(c&r)||0!=(c&o))&&(i[s]=function(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(c,t)):u<=t&&(e.expiredLanes|=c),a&=~c}if(t=sj,r=sV,r=eN(e,e===t?r:0),o=e.callbackNode,0===r||e===t&&2===sq||null!==e.cancelPendingCommit)return null!==o&&null!==o&&eb(o),e.callbackNode=null,e.callbackPriority=0;if(0==(3&r)||eH(e,r)){if((t=r&-r)===e.callbackPriority)return t;switch(null!==o&&eb(o),eV(r)){case 2:case 8:r=eC;break;case 32:default:r=ek;break;case 0x10000000:r=eR}return r=em(r,o=l9.bind(null,e)),e.callbackPriority=t,e.callbackNode=r,t}return null!==o&&null!==o&&eb(o),e.callbackPriority=2,e.callbackNode=null,2}function l9(e,t){var r=e.callbackNode;if(lB()&&e.callbackNode!==r)return null;var o=sV;return 0===(o=eN(e,e===sj?o:0))?null:(lv(e,o,t),l7(e,ew()),null!=e.callbackNode&&e.callbackNode===r?l9.bind(null,e):null)}function ce(e,t){if(lB())return null;lv(e,t,!0)}function ct(){return 0===l3&&(l3=eB()),l3}function cr(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:t$(""+e)}function co(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}for(var cn=0;cn<oe.length;cn++){var ci=oe[cn];ot(ci.toLowerCase(),"on"+(ci[0].toUpperCase()+ci.slice(1)))}ot(r2,"onAnimationEnd"),ot(r5,"onAnimationIteration"),ot(r3,"onAnimationStart"),ot("dblclick","onDoubleClick"),ot("focusin","onFocus"),ot("focusout","onBlur"),ot(r6,"onTransitionRun"),ot(r4,"onTransitionStart"),ot(r8,"onTransitionCancel"),ot(r7,"onTransitionEnd"),tr("onMouseEnter",["mouseout","mouseover"]),tr("onMouseLeave",["mouseout","mouseover"]),tr("onPointerEnter",["pointerout","pointerover"]),tr("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cs=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ca));function cl(e,t){t=0!=(4&t);for(var r=0;r<e.length;r++){var o=e[r],i=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var s=o.length-1;0<=s;s--){var c=o[s],u=c.instance,h=c.currentTarget;if(c=c.listener,u!==a&&i.isPropagationStopped())break e;a=c,i.currentTarget=h;try{a(i)}catch(e){iX(e)}i.currentTarget=null,a=u}else for(s=0;s<o.length;s++){if(u=(c=o[s]).instance,h=c.currentTarget,c=c.listener,u!==a&&i.isPropagationStopped())break e;a=c,i.currentTarget=h;try{a(i)}catch(e){iX(e)}i.currentTarget=null,a=u}}}}function cc(e,t){var r=t[eX];void 0===r&&(r=t[eX]=new Set);var o=e+"__bubble";r.has(o)||(cp(t,e,2,!1),r.add(o))}function cu(e,t,r){var o=0;t&&(o|=4),cp(r,e,o,t)}var ch="_reactListening"+Math.random().toString(36).slice(2);function cd(e){if(!e[ch]){e[ch]=!0,e9.forEach(function(t){"selectionchange"!==t&&(cs.has(t)||cu(t,!1,e),cu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ch]||(t[ch]=!0,cu("selectionchange",!1,t))}}function cp(e,t,r,o){switch(uy(t)){case 2:var i=up;break;case 8:i=uf;break;default:i=ug}r=i.bind(null,t,r,e),i=void 0,tB&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(i=!0),o?void 0!==i?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):void 0!==i?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function cf(e,t,r,o,i){var a=o;if(0==(1&t)&&0==(2&t)&&null!==o)e:for(;;){if(null===o)return;var s=o.tag;if(3===s||4===s){var c=o.stateNode.containerInfo;if(c===i||8===c.nodeType&&c.parentNode===i)break;if(4===s)for(s=o.return;null!==s;){var u=s.tag;if((3===u||4===u)&&((u=s.stateNode.containerInfo)===i||8===u.nodeType&&u.parentNode===i))return;s=s.return}for(;null!==c;){if(null===(s=e3(c)))return;if(5===(u=s.tag)||6===u||26===u||27===u){o=a=s;continue e}c=c.parentNode}}o=o.return}tN(function(){var o=a,i=tz(r),s=[];e:{var c=r9.get(e);if(void 0!==c){var u=t0,h=e;switch(e){case"keypress":if(0===tV(r))break e;case"keydown":case"keyup":u=rs;break;case"focusin":h="focus",u=t7;break;case"focusout":h="blur",u=t7;break;case"beforeblur":case"afterblur":u=t7;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=t4;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=t8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=rc;break;case r2:case r5:case r3:u=t9;break;case r7:u=ru;break;case"scroll":case"scrollend":u=t3;break;case"wheel":u=rh;break;case"copy":case"cut":case"paste":u=re;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=rl;break;case"toggle":case"beforetoggle":u=rd}var d=0!=(4&t),p=!d&&("scroll"===e||"scrollend"===e),f=d?null!==c?c+"Capture":null:c;d=[];for(var g,m=o;null!==m;){var b=m;if(g=b.stateNode,5!==(b=b.tag)&&26!==b&&27!==b||null===g||null===f||null!=(b=tH(m,f))&&d.push(cg(m,b,g)),p)break;m=m.return}0<d.length&&(c=new u(c,h,null,r,i),s.push({event:c,listeners:d}))}}if(0==(7&t)){if((c="mouseover"===e||"pointerover"===e,u="mouseout"===e||"pointerout"===e,!(c&&r!==tI&&(h=r.relatedTarget||r.fromElement)&&(e3(h)||h[eQ])))&&(u||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,u?(h=r.relatedTarget||r.toElement,u=o,null!==(h=h?e3(h):null)&&(p=Z(h),d=h.tag,h!==p||5!==d&&27!==d&&6!==d)&&(h=null)):(u=null,h=o),u!==h)){if(d=t4,b="onMouseLeave",f="onMouseEnter",m="mouse",("pointerout"===e||"pointerover"===e)&&(d=rl,b="onPointerLeave",f="onPointerEnter",m="pointer"),p=null==u?c:e4(u),g=null==h?c:e4(h),(c=new d(b,m+"leave",u,r,i)).target=p,c.relatedTarget=g,b=null,e3(i)===o&&((d=new d(f,m+"enter",h,r,i)).target=g,d.relatedTarget=p,b=d),p=b,u&&h)t:{for(d=u,f=h,m=0,g=d;g;g=cb(g))m++;for(g=0,b=f;b;b=cb(b))g++;for(;0<m-g;)d=cb(d),m--;for(;0<g-m;)f=cb(f),g--;for(;m--;){if(d===f||null!==f&&d===f.alternate)break t;d=cb(d),f=cb(f)}d=null}else d=null;null!==u&&cv(s,c,u,d,!1),null!==h&&null!==p&&cv(s,p,h,d,!0)}e:{if("select"===(u=(c=o?e4(o):window).nodeName&&c.nodeName.toLowerCase())||"input"===u&&"file"===c.type)var v,w=rM;else if(rC(c))if(rO)w=rN;else{w=rA;var S=rD}else(u=c.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===c.type||"radio"===c.type)?w=rL:o&&tT(o.elementType)&&(w=rM);if(w&&(w=w(e,o))){rk(s,w,r,i);break e}S&&S(e,c,o),"focusout"===e&&o&&"number"===c.type&&null!=o.memoizedProps.value&&ty(c,"number",c.value)}switch(S=o?e4(o):window,e){case"focusin":(rC(S)||"true"===S.contentEditable)&&(rV=S,rq=o,rZ=null);break;case"focusout":rZ=rq=rV=null;break;case"mousedown":rK=!0;break;case"contextmenu":case"mouseup":case"dragend":rK=!1,rY(s,r,i);break;case"selectionchange":if(rU)break;case"keydown":case"keyup":rY(s,r,i)}if(rf)t:{switch(e){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else rS?ry(e,r)&&(x="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(x="onCompositionStart");x&&(rb&&"ko"!==r.locale&&(rS||"onCompositionStart"!==x?"onCompositionEnd"===x&&rS&&(v=tU()):(tG="value"in(tF=i)?tF.value:tF.textContent,rS=!0)),0<(S=cm(o,x)).length&&(x=new rt(x,e,null,r,i),s.push({event:x,listeners:S}),v?x.data=v:null!==(v=rw(r))&&(x.data=v))),(v=rm?function(e,t){switch(e){case"compositionend":return rw(t);case"keypress":if(32!==t.which)return null;return rv=!0," ";case"textInput":return" "===(e=t.data)&&rv?null:e;default:return null}}(e,r):function(e,t){if(rS)return"compositionend"===e||!rf&&ry(e,t)?(e=tU(),tj=tG=tF=null,rS=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rb&&"ko"!==t.locale?null:t.data}}(e,r))&&0<(x=cm(o,"onBeforeInput")).length&&(S=new rt("onBeforeInput","beforeinput",null,r,i),s.push({event:S,listeners:x}),S.data=v);var C=e;if("submit"===C&&o&&o.stateNode===i){var _=cr((i[eY]||null).action),T=r.submitter;T&&null!==(C=(C=T[eY]||null)?cr(C.formAction):T.getAttribute("formAction"))&&(_=C,T=null);var E=new t0("action","action",null,r,i);s.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==l3){var e=T?co(i,T):new FormData(i);i_(o,{pending:!0,data:e,method:i.method,action:_},null,e)}}else"function"==typeof _&&(E.preventDefault(),i_(o,{pending:!0,data:e=T?co(i,T):new FormData(i),method:i.method,action:_},_,e))},currentTarget:i}]})}}cl(s,t)})}function cg(e,t,r){return{instance:e,listener:t,currentTarget:r}}function cm(e,t){for(var r=t+"Capture",o=[];null!==e;){var i=e,a=i.stateNode;5!==(i=i.tag)&&26!==i&&27!==i||null===a||(null!=(i=tH(e,r))&&o.unshift(cg(e,i,a)),null!=(i=tH(e,t))&&o.push(cg(e,i,a))),e=e.return}return o}function cb(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag&&27!==e.tag)return e||null}function cv(e,t,r,o,i){for(var a=t._reactName,s=[];null!==r&&r!==o;){var c=r,u=c.alternate,h=c.stateNode;if(c=c.tag,null!==u&&u===o)break;5!==c&&26!==c&&27!==c||null===h||(u=h,i?null!=(h=tH(r,a))&&s.unshift(cg(r,h,u)):i||null!=(h=tH(r,a))&&s.push(cg(r,h,u))),r=r.return}0!==s.length&&e.push({event:t,listeners:s})}var cy=/\r\n?/g,cw=/\u0000|\uFFFD/g;function cS(e){return("string"==typeof e?e:""+e).replace(cy,`
`).replace(cw,"")}function cx(e,t){return t=cS(t),cS(e)===t}function cC(){}function ck(e,t,r,o,i,a){switch(r){case"children":"string"==typeof o?"body"===t||"textarea"===t&&""===o||tC(e,o):("number"==typeof o||"bigint"==typeof o)&&"body"!==t&&tC(e,""+o);break;case"className":tl(e,"class",o);break;case"tabIndex":tl(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":tl(e,r,o);break;case"style":tR(e,o,a);break;case"data":if("object"!==t){tl(e,"data",o);break}case"src":case"href":if(""===o&&("a"!==t||"href"!==r)||null==o||"function"==typeof o||"symbol"==typeof o||"boolean"==typeof o){e.removeAttribute(r);break}o=t$(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if("function"==typeof o){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"==typeof a&&("formAction"===r?("input"!==t&&ck(e,t,"name",i.name,i,null),ck(e,t,"formEncType",i.formEncType,i,null),ck(e,t,"formMethod",i.formMethod,i,null),ck(e,t,"formTarget",i.formTarget,i,null)):(ck(e,t,"encType",i.encType,i,null),ck(e,t,"method",i.method,i,null),ck(e,t,"target",i.target,i,null))),null==o||"symbol"==typeof o||"boolean"==typeof o){e.removeAttribute(r);break}o=t$(""+o),e.setAttribute(r,o);break;case"onClick":null!=o&&(e.onclick=cC);break;case"onScroll":null!=o&&cc("scroll",e);break;case"onScrollEnd":null!=o&&cc("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=o){if("object"!=typeof o||!("__html"in o))throw Error(u(61));if(null!=(r=o.__html)){if(null!=i.children)throw Error(u(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&"function"!=typeof o&&"symbol"!=typeof o;break;case"muted":e.muted=o&&"function"!=typeof o&&"symbol"!=typeof o;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":case"innerText":case"textContent":break;case"xlinkHref":if(null==o||"function"==typeof o||"boolean"==typeof o||"symbol"==typeof o){e.removeAttribute("xlink:href");break}r=t$(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=o&&"function"!=typeof o&&"symbol"!=typeof o?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&"function"!=typeof o&&"symbol"!=typeof o?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":!0===o?e.setAttribute(r,""):!1!==o&&null!=o&&"function"!=typeof o&&"symbol"!=typeof o?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":null==o||"function"==typeof o||"symbol"==typeof o||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":cc("beforetoggle",e),cc("toggle",e),ts(e,"popover",o);break;case"xlinkActuate":tc(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":tc(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":tc(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":tc(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":tc(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":tc(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":tc(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":tc(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":tc(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ts(e,"is",o);break;default:2<r.length&&("o"===r[0]||"O"===r[0])&&("n"===r[1]||"N"===r[1])||ts(e,r=tE.get(r)||r,o)}}function c_(e,t,r,o,i,a){switch(r){case"style":tR(e,o,a);break;case"dangerouslySetInnerHTML":if(null!=o){if("object"!=typeof o||!("__html"in o))throw Error(u(61));if(null!=(r=o.__html)){if(null!=i.children)throw Error(u(60));e.innerHTML=r}}break;case"children":"string"==typeof o?tC(e,o):("number"==typeof o||"bigint"==typeof o)&&tC(e,""+o);break;case"onScroll":null!=o&&cc("scroll",e);break;case"onScrollEnd":null!=o&&cc("scrollend",e);break;case"onClick":null!=o&&(e.onclick=cC);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(r))e:{if("o"===r[0]&&"n"===r[1]&&(i=r.endsWith("Capture"),t=r.slice(2,i?r.length-7:void 0),"function"==typeof(a=null!=(a=e[eY]||null)?a[r]:null)&&e.removeEventListener(t,a,i),"function"==typeof o)){"function"!=typeof a&&null!==a&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,o,i);break e}r in e?e[r]=o:!0===o?e.setAttribute(r,""):ts(e,r,o)}}}function cR(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":cc("error",e),cc("load",e);var o,i=!1,a=!1;for(o in r)if(r.hasOwnProperty(o)){var s=r[o];if(null!=s)switch(o){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ck(e,t,o,s,r,null)}}a&&ck(e,t,"srcSet",r.srcSet,r,null),i&&ck(e,t,"src",r.src,r,null);return;case"input":cc("invalid",e);var c=o=s=a=null,h=null,d=null;for(i in r)if(r.hasOwnProperty(i)){var p=r[i];if(null!=p)switch(i){case"name":a=p;break;case"type":s=p;break;case"checked":h=p;break;case"defaultChecked":d=p;break;case"value":o=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(u(137,t));break;default:ck(e,t,i,p,r,null)}}tv(e,o,c,h,d,s,a,!1),td(e);return;case"select":for(a in cc("invalid",e),i=s=o=null,r)if(r.hasOwnProperty(a)&&null!=(c=r[a]))switch(a){case"value":o=c;break;case"defaultValue":s=c;break;case"multiple":i=c;default:ck(e,t,a,c,r,null)}t=o,r=s,e.multiple=!!i,null!=t?tw(e,!!i,t,!1):null!=r&&tw(e,!!i,r,!0);return;case"textarea":for(s in cc("invalid",e),o=a=i=null,r)if(r.hasOwnProperty(s)&&null!=(c=r[s]))switch(s){case"value":i=c;break;case"defaultValue":a=c;break;case"children":o=c;break;case"dangerouslySetInnerHTML":if(null!=c)throw Error(u(91));break;default:ck(e,t,s,c,r,null)}tx(e,i,a,o),td(e);return;case"option":for(h in r)r.hasOwnProperty(h)&&null!=(i=r[h])&&("selected"===h?e.selected=i&&"function"!=typeof i&&"symbol"!=typeof i:ck(e,t,h,i,r,null));return;case"dialog":cc("cancel",e),cc("close",e);break;case"iframe":case"object":cc("load",e);break;case"video":case"audio":for(i=0;i<ca.length;i++)cc(ca[i],e);break;case"image":cc("error",e),cc("load",e);break;case"details":cc("toggle",e);break;case"embed":case"source":case"link":cc("error",e),cc("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in r)if(r.hasOwnProperty(d)&&null!=(i=r[d]))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ck(e,t,d,i,r,null)}return;default:if(tT(t)){for(p in r)r.hasOwnProperty(p)&&void 0!==(i=r[p])&&c_(e,t,p,i,r,void 0);return}}for(c in r)r.hasOwnProperty(c)&&null!=(i=r[c])&&ck(e,t,c,i,r,null)}var cT=null,cE=null;function cM(e){return 9===e.nodeType?e:e.ownerDocument}function cO(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c$(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function cI(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var cz=null,cP="function"==typeof setTimeout?setTimeout:void 0,cD="function"==typeof clearTimeout?clearTimeout:void 0,cA="function"==typeof Promise?Promise:void 0,cL="function"==typeof queueMicrotask?queueMicrotask:void 0!==cA?function(e){return cA.resolve(null).then(e).catch(cN)}:cP;function cN(e){setTimeout(function(){throw e})}function cH(e,t){var r=t,o=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&8===i.nodeType)if("/$"===(r=i.data)){if(0===o){e.removeChild(i),uL(t);return}o--}else"$"!==r&&"$?"!==r&&"$!"!==r||o++;r=i}while(r)uL(t)}function cB(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":cB(r),e5(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===r.rel.toLowerCase())continue}e.removeChild(r)}}function cW(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}function cF(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}function cG(e,t,r){switch(t=cM(r),e){case"html":if(!(e=t.documentElement))throw Error(u(452));return e;case"head":if(!(e=t.head))throw Error(u(453));return e;case"body":if(!(e=t.body))throw Error(u(454));return e;default:throw Error(u(451))}}var cj=new Map,cU=new Set;function cV(e){return"function"==typeof e.getRootNode?e.getRootNode():e.ownerDocument}var cq=J.d;J.d={f:function(){var e=cq.f(),t=lx();return e||t},r:function(e){var t=e6(e);null!==t&&5===t.tag&&"form"===t.type?iT(t):cq.r(e)},D:function(e){cq.D(e),cK("dns-prefetch",e,null)},C:function(e,t){cq.C(e,t),cK("preconnect",e,t)},L:function(e,t,r){if(cq.L(e,t,r),cZ&&e&&t){var o='link[rel="preload"][as="'+tm(t)+'"]';"image"===t&&r&&r.imageSrcSet?(o+='[imagesrcset="'+tm(r.imageSrcSet)+'"]',"string"==typeof r.imageSizes&&(o+='[imagesizes="'+tm(r.imageSizes)+'"]')):o+='[href="'+tm(e)+'"]';var i=o;switch(t){case"style":i=cQ(e);break;case"script":i=c0(e)}cj.has(i)||(e=F({rel:"preload",href:"image"===t&&r&&r.imageSrcSet?void 0:e,as:t},r),cj.set(i,e),null!==cZ.querySelector(o)||"style"===t&&cZ.querySelector(cX(i))||"script"===t&&cZ.querySelector(c1(i))||(cR(t=cZ.createElement("link"),"link",e),e7(t),cZ.head.appendChild(t)))}},m:function(e,t){if(cq.m(e,t),cZ&&e){var r=t&&"string"==typeof t.as?t.as:"script",o='link[rel="modulepreload"][as="'+tm(r)+'"][href="'+tm(e)+'"]',i=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=c0(e)}if(!cj.has(i)&&(e=F({rel:"modulepreload",href:e},t),cj.set(i,e),null===cZ.querySelector(o))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(cZ.querySelector(c1(i)))return}cR(r=cZ.createElement("link"),"link",e),e7(r),cZ.head.appendChild(r)}}},X:function(e,t){if(cq.X(e,t),cZ&&e){var r=e8(cZ).hoistableScripts,o=c0(e),i=r.get(o);i||((i=cZ.querySelector(c1(o)))||(e=F({src:e,async:!0},t),(t=cj.get(o))&&c6(e,t),e7(i=cZ.createElement("script")),cR(i,"link",e),cZ.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(o,i))}},S:function(e,t,r){if(cq.S(e,t,r),cZ&&e){var o=e8(cZ).hoistableStyles,i=cQ(e);t=t||"default";var a=o.get(i);if(!a){var s={loading:0,preload:null};if(a=cZ.querySelector(cX(i)))s.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":t},r),(r=cj.get(i))&&c3(e,r);var c=a=cZ.createElement("link");e7(c),cR(c,"link",e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,c5(a,t,cZ)}a={type:"stylesheet",instance:a,count:1,state:s},o.set(i,a)}}},M:function(e,t){if(cq.M(e,t),cZ&&e){var r=e8(cZ).hoistableScripts,o=c0(e),i=r.get(o);i||((i=cZ.querySelector(c1(o)))||(e=F({src:e,async:!0,type:"module"},t),(t=cj.get(o))&&c6(e,t),e7(i=cZ.createElement("script")),cR(i,"link",e),cZ.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(o,i))}}};var cZ="undefined"==typeof document?null:document;function cK(e,t,r){if(cZ&&"string"==typeof t&&t){var o=tm(t);o='link[rel="'+e+'"][href="'+o+'"]',"string"==typeof r&&(o+='[crossorigin="'+r+'"]'),cU.has(o)||(cU.add(o),e={rel:e,crossOrigin:r,href:t},null===cZ.querySelector(o)&&(cR(t=cZ.createElement("link"),"link",e),e7(t),cZ.head.appendChild(t)))}}function cY(e,t,r,o){var i=(i=ec.current)?cV(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return"string"==typeof r.precedence&&"string"==typeof r.href?(t=cQ(r.href),(o=(r=e8(i).hoistableStyles).get(t))||(o={type:"style",instance:null,count:0,state:null},r.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===r.rel&&"string"==typeof r.href&&"string"==typeof r.precedence){e=cQ(r.href);var a,s,c,h,d=e8(i).hoistableStyles,p=d.get(e);if(p||(i=i.ownerDocument||i,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,p),(d=i.querySelector(cX(e)))&&!d._p&&(p.instance=d,p.state.loading=5),cj.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},cj.set(e,r),d||(a=i,s=e,c=r,h=p.state,a.querySelector('link[rel="preload"][as="style"]['+s+"]")?h.loading=1:(h.preload=s=a.createElement("link"),s.addEventListener("load",function(){return h.loading|=1}),s.addEventListener("error",function(){return h.loading|=2}),cR(s,"link",c),e7(s),a.head.appendChild(s))))),t&&null===o)throw Error(u(528,""));return p}if(t&&null!==o)throw Error(u(529,""));return null;case"script":return t=r.async,"string"==typeof(r=r.src)&&t&&"function"!=typeof t&&"symbol"!=typeof t?(t=c0(r),(o=(r=e8(i).hoistableScripts).get(t))||(o={type:"script",instance:null,count:0,state:null},r.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function cQ(e){return'href="'+tm(e)+'"'}function cX(e){return'link[rel="stylesheet"]['+e+"]"}function cJ(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function c0(e){return'[src="'+tm(e)+'"]'}function c1(e){return"script[async]"+e}function c2(e,t,r){if(t.count++,null===t.instance)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+tm(r.href)+'"]');if(o)return t.instance=o,e7(o),o;var i=F({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e7(o=(e.ownerDocument||e).createElement("style")),cR(o,"style",i),c5(o,r.precedence,e),t.instance=o;case"stylesheet":i=cQ(r.href);var a=e.querySelector(cX(i));if(a)return t.state.loading|=4,t.instance=a,e7(a),a;o=cJ(r),(i=cj.get(i))&&c3(o,i),e7(a=(e.ownerDocument||e).createElement("link"));var s=a;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),cR(a,"link",o),t.state.loading|=4,c5(a,r.precedence,e),t.instance=a;case"script":if(a=c0(r.src),i=e.querySelector(c1(a)))return t.instance=i,e7(i),i;return o=r,(i=cj.get(a))&&c6(o=F({},r),i),e7(i=(e=e.ownerDocument||e).createElement("script")),cR(i,"link",o),e.head.appendChild(i),t.instance=i;case"void":return null;default:throw Error(u(443,t.type))}return"stylesheet"===t.type&&0==(4&t.state.loading)&&(o=t.instance,t.state.loading|=4,c5(o,r.precedence,e)),t.instance}function c5(e,t,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=o.length?o[o.length-1]:null,a=i,s=0;s<o.length;s++){var c=o[s];if(c.dataset.precedence===t)a=c;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===r.nodeType?r.head:r).insertBefore(e,t.firstChild)}function c3(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function c6(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var c4=null;function c8(e,t,r){if(null===c4){var o=new Map,i=c4=new Map;i.set(r,o)}else(o=(i=c4).get(r))||(o=new Map,i.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),i=0;i<r.length;i++){var a=r[i];if(!(a[e2]||a[eK]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var s=a.getAttribute(t)||"";s=e+s;var c=o.get(s);c?c.push(a):o.set(s,[a])}}return o}function c7(e,t,r){(e=e.ownerDocument||e).head.insertBefore(r,"title"===t?e.querySelector("head > title"):null)}function c9(e){return"stylesheet"!==e.type||0!=(3&e.state.loading)}var ue=null;function ut(){}function ur(){if(this.count--,0===this.count){if(this.stylesheets)un(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uo=null;function un(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,uo=new Map,t.forEach(ui,e),uo=null,ur.call(e))}function ui(e,t){if(!(4&t.state.loading)){var r=uo.get(e);if(r)var o=r.get(null);else{r=new Map,uo.set(e,r);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var s=i[a];("LINK"===s.nodeName||"not all"!==s.getAttribute("media"))&&(r.set(s.dataset.precedence,s),o=s)}o&&r.set(null,o)}s=(i=t.instance).getAttribute("data-precedence"),(a=r.get(s)||o)===o&&r.set(null,i),r.set(s,i),this.count++,o=ur.bind(this),i.addEventListener("load",o),i.addEventListener("error",o),a?a.parentNode.insertBefore(i,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var ua={$$typeof:w,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function us(e,t,r,o,i,a,s,c){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=eF(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eF(0),this.hiddenUpdates=eF(null),this.identifierPrefix=o,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ul(e,t,r,o,i,a){i=oh,null===o.context?o.context=i:o.pendingContext=i,(o=aH(t)).payload={element:r},null!==(a=void 0===a?null:a)&&(o.callback=a),null!==(r=aB(e,o,t))&&(lb(r,e,t),aW(r,e,t))}function uc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function uu(e,t){uc(e,t),(e=e.alternate)&&uc(e,t)}function uh(e){if(13===e.tag){var t=ol(e,0x4000000);null!==t&&lb(t,e,0x4000000),uu(e,0x4000000)}}var ud=!0;function up(e,t,r,o){var i=W.T;W.T=null;var a=J.p;try{J.p=2,ug(e,t,r,o)}finally{J.p=a,W.T=i}}function uf(e,t,r,o){var i=W.T;W.T=null;var a=J.p;try{J.p=8,ug(e,t,r,o)}finally{J.p=a,W.T=i}}function ug(e,t,r,o){if(ud){var i=um(o);if(null===i)cf(e,t,o,ub,r),uE(e,o);else if(function(e,t,r,o,i){switch(t){case"focusin":return uS=uM(uS,e,t,r,o,i),!0;case"dragenter":return ux=uM(ux,e,t,r,o,i),!0;case"mouseover":return uC=uM(uC,e,t,r,o,i),!0;case"pointerover":var a=i.pointerId;return uk.set(a,uM(uk.get(a)||null,e,t,r,o,i)),!0;case"gotpointercapture":return a=i.pointerId,u_.set(a,uM(u_.get(a)||null,e,t,r,o,i)),!0}return!1}(i,e,t,r,o))o.stopPropagation();else if(uE(e,o),4&t&&-1<uT.indexOf(e)){for(;null!==i;){var a=e6(i);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var s=eL(a.pendingLanes);if(0!==s){var c=a;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var u=1<<31-eI(s);c.entanglements[1]|=u,s&=~u}l6(a),0==(6&sG)&&(le=ew()+500,l4(0,!1))}}break;case 13:null!==(c=ol(a,2))&&lb(c,a,2),lx(),uu(a,2)}if(null===(a=um(o))&&cf(e,t,o,ub,r),a===i)break;i=a}null!==i&&o.stopPropagation()}else cf(e,t,o,null,r)}}function um(e){return uv(e=tz(e))}var ub=null;function uv(e){if(ub=null,null!==(e=e3(e))){var t=Z(e);if(null===t)e=null;else{var r=t.tag;if(13===r){if(null!==(e=K(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ub=e,null}function uy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(eS()){case ex:return 2;case eC:return 8;case ek:case e_:return 32;case eR:return 0x10000000;default:return 32}default:return 32}}var uw=!1,uS=null,ux=null,uC=null,uk=new Map,u_=new Map,uR=[],uT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uE(e,t){switch(e){case"focusin":case"focusout":uS=null;break;case"dragenter":case"dragleave":ux=null;break;case"mouseover":case"mouseout":uC=null;break;case"pointerover":case"pointerout":uk.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":u_.delete(t.pointerId)}}function uM(e,t,r,o,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},null!==t&&null!==(t=e6(t))&&uh(t)):(e.eventSystemFlags|=o,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i)),e}function uO(e){var t=e3(e.target);if(null!==t){var r=Z(t);if(null!==r){if(13===(t=r.tag)){if(null!==(t=K(r))){e.blockedOn=t,function(e,t){var r=J.p;try{return J.p=e,t()}finally{J.p=r}}(e.priority,function(){if(13===r.tag){var e=lg(),t=ol(r,e);null!==t&&lb(t,r,e),uu(r,e)}});return}}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===r.tag?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function u$(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=um(e.nativeEvent);if(null!==r)return null!==(t=e6(r))&&uh(t),e.blockedOn=r,!1;var o=new(r=e.nativeEvent).constructor(r.type,r);tI=o,r.target.dispatchEvent(o),tI=null,t.shift()}return!0}function uI(e,t,r){u$(e)&&r.delete(t)}function uz(){uw=!1,null!==uS&&u$(uS)&&(uS=null),null!==ux&&u$(ux)&&(ux=null),null!==uC&&u$(uC)&&(uC=null),uk.forEach(uI),u_.forEach(uI)}function uP(e,t){e.blockedOn===t&&(e.blockedOn=null,uw||(uw=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,uz)))}var uD=null;function uA(e){uD!==e&&(uD=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){uD===e&&(uD=null);for(var t=0;t<e.length;t+=3){var r=e[t],o=e[t+1],i=e[t+2];if("function"!=typeof o)if(null===uv(o||r))continue;else break;var a=e6(r);null!==a&&(e.splice(t,3),t-=3,i_(a,{pending:!0,data:i,method:r.method,action:o},o,i))}}))}function uL(e){function t(t){return uP(t,e)}null!==uS&&uP(uS,e),null!==ux&&uP(ux,e),null!==uC&&uP(uC,e),uk.forEach(t),u_.forEach(t);for(var r=0;r<uR.length;r++){var o=uR[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<uR.length&&null===(r=uR[0]).blockedOn;)uO(r),null===r.blockedOn&&uR.shift();if(null!=(r=(e.ownerDocument||e).$$reactFormReplay))for(o=0;o<r.length;o+=3){var i=r[o],a=r[o+1],s=i[eY]||null;if("function"==typeof a)s||uA(r);else if(s){var c=null;if(a&&a.hasAttribute("formAction")){if(i=a,s=a[eY]||null)c=s.formAction;else if(null!==uv(i))continue}else c=s.action;"function"==typeof c?r[o+1]=c:(r.splice(o,3),o-=3),uA(r)}}}function uN(e){this._internalRoot=e}function uH(e){this._internalRoot=e}uH.prototype.render=uN.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(u(409));ul(t.current,lg(),e,t,null,null)},uH.prototype.unmount=uN.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;0===e.tag&&lB(),ul(e.current,2,null,e,null,null),lx(),t[eQ]=null}},uH.prototype.unstable_scheduleHydration=function(e){if(e){var t=eq();e={blockedOn:null,target:e,priority:t};for(var r=0;r<uR.length&&0!==t&&t<uR[r].priority;r++);uR.splice(r,0,e),0===r&&uO(e)}};var uB=s.version;if("19.0.0"!==uB)throw Error(u(527,uB,"19.0.0"));if(J.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(u(188));throw Error(u(268,e=Object.keys(e).join(",")))}return null===(e=null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Z(e)))throw Error(u(188));return t!==e?null:e}for(var r=e,o=t;;){var i=r.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(o=i.return)){r=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Q(i),e;if(a===o)return Q(i),t;a=a.sibling}throw Error(u(188))}if(r.return!==o.return)r=i,o=a;else{for(var s=!1,c=i.child;c;){if(c===r){s=!0,r=i,o=a;break}if(c===o){s=!0,o=i,r=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===r){s=!0,r=a,o=i;break}if(c===o){s=!0,o=a,r=i;break}c=c.sibling}if(!s)throw Error(u(189))}}if(r.alternate!==o)throw Error(u(190))}if(3!==r.tag)throw Error(u(188));return r.stateNode.current===r?e:t}(t))?function e(t){var r=t.tag;if(5===r||26===r||27===r||6===r)return t;for(t=t.child;null!==t;){if(null!==(r=e(t)))return r;t=t.sibling}return null}(e):null)?null:e.stateNode},"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var uW=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uW.isDisabled&&uW.supportsFiber)try{eM=uW.inject({bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:W,findFiberByHostInstance:e3,reconcilerVersion:"19.0.0"}),eO=uW}catch{}}t.createRoot=function(e,t){if(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)throw Error(u(299));var r,o,i,a=!1,s="",c=iJ,h=i0,d=i1;return null!=t&&(!0===t.unstable_strictMode&&(a=!0),void 0!==t.identifierPrefix&&(s=t.identifierPrefix),void 0!==t.onUncaughtError&&(c=t.onUncaughtError),void 0!==t.onCaughtError&&(h=t.onCaughtError),void 0!==t.onRecoverableError&&(d=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),r=e,o=1,i=a,r=new us(r,o,!1,s,c,h,d,null),o=1,!0===i&&(o|=24),i=sR(3,null,null,o),r.current=i,i.stateNode=r,o=nc(),o.refCount++,r.pooledCache=o,o.refCount++,i.memoizedState={element:null,isDehydrated:!1,cache:o},aL(i),t=r,e[eQ]=t.current,cd(8===e.nodeType?e.parentNode:e),new uN(t)}},2026:(e,t,r)=>{e.exports=r(9841)},6047:(e,t,r)=>{r(602)},6284:(e,t)=>{var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),g=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,v={};function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||m}function S(){}function x(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||m}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=w.prototype;var C=x.prototype=new S;C.constructor=x,b(C,w.prototype),C.isPureReactComponent=!0;var _=Array.isArray,T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function O(e,t,o,i,a,s){return{$$typeof:r,type:e,key:t,ref:void 0!==(o=s.ref)?o:null,props:s}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function D(e,t){var r,o;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,o={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return o[e]})):t.toString(36)}function A(){}function B(e,t,i){if(null==e)return e;var a=[],s=0;return!function e(t,i,a,s,c){var u,h,d,p=typeof t;("undefined"===p||"boolean"===p)&&(t=null);var m=!1;if(null===t)m=!0;else switch(p){case"bigint":case"string":case"number":m=!0;break;case"object":switch(t.$$typeof){case r:case o:m=!0;break;case f:return e((m=t._init)(t._payload),i,a,s,c)}}if(m)return c=c(t),m=""===s?"."+D(t,0):s,_(c)?(a="",null!=m&&(a=m.replace(P,"$&/")+"/"),e(c,i,a,"",function(e){return e})):null!=c&&($(c)&&(u=c,h=a+(null==c.key||t&&t.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+m,c=O(u.type,h,void 0,void 0,void 0,u.props)),i.push(c)),1;m=0;var b=""===s?".":s+":";if(_(t))for(var v=0;v<t.length;v++)p=b+D(s=t[v],v),m+=e(s,i,a,p,c);else if("function"==typeof(v=null===(d=t)||"object"!=typeof d?null:"function"==typeof(d=g&&d[g]||d["@@iterator"])?d:null))for(t=v.call(t),v=0;!(s=t.next()).done;)p=b+D(s=s.value,v++),m+=e(s,i,a,p,c);else if("object"===p){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(A,A):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),i,a,s,c);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(i=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":i)+"). If you meant to render a collection of children, use an array instead.")}return m}(e,a,"","",function(e){return t.call(i,e,s++)}),a}function W(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var F="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)};function G(){}t.Children={map:B,forEach:function(e,t,r){B(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return B(e,function(){t++}),t},toArray:function(e){return B(e,function(e){return e})||[]},only:function(e){if(!$(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=w,t.Fragment=i,t.Profiler=s,t.PureComponent=x,t.StrictMode=a,t.Suspense=d,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,r){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var o=b({},e.props),i=e.key,a=void 0;if(null!=t)for(s in void 0!==t.ref&&(a=void 0),void 0!==t.key&&(i=""+t.key),t)E.call(t,s)&&"key"!==s&&"__self"!==s&&"__source"!==s&&("ref"!==s||void 0!==t.ref)&&(o[s]=t[s]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}return O(e.type,i,void 0,void 0,a,o)},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:c,_context:e},e},t.createElement=function(e,t,r){var o,i={},a=null;if(null!=t)for(o in void 0!==t.key&&(a=""+t.key),t)E.call(t,o)&&"key"!==o&&"__self"!==o&&"__source"!==o&&(i[o]=t[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return O(e,a,void 0,void 0,null,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:h,render:e}},t.isValidElement=$,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:W}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.T,r={};T.T=r;try{var o=e(),i=T.S;null!==i&&i(r,o),"object"==typeof o&&null!==o&&"function"==typeof o.then&&o.then(G,F)}catch(e){F(e)}finally{T.T=t}},t.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},t.use=function(e){return T.H.use(e)},t.useActionState=function(e,t,r){return T.H.useActionState(e,t,r)},t.useCallback=function(e,t){return T.H.useCallback(e,t)},t.useContext=function(e){return T.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return T.H.useEffect(e,t)},t.useId=function(){return T.H.useId()},t.useImperativeHandle=function(e,t,r){return T.H.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.H.useMemo(e,t)},t.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},t.useReducer=function(e,t,r){return T.H.useReducer(e,t,r)},t.useRef=function(e){return T.H.useRef(e)},t.useState=function(e){return T.H.useState(e)},t.useSyncExternalStore=function(e,t,r){return T.H.useSyncExternalStore(e,t,r)},t.useTransition=function(){return T.H.useTransition()},t.version="19.0.0"},6723:(e,t,r)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch{}}(),e.exports=r(8059)},8059:(e,t,r)=>{var o=r(8975);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},c=Symbol.for("react.portal"),u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,r){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:c,key:null==o?null:""+o,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.flushSync=function(e){var t=u.T,r=s.p;try{if(u.T=null,s.p=2,e)return e()}finally{u.T=t,s.p=r,s.d.f()}},t.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,s.d.C(e,t))},t.prefetchDNS=function(e){"string"==typeof e&&s.d.D(e)},t.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var r=t.as,o=h(r,t.crossOrigin),i="string"==typeof t.integrity?t.integrity:void 0,a="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?s.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:o,integrity:i,fetchPriority:a}):"script"===r&&s.d.X(e,{crossOrigin:o,integrity:i,fetchPriority:a,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=h(t.as,t.crossOrigin);s.d.M(e,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&s.d.M(e)},t.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var r=t.as,o=h(r,t.crossOrigin);s.d.L(e,r,{crossOrigin:o,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"==typeof e)if(t){var r=h(t.as,t.crossOrigin);s.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else s.d.m(e)},t.requestFormReset=function(e){s.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,r){return u.H.useFormState(e,t,r)},t.useFormStatus=function(){return u.H.useHostTransitionStatus()},t.version="19.0.0"},8975:(e,t,r)=>{e.exports=r(6284)},9841:(e,t)=>{function r(e,t){var r=e.length;for(e.push(t);0<r;){var o=r-1>>>1,i=e[o];if(0<a(i,t))e[o]=t,e[r]=i,r=o;else break}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var o=0,i=e.length,s=i>>>1;o<s;){var c=2*(o+1)-1,u=e[c],h=c+1,d=e[h];if(0>a(u,r))h<i&&0>a(d,u)?(e[o]=d,e[h]=r,o=h):(e[o]=u,e[c]=r,o=c);else if(h<i&&0>a(d,r))e[o]=d,e[h]=r,o=h;else break}}return t}function a(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var s,c=performance;t.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();t.unstable_now=function(){return u.now()-h}}var d=[],p=[],f=1,g=null,m=3,b=!1,v=!1,w=!1,S="function"==typeof setTimeout?setTimeout:null,x="function"==typeof clearTimeout?clearTimeout:null,C="undefined"!=typeof setImmediate?setImmediate:null;function _(e){for(var t=o(p);null!==t;){if(null===t.callback)i(p);else if(t.startTime<=e)i(p),t.sortIndex=t.expirationTime,r(d,t);else break;t=o(p)}}function T(e){if(w=!1,_(e),!v)if(null!==o(d))v=!0,F();else{var t=o(p);null!==t&&G(T,t.startTime-e)}}var E=!1,O=-1,$=5,P=-1;function D(){return!(t.unstable_now()-P<$)}function A(){if(E){var e=t.unstable_now();P=e;var r=!0;try{e:{v=!1,w&&(w=!1,x(O),O=-1),b=!0;var a=m;try{t:{for(_(e),g=o(d);null!==g&&!(g.expirationTime>e&&D());){var c=g.callback;if("function"==typeof c){g.callback=null,m=g.priorityLevel;var u=c(g.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof u){g.callback=u,_(e),r=!0;break t}g===o(d)&&i(d),_(e)}else i(d);g=o(d)}if(null!==g)r=!0;else{var h=o(p);null!==h&&G(T,h.startTime-e),r=!1}}break e}finally{g=null,m=a,b=!1}}}finally{r?s():E=!1}}}if("function"==typeof C)s=function(){C(A)};else if("undefined"!=typeof MessageChannel){var B=new MessageChannel,W=B.port2;B.port1.onmessage=A,s=function(){W.postMessage(null)}}else s=function(){S(A,0)};function F(){E||(E=!0,s())}function G(e,r){O=S(function(){e(t.unstable_now())},r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){v||b||(v=!0,F())},t.unstable_forceFrameRate=function(e){0>e||125<e||($=0<e?Math.floor(1e3/e):5)},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return o(d)},t.unstable_next=function(e){switch(m){case 1:case 2:case 3:var t=3;break;default:t=m}var r=m;m=t;try{return e()}finally{m=r}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=m;m=e;try{return t()}finally{m=r}},t.unstable_scheduleCallback=function(e,i,a){var s=t.unstable_now();switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?s+a:s,e){case 1:var c=-1;break;case 2:c=250;break;case 5:c=0x3fffffff;break;case 4:c=1e4;break;default:c=5e3}return c=a+c,e={id:f++,callback:i,priorityLevel:e,startTime:a,expirationTime:c,sortIndex:-1},a>s?(e.sortIndex=a,r(p,e),null===o(d)&&e===o(p)&&(w?(x(O),O=-1):w=!0,G(T,a-s))):(e.sortIndex=c,r(d,e),v||b||(v=!0,F())),e},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(e){var t=m;return function(){var r=m;m=t;try{return e.apply(this,arguments)}finally{m=r}}}},9980:(e,t,r)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch{}}(),e.exports=r(1169)}},w={};function S(e){var t=w[e];if(void 0!==t)return t.exports;var r=w[e]={exports:{}};return v[e](r,r.exports,S),r.exports}S.m=v,S.d=(e,t)=>{for(var r in t)S.o(t,r)&&!S.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce((t,r)=>(S.f[r](e,t),t),[])),S.u=e=>"lib-billboard.js",S.miniCssF=e=>{},S.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),S.p="#{root}/dist/webviews/",Object.defineProperty(S,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}}),oT={77:0},oE=e=>{var t,r,{__webpack_esm_ids__:o,__webpack_esm_modules__:i,__webpack_esm_runtime__:a}=e,s=0;for(t in i)S.o(i,t)&&(S.m[t]=i[t]);for(a&&a(S);s<o.length;s++)r=o[s],S.o(oT,r)&&oT[r]&&oT[r][0](),oT[o[s]]=0},S.f.j=(e,t)=>{var r=S.o(oT,e)?oT[e]:void 0;if(0!==r)if(r)t.push(r[1]);else{var o=import(S.p+S.u(e)).then(oE,t=>{throw 0!==oT[e]&&(oT[e]=void 0),t}),o=Promise.race([o,new Promise(t=>r=oT[e]=[t])]);t.push(r[1]=o)}};let x=globalThis,C=x.ShadowRoot&&(void 0===x.ShadyCSS||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_=Symbol(),T=new WeakMap;let n=class n{constructor(e,t,r){if(this._$cssResult$=!0,r!==_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(C&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=T.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&T.set(t,e))}return e}toString(){return this.cssText}};let E=e=>new n("string"==typeof e?e:e+"",void 0,_),O=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]),e,_),$=C?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return E(t)})(e):e,{is:P,defineProperty:D,getOwnPropertyDescriptor:A,getOwnPropertyNames:B,getOwnPropertySymbols:W,getPrototypeOf:F}=Object,G=globalThis,j=G.trustedTypes,U=j?j.emptyScript:"",V=G.reactiveElementPolyfillSupport,Z={toAttribute(e,t){switch(t){case Boolean:e=e?U:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},K=(e,t)=>!P(e,t),Q={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:K};Symbol.metadata??=Symbol("metadata"),G.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Q){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&D(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:i}=A(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){let a=o?.call(this);i?.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Q}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=F(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...B(e),...W(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift($(r));else void 0!==e&&t.push($(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(C)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),o=x.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:Z).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=r.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Z;this._$Em=o;let a=i.fromAttribute(t,e.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){let o=this.constructor,i=this[e];if(!(((r??=o.getPropertyOptions(e)).hasChanged??K)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e){let{wrapped:e}=r,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,r,o)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,V?.({ReactiveElement:y}),(G.reactiveElementVersions??=[]).push("2.1.1");let X=globalThis,J=X.trustedTypes,ee=J?J.createPolicy("lit-html",{createHTML:e=>e}):void 0,et="$lit$",er=`lit$${Math.random().toFixed(9).slice(2)}$`,en="?"+er,ei=`<${en}>`,ea=document,es=()=>ea.createComment(""),el=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ec=Array.isArray,eu=e=>ec(e)||"function"==typeof e?.[Symbol.iterator],eh=`[ 	
\f\r]`,ed=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ep=/-->/g,ef=/>/g,eg=RegExp(`>|${eh}(?:([^\\s"'>=/]+)(${eh}*=${eh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),em=/'/g,eb=/"/g,ev=/^(?:script|style|textarea|title)$/i,ey=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ew=ey(1),eS=ey(2),ex=ey(3),eC=Symbol.for("lit-noChange"),ek=Symbol.for("lit-nothing"),e_=new WeakMap,eR=ea.createTreeWalker(ea,129);function eT(e,t){if(!ec(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ee?ee.createHTML(t):t}let eE=(e,t)=>{let r=e.length-1,o=[],i,a=2===t?"<svg>":3===t?"<math>":"",s=ed;for(let t=0;t<r;t++){let r=e[t],c,u,h=-1,d=0;for(;d<r.length&&(s.lastIndex=d,null!==(u=s.exec(r)));)d=s.lastIndex,s===ed?"!--"===u[1]?s=ep:void 0!==u[1]?s=ef:void 0!==u[2]?(ev.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=eg):void 0!==u[3]&&(s=eg):s===eg?">"===u[0]?(s=i??ed,h=-1):void 0===u[1]?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=void 0===u[3]?eg:'"'===u[3]?eb:em):s===eb||s===em?s=eg:s===ep||s===ef?s=ed:(s=eg,i=void 0);let p=s===eg&&e[t+1].startsWith("/>")?" ":"";a+=s===ed?r+ei:h>=0?(o.push(c),r.slice(0,h)+et+r.slice(h)+er+p):r+er+(-2===h?t:p)}return[eT(e,a+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};let N=class N{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,a=0,s=e.length-1,c=this.parts,[u,h]=eE(e,t);if(this.el=N.createElement(u,r),eR.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=eR.nextNode())&&c.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(et)){let t=h[a++],r=o.getAttribute(e).split(er),s=/([.?@])?(.*)/.exec(t);c.push({type:1,index:i,name:s[2],strings:r,ctor:"."===s[1]?H:"?"===s[1]?I:"@"===s[1]?L:k}),o.removeAttribute(e)}else e.startsWith(er)&&(c.push({type:6,index:i}),o.removeAttribute(e));if(ev.test(o.tagName)){let e=o.textContent.split(er),t=e.length-1;if(t>0){o.textContent=J?J.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],es()),eR.nextNode(),c.push({type:2,index:++i});o.append(e[t],es())}}}else if(8===o.nodeType)if(o.data===en)c.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(er,e+1));)c.push({type:7,index:i}),e+=er.length-1}i++}}static createElement(e,t){let r=ea.createElement("template");return r.innerHTML=e,r}};function eM(e,t,r=e,o){if(t===eC)return t;let i=void 0!==o?r._$Co?.[o]:r._$Cl,a=el(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(e))._$AT(e,r,o),void 0!==o?(r._$Co??=[])[o]=i:r._$Cl=i),void 0!==i&&(t=eM(e,i._$AS(e,t.values),i,o)),t}let M=class M{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??ea).importNode(t,!0);eR.currentNode=o;let i=eR.nextNode(),a=0,s=0,c=r[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new R(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new z(i,this,e)),this._$AV.push(t),c=r[++s]}a!==c?.index&&(i=eR.nextNode(),a++)}return eR.currentNode=ea,o}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};let R=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=ek,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){el(e=eM(this,e,t))?e===ek||null==e||""===e?(this._$AH!==ek&&this._$AR(),this._$AH=ek):e!==this._$AH&&e!==eC&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):eu(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ek&&el(this._$AH)?this._$AA.nextSibling.data=e:this.T(ea.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=N.createElement(eT(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new M(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=e_.get(e.strings);return void 0===t&&e_.set(e.strings,t=new N(e)),t}k(e){ec(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,o=0;for(let i of e)o===t.length?t.push(r=new R(this.O(es()),this.O(es()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=ek,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ek}_$AI(e,t=this,r,o){let i=this.strings,a=!1;if(void 0===i)(a=!el(e=eM(this,e,t,0))||e!==this._$AH&&e!==eC)&&(this._$AH=e);else{let o,s,c=e;for(e=i[0],o=0;o<i.length-1;o++)(s=eM(this,c[r+o],t,o))===eC&&(s=this._$AH[o]),a||=!el(s)||s!==this._$AH[o],s===ek?e=ek:e!==ek&&(e+=(s??"")+i[o+1]),this._$AH[o]=s}a&&!o&&this.j(e)}j(e){e===ek?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let H=class H extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ek?void 0:e}};let I=class I extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ek)}};let L=class L extends k{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=eM(this,e,t,0)??ek)===eC)return;let r=this._$AH,o=e===ek&&r!==ek||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==ek&&(r===ek||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let z=class z{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){eM(this,e)}};let eO=X.litHtmlPolyfillSupport;eO?.(N,R),(X.litHtmlVersions??=[]).push("3.3.1");let e$=(e,t,r)=>{let o=r?.renderBefore??t,i=o._$litPart$;if(void 0===i){let e=r?.renderBefore??null;o._$litPart$=i=new R(t.insertBefore(es(),e),e,void 0,r??{})}return i._$AI(e),i},eI=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=e$(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return eC}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eI.litElementHydrateSupport?.({LitElement:lit_element_i});let ez=eI.litElementPolyfillSupport;ez?.({LitElement:lit_element_i}),(eI.litElementVersions??=[]).push("4.2.1");let eP=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eD={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:K};function eA(e){return(t,r)=>"object"==typeof r?((e=eD,t,r)=>{let{kind:o,metadata:i}=r,a=globalThis.litPropertyMetadata.get(i);if(void 0===a&&globalThis.litPropertyMetadata.set(i,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),"accessor"===o){let{name:o}=r;return{set(r){let i=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,i,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){let{name:o}=r;return function(r){let i=this[o];t.call(this,r),this.requestUpdate(o,i,e)}}throw Error("Unsupported decorator location: "+o)})(e,t,r):((e,t,r)=>{let o=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function eL(e){return eA({...e,state:!0,attribute:!1})}let eN=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function eH(e,t){return(r,o,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}="object"==typeof o?r:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return eN(r,o,{get(){let r=e.call(this);return void 0===r&&(null!==(r=a(this))||this.hasUpdated)&&t.call(this,r),r}})}return eN(r,o,{get(){return a(this)}})}}function eB(e){return(t,r)=>{let{slot:o,selector:i}=e??{},a="slot"+(o?`[name=${o}]`:":not([name])");return eN(t,r,{get(){let t=this.renderRoot?.querySelector(a),r=t?.assignedElements(e)??[];return void 0===i?r:r.filter(e=>e.matches(i))}})}}var eW=((oM=eW||{})[oM.Hash=35]="Hash",oM[oM.Slash=47]="Slash",oM[oM.Digit0=48]="Digit0",oM[oM.Digit1=49]="Digit1",oM[oM.Digit2=50]="Digit2",oM[oM.Digit3=51]="Digit3",oM[oM.Digit4=52]="Digit4",oM[oM.Digit5=53]="Digit5",oM[oM.Digit6=54]="Digit6",oM[oM.Digit7=55]="Digit7",oM[oM.Digit8=56]="Digit8",oM[oM.Digit9=57]="Digit9",oM[oM.Backslash=92]="Backslash",oM[oM.A=65]="A",oM[oM.B=66]="B",oM[oM.C=67]="C",oM[oM.D=68]="D",oM[oM.E=69]="E",oM[oM.F=70]="F",oM[oM.Z=90]="Z",oM[oM.a=97]="a",oM[oM.b=98]="b",oM[oM.c=99]="c",oM[oM.d=100]="d",oM[oM.e=101]="e",oM[oM.f=102]="f",oM[oM.z=122]="z",oM),eF=((oO=eF||{}).AngleBracketLeftHeavy="❰",oO.AngleBracketRightHeavy="❱",oO.ArrowBack="↩",oO.ArrowDown="↓",oO.ArrowDownUp="⇵",oO.ArrowDropRight="⤷",oO.ArrowHeadRight="➤",oO.ArrowLeft="←",oO.ArrowLeftDouble="⇐",oO.ArrowLeftRight="↔",oO.ArrowLeftRightDouble="⇔",oO.ArrowLeftRightDoubleStrike="⇎",oO.ArrowLeftRightLong="⟷",oO.ArrowRight="→",oO.ArrowRightDouble="⇒",oO.ArrowRightHollow="⇨",oO.ArrowUp="↑",oO.ArrowUpDown="⇅",oO.ArrowUpRight="↗",oO.ArrowsHalfLeftRight="⇋",oO.ArrowsHalfRightLeft="⇌",oO.ArrowsLeftRight="⇆",oO.ArrowsRightLeft="⇄",oO.Asterisk="∗",oO.Bullseye="◎",oO.Check="✔",oO.Dash="—",oO.Dot="•",oO.Ellipsis="…",oO.EnDash="–",oO.Envelope="✉",oO.EqualsTriple="≡",oO.Flag="⚑",oO.FlagHollow="⚐",oO.MiddleEllipsis="⋯",oO.MuchLessThan="≪",oO.MuchGreaterThan="≫",oO.Pencil="✎",oO.Space=" ",oO.SpaceThin=" ",oO.SpaceThinnest=" ",oO.SquareWithBottomShadow="❏",oO.SquareWithTopShadow="❐",oO.Warning="⚠",oO.ZeroWidthSpace="​",oO);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var eG=((o$=eG||{}).File="file",o$.Git="git",o$.GitHub="github",o$.GitLens="gitlens",o$.GitLensAIMarkdown="gitlens-ai-markdown",o$.PRs="pr",o$.Remote="vscode-remote",o$.Vsls="vsls",o$.VslsScc="vsls-scc",o$.Virtual="vscode-vfs",o$);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let ej="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",eU=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${ej}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${ej}`,graph:`https://gitkraken.com/solutions/commit-graph?${ej}`,launchpad:`https://gitkraken.com/solutions/launchpad?${ej}`,platform:`https://gitkraken.com/devex?${ej}`,pricing:`https://gitkraken.com/gitlens/pricing?${ej}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${ej}`,security:`https://help.gitkraken.com/gitlens/security?${ej}`,workspaces:`https://gitkraken.com/solutions/workspaces?${ej}`,cli:`https://gitkraken.com/cli?${ej}`,browserExtension:`https://gitkraken.com/browser-extension?${ej}`,desktop:`https://gitkraken.com/git-client?${ej}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${ej}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${ej}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ej}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${ej}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${ej}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ej}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${ej}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${ej}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ej}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ej}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${ej}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${ej}`});function eV(e,t){let r=Math.pow(10,t);return Math.round(e*r)/r}let RGBA=class RGBA{constructor(e,t,r,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,r)),this.a=eV(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,r,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=eV(Math.max(Math.min(1,t),0),3),this.l=eV(Math.max(Math.min(1,r),0),3),this.a=eV(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,o=e.b/255,i=e.a,a=Math.max(t,r,o),s=Math.min(t,r,o),c=0,u=0,h=(s+a)/2,d=a-s;if(d>0){switch(u=Math.min(h<=.5?d/(2*h):d/(2-2*h),1),a){case t:c=(r-o)/d+6*(r<o);break;case r:c=(o-t)/d+2;break;case o:c=(t-r)/d+4}c*=60,c=Math.round(c)}return new HSLA(c,u,h,i)}static _hue2rgb(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}static toRGBA(e){let t,r,o,i=e.h/360,{s:a,l:s,a:c}=e;if(0===a)t=r=o=s;else{let e=s<.5?s*(1+a):s+a-s*a,c=2*s-e;t=HSLA._hue2rgb(c,e,i+1/3),r=HSLA._hue2rgb(c,e,i),o=HSLA._hue2rgb(c,e,i-1/3)}return new RGBA(Math.round(255*t),Math.round(255*r),Math.round(255*o),c)}};let HSVA=class HSVA{constructor(e,t,r,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=eV(Math.max(Math.min(1,t),0),3),this.v=eV(Math.max(Math.min(1,r),0),3),this.a=eV(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,o=e.b/255,i=Math.max(t,r,o),a=i-Math.min(t,r,o);return new HSVA(Math.round(60*(0===a?0:i===t?((r-o)/a%6+6)%6:i===r?(o-t)/a+2:(t-r)/a+4)),0===i?0:a/i,i,e.a)}static toRGBA(e){let{h:t,s:r,v:o,a:i}=e,a=o*r,s=a*(1-Math.abs(t/60%2-1)),c=o-a,[u,h,d]=[0,0,0];return t<60?(u=a,h=s):t<120?(u=s,h=a):t<180?(h=a,d=s):t<240?(h=s,d=a):t<300?(u=s,d=a):t<=360&&(u=a,d=s),new RGBA(u=Math.round((u+c)*255),h=Math.round((h+c)*255),d=Math.round((d+c)*255),i)}};function eq(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:eY(e)||Color.red}static fromCssVariable(e,t){return eY(eq(e,t))||Color.red}static fromHex(e){return eQ(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){let e=Color._relativeLuminanceForComponent(this.rgba.r),t=Color._relativeLuminanceForComponent(this.rgba.g);return eV(.2126*e+.7152*t+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new Color(new RGBA(0,0,0,e.rgba.a));if(1===t)return new Color(new RGBA(255,255,255,e.rgba.a));let r=e.getRelativeLuminance(),o=20,i=(e,r)=>{let a=e.mix(r,.5),s=a.getRelativeLuminance();return!(1e-7>Math.abs(t-s))&&o--?s>t?i(e,a):i(a,r):a},a=(r>t?i(Color.black,e):i(e,Color.white)).rgba;return new Color(new RGBA(a.r,a.g,a.b,e.rgba.a))}(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),r=e.getRelativeLuminance();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:r,b:o,a:i}=this.rgba;return new Color(new RGBA(t,r,o,i*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,r=this.rgba.a,o=t.a,i=r+o*(1-r);if(i<1e-6)return Color.transparent;let a=this.rgba.r*r/i+t.r*o*(1-r)/i;return new Color(new RGBA(a,this.rgba.g*r/i+t.g*o*(1-r)/i,this.rgba.b*r/i+t.b*o*(1-r)/i,i))}mix(e,t){let r=this.rgba,o=e.rgba;return new Color(new RGBA(r.r+t*(o.r-r.r),r.g+t*(o.g-r.g),r.b+t*(o.b-r.b),r.a+t*(o.a-r.a)))}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:r,b:o,a:i}=this.rgba;return new Color(new RGBA(e.rgba.r-i*(e.rgba.r-t),e.rgba.g-i*(e.rgba.g-r),e.rgba.b-i*(e.rgba.b-o),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let r=1-e.rgba.a;return new Color(new RGBA(r*t.rgba.r+e.rgba.a*e.rgba.r,r*t.rgba.g+e.rgba.a*e.rgba.g,r*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${eZ(e.rgba.r)}${eZ(e.rgba.g)}${eZ(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,r){if(e.isLighterThan(t))return e;r=r||.5;let o=e.getRelativeLuminance(),i=t.getRelativeLuminance();return r=r*(i-o)/i,e.lighten(r)}static getDarkerColor(e,t,r){if(e.isDarkerThan(t))return e;r=r||.5;let o=e.getRelativeLuminance(),i=t.getRelativeLuminance();return r=r*(o-i)/o,e.darken(r)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function eZ(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let eK=/^((?:rgb|hsl)a?)\((-?\d+(?:%|deg)?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function eY(e){let t;if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===eW.Hash)return eQ(e);let r=eK.exec(e);if(null==r)return null;let o=r[1];switch(o){case"rgb":case"hsl":t=[parseInt(r[2],10),parseInt(r[3],10),parseInt(r[4],10),1];break;case"rgba":case"hsla":t=[parseInt(r[2],10),parseInt(r[3],10),parseInt(r[4],10),parseFloat(r[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new Color(new RGBA(t[0],t[1],t[2],t[3]));case"hsl":case"hsla":return new Color(new HSLA(t[0],t[1],t[2],t[3]))}return Color.red}function eQ(e){let t=(e=e.trim()).length;if(0===t||e.charCodeAt(0)!==eW.Hash)return null;switch(t){case 7:{let t=16*eX(e.charCodeAt(1))+eX(e.charCodeAt(2));return new Color(new RGBA(t,16*eX(e.charCodeAt(3))+eX(e.charCodeAt(4)),16*eX(e.charCodeAt(5))+eX(e.charCodeAt(6)),1))}case 9:{let t=16*eX(e.charCodeAt(1))+eX(e.charCodeAt(2)),r=16*eX(e.charCodeAt(3))+eX(e.charCodeAt(4));return new Color(new RGBA(t,r,16*eX(e.charCodeAt(5))+eX(e.charCodeAt(6)),(16*eX(e.charCodeAt(7))+eX(e.charCodeAt(8)))/255))}case 4:{let t=eX(e.charCodeAt(1)),r=eX(e.charCodeAt(2)),o=eX(e.charCodeAt(3));return new Color(new RGBA(16*t+t,16*r+r,16*o+o))}case 5:{let t=eX(e.charCodeAt(1)),r=eX(e.charCodeAt(2)),o=eX(e.charCodeAt(3)),i=eX(e.charCodeAt(4));return new Color(new RGBA(16*t+t,16*r+r,16*o+o,(16*i+i)/255))}default:return null}}function eX(e){switch(e){case eW.Digit0:break;case eW.Digit1:return 1;case eW.Digit2:return 2;case eW.Digit3:return 3;case eW.Digit4:return 4;case eW.Digit5:return 5;case eW.Digit6:return 6;case eW.Digit7:return 7;case eW.Digit8:return 8;case eW.Digit9:return 9;case eW.a:case eW.A:return 10;case eW.b:case eW.B:return 11;case eW.c:case eW.C:return 12;case eW.d:case eW.D:return 13;case eW.e:case eW.E:return 14;case eW.f:case eW.F:return 15}return 0}function eJ(e,t,r){return`color-mix(in srgb, ${e} ${r}%, ${t})`}let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,r,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=r,this.subscribe=o??!1}};let context_consumer_s=class context_consumer_s{constructor(e,t,r,o){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=r,this.subscribe=o??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let r=t||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,r){super(void 0!==t.context?t.initialValue:r),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:r}]of this.subscriptions)t.has(e)||(t.add(e),r.dispatchEvent(new context_request_event_s(this.context,r,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function e0({context:e}){return(t,r)=>{let o=new WeakMap;if("object"==typeof r)return{get(){return t.get.call(this)},set(e){return o.get(this).setValue(e),t.set.call(this,e)},init(t){return o.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let i;t.constructor.addInitializer(t=>{o.set(t,new context_provider_i(t,{context:e}))});let a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){let e=new WeakMap;i={get(){return e.get(this)},set(t){o.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=a.set;i={...a,set(t){o.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,r,i)}}}function e1({context:e,subscribe:t}){return(r,o)=>{"object"==typeof o?o.addInitializer(function(){new context_consumer_s(this,{context:e,callback:e=>{r.set.call(this,e)},subscribe:t})}):r.constructor.addInitializer(r=>{new context_consumer_s(r,{context:e,callback:e=>{r[o]=e},subscribe:t})})}}let{fromCharCode:e2}=String;new TextEncoder;let e5=new TextDecoder;function e3(e,t,r){let o,i,a,s,c,u,h,d,p,f,g=0;null!=r&&({edges:u,maxWait:h,signal:d,aggregator:p}=r);let m="leading"===(u??="trailing")||"both"===u,b="trailing"===u||"both"===u;function v(){if(null!=o){g=Date.now();let t=o,r=f;return f=void 0,o=void 0,a=e.apply(r,t)}}function w(){null!=s&&(clearTimeout(s),s=void 0)}function S(){null!=c&&(clearTimeout(c),c=void 0)}function x(){w(),S(),f=void 0,o=void 0,i=void 0,g=0}function C(...e){if(d?.aborted)return;let r=Date.now();null!=p&&null!=o?o=p(o,e):(f=this,o=e);let u=null==s&&null==c;i=r,w();let S=Date.now();if(i=S,s=setTimeout(()=>{s=void 0,function(e){let r=e-(i??0),o=e-g;return null==i||r>=t||r<0||null!=h&&o>=h}(Date.now())&&b&&v(),x()},t),null!=h&&!c){let e=h-(S-g);e>0?c=setTimeout(()=>{c=void 0,b&&null!=o&&v(),g=Date.now()},e):(b&&null!=o&&v(),x())}return m&&u?v():a}return C.cancel=x,C.flush=function(){return w(),S(),v()},C.pending=function(){return null!=s||null!=c},d?.addEventListener("abort",x,{once:!0}),C}let IpcCall=class IpcCall{constructor(e,t,r=!1,o=!1){this.scope=e,this.reset=r,this.pack=o,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,r,o){super(e,t,r,o),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset,this.pack)}};let IpcNotification=class IpcNotification extends IpcCall{};let e6=new IpcCommand("core","webview/ready"),e4=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let e8=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let e7=new IpcCommand("core","telemetry/sendEvent"),e9=new IpcNotification("core","ipc/promise/settled"),te=new IpcNotification("core","window/focus/didChange"),tt=new IpcCommand("core","webview/focus/didChange"),tr=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let to=new WeakMap;function tn(e,t){return function(r,o,i){let a=to.get(r.constructor);null==a&&to.set(r.constructor,a=[]),a.push({method:i.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,r){let o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...r,detail:t});return this.dispatchEvent(o),o}update(e){let t=to.get(this.constructor);if(null!=t)for(let{keys:r,method:o,afterFirstUpdate:i}of t){if(i&&!this.hasUpdated)continue;let t=r.filter(t=>e.has(t));t.length&&o.call(this,t)}super.update(e)}};function ti(e){let t=.001*performance.now(),r=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(r-=e[0],(o-=e[1])<0&&(r--,o+=1e9)),[r,o]}S(6047);let ta=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,ts=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,tl=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],tc=new Map,tu=new Map;function th(i,a){let s=("number"==typeof i?i:i.getTime())-new Date().getTime();for(let[i,c,u,h]of tl){let d=Math.abs(s);if(d>=c||1e3===c){if(a){if(null==e&&(e=null!=o?o.resolvedOptions().locale:null!=r?r.resolvedOptions().locale:(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===e||e?.startsWith("en-")){let e=Math.round(d/u);return`${e}${h}`}return null==o&&(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),o.format(Math.round(s/u),i)}return null==r&&(r=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"auto",style:"long"})),r.format(Math.round(s/u),i)}}return""}function td(e,r,o,i=!0){r=r??void 0;let a=`${o??""}:${r}`,s=tc.get(a);if(null==s){let e,c=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=ts.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:r}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:r||void 0}}let r={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(ta))if(null!=t){for(let[e,o]of Object.entries(t))if(null!=o)switch(e){case"year":r.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:r.month="long";break;case 3:r.month="short";break;case 2:r.month="2-digit";break;case 1:r.month="numeric"}break;case"day":"DD"===o?r.day="2-digit":r.day="numeric";break;case"weekday":switch(o.length){case 4:r.weekday="long";break;case 3:r.weekday="short";break;case 2:r.weekday="narrow"}break;case"hour":r.hour=2===o.length?"2-digit":"numeric",r.hour12="hh"===o||"h"===o;break;case"minute":r.minute=2===o.length?"2-digit":"numeric";break;case"second":r.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":r.fractionalSecondDigits=3;break;case"dayPeriod":r.dayPeriod="narrow",r.hour12=!0,r.hourCycle="h12";break;case"timeZoneName":r.timeZoneName=2===o.length?"long":"short"}}return r}(r);e=null==o?t:"system"===o?void 0:[o],s=new Intl.DateTimeFormat(e,c),i&&tc.set(a,s)}if(null==r||ts.test(r))return s.format(e);let c=s.formatToParts(e);return r.replace(ta,(r,a,s,u,h,d,p,f,g,m,b,v,w,S,x)=>{if(null!=a)return a.substring(1,a.length-1);for(let[r,a]of Object.entries(x)){if(null==a)continue;let s=c.find(e=>e.type===r);if("Do"===a&&s?.type==="day"){var C=Number(s.value);let e=C%100;return`${C}${tp[(e-20)%10]??tp[e]??tp[0]}`}if("a"===a&&s?.type==="dayPeriod"){let r=(function(e){let r=`${o??""}:time:${e}`,a=tc.get(r);if(null==a){let s;s=null==o?t:"system"===o?void 0:[o],a=new Intl.DateTimeFormat(s,{localeMatcher:"best fit",timeStyle:e}),i&&tc.set(r,a)}return a})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return` ${(r??s)?.value??""}`}return s?.value??""}return""})}let tp=["th","st","nd","rd"];function tf(e,r){null==e&&(e="decimal");let o=`${r??""}:${e}`,i=tu.get(o);if(null==i){let a,s={localeMatcher:"best fit",style:e};a=null==r?t:"system"===r?void 0:[r],i=new Intl.NumberFormat(a,s),tu.set(o,i)}return i.format}function tg(e){return`${e[0].toLocaleUpperCase()}${e.slice(1)}`}function tm(e){let[t,r]=ti(e);return 1e3*t+Math.floor(r/1e6)}function tb(e,t,r){let o;if(null==r)return i??=tf(),`${i(t)} ${e}${1===t?"":"s"}`;let a=1===t?e:r.plural??`${e}s`;return r.only?a:(0===t?o=r.zero??t:!1===r.format?o=t:null!=r.format?o=r.format(t):(i??=tf(),o=i(t)),`${o}${r.infix??" "}${a}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var tv=((oI=tv||{})[oI.Off=0]="Off",oI[oI.Error=1]="Error",oI[oI.Warn=2]="Warn",oI[oI.Info=3]="Info",oI[oI.Debug=4]="Debug",oI);let ty=["accessToken","password","token"],tw=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,r=!1){if(null!=e.sanitizeKeys)for(let t of ty)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(ty);this.provider=e,this._isDebugging=r,this.logLevel=t}enabled(e){return this.level>=tS(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=tS(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let r;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...r){let o;if(!(this.level<1)||this.isDebugging){if(null==(o=null==t||"string"==typeof t?t:`${t.prefix} ${r.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,r)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let r;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let r;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let r=this.provider.toLoggable?.(e);if(null!=r)return r;try{return JSON.stringify(e,(e,r)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(r=t(e,r)),this.provider?.sanitizer!=null&&(r=this.provider.sanitizer(e,r)),r))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let r=t.map(e=>this.toLoggable(e)).join(", ");return 0!==r.length?` \u2014 ${r}`:""}};function tS(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let tx=new WeakMap,tC={enabled:e=>tw.enabled(e)||tw.isDebugging,log:(e,t,r,...o)=>{switch(e){case"error":tw.error(void 0,t,r,...o);break;case"warn":tw.warn(t,r,...o);break;case"info":tw.log(t,r,...o);break;default:tw.debug(t,r,...o)}}},tk=0x40000000-1;function t_(){let e=0;return{get current(){return e},next:function(){return e===tk&&(e=0),++e},reset:function(){e=0}}}let tR=t_(),tT=new Map;function tE(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function tM(){return tT.get(tR.current)}function t$(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let r=t?tR.current:void 0,o=tR.next();return{scopeId:o,prevScopeId:r,prefix:`${tE(o,r)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=t$(e,void 0),tw.configure({name:e,createChannel:function(e){return{name:e,appendLine:tw.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?tw.log(this.scope,e,...t):tw.log(e,t.shift(),...t)}};let tI="home";new IpcRequest(tI,"launchpad/summary"),new IpcRequest(tI,"overview/active"),new IpcRequest(tI,"overview/inactive"),new IpcRequest(tI,"overviewFilter"),new IpcCommand(tI,"overview/repository/change"),new IpcNotification(tI,"overview/repository/didChange"),new IpcCommand(tI,"previewEnabled/toggle"),new IpcCommand(tI,"section/collapse"),new IpcCommand(tI,"walkthrough/dismiss"),new IpcNotification(tI,"ai/allAccess/didChange"),new IpcCommand(tI,"ai/allAccess/dismiss"),new IpcCommand(tI,"overview/filter/set"),new IpcCommand(tI,"openInGraph"),new IpcNotification(tI,"repositories/didCompleteDiscovering"),new IpcNotification(tI,"previewEnabled/didChange"),new IpcNotification(tI,"repository/wip/didChange"),new IpcNotification(tI,"repositories/didChange"),new IpcNotification(tI,"walkthroughProgress/didChange"),new IpcNotification(tI,"integrations/didChange"),new IpcNotification(tI,"launchpad/didChange");let tz=new IpcNotification(tI,"subscription/didChange");new IpcNotification(tI,"org/settings/didChange"),new IpcNotification(tI,"home/ownerFilter/didChange"),new IpcNotification(tI,"account/didFocus");let tP="graph",tD=new IpcCommand(tP,"chooseRepository"),tA=new IpcCommand(tP,"dblclick");new IpcCommand(tP,"dblclick");let tL=new IpcCommand(tP,"avatars/get"),tN=new IpcCommand(tP,"refs/metadata/get"),tH=new IpcCommand(tP,"rows/get"),tB=new IpcCommand(tP,"pullRequest/openDetails"),tW=new IpcCommand(tP,"search/openInView"),tF=new IpcCommand(tP,"columns/update"),tG=new IpcCommand(tP,"refs/update/visibility"),tj=new IpcCommand(tP,"filters/update/excludeTypes"),tU=new IpcCommand(tP,"configuration/update"),tV=new IpcCommand(tP,"search/update/mode"),tq=new IpcCommand(tP,"filters/update/includedRefs"),tZ=new IpcCommand(tP,"selection/update"),tK=new IpcRequest(tP,"chooseRef"),tY=new IpcRequest(tP,"rows/ensure"),tQ=new IpcRequest(tP,"counts"),tX=new IpcRequest(tP,"row/hover/get"),tJ=new IpcRequest(tP,"search"),t0=new IpcNotification(tP,"repositories/integration/didChange"),t1=new IpcNotification(tP,"didChange",!0,!0),t3=new IpcNotification(tP,"configuration/didChange"),t6=new IpcNotification(tP,"subscription/didChange"),t4=new IpcNotification(tP,"org/settings/didChange"),t8=new IpcNotification(tP,"avatars/didChange"),t7=new IpcNotification(tP,"branchState/didChange"),t9=new IpcNotification(tP,"refs/didChangeMetadata"),re=new IpcNotification(tP,"columns/didChange"),rt=new IpcNotification(tP,"scrollMarkers/didChange"),rr=new IpcNotification(tP,"refs/didChangeVisibility"),ro=new IpcNotification(tP,"rows/didChange",void 0,!0),rn=new IpcNotification(tP,"rows/stats/didChange"),ri=new IpcNotification(tP,"selection/didChange"),ra=new IpcNotification(tP,"workingTree/didChange"),rs=new IpcNotification(tP,"didSearch"),rl=new IpcNotification(tP,"didFetch"),rc=new IpcNotification(tP,"featurePreview/didStart"),ru="timeline";new IpcRequest(ru,"ref/choose"),new IpcRequest(ru,"path/choose"),new IpcCommand(ru,"point/open"),new IpcCommand(ru,"config/update"),new IpcCommand(ru,"scope/update");let rh=new IpcNotification(ru,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(tz.is(e)||t6.is(e)||rh.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let r=`${e}|${t}`,o=this._promos.get(r);return null==o&&(o=this.ipc.sendRequest(e8,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(r,o)),await o}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(e7,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};let rd=/\(([\s\S]*)\)/,rp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,rf=/\s?=.*$/;function rg(e,t){return e?.status==="fulfilled"?e.value:t}function rm(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}function rb(e){return function(e,t=!1){let r,o,i,a,s,c=0,u=!1,h=!1,d=!0;null!=e&&({args:r,if:o,enter:i,exit:a,prefix:s,logThreshold:c=0,scoped:u=!0,singleLine:h=!1,timed:d=!0}=e),c>0&&(h=!0,d=!0),d&&(u=!0);let p=tw.isDebugging,f=t?tw.debug:tw.log,g=p?"debug":"info";return(e,t,m)=>{let b,v;if("function"==typeof m.value?(b=m.value,v="value"):"function"==typeof m.get&&(b=m.get,v="get"),null==b||null==v)throw Error("Not supported");let w=!1!==r?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),r=(t=(t=t.replace(rp,"")||t).slice(0,t.indexOf("{"))).indexOf("("),o=t.indexOf(")");r=r>=0?r+1:0,o=o>0?o:t.indexOf("="),t=t.slice(r,o),t=`(${t})`;let i=rd.exec(t);return null!=i?i[1].split(",").map(e=>e.trim().replace(rf,"")):[]}(b):[];m[v]=function(...e){var m;let v,S;if(!p&&!tw.enabled(g)||null!=o&&!o.apply(this,e))return b.apply(this,e);let x=tR.current,C=tR.next(),_=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let r=t?.name??"",o=r.indexOf("_");-1!==o&&(r=r.substring(o+1));let i=tx.get(t);return i?.(e,r)??r}(this):void 0,T=_?u?`${tE(C,x)} ${_}.${t}`:`${_}.${t}`:t;null!=s&&(T=s({id:C,instance:this,instanceName:_??"",name:t,prefix:T},...e)),u&&(m={scopeId:C,prevScopeId:x,prefix:T},m={prevScopeId:tR.current,...m},tT.set(C,m),v=m);let E=null!=i?i(...e):"";if(!1===r||0===e.length)S="",h||f.call(tw,`${T}${E}`);else{let t,o,i,a;S="";let s=-1;for(a of e){if(o=w[++s],null!=(t=r?.[s])){if("boolean"==typeof t)continue;if(S.length>0&&(S+=", "),"string"==typeof t){S+=t;continue}i=String(t(a))}else S.length>0&&(S+=", "),i=tw.toLoggable(a);S+=o?`${o}=${i}`:i}h||f.call(tw,S?`${T}${E}(${S})`:`${T}${E}`)}if(h||d||null!=a){let t,r=d?ti():void 0,o=e=>{let t=void 0!==r?` [${tm(r)}ms]`:"";h?tw.error(e,S?`${T}${E}(${S})`:`${T}${E}`,v?.exitDetails?`failed${v.exitDetails}${t}`:`failed${t}`):tw.error(e,T,v?.exitDetails?`failed${v.exitDetails}${t}`:`failed${t}`),u&&tT.delete(C)};try{t=b.apply(this,e)}catch(e){throw o(e),e}let i=e=>{let t,o,i,s;if(null!=r?(t=tm(r))>500?(o=tw.warn,i=` [*${t}ms] (slow)`):(o=f,i=` [${t}ms]`):(i="",o=f),null!=a)if("function"==typeof a)try{s=a(e)}catch(e){s=`@log.exit error: ${e}`}else!0===a&&(s=`returned ${tw.toLoggable(e)}`);else v?.exitFailed?(s=v.exitFailed,o=(e,...t)=>tw.error(null,e,...t)):s="completed";h?(0===c||t>c)&&o.call(tw,S?`${T}${E}(${S}) ${s}${v?.exitDetails||""}${i}`:`${T}${E} ${s}${v?.exitDetails||""}${i}`):o.call(tw,S?`${T}(${S}) ${s}${v?.exitDetails||""}${i}`:`${T} ${s}${v?.exitDetails||""}${i}`),u&&tT.delete(C)};return null!=t&&rm(t)?t.then(i,o):i(t),t}return b.apply(this,e)}}}(e,!0)}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...r){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:t$(e??"",!1),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??tC,this._time=ti(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;r.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...r):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=ti(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=ti(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[r,o]=ti(this._time),i=1e3*r+Math.floor(o/1e6),a=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${i}ms]${e?.suffix??""}`)}};function rv(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function ry(e,t){return new Promise(r=>{e.addEventListener(t,function o(i){i.target===e&&(e.removeEventListener(t,o),r())})})}(oP||(oP={})).on=function(e,t,r,o){let i=!1;if("string"==typeof e){let a=function(t){let o=t?.target?.closest(e);null!=o&&r(t,o)};return document.addEventListener(t,a,o??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,a,o??!0))}}}let a=function(e){r(e,this)};return e.addEventListener(t,a,o??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,a,o??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,r)=>{null==this.listeners&&(this.listeners=new LinkedList);let o=this.listeners.push(null==t?e:[e,t]),i={dispose:()=>{i.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(r)&&r.push(i),i}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),r=t.next();!r.done;r=t.next())this._deliveryQueue.push([r.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let rw={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let r=new events_Node(e);if(this._first===events_Node.Undefined)this._first=r,this._last=r;else if(t){let e=this._last;this._last=r,r.prev=e,e.next=r}else{let e=this._first;this._first=r,r.next=e,e.prev=r}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(r))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?rw:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var rS=Object.defineProperty,rx=Object.getOwnPropertyDescriptor,rC=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?rx(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&rS(t,r,a),a};let rk=t_();function r_(){return`webview:${rk.next()}`}let rR=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=a??=acquireVsCodeApi(),this._disposable=oP.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){let t=tM(),r=e.data;if(r.packed&&r.params instanceof Uint8Array){let o=function(e,t,...r){return(t?.provider??tC).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...r):void 0}(t$(` deserializing msg=${e.data.method}`,t),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,r.params=JSON.parse(this._textDecoder.decode(r.params)),o?.stop()}if(this.replaceIpcPromisesWithPromises(r.params),null!=r.completionId){var o,i;let e=(o=r.method,i=r.completionId,`${o}|${i}`);this._pendingHandlers.get(e)?.(r);return}this._onReceiveMessage.fire(r)}replaceIpcPromisesWithPromises(e){if(null!=e&&"object"==typeof e)for(let t in e){let r=e[t];null!=r&&"object"==typeof r&&"__ipc"in r&&"promise"===r.__ipc&&"id"in r&&"string"==typeof r.id&&"method"in r&&"string"==typeof r.method?e[t]=this.getResponsePromise(r.method,r.id):this.replaceIpcPromisesWithPromises(r)}}sendCommand(e,t){let r=r_();this.postMessage({id:r,scope:e.scope,method:e.method,params:t})}async sendRequest(e,t){let r=r_(),o=this.getResponsePromise(e.response.method,r);return this.postMessage({id:r,scope:e.scope,method:e.method,params:t,completionId:r}),o}getResponsePromise(e,t){return new Promise((r,o)=>{var i,a;let s,c=(i=e,a=t,`${i}|${a}`);function u(){clearTimeout(s),s=void 0,this._pendingHandlers.delete(c)}s=setTimeout(()=>{u.call(this),o(Error(`Timed out waiting for completion of ${c}`))},(tw.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(u.call(this),e.method===e9.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>o(Error(t.reason))):queueMicrotask(()=>r(t.value))}else queueMicrotask(()=>r(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};rC([rb({args:{0:e=>`${e.data.id}, method=${e.data.method}`}})],rR.prototype,"onMessageReceived",1),rC([rb({args:{0:e=>e.method,1:!1}})],rR.prototype,"sendCommand",1),rC([rb({args:{0:e=>e.method,1:!1,2:!1}})],rR.prototype,"sendRequest",1),rC([rb({args:{0:e=>`${e.id}, method=${e.method}`}})],rR.prototype,"postMessage",1),rR=rC([(oz=e=>`${e.appName}(HostIpc)`,e=>void tx.set(e,oz))],rR);let rT=new Emitter,rE=rT.event;function rM(e){let t=document.documentElement,r=window.getComputedStyle(t),o=document.body.classList,i=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),a=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),s=eq("--vscode-editor-background",r),c=eq("--vscode-editor-foreground",r);return c||(c=eq("--vscode-foreground",r)),{colors:{background:s,foreground:c},computedStyle:r,isLightTheme:i,isHighContrastTheme:a,isInitializing:null==e}}var rO=Object.defineProperty,r$=Object.getOwnPropertyDescriptor,rI=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?r$(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&rO(t,r,a),a};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){var e;super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new rR(this.name),this._ipc.sendCommand(e6,void 0);let t=JSON.parse((e=this.bootstrap,e5.decode(function(e){let t=globalThis.atob(e),r=t.length,o=new Uint8Array(r),i=0,a=r-r%8;for(;i<a;i+=8)o[i]=t.charCodeAt(i),o[i+1]=t.charCodeAt(i+1),o[i+2]=t.charCodeAt(i+2),o[i+3]=t.charCodeAt(i+3),o[i+4]=t.charCodeAt(i+4),o[i+5]=t.charCodeAt(i+5),o[i+6]=t.charCodeAt(i+6),o[i+7]=t.charCodeAt(i+7);for(;i<r;i++)o[i]=t.charCodeAt(i);return o}(e))));this.bootstrap=void 0,this._ipc.replaceIpcPromisesWithPromises(t),this.onPersistState?.(t);let r=rM();null!=this.onThemeUpdated&&(this.onThemeUpdated(r),this.disposables.push(function(){let e=new MutationObserver(e=>{rT.fire(rM(e))});return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),this.disposables.push(rE(this.onThemeUpdated,this))),this.disposables.push(this._stateProvider=this.createStateProvider(t,this._ipc),this._ipc.onReceiveMessage(e=>{switch(!0){case tt.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case tr.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=e3(e=>{this._ipc.sendCommand(e4,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return ew`<slot></slot>`}};rI([eA({type:String})],GlAppHost.prototype,"name",2),rI([eA({type:String})],GlAppHost.prototype,"placement",2),rI([e0({context:"ipc"})],GlAppHost.prototype,"_ipc",2),rI([e0({context:"logger"})],GlAppHost.prototype,"_logger",2),rI([e0({context:"promos"})],GlAppHost.prototype,"_promos",2),rI([e0({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),rI([eA({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);var rz=Object.defineProperty,rP=(e,t,r)=>{let o;return(o="symbol"!=typeof t?t+"":t)in e?rz(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,r},rD=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},rA=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},rL=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot access private method");return r};function rN(e,t){return Object.is(e,t)}let rH=null,rB=!1,rW=1,rF=Symbol("SIGNAL");function rG(e){let t=rH;return rH=e,t}let rj={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function rU(e){if(rB)throw Error("undefined"!=typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===rH)return;rH.consumerOnSignalRead(e);let t=rH.nextProducerIndex++;rZ(rH),t<rH.producerNode.length&&rH.producerNode[t]!==e&&rq(rH)&&rV(rH.producerNode[t],rH.producerIndexOfThis[t]),rH.producerNode[t]!==e&&(rH.producerNode[t]=e,rH.producerIndexOfThis[t]=rq(rH)?function e(t,r,o){var i;if(rK(t),rZ(t),0===t.liveConsumerNode.length){null==(i=t.watched)||i.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)t.producerIndexOfThis[r]=e(t.producerNode[r],t,r)}return t.liveConsumerIndexOfThis.push(o),t.liveConsumerNode.push(r)-1}(e,rH,t):0),rH.producerLastReadVersion[t]=e.version}function rV(e,t){var r;if(rK(e),rZ(e),"undefined"!=typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(r=e.unwatched)||r.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)rV(e.producerNode[t],e.producerIndexOfThis[t])}let o=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[o],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[o],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];rZ(o),o.producerIndexOfThis[r]=t}}function rq(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function rZ(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function rK(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function rY(e){if(function e(t){if(t.dirty||t.lastCleanEpoch!==rW){if(!t.producerMustRecompute(t)&&!function(t){rZ(t);for(let r=0;r<t.producerNode.length;r++){let o=t.producerNode[r],i=t.producerLastReadVersion[r];if(i!==o.version||(e(o),i!==o.version))return!0}return!1}(t)){t.dirty=!1,t.lastCleanEpoch=rW;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=rW}}(e),rU(e),e.value===rJ)throw e.error;return e.value}let rQ=Symbol("UNSET"),rX=Symbol("COMPUTING"),rJ=Symbol("ERRORED"),r0={...rj,value:rQ,dirty:!0,error:null,equal:rN,producerMustRecompute:e=>e.value===rQ||e.value===rX,producerRecomputeValue(e){let t;if(e.value===rX)throw Error("Detected cycle in computations.");let r=e.value;e.value=rX;let o=(e&&(e.nextProducerIndex=0),rG(e)),i=!1;try{t=e.computation.call(e.wrapper),i=r!==rQ&&r!==rJ&&e.equal.call(e.wrapper,r,t)}catch(r){t=rJ,e.error=r}finally{if(rG(o),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(rq(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)rV(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}if(i){e.value=r;return}e.value=t,e.version++}},r1=function(){throw Error()};function r2(){return rU(this),this.value}let r5={...rj,equal:rN,value:void 0},r3=Symbol("node");(e=>{var t,r,o,i;let State=class State{constructor(o,i={}){rA(this,r),rP(this,t);let a=function(e){let t=Object.create(r5);t.value=e;let r=()=>(rU(t),t.value);return r[rF]=t,r}(o)[rF];if(this[r3]=a,a.wrapper=this,i){let t=i.equals;t&&(a.equal=t),a.watched=i[e.subtle.watched],a.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.get");return r2.call(this[r3])}set(t){var r,o;if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.set");if(rB)throw Error("Writes to signals not permitted during Watcher callback");r=this[r3],(null==rH?void 0:rH.consumerAllowSignalWrites)===!1&&r1(),r.equal.call(r.wrapper,r.value,t)||(r.value=t,o=r,o.version++,rW++,function e(t){if(void 0===t.liveConsumerNode)return;let r=rB;rB=!0;try{for(let r of t.liveConsumerNode)r.dirty||function(t){var r;t.dirty=!0,e(t),null==(r=t.consumerMarkedDirty)||r.call(t.wrapper??t)}(r)}finally{rB=r}}(o))}};t=r3,r=new WeakSet,e.isState=e=>"object"==typeof e&&rD(r,e),e.State=State;let Computed=class Computed{constructor(t,r){rA(this,i),rP(this,o);let a=function(e){let t=Object.create(r0);t.computation=e;let r=()=>rY(t);return r[rF]=t,r}(t)[rF];if(a.consumerAllowSignalWrites=!0,this[r3]=a,a.wrapper=this,r){let t=r.equals;t&&(a.equal=t),a.watched=r[e.subtle.watched],a.unwatched=r[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");return rY(this[r3])}};o=r3,i=new WeakSet,e.isComputed=e=>"object"==typeof e&&rD(i,e),e.Computed=Computed,(t=>{var r,o,i,a;t.untrack=function(e){let t,r=null;try{r=rG(null),t=e()}finally{rG(r)}return t},t.introspectSources=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(r=t[r3].producerNode)?void 0:r.map(e=>e.wrapper))??[]},t.introspectSinks=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called introspectSinks without a Signal argument");return(null==(r=t[r3].liveConsumerNode)?void 0:r.map(e=>e.wrapper))??[]},t.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called hasSinks without a Signal argument");let r=t[r3].liveConsumerNode;return!!r&&r.length>0},t.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called hasSources without a Computed or Watcher argument");let r=t[r3].producerNode;return!!r&&r.length>0};let Watcher=class Watcher{constructor(e){rA(this,o),rA(this,i),rP(this,r);let t=Object.create(rj);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[r3]=t}watch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");rL(this,i,a).call(this,t);let r=this[r3];r.dirty=!1;let o=rG(r);for(let e of t)rU(e[r3]);rG(o)}unwatch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");rL(this,i,a).call(this,t);let r=this[r3];rZ(r);for(let e=r.producerNode.length-1;e>=0;e--)if(t.includes(r.producerNode[e].wrapper)){rV(r.producerNode[e],r.producerIndexOfThis[e]);let t=r.producerNode.length-1;if(r.producerNode[e]=r.producerNode[t],r.producerIndexOfThis[e]=r.producerIndexOfThis[t],r.producerNode.length--,r.producerIndexOfThis.length--,r.nextProducerIndex--,e<r.producerNode.length){let t=r.producerIndexOfThis[e],o=r.producerNode[e];rK(o),o.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw TypeError("Called getPending without Watcher receiver");return this[r3].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}};r=r3,o=new WeakSet,i=new WeakSet,a=function(t){for(let r of t)if(!(0,e.isComputed)(r)&&!(0,e.isState)(r))throw TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>rD(o,e),t.Watcher=Watcher,t.currentComputed=function(){var e;return null==(e=rH)?void 0:e.wrapper},t.watched=Symbol("watched"),t.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(oD||(oD={}));let r6=Symbol("SignalWatcherBrand"),r4=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),r8=new WeakMap;function r7(e){return!0===e[r6]?e:class extends e{constructor(){super(...arguments),this._$St=new oD.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new oD.Computed(()=>{this._$St.get(),super.performUpdate()});let e=this._$Su=new oD.subtle.Watcher(function(){let e=r8.get(this);void 0!==e&&(!1===e._$Si&&e.requestUpdate(),this.watch())});r8.set(e,this),r4.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(e=>e.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,t,r){this._$So=!0,super.requestUpdate(e,t,r)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}_(e){this._$Sh.add(e);let t=this._$So;this.requestUpdate(),this._$So=t}m(e){this._$Sh.delete(e)}}}let r9=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let{I:oe}={M:et,P:er,A:en,C:1,L:eE,R:M,D:eu,V:eM,I:R,H:k,N:I,U:L,B:H,F:z},ot=(e,t)=>void 0===t?void 0!==e?._$litType$:e?._$litType$===t,or=()=>document.createComment(""),oo=(e,t,r)=>{let o=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===r)r=new oe(o.insertBefore(or(),i),o.insertBefore(or(),i),e,e.options);else{let t=r._$AB.nextSibling,a=r._$AM,s=a!==e;if(s){let t;r._$AQ?.(e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==a._$AU&&r._$AP(t)}if(t!==i||s){let e=r._$AA;for(;e!==t;){let t=e.nextSibling;o.insertBefore(e,i),e=t}}}return r},on=(e,t,r=e)=>(e._$AI(t,r),e),oi={},oa=(e,t=oi)=>e._$AH=t,os=e=>{e._$AR(),e._$AA.remove()},ol=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),ol(e,t);return!0},oc=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},ou=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),op(t)}};function oh(e){void 0!==this._$AN?(oc(this),this._$AM=e,ou(this)):this._$AM=e}function od(e,t=!1,r=0){let o=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(o))for(let e=r;e<o.length;e++)ol(o[e],!1),oc(o[e]);else null!=o&&(ol(o,!1),oc(o));else ol(this,e)}let op=e=>{2==e.type&&(e._$AP??=od,e._$AQ??=oh)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),ou(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ol(this,e),oc(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let watch_h=class watch_h extends async_directive_f{_$Sl(){if(void 0!==this._$Su)return;this._$SW=new oD.Computed(()=>{var e;return null==(e=this._$Sj)?void 0:e.get()});let e=this._$Su=new oD.subtle.Watcher(()=>{var t;null==(t=this._$SO)||t._(this),e.watch()});e.watch(this._$SW)}_$Sp(){var e;void 0!==this._$Su&&(this._$Su.unwatch(this._$SW),this._$SW=void 0,this._$Su=void 0,null==(e=this._$SO)||e.m(this))}commit(){this.setValue(oD.subtle.untrack(()=>{var e;return null==(e=this._$SW)?void 0:e.get()}))}render(e){return oD.subtle.untrack(()=>e.get())}update(e,[t]){var r;return null!=this._$SO||(this._$SO=null==(r=e.options)?void 0:r.host),t!==this._$Sj&&void 0!==this._$Sj&&this._$Sp(),this._$Sj=t,this._$Sl(),oD.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$Sl()}};let of=r9(watch_h),og=e=>(t,...r)=>e(t,...r.map(e=>e instanceof oD.State||e instanceof oD.Computed?of(e):e));og(ew),og(eS),oD.State,oD.Computed;let om=(e=null)=>new oD.State(e,{equals:()=>!1});new WeakMap;let SignalObjectImpl=class SignalObjectImpl{static fromEntries(e){return new SignalObjectImpl(Object.fromEntries(e))}#e=new Map;#t=om();constructor(e={}){let t=Object.getPrototypeOf(e),r=Object.getOwnPropertyDescriptors(e),o=Object.create(t);for(let e in r)Object.defineProperty(o,e,r[e]);let i=this;return new Proxy(o,{get:(e,t,r)=>(i.#r(t),Reflect.get(e,t,r)),has:(e,t)=>(i.#r(t),t in e),ownKeys:e=>(i.#t.get(),Reflect.ownKeys(e)),set(e,t,r,o){let a=Reflect.set(e,t,r,o);return i.#o(t),i.#n(),a},deleteProperty:(e,t)=>(t in e&&(delete e[t],i.#o(t),i.#n()),!0),getPrototypeOf:()=>SignalObjectImpl.prototype})}#r(e){let t=this.#e.get(e);void 0===t&&(t=om(),this.#e.set(e,t)),t.get()}#o(e){let t=this.#e.get(e);t&&t.set(null)}#n(){this.#t.set(null)}};function ob(e,t){return(r,o,i)=>{if(i.get&&i.set){let o=new oD.State(e);return{get:function(){return o.get()},set:function(e){o.set(e),t?.afterChange?.(r,e)}}}throw Error("@signal can only be used on accessors or getters")}}let ov=(e,t)=>(r,o,i)=>{if(i.get&&i.set){let o=new SignalObjectImpl(e);return{get:function(){return o},set:function(e){Object.entries(e).forEach(([e,t])=>{o[e]=t}),t?.afterChange?.(r,e)}}}throw Error("@signal can only be used on accessors or getters")};var oy=Object.defineProperty,ow=Object.getOwnPropertyDescriptor,oS=e=>{throw TypeError(e)},ox=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?ow(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&oy(t,r,a),a},oC=(e,t,r)=>t.has(e)||oS("Cannot "+r),ok=(e,t,r)=>(oC(e,t,"read from private field"),r?r.call(e):t.get(e)),o_=(e,t,r)=>t.has(e)?oS("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),oR=(e,t,r,o)=>(oC(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r);let GraphStateProvider=class GraphStateProvider{constructor(e,t,r,o,i={}){this._ipc=r,this._logger=o,this.options=i,o_(this,oA),o_(this,oL),o_(this,oN,!1),o_(this,oH,!1),o_(this,oB),o_(this,oW),o_(this,oF,!1),o_(this,oG),o_(this,oj),o_(this,oU),o_(this,oV),o_(this,oq),o_(this,oZ),o_(this,oK),o_(this,oY),o_(this,oQ),o_(this,oX),o_(this,oJ),o_(this,o0),o_(this,o1),o_(this,o2),o_(this,o5,!1),o_(this,o3),o_(this,o6),o_(this,o4),o_(this,o8),o_(this,o7),o_(this,o9),o_(this,ne),o_(this,nt),o_(this,nr),o_(this,no),o_(this,nn),o_(this,ni),o_(this,na),o_(this,ns),o_(this,nl),o_(this,nc),o_(this,nu),o_(this,nh),o_(this,nd),this.fireProviderUpdate=e3(()=>this.provider.setValue(this,!0),100),this._state=t,this.provider=new context_provider_i(e,{context:"graph-state-context",initialValue:this}),this.updateState(t,!0),this.disposable=this._ipc.onReceiveMessage(e=>{let t=tM(),r={};switch(!0){case t1.is(e):this.updateState(e.params.state);break;case rl.is(e):this._state.lastFetched=e.params.lastFetched,this.updateState({lastFetched:e.params.lastFetched});break;case t8.is(e):this.updateState({avatars:e.params.avatars});break;case rc.is(e):this._state.featurePreview=e.params.featurePreview,this._state.allowed=e.params.allowed,this.updateState({featurePreview:e.params.featurePreview,allowed:e.params.allowed});break;case t7.is(e):this.updateState({branchState:e.params.branchState});break;case te.is(e):this.updateState({windowFocused:e.params.focused});break;case re.is(e):this.updateState({columns:e.params.columns,context:{...this._state.context,header:e.params.context,settings:e.params.settingsContext}});break;case rr.is(e):this.updateState({branchesVisibility:e.params.branchesVisibility,excludeRefs:e.params.excludeRefs,excludeTypes:e.params.excludeTypes,includeOnlyRefs:e.params.includeOnlyRefs});break;case t9.is(e):this.updateState({refsMetadata:e.params.metadata});break;case ro.is(e):{var o;let i;if(e.params.rows.length&&e.params.paging?.startingCursor!=null&&null!=this._state.rows){let r=this._state.rows,o=r[r.length-1]?.sha,a=r.length,s=e.params.rows.length;if(this._logger.log(t,`paging in ${s} rows into existing ${a} rows at ${e.params.paging.startingCursor} (last existing row: ${o})`),(i=[]).length=a+s,e.params.paging.startingCursor!==o){let o;this._logger.log(t,`searching for ${e.params.paging.startingCursor} in existing rows`);let c=0;for(o of r)if(i[c++]=o,o.sha===e.params.paging.startingCursor){this._logger.log(t,`found ${e.params.paging.startingCursor} in existing rows`),(a=c)!==r.length&&(i.length=a+s);break}}else for(let e=0;e<a;e++)i[e]=r[e];for(let t=0;t<s;t++)i[a+t]=e.params.rows[t]}else this._logger.log(t,`setting to ${e.params.rows.length} rows`),i=0===e.params.rows.length?this._state.rows:e.params.rows;r.avatars=e.params.avatars,r.downstreams=e.params.downstreams,void 0!==e.params.refsMetadata&&(r.refsMetadata=e.params.refsMetadata),r.rows=i,r.paging=e.params.paging,null!=e.params.rowsStats&&(r.rowsStats={...this._state.rowsStats,...e.params.rowsStats}),r.rowsStatsLoading=e.params.rowsStatsLoading,null!=e.params.searchResults&&(r.searchResults=e.params.searchResults),null!=e.params.selectedRows&&(r.selectedRows=e.params.selectedRows),r.loading=!1,this.updateState(r),o=` \u2022 rows=${this._state.rows?.length??0}`,null!=t&&(t.exitDetails=o);break}case rn.is(e):this.updateState({rowsStats:{...this._state.rowsStats,...e.params.rowsStats},rowsStatsLoading:e.params.rowsStatsLoading});break;case rt.is(e):this.updateState({context:{...this._state.context,settings:e.params.context}});break;case rs.is(e):null!=e.params.selectedRows&&(r.selectedRows=e.params.selectedRows),r.searchResults=e.params.results,this.updateState(r);break;case ri.is(e):this.updateState({selectedRows:e.params.selection});break;case t3.is(e):this.updateState({config:e.params.config});break;case t6.is(e):this.updateState({subscription:e.params.subscription,allowed:e.params.allowed});break;case t4.is(e):this.updateState({orgSettings:e.params.orgSettings});break;case ra.is(e):this.updateState({workingTreeStats:e.params.stats});break;case t0.is(e):this.updateState({repositories:e.params.repositories})}})}get state(){return this._state}get webviewId(){return this._state.webviewId}get webviewInstanceId(){return this._state.webviewInstanceId}get timestamp(){return this._state.timestamp}get activeDay(){return ok(this,oA)}set activeDay(e){oR(this,oA,e)}get activeRow(){return ok(this,oL)}set activeRow(e){oR(this,oL,e)}get loading(){return ok(this,oN)}set loading(e){oR(this,oN,e)}get searching(){return ok(this,oH)}set searching(e){oR(this,oH,e)}get visibleDays(){return ok(this,oB)}set visibleDays(e){oR(this,oB,e)}get filter(){return ok(this,oW)}set filter(e){oR(this,oW,e)}get searchResultsHidden(){return ok(this,oF)}set searchResultsHidden(e){oR(this,oF,e)}get searchResultsResponse(){return ok(this,oG)}set searchResultsResponse(e){oR(this,oG,e)}get searchResults(){return ok(this,oj)}set searchResults(e){oR(this,oj,e)}get searchResultsError(){return ok(this,oU)}set searchResultsError(e){oR(this,oU,e)}get selectedRows(){return ok(this,oV)}set selectedRows(e){oR(this,oV,e)}get windowFocused(){return ok(this,oq)}set windowFocused(e){oR(this,oq,e)}get webroot(){return ok(this,oZ)}set webroot(e){oR(this,oZ,e)}get repositories(){return ok(this,oK)}set repositories(e){oR(this,oK,e)}get selectedRepository(){return ok(this,oY)}set selectedRepository(e){oR(this,oY,e)}get selectedRepositoryVisibility(){return ok(this,oQ)}set selectedRepositoryVisibility(e){oR(this,oQ,e)}get branchesVisibility(){return ok(this,oX)}set branchesVisibility(e){oR(this,oX,e)}get branch(){return ok(this,oJ)}set branch(e){oR(this,oJ,e)}get branchState(){return ok(this,o0)}set branchState(e){oR(this,o0,e)}get lastFetched(){return ok(this,o1)}set lastFetched(e){oR(this,o1,e)}get subscription(){return ok(this,o2)}set subscription(e){oR(this,o2,e)}get allowed(){return ok(this,o5)}set allowed(e){oR(this,o5,e)}get avatars(){return ok(this,o3)}set avatars(e){oR(this,o3,e)}get refsMetadata(){return ok(this,o6)}set refsMetadata(e){oR(this,o6,e)}get rows(){return ok(this,o4)}set rows(e){oR(this,o4,e)}get rowsStats(){return ok(this,o8)}set rowsStats(e){oR(this,o8,e)}get rowsStatsLoading(){return ok(this,o7)}set rowsStatsLoading(e){oR(this,o7,e)}get downstreams(){return ok(this,o9)}set downstreams(e){oR(this,o9,e)}get paging(){return ok(this,ne)}set paging(e){oR(this,ne,e)}get columns(){return ok(this,nt)}set columns(e){oR(this,nt,e)}get config(){return ok(this,nr)}set config(e){oR(this,nr,e)}get context(){return ok(this,no)}set context(e){oR(this,no,e)}get nonce(){return ok(this,nn)}set nonce(e){oR(this,nn,e)}get workingTreeStats(){return ok(this,ni)}set workingTreeStats(e){oR(this,ni,e)}get defaultSearchMode(){return ok(this,na)}set defaultSearchMode(e){oR(this,na,e)}get useNaturalLanguageSearch(){return ok(this,ns)}set useNaturalLanguageSearch(e){oR(this,ns,e)}get excludeRefs(){return ok(this,nl)}set excludeRefs(e){oR(this,nl,e)}get excludeTypes(){return ok(this,nc)}set excludeTypes(e){oR(this,nc,e)}get includeOnlyRefs(){return ok(this,nu)}set includeOnlyRefs(e){oR(this,nu,e)}get featurePreview(){return ok(this,nh)}set featurePreview(e){oR(this,nh,e)}get orgSettings(){return ok(this,nd)}set orgSettings(e){oR(this,nd,e)}get isBusy(){return this.loading||this.searching||this.rowsStatsLoading||!1}updateState(e,t){for(let t in e){let r=e[t];if(this._state[t]=r,!["timestamp","webviewId","webviewInstanceId"].includes(t))switch(t){case"allowed":this.allowed=e.allowed??!1;break;case"loading":this.loading=e.loading??!1;break;default:this[t]=r}}t||(this.options.onStateUpdate?.(e),this.fireProviderUpdate())}dispose(){this.disposable.dispose()}};oA=new WeakMap,oL=new WeakMap,oN=new WeakMap,oH=new WeakMap,oB=new WeakMap,oW=new WeakMap,oF=new WeakMap,oG=new WeakMap,oj=new WeakMap,oU=new WeakMap,oV=new WeakMap,oq=new WeakMap,oZ=new WeakMap,oK=new WeakMap,oY=new WeakMap,oQ=new WeakMap,oX=new WeakMap,oJ=new WeakMap,o0=new WeakMap,o1=new WeakMap,o2=new WeakMap,o5=new WeakMap,o3=new WeakMap,o6=new WeakMap,o4=new WeakMap,o8=new WeakMap,o7=new WeakMap,o9=new WeakMap,ne=new WeakMap,nt=new WeakMap,nr=new WeakMap,no=new WeakMap,nn=new WeakMap,ni=new WeakMap,na=new WeakMap,ns=new WeakMap,nl=new WeakMap,nc=new WeakMap,nu=new WeakMap,nh=new WeakMap,nd=new WeakMap,ox([ob()],GraphStateProvider.prototype,"activeDay",1),ox([ob()],GraphStateProvider.prototype,"activeRow",1),ox([ob(!1)],GraphStateProvider.prototype,"loading",1),ox([ob(!1)],GraphStateProvider.prototype,"searching",1),ox([ov()],GraphStateProvider.prototype,"visibleDays",1),ox([ov({query:""},{afterChange:e=>{e.searchResultsHidden=!1}})],GraphStateProvider.prototype,"filter",1),ox([ob(!1)],GraphStateProvider.prototype,"searchResultsHidden",1),ox([ob(void 0,{afterChange:(e,t)=>{let r,o,{results:i,resultsError:a}=(null!=t&&("error"in t?o=t:r=t),{results:r,resultsError:o});e.searchResults=i,e.searchResultsError=a}})],GraphStateProvider.prototype,"searchResultsResponse",1),ox([ob()],GraphStateProvider.prototype,"searchResults",1),ox([ob()],GraphStateProvider.prototype,"searchResultsError",1),ox([ob()],GraphStateProvider.prototype,"selectedRows",1),ox([ob()],GraphStateProvider.prototype,"windowFocused",1),ox([ob()],GraphStateProvider.prototype,"webroot",1),ox([ob()],GraphStateProvider.prototype,"repositories",1),ox([ob()],GraphStateProvider.prototype,"selectedRepository",1),ox([ob()],GraphStateProvider.prototype,"selectedRepositoryVisibility",1),ox([ob()],GraphStateProvider.prototype,"branchesVisibility",1),ox([ob()],GraphStateProvider.prototype,"branch",1),ox([ob()],GraphStateProvider.prototype,"branchState",1),ox([ob()],GraphStateProvider.prototype,"lastFetched",1),ox([ob()],GraphStateProvider.prototype,"subscription",1),ox([ob()],GraphStateProvider.prototype,"allowed",1),ox([ob()],GraphStateProvider.prototype,"avatars",1),ox([ob()],GraphStateProvider.prototype,"refsMetadata",1),ox([ob()],GraphStateProvider.prototype,"rows",1),ox([ob()],GraphStateProvider.prototype,"rowsStats",1),ox([ob()],GraphStateProvider.prototype,"rowsStatsLoading",1),ox([ob()],GraphStateProvider.prototype,"downstreams",1),ox([ob()],GraphStateProvider.prototype,"paging",1),ox([ob()],GraphStateProvider.prototype,"columns",1),ox([ob()],GraphStateProvider.prototype,"config",1),ox([ob()],GraphStateProvider.prototype,"context",1),ox([ob()],GraphStateProvider.prototype,"nonce",1),ox([ob()],GraphStateProvider.prototype,"workingTreeStats",1),ox([ob()],GraphStateProvider.prototype,"defaultSearchMode",1),ox([ob()],GraphStateProvider.prototype,"useNaturalLanguageSearch",1),ox([ob()],GraphStateProvider.prototype,"excludeRefs",1),ox([ob()],GraphStateProvider.prototype,"excludeTypes",1),ox([ob()],GraphStateProvider.prototype,"includeOnlyRefs",1),ox([ob()],GraphStateProvider.prototype,"featurePreview",1),ox([ob()],GraphStateProvider.prototype,"orgSettings",1);var oT,oE,oM,oO,o$,oI,oz,oP,oD,oA,oL,oN,oH,oB,oW,oF,oG,oj,oU,oV,oq,oZ,oK,oY,oQ,oX,oJ,o0,o1,o2,o5,o3,o6,o4,o8,o7,o9,ne,nt,nr,no,nn,ni,na,ns,nl,nc,nu,nh,nd,np,nf,ng,nm,nb,nv,ny,nw,nS,nx,nC,nk,n_,nR,nT,nE,nM,nO,n$,nI,nz,nP,nD,nA,nL,nN,nH,nB,nW,nF,nG,nj,nU,nV,nq=S(8975),nZ=S(6723),nK={15:e=>{e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},46:(e,t,r)=>{var o=r(47),i=r(371),a=r.g.document,s=function(e,t,r,o){return e.addEventListener(t,r,o)},c=function(e,t,r,o){return e.removeEventListener(t,r,o)},u=[];function h(e,t,r){var o=function(e,t,r){var o,i;for(o=0;o<u.length;o++)if((i=u[o]).element===e&&i.type===t&&i.fn===r)return o}(e,t,r);if(o){var i=u[o].wrapper;return u.splice(o,1),i}}r.g.addEventListener||(s=function(e,t,o){var i;return e.attachEvent("on"+t,(i=h(e,t,o)||function(t){var i=t||r.g.event;i.target=i.target||i.srcElement,i.preventDefault=i.preventDefault||function(){i.returnValue=!1},i.stopPropagation=i.stopPropagation||function(){i.cancelBubble=!0},i.which=i.which||i.keyCode,o.call(e,i)},u.push({wrapper:i,element:e,type:t,fn:o}),i))},c=function(e,t,r){var o=h(e,t,r);if(o)return e.detachEvent("on"+t,o)}),e.exports={add:s,remove:c,fabricate:function(e,t,r){var s,c=-1===i.indexOf(t)?new o(t,{detail:r}):(a.createEvent?(s=a.createEvent("Event")).initEvent(t,!0,!0):a.createEventObject&&(s=a.createEventObject()),s);e.dispatchEvent?e.dispatchEvent(c):e.fireEvent("on"+t,c)}}},47:(e,t,r)=>{var o=r.g.CustomEvent;e.exports=!function(){try{var e=new o("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch{}return!1}()?"function"==typeof document.createEvent?function(e,t){var r=document.createEvent("CustomEvent");return t?r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):r.initCustomEvent(e,!1,!1,void 0),r}:function(e,t){var r=document.createEventObject();return r.type=e,t?(r.bubbles=!!t.bubbles,r.cancelable=!!t.cancelable,r.detail=t.detail):(r.bubbles=!1,r.cancelable=!1,r.detail=void 0),r}:o},130:(e,t,r)=>{var o=r(15),i=r(801);e.exports=function(e,t){var r=t||{},a={};return void 0===e&&(e={}),e.on=function(t,r){return a[t]?a[t].push(r):a[t]=[r],e},e.once=function(t,r){return r._once=!0,e.on(t,r),e},e.off=function(t,r){var o=arguments.length;if(1===o)delete a[t];else if(0===o)a={};else{var i=a[t];if(!i)return e;i.splice(i.indexOf(r),1)}return e},e.emit=function(){var t=o(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var s=(a[t]||[]).slice(0);return function(){var a=o(arguments),c=this||e;if("error"===t&&!1!==r.throws&&!s.length)throw 1===a.length?a[0]:a;return s.forEach(function(o){r.async?i(o,a,c):o.apply(c,a),o._once&&e.off(t,o)}),e}},e}},218:()=>{},280:()=>{},310:()=>{},311:e=>{e.exports=function(e,t,r,o,i,a,s,c){if(!e){var u;if(void 0===t)u=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[r,o,i,a,s,c],d=0;(u=Error(t.replace(/%s/g,function(){return h[d++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},366:()=>{},371:(e,t,r)=>{var o=[],i="",a=/^on/;for(i in r.g)a.test(i)&&o.push(i.slice(2));e.exports=o},394:e=>{e.exports="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},427:(e,t,r)=>{var o=r(130),i=r(46),a=r(541),s=document,c=s.documentElement;function u(e,t,o,a){r.g.navigator.pointerEnabled?i[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[o],a):r.g.navigator.msPointerEnabled?i[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[o],a):(i[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[o],a),i[t](e,o,a))}function h(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;if(void 0!==t)return 1&t?1:2&t?3:4&t?2:0}function d(e,t){return void 0!==r.g[t]?r.g[t]:c.clientHeight?c[e]:s.body[e]}function p(e,t,r){var o,i=e||{},a=i.className;return i.className+=" gu-hide",o=s.elementFromPoint(t,r),i.className=a,o}function f(){return!1}function g(){return!0}function m(e){return e.width||e.right-e.left}function b(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===s?null:e.parentNode}function w(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){return!!t&&"false"!==t.contentEditable&&("true"===t.contentEditable||e(v(t)))}(e)}function S(e){return e.nextElementSibling||function(){var t=e;do t=t.nextSibling;while(t&&1!==t.nodeType)return t}()}function x(e,t){var r=t.targetTouches&&t.targetTouches.length?t.targetTouches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,o={pageX:"clientX",pageY:"clientY"};return e in o&&!(e in r)&&o[e]in r&&(e=o[e]),r[e]}e.exports=function(e,t){var r,C,_,T,E,O,$,P,D,A,B,W,F=arguments.length;1===F&&!1===Array.isArray(e)&&(t=e,e=[]);var G=null,j=t||{};void 0===j.moves&&(j.moves=g),void 0===j.accepts&&(j.accepts=g),void 0===j.invalid&&(j.invalid=function(){return!1}),void 0===j.containers&&(j.containers=e||[]),void 0===j.isContainer&&(j.isContainer=f),void 0===j.copy&&(j.copy=!1),void 0===j.copySortSource&&(j.copySortSource=!1),void 0===j.revertOnSpill&&(j.revertOnSpill=!1),void 0===j.removeOnSpill&&(j.removeOnSpill=!1),void 0===j.direction&&(j.direction="vertical"),void 0===j.ignoreInputTextSelection&&(j.ignoreInputTextSelection=!0),void 0===j.mirrorContainer&&(j.mirrorContainer=s.body);var U=o({containers:j.containers,start:function(e){var t=et(e);t&&er(t)},end:en,cancel:ec,remove:el,destroy:function(){Z(!0),ea({})},canMove:function(e){return!!et(e)},dragging:!1});return!0===j.removeOnSpill&&U.on("over",function(e){a.rm(e,"gu-hide")}).on("out",function(e){U.dragging&&a.add(e,"gu-hide")}),Z(),U;function V(e){return -1!==U.containers.indexOf(e)||j.isContainer(e)}function Z(e){var t=e?"remove":"add";u(c,t,"mousedown",J),u(c,t,"mouseup",ea)}function K(e){u(c,e?"remove":"add","mousemove",ee)}function Q(e){var t=e?"remove":"add";i[t](c,"selectstart",X),i[t](c,"click",X)}function X(e){W&&e.preventDefault()}function J(e){if(O=e.clientX,$=e.clientY,1===h(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,r=et(t);r&&(W=r,K(),"mousedown"===e.type&&(w(t)?t.focus():e.preventDefault()))}}function ee(e){if(W){if(0===h(e))return void ea({});if(void 0===e.clientX||e.clientX!==O||void 0===e.clientY||e.clientY!==$){if(j.ignoreInputTextSelection){var t,o=x("clientX",e),i=x("clientY",e);if(w(s.elementFromPoint(o,i)))return}var p=W;K(!0),Q(),en(),er(p);var f={left:(t=_.getBoundingClientRect()).left+d("scrollLeft","pageXOffset"),top:t.top+d("scrollTop","pageYOffset")};T=x("pageX",e)-f.left,E=x("pageY",e)-f.top,a.add(A||_,"gu-transit"),function(){if(!r){var e=_.getBoundingClientRect();(r=_.cloneNode(!0)).style.width=m(e)+"px",r.style.height=b(e)+"px",a.rm(r,"gu-transit"),a.add(r,"gu-mirror"),j.mirrorContainer.appendChild(r),u(c,"add","mousemove",ep),a.add(j.mirrorContainer,"gu-unselectable"),U.emit("cloned",r,_,"mirror")}}(),ep(e)}}}function et(e){if(!(U.dragging&&r||V(e))){for(var t=e;v(e)&&!1===V(v(e));)if(j.invalid(e,t)||!(e=v(e)))return;var o=v(e);if(!(!o||j.invalid(e,t))&&j.moves(e,o,t,S(e)))return{item:e,source:o}}}function er(e){var t,r;t=e.item,r=e.source,("boolean"==typeof j.copy?j.copy:j.copy(t,r))&&(A=e.item.cloneNode(!0),U.emit("cloned",A,e.item,"copy")),C=e.source,_=e.item,P=D=S(e.item),U.dragging=!0,U.emit("drag",_,C)}function en(){if(U.dragging){var e=A||_;es(e,v(e))}}function ei(){W=!1,K(!0),Q(!0)}function ea(e){if(ei(),U.dragging){var t=A||_,o=x("clientX",e),i=x("clientY",e),a=ed(p(r,o,i),o,i);a&&(A&&j.copySortSource||!A||a!==C)?es(t,a):j.removeOnSpill?el():ec()}}function es(e,t){var r=v(e);A&&j.copySortSource&&t===C&&r.removeChild(_),eh(t)?U.emit("cancel",e,C,C):U.emit("drop",e,t,C,D),eu()}function el(){if(U.dragging){var e=A||_,t=v(e);t&&t.removeChild(e),U.emit(A?"cancel":"remove",e,t,C),eu()}}function ec(e){if(U.dragging){var t=arguments.length>0?e:j.revertOnSpill,r=A||_,o=v(r),i=eh(o);!1===i&&t&&(A?o&&o.removeChild(A):C.insertBefore(r,P)),i||t?U.emit("cancel",r,C,C):U.emit("drop",r,o,C,D),eu()}}function eu(){var e=A||_;ei(),r&&(a.rm(j.mirrorContainer,"gu-unselectable"),u(c,"remove","mousemove",ep),v(r).removeChild(r),r=null),e&&a.rm(e,"gu-transit"),B&&clearTimeout(B),U.dragging=!1,G&&U.emit("out",e,G,C),U.emit("dragend",e),C=_=A=P=D=B=G=null}function eh(e,t){var o;return o=void 0!==t?t:r?D:S(A||_),e===C&&o===P}function ed(e,t,r){for(var o=e;o&&!function(){if(!1===V(o))return!1;var i=ef(o,e),a=eg(o,i,t,r);return!!eh(o,a)||j.accepts(_,o,C,a)}();)o=v(o);return o}function ep(e){if(r){e.preventDefault();var t,o=x("clientX",e),i=x("clientY",e),a=o-T,s=i-E;r.style.left=a+"px",r.style.top=s+"px";var c=A||_,u=p(r,o,i),h=ed(u,o,i),d=null!==h&&h!==G;(d||null===h)&&(G&&m("out"),G=h,d&&m("over"));var f=v(c);if(h===C&&A&&!j.copySortSource){f&&f.removeChild(c);return}var g=ef(h,u);if(null!==g)t=eg(h,g,o,i);else if(!0!==j.revertOnSpill||A){A&&f&&f.removeChild(c);return}else t=P,h=C;(null===t&&d||t!==c&&t!==S(c))&&(D=t,h.insertBefore(c,t),U.emit("shadow",c,h,C))}function m(e){U.emit(e,c,G,C)}}function ef(e,t){for(var r=t;r!==e&&v(r)!==e;)r=v(r);return r===c?null:r}function eg(e,t,r,o){var i,a="horizontal"===j.direction;return t!==e?(i=t.getBoundingClientRect(),a?r>i.left+m(i)/2?S(t):t:o>i.top+b(i)/2?S(t):t):function(){var t,i,s,c=e.children.length;for(t=0;t<c;t++)if(s=(i=e.children[t]).getBoundingClientRect(),a&&s.left+s.width/2>r||!a&&s.top+s.height/2>o)return i;return null}()}}},456:()=>{},541:e=>{var t={};function r(e){var r=t[e];return r?r.lastIndex=0:t[e]=r=RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),r}e.exports={add:function(e,t){var o=e.className;o.length?r(t).test(o)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(r(t)," ").trim()}}},547:(e,t,r)=>{var o=r(427),i=r(15);e.exports=function(){return o.apply(this,i(arguments)).on("cloned",function(t){e(t),i(t.getElementsByTagName("*")).forEach(e)});function e(e){e.removeAttribute("data-reactid")}}},556:(e,t,r)=>{e.exports=r(694)()},666:()=>{},694:(e,t,r)=>{var o=r(925);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,a,s){if(s!==o){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return r.PropTypes=r,r}},698:(e,t)=>{var r=Symbol.for("react.transitional.element");function o(e,t,o){var i=null;if(void 0!==o&&(i=""+o),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in o={},t)"key"!==a&&(o[a]=t[a]);else o=t;return{$$typeof:r,type:e,key:i,ref:void 0!==(t=o.ref)?t:null,props:o}}t.Fragment=Symbol.for("react.fragment"),t.jsx=o,t.jsxs=o},771:e=>{e.exports=function(){}},801:(e,t,r)=>{var o=r(394);e.exports=function(e,t,r){e&&o(function(){e.apply(r||null,t||[])})}},848:(e,t,r)=>{e.exports=r(698)},925:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},942:(e,t)=>{var r,o={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)o.call(e,r)&&e[r]&&(t=a(t,r));return t}(r)))}return e}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(r=(function(){return i}).apply(t,[]))||(e.exports=r)}},nY={};function nQ(e){var t=nY[e];if(void 0!==t)return t.exports;var r=nY[e]={exports:{}};return nK[e](r,r.exports,nQ),r.exports}nQ.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return nQ.d(t,{a:t}),t},nQ.d=(e,t)=>{for(var r in t)nQ.o(t,r)&&!nQ.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},nQ.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch{if("object"==typeof window)return window}}(),nQ.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),nQ.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var nX={};nQ.r(nX),nQ.d(nX,{g:()=>hk});var nJ=nQ(942),n0=nQ.n(nJ);let n1=(np={Children:()=>nq.Children,Component:()=>nq.Component,PureComponent:()=>nq.PureComponent,cloneElement:()=>nq.cloneElement,createContext:()=>nq.createContext,createElement:()=>nq.createElement,createRef:()=>nq.createRef,default:()=>nq,forwardRef:()=>nq.forwardRef,memo:()=>nq.memo,useCallback:()=>nq.useCallback,useContext:()=>nq.useContext,useEffect:()=>nq.useEffect,useLayoutEffect:()=>nq.useLayoutEffect,useMemo:()=>nq.useMemo,useRef:()=>nq.useRef,useState:()=>nq.useState,version:()=>nq.version},nf={},nQ.d(nf,np),nf);let Y=class Y{name;notify;constructor(e,t){this.name=e,this.notify=t}};let q=class q{observer;unsubscribeCallback;constructor(e,t){this.observer=e,this.unsubscribeCallback=t}unsubscribe(){this.unsubscribeCallback(this.observer)}};let n2=new class{observers;constructor(){this.observers=new Set}broadcast(e){this.observers&&this.observers.forEach(t=>{e.name===t.name&&t.notify(e)})}subscribe(e,t){let r=new Y(e,t);return this.observers.add(r),new q(r,e=>{this.observers.delete(e)})}unsubscribe(e){e&&e.unsubscribe()}},n5="ON_DRAG_START",n3="ON_DRAG_END",n6=null,n4=new Map;let eo=class eo extends n1.default.Component{dndComponentRef=n1.default.createRef();mounted=!1;onDragStartSubscription;onDragEndSubscription;constructor(e){super(e),this.onDragStartSubscription=n2.subscribe(n5,e=>{let t=null!==e.content&&n4.get(e.content);this.setState({isDroppable:this.canDrop(void 0,t,this.props.dndData)})}),this.onDragEndSubscription=n2.subscribe(n3,()=>{this.mounted&&this.setState({isDroppable:!1})}),this.state={isDragging:!1,isDroppable:!1,isOver:!1}}componentDidMount(){if(this.mounted=!0,null!==n6){let e=n4.get(n6);this.setState({isDroppable:this.canDrop(void 0,e,this.props.dndData)})}}componentWillUnmount(){this.mounted=!1,this.onDragStartSubscription.unsubscribe(),this.onDragEndSubscription.unsubscribe()}canDrop(e,t,r){let{canDrop:o}=this.props;return o&&("boolean"==typeof o||o(e,t,r))}addDragEndEventListenerOnce(){let e=this.dndComponentRef?.current;e&&(e.removeEventListener("dragend",this.onDragEnd),e.addEventListener("dragend",this.onDragEnd,{once:!0}))}isDraggable(){let{canDrag:e,dndData:t}=this.props;return!!e&&("boolean"==typeof e||e(t))}onDragEnter(e){if(e.stopPropagation(),this.setState({isOver:!0}),this.props.onDragEnter){let t=n4.get(n6);this.props.onDragEnter(e,t,this.props.dndData)}}onDragLeave(e){e.stopPropagation();let t=n4.get(n6);this.props.onDragLeave&&this.props.onDragLeave(e,t,this.props.dndData),this.setState({isDroppable:this.canDrop(void 0,t,this.props.dndData),isOver:!1})}onDrag(e){e.stopPropagation()}onDragOver(e){e.stopPropagation();let t=n4.get(n6);this.canDrop(e,t,this.props.dndData)&&(e.preventDefault(),this.setState({isOver:!0}))}onDragStart(e){e.stopPropagation();let{dndData:t,dndId:r,onBeginDrag:o}=this.props;n6=r,n4.set(n6,t),this.addDragEndEventListenerOnce(),n2.broadcast({name:n5,content:n6}),o&&o(e,t),this.setState({isDragging:!0})}onDragEnd=e=>{e.stopPropagation();let{dndData:t,onEndDrag:r}=this.props;r&&r(e,n4.get(n6),t),n2.broadcast({name:n3,content:n6}),n4.delete(n6),n6=null,this.mounted&&this.setState({isDragging:!1})};onDrop(e){e.stopPropagation();let{dndData:t,onDrop:r}=this.props;r&&(r(e,n4.get(n6),t),this.setState({isOver:!1}))}cloneChildrenWithShallowMergedProps(e,t){if(e)return n1.default.Children.map(e,e=>n1.default.isValidElement(e)?n1.default.cloneElement(e,t):e)}render(){let{children:e,className:t,forwardDndPropsToChildren:r,style:o}=this.props,{isDragging:i,isDroppable:a,isOver:s}=this.state,c=this.isDraggable(),u=n0()("dnd-component",t,{draggable:c,dragging:i,droppable:a,hovering:s});return n1.default.createElement("div",{className:u,draggable:c,onDrag:e=>this.onDrag(e),onDragEnter:e=>this.onDragEnter(e),onDragLeave:e=>this.onDragLeave(e),onDragOver:e=>this.onDragOver(e),onDragStart:e=>this.onDragStart(e),onDrop:e=>this.onDrop(e),ref:this.dndComponentRef,style:o},r?this.cloneChildrenWithShallowMergedProps(e,{isDraggable:c,isDragging:i,isDroppable:a,isOver:s}):e)}};function n8(e,t,r){return(e=e<=r?e:r)>=t?e:t}let n7="commit-node",n9="merge-conflict-node",ie="merge-node",it="unsupported-rebase-warning-node",ir="stash-node",io="work-dir-changes";var ii=((ng=ii||{}).RowEntry="rowEntry",ng.Tooltip="tooltip",ng);let ia={"--graph-row-height":"22px","--font-default":"'Open Sans', Arial, sans-serif !important","--font-monospace":"'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace","--font-size":"62.5%","--fs-1":"1rem","--fs-2":"1.2rem","--fs-3":"1.4rem","--fs-4":"1.6rem","--fs-5":"1.8rem","--fs-6":"2rem","--fs-7":"2.4rem","--button-xs-padding-y":".15rem","--button-xs-padding-x":".25rem","--button-small-padding-y":".25rem","--button-small-padding-x":".5rem","--button-medium-padding-y":".5rem","--button-medium-padding-x":".75rem","--button-large-padding-y":"1rem","--button-large-padding-x":"1.25rem","--button-radius":".2rem","--input-radius":"3px","--about-modal-bg-color":"#e2e4e9","--about-modal-width":"650px","--label__purple-color-f25":"rgba(197,23,182,0.25)","--registration-modal-width":"400px","--file-history-header-height":"35px","--shop-modal-width":"95vw","--shop-modal-height":"95vh","--scrollable-scrollbar-thickness":"14px","--mini-commit-col-left-width":"30px","--mini-commit-col-middle-padding":"6px","--mini-commit-col-right-width":"56px","--fuzzy-finder-repo-color":"rgba(46,206,157,0.1)","--fuzzy-finder-checkout-color":"rgba(6,105,247,0.1)","--fuzzy-finder-history-color":"rgba(197,23,182,0.1)","--handle-width":"7px","--shadow-color":"rgba(0,0,0,0.4)","--graph-color-5-f10":"rgba(205,1,1,0.1)","--graph-color-6-f10":"rgba(242,93,46,0.1)","--graph-color-7-f10":"rgba(242,202,51,0.1)","--graph-color-8-f10":"rgba(123,217,56,0.1)","--graph-color-9-f10":"rgba(46,206,157,0.1)","--graph-color-0-f10":"rgba(21,160,191,0.1)","--graph-color-1-f10":"rgba(6,105,247,0.1)","--graph-color-2-f10":"rgba(142,0,194,0.1)","--graph-color-3-f10":"rgba(197,23,182,0.1)","--graph-color-4-f10":"rgba(217,1,113,0.1)","--graph-color-5-f50":"rgba(205,1,1,0.5)","--graph-color-6-f50":"rgba(242,93,46,0.5)","--graph-color-7-f50":"rgba(242,202,51,0.5)","--graph-color-8-f50":"rgba(123,217,56,0.5)","--graph-color-9-f50":"rgba(46,206,157,0.5)","--graph-color-0-f50":"rgba(21,160,191,0.5)","--graph-color-1-f50":"rgba(6,105,247,0.5)","--graph-color-2-f50":"rgba(142,0,194,0.5)","--graph-color-3-f50":"rgba(197,23,182,0.5)","--graph-color-4-f50":"rgba(217,1,113,0.5)","--axo-orange":"#e75225","--axo-ink":"#141422","--axo-cream":"#f9efc1","--axo-yellow":"#d8c13a","--info-bar-height":"26px","--left-panel-header-height":"60px","--toolbar-height":"48px","--toolbar-border":"1px","--toolbar-item-height":"calc(var(--toolbar-height, 0px) - var(--toolbar-border, 1px))","--expand-detail-panel-transition":"flex-grow 250ms ease-in-out","--conflict-left-color":"rgba(21,160,191,0.25)","--conflict-right-color":"rgba(242,202,51,0.25)","--conflict-output-color":"rgba(197,23,182,0.25)","--graph-color-5-bg50":"#751012","--graph-color-6-bg50":"#873e29","--graph-color-7-bg50":"#87742b","--graph-color-8-bg50":"#4c7c2e","--graph-color-9-bg50":"#257660","--graph-color-0-bg50":"#195f71","--graph-color-1-bg50":"#11448d","--graph-color-2-bg50":"#550f73","--graph-color-3-bg50":"#711b6d","--graph-color-4-bg50":"#7b104a","--graph-color-5-bg45":"#6c1114","--graph-color-6-bg45":"#7c3a28","--graph-color-7-bg45":"#7c6b2a","--graph-color-8-bg45":"#47722c","--graph-color-9-bg45":"#246d5a","--graph-color-0-bg45":"#195969","--graph-color-1-bg45":"#124082","--graph-color-2-bg45":"#4f116b","--graph-color-3-bg45":"#681b65","--graph-color-4-bg45":"#711146","--graph-color-5-bg25":"#48171b","--graph-color-6-bg25":"#522e26","--graph-color-7-bg25":"#524927","--graph-color-8-bg25":"#344d28","--graph-color-9-bg25":"#214a42","--graph-color-0-bg25":"#1a3f4a","--graph-color-1-bg25":"#173158","--graph-color-2-bg25":"#39174b","--graph-color-3-bg25":"#461c48","--graph-color-4-bg25":"#4b1737","--graph-color-5-bg15":"#371a1e","--graph-color-6-bg15":"#3c2725","--graph-color-7-bg15":"#3c3825","--graph-color-8-bg15":"#2a3a26","--graph-color-9-bg15":"#1f3835","--graph-color-0-bg15":"#1b323a","--graph-color-1-bg15":"#192943","--graph-color-2-bg15":"#2d1a3b","--graph-color-3-bg15":"#351d39","--graph-color-4-bg15":"#381a2f","--semi-bold":"500","--bold":"600","--num-columns-supported":"10","--column-0-color":"#15a0bf","--column-1-color":"#0669f7","--column-2-color":"#8e00c2","--column-3-color":"#c517b6","--column-4-color":"#d90171","--column-5-color":"#cd0101","--column-6-color":"#f25d2e","--column-7-color":"#f2ca33","--column-8-color":"#7bd938","--column-9-color":"#2ece9d","--red":"#D9413D","--orange":"#DE9B43","--yellow":"#ECB91C","--green":"#5CB85C","--blue":"#4D88FF","--ltblue":"#5bc0de","--app__bg0":"#1C1E23","--toolbar__bg0":"rgb(42,45,52)","--toolbar__bg1":"rgb(51,55,63)","--toolbar__bg2":"rgb(65,70,80)","--panel__bg0":"rgb(39,42,49)","--panel__bg1":"rgb(50,54,63)","--panel__bg2":"rgb(61,66,77)","--input__bg":"rgba(0,0,0,0.2)","--input-bg-warn-color":"rgba(222,155,67,0.6)","--panel-border":"rgb(19,20,24)","--section-border":"rgba(255,255,255,0.08)","--subtle-border":"rgba(255,255,255,0.04)","--modal-overlay-color":"rgba(0,0,0,.5)","--graph-color-0":"#15a0bf","--graph-color-1":"#0669f7","--graph-color-2":"#8e00c2","--graph-color-3":"#c517b6","--graph-color-4":"#d90171","--graph-color-5":"#cd0101","--graph-color-6":"#f25d2e","--graph-color-7":"#f2ca33","--graph-color-8":"#7bd938","--graph-color-9":"#2ece9d","--text-selected":"#FFFFFF","--text-selected-row":"#FFFFFF","--text-dimmed":"rgba(255,255,255,0.2)","--text-dimmed-selected":"rgba(255,255,255,0.5)","--text-normal":"rgba(255,255,255,0.75)","--text-secondary":"rgba(255,255,255,0.6)","--text-disabled":"rgba(255,255,255,0.4)","--text-accent":"#93A9EC","--text-inverse":"#222222","--text-bright":"#FFFFFF","--btn-text":"rgba(255,255,255,0.75)","--btn-text-hover":"#FFFFFF","--default-border":"rgba(255,255,255,0.75)","--default-bg":"transparent","--default-hover":"transparent","--default-border-hover":"#FFFFFF","--primary-border":"#4D88FF","--primary-bg":"rgba(77,136,255,0.2)","--primary-hover":"rgba(77,136,255,0.6)","--success-border":"#5CB85C","--success-bg":"rgba(92,184,92,0.2)","--success-hover":"rgba(92,184,92,0.6)","--warning-border":"#DE9B43","--warning-bg":"rgba(222,155,67,0.2)","--warning-hover":"rgba(222,155,67,0.6)","--danger-border":"#D9413D","--danger-bg":"rgba(217,65,61,0.2)","--danger-hover":"rgba(217,65,61,0.6)","--hover-row":"rgba(77,136,255,0.1)","--hover-row-border":"none","--danger-row":"rgba(217,65,61,0.6)","--selected-row":"rgba(77,136,255,0.2)","--selected-row-border":"none","--warning-row":"rgba(222,155,67,0.6)","--droppable":"rgba(236,185,28,0.3)","--drop-target":"rgba(92,184,92,0.5)","--input--disabled":"rgba(0,0,0,0.1)","--link-color":"#40c5ec","--link-color-bright":"#40c5ec","--form-control-focus":"#4D88FF","--scroll-thumb-border":"#1C1E23","--scroll-thumb-bg":"rgb(65,70,80)","--scroll-thumb-bg-light":"rgb(111,119,136)","--wip-status":"rgba(77,136,255,0.4)","--card__bg":"rgb(61,66,77)","--card-shadow":"rgba(0,0,0,.2)","--statusbar__warning-bg":"#87742b","--label__yellow-color":"#f2ca33","--label__light-blue-color":"#15a0bf","--label__purple-color":"#c517b6","--filtering":"rgba(77,136,255,0.5)","--soloing":"rgba(222,155,67,0.5)","--checked-out":"rgba(92,184,92,0.3)","--soloed":"rgba(222,155,67,0.3)","--filter-match":"rgba(77,136,255,0.5)","--clone__progress":"rgba(77,136,255,0.7)","--toolbar__prompt":"rgba(77,136,255,0.2)","--verified":"rgba(92,184,92,0.3)","--unverified":"rgba(255,255,255,0.1)","--drop-sort-border":"#5CB85C","--terminal__repo-name-color":"turquoise","--terminal__repo-branch-color":"violet","--terminal__repo-tag-color":"lightcoral","--terminal__repo-upstream-color":"yellowgreen","--terminal__background":"#000000","--terminal__cursor":"#FFFFFF","--terminal__cursorAccent":"#000000","--terminal__foreground":"#FFFFFF","--terminal__selection":"#304676","--terminal__black":"#000000","--terminal__red":"#F24A4A","--terminal__green":"#0DBC79","--terminal__yellow":"#E5E510","--terminal__blue":"#4A98EE","--terminal__magenta":"#E063E0","--terminal__cyan":"#11A8CD","--terminal__white":"#E5E5E5","--terminal__brightBlack":"#686868","--terminal__brightRed":"#FF5656","--terminal__brightGreen":"#23D18B","--terminal__brightYellow":"#F5F543","--terminal__brightBlue":"#51A4FF","--terminal__brightMagenta":"#D670D6","--terminal__brightCyan":"#29B8DB","--terminal__brightWhite":"#E5E5E5","--code-bg":"#1C1E23","--code-foreground":"rgba(255,255,255,0.75)","--code-blame-color-0":"#15a0bf","--code-blame-color-1":"#0669f7","--code-blame-color-2":"#8e00c2","--code-blame-color-3":"#c517b6","--code-blame-color-4":"#d90171","--code-blame-color-5":"#cd0101","--code-blame-color-6":"#f25d2e","--code-blame-color-7":"#f2ca33","--code-blame-color-8":"#7bd938","--code-blame-color-9":"#2ece9d","--added-line":"rgba(92,184,92,0.2)","--deleted-line":"rgba(217,65,61,0.2)","--modified-line":"rgba(0,0,0,0.25)","--conflict-info-color":"#15a0bf","--conflict-left-border-color":"#15a0bf","--conflict-right-border-color":"#f2ca33","--conflict-output-border-color":"#c517b6","--scroll-marker-head-color":"#16c216","--scroll-marker-highlights-color":"#e6e62b","--scroll-marker-local-branches-color":"#ffa500","--scroll-marker-pull-requests-color":"#ff8f18","--scroll-marker-remote-branches-color":"#ffd68b","--scroll-marker-selection-color":"#0821ff","--scroll-marker-stashes-color":"#fb94ff","--scroll-marker-tags-color":"#affcff","--scroll-marker-upstream-color":"#9bff9b","--stats-added-color":"#347d39","--stats-deleted-color":"#c93c37","--stats-files-color":"#e2c08d","--stats-bar-border-radius":"3px","--stats-bar-height":"40%"};function is(e){return`--column-${e}-color`}function il(e={}){let t={};return Object.keys(e).forEach(r=>{r.includes("--graph-color-")||r.match(/^--column-\d+-color$/)?CSS.supports("color",e[r])&&(t[r]=e[r]):t[r]=e[r]}),function(e={}){return{...ia,...e}}(t)}let ic="head",iu="remote",ih="worktree";var id=((nm=id||{}).LEFT="LEFT",nm.RIGHT="RIGHT",nm);let ip="auto",ig="timelineMessage",im="graph",ib="message",iv="author",iy="datetime",iw="changes";var iS=((nb=iS||{}).Compact="compact",nb.Rich="rich",nb.Text="text",nb),ix=((nv=ix||{}).Block="block",nv.FullLine="fullLine",nv.ThinLine="thinLine",nv);let iC={block:{type:"block",baseHeight:28,minHeight:5,maxHeight:20},fullLine:{type:"fullLine",baseHeight:14,minHeight:2,maxHeight:4},thinLine:{type:"thinLine",baseHeight:7,minHeight:1,maxHeight:2}},ik={stashes:{type:"stashes",colorCssKey:"--color-graph-scroll-marker-stashes",lanes:[0],shape:"block"},tags:{type:"tags",colorCssKey:"--color-graph-scroll-marker-tags",lanes:[2],shape:"block"},remoteBranches:{type:"remoteBranches",colorCssKey:"--color-graph-scroll-marker-remote-branches",lanes:[2],shape:"block"},localBranches:{type:"localBranches",colorCssKey:"--color-graph-scroll-marker-local-branches",lanes:[0],shape:"block"},highlights:{type:"highlights",colorCssKey:"--color-graph-scroll-marker-highlights",lanes:[1],shape:"block"},upstream:{type:"upstream",colorCssKey:"--color-graph-scroll-marker-upstream",lanes:[1,2],shape:"block"},pullRequests:{type:"pullRequests",colorCssKey:"--color-graph-scroll-marker-pull-requests",lanes:[2],shape:"block"},head:{type:"head",colorCssKey:"--scroll-marker-head-color",lanes:[0,1],shape:"block"},selection:{type:"selection",colorCssKey:"--color-graph-scroll-marker-selection",lanes:[0,1,2],shape:"fullLine"}},i_=6,iR={[iv]:{headerLabelUntranslated:"GraphHeader-CommitAuthor",isCustomizable:!0,listId:"commit-author-zone",minimumWidth:32,showIconWidth:55},[iy]:{headerLabelUntranslated:"GraphHeader-CommitDateTime",isCustomizable:!0,listId:"commit-date-time-zone",minimumWidth:50,showIconWidth:55},[ib]:{headerLabelUntranslated:"GraphHeader-CommitMessage",isCustomizable:!0,listId:"commit-message-zone",minimumWidth:50,showIconWidth:55},sha:{headerLabelUntranslated:"GraphHeader-CommitSha",isCustomizable:!0,listId:"commit-sha-zone",minimumWidth:50,showIconWidth:50},[im]:{headerLabelUntranslated:"GraphHeader-CommitGraph",isCustomizable:!0,listId:"commit-zone",minimumWidth:56,showIconWidth:56},ref:{headerLabelUntranslated:"GraphHeader-BranchTag",isCustomizable:!0,listId:"ref-zone",minimumWidth:32,showIconWidth:55},[iw]:{headerLabelUntranslated:"GraphHeader-Changes",isCustomizable:!0,listId:"changes-zone",minimumWidth:50,showIconWidth:58}},iT={added:0,deleted:0,modified:0};var iE=((ny=iE||{}).ALWAYS="ALWAYS",ny.ON_HOVER="ON_HOVER",ny.NEVER="NEVER",ny);let iM="pullRequest",i$="upstream",iI="issue",iP=[iM,i$,iI],iD={[ih]:3,[ic]:2,[iu]:1,tag:0};let tO=class tO{_graph;_message;_heads;_remotes;_tags;_activeGraphRef;_activeGraphRefGroup;_refGroupsByName;_orderedRefGroups;sha;parents;author;email;date;type;contexts;rowIndex;column;columnForColoring;edgeColumnMaxes;edges;childRefs;timeLineEntry;summary;body;displayMessage;displaySummary;displayBody;set message(e){this._message!==e&&(this._message=e,this.displayMessage=this._graph.formatCommitMessageCallback(e),this.updateSummaryAndBody(e))}get message(){return this._message}get heads(){return this._heads}set heads(e){this._heads!==e&&(this._heads=e,this.initializeRefGroups())}set remotes(e){this._remotes!==e&&(this._remotes=e,this.initializeRefGroups())}get remotes(){return this._remotes}set tags(e){this._tags!==e&&(this._tags=e,this.initializeRefGroups())}get tags(){return this._tags}get hasRefs(){return this.heads.length>0||this.remotes.length>0||this.tags.length>0}get hasChildRefs(){return this.childRefs.heads.length>0||this.childRefs.remotes.length>0||this.childRefs.tags.length>0}get refsData(){if(this.hasRefs||this.hasChildRefs)return 0===this._orderedRefGroups.length&&this.loadGraphRefGroupsData(),{activeGraphRef:this._activeGraphRef,activeGraphRefGroup:this._activeGraphRefGroup,orderedRefGroups:this._orderedRefGroups,refGroupsByName:this._refGroupsByName}}constructor(e,t,r,o,i,a,s,c){this._graph=e,this._heads=t.heads||[],this._remotes=t.remotes||[],this._tags=t.tags||[],this._message=t.message,this.sha=t.sha,this.parents=t.parents,this.author=t.author,this.email=t.email,this.date=t.date,this.type=t.type,this.contexts=t.contexts,this.column=r||0,this.columnForColoring=c,this.edgeColumnMaxes=o||0,this.edges=i||{},this.childRefs=a||{heads:[],tags:[],remotes:[]},this.timeLineEntry=s,this.initializeRefGroups(),this.updateSummaryAndBody(t.message)}updateSummaryAndBody(e){let t,r=e?e.trim():"",o=r.indexOf(`
`);-1!==o&&(t=r.substring(o+1).trim().replace(/\n+(?:\s+\n+)?/g," | "),r=r.substring(0,o)),this.body=t,this.summary=r,this.displaySummary=this._graph.formatCommitMessageCallback(r),this.displayBody=t?this._graph.formatCommitMessageCallback(t):void 0}initializeRefGroups(){this._activeGraphRefGroup=void 0,this._activeGraphRef=void 0,this._refGroupsByName={},this._orderedRefGroups=[]}addRefToRefGroup(e){let t=e.name;this._refGroupsByName[t]||(this._refGroupsByName[t]=[]),this._refGroupsByName[t].push(e)}loadGraphRefGroupsData(){this.initializeRefGroups();let e=[],{heads:t,tags:r,remotes:o}=this.hasRefs?this:this.childRefs;for(let r of t){let t={...r,refType:ic};this.addRefToRefGroup(t),t.refType===ic&&i7(t)?(this._activeGraphRefGroup=this._refGroupsByName[t.name],this._activeGraphRef=t,e.unshift(this._refGroupsByName[t.name])):e.push(this._refGroupsByName[t.name])}for(let t of o){let r={...t,fullName:t.owner?`${t.owner}/${t.name}`:t.name,refType:iu},o=this._refGroupsByName[r.name];this.addRefToRefGroup(r),o||e.push(this._refGroupsByName[r.name])}for(let t of r){let r={...t,refType:"tag"};this.addRefToRefGroup(r),e.push(this._refGroupsByName[r.name])}this._orderedRefGroups=e.sort((e,t)=>e===this._activeGraphRefGroup?-1:t===this._activeGraphRefGroup?1:iD[e[0].refType]>iD[t[0].refType]?-1:iD[e[0].refType]<iD[t[0].refType]?1:e.length>t.length?-1:e.length<t.length?1:e[0].name.localeCompare(t[0].name))}};let iA=e=>{let t;return(...r)=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{e(...r)})}};function iN(e){return 1>Math.abs(e.scrollHeight-e.scrollTop-e.clientHeight)}function iH(e){return e?"string"==typeof e?e:JSON.stringify(e):null}function iB(e,t,r,o){let{id:i}=e;return!i||null===t||t?.[i]===null||o&&t?.[i]?.[o]===null?null:t&&i in t?o&&!t[i]?.[o]?(r(i,[o]),null):o?t?.[i]?.[o]:t?.[i]:(r(i,iP),null)}function iW(e,t){if(t.id)return t.id;let r=t.owner||"";return e===iu?`${e}/${r}/${t.name}`:`${e}/${t.name}`}function iF(e){return iW(e.refType,e)}function ij(e,t=0){for(let r=e.length-1;r>=t;r-=1){let t=e[r];if(t.currentWidth>t.minimumWidth)return t}}function iU(e,t=!1){let r="--scrollable-scrollbar-thickness",o=t||!e[r]?il(e):e,i=o[r]?parseInt(o[r],10):0;return Number.isNaN(i)?0:i}function iV(e,t){let r=0;for(let o of e)t&&o.type===t||(r+=o.currentWidth);return r}let iq=(e,t)=>e===t[t.length-1].type;function iZ(e,t,r){return e+ +!!(t||r||0===e)}function iK(e,t){return e.type===im&&t>0?e.contentWidth||0:e.currentWidth}function iY(e,t,r,o,i){var a;let s=iJ(e,t);return s&&(a=r.length,s.currentWidth<iK(s,a))?iU(o,i):0}function iQ(e,t,r,o,i,a,s,c,u){var h;let d,p=iJ(e,t);return p&&(h=a.length,d=28*iZ(h,r,o),iq(p.type,t)&&(i<d||s))?iU(c,u):0}function iX(e,t,r){return n8(r,e.minimumWidth||0,e.maximumWidth&&!iq(e.type,t)?e.maximumWidth||0:Number.MAX_VALUE)}function iJ(e,t){return t.find(({type:t})=>t===e)}function i0(e){return!!e&&e.currentWidth<=e.showIconWidth}function i1(e,t){return t.findIndex(({type:t})=>t===e)}function i2(e,t,r){let o=0,i=0,a=i1(e,t);if(a>-1){let e=function(e,t=0){let r=0;for(let o=t;o<e.length;o+=1)r+=e[o].minimumWidth;return r}(t,a+1),s=function(e,t=e.length-1){let r=0;for(let o=0;o<=t;o+=1)r+=e[o].currentWidth;return r}(t,a-1),c=Math.min(t[a].maximumWidth||Number.MAX_VALUE,r-e-s);o=t[a].minimumWidth,i=c}return{min:o,max:i}}function i5(e){let t=!!e&&e===iS.Compact,r=t?1:2,o=t?10:28,i=t?1:3,a=t?1:3,s=t?10:22,c=t?s:22,u=t?s:s/2+1;return{COMMIT_ZONE_LINE_WIDTH:r,COMMIT_ZONE_GUTTER_WIDTH:o,COMMIT_ZONE_PADDING_LEFT:i,COMMIT_ZONE_PADDING_RIGHT:a,COMMIT_COLUMN_WIDTH:s,COMMIT_NODE_DIAMETER:c,COMMIT_MERGE_NODE_DIAMETER:u,COMMIT_NODE_TOP_OFFSET:11-.5*c,COMMIT_MERGE_NODE_LEFT_OFFSET:s/2-u/2,COMMIT_MERGE_NODE_TOP_OFFSET:11-.5*u,COMMIT_ZONE_AVATAR_DIAMETER:c-2*r,COMMIT_ZONE_VIEWPORT_WIDTH_MIN:c+i+a+o,COMMIT_ZONE_SHOW_ICON_WIDTH:t?45:56,IS_COMPACT:t,RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:c/2-u/2}}function i3(e){return e instanceof tO?!!e.refsData?.activeGraphRef:!!e?.heads&&e.heads.some(e=>i7(e))}function i6(e){return[n9,it,io].includes(e)}function i4(e){return!!e&&Object.values(e).some(e=>e>0)}function i8(e,t){return e.has(t)&&1===e.size}function i7(e){return e.isCurrentHead}let t2=class t2{props;constructor(e){this.props=e}getActiveGraphZone(e){let t=iJ(e,this.props.graphZones);return!t||t.isHidden?void 0:t}getGraphRefGroupsByNameForRow(e){let t=this.getRow(e);return t&&t.refsData?.orderedRefGroups||[]}getRow(e){if(!(e<0)&&!(e>this.props.processedRows.length-1))return this.props.processedRows[e]}getZoneWidth(e,t=!0){var r;let o=t?this.getVerticalScrollWidth(e):0;return r=this.props.graphZones,(iJ(e,r)?.currentWidth||iR[e].minimumWidth)-o}isDateTimeZoneActive(){return!!this.getActiveGraphZone(iy)}shouldShowTimelines(){return this.props.alwaysShowTimelines||!this.isDateTimeZoneActive()}isFirstRow(e){return 0===e}isColumnFollowingGraphColumn(e){var t=this.props.graphZones;let r=i1(e,t),o=i1(im,t);return -1!==r&&-1!==o&&r-o==1}isHighlighted(e){if(this.props.processedRows[e]&&this.props.highlightedShas){let t=this.props.processedRows[e]?.sha;return this.props.highlightedShas[t]||!1}return!1}isHovering(e){return!!this.props.processedRows[e]&&this.props.currentlyHoveredCommitSha===this.props.processedRows[e]?.sha}isLastColumn(e){return iq(e,this.props.graphZones)}getSelectedRefGroupByName(){if(1===this.props.selectedShas.size){let e=this.props.selectedShas[Symbol.iterator]().next().value;if(e){let t=this.props.processedGraphRowBySha[e];if(t)return t.refsData?.orderedRefGroups||[]}}return[]}getHorizontalScrollHeight(e){return iY(e,this.props.graphZones,this.props.processedRows,this.props.cssVariables)}getVerticalScrollWidth(e){return iQ(e,this.props.graphZones,this.props.hasMoreCommits,this.props.isLoadingRows,this.props.height,this.props.processedRows,this.props.enabledScrollMarkerTypes.length>0,this.props.cssVariables)}shouldUseColumnHeaderIcons(e){let t=iJ(e,this.props.graphZones);return!!t&&i0(t)}isMissingHoveredRefGroup(e){if(this.props.highlightedShas)return!1;let t=this.getRow(e);if(!t)return!1;let r=[];if(this.props.dimRowsOfSelectedCommit){let e=this.getSelectedRefGroupByName();if(!e.length)return!1;r=e[0]}else{let{hoveredRefGroup:e}=this.props;if(!e?.length)return!1;r=e}let{name:o,refType:i}=r[0],a=t.tags.length>0&&!t.heads.length&&!t.remotes.length,{heads:s,tags:c,remotes:u}=t.hasRefs&&(!a||"tag"===i)?t:t.childRefs;return!s.length&&!u.length&&!c.length||!s.some(e=>e.name===o&&r.some(e=>e.refType===ic))&&!u.some(e=>e.name===o&&r.some(t=>t.refType===iu&&t.owner===e.owner))&&!c.some(e=>e.name===o&&r.some(e=>"tag"===e.refType))}isSelected(e){let t=this.getRow(e)?.sha;return!!t&&this.props.selectedShas.has(t)}isSingleSelected(e){let t=this.getRow(e)?.sha;return!!t&&i8(this.props.selectedShas,t)}hasTimeline(e){return this.shouldShowTimelines()&&!!this.props.processedRows[e]?.timeLineEntry&&!this.isFirstRow(e)}rowContainsCurrentHeadRef(e){return i3(e)}};let t5=class t5 extends n1.default.PureComponent{resizeObserver;scrollbarContainerRef=n1.default.createRef();horizontalScrollRef=n1.default.createRef();scrollabbleContentRef=n1.default.createRef();verticalScrollRef=n1.default.createRef();outerHorizontalScrollRef=n1.default.createRef();constructor(e){super(e),this.resizeObserver=new ResizeObserver(e=>e.forEach(e=>this.onContainerResized(e.contentRect.width,e.contentRect.height)))}updateScrollbarValues(e,t){this.horizontalScrollRef?.current&&(this.horizontalScrollRef.current.scrollLeft=e||0),this.verticalScrollRef?.current&&(this.verticalScrollRef.current.scrollTop=t||0)}componentDidUpdate(e){let{scrollLeft:t,scrollTop:r}=this.props;(e.scrollLeft!==t||e.scrollTop!==r)&&this.updateScrollbarValues(t,r)}onHorizontalScroll(e){this.props.onScroll&&this.props.onScroll({clientHeight:this.props.height||0,clientWidth:e.target.clientWidth,scrollHeight:this.getAdjustedContentHeight(),scrollLeft:e.target.scrollLeft,scrollTop:this.props.scrollTop||0,scrollWidth:e.target.scrollWidth})}onVerticalScroll(e){let t=1>Math.abs(e.target.scrollTop-(this.props.scrollTop??0));this.props.onScroll&&!t&&this.props.onScroll({clientHeight:e.target.clientHeight,clientWidth:this.props.width||0,scrollHeight:e.target.scrollHeight,scrollLeft:this.props.scrollLeft||0,scrollTop:e.target.scrollTop,scrollWidth:this.props.contentWidth||0})}onWheel(e){if(!this.props.onScroll||!this.verticalScrollRef.current&&!this.props.forceOnVerticalWheel&&!this.horizontalScrollRef.current&&!this.props.forceOnHorizontalWheel)return;let t=this.props.scrollLeft||0,r=t;if(this.horizontalScrollRef.current||this.props.forceOnHorizontalWheel){var o;r+=e.deltaX,(r=r>=0?r:0)>t&&this.horizontalScrollRef?.current&&1>Math.abs((o=this.horizontalScrollRef.current).scrollWidth-o.scrollLeft-o.clientWidth)&&(r=t)}let i=this.props.scrollTop||0,a=i;(this.verticalScrollRef.current||this.props.forceOnVerticalWheel)&&(a+=e.deltaY,(a=a>=0?a:0)>i&&this.verticalScrollRef?.current&&iN(this.verticalScrollRef.current)&&(a=i)),(a!==i||r!==t)&&this.props.onScroll({clientHeight:this.props.height||0,clientWidth:this.props.width||0,scrollHeight:this.getAdjustedContentHeight(),scrollLeft:r>=0?r:0,scrollTop:a>=0?a:0,scrollWidth:this.props.contentWidth||0})}componentDidMount(){this.updateScrollbarValues(this.props.scrollLeft,this.props.scrollTop),this.resizeObserver.observe(this.scrollbarContainerRef.current)}componentWillUnmount(){this.resizeObserver.disconnect()}onContainerResized=iA((e,t)=>{let r=this.props.contentHeight||0,o=this.props.contentWidth||0,i=this.props.scrollTop||0,a=this.props.scrollLeft||0,s=t<r?i:0,c=e<o?a:0;(i!==s||a!==c)&&(this.updateScrollbarValues(c,s),this.props.onScroll?.({clientHeight:t,clientWidth:e,scrollHeight:r,scrollLeft:c,scrollTop:s,scrollWidth:o}))});hasHorizontalScroll(){let{contentWidth:e,displayHorizontalScrollbar:t,forceHorizontalScrollbar:r,width:o}=this.props;return r||t&&o<e}hasVerticalScroll(){let{displayVerticalScrollbar:e,forceVerticalScrollbar:t,height:r}=this.props;return t||e&&r<this.getAdjustedContentHeight()}getHorizontalScrollbarTickness(){return parseInt(this.outerHorizontalScrollRef.current?.clientHeight,10)||0}getAdjustedContentHeight(){return this.props.contentHeight+this.getHorizontalScrollbarTickness()}adjustScrollWhileDragging(e){let t,r=this.getAdjustedContentHeight();if(!this.scrollabbleContentRef.current||this.props.height>=r||!this.props.onScroll)return;let o=this.scrollabbleContentRef.current.getBoundingClientRect(),i=e.clientY-o.top,a=Math.abs(r-this.props.height);if(this.props.scrollTop>0&&i<=20){let e=this.props.scrollTop-20;t={clientHeight:o.height,clientWidth:o.width,scrollHeight:a,scrollLeft:this.props.scrollLeft||0,scrollTop:e>0?e:0,scrollWidth:this.props.contentWidth||0}}if(this.props.scrollTop<a&&i>=this.props.height-20){let e=this.props.scrollTop+20;t={clientHeight:o.height,clientWidth:o.width,scrollHeight:a,scrollLeft:this.props.scrollLeft||0,scrollTop:e<a?e:a,scrollWidth:this.props.contentWidth||0}}t&&this.props.onScroll(t)}render(){let{children:e,contentHeight:t,contentWidth:r,forceHorizontalScrollbar:o,forceVerticalScrollbar:i,height:a,width:s}=this.props,c=this.hasVerticalScroll(),u=this.hasHorizontalScroll(),h=u&&n1.default.createElement("div",{className:"scrollbar-outer horizontal",ref:this.outerHorizontalScrollRef,style:{top:`calc(${a}px - var(--scrollable-scrollbar-thickness))`,width:s}},n1.default.createElement("div",{className:"scrollbar-inner horizontal_scrollbar",onScroll:e=>this.onHorizontalScroll(e),ref:this.horizontalScrollRef,style:{overflowX:o?"scroll":"auto",width:c?`calc(${s}px - var(--scrollable-scrollbar-thickness))`:s}},n1.default.createElement("div",{style:{height:"1px",width:r}}))),d=c&&n1.default.createElement("div",{className:"scrollbar-outer vertical",style:{height:a}},n1.default.createElement("div",{className:"scrollbar-inner vertical_scrollbar",onScroll:e=>this.onVerticalScroll(e),ref:this.verticalScrollRef,style:{overflowY:i?"scroll":"auto",height:u?`calc(${a}px - var(--scrollable-scrollbar-thickness))`:a}},n1.default.createElement("div",{style:{height:`calc(${t}px + var(--scrollable-scrollbar-thickness))`,width:"1px"}})));return n1.default.createElement("div",{className:"scrollbar-container",onWheelCapture:e=>this.onWheel(e),ref:this.scrollbarContainerRef,style:{height:a,width:s}},n1.default.createElement("div",{className:"scrollable-content",onDragOverCapture:e=>this.adjustScrollWhileDragging(e),ref:this.scrollabbleContentRef,style:{height:a,width:s}},e),h,d)}};var i9=((nw=i9||{})[nw.Hash=35]="Hash",nw[nw.Slash=47]="Slash",nw[nw.Digit0=48]="Digit0",nw[nw.Digit1=49]="Digit1",nw[nw.Digit2=50]="Digit2",nw[nw.Digit3=51]="Digit3",nw[nw.Digit4=52]="Digit4",nw[nw.Digit5=53]="Digit5",nw[nw.Digit6=54]="Digit6",nw[nw.Digit7=55]="Digit7",nw[nw.Digit8=56]="Digit8",nw[nw.Digit9=57]="Digit9",nw[nw.Backslash=92]="Backslash",nw[nw.A=65]="A",nw[nw.B=66]="B",nw[nw.C=67]="C",nw[nw.D=68]="D",nw[nw.E=69]="E",nw[nw.F=70]="F",nw[nw.Z=90]="Z",nw[nw.a=97]="a",nw[nw.b=98]="b",nw[nw.c=99]="c",nw[nw.d=100]="d",nw[nw.e=101]="e",nw[nw.f=102]="f",nw[nw.z=122]="z",nw);function ae(e){switch(e){case 48:break;case 49:return 1;case 50:return 2;case 51:return 3;case 52:return 4;case 53:return 5;case 54:return 6;case 55:return 7;case 56:return 8;case 57:return 9;case 97:case 65:return 10;case 98:case 66:return 11;case 99:case 67:return 12;case 100:case 68:return 13;case 101:case 69:return 14;case 102:case 70:return 15}return 0}function at(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ar(e){let t,r,o,i=e.h/360,{s:a,l:s,a:c}=e;if(0===a)t=r=o=s;else{let e=s<.5?s*(1+a):s+a-s*a,c=2*s-e;t=at(c,e,i+1/3),r=at(c,e,i),o=at(c,e,i-1/3)}return{type:"rgba",r:Math.round(255*t),g:Math.round(255*r),b:Math.round(255*o),a:c}}let ao=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function an(e){let t;if(0===(e=e.trim()).length)return null;if(35===e.charCodeAt(0))return function(e){let t=(e=e.trim()).length;if(0===t||35!==e.charCodeAt(0))return null;if(7===t)return{type:"rgba",r:16*ae(e.charCodeAt(1))+ae(e.charCodeAt(2)),g:16*ae(e.charCodeAt(3))+ae(e.charCodeAt(4)),b:16*ae(e.charCodeAt(5))+ae(e.charCodeAt(6)),a:1};if(9===t)return{type:"rgba",r:16*ae(e.charCodeAt(1))+ae(e.charCodeAt(2)),g:16*ae(e.charCodeAt(3))+ae(e.charCodeAt(4)),b:16*ae(e.charCodeAt(5))+ae(e.charCodeAt(6)),a:(16*ae(e.charCodeAt(7))+ae(e.charCodeAt(8)))/255};if(4===t){let t=ae(e.charCodeAt(1)),r=ae(e.charCodeAt(2)),o=ae(e.charCodeAt(3));return{type:"rgba",r:16*t+t,g:16*r+r,b:16*o+o,a:1}}if(5===t){let t=ae(e.charCodeAt(1)),r=ae(e.charCodeAt(2)),o=ae(e.charCodeAt(3)),i=ae(e.charCodeAt(4));return{type:"rgba",r:16*t+t,g:16*r+r,b:16*o+o,a:(16*i+i)/255}}return null}(e);let r=ao.exec(e);if(null==r)return null;let o=r[1];switch(o){case"rgb":case"hsl":t=[parseInt(r[2],10),parseInt(r[3],10),parseInt(r[4],10),1];break;case"rgba":case"hsla":t=[parseInt(r[2],10),parseInt(r[3],10),parseInt(r[4],10),parseFloat(r[5])];break;default:return null}return"hsl"===o||"hsla"===o?ar({h:t[0],s:t[1],l:t[2],a:t[3]}):{type:"rgba",r:t[0],g:t[1],b:t[2],a:t[3]}}let ai=e=>e!==n7&&e!==ie,aa=/^.*(:?\n){0,2}/m;function as(e,t=`
`){return e.replace(`
`===t?aa:RegExp(`^.*(:?${t}){0,2}`,"m"),"")}let al=/^co-authored-by:\s*([^\s<>]+(?:\s+[^\s<>]+)*)\s*<([^<>]+)>/gim;function ac(e){let t=[];for(let r=al.exec(e);null!==r;r=al.exec(e)){let[,e,o]=r;t.push({name:e,email:o})}return t}let au=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,ah=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,ad=new Map,ap=["th","st","nd","rd"],af={};function ag(e,t,r,o){let i=`${e}${o?"_compact":""}`,a=af[e];return a||(a=r+e*t+t/2,af[i]=a),a}let am={d:"d",fill:"fill","shape-rendering":"shapeRendering","stroke-linejoin":"strokeLinejoin","stroke-width":"strokeWidth","stroke-dasharray":"strokeDasharray",stroke:"stroke",x1:"x1",x2:"x2",y1:"y1",y2:"y2"};function ab(e,t){let r="";for(let[e,o]of Object.entries(am)){let i=t[o];i&&(r+=` ${e}="${i}"`)}return`<${e}${r} />`}function av(e){return ab("line",e)}function ay(e,t,r,o){return{fill:"none",shapeRendering:"auto",strokeLinejoin:"round",strokeWidth:r,strokeDasharray:ai(e)?o?1:2:0,stroke:t}}function aw(e,t,r,o){return`${e}_${t}_${r||"+"}${o?"_compact":""}`}function aS(e,t,r){return`${e}_${t||"+"}${r?"_compact":""}`}var ax=((nS=ax||{}).arrowDownKey="ArrowDown",nS.arrowUpKey="ArrowUp",nS.controlKey="Control",nS.metaKey="Meta",nS.shiftKey="Shift",nS);let aC={"CommitDiffSection-FileAdded":"added","CommitDiffSection-FileDeleted":"deleted","CommitDiffSection-FileModified":"modified","CommitDiffSection-FileRenamed":"renamed","CommitDiffSection-NFilesAdded":"{0} added","CommitDiffSection-NFilesDeleted":"{0} deleted","CommitDiffSection-NFilesModified":"{0} modified","CommitDiffSection-NFilesRenamed":"{0} renamed","Graph-IsLoadingRows":"Loading...","Graph-NoCommits":"No commits","Graph-WorkInProgress":"Work in progress","GraphHeader-BranchTag":"BRANCH / TAG","GraphHeader-Changes":"CHANGES","GraphHeader-CommitAuthor":"AUTHOR","GraphHeader-CommitDateTime":"COMMIT DATE / TIME","GraphHeader-CommitGraph":"GRAPH","GraphHeader-CommitMessage":"COMMIT MESSAGE","GraphHeader-CommitSha":"SHA","GraphHeader-EditColumns":"Columns settings","GraphHeader-Filter":"Filter","GraphHeader-HiddenRefs-btn":"Hidden Branches / Tags","OptionalGraphZone-CommitAuthor":"Author","OptionalGraphZone-CommitDateTime":"Date / Time","OptionalGraphZone-CommitSha":"Sha","IssueIcon-Tooltip":"{0}: {1}","PullRequestIcon-Tooltip":`#{0}: {1}
 Double-click to open pull request on {2}`,"Ref-Current":"Current Branch","Ref-Local":"Local Branch","Ref-Remote":"Remote Branch","Ref-Tag":"Tag","Ref-Worktree":"Worktree","RefZone-EnterBranchName":"enter branch name","RefZone-EnterTagName":"enter tag name","Timeline-1HourAgo":"1 hour ago","Timeline-NHoursAgo":"{0} hours ago","Timeline-Yesterday":"yesterday","Timeline-NDaysAgo":"{0} days ago","Timeline-1WeekAgo":"a week ago","Timeline-NWeeksAgo":"{0} weeks ago","Timeline-1MonthAgo":"a month ago","Timeline-NMonthsAgo":"{0} months ago","Timeline-1YearAgo":"a year ago","Timeline-NYearsAgo":"{0} years ago","Timeline-NPlusYearsAgo":"{0}+ years ago","UpstreamIndicatorIcon-BehindAndAheadTooltip":`{0} commit(s) behind and {1} commit(s) ahead of {2}
 Double-click to pull changes`,"UpstreamIndicatorIcon-BehindTooltip":`{0} commit(s) behind {1}
 Double-click to pull changes`,"UpstreamIndicatorIcon-AheadTooltip":`{0} commit(s) ahead of {1}
 Double-click to push changes`,ResizePanel:"Resize Panel",Stash:"Stash",Hide:"Hide",Show:"Show","WorkDirMessageInput-WIPPlaceholder":"WIP"},ak={0:1,90:0,180:-1,270:0},a_={0:0,90:1,180:0,270:-1},aR=8,aT=` A ${aR} ${aR} 0 0 0 `;function aE(e,t,r){let o=ak[r],i=a_[r];return{x:e-11*o,xOffset:-(3*o),y:t+11*i,yOffset:3*i}}let aM={};var aO=function(e,t,r,o,i,a,s,c){let u=ay(o,e,s,c);return u.d=function(e,t,r,o){let i=`${e}_${t}_${r}_${o}`,a=aM[i];if(a)return a;let s=aE(e,t,o),c=aE(e,t,r);return a=`M ${s.x} ${s.y}${c.xOffset?` H ${s.x+c.xOffset}`:` V ${s.y+c.yOffset}`}${aT}${c.x+s.xOffset} ${c.y+s.yOffset}${s.xOffset?` H ${c.x}`:` V ${c.y}`}`,aM[i]=a,a}(i,a,r,t),ab("path",u)};let a$={},aI={},az={},aP={};function aD(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function aA(e){return(aA="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function aL(e){var t=function(e,t){if("object"!=aA(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=aA(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==aA(t)?t:t+""}function aN(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,aL(o.key),o)}}function aH(e,t,r){return t&&aN(e.prototype,t),r&&aN(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function aB(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function aW(e,t){if(t&&("object"==aA(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return aB(e)}function aF(e){return(aF=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function aG(e,t){return(aG=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function aj(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&aG(e,t)}function aU(e,t,r){return(t=aL(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function aV(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function aq(e){this.setState((function(t){var r=this.constructor.getDerivedStateFromProps(e,t);return null!=r?r:null}).bind(this))}function aZ(e,t){try{var r=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,o)}finally{this.props=r,this.state=o}}function aK(e){var t=e.prototype;if(!t||!t.isReactComponent)throw Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var r=null,o=null,i=null;if("function"==typeof t.componentWillMount?r="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(r="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?o="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?i="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==r||null!==o||null!==i)throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+(e.displayName||e.name)+" uses "+("function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()")+" but also contains the following legacy lifecycles:"+(null!==r?`
  `+r:"")+(null!==o?`
  `+o:"")+(null!==i?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`);if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=aV,t.componentWillReceiveProps=aq),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=aZ;var a=t.componentDidUpdate;t.componentDidUpdate=function(e,t,r){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:r;a.call(this,e,t,o)}}return e}function aY(){return(aY=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(null,arguments)}aV.__suppressDeprecationWarning=!0,aq.__suppressDeprecationWarning=!0,aZ.__suppressDeprecationWarning=!0;let aQ=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,o,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(o=e(t[r]))&&(i&&(i+=" "),i+=o);else for(r in t)t[r]&&(i&&(i+=" "),i+=r);return i}(e))&&(o&&(o+=" "),o+=t);return o};function aX(e){var t=e.cellCount,r=e.cellSize,o=e.computeMetadataCallback,i=e.computeMetadataCallbackProps,a=e.nextCellsCount,s=e.nextCellSize,c=e.nextScrollToIndex,u=e.scrollToIndex,h=e.updateScrollOffsetForScrollToIndex;(t!==a||("number"==typeof r||"number"==typeof s)&&r!==s)&&(o(i),u>=0&&u===c&&h())}function aJ(e,t){if(null==e)return{};var r={};for(var o in e)if(({}).hasOwnProperty.call(e,o)){if(-1!==t.indexOf(o))continue;r[o]=e[o]}return r}function a0(e,t){if(null==e)return{};var r,o,i=aJ(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a1=function(){function e(t){var r=t.cellCount,o=t.cellSizeGetter,i=t.estimatedCellSize;aD(this,e),aU(this,"_cellSizeAndPositionData",{}),aU(this,"_lastMeasuredIndex",-1),aU(this,"_lastBatchedIndex",-1),aU(this,"_cellCount",void 0),aU(this,"_cellSizeGetter",void 0),aU(this,"_estimatedCellSize",void 0),this._cellSizeGetter=o,this._cellCount=r,this._estimatedCellSize=i}return aH(e,[{key:"areOffsetsAdjusted",value:function(){return!1}},{key:"configure",value:function(e){var t=e.cellCount,r=e.estimatedCellSize,o=e.cellSizeGetter;this._cellCount=t,this._estimatedCellSize=r,this._cellSizeGetter=o}},{key:"getCellCount",value:function(){return this._cellCount}},{key:"getEstimatedCellSize",value:function(){return this._estimatedCellSize}},{key:"getLastMeasuredIndex",value:function(){return this._lastMeasuredIndex}},{key:"getOffsetAdjustment",value:function(){return 0}},{key:"getSizeAndPositionOfCell",value:function(e){if(e<0||e>=this._cellCount)throw Error("Requested index ".concat(e," is outside of range 0..").concat(this._cellCount));if(e>this._lastMeasuredIndex)for(var t=this.getSizeAndPositionOfLastMeasuredCell(),r=t.offset+t.size,o=this._lastMeasuredIndex+1;o<=e;o++){var i=this._cellSizeGetter({index:o});if(void 0===i||isNaN(i))throw Error("Invalid size returned for cell ".concat(o," of value ").concat(i));null===i?(this._cellSizeAndPositionData[o]={offset:r,size:0},this._lastBatchedIndex=e):(this._cellSizeAndPositionData[o]={offset:r,size:i},r+=i,this._lastMeasuredIndex=e)}return this._cellSizeAndPositionData[e]}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._lastMeasuredIndex>=0?this._cellSizeAndPositionData[this._lastMeasuredIndex]:{offset:0,size:0}}},{key:"getTotalSize",value:function(){var e=this.getSizeAndPositionOfLastMeasuredCell();return e.offset+e.size+(this._cellCount-this._lastMeasuredIndex-1)*this._estimatedCellSize}},{key:"getUpdatedOffsetForIndex",value:function(e){var t,r=e.align,o=e.containerSize,i=e.currentOffset,a=e.targetIndex;if(o<=0)return 0;var s=this.getSizeAndPositionOfCell(a),c=s.offset,u=c-o+s.size;switch(void 0===r?"auto":r){case"start":t=c;break;case"end":t=u;break;case"center":t=c-(o-s.size)/2;break;default:t=Math.max(u,Math.min(c,i))}return Math.max(0,Math.min(this.getTotalSize()-o,t))}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,r=e.offset;if(0===this.getTotalSize())return{};var o=r+t,i=this._findNearestCell(r),a=this.getSizeAndPositionOfCell(i);r=a.offset+a.size;for(var s=i;r<o&&s<this._cellCount-1;)s++,r+=this.getSizeAndPositionOfCell(s).size;return{start:i,stop:s}}},{key:"resetCell",value:function(e){this._lastMeasuredIndex=Math.min(this._lastMeasuredIndex,e-1)}},{key:"_binarySearch",value:function(e,t,r){for(;t<=e;){var o=t+Math.floor((e-t)/2),i=this.getSizeAndPositionOfCell(o).offset;if(i===r)return o;i<r?t=o+1:i>r&&(e=o-1)}return t>0?t-1:0}},{key:"_exponentialSearch",value:function(e,t){for(var r=1;e<this._cellCount&&this.getSizeAndPositionOfCell(e).offset<t;)e+=r,r*=2;return this._binarySearch(Math.min(e,this._cellCount-1),Math.floor(e/2),t)}},{key:"_findNearestCell",value:function(e){if(isNaN(e))throw Error("Invalid offset ".concat(e," specified"));e=Math.max(0,e);var t=this.getSizeAndPositionOfLastMeasuredCell(),r=Math.max(0,this._lastMeasuredIndex);return t.offset>=e?this._binarySearch(r,0,e):this._exponentialSearch(r,e)}}]),e}(),a2=function(){function e(t){var r=t.maxScrollSize,o=void 0===r?"undefined"!=typeof window&&window.chrome?0xffff8c:15e5:r,i=a0(t,["maxScrollSize"]);aD(this,e),aU(this,"_cellSizeAndPositionManager",void 0),aU(this,"_maxScrollSize",void 0),this._cellSizeAndPositionManager=new a1(i),this._maxScrollSize=o}return aH(e,[{key:"areOffsetsAdjusted",value:function(){return this._cellSizeAndPositionManager.getTotalSize()>this._maxScrollSize}},{key:"configure",value:function(e){this._cellSizeAndPositionManager.configure(e)}},{key:"getCellCount",value:function(){return this._cellSizeAndPositionManager.getCellCount()}},{key:"getEstimatedCellSize",value:function(){return this._cellSizeAndPositionManager.getEstimatedCellSize()}},{key:"getLastMeasuredIndex",value:function(){return this._cellSizeAndPositionManager.getLastMeasuredIndex()}},{key:"getOffsetAdjustment",value:function(e){var t=e.containerSize,r=e.offset,o=this._cellSizeAndPositionManager.getTotalSize(),i=this.getTotalSize();return Math.round(this._getOffsetPercentage({containerSize:t,offset:r,totalSize:i})*(i-o))}},{key:"getSizeAndPositionOfCell",value:function(e){return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(e)}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell()}},{key:"getTotalSize",value:function(){return Math.min(this._maxScrollSize,this._cellSizeAndPositionManager.getTotalSize())}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,r=e.containerSize,o=e.currentOffset,i=e.targetIndex;o=this._safeOffsetToOffset({containerSize:r,offset:o});var a=this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({align:void 0===t?"auto":t,containerSize:r,currentOffset:o,targetIndex:i});return this._offsetToSafeOffset({containerSize:r,offset:a})}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,r=e.offset;return r=this._safeOffsetToOffset({containerSize:t,offset:r}),this._cellSizeAndPositionManager.getVisibleCellRange({containerSize:t,offset:r})}},{key:"resetCell",value:function(e){this._cellSizeAndPositionManager.resetCell(e)}},{key:"_getOffsetPercentage",value:function(e){var t=e.containerSize,r=e.offset,o=e.totalSize;return o<=t?0:r/(o-t)}},{key:"_offsetToSafeOffset",value:function(e){var t=e.containerSize,r=e.offset,o=this._cellSizeAndPositionManager.getTotalSize(),i=this.getTotalSize();return o===i?r:Math.round(this._getOffsetPercentage({containerSize:t,offset:r,totalSize:o})*(i-t))}},{key:"_safeOffsetToOffset",value:function(e){var t=e.containerSize,r=e.offset,o=this._cellSizeAndPositionManager.getTotalSize(),i=this.getTotalSize();return o===i?r:Math.round(this._getOffsetPercentage({containerSize:t,offset:r,totalSize:i})*(o-t))}}]),e}();function a5(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t={};return function(r){var o=r.callback,i=r.indices,a=Object.keys(i),s=!e||a.every(function(e){var t=i[e];return Array.isArray(t)?t.length>0:t>=0}),c=a.length!==Object.keys(t).length||a.some(function(e){var r=t[e],o=i[e];return Array.isArray(o)?r.join(",")!==o.join(","):r!==o});t=i,s&&c&&o(i)}}function a3(e){var t=e.cellSize,r=e.cellSizeAndPositionManager,o=e.previousCellsCount,i=e.previousCellSize,a=e.previousScrollToAlignment,s=e.previousScrollToIndex,c=e.previousSize,u=e.scrollOffset,h=e.scrollToAlignment,d=e.scrollToIndex,p=e.size,f=e.sizeJustIncreasedFromZero,g=e.updateScrollIndexCallback,m=r.getCellCount(),b=d>=0&&d<m;b&&(p!==c||f||!i||"number"==typeof t&&t!==i||h!==a||d!==s)?g(d):!b&&m>0&&(p<c||m<o)&&u>r.getTotalSize()-p&&g(m-1)}let a6=!!("undefined"!=typeof window&&window.document&&window.document.createElement);function a4(e){if((!n$&&0!==n$||e)&&a6){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),n$=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return n$}var a8=(nI="undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).requestAnimationFrame||nI.webkitRequestAnimationFrame||nI.mozRequestAnimationFrame||nI.oRequestAnimationFrame||nI.msRequestAnimationFrame||function(e){return nI.setTimeout(e,1e3/60)},a7=nI.cancelAnimationFrame||nI.webkitCancelAnimationFrame||nI.mozCancelAnimationFrame||nI.oCancelAnimationFrame||nI.msCancelAnimationFrame||function(e){nI.clearTimeout(e)},a9=function(e){return a7(e.id)},se=function(e,t){Promise.resolve().then(function(){r=Date.now()});var r,o={id:a8(function i(){Date.now()-r>=t?e.call():o.id=a8(i)})};return o};function st(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function sr(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?st(r,!0).forEach(function(t){aU(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):st(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var so="requested",sn=(nP=nz=function(e){function t(e){var r;return aD(this,t),aU(aB(r=aW(this,aF(t).call(this,e))),"_onGridRenderedMemoizer",a5()),aU(aB(r),"_onScrollMemoizer",a5(!1)),aU(aB(r),"_deferredInvalidateColumnIndex",null),aU(aB(r),"_deferredInvalidateRowIndex",null),aU(aB(r),"_recomputeScrollLeftFlag",!1),aU(aB(r),"_recomputeScrollTopFlag",!1),aU(aB(r),"_horizontalScrollBarSize",0),aU(aB(r),"_verticalScrollBarSize",0),aU(aB(r),"_scrollbarPresenceChanged",!1),aU(aB(r),"_scrollingContainer",void 0),aU(aB(r),"_childrenToDisplay",void 0),aU(aB(r),"_columnStartIndex",void 0),aU(aB(r),"_columnStopIndex",void 0),aU(aB(r),"_rowStartIndex",void 0),aU(aB(r),"_rowStopIndex",void 0),aU(aB(r),"_renderedColumnStartIndex",0),aU(aB(r),"_renderedColumnStopIndex",0),aU(aB(r),"_renderedRowStartIndex",0),aU(aB(r),"_renderedRowStopIndex",0),aU(aB(r),"_initialScrollTop",void 0),aU(aB(r),"_initialScrollLeft",void 0),aU(aB(r),"_disablePointerEventsTimeoutId",void 0),aU(aB(r),"_styleCache",{}),aU(aB(r),"_cellCache",{}),aU(aB(r),"_debounceScrollEndedCallback",function(){r._disablePointerEventsTimeoutId=null,r.setState({isScrolling:!1,needToResetStyleCache:!1})}),aU(aB(r),"_invokeOnGridRenderedHelper",function(){var e=r.props.onSectionRendered;r._onGridRenderedMemoizer({callback:e,indices:{columnOverscanStartIndex:r._columnStartIndex,columnOverscanStopIndex:r._columnStopIndex,columnStartIndex:r._renderedColumnStartIndex,columnStopIndex:r._renderedColumnStopIndex,rowOverscanStartIndex:r._rowStartIndex,rowOverscanStopIndex:r._rowStopIndex,rowStartIndex:r._renderedRowStartIndex,rowStopIndex:r._renderedRowStopIndex}})}),aU(aB(r),"_onWheel",function(e){var t=e.deltaX,o=e.deltaY;r.handleWheelEvent({deltaX:t,deltaY:o})}),aU(aB(r),"_setScrollingContainerRef",function(e){e&&(e.removeEventListener("wheel",r.preventDefault),e.addEventListener("wheel",r.preventDefault,{passive:!1})),r._scrollingContainer=e}),aU(aB(r),"_onScroll",function(e){e.target===r._scrollingContainer&&r.handleScrollEvent(e.target)}),r.state={instanceProps:{columnSizeAndPositionManager:new a2({cellCount:e.columnCount,cellSizeGetter:function(r){return t._wrapSizeGetter(e.columnWidth)(r)},estimatedCellSize:t._getEstimatedColumnSize(e)}),rowSizeAndPositionManager:new a2({cellCount:e.rowCount,cellSizeGetter:function(r){return t._wrapSizeGetter(e.rowHeight)(r)},estimatedCellSize:t._getEstimatedRowSize(e)}),prevColumnWidth:e.columnWidth,prevRowHeight:e.rowHeight,prevColumnCount:e.columnCount,prevRowCount:e.rowCount,prevIsScrolling:!0===e.isScrolling,prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow,scrollbarSize:0,scrollbarSizeMeasured:!1},isScrolling:!1,scrollDirectionHorizontal:1,scrollDirectionVertical:1,scrollLeft:0,scrollTop:0,scrollPositionChangeReason:null,needToResetStyleCache:!1},e.scrollToRow>0&&(r._initialScrollTop=r._getCalculatedScrollTop(e,r.state)),e.scrollToColumn>0&&(r._initialScrollLeft=r._getCalculatedScrollLeft(e,r.state)),r}return aj(t,e),aH(t,[{key:"getOffsetForCell",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.alignment,r=void 0===t?this.props.scrollToAlignment:t,o=e.columnIndex,i=void 0===o?this.props.scrollToColumn:o,a=e.rowIndex,s=void 0===a?this.props.scrollToRow:a,c=sr({},this.props,{scrollToAlignment:r,scrollToColumn:i,scrollToRow:s});return{scrollLeft:this._getCalculatedScrollLeft(c),scrollTop:this._getCalculatedScrollTop(c)}}},{key:"getTotalRowsHeight",value:function(){return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize()}},{key:"getTotalColumnsWidth",value:function(){return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize()}},{key:"handleScrollEvent",value:function(e){var t=e.scrollLeft,r=e.scrollTop,o=void 0===r?0:r;if(!(o<0)){this._debounceScrollEnded();var i=this.props,a=i.autoHeight,s=i.autoWidth,c=i.height,u=i.width,h=this.state.instanceProps,d=h.scrollbarSize,p=h.rowSizeAndPositionManager.getTotalSize(),f=h.columnSizeAndPositionManager.getTotalSize(),g=Math.min(Math.max(0,f-u+d),void 0===t?0:t),m=Math.min(Math.max(0,p-c+d),o);if(this.state.scrollLeft!==g||this.state.scrollTop!==m){var b={isScrolling:!0,scrollDirectionHorizontal:g!==this.state.scrollLeft?g>this.state.scrollLeft?1:-1:this.state.scrollDirectionHorizontal,scrollDirectionVertical:m!==this.state.scrollTop?m>this.state.scrollTop?1:-1:this.state.scrollDirectionVertical,scrollPositionChangeReason:"observed"};a||(b.scrollTop=m),s||(b.scrollLeft=g),b.needToResetStyleCache=!1,this.setState(b)}this._invokeOnScrollMemoizer({scrollLeft:g,scrollTop:m,totalColumnsWidth:f,totalRowsHeight:p})}}},{key:"preventDefault",value:function(e){e.preventDefault()}},{key:"handleWheelEvent",value:function(e){var t=e.deltaX,r=e.deltaY;this._debounceScrollEnded();var o=this.props,i=o.autoHeight,a=o.autoWidth,s=o.height,c=o.width,u=this.state.instanceProps.scrollbarSize,h=this.state.instanceProps.rowSizeAndPositionManager.getTotalSize(),d=this.state.instanceProps.columnSizeAndPositionManager.getTotalSize(),p=Math.min(Math.max(0,d-c+u),Math.max(0,this._scrollingContainer.scrollLeft+t)),f=Math.min(Math.max(0,h-s+u),Math.max(0,this._scrollingContainer.scrollTop+r));if(this.state.scrollLeft!==p||this.state.scrollTop!==f){var g={isScrolling:!0,scrollDirectionHorizontal:p!==this.state.scrollLeft?p>this.state.scrollLeft?1:-1:this.state.scrollDirectionHorizontal,scrollDirectionVertical:f!==this.state.scrollTop?f>this.state.scrollTop?1:-1:this.state.scrollDirectionVertical,scrollPositionChangeReason:so};i||(g.scrollTop=f),a||(g.scrollLeft=p),g.needToResetStyleCache=!1,this.setState(g)}this._invokeOnScrollMemoizer({scrollLeft:p,scrollTop:f,totalColumnsWidth:d,totalRowsHeight:h})}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,r=e.rowIndex;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,t):t,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,r):r}},{key:"measureAllCells",value:function(){var e=this.props,t=e.columnCount,r=e.rowCount,o=this.state.instanceProps;o.columnSizeAndPositionManager.getSizeAndPositionOfCell(t-1),o.rowSizeAndPositionManager.getSizeAndPositionOfCell(r-1)}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,r=void 0===t?0:t,o=e.rowIndex,i=void 0===o?0:o,a=this.props,s=a.scrollToColumn,c=a.scrollToRow,u=this.state.instanceProps;u.columnSizeAndPositionManager.resetCell(r),u.rowSizeAndPositionManager.resetCell(i),this._recomputeScrollLeftFlag=s>=0&&(1===this.state.scrollDirectionHorizontal?r<=s:r>=s),this._recomputeScrollTopFlag=c>=0&&(1===this.state.scrollDirectionVertical?i<=c:i>=c),this._styleCache={},this._cellCache={},this.forceUpdate()}},{key:"scrollToCell",value:function(e){var t=e.columnIndex,r=e.rowIndex,o=this.props,i=o.columnCount,a=o.onScrollToTargetCausedUpdate,s=this.state,c=s.scrollLeft,u=s.scrollTop,h=this.props,d=this.state,p=void 0,f=void 0;if(i>1&&void 0!==t){var g=this._updateScrollLeftForScrollToColumn(sr({},h,{scrollToColumn:t}),d,!0);g&&"number"==typeof g.scrollLeft&&g.scrollLeft>=0&&(p=g.scrollLeft)}if(void 0!==r){var m=this._updateScrollTopForScrollToRow(sr({},h,{scrollToRow:r}),d,!0);m&&"number"==typeof m.scrollTop&&m.scrollTop>=0&&(f=m.scrollTop)}if(a&&("number"==typeof p||"number"==typeof f)){var b="number"!=typeof p?p:c,v="number"!=typeof f?f:u;a({clientHeight:h.height,clientWidth:h.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:b,scrollTop:v,scrollWidth:this.getTotalColumnsWidth()})}}},{key:"componentDidMount",value:function(){var e=this.props,r=e.getScrollbarSize,o=e.height,i=e.scrollLeft,a=e.scrollToColumn,s=e.scrollTop,c=e.scrollToRow,u=e.width,h=this.state.instanceProps;if(this._initialScrollTop=0,this._initialScrollLeft=0,this._handleInvalidatedGridSize(),h.scrollbarSizeMeasured||this.setState(function(e){var t=sr({},e,{needToResetStyleCache:!1});return t.instanceProps.scrollbarSize=r(),t.instanceProps.scrollbarSizeMeasured=!0,t}),"number"==typeof i&&i>=0||"number"==typeof s&&s>=0){var d=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:i,scrollTop:s});d&&(d.needToResetStyleCache=!1,this.setState(d))}this._scrollingContainer&&(this._scrollingContainer.scrollLeft!==this.state.scrollLeft&&(this._scrollingContainer.scrollLeft=this.state.scrollLeft),this._scrollingContainer.scrollTop!==this.state.scrollTop&&(this._scrollingContainer.scrollTop=this.state.scrollTop));var p=o>0&&u>0;a>=0&&p&&this._updateScrollLeftForScrollToColumn(),c>=0&&p&&this._updateScrollTopForScrollToRow(),this._invokeOnGridRenderedHelper(),this._invokeOnScrollMemoizer({scrollLeft:i||0,scrollTop:s||0,totalColumnsWidth:h.columnSizeAndPositionManager.getTotalSize(),totalRowsHeight:h.rowSizeAndPositionManager.getTotalSize()}),this._maybeCallOnScrollbarPresenceChange()}},{key:"componentDidUpdate",value:function(e,t){var r=this,o=this.props,i=o.autoHeight,a=o.autoWidth,s=o.columnCount,c=o.height,u=o.rowCount,h=o.scrollToAlignment,d=o.scrollToColumn,p=o.scrollToRow,f=o.width,g=this.state,m=g.scrollLeft,b=g.scrollPositionChangeReason,v=g.scrollTop,w=g.instanceProps;this._handleInvalidatedGridSize();var S=s>0&&0===e.columnCount||u>0&&0===e.rowCount;b===so&&(!a&&m>=0&&(m!==this._scrollingContainer.scrollLeft||S)&&(this._scrollingContainer.scrollLeft=m),!i&&v>=0&&(v!==this._scrollingContainer.scrollTop||S)&&(this._scrollingContainer.scrollTop=v));var x=(0===e.width||0===e.height)&&c>0&&f>0;if(this._recomputeScrollLeftFlag?(this._recomputeScrollLeftFlag=!1,this._updateScrollLeftForScrollToColumn(this.props)):a3({cellSizeAndPositionManager:w.columnSizeAndPositionManager,previousCellsCount:e.columnCount,previousCellSize:e.columnWidth,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToColumn,previousSize:e.width,scrollOffset:m,scrollToAlignment:h,scrollToIndex:d,size:f,sizeJustIncreasedFromZero:x,updateScrollIndexCallback:function(){return r._updateScrollLeftForScrollToColumn(r.props)}}),this._recomputeScrollTopFlag?(this._recomputeScrollTopFlag=!1,this._updateScrollTopForScrollToRow(this.props)):a3({cellSizeAndPositionManager:w.rowSizeAndPositionManager,previousCellsCount:e.rowCount,previousCellSize:e.rowHeight,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToRow,previousSize:e.height,scrollOffset:v,scrollToAlignment:h,scrollToIndex:p,size:c,sizeJustIncreasedFromZero:x,updateScrollIndexCallback:function(){return r._updateScrollTopForScrollToRow(r.props)}}),this._invokeOnGridRenderedHelper(),m!==t.scrollLeft||v!==t.scrollTop){var C=w.rowSizeAndPositionManager.getTotalSize(),_=w.columnSizeAndPositionManager.getTotalSize();this._invokeOnScrollMemoizer({scrollLeft:m,scrollTop:v,totalColumnsWidth:_,totalRowsHeight:C})}this._maybeCallOnScrollbarPresenceChange()}},{key:"componentWillUnmount",value:function(){this._scrollingContainer&&this._scrollingContainer.removeEventListener("wheel",this.preventDefault),this._disablePointerEventsTimeoutId&&a9(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoContainerWidth,r=e.autoHeight,o=e.autoWidth,i=e.className,a=e.containerProps,s=e.containerRole,c=e.containerStyle,u=e.height,h=e.id,d=e.noContentRenderer,p=e.role,f=e.style,g=e.tabIndex,m=e.width,b=this.state,v=b.instanceProps,w=b.needToResetStyleCache,S=this._isScrolling(),x={boxSizing:"border-box",direction:"ltr",height:r?"auto":u,position:"relative",width:o?"auto":m,WebkitOverflowScrolling:"touch",willChange:"transform"};w&&(this._styleCache={}),this.state.isScrolling||this._resetStyleCache(),this._calculateChildrenToRender(this.props,this.state);var C=v.columnSizeAndPositionManager.getTotalSize(),_=v.rowSizeAndPositionManager.getTotalSize(),T=_>u?v.scrollbarSize:0,E=C>m?v.scrollbarSize:0;(E!==this._horizontalScrollBarSize||T!==this._verticalScrollBarSize)&&(this._horizontalScrollBarSize=E,this._verticalScrollBarSize=T,this._scrollbarPresenceChanged=!0),x.overflowX=C+T<=m?"hidden":"auto",x.overflowY=_+E<=u?"hidden":"auto";var O=this._childrenToDisplay,$=0===O.length&&u>0&&m>0;return n1.createElement("div",aY({ref:this._setScrollingContainerRef},a,{"aria-label":this.props["aria-label"],"aria-readonly":this.props["aria-readonly"],className:aQ("ReactVirtualized__Grid",i),id:h,onScroll:this._onScroll,onWheel:this._onWheel,role:p,style:sr({},x,{},f),tabIndex:g}),O.length>0&&n1.createElement("div",{className:"ReactVirtualized__Grid__innerScrollContainer",role:s,style:sr({width:t?"auto":C,height:_,maxWidth:C,maxHeight:_,overflow:"hidden",pointerEvents:S?"none":"",position:"relative"},c)},O),$&&d())}},{key:"_calculateChildrenToRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,r=e.cellRenderer,o=e.cellRangeRenderer,i=e.columnCount,a=e.deferredMeasurementCache,s=e.height,c=e.overscanColumnCount,u=e.overscanIndicesGetter,h=e.overscanRowCount,d=e.rowCount,p=e.width,f=e.isScrollingOptOut,g=t.scrollDirectionHorizontal,m=t.scrollDirectionVertical,b=t.instanceProps,v=this._initialScrollTop>0?this._initialScrollTop:t.scrollTop,w=this._initialScrollLeft>0?this._initialScrollLeft:t.scrollLeft,S=this._isScrolling(e,t);if(this._childrenToDisplay=[],s>0&&p>0){var x=b.columnSizeAndPositionManager.getVisibleCellRange({containerSize:p,offset:w}),C=b.rowSizeAndPositionManager.getVisibleCellRange({containerSize:s,offset:v}),_=b.columnSizeAndPositionManager.getOffsetAdjustment({containerSize:p,offset:w}),T=b.rowSizeAndPositionManager.getOffsetAdjustment({containerSize:s,offset:v});this._renderedColumnStartIndex=x.start,this._renderedColumnStopIndex=x.stop,this._renderedRowStartIndex=C.start,this._renderedRowStopIndex=C.stop;var E=u({direction:"horizontal",cellCount:i,overscanCellsCount:c,scrollDirection:g,startIndex:"number"==typeof x.start?x.start:0,stopIndex:"number"==typeof x.stop?x.stop:-1}),O=u({direction:"vertical",cellCount:d,overscanCellsCount:h,scrollDirection:m,startIndex:"number"==typeof C.start?C.start:0,stopIndex:"number"==typeof C.stop?C.stop:-1}),$=E.overscanStartIndex,P=E.overscanStopIndex,D=O.overscanStartIndex,A=O.overscanStopIndex;if(a){if(!a.hasFixedHeight()){for(var B=D;B<=A;B++)if(!a.has(B,0)){$=0,P=i-1;break}}if(!a.hasFixedWidth()){for(var W=$;W<=P;W++)if(!a.has(0,W)){D=0,A=d-1;break}}}this._childrenToDisplay=o({cellCache:this._cellCache,cellRenderer:r,columnSizeAndPositionManager:b.columnSizeAndPositionManager,columnStartIndex:$,columnStopIndex:P,deferredMeasurementCache:a,horizontalOffsetAdjustment:_,isScrolling:S,isScrollingOptOut:f,parent:this,rowSizeAndPositionManager:b.rowSizeAndPositionManager,rowStartIndex:D,rowStopIndex:A,scrollLeft:w,scrollTop:v,styleCache:this._styleCache,verticalOffsetAdjustment:T,visibleColumnIndices:x,visibleRowIndices:C}),this._columnStartIndex=$,this._columnStopIndex=P,this._rowStartIndex=D,this._rowStopIndex=A}}},{key:"_debounceScrollEnded",value:function(){var e=this.props.scrollingResetTimeInterval;this._disablePointerEventsTimeoutId&&a9(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=se(this._debounceScrollEndedCallback,e)}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex&&"number"==typeof this._deferredInvalidateRowIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t})}}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,r=e.scrollLeft,o=e.scrollTop,i=e.totalColumnsWidth,a=e.totalRowsHeight;this._onScrollMemoizer({callback:function(e){var r=e.scrollLeft,o=e.scrollTop,s=t.props,c=s.height;(0,s.onScroll)({clientHeight:c,clientWidth:s.width,scrollHeight:a,scrollLeft:r,scrollTop:o,scrollWidth:i})},indices:{scrollLeft:r,scrollTop:o}})}},{key:"_isScrolling",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return Object.hasOwnProperty.call(e,"isScrolling")?!!e.isScrolling:!!t.isScrolling}},{key:"_maybeCallOnScrollbarPresenceChange",value:function(){if(this._scrollbarPresenceChanged){var e=this.props.onScrollbarPresenceChange;this._scrollbarPresenceChanged=!1,e({horizontal:this._horizontalScrollBarSize>0,size:this.state.instanceProps.scrollbarSize,vertical:this._verticalScrollBarSize>0})}}},{key:"scrollToPosition",value:function(e){var r=e.scrollLeft,o=e.scrollTop,i=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:r,scrollTop:o});i&&(i.needToResetStyleCache=!1,this.setState(i))}},{key:"_getCalculatedScrollLeft",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollLeft(e,r)}},{key:"_updateScrollLeftForScrollToColumn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=t._getScrollLeftForScrollToColumnStateUpdate(e,r);if(i)return i.needToResetStyleCache=!1,this.setState(i),e.onScrollToTargetCausedUpdate&&!o&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:i.scrollLeft,scrollTop:i.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),i}},{key:"_getCalculatedScrollTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollTop(e,r)}},{key:"_resetStyleCache",value:function(){var e=this._styleCache,t=this._cellCache,r=this.props.isScrollingOptOut;this._cellCache={},this._styleCache={};for(var o=this._rowStartIndex;o<=this._rowStopIndex;o++)for(var i=this._columnStartIndex;i<=this._columnStopIndex;i++){var a="".concat(o,"-").concat(i);this._styleCache[a]=e[a],r&&(this._cellCache[a]=t[a])}}},{key:"_updateScrollTopForScrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=t._getScrollTopForScrollToRowStateUpdate(e,r);if(i)return i.needToResetStyleCache=!1,this.setState(i),e.onScrollToTargetCausedUpdate&&!o&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:i.scrollLeft,scrollTop:i.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),i}}],[{key:"getDerivedStateFromProps",value:function(e,r){var o,i,a={};0===e.columnCount&&0!==r.scrollLeft||0===e.rowCount&&0!==r.scrollTop?(a.scrollLeft=0,a.scrollTop=0):(e.scrollLeft!==r.scrollLeft&&e.scrollToColumn<0||e.scrollTop!==r.scrollTop&&e.scrollToRow<0)&&Object.assign(a,t._getScrollToPositionStateUpdate({prevState:r,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}));var s=r.instanceProps;return a.needToResetStyleCache=!1,(e.columnWidth!==s.prevColumnWidth||e.rowHeight!==s.prevRowHeight)&&(a.needToResetStyleCache=!0),s.columnSizeAndPositionManager.configure({cellCount:e.columnCount,estimatedCellSize:t._getEstimatedColumnSize(e),cellSizeGetter:t._wrapSizeGetter(e.columnWidth)}),s.rowSizeAndPositionManager.configure({cellCount:e.rowCount,estimatedCellSize:t._getEstimatedRowSize(e),cellSizeGetter:t._wrapSizeGetter(e.rowHeight)}),(0===s.prevColumnCount||0===s.prevRowCount)&&(s.prevColumnCount=0,s.prevRowCount=0),e.autoHeight&&!1===e.isScrolling&&!0===s.prevIsScrolling&&Object.assign(a,{isScrolling:!1}),aX({cellCount:s.prevColumnCount,cellSize:"number"==typeof s.prevColumnWidth?s.prevColumnWidth:null,computeMetadataCallback:function(){return s.columnSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.columnCount,nextCellSize:"number"==typeof e.columnWidth?e.columnWidth:null,nextScrollToIndex:e.scrollToColumn,scrollToIndex:s.prevScrollToColumn,updateScrollOffsetForScrollToIndex:function(){o=t._getScrollLeftForScrollToColumnStateUpdate(e,r)}}),aX({cellCount:s.prevRowCount,cellSize:"number"==typeof s.prevRowHeight?s.prevRowHeight:null,computeMetadataCallback:function(){return s.rowSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.rowCount,nextCellSize:"number"==typeof e.rowHeight?e.rowHeight:null,nextScrollToIndex:e.scrollToRow,scrollToIndex:s.prevScrollToRow,updateScrollOffsetForScrollToIndex:function(){i=t._getScrollTopForScrollToRowStateUpdate(e,r)}}),s.prevColumnCount=e.columnCount,s.prevColumnWidth=e.columnWidth,s.prevIsScrolling=!0===e.isScrolling,s.prevRowCount=e.rowCount,s.prevRowHeight=e.rowHeight,s.prevScrollToColumn=e.scrollToColumn,s.prevScrollToRow=e.scrollToRow,s.scrollbarSize=e.getScrollbarSize(),void 0===s.scrollbarSize?(s.scrollbarSizeMeasured=!1,s.scrollbarSize=0):s.scrollbarSizeMeasured=!0,a.instanceProps=s,sr({},a,{},o,{},i)}},{key:"_getEstimatedColumnSize",value:function(e){return"number"==typeof e.columnWidth?e.columnWidth:e.estimatedColumnSize}},{key:"_getEstimatedRowSize",value:function(e){return"number"==typeof e.rowHeight?e.rowHeight:e.estimatedRowSize}},{key:"_getScrollToPositionStateUpdate",value:function(e){var t=e.prevState,r=e.scrollLeft,o=e.scrollTop,i={scrollPositionChangeReason:so};return("number"==typeof r&&r>=0&&(i.scrollDirectionHorizontal=r>t.scrollLeft?1:-1,i.scrollLeft=r),"number"==typeof o&&o>=0&&(i.scrollDirectionVertical=o>t.scrollTop?1:-1,i.scrollTop=o),"number"==typeof r&&r>=0&&r!==t.scrollLeft||"number"==typeof o&&o>=0&&o!==t.scrollTop)?i:{}}},{key:"_wrapSizeGetter",value:function(e){return"function"==typeof e?e:function(){return e}}},{key:"_getCalculatedScrollLeft",value:function(e,t){var r=e.columnCount,o=e.height,i=e.scrollToAlignment,a=e.scrollToColumn,s=e.width,c=t.scrollLeft,u=t.instanceProps;if(r>0){var h=r-1,d=a<0?h:Math.min(h,a),p=u.rowSizeAndPositionManager.getTotalSize(),f=u.scrollbarSizeMeasured&&p>o?u.scrollbarSize:0;return u.columnSizeAndPositionManager.getUpdatedOffsetForIndex({align:i,containerSize:s-f,currentOffset:c,targetIndex:d})}return 0}},{key:"_getScrollLeftForScrollToColumnStateUpdate",value:function(e,r){var o=r.scrollLeft,i=t._getCalculatedScrollLeft(e,r);return"number"==typeof i&&i>=0&&o!==i?t._getScrollToPositionStateUpdate({prevState:r,scrollLeft:i,scrollTop:-1}):{}}},{key:"_getCalculatedScrollTop",value:function(e,t){var r=e.height,o=e.rowCount,i=e.scrollToAlignment,a=e.scrollToRow,s=e.width,c=t.scrollTop,u=t.instanceProps;if(o>0){var h=o-1,d=a<0?h:Math.min(h,a),p=u.columnSizeAndPositionManager.getTotalSize(),f=u.scrollbarSizeMeasured&&p>s?u.scrollbarSize:0;return u.rowSizeAndPositionManager.getUpdatedOffsetForIndex({align:i,containerSize:r-f,currentOffset:c,targetIndex:d})}return 0}},{key:"_getScrollTopForScrollToRowStateUpdate",value:function(e,r){var o=r.scrollTop,i=t._getCalculatedScrollTop(e,r);return"number"==typeof i&&i>=0&&o!==i?t._getScrollToPositionStateUpdate({prevState:r,scrollLeft:-1,scrollTop:i}):{}}}]),t}(n1.PureComponent),aU(nz,"propTypes",null),nP);function si(e){var t=e.cellCount,r=e.overscanCellsCount,o=e.scrollDirection,i=e.startIndex,a=e.stopIndex;return(r=Math.max(1,r),1===o)?{overscanStartIndex:Math.max(0,i-1),overscanStopIndex:Math.min(t-1,a+r)}:{overscanStartIndex:Math.max(0,i-r),overscanStopIndex:Math.min(t-1,a+1)}}function sa(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}aU(sn,"defaultProps",{"aria-label":"grid","aria-readonly":!0,autoContainerWidth:!1,autoHeight:!1,autoWidth:!1,cellRangeRenderer:function(e){for(var t=e.cellCache,r=e.cellRenderer,o=e.columnSizeAndPositionManager,i=e.columnStartIndex,a=e.columnStopIndex,s=e.deferredMeasurementCache,c=e.horizontalOffsetAdjustment,u=e.isScrolling,h=e.isScrollingOptOut,d=e.parent,p=e.rowSizeAndPositionManager,f=e.rowStartIndex,g=e.rowStopIndex,m=e.styleCache,b=e.verticalOffsetAdjustment,v=e.visibleColumnIndices,w=e.visibleRowIndices,S=[],x=o.areOffsetsAdjusted()||p.areOffsetsAdjusted(),C=!u&&!x,_=f;_<=g;_++)for(var T=p.getSizeAndPositionOfCell(_),E=i;E<=a;E++){var O=o.getSizeAndPositionOfCell(E),$=E>=v.start&&E<=v.stop&&_>=w.start&&_<=w.stop,P="".concat(_,"-").concat(E),D=void 0;C&&m[P]?D=m[P]:s&&!s.has(_,E)?D={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(D={height:T.size,left:O.offset+c,position:"absolute",top:T.offset+b,width:O.size},m[P]=D);var A={columnIndex:E,isScrolling:u,isVisible:$,key:P,parent:d,rowIndex:_,style:D},B=void 0;(h||u)&&!c&&!b?(t[P]||(t[P]=r(A)),B=t[P]):B=r(A),null!=B&&!1!==B&&S.push(B)}return S},containerRole:"rowgroup",containerStyle:{},estimatedColumnSize:100,estimatedRowSize:30,getScrollbarSize:a4,noContentRenderer:function(){return null},onScroll:function(){},onScrollbarPresenceChange:function(){},onSectionRendered:function(){},overscanColumnCount:0,overscanIndicesGetter:function(e){var t=e.cellCount,r=e.overscanCellsCount,o=e.scrollDirection,i=e.startIndex,a=e.stopIndex;return 1===o?{overscanStartIndex:Math.max(0,i),overscanStopIndex:Math.min(t-1,a+r)}:{overscanStartIndex:Math.max(0,i-r),overscanStopIndex:Math.min(t-1,a)}},overscanRowCount:10,role:"grid",scrollingResetTimeInterval:150,scrollToAlignment:"auto",scrollToColumn:-1,scrollToRow:-1,style:{},tabIndex:0,isScrollingOptOut:!1}),aK(sn);var ss=(nA=nD=function(e){function t(){aD(this,t);for(var e,r,o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return aU(aB(r=aW(this,(e=aF(t)).call.apply(e,[this].concat(i)))),"state",{scrollToColumn:0,scrollToRow:0,instanceProps:{prevScrollToColumn:0,prevScrollToRow:0}}),aU(aB(r),"_columnStartIndex",0),aU(aB(r),"_columnStopIndex",0),aU(aB(r),"_rowStartIndex",0),aU(aB(r),"_rowStopIndex",0),aU(aB(r),"_onKeyDown",function(e){var t=r.props,o=t.columnCount,i=t.disabled,a=t.mode,s=t.rowCount;if(!i){var c=r._getScrollState(),u=c.scrollToColumn,h=c.scrollToRow,d=r._getScrollState(),p=d.scrollToColumn,f=d.scrollToRow;switch(e.key){case"ArrowDown":f="cells"===a?Math.min(f+1,s-1):Math.min(r._rowStopIndex+1,s-1);break;case"ArrowLeft":p="cells"===a?Math.max(p-1,0):Math.max(r._columnStartIndex-1,0);break;case"ArrowRight":p="cells"===a?Math.min(p+1,o-1):Math.min(r._columnStopIndex+1,o-1);break;case"ArrowUp":f="cells"===a?Math.max(f-1,0):Math.max(r._rowStartIndex-1,0)}(p!==u||f!==h)&&(e.preventDefault(),r._updateScrollState({scrollToColumn:p,scrollToRow:f}))}}),aU(aB(r),"_onSectionRendered",function(e){var t=e.columnStartIndex,o=e.columnStopIndex,i=e.rowStartIndex,a=e.rowStopIndex;r._columnStartIndex=t,r._columnStopIndex=o,r._rowStartIndex=i,r._rowStopIndex=a}),r}return aj(t,e),aH(t,[{key:"setScrollIndexes",value:function(e){var t=e.scrollToColumn,r=e.scrollToRow;this.setState({scrollToRow:r,scrollToColumn:t})}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,o=this._getScrollState(),i=o.scrollToColumn,a=o.scrollToRow;return n1.createElement("div",{className:t,onKeyDown:this._onKeyDown},r({onSectionRendered:this._onSectionRendered,scrollToColumn:i,scrollToRow:a}))}},{key:"_getScrollState",value:function(){return this.props.isControlled?this.props:this.state}},{key:"_updateScrollState",value:function(e){var t=e.scrollToColumn,r=e.scrollToRow,o=this.props,i=o.isControlled,a=o.onScrollToChange;"function"==typeof a&&a({scrollToColumn:t,scrollToRow:r}),i||this.setState({scrollToColumn:t,scrollToRow:r})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.isControlled?{}:e.scrollToColumn!==t.instanceProps.prevScrollToColumn||e.scrollToRow!==t.instanceProps.prevScrollToRow?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?sa(r,!0).forEach(function(t){aU(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sa(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t,{scrollToColumn:e.scrollToColumn,scrollToRow:e.scrollToRow,instanceProps:{prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow}}):{}}}]),t}(n1.PureComponent),aU(nD,"propTypes",null),nA);function sl(e,t){var r=void 0!==t?t:"undefined"!=typeof window?window:"undefined"!=typeof self?self:nQ.g,o=void 0!==r.document&&r.document.attachEvent;if(!o){var i,a,s=(i=r.requestAnimationFrame||r.mozRequestAnimationFrame||r.webkitRequestAnimationFrame||function(e){return r.setTimeout(e,20)},function(e){return i(e)}),c=(a=r.cancelAnimationFrame||r.mozCancelAnimationFrame||r.webkitCancelAnimationFrame||r.clearTimeout,function(e){return a(e)}),u=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,o=t.lastElementChild,i=r.firstElementChild;o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight,i.style.width=r.offsetWidth+1+"px",i.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},h=function(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&0>e.target.className.indexOf("contract-trigger")&&0>e.target.className.indexOf("expand-trigger"))){var t=this;u(this),this.__resizeRAF__&&c(this.__resizeRAF__),this.__resizeRAF__=s(function(){(t.offsetWidth!=t.__resizeLast__.width||t.offsetHeight!=t.__resizeLast__.height)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach(function(r){r.call(t,e)}))})}},d=!1,p="",f="animationstart",g="Webkit Moz O ms".split(" "),m="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),b=r.document.createElement("fakeelement");if(void 0!==b.style.animationName&&(d=!0),!1===d){for(var v=0;v<g.length;v++)if(void 0!==b.style[g[v]+"AnimationName"]){p="-"+g[v].toLowerCase()+"-",f=m[v],d=!0;break}}var w="resizeanim",S="@"+p+"keyframes "+w+" { from { opacity: 0; } to { opacity: 0; } } ",x=p+"animation: 1ms "+w+"; "}var C=function(t){if(!t.getElementById("detectElementResize")){var r=(S||"")+".resize-triggers { "+(x||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',o=t.head||t.getElementsByTagName("head")[0],i=t.createElement("style");i.id="detectElementResize",i.type="text/css",null!=e&&i.setAttribute("nonce",e),i.styleSheet?i.styleSheet.cssText=r:i.appendChild(t.createTextNode(r)),o.appendChild(i)}};return{addResizeListener:function(e,t){if(o)e.attachEvent("onresize",t);else{if(!e.__resizeTriggers__){var i=e.ownerDocument,a=r.getComputedStyle(e);a&&"static"==a.position&&(e.style.position="relative"),C(i),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=i.createElement("div")).className="resize-triggers";var s='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var c=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return s}});e.__resizeTriggers__.innerHTML=c.createHTML("")}else e.__resizeTriggers__.innerHTML=s;e.appendChild(e.__resizeTriggers__),u(e),e.addEventListener("scroll",h,!0),f&&(e.__resizeTriggers__.__animationListener__=function(t){t.animationName==w&&u(e)},e.__resizeTriggers__.addEventListener(f,e.__resizeTriggers__.__animationListener__))}e.__resizeListeners__.push(t)}},removeResizeListener:function(e,t){if(o)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",h,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(f,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch{}}}}}function sc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}aU(ss,"defaultProps",{disabled:!1,isControlled:!1,mode:"edges",scrollToColumn:0,scrollToRow:0}),aK(ss);var su=(nN=nL=function(e){function t(){aD(this,t);for(var e,r,o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return aU(aB(r=aW(this,(e=aF(t)).call.apply(e,[this].concat(i)))),"state",{height:r.props.defaultHeight||0,width:r.props.defaultWidth||0}),aU(aB(r),"_parentNode",void 0),aU(aB(r),"_autoSizer",void 0),aU(aB(r),"_window",void 0),aU(aB(r),"_detectElementResize",void 0),aU(aB(r),"_onResize",function(){var e=r.props,t=e.disableHeight,o=e.disableWidth,i=e.onResize;if(r._parentNode){var a=r._parentNode.offsetHeight||0,s=r._parentNode.offsetWidth||0,c=(r._window||window).getComputedStyle(r._parentNode)||{},u=parseInt(c.paddingLeft,10)||0,h=parseInt(c.paddingRight,10)||0,d=parseInt(c.paddingTop,10)||0,p=parseInt(c.paddingBottom,10)||0,f=a-d-p,g=s-u-h;(t||r.state.height===f)&&(o||r.state.width===g)||(r.setState({height:a-d-p,width:s-u-h}),i({height:a,width:s}))}}),aU(aB(r),"_setRef",function(e){r._autoSizer=e}),r}return aj(t,e),aH(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=sl(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,o=e.disableHeight,i=e.disableWidth,a=e.style,s=this.state,c=s.height,u=s.width,h={overflow:"visible"},d={};return o||(h.height=0,d.height=c),i||(h.width=0,d.width=u),n1.createElement("div",{className:r,ref:this._setRef,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?sc(r,!0).forEach(function(t){aU(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sc(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},h,{},a)},t(d))}}]),t}(n1.Component),aU(nL,"propTypes",null),nN);aU(su,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}});let sh=(nx={default:()=>nZ,findDOMNode:()=>nZ.findDOMNode,flushSync:()=>nZ.flushSync},nC={},nQ.d(nC,nx),nC);var sd=(nB=nH=function(e){function t(){aD(this,t);for(var e,r,o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return aU(aB(r=aW(this,(e=aF(t)).call.apply(e,[this].concat(i)))),"_child",void 0),aU(aB(r),"_measure",function(){var e=r.props,t=e.cache,o=e.columnIndex,i=void 0===o?0:o,a=e.parent,s=e.rowIndex,c=void 0===s?r.props.index||0:s,u=r._getCellMeasurements(),h=u.height,d=u.width;(h!==t.getHeight(c,i)||d!==t.getWidth(c,i))&&(t.set(c,i,d,h),a&&"function"==typeof a.recomputeGridSize&&a.recomputeGridSize({columnIndex:i,rowIndex:c}))}),aU(aB(r),"_registerChild",function(e){e&&Element,r._child=e,e&&r._maybeMeasureCell()}),r}return aj(t,e),aH(t,[{key:"componentDidMount",value:function(){this._maybeMeasureCell()}},{key:"componentDidUpdate",value:function(){this._maybeMeasureCell()}},{key:"render",value:function(){var e=this.props.children;return"function"==typeof e?e({measure:this._measure,registerChild:this._registerChild}):e}},{key:"_getCellMeasurements",value:function(){var e=this.props.cache,t=this._child||(0,sh.findDOMNode)(this);if(!t||!t.ownerDocument||!t.ownerDocument.defaultView||!(t instanceof t.ownerDocument.defaultView.HTMLElement))return{height:0,width:0};var r=t.style.width,o=t.style.height;e.hasFixedWidth()||(t.style.width="auto"),e.hasFixedHeight()||(t.style.height="auto");var i=Math.ceil(t.offsetHeight),a=Math.ceil(t.offsetWidth);return r&&(t.style.width=r),o&&(t.style.height=o),{height:i,width:a}}},{key:"_maybeMeasureCell",value:function(){var e=this.props,t=e.cache,r=e.columnIndex,o=void 0===r?0:r,i=e.parent,a=e.rowIndex,s=void 0===a?this.props.index||0:a;if(!t.has(s,o)){var c=this._getCellMeasurements(),u=c.height,h=c.width;t.set(s,o,h,u),i&&"function"==typeof i.invalidateCellSizeAfterRender&&i.invalidateCellSizeAfterRender({columnIndex:o,rowIndex:s})}}}]),t}(n1.PureComponent),aU(nH,"propTypes",null),nB);function sp(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}aU(sd,"__internalCellMeasurerFlag",!1);var sf="requested",sg=function(e){function t(){aD(this,t);for(var e,r,o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return aU(aB(r=aW(this,(e=aF(t)).call.apply(e,[this].concat(i)))),"state",{isScrolling:!1,scrollLeft:0,scrollTop:0}),aU(aB(r),"_calculateSizeAndPositionDataOnNextUpdate",!1),aU(aB(r),"_onSectionRenderedMemoizer",a5()),aU(aB(r),"_onScrollMemoizer",a5(!1)),aU(aB(r),"_invokeOnSectionRenderedHelper",function(){var e=r.props,t=e.cellLayoutManager,o=e.onSectionRendered;r._onSectionRenderedMemoizer({callback:o,indices:{indices:t.getLastRenderedIndices()}})}),aU(aB(r),"_setScrollingContainerRef",function(e){r._scrollingContainer=e}),aU(aB(r),"_updateScrollPositionForScrollToCell",function(){var e=r.props,t=e.cellLayoutManager,o=e.height,i=e.scrollToAlignment,a=e.scrollToCell,s=e.width,c=r.state,u=c.scrollLeft,h=c.scrollTop;if(a>=0){var d=t.getScrollPositionForCell({align:i,cellIndex:a,height:o,scrollLeft:u,scrollTop:h,width:s});(d.scrollLeft!==u||d.scrollTop!==h)&&r._setScrollPosition(d)}}),aU(aB(r),"_onScroll",function(e){if(e.target===r._scrollingContainer){r._enablePointerEventsAfterDelay();var t=r.props,o=t.cellLayoutManager,i=t.height,a=t.isScrollingChange,s=t.width,c=r._scrollbarSize,u=o.getTotalSize(),h=u.height,d=u.width,p=Math.max(0,Math.min(d-s+c,e.target.scrollLeft)),f=Math.max(0,Math.min(h-i+c,e.target.scrollTop));if(r.state.scrollLeft!==p||r.state.scrollTop!==f){var g=e.cancelable?"observed":sf;r.state.isScrolling||a(!0),r.setState({isScrolling:!0,scrollLeft:p,scrollPositionChangeReason:g,scrollTop:f})}r._invokeOnScrollMemoizer({scrollLeft:p,scrollTop:f,totalWidth:d,totalHeight:h})}}),r._scrollbarSize=a4(),void 0===r._scrollbarSize?(r._scrollbarSizeMeasured=!1,r._scrollbarSize=0):r._scrollbarSizeMeasured=!0,r}return aj(t,e),aH(t,[{key:"recomputeCellSizesAndPositions",value:function(){this._calculateSizeAndPositionDataOnNextUpdate=!0,this.forceUpdate()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.cellLayoutManager,r=e.scrollLeft,o=e.scrollToCell,i=e.scrollTop;this._scrollbarSizeMeasured||(this._scrollbarSize=a4(),this._scrollbarSizeMeasured=!0,this.setState({})),o>=0?this._updateScrollPositionForScrollToCell():(r>=0||i>=0)&&this._setScrollPosition({scrollLeft:r,scrollTop:i}),this._invokeOnSectionRenderedHelper();var a=t.getTotalSize(),s=a.height,c=a.width;this._invokeOnScrollMemoizer({scrollLeft:r||0,scrollTop:i||0,totalHeight:s,totalWidth:c})}},{key:"componentDidUpdate",value:function(e,t){var r=this.props,o=r.height,i=r.scrollToAlignment,a=r.scrollToCell,s=r.width,c=this.state,u=c.scrollLeft,h=c.scrollPositionChangeReason,d=c.scrollTop;h===sf&&(u>=0&&u!==t.scrollLeft&&u!==this._scrollingContainer.scrollLeft&&(this._scrollingContainer.scrollLeft=u),d>=0&&d!==t.scrollTop&&d!==this._scrollingContainer.scrollTop&&(this._scrollingContainer.scrollTop=d)),(o!==e.height||i!==e.scrollToAlignment||a!==e.scrollToCell||s!==e.width)&&this._updateScrollPositionForScrollToCell(),this._invokeOnSectionRenderedHelper()}},{key:"componentWillUnmount",value:function(){this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoHeight,r=e.cellCount,o=e.cellLayoutManager,i=e.className,a=e.height,s=e.horizontalOverscanSize,c=e.id,u=e.noContentRenderer,h=e.style,d=e.verticalOverscanSize,p=e.width,f=this.state,g=f.isScrolling,m=f.scrollLeft,b=f.scrollTop;(this._lastRenderedCellCount!==r||this._lastRenderedCellLayoutManager!==o||this._calculateSizeAndPositionDataOnNextUpdate)&&(this._lastRenderedCellCount=r,this._lastRenderedCellLayoutManager=o,this._calculateSizeAndPositionDataOnNextUpdate=!1,o.calculateSizeAndPositionData());var v=o.getTotalSize(),w=v.height,S=v.width,x=Math.max(0,m-s),C=Math.max(0,b-d),_=Math.min(S,m+p+s),T=Math.min(w,b+a+d),E=a>0&&p>0?o.cellRenderers({height:T-C,isScrolling:g,width:_-x,x:x,y:C}):[],O={boxSizing:"border-box",direction:"ltr",height:t?"auto":a,position:"relative",WebkitOverflowScrolling:"touch",width:p,willChange:"transform"},$=w>a?this._scrollbarSize:0,P=S>p?this._scrollbarSize:0;return O.overflowX=S+$<=p?"hidden":"auto",O.overflowY=w+P<=a?"hidden":"auto",n1.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:aQ("ReactVirtualized__Collection",i),id:c,onScroll:this._onScroll,role:"grid",style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?sp(r,!0).forEach(function(t){aU(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sp(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},O,{},h),tabIndex:0},r>0&&n1.createElement("div",{className:"ReactVirtualized__Collection__innerScrollContainer",style:{height:w,maxHeight:w,maxWidth:S,overflow:"hidden",pointerEvents:g?"none":"",width:S}},E),0===r&&u())}},{key:"_enablePointerEventsAfterDelay",value:function(){var e=this;this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=setTimeout(function(){(0,e.props.isScrollingChange)(!1),e._disablePointerEventsTimeoutId=null,e.setState({isScrolling:!1})},150)}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,r=e.scrollLeft,o=e.scrollTop,i=e.totalHeight,a=e.totalWidth;this._onScrollMemoizer({callback:function(e){var r=e.scrollLeft,o=e.scrollTop,s=t.props,c=s.height;(0,s.onScroll)({clientHeight:c,clientWidth:s.width,scrollHeight:i,scrollLeft:r,scrollTop:o,scrollWidth:a})},indices:{scrollLeft:r,scrollTop:o}})}},{key:"_setScrollPosition",value:function(e){var t=e.scrollLeft,r=e.scrollTop,o={scrollPositionChangeReason:sf};t>=0&&(o.scrollLeft=t),r>=0&&(o.scrollTop=r),(t>=0&&t!==this.state.scrollLeft||r>=0&&r!==this.state.scrollTop)&&this.setState(o)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return 0===e.cellCount&&(0!==t.scrollLeft||0!==t.scrollTop)?{scrollLeft:0,scrollTop:0,scrollPositionChangeReason:sf}:e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop?e.scrollTop:t.scrollTop,scrollPositionChangeReason:sf}:null}}]),t}(n1.PureComponent);aU(sg,"defaultProps",{"aria-label":"grid",horizontalOverscanSize:0,noContentRenderer:function(){return null},onScroll:function(){return null},onSectionRendered:function(){return null},scrollToAlignment:"auto",scrollToCell:-1,style:{},verticalOverscanSize:0}),sg.propTypes={},aK(sg);var sm=function(){function e(t){var r=t.height,o=t.width,i=t.x,a=t.y;aD(this,e),this.height=r,this.width=o,this.x=i,this.y=a,this._indexMap={},this._indices=[]}return aH(e,[{key:"addCellIndex",value:function(e){var t=e.index;this._indexMap[t]||(this._indexMap[t]=!0,this._indices.push(t))}},{key:"getCellIndices",value:function(){return this._indices}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y," ").concat(this.width,"x").concat(this.height)}}]),e}(),sb=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;aD(this,e),this._sectionSize=t,this._cellMetadata=[],this._sections={}}return aH(e,[{key:"getCellIndices",value:function(e){var t=e.height,r=e.width,o=e.x,i=e.y,a={};return this.getSections({height:t,width:r,x:o,y:i}).forEach(function(e){return e.getCellIndices().forEach(function(e){a[e]=e})}),Object.keys(a).map(function(e){return a[e]})}},{key:"getCellMetadata",value:function(e){var t=e.index;return this._cellMetadata[t]}},{key:"getSections",value:function(e){for(var t=e.height,r=e.width,o=e.x,i=e.y,a=Math.floor(o/this._sectionSize),s=Math.floor((o+r-1)/this._sectionSize),c=Math.floor(i/this._sectionSize),u=Math.floor((i+t-1)/this._sectionSize),h=[],d=a;d<=s;d++)for(var p=c;p<=u;p++){var f="".concat(d,".").concat(p);this._sections[f]||(this._sections[f]=new sm({height:this._sectionSize,width:this._sectionSize,x:d*this._sectionSize,y:p*this._sectionSize})),h.push(this._sections[f])}return h}},{key:"getTotalSectionCount",value:function(){return Object.keys(this._sections).length}},{key:"toString",value:function(){var e=this;return Object.keys(this._sections).map(function(t){return e._sections[t].toString()})}},{key:"registerCell",value:function(e){var t=e.cellMetadatum,r=e.index;this._cellMetadata[r]=t,this.getSections(t).forEach(function(e){return e.addCellIndex({index:r})})}}]),e}();function sv(e){var t=e.align,r=e.cellOffset,o=e.cellSize,i=e.containerSize,a=e.currentOffset,s=r-i+o;switch(void 0===t?"auto":t){case"start":return r;case"end":return s;case"center":return r-(i-o)/2;default:return Math.max(s,Math.min(r,a))}}var sy=function(e){function t(e,r){var o;return aD(this,t),(o=aW(this,aF(t).call(this,e,r)))._cellMetadata=[],o._lastRenderedCellIndices=[],o._cellCache=[],o._isScrollingChange=o._isScrollingChange.bind(aB(o)),o._setCollectionViewRef=o._setCollectionViewRef.bind(aB(o)),o}return aj(t,e),aH(t,[{key:"forceUpdate",value:function(){void 0!==this._collectionView&&this._collectionView.forceUpdate()}},{key:"recomputeCellSizesAndPositions",value:function(){this._cellCache=[],this._collectionView.recomputeCellSizesAndPositions()}},{key:"render",value:function(){var e=aY({},this.props);return n1.createElement(sg,aY({cellLayoutManager:this,isScrollingChange:this._isScrollingChange,ref:this._setCollectionViewRef},e))}},{key:"calculateSizeAndPositionData",value:function(){var e=this.props,t=function(e){for(var t=e.cellCount,r=e.cellSizeAndPositionGetter,o=e.sectionSize,i=[],a=new sb(o),s=0,c=0,u=0;u<t;u++){var h=r({index:u});if(null==h.height||isNaN(h.height)||null==h.width||isNaN(h.width)||null==h.x||isNaN(h.x)||null==h.y||isNaN(h.y))throw Error("Invalid metadata returned for cell ".concat(u,`:
        x:`).concat(h.x,", y:").concat(h.y,", width:").concat(h.width,", height:").concat(h.height));s=Math.max(s,h.y+h.height),c=Math.max(c,h.x+h.width),i[u]=h,a.registerCell({cellMetadatum:h,index:u})}return{cellMetadata:i,height:s,sectionManager:a,width:c}}({cellCount:e.cellCount,cellSizeAndPositionGetter:e.cellSizeAndPositionGetter,sectionSize:e.sectionSize});this._cellMetadata=t.cellMetadata,this._sectionManager=t.sectionManager,this._height=t.height,this._width=t.width}},{key:"getLastRenderedIndices",value:function(){return this._lastRenderedCellIndices}},{key:"getScrollPositionForCell",value:function(e){var t=e.align,r=e.cellIndex,o=e.height,i=e.scrollLeft,a=e.scrollTop,s=e.width,c=this.props.cellCount;if(r>=0&&r<c){var u=this._cellMetadata[r];i=sv({align:t,cellOffset:u.x,cellSize:u.width,containerSize:s,currentOffset:i,targetIndex:r}),a=sv({align:t,cellOffset:u.y,cellSize:u.height,containerSize:o,currentOffset:a,targetIndex:r})}return{scrollLeft:i,scrollTop:a}}},{key:"getTotalSize",value:function(){return{height:this._height,width:this._width}}},{key:"cellRenderers",value:function(e){var t=this,r=e.height,o=e.isScrolling,i=e.width,a=e.x,s=e.y,c=this.props,u=c.cellGroupRenderer,h=c.cellRenderer;return this._lastRenderedCellIndices=this._sectionManager.getCellIndices({height:r,width:i,x:a,y:s}),u({cellCache:this._cellCache,cellRenderer:h,cellSizeAndPositionGetter:function(e){var r=e.index;return t._sectionManager.getCellMetadata({index:r})},indices:this._lastRenderedCellIndices,isScrolling:o})}},{key:"_isScrollingChange",value:function(e){e||(this._cellCache=[])}},{key:"_setCollectionViewRef",value:function(e){this._collectionView=e}}]),t}(n1.PureComponent);function sw(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function sS(e,t){if(e){if("string"==typeof e)return sw(e,t);var r=({}).toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?sw(e,t):void 0}}aU(sy,"defaultProps",{"aria-label":"grid",cellGroupRenderer:function(e){var t=e.cellCache,r=e.cellRenderer,o=e.cellSizeAndPositionGetter,i=e.indices,a=e.isScrolling;return i.map(function(e){var i=o({index:e}),s={index:e,isScrolling:a,key:e,style:{height:i.height,left:i.x,position:"absolute",top:i.y,width:i.width}};return a?(e in t||(t[e]=r(s)),t[e]):r(s)}).filter(function(e){return!!e})}}),sy.propTypes={},function(e){function t(e,r){var o;return aD(this,t),(o=aW(this,aF(t).call(this,e,r)))._registerChild=o._registerChild.bind(aB(o)),o}return aj(t,e),aH(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.columnMaxWidth,o=t.columnMinWidth,i=t.columnCount,a=t.width;(r!==e.columnMaxWidth||o!==e.columnMinWidth||i!==e.columnCount||a!==e.width)&&this._registeredChild&&this._registeredChild.recomputeGridSize()}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.columnMaxWidth,o=e.columnMinWidth,i=e.columnCount,a=e.width,s=r?Math.min(r,a):a,c=a/i;return t({adjustedWidth:Math.min(a,(c=Math.floor(c=Math.min(s,c=Math.max(o||1,c))))*i),columnWidth:c,getColumnWidth:function(){return c},registerChild:this._registerChild})}},{key:"_registerChild",value:function(e){if(e&&"function"!=typeof e.recomputeGridSize)throw Error("Unexpected child type registered; only Grid/MultiGrid children are supported.");this._registeredChild=e,this._registeredChild&&this._registeredChild.recomputeGridSize()}}]),t}(n1.PureComponent).propTypes={};var sx=function(e){function t(e,r){var o;return aD(this,t),(o=aW(this,aF(t).call(this,e,r)))._loadMoreRowsMemoizer=a5(),o._onRowsRendered=o._onRowsRendered.bind(aB(o)),o._registerChild=o._registerChild.bind(aB(o)),o}return aj(t,e),aH(t,[{key:"resetLoadMoreRowsCache",value:function(e){this._loadMoreRowsMemoizer=a5(),e&&this._doStuff(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"render",value:function(){return(0,this.props.children)({onRowsRendered:this._onRowsRendered,registerChild:this._registerChild})}},{key:"_loadUnloadedRanges",value:function(e){var t=this,r=this.props.loadMoreRows;e.forEach(function(e){var o=r(e);o&&o.then(function(){var r,o,i,a,s;o=(r={lastRenderedStartIndex:t._lastRenderedStartIndex,lastRenderedStopIndex:t._lastRenderedStopIndex,startIndex:e.startIndex,stopIndex:e.stopIndex}).lastRenderedStartIndex,i=r.lastRenderedStopIndex,a=r.startIndex,s=r.stopIndex,!(a>i||s<o)&&t._registeredChild&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r="function"==typeof e.recomputeGridSize?e.recomputeGridSize:e.recomputeRowHeights;r?r.call(e,t):e.forceUpdate()}(t._registeredChild,t._lastRenderedStartIndex)})})}},{key:"_onRowsRendered",value:function(e){var t=e.startIndex,r=e.stopIndex;this._lastRenderedStartIndex=t,this._lastRenderedStopIndex=r,this._doStuff(t,r)}},{key:"_doStuff",value:function(e,t){var r,o,i=this,a=this.props,s=a.isRowLoaded,c=a.minimumBatchSize,u=a.rowCount,h=a.threshold,d=function(e){for(var t=e.isRowLoaded,r=e.minimumBatchSize,o=e.rowCount,i=e.startIndex,a=e.stopIndex,s=[],c=null,u=null,h=i;h<=a;h++)t({index:h})?null!==u&&(s.push({startIndex:c,stopIndex:u}),c=u=null):(u=h,null===c&&(c=h));if(null!==u){for(var d=Math.min(Math.max(u,c+r-1),o-1),p=u+1;p<=d;p++)if(t({index:p}))break;else u=p;s.push({startIndex:c,stopIndex:u})}if(s.length)for(var f=s[0];f.stopIndex-f.startIndex+1<r&&f.startIndex>0;){var g=f.startIndex-1;if(t({index:g}))break;f.startIndex=g}return s}({isRowLoaded:s,minimumBatchSize:c,rowCount:u,startIndex:Math.max(0,e-h),stopIndex:Math.min(u-1,t+h)}),p=(o=[]).concat.apply(o,function(e){if(Array.isArray(e))return sw(e)}(r=d.map(function(e){return[e.startIndex,e.stopIndex]}))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||sS(r)||function(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());this._loadMoreRowsMemoizer({callback:function(){i._loadUnloadedRanges(d)},indices:{squashedUnloadedRanges:p}})}},{key:"_registerChild",value:function(e){this._registeredChild=e}}]),t}(n1.PureComponent);aU(sx,"defaultProps",{minimumBatchSize:10,rowCount:0,threshold:15}),sx.propTypes={};var sC=(nF=nW=function(e){function t(){aD(this,t);for(var e,r,o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return aU(aB(r=aW(this,(e=aF(t)).call.apply(e,[this].concat(i)))),"Grid",void 0),aU(aB(r),"_cellRenderer",function(e){var t=e.parent,o=e.rowIndex,i=e.style,a=e.isScrolling,s=e.isVisible,c=e.key,u=r.props.rowRenderer,h=Object.getOwnPropertyDescriptor(i,"width");return h&&h.writable&&(i.width="100%"),u({index:o,style:i,isScrolling:a,isVisible:s,key:c,parent:t})}),aU(aB(r),"_setRef",function(e){r.Grid=e}),aU(aB(r),"_onScroll",function(e){var t=e.clientHeight,o=e.scrollHeight,i=e.scrollTop;(0,r.props.onScroll)({clientHeight:t,scrollHeight:o,scrollTop:i})}),aU(aB(r),"_onScrollToRowCausedUpdate",function(e){var t=e.clientHeight,o=e.scrollHeight,i=e.scrollTop;(0,r.props.onScrollToRowCausedUpdate)({clientHeight:t,scrollHeight:o,scrollTop:i})}),aU(aB(r),"_onSectionRendered",function(e){var t=e.rowOverscanStartIndex,o=e.rowOverscanStopIndex,i=e.rowStartIndex,a=e.rowStopIndex;(0,r.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:o,startIndex:i,stopIndex:a})}),r}return aj(t,e),aH(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,r=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:r,columnIndex:0}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,r=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:r,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,r=e.rowIndex;this.Grid&&this.Grid.recomputeGridSize({rowIndex:void 0===r?0:r,columnIndex:void 0===t?0:t})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e,columnIndex:0})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.noRowsRenderer,o=e.scrollToIndex,i=e.width,a=aQ("ReactVirtualized__List",t);return n1.createElement(sn,aY({},this.props,{autoContainerWidth:!0,cellRenderer:this._cellRenderer,className:a,columnWidth:i,columnCount:1,noContentRenderer:r,onScroll:this._onScroll,onScrollToTargetCausedUpdate:this._onScrollToRowCausedUpdate,onSectionRendered:this._onSectionRendered,ref:this._setRef,scrollToRow:o}))}}]),t}(n1.PureComponent),aU(nW,"propTypes",null),nF);aU(sC,"defaultProps",{autoHeight:!1,estimatedRowSize:30,onScroll:function(){},onScrollToRowCausedUpdate:function(){},noRowsRenderer:function(){return null},onRowsRendered:function(){},overscanIndicesGetter:si,overscanRowCount:10,scrollToAlignment:"auto",scrollToIndex:-1,style:{}});let sk=function(e,t,r,o,i){return"function"==typeof r?function(e,t,r,o,i){for(var a=r+1;t<=r;){var s=t+r>>>1;i(e[s],o)>=0?(a=s,r=s-1):t=s+1}return a}(e,void 0===o?0:0|o,void 0===i?e.length-1:0|i,t,r):function(e,t,r,o){for(var i=r+1;t<=r;){var a=t+r>>>1;e[a]>=o?(i=a,r=a-1):t=a+1}return i}(e,void 0===r?0:0|r,void 0===o?e.length-1:0|o,t)};function s_(e,t,r,o,i){this.mid=e,this.left=t,this.right=r,this.leftPoints=o,this.rightPoints=i,this.count=(t?t.count:0)+(r?r.count:0)+o.length}var sR=s_.prototype;function sT(e,t){e.mid=t.mid,e.left=t.left,e.right=t.right,e.leftPoints=t.leftPoints,e.rightPoints=t.rightPoints,e.count=t.count}function sE(e,t){var r=sL(t);e.mid=r.mid,e.left=r.left,e.right=r.right,e.leftPoints=r.leftPoints,e.rightPoints=r.rightPoints,e.count=r.count}function sM(e,t){var r=e.intervals([]);r.push(t),sE(e,r)}function sO(e,t){var r=e.intervals([]),o=r.indexOf(t);return o<0?0:(r.splice(o,1),sE(e,r),1)}function s$(e,t,r){for(var o=0;o<e.length&&e[o][0]<=t;++o){var i=r(e[o]);if(i)return i}}function sI(e,t,r){for(var o=e.length-1;o>=0&&e[o][1]>=t;--o){var i=r(e[o]);if(i)return i}}function sz(e,t){for(var r=0;r<e.length;++r){var o=t(e[r]);if(o)return o}}function sP(e,t){return e-t}function sD(e,t){return e[0]-t[0]||e[1]-t[1]}function sA(e,t){return e[1]-t[1]||e[0]-t[0]}function sL(e){if(0===e.length)return null;for(var t=[],r=0;r<e.length;++r)t.push(e[r][0],e[r][1]);t.sort(sP);for(var o=t[t.length>>1],i=[],a=[],s=[],r=0;r<e.length;++r){var c=e[r];c[1]<o?i.push(c):o<c[0]?a.push(c):s.push(c)}var u=s.slice();return s.sort(sD),u.sort(sA),new s_(o,sL(i),sL(a),s,u)}function sN(e){this.root=e}sR.intervals=function(e){return e.push.apply(e,this.leftPoints),this.left&&this.left.intervals(e),this.right&&this.right.intervals(e),e},sR.insert=function(e){var t=this.count-this.leftPoints.length;if(this.count+=1,e[1]<this.mid)this.left?4*(this.left.count+1)>3*(t+1)?sM(this,e):this.left.insert(e):this.left=sL([e]);else if(e[0]>this.mid)this.right?4*(this.right.count+1)>3*(t+1)?sM(this,e):this.right.insert(e):this.right=sL([e]);else{var r=sk(this.leftPoints,e,sD),o=sk(this.rightPoints,e,sA);this.leftPoints.splice(r,0,e),this.rightPoints.splice(o,0,e)}},sR.remove=function(e){var t=this.count-this.leftPoints;if(e[1]<this.mid){if(!this.left)return 0;if(4*(this.right?this.right.count:0)>3*(t-1))return sO(this,e);var r=this.left.remove(e);return 2===r?(this.left=null,this.count-=1,1):(1===r&&(this.count-=1),r)}if(e[0]>this.mid){if(!this.right)return 0;if(4*(this.left?this.left.count:0)>3*(t-1))return sO(this,e);var r=this.right.remove(e);return 2===r?(this.right=null,this.count-=1,1):(1===r&&(this.count-=1),r)}if(1===this.count)if(this.leftPoints[0]===e)return 2;else return 0;if(1===this.leftPoints.length&&this.leftPoints[0]===e){if(this.left&&this.right){for(var o=this,i=this.left;i.right;)o=i,i=i.right;if(o===this)i.right=this.right;else{var a=this.left,r=this.right;o.count-=i.count,o.right=i.left,i.left=a,i.right=r}sT(this,i),this.count=(this.left?this.left.count:0)+(this.right?this.right.count:0)+this.leftPoints.length}else this.left?sT(this,this.left):sT(this,this.right);return 1}for(var a=sk(this.leftPoints,e,sD);a<this.leftPoints.length&&this.leftPoints[a][0]===e[0];++a)if(this.leftPoints[a]===e){this.count-=1,this.leftPoints.splice(a,1);for(var r=sk(this.rightPoints,e,sA);r<this.rightPoints.length;++r)if(this.rightPoints[r][1]!==e[1])break;else if(this.rightPoints[r]===e)return this.rightPoints.splice(r,1),1}return 0},sR.queryPoint=function(e,t){if(e<this.mid){if(this.left){var r=this.left.queryPoint(e,t);if(r)return r}return s$(this.leftPoints,e,t)}if(!(e>this.mid))return sz(this.leftPoints,t);if(this.right){var r=this.right.queryPoint(e,t);if(r)return r}return sI(this.rightPoints,e,t)},sR.queryInterval=function(e,t,r){if(e<this.mid&&this.left){var o=this.left.queryInterval(e,t,r);if(o)return o}if(t>this.mid&&this.right){var o=this.right.queryInterval(e,t,r);if(o)return o}return t<this.mid?s$(this.leftPoints,t,r):e>this.mid?sI(this.rightPoints,e,r):sz(this.leftPoints,r)};var sH=sN.prototype;sH.insert=function(e){this.root?this.root.insert(e):this.root=new s_(e[0],null,null,[e],[e])},sH.remove=function(e){if(this.root){var t=this.root.remove(e);return 2===t&&(this.root=null),0!==t}return!1},sH.queryPoint=function(e,t){if(this.root)return this.root.queryPoint(e,t)},sH.queryInterval=function(e,t,r){if(e<=t&&this.root)return this.root.queryInterval(e,t,r)},Object.defineProperty(sH,"count",{get:function(){return this.root?this.root.count:0}}),Object.defineProperty(sH,"intervals",{get:function(){return this.root?this.root.intervals([]):[]}});var sB=function(){function e(){aD(this,e),aU(this,"_columnSizeMap",{}),aU(this,"_intervalTree",new sN(null)),aU(this,"_leftMap",{})}return aH(e,[{key:"estimateTotalHeight",value:function(e,t,r){var o=e-this.count;return this.tallestColumnSize+Math.ceil(o/t)*r}},{key:"range",value:function(e,t,r){var o=this;this._intervalTree.queryInterval(e,e+t,function(e){var t=function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,i,a,s,c=[],u=!0,h=!1;try{for(a=(r=r.call(e)).next;!(u=(o=a.call(r)).done)&&(c.push(o.value),3!==c.length);u=!0);}catch(e){h=!0,i=e}finally{try{if(!u&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(h)throw i}}return c}}(e,0)||sS(e,3)||function(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}(),i=t[0],a=(t[1],t[2]);return r(a,o._leftMap[a],i)})}},{key:"setPosition",value:function(e,t,r,o){this._intervalTree.insert([r,r+o,e]),this._leftMap[e]=t;var i=this._columnSizeMap,a=i[t];void 0===a?i[t]=r+o:i[t]=Math.max(a,r+o)}},{key:"count",get:function(){return this._intervalTree.count}},{key:"shortestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var r in e){var o=e[r];t=0===t?o:Math.min(t,o)}return t}},{key:"tallestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var r in e)t=Math.max(t,e[r]);return t}}]),e}();function sW(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}var sF=(nj=nG=function(e){function t(){aD(this,t);for(var e,r,o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return aU(aB(r=aW(this,(e=aF(t)).call.apply(e,[this].concat(i)))),"state",{isScrolling:!1,scrollTop:0}),aU(aB(r),"_debounceResetIsScrollingId",void 0),aU(aB(r),"_invalidateOnUpdateStartIndex",null),aU(aB(r),"_invalidateOnUpdateStopIndex",null),aU(aB(r),"_positionCache",new sB),aU(aB(r),"_startIndex",null),aU(aB(r),"_startIndexMemoized",null),aU(aB(r),"_stopIndex",null),aU(aB(r),"_stopIndexMemoized",null),aU(aB(r),"_debounceResetIsScrollingCallback",function(){r.setState({isScrolling:!1})}),aU(aB(r),"_setScrollingContainerRef",function(e){r._scrollingContainer=e}),aU(aB(r),"_onScroll",function(e){var t=r.props.height,o=e.currentTarget.scrollTop,i=Math.min(Math.max(0,r._getEstimatedTotalHeight()-t),o);o===i&&(r._debounceResetIsScrolling(),r.state.scrollTop!==i&&r.setState({isScrolling:!0,scrollTop:i}))}),r}return aj(t,e),aH(t,[{key:"clearCellPositions",value:function(){this._positionCache=new sB,this.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.rowIndex;null===this._invalidateOnUpdateStartIndex?(this._invalidateOnUpdateStartIndex=t,this._invalidateOnUpdateStopIndex=t):(this._invalidateOnUpdateStartIndex=Math.min(this._invalidateOnUpdateStartIndex,t),this._invalidateOnUpdateStopIndex=Math.max(this._invalidateOnUpdateStopIndex,t))}},{key:"recomputeCellPositions",value:function(){var e=this._positionCache.count-1;this._positionCache=new sB,this._populatePositionCache(0,e),this.forceUpdate()}},{key:"componentDidMount",value:function(){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback()}},{key:"componentDidUpdate",value:function(e,t){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback(),this.props.scrollTop!==e.scrollTop&&this._debounceResetIsScrolling()}},{key:"componentWillUnmount",value:function(){this._debounceResetIsScrollingId&&a9(this._debounceResetIsScrollingId)}},{key:"render",value:function(){var e,t=this,r=this.props,o=r.autoHeight,i=r.cellCount,a=r.cellMeasurerCache,s=r.cellRenderer,c=r.className,u=r.height,h=r.id,d=r.keyMapper,p=r.overscanByPixels,f=r.role,g=r.style,m=r.tabIndex,b=r.width,v=r.rowDirection,w=this.state,S=w.isScrolling,x=w.scrollTop,C=[],_=this._getEstimatedTotalHeight(),T=this._positionCache.shortestColumnSize,E=this._positionCache.count,O=0;if(this._positionCache.range(Math.max(0,x-p),u+2*p,function(r,o,i){var c;void 0===e?(O=r,e=r):(O=Math.min(O,r),e=Math.max(e,r)),C.push(s({index:r,isScrolling:S,key:d(r),parent:t,style:(aU(c={height:a.getHeight(r)},"ltr"===v?"left":"right",o),aU(c,"position","absolute"),aU(c,"top",i),aU(c,"width",a.getWidth(r)),c)}))}),T<x+u+p&&E<i)for(var $=Math.min(i-E,Math.ceil((x+u+p-T)/a.defaultHeight*b/a.defaultWidth)),P=E;P<E+$;P++)e=P,C.push(s({index:P,isScrolling:S,key:d(P),parent:this,style:{width:a.getWidth(P)}}));return this._startIndex=O,this._stopIndex=e,n1.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:aQ("ReactVirtualized__Masonry",c),id:h,onScroll:this._onScroll,role:f,style:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?sW(r,!0).forEach(function(t){aU(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sW(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({boxSizing:"border-box",direction:"ltr",height:o?"auto":u,overflowX:"hidden",overflowY:_<u?"hidden":"auto",position:"relative",width:b,WebkitOverflowScrolling:"touch",willChange:"transform"},g),tabIndex:m},n1.createElement("div",{className:"ReactVirtualized__Masonry__innerScrollContainer",style:{width:"100%",height:_,maxWidth:"100%",maxHeight:_,overflow:"hidden",pointerEvents:S?"none":"",position:"relative"}},C))}},{key:"_checkInvalidateOnUpdate",value:function(){if("number"==typeof this._invalidateOnUpdateStartIndex){var e=this._invalidateOnUpdateStartIndex,t=this._invalidateOnUpdateStopIndex;this._invalidateOnUpdateStartIndex=null,this._invalidateOnUpdateStopIndex=null,this._populatePositionCache(e,t),this.forceUpdate()}}},{key:"_debounceResetIsScrolling",value:function(){var e=this.props.scrollingResetTimeInterval;this._debounceResetIsScrollingId&&a9(this._debounceResetIsScrollingId),this._debounceResetIsScrollingId=se(this._debounceResetIsScrollingCallback,e)}},{key:"_getEstimatedTotalHeight",value:function(){var e=this.props,t=e.cellCount,r=e.cellMeasurerCache,o=Math.max(1,Math.floor(e.width/r.defaultWidth));return this._positionCache.estimateTotalHeight(t,o,r.defaultHeight)}},{key:"_invokeOnScrollCallback",value:function(){var e=this.props,t=e.height,r=e.onScroll,o=this.state.scrollTop;this._onScrollMemoized!==o&&(r({clientHeight:t,scrollHeight:this._getEstimatedTotalHeight(),scrollTop:o}),this._onScrollMemoized=o)}},{key:"_invokeOnCellsRenderedCallback",value:function(){(this._startIndexMemoized!==this._startIndex||this._stopIndexMemoized!==this._stopIndex)&&((0,this.props.onCellsRendered)({startIndex:this._startIndex,stopIndex:this._stopIndex}),this._startIndexMemoized=this._startIndex,this._stopIndexMemoized=this._stopIndex)}},{key:"_populatePositionCache",value:function(e,t){for(var r=this.props,o=r.cellMeasurerCache,i=r.cellPositioner,a=e;a<=t;a++){var s=i(a),c=s.left,u=s.top;this._positionCache.setPosition(a,c,u,o.getHeight(a))}}}],[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.scrollTop&&t.scrollTop!==e.scrollTop?{isScrolling:!0,scrollTop:e.scrollTop}:null}}]),t}(n1.PureComponent),aU(nG,"propTypes",null),nj);function sG(){}aU(sF,"defaultProps",{autoHeight:!1,keyMapper:function(e){return e},onCellsRendered:sG,onScroll:sG,overscanByPixels:20,role:"grid",scrollingResetTimeInterval:150,style:{},tabIndex:0,rowDirection:"ltr"}),aK(sF);var sj=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};aD(this,e),aU(this,"_cellMeasurerCache",void 0),aU(this,"_columnIndexOffset",void 0),aU(this,"_rowIndexOffset",void 0),aU(this,"columnWidth",function(e){var r=e.index;t._cellMeasurerCache.columnWidth({index:r+t._columnIndexOffset})}),aU(this,"rowHeight",function(e){var r=e.index;t._cellMeasurerCache.rowHeight({index:r+t._rowIndexOffset})});var o=r.cellMeasurerCache,i=r.columnIndexOffset,a=r.rowIndexOffset;this._cellMeasurerCache=o,this._columnIndexOffset=void 0===i?0:i,this._rowIndexOffset=void 0===a?0:a}return aH(e,[{key:"clear",value:function(e,t){this._cellMeasurerCache.clear(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"clearAll",value:function(){this._cellMeasurerCache.clearAll()}},{key:"hasFixedHeight",value:function(){return this._cellMeasurerCache.hasFixedHeight()}},{key:"hasFixedWidth",value:function(){return this._cellMeasurerCache.hasFixedWidth()}},{key:"getHeight",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getHeight(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"getWidth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getWidth(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"has",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.has(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"set",value:function(e,t,r,o){this._cellMeasurerCache.set(e+this._rowIndexOffset,t+this._columnIndexOffset,r,o)}},{key:"defaultHeight",get:function(){return this._cellMeasurerCache.defaultHeight}},{key:"defaultWidth",get:function(){return this._cellMeasurerCache.defaultWidth}}]),e}();function sU(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function sV(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?sU(r,!0).forEach(function(t){aU(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sU(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var sq=function(e){function t(e,r){aD(this,t),aU(aB(o=aW(this,aF(t).call(this,e,r))),"state",{scrollLeft:0,scrollTop:0,scrollbarSize:0,showHorizontalScrollbar:!1,showVerticalScrollbar:!1}),aU(aB(o),"_deferredInvalidateColumnIndex",null),aU(aB(o),"_deferredInvalidateRowIndex",null),aU(aB(o),"_bottomLeftGridRef",function(e){o._bottomLeftGrid=e}),aU(aB(o),"_bottomRightGridRef",function(e){o._bottomRightGrid=e}),aU(aB(o),"_cellRendererBottomLeftGrid",function(e){var t=e.rowIndex,r=a0(e,["rowIndex"]),i=o.props,a=i.cellRenderer,s=i.fixedRowCount;return t===i.rowCount-s?n1.createElement("div",{key:r.key,style:sV({},r.style,{height:20})}):a(sV({},r,{parent:aB(o),rowIndex:t+s}))}),aU(aB(o),"_cellRendererBottomRightGrid",function(e){var t=e.columnIndex,r=e.rowIndex,i=a0(e,["columnIndex","rowIndex"]),a=o.props,s=a.cellRenderer,c=a.fixedColumnCount,u=a.fixedRowCount;return s(sV({},i,{columnIndex:t+c,parent:aB(o),rowIndex:r+u}))}),aU(aB(o),"_cellRendererTopRightGrid",function(e){var t=e.columnIndex,r=a0(e,["columnIndex"]),i=o.props,a=i.cellRenderer,s=i.columnCount,c=i.fixedColumnCount;return t===s-c?n1.createElement("div",{key:r.key,style:sV({},r.style,{width:20})}):a(sV({},r,{columnIndex:t+c,parent:aB(o)}))}),aU(aB(o),"_columnWidthRightGrid",function(e){var t=e.index,r=o.props,i=r.columnCount,a=r.fixedColumnCount,s=r.columnWidth,c=o.state,u=c.scrollbarSize;return c.showHorizontalScrollbar&&t===i-a?u:"function"==typeof s?s({index:t+a}):s}),aU(aB(o),"_onScroll",function(e){var t=e.scrollLeft,r=e.scrollTop;o.setState({scrollLeft:t,scrollTop:r});var i=o.props.onScroll;i&&i(e)}),aU(aB(o),"_onScrollbarPresenceChange",function(e){var t=e.horizontal,r=e.size,i=e.vertical,a=o.state,s=a.showHorizontalScrollbar,c=a.showVerticalScrollbar;if(t!==s||i!==c){o.setState({scrollbarSize:r,showHorizontalScrollbar:t,showVerticalScrollbar:i});var u=o.props.onScrollbarPresenceChange;"function"==typeof u&&u({horizontal:t,size:r,vertical:i})}}),aU(aB(o),"_onScrollLeft",function(e){var t=e.scrollLeft;o._onScroll({scrollLeft:t,scrollTop:o.state.scrollTop})}),aU(aB(o),"_onScrollTop",function(e){var t=e.scrollTop;o._onScroll({scrollTop:t,scrollLeft:o.state.scrollLeft})}),aU(aB(o),"_rowHeightBottomGrid",function(e){var t=e.index,r=o.props,i=r.fixedRowCount,a=r.rowCount,s=r.rowHeight,c=o.state,u=c.scrollbarSize;return c.showVerticalScrollbar&&t===a-i?u:"function"==typeof s?s({index:t+i}):s}),aU(aB(o),"_topLeftGridRef",function(e){o._topLeftGrid=e}),aU(aB(o),"_topRightGridRef",function(e){o._topRightGrid=e});var o,i=e.deferredMeasurementCache,a=e.fixedColumnCount,s=e.fixedRowCount;return o._maybeCalculateCachedStyles(!0),i&&(o._deferredMeasurementCacheBottomLeftGrid=s>0?new sj({cellMeasurerCache:i,columnIndexOffset:0,rowIndexOffset:s}):i,o._deferredMeasurementCacheBottomRightGrid=a>0||s>0?new sj({cellMeasurerCache:i,columnIndexOffset:a,rowIndexOffset:s}):i,o._deferredMeasurementCacheTopRightGrid=a>0?new sj({cellMeasurerCache:i,columnIndexOffset:a,rowIndexOffset:0}):i),o}return aj(t,e),aH(t,[{key:"forceUpdateGrids",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.forceUpdate(),this._bottomRightGrid&&this._bottomRightGrid.forceUpdate(),this._topLeftGrid&&this._topLeftGrid.forceUpdate(),this._topRightGrid&&this._topRightGrid.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,r=void 0===t?0:t,o=e.rowIndex,i=void 0===o?0:o;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,r):r,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,i):i}},{key:"measureAllCells",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.measureAllCells(),this._bottomRightGrid&&this._bottomRightGrid.measureAllCells(),this._topLeftGrid&&this._topLeftGrid.measureAllCells(),this._topRightGrid&&this._topRightGrid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,r=void 0===t?0:t,o=e.rowIndex,i=void 0===o?0:o,a=this.props,s=a.fixedColumnCount,c=a.fixedRowCount,u=Math.max(0,r-s),h=Math.max(0,i-c);this._bottomLeftGrid&&this._bottomLeftGrid.recomputeGridSize({columnIndex:r,rowIndex:h}),this._bottomRightGrid&&this._bottomRightGrid.recomputeGridSize({columnIndex:u,rowIndex:h}),this._topLeftGrid&&this._topLeftGrid.recomputeGridSize({columnIndex:r,rowIndex:i}),this._topRightGrid&&this._topRightGrid.recomputeGridSize({columnIndex:u,rowIndex:i}),this._leftGridWidth=null,this._topGridHeight=null,this._maybeCalculateCachedStyles(!0)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.scrollLeft,r=e.scrollTop;if(t>0||r>0){var o={};t>0&&(o.scrollLeft=t),r>0&&(o.scrollTop=r),this.setState(o)}this._handleInvalidatedGridSize()}},{key:"componentDidUpdate",value:function(){this._handleInvalidatedGridSize()}},{key:"render",value:function(){var e=this.props,t=e.onScroll,r=e.onSectionRendered,o=(e.onScrollbarPresenceChange,e.scrollLeft,e.scrollToColumn),i=(e.scrollTop,e.scrollToRow),a=a0(e,["onScroll","onSectionRendered","onScrollbarPresenceChange","scrollLeft","scrollToColumn","scrollTop","scrollToRow"]);if(this._prepareForRender(),0===this.props.width||0===this.props.height)return null;var s=this.state,c=s.scrollLeft,u=s.scrollTop;return n1.createElement("div",{style:this._containerOuterStyle},n1.createElement("div",{style:this._containerTopStyle},this._renderTopLeftGrid(a),this._renderTopRightGrid(sV({},a,{onScroll:t,scrollLeft:c}))),n1.createElement("div",{style:this._containerBottomStyle},this._renderBottomLeftGrid(sV({},a,{onScroll:t,scrollTop:u})),this._renderBottomRightGrid(sV({},a,{onScroll:t,onSectionRendered:r,scrollLeft:c,scrollToColumn:o,scrollToRow:i,scrollTop:u}))))}},{key:"_getBottomGridHeight",value:function(e){return e.height-this._getTopGridHeight(e)}},{key:"_getLeftGridWidth",value:function(e){var t=e.fixedColumnCount,r=e.columnWidth;if(null==this._leftGridWidth)if("function"==typeof r){for(var o=0,i=0;i<t;i++)o+=r({index:i});this._leftGridWidth=o}else this._leftGridWidth=r*t;return this._leftGridWidth}},{key:"_getRightGridWidth",value:function(e){return e.width-this._getLeftGridWidth(e)}},{key:"_getTopGridHeight",value:function(e){var t=e.fixedRowCount,r=e.rowHeight;if(null==this._topGridHeight)if("function"==typeof r){for(var o=0,i=0;i<t;i++)o+=r({index:i});this._topGridHeight=o}else this._topGridHeight=r*t;return this._topGridHeight}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t}),this.forceUpdate()}}},{key:"_maybeCalculateCachedStyles",value:function(e){var t=this.props,r=t.columnWidth,o=t.enableFixedColumnScroll,i=t.enableFixedRowScroll,a=t.height,s=t.fixedColumnCount,c=t.fixedRowCount,u=t.rowHeight,h=t.style,d=t.styleBottomLeftGrid,p=t.styleBottomRightGrid,f=t.styleTopLeftGrid,g=t.styleTopRightGrid,m=t.width,b=e||a!==this._lastRenderedHeight||m!==this._lastRenderedWidth,v=e||r!==this._lastRenderedColumnWidth||s!==this._lastRenderedFixedColumnCount,w=e||c!==this._lastRenderedFixedRowCount||u!==this._lastRenderedRowHeight;(e||b||h!==this._lastRenderedStyle)&&(this._containerOuterStyle=sV({height:a,overflow:"visible",width:m},h)),(e||b||w)&&(this._containerTopStyle={height:this._getTopGridHeight(this.props),position:"relative",width:m},this._containerBottomStyle={height:a-this._getTopGridHeight(this.props),overflow:"visible",position:"relative",width:m}),(e||d!==this._lastRenderedStyleBottomLeftGrid)&&(this._bottomLeftGridStyle=sV({left:0,overflowX:"hidden",overflowY:o?"auto":"hidden",position:"absolute"},d)),(e||v||p!==this._lastRenderedStyleBottomRightGrid)&&(this._bottomRightGridStyle=sV({left:this._getLeftGridWidth(this.props),position:"absolute"},p)),(e||f!==this._lastRenderedStyleTopLeftGrid)&&(this._topLeftGridStyle=sV({left:0,overflowX:"hidden",overflowY:"hidden",position:"absolute",top:0},f)),(e||v||g!==this._lastRenderedStyleTopRightGrid)&&(this._topRightGridStyle=sV({left:this._getLeftGridWidth(this.props),overflowX:i?"auto":"hidden",overflowY:"hidden",position:"absolute",top:0},g)),this._lastRenderedColumnWidth=r,this._lastRenderedFixedColumnCount=s,this._lastRenderedFixedRowCount=c,this._lastRenderedHeight=a,this._lastRenderedRowHeight=u,this._lastRenderedStyle=h,this._lastRenderedStyleBottomLeftGrid=d,this._lastRenderedStyleBottomRightGrid=p,this._lastRenderedStyleTopLeftGrid=f,this._lastRenderedStyleTopRightGrid=g,this._lastRenderedWidth=m}},{key:"_prepareForRender",value:function(){(this._lastRenderedColumnWidth!==this.props.columnWidth||this._lastRenderedFixedColumnCount!==this.props.fixedColumnCount)&&(this._leftGridWidth=null),(this._lastRenderedFixedRowCount!==this.props.fixedRowCount||this._lastRenderedRowHeight!==this.props.rowHeight)&&(this._topGridHeight=null),this._maybeCalculateCachedStyles(),this._lastRenderedColumnWidth=this.props.columnWidth,this._lastRenderedFixedColumnCount=this.props.fixedColumnCount,this._lastRenderedFixedRowCount=this.props.fixedRowCount,this._lastRenderedRowHeight=this.props.rowHeight}},{key:"_renderBottomLeftGrid",value:function(e){var t=e.enableFixedColumnScroll,r=e.fixedColumnCount,o=e.fixedRowCount,i=e.rowCount,a=e.hideBottomLeftGridScrollbar,s=this.state.showVerticalScrollbar;if(!r)return null;var c=this._getBottomGridHeight(e),u=this._getLeftGridWidth(e),h=this.state.showVerticalScrollbar?this.state.scrollbarSize:0,d=n1.createElement(sn,aY({},e,{cellRenderer:this._cellRendererBottomLeftGrid,className:this.props.classNameBottomLeftGrid,columnCount:r,deferredMeasurementCache:this._deferredMeasurementCacheBottomLeftGrid,height:c,onScroll:t?this._onScrollTop:void 0,ref:this._bottomLeftGridRef,rowCount:Math.max(0,i-o)+ +!!s,rowHeight:this._rowHeightBottomGrid,style:this._bottomLeftGridStyle,tabIndex:null,width:a?u+h:u}));return a?n1.createElement("div",{className:"BottomLeftGrid_ScrollWrapper",style:sV({},this._bottomLeftGridStyle,{height:c,width:u,overflowY:"hidden"})},d):d}},{key:"_renderBottomRightGrid",value:function(e){var t=e.columnCount,r=e.fixedColumnCount,o=e.fixedRowCount,i=e.rowCount,a=e.scrollToColumn,s=e.scrollToRow;return n1.createElement(sn,aY({},e,{cellRenderer:this._cellRendererBottomRightGrid,className:this.props.classNameBottomRightGrid,columnCount:Math.max(0,t-r),columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheBottomRightGrid,height:this._getBottomGridHeight(e),onScroll:this._onScroll,onScrollbarPresenceChange:this._onScrollbarPresenceChange,ref:this._bottomRightGridRef,rowCount:Math.max(0,i-o),rowHeight:this._rowHeightBottomGrid,scrollToColumn:a-r,scrollToRow:s-o,style:this._bottomRightGridStyle,width:this._getRightGridWidth(e)}))}},{key:"_renderTopLeftGrid",value:function(e){var t=e.fixedColumnCount,r=e.fixedRowCount;return t&&r?n1.createElement(sn,aY({},e,{className:this.props.classNameTopLeftGrid,columnCount:t,height:this._getTopGridHeight(e),ref:this._topLeftGridRef,rowCount:r,style:this._topLeftGridStyle,tabIndex:null,width:this._getLeftGridWidth(e)})):null}},{key:"_renderTopRightGrid",value:function(e){var t=e.columnCount,r=e.enableFixedRowScroll,o=e.fixedColumnCount,i=e.fixedRowCount,a=e.scrollLeft,s=e.hideTopRightGridScrollbar,c=this.state,u=c.showHorizontalScrollbar,h=c.scrollbarSize;if(!i)return null;var d=this._getTopGridHeight(e),p=this._getRightGridWidth(e),f=d,g=this._topRightGridStyle;s&&(f=d+(u?h:0),g=sV({},this._topRightGridStyle,{left:0}));var m=n1.createElement(sn,aY({},e,{cellRenderer:this._cellRendererTopRightGrid,className:this.props.classNameTopRightGrid,columnCount:Math.max(0,t-o)+ +!!u,columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheTopRightGrid,height:f,onScroll:r?this._onScrollLeft:void 0,ref:this._topRightGridRef,rowCount:i,scrollLeft:a,style:g,tabIndex:null,width:p}));return s?n1.createElement("div",{className:"TopRightGrid_ScrollWrapper",style:sV({},this._topRightGridStyle,{height:d,width:p,overflowX:"hidden"})},m):m}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft&&e.scrollLeft>=0?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop&&e.scrollTop>=0?e.scrollTop:t.scrollTop}:null}}]),t}(n1.PureComponent);function sZ(e){var t=e.className,r=e.columns,o=e.style;return n1.createElement("div",{className:t,role:"row",style:o},r)}aU(sq,"defaultProps",{classNameBottomLeftGrid:"",classNameBottomRightGrid:"",classNameTopLeftGrid:"",classNameTopRightGrid:"",enableFixedColumnScroll:!1,enableFixedRowScroll:!1,fixedColumnCount:0,fixedRowCount:0,scrollToColumn:-1,scrollToRow:-1,style:{},styleBottomLeftGrid:{},styleBottomRightGrid:{},styleTopLeftGrid:{},styleTopRightGrid:{},hideTopRightGridScrollbar:!1,hideBottomLeftGridScrollbar:!1}),sq.propTypes={},aK(sq),function(e){function t(e,r){var o;return aD(this,t),(o=aW(this,aF(t).call(this,e,r))).state={clientHeight:0,clientWidth:0,scrollHeight:0,scrollLeft:0,scrollTop:0,scrollWidth:0},o._onScroll=o._onScroll.bind(aB(o)),o}return aj(t,e),aH(t,[{key:"render",value:function(){var e=this.props.children,t=this.state,r=t.clientHeight,o=t.clientWidth,i=t.scrollHeight,a=t.scrollLeft,s=t.scrollTop,c=t.scrollWidth;return e({clientHeight:r,clientWidth:o,onScroll:this._onScroll,scrollHeight:i,scrollLeft:a,scrollTop:s,scrollWidth:c})}},{key:"_onScroll",value:function(e){var t=e.clientHeight,r=e.clientWidth,o=e.scrollHeight,i=e.scrollLeft,a=e.scrollTop,s=e.scrollWidth;this.setState({clientHeight:t,clientWidth:r,scrollHeight:o,scrollLeft:i,scrollTop:a,scrollWidth:s})}}]),t}(n1.PureComponent).propTypes={},sZ.propTypes=null;let sK="DESC";function sY(e){var t=e.sortDirection,r=aQ("ReactVirtualized__Table__sortableHeaderIcon",{"ReactVirtualized__Table__sortableHeaderIcon--ASC":"ASC"===t,"ReactVirtualized__Table__sortableHeaderIcon--DESC":t===sK});return n1.createElement("svg",{className:r,width:18,height:18,viewBox:"0 0 24 24"},"ASC"===t?n1.createElement("path",{d:"M7 14l5-5 5 5z"}):n1.createElement("path",{d:"M7 10l5 5 5-5z"}),n1.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}function sQ(e){var t=e.dataKey,r=e.label,o=e.sortBy,i=e.sortDirection,a=[n1.createElement("span",{className:"ReactVirtualized__Table__headerTruncatedText",key:"label",title:"string"==typeof r?r:null},r)];return o===t&&a.push(n1.createElement(sY,{key:"SortIndicator",sortDirection:i})),a}function sX(e){var t=e.className,r=e.columns,o=e.index,i=e.key,a=e.onRowClick,s=e.onRowDoubleClick,c=e.onRowMouseOut,u=e.onRowMouseOver,h=e.onRowRightClick,d=e.rowData,p=e.style,f={"aria-rowindex":o+1};return(a||s||c||u||h)&&(f["aria-label"]="row",f.tabIndex=0,a&&(f.onClick=function(e){return a({event:e,index:o,rowData:d})}),s&&(f.onDoubleClick=function(e){return s({event:e,index:o,rowData:d})}),c&&(f.onMouseOut=function(e){return c({event:e,index:o,rowData:d})}),u&&(f.onMouseOver=function(e){return u({event:e,index:o,rowData:d})}),h&&(f.onContextMenu=function(e){return h({event:e,index:o,rowData:d})})),n1.createElement("div",aY({},f,{className:t,key:i,role:"row",style:p}),r)}sY.propTypes={},sQ.propTypes=null,sX.propTypes=null;var sJ=function(e){function t(){return aD(this,t),aW(this,aF(t).apply(this,arguments))}return aj(t,e),t}(n1.Component);function s0(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function s1(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s0(r,!0).forEach(function(t){aU(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s0(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}aU(sJ,"defaultProps",{cellDataGetter:function(e){var t=e.dataKey,r=e.rowData;return"function"==typeof r.get?r.get(t):r[t]},cellRenderer:function(e){var t=e.cellData;return null==t?"":String(t)},defaultSortDirection:"ASC",flexGrow:0,flexShrink:1,headerRenderer:sQ,style:{}}),sJ.propTypes={};var s5=function(e){function t(e){var r;return aD(this,t),(r=aW(this,aF(t).call(this,e))).state={scrollbarWidth:0},r._createColumn=r._createColumn.bind(aB(r)),r._createRow=r._createRow.bind(aB(r)),r._onScroll=r._onScroll.bind(aB(r)),r._onSectionRendered=r._onSectionRendered.bind(aB(r)),r._setRef=r._setRef.bind(aB(r)),r}return aj(t,e),aH(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,r=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:r}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,r=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:r,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,r=e.rowIndex;this.Grid&&this.Grid.recomputeGridSize({rowIndex:void 0===r?0:r,columnIndex:void 0===t?0:t})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"getScrollbarWidth",value:function(){if(this.Grid){var e=(0,sh.findDOMNode)(this.Grid),t=e.clientWidth||0;return(e.offsetWidth||0)-t}return 0}},{key:"componentDidMount",value:function(){this._setScrollbarWidth()}},{key:"componentDidUpdate",value:function(){this._setScrollbarWidth()}},{key:"render",value:function(){var e=this,t=this.props,r=t.children,o=t.className,i=t.disableHeader,a=t.gridClassName,s=t.gridStyle,c=t.headerHeight,u=t.headerRowRenderer,h=t.height,d=t.id,p=t.noRowsRenderer,f=t.rowClassName,g=t.rowStyle,m=t.scrollToIndex,b=t.style,v=t.width,w=this.state.scrollbarWidth,S="function"==typeof f?f({index:-1}):f,x="function"==typeof g?g({index:-1}):g;return this._cachedColumnStyles=[],n1.Children.toArray(r).forEach(function(t,r){var o=e._getFlexStyleForColumn(t,t.props.style);e._cachedColumnStyles[r]=s1({overflow:"hidden"},o)}),n1.createElement("div",{"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-colcount":n1.Children.toArray(r).length,"aria-rowcount":this.props.rowCount,className:aQ("ReactVirtualized__Table",o),id:d,role:"grid",style:b},!i&&u({className:aQ("ReactVirtualized__Table__headerRow",S),columns:this._getHeaderColumns(),style:s1({height:c,overflow:"hidden",paddingRight:w,width:v},x)}),n1.createElement(sn,aY({},this.props,{"aria-readonly":null,autoContainerWidth:!0,className:aQ("ReactVirtualized__Table__Grid",a),cellRenderer:this._createRow,columnWidth:v,columnCount:1,height:i?h:h-c,id:void 0,noContentRenderer:p,onScroll:this._onScroll,onSectionRendered:this._onSectionRendered,ref:this._setRef,role:"rowgroup",scrollbarWidth:w,scrollToRow:m,style:s1({},s,{overflowX:"hidden"})})))}},{key:"_createColumn",value:function(e){var t=e.column,r=e.columnIndex,o=e.isScrolling,i=e.parent,a=e.rowData,s=e.rowIndex,c=this.props.onColumnClick,u=t.props,h=u.cellDataGetter,d=u.cellRenderer,p=u.className,f=u.columnData,g=u.dataKey,m=u.id,b=d({cellData:h({columnData:f,dataKey:g,rowData:a}),columnData:f,columnIndex:r,dataKey:g,isScrolling:o,parent:i,rowData:a,rowIndex:s}),v=this._cachedColumnStyles[r],w="string"==typeof b?b:null;return n1.createElement("div",{"aria-colindex":r+1,"aria-describedby":m,className:aQ("ReactVirtualized__Table__rowColumn",p),key:"Row"+s+"-Col"+r,onClick:function(e){c&&c({columnData:f,dataKey:g,event:e})},role:"gridcell",style:v,title:w},b)}},{key:"_createHeader",value:function(e){var t,r,o,i,a,s=e.column,c=e.index,u=this.props,h=u.headerClassName,d=u.headerStyle,p=u.onHeaderClick,f=u.sort,g=u.sortBy,m=u.sortDirection,b=s.props,v=b.columnData,w=b.dataKey,S=b.defaultSortDirection,x=b.disableSort,C=b.headerRenderer,_=b.id,T=b.label,E=!x&&f,O=aQ("ReactVirtualized__Table__headerColumn",h,s.props.headerClassName,{ReactVirtualized__Table__sortableHeaderColumn:E}),$=this._getFlexStyleForColumn(s,s1({},d,{},s.props.headerStyle)),P=C({columnData:v,dataKey:w,disableSort:x,label:T,sortBy:g,sortDirection:m});if(E||p){var D=g!==w?S:m===sK?"ASC":sK,A=function(e){E&&f({defaultSortDirection:S,event:e,sortBy:w,sortDirection:D}),p&&p({columnData:v,dataKey:w,event:e})};a=s.props["aria-label"]||T||w,i="none",o=0,t=A,r=function(e){("Enter"===e.key||" "===e.key)&&A(e)}}return g===w&&(i="ASC"===m?"ascending":"descending"),n1.createElement("div",{"aria-label":a,"aria-sort":i,className:O,id:_,key:"Header-Col"+c,onClick:t,onKeyDown:r,role:"columnheader",style:$,tabIndex:o},P)}},{key:"_createRow",value:function(e){var t=this,r=e.rowIndex,o=e.isScrolling,i=e.key,a=e.parent,s=e.style,c=this.props,u=c.children,h=c.onRowClick,d=c.onRowDoubleClick,p=c.onRowRightClick,f=c.onRowMouseOver,g=c.onRowMouseOut,m=c.rowClassName,b=c.rowGetter,v=c.rowRenderer,w=c.rowStyle,S=this.state.scrollbarWidth,x="function"==typeof m?m({index:r}):m,C="function"==typeof w?w({index:r}):w,_=b({index:r}),T=n1.Children.toArray(u).map(function(e,i){return t._createColumn({column:e,columnIndex:i,isScrolling:o,parent:a,rowData:_,rowIndex:r,scrollbarWidth:S})}),E=aQ("ReactVirtualized__Table__row",x),O=s1({},s,{height:this._getRowHeight(r),overflow:"hidden",paddingRight:S},C);return v({className:E,columns:T,index:r,isScrolling:o,key:i,onRowClick:h,onRowDoubleClick:d,onRowRightClick:p,onRowMouseOver:f,onRowMouseOut:g,rowData:_,style:O})}},{key:"_getFlexStyleForColumn",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="".concat(e.props.flexGrow," ").concat(e.props.flexShrink," ").concat(e.props.width,"px"),o=s1({},t,{flex:r,msFlex:r,WebkitFlex:r});return e.props.maxWidth&&(o.maxWidth=e.props.maxWidth),e.props.minWidth&&(o.minWidth=e.props.minWidth),o}},{key:"_getHeaderColumns",value:function(){var e=this,t=this.props,r=t.children;return(t.disableHeader?[]:n1.Children.toArray(r)).map(function(t,r){return e._createHeader({column:t,index:r})})}},{key:"_getRowHeight",value:function(e){var t=this.props.rowHeight;return"function"==typeof t?t({index:e}):t}},{key:"_onScroll",value:function(e){var t=e.clientHeight,r=e.scrollHeight,o=e.scrollTop;(0,this.props.onScroll)({clientHeight:t,scrollHeight:r,scrollTop:o})}},{key:"_onSectionRendered",value:function(e){var t=e.rowOverscanStartIndex,r=e.rowOverscanStopIndex,o=e.rowStartIndex,i=e.rowStopIndex;(0,this.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:r,startIndex:o,stopIndex:i})}},{key:"_setRef",value:function(e){this.Grid=e}},{key:"_setScrollbarWidth",value:function(){var e=this.getScrollbarWidth();this.setState({scrollbarWidth:e})}}]),t}(n1.PureComponent);aU(s5,"defaultProps",{disableHeader:!1,estimatedRowSize:30,headerHeight:0,headerStyle:{},noRowsRenderer:function(){return null},onRowsRendered:function(){return null},onScroll:function(){return null},overscanIndicesGetter:si,overscanRowCount:10,rowRenderer:sX,headerRowRenderer:sZ,rowStyle:{},scrollToAlignment:"auto",scrollToIndex:-1,style:{}}),s5.propTypes={};var s3=[],s6=null,s4=null;function s8(){s4&&(s4=null,document.body&&null!=s6&&(document.body.style.pointerEvents=s6),s6=null)}function s7(){s8(),s3.forEach(function(e){return e.__resetIsScrolling()})}function s9(e){var t;e.currentTarget===window&&null==s6&&document.body&&(s6=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),s4&&a9(s4),t=0,s3.forEach(function(e){t=Math.max(t,e.props.scrollingResetTimeInterval)}),s4=se(s7,t),s3.forEach(function(t){t.props.scrollElement===e.currentTarget&&t.__handleWindowScrollEvent()})}function le(e,t){s3.some(function(e){return e.props.scrollElement===t})||t.addEventListener("scroll",s9),s3.push(e)}function ln(e,t){!(s3=s3.filter(function(t){return t!==e})).length&&(t.removeEventListener("scroll",s9),s4&&(a9(s4),s8()))}var li=function(e){return e===window},la=function(e){return e.getBoundingClientRect()};function ls(e,t){if(!e)return{height:t.serverHeight,width:t.serverWidth};if(!li(e))return la(e);var r=window,o=r.innerHeight,i=r.innerWidth;return{height:"number"==typeof o?o:0,width:"number"==typeof i?i:0}}function ll(e){return li(e)&&document.documentElement?{top:"scrollY"in window?window.scrollY:document.documentElement.scrollTop,left:"scrollX"in window?window.scrollX:document.documentElement.scrollLeft}:{top:e.scrollTop,left:e.scrollLeft}}function lc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}var lu=function(){return"undefined"!=typeof window?window:void 0},lh=(nV=nU=function(e){function t(){aD(this,t);for(var e,r,o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return aU(aB(r=aW(this,(e=aF(t)).call.apply(e,[this].concat(i)))),"_window",lu()),aU(aB(r),"_isMounted",!1),aU(aB(r),"_positionFromTop",0),aU(aB(r),"_positionFromLeft",0),aU(aB(r),"_detectElementResize",void 0),aU(aB(r),"_child",void 0),aU(aB(r),"state",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?lc(r,!0).forEach(function(t){aU(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):lc(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},ls(r.props.scrollElement,r.props),{isScrolling:!1,scrollLeft:0,scrollTop:0})),aU(aB(r),"_registerChild",function(e){e&&Element,r._child=e,r.updatePosition()}),aU(aB(r),"_onChildScroll",function(e){var t=e.scrollTop;if(r.state.scrollTop!==t){var o=r.props.scrollElement;o&&("function"==typeof o.scrollTo?o.scrollTo(0,t+r._positionFromTop):o.scrollTop=t+r._positionFromTop)}}),aU(aB(r),"_registerResizeListener",function(e){e===window?window.addEventListener("resize",r._onResize,!1):r._detectElementResize.addResizeListener(e,r._onResize)}),aU(aB(r),"_unregisterResizeListener",function(e){e===window?window.removeEventListener("resize",r._onResize,!1):e&&r._detectElementResize.removeResizeListener(e,r._onResize)}),aU(aB(r),"_onResize",function(){r.updatePosition()}),aU(aB(r),"__handleWindowScrollEvent",function(){if(r._isMounted){var e=r.props.onScroll,t=r.props.scrollElement;if(t){var o=ll(t),i=Math.max(0,o.left-r._positionFromLeft),a=Math.max(0,o.top-r._positionFromTop);r.setState({isScrolling:!0,scrollLeft:i,scrollTop:a}),e({scrollLeft:i,scrollTop:a})}}}),aU(aB(r),"__resetIsScrolling",function(){r.setState({isScrolling:!1})}),r}return aj(t,e),aH(t,[{key:"updatePosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollElement,t=this.props.onResize,r=this.state,o=r.height,i=r.width,a=this._child||sh.findDOMNode(this);if(a instanceof Element&&e){var s=function(e,t){if(li(t)&&document.documentElement){var r=document.documentElement,o=la(e),i=la(r);return{top:o.top-i.top,left:o.left-i.left}}var a=ll(t),s=la(e),c=la(t);return{top:s.top+a.top-c.top,left:s.left+a.left-c.left}}(a,e);this._positionFromTop=s.top,this._positionFromLeft=s.left}var c=ls(e,this.props);(o!==c.height||i!==c.width)&&(this.setState({height:c.height,width:c.width}),t({height:c.height,width:c.width}))}},{key:"componentDidMount",value:function(){var e=this.props.scrollElement;this._detectElementResize=sl(),this.updatePosition(e),e&&(le(this,e),this._registerResizeListener(e)),this._isMounted=!0}},{key:"componentDidUpdate",value:function(e,t){var r=this.props.scrollElement,o=e.scrollElement;o!==r&&null!=o&&null!=r&&(this.updatePosition(r),ln(this,o),le(this,r),this._unregisterResizeListener(o),this._registerResizeListener(r))}},{key:"componentWillUnmount",value:function(){var e=this.props.scrollElement;e&&(ln(this,e),this._unregisterResizeListener(e)),this._isMounted=!1}},{key:"render",value:function(){var e=this.props.children,t=this.state,r=t.isScrolling,o=t.scrollTop,i=t.scrollLeft,a=t.height,s=t.width;return e({onChildScroll:this._onChildScroll,registerChild:this._registerChild,height:a,isScrolling:r,scrollLeft:i,scrollTop:o,width:s})}}]),t}(n1.PureComponent),aU(nU,"propTypes",null),nV);aU(lh,"defaultProps",{onResize:function(){},onScroll:function(){},scrollingResetTimeInterval:150,scrollElement:lu(),serverHeight:0,serverWidth:0});var lp=nQ(848),lg=function(){return(lg=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},lm={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},lb={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},lv={width:"20px",height:"20px",position:"absolute",zIndex:1},ly={top:lg(lg({},lm),{top:"-5px"}),right:lg(lg({},lb),{left:void 0,right:"-5px"}),bottom:lg(lg({},lm),{top:void 0,bottom:"-5px"}),left:lg(lg({},lb),{left:"-5px"}),topRight:lg(lg({},lv),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:lg(lg({},lv),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:lg(lg({},lv),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:lg(lg({},lv),{left:"-10px",top:"-10px",cursor:"nw-resize"})},lw=(0,n1.memo)(function(e){var t=e.onResizeStart,r=e.direction,o=e.children,i=e.replaceStyles,a=e.className,s=(0,n1.useCallback)(function(e){t(e,r)},[t,r]),c=(0,n1.useCallback)(function(e){t(e,r)},[t,r]),u=(0,n1.useMemo)(function(){return lg(lg({position:"absolute",userSelect:"none"},ly[r]),null!=i?i:{})},[i,r]);return(0,lp.jsx)("div",{className:a||void 0,style:u,onMouseDown:s,onTouchStart:c,children:o})}),lS=(nk=function(e,t){return(nk=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}nk(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),lx=function(){return(lx=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},lk={width:"auto",height:"auto"},l_=function(e,t,r){return Math.max(Math.min(e,r),t)},lR=function(e,t,r){var o=Math.round(e/t);return o*t+r*(o-1)},lT=function(e,t){return RegExp(e,"i").test(t)},lE=function(e){return!!(e.touches&&e.touches.length)},lM=function(e,t,r){void 0===r&&(r=0);var o=t.reduce(function(r,o,i){return Math.abs(o-e)<Math.abs(t[r]-e)?i:r},0),i=Math.abs(t[o]-e);return 0===r||i<r?t[o]:e},lO=function(e){return"auto"===(e=e.toString())||e.endsWith("px")||e.endsWith("%")||e.endsWith("vh")||e.endsWith("vw")||e.endsWith("vmax")||e.endsWith("vmin")?e:"".concat(e,"px")},l$=function(e,t,r,o){if(e&&"string"==typeof e){if(e.endsWith("px"))return Number(e.replace("px",""));if(e.endsWith("%")){var i=Number(e.replace("%",""))/100;return t*i}if(e.endsWith("vw")){var i=Number(e.replace("vw",""))/100;return r*i}if(e.endsWith("vh")){var i=Number(e.replace("vh",""))/100;return o*i}}return e},lz=["as","ref","style","className","grid","gridGap","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],lP="__resizable_base__",lD=function(e){function t(t){var r,o,i,a,s=e.call(this,t)||this;return s.ratio=1,s.resizable=null,s.parentLeft=0,s.parentTop=0,s.resizableLeft=0,s.resizableRight=0,s.resizableTop=0,s.resizableBottom=0,s.targetLeft=0,s.targetTop=0,s.delta={width:0,height:0},s.appendBase=function(){if(!s.resizable||!s.window)return null;var e=s.parentNode;if(!e)return null;var t=s.window.document.createElement("div");return t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.transform="scale(0, 0)",t.style.left="0",t.style.flex="0 0 100%",t.classList?t.classList.add(lP):t.className+=lP,e.appendChild(t),t},s.removeBase=function(e){var t=s.parentNode;t&&t.removeChild(e)},s.state={isResizing:!1,width:null!=(o=null==(r=s.propsSize)?void 0:r.width)?o:"auto",height:null!=(a=null==(i=s.propsSize)?void 0:i.height)?a:"auto",direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},s.onResizeStart=s.onResizeStart.bind(s),s.onMouseMove=s.onMouseMove.bind(s),s.onMouseUp=s.onMouseUp.bind(s),s}return lS(t,e),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||lk},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var e=0,t=0;if(this.resizable&&this.window){var r=this.resizable.offsetWidth,o=this.resizable.offsetHeight,i=this.resizable.style.position;"relative"!==i&&(this.resizable.style.position="relative"),e="auto"!==this.resizable.style.width?this.resizable.offsetWidth:r,t="auto"!==this.resizable.style.height?this.resizable.offsetHeight:o,this.resizable.style.position=i}return{width:e,height:t}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var e=this,t=this.props.size,r=function(t){var r;if(void 0===e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&(null==(r=e.propsSize[t])?void 0:r.toString().endsWith("%"))){if(e.state[t].toString().endsWith("%"))return e.state[t].toString();var o=e.getParentSize(),i=Number(e.state[t].toString().replace("px",""))/o[t]*100;return"".concat(i,"%")}return lO(e.state[t])};return{width:t&&void 0!==t.width&&!this.state.isResizing?lO(t.width):r("width"),height:t&&void 0!==t.height&&!this.state.isResizing?lO(t.height):r("height")}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var e=this.appendBase();if(!e)return{width:0,height:0};var t=!1,r=this.parentNode.style.flexWrap;"wrap"!==r&&(t=!0,this.parentNode.style.flexWrap="wrap"),e.style.position="relative",e.style.minWidth="100%",e.style.minHeight="100%";var o={width:e.offsetWidth,height:e.offsetHeight};return t&&(this.parentNode.style.flexWrap=r),this.removeBase(e),o},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(this.resizable&&this.window){var e=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==e.flexBasis?e.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(e,t){var r=this.propsSize&&this.propsSize[t];return"auto"===this.state[t]&&this.state.original[t]===e&&(void 0===r||"auto"===r)?"auto":e},t.prototype.calculateNewMaxFromBoundary=function(e,t){var r,o,i=this.props.boundsByDirection,a=this.state.direction,s=i&&lT("left",a),c=i&&lT("top",a);if("parent"===this.props.bounds){var u=this.parentNode;u&&(r=s?this.resizableRight-this.parentLeft:u.offsetWidth+(this.parentLeft-this.resizableLeft),o=c?this.resizableBottom-this.parentTop:u.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(r=s?this.resizableRight:this.window.innerWidth-this.resizableLeft,o=c?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(r=s?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),o=c?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return r&&Number.isFinite(r)&&(e=e&&e<r?e:r),o&&Number.isFinite(o)&&(t=t&&t<o?t:o),{maxWidth:e,maxHeight:t}},t.prototype.calculateNewSizeFromDirection=function(e,t){var r,o=this.props.scale||1,i=Array.isArray(r=this.props.resizeRatio||1)?r:[r,r],a=i[0],s=i[1],c=this.state,u=c.direction,h=c.original,d=this.props,p=d.lockAspectRatio,f=d.lockAspectRatioExtraHeight,g=d.lockAspectRatioExtraWidth,m=h.width,b=h.height,v=f||0,w=g||0;return lT("right",u)&&(m=h.width+(e-h.x)*a/o,p&&(b=(m-w)/this.ratio+v)),lT("left",u)&&(m=h.width-(e-h.x)*a/o,p&&(b=(m-w)/this.ratio+v)),lT("bottom",u)&&(b=h.height+(t-h.y)*s/o,p&&(m=(b-v)*this.ratio+w)),lT("top",u)&&(b=h.height-(t-h.y)*s/o,p&&(m=(b-v)*this.ratio+w)),{newWidth:m,newHeight:b}},t.prototype.calculateNewSizeFromAspectRatio=function(e,t,r,o){var i=this.props,a=i.lockAspectRatio,s=i.lockAspectRatioExtraHeight,c=i.lockAspectRatioExtraWidth,u=void 0===o.width?10:o.width,h=void 0===r.width||r.width<0?e:r.width,d=void 0===o.height?10:o.height,p=void 0===r.height||r.height<0?t:r.height,f=s||0,g=c||0;if(a){var m=(d-f)*this.ratio+g,b=(p-f)*this.ratio+g,v=(u-g)/this.ratio+f,w=(h-g)/this.ratio+f,S=Math.max(d,v),x=Math.min(p,w);e=l_(e,Math.max(u,m),Math.min(h,b)),t=l_(t,S,x)}else e=l_(e,u,h),t=l_(t,d,p);return{newWidth:e,newHeight:t}},t.prototype.setBoundingClientRect=function(){var e=1/(this.props.scale||1);if("parent"===this.props.bounds){var t=this.parentNode;if(t){var r=t.getBoundingClientRect();this.parentLeft=r.left*e,this.parentTop=r.top*e}}if(this.props.bounds&&"string"!=typeof this.props.bounds){var o=this.props.bounds.getBoundingClientRect();this.targetLeft=o.left*e,this.targetTop=o.top*e}if(this.resizable){var i=this.resizable.getBoundingClientRect(),a=i.left,s=i.top,c=i.right,u=i.bottom;this.resizableLeft=a*e,this.resizableRight=c*e,this.resizableTop=s*e,this.resizableBottom=u*e}},t.prototype.onResizeStart=function(e,t){if(this.resizable&&this.window){var r,o,i=0,a=0;if(e.nativeEvent&&((r=e.nativeEvent).clientX||0===r.clientX)&&(r.clientY||0===r.clientY)?(i=e.nativeEvent.clientX,a=e.nativeEvent.clientY):e.nativeEvent&&lE(e.nativeEvent)&&(i=e.nativeEvent.touches[0].clientX,a=e.nativeEvent.touches[0].clientY),!this.props.onResizeStart||!this.resizable||!1!==this.props.onResizeStart(e,t,this.resizable)){this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var s=this.window.getComputedStyle(this.resizable);if("auto"!==s.flexBasis){var c=this.parentNode;if(c){var u=this.window.getComputedStyle(c).flexDirection;this.flexDir=u.startsWith("row")?"row":"column",o=s.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var h={original:{x:i,y:a,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:lx(lx({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(e.target).cursor||"auto"}),direction:t,flexBasis:o};this.setState(h)}}},t.prototype.onMouseMove=function(e){var t=this;if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&lE(e))try{e.preventDefault(),e.stopPropagation()}catch(e){}var r,o,i,a,s,c,u=this.props,h=u.maxWidth,d=u.maxHeight,p=u.minWidth,f=u.minHeight,g=lE(e)?e.touches[0].clientX:e.clientX,m=lE(e)?e.touches[0].clientY:e.clientY,b=this.state,v=b.direction,w=b.original,S=b.width,x=b.height,C=this.getParentSize(),_=(r=this.window.innerWidth,o=this.window.innerHeight,i=h,a=d,s=p,c=f,i=l$(i,C.width,r,o),a=l$(a,C.height,r,o),s=l$(s,C.width,r,o),c=l$(c,C.height,r,o),{maxWidth:void 0===i?void 0:Number(i),maxHeight:void 0===a?void 0:Number(a),minWidth:void 0===s?void 0:Number(s),minHeight:void 0===c?void 0:Number(c)});h=_.maxWidth,d=_.maxHeight,p=_.minWidth,f=_.minHeight;var T=this.calculateNewSizeFromDirection(g,m),E=T.newHeight,O=T.newWidth,$=this.calculateNewMaxFromBoundary(h,d);this.props.snap&&this.props.snap.x&&(O=lM(O,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(E=lM(E,this.props.snap.y,this.props.snapGap));var P=this.calculateNewSizeFromAspectRatio(O,E,{width:$.maxWidth,height:$.maxHeight},{width:p,height:f});if(O=P.newWidth,E=P.newHeight,this.props.grid){var D=lR(O,this.props.grid[0],this.props.gridGap?this.props.gridGap[0]:0),A=lR(E,this.props.grid[1],this.props.gridGap?this.props.gridGap[1]:0),B=this.props.snapGap||0,W=0===B||Math.abs(D-O)<=B?D:O,F=0===B||Math.abs(A-E)<=B?A:E;O=W,E=F}var G={width:O-w.width,height:E-w.height};if(this.delta=G,S&&"string"==typeof S){if(S.endsWith("%")){var j=O/C.width*100;O="".concat(j,"%")}else if(S.endsWith("vw")){var U=O/this.window.innerWidth*100;O="".concat(U,"vw")}else if(S.endsWith("vh")){var V=O/this.window.innerHeight*100;O="".concat(V,"vh")}}if(x&&"string"==typeof x){if(x.endsWith("%")){var j=E/C.height*100;E="".concat(j,"%")}else if(x.endsWith("vw")){var U=E/this.window.innerWidth*100;E="".concat(U,"vw")}else if(x.endsWith("vh")){var V=E/this.window.innerHeight*100;E="".concat(V,"vh")}}var Z={width:this.createSizeForCssProperty(O,"width"),height:this.createSizeForCssProperty(E,"height")};"row"===this.flexDir?Z.flexBasis=Z.width:"column"===this.flexDir&&(Z.flexBasis=Z.height);var K=this.state.width!==Z.width,Q=this.state.height!==Z.height,X=this.state.flexBasis!==Z.flexBasis,J=K||Q||X;J&&(0,sh.flushSync)(function(){t.setState(Z)}),this.props.onResize&&J&&this.props.onResize(e,v,this.resizable,G)}},t.prototype.onMouseUp=function(e){var t,r,o=this.state,i=o.isResizing,a=o.direction;o.original,i&&this.resizable&&(this.props.onResizeStop&&this.props.onResizeStop(e,a,this.resizable,this.delta),this.props.size&&this.setState({width:null!=(t=this.props.size.width)?t:"auto",height:null!=(r=this.props.size.height)?r:"auto"}),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:lx(lx({},this.state.backgroundStyle),{cursor:"auto"})}))},t.prototype.updateSize=function(e){var t,r;this.setState({width:null!=(t=e.width)?t:"auto",height:null!=(r=e.height)?r:"auto"})},t.prototype.renderResizer=function(){var e=this,t=this.props,r=t.enable,o=t.handleStyles,i=t.handleClasses,a=t.handleWrapperStyle,s=t.handleWrapperClass,c=t.handleComponent;if(!r)return null;var u=Object.keys(r).map(function(t){return!1!==r[t]?(0,lp.jsx)(lw,{direction:t,onResizeStart:e.onResizeStart,replaceStyles:o&&o[t],className:i&&i[t],children:c&&c[t]?c[t]:null},t):null});return(0,lp.jsx)("div",{className:s,style:a,children:u})},t.prototype.render=function(){var e=this,t=Object.keys(this.props).reduce(function(t,r){return -1!==lz.indexOf(r)||(t[r]=e.props[r]),t},{}),r=lx(lx(lx({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(r.flexBasis=this.state.flexBasis);var o=this.props.as||"div";return(0,lp.jsxs)(o,lx({style:r,className:this.props.className},t,{ref:function(t){t&&(e.resizable=t)},children:[this.state.isResizing&&(0,lp.jsx)("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer()]}))},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],gridGap:[0,0],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(n1.PureComponent);let lL={top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},lN={min:0,max:1/0},lH=({height:e,heightConstraints:t,width:r,widthConstraints:o})=>({height:n8(e,t.min,t.max),width:n8(r,o.min,o.max)}),lB=({enable:e,height:t,heightConstraints:r,resizeEdge:o,width:i=0,widthConstraints:a})=>({...lH({height:t,widthConstraints:a,heightConstraints:r,width:i}),enable:void 0===e||e,horizontal:"left"===o||"right"===o,initialHeight:t,initialWidth:i,resizing:!1,isMouseWheeling:!1,vertical:"top"===o||"bottom"===o});let iO=class iO extends n1.default.PureComponent{static defaultProps={className:"",enable:!0,heightConstraints:lN,resizeContentClassName:"",resizeHandleClassName:"",style:{},wrapperStyle:{},translate:()=>"",wrapChildrenInDivContainer:!0,widthConstraints:lN};onWheelTimeOut;isMouseWheeling=!1;constructor(e){super(e),this.state=lB(e)}static getDerivedStateFromProps(e,t){return t.resizing?t:lB(e)}componentDidUpdate(e){let{onResizeFromPropChange:t}=this.props,{height:r,resizing:o,width:i}=this.state,{onResizeFromPropChange:a}=e;if(o)return;let{height:s,width:c}=this.state,u=a||t;u&&(s!==r||c!==i)&&u({height:s,width:c,originalHeight:r,originalWidth:i})}_onResize=(e,t,r,{height:o,width:i})=>{let{onResize:a}=this.props,{height:s,horizontal:c,vertical:u,width:h}=this.state,{height:d,width:p}=(({deltaWidth:e,deltaHeight:t},{heightConstraints:r,widthConstraints:o},{initialHeight:i,initialWidth:a})=>lH({height:i+t,heightConstraints:r,width:a+e,widthConstraints:o}))({deltaWidth:i,deltaHeight:o},this.props,this.state),f=c&&p!==h,g=u&&d!==s;(f||g)&&(this.setState({height:g?d:s,width:f?p:h,isMouseWheeling:!1}),a&&a({height:g?d:void 0,width:f?p:void 0}))};_onResizeStart=e=>{e.preventDefault(),e.stopPropagation();let{onResizeStart:t}=this.props,{height:r,horizontal:o,vertical:i,width:a}=this.state;this.setState({resizing:!0}),t&&t({height:i?r:void 0,width:o?a:void 0})};_onResizeEnd=()=>{let{onResizeEnd:e}=this.props,{height:t,horizontal:r,vertical:o,width:i,initialWidth:a,initialHeight:s}=this.state;this.setState({initialWidth:i,initialHeight:t,resizing:!1}),(a!==i||s!==t)&&e&&e({width:r?i:void 0,height:o?t:void 0})};_onWheel=()=>{this.isMouseWheeling||(this.isMouseWheeling=!0,this.setState({isMouseWheeling:!0})),clearTimeout(this.onWheelTimeOut),this.onWheelTimeOut=setTimeout(()=>{this.isMouseWheeling=!1,this.setState({isMouseWheeling:!1})},50)};render(){let{children:e,className:t,handleStyles:r,id:o,resizeContentClassName:i,resizeEdge:a,resizeHandleClassName:s,style:c,translate:u,heightConstraints:h,wrapChildrenInDivContainer:d,widthConstraints:p}=this.props,{enable:f,height:g,horizontal:m,resizing:b,vertical:v,width:w,isMouseWheeling:S}=this.state,{display:x,...C}=c,{min:_,max:T}=p,{min:E,max:O}=h,$={...this.props.wrapperStyle};m&&($.width=w,$.minWidth=w),v&&($.height=g,$.minHeight=g);let P=n0()("resizable",t,{resizing:b}),D=n0()("contents",i,`resize-edge-${a}`,{horizontal:m,vertical:v}),A=n0()(a,s,"resizable-handle",{horizontal:m,vertical:v}),B=n1.default.createElement("span",{title:u("ResizePanel")});return n1.default.createElement("div",{"data-testid":`resizable-${o||""}`,onWheel:this._onWheel,style:{...$,display:x}},n1.default.createElement(lD,{className:P,"data-testid":`resizable-core-${o||""}`,enable:{...lL,[a]:!S&&f},handleClasses:{[a]:A},handleComponent:{[a]:B},handleStyles:r,maxHeight:v?O:void 0,maxWidth:m?T:void 0,minHeight:v?E:void 0,minWidth:m?_:void 0,onResize:this._onResize,onResizeStart:this._onResizeStart,onResizeStop:this._onResizeEnd,size:{height:v?g:"100%",width:m?w:"100%"},style:C},d?n1.default.createElement("div",{className:D,style:{userSelect:"none"}},e):e))}};let iz=class iz extends n1.default.PureComponent{canvas;componentDidMount(){this.updateCanvas()}componentDidUpdate(e){(e.branchUpstreamRowIndices!==this.props.branchUpstreamRowIndices||e.markerRowIndices!==this.props.markerRowIndices||e.totalRows!==this.props.totalRows||e.viewportHeight!==this.props.viewportHeight||e.viewportWidth!==this.props.viewportWidth||e.markerColors!==this.props.markerColors||e.enabledScrollMarkerTypes!==this.props.enabledScrollMarkerTypes||e.scrollWidth!==this.props.scrollWidth)&&this.updateCanvas()}updateCanvas(e){let{branchUpstreamRowIndices:t,enabledScrollMarkerTypes:r,viewportHeight:o,markerRowIndices:i,markerColors:a,scrollWidth:s,totalRows:c}=e||this.props,u=this.canvas.getContext("2d");u.canvas.width=s,u.canvas.height=o;let h=s/3;for(let[e,s]of(u.clearRect(0,0,u.canvas.width,u.canvas.height),Object.entries(ik))){if(!r.includes(e)&&!("remoteBranches"===e&&r.includes("localBranches")))continue;let d="remoteBranches"!==e||r.includes("remoteBranches")?i[e]||[]:t,p=a[e],f=s.lanes;p&&d.length&&(u.fillStyle=p,d.forEach(t=>{let{height:r,offset:i}=function(e,t,r){let o=28*t,{shape:i}=ik[e],a=iC[i];if(!a)return{height:0,offset:0};let{baseHeight:s,minHeight:c,maxHeight:u}=a,h=r/o*s;void 0!==c&&h<c&&(h=c),void 0!==u&&h>u&&(h=u);let d=r/o*28,p=h>=d?0:(d-h)/2;return{height:h,offset:p}}(e,c,o);f.length&&u.fillRect(f[0]*h,28*t/(28*c)*o+i-.5*r,h*f.length,r)}))}}render(){return n1.default.createElement("canvas",{className:"graph-scroll-markers",ref:e=>{this.canvas=e}})}};var lG=function({children:e,className:t,height:r,heightAdjustment:o,graphZoneType:i,scrollTop:a,style:s}){let c=iR[i].listId,u=document.getElementById(c),h=u?.scrollHeight||0,d=r-28;void 0!==a&&(d=Number(s.top)-a,u&&h-r-a<0&&(d=r-o-28));let p={top:d,zIndex:2},f=n1.default.createElement("span",{className:"absolute",style:p},e);return n1.default.createElement("div",{className:t,style:s},u?sh.default.createPortal(f,document.getElementById("graph-container")):f)};function lj({inline:e,getExternalIcon:t,message:r,size:o=100,useSimpleSpinner:i}){let a=n0()("loading-spinner",{"inline-block":e,ml2:e,"shrink-0":e}),s=n0()("spinner","mr1",{"inline-block":e}),c={height:o,width:o},u=n0()("message",{"inline-block":e,mx2:e}),h=i?n1.default.createElement("span",{className:s,style:c},t("loading")):n1.default.createElement("div",{className:s,style:c},n1.default.createElement("img",{className:"ring outer",src:"../../../images/spinner-outer-ring.svg",style:c}),n1.default.createElement("img",{className:"ring inner",src:"../../../images/spinner-inner-ring.svg",style:c}),n1.default.createElement("img",{className:"bg-img",src:"../../../images/spinner-kraken.svg",style:c}));return n1.default.createElement("div",{className:a},h,r&&n1.default.createElement("div",{className:u},r))}let iG=class iG extends n1.default.Component{render(){let{currentCommits:e,customFooterRow:t,graphZoneType:r,hasMoreCommits:o,height:i,horizontalScrollHeight:a,getExternalIcon:s,isLoadingRows:c,scrollTop:u,style:h,translate:d}=this.props,p=n1.default.createElement(lj,{className:"loading-spinner",getExternalIcon:s,size:20,useSimpleSpinner:!0}),f=n1.default.createElement("div",{className:"flex items-center"},n1.default.createElement("span",{style:{paddingRight:"5px"}},p)),g=0!==(e>0?e:0)||o?t:n1.default.createElement(n1.default.Fragment,null,d("Graph-NoCommits")),m=n1.default.createElement("div",{className:"graph-adjust-commit-count p1"},c?f:g);return n1.default.createElement(lG,{graphZoneType:r,height:i,heightAdjustment:a,scrollTop:u,style:h},m)}};function lU({branchUpstreamRowIndices:e,rowCount:t,cellRenderersByIds:r,columnIndex:o,customFooterRow:i,enabledScrollMarkerTypes:a,enableResizer:s,getExternalIcon:c,getKeyForCell:u,graphHeight:h,graphWidth:d,graphZoneType:p,graphZones:f,hasMoreCommits:g,horizontalScrollHeight:m,isLoadingRows:b,markerColors:v,markerRowIndices:w,onResize:S,onResizeEnd:x,onResizeFromPropChange:C,onScroll:_,onScrollToRowCausedUpdate:T,onZoneEnter:E,scrollLeft:O,scrollToAlignment:$,scrollToIndex:P,scrollTop:D,smartCellRangeRenderer:A,translate:B,verticalScrollWidth:W}){let F=iJ(p,f);if(!F)return null;let G=document.getElementById(F.listId),j=iq(p,f),U=g||b||0===t,V=iZ(t,g,b),Z=iK(F,t),K=28*iZ(t,g,b),Q=W>0,X=a.length>0,J=n0()("graph-panel","react-virtualized-list","pad-for-horizontal-scrollbar","ref"===p?"z3":null,{"pad-for-vertical-scrollbar":Q}),ee=p===im?{...!j&&{position:"static"},...j&&{width:F.currentWidth>Z?F.currentWidth:Z,maxWidth:"none"}}:void 0,et=(e,a,s,f,v,w,S,x)=>n1.default.createElement(sn,{autoContainerWidth:!0,cellRangeRenderer:A,cellRenderer:a=>((e,a)=>{let s;if(a.rowIndex>t-1)return U&&0===o?n1.default.createElement(iG,{currentCommits:t-1,customFooterRow:i,getExternalIcon:c,graphZoneType:p,hasMoreCommits:g,height:h,horizontalScrollHeight:m,isLoadingRows:b,key:u(a.rowIndex),scrollTop:D,style:a.style,translate:B}):void 0;let d={...a,style:{...a.style}};ig===e&&(d.style.top=Number(a.style.top)-D);let f=r[e];return f?(s=f(d),n1.default.createElement("span",{"data-column-name":e,"data-row-idx":a.rowIndex,key:`gk-row-${a.key}`,style:{top:a.style.top}},s)):void 0})(e,a),className:s,columnCount:1,columnWidth:x,containerStyle:f,height:S,id:a,isScrolling:!1,key:a,onScrollToTargetCausedUpdate:T?e=>T(p,e,d,h,g):void 0,overscanRowCount:0,rowCount:V,rowHeight:28,scrollLeft:O,scrollToAlignment:$,scrollTop:D,scrollToRow:P,style:v,tabIndex:null,width:w}),er=et(F.type,F.listId,J,ee,{position:"absolute"},F.currentWidth,h,Z),en=j?n1.default.createElement("div",{className:"timeline-column-container",onWheelCapture:e=>{let t;(t=(t=D+e.deltaY)>=0?t:0)>D&&G&&iN(G)||_(p,{clientHeight:K,clientWidth:Z,scrollHeight:m,scrollLeft:0,scrollTop:t>=0?t:0,scrollWidth:W},d,h,g)}},et(ig,"timeline-column","graph-panel react-virtualized-list timeline-column",{overflow:"visible",zIndex:3,maxHeight:K},{position:"absolute",right:0,zIndex:3,maxHeight:h},1,h,1)):void 0,ei=er&&n1.default.createElement(n1.default.Fragment,null,en,X&&j?n1.default.createElement(iz,{branchUpstreamRowIndices:e,enabledScrollMarkerTypes:a,markerColors:v,markerRowIndices:w,scrollWidth:W,totalRows:V,viewportHeight:h<K?h:K,viewportWidth:F.currentWidth}):null,n1.default.createElement(t5,{contentHeight:K,contentWidth:Z,displayHorizontalScrollbar:F.type===im,displayVerticalScrollbar:j,forceOnVerticalWheel:!j,forceVerticalScrollbar:j&&X,height:h,onScroll:e=>{e.scrollTop>D&&G&&iN(G)||_(p,e,d,h,g)},scrollLeft:O,scrollTop:D,width:F.currentWidth},er)),ea=n1.default.createElement("div",{onMouseEnter:E},ei);return j?ea:n1.default.createElement(iO,{enable:s,height:h,id:`${p}Column`,key:`${p}Column`,onResize:S?e=>S(F,e):void 0,onResizeEnd:x?e=>x(F,e):void 0,onResizeFromPropChange:C?e=>C(F,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z1",width:F.currentWidth,widthConstraints:i2(p,f,d)},ea)}var lV=nQ(547),lK=nQ.n(lV);let lY="dnd-container";let iL=class iL extends n1.default.PureComponent{dndDrake;childReactElementsById={};constructor(e){super(e),this.loadChildrenReactElements(this.props.children)}componentDidMount(){this.dndDrake&&this.dndDrake.on("drop",this.onDrop)}componentDidUpdate(e){this.props.children!==e.children&&this.loadChildrenReactElements(e.children)}componentWillUnmount(){this.dndDrake&&this.dndDrake.destroy()}onDrop=(e,t,r,o)=>{if(this.props.onDrop&&e.id){let t=this.sanitizeId(e.id),r=o?.id?this.sanitizeId(o.id):null,i=this.childReactElementsById[t],a=r?this.childReactElementsById[r]:null;i&&this.props.onDrop(i,a)}};isContainerCallback=e=>!!e?.classList.contains(lY);movesCallback=e=>!!e?.id&&this.isDraggable(e.id);acceptsCallback=(e,t,r,o)=>!!e?.id&&this.isDroppable(e.id,o?.id);invalidCallBack=()=>!1;dndDecorator=e=>{if(e){let t={isContainer:this.isContainerCallback,mirrorContainer:this.props.mirrorContainer,moves:this.movesCallback,accepts:this.acceptsCallback,invalid:this.invalidCallBack,direction:this.props.direction||"horizontal",copy:!1,copySortSource:!1,revertOnSpill:!1,removeOnSpill:!1,ignoreInputTextSelection:!0};this.dndDrake=lK()([e],t)}};loadChildrenReactElements(e){this.childReactElementsById={},e&&(e instanceof Array?e.forEach(e=>{n1.default.isValidElement(e)&&this.addChildReactElement(e)}):n1.default.isValidElement(e)&&this.addChildReactElement(e))}addChildReactElement(e){let t=e.props.id;t&&(this.childReactElementsById[this.sanitizeId(t)]=e)}sanitizeId(e){return e.trim().toLowerCase().replace(/-/g,"").replace(/_/g,"")}isDraggable(e){if(this.props.isDraggable){let t=this.sanitizeId(e),r=this.childReactElementsById[t];return!!r&&this.props.isDraggable(r)}return!1}isDroppable(e,t){if(this.props.isDroppable){let r=this.sanitizeId(e),o=t?this.sanitizeId(t):null,i=this.childReactElementsById[r],a=o?this.childReactElementsById[o]:null;if(i)return this.props.isDroppable(i,a)}return!1}render(){let{children:e,className:t}=this.props,r=n0()(lY,t);return n1.default.createElement("div",{className:r,ref:this.dndDecorator},e)}};function lQ(){return(0,n1.useState)(null)}let lJ=e=>e&&"function"!=typeof e?t=>{e.current=t}:e,l0=function(e,t){return(0,n1.useMemo)(()=>{let r,o;return r=lJ(e),o=lJ(t),e=>{r&&r(e),o&&o(e)}},[e,t])};var l1=Object.prototype.hasOwnProperty;function l2(e,t,r){for(r of e.keys())if(l5(r,t))return r}function l5(e,t){var r,o,i;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((o=e.length)===t.length)for(;o--&&l5(e[o],t[o]););return -1===o}if(r===Set){if(e.size!==t.size)return!1;for(o of e)if((i=o)&&"object"==typeof i&&!(i=l2(t,i))||!t.has(i))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(o of e)if((i=o[0])&&"object"==typeof i&&!(i=l2(t,i))||!l5(o[1],t.get(i)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((o=e.byteLength)===t.byteLength)for(;o--&&e.getInt8(o)===t.getInt8(o););return -1===o}if(ArrayBuffer.isView(e)){if((o=e.byteLength)===t.byteLength)for(;o--&&e[o]===t[o];);return -1===o}if(!r||"object"==typeof e){for(r in o=0,e)if(l1.call(e,r)&&++o&&!l1.call(t,r)||!(r in t)||!l5(e[r],t[r]))return!1;return Object.keys(t).length===o}}return e!=e&&t!=t}let l3=function(e){let t,r,o=(t=(0,n1.useRef)(!0),r=(0,n1.useRef)(()=>t.current),(0,n1.useEffect)(()=>(t.current=!0,()=>{t.current=!1}),[]),r.current);return[e[0],(0,n1.useCallback)(t=>{if(o())return e[1](t)},[o,e[1]])]};function l6(e){return e.split("-")[0]}function l4(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function l8(e){var t=l4(e).Element;return e instanceof t||e instanceof Element}function l7(e){var t=l4(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function l9(e){if("undefined"==typeof ShadowRoot)return!1;var t=l4(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var ce=Math.max,ct=Math.min,cr=Math.round;function co(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function cn(){return!/^((?!chrome|android).)*safari/i.test(co())}function ci(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var o=e.getBoundingClientRect(),i=1,a=1;t&&l7(e)&&(i=e.offsetWidth>0&&cr(o.width)/e.offsetWidth||1,a=e.offsetHeight>0&&cr(o.height)/e.offsetHeight||1);var s=(l8(e)?l4(e):window).visualViewport,c=!cn()&&r,u=(o.left+(c&&s?s.offsetLeft:0))/i,h=(o.top+(c&&s?s.offsetTop:0))/a,d=o.width/i,p=o.height/a;return{width:d,height:p,top:h,right:u+d,bottom:h+p,left:u,x:u,y:h}}function ca(e){var t=ci(e),r=e.offsetWidth,o=e.offsetHeight;return 1>=Math.abs(t.width-r)&&(r=t.width),1>=Math.abs(t.height-o)&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function cs(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&l9(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function cl(e){return e?(e.nodeName||"").toLowerCase():null}function cc(e){return l4(e).getComputedStyle(e)}function cu(e){return((l8(e)?e.ownerDocument:e.document)||window.document).documentElement}function ch(e){return"html"===cl(e)?e:e.assignedSlot||e.parentNode||(l9(e)?e.host:null)||cu(e)}function cd(e){return l7(e)&&"fixed"!==cc(e).position?e.offsetParent:null}function cp(e){for(var t=l4(e),r=cd(e);r&&["table","td","th"].indexOf(cl(r))>=0&&"static"===cc(r).position;)r=cd(r);return r&&("html"===cl(r)||"body"===cl(r)&&"static"===cc(r).position)?t:r||function(e){var t=/firefox/i.test(co());if(/Trident/i.test(co())&&l7(e)&&"fixed"===cc(e).position)return null;var r=ch(e);for(l9(r)&&(r=r.host);l7(r)&&0>["html","body"].indexOf(cl(r));){var o=cc(r);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return r;r=r.parentNode}return null}(e)||t}function cf(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function cg(e,t,r){return ce(e,ct(t,r))}function cm(){return{top:0,right:0,bottom:0,left:0}}function cb(e){return Object.assign({},cm(),e)}function cv(e,t){return t.reduce(function(t,r){return t[r]=e,t},{})}var cy="bottom",cw="right",cS="left",cx="auto",cC=["top",cy,cw,cS],ck="start",c_="viewport",cR="popper",cT=cC.reduce(function(e,t){return e.concat([t+"-"+ck,t+"-end"])},[]),cE=[].concat(cC,[cx]).reduce(function(e,t){return e.concat([t,t+"-"+ck,t+"-end"])},[]),cM=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function cO(e){return e.split("-")[1]}var c$={top:"auto",right:"auto",bottom:"auto",left:"auto"};function cI(e){var t,r,o,i,a,s,c,u=e.popper,h=e.popperRect,d=e.placement,p=e.variation,f=e.offsets,g=e.position,m=e.gpuAcceleration,b=e.adaptive,v=e.roundOffsets,w=e.isFixed,S=f.x,x=void 0===S?0:S,C=f.y,_=void 0===C?0:C,T="function"==typeof v?v({x:x,y:_}):{x:x,y:_};x=T.x,_=T.y;var E=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),$=cS,P="top",D=window;if(b){var A=cp(u),B="clientHeight",W="clientWidth";A===l4(u)&&"static"!==cc(A=cu(u)).position&&"absolute"===g&&(B="scrollHeight",W="scrollWidth"),("top"===d||(d===cS||d===cw)&&"end"===p)&&(P=cy,_-=(w&&A===D&&D.visualViewport?D.visualViewport.height:A[B])-h.height,_*=m?1:-1),(d===cS||("top"===d||d===cy)&&"end"===p)&&($=cw,x-=(w&&A===D&&D.visualViewport?D.visualViewport.width:A[W])-h.width,x*=m?1:-1)}var F=Object.assign({position:g},b&&c$),G=!0===v?(t={x:x,y:_},r=l4(u),o=t.x,i=t.y,{x:cr(o*(a=r.devicePixelRatio||1))/a||0,y:cr(i*a)/a||0}):{x:x,y:_};return(x=G.x,_=G.y,m)?Object.assign({},F,((c={})[P]=O?"0":"",c[$]=E?"0":"",c.transform=1>=(D.devicePixelRatio||1)?"translate("+x+"px, "+_+"px)":"translate3d("+x+"px, "+_+"px, 0)",c)):Object.assign({},F,((s={})[P]=O?_+"px":"",s[$]=E?x+"px":"",s.transform="",s))}var cz={passive:!0},cP={left:"right",right:"left",bottom:"top",top:"bottom"};function cD(e){return e.replace(/left|right|bottom|top/g,function(e){return cP[e]})}var cA={start:"end",end:"start"};function cL(e){return e.replace(/start|end/g,function(e){return cA[e]})}function cN(e){var t=l4(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function cH(e){return ci(cu(e)).left+cN(e).scrollLeft}function cB(e){var t=cc(e),r=t.overflow,o=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+o)}function cW(e,t){void 0===t&&(t=[]);var r,o=function e(t){return["html","body","#document"].indexOf(cl(t))>=0?t.ownerDocument.body:l7(t)&&cB(t)?t:e(ch(t))}(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=l4(o),s=i?[a].concat(a.visualViewport||[],cB(o)?o:[]):o,c=t.concat(s);return i?c:c.concat(cW(ch(s)))}function cF(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function cG(e,t,r){var o,i,a,s,c,u,h,d,p,f;return t===c_?cF(function(e,t){var r=l4(e),o=cu(e),i=r.visualViewport,a=o.clientWidth,s=o.clientHeight,c=0,u=0;if(i){a=i.width,s=i.height;var h=cn();(h||!h&&"fixed"===t)&&(c=i.offsetLeft,u=i.offsetTop)}return{width:a,height:s,x:c+cH(e),y:u}}(e,r)):l8(t)?((o=ci(t,!1,"fixed"===r)).top=o.top+t.clientTop,o.left=o.left+t.clientLeft,o.bottom=o.top+t.clientHeight,o.right=o.left+t.clientWidth,o.width=t.clientWidth,o.height=t.clientHeight,o.x=o.left,o.y=o.top,o):cF((i=cu(e),s=cu(i),c=cN(i),u=null==(a=i.ownerDocument)?void 0:a.body,h=ce(s.scrollWidth,s.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),d=ce(s.scrollHeight,s.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0),p=-c.scrollLeft+cH(i),f=-c.scrollTop,"rtl"===cc(u||s).direction&&(p+=ce(s.clientWidth,u?u.clientWidth:0)-h),{width:h,height:d,x:p,y:f}))}function cj(e){var t,r=e.reference,o=e.element,i=e.placement,a=i?l6(i):null,s=i?cO(i):null,c=r.x+r.width/2-o.width/2,u=r.y+r.height/2-o.height/2;switch(a){case"top":t={x:c,y:r.y-o.height};break;case cy:t={x:c,y:r.y+r.height};break;case cw:t={x:r.x+r.width,y:u};break;case cS:t={x:r.x-o.width,y:u};break;default:t={x:r.x,y:r.y}}var h=a?cf(a):null;if(null!=h){var d="y"===h?"height":"width";switch(s){case ck:t[h]=t[h]-(r[d]/2-o[d]/2);break;case"end":t[h]=t[h]+(r[d]/2-o[d]/2)}}return t}function cU(e,t){void 0===t&&(t={});var r,o,i,a,s,c,u,h,d=t,p=d.placement,f=void 0===p?e.placement:p,g=d.strategy,m=void 0===g?e.strategy:g,b=d.boundary,v=d.rootBoundary,w=d.elementContext,S=void 0===w?cR:w,x=d.altBoundary,C=d.padding,_=void 0===C?0:C,T=cb("number"!=typeof _?_:cv(_,cC)),E=e.rects.popper,O=e.elements[void 0!==x&&x?S===cR?"reference":cR:S],$=(r=l8(O)?O:O.contextElement||cu(e.elements.popper),o=void 0===b?"clippingParents":b,i=void 0===v?c_:v,u=(c=[].concat("clippingParents"===o?(a=cW(ch(r)),!l8(s=["absolute","fixed"].indexOf(cc(r).position)>=0&&l7(r)?cp(r):r)?[]:a.filter(function(e){return l8(e)&&cs(e,s)&&"body"!==cl(e)})):[].concat(o),[i]))[0],(h=c.reduce(function(e,t){var o=cG(r,t,m);return e.top=ce(o.top,e.top),e.right=ct(o.right,e.right),e.bottom=ct(o.bottom,e.bottom),e.left=ce(o.left,e.left),e},cG(r,u,m))).width=h.right-h.left,h.height=h.bottom-h.top,h.x=h.left,h.y=h.top,h),P=ci(e.elements.reference),D=cj({reference:P,element:E,strategy:"absolute",placement:f}),A=cF(Object.assign({},E,D)),B=S===cR?A:P,W={top:$.top-B.top+T.top,bottom:B.bottom-$.bottom+T.bottom,left:$.left-B.left+T.left,right:B.right-$.right+T.right},F=e.modifiersData.offset;if(S===cR&&F){var G=F[f];Object.keys(W).forEach(function(e){var t=[cw,cy].indexOf(e)>=0?1:-1,r=["top",cy].indexOf(e)>=0?"y":"x";W[e]+=G[r]*t})}return W}function cV(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function cq(e){return["top",cw,cy,cS].some(function(t){return e[t]>=0})}var cZ={placement:"bottom",modifiers:[],strategy:"absolute"};function cK(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}let cY=(nT=void 0===(nR=(n_={defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,o=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,s=cU(t,{elementContext:"reference"}),c=cU(t,{altBoundary:!0}),u=cV(s,o),h=cV(c,i,a),d=cq(u),p=cq(h);t.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:h,isReferenceHidden:d,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=cj({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,o=r.gpuAcceleration,i=r.adaptive,a=r.roundOffsets,s=void 0===a||a,c={placement:l6(t.placement),variation:cO(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===o||o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,cI(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===i||i,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,cI(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,c=void 0===s||s,u=l4(t.elements.popper),h=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&h.forEach(function(e){e.addEventListener("scroll",r.update,cz)}),c&&u.addEventListener("resize",r.update,cz),function(){a&&h.forEach(function(e){e.removeEventListener("scroll",r.update,cz)}),c&&u.removeEventListener("resize",r.update,cz)}},data:{}},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,o=e.name,i=r.offset,a=void 0===i?[0,0]:i,s=cE.reduce(function(e,r){var o,i,s,c,u,h;return e[r]=(o=t.rects,s=[cS,"top"].indexOf(i=l6(r))>=0?-1:1,u=(c="function"==typeof a?a(Object.assign({},o,{placement:r})):a)[0],h=c[1],u=u||0,h=(h||0)*s,[cS,cw].indexOf(i)>=0?{x:h,y:u}:{x:u,y:h}),e},{}),c=s[t.placement],u=c.x,h=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=h),t.modifiersData[o]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var i=r.mainAxis,a=void 0===i||i,s=r.altAxis,c=void 0===s||s,u=r.fallbackPlacements,h=r.padding,d=r.boundary,p=r.rootBoundary,f=r.altBoundary,g=r.flipVariations,m=void 0===g||g,b=r.allowedAutoPlacements,v=t.options.placement,w=l6(v)===v,S=u||(w||!m?[cD(v)]:function(e){if(l6(e)===cx)return[];var t=cD(e);return[cL(e),t,cL(t)]}(v)),x=[v].concat(S).reduce(function(e,r){var o,i,a,s,c,u,f,g,v,w,S,x;return e.concat(l6(r)===cx?(i=(o={placement:r,boundary:d,rootBoundary:p,padding:h,flipVariations:m,allowedAutoPlacements:b}).placement,a=o.boundary,s=o.rootBoundary,c=o.padding,u=o.flipVariations,g=void 0===(f=o.allowedAutoPlacements)?cE:f,0===(S=(w=(v=cO(i))?u?cT:cT.filter(function(e){return cO(e)===v}):cC).filter(function(e){return g.indexOf(e)>=0})).length&&(S=w),Object.keys(x=S.reduce(function(e,r){return e[r]=cU(t,{placement:r,boundary:a,rootBoundary:s,padding:c})[l6(r)],e},{})).sort(function(e,t){return x[e]-x[t]})):r)},[]),C=t.rects.reference,_=t.rects.popper,T=new Map,E=!0,O=x[0],$=0;$<x.length;$++){var P=x[$],D=l6(P),A=cO(P)===ck,B=["top",cy].indexOf(D)>=0,W=B?"width":"height",F=cU(t,{placement:P,boundary:d,rootBoundary:p,altBoundary:f,padding:h}),G=B?A?cw:cS:A?cy:"top";C[W]>_[W]&&(G=cD(G));var j=cD(G),U=[];if(a&&U.push(F[D]<=0),c&&U.push(F[G]<=0,F[j]<=0),U.every(function(e){return e})){O=P,E=!1;break}T.set(P,U)}if(E)for(var V=m?3:1,Z=function(e){var t=x.find(function(t){var r=T.get(t);if(r)return r.slice(0,e).every(function(e){return e})});if(t)return O=t,"break"},K=V;K>0&&"break"!==Z(K);K--);t.placement!==O&&(t.modifiersData[o]._skip=!0,t.placement=O,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,o=e.name,i=r.mainAxis,a=r.altAxis,s=r.boundary,c=r.rootBoundary,u=r.altBoundary,h=r.padding,d=r.tether,p=void 0===d||d,f=r.tetherOffset,g=void 0===f?0:f,m=cU(t,{boundary:s,rootBoundary:c,padding:h,altBoundary:u}),b=l6(t.placement),v=cO(t.placement),w=!v,S=cf(b),x="x"===S?"y":"x",C=t.modifiersData.popperOffsets,_=t.rects.reference,T=t.rects.popper,E="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,O="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(C){if(void 0===i||i){var D,A="y"===S?"top":cS,B="y"===S?cy:cw,W="y"===S?"height":"width",F=C[S],G=F+m[A],j=F-m[B],U=p?-T[W]/2:0,V=v===ck?_[W]:T[W],Z=v===ck?-T[W]:-_[W],K=t.elements.arrow,Q=p&&K?ca(K):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:cm(),J=X[A],ee=X[B],et=cg(0,_[W],Q[W]),er=w?_[W]/2-U-et-J-O.mainAxis:V-et-J-O.mainAxis,en=w?-_[W]/2+U+et+ee+O.mainAxis:Z+et+ee+O.mainAxis,ei=t.elements.arrow&&cp(t.elements.arrow),ea=ei?"y"===S?ei.clientTop||0:ei.clientLeft||0:0,es=null!=(D=null==$?void 0:$[S])?D:0,el=cg(p?ct(G,F+er-es-ea):G,F,p?ce(j,F+en-es):j);C[S]=el,P[S]=el-F}if(void 0!==a&&a){var ec,eu,eh="x"===S?"top":cS,ed="x"===S?cy:cw,ep=C[x],ef="y"===x?"height":"width",eg=ep+m[eh],em=ep-m[ed],eb=-1!==["top",cS].indexOf(b),ev=null!=(eu=null==$?void 0:$[x])?eu:0,ey=eb?eg:ep-_[ef]-T[ef]-ev+O.altAxis,ew=eb?ep+_[ef]+T[ef]-ev-O.altAxis:em,eS=p&&eb?(ec=cg(ey,ep,ew))>ew?ew:ec:cg(p?ey:eg,ep,p?ew:em);C[x]=eS,P[x]=eS-ep}t.modifiersData[o]=P}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,c=l6(r.placement),u=cf(c),h=[cS,cw].indexOf(c)>=0?"height":"width";if(a&&s){var d,p=cb("number"!=typeof(d="function"==typeof(d=i.padding)?d(Object.assign({},r.rects,{placement:r.placement})):d)?d:cv(d,cC)),f=ca(a),g="y"===u?"top":cS,m="y"===u?cy:cw,b=r.rects.reference[h]+r.rects.reference[u]-s[u]-r.rects.popper[h],v=s[u]-r.rects.reference[u],w=cp(a),S=w?"y"===u?w.clientHeight||0:w.clientWidth||0:0,x=p[g],C=S-f[h]-p[m],_=S/2-f[h]/2+(b/2-v/2),T=cg(x,_,C);r.modifiersData[o]=((t={})[u]=T,t.centerOffset=T-_,t)}},effect:function(e){var t=e.state,r=e.options.element,o=void 0===r?"[data-popper-arrow]":r;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&cs(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}]}).defaultModifiers)?[]:nR,nM=void 0===(nE=n_.defaultOptions)?cZ:nE,function(e,t,r){void 0===r&&(r=nM);var o,i,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},cZ,nM),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],c=!1,u={state:a,setOptions:function(r){var o,i,c,d,p,f="function"==typeof r?r(a.options):r;h(),a.options=Object.assign({},nM,a.options,f),a.scrollParents={reference:l8(e)?cW(e):e.contextElement?cW(e.contextElement):[],popper:cW(t)};var g=(i=Object.keys(o=[].concat(nT,a.options.modifiers).reduce(function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e},{})).map(function(e){return o[e]}),c=new Map,d=new Set,p=[],i.forEach(function(e){c.set(e.name,e)}),i.forEach(function(e){d.has(e.name)||function e(t){d.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!d.has(t)){var r=c.get(t);r&&e(r)}}),p.push(t)}(e)}),cM.reduce(function(e,t){return e.concat(p.filter(function(e){return e.phase===t}))},[]));return a.orderedModifiers=g.filter(function(e){return e.enabled}),a.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,o=e.effect;if("function"==typeof o){var i=o({state:a,name:t,instance:u,options:void 0===r?{}:r});s.push(i||function(){})}}),u.update()},forceUpdate:function(){if(!c){var e=a.elements,t=e.reference,r=e.popper;if(cK(t,r)){a.rects={reference:(o=cp(r),i="fixed"===a.options.strategy,s=l7(o),f=l7(o)&&(d=cr((h=o.getBoundingClientRect()).width)/o.offsetWidth||1,p=cr(h.height)/o.offsetHeight||1,1!==d||1!==p),g=cu(o),m=ci(t,f,i),b={scrollLeft:0,scrollTop:0},v={x:0,y:0},(s||!s&&!i)&&(("body"!==cl(o)||cB(g))&&(b=o!==l4(o)&&l7(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:cN(o)),l7(o)?(v=ci(o,!0),v.x+=o.clientLeft,v.y+=o.clientTop):g&&(v.x=cH(g))),{x:m.left+b.scrollLeft-v.x,y:m.top+b.scrollTop-v.y,width:m.width,height:m.height}),popper:ca(r)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(e){return a.modifiersData[e.name]=Object.assign({},e.data)});for(var o,i,s,h,d,p,f,g,m,b,v,w=0;w<a.orderedModifiers.length;w++){if(!0===a.reset){a.reset=!1,w=-1;continue}var S=a.orderedModifiers[w],x=S.fn,C=S.options,_=void 0===C?{}:C,T=S.name;"function"==typeof x&&(a=x({state:a,options:_,name:T,instance:u})||a)}}}},update:(o=function(){return new Promise(function(e){u.forceUpdate(),e(a)})},function(){return i||(i=new Promise(function(e){Promise.resolve().then(function(){i=void 0,e(o())})})),i}),destroy:function(){h(),c=!0}};if(!cK(e,t))return u;function h(){s.forEach(function(e){return e()}),s=[]}return u.setOptions(r).then(function(e){!c&&r.onFirstUpdate&&r.onFirstUpdate(e)}),u}),cQ=["enabled","placement","strategy","modifiers"],cX={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>void 0},cJ={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{let{reference:t,popper:r}=e.elements;if("removeAttribute"in t){let e=(t.getAttribute("aria-describedby")||"").split(",").filter(e=>e.trim()!==r.id);e.length?t.setAttribute("aria-describedby",e.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;let{popper:r,reference:o}=e.elements,i=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===i&&"setAttribute"in o){let e=o.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",e?`${e},${r.id}`:r.id)}}},c0=[],c1=function(e,t,r={}){let{enabled:o=!0,placement:i="bottom",strategy:a="absolute",modifiers:s=c0}=r,c=function(e,t){if(null==e)return{};var r={};for(var o in e)if(({}).hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;r[o]=e[o]}return r}(r,cQ),u=(0,n1.useRef)(s),h=(0,n1.useRef)(),d=(0,n1.useCallback)(()=>{var e;null==(e=h.current)||e.update()},[]),p=(0,n1.useCallback)(()=>{var e;null==(e=h.current)||e.forceUpdate()},[]),[f,g]=l3((0,n1.useState)({placement:i,update:d,forceUpdate:p,attributes:{},styles:{popper:{},arrow:{}}})),m=(0,n1.useMemo)(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:e})=>{let t={},r={};Object.keys(e.elements).forEach(o=>{t[o]=e.styles[o],r[o]=e.attributes[o]}),g({state:e,styles:t,attributes:r,update:d,forceUpdate:p,placement:e.placement})}}),[d,p,g]),b=(0,n1.useMemo)(()=>(l5(u.current,s)||(u.current=s),u.current),[s]);return(0,n1.useEffect)(()=>{h.current&&o&&h.current.setOptions({placement:i,strategy:a,modifiers:[...b,m,cX]})},[a,i,m,o,b]),(0,n1.useEffect)(()=>{if(o&&null!=e&&null!=t)return h.current=cY(e,t,Object.assign({},c,{placement:i,strategy:a,modifiers:[...b,cJ,m]})),()=>{null!=h.current&&(h.current.destroy(),h.current=void 0,g(e=>Object.assign({},e,{attributes:{},styles:{popper:{}}})))}},[o,e,t]),f};var c2=!1,c5=!1;try{var c3={get passive(){return c2=!0},get once(){return c5=c2=!0}};a6&&(window.addEventListener("test",c3,c3),window.removeEventListener("test",c3,!0))}catch{}let c6=function(e,t,r,o){if(o&&"boolean"!=typeof o&&!c5){var i=o.once,a=o.capture,s=r;!c5&&i&&(s=r.__once||function e(o){this.removeEventListener(t,e,a),r.call(this,o)},r.__once=s),e.addEventListener(t,s,c2?o:a)}e.addEventListener(t,r,o)},c4=function(e,t,r,o){var i=o&&"boolean"!=typeof o?o.capture:o;e.removeEventListener(t,r,i),r.__once&&e.removeEventListener(t,r.__once,i)},c8=function(e,t,r,o){return c6(e,t,r,o),function(){c4(e,t,r,o)}};function c7(e){return e&&e.ownerDocument||document}let c9=function(e){let t=(0,n1.useRef)(e);return(0,n1.useEffect)(()=>{t.current=e},[e]),t};function ue(e){let t=c9(e);return(0,n1.useCallback)(function(...e){return t.current&&t.current(...e)},[t])}function ut(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var ur=nQ(771),uo=nQ.n(ur);let un=()=>{},ui=e=>e&&("current"in e?e.current:e),ua={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"},us=function(e,t=un,{disabled:r,clickTrigger:o="click"}={}){let i=(0,n1.useRef)(!1),a=(0,n1.useRef)(!1),s=(0,n1.useCallback)(t=>{let r=ui(e);uo()(!!r,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),i.current=!r||!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)||0!==t.button||!!ut(r,t.target)||a.current,a.current=!1},[e]),c=ue(t=>{let r=ui(e);r&&ut(r,t.target)?a.current=!0:a.current=!1}),u=ue(e=>{i.current||t(e)});(0,n1.useEffect)(()=>{var t,i;if(r||null==e)return;let a=c7(ui(e)),h=a.defaultView||window,d=null!=(t=h.event)?t:null==(i=h.parent)?void 0:i.event,p=null;ua[o]&&(p=c8(a,ua[o],c,!0));let f=c8(a,o,s,!0),g=c8(a,o,e=>{if(e===d){d=void 0;return}u(e)}),m=[];return"ontouchstart"in a.documentElement&&(m=[].slice.call(a.body.children).map(e=>c8(e,"mousemove",un))),()=>{null==p||p(),f(),g(),m.forEach(e=>e())}},[e,r,o,s,c,u])};function ul(e){let t;if(!e||"function"==typeof e)return null;let{major:r}={major:+(t=n1.version.split("."))[0],minor:+t[1],patch:+t[2]};return r>=19?e.props.ref:e.ref}let uc=()=>{},uu=function(e,t,{disabled:r,clickTrigger:o}={}){let i=t||uc;us(e,i,{disabled:r,clickTrigger:o});let a=ue(e=>{("Escape"===e.code||27===e.keyCode)&&i(e)});(0,n1.useEffect)(()=>{if(r||null==e)return;let t=c7(ui(e)),o=(t.defaultView||window).event,i=c8(t,"keyup",e=>{if(e===o){o=void 0;return}a(e)});return()=>{i()}},[e,r,a])},uh=(0,n1.createContext)(a6?window:void 0);uh.Provider;let ud=(e,t)=>a6?null==e?(t||c7()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect))?e:null:null;function up(e,t){let r=(0,n1.useContext)(uh),[o,i]=(0,n1.useState)(()=>ud(e,null==r?void 0:r.document));if(!o){let t=ud(e);t&&i(t)}return(0,n1.useEffect)(()=>{t&&o&&t(o)},[t,o]),(0,n1.useEffect)(()=>{let t=ud(e);t!==o&&i(t)},[e,o]),o}let uf=void 0!==nQ.g&&nQ.g.navigator&&"ReactNative"===nQ.g.navigator.product,ug="undefined"!=typeof document||uf?n1.useLayoutEffect:n1.useEffect,um=function({children:e,in:t,onExited:r,mountOnEnter:o,unmountOnExit:i}){let a=(0,n1.useRef)(null),s=(0,n1.useRef)(t),c=ue(r);(0,n1.useEffect)(()=>{t?s.current=!0:c(a.current)},[t,c]);let u=l0(a,ul(e)),h=(0,n1.cloneElement)(e,{ref:u});return t?h:i||!s.current&&o?null:h},ub=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"],uv=["component"],uy=n1.forwardRef((e,t)=>{let{component:r}=e,o=function(e){let{onEnter:t,onEntering:r,onEntered:o,onExit:i,onExiting:a,onExited:s,addEndListener:c,children:u}=e,h=function(e,t){if(null==e)return{};var r={};for(var o in e)if(({}).hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;r[o]=e[o]}return r}(e,ub),d=(0,n1.useRef)(null),p=l0(d,ul(u)),f=e=>t=>{e&&d.current&&e(d.current,t)},g=(0,n1.useCallback)(f(t),[t]),m=(0,n1.useCallback)(f(r),[r]),b=(0,n1.useCallback)(f(o),[o]),v=(0,n1.useCallback)(f(i),[i]),w=(0,n1.useCallback)(f(a),[a]),S=(0,n1.useCallback)(f(s),[s]),x=(0,n1.useCallback)(f(c),[c]);return Object.assign({},h,{nodeRef:d},t&&{onEnter:g},r&&{onEntering:m},o&&{onEntered:b},i&&{onExit:v},a&&{onExiting:w},s&&{onExited:S},c&&{addEndListener:x},{children:"function"==typeof u?(e,t)=>u(e,Object.assign({},t,{ref:p})):(0,n1.cloneElement)(u,{ref:p})})}(function(e,t){if(null==e)return{};var r={};for(var o in e)if(({}).hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;r[o]=e[o]}return r}(e,uv));return(0,lp.jsx)(r,Object.assign({ref:t},o))});function uw({children:e,in:t,onExited:r,onEntered:o,transition:i}){let[a,s]=(0,n1.useState)(!t);t&&a&&s(!1);let c=l0(function({in:e,onTransition:t}){let r=(0,n1.useRef)(null),o=(0,n1.useRef)(!0),i=ue(t);return ug(()=>{if(!r.current)return;let t=!1;return i({in:e,element:r.current,initial:o.current,isStale:()=>t}),()=>{t=!0}},[e,i]),ug(()=>(o.current=!1,()=>{o.current=!0}),[]),r}({in:!!t,onTransition:e=>{Promise.resolve(i(e)).then(()=>{e.isStale()||(e.in?null==o||o(e.element,e.initial):(s(!0),null==r||r(e.element)))},t=>{throw e.in||s(!0),t})}}),ul(e));return a&&!t?null:(0,n1.cloneElement)(e,{ref:c})}let uS=n1.forwardRef((e,t)=>{var r;let{flip:o,offset:i,placement:a,containerPadding:s,popperConfig:c={},transition:u,runTransition:h}=e,[d,p]=lQ(),[f,g]=lQ(),m=l0(p,t),b=up(e.container),v=up(e.target),[w,S]=(0,n1.useState)(!e.show),x=c1(v,d,function({enabled:e,enableEvents:t,placement:r,flip:o,offset:i,fixed:a,containerPadding:s,arrowElement:c,popperConfig:u={}}){var h,d,p,f,g,m;let b,v=(m=u.modifiers,b={},Array.isArray(m)?(null==m||m.forEach(e=>{b[e.name]=e}),b):m||b);return Object.assign({},u,{placement:r,enabled:e,strategy:a?"fixed":u.strategy,modifiers:function(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}(Object.assign({},v,{eventListeners:{enabled:t,options:null==(h=v.eventListeners)?void 0:h.options},preventOverflow:Object.assign({},v.preventOverflow,{options:s?Object.assign({padding:s},null==(d=v.preventOverflow)?void 0:d.options):null==(p=v.preventOverflow)?void 0:p.options}),offset:{options:Object.assign({offset:i},null==(f=v.offset)?void 0:f.options)},arrow:Object.assign({},v.arrow,{enabled:!!c,options:Object.assign({},null==(g=v.arrow)?void 0:g.options,{element:c})}),flip:Object.assign({enabled:!!o},v.flip)}))})}({placement:a,enableEvents:!!e.show,containerPadding:s||5,flip:o,offset:i,arrowElement:f,popperConfig:c}));e.show&&w&&S(!1);let C=e.show||!w;if(uu(d,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!C)return null;let{onExit:_,onExiting:T,onEnter:E,onEntering:O,onEntered:$}=e,P=e.children(Object.assign({},x.attributes.popper,{style:x.styles.popper,ref:m}),{popper:x,placement:a,show:!!e.show,arrowProps:Object.assign({},x.attributes.arrow,{style:x.styles.arrow,ref:g})});return r={in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:P,onExit:_,onExiting:T,onExited:(...t)=>{S(!0),e.onExited&&e.onExited(...t)},onEnter:E,onEntering:O,onEntered:$},P=u?(0,lp.jsx)(uy,Object.assign({},r,{component:u})):h?(0,lp.jsx)(uw,Object.assign({},r,{transition:h})):(0,lp.jsx)(um,Object.assign({},r)),b?sh.default.createPortal(P,b):null});uS.displayName="Overlay";let ux=function(e){let t=(0,n1.useRef)(e);return(0,n1.useEffect)(()=>{t.current=e},[e]),t},uC=void 0!==nQ.g&&nQ.g.navigator&&"ReactNative"===nQ.g.navigator.product,uk="undefined"!=typeof document||uC?n1.useLayoutEffect:n1.useEffect,u_=e=>e&&"function"!=typeof e?t=>{e.current=t}:e,uR=function(e,t){return(0,n1.useMemo)(()=>{let r,o;return r=u_(e),o=u_(t),e=>{r&&r(e),o&&o(e)}},[e,t])};function uT(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}let uE=n1.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:uM,Provider:uO}=uE;function u$(e,t){let{prefixes:r}=(0,n1.useContext)(uE);return e||r[t]||t}function uI(){let{dir:e}=(0,n1.useContext)(uE);return"rtl"===e}let uz=n1.forwardRef(({className:e,bsPrefix:t,as:r="div",...o},i)=>(t=u$(t,"popover-header"),(0,lp.jsx)(r,{ref:i,className:n0()(e,t),...o})));uz.displayName="PopoverHeader";let uP=n1.forwardRef(({className:e,bsPrefix:t,as:r="div",...o},i)=>(t=u$(t,"popover-body"),(0,lp.jsx)(r,{ref:i,className:n0()(e,t),...o})));function uD(e,t){let r=e;return"left"===e?r=t?"end":"start":"right"===e&&(r=t?"start":"end"),r}function uA(e="absolute"){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}uP.displayName="PopoverBody",n1.Component;let uL=Object.assign(n1.forwardRef(({bsPrefix:e,placement:t="right",className:r,style:o,children:i,body:a,arrowProps:s,hasDoneInitialMeasure:c,popper:u,show:h,...d},p)=>{let f=u$(e,"popover"),g=uI(),[m]=(null==t?void 0:t.split("-"))||[],b=uD(m,g),v=o;return h&&!c&&(v={...o,...uA(null==u?void 0:u.strategy)}),(0,lp.jsxs)("div",{ref:p,role:"tooltip",style:v,"x-placement":m,className:n0()(r,f,m&&`bs-popover-${b}`),...d,children:[(0,lp.jsx)("div",{className:"popover-arrow",...s}),a?(0,lp.jsx)(uP,{children:i}):i]})}),{Header:uz,Body:uP,POPPER_OFFSET:[0,8]}),uN=n1.forwardRef(({bsPrefix:e,placement:t="right",className:r,style:o,children:i,arrowProps:a,hasDoneInitialMeasure:s,popper:c,show:u,...h},d)=>{e=u$(e,"tooltip");let p=uI(),[f]=(null==t?void 0:t.split("-"))||[],g=uD(f,p),m=o;return u&&!s&&(m={...o,...uA(null==c?void 0:c.strategy)}),(0,lp.jsxs)("div",{ref:d,style:m,role:"tooltip","x-placement":f,className:n0()(r,e,`bs-tooltip-${g}`),...h,children:[(0,lp.jsx)("div",{className:"tooltip-arrow",...a}),(0,lp.jsx)("div",{className:`${e}-inner`,children:i})]})});uN.displayName="Tooltip";let uH=Object.assign(uN,{TOOLTIP_OFFSET:[0,6]}),uB=n1.default.createContext(null);var uW="unmounted",uF="exited",uG="entering",uj="entered",uU="exiting",uV=function(e){function t(t,r){var o,i=e.call(this,t,r)||this,a=r&&!r.isMounting?t.enter:t.appear;return i.appearStatus=null,t.in?a?(o=uF,i.appearStatus=uG):o=uj:o=t.unmountOnExit||t.mountOnEnter?uW:uF,i.state={status:o},i.nextCallback=null,i}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,aG(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===uW?{status:uF}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var r=this.state.status;this.props.in?r!==uG&&r!==uj&&(t=uG):(r===uG||r===uj)&&(t=uU)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,r,o=this.props.timeout;return e=t=r=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,r=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:r}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===uG){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:sh.default.findDOMNode(this);r&&r.scrollTop}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===uF&&this.setState({status:uW})},r.performEnter=function(e){var t=this,r=this.props.enter,o=this.context?this.context.isMounting:e,i=this.props.nodeRef?[o]:[sh.default.findDOMNode(this),o],a=i[0],s=i[1],c=this.getTimeouts(),u=o?c.appear:c.enter;if(!e&&!r)return void this.safeSetState({status:uj},function(){t.props.onEntered(a)});this.props.onEnter(a,s),this.safeSetState({status:uG},function(){t.props.onEntering(a,s),t.onTransitionEnd(u,function(){t.safeSetState({status:uj},function(){t.props.onEntered(a,s)})})})},r.performExit=function(){var e=this,t=this.props.exit,r=this.getTimeouts(),o=this.props.nodeRef?void 0:sh.default.findDOMNode(this);if(!t)return void this.safeSetState({status:uF},function(){e.props.onExited(o)});this.props.onExit(o),this.safeSetState({status:uU},function(){e.props.onExiting(o),e.onTransitionEnd(r.exit,function(){e.safeSetState({status:uF},function(){e.props.onExited(o)})})})},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,r=!0;return this.nextCallback=function(o){r&&(r=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:sh.default.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(!r||o)return void setTimeout(this.nextCallback,0);if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],a=i[0],s=i[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)},r.render=function(){var e=this.state.status;if(e===uW)return null;var t=this.props,r=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,aJ(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return n1.default.createElement(uB.Provider,{value:null},"function"==typeof r?r(e,o):n1.default.cloneElement(n1.default.Children.only(r),o))},t}(n1.default.Component);function uq(){}uV.contextType=uB,uV.propTypes={},uV.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:uq,onEntering:uq,onEntered:uq,onExit:uq,onExiting:uq,onExited:uq},uV.UNMOUNTED=uW,uV.EXITED=uF,uV.ENTERING=uG,uV.ENTERED=uj,uV.EXITING=uU;var uZ=/([A-Z])/g,uK=/^ms-/;function uY(e){return e.replace(uZ,"-$1").toLowerCase().replace(uK,"-ms-")}var uQ=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;let uX=function(e,t){var r,o="",i="";if("string"==typeof t)return e.style.getPropertyValue(uY(t))||((r=c7(e))&&r.defaultView||window).getComputedStyle(e,void 0).getPropertyValue(uY(t));Object.keys(t).forEach(function(r){var a=t[r];a||0===a?r&&uQ.test(r)?i+=r+"("+a+") ":o+=uY(r)+": "+a+";":e.style.removeProperty(uY(r))}),i&&(o+="transform: "+i+";"),e.style.cssText+=";"+o};function uJ(e,t){let r=uX(e,t)||"",o=-1===r.indexOf("ms")?1e3:1;return parseFloat(r)*o}function u0(e,t){var r,o,i,a,s,c,u,h,d;let p=uJ(e,"transitionDuration"),f=uJ(e,"transitionDelay"),g=(r=r=>{r.target===e&&(g(),t(r))},null==(o=p+f)&&(a=-1===(i=uX(e,"transitionDuration")||"").indexOf("ms")?1e3:1,o=parseFloat(i)*a||0),s=!1,c=setTimeout(function(){s||function(e,t,r,o){if(void 0===r&&(r=!1),void 0===o&&(o=!0),e){var i=document.createEvent("HTMLEvents");i.initEvent(t,r,o),e.dispatchEvent(i)}}(e,"transitionend",!0)},o+5),u=c8(e,"transitionend",function(){s=!0},{once:!0}),h=function(){clearTimeout(c),u()},d=c8(e,"transitionend",r),function(){h(),d()})}function u1(e){return e&&"setState"in e?sh.default.findDOMNode(e):null!=e?e:null}let u2=n1.default.forwardRef(({onEnter:e,onEntering:t,onEntered:r,onExit:o,onExiting:i,onExited:a,addEndListener:s,children:c,childRef:u,...h},d)=>{let p=(0,n1.useRef)(null),f=uR(p,u),g=e=>{f(u1(e))},m=e=>t=>{e&&p.current&&e(p.current,t)},b=(0,n1.useCallback)(m(e),[e]),v=(0,n1.useCallback)(m(t),[t]),w=(0,n1.useCallback)(m(r),[r]),S=(0,n1.useCallback)(m(o),[o]),x=(0,n1.useCallback)(m(i),[i]),C=(0,n1.useCallback)(m(a),[a]),_=(0,n1.useCallback)(m(s),[s]);return(0,lp.jsx)(uV,{ref:d,...h,onEnter:b,onEntered:w,onEntering:v,onExit:S,onExited:C,onExiting:x,addEndListener:_,nodeRef:p,children:"function"==typeof c?(e,t)=>c(e,{...t,ref:g}):n1.default.cloneElement(c,{ref:g})})}),u5={[uG]:"show",[uj]:"show"},u3=n1.forwardRef(({className:e,children:t,transitionClasses:r={},onEnter:o,...i},a)=>{let s={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},c=(0,n1.useCallback)((e,t)=>{e.offsetHeight,null==o||o(e,t)},[o]);return(0,lp.jsx)(u2,{ref:a,addEndListener:u0,...s,onEnter:c,childRef:ul(t),children:(o,i)=>n1.cloneElement(t,{...i,className:n0()("fade",e,t.props.className,u5[o],r[o])})})});u3.displayName="Fade";let u6=u3,u4=n1.forwardRef(({children:e,transition:t=u6,popperConfig:r={},rootClose:o=!1,placement:i="top",show:a=!1,...s},c)=>{var u;let h,d,p,f,g,m=(0,n1.useRef)({}),[b,v]=(0,n1.useState)(null),[w,S]=(u=s.offset,h=(0,n1.useRef)(null),d=u$(void 0,"popover"),p=u$(void 0,"tooltip"),f=(0,n1.useMemo)(()=>({name:"offset",options:{offset:()=>{if(u)return u;if(h.current){if(uT(h.current,d))return uL.POPPER_OFFSET;if(uT(h.current,p))return uH.TOOLTIP_OFFSET}return[0,0]}}}),[u,d,p]),[h,[f]]),x=uR(c,w),C=!0===t?u6:t||void 0,_=(g=ux(e=>{v(e),null==r||null==r.onFirstUpdate||r.onFirstUpdate(e)}),(0,n1.useCallback)(function(...e){return g.current&&g.current(...e)},[g]));return uk(()=>{b&&s.target&&(null==m.current.scheduleUpdate||m.current.scheduleUpdate())},[b,s.target]),(0,n1.useEffect)(()=>{a||v(null)},[a]),(0,lp.jsx)(uS,{...s,ref:x,popperConfig:{...r,modifiers:S.concat(r.modifiers||[]),onFirstUpdate:_},transition:C,rootClose:o,placement:i,show:a,children:(o,{arrowProps:i,popper:a,show:s})=>{var c;let{ref:u}=o,{ref:h}=i;o.ref=u.__wrapped||(u.__wrapped=e=>u(u1(e))),i.ref=h.__wrapped||(h.__wrapped=e=>h(u1(e)));let d=null==a?void 0:a.placement,p=Object.assign(m.current,{state:null==a?void 0:a.state,scheduleUpdate:null==a?void 0:a.update,placement:d,outOfBoundaries:(null==a||null==(c=a.state)||null==(c=c.modifiersData.hide)?void 0:c.isReferenceHidden)||!1,strategy:r.strategy}),f=!!b;return"function"==typeof e?e({...o,placement:d,show:s,...!t&&s&&{className:"show"},popper:p,arrowProps:i,hasDoneInitialMeasure:f}):n1.cloneElement(e,{...o,placement:d,arrowProps:i,popper:p,hasDoneInitialMeasure:f,className:n0()(e.props.className,!t&&s&&"show"),style:{...e.props.style,...o.style}})}})});u4.displayName="Overlay";var u8=nQ(556),u7=nQ.n(u8);function u9(e,t,r){let[o]=t,i=o.currentTarget,a=o.relatedTarget||o.nativeEvent[r];a&&a===i||ut(i,a)||e(...t)}nQ(311),u7().oneOf(["click","hover","focus"]);let he=({trigger:e=["hover","focus"],overlay:t,children:r,popperConfig:o={},show:i,defaultShow:a=!1,onToggle:s,delay:c,placement:u,flip:h=u&&-1!==u.indexOf("auto"),...d})=>{var p,f,g,m,b,v,w;let S,x,C,_,T,E,O=(0,n1.useRef)(null),$=uR(O,ul(r)),P=(S=(0,n1.useRef)(!0),x=(0,n1.useRef)(()=>S.current),(0,n1.useEffect)(()=>(S.current=!0,()=>{S.current=!1}),[]),_=x.current,T=(0,n1.useRef)(),w=()=>clearTimeout(T.current),(C=(0,n1.useRef)(w)).current=w,E=C,(0,n1.useEffect)(()=>()=>E.current(),[]),(0,n1.useMemo)(()=>{let e=()=>clearTimeout(T.current);return{set:function(t,r=0){_()&&(e(),r<=0x7fffffff?T.current=setTimeout(t,r):function e(t,r,o){let i=o-Date.now();t.current=i<=0x7fffffff?setTimeout(r,i):setTimeout(()=>e(t,r,o),0x7fffffff)}(T,t,Date.now()+r))},clear:e,handleRef:T}},[])),D=(0,n1.useRef)(""),[A,B]=(p=(0,n1.useRef)(void 0!==i),g=(f=(0,n1.useState)(a))[0],m=f[1],b=void 0!==i,v=p.current,p.current=b,!b&&v&&g!==a&&m(a),[b?i:g,(0,n1.useCallback)(function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];s&&s.apply(void 0,[e].concat(r)),m(e)},[s])]),W=c&&"object"==typeof c?c:{show:c,hide:c},{onFocus:F,onBlur:G,onClick:j}="function"!=typeof r?n1.Children.only(r).props:{},U=(0,n1.useCallback)(()=>{if(P.clear(),D.current="show",!W.show)return void B(!0);P.set(()=>{"show"===D.current&&B(!0)},W.show)},[W.show,B,P]),V=(0,n1.useCallback)(()=>{if(P.clear(),D.current="hide",!W.hide)return void B(!1);P.set(()=>{"hide"===D.current&&B(!1)},W.hide)},[W.hide,B,P]),Z=(0,n1.useCallback)((...e)=>{U(),null==F||F(...e)},[U,F]),K=(0,n1.useCallback)((...e)=>{V(),null==G||G(...e)},[V,G]),Q=(0,n1.useCallback)((...e)=>{B(!A),null==j||j(...e)},[j,B,A]),X=(0,n1.useCallback)((...e)=>{u9(U,e,"fromElement")},[U]),J=(0,n1.useCallback)((...e)=>{u9(V,e,"toElement")},[V]),ee=null==e?[]:[].concat(e),et={ref:e=>{$(u1(e))}};return -1!==ee.indexOf("click")&&(et.onClick=Q),-1!==ee.indexOf("focus")&&(et.onFocus=Z,et.onBlur=K),-1!==ee.indexOf("hover")&&(et.onMouseOver=X,et.onMouseOut=J),(0,lp.jsxs)(lp.Fragment,{children:["function"==typeof r?r(et):(0,n1.cloneElement)(r,et),(0,lp.jsx)(u4,{...d,show:A,onHide:V,flip:h,placement:u,popperConfig:o,target:O.current,children:t})]})},ht={},hr=document.createElement("canvas");hr.id="gk-graph-avatar-canvas";let s2=class s2 extends n1.default.Component{image;constructor(e){super(e),this.image=new Image,this.image.crossOrigin="anonymous",this.image.onload=()=>this.refreshImage(),this.state={dataURL:void 0}}static getDerivedStateFromProps(e,t){return{dataURL:!e.url&&t.dataURL?void 0:t.dataURL}}componentDidMount(){let{url:e}=this.props;e&&this.startImgLoading(e)}componentDidUpdate(e){let{url:t}=this.props;t&&e.url!==t&&this.startImgLoading(t)}componentWillUnmount(){this.image=void 0}refreshImage(){let e;if(this.image){if(this.image.complete){let t=this.image.height,r=this.image.width,o=hr.getContext("2d");o.canvas.width=r,o.canvas.height=t,o.drawImage(this.image,0,0,r,t),e=hr.toDataURL(),ht[this.image.src]=e}this.setState({dataURL:e})}}startImgLoading(e){if(!this.image)return;let t=ht[e];if(t)return void this.setState({dataURL:t});this.image.src=e}render(){let{avatarClassName:e,avatarStyle:t,children:r,className:o,context:i,enableTransparentBackground:a,style:s,height:c,hint:u,size:h,width:d}=this.props,{dataURL:p}=this.state,f=!p,g=f?s:{...s,...t,background:`url(${p}) 0% 0% / ${h}px no-repeat ${a?"":"var(--app__bg0, #1c1e23)"}`,height:c||h,width:d||h},m=n0()(o,f?"":e,!f&&{avatar:!0}),b=f?n1.default.createElement(n1.default.Fragment,null,r):void 0;return n1.default.createElement("div",{className:m,"data-test-class":p?"avatar":"local-avatar","data-vscode-context":iH(i),style:g,title:u},b)}};function ho({icon:e,tooltipClassName:t="",tooltipId:r,tooltipText:o}){return o&&r?n1.default.createElement(he,{delay:400,overlay:n1.default.createElement(uH,{className:n0()("gk-graph","bs-tooltip",t),id:r},o),placement:"top",trigger:["hover","focus"]},e||n1.default.createElement("span",null)):n1.default.createElement(n1.default.Fragment,null," ",e||n1.default.createElement("span",null)," ")}function hn({id:e,toolTipText:t,getExternalIcon:r,issueTrackerType:o}){return n1.default.createElement(ho,{icon:r(`issue-${o}`),tooltipClassName:"wide pull-left",tooltipId:`issue-tooltip-${e}`,tooltipText:t?t.trim():""})}function hi({hostingServiceType:e,icon:t,id:r,toolTipText:o}){return n1.default.createElement(ho,{icon:t,tooltipClassName:"wide pull-left",tooltipId:`pr-tooltip-${e}-${r}`,tooltipText:o?o.trim():""})}function ha({icon:e,type:t,upstream:r,tooltipText:o}){return n1.default.createElement(ho,{icon:e,tooltipClassName:"wide pull-left",tooltipId:`upstream-indicator-tooltip-${t}-${r}`,tooltipText:o})}function hs({avatarClassName:e,avatarUrl:t,context:r,icon:o,tooltipText:i}){return n1.default.createElement(ho,{icon:n1.default.createElement("span",{className:"ref-avatar"},n1.default.createElement(s2,{avatarClassName:e,context:r,enableTransparentBackground:!0,size:14,url:t},o)),tooltipId:`remote-icon-${i||"tooltipText"}`,tooltipText:i})}var hl=function({className:e,name:t}){return n1.default.createElement("span",{className:n0()("ref-name","truncate",e),style:{height:18}},t)};function hc(e,t,r,o=0){let i,a,s,{annotated:c,refType:u,message:h,name:d}=t;switch(u){case iu:{a=t.hostingServiceType?`${iu}-${t.hostingServiceType}`:iu,i=t.avatarUrl;let e=`${d} (${r("Ref-Remote")})`;s=t.owner?`${t.owner} -> ${e}`:e;break}case"tag":a="tag",s=`${c&&h?h:d} (${r("Ref-Tag")})`;break;default:{let e=null!=t.worktreeId;a=e?ih:ic,s=`${d} (${r(e?"Ref-Worktree":"Ref-Local")})`}}let p=t.context||void 0,f=n1.default.createElement("span",{"data-vscode-context":iH(p)},e(a));return n1.default.createElement(hs,{avatarUrl:i||"",context:p,icon:f,key:`ref-icon-${o}-${u}-${d}`,tooltipText:s})}let lt=class lt extends n1.default.PureComponent{getContextForRefGroupIfExists(e,t,r){let o,i=!1,a=!1,s=!1;for(let c of e){if(c.refType===ic)return r?c.contextGroup||t:c.context;c.refType===iu&&("origin"===c.owner?(i=!0,o=r?c.contextGroup||t:c.context):i||"upstream"!==c.owner?i||a||(s=!0,o=r?c.contextGroup||t:c.context):(a=!0,o=r?c.contextGroup||t:c.context)),i||a||s||(o=r?c.contextGroup||t:c.context)}return o}getDecoratedRefIcon(e,t,r,o,i){return n1.default.createElement("div",{className:i,"data-vscode-context":iH(o),key:e,onClick:e=>this.onClickMetadata(e,r),onDoubleClick:e=>this.onDoubleClickMetadata(e,r)},t)}getPullRequestIconsAndTooltipsForRef(e,t,r){let o,{getExternalIcon:i,onMissingRefMetadata:a,translate:s}=this.props;if(!(o=t.refType===ic?t.upstream?e?.[t.upstream.id]?.[iM]:null:iB(t,e,a,iM))||0===o.length)return null;let c=[];for(let e of o){let{context:o,hostingServiceType:a,id:u,title:h}=e;if(r.has(u))continue;r.add(u);let d={refId:t.id,type:iM,data:e},p=`pr-icon-${t.refType}-${t.name}-${u}`,f=this.getDecoratedRefIcon(p,i("pull-request"),d,o,n0()("ref-pull-request"));c.push(n1.default.createElement(hi,{hostingServiceType:a,icon:f,id:u,key:p,toolTipText:h&&""!==h.trim()?s("PullRequestIcon-Tooltip",u,h,function(e){switch(e){case"github":return"GitHub";case"githubEnterprise":return"GitHub Enterprise";case"gitlab":return"GitLab";case"gitlabSelfHosted":return"GitLab Self-Hosted";case"azureDevops":return"Azure DevOps";case"bitbucket":return"Bitbucket";case"bitbucketServer":return"Bitbucket Server";default:return e}}(a)):""}))}return c}getUpstreamIndicatorIconsAndTooltipsForRef(e,t){let{getExternalIcon:r,onMissingRefMetadata:o,translate:i}=this.props,a=iB(t,e,o,i$);if(!a||0===a.ahead&&0===a.behind)return null;let s={refId:t.id,type:i$,data:a},c=a.ahead>0,u=a.behind>0,h=a.context;if(c||u){let e,o,d=c?`${a.ahead>99?"99+":a.ahead}`:"",p=u?`${a.behind>99?"99+":a.behind}`:"",f=`${a.owner}/${a.name}`;u&&c?(e=i("UpstreamIndicatorIcon-BehindAndAheadTooltip",p,d,f),o="ahead-behind"):u?(e=i("UpstreamIndicatorIcon-BehindTooltip",p,f),o="behind"):c&&(e=i("UpstreamIndicatorIcon-AheadTooltip",d,f),o="ahead");let g=n1.default.createElement(n1.default.Fragment,null,u?n1.default.createElement(n1.default.Fragment,null,n1.default.createElement("span",{className:"ref-upstream-behind"},p),r("upstream-behind")):null,c?n1.default.createElement(n1.default.Fragment,null,n1.default.createElement("span",{className:"ref-upstream-ahead"},d),r("upstream-ahead")):null);return n1.default.createElement(ha,{icon:this.getDecoratedRefIcon(`ref-upstream-${t.id}`,g,s,h,"ref-upstream"),tooltipText:e,type:o,upstream:f})}return null}getIssueIconsAndTooltipsForRef(e,t,r){let{getExternalIcon:o,onMissingRefMetadata:i,translate:a}=this.props,s=iB(t,e,i,iI);if(!s||0===s.length)return null;let c=[];for(let e of s){if(r.has(e.id))continue;let i={refId:t.id,type:iI,data:e};r.add(e.id);let s=n1.default.createElement(hn,{getExternalIcon:o,id:e.id,issueTrackerType:e.issueTrackerType,key:`issue-icon-${e.id}`,toolTipText:e.title&&""!==e.title.trim()?a("IssueIcon-Tooltip",e.displayId,e.title):""}),u=e.context||void 0;c.push(this.getDecoratedRefIcon(`ref-issue-${e.id}`,s,i,u,n0()("ref-issue")))}return c}onContextMenu=e=>{let{onContextMenu:t,refGroup:r,sha:o}=this.props;t(e,r,o)};onClick=e=>{let{onClick:t,refGroup:r,sha:o}=this.props;t(e,r,o)};onClickMetadata=(e,t)=>{e.stopPropagation();let{onClick:r,refGroup:o,sha:i}=this.props;r(e,o,i,t)};onDoubleClick=e=>{let{onDoubleClick:t,refGroup:r,sha:o}=this.props;t(e,r,o)};onDoubleClickMetadata=(e,t)=>{e.stopPropagation();let{onDoubleClick:r,refGroup:o,sha:i}=this.props;r(e,o,i,t)};render(){let{enableShowHideRefsOptions:e,hasActive:t,hasRefs:r,isActive:o,isGhostRef:i,getExternalIcon:a,groupIsHovered:s,isInUnsupportedRebase:c,onRefBeginDrag:u,onRefDragEnter:h,onRefDragLeave:d,onRefDrop:p,onRefCanDrag:f,onRefCanDrop:g,onRefEndDrag:m,isRefGroupIncluded:b,refGroup:v,refGroupContext:w,refIconsPosition:S,refMetadata:x,onHovered:C,onHideRefClick:_,sha:T,showRemoteNamesOnRefs:E,enabledRefMetadataTypes:O,translate:$,type:P,useColumnHeaderIcons:D}=this.props,A=e&&!t&&s&&!b,B=S===id.LEFT,W=S===id.RIGHT,F=n0()("ref-node-wrapper","flex"),G=n0()("ref-node","flex","items-center","p1",{"has-active":t,"dim-ref":!r&&s,"is-active":o}),j="";v.length>0&&(j=E&&v[0].fullName||v[0].name);let U=n0()({"display-none":D&&!s&&W,mr1:W}),V=n1.default.createElement(hl,{className:U,name:j}),Z=[],K=[],Q=[],X=null,J=new Set,ee=new Set;v.forEach((e,t)=>{if(Z.push(hc(a,e,$,t)),O.includes(iI)&&(e.refType===ic||e.refType===iu)){let t=this.getIssueIconsAndTooltipsForRef(x,e,ee);t&&Q.push(...t)}if(O.includes(iM)&&e.refType===iu){let t=this.getPullRequestIconsAndTooltipsForRef(x,e,J);t&&K.push(...t)}O.includes(i$)&&e.refType===ic&&(X=this.getUpstreamIndicatorIconsAndTooltipsForRef(x,e))});let et=n1.default.createElement("span",{className:n0()("flex","items-center","ref-icons",{"is-active":o,"is-left-position":B})},[...Z,...K,...Q]),er=o?n1.default.createElement(ho,{icon:n1.default.createElement("span",{className:n0()("ref-icon-current")},a("check")),tooltipId:"ref-icon-current",tooltipText:$("Ref-Current")}):null,en=this.getContextForRefGroupIfExists(v,w),ei=this.getContextForRefGroupIfExists(v,w,!0),ea=A?n1.default.createElement("span",{className:"flex ml-auto"},n1.default.createElement(ho,{icon:n1.default.createElement("span",{className:n0()("mr1","button"),onClick:e=>_(e,v,T)},a("hide")),tooltipId:`ref-node-toggle-visibility-btn-${j}`,tooltipText:$("Hide")})):null;return n1.default.createElement(eo,{canDrag:e=>f(e),canDrop:(e,t,r)=>g(e,t,r),className:F,"data-vscode-context":iH(ei),dndData:{commitType:P,isGhostRef:i,isInUnsupportedRebase:c,refGroup:v,sha:T},dndId:`DndRefNode_${v[0].id}`,onBeginDrag:(e,t)=>u(e,t),onDragEnter:(e,t,r)=>h(e,t,r),onDragLeave:(e,t,r)=>d(e,t,r),onDrop:(e,t,r)=>p(e,t,r),onEndDrag:(e,t,r)=>m(e,t,r),style:{minWidth:0,marginLeft:3,height:22}},n1.default.createElement("span",{className:G,"data-test-class":"ref-node-span","data-vscode-context":iH(en),onContextMenu:c?void 0:this.onContextMenu,onDoubleClick:c?void 0:this.onDoubleClick,onMouseDown:this.onClick,onMouseEnter:e=>C(e,v,T),style:{minWidth:"100%"}},er,B&&et,V,W&&et,X,ea))}};let lo=class lo extends n1.default.Component{headIconsRef=n1.default.createRef();containerRef=n1.default.createRef();popoverMenuTargetRef=n1.default.createRef();constructor(e){super(e),this.state={showPopoverMenu:!1}}onHiddenRefsClick=e=>{let{showPopoverMenu:t}=this.state;e.stopPropagation(),this.setState({showPopoverMenu:!t})};onShowRefNodes=(e,t,r)=>{this.props.onToggleRefNodesShown(e,t,r),0===Object.keys(this.props.excludeRefsById).length&&this.setState({showPopoverMenu:!0})};compareGraphRefOpts(e,t){let r=e.name.localeCompare(t.name);return 0===r&&e.type===iu?-1:r}render(){let{columnSetting:e,enableResizer:t,enableShowHideRefsOptions:r,getExternalIcon:o,graphWidth:i,graphZones:a,graphZoneType:s,excludeRefsById:c,includeOnlyRefsById:u,isDraggable:h,onFilterColumnClick:d,onHover:p,onResize:f,onResizeEnd:g,onResizeFromPropChange:m,onResizeStart:b,onUnhover:v,onSettingsClick:w,rowsStatsLoading:S,settingsContext:x,showRemoteNamesOnRefs:C,translate:_}=this.props,{showPopoverMenu:T}=this.state,E=iJ(s,a);if(!E)return null;let O=iq(s,a),$=E.currentWidth-4,P=`${s}-header`,D=i0(E),A=e?.isFilterable||!1,B=D&&(A||r),W=n0()("columns-btn",{"small-btn":B}),F=null,G=null;if("ref"===s){let e=Object.entries(c),t=Object.values(u),i=t.length>0,a=i&&t.some(e=>"tag"===e.type),s=e.filter(e=>"tag"===e[1].type&&(!i||!a)||!u[e[0]]);s.length>0&&(G=s.sort((e,t)=>this.compareGraphRefOpts(e[1],t[1])).map((e,t)=>{let r=e[0],i=e[1];c[r].id=r;let a={name:i.name,refType:i.type,owner:i.owner,avatarUrl:i.avatarUrl},s=(C||"*"===a.name)&&a.refType===iu?`${a.owner}/${a.name}`:a.name;return n1.default.createElement("li",{id:r,key:r,onClick:e=>this.onShowRefNodes(e,[c[r]],!0)},hc(o,a,_,t),n1.default.createElement("span",{className:"ml1 text-ellipsis"},s))}),F=r?n1.default.createElement("div",{className:n0()(W,"right","text-normal","button",T?"active":null),ref:this.popoverMenuTargetRef},n1.default.createElement(ho,{icon:n1.default.createElement("span",{onClick:this.onHiddenRefsClick},o("hide")),tooltipId:"header-ref-node-hidden-refs-btn",tooltipText:_("GraphHeader-HiddenRefs-btn")})):null)}let j=A?n1.default.createElement("div",{className:n0()(W,"columns-filter","right","fs-1",{filtering:e?.isFilterActive||!1})},n1.default.createElement(ho,{icon:n1.default.createElement("span",{className:"columns-filter-icon text-disabled hover-icon",id:`${s}-header-filter`,onClick:e=>d(e,s),style:{height:22,marginBottom:2}},o("filter")),tooltipId:"header-columns-filter",tooltipText:_("GraphHeader-Filter")})):null,U=!D&&s===iw&&S?n1.default.createElement("span",{className:n0()(W,"spinner")},o("loading")):null,V=n1.default.createElement(u4,{container:this.containerRef.current,onHide:T?()=>{this.setState({showPopoverMenu:!1})}:void 0,placement:"bottom",rootClose:T,show:T,target:this.popoverMenuTargetRef.current},e=>n1.default.createElement(uL,{className:n0()({"is-last-header":O}),id:"opts-popover",...e},n1.default.createElement("ul",null,G))),Z=O&&w?n1.default.createElement("div",{className:n0()("columns-btn","columns-settings","right","fs-1"),"data-vscode-context":iH(x)},n1.default.createElement(ho,{icon:n1.default.createElement("span",{className:"columns-settings-icon text-disabled hover-icon",onClick:e=>w(e,i)},o("settings")),tooltipId:"header-columns-settings",tooltipText:_("GraphHeader-EditColumns")})):null,K=this.headIconsRef?.current?.clientWidth??0,Q=n1.default.createElement("div",{className:"header-columns-icons",ref:this.headIconsRef},Z,U,j,F),X=D?n1.default.createElement(n1.default.Fragment,null,n1.default.createElement("div",{className:n0()(W,"justify-start",{ml1:!B}),style:{width:$-K},title:_(E.headerLabelUntranslated)},o(function(e){switch(e){case im:return"graph";case"ref":return"branch";case ib:return"message";case iv:return"author";case iy:return"datetime";case"sha":return"commit";case iw:return"changes";default:return}}(s))),Q):n1.default.createElement(n1.default.Fragment,null,n1.default.createElement("div",{className:"text-disabled text-ellipsis",style:{height:22,overflow:"hidden",width:$-K}},n1.default.createElement("span",{className:"fs-1 ml1 font-monospace"},_(E.headerLabelUntranslated))),Q),J=n1.default.createElement("div",{onMouseEnter:p,onMouseLeave:v},V,X),ee=n0()("panel-bg0","graph-header",{"is-draggable":h,"is-last-header":O});return n1.default.createElement("div",{className:ee,id:P,key:P,ref:this.containerRef,style:{zIndex:2,transform:"translate3d(0, 0, 0)",...O?{minWidth:$}:{display:"flex",minWidth:E.currentWidth,width:E.currentWidth}}},O?J:n1.default.createElement(iO,{className:ee,enable:t,handleStyles:{right:{right:0}},height:22,id:`${s}HeaderColumn`,onResize:f?e=>f(E,e):void 0,onResizeEnd:g?e=>g(E,e):void 0,onResizeFromPropChange:m?e=>m(E,e):void 0,onResizeStart:b?e=>b(E,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z2 border-right",style:{display:"flex"},translate:_,width:E.currentWidth,widthConstraints:i2(s,a,i)},J))}};let lr=class lr extends n1.default.PureComponent{canDrag=!1;isDraggable=e=>this.canDrag&&e.props.isDraggable;isDroppable=(e,t)=>e.props.graphZoneType!==t?.props?.graphZoneType&&(!t||t.props.isDroppable);onDrop=(e,t)=>{this.props.onColumnReOrdered&&this.props.onColumnReOrdered(e.props.graphZoneType,t?t.props.graphZoneType:null)};onZoneHover=()=>{this.canDrag=!0};onZoneUnHover=()=>{this.canDrag=!1};render(){let{columnsSettings:e,dragAppendToContainer:t,enableResizer:r,enableShowHideRefsOptions:o,getExternalIcon:i,excludeRefsById:a,headerContext:s,includeOnlyRefsById:c,onFilterColumnClick:u,onPopupGraphHeaderContextMenu:h,onGraphZoneResize:d,onGraphZoneResizeEnd:p,onGraphZoneResizeFromPropChange:f,onSettingsClick:g,onToggleRefNodesShown:m,graphZones:b,repoPath:v,rowsStatsLoading:w,showRemoteNamesOnRefs:S,translate:x,width:C,height:_,settingsContext:T}=this.props,E=n1.default.createElement("div",{className:"panel-bg0",style:{height:22,marginBottom:2,marginLeft:-7,minWidth:11}});return n1.default.createElement("div",{className:"graph-header flex","data-vscode-context":iH(s),onContextMenu:h?e=>h(e,C):void 0,style:{height:22,marginBottom:2}},E,n1.default.createElement(iL,{className:"flex",direction:"horizontal",isDraggable:this.isDraggable,isDroppable:this.isDroppable,mirrorContainer:t,onDrop:this.onDrop},b.map(t=>n1.default.createElement(lo,{columnSetting:e[t.type],enableResizer:r,enableShowHideRefsOptions:o,excludeRefsById:a,getExternalIcon:i,graphHeight:_,graphWidth:C,graphZones:b,graphZoneType:t.type,id:`${t.type}Header`,includeOnlyRefsById:c,isDraggable:t.isCustomizable,isDroppable:t.isCustomizable,key:`${t.type}Header`,onFilterColumnClick:u,onHover:this.onZoneHover,onResize:d,onResizeEnd:p,onResizeFromPropChange:f,onSettingsClick:g,onToggleRefNodesShown:m,onUnhover:this.onZoneUnHover,repoPath:v,rowsStatsLoading:w,settingsContext:T,showRemoteNamesOnRefs:S,translate:x}))))}};function hu(e){let{constraints:{max:t,min:r},stats:{files:o,additions:i,deletions:a},getExternalIcon:s,isLastColumn:c,isRowSelected:u,verticalScrollWidth:h,zoneWidth:d}=e,p=i+a,f=Math.max(r,Math.min(t,p)),g=c?h+25:25;p<=f&&(g+=25);let m=Math.max(10,f/t*(d-52-g));return n1.default.createElement("div",{className:n0()("changes-zone",u?"selected":null)},n1.default.createElement("span",{className:"changes-files",style:{width:52}},n1.default.createElement("span",{className:"mr1"},s("files")),n1.default.createElement("span",{className:"mr1"},o>999?"999+":o)),n1.default.createElement("span",{className:"changes-bar",style:{width:m}},i?n1.default.createElement("div",{className:"changes-sub-bar added",style:{width:i/p*m}}):null,a?n1.default.createElement("div",{className:"changes-sub-bar deleted",style:{width:a/p*m}}):null))}let hh=n0()("absolute","top-0","right-0","bottom-0","left-0","time-line"),hd=n0()(hh,"z2");var hp=function({z2:e}){return n1.default.createElement("div",{className:e?hd:hh,style:{height:2}})};let hf=n1.default.createElement("div",{className:"color-strip height-100",style:{width:2}}),hg={},hm={};let ld=class ld extends n1.default.PureComponent{render(){let e,t,{clearCurrentlyHoveredGraphCommit:r,children:o,column:i,columnForColoring:a,context:s,currentlyHoveredCommitSha:c,dimRowsOfSelectedCommit:u,getExternalIcon:h,graphZoneType:d,hasAvatars:p,highlightRowsOnRefHover:f,isDimmedMergeCommitRow:g,isHighlighted:m,isHovering:b,isLastColumn:v,isInUnsupportedRebase:w,isMissingHoveredRefGroup:S,isSelected:x,numGraphColumns:C,onContextMenu:_,onClickCommit:T,onDoubleClickCommit:E,rowContext:O,sha:$,showColorStrip:P,showConflictIcon:D,showTimeline:A,setAsCurrentlyHoveredGraphCommit:B,style:W,title:F,type:G,verticalScrollWidth:j,zoneWidth:U}=this.props,V=((t=hg[e=G+b.toString()])||(t=n0()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative",G,{"is-hovering":b}),hg[e]=t),t),Z=function(e,t,r,o,i,a=!1,s=!1,c=!1,u=!1){let h=`${e}${t}${o}${r}${a}${s}${c}${u}${i}`,d=hm[h];return d||(d=n0()(`column-${t%i+1}`,"graph-row","height-100-percent","flex",e,{"is-selected":o},{"is-highlighted":r},{"dimmed-row":u&&!r||a&&(s||c)}),hm[h]=d),d}(G,a??i,m,x,C,S,f,u,g),K=A?n1.default.createElement(hp,null):null;return n1.default.createElement("div",{className:V,"data-vscode-context":iH(O),onContextMenu:w?void 0:e=>_(e,d,$),onDoubleClick:e=>E(e,d,$),onMouseDown:e=>T(e,d,$),onMouseEnter:e=>B(e,d,$,c),onMouseLeave:e=>r(e,d,$,c),style:W},K,n1.default.createElement("div",{className:Z,"data-vscode-context":iH(s)},P?hf:null,D?n1.default.createElement("span",{className:n0()("ml2")},h("warning")):null,n1.default.createElement("span",{className:n0()("graph-zone","width-100","flex-1"),style:{lineHeight:"22px",...v&&{width:U-j},...p&&{marginLeft:5}},title:F},o)))}};function hb(e){let t=(e||"").trim().toUpperCase();if(0===t.length)return"?";let r=t.split(" ");return 1===r.length?r[0][0]:r.length>1?r[0][0]+r[r.length-1][0]:"?"}function hv(e,t){return e&&t?`${e} <${t}>`:e||t||""}let lf=class lf extends n1.default.Component{constructor(e){super(e),this.state={tooltipText:""}}getDefaultAvatar=(e,t,r)=>{var o;let{authorInitials:i,column:a,context:s,cssVariables:c,style:u,fontSize:h,minWidth:d,size:p,title:f=""}=this.props,g=void 0!==a&&c[is(a)]||"#199489",m=("hsla"===(o=an(g.trim())).type&&(o=ar(o)),(299*o.r+587*o.g+114*o.b)/1e3<128)?"#FFFFFF":"#000000",b={alignItems:"center",backgroundColor:g,backgroundSize:p,color:m,display:"flex",fontSize:`${h}px`,fontWeight:"bold",height:e,justifyContent:"center",minWidth:d,top:r,width:t,...u};return n1.default.createElement("div",{className:this.getAvatarClassName(),"data-vscode-context":iH(s),style:b,title:f},i?i.toUpperCase():"")};ensureTooltipText=()=>{let{tooltip:e}=this.props;this.setState({tooltipText:"function"==typeof e?e():e})};getAvatarClassName(){return n0()("avatar","gravatar","rad2",this.props.className)}render(){let{tooltipText:e}=this.state,{avatarUrl:t,context:r,style:o,height:i,minWidth:a,size:s,title:c="",tooltip:u,top:h,useAuthorInitialsForAvatars:d,width:p}=this.props,f=i||s,g=p||s,m=h||11-f/2,b={top:m,minWidth:a,...o},v=this.getDefaultAvatar(f,g,m),w=d?v:n1.default.createElement("span",null,n1.default.createElement(s2,{avatarClassName:this.getAvatarClassName(),avatarStyle:b,context:r,height:f,hint:c,size:s,url:t,width:g},this.getDefaultAvatar(f,g,m)));return u?n1.default.createElement(he,{delay:250,onEnter:this.ensureTooltipText,overlay:n1.default.createElement(uH,{className:"gk-graph",id:"graph-gravatar-tooltip"},e),placement:"top",trigger:["hover","focus"]},w):w}};let hy={type:u7().string,tooltip:u7().bool,as:u7().elementType},hw=n1.forwardRef(({as:e="div",className:t,type:r="valid",tooltip:o=!1,...i},a)=>(0,lp.jsx)(e,{...i,ref:a,className:n0()(t,`${r}-${o?"tooltip":"feedback"}`)}));hw.displayName="Feedback",hw.propTypes=hy;let hS=n1.createContext({}),hx=n1.forwardRef(({bsPrefix:e,type:t,size:r,htmlSize:o,id:i,className:a,isValid:s=!1,isInvalid:c=!1,plaintext:u,readOnly:h,as:d="input",...p},f)=>{let{controlId:g}=(0,n1.useContext)(hS);return e=u$(e,"form-control"),(0,lp.jsx)(d,{...p,type:t,size:o,ref:f,readOnly:h,id:i||g,className:n0()(a,u?`${e}-plaintext`:e,r&&`${e}-${r}`,"color"===t&&`${e}-color`,s&&"is-valid",c&&"is-invalid")})});hx.displayName="FormControl";let hC=Object.assign(hx,{Feedback:hw}),hk={ADDED:"added",DELETED:"deleted",MODIFIED:"modified",RENAMED:"renamed"};let lC=class lC extends n1.default.Component{render(){let{fileDiffType:e,getExternalIcon:t,translate:r}=this.props;if(!e)return null;let o=(e=>{switch(e){case hk.ADDED:return"added";case hk.MODIFIED:return"modified";case hk.DELETED:return"deleted";case hk.RENAMED:return"renamed";default:return null}})(e),i=(e=>{switch(e){case hk.ADDED:return"color-green";case hk.MODIFIED:return"color-orange";case hk.DELETED:return"color-red";case hk.RENAMED:return"color-blue";default:return null}})(e),a=(e=>{switch(e){case hk.ADDED:return"CommitDiffSection-FileAdded";case hk.MODIFIED:return"CommitDiffSection-FileModified";case hk.DELETED:return"CommitDiffSection-FileDeleted";case hk.RENAMED:return"CommitDiffSection-FileRenamed";default:return null}})(e),s=n0()("fs-1",i,"mr1");return n1.default.createElement("span",{className:s,title:r(a)},o&&t(o))}};let{ADDED:h_,DELETED:hR,MODIFIED:hT,RENAMED:hE}=hk,hM={[h_]:"CommitDiffSection-NFilesAdded",[hR]:"CommitDiffSection-NFilesDeleted",[hT]:"CommitDiffSection-NFilesModified",[hE]:"CommitDiffSection-NFilesRenamed"};var hO=function({count:e,diffType:t,getExternalIcon:r,fileNodeListStyle:o,translate:i}){let a,s,c=o?e:i(hM[t],e);return o&&(a={fontSize:12,marginRight:6},s={fontSize:12,margin:"0px 3px 0px 0px"}),n1.default.createElement("span",{className:"tiny-files-readout",style:a},n1.default.createElement(lC,{fileDiffType:t,getExternalIcon:r,style:s,translate:i}),n1.default.createElement("span",{className:"tiny-files-readout-text"},c))},h$=function({diffStats:e,fileNodeListStyle:t,getExternalIcon:r,translate:o}){let{g:i}=nX;if(!e||!Object.values(e).some(e=>!!e))return n1.default.createElement("span",null);let a=e.modified?n1.default.createElement(hO,{count:e.modified,diffType:i.MODIFIED,fileNodeListStyle:!0,getExternalIcon:r,translate:o}):null,s=e.added?n1.default.createElement(hO,{count:e.added,diffType:i.ADDED,fileNodeListStyle:!0,getExternalIcon:r,translate:o}):null,c=e.deleted?n1.default.createElement(hO,{count:e.deleted,diffType:i.DELETED,fileNodeListStyle:!0,getExternalIcon:r,translate:o}):null,u=e.renamed?n1.default.createElement(hO,{count:e.renamed,diffType:i.RENAMED,fileNodeListStyle:!0,getExternalIcon:r,translate:o}):null;return n1.default.createElement("span",{className:"summary",style:t?{marginLeft:10}:null},a,s,c,u)};let lI=class lI extends n1.default.Component{textWidthRef=n1.default.createRef();wrapperRef=n1.default.createRef();static defaultProps={style:{},value:""};componentDidMount(){this.wrapperRef?.current&&(this.wrapperRef.current.style.width="0px")}componentDidUpdate(){this.textWidthRef?.current&&this.wrapperRef?.current&&(this.wrapperRef.current.style.width=`${Number(this.textWidthRef.current.offsetWidth)+35}px`)}componentWillUnmount(){this.props.onBlur&&this.props.onBlur()}onWipKeyDown(e){e.stopPropagation()}render(){let{clearCurrentlyHoveredGraphCommit:e,currentlyHoveredCommitSha:t,getExternalIcon:r,graphZoneType:o,isCommitting:i,isHovering:a,isSelected:s,onBlur:c,onClickCommit:u,onContextMenu:h,onFocus:d,onMessageChange:p,setAsCurrentlyHoveredGraphCommit:f,sha:g,style:m,translate:b,value:v,workDirStats:w}=this.props,S=n0()("graph-zone-column","pt3","pb3","pointer","height-100-percent","grow-3","graph-row-wrapper",io,{"is-hovering":a}),x=n0()("column-1","graph-row","flex",{"is-selected":s}),C=n1.default.createElement(h$,{diffStats:w,getExternalIcon:r,translate:b}),_=n1.default.createElement("div",{className:"work-dir-input",ref:this.wrapperRef},n1.default.createElement(hC,{"data-test-class":"work-dir-input-field",disabled:i,onBlur:e=>c(e),onChange:e=>p(e.target.value),onContextMenu:e=>h(e,o,g),onFocus:e=>d(e),onKeyDown:e=>this.onWipKeyDown(e),placeholder:b("WorkDirMessageInput-WIPPlaceholder"),type:"text",value:v}),n1.default.createElement("div",{className:"text-width","data-test-class":"work-dir-input-message",ref:this.textWidthRef},v));return n1.default.createElement("div",{className:S,onMouseEnter:e=>f(e,o,g,t),onMouseLeave:r=>e(r,o,g,t),style:m},n1.default.createElement("div",{className:x,"data-test-class":"work-dir-message-row-div",onMouseDown:e=>u(e,o,g)},_,C))}};function hI({hasRefs:e,isActiveSha:t,left:r,type:o,width:i}){let a=n0()("ref-line","z4",{"is-active":t});return e&&[n7,ie,n9].includes(o)?n1.default.createElement("hr",{className:a,style:{left:r,width:i}}):null}function hz({graphZoneModeConstants:{RADIUS_DIFF_MERGE_NODE_COMMIT_NODE:e},hasRefs:t,isActiveSha:r,nodeOffset:o,type:i}){return n1.default.createElement(hI,{hasRefs:t,isActiveSha:r,left:0,type:i,width:o+(i===ie?e:0)})}function hP({className:e,marginLeft:t}){return n1.default.createElement("div",{className:n0()("app-bg0","absolute","left-0","right-0","bottom-0","top-0","pt3","pb3",e),style:{marginLeft:t}},n1.default.createElement("div",{className:"commit-bg-color height-100-percent width-100-percent"}))}function hD({column:e,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:t,COMMIT_NODE_DIAMETER:r,COMMIT_ZONE_GUTTER_WIDTH:o}}){return n1.default.createElement(hP,{className:"z1",marginLeft:o+t*e+r/2})}function hA(){return n1.default.createElement(hP,{marginLeft:0})}let hL=(e,t,r,o,i,a,s=!1)=>{let c={height:a.COMMIT_MERGE_NODE_DIAMETER,left:r+a.COMMIT_MERGE_NODE_LEFT_OFFSET,marginTop:a.COMMIT_MERGE_NODE_TOP_OFFSET,opacity:o,width:a.COMMIT_MERGE_NODE_DIAMETER},u=n0()("node",i,"z6"),h=n1.default.createElement(uH,{className:"gk-graph",id:"graph-merge-node-tooltip"},hv(t,e)),d=n1.default.createElement("div",{className:u,"data-test-class":"tree-row-commit-node",style:c});return s?d:n1.default.createElement(he,{delay:250,overlay:h,placement:"top",trigger:["hover","focus"]},d)};let lW=class lW extends n1.default.PureComponent{render(){let{authorEmail:e,authorName:t,getExternalIcon:r,graphZoneModeConstants:o,left:i,opacity:a,suppressNonRefRowTooltips:s,translate:c,type:u}=this.props;return(t||e)&&u===n7?o.IS_COMPACT?hL(e,t,i,a,ie,o,s):(({authorEmail:e,authorInitials:t,authorName:r,avatarUrl:o,column:i,context:a,cssVariables:s,graphZoneModeConstants:c,left:u,message:h,opacity:d,suppressNonRefRowTooltips:p,type:f,useAuthorInitialsForAvatars:g})=>n1.default.createElement(lf,{authorInitials:t,avatarUrl:o,className:n0()("node",f,"z6"),column:i,context:a,cssVariables:s,fontSize:10,height:c.COMMIT_NODE_DIAMETER,size:c.COMMIT_ZONE_AVATAR_DIAMETER,style:{left:u,opacity:d},tooltip:p?void 0:()=>{let t=r&&""!==r.trim()&&"Unknown"!==r?hv(r,e):e,o=ac(as(h||"")),i="";if(0===o.length)i=t;else{o.unshift({email:e,name:r});for(let e=0;e<o.length;e+=1){let t=o[e];i+=hv(t.name,t.email),e<o.length-1&&(i+=", ")}}return i},top:c.COMMIT_NODE_TOP_OFFSET,useAuthorInitialsForAvatars:g,width:c.COMMIT_NODE_DIAMETER}))(this.props):u===ie||u===n9||u===it?hL(e,t,i,a,u,o,s):((e,t,r,o,i,a,s,c=!1,u,h=!1)=>{let d,p={height:u.COMMIT_NODE_DIAMETER,left:o,marginTop:u.COMMIT_NODE_TOP_OFFSET,opacity:i,width:u.COMMIT_NODE_DIAMETER};c&&(p.borderWidth=1);let f=n0()("gk-graph","node",s,"z6",{compact:c});d=s===ir?a("Stash"):s===io?a("Graph-WorkInProgress"):hv(r,t);let g=n1.default.createElement("div",{className:f,"data-test-class":"tree-row-commit-node",style:p},s!==ir||c?null:n1.default.createElement("span",null,e("stash"))),m=n1.default.createElement(uH,{className:"gk-graph",id:"graph-other-node-tooltip"},d);return h?g:n1.default.createElement(he,{delay:250,overlay:m,placement:"top",trigger:["hover","focus"]},g)})(r,e,t,i,a,c,u,o.IS_COMPACT,o,s)}};let lA=class lA extends n1.default.Component{render(){let{columnColorByColumn:e,edgeColumnMax:t,edges:r,nodeColumn:o,graphZoneModeConstants:{COMMIT_COLUMN_WIDTH:i,COMMIT_ZONE_GUTTER_WIDTH:a,COMMIT_ZONE_LINE_WIDTH:s,IS_COMPACT:c}}=this.props,u=function(e,t,r,o,i,a,s,c){let u=function(e,t,r,o){let i="";for(let a=0;a<=t;a++){let{passThrough:t,starting:s,ending:c}=e[a]??{};i=`${i}_${aw(a,r,s?.type,o)}_${aw(a,r,c?.type,o)}_${aS(a,t?.type,o)}`}return i}(e,t,r,c),h=aP[u];if(h)return h;let d="";for(let u=0;u<=t;u+=1){let t=e[u];if(!t)continue;let{passThrough:h,starting:p,ending:f}=t;d+=p?function(e,t,r,o,i,a,s,c){let u=aw(e,t,r,c),h=az[u];return h||(h=t===e?function(e,t,r,o,i,a,s){let c=ay(r,e,a,s);return c.x1=ag(t,o,i,s),c.x2=ag(t,o,i,s),c.y1=14,c.y2=28,av(c)}(o[e],t,r,i,a,s,c):function(e,t,r,o,i,a,s,c){let u=ay(o,e,s,c),h=t<r?-11:11,d={...u};d.x1=ag(r,i,a,c),d.x2=ag(r,i,a,c),d.y1=25,d.y2=28;let p={...u};return p.x1=ag(r,i,a,c)+h,p.x2=ag(t,i,a,c),p.y1=14,p.y2=14,`<g>${aO(e,t<r?180:270,270*(t<r),o,ag(r,i,a,c)+h,25,s,c)}${av(d)}${av(p)}</g>`}(o[e],t,e,r,i,a,s,c),az[u]=h),h}(u,r,p.type,o,i,a,s,c):"",d+=h?function(e,t,r,o,i,a,s){let c=aS(e,t,s),u=aI[c];if(u)return u;let h=ag(e,o,i,s),d=ay(t,r[e],a,s);return d.x1=h,d.x2=h,d.y1=0,d.y2=28,u=av(d),aI[c]=u,u}(u,h.type,o,i,a,s,c):"",d+=f?function(e,t,r,o,i,a,s,c){let u=aw(e,t,r,c),h=a$[u];return h||(h=t===e?function(e,t,r,o,i,a,s){let c=ay(r,e,a,s);return c.x1=ag(t,o,i,s),c.x2=ag(t,o,i,s),c.y1=0,c.y2=14,av(c)}(o[e],t,r,i,a,s,c):function(e,t,r,o,i,a,s,c){let u=ay(o,e,s,c),h=t<r?-11:11,d={...u};d.x1=ag(r,i,a,c),d.x2=ag(r,i,a,c),d.y1=0,d.y2=3;let p={...u};return p.x1=ag(r,i,a,c)+h,p.x2=ag(t,i,a,c),p.y1=14,p.y2=14,`<g>${av(d)}${aO(e,t>r?0:90,t>r?90:180,o,ag(r,i,a,c)+h,3,s,c)}${av(p)}</g>`}(o[e],t,e,r,i,a,s,c),a$[u]=h),h}(u,r,f.type,o,i,a,s,c):""}return h=`url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><g>${d}</g></svg>')`,aP[u]=h,h}(r,t,o,e,i,a,s,c);return n1.default.createElement("div",{className:"absolute top-0 right-0 bottom-0 left-0 z2",style:{background:u}})}};function hN({boxShadowAlpha:e,boxShadowLeft:t,children:r,className:o="",left:i,width:a}){return n1.default.createElement("div",{className:n0()("absolute","top-0","bottom-0","z3",o),style:{boxShadow:`${t}px 5px 10px rgba(0, 0, 0, ${e})`,left:i,width:a}},r)}function hH({boxShadowAlpha:e,hasTimeline:t,scrollLeft:r,width:o}){return n1.default.createElement(hN,{boxShadowAlpha:e,boxShadowLeft:5,className:"app-bg0 left-0",left:r,width:o},t?n1.default.createElement(hp,{z2:!0}):null)}function hB({boxShadowAlpha:e,commitZoneWidth:t,hasTimeline:r,scrollLeft:o,width:i}){return n1.default.createElement(hN,{boxShadowAlpha:e,boxShadowLeft:-5,left:o+t-i,width:i},r?n1.default.createElement(hp,{z2:!0}):null,n1.default.createElement(hA,null))}let lF=class lF extends n1.default.PureComponent{render(){let{authorEmail:e,authorName:t,avatarContext:r,avatarUrl:o,clearCurrentlyHoveredGraphCommit:i,column:a,columnColorByColumn:s,columnForColoring:c,commitZoneWidth:u,cssVariables:h,currentlyHoveredCommitSha:d,edgeColumnMax:p,edges:f,hasRefs:g,hasTimeline:m,getExternalIcon:b,graphZoneModeConstants:v,isActiveSha:w,isInUnsupportedRebase:S,isLastColumn:x,isSelected:C,leftGutterBoxShadowAlpha:_,leftGutterWidth:T,message:E,nodeOffset:O,nodeOpacity:$,numGraphColumns:P,onContextMenu:D,onClickCommit:A,onDoubleClickCommit:B,rightGutterBoxShadowAlpha:W,rightGutterWidth:F,rowContext:G,scrollLeft:j,setAsCurrentlyHoveredGraphCommit:U,sha:V,shouldShowRefLine:Z,suppressNonRefRowTooltips:K,style:Q,translate:X,type:J,useAuthorInitialsForAvatars:ee,zoneContext:et}=this.props,er=(c??a)%P+1,en=n0()("relative","commit-zone","height-100-percent","pt3",J,`column-${er}`,{"is-selected":C,"has-active":w}),ei=m?n1.default.createElement(hp,{z2:!0}):null,ea=n1.default.createElement("div",{className:en,"data-vscode-context":iH(et),onContextMenu:S?void 0:e=>D(e,im,V),onDoubleClick:e=>B(e,im,V),onMouseDown:e=>A(e,im,V),onMouseEnter:e=>U(e,im,V,d),onMouseLeave:e=>i(e,im,V,d),style:{...Q,...x&&{width:"100%"}}},ei,n1.default.createElement(hH,{boxShadowAlpha:_,hasTimeline:m,scrollLeft:j,width:T}),Z?n1.default.createElement(hz,{graphZoneModeConstants:v,hasRefs:g,isActiveSha:w,nodeOffset:O,type:J}):null,n1.default.createElement(lW,{authorEmail:e,authorInitials:hb(t),authorName:t,avatarUrl:o,column:a,context:r,cssVariables:h,getExternalIcon:b,graphZoneModeConstants:v,left:O,message:E,opacity:$,suppressNonRefRowTooltips:K,translate:X,type:J,useAuthorInitialsForAvatars:ee}),n1.default.createElement(hD,{column:a,graphZoneModeConstants:v}),n1.default.createElement(lA,{columnColorByColumn:s,edgeColumnMax:p,edges:f,graphZoneModeConstants:v,nodeColumn:a}),n1.default.createElement(hB,{boxShadowAlpha:W,commitZoneWidth:u,hasTimeline:m,scrollLeft:j,width:F}));return G?n1.default.createElement("div",{"data-vscode-context":iH(G)},ea):ea}};var hW=function(e,t){let{avatarUrlByEmail:r,onMissingAvatar:o,clearCurrentlyHoveredGraphCommit:i,columnColorByColumn:a,cssVariables:s,currentlyHoveredCommitSha:c,processedRows:u,getExternalIcon:h,graphZoneModeConstants:d,isInUnsupportedRebase:p,leftGutterBoxShadowAlpha:f,leftGutterWidth:g,onCommitContextMenu:m,onClickCommit:b,onDoubleClickCommit:v,nodeOffsetByColumn:w,nodeOpacityByColumn:S,numGraphColumns:x,rightGutterBoxShadowAlpha:C,rightGutterWidth:_,setAsCurrentlyHoveredGraphCommit:T,scrollLeft:E,shouldShowRefLine:O,suppressNonRefRowTooltips:$,translate:P,useAuthorInitialsForAvatars:D}=e,A=new t2(e);return({rowIndex:e,style:B})=>{let W,F=t(e),G=u[e],j=A.getZoneWidth(im),{email:U,author:V,contexts:Z,message:K,sha:Q,type:X}=G,J=G.column,ee=Z?.graph||void 0,et=Z?.avatar||void 0,er=Z?.row||void 0;!D&&((W=r[U])||o(U,Q));let en=A.isLastColumn(im);return n1.default.createElement(lF,{authorEmail:U,authorName:V,avatarContext:et,avatarUrl:W,clearCurrentlyHoveredGraphCommit:i,column:J,columnColorByColumn:a,columnForColoring:G.columnForColoring,commitZoneWidth:j,cssVariables:s,currentlyHoveredCommitSha:c,edgeColumnMax:G.edgeColumnMaxes,edges:G.edges,getExternalIcon:h,graphZoneModeConstants:d,hasRefs:G.hasRefs||!1,hasTimeline:A.hasTimeline(e),isActiveSha:A.rowContainsCurrentHeadRef(G),isInUnsupportedRebase:p,isLastColumn:en,isSelected:A.isSelected(e),key:F,leftGutterBoxShadowAlpha:f,leftGutterWidth:g,message:K,nodeOffset:w[J],nodeOpacity:S[J],numGraphColumns:x,onClickCommit:b,onContextMenu:m,onDoubleClickCommit:v,rightGutterBoxShadowAlpha:C,rightGutterWidth:_,rowContext:er,scrollLeft:E,setAsCurrentlyHoveredGraphCommit:T,sha:Q,shouldShowRefLine:O,style:B,suppressNonRefRowTooltips:$,translate:P,type:X,useAuthorInitialsForAvatars:D,zoneContext:ee})}};let hF=n1.forwardRef(({controlId:e,as:t="div",...r},o)=>{let i=(0,n1.useMemo)(()=>({controlId:e}),[e]);return(0,lp.jsx)(hS.Provider,{value:i,children:(0,lp.jsx)(t,{...r,ref:o})})});hF.displayName="FormGroup";let lZ=class lZ extends n1.default.PureComponent{handleClickOutside(){let{sha:e,shorthand:t,type:r,data:o}=this.props.createRefFormData;this.props.onCancel(t,e,r,o)}constructor(e){super(e);let{createRefFormData:t,formatRefShorthand:r}=this.props,{sha:o,shorthand:i,type:a,data:s}=t;this.state={currentShorthand:r(i,o,a,s),initShorthand:i}}static getDerivedStateFromProps(e,t){let{createRefFormData:r,formatRefShorthand:o}=e,{currentShorthand:i,initShorthand:a}=t,{sha:s,shorthand:c,type:u,data:h}=r,d=c!==a;return d&&o(c,s,u,h)!==i?{currentShorthand:o(c,s,u,h),initShorthand:c}:d?{currentShorthand:i,initShorthand:c}:null}onInputChange(e){let t=e||"";if(e){let{sha:e,type:r,data:o}=this.props.createRefFormData;t=this.props.formatRefShorthand(t,e,r,o)}this.setState({currentShorthand:t}),this.props.onRefShorthandChange?.(t)}render(){let{createRefFormData:e,isRefShorthandValid:t,onCancel:r,onContextMenu:o,onRefCreate:i,refZoneWidth:a,style:s,translate:c}=this.props,{currentShorthand:u}=this.state,{data:h,sha:d,type:p}=e,f=c("tag"===p?"RefZone-EnterTagName":"RefZone-EnterBranchName");return n1.default.createElement("div",{className:"create-ref","data-testid":"create-ref",style:{...s,minWidth:a,width:a}},n1.default.createElement(hF,null,n1.default.createElement(hC,{autoFocus:!0,"data-testid":"create-ref-form-control",isInvalid:u.length>0&&!t(u,d,p,h),onChange:e=>this.onInputChange(e.target?.value),onContextMenu:e=>o(e,u,d,p,h),onKeyDown:e=>{if(e.stopPropagation(),"Escape"===e.key)return void r(u,d,p,h);d&&"Enter"===e.key&&i(u,d,p,h)},placeholder:f,type:"text",value:u})))}};var hG=function({hasActive:e,overflowCount:t}){return n1.default.createElement("span",{className:n0()("overflow-count ml1",{"is-active":e}),"data-test-class":"overflow-count"},"+",t)},hj=function({style:e,children:t,column:r,numGraphColumns:o,onMouseEnter:i,onMouseLeave:a,ref:s,...c}){return n1.default.createElement("div",{...c,className:n0()("gk-graph","ref-zone",`column-${r%o+1}`),ref:s},n1.default.createElement("ul",{onMouseEnter:i,onMouseLeave:a,style:{...e,listStyle:"none",padding:0,zIndex:1}},t))};let hU=()=>`ref-overlay-container-${Math.random()}`;var hV=function({enabledRefMetadataTypes:e,column:t,columnForColoring:r,context:o,enableShowHideRefsOptions:i,targetRef:a,hasActive:s,hasRefs:c,getExternalIcon:u,includeOnlyRefsById:h,includeOnlyRemotesByName:d,isGhostRef:p,isHovered:f,isInUnsupportedRebase:g,numGraphColumns:m,onMissingRefMetadata:b,refGroupContexts:v,refGroupsByName:w,refIconsPosition:S,refMetadata:x,refNodeHovered:C,sha:_,showRemoteNamesOnRefs:T,showContextMenuForGroupedRef:E,onClickRef:O,onDoubleClickRef:$,onToggleRefNodesShown:P,onRefBeginDrag:D,onRefCanDrag:A,onRefCanDrop:B,onRefDragEnter:W,onRefDragLeave:F,onRefDrop:G,onRefEndDrag:j,translate:U,type:V,useColumnHeaderIcons:Z}){let[K,Q]=(0,n1.useState)(hU());(0,n1.useEffect)(()=>{Q(hU())},[f]);let X=(0,n1.useCallback)((e,t,r)=>{P(e,t.map(e=>({id:iF(e),name:e.name,type:e.refType,owner:e.owner,avatarUrl:e.avatarUrl})),!1,r)},[P]),J=(0,n1.useMemo)(()=>w&&w.length>100?w.slice(0,100):w,[w]),ee=J.length>0?J[0]:null,et=(0,n1.useMemo)(()=>f?J:ee?[ee]:[],[ee,f,J]),er=(0,n1.useMemo)(()=>{let e=10+19*(ee?.length||0)+19*!!s;return f?{height:100,position:"relative"}:{minWidth:e}},[ee,s,f]),en=(0,n1.useMemo)(()=>{let e=Object.values(h);return e.length>0&&e.some(e=>"tag"===e.type)},[h]),ei=(0,n1.useMemo)(()=>({enabledRefMetadataTypes:e,enableShowHideRefsOptions:i,getExternalIcon:u,groupIsHovered:f,hasActive:s,hasRefs:c,isGhostRef:p,isInUnsupportedRebase:g,onClick:O,onContextMenu:E,onDoubleClick:$,onHideRefClick:X,onHovered:C,onMissingRefMetadata:b,onRefBeginDrag:D,onRefCanDrag:A,onRefCanDrop:B,onRefDragEnter:W,onRefDragLeave:F,onRefDrop:G,onRefEndDrag:j,refIconsPosition:S,refMetadata:x,sha:_,showRemoteNamesOnRefs:T,translate:U,type:V,useColumnHeaderIcons:Z}),[i,e,u,s,c,p,f,g,O,$,X,b,D,A,B,W,F,G,j,S,x,C,_,E,T,U,V,Z]),ea=(0,n1.useMemo)(()=>et.map(e=>{let t=e[0],r=v?.[t.name]||void 0,o=e.some(e=>{let t=iF(e);switch(e.refType){case"tag":return en&&!!h[t];case iu:return!!h[t]||e.owner&&d[e.owner];default:return!!h[t]}});return{...ei,isActive:t.isCurrentHead,isRefGroupIncluded:o,key:`ref-node-${t.fullName||t.name}`,refGroup:e,refGroupContext:r}}),[ei,en,h,d,v,et]);return n1.default.createElement("span",{"data-vscode-context":iH(o),style:er},n1.default.createElement("div",{className:n0()({"display-none":f})},ea.map(e=>n1.default.createElement(lt,{...e,key:e.key}))),n1.default.createElement(u4,{key:K,placement:"right-start",show:f,target:a.current},n1.default.createElement(hj,{column:r??t,numGraphColumns:m},ea.map(e=>n1.default.createElement("li",{key:e.key},n1.default.createElement(lt,{...e,key:void 0}))))))};let hq={};let lq=class lq extends n1.default.PureComponent{popoverTargetRef=(0,n1.createRef)();static defaultProps={style:{}};componentDidUpdate(e){!this.props.hasRefs&&this.props.isSingleSelected&&!e.isSingleSelected&&this.props.hoveredRefZoneSha===this.props.sha&&(this.props.refZoneUnhovered(),this.props.hoveredRefGroup&&this.props.refNodeUnhovered(void 0,this.props.hoveredRefGroup,this.props.sha))}onCustomToggleRefNodesShown=(e,t,r,o)=>{this.props.onToggleRefNodesShown(e,t,r,o),this.props.refZoneUnhovered()};render(){var e;let t,r,{enabledRefMetadataTypes:o,column:i,columnForColoring:a,context:s,enableShowHideRefsOptions:c,showGhostRefsOnRowHover:u,hasActive:h,hasRefs:d,hasTimeline:p,hoveredRefGroup:f,hoveredRefZoneSha:g,getExternalIcon:m,includeOnlyRefsById:b,includeOnlyRemotesByName:v,isInUnsupportedRebase:w,numGraphColumns:S,onClickRef:x,onDoubleClickRef:C,onMissingRefMetadata:_,onRefBeginDrag:T,onRefCanDrag:E,onRefCanDrop:O,onRefDragEnter:$,onRefDragLeave:P,onRefDrop:D,onRefEndDrag:A,refGroupContexts:B,refGroupsByName:W,refIconsPosition:F,refMetadata:G,refNodeHovered:j,refNodeUnhovered:U,refZoneHovered:V,refZoneUnhovered:Z,sha:K,shouldShowRefLine:Q,showColorStrip:X,showContextMenuForGroupedRef:J,showRemoteNamesOnRefs:ee,style:et,translate:er,type:en,useColumnHeaderIcons:ei,width:ea}=this.props,es=g===K,el={minWidth:ea,width:ea},ec={...et,...el},eu=p?n1.default.createElement(hp,null):null,eh=W.length,ed=e=>{V(K),eh?j(e,W[0],K):f&&U(e,f,K)},ep=e=>{Z(),f&&U(e,f,K)},ef=iA((e,t)=>{ep(e),T(e,t)}),eg=eh>0&&!d&&u,em=(e=a??i,(r=hq[t=`${en}${e}${es}${h}${S}${eg}`])||(r=n0()(`column-${e%S+1}`,"flex","pb3","pt3","ref-zone","relative",en,{"dim-ref":eg,"has-active":h,z6:es,z1:!es}),hq[t]=r),r),eb=n1.default.createElement("div",{className:"color-strip height-100",style:{width:2}});if(!eh)return n1.default.createElement("div",{className:em,onMouseEnter:ed,onWheel:ep,style:ec},X?eb:null,eu);let ev=eh-1,ey=ev>0&&!es?n1.default.createElement(hG,{hasActive:h,overflowCount:ev}):null;return n1.default.createElement("div",{className:em,onMouseEnter:ed,onMouseLeave:ep,onWheel:ep,style:ec},n1.default.createElement("div",{ref:this.popoverTargetRef}),X?eb:null,eu,n1.default.createElement("div",{className:"flex",style:{minWidth:0,overflow:"hidden",width:ea-6}},n1.default.createElement(hV,{column:i,columnForColoring:a,context:s,enabledRefMetadataTypes:o,enableShowHideRefsOptions:c,getExternalIcon:m,hasActive:h,hasRefs:d,includeOnlyRefsById:b,includeOnlyRemotesByName:v,isGhostRef:eg,isHovered:es,isInUnsupportedRebase:w,numGraphColumns:S,onClickRef:x,onDoubleClickRef:C,onMissingRefMetadata:_,onRefBeginDrag:ef,onRefCanDrag:E,onRefCanDrop:O,onRefDragEnter:(e,t,r)=>{es||r?.sha!==K||ed(e),$(e,t,r)},onRefDragLeave:P,onRefDrop:D,onRefEndDrag:A,onToggleRefNodesShown:this.onCustomToggleRefNodesShown,refGroupContexts:B,refGroupsByName:W,refIconsPosition:F,refMetadata:G,refNodeHovered:j,sha:K,showContextMenuForGroupedRef:J,showRemoteNamesOnRefs:ee,targetRef:this.popoverTargetRef,translate:er,type:en,useColumnHeaderIcons:ei}),ey),d&&Q?n1.default.createElement("div",{className:"absolute left-0 flex z1",style:el},n1.default.createElement(hI,{hasRefs:!0,isActiveSha:h,left:2,type:en,width:"100%"})):null)}};let lX=class lX extends n1.default.Component{graphComponentRef=n1.default.createRef();graphContainerRef=n1.default.createRef();resizeObserver;lastNavSha=null;currentSha=null;isRefContextMenuShown=!1;isMounted=!1;selectedShas=new Set;selectionAnchorSha;selectionFocusSha;processedGraphRowBySha={};shaByRefId={};childrenBySha={};scrollToSha;headSha;headUpstreamSha;lastLazyLoadHeight=0;lastTopVisibleRowIndex=-1;lastBottomVisibleRowIndex=-1;maxColumns=0;orderedGraphRows=[];rowStatsConstraints={min:0,max:0};shouldFireShowMoreCommits=!0;columnsToFreeWhenFound={};hasMergeNodeChildBySha={};reserverInfoBySha={};columnsUsed={};rowsStats;workDirStats=iT;excludeByType={};excludeRefsById={};includeOnlyRefsById={};excludeRemotesByName={};includeOnlyRemotesByName={};highlightedShas={};searchMode="normal";scrollLeft=0;scrollTop=0;graphHeight=585;graphWidth=804;graphZoneModeConstants=i5();graphZonesByType={};graphZoneOrdering=["ref",im,ib,iv,iw,iy,"sha"];clientHeight=0;missingAvatarsTimer;pendingMissingAvatars={};requestedMissingAvatars={};missingRefsMetadataTimer;pendingMissingRefsMetadata={};requestedMissingRefsMetadata={};branchUpstreamRowIndices=[];downstreamsByUpstream={};timelinesInterval;constructor(e){for(let[t,r]of(super(e),this.resizeObserver=new ResizeObserver(e=>e.forEach(e=>this.onGraphResized(e.contentRect.width,e.contentRect.height))),Object.entries(e.isSelectedBySha||{})))r&&(this.selectedShas.add(t),this.selectionAnchorSha=t,this.selectionFocusSha=t);this.excludeByType=this.props.excludeByType||{},this.excludeRefsById=this.props.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),this.includeOnlyRefsById=this.props.includeOnlyRefsById||{},this.downstreamsByUpstream=this.props.downstreamsByUpstream||{},this.highlightedShas=this.props.highlightedShas||{},this.searchMode=this.props.searchMode||"normal",this.rowsStats=this.props.rowsStats||this.rowsStats,this.workDirStats=this.props.workDirStats||this.workDirStats,this.processRows(this.props.graphRows),this.cleanupSelections(),this.updateMarkerRowIndices(["selection","highlights"]);let t=il(this.props.cssVariables);this.graphZoneModeConstants=i5(this.props.columnsSettings?.[im]?.mode),this.maybeSortGraphZoneOrderingFromSettings(this.props.columnsSettings),this.state={avatarUrlByEmail:this.props.avatarUrlByEmail||{},contexts:this.props.contexts,createRefFormData:this.props.createRefFormData,cssVariablesWithDefaults:t,columnColorByColumn:this.getColumnColorByColumn(t),currentlyHoveredCommitSha:void 0,dimMergeCommits:this.props.dimMergeCommits||!1,dimRowsOfSelectedCommit:!1,enableShowHideRefsOptions:this.props.enableShowHideRefsOptions||!1,highlightRowsOnRefHover:this.props.highlightRowsOnRefHover||!1,showGhostRefsOnRowHover:this.props.showGhostRefsOnRowHover||!1,showRemoteNamesOnRefs:this.props.showRemoteNamesOnRefs||!1,enabledRefMetadataTypes:this.props.enabledRefMetadataTypes||[],enabledScrollMarkerTypes:this.props.enabledScrollMarkerTypes||[],graphCommitDescDisplayMode:this.props.graphCommitDescDisplayMode||iE.ALWAYS,graphZones:this.initializeGraphZones(this.props.columnsSettings,this.graphZoneOrdering,580),hasMoreCommits:this.props.hasMoreCommits||!1,height:this.graphHeight,highlightedShas:this.props.highlightedShas,hoveredRefGroup:void 0,hoveredRefZoneSha:void 0,isLoadingRows:this.props.isLoadingRows||!1,numGraphColumns:this.getNumGraphColumns(t),markerRowIndices:{},pendingCommitMessageSummary:this.props.pendingCommitMessageSummary||"",processedRows:[...this.orderedGraphRows],refIconsPosition:this.getRefIconsPositionOrDefault(this.props.refIconsPosition),refMetadataById:this.props.refMetadataById,rowsStats:this.rowsStats,rowsStatsLoading:this.props.rowsStatsLoading||!1,useAuthorInitialsForAvatars:this.props.useAuthorInitialsForAvatars||!1,scrollLeft:this.getScrollLeft(),scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex(),scrollTop:this.getScrollTop(),shaLength:this.props.shaLength,themeOpacityFactor:this.props.themeOpacityFactor||1,width:this.graphWidth,workDirStats:this.workDirStats}}componentDidMount(){this.isMounted=!0,this.resizeObserver.observe(this.graphComponentRef.current),window.addEventListener("keydown",this.onWindowKeyDown),window.addEventListener("keyup",this.onWindowKeyUp),window.addEventListener("blur",this.onWindowBlur);let e=this.getSelectedShas();e.length>0&&this.selectCommits(e,!1,!0)}UNSAFE_componentWillReceiveProps(e){let t=!1,r=!1,o={},i=!1;this.props.searchMode!==e.searchMode&&(this.searchMode=e.searchMode||"normal",r=!0,o.highlights=!0),this.props.highlightedShas!==e.highlightedShas&&(this.setState({highlightedShas:e.highlightedShas}),this.highlightedShas=e.highlightedShas||{},"filter"===this.searchMode&&(r=!0),o.highlights=!0);let a=this.props.isSelectedBySha!==e.isSelectedBySha,s=this.props.searchMode!==e.searchMode;if(s&&(i=!0),this.processedGraphRowBySha&&(a||this.props.highlightedShas!==e.highlightedShas)){let t=e.isSelectedBySha?Object.keys(e.isSelectedBySha):[];this.selectCommits(t,!1,!0),a&&t.length>0?this.selectionAnchorSha=t[t.length-1]:a&&0===t.length&&(this.selectionAnchorSha=void 0)}if(this.props.excludeByType!==e.excludeByType&&(this.excludeByType=e.excludeByType||{},e.graphRows?.length&&(r=!0)),this.props.excludeRefsById!==e.excludeRefsById&&(this.excludeRefsById=e.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),e.graphRows?.length&&(r=!0)),this.props.includeOnlyRefsById!==e.includeOnlyRefsById&&(this.includeOnlyRefsById=e.includeOnlyRefsById||{},this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),e.graphRows?.length&&(r=!0)),this.props.themeOpacityFactor!==e.themeOpacityFactor&&this.setState({themeOpacityFactor:e.themeOpacityFactor}),this.props.dimMergeCommits!==e.dimMergeCommits&&this.setState({dimMergeCommits:e.dimMergeCommits||!1}),this.props.highlightRowsOnRefHover!==e.highlightRowsOnRefHover&&this.setState({highlightRowsOnRefHover:e.highlightRowsOnRefHover||!1}),this.props.showGhostRefsOnRowHover!==e.showGhostRefsOnRowHover&&this.setState({showGhostRefsOnRowHover:e.showGhostRefsOnRowHover||!1}),this.props.showRemoteNamesOnRefs!==e.showRemoteNamesOnRefs&&this.setState({showRemoteNamesOnRefs:e.showRemoteNamesOnRefs||!1}),this.props.enabledRefMetadataTypes!==e.enabledRefMetadataTypes&&this.setState({enabledRefMetadataTypes:e.enabledRefMetadataTypes||[]}),this.props.enabledScrollMarkerTypes!==e.enabledScrollMarkerTypes&&this.setState({enabledScrollMarkerTypes:e.enabledScrollMarkerTypes||[]}),this.props.graphCommitDescDisplayMode!==e.graphCommitDescDisplayMode&&this.setState({graphCommitDescDisplayMode:e.graphCommitDescDisplayMode||iE.ALWAYS}),this.props.isContainerWindowFocused!==e.isContainerWindowFocused&&this.dimRowsOfSelectedCommit(!1),this.props.downstreamsByUpstream!==e.downstreamsByUpstream&&(this.downstreamsByUpstream=e.downstreamsByUpstream||{},e.graphRows?.length&&(r=!0)),this.props.graphRows!==e.graphRows||this.props.cssVariables!==e.cssVariables||r){this.cleanEdgeCaches();let o=il(e.cssVariables);i=!0,this.setState({columnColorByColumn:this.getColumnColorByColumn(o),cssVariablesWithDefaults:o,numGraphColumns:this.getNumGraphColumns(o)}),this.cleanupSelections(),t=!0,(e.graphRows?.length<this.props.graphRows?.length||r)&&(this.lastLazyLoadHeight=0)}if(this.props.useAuthorInitialsForAvatars!==e.useAuthorInitialsForAvatars&&this.setState({useAuthorInitialsForAvatars:e.useAuthorInitialsForAvatars}),this.props.shaLength!==e.shaLength&&this.setState({shaLength:e.shaLength}),(this.props.hasMoreCommits!==e.hasMoreCommits||this.props.onShowMoreCommits!==e.onShowMoreCommits)&&this.setState({hasMoreCommits:e.hasMoreCommits||!1},()=>this.loadMoreCommitsIfNecessary(this.graphHeight,this.state.hasMoreCommits)),this.props.isLoadingRows!==e.isLoadingRows&&this.setState({isLoadingRows:e.isLoadingRows||!1}),this.props.rowsStats!==e.rowsStats&&(this.rowsStats=e.rowsStats,this.updateRowStatsConstraints(),this.setState({rowsStats:e.rowsStats})),this.props.rowsStatsLoading!==e.rowsStatsLoading&&this.setState({rowsStatsLoading:e.rowsStatsLoading||!1}),this.props.workDirStats!==e.workDirStats&&(this.workDirStats=e.workDirStats||iT,(!i4(this.props.workDirStats)&&i4(e.workDirStats)||i4(this.props.workDirStats)&&!i4(e.workDirStats))&&(i=!0),this.setState({workDirStats:this.workDirStats})),this.props.avatarUrlByEmail!==e.avatarUrlByEmail&&(this.setState({avatarUrlByEmail:e.avatarUrlByEmail||{}}),this.requestedMissingAvatars={}),this.props.refIconsPosition!==e.refIconsPosition&&this.setState({refIconsPosition:this.getRefIconsPositionOrDefault(e.refIconsPosition)}),this.props.refMetadataById!==e.refMetadataById&&(this.setState({refMetadataById:e.refMetadataById}),this.requestedMissingRefsMetadata={},o.pullRequests=!0),this.props.columnsSettings!==e.columnsSettings){if(e.columnsSettings?.[im]?.mode!==this.props.columnsSettings?.[im]?.mode){this.cleanEdgeCaches(),this.graphZoneModeConstants=i5(e.columnsSettings?.[im]?.mode),this.updateCommitZoneContentWidthFromChange();let r=this.graphZonesByType[im];r.currentWidth=r.contentWidth,r.preferredWidth=r.contentWidth,r.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,r.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.loadEdgesBySha(),t=!0}e.columnsSettings&&(this.updateZonesFromSettings(e.columnsSettings),t=!0)}if(this.props.contexts!==e.contexts&&this.setState({contexts:e.contexts}),this.props.pendingCommitMessageSummary!==e.pendingCommitMessageSummary&&this.setState({pendingCommitMessageSummary:e.pendingCommitMessageSummary||""}),this.props.enableShowHideRefsOptions!==e.enableShowHideRefsOptions&&this.setState({enableShowHideRefsOptions:e.enableShowHideRefsOptions}),this.props.createRefFormData!==e.createRefFormData&&(e.createRefFormData?.sha&&(this.selectCommits([e.createRefFormData?.sha],!1,!0),this.selectionAnchorSha=e.createRefFormData.sha),this.setState({createRefFormData:e.createRefFormData})),i){this.processRows(e.graphRows);let t=il(e.cssVariables);(s||a)&&this.selectCommits(e.isSelectedBySha?Object.keys(e.isSelectedBySha):[],!1,!0),this.setState({processedRows:[...this.orderedGraphRows],columnColorByColumn:this.getColumnColorByColumn(t)})}if(t){this.updateCommitZoneContentWidthFromChange();let e=this.getOrderedActiveGraphZones();this.expandLastZoneMinWidthForScrollbar(e),this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),this.setState({graphZones:e})}Object.keys(o).length&&this.updateMarkerRowIndices(Object.keys(o),e)}componentWillUnmount(){this.isMounted=!1,this.clearTimelinesInterval(),window.removeEventListener("keydown",this.onWindowKeyDown),window.removeEventListener("keyup",this.onWindowKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.resizeObserver.disconnect()}focus(){this.graphContainerRef?.current?.focus()}getRefIconsPositionOrDefault(e){return e||id.LEFT}onGraphVisibleRowsUpdatedThrottled=(nO=()=>this.onGraphVisibleRowsUpdated(),d=!1,p=250,(...e)=>{u=new Date().getTime(),p=!c||u-c>p+20?20:250,h&&(clearTimeout(h),h=null),d?h=setTimeout(()=>{nO(...e)},p):(nO(...e),c=new Date().getTime(),d=!0,setTimeout(()=>{d=!1},p))});onBlurWipNodeInput=e=>{this.props.onBlurWipNodeInput&&this.props.onBlurWipNodeInput(e)};onDoubleClickRef=(e,t,r,o)=>{this.props.onDoubleClickGraphRef&&this.props.onDoubleClickGraphRef(e,t,this.processedGraphRowBySha[r],o)};onFocusWipNodeInput=e=>{this.props.onFocusWipNodeInput&&this.props.onFocusWipNodeInput(e)};onFilterColumnClick=(e,t)=>{this.props.onFilterColumnClick&&this.props.onFilterColumnClick(e,t)};onCurrentlyHoveredGraphCommit=(e,t,r,o)=>{o!==r&&(this.props.onGraphRowHovered&&this.props.onGraphRowHovered(e,t,this.processedGraphRowBySha[r]),this.setState({currentlyHoveredCommitSha:r}))};onClearCurrentlyHoveredGraphCommit=(e,t,r,o)=>{o&&(this.props.onGraphRowUnhovered&&this.props.onGraphRowUnhovered(e,t,this.processedGraphRowBySha[r]),this.setState({currentlyHoveredCommitSha:void 0}))};onGraphColumnReOrdered=(e,t)=>{let r=this.graphZoneOrdering.indexOf(e),o=t?this.graphZoneOrdering.indexOf(t):this.graphZoneOrdering.length-1;t&&r<o&&(o-=1),this.graphZoneOrdering.splice(r,1),this.graphZoneOrdering.splice(o,0,e);let i={};this.graphZoneOrdering.forEach((e,t)=>{this.graphZonesByType[e].order=t,i[e]=this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e])}),this.setState({graphZones:this.initializeGraphZones(i,this.graphZoneOrdering,this.graphWidth)}),this.props.onGraphColumnsReOrdered&&this.props.onGraphColumnsReOrdered(i)};onGraphZoneResize=iA((e,t)=>{if(t?.width){let r=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(r,e,t,!1),this.setState({graphZones:r})}});onGraphZoneResizeEnd=iA((e,t)=>{if(t?.width){let r=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(r,e,t,!0),this.setState({graphZones:r})}this.props.onColumnResized&&this.props.onColumnResized(e.type,this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e.type]))});onPopupGraphHeaderContextMenu=(e,t)=>{this.props.onPopupGraphHeaderContextMenu&&this.props.onPopupGraphHeaderContextMenu(e,t)};onSettingsClick=(e,t)=>{this.props.onSettingsClick&&(e.stopPropagation(),this.props.onSettingsClick(e,t))};onMessageChange=e=>{this.setState({pendingCommitMessageSummary:e}),this.props.onMessageChange&&this.props.onMessageChange(e)};onRefBeginDrag=(e,t)=>{this.props.onRefBeginDrag&&this.props.onRefBeginDrag(e,t)};onRefCanDrag=e=>!!this.props.onRefCanDrag&&this.props.onRefCanDrag(e);onRefCanDrop=(e,t,r)=>!!this.props.onRefCanDrop&&this.props.onRefCanDrop(e,t,r);onRefCreate=(e,t,r,o)=>{this.props.onRefCreate&&this.props.onRefCreate(e,t,r,o)};onRefCreateCancel=(e,t,r,o)=>{this.props.onRefCreateCancel&&this.props.onRefCreateCancel(e,t,r,o)};onRefCreateContextMenu=(e,t,r,o,i)=>{this.props.onRefCreateContextMenu&&this.props.onRefCreateContextMenu(e,t,r,o,i)};onRefDragEnter=(e,t,r)=>{this.props.onRefDragEnter&&this.props.onRefDragEnter(e,t,r)};onRefDragLeave=(e,t,r)=>{this.props.onRefDragLeave&&this.props.onRefDragLeave(e,t,r)};onRefDrop=(e,t,r)=>{this.props.onRefDrop&&this.props.onRefDrop(e,t,r)};onRefEndDrag=(e,t,r)=>{this.props.onRefEndDrag&&this.props.onRefEndDrag(e,t,r)};onZoneRowClick(e,t,r){if(0!==e.button)return;let{enableMultiSelection:o,shiftSelectMode:i}=this.props;if(o){let t=this.isMacOSPlatform();if(!t&&e.ctrlKey||t&&e.metaKey){if("topological"===i&&this.selectionAnchorSha&&this.selectionAnchorSha!==r){let e=this.getDirectTopologicalPathBetween(this.selectionAnchorSha,r);if(!e||1===e.length&&e[0]===r)return}this.selectionAnchorSha=r,this.selectCommits([r],!0,!1);return}if(e.shiftKey){if(this.selectionAnchorSha??=this.selectionFocusSha,!this.selectionAnchorSha){this.selectionAnchorSha=r,this.selectCommits([r],!1,!1);return}if(this.selectionAnchorSha!==r){let e=this.getShiftSelectRange(r,this.isCommitListFiltered()?"simple":i);if(e?.length)return void this.selectCommits(e,!1,!1)}}}this.selectionFocusSha=r,this.selectionAnchorSha=r,this.selectCommits([r],!1,!1)}getShiftSelectRange(e,t){if(!this.selectionAnchorSha||!this.processedGraphRowBySha[this.selectionAnchorSha]||!this.processedGraphRowBySha[e])return[e];if("simple"===t){let t=this.processedGraphRowBySha[this.selectionAnchorSha].rowIndex,r=this.processedGraphRowBySha[e].rowIndex,o=[],i=Math.min(t,r),a=Math.max(t,r);for(let e=i;e<=a;e++)this.orderedGraphRows[e]&&o.push(this.orderedGraphRows[e].sha);return o}return this.getTopologicalPathBetween(this.selectionAnchorSha,e)}getTopologicalPathBetween(e,t){let r=this.getDirectTopologicalPathBetween(e,t);if(r&&(r.length>1||1===r.length&&r[0]!==t))return r;let o=this.findNearestTopologicallyReachableCommit(e,t);if(o)return this.getDirectTopologicalPathBetween(e,o)}getDirectTopologicalPathBetween(e,t){if(e===t)return[e];let r=new Set,o=[],i=(e,t,a)=>{if(e===t)return o=[...a,t],!0;if(r.has(e))return!1;r.add(e);let s=this.processedGraphRowBySha[e];if(!s)return!1;let c=[...a,e];for(let e of s.parents||[])if(i(e,t,c))return!0;for(let r of this.childrenBySha[e]||[])if(i(r,t,c))return!0;return!1};if(i(e,t,[])&&this.hasOnlyTwoEndpoints(o,e,t))return o}findNearestTopologicallyReachableCommit(e,t){let r=this.processedGraphRowBySha[e]?.rowIndex,o=this.processedGraphRowBySha[t]?.rowIndex;if(void 0!==r&&void 0!==o)if(r>o)for(let t=o+1;t<this.orderedGraphRows.length;t++){let r=this.orderedGraphRows[t].sha,o=this.getDirectTopologicalPathBetween(e,r);if((o?.length??0)>1||o?.length===1&&o[0]===e)return r}else for(let t=o-1;t>=0;t--){let r=this.orderedGraphRows[t].sha,o=this.getDirectTopologicalPathBetween(e,r);if((o?.length??0)>1||o?.length===1&&o[0]===e)return r}}hasOnlyTwoEndpoints(e,t,r){if(e.length<=2)return!0;let o=new Set(e),i=0;for(let a of e){let e=a===t||a===r,s=this.processedGraphRowBySha[a];if(!s)continue;let c=s.parents||[],u=this.childrenBySha[a]||[],h=c.filter(e=>o.has(e)).length,d=u.filter(e=>o.has(e)).length;if((0===h||0===d)&&(i++,!e))return!1}return 2===i}onClickRef=(e,t,r,o)=>{this.onZoneRowClick(e,"ref",r),this.props.onClickGraphRef&&this.props.onClickGraphRef(e,t,this.processedGraphRowBySha[r],o),this.currentSha=r,this.loadSelectedGraphRow(this.currentSha),this.lastNavSha=null};onClickCommit=(e,t,r)=>{if(this.onZoneRowClick(e,t,r),this.props.onClickGraphRow){let o=this.processedGraphRowBySha[r];this.props.onClickGraphRow(e,t,o)}this.currentSha=r,this.loadSelectedGraphRow(this.currentSha),this.lastNavSha=null};onDoubleClickCommit=(e,t,r)=>{if(this.props.onDoubleClickGraphRow){let o=this.processedGraphRowBySha[r];this.props.onDoubleClickGraphRow(e,t,o)}};onWindowKeyUp=e=>{switch(e.key){case ax.metaKey:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!1);break;case ax.controlKey:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!1)}};onWindowBlur=e=>{let{hoveredRefGroup:t,hoveredRefZoneSha:r}=this.state;t&&r&&this.onRefNodeUnhovered(e,t,r),this.onRefZoneUnhovered(),this.dimRowsOfSelectedCommit(!1)};onWindowKeyDown=e=>{switch(e.key){case ax.metaKey:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!0);break;case ax.controlKey:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!0);break;default:this.state.dimRowsOfSelectedCommit&&this.dimRowsOfSelectedCommit(!1)}};onKeyUp=e=>{this.lastNavSha&&this.isNavigationKey(e.key)&&this.currentSha!==this.lastNavSha&&(this.loadSelectedGraphRow(this.currentSha),this.lastNavSha=null)};onKeyDown=e=>{switch(null===this.lastNavSha&&this.isNavigationKey(e.key)&&(this.lastNavSha=this.currentSha),e.key){case ax.arrowUpKey:this.selectPrevious(e.shiftKey);break;case ax.arrowDownKey:this.selectNext(e.shiftKey);break;case"H":case"h":this.selectHead(e.shiftKey)}};isNavigationKey(e){return[ax.arrowUpKey,ax.arrowDownKey].some(t=>t===e)}loadSelectedGraphRow(e){let t=this.processedGraphRowBySha[e];t&&this.props.onLoadSelectedGraphRow&&this.props.onLoadSelectedGraphRow(t)}onRefNodeHovered=(e,t,r)=>{(!this.props.showGhostRefsOnRowHover||i8(this.selectedShas,r)||this.processedGraphRowBySha[r]?.hasRefs)&&(this.props.onGraphRefNodeHovered&&this.props.onGraphRefNodeHovered(e,t,this.processedGraphRowBySha[r]),this.setState({hoveredRefGroup:[...t]}))};onRefNodeUnhovered=(e,t,r)=>{this.isRefContextMenuShown||(this.props.onGraphRefNodeUnhovered&&this.props.onGraphRefNodeUnhovered(e,t,this.processedGraphRowBySha[r]),this.setState({hoveredRefGroup:void 0}))};onRefShorthandChange=e=>{let{createRefFormData:t}=this.state;this.setState({createRefFormData:{...t,shorthand:e}})};onRefZoneHovered=e=>{this.setState({hoveredRefZoneSha:e})};onRefZoneUnhovered=()=>{this.isRefContextMenuShown||this.setState({hoveredRefZoneSha:void 0})};onShowMoreCommits=()=>{this.props.onShowMoreCommits&&this.shouldFireShowMoreCommits&&(this.props.onShowMoreCommits(),this.shouldFireShowMoreCommits=!1,setTimeout(()=>{this.shouldFireShowMoreCommits=!0},250))};onScrollForZone=(e,t,r,o,i)=>{this.setScroll(e,t),this.props.onScrollForZone&&this.props.onScrollForZone(e,t),this.loadMoreCommitsIfNecessary(o,i)};loadMoreCommitsIfNecessary(e,t){if(!this.props.onShowMoreCommits||!t||!e||e<0||!this.scrollTop||this.scrollTop<0||!this.orderedGraphRows?.length)return;let r=this.scrollTop+e,o=28*this.orderedGraphRows.length;r>o-1400&&r>this.lastLazyLoadHeight&&(this.lastLazyLoadHeight=Math.min(r,o-1),this.onShowMoreCommits())}onScrollToRowCausedUpdateForFirstColumn=(e,t)=>{let r={...t};if(e===im&&t.scrollTop){let t=this.getHorizontalScrollHeight(e,this.state.cssVariablesWithDefaults);r.scrollTop-=t+6}this.setScroll(e,r),this.props.onScrollToRowCausedUpdateForFirstColumn?.(e,r)};onCommitContextMenu=(e,t,r)=>{if(this.props.onRowContextMenu){let o=this.processedGraphRowBySha[r];this.props.onRowContextMenu(e,t,o)}};onRefContextMenu=(e,t,r)=>{if(this.props.onRefContextMenu){this.isRefContextMenuShown=!0,this.onRefZoneHovered(r);let o=this.processedGraphRowBySha[r];this.props.onRefContextMenu(e,t,o),setTimeout(()=>{this.isRefContextMenuShown=!1},250)}};selectCommits(e,t,r){if(!t)for(let t of this.selectedShas)e.includes(t)||this.selectedShas.delete(t);for(let r of e)t&&this.selectedShas.has(r)?this.selectedShas.delete(r):this.processedGraphRowBySha?.[r]&&this.selectedShas.add(r);if(this.selectionFocusSha=e.length&&this.selectedShas.has(e[e.length-1])?e[e.length-1]:function(e){let t;for(t of e);return t}(this.selectedShas),this.selectionFocusSha&&this.selectSha(this.selectionFocusSha,r),this.props.onSelectGraphRows){let e=this.getSelectedShas().map(e=>this.processedGraphRowBySha[e]);this.props.onSelectGraphRows(e)}this.updateMarkerRowIndices(["selection"]),this.setState({processedRows:[...this.orderedGraphRows]})}getCommitZoneContentWidthBetweenGutters(){return this.getCurrentWidthByZone(im)-this.getLeftGutterWidth()-this.getRightGutterWidth()}getSelectedShas(){return[...this.selectedShas]}getExcludeRemotesByName(){let e={};return Object.values(this.excludeRefsById).forEach(t=>{t.type===iu&&t.owner&&"*"===t.name&&(e[t.owner]=!0)}),e}getIncludeOnlyRemotesByName(){let e={};return Object.values(this.includeOnlyRefsById).forEach(t=>{t.type===iu&&t.owner&&"*"===t.name&&(e[t.owner]=!0)}),e}clearScrollToIndex=iA(()=>{this.isMounted&&this.setState({scrollToIndex:void 0})});getTopAndBottomVisibleRowIndex(){let{graphHeight:e,orderedGraphRows:t,scrollTop:r}=this,o=e||0;if(!o||!t?.length)return{top:-1,bottom:-1};let i=r/28;return{top:Math.max(Math.floor(i),0),bottom:Math.min(Math.ceil(i+((o-26)/28-1)),t.length-1)}}getOffsetSha(e){let t=this.graphHeight||0,r=this.props.scrollRowPadding||0;if(!r||!t)return e;let o=r;if(o<=0)return e;let i=this.getTopAndBottomVisibleRowIndex(),a=i.top,s=i.bottom;if(-1===a||-1===s)return e;let c=Math.floor((s-a)/2);if(c<1)return e;o=Math.min(o,c);let u=this.orderedGraphRows.length,h=this.orderedGraphRows.findIndex(t=>t.sha===e);if(!h||!this.orderedGraphRows.length)return e;let d=a+o>h,p=s-o<h;return d?this.orderedGraphRows[Math.max(h-o,0)].sha||e:p&&this.orderedGraphRows[Math.min(h+o,u-1)].sha||e}selectSha(e,t=!1){let r=this.processedGraphRowBySha[e]?.column||0,o=this.getScrollLeft(),i=this.getCommitZoneContentWidthBetweenGutters(),a=this.getCurrentWidthByZone(im),s=this.getCommitZoneContentWidth(),c=r*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,u=o-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/3<=c,h=Math.max(0,s-a),d=u&&c<=o+i?o:n8(c-i/2,0,h);this.setScrollToSha(t?this.getOffsetSha(e):e,d),this.setState({scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex()},this.clearScrollToIndex)}updateWidthByZone(e,t,r){let o=this.getOrderedActiveGraphZones(),i=this.graphZonesByType[t],a=iX(i,o,e);if(i.currentWidth=a,t===im){let e=Math.max(0,this.getCommitZoneContentWidth()-i.currentWidth);this.getScrollLeft()>e&&this.setScrollLeft(e)}r&&(i.preferredWidth=a)}updateCommitZoneContentWidthFromChange(){let e=this.graphZonesByType[im];if(!e.isHidden){let t=this.getOrderedActiveGraphZones(),r=this.getCommitZoneContentWidth();e.contentWidth=r,e.maximumWidth=r,e.currentWidth>r&&(e.currentWidth=iX(e,t,r)),this.setState({graphZones:t})}}getCurrentWidthByZone(e,t=!0){let r=t?this.getVerticalScrollWidth(im,this.props.cssVariables,!0):0,o=this.graphZonesByType[e];return o&&!o.isHidden?o.currentWidth-r:0}getCommitZoneContentWidth(){return(this.maxColumns||1)*this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT}getCommitZoneWidth(e=!0){let t=e?this.getVerticalScrollWidth(im,this.props.cssVariables,!0):0;if(this.graphZonesByType[im])return this.graphZonesByType[im].currentWidth-t;let{columnsSettings:r}=this.props;return r?.[im]?r[im].width-t:iR[im].minimumWidth-t}getSingleColumnModeFactor(){let e=this.maxColumns,t=this.getCurrentWidthByZone(im);return 1===e?0:n8(1-(t-2*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)}setClientHeight(e){this.clientHeight=e}getClientHeight(){return this.clientHeight}setScroll(e,t){this.setClientHeight(t.clientHeight),null!=t.scrollTop&&this.setScrollTop(t.scrollTop),e===im&&null!=t.scrollLeft&&this.setScrollLeft(t.scrollLeft)}getNonAdjustedScrollLeft(){return this.scrollLeft}setScrollLeft(e){this.scrollLeft!==e&&(this.scrollLeft=e,this.setState({scrollLeft:e}))}getScrollLeft(){let e=this.getNonAdjustedScrollLeft();return this.getCommitZoneContentWidth()!==this.getCommitZoneWidth()?e:0}setScrollTop(e){this.scrollTop!==e&&(this.scrollTop=e,this.setState({scrollTop:e}),this.onGraphVisibleRowsUpdatedThrottled())}getScrollTop(){return this.scrollTop}getScrollToSha(){return this.scrollToSha}setScrollToSha(e,t){this.scrollToSha=e,this.setScrollLeft(t),this.onGraphVisibleRowsUpdated()}getScrollToIndex(){let e=this.getScrollToSha();if(e){let t=this.processedGraphRowBySha[e]?.rowIndex;return void 0===t?this.orderedGraphRows.findIndex(t=>t.sha===e):t}return -1}getScrollToAlignment(){let e=this.getClientHeight(),t=this.getScrollTop(),r=this.getScrollToIndex();if(r<0)return ip;let o=28*r;return o>=t-30&&o<t+e+30?ip:"center"}getMinNodeOffset(){let e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return(1-t)*(e+2*this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT)+t*(e+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getHorizontalScrollHeight(e,t,r){return this.graphZonesByType[e]?iY(e,this.getOrderedActiveGraphZones(),this.orderedGraphRows,t,r):0}getVerticalScrollWidth(e,t,r){return this.graphZonesByType[e]?iQ(e,this.getOrderedActiveGraphZones(),this.props.hasMoreCommits,this.props.isLoadingRows,this.graphHeight,this.orderedGraphRows,this.props.enabledScrollMarkerTypes?.length>0,t,r):0}getMaxNodeOffset(){let e=this.getCurrentWidthByZone(im),t=this.getScrollLeft(),r=this.getSingleColumnModeFactor();return(1-r)*(e+t+(this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT-this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH))+r*(t+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH)}getAbsoluteNodeLeftByColumn(){let e={};for(let t=0;t<=this.maxColumns;t+=1)e[t]=this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH*t;return e}getNodeOffsetByColumn(){let e=this.getMinNodeOffset(),t=this.getMaxNodeOffset(),r=this.getAbsoluteNodeLeftByColumn(),o={};return Object.keys(r).forEach(i=>{let a=r[i];o[i]=n8(a,e,t)}),o}getMaxNodeLeft(){return this.getScrollLeft()+(this.getCurrentWidthByZone(im)-this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)}getMinNodeLeft(){let e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return e+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_LEFT+t*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getRightGutterSlideOutFactor(){let e=this.getCurrentWidthByZone(im),t=this.getCommitZoneContentWidth(),r=this.getSingleColumnModeFactor();return n8((e-(t-(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+this.graphZoneModeConstants.COMMIT_ZONE_PADDING_RIGHT)))/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1)+r/2}getNodeOpacityByColumn(){let e=this.getMinNodeLeft(),t=this.getMaxNodeLeft(),r=this.getAbsoluteNodeLeftByColumn(),o=this.getRightGutterSlideOutFactor(),i=this.getSingleColumnModeFactor(),a={};return Object.keys(r).forEach(s=>{let c=r[s],u=Math.min(c-(e-i*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH),t+this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH-(c+this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH*(1-o)));a[s]=.5+.5*Math.max(u/(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2),i)}),a}getLeftGutterWidth(){let e=this.getSingleColumnModeFactor();return this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH+e*(this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH/2)}getRightGutterWidth(){return(1-this.getRightGutterSlideOutFactor())*this.graphZoneModeConstants.COMMIT_ZONE_GUTTER_WIDTH}getBoxShadowAlphaForGutter(e,t){return .4*(1-Math.max(e,t))}getLeftGutterBoxShadowAlpha(e){let t=this.getScrollLeft(),r=this.getSingleColumnModeFactor();return e*this.getBoxShadowAlphaForGutter(r,n8(1-t/this.graphZoneModeConstants.COMMIT_COLUMN_WIDTH,0,1))}getRightGutterBoxShadowAlpha(e){let t=this.getSingleColumnModeFactor(),r=this.getRightGutterSlideOutFactor();return e*this.getBoxShadowAlphaForGutter(t,r)}updateMarkerRowIndices(e,t){this.isMounted&&this.setState(({markerRowIndices:r})=>{e.forEach(e=>{r[e]=[]}),e.includes("selection")&&this.getSelectedShas().forEach(e=>{this.processedGraphRowBySha[e]?.rowIndex!==void 0&&r.selection.push(this.processedGraphRowBySha[e].rowIndex)});let o=t?.searchMode??this.props.searchMode;if(e.includes("highlights")&&"filter"!==o&&Object.keys(t.highlightedShas||this.state?.highlightedShas||this.props.highlightedShas||{}).forEach(e=>{this.processedGraphRowBySha[e]?.rowIndex!==void 0&&r.highlights.push(this.processedGraphRowBySha[e].rowIndex)}),e.includes("pullRequests")){let e=t?.refMetadataById||this.state?.refMetadataById||this.props.refMetadataById||{};Object.keys(e).forEach(t=>{if(e[t]?.[iM]?.length>0){let e=this.shaByRefId[t];null!=e&&this.processedGraphRowBySha[e]?.rowIndex!==void 0&&r.pullRequests.push(this.processedGraphRowBySha[e].rowIndex)}})}})}getMarkerColors(){let e=getComputedStyle(document.documentElement),t={};return Object.values(ik).forEach(r=>{let o=e.getPropertyValue(r.colorCssKey).trim();o&&(t[r.type]=o)}),t}initializeGraphZones(e,t,r){this.graphZonesByType={};let o=[],i=0;t.forEach((t,r)=>{let a=e?e[t]:void 0,s=iR[t],c=a?.width?a.width:s.minimumWidth,u={...s,type:t,currentWidth:c,preferredWidth:c,isHidden:a?.isHidden||!1,mode:a?.mode,order:s.isCustomizable&&a?.order!==void 0?a?.order:r};a?.isHidden||(i+=u.currentWidth),t===im&&(u.contentWidth=this.getCommitZoneContentWidth(),u.minimumWidth=this.graphZoneModeConstants.COMMIT_ZONE_VIEWPORT_WIDTH_MIN,u.showIconWidth=this.graphZoneModeConstants.COMMIT_ZONE_SHOW_ICON_WIDTH,this.maxColumns>0&&(u.maximumWidth=u.contentWidth)),this.graphZonesByType[t]=u,u?.isHidden||o.push(u)});let a=o[o.length-1];if(a){let e=iU(this.props.cssVariables,!0),t=a.minimumWidth+e;(null==a.maximumWidth||a.maximumWidth>=t)&&(a.minimumWidth=t,null!=a.showIconWidth&&(a.showIconWidth+=e),o[o.length-1]=a)}for(o.forEach(e=>{let t=iX(e,o,e.currentWidth);t!==e.currentWidth&&(i-=e.currentWidth,e.currentWidth=t,i+=t)});i>r;){let e=ij(o);if(!e)break;let t=e.currentWidth,a=i-r,s=Math.max(e.minimumWidth,t-a),c=t-s;this.graphZonesByType[e.type].currentWidth=s,i-=c}if(i<r){let e=t[t.length-1],i=r-iV(o,e);this.graphZonesByType[e].currentWidth=i}return o}maybeSortGraphZoneOrderingFromSettings(e){this.graphZoneOrdering.every(t=>e?.[t]?.order!==void 0)&&this.graphZoneOrdering.sort((t,r)=>e[t].order<e[r].order?-1:+(e[t].order>e[r].order))}updateZonesFromSettings(e){let t=!1;this.graphZoneOrdering.forEach((r,o)=>{let i=this.graphZonesByType[r],a=e?.[i.type];a&&(a.isHidden!==i.isHidden&&(t=!0,i.type!==iw||a.isHidden||this.updateRowStatsConstraints()),i.isHidden=a.isHidden,i.order=i.isCustomizable&&a?.order!==void 0?a?.order:o,i.mode=a.mode,i.preferredWidth=a.width??i.preferredWidth,i.currentWidth=i.preferredWidth)}),t&&this.graphZoneOrdering.forEach(e=>{let t=this.graphZonesByType[e];t.currentWidth=t.minimumWidth})}getEdgeColumnMaxes(e){let t=0;return Object.keys(this.processedGraphRowBySha[e]?.edges||{}).forEach(e=>{t=Math.max(t,parseInt(e,10))}),t}getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t){let r,o,i,a,s={};return Object.keys(t).forEach(c=>{o=(r=t[c]).passThrough,i=r.starting,(a=o&&!ai(o.type)?o:i&&!ai(i.type)?i:o||i||void 0)&&(a.parentSha===e.sha?s[c]={ending:a}:s[c]={passThrough:a})}),s}getFinalEdgeStateForGraphAndRow(e,t){let r=this.getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t),o=this.getStartingEdgesByColumn(e);return Object.keys(o).forEach(e=>{r[e]||(r[e]={ending:void 0,passThrough:void 0,starting:void 0}),r[e].starting=o[e]}),r}loadEdgesBySha(){this.maxColumns=0,this.isCommitListFiltered()||this.orderedGraphRows.forEach((e,t)=>{let r=this.orderedGraphRows[t-1],o=r&&this.processedGraphRowBySha[r.sha]?.edges?this.processedGraphRowBySha[r.sha].edges:{};this.processedGraphRowBySha[e.sha].edges=this.getFinalEdgeStateForGraphAndRow(e,o);let i=this.getEdgeColumnMaxes(e.sha);this.processedGraphRowBySha[e.sha].edgeColumnMaxes=i,i>this.maxColumns&&(this.maxColumns=i)})}processRows(e){this.loadRowsbySha(e||[]),this.loadEdgesBySha()}getStartingEdgesByColumn(e){let t={},r=e.parents;if(r.length>0){let o=e.type,i=this.processedGraphRowBySha[e.sha]?.column;void 0!==i&&(t[i]={parentSha:r[0],type:o});for(let e=1;e<r.length;e+=1){let i=r[e],a=this.processedGraphRowBySha[i]?.column;void 0!==a&&(t[a]={parentSha:i,type:o})}}return t}formatCommitDateTimeCallback=(e,t)=>this.props.formatCommitDateTime?this.props.formatCommitDateTime(e,t):function(e,t,r,o=!0){t=t??void 0;let i=`${(void 0)??""}:${t}`,a=ad.get(i);if(null==a){let e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=ah.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:r}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:r||void 0}}let r={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(au))if(null!=t)for(let e in t){let o=t[e];if(null!=o)switch(e){case"year":r.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:r.month="long";break;case 3:r.month="short";break;case 2:r.month="2-digit";break;case 1:r.month="numeric"}break;case"day":"DD"===o?r.day="2-digit":r.day="numeric";break;case"weekday":switch(o.length){case 4:r.weekday="long";break;case 3:r.weekday="short";break;case 2:r.weekday="narrow"}break;case"hour":r.hour=2===o.length?"2-digit":"numeric",r.hour12="hh"===o||"h"===o;break;case"minute":r.minute=2===o.length?"2-digit":"numeric";break;case"second":r.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":r.fractionalSecondDigits=3;break;case"dayPeriod":r.dayPeriod="narrow",r.hour12=!0,r.hourCycle="h12";break;case"timeZoneName":r.timeZoneName=2===o.length?"long":"short"}}return r}(t);a=new Intl.DateTimeFormat(s,e),o&&ad.set(i,a)}if(null==t||ah.test(t))return a.format(e);let c=a.formatToParts(e);return t.replace(au,(t,r,i,a,u,h,d,p,f,g,m,b,v,w,S)=>{if(null!=r)return r.substring(1,r.length-1);for(let t in S){let r=S[t];if(null==r)continue;let i=c.find(e=>e.type===t);if("Do"===r&&i?.type==="day"){var x=Number(i.value);let e=x%100;return`${x}${ap[(e-20)%10]??ap[e]??ap[0]}`}if("a"===r&&i?.type==="dayPeriod"){let t=(function(e){let t=`${(void 0)??""}:time:${e}`,r=ad.get(t);if(null==r){let i;i=s,r=new Intl.DateTimeFormat(i,{localeMatcher:"best fit",timeStyle:e}),o&&ad.set(t,r)}return r})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return` ${(t??i)?.value??""}`}return i?.value??""}return""})}(e,"short+short");formatCommitMessageCallback=e=>this.props.formatCommitMessage?this.props.formatCommitMessage(e):e;formatRefShorthandCallback=(e,t,r,o)=>this.props.formatRefShorthand?this.props.formatRefShorthand(e,t,r,o):e.replace(/\s/g,"");isRefShorthandValidCallback=(e,t,r,o)=>!this.props.isRefShorthandValid||this.props.isRefShorthandValid(e,t,r,o);translateCallback=(e,...t)=>this.props.translate?this.props.translate(e,...t):aC[e]?function(e,t){if(0===t.length)return e;let r=e;return t.forEach((e,t)=>{let o=RegExp(`\\{${t}\\}`,"g");r=r.replace(o,e)}),r}(aC[e],t):e;getIconCallback=e=>this.props.getExternalIcon?.(e)||n1.default.createElement("span",null);onMissingAvatar=(e,t)=>{this.props.onEmailsMissingAvatarUrls&&!this.requestedMissingAvatars[e]&&(this.pendingMissingAvatars[e]=t,this.missingAvatarsTimer&&(clearTimeout(this.missingAvatarsTimer),this.missingAvatarsTimer=void 0),this.missingAvatarsTimer=setTimeout(()=>{if(!this.isMounted)return;let e={...this.pendingMissingAvatars};this.pendingMissingAvatars={};let t=Object.keys(e);if(t.length){for(let e of t)this.requestedMissingAvatars[e]=!0;this.props.onEmailsMissingAvatarUrls?.(e)}},100))};onMissingRefMetadata=(e,t)=>{if(!this.props.onRefsMissingMetadata||this.requestedMissingRefsMetadata[e])return;let r=this.pendingMissingRefsMetadata[e]||[],o=t.filter(e=>!r.includes(e));this.pendingMissingRefsMetadata[e]=[...r,...o],this.missingRefsMetadataTimer&&(clearTimeout(this.missingRefsMetadataTimer),this.missingRefsMetadataTimer=void 0),this.missingRefsMetadataTimer=setTimeout(()=>{if(!this.isMounted)return;let e={...this.pendingMissingRefsMetadata};this.pendingMissingRefsMetadata={};let t=Object.keys(e);if(t.length){for(let e of t)this.requestedMissingRefsMetadata[e]=!0;this.props.onRefsMissingMetadata?.(e)}},100)};selectNext(e){let t;if(e&&"normal"===this.searchMode&&this.selectionFocusSha){let e=this.processedGraphRowBySha[this.selectionFocusSha];e?.parents?.length&&(t=e.parents[0])}else{let e=Math.min((this.selectionFocusSha?this.orderedGraphRows.findIndex(e=>e.sha===this.selectionFocusSha):-1)+1,this.orderedGraphRows.length-1);t=this.orderedGraphRows[e]?.sha}this.currentSha=t||null,t&&(this.selectCommits([t],!1,!0),this.selectionAnchorSha=t)}selectPrevious(e){let t;if(e&&"normal"===this.searchMode&&this.selectionFocusSha){let e=this.childrenBySha[this.selectionFocusSha];if(e?.length){for(let r=0;r<e.length;r+=1)if(r===e.length-1)t=e[r];else if(this.processedGraphRowBySha[e[r]]?.type!==ir){t=e[r];break}}}else{let e=Math.max(-1,(this.selectionFocusSha?this.orderedGraphRows.findIndex(e=>e.sha===this.selectionFocusSha):-1)-1);t=this.orderedGraphRows[e]?.sha,e<0&&(t=this.orderedGraphRows[0]?.sha)}this.currentSha=t||null,t&&(this.selectCommits([t],!1,!0),this.selectionAnchorSha=t)}selectHead(e){let t=null;e&&this.headUpstreamSha?t=this.headUpstreamSha:this.headSha&&(t=this.headSha),this.currentSha=t||null,t&&(this.selectCommits([t],!1,!0),this.selectionAnchorSha=t)}getAvailableColumnAndUseIt(){let e=0;for(;this.columnsUsed[e];)e+=1;return this.columnsUsed[e]=!0,e}getColumns(e){let t,r;this.hasMergeNodeChildBySha[e.sha]&&delete this.hasMergeNodeChildBySha[e.sha];let o=e.parents||[],i=this.columnsToFreeWhenFound[e.sha];if(void 0!==i)for(let e=0;e<i.length;e+=1)delete this.columnsUsed[i[e]];let a=0,s=this.reserverInfoBySha[e.sha];s?.column!==void 0?(a=s.column,delete this.reserverInfoBySha[e.sha]):a=this.getAvailableColumnAndUseIt();for(let i=0;i<o.length;i+=1)if(t=o[i],e.type===ie&&(this.hasMergeNodeChildBySha[t]=!0),r=this.reserverInfoBySha[t],0===i&&r?.column!==void 0&&r?.column!==a){let o=this.columnsToFreeWhenFound[t]||[],i=r?.type===ir&&e.type!==ir&&s?.newestDate>r?.newestDate;(r?.column>a||i)&&!this.hasMergeNodeChildBySha[t]?(this.reserverInfoBySha[t]={type:e.type,newestDate:s?.newestDate,column:a},o.push(r.column)):o.push(a),this.columnsToFreeWhenFound[t]=o}else r?.column===void 0&&(this.reserverInfoBySha[t]={type:e.type,newestDate:s?.column===a?s?.newestDate:e.date,column:0===i?a:this.getAvailableColumnAndUseIt()});return a}getFilteredHeadsForGraphRow(e,t){return e.heads.filter(e=>e.isCurrentHead||(t?void 0!==this.includeOnlyRefsById[iW(ic,e)]:!this.excludeByType.heads&&void 0===this.excludeRefsById[iW(ic,e)]))}getFilteredRemotesForGraphRow(e,t){return e.remotes.filter(e=>t?void 0!==this.includeOnlyRefsById[iW(iu,e)]||!e.owner||void 0!==this.includeOnlyRemotesByName[e.owner]:(!this.excludeByType.remotes||e.owner&&this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0)&&void 0===this.excludeRefsById[iW(iu,e)]&&(!e.owner||void 0===this.excludeRemotesByName[e.owner]))}getFilteredTagsForGraphRow(e,t,r){let o=t&&Object.values(this.includeOnlyRefsById).some(e=>"tag"===e.type),i=t&&(this.getFilteredHeadsForGraphRow(e,t).length>0||this.getFilteredRemotesForGraphRow(e,t).length>0);return e.tags.filter(e=>o?void 0!==this.includeOnlyRefsById[iW("tag",e)]:!this.excludeByType.tags&&void 0===this.excludeRefsById[iW("tag",e)]&&(!t||i||r))}loadRowsbySha(e){this.orderedGraphRows=[],this.processedGraphRowBySha={};let t=this.isCommitListFiltered();this.childrenBySha={},this.shaByRefId={},this.reserverInfoBySha={},this.columnsToFreeWhenFound={},this.columnsUsed={};let r=new Map,o={},i=[],a=[];this.branchUpstreamRowIndices=[];let s=[],c=[],u=[],h=[],d={};if(i4(this.workDirStats)&&e.length>0&&!i6(e[0].type)){let t,r=(t=e.find(i3),t?.sha||void 0),o={sha:io,parents:r?[r]:[],author:"",email:"",date:new Date().getTime(),message:this.translateCallback("Graph-WorkInProgress"),type:io,heads:[],remotes:[],tags:[]};this.workDirStats.context&&(o.contexts={row:this.workDirStats.context}),e.unshift(o)}else!i4(this.workDirStats)&&e.length>0&&i6(e[0].type)&&e.shift();let p=Object.keys(this.includeOnlyRefsById).length>0;e.forEach((e,f)=>{let g,m=this.childrenBySha[e.sha]?.length>0,b=e.heads?.length>0?this.getFilteredHeadsForGraphRow(e,p):[],v=e.remotes?.length>0?this.getFilteredRemotesForGraphRow(e,p):[],w=e.tags?.length>0?this.getFilteredTagsForGraphRow(e,p,!!(d[e.sha]||m)):[],S=e.parents?.length>0?e.parents.filter(e=>!o[e]):[],x=b.length>0||v.length>0||w.length>0,C=b.length>0||v.length>0;if(e.type!==n7&&e.type!==ie||d[e.sha]){if(e.type===ir&&this.excludeByType.stashes&&(o[e.sha]=!0),!o[e.sha]&&S.length>0){let e;for(e of S)d[e]=!0}}else e.type!==n7&&e.type!==ie||d[e.sha]||x||m||(o[e.sha]=!0);let _=o[e.sha],T=_?0:this.getColumns(e);t&&(g=T,T=0);let E=new tO(this,{...e,heads:b,remotes:v,tags:w,parents:S},T,void 0,void 0,void 0,void 0,g);if(!_){let o,d=r.get(e.sha);d?.length&&(d.sort((e,t)=>{if(e.parentIndexScore<t.parentIndexScore)return -1;if(e.parentIndexScore>t.parentIndexScore)return 1;if(e.parentIndexScore===t.parentIndexScore){if(e.rowEntered<t.rowEntered)return -1;if(e.rowEntered>t.rowEntered)return 1}return 0}),o=d[0],E.childRefs={heads:[...o?.heads||[]],remotes:[...o?.remotes||[]],tags:[...o?.tags||[]]},r.delete(e.sha));for(let t=0;t<S.length;t+=1){let i=S[t];this.childrenBySha[i]||(this.childrenBySha[i]=[]),this.childrenBySha[i].push(e.sha);let a=r.get(i);(C||o)&&void 0===a&&(a=[],r.set(i,a)),C?a?.unshift({sha:e.sha,parentIndexScore:t,rowEntered:f,heads:b,remotes:v,tags:w}):o&&a?.unshift({...o,parentIndexScore:t,rowEntered:f})}let p=this.orderedGraphRows.length;if(E.rowIndex=p,b.length>0)for(let e of(s.push(p),b.some(e=>e.isCurrentHead)&&(this.headSha=E.sha,i.push(p)),b))this.shaByRefId[iW(ic,e)]=E.sha;if(v.length>0)for(let e of(c.push(p),v))e.current&&(a.push(p),this.headUpstreamSha=E.sha),this.downstreamsByUpstream[`${e.owner}/${e.name}`]?.length>0&&this.branchUpstreamRowIndices.push(p),this.shaByRefId[iW(iu,e)]=E.sha;if(w.length>0)for(let e of(u.push(p),w))this.shaByRefId[iW("tag",e)]=E.sha;e.type===ir&&h.push(p),(!t||this.highlightedShas[e.sha])&&this.orderedGraphRows.push(E)}this.processedGraphRowBySha[e.sha]=E}),this.isMounted?this.setState(e=>({markerRowIndices:{...e.markerRowIndices,head:i,upstream:a,localBranches:s,remoteBranches:c,tags:u,stashes:h}})):this.state={...this.state,markerRowIndices:{...this.state?.markerRowIndices,head:i,upstream:a,localBranches:s,remoteBranches:c,tags:u,stashes:h}},this.clearTimelinesInterval(),this.updateTimelines(),this.timelinesInterval=setInterval(this.onTimelinesRefreshInterval,9e5),this.onGraphVisibleRowsUpdated()}updateRowStatsConstraints(){this.rowStatsConstraints=function(e){let{length:t}=e;if(0===t)return{min:0,max:0};if(1===t)return{min:0,max:e[0]};e.sort((e,t)=>e-t);let r=e[0],o=e[Math.floor(.25*t)],i=e[Math.floor(.5*t)],a=e[Math.floor(.75*t)],s=e[t-1],c=a-o;return{min:Math.max(r,i-1.5*c),max:Math.min(s,i+1.5*c)}}(null!=this.rowsStats?Object.values(this.rowsStats).map(e=>e.additions+e.deletions):[])}updateTimelines(){Object.values(function(){let e,t=new Date,r={hour:[],day:[],week:[],month:[],year:[]};for(e=1;e<=23;e+=1)r.hour.push({date:t.getTime()-36e5*e,label:1===e?"Timeline-1HourAgo":"Timeline-NHoursAgo",timeUnit:"hour",value:e});for(e=1;e<=6;e+=1)r.day.push({date:t.getTime()-864e5*e,label:1===e?"Timeline-Yesterday":"Timeline-NDaysAgo",timeUnit:"day",value:e});for(e=1;e<=4;e+=1)r.week.push({date:t.getTime()-6048e5*e,label:1===e?"Timeline-1WeekAgo":"Timeline-NWeeksAgo",timeUnit:"week",value:e});let o=new Date;for(o.setHours(0,0,0,0),e=1;e<=11;e+=1)o.setMonth(o.getMonth()-1),o.setHours(0,0,0,0),r.month.push({date:o.getTime(),label:1===e?"Timeline-1MonthAgo":"Timeline-NMonthsAgo",timeUnit:"month",value:e});let i=new Date;for(i.setHours(0,0,0,0),e=1;e<=6;e+=1){let t;switch(i.setFullYear(i.getFullYear()-1),i.setHours(0,0,0,0),e){case 1:t="Timeline-1YearAgo";break;case 6:t="Timeline-NPlusYearsAgo";break;default:t="Timeline-NYearsAgo"}r.year.push({date:i.getTime(),label:t,timeUnit:"year",value:e})}return r}()).forEach(e=>{e.forEach(e=>{let{date:t}=e,r=this.orderedGraphRows.find(e=>e.date<t);r&&this.processedGraphRowBySha[r.sha]&&(this.processedGraphRowBySha[r.sha].timeLineEntry=e)})})}clearTimelines(){Object.keys(this.processedGraphRowBySha).forEach(e=>{this.processedGraphRowBySha[e].timeLineEntry&&delete this.processedGraphRowBySha[e].timeLineEntry})}clearTimelinesInterval(){this.timelinesInterval&&(clearInterval(this.timelinesInterval),this.timelinesInterval=void 0)}onTimelinesRefreshInterval=()=>{this.isMounted&&(this.clearTimelines(),this.updateTimelines(),this.setState({processedRows:[...this.orderedGraphRows]}))};cleanupSelections(){for(let e of this.selectedShas)this.processedGraphRowBySha[e]||(this.selectedShas.delete(e),this.selectionFocusSha===e&&(this.selectionFocusSha=void 0));this.selectionAnchorSha&&!this.processedGraphRowBySha[this.selectionAnchorSha]&&(this.selectionAnchorSha=void 0)}getColumnColorByColumn(e){let t=this.getNumGraphColumns(e),r=this.maxColumns>t?this.maxColumns:t,o={};for(let a=0;a<=r;a+=1)if(a<t){var i;let t=e[is(a)];o[a]="rgba"===(i=an(t)).type?`rgba(${i.r}, ${i.g}, ${i.b}, ${Number(i.a.toFixed(2))})`:`hsla(${i.h}, ${(100*i.s).toFixed(2)}%, ${(100*i.l).toFixed(2)}%, ${Number(i.a.toFixed(2))})`}else{let e=o[a%t];o[a]=e}return o}getNumGraphColumns(e){let t=Number.parseInt(e["--num-columns-supported"],10);return Number.isNaN(t)?10:t}expandLastZoneMinWidthForScrollbar(e){let t=e[e.length-1]?.type;if(!t)return;let r=iU(this.props.cssVariables,!0),o=iR[t].minimumWidth+r,i=this.graphZonesByType[t];if(!i||null!=i.maximumWidth&&o>i.maximumWidth)return;i.minimumWidth=o;let a=iR[t].showIconWidth;null!=a&&(i.showIconWidth=a+r),i.currentWidth<i.minimumWidth&&(i.currentWidth=i.minimumWidth),i.preferredWidth<i.minimumWidth&&(i.preferredWidth=i.minimumWidth)}ensureZoneWidthsMatchGraphWidth(e,t){let r=iV(e);r>t&&this.shrinkZoneWidthsToFitWidth(e,t),r<t&&this.expandZoneWidthsToFitWidth(e,t)}shrinkZoneWidthsToFitWidth(e,t,r){let o=iV(e);for(;o>t;){let i=ij(e,r);if(!i)break;let a=iV(e,i.type);if(a+i.currentWidth>t){let r=iX(i,e,t-a);this.updateWidthByZone(r,i.type)}o=iV(e)}}getOrderedActiveGraphZones(){return this.graphZoneOrdering.sort((e,t)=>this.graphZonesByType[e].order-this.graphZonesByType[t].order).filter(e=>!this.graphZonesByType[e].isHidden).map(e=>this.graphZonesByType[e])}expandZoneWidthsToFitWidth(e,t,r){let o=iV(e);for(;o<t;){let i=function(e,t=0){if(e.length){for(let r=t;r<e.length;r+=1){let t=e[r],o=t.maximumWidth?Math.min(t.maximumWidth,t.preferredWidth||1/0):t.preferredWidth;if(o&&t.currentWidth<o)return t}return e[e.length-1]}}(e,r);if(!i)break;let a=iV(e,i.type),s=i.maximumWidth?Math.min(i.maximumWidth,i.preferredWidth||1/0):i.preferredWidth||0;if(a+i.currentWidth<t){let r=t-a;!iq(i.type,e)&&r>s&&(r=s),r=iX(i,e,r),this.updateWidthByZone(r,i.type)}o=iV(e)}}onGraphHeaderRowMouseDown=e=>{1===e.button&&e.preventDefault()};onToggleRefNodesShown=(e,t,r,o)=>{t.forEach(e=>{r&&this.excludeRefsById[e.id]?delete this.excludeRefsById[e.id]:r||(this.excludeRefsById[e.id]=e)}),this.excludeRemotesByName=this.getExcludeRemotesByName(),this.props.onToggleRefsVisibilityClick&&this.props.onToggleRefsVisibilityClick(e,t,r,o?this.processedGraphRowBySha[o]:void 0),this.processRows(this.props.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})};cleanEdgeCaches(){aP={},az={},aI={},a$={},af={}}onZoneEnter=(e,t,r,o)=>{"ref"!==t&&(r&&o&&this.onRefNodeUnhovered(e,r,o),this.onRefZoneUnhovered())};adjustResizedGraphZone(e,t,r,o){if(r?.width){let i=t.currentWidth;this.updateWidthByZone(r.width,t.type,o);let a=i1(t.type,e),s=this.graphZonesByType[t.type];i>s.currentWidth&&this.expandZoneWidthsToFitWidth(e,this.graphWidth,a+1),i<s.currentWidth&&this.shrinkZoneWidthsToFitWidth(e,this.graphWidth,a-1)}}dimRowsOfSelectedCommit(e){this.setState({dimRowsOfSelectedCommit:e})}onGraphContainerBlurred=(e,t,r)=>{setTimeout(()=>{this.isMounted&&(t&&r&&this.onRefNodeUnhovered(e,t,r),this.onRefZoneUnhovered())},250)};onGraphContainerMouseEnter=e=>{this.props.onGraphMouseEnter&&this.props.onGraphMouseEnter(e)};onGraphContainerMouseLeave=e=>{this.props.onGraphMouseLeave&&this.props.onGraphMouseLeave(e)};onGraphResized=iA((e,t)=>{if(!this.isMounted)return;let r=Math.floor(t),o=Math.floor(e),i=r!==this.graphHeight,a=o!==this.graphWidth,s={};if(i&&(this.graphHeight=r,s.height=r),a){this.graphWidth=o;let e=this.getOrderedActiveGraphZones();this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),s.width=this.graphWidth,s.graphZones=e}(i||a)&&(this.setState(s),i&&this.onGraphVisibleRowsUpdatedThrottled(),this.props.onGraphResized&&this.props.onGraphResized(this.graphWidth,this.graphHeight))});onGraphVisibleRowsUpdated(){if(!this.isMounted||!this.props.onGraphVisibleRowsChanged||!this.orderedGraphRows?.length)return;let{top:e,bottom:t}=this.getTopAndBottomVisibleRowIndex();-1===e||-1===t||e>=this.orderedGraphRows.length||t>=this.orderedGraphRows.length||e===this.lastTopVisibleRowIndex&&t===this.lastBottomVisibleRowIndex||(this.lastTopVisibleRowIndex=e,this.lastBottomVisibleRowIndex=t,this.props.onGraphVisibleRowsChanged&&this.props.onGraphVisibleRowsChanged(this.orderedGraphRows[e],this.orderedGraphRows[t]))}getCurrentPlatform(){return this.props.platform||"darwin"}isMacOSPlatform(){return"darwin"===this.getCurrentPlatform()}isCommitListFiltered(){return"filter"===this.searchMode&&Object.values(this.highlightedShas).length>0}getGraphColumnSettingFromZoneType(e){return{width:e.preferredWidth||0,isHidden:e.isHidden,mode:e.mode,order:e.order}}decorateWithHelmet=(e,t,r)=>{let o=function(e){let t=e||ia,r="";for(let e of(r+=`.gk-graph {
`,Object.keys(t)))r+=`${e}: ${t[e]};
`;return r+`}
`}(t);return n1.default.createElement(n1.default.Fragment,null,n1.default.createElement("style",{nonce:r},o),n1.default.createElement("div",{className:"gk-graph"},e))};render(){let e,{columnsSettings:t,customFooterRow:r,isInUnsupportedRebase:o,isCommitting:i,repoPath:a,nonce:s,suppressNonRefRowTooltips:c,wipMessageEditable:u}=this.props,{avatarUrlByEmail:h,columnColorByColumn:d,contexts:p,createRefFormData:f,cssVariablesWithDefaults:g,currentlyHoveredCommitSha:m,dimMergeCommits:b,dimRowsOfSelectedCommit:v,enableShowHideRefsOptions:w,highlightRowsOnRefHover:S,showGhostRefsOnRowHover:x,showRemoteNamesOnRefs:C,enabledRefMetadataTypes:_,enabledScrollMarkerTypes:T,graphCommitDescDisplayMode:E,graphZones:O,hasMoreCommits:$,height:P,highlightedShas:D,hoveredRefGroup:A,hoveredRefZoneSha:B,themeOpacityFactor:W,isLoadingRows:F,rowsStatsLoading:G,numGraphColumns:j,pendingCommitMessageSummary:U,processedRows:V,refIconsPosition:Z,refMetadataById:K,useAuthorInitialsForAvatars:Q,scrollToAlignment:X,scrollToIndex:J,scrollTop:ee,scrollLeft:et,shaLength:er,width:en,workDirStats:ei}=this.state,ea=n0()("flex","graph-container"),es=e=>e===V.length?"SHOW_MORE_COMMITS":V[e].sha,el=(e=e=>es(e),({cellCache:t,cellRenderer:r,columnSizeAndPositionManager:o,columnStartIndex:i,columnStopIndex:a,deferredMeasurementCache:s,horizontalOffsetAdjustment:c,isScrolling:u,parent:h,rowSizeAndPositionManager:d,rowStartIndex:p,rowStopIndex:f,styleCache:g,verticalOffsetAdjustment:m,visibleColumnIndices:b,visibleRowIndices:v})=>{let w=[],S=o.areOffsetsAdjusted()||d.areOffsetsAdjusted(),x=!u&&!S;for(let S=p;S<=f;S+=1){let p=d.getSizeAndPositionOfCell(S);for(let d=i;d<=a;d+=1){let i,a,f=o.getSizeAndPositionOfCell(d),C=d>=b.start&&d<=b.stop&&S>=v.start&&S<=v.stop,_=`${S}-${d}`;x&&g[_]?i=g[_]:s&&!s.has(S,d)?i={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(i={height:p.size,left:f.offset+c,position:"absolute",top:p.offset+m,width:f.size},g[_]=i);let T={columnIndex:d,isScrolling:u,isVisible:C,key:_,parent:h,rowIndex:S,style:i};if(!u||c||m)a=r(T);else{let o=e(S,d);t[_]&&t[_].realKeyForCell===o||(t[_]={realKeyForCell:o,cell:r(T)}),a=t[_].cell}null!=a&&w.push(a)}}return w}),ec=this.getLeftGutterWidth(),eu=this.getRightGutterWidth(),eh=this.getRightGutterBoxShadowAlpha(W),ed=this.getLeftGutterBoxShadowAlpha(W),ep=this.getNodeOffsetByColumn(),ef=this.getNodeOpacityByColumn(),eg=i1("ref",O),em=i1(im,O),eb=!A,ev={alwaysShowTimelines:this.isCommitListFiltered(),avatarUrlByEmail:h,createRefFormData:f,dimMergeCommits:b,dimRowsOfSelectedCommit:v,enableShowHideRefsOptions:w,highlightRowsOnRefHover:S,showGhostRefsOnRowHover:x,showRemoteNamesOnRefs:C,enabledRefMetadataTypes:_,enabledScrollMarkerTypes:T,isInUnsupportedRebase:o,isCommitting:i||!1,pendingCommitMessageSummary:U,workDirStats:ei,repoPath:a,columnColorByColumn:d,currentlyHoveredCommitSha:m,cssVariables:g,graphCommitDescDisplayMode:E,graphZoneModeConstants:this.graphZoneModeConstants,graphZones:O,hasMoreCommits:$,height:P,highlightedShas:D,hoveredRefGroup:A,hoveredRefZoneSha:B,includeOnlyRefsById:this.includeOnlyRefsById,includeOnlyRemotesByName:this.includeOnlyRemotesByName,isLoadingRows:F,selectedShas:this.selectedShas,leftGutterBoxShadowAlpha:ed,leftGutterWidth:ec,nodeOffsetByColumn:ep,nodeOpacityByColumn:ef,nonce:s,numGraphColumns:j,processedRows:V,processedGraphRowBySha:this.processedGraphRowBySha,refIconsPosition:Z,refMetadataById:K,rightGutterBoxShadowAlpha:eh,rightGutterWidth:eu,rowStatsConstraints:this.rowStatsConstraints,rowsStats:this.rowsStats,suppressNonRefRowTooltips:c,useAuthorInitialsForAvatars:Q,scrollToAlignment:X,scrollLeft:et,scrollTop:ee,shaLength:er,shouldShowRefLine:-1!==eg&&-1!==em&&em-eg==1,width:en,wipMessageEditable:u||!1,onMissingAvatar:this.onMissingAvatar,onMissingRefMetadata:this.onMissingRefMetadata,clearCurrentlyHoveredGraphCommit:this.onClearCurrentlyHoveredGraphCommit,setAsCurrentlyHoveredGraphCommit:this.onCurrentlyHoveredGraphCommit,onClickRef:this.onClickRef,onClickCommit:this.onClickCommit,onDoubleClickCommit:this.onDoubleClickCommit,onBlurWipNodeInput:this.onBlurWipNodeInput,onFocusWipNodeInput:this.onFocusWipNodeInput,onDoubleClickRef:this.onDoubleClickRef,onMessageChange:this.onMessageChange,onRefBeginDrag:this.onRefBeginDrag,onRefCanDrag:this.onRefCanDrag,onRefCanDrop:this.onRefCanDrop,onRefCreate:this.onRefCreate,onRefCreateCancel:this.onRefCreateCancel,onRefCreateContextMenu:this.onRefCreateContextMenu,onRefDragEnter:this.onRefDragEnter,onRefDragLeave:this.onRefDragLeave,onRefDrop:this.onRefDrop,onRefEndDrag:this.onRefEndDrag,onRefNodeHovered:this.onRefNodeHovered,onRefNodeUnhovered:this.onRefNodeUnhovered,onRefShorthandChange:this.onRefShorthandChange,onRefZoneHovered:this.onRefZoneHovered,onRefZoneUnhovered:this.onRefZoneUnhovered,onToggleRefNodesShown:this.onToggleRefNodesShown,onCommitContextMenu:this.onCommitContextMenu,onShowContextMenuForGroupedRef:this.onRefContextMenu,getExternalIcon:this.getIconCallback,formatCommitDateTime:this.formatCommitDateTimeCallback,formatRefShorthand:this.formatRefShorthandCallback,isRefShorthandValid:this.isRefShorthandValidCallback,translate:this.translateCallback},ey={ref:((e,t)=>{let{createRefFormData:r,formatRefShorthand:o,enableShowHideRefsOptions:i,enabledRefMetadataTypes:a,isRefShorthandValid:s,showGhostRefsOnRowHover:c,showRemoteNamesOnRefs:u,onDoubleClickRef:h,processedRows:d,includeOnlyRefsById:p,includeOnlyRemotesByName:f,isInUnsupportedRebase:g,getExternalIcon:m,hoveredRefGroup:b,hoveredRefZoneSha:v,numGraphColumns:w,onClickRef:S,onMissingRefMetadata:x,onShowContextMenuForGroupedRef:C,onRefBeginDrag:_,onRefCanDrag:T,onRefCanDrop:E,onRefCreate:O,onRefCreateCancel:$,onRefCreateContextMenu:P,onRefDragEnter:D,onRefDragLeave:A,onRefDrop:B,onRefEndDrag:W,onRefNodeHovered:F,onRefNodeUnhovered:G,onRefShorthandChange:j,onRefZoneHovered:U,onRefZoneUnhovered:V,onToggleRefNodesShown:Z,refIconsPosition:K,refMetadataById:Q,shouldShowRefLine:X,translate:J}=e,ee=new t2(e);return({rowIndex:e,style:et})=>{let er=t(e),en=d[e],ei=ee.getZoneWidth("ref"),ea=ee.isHovering(e),{sha:es,type:el,hasRefs:ec,contexts:eu}=en,eh=eu?.ref||void 0,ed=eu?.refGroups||void 0,ep=ee.isSingleSelected(e),ef=(c||ec)&&(ec||ea||ep)?ee.getGraphRefGroupsByNameForRow(e):[],eg=ee.isColumnFollowingGraphColumn("ref"),em=ee.shouldUseColumnHeaderIcons("ref");return r?.sha===es?n1.default.createElement(lZ,{createRefFormData:r,formatRefShorthand:o,isRefShorthandValid:s,key:er,onCancel:$,onContextMenu:P,onRefCreate:O,onRefShorthandChange:j,refZoneWidth:ei,style:et,translate:J}):n1.default.createElement(lq,{column:en.column,columnForColoring:en.columnForColoring,context:eh,enabledRefMetadataTypes:a,enableShowHideRefsOptions:i,getExternalIcon:m,hasActive:ee.rowContainsCurrentHeadRef(en),hasRefs:ec||!1,hasTimeline:ee.hasTimeline(e),hoveredRefGroup:b,hoveredRefZoneSha:v,includeOnlyRefsById:p,includeOnlyRemotesByName:f,isInUnsupportedRebase:g,isSingleSelected:ep,key:er,numGraphColumns:w,onClickRef:S,onDoubleClickRef:h,onMissingRefMetadata:x,onRefBeginDrag:_,onRefCanDrag:T,onRefCanDrop:E,onRefDragEnter:D,onRefDragLeave:A,onRefDrop:B,onRefEndDrag:W,onToggleRefNodesShown:Z,refGroupContexts:ed,refGroupsByName:ef,refIconsPosition:K,refMetadata:Q,refNodeHovered:F,refNodeUnhovered:G,refZoneHovered:U,refZoneUnhovered:V,sha:es,shouldShowRefLine:X,showColorStrip:eg,showContextMenuForGroupedRef:C,showGhostRefsOnRowHover:c,showRemoteNamesOnRefs:u,style:et,translate:J,type:el,useColumnHeaderIcons:em,width:ei})}})(ev,es),[im]:hW(ev,es),[ib]:((e,t)=>{let{dimMergeCommits:r,dimRowsOfSelectedCommit:o,processedRows:i,translate:a,getExternalIcon:s,graphCommitDescDisplayMode:c,highlightRowsOnRefHover:u,isInUnsupportedRebase:h,numGraphColumns:d,isCommitting:p,pendingCommitMessageSummary:f,workDirStats:g,onBlurWipNodeInput:m,onFocusWipNodeInput:b,onMessageChange:v,clearCurrentlyHoveredGraphCommit:w,currentlyHoveredCommitSha:S,onCommitContextMenu:x,onClickCommit:C,onDoubleClickCommit:_,setAsCurrentlyHoveredGraphCommit:T,suppressNonRefRowTooltips:E,wipMessageEditable:O}=e,$=new t2(e);return({rowIndex:e,style:P})=>{let D=t(e),A=i[e],{displaySummary:B,displayBody:W,sha:F,type:G,contexts:j,message:U}=A,V=j?.message||void 0,Z=j?.row||void 0,K=$.isColumnFollowingGraphColumn(ib),Q=$.isLastColumn(ib),X=$.getZoneWidth(ib),J=$.getVerticalScrollWidth(ib),ee=$.isHovering(e),et=G===io&&void 0!==g&&Object.keys(g).length>0,er=et&&!O?n1.default.createElement(h$,{diffStats:g,getExternalIcon:s,translate:a}):null,en=c===iE.ALWAYS||c===iE.ON_HOVER&&ee,ei=G!==io||O?n1.default.createElement(n1.default.Fragment,null,n1.default.createElement("span",{className:"message-zone--summary"},B),en&&W?n1.default.createElement("span",{className:"message-zone--body"},W):null):n1.default.createElement("span",{style:{display:"flex",alignItems:"stretch",textOverflow:"ellipsis"}},en?B:null,er);return et&&O?n1.default.createElement(lI,{clearCurrentlyHoveredGraphCommit:w,currentlyHoveredCommitSha:S,getExternalIcon:s,graphZoneType:ib,isCommitting:p,isHovering:$.isHovering(e),isSelected:$.isSelected(e),key:D,onBlur:m,onClickCommit:C,onContextMenu:x,onFocus:b,onMessageChange:v,setAsCurrentlyHoveredGraphCommit:T,sha:F,style:P,translate:a,value:f,workDirStats:g}):n1.default.createElement(ld,{clearCurrentlyHoveredGraphCommit:w,column:A.column,columnForColoring:A.columnForColoring,context:V,currentlyHoveredCommitSha:S,dimRowsOfSelectedCommit:o,getExternalIcon:s,graphZoneType:ib,highlightRowsOnRefHover:u,isDimmedMergeCommitRow:G===ie&&r,isHighlighted:$.isHighlighted(e),isHovering:ee,isInUnsupportedRebase:h,isLastColumn:Q,isMissingHoveredRefGroup:$.isMissingHoveredRefGroup(e),isSelected:$.isSelected(e),key:D,numGraphColumns:d,onClickCommit:C,onContextMenu:x,onDoubleClickCommit:_,rowContext:Z,setAsCurrentlyHoveredGraphCommit:T,sha:F,showColorStrip:K,showConflictIcon:G===n9||G===it,showTimeline:$.hasTimeline(e),style:P,title:E?void 0:U,type:G,verticalScrollWidth:J,zoneWidth:X},ei)}})(ev,es),[iv]:((e,t)=>{let{avatarUrlByEmail:r,clearCurrentlyHoveredGraphCommit:o,cssVariables:i,currentlyHoveredCommitSha:a,dimMergeCommits:s,dimRowsOfSelectedCommit:c,getExternalIcon:u,highlightRowsOnRefHover:h,processedRows:d,isInUnsupportedRebase:p,onCommitContextMenu:f,onClickCommit:g,onDoubleClickCommit:m,numGraphColumns:b,setAsCurrentlyHoveredGraphCommit:v,suppressNonRefRowTooltips:w,useAuthorInitialsForAvatars:S}=e,x=new t2(e);return({rowIndex:e,style:C})=>{let _=t(e),T=d[e],{author:E,email:O,message:$,sha:P,type:D,contexts:A}=T,B=x.getActiveGraphZone(iv),W=D!==io?E:void 0,F=D!==io?hv(E,O):void 0,G=A?.author||void 0,j=A?.row||void 0,U=x.isColumnFollowingGraphColumn(iv),V=x.isLastColumn(iv),Z=x.getZoneWidth(iv),K=(Z<=B.minimumWidth||B?.mode===iS.Rich)&&D!==io;if(K){let e=S?void 0:r[O];W=n1.default.createElement(lf,{authorInitials:hb(E),avatarUrl:e,className:n0()("node",n7,"z6"),column:T.column,context:A?.avatar||void 0,cssVariables:i,fontSize:10,height:22,size:18,tooltip:w?void 0:()=>{let e=E&&""!==E.trim()&&"Unknown"!==E?hv(E,O):O,t=ac(as($||"")),r="";if(0===t.length)r=e;else{t.unshift({email:O,name:E});for(let e=0;e<t.length;e+=1){let o=t[e];r+=hv(o.name,o.email),e<t.length-1&&(r+=", ")}}return r},useAuthorInitialsForAvatars:S,width:22})}return n1.default.createElement(ld,{clearCurrentlyHoveredGraphCommit:o,column:T.column,columnForColoring:T.columnForColoring,context:G,currentlyHoveredCommitSha:a,dimRowsOfSelectedCommit:c,getExternalIcon:u,graphZoneType:iv,hasAvatars:K,highlightRowsOnRefHover:h,isDimmedMergeCommitRow:D===ie&&s,isHighlighted:x.isHighlighted(e),isHovering:x.isHovering(e),isInUnsupportedRebase:p,isLastColumn:V,isMissingHoveredRefGroup:x.isMissingHoveredRefGroup(e),isSelected:x.isSelected(e),key:_,numGraphColumns:b,onClickCommit:g,onContextMenu:f,onDoubleClickCommit:m,rowContext:j,setAsCurrentlyHoveredGraphCommit:v,sha:P,showColorStrip:U,showTimeline:x.hasTimeline(e),style:C,title:w?void 0:F,type:D,verticalScrollWidth:x.getVerticalScrollWidth(iv),zoneWidth:Z},W)}})(ev,es),[iy]:((e,t)=>{let{processedRows:r,getExternalIcon:o,highlightRowsOnRefHover:i,isInUnsupportedRebase:a,numGraphColumns:s,formatCommitDateTime:c,clearCurrentlyHoveredGraphCommit:u,dimMergeCommits:h,dimRowsOfSelectedCommit:d,currentlyHoveredCommitSha:p,onCommitContextMenu:f,onClickCommit:g,onDoubleClickCommit:m,setAsCurrentlyHoveredGraphCommit:b,suppressNonRefRowTooltips:v}=e,w=new t2(e);return({rowIndex:e,style:S})=>{let x=t(e),C=r[e],{date:_,sha:T,type:E,contexts:O}=C,$=_&&E!==io?c(_,ii.RowEntry):void 0,P=_&&E!==io?c(_,ii.Tooltip):void 0,D=O?.date||void 0,A=O?.row||void 0,B=w.isColumnFollowingGraphColumn(iy),W=w.isLastColumn(iy),F=w.getZoneWidth(iy),G=w.getVerticalScrollWidth(iy);return n1.default.createElement(ld,{clearCurrentlyHoveredGraphCommit:u,column:C.column,columnForColoring:C.columnForColoring,context:D,currentlyHoveredCommitSha:p,dimRowsOfSelectedCommit:d,getExternalIcon:o,graphZoneType:iy,highlightRowsOnRefHover:i,isDimmedMergeCommitRow:E===ie&&h,isHighlighted:w.isHighlighted(e),isHovering:w.isHovering(e),isInUnsupportedRebase:a,isLastColumn:W,isMissingHoveredRefGroup:w.isMissingHoveredRefGroup(e),isSelected:w.isSelected(e),key:x,numGraphColumns:s,onClickCommit:g,onContextMenu:f,onDoubleClickCommit:m,rowContext:A,setAsCurrentlyHoveredGraphCommit:b,sha:T,showColorStrip:B,showTimeline:!1,style:S,title:v?void 0:P,type:E,verticalScrollWidth:G,zoneWidth:F},$)}})(ev,es),sha:((e,t)=>{let{processedRows:r,getExternalIcon:o,highlightRowsOnRefHover:i,isInUnsupportedRebase:a,numGraphColumns:s,clearCurrentlyHoveredGraphCommit:c,currentlyHoveredCommitSha:u,dimMergeCommits:h,dimRowsOfSelectedCommit:d,onCommitContextMenu:p,onClickCommit:f,onDoubleClickCommit:g,setAsCurrentlyHoveredGraphCommit:m,shaLength:b,suppressNonRefRowTooltips:v}=e,w=new t2(e);return({rowIndex:e,style:S})=>{let x=t(e),C=r[e],{sha:_,type:T,contexts:E}=C,O=((e,t=i_)=>e?e.substring(0,t):"")(_,b),$=E?.sha||void 0,P=E?.row||void 0,D=w.isColumnFollowingGraphColumn("sha"),A=w.isLastColumn("sha"),B=w.getZoneWidth("sha"),W=w.getVerticalScrollWidth("sha");return n1.default.createElement(ld,{clearCurrentlyHoveredGraphCommit:c,column:C.column,columnForColoring:C.columnForColoring,context:$,currentlyHoveredCommitSha:u,dimRowsOfSelectedCommit:d,getExternalIcon:o,graphZoneType:"sha",highlightRowsOnRefHover:i,isDimmedMergeCommitRow:T===ie&&h,isHighlighted:w.isHighlighted(e),isHovering:w.isHovering(e),isInUnsupportedRebase:a,isLastColumn:A,isMissingHoveredRefGroup:w.isMissingHoveredRefGroup(e),isSelected:w.isSelected(e),key:x,numGraphColumns:s,onClickCommit:f,onContextMenu:p,onDoubleClickCommit:g,rowContext:P,setAsCurrentlyHoveredGraphCommit:m,sha:_,showColorStrip:D,showTimeline:w.hasTimeline(e),style:S,type:T,verticalScrollWidth:W,zoneWidth:B},T!==io?n1.default.createElement("span",{className:"font-monospace pointer",title:v?void 0:O},O):null)}})(ev,es),[iw]:((e,t)=>{let{processedRows:r,rowStatsConstraints:o,getExternalIcon:i,highlightRowsOnRefHover:a,isInUnsupportedRebase:s,numGraphColumns:c,clearCurrentlyHoveredGraphCommit:u,currentlyHoveredCommitSha:h,dimMergeCommits:d,dimRowsOfSelectedCommit:p,onCommitContextMenu:f,onClickCommit:g,onDoubleClickCommit:m,rowsStats:b,setAsCurrentlyHoveredGraphCommit:v,suppressNonRefRowTooltips:w}=e,S=new t2(e);return({rowIndex:e,style:x})=>{let C=t(e),_=r[e],{sha:T,type:E,contexts:O}=_,$=O?.stats||void 0,P=O?.row||void 0,D=b?.[T],A=[D?.files?`${D.files} files changed`:"",D?.additions?`${D.additions} lines added`:"",D?.deletions?`${D.deletions} lines deleted`:""].filter(Boolean).join(", ");A=E!==io?A:"";let B=S.isColumnFollowingGraphColumn(iw),W=S.isLastColumn(iw),F=S.getZoneWidth(iw),G=S.getVerticalScrollWidth(iw);return n1.default.createElement(ld,{clearCurrentlyHoveredGraphCommit:u,column:_.column,columnForColoring:_.columnForColoring,context:$,currentlyHoveredCommitSha:h,dimRowsOfSelectedCommit:p,getExternalIcon:i,graphZoneType:iw,highlightRowsOnRefHover:a,isDimmedMergeCommitRow:E===ie&&d,isHighlighted:S.isHighlighted(e),isHovering:S.isHovering(e),isInUnsupportedRebase:s,isLastColumn:W,isMissingHoveredRefGroup:S.isMissingHoveredRefGroup(e),isSelected:S.isSelected(e),key:C,numGraphColumns:c,onClickCommit:g,onContextMenu:f,onDoubleClickCommit:m,rowContext:P,setAsCurrentlyHoveredGraphCommit:v,sha:T,showColorStrip:B,showTimeline:S.hasTimeline(e),style:x,title:w?void 0:A,type:E,verticalScrollWidth:G,zoneWidth:F},D&&E!==io?n1.default.createElement(hu,{constraints:o,getExternalIcon:i,isLastColumn:W,isRowSelected:S.isSelected(e),stats:D,verticalScrollWidth:G,zoneWidth:F}):null)}})(ev,es),[ig]:((e,t)=>{let{translate:r,processedRows:o}=e,i=n0()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative"),a=new t2(e);return({rowIndex:e,style:s})=>{let c=t(e),u=n0()("graph-row","height-100-percent","flex"),h=a.hasTimeline(e),d=o[e],p=d.contexts?.row||void 0,f=d.timeLineEntry?.label||"",g=d.timeLineEntry?.value||0,m=h?n1.default.createElement(hp,null):null,b=h?n1.default.createElement("span",{className:"time-line-message-container"},n1.default.createElement("span",{className:"time-line-message"},r(f,g))):null;return n1.default.createElement("div",{className:i,"data-vscode-context":iH(p),key:c,style:s},m,n1.default.createElement("div",{className:u,"data-vscode-context":iH(p)},b))}})(ev,es)},ew=O.map((e,t)=>{let o=0===t;return n1.default.createElement(lU,{branchUpstreamRowIndices:this.branchUpstreamRowIndices,cellRenderersByIds:ey,columnIndex:t,customFooterRow:r,enabledScrollMarkerTypes:T,enableResizer:eb,getExternalIcon:this.getIconCallback,getKeyForCell:es,graphHeight:P-26,graphWidth:en,graphZones:O,graphZoneType:e.type,hasMoreCommits:$,horizontalScrollHeight:this.getHorizontalScrollHeight(e.type,g),isLoadingRows:F,key:`${e.type}ColumnContainer`,markerColors:this.getMarkerColors(),markerRowIndices:this.state.markerRowIndices,onResize:this.onGraphZoneResize,onResizeEnd:this.onGraphZoneResizeEnd,onScroll:this.onScrollForZone,onScrollToRowCausedUpdate:o?this.onScrollToRowCausedUpdateForFirstColumn:void 0,onZoneEnter:t=>this.onZoneEnter(t,e.type,A,B),rowCount:V.length,scrollLeft:et,scrollToAlignment:o?X:void 0,scrollToIndex:o?J:void 0,scrollTop:ee,smartCellRangeRenderer:el,translate:this.translateCallback,verticalScrollWidth:this.getVerticalScrollWidth(e.type,g)})}),eS=this.graphComponentRef?.current&&n1.default.createElement(lr,{columnsSettings:t,dragAppendToContainer:this.graphComponentRef?.current,enableResizer:eb,enableShowHideRefsOptions:w,excludeRefsById:this.excludeRefsById,getExternalIcon:this.getIconCallback,graphZones:O,headerContext:p?.header,height:P,includeOnlyRefsById:this.includeOnlyRefsById,onColumnReOrdered:this.onGraphColumnReOrdered,onFilterColumnClick:this.onFilterColumnClick,onGraphZoneResize:this.onGraphZoneResize,onGraphZoneResizeEnd:this.onGraphZoneResizeEnd,onPopupGraphHeaderContextMenu:this.onPopupGraphHeaderContextMenu,onSettingsClick:this.onSettingsClick,onToggleRefNodesShown:this.onToggleRefNodesShown,repoPath:a,rowsStatsLoading:G,settingsContext:p?.settings,showRemoteNamesOnRefs:C,translate:this.translateCallback,width:en}),ex=n1.default.createElement("div",{className:"graph-component","data-vscode-context":iH(p?.graph),onBlur:e=>this.onGraphContainerBlurred(e,A,B),onMouseEnter:this.onGraphContainerMouseEnter,onMouseLeave:this.onGraphContainerMouseLeave,ref:this.graphComponentRef,style:{height:"100%",width:"100%",position:"absolute"},tabIndex:-1},eS,n1.default.createElement("div",{className:D&&Object.keys(D).length?n0()(ea,"graph-highlighted"):ea,id:"graph-container",onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,onMouseDown:this.onGraphHeaderRowMouseDown,ref:this.graphContainerRef,style:{height:P,width:en},tabIndex:-1},ew));return this.decorateWithHelmet(ex,g,s)}};function hZ(e,t,r){return e?t(e):r?.(e)}function hK(e,t){e.dispatchEvent(new CustomEvent("gl-telemetry-fired",{bubbles:!0,detail:t}))}function hY(e,t,r,o){return`command:${e}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:r,...o}))}`}nQ(218),nQ(666),nQ(310),nQ(456),nQ(280),nQ(366);let hQ=O`
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
`,hX=O`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;var hJ=((g=hJ||{})[g.VerificationRequired=-1]="VerificationRequired",g[g.Community=0]="Community",g[g.DeprecatedPreview=1]="DeprecatedPreview",g[g.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",g[g.Trial=3]="Trial",g[g.TrialExpired=4]="TrialExpired",g[g.TrialReactivationEligible=5]="TrialReactivationEligible",g[g.Paid=6]="Paid",g);let h0=["pro","advanced","teams","enterprise"];function h1(e){var t;return t=e.plan.actual.id,h0.includes(t)}function h2(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}let h5=O`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;O`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${h5}
	}
`;let h3=O`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,h6=O`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;O`
	:focus-visible {
		${h3}
	}
`;let h4=O`
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
`;O`
	* {
		box-sizing: border-box;
	}
`;let h8=O`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${h3}
	}
	a:hover {
		text-decoration: underline;
	}
`,h7=O`
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
`,h9=O`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;var de=O`
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
`;let dt=new Set,dr=new Map,dn="ltr",di="en",da="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(da){let e=new MutationObserver(dl);dn=document.documentElement.dir||"ltr",di=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ds(...e){e.map(e=>{let t=e.$code.toLowerCase();dr.has(t)?dr.set(t,Object.assign(Object.assign({},dr.get(t)),e)):dr.set(t,e),f||(f=e)}),dl()}function dl(){da&&(dn=document.documentElement.dir||"ltr",di=document.documentElement.lang||navigator.language),[...dt.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){dt.add(this.host)}hostDisconnected(){dt.delete(this.host)}dir(){return`${this.host.dir||dn}`.toLowerCase()}lang(){return`${this.host.lang||di}`.toLowerCase()}getTranslationData(e){var t,r;let o=new Intl.Locale(e.replace(/_/g,"-")),i=null==o?void 0:o.language.toLowerCase(),a=null!=(r=null==(t=null==o?void 0:o.region)?void 0:t.toLowerCase())?r:"",s=dr.get(`${i}-${a}`),c=dr.get(i);return{locale:o,language:i,region:a,primary:s,secondary:c}}exists(e,t){var r;let{primary:o,secondary:i}=this.getTranslationData(null!=(r=t.lang)?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!o&&!!o[e]||!!i&&!!i[e]||!!t.includeFallback&&!!f&&!!f[e]}term(e,...t){let r,{primary:o,secondary:i}=this.getTranslationData(this.lang());if(o&&o[e])r=o[e];else if(i&&i[e])r=i[e];else{if(!f||!f[e])return String(e);r=f[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}};var dc={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};ds(dc);var du=class extends LocalizeController{};ds(dc);var dh=O`
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
`,dd=Object.defineProperty,dp=Object.defineProperties,df=Object.getOwnPropertyDescriptor,dg=Object.getOwnPropertyDescriptors,dm=Object.getOwnPropertySymbols,db=Object.prototype.hasOwnProperty,dv=Object.prototype.propertyIsEnumerable,dy=e=>{throw TypeError(e)},dw=(e,t,r)=>t in e?dd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,dS=(e,t)=>{for(var r in t||(t={}))db.call(t,r)&&dw(e,r,t[r]);if(dm)for(var r of dm(t))dv.call(t,r)&&dw(e,r,t[r]);return e},dx=(e,t)=>dp(e,dg(t)),dC=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?df(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&dd(t,r,a),a},dk=(e,t,r)=>t.has(e)||dy("Cannot "+r),d_=class extends lit_element_i{constructor(){let e;super(),(e=m).has(this)?dy("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let r=new CustomEvent(e,dS({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){let o=customElements.get(e);if(!o){try{customElements.define(e,t,r)}catch(o){customElements.define(e,class extends t{},r)}return}let i=" (unknown version)",a=i;if("version"in t&&t.version&&(i=" v"+t.version),"version"in o&&o.version&&(a=" v"+o.version),i&&a&&i===a)return}attributeChangedCallback(e,t,r){let o,i;if(dk(this,o=m,"read from private field"),i?!i.call(this):!o.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),dk(this,e=m,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&null==this[r]&&(this[r]=t)})}};m=new WeakMap,d_.version="2.20.1",d_.dependencies={},dC([eA()],d_.prototype,"dir",2),dC([eA()],d_.prototype,"lang",2);let dR=Math.min,dT=Math.max,dE=Math.round,dM=Math.floor,dO=e=>({x:e,y:e}),d$={left:"right",right:"left",bottom:"top",top:"bottom"},dI={start:"end",end:"start"};function dz(e,t){return"function"==typeof e?e(t):e}function dP(e){return e.split("-")[0]}function dD(e){return e.split("-")[1]}function dA(e){return"x"===e?"y":"x"}function dL(e){return"y"===e?"height":"width"}let dN=new Set(["top","bottom"]);function dH(e){return dN.has(dP(e))?"y":"x"}function dB(e){return e.replace(/start|end/g,e=>dI[e])}let dW=["left","right"],dF=["right","left"],dG=["top","bottom"],dj=["bottom","top"];function dU(e){return e.replace(/left|right|bottom|top/g,e=>d$[e])}function dV(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function dq(e){let{x:t,y:r,width:o,height:i}=e;return{width:o,height:i,top:r,left:t,right:t+o,bottom:r+i,x:t,y:r}}function dZ(e,t,r){let o,{reference:i,floating:a}=e,s=dH(t),c=dA(dH(t)),u=dL(c),h=dP(t),d="y"===s,p=i.x+i.width/2-a.width/2,f=i.y+i.height/2-a.height/2,g=i[u]/2-a[u]/2;switch(h){case"top":o={x:p,y:i.y-a.height};break;case"bottom":o={x:p,y:i.y+i.height};break;case"right":o={x:i.x+i.width,y:f};break;case"left":o={x:i.x-a.width,y:f};break;default:o={x:i.x,y:i.y}}switch(dD(t)){case"start":o[c]-=g*(r&&d?-1:1);break;case"end":o[c]+=g*(r&&d?-1:1)}return o}let dK=async(e,t,r)=>{let{placement:o="bottom",strategy:i="absolute",middleware:a=[],platform:s}=r,c=a.filter(Boolean),u=await (null==s.isRTL?void 0:s.isRTL(t)),h=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:p}=dZ(h,o,u),f=o,g={},m=0;for(let r=0;r<c.length;r++){let{name:a,fn:b}=c[r],{x:v,y:w,data:S,reset:x}=await b({x:d,y:p,initialPlacement:o,placement:f,strategy:i,middlewareData:g,rects:h,platform:s,elements:{reference:e,floating:t}});d=null!=v?v:d,p=null!=w?w:p,g={...g,[a]:{...g[a],...S}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(f=x.placement),x.rects&&(h=!0===x.rects?await s.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:d,y:p}=dZ(h,f,u)),r=-1)}return{x:d,y:p,placement:f,strategy:i,middlewareData:g}};async function dY(e,t){var r;void 0===t&&(t={});let{x:o,y:i,platform:a,rects:s,elements:c,strategy:u}=e,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:f=!1,padding:g=0}=dz(t,e),m=dV(g),b=c[f?"floating"===p?"reference":"floating":p],v=dq(await a.getClippingRect({element:null==(r=await (null==a.isElement?void 0:a.isElement(b)))||r?b:b.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:d,strategy:u})),w="floating"===p?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,S=await (null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),x=await (null==a.isElement?void 0:a.isElement(S))&&await (null==a.getScale?void 0:a.getScale(S))||{x:1,y:1},C=dq(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:S,strategy:u}):w);return{top:(v.top-C.top+m.top)/x.y,bottom:(C.bottom-v.bottom+m.bottom)/x.y,left:(v.left-C.left+m.left)/x.x,right:(C.right-v.right+m.right)/x.x}}let dQ=new Set(["left","top"]);async function dX(e,t){let{placement:r,platform:o,elements:i}=e,a=await (null==o.isRTL?void 0:o.isRTL(i.floating)),s=dP(r),c=dD(r),u="y"===dH(r),h=dQ.has(s)?-1:1,d=a&&u?-1:1,p=dz(t,e),{mainAxis:f,crossAxis:g,alignmentAxis:m}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return c&&"number"==typeof m&&(g="end"===c?-1*m:m),u?{x:g*d,y:f*h}:{x:f*h,y:g*d}}function dJ(){return"undefined"!=typeof window}function d0(e){return d5(e)?(e.nodeName||"").toLowerCase():"#document"}function d1(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function d2(e){var t;return null==(t=(d5(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function d5(e){return!!dJ()&&(e instanceof Node||e instanceof d1(e).Node)}function d3(e){return!!dJ()&&(e instanceof Element||e instanceof d1(e).Element)}function d6(e){return!!dJ()&&(e instanceof HTMLElement||e instanceof d1(e).HTMLElement)}function d4(e){return!!dJ()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof d1(e).ShadowRoot)}let d8=new Set(["inline","contents"]);function d7(e){let{overflow:t,overflowX:r,overflowY:o,display:i}=pc(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!d8.has(i)}let d9=new Set(["table","td","th"]),pe=[":popover-open",":modal"];function pt(e){return pe.some(t=>{try{return e.matches(t)}catch{return!1}})}let pr=["transform","translate","scale","rotate","perspective"],po=["transform","translate","scale","rotate","perspective","filter"],pn=["paint","layout","strict","content"];function pi(e){let t=pa(),r=d3(e)?pc(e):e;return pr.some(e=>!!r[e]&&"none"!==r[e])||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||po.some(e=>(r.willChange||"").includes(e))||pn.some(e=>(r.contain||"").includes(e))}function pa(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let ps=new Set(["html","body","#document"]);function pl(e){return ps.has(d0(e))}function pc(e){return d1(e).getComputedStyle(e)}function pu(e){return d3(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ph(e){if("html"===d0(e))return e;let t=e.assignedSlot||e.parentNode||d4(e)&&e.host||d2(e);return d4(t)?t.host:t}function pd(e,t,r){var o;void 0===t&&(t=[]),void 0===r&&(r=!0);let i=function e(t){let r=ph(t);return pl(r)?t.ownerDocument?t.ownerDocument.body:t.body:d6(r)&&d7(r)?r:e(r)}(e),a=i===(null==(o=e.ownerDocument)?void 0:o.body),s=d1(i);if(a){let e=pp(s);return t.concat(s,s.visualViewport||[],d7(i)?i:[],e&&r?pd(e):[])}return t.concat(i,pd(i,[],r))}function pp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function pf(e){let t=pc(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,i=d6(e),a=i?e.offsetWidth:r,s=i?e.offsetHeight:o,c=dE(r)!==a||dE(o)!==s;return c&&(r=a,o=s),{width:r,height:o,$:c}}function pg(e){return d3(e)?e:e.contextElement}function pm(e){let t=pg(e);if(!d6(t))return dO(1);let r=t.getBoundingClientRect(),{width:o,height:i,$:a}=pf(t),s=(a?dE(r.width):r.width)/o,c=(a?dE(r.height):r.height)/i;return s&&Number.isFinite(s)||(s=1),c&&Number.isFinite(c)||(c=1),{x:s,y:c}}let pb=dO(0);function pv(e){let t=d1(e);return pa()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:pb}function py(e,t,r,o){var i;void 0===t&&(t=!1),void 0===r&&(r=!1);let a=e.getBoundingClientRect(),s=pg(e),c=dO(1);t&&(o?d3(o)&&(c=pm(o)):c=pm(e));let u=(void 0===(i=r)&&(i=!1),o&&(!i||o===d1(s))&&i)?pv(s):dO(0),h=(a.left+u.x)/c.x,d=(a.top+u.y)/c.y,p=a.width/c.x,f=a.height/c.y;if(s){let e=d1(s),t=o&&d3(o)?d1(o):o,r=e,i=pp(r);for(;i&&o&&t!==r;){let e=pm(i),t=i.getBoundingClientRect(),o=pc(i),a=t.left+(i.clientLeft+parseFloat(o.paddingLeft))*e.x,s=t.top+(i.clientTop+parseFloat(o.paddingTop))*e.y;h*=e.x,d*=e.y,p*=e.x,f*=e.y,h+=a,d+=s,i=pp(r=d1(i))}}return dq({width:p,height:f,x:h,y:d})}function pw(e,t){let r=pu(e).scrollLeft;return t?t.left+r:py(d2(e)).left+r}function pS(e,t){let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-pw(e,r),y:r.top+t.scrollTop}}let px=new Set(["absolute","fixed"]);function pC(e,t,r){let o;if("viewport"===t)o=function(e,t){let r=d1(e),o=d2(e),i=r.visualViewport,a=o.clientWidth,s=o.clientHeight,c=0,u=0;if(i){a=i.width,s=i.height;let e=pa();(!e||e&&"fixed"===t)&&(c=i.offsetLeft,u=i.offsetTop)}let h=pw(o);if(h<=0){let e=o.ownerDocument,t=e.body,r=getComputedStyle(t),i="CSS1Compat"===e.compatMode&&parseFloat(r.marginLeft)+parseFloat(r.marginRight)||0,s=Math.abs(o.clientWidth-t.clientWidth-i);s<=25&&(a-=s)}else h<=25&&(a+=h);return{width:a,height:s,x:c,y:u}}(e,r);else if("document"===t)o=function(e){let t=d2(e),r=pu(e),o=e.ownerDocument.body,i=dT(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=dT(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),s=-r.scrollLeft+pw(e),c=-r.scrollTop;return"rtl"===pc(o).direction&&(s+=dT(t.clientWidth,o.clientWidth)-i),{width:i,height:a,x:s,y:c}}(d2(e));else if(d3(t))o=function(e,t){let r=py(e,!0,"fixed"===t),o=r.top+e.clientTop,i=r.left+e.clientLeft,a=d6(e)?pm(e):dO(1),s=e.clientWidth*a.x,c=e.clientHeight*a.y;return{width:s,height:c,x:i*a.x,y:o*a.y}}(t,r);else{let r=pv(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return dq(o)}function pk(e){return"static"===pc(e).position}function p_(e,t){if(!d6(e)||"fixed"===pc(e).position)return null;if(t)return t(e);let r=e.offsetParent;return d2(e)===r&&(r=r.ownerDocument.body),r}function pR(e,t){var r;let o=d1(e);if(pt(e))return o;if(!d6(e)){let t=ph(e);for(;t&&!pl(t);){if(d3(t)&&!pk(t))return t;t=ph(t)}return o}let i=p_(e,t);for(;i&&(r=i,d9.has(d0(r)))&&pk(i);)i=p_(i,t);return i&&pl(i)&&pk(i)&&!pi(i)?o:i||function(e){let t=ph(e);for(;d6(t)&&!pl(t);){if(pi(t))return t;if(pt(t))break;t=ph(t)}return null}(e)||o}let pT=async function(e){let t=this.getOffsetParent||pR,r=this.getDimensions,o=await r(e.floating);return{reference:function(e,t,r){let o=d6(t),i=d2(t),a="fixed"===r,s=py(e,!0,a,t),c={scrollLeft:0,scrollTop:0},u=dO(0);if(o||!o&&!a)if(("body"!==d0(t)||d7(i))&&(c=pu(t)),o){let e=py(t,!0,a,t);u.x=e.x+t.clientLeft,u.y=e.y+t.clientTop}else i&&(u.x=pw(i));a&&!o&&i&&(u.x=pw(i));let h=!i||o||a?dO(0):pS(i,c);return{x:s.left+c.scrollLeft-u.x-h.x,y:s.top+c.scrollTop-u.y-h.y,width:s.width,height:s.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},pE={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:o,strategy:i}=e,a="fixed"===i,s=d2(o),c=!!t&&pt(t.floating);if(o===s||c&&a)return r;let u={scrollLeft:0,scrollTop:0},h=dO(1),d=dO(0),p=d6(o);if((p||!p&&!a)&&(("body"!==d0(o)||d7(s))&&(u=pu(o)),d6(o))){let e=py(o);h=pm(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}let f=!s||p||a?dO(0):pS(s,u);return{width:r.width*h.x,height:r.height*h.y,x:r.x*h.x-u.scrollLeft*h.x+d.x+f.x,y:r.y*h.y-u.scrollTop*h.y+d.y+f.y}},getDocumentElement:d2,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:i}=e,a=[..."clippingAncestors"===r?pt(t)?[]:function(e,t){let r=t.get(e);if(r)return r;let o=pd(e,[],!1).filter(e=>d3(e)&&"body"!==d0(e)),i=null,a="fixed"===pc(e).position,s=a?ph(e):e;for(;d3(s)&&!pl(s);){let t=pc(s),r=pi(s);r||"fixed"!==t.position||(i=null),(a?!r&&!i:!r&&"static"===t.position&&!!i&&px.has(i.position)||d7(s)&&!r&&function e(t,r){let o=ph(t);return!(o===r||!d3(o)||pl(o))&&("fixed"===pc(o).position||e(o,r))}(e,s))?o=o.filter(e=>e!==s):i=t,s=ph(s)}return t.set(e,o),o}(t,this._c):[].concat(r),o],s=a[0],c=a.reduce((e,r)=>{let o=pC(t,r,i);return e.top=dT(o.top,e.top),e.right=dR(o.right,e.right),e.bottom=dR(o.bottom,e.bottom),e.left=dT(o.left,e.left),e},pC(t,s,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:pR,getElementRects:pT,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=pf(e);return{width:t,height:r}},getScale:pm,isElement:d3,isRTL:function(e){return"rtl"===pc(e).direction}};function pM(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let pO=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var r,o;let i,a,{placement:s,rects:c,platform:u,elements:h}=t,{apply:d=()=>{},...p}=dz(e,t),f=await dY(t,p),g=dP(s),m=dD(s),b="y"===dH(s),{width:v,height:w}=c.floating;"top"===g||"bottom"===g?(i=g,a=m===(await (null==u.isRTL?void 0:u.isRTL(h.floating))?"start":"end")?"left":"right"):(a=g,i="end"===m?"top":"bottom");let S=w-f.top-f.bottom,x=v-f.left-f.right,C=dR(w-f[i],S),_=dR(v-f[a],x),T=!t.middlewareData.shift,E=C,O=_;if(null!=(r=t.middlewareData.shift)&&r.enabled.x&&(O=x),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(E=S),T&&!m){let e=dT(f.left,0),t=dT(f.right,0),r=dT(f.top,0),o=dT(f.bottom,0);b?O=v-2*(0!==e||0!==t?e+t:dT(f.left,f.right)):E=w-2*(0!==r||0!==o?r+o:dT(f.top,f.bottom))}await d({...t,availableWidth:O,availableHeight:E});let $=await u.getDimensions(h.floating);return v!==$.width||w!==$.height?{reset:{rects:!0}}:{}}}},p$=r9(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return eC}});function pI(e){var t=e;for(let e=t;e;e=pz(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=pz(t);e;e=pz(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||pi(t)||"BODY"===e.tagName))return e}return null}function pz(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var pP=class extends d_{constructor(){super(...arguments),this.localize=new du(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),o=0,i=0,a=0,s=0,c=0,u=0,h=0,d=0;r?e.top<t.top?(o=e.left,i=e.bottom,a=e.right,s=e.bottom,c=t.left,u=t.top,h=t.right,d=t.top):(o=t.left,i=t.bottom,a=t.right,s=t.bottom,c=e.left,u=e.top,h=e.right,d=e.top):e.left<t.left?(o=e.right,i=e.top,a=t.left,s=t.top,c=e.right,u=e.bottom,h=t.left,d=t.bottom):(o=t.right,i=t.top,a=e.left,s=e.top,c=t.right,u=t.bottom,h=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,r,o){let i;void 0===o&&(o={});let{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:u="function"==typeof IntersectionObserver,animationFrame:h=!1}=o,d=pg(e),p=a||s?[...d?pd(d):[],...pd(t)]:[];p.forEach(e=>{a&&e.addEventListener("scroll",r,{passive:!0}),s&&e.addEventListener("resize",r)});let f=d&&u?function(e,t){let r,o=null,i=d2(e);function a(){var e;clearTimeout(r),null==(e=o)||e.disconnect(),o=null}return!function s(c,u){void 0===c&&(c=!1),void 0===u&&(u=1),a();let h=e.getBoundingClientRect(),{left:d,top:p,width:f,height:g}=h;if(c||t(),!f||!g)return;let m=dM(p),b=dM(i.clientWidth-(d+f)),v={rootMargin:-m+"px "+-b+"px "+-dM(i.clientHeight-(p+g))+"px "+-dM(d)+"px",threshold:dT(0,dR(1,u))||1},w=!0;function S(t){let o=t[0].intersectionRatio;if(o!==u){if(!w)return s();o?s(!1,o):r=setTimeout(()=>{s(!1,1e-7)},1e3)}1!==o||pM(h,e.getBoundingClientRect())||s(),w=!1}try{o=new IntersectionObserver(S,{...v,root:i.ownerDocument})}catch{o=new IntersectionObserver(S,v)}o.observe(e)}(!0),a}(d,r):null,g=-1,m=null;c&&(m=new ResizeObserver(e=>{let[o]=e;o&&o.target===d&&m&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=m)||e.observe(t)})),r()}),d&&!h&&m.observe(d),m.observe(t));let b=h?py(e):null;return h&&function t(){let o=py(e);b&&!pM(b,o)&&r(),b=o,i=requestAnimationFrame(t)}(),r(),()=>{var e;p.forEach(e=>{a&&e.removeEventListener("scroll",r),s&&e.removeEventListener("resize",r)}),null==f||f(),null==(e=m)||e.disconnect(),m=null,h&&cancelAnimationFrame(i)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,r;let o;if(!this.active||!this.anchorEl)return;let i=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var r,o;let{x:i,y:a,placement:s,middlewareData:c}=t,u=await dX(t,e);return s===(null==(r=c.offset)?void 0:r.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:i+u.x,y:a+u.y,data:{...u,placement:s}}}}];this.sync?i.push(pO({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,r="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=r?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&i.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var r,o,i,a,s;let{placement:c,middlewareData:u,rects:h,initialPlacement:d,platform:p,elements:f}=e,{mainAxis:g=!0,crossAxis:m=!0,fallbackPlacements:b,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:S=!0,...x}=dz(t,e);if(null!=(r=u.arrow)&&r.alignmentOffset)return{};let C=dP(c),_=dH(d),T=dP(d)===d,E=await (null==p.isRTL?void 0:p.isRTL(f.floating)),O=b||(T||!S?[dU(d)]:function(e){let t=dU(e);return[dB(e),t,dB(t)]}(d)),$="none"!==w;!b&&$&&O.push(...function(e,t,r,o){let i=dD(e),a=function(e,t,r){switch(e){case"top":case"bottom":if(r)return t?dF:dW;return t?dW:dF;case"left":case"right":return t?dG:dj;default:return[]}}(dP(e),"start"===r,o);return i&&(a=a.map(e=>e+"-"+i),t&&(a=a.concat(a.map(dB)))),a}(d,S,w,E));let P=[d,...O],D=await dY(e,x),A=[],B=(null==(o=u.flip)?void 0:o.overflows)||[];if(g&&A.push(D[C]),m){let e=function(e,t,r){void 0===r&&(r=!1);let o=dD(e),i=dA(dH(e)),a=dL(i),s="x"===i?o===(r?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[a]>t.floating[a]&&(s=dU(s)),[s,dU(s)]}(c,h,E);A.push(D[e[0]],D[e[1]])}if(B=[...B,{placement:c,overflows:A}],!A.every(e=>e<=0)){let e=((null==(i=u.flip)?void 0:i.index)||0)+1,t=P[e];if(t&&("alignment"!==m||_===dH(t)||B.every(e=>dH(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:B},reset:{placement:t}};let r=null==(a=B.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!r)switch(v){case"bestFit":{let e=null==(s=B.filter(e=>{if($){let t=dH(e.placement);return t===_||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:s[0];e&&(r=e);break}case"initialPlacement":r=d}if(c!==r)return{reset:{placement:r}}}return{}}}),this.shift&&i.push({name:"shift",options:r={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:o,placement:i}=e,{mainAxis:a=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...u}=dz(r,e),h={x:t,y:o},d=await dY(e,u),p=dH(dP(i)),f=dA(p),g=h[f],m=h[p];if(a){let e="y"===f?"top":"left",t="y"===f?"bottom":"right",r=g+d[e],o=g-d[t];g=dT(r,dR(g,o))}if(s){let e="y"===p?"top":"left",t="y"===p?"bottom":"right",r=m+d[e],o=m-d[t];m=dT(r,dR(m,o))}let b=c.fn({...e,[f]:g,[p]:m});return{...b,data:{x:b.x-t,y:b.y-o,enabled:{[f]:a,[p]:s}}}}}),this.autoSize?i.push(pO({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&i.push({name:"arrow",options:o={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:r,placement:i,rects:a,platform:s,elements:c,middlewareData:u}=e,{element:h,padding:d=0}=dz(o,e)||{};if(null==h)return{};let p=dV(d),f={x:t,y:r},g=dA(dH(i)),m=dL(g),b=await s.getDimensions(h),v="y"===g,w=v?"clientHeight":"clientWidth",S=a.reference[m]+a.reference[g]-f[g]-a.floating[m],x=f[g]-a.reference[g],C=await (null==s.getOffsetParent?void 0:s.getOffsetParent(h)),_=C?C[w]:0;_&&await (null==s.isElement?void 0:s.isElement(C))||(_=c.floating[w]||a.floating[m]);let T=_/2-b[m]/2-1,E=dR(p[v?"top":"left"],T),O=dR(p[v?"bottom":"right"],T),$=_-b[m]-O,P=_/2-b[m]/2+(S/2-x/2),D=dT(E,dR(P,$)),A=!u.arrow&&null!=dD(i)&&P!==D&&a.reference[m]/2-(P<E?E:O)-b[m]/2<0,B=A?P<E?P-E:P-$:0;return{[g]:f[g]+B,data:{[g]:D,centerOffset:P-D-B,...A&&{alignmentOffset:B}},reset:A}}});let a="absolute"===this.strategy?e=>pE.getOffsetParent(e,pI):pE.getOffsetParent;((e,t,r)=>{let o=new Map,i={platform:pE,...r},a={...i.platform,_c:o};return dK(e,t,{...i,platform:a})})(this.anchorEl,this.popup,{placement:this.placement,middleware:i,strategy:this.strategy,platform:dx(dS({},pE),{getOffsetParent:a})}).then(({x:e,y:t,middlewareData:r,placement:o})=>{let i="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=r.arrow.x,t=r.arrow.y,o="",s="",c="",u="";if("start"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",s=i?r:"",u=i?"":r}else if("end"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s=i?"":r,u=i?r:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(u="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(u="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:s,bottom:c,left:u,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ew`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${p$({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${p$({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ew`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};pP.styles=[dh,de],dC([eH(".popup")],pP.prototype,"popup",2),dC([eH(".popup__arrow")],pP.prototype,"arrowEl",2),dC([eA()],pP.prototype,"anchor",2),dC([eA({type:Boolean,reflect:!0})],pP.prototype,"active",2),dC([eA({reflect:!0})],pP.prototype,"placement",2),dC([eA({reflect:!0})],pP.prototype,"strategy",2),dC([eA({type:Number})],pP.prototype,"distance",2),dC([eA({type:Number})],pP.prototype,"skidding",2),dC([eA({type:Boolean})],pP.prototype,"arrow",2),dC([eA({attribute:"arrow-placement"})],pP.prototype,"arrowPlacement",2),dC([eA({attribute:"arrow-padding",type:Number})],pP.prototype,"arrowPadding",2),dC([eA({type:Boolean})],pP.prototype,"flip",2),dC([eA({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],pP.prototype,"flipFallbackPlacements",2),dC([eA({attribute:"flip-fallback-strategy"})],pP.prototype,"flipFallbackStrategy",2),dC([eA({type:Object})],pP.prototype,"flipBoundary",2),dC([eA({attribute:"flip-padding",type:Number})],pP.prototype,"flipPadding",2),dC([eA({type:Boolean})],pP.prototype,"shift",2),dC([eA({type:Object})],pP.prototype,"shiftBoundary",2),dC([eA({attribute:"shift-padding",type:Number})],pP.prototype,"shiftPadding",2),dC([eA({attribute:"auto-size"})],pP.prototype,"autoSize",2),dC([eA()],pP.prototype,"sync",2),dC([eA({type:Object})],pP.prototype,"autoSizeBoundary",2),dC([eA({attribute:"auto-size-padding",type:Number})],pP.prototype,"autoSizePadding",2),dC([eA({attribute:"hover-bridge",type:Boolean})],pP.prototype,"hoverBridge",2),pP.define("sl-popup");var pD=Object.defineProperty,pA=Object.getOwnPropertyDescriptor,pL=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?pA(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&pD(t,r,a),a};let pN=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=rv(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let r=rv(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),r)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of pN.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),pN.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return ew`<sl-popup
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
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return pN.closeOthers(this),this.open=!0,pN.openPopovers.add(this),ry(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,pN.openPopovers.delete(this),ry(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};pN.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},pN.openPopovers=new Set,pN.styles=[h7,O`
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
		`],pL([eH("#popover")],pN.prototype,"body",2),pL([eH("sl-popup")],pN.prototype,"popup",2),pL([eA({reflect:!0})],pN.prototype,"placement",2),pL([eA({type:Object})],pN.prototype,"anchor",2),pL([eA({reflect:!0,type:Boolean})],pN.prototype,"disabled",2),pL([eA({type:Number})],pN.prototype,"distance",2),pL([eA({reflect:!0,type:Boolean})],pN.prototype,"open",2),pL([eA({reflect:!0,type:Boolean})],pN.prototype,"arrow",2),pL([eA({type:Number})],pN.prototype,"skidding",2),pL([eA()],pN.prototype,"trigger",2),pL([eA({type:Boolean})],pN.prototype,"hoist",2),pL([eA({reflect:!0})],pN.prototype,"appearance",2),pL([tn("open",{afterFirstUpdate:!0})],pN.prototype,"handleOpenChange",1),pL([tn(["distance","hoist","placement","skidding"])],pN.prototype,"handleOptionsChange",1),pL([tn("disabled")],pN.prototype,"handleDisabledChange",1),pN=pL([eP("gl-popover")],pN);var pH=new Map,pB=new WeakMap;function pW(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function pF(e,t){pH.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function pG(e,t,r){let o=pB.get(e);if(null==o?void 0:o[t])return pW(o[t],r.dir);let i=pH.get(t);return i?pW(i,r.dir):{keyframes:[],options:{duration:0}}}let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ek,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ek||null==e)return this._t=void 0,this.it=e;if(e===eC)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let pj=r9(unsafe_html_e);var pU=O`
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
`;function pV(e,t){return new Promise(r=>{e.addEventListener(t,function o(i){i.target===e&&(e.removeEventListener(t,o),r())})})}function pq(e,t,r){return new Promise(o=>{if((null==r?void 0:r.duration)===1/0)throw Error("Promise-based animations must be finite.");let i=e.animate(t,dx(dS({},r),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:r.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function pZ(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function pK(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function pY(e,t){let r=dS({waitUntilFirstUpdate:!1},t);return(t,o)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{if(e.has(t)){let i=e.get(t),a=this[t];i!==a&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](i,a)}}),i.call(this,e)}}}var pQ=class extends d_{constructor(){super(),this.localize=new du(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=pZ(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=pZ(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await pK(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:r}=pG(this,"tooltip.show",{dir:this.localize.dir()});await pq(this.popup.popup,t,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await pK(this.body);let{keyframes:e,options:r}=pG(this,"tooltip.hide",{dir:this.localize.dir()});await pq(this.popup.popup,e,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,pV(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,pV(this,"sl-after-hide")}render(){return ew`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${p$({tooltip:!0,"tooltip--open":this.open})}
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
    `}};pQ.styles=[dh,pU],pQ.dependencies={"sl-popup":pP},dC([eH("slot:not([name])")],pQ.prototype,"defaultSlot",2),dC([eH(".tooltip__body")],pQ.prototype,"body",2),dC([eH("sl-popup")],pQ.prototype,"popup",2),dC([eA()],pQ.prototype,"content",2),dC([eA()],pQ.prototype,"placement",2),dC([eA({type:Boolean,reflect:!0})],pQ.prototype,"disabled",2),dC([eA({type:Number})],pQ.prototype,"distance",2),dC([eA({type:Boolean,reflect:!0})],pQ.prototype,"open",2),dC([eA({type:Number})],pQ.prototype,"skidding",2),dC([eA()],pQ.prototype,"trigger",2),dC([eA({type:Boolean})],pQ.prototype,"hoist",2),dC([pY("open",{waitUntilFirstUpdate:!0})],pQ.prototype,"handleOpenChange",1),dC([pY(["content","distance","hoist","placement","skidding"])],pQ.prototype,"handleOptionsChange",1),dC([pY("disabled")],pQ.prototype,"handleDisabledChange",1),pF("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),pF("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),pQ.define("sl-tooltip");var pX=Object.defineProperty,pJ=Object.getOwnPropertyDescriptor,p0=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?pJ(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&pX(t,r,a),a};pF("tooltip.show",null),pF("tooltip.hide",null);let p1=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback?.()}render(){var e;return ew`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??ek}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?pj(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};p1.styles=O`
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
	`,p0([eA()],p1.prototype,"content",2),p0([eA({reflect:!0})],p1.prototype,"placement",2),p0([eA({type:Boolean})],p1.prototype,"disabled",2),p0([eA({type:Number})],p1.prototype,"distance",2),p0([eA({type:Boolean})],p1.prototype,"hoist",2),p1=p0([eP("gl-tooltip")],p1);let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let p2=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!p2(e))??eC}update(e,t){let r=this._$Cbt,o=r.length;this._$Cbt=t;let i=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let s=t[e];if(!p2(s))return this._$Cwt=e,s;e<o&&s===r[e]||(this._$Cwt=0x3fffffff,o=0,Promise.resolve(s).then(async e=>{for(;a.get();)await a.get();let t=i.deref();if(void 0!==t){let r=t._$Cbt.indexOf(s);r>-1&&r<t._$Cwt&&(t._$Cwt=r,t.setValue(e))}}))}return eC}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let p5=r9(until_c);var p3=Object.defineProperty,p6=Object.getOwnPropertyDescriptor,p4=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?p6(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&p3(t,r,a),a};let p8=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return ew`${p5(this.promoPromise?.then(e=>this.renderPromo(e)),ek)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"icon":return ew`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(t.info)return this.hasPromo=!0,ew`<p class="promo" part="text">${pj(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,ew`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${t.link.title??ek}"
						>${pj(t.link.html)}</a
					>`}return this.hasPromo=!1,ek}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),h2(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};p8.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},p8.styles=[O`
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
				${h3}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],p4([eH('a,button,[tabindex="0"]')],p8.prototype,"_focusable",2),p4([eA({type:Object})],p8.prototype,"promoPromise",2),p4([eA({type:Object})],p8.prototype,"source",2),p4([eA({reflect:!0,type:String})],p8.prototype,"type",2),p4([eA({type:Boolean,reflect:!0,attribute:"has-promo"})],p8.prototype,"hasPromo",1),p8=p4([eP("gl-promo")],p8);var p7=Object.defineProperty,p9=Object.getOwnPropertyDescriptor,fe=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?p9(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&p7(t,r,a),a};let ft=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){var e,t;return null==this.subscription?0:(e=this.subscription,t=e.plan.effective.expiresOn,(null!=t?function(e,t,r,o){let i=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),a=o??Math.floor;switch(r){case"days":return a(i/864e5);case"hours":return a(i/36e5);case"minutes":return a(i/6e4);case"seconds":return a(i/1e3);default:return i}}(Date.now(),new Date(t),"days",Math.round):void 0)??0)}get state(){return this.subscription?.state}render(){return ew`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let e=this.preview?"Preview":"Pro";if(null!=this.subscription)if(this.state===hJ.VerificationRequired)return ew`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else{var t;if(h1(this.subscription)||this.cloud&&null!=this.subscription.account)return ew`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.subscription).state?t.state===hJ.Trial:t.plan.actual.id!==t.plan.effective.id)return ew`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return e}renderPopoverHeader(){let e=ew`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===hJ.Paid?ew`<div class="popup-header">${e}</div>`:this.cloud?this.preview?ew`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:ew`<div class="popup-header">
				${e}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?ew`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:ew`<div class="popup-header">
			${e}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){let e;if(null==this.subscription)return ek;switch(this.state){case hJ.Paid:var t;e=ew`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${h2("gitlens.showAccountView")}"
							>${t=this.subscription?.plan.actual.id??"pro",`GitLens ${function(e){switch(e){case"pro":return"Pro";case"advanced":return"Advanced";case"teams":return"Business";case"enterprise":return"Enterprise";default:return"Community"}}(t)}`}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case hJ.VerificationRequired:e=ew`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${h2("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${h2("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case hJ.Trial:{let t=this.daysRemaining;e=ew`<p>
						You have
						<strong>${t<1?"<1 day":tb("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case hJ.TrialExpired:e=ew`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(ew`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case hJ.TrialReactivationEligible:e=ew`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${tb("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${h2("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${tb("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:e=ew`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return ew`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return ew`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${h2("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${h2("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return ew`<div class="actions">
			${e??ek}
			<gl-button
				density="tight"
				href="${h2("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return ew`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"badge")}
			.source=${this.source}
		></gl-promo>`}};ft.styles=[h4,h8,O`
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
				${E(h3)}
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
		`],fe([eA({type:Boolean})],ft.prototype,"cloud",2),fe([eA({reflect:!0})],ft.prototype,"placement",2),fe([eA({type:Boolean})],ft.prototype,"preview",2),fe([e1({context:"promos"})],ft.prototype,"promos",2),fe([eA({type:Object})],ft.prototype,"source",2),fe([eA({attribute:!1})],ft.prototype,"subscription",2),ft=fe([eP("gl-feature-badge")],ft);var fr=Object.defineProperty,fo=Object.getOwnPropertyDescriptor,fn=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?fo(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&fr(t,r,a),a};let fi=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ew`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??ek}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ew`<gl-tooltip placement=${this.tooltipPlacement??ek}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ew`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??ek}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ew`<button
			class="control"
			role=${this.role??ek}
			aria-checked=${this.ariaChecked??ek}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};fi.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},fi.styles=[h4,O`
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
				${h6}
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
		`],fn([eH(".control")],fi.prototype,"control",2),fn([eA({reflect:!0})],fi.prototype,"appearance",2),fn([eA({type:Boolean,reflect:!0})],fi.prototype,"disabled",2),fn([eA({reflect:!0})],fi.prototype,"density",2),fn([eA({type:Boolean,reflect:!0})],fi.prototype,"full",2),fn([eA()],fi.prototype,"href",2),fn([eA()],fi.prototype,"tooltip",2),fn([eA()],fi.prototype,"tooltipPlacement",2),fn([eA({type:Boolean,reflect:!0})],fi.prototype,"truncate",2),fi=fn([eP("gl-button")],fi);var fa=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,fl=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?fs(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&fa(t,r,a),a};let fc=class extends lit_element_i{firstUpdated(){"alert"===this.appearance&&queueMicrotask(()=>this.button.focus())}render(){let e=null==this.state;if(this.hidden=e,e)return;let t=(this.appearance??"alert")==="alert"?"alert":void 0;switch(this.state){case hJ.VerificationRequired:return ew`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${t??ek}"
							href="${h2("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${t??ek}"
							href="${h2("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case hJ.Community:if(this.featurePreview&&"expired"!==function(e){let t=e?.usages;if(!t?.length)return"eligible";let r=(new Date(t[t.length-1].expiresOn).getTime()-new Date().getTime())/36e5;return t.length<=3&&r>0&&r<24?"active":"expired"}(this.featurePreview))return ew`${this.renderFeaturePreview(this.featurePreview)}`;return ew`<slot name="feature"></slot>
					<p>
						Use on privately-hosted repos requires
						<a href="${eU.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ek}"
							href="${h2("gitlens.plus.signUp",this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${h2("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${tb("day",14)} of
						<a href="${eU.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case hJ.TrialExpired:return ew`<slot name="feature"></slot>
					<p>Use on privately-hosted repos requires <a href="${eU.communityVsPro}">GitLens Pro</a>.</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ek}"
							href="${h2("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-gate"}})}"
							>Upgrade to Pro</gl-button
						>
					</p>
					<p>${this.renderPromo()}</p>`;case hJ.TrialReactivationEligible:return ew`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ek}"
							href="${h2("gitlens.plus.reactivateProTrial",this.source)}"
							>Continue</gl-button
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${tb("day",14)}!
					</p> `}}renderFeaturePreview(e){let t=(this.appearance??"alert")==="alert"?"alert":void 0,r=e.usages.length;return 0===r?ew`<slot name="feature"></slot>
				<gl-button appearance="${t??ek}" href="${this.featurePreviewCommandLink??ek}"
					>Continue</gl-button
				>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
					repos, or
					<a href="${h2("gitlens.plus.login",this.source)}" title="Sign In">sign in</a
					>.<br />
					${"alert"!==t?ew`<br />`:""} For full access to all GitLens Pro features,
					<a href="${h2("gitlens.plus.signUp",this.source)}"
						>start your free ${14}-day Pro trial</a
					>
					— no credit card required.
				</p> `:ew`
			${this.renderFeaturePreviewStep(e,r)}
			<p class="actions-row">
				<gl-button
					class="inline"
					appearance="${t??ek}"
					href="${this.featurePreviewCommandLink??ek}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${h2("gitlens.plus.login",this.source)}" title="Sign In"
						>sign in</a
					></span
				>
			</p>
			<p>
				After continuing, you will have ${tb("day",3-r,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately-hosted
				repos.<br />
				${"alert"!==t?ew`<br />`:""} For full access to all GitLens Pro features,
				<a href="${h2("gitlens.plus.signUp",this.source)}"
					>start your free ${14}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"!==e.feature)return ew`<slot name="feature"></slot>`;switch(t){case 1:return ew`<p>Try Commit Search</p>
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
							</p> `;case 2:return ew`
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
						`;default:return ew`<slot name="feature"></slot>`}}renderPromo(){return ew`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"gate")}
			.source=${this.source}
		></gl-promo>`}};fc.styles=[hQ,O`
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
		`],fl([eH("gl-button")],fc.prototype,"button",2),fl([eA({type:Object})],fc.prototype,"featurePreview",2),fl([eA({type:String})],fc.prototype,"featurePreviewCommandLink",2),fl([eA({type:String})],fc.prototype,"appearance",2),fl([eA()],fc.prototype,"featureWithArticleIfNeeded",2),fl([e1({context:"promos"})],fc.prototype,"promos",2),fl([eA({type:Object})],fc.prototype,"source",2),fl([eA({attribute:!1,type:Number})],fc.prototype,"state",2),fl([eA({type:String})],fc.prototype,"webroot",2),fc=fl([eP("gl-feature-gate-plus-state")],fc);var fu=Object.defineProperty,fh=Object.getOwnPropertyDescriptor,fd=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?fh(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&fu(t,r,a),a};let fp=class extends lit_element_i{render(){var e;if(this.hidden||null!=(e=this.state)&&(e===hJ.Trial||e===hJ.Paid))return;let t=this.appearance??(document.body.getAttribute("data-placement")??"editor")==="editor"?"alert":"welcome";return ew`
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
		`}};fp.styles=[hQ,O`
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
		`],fd([eA({reflect:!0})],fp.prototype,"appearance",2),fd([eA({type:Object})],fp.prototype,"featurePreview",2),fd([eA({type:String})],fp.prototype,"featurePreviewCommandLink",2),fd([eA()],fp.prototype,"featureWithArticleIfNeeded",2),fd([eA({type:Object})],fp.prototype,"source",2),fd([eA({attribute:!1,type:Number})],fp.prototype,"state",2),fd([eA({type:String})],fp.prototype,"webroot",2),fp=fd([eP("gl-feature-gate")],fp);var ff=Object.defineProperty,fg=Object.getOwnPropertyDescriptor,fm=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?fg(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&ff(t,r,a),a};let fb=class extends r7(GlElement){render(){return ew`<gl-feature-gate
			.featurePreview=${this.graphState.featurePreview}
			featurePreviewCommandLink=${(this.graphState.featurePreview?hY("gitlens.plus.continueFeaturePreview",this.graphState.webviewId,this.graphState.webviewInstanceId,{feature:this.graphState.featurePreview.feature}):void 0)??ek}
			appearance="alert"
			featureWithArticleIfNeeded="the Commit Graph"
			?hidden=${!1!==this.graphState.allowed}
			.source=${{source:"graph",detail:"gate"}}
			.state=${this.graphState.subscription?.state}
			.webroot=${this.graphState.webroot}
		>
			<p slot="feature">
				<a href="https://help.gitkraken.com/gitlens/gitlens-features/#commit-graph-pro">Commit Graph</a>
				<gl-feature-badge
					.source=${{source:"graph",detail:"badge"}}
					subscription="{subscription}"
				></gl-feature-badge>
				&mdash; easily visualize your repository and keep track of all work in progress. Use the rich commit
				search to find a specific commit, message, author, a changed file or files, or even a specific code
				change.
			</p>
		</gl-feature-gate>`}};fb.styles=[hQ,O`
			gl-feature-gate gl-feature-badge {
				vertical-align: super;
				margin-left: 0.4rem;
				margin-right: 0.4rem;
			}
		`],fm([e1({context:"graph-state-context",subscribe:!0})],fb.prototype,"graphState",2),fb=fm([eP("gl-graph-gate")],fb);let fv=e=>null!=e?._$litType$?.h?e._$litType$.h:e.strings,fy=r9(class extends directive_i{constructor(e){super(e),this.et=new WeakMap}render(e){return[e]}update(e,[t]){let r=ot(this.it)?fv(this.it):null,o=ot(t)?fv(t):null;if(null!==r&&(null===o||r!==o)){let t=e._$AH.pop(),o=this.et.get(r);void 0===o&&((o=e$(ek,document.createDocumentFragment())).setConnected(!1),this.et.set(r,o)),oa(o,[t]),oo(o,void 0,t)}if(null!==o){if(null===r||r!==o){let t=this.et.get(o);if(void 0!==t){let r=t._$AH.pop();e._$AR(),oo(e,void 0,r),oa(e,[r])}}this.it=t}else this.it=void 0;return this.render(t)}}),fw=(e,t,r)=>{let o=new Map;for(let i=t;i<=r;i++)o.set(e[i],i);return o},fS=r9(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let o;void 0===r?r=t:void 0!==t&&(o=t);let i=[],a=[],s=0;for(let t of e)i[s]=o?o(t,s):s,a[s]=r(t,s),s++;return{values:a,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,o]){let i=e._$AH,{values:a,keys:s}=this.dt(t,r,o);if(!Array.isArray(i))return this.ut=s,a;let c=this.ut??=[],u=[],h,d,p=0,f=i.length-1,g=0,m=a.length-1;for(;p<=f&&g<=m;)if(null===i[p])p++;else if(null===i[f])f--;else if(c[p]===s[g])u[g]=on(i[p],a[g]),p++,g++;else if(c[f]===s[m])u[m]=on(i[f],a[m]),f--,m--;else if(c[p]===s[m])u[m]=on(i[p],a[m]),oo(e,u[m+1],i[p]),p++,m--;else if(c[f]===s[g])u[g]=on(i[f],a[g]),oo(e,i[p],i[f]),f--,g++;else if(void 0===h&&(h=fw(s,g,m),d=fw(c,p,f)),h.has(c[p]))if(h.has(c[f])){let t=d.get(s[g]),r=void 0!==t?i[t]:null;if(null===r){let t=oo(e,i[p]);on(t,a[g]),u[g]=t}else u[g]=on(r,a[g]),oo(e,i[p],r),i[t]=null;g++}else os(i[f]),f--;else os(i[p]),p++;for(;g<=m;){let t=oo(e,u[m+1]);on(t,a[g]),u[g++]=t}for(;p<=f;){let e=i[p++];null!==e&&os(e)}return this.ut=s,oa(e,u),eC}});function fx(e,t){return(r,o,i)=>{if("function"!=typeof i.value)throw Error(`@debounce can only be used on methods, not on ${typeof i.value}`);let a=i.value;return i.value=function(...r){let i=`__debounced_${o}`;return this[i]??=e3((...e)=>a.apply(this,e),e,t),this[i](...r)},i}}let fC=O`
	a {
		text-decoration: none;
	}

	a:focus {
		${h3}
	}

	a:hover {
		text-decoration: underline;
	}
`,fk=O`
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

	.action-button code-icon {
		line-height: 2.2rem;
		vertical-align: bottom;
	}
	.action-button code-icon[icon='graph-line'] {
		transform: translateY(1px);
	}

	.is-ahead .action-button__pill {
		background-color: var(--branch-status-ahead-pill-background);
	}
	.is-behind .action-button__pill {
		background-color: var(--branch-status-behind-pill-background);
	}
	.is-ahead.is-behind .action-button__pill {
		background-color: var(--branch-status-both-pill-background);
	}

	.action-button__more,
	.action-button__more.codicon[class*='codicon-'] {
		font-size: 1rem;
		margin-right: -0.25rem;
	}

	code-icon.action-button__more::before {
		margin-left: -0.25rem;
	}

	.action-button__indicator {
		margin-left: -0.2rem;
		--gl-indicator-color: green;
		--gl-indicator-size: 0.4rem;
	}

	.action-button__small {
		font-size: smaller;
		opacity: 0.6;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.action-button.is-ahead {
		background-color: var(--branch-status-ahead-background);
	}
	.action-button.is-ahead:hover {
		background-color: var(--branch-status-ahead-hover-background);
	}

	.action-button.is-behind {
		background-color: var(--branch-status-behind-background);
	}
	.action-button.is-behind:hover {
		background-color: var(--branch-status-behind-hover-background);
	}

	.action-button.is-ahead.is-behind {
		background-color: var(--branch-status-both-background);
	}
	.action-button.is-ahead.is-behind:hover {
		background-color: var(--branch-status-both-hover-background);
	}
`,f_=O`
	.jump-to-ref {
		--button-foreground: var(--color-foreground);
	}

	.merge-conflict-warning {
		flex: 0 0 100%;
		min-width: 0;
	}
`,fR=O`
	.progress-container {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 5;
		height: 2px;
		width: 100%;
		overflow: hidden;
	}
	.progress-container .progress-bar {
		background-color: var(--vscode-progressBar-background);
		display: none;
		position: absolute;
		left: 0;
		width: 2%;
		height: 2px;
	}

	.progress-container.active .progress-bar {
		display: inherit;
	}

	.progress-container.discrete .progress-bar {
		left: 0;
		transition: width 0.1s linear;
	}

	.progress-container.discrete.done .progress-bar {
		width: 100%;
	}

	.progress-container.infinite .progress-bar {
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
`,fT=O`
	.titlebar {
		background: var(--titlebar-bg);
		color: var(--titlebar-fg);
		padding: 0.6rem 0.8rem;
		font-size: 1.3rem;
		flex-wrap: wrap;
	}
	.titlebar,
	.titlebar__row,
	.titlebar__group {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
	}

	.titlebar > *,
	.titlebar__row > *,
	.titlebar__group > * {
		margin: 0;
	}

	.titlebar,
	.titlebar__row {
		justify-content: space-between;
	}

	.titlebar__row {
		flex: 0 0 100%;
	}
	.titlebar__row--wrap {
		display: grid;
		grid-auto-flow: column;
		justify-content: start;
		grid-template-columns: 1fr min-content;
	}

	.titlebar__group {
		flex: auto 1 1;
	}

	.titlebar__row--wrap .titlebar__group {
		white-space: nowrap;
	}
	.titlebar__row--wrap .titlebar__group:nth-child(odd) {
		min-width: 0;
	}

	.titlebar__debugging > * {
		display: inline-block;
	}

	.titlebar gl-feature-badge {
		color: var(--color-foreground);
	}
`,fE=O`
	.popover::part(body) {
		padding: 0;
		font-size: var(--vscode-font-size);
		background-color: var(--vscode-menu-background);
	}

	.titlebar__group gl-repo-button-group,
	.titlebar__group gl-ref-button {
		font-size: 1.2rem;
	}

	.shrink {
		max-width: fit-content;
		transition: all 0.2s;
	}
	.shrink.hidden {
		max-width: 0;
		overflow: hidden;
	}
	.titlebar__group .shrink.hidden:not(:first-child) {
		// compensate the parent gap
		margin-left: -0.5rem;
	}

	.branch-menu {
		display: flex;
		gap: 0.5em;
		align-items: center;
	}

	.branch-menu__avatar {
		width: 1.4rem;
		aspect-ratio: 1;
		vertical-align: text-bottom;
	}

	.action-divider {
		display: inline-block;
		width: 0.1rem;
		height: 2.2rem;
		vertical-align: middle;
		background-color: var(--titlebar-fg);
		opacity: 0.4;
		margin: {
			// left: 0.2rem;
			right: 0.2rem;
		}
	}

	.button-group {
		display: flex;
		flex-direction: row;
		align-items: stretch;
	}
	.button-group:hover,
	.button-group:focus-within {
		background-color: var(--color-graph-actionbar-selectedBackground);
		border-radius: 3px;
	}

	.button-group > *:not(:first-child),
	.button-group > *:not(:first-child) .action-button {
		display: flex;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.button-group > *:not(:first-child) .action-button {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		height: 100%;
	}

	.button-group:hover > *:not(:last-child),
	.button-group:active > *:not(:last-child),
	.button-group:focus-within > *:not(:last-child),
	.button-group:hover > *:not(:last-child) .action-button,
	.button-group:active > *:not(:last-child) .action-button,
	.button-group:focus-within > *:not(:last-child) .action-button {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	.minimap-marker-swatch {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 2px;
		transform: scale(1.6);
		margin-left: 0.3rem;
		margin-right: 1rem;
	}

	.minimap-marker-swatch[data-marker='localBranches'] {
		background-color: var(--color-graph-minimap-marker-local-branches);
	}

	.minimap-marker-swatch[data-marker='pullRequests'] {
		background-color: var(--color-graph-minimap-marker-pull-requests);
	}

	.minimap-marker-swatch[data-marker='remoteBranches'] {
		background-color: var(--color-graph-minimap-marker-remote-branches);
	}

	.minimap-marker-swatch[data-marker='stashes'] {
		background-color: var(--color-graph-minimap-marker-stashes);
	}

	.minimap-marker-swatch[data-marker='tags'] {
		background-color: var(--color-graph-minimap-marker-tags);
	}

	gl-search-box::part(search) {
		--gl-search-input-background: var(--color-graph-actionbar-background);
		--gl-search-input-border: var(--sl-input-border-color);
	}

	sl-option::part(base) {
		padding: 0.2rem 0.4rem;
	}

	sl-option[aria-selected='true']::part(base),
	sl-option:not([aria-selected='true']):hover::part(base),
	sl-option:not([aria-selected='true']):focus::part(base) {
		background-color: var(--vscode-list-activeSelectionBackground);
		color: var(--vscode-list-activeSelectionForeground);
	}

	sl-option::part(checked-icon) {
		display: none;
	}

	sl-select::part(listbox) {
		padding-block: 0.2rem 0;
		width: max-content;
	}

	sl-select::part(combobox) {
		--sl-input-background-color: var(--color-graph-actionbar-background);
		--sl-input-color: var(--color-foreground);
		--sl-input-color-hover: var(--color-foreground);
		padding: 0 0.75rem;
		color: var(--color-foreground);
		border-radius: var(--sl-border-radius-small);
	}

	sl-select::part(display-input) {
		field-sizing: content;
	}

	sl-select::part(expand-icon) {
		margin-inline-start: var(--sl-spacing-x-small);
	}

	sl-select[open]::part(combobox) {
		background-color: var(--color-graph-actionbar-background);
	}
	sl-select:hover::part(combobox),
	sl-select:focus::part(combobox) {
		background-color: var(--color-graph-actionbar-selectedBackground);
	}
`;var fM=O`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,fO="",f$={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},fI=[{name:"default",resolver:e=>(function(e=""){if(!fO){let e=[...document.getElementsByTagName("script")],t=e.find(e=>e.hasAttribute("data-shoelace"));if(t)fO=t.getAttribute("data-shoelace");else{let t=e.find(e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)),r="";t&&(r=t.getAttribute("src")),fO=r.split("/").slice(0,-1).join("/")}}return fO.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")})(`assets/icons/${e}.svg`)},{name:"system",resolver:e=>e in f$?`data:image/svg+xml,${encodeURIComponent(f$[e])}`:""}],fz=[];function fP(e){return fI.find(t=>t.name===e)}var fD=O`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,fA=Symbol(),fL=Symbol(),fN=new Map,fH=class extends d_{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(null==t?void 0:t.spriteSheet)return this.svg=ew`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(!(o=await fetch(e,{mode:"cors"})).ok)return 410===o.status?fA:fL}catch(e){return fL}try{let e=document.createElement("div");e.innerHTML=await o.text();let t=e.firstElementChild;if((null==(r=null==t?void 0:t.tagName)?void 0:r.toLowerCase())!=="svg")return fA;b||(b=new DOMParser);let i=b.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");if(!i)return fA;return i.part.add("svg"),document.adoptNode(i)}catch(e){return fA}}connectedCallback(){super.connectedCallback(),fz.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,fz=fz.filter(t=>t!==e)}getIconSource(){let e=fP(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;let{url:t,fromLibrary:r}=this.getIconSource(),o=r?fP(this.library):void 0;if(!t){this.svg=null;return}let i=fN.get(t);if(i||(i=this.resolveIcon(t,o),fN.set(t,i)),!this.initialRender)return;let a=await i;if(a===fL&&fN.delete(t),t===this.getIconSource().url){if(ot(a)){if(this.svg=a,o){await this.updateComplete;let e=this.shadowRoot.querySelector("[part='svg']");"function"==typeof o.mutator&&e&&o.mutator(e)}return}switch(a){case fL:case fA:this.svg=null,this.emit("sl-error");break;default:this.svg=a.cloneNode(!0),null==(e=null==o?void 0:o.mutator)||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};fH.styles=[dh,fD],dC([eL()],fH.prototype,"svg",2),dC([eA({reflect:!0})],fH.prototype,"name",2),dC([eA()],fH.prototype,"src",2),dC([eA()],fH.prototype,"label",2),dC([eA({reflect:!0})],fH.prototype,"library",2),dC([pY("label")],fH.prototype,"handleLabelChange",1),dC([pY(["name","src","library"])],fH.prototype,"setIcon",1);var fB=class extends d_{constructor(){super(...arguments),this.localize=new du(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{let e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(this.value=this.value.replace(/ /g,"_"))}getTextLabel(){let e=this.childNodes,t="";return[...e].forEach(e=>{e.nodeType!==Node.ELEMENT_NODE||e.hasAttribute("slot")||(t+=e.textContent),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return ew`
      <div
        part="base"
        class=${p$({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};fB.styles=[dh,fM],fB.dependencies={"sl-icon":fH},dC([eH(".option__label")],fB.prototype,"defaultSlot",2),dC([eL()],fB.prototype,"current",2),dC([eL()],fB.prototype,"selected",2),dC([eL()],fB.prototype,"hasHover",2),dC([eA({reflect:!0})],fB.prototype,"value",2),dC([eA({type:Boolean,reflect:!0})],fB.prototype,"disabled",2),dC([pY("disabled")],fB.prototype,"handleDisabledChange",1),dC([pY("selected")],fB.prototype,"handleSelectedChange",1),dC([pY("value")],fB.prototype,"handleValueChange",1),fB.define("sl-option");var fW=O`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,fF=O`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;let fG=Symbol.for(""),fj=e=>{if(e?.r===fG)return e?._$litStatic$},fU=(e,...t)=>({_$litStatic$:t.reduce((t,r,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:fG}),fV=new Map,fq=e=>(t,...r)=>{let o,i,a=r.length,s=[],c=[],u,h=0,d=!1;for(;h<a;){for(u=t[h];h<a&&void 0!==(o=fj(i=r[h]));)u+=o+t[++h],d=!0;h!==a&&c.push(i),s.push(u),h++}if(h===a&&s.push(t[a]),d){let e=s.join("$$lit$$");void 0===(t=fV.get(e))&&(s.raw=s,fV.set(e,t=s)),r=c}return e(t,...r)},fZ=fq(ew);fq(eS),fq(ex);var fK=class extends d_{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?fU`a`:fU`button`;return fZ`
      <${t}
        part="base"
        class=${p$({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${(e?void 0:this.disabled)??ek}
        type=${(e?void 0:"button")??ek}
        href=${(e?this.href:void 0)??ek}
        target=${(e?this.target:void 0)??ek}
        download=${(e?this.download:void 0)??ek}
        rel=${(e&&this.target?"noreferrer noopener":void 0)??ek}
        role=${(e?void 0:"button")??ek}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${this.name??ek}
          library=${this.library??ek}
          src=${this.src??ek}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};fK.styles=[dh,fF],fK.dependencies={"sl-icon":fH},dC([eH(".icon-button")],fK.prototype,"button",2),dC([eL()],fK.prototype,"hasFocus",2),dC([eA()],fK.prototype,"name",2),dC([eA()],fK.prototype,"library",2),dC([eA()],fK.prototype,"src",2),dC([eA()],fK.prototype,"href",2),dC([eA()],fK.prototype,"target",2),dC([eA()],fK.prototype,"download",2),dC([eA()],fK.prototype,"label",2),dC([eA({type:Boolean,reflect:!0})],fK.prototype,"disabled",2);var fY=class extends d_{constructor(){super(...arguments),this.localize=new du(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return ew`
      <span
        part="base"
        class=${p$({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?ew`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};fY.styles=[dh,fW],fY.dependencies={"sl-icon-button":fK},dC([eA({reflect:!0})],fY.prototype,"variant",2),dC([eA({reflect:!0})],fY.prototype,"size",2),dC([eA({type:Boolean,reflect:!0})],fY.prototype,"pill",2),dC([eA({type:Boolean})],fY.prototype,"removable",2);var fQ=O`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,fX=O`
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
`,fJ=new WeakMap,f0=new WeakMap,f1=new WeakMap,f2=new WeakSet,f5=new WeakMap,f3=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),i="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!t&&!i&&"string"==typeof r&&r.length>0&&void 0!==o&&(Array.isArray(o)?o.forEach(t=>{e.formData.append(r,t.toString())}):e.formData.append(r,o.toString()))},this.handleFormSubmit=e=>{var t;let r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=fJ.get(this.form))||t.forEach(e=>{this.setUserInteracted(e,!0)})),!this.form||this.form.noValidate||r||o(this.host)||(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),f5.set(this.host,[])},this.handleInteraction=e=>{let t=f5.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=dS({form:e=>{let t=e.form;if(t){let r=e.getRootNode().querySelector(`#${t}`);if(r)return r}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),checkValidity:e=>"function"!=typeof e.checkValidity||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),f5.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),f5.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,fJ.has(this.form)?fJ.get(this.form).add(this.host):fJ.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),f0.has(this.form)||(f0.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),f1.has(this.form)||(f1.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=fJ.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),f0.has(this.form)&&(this.form.reportValidity=f0.get(this.form),f0.delete(this.form)),f1.has(this.form)&&(this.form.checkValidity=f1.get(this.form),f1.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?f2.add(e):f2.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{t.hasAttribute(e)&&r.setAttribute(e,t.getAttribute(e))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){let t=this.host,r=!!f2.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}},f6=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(dx(dS({},f6),{valid:!1,valueMissing:!0})),Object.freeze(dx(dS({},f6),{valid:!1,customError:!0}));var f4=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},f8=class extends d_{constructor(){super(...arguments),this.formControlController=new f3(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new f4(this,"help-text","label"),this.localize=new du(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>ew`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,r=null!==t.closest(".select__clear"),o=null!==t.closest("sl-icon-button");if(!r&&!o){if("Escape"===e.key&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===e.key||" "===e.key&&""===this.typeToSelectString)return(e.preventDefault(),e.stopImmediatePropagation(),this.open)?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.getAllOptions(),r=t.indexOf(this.currentOption),o=Math.max(0,r);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===e.key?(o=r+1)>t.length-1&&(o=0):"ArrowUp"===e.key?(o=r-1)<0&&(o=t.length-1):"Home"===e.key?o=0:"End"===e.key&&(o=t.length-1),this.setCurrentOption(t[o])}if(e.key&&1===e.key.length||"Backspace"===e.key){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if("Backspace"===e.key)return;this.show()}for(let r of(e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===e.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase(),t))if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(" "):Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(e=this.closeWatcher)||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&"sl-icon-button"===e.tagName.toLowerCase());this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){"Tab"!==e.key&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest("sl-option"),r=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,r=Array.isArray(t)?t:[t],o=[];e.forEach(e=>o.push(e.value)),this.setSelectedOptions(e.filter(e=>r.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(e=>e.selected=!1),r.length&&r.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){!0===t||!1===t?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r;let o=this.getAllOptions();this.selectedOptions=o.filter(e=>e.selected);let i=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(e=>e.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let o=this.selectedOptions[0];this.value=null!=(e=null==o?void 0:o.value)?e:"",this.displayLabel=null!=(r=null==(t=null==o?void 0:o.getTextLabel)?void 0:t.call(o))?r:""}this.valueHasChanged=i,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let r=this.getTag(e,t);return ew`<div @sl-remove=${t=>this.handleTagRemove(t,e)}>
          ${"string"==typeof r?pj(r):r}
        </div>`}return t===this.maxOptionsVisible?ew`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`:ew``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),"value"===e){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await pK(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:t}=pG(this,"select.show",{dir:this.localize.dir()});await pq(this.popup.popup,e,t),this.currentOption&&function(e,t,r="vertical",o="smooth"){let i={top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)},a=i.top+t.scrollTop,s=i.left+t.scrollLeft,c=t.scrollLeft,u=t.scrollLeft+t.offsetWidth,h=t.scrollTop,d=t.scrollTop+t.offsetHeight;("horizontal"===r||"both"===r)&&(s<c?t.scrollTo({left:s,behavior:o}):s+e.clientWidth>u&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:o})),("vertical"===r||"both"===r)&&(a<h?t.scrollTo({top:a,behavior:o}):a+e.clientHeight>d&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:o}))}(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await pK(this);let{keyframes:e,options:t}=pG(this,"select.hide",{dir:this.localize.dir()});await pq(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,pV(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,pV(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=!!this.label||!!e,o=!!this.helpText||!!t,i=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return ew`
      <div
        part="form-control"
        class=${p$({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${p$({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?ew`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${i?ew`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};f8.styles=[dh,fX,fQ],f8.dependencies={"sl-icon":fH,"sl-popup":pP,"sl-tag":fY},dC([eH(".select")],f8.prototype,"popup",2),dC([eH(".select__combobox")],f8.prototype,"combobox",2),dC([eH(".select__display-input")],f8.prototype,"displayInput",2),dC([eH(".select__value-input")],f8.prototype,"valueInput",2),dC([eH(".select__listbox")],f8.prototype,"listbox",2),dC([eL()],f8.prototype,"hasFocus",2),dC([eL()],f8.prototype,"displayLabel",2),dC([eL()],f8.prototype,"currentOption",2),dC([eL()],f8.prototype,"selectedOptions",2),dC([eL()],f8.prototype,"valueHasChanged",2),dC([eA()],f8.prototype,"name",2),dC([eL()],f8.prototype,"value",1),dC([eA({attribute:"value"})],f8.prototype,"defaultValue",2),dC([eA({reflect:!0})],f8.prototype,"size",2),dC([eA()],f8.prototype,"placeholder",2),dC([eA({type:Boolean,reflect:!0})],f8.prototype,"multiple",2),dC([eA({attribute:"max-options-visible",type:Number})],f8.prototype,"maxOptionsVisible",2),dC([eA({type:Boolean,reflect:!0})],f8.prototype,"disabled",2),dC([eA({type:Boolean})],f8.prototype,"clearable",2),dC([eA({type:Boolean,reflect:!0})],f8.prototype,"open",2),dC([eA({type:Boolean})],f8.prototype,"hoist",2),dC([eA({type:Boolean,reflect:!0})],f8.prototype,"filled",2),dC([eA({type:Boolean,reflect:!0})],f8.prototype,"pill",2),dC([eA()],f8.prototype,"label",2),dC([eA({reflect:!0})],f8.prototype,"placement",2),dC([eA({attribute:"help-text"})],f8.prototype,"helpText",2),dC([eA({reflect:!0})],f8.prototype,"form",2),dC([eA({type:Boolean,reflect:!0})],f8.prototype,"required",2),dC([eA()],f8.prototype,"getTag",2),dC([pY("disabled",{waitUntilFirstUpdate:!0})],f8.prototype,"handleDisabledChange",1),dC([pY(["defaultValue","value"],{waitUntilFirstUpdate:!0})],f8.prototype,"handleValueChange",1),dC([pY("open",{waitUntilFirstUpdate:!0})],f8.prototype,"handleOpenChange",1),pF("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),pF("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),f8.define("sl-select");let f7=O`
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
`,f9=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52"}),ge=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146"});var gt=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,go=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?gr(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&gt(t,r,a),a};function gn(e,t=""){return E(Object.entries(e).map(([e,r])=>(function(e,t,r=""){return`:host([icon='${r}${e}'])::before { content: '${t}'; }`})(e,r,t)).join(""))}let gi=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};gi.styles=O`
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

		${gn(f9)}
		${gn(ge,"gl-")}

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
	`,go([eA({reflect:!0})],gi.prototype,"icon",2),go([eA({reflect:!0})],gi.prototype,"modifier",2),go([eA({type:Number})],gi.prototype,"size",2),go([eA({reflect:!0})],gi.prototype,"flip",2),go([eA({reflect:!0})],gi.prototype,"rotate",2),gi=go([eP("code-icon")],gi);var ga=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,gl=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?gs(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&ga(t,r,a),a};let gc=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return ew` <code-icon icon="check"></code-icon> `}render(){return ew`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};gc.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},gc.styles=[f7],gl([eA({type:Boolean,reflect:!0})],gc.prototype,"disabled",2),gl([eA({type:String})],gc.prototype,"value",2),gl([eA({type:Boolean})],gc.prototype,"defaultChecked",1),gl([eA({type:Boolean,reflect:!0})],gc.prototype,"checked",2),gc=gl([eP("gl-checkbox")],gc);var gu=Object.defineProperty,gh=Object.getOwnPropertyDescriptor;let gd=class extends lit_element_i{};gd.styles=[h4,O`
			:host {
				display: block;
				height: 0;
				margin: 0.6rem;
				border-top: 0.1rem solid var(--vscode-menu-separatorBackground);
			}
		`],gd=((e,t,r,o)=>{for(var i,a=o>1?void 0:o?gh(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&gu(t,r,a),a})([eP("menu-divider")],gd);var gp=Object.defineProperty,gf=Object.getOwnPropertyDescriptor,gg=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?gf(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&gp(t,r,a),a};let gm=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.role="option"}updateInteractiveState(){this.tabIndex=this.disabled?-1:"option"===this.role?0:-1}updated(e){(e.has("disabled")||e.has("role"))&&this.updateInteractiveState()}render(){return this.href?ew`<a href=${this.href}><slot></slot></a>`:ew`<slot></slot>`}};gm.styles=[h4,O`
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
				-webkit-font-smoothing: auto;
				border-radius: var(--menu-item-radius, 0.3rem);
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

			:host([href]) {
				padding-inline: 0;
			}

			a {
				display: block;
				color: inherit;
				text-decoration: none;
				padding: 0 0.6rem;
			}
		`],gg([eA({type:Boolean,reflect:!0})],gm.prototype,"disabled",2),gg([eA({reflect:!0})],gm.prototype,"href",2),gg([eA({reflect:!0})],gm.prototype,"role",2),gm=gg([eP("menu-item")],gm);var gb=Object.defineProperty,gv=Object.getOwnPropertyDescriptor;let gy=class extends lit_element_i{render(){return ew`<slot></slot>`}};gy.styles=[h4,O`
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
		`],gy=((e,t,r,o)=>{for(var i,a=o>1?void 0:o?gv(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&gb(t,r,a),a})([eP("menu-label")],gy);let gw=O`
	:host {
		--checkbox-radius: 50%;
		--checkbox-foreground: var(--vscode-radio-inactiveForeground);
		--checkbox-background: var(--vscode-radio-inactiveBackground);
		--checkbox-border: var(--vscode-radio-inactiveBorder);
		--checkbox-checked-foreground: var(--vscode-radio-activeForeground);
		--checkbox-checked-background: var(--vscode-radio-activeBackground);
		--checkbox-checked-border: var(--vscode-radio-activeBorder);
		--checkbox-hover-background: var(--vscode-radio-inactiveHoverBackground);
	}
`;var gS=Object.defineProperty,gx=Object.getOwnPropertyDescriptor,gC=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?gx(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&gS(t,r,a),a};let gk=class extends GlElement{constructor(){super(...arguments),this.disabled=!1,this.checked=!1,this._parentGroup=void 0}set parentGroup(e){this._parentGroup=e}get parentGroup(){return this._parentGroup}handleClick(){this.value&&this.parentGroup?.setValue(this.value)}renderCircle(){if(this.checked)return ew`<code-icon icon="circle-filled"></code-icon>`}render(){return ew`<label ?aria-disabled=${this.disabled}
			><button class="input" .disabled=${this.disabled} @click=${this.handleClick}></button>
			<div class="control">${this.renderCircle()}</div>
			<slot class="label-text"></slot>
		</label>`}};gk.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},gk.styles=[f7,gw],gC([eA({type:Boolean,reflect:!0})],gk.prototype,"disabled",2),gC([eA({type:String})],gk.prototype,"value",2),gC([eA({type:String,reflect:!0})],gk.prototype,"name",2),gC([eA({type:Boolean,reflect:!0})],gk.prototype,"checked",2),gC([eA({type:Object,attribute:!1})],gk.prototype,"parentGroup",1),gk=gC([eP("gl-radio")],gk);var g_=Object.defineProperty,gR=Object.getOwnPropertyDescriptor,gT=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?gR(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&g_(t,r,a),a};let gE=class extends GlElement{constructor(){super(...arguments),this.disabled=!1}handleValueChange(){this.updateRadioElements()}firstUpdated(){this.role="group"}updateRadioElements(e=!1){this.radioEls.forEach(t=>{e&&(t.parentGroup=this),t.checked=t.value===this.value,t.disabled=this.disabled})}render(){return ew`<slot @slotchange=${()=>this.updateRadioElements(!0)}></slot>`}setValue(e){this.value=e;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}};gE.styles=[gw],gT([eA({type:Boolean,reflect:!0})],gE.prototype,"disabled",2),gT([eA({type:String})],gE.prototype,"value",2),gT([tn(["value","disabled"])],gE.prototype,"handleValueChange",1),gT([eB({flatten:!0})],gE.prototype,"radioEls",2),gE=gT([eP("gl-radio-group")],gE);let gM=O`
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
`,gO=O`
	code-icon.picker-icon {
		font-size: 1rem;
		/* margin-top: 0.4rem; */
		margin-right: -0.25rem;
	}

	code-icon.picker-icon::before {
		margin-left: -0.4rem;
	}
`,g$=O`
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
`;var gI=Object.defineProperty,gz=Object.getOwnPropertyDescriptor,gP=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?gz(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&gI(t,r,a),a};let gD=class extends lit_element_i{constructor(){super(...arguments),this.icon=!1,this.size=13,this.worktree=!1}render(){let e,t;if(null==this.ref)return ek;switch(this.ref.refType){case"branch":e=this.worktree?"worktree":"branch",t=this.worktree?"gl-worktree":"git-branch";break;case"tag":e="tag",t="tag";break;default:e="revision",t="git-commit"}return ew`${this.icon?ew`<code-icon
						class="icon${e?` ${e}`:""}"
						icon="${t}"
						size="${this.size}"
					></code-icon>`:ek}<span class="label">${this.ref.name}</span>`}};gD.styles=O`
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
	`,gP([eA({type:Boolean,reflect:!0})],gD.prototype,"icon",2),gP([eA({type:Object})],gD.prototype,"ref",2),gP([eA({type:Number})],gD.prototype,"size",2),gP([eA({type:Boolean})],gD.prototype,"worktree",2),gD=gP([eP("gl-ref-name")],gD);var gA=Object.defineProperty,gL=Object.getOwnPropertyDescriptor,gN=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?gL(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&gA(t,r,a),a};let gH=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.icon=!1,this.size=16,this.worktree=!1}render(){return ew`<gl-button appearance="toolbar" href=${this.href??ek} ?disabled=${this.disabled}
			>${null==this.ref?ew`<slot name="empty">&lt;missing&gt;</slot>`:ew`<gl-ref-name
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
		></gl-button>`}};gH.styles=[gM,O`
			:host {
				--font-weight: normal;
			}

			gl-button {
				max-width: 100%;
			}

			gl-ref-name:not([icon]) {
				padding-left: 0.2rem;
			}
		`,gO],gN([eA({type:Boolean,reflect:!0})],gH.prototype,"disabled",2),gN([eA({type:String,reflect:!0})],gH.prototype,"href",2),gN([eA({type:Boolean,reflect:!0})],gH.prototype,"icon",2),gN([eA({type:Object})],gH.prototype,"ref",2),gN([eA({type:Number})],gH.prototype,"size",2),gN([eA({type:Boolean})],gH.prototype,"worktree",2),gH=gN([eP("gl-ref-button")],gH);let gB=O`
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
`,gW=O`
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
`;var gF=Object.defineProperty,gG=Object.getOwnPropertyDescriptor,gj=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?gG(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&gF(t,r,a),a};let gU=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return ew`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};gU.styles=[gB,gW],gj([eA({type:Boolean})],gU.prototype,"pulse",2),gU=gj([eP("gl-indicator")],gU);var gV=Object.defineProperty,gq=Object.getOwnPropertyDescriptor,gZ=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?gq(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&gV(t,r,a),a};let gK=class extends GlElement{constructor(){super(...arguments),this.connectIcon=!0,this.disabled=!1,this.icon=!0,this.hasMultipleRepositories=!1,this.expandable=!1}get icons(){if(this.repository?.provider===void 0)return;let e=0;if(this.icon&&e++,this.connectIcon&&this.repository.provider.integration?.connected===!1&&e++,0!==e)return e}get displayName(){return this.repository?.name??"none selected"}render(){return ew`
			${this.renderProviderIcon()}
			<gl-button
				class="truncated-button"
				appearance="toolbar"
				?disabled=${this.disabled}
				@click=${e=>this.emit("gl-click",{event:e,part:"label",repository:this.repository})}
			>
				<span class="truncated-button__label">${this.displayName}</span>
				${this.hasMultipleRepositories?ew`<code-icon
							slot="suffix"
							class="picker-icon"
							icon="chevron-down"
							aria-hidden="true"
						></code-icon>`:ek}
				<slot name="tooltip" slot="tooltip">${this.displayName}</slot>
			</gl-button>
		`}renderProviderIcon(){if(!this.icon)return ek;let{repository:e}=this;if(!e?.provider)return ew`
				<gl-button part="provider-icon" appearance="toolbar" ?disabled=${!0}>
					<code-icon icon="gl-repository" aria-hidden="true"></code-icon>
				</gl-button>
			`;let{provider:t}=e,r=t.integration?.connected;return ew`<gl-popover placement="bottom" trigger="hover click focus">
				<gl-button
					slot="anchor"
					part="provider-icon"
					appearance="toolbar"
					href=${t.url??ek}
					aria-label=${`Open Repository on ${t.name}`}
					@click=${e=>this.emit("gl-click",{event:e,part:"icon",repository:this.repository})}
				>
					<code-icon
						icon=${"cloud"===t.icon?"cloud":`gl-provider-${t.icon}`}
						aria-hidden="true"
					></code-icon>
					${hZ(r,()=>ew`<gl-indicator class="indicator-dot"></gl-indicator>`)}
				</gl-button>
				<span slot="content">
					Open Repository on ${t.name}
					<hr />
					${hZ(r,()=>ew`
							<span>
								<code-icon style="margin-top: -3px" icon="check" aria-hidden="true"></code-icon>
								Connected to ${t.name}
							</span>
						`,()=>!1!==r?ek:ew`
								<code-icon style="margin-top: -3px" icon="plug" aria-hidden="true"></code-icon>
								<a
									href=${h2("gitlens.plus.cloudIntegrations.connect",{integrationIds:[t.integration.id],source:this.source})}
								>
									Connect to ${e.provider.name}
								</a>
								<span>&mdash; not connected</span>
							`)}
				</span>
			</gl-popover>
			${this.renderConnectIcon()}`}renderConnectIcon(){if(!this.connectIcon)return ek;let{repository:e}=this;if(!e?.provider)return ek;let{provider:t}=e;return t.integration?.connected!==!1?ek:ew`
			<gl-button
				part="connect-icon"
				appearance="toolbar"
				href=${h2("gitlens.plus.cloudIntegrations.connect",{integrationIds:[t.integration.id],source:this.source})}
			>
				<code-icon icon="plug" style="color: var(--titlebar-fg)"></code-icon>
				<span slot="tooltip">
					Connect to ${t.name}
					<hr />
					View pull requests and issues in Home, Commit Graph, Launchpad, autolinks, and more
				</span>
			</gl-button>
		`}};gK.styles=[hQ,hX,gM,g$,O`
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
		`,gO],gZ([eA({type:Boolean})],gK.prototype,"connectIcon",2),gZ([eA({type:Boolean})],gK.prototype,"disabled",2),gZ([eA({type:Boolean})],gK.prototype,"icon",2),gZ([eA({type:Object})],gK.prototype,"repository",2),gZ([eA({type:Boolean})],gK.prototype,"hasMultipleRepositories",2),gZ([eA({type:Object})],gK.prototype,"source",2),gZ([eA({type:Boolean,reflect:!0})],gK.prototype,"expandable",2),gZ([eA({type:Number,reflect:!0})],gK.prototype,"icons",1),gK=gZ([eP("gl-repo-button-group")],gK);var gY=Object.defineProperty,gQ=Object.getOwnPropertyDescriptor,gX=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?gQ(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&gY(t,r,a),a};let gJ=class extends lit_element_i{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}get absoluteDate(){return td(this.date,this.format??"MMMM Do, YYYY h:mma")}get dateLabel(){return"relative"===this.dateStyle?th(this.date):this.absoluteDate}render(){return ew`<gl-tooltip content="${this.tooltip} ${this.absoluteDate}"
			><time part="base" datetime="${this.date.toISOString()}">${this.dateLabel}</time></gl-tooltip
		>`}};gX([eA()],gJ.prototype,"format",2),gX([eA({attribute:"date-style"})],gJ.prototype,"dateStyle",2),gX([eA({converter:{toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>new Date(parseInt(e,10))},reflect:!0})],gJ.prototype,"date",2),gX([eA()],gJ.prototype,"tooltip",2),gJ=gX([eP("formatted-date")],gJ);var g0=Object.defineProperty,g1=Object.getOwnPropertyDescriptor,g2=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?g1(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&g0(t,r,a),a};let g5=class extends GlElement{constructor(){super(...arguments),this.url="",this.name="",this.status="merged",this.type="autolink",this.identifier="",this.details=!1}renderDate(){return this.date?ew`<formatted-date
			.date=${new Date(this.date)}
			.format=${this.dateFormat}
			.dateStyle=${this.dateStyle}
		></formatted-date>`:ek}render(){let{icon:e,modifier:t}=function(e="autolink",t="merged"){let r,o;switch(e){case"issue":o="closed"===t?"merged":"opened",r="closed"===t?"pass":"issues";break;case"pr":switch(o=t,t){case"merged":r="git-merge";break;case"closed":r="git-pull-request-closed";break;default:r="git-pull-request"}break;default:o="opened",r="link"}return{icon:r,modifier:o}}(this.type,this.status);return this.compact?ew`
				<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
				<p class="title">${this.identifier}</p>
			`:ew`
			<span class="icon icon--${t}"><code-icon icon=${e}></code-icon></span>
			<p class="title">
				<a href="${this.url}">${this.name}</a>
			</p>
			<p class="date">${this.identifier} ${this.status?this.status:ek} ${this.renderDate()}</p>
			${hZ(!0===this.details,()=>ew`
					<p class="details">
						<gl-button appearance="toolbar" tooltip="Open Details" @click=${()=>this.onDetailsClicked()}
							><code-icon icon="eye"></code-icon
						></gl-button>
					</p>
				`)}
		`}onDetailsClicked(){this.emit("gl-issue-pull-request-details")}};g5.styles=O`
		:host {
			display: grid;
			gap: 0.25rem 0.6rem;
			justify-content: start;
			font-size: 1.3rem;
			grid-template-columns: min-content 1fr min-content;
		}

		:host([compact]) {
			grid-template-columns: min-content 1fr;
		}

		a {
			color: var(--color-link-foreground);
			text-decoration: none;
		}

		.icon {
			grid-column: 1;
			grid-row: 1 / 3;
			text-align: center;
			padding-top: 0.1rem;
		}

		.icon--opened {
			color: var(--vscode-gitlens-openPullRequestIconColor);
		}
		.icon--closed {
			color: var(--vscode-gitlens-closedPullRequestIconColor);
		}
		.icon--merged {
			color: var(--vscode-gitlens-mergedPullRequestIconColor);
		}

		.title {
			grid-column: 2;
			grid-row: 1;
			margin: 0;
		}

		.date {
			grid-column: 2;
			grid-row: 2;
			margin: 0;
		}

		.details {
			grid-column: 3;
			grid-row: 1 / 3;
			margin: 0;
		}
	`,g2([eA()],g5.prototype,"url",2),g2([eA()],g5.prototype,"name",2),g2([eA()],g5.prototype,"date",2),g2([eA()],g5.prototype,"dateFormat",2),g2([eA()],g5.prototype,"dateStyle",2),g2([eA()],g5.prototype,"status",2),g2([eA()],g5.prototype,"type",2),g2([eA()],g5.prototype,"identifier",2),g2([eA({type:Boolean,reflect:!0})],g5.prototype,"compact",2),g2([eA({type:Boolean})],g5.prototype,"details",2),g5=g2([eP("issue-pull-request")],g5);let g3=navigator?.userAgentData?.platform,g6=navigator.userAgent,g4="Linux"===g3||g6.includes("Linux"),g8="macOS"===g3||g6.includes("Macintosh"),g7="Windows"===g3||g6.includes("Windows");var g9=Object.defineProperty,me=Object.getOwnPropertyDescriptor,mt=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?me(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&g9(t,r,a),a};let mr=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return ew`<div class="progress-bar"></div>`}};mr.styles=O`
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
	`,mt([eA({reflect:!0})],mr.prototype,"mode",2),mt([eA({type:Boolean})],mr.prototype,"active",2),mt([eA()],mr.prototype,"position",2),mr=mt([eP("progress-indicator")],mr);let mo=new Map([["","message:"],["=:","message:"],["message:","message:"],["@:","author:"],["author:","author:"],["#:","commit:"],["commit:","commit:"],["?:","file:"],["file:","file:"],["~:","change:"],["change:","change:"],["is:","type:"],["type:","type:"],[">:","after:"],["after:","after:"],["since:","after:"],["<:","before:"],["before:","before:"],["until:","before:"]]),mn=/(?:^|(\b|\s)*)((=:|message:|@:|author:|#:|commit:|\?:|file:|~:|change:|is:|type:|>:|after:|since:|<:|before:|until:)(?:"[^"]*"?|\w*))(?:$|(\b|\s))/g;var mi=Object.defineProperty,ma=Object.getOwnPropertyDescriptor,ms=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?ma(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&mi(t,r,a),a};let ml="gl-copy-container",mc=class extends lit_element_i{constructor(){super(...arguments),this.copyLabel="Copy",this.copiedLabel="Copied",this.disabled=!1,this.placement="top",this.timeout=1e3}disconnectedCallback(){this.cancelResetTimer(),super.disconnectedCallback?.()}connectedCallback(){super.connectedCallback?.(),this.label=this.copyLabel}render(){return this.content||this.disabled?ew`<gl-tooltip
			.content="${this.label}"
			placement="${this.placement??ek}"
			@click=${this.onClick}
		>
			<slot></slot>
		</gl-tooltip>`:ek}async onClick(e){if(this.cancelResetTimer(),this.content)try{await navigator.clipboard.writeText(this.content),this.label=this.copiedLabel}catch{this.label="Unable to Copy"}else this.label="Nothing to Copy";this.createResetTimer()}cancelResetTimer(){null!=this._resetTimer&&(clearTimeout(this._resetTimer),this._resetTimer=void 0)}createResetTimer(){this._resetTimer=setTimeout(()=>{this._resetTimer=void 0,this.label=this.copyLabel},this.timeout)}};mc.tagName=ml,mc.styles=O`
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
	`,ms([eA({reflect:!0})],mc.prototype,"appearance",2),ms([eA({reflect:!1})],mc.prototype,"content",2),ms([eA()],mc.prototype,"copyLabel",2),ms([eA()],mc.prototype,"copiedLabel",2),ms([eA({type:Boolean,reflect:!0})],mc.prototype,"disabled",2),ms([eA()],mc.prototype,"placement",2),ms([eA({type:Number})],mc.prototype,"timeout",2),ms([eL()],mc.prototype,"label",2),mc=ms([eP(ml)],mc);var mu=Object.defineProperty,mh=Object.getOwnPropertyDescriptor,md=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?mh(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&mu(t,r,a),a};let mp=class extends GlElement{constructor(){super(...arguments),this.aiAllowed=!0,this.filter=!1,this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.matchWholeWord=!1,this.naturalLanguage=!1,this.searching=!1,this.errorMessage="",this.showNaturalLanguageHelpText=!0,this.debouncedOnSearchChanged=e3(this.onSearchChanged.bind(this),250),this.searchHistory=[],this.searchHistoryPos=0}get value(){return this._value}set value(e){void 0===this._value&&(this._value=e)}get label(){return this.filter?"Filter":"Search"}get matchCaseOverride(){return!this.matchRegex||this.matchCase}get matchWholeWordOverride(){return!!this.matchRegex&&this.matchWholeWord}get placeholder(){return this.naturalLanguage?`${this.label} commits using natural language (\u2191\u2193 for history), e.g. Show my commits from last month`:`${this.label} commits (\u2191\u2193 for history), e.g. "Updates dependencies" author:eamodio`}focus(e){this.input.focus(e)}willUpdate(e){e.has("aiAllowed")&&!this.aiAllowed&&this.naturalLanguage&&this.updateNaturalLanguage(!1),super.willUpdate(e)}updated(e){this.toggleAttribute("data-ai-allowed",this.aiAllowed),this.toggleAttribute("data-has-input",!!this._value?.length),this.toggleAttribute("data-natural-language-mode",this.naturalLanguage),super.updated(e)}handleFocus(e){this.popoverEl.hide()}handleClear(e){this.focus(),this._value="",this.errorMessage="",this.processedQuery=void 0,this.debouncedOnSearchChanged()}updateHelpText(){this.naturalLanguage||(this._updateHelpTextDebounced??=e3(this.updateHelpTextCore.bind(this),200),this._updateHelpTextDebounced())}updateHelpTextCore(){let e=this.input?.selectionStart,t=this.value;if(null!=e&&0!==t.length&&t.includes(":")){let r,o=RegExp(mn,"g");for(;null!=(r=o.exec(t));){let[,,t,o]=r;if(e>r.index&&e<=r.index+(t?.trim().length??0)){this.helpType=mo.get(o);return}}}this.helpType=void 0}handleInputClick(e){this.updateHelpText()}handleInput(e){this.errorMessage="",this.processedQuery=void 0;let t=e.target?.value;this._value=t,this.updateHelpText(),this.naturalLanguage&&t||this.debouncedOnSearchChanged()}handleMatchAll(e){this.matchAll=!this.matchAll,this.debouncedOnSearchChanged()}handleMatchCase(e){this.matchCase=!this.matchCase,this.debouncedOnSearchChanged()}handleMatchRegex(e){this.matchRegex=!this.matchRegex,this.debouncedOnSearchChanged()}handleMatchWholeWord(e){this.matchWholeWord=!this.matchWholeWord,this.debouncedOnSearchChanged()}handleFilterClick(e){this.filter=!this.filter,this.emit("gl-search-modechange",{searchMode:this.filter?"filter":"normal",useNaturalLanguage:this.naturalLanguage}),this.debouncedOnSearchChanged()}handleNaturalLanguageClick(e){this.updateNaturalLanguage(!this.naturalLanguage),this.naturalLanguage||this.debouncedOnSearchChanged()}updateNaturalLanguage(e){this.processedQuery=void 0,this.naturalLanguage=e&&this.aiAllowed,this.emit("gl-search-modechange",{searchMode:this.filter?"filter":"normal",useNaturalLanguage:this.naturalLanguage})}handleKeyup(e){this.updateHelpText()}handleShortcutKeys(e){if(!["Enter","ArrowUp","ArrowDown"].includes(e.key)||e.ctrlKey||e.metaKey||e.altKey)return!0;if(e.preventDefault(),"Enter"===e.key)this.naturalLanguage?this.debouncedOnSearchChanged():this.emit("gl-search-navigate",{direction:e.shiftKey?"previous":"next"});else if(0!==this.searchHistory.length){let t="ArrowDown"===e.key?1:-1,r=this.searchHistoryPos+t;if(r>-1&&r<this.searchHistory.length){this.searchHistoryPos=r;let e=this.searchHistory[r];e!==this.value&&(this._value=e,this.updateHelpText(),this.naturalLanguage||this.debouncedOnSearchChanged())}}return!1}handleInsertToken(e){this._value+=`${this.value.length>0?" ":""}${e}`,window.requestAnimationFrame(()=>{this.updateHelpText(),this.naturalLanguage||"@me"!==e&&"is:stash"!==e&&"type:stash"!==e||this.debouncedOnSearchChanged(),this.input.focus(),this.input.selectionStart=this.value.length})}onSearchChanged(){let e={query:this.value,naturalLanguage:this.naturalLanguage?{query:this.value}:void 0,filter:this.filter,matchAll:this.matchAll,matchCase:this.matchCase,matchRegex:this.matchRegex,matchWholeWord:this.matchWholeWord};this.emit("gl-search-inputchange",e)}setCustomValidity(e=""){this.errorMessage=e}logSearch(e){e.naturalLanguage&&("boolean"==typeof e.naturalLanguage?(this.processedQuery=void 0,this.errorMessage=""):e.naturalLanguage.error?(this.processedQuery=void 0,this.errorMessage=e.naturalLanguage.error):(this.processedQuery=e.naturalLanguage.processedQuery,this.errorMessage=""));let t=this.searchHistory.length-1;this.searchHistoryPos<t||this.searchHistory[t]===e.query||(this.searchHistory.push(e.query),this.searchHistoryPos=this.searchHistory.length-1)}setSearchQuery(e){this._value=e}render(){return ew`<div class="field">
				<div class="controls controls__start">
					<gl-button
						appearance="input"
						role="checkbox"
						aria-checked="${this.filter}"
						tooltip="Filter Commits"
						aria-label="Filter Commits"
						@click="${this.handleFilterClick}"
						@focus="${this.handleFocus}"
					>
						<code-icon icon="list-filter"></code-icon>
					</gl-button>
					${this.aiAllowed?ew`<gl-button
								appearance="input"
								role="checkbox"
								aria-checked="${this.naturalLanguage}"
								tooltip="Natural Language Search (AI Preview)"
								aria-label="Natural Language Search (AI Preview)"
								@click="${this.handleNaturalLanguageClick}"
								@focus="${this.handleFocus}"
							>
								<code-icon icon="sparkle"></code-icon>
							</gl-button>`:ek}
					${this.renderSearchByPopover()}
				</div>
				<input
					id="search"
					part="search"
					type="text"
					spellcheck="false"
					placeholder="${this.placeholder}"
					.value="${this._value??""}"
					aria-valid="${!this.errorMessage}"
					aria-describedby="${""!==this.errorMessage||null!=this.helpType||this.naturalLanguage&&this.showNaturalLanguageHelpText?"help-text":""}"
					@input="${this.handleInput}"
					@keydown="${this.handleShortcutKeys}"
					@keyup="${this.handleKeyup}"
					@click="${this.handleInputClick}"
					@focus="${this.handleFocus}"
				/>
				${this.renderHelpText()}
			</div>
			<div class="controls">
				<gl-button
					appearance="input"
					class="${(this.value?void 0:"is-hidden")??ek}"
					tooltip="Clear"
					aria-label="Clear"
					@click="${this.handleClear}"
					@focus="${this.handleFocus}"
				>
					<code-icon icon="close"></code-icon>
				</gl-button>
				${this.renderSearchOptions()}
			</div>`}renderHelpText(){return ew`<div class="message" id="help-text" aria-live="polite">
			${this.renderSpecificHelpText(this.helpType)}
		</div>`}renderSpecificHelpText(e){if(this.errorMessage)return ew`<span>${this.errorMessage}</span>`;if(this.naturalLanguage){if(this.showNaturalLanguageHelpText)return this.processedQuery?ew`<span> Query: <code>${this.processedQuery}</code></span>`:this.searching?ew`<span>Query: <code-icon icon="loading" modifier="spin"></code-icon></span>`:ew`<span
						>Type your natural language query and press Enter. Click
						<code-icon icon="sparkle"></code-icon> to toggle modes.</span
					>`;return ek}switch(e){case"message:":return ew`<span
					>Message: use quotes to search for phrases, e.g. <code>message:"Updates dependencies"</code></span
				>`;case"author:":return ew`<span>Author: use a user's account, e.g. <code>author:eamodio</code></span>`;case"commit:":return ew`<span>Commit: use a full or short Commit SHA, e.g. <code>commit:4ce3a</code></span>`;case"type:":return ew`<span
					>Type: use <code>stash</code> to search only stashes, e.g. <code>type:stash</code></span
				>`;case"file:":return ew`<span
					>File: use a filename with extension, e.g. <code>file:package.json</code> or a glob pattern, e.g.
					<code>file:*graph*</code></span
				>`;case"change:":return ew`<span>Change: use a regex pattern, e.g. <code>change:update&#92;(param</code></span>`;case"after:":return ew`<span
					>After Date: use a date string, e.g. <code>after:2022-01-01</code> or a relative date, e.g.
					<code>since:6.months.ago</code></span
				>`;case"before:":return ew`<span
					>Before Date: use a date string, e.g. <code>before:2022-01-01</code> or a relative date, e.g.
					<code>until:6.months.ago</code></span
				>`}return ek}renderSearchByPopover(){return this.naturalLanguage?ek:ew`<gl-popover
			class="popover"
			trigger="click focus"
			hoist
			placement="bottom-start"
			.arrow=${!1}
			distance="0"
		>
			<gl-button
				style="height:100%;"
				slot="anchor"
				appearance="input"
				tooltip="${this.label} By"
				tooltipPlacement="top"
				aria-label="${this.label} By"
			>
				<code-icon icon="search" size="14" aria-hidden="true"></code-icon>
				<code-icon slot="suffix" icon="chevron-down" size="10" aria-hidden="true"></code-icon>
			</gl-button>
			<div slot="content">
				<menu-label>${this.label} By</menu-label>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${()=>this.handleInsertToken("@me")}">
						My changes <small>@me</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${()=>this.handleInsertToken("message:")}">
						Message <small>message: or =:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${()=>this.handleInsertToken("author:")}">
						Author <small>author: or @:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${()=>this.handleInsertToken("commit:")}">
						Commit SHA <small>commit: or #:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${()=>this.handleInsertToken("type:stash")}">
						Type <small>type:stash or is:stash</small>
					</button>
				</menu-item>
				<menu-divider></menu-divider>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${()=>this.handleInsertToken("file:")}">
						File <small>file: or ?:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${()=>this.handleInsertToken("change:")}">
						Change <small>change: or ~:</small>
					</button>
				</menu-item>
				<menu-divider></menu-divider>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${()=>this.handleInsertToken("after:")}">
						After Date <small>after: or since:</small>
					</button>
				</menu-item>
				<menu-item role="none">
					<button class="menu-button" type="button" @click="${()=>this.handleInsertToken("before:")}">
						Before Date <small>before: or until:</small>
					</button>
				</menu-item>
			</div>
		</gl-popover>`}renderSearchOptions(){return this.naturalLanguage?ew`<gl-copy-container
				class="${(this.value?void 0:"is-hidden")??ek}"
				appearance="toolbar"
				copyLabel="Copy Query"
				.content=${this.processedQuery}
				placement="bottom"
				?disabled=${!this.processedQuery}
			>
				<code-icon icon="copy" aria-hidden="true"></code-icon>
			</gl-copy-container>`:ew`<gl-button
				appearance="input"
				role="checkbox"
				aria-checked="${this.matchCaseOverride}"
				tooltip="Match Case${this.matchCaseOverride&&!this.matchCase?" (always on without regular expressions)":""}"
				aria-label="Match Case${this.matchCaseOverride&&!this.matchCase?" (always on without regular expressions)":""}"
				?disabled="${!this.matchRegex}"
				@click="${this.handleMatchCase}"
				@focus="${this.handleFocus}"
			>
				<code-icon icon="case-sensitive"></code-icon>
			</gl-button>
			<gl-button
				appearance="input"
				role="checkbox"
				aria-checked="${this.matchWholeWordOverride}"
				tooltip="Match Whole Word${this.matchWholeWordOverride&&!this.matchWholeWord?" (requires regular expressions)":""}"
				aria-label="Match Whole Word${this.matchWholeWordOverride&&!this.matchWholeWord?" (requires regular expressions)":""}"
				?disabled="${!this.matchRegex}"
				@click="${this.handleMatchWholeWord}"
				@focus="${this.handleFocus}"
			>
				<code-icon icon="whole-word"></code-icon>
			</gl-button>
			<gl-button
				appearance="input"
				role="checkbox"
				aria-checked="${this.matchRegex}"
				tooltip="Use Regular Expression"
				aria-label="Use Regular Expression"
				@click="${this.handleMatchRegex}"
				@focus="${this.handleFocus}"
			>
				<code-icon icon="regex"></code-icon>
			</gl-button>
			<gl-button
				appearance="input"
				role="checkbox"
				aria-checked="${this.matchAll}"
				tooltip="Match All"
				aria-label="Match All"
				@click="${this.handleMatchAll}"
				@focus="${this.handleFocus}"
			>
				<code-icon icon="check-all"></code-icon>
			</gl-button>`}};mp.styles=O`
		* {
			box-sizing: border-box;
		}

		:host {
			--gl-search-input-background: var(--vscode-input-background);
			--gl-search-input-foreground: var(--vscode-input-foreground);
			--gl-search-input-border: var(--vscode-input-border);
			--gl-search-input-placeholder: var(
				--vscode-editor-placeholder\\\.foreground,
				var(--vscode-input-placeholderForeground)
			);
			--gl-search-input-buttons-left: 2;
			--gl-search-input-buttons-right: 4;

			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 0.4rem;
			position: relative;

			flex: auto 1 1;
		}

		:host([data-ai-allowed]) {
			--gl-search-input-buttons-left: 3;
		}

		:host([data-natural-language-mode]) {
			--gl-search-input-buttons-left: 2;
			--gl-search-input-buttons-right: 0;
		}

		:host([data-natural-language-mode][data-has-input]) {
			--gl-search-input-buttons-right: 2;
		}

		:host(:not([data-natural-language-mode])[data-has-input]) {
			--gl-search-input-buttons-right: 5;
		}

		label {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.2rem;
			width: 3.2rem;
			height: 2.4rem;
			color: var(--gl-search-input-foreground);
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
			height: 2.7rem;
			background-color: var(--gl-search-input-background);
			color: var(--gl-search-input-foreground);
			border: 1px solid var(--gl-search-input-border);
			border-radius: 0.25rem;
			padding-top: 0;
			padding-bottom: 1px;
			padding-left: calc(1.7rem + calc(1.96rem * var(--gl-search-input-buttons-left)));
			padding-right: calc(0.7rem + calc(1.96rem * var(--gl-search-input-buttons-right)));
			font-family: inherit;
			font-size: inherit;
		}

		:host([data-natural-language-mode]) input {
			padding-left: calc(0.7rem + calc(1.96rem * (var(--gl-search-input-buttons-left))));
		}

		input:focus {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: -1px;
		}
		input::placeholder {
			color: var(--gl-search-input-placeholder);
		}

		input::-webkit-search-cancel-button {
			display: none;
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
			color: var(--gl-search-input-foreground);
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
			gap: 0.1rem;
		}

		.controls.controls__start {
			--button-compact-padding: 0.4rem;
			--button-line-height: 1;

			left: 0.2rem;
			right: auto;
		}

		button {
			padding: 0;
			color: var(--gl-search-input-foreground);
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

		.is-hidden {
			display: none;
		}

		menu-item {
			padding: 0 0.5rem;
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

		code {
			display: inline-block;
			backdrop-filter: brightness(1.3);
			border-radius: 3px;
			padding: 0px 4px;
			font-family: var(--vscode-editor-font-family);
		}

		.popover {
			margin-left: -0.25rem;
		}
		.popover::part(body) {
			padding: 0 0 0.5rem 0;
			font-size: var(--vscode-font-size);
			background-color: var(--vscode-menu-background);
		}

		gl-copy-container {
			margin-top: -0.1rem;
		}
	`,md([eH("input")],mp.prototype,"input",2),md([eH("gl-popover")],mp.prototype,"popoverEl",2),md([eA({type:Boolean})],mp.prototype,"aiAllowed",2),md([eA({type:Boolean})],mp.prototype,"filter",2),md([eA({type:Boolean})],mp.prototype,"matchAll",2),md([eA({type:Boolean})],mp.prototype,"matchCase",2),md([eA({type:Boolean})],mp.prototype,"matchRegex",2),md([eA({type:Boolean})],mp.prototype,"matchWholeWord",2),md([eA({type:Boolean})],mp.prototype,"naturalLanguage",2),md([eA({type:Boolean})],mp.prototype,"searching",2),md([eA({type:String})],mp.prototype,"value",1),md([eL()],mp.prototype,"errorMessage",2),md([eL()],mp.prototype,"helpType",2),md([eL()],mp.prototype,"processedQuery",2),md([eL()],mp.prototype,"_value",2),mp=md([eP("gl-search-input")],mp);var mf=Object.defineProperty,mg=Object.getOwnPropertyDescriptor,mm=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?mg(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&mf(t,r,a),a};let mb=class extends GlElement{constructor(){super(...arguments),this.aiAllowed=!0,this.errorMessage="",this.filter=!1,this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.matchWholeWord=!1,this.more=!1,this.naturalLanguage=!1,this.resultsHidden=!1,this.resultsLabel="result",this.resultsLoaded=!1,this.searching=!1,this.step=0,this.total=0,this.valid=!1}get value(){return this._value}set value(e){void 0===this._value&&(this._value=e)}get hasResults(){return this.total>=1}connectedCallback(){super.connectedCallback?.(),this._disposable=oP.on(window,"keydown",e=>this.handleShortcutKeys(e))}disconnectedCallback(){super.disconnectedCallback?.(),this._disposable?.dispose()}focus(e){this.searchInput?.focus(e)}navigate(e){this.emit("gl-search-navigate",{direction:e})}logSearch(e){this.searchInput?.logSearch(e)}setSearchQuery(e){this._value=e}handleShortcutKeys(e){if(!e.altKey){if("F3"===e.key&&!e.ctrlKey&&!e.metaKey||"g"===e.key&&e.metaKey&&!e.ctrlKey&&g8){e.preventDefault(),e.stopImmediatePropagation(),this.navigate(e.shiftKey?"previous":"next");return}"f"===e.key&&(e.metaKey&&!e.ctrlKey&&g8||e.ctrlKey&&!g8)&&(e.preventDefault(),e.stopImmediatePropagation(),this.focus())}}handlePrevious(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"first":"previous")}handleNext(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"last":"next")}handleOpenInView(e){e.stopImmediatePropagation(),this.emit("gl-search-openinview")}get resultsHtml(){if(this.searching)return ew`<gl-tooltip hoist placement="top" class="count"
				><code-icon icon="loading" modifier="spin"></code-icon><span slot="content">Searching...</span>
			</gl-tooltip>`;let e=tb(this.resultsLabel,this.total,{zero:"No",infix:this.more?"+ ":void 0}),t="",r=ew`<span>${e}</span>`;if(this.total>=1){t=this.resultsHidden?ew`${e} found &mdash; some results are hidden or unable to be shown on the Commit Graph`:`${e} found`;let o=`${this.total}${this.more?"+":""}`;r=ew`<span
				><span aria-current="step">${this.step}</span> of
				<span class="${this.resultsHidden?"sr-hidden":""}">${o}</span
				><span class="sr-only"> ${e}</span></span
			>`}else this.resultsLoaded&&(t=`${e} found`);return ew`<gl-tooltip
			hoist
			placement="top"
			?disabled="${!t}"
			class="count${this.total<1&&this.valid&&this.resultsLoaded?" error":""}"
			>${r}<span slot="content">${t}</span></gl-tooltip
		>`}render(){return ew`<gl-search-input
				id="search-input"
				exportparts="search: search"
				?aiAllowed="${this.aiAllowed}"
				.errorMessage="${this.errorMessage}"
				?filter=${this.filter}
				?matchAll="${this.matchAll}"
				?matchCase="${this.matchCase}"
				?matchRegex="${this.matchRegex}"
				?matchWholeWord="${this.matchWholeWord}"
				?naturalLanguage="${this.naturalLanguage}"
				?searching="${this.searching}"
				.value="${this._value??""}"
				@gl-search-navigate="${e=>{e.stopImmediatePropagation(),this.navigate(e.detail.direction)}}"
			></gl-search-input>
			<div class="search-navigation" aria-label="Search navigation">
				${this.resultsHtml}
				<gl-tooltip hoist>
					<button
						type="button"
						class="button"
						?disabled="${!this.hasResults}"
						@click="${this.handlePrevious}"
					>
						<code-icon
							icon="arrow-up"
							aria-label="Previous Match (Shift+Enter)&#10;First Match (Shift+Click)"
						></code-icon>
					</button>
					<span slot="content">Previous Match (Shift+Enter)<br />First Match (Shift+Click)</span>
				</gl-tooltip>
				<gl-tooltip hoist>
					<button type="button" class="button" ?disabled="${!this.hasResults}" @click="${this.handleNext}">
						<code-icon
							icon="arrow-down"
							aria-label="Next Match (Enter)&#10;Last Match (Shift+Click)"
						></code-icon>
					</button>
					<span slot="content">Next Match (Enter)<br />Last Match (Shift+Click)</span>
				</gl-tooltip>
				<gl-tooltip hoist content="Show Results in Side Bar">
					<button
						type="button"
						class="button"
						?disabled="${!this.hasResults}"
						@click="${this.handleOpenInView}"
					>
						<code-icon icon="link-external" aria-label="Show Results in Side Bar"></code-icon>
					</button>
				</gl-tooltip>
			</div>
			<progress-indicator ?active="${this.searching}"></progress-indicator>`}};mb.styles=O`
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
	`,mm([eH("gl-search-input")],mb.prototype,"searchInput",2),mm([eA({type:Boolean})],mb.prototype,"aiAllowed",2),mm([eA({type:String})],mb.prototype,"errorMessage",2),mm([eA({type:Boolean})],mb.prototype,"filter",2),mm([eA({type:Boolean})],mb.prototype,"matchAll",2),mm([eA({type:Boolean})],mb.prototype,"matchCase",2),mm([eA({type:Boolean})],mb.prototype,"matchRegex",2),mm([eA({type:Boolean})],mb.prototype,"matchWholeWord",2),mm([eA({type:Boolean})],mb.prototype,"more",2),mm([eA({type:Boolean})],mb.prototype,"naturalLanguage",2),mm([eA({type:Boolean})],mb.prototype,"resultsHidden",2),mm([eA({type:String})],mb.prototype,"resultsLabel",2),mm([eA({type:Boolean})],mb.prototype,"resultsLoaded",2),mm([eA({type:Boolean})],mb.prototype,"searching",2),mm([eA({type:Number})],mb.prototype,"step",2),mm([eA({type:Number})],mb.prototype,"total",2),mm([eA({type:Boolean})],mb.prototype,"valid",2),mm([eA({type:String})],mb.prototype,"value",1),mm([eL()],mb.prototype,"_value",2),mb=mm([eP("gl-search-box")],mb);let mv={"cherry-pick":{label:"Cherry picking",conflicts:"Resolve conflicts to continue cherry picking",directionality:"into"},merge:{label:"Merging",conflicts:"Resolve conflicts to continue merging",directionality:"into"},rebase:{label:"Rebasing",conflicts:"Resolve conflicts to continue rebasing",directionality:"onto",pending:"Pending rebase of"},revert:{label:"Reverting",conflicts:"Resolve conflicts to continue reverting",directionality:"in"}};function my(e){return e.startsWith("remotes/")?e.indexOf("/",8):e.indexOf("/")}let mw=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,mS=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,mx=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,mC=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,mk=/(^[0-9a-f]{40})\^[0-3]?$/;function m_(e,t){var r,o,i;let a;if(null==e)return"";t=!1===t?{}:{expand:!0,icon:!0,label:t?.label??t?.expand??!0,...t};let s=t?.quoted?`'${e.name}'`:e.name;switch(e.refType){case"branch":{let i;e.remote&&(s=`${(r=s).substring(0,my(r))}: ${(o=s).substring(my(o)+1)}`,s=t?.quoted?`'${s}'`:s),i=t.label?t.capitalize&&t.expand?`${e.remote?"Remote ":""}Branch `:`${e.remote?"remote ":""}branch `:"",a=`${i}${t.icon?`$(git-branch)${eF.Space}${s}`:s}`;break}case"tag":a=`${t.label?"tag ":""}${t.icon?`$(tag)${eF.Space}${s}`:s}`;break;default:if(e?.refType==="stash"||e?.refType==="revision"&&e?.stashName){let r;t.expand&&e.message&&(r=`${null!=e.stashNumber?`#${e.stashNumber}: `:""}${e.message.length>20?`${e.message.substring(0,20).trimEnd()}${eF.Ellipsis}`:e.message}`),a=`${t.label?"stash ":""}${t.icon?`$(archive)${eF.Space}${r??e.name}`:r??(e.stashNumber?`#${e.stashNumber}`:e.name)}`}else if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return mS.test(e);case"qualified-double-dot":return mx.test(e);case"qualified-triple-dot":return mC.test(e);default:return mw.test(e)}}(e.ref))a=s;else{let r,o;(t.expand&&e.message&&(r=e.message.length>20?` (${e.message.substring(0,20).trimEnd()}${eF.Ellipsis})`:` (${e.message})`),t.expand&&t.label&&(i=e.ref,i&&mk.test(i)))?(s=e.name.endsWith("^")?e.name.substring(0,e.name.length-1):e.name,t?.quoted&&(s=`'${s}'`),o="before "):o="",a=`${t.label?`${o}commit `:""}${t.icon?`$(git-commit)${eF.Space}${s}${r??""}`:`${s}${r??""}`}`}}return t.capitalize&&t.expand&&!1!==t.label?tg(a):a}var mR=Object.defineProperty,mT=Object.getOwnPropertyDescriptor,mE=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?mT(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&mR(t,r,a),a};let mM=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.isAltKeyPressed=!1}get effectiveIcon(){return this.isAltKeyPressed&&this.altIcon?this.altIcon:this.icon}get effectiveTooltip(){if(this.label||this.altLabel)return this.altLabel?this.isAltKeyPressed?this.altLabel:`${this.label}
[${g8?"⌥":"Alt"}] ${this.altLabel}`:this.label}get effectiveLabel(){if(this.label||this.altLabel)return this.altLabel&&this.isAltKeyPressed?this.altLabel:this.label}get effectiveHref(){return this.isAltKeyPressed&&this.altHref?this.altHref:this.href}connectedCallback(){super.connectedCallback?.(),window.addEventListener("keydown",this),window.addEventListener("keyup",this)}disconnectedCallback(){super.disconnectedCallback?.(),window.removeEventListener("keydown",this),window.removeEventListener("keyup",this)}handleEvent(e){let t="Alt"===e.key||e.altKey;"keydown"===e.type?this.isAltKeyPressed=t:"keyup"===e.type&&t&&(this.isAltKeyPressed=!1)}render(){return ew`
			<gl-tooltip hoist content="${this.effectiveTooltip??ek}">
				<a
					role="${!this.effectiveHref?"button":ek}"
					type="${!this.effectiveHref?"button":ek}"
					aria-label="${this.effectiveLabel??ek}"
					?disabled=${this.disabled}
					href=${this.effectiveHref??ek}
				>
					<code-icon icon="${this.effectiveIcon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};mM.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},mM.styles=O`
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

		:host(:focus-within) {
			${h3}
		}

		:host(:hover) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}

		a {
			color: inherit;
		}
		a:focus {
			outline: none;
		}
	`,mE([eA()],mM.prototype,"href",2),mE([eA({attribute:"alt-href"})],mM.prototype,"altHref",2),mE([eA()],mM.prototype,"label",2),mE([eA({attribute:"alt-label"})],mM.prototype,"altLabel",2),mE([eA()],mM.prototype,"icon",2),mE([eA({attribute:"alt-icon"})],mM.prototype,"altIcon",2),mE([eA({type:Boolean})],mM.prototype,"disabled",2),mE([eH("a")],mM.prototype,"defaultFocusEl",2),mE([eL()],mM.prototype,"isAltKeyPressed",2),mM=mE([eP("action-item")],mM);var mO=Object.defineProperty,m$=Object.getOwnPropertyDescriptor,mI=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?m$(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&mO(t,r,a),a};let mz=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback?.()}render(){return ew`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<2)return;let t=this.handleKeydown.bind(this),r=`${this.actionNodes.length}`,o=this.actionNodes.map((e,o)=>(e.setAttribute("aria-posinset",`${o+1}`),e.setAttribute("aria-setsize",r),e.setAttribute("tabindex",0===o?"0":"-1"),e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{o?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes||this.actionNodes.length<2)return;let t=e.target,r=parseInt(t.getAttribute("aria-posinset")??"0",10),o=null;if("ArrowLeft"===e.key){let e=1===r?this.actionNodes.length-1:r-2;o=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=r===this.actionNodes.length?0:r;o=this.actionNodes[e]}null!=o&&o!==t&&(t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};mz.styles=O`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,mI([eB({flatten:!0})],mz.prototype,"actionNodes",2),mz=mI([eP("action-nav")],mz);var mP=Object.defineProperty,mD=Object.getOwnPropertyDescriptor,mA=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?mD(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&mP(t,r,a),a};let mL=class extends lit_element_i{constructor(){super(...arguments),this.conflicts=!1,this.skipCommand="gitlens.home.skipPausedOperation",this.continueCommand="gitlens.home.continuePausedOperation",this.abortCommand="gitlens.home.abortPausedOperation",this.openEditorCommand="gitlens.home.openRebaseEditor"}get onSkipUrl(){return this.createCommandLink(this.skipCommand,this.pausedOpStatus)}get onContinueUrl(){return this.createCommandLink(this.continueCommand,this.pausedOpStatus)}get onAbortUrl(){return this.createCommandLink(this.abortCommand,this.pausedOpStatus)}get onOpenEditorUrl(){return this.createCommandLink(this.openEditorCommand,this.pausedOpStatus)}createCommandLink(e,t){return null!=this.webviewCommandContext&&(t=null==t?this.webviewCommandContext:{...t,...this.webviewCommandContext}),h2(e,t)}render(){return null==this.pausedOpStatus?ek:ew`
			<span class="status" part="base">
				<code-icon icon="warning" class="icon"></code-icon>
				${this.renderStatus(this.pausedOpStatus)}${this.renderActions()}
			</span>
		`}renderStatus(e){if("rebase"!==e.type){let t=mv[e.type];return ew`<span class="label"
				>${this.conflicts?t.conflicts:t.label}
				<code-icon
					icon="${"branch"===e.incoming.refType?"git-branch":"git-commit"}"
					class="icon"
				></code-icon>
				${m_(e.incoming,{expand:!1,icon:!1})} ${t.directionality}
				${m_(e.current,{expand:!1,icon:!1})}</span
			>`}let t=e.steps.total>0,r=mv[e.type];return ew`<span class="label"
				>${this.conflicts?r.conflicts:t?r.label:r.pending}
				<code-icon
					icon="${"branch"===e.incoming.refType?"git-branch":"git-commit"}"
					class="icon"
				></code-icon>
				${m_(e.incoming,{expand:!1,icon:!1})} ${r.directionality}
				${m_(e.current??e.onto,{expand:!1,icon:!1})}</span
			>${t?ew`<span class="steps"
						>(${e.steps.current.number}/${e.steps.total})</span
					>`:ek}`}renderActions(){if(null==this.pausedOpStatus)return ek;let e=this.pausedOpStatus.type;return ew`<action-nav class="actions">
			${hZ("revert"!==e&&!("rebase"===e&&this.conflicts),()=>ew`
					<action-item label="Continue" icon="debug-continue" href=${this.onContinueUrl}></action-item>
				`)}
			${hZ("merge"!==e,()=>ew`<action-item label="Skip" icon="debug-step-over" href=${this.onSkipUrl}></action-item>`)}
			<action-item label="Abort" href=${this.onAbortUrl} icon="circle-slash"></action-item>
			${hZ("rebase"===e,()=>ew`<action-item
						label="Open in Rebase Editor"
						href=${this.onOpenEditorUrl}
						icon="edit"
					></action-item>`)}
		</action-nav>`}};mL.styles=[O`
			.status {
				box-sizing: border-box;
				display: flex;
				align-items: center;
				gap: 0.6rem;
				width: 100%;
				max-width: 100%;
				margin-block: 0;
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
				color: #000;
				border-radius: 0.3rem;
				padding: 0.1rem 0.4rem;
			}

			:host([conflicts]) .status {
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor);
				color: #fff;
			}

			.label {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.icon,
			.steps,
			.actions {
				flex: none;
			}

			.md-code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}
		`],mA([eA({type:Boolean,reflect:!0})],mL.prototype,"conflicts",2),mA([eA({type:Object})],mL.prototype,"pausedOpStatus",2),mA([eA()],mL.prototype,"skipCommand",2),mA([eA()],mL.prototype,"continueCommand",2),mA([eA()],mL.prototype,"abortCommand",2),mA([eA()],mL.prototype,"openEditorCommand",2),mA([eA({type:Object})],mL.prototype,"webviewCommandContext",2),mL=mA([eP("gl-merge-rebase-status")],mL);var mN=Object.defineProperty,mH=Object.getOwnPropertyDescriptor,mB=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?mH(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&mN(t,r,a),a};let mW=class extends lit_element_i{get fetchedText(){let e;if(this.lastFetched)return 0!==(e="string"==typeof this.lastFetched?new Date(this.lastFetched):this.lastFetched).getTime()?th(e):void 0}render(){return ew`
			<gl-push-pull-button
				.branchState=${this.branchState}
				.state=${this.state}
				.fetchedText=${this.fetchedText}
				.branchName=${this.branchName}
			></gl-push-pull-button>
			<gl-fetch-button
				.branchState=${this.branchState}
				.fetchedText=${this.fetchedText}
				.state=${this.state}
			></gl-fetch-button>
		`}};mW.styles=O`
		:host {
			display: contents;
		}
	`,mB([eA({type:Object})],mW.prototype,"branchState",2),mB([eA({type:String})],mW.prototype,"branchName",2),mB([eA({type:Object})],mW.prototype,"lastFetched",2),mB([eA({type:Object})],mW.prototype,"state",2),mW=mB([eP("gl-git-actions-buttons")],mW);let mF=class extends lit_element_i{get upstream(){return this.branchState?.upstream?ew`<span class="inline-code">${this.branchState.upstream}</span>`:"remote"}render(){return ew`
			<gl-tooltip placement="bottom">
				<a
					href=${hY("gitlens.graph.fetch",this.state.webviewId,this.state.webviewInstanceId)}
					class="action-button"
				>
					<code-icon class="action-button__icon" icon="repo-fetch"></code-icon>
					Fetch
					${this.fetchedText?ew`<span class="action-button__small">(${this.fetchedText})</span>`:""}
				</a>
				<span slot="content">
					Fetch from ${this.upstream}
					${this.branchState?.provider?.name?ew` on ${this.branchState.provider.name}`:""}
					${this.fetchedText?ew`
								<hr />
								Last fetched ${this.fetchedText}
							`:ek}
				</span>
			</gl-tooltip>
		`}};mF.styles=[fC,h9,fk,hX],mB([eA({type:Object})],mF.prototype,"state",2),mB([eA({type:String})],mF.prototype,"fetchedText",2),mB([eA({type:Object})],mF.prototype,"branchState",2),mF=mB([eP("gl-fetch-button")],mF);let mG=class extends lit_element_i{get isBehind(){return(this.branchState?.behind??0)>0}get isAhead(){return(this.branchState?.ahead??0)>0}get upstream(){return this.branchState?.upstream?ew`<span class="inline-code">${this.branchState.upstream}</span>`:"remote"}renderBranchPrefix(){return ew`<span class="inline-code">${this.branchName}</span> is`}renderTooltipContent(e){if(!this.branchState)return ek;let t=this.branchState.provider?.name?ew` on ${this.branchState.provider.name}`:"";if("pull"===e){let e=ew`Pull ${tb("commit",this.branchState.behind)} from
			${this.upstream}${t}`;return this.isAhead?ew`
					${e}
					<hr />
					${this.renderBranchPrefix()} ${tb("commit",this.branchState.behind)} behind and
					${tb("commit",this.branchState.ahead)} ahead of ${this.upstream}${t}
				`:ew`
				${e}
				<hr />
				${this.renderBranchPrefix()} ${tb("commit",this.branchState.behind)} behind
				${this.upstream}${t}
			`}return ew`
			Push ${tb("commit",this.branchState.ahead)} to ${this.upstream}${t}
			<hr />
			${this.renderBranchPrefix()} ${tb("commit",this.branchState.ahead)} ahead of ${this.upstream}
		`}render(){if(!this.branchState||!this.isAhead&&!this.isBehind)return ek;let e=this.isBehind?"pull":"push",t=this.isBehind?"repo-pull":"repo-push",r=this.isBehind?"Pull":"Push";return ew`
			<gl-tooltip placement="bottom">
				<a
					href=${hY(`gitlens.graph.${e}`,this.state.webviewId,this.state.webviewInstanceId)}
					class="action-button${this.isBehind?" is-behind":""}${this.isAhead?" is-ahead":""}"
				>
					<code-icon class="action-button__icon" icon=${t}></code-icon>
					${r}
					<span>
						<span class="pill action-button__pill">
							${this.isBehind?ew`
										<span>
											${this.branchState.behind}
											<code-icon icon="arrow-down"></code-icon>
										</span>
									`:""}
							${this.isAhead?ew`
										<span>
											${this.isBehind?ew`&nbsp;&nbsp;`:""} ${this.branchState.ahead}
											<code-icon icon="arrow-up"></code-icon>
										</span>
									`:""}
						</span>
					</span>
				</a>
				<div slot="content">
					${this.renderTooltipContent(e)}
					${this.fetchedText?ew`<hr />
								Last fetched ${this.fetchedText}`:""}
				</div>
			</gl-tooltip>
			${this.isAhead&&this.isBehind?ew`
						<gl-tooltip placement="top" slot="anchor">
							<a
								href=${hY("gitlens.graph.pushWithForce",this.state.webviewId,this.state.webviewInstanceId)}
								class="action-button"
								aria-label="Force Push"
							>
								<code-icon icon="repo-force-push" aria-hidden="true"></code-icon>
							</a>
							<span slot="content">
								Force Push ${tb("commit",this.branchState?.ahead)} to ${this.upstream}
								${this.branchState?.provider?.name?ew` on ${this.branchState.provider.name}`:""}
							</span>
						</gl-tooltip>
					`:""}
		`}};mG.styles=[fC,h9,fk,hX,O`
			:host {
				display: contents;
			}

			.pill {
				display: inline-block;
				padding: 0.2rem 0.5rem;
				border-radius: 0.5rem;
				font-size: 1rem;
				font-weight: 500;
				line-height: 1.2;
				text-transform: uppercase;
				color: var(--vscode-foreground);
				background-color: var(--vscode-editorWidget-background);
			}
			.pill code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
			}
		`],mB([eA({type:Object})],mG.prototype,"branchState",2),mB([eA({type:Object})],mG.prototype,"state",2),mB([eA({type:String})],mG.prototype,"fetchedText",2),mB([eA({type:String})],mG.prototype,"branchName",2),mG=mB([eP("gl-push-pull-button")],mG);var mj=Object.defineProperty,mU=Object.getOwnPropertyDescriptor,mV=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?mU(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&mj(t,r,a),a};let mq=class extends r7(lit_element_i){constructor(){let e,t;super(...arguments),this.aiAllowed=!0,this._searchPositionSignal=(e=()=>{let{searchResults:e}=this.graphState;if(e?.ids==null||!this.graphState.filter.query)return 0;let t=this.getActiveRowInfo()?.id,r=t?e.ids[t]?.i:void 0;return null==r&&({index:r}=this.getClosestSearchResultIndex(e,{...this.graphState.filter})),r<1?1:r+1},new oD.Computed(e,t)),this.ensuredIds=new Set,this.ensuredSkippedIds=new Set,this.pendingEnsureRequests=new Map}get hasFilters(){return!!this.graphState.config?.onlyFollowFirstParent||null!=this.graphState.excludeTypes&&Object.values(this.graphState.excludeTypes).includes(!0)}get excludeRefs(){return Object.values(this.graphState.excludeRefs??{}).sort(mZ)}updated(e){this.aiAllowed=(this.graphState.config?.aiEnabled??!0)&&(this.graphState.orgSettings?.ai??!0),super.updated(e)}async onJumpToRefPromise(e){try{let t=await this._ipc.sendRequest(tK,{alt:e});return this._telemetry.sendEvent({name:"graph/action/jumpTo",data:{alt:e}}),t}catch{return}}async handleJumpToRef(e){let t=await this.onJumpToRefPromise(e.altKey);if(null!=t){let e=await this.ensureSearchResultRow(t.sha);if(null==e)return;this.dispatchEvent(new CustomEvent("gl-select-commits",{detail:e}))}}onOpenPullRequest(e){this._ipc.sendCommand(tB,{id:e.id})}onSearchOpenInView(){this._ipc.sendCommand(tW,{search:{...this.graphState.filter}})}onExcludeTypesChanged(e,t){this._ipc.sendCommand(tj,{key:e,value:t})}onRefIncludesChanged(e,t){this._ipc.sendCommand(tq,{branchesVisibility:e,refs:t})}getActiveRowInfo(){let{activeRow:e}=this.graphState;if(null==e)return;if(this._activeRowInfoCache?.row===e)return this._activeRowInfoCache?.info;let t=e.indexOf("|"),r={date:Number(e.substring(t+1)),id:e.substring(0,t)};return this._activeRowInfoCache={row:e,info:r},r}getNextOrPreviousSearchResultIndex(e,t,r,o){return t?e<r.count-1?e++:e=null!=o&&r.paging?.hasMore?-1:0:e>0?e--:e=null!=o&&r.paging?.hasMore?-1:r.count-1,e}getClosestSearchResultIndex(e,t,r=!0){let o,i,a;if(null==e.ids)return{index:0,id:void 0};let s=this.getActiveRowInfo(),c=s?.id;if(null==c)return{index:0,id:void 0};let u=e.ids[c];if(null!=u&&(o=u.i,i=c,a=o),null==o){let t,c,u,h,d=s?.date!=null?s.date+(r?1:-1):void 0;if(null==d)return{index:0,id:void 0};let{ids:p}=e;for(let e in p)Object.hasOwn(p,e)&&(c=p[e],{date:t,i:u}=c,r?t<d&&(null==h||t>h)&&(i=e,h=t,a=u):t>d&&(null==h||t<=h)&&(i=e,h=t,a=u));o=null==a?e.count-1:a+(r?-1:1)}return(o=this.getNextOrPreviousSearchResultIndex(o,r,e,t))===a?{index:o,id:i}:{index:o,id:void 0}}get searchPosition(){return this._searchPositionSignal.get()}get searchValid(){return this.graphState.filter.query.length>2}handleFilterChange(e){let t=e.target;if(null==t)return;let{checked:r}=t;switch(t.value){case"mergeCommits":this.changeGraphConfiguration({dimMergeCommits:r});break;case"onlyFollowFirstParent":this.changeGraphConfiguration({onlyFollowFirstParent:r});break;case"remotes":case"stashes":case"tags":{let e=t.value,o=this.graphState.excludeTypes?.[e];(null==o&&r||null!=o&&o!==r)&&this.onExcludeTypesChanged(e,r)}}}handleOnToggleRefsVisibilityClick(e,t,r){this._ipc.sendCommand(tG,{refs:t,visible:r})}handleBranchesVisibility(e){let t=e.target;null!=t&&this.onRefIncludesChanged(t.value)}async handleSearch(){this.graphState.searching=this.searchValid,this.searchValid||(this.graphState.searchResultsResponse=void 0);try{let e=await this._ipc.sendRequest(tJ,{search:this.searchValid?{...this.graphState.filter}:void 0});e.search&&e.results&&this.searchEl.logSearch(e.search),this.graphState.searchResultsResponse=e.results,null!=e.selectedRows&&(this.graphState.selectedRows=e.selectedRows)}catch{this.graphState.searchResultsResponse=void 0}this.graphState.searching=!1}handleSearchInput(e){this.graphState.filter=e.detail,this.handleSearch()}async onSearchPromise(e,t){try{let r=await this._ipc.sendRequest(tJ,{search:e,limit:t?.limit,more:t?.more});return this.graphState.searchResultsResponse=r.results,null!=r.selectedRows&&(this.graphState.selectedRows=r.selectedRows),r}catch{return}}async handleSearchNavigation(e){let t,r,o,{searchResults:i}=this.graphState;if(null==i)return;let a=e.detail?.direction??"next",s=i.count;"first"===a?(o=!1,t=0):"last"===a?(o=!1,t=-1):(o="next"===a,{index:t,id:r}=this.getClosestSearchResultIndex(i,{...this.graphState.filter},o));let c=0;for(;c<1e3;){if(c++,-1===t)if(o)if(this.graphState.filter.query&&i?.paging?.hasMore){let e;this.graphState.searching=!0;try{e=await this.onSearchPromise?.({...this.graphState.filter},{more:!0})}finally{this.graphState.searching=!1}e?.results==null||"error"in e.results?t=0:s<e.results.count?(i=e.results,t=s,s=i.count):t=0}else t=0;else if("last"===a&&null!=this.graphState.filter&&i?.paging?.hasMore){let e;this.graphState.searching=!0;try{e=await this.onSearchPromise({...this.graphState.filter},{limit:0,more:!0})}finally{this.graphState.searching=!1}e?.results==null||"error"in e.results||(s<e.results.count&&(s=(i=e.results).count),t=s)}else t=s-1;if(null!=(r=r??function(e,t){let{ids:r}=e;for(let e in r)if(Object.hasOwn(r,e)&&r[e].i===t)return e}(i,t))&&null!=(r=await this.ensureSearchResultRow(r)))break;this.graphState.searchResultsHidden=!0,t=this.getNextOrPreviousSearchResultIndex(t,o,i,{...this.graphState.filter})}null!=r&&this.dispatchEvent(new CustomEvent("gl-select-commits",{detail:r}))}async onEnsureRowPromise(e,t){try{return await this._ipc.sendRequest(tY,{id:e,select:t})}catch{return}}async ensureSearchResultRow(e){if(this.ensuredIds.has(e))return e;if(this.ensuredSkippedIds.has(e))return;let t=this.pendingEnsureRequests.get(e);if(null==t){let r=setTimeout(()=>{r=void 0,this.graphState.loading=!0},500);(t=(async()=>{let t=await this.onEnsureRowPromise(e,!1);if(null==r?this.graphState.loading=!1:clearTimeout(r),t?.id===e)return this.ensuredIds.add(e),e;null!=t&&this.ensuredSkippedIds.add(e)})()).finally(()=>this.pendingEnsureRequests.delete(e)),this.pendingEnsureRequests.set(e,t)}return t}handleSearchModeChanged(e){this._ipc.sendCommand(tV,{searchMode:e.detail.searchMode,useNaturalLanguage:e.detail.useNaturalLanguage})}handleMinimapToggled(){this.changeGraphConfiguration({minimap:!this.graphState.config?.minimap})}changeGraphConfiguration(e){this._ipc.sendCommand(tU,{changes:e})}handleMinimapDataTypeChanged(e){if(null==this.graphState.config)return;let t="lines"===e.target.value?"lines":"commits";this.graphState.config.minimapDataType!==t&&this.changeGraphConfiguration({minimapDataType:t})}handleMinimapAdditionalTypesChanged(e){if(this.graphState.config?.minimapMarkerTypes==null)return;let t=e.target,r=t.value;if(t.checked){if(!this.graphState.config.minimapMarkerTypes.includes(r)){let e=[...this.graphState.config.minimapMarkerTypes,r];this.changeGraphConfiguration({minimapMarkerTypes:e})}}else{let e=this.graphState.config.minimapMarkerTypes.indexOf(r);if(-1!==e){let t=[...this.graphState.config.minimapMarkerTypes];t.splice(e,1),this.changeGraphConfiguration({minimapMarkerTypes:t})}}}onRepositorySelectorClicked(e){switch(e.detail.part){case"label":this._ipc.sendCommand(tD);break;case"icon":hK(e.target,{name:"graph/action/openRepoOnRemote",data:{}})}}render(){let e=this.graphState.repositories?.find(e=>e.id===this.graphState.selectedRepository),{searchResults:t}=this.graphState,r=(this.graphState.repositories?.length??0)>1;return fy(ew`<header class="titlebar graph-app__header">
				<div class="titlebar__row titlebar__row--wrap">
					<div class="titlebar__group">
						<gl-repo-button-group
							?disabled=${this.graphState.loading||!r}
							?hasMultipleRepositories=${r}
							.repository=${e}
							.source=${{source:"graph"}}
							@gl-click=${this.onRepositorySelectorClicked}
							><span slot="tooltip">
								Switch to Another Repository...
								<hr />
								${e?.name}
							</span></gl-repo-button-group
						>
						${hZ(this.graphState.allowed&&e,()=>ew`
								<span><code-icon icon="chevron-right"></code-icon></span>${hZ(this.graphState.branchState?.pr,e=>ew`
										<gl-popover placement="bottom">
											<button slot="anchor" type="button" class="action-button">
												<issue-pull-request
													type="pr"
													identifier=${`#${e.id}`}
													status=${e.state}
													compact
												></issue-pull-request>
											</button>
											<div slot="content">
												<issue-pull-request
													type="pr"
													name=${e.title}
													url=${e.url}
													identifier=${`#${e.id}`}
													status=${e.state}
													.date=${e.updatedDate}
													.dateFormat=${this.graphState.config?.dateFormat}
													.dateStyle=${this.graphState.config?.dateStyle}
													details
													@gl-issue-pull-request-details=${()=>{this.onOpenPullRequest(e)}}
												>
												</issue-pull-request>
											</div>
										</gl-popover>
									`)}
								<gl-ref-button
									href=${hY("gitlens.graph.switchToAnotherBranch",this.graphState.webviewId,this.graphState.webviewInstanceId)}
									icon
									.ref=${this.graphState.branch}
									?worktree=${this.graphState.branchState?.worktree}
								>
									<div slot="tooltip">
										Switch Branch...
										<hr />
										<code-icon icon="git-branch" aria-hidden="true"></code-icon>
										<span class="inline-code">${this.graphState.branch?.name}</span>${hZ(this.graphState.branchState?.worktree,()=>ew`<i> (in a worktree)</i> `)}
									</div>
								</gl-ref-button>
								<gl-button class="jump-to-ref" appearance="toolbar" @click=${this.handleJumpToRef}>
									<code-icon icon="target"></code-icon>
									<span slot="tooltip">
										Jump to HEAD
										<br />
										[Alt] Jump to Reference...
									</span>
								</gl-button>
								<span>
									<code-icon icon="chevron-right"></code-icon>
								</span>
								<gl-git-actions-buttons
									.branchName=${this.graphState.branch?.name}
									.branchState=${this.graphState.branchState}
									.lastFetched=${this.graphState.lastFetched}
									.state=${this.graphState}
								></gl-git-actions-buttons>
							`)}
					</div>
					<div class="titlebar__group">
						<gl-tooltip placement="bottom">
							<a
								class="action-button"
								href=${h2("gitlens.gitCommands.branch",{state:{subcommand:"create",reference:this.graphState.branch},command:"branch",confirm:!0})}
							>
								<code-icon class="action-button__icon" icon="custom-start-work"></code-icon>
							</a>
							<span slot="content">
								Create New Branch from
								<code-icon icon="git-branch"></code-icon>
								<span class="inline-code">${this.graphState.branch?.name}</span>
							</span>
						</gl-tooltip>
						<gl-tooltip placement="bottom">
							<a
								href=${`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"graph"}))}`}
								class="action-button"
							>
								<code-icon icon="rocket"></code-icon>
							</a>
							<span slot="content">
								<strong>Launchpad</strong> &mdash; organizes your pull requests into actionable groups
								to help you focus and keep your team unblocked
							</span>
						</gl-tooltip>
						<gl-tooltip placement="bottom">
							<a
								href=${hY("gitlens.visualizeHistory.repo:graph",this.graphState.webviewId,this.graphState.webviewInstanceId)}
								class="action-button"
								aria-label=${"Open Visual History"}
							>
								<span>
									<code-icon
										class="action-button__icon"
										icon=${"graph-scatter"}
										aria-hidden="true"
									></code-icon>
								</span>
							</a>
							<span slot="content">
								<strong>Visual History</strong> — visualize the evolution of a repository, branch,
								folder, or file and identify when the most impactful changes were made and by whom
							</span>
						</gl-tooltip>
						<gl-tooltip placement="bottom">
							<a
								href=${"command:gitlens.showHomeView"}
								class="action-button"
								aria-label=${"Open GitLens Home View"}
							>
								<span>
									<code-icon
										class="action-button__icon"
										icon=${"gl-gitlens"}
										aria-hidden="true"
									></code-icon>
								</span>
							</a>
							<span slot="content">
								<strong>GitLens Home</strong> — track, manage, and collaborate on your branches and pull
								requests, all in one intuitive hub
							</span>
						</gl-tooltip>
						${hZ(null==this.graphState.subscription||!h1(this.graphState.subscription),()=>ew`
								<gl-feature-badge
									.source=${{source:"graph",detail:"badge"}}
									.subscription=${this.graphState.subscription}
								></gl-feature-badge>
							`)}
					</div>
				</div>

				${hZ(this.graphState.allowed&&null!=this.graphState.workingTreeStats&&(this.graphState.workingTreeStats.hasConflicts||this.graphState.workingTreeStats.pausedOpStatus),()=>ew`
						<div class="merge-conflict-warning">
							<gl-merge-rebase-status
								class="merge-conflict-warning__content"
								?conflicts=${this.graphState.workingTreeStats?.hasConflicts}
								.pausedOpStatus=${this.graphState.workingTreeStats?.pausedOpStatus}
								skipCommand="gitlens.graph.skipPausedOperation"
								continueCommand="gitlens.graph.continuePausedOperation"
								abortCommand="gitlens.graph.abortPausedOperation"
								openEditorCommand="gitlens.graph.openRebaseEditor"
								.webviewCommandContext=${{webview:this.graphState.webviewId,webviewInstance:this.graphState.webviewInstanceId}}
							></gl-merge-rebase-status>
						</div>
					`)}
				${hZ(this.graphState.allowed,()=>ew`
						<div class="titlebar__row">
							<div class="titlebar__group">
								<gl-tooltip placement="top" content="Branches Visibility">
									<sl-select
										value=${this.graphState.branchesVisibility??ek}
										@sl-change=${this.handleBranchesVisibility}
										hoist
									>
										<code-icon icon="chevron-down" slot="expand-icon"></code-icon>
										<sl-option value="all" ?disabled=${e?.virtual}> All Branches </sl-option>
										<sl-option value="smart" ?disabled=${e?.virtual}>
											Smart Branches
											${hZ(!e?.virtual,()=>ew`
													<gl-tooltip placement="right" slot="suffix">
														<code-icon icon="info"></code-icon>
														<span slot="content">
															Shows only relevant branches
															<br />
															<br />
															<i
																>Includes the current branch, its upstream, and its base
																or target branch</i
															>
														</span>
													</gl-tooltip>
												`,()=>ew` <code-icon icon="info" slot="suffix"></code-icon> `)}
										</sl-option>
										<sl-option value="favorited" ?disabled=${e?.virtual}>
											Favorited Branches
											<gl-tooltip placement="right" slot="suffix">
												<code-icon icon="info"></code-icon>
												<span slot="content">
													Shows only branches that have been starred as favorites
													<br />
													<br />
													<i>Also includes the current branch</i>
												</span>
											</gl-tooltip>
										</sl-option>
										<sl-option value="current">Current Branch</sl-option>
									</sl-select>
								</gl-tooltip>
								<div
									class=${`shrink ${!Object.values(this.graphState.excludeRefs??{}).length&&"hidden"}`}
								>
									<gl-popover
										class="popover"
										placement="bottom-start"
										trigger="click focus"
										?arrow=${!1}
										distance=${0}
									>
										<gl-tooltip placement="top" slot="anchor">
											<button type="button" id="hiddenRefs" class="action-button">
												<code-icon icon=${"eye-closed"}></code-icon>
												${Object.values(this.graphState.excludeRefs??{}).length}
												<code-icon
													class="action-button__more"
													icon="chevron-down"
													aria-hidden="true"
												></code-icon>
											</button>
											<span slot="content">Hidden Branches / Tags</span>
										</gl-tooltip>
										<div slot="content">
											<menu-label>Hidden Branches / Tags</menu-label>
											${hZ(this.excludeRefs.length>0,()=>ew`
													${fS(this.excludeRefs,e=>ew`
															<menu-item
																@click=${t=>{this.handleOnToggleRefsVisibilityClick(t,[e],!0)}}
																class="flex-gap"
															>
																${this.renderRemoteAvatarOrIcon(e)}
																<span>${e.name}</span>
															</menu-item>
														`)}
													<menu-item
														@click=${e=>{this.handleOnToggleRefsVisibilityClick(e,this.excludeRefs,!0)}}
													>
														Show All
													</menu-item>
												`)}
										</div>
									</gl-popover>
								</div>
								<gl-popover
									class="popover"
									placement="bottom-start"
									trigger="click focus"
									?arrow=${!1}
									distance=${0}
								>
									<gl-tooltip placement="top" slot="anchor">
										<button type="button" class="action-button">
											<code-icon icon=${`filter${this.hasFilters?"-filled":""}`}></code-icon>
											<code-icon
												class="action-button__more"
												icon="chevron-down"
												aria-hidden="true"
											></code-icon>
										</button>
										<span slot="content">Graph Filtering</span>
									</gl-tooltip>
									<div slot="content">
										<menu-label>Graph Filters</menu-label>
										${hZ(e?.virtual!==!0,()=>ew`
												<menu-item role="none">
													<gl-tooltip
														placement="right"
														content="Only follow the first parent of merge commits to provide a more linear history"
													>
														<gl-checkbox
															value="onlyFollowFirstParent"
															@gl-change-value=${this.handleFilterChange}
															?checked=${this.graphState.config?.onlyFollowFirstParent??!1}
														>
															Simplify Merge History
														</gl-checkbox>
													</gl-tooltip>
												</menu-item>
												<menu-divider></menu-divider>
												<menu-item role="none">
													<gl-checkbox
														value="remotes"
														@gl-change-value=${this.handleFilterChange}
														?checked=${this.graphState.excludeTypes?.remotes??!1}
													>
														Hide Remote-only Branches
													</gl-checkbox>
												</menu-item>
												<menu-item role="none">
													<gl-checkbox
														value="stashes"
														@gl-change-value=${this.handleFilterChange}
														?checked=${this.graphState.excludeTypes?.stashes??!1}
													>
														Hide Stashes
													</gl-checkbox>
												</menu-item>
											`)}
										<menu-item role="none">
											<gl-checkbox
												value="tags"
												@gl-change-value=${this.handleFilterChange}
												?checked=${this.graphState.excludeTypes?.tags??!1}
											>
												Hide Tags
											</gl-checkbox>
										</menu-item>
										<menu-divider></menu-divider>
										<menu-item role="none">
											<gl-checkbox
												value="mergeCommits"
												@gl-change-value=${this.handleFilterChange}
												?checked=${this.graphState.config?.dimMergeCommits??!1}
											>
												Dim Merge Commit Rows
											</gl-checkbox>
										</menu-item>
									</div>
								</gl-popover>
								<span>
									<span class="action-divider"></span>
								</span>
								<gl-search-box
									?aiAllowed=${this.aiAllowed}
									errorMessage=${this.graphState.searchResultsError?.error??""}
									?filter=${"filter"===this.graphState.defaultSearchMode}
									?naturalLanguage=${!!this.graphState.useNaturalLanguageSearch}
									?more=${t?.paging?.hasMore??!1}
									?resultsHidden=${this.graphState.searchResultsHidden}
									?resultsLoaded=${null!=t}
									?searching=${this.graphState.searching}
									step=${this.searchPosition}
									total=${t?.count??0}
									?valid=${this.searchValid}
									value=${this.graphState.filter.query}
									@gl-search-inputchange=${this.handleSearchInput}
									@gl-search-navigate=${this.handleSearchNavigation}
									@gl-search-openinview=${this.onSearchOpenInView}
									@gl-search-modechange=${this.handleSearchModeChanged}
								></gl-search-box>
								<span>
									<span class="action-divider"></span>
								</span>
								<span class="button-group">
									<gl-tooltip placement="bottom">
										<button
											type="button"
											role="checkbox"
											class="action-button"
											aria-label="Toggle Minimap"
											aria-checked=${this.graphState.config?.minimap??!1}
											@click=${()=>this.handleMinimapToggled()}
										>
											<code-icon class="action-button__icon" icon="graph-line"></code-icon>
										</button>
										<span slot="content">Toggle Minimap</span>
									</gl-tooltip>
									<gl-popover
										class="popover"
										placement="bottom-end"
										trigger="click focus"
										?arrow=${!1}
										distance=${0}
									>
										<gl-tooltip placement="top" distance=${7} slot="anchor">
											<button type="button" class="action-button" aria-label="Minimap Options">
												<code-icon
													class="action-button__more"
													icon="chevron-down"
													aria-hidden="true"
												></code-icon>
											</button>
											<span slot="content">Minimap Options</span>
										</gl-tooltip>
										<div slot="content">
											<menu-label>Minimap</menu-label>
											<menu-item role="none">
												<gl-radio-group
													value=${this.graphState.config?.minimapDataType??"commits"}
													@gl-change-value=${this.handleMinimapDataTypeChanged}
												>
													<gl-radio name="minimap-datatype" value="commits">
														Commits
													</gl-radio>
													<gl-radio name="minimap-datatype" value="lines">
														Lines Changed
													</gl-radio>
												</gl-radio-group>
											</menu-item>
											<menu-divider></menu-divider>
											<menu-label>Markers</menu-label>
											<menu-item role="none">
												<gl-checkbox
													value="localBranches"
													@gl-change-value=${this.handleMinimapAdditionalTypesChanged}
													?checked=${this.graphState.config?.minimapMarkerTypes?.includes("localBranches")??!1}
												>
													<span
														class="minimap-marker-swatch"
														data-marker="localBranches"
													></span>
													Local Branches
												</gl-checkbox>
											</menu-item>
											<menu-item role="none">
												<gl-checkbox
													value="remoteBranches"
													@gl-change-value=${this.handleMinimapAdditionalTypesChanged}
													?checked=${this.graphState.config?.minimapMarkerTypes?.includes("remoteBranches")??!0}
												>
													<span
														class="minimap-marker-swatch"
														data-marker="remoteBranches"
													></span>
													Remote Branches
												</gl-checkbox>
											</menu-item>
											<menu-item role="none">
												<gl-checkbox
													value="pullRequests"
													@gl-change-value=${this.handleMinimapAdditionalTypesChanged}
													?checked=${this.graphState.config?.minimapMarkerTypes?.includes("pullRequests")??!0}
												>
													<span
														class="minimap-marker-swatch"
														data-marker="pullRequests"
													></span>
													Pull Requests
												</gl-checkbox>
											</menu-item>
											<menu-item role="none">
												<gl-checkbox
													value="stashes"
													@gl-change-value=${this.handleMinimapAdditionalTypesChanged}
													?checked=${this.graphState.config?.minimapMarkerTypes?.includes("stashes")??!1}
												>
													<span class="minimap-marker-swatch" data-marker="stashes"></span>
													Stashes
												</gl-checkbox>
											</menu-item>
											<menu-item role="none">
												<gl-checkbox
													value="tags"
													@gl-change-value=${this.handleMinimapAdditionalTypesChanged}
													?checked=${this.graphState.config?.minimapMarkerTypes?.includes("tags")??!0}
												>
													<span class="minimap-marker-swatch" data-marker="tags"></span>
													Tags
												</gl-checkbox>
											</menu-item>
										</div>
									</gl-popover>
								</span>
							</div>
						</div>
					`)}
				<div
					class=${`progress-container infinite${this.graphState.isBusy?" active":""}`}
					role="progressbar"
				>
					<div class="progress-bar"></div>
				</div>
			</header>`)}renderRemoteAvatarOrIcon(e){return e.avatarUrl?ew`<img class="branch-menu__avatar" alt=${e.name} src=${e.avatarUrl} />`:ew`<code-icon class="branch-menu__icon" icon=${function(e){switch(e){case"head":return"vm";case"remote":return"cloud";case"tag":return"tag";default:return""}}(e.type)}></code-icon>`}};function mZ(e,t){let r=e.name.localeCompare(t.name);return 0===r&&e.type===iu?-1:r}mq.styles=[h9,fC,hX,fk,fT,f_,fE,fR],mV([e1({context:"ipc"})],mq.prototype,"_ipc",2),mV([e1({context:"telemetry"})],mq.prototype,"_telemetry",2),mV([e1({context:"graph-state-context",subscribe:!0})],mq.prototype,"graphState",2),mV([eL()],mq.prototype,"aiAllowed",2),mV([fx(250)],mq.prototype,"handleSearchInput",1),mV([fx(250)],mq.prototype,"onRepositorySelectorClicked",1),mV([eH("gl-search-box")],mq.prototype,"searchEl",2),mq=mV([eP("gl-graph-header")],mq);var mK=S(9980);function mY(e){return e[Symbol.iterator]().next().value}function*mQ(e,t){for(let r of e)yield*t(r)}function*mX(...e){for(let t of e)if(null!=t)for(let e of t)yield e}let mJ=new Set(["children","localName","ref","style","className"]),m0=new WeakMap,m1=(e,t,r,o,i)=>{let a,s,c=i?.[t];void 0===c?(e[t]=r,null==r&&t in HTMLElement.prototype&&e.removeAttribute(t)):r!==o&&(void 0===(a=m0.get(e))&&m0.set(e,a=new Map),s=a.get(c),void 0!==r?void 0===s?(a.set(c,s={handleEvent:r}),e.addEventListener(c,s)):s.handleEvent=r:void 0!==s&&(a.delete(c),e.removeEventListener(c,s)))};function m2(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var m5=m2(),m3={exec:()=>null};function m6(e,t=""){let r="string"==typeof e?e:e.source,o={replace:(e,t)=>{let i="string"==typeof t?t:t.source;return i=i.replace(m4.caret,"$1"),r=r.replace(e,i),o},getRegex:()=>new RegExp(r,t)};return o}var m4={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},m8=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,m7=/(?:[*+-]|\d{1,9}[.)])/,m9=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,be=m6(m9).replace(/bull/g,m7).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),bt=m6(m9).replace(/bull/g,m7).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),br=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,bo=/(?!\s*\])(?:\\.|[^\[\]\\])+/,bn=m6(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",bo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),bi=m6(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,m7).getRegex(),ba="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",bs=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,bl=m6("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",bs).replace("tag",ba).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),bc=m6(br).replace("hr",m8).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ba).getRegex(),bu={blockquote:m6(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",bc).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:bn,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:m8,html:bl,lheading:be,list:bi,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:bc,table:m3,text:/^[^\n]+/},bh=m6("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",m8).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ba).getRegex(),bd={...bu,lheading:bt,table:bh,paragraph:m6(br).replace("hr",m8).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",bh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ba).getRegex()},bp={...bu,html:m6(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",bs).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:m3,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:m6(br).replace("hr",m8).replace("heading",` *#{1,6} *[^
]`).replace("lheading",be).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},bf=/^( {2,}|\\)\n(?!\s*$)/,bg=/[\p{P}\p{S}]/u,bm=/[\s\p{P}\p{S}]/u,bb=/[^\s\p{P}\p{S}]/u,bv=m6(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,bm).getRegex(),by=/(?!~)[\p{P}\p{S}]/u,bw=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,bS=m6(bw,"u").replace(/punct/g,bg).getRegex(),bx=m6(bw,"u").replace(/punct/g,by).getRegex(),bC="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",bk=m6(bC,"gu").replace(/notPunctSpace/g,bb).replace(/punctSpace/g,bm).replace(/punct/g,bg).getRegex(),b_=m6(bC,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,by).getRegex(),bR=m6("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,bb).replace(/punctSpace/g,bm).replace(/punct/g,bg).getRegex(),bT=m6(/\\(punct)/,"gu").replace(/punct/g,bg).getRegex(),bE=m6(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),bM=m6(bs).replace("(?:--\x3e|$)","--\x3e").getRegex(),bO=m6("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",bM).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),b$=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,bI=m6(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",b$).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),bz=m6(/^!?\[(label)\]\[(ref)\]/).replace("label",b$).replace("ref",bo).getRegex(),bP=m6(/^!?\[(ref)\](?:\[\])?/).replace("ref",bo).getRegex(),bD=m6("reflink|nolink(?!\\()","g").replace("reflink",bz).replace("nolink",bP).getRegex(),bA={_backpedal:m3,anyPunctuation:bT,autolink:bE,blockSkip:/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g,br:bf,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:m3,emStrongLDelim:bS,emStrongRDelimAst:bk,emStrongRDelimUnd:bR,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:bI,nolink:bP,punctuation:bv,reflink:bz,reflinkSearch:bD,tag:bO,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:m3},bL={...bA,link:m6(/^!?\[(label)\]\((.*?)\)/).replace("label",b$).getRegex(),reflink:m6(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",b$).getRegex()},bN={...bA,emStrongRDelimAst:b_,emStrongLDelim:bx,url:m6(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},bH={...bN,br:m6(bf).replace("{2,}","*").getRegex(),text:m6(bN.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},bB={normal:bu,gfm:bd,pedantic:bp},bW={normal:bA,gfm:bN,breaks:bH,pedantic:bL},bF={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bG=e=>bF[e];function bj(e,t){if(t){if(m4.escapeTest.test(e))return e.replace(m4.escapeReplace,bG)}else if(m4.escapeTestNoEncode.test(e))return e.replace(m4.escapeReplaceNoEncode,bG);return e}function bU(e){try{e=encodeURI(e).replace(m4.percentDecode,"%")}catch{return null}return e}function bV(e,t){let r=e.replace(m4.findPipe,(e,t,r)=>{let o=!1,i=t;for(;--i>=0&&"\\"===r[i];)o=!o;return o?"|":" |"}).split(m4.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(m4.slashPipe,"|");return r}function bq(e,t,r){let o=e.length;if(0===o)return"";let i=0;for(;i<o;){let a=e.charAt(o-i-1);if(a!==t||r)if(a!==t&&r)i++;else break;else i++}return e.slice(0,o-i)}function bZ(e,t,r,o,i){let a=t.href,s=t.title||null,c=e[1].replace(i.other.outputLinkReplace,"$1");o.state.inLink=!0;let u={type:"!"===e[0].charAt(0)?"image":"link",raw:r,href:a,title:s,text:c,tokens:o.inlineTokens(c)};return o.state.inLink=!1,u}var bK=class{options;rules;lexer;constructor(e){this.options=e||m5}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:bq(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],r=function(e,t,r){let o=e.match(r.other.indentCodeCompensation);if(null===o)return t;let i=o[1];return t.split(`
`).map(e=>{let t=e.match(r.other.beginningSpace);if(null===t)return e;let[o]=t;return o.length>=i.length?e.slice(i.length):e}).join(`
`)}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=bq(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:bq(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=bq(t[0],`
`).split(`
`),r="",o="",i=[];for(;e.length>0;){let t=!1,a=[],s;for(s=0;s<e.length;s++)if(this.rules.other.blockquoteStart.test(e[s]))a.push(e[s]),t=!0;else if(t)break;else a.push(e[s]);e=e.slice(s);let c=a.join(`
`),u=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,o=o?`${o}
${u}`:u;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=h,0===e.length)break;let d=i.at(-1);if(d?.type==="code")break;if(d?.type==="blockquote"){let t=d.raw+`
`+e.join(`
`),a=this.blockquote(t);i[i.length-1]=a,r=r.substring(0,r.length-d.raw.length)+a.raw,o=o.substring(0,o.length-d.text.length)+a.text;break}if(d?.type==="list"){let t=d.raw+`
`+e.join(`
`),a=this.list(t);i[i.length-1]=a,r=r.substring(0,r.length-d.raw.length)+a.raw,o=o.substring(0,o.length-d.raw.length)+a.raw,e=t.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:o}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r=t[1].trim(),o=r.length>1,i={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");let a=this.rules.other.listItemRegex(r),s=!1;for(;e;){let r=!1,o="",c="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let u=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),h=e.split(`
`,1)[0],d=!u.trim(),p=0;if(this.options.pedantic?(p=2,c=u.trimStart()):d?p=t[1].length+1:(p=(p=t[2].search(this.rules.other.nonSpaceChar))>4?1:p,c=u.slice(p),p+=t[1].length),d&&this.rules.other.blankLine.test(h)&&(o+=h+`
`,e=e.substring(h.length+1),r=!0),!r){let t=this.rules.other.nextBulletRegex(p),r=this.rules.other.hrRegex(p),i=this.rules.other.fencesBeginRegex(p),a=this.rules.other.headingBeginRegex(p),s=this.rules.other.htmlBeginRegex(p);for(;e;){let f=e.split(`
`,1)[0],g;if(h=f,g=this.options.pedantic?h=h.replace(this.rules.other.listReplaceNesting,"  "):h.replace(this.rules.other.tabCharGlobal,"    "),i.test(h)||a.test(h)||s.test(h)||t.test(h)||r.test(h))break;if(g.search(this.rules.other.nonSpaceChar)>=p||!h.trim())c+=`
`+g.slice(p);else{if(d||u.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||i.test(u)||a.test(u)||r.test(u))break;c+=`
`+h}d||h.trim()||(d=!0),o+=f+`
`,e=e.substring(f.length+1),u=g.slice(p)}}i.loose||(s?i.loose=!0:this.rules.other.doubleBlankLine.test(o)&&(s=!0));let f=null,g;this.options.gfm&&(f=this.rules.other.listIsTask.exec(c))&&(g="[ ] "!==f[0],c=c.replace(this.rules.other.listReplaceTask,"")),i.items.push({type:"list_item",raw:o,task:!!f,checked:g,loose:!1,text:c,tokens:[]}),i.raw+=o}let c=i.items.at(-1);if(!c)return;c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd(),i.raw=i.raw.trimEnd();for(let e=0;e<i.items.length;e++)if(this.lexer.state.top=!1,i.items[e].tokens=this.lexer.blockTokens(i.items[e].text,[]),!i.loose){let t=i.items[e].tokens.filter(e=>"space"===e.type);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}if(i.loose)for(let e=0;e<i.items.length;e++)i.items[e].loose=!0;return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:r,title:o}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let r=bV(t[1]),o=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===o.length){for(let e of o)this.rules.other.tableAlignRight.test(e)?a.align.push("right"):this.rules.other.tableAlignCenter.test(e)?a.align.push("center"):this.rules.other.tableAlignLeft.test(e)?a.align.push("left"):a.align.push(null);for(let e=0;e<r.length;e++)a.header.push({text:r[e],tokens:this.lexer.inline(r[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(bV(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=bq(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(")"))return -1;let r=0;for(let o=0;o<e.length;o++)if("\\"===e[o])o++;else if("("===e[o])r++;else if(e[o]===t[1]&&--r<0)return o;return r>0?-2:-1}(t[2],"()");if(-2===e)return;if(e>-1){let r=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],o="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(r);e&&(r=e[1],o=e[3])}else o=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(r=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?r.slice(1):r.slice(1,-1)),bZ(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let e=t[(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=r[0].charAt(0);return{type:"text",raw:e,text:e}}return bZ(r,e,r[0],this.lexer,this.rules)}}emStrong(e,t,r=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!(!o||o[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[2])||!r||this.rules.inline.punctuation.exec(r))){let r=[...o[0]].length-1,i,a,s=r,c=0,u="*"===o[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+r);null!=(o=u.exec(t));){if(!(i=o[1]||o[2]||o[3]||o[4]||o[5]||o[6]))continue;if(a=[...i].length,o[3]||o[4]){s+=a;continue}if((o[5]||o[6])&&r%3&&!((r+a)%3)){c+=a;continue}if((s-=a)>0)continue;a=Math.min(a,a+s+c);let t=[...o[0]][0].length,u=e.slice(0,r+o.index+t+a);if(Math.min(r,a)%2){let e=u.slice(1,-1);return{type:"em",raw:u,text:e,tokens:this.lexer.inlineTokens(e)}}let h=u.slice(2,-2);return{type:"strong",raw:u,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(e),o=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return r&&o&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,r;return r="@"===t[2]?"mailto:"+(e=t[1]):e=t[1],{type:"link",raw:t[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,r;if("@"===t[2])r="mailto:"+(e=t[0]);else{let o;do o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(o!==t[0])e=t[0],r="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},bY=class l{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||m5,this.options.tokenizer=this.options.tokenizer||new bK,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:m4,block:bB.normal,inline:bW.normal};this.options.pedantic?(t.block=bB.pedantic,t.inline=bW.pedantic):this.options.gfm&&(t.block=bB.gfm,this.options.breaks?t.inline=bW.breaks:t.inline=bW.gfm),this.tokenizer.rules=t}static get rules(){return{block:bB,inline:bW}}static lex(e,t){return new l(t).lex(e)}static lexInline(e,t){return new l(t).inlineTokens(e)}lex(e){e=e.replace(m4.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){for(this.options.pedantic&&(e=e.replace(m4.tabCharGlobal,"    ").replace(m4.spaceLine,""));e;){let o;if(this.options.extensions?.block?.some(r=>!!(o=r.call({lexer:this},e,t))&&(e=e.substring(o.raw.length),t.push(o),!0)))continue;if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length);let r=t.at(-1);1===o.raw.length&&void 0!==r?r.raw+=`
`:t.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length);let r=t.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+o.raw,r.text+=`
`+o.text,this.inlineQueue.at(-1).src=r.text):t.push(o);continue}if((o=this.tokenizer.fences(e))||(o=this.tokenizer.heading(e))||(o=this.tokenizer.hr(e))||(o=this.tokenizer.blockquote(e))||(o=this.tokenizer.list(e))||(o=this.tokenizer.html(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length);let r=t.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+o.raw,r.text+=`
`+o.raw,this.inlineQueue.at(-1).src=r.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title},t.push(o));continue}if((o=this.tokenizer.table(e))||(o=this.tokenizer.lheading(e))){e=e.substring(o.raw.length),t.push(o);continue}let i=e;if(this.options.extensions?.startBlock){let t=1/0,r=e.slice(1),o;this.options.extensions.startBlock.forEach(e=>{"number"==typeof(o=e.call({lexer:this},r))&&o>=0&&(t=Math.min(t,o))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(o=this.tokenizer.paragraph(i))){let a=t.at(-1);r&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(o),r=i.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length);let r=t.at(-1);r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+o.raw,r.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(o);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r=e,o=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(o=this.tokenizer.rules.inline.reflinkSearch.exec(r));)e.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(o=this.tokenizer.rules.inline.anyPunctuation.exec(r));)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(o=this.tokenizer.rules.inline.blockSkip.exec(r));)r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,a="";for(;e;){let o;if(i||(a=""),i=!1,this.options.extensions?.inline?.some(r=>!!(o=r.call({lexer:this},e,t))&&(e=e.substring(o.raw.length),t.push(o),!0)))continue;if((o=this.tokenizer.escape(e))||(o=this.tokenizer.tag(e))||(o=this.tokenizer.link(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let r=t.at(-1);"text"===o.type&&r?.type==="text"?(r.raw+=o.raw,r.text+=o.text):t.push(o);continue}if((o=this.tokenizer.emStrong(e,r,a))||(o=this.tokenizer.codespan(e))||(o=this.tokenizer.br(e))||(o=this.tokenizer.del(e))||(o=this.tokenizer.autolink(e))||!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,r=e.slice(1),o;this.options.extensions.startInline.forEach(e=>{"number"==typeof(o=e.call({lexer:this},r))&&o>=0&&(t=Math.min(t,o))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),"_"!==o.raw.slice(-1)&&(a=o.raw.slice(-1)),i=!0;let r=t.at(-1);r?.type==="text"?(r.raw+=o.raw,r.text+=o.text):t.push(o);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return t}},bQ=class{options;parser;constructor(e){this.options=e||m5}space(e){return""}code({text:e,lang:t,escaped:r}){let o=(t||"").match(m4.notSpaceStart)?.[0],i=e.replace(m4.endingNewline,"")+`
`;return o?'<pre><code class="language-'+bj(o)+'">'+(r?i:bj(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:bj(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,r=e.start,o="";for(let t=0;t<e.items.length;t++){let r=e.items[t];o+=this.listitem(r)}let i=t?"ol":"ul";return"<"+i+(t&&1!==r?' start="'+r+'"':"")+`>
`+o+"</"+i+`>
`}listitem(e){let t="";if(e.task){let r=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=r+" "+bj(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):t+=r+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",r="";for(let t=0;t<e.header.length;t++)r+=this.tablecell(e.header[t]);t+=this.tablerow({text:r});let o="";for(let t=0;t<e.rows.length;t++){let i=e.rows[t];r="";for(let e=0;e<i.length;e++)r+=this.tablecell(i[e]);o+=this.tablerow({text:r})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+o+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+t+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${bj(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:r}){let o=this.parser.parseInline(r),i=bU(e);if(null===i)return o;let a='<a href="'+(e=i)+'"';return t&&(a+=' title="'+bj(t)+'"'),a+=">"+o+"</a>"}image({href:e,title:t,text:r,tokens:o}){o&&(r=this.parser.parseInline(o,this.parser.textRenderer));let i=bU(e);if(null===i)return bj(r);e=i;let a=`<img src="${e}" alt="${r}"`;return t&&(a+=` title="${bj(t)}"`),a+=">"}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:bj(e.text)}},bX=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},bJ=class l{options;renderer;textRenderer;constructor(e){this.options=e||m5,this.options.renderer=this.options.renderer||new bQ,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new bX}static parse(e,t){return new l(t).parse(e)}static parseInline(e,t){return new l(t).parseInline(e)}parse(e,t=!0){let r="";for(let o=0;o<e.length;o++){let i=e[o];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(i.type)){r+=e||"";continue}}switch(i.type){case"space":r+=this.renderer.space(i);continue;case"hr":r+=this.renderer.hr(i);continue;case"heading":r+=this.renderer.heading(i);continue;case"code":r+=this.renderer.code(i);continue;case"table":r+=this.renderer.table(i);continue;case"blockquote":r+=this.renderer.blockquote(i);continue;case"list":r+=this.renderer.list(i);continue;case"html":r+=this.renderer.html(i);continue;case"def":r+=this.renderer.def(i);continue;case"paragraph":r+=this.renderer.paragraph(i);continue;case"text":{let a=i,s=this.renderer.text(a);for(;o+1<e.length&&"text"===e[o+1].type;)a=e[++o],s+=`
`+this.renderer.text(a);t?r+=this.renderer.paragraph({type:"paragraph",raw:s,text:s,tokens:[{type:"text",raw:s,text:s,escaped:!0}]}):r+=s;continue}default:{let e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return r}parseInline(e,t=this.renderer){let r="";for(let o=0;o<e.length;o++){let i=e[o];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=e||"";continue}}switch(i.type){case"escape":case"text":r+=t.text(i);break;case"html":r+=t.html(i);break;case"link":r+=t.link(i);break;case"image":r+=t.image(i);break;case"strong":r+=t.strong(i);break;case"em":r+=t.em(i);break;case"codespan":r+=t.codespan(i);break;case"br":r+=t.br(i);break;case"del":r+=t.del(i);break;default:{let e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return r}},b0=class{options;block;constructor(e){this.options=e||m5}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?bY.lex:bY.lexInline}provideParser(){return this.block?bJ.parse:bJ.parseInline}},b1=new class{defaults=m2();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=bJ;Renderer=bQ;TextRenderer=bX;Lexer=bY;Tokenizer=bK;Hooks=b0;constructor(...e){this.use(...e)}walkTokens(e,t){let r=[];for(let o of e)switch(r=r.concat(t.call(this,o)),o.type){case"table":for(let e of o.header)r=r.concat(this.walkTokens(e.tokens,t));for(let e of o.rows)for(let o of e)r=r.concat(this.walkTokens(o.tokens,t));break;case"list":r=r.concat(this.walkTokens(o.items,t));break;default:{let e=o;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(o=>{let i=e[o].flat(1/0);r=r.concat(this.walkTokens(i,t))}):e.tokens&&(r=r.concat(this.walkTokens(e.tokens,t)))}}return r}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let r={...e};if(r.async=this.defaults.async||r.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let r=t.renderers[e.name];r?t.renderers[e.name]=function(...t){let o=e.renderer.apply(this,t);return!1===o&&(o=r.apply(this,t)),o}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let r=t[e.level];r?r.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),r.extensions=t),e.renderer){let t=this.defaults.renderer||new bQ(this.defaults);for(let r in e.renderer){if(!(r in t))throw Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;let o=e.renderer[r],i=t[r];t[r]=(...e)=>{let r=o.apply(t,e);return!1===r&&(r=i.apply(t,e)),r||""}}r.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new bK(this.defaults);for(let r in e.tokenizer){if(!(r in t))throw Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let o=e.tokenizer[r],i=t[r];t[r]=(...e)=>{let r=o.apply(t,e);return!1===r&&(r=i.apply(t,e)),r}}r.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new b0;for(let r in e.hooks){if(!(r in t))throw Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;let o=e.hooks[r],i=t[r];b0.passThroughHooks.has(r)?t[r]=e=>{if(this.defaults.async)return Promise.resolve(o.call(t,e)).then(e=>i.call(t,e));let r=o.call(t,e);return i.call(t,r)}:t[r]=(...e)=>{let r=o.apply(t,e);return!1===r&&(r=i.apply(t,e)),r}}r.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,o=e.walkTokens;r.walkTokens=function(e){let r=[];return r.push(o.call(this,e)),t&&(r=r.concat(t.call(this,e))),r}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return bY.lex(e,t??this.defaults)}parser(e,t){return bJ.parse(e,t??this.defaults)}parseMarkdown(e){return(t,r)=>{let o={...r},i={...this.defaults,...o},a=this.onError(!!i.silent,!!i.async);if(!0===this.defaults.async&&!1===o.async)return a(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||null===t)return a(Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return a(Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=e);let s=i.hooks?i.hooks.provideLexer():e?bY.lex:bY.lexInline,c=i.hooks?i.hooks.provideParser():e?bJ.parse:bJ.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(t):t).then(e=>s(e,i)).then(e=>i.hooks?i.hooks.processAllTokens(e):e).then(e=>i.walkTokens?Promise.all(this.walkTokens(e,i.walkTokens)).then(()=>e):e).then(e=>c(e,i)).then(e=>i.hooks?i.hooks.postprocess(e):e).catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let e=s(t,i);i.hooks&&(e=i.hooks.processAllTokens(e)),i.walkTokens&&this.walkTokens(e,i.walkTokens);let r=c(e,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e="<p>An error occurred:</p><pre>"+bj(r.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(r);throw r}}};function b2(e,t){return b1.parse(e,t)}b2.options=b2.setOptions=function(e){return b1.setOptions(e),b2.defaults=b1.defaults,m5=b2.defaults,b2},b2.getDefaults=m2,b2.defaults=m5,b2.use=function(...e){return b1.use(...e),b2.defaults=b1.defaults,m5=b2.defaults,b2},b2.walkTokens=function(e,t){return b1.walkTokens(e,t)},b2.parseInline=b1.parseInline,b2.Parser=bJ,b2.parser=bJ.parse,b2.Renderer=bQ,b2.TextRenderer=bX,b2.Lexer=bY,b2.lexer=bY.lex,b2.Tokenizer=bK,b2.Hooks=b0,b2.parse=b2,b2.options,b2.setOptions,b2.use,b2.walkTokens,b2.parseInline,bJ.parse,bY.lex;var b5=Object.defineProperty,b3=Object.getOwnPropertyDescriptor,b6=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?b3(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&b5(t,r,a),a};let b4=class extends lit_element_i{constructor(){super(...arguments),this.markdown="",this.density="compact"}render(){return ew`${this.markdown?p5(this.renderMarkdown(this.markdown),"Loading..."):""}`}async renderMarkdown(e){b2.setOptions({gfm:!0}),b2.use({renderer:{image:function({href:e,title:t,text:r}){let o=[],i=[];return e&&({href:e,dimensions:o}=function(e){let t=[],r=e.split("|").map(e=>e.trim());e=r[0];let o=r[1];if(o){let e=/height=(\d+)/.exec(o),r=/width=(\d+)/.exec(o),i=e?e[1]:"",a=r?r[1]:"",s=isFinite(parseInt(a)),c=isFinite(parseInt(i));s&&t.push(`width="${a}"`),c&&t.push(`height="${i}"`)}return{href:e,dimensions:t}}(e),i.push(`src="${vo(e)}"`)),r&&i.push(`alt="${vo(r)}"`),t&&i.push(`title="${vo(t)}"`),o.length&&(i=i.concat(o)),`<img ${i.join(" ")}>`},paragraph:function({tokens:e}){let t=this.parser.parseInline(e);return`<p>${t}</p>`},link:function({href:e,title:t,tokens:r}){if("string"!=typeof e)return"";let o=this.parser.parseInline(r);return e===o&&(o=vn(o)),t="string"==typeof t?vo(vn(t)):"",e=vn(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),`<a href="${e}" title="${t||e}" draggable="false">${o}</a>`},code:function({text:e,lang:t}){return e=e.replace(/</g,"&lt;"),`<pre class="language-${t}"><code>${e}</code></pre>`},codespan:function({text:e}){return e=e.replace(/</g,"&lt;"),`<code>${e}</code>`}}});let t=await b2.parse(e.replace(vt,e=>`\\${e}`));return pj(t=function(e){let t,r=[],o=0,i=0;for(;null!==(t=vr.exec(e));){o<(i=t.index||0)&&r.push(e.substring(o,i)),o=(t.index||0)+t[0].length;let[,a,s]=t;r.push(a?`$(${s})`:function(e){let[,t,r]=b9.exec(e.id)??[void 0,"error",void 0];return t.startsWith("gitlens-")&&(t=`gl-${t.substring(8)}`),`<code-icon icon="${t}"${r?` modifier="${r}"`:""}></code-icon>`}({id:s}))}return o<e.length&&r.push(e.substring(o)),r.join("")}(t))}};b4.styles=[hX,O`
			:host {
				--markdown-compact-block-spacing: 8px;
				--markdown-list-spacing: 20px;
			}

			a,
			a code {
				text-decoration: none;
				color: var(--vscode-textLink-foreground);
			}

			a:hover,
			a:hover code {
				color: var(--vscode-textLink-activeForeground);
			}

			a:hover:not(.disabled) {
				cursor: pointer;
			}

			p,
			.code,
			ul,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				margin-inline: 0;
			}

			:where(:host([density='compact'])) p,
			:where(:host([density='compact'])) .code,
			:where(:host([density='compact'])) ul,
			:where(:host([density='compact'])) h1,
			:where(:host([density='compact'])) h2,
			:where(:host([density='compact'])) h3,
			:where(:host([density='compact'])) h4,
			:where(:host([density='compact'])) h5,
			:where(:host([density='compact'])) h6 {
				margin-block: var(--markdown-compact-block-spacing);
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				line-height: 1.1;
			}

			code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}

			code code-icon {
				color: inherit;
				font-size: inherit;
				vertical-align: middle;
			}

			p:first-child,
			.code:first-child,
			ul:first-child {
				margin-top: 0;
			}

			p:last-child,
			.code:last-child,
			ul:last-child {
				margin-bottom: 0;
			}

			/* MarkupContent Layout */
			ul {
				padding-left: var(--markdown-list-spacing);
			}
			ol {
				padding-left: var(--markdown-list-spacing);
			}

			li > p {
				margin-bottom: 0;
			}

			li > ul {
				margin-top: 0;
			}
		`],b6([eA({type:String})],b4.prototype,"markdown",2),b6([eA({type:String,reflect:!0})],b4.prototype,"density",2),b4=b6([eP("gl-markdown")],b4);let b8="[A-Za-z0-9-]+",b7="~[A-Za-z]+",b9=RegExp(`^(${b8})(${b7})?$`),ve=RegExp(`\\$\\(${b8}(?:${b7})?\\)`,"g"),vt=RegExp(`\\\\${ve.source}`,"g"),vr=RegExp(`(\\\\)?\\$\\((${b8}(?:${b7})?)\\)`,"g");function vo(e){return e.replace(/"/g,"&quot;")}function vn(e){return e?e.replace(/\\([\\`*_{}[\]()#+\-.!~])/g,"$1"):e}let vi=(({react:e,tagName:t,elementClass:r,events:o,displayName:i})=>{let a=new Set(Object.keys(o??{})),s=e.forwardRef((i,s)=>{let c=e.useRef(new Map),u=e.useRef(null),h={},d={};for(let[e,t]of Object.entries(i))mJ.has(e)?h["className"===e?"class":e]=t:a.has(e)||e in r.prototype?d[e]=t:h[e]=t;return e.useLayoutEffect(()=>{if(null===u.current)return;let e=new Map;for(let t in d)m1(u.current,t,i[t],c.current.get(t),o),c.current.delete(t),e.set(t,i[t]);for(let[e,t]of c.current)m1(u.current,e,void 0,t,o);c.current=e}),e.useLayoutEffect(()=>{u.current?.removeAttribute("defer-hydration")},[]),h.suppressHydrationWarning=!0,e.createElement(t,{...h,ref:e.useCallback(e=>{u.current=e,"function"==typeof s?s(e):null!==s&&(s.current=e)},[s])})});return s.displayName=i??r.name,s})({tagName:"gl-markdown",elementClass:b4,react:nq}),va=(()=>{let e={};return["head","filter","remote","remote-github","remote-githubEnterprise","remote-gitlab","remote-gitlabSelfHosted","remote-bitbucket","remote-bitbucketServer","remote-azureDevops","tag","stash","check","loading","warning","added","modified","deleted","renamed","resolved","pull-request","show","hide","branch","graph","commit","author","datetime","message","changes","files","worktree","issue-github","issue-githubEnterprise","issue-gitlab","issue-gitlabSelfHosted","issue-jiraCloud","issue-jiraServer","issue-azureDevops","issue-bitbucket","undefined-icon"].forEach(t=>{e[t]=(0,nq.createElement)("span",{className:`graph-icon icon--${t}`})}),["upstream-ahead","upstream-behind"].forEach(t=>{e[t]=(0,nq.createElement)("span",{className:`graph-icon mini-icon icon--${t}`})}),e.settings=(0,nq.createElement)("span",{className:"graph-icon icon--settings",style:{fontSize:"1.1rem",right:"0px",top:"-1px"}}),e})(),vs=e=>{let t=e in va?e:"undefined-icon";return va[t]},vl=(()=>{switch(g7?"web-windows":g8?"web-macOS":g4?"web-linux":"web"){case"web-macOS":return"darwin";case"web-windows":return"win32";default:return"linux"}})(),vc={listDoubleSelection:!1,listMultiSelection:!1,webviewItems:void 0,webviewItemsValues:void 0},vu=[],vh=(0,nq.memo)(e=>{let[t,r]=(0,nq.useState)(null),[o,i]=(0,nq.useState)(e.context),[a,s]=(0,nq.useState)(e),[c,u]=(0,nq.useState)();(0,nq.useEffect)(()=>a.subscriber?.(e=>{s(t=>({...t,...e}))}),[a.subscriber]),(0,nq.useEffect)(()=>{i(a.context)},[a.context]);let h=(0,nq.useCallback)(e=>{r(e),a.setRef(e)},[a.setRef]),d=r=>{if("Enter"===r.key||" "===r.key){let o=function(e){if(null==e)return;let[t,r]=e.split("|");return{id:t,date:Number(r)}}(a.activeRow)?.id;if(null==o)return;let i=t?.graphContainerRef.current;if(!r.composedPath().some(e=>e===i))return;let s=a.rows?.find(e=>e.sha===o);null!=s&&e.onRowDoubleClick?.({row:s,preserveFocus:"Enter"!==r.key})}};(0,nq.useEffect)(()=>(window.addEventListener("keydown",d),()=>{window.removeEventListener("keydown",d)}),[a.activeRow]);let p=(0,nq.useMemo)(()=>a.excludeRefs?{...a.excludeRefs}:void 0,[a.excludeRefs]),f=a.config??{};return nq.createElement(lX,{ref:h,avatarUrlByEmail:a.avatars,columnsSettings:a.columns,contexts:o,formatCommitMessage:e=>nq.createElement(vi,{markdown:e}),cssVariables:a.theming?.cssVariables,dimMergeCommits:f.dimMergeCommits,downstreamsByUpstream:a.downstreams,enabledRefMetadataTypes:f.enabledRefMetadataTypes,enabledScrollMarkerTypes:f.scrollMarkerTypes,enableShowHideRefsOptions:!0,enableMultiSelection:!1!==f.multiSelectionMode,excludeRefsById:a.excludeRefs,excludeByType:a.excludeTypes,formatCommitDateTime:(e,t)=>(function(e,t="absolute",r="short+short",o){switch(o){case ii.Tooltip:return`${td(e,r)} (${th(e)})`;case ii.RowEntry:default:return"relative"===t?th(e):td(e,r)}})(e,f.dateStyle,f.dateFormat,t),getExternalIcon:vs,graphRows:a.rows??vu,hasMoreCommits:a.paging?.hasMore,highlightedShas:a.searchResults?.ids,highlightRowsOnRefHover:f.highlightRowsOnRefHover,includeOnlyRefsById:a.includeOnlyRefs,scrollRowPadding:f.scrollRowPadding,showGhostRefsOnRowHover:f.showGhostRefsOnRowHover,showRemoteNamesOnRefs:f.showRemoteNamesOnRefs,isContainerWindowFocused:a.windowFocused,isLoadingRows:a.loading,isSelectedBySha:a.selectedRows,nonce:a.nonce,onColumnResized:(t,r)=>{r.width&&e.onChangeColumns?.({[t]:{width:r.width,isHidden:r.isHidden,mode:r.mode,order:r.order}})},onDoubleClickGraphRow:(t,r,o)=>{"ref"!==r&&e.onRowDoubleClick?.({row:o,preserveFocus:!0})},onDoubleClickGraphRef:(t,r,o,i)=>{r.length>0&&e.onRefDoubleClick?.({ref:r[0],metadata:i})},onGraphColumnsReOrdered:t=>{let r={};for(let[e,o]of Object.entries(t))r[e]={...o};e.onChangeColumns?.(r)},onGraphMouseLeave:t=>{e.onMouseLeave?.(),document.querySelector(".graph-header .resizable.resizing")&&document.dispatchEvent(new MouseEvent("mouseup",{view:window,bubbles:!0,cancelable:!0}))},onGraphRowHovered:(t,r,o)=>e.onRowHover?.({clientX:t.clientX,currentTarget:t.currentTarget,graphRow:o,graphZoneType:r}),onGraphRowUnhovered:(t,r,o)=>e.onRowUnhover?.({relatedTarget:t.nativeEvent.relatedTarget??t.relatedTarget,graphRow:o,graphZoneType:r}),onRowContextMenu:(t,r,a)=>{if("ref"===r)return;let s=c?.selectedShas.has(a.sha)?c.contexts.get(a.type):vc;i({...o,graph:{...o?.graph!=null&&"string"==typeof o.graph?JSON.parse(o.graph):o?.graph,...s}}),e.onRowContextMenu?.({graphZoneType:r,graphRow:a})},onSettingsClick:e=>{let t=e.nativeEvent,r=new MouseEvent("contextmenu",{bubbles:!0,clientX:t.clientX,clientY:t.clientY});t.target?.dispatchEvent(r),t.stopImmediatePropagation()},onSelectGraphRows:t=>{t.length>1?(e=>{if(e.length<=1){null!=c&&u(void 0);return}let t=new Set;for(let r of e)t.add(r.sha);let r=function(e,t,r){let o=new Map;for(let i of e){let e=r(i);if(null==e)continue;let a=t(i),s=o.get(a);null==s?o.set(a,[e]):s.push(e)}return o}(e,e=>e.type,e=>e.contexts?.row!=null?"string"==typeof e.contexts.row?JSON.parse(e.contexts.row):e.contexts.row:void 0),o=new Map;for(let[e,t]of r){let r,i=new Set;for(let e of t)i.add(e.webviewItem);if(1===i.size)r=mY(i);else if(i.size>1){let e=new Map;for(let t of i){let[r,...o]=t.split("+"),i=e.get(r);if(null==i&&(i=new Map,e.set(r,i)),0===o.length){i.clear();break}for(let e of o)i.set(e,(i.get(e)??0)+1)}if(1===e.size){let o;if([r,o]=mY(e),o.size>0){let e=function(e,t){let r=e[Symbol.iterator](),o=r.next();if(o.done)return"";let i=String(o.value);for(;!(o=r.next()).done;)i+=`+${o.value}`;return i}(function*(e,t){for(let r of e){let e=t(r);null!=e&&(yield e)}}(o,([e,r])=>r===t.length?e:void 0),0);e&&(r+=`+${e}`)}}else r=void 0,t=[]}let a=t.length;o.set(e,{listDoubleSelection:2===a,listMultiSelection:a>1,webviewItems:r,webviewItemsValues:a>1?t:void 0})}u({contexts:o,selectedShas:t})})(t):null!=c&&u(void 0),e.onChangeSelection?.(t)},onToggleRefsVisibilityClick:(t,r,o)=>{o||document.getElementById("hiddenRefs")?.animate([{offset:0,background:"transparent"},{offset:.4,background:"var(--vscode-statusBarItem-warningBackground)"},{offset:1,background:"transparent"}],{duration:1e3,iterations:Object.keys(p??{}).length?1:2}),e.onChangeRefsVisibility?.({refs:r,visible:o})},onEmailsMissingAvatarUrls:t=>{e.onMissingAvatars?.(t)},onRefsMissingMetadata:t=>{e.onMissingRefsMetadata?.(t)},onShowMoreCommits:()=>{e.onMoreRows?.()},onGraphVisibleRowsChanged:(t,r)=>{e.onChangeVisibleDays?.({top:new Date(t.date).setHours(23,59,59,999),bottom:new Date(r.date).setHours(0,0,0,0)})},platform:vl,refMetadataById:a.refsMetadata,rowsStats:a.rowsStats,rowsStatsLoading:a.rowsStatsLoading,searchMode:a.filter?.filter?"filter":"normal",shaLength:f.idLength,shiftSelectMode:"topological"===f.multiSelectionMode?"topological":"simple",suppressNonRefRowTooltips:!0,themeOpacityFactor:a.theming?.themeOpacityFactor,useAuthorInitialsForAvatars:!f.avatars,workDirStats:a.workingTreeStats})});var vd=Object.defineProperty,vp=Object.getOwnPropertyDescriptor,vf=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?vp(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&vd(t,r,a),a};let vg=class extends lit_element_i{constructor(){super(...arguments),this.reactRoot=null,this.provideReactState=null,this.setReactStateProvider=e=>{this.provideReactState=e},this.changedProps=new Map,this.updateScheduled=!1,this.handleChangeColumns=e3(e=>{this.dispatchEvent(new CustomEvent("changecolumns",{detail:{settings:e}}))},250),this.handleChangeRefsVisibility=e=>{this.dispatchEvent(new CustomEvent("changerefsvisibility",{detail:e}))},this.handleChangeSelection=e3(e=>void this.dispatchEvent(new CustomEvent("changeselection",{detail:e})),250,{edges:"both"}),this.handleChangeVisibleDays=e=>{this.dispatchEvent(new CustomEvent("changevisibledays",{detail:e}))},this.handleMissingAvatars=e=>{this.dispatchEvent(new CustomEvent("missingavatars",{detail:e}))},this.handleMissingRefsMetadata=e=>{this.dispatchEvent(new CustomEvent("missingrefsmetadata",{detail:e}))},this.handleMoreRows=e=>{this.dispatchEvent(new CustomEvent("morerows",{detail:e}))},this.handleMouseLeave=()=>{this.dispatchEvent(new CustomEvent("graphmouseleave"))},this.handleRefDoubleClick=e=>{this.dispatchEvent(new CustomEvent("refdoubleclick",{detail:e}))},this.handleRowContextMenu=e=>{this.dispatchEvent(new CustomEvent("rowcontextmenu",{detail:e}))},this.handleRowDoubleClick=e=>{this.dispatchEvent(new CustomEvent("rowdoubleclick",{detail:e}))},this.handleRowHover=e3(e=>{this.dispatchEvent(new CustomEvent("rowhover",{detail:e}))},250),this.handleRowUnhover=e=>{this.handleRowHover.cancel(),this.dispatchEvent(new CustomEvent("rowunhover",{detail:e}))}}createRenderRoot(){return this}disconnectedCallback(){this.reactRoot&&(this.reactRoot.unmount(),this.reactRoot=null),super.disconnectedCallback?.()}shouldUpdate(e){if(!this.provideReactState)return null==this.reactRoot;for(let t of e.keys())this.changedProps.set(t,this[t]);if(this.updateScheduled)return null==this.reactRoot;this.updateScheduled=!0;let{provideReactState:t}=this;return requestAnimationFrame(()=>{this.updateScheduled=!1,this.changedProps.size>0&&(t(Object.fromEntries(this.changedProps)),this.changedProps.clear())}),null==this.reactRoot}firstUpdated(){this.reactRoot=(0,mK.createRoot)(this.querySelector(".graph__graph-root")),this.reactRoot.render((0,nq.createElement)(vh,{setRef:this.setRef,subscriber:this.setReactStateProvider,activeRow:this.activeRow,avatars:this.avatars,columns:this.columns,config:this.config,context:this.context,downstreams:this.downstreams,excludeRefs:this.excludeRefs,excludeTypes:this.excludeTypes,filter:this.filter,includeOnlyRefs:this.includeOnlyRefs,loading:this.loading,nonce:this.nonce,paging:this.paging,refsMetadata:this.refsMetadata,rows:this.rows,rowsStats:this.rowsStats,rowsStatsLoading:this.rowsStatsLoading,searchResults:this.searchResults,selectedRows:this.selectedRows,theming:this.theming,windowFocused:this.windowFocused,workingTreeStats:this.workingTreeStats,onChangeColumns:this.handleChangeColumns,onChangeRefsVisibility:this.handleChangeRefsVisibility,onChangeSelection:this.handleChangeSelection,onChangeVisibleDays:this.handleChangeVisibleDays,onMissingAvatars:this.handleMissingAvatars,onMissingRefsMetadata:this.handleMissingRefsMetadata,onMoreRows:this.handleMoreRows,onMouseLeave:this.handleMouseLeave,onRefDoubleClick:this.handleRefDoubleClick,onRowContextMenu:this.handleRowContextMenu,onRowDoubleClick:this.handleRowDoubleClick,onRowHover:this.handleRowHover,onRowUnhover:this.handleRowUnhover}))}render(){return ew`<div class="graph__graph-root"></div>`}};vf([eA({type:String})],vg.prototype,"activeRow",2),vf([eA({type:Object})],vg.prototype,"avatars",2),vf([eA({type:Object})],vg.prototype,"columns",2),vf([eA({type:Object})],vg.prototype,"context",2),vf([eA({type:Object})],vg.prototype,"config",2),vf([eA({type:Object})],vg.prototype,"downstreams",2),vf([eA({type:Array})],vg.prototype,"rows",2),vf([eA({type:Object})],vg.prototype,"excludeRefs",2),vf([eA({type:Object})],vg.prototype,"excludeTypes",2),vf([eA({type:Object})],vg.prototype,"paging",2),vf([eA({type:Boolean})],vg.prototype,"loading",2),vf([eA({type:Object})],vg.prototype,"selectedRows",2),vf([eA({type:Boolean})],vg.prototype,"windowFocused",2),vf([eA({type:Object})],vg.prototype,"refsMetadata",2),vf([eA({type:Object})],vg.prototype,"includeOnlyRefs",2),vf([eA({type:Object})],vg.prototype,"rowsStats",2),vf([eA({type:Boolean})],vg.prototype,"rowsStatsLoading",2),vf([eA({type:Object})],vg.prototype,"workingTreeStats",2),vf([eA({type:Object})],vg.prototype,"theming",2),vf([eA({type:Object})],vg.prototype,"searchResults",2),vf([eA({type:Object})],vg.prototype,"filter",2),vf([eA({attribute:!1})],vg.prototype,"setRef",2),vg=vf([eP("gl-graph")],vg);var vm=Object.defineProperty,vb=Object.getOwnPropertyDescriptor,vv=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?vb(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&vm(t,r,a),a};let vy=new Map([["--vscode-gitlens-graphLane1Color","#15a0bf"],["--vscode-gitlens-graphLane2Color","#0669f7"],["--vscode-gitlens-graphLane3Color","#8e00c2"],["--vscode-gitlens-graphLane4Color","#c517b6"],["--vscode-gitlens-graphLane5Color","#d90171"],["--vscode-gitlens-graphLane6Color","#cd0101"],["--vscode-gitlens-graphLane7Color","#f25d2e"],["--vscode-gitlens-graphLane8Color","#f2ca33"],["--vscode-gitlens-graphLane9Color","#7bd938"],["--vscode-gitlens-graphLane10Color","#2ece9d"]]),vw=class extends r7(lit_element_i){constructor(){super(...arguments),this.disposables=[],this.onSetRef=e=>{this.ref=e},this.themingDefaults={cssVariables:(()=>{let e,t=vS("--color-background"),r={},o=0;for(let[i,a]of vy){for(let s of(e=vS(i,{fallbackValue:a}),r[`--graph-color-${o}`]=e,[15,25,45,50]))r[`--graph-color-${o}-bg${s}`]=eJ(t,e,s);for(let t of[10,50])r[`--graph-color-${o}-f${t}`]=eJ(e,"transparent",t);o++}return{"--app__bg0":vS("--color-background"),"--panel__bg0":vS("--color-graph-background"),"--panel__bg1":vS("--color-graph-background2"),"--section-border":vS("--color-graph-background2"),"--selected-row":vS("--color-graph-selected-row"),"--selected-row-border":"none","--hover-row":vS("--color-graph-hover-row"),"--hover-row-border":"none","--scrollable-scrollbar-thickness":vS("--graph-column-scrollbar-thickness"),"--scroll-thumb-bg":vS("--vscode-scrollbarSlider-background"),"--scroll-marker-head-color":vS("--color-graph-scroll-marker-head"),"--scroll-marker-upstream-color":vS("--color-graph-scroll-marker-upstream"),"--scroll-marker-highlights-color":vS("--color-graph-scroll-marker-highlights"),"--scroll-marker-local-branches-color":vS("--color-graph-scroll-marker-local-branches"),"--scroll-marker-remote-branches-color":vS("--color-graph-scroll-marker-remote-branches"),"--scroll-marker-stashes-color":vS("--color-graph-scroll-marker-stashes"),"--scroll-marker-tags-color":vS("--color-graph-scroll-marker-tags"),"--scroll-marker-selection-color":vS("--color-graph-scroll-marker-selection"),"--scroll-marker-pull-requests-color":vS("--color-graph-scroll-marker-pull-requests"),"--stats-added-color":vS("--color-graph-stats-added"),"--stats-deleted-color":vS("--color-graph-stats-deleted"),"--stats-files-color":vS("--color-graph-stats-files"),"--stats-bar-border-radius":vS("--graph-stats-bar-border-radius"),"--stats-bar-height":vS("--graph-stats-bar-height"),"--text-selected":vS("--color-graph-text-selected"),"--text-selected-row":vS("--color-graph-text-selected-row"),"--text-hovered":vS("--color-graph-text-hovered"),"--text-dimmed-selected":vS("--color-graph-text-dimmed-selected"),"--text-dimmed":vS("--color-graph-text-dimmed"),"--text-normal":vS("--color-graph-text-normal"),"--text-secondary":vS("--color-graph-text-secondary"),"--text-disabled":vS("--color-graph-text-disabled"),"--text-accent":vS("--color-link-foreground"),"--text-inverse":vS("--vscode-input-background"),"--text-bright":vS("--vscode-input-background"),...r}})(),themeOpacityFactor:1}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback?.(),this.theming=this.getGraphTheming(),this.disposables.push(rE(e3(e=>{this.theming=this.getGraphTheming(e)},100)))}disconnectedCallback(){super.disconnectedCallback?.(),this.disposables.forEach(e=>e.dispose()),this.disposables=[]}render(){let{graphState:e}=this;return ew`<gl-graph
			.setRef=${this.onSetRef}
			.activeRow=${e.activeRow}
			.avatars=${e.avatars}
			.columns=${e.columns}
			.config=${e.config}
			.context=${e.context}
			.downstreams=${e.downstreams}
			.excludeRefs=${e.excludeRefs}
			.excludeTypes=${e.excludeTypes}
			.filter=${e.filter}
			.includeOnlyRefs=${e.includeOnlyRefs}
			?loading=${e.loading}
			nonce=${e.nonce??ek}
			.paging=${e.paging}
			.refsMetadata=${e.refsMetadata}
			.rows=${e.rows}
			.rowsStats=${e.rowsStats}
			.searchResults=${e.searchResults}
			.selectedRows=${e.selectedRows}
			.theming=${this.theming}
			?windowFocused=${e.windowFocused}
			.workingTreeStats=${e.workingTreeStats}
			@changecolumns=${this.onColumnsChanged}
			@changerefsvisibility=${this.onRefsVisibilityChanged}
			@changeselection=${this.onSelectionChanged}
			@changevisibledays=${this.onVisibleDaysChanged}
			@missingavatars=${this.onMissingAvatars}
			@missingrefsmetadata=${this.onMissingRefsMetadata}
			@morerows=${this.onGetMoreRows}
			@graphmouseleave=${this.onMouseLeave}
			@refdoubleclick=${this.onRefDoubleClick}
			@rowcontextmenu=${this.onRowContextMenu}
			@rowdoubleclick=${this.onRowDoubleClick}
			@rowhover=${this.onRowHover}
			@rowunhover=${this.onRowUnhover}
		></gl-graph>`}selectCommits(e,t,r){this.ref?.selectCommits(e,t,r)}onColumnsChanged(e){this._ipc.sendCommand(tF,{config:e.detail.settings})}onGetMoreRows({detail:e}){this.graphState.loading=!0,this._ipc.sendCommand(tH,{id:e})}onMouseLeave(){this.dispatchEvent(new CustomEvent("gl-graph-mouse-leave"))}onMissingAvatars({detail:e}){this._ipc.sendCommand(tL,{emails:e})}onMissingRefsMetadata({detail:e}){this._ipc.sendCommand(tN,{metadata:e})}onRefDoubleClick({detail:{ref:e,metadata:t}}){this._ipc.sendCommand(tA,{type:"ref",ref:e,metadata:t})}onRefsVisibilityChanged({detail:e}){this._ipc.sendCommand(tG,e)}onRowContextMenu({detail:{graphRow:e,graphZoneType:t}}){this.dispatchEvent(new CustomEvent("gl-graph-row-context-menu",{detail:{graphZoneType:t,graphRow:e}}))}onRowDoubleClick({detail:{row:e,preserveFocus:t}}){this._ipc.sendCommand(tA,{type:"row",row:{id:e.sha,type:e.type},preserveFocus:t})}onRowHover({detail:e}){this.dispatchEvent(new CustomEvent("gl-graph-row-hover",{detail:e}))}onRowUnhover({detail:e}){this.dispatchEvent(new CustomEvent("gl-graph-row-unhover",{detail:e}))}onSelectionChanged({detail:e}){var t;let r,o=(t=e=>null!=e?{id:e.sha,type:e.type}:void 0,r=0,e.reduce((e,o)=>{let i=t(o,r++);return null!=i&&e.push(i),e},[])),i=e[e.length-1],a=null!=i?`${i.sha}|${i.date}`:void 0;this.graphState.activeRow=a,this.graphState.activeDay=i?.date,this.dispatchEvent(new CustomEvent("gl-graph-change-selection",{detail:{selection:o}})),this._ipc.sendCommand(tZ,{selection:o})}onVisibleDaysChanged({detail:e}){this.dispatchEvent(new CustomEvent("gl-graph-change-visible-days",{detail:e}))}getGraphTheming(e){let t,r=e?.computedStyle??window.getComputedStyle(document.documentElement),o=vS("--color-background",{computedStyle:r}),i={},a=0;for(let[e,s]of vy){for(let c of(t=vS(e,{computedStyle:r,fallbackValue:s}),i[`--column-${a}-color`]=eq(e,r)||s,[15,25,45,50]))i[`--graph-color-${a}-bg${c}`]=eJ(o,t,c);a++}let s=e?.isHighContrastTheme??(document.body.classList.contains("vscode-high-contrast")||document.body.classList.contains("vscode-high-contrast-light"));return{cssVariables:{...this.themingDefaults.cssVariables,"--selected-row-border":s?`1px solid ${vS("--color-graph-contrast-border",{computedStyle:r})}`:"none","--hover-row-border":s?`1px dashed ${vS("--color-graph-contrast-border",{computedStyle:r})}`:"none",...i},themeOpacityFactor:parseInt(eq("--graph-theme-opacity-factor",r))||this.themingDefaults.themeOpacityFactor}}};function vS(e,t){let r=t?.computedStyle?eq(e,t?.computedStyle):t?.fallbackValue?t.fallbackValue:void 0;return r?`var(${e}, ${r})`:`var(${e})`}vv([e1({context:"graph-state-context",subscribe:!0})],vw.prototype,"graphState",2),vv([e1({context:"ipc"})],vw.prototype,"_ipc",2),vv([e1({context:"telemetry"})],vw.prototype,"_telemetry",2),vv([eH("gl-graph")],vw.prototype,"graph",2),vv([eL()],vw.prototype,"theming",2),vw=vv([eP("gl-graph-wrapper")],vw);var vx=Object.defineProperty,vC=Object.getOwnPropertyDescriptor,vk=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?vC(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&vx(t,r,a),a};let v_=class extends GlElement{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this.hoverMarkdownCache=new Map,this.recalculated=!1,this.onParentMouseLeave=()=>{this.hide()},this._showCoreDebounced=void 0,this.onWindowKeydown=e=>{"Escape"===e.key&&this.hide()},this._lastUnhoveredTimestamp=0}connectedCallback(){super.connectedCallback?.(),this.parentElement?.addEventListener("mouseleave",this.onParentMouseLeave),window.addEventListener("keydown",this.onWindowKeydown)}disconnectedCallback(){super.disconnectedCallback?.(),this.parentElement?.removeEventListener("mouseleave",this.onParentMouseLeave),window.removeEventListener("keydown",this.onWindowKeydown)}render(){return ew`<gl-popover
			?open=${this.open}
			.anchor=${this.anchor}
			.distance=${this.distance}
			.skidding=${this.skidding}
			.placement=${this.placement}
			trigger="manual"
			@sl-reposition=${this.onReposition}
		>
			<div slot="content">
				<gl-markdown .markdown=${p5(this.markdown??"Loading...","Loading...")}></gl-markdown>
			</div>
		</gl-popover>`}onReposition(){if(null!=this.skidding&&("bottom-start"===this.placement||"top-start"===this.placement))switch(this.popup?.currentPlacement){case"bottom-end":case"top-end":this.recalculated||null!=this.previousSkidding||(this.previousSkidding=this.skidding,this.skidding=-(5*this.skidding),this.recalculated=!0);break;default:null!=this.previousSkidding&&(this.skidding=this.previousSkidding,this.previousSkidding=void 0)}}reset(){this.recalculated=!1,this.hoverMarkdownCache.clear()}onRowHovered(e,t){let r=Date.now()-this._lastUnhoveredTimestamp<=750;if(this.resetUnhoverTimer(),null==this.requestMarkdown||e.sha===this.shaHovering&&this.open)return;this.shaHovering=e.sha;let o=this.hoverMarkdownCache.get(e.sha);if(null==o){let t="work-dir-changes"!==e.type;o=this.requestMarkdown(e).then(r=>("fulfilled"===r.markdown.status&&t?this.hoverMarkdownCache.set(e.sha,r.markdown):"rejected"===r.markdown.status&&this.hoverMarkdownCache.delete(e.sha),r.markdown)),t&&this.hoverMarkdownCache.set(e.sha,o)}this.open||r?this.showCore(t,o):(this._showCoreDebounced??=e3(this.showCore.bind(this),500),this._showCoreDebounced(t,o))}onRowUnhovered(e,t){if(this.recalculated=!1,this.resetUnhoverTimer(),null!=t&&t instanceof HTMLElement){if(t.classList.contains("resizable-handle")){this.unhoverTimer=setTimeout(()=>this.hide(),500);return}if(t.closest("gl-graph-hover"))return}this.hide()}showCore(e,t){if("string"==typeof t)this.markdown=t;else if(rm(t)){let e=this.shaHovering;t.then(t=>{e===this.shaHovering&&(this.markdown=rg(t),t||this.hide())}).catch(()=>{})}else this.markdown=rg(t);this.anchor=e,this.open=!0}hide(){this._lastUnhoveredTimestamp=Date.now(),this._showCoreDebounced?.cancel(),this.resetUnhoverTimer(),this.shaHovering=void 0,this.markdown=void 0,this.open=!1}resetUnhoverTimer(){this.unhoverTimer&&(clearTimeout(this.unhoverTimer),this.unhoverTimer=void 0)}};v_.styles=O`
		gl-popover::part(body) {
			--max-width: min(92vw, 45rem);
			max-height: 50vh;
			width: clamp(min(30rem, 92vw), min-content, max-content);
			overflow-x: hidden;
			overflow-y: auto;
		}
	`,vk([eA({type:Object})],v_.prototype,"anchor",2),vk([eA({reflect:!0,type:Number})],v_.prototype,"distance",2),vk([eA({reflect:!0,type:Boolean})],v_.prototype,"open",2),vk([eA({reflect:!0})],v_.prototype,"placement",2),vk([eA({type:Object})],v_.prototype,"markdown",2),vk([eA({reflect:!0,type:Number})],v_.prototype,"skidding",2),vk([eA({type:Function})],v_.prototype,"requestMarkdown",2),vk([eH("gl-popover")],v_.prototype,"popup",2),v_=vk([eP("gl-graph-hover")],v_);var vR=Object.defineProperty,vT=Object.getOwnPropertyDescriptor,vE=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?vT(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&vR(t,r,a),a};let vM=["marker-result","marker-head-arrow-left","marker-head-arrow-right","marker-head","marker-upstream","marker-pull-request","marker-branch","marker-stash","marker-remote","marker-tag","visible-area"],vO=class extends GlElement{constructor(){super(...arguments),this.dataType="commits"}onActiveDayChanged(){this.select(this.activeDay)}onDataChanged(){this.handleDataChanged(!1)}onMarkersChanged(){this.handleDataChanged(!0)}onSearchResultsChanged(){this._chart?.regions.remove({classes:["marker-result"]}),null!=this.searchResults&&this._chart?.regions.add([...this.getSearchResultsRegions(this.searchResults)])}onVisibleDaysChanged(){this._chart?.regions.remove({classes:["visible-area"]}),null!=this.visibleDays&&this._chart?.regions.add(this.getVisibleAreaRegion(this.visibleDays))}connectedCallback(){super.connectedCallback?.(),this.handleDataChanged(!1)}disconnectedCallback(){super.disconnectedCallback?.(),this._chart?.destroy(),this._chart=void 0}handleDataChanged(e){this._loadTimer&&(clearTimeout(this._loadTimer),this._loadTimer=void 0),e&&(this._regions=void 0,this._markerRegions=void 0),this._loadTimer=setTimeout(()=>this.loadChart(),150)}getInternalChart(){try{let e=this._chart?.internal;return this._chart,e}catch{return}}select(e,t=!1){if(null==e)return void this.unselect();let r=this.getDataPoint(e);if(null==r)return;let o=this.getInternalChart();if(null!=o&&(o.showGridFocus([r]),!t)){let{index:e}=r;null!=e&&this._chart.$.main.selectAll(`.bb-shape-${e}`).each(function(t){o.toggleShape?.(this,t,e)})}}unselect(e,t=!1){if(t)return void this.getInternalChart()?.hideGridFocus();if(null!=e){let t=this.getIndex(e);if(null==t)return;this._chart?.unselect(void 0,[t])}else this._chart?.unselect()}getDataPoint(e){let t=new Date(e).setHours(0,0,0,0);return this._chart?.data()[0]?.values.find(e=>("number"==typeof e.x?e.x:e.x.getTime())===t)}getIndex(e){return this.getDataPoint(e)?.index}getMarkerRegions(){if(null==this._markerRegions)if(null!=this.markers){let e=mQ(this.markers,([e,t])=>mQ(t,t=>t.current&&"branch"===t.type?[{axis:"x",start:e,end:e,class:"marker-head"},{axis:"x",start:e,end:e,class:"marker-head-arrow-left"},{axis:"x",start:e,end:e,class:"marker-head-arrow-right"}]:[{axis:"x",start:e,end:e,class:t.current&&"remote"===t.type?"marker-upstream":`marker-${t.type}`}]));this._markerRegions=e}else this._markerRegions=[];return this._markerRegions}getAllRegions(){if(null==this._regions){let e=this.getMarkerRegions();null!=this.visibleDays&&(e=mX([this.getVisibleAreaRegion(this.visibleDays)],e)),null!=this.searchResults&&(e=mX(e,this.getSearchResultsRegions(this.searchResults))),this._regions=[...e].sort((e,t)=>vM.indexOf(t.class??"")-vM.indexOf(e.class??""))}return this._regions}getSearchResultsRegions(e){return function*(e,t){for(let r of e)yield t(r)}(e.keys(),e=>({axis:"x",start:e,end:e,class:"marker-result"}))}getVisibleAreaRegion(e){return{axis:"x",start:e.top,end:e.bottom,class:"visible-area"}}loadChart(){this._loading??=this.loadChartCore().finally(()=>this._loading=void 0)}async loadChartCore(){let e,t,r;if(!this.data?.size){this.spinner.setAttribute("aria-hidden","false"),this._chart?.destroy(),this._chart=void 0;return}let o="lines"===this.dataType,i=[],a=[],s=mY(this.data.keys()),c=new Date,u=new Date(s),h=0;for(;c>=u;)e=v$(c),t=this.data.get(e),i.push(e),h=Math.max(h,r=o?(t?.activity?.additions??0)+(t?.activity?.deletions??0):t?.commits??0),a.push(r),c.setDate(c.getDate()-1);let d=this.getAllRegions(),p=[],f=0,g=0;for(let e of a)0!==e&&(p.push(e),f+=e,g+=e**2);p.sort((e,t)=>e-t);let m=p.length,b=f/m,v=Math.sqrt(g/m-b**2),w=-1;for(let e=m-1;e>=0;e--)if(3>=Math.abs((p[e]-b)/v)){w=e;break}let x=p[Math.floor(.25*m)],C=p[Math.floor(.75*m)],_=p[m-1],T=C+3*(C-x),E=p[w],O=Math.floor(Math.min(_,T>_-T?E:T+(E-T)/2)+.1*T);if(null==this._chart){let{bb:e,selection:t,spline:r,zoom:o}=await S.e(162).then(S.bind(S,3626));this._chart=e.generate({bindto:this.chartContainer,data:{x:"date",axes:{activity:"y"},columns:[["date",...i],["activity",...a]],names:{activity:"Activity"},onclick:e=>{if("activity"!==e.id)return;let t=new Date(e.x),r=v$(t),o=this.searchResults?.get(r)?.sha??this.data?.get(r)?.sha;queueMicrotask(()=>{this.emit("gl-graph-minimap-selected",{date:t,sha:o})})},selection:{enabled:t(),grouped:!0,multiple:!1},colors:{activity:"var(--color-graph-minimap-line0)"},types:{activity:r()}},axis:{x:{inverted:!0,localtime:!0,type:"timeseries"},y:{min:0,max:O}},clipPath:!1,grid:{front:!1,focus:{show:!0}},legend:{show:!1},line:{point:!0,zerobased:!0},padding:{mode:"fit",bottom:-8,left:0,right:0,top:0},point:{show:!0,select:{r:5},focus:{only:!0,expand:{enabled:!0,r:3}},sensitivity:100},regions:d,resize:{auto:!0},spline:{interpolation:{type:"monotone-x"}},tooltip:{contents:(e,t,r,o)=>{let i,a,s,c,u=new Date(e[0].x),h=v$(u),d=this.data?.get(h),p=this.markers?.get(h),f=this.searchResults?.get(h);p?.length&&(i=function(e,t,r){let o=new Map,i=(void 0)??!1;for(let r of e){let e=t(r);if(null==e&&i)continue;let a=o.get(e);null==a?o.set(e,[r]):a.push(r)}return o}(p,e=>e.type));let g=i?.get("stash")?.length??0,m=i?.get("pull-request")?.length??0;return d?.commits?(a=tb("commit",d.commits,{format:e=>tf(void 0,void 0)(e)}),f?.count&&(c=tb("matching commit",f.count)),"lines"===this.dataType&&(s=`${tb("file",d?.files??0,{format:e=>tf(void 0,void 0)(e),zero:"No"})}, ${tb("line",(d?.activity?.additions??0)+(d?.activity?.deletions??0),{format:e=>tf(void 0,void 0)(e),zero:"No"})} changed`)):a="No commits",`<div class="bb-tooltip">
						<div class="header">
							<span class="header--title">${td(u,"MMMM Do, YYYY")}</span>
							<span class="header--description">(${tg(th(u))})</span>
						</div>
						<div class="changes">
							<span>${a}${s?`, ${s}`:""}</span>
						</div>
						${c?`<div class="results"><span class="result">${c}</span></div>`:""}
						${null!=i?`
						<div class="refs">${g?`<span class="stash">${tb("stash",g,{plural:"stashes"})}</span>`:""}${i?.get("branch")?.sort((e,t)=>(e.current?-1:1)-(t.current?-1:1)).map(e=>`<span class="branch${e.current?" current":""}">${e.name}</span>`).join("")??""}</div>
						<div class="refs">${m?`<span class="pull-request">${tb("pull request",m,{plural:"pull requests"})}</span>`:""}${i?.get("remote")?.sort((e,t)=>(e.current?-1:1)-(t.current?-1:1))?.map(e=>`<span class="remote${e.current?" current":""}">${e.name}</span>`).join("")??""}${i?.get("tag")?.map(e=>`<span class="tag">${e.name}</span>`).join("")??""}</div>`:""}
					</div>`},grouped:!0,position:(e,t,r,o,i)=>{let{x:a}=i,s=o.getBoundingClientRect();return a+t>s.right&&(a=s.right-t),{top:0,left:a}}},transition:{duration:0},zoom:{enabled:o(),rescale:!1,type:"wheel",onzoom:e3(()=>this.onActiveDayChanged(),250)},onafterinit:function(){let e=this.$.main.selectAll(".bb-axis-x").node();e?.remove();let t=this.$.main.selectAll(".bb-axis-y").node();t?.remove();let r=this.$.main.selectAll(".bb-grid").node();try{r?.removeAttribute("clip-path")}catch{}let o=this.$.main.selectAll(".bb-regions").node(),i=this.$.main.selectAll(".bb-chart").node();null!=o&&null!=i&&i.insertAdjacentElement("afterend",o)}})}else this._chart.load({columns:[["date",...i],["activity",...a]]}),this._chart.axis.max({y:O}),this._chart.regions(d);this.spinner.setAttribute("aria-hidden","true"),this.onActiveDayChanged()}render(){return ew`
			<div id="spinner"><code-icon icon="loading" modifier="spin"></code-icon></div>
			<div id="chart"></div>
			<gl-tooltip>
				<div class="legend">
					<code-icon icon="${"lines"===this.dataType?"request-changes":"git-commit"}"></code-icon>
				</div>
				<div slot="content">
					${"lines"===this.dataType?"Showing lines changed per day":"Showing commits per day"}
				</div>
			</gl-tooltip>
		`}};function v$(e){return new Date(e).setHours(0,0,0,0)}vO.styles=O`
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

		.bb-region.marker-pull-request {
			fill: var(--color-graph-minimap-marker-pull-requests);
			stroke: var(--color-graph-minimap-marker-pull-requests);
			transform: translate(-2px, 29px);
		}
		.bb-region.marker-pull-request > rect {
			width: 3px;
			height: 3px;
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

		.bb-tooltip .results {
			display: flex;
			font-size: 12px;
			gap: 0.5rem;
			flex-direction: row;
			flex-wrap: wrap;
			margin: 0.5rem 0;
			max-width: fit-content;
		}

		.bb-tooltip .results .result {
			border-radius: 3px;
			padding: 0 4px;
			background-color: var(--color-graph-minimap-tip-highlightBackground);
			border: 1px solid var(--color-graph-minimap-tip-highlightBorder);
			color: var(--color-graph-minimap-tip-highlightForeground);
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
		.bb-tooltip .refs .pull-request {
			border-radius: 3px;
			padding: 0 4px;
			background-color: var(--color-graph-minimap-pullRequestBackground);
			border: 1px solid var(--color-graph-minimap-pullRequestBorder);
			color: var(--color-graph-minimap-pullRequestForeground);
		}
		.bb-tooltip .refs .tag {
			border-radius: 3px;
			padding: 0 4px;
			background-color: var(--color-graph-minimap-tip-tagBackground);
			border: 1px solid var(--color-graph-minimap-tip-tagBorder);
			color: var(--color-graph-minimap-tip-tagForeground);
		}

		.bb-event-rects,
		.bb-event-rect {
			cursor: pointer !important;
		}
		.bb-event-rects:active,
		.bb-event-rect:active {
			cursor: ew-resize !important;
		}
	`,vE([eH("#chart")],vO.prototype,"chartContainer",2),vE([eH("#spinner")],vO.prototype,"spinner",2),vE([eA({type:Number})],vO.prototype,"activeDay",2),vE([tn("activeDay")],vO.prototype,"onActiveDayChanged",1),vE([eA({type:Object})],vO.prototype,"data",2),vE([eA({type:String})],vO.prototype,"dataType",2),vE([tn(["data","dataType"])],vO.prototype,"onDataChanged",1),vE([eA({type:Object})],vO.prototype,"markers",2),vE([tn("markers")],vO.prototype,"onMarkersChanged",1),vE([eA({type:Object})],vO.prototype,"searchResults",2),vE([tn("searchResults")],vO.prototype,"onSearchResultsChanged",1),vE([eA({type:Object})],vO.prototype,"visibleDays",2),vE([tn("visibleDays")],vO.prototype,"onVisibleDaysChanged",1),vE([rb({singleLine:!0})],vO.prototype,"handleDataChanged",1),vE([rb({singleLine:!0})],vO.prototype,"loadChartCore",1),vO=vE([eP("gl-graph-minimap")],vO);var vI=Object.defineProperty,vz=Object.getOwnPropertyDescriptor,vP=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?vz(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&vI(t,r,a),a};let vD=class extends GlElement{constructor(){super(...arguments),this.disabled=!1,this.dataType="commits",this.markerTypes=[],this.rows=[],this.markersByDay=new Map,this.searchResultsByDay=new Map,this.statsByDay=new Map,this.pendingDataChange=!1,this.pendingSearchResultsChange=!1}onDisabledChanged(){!this.disabled&&(this.pendingDataChange&&this.processRows(),this.pendingSearchResultsChange&&this.processSearchResults())}handleDataChanged(e){(1!==e.length||"rowsStats"!==e[0]||"lines"===this.dataType)&&(this.pendingDataChange=!0,this.disabled||this.processRows())}handleSearchResultsChanged(){this.pendingSearchResultsChange=!0,this.disabled||this.processSearchResults()}render(){return this.disabled?ek:ew`<gl-graph-minimap
			id="minimap"
			.activeDay=${this.activeDay}
			.data=${this.statsByDay}
			.dataType=${this.dataType}
			.markers=${this.markersByDay}
			.searchResults=${this.searchResultsByDay}
			.visibleDays=${this.visibleDays}
		></gl-graph-minimap>`}select(e,t=!1){this.disabled||this.minimap?.select(e,t)}unselect(e,t=!1){this.disabled||this.minimap?.unselect(e,t)}processRows(){let e,t,r,o,i,a,s,c,u,h,d;this.pendingDataChange=!1;let p=new Map,f=new Map,g="lines"===this.dataType;if(!this.rows?.length||g&&null==this.rowsStats){this.statsByDay=p,this.markersByDay=f;return}let m={head:void 0,branch:void 0,remote:void 0,tag:void 0},b=this.rows??[];for(let v=b.length-1;v>=0;v--)u=b[v],i=[],(e=vA(u.date))!==t&&(t=e,m={head:void 0,branch:void 0,remote:void 0,tag:void 0}),u.heads?.length&&(this.markerTypes.includes("head")||this.markerTypes.includes("localBranches")||this.markerTypes.includes("pullRequests"))&&(m.branch=u.sha,o=[],u.heads.forEach(e=>{if(e.isCurrentHead&&(m.head=u.sha),(this.markerTypes.includes("localBranches")||this.markerTypes.includes("head")&&e.isCurrentHead)&&o.push({type:"branch",name:e.name,current:e.isCurrentHead&&this.markerTypes.includes("head")}),this.markerTypes.includes("pullRequests")&&null!=e.id&&this.refMetadata?.[e.id]?.pullRequest?.length)for(let t of this.refMetadata?.[e.id]?.pullRequest??[])i.push({type:"pull-request",name:t.title})}),null==(r=f.get(e))?f.set(e,o):r.push(...o)),u.remotes?.length&&(this.markerTypes.includes("upstream")||this.markerTypes.includes("remoteBranches")||this.markerTypes.includes("localBranches")||this.markerTypes.includes("pullRequests"))&&(m.remote=u.sha,a=[],u.remotes.forEach(e=>{let t=!1,r=this.downstreams?.[`${e.owner}/${e.name}`]?.length;if(e.current&&(m.remote=u.sha,t=!0),(this.markerTypes.includes("remoteBranches")||this.markerTypes.includes("upstream")&&t||this.markerTypes.includes("localBranches")&&r)&&a.push({type:"remote",name:`${e.owner}/${e.name}`,current:t&&this.markerTypes.includes("upstream")}),this.markerTypes.includes("pullRequests")&&null!=e.id&&this.refMetadata?.[e.id]?.pullRequest?.length)for(let t of this.refMetadata?.[e.id]?.pullRequest??[])i.push({type:"pull-request",name:t.title})}),null==(r=f.get(e))?f.set(e,a):r.push(...a)),"stash-node"===u.type&&this.markerTypes.includes("stashes")&&(s={type:"stash",name:u.message},null==(r=f.get(e))?f.set(e,[s]):r.push(s)),u.tags?.length&&this.markerTypes.includes("tags")&&(m.tag=u.sha,c=u.tags.map(e=>({type:"tag",name:e.name})),null==(r=f.get(e))?f.set(e,c):r.push(...c)),null==(r=f.get(e))?f.set(e,i):r.push(...i),null==(h=p.get(e))?g?null!=(d=this.rowsStats?.[u.sha])&&(h={activity:{additions:d.additions,deletions:d.deletions},commits:1,files:d.files,sha:u.sha},p.set(e,h)):(h={commits:1,sha:u.sha},p.set(e,h)):(h.commits++,h.sha=m.head??m.branch??m.remote??m.tag??h.sha,g&&null!=(d=this.rowsStats?.[u.sha])&&(null==h.activity?h.activity={additions:d.additions,deletions:d.deletions}:(h.activity.additions+=d.additions,h.activity.deletions+=d.deletions),h.files=(h.files??0)+d.files));this.statsByDay=p,this.markersByDay=f}processSearchResults(){this.pendingSearchResultsChange=!1;let e=new Map;if(null!=this.searchResults&&"error"in this.searchResults){this.searchResultsByDay=e;return}if(this.searchResults?.ids!=null){let t,r,o,i;for([r,o]of Object.entries(this.searchResults.ids))t=vA(o.date),null==(i=e.get(t))?e.set(t,{type:"search-result",sha:r,count:1}):i.count++}this.searchResultsByDay=e}};function vA(e){return new Date(e).setHours(0,0,0,0)}vP([eA({type:Number})],vD.prototype,"activeDay",2),vP([eA({type:Boolean})],vD.prototype,"disabled",2),vP([tn("disabled")],vD.prototype,"onDisabledChanged",1),vP([eA({type:String})],vD.prototype,"dataType",2),vP([eA({type:Object})],vD.prototype,"downstreams",2),vP([eA({type:Array})],vD.prototype,"markerTypes",2),vP([eA({type:Object})],vD.prototype,"refMetadata",2),vP([eA({type:Array})],vD.prototype,"rows",2),vP([eA({type:Object})],vD.prototype,"rowsStats",2),vP([eA({type:Object})],vD.prototype,"searchResults",2),vP([eA({type:Object})],vD.prototype,"visibleDays",2),vP([eL()],vD.prototype,"markersByDay",2),vP([eL()],vD.prototype,"searchResultsByDay",2),vP([eL()],vD.prototype,"statsByDay",2),vP([tn(["dataType","downstreams","markerTypes","refMetadata","rows","rowsStats"])],vD.prototype,"handleDataChanged",1),vP([tn(["markerTypes","searchResults"])],vD.prototype,"handleSearchResultsChanged",1),vP([eH("#minimap")],vD.prototype,"minimap",2),vD=vP([eP("gl-graph-minimap-container")],vD);let vL=Symbol();let task_h=class task_h{get taskComplete(){return this.t||(1===this.i?this.t=new Promise((e,t)=>{this.o=e,this.h=t}):3===this.i?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(e,t,r){this.p=0,this.i=0,(this._=e).addController(this);let o="object"==typeof t?t:{task:t,args:r};this.v=o.task,this.j=o.args,this.m=o.argsEqual??vN,this.k=o.onComplete,this.A=o.onError,this.autoRun=o.autoRun??!0,"initialValue"in o&&(this.u=o.initialValue,this.i=2,this.O=this.T?.())}hostUpdate(){!0===this.autoRun&&this.S()}hostUpdated(){"afterUpdate"===this.autoRun&&this.S()}T(){if(void 0===this.j)return;let e=this.j();if(!Array.isArray(e))throw Error("The args function must return an array");return e}async S(){let e=this.T(),t=this.O;this.O=e,e===t||void 0===e||void 0!==t&&this.m(t,e)||await this.run(e)}async run(e){let t,r;e??=this.T(),this.O=e,1===this.i?this.q?.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,"afterUpdate"===this.autoRun?queueMicrotask(()=>this._.requestUpdate()):this._.requestUpdate();let o=++this.p;this.q=new AbortController;let i=!1;try{t=await this.v(e,{signal:this.q.signal})}catch(e){i=!0,r=e}if(this.p===o){if(t===vL)this.i=0;else{if(!1===i){try{this.k?.(t)}catch{}this.i=2,this.o?.(t)}else{try{this.A?.(r)}catch{}this.i=3,this.h?.(r)}this.u=t,this.l=r}this._.requestUpdate()}}abort(e){1===this.i&&this.q?.abort(e)}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(e){switch(this.i){case 0:return e.initial?.();case 1:return e.pending?.();case 2:return e.complete?.(this.value);case 3:return e.error?.(this.error);default:throw Error("Unexpected status: "+this.i)}}};let vN=(e,t)=>e===t||e.length===t.length&&e.every((e,r)=>!K(e,t[r]));var vH=Object.defineProperty,vB=Object.getOwnPropertyDescriptor,vW=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?vB(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&vH(t,r,a),a};let vF=[{type:"branches",icon:"gl-branches-view",command:"gitlens.showBranchesView",tooltip:"Branches"},{type:"remotes",icon:"gl-remotes-view",command:"gitlens.showRemotesView",tooltip:"Remotes"},{type:"stashes",icon:"gl-stashes-view",command:"gitlens.showStashesView",tooltip:"Stashes"},{type:"tags",icon:"gl-tags-view",command:"gitlens.showTagsView",tooltip:"Tags"},{type:"worktrees",icon:"gl-worktrees-view",command:"gitlens.showWorktreesView",tooltip:"Worktrees"}],vG=class extends r7(lit_element_i){constructor(){super(...arguments),this._countsTask=new task_h(this,{args:()=>[this.fetchCounts()],task:([e])=>e,autoRun:!1})}get include(){let e=this._state.repositories?.find(e=>e.path===this._state.selectedRepository);return e?.virtual?["branches","remotes","tags"]:["branches","remotes","tags","stashes","worktrees"]}connectedCallback(){super.connectedCallback?.(),this._disposable=this._ipc.onReceiveMessage(e=>{switch(!0){case t1.is(e):this._counts=void 0,this.requestUpdate();break;case tQ.response.is(e):this._counts=Promise.resolve(e.params),this.requestUpdate()}})}disconnectedCallback(){super.disconnectedCallback?.(),this._disposable?.dispose()}async fetchCounts(){if(null==this._counts){let t=this._ipc;if(null!=t){async function e(){return await t.sendRequest(tQ,void 0)}this._counts=e()}else this._counts=Promise.resolve(void 0)}return this._counts}render(){return null==this._counts&&this._countsTask.run(),ew`<section class="sidebar">
			${fS(vF,e=>e,e=>this.renderIcon(e))}
		</section>`}renderIcon(e){if(null==this.include||this.include.includes(e.type))return ew`<gl-tooltip placement="right" content="${e.tooltip}">
			<a class="item" href="command:${e.command}" @click=${()=>this.sendTelemetry(e.command)}>
				<code-icon icon="${e.icon}"></code-icon>
				${this._countsTask.render({pending:()=>ew`<span class="count"
							><code-icon icon="loading" modifier="spin" size="9"></code-icon
						></span>`,complete:t=>{var r;return null==(r=t?.[e.type])?ek:ew`<span class="count">${r>999?"1K+":String(r)}</span>`},error:()=>ew`<span class="count error"><code-icon icon="warning" size="9"></code-icon></span>`})}
			</a>
		</gl-tooltip>`}sendTelemetry(e){hK(this,{name:"graph/action/sidebar",data:{action:e}})}};vG.styles=O`
		.sidebar {
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.4rem;
			background-color: var(--color-graph-background);
			color: var(--titlebar-fg);
			width: 2.6rem;
			font-size: 9px;
			font-weight: 600;
			height: 100%;
			padding: 3rem 0;
			z-index: 1040;
		}

		.item {
			color: inherit;
			text-decoration: none;
			display: flex;
			flex-direction: column;
			align-items: center;
			cursor: pointer;
		}

		.item:hover {
			color: var(--color-foreground);
			text-decoration: none;
		}

		.count {
			color: var(--color-foreground--50);
			/* color: var(--color-highlight); */
			margin-top: 0.4rem;
		}

		.count.error {
			color: var(--vscode-errorForeground);
			opacity: 0.6;
		}
	`,vW([e1({context:"ipc"})],vG.prototype,"_ipc",2),vW([e1({context:"graph-state-context",subscribe:!0})],vG.prototype,"_state",2),vG=vW([eP("gl-graph-sidebar")],vG);var vj=Object.defineProperty,vU=Object.getOwnPropertyDescriptor,vV=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?vU(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&vj(t,r,a),a};let vq=class extends r7(lit_element_i){constructor(){super(...arguments),this._hoverTrackingCounter=t_(),this._selectionTrackingCounter=t_()}createRenderRoot(){return this}onWebviewVisibilityChanged(e){e&&(this._hoverTrackingCounter.reset(),this._selectionTrackingCounter.reset())}resetHover(){this.graphHover.reset()}render(){return ew`
			<div class="graph">
				<gl-graph-header
					class="graph__header"
					@gl-select-commits=${this.handleHeaderSearchNavigation}
				></gl-graph-header>
				<div class="graph__workspace">
					${hZ(!this.graphState.allowed,()=>ew`<gl-graph-gate class="graph__gate"></gl-graph-gate>`)}
					<main id="main" class="graph__panes">
						<div class="graph__graph-pane">
							${hZ(this.graphState.config?.minimap!==!1,()=>ew`
									<gl-graph-minimap-container
										.activeDay=${this.graphState.activeDay}
										.disabled=${!this.graphState.config?.minimap}
										.rows=${this.graphState.rows??[]}
										.rowsStats=${this.graphState.rowsStats}
										.dataType=${this.graphState.config?.minimapDataType??"commits"}
										.markerTypes=${this.graphState.config?.minimapMarkerTypes??[]}
										.refMetadata=${this.graphState.refsMetadata}
										.searchResults=${this.graphState.searchResults}
										.visibleDays=${this.graphState.visibleDays}
										@gl-graph-minimap-selected=${this.handleMinimapDaySelected}
									></gl-graph-minimap-container>
								`)}
							${hZ(this.graphState.config?.sidebar,()=>ew`<gl-graph-sidebar></gl-graph-sidebar>`)}
							<gl-graph-hover id="commit-hover" distance=${0} skidding=${15}></gl-graph-hover>
							<gl-graph-wrapper
								@gl-graph-change-selection=${this.handleGraphSelectionChanged}
								@gl-graph-change-visible-days=${this.handleGraphVisibleDaysChanged}
								@gl-graph-mouse-leave=${this.handleGraphMouseLeave}
								@gl-graph-row-context-menu=${this.handleGraphRowContextMenu}
								@gl-graph-row-hover=${this.handleGraphRowHover}
								@gl-graph-row-unhover=${this.handleGraphRowUnhover}
							></gl-graph-wrapper>
						</div>
						<!-- future: commit details -->
					</main>
				</div>
			</div>
		`}handleHeaderSearchNavigation(e){this.graph.selectCommits([e.detail],!1,!0)}handleMinimapDaySelected(e){if(!this.graphState.rows)return;let{sha:t}=e.detail;if(null==t){let r=e.detail.date?.getTime();if(null==r)return;t=this.graphState.rows.reduce((e,t)=>Math.abs(t.date-r)<Math.abs(e.date-r)?t:e).sha}if(this.graph.selectCommits([t],!1,!0),null!=e.target){let{target:t}=e;queueMicrotask(()=>hK(t,{name:"graph/minimap/day/selected",data:{}}))}}handleGraphSelectionChanged(e){this.graphHover.hide();let t=this._selectionTrackingCounter.next();(1===t||t%100==0)&&queueMicrotask(()=>this._telemetry.sendEvent({name:"graph/row/selected",data:{rows:e.detail.selection.length,count:t}}))}handleGraphVisibleDaysChanged({detail:e}){this.graphState.visibleDays=e}handleGraphRowContextMenu(e){this.graphHover.hide()}handleGraphRowHover({detail:{graphZoneType:e,graphRow:t,clientX:r,currentTarget:o}}){if("ref"===e)return;let i=this.graphHover;if(null==i)return;let a=o.getBoundingClientRect(),s=a.top,c=a.height;i.requestMarkdown??=this.getRowHoverPromise.bind(this),i.onRowHovered(t,{getBoundingClientRect:function(){return{width:60,height:c,x:r,y:s,top:s,left:r,right:r+60,bottom:s+c}}}),this.minimapEl?.select(t.date,!0)}handleGraphRowUnhover({detail:{graphZoneType:e,graphRow:t,relatedTarget:r}}){"ref"!==e&&this.graphHover.onRowUnhovered(t,r)}async getRowHoverPromise(e){try{let t=await this._ipc.sendRequest(tX,{type:e.type,id:e.sha}),r=this._hoverTrackingCounter.next();return(1===r||r%100==0)&&queueMicrotask(()=>this._telemetry.sendEvent({name:"graph/row/hovered",data:{count:r}})),t}catch(t){return{id:e.sha,markdown:{status:"rejected",reason:t}}}}handleGraphMouseLeave(){this.minimapEl?.unselect(void 0,!0)}};vV([e1({context:"graph-state-context",subscribe:!0})],vq.prototype,"graphState",2),vV([e1({context:"ipc"})],vq.prototype,"_ipc",2),vV([e1({context:"telemetry"})],vq.prototype,"_telemetry",2),vV([eH("gl-graph-wrapper")],vq.prototype,"graph",2),vV([eH("gl-graph-hover#commit-hover")],vq.prototype,"graphHover",2),vV([eH("gl-graph-minimap-container")],vq.prototype,"minimapEl",2),vq=vV([eP("gl-graph-app")],vq);var vZ=Object.defineProperty,vK=Object.getOwnPropertyDescriptor,vY=(e,t,r,o)=>{for(var i,a=o>1?void 0:o?vK(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o?i(t,r,a):i(a))||a);return o&&a&&vZ(t,r,a),a};let vQ=class extends GlAppHost{constructor(){super(...arguments),this.searching=""}createRenderRoot(){return this}get hasFilters(){return!!this.state.config?.onlyFollowFirstParent||null!=this.state.excludeTypes&&Object.values(this.state.excludeTypes).includes(!0)}render(){return ew`<gl-graph-app></gl-graph-app>`}createStateProvider(e,t){return new GraphStateProvider(this,e,t,this._logger,{onStateUpdate:e=>{"rows"in e&&this.appElement.resetHover()}})}onThemeUpdated(e){let t=document.documentElement.style,r=Color.from(e.colors.background),o=Color.from(e.colors.foreground),i=r.getRelativeLuminance(),a=o.getRelativeLuminance(),s=e=>{let t,r;return a>i?(r=a,t=i):(t=a,r=i),e/1*(r-t)+t},c=Color.fromCssVariable("--vscode-scrollbarSlider-background",e.computedStyle);if(t.setProperty("--color-graph-minimap-visibleAreaBackground",c.luminance(s(e.isLightTheme?.6:.1)).toString()),!e.isLightTheme){c=Color.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBackground",c.luminance(s(.55)).toString()),c=Color.fromCssVariable("--color-graph-scroll-marker-local-branches",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchBorder",c.luminance(s(.55)).toString());let r=(c=Color.fromCssVariable("--vscode-editor-foreground",e.computedStyle)).isLighter()?c.luminance(.01).toString():c.luminance(.99).toString();t.setProperty("--color-graph-minimap-tip-headForeground",r),t.setProperty("--color-graph-minimap-tip-upstreamForeground",r),t.setProperty("--color-graph-minimap-tip-highlightForeground",r),t.setProperty("--color-graph-minimap-tip-branchForeground",r)}let u=s(e.isLightTheme?.72:.064),h=s(e.isLightTheme?.64:.076),d=s(e.isLightTheme?.92:.02);c=Color.fromCssVariable("--branch-status-ahead-foreground",e.computedStyle),t.setProperty("--branch-status-ahead-background",c.luminance(u).toString()),t.setProperty("--branch-status-ahead-hover-background",c.luminance(h).toString()),t.setProperty("--branch-status-ahead-pill-background",c.luminance(d).toString()),c=Color.fromCssVariable("--branch-status-behind-foreground",e.computedStyle),t.setProperty("--branch-status-behind-background",c.luminance(u).toString()),t.setProperty("--branch-status-behind-hover-background",c.luminance(h).toString()),t.setProperty("--branch-status-behind-pill-background",c.luminance(d).toString()),c=Color.fromCssVariable("--branch-status-both-foreground",e.computedStyle),t.setProperty("--branch-status-both-background",c.luminance(u).toString()),t.setProperty("--branch-status-both-hover-background",c.luminance(h).toString()),t.setProperty("--branch-status-both-pill-background",c.luminance(d).toString())}onWebviewVisibilityChanged(e){this.appElement?.onWebviewVisibilityChanged(e)}};vY([eH("gl-graph-app")],vQ.prototype,"appElement",2),vY([eL()],vQ.prototype,"searching",2),vQ=vY([eP("gl-graph-apphost")],vQ);export{vQ as GraphAppHost};