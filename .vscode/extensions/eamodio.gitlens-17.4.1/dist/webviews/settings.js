let t,e,o,n;var r,a,l,c,h,d,p,u,g={602:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isWide=e.isFullWidth=e.isAmbiguous=void 0,e.isAmbiguous=t=>161===t||164===t||167===t||168===t||170===t||173===t||174===t||t>=176&&t<=180||t>=182&&t<=186||t>=188&&t<=191||198===t||208===t||215===t||216===t||t>=222&&t<=225||230===t||t>=232&&t<=234||236===t||237===t||240===t||242===t||243===t||t>=247&&t<=250||252===t||254===t||257===t||273===t||275===t||283===t||294===t||295===t||299===t||t>=305&&t<=307||312===t||t>=319&&t<=322||324===t||t>=328&&t<=331||333===t||338===t||339===t||358===t||359===t||363===t||462===t||464===t||466===t||468===t||470===t||472===t||474===t||476===t||593===t||609===t||708===t||711===t||t>=713&&t<=715||717===t||720===t||t>=728&&t<=731||733===t||735===t||t>=768&&t<=879||t>=913&&t<=929||t>=931&&t<=937||t>=945&&t<=961||t>=963&&t<=969||1025===t||t>=1040&&t<=1103||1105===t||8208===t||t>=8211&&t<=8214||8216===t||8217===t||8220===t||8221===t||t>=8224&&t<=8226||t>=8228&&t<=8231||8240===t||8242===t||8243===t||8245===t||8251===t||8254===t||8308===t||8319===t||t>=8321&&t<=8324||8364===t||8451===t||8453===t||8457===t||8467===t||8470===t||8481===t||8482===t||8486===t||8491===t||8531===t||8532===t||t>=8539&&t<=8542||t>=8544&&t<=8555||t>=8560&&t<=8569||8585===t||t>=8592&&t<=8601||8632===t||8633===t||8658===t||8660===t||8679===t||8704===t||8706===t||8707===t||8711===t||8712===t||8715===t||8719===t||8721===t||8725===t||8730===t||t>=8733&&t<=8736||8739===t||8741===t||t>=8743&&t<=8748||8750===t||t>=8756&&t<=8759||8764===t||8765===t||8776===t||8780===t||8786===t||8800===t||8801===t||t>=8804&&t<=8807||8810===t||8811===t||8814===t||8815===t||8834===t||8835===t||8838===t||8839===t||8853===t||8857===t||8869===t||8895===t||8978===t||t>=9312&&t<=9449||t>=9451&&t<=9547||t>=9552&&t<=9587||t>=9600&&t<=9615||t>=9618&&t<=9621||9632===t||9633===t||t>=9635&&t<=9641||9650===t||9651===t||9654===t||9655===t||9660===t||9661===t||9664===t||9665===t||t>=9670&&t<=9672||9675===t||t>=9678&&t<=9681||t>=9698&&t<=9701||9711===t||9733===t||9734===t||9737===t||9742===t||9743===t||9756===t||9758===t||9792===t||9794===t||9824===t||9825===t||t>=9827&&t<=9829||t>=9831&&t<=9834||9836===t||9837===t||9839===t||9886===t||9887===t||9919===t||t>=9926&&t<=9933||t>=9935&&t<=9939||t>=9941&&t<=9953||9955===t||9960===t||9961===t||t>=9963&&t<=9969||9972===t||t>=9974&&t<=9977||9979===t||9980===t||9982===t||9983===t||10045===t||t>=10102&&t<=10111||t>=11094&&t<=11097||t>=12872&&t<=12879||t>=57344&&t<=63743||t>=65024&&t<=65039||65533===t||t>=127232&&t<=127242||t>=127248&&t<=127277||t>=127280&&t<=127337||t>=127344&&t<=127373||127375===t||127376===t||t>=127387&&t<=127404||t>=917760&&t<=917999||t>=983040&&t<=1048573||t>=1048576&&t<=1114109,e.isFullWidth=t=>12288===t||t>=65281&&t<=65376||t>=65504&&t<=65510,e.isWide=t=>t>=4352&&t<=4447||8986===t||8987===t||9001===t||9002===t||t>=9193&&t<=9196||9200===t||9203===t||9725===t||9726===t||9748===t||9749===t||t>=9800&&t<=9811||9855===t||9875===t||9889===t||9898===t||9899===t||9917===t||9918===t||9924===t||9925===t||9934===t||9940===t||9962===t||9970===t||9971===t||9973===t||9978===t||9981===t||9989===t||9994===t||9995===t||10024===t||10060===t||10062===t||t>=10067&&t<=10069||10071===t||t>=10133&&t<=10135||10160===t||10175===t||11035===t||11036===t||11088===t||11093===t||t>=11904&&t<=11929||t>=11931&&t<=12019||t>=12032&&t<=12245||t>=12272&&t<=12287||t>=12289&&t<=12350||t>=12353&&t<=12438||t>=12441&&t<=12543||t>=12549&&t<=12591||t>=12593&&t<=12686||t>=12688&&t<=12771||t>=12783&&t<=12830||t>=12832&&t<=12871||t>=12880&&t<=19903||t>=19968&&t<=42124||t>=42128&&t<=42182||t>=43360&&t<=43388||t>=44032&&t<=55203||t>=63744&&t<=64255||t>=65040&&t<=65049||t>=65072&&t<=65106||t>=65108&&t<=65126||t>=65128&&t<=65131||t>=94176&&t<=94180||94192===t||94193===t||t>=94208&&t<=100343||t>=100352&&t<=101589||t>=101632&&t<=101640||t>=110576&&t<=110579||t>=110581&&t<=110587||110589===t||110590===t||t>=110592&&t<=110882||110898===t||t>=110928&&t<=110930||110933===t||t>=110948&&t<=110951||t>=110960&&t<=111355||126980===t||127183===t||127374===t||t>=127377&&t<=127386||t>=127488&&t<=127490||t>=127504&&t<=127547||t>=127552&&t<=127560||127568===t||127569===t||t>=127584&&t<=127589||t>=127744&&t<=127776||t>=127789&&t<=127797||t>=127799&&t<=127868||t>=127870&&t<=127891||t>=127904&&t<=127946||t>=127951&&t<=127955||t>=127968&&t<=127984||127988===t||t>=127992&&t<=128062||128064===t||t>=128066&&t<=128252||t>=128255&&t<=128317||t>=128331&&t<=128334||t>=128336&&t<=128359||128378===t||128405===t||128406===t||128420===t||t>=128507&&t<=128591||t>=128640&&t<=128709||128716===t||t>=128720&&t<=128722||t>=128725&&t<=128727||t>=128732&&t<=128735||128747===t||128748===t||t>=128756&&t<=128764||t>=128992&&t<=129003||129008===t||t>=129292&&t<=129338||t>=129340&&t<=129349||t>=129351&&t<=129535||t>=129648&&t<=129660||t>=129664&&t<=129672||t>=129680&&t<=129725||t>=129727&&t<=129733||t>=129742&&t<=129755||t>=129760&&t<=129768||t>=129776&&t<=129784||t>=131072&&t<=196605||t>=196608&&t<=262141},6047:(t,e,o)=>{o(602)}},f={};function m(t){var e=f[t];if(void 0!==e)return e.exports;var o=f[t]={exports:{}};return g[t](o,o.exports,m),o.exports}function v(t,e){return null==e?`command:${t}`:`command:${t}?${encodeURIComponent("string"==typeof e?e:JSON.stringify(e))}`}m.d=(t,e)=>{for(var o in e)m.o(e,o)&&!m.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},m.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),Object.defineProperty(m,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(t){}});let IpcCall=class IpcCall{constructor(t,e,o=!1,n=!1){this.scope=t,this.reset=o,this.pack=n,this.method=`${t}/${e}`}is(t){return t.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(t,e,o,n){super(t,e,o,n),this.response=new IpcNotification(this.scope,`${e}/completion`,this.reset,this.pack)}};let IpcNotification=class IpcNotification extends IpcCall{};let b=new IpcCommand("core","webview/ready"),w=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let _=new IpcRequest("core","promos/applicable"),C=new IpcCommand("core","configuration/update"),$=new IpcCommand("core","telemetry/sendEvent"),x=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let S=new IpcCommand("core","webview/focus/didChange"),A=new IpcNotification("core","webview/visibility/didChange"),P=new IpcNotification("core","configuration/didChange"),E="settings",T=new IpcRequest(E,"configuration/preview"),D=new IpcNotification(E,"didOpenAnchor"),O=new IpcNotification(E,"didChangeAccount"),B=new IpcNotification(E,"didChangeConnectedJira");let context_request_event_s=class context_request_event_s extends Event{constructor(t,e,o,n){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=o,this.subscribe=n??!1}};let s=class s{constructor(t,e,o,n){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context)?(this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1):(this.context=e,this.callback=o,this.subscribe=n??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){let o=e||!Object.is(t,this.o);this.o=t,o&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(let[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,o){if(!o)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});let{disposer:n}=this.subscriptions.get(t);t(this.value,n)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}};let i=class i extends value_notifier_s{constructor(t,e,o){super(void 0!==e.context?e.initialValue:o),this.onContextRequest=t=>{if(t.context!==this.context)return;let e=t.contextTarget??t.composedPath()[0];e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{if(t.context!==this.context||(t.contextTarget??t.composedPath()[0])===this.host)return;let e=new Set;for(let[t,{consumerHost:o}]of this.subscriptions)e.has(t)||(e.add(t),o.dispatchEvent(new context_request_event_s(this.context,o,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function F(t){let e=.001*performance.now(),o=Math.floor(e),n=Math.floor(e%1*1e9);return void 0!==t&&(o-=t[0],(n-=t[1])<0&&(o--,n+=1e9)),[o,n]}m(6047);var U=((r=U||{})[r.Hash=35]="Hash",r[r.Slash=47]="Slash",r[r.Digit0=48]="Digit0",r[r.Digit1=49]="Digit1",r[r.Digit2=50]="Digit2",r[r.Digit3=51]="Digit3",r[r.Digit4=52]="Digit4",r[r.Digit5=53]="Digit5",r[r.Digit6=54]="Digit6",r[r.Digit7=55]="Digit7",r[r.Digit8=56]="Digit8",r[r.Digit9=57]="Digit9",r[r.Backslash=92]="Backslash",r[r.A=65]="A",r[r.B=66]="B",r[r.C=67]="C",r[r.D=68]="D",r[r.E=69]="E",r[r.F=70]="F",r[r.Z=90]="Z",r[r.a=97]="a",r[r.b=98]="b",r[r.c=99]="c",r[r.d=100]="d",r[r.e=101]="e",r[r.f=102]="f",r[r.z=122]="z",r),j=((a=j||{}).AngleBracketLeftHeavy="❰",a.AngleBracketRightHeavy="❱",a.ArrowBack="↩",a.ArrowDown="↓",a.ArrowDownUp="⇵",a.ArrowDropRight="⤷",a.ArrowHeadRight="➤",a.ArrowLeft="←",a.ArrowLeftDouble="⇐",a.ArrowLeftRight="↔",a.ArrowLeftRightDouble="⇔",a.ArrowLeftRightDoubleStrike="⇎",a.ArrowLeftRightLong="⟷",a.ArrowRight="→",a.ArrowRightDouble="⇒",a.ArrowRightHollow="⇨",a.ArrowUp="↑",a.ArrowUpDown="⇅",a.ArrowUpRight="↗",a.ArrowsHalfLeftRight="⇋",a.ArrowsHalfRightLeft="⇌",a.ArrowsLeftRight="⇆",a.ArrowsRightLeft="⇄",a.Asterisk="∗",a.Bullseye="◎",a.Check="✔",a.Dash="—",a.Dot="•",a.Ellipsis="…",a.EnDash="–",a.Envelope="✉",a.EqualsTriple="≡",a.Flag="⚑",a.FlagHollow="⚐",a.MiddleEllipsis="⋯",a.MuchLessThan="≪",a.MuchGreaterThan="≫",a.Pencil="✎",a.Space=" ",a.SpaceThin=" ",a.SpaceThinnest=" ",a.SquareWithBottomShadow="❏",a.SquareWithTopShadow="❐",a.Warning="⚠",a.ZeroWidthSpace="​",a);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var q=((l=q||{}).File="file",l.Git="git",l.GitHub="github",l.GitLens="gitlens",l.GitLensAIMarkdown="gitlens-ai-markdown",l.PRs="pr",l.Remote="vscode-remote",l.Vsls="vsls",l.VslsScc="vsls-scc",l.Virtual="vscode-vfs",l);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let V="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links";Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${V}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${V}`,graph:`https://gitkraken.com/solutions/commit-graph?${V}`,launchpad:`https://gitkraken.com/solutions/launchpad?${V}`,platform:`https://gitkraken.com/devex?${V}`,pricing:`https://gitkraken.com/gitlens/pricing?${V}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${V}`,security:`https://help.gitkraken.com/gitlens/security?${V}`,workspaces:`https://gitkraken.com/solutions/workspaces?${V}`,cli:`https://gitkraken.com/cli?${V}`,browserExtension:`https://gitkraken.com/browser-extension?${V}`,desktop:`https://gitkraken.com/git-client?${V}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${V}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${V}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${V}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${V}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${V}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${V}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${V}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${V}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${V}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${V}#improve-workflows-with-integrations`,streamlineCollaboration:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${V}#streamline-collaboration`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${V}`});let Z=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,W=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,G=new Map,Y=new Map;function K(e,o,n,r=!0){o=o??void 0;let a=`${n??""}:${o}`,l=G.get(a);if(null==l){let e,c=function(t){if(null==t)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let e=W.exec(t);if(e?.groups!=null){let{dateStyle:t,timeStyle:o}=e.groups;return{localeMatcher:"best fit",dateStyle:t||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:e}of t.matchAll(Z))if(null!=e){for(let[t,n]of Object.entries(e))if(null!=n)switch(t){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":"DD"===n?o.day="2-digit":o.day="numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(o);e=null==n?t:"system"===n?void 0:[n],l=new Intl.DateTimeFormat(e,c),r&&G.set(a,l)}if(null==o||W.test(o))return l.format(e);let c=l.formatToParts(e);return o.replace(Z,(o,a,l,h,d,p,u,g,f,m,v,b,w,_,C)=>{if(null!=a)return a.substring(1,a.length-1);for(let[o,a]of Object.entries(C)){if(null==a)continue;let l=c.find(t=>t.type===o);if("Do"===a&&l?.type==="day"){var $=Number(l.value);let t=$%100;return`${$}${J[(t-20)%10]??J[t]??J[0]}`}if("a"===a&&l?.type==="dayPeriod"){let o=(function(e){let o=`${n??""}:time:${e}`,a=G.get(o);if(null==a){let l;l=null==n?t:"system"===n?void 0:[n],a=new Intl.DateTimeFormat(l,{localeMatcher:"best fit",timeStyle:e}),r&&G.set(o,a)}return a})("short").formatToParts(e).find(t=>"dayPeriod"===t.type);return` ${(o??l)?.value??""}`}return l?.value??""}return""})}let J=["th","st","nd","rd"];function Q(e,o){null==e&&(e="decimal");let n=`${o??""}:${e}`,r=Y.get(n);if(null==r){let a,l={localeMatcher:"best fit",style:e};a=null==o?t:"system"===o?void 0:[o],r=new Intl.NumberFormat(a,l),Y.set(n,r)}return r.format}function X(t){let[e,o]=F(t);return 1e3*e+Math.floor(o/1e6)}function tt(t,o,n){let r;if(null==n)return e??=Q(),`${e(o)} ${t}${1===o?"":"s"}`;let a=1===o?t:n.plural??`${t}s`;return n.only?a:(0===o?r=n.zero??o:!1===n.format?r=o:null!=n.format?r=n.format(o):(e??=Q(),r=e(o)),`${r}${n.infix??" "}${a}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var te=((c=te||{})[c.Off=0]="Off",c[c.Error=1]="Error",c[c.Warn=2]="Warn",c[c.Info=3]="Info",c[c.Debug=4]="Debug",c);let ti=["accessToken","password","token"],to=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(t,e,o=!1){if(null!=t.sanitizeKeys)for(let e of ti)t.sanitizeKeys.add(e);else t.sanitizeKeys=new Set(ti);this.provider=t,this._isDebugging=o,this.logLevel=e}enabled(t){return this.level>=ts(t)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(t){this._logLevel=t,this.level=ts(this._logLevel),"off"===t?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(t,...e){let o;(!(this.level<4)||this.isDebugging)&&("string"==typeof t?o=t:(o=e.shift(),null!=t&&(o=`${t.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,e)}`))}error(t,e,...o){let n;if(!(this.level<1)||this.isDebugging){if(null==(n=null==e||"string"==typeof e?e:`${e.prefix} ${o.shift()??""}`)){let e=t instanceof Error?t.stack:void 0;if(e){let t=/.*\s*?at\s(.+?)\s/.exec(e);null!=t&&(n=t[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??""}${this.toLoggableParams(!1,o)}${null!=t?`
${String(t)}`:""}`)}}log(t,...e){let o;(!(this.level<3)||this.isDebugging)&&("string"==typeof t?o=t:(o=e.shift(),null!=t&&(o=`${t.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,e)}`))}warn(t,...e){let o;(!(this.level<2)||this.isDebugging)&&("string"==typeof t?o=t:(o=e.shift(),null!=t&&(o=`${t.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,e)}`))}showOutputChannel(t){this.output?.show?.(t)}toLoggable(t,e){if("object"!=typeof t)return String(t);if(Array.isArray(t))return`[${t.map(t=>this.toLoggable(t,e)).join(", ")}]`;let o=this.provider.toLoggable?.(t);if(null!=o)return o;try{return JSON.stringify(t,(t,o)=>this.provider.sanitizeKeys.has(t)?`<${t}>`:(null!=e&&(o=e(t,o)),this.provider?.sanitizer!=null&&(o=this.provider.sanitizer(t,o)),o))}catch{return"<error>"}}toLoggableParams(t,e){if(0===e.length||t&&this.level<4&&!this.isDebugging)return"";let o=e.map(t=>this.toLoggable(t)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function ts(t){switch(t){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let tn=new WeakMap,tr={enabled:t=>to.enabled(t)||to.isDebugging,log:(t,e,o,...n)=>{switch(t){case"error":to.error(void 0,e,o,...n);break;case"warn":to.warn(e,o,...n);break;case"info":to.log(e,o,...n);break;default:to.debug(e,o,...n)}}},ta=0x40000000-1;function tl(){let t=0;return{get current(){return t},next:function(){return t===ta&&(t=0),++t},reset:function(){t=0}}}let tc=tl(),th=new Map;function td(t,e){return null==e?`[${t.toString(16).padStart(13)}]`:`[${e.toString(16).padStart(5)} \u2192 ${t.toString(16).padStart(5)}]`}function tp(t,e){if(null!=e&&"boolean"!=typeof e)return{scopeId:e.scopeId,prevScopeId:e.prevScopeId,prefix:`${e.prefix}${t}`};let o=e?tc.current:void 0,n=tc.next();return{scopeId:n,prevScopeId:o,prefix:`${td(n,o)} ${t}`}}let LoggerContext=class LoggerContext{constructor(t){this.scope=tp(t,void 0),to.configure({name:t,createChannel:function(t){return{name:t,appendLine:to.isDebugging?function(){}:function(t){}}}},"off",!1)}log(t,...e){"string"==typeof t?to.log(this.scope,t,...e):to.log(t,e.shift(),...e)}};let tu="home";new IpcRequest(tu,"launchpad/summary"),new IpcRequest(tu,"overview/active"),new IpcRequest(tu,"overview/inactive"),new IpcRequest(tu,"overviewFilter"),new IpcCommand(tu,"overview/repository/change"),new IpcNotification(tu,"overview/repository/didChange"),new IpcCommand(tu,"previewEnabled/toggle"),new IpcCommand(tu,"section/collapse"),new IpcCommand(tu,"walkthrough/dismiss"),new IpcNotification(tu,"ai/allAccess/didChange"),new IpcCommand(tu,"ai/allAccess/dismiss"),new IpcCommand(tu,"overview/filter/set"),new IpcCommand(tu,"openInGraph"),new IpcNotification(tu,"repositories/didCompleteDiscovering"),new IpcNotification(tu,"previewEnabled/didChange"),new IpcNotification(tu,"repository/wip/didChange"),new IpcNotification(tu,"repositories/didChange"),new IpcNotification(tu,"walkthroughProgress/didChange"),new IpcNotification(tu,"integrations/didChange"),new IpcNotification(tu,"launchpad/didChange");let tg=new IpcNotification(tu,"subscription/didChange");new IpcNotification(tu,"org/settings/didChange"),new IpcNotification(tu,"home/ownerFilter/didChange"),new IpcNotification(tu,"account/didFocus");let tf="graph";new IpcCommand(tf,"chooseRepository"),new IpcCommand(tf,"dblclick"),new IpcCommand(tf,"dblclick"),new IpcCommand(tf,"avatars/get"),new IpcCommand(tf,"refs/metadata/get"),new IpcCommand(tf,"rows/get"),new IpcCommand(tf,"pullRequest/openDetails"),new IpcCommand(tf,"search/openInView"),new IpcCommand(tf,"columns/update"),new IpcCommand(tf,"refs/update/visibility"),new IpcCommand(tf,"filters/update/excludeTypes"),new IpcCommand(tf,"configuration/update"),new IpcCommand(tf,"search/update/mode"),new IpcCommand(tf,"filters/update/includedRefs"),new IpcCommand(tf,"selection/update"),new IpcRequest(tf,"chooseRef"),new IpcRequest(tf,"rows/ensure"),new IpcRequest(tf,"counts"),new IpcRequest(tf,"row/hover/get"),new IpcRequest(tf,"search"),new IpcNotification(tf,"repositories/integration/didChange"),new IpcNotification(tf,"didChange",!0,!0),new IpcNotification(tf,"configuration/didChange");let tm=new IpcNotification(tf,"subscription/didChange");new IpcNotification(tf,"org/settings/didChange"),new IpcNotification(tf,"avatars/didChange"),new IpcNotification(tf,"branchState/didChange"),new IpcNotification(tf,"refs/didChangeMetadata"),new IpcNotification(tf,"columns/didChange"),new IpcNotification(tf,"scrollMarkers/didChange"),new IpcNotification(tf,"refs/didChangeVisibility"),new IpcNotification(tf,"rows/didChange",void 0,!0),new IpcNotification(tf,"rows/stats/didChange"),new IpcNotification(tf,"selection/didChange"),new IpcNotification(tf,"workingTree/didChange"),new IpcNotification(tf,"didSearch"),new IpcNotification(tf,"didFetch"),new IpcNotification(tf,"featurePreview/didStart");let tv="timeline";new IpcRequest(tv,"ref/choose"),new IpcRequest(tv,"path/choose"),new IpcCommand(tv,"point/open"),new IpcCommand(tv,"config/update"),new IpcCommand(tv,"scope/update");let tb=new IpcNotification(tv,"didChange");let PromosContext=class PromosContext{constructor(t){this.disposables=[],this._promos=new Map,this.ipc=t,this.disposables.push(this.ipc.onReceiveMessage(t=>{(tg.is(t)||tm.is(t)||tb.is(t))&&this._promos.clear()}))}async getApplicablePromo(t,e){let o=`${t}|${e}`,n=this._promos.get(o);return null==n&&(n=this.ipc.sendRequest(_,{plan:t,location:e}).then(t=>t.promo,()=>void 0),this._promos.set(o,n)),await n}dispose(){this.disposables.forEach(t=>t.dispose())}};let TelemetryContext=class TelemetryContext{constructor(t){this.disposables=[],this.ipc=t}sendEvent(t){this.ipc.sendCommand($,t)}dispose(){this.disposables.forEach(t=>t.dispose())}};function ty(t){return(t=t.toString().toLowerCase()).includes("ms")?parseFloat(t):t.includes("s")?1e3*parseFloat(t):parseFloat(t)}function tw(t,e){return new Promise(o=>{t.addEventListener(e,function n(r){r.target===t&&(t.removeEventListener(e,n),o())})})}(p||(p={})).on=function(t,e,o,n){let r=!1;if("string"==typeof t){let a=function(e){let n=e?.target?.closest(t);null!=n&&o(e,n)};return document.addEventListener(e,a,n??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(e,a,n??!0))}}}let a=function(t){o(t,this)};return t.addEventListener(e,a,n??!1),{dispose:()=>{r||(r=!0,t.removeEventListener(e,a,n??!1))}}};let t_=/\(([\s\S]*)\)/,tC=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,t$=/\s?=.*$/;function tx(t,e=!1){let o,n,r,a,l,c=0,h=!1,d=!1,p=!0;null!=t&&({args:o,if:n,enter:r,exit:a,prefix:l,logThreshold:c=0,scoped:h=!0,singleLine:d=!1,timed:p=!0}=t),c>0&&(d=!0,p=!0),p&&(h=!0);let u=to.isDebugging,g=e?to.debug:to.log,f=u?"debug":"info";return(t,e,m)=>{let v,b;if("function"==typeof m.value?(v=m.value,b="value"):"function"==typeof m.get&&(v=m.get,b="get"),null==v||null==b)throw Error("Not supported");let w=!1!==o?function(t){if("function"!=typeof t)throw Error("Not supported");if(0===t.length)return[];let e=Function.prototype.toString.call(t),o=(e=(e=e.replace(tC,"")||e).slice(0,e.indexOf("{"))).indexOf("("),n=e.indexOf(")");o=o>=0?o+1:0,n=n>0?n:e.indexOf("="),e=e.slice(o,n),e=`(${e})`;let r=t_.exec(e);return null!=r?r[1].split(",").map(t=>t.trim().replace(t$,"")):[]}(v):[];m[b]=function(...t){var m,b;let _,C;if(!u&&!to.enabled(f)||null!=n&&!n.apply(this,t))return v.apply(this,t);let $=tc.current,x=tc.next(),S=this!=null?function(t){let e;if("function"==typeof t){if(null==(e=t.prototype?.constructor))return t.name}else e=t.constructor;let o=e?.name??"",n=o.indexOf("_");-1!==n&&(o=o.substring(n+1));let r=tn.get(e);return r?.(t,o)??o}(this):void 0,A=S?h?`${td(x,$)} ${S}.${e}`:`${S}.${e}`:e;null!=l&&(A=l({id:x,instance:this,instanceName:S??"",name:e,prefix:A},...t)),h&&(m={scopeId:x,prevScopeId:$,prefix:A},m={prevScopeId:tc.current,...m},th.set(x,m),_=m);let P=null!=r?r(...t):"";if(!1===o||0===t.length)C="",d||g.call(to,`${A}${P}`);else{let e,n,r,a;C="";let l=-1;for(a of t){if(n=w[++l],null!=(e=o?.[l])){if("boolean"==typeof e)continue;if(C.length>0&&(C+=", "),"string"==typeof e){C+=e;continue}r=String(e(a))}else C.length>0&&(C+=", "),r=to.toLoggable(a);C+=n?`${n}=${r}`:r}d||g.call(to,C?`${A}${P}(${C})`:`${A}${P}`)}if(d||p||null!=a){let e,o=p?F():void 0,n=t=>{let e=void 0!==o?` [${X(o)}ms]`:"";d?to.error(t,C?`${A}${P}(${C})`:`${A}${P}`,_?.exitDetails?`failed${_.exitDetails}${e}`:`failed${e}`):to.error(t,A,_?.exitDetails?`failed${_.exitDetails}${e}`:`failed${e}`),h&&th.delete(x)};try{e=v.apply(this,t)}catch(t){throw n(t),t}let r=t=>{let e,n,r,l;if(null!=o?(e=X(o))>500?(n=to.warn,r=` [*${e}ms] (slow)`):(n=g,r=` [${e}ms]`):(r="",n=g),null!=a)if("function"==typeof a)try{l=a(t)}catch(t){l=`@log.exit error: ${t}`}else!0===a&&(l=`returned ${to.toLoggable(t)}`);else _?.exitFailed?(l=_.exitFailed,n=(t,...e)=>to.error(null,t,...e)):l="completed";d?(0===c||e>c)&&n.call(to,C?`${A}${P}(${C}) ${l}${_?.exitDetails||""}${r}`:`${A}${P} ${l}${_?.exitDetails||""}${r}`):n.call(to,C?`${A}(${C}) ${l}${_?.exitDetails||""}${r}`:`${A} ${l}${_?.exitDetails||""}${r}`),h&&th.delete(x)};return null!=e&&null!=(b=e)&&(b instanceof Promise||"function"==typeof b?.then)?e.then(r,n):r(e),e}return v.apply(this,t)}}}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(t,e,...o){let n;if(this._stopped=!1,this.logScope=null!=t&&"string"!=typeof t?t:tp(t??"",!1),n="boolean"==typeof e?.log?e.log?{}:void 0:e?.log??{},this.logLevel=e?.logLevel??"info",this.logProvider=e?.provider??tr,this._time=F(),null!=n){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${n.message??""}${n.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[t,e]=F(this._time);return 1e3*t+Math.floor(e/1e6)}log(t){this.logCore(t,!1)}restart(t){this.logCore(t,!0),this._time=F(),this._stopped=!1}stop(t){this._stopped||(this.restart(t),this._stopped=!0)}logCore(t,e){if(!this.logProvider.enabled(this.logLevel))return;if(!e)return void this.logProvider.log(this.logLevel,this.logScope,`${t?.message??""}${t?.suffix??""}`);let[o,n]=F(this._time),r=1e3*o+Math.floor(n/1e6),a=t?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${r}ms]${t?.suffix??""}`)}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(t,e,o)=>{null==this.listeners&&(this.listeners=new LinkedList);let n=this.listeners.push(null==e?t:[t,e]),r={dispose:()=>{r.dispose=Emitter._noop,this._disposed||n()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(t){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let e=this.listeners.iterator(),o=e.next();!o.done;o=e.next())this._deliveryQueue.push([o.value,t]);for(;this._deliveryQueue.size>0;){let[t,e]=this._deliveryQueue.shift();try{"function"==typeof t?t(e):t[0].call(t[1],e)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let tk={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(t){this.element=t,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(t){return this._insert(t,!1)}push(t){return this._insert(t,!0)}_insert(t,e){let o=new events_Node(t);if(this._first===events_Node.Undefined)this._first=o,this._last=o;else if(e){let t=this._last;this._last=o,o.prev=t,t.next=o}else{let t=this._first;this._first=o,o.next=t,t.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===events_Node.Undefined)return;let t=this._first.element;return this._remove(this._first),t}pop(){if(this._last===events_Node.Undefined)return;let t=this._last.element;return this._remove(this._last),t}_remove(t){if(t.prev!==events_Node.Undefined&&t.next!==events_Node.Undefined){let e=t.prev;e.next=t.next,t.next.prev=e}else t.prev===events_Node.Undefined&&t.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):t.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):t.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let t,e=this._first;return{next:function(){return e===events_Node.Undefined?tk:(null==t?t={done:!1,value:e.element}:t.value=e.element,e=e.next,t)}}}toArray(){let t=[];for(let e=this._first;e!==events_Node.Undefined;e=e.next)t.push(e.element);return t}};var tS=Object.defineProperty,tA=Object.getOwnPropertyDescriptor,tL=(t,e,o,n)=>{for(var r,a=n>1?void 0:n?tA(e,o):e,l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n?r(e,o,a):r(a))||a);return n&&a&&tS(e,o,a),a};function tP(){return o??=acquireVsCodeApi()}let tE=tl();function tM(){return`webview:${tE.next()}`}let tT=class{constructor(t){this.appName=t,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=tP(),this._disposable=p.on(window,"message",t=>this.onMessageReceived(t))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(t){let e=th.get(tc.current),o=t.data;if(o.packed&&o.params instanceof Uint8Array){let n=function(t,e,...o){return(e?.provider??tr).enabled(e?.logLevel??"info")?new Stopwatch(t,e,...o):void 0}(tp(` deserializing msg=${t.data.method}`,e),{log:!1,logLevel:"debug"});this._textDecoder??=new TextDecoder,o.params=JSON.parse(this._textDecoder.decode(o.params)),n?.stop()}if(this.replaceIpcPromisesWithPromises(o.params),null!=o.completionId){var n,r;let t=(n=o.method,r=o.completionId,`${n}|${r}`);this._pendingHandlers.get(t)?.(o);return}this._onReceiveMessage.fire(o)}replaceIpcPromisesWithPromises(t){if(null!=t&&"object"==typeof t)for(let e in t){let o=t[e];null!=o&&"object"==typeof o&&"__ipc"in o&&"promise"===o.__ipc&&"id"in o&&"string"==typeof o.id&&"method"in o&&"string"==typeof o.method?t[e]=this.getResponsePromise(o.method,o.id):this.replaceIpcPromisesWithPromises(o)}}sendCommand(t,e){let o=tM();this.postMessage({id:o,scope:t.scope,method:t.method,params:e})}async sendRequest(t,e){let o=tM(),n=this.getResponsePromise(t.response.method,o);return this.postMessage({id:o,scope:t.scope,method:t.method,params:e,completionId:o}),n}getResponsePromise(t,e){return new Promise((o,n)=>{var r,a;let l,c=(r=t,a=e,`${r}|${a}`);function h(){clearTimeout(l),l=void 0,this._pendingHandlers.delete(c)}l=setTimeout(()=>{h.call(this),n(Error(`Timed out waiting for completion of ${c}`))},(to.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,t=>{if(h.call(this),t.method===x.method){let e=t.params;"rejected"===e.status?queueMicrotask(()=>n(Error(e.reason))):queueMicrotask(()=>o(e.value))}else queueMicrotask(()=>o(t.params))})})}setPersistedState(t){this._api.setState(t)}updatePersistedState(t){let e=this._api.getState();null!=e&&"object"==typeof e?(e={...e,...t},this._api.setState(e)):e=t,this.setPersistedState(e)}postMessage(t){this._api.postMessage(t)}};function tR(t,e){let o=Math.pow(10,e);return Math.round(t*o)/o}tL([tx({args:{0:t=>`${t.data.id}, method=${t.data.method}`}},!0)],tT.prototype,"onMessageReceived",1),tL([tx({args:{0:t=>t.method,1:!1}},!0)],tT.prototype,"sendCommand",1),tL([tx({args:{0:t=>t.method,1:!1,2:!1}},!0)],tT.prototype,"sendRequest",1),tL([tx({args:{0:t=>`${t.id}, method=${t.method}`}},!0)],tT.prototype,"postMessage",1),tT=tL([(h=t=>`${t.appName}(HostIpc)`,t=>void tn.set(t,h))],tT);let RGBA=class RGBA{constructor(t,e,o,n=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,t)),this.g=0|Math.min(255,Math.max(0,e)),this.b=0|Math.min(255,Math.max(0,o)),this.a=tR(Math.max(Math.min(1,n),0),3)}static equals(t,e){return t.r===e.r&&t.g===e.g&&t.b===e.b&&t.a===e.a}};let HSLA=class HSLA{constructor(t,e,o,n){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,t),0),this.s=tR(Math.max(Math.min(1,e),0),3),this.l=tR(Math.max(Math.min(1,o),0),3),this.a=tR(Math.max(Math.min(1,n),0),3)}static equals(t,e){return t.h===e.h&&t.s===e.s&&t.l===e.l&&t.a===e.a}static fromRGBA(t){let e=t.r/255,o=t.g/255,n=t.b/255,r=t.a,a=Math.max(e,o,n),l=Math.min(e,o,n),c=0,h=0,d=(l+a)/2,p=a-l;if(p>0){switch(h=Math.min(d<=.5?p/(2*d):p/(2-2*d),1),a){case e:c=(o-n)/p+6*(o<n);break;case o:c=(n-e)/p+2;break;case n:c=(e-o)/p+4}c*=60,c=Math.round(c)}return new HSLA(c,h,d,r)}static _hue2rgb(t,e,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?t+(e-t)*6*o:o<.5?e:o<2/3?t+(e-t)*(2/3-o)*6:t}static toRGBA(t){let e,o,n,r=t.h/360,{s:a,l,a:c}=t;if(0===a)e=o=n=l;else{let t=l<.5?l*(1+a):l+a-l*a,c=2*l-t;e=HSLA._hue2rgb(c,t,r+1/3),o=HSLA._hue2rgb(c,t,r),n=HSLA._hue2rgb(c,t,r-1/3)}return new RGBA(Math.round(255*e),Math.round(255*o),Math.round(255*n),c)}};let HSVA=class HSVA{constructor(t,e,o,n){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,t),0),this.s=tR(Math.max(Math.min(1,e),0),3),this.v=tR(Math.max(Math.min(1,o),0),3),this.a=tR(Math.max(Math.min(1,n),0),3)}static equals(t,e){return t.h===e.h&&t.s===e.s&&t.v===e.v&&t.a===e.a}static fromRGBA(t){let e=t.r/255,o=t.g/255,n=t.b/255,r=Math.max(e,o,n),a=r-Math.min(e,o,n);return new HSVA(Math.round(60*(0===a?0:r===e?((o-n)/a%6+6)%6:r===o?(n-e)/a+2:(e-o)/a+4)),0===r?0:a/r,r,t.a)}static toRGBA(t){let{h:e,s:o,v:n,a:r}=t,a=n*o,l=a*(1-Math.abs(e/60%2-1)),c=n-a,[h,d,p]=[0,0,0];return e<60?(h=a,d=l):e<120?(h=l,d=a):e<180?(d=a,p=l):e<240?(d=l,p=a):e<300?(h=l,p=a):e<=360&&(h=a,p=l),new RGBA(h=Math.round((h+c)*255),d=Math.round((d+c)*255),p=Math.round((p+c)*255),r)}};function tD(t,e){return e.getPropertyValue(t).trim()}let Color=class Color{static from(t){return t instanceof Color?t:parseColor(t)||Color.red}static fromCssVariable(t,e){return parseColor(tD(t,e))||Color.red}static fromHex(t){return parseHexColor(t)||Color.red}static equals(t,e){return!t&&!e||!!t&&!!e&&t.equals(e)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(t){if(t)if(t instanceof RGBA)this.rgba=t;else if(t instanceof HSLA)this._hsla=t,this.rgba=HSLA.toRGBA(t);else if(t instanceof HSVA)this._hsva=t,this.rgba=HSVA.toRGBA(t);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(t){return null!=t&&!!t&&RGBA.equals(this.rgba,t.rgba)&&HSLA.equals(this.hsla,t.hsla)&&HSVA.equals(this.hsva,t.hsva)}getRelativeLuminance(){let t=Color._relativeLuminanceForComponent(this.rgba.r),e=Color._relativeLuminanceForComponent(this.rgba.g);return tR(.2126*t+.7152*e+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(t){let e=t/255;return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}luminance(t){return luminance(this,t)}getContrastRatio(t){let e=this.getRelativeLuminance(),o=t.getRelativeLuminance();return e>o?(e+.05)/(o+.05):(o+.05)/(e+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(t){return this.getRelativeLuminance()>t.getRelativeLuminance()}isDarkerThan(t){return this.getRelativeLuminance()<t.getRelativeLuminance()}lighten(t){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*t,this.hsla.a))}darken(t){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*t,this.hsla.a))}transparent(t){let{r:e,g:o,b:n,a:r}=this.rgba;return new Color(new RGBA(e,o,n,r*t))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(t){let e=t.rgba,o=this.rgba.a,n=e.a,r=o+n*(1-o);if(r<1e-6)return Color.transparent;let a=this.rgba.r*o/r+e.r*n*(1-o)/r;return new Color(new RGBA(a,this.rgba.g*o/r+e.g*n*(1-o)/r,this.rgba.b*o/r+e.b*n*(1-o)/r,r))}mix(t,e){return mixColors(this,t,e)}makeOpaque(t){if(this.isOpaque()||1!==t.rgba.a)return this;let{r:e,g:o,b:n,a:r}=this.rgba;return new Color(new RGBA(t.rgba.r-r*(t.rgba.r-e),t.rgba.g-r*(t.rgba.g-o),t.rgba.b-r*(t.rgba.b-n),1))}flatten(...t){let e=t.reduceRight((t,e)=>Color._flatten(e,t));return Color._flatten(this,e)}static _flatten(t,e){let o=1-t.rgba.a;return new Color(new RGBA(o*e.rgba.r+t.rgba.a*t.rgba.r,o*e.rgba.g+t.rgba.a*t.rgba.g,o*e.rgba.b+t.rgba.a*t.rgba.b))}toString(){return this._toString||(this._toString=function(t){return t.isOpaque()?`#${tO(t.rgba.r)}${tO(t.rgba.g)}${tO(t.rgba.b)}`:`rgba(${t.rgba.r}, ${t.rgba.g}, ${t.rgba.b}, ${Number(t.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(t,e,o){if(t.isLighterThan(e))return t;o=o||.5;let n=t.getRelativeLuminance(),r=e.getRelativeLuminance();return o=o*(r-n)/r,t.lighten(o)}static getDarkerColor(t,e,o){if(t.isDarkerThan(e))return t;o=o||.5;let n=t.getRelativeLuminance(),r=e.getRelativeLuminance();return o=o*(n-r)/n,t.darken(o)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function tO(t){let e=t.toString(16);return 2!==e.length?`0${e}`:e}let tI=new Emitter,tN=tI.event;function tH(t){let e=document.documentElement,o=window.getComputedStyle(e),n=document.body.classList,r=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),a=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),l=tD("--vscode-editor-background",o),c=tD("--vscode-editor-foreground",o);return c||(c=tD("--vscode-foreground",o)),{colors:{background:l,foreground:c},computedStyle:o,isLightTheme:r,isHighContrastTheme:a,isInitializing:null==t}}let App=class App{constructor(t){this.appName=t;let e=[],o=tH();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),e.push(tN(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(t),this.log("opening..."),this._api=tP(),this._hostIpc=new tT(this.appName),e.push(this._hostIpc),this._promos=new PromosContext(this._hostIpc),e.push(this._promos),this._telemetry=new TelemetryContext(this._hostIpc),e.push(this._telemetry),new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),new i(document.body,{context:"promos",initialValue:this._promos}),new i(document.body,{context:"telemetry",initialValue:this._telemetry}),null!=this.state){let t=this.getState();this.state.timestamp>=(t?.timestamp??0)?this._api.setState(this.state):this.state=t}e.push(function(){let t=new MutationObserver(t=>{tI.fire(tH(t))});return t.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>t.disconnect()}}()),requestAnimationFrame(()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&e.push(this._hostIpc.onReceiveMessage(t=>{switch(!0){case S.is(t):window.dispatchEvent(new CustomEvent(t.params.focused?"webview-focus":"webview-blur"));break;case A.is(t):window.dispatchEvent(new CustomEvent(t.params.visible?"webview-visible":"webview-hidden"));break;default:this.onMessageReceived(t)}})),this.sendCommand(b,void 0),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),e.push(p.on(window,"pagehide",()=>{e?.forEach(t=>t.dispose()),this.bindDisposables?.forEach(t=>t.dispose()),this.bindDisposables=void 0})),e.push(p.on(window,"gl-telemetry-fired",t=>{this._telemetry.sendEvent(t.detail)})),this.log("opened")}bind(){document.querySelectorAll("a").forEach(t=>{t.href===t.title&&t.removeAttribute("title")}),this.bindDisposables?.forEach(t=>t.dispose()),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);let t=function(t,e,o){let n,r,a,l,c,h,d,p,u,g,f=0,m="leading"===(h??="trailing")||"both"===h,v="trailing"===h||"both"===h;function b(){if(null!=n){f=Date.now();let e=n,o=g;return g=void 0,n=void 0,a=t.apply(o,e)}}function w(){null!=l&&(clearTimeout(l),l=void 0)}function _(){null!=c&&(clearTimeout(c),c=void 0)}function C(){w(),_(),g=void 0,n=void 0,r=void 0,f=0}function $(...t){if(p?.aborted)return;let e=Date.now();null!=u&&null!=n?n=u(n,t):(g=this,n=t);let o=null==l&&null==c;r=e,w();let h=Date.now();if(r=h,l=setTimeout(()=>{l=void 0,function(t){let e=t-(r??0),o=t-f;return null==r||e>=150||e<0||null!=d&&o>=d}(Date.now())&&v&&b(),C()},150),null!=d&&!c){let t=d-(h-f);t>0?c=setTimeout(()=>{c=void 0,v&&null!=n&&b(),f=Date.now()},t):(v&&null!=n&&b(),C())}return m&&o?b():a}return $.cancel=C,$.flush=function(){return w(),_(),b()},$.pending=function(){return null!=l||null!=c},p?.addEventListener("abort",C,{once:!0}),$}(t=>{this.sendCommand(w,t)},150);this.bindDisposables.push(p.on(document,"focusin",e=>{let o=e.composedPath().some(t=>"INPUT"===t.tagName);(!0!==this._focused||this._inputFocused!==o)&&(this._focused=!0,this._inputFocused=o,t({focused:!0,inputFocused:o}))}),p.on(document,"focusout",()=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,t({focused:!1,inputFocused:!1}))}))}log(t,...e){this._logger.log(t,...e)}getState(){return this._api.getState()}sendCommand(t,e){this._hostIpc.sendCommand(t,e)}sendRequest(t,e){return this._hostIpc.sendRequest(t,e)}setState(t){this._api.setState(t)}};let tB=globalThis,tz=tB.ShadowRoot&&(void 0===tB.ShadyCSS||tB.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tF=Symbol(),tU=new WeakMap;let css_tag_n=class css_tag_n{constructor(t,e,o){if(this._$cssResult$=!0,o!==tF)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(tz&&void 0===t){let o=void 0!==e&&1===e.length;o&&(t=tU.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&tU.set(e,t))}return t}toString(){return this.cssText}};let tj=t=>new css_tag_n("string"==typeof t?t:t+"",void 0,tF),tq=(t,...e)=>new css_tag_n(1===t.length?t[0]:e.reduce((e,o,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1],t[0]),t,tF),tV=tz?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return tj(e)})(t):t,{is:tZ,defineProperty:tW,getOwnPropertyDescriptor:tG,getOwnPropertyNames:tY,getOwnPropertySymbols:tK,getPrototypeOf:tJ}=Object,tQ=globalThis,tX=tQ.trustedTypes,t1=tX?tX.emptyScript:"",t2=tQ.reactiveElementPolyfillSupport,t0={toAttribute(t,e){switch(e){case Boolean:t=t?t1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},t3=(t,e)=>!tZ(t,e),t5={attribute:!0,type:String,converter:t0,reflect:!1,useDefault:!1,hasChanged:t3};Symbol.metadata??=Symbol("metadata"),tQ.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=t5){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let o=Symbol(),n=this.getPropertyDescriptor(t,o,e);void 0!==n&&tW(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){let{get:n,set:r}=tG(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){let a=n?.call(this);r?.call(this,e),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??t5}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let t=tJ(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...tY(t),...tK(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,o]of e)this.elementProperties.set(t,o)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let o of new Set(t.flat(1/0).reverse()))e.unshift(tV(o));else void 0!==t&&e.push(tV(t));return e}static _$Eu(t,e){let o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(tz)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let o of e){let e=document.createElement("style"),n=tB.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=o.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){let o=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,o);if(void 0!==n&&!0===o.reflect){let r=(void 0!==o.converter?.toAttribute?o.converter:t0).toAttribute(e,o.type);this._$Em=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){let o=this.constructor,n=o._$Eh.get(t);if(void 0!==n&&this._$Em!==n){let t=o.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:t0;this._$Em=n;let a=r.fromAttribute(e,t.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){let n=this.constructor,r=this[t];if(!(((o??=n.getPropertyOptions(t)).hasChanged??t3)(r,e)||o.useDefault&&o.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:n,wrapped:r},a){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==r||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,o]of t){let{wrapped:t}=o,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,o,n)}}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,t2?.({ReactiveElement:y}),(tQ.reactiveElementVersions??=[]).push("2.1.1");let t8=globalThis,t9=t8.trustedTypes,t7=t9?t9.createPolicy("lit-html",{createHTML:t=>t}):void 0,t4="$lit$",t6=`lit$${Math.random().toFixed(9).slice(2)}$`,et="?"+t6,ee=`<${et}>`,ei=document,eo=()=>ei.createComment(""),es=t=>null===t||"object"!=typeof t&&"function"!=typeof t,en=Array.isArray,er=t=>en(t)||"function"==typeof t?.[Symbol.iterator],ea=`[ 	
\f\r]`,el=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ec=/-->/g,eh=/>/g,ed=RegExp(`>|${ea}(?:([^\\s"'>=/]+)(${ea}*=${ea}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ep=/'/g,eu=/"/g,eg=/^(?:script|style|textarea|title)$/i,ef=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),em=ef(1),ev=(ef(2),ef(3),Symbol.for("lit-noChange")),eb=Symbol.for("lit-nothing"),ey=new WeakMap,ew=ei.createTreeWalker(ei,129);function e_(t,e){if(!en(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==t7?t7.createHTML(e):e}let eC=(t,e)=>{let o=t.length-1,n=[],r,a=2===e?"<svg>":3===e?"<math>":"",l=el;for(let e=0;e<o;e++){let o=t[e],c,h,d=-1,p=0;for(;p<o.length&&(l.lastIndex=p,null!==(h=l.exec(o)));)p=l.lastIndex,l===el?"!--"===h[1]?l=ec:void 0!==h[1]?l=eh:void 0!==h[2]?(eg.test(h[2])&&(r=RegExp("</"+h[2],"g")),l=ed):void 0!==h[3]&&(l=ed):l===ed?">"===h[0]?(l=r??el,d=-1):void 0===h[1]?d=-2:(d=l.lastIndex-h[2].length,c=h[1],l=void 0===h[3]?ed:'"'===h[3]?eu:ep):l===eu||l===ep?l=ed:l===ec||l===eh?l=el:(l=ed,r=void 0);let u=l===ed&&t[e+1].startsWith("/>")?" ":"";a+=l===el?o+ee:d>=0?(n.push(c),o.slice(0,d)+t4+o.slice(d)+t6+u):o+t6+(-2===d?e:u)}return[e_(t,a+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};let N=class N{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let r=0,a=0,l=t.length-1,c=this.parts,[h,d]=eC(t,e);if(this.el=N.createElement(h,o),ew.currentNode=this.el.content,2===e||3===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=ew.nextNode())&&c.length<l;){if(1===n.nodeType){if(n.hasAttributes())for(let t of n.getAttributeNames())if(t.endsWith(t4)){let e=d[a++],o=n.getAttribute(t).split(t6),l=/([.?@])?(.*)/.exec(e);c.push({type:1,index:r,name:l[2],strings:o,ctor:"."===l[1]?H:"?"===l[1]?I:"@"===l[1]?L:k}),n.removeAttribute(t)}else t.startsWith(t6)&&(c.push({type:6,index:r}),n.removeAttribute(t));if(eg.test(n.tagName)){let t=n.textContent.split(t6),e=t.length-1;if(e>0){n.textContent=t9?t9.emptyScript:"";for(let o=0;o<e;o++)n.append(t[o],eo()),ew.nextNode(),c.push({type:2,index:++r});n.append(t[e],eo())}}}else if(8===n.nodeType)if(n.data===et)c.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(t6,t+1));)c.push({type:7,index:r}),t+=t6.length-1}r++}}static createElement(t,e){let o=ei.createElement("template");return o.innerHTML=t,o}};function e$(t,e,o=t,n){if(e===ev)return e;let r=void 0!==n?o._$Co?.[n]:o._$Cl,a=es(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(t))._$AT(t,o,n),void 0!==n?(o._$Co??=[])[n]=r:o._$Cl=r),void 0!==r&&(e=e$(t,r._$AS(t,e.values),r,n)),e}let M=class M{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:o}=this._$AD,n=(t?.creationScope??ei).importNode(e,!0);ew.currentNode=n;let r=ew.nextNode(),a=0,l=0,c=o[0];for(;void 0!==c;){if(a===c.index){let e;2===c.type?e=new R(r,r.nextSibling,this,t):1===c.type?e=new c.ctor(r,c.name,c.strings,this,t):6===c.type&&(e=new z(r,this,t)),this._$AV.push(e),c=o[++l]}a!==c?.index&&(r=ew.nextNode(),a++)}return ew.currentNode=ei,n}p(t){let e=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}};let R=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,n){this.type=2,this._$AH=eb,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){es(t=e$(this,t,e))?t===eb||null==t||""===t?(this._$AH!==eb&&this._$AR(),this._$AH=eb):t!==this._$AH&&t!==ev&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):er(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==eb&&es(this._$AH)?this._$AA.nextSibling.data=t:this.T(ei.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=N.createElement(e_(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(e);else{let t=new M(n,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=ey.get(t.strings);return void 0===e&&ey.set(t.strings,e=new N(t)),e}k(t){en(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,n=0;for(let r of t)n===e.length?e.push(o=new R(this.O(eo()),this.O(eo()),this,this.options)):o=e[n],o._$AI(r),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}};let k=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,n,r){this.type=1,this._$AH=eb,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=eb}_$AI(t,e=this,o,n){let r=this.strings,a=!1;if(void 0===r)(a=!es(t=e$(this,t,e,0))||t!==this._$AH&&t!==ev)&&(this._$AH=t);else{let n,l,c=t;for(t=r[0],n=0;n<r.length-1;n++)(l=e$(this,c[o+n],e,n))===ev&&(l=this._$AH[n]),a||=!es(l)||l!==this._$AH[n],l===eb?t=eb:t!==eb&&(t+=(l??"")+r[n+1]),this._$AH[n]=l}a&&!n&&this.j(t)}j(t){t===eb?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};let H=class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===eb?void 0:t}};let I=class I extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==eb)}};let L=class L extends k{constructor(t,e,o,n,r){super(t,e,o,n,r),this.type=5}_$AI(t,e=this){if((t=e$(this,t,e,0)??eb)===ev)return;let o=this._$AH,n=t===eb&&o!==eb||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==eb&&(o===eb||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}};let z=class z{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){e$(this,t)}};let ex=t8.litHtmlPolyfillSupport;ex?.(N,R),(t8.litHtmlVersions??=[]).push("3.3.1");let ek=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{let n=o?.renderBefore??e,r=n._$litPart$;if(void 0===r){let t=o?.renderBefore??null;n._$litPart$=r=new R(e.insertBefore(eo(),t),t,void 0,o??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ev}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,ek.litElementHydrateSupport?.({LitElement:lit_element_i});let eS=ek.litElementPolyfillSupport;eS?.({LitElement:lit_element_i}),(ek.litElementVersions??=[]).push("4.2.1");let eA=t=>(e,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},eL={attribute:!0,type:String,converter:t0,reflect:!1,hasChanged:t3};function eP(t){return(e,o)=>"object"==typeof o?((t=eL,e,o)=>{let{kind:n,metadata:r}=o,a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),a.set(o.name,t),"accessor"===n){let{name:n}=o;return{set(o){let r=e.get.call(this);e.set.call(this,o),this.requestUpdate(n,r,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){let{name:n}=o;return function(o){let r=this[n];e.call(this,o),this.requestUpdate(n,r,t)}}throw Error("Unsupported decorator location: "+n)})(t,e,o):((t,e,o)=>{let n=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),n?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}let eE=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,o),o);function eM(t,e){return(o,n,r)=>{let a=e=>e.renderRoot?.querySelector(t)??null;if(e){let{get:t,set:e}="object"==typeof n?o:r??(()=>{let t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return eE(o,n,{get(){let o=t.call(this);return void 0===o&&(null!==(o=a(this))||this.hasUpdated)&&e.call(this,o),o}})}return eE(o,n,{get(){return a(this)}})}}var eT=((d=eT||{})[d.VerificationRequired=-1]="VerificationRequired",d[d.Community=0]="Community",d[d.DeprecatedPreview=1]="DeprecatedPreview",d[d.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",d[d.Trial=3]="Trial",d[d.TrialExpired=4]="TrialExpired",d[d.TrialReactivationEligible=5]="TrialReactivationEligible",d[d.Paid=6]="Paid",d);let eR=["pro","advanced","teams","enterprise"],eD=tq`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;tq`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${eD}
	}
`;let eO=tq`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`;tq`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,tq`
	:focus-visible {
		${eO}
	}
`;let eI=tq`
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
`;tq`
	* {
		box-sizing: border-box;
	}
`;let eN=tq`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${eO}
	}
	a:hover {
		text-decoration: underline;
	}
`,eH=tq`
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
`;tq`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;let eB=new WeakMap;function ez(t,e){return function(o,n,r){let a=eB.get(o.constructor);null==a&&eB.set(o.constructor,a=[]),a.push({method:r.value,keys:Array.isArray(t)?t:[t],afterFirstUpdate:e?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(t,e,o){let n=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:e});return this.dispatchEvent(n),n}update(t){let e=eB.get(this.constructor);if(null!=e)for(let{keys:o,method:n,afterFirstUpdate:r}of e){if(r&&!this.hasUpdated)continue;let e=o.filter(e=>t.has(e));e.length&&n.call(this,e)}super.update(t)}};var eF=tq`
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
`;let eU=new Set,ej=new Map,eq="ltr",eV="en",eZ="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(eZ){let t=new MutationObserver(eG);eq=document.documentElement.dir||"ltr",eV=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function eW(...t){t.map(t=>{let e=t.$code.toLowerCase();ej.has(e)?ej.set(e,Object.assign(Object.assign({},ej.get(e)),t)):ej.set(e,t),n||(n=t)}),eG()}function eG(){eZ&&(eq=document.documentElement.dir||"ltr",eV=document.documentElement.lang||navigator.language),[...eU.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){eU.add(this.host)}hostDisconnected(){eU.delete(this.host)}dir(){return`${this.host.dir||eq}`.toLowerCase()}lang(){return`${this.host.lang||eV}`.toLowerCase()}getTranslationData(t){var e,o;let n=new Intl.Locale(t.replace(/_/g,"-")),r=null==n?void 0:n.language.toLowerCase(),a=null!=(o=null==(e=null==n?void 0:n.region)?void 0:e.toLowerCase())?o:"",l=ej.get(`${r}-${a}`),c=ej.get(r);return{locale:n,language:r,region:a,primary:l,secondary:c}}exists(t,e){var o;let{primary:r,secondary:a}=this.getTranslationData(null!=(o=e.lang)?o:this.lang());return e=Object.assign({includeFallback:!1},e),!!r&&!!r[t]||!!a&&!!a[t]||!!e.includeFallback&&!!n&&!!n[t]}term(t,...e){let o,{primary:r,secondary:a}=this.getTranslationData(this.lang());if(r&&r[t])o=r[t];else if(a&&a[t])o=a[t];else{if(!n||!n[t])return String(t);o=n[t]}return"function"==typeof o?o(...e):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return isNaN(t=Number(t))?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}};var eY={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};eW(eY);var eK=class extends LocalizeController{};eW(eY);var eJ=tq`
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
`,eQ=Object.defineProperty,eX=Object.defineProperties,e1=Object.getOwnPropertyDescriptor,e2=Object.getOwnPropertyDescriptors,e0=Object.getOwnPropertySymbols,e3=Object.prototype.hasOwnProperty,e5=Object.prototype.propertyIsEnumerable,e8=t=>{throw TypeError(t)},e9=(t,e,o)=>e in t?eQ(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,e7=(t,e)=>{for(var o in e||(e={}))e3.call(e,o)&&e9(t,o,e[o]);if(e0)for(var o of e0(e))e5.call(e,o)&&e9(t,o,e[o]);return t},e4=(t,e)=>eX(t,e2(e)),e6=(t,e,o,n)=>{for(var r,a=n>1?void 0:n?e1(e,o):e,l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n?r(e,o,a):r(a))||a);return n&&a&&eQ(e,o,a),a},it=(t,e,o)=>e.has(t)||e8("Cannot "+o),ie=class extends lit_element_i{constructor(){let t;super(),(t=u).has(this)?e8("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(this):t.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let o=new CustomEvent(t,e7({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){let n=customElements.get(t);if(!n){try{customElements.define(t,e,o)}catch(n){customElements.define(t,class extends e{},o)}return}let r=" (unknown version)",a=r;if("version"in e&&e.version&&(r=" v"+e.version),"version"in n&&n.version&&(a=" v"+n.version),r&&a&&r===a)return}attributeChangedCallback(t,e,o){let n,r;if(it(this,n=u,"read from private field"),r?!r.call(this):!n.get(this)){let t,e;this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),it(this,t=u,"write to private field"),e?e.call(this,!0):t.set(this,!0)}super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&null==this[o]&&(this[o]=e)})}};u=new WeakMap,ie.version="2.20.1",ie.dependencies={},e6([eP()],ie.prototype,"dir",2),e6([eP()],ie.prototype,"lang",2);let ii=Math.min,io=Math.max,is=Math.round,ir=Math.floor,ia=t=>({x:t,y:t}),il={left:"right",right:"left",bottom:"top",top:"bottom"},ic={start:"end",end:"start"};function ih(t,e){return"function"==typeof t?t(e):t}function id(t){return t.split("-")[0]}function ip(t){return t.split("-")[1]}function iu(t){return"x"===t?"y":"x"}function ig(t){return"y"===t?"height":"width"}let im=new Set(["top","bottom"]);function iv(t){return im.has(id(t))?"y":"x"}function ib(t){return t.replace(/start|end/g,t=>ic[t])}let iy=["left","right"],iw=["right","left"],i_=["top","bottom"],iC=["bottom","top"];function i$(t){return t.replace(/left|right|bottom|top/g,t=>il[t])}function ix(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function ik(t){let{x:e,y:o,width:n,height:r}=t;return{width:n,height:r,top:o,left:e,right:e+n,bottom:o+r,x:e,y:o}}function iS(t,e,o){let n,{reference:r,floating:a}=t,l=iv(e),c=iu(iv(e)),h=ig(c),d=id(e),p="y"===l,u=r.x+r.width/2-a.width/2,g=r.y+r.height/2-a.height/2,f=r[h]/2-a[h]/2;switch(d){case"top":n={x:u,y:r.y-a.height};break;case"bottom":n={x:u,y:r.y+r.height};break;case"right":n={x:r.x+r.width,y:g};break;case"left":n={x:r.x-a.width,y:g};break;default:n={x:r.x,y:r.y}}switch(ip(e)){case"start":n[c]-=f*(o&&p?-1:1);break;case"end":n[c]+=f*(o&&p?-1:1)}return n}let iA=async(t,e,o)=>{let{placement:n="bottom",strategy:r="absolute",middleware:a=[],platform:l}=o,c=a.filter(Boolean),h=await (null==l.isRTL?void 0:l.isRTL(e)),d=await l.getElementRects({reference:t,floating:e,strategy:r}),{x:p,y:u}=iS(d,n,h),g=n,f={},m=0;for(let o=0;o<c.length;o++){let{name:a,fn:v}=c[o],{x:b,y:w,data:_,reset:C}=await v({x:p,y:u,initialPlacement:n,placement:g,strategy:r,middlewareData:f,rects:d,platform:l,elements:{reference:t,floating:e}});p=null!=b?b:p,u=null!=w?w:u,f={...f,[a]:{...f[a],..._}},C&&m<=50&&(m++,"object"==typeof C&&(C.placement&&(g=C.placement),C.rects&&(d=!0===C.rects?await l.getElementRects({reference:t,floating:e,strategy:r}):C.rects),{x:p,y:u}=iS(d,g,h)),o=-1)}return{x:p,y:u,placement:g,strategy:r,middlewareData:f}};async function iL(t,e){var o;void 0===e&&(e={});let{x:n,y:r,platform:a,rects:l,elements:c,strategy:h}=t,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=ih(e,t),m=ix(f),v=c[g?"floating"===u?"reference":"floating":u],b=ik(await a.getClippingRect({element:null==(o=await (null==a.isElement?void 0:a.isElement(v)))||o?v:v.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:d,rootBoundary:p,strategy:h})),w="floating"===u?{x:n,y:r,width:l.floating.width,height:l.floating.height}:l.reference,_=await (null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating)),C=await (null==a.isElement?void 0:a.isElement(_))&&await (null==a.getScale?void 0:a.getScale(_))||{x:1,y:1},$=ik(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:_,strategy:h}):w);return{top:(b.top-$.top+m.top)/C.y,bottom:($.bottom-b.bottom+m.bottom)/C.y,left:(b.left-$.left+m.left)/C.x,right:($.right-b.right+m.right)/C.x}}let iP=new Set(["left","top"]);async function iE(t,e){let{placement:o,platform:n,elements:r}=t,a=await (null==n.isRTL?void 0:n.isRTL(r.floating)),l=id(o),c=ip(o),h="y"===iv(o),d=iP.has(l)?-1:1,p=a&&h?-1:1,u=ih(e,t),{mainAxis:g,crossAxis:f,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&"number"==typeof m&&(f="end"===c?-1*m:m),h?{x:f*p,y:g*d}:{x:g*d,y:f*p}}function iM(){return"undefined"!=typeof window}function iT(t){return iO(t)?(t.nodeName||"").toLowerCase():"#document"}function iR(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function iD(t){var e;return null==(e=(iO(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function iO(t){return!!iM()&&(t instanceof Node||t instanceof iR(t).Node)}function iI(t){return!!iM()&&(t instanceof Element||t instanceof iR(t).Element)}function iN(t){return!!iM()&&(t instanceof HTMLElement||t instanceof iR(t).HTMLElement)}function iH(t){return!!iM()&&"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof iR(t).ShadowRoot)}let iB=new Set(["inline","contents"]);function iz(t){let{overflow:e,overflowX:o,overflowY:n,display:r}=iJ(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!iB.has(r)}let iF=new Set(["table","td","th"]),iU=[":popover-open",":modal"];function ij(t){return iU.some(e=>{try{return t.matches(e)}catch{return!1}})}let iq=["transform","translate","scale","rotate","perspective"],iV=["transform","translate","scale","rotate","perspective","filter"],iZ=["paint","layout","strict","content"];function iW(t){let e=iG(),o=iI(t)?iJ(t):t;return iq.some(t=>!!o[t]&&"none"!==o[t])||!!o.containerType&&"normal"!==o.containerType||!e&&!!o.backdropFilter&&"none"!==o.backdropFilter||!e&&!!o.filter&&"none"!==o.filter||iV.some(t=>(o.willChange||"").includes(t))||iZ.some(t=>(o.contain||"").includes(t))}function iG(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let iY=new Set(["html","body","#document"]);function iK(t){return iY.has(iT(t))}function iJ(t){return iR(t).getComputedStyle(t)}function iQ(t){return iI(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function iX(t){if("html"===iT(t))return t;let e=t.assignedSlot||t.parentNode||iH(t)&&t.host||iD(t);return iH(e)?e.host:e}function i1(t,e,o){var n;void 0===e&&(e=[]),void 0===o&&(o=!0);let r=function t(e){let o=iX(e);return iK(o)?e.ownerDocument?e.ownerDocument.body:e.body:iN(o)&&iz(o)?o:t(o)}(t),a=r===(null==(n=t.ownerDocument)?void 0:n.body),l=iR(r);if(a){let t=i2(l);return e.concat(l,l.visualViewport||[],iz(r)?r:[],t&&o?i1(t):[])}return e.concat(r,i1(r,[],o))}function i2(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function i0(t){let e=iJ(t),o=parseFloat(e.width)||0,n=parseFloat(e.height)||0,r=iN(t),a=r?t.offsetWidth:o,l=r?t.offsetHeight:n,c=is(o)!==a||is(n)!==l;return c&&(o=a,n=l),{width:o,height:n,$:c}}function i3(t){return iI(t)?t:t.contextElement}function i5(t){let e=i3(t);if(!iN(e))return ia(1);let o=e.getBoundingClientRect(),{width:n,height:r,$:a}=i0(e),l=(a?is(o.width):o.width)/n,c=(a?is(o.height):o.height)/r;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}let i8=ia(0);function i9(t){let e=iR(t);return iG()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:i8}function i7(t,e,o,n){var r;void 0===e&&(e=!1),void 0===o&&(o=!1);let a=t.getBoundingClientRect(),l=i3(t),c=ia(1);e&&(n?iI(n)&&(c=i5(n)):c=i5(t));let h=(void 0===(r=o)&&(r=!1),n&&(!r||n===iR(l))&&r)?i9(l):ia(0),d=(a.left+h.x)/c.x,p=(a.top+h.y)/c.y,u=a.width/c.x,g=a.height/c.y;if(l){let t=iR(l),e=n&&iI(n)?iR(n):n,o=t,r=i2(o);for(;r&&n&&e!==o;){let t=i5(r),e=r.getBoundingClientRect(),n=iJ(r),a=e.left+(r.clientLeft+parseFloat(n.paddingLeft))*t.x,l=e.top+(r.clientTop+parseFloat(n.paddingTop))*t.y;d*=t.x,p*=t.y,u*=t.x,g*=t.y,d+=a,p+=l,r=i2(o=iR(r))}}return ik({width:u,height:g,x:d,y:p})}function i4(t,e){let o=iQ(t).scrollLeft;return e?e.left+o:i7(iD(t)).left+o}function i6(t,e){let o=t.getBoundingClientRect();return{x:o.left+e.scrollLeft-i4(t,o),y:o.top+e.scrollTop}}let ot=new Set(["absolute","fixed"]);function oe(t,e,o){let n;if("viewport"===e)n=function(t,e){let o=iR(t),n=iD(t),r=o.visualViewport,a=n.clientWidth,l=n.clientHeight,c=0,h=0;if(r){a=r.width,l=r.height;let t=iG();(!t||t&&"fixed"===e)&&(c=r.offsetLeft,h=r.offsetTop)}let d=i4(n);if(d<=0){let t=n.ownerDocument,e=t.body,o=getComputedStyle(e),r="CSS1Compat"===t.compatMode&&parseFloat(o.marginLeft)+parseFloat(o.marginRight)||0,l=Math.abs(n.clientWidth-e.clientWidth-r);l<=25&&(a-=l)}else d<=25&&(a+=d);return{width:a,height:l,x:c,y:h}}(t,o);else if("document"===e)n=function(t){let e=iD(t),o=iQ(t),n=t.ownerDocument.body,r=io(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),a=io(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),l=-o.scrollLeft+i4(t),c=-o.scrollTop;return"rtl"===iJ(n).direction&&(l+=io(e.clientWidth,n.clientWidth)-r),{width:r,height:a,x:l,y:c}}(iD(t));else if(iI(e))n=function(t,e){let o=i7(t,!0,"fixed"===e),n=o.top+t.clientTop,r=o.left+t.clientLeft,a=iN(t)?i5(t):ia(1),l=t.clientWidth*a.x,c=t.clientHeight*a.y;return{width:l,height:c,x:r*a.x,y:n*a.y}}(e,o);else{let o=i9(t);n={x:e.x-o.x,y:e.y-o.y,width:e.width,height:e.height}}return ik(n)}function oi(t){return"static"===iJ(t).position}function oo(t,e){if(!iN(t)||"fixed"===iJ(t).position)return null;if(e)return e(t);let o=t.offsetParent;return iD(t)===o&&(o=o.ownerDocument.body),o}function os(t,e){var o;let n=iR(t);if(ij(t))return n;if(!iN(t)){let e=iX(t);for(;e&&!iK(e);){if(iI(e)&&!oi(e))return e;e=iX(e)}return n}let r=oo(t,e);for(;r&&(o=r,iF.has(iT(o)))&&oi(r);)r=oo(r,e);return r&&iK(r)&&oi(r)&&!iW(r)?n:r||function(t){let e=iX(t);for(;iN(e)&&!iK(e);){if(iW(e))return e;if(ij(e))break;e=iX(e)}return null}(t)||n}let on=async function(t){let e=this.getOffsetParent||os,o=this.getDimensions,n=await o(t.floating);return{reference:function(t,e,o){let n=iN(e),r=iD(e),a="fixed"===o,l=i7(t,!0,a,e),c={scrollLeft:0,scrollTop:0},h=ia(0);if(n||!n&&!a)if(("body"!==iT(e)||iz(r))&&(c=iQ(e)),n){let t=i7(e,!0,a,e);h.x=t.x+e.clientLeft,h.y=t.y+e.clientTop}else r&&(h.x=i4(r));a&&!n&&r&&(h.x=i4(r));let d=!r||n||a?ia(0):i6(r,c);return{x:l.left+c.scrollLeft-h.x-d.x,y:l.top+c.scrollTop-h.y-d.y,width:l.width,height:l.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}},or={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:o,offsetParent:n,strategy:r}=t,a="fixed"===r,l=iD(n),c=!!e&&ij(e.floating);if(n===l||c&&a)return o;let h={scrollLeft:0,scrollTop:0},d=ia(1),p=ia(0),u=iN(n);if((u||!u&&!a)&&(("body"!==iT(n)||iz(l))&&(h=iQ(n)),iN(n))){let t=i7(n);d=i5(n),p.x=t.x+n.clientLeft,p.y=t.y+n.clientTop}let g=!l||u||a?ia(0):i6(l,h);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-h.scrollLeft*d.x+p.x+g.x,y:o.y*d.y-h.scrollTop*d.y+p.y+g.y}},getDocumentElement:iD,getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t,a=[..."clippingAncestors"===o?ij(e)?[]:function(t,e){let o=e.get(t);if(o)return o;let n=i1(t,[],!1).filter(t=>iI(t)&&"body"!==iT(t)),r=null,a="fixed"===iJ(t).position,l=a?iX(t):t;for(;iI(l)&&!iK(l);){let e=iJ(l),o=iW(l);o||"fixed"!==e.position||(r=null),(a?!o&&!r:!o&&"static"===e.position&&!!r&&ot.has(r.position)||iz(l)&&!o&&function t(e,o){let n=iX(e);return!(n===o||!iI(n)||iK(n))&&("fixed"===iJ(n).position||t(n,o))}(t,l))?n=n.filter(t=>t!==l):r=e,l=iX(l)}return e.set(t,n),n}(e,this._c):[].concat(o),n],l=a[0],c=a.reduce((t,o)=>{let n=oe(e,o,r);return t.top=io(n.top,t.top),t.right=ii(n.right,t.right),t.bottom=ii(n.bottom,t.bottom),t.left=io(n.left,t.left),t},oe(e,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:os,getElementRects:on,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:o}=i0(t);return{width:e,height:o}},getScale:i5,isElement:iI,isRTL:function(t){return"rtl"===iJ(t).direction}};function oa(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}let ol=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var o,n;let r,a,{placement:l,rects:c,platform:h,elements:d}=e,{apply:p=()=>{},...u}=ih(t,e),g=await iL(e,u),f=id(l),m=ip(l),v="y"===iv(l),{width:b,height:w}=c.floating;"top"===f||"bottom"===f?(r=f,a=m===(await (null==h.isRTL?void 0:h.isRTL(d.floating))?"start":"end")?"left":"right"):(a=f,r="end"===m?"top":"bottom");let _=w-g.top-g.bottom,C=b-g.left-g.right,$=ii(w-g[r],_),x=ii(b-g[a],C),S=!e.middlewareData.shift,A=$,P=x;if(null!=(o=e.middlewareData.shift)&&o.enabled.x&&(P=C),null!=(n=e.middlewareData.shift)&&n.enabled.y&&(A=_),S&&!m){let t=io(g.left,0),e=io(g.right,0),o=io(g.top,0),n=io(g.bottom,0);v?P=b-2*(0!==t||0!==e?t+e:io(g.left,g.right)):A=w-2*(0!==o||0!==n?o+n:io(g.top,g.bottom))}await p({...e,availableWidth:P,availableHeight:A});let E=await h.getDimensions(d.floating);return b!==E.width||w!==E.height?{reset:{rects:!0}}:{}}}},oc=t=>(...e)=>({_$litDirective$:t,values:e});let directive_i=class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};let oh=oc(class extends directive_i{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){for(let o in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}let o=t.element.classList;for(let t of this.st)t in e||(o.remove(t),this.st.delete(t));for(let t in e){let n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return ev}});function od(t){var e=t;for(let t=e;t;t=op(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=op(e);t;t=op(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if("contents"!==e.display&&("static"!==e.position||iW(e)||"BODY"===t.tagName))return t}return null}function op(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var ou=class extends ie{constructor(){super(...arguments),this.localize=new eK(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),n=0,r=0,a=0,l=0,c=0,h=0,d=0,p=0;o?t.top<e.top?(n=t.left,r=t.bottom,a=t.right,l=t.bottom,c=e.left,h=e.top,d=e.right,p=e.top):(n=e.left,r=e.bottom,a=e.right,l=e.bottom,c=t.left,h=t.top,d=t.right,p=t.top):t.left<e.left?(n=t.right,r=t.top,a=e.left,l=e.top,c=t.right,h=t.bottom,d=e.left,p=e.bottom):(n=e.right,r=e.top,a=t.left,l=t.top,c=e.right,h=e.bottom,d=t.left,p=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${n}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${p}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else{var t;this.anchor instanceof Element||null!==(t=this.anchor)&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(t,e,o,n){let r;void 0===n&&(n={});let{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:d=!1}=n,p=i3(t),u=a||l?[...p?i1(p):[],...i1(e)]:[];u.forEach(t=>{a&&t.addEventListener("scroll",o,{passive:!0}),l&&t.addEventListener("resize",o)});let g=p&&h?function(t,e){let o,n=null,r=iD(t);function a(){var t;clearTimeout(o),null==(t=n)||t.disconnect(),n=null}return!function l(c,h){void 0===c&&(c=!1),void 0===h&&(h=1),a();let d=t.getBoundingClientRect(),{left:p,top:u,width:g,height:f}=d;if(c||e(),!g||!f)return;let m=ir(u),v=ir(r.clientWidth-(p+g)),b={rootMargin:-m+"px "+-v+"px "+-ir(r.clientHeight-(u+f))+"px "+-ir(p)+"px",threshold:io(0,ii(1,h))||1},w=!0;function _(e){let n=e[0].intersectionRatio;if(n!==h){if(!w)return l();n?l(!1,n):o=setTimeout(()=>{l(!1,1e-7)},1e3)}1!==n||oa(d,t.getBoundingClientRect())||l(),w=!1}try{n=new IntersectionObserver(_,{...b,root:r.ownerDocument})}catch{n=new IntersectionObserver(_,b)}n.observe(t)}(!0),a}(p,o):null,f=-1,m=null;c&&(m=new ResizeObserver(t=>{let[n]=t;n&&n.target===p&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var t;null==(t=m)||t.observe(e)})),o()}),p&&!d&&m.observe(p),m.observe(e));let v=d?i7(t):null;return d&&function e(){let n=i7(t);v&&!oa(v,n)&&o(),v=n,r=requestAnimationFrame(e)}(),o(),()=>{var t;u.forEach(t=>{a&&t.removeEventListener("scroll",o),l&&t.removeEventListener("resize",o)}),null==g||g(),null==(t=m)||t.disconnect(),m=null,d&&cancelAnimationFrame(r)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){var t,e,o;let n;if(!this.active||!this.anchorEl)return;let r=[{name:"offset",options:t={mainAxis:this.distance,crossAxis:this.skidding},async fn(e){var o,n;let{x:r,y:a,placement:l,middlewareData:c}=e,h=await iE(e,t);return l===(null==(o=c.offset)?void 0:o.placement)&&null!=(n=c.arrow)&&n.alignmentOffset?{}:{x:r+h.x,y:a+h.y,data:{...h,placement:l}}}}];this.sync?r.push(ol({apply:({rects:t})=>{let e="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=o?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&r.push({name:"flip",options:e={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(t){var o,n,r,a,l;let{placement:c,middlewareData:h,rects:d,initialPlacement:p,platform:u,elements:g}=t,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:v,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:_=!0,...C}=ih(e,t);if(null!=(o=h.arrow)&&o.alignmentOffset)return{};let $=id(c),x=iv(p),S=id(p)===p,A=await (null==u.isRTL?void 0:u.isRTL(g.floating)),P=v||(S||!_?[i$(p)]:function(t){let e=i$(t);return[ib(t),e,ib(e)]}(p)),E="none"!==w;!v&&E&&P.push(...function(t,e,o,n){let r=ip(t),a=function(t,e,o){switch(t){case"top":case"bottom":if(o)return e?iw:iy;return e?iy:iw;case"left":case"right":return e?i_:iC;default:return[]}}(id(t),"start"===o,n);return r&&(a=a.map(t=>t+"-"+r),e&&(a=a.concat(a.map(ib)))),a}(p,_,w,A));let T=[p,...P],D=await iL(t,C),O=[],B=(null==(n=h.flip)?void 0:n.overflows)||[];if(f&&O.push(D[$]),m){let t=function(t,e,o){void 0===o&&(o=!1);let n=ip(t),r=iu(iv(t)),a=ig(r),l="x"===r?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return e.reference[a]>e.floating[a]&&(l=i$(l)),[l,i$(l)]}(c,d,A);O.push(D[t[0]],D[t[1]])}if(B=[...B,{placement:c,overflows:O}],!O.every(t=>t<=0)){let t=((null==(r=h.flip)?void 0:r.index)||0)+1,e=T[t];if(e&&("alignment"!==m||x===iv(e)||B.every(t=>iv(t.placement)!==x||t.overflows[0]>0)))return{data:{index:t,overflows:B},reset:{placement:e}};let o=null==(a=B.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:a.placement;if(!o)switch(b){case"bestFit":{let t=null==(l=B.filter(t=>{if(E){let e=iv(t.placement);return e===x||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:l[0];t&&(o=t);break}case"initialPlacement":o=p}if(c!==o)return{reset:{placement:o}}}return{}}}),this.shift&&r.push({name:"shift",options:o={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(t){let{x:e,y:n,placement:r}=t,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:t=>{let{x:e,y:o}=t;return{x:e,y:o}}},...h}=ih(o,t),d={x:e,y:n},p=await iL(t,h),u=iv(id(r)),g=iu(u),f=d[g],m=d[u];if(a){let t="y"===g?"top":"left",e="y"===g?"bottom":"right",o=f+p[t],n=f-p[e];f=io(o,ii(f,n))}if(l){let t="y"===u?"top":"left",e="y"===u?"bottom":"right",o=m+p[t],n=m-p[e];m=io(o,ii(m,n))}let v=c.fn({...t,[g]:f,[u]:m});return{...v,data:{x:v.x-e,y:v.y-n,enabled:{[g]:a,[u]:l}}}}}),this.autoSize?r.push(ol({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&r.push({name:"arrow",options:n={element:this.arrowEl,padding:this.arrowPadding},async fn(t){let{x:e,y:o,placement:r,rects:a,platform:l,elements:c,middlewareData:h}=t,{element:d,padding:p=0}=ih(n,t)||{};if(null==d)return{};let u=ix(p),g={x:e,y:o},f=iu(iv(r)),m=ig(f),v=await l.getDimensions(d),b="y"===f,w=b?"clientHeight":"clientWidth",_=a.reference[m]+a.reference[f]-g[f]-a.floating[m],C=g[f]-a.reference[f],$=await (null==l.getOffsetParent?void 0:l.getOffsetParent(d)),x=$?$[w]:0;x&&await (null==l.isElement?void 0:l.isElement($))||(x=c.floating[w]||a.floating[m]);let S=x/2-v[m]/2-1,A=ii(u[b?"top":"left"],S),P=ii(u[b?"bottom":"right"],S),E=x-v[m]-P,T=x/2-v[m]/2+(_/2-C/2),D=io(A,ii(T,E)),O=!h.arrow&&null!=ip(r)&&T!==D&&a.reference[m]/2-(T<A?A:P)-v[m]/2<0,B=O?T<A?T-A:T-E:0;return{[f]:g[f]+B,data:{[f]:D,centerOffset:T-D-B,...O&&{alignmentOffset:B}},reset:O}}});let a="absolute"===this.strategy?t=>or.getOffsetParent(t,od):or.getOffsetParent;((t,e,o)=>{let n=new Map,r={platform:or,...o},a={...r.platform,_c:n};return iA(t,e,{...r,platform:a})})(this.anchorEl,this.popup,{placement:this.placement,middleware:r,strategy:this.strategy,platform:e4(e7({},or),{getOffsetParent:a})}).then(({x:t,y:e,middlewareData:o,placement:n})=>{let r="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){let t=o.arrow.x,e=o.arrow.y,n="",l="",c="",h="";if("start"===this.arrowPlacement){let o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",l=r?o:"",h=r?"":o}else if("end"===this.arrowPlacement){let o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";l=r?"":o,h=r?o:"",c="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(h="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",n="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(h="number"==typeof t?`${t}px`:"",n="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:n,right:l,bottom:c,left:h,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return em`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${oh({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${oh({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?em`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ou.styles=[eJ,eF],e6([eM(".popup")],ou.prototype,"popup",2),e6([eM(".popup__arrow")],ou.prototype,"arrowEl",2),e6([eP()],ou.prototype,"anchor",2),e6([eP({type:Boolean,reflect:!0})],ou.prototype,"active",2),e6([eP({reflect:!0})],ou.prototype,"placement",2),e6([eP({reflect:!0})],ou.prototype,"strategy",2),e6([eP({type:Number})],ou.prototype,"distance",2),e6([eP({type:Number})],ou.prototype,"skidding",2),e6([eP({type:Boolean})],ou.prototype,"arrow",2),e6([eP({attribute:"arrow-placement"})],ou.prototype,"arrowPlacement",2),e6([eP({attribute:"arrow-padding",type:Number})],ou.prototype,"arrowPadding",2),e6([eP({type:Boolean})],ou.prototype,"flip",2),e6([eP({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],ou.prototype,"flipFallbackPlacements",2),e6([eP({attribute:"flip-fallback-strategy"})],ou.prototype,"flipFallbackStrategy",2),e6([eP({type:Object})],ou.prototype,"flipBoundary",2),e6([eP({attribute:"flip-padding",type:Number})],ou.prototype,"flipPadding",2),e6([eP({type:Boolean})],ou.prototype,"shift",2),e6([eP({type:Object})],ou.prototype,"shiftBoundary",2),e6([eP({attribute:"shift-padding",type:Number})],ou.prototype,"shiftPadding",2),e6([eP({attribute:"auto-size"})],ou.prototype,"autoSize",2),e6([eP()],ou.prototype,"sync",2),e6([eP({type:Object})],ou.prototype,"autoSizeBoundary",2),e6([eP({attribute:"auto-size-padding",type:Number})],ou.prototype,"autoSizePadding",2),e6([eP({attribute:"hover-bridge",type:Boolean})],ou.prototype,"hoverBridge",2),ou.define("sl-popup");var og=Object.defineProperty,of=Object.getOwnPropertyDescriptor,om=(t,e,o,n)=>{for(var r,a=n>1?void 0:n?of(e,o):e,l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n?r(e,o,a):r(a))||a);return n&&a&&og(e,o,a),a};let ov=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=t=>{this.open&&this.hasTrigger("focus")&&(t.relatedTarget&&this.contains(t.relatedTarget)||this.hide())},this.handleTriggerClick=t=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(t.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handlePopupBlur=t=>{let e=t.composedPath();e.includes(this)||e.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=t=>{let e=t.composedPath();e.includes(this)||e.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=ty(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),t)}},this.handleMouseOut=t=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=t.composedPath();if(e[e.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let o=ty(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),o)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(t){for(let e of ov.openPopovers)e===t||e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINS||e.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),ov.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return em`<sl-popup
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
		</sl-popup>`}async show(t){if((null==this._triggeredBy||"hover"!==t)&&(this._triggeredBy=t),!this.open)return ov.closeOthers(this),this.open=!0,ov.openPopovers.add(this),tw(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,ov.openPopovers.delete(this),tw(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(t){return this.trigger.split(" ").includes(t)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};ov.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ov.openPopovers=new Set,ov.styles=[eH,tq`
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
		`],om([eM("#popover")],ov.prototype,"body",2),om([eM("sl-popup")],ov.prototype,"popup",2),om([eP({reflect:!0})],ov.prototype,"placement",2),om([eP({type:Object})],ov.prototype,"anchor",2),om([eP({reflect:!0,type:Boolean})],ov.prototype,"disabled",2),om([eP({type:Number})],ov.prototype,"distance",2),om([eP({reflect:!0,type:Boolean})],ov.prototype,"open",2),om([eP({reflect:!0,type:Boolean})],ov.prototype,"arrow",2),om([eP({type:Number})],ov.prototype,"skidding",2),om([eP()],ov.prototype,"trigger",2),om([eP({type:Boolean})],ov.prototype,"hoist",2),om([eP({reflect:!0})],ov.prototype,"appearance",2),om([ez("open",{afterFirstUpdate:!0})],ov.prototype,"handleOpenChange",1),om([ez(["distance","hoist","placement","skidding"])],ov.prototype,"handleOptionsChange",1),om([ez("disabled")],ov.prototype,"handleDisabledChange",1),ov=om([eA("gl-popover")],ov);var ob=new Map,oy=new WeakMap;function ow(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function o_(t,e){ob.set(t,null!=e?e:{keyframes:[],options:{duration:0}})}function oC(t,e,o){let n=oy.get(t);if(null==n?void 0:n[e])return ow(n[e],o.dir);let r=ob.get(e);return r?ow(r,o.dir):{keyframes:[],options:{duration:0}}}let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(t){if(super(t),this.it=eb,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===eb||null==t)return this._t=void 0,this.it=t;if(t===ev)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let o$=oc(unsafe_html_e);var ox=tq`
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
`;function ok(t,e){return new Promise(o=>{t.addEventListener(e,function n(r){r.target===t&&(t.removeEventListener(e,n),o())})})}function oS(t,e,o){return new Promise(n=>{if((null==o?void 0:o.duration)===1/0)throw Error("Promise-based animations must be finite.");let r=t.animate(e,e4(e7({},o),{duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:o.duration}));r.addEventListener("cancel",n,{once:!0}),r.addEventListener("finish",n,{once:!0})})}function oA(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function oL(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function oP(t,e){let o=e7({waitUntilFirstUpdate:!1},e);return(e,n)=>{let{update:r}=e,a=Array.isArray(t)?t:[t];e.update=function(t){a.forEach(e=>{if(t.has(e)){let r=t.get(e),a=this[e];r!==a&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[n](r,a)}}),r.call(this,t)}}}var oE=class extends ie{constructor(){super(),this.localize=new eK(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let t=oA(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let t=oA(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await oL(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:e,options:o}=oC(this,"tooltip.show",{dir:this.localize.dir()});await oS(this.popup.popup,e,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await oL(this.body);let{keyframes:t,options:o}=oC(this,"tooltip.hide",{dir:this.localize.dir()});await oS(this.popup.popup,t,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ok(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ok(this,"sl-after-hide")}render(){return em`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${oh({tooltip:!0,"tooltip--open":this.open})}
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
    `}};oE.styles=[eJ,ox],oE.dependencies={"sl-popup":ou},e6([eM("slot:not([name])")],oE.prototype,"defaultSlot",2),e6([eM(".tooltip__body")],oE.prototype,"body",2),e6([eM("sl-popup")],oE.prototype,"popup",2),e6([eP()],oE.prototype,"content",2),e6([eP()],oE.prototype,"placement",2),e6([eP({type:Boolean,reflect:!0})],oE.prototype,"disabled",2),e6([eP({type:Number})],oE.prototype,"distance",2),e6([eP({type:Boolean,reflect:!0})],oE.prototype,"open",2),e6([eP({type:Number})],oE.prototype,"skidding",2),e6([eP()],oE.prototype,"trigger",2),e6([eP({type:Boolean})],oE.prototype,"hoist",2),e6([oP("open",{waitUntilFirstUpdate:!0})],oE.prototype,"handleOpenChange",1),e6([oP(["content","distance","hoist","placement","skidding"])],oE.prototype,"handleOptionsChange",1),e6([oP("disabled")],oE.prototype,"handleDisabledChange",1),o_("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),o_("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),oE.define("sl-tooltip");var oM=Object.defineProperty,oT=Object.getOwnPropertyDescriptor,oR=(t,e,o,n)=>{for(var r,a=n>1?void 0:n?oT(e,o):e,l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n?r(e,o,a):r(a))||a);return n&&a&&oM(e,o,a),a};o_("tooltip.show",null),o_("tooltip.hide",null);let oD=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1}firstUpdated(){this.observer=new MutationObserver(t=>{for(let e of t)if("attributes"===e.type&&"data-current-placement"===e.attributeName){let t=e.target.getAttribute("data-current-placement");t?this.setAttribute("data-current-placement",t):this.removeAttribute("data-current-placement")}});let t=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;t&&this.observer.observe(t,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),super.disconnectedCallback?.()}render(){var t;return em`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled}
			.distance=${this.distance??eb}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${t=this.content,t?.includes(`
`)?o$(t.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):t}</slot>
			</div>
		</sl-tooltip>`}};oD.styles=tq`
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
	`,oR([eP()],oD.prototype,"content",2),oR([eP({reflect:!0})],oD.prototype,"placement",2),oR([eP({type:Boolean})],oD.prototype,"disabled",2),oR([eP({type:Number})],oD.prototype,"distance",2),oR([eP({type:Boolean})],oD.prototype,"hoist",2),oD=oR([eA("gl-tooltip")],oD);let{I:oO}={M:t4,P:t6,A:et,C:1,L:eC,R:M,D:er,V:e$,I:R,H:k,N:I,U:L,B:H,F:z},oI=(t,e)=>{let o=t._$AN;if(void 0===o)return!1;for(let t of o)t._$AO?.(e,!1),oI(t,e);return!0},oN=t=>{let e,o;do{if(void 0===(e=t._$AM))break;(o=e._$AN).delete(t),t=e}while(0===o?.size)},oH=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),oF(e)}};function oB(t){void 0!==this._$AN?(oN(this),this._$AM=t,oH(this)):this._$AM=t}function oz(t,e=!1,o=0){let n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(n))for(let t=o;t<n.length;t++)oI(n[t],!1),oN(n[t]);else null!=n&&(oI(n,!1),oN(n));else oI(this,t)}let oF=t=>{2==t.type&&(t._$AP??=oz,t._$AQ??=oB)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),oH(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(oI(this,t),oN(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};let private_async_helpers_s=class private_async_helpers_s{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let oU=t=>null!==t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...t){return t.find(t=>!oU(t))??ev}update(t,e){let o=this._$Cbt,n=o.length;this._$Cbt=e;let r=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){let l=e[t];if(!oU(l))return this._$Cwt=t,l;t<n&&l===o[t]||(this._$Cwt=0x3fffffff,n=0,Promise.resolve(l).then(async t=>{for(;a.get();)await a.get();let e=r.deref();if(void 0!==e){let o=e._$Cbt.indexOf(l);o>-1&&o<e._$Cwt&&(e._$Cwt=o,e.setValue(t))}}))}return ev}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let oj=oc(until_c);var oq=Object.defineProperty,oV=Object.getOwnPropertyDescriptor,oZ=(t,e,o,n)=>{for(var r,a=n>1?void 0:n?oV(e,o):e,l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n?r(e,o,a):r(a))||a);return n&&a&&oq(e,o,a),a};let oW=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(t){this._hasPromo=t}render(){return em`${oj(this.promoPromise?.then(t=>this.renderPromo(t)),eb)}`}renderPromo(t){if(!t?.content?.webview){this.hasPromo=!1;return}let e=t.content.webview;switch(this.type){case"icon":return em`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(e.info)return this.hasPromo=!0,em`<p class="promo" part="text">${o$(e.info.html)}</p>`;break;case"link":if(e.link)return this.hasPromo=!0,em`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(t)}"
						title="${e.link.title??eb}"
						>${o$(e.link.html)}</a
					>`}return this.hasPromo=!1,eb}getCommandUrl(t){let e;return t?.content?.webview?.link?.command?.startsWith("command:")&&(e=t.content.webview.link.command.substring(8)),v(e??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};oW.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},oW.styles=[tq`
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
				${eO}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],oZ([eM('a,button,[tabindex="0"]')],oW.prototype,"_focusable",2),oZ([eP({type:Object})],oW.prototype,"promoPromise",2),oZ([eP({type:Object})],oW.prototype,"source",2),oZ([eP({reflect:!0,type:String})],oW.prototype,"type",2),oZ([eP({type:Boolean,reflect:!0,attribute:"has-promo"})],oW.prototype,"hasPromo",1),oW=oZ([eA("gl-promo")],oW);var oG=Object.defineProperty,oY=Object.getOwnPropertyDescriptor,oK=(t,e,o,n)=>{for(var r,a=n>1?void 0:n?oY(e,o):e,l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n?r(e,o,a):r(a))||a);return n&&a&&oG(e,o,a),a};let oJ=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){var t,e;return null==this.subscription?0:(t=this.subscription,e=t.plan.effective.expiresOn,(null!=e?function(t,e,o,n){let r=("number"==typeof e?e:e.getTime())-("number"==typeof t?t:t.getTime()),a=n??Math.floor;switch(o){case"days":return a(r/864e5);case"hours":return a(r/36e5);case"minutes":return a(r/6e4);case"seconds":return a(r/1e3);default:return r}}(Date.now(),new Date(e),"days",Math.round):void 0)??0)}get state(){return this.subscription?.state}render(){return em`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let t=this.preview?"Preview":"Pro";if(null!=this.subscription)if(this.state===eT.VerificationRequired)return em`${t} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else{var e,o;if(e=this.subscription.plan.actual.id,eR.includes(e)||this.cloud&&null!=this.subscription.account)return em`${t} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(o=this.subscription).state?o.state===eT.Trial:o.plan.actual.id!==o.plan.effective.id)return em`${t} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return t}renderPopoverHeader(){let t=em`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===eT.Paid?em`<div class="popup-header">${t}</div>`:this.cloud?this.preview?em`<div class="popup-header">
					${t}<span class="popup-subtitle"
						>Requires an account and may require GitLens Pro in the future</span
					>
				</div>`:em`<div class="popup-header">
				${t}<span class="popup-subtitle"> Requires GitLens Pro</span>
			</div>`:this.preview?em`<div class="popup-header">
				${t}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:em`<div class="popup-header">
			${t}<span class="popup-subtitle"> Requires GitLens Pro for use on privately-hosted repos</span>
		</div>`}renderPopoverContent(){let t;if(null==this.subscription)return eb;switch(this.state){case eT.Paid:var e;t=em`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${v("gitlens.showAccountView")}"
							>${e=this.subscription?.plan.actual.id??"pro",`GitLens ${function(t){switch(t){case"pro":return"Pro";case"advanced":return"Advanced";case"teams":return"Business";case"enterprise":return"Enterprise";default:return"Community"}}(e)}`}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case eT.VerificationRequired:t=em`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${v("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${v("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case eT.Trial:{let e=this.daysRemaining;t=em`<p>
						You have
						<strong>${e<1?"<1 day":tt("day",e,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case eT.TrialExpired:t=em`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(em`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case eT.TrialReactivationEligible:t=em`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${tt("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${v("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${tt("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:t=em`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return em`<div class="popup-content">${t}</div>`}renderStartTrialActions(){return em`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${v("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${v("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(t){return em`<div class="actions">
			${t??eb}
			<gl-button
				density="tight"
				href="${v("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return em`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"badge")}
			.source=${this.source}
		></gl-promo>`}};oJ.styles=[eI,eN,tq`
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
				${tj(eO)}
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
		`],oK([eP({type:Boolean})],oJ.prototype,"cloud",2),oK([eP({reflect:!0})],oJ.prototype,"placement",2),oK([eP({type:Boolean})],oJ.prototype,"preview",2),oK([function({context:t,subscribe:e}){return(o,n)=>{"object"==typeof n?n.addInitializer(function(){new s(this,{context:t,callback:t=>{o.set.call(this,t)},subscribe:e})}):o.constructor.addInitializer(o=>{new s(o,{context:t,callback:t=>{o[n]=t},subscribe:e})})}}({context:"promos"})],oJ.prototype,"promos",2),oK([eP({type:Object})],oJ.prototype,"source",2),oK([eP({attribute:!1})],oJ.prototype,"subscription",2),oJ=oK([eA("gl-feature-badge")],oJ);var oQ=Object.defineProperty,oX=Object.getOwnPropertyDescriptor;let o1=class extends lit_element_i{render(){return em`<svg
			alt="GitLens"
			width="159"
			height="46"
			viewBox="0 0 159 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="23" cy="23" r="23" fill="#04090D" />
			<circle cx="23" cy="23" r="23" fill="url(#paint0_linear_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint1_radial_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint2_radial_43_72231)" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23 45.0272C35.1653 45.0272 45.0272 35.1653 45.0272 23C45.0272 10.8347 35.1653 0.97281 23 0.97281C10.8347 0.97281 0.97281 10.8347 0.97281 23C0.97281 35.1653 10.8347 45.0272 23 45.0272ZM23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
				fill="white"
				style="mix-blend-mode:soft-light"
			/>
			<mask id="path-3-inside-1_43_72231" fill="white">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				/>
			</mask>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				fill="url(#paint3_linear_43_72231)"
			/>
			<path
				d="M23.6825 13.6317L22.7391 13.3001L22.517 13.9317L23.0164 14.3776L23.6825 13.6317ZM23.7041 11.4729L24.652 11.1544L23.7041 11.4729ZM25.7364 15.5815L25.0281 16.2874V16.2874L25.7364 15.5815ZM29.656 20.0599L28.8521 20.6547L29.2988 21.2583L30.003 20.9978L29.656 20.0599ZM28.1778 21.0658L28.9218 21.734L29.4805 21.1119L28.9671 20.4518L28.1778 21.0658ZM24.5714 16.9401L23.8494 17.632V17.632L24.5714 16.9401ZM22.7043 15.0996L23.3845 14.3666L22.7107 13.7413L22.031 14.3601L22.7043 15.0996ZM21.3681 15.8837L21.6885 16.831L21.6885 16.831L21.3681 15.8837ZM20.7039 16.0445L20.5567 15.0553L19.7758 15.1715L19.7076 15.9581L20.7039 16.0445ZM20.8797 30.15L19.8878 30.2774L19.9875 31.0538L20.7651 31.1434L20.8797 30.15ZM22.4173 30.6606L21.9194 31.5278H21.9194L22.4173 30.6606ZM23.969 35.4466L23.1004 34.9512L23.969 35.4466ZM19.0708 36.5294L19.5687 35.6621L19.0708 36.5294ZM17.5191 31.7433L18.3878 32.2387H18.3878L17.5191 31.7433ZM19.0957 30.381L19.4695 31.3085L20.2212 31.0056L20.0805 30.2074L19.0957 30.381ZM18.8723 15.8552L19.8671 15.9566L19.9454 15.1888L19.2225 14.9185L18.8723 15.8552ZM16.8475 13.7923L15.8996 14.1107L16.8475 13.7923ZM24.6259 13.9634C24.9355 13.0825 24.97 12.1009 24.652 11.1544L22.7562 11.7913C22.9243 12.2919 22.9094 12.8155 22.7391 13.3001L24.6259 13.9634ZM26.4448 14.8756C25.6877 14.116 24.9877 13.4565 24.3485 12.8858L23.0164 14.3776C23.6258 14.9218 24.2977 15.5545 25.0281 16.2874L26.4448 14.8756ZM30.4598 19.4651C29.6154 18.3239 28.3296 16.7669 26.4448 14.8756L25.0281 16.2874C26.8464 18.1119 28.0679 19.5949 28.8521 20.6547L30.4598 19.4651ZM30.9435 18.8304C30.3707 18.8304 29.8196 18.9331 29.309 19.122L30.003 20.9978C30.2948 20.8898 30.6112 20.8304 30.9435 20.8304V18.8304ZM35.6656 23.5653C35.6656 20.9535 33.5547 18.8304 30.9435 18.8304V20.8304C32.4437 20.8304 33.6656 22.0516 33.6656 23.5653H35.6656ZM30.9435 28.3002C33.5547 28.3002 35.6656 26.1771 35.6656 23.5653H33.6656C33.6656 25.079 32.4437 26.3002 30.9435 26.3002V28.3002ZM26.2214 23.5653C26.2214 26.1771 28.3323 28.3002 30.9435 28.3002V26.3002C29.4434 26.3002 28.2214 25.079 28.2214 23.5653H26.2214ZM27.4338 20.3976C26.6806 21.2362 26.2214 22.3484 26.2214 23.5653H28.2214C28.2214 22.8598 28.486 22.2192 28.9218 21.734L27.4338 20.3976ZM23.8494 17.632C25.4595 19.3123 26.6038 20.671 27.3884 21.6798L28.9671 20.4518C28.1382 19.3862 26.9486 17.9756 25.2934 16.2483L23.8494 17.632ZM22.024 15.8325C22.5932 16.3607 23.2039 16.9585 23.8494 17.632L25.2934 16.2483C24.6208 15.5464 23.9822 14.9212 23.3845 14.3666L22.024 15.8325ZM21.6885 16.831C22.3336 16.6128 22.9041 16.27 23.3775 15.839L22.031 14.3601C21.7593 14.6076 21.4283 14.8077 21.0476 14.9365L21.6885 16.831ZM20.851 17.0336C21.1313 16.9919 21.4115 16.9247 21.6885 16.831L21.0476 14.9365C20.8838 14.9919 20.7195 15.0311 20.5567 15.0553L20.851 17.0336ZM21.4653 22.2681C21.4653 19.6222 21.5729 17.5986 21.7001 16.1308L19.7076 15.9581C19.5751 17.4867 19.4653 19.5681 19.4653 22.2681H21.4653ZM21.8715 30.0227C21.6881 28.5945 21.4653 26.0756 21.4653 22.2681H19.4653C19.4653 26.1534 19.6927 28.7578 19.8878 30.2774L21.8715 30.0227ZM20.7651 31.1434C21.1508 31.1879 21.5448 31.3127 21.9194 31.5278L22.9153 29.7933C22.3041 29.4425 21.6492 29.2321 20.9942 29.1566L20.7651 31.1434ZM21.9194 31.5278C23.3025 32.3219 23.7079 33.8857 23.1004 34.9512L24.8377 35.9419C26.0784 33.7662 25.0944 31.0445 22.9153 29.7933L21.9194 31.5278ZM23.1004 34.9512C22.4943 36.0141 20.9505 36.4555 19.5687 35.6621L18.5729 37.3966C20.7533 38.6485 23.5955 38.1204 24.8377 35.9419L23.1004 34.9512ZM19.5687 35.6621C18.1856 34.868 17.7802 33.3042 18.3878 32.2387L16.6504 31.248C15.4097 33.4237 16.3938 36.1454 18.5729 37.3966L19.5687 35.6621ZM18.3878 32.2387C18.6319 31.8105 19.01 31.4937 19.4695 31.3085L18.7218 29.4535C17.8741 29.7952 17.133 30.4016 16.6504 31.248L18.3878 32.2387ZM17.6075 22.2997C17.6075 26.6892 17.8689 29.1823 18.1108 30.5546L20.0805 30.2074C19.8656 28.9885 19.6075 26.6202 19.6075 22.2997H17.6075ZM17.8775 15.7537C17.7264 17.2346 17.6075 19.3393 17.6075 22.2997H19.6075C19.6075 19.3905 19.7245 17.3553 19.8671 15.9566L17.8775 15.7537ZM15.8996 14.1107C16.3345 15.4053 17.33 16.3461 18.5221 16.7919L19.2225 14.9185C18.5498 14.667 18.0237 14.1531 17.7955 13.4738L15.8996 14.1107ZM18.8631 8.43412C16.4958 9.23492 15.1049 11.7452 15.8996 14.1107L17.7955 13.4738C17.3837 12.2482 18.0845 10.8088 19.504 10.3287L18.8631 8.43412ZM24.652 11.1544C23.8567 8.78703 21.2317 7.6329 18.8631 8.43412L19.504 10.3287C20.9222 9.84892 22.345 10.5676 22.7562 11.7913L24.652 11.1544Z"
				fill="white"
				style="mix-blend-mode:soft-light"
				mask="url(#path-3-inside-1_43_72231)"
			/>
			<path
				d="M71.554 18.5081C71.0032 17.4524 70.2382 16.6607 69.2591 16.1328C68.2799 15.5846 67.1477 15.3106 65.8626 15.3106C64.455 15.3106 63.2005 15.6252 62.0989 16.2546C60.9974 16.884 60.1304 17.7773 59.498 18.9345C58.8861 20.0917 58.5801 21.4317 58.5801 22.9543C58.5801 24.477 58.8861 25.8271 59.498 27.0046C60.1304 28.1618 60.9974 29.0551 62.0989 29.6845C63.2005 30.3138 64.455 30.6285 65.8626 30.6285C67.7597 30.6285 69.2999 30.1007 70.483 29.0449C71.6662 27.9892 72.3903 26.5579 72.6555 24.7511H64.6692V21.9798H76.3886C76.3886 21.9798 76.4973 22.789 76.4973 23.4052C76.4973 23.9332 76.3886 24.6901 76.3886 24.6901C76.1642 26.3346 75.5726 27.8471 74.6139 29.2277C73.6755 30.6082 72.4413 31.7147 70.9114 32.5471C69.4019 33.3592 67.7189 33.7652 65.8626 33.7652C63.8635 33.7652 62.0377 33.3084 60.3854 32.3948C58.7331 31.4609 57.4173 30.1717 56.4381 28.5272C55.4794 26.8828 55 25.0251 55 22.9543C55 20.8835 55.4794 19.0259 56.4381 17.3814C57.4173 15.7369 58.7331 14.4579 60.3854 13.5443C62.0581 12.6104 63.8839 12.1434 65.8626 12.1434C68.1269 12.1434 70.1362 12.7017 71.8906 13.8184C73.6653 14.9147 74.9505 16.4779 75.746 18.5081H71.554Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path d="M82.7053 19.7872V33.5825H79.2171V19.7872H82.7053Z" fill="#F7DEFF" class="letters" />
			<path
				d="M90.7428 19.6349V28.9231C90.7428 29.5525 90.8856 30.0093 91.1712 30.2935C91.4772 30.5575 91.9872 30.6894 92.7011 30.6894H94.8431V33.5825H92.0892C90.5184 33.5825 89.3149 33.217 88.4785 32.4862C87.6421 31.7553 87.2239 30.5676 87.2239 28.9231V19.6349H85.235V16.8028H87.2239V12.4049H90.7428V16.8028H94.8431V19.6349H90.7428Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M100.934 30.7808H109.505V33.5825H97.4461V12.4175H100.934V30.7808Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M125.883 24.7815C125.883 25.4109 125.842 25.9793 125.76 26.4869H112.878C112.98 27.8268 113.48 28.9028 114.378 29.7149C115.275 30.527 116.377 30.933 117.682 30.933C119.559 30.933 120.885 30.1514 121.66 28.5882H125.424C124.914 30.1311 123.986 31.4 122.639 32.3948C121.313 33.3693 119.661 33.8566 117.682 33.8566C116.071 33.8566 114.622 33.5013 113.337 32.7907C112.072 32.0598 111.073 31.0447 110.339 29.7454C109.625 28.4257 109.268 26.9031 109.268 25.1774C109.268 23.4517 109.614 21.9392 110.308 20.6399C111.022 19.3202 112.011 18.3051 113.276 17.5946C114.561 16.884 116.03 16.5287 117.682 16.5287C119.273 16.5287 120.691 16.8738 121.935 17.5641C123.18 18.2544 124.149 19.2289 124.842 20.4876C125.536 21.726 125.883 23.1573 125.883 24.7815ZM122.241 23.6852C122.221 22.4062 121.762 21.3809 120.865 20.6094C119.967 19.8379 118.855 19.4522 117.529 19.4522C116.326 19.4522 115.296 19.8379 114.439 20.6094C113.582 21.3606 113.072 22.3859 112.909 23.6852H122.241Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M136.29 16.5287C137.616 16.5287 138.799 16.8028 139.84 17.3509C140.901 17.8991 141.727 18.7112 142.318 19.7872C142.91 20.8632 143.206 22.1625 143.206 23.6852V33.5825H139.748V24.2029C139.748 22.7005 139.371 21.5535 138.616 20.7617C137.861 19.9496 136.831 19.5436 135.525 19.5436C134.22 19.5436 133.179 19.9496 132.404 20.7617C131.65 21.5535 131.272 22.7005 131.272 24.2029V33.5825H127.784V16.8028H131.272V18.7213C131.843 18.031 132.568 17.493 133.445 17.1073C134.342 16.7216 135.291 16.5287 136.29 16.5287Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M152.243 33.8566C150.917 33.8566 149.724 33.6231 148.663 33.1561C147.623 32.6689 146.797 32.0192 146.185 31.2071C145.573 30.3747 145.246 29.451 145.206 28.4359H148.816C148.877 29.1465 149.214 29.7454 149.826 30.2326C150.458 30.6996 151.244 30.933 152.182 30.933C153.161 30.933 153.916 30.7503 154.446 30.3849C154.997 29.9991 155.273 29.5119 155.273 28.9231C155.273 28.2938 154.967 27.8268 154.355 27.5223C153.763 27.2178 152.815 26.8828 151.509 26.5173C150.244 26.1722 149.214 25.8372 148.418 25.5124C147.623 25.1875 146.929 24.6901 146.338 24.0202C145.767 23.3502 145.481 22.4671 145.481 21.3707C145.481 20.4775 145.746 19.6654 146.277 18.9345C146.807 18.1833 147.562 17.5946 148.541 17.1682C149.54 16.7419 150.683 16.5287 151.968 16.5287C153.885 16.5287 155.426 17.0159 156.588 17.9904C157.772 18.9446 158.404 20.2541 158.486 21.9189H154.997C154.936 21.1677 154.63 20.5688 154.079 20.1222C153.528 19.6755 152.784 19.4522 151.846 19.4522C150.928 19.4522 150.224 19.6248 149.734 19.9699C149.245 20.315 149 20.7718 149 21.3403C149 21.7869 149.163 22.1625 149.489 22.4671C149.816 22.7716 150.214 23.0152 150.683 23.1979C151.152 23.3604 151.846 23.5735 152.764 23.8375C153.987 24.1623 154.987 24.4973 155.762 24.8424C156.558 25.1672 157.241 25.6545 157.812 26.3042C158.384 26.9538 158.679 27.8167 158.7 28.8927C158.7 29.8469 158.435 30.6996 157.904 31.4508C157.374 32.2019 156.619 32.7907 155.64 33.217C154.681 33.6434 153.549 33.8566 152.243 33.8566Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M83.4777 14.9015C83.4777 16.2735 82.3602 17.3857 80.9817 17.3857C79.6031 17.3857 78.4856 16.2735 78.4856 14.9015C78.4856 13.5295 79.6031 12.4173 80.9817 12.4173C82.3602 12.4173 83.4777 13.5295 83.4777 14.9015Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_43_72231"
					x1="-5.14199"
					y1="15.148"
					x2="35.1957"
					y2="53.4671"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#F1C6FF" />
					<stop offset="0.104167" stop-color="#DD74FF" />
					<stop offset="0.352245" stop-color="#DD74FF" stop-opacity="0" />
					<stop offset="0.62022" stop-color="#4E032E" stop-opacity="0" />
					<stop offset="0.825426" stop-color="#3C17A7" />
					<stop offset="1" stop-color="#3687FF" />
				</linearGradient>
				<radialGradient
					id="paint1_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(51.1591 15.2989) rotate(138.744) scale(31.2464 31.2515)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#00A3FF" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(-2.91103 29.7569) rotate(42.9991) scale(28.6895 28.728)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#0D1017" stop-opacity="0" />
				</radialGradient>
				<linearGradient
					id="paint3_linear_43_72231"
					x1="23.4169"
					y1="14.5226"
					x2="41.2576"
					y2="49.9689"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="white" />
					<stop offset="1" stop-color="#B7E1FF" stop-opacity="0.58" />
				</linearGradient>
			</defs>
		</svg>`}};o1.styles=[tq`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			:host-context(.vscode-high-contrast-light) .letters,
			:host-context(.vscode-light) .letters {
				fill: var(--color-foreground);
			}

			svg {
				vertical-align: middle;
			}
		`],o1=((t,e,o,n)=>{for(var r,a=n>1?void 0:n?oX(e,o):e,l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n?r(e,o,a):r(a))||a);return n&&a&&oQ(e,o,a),a})([eA("gitlens-logo")],o1);let o2=new Date().getTimezoneOffset()/60*100,o0=new Date(`Wed Jul 25 2018 19:18:00 GMT${o2>=0?"-":"+"}${String(Math.abs(o2)).padStart(4,"0")}`);let SettingsApp=class SettingsApp extends App{constructor(){super("SettingsApp"),this._scopes=null,this._activeSection="general",this._changes=Object.create(null),this._sections=new Map,this._updating=!1}onInitialize(){let t=document.getElementById("scopes");if(null!=t&&this.state.scopes.length>1){for(let[e,o]of this.state.scopes){let n=document.createElement("option");n.value=e,n.innerHTML=o,this.state.scope===e&&(n.selected=!0),t.appendChild(n)}t.parentElement.parentElement.classList.remove("hidden"),this._scopes=t}let e=83,o=document.querySelector(".hero__area--sticky");for(let t of(null!=o&&(e=o.clientHeight),this._observer=new IntersectionObserver(this.onObserver.bind(this),{rootMargin:`-${e}px 0px 0px 0px`}),document.querySelectorAll("section[id]>.section__header")))this._sections.set(t.parentElement.id,!1),this._observer.observe(t);for(let t of document.querySelectorAll("[data-setting]"))for(let e of(t.title||"checkbox"!==t.type||(t.title=`Setting name: "gitlens.${t.name}"`),document.querySelectorAll(`label[for="${t.id}"]`)))e.title||(e.title=`Setting name: "gitlens.${t.name}"`)}onBind(){let t=super.onBind?.()??[];return t.push(p.on("input[type=checkbox][data-setting]","change",(t,e)=>this.onInputChecked(e)),p.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","blur",(t,e)=>this.onInputBlurred(e)),p.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","focus",(t,e)=>this.onInputFocused(e)),p.on("input[type=text][data-setting][data-setting-preview], input[type=number][data-setting][data-setting-preview]","input",(t,e)=>this.onInputChanged(e)),p.on("button[data-setting-clear]","click",(t,e)=>this.onButtonClicked(e)),p.on("select[data-setting]","change",(t,e)=>this.onInputSelected(e)),p.on(".token[data-token]","mousedown",(t,e)=>this.onTokenMouseDown(e,t)),p.on(".section--collapsible>.section__header","click",(t,e)=>this.onSectionHeaderClicked(e,t)),p.on(".setting--expandable .setting__expander","click",(t,e)=>this.onSettingExpanderCicked(e,t)),p.on('a[data-action="jump"]',"mousedown",t=>{t.target?.focus(),t.stopPropagation(),t.preventDefault()}),p.on('a[data-action="jump"]',"click",(t,e)=>this.onJumpToLinkClicked(e,t)),p.on("[data-action]","mousedown",t=>{t.target?.focus(),t.stopPropagation(),t.preventDefault()}),p.on("[data-action]","click",(t,e)=>this.onActionLinkClicked(e,t))),t}onMessageReceived(t){switch(!0){case D.is(t):this.scrollToAnchor(t.params.anchor,t.params.scrollBehavior);break;case P.is(t):this.state.config=t.params.config,this.state.customSettings=t.params.customSettings,this.state.timestamp=Date.now(),this.setState(this.state),this.updateState();break;case O.is(t):this.state.hasAccount=t.params.hasAccount,this.setState(this.state),this.renderAutolinkIntegration();break;case B.is(t):this.state.hasConnectedJira=t.params.hasConnectedJira,this.setState(this.state),this.renderAutolinkIntegration();break;default:super.onMessageReceived?.(t)}}applyChanges(){this.sendCommand(C,{changes:{...this._changes},removes:Object.keys(this._changes).filter(t=>void 0===this._changes[t]),scope:this.getSettingsScope()}),this._changes=Object.create(null)}getSettingsScope(){return null!=this._scopes?this._scopes.options[this._scopes.selectedIndex].value:"user"}onInputBlurred(t){this.log(`onInputBlurred(${t.name}): value=${t.value})`);let e=document.getElementById(`${t.name}.popup`);null!=e&&e.classList.add("hidden");let o=t.value;if((null==o||0===o.length)&&void 0===(o=t.dataset.defaultValue)&&(o=null),"arrayObject"===t.dataset.settingType){let e=t.name.split("."),n=e[0],r=parseInt(e[1],10),a=e.slice(2),l=this.getSettingValue(n);if(null==o&&(void 0===l||l?.length===0))void 0!==l&&(this._changes[n]=void 0);else{let e=(l=l??[])[r];(null!=o||null==o&&void 0!==e)&&(void 0===e&&(e=Object.create(null),l[r]=e),o5(e,a.join("."),"number"===t.type&&null!=o?Number(o):o),this._changes[n]=l)}}else this._changes[t.name]="number"===t.type&&null!=o?Number(o):o;this.applyChanges()}onButtonClicked(t){if("arrayObject"===t.dataset.settingType){let e=t.name.split("."),o=e[0],n=this.getSettingValue(o);if(void 0===n)return;let r=parseInt(e[1],10);null!=n[r]&&(n.splice(r,1),this._changes[o]=n.length?n:void 0,this.applyChanges())}}onInputChanged(t){if(!this._updating)for(let e of document.querySelectorAll(`span[data-setting-preview="${t.name}"]`))this.updatePreview(e,t.value)}onInputChecked(t){if(!this._updating){switch(this.log(`onInputChecked(${t.name}): checked=${t.checked}, value=${t.value})`),t.dataset.settingType){case"object":{let e=t.name.split("."),o=e.splice(0,1)[0],n=this.getSettingValue(o)??Object.create(null);t.checked?o5(n,e.join("."),o8(t.value)):o5(n,e.join("."),!1),this._changes[o]=n;break}case"array":{let e=this.getSettingValue(t.name)??[];if(Array.isArray(e)){if(t.checked)e.includes(t.value)||e.push(t.value);else{let o=e.indexOf(t.value);-1!==o&&e.splice(o,1)}this._changes[t.name]=e}break}case"arrayObject":{let e=t.name.split("."),o=e[0],n=parseInt(e[1],10),r=e.slice(2),a=this.getSettingValue(o)??[],l=a[n]??Object.create(null);void 0===a[n]&&(a[n]=l),t.checked?o5(a[n],r.join("."),o8(t.value)):o5(a[n],r.join("."),!1),this._changes[o]=a;break}case"custom":this._changes[t.name]=t.checked;break;default:t.checked?this._changes[t.name]=o8(t.value):this._changes[t.name]=null!=t.dataset.valueOff&&t.dataset.valueOff}this.setAdditionalSettings(t.checked?t.dataset.addSettingsOn:t.dataset.addSettingsOff),this.applyChanges()}}onInputFocused(t){this.log(`onInputFocused(${t.name}): value=${t.value}`);let e=document.getElementById(`${t.name}.popup`);if(null!=e){if(0===e.childElementCount){let t=document.querySelector("#token-popup")?.content.cloneNode(!0);null!=t&&e.appendChild(t)}e.classList.remove("hidden")}}onInputSelected(t){if(t===this._scopes||this._updating)return;let e=t.options[t.selectedIndex].value;this.log(`onInputSelected(${t.name}): value=${e}`),this._changes[t.name]=o3(e),this.applyChanges()}onTokenMouseDown(t,e){if(this._updating)return;this.log(`onTokenMouseDown(${t.id})`);let o=t.closest(".setting");if(null==o)return;let n=o.querySelector("input[type=text], input:not([type])");if(null==n)return;let r=`\${${t.dataset.token}}`,a=n.selectionStart;null!=a?(n.value=`${n.value.substring(0,a)}${r}${n.value.substring(n.selectionEnd??a)}`,a+=r.length):a=n.value.length,n.focus(),n.setSelectionRange(a,a),a===n.value.length&&(n.scrollLeft=n.scrollWidth),setTimeout(()=>this.onInputChanged(n),0),setTimeout(()=>n.focus(),250),e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault()}scrollToAnchor(t,e,o){o=83;let n=document.querySelector(".hero__area--sticky");null!=n&&(o=n.clientHeight);let r=document.getElementById(t);null!=r&&this.scrollTo(r,e,o)}scrollTo(t,e,o){let n=t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-(o??0);window.scrollTo({top:n,behavior:e??"smooth"});let r=()=>{null!=this._scrollTimer&&clearTimeout(this._scrollTimer),this._scrollTimer=setTimeout(()=>{if(window.removeEventListener("scroll",r),2>Math.abs(n-(t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-(o??0))))return void t.focus({preventScroll:!0});this.scrollTo(t,e,o)},50)};window.addEventListener("scroll",r,!1)}evaluateStateExpression(t,e){let o=!1;for(let n of t.trim().split("&")){let[t,r,a]=function(t){let[e,o,n]=t.trim().split(/([=+!])/);return[e.trim(),void 0!==o?o.trim():"=",void 0!==n?n.trim():n]}(n);switch(r){case"=":{let n=e[t];void 0===n&&(void 0===(n=this.getSettingValue(t))||null===n&&"string"!=typeof a)&&(n=!1),o=void 0!==a?a===String(n):!!n;break}case"!":{let n=e[t];void 0===n&&(void 0===(n=this.getSettingValue(t))||null===n&&"string"!=typeof a)&&(n=!1),o=void 0!==a?a!==String(n):!n;break}case"+":if(void 0!==a){let e=this.getSettingValue(t);o=void 0!==e&&e.includes(a.toString())}}if(!o)break}return o}getCustomSettingValue(t){return this.state.customSettings?.[t]}getSettingValue(t){var e;let o=this.getCustomSettingValue(t);return null!=o?o:(e=this.state.config,t.split(".").reduce((t={},e)=>null==t?void 0:t[e],e))}updateState(){var e;let{version:o}=this.state;document.getElementById("version").textContent=o;let n=document.activeElement?.id;this.renderAutolinkIntegration(),this.renderAutolinks(),n?.startsWith("autolinks.")&&queueMicrotask(()=>{document.getElementById(n)?.focus()}),this._updating=!0,t="string"==typeof(e=this.state.config.defaultDateLocale)?"system"===e||0===e.trim().length?void 0:[e]:e??void 0,G.clear(),Y.clear();try{for(let t of document.querySelectorAll("input[type=checkbox][data-setting]"))if("custom"===t.dataset.settingType)t.checked=this.getCustomSettingValue(t.name)??!1;else if("array"===t.dataset.settingType)t.checked=(this.getSettingValue(t.name)??[]).includes(t.value);else if(null!=t.dataset.valueOff){let e=this.getSettingValue(t.name);t.checked=t.dataset.valueOff!==e,t.indeterminate=null===e}else t.checked=this.getSettingValue(t.name)??!1;for(let t of document.querySelectorAll("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]"))t.value=this.getSettingValue(t.name)??"";for(let t of document.querySelectorAll("select[data-setting]")){let e=this.getSettingValue(t.name),o=t.querySelector(`option[value='${e}']`);null!=o&&(o.selected=!0)}for(let t of document.querySelectorAll("span[data-setting-preview]"))this.updatePreview(t)}finally{this._updating=!1}let r=function t(e,o){let n={};for(let r in e){let a=e[r];Array.isArray(a)||("object"==typeof a?Object.assign(n,t(a,void 0===o?r:`${o}.${r}`)):n[void 0===o?r:`${o}.${r}`]=a)}return n}(this.state.config);if(null!=this.state.customSettings)for(let[t,e]of Object.entries(this.state.customSettings))r[t]=e;this.setVisibility(r),this.setEnablement(r)}setAdditionalSettings(t){if(t){for(let[e,o]of t.trim().split(",").map(t=>{let[e,o]=t.split("=");return[e,o3(o)]}))this._changes[e]=o}}setEnablement(t){for(let e of document.querySelectorAll("[data-enablement]")){let o=!this.evaluateStateExpression(e.dataset.enablement,t);if(o?e.setAttribute("disabled",""):e.removeAttribute("disabled"),e.matches("input,select"))e.disabled=o;else{let t=e.querySelector("input,select");if(null==t)continue;t.disabled=o}}}setVisibility(t){for(let e of document.querySelectorAll("[data-visibility]"))e.classList.toggle("hidden",!this.evaluateStateExpression(e.dataset.visibility,t))}updatePreview(t,e){let o=t.dataset.settingPreviewType;switch(o){case"date":if(void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),!e){let o=t.dataset.settingPreviewDefaultLookup;null!=o&&(e=this.getSettingValue(o)),null==e&&(e=t.dataset.settingPreviewDefault)}t.innerText=null==e?"":K(o0,e,void 0,!1);break;case"date-locale":{void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),e||(e=void 0);let o=this.getSettingValue(t.dataset.settingPreviewDefault)??"MMMM Do, YYYY h:mma";try{t.innerText=K(o0,o,e,!1)}catch(e){t.innerText=e.message}break}case"commit":case"commit-uncommitted":if(void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),!e&&null==(e=t.dataset.settingPreviewDefault)){let o=t.dataset.settingPreviewDefaultLookup;null!=o&&(e=this.getSettingValue(o))}if(null==e){t.innerText="";return}this.sendRequest(T,{key:t.dataset.settingPreview,type:o,format:e}).then(e=>{t.innerText=e.preview??""})}}onObserver(t,e){let o;for(let e of t)this._sections.set(e.target.parentElement.id,e.isIntersecting);for(let[t,e]of this._sections.entries())if(e){o=t;break}if(void 0===o){if(1!==t.length)return;let e=t[0];if(null==e.boundingClientRect||null==e.rootBounds)return;if(o=e.target.parentElement.id,e.boundingClientRect.top>=e.rootBounds.bottom){let t=[...this._sections.keys()],e=t.indexOf(o);if(e<=0)return;o=t[e-1]}}this._activeSection!==o&&(void 0!==this._activeSection&&this.toggleJumpLink(this._activeSection,!1),this._activeSection=o,this.toggleJumpLink(this._activeSection,!0))}onActionLinkClicked(t,e){switch(t.dataset.action){case"collapse":for(let t of document.querySelectorAll(".section--collapsible"))t.classList.add("collapsed");document.querySelector('[data-action="collapse"]').classList.add("hidden"),document.querySelector('[data-action="expand"]').classList.remove("hidden");break;case"expand":for(let t of document.querySelectorAll(".section--collapsible"))t.classList.remove("collapsed");document.querySelector('[data-action="collapse"]').classList.remove("hidden"),document.querySelector('[data-action="expand"]').classList.add("hidden");break;case"show":if(t.dataset.actionTarget)for(let e of document.querySelectorAll(`[data-region="${t.dataset.actionTarget}"]`))e.classList.remove("hidden"),e.querySelector("input,select,textarea,button")?.focus();break;case"hide":if(t.dataset.actionTarget)for(let e of document.querySelectorAll(`[data-region="${t.dataset.actionTarget}"]`))e.classList.add("hidden")}e.preventDefault(),e.stopPropagation()}onJumpToLinkClicked(t,e){let o=t.getAttribute("href");if(null==o)return;let n=o.substring(1);this.scrollToAnchor(n,"smooth"),e.stopPropagation(),e.preventDefault()}onSectionHeaderClicked(t,e){e.target.matches("a, input, label, i.icon__info")||t.parentElement.classList.toggle("collapsed")}onSettingExpanderCicked(t,e){t.parentElement.parentElement.classList.toggle("expanded")}toggleJumpLink(t,e){let o=document.querySelector(`a.sidebar__jump-link[href="#${t}"]`);null!=o&&o.classList.toggle("active",e)}renderAutolinkIntegration(){let t=document.querySelector('[data-component="autolink-integration"]');if(null==t)return;let{hasAccount:e,hasConnectedJira:o}=this.state,n=`<a href="${v("gitlens.plus.cloudIntegrations.connect",{integrationIds:["jira"],source:{source:"settings",detail:{action:"connect",integration:"jira"}}})}">Connect to Jira Cloud</a> &mdash; ${e?"":"sign up and "}get access to automatic rich Jira autolinks.`;e&&o&&(n='<i class="codicon codicon-check" style="vertical-align: text-bottom"></i> Jira connected &mdash; automatic rich Jira autolinks are enabled.'),t.innerHTML=n}renderAutolinks(){let t=document.querySelector('[data-component="autolinks"]');if(null==t)return;let e=()=>`
			<div class="setting__hint">
				<span style="line-height: 2rem">
					<i class="icon icon--sm icon__info"></i> Matches prefixes that are followed by a reference value within commit messages.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The URL must contain a <code>&lt;num&gt;</code> for the reference value to be included in the link.
				</span>
			</div>
		`,o=(t,o,n=!1,r=!0)=>`
			<div class="setting${n?' hidden" data-region="autolink':""}">
				<div class="setting__group">
					<div class="setting__input setting__input--short setting__input--with-actions">
						<label for="autolinks.${t}.prefix">Prefix</label>
						<input
							id="autolinks.${t}.prefix"
							name="autolinks.${t}.prefix"
							placeholder="TICKET-"
							data-setting
							data-setting-type="arrayObject"
							${o?.prefix?`value="${encodeURIComponent(o.prefix)}"`:""}
						>
						<div class="setting__input-actions">
							<div class="toggle-button">
								<input
									id="autolinks.${t}.ignoreCase"
									name="autolinks.${t}.ignoreCase"
									type="checkbox"
									class="toggle-button__control"
									data-setting
									data-setting-type="arrayObject"
									${o?.ignoreCase?"checked":""}
								>
								<label class="toggle-button__label" for="autolinks.${t}.ignoreCase" title="Case-sensitive" aria-label="Case-sensitive">Aa</label>
							</div>
							<div class="toggle-button">
								<input
									id="autolinks.${t}.alphanumeric"
									name="autolinks.${t}.alphanumeric"
									type="checkbox"
									class="toggle-button__control"
									data-setting
									data-setting-type="arrayObject"
									${o?.alphanumeric?"checked":""}
								>
								<label class="toggle-button__label" for="autolinks.${t}.alphanumeric" title="Alphanumeric" aria-label="Alphanumeric">a1</label>
							</div>
						</div>
					</div>
					<div class="setting__input setting__input--long setting__input--centered">
						<label for="autolinks.${t}.url">URL</label>
						<input
							id="autolinks.${t}.url"
							name="autolinks.${t}.url"
							type="text"
							placeholder="https://example.com/TICKET?q=&lt;num&gt;"
							data-setting
							data-setting-type="arrayObject"
							${o?.url?`value="${encodeURIComponent(o.url)}"`:""}
						>
						${n?`
							<button
								class="button button--compact button--flat-subtle"
								type="button"
								data-action="hide"
								data-action-target="autolink"
								title="Delete"
								aria-label="Delete"
							><i class="codicon codicon-close"></i></button>
						`:`
							<button
								id="autolinks.${t}.delete"
								name="autolinks.${t}.delete"
								class="button button--compact button--flat-subtle"
								type="button"
								data-setting-type="arrayObject"
								data-setting-clear
								title="Delete"
								aria-label="Delete"
							><i class="codicon codicon-close"></i></button>
						`}
					</div>
				</div>
				${r&&n?e():""}
			</div>
		`,n=[],r=(this.state.config.autolinks?.length||0)>0;r&&this.state.config.autolinks?.forEach((t,e)=>n.push(o(e,t))),n.push(o(this.state.config.autolinks?.length??0,void 0,!0,!r)),r&&n.push(e()),t.innerHTML=n.join("")}};function o3(t){return"true"===t||"false"!==t&&("null"===t?null:t)}function o5(t,e,o){let n=e.split("."),r=n.length,a=r-1,l=-1,c=t;for(;null!=c&&++l<r;){let t=n[l],e=o;if(l!==a){let o=c[t];e="object"==typeof o?o:{}}c[t]=e,c=c[t]}return t}function o8(t){switch(t){case"on":return!0;case"null":return null;case"undefined":return;default:return t}}new SettingsApp;export{SettingsApp};