exports.id=454,exports.ids=[454],exports.modules={5460:(e,t,r)=>{r.r(t),r.d(t,{GitLabApi:()=>GitLabApi});var a=r(7304),s=r(2488),i=r(2164),o=r(2804),n=r(8292),l=r(3828),u=r(4169),d=r(4136),c=r(6448),h=r(3e3),p=r(6088),g=r(1072),m=r(108),f=Object.defineProperty,w=Object.getOwnPropertyDescriptor,b=(e,t,r,a)=>{for(var s,i=a>1?void 0:a?w(t,r):t,o=e.length-1;o>=0;o--)(s=e[o])&&(i=(a?s(t,r,i):s(i))||i);return a&&i&&f(t,r,i),i};let GitLabApi=class GitLabApi{_disposable;_projectIds=new Map;constructor(e){this._disposable=u.i.onDidChangeAny(e=>{(u.i.changedCore(e,["http.proxy","http.proxyStrictSSL"])||u.i.changed(e,["proxy","remotes"]))&&this.resetCaches()})}dispose(){this._disposable.dispose()}resetCaches(){this._projectIds.clear(),this._proxyAgents.clear()}_proxyAgents=new Map;getProxyAgent(e){if(i.e6)return;let t=this._proxyAgents.get(e.id);if(void 0===t){let r=e.getIgnoreSSLErrors();t=(0,s.aE)(!0!==r&&"force"!==r&&void 0),this._proxyAgents.set(e.id,t??null)}return t??void 0}async getAccountForCommit(e,t,r,s,i,n,l){let u=(0,h.b1)(),d=await this.getProjectId(e,t,r,s,n?.baseUrl,l);if(d)try{let r;let s=await this.request(e,t,n?.baseUrl,`v4/projects/${d}/repository/commits/${i}?stats=false`,{method:"GET"},l,u);for(let a of(await this.findUser(e,t,s.author_name,n)))if(a.name===s.author_name||a.publicEmail&&a.publicEmail===s.author_email){if(r=a,"active"===a.state)break}else((0,g.RJ)(a.name,s.author_name)||a.publicEmail&&(0,g.RJ)(a.publicEmail,s.author_email))&&(r=a);if(null==r)return;return r.avatarUrl&&!/^([a-zA-Z][\w+.-]+):/.test(r.avatarUrl)&&(r.avatarUrl=a.Uri.joinPath(a.Uri.parse(r.webUrl),"..",r.avatarUrl).toString()),{provider:e,name:r.name||void 0,email:s.author_email||void 0,avatarUrl:r.avatarUrl||void 0}}catch(t){if(t instanceof o.SY)return;throw this.handleException(t,e,u)}}async getAccountForEmail(e,t,r,a,s,i){let n=(0,h.b1)();try{let[r]=await this.findUser(e,t,s,i);if(null==r)return;return{provider:e,name:r.name||void 0,email:r.publicEmail||void 0,avatarUrl:r.avatarUrl||void 0}}catch(t){if(t instanceof o.SY)return;throw this.handleException(t,e,n)}}async getDefaultBranch(e,t,r,a,s,i){let n=(0,h.b1)();try{let o=`query getDefaultBranch(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		repository {
			rootRef
		}
}`,l=await this.graphql(e,t,s?.baseUrl,o,{fullPath:`${r}/${a}`},i,n),u=l?.data?.project?.repository?.rootRef??void 0;if(null==u)return;return{provider:e,name:u}}catch(t){if(t instanceof o.SY)return;throw this.handleException(t,e,n)}}async getIssueOrPullRequest(e,t,r,a,s,i,n){let l=(0,h.b1)();try{let o=`query getIssueOrMergeRequest(
	$fullPath: ID!
	$iid: String!
) {
	project(fullPath: $fullPath) {
		mergeRequest(iid: $iid) {
			author {
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			mergedAt
			webUrl
		}
		issue(iid: $iid) {
			author {
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			closedAt
			webUrl
		}
	}
}`,u=await this.graphql(e,t,i?.baseUrl,o,{fullPath:`${r}/${a}`,iid:String(s)},n,l);if(u?.data?.project?.issue!=null){let t=u.data.project.issue;return{provider:e,type:"issue",id:t.iid,nodeId:void 0,date:new Date(t.createdAt),title:t.title,closed:"closed"===t.state,closedDate:null==t.closedAt?void 0:new Date(t.closedAt),url:t.webUrl,state:"locked"===t.state?"closed":t.state}}if(u?.data?.project?.mergeRequest!=null){let t=u.data.project.mergeRequest;return{provider:e,type:"pullrequest",id:t.iid,nodeId:void 0,date:new Date(t.createdAt),title:t.title,closed:"closed"===t.state,closedDate:"closed"===t.state?new Date(t.updatedAt):void 0,url:t.webUrl,state:"locked"===t.state?"closed":t.state}}return}catch(t){if(t instanceof o.SY)return;throw this.handleException(t,e,l)}}async getPullRequestForBranch(e,t,r,a,s,i,l){let u=(0,h.b1)();try{let o;let d=`
			nodes {
				iid
				author {
					name
					avatarUrl
					webUrl
				}
				title
				description
				state
				createdAt
				updatedAt
				mergedAt
				webUrl
			}`,c=`query getMergeRequestForBranch(
	$fullPath: ID!
	$branches: [String!]
) {
	project(fullPath: $fullPath) {
		${i?.include==null?`mergeRequests(sourceBranches: $branches sort: UPDATED_DESC first: 1) {
			${d}
		}`:""}
		${i?.include?.includes("opened")?`opened: mergeRequests(sourceBranches: $branches state: opened sort: UPDATED_DESC first: 1) {
			${d}
		}`:""}
		${i?.include?.includes("merged")?`merged: mergeRequests(sourceBranches: $branches state: merged sort: UPDATED_DESC first: 1) {
			${d}
		}`:""}
		${i?.include?.includes("closed")?`closed: mergeRequests(sourceBranches: $branches state: closed sort: UPDATED_DESC first: 1) {
			${d}
		}`:""}
	}
}`,h=await this.graphql(e,t,i?.baseUrl,c,{fullPath:`${r}/${a}`,branches:[s],state:i?.include},l,u);if(i?.include==null)o=h?.data?.project?.mergeRequests?.nodes?.[0];else for(let e of i.include){let t;"opened"===e?t=h?.data?.project?.opened?.nodes?.[0]:"merged"===e?t=h?.data?.project?.merged?.nodes?.[0]:"closed"===e&&(t=h?.data?.project?.closed?.nodes?.[0]),null!=t&&(null==o||new Date(t.updatedAt)>new Date(o.updatedAt))&&(o=t)}if(null==o)return;return new n.Y3(e,{name:o.author?.name??"Unknown",avatarUrl:o.author?.avatarUrl??"",url:o.author?.webUrl??""},String(o.iid),void 0,o.title,o.webUrl,(0,m.fromGitLabMergeRequestState)(o.state),new Date(o.updatedAt),"closed"!==o.state?void 0:new Date(o.updatedAt),null==o.mergedAt?void 0:new Date(o.mergedAt))}catch(t){if(t instanceof o.SY)return;throw this.handleException(t,e,u)}}async getPullRequestForCommit(e,t,r,a,s,i,n){let l=(0,h.b1)(),u=await this.getProjectId(e,t,r,a,i?.baseUrl,n);if(u)try{let r=await this.request(e,t,i?.baseUrl,`v4/projects/${u}/repository/commits/${s}/merge_requests`,{method:"GET"},n,l);if(null==r||0===r.length)return;return r.length>1&&r.sort((e,t)=>("opened"===e.state?-1:1)-("opened"===t.state?-1:1)||new Date(t.updated_at).getTime()-new Date(e.updated_at).getTime()),(0,m.fromGitLabMergeRequestREST)(r[0],e)}catch(t){if(t instanceof o.SY)return;throw this.handleException(t,e,l)}}async getRepositoryMetadata(e,t,r,a,s,i){let n=(0,h.b1)(),l=await this.getProjectId(e,t,r,a,s?.baseUrl,i);if(l)try{let r=await this.request(e,t,s?.baseUrl,`v4/projects/${l}`,{method:"GET"},i,n);if(null==r)return;return{provider:e,owner:r.namespace.full_path,name:r.path,isFork:null!=r.forked_from_project,parent:null!=r.forked_from_project?{owner:r.forked_from_project.namespace.full_path,name:r.forked_from_project.path}:void 0}}catch(t){if(t instanceof o.SY)return;throw this.handleException(t,e,n)}}async findUser(e,t,r,a,s){let i=(0,h.b1)();try{let o=`query findUser(
$search: String!
) {
	users(search: $search) {
		nodes {
			id
			name
			username,
			publicEmail,
			state
			avatarUrl
			webUrl
		}
	}
}`,n=await this.graphql(e,t,a?.baseUrl,o,{search:r},s,i),l=n?.data?.users?.nodes;if(null==l||0===l.length)return[];let u=[];for(let e of l){let t=/gid:\/\/gitlab\/User\/([0-9]+)\b/.exec(e.id);null!=t&&u.push({id:parseInt(t[1],10),name:e.name,username:e.username,publicEmail:e.publicEmail||void 0,state:e.state,avatarUrl:e.avatarUrl,webUrl:e.webUrl})}return u}catch(t){if(t instanceof o.SY)return[];return this.handleException(t,e,i),[]}}getProjectId(e,t,r,a,s,i){let o=`${t}|${r}/${a}`,n=this._projectIds.get(o);return null==n&&(n=this.getProjectIdCore(e,t,r,a,s,i),this._projectIds.set(o,n)),n}async getProjectIdCore(e,t,r,a,s,i){let n=(0,h.b1)();try{let o=`query getProjectId(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		id
	}
}`,l=await this.graphql(e,t,s,o,{fullPath:`${r}/${a}`},i,n),u=l?.data?.project?.id;if(null==u)return;let d=/gid:\/\/gitlab\/Project\/([0-9]+)\b/.exec(u);if(null==d)return;let c=d[1];return(0,h._W)(n,` \u2022 projectId=${c}`),c}catch(t){if(t instanceof o.SY)return;this.handleException(t,e,n);return}}async graphql(e,t,r,i,n,l,u){let d;try{let a=(0,p.i)(`[GITLAB] POST ${r}`,{log:!1}),u=this.getProxyAgent(e);try{let a;if(null!=l){if(l.isCancellationRequested)throw new o.WO;a=new AbortController,l.onCancellationRequested(()=>a.abort())}if((d=await (0,s.uE)(e.getIgnoreSSLErrors(),()=>(0,s.I5)(`${r??"https://gitlab.com/api"}/graphql`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},agent:u,signal:a?.signal,body:JSON.stringify({query:i,variables:n})}))).ok){let e=await d.json();if("errors"in e)throw new o.W4("GitLab",d,e.errors);return e}throw new o.W4("GitLab",d)}finally{let e=/(^[^({\n]+)/.exec(i),t=` ${e?.[1].trim()??i}`;a?.stop({message:t})}}catch(r){throw r instanceof o.W4||"AbortError"===r.name?this.handleRequestError(e,t,r,u):c.YJ.isDebugging&&a.window.showErrorMessage(`GitLab request failed: ${r.message}`),r}}async request(e,t,r,i,n,l,u){let d;let h=`${r??"https://gitlab.com/api"}/${i}`;try{let r=(0,p.i)(`[GITLAB] ${n?.method??"GET"} ${h}`,{log:!1}),a=this.getProxyAgent(e);try{let r;if(null!=l){if(l.isCancellationRequested)throw new o.WO;r=new AbortController,l.onCancellationRequested(()=>r.abort())}if((d=await (0,s.uE)(e.getIgnoreSSLErrors(),()=>(0,s.I5)(h,{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},agent:a,signal:r?.signal,...n}))).ok)return await d.json();throw new o.W4("GitLab",d)}finally{r?.stop()}}catch(r){throw r instanceof o.W4||"AbortError"===r.name?this.handleRequestError(e,t,r,u):c.YJ.isDebugging&&a.window.showErrorMessage(`GitLab request failed: ${r.message}`),r}}handleRequestError(e,t,r,s){if("AbortError"===r.name||!(r instanceof o.W4))throw new o.WO(r);switch(r.status){case 404:case 410:case 422:throw new o.SY(r);case 401:throw new o.yA("gitlab",o.ms.Unauthorized,r);case 403:if(r.message.includes("rate limit exceeded")){let e;let a=r.response?.headers?.get("x-ratelimit-reset");throw null!=a&&Number.isNaN(e=parseInt(a,10))&&(e=void 0),new o.sT(r,t,e)}throw new o.yA("gitlab",o.ms.Forbidden,r);case 500:c.YJ.error(r,s),null!=r.response&&(e?.trackRequestException(),(0,l.uY)(`${e?.name??"GitLab"} failed to respond and might be experiencing issues.${null==e||"gitlab"===e.id?" Please visit the [GitLab status page](https://status.gitlab.com) for more information.":""}`));return;case 502:if(c.YJ.error(r,s),r.message.includes("timeout")){e?.trackRequestException(),(0,l.Oc)(e?.name??"GitLab");return}break;default:if(r.status>=400&&r.status<500)throw new o.OW(r)}c.YJ.error(r,s),c.YJ.isDebugging&&a.window.showErrorMessage(`GitLab request failed: ${r.response?.errors?.[0]?.message??r.message}`)}handleException(e,t,r){return c.YJ.error(e,r),e instanceof o.yA&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===o.ms.Unauthorized||e.reason===o.ms.Forbidden){let r="Reauthenticate";await a.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===o.ms.Forbidden?" to provide additional access":""}?`,r)===r&&(await t.reauthenticate(),this.resetCaches())}else a.window.showErrorMessage(e.message)}};b([(0,d.u_)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getAccountForCommit",1),b([(0,d.u_)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getAccountForEmail",1),b([(0,d.u_)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getDefaultBranch",1),b([(0,d.u_)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getIssueOrPullRequest",1),b([(0,d.u_)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getPullRequestForBranch",1),b([(0,d.u_)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getPullRequestForCommit",1),b([(0,d.u_)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getRepositoryMetadata",1)},108:(e,t,r)=>{r.r(t),r.d(t,{fromGitLabMergeRequestREST:()=>o,fromGitLabMergeRequestState:()=>s,toGitLabMergeRequestState:()=>i});var a=r(8292);function s(e){return"locked"===e?"closed":e}function i(e){return e}function o(e,t){return new a.Y3(t,{name:e.author?.name??"Unknown",avatarUrl:e.author?.avatar_url??"",url:e.author?.web_url??""},String(e.iid),void 0,e.title,e.web_url,s(e.state),new Date(e.updated_at),null==e.closed_at?void 0:new Date(e.closed_at),null==e.merged_at?void 0:new Date(e.merged_at))}}};