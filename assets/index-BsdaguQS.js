(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,dt=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ut=Symbol(),yt=new WeakMap;let Rt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(dt&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&yt.set(e,t))}return t}toString(){return this.cssText}};const Kt=i=>new Rt(typeof i=="string"?i:i+"",void 0,ut),f=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new Rt(e,i,ut)},Qt=(i,t)=>{if(dt)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=V.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},$t=dt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Kt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ft,defineProperty:Jt,getOwnPropertyDescriptor:Xt,getOwnPropertyNames:Zt,getOwnPropertySymbols:Gt,getPrototypeOf:te}=Object,$=globalThis,_t=$.trustedTypes,ee=_t?_t.emptyScript:"",it=$.reactiveElementPolyfillSupport,R=(i,t)=>i,K={toAttribute(i,t){switch(t){case Boolean:i=i?ee:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},et=(i,t)=>!Ft(i,t),wt={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=wt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Jt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:o}=Xt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const c=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wt}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const t=te(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const e=this.properties,r=[...Zt(e),...Gt(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift($t(s))}else t!==void 0&&e.push($t(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:K).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:K;this._$Em=s,this[s]=c.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??et)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[R("elementProperties")]=new Map,S[R("finalized")]=new Map,it==null||it({ReactiveElement:S}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,Q=U.trustedTypes,xt=Q?Q.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ut="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Mt="?"+y,se=`<${Mt}>`,A=document,z=()=>A.createComment(""),N=i=>i===null||typeof i!="object"&&typeof i!="function",pt=Array.isArray,re=i=>pt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ot=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,At=/-->/g,kt=/>/g,w=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Et=/'/g,St=/"/g,zt=/^(?:script|style|textarea|title)$/i,ie=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),m=ie(1),k=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Ct=new WeakMap,x=A.createTreeWalker(A,129);function Nt(i,t){if(!pt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return xt!==void 0?xt.createHTML(t):t}const oe=(i,t)=>{const e=i.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=j;for(let c=0;c<e;c++){const a=i[c];let l,u,h=-1,p=0;for(;p<a.length&&(n.lastIndex=p,u=n.exec(a),u!==null);)p=n.lastIndex,n===j?u[1]==="!--"?n=At:u[1]!==void 0?n=kt:u[2]!==void 0?(zt.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=w):u[3]!==void 0&&(n=w):n===w?u[0]===">"?(n=s??j,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,l=u[1],n=u[3]===void 0?w:u[3]==='"'?St:Et):n===St||n===Et?n=w:n===At||n===kt?n=j:(n=w,s=void 0);const g=n===w&&i[c+1].startsWith("/>")?" ":"";o+=n===j?a+se:h>=0?(r.push(l),a.slice(0,h)+Ut+a.slice(h)+y+g):a+y+(h===-2?c:g)}return[Nt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class H{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,n=0;const c=t.length-1,a=this.parts,[l,u]=oe(t,e);if(this.el=H.createElement(l,r),x.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=x.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Ut)){const p=u[n++],g=s.getAttribute(h).split(y),q=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:q[2],strings:g,ctor:q[1]==="."?ae:q[1]==="?"?he:q[1]==="@"?ce:st}),s.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:o}),s.removeAttribute(h));if(zt.test(s.tagName)){const h=s.textContent.split(y),p=h.length-1;if(p>0){s.textContent=Q?Q.emptyScript:"";for(let g=0;g<p;g++)s.append(h[g],z()),x.nextNode(),a.push({type:2,index:++o});s.append(h[p],z())}}}else if(s.nodeType===8)if(s.data===Mt)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:o}),h+=y.length-1}o++}}static createElement(t,e){const r=A.createElement("template");return r.innerHTML=t,r}}function P(i,t,e=i,r){var n,c;if(t===k)return t;let s=r!==void 0?(n=e._$Co)==null?void 0:n[r]:e._$Cl;const o=N(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=P(i,s._$AS(i,t.values),s,r)),t}class ne{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??A).importNode(e,!0);x.currentNode=s;let o=x.nextNode(),n=0,c=0,a=r[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new I(o,o.nextSibling,this,t):a.type===1?l=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(l=new le(o,this,t)),this._$AV.push(l),a=r[++c]}n!==(a==null?void 0:a.index)&&(o=x.nextNode(),n++)}return x.currentNode=A,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class I{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),N(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):re(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=H.createElement(Nt(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new ne(s,this),c=n.u(this.options);n.p(e),this.T(c),this._$AH=n}}_$AC(t){let e=Ct.get(t.strings);return e===void 0&&Ct.set(t.strings,e=new H(t)),e}k(t){pt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const o of t)s===e.length?e.push(r=new I(this.O(z()),this.O(z()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,e=this,r,s){const o=this.strings;let n=!1;if(o===void 0)t=P(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==k,n&&(this._$AH=t);else{const c=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=P(this,c[r+a],e,a),l===k&&(l=this._$AH[a]),n||(n=!N(l)||l!==this._$AH[a]),l===d?t=d:t!==d&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ae extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class he extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class ce extends st{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??d)===k)return;const r=this._$AH,s=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==d&&(r===d||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class le{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const nt=U.litHtmlPolyfillSupport;nt==null||nt(H,I),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.2.1");const de=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new I(t.insertBefore(z(),o),o,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=de(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return k}};var jt;v._$litElement$=!0,v.finalized=!0,(jt=globalThis.litElementHydrateSupport)==null||jt.call(globalThis,{LitElement:v});const at=globalThis.litElementPolyfillSupport;at==null||at({LitElement:v});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:et},pe=(i=ue,t,e)=>{const{kind:r,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,i),r==="accessor"){const{name:n}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,a,i)},init(c){return c!==void 0&&this.P(n,void 0,i),c}}}if(r==="setter"){const{name:n}=e;return function(c){const a=this[n];t.call(this,c),this.requestUpdate(n,a,i)}}throw Error("Unsupported decorator location: "+r)};function b(i){return(t,e)=>typeof e=="object"?pe(i,t,e):((r,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(s,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(i){return b({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Dt=i=>(...t)=>({_$litDirective$:i,values:t});let Lt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=(i,t)=>{var r;const e=i._$AN;if(e===void 0)return!1;for(const s of e)(r=s._$AO)==null||r.call(s,t,!1),M(s,t);return!0},F=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Bt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),ve(t)}};function me(i){this._$AN!==void 0?(F(this),this._$AM=i,Bt(this)):this._$AM=i}function fe(i,t=!1,e=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(r))for(let o=e;o<r.length;o++)M(r[o],!1),F(r[o]);else r!=null&&(M(r,!1),F(r));else M(this,i)}const ve=i=>{i.type==Ht.CHILD&&(i._$AP??(i._$AP=fe),i._$AQ??(i._$AQ=me))};class be extends Lt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),Bt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(s=this.disconnected)==null||s.call(this)),e&&(M(this,t),F(this))}setValue(t){if(ge(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const ht=new WeakMap,J=Dt(class extends be{render(i){return d}update(i,[t]){var r;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(r=i.options)==null?void 0:r.host,this.rt(this.ct=i.element)),d}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=ht.get(t);e===void 0&&(e=new WeakMap,ht.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=ht.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function ct(i){return new CustomEvent("search",{detail:{searchQuery:i},bubbles:!0,composed:!0})}var ye=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,It=(i,t,e,r)=>{for(var s=r>1?void 0:r?$e(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&ye(t,e,s),s};const mt={type:Boolean,attribute:"show-result",reflect:!0};let X=class extends v{constructor(){super(...arguments),this.showResult=!1,this.resultViewRef=J()}handleSearchEvent(i){const{searchQuery:t}=i.detail;this.resultViewRef.value.dispatchEvent(ct(t)),this.showResult=!0}render(){return m`
      <nav-bar .showResult=${this.showResult}></nav-bar>
      <input-box
        .showResult=${this.showResult}
        @search=${this.handleSearchEvent}
      ></input-box>
      <result-view
        ${J(this.resultViewRef)}
        .showResult=${this.showResult}
      ></result-view>
    `}};X.styles=f`
    :host {
      display: grid;
      row-gap: .5rem;
      grid-template-rows: auto 0fr;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background-color: var(--allpage-bg-color);
      transition: grid-template-rows .6s;
    }
    :host([show-result]) {
      grid-template-rows: auto 1fr;
    }
  `;It([b(mt)],X.prototype,"showResult",2);X=It([E("app-root")],X);var _e=Object.defineProperty,we=Object.getOwnPropertyDescriptor,qt=(i,t,e,r)=>{for(var s=r>1?void 0:r?we(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&_e(t,e,s),s};let Z=class extends v{constructor(){super(...arguments),this.showResult=!1}render(){return m`
      <theme-toggle .expand=${this.showResult}></theme-toggle>
      <drop-down .expand=${this.showResult}></drop-down>
    `}};Z.styles=[f`
    :host {
      position: absolute;
      top: 0; right: 0;
      display: flex;
      align-items: center;
      gap: .4rem;
      transform: translateX(-1rem) translateY(.6rem);
      z-index: 1;
      transition: transform .3s .3s;
    }
    :host([show-result]) {
      transform: translateX(-1rem) translateY(1rem);
    }
  `];qt([b({type:Boolean,attribute:"show-result",reflect:!0})],Z.prototype,"showResult",2);Z=qt([E("nav-bar")],Z);const rt=f`
  img.dark-invert {
    filter: var(--img-filter);
  }
`,xe=f`
  a.link {
    font-family: var(--text-font);
    text-decoration: none;
  }
  a.link::before {
    content: "🔗"
  }
  a.link:active {
    opacity: .8;
  }
  a.link:link {
    color: var(--default-link-unvisited-color);
  }
  a.link:visited {
    color: var(--default-link-visited-color);
  }
  a.link:focus-visible {
    outline: var(--outline-style);
  }
`,Yt=f`
  button.normal {
    background: var(--normal-btn-bg-color);
    border: 2px solid var(--normal-btn-bd-color);
    border-radius: 6px;
    cursor: pointer;
    transition: background-color .3s,
                border-color .3s;
  }
  button.normal:hover {
    background-color: var(--normal-btn-hovered-bg-color);
  }
  button.normal:focus-visible {
    outline: var(--outline-style);
  }
`,Ae=f`
  .action-btn {
    padding: .4rem .6rem;
    font-size: .875rem;
    background-color: var(--action-btn-bg-color);
    color: var(--default-tx-color);
    cursor: pointer;
    border: none;
    border-radius: .375rem;
    user-select: none;
    text-decoration: none;
    transition: background-color .2s,
                color .2s;
  }
  .action-btn:hover {
    background-color: var(--action-btn-hovered-bg-color);
  }
  .action-btn:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
  .action-btn:focus-visible {
    outline: var(--outline-style);
  }
`,ke=f`
  ruby {
    position: relative;
  }
  ruby::before {
    position: absolute;
    left: 50%;
    bottom: calc(1em + 4px);
    transform: translateX(-50%);
    content: attr(data-notation);
    padding: 2px 6px;
    white-space: nowrap;
    background-color: var(--default-bg-color);
    border-radius: 4px;
    opacity: 0;
    z-index: 1;
    pointer-events: none;
    transition: opacity .3s .05s;
  }
  ruby:hover::before {
    opacity: 1;
  }

  ruby rt {
    position: relative;
    top: 0;
    opacity: 1;
    font-size: 9px;
    transition: opacity .3s;
  }
  ruby:hover rt {
    opacity: 0;
  }
`;var Ee=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,ft=(i,t,e,r)=>{for(var s=r>1?void 0:r?Se(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Ee(t,e,s),s};let D=class extends v{constructor(){super(...arguments),this.dropped=!1,this.expand=!1}render(){return m`
      <button class="normal"
        @click=${()=>this.dropped=!this.dropped}
        @blur=${()=>setTimeout(()=>this.dropped=!1,100)}
      >
        <img class="dark-invert" src="/more.svg" />
      </button>
      <div class="dropped-container">
        <ul class="dropped">
          <a href="https://github.com/BHznJNs/hanzi2kanji" target="blank_">
            <li class="dropped-item">🔗 源码</li>
          </a>
          <li class="dropped-item">👏 鸣谢</li>
          <li class="dropped-item">🎁 捐赠</li>
        </ul>
      </div>
    `}};D.styles=[f`
    :host {
      position: relative;
    }
    .dropped-container {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-20%);
      transition: opacity .3s,
                  transform .3s;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: .4rem .4rem;
      transition: background-color .3s,
                  border-color .3s,
                  padding .3s .3s !important;
    }
    button img {
      width: 16px;
      height: 16px;
      transition: width .3s .3s,
                  height .3s .3s;
    }
    :host([dropped]) .dropped-container {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    :host([expand]) button {
      padding: .6rem .6rem !important;
    }
    :host([expand]) button img {
      width: 18px;
      height: 18px;
    }
    .dropped {
      margin: 0;
      padding: 2px;
      border: solid 2px var(--dropdown-bd-color);
      border-radius: 6px;
      color: var(--default-tx-color);
      background-color: var(--dropdown-bg-color);
      box-shadow: var(--shadow-sm);
      font-family: var(--text-font);
      box-sizing: border-box;
    }
    :host([expand]) .dropped {
      box-shadow: var(--shadow-md-1);
    }
    .dropped a {
      color: inherit !important;
      text-decoration: none;
    }
    .dropped-item {
      padding: .4rem .8rem .4rem .5rem;
      list-style: none;
      cursor: pointer;
      border-radius: 4px;
      white-space: nowrap;
      text-align: center;
      user-select: none;
      transition: background .3s;
    }
    .dropped-item:hover {
      background-color: var(--dropdown-hovered-bg-color);
    }
  `,rt,Yt];ft([b({type:Boolean,reflect:!0})],D.prototype,"dropped",2);ft([b({type:Boolean,reflect:!0})],D.prototype,"expand",2);D=ft([E("drop-down")],D);var W=(i=>(i[i.light=0]="light",i[i.dark=1]="dark",i[i.auto=2]="auto",i))(W||{});const Pt=new Map([[0,"日间"],[1,"夜间"],[2,"自动"]]);function Ce(i){function t(e){document.body.classList.toggle("dark",e),document.body.classList.toggle("light",!e)}t(i===2?G.isPreferedDarkTheme:i===1)}const C=class C{constructor(){this.themeToggleCallbacks=[Ce],this.theme=Number(localStorage.getItem("theme"))??2,C.darkModeMediaQuery&&(C.darkModeMediaQuery.addEventListener("change",()=>this.systemThemeToggleCallback()),this.systemThemeToggleCallback(),window.addEventListener("beforeunload",()=>localStorage.setItem("theme",this.theme.toString())))}static get isPreferedDarkTheme(){return C.darkModeMediaQuery.matches}manuallyToggle(t){t===void 0&&(t=(this.theme+1)%3),this.theme=t;for(const e of this.themeToggleCallbacks)e(t)}systemThemeToggleCallback(){for(const t of this.themeToggleCallbacks)t(this.theme)}};C.darkModeMediaQuery=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");let G=C;const L=new G;window.addEventListener("load",()=>Vt(L.theme));function Pe(){return L.theme}function Vt(i){return L.manuallyToggle(i),L.theme}function Te(i){L.themeToggleCallbacks.push(i)}var Oe=Object.defineProperty,je=Object.getOwnPropertyDescriptor,vt=(i,t,e,r)=>{for(var s=r>1?void 0:r?je(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Oe(t,e,s),s};let B=class extends v{constructor(){super(),this.expand=!1,this.themeName=Pt.get(Pe()),Te(i=>{this.themeName=Pt.get(i),this.toggleAttribute("light",i===W.light),this.toggleAttribute("dark",i===W.dark),this.toggleAttribute("auto",i===W.auto)})}toggleTheme(){Vt()}render(){return m`
      <button class="normal" @click=${this.toggleTheme}>
        <img class="icon-light dark-invert" src="/light_mode.svg" />
        <img class="icon-dark dark-invert"  src="/dark_mode.svg" />
        <img class="icon-auto dark-invert"  src="/auto_mode.svg" />
        <span class="mode-name">${this.themeName}</span>
      </button>
    `}};B.styles=[f`
  :host {
    margin-left: .5rem;
  }
  button {
    position: relative;
    padding: .4rem .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color .3s,
                border-color .3s,
                padding .3s .3s,
                font-size .3s 3s !important;
  }
  :host([expand]) button {
    padding: .6rem .75rem;
    font-size: .875rem;
  }

  .icon-light,
  .icon-dark,
  .icon-auto {
    width: 16px;
    height: 16px;
    transform: rotate(-90deg) scale(0);
    transition: transform .3s,
                width .3s .3s,
                height .3s .3s;
  }

  :host([expand]) .icon-light,
  :host([expand]) .icon-dark,
  :host([expand]) .icon-auto {
    width: 18px;
    height: 18px
  }

  .icon-light {
    transform: rotate(0deg) scale(0);
  }
  .icon-dark, .icon-auto {
    position: absolute;
    left: .6rem;
  }

  :host([light]) .icon-light {
    transform: rotate(0deg) scale(1);
  }
  :host([dark]) .icon-dark {
    transform: rotate(0deg) scale(1);
  }
  :host([auto]) .icon-auto {
    transform: rotate(0deg) scale(1);
  }

  .mode-name {
    color: var(--default-tx-color);
    margin-left: .4rem;
    transition: color .3s;
  }`,Yt,rt];vt([b({type:Boolean,reflect:!0})],B.prototype,"expand",2);vt([gt()],B.prototype,"themeName",2);B=vt([E("theme-toggle")],B);function Re(i,t){let e=null;return function(...r){e&&clearTimeout(e),e=setTimeout(()=>i(...r),t)}}var Ue=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Wt=(i,t,e,r)=>{for(var s=r>1?void 0:r?Me(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Ue(t,e,s),s};let tt=class extends v{constructor(){super(...arguments),this.showResult=!1,this.inputRef=J(),this.debouncedInputHandler=Re(()=>{const i=/^[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]+$/u,t=this.inputRef.value.value;i.test(t)&&this.dispatchEvent(ct(t))},100)}firstUpdated(){this.dispatchEvent(ct("飞"))}render(){return m`
      <div class="container">
        <div class="logo">
          <img src="/favicon.svg" />
        </div>
        <div class="input-wrapper">
          <span class="icon search">
            <img class="dark-invert" src="/search.svg" />
          </span>
          <input
            type="search"
            placeholder="要搜索的汉字"
            maxlength="6"
            ${J(this.inputRef)}
            @input=${this.debouncedInputHandler}
          />
          <button class="icon clear">
            <img class="dark-invert" src="/clear.svg" />
          </button>
        </div>
      </div>
    `}};tt.styles=[f`
    :host {
      display: grid;
      grid-template-columns: auto 0fr;
      width: 100%;
      padding: .6rem 0 1rem;
      margin-bottom: 8rem;
      justify-self: center;
      align-self: center;
      transition: margin .6s,
                  grid-template-columns .3s .3s;
    }
    :host([show-result]) {
      margin-bottom: 0;
      grid-template-columns: auto 1fr;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.2rem;
      margin: 0 1.25rem;
    }

    .logo {
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 1.8rem;
      overflow: hidden;
      box-shadow: var(--shadow-md-1);
      user-select: none;
    }
    .logo img {
      width: 100%;
      height: 100%;
    }
    :host([show-result]) .logo {
      width: 3.2rem;
      height: 3.2rem;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      width: fit-content;
      border: 1px solid var(--search-box-bd-color);
      background-color: var(--search-box-color);
      box-shadow: var(--shadow-sm);
      border-radius: 1.5rem;
      overflow: hidden;
      transition: box-shadow .3s;
    }
    .input-wrapper:hover {
      background-color: var(--search-box-hovered-color);
    }
    .input-wrapper:focus-within {
      box-shadow: var(--shadow-md-1);
      background-color: var(--search-box-focused-color);
    }
    .input-wrapper .icon {
      font-size: 0;
      opacity: .4;
      user-select: none;
    }
    .icon.search {
      margin: 0 .4rem 0 .8rem;
    }
    .icon.clear {
      border-radius: 50%;
      cursor: pointer;
      padding: 2px;
      margin: 0 .8rem 0 .4rem;
      background-color: transparent;
      border: none;
      transition: background .3s;
    }
    .icon.clear:hover {
      background-color: var(--action-btn-hovered-bg-color);
    }

    input {
      max-width: 10rem;
      padding: .8rem 0;
      font-size: 1rem;
      color: var(--default-tx-color);
      background-color: transparent;
      border: none;
      outline: none;
      transition: max-width .3s,
                  padding .3s;
    }
    input::placeholder {
      color: var(--placeholder-color);
    }
    input::-webkit-search-cancel-button {
      -webkit-appearance: none;
      display: none;
    }

    :host([show-result]) input {
      max-width: 6rem;
      padding-top: .6rem;
      padding-bottom: .6rem;
    }
  `,rt];Wt([b(mt)],tt.prototype,"showResult",2);tt=Wt([E("input-box")],tt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=Symbol();class Ne{get taskComplete(){return this.t||(this.i===1?this.t=new Promise((t,e)=>{this.o=t,this.h=e}):this.i===3?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,e,r){var o;this.p=0,this.i=0,(this._=t).addController(this);const s=typeof e=="object"?e:{task:e,args:r};this.v=s.task,this.j=s.args,this.m=s.argsEqual??He,this.k=s.onComplete,this.A=s.onError,this.autoRun=s.autoRun??!0,"initialValue"in s&&(this.u=s.initialValue,this.i=2,this.O=(o=this.T)==null?void 0:o.call(this))}hostUpdate(){this.autoRun===!0&&this.S()}hostUpdated(){this.autoRun==="afterUpdate"&&this.S()}T(){if(this.j===void 0)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),e=this.O;this.O=t,t===e||t===void 0||e!==void 0&&this.m(e,t)||await this.run(t)}async run(t){var n,c,a,l,u;let e,r;t??(t=this.T()),this.O=t,this.i===1?(n=this.q)==null||n.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this._.requestUpdate()):this._.requestUpdate();const s=++this.p;this.q=new AbortController;let o=!1;try{e=await this.v(t,{signal:this.q.signal})}catch(h){o=!0,r=h}if(this.p===s){if(e===ze)this.i=0;else{if(o===!1){try{(c=this.k)==null||c.call(this,e)}catch{}this.i=2,(a=this.o)==null||a.call(this,e)}else{try{(l=this.A)==null||l.call(this,r)}catch{}this.i=3,(u=this.h)==null||u.call(this,r)}this.u=e,this.l=r}this._.requestUpdate()}}abort(t){var e;this.i===1&&((e=this.q)==null||e.abort(t))}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){var e,r,s,o;switch(this.i){case 0:return(e=t.initial)==null?void 0:e.call(t);case 1:return(r=t.pending)==null?void 0:r.call(t);case 2:return(s=t.complete)==null?void 0:s.call(t,this.value);case 3:return(o=t.error)==null?void 0:o.call(t,this.error);default:throw Error("Unexpected status: "+this.i)}}}const He=(i,t)=>i===t||i.length===t.length&&i.every((e,r)=>!et(e,t[r]));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt extends Lt{constructor(t){if(super(t),this.it=d,t.type!==Ht.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this._t=void 0,this.it=t;if(t===k)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}lt.directiveName="unsafeHTML",lt.resultType=1;const Y=Dt(lt);function De(i){const t=i.codePointAt(0),e=t>>8&255,r=t&255;return e.toString(16).padStart(2,"0").toUpperCase()+r.toString(16).padStart(2,"0").toUpperCase()}const Le={亚:["亜"],爱:["愛"],恶:["悪"],苇:["葦"],压:["圧"],伟:["偉"],围:["囲"],为:["為"],异:["異"],维:["維"],纬:["緯"],违:["違"],遗:["遺"],壹:["壱"],稻:["稲"],员:["員"],饮:["飲"],阴:["陰"],隐:["隠"],韵:["韻"],涡:["渦"],运:["運"],营:["営"],荣:["栄"],卫:["衛"],咏:["詠"],锐:["鋭"],驿:["駅"],谒:["謁"],阅:["閲"],园:["園"],烟:["煙"],缘:["縁"],远:["遠"],铅:["鉛"],盐:["塩"],污:["汚"],应:["応"],冲:["衝"],亿:["億"],忆:["憶"],稳:["穏"],假:["仮"],价:["価"],祸:["禍"],华:["華"],课:["課"],货:["貨"],过:["過"],贺:["賀"],饿:["餓"],块:["塊"],坏:["壊"],怀:["懐"],绘:["絵"],开:["開"],阶:["階"],贝:["貝"],该:["該"],吓:["嚇"],扩:["拡"],壳:["殻"],确:["確"],觉:["覚"],较:["較"],阁:["閣"],乐:["楽"],额:["額"],挂:["掛"],舄:["潟"],渴:["渇"],辖:["轄"],劝:["勧"],卷:["巻"],唤:["喚"],奸:["姦"],宽:["寛"],惯:["慣"],换:["換"],欢:["歓"],汉:["漢"],环:["環"],监:["監"],简:["簡"],缓:["緩"],舰:["艦"],观:["観"],贯:["貫"],还:["還"],鉴:["鑑"],间:["間"],闲:["閑"],关:["関"],陷:["陥"],馆:["館"],顽:["頑"],颜:["顔"],愿:["願"],几:["幾"],挥:["揮"],弃:["棄"],归:["帰"],气:["気"],纪:["紀"],规:["規"],记:["記"],贵:["貴"],轨:["軌"],辉:["輝"],饥:["飢"],骑:["騎"],伪:["偽"],仪:["儀"],戏:["戯"],拟:["擬"],义:["義"],议:["議"],诘:["詰"],宫:["宮"],穷:["窮"],级:["級"],纠:["糾"],给:["給"],举:["挙"],许:["許"],渔:["漁"],鱼:["魚"],竞:["競"],协:["協"],强:["強"],桥:["橋"],况:["況"],矫:["矯"],胁:["脅"],兴:["興"],乡:["郷"],镜:["鏡"],响:["響"],惊:["驚"],晓:["暁"],业:["業"],极:["極"],紧:["緊"],谨:["謹"],银:["銀"],驱:["駆"],缲:["繰"],勋:["勲"],熏:["薫"],训:["訓"],军:["軍"],倾:["傾"],启:["啓"],惠:["恵"],庆:["慶"],揭:["掲"],溪:["渓"],经:["経"],继:["継"],萤:["蛍"],计:["計"],轻:["軽"],鸡:["鶏"],鲸:["鯨"],剧:["劇"],击:["撃"],杰:["傑"],决:["決"],洁:["潔"],结:["結"],俭:["倹"],剑:["剣"],圈:["圏"],坚:["堅"],宪:["憲"],悬:["懸"],检:["検"],权:["権"],绢:["絹"],见:["見"],谦:["謙"],贤:["賢"],轩:["軒"],险:["険"],显:["顕"],验:["験"],严:["厳"],减:["減"],现:["現"],个:["個"],库:["庫"],户:["戸"],夸:["誇"],顾:["顧"],吴:["呉"],娱:["娯"],语:["語"],误:["誤"],护:["護"],效:["効"],广:["広"],构:["構"],沟:["溝"],红:["紅"],绞:["絞"],纲:["綱"],讲:["講"],贡:["貢"],购:["購"],矿:["鉱"],钢:["鋼"],项:["項"],刚:["剛"],黑:["黒"],狱:["獄"],垦:["墾"],恳:["懇"],绀:["紺"],查:["査"],诈:["詐"],锁:["鎖"],债:["債"],岁:["歳"],济:["済"],灾:["災"],碎:["砕"],斋:["斎"],细:["細"],载:["載"],际:["際"],剂:["剤"],财:["財"],错:["錯"],樱:["桜"],册:["冊"],杀:["殺"],杂:["雑"],伞:["傘"],栈:["桟"],暂:["暫"],姊:["姉"],师:["師"],纟:["糸"],纸:["紙"],视:["視"],词:["詞"],诗:["詩"],试:["試"],咨:["諮"],资:["資"],赐:["賜"],饲:["飼"],齿:["歯"],儿:["児"],时:["時"],玺:["璽"],识:["識"],轴:["軸"],执:["執"],质:["質"],实:["実"],舍:["舎"],谢:["謝"],车:["車"],释:["釈"],种:["種"],树:["樹"],收:["収"],终:["終"],习:["習"],袭:["襲"],从:["従"],涩:["渋"],兽:["獣"],纵:["縦"],铳:["銃"],缩:["縮"],肃:["粛"],术:["術"],润:["潤"],纯:["純"],顺:["順"],绪:["緒"],书:["書"],诸:["諸"],伤:["傷"],偿:["償"],胜:["勝"],奖:["奨"],涉:["渉"],烧:["焼"],绍:["紹"],讼:["訟"],诏:["詔"],详:["詳"],赏:["賞"],钟:["鐘"],乘:["乗"],剩:["剰"],场:["場"],壤:["壌"],娘:["嬢"],净:["浄"],叠:["畳"],让:["譲"],酿:["醸"],锭:["錠"],饰:["飾"],织:["織"],职:["職"],审:["審"],绅:["紳"],亲:["親"],诊:["診"],进:["進"],针:["針"],寻:["尋"],阵:["陣"],图:["図"],帅:["帥"],粹:["粋"],醉:["酔"],锤:["錘"],髓:["髄"],濑:["瀬"],亩:["畝"],势:["勢"],圣:["聖"],诚:["誠"],请:["請"],齐:["斉"],积:["積"],绩:["績"],责:["責"],迹:["跡"],摄:["摂"],设:["設"],节:["節"],绝:["絶"],专:["専"],战:["戦"],缐:["線"],纤:["繊"],荐:["薦"],选:["選"],迁:["遷"],钱:["銭"],铣:["銑"],鲜:["鮮"],渐:["漸"],缮:["繕"],础:["礎"],组:["組"],诉:["訴"],创:["創"],仓:["倉"],丧:["喪"],层:["層"],搜:["捜"],扫:["掃"],插:["挿"],巢:["巣"],窗:["窓"],总:["総"],骚:["騒"],增:["増"],脏:["臓"],藏:["蔵"],赠:["贈"],侧:["側"],则:["則"],测:["測"],贼:["賊"],续:["続"],孙:["孫"],损:["損"],驮:["駄"],对:["対"],带:["帯"],态:["態"],贷:["貸"],队:["隊"],题:["題"],泷:["瀧"],择:["択"],泽:["沢","澤"],浊:["濁"],诺:["諾"],达:["達"],夺:["奪"],单:["単"],叹:["嘆"],诞:["誕"],锻:["鍛"],团:["団"],坛:["壇"],弹:["弾"],谈:["談"],值:["値"],耻:["恥"],迟:["遅"],驻:["駐"],贮:["貯"],帐:["帳"],厅:["庁"],张:["張"],惩:["懲"],听:["聴"],胀:["脹"],肠:["腸"],调:["調"],长:["長"],顶:["頂"],鸟:["鳥"],敕:["勅"],赁:["賃"],镇:["鎮"],陈:["陳"],坠:["墜"],冢:["塚"],渍:["漬"],钓:["釣"],侦:["偵"],贞:["貞"],缔:["締"],订:["訂"],递:["逓"],敌:["敵"],适:["適"],彻:["徹"],转:["転"],传:["伝"],电:["電"],涂:["塗"],冻:["凍"],岛:["島"],东:["東"],栋:["棟"],汤:["湯"],统:["統"],讨:["討"],誊:["謄"],头:["頭"],腾:["騰"],动:["動","働"],导:["導"],铜:["銅"],德:["徳"],笃:["篤"],读:["読"],昙:["曇"],钝:["鈍"],绳:["縄"],软:["軟"],难:["難"],贰:["弐"],认:["認"],宁:["寧"],热:["熱"],恼:["悩"],浓:["濃"],纳:["納"],脑:["脳"],农:["農"],霸:["覇"],马:["馬"],废:["廃"],拜:["拝"],败:["敗"],辈:["輩"],买:["買"],卖:["売"],赔:["賠"],缚:["縛"],发:["発","髪"],罚:["罰"],拔:["抜"],阀:["閥"],贩:["販"],范:["範"],烦:["煩"],颁:["頒"],饭:["飯"],盘:["盤"],罢:["罷"],费:["費"],飞:["飛"],备:["備"],笔:["筆"],标:["標"],冰:["氷"],评:["評"],贫:["貧"],宾:["賓"],频:["頻"],妇:["婦"],肤:["膚"],谱:["譜"],负:["負"],赋:["賦"],风:["風"],复:["復","複"],拂:["払"],佛:["仏"],喷:["噴"],坟:["墳"],愤:["憤"],奋:["奮"],纷:["紛"],氛:["雰"],闻:["聞"],币:["幣"],并:["並"],闭:["閉"],别:["別"],变:["変"],编:["編"],边:["辺"],铺:["鋪"],步:["歩"],补:["補"],穗:["穂"],报:["報"],缝:["縫"],访:["訪"],饱:["飽"],纺:["紡"],谋:["謀"],贸:["貿"],仆:["僕"],扑:["撲"],每:["毎"],茧:["繭"],满:["満"],脉:["脈"],务:["務"],梦:["夢"],无:["無"],雾:["霧"],铭:["銘"],鸣:["鳴"],灭:["滅"],绵:["綿"],网:["網"],默:["黙"],问:["問"],闷:["悶"],纹:["紋"],门:["門"],约:["約"],药:["薬"],译:["訳"],跃:["躍"],谕:["諭"],输:["輸"],优:["優"],忧:["憂"],犹:["猶"],诱:["誘"],游:["遊"],邮:["郵"],预:["預"],扬:["揚"],摇:["揺"],拥:["擁"],杨:["楊"],样:["様"],窑:["窯"],谣:["謡"],阳:["陽"],养:["養"],罗:["羅"],赖:["頼"],络:["絡"],栏:["欄"],滥:["濫"],览:["覧"],里:["裏","裡","里"],离:["離"],陆:["陸"],虑:["慮"],虏:["虜"],两:["両"],凉:["涼"],猎:["猟"],疗:["療"],粮:["糧"],领:["領"],绿:["緑"],伦:["倫"],临:["臨"],轮:["輪"],垒:["塁"],泪:["涙"],类:["類"],铃:["鈴"],灵:["霊"],丽:["麗"],龄:["齢"],历:["暦"],练:["練"],连:["連"],炼:["錬"],劳:["労"],录:["録"],论:["論"],话:["話"],贿:["賄"],绚:["絢"],绫:["綾"],谓:["謂"],荫:["陰","蔭"],乌:["烏"],窥:["窺"],呗:["唄"],鳗:["鰻"],闰:["閏"],饵:["餌"],婴:["嬰"],颖:["穎"],颕:["頴"],厌:["厭"],焰:["焔"],艳:["艶"],鸳:["鴛"],于:["於"],袄:["襖"],莺:["鴬"],哗:["嘩"],卧:["臥"],驾:["駕"],凯:["凱"],盖:["蓋"],铠:["鎧"],钩:["鈎"],划:["劃"],搅:["撹"],获:["獲"],顎:["鰍"],鲣:["鰹"],桦:["樺"],鸭:["鴨"],涧:["澗"],韩:["韓"],赝:["贋"],龟:["亀"],牺:["犠"],蚁:["蟻"],谊:["誼"],锯:["鋸"],侨:["僑"],乔:["喬"],荞:["蕎"],飨:["饗"],仅:["僅"],锦:["錦"],钦:["欽"],俱:["倶"],驹:["駒"],栉:["櫛"],钏:["釧"],辔:["轡"],洼:["窪"],锹:["鍬"],诣:["詣"],诀:["訣"],牵:["牽"],砚:["硯"],县:["県"],键:["鍵"],谚:["諺"],钴:["鈷"],鲤:["鯉"],纮:["紘"],鸿:["鴻"],轰:["轟"],鹄:["鵠"],顷:["頃"],鹭:["鷺"],栅:["柵"],鲑:["鮭"],萨:["薩"],鲭:["鯖"],锖:["錆"],鲛:["鮫"],灿:["燦"],产:["産"],赞:["賛"],斩:["斬"],尸:["屍"],狮:["獅"],尔:["爾"],莳:["蒔"],缟:["縞"],纱:["紗"],锡:["錫"],肿:["腫"],绶:["綬"],众:["衆"],辑:["輯"],骏:["駿"],准:["準","准"],处:["処"],锄:["鋤"],尝:["嘗"],厂:["廠"],证:["証"],酱:["醤"],钲:["鉦"],扰:["擾"],烛:["蝕"],尘:["塵"],肾:["腎"],讯:["訊"],诹:["諏"],须:["須"],锥:["錐"],趋:["趨"],雏:["雛"],颇:["頗"],栖:["棲","栖"],硕:["碩"],说:["説"],诠:["詮"],贱:["賎"],闪:["閃"],苏:["蘇"],丛:["叢"],枪:["槍"],综:["綜"],苍:["蒼"],逊:["遜"],鲷:["鯛"],鹰:["鷹"],托:["託"],铎:["鐸"],竖:["竪"],鳕:["鱈"],谁:["誰"],绽:["綻"],驰:["馳"],铸:["鋳"],苎:["苧"],宠:["寵"],畅:["暢"],谍:["諜"],铫:["銚"],茑:["蔦"],缀:["綴"],溃:["潰"],壶:["壺"],鹤:["鶴"],祯:["禎"],谛:["諦"],郑:["鄭"],钉:["釘"],镝:["鏑"],辙:["轍"],铁:["鉄"],缠:["纏"],贴:["貼"],颠:["顛"],淀:["澱"],兔:["兎"],赌:["賭"],镀:["鍍"],荡:["蕩"],镫:["鐙"],鸨:["鴇"],秃:["禿"],鸢:["鳶"],吨:["噸"],顿:["頓"],谜:["謎"],滩:["灘"],锅:["鍋"],驯:["馴"],赈:["賑"],祢:["禰","祢"],脓:["膿"],骂:["罵"],狈:["狽"],这:["這"],驳:["駁"],栌:["櫨"],钵:["鉢"],鸠:["鳩"],绯:["緋"],诽:["誹"],毕:["畢"],纽:["紐"],谬:["謬"],庙:["廟"],锚:["錨"],鳍:["鰭"],濒:["瀕"],抚:["撫"],芜:["蕪"],枫:["楓"],渊:["淵"],鲋:["鮒"],粪:["糞"],页:["頁"],辅:["輔"],仿:["倣"],丰:["豊"],锋:["鋒"],凤:["鳳"],鹏:["鵬"],颊:["頬"],鲔:["鮪"],鳟:["鱒"],鹉:["鵡"],缅:["緬"],储:["儲"],饼:["餅"],贳:["貰"],爷:["爺"],涌:["湧","涌"],舆:["輿"],佣:["傭"],欲:["欲","慾"],岚:["嵐"],蓝:["藍"],兰:["蘭"],刘:["劉"],龙:["竜","龍"],侣:["侶"],谅:["諒"],邻:["隣"],鳞:["鱗"],岭:["嶺"],隶:["隷"],涟:["漣"],帘:["簾"],怜:["怜","憐"],联:["聯"],莲:["蓮"],吕:["呂"],鲁:["魯"],橹:["櫓"],赂:["賂"],娄:["婁"],聋:["聾"],鹫:["鷲"],鳄:["鰐"],诧:["詫"],干:["干","乾"],机:["機","机"]},Be=new Map(Object.entries(Le));function Ie(i){var t=i.split(""),e="",r={"う゛ぁ":"va","う゛ぃ":"vi","う゛ぅ":"vu","う゛ぇ":"ve","う゛ぉ":"vo",ヴぁ:"va",ヴぃ:"vi",ヴ:"vu",ヴぇ:"ve",ヴぉ:"vo"},s={きゃ:"kya",キャ:"kya",きゅ:"kyu",キュ:"kyu",きょ:"kyo",キョ:"kyo",ぎゃ:"gya",ギャ:"gya",ぎゅ:"gyu",ギュ:"gyu",ぎょ:"gyo",ギョ:"gyo",しゃ:"sha",シャ:"sha",しゅ:"shu",シュ:"shu",しょ:"sho",ショ:"sho",じゃ:"ja",ジャ:"ja",じゅ:"ju",ジュ:"ju",じょ:"jo",ジョ:"jo",ちゃ:"cha",チャ:"cha",ちゅ:"chu",チュ:"chu",ちょ:"cho",チョ:"cho",ぢゃ:"dya",ヂャ:"dya",ぢゅ:"dyu",ヂュ:"dyu",ぢょ:"dyo",ヂョ:"dyo",でゃ:"dha",デャ:"dha",でゅ:"dhu",デュ:"dhu",でょ:"dho",デョ:"dho",にゃ:"nya",ニャ:"nya",にゅ:"nyu",ニュ:"nyu",にょ:"nyo",ニョ:"nyo",ひゃ:"hya",ヒャ:"hya",ひゅ:"hyu",ヒュ:"hyu",ひょ:"hyo",ヒョ:"hyo",びゃ:"pya",ビャ:"pya",びゅ:"byu",ビュ:"byu",びょ:"byo",ビョ:"byo",みゃ:"mya",ミャ:"mya",みゅ:"myu",ミュ:"myu",みょ:"myo",ミョ:"myo",りゃ:"rya",リャ:"rya",りゅ:"ryu",リュ:"ryu",りょ:"ryo",リョ:"ryo",てぁ:"tha",テァ:"tha",てぃ:"thi",ティ:"thi",てぇ:"tee",テェ:"tee","う゛":"vu","ウ゛":"vu","あ゛":'a"',"ア゛":'a"',っか:"kka",ッカ:"kka",っき:"kki",ッキ:"kki",っく:"kku",ック:"kku",っけ:"kke",ッケ:"kke",っこ:"kko",ッコ:"kko",っさ:"ssa",ッサ:"ssa",っし:"sshi",ッシ:"sshi",っす:"ssu",ッス:"ssu",っせ:"sse",ッセ:"sse",っそ:"sso",ッソ:"sso",った:"tta",ッタ:"tta",っち:"cchi",ッチ:"cchi",っつ:"ttu",ッツ:"ttu",って:"tte",ッテ:"tte",っと:"tto",ット:"tto",っな:"nna",ッナ:"nna",っに:"nni",ッニ:"nni",っぬ:"nnu",ッヌ:"nnu",っね:"nne",ッネ:"nne",っの:"nno",ッノ:"nno",っは:"hha",ッハ:"hha",っひ:"hhi",ッヒ:"hhi",っふ:"ffu",ッフ:"ffu",っへ:"hhe",ッヘ:"hhe",っほ:"hho",ッホ:"hho",っま:"mma",ッマ:"mma",っみ:"mmi",ッミ:"mmi",っむ:"mmu",ッム:"mmu",っめ:"mme",ッメ:"mme",っも:"mmo",ッモ:"mmo",っや:"yya",ッヤ:"yya",っゆ:"yyu",ッユ:"yyu",っよ:"yyo",ッヨ:"yyo",っら:"rra",ッラ:"rra",っり:"rri",ッリ:"rri",っる:"rru",ッル:"rru",っれ:"rre",ッレ:"rre",っろ:"rro",ッロ:"rro",っわ:"wwa",ッワ:"wwa",っが:"gga",ッガ:"gga",っぎ:"ggi",ッギ:"ggi",っぐ:"ggu",ッグ:"ggu",っげ:"gge",ッゲ:"gge",っご:"ggo",ッゴ:"ggo",っざ:"zza",ッザ:"zza",っじ:"jji",ッジ:"jji",っず:"zzu",ッズ:"zzu",っぜ:"zze",ッゼ:"zze",っぞ:"zzo",ッゾ:"zzo",っだ:"dda",ッダ:"dda",っぢ:"ddi",ッヂ:"ddi",っづ:"ddu",ッヅ:"ddu",っで:"dde",ッデ:"dde",っど:"ddo",ッド:"ddo",っば:"bba",ッバ:"bba",っび:"bbi",ッビ:"bbi",っぶ:"bbu",ッブ:"bbu",っべ:"bbe",ッベ:"bbe",っぼ:"bbo",ッボ:"bbo",っぱ:"ppa",ッパ:"ppa",っぴ:"ppi",ッピ:"ppi",っぷ:"ppu",ップ:"ppu",っぺ:"ppe",ッペ:"ppe",っぽ:"ppo",ッポ:"ppo"},o={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"wo",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"di",づ:"du",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ぁ:"xa",ぃ:"xi",ぅ:"xu",ぇ:"xe",ぉ:"xo",ゃ:"xya",ゅ:"xyu",ょ:"xyo",っ:"xtsu",ア:"a",イ:"i",ウ:"u",エ:"e",オ:"o",カ:"ka",キ:"ki",ク:"ku",ケ:"ke",コ:"ko",サ:"sa",シ:"shi",ス:"su",セ:"se",ソ:"so",タ:"ta",チ:"chi",ツ:"tsu",テ:"te",ト:"to",ナ:"na",ニ:"ni",ヌ:"nu",ネ:"ne",ノ:"no",ハ:"ha",ヒ:"hi",フ:"fu",ヘ:"he",ホ:"ho",マ:"ma",ミ:"mi",ム:"mu",メ:"me",モ:"mo",ヤ:"ya",ユ:"yu",ヨ:"yo",ラ:"ra",リ:"ri",ル:"ru",レ:"re",ロ:"ro",ワ:"wa",ヲ:"wo",ン:"n",ガ:"ga",ギ:"gi",グ:"gu",ゲ:"ge",ゴ:"go",ザ:"za",ジ:"ji",ズ:"zu",ゼ:"ze",ゾ:"zo",ダ:"da",ヂ:"di",ヅ:"du",デ:"de",ド:"do",バ:"ba",ビ:"bi",ブ:"bu",ベ:"be",ボ:"bo",パ:"pa",ピ:"pi",プ:"pu",ペ:"pe",ポ:"po",ァ:"xa",ィ:"xi",ゥ:"xu",ェ:"xe",ォ:"xo",ャ:"xya",ュ:"xyu",ョ:"xyo",ッ:"xtsu"};if(r[i]!==void 0)return r[i];if(s[i]!==void 0)return s[i];var n=new Object;for(var c in s){var a=c.split("");n[a[0]]=!0}var l=new Object;for(var u in r){var a=u.split("");l[a[0]+a[1]]=!0,n[a[0]]=!0}for(var h="",p=0;p<t.length;p++){var g=t[p];h+=g,h.length==3?r[h]!==void 0?e+=r[h]:(a=h.split(""),e+=s[a[0]+a[1]],e+=o[a[2]]===void 0?a[2]:o[a[2]]):h.length==2?l[h]!==void 0||(s[h]!==void 0?(e+=s[h],h=""):(a=h.split(""),e+=o[a[0]],e+=o[a[1]]===void 0?a[1]:o[a[1]],h="")):n[h]!==void 0||(e+=o[g]===void 0?g:o[g],h="")}return e+=h!==""?o[h]:"",e=e.replace(/([aiueo])ー/gi,"$1"),e=e.replace(".",""),e}function bt(i,t){return`
    <ruby data-notation="${t}">${i}
      <rp>(</rp>
      <rt>${t}</rt>
      <rp>)</rp>
    </ruby>
  `}function Tt(i){const t=Ie(i);return bt(i,t)}function qe(i){const t=/\[([^\|]+)\|([^\]]+)\]/g;return i.replace(t,(r,s,o)=>bt(s,o.split("|").join("")))}var Ye=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,_=(i,t,e,r)=>{for(var s=r>1?void 0:r?Ve(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Ye(t,e,s),s};const Ot=null;let T=class extends v{constructor(){super(...arguments),this.character="",this.showMoreUsage=!1,this.showMoreSentence=!1,this.loadCharData=new Ne(this,{task:async([i],{signal:t})=>{const e=await fetch(`/characters/${i}.json`,{signal:t});if(!e.ok)throw new Error(`Character data loading error: ${e.status}.`);return await e.json()},args:()=>[this.character]})}copyCharacter(){navigator.clipboard.writeText(this.character)}render(){return m`
      <div class="char-info">
        <div class="character-container">
          <div class="character-box">
            <div class="horizontal-line-wrapper"><div class="horizontal-line"></div></div>
            <div class="vertical-line-wrapper"><div class="vertical-line"></div></div>
            <div class="character">${this.character}</div>
          </div>
          <div class="character-actions">
            <a class="action-btn" target="blank_" href="https://kanji.jitenon.jp/cat/search?getdata=${De(this.character)}&search=contain&how=漢字">📖 字典</a>
            <button class="action-btn" @click=${this.copyCharacter}>📋 复制</button>
          </div>
        </div>

        <div class="informations">
          ${this.loadCharData.render({pending:()=>m`<p>加载中...</p>`,complete:i=>{const t="無",e="、",r=i.on?Y(i.on.map(Tt).join(e)):t,s=i.kun?Y(i.kun.map(Tt).join(e)):t,o=i.usages?Y(i.usages.map(({slug:c,japanese:[{reading:a}]})=>`<span class="usage-item">${bt(c,a)}</span>
              `).join("")):t,n=i.sentences?Y(i.sentences.map(({furigana:c,translation_zh_CN:a})=>`
                <div class="sentence">
                  <div class="origin">${qe(c)}</div>
                  <div class="translation">${a}</div>
                </div>
              `).join("")):t;return m`
                <div class="on" ><b>音読：</b>${r}</div>
                <div class="kun"><b>訓読：</b>${s}</div>
                <div class="usages">
                  <b>用法：</b>
                  ${o}
                  <div
                    class="show-more-usage-btn"
                    @click=${()=>this.showMoreUsage=!0}>
                    展开更多 <img class="dark-invert" src="/down.svg" />
                  </div>
                </div>
                <div class="sentences">
                  <b>例句：</b>
                  <div class="sentence-list">${n}</div>
                  <div
                    class="show-more-sentence-btn"
                    @click=${()=>this.showMoreSentence=!0}>
                    展开更多 <img class="dark-invert" src="/down.svg" />
                  </div>
                </div>
              `},error:()=>m`<p>发音信息加载失败，请重试。</p>`})}
        </div>
      </div>
      <h2 class="external-link-title">相关搜索（按照国内可访问性排序）：</h2>
      <div class="external-links">
        <a class="link" target="blank_" href="https://www.japandict.com/?s=${this.character}">JapanDict 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://www.weblio.jp/content/${this.character}">Weblio辞書搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://www.kanjipedia.jp/search?k=${this.character}&kt=1&sk=leftHand">漢字ペディア搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://jisho.org/search/%23kanji${this.character}">Jisho 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://www.wanikani.com/kanji/${this.character}">WaniKani 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://takoboto.jp/?q=${this.character}">TAKOBOTO 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://tatoeba.org/en/sentences/search?from=jpn&has_audio=&native=&orphans=no&query=${this.character}&sort=relevance&to=cmn&unapproved=no&word_count_min=4">Tatoeba 例句搜索</a>
        <a class="link" target="blank_" href="https://app.kanjialive.com/${this.character}">Kanji alive 搜索：${this.character}</a>
        <a class="link" target="blank_" href="https://dictionary.goo.ne.jp/srch/all/${this.character}/m0u/">goo辞書搜索：${this.character}</a> <!-- can't be reached -->
      </div>
    `}};T.styles=[f`
    .not-found {
      text-align: center;
    }

    .char-info {
      display: grid;
      column-gap: 1rem;
      grid-template-columns: auto 1fr;
    }
    @media screen and (min-width: 800px) {
      .char-info {
        column-gap: 1.6rem;
      }
    }

    .character-box {
      position: relative;
      background-color: var(--character-bg-color);
      padding: 8px;
      border: 2px solid var(--character-bd-color);
      width: fit-content;
      height: fit-content;
      box-shadow: var(--shadow-sm);
      border-radius: .25rem;
    }
    .horizontal-line-wrapper,
    .vertical-line-wrapper {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .horizontal-line {
      width: 100%;
      height: 2px;
      background-color: var(--character-crossing-color);
    }
    .vertical-line {
      width: 2px;
      height: 100%;
      background-color: var(--character-crossing-color);
    }
    .character {
      position: relative;
      width: 10rem;
      line-height: 1;
      font-size: 10rem;
      font-family: var(--chinese-serif-font);
    }
    .character-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    @media screen and (max-width: 680px) {
      .character {
        width: 7.5rem;
        font-size: 7.5rem;
      }
      .character-actions {
        gap: 0;
        justify-content: space-between;
      }
      .character-actions .action-btn {
        padding: .25rem .4rem;
        font-size: .825rem;
      }
    }

    .informations {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: baseline;
      height: fit-content;
    }
    .informations b {
      user-select: none;
      font-size: 1.025rem;
    }
    .usages .usage-item:not(:first-of-type)::before {
      content: "、"
    }
    :host(:not([show-more-usage])) .usage-item:nth-child(n+6),
    :host([show-more-usage]) .show-more-usage-btn {
      display: none;
    }
    .show-more-usage-btn,
    .show-more-sentence-btn {
      display: flex;
      width: fit-content;
      margin-top: .6rem;
      align-items: center;
      user-select: none;
      cursor: pointer;
    }
    .sentences .sentence-list {
      display: flex;
      flex-direction: column;
      row-gap: .6rem;
    }
    :host(:not([show-more-sentence])) .sentence-list > .sentence:nth-child(n+3),
    :host([show-more-sentence]) .show-more-sentence-btn {
      display: none;
    }

    .external-link-title {
      margin-top: 1.2rem;
      margin-bottom: .6rem;
    }
    .external-links {
      display: flex;
      flex-wrap: wrap;
      align-items: start;
      row-gap: .4rem;
      column-gap: 1rem;
    }

  `,rt,xe,ke,Ae];_([b({type:String})],T.prototype,"character",2);_([b({type:Boolean,attribute:"show-more-usage",reflect:!0})],T.prototype,"showMoreUsage",2);_([b({type:Boolean,attribute:"show-more-sentence",reflect:!0})],T.prototype,"showMoreSentence",2);T=_([E("result-item")],T);let O=class extends v{constructor(){super(...arguments),this.lastSearched="",this.searchResult=[],this.showResult=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("search",this.searchEventHandler)}disconnectedCallback(){this.removeEventListener("search",this.searchEventHandler),super.disconnectedCallback()}searchEventHandler(i){const{searchQuery:t}=i.detail;if(t===this.lastSearched)return;const e=Be.get(t[0]);e===void 0?this.searchResult=Ot:this.searchResult=e,this.lastSearched=t}render(){const i=m`<h1 class="not-found">未找到对应漢字</h1>`;return m`
      <div class="container">
        <div class="scroll-view">
          ${this.searchResult===Ot?i:this.searchResult.map(t=>m`<result-item character="${t}" />`)}
        </div>
      </div>
    `}};O.styles=f`
    :host {
      padding: 0 4rem 2rem;
      overflow: hidden;
      color: var(--default-tx-color);
      font-family: var(--text-font);
    }
    .container {
      width: 100%;
      height: 100%;
      background-color: var(--default-bg-color);
      border-radius: .6rem;
      overflow: hidden;
      box-shadow: var(--shadow-md-2);
    }
    .scroll-view {
      width: 100%;
      height: 100%;
      padding: 2rem;
      overflow-y: auto;
      box-sizing: border-box;
    }

    @media screen and (min-width: 1024px) {
      :host {
        padding: 0 8rem 3rem;
      }
    }
    @media screen and (max-width: 767px) {
      :host {
        padding: 0;
      }
      .container {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  `;_([gt()],O.prototype,"lastSearched",2);_([gt()],O.prototype,"searchResult",2);_([b(mt)],O.prototype,"showResult",2);O=_([E("result-view")],O);
