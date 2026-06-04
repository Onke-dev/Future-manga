function yu(t,e){for(var r=0;r<e.length;r++){const s=e[r];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}const bu=()=>{};var Ds={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const xo=function(t){const e=[];let r=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);o<128?e[r++]=o:o<2048?(e[r++]=o>>6|192,e[r++]=o&63|128):(o&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++s)&1023),e[r++]=o>>18|240,e[r++]=o>>12&63|128,e[r++]=o>>6&63|128,e[r++]=o&63|128):(e[r++]=o>>12|224,e[r++]=o>>6&63|128,e[r++]=o&63|128)}return e},vu=function(t){const e=[];let r=0,s=0;for(;r<t.length;){const o=t[r++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=t[r++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=t[r++],h=t[r++],g=t[r++],w=((o&7)<<18|(l&63)<<12|(h&63)<<6|g&63)-65536;e[s++]=String.fromCharCode(55296+(w>>10)),e[s++]=String.fromCharCode(56320+(w&1023))}else{const l=t[r++],h=t[r++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Do={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<t.length;o+=3){const l=t[o],h=o+1<t.length,g=h?t[o+1]:0,w=o+2<t.length,E=w?t[o+2]:0,A=l>>2,O=(l&3)<<4|g>>4;let L=(g&15)<<2|E>>6,S=E&63;w||(S=64,h||(L=64)),s.push(r[A],r[O],r[L],r[S])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<t.length;){const l=r[t.charAt(o++)],g=o<t.length?r[t.charAt(o)]:0;++o;const E=o<t.length?r[t.charAt(o)]:64;++o;const O=o<t.length?r[t.charAt(o)]:64;if(++o,l==null||g==null||E==null||O==null)throw new wu;const L=l<<2|g>>4;if(s.push(L),E!==64){const S=g<<4&240|E>>2;if(s.push(S),O!==64){const D=E<<6&192|O;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _u=function(t){const e=xo(t);return Do.encodeByteArray(e,!0)},ir=function(t){return _u(t).replace(/\./g,"")},Lo=function(t){try{return Do.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Tu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Eu=()=>Tu().__FIREBASE_DEFAULTS__,Iu=()=>{if(typeof process>"u"||typeof Ds>"u")return;const t=Ds.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Su=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lo(t[1]);return e&&JSON.parse(e)},bi=()=>{try{return bu()||Eu()||Iu()||Su()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Uo=t=>{var e,r;return(r=(e=bi())==null?void 0:e.emulatorHosts)==null?void 0:r[t]},Cu=t=>{const e=Uo(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),s]:[e.substring(0,r),s]},Mo=()=>{var t;return(t=bi())==null?void 0:t.config},jo=t=>{var e;return(e=bi())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ru{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,s)=>{r?this.reject(r):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Au(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},s=e||"demo-project",o=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ir(JSON.stringify(r)),ir(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ou(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function Nu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ku(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xu(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Du(){try{return typeof indexedDB=="object"}catch{return!1}}function Lu(){return new Promise((t,e)=>{try{let r=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(s),t(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Uu="FirebaseError";class et extends Error{constructor(e,r,s){super(r),this.code=e,this.customData=s,this.name=Uu,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(e,r,s){this.service=e,this.serviceName=r,this.errors=s}create(e,...r){const s=r[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?Mu(l,s):"Error",g=`${this.serviceName}: ${h} (${o}).`;return new et(o,g,s)}}function Mu(t,e){return t.replace(ju,(r,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const ju=/\{\$([^}]+)}/g;function Bu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jt(t,e){if(t===e)return!0;const r=Object.keys(t),s=Object.keys(e);for(const o of r){if(!s.includes(o))return!1;const l=t[o],h=e[o];if(Ls(l)&&Ls(h)){if(!Jt(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!r.includes(o))return!1;return!0}function Ls(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function vn(t){const e=[];for(const[r,s]of Object.entries(t))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function fn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function dn(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function Fu(t,e){const r=new Hu(t,e);return r.subscribe.bind(r)}class Hu{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,s){let o;if(e===void 0&&r===void 0&&s===void 0)throw new Error("Missing Observer.");$u(e,["next","error","complete"])?o=e:o={next:e,error:r,complete:s},o.next===void 0&&(o.next=zr),o.error===void 0&&(o.error=zr),o.complete===void 0&&(o.complete=zr);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $u(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function zr(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function fe(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function wn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bo(t){return(await fetch(t,{credentials:"include"})).ok}class St{constructor(e,r,s){this.name=e,this.instanceFactory=r,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _t="[DEFAULT]";/**
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
 */class qu{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const s=new Ru;if(this.instancesDeferred.set(r,s),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zu(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[r,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=_t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_t){return this.instances.has(e)}getOptions(e=_t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:r});for(const[l,h]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(l);s===g&&h.resolve(o)}return o}onInit(e,r){const s=this.normalizeInstanceIdentifier(r),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,r){const s=this.onInitCallbacks.get(r);if(s)for(const o of s)try{o(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Wu(e),options:r}),this.instances.set(e,s),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_t){return this.component?this.component.multipleInstances?e:_t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wu(t){return t===_t?void 0:t}function zu(t){return t.instantiationMode==="EAGER"}/**
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
 */class Vu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new qu(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Gu={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Ku=ne.INFO,Ju={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Xu=(t,e,...r)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),o=Ju[e];if(o)console[o](`[${s}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fo{constructor(e){this.name=e,this._logLevel=Ku,this._logHandler=Xu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Yu=(t,e)=>e.some(r=>t instanceof r);let Us,Ms;function Qu(){return Us||(Us=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zu(){return Ms||(Ms=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ho=new WeakMap,ii=new WeakMap,$o=new WeakMap,Vr=new WeakMap,vi=new WeakMap;function el(t){const e=new Promise((r,s)=>{const o=()=>{t.removeEventListener("success",l),t.removeEventListener("error",h)},l=()=>{r(pt(t.result)),o()},h=()=>{s(t.error),o()};t.addEventListener("success",l),t.addEventListener("error",h)});return e.then(r=>{r instanceof IDBCursor&&Ho.set(r,t)}).catch(()=>{}),vi.set(e,t),e}function tl(t){if(ii.has(t))return;const e=new Promise((r,s)=>{const o=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",h),t.removeEventListener("abort",h)},l=()=>{r(),o()},h=()=>{s(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",l),t.addEventListener("error",h),t.addEventListener("abort",h)});ii.set(t,e)}let si={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return ii.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$o.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return pt(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nl(t){si=t(si)}function rl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const s=t.call(Gr(this),e,...r);return $o.set(s,e.sort?e.sort():[e]),pt(s)}:Zu().includes(t)?function(...e){return t.apply(Gr(this),e),pt(Ho.get(this))}:function(...e){return pt(t.apply(Gr(this),e))}}function il(t){return typeof t=="function"?rl(t):(t instanceof IDBTransaction&&tl(t),Yu(t,Qu())?new Proxy(t,si):t)}function pt(t){if(t instanceof IDBRequest)return el(t);if(Vr.has(t))return Vr.get(t);const e=il(t);return e!==t&&(Vr.set(t,e),vi.set(e,t)),e}const Gr=t=>vi.get(t);function sl(t,e,{blocked:r,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(t,e),g=pt(h);return s&&h.addEventListener("upgradeneeded",w=>{s(pt(h.result),w.oldVersion,w.newVersion,pt(h.transaction),w)}),r&&h.addEventListener("blocked",w=>r(w.oldVersion,w.newVersion,w)),g.then(w=>{l&&w.addEventListener("close",()=>l()),o&&w.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),g}const ol=["get","getKey","getAll","getAllKeys","count"],al=["put","add","delete","clear"],Kr=new Map;function js(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kr.get(e))return Kr.get(e);const r=e.replace(/FromIndex$/,""),s=e!==r,o=al.includes(r);if(!(r in(s?IDBIndex:IDBObjectStore).prototype)||!(o||ol.includes(r)))return;const l=async function(h,...g){const w=this.transaction(h,o?"readwrite":"readonly");let E=w.store;return s&&(E=E.index(g.shift())),(await Promise.all([E[r](...g),o&&w.done]))[0]};return Kr.set(e,l),l}nl(t=>({...t,get:(e,r,s)=>js(e,r)||t.get(e,r,s),has:(e,r)=>!!js(e,r)||t.has(e,r)}));/**
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
 */class cl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(ul(r)){const s=r.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(r=>r).join(" ")}}function ul(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oi="@firebase/app",Bs="0.14.11";/**
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
 */const Qe=new Fo("@firebase/app"),ll="@firebase/app-compat",fl="@firebase/analytics-compat",dl="@firebase/analytics",hl="@firebase/app-check-compat",pl="@firebase/app-check",gl="@firebase/auth",ml="@firebase/auth-compat",yl="@firebase/database",bl="@firebase/data-connect",vl="@firebase/database-compat",wl="@firebase/functions",_l="@firebase/functions-compat",Tl="@firebase/installations",El="@firebase/installations-compat",Il="@firebase/messaging",Sl="@firebase/messaging-compat",Cl="@firebase/performance",Rl="@firebase/performance-compat",Al="@firebase/remote-config",Ol="@firebase/remote-config-compat",Nl="@firebase/storage",Pl="@firebase/storage-compat",kl="@firebase/firestore",xl="@firebase/ai",Dl="@firebase/firestore-compat",Ll="firebase",Ul="12.12.0";/**
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
 */const ai="[DEFAULT]",Ml={[oi]:"fire-core",[ll]:"fire-core-compat",[dl]:"fire-analytics",[fl]:"fire-analytics-compat",[pl]:"fire-app-check",[hl]:"fire-app-check-compat",[gl]:"fire-auth",[ml]:"fire-auth-compat",[yl]:"fire-rtdb",[bl]:"fire-data-connect",[vl]:"fire-rtdb-compat",[wl]:"fire-fn",[_l]:"fire-fn-compat",[Tl]:"fire-iid",[El]:"fire-iid-compat",[Il]:"fire-fcm",[Sl]:"fire-fcm-compat",[Cl]:"fire-perf",[Rl]:"fire-perf-compat",[Al]:"fire-rc",[Ol]:"fire-rc-compat",[Nl]:"fire-gcs",[Pl]:"fire-gcs-compat",[kl]:"fire-fst",[Dl]:"fire-fst-compat",[xl]:"fire-vertex","fire-js":"fire-js",[Ll]:"fire-js-all"};/**
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
 */const sr=new Map,jl=new Map,ci=new Map;function Fs(t,e){try{t.container.addComponent(e)}catch(r){Qe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Xt(t){const e=t.name;if(ci.has(e))return Qe.debug(`There were multiple attempts to register component ${e}.`),!1;ci.set(e,t);for(const r of sr.values())Fs(r,t);for(const r of jl.values())Fs(r,t);return!0}function wi(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function Pe(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Bl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new bn("app","Firebase",Bl);/**
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
 */class Fl{constructor(e,r,s){this._isDeleted=!1,this._options={...e},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
 */const Qt=Ul;function Hl(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const s={name:ai,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw gt.create("bad-app-name",{appName:String(o)});if(r||(r=Mo()),!r)throw gt.create("no-options");const l=sr.get(o);if(l){if(Jt(r,l.options)&&Jt(s,l.config))return l;throw gt.create("duplicate-app",{appName:o})}const h=new Vu(o);for(const w of ci.values())h.addComponent(w);const g=new Fl(r,s,h);return sr.set(o,g),g}function qo(t=ai){const e=sr.get(t);if(!e&&t===ai&&Mo())return Hl();if(!e)throw gt.create("no-app",{appName:t});return e}function mt(t,e,r){let s=Ml[t]??t;r&&(s+=`-${r}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qe.warn(h.join(" "));return}Xt(new St(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const $l="firebase-heartbeat-database",ql=1,mn="firebase-heartbeat-store";let Jr=null;function Wo(){return Jr||(Jr=sl($l,ql,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mn)}catch(r){console.warn(r)}}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),Jr}async function Wl(t){try{const r=(await Wo()).transaction(mn),s=await r.objectStore(mn).get(zo(t));return await r.done,s}catch(e){if(e instanceof et)Qe.warn(e.message);else{const r=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qe.warn(r.message)}}}async function Hs(t,e){try{const s=(await Wo()).transaction(mn,"readwrite");await s.objectStore(mn).put(e,zo(t)),await s.done}catch(r){if(r instanceof et)Qe.warn(r.message);else{const s=gt.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Qe.warn(s.message)}}}function zo(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const zl=1024,Vl=30;class Gl{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Jl(r),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,r;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=$s();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)==null?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>Vl){const h=Xl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Qe.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=$s(),{heartbeatsToSend:s,unsentEntries:o}=Kl(this._heartbeatsCache.heartbeats),l=ir(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=r,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(r){return Qe.warn(r),""}}}function $s(){return new Date().toISOString().substring(0,10)}function Kl(t,e=zl){const r=[];let s=t.slice();for(const o of t){const l=r.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),qs(r)>e){l.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),qs(r)>e){r.pop();break}s=s.slice(1)}return{heartbeatsToSend:r,unsentEntries:s}}class Jl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Du()?Lu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Wl(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Hs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Hs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qs(t){return ir(JSON.stringify({version:2,heartbeats:t})).length}function Xl(t){if(t.length===0)return-1;let e=0,r=t[0].date;for(let s=1;s<t.length;s++)t[s].date<r&&(r=t[s].date,e=s);return e}/**
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
 */function Yl(t){Xt(new St("platform-logger",e=>new cl(e),"PRIVATE")),Xt(new St("heartbeat",e=>new Gl(e),"PRIVATE")),mt(oi,Bs,t),mt(oi,Bs,"esm2020"),mt("fire-js","")}Yl("");var Ql="firebase",Zl="12.12.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */mt(Ql,Zl,"app");function Vo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ef=Vo,Go=new bn("auth","Firebase",Vo());/**
 * @license
 * Copyright 2020 Google LLC
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
 */const or=new Fo("@firebase/auth");function tf(t,...e){or.logLevel<=ne.WARN&&or.warn(`Auth (${Qt}): ${t}`,...e)}function Yn(t,...e){or.logLevel<=ne.ERROR&&or.error(`Auth (${Qt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ue(t,...e){throw _i(t,...e)}function qe(t,...e){return _i(t,...e)}function Ko(t,e,r){const s={...ef(),[e]:r};return new bn("auth","Firebase",s).create(e,{appName:t.name})}function Ye(t){return Ko(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _i(t,...e){if(typeof t!="string"){const r=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(r,...s)}return Go.create(t,...e)}function K(t,e,...r){if(!t)throw _i(e,...r)}function Je(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yn(e),new Error(e)}function Ze(t,e){t||Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ui(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function nf(){return Ws()==="http:"||Ws()==="https:"}function Ws(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function rf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nf()||Pu()||"connection"in navigator)?navigator.onLine:!0}function sf(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class _n{constructor(e,r){this.shortDelay=e,this.longDelay=r,Ze(r>e,"Short delay should be less than long delay!"),this.isMobile=Ou()||ku()}get(){return rf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ti(t,e){Ze(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Jo{static initialize(e,r,s){this.fetchImpl=e,r&&(this.headersImpl=r),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const of={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
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
 */const af=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cf=new _n(3e4,6e4);function tt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Me(t,e,r,s,o={}){return Xo(t,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const g=vn({key:t.config.apiKey,...h}).slice(1),w=await t._getAdditionalHeaders();w["Content-Type"]="application/json",t.languageCode&&(w["X-Firebase-Locale"]=t.languageCode);const E={method:e,headers:w,...l};return Nu()||(E.referrerPolicy="no-referrer"),t.emulatorConfig&&wn(t.emulatorConfig.host)&&(E.credentials="include"),Jo.fetch()(await Yo(t,t.config.apiHost,r,g),E)})}async function Xo(t,e,r){t._canInitEmulator=!1;const s={...of,...e};try{const o=new lf(t),l=await Promise.race([r(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Gn(t,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const g=l.ok?h.errorMessage:h.error.message,[w,E]=g.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gn(t,"credential-already-in-use",h);if(w==="EMAIL_EXISTS")throw Gn(t,"email-already-in-use",h);if(w==="USER_DISABLED")throw Gn(t,"user-disabled",h);const A=s[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw Ko(t,A,E);Ue(t,A)}}catch(o){if(o instanceof et)throw o;Ue(t,"network-request-failed",{message:String(o)})}}async function Tn(t,e,r,s,o={}){const l=await Me(t,e,r,s,o);return"mfaPendingCredential"in l&&Ue(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function Yo(t,e,r,s){const o=`${e}${r}?${s}`,l=t,h=l.config.emulator?Ti(t.config,o):`${t.config.apiScheme}://${o}`;return af.includes(r)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function uf(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,s)=>{this.timer=setTimeout(()=>s(qe(this.auth,"network-request-failed")),cf.get())})}}function Gn(t,e,r){const s={appName:t.name};r.email&&(s.email=r.email),r.phoneNumber&&(s.phoneNumber=r.phoneNumber);const o=qe(t,e,s);return o.customData._tokenResponse=r,o}function zs(t){return t!==void 0&&t.enterprise!==void 0}class ff{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return uf(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function df(t,e){return Me(t,"GET","/v2/recaptchaConfig",tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function hf(t,e){return Me(t,"POST","/v1/accounts:delete",e)}async function ar(t,e){return Me(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function pn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pf(t,e=!1){const r=fe(t),s=await r.getIdToken(e),o=Ei(s);K(o&&o.exp&&o.auth_time&&o.iat,r.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:pn(Xr(o.auth_time)),issuedAtTime:pn(Xr(o.iat)),expirationTime:pn(Xr(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Xr(t){return Number(t)*1e3}function Ei(t){const[e,r,s]=t.split(".");if(e===void 0||r===void 0||s===void 0)return Yn("JWT malformed, contained fewer than 3 sections"),null;try{const o=Lo(r);return o?JSON.parse(o):(Yn("Failed to decode base64 JWT payload"),null)}catch(o){return Yn("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Vs(t){const e=Ei(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ct(t,e,r=!1){if(r)return e;try{return await e}catch(s){throw s instanceof et&&gf(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function gf({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class mf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class li{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cr(t){var O;const e=t.auth,r=await t.getIdToken(),s=await Ct(t,ar(e,{idToken:r}));K(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const l=(O=o.providerUserInfo)!=null&&O.length?Qo(o.providerUserInfo):[],h=bf(t.providerData,l),g=t.isAnonymous,w=!(t.email&&o.passwordHash)&&!(h!=null&&h.length),E=g?w:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new li(o.createdAt,o.lastLoginAt),isAnonymous:E};Object.assign(t,A)}async function yf(t){const e=fe(t);await cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bf(t,e){return[...t.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Qo(t){return t.map(({providerId:e,...r})=>({providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function vf(t,e){const r=await Xo(t,{},async()=>{const s=vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=t.config,h=await Yo(t,o,"/v1/token",`key=${l}`),g=await t._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const w={method:"POST",headers:g,body:s};return t.emulatorConfig&&wn(t.emulatorConfig.host)&&(w.credentials="include"),Jo.fetch()(h,w)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function wf(t,e){return Me(t,"POST","/v2/accounts:revokeToken",tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Vt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){K(e.length!==0,"internal-error");const r=Vs(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:s,refreshToken:o,expiresIn:l}=await vf(e,r);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,r,s){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,r){const{refreshToken:s,accessToken:o,expirationTime:l}=r,h=new Vt;return s&&(K(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(K(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(K(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vt,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ct(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Le{constructor({uid:e,auth:r,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new mf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new li(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const r=await Ct(this,this.stsTokenManager.getToken(this.auth,e));return K(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return pf(this,e)}reload(){return yf(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>({...r})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new Le({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),r&&await cr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pe(this.auth.app))return Promise.reject(Ye(this.auth));const e=await this.getIdToken();return await Ct(this,hf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){const s=r.displayName??void 0,o=r.email??void 0,l=r.phoneNumber??void 0,h=r.photoURL??void 0,g=r.tenantId??void 0,w=r._redirectEventId??void 0,E=r.createdAt??void 0,A=r.lastLoginAt??void 0,{uid:O,emailVerified:L,isAnonymous:S,providerData:D,stsTokenManager:$}=r;K(O&&$,e,"internal-error");const _=Vt.fromJSON(this.name,$);K(typeof O=="string",e,"internal-error"),ct(s,e.name),ct(o,e.name),K(typeof L=="boolean",e,"internal-error"),K(typeof S=="boolean",e,"internal-error"),ct(l,e.name),ct(h,e.name),ct(g,e.name),ct(w,e.name),ct(E,e.name),ct(A,e.name);const k=new Le({uid:O,auth:e,email:o,emailVerified:L,displayName:s,isAnonymous:S,photoURL:h,phoneNumber:l,tenantId:g,stsTokenManager:_,createdAt:E,lastLoginAt:A});return D&&Array.isArray(D)&&(k.providerData=D.map(M=>({...M}))),w&&(k._redirectEventId=w),k}static async _fromIdTokenResponse(e,r,s=!1){const o=new Vt;o.updateFromServerResponse(r);const l=new Le({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await cr(l),l}static async _fromGetAccountInfoResponse(e,r,s){const o=r.users[0];K(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Qo(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),g=new Vt;g.updateFromIdToken(s);const w=new Le({uid:o.localId,auth:e,stsTokenManager:g,isAnonymous:h}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new li(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(w,E),w}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Gs=new Map;function Xe(t){Ze(t instanceof Function,"Expected a class definition");let e=Gs.get(t);return e?(Ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gs.set(t,e),e)}/**
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
 */class Zo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}Zo.type="NONE";const Ks=Zo;/**
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
 */function Qn(t,e,r){return`firebase:${t}:${e}:${r}`}class Gt{constructor(e,r,s){this.persistence=e,this.auth=r,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Qn(this.userKey,o.apiKey,l),this.fullPersistenceKey=Qn("persistence",o.apiKey,l),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const r=await ar(this.auth,{idToken:e}).catch(()=>{});return r?Le._fromGetAccountInfoResponse(this.auth,r,e):null}return Le._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,s="authUser"){if(!r.length)return new Gt(Xe(Ks),e,s);const o=(await Promise.all(r.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let l=o[0]||Xe(Ks);const h=Qn(s,e.config.apiKey,e.name);let g=null;for(const E of r)try{const A=await E._get(h);if(A){let O;if(typeof A=="string"){const L=await ar(e,{idToken:A}).catch(()=>{});if(!L)break;O=await Le._fromGetAccountInfoResponse(e,L,A)}else O=Le._fromJSON(e,A);E!==l&&(g=O),l=E;break}}catch{}const w=o.filter(E=>E._shouldAllowMigration);return!l._shouldAllowMigration||!w.length?new Gt(l,e,s):(l=w[0],g&&await l._set(h,g.toJSON()),await Promise.all(r.map(async E=>{if(E!==l)try{await E._remove(h)}catch{}})),new Gt(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Js(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ra(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ea(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sa(e))return"Blackberry";if(oa(e))return"Webos";if(ta(e))return"Safari";if((e.includes("chrome/")||na(e))&&!e.includes("edge/"))return"Chrome";if(ia(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(r);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ea(t=ye()){return/firefox\//i.test(t)}function ta(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function na(t=ye()){return/crios\//i.test(t)}function ra(t=ye()){return/iemobile/i.test(t)}function ia(t=ye()){return/android/i.test(t)}function sa(t=ye()){return/blackberry/i.test(t)}function oa(t=ye()){return/webos/i.test(t)}function Ii(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _f(t=ye()){var e;return Ii(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Tf(){return xu()&&document.documentMode===10}function aa(t=ye()){return Ii(t)||ia(t)||oa(t)||sa(t)||/windows phone/i.test(t)||ra(t)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ca(t,e=[]){let r;switch(t){case"Browser":r=Js(ye());break;case"Worker":r=`${Js(ye())}-${t}`;break;default:r=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Qt}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ef{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const s=l=>new Promise((h,g)=>{try{const w=e(l);h(w)}catch(w){g(w)}});s.onAbort=r,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function If(t,e={}){return Me(t,"GET","/v2/passwordPolicy",tt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Sf=6;class Cf{constructor(e){var s;const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??Sf,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,r),this.validatePasswordCharacterOptions(e,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(e,r){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(r.meetsMinPasswordLength=e.length>=s),o&&(r.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(r,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,r,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Rf{constructor(e,r,s,o){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xs(this),this.idTokenSubscription=new Xs(this),this.beforeStateQueue=new Ef(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Go,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Xe(r)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await Gt.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await ar(this,{idToken:e}),s=await Le._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(s)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Pe(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(g,g))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,g=s==null?void 0:s._redirectEventId,w=await this.tryRedirectSignIn(e);(!h||h===g)&&(w!=null&&w.user)&&(s=w.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await cr(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pe(this.app))return Promise.reject(Ye(this));const r=e?fe(e):null;return r&&K(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pe(this.app)?Promise.reject(Ye(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pe(this.app)?Promise.reject(Ye(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await If(this),r=new Cf(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bn("auth","Firebase",e())}onAuthStateChanged(e,r,s){return this.registerStateListener(this.authStateSubscription,e,r,s)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,s){return this.registerStateListener(this.idTokenSubscription,e,r,s)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(s.tenantId=this.tenantId),await wf(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,r){const s=await this.getOrInitRedirectPersistenceManager(r);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Xe(e)||this._popupRedirectResolver;K(r,this,"argument-error"),this.redirectPersistenceManager=await Gt.create(this,[Xe(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,s;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)==null?void 0:r._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((r=this.currentUser)==null?void 0:r.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,s,o){if(this._deleted)return()=>{};const l=typeof r=="function"?r:r.next.bind(r);let h=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(g,this,"internal-error"),g.then(()=>{h||l(this.currentUser)}),typeof r=="function"){const w=e.addObserver(r,s,o);return()=>{h=!0,w()}}else{const w=e.addObserver(r);return()=>{h=!0,w()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ca(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var r;if(Pe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((r=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getToken());return e!=null&&e.error&&tf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Pt(t){return fe(t)}class Xs{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fu(r=>this.observer=r)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let hr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Af(t){hr=t}function ua(t){return hr.loadJS(t)}function Of(){return hr.recaptchaEnterpriseScript}function Nf(){return hr.gapiScript}function Pf(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class kf{constructor(){this.enterprise=new xf}ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}class xf{ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}const Df="recaptcha-enterprise",la="NO_RECAPTCHA";class Lf{constructor(e){this.type=Df,this.auth=Pt(e)}async verify(e="verify",r=!1){async function s(l){if(!r){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,g)=>{df(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(w=>{if(w.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const E=new ff(w);return l.tenantId==null?l._agentRecaptchaConfig=E:l._tenantRecaptchaConfigs[l.tenantId]=E,h(E.siteKey)}}).catch(w=>{g(w)})})}function o(l,h,g){const w=window.grecaptcha;zs(w)?w.enterprise.ready(()=>{w.enterprise.execute(l,{action:e}).then(E=>{h(E)}).catch(()=>{h(la)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kf().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(g=>{if(!r&&zs(window.grecaptcha))o(g,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let w=Of();w.length!==0&&(w+=g),ua(w).then(()=>{o(g,l,h)}).catch(E=>{h(E)})}}).catch(g=>{h(g)})})}}async function Ys(t,e,r,s=!1,o=!1){const l=new Lf(t);let h;if(o)h=la;else try{h=await l.verify(r)}catch{h=await l.verify(r,!0)}const g={...e};if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const w=g.phoneEnrollmentInfo.phoneNumber,E=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:w,recaptchaToken:E,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const w=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:w,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return s?Object.assign(g,{captchaResp:h}):Object.assign(g,{captchaResponse:h}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function fi(t,e,r,s,o){var l;if((l=t._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Ys(t,e,r,r==="getOobCode");return s(t,h)}else return s(t,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const g=await Ys(t,e,r,r==="getOobCode");return s(t,g)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Uf(t,e){const r=wi(t,"auth");if(r.isInitialized()){const o=r.getImmediate(),l=r.getOptions();if(Jt(l,e??{}))return o;Ue(o,"already-initialized")}return r.initialize({options:e})}function Mf(t,e){const r=(e==null?void 0:e.persistence)||[],s=(Array.isArray(r)?r:[r]).map(Xe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function jf(t,e,r){const s=Pt(t);K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!!(r!=null&&r.disableWarnings),l=fa(e),{host:h,port:g}=Bf(e),w=g===null?"":`:${g}`,E={url:`${l}//${h}${w}/`},A=Object.freeze({host:h,port:g,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){K(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),K(Jt(E,s.config.emulator)&&Jt(A,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=E,s.emulatorConfig=A,s.settings.appVerificationDisabledForTesting=!0,wn(h)?Bo(`${l}//${h}${w}`):Ff()}function fa(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bf(t){const e=fa(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const s=r[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Qs(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Qs(h)}}}function Qs(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ff(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Si{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,r){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}async function Hf(t,e){return Me(t,"POST","/v1/accounts:update",e)}async function $f(t,e){return Me(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function qf(t,e){return Tn(t,"POST","/v1/accounts:signInWithPassword",tt(t,e))}async function Wf(t,e){return Me(t,"POST","/v1/accounts:sendOobCode",tt(t,e))}async function zf(t,e){return Wf(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Vf(t,e){return Tn(t,"POST","/v1/accounts:signInWithEmailLink",tt(t,e))}async function Gf(t,e){return Tn(t,"POST","/v1/accounts:signInWithEmailLink",tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class yn extends Si{constructor(e,r,s,o=null){super("password",s),this._email=e,this._password=r,this._tenantId=o}static _fromEmailAndPassword(e,r){return new yn(e,r,"password")}static _fromEmailAndCode(e,r,s=null){return new yn(e,r,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fi(e,r,"signInWithPassword",qf);case"emailLink":return Vf(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const s={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fi(e,s,"signUpPassword",$f);case"emailLink":return Gf(e,{idToken:r,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Kt(t,e){return Tn(t,"POST","/v1/accounts:signInWithIdp",tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Kf="http://localhost";class Rt extends Si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):Ue("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=r;if(!s||!o)return null;const h=new Rt(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const r=this.buildRequest();return Kt(e,r)}_linkToIdToken(e,r){const s=this.buildRequest();return s.idToken=r,Kt(e,s)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Kt(e,r)}buildRequest(){const e={requestUri:Kf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=vn(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Jf(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xf(t){const e=fn(dn(t)).link,r=e?fn(dn(e)).deep_link_id:null,s=fn(dn(t)).deep_link_id;return(s?fn(dn(s)).link:null)||s||r||e||t}class Ci{constructor(e){const r=fn(dn(e)),s=r.apiKey??null,o=r.oobCode??null,l=Jf(r.mode??null);K(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=r.continueUrl??null,this.languageCode=r.lang??null,this.tenantId=r.tenantId??null}static parseLink(e){const r=Xf(e);try{return new Ci(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Zt{constructor(){this.providerId=Zt.PROVIDER_ID}static credential(e,r){return yn._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const s=Ci.parseLink(r);return K(s,"argument-error"),yn._fromEmailAndCode(e,s.code,s.tenantId)}}Zt.PROVIDER_ID="password";Zt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class da{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class En extends da{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ut extends En{constructor(){super("facebook.com")}static credential(e){return Rt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class lt extends En{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Rt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:s}=e;if(!r&&!s)return null;try{return lt.credential(r,s)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ft extends En{constructor(){super("github.com")}static credential(e){return Rt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class dt extends En{constructor(){super("twitter.com")}static credential(e,r){return Rt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:s}=e;if(!r||!s)return null;try{return dt.credential(r,s)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Yf(t,e){return Tn(t,"POST","/v1/accounts:signUp",tt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,s,o=!1){const l=await Le._fromIdTokenResponse(e,s,o),h=Zs(s);return new At({user:l,providerId:h,_tokenResponse:s,operationType:r})}static async _forOperation(e,r,s){await e._updateTokensIfNecessary(s,!0);const o=Zs(s);return new At({user:e,providerId:o,_tokenResponse:s,operationType:r})}}function Zs(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ur extends et{constructor(e,r,s,o){super(r.code,r.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ur.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,r,s,o){return new ur(e,r,s,o)}}function ha(t,e,r,s){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ur._fromErrorAndOperation(t,l,e,s):l})}async function Qf(t,e,r=!1){const s=await Ct(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return At._forOperation(t,"link",s)}/**
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
 */async function pa(t,e,r=!1){const{auth:s}=t;if(Pe(s.app))return Promise.reject(Ye(s));const o="reauthenticate";try{const l=await Ct(t,ha(s,o,e,t),r);K(l.idToken,s,"internal-error");const h=Ei(l.idToken);K(h,s,"internal-error");const{sub:g}=h;return K(t.uid===g,s,"user-mismatch"),At._forOperation(t,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Ue(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function ga(t,e,r=!1){if(Pe(t.app))return Promise.reject(Ye(t));const s="signIn",o=await ha(t,s,e),l=await At._fromIdTokenResponse(t,s,o);return r||await t._updateCurrentUser(l.user),l}async function Zf(t,e){return ga(Pt(t),e)}async function om(t,e){return pa(fe(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function ma(t){const e=Pt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function am(t,e,r){if(Pe(t.app))return Promise.reject(Ye(t));const s=Pt(t),h=await fi(s,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yf).catch(w=>{throw w.code==="auth/password-does-not-meet-requirements"&&ma(t),w}),g=await At._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(g.user),g}function cm(t,e,r){return Pe(t.app)?Promise.reject(Ye(t)):Zf(fe(t),Zt.credential(e,r)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ma(t),s})}async function um(t,e,r){const s=fe(t),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e},{email:h}=await zf(s.auth,l);h!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function ed(t,e){return Me(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function lm(t,{displayName:e,photoURL:r}){if(e===void 0&&r===void 0)return;const s=fe(t),l={idToken:await s.getIdToken(),displayName:e,photoUrl:r,returnSecureToken:!0},h=await Ct(s,ed(s.auth,l));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const g=s.providerData.find(({providerId:w})=>w==="password");g&&(g.displayName=s.displayName,g.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function fm(t,e){return td(fe(t),null,e)}async function td(t,e,r){const{auth:s}=t,l={idToken:await t.getIdToken(),returnSecureToken:!0};r&&(l.password=r);const h=await Ct(t,Hf(s,l));await t._updateTokensIfNecessary(h,!0)}function nd(t,e,r,s){return fe(t).onIdTokenChanged(e,r,s)}function rd(t,e,r){return fe(t).beforeAuthStateChanged(e,r)}function dm(t,e,r,s){return fe(t).onAuthStateChanged(e,r,s)}function hm(t){return fe(t).signOut()}async function pm(t){return fe(t).delete()}const lr="__sak";/**
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
 */class ya{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(lr,"1"),this.storage.removeItem(lr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const id=1e3,sd=10;class ba extends ya{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=aa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const s=this.storage.getItem(r),o=this.localCache[r];s!==o&&e(r,o,s)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((h,g,w)=>{this.notifyListeners(h,w)});return}const s=e.key;r?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!r&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);Tf()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,sd):o()}notifyListeners(e,r){this.localCache[e]=r;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:s}),!0)})},id)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}ba.type="LOCAL";const od=ba;/**
 * @license
 * Copyright 2020 Google LLC
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
 */class va extends ya{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}va.type="SESSION";const wa=va;/**
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
 */function ad(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class pr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(o=>o.isListeningto(e));if(r)return r;const s=new pr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:s,eventType:o,data:l}=r.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;r.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const g=Array.from(h).map(async E=>E(r.origin,l)),w=await ad(g);r.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:w})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ri(t="",e=10){let r="";for(let s=0;s<e;s++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class cd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((g,w)=>{const E=Ri("",20);o.port1.start();const A=setTimeout(()=>{w(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(O){const L=O;if(L.data.eventId===E)switch(L.data.status){case"ack":clearTimeout(A),l=setTimeout(()=>{w(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),g(L.data.response);break;default:clearTimeout(A),clearTimeout(l),w(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:E,data:r},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function We(){return window}function ud(t){We().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function _a(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function ld(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fd(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function dd(){return _a()?self:null}/**
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
 */const Ta="firebaseLocalStorageDb",hd=1,fr="firebaseLocalStorage",Ea="fbase_key";class In{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function gr(t,e){return t.transaction([fr],e?"readwrite":"readonly").objectStore(fr)}function pd(){const t=indexedDB.deleteDatabase(Ta);return new In(t).toPromise()}function di(){const t=indexedDB.open(Ta,hd);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(fr,{keyPath:Ea})}catch(o){r(o)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(fr)?e(s):(s.close(),await pd(),e(await di()))})})}async function eo(t,e,r){const s=gr(t,!0).put({[Ea]:e,value:r});return new In(s).toPromise()}async function gd(t,e){const r=gr(t,!1).get(e),s=await new In(r).toPromise();return s===void 0?null:s.value}function to(t,e){const r=gr(t,!0).delete(e);return new In(r).toPromise()}const md=800,yd=3;class Ia{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await di(),this.db)}async _withRetries(e){let r=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(r++>yd)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _a()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pr._getInstance(dd()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var r,s;if(this.activeServiceWorker=await ld(),!this.activeServiceWorker)return;this.sender=new cd(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(r=e[0])!=null&&r.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await di();return await eo(e,lr,"1"),await to(e,lr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(s=>eo(s,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(s=>gd(s,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>to(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=gr(o,!1).getAll();return new In(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),r.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),r.push(o));return r}notifyListeners(e,r){this.localCache[e]=r;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),md)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ia.type="LOCAL";const bd=Ia;new _n(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function vd(t,e){return e?Xe(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ai extends Si{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kt(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Kt(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function wd(t){return ga(t.auth,new Ai(t),t.bypassAuthState)}function _d(t){const{auth:e,user:r}=t;return K(r,e,"internal-error"),pa(r,new Ai(t),t.bypassAuthState)}async function Td(t){const{auth:e,user:r}=t;return K(r,e,"internal-error"),Qf(r,new Ai(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Sa{constructor(e,r,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:s,postBody:o,tenantId:l,error:h,type:g}=e;if(h){this.reject(h);return}const w={auth:this.auth,requestUri:r,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(w))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wd;case"linkViaPopup":case"linkViaRedirect":return Td;case"reauthViaPopup":case"reauthViaRedirect":return _d;default:Ue(this.auth,"internal-error")}}resolve(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ed=new _n(2e3,1e4);class zt extends Sa{constructor(e,r,s,o,l){super(e,r,o,l),this.provider=s,this.authWindow=null,this.pollId=null,zt.currentPopupAction&&zt.currentPopupAction.cancel(),zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Ze(this.filter.length===1,"Popup operations only handle one event");const e=Ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,s;if((s=(r=this.authWindow)==null?void 0:r.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ed.get())};e()}}zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Id="pendingRedirect",Zn=new Map;class Sd extends Sa{constructor(e,r,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,s),this.eventId=null}async execute(){let e=Zn.get(this.auth._key());if(!e){try{const s=await Cd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(r){e=()=>Promise.reject(r)}Zn.set(this.auth._key(),e)}return this.bypassAuthState||Zn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cd(t,e){const r=Od(e),s=Ad(t);if(!await s._isAvailable())return!1;const o=await s._get(r)==="true";return await s._remove(r),o}function Rd(t,e){Zn.set(t._key(),e)}function Ad(t){return Xe(t._redirectPersistence)}function Od(t){return Qn(Id,t.config.apiKey,t.name)}async function Nd(t,e,r=!1){if(Pe(t.app))return Promise.reject(Ye(t));const s=Pt(t),o=vd(s,e),h=await new Sd(s,o,r).execute();return h&&!r&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Pd=10*60*1e3;class kd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(r=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xd(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var s;if(e.error&&!Ca(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";r.onError(qe(this.auth,o))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const s=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pd&&this.cachedEventUids.clear(),this.cachedEventUids.has(no(e))}saveEventToCache(e){this.cachedEventUids.add(no(e)),this.lastProcessedEventTime=Date.now()}}function no(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ca({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ca(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Dd(t,e={}){return Me(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ld=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ud=/^https?/;async function Md(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Dd(t);for(const r of e)try{if(jd(r))return}catch{}Ue(t,"unauthorized-domain")}function jd(t){const e=ui(),{protocol:r,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const h=new URL(t);return h.hostname===""&&s===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&h.hostname===s}if(!Ud.test(r))return!1;if(Ld.test(t))return s===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Bd=new _n(3e4,6e4);function ro(){const t=We().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function Fd(t){return new Promise((e,r)=>{var o,l,h;function s(){ro(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ro(),r(qe(t,"network-request-failed"))},timeout:Bd.get()})}if((l=(o=We().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((h=We().gapi)!=null&&h.load)s();else{const g=Pf("iframefcb");return We()[g]=()=>{gapi.load?s():r(qe(t,"network-request-failed"))},ua(`${Nf()}?onload=${g}`).catch(w=>r(w))}}).catch(e=>{throw er=null,e})}let er=null;function Hd(t){return er=er||Fd(t),er}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $d=new _n(5e3,15e3),qd="__/auth/iframe",Wd="emulator/auth/iframe",zd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gd(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Ti(e,Wd):`https://${t.config.authDomain}/${qd}`,s={apiKey:e.apiKey,appName:t.name,v:Qt},o=Vd.get(t.config.apiHost);o&&(s.eid=o);const l=t._getFrameworks();return l.length&&(s.fw=l.join(",")),`${r}?${vn(s).slice(1)}`}async function Kd(t){const e=await Hd(t),r=We().gapi;return K(r,t,"internal-error"),e.open({where:document.body,url:Gd(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zd,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=qe(t,"network-request-failed"),g=We().setTimeout(()=>{l(h)},$d.get());function w(){We().clearTimeout(g),o(s)}s.ping(w).then(w,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Jd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xd=500,Yd=600,Qd="_blank",Zd="http://localhost";class io{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eh(t,e,r,s=Xd,o=Yd){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const w={...Jd,width:s.toString(),height:o.toString(),top:l,left:h},E=ye().toLowerCase();r&&(g=na(E)?Qd:r),ea(E)&&(e=e||Zd,w.scrollbars="yes");const A=Object.entries(w).reduce((L,[S,D])=>`${L}${S}=${D},`,"");if(_f(E)&&g!=="_self")return th(e||"",g),new io(null);const O=window.open(e||"",g,A);K(O,t,"popup-blocked");try{O.focus()}catch{}return new io(O)}function th(t,e){const r=document.createElement("a");r.href=t,r.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const nh="__/auth/handler",rh="emulator/auth/handler",ih=encodeURIComponent("fac");async function so(t,e,r,s,o,l){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const h={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:s,v:Qt,eventId:o};if(e instanceof da){e.setDefaultLanguage(t.languageCode),h.providerId=e.providerId||"",Bu(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,O]of Object.entries({}))h[A]=O}if(e instanceof En){const A=e.getScopes().filter(O=>O!=="");A.length>0&&(h.scopes=A.join(","))}t.tenantId&&(h.tid=t.tenantId);const g=h;for(const A of Object.keys(g))g[A]===void 0&&delete g[A];const w=await t._getAppCheckToken(),E=w?`#${ih}=${encodeURIComponent(w)}`:"";return`${sh(t)}?${vn(g).slice(1)}${E}`}function sh({config:t}){return t.emulator?Ti(t,rh):`https://${t.authDomain}/${nh}`}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Yr="webStorageSupport";class oh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wa,this._completeRedirectFn=Nd,this._overrideRedirectResult=Rd}async _openPopup(e,r,s,o){var h;Ze((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const l=await so(e,r,s,ui(),o);return eh(e,l,Ri())}async _openRedirect(e,r,s,o){await this._originValidation(e);const l=await so(e,r,s,ui(),o);return ud(l),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:o,promise:l}=this.eventManagers[r];return o?Promise.resolve(o):(Ze(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[r]={promise:s},s.catch(()=>{delete this.eventManagers[r]}),s}async initAndGetManager(e){const r=await Kd(e),s=new kd(e);return r.register("authEvent",o=>(K(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=r,s}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Yr,{type:Yr},o=>{var h;const l=(h=o==null?void 0:o[0])==null?void 0:h[Yr];l!==void 0&&r(!!l),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Md(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return aa()||ta()||Ii()}}const ah=oh;var oo="@firebase/auth",ao="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ch{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function uh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lh(t){Xt(new St("auth",(e,{options:r})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:g}=s.options;K(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const w={apiKey:h,authDomain:g,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ca(t)},E=new Rf(s,o,l,w);return Mf(E,r),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,s)=>{e.getProvider("auth-internal").initialize()})),Xt(new St("auth-internal",e=>{const r=Pt(e.getProvider("auth").getImmediate());return(s=>new ch(s))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(oo,ao,uh(t)),mt(oo,ao,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const fh=5*60,dh=jo("authIdTokenMaxAge")||fh;let co=null;const hh=t=>async e=>{const r=e&&await e.getIdTokenResult(),s=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(s&&s>dh)return;const o=r==null?void 0:r.token;co!==o&&(co=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function gm(t=qo()){const e=wi(t,"auth");if(e.isInitialized())return e.getImmediate();const r=Uf(t,{popupRedirectResolver:ah,persistence:[bd,od,wa]}),s=jo("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=hh(l.toString());rd(r,h,()=>h(r.currentUser)),nd(r,g=>h(g))}}const o=Uo("auth");return o&&jf(r,`http://${o}`),r}function ph(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Af({loadJS(t){return new Promise((e,r)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=o=>{const l=qe("internal-error");l.customData=o,r(l)},s.type="text/javascript",s.charset="UTF-8",ph().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lh("Browser");/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ra="firebasestorage.googleapis.com",Aa="storageBucket",gh=2*60*1e3,mh=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ce extends et{constructor(e,r,s=0){super(Qr(e),`Firebase Storage: ${r} (${Qr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ae||(ae={}));function Qr(t){return"storage/"+t}function Oi(){const t="An unknown error occurred, please check the error payload for server response.";return new ce(ae.UNKNOWN,t)}function yh(t){return new ce(ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function bh(t){return new ce(ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function vh(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ce(ae.UNAUTHENTICATED,t)}function wh(){return new ce(ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _h(t){return new ce(ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Th(){return new ce(ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Eh(){return new ce(ae.CANCELED,"User canceled the upload/download.")}function Ih(t){return new ce(ae.INVALID_URL,"Invalid URL '"+t+"'.")}function Sh(t){return new ce(ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ch(){return new ce(ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Aa+"' property when initializing the app?")}function Rh(){return new ce(ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ah(){return new ce(ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Oh(t){return new ce(ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hi(t){return new ce(ae.INVALID_ARGUMENT,t)}function Oa(){return new ce(ae.APP_DELETED,"The Firebase app was deleted.")}function Nh(t){return new ce(ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function gn(t,e){return new ce(ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function un(t){throw new ce(ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ce{constructor(e,r){this.bucket=e,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,r){let s;try{s=Ce.makeFromUrl(e,r)}catch{return new Ce(e,"")}if(s.path==="")return s;throw Sh(e)}static makeFromUrl(e,r){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const h="(/(.*))?$",g=new RegExp("^gs://"+o+h,"i"),w={bucket:1,path:3};function E(j){j.path_=decodeURIComponent(j.path)}const A="v[A-Za-z0-9_]+",O=r.replace(/[.]/g,"\\."),L="(/([^?#]*).*)?$",S=new RegExp(`^https?://${O}/${A}/b/${o}/o${L}`,"i"),D={bucket:1,path:3},$=r===Ra?"(?:storage.googleapis.com|storage.cloud.google.com)":r,_="([^?#]*)",k=new RegExp(`^https?://${$}/${o}/${_}`,"i"),B=[{regex:g,indices:w,postModify:l},{regex:S,indices:D,postModify:E},{regex:k,indices:{bucket:1,path:2},postModify:E}];for(let j=0;j<B.length;j++){const F=B[j],c=F.regex.exec(e);if(c){const R=c[F.indices.bucket];let m=c[F.indices.path];m||(m=""),s=new Ce(R,m),F.postModify(s);break}}if(s==null)throw Ih(e);return s}}class Ph{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function kh(t,e,r){let s=1,o=null,l=null,h=!1,g=0;function w(){return g===2}let E=!1;function A(..._){E||(E=!0,e.apply(null,_))}function O(_){o=setTimeout(()=>{o=null,t(S,w())},_)}function L(){l&&clearTimeout(l)}function S(_,...k){if(E){L();return}if(_){L(),A.call(null,_,...k);return}if(w()||h){L(),A.call(null,_,...k);return}s<64&&(s*=2);let B;g===1?(g=2,B=0):B=(s+Math.random())*1e3,O(B)}let D=!1;function $(_){D||(D=!0,L(),!E&&(o!==null?(_||(g=2),clearTimeout(o),O(0)):_||(g=1)))}return O(0),l=setTimeout(()=>{h=!0,$(!0)},r),$}function xh(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Dh(t){return t!==void 0}function Lh(t){return typeof t=="object"&&!Array.isArray(t)}function Ni(t){return typeof t=="string"||t instanceof String}function uo(t){return Pi()&&t instanceof Blob}function Pi(){return typeof Blob<"u"}function lo(t,e,r,s){if(s<e)throw hi(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>r)throw hi(`Invalid value for '${t}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function mr(t,e,r){let s=e;return r==null&&(s=`https://${e}`),`${r}://${s}/v0${t}`}function Na(t){const e=encodeURIComponent;let r="?";for(const s in t)if(t.hasOwnProperty(s)){const o=e(s)+"="+e(t[s]);r=r+o+"&"}return r=r.slice(0,-1),r}var Et;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Et||(Et={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Uh(t,e){const r=t>=500&&t<600,o=[408,429].indexOf(t)!==-1,l=e.indexOf(t)!==-1;return r||o||l}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Mh{constructor(e,r,s,o,l,h,g,w,E,A,O,L=!0,S=!1){this.url_=e,this.method_=r,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=g,this.errorCallback_=w,this.timeout_=E,this.progressCallback_=A,this.connectionFactory_=O,this.retry=L,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,$)=>{this.resolve_=D,this.reject_=$,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Kn(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=g=>{const w=g.loaded,E=g.lengthComputable?g.total:-1;this.progressCallback_!==null&&this.progressCallback_(w,E)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const g=l.getErrorCode()===Et.NO_ERROR,w=l.getStatus();if(!g||Uh(w,this.additionalRetryCodes_)&&this.retry){const A=l.getErrorCode()===Et.ABORT;s(!1,new Kn(!1,null,A));return}const E=this.successCodes_.indexOf(w)!==-1;s(!0,new Kn(E,l))})},r=(s,o)=>{const l=this.resolve_,h=this.reject_,g=o.connection;if(o.wasSuccessCode)try{const w=this.callback_(g,g.getResponse());Dh(w)?l(w):l()}catch(w){h(w)}else if(g!==null){const w=Oi();w.serverResponse=g.getErrorText(),this.errorCallback_?h(this.errorCallback_(g,w)):h(w)}else if(o.canceled){const w=this.appDelete_?Oa():Eh();h(w)}else{const w=Th();h(w)}};this.canceled_?r(!1,new Kn(!1,null,!0)):this.backoffId_=kh(e,r,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xh(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kn{constructor(e,r,s){this.wasSuccessCode=e,this.connection=r,this.canceled=!!s}}function jh(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Bh(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Fh(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Hh(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $h(t,e,r,s,o,l,h=!0,g=!1){const w=Na(t.urlParams),E=t.url+w,A=Object.assign({},t.headers);return Fh(A,e),jh(A,r),Bh(A,l),Hh(A,s),new Mh(E,t.method,A,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o,h,g)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function qh(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Wh(...t){const e=qh();if(e!==void 0){const r=new e;for(let s=0;s<t.length;s++)r.append(t[s]);return r.getBlob()}else{if(Pi())return new Blob(t);throw new ce(ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function zh(t,e,r){return t.webkitSlice?t.webkitSlice(e,r):t.mozSlice?t.mozSlice(e,r):t.slice?t.slice(e,r):null}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Vh(t){if(typeof atob>"u")throw Oh("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const $e={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Zr{constructor(e,r){this.data=e,this.contentType=r||null}}function Gh(t,e){switch(t){case $e.RAW:return new Zr(Pa(e));case $e.BASE64:case $e.BASE64URL:return new Zr(ka(t,e));case $e.DATA_URL:return new Zr(Jh(e),Xh(e))}throw Oi()}function Pa(t){const e=[];for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(r<t.length-1&&(t.charCodeAt(r+1)&64512)===56320))e.push(239,191,189);else{const l=s,h=t.charCodeAt(++r);s=65536|(l&1023)<<10|h&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Kh(t){let e;try{e=decodeURIComponent(t)}catch{throw gn($e.DATA_URL,"Malformed data URL.")}return Pa(e)}function ka(t,e){switch(t){case $e.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw gn(t,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case $e.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw gn(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=Vh(e)}catch(o){throw o.message.includes("polyfill")?o:gn(t,"Invalid character found")}const s=new Uint8Array(r.length);for(let o=0;o<r.length;o++)s[o]=r.charCodeAt(o);return s}class xa{constructor(e){this.base64=!1,this.contentType=null;const r=e.match(/^data:([^,]+)?,/);if(r===null)throw gn($e.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=r[1]||null;s!=null&&(this.base64=Yh(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Jh(t){const e=new xa(t);return e.base64?ka($e.BASE64,e.rest):Kh(e.rest)}function Xh(t){return new xa(t).contentType}function Yh(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ht{constructor(e,r){let s=0,o="";uo(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(r?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(r?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,r){if(uo(this.data_)){const s=this.data_,o=zh(s,e,r);return o===null?null:new ht(o)}else{const s=new Uint8Array(this.data_.buffer,e,r-e);return new ht(s,!0)}}static getBlob(...e){if(Pi()){const r=e.map(s=>s instanceof ht?s.data_:s);return new ht(Wh.apply(null,r))}else{const r=e.map(h=>Ni(h)?Gh($e.RAW,h).data:h.data_);let s=0;r.forEach(h=>{s+=h.byteLength});const o=new Uint8Array(s);let l=0;return r.forEach(h=>{for(let g=0;g<h.length;g++)o[l++]=h[g]}),new ht(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Da(t){let e;try{e=JSON.parse(t)}catch{return null}return Lh(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Qh(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Zh(t,e){const r=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?r:t+"/"+r}function La(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ep(t,e){return e}class me{constructor(e,r,s,o){this.server=e,this.local=r||e,this.writable=!!s,this.xform=o||ep}}let Jn=null;function tp(t){return!Ni(t)||t.length<2?t:La(t)}function Ua(){if(Jn)return Jn;const t=[];t.push(new me("bucket")),t.push(new me("generation")),t.push(new me("metageneration")),t.push(new me("name","fullPath",!0));function e(l,h){return tp(h)}const r=new me("name");r.xform=e,t.push(r);function s(l,h){return h!==void 0?Number(h):h}const o=new me("size");return o.xform=s,t.push(o),t.push(new me("timeCreated")),t.push(new me("updated")),t.push(new me("md5Hash",null,!0)),t.push(new me("cacheControl",null,!0)),t.push(new me("contentDisposition",null,!0)),t.push(new me("contentEncoding",null,!0)),t.push(new me("contentLanguage",null,!0)),t.push(new me("contentType",null,!0)),t.push(new me("metadata","customMetadata",!0)),Jn=t,Jn}function np(t,e){function r(){const s=t.bucket,o=t.fullPath,l=new Ce(s,o);return e._makeStorageReference(l)}Object.defineProperty(t,"ref",{get:r})}function rp(t,e,r){const s={};s.type="file";const o=r.length;for(let l=0;l<o;l++){const h=r[l];s[h.local]=h.xform(s,e[h.server])}return np(s,t),s}function Ma(t,e,r){const s=Da(e);return s===null?null:rp(t,s,r)}function ip(t,e,r,s){const o=Da(e);if(o===null||!Ni(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(E=>{const A=t.bucket,O=t.fullPath,L="/b/"+h(A)+"/o/"+h(O),S=mr(L,r,s),D=Na({alt:"media",token:E});return S+D})[0]}function sp(t,e){const r={},s=e.length;for(let o=0;o<s;o++){const l=e[o];l.writable&&(r[l.server]=t[l.local])}return JSON.stringify(r)}class ki{constructor(e,r,s,o){this.url=e,this.method=r,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ja(t){if(!t)throw Oi()}function op(t,e){function r(s,o){const l=Ma(t,o,e);return ja(l!==null),l}return r}function ap(t,e){function r(s,o){const l=Ma(t,o,e);return ja(l!==null),ip(l,o,t.host,t._protocol)}return r}function Ba(t){function e(r,s){let o;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?o=wh():o=vh():r.getStatus()===402?o=bh(t.bucket):r.getStatus()===403?o=_h(t.path):o=s,o.status=r.getStatus(),o.serverResponse=s.serverResponse,o}return e}function Fa(t){const e=Ba(t);function r(s,o){let l=e(s,o);return s.getStatus()===404&&(l=yh(t.path)),l.serverResponse=o.serverResponse,l}return r}function cp(t,e,r){const s=e.fullServerUrl(),o=mr(s,t.host,t._protocol),l="GET",h=t.maxOperationRetryTime,g=new ki(o,l,ap(t,r),h);return g.errorHandler=Fa(e),g}function up(t,e){const r=e.fullServerUrl(),s=mr(r,t.host,t._protocol),o="DELETE",l=t.maxOperationRetryTime;function h(w,E){}const g=new ki(s,o,h,l);return g.successCodes=[200,204],g.errorHandler=Fa(e),g}function lp(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function fp(t,e,r){const s=Object.assign({},r);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=lp(null,e)),s}function dp(t,e,r,s,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function g(){let B="";for(let j=0;j<2;j++)B=B+Math.random().toString().slice(2);return B}const w=g();h["Content-Type"]="multipart/related; boundary="+w;const E=fp(e,s,o),A=sp(E,r),O="--"+w+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+A+`\r
--`+w+`\r
Content-Type: `+E.contentType+`\r
\r
`,L=`\r
--`+w+"--",S=ht.getBlob(O,s,L);if(S===null)throw Rh();const D={name:E.fullPath},$=mr(l,t.host,t._protocol),_="POST",k=t.maxUploadRetryTime,M=new ki($,_,op(t,r),k);return M.urlParams=D,M.headers=h,M.body=S.uploadData(),M.errorHandler=Ba(e),M}class hp{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Et.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Et.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Et.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,r,s,o,l){if(this.sent_)throw un("cannot .send() more than once");if(wn(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(r,e,!0),l!==void 0)for(const h in l)l.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,l[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw un("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw un("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw un("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw un("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class pp extends hp{initXhr(){this.xhr_.responseType="text"}}function xi(){return new pp}/**
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
 */class Ot{constructor(e,r){this._service=e,r instanceof Ce?this._location=r:this._location=Ce.makeFromUrl(r,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,r){return new Ot(e,r)}get root(){const e=new Ce(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return La(this._location.path)}get storage(){return this._service}get parent(){const e=Qh(this._location.path);if(e===null)return null;const r=new Ce(this._location.bucket,e);return new Ot(this._service,r)}_throwIfRoot(e){if(this._location.path==="")throw Nh(e)}}function gp(t,e,r){t._throwIfRoot("uploadBytes");const s=dp(t.storage,t._location,Ua(),new ht(e,!0),r);return t.storage.makeRequestWithTokens(s,xi).then(o=>({metadata:o,ref:t}))}function mp(t){t._throwIfRoot("getDownloadURL");const e=cp(t.storage,t._location,Ua());return t.storage.makeRequestWithTokens(e,xi).then(r=>{if(r===null)throw Ah();return r})}function yp(t){t._throwIfRoot("deleteObject");const e=up(t.storage,t._location);return t.storage.makeRequestWithTokens(e,xi)}function bp(t,e){const r=Zh(t._location.path,e),s=new Ce(t._location.bucket,r);return new Ot(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function vp(t){return/^[A-Za-z]+:\/\//.test(t)}function wp(t,e){return new Ot(t,e)}function Ha(t,e){if(t instanceof Di){const r=t;if(r._bucket==null)throw Ch();const s=new Ot(r,r._bucket);return e!=null?Ha(s,e):s}else return e!==void 0?bp(t,e):t}function _p(t,e){if(e&&vp(e)){if(t instanceof Di)return wp(t,e);throw hi("To use ref(service, url), the first argument must be a Storage instance.")}else return Ha(t,e)}function fo(t,e){const r=e==null?void 0:e[Aa];return r==null?null:Ce.makeFromBucketSpec(r,t)}function Tp(t,e,r,s={}){t.host=`${e}:${r}`;const o=wn(e);o&&Bo(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=o?"https":"http";const{mockUserToken:l}=s;l&&(t._overrideAuthToken=typeof l=="string"?l:Au(l,t.app.options.projectId))}class Di{constructor(e,r,s,o,l,h=!1){this.app=e,this._authProvider=r,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=Ra,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gh,this._maxUploadRetryTime=mh,this._requests=new Set,o!=null?this._bucket=Ce.makeFromBucketSpec(o,this._host):this._bucket=fo(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ce.makeFromBucketSpec(this._url,e):this._bucket=fo(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const r=await e.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){if(Pe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ot(this,e)}_makeRequest(e,r,s,o,l=!0){if(this._deleted)return new Ph(Oa());{const h=$h(e,this._appId,s,o,r,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,r){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,r,s,o).getPromise()}}const ho="@firebase/storage",po="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
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
 */const $a="storage";function mm(t,e,r){return t=fe(t),gp(t,e,r)}function ym(t){return t=fe(t),mp(t)}function bm(t){return t=fe(t),yp(t)}function vm(t,e){return t=fe(t),_p(t,e)}function wm(t=qo(),e){t=fe(t);const s=wi(t,$a).getImmediate({identifier:e}),o=Cu("storage");return o&&Ep(s,...o),s}function Ep(t,e,r,s={}){Tp(t,e,r,s)}function Ip(t,{instanceIdentifier:e}){const r=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Di(r,s,o,e,Qt)}function Sp(){Xt(new St($a,Ip,"PUBLIC").setMultipleInstances(!0)),mt(ho,po,""),mt(ho,po,"esm2020")}Sp();var hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qa={exports:{}};(function(t,e){(function(r,s){t.exports=s(r)})(typeof hn<"u"?hn:window||hn.window||hn.global,function(r){var s={},o="iziToast";document.querySelector("body");var l=!!/Mobi/.test(navigator.userAgent),h=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),g=typeof InstallTrigger<"u",w="ontouchstart"in document.documentElement,E=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],A={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},O=568,L={};s.children={};var S={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var D=function(c,R){R=R||{bubbles:!1,cancelable:!1,detail:void 0};var m=document.createEvent("CustomEvent");return m.initCustomEvent(c,R.bubbles,R.cancelable,R.detail),m};D.prototype=window.Event.prototype,window.CustomEvent=D}var $=function(c,R,m){if(Object.prototype.toString.call(c)==="[object Object]")for(var b in c)Object.prototype.hasOwnProperty.call(c,b)&&R.call(m,c[b],b,c);else if(c)for(var H=0,W=c.length;H<W;H++)R.call(m,c[H],H,c)},_=function(c,R){var m={};return $(c,function(b,H){m[H]=c[H]}),$(R,function(b,H){m[H]=R[H]}),m},k=function(c){var R=document.createDocumentFragment(),m=document.createElement("div");for(m.innerHTML=c;m.firstChild;)R.appendChild(m.firstChild);return R},M=function(c){var R=btoa(encodeURIComponent(c));return R.replace(/=/g,"")},B=function(c){return c.substring(0,1)=="#"||c.substring(0,3)=="rgb"||c.substring(0,3)=="hsl"},j=function(c){try{return btoa(atob(c))==c}catch{return!1}},F=function(){return{move:function(c,R,m,b){var H,W=.3,U=180;b!==0&&(c.classList.add(o+"-dragged"),c.style.transform="translateX("+b+"px)",b>0?(H=(U-b)/U,H<W&&R.hide(_(m,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),c,"drag")):(H=(U+b)/U,H<W&&R.hide(_(m,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),c,"drag")),c.style.opacity=H,H<W&&((h||g)&&(c.style.left=b+"px"),c.parentNode.style.opacity=W,this.stopMoving(c,null)))},startMoving:function(c,R,m,b){b=b||window.event;var H=w?b.touches[0].clientX:b.clientX,W=c.style.transform.replace("px)","");W=W.replace("translateX(","");var U=H-W;m.transitionIn&&c.classList.remove(m.transitionIn),m.transitionInMobile&&c.classList.remove(m.transitionInMobile),c.style.transition="",w?document.ontouchmove=function(q){q.preventDefault(),q=q||window.event;var J=q.touches[0].clientX,Q=J-U;F.move(c,R,m,Q)}:document.onmousemove=function(q){q.preventDefault(),q=q||window.event;var J=q.clientX,Q=J-U;F.move(c,R,m,Q)}},stopMoving:function(c,R){w?document.ontouchmove=function(){}:document.onmousemove=function(){},c.style.opacity="",c.style.transform="",c.classList.contains(o+"-dragged")&&(c.classList.remove(o+"-dragged"),c.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){c.style.transition=""},400))}}}();return s.setSetting=function(c,R,m){s.children[c][R]=m},s.getSetting=function(c,R){return s.children[c][R]},s.destroy=function(){$(document.querySelectorAll("."+o+"-overlay"),function(c,R){c.remove()}),$(document.querySelectorAll("."+o+"-wrapper"),function(c,R){c.remove()}),$(document.querySelectorAll("."+o),function(c,R){c.remove()}),this.children={},document.removeEventListener(o+"-opened",{},!1),document.removeEventListener(o+"-opening",{},!1),document.removeEventListener(o+"-closing",{},!1),document.removeEventListener(o+"-closed",{},!1),document.removeEventListener("keyup",{},!1),L={}},s.settings=function(c){s.destroy(),L=c,S=_(S,c||{})},$(A,function(c,R){s[R]=function(m){var b=_(L,m||{});b=_(c,b||{}),this.show(b)}}),s.progress=function(c,R,m){var b=this,H=R.getAttribute("data-iziToast-ref"),W=_(this.children[H],c||{}),U=R.querySelector("."+o+"-progressbar div");return{start:function(){typeof W.time.REMAINING>"u"&&(R.classList.remove(o+"-reseted"),U!==null&&(U.style.transition="width "+W.timeout+"ms "+W.progressBarEasing,U.style.width="0%"),W.time.START=new Date().getTime(),W.time.END=W.time.START+W.timeout,W.time.TIMER=setTimeout(function(){clearTimeout(W.time.TIMER),R.classList.contains(o+"-closing")||(b.hide(W,R,"timeout"),typeof m=="function"&&m.apply(b))},W.timeout),b.setSetting(H,"time",W.time))},pause:function(){if(typeof W.time.START<"u"&&!R.classList.contains(o+"-paused")&&!R.classList.contains(o+"-reseted")){if(R.classList.add(o+"-paused"),W.time.REMAINING=W.time.END-new Date().getTime(),clearTimeout(W.time.TIMER),b.setSetting(H,"time",W.time),U!==null){var q=window.getComputedStyle(U),J=q.getPropertyValue("width");U.style.transition="none",U.style.width=J}typeof m=="function"&&setTimeout(function(){m.apply(b)},10)}},resume:function(){typeof W.time.REMAINING<"u"?(R.classList.remove(o+"-paused"),U!==null&&(U.style.transition="width "+W.time.REMAINING+"ms "+W.progressBarEasing,U.style.width="0%"),W.time.END=new Date().getTime()+W.time.REMAINING,W.time.TIMER=setTimeout(function(){clearTimeout(W.time.TIMER),R.classList.contains(o+"-closing")||(b.hide(W,R,"timeout"),typeof m=="function"&&m.apply(b))},W.time.REMAINING),b.setSetting(H,"time",W.time)):this.start()},reset:function(){clearTimeout(W.time.TIMER),delete W.time.REMAINING,b.setSetting(H,"time",W.time),R.classList.add(o+"-reseted"),R.classList.remove(o+"-paused"),U!==null&&(U.style.transition="none",U.style.width="100%"),typeof m=="function"&&setTimeout(function(){m.apply(b)},10)}}},s.hide=function(c,R,m){typeof R!="object"&&(R=document.querySelector(R));var b=this,H=_(this.children[R.getAttribute("data-iziToast-ref")],c||{});H.closedBy=m||null,delete H.time.REMAINING,R.classList.add(o+"-closing"),function(){var q=document.querySelector("."+o+"-overlay");if(q!==null){var J=q.getAttribute("data-iziToast-ref");J=J.split(",");var Q=J.indexOf(String(H.ref));Q!==-1&&J.splice(Q,1),q.setAttribute("data-iziToast-ref",J.join()),J.length===0&&(q.classList.remove("fadeIn"),q.classList.add("fadeOut"),setTimeout(function(){q.remove()},700))}}(),H.transitionIn&&R.classList.remove(H.transitionIn),H.transitionInMobile&&R.classList.remove(H.transitionInMobile),l||window.innerWidth<=O?H.transitionOutMobile&&R.classList.add(H.transitionOutMobile):H.transitionOut&&R.classList.add(H.transitionOut);var W=R.parentNode.offsetHeight;R.parentNode.style.height=W+"px",R.style.pointerEvents="none",(!l||window.innerWidth>O)&&(R.parentNode.style.transitionDelay="0.2s");try{var U=new CustomEvent(o+"-closing",{detail:H,bubbles:!0,cancelable:!0});document.dispatchEvent(U)}catch(q){console.warn(q)}setTimeout(function(){R.parentNode.style.height="0px",R.parentNode.style.overflow="",setTimeout(function(){delete b.children[H.ref],R.parentNode.remove();try{var q=new CustomEvent(o+"-closed",{detail:H,bubbles:!0,cancelable:!0});document.dispatchEvent(q)}catch(J){console.warn(J)}typeof H.onClosed<"u"&&H.onClosed.apply(null,[H,R,m])},1e3)},200),typeof H.onClosing<"u"&&H.onClosing.apply(null,[H,R,m])},s.show=function(c){var R=this,m=_(L,c||{});if(m=_(S,m),m.time={},m.id===null&&(m.id=M(m.title+m.message+m.color)),m.displayMode===1||m.displayMode=="once")try{if(document.querySelectorAll("."+o+"#"+m.id).length>0)return!1}catch{console.warn("["+o+"] Could not find an element with this selector: #"+m.id+". Try to set an valid id.")}if(m.displayMode===2||m.displayMode=="replace")try{$(document.querySelectorAll("."+o+"#"+m.id),function(U,q){R.hide(m,U,"replaced")})}catch{console.warn("["+o+"] Could not find an element with this selector: #"+m.id+". Try to set an valid id.")}m.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),s.children[m.ref]=m;var b={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:m.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};b.toast.setAttribute("data-iziToast-ref",m.ref),b.toast.appendChild(b.toastBody),b.toastCapsule.appendChild(b.toast),function(){if(b.toast.classList.add(o),b.toast.classList.add(o+"-opening"),b.toastCapsule.classList.add(o+"-capsule"),b.toastBody.classList.add(o+"-body"),b.toastTexts.classList.add(o+"-texts"),l||window.innerWidth<=O?m.transitionInMobile&&b.toast.classList.add(m.transitionInMobile):m.transitionIn&&b.toast.classList.add(m.transitionIn),m.class){var U=m.class.split(" ");$(U,function(q,J){b.toast.classList.add(q)})}m.id&&(b.toast.id=m.id),m.rtl&&(b.toast.classList.add(o+"-rtl"),b.toast.setAttribute("dir","rtl")),m.layout>1&&b.toast.classList.add(o+"-layout"+m.layout),m.balloon&&b.toast.classList.add(o+"-balloon"),m.maxWidth&&(isNaN(m.maxWidth)?b.toast.style.maxWidth=m.maxWidth:b.toast.style.maxWidth=m.maxWidth+"px"),(m.theme!==""||m.theme!=="light")&&b.toast.classList.add(o+"-theme-"+m.theme),m.color&&(B(m.color)?b.toast.style.background=m.color:b.toast.classList.add(o+"-color-"+m.color)),m.backgroundColor&&(b.toast.style.background=m.backgroundColor,m.balloon&&(b.toast.style.borderColor=m.backgroundColor))}(),function(){m.image&&(b.cover.classList.add(o+"-cover"),b.cover.style.width=m.imageWidth+"px",j(m.image.replace(/ /g,""))?b.cover.style.backgroundImage="url(data:image/png;base64,"+m.image.replace(/ /g,"")+")":b.cover.style.backgroundImage="url("+m.image+")",m.rtl?b.toastBody.style.marginRight=m.imageWidth+10+"px":b.toastBody.style.marginLeft=m.imageWidth+10+"px",b.toast.appendChild(b.cover))}(),function(){m.close?(b.buttonClose=document.createElement("button"),b.buttonClose.type="button",b.buttonClose.classList.add(o+"-close"),b.buttonClose.addEventListener("click",function(U){U.target,R.hide(m,b.toast,"button")}),b.toast.appendChild(b.buttonClose)):m.rtl?b.toast.style.paddingLeft="18px":b.toast.style.paddingRight="18px"}(),function(){m.progressBar&&(b.progressBar=document.createElement("div"),b.progressBarDiv=document.createElement("div"),b.progressBar.classList.add(o+"-progressbar"),b.progressBarDiv.style.background=m.progressBarColor,b.progressBar.appendChild(b.progressBarDiv),b.toast.appendChild(b.progressBar)),m.timeout&&(m.pauseOnHover&&!m.resetOnHover&&(b.toast.addEventListener("mouseenter",function(U){R.progress(m,b.toast).pause()}),b.toast.addEventListener("mouseleave",function(U){R.progress(m,b.toast).resume()})),m.resetOnHover&&(b.toast.addEventListener("mouseenter",function(U){R.progress(m,b.toast).reset()}),b.toast.addEventListener("mouseleave",function(U){R.progress(m,b.toast).start()})))}(),function(){m.iconUrl?(b.icon.setAttribute("class",o+"-icon"),b.icon.setAttribute("src",m.iconUrl)):m.icon&&(b.icon.setAttribute("class",o+"-icon "+m.icon),m.iconText&&b.icon.appendChild(document.createTextNode(m.iconText)),m.iconColor&&(b.icon.style.color=m.iconColor)),(m.icon||m.iconUrl)&&(m.rtl?b.toastBody.style.paddingRight="33px":b.toastBody.style.paddingLeft="33px",b.toastBody.appendChild(b.icon))}(),function(){m.title.length>0&&(b.strong=document.createElement("strong"),b.strong.classList.add(o+"-title"),b.strong.appendChild(k(m.title)),b.toastTexts.appendChild(b.strong),m.titleColor&&(b.strong.style.color=m.titleColor),m.titleSize&&(isNaN(m.titleSize)?b.strong.style.fontSize=m.titleSize:b.strong.style.fontSize=m.titleSize+"px"),m.titleLineHeight&&(isNaN(m.titleSize)?b.strong.style.lineHeight=m.titleLineHeight:b.strong.style.lineHeight=m.titleLineHeight+"px")),m.message.length>0&&(b.p=document.createElement("p"),b.p.classList.add(o+"-message"),b.p.appendChild(k(m.message)),b.toastTexts.appendChild(b.p),m.messageColor&&(b.p.style.color=m.messageColor),m.messageSize&&(isNaN(m.titleSize)?b.p.style.fontSize=m.messageSize:b.p.style.fontSize=m.messageSize+"px"),m.messageLineHeight&&(isNaN(m.titleSize)?b.p.style.lineHeight=m.messageLineHeight:b.p.style.lineHeight=m.messageLineHeight+"px")),m.title.length>0&&m.message.length>0&&(m.rtl?b.strong.style.marginLeft="10px":m.layout!==2&&!m.rtl&&(b.strong.style.marginRight="10px"))}(),b.toastBody.appendChild(b.toastTexts);var H;(function(){m.inputs.length>0&&(b.inputs.classList.add(o+"-inputs"),$(m.inputs,function(U,q){b.inputs.appendChild(k(U[0])),H=b.inputs.childNodes,H[q].classList.add(o+"-inputs-child"),U[3]&&setTimeout(function(){H[q].focus()},300),H[q].addEventListener(U[1],function(J){var Q=U[2];return Q(R,b.toast,this,J)})}),b.toastBody.appendChild(b.inputs))})(),function(){m.buttons.length>0&&(b.buttons.classList.add(o+"-buttons"),$(m.buttons,function(U,q){b.buttons.appendChild(k(U[0]));var J=b.buttons.childNodes;J[q].classList.add(o+"-buttons-child"),U[2]&&setTimeout(function(){J[q].focus()},300),J[q].addEventListener("click",function(Q){Q.preventDefault();var te=U[1];return te(R,b.toast,this,Q,H)})})),b.toastBody.appendChild(b.buttons)}(),m.message.length>0&&(m.inputs.length>0||m.buttons.length>0)&&(b.p.style.marginBottom="0"),(m.inputs.length>0||m.buttons.length>0)&&(m.rtl?b.toastTexts.style.marginLeft="10px":b.toastTexts.style.marginRight="10px",m.inputs.length>0&&m.buttons.length>0&&(m.rtl?b.inputs.style.marginLeft="8px":b.inputs.style.marginRight="8px")),function(){b.toastCapsule.style.visibility="hidden",setTimeout(function(){var U=b.toast.offsetHeight,q=b.toast.currentStyle||window.getComputedStyle(b.toast),J=q.marginTop;J=J.split("px"),J=parseInt(J[0]);var Q=q.marginBottom;Q=Q.split("px"),Q=parseInt(Q[0]),b.toastCapsule.style.visibility="",b.toastCapsule.style.height=U+Q+J+"px",setTimeout(function(){b.toastCapsule.style.height="auto",m.target&&(b.toastCapsule.style.overflow="visible")},500),m.timeout&&R.progress(m,b.toast).start()},100)}(),function(){var U=m.position;if(m.target)b.wrapper=document.querySelector(m.target),b.wrapper.classList.add(o+"-target"),m.targetFirst?b.wrapper.insertBefore(b.toastCapsule,b.wrapper.firstChild):b.wrapper.appendChild(b.toastCapsule);else{if(E.indexOf(m.position)==-1){console.warn("["+o+`] Incorrect position.
It can be › `+E);return}l||window.innerWidth<=O?m.position=="bottomLeft"||m.position=="bottomRight"||m.position=="bottomCenter"?U=o+"-wrapper-bottomCenter":m.position=="topLeft"||m.position=="topRight"||m.position=="topCenter"?U=o+"-wrapper-topCenter":U=o+"-wrapper-center":U=o+"-wrapper-"+U,b.wrapper=document.querySelector("."+o+"-wrapper."+U),b.wrapper||(b.wrapper=document.createElement("div"),b.wrapper.classList.add(o+"-wrapper"),b.wrapper.classList.add(U),document.body.appendChild(b.wrapper)),m.position=="topLeft"||m.position=="topCenter"||m.position=="topRight"?b.wrapper.insertBefore(b.toastCapsule,b.wrapper.firstChild):b.wrapper.appendChild(b.toastCapsule)}isNaN(m.zindex)?console.warn("["+o+"] Invalid zIndex."):b.wrapper.style.zIndex=m.zindex}(),function(){m.overlay&&(document.querySelector("."+o+"-overlay.fadeIn")!==null?(b.overlay=document.querySelector("."+o+"-overlay"),b.overlay.setAttribute("data-iziToast-ref",b.overlay.getAttribute("data-iziToast-ref")+","+m.ref),!isNaN(m.zindex)&&m.zindex!==null&&(b.overlay.style.zIndex=m.zindex-1)):(b.overlay.classList.add(o+"-overlay"),b.overlay.classList.add("fadeIn"),b.overlay.style.background=m.overlayColor,b.overlay.setAttribute("data-iziToast-ref",m.ref),!isNaN(m.zindex)&&m.zindex!==null&&(b.overlay.style.zIndex=m.zindex-1),document.querySelector("body").appendChild(b.overlay)),m.overlayClose?(b.overlay.removeEventListener("click",{}),b.overlay.addEventListener("click",function(U){R.hide(m,b.toast,"overlay")})):b.overlay.removeEventListener("click",{}))}(),function(){if(m.animateInside){b.toast.classList.add(o+"-animateInside");var U=[200,100,300];(m.transitionIn=="bounceInLeft"||m.transitionIn=="bounceInRight")&&(U=[400,200,400]),m.title.length>0&&setTimeout(function(){b.strong.classList.add("slideIn")},U[0]),m.message.length>0&&setTimeout(function(){b.p.classList.add("slideIn")},U[1]),(m.icon||m.iconUrl)&&setTimeout(function(){b.icon.classList.add("revealIn")},U[2]);var q=150;m.buttons.length>0&&b.buttons&&setTimeout(function(){$(b.buttons.childNodes,function(J,Q){setTimeout(function(){J.classList.add("revealIn")},q),q=q+150})},m.inputs.length>0?150:0),m.inputs.length>0&&b.inputs&&(q=150,$(b.inputs.childNodes,function(J,Q){setTimeout(function(){J.classList.add("revealIn")},q),q=q+150}))}}(),m.onOpening.apply(null,[m,b.toast]);try{var W=new CustomEvent(o+"-opening",{detail:m,bubbles:!0,cancelable:!0});document.dispatchEvent(W)}catch(U){console.warn(U)}setTimeout(function(){b.toast.classList.remove(o+"-opening"),b.toast.classList.add(o+"-opened");try{var U=new CustomEvent(o+"-opened",{detail:m,bubbles:!0,cancelable:!0});document.dispatchEvent(U)}catch(q){console.warn(q)}m.onOpened.apply(null,[m,b.toast])},1e3),m.drag&&(w?(b.toast.addEventListener("touchstart",function(U){F.startMoving(this,R,m,U)},!1),b.toast.addEventListener("touchend",function(U){F.stopMoving(this,U)},!1)):(b.toast.addEventListener("mousedown",function(U){U.preventDefault(),F.startMoving(this,R,m,U)},!1),b.toast.addEventListener("mouseup",function(U){U.preventDefault(),F.stopMoving(this,U)},!1))),m.closeOnEscape&&document.addEventListener("keyup",function(U){U=U||window.event,U.keyCode==27&&R.hide(m,b.toast,"esc")}),m.closeOnClick&&b.toast.addEventListener("click",function(U){R.hide(m,b.toast,"toast")}),R.toast=b.toast},s})})(qa);var Rp=qa.exports;const _m=Cp(Rp);function Wa(t,e){return function(){return t.apply(e,arguments)}}const{toString:Ap}=Object.prototype,{getPrototypeOf:Li}=Object,{iterator:yr,toStringTag:za}=Symbol,br=(t=>e=>{const r=Ap.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),je=t=>(t=t.toLowerCase(),e=>br(e)===t),vr=t=>e=>typeof e===t,{isArray:en}=Array,Yt=vr("undefined");function Sn(t){return t!==null&&!Yt(t)&&t.constructor!==null&&!Yt(t.constructor)&&Te(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Va=je("ArrayBuffer");function Op(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Va(t.buffer),e}const Np=vr("string"),Te=vr("function"),Ga=vr("number"),Cn=t=>t!==null&&typeof t=="object",Pp=t=>t===!0||t===!1,tr=t=>{if(br(t)!=="object")return!1;const e=Li(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(za in t)&&!(yr in t)},kp=t=>{if(!Cn(t)||Sn(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},xp=je("Date"),Dp=je("File"),Lp=t=>!!(t&&typeof t.uri<"u"),Up=t=>t&&typeof t.getParts<"u",Mp=je("Blob"),jp=je("FileList"),Bp=t=>Cn(t)&&Te(t.pipe);function Fp(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const go=Fp(),mo=typeof go.FormData<"u"?go.FormData:void 0,Hp=t=>{let e;return t&&(mo&&t instanceof mo||Te(t.append)&&((e=br(t))==="formdata"||e==="object"&&Te(t.toString)&&t.toString()==="[object FormData]"))},$p=je("URLSearchParams"),[qp,Wp,zp,Vp]=["ReadableStream","Request","Response","Headers"].map(je),Gp=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Rn(t,e,{allOwnKeys:r=!1}={}){if(t===null||typeof t>"u")return;let s,o;if(typeof t!="object"&&(t=[t]),en(t))for(s=0,o=t.length;s<o;s++)e.call(null,t[s],s,t);else{if(Sn(t))return;const l=r?Object.getOwnPropertyNames(t):Object.keys(t),h=l.length;let g;for(s=0;s<h;s++)g=l[s],e.call(null,t[g],g,t)}}function Ka(t,e){if(Sn(t))return null;e=e.toLowerCase();const r=Object.keys(t);let s=r.length,o;for(;s-- >0;)if(o=r[s],e===o.toLowerCase())return o;return null}const Tt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ja=t=>!Yt(t)&&t!==Tt;function pi(){const{caseless:t,skipUndefined:e}=Ja(this)&&this||{},r={},s=(o,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const h=t&&Ka(r,l)||l;tr(r[h])&&tr(o)?r[h]=pi(r[h],o):tr(o)?r[h]=pi({},o):en(o)?r[h]=o.slice():(!e||!Yt(o))&&(r[h]=o)};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&Rn(arguments[o],s);return r}const Kp=(t,e,r,{allOwnKeys:s}={})=>(Rn(e,(o,l)=>{r&&Te(o)?Object.defineProperty(t,l,{value:Wa(o,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,l,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:s}),t),Jp=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Xp=(t,e,r,s)=>{t.prototype=Object.create(e.prototype,s),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},Yp=(t,e,r,s)=>{let o,l,h;const g={};if(e=e||{},t==null)return e;do{for(o=Object.getOwnPropertyNames(t),l=o.length;l-- >0;)h=o[l],(!s||s(h,t,e))&&!g[h]&&(e[h]=t[h],g[h]=!0);t=r!==!1&&Li(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},Qp=(t,e,r)=>{t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;const s=t.indexOf(e,r);return s!==-1&&s===r},Zp=t=>{if(!t)return null;if(en(t))return t;let e=t.length;if(!Ga(e))return null;const r=new Array(e);for(;e-- >0;)r[e]=t[e];return r},eg=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Li(Uint8Array)),tg=(t,e)=>{const s=(t&&t[yr]).call(t);let o;for(;(o=s.next())&&!o.done;){const l=o.value;e.call(t,l[0],l[1])}},ng=(t,e)=>{let r;const s=[];for(;(r=t.exec(e))!==null;)s.push(r);return s},rg=je("HTMLFormElement"),ig=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,s,o){return s.toUpperCase()+o}),yo=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),sg=je("RegExp"),Xa=(t,e)=>{const r=Object.getOwnPropertyDescriptors(t),s={};Rn(r,(o,l)=>{let h;(h=e(o,l,t))!==!1&&(s[l]=h||o)}),Object.defineProperties(t,s)},og=t=>{Xa(t,(e,r)=>{if(Te(t)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const s=t[r];if(Te(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},ag=(t,e)=>{const r={},s=o=>{o.forEach(l=>{r[l]=!0})};return en(t)?s(t):s(String(t).split(e)),r},cg=()=>{},ug=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function lg(t){return!!(t&&Te(t.append)&&t[za]==="FormData"&&t[yr])}const fg=t=>{const e=new Array(10),r=(s,o)=>{if(Cn(s)){if(e.indexOf(s)>=0)return;if(Sn(s))return s;if(!("toJSON"in s)){e[o]=s;const l=en(s)?[]:{};return Rn(s,(h,g)=>{const w=r(h,o+1);!Yt(w)&&(l[g]=w)}),e[o]=void 0,l}}return s};return r(t,0)},dg=je("AsyncFunction"),hg=t=>t&&(Cn(t)||Te(t))&&Te(t.then)&&Te(t.catch),Ya=((t,e)=>t?setImmediate:e?((r,s)=>(Tt.addEventListener("message",({source:o,data:l})=>{o===Tt&&l===r&&s.length&&s.shift()()},!1),o=>{s.push(o),Tt.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Te(Tt.postMessage)),pg=typeof queueMicrotask<"u"?queueMicrotask.bind(Tt):typeof process<"u"&&process.nextTick||Ya,gg=t=>t!=null&&Te(t[yr]),N={isArray:en,isArrayBuffer:Va,isBuffer:Sn,isFormData:Hp,isArrayBufferView:Op,isString:Np,isNumber:Ga,isBoolean:Pp,isObject:Cn,isPlainObject:tr,isEmptyObject:kp,isReadableStream:qp,isRequest:Wp,isResponse:zp,isHeaders:Vp,isUndefined:Yt,isDate:xp,isFile:Dp,isReactNativeBlob:Lp,isReactNative:Up,isBlob:Mp,isRegExp:sg,isFunction:Te,isStream:Bp,isURLSearchParams:$p,isTypedArray:eg,isFileList:jp,forEach:Rn,merge:pi,extend:Kp,trim:Gp,stripBOM:Jp,inherits:Xp,toFlatObject:Yp,kindOf:br,kindOfTest:je,endsWith:Qp,toArray:Zp,forEachEntry:tg,matchAll:ng,isHTMLForm:rg,hasOwnProperty:yo,hasOwnProp:yo,reduceDescriptors:Xa,freezeMethods:og,toObjectSet:ag,toCamelCase:ig,noop:cg,toFiniteNumber:ug,findKey:Ka,global:Tt,isContextDefined:Ja,isSpecCompliantForm:lg,toJSONObject:fg,isAsyncFn:dg,isThenable:hg,setImmediate:Ya,asap:pg,isIterable:gg};class G extends Error{static from(e,r,s,o,l,h){const g=new G(e.message,r||e.code,s,o,l);return g.cause=e,g.name=e.name,e.status!=null&&g.status==null&&(g.status=e.status),h&&Object.assign(g,h),g}constructor(e,r,s,o,l){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),s&&(this.config=s),o&&(this.request=o),l&&(this.response=l,this.status=l.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.status}}}G.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";G.ERR_BAD_OPTION="ERR_BAD_OPTION";G.ECONNABORTED="ECONNABORTED";G.ETIMEDOUT="ETIMEDOUT";G.ERR_NETWORK="ERR_NETWORK";G.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";G.ERR_DEPRECATED="ERR_DEPRECATED";G.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";G.ERR_BAD_REQUEST="ERR_BAD_REQUEST";G.ERR_CANCELED="ERR_CANCELED";G.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";G.ERR_INVALID_URL="ERR_INVALID_URL";const mg=null;function gi(t){return N.isPlainObject(t)||N.isArray(t)}function Qa(t){return N.endsWith(t,"[]")?t.slice(0,-2):t}function ei(t,e,r){return t?t.concat(e).map(function(o,l){return o=Qa(o),!r&&l?"["+o+"]":o}).join(r?".":""):e}function yg(t){return N.isArray(t)&&!t.some(gi)}const bg=N.toFlatObject(N,{},null,function(e){return/^is[A-Z]/.test(e)});function wr(t,e,r){if(!N.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,r=N.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function($,_){return!N.isUndefined(_[$])});const s=r.metaTokens,o=r.visitor||A,l=r.dots,h=r.indexes,w=(r.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(e);if(!N.isFunction(o))throw new TypeError("visitor must be a function");function E(D){if(D===null)return"";if(N.isDate(D))return D.toISOString();if(N.isBoolean(D))return D.toString();if(!w&&N.isBlob(D))throw new G("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(D)||N.isTypedArray(D)?w&&typeof Blob=="function"?new Blob([D]):Buffer.from(D):D}function A(D,$,_){let k=D;if(N.isReactNative(e)&&N.isReactNativeBlob(D))return e.append(ei(_,$,l),E(D)),!1;if(D&&!_&&typeof D=="object"){if(N.endsWith($,"{}"))$=s?$:$.slice(0,-2),D=JSON.stringify(D);else if(N.isArray(D)&&yg(D)||(N.isFileList(D)||N.endsWith($,"[]"))&&(k=N.toArray(D)))return $=Qa($),k.forEach(function(B,j){!(N.isUndefined(B)||B===null)&&e.append(h===!0?ei([$],j,l):h===null?$:$+"[]",E(B))}),!1}return gi(D)?!0:(e.append(ei(_,$,l),E(D)),!1)}const O=[],L=Object.assign(bg,{defaultVisitor:A,convertValue:E,isVisitable:gi});function S(D,$){if(!N.isUndefined(D)){if(O.indexOf(D)!==-1)throw Error("Circular reference detected in "+$.join("."));O.push(D),N.forEach(D,function(k,M){(!(N.isUndefined(k)||k===null)&&o.call(e,k,N.isString(M)?M.trim():M,$,L))===!0&&S(k,$?$.concat(M):[M])}),O.pop()}}if(!N.isObject(t))throw new TypeError("data must be an object");return S(t),e}function bo(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function Ui(t,e){this._pairs=[],t&&wr(t,this,e)}const Za=Ui.prototype;Za.append=function(e,r){this._pairs.push([e,r])};Za.toString=function(e){const r=e?function(s){return e.call(this,s,bo)}:bo;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function vg(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function ec(t,e,r){if(!e)return t;const s=r&&r.encode||vg,o=N.isFunction(r)?{serialize:r}:r,l=o&&o.serialize;let h;if(l?h=l(e,o):h=N.isURLSearchParams(e)?e.toString():new Ui(e,o).toString(s),h){const g=t.indexOf("#");g!==-1&&(t=t.slice(0,g)),t+=(t.indexOf("?")===-1?"?":"&")+h}return t}class vo{constructor(){this.handlers=[]}use(e,r,s){return this.handlers.push({fulfilled:e,rejected:r,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){N.forEach(this.handlers,function(s){s!==null&&e(s)})}}const Mi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},wg=typeof URLSearchParams<"u"?URLSearchParams:Ui,_g=typeof FormData<"u"?FormData:null,Tg=typeof Blob<"u"?Blob:null,Eg={isBrowser:!0,classes:{URLSearchParams:wg,FormData:_g,Blob:Tg},protocols:["http","https","file","blob","url","data"]},ji=typeof window<"u"&&typeof document<"u",mi=typeof navigator=="object"&&navigator||void 0,Ig=ji&&(!mi||["ReactNative","NativeScript","NS"].indexOf(mi.product)<0),Sg=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Cg=ji&&window.location.href||"http://localhost",Rg=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ji,hasStandardBrowserEnv:Ig,hasStandardBrowserWebWorkerEnv:Sg,navigator:mi,origin:Cg},Symbol.toStringTag,{value:"Module"})),ge={...Rg,...Eg};function Ag(t,e){return wr(t,new ge.classes.URLSearchParams,{visitor:function(r,s,o,l){return ge.isNode&&N.isBuffer(r)?(this.append(s,r.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...e})}function Og(t){return N.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ng(t){const e={},r=Object.keys(t);let s;const o=r.length;let l;for(s=0;s<o;s++)l=r[s],e[l]=t[l];return e}function tc(t){function e(r,s,o,l){let h=r[l++];if(h==="__proto__")return!0;const g=Number.isFinite(+h),w=l>=r.length;return h=!h&&N.isArray(o)?o.length:h,w?(N.hasOwnProp(o,h)?o[h]=[o[h],s]:o[h]=s,!g):((!o[h]||!N.isObject(o[h]))&&(o[h]=[]),e(r,s,o[h],l)&&N.isArray(o[h])&&(o[h]=Ng(o[h])),!g)}if(N.isFormData(t)&&N.isFunction(t.entries)){const r={};return N.forEachEntry(t,(s,o)=>{e(Og(s),o,r,0)}),r}return null}function Pg(t,e,r){if(N.isString(t))try{return(e||JSON.parse)(t),N.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(t)}const An={transitional:Mi,adapter:["xhr","http","fetch"],transformRequest:[function(e,r){const s=r.getContentType()||"",o=s.indexOf("application/json")>-1,l=N.isObject(e);if(l&&N.isHTMLForm(e)&&(e=new FormData(e)),N.isFormData(e))return o?JSON.stringify(tc(e)):e;if(N.isArrayBuffer(e)||N.isBuffer(e)||N.isStream(e)||N.isFile(e)||N.isBlob(e)||N.isReadableStream(e))return e;if(N.isArrayBufferView(e))return e.buffer;if(N.isURLSearchParams(e))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let g;if(l){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Ag(e,this.formSerializer).toString();if((g=N.isFileList(e))||s.indexOf("multipart/form-data")>-1){const w=this.env&&this.env.FormData;return wr(g?{"files[]":e}:e,w&&new w,this.formSerializer)}}return l||o?(r.setContentType("application/json",!1),Pg(e)):e}],transformResponse:[function(e){const r=this.transitional||An.transitional,s=r&&r.forcedJSONParsing,o=this.responseType==="json";if(N.isResponse(e)||N.isReadableStream(e))return e;if(e&&N.isString(e)&&(s&&!this.responseType||o)){const h=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(e,this.parseReviver)}catch(g){if(h)throw g.name==="SyntaxError"?G.from(g,G.ERR_BAD_RESPONSE,this,null,this.response):g}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ge.classes.FormData,Blob:ge.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],t=>{An.headers[t]={}});const kg=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),xg=t=>{const e={};let r,s,o;return t&&t.split(`
`).forEach(function(h){o=h.indexOf(":"),r=h.substring(0,o).trim().toLowerCase(),s=h.substring(o+1).trim(),!(!r||e[r]&&kg[r])&&(r==="set-cookie"?e[r]?e[r].push(s):e[r]=[s]:e[r]=e[r]?e[r]+", "+s:s)}),e},wo=Symbol("internals");function ln(t){return t&&String(t).trim().toLowerCase()}function nr(t){return t===!1||t==null?t:N.isArray(t)?t.map(nr):String(t)}function Dg(t){const e=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=r.exec(t);)e[s[1]]=s[2];return e}const Lg=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ti(t,e,r,s,o){if(N.isFunction(s))return s.call(this,e,r);if(o&&(e=r),!!N.isString(e)){if(N.isString(s))return e.indexOf(s)!==-1;if(N.isRegExp(s))return s.test(e)}}function Ug(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,r,s)=>r.toUpperCase()+s)}function Mg(t,e){const r=N.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+r,{value:function(o,l,h){return this[s].call(this,e,o,l,h)},configurable:!0})})}class Ee{constructor(e){e&&this.set(e)}set(e,r,s){const o=this;function l(g,w,E){const A=ln(w);if(!A)throw new Error("header name must be a non-empty string");const O=N.findKey(o,A);(!O||o[O]===void 0||E===!0||E===void 0&&o[O]!==!1)&&(o[O||w]=nr(g))}const h=(g,w)=>N.forEach(g,(E,A)=>l(E,A,w));if(N.isPlainObject(e)||e instanceof this.constructor)h(e,r);else if(N.isString(e)&&(e=e.trim())&&!Lg(e))h(xg(e),r);else if(N.isObject(e)&&N.isIterable(e)){let g={},w,E;for(const A of e){if(!N.isArray(A))throw TypeError("Object iterator must return a key-value pair");g[E=A[0]]=(w=g[E])?N.isArray(w)?[...w,A[1]]:[w,A[1]]:A[1]}h(g,r)}else e!=null&&l(r,e,s);return this}get(e,r){if(e=ln(e),e){const s=N.findKey(this,e);if(s){const o=this[s];if(!r)return o;if(r===!0)return Dg(o);if(N.isFunction(r))return r.call(this,o,s);if(N.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,r){if(e=ln(e),e){const s=N.findKey(this,e);return!!(s&&this[s]!==void 0&&(!r||ti(this,this[s],s,r)))}return!1}delete(e,r){const s=this;let o=!1;function l(h){if(h=ln(h),h){const g=N.findKey(s,h);g&&(!r||ti(s,s[g],g,r))&&(delete s[g],o=!0)}}return N.isArray(e)?e.forEach(l):l(e),o}clear(e){const r=Object.keys(this);let s=r.length,o=!1;for(;s--;){const l=r[s];(!e||ti(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const r=this,s={};return N.forEach(this,(o,l)=>{const h=N.findKey(s,l);if(h){r[h]=nr(o),delete r[l];return}const g=e?Ug(l):String(l).trim();g!==l&&delete r[l],r[g]=nr(o),s[g]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const r=Object.create(null);return N.forEach(this,(s,o)=>{s!=null&&s!==!1&&(r[o]=e&&N.isArray(s)?s.join(", "):s)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,r])=>e+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...r){const s=new this(e);return r.forEach(o=>s.set(o)),s}static accessor(e){const s=(this[wo]=this[wo]={accessors:{}}).accessors,o=this.prototype;function l(h){const g=ln(h);s[g]||(Mg(o,h),s[g]=!0)}return N.isArray(e)?e.forEach(l):l(e),this}}Ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(Ee.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[r]=s}}});N.freezeMethods(Ee);function ni(t,e){const r=this||An,s=e||r,o=Ee.from(s.headers);let l=s.data;return N.forEach(t,function(g){l=g.call(r,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function nc(t){return!!(t&&t.__CANCEL__)}class On extends G{constructor(e,r,s){super(e??"canceled",G.ERR_CANCELED,r,s),this.name="CanceledError",this.__CANCEL__=!0}}function rc(t,e,r){const s=r.config.validateStatus;!r.status||!s||s(r.status)?t(r):e(new G("Request failed with status code "+r.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function jg(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Bg(t,e){t=t||10;const r=new Array(t),s=new Array(t);let o=0,l=0,h;return e=e!==void 0?e:1e3,function(w){const E=Date.now(),A=s[l];h||(h=E),r[o]=w,s[o]=E;let O=l,L=0;for(;O!==o;)L+=r[O++],O=O%t;if(o=(o+1)%t,o===l&&(l=(l+1)%t),E-h<e)return;const S=A&&E-A;return S?Math.round(L*1e3/S):void 0}}function Fg(t,e){let r=0,s=1e3/e,o,l;const h=(E,A=Date.now())=>{r=A,o=null,l&&(clearTimeout(l),l=null),t(...E)};return[(...E)=>{const A=Date.now(),O=A-r;O>=s?h(E,A):(o=E,l||(l=setTimeout(()=>{l=null,h(o)},s-O)))},()=>o&&h(o)]}const dr=(t,e,r=3)=>{let s=0;const o=Bg(50,250);return Fg(l=>{const h=l.loaded,g=l.lengthComputable?l.total:void 0,w=h-s,E=o(w),A=h<=g;s=h;const O={loaded:h,total:g,progress:g?h/g:void 0,bytes:w,rate:E||void 0,estimated:E&&g&&A?(g-h)/E:void 0,event:l,lengthComputable:g!=null,[e?"download":"upload"]:!0};t(O)},r)},_o=(t,e)=>{const r=t!=null;return[s=>e[0]({lengthComputable:r,total:t,loaded:s}),e[1]]},To=t=>(...e)=>N.asap(()=>t(...e)),Hg=ge.hasStandardBrowserEnv?((t,e)=>r=>(r=new URL(r,ge.origin),t.protocol===r.protocol&&t.host===r.host&&(e||t.port===r.port)))(new URL(ge.origin),ge.navigator&&/(msie|trident)/i.test(ge.navigator.userAgent)):()=>!0,$g=ge.hasStandardBrowserEnv?{write(t,e,r,s,o,l,h){if(typeof document>"u")return;const g=[`${t}=${encodeURIComponent(e)}`];N.isNumber(r)&&g.push(`expires=${new Date(r).toUTCString()}`),N.isString(s)&&g.push(`path=${s}`),N.isString(o)&&g.push(`domain=${o}`),l===!0&&g.push("secure"),N.isString(h)&&g.push(`SameSite=${h}`),document.cookie=g.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function qg(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Wg(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function ic(t,e,r){let s=!qg(e);return t&&(s||r==!1)?Wg(t,e):e}const Eo=t=>t instanceof Ee?{...t}:t;function Nt(t,e){e=e||{};const r={};function s(E,A,O,L){return N.isPlainObject(E)&&N.isPlainObject(A)?N.merge.call({caseless:L},E,A):N.isPlainObject(A)?N.merge({},A):N.isArray(A)?A.slice():A}function o(E,A,O,L){if(N.isUndefined(A)){if(!N.isUndefined(E))return s(void 0,E,O,L)}else return s(E,A,O,L)}function l(E,A){if(!N.isUndefined(A))return s(void 0,A)}function h(E,A){if(N.isUndefined(A)){if(!N.isUndefined(E))return s(void 0,E)}else return s(void 0,A)}function g(E,A,O){if(O in e)return s(E,A);if(O in t)return s(void 0,E)}const w={url:l,method:l,data:l,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:g,headers:(E,A,O)=>o(Eo(E),Eo(A),O,!0)};return N.forEach(Object.keys({...t,...e}),function(A){if(A==="__proto__"||A==="constructor"||A==="prototype")return;const O=N.hasOwnProp(w,A)?w[A]:o,L=O(t[A],e[A],A);N.isUndefined(L)&&O!==g||(r[A]=L)}),r}const sc=t=>{const e=Nt({},t);let{data:r,withXSRFToken:s,xsrfHeaderName:o,xsrfCookieName:l,headers:h,auth:g}=e;if(e.headers=h=Ee.from(h),e.url=ec(ic(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),g&&h.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):""))),N.isFormData(r)){if(ge.hasStandardBrowserEnv||ge.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if(N.isFunction(r.getHeaders)){const w=r.getHeaders(),E=["content-type","content-length"];Object.entries(w).forEach(([A,O])=>{E.includes(A.toLowerCase())&&h.set(A,O)})}}if(ge.hasStandardBrowserEnv&&(s&&N.isFunction(s)&&(s=s(e)),s||s!==!1&&Hg(e.url))){const w=o&&l&&$g.read(l);w&&h.set(o,w)}return e},zg=typeof XMLHttpRequest<"u",Vg=zg&&function(t){return new Promise(function(r,s){const o=sc(t);let l=o.data;const h=Ee.from(o.headers).normalize();let{responseType:g,onUploadProgress:w,onDownloadProgress:E}=o,A,O,L,S,D;function $(){S&&S(),D&&D(),o.cancelToken&&o.cancelToken.unsubscribe(A),o.signal&&o.signal.removeEventListener("abort",A)}let _=new XMLHttpRequest;_.open(o.method.toUpperCase(),o.url,!0),_.timeout=o.timeout;function k(){if(!_)return;const B=Ee.from("getAllResponseHeaders"in _&&_.getAllResponseHeaders()),F={data:!g||g==="text"||g==="json"?_.responseText:_.response,status:_.status,statusText:_.statusText,headers:B,config:t,request:_};rc(function(R){r(R),$()},function(R){s(R),$()},F),_=null}"onloadend"in _?_.onloadend=k:_.onreadystatechange=function(){!_||_.readyState!==4||_.status===0&&!(_.responseURL&&_.responseURL.indexOf("file:")===0)||setTimeout(k)},_.onabort=function(){_&&(s(new G("Request aborted",G.ECONNABORTED,t,_)),_=null)},_.onerror=function(j){const F=j&&j.message?j.message:"Network Error",c=new G(F,G.ERR_NETWORK,t,_);c.event=j||null,s(c),_=null},_.ontimeout=function(){let j=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const F=o.transitional||Mi;o.timeoutErrorMessage&&(j=o.timeoutErrorMessage),s(new G(j,F.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,t,_)),_=null},l===void 0&&h.setContentType(null),"setRequestHeader"in _&&N.forEach(h.toJSON(),function(j,F){_.setRequestHeader(F,j)}),N.isUndefined(o.withCredentials)||(_.withCredentials=!!o.withCredentials),g&&g!=="json"&&(_.responseType=o.responseType),E&&([L,D]=dr(E,!0),_.addEventListener("progress",L)),w&&_.upload&&([O,S]=dr(w),_.upload.addEventListener("progress",O),_.upload.addEventListener("loadend",S)),(o.cancelToken||o.signal)&&(A=B=>{_&&(s(!B||B.type?new On(null,t,_):B),_.abort(),_=null)},o.cancelToken&&o.cancelToken.subscribe(A),o.signal&&(o.signal.aborted?A():o.signal.addEventListener("abort",A)));const M=jg(o.url);if(M&&ge.protocols.indexOf(M)===-1){s(new G("Unsupported protocol "+M+":",G.ERR_BAD_REQUEST,t));return}_.send(l||null)})},Gg=(t,e)=>{const{length:r}=t=t?t.filter(Boolean):[];if(e||r){let s=new AbortController,o;const l=function(E){if(!o){o=!0,g();const A=E instanceof Error?E:this.reason;s.abort(A instanceof G?A:new On(A instanceof Error?A.message:A))}};let h=e&&setTimeout(()=>{h=null,l(new G(`timeout of ${e}ms exceeded`,G.ETIMEDOUT))},e);const g=()=>{t&&(h&&clearTimeout(h),h=null,t.forEach(E=>{E.unsubscribe?E.unsubscribe(l):E.removeEventListener("abort",l)}),t=null)};t.forEach(E=>E.addEventListener("abort",l));const{signal:w}=s;return w.unsubscribe=()=>N.asap(g),w}},Kg=function*(t,e){let r=t.byteLength;if(r<e){yield t;return}let s=0,o;for(;s<r;)o=s+e,yield t.slice(s,o),s=o},Jg=async function*(t,e){for await(const r of Xg(t))yield*Kg(r,e)},Xg=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:r,value:s}=await e.read();if(r)break;yield s}}finally{await e.cancel()}},Io=(t,e,r,s)=>{const o=Jg(t,e);let l=0,h,g=w=>{h||(h=!0,s&&s(w))};return new ReadableStream({async pull(w){try{const{done:E,value:A}=await o.next();if(E){g(),w.close();return}let O=A.byteLength;if(r){let L=l+=O;r(L)}w.enqueue(new Uint8Array(A))}catch(E){throw g(E),E}},cancel(w){return g(w),o.return()}},{highWaterMark:2})},So=64*1024,{isFunction:Xn}=N,Yg=(({Request:t,Response:e})=>({Request:t,Response:e}))(N.global),{ReadableStream:Co,TextEncoder:Ro}=N.global,Ao=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Qg=t=>{t=N.merge.call({skipUndefined:!0},Yg,t);const{fetch:e,Request:r,Response:s}=t,o=e?Xn(e):typeof fetch=="function",l=Xn(r),h=Xn(s);if(!o)return!1;const g=o&&Xn(Co),w=o&&(typeof Ro=="function"?(D=>$=>D.encode($))(new Ro):async D=>new Uint8Array(await new r(D).arrayBuffer())),E=l&&g&&Ao(()=>{let D=!1;const $=new r(ge.origin,{body:new Co,method:"POST",get duplex(){return D=!0,"half"}}).headers.has("Content-Type");return D&&!$}),A=h&&g&&Ao(()=>N.isReadableStream(new s("").body)),O={stream:A&&(D=>D.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(D=>{!O[D]&&(O[D]=($,_)=>{let k=$&&$[D];if(k)return k.call($);throw new G(`Response type '${D}' is not supported`,G.ERR_NOT_SUPPORT,_)})});const L=async D=>{if(D==null)return 0;if(N.isBlob(D))return D.size;if(N.isSpecCompliantForm(D))return(await new r(ge.origin,{method:"POST",body:D}).arrayBuffer()).byteLength;if(N.isArrayBufferView(D)||N.isArrayBuffer(D))return D.byteLength;if(N.isURLSearchParams(D)&&(D=D+""),N.isString(D))return(await w(D)).byteLength},S=async(D,$)=>{const _=N.toFiniteNumber(D.getContentLength());return _??L($)};return async D=>{let{url:$,method:_,data:k,signal:M,cancelToken:B,timeout:j,onDownloadProgress:F,onUploadProgress:c,responseType:R,headers:m,withCredentials:b="same-origin",fetchOptions:H}=sc(D),W=e||fetch;R=R?(R+"").toLowerCase():"text";let U=Gg([M,B&&B.toAbortSignal()],j),q=null;const J=U&&U.unsubscribe&&(()=>{U.unsubscribe()});let Q;try{if(c&&E&&_!=="get"&&_!=="head"&&(Q=await S(m,k))!==0){let be=new r($,{method:"POST",body:k,duplex:"half"}),Re;if(N.isFormData(k)&&(Re=be.headers.get("content-type"))&&m.setContentType(Re),be.body){const[ie,ke]=_o(Q,dr(To(c)));k=Io(be.body,So,ie,ke)}}N.isString(b)||(b=b?"include":"omit");const te=l&&"credentials"in r.prototype,de={...H,signal:U,method:_.toUpperCase(),headers:m.normalize().toJSON(),body:k,duplex:"half",credentials:te?b:void 0};q=l&&new r($,de);let he=await(l?W(q,H):W($,de));const Be=A&&(R==="stream"||R==="response");if(A&&(F||Be&&J)){const be={};["status","statusText","headers"].forEach(yt=>{be[yt]=he[yt]});const Re=N.toFiniteNumber(he.headers.get("content-length")),[ie,ke]=F&&_o(Re,dr(To(F),!0))||[];he=new s(Io(he.body,So,ie,()=>{ke&&ke(),J&&J()}),be)}R=R||"text";let nt=await O[N.findKey(O,R)||"text"](he,D);return!Be&&J&&J(),await new Promise((be,Re)=>{rc(be,Re,{data:nt,headers:Ee.from(he.headers),status:he.status,statusText:he.statusText,config:D,request:q})})}catch(te){throw J&&J(),te&&te.name==="TypeError"&&/Load failed|fetch/i.test(te.message)?Object.assign(new G("Network Error",G.ERR_NETWORK,D,q,te&&te.response),{cause:te.cause||te}):G.from(te,te&&te.code,D,q,te&&te.response)}}},Zg=new Map,oc=t=>{let e=t&&t.env||{};const{fetch:r,Request:s,Response:o}=e,l=[s,o,r];let h=l.length,g=h,w,E,A=Zg;for(;g--;)w=l[g],E=A.get(w),E===void 0&&A.set(w,E=g?new Map:Qg(e)),A=E;return E};oc();const Bi={http:mg,xhr:Vg,fetch:{get:oc}};N.forEach(Bi,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Oo=t=>`- ${t}`,em=t=>N.isFunction(t)||t===null||t===!1;function tm(t,e){t=N.isArray(t)?t:[t];const{length:r}=t;let s,o;const l={};for(let h=0;h<r;h++){s=t[h];let g;if(o=s,!em(s)&&(o=Bi[(g=String(s)).toLowerCase()],o===void 0))throw new G(`Unknown adapter '${g}'`);if(o&&(N.isFunction(o)||(o=o.get(e))))break;l[g||"#"+h]=o}if(!o){const h=Object.entries(l).map(([w,E])=>`adapter ${w} `+(E===!1?"is not supported by the environment":"is not available in the build"));let g=r?h.length>1?`since :
`+h.map(Oo).join(`
`):" "+Oo(h[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+g,"ERR_NOT_SUPPORT")}return o}const ac={getAdapter:tm,adapters:Bi};function ri(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new On(null,t)}function No(t){return ri(t),t.headers=Ee.from(t.headers),t.data=ni.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ac.getAdapter(t.adapter||An.adapter,t)(t).then(function(s){return ri(t),s.data=ni.call(t,t.transformResponse,s),s.headers=Ee.from(s.headers),s},function(s){return nc(s)||(ri(t),s&&s.response&&(s.response.data=ni.call(t,t.transformResponse,s.response),s.response.headers=Ee.from(s.response.headers))),Promise.reject(s)})}const cc="1.13.6",_r={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{_r[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const Po={};_r.transitional=function(e,r,s){function o(l,h){return"[Axios v"+cc+"] Transitional option '"+l+"'"+h+(s?". "+s:"")}return(l,h,g)=>{if(e===!1)throw new G(o(h," has been removed"+(r?" in "+r:"")),G.ERR_DEPRECATED);return r&&!Po[h]&&(Po[h]=!0,console.warn(o(h," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(l,h,g):!0}};_r.spelling=function(e){return(r,s)=>(console.warn(`${s} is likely a misspelling of ${e}`),!0)};function nm(t,e,r){if(typeof t!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let o=s.length;for(;o-- >0;){const l=s[o],h=e[l];if(h){const g=t[l],w=g===void 0||h(g,l,t);if(w!==!0)throw new G("option "+l+" must be "+w,G.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new G("Unknown option "+l,G.ERR_BAD_OPTION)}}const rr={assertOptions:nm,validators:_r},Ne=rr.validators;class It{constructor(e){this.defaults=e||{},this.interceptors={request:new vo,response:new vo}}async request(e,r){try{return await this._request(e,r)}catch(s){if(s instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack?o.stack.replace(/^.+\n/,""):"";try{s.stack?l&&!String(s.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+l):s.stack=l}catch{}}throw s}}_request(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=Nt(this.defaults,r);const{transitional:s,paramsSerializer:o,headers:l}=r;s!==void 0&&rr.assertOptions(s,{silentJSONParsing:Ne.transitional(Ne.boolean),forcedJSONParsing:Ne.transitional(Ne.boolean),clarifyTimeoutError:Ne.transitional(Ne.boolean),legacyInterceptorReqResOrdering:Ne.transitional(Ne.boolean)},!1),o!=null&&(N.isFunction(o)?r.paramsSerializer={serialize:o}:rr.assertOptions(o,{encode:Ne.function,serialize:Ne.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),rr.assertOptions(r,{baseUrl:Ne.spelling("baseURL"),withXsrfToken:Ne.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let h=l&&N.merge(l.common,l[r.method]);l&&N.forEach(["delete","get","head","post","put","patch","common"],D=>{delete l[D]}),r.headers=Ee.concat(h,l);const g=[];let w=!0;this.interceptors.request.forEach(function($){if(typeof $.runWhen=="function"&&$.runWhen(r)===!1)return;w=w&&$.synchronous;const _=r.transitional||Mi;_&&_.legacyInterceptorReqResOrdering?g.unshift($.fulfilled,$.rejected):g.push($.fulfilled,$.rejected)});const E=[];this.interceptors.response.forEach(function($){E.push($.fulfilled,$.rejected)});let A,O=0,L;if(!w){const D=[No.bind(this),void 0];for(D.unshift(...g),D.push(...E),L=D.length,A=Promise.resolve(r);O<L;)A=A.then(D[O++],D[O++]);return A}L=g.length;let S=r;for(;O<L;){const D=g[O++],$=g[O++];try{S=D(S)}catch(_){$.call(this,_);break}}try{A=No.call(this,S)}catch(D){return Promise.reject(D)}for(O=0,L=E.length;O<L;)A=A.then(E[O++],E[O++]);return A}getUri(e){e=Nt(this.defaults,e);const r=ic(e.baseURL,e.url,e.allowAbsoluteUrls);return ec(r,e.params,e.paramsSerializer)}}N.forEach(["delete","get","head","options"],function(e){It.prototype[e]=function(r,s){return this.request(Nt(s||{},{method:e,url:r,data:(s||{}).data}))}});N.forEach(["post","put","patch"],function(e){function r(s){return function(l,h,g){return this.request(Nt(g||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:l,data:h}))}}It.prototype[e]=r(),It.prototype[e+"Form"]=r(!0)});class Fi{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(l){r=l});const s=this;this.promise.then(o=>{if(!s._listeners)return;let l=s._listeners.length;for(;l-- >0;)s._listeners[l](o);s._listeners=null}),this.promise.then=o=>{let l;const h=new Promise(g=>{s.subscribe(g),l=g}).then(o);return h.cancel=function(){s.unsubscribe(l)},h},e(function(l,h,g){s.reason||(s.reason=new On(l,h,g),r(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const e=new AbortController,r=s=>{e.abort(s)};return this.subscribe(r),e.signal.unsubscribe=()=>this.unsubscribe(r),e.signal}static source(){let e;return{token:new Fi(function(o){e=o}),cancel:e}}}function rm(t){return function(r){return t.apply(null,r)}}function im(t){return N.isObject(t)&&t.isAxiosError===!0}const yi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(yi).forEach(([t,e])=>{yi[e]=t});function uc(t){const e=new It(t),r=Wa(It.prototype.request,e);return N.extend(r,It.prototype,e,{allOwnKeys:!0}),N.extend(r,e,null,{allOwnKeys:!0}),r.create=function(o){return uc(Nt(t,o))},r}const le=uc(An);le.Axios=It;le.CanceledError=On;le.CancelToken=Fi;le.isCancel=nc;le.VERSION=cc;le.toFormData=wr;le.AxiosError=G;le.Cancel=le.CanceledError;le.all=function(e){return Promise.all(e)};le.spread=rm;le.isAxiosError=im;le.mergeConfig=Nt;le.AxiosHeaders=Ee;le.formToJSON=t=>tc(N.isHTMLForm(t)?new FormData(t):t);le.getAdapter=ac.getAdapter;le.HttpStatusCode=yi;le.default=le;/*!
 * jQuery JavaScript Library v4.0.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.com/license/
 *
 * Date: 2026-01-18T00:20Z
 */function sm(t,e){if(typeof t>"u"||!t.document)throw new Error("jQuery requires a window with a document");var r=[],s=Object.getPrototypeOf,o=r.slice,l=r.flat?function(n){return r.flat.call(n)}:function(n){return r.concat.apply([],n)},h=r.push,g=r.indexOf,w={},E=w.toString,A=w.hasOwnProperty,O=A.toString,L=O.call(Object),S={};function D(n){return n==null?n+"":typeof n=="object"?w[E.call(n)]||"object":typeof n}function $(n){return n!=null&&n===n.window}function _(n){var i=!!n&&n.length,a=D(n);return typeof n=="function"||$(n)?!1:a==="array"||i===0||typeof i=="number"&&i>0&&i-1 in n}var k=t.document,M={type:!0,src:!0,nonce:!0,noModule:!0};function B(n,i,a){a=a||k;var u,f=a.createElement("script");f.text=n;for(u in M)i&&i[u]&&(f[u]=i[u]);a.head.appendChild(f).parentNode&&f.parentNode.removeChild(f)}var j="4.0.0",F=/HTML$/i,c=function(n,i){return new c.fn.init(n,i)};c.fn=c.prototype={jquery:j,constructor:c,length:0,toArray:function(){return o.call(this)},get:function(n){return n==null?o.call(this):n<0?this[n+this.length]:this[n]},pushStack:function(n){var i=c.merge(this.constructor(),n);return i.prevObject=this,i},each:function(n){return c.each(this,n)},map:function(n){return this.pushStack(c.map(this,function(i,a){return n.call(i,a,i)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(c.grep(this,function(n,i){return(i+1)%2}))},odd:function(){return this.pushStack(c.grep(this,function(n,i){return i%2}))},eq:function(n){var i=this.length,a=+n+(n<0?i:0);return this.pushStack(a>=0&&a<i?[this[a]]:[])},end:function(){return this.prevObject||this.constructor()}},c.extend=c.fn.extend=function(){var n,i,a,u,f,d,p=arguments[0]||{},v=1,y=arguments.length,T=!1;for(typeof p=="boolean"&&(T=p,p=arguments[v]||{},v++),typeof p!="object"&&typeof p!="function"&&(p={}),v===y&&(p=this,v--);v<y;v++)if((n=arguments[v])!=null)for(i in n)u=n[i],!(i==="__proto__"||p===u)&&(T&&u&&(c.isPlainObject(u)||(f=Array.isArray(u)))?(a=p[i],f&&!Array.isArray(a)?d=[]:!f&&!c.isPlainObject(a)?d={}:d=a,f=!1,p[i]=c.extend(T,d,u)):u!==void 0&&(p[i]=u));return p},c.extend({expando:"jQuery"+(j+Math.random()).replace(/\D/g,""),isReady:!0,error:function(n){throw new Error(n)},noop:function(){},isPlainObject:function(n){var i,a;return!n||E.call(n)!=="[object Object]"?!1:(i=s(n),i?(a=A.call(i,"constructor")&&i.constructor,typeof a=="function"&&O.call(a)===L):!0)},isEmptyObject:function(n){var i;for(i in n)return!1;return!0},globalEval:function(n,i,a){B(n,{nonce:i&&i.nonce},a)},each:function(n,i){var a,u=0;if(_(n))for(a=n.length;u<a&&i.call(n[u],u,n[u])!==!1;u++);else for(u in n)if(i.call(n[u],u,n[u])===!1)break;return n},text:function(n){var i,a="",u=0,f=n.nodeType;if(!f)for(;i=n[u++];)a+=c.text(i);return f===1||f===11?n.textContent:f===9?n.documentElement.textContent:f===3||f===4?n.nodeValue:a},makeArray:function(n,i){var a=i||[];return n!=null&&(_(Object(n))?c.merge(a,typeof n=="string"?[n]:n):h.call(a,n)),a},inArray:function(n,i,a){return i==null?-1:g.call(i,n,a)},isXMLDoc:function(n){var i=n&&n.namespaceURI,a=n&&(n.ownerDocument||n).documentElement;return!F.test(i||a&&a.nodeName||"HTML")},contains:function(n,i){var a=i&&i.parentNode;return n===a||!!(a&&a.nodeType===1&&(n.contains?n.contains(a):n.compareDocumentPosition&&n.compareDocumentPosition(a)&16))},merge:function(n,i){for(var a=+i.length,u=0,f=n.length;u<a;u++)n[f++]=i[u];return n.length=f,n},grep:function(n,i,a){for(var u,f=[],d=0,p=n.length,v=!a;d<p;d++)u=!i(n[d],d),u!==v&&f.push(n[d]);return f},map:function(n,i,a){var u,f,d=0,p=[];if(_(n))for(u=n.length;d<u;d++)f=i(n[d],d,a),f!=null&&p.push(f);else for(d in n)f=i(n[d],d,a),f!=null&&p.push(f);return l(p)},guid:1,support:S}),typeof Symbol=="function"&&(c.fn[Symbol.iterator]=r[Symbol.iterator]),c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(n,i){w["[object "+i+"]"]=i.toLowerCase()});function R(n,i){return n.nodeName&&n.nodeName.toLowerCase()===i.toLowerCase()}var m=r.pop,b="[\\x20\\t\\r\\n\\f]",H=k.documentMode,W=H&&new RegExp(":enabled|:disabled|\\["+b+"*name"+b+"*="+b+`*(?:''|"")`),U=new RegExp("^"+b+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b+"+$","g"),q="(?:\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",J=new RegExp("^"+b+"*([>+~]|"+b+")"+b+"*"),Q=new RegExp(b+"|>"),te=/[+~]/,de=k.documentElement,he=de.matches||de.msMatchesSelector;function Be(){var n=[];function i(a,u){return n.push(a+" ")>c.expr.cacheLength&&delete i[n.shift()],i[a+" "]=u}return i}function nt(n){return n&&typeof n.getElementsByTagName<"u"&&n}var be="\\["+b+"*("+q+")(?:"+b+"*([*^$|!~]?=)"+b+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+q+"))|)"+b+"*\\]",Re=":("+q+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+be+")*)|.*)\\)|)",ie={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q+"|[*])"),ATTR:new RegExp("^"+be),PSEUDO:new RegExp("^"+Re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+b+"*(even|odd|(([+-]|)(\\d*)n|)"+b+"*(?:([+-]|)"+b+"*(\\d+)|))"+b+"*\\)|)","i")},ke=new RegExp(Re),yt=new RegExp("\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\([^\\r\\n\\f])","g"),Nn=function(n,i){var a="0x"+n.slice(1)-65536;return i||(a<0?String.fromCharCode(a+65536):String.fromCharCode(a>>10|55296,a&1023|56320))};function oe(n){return n.replace(yt,Nn)}function rt(n){c.error("Syntax error, unrecognized expression: "+n)}var Pn=new RegExp("^"+b+"*,"+b+"*"),tn=Be();function it(n,i){var a,u,f,d,p,v,y,T=tn[n+" "];if(T)return i?0:T.slice(0);for(p=n,v=[],y=c.expr.preFilter;p;){(!a||(u=Pn.exec(p)))&&(u&&(p=p.slice(u[0].length)||p),v.push(f=[])),a=!1,(u=J.exec(p))&&(a=u.shift(),f.push({value:a,type:u[0].replace(U," ")}),p=p.slice(a.length));for(d in ie)(u=c.expr.match[d].exec(p))&&(!y[d]||(u=y[d](u)))&&(a=u.shift(),f.push({value:a,type:d,matches:u}),p=p.slice(a.length));if(!a)break}return i?p.length:p?rt(n):tn(n,v).slice(0)}var Tr={ATTR:function(n){return n[1]=oe(n[1]),n[3]=oe(n[3]||n[4]||n[5]||""),n[2]==="~="&&(n[3]=" "+n[3]+" "),n.slice(0,4)},CHILD:function(n){return n[1]=n[1].toLowerCase(),n[1].slice(0,3)==="nth"?(n[3]||rt(n[0]),n[4]=+(n[4]?n[5]+(n[6]||1):2*(n[3]==="even"||n[3]==="odd")),n[5]=+(n[7]+n[8]||n[3]==="odd")):n[3]&&rt(n[0]),n},PSEUDO:function(n){var i,a=!n[6]&&n[2];return ie.CHILD.test(n[0])?null:(n[3]?n[2]=n[4]||n[5]||"":a&&ke.test(a)&&(i=it(a,!0))&&(i=a.indexOf(")",a.length-i)-a.length)&&(n[0]=n[0].slice(0,i),n[2]=a.slice(0,i)),n.slice(0,3))}};function kt(n){for(var i=0,a=n.length,u="";i<a;i++)u+=n[i].value;return u}function Ae(n,i,a,u,f,d,p){var v=0,y=n.length,T=a==null;if(D(a)==="object"){f=!0;for(v in a)Ae(n,i,v,a[v],!0,d,p)}else if(u!==void 0&&(f=!0,typeof u!="function"&&(p=!0),T&&(p?(i.call(n,u),i=null):(T=i,i=function(C,x,I){return T.call(c(C),I)})),i))for(;v<y;v++)i(n[v],a,p?u:u.call(n[v],v,i(n[v],a)));return f?n:T?i.call(n):y?i(n[0],a):d}var Ie=/[^\x20\t\r\n\f]+/g;c.fn.extend({attr:function(n,i){return Ae(this,c.attr,n,i,arguments.length>1)},removeAttr:function(n){return this.each(function(){c.removeAttr(this,n)})}}),c.extend({attr:function(n,i,a){var u,f,d=n.nodeType;if(!(d===3||d===8||d===2)){if(typeof n.getAttribute>"u")return c.prop(n,i,a);if((d!==1||!c.isXMLDoc(n))&&(f=c.attrHooks[i.toLowerCase()]),a!==void 0){if(a===null||a===!1&&i.toLowerCase().indexOf("aria-")!==0){c.removeAttr(n,i);return}return f&&"set"in f&&(u=f.set(n,a,i))!==void 0?u:(n.setAttribute(i,a),a)}return f&&"get"in f&&(u=f.get(n,i))!==null?u:(u=n.getAttribute(i),u??void 0)}},attrHooks:{},removeAttr:function(n,i){var a,u=0,f=i&&i.match(Ie);if(f&&n.nodeType===1)for(;a=f[u++];)n.removeAttribute(a)}}),H&&(c.attrHooks.type={set:function(n,i){if(i==="radio"&&R(n,"input")){var a=n.value;return n.setAttribute("type",i),a&&(n.value=a),i}}});var ze=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Er(n,i){return i?n==="\0"?"�":n.slice(0,-1)+"\\"+n.charCodeAt(n.length-1).toString(16)+" ":"\\"+n}c.escapeSelector=function(n){return(n+"").replace(ze,Er)};var lc=r.sort,fc=r.splice,Ir;function dc(n,i){if(n===i)return Ir=!0,0;var a=!n.compareDocumentPosition-!i.compareDocumentPosition;return a||(a=(n.ownerDocument||n)==(i.ownerDocument||i)?n.compareDocumentPosition(i):1,a&1?n==k||n.ownerDocument==k&&c.contains(k,n)?-1:i==k||i.ownerDocument==k&&c.contains(k,i)?1:0:a&4?-1:1)}c.uniqueSort=function(n){var i,a=[],u=0,f=0;if(Ir=!1,lc.call(n,dc),Ir){for(;i=n[f++];)i===n[f]&&(u=a.push(f));for(;u--;)fc.call(n,a[u],1)}return n},c.fn.uniqueSort=function(){return this.pushStack(c.uniqueSort(o.apply(this)))};var xt,kn,Se,Hi,Ve,Ge=0,hc=0,$i=Be(),qi=Be(),xn=Be(),pc=new RegExp(b+"+","g"),gc=new RegExp("^"+q+"$"),Wi=c.extend({needsContext:new RegExp("^"+b+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b+"*((?:-\\d)?\\d*)"+b+"*\\)|)(?=[^-]|$)","i")},ie),mc=/^(?:input|select|textarea|button)$/i,yc=/^h\d$/i,bc=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,vc=function(){Dt()},wc=Dn(function(n){return n.disabled===!0&&R(n,"fieldset")},{dir:"parentNode",next:"legend"});function xe(n,i,a,u){var f,d,p,v,y,T,C,x=i&&i.ownerDocument,I=i?i.nodeType:9;if(a=a||[],typeof n!="string"||!n||I!==1&&I!==9&&I!==11)return a;if(!u&&(Dt(i),i=i||Se,Ve)){if(I!==11&&(y=bc.exec(n)))if(f=y[1]){if(I===9)return(p=i.getElementById(f))&&h.call(a,p),a;if(x&&(p=x.getElementById(f))&&c.contains(i,p))return h.call(a,p),a}else{if(y[2])return h.apply(a,i.getElementsByTagName(n)),a;if((f=y[3])&&i.getElementsByClassName)return h.apply(a,i.getElementsByClassName(f)),a}if(!xn[n+" "]&&(!W||!W.test(n))){if(C=n,x=i,I===1&&(Q.test(n)||J.test(n))){for(x=te.test(n)&&nt(i.parentNode)||i,(x!=i||H)&&((v=i.getAttribute("id"))?v=c.escapeSelector(v):i.setAttribute("id",v=c.expando)),T=it(n),d=T.length;d--;)T[d]=(v?"#"+v:":scope")+" "+kt(T[d]);C=T.join(",")}try{return h.apply(a,x.querySelectorAll(C)),a}catch{xn(n,!0)}finally{v===c.expando&&i.removeAttribute("id")}}}return Gi(n.replace(U,"$1"),i,a,u)}function Fe(n){return n[c.expando]=!0,n}function _c(n){return function(i){return R(i,"input")&&i.type===n}}function Tc(n){return function(i){return(R(i,"input")||R(i,"button"))&&i.type===n}}function zi(n){return function(i){return"form"in i?i.parentNode&&i.disabled===!1?"label"in i?"label"in i.parentNode?i.parentNode.disabled===n:i.disabled===n:i.isDisabled===n||i.isDisabled!==!n&&wc(i)===n:i.disabled===n:"label"in i?i.disabled===n:!1}}function bt(n){return Fe(function(i){return i=+i,Fe(function(a,u){for(var f,d=n([],a.length,i),p=d.length;p--;)a[f=d[p]]&&(a[f]=!(u[f]=a[f]))})})}function Dt(n){var i,a=n?n.ownerDocument||n:k;a==Se||a.nodeType!==9||(Se=a,Hi=Se.documentElement,Ve=!c.isXMLDoc(Se),H&&k!=Se&&(i=Se.defaultView)&&i.top!==i&&i.addEventListener("unload",vc))}xe.matches=function(n,i){return xe(n,null,null,i)},xe.matchesSelector=function(n,i){if(Dt(n),Ve&&!xn[i+" "]&&(!W||!W.test(i)))try{return he.call(n,i)}catch{xn(i,!0)}return xe(i,Se,null,[n]).length>0},c.expr={cacheLength:50,createPseudo:Fe,match:Wi,find:{ID:function(n,i){if(typeof i.getElementById<"u"&&Ve){var a=i.getElementById(n);return a?[a]:[]}},TAG:function(n,i){return typeof i.getElementsByTagName<"u"?i.getElementsByTagName(n):i.querySelectorAll(n)},CLASS:function(n,i){if(typeof i.getElementsByClassName<"u"&&Ve)return i.getElementsByClassName(n)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:Tr,filter:{ID:function(n){var i=oe(n);return function(a){return a.getAttribute("id")===i}},TAG:function(n){var i=oe(n).toLowerCase();return n==="*"?function(){return!0}:function(a){return R(a,i)}},CLASS:function(n){var i=$i[n+" "];return i||(i=new RegExp("(^|"+b+")"+n+"("+b+"|$)"))&&$i(n,function(a){return i.test(typeof a.className=="string"&&a.className||typeof a.getAttribute<"u"&&a.getAttribute("class")||"")})},ATTR:function(n,i,a){return function(u){var f=c.attr(u,n);return f==null?i==="!=":i?(f+="",i==="="?f===a:i==="!="?f!==a:i==="^="?a&&f.indexOf(a)===0:i==="*="?a&&f.indexOf(a)>-1:i==="$="?a&&f.slice(-a.length)===a:i==="~="?(" "+f.replace(pc," ")+" ").indexOf(a)>-1:i==="|="?f===a||f.slice(0,a.length+1)===a+"-":!1):!0}},CHILD:function(n,i,a,u,f){var d=n.slice(0,3)!=="nth",p=n.slice(-4)!=="last",v=i==="of-type";return u===1&&f===0?function(y){return!!y.parentNode}:function(y,T,C){var x,I,P,z,X,V=d!==p?"nextSibling":"previousSibling",se=y.parentNode,re=v&&y.nodeName.toLowerCase(),_e=!C&&!v,pe=!1;if(se){if(d){for(;V;){for(P=y;P=P[V];)if(v?R(P,re):P.nodeType===1)return!1;X=V=n==="only"&&!X&&"nextSibling"}return!0}if(X=[p?se.firstChild:se.lastChild],p&&_e){for(I=se[c.expando]||(se[c.expando]={}),x=I[n]||[],z=x[0]===Ge&&x[1],pe=z&&x[2],P=z&&se.childNodes[z];P=++z&&P&&P[V]||(pe=z=0)||X.pop();)if(P.nodeType===1&&++pe&&P===y){I[n]=[Ge,z,pe];break}}else if(_e&&(I=y[c.expando]||(y[c.expando]={}),x=I[n]||[],z=x[0]===Ge&&x[1],pe=z),pe===!1)for(;(P=++z&&P&&P[V]||(pe=z=0)||X.pop())&&!((v?R(P,re):P.nodeType===1)&&++pe&&(_e&&(I=P[c.expando]||(P[c.expando]={}),I[n]=[Ge,pe]),P===y)););return pe-=f,pe===u||pe%u===0&&pe/u>=0}}},PSEUDO:function(n,i){var a=c.expr.pseudos[n]||c.expr.setFilters[n.toLowerCase()]||rt("unsupported pseudo: "+n);return a[c.expando]?a(i):a}},pseudos:{not:Fe(function(n){var i=[],a=[],u=Ar(n.replace(U,"$1"));return u[c.expando]?Fe(function(f,d,p,v){for(var y,T=u(f,null,v,[]),C=f.length;C--;)(y=T[C])&&(f[C]=!(d[C]=y))}):function(f,d,p){return i[0]=f,u(i,null,p,a),i[0]=null,!a.pop()}}),has:Fe(function(n){return function(i){return xe(n,i).length>0}}),contains:Fe(function(n){return n=oe(n),function(i){return(i.textContent||c.text(i)).indexOf(n)>-1}}),lang:Fe(function(n){return gc.test(n||"")||rt("unsupported lang: "+n),n=oe(n).toLowerCase(),function(i){var a;do if(a=Ve?i.lang:i.getAttribute("xml:lang")||i.getAttribute("lang"))return a=a.toLowerCase(),a===n||a.indexOf(n+"-")===0;while((i=i.parentNode)&&i.nodeType===1);return!1}}),target:function(n){var i=t.location&&t.location.hash;return i&&i.slice(1)===n.id},root:function(n){return n===Hi},focus:function(n){return n===Se.activeElement&&Se.hasFocus()&&!!(n.type||n.href||~n.tabIndex)},enabled:zi(!1),disabled:zi(!0),checked:function(n){return R(n,"input")&&!!n.checked||R(n,"option")&&!!n.selected},selected:function(n){return H&&n.parentNode&&n.parentNode.selectedIndex,n.selected===!0},empty:function(n){for(n=n.firstChild;n;n=n.nextSibling)if(n.nodeType<6)return!1;return!0},parent:function(n){return!c.expr.pseudos.empty(n)},header:function(n){return yc.test(n.nodeName)},input:function(n){return mc.test(n.nodeName)},button:function(n){return R(n,"input")&&n.type==="button"||R(n,"button")},text:function(n){return R(n,"input")&&n.type==="text"},first:bt(function(){return[0]}),last:bt(function(n,i){return[i-1]}),eq:bt(function(n,i,a){return[a<0?a+i:a]}),even:bt(function(n,i){for(var a=0;a<i;a+=2)n.push(a);return n}),odd:bt(function(n,i){for(var a=1;a<i;a+=2)n.push(a);return n}),lt:bt(function(n,i,a){var u;for(a<0?u=a+i:a>i?u=i:u=a;--u>=0;)n.push(u);return n}),gt:bt(function(n,i,a){for(var u=a<0?a+i:a;++u<i;)n.push(u);return n})}},c.expr.pseudos.nth=c.expr.pseudos.eq;for(xt in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.expr.pseudos[xt]=_c(xt);for(xt in{submit:!0,reset:!0})c.expr.pseudos[xt]=Tc(xt);function Vi(){}Vi.prototype=c.expr.pseudos,c.expr.setFilters=new Vi;function Dn(n,i,a){var u=i.dir,f=i.next,d=f||u,p=a&&d==="parentNode",v=hc++;return i.first?function(y,T,C){for(;y=y[u];)if(y.nodeType===1||p)return n(y,T,C);return!1}:function(y,T,C){var x,I,P=[Ge,v];if(C){for(;y=y[u];)if((y.nodeType===1||p)&&n(y,T,C))return!0}else for(;y=y[u];)if(y.nodeType===1||p)if(I=y[c.expando]||(y[c.expando]={}),f&&R(y,f))y=y[u]||y;else{if((x=I[d])&&x[0]===Ge&&x[1]===v)return P[2]=x[2];if(I[d]=P,P[2]=n(y,T,C))return!0}return!1}}function Sr(n){return n.length>1?function(i,a,u){for(var f=n.length;f--;)if(!n[f](i,a,u))return!1;return!0}:n[0]}function Ec(n,i,a){for(var u=0,f=i.length;u<f;u++)xe(n,i[u],a);return a}function Ln(n,i,a,u,f){for(var d,p=[],v=0,y=n.length,T=i!=null;v<y;v++)(d=n[v])&&(!a||a(d,u,f))&&(p.push(d),T&&i.push(v));return p}function Cr(n,i,a,u,f,d){return u&&!u[c.expando]&&(u=Cr(u)),f&&!f[c.expando]&&(f=Cr(f,d)),Fe(function(p,v,y,T){var C,x,I,P,z=[],X=[],V=v.length,se=p||Ec(i||"*",y.nodeType?[y]:y,[]),re=n&&(p||!i)?Ln(se,z,n,y,T):se;if(a?(P=f||(p?n:V||u)?[]:v,a(re,P,y,T)):P=re,u)for(C=Ln(P,X),u(C,[],y,T),x=C.length;x--;)(I=C[x])&&(P[X[x]]=!(re[X[x]]=I));if(p){if(f||n){if(f){for(C=[],x=P.length;x--;)(I=P[x])&&C.push(re[x]=I);f(null,P=[],C,T)}for(x=P.length;x--;)(I=P[x])&&(C=f?g.call(p,I):z[x])>-1&&(p[C]=!(v[C]=I))}}else P=Ln(P===v?P.splice(V,P.length):P),f?f(null,v,P,T):h.apply(v,P)})}function Rr(n){for(var i,a,u,f=n.length,d=c.expr.relative[n[0].type],p=d||c.expr.relative[" "],v=d?1:0,y=Dn(function(x){return x===i},p,!0),T=Dn(function(x){return g.call(i,x)>-1},p,!0),C=[function(x,I,P){var z=!d&&(P||I!=kn)||((i=I).nodeType?y(x,I,P):T(x,I,P));return i=null,z}];v<f;v++)if(a=c.expr.relative[n[v].type])C=[Dn(Sr(C),a)];else{if(a=c.expr.filter[n[v].type].apply(null,n[v].matches),a[c.expando]){for(u=++v;u<f&&!c.expr.relative[n[u].type];u++);return Cr(v>1&&Sr(C),v>1&&kt(n.slice(0,v-1).concat({value:n[v-2].type===" "?"*":""})).replace(U,"$1"),a,v<u&&Rr(n.slice(v,u)),u<f&&Rr(n=n.slice(u)),u<f&&kt(n))}C.push(a)}return Sr(C)}function Ic(n,i){var a=i.length>0,u=n.length>0,f=function(d,p,v,y,T){var C,x,I,P=0,z="0",X=d&&[],V=[],se=kn,re=d||u&&c.expr.find.TAG("*",T),_e=Ge+=se==null?1:Math.random()||.1;for(T&&(kn=p==Se||p||T);(C=re[z])!=null;z++){if(u&&C){for(x=0,!p&&C.ownerDocument!=Se&&(Dt(C),v=!Ve);I=n[x++];)if(I(C,p||Se,v)){h.call(y,C);break}T&&(Ge=_e)}a&&((C=!I&&C)&&P--,d&&X.push(C))}if(P+=z,a&&z!==P){for(x=0;I=i[x++];)I(X,V,p,v);if(d){if(P>0)for(;z--;)X[z]||V[z]||(V[z]=m.call(y));V=Ln(V)}h.apply(y,V),T&&!d&&V.length>0&&P+i.length>1&&c.uniqueSort(y)}return T&&(Ge=_e,kn=se),X};return a?Fe(f):f}function Ar(n,i){var a,u=[],f=[],d=qi[n+" "];if(!d){for(i||(i=it(n)),a=i.length;a--;)d=Rr(i[a]),d[c.expando]?u.push(d):f.push(d);d=qi(n,Ic(f,u)),d.selector=n}return d}function Gi(n,i,a,u){var f,d,p,v,y,T=typeof n=="function"&&n,C=!u&&it(n=T.selector||n);if(a=a||[],C.length===1){if(d=C[0]=C[0].slice(0),d.length>2&&(p=d[0]).type==="ID"&&i.nodeType===9&&Ve&&c.expr.relative[d[1].type]){if(i=(c.expr.find.ID(oe(p.matches[0]),i)||[])[0],i)T&&(i=i.parentNode);else return a;n=n.slice(d.shift().value.length)}for(f=Wi.needsContext.test(n)?0:d.length;f--&&(p=d[f],!c.expr.relative[v=p.type]);)if((y=c.expr.find[v])&&(u=y(oe(p.matches[0]),te.test(d[0].type)&&nt(i.parentNode)||i))){if(d.splice(f,1),n=u.length&&kt(d),!n)return h.apply(a,u),a;break}}return(T||Ar(n,C))(u,i,!Ve,a,!i||te.test(n)&&nt(i.parentNode)||i),a}Dt(),c.find=xe,xe.compile=Ar,xe.select=Gi,xe.setDocument=Dt,xe.tokenize=it;function Lt(n,i,a){for(var u=[],f=a!==void 0;(n=n[i])&&n.nodeType!==9;)if(n.nodeType===1){if(f&&c(n).is(a))break;u.push(n)}return u}function Ki(n,i){for(var a=[];n;n=n.nextSibling)n.nodeType===1&&n!==i&&a.push(n);return a}var Ji=c.expr.match.needsContext,Xi=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Yi(n){return n[0]==="<"&&n[n.length-1]===">"&&n.length>=3}function Or(n,i,a){return typeof i=="function"?c.grep(n,function(u,f){return!!i.call(u,f,u)!==a}):i.nodeType?c.grep(n,function(u){return u===i!==a}):typeof i!="string"?c.grep(n,function(u){return g.call(i,u)>-1!==a}):c.filter(i,n,a)}c.filter=function(n,i,a){var u=i[0];return a&&(n=":not("+n+")"),i.length===1&&u.nodeType===1?c.find.matchesSelector(u,n)?[u]:[]:c.find.matches(n,c.grep(i,function(f){return f.nodeType===1}))},c.fn.extend({find:function(n){var i,a,u=this.length,f=this;if(typeof n!="string")return this.pushStack(c(n).filter(function(){for(i=0;i<u;i++)if(c.contains(f[i],this))return!0}));for(a=this.pushStack([]),i=0;i<u;i++)c.find(n,f[i],a);return u>1?c.uniqueSort(a):a},filter:function(n){return this.pushStack(Or(this,n||[],!1))},not:function(n){return this.pushStack(Or(this,n||[],!0))},is:function(n){return!!Or(this,typeof n=="string"&&Ji.test(n)?c(n):n||[],!1).length}});var Un,Sc=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Cc=c.fn.init=function(n,i){var a,u;if(!n)return this;if(n.nodeType)return this[0]=n,this.length=1,this;if(typeof n=="function")return Un.ready!==void 0?Un.ready(n):n(c);if(a=n+"",Yi(a))a=[null,n,null];else if(typeof n=="string")a=Sc.exec(n);else return c.makeArray(n,this);if(a&&(a[1]||!i))if(a[1]){if(i=i instanceof c?i[0]:i,c.merge(this,c.parseHTML(a[1],i&&i.nodeType?i.ownerDocument||i:k,!0)),Xi.test(a[1])&&c.isPlainObject(i))for(a in i)typeof this[a]=="function"?this[a](i[a]):this.attr(a,i[a]);return this}else return u=k.getElementById(a[2]),u&&(this[0]=u,this.length=1),this;else return!i||i.jquery?(i||Un).find(n):this.constructor(i).find(n)};Cc.prototype=c.fn,Un=c(k);var Rc=/^(?:parents|prev(?:Until|All))/,Ac={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({has:function(n){var i=c(n,this),a=i.length;return this.filter(function(){for(var u=0;u<a;u++)if(c.contains(this,i[u]))return!0})},closest:function(n,i){var a,u=0,f=this.length,d=[],p=typeof n!="string"&&c(n);if(!Ji.test(n)){for(;u<f;u++)for(a=this[u];a&&a!==i;a=a.parentNode)if(a.nodeType<11&&(p?p.index(a)>-1:a.nodeType===1&&c.find.matchesSelector(a,n))){d.push(a);break}}return this.pushStack(d.length>1?c.uniqueSort(d):d)},index:function(n){return n?typeof n=="string"?g.call(c(n),this[0]):g.call(this,n.jquery?n[0]:n):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(n,i){return this.pushStack(c.uniqueSort(c.merge(this.get(),c(n,i))))},addBack:function(n){return this.add(n==null?this.prevObject:this.prevObject.filter(n))}});function Qi(n,i){for(;(n=n[i])&&n.nodeType!==1;);return n}c.each({parent:function(n){var i=n.parentNode;return i&&i.nodeType!==11?i:null},parents:function(n){return Lt(n,"parentNode")},parentsUntil:function(n,i,a){return Lt(n,"parentNode",a)},next:function(n){return Qi(n,"nextSibling")},prev:function(n){return Qi(n,"previousSibling")},nextAll:function(n){return Lt(n,"nextSibling")},prevAll:function(n){return Lt(n,"previousSibling")},nextUntil:function(n,i,a){return Lt(n,"nextSibling",a)},prevUntil:function(n,i,a){return Lt(n,"previousSibling",a)},siblings:function(n){return Ki((n.parentNode||{}).firstChild,n)},children:function(n){return Ki(n.firstChild)},contents:function(n){return n.contentDocument!=null&&s(n.contentDocument)?n.contentDocument:(R(n,"template")&&(n=n.content||n),c.merge([],n.childNodes))}},function(n,i){c.fn[n]=function(a,u){var f=c.map(this,i,a);return n.slice(-5)!=="Until"&&(u=a),u&&typeof u=="string"&&(f=c.filter(u,f)),this.length>1&&(Ac[n]||c.uniqueSort(f),Rc.test(n)&&f.reverse()),this.pushStack(f)}});function Oc(n){var i={};return c.each(n.match(Ie)||[],function(a,u){i[u]=!0}),i}c.Callbacks=function(n){n=typeof n=="string"?Oc(n):c.extend({},n);var i,a,u,f,d=[],p=[],v=-1,y=function(){for(f=f||n.once,u=i=!0;p.length;v=-1)for(a=p.shift();++v<d.length;)d[v].apply(a[0],a[1])===!1&&n.stopOnFalse&&(v=d.length,a=!1);n.memory||(a=!1),i=!1,f&&(a?d=[]:d="")},T={add:function(){return d&&(a&&!i&&(v=d.length-1,p.push(a)),function C(x){c.each(x,function(I,P){typeof P=="function"?(!n.unique||!T.has(P))&&d.push(P):P&&P.length&&D(P)!=="string"&&C(P)})}(arguments),a&&!i&&y()),this},remove:function(){return c.each(arguments,function(C,x){for(var I;(I=c.inArray(x,d,I))>-1;)d.splice(I,1),I<=v&&v--}),this},has:function(C){return C?c.inArray(C,d)>-1:d.length>0},empty:function(){return d&&(d=[]),this},disable:function(){return f=p=[],d=a="",this},disabled:function(){return!d},lock:function(){return f=p=[],!a&&!i&&(d=a=""),this},locked:function(){return!!f},fireWith:function(C,x){return f||(x=x||[],x=[C,x.slice?x.slice():x],p.push(x),i||y()),this},fire:function(){return T.fireWith(this,arguments),this},fired:function(){return!!u}};return T};function Ut(n){return n}function Mn(n){throw n}function Zi(n,i,a,u){var f;try{n&&typeof(f=n.promise)=="function"?f.call(n).done(i).fail(a):n&&typeof(f=n.then)=="function"?f.call(n,i,a):i.apply(void 0,[n].slice(u))}catch(d){a(d)}}c.extend({Deferred:function(n){var i=[["notify","progress",c.Callbacks("memory"),c.Callbacks("memory"),2],["resolve","done",c.Callbacks("once memory"),c.Callbacks("once memory"),0,"resolved"],["reject","fail",c.Callbacks("once memory"),c.Callbacks("once memory"),1,"rejected"]],a="pending",u={state:function(){return a},always:function(){return f.done(arguments).fail(arguments),this},catch:function(d){return u.then(null,d)},pipe:function(){var d=arguments;return c.Deferred(function(p){c.each(i,function(v,y){var T=typeof d[y[4]]=="function"&&d[y[4]];f[y[1]](function(){var C=T&&T.apply(this,arguments);C&&typeof C.promise=="function"?C.promise().progress(p.notify).done(p.resolve).fail(p.reject):p[y[0]+"With"](this,T?[C]:arguments)})}),d=null}).promise()},then:function(d,p,v){var y=0;function T(C,x,I,P){return function(){var z=this,X=arguments,V=function(){var re,_e;if(!(C<y)){if(re=I.apply(z,X),re===x.promise())throw new TypeError("Thenable self-resolution");_e=re&&(typeof re=="object"||typeof re=="function")&&re.then,typeof _e=="function"?P?_e.call(re,T(y,x,Ut,P),T(y,x,Mn,P)):(y++,_e.call(re,T(y,x,Ut,P),T(y,x,Mn,P),T(y,x,Ut,x.notifyWith))):(I!==Ut&&(z=void 0,X=[re]),(P||x.resolveWith)(z,X))}},se=P?V:function(){try{V()}catch(re){c.Deferred.exceptionHook&&c.Deferred.exceptionHook(re,se.error),C+1>=y&&(I!==Mn&&(z=void 0,X=[re]),x.rejectWith(z,X))}};C?se():(c.Deferred.getErrorHook&&(se.error=c.Deferred.getErrorHook()),t.setTimeout(se))}}return c.Deferred(function(C){i[0][3].add(T(0,C,typeof v=="function"?v:Ut,C.notifyWith)),i[1][3].add(T(0,C,typeof d=="function"?d:Ut)),i[2][3].add(T(0,C,typeof p=="function"?p:Mn))}).promise()},promise:function(d){return d!=null?c.extend(d,u):u}},f={};return c.each(i,function(d,p){var v=p[2],y=p[5];u[p[1]]=v.add,y&&v.add(function(){a=y},i[3-d][2].disable,i[3-d][3].disable,i[0][2].lock,i[0][3].lock),v.add(p[3].fire),f[p[0]]=function(){return f[p[0]+"With"](this===f?void 0:this,arguments),this},f[p[0]+"With"]=v.fireWith}),u.promise(f),n&&n.call(f,f),f},when:function(n){var i=arguments.length,a=i,u=Array(a),f=o.call(arguments),d=c.Deferred(),p=function(v){return function(y){u[v]=this,f[v]=arguments.length>1?o.call(arguments):y,--i||d.resolveWith(u,f)}};if(i<=1&&(Zi(n,d.done(p(a)).resolve,d.reject,!i),d.state()==="pending"||typeof(f[a]&&f[a].then)=="function"))return d.then();for(;a--;)Zi(f[a],p(a),d.reject);return d.promise()}});var Nc=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;c.Deferred.exceptionHook=function(n,i){n&&Nc.test(n.name)&&t.console.warn("jQuery.Deferred exception",n,i)},c.readyException=function(n){t.setTimeout(function(){throw n})};var Nr=c.Deferred();c.fn.ready=function(n){return Nr.then(n).catch(function(i){c.readyException(i)}),this},c.extend({isReady:!1,readyWait:1,ready:function(n){(n===!0?--c.readyWait:c.isReady)||(c.isReady=!0,!(n!==!0&&--c.readyWait>0)&&Nr.resolveWith(k,[c]))}}),c.ready.then=Nr.then;function jn(){k.removeEventListener("DOMContentLoaded",jn),t.removeEventListener("load",jn),c.ready()}k.readyState!=="loading"?t.setTimeout(c.ready):(k.addEventListener("DOMContentLoaded",jn),t.addEventListener("load",jn));var Pc=/-([a-z])/g;function kc(n,i){return i.toUpperCase()}function vt(n){return n.replace(Pc,kc)}function nn(n){return n.nodeType===1||n.nodeType===9||!+n.nodeType}function rn(){this.expando=c.expando+rn.uid++}rn.uid=1,rn.prototype={cache:function(n){var i=n[this.expando];return i||(i=Object.create(null),nn(n)&&(n.nodeType?n[this.expando]=i:Object.defineProperty(n,this.expando,{value:i,configurable:!0}))),i},set:function(n,i,a){var u,f=this.cache(n);if(typeof i=="string")f[vt(i)]=a;else for(u in i)f[vt(u)]=i[u];return a},get:function(n,i){return i===void 0?this.cache(n):n[this.expando]&&n[this.expando][vt(i)]},access:function(n,i,a){return i===void 0||i&&typeof i=="string"&&a===void 0?this.get(n,i):(this.set(n,i,a),a!==void 0?a:i)},remove:function(n,i){var a,u=n[this.expando];if(u!==void 0){if(i!==void 0)for(Array.isArray(i)?i=i.map(vt):(i=vt(i),i=i in u?[i]:i.match(Ie)||[]),a=i.length;a--;)delete u[i[a]];(i===void 0||c.isEmptyObject(u))&&(n.nodeType?n[this.expando]=void 0:delete n[this.expando])}},hasData:function(n){var i=n[this.expando];return i!==void 0&&!c.isEmptyObject(i)}};var Y=new rn,ve=new rn,xc=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Dc=/[A-Z]/g;function Lc(n){return n==="true"?!0:n==="false"?!1:n==="null"?null:n===+n+""?+n:xc.test(n)?JSON.parse(n):n}function es(n,i,a){var u;if(a===void 0&&n.nodeType===1)if(u="data-"+i.replace(Dc,"-$&").toLowerCase(),a=n.getAttribute(u),typeof a=="string"){try{a=Lc(a)}catch{}ve.set(n,i,a)}else a=void 0;return a}c.extend({hasData:function(n){return ve.hasData(n)||Y.hasData(n)},data:function(n,i,a){return ve.access(n,i,a)},removeData:function(n,i){ve.remove(n,i)},_data:function(n,i,a){return Y.access(n,i,a)},_removeData:function(n,i){Y.remove(n,i)}}),c.fn.extend({data:function(n,i){var a,u,f,d=this[0],p=d&&d.attributes;if(n===void 0){if(this.length&&(f=ve.get(d),d.nodeType===1&&!Y.get(d,"hasDataAttrs"))){for(a=p.length;a--;)p[a]&&(u=p[a].name,u.indexOf("data-")===0&&(u=vt(u.slice(5)),es(d,u,f[u])));Y.set(d,"hasDataAttrs",!0)}return f}return typeof n=="object"?this.each(function(){ve.set(this,n)}):Ae(this,function(v){var y;if(d&&v===void 0)return y=ve.get(d,n),y!==void 0||(y=es(d,n),y!==void 0)?y:void 0;this.each(function(){ve.set(this,n,v)})},null,i,arguments.length>1,null,!0)},removeData:function(n){return this.each(function(){ve.remove(this,n)})}}),c.extend({queue:function(n,i,a){var u;if(n)return i=(i||"fx")+"queue",u=Y.get(n,i),a&&(!u||Array.isArray(a)?u=Y.set(n,i,c.makeArray(a)):u.push(a)),u||[]},dequeue:function(n,i){i=i||"fx";var a=c.queue(n,i),u=a.length,f=a.shift(),d=c._queueHooks(n,i),p=function(){c.dequeue(n,i)};f==="inprogress"&&(f=a.shift(),u--),f&&(i==="fx"&&a.unshift("inprogress"),delete d.stop,f.call(n,p,d)),!u&&d&&d.empty.fire()},_queueHooks:function(n,i){var a=i+"queueHooks";return Y.get(n,a)||Y.set(n,a,{empty:c.Callbacks("once memory").add(function(){Y.remove(n,[i+"queue",a])})})}}),c.fn.extend({queue:function(n,i){var a=2;return typeof n!="string"&&(i=n,n="fx",a--),arguments.length<a?c.queue(this[0],n):i===void 0?this:this.each(function(){var u=c.queue(this,n,i);c._queueHooks(this,n),n==="fx"&&u[0]!=="inprogress"&&c.dequeue(this,n)})},dequeue:function(n){return this.each(function(){c.dequeue(this,n)})},clearQueue:function(n){return this.queue(n||"fx",[])},promise:function(n,i){var a,u=1,f=c.Deferred(),d=this,p=this.length,v=function(){--u||f.resolveWith(d,[d])};for(typeof n!="string"&&(i=n,n=void 0),n=n||"fx";p--;)a=Y.get(d[p],n+"queueHooks"),a&&a.empty&&(u++,a.empty.add(v));return v(),f.promise(i)}});var ts=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,sn=new RegExp("^(?:([+-])=|)("+ts+")([a-z%]*)$","i"),st=["Top","Right","Bottom","Left"];function Bn(n,i){return n=i||n,n.style.display==="none"||n.style.display===""&&c.css(n,"display")==="none"}var Uc=/^[a-z]/,Mc=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;function Fn(n){return Uc.test(n)&&Mc.test(n[0].toUpperCase()+n.slice(1))}function ns(n,i,a,u){var f,d,p=20,v=u?function(){return u.cur()}:function(){return c.css(n,i,"")},y=v(),T=a&&a[3]||(Fn(i)?"px":""),C=n.nodeType&&(!Fn(i)||T!=="px"&&+y)&&sn.exec(c.css(n,i));if(C&&C[3]!==T){for(y=y/2,T=T||C[3],C=+y||1;p--;)c.style(n,i,C+T),(1-d)*(1-(d=v()/y||.5))<=0&&(p=0),C=C/d;C=C*2,c.style(n,i,C+T),a=a||[]}return a&&(C=+C||+y||0,f=a[1]?C+(a[1]+1)*a[2]:+a[2],u&&(u.unit=T,u.start=C,u.end=f)),f}var jc=/^-ms-/;function Pr(n){return vt(n.replace(jc,"ms-"))}var rs={};function Bc(n){var i,a=n.ownerDocument,u=n.nodeName,f=rs[u];return f||(i=a.body.appendChild(a.createElement(u)),f=c.css(i,"display"),i.parentNode.removeChild(i),f==="none"&&(f="block"),rs[u]=f,f)}function Mt(n,i){for(var a,u,f=[],d=0,p=n.length;d<p;d++)u=n[d],u.style&&(a=u.style.display,i?(a==="none"&&(f[d]=Y.get(u,"display")||null,f[d]||(u.style.display="")),u.style.display===""&&Bn(u)&&(f[d]=Bc(u))):a!=="none"&&(f[d]="none",Y.set(u,"display",a)));for(d=0;d<p;d++)f[d]!=null&&(n[d].style.display=f[d]);return n}c.fn.extend({show:function(){return Mt(this,!0)},hide:function(){return Mt(this)},toggle:function(n){return typeof n=="boolean"?n?this.show():this.hide():this.each(function(){Bn(this)?c(this).show():c(this).hide()})}});var on=function(n){return c.contains(n.ownerDocument,n)||n.getRootNode(Fc)===n.ownerDocument},Fc={composed:!0};de.getRootNode||(on=function(n){return c.contains(n.ownerDocument,n)});var is=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ke={thead:["table"],col:["colgroup","table"],tr:["tbody","table"],td:["tr","tbody","table"]};Ke.tbody=Ke.tfoot=Ke.colgroup=Ke.caption=Ke.thead,Ke.th=Ke.td;function we(n,i){var a;return typeof n.getElementsByTagName<"u"?a=r.slice.call(n.getElementsByTagName(i||"*")):typeof n.querySelectorAll<"u"?a=n.querySelectorAll(i||"*"):a=[],i===void 0||i&&R(n,i)?c.merge([n],a):a}var ss=/^$|^module$|\/(?:java|ecma)script/i;function kr(n,i){for(var a=0,u=n.length;a<u;a++)Y.set(n[a],"globalEval",!i||Y.get(i[a],"globalEval"))}var Hc=/<|&#?\w+;/;function os(n,i,a,u,f){for(var d,p,v,y,T,C,x=i.createDocumentFragment(),I=[],P=0,z=n.length;P<z;P++)if(d=n[P],d||d===0)if(D(d)==="object"&&(d.nodeType||_(d)))c.merge(I,d.nodeType?[d]:d);else if(!Hc.test(d))I.push(i.createTextNode(d));else{for(p=p||x.appendChild(i.createElement("div")),v=(is.exec(d)||["",""])[1].toLowerCase(),y=Ke[v]||r,C=y.length;--C>-1;)p=p.appendChild(i.createElement(y[C]));p.innerHTML=c.htmlPrefilter(d),c.merge(I,p.childNodes),p=x.firstChild,p.textContent=""}for(x.textContent="",P=0;d=I[P++];){if(u&&c.inArray(d,u)>-1){f&&f.push(d);continue}if(T=on(d),p=we(x.appendChild(d),"script"),T&&kr(p),a)for(C=0;d=p[C++];)ss.test(d.type||"")&&a.push(d)}return x}function $c(n){return n.type=(n.getAttribute("type")!==null)+"/"+n.type,n}function qc(n){return(n.type||"").slice(0,5)==="true/"?n.type=n.type.slice(5):n.removeAttribute("type"),n}function jt(n,i,a,u){i=l(i);var f,d,p,v,y,T,C=0,x=n.length,I=x-1,P=i[0],z=typeof P=="function";if(z)return n.each(function(X){var V=n.eq(X);i[0]=P.call(this,X,V.html()),jt(V,i,a,u)});if(x&&(f=os(i,n[0].ownerDocument,!1,n,u),d=f.firstChild,f.childNodes.length===1&&(f=d),d||u)){for(p=c.map(we(f,"script"),$c),v=p.length;C<x;C++)y=f,C!==I&&(y=c.clone(y,!0,!0),v&&c.merge(p,we(y,"script"))),a.call(n[C],y,C);if(v)for(T=p[p.length-1].ownerDocument,c.map(p,qc),C=0;C<v;C++)y=p[C],ss.test(y.type||"")&&!Y.get(y,"globalEval")&&c.contains(T,y)&&(y.src&&(y.type||"").toLowerCase()!=="module"?c._evalUrl&&!y.noModule&&c._evalUrl(y.src,{nonce:y.nonce,crossOrigin:y.crossOrigin},T):B(y.textContent,y,T))}return n}var Hn=/^(?:checkbox|radio)$/i,as=/^([^.]*)(?:\.(.+)|)/;function Bt(){return!0}function Ft(){return!1}function xr(n,i,a,u,f,d){var p,v;if(typeof i=="object"){typeof a!="string"&&(u=u||a,a=void 0);for(v in i)xr(n,v,a,u,i[v],d);return n}if(u==null&&f==null?(f=a,u=a=void 0):f==null&&(typeof a=="string"?(f=u,u=void 0):(f=u,u=a,a=void 0)),f===!1)f=Ft;else if(!f)return n;return d===1&&(p=f,f=function(y){return c().off(y),p.apply(this,arguments)},f.guid=p.guid||(p.guid=c.guid++)),n.each(function(){c.event.add(this,i,f,u,a)})}c.event={add:function(n,i,a,u,f){var d,p,v,y,T,C,x,I,P,z,X,V=Y.get(n);if(nn(n))for(a.handler&&(d=a,a=d.handler,f=d.selector),f&&c.find.matchesSelector(de,f),a.guid||(a.guid=c.guid++),(y=V.events)||(y=V.events=Object.create(null)),(p=V.handle)||(p=V.handle=function(se){return typeof c<"u"&&c.event.triggered!==se.type?c.event.dispatch.apply(n,arguments):void 0}),i=(i||"").match(Ie)||[""],T=i.length;T--;)v=as.exec(i[T])||[],P=X=v[1],z=(v[2]||"").split(".").sort(),P&&(x=c.event.special[P]||{},P=(f?x.delegateType:x.bindType)||P,x=c.event.special[P]||{},C=c.extend({type:P,origType:X,data:u,handler:a,guid:a.guid,selector:f,needsContext:f&&c.expr.match.needsContext.test(f),namespace:z.join(".")},d),(I=y[P])||(I=y[P]=[],I.delegateCount=0,(!x.setup||x.setup.call(n,u,z,p)===!1)&&n.addEventListener&&n.addEventListener(P,p)),x.add&&(x.add.call(n,C),C.handler.guid||(C.handler.guid=a.guid)),f?I.splice(I.delegateCount++,0,C):I.push(C))},remove:function(n,i,a,u,f){var d,p,v,y,T,C,x,I,P,z,X,V=Y.hasData(n)&&Y.get(n);if(!(!V||!(y=V.events))){for(i=(i||"").match(Ie)||[""],T=i.length;T--;){if(v=as.exec(i[T])||[],P=X=v[1],z=(v[2]||"").split(".").sort(),!P){for(P in y)c.event.remove(n,P+i[T],a,u,!0);continue}for(x=c.event.special[P]||{},P=(u?x.delegateType:x.bindType)||P,I=y[P]||[],v=v[2]&&new RegExp("(^|\\.)"+z.join("\\.(?:.*\\.|)")+"(\\.|$)"),p=d=I.length;d--;)C=I[d],(f||X===C.origType)&&(!a||a.guid===C.guid)&&(!v||v.test(C.namespace))&&(!u||u===C.selector||u==="**"&&C.selector)&&(I.splice(d,1),C.selector&&I.delegateCount--,x.remove&&x.remove.call(n,C));p&&!I.length&&((!x.teardown||x.teardown.call(n,z,V.handle)===!1)&&c.removeEvent(n,P,V.handle),delete y[P])}c.isEmptyObject(y)&&Y.remove(n,"handle events")}},dispatch:function(n){var i,a,u,f,d,p,v=new Array(arguments.length),y=c.event.fix(n),T=(Y.get(this,"events")||Object.create(null))[y.type]||[],C=c.event.special[y.type]||{};for(v[0]=y,i=1;i<arguments.length;i++)v[i]=arguments[i];if(y.delegateTarget=this,!(C.preDispatch&&C.preDispatch.call(this,y)===!1)){for(p=c.event.handlers.call(this,y,T),i=0;(f=p[i++])&&!y.isPropagationStopped();)for(y.currentTarget=f.elem,a=0;(d=f.handlers[a++])&&!y.isImmediatePropagationStopped();)(!y.rnamespace||d.namespace===!1||y.rnamespace.test(d.namespace))&&(y.handleObj=d,y.data=d.data,u=((c.event.special[d.origType]||{}).handle||d.handler).apply(f.elem,v),u!==void 0&&(y.result=u)===!1&&(y.preventDefault(),y.stopPropagation()));return C.postDispatch&&C.postDispatch.call(this,y),y.result}},handlers:function(n,i){var a,u,f,d,p,v=[],y=i.delegateCount,T=n.target;if(y&&!(n.type==="click"&&n.button>=1)){for(;T!==this;T=T.parentNode||this)if(T.nodeType===1&&!(n.type==="click"&&T.disabled===!0)){for(d=[],p={},a=0;a<y;a++)u=i[a],f=u.selector+" ",p[f]===void 0&&(p[f]=u.needsContext?c(f,this).index(T)>-1:c.find(f,this,null,[T]).length),p[f]&&d.push(u);d.length&&v.push({elem:T,handlers:d})}}return T=this,y<i.length&&v.push({elem:T,handlers:i.slice(y)}),v},addProp:function(n,i){Object.defineProperty(c.Event.prototype,n,{enumerable:!0,configurable:!0,get:typeof i=="function"?function(){if(this.originalEvent)return i(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[n]},set:function(a){Object.defineProperty(this,n,{enumerable:!0,configurable:!0,writable:!0,value:a})}})},fix:function(n){return n[c.expando]?n:new c.Event(n)},special:c.extend(Object.create(null),{load:{noBubble:!0},click:{setup:function(n){var i=this||n;return Hn.test(i.type)&&i.click&&R(i,"input")&&$n(i,"click",!0),!1},trigger:function(n){var i=this||n;return Hn.test(i.type)&&i.click&&R(i,"input")&&$n(i,"click"),!0},_default:function(n){var i=n.target;return Hn.test(i.type)&&i.click&&R(i,"input")&&Y.get(i,"click")||R(i,"a")}},beforeunload:{postDispatch:function(n){n.result!==void 0&&n.preventDefault()}}})};function $n(n,i,a){if(!a){Y.get(n,i)===void 0&&c.event.add(n,i,Bt);return}Y.set(n,i,!1),c.event.add(n,i,{namespace:!1,handler:function(u){var f,d=Y.get(this,i);if(u.isTrigger&1&&this[i]){if(d.length)(c.event.special[i]||{}).delegateType&&u.stopPropagation();else if(d=o.call(arguments),Y.set(this,i,d),this[i](),f=Y.get(this,i),Y.set(this,i,!1),d!==f)return u.stopImmediatePropagation(),u.preventDefault(),f&&f.value}else d.length&&(Y.set(this,i,{value:c.event.trigger(d[0],d.slice(1),this)}),u.stopPropagation(),u.isImmediatePropagationStopped=Bt)}})}c.removeEvent=function(n,i,a){n.removeEventListener&&n.removeEventListener(i,a)},c.Event=function(n,i){if(!(this instanceof c.Event))return new c.Event(n,i);n&&n.type?(this.originalEvent=n,this.type=n.type,this.isDefaultPrevented=n.defaultPrevented?Bt:Ft,this.target=n.target,this.currentTarget=n.currentTarget,this.relatedTarget=n.relatedTarget):this.type=n,i&&c.extend(this,i),this.timeStamp=n&&n.timeStamp||Date.now(),this[c.expando]=!0},c.Event.prototype={constructor:c.Event,isDefaultPrevented:Ft,isPropagationStopped:Ft,isImmediatePropagationStopped:Ft,isSimulated:!1,preventDefault:function(){var n=this.originalEvent;this.isDefaultPrevented=Bt,n&&!this.isSimulated&&n.preventDefault()},stopPropagation:function(){var n=this.originalEvent;this.isPropagationStopped=Bt,n&&!this.isSimulated&&n.stopPropagation()},stopImmediatePropagation:function(){var n=this.originalEvent;this.isImmediatePropagationStopped=Bt,n&&!this.isSimulated&&n.stopImmediatePropagation(),this.stopPropagation()}},c.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},c.event.addProp),c.each({focus:"focusin",blur:"focusout"},function(n,i){function a(u){var f=c.event.fix(u);f.type=u.type==="focusin"?"focus":"blur",f.isSimulated=!0,f.target===f.currentTarget&&Y.get(this,"handle")(f)}c.event.special[n]={setup:function(){if($n(this,n,!0),H)this.addEventListener(i,a);else return!1},trigger:function(){return $n(this,n),!0},teardown:function(){if(H)this.removeEventListener(i,a);else return!1},_default:function(u){return Y.get(u.target,n)},delegateType:i}}),c.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(n,i){c.event.special[n]={delegateType:i,bindType:i,handle:function(a){var u,f=this,d=a.relatedTarget,p=a.handleObj;return(!d||d!==f&&!c.contains(f,d))&&(a.type=p.origType,u=p.handler.apply(this,arguments),a.type=i),u}}}),c.fn.extend({on:function(n,i,a,u){return xr(this,n,i,a,u)},one:function(n,i,a,u){return xr(this,n,i,a,u,1)},off:function(n,i,a){var u,f;if(n&&n.preventDefault&&n.handleObj)return u=n.handleObj,c(n.delegateTarget).off(u.namespace?u.origType+"."+u.namespace:u.origType,u.selector,u.handler),this;if(typeof n=="object"){for(f in n)this.off(f,i,n[f]);return this}return(i===!1||typeof i=="function")&&(a=i,i=void 0),a===!1&&(a=Ft),this.each(function(){c.event.remove(this,n,a,i)})}});var Wc=/<script|<style|<link/i;function cs(n,i){return R(n,"table")&&R(i.nodeType!==11?i:i.firstChild,"tr")&&c(n).children("tbody")[0]||n}function us(n,i){var a,u,f,d=Y.get(n,"events");if(i.nodeType===1){if(d){Y.remove(i,"handle events");for(a in d)for(u=0,f=d[a].length;u<f;u++)c.event.add(i,a,d[a][u])}ve.hasData(n)&&ve.set(i,c.extend({},ve.get(n)))}}function ls(n,i,a){for(var u,f=i?c.filter(i,n):n,d=0;(u=f[d])!=null;d++)!a&&u.nodeType===1&&c.cleanData(we(u)),u.parentNode&&(a&&on(u)&&kr(we(u,"script")),u.parentNode.removeChild(u));return n}c.extend({htmlPrefilter:function(n){return n},clone:function(n,i,a){var u,f,d,p,v=n.cloneNode(!0),y=on(n);if(H&&(n.nodeType===1||n.nodeType===11)&&!c.isXMLDoc(n))for(p=we(v),d=we(n),u=0,f=d.length;u<f;u++)R(p[u],"textarea")&&(p[u].defaultValue=d[u].defaultValue);if(i)if(a)for(d=d||we(n),p=p||we(v),u=0,f=d.length;u<f;u++)us(d[u],p[u]);else us(n,v);return p=we(v,"script"),p.length>0&&kr(p,!y&&we(n,"script")),v},cleanData:function(n){for(var i,a,u,f=c.event.special,d=0;(a=n[d])!==void 0;d++)if(nn(a)){if(i=a[Y.expando]){if(i.events)for(u in i.events)f[u]?c.event.remove(a,u):c.removeEvent(a,u,i.handle);a[Y.expando]=void 0}a[ve.expando]&&(a[ve.expando]=void 0)}}}),c.fn.extend({detach:function(n){return ls(this,n,!0)},remove:function(n){return ls(this,n)},text:function(n){return Ae(this,function(i){return i===void 0?c.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=i)})},null,n,arguments.length)},append:function(){return jt(this,arguments,function(n){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=cs(this,n);i.appendChild(n)}})},prepend:function(){return jt(this,arguments,function(n){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=cs(this,n);i.insertBefore(n,i.firstChild)}})},before:function(){return jt(this,arguments,function(n){this.parentNode&&this.parentNode.insertBefore(n,this)})},after:function(){return jt(this,arguments,function(n){this.parentNode&&this.parentNode.insertBefore(n,this.nextSibling)})},empty:function(){for(var n,i=0;(n=this[i])!=null;i++)n.nodeType===1&&(c.cleanData(we(n,!1)),n.textContent="");return this},clone:function(n,i){return n=n??!1,i=i??n,this.map(function(){return c.clone(this,n,i)})},html:function(n){return Ae(this,function(i){var a=this[0]||{},u=0,f=this.length;if(i===void 0&&a.nodeType===1)return a.innerHTML;if(typeof i=="string"&&!Wc.test(i)&&!Ke[(is.exec(i)||["",""])[1].toLowerCase()]){i=c.htmlPrefilter(i);try{for(;u<f;u++)a=this[u]||{},a.nodeType===1&&(c.cleanData(we(a,!1)),a.innerHTML=i);a=0}catch{}}a&&this.empty().append(i)},null,n,arguments.length)},replaceWith:function(){var n=[];return jt(this,arguments,function(i){var a=this.parentNode;c.inArray(this,n)<0&&(c.cleanData(we(this)),a&&a.replaceChild(i,this))},n)}}),c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(n,i){c.fn[n]=function(a){for(var u,f=[],d=c(a),p=d.length-1,v=0;v<=p;v++)u=v===p?this:this.clone(!0),c(d[v])[i](u),h.apply(f,u);return this.pushStack(f)}});var zc=new RegExp("^("+ts+")(?!px)[a-z%]+$","i"),Dr=/^--/;function qn(n){var i=n.ownerDocument.defaultView;return i||(i=t),i.getComputedStyle(n)}function Vc(n,i,a){var u,f,d={};for(f in i)d[f]=n.style[f],n.style[f]=i[f];u=a.call(n);for(f in i)n.style[f]=d[f];return u}function fs(n,i,a){var u,f=Dr.test(i);return a=a||qn(n),a&&(u=a.getPropertyValue(i)||a[i],f&&u&&(u=u.replace(U,"$1")||void 0),u===""&&!on(n)&&(u=c.style(n,i))),u!==void 0?u+"":u}var ds=["Webkit","Moz","ms"],hs=k.createElement("div").style;function Gc(n){for(var i=n[0].toUpperCase()+n.slice(1),a=ds.length;a--;)if(n=ds[a]+i,n in hs)return n}function Lr(n){return n in hs?n:Gc(n)||n}var ps,gs,ot=k.createElement("table");function ms(){if(!(!ot||!ot.style)){var n,i=k.createElement("col"),a=k.createElement("tr"),u=k.createElement("td");if(ot.style.cssText="position:absolute;left:-11111px;border-collapse:separate;border-spacing:0",a.style.cssText="box-sizing:content-box;border:1px solid;height:1px",u.style.cssText="height:9px;width:9px;padding:0",i.span=2,de.appendChild(ot).appendChild(i).parentNode.appendChild(a).appendChild(u).parentNode.appendChild(u.cloneNode(!0)),ot.offsetWidth===0){de.removeChild(ot);return}n=t.getComputedStyle(a),gs=H||Math.round(parseFloat(t.getComputedStyle(i).width))===18,ps=Math.round(parseFloat(n.height)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth))===a.offsetHeight,de.removeChild(ot),ot=null}}c.extend(S,{reliableTrDimensions:function(){return ms(),ps},reliableColDimensions:function(){return ms(),gs}});var Kc={position:"absolute",visibility:"hidden",display:"block"},ys={letterSpacing:"0",fontWeight:"400"};function bs(n,i,a){var u=sn.exec(i);return u?Math.max(0,u[2]-(a||0))+(u[3]||"px"):i}function vs(n,i,a,u,f,d){var p=i==="width"?1:0,v=0,y=0,T=0;if(a===(u?"border":"content"))return 0;for(;p<4;p+=2)a==="margin"&&(T+=c.css(n,a+st[p],!0,f)),u?(a==="content"&&(y-=c.css(n,"padding"+st[p],!0,f)),a!=="margin"&&(y-=c.css(n,"border"+st[p]+"Width",!0,f))):(y+=c.css(n,"padding"+st[p],!0,f),a!=="padding"?y+=c.css(n,"border"+st[p]+"Width",!0,f):v+=c.css(n,"border"+st[p]+"Width",!0,f));return!u&&d>=0&&(y+=Math.max(0,Math.ceil(n["offset"+i[0].toUpperCase()+i.slice(1)]-d-y-v-.5))||0),y+T}function ws(n,i,a){var u=qn(n),f=H||a,d=f&&c.css(n,"boxSizing",!1,u)==="border-box",p=d,v=fs(n,i,u),y="offset"+i[0].toUpperCase()+i.slice(1);if(zc.test(v)){if(!a)return v;v="auto"}return(v==="auto"||H&&d||!S.reliableColDimensions()&&R(n,"col")||!S.reliableTrDimensions()&&R(n,"tr"))&&n.getClientRects().length&&(d=c.css(n,"boxSizing",!1,u)==="border-box",p=y in n,p&&(v=n[y])),v=parseFloat(v)||0,v+vs(n,i,a||(d?"border":"content"),p,u,v)+"px"}c.extend({cssHooks:{},style:function(n,i,a,u){if(!(!n||n.nodeType===3||n.nodeType===8||!n.style)){var f,d,p,v=Pr(i),y=Dr.test(i),T=n.style;if(y||(i=Lr(v)),p=c.cssHooks[i]||c.cssHooks[v],a!==void 0){if(d=typeof a,d==="string"&&(f=sn.exec(a))&&f[1]&&(a=ns(n,i,f),d="number"),a==null||a!==a)return;d==="number"&&(a+=f&&f[3]||(Fn(v)?"px":"")),H&&a===""&&i.indexOf("background")===0&&(T[i]="inherit"),(!p||!("set"in p)||(a=p.set(n,a,u))!==void 0)&&(y?T.setProperty(i,a):T[i]=a)}else return p&&"get"in p&&(f=p.get(n,!1,u))!==void 0?f:T[i]}},css:function(n,i,a,u){var f,d,p,v=Pr(i),y=Dr.test(i);return y||(i=Lr(v)),p=c.cssHooks[i]||c.cssHooks[v],p&&"get"in p&&(f=p.get(n,!0,a)),f===void 0&&(f=fs(n,i,u)),f==="normal"&&i in ys&&(f=ys[i]),a===""||a?(d=parseFloat(f),a===!0||isFinite(d)?d||0:f):f}}),c.each(["height","width"],function(n,i){c.cssHooks[i]={get:function(a,u,f){if(u)return c.css(a,"display")==="none"?Vc(a,Kc,function(){return ws(a,i,f)}):ws(a,i,f)},set:function(a,u,f){var d,p=qn(a),v=f&&c.css(a,"boxSizing",!1,p)==="border-box",y=f?vs(a,i,f,v,p):0;return y&&(d=sn.exec(u))&&(d[3]||"px")!=="px"&&(a.style[i]=u,u=c.css(a,i)),bs(a,u,y)}}}),c.each({margin:"",padding:"",border:"Width"},function(n,i){c.cssHooks[n+i]={expand:function(a){for(var u=0,f={},d=typeof a=="string"?a.split(" "):[a];u<4;u++)f[n+st[u]+i]=d[u]||d[u-2]||d[0];return f}},n!=="margin"&&(c.cssHooks[n+i].set=bs)}),c.fn.extend({css:function(n,i){return Ae(this,function(a,u,f){var d,p,v={},y=0;if(Array.isArray(u)){for(d=qn(a),p=u.length;y<p;y++)v[u[y]]=c.css(a,u[y],!1,d);return v}return f!==void 0?c.style(a,u,f):c.css(a,u)},n,i,arguments.length>1)}});function Oe(n,i,a,u,f){return new Oe.prototype.init(n,i,a,u,f)}c.Tween=Oe,Oe.prototype={constructor:Oe,init:function(n,i,a,u,f,d){this.elem=n,this.prop=a,this.easing=f||c.easing._default,this.options=i,this.start=this.now=this.cur(),this.end=u,this.unit=d||(Fn(a)?"px":"")},cur:function(){var n=Oe.propHooks[this.prop];return n&&n.get?n.get(this):Oe.propHooks._default.get(this)},run:function(n){var i,a=Oe.propHooks[this.prop];return this.options.duration?this.pos=i=c.easing[this.easing](n,this.options.duration*n,0,1,this.options.duration):this.pos=i=n,this.now=(this.end-this.start)*i+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),a&&a.set?a.set(this):Oe.propHooks._default.set(this),this}},Oe.prototype.init.prototype=Oe.prototype,Oe.propHooks={_default:{get:function(n){var i;return n.elem.nodeType!==1||n.elem[n.prop]!=null&&n.elem.style[n.prop]==null?n.elem[n.prop]:(i=c.css(n.elem,n.prop,""),!i||i==="auto"?0:i)},set:function(n){c.fx.step[n.prop]?c.fx.step[n.prop](n):n.elem.nodeType===1&&(c.cssHooks[n.prop]||n.elem.style[Lr(n.prop)]!=null)?c.style(n.elem,n.prop,n.now+n.unit):n.elem[n.prop]=n.now}}},c.easing={linear:function(n){return n},swing:function(n){return .5-Math.cos(n*Math.PI)/2},_default:"swing"},c.fx=Oe.prototype.init,c.fx.step={};var Ht,Wn,Jc=/^(?:toggle|show|hide)$/,Xc=/queueHooks$/;function Ur(){Wn&&(k.hidden===!1&&t.requestAnimationFrame?t.requestAnimationFrame(Ur):t.setTimeout(Ur,13),c.fx.tick())}function _s(){return t.setTimeout(function(){Ht=void 0}),Ht=Date.now()}function zn(n,i){var a,u=0,f={height:n};for(i=i?1:0;u<4;u+=2-i)a=st[u],f["margin"+a]=f["padding"+a]=n;return i&&(f.opacity=f.width=n),f}function Ts(n,i,a){for(var u,f=(De.tweeners[i]||[]).concat(De.tweeners["*"]),d=0,p=f.length;d<p;d++)if(u=f[d].call(a,i,n))return u}function Yc(n,i,a){var u,f,d,p,v,y,T,C,x="width"in i||"height"in i,I=this,P={},z=n.style,X=n.nodeType&&Bn(n),V=Y.get(n,"fxshow");a.queue||(p=c._queueHooks(n,"fx"),p.unqueued==null&&(p.unqueued=0,v=p.empty.fire,p.empty.fire=function(){p.unqueued||v()}),p.unqueued++,I.always(function(){I.always(function(){p.unqueued--,c.queue(n,"fx").length||p.empty.fire()})}));for(u in i)if(f=i[u],Jc.test(f)){if(delete i[u],d=d||f==="toggle",f===(X?"hide":"show"))if(f==="show"&&V&&V[u]!==void 0)X=!0;else continue;P[u]=V&&V[u]||c.style(n,u)}if(y=!c.isEmptyObject(i),!(!y&&c.isEmptyObject(P))){x&&n.nodeType===1&&(a.overflow=[z.overflow,z.overflowX,z.overflowY],T=V&&V.display,T==null&&(T=Y.get(n,"display")),C=c.css(n,"display"),C==="none"&&(T?C=T:(Mt([n],!0),T=n.style.display||T,C=c.css(n,"display"),Mt([n]))),(C==="inline"||C==="inline-block"&&T!=null)&&c.css(n,"float")==="none"&&(y||(I.done(function(){z.display=T}),T==null&&(C=z.display,T=C==="none"?"":C)),z.display="inline-block")),a.overflow&&(z.overflow="hidden",I.always(function(){z.overflow=a.overflow[0],z.overflowX=a.overflow[1],z.overflowY=a.overflow[2]})),y=!1;for(u in P)y||(V?"hidden"in V&&(X=V.hidden):V=Y.set(n,"fxshow",{display:T}),d&&(V.hidden=!X),X&&Mt([n],!0),I.done(function(){X||Mt([n]),Y.remove(n,"fxshow");for(u in P)c.style(n,u,P[u])})),y=Ts(X?V[u]:0,u,I),u in V||(V[u]=y.start,X&&(y.end=y.start,y.start=0))}}function Qc(n,i){var a,u,f,d,p;for(a in n)if(u=Pr(a),f=i[u],d=n[a],Array.isArray(d)&&(f=d[1],d=n[a]=d[0]),a!==u&&(n[u]=d,delete n[a]),p=c.cssHooks[u],p&&"expand"in p){d=p.expand(d),delete n[u];for(a in d)a in n||(n[a]=d[a],i[a]=f)}else i[u]=f}function De(n,i,a){var u,f,d=0,p=De.prefilters.length,v=c.Deferred().always(function(){delete y.elem}),y=function(){if(f)return!1;for(var x=Ht||_s(),I=Math.max(0,T.startTime+T.duration-x),P=1-(I/T.duration||0),z=0,X=T.tweens.length;z<X;z++)T.tweens[z].run(P);return v.notifyWith(n,[T,P,I]),P<1&&X?I:(X||v.notifyWith(n,[T,1,0]),v.resolveWith(n,[T]),!1)},T=v.promise({elem:n,props:c.extend({},i),opts:c.extend(!0,{specialEasing:{},easing:c.easing._default},a),originalProperties:i,originalOptions:a,startTime:Ht||_s(),duration:a.duration,tweens:[],createTween:function(x,I){var P=c.Tween(n,T.opts,x,I,T.opts.specialEasing[x]||T.opts.easing);return T.tweens.push(P),P},stop:function(x){var I=0,P=x?T.tweens.length:0;if(f)return this;for(f=!0;I<P;I++)T.tweens[I].run(1);return x?(v.notifyWith(n,[T,1,0]),v.resolveWith(n,[T,x])):v.rejectWith(n,[T,x]),this}}),C=T.props;for(Qc(C,T.opts.specialEasing);d<p;d++)if(u=De.prefilters[d].call(T,n,C,T.opts),u)return typeof u.stop=="function"&&(c._queueHooks(T.elem,T.opts.queue).stop=u.stop.bind(u)),u;return c.map(C,Ts,T),typeof T.opts.start=="function"&&T.opts.start.call(n,T),T.progress(T.opts.progress).done(T.opts.done,T.opts.complete).fail(T.opts.fail).always(T.opts.always),c.fx.timer(c.extend(y,{elem:n,anim:T,queue:T.opts.queue})),T}c.Animation=c.extend(De,{tweeners:{"*":[function(n,i){var a=this.createTween(n,i);return ns(a.elem,n,sn.exec(i),a),a}]},tweener:function(n,i){typeof n=="function"?(i=n,n=["*"]):n=n.match(Ie);for(var a,u=0,f=n.length;u<f;u++)a=n[u],De.tweeners[a]=De.tweeners[a]||[],De.tweeners[a].unshift(i)},prefilters:[Yc],prefilter:function(n,i){i?De.prefilters.unshift(n):De.prefilters.push(n)}}),c.speed=function(n,i,a){var u=n&&typeof n=="object"?c.extend({},n):{complete:a||i||typeof n=="function"&&n,duration:n,easing:a&&i||i&&typeof i!="function"&&i};return c.fx.off?u.duration=0:typeof u.duration!="number"&&(u.duration in c.fx.speeds?u.duration=c.fx.speeds[u.duration]:u.duration=c.fx.speeds._default),(u.queue==null||u.queue===!0)&&(u.queue="fx"),u.old=u.complete,u.complete=function(){typeof u.old=="function"&&u.old.call(this),u.queue&&c.dequeue(this,u.queue)},u},c.fn.extend({fadeTo:function(n,i,a,u){return this.filter(Bn).css("opacity",0).show().end().animate({opacity:i},n,a,u)},animate:function(n,i,a,u){var f=c.isEmptyObject(n),d=c.speed(i,a,u),p=function(){var v=De(this,c.extend({},n),d);(f||Y.get(this,"finish"))&&v.stop(!0)};return p.finish=p,f||d.queue===!1?this.each(p):this.queue(d.queue,p)},stop:function(n,i,a){var u=function(f){var d=f.stop;delete f.stop,d(a)};return typeof n!="string"&&(a=i,i=n,n=void 0),i&&this.queue(n||"fx",[]),this.each(function(){var f=!0,d=n!=null&&n+"queueHooks",p=c.timers,v=Y.get(this);if(d)v[d]&&v[d].stop&&u(v[d]);else for(d in v)v[d]&&v[d].stop&&Xc.test(d)&&u(v[d]);for(d=p.length;d--;)p[d].elem===this&&(n==null||p[d].queue===n)&&(p[d].anim.stop(a),f=!1,p.splice(d,1));(f||!a)&&c.dequeue(this,n)})},finish:function(n){return n!==!1&&(n=n||"fx"),this.each(function(){var i,a=Y.get(this),u=a[n+"queue"],f=a[n+"queueHooks"],d=c.timers,p=u?u.length:0;for(a.finish=!0,c.queue(this,n,[]),f&&f.stop&&f.stop.call(this,!0),i=d.length;i--;)d[i].elem===this&&d[i].queue===n&&(d[i].anim.stop(!0),d.splice(i,1));for(i=0;i<p;i++)u[i]&&u[i].finish&&u[i].finish.call(this);delete a.finish})}}),c.each(["toggle","show","hide"],function(n,i){var a=c.fn[i];c.fn[i]=function(u,f,d){return u==null||typeof u=="boolean"?a.apply(this,arguments):this.animate(zn(i,!0),u,f,d)}}),c.each({slideDown:zn("show"),slideUp:zn("hide"),slideToggle:zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(n,i){c.fn[n]=function(a,u,f){return this.animate(i,a,u,f)}}),c.timers=[],c.fx.tick=function(){var n,i=0,a=c.timers;for(Ht=Date.now();i<a.length;i++)n=a[i],!n()&&a[i]===n&&a.splice(i--,1);a.length||c.fx.stop(),Ht=void 0},c.fx.timer=function(n){c.timers.push(n),c.fx.start()},c.fx.start=function(){Wn||(Wn=!0,Ur())},c.fx.stop=function(){Wn=null},c.fx.speeds={slow:600,fast:200,_default:400},c.fn.delay=function(n,i){return n=c.fx&&c.fx.speeds[n]||n,i=i||"fx",this.queue(i,function(a,u){var f=t.setTimeout(a,n);u.stop=function(){t.clearTimeout(f)}})};var Zc=/^(?:input|select|textarea|button)$/i,eu=/^(?:a|area)$/i;c.fn.extend({prop:function(n,i){return Ae(this,c.prop,n,i,arguments.length>1)},removeProp:function(n){return this.each(function(){delete this[c.propFix[n]||n]})}}),c.extend({prop:function(n,i,a){var u,f,d=n.nodeType;if(!(d===3||d===8||d===2))return(d!==1||!c.isXMLDoc(n))&&(i=c.propFix[i]||i,f=c.propHooks[i]),a!==void 0?f&&"set"in f&&(u=f.set(n,a,i))!==void 0?u:n[i]=a:f&&"get"in f&&(u=f.get(n,i))!==null?u:n[i]},propHooks:{tabIndex:{get:function(n){var i=n.getAttribute("tabindex");return i?parseInt(i,10):Zc.test(n.nodeName)||eu.test(n.nodeName)&&n.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),H&&(c.propHooks.selected={get:function(n){var i=n.parentNode;return i&&i.parentNode&&i.parentNode.selectedIndex,null},set:function(n){var i=n.parentNode;i&&(i.selectedIndex,i.parentNode&&i.parentNode.selectedIndex)}}),c.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){c.propFix[this.toLowerCase()]=this});function wt(n){var i=n.match(Ie)||[];return i.join(" ")}function $t(n){return n.getAttribute&&n.getAttribute("class")||""}function Mr(n){return Array.isArray(n)?n:typeof n=="string"?n.match(Ie)||[]:[]}c.fn.extend({addClass:function(n){var i,a,u,f,d,p;return typeof n=="function"?this.each(function(v){c(this).addClass(n.call(this,v,$t(this)))}):(i=Mr(n),i.length?this.each(function(){if(u=$t(this),a=this.nodeType===1&&" "+wt(u)+" ",a){for(d=0;d<i.length;d++)f=i[d],a.indexOf(" "+f+" ")<0&&(a+=f+" ");p=wt(a),u!==p&&this.setAttribute("class",p)}}):this)},removeClass:function(n){var i,a,u,f,d,p;return typeof n=="function"?this.each(function(v){c(this).removeClass(n.call(this,v,$t(this)))}):arguments.length?(i=Mr(n),i.length?this.each(function(){if(u=$t(this),a=this.nodeType===1&&" "+wt(u)+" ",a){for(d=0;d<i.length;d++)for(f=i[d];a.indexOf(" "+f+" ")>-1;)a=a.replace(" "+f+" "," ");p=wt(a),u!==p&&this.setAttribute("class",p)}}):this):this.attr("class","")},toggleClass:function(n,i){var a,u,f,d;return typeof n=="function"?this.each(function(p){c(this).toggleClass(n.call(this,p,$t(this),i),i)}):typeof i=="boolean"?i?this.addClass(n):this.removeClass(n):(a=Mr(n),a.length?this.each(function(){for(d=c(this),f=0;f<a.length;f++)u=a[f],d.hasClass(u)?d.removeClass(u):d.addClass(u)}):this)},hasClass:function(n){var i,a,u=0;for(i=" "+n+" ";a=this[u++];)if(a.nodeType===1&&(" "+wt($t(a))+" ").indexOf(i)>-1)return!0;return!1}}),c.fn.extend({val:function(n){var i,a,u,f=this[0];return arguments.length?(u=typeof n=="function",this.each(function(d){var p;this.nodeType===1&&(u?p=n.call(this,d,c(this).val()):p=n,p==null?p="":typeof p=="number"?p+="":Array.isArray(p)&&(p=c.map(p,function(v){return v==null?"":v+""})),i=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,p,"value")===void 0)&&(this.value=p))})):f?(i=c.valHooks[f.type]||c.valHooks[f.nodeName.toLowerCase()],i&&"get"in i&&(a=i.get(f,"value"))!==void 0?a:(a=f.value,a??"")):void 0}}),c.extend({valHooks:{select:{get:function(n){var i,a,u,f=n.options,d=n.selectedIndex,p=n.type==="select-one",v=p?null:[],y=p?d+1:f.length;for(d<0?u=y:u=p?d:0;u<y;u++)if(a=f[u],a.selected&&!a.disabled&&(!a.parentNode.disabled||!R(a.parentNode,"optgroup"))){if(i=c(a).val(),p)return i;v.push(i)}return v},set:function(n,i){for(var a,u,f=n.options,d=c.makeArray(i),p=f.length;p--;)u=f[p],(u.selected=c.inArray(c(u).val(),d)>-1)&&(a=!0);return a||(n.selectedIndex=-1),d}}}}),H&&(c.valHooks.option={get:function(n){var i=n.getAttribute("value");return i??wt(c.text(n))}}),c.each(["radio","checkbox"],function(){c.valHooks[this]={set:function(n,i){if(Array.isArray(i))return n.checked=c.inArray(c(n).val(),i)>-1}}});var Es=/^(?:focusinfocus|focusoutblur)$/,Is=function(n){n.stopPropagation()};c.extend(c.event,{trigger:function(n,i,a,u){var f,d,p,v,y,T,C,x,I=[a||k],P=A.call(n,"type")?n.type:n,z=A.call(n,"namespace")?n.namespace.split("."):[];if(d=x=p=a=a||k,!(a.nodeType===3||a.nodeType===8)&&!Es.test(P+c.event.triggered)&&(P.indexOf(".")>-1&&(z=P.split("."),P=z.shift(),z.sort()),y=P.indexOf(":")<0&&"on"+P,n=n[c.expando]?n:new c.Event(P,typeof n=="object"&&n),n.isTrigger=u?2:3,n.namespace=z.join("."),n.rnamespace=n.namespace?new RegExp("(^|\\.)"+z.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=void 0,n.target||(n.target=a),i=i==null?[n]:c.makeArray(i,[n]),C=c.event.special[P]||{},!(!u&&C.trigger&&C.trigger.apply(a,i)===!1))){if(!u&&!C.noBubble&&!$(a)){for(v=C.delegateType||P,Es.test(v+P)||(d=d.parentNode);d;d=d.parentNode)I.push(d),p=d;p===(a.ownerDocument||k)&&I.push(p.defaultView||p.parentWindow||t)}for(f=0;(d=I[f++])&&!n.isPropagationStopped();)x=d,n.type=f>1?v:C.bindType||P,T=(Y.get(d,"events")||Object.create(null))[n.type]&&Y.get(d,"handle"),T&&T.apply(d,i),T=y&&d[y],T&&T.apply&&nn(d)&&(n.result=T.apply(d,i),n.result===!1&&n.preventDefault());return n.type=P,!u&&!n.isDefaultPrevented()&&(!C._default||C._default.apply(I.pop(),i)===!1)&&nn(a)&&y&&typeof a[P]=="function"&&!$(a)&&(p=a[y],p&&(a[y]=null),c.event.triggered=P,n.isPropagationStopped()&&x.addEventListener(P,Is),a[P](),n.isPropagationStopped()&&x.removeEventListener(P,Is),c.event.triggered=void 0,p&&(a[y]=p)),n.result}},simulate:function(n,i,a){var u=c.extend(new c.Event,a,{type:n,isSimulated:!0});c.event.trigger(u,null,i)}}),c.fn.extend({trigger:function(n,i){return this.each(function(){c.event.trigger(n,i,this)})},triggerHandler:function(n,i){var a=this[0];if(a)return c.event.trigger(n,i,a,!0)}});var an=t.location,Ss={guid:Date.now()},jr=/\?/;c.parseXML=function(n){var i,a;if(!n||typeof n!="string")return null;try{i=new t.DOMParser().parseFromString(n,"text/xml")}catch{}return a=i&&i.getElementsByTagName("parsererror")[0],(!i||a)&&c.error("Invalid XML: "+(a?c.map(a.childNodes,function(u){return u.textContent}).join(`
`):n)),i};var tu=/\[\]$/,Cs=/\r?\n/g,nu=/^(?:submit|button|image|reset|file)$/i,ru=/^(?:input|select|textarea|keygen)/i;function Br(n,i,a,u){var f;if(Array.isArray(i))c.each(i,function(d,p){a||tu.test(n)?u(n,p):Br(n+"["+(typeof p=="object"&&p!=null?d:"")+"]",p,a,u)});else if(!a&&D(i)==="object")for(f in i)Br(n+"["+f+"]",i[f],a,u);else u(n,i)}c.param=function(n,i){var a,u=[],f=function(d,p){var v=typeof p=="function"?p():p;u[u.length]=encodeURIComponent(d)+"="+encodeURIComponent(v??"")};if(n==null)return"";if(Array.isArray(n)||n.jquery&&!c.isPlainObject(n))c.each(n,function(){f(this.name,this.value)});else for(a in n)Br(a,n[a],i,f);return u.join("&")},c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var n=c.prop(this,"elements");return n?c.makeArray(n):this}).filter(function(){var n=this.type;return this.name&&!c(this).is(":disabled")&&ru.test(this.nodeName)&&!nu.test(n)&&(this.checked||!Hn.test(n))}).map(function(n,i){var a=c(this).val();return a==null?null:Array.isArray(a)?c.map(a,function(u){return{name:i.name,value:u.replace(Cs,`\r
`)}}):{name:i.name,value:a.replace(Cs,`\r
`)}}).get()}});var iu=/%20/g,su=/#.*$/,ou=/([?&])_=[^&]*/,au=/^(.*?):[ \t]*([^\r\n]*)$/mg,cu=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,uu=/^(?:GET|HEAD)$/,lu=/^\/\//,Rs={},Fr={},As="*/".concat("*"),Hr=k.createElement("a");Hr.href=an.href;function Os(n){return function(i,a){typeof i!="string"&&(a=i,i="*");var u,f=0,d=i.toLowerCase().match(Ie)||[];if(typeof a=="function")for(;u=d[f++];)u[0]==="+"?(u=u.slice(1)||"*",(n[u]=n[u]||[]).unshift(a)):(n[u]=n[u]||[]).push(a)}}function Ns(n,i,a,u){var f={},d=n===Fr;function p(v){var y;return f[v]=!0,c.each(n[v]||[],function(T,C){var x=C(i,a,u);if(typeof x=="string"&&!d&&!f[x])return i.dataTypes.unshift(x),p(x),!1;if(d)return!(y=x)}),y}return p(i.dataTypes[0])||!f["*"]&&p("*")}function $r(n,i){var a,u,f=c.ajaxSettings.flatOptions||{};for(a in i)i[a]!==void 0&&((f[a]?n:u||(u={}))[a]=i[a]);return u&&c.extend(!0,n,u),n}function fu(n,i,a){for(var u,f,d,p,v=n.contents,y=n.dataTypes;y[0]==="*";)y.shift(),u===void 0&&(u=n.mimeType||i.getResponseHeader("Content-Type"));if(u){for(f in v)if(v[f]&&v[f].test(u)){y.unshift(f);break}}if(y[0]in a)d=y[0];else{for(f in a){if(!y[0]||n.converters[f+" "+y[0]]){d=f;break}p||(p=f)}d=d||p}if(d)return d!==y[0]&&y.unshift(d),a[d]}function du(n,i,a,u){var f,d,p,v,y,T={},C=n.dataTypes.slice();if(C[1])for(p in n.converters)T[p.toLowerCase()]=n.converters[p];for(d=C.shift();d;)if(n.responseFields[d]&&(a[n.responseFields[d]]=i),!y&&u&&n.dataFilter&&(i=n.dataFilter(i,n.dataType)),y=d,d=C.shift(),d){if(d==="*")d=y;else if(y!=="*"&&y!==d){if(p=T[y+" "+d]||T["* "+d],!p){for(f in T)if(v=f.split(" "),v[1]===d&&(p=T[y+" "+v[0]]||T["* "+v[0]],p)){p===!0?p=T[f]:T[f]!==!0&&(d=v[0],C.unshift(v[1]));break}}if(p!==!0)if(p&&n.throws)i=p(i);else try{i=p(i)}catch(x){return{state:"parsererror",error:p?x:"No conversion from "+y+" to "+d}}}}return{state:"success",data:i}}c.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:an.href,type:"GET",isLocal:cu.test(an.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":As,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":c.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(n,i){return i?$r($r(n,c.ajaxSettings),i):$r(c.ajaxSettings,n)},ajaxPrefilter:Os(Rs),ajaxTransport:Os(Fr),ajax:function(n,i){typeof n=="object"&&(i=n,n=void 0),i=i||{};var a,u,f,d,p,v,y,T,C,x,I=c.ajaxSetup({},i),P=I.context||I,z=I.context&&(P.nodeType||P.jquery)?c(P):c.event,X=c.Deferred(),V=c.Callbacks("once memory"),se=I.statusCode||{},re={},_e={},pe="canceled",Z={readyState:0,getResponseHeader:function(ee){var ue;if(y){if(!d)for(d={};ue=au.exec(f);)d[ue[1].toLowerCase()+" "]=(d[ue[1].toLowerCase()+" "]||[]).concat(ue[2]);ue=d[ee.toLowerCase()+" "]}return ue==null?null:ue.join(", ")},getAllResponseHeaders:function(){return y?f:null},setRequestHeader:function(ee,ue){return y==null&&(ee=_e[ee.toLowerCase()]=_e[ee.toLowerCase()]||ee,re[ee]=ue),this},overrideMimeType:function(ee){return y==null&&(I.mimeType=ee),this},statusCode:function(ee){var ue;if(ee)if(y)Z.always(ee[Z.status]);else for(ue in ee)se[ue]=[se[ue],ee[ue]];return this},abort:function(ee){var ue=ee||pe;return a&&a.abort(ue),Vn(0,ue),this}};if(X.promise(Z),I.url=((n||I.url||an.href)+"").replace(lu,an.protocol+"//"),I.type=i.method||i.type||I.method||I.type,I.dataTypes=(I.dataType||"*").toLowerCase().match(Ie)||[""],I.crossDomain==null){v=k.createElement("a");try{v.href=I.url,v.href=v.href,I.crossDomain=Hr.protocol+"//"+Hr.host!=v.protocol+"//"+v.host}catch{I.crossDomain=!0}}if(Ns(Rs,I,i,Z),I.data&&I.processData&&typeof I.data!="string"&&(I.data=c.param(I.data,I.traditional)),y)return Z;T=c.event&&I.global,T&&c.active++===0&&c.event.trigger("ajaxStart"),I.type=I.type.toUpperCase(),I.hasContent=!uu.test(I.type),u=I.url.replace(su,""),I.hasContent?I.data&&I.processData&&(I.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(I.data=I.data.replace(iu,"+")):(x=I.url.slice(u.length),I.data&&(I.processData||typeof I.data=="string")&&(u+=(jr.test(u)?"&":"?")+I.data,delete I.data),I.cache===!1&&(u=u.replace(ou,"$1"),x=(jr.test(u)?"&":"?")+"_="+Ss.guid+++x),I.url=u+x),I.ifModified&&(c.lastModified[u]&&Z.setRequestHeader("If-Modified-Since",c.lastModified[u]),c.etag[u]&&Z.setRequestHeader("If-None-Match",c.etag[u])),(I.data&&I.hasContent&&I.contentType!==!1||i.contentType)&&Z.setRequestHeader("Content-Type",I.contentType),Z.setRequestHeader("Accept",I.dataTypes[0]&&I.accepts[I.dataTypes[0]]?I.accepts[I.dataTypes[0]]+(I.dataTypes[0]!=="*"?", "+As+"; q=0.01":""):I.accepts["*"]);for(C in I.headers)Z.setRequestHeader(C,I.headers[C]);if(I.beforeSend&&(I.beforeSend.call(P,Z,I)===!1||y))return Z.abort();if(pe="abort",V.add(I.complete),Z.done(I.success),Z.fail(I.error),a=Ns(Fr,I,i,Z),!a)Vn(-1,"No Transport");else{if(Z.readyState=1,T&&z.trigger("ajaxSend",[Z,I]),y)return Z;I.async&&I.timeout>0&&(p=t.setTimeout(function(){Z.abort("timeout")},I.timeout));try{y=!1,a.send(re,Vn)}catch(ee){if(y)throw ee;Vn(-1,ee)}}function Vn(ee,ue,xs,mu){var at,Wr,cn,qt,Wt,He=ue;y||(y=!0,p&&t.clearTimeout(p),a=void 0,f=mu||"",Z.readyState=ee>0?4:0,at=ee>=200&&ee<300||ee===304,xs&&(qt=fu(I,Z,xs)),!at&&c.inArray("script",I.dataTypes)>-1&&c.inArray("json",I.dataTypes)<0&&(I.converters["text script"]=function(){}),qt=du(I,qt,Z,at),at?(I.ifModified&&(Wt=Z.getResponseHeader("Last-Modified"),Wt&&(c.lastModified[u]=Wt),Wt=Z.getResponseHeader("etag"),Wt&&(c.etag[u]=Wt)),ee===204||I.type==="HEAD"?He="nocontent":ee===304?He="notmodified":(He=qt.state,Wr=qt.data,cn=qt.error,at=!cn)):(cn=He,(ee||!He)&&(He="error",ee<0&&(ee=0))),Z.status=ee,Z.statusText=(ue||He)+"",at?X.resolveWith(P,[Wr,He,Z]):X.rejectWith(P,[Z,He,cn]),Z.statusCode(se),se=void 0,T&&z.trigger(at?"ajaxSuccess":"ajaxError",[Z,I,at?Wr:cn]),V.fireWith(P,[Z,He]),T&&(z.trigger("ajaxComplete",[Z,I]),--c.active||c.event.trigger("ajaxStop")))}return Z},getJSON:function(n,i,a){return c.get(n,i,a,"json")},getScript:function(n,i){return c.get(n,void 0,i,"script")}}),c.each(["get","post"],function(n,i){c[i]=function(a,u,f,d){return(typeof u=="function"||u===null)&&(d=d||f,f=u,u=void 0),c.ajax(c.extend({url:a,type:i,dataType:d,data:u,success:f},c.isPlainObject(a)&&a))}}),c.ajaxPrefilter(function(n){var i;for(i in n.headers)i.toLowerCase()==="content-type"&&(n.contentType=n.headers[i]||"")}),c._evalUrl=function(n,i,a){return c.ajax({url:n,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,scriptAttrs:i.crossOrigin?{crossOrigin:i.crossOrigin}:void 0,converters:{"text script":function(){}},dataFilter:function(u){c.globalEval(u,i,a)}})},c.fn.extend({wrapAll:function(n){var i;return this[0]&&(typeof n=="function"&&(n=n.call(this[0])),i=c(n,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&i.insertBefore(this[0]),i.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(n){return typeof n=="function"?this.each(function(i){c(this).wrapInner(n.call(this,i))}):this.each(function(){var i=c(this),a=i.contents();a.length?a.wrapAll(n):i.append(n)})},wrap:function(n){var i=typeof n=="function";return this.each(function(a){c(this).wrapAll(i?n.call(this,a):n)})},unwrap:function(n){return this.parent(n).not("body").each(function(){c(this).replaceWith(this.childNodes)}),this}}),c.expr.pseudos.hidden=function(n){return!c.expr.pseudos.visible(n)},c.expr.pseudos.visible=function(n){return!!(n.offsetWidth||n.offsetHeight||n.getClientRects().length)},c.ajaxSettings.xhr=function(){return new t.XMLHttpRequest};var hu={0:200};c.ajaxTransport(function(n){var i;return{send:function(a,u){var f,d=n.xhr();if(d.open(n.type,n.url,n.async,n.username,n.password),n.xhrFields)for(f in n.xhrFields)d[f]=n.xhrFields[f];n.mimeType&&d.overrideMimeType&&d.overrideMimeType(n.mimeType),!n.crossDomain&&!a["X-Requested-With"]&&(a["X-Requested-With"]="XMLHttpRequest");for(f in a)d.setRequestHeader(f,a[f]);i=function(p){return function(){i&&(i=d.onload=d.onerror=d.onabort=d.ontimeout=null,p==="abort"?d.abort():p==="error"?u(d.status,d.statusText):u(hu[d.status]||d.status,d.statusText,(d.responseType||"text")==="text"?{text:d.responseText}:{binary:d.response},d.getAllResponseHeaders()))}},d.onload=i(),d.onabort=d.onerror=d.ontimeout=i("error"),i=i("abort");try{d.send(n.hasContent&&n.data||null)}catch(p){if(i)throw p}},abort:function(){i&&i()}}});function Ps(n){return n.scriptAttrs||!n.headers&&(n.crossDomain||n.async&&c.inArray("json",n.dataTypes)<0)}c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},converters:{"text script":function(n){return c.globalEval(n),n}}}),c.ajaxPrefilter("script",function(n){n.cache===void 0&&(n.cache=!1),Ps(n)&&(n.type="GET")}),c.ajaxTransport("script",function(n){if(Ps(n)){var i,a;return{send:function(u,f){i=c("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",a=function(d){i.remove(),a=null,d&&f(d.type==="error"?404:200,d.type)}),k.head.appendChild(i[0])},abort:function(){a&&a()}}}});var ks=[],qr=/(=)\?(?=&|$)|\?\?/;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var n=ks.pop()||c.expando+"_"+Ss.guid++;return this[n]=!0,n}}),c.ajaxPrefilter("jsonp",function(n,i,a){var u,f,d,p=n.jsonp!==!1&&(qr.test(n.url)?"url":typeof n.data=="string"&&(n.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&qr.test(n.data)&&"data");return u=n.jsonpCallback=typeof n.jsonpCallback=="function"?n.jsonpCallback():n.jsonpCallback,p?n[p]=n[p].replace(qr,"$1"+u):n.jsonp!==!1&&(n.url+=(jr.test(n.url)?"&":"?")+n.jsonp+"="+u),n.converters["script json"]=function(){return d||c.error(u+" was not called"),d[0]},n.dataTypes[0]="json",f=t[u],t[u]=function(){d=arguments},a.always(function(){f===void 0?c(t).removeProp(u):t[u]=f,n[u]&&(n.jsonpCallback=i.jsonpCallback,ks.push(u)),d&&typeof f=="function"&&f(d[0]),d=f=void 0}),"script"}),c.ajaxPrefilter(function(n,i){typeof n.data!="string"&&!c.isPlainObject(n.data)&&!Array.isArray(n.data)&&!("processData"in i)&&(n.processData=!1),n.data instanceof t.FormData&&(n.contentType=!1)}),c.parseHTML=function(n,i,a){if(typeof n!="string"&&!Yi(n+""))return[];typeof i=="boolean"&&(a=i,i=!1);var u,f;return i||(i=new t.DOMParser().parseFromString("","text/html")),u=Xi.exec(n),f=!a&&[],u?[i.createElement(u[1])]:(u=os([n],i,f),f&&f.length&&c(f).remove(),c.merge([],u.childNodes))},c.fn.load=function(n,i,a){var u,f,d,p=this,v=n.indexOf(" ");return v>-1&&(u=wt(n.slice(v)),n=n.slice(0,v)),typeof i=="function"?(a=i,i=void 0):i&&typeof i=="object"&&(f="POST"),p.length>0&&c.ajax({url:n,type:f||"GET",dataType:"html",data:i}).done(function(y){d=arguments,p.html(u?c("<div>").append(c.parseHTML(y)).find(u):y)}).always(a&&function(y,T){p.each(function(){a.apply(this,d||[y.responseText,T,y])})}),this},c.expr.pseudos.animated=function(n){return c.grep(c.timers,function(i){return n===i.elem}).length},c.offset={setOffset:function(n,i,a){var u,f,d,p,v,y,T,C=c.css(n,"position"),x=c(n),I={};C==="static"&&(n.style.position="relative"),v=x.offset(),d=c.css(n,"top"),y=c.css(n,"left"),T=(C==="absolute"||C==="fixed")&&(d+y).indexOf("auto")>-1,T?(u=x.position(),p=u.top,f=u.left):(p=parseFloat(d)||0,f=parseFloat(y)||0),typeof i=="function"&&(i=i.call(n,a,c.extend({},v))),i.top!=null&&(I.top=i.top-v.top+p),i.left!=null&&(I.left=i.left-v.left+f),"using"in i?i.using.call(n,I):x.css(I)}},c.fn.extend({offset:function(n){if(arguments.length)return n===void 0?this:this.each(function(f){c.offset.setOffset(this,n,f)});var i,a,u=this[0];if(u)return u.getClientRects().length?(i=u.getBoundingClientRect(),a=u.ownerDocument.defaultView,{top:i.top+a.pageYOffset,left:i.left+a.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var n,i,a,u=this[0],f={top:0,left:0};if(c.css(u,"position")==="fixed")i=u.getBoundingClientRect();else{for(i=this.offset(),a=u.ownerDocument,n=u.offsetParent||a.documentElement;n&&n!==a.documentElement&&c.css(n,"position")==="static";)n=n.offsetParent||a.documentElement;n&&n!==u&&n.nodeType===1&&c.css(n,"position")!=="static"&&(f=c(n).offset(),f.top+=c.css(n,"borderTopWidth",!0),f.left+=c.css(n,"borderLeftWidth",!0))}return{top:i.top-f.top-c.css(u,"marginTop",!0),left:i.left-f.left-c.css(u,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var n=this.offsetParent;n&&c.css(n,"position")==="static";)n=n.offsetParent;return n||de})}}),c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(n,i){var a=i==="pageYOffset";c.fn[n]=function(u){return Ae(this,function(f,d,p){var v;if($(f)?v=f:f.nodeType===9&&(v=f.defaultView),p===void 0)return v?v[i]:f[d];v?v.scrollTo(a?v.pageXOffset:p,a?p:v.pageYOffset):f[d]=p},n,u,arguments.length)}}),c.each({Height:"height",Width:"width"},function(n,i){c.each({padding:"inner"+n,content:i,"":"outer"+n},function(a,u){c.fn[u]=function(f,d){var p=arguments.length&&(a||typeof f!="boolean"),v=a||(f===!0||d===!0?"margin":"border");return Ae(this,function(y,T,C){var x;return $(y)?u.indexOf("outer")===0?y["inner"+n]:y.document.documentElement["client"+n]:y.nodeType===9?(x=y.documentElement,Math.max(y.body["scroll"+n],x["scroll"+n],y.body["offset"+n],x["offset"+n],x["client"+n])):C===void 0?c.css(y,T,v):c.style(y,T,C,v)},i,p?f:void 0,p)}})}),c.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(n,i){c.fn[i]=function(a){return this.on(i,a)}}),c.fn.extend({bind:function(n,i,a){return this.on(n,null,i,a)},unbind:function(n,i){return this.off(n,null,i)},delegate:function(n,i,a,u){return this.on(i,n,a,u)},undelegate:function(n,i,a){return arguments.length===1?this.off(n,"**"):this.off(i,n||"**",a)},hover:function(n,i){return this.on("mouseenter",n).on("mouseleave",i||n)}}),c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(n,i){c.fn[i]=function(a,u){return arguments.length>0?this.on(i,null,a,u):this.trigger(i)}}),c.proxy=function(n,i){var a,u,f;if(typeof i=="string"&&(a=n[i],i=n,n=a),typeof n=="function")return u=o.call(arguments,2),f=function(){return n.apply(i||this,u.concat(o.call(arguments)))},f.guid=n.guid=n.guid||c.guid++,f},c.holdReady=function(n){n?c.readyWait++:c.ready(!0)},c.expr[":"]=c.expr.filters=c.expr.pseudos,typeof define=="function"&&define.amd&&define("jquery",[],function(){return c});var pu=t.jQuery,gu=t.$;return c.noConflict=function(n){return t.$===c&&(t.$=gu),n&&t.jQuery===c&&(t.jQuery=pu),c},c}var Tm=sm(window),ko={};(function(t,e){typeof e>"u"&&h("Pagination requires jQuery.");var r="pagination",s="addHook",o="__pagination-";e.fn.pagination&&h('plugin conflicted, the name "pagination" has been taken by another jQuery plugin.'),e.fn[r]=function(O){if(typeof O>"u")return this;var L=e(this),S=e.extend({},e.fn[r].defaults,O),D={initialize:function(){var _=this;if(L.data("pagination")||L.data("pagination",{}),_.callHook("beforeInit")!==!1){L.data("pagination").initialized&&e(".paginationjs",L).remove(),_.disabled=!!S.disabled;var k=_.model={pageRange:S.pageRange,pageSize:S.pageSize};_.parseDataSource(S.dataSource,function(M){_.isAsync=l.isString(M),l.isArray(M)&&(k.totalNumber=S.totalNumber=M.length),_.isDynamicTotalNumber=_.isAsync&&S.totalNumberLocator;var B=_.render(!0);S.className&&B.addClass(S.className),k.el=B,L[S.position==="bottom"?"append":"prepend"](B),_.observer(),L.data("pagination").initialized=!0,_.callHook("afterInit",B)})}},render:function(_){var k=this,M=k.model,B=M.el||e('<div class="paginationjs"></div>'),j=_!==!0;k.callHook("beforeRender",j);var F=M.pageNumber||S.pageNumber,c=S.pageRange||0,R=k.getTotalPage(),m=F-c,b=F+c;return b>R&&(b=R,m=R-c*2,m=m<1?1:m),m<=1&&(m=1,b=Math.min(c*2+1,R)),B.html(k.generateHTML({currentPage:F,pageRange:c,rangeStart:m,rangeEnd:b})),S.hideOnlyOnePage&&B[R<=1?"hide":"show"](),k.callHook("afterRender",j),B},getPageLinkTag:function(_){var k=S.pageLink;return k?`<a href="${k}">${_}</a>`:`<a>${_}</a>`},generatePageNumbersHTML:function(_){var k=this,M=_.currentPage,B=k.getTotalPage(),j=k.getPageLinkTag,F=_.rangeStart,c=_.rangeEnd,R="",m,b=S.ellipsisText,H=S.classPrefix,W=S.pageClassName||"",U=S.activeClassName||"",q=S.disableClassName||"";if(S.pageRange===null){for(m=1;m<=B;m++)m==M?R+=`<li class="${H}-page J-paginationjs-page ${W} ${U}" data-num="${m}"><a>${m}</a></li>`:R+=`<li class="${H}-page J-paginationjs-page ${W}" data-num="${m}">${j(m)}</li>`;return R}if(F<=3)for(m=1;m<F;m++)m==M?R+=`<li class="${H}-page J-paginationjs-page ${W} ${U}" data-num="${m}"><a>${m}</a></li>`:R+=`<li class="${H}-page J-paginationjs-page ${W}" data-num="${m}">${j(m)}</li>`;else S.hideFirstOnEllipsisShow||(R+=`<li class="${H}-page ${H}-first J-paginationjs-page ${W}" data-num="1">${j(1)}</li>`),R+=`<li class="${H}-ellipsis ${q}"><a>${b}</a></li>`;for(m=F;m<=c;m++)m==M?R+=`<li class="${H}-page J-paginationjs-page ${W} ${U}" data-num="${m}"><a>${m}</a></li>`:R+=`<li class="${H}-page J-paginationjs-page ${W}" data-num="${m}">${j(m)}</li>`;if(c>=B-2)for(m=c+1;m<=B;m++)R+=`<li class="${H}-page J-paginationjs-page ${W}" data-num="${m}">${j(m)}</li>`;else R+=`<li class="${H}-ellipsis ${q}"><a>${b}</a></li>`,S.hideLastOnEllipsisShow||(R+=`<li class="${H}-page ${H}-last J-paginationjs-page ${W}" data-num="${B}">${j(B)}</li>`);return R},generateHTML:function(_){var k=this,M=_.currentPage,B=k.getTotalPage(),j=k.getPageLinkTag,F=k.getTotalNumber(),c=S.pageSize,R=S.showPrevious,m=S.showNext,b=S.showPageNumbers,H=S.showNavigator,W=S.showSizeChanger,U=S.sizeChangerOptions,q=S.showGoInput,J=S.showGoButton,Q=S.prevText,te=S.nextText,de=S.goButtonText,he=S.classPrefix,Be=S.disableClassName||"",nt=S.ulClassName||"",be=S.prevClassName||"",Re=S.nextClassName||"",ie="",ke='<select class="J-paginationjs-size-select">',yt='<input type="text" class="J-paginationjs-go-pagenumber">',Nn=`<input type="button" class="J-paginationjs-go-button" value="${de}">`,oe,rt=typeof S.formatSizeChanger=="function"?S.formatSizeChanger(M,B,F):S.formatSizeChanger,Pn=typeof S.formatNavigator=="function"?S.formatNavigator(M,B,F):S.formatNavigator,tn=typeof S.formatGoInput=="function"?S.formatGoInput(yt,M,B,F):S.formatGoInput,it=typeof S.formatGoButton=="function"?S.formatGoButton(Nn,M,B,F):S.formatGoButton,Tr=typeof S.autoHidePrevious=="function"?S.autoHidePrevious():S.autoHidePrevious,kt=typeof S.autoHideNext=="function"?S.autoHideNext():S.autoHideNext,Ae=typeof S.header=="function"?S.header(M,B,F):S.header,Ie=typeof S.footer=="function"?S.footer(M,B,F):S.footer;if(Ae&&(oe=k.replaceVariables(Ae,{currentPage:M,totalPage:B,totalNumber:F}),ie+=oe),H&&Pn&&(oe=k.replaceVariables(Pn,{currentPage:M,totalPage:B,totalNumber:F,rangeStart:(M-1)*c+1,rangeEnd:Math.min(M*c,F)}),ie+=`<div class="${he}-nav J-paginationjs-nav">${oe}</div>`),(R||b||m)&&(ie+='<div class="paginationjs-pages">',nt?ie+=`<ul class="${nt}">`:ie+="<ul>",R&&(M<=1?Tr||(ie+=`<li class="${he}-prev ${Be} ${be}"><a>${Q}</a></li>`):ie+=`<li class="${he}-prev J-paginationjs-previous ${be}" data-num="${M-1}" title="Previous page">${j(Q)}</li>`),b&&(ie+=k.generatePageNumbersHTML(_)),m&&(M>=B?kt||(ie+=`<li class="${he}-next ${Be} ${Re}"><a>${te}</a></li>`):ie+=`<li class="${he}-next J-paginationjs-next ${Re}" data-num="${M+1}" title="Next page">${j(te)}</li>`),ie+="</ul></div>"),W&&l.isArray(U)){U.indexOf(c)===-1&&(U.unshift(c),U.sort((ze,Er)=>ze-Er));for(let ze=0;ze<U.length;ze++)ke+=`<option value="${U[ze]}"${U[ze]===c?" selected":""}>${U[ze]} / page</option>`;ke+="</select>",oe=ke,rt&&(oe=k.replaceVariables(rt,{length:ke,total:F})),ie+=`<div class="paginationjs-size-changer">${oe}</div>`}return q&&tn&&(oe=k.replaceVariables(tn,{currentPage:M,totalPage:B,totalNumber:F,input:yt}),ie+=`<div class="${he}-go-input">${oe}</div>`),J&&it&&(oe=k.replaceVariables(it,{currentPage:M,totalPage:B,totalNumber:F,button:Nn}),ie+=`<div class="${he}-go-button">${oe}</div>`),Ie&&(oe=k.replaceVariables(Ie,{currentPage:M,totalPage:B,totalNumber:F}),ie+=oe),ie},findTotalNumberFromRemoteResponse:function(_){var k=this;k.model.totalNumber=S.totalNumberLocator(_)},go:function(_,k){var M=this,B=M.model;if(M.disabled)return;var j=_;if(j=parseInt(j),!j||j<1)return;var F=S.pageSize,c=M.getTotalNumber(),R=M.getTotalPage();if(c>0&&j>R)return;if(!M.isAsync){J(M.getPagingData(j));return}var m={},b=S.alias||{},H=b.pageSize?b.pageSize:"pageSize",W=b.pageNumber?b.pageNumber:"pageNumber";m[H]=F,m[W]=j;var U=typeof S.ajax=="function"?S.ajax():S.ajax;U&&U.pageNumberStartWithZero&&(m[W]=j-1);var q={type:"get",cache:!1,data:{},contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"json",async:!0};e.extend(!0,q,U),e.extend(q.data,m),q.url=S.dataSource,q.success=function(Q){try{M.model.originalResponse=Q,M.isDynamicTotalNumber?M.findTotalNumberFromRemoteResponse(Q):M.model.totalNumber=S.totalNumber;var te=M.filterDataWithLocator(Q);J(te)}catch(de){if(typeof S.onError=="function")S.onError(de,"ajaxSuccessHandlerError");else throw de}},q.error=function(Q,te,de){S.formatAjaxError&&S.formatAjaxError(Q,te,de),M.enable()},M.disable(),S.ajaxFunction?S.ajaxFunction(q):e.ajax(q);function J(Q){if(M.callHook("beforePaging",j)===!1)return!1;if(B.direction=typeof B.pageNumber>"u"?0:j>B.pageNumber?1:-1,B.pageNumber=j,M.render(),M.disabled&&M.isAsync&&M.enable(),L.data("pagination").model=B,S.formatResult){var te=e.extend(!0,[],Q);l.isArray(Q=S.formatResult(te))||(Q=te)}L.data("pagination").currentPageData=Q,M.doCallback(Q,k),M.callHook("afterPaging",j),j==1?M.callHook("afterIsFirstPage"):j==M.getTotalPage()&&M.callHook("afterIsLastPage")}},doCallback:function(_,k){var M=this,B=M.model;typeof k=="function"?k(_,B):typeof S.callback=="function"&&S.callback(_,B)},destroy:function(){this.callHook("beforeDestroy")!==!1&&(this.model.el.remove(),L.off(),e("#paginationjs-style").remove(),this.callHook("afterDestroy"))},previous:function(_){this.go(this.model.pageNumber-1,_)},next:function(_){this.go(this.model.pageNumber+1,_)},disable:function(){var _=this,k=_.isAsync?"async":"sync";_.callHook("beforeDisable",k)!==!1&&(_.disabled=!0,_.model.disabled=!0,_.callHook("afterDisable",k))},enable:function(){var _=this,k=_.isAsync?"async":"sync";_.callHook("beforeEnable",k)!==!1&&(_.disabled=!1,_.model.disabled=!1,_.callHook("afterEnable",k))},refresh:function(_){this.go(this.model.pageNumber,_)},show:function(){var _=this;_.model.el.is(":visible")||_.model.el.show()},hide:function(){var _=this;_.model.el.is(":visible")&&_.model.el.hide()},replaceVariables:function(_,k){var M;for(var B in k){var j=k[B],F=new RegExp("<%=\\s*"+B+"\\s*%>","img");M=(M||_).replace(F,j)}return M},getPagingData:function(_){var k=S.pageSize,M=S.dataSource,B=this.getTotalNumber(),j=k*(_-1)+1,F=Math.min(_*k,B);return M.slice(j-1,F)},getTotalNumber:function(){return this.model.totalNumber||S.totalNumber||0},getTotalPage:function(){return Math.ceil(this.getTotalNumber()/S.pageSize)},getLocator:function(_){var k;return typeof _=="string"?k=_:typeof _=="function"?k=_():h('"locator" is incorrect. Expect string or function type.'),k},filterDataWithLocator:function(_){var k=this.getLocator(S.locator),M;if(l.isObject(_)){try{e.each(k.split("."),function(B,j){M=(M||_)[j]})}catch{}M?l.isArray(M)||h("dataSource."+k+" should be an Array."):h("dataSource."+k+" is undefined.")}return M||_},parseDataSource:function(_,k){var M=this;l.isObject(_)?k(S.dataSource=M.filterDataWithLocator(_)):l.isArray(_)?k(S.dataSource=_):typeof _=="function"?S.dataSource(function(B){l.isArray(B)||h('The parameter of "done" Function should be an Array.'),M.parseDataSource.call(M,B,k)}):typeof _=="string"?(/^https?|file:/.test(_)&&(S.ajaxDataType="jsonp"),k(_)):h("Unexpected dataSource type")},callHook:function(_){var k=L.data("pagination")||{},M,B=Array.prototype.slice.apply(arguments);return B.shift(),S[_]&&typeof S[_]=="function"&&S[_].apply(t,B)===!1&&(M=!1),k.hooks&&k.hooks[_]&&e.each(k.hooks[_],function(j,F){F.apply(t,B)===!1&&(M=!1)}),M!==!1},observer:function(){var _=this,k=_.model.el;L.on(o+"go",function(j,F,c){typeof F=="string"&&(F=parseInt(F.trim())),F&&(typeof F!="number"&&h('"pageNumber" is incorrect. (Number)'),_.go(F,c))}),k.on("click",".J-paginationjs-page",function(j){var F=e(j.currentTarget),c=F.attr("data-num").trim();if(!(!c||F.hasClass(S.disableClassName)||F.hasClass(S.activeClassName))&&(_.callHook("beforePageOnClick",j,c)===!1||(_.go(c),_.callHook("afterPageOnClick",j,c),!S.pageLink)))return!1}),k.on("click",".J-paginationjs-previous",function(j){var F=e(j.currentTarget),c=F.attr("data-num").trim();if(!(!c||F.hasClass(S.disableClassName))&&(_.callHook("beforePreviousOnClick",j,c)===!1||(_.go(c),_.callHook("afterPreviousOnClick",j,c),!S.pageLink)))return!1}),k.on("click",".J-paginationjs-next",function(j){var F=e(j.currentTarget),c=F.attr("data-num").trim();if(!(!c||F.hasClass(S.disableClassName))&&(_.callHook("beforeNextOnClick",j,c)===!1||(_.go(c),_.callHook("afterNextOnClick",j,c),!S.pageLink)))return!1}),k.on("click",".J-paginationjs-go-button",function(j){var F=e(".J-paginationjs-go-pagenumber",k).val();if(_.callHook("beforeGoButtonOnClick",j,F)===!1)return!1;L.trigger(o+"go",F),_.callHook("afterGoButtonOnClick",j,F)}),k.on("keyup",".J-paginationjs-go-pagenumber",function(j){if(j.which===13){var F=e(j.currentTarget).val();if(_.callHook("beforeGoInputOnEnter",j,F)===!1)return!1;L.trigger(o+"go",F),e(".J-paginationjs-go-pagenumber",k).focus(),_.callHook("afterGoInputOnEnter",j,F)}}),k.on("change",".J-paginationjs-size-select",function(j){var F=e(j.currentTarget),c=parseInt(F.val()),R=_.model.pageNumber||S.pageNumber;if(typeof c=="number"&&(_.callHook("beforeSizeSelectorChange",j,c)===!1||(S.pageSize=c,_.model.pageSize=c,_.model.totalPage=_.getTotalPage(),R>_.model.totalPage&&(R=_.model.totalPage),_.go(R),_.callHook("afterSizeSelectorChange",j,c),!S.pageLink)))return!1}),L.on(o+"previous",function(j,F){_.previous(F)}),L.on(o+"next",function(j,F){_.next(F)}),L.on(o+"disable",function(){_.disable()}),L.on(o+"enable",function(){_.enable()}),L.on(o+"refresh",function(j,F){_.refresh(F)}),L.on(o+"show",function(){_.show()}),L.on(o+"hide",function(){_.hide()}),L.on(o+"destroy",function(){_.destroy()});var M=Math.max(_.getTotalPage(),1),B=S.pageNumber;_.isDynamicTotalNumber&&S.resetPageNumberOnInit&&(B=1),S.triggerPagingOnInit&&L.trigger(o+"go",Math.min(B,M))}};if(L.data("pagination")&&L.data("pagination").initialized===!0){if(A(O))return L.trigger.call(this,o+"go",O,arguments[1]),this;if(typeof O=="string"){var $=Array.prototype.slice.apply(arguments);switch($[0]=o+$[0],O){case"previous":case"next":case"go":case"disable":case"enable":case"refresh":case"show":case"hide":case"destroy":L.trigger.apply(this,$);break;case"getSelectedPageNum":case"getCurrentPageNum":return L.data("pagination").model?L.data("pagination").model.pageNumber:L.data("pagination").attributes.pageNumber;case"getTotalPage":return Math.ceil(L.data("pagination").model.totalNumber/L.data("pagination").model.pageSize);case"getSelectedPageData":case"getCurrentPageData":return L.data("pagination").currentPageData;case"isDisabled":return L.data("pagination").model.disabled===!0;default:h("Unknown action: "+O)}return this}else w(L)}else l.isObject(O)||h("Illegal options");return g(S),D.initialize(),this},e.fn[r].defaults={totalNumber:0,pageNumber:1,pageSize:10,pageRange:2,showPrevious:!0,showNext:!0,showPageNumbers:!0,showNavigator:!1,showGoInput:!1,showGoButton:!1,showSizeChanger:!1,sizeChangerOptions:[10,20,50,100],pageLink:"",prevText:"&lsaquo;",nextText:"&rsaquo;",ellipsisText:"...",goButtonText:"Go",classPrefix:"paginationjs",activeClassName:"active",disableClassName:"disabled",formatNavigator:"Total <%= totalNumber %> items",formatGoInput:"<%= input %>",formatGoButton:"<%= button %>",position:"bottom",autoHidePrevious:!1,autoHideNext:!1,triggerPagingOnInit:!0,resetPageNumberOnInit:!0,hideOnlyOnePage:!1,hideFirstOnEllipsisShow:!1,hideLastOnEllipsisShow:!1,callback:function(){}},e.fn[s]=function(O,L){arguments.length<2&&h("Expect 2 arguments at least."),typeof L!="function"&&h("callback should be a function.");var S=e(this),D=S.data("pagination");D||(S.data("pagination",{}),D=S.data("pagination")),!D.hooks&&(D.hooks={}),D.hooks[O]=D.hooks[O]||[],D.hooks[O].push(L)},e[r]=function(O,L){arguments.length<2&&h("Requires two parameters.");var S;if(typeof O!="string"&&O instanceof jQuery?S=O:S=e(O),!!S.length)return S.pagination(L),S};var l={};function h(O){throw new Error("Pagination: "+O)}function g(O){O.dataSource||h('"dataSource" is required.'),typeof O.dataSource=="string"?O.totalNumberLocator===void 0?O.totalNumber===void 0?h('"totalNumber" is required.'):A(O.totalNumber)||h('"totalNumber" is incorrect. Expect numberic type'):typeof O.totalNumberLocator!="function"&&h('"totalNumberLocator" should be a Function.'):l.isObject(O.dataSource)&&(typeof O.locator>"u"?h('"dataSource" is an Object, please specify a "locator".'):typeof O.locator!="string"&&typeof O.locator!="function"&&h(""+O.locator+" is incorrect. Expect string or function type")),O.formatResult!==void 0&&typeof O.formatResult!="function"&&h('"formatResult" should be a Function.'),O.onError!==void 0&&typeof O.onError!="function"&&h('"onError" should be a Function.')}function w(O){var L=["go","previous","next","disable","enable","refresh","show","hide","destroy"];e.each(L,function(S,D){O.off(o+D)}),O.data("pagination",{}),e(".paginationjs",O).remove()}function E(O,L){return((L=typeof O)=="object"?O==null&&"null"||Object.prototype.toString.call(O).slice(8,-1):L).toLowerCase()}function A(O){return!isNaN(parseFloat(O))&&isFinite(O)}e.each(["Object","Array","String"],function(O,L){l["is"+L]=function(S){return E(S)===L.toLowerCase()}})})(hn,window.jQuery);const Em=yu({__proto__:null,default:ko},[ko]);export{Zt as E,le as a,lm as b,am as c,hm as d,om as e,fm as f,ym as g,pm as h,_m as i,Tm as j,bm as k,Hl as l,gm as m,wm as n,dm as o,Em as p,vm as r,cm as s,mm as u,um as v};
//# sourceMappingURL=vendor-B0Mi87ju.js.map
