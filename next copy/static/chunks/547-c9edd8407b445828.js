"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{7702:(t,e,s)=>{s.d(e,{X:()=>h,k:()=>u});var r=s(4403),i=s(5586),a=s(4267),n=s(2955),h=class extends n.k{#t;#e;#s;#r;#i;#a;constructor(t){super(),this.#a=!1,this.#i=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#s=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#t=function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,r=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=t.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#r?.promise}setOptions(t){this.options={...this.#i,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#s.remove(this)}setData(t,e){let s=(0,r.pl)(this.state.data,t,this.options);return this.#n({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#n({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#r?.promise;return this.#r?.cancel(t),e?e.then(r.lQ).catch(r.lQ):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#t)}isActive(){return this.observers.some(t=>!1!==(0,r.Eh)(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===r.hT||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,r.j3)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#r&&(this.#a?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#s.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#n({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#r)return this.#r.continueRetry(),this.#r.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let s=new AbortController,i=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#a=!0,s.signal)})},n={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let t=(0,r.ZM)(this.options,e),s={queryKey:this.queryKey,meta:this.meta};return(i(s),this.#a=!1,this.options.persister)?this.options.persister(t,s,this):t(s)}};i(n),this.options.behavior?.onFetch(n,this),this.#e=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==n.fetchOptions?.meta)&&this.#n({type:"fetch",meta:n.fetchOptions?.meta});let h=t=>{(0,a.wm)(t)&&t.silent||this.#n({type:"error",error:t}),(0,a.wm)(t)||(this.#s.config.onError?.(t,this),this.#s.config.onSettled?.(this.state.data,t,this)),this.scheduleGc()};return this.#r=(0,a.II)({initialPromise:e?.initialPromise,fn:n.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){h(Error(`${this.queryHash} data is undefined`));return}try{this.setData(t)}catch(t){h(t);return}this.#s.config.onSuccess?.(t,this),this.#s.config.onSettled?.(t,this.state.error,this),this.scheduleGc()},onError:h,onFail:(t,e)=>{this.#n({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#n({type:"pause"})},onContinue:()=>{this.#n({type:"continue"})},retry:n.options.retry,retryDelay:n.options.retryDelay,networkMode:n.options.networkMode,canRun:()=>!0}),this.#r.start()}#n(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...u(e.data,this.options),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let s=t.error;if((0,a.wm)(s)&&s.revert&&this.#e)return{...this.#e,fetchStatus:"idle"};return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),i.j.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#s.notify({query:this,type:"updated",action:t})})}};function u(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,a.v_)(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}},547:(t,e,s)=>{s.d(e,{I:()=>T});var r=s(4017),i=s(5586),a=s(7702),n=s(9323),h=s(1277),u=s(4403),o=class extends n.Q{constructor(t,e){super(),this.options=e,this.#h=t,this.#u=null,this.#o=(0,h.T)(),this.options.experimental_prefetchInRender||this.#o.reject(Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(e)}#h;#c=void 0;#l=void 0;#d=void 0;#p;#f;#o;#u;#y;#v;#R;#b;#m;#g;#S=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#c.addObserver(this),c(this.#c,this.options)?this.#Q():this.updateResult(),this.#C())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return l(this.#c,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return l(this.#c,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#O(),this.#I(),this.#c.removeObserver(this)}setOptions(t,e){let s=this.options,r=this.#c;if(this.options=this.#h.defaultQueryOptions(t),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,u.Eh)(this.options.enabled,this.#c))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#E(),this.#c.setOptions(this.options),s._defaulted&&!(0,u.f8)(this.options,s)&&this.#h.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#c,observer:this});let i=this.hasListeners();i&&d(this.#c,r,this.options,s)&&this.#Q(),this.updateResult(e),i&&(this.#c!==r||(0,u.Eh)(this.options.enabled,this.#c)!==(0,u.Eh)(s.enabled,this.#c)||(0,u.d2)(this.options.staleTime,this.#c)!==(0,u.d2)(s.staleTime,this.#c))&&this.#F();let a=this.#T();i&&(this.#c!==r||(0,u.Eh)(this.options.enabled,this.#c)!==(0,u.Eh)(s.enabled,this.#c)||a!==this.#g)&&this.#U(a)}getOptimisticResult(t){let e=this.#h.getQueryCache().build(this.#h,t),s=this.createResult(e,t);return(0,u.f8)(this.getCurrentResult(),s)||(this.#d=s,this.#f=this.options,this.#p=this.#c.state),s}getCurrentResult(){return this.#d}trackResult(t,e){let s={};return Object.keys(t).forEach(r=>{Object.defineProperty(s,r,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(r),e?.(r),t[r])})}),s}trackProp(t){this.#S.add(t)}getCurrentQuery(){return this.#c}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){let e=this.#h.defaultQueryOptions(t),s=this.#h.getQueryCache().build(this.#h,e);return s.fetch().then(()=>this.createResult(s,e))}fetch(t){return this.#Q({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#d))}#Q(t){this.#E();let e=this.#c.fetch(this.options,t);return t?.throwOnError||(e=e.catch(u.lQ)),e}#F(){this.#O();let t=(0,u.d2)(this.options.staleTime,this.#c);if(u.S$||this.#d.isStale||!(0,u.gn)(t))return;let e=(0,u.j3)(this.#d.dataUpdatedAt,t);this.#b=setTimeout(()=>{this.#d.isStale||this.updateResult()},e+1)}#T(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#c):this.options.refetchInterval)??!1}#U(t){this.#I(),this.#g=t,!u.S$&&!1!==(0,u.Eh)(this.options.enabled,this.#c)&&(0,u.gn)(this.#g)&&0!==this.#g&&(this.#m=setInterval(()=>{(this.options.refetchIntervalInBackground||r.m.isFocused())&&this.#Q()},this.#g))}#C(){this.#F(),this.#U(this.#T())}#O(){this.#b&&(clearTimeout(this.#b),this.#b=void 0)}#I(){this.#m&&(clearInterval(this.#m),this.#m=void 0)}createResult(t,e){let s;let r=this.#c,i=this.options,n=this.#d,o=this.#p,l=this.#f,f=t!==r?t.state:this.#l,{state:y}=t,v={...y},R=!1;if(e._optimisticResults){let s=this.hasListeners(),n=!s&&c(t,e),h=s&&d(t,r,e,i);(n||h)&&(v={...v,...(0,a.k)(y.data,t.options)}),"isRestoring"===e._optimisticResults&&(v.fetchStatus="idle")}let{error:b,errorUpdatedAt:m,status:g}=v;if(e.select&&void 0!==v.data){if(n&&v.data===o?.data&&e.select===this.#y)s=this.#v;else try{this.#y=e.select,s=e.select(v.data),s=(0,u.pl)(n?.data,s,e),this.#v=s,this.#u=null}catch(t){this.#u=t}}else s=v.data;if(void 0!==e.placeholderData&&void 0===s&&"pending"===g){let t;if(n?.isPlaceholderData&&e.placeholderData===l?.placeholderData)t=n.data;else if(t="function"==typeof e.placeholderData?e.placeholderData(this.#R?.state.data,this.#R):e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.#u=null}catch(t){this.#u=t}void 0!==t&&(g="success",s=(0,u.pl)(n?.data,t,e),R=!0)}this.#u&&(b=this.#u,s=this.#v,m=Date.now(),g="error");let S="fetching"===v.fetchStatus,Q="pending"===g,C="error"===g,O=Q&&S,I=void 0!==s,E={status:g,fetchStatus:v.fetchStatus,isPending:Q,isSuccess:"success"===g,isError:C,isInitialLoading:O,isLoading:O,data:s,dataUpdatedAt:v.dataUpdatedAt,error:b,errorUpdatedAt:m,failureCount:v.fetchFailureCount,failureReason:v.fetchFailureReason,errorUpdateCount:v.errorUpdateCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>f.dataUpdateCount||v.errorUpdateCount>f.errorUpdateCount,isFetching:S,isRefetching:S&&!Q,isLoadingError:C&&!I,isPaused:"paused"===v.fetchStatus,isPlaceholderData:R,isRefetchError:C&&I,isStale:p(t,e),refetch:this.refetch,promise:this.#o};if(this.options.experimental_prefetchInRender){let e=t=>{"error"===E.status?t.reject(E.error):void 0!==E.data&&t.resolve(E.data)},s=()=>{e(this.#o=E.promise=(0,h.T)())},i=this.#o;switch(i.status){case"pending":t.queryHash===r.queryHash&&e(i);break;case"fulfilled":("error"===E.status||E.data!==i.value)&&s();break;case"rejected":("error"!==E.status||E.error!==i.reason)&&s()}}return E}updateResult(t){let e=this.#d,s=this.createResult(this.#c,this.options);if(this.#p=this.#c.state,this.#f=this.options,void 0!==this.#p.data&&(this.#R=this.#c),(0,u.f8)(s,e))return;this.#d=s;let r={};t?.listeners!==!1&&(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,s="function"==typeof t?t():t;if("all"===s||!s&&!this.#S.size)return!0;let r=new Set(s??this.#S);return this.options.throwOnError&&r.add("error"),Object.keys(this.#d).some(t=>this.#d[t]!==e[t]&&r.has(t))})()&&(r.listeners=!0),this.#D({...r,...t})}#E(){let t=this.#h.getQueryCache().build(this.#h,this.options);if(t===this.#c)return;let e=this.#c;this.#c=t,this.#l=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#C()}#D(t){i.j.batch(()=>{t.listeners&&this.listeners.forEach(t=>{t(this.#d)}),this.#h.getQueryCache().notify({query:this.#c,type:"observerResultsUpdated"})})}};function c(t,e){return!1!==(0,u.Eh)(e.enabled,t)&&void 0===t.state.data&&!("error"===t.state.status&&!1===e.retryOnMount)||void 0!==t.state.data&&l(t,e,e.refetchOnMount)}function l(t,e,s){if(!1!==(0,u.Eh)(e.enabled,t)){let r="function"==typeof s?s(t):s;return"always"===r||!1!==r&&p(t,e)}return!1}function d(t,e,s,r){return(t!==e||!1===(0,u.Eh)(r.enabled,t))&&(!s.suspense||"error"!==t.state.status)&&p(t,s)}function p(t,e){return!1!==(0,u.Eh)(e.enabled,t)&&t.isStaleByTime((0,u.d2)(e.staleTime,t))}var f=s(2115),y=s(5906);s(5155);var v=f.createContext(function(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}()),R=()=>f.useContext(v),b=s(6373),m=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&!e.isReset()&&(t.retryOnMount=!1)},g=t=>{f.useEffect(()=>{t.clearReset()},[t])},S=t=>{let{result:e,errorResetBoundary:s,throwOnError:r,query:i}=t;return e.isError&&!s.isReset()&&!e.isFetching&&i&&(0,b.G)(r,[e.error,i])},Q=f.createContext(!1),C=()=>f.useContext(Q);Q.Provider;var O=t=>{t.suspense&&(void 0===t.staleTime&&(t.staleTime=1e3),"number"==typeof t.gcTime&&(t.gcTime=Math.max(t.gcTime,1e3)))},I=(t,e)=>t.isLoading&&t.isFetching&&!e,E=(t,e)=>t?.suspense&&e.isPending,F=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function T(t,e){return function(t,e,s){var r,a,n,h,o;let c=(0,y.jE)(s),l=C(),d=R(),p=c.defaultQueryOptions(t);null===(a=c.getDefaultOptions().queries)||void 0===a||null===(r=a._experimental_beforeQuery)||void 0===r||r.call(a,p),p._optimisticResults=l?"isRestoring":"optimistic",O(p),m(p,d),g(d);let v=!c.getQueryCache().get(p.queryHash),[Q]=f.useState(()=>new e(c,p)),T=Q.getOptimisticResult(p);if(f.useSyncExternalStore(f.useCallback(t=>{let e=l?b.l:Q.subscribe(i.j.batchCalls(t));return Q.updateResult(),e},[Q,l]),()=>Q.getCurrentResult(),()=>Q.getCurrentResult()),f.useEffect(()=>{Q.setOptions(p,{listeners:!1})},[p,Q]),E(p,T))throw F(p,Q,d);if(S({result:T,errorResetBoundary:d,throwOnError:p.throwOnError,query:c.getQueryCache().get(p.queryHash)}))throw T.error;if(null===(h=c.getDefaultOptions().queries)||void 0===h||null===(n=h._experimental_afterQuery)||void 0===n||n.call(h,p,T),p.experimental_prefetchInRender&&!u.S$&&I(T,l)){let t=v?F(p,Q,d):null===(o=c.getQueryCache().get(p.queryHash))||void 0===o?void 0:o.promise;null==t||t.catch(b.l).finally(()=>{Q.updateResult()})}return p.notifyOnChangeProps?T:Q.trackResult(T)}(t,o,e)}},6373:(t,e,s)=>{function r(t,e){return"function"==typeof t?t(...e):!!t}function i(){}s.d(e,{G:()=>r,l:()=>i})}}]);