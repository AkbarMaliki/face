(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~a6cd21c3"],{"3b59":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("c23d");n("7d28");var i=n("9ab4"),o=n("cd51"),a=n("abfd"),s=n("4be4");function c(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var u,f=c(r),l=function(){function t(t,e,n,r){this.client=t,this.storage=e,this.storageCache=n,this.logger=r}return t.prototype.isCachedDataFresh=function(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;var n=Date.now()-e,r=n<=t;return this.logger.debug("Config fetch cache check. Cache age millis: "+n+". Cache max age millis (minimumFetchIntervalMillis setting): "+t+". Is cache hit: "+r+"."),r},t.prototype.fetch=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n,r,o,a;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()])];case 1:return e=i.sent(),n=e[0],r=e[1],r&&this.isCachedDataFresh(t.cacheMaxAgeMillis,n)?[2,r]:(t.eTag=r&&r.eTag,[4,this.client.fetch(t)]);case 2:return o=i.sent(),a=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())],200===o.status&&a.push(this.storage.setLastSuccessfulFetchResponse(o)),[4,Promise.all(a)];case 3:return i.sent(),[2,o]}}))}))},t}(),p=(u={},u["registration-window"]="Undefined window object. This SDK only supports usage in a browser environment.",u["registration-project-id"]="Undefined project identifier. Check Firebase app initialization.",u["registration-api-key"]="Undefined API key. Check Firebase app initialization.",u["registration-app-id"]="Undefined app identifier. Check Firebase app initialization.",u["storage-open"]="Error thrown when opening storage. Original error: {$originalErrorMessage}.",u["storage-get"]="Error thrown when reading from storage. Original error: {$originalErrorMessage}.",u["storage-set"]="Error thrown when writing to storage. Original error: {$originalErrorMessage}.",u["storage-delete"]="Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",u["fetch-client-network"]="Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",u["fetch-timeout"]='The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',u["fetch-throttle"]='The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',u["fetch-client-parse"]="Fetch client could not parse response. Original error: {$originalErrorMessage}.",u["fetch-status"]="Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",u),h=new o.ErrorFactory("remoteconfig","Remote Config",p);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(t,e){return t instanceof o.FirebaseError&&-1!==t.code.indexOf(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t){return void 0===t&&(t=navigator),t.languages&&t.languages[0]||t.language}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m=function(){function t(t,e,n,r,i,o){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=n,this.projectId=r,this.apiKey=i,this.appId=o}return t.prototype.fetch=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n,r,o,a,s,c,u,f,l,p,g,m,v,_,b,y,w,T;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()])];case 1:e=i.sent(),n=e[0],r=e[1],o=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",a=o+"/v1/projects/"+this.projectId+"/namespaces/"+this.namespace+":fetch?key="+this.apiKey,s={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:r,app_id:this.appId,language_code:d()},u={method:"POST",headers:s,body:JSON.stringify(c)},f=fetch(a,u),l=new Promise((function(e,n){t.signal.addEventListener((function(){var t=new Error("The operation was aborted.");t.name="AbortError",n(t)}))})),i.label=2;case 2:return i.trys.push([2,5,,6]),[4,Promise.race([f,l])];case 3:return i.sent(),[4,f];case 4:return p=i.sent(),[3,6];case 5:throw g=i.sent(),m="fetch-client-network","AbortError"===g.name&&(m="fetch-timeout"),h.create(m,{originalErrorMessage:g.message});case 6:if(v=p.status,_=p.headers.get("ETag")||void 0,200!==p.status)return[3,11];w=void 0,i.label=7;case 7:return i.trys.push([7,9,,10]),[4,p.json()];case 8:return w=i.sent(),[3,10];case 9:throw T=i.sent(),h.create("fetch-client-parse",{originalErrorMessage:T.message});case 10:b=w["entries"],y=w["state"],i.label=11;case 11:if("INSTANCE_STATE_UNSPECIFIED"===y?v=500:"NO_CHANGE"===y?v=304:"NO_TEMPLATE"!==y&&"EMPTY_CONFIG"!==y||(b={}),304!==v&&200!==v)throw h.create("fetch-status",{httpStatus:v});return[2,{status:v,eTag:_,config:b}]}}))}))},t}(),v=function(){function t(){this.listeners=[]}return t.prototype.addEventListener=function(t){this.listeners.push(t)},t.prototype.abort=function(){this.listeners.forEach((function(t){return t()}))},t}(),_=!1,b="",y=0,w=["1","true","t","yes","y","on"],T=function(){function t(t,e){void 0===e&&(e=b),this._source=t,this._value=e}return t.prototype.asString=function(){return this._value},t.prototype.asBoolean=function(){return"static"===this._source?_:w.indexOf(this._value.toLowerCase())>=0},t.prototype.asNumber=function(){if("static"===this._source)return y;var t=Number(this._value);return isNaN(t)&&(t=y),t},t.prototype.getSource=function(){return this._source},t}(),I=6e4,E=432e5,S=function(){function t(t,e,n,r,i){this.app=t,this._client=e,this._storageCache=n,this._storage=r,this._logger=i,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:I,minimumFetchIntervalMillis:E},this.defaultConfig={}}return t.prototype.setLogLevel=function(t){switch(t){case"debug":this._logger.logLevel=a.LogLevel.DEBUG;break;case"silent":this._logger.logLevel=a.LogLevel.SILENT;break;default:this._logger.logLevel=a.LogLevel.ERROR}},Object.defineProperty(t.prototype,"fetchTimeMillis",{get:function(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastFetchStatus",{get:function(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"},enumerable:!1,configurable:!0}),t.prototype.activate=function(){return i.__awaiter(this,void 0,void 0,(function(){var t,e,n;return i.__generator(this,(function(r){switch(r.label){case 0:return[4,Promise.all([this._storage.getLastSuccessfulFetchResponse(),this._storage.getActiveConfigEtag()])];case 1:return t=r.sent(),e=t[0],n=t[1],e&&e.config&&e.eTag&&e.eTag!==n?[4,Promise.all([this._storageCache.setActiveConfig(e.config),this._storage.setActiveConfigEtag(e.eTag)])]:[2,!1];case 2:return r.sent(),[2,!0]}}))}))},t.prototype.ensureInitialized=function(){var t=this;return this._initializePromise||(this._initializePromise=this._storageCache.loadFromStorage().then((function(){t._isInitializationComplete=!0}))),this._initializePromise},t.prototype.fetch=function(){return i.__awaiter(this,void 0,void 0,(function(){var t,e,n,r=this;return i.__generator(this,(function(o){switch(o.label){case 0:t=new v,setTimeout((function(){return i.__awaiter(r,void 0,void 0,(function(){return i.__generator(this,(function(e){return t.abort(),[2]}))}))}),this.settings.fetchTimeoutMillis),o.label=1;case 1:return o.trys.push([1,4,,6]),[4,this._client.fetch({cacheMaxAgeMillis:this.settings.minimumFetchIntervalMillis,signal:t})];case 2:return o.sent(),[4,this._storageCache.setLastFetchStatus("success")];case 3:return o.sent(),[3,6];case 4:return e=o.sent(),n=g(e,"fetch-throttle")?"throttle":"failure",[4,this._storageCache.setLastFetchStatus(n)];case 5:throw o.sent(),e;case 6:return[2]}}))}))},t.prototype.fetchAndActivate=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){switch(t.label){case 0:return[4,this.fetch()];case 1:return t.sent(),[2,this.activate()]}}))}))},t.prototype.getAll=function(){var t=this;return M(this._storageCache.getActiveConfig(),this.defaultConfig).reduce((function(e,n){return e[n]=t.getValue(n),e}),{})},t.prototype.getBoolean=function(t){return this.getValue(t).asBoolean()},t.prototype.getNumber=function(t){return this.getValue(t).asNumber()},t.prototype.getString=function(t){return this.getValue(t).asString()},t.prototype.getValue=function(t){this._isInitializationComplete||this._logger.debug('A value was requested for key "'+t+'" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');var e=this._storageCache.getActiveConfig();return e&&void 0!==e[t]?new T("remote",e[t]):this.defaultConfig&&void 0!==this.defaultConfig[t]?new T("default",String(this.defaultConfig[t])):(this._logger.debug('Returning static value for key "'+t+'". Define a default or remote value if this is unintentional.'),new T("static"))},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),Object.keys(i.__assign(i.__assign({},t),e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){var n=t.target.error||void 0;return h.create(e,{originalErrorMessage:n&&n.message})}var C="app_namespace_store",k="firebase_remote_config",F=1;function N(){return new Promise((function(t,e){var n=indexedDB.open(k,F);n.onerror=function(t){e(A(t,"storage-open"))},n.onsuccess=function(e){t(e.target.result)},n.onupgradeneeded=function(t){var e=t.target.result;switch(t.oldVersion){case 0:e.createObjectStore(C,{keyPath:"compositeKey"})}}}))}var L=function(){function t(t,e,n,r){void 0===r&&(r=N()),this.appId=t,this.appName=e,this.namespace=n,this.openDbPromise=r}return t.prototype.getLastFetchStatus=function(){return this.get("last_fetch_status")},t.prototype.setLastFetchStatus=function(t){return this.set("last_fetch_status",t)},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.get("last_successful_fetch_timestamp_millis")},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.set("last_successful_fetch_timestamp_millis",t)},t.prototype.getLastSuccessfulFetchResponse=function(){return this.get("last_successful_fetch_response")},t.prototype.setLastSuccessfulFetchResponse=function(t){return this.set("last_successful_fetch_response",t)},t.prototype.getActiveConfig=function(){return this.get("active_config")},t.prototype.setActiveConfig=function(t){return this.set("active_config",t)},t.prototype.getActiveConfigEtag=function(){return this.get("active_config_etag")},t.prototype.setActiveConfigEtag=function(t){return this.set("active_config_etag",t)},t.prototype.getThrottleMetadata=function(){return this.get("throttle_metadata")},t.prototype.setThrottleMetadata=function(t){return this.set("throttle_metadata",t)},t.prototype.deleteThrottleMetadata=function(){return this.delete("throttle_metadata")},t.prototype.get=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n=this;return i.__generator(this,(function(r){switch(r.label){case 0:return[4,this.openDbPromise];case 1:return e=r.sent(),[2,new Promise((function(r,i){var o=e.transaction([C],"readonly"),a=o.objectStore(C),s=n.createCompositeKey(t);try{var c=a.get(s);c.onerror=function(t){i(A(t,"storage-get"))},c.onsuccess=function(t){var e=t.target.result;r(e?e.value:void 0)}}catch(u){i(h.create("storage-get",{originalErrorMessage:u&&u.message}))}}))]}}))}))},t.prototype.set=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r=this;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,this.openDbPromise];case 1:return n=i.sent(),[2,new Promise((function(i,o){var a=n.transaction([C],"readwrite"),s=a.objectStore(C),c=r.createCompositeKey(t);try{var u=s.put({compositeKey:c,value:e});u.onerror=function(t){o(A(t,"storage-set"))},u.onsuccess=function(){i()}}catch(f){o(h.create("storage-set",{originalErrorMessage:f&&f.message}))}}))]}}))}))},t.prototype.delete=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n=this;return i.__generator(this,(function(r){switch(r.label){case 0:return[4,this.openDbPromise];case 1:return e=r.sent(),[2,new Promise((function(r,i){var o=e.transaction([C],"readwrite"),a=o.objectStore(C),s=n.createCompositeKey(t);try{var c=a.delete(s);c.onerror=function(t){i(A(t,"storage-delete"))},c.onsuccess=function(){r()}}catch(u){i(h.create("storage-delete",{originalErrorMessage:u&&u.message}))}}))]}}))}))},t.prototype.createCompositeKey=function(t){return[this.appId,this.appName,this.namespace,t].join()},t}(),P=function(){function t(t){this.storage=t}return t.prototype.getLastFetchStatus=function(){return this.lastFetchStatus},t.prototype.getLastSuccessfulFetchTimestampMillis=function(){return this.lastSuccessfulFetchTimestampMillis},t.prototype.getActiveConfig=function(){return this.activeConfig},t.prototype.loadFromStorage=function(){return i.__awaiter(this,void 0,void 0,(function(){var t,e,n,r,o,a;return i.__generator(this,(function(i){switch(i.label){case 0:return t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),[4,t];case 1:return r=i.sent(),r&&(this.lastFetchStatus=r),[4,e];case 2:return o=i.sent(),o&&(this.lastSuccessfulFetchTimestampMillis=o),[4,n];case 3:return a=i.sent(),a&&(this.activeConfig=a),[2]}}))}))},t.prototype.setLastFetchStatus=function(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)},t.prototype.setLastSuccessfulFetchTimestampMillis=function(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)},t.prototype.setActiveConfig=function(t){return this.activeConfig=t,this.storage.setActiveConfig(t)},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t,e){return new Promise((function(n,r){var i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener((function(){clearTimeout(o),r(h.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function R(t){if(!(t instanceof o.FirebaseError))return!1;var e=Number(t["httpStatus"]);return 429===e||500===e||503===e||504===e}var U=function(){function t(t,e){this.client=t,this.storage=e}return t.prototype.fetch=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e;return i.__generator(this,(function(n){switch(n.label){case 0:return[4,this.storage.getThrottleMetadata()];case 1:return e=n.sent()||{backoffCount:0,throttleEndTimeMillis:Date.now()},[2,this.attemptFetch(t,e)]}}))}))},t.prototype.attemptFetch=function(t,e){var n=e.throttleEndTimeMillis,r=e.backoffCount;return i.__awaiter(this,void 0,void 0,(function(){var e,a,s;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,O(t.signal,n)];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,5,,7]),[4,this.client.fetch(t)];case 3:return e=i.sent(),[4,this.storage.deleteThrottleMetadata()];case 4:return i.sent(),[2,e];case 5:if(a=i.sent(),!R(a))throw a;return s={throttleEndTimeMillis:Date.now()+o.calculateBackoffMillis(r),backoffCount:r+1},[4,this.storage.setThrottleMetadata(s)];case 6:return i.sent(),[2,this.attemptFetch(t,s)];case 7:return[2]}}))}))},t}(),D="@firebase/remote-config",j="0.1.28";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(t){function e(e,n){var r=e.getProvider("app").getImmediate(),i=e.getProvider("installations").getImmediate();if("undefined"===typeof window)throw h.create("registration-window");var o=r.options,s=o.projectId,c=o.apiKey,u=o.appId;if(!s)throw h.create("registration-project-id");if(!c)throw h.create("registration-api-key");if(!u)throw h.create("registration-app-id");n=n||"firebase";var f=new L(u,r.name,n),p=new P(f),g=new a.Logger(D);g.logLevel=a.LogLevel.ERROR;var d=new m(i,t.SDK_VERSION,n,s,c,u),v=new U(d,f),_=new l(v,f,p,g),b=new S(r,_,p,f,g);return b.ensureInitialized(),b}t.INTERNAL.registerComponent(new s.Component("remoteConfig",e,"PUBLIC").setMultipleInstances(!0)),t.registerVersion(D,j)}B(f["default"]),e.registerRemoteConfig=B},"6d09":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("c23d");n("7d28");var i=n("9ab4"),o=n("cd51"),a=n("abfd"),s=n("4be4");function c(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var u,f,l,p=c(r),h="@firebase/performance",g="0.4.2",d=g,m="FB-PERF-TRACE-START",v="FB-PERF-TRACE-STOP",_="FB-PERF-TRACE-MEASURE",b="_wt_",y="_fp",w="_fcp",T="_fid",I="@firebase/performance/config",E="@firebase/performance/configexpire",S="performance",M="Performance",A=(u={},u["trace started"]="Trace {$traceName} was started before.",u["trace stopped"]="Trace {$traceName} is not running.",u["nonpositive trace startTime"]="Trace {$traceName} startTime should be positive.",u["nonpositive trace duration"]="Trace {$traceName} duration should be positive.",u["no window"]="Window is not available.",u["no app id"]="App id is not available.",u["no project id"]="Project id is not available.",u["no api key"]="Api key is not available.",u["invalid cc log"]="Attempted to queue invalid cc event",u["FB not default"]="Performance can only start when Firebase app instance is the default one.",u["RC response not ok"]="RC response is not ok",u["invalid attribute name"]="Attribute name {$attributeName} is invalid.",u["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",u["invalid custom metric name"]="Custom metric name {$customMetricName} is invalid",u["invalid String merger input"]="Input for String merger is invalid, contact support team to resolve.",u),C=new o.ErrorFactory(S,M,A),k=new a.Logger(M);k.logLevel=a.LogLevel.INFO;var F,N=function(){function t(t){if(this.window=t,!t)throw C.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled?!!o.isIndexedDBAvailable()||(k.info("IndexedDB is not supported by current browswer"),!1):(k.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)},t.prototype.setupObserver=function(t,e){if(this.PerformanceObserver){var n=new this.PerformanceObserver((function(t){for(var n=0,r=t.getEntries();n<r.length;n++){var i=r[n];e(i)}}));n.observe({entryTypes:[t]})}},t.getInstance=function(){return void 0===f&&(f=new t(l)),f},t}();function L(t){l=t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){var n=t.length-e.length;if(n<0||n>1)throw C.create("invalid String merger input");for(var r=[],i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O,R,U=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=P("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=P("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!t)throw C.create("no app id");return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!t)throw C.create("no project id");return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!t)throw C.create("no api key");return t},t.prototype.getFlTransportFullUrl=function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)},t.getInstance=function(){return void 0===F&&(F=new t),F},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){var t=U.getInstance().installationsService.getId();return t.then((function(t){O=t})),t}function j(){return O}function B(){var t=U.getInstance().installationsService.getToken();return t.then((function(t){})),t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["UNKNOWN"]=0]="UNKNOWN",t[t["VISIBLE"]=1]="VISIBLE",t[t["HIDDEN"]=2]="HIDDEN"})(R||(R={}));var K=["firebase_","google_","ga_"],x=new RegExp("^[a-zA-Z]\\w*$"),q=40,V=100;function z(){var t=N.getInstance().navigator;return"serviceWorker"in t?t.serviceWorker.controller?2:3:1}function $(){var t=N.getInstance().document,e=t.visibilityState;switch(e){case"visible":return R.VISIBLE;case"hidden":return R.HIDDEN;default:return R.UNKNOWN}}function W(){var t=N.getInstance().navigator,e=t.connection,n=e&&e.effectiveType;switch(n){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function J(t){if(0===t.length||t.length>q)return!1;var e=K.some((function(e){return t.startsWith(e)}));return!e&&!!t.match(x)}function H(t){return 0!==t.length&&t.length<=V}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G="0.0.1",Y={loggingEnabled:!0},Q="FIREBASE_INSTALLATIONS_AUTH";function X(t){var e=Z();return e?(rt(e),Promise.resolve()):nt(t).then(rt).then((function(t){return tt(t)}),(function(){}))}function Z(){var t=N.getInstance().localStorage;if(t){var e=t.getItem(E);if(e&&it(e)){var n=t.getItem(I);if(n)try{var r=JSON.parse(n);return r}catch(u){return}}}}function tt(t){var e=N.getInstance().localStorage;t&&e&&(e.setItem(I,JSON.stringify(t)),e.setItem(E,String(Date.now()+60*U.getInstance().configTimeToLive*60*1e3)))}var et="Could not fetch config, will use default configs";function nt(t){return B().then((function(e){var n=U.getInstance().getProjectId(),r="https://firebaseremoteconfig.googleapis.com/v1/projects/"+n+"/namespaces/fireperf:fetch?key="+U.getInstance().getApiKey(),i=new Request(r,{method:"POST",headers:{Authorization:Q+" "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:U.getInstance().getAppId(),app_version:d,sdk_version:G})});return fetch(i).then((function(t){if(t.ok)return t.json();throw C.create("RC response not ok")}))})).catch((function(){k.info(et)}))}function rt(t){if(!t)return t;var e=U.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=Y.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(e.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=ot(e.tracesSamplingRate),e.logNetworkAfterSampling=ot(e.networkRequestsSamplingRate),t}function it(t){return Number(t)>Date.now()}function ot(t){return Math.random()<=t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,st=1;function ct(){return st=2,at=at||ft(),at}function ut(){return 3===st}function ft(){return lt().then((function(){return D()})).then((function(t){return X(t)})).then((function(){return pt()}),(function(){return pt()}))}function lt(){var t=N.getInstance().document;return new Promise((function(e){if(t&&"complete"!==t.readyState){var n=function(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()}))}function pt(){st=3}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,gt=1e4,dt=5500,mt=3,vt=mt,_t=[],bt=!1;function yt(){bt||(wt(dt),bt=!0)}function wt(t){setTimeout((function(){if(0!==vt)return _t.length?void Tt():wt(gt)}),t)}function Tt(){var t=i.__spreadArrays(_t);_t=[];var e=t.map((function(t){return{source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)}})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:U.getInstance().logSource,log_event:e};It(n,t).catch((function(){_t=i.__spreadArrays(t,_t),vt--,k.info("Tries left: "+vt+"."),wt(gt)}))}function It(t,e){return Et(t).then((function(t){return t.ok||k.info("Call to Firebase backend failed."),t.json()})).then((function(t){var n=Number(t.nextRequestWaitMillis),r=gt;isNaN(n)||(r=Math.max(n,r));var o=t.logResponseDetails;Array.isArray(o)&&o.length>0&&"RETRY_REQUEST_LATER"===o[0].responseAction&&(_t=i.__spreadArrays(e,_t),k.info("Retry transport request later.")),vt=mt,wt(r)}))}function Et(t){var e=U.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}function St(t){if(!t.eventTime||!t.message)throw C.create("invalid cc log");_t=i.__spreadArrays(_t,[t])}function Mt(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=t.apply(void 0,e);St({message:r,eventTime:Date.now()})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e){ht||(ht=Mt(Nt)),ht(t,e)}function Ct(t){var e=U.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&N.getInstance().requiredApisAvailable()&&(t.isAuto&&$()!==R.VISIBLE||(ut()?kt(t):ct().then((function(){return kt(t)}),(function(){return kt(t)}))))}function kt(t){if(j()){var e=U.getInstance();e.loggingEnabled&&e.logTraceAfterSampling&&setTimeout((function(){return At(t,1)}),0)}}function Ft(t){var e=U.getInstance();if(e.instrumentationEnabled){var n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout((function(){return At(t,0)}),0)}}function Nt(t,e){return 0===e?Lt(t):Pt(t)}function Lt(t){var e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:Ot(),network_request_metric:e};return JSON.stringify(n)}function Pt(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);var n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);var r={application_info:Ot(),trace_metric:e};return JSON.stringify(r)}function Ot(){return{google_app_id:U.getInstance().getAppId(),app_instance_id:j(),web_app_info:{sdk_version:d,page_url:N.getInstance().getUrl(),service_worker_status:z(),visibility_state:$(),effective_connection_type:W()},application_process_state:0}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt=100,Ut="_",Dt=[y,w,T];function jt(t,e){return!(0===t.length||t.length>Rt)&&(e&&e.startsWith(b)&&Dt.indexOf(t)>-1||!t.startsWith(Ut))}function Bt(t){var e=Math.floor(t);return e<t&&k.info("Metric value should be an Integer, setting the value as : "+e+"."),e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=N.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=m+"-"+this.randomId+"-"+this.name,this.traceStopMark=v+"-"+this.randomId+"-"+this.name,this.traceMeasure=n||_+"-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw C.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw C.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Ct(this)},t.prototype.record=function(t,e,n){if(t<=0)throw C.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw C.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=i.__assign({},n.attributes)),n&&n.metrics)for(var r=0,o=Object.keys(n.metrics);r<o.length;r++){var a=o[r];isNaN(Number(n.metrics[a]))||(this.counters[a]=Number(Math.floor(n.metrics[a])))}Ct(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)},t.prototype.putMetric=function(t,e){if(!jt(t,this.name))throw C.create("invalid custom metric name",{customMetricName:t});this.counters[t]=Bt(e)},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){var n=J(t),r=H(e);if(n&&r)this.customAttributes[t]=e;else{if(!n)throw C.create("invalid attribute name",{attributeName:t});if(!r)throw C.create("invalid attribute value",{attributeValue:e})}},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return i.__assign({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var i=N.getInstance().getUrl();if(i){var o=new t(b+i,!0),a=Math.floor(1e3*N.getInstance().getTimeOrigin());o.setStartTime(a),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));var s="first-paint",c="first-contentful-paint";if(n){var u=n.find((function(t){return t.name===s}));u&&u.startTime&&o.putMetric(y,Math.floor(1e3*u.startTime));var f=n.find((function(t){return t.name===c}));f&&f.startTime&&o.putMetric(w,Math.floor(1e3*f.startTime)),r&&o.putMetric(T,Math.floor(1e3*r))}Ct(o)}},t.createUserTimingTrace=function(e){var n=new t(e,!1,e);Ct(n)},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){var e=t;if(e&&void 0!==e.responseStart){var n=N.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime)),a=e.name&&e.name.split("?")[0],s={url:a,responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o};Ft(s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt=5e3;function Vt(){j()&&(setTimeout((function(){return $t()}),0),setTimeout((function(){return zt()}),0),setTimeout((function(){return Wt()}),0))}function zt(){for(var t=N.getInstance(),e=t.getEntriesByType("resource"),n=0,r=e;n<r.length;n++){var i=r[n];xt(i)}t.setupObserver("resource",xt)}function $t(){var t=N.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){var r=setTimeout((function(){Kt.createOobTrace(e,n),r=void 0}),qt);t.onFirstInputDelay((function(t){r&&(clearTimeout(r),Kt.createOobTrace(e,n,t))}))}else Kt.createOobTrace(e,n)}function Wt(){for(var t=N.getInstance(),e=t.getEntriesByType("measure"),n=0,r=e;n<r.length;n++){var i=r[n];Jt(i)}t.setupObserver("measure",Jt)}function Jt(t){var e=t.name;e.substring(0,_.length)!==_&&Kt.createUserTimingTrace(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht=function(){function t(t){this.app=t,N.getInstance().requiredApisAvailable()&&o.validateIndexedDBOpenable().then((function(t){t&&(yt(),ct().then(Vt,Vt))})).catch((function(t){k.info("Environment doesn't support IndexedDB: "+t)}))}return t.prototype.trace=function(t){return new Kt(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return U.getInstance().instrumentationEnabled},set:function(t){U.getInstance().instrumentationEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return U.getInstance().dataCollectionEnabled},set:function(t){U.getInstance().dataCollectionEnabled=t},enumerable:!1,configurable:!0}),t}(),Gt="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t){var e=function(t,e){if(t.name!==Gt)throw C.create("FB not default");if("undefined"===typeof window)throw C.create("no window");return L(window),U.getInstance().firebaseAppInstance=t,U.getInstance().installationsService=e,new Ht(t)};t.INTERNAL.registerComponent(new s.Component("performance",(function(t){var n=t.getProvider("app").getImmediate(),r=t.getProvider("installations").getImmediate();return e(n,r)}),"PUBLIC")),t.registerVersion(h,g)}Yt(p["default"]),e.registerPerformance=Yt}}]);
//# sourceMappingURL=chunk-vendors~a6cd21c3.8a30a46c.js.map