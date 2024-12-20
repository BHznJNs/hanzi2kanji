(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,pt=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),wt=new WeakMap;let Ut=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(pt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=wt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&wt.set(e,t))}return t}toString(){return this.cssText}};const Ft=r=>new Ut(typeof r=="string"?r:r+"",void 0,gt),v=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new Ut(e,r,gt)},Xt=(r,t)=>{if(pt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=J.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},_t=pt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ft(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Zt,defineProperty:Gt,getOwnPropertyDescriptor:te,getOwnPropertyNames:ee,getOwnPropertySymbols:se,getPrototypeOf:re}=Object,w=globalThis,xt=w.trustedTypes,ie=xt?xt.emptyScript:"",at=w.reactiveElementPolyfillSupport,z=(r,t)=>r,Q={toAttribute(r,t){switch(t){case Boolean:r=r?ie:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},st=(r,t)=>!Zt(r,t),At={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:st};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=At){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Gt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=te(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??At}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const t=re(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const e=this.properties,i=[...ee(e),...se(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(_t(s))}else t!==void 0&&e.push(_t(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:Q).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:Q;this._$Em=s,this[s]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??st)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[z("elementProperties")]=new Map,C[z("finalized")]=new Map,at==null||at({ReactiveElement:C}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,F=N.trustedTypes,kt=F?F.createPolicy("lit-html",{createHTML:r=>r}):void 0,zt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,Nt="?"+$,oe=`<${Nt}>`,S=document,B=()=>S.createComment(""),D=r=>r===null||typeof r!="object"&&typeof r!="function",mt=Array.isArray,ne=r=>mt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ht=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,St=/>/g,k=RegExp(`>|${ht}(?:([^\\s"'>=/]+)(${ht}*=${ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jt=/'/g,Ct=/"/g,Ht=/^(?:script|style|textarea|title)$/i,ae=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),g=ae(1),j=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Mt=new WeakMap,E=S.createTreeWalker(S,129);function Bt(r,t){if(!mt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return kt!==void 0?kt.createHTML(t):t}const he=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=U;for(let l=0;l<e;l++){const a=r[l];let c,u,h=-1,m=0;for(;m<a.length&&(n.lastIndex=m,u=n.exec(a),u!==null);)m=n.lastIndex,n===U?u[1]==="!--"?n=Et:u[1]!==void 0?n=St:u[2]!==void 0?(Ht.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=k):u[3]!==void 0&&(n=k):n===k?u[0]===">"?(n=s??U,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?k:u[3]==='"'?Ct:jt):n===Ct||n===jt?n=k:n===Et||n===St?n=U:(n=k,s=void 0);const f=n===k&&r[l+1].startsWith("/>")?" ":"";o+=n===U?a+oe:h>=0?(i.push(c),a.slice(0,h)+zt+a.slice(h)+$+f):a+$+(h===-2?l:f)}return[Bt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class L{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[c,u]=he(t,e);if(this.el=L.createElement(c,i),E.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=E.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(zt)){const m=u[n++],f=s.getAttribute(h).split($),Y=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:Y[2],strings:f,ctor:Y[1]==="."?ce:Y[1]==="?"?de:Y[1]==="@"?ue:rt}),s.removeAttribute(h)}else h.startsWith($)&&(a.push({type:6,index:o}),s.removeAttribute(h));if(Ht.test(s.tagName)){const h=s.textContent.split($),m=h.length-1;if(m>0){s.textContent=F?F.emptyScript:"";for(let f=0;f<m;f++)s.append(h[f],B()),E.nextNode(),a.push({type:2,index:++o});s.append(h[m],B())}}}else if(s.nodeType===8)if(s.data===Nt)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf($,h+1))!==-1;)a.push({type:7,index:o}),h+=$.length-1}o++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function P(r,t,e=r,i){var n,l;if(t===j)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=D(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=P(r,s._$AS(r,t.values),s,i)),t}class le{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??S).importNode(e,!0);E.currentNode=s;let o=E.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new q(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new pe(o,this,t)),this._$AV.push(c),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=E.nextNode(),n++)}return E.currentNode=S,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),D(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==j&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ne(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=L.createElement(Bt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new le(s,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=Mt.get(t.strings);return e===void 0&&Mt.set(t.strings,e=new L(t)),e}k(t){mt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new q(this.O(B()),this.O(B()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class rt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=P(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==j,n&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=P(this,l[i+a],e,a),c===j&&(c=this._$AH[a]),n||(n=!D(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ce extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class de extends rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class ue extends rt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??d)===j)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class pe{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const lt=N.litHtmlPolyfillSupport;lt==null||lt(L,q),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.2.1");const ge=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new q(t.insertBefore(B(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let b=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ge(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return j}};var Rt;b._$litElement$=!0,b.finalized=!0,(Rt=globalThis.litElementHydrateSupport)==null||Rt.call(globalThis,{LitElement:b});const ct=globalThis.litElementPolyfillSupport;ct==null||ct({LitElement:b});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:st},fe=(r=me,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.P(n,void 0,r),l}}}if(i==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+i)};function p(r){return(t,e)=>typeof e=="object"?fe(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(r){return p({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=r=>r.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lt=r=>(...t)=>({_$litDirective$:r,values:t});let It=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=(r,t)=>{var i;const e=r._$AN;if(e===void 0)return!1;for(const s of e)(i=s._$AO)==null||i.call(s,t,!1),H(s,t);return!0},X=r=>{let t,e;do{if((t=r._$AM)===void 0)break;e=t._$AN,e.delete(r),r=t}while((e==null?void 0:e.size)===0)},Vt=r=>{for(let t;t=r._$AM;r=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(r))break;e.add(r),$e(t)}};function be(r){this._$AN!==void 0?(X(this),this._$AM=r,Vt(this)):this._$AM=r}function ye(r,t=!1,e=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(i))for(let o=e;o<i.length;o++)H(i[o],!1),X(i[o]);else i!=null&&(H(i,!1),X(i));else H(this,r)}const $e=r=>{r.type==Dt.CHILD&&(r._$AP??(r._$AP=ye),r._$AQ??(r._$AQ=be))};class we extends It{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Vt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),e&&(H(this,t),X(this))}setValue(t){if(ve(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const dt=new WeakMap,T=Lt(class extends we{render(r){return d}update(r,[t]){var i;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=r.options)==null?void 0:i.host,this.rt(this.ct=r.element)),d}rt(r){if(this.isConnected||(r=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=dt.get(t);e===void 0&&(e=new WeakMap,dt.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,r),r!==void 0&&this.Y.call(this.ht,r)}else this.Y.value=r}get lt(){var r,t;return typeof this.Y=="function"?(r=dt.get(this.ht??globalThis))==null?void 0:r.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class qt extends CustomEvent{constructor(t){super("search",{detail:{searchQuery:t},bubbles:!0,composed:!0})}}class Pt extends CustomEvent{constructor(t,e){super("notation-toggle",{detail:{hiraganaMode:t,romajiMode:e},bubbles:!0,composed:!0})}}var _e=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,Yt=(r,t,e,i)=>{for(var s=i>1?void 0:i?xe(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&_e(t,e,s),s};const vt={type:Boolean,attribute:"show-result",reflect:!0};let Z=class extends b{constructor(){super(...arguments),this.showResult=!1,this.resultViewRef=T()}handleSearchEvent(r){const{searchQuery:t}=r.detail;this.resultViewRef.value.dispatchEvent(new qt(t)),this.showResult=!0}handleNotationToggleEvent(r){this.resultViewRef.value.hiraganaMode=r.detail.hiraganaMode,this.resultViewRef.value.romajiMode=r.detail.romajiMode}render(){return g`
      <nav-bar
        @notation-toggle=${this.handleNotationToggleEvent}
        .showResult=${this.showResult}
      ></nav-bar>
      <input-box
        .showResult=${this.showResult}
        @search=${this.handleSearchEvent}
        @clear=${()=>this.showResult=!1}
      ></input-box>
      <result-view
        ${T(this.resultViewRef)}
        .showResult=${this.showResult}
      ></result-view>
    `}};Z.styles=v`
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
  `;Yt([p(vt)],Z.prototype,"showResult",2);Z=Yt([A("app-root")],Z);var Ae=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,Wt=(r,t,e,i)=>{for(var s=i>1?void 0:i?ke(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Ae(t,e,s),s};let G=class extends b{constructor(){super(...arguments),this.showResult=!1}render(){return g`
      <notation-toggle .expand=${this.showResult}></notation-toggle>
      <theme-toggle .expand=${this.showResult}></theme-toggle>
      <drop-down .expand=${this.showResult}></drop-down>
    `}};G.styles=[v`
    :host {
      position: absolute;
      top: 0; right: 0;
      display: flex;
      align-items: center;
      gap: .4rem;
      transform: translateX(-1rem) translateY(.6rem);
      z-index: 1;
      transition: transform .45s .25s;
    }
    :host([show-result]) {
      transform: translateX(-1rem) translateY(1rem);
    }
    @media screen and (max-width: 767px) {
      theme-toggle,
      notation-toggle {
        display: none;
      }
    }
  `];Wt([p({type:Boolean,attribute:"show-result",reflect:!0})],G.prototype,"showResult",2);G=Wt([A("nav-bar")],G);const it=v`
  img.dark-invert {
    filter: var(--img-filter);
  }
`,Ee=v`
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
`,bt=v`
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
`,Se=v`
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
`,je=v`
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
`;var Ce=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,yt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Me(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Ce(t,e,s),s};let I=class extends b{constructor(){super(...arguments),this.dropped=!1,this.expand=!1}render(){return g`
      <button
        class="normal"
        @click=${()=>this.dropped=!this.dropped}
      >
        <img class="dark-invert" src="/more.svg" />
      </button>
      <div class="dropped-container">
        <ul class="dropped">
          <theme-toggle injected></theme-toggle>
          <notation-toggle injected></notation-toggle>
          <a href="https://github.com/BHznJNs/hanzi2kanji" target="blank_">
            <li class="dropped-item">🔗 源码</li>
          </a>
            <li class="dropped-item">🎁 捐赠</li>
          <a href="https://github.com/BHznJNs/hanzi2kanji?tab=readme-ov-file#-%E9%B8%A3%E8%B0%A2" target="blank_">
            <li class="dropped-item">👏 鸣谢</li>
          </a>
        </ul>
      </div>
    `}};I.styles=[v`
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
      display: flex;
      flex-direction: column;
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

    theme-toggle,
    notation-toggle {
      width: 100%;
      align-self: center;
      margin-bottom: .4rem;
    }
    @media screen and (min-width: 768px) {
      theme-toggle,
      notation-toggle {
        display: none;
      }
    }
  `,it,bt];yt([p({type:Boolean,reflect:!0})],I.prototype,"dropped",2);yt([p({type:Boolean,reflect:!0})],I.prototype,"expand",2);I=yt([A("drop-down")],I);var Pe=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,ot=(r,t,e,i)=>{for(var s=i>1?void 0:i?Te(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Pe(t,e,s),s};let O=class extends b{constructor(){super(),this.expand=!1,this.hiraganaMode=JSON.parse(localStorage.getItem("hiragana-mode"))??!0,this.romajiMode=JSON.parse(localStorage.getItem("romaji-mode"))??!1,this.hiraganaMode&&this.romajiMode&&(this.romajiMode=!1),window.addEventListener("beforeunload",()=>{localStorage.setItem("hiragana-mode",this.hiraganaMode.toString()),localStorage.setItem("romaji-mode",this.romajiMode.toString())}),window.addEventListener("load",()=>this.dispatchEvent(new Pt(this.hiraganaMode,this.romajiMode)))}toggle(){this.hiraganaMode=!this.hiraganaMode,this.romajiMode=!this.hiraganaMode,this.dispatchEvent(new Pt(this.hiraganaMode,this.romajiMode))}render(){return g`
      <button class="normal" @click=${this.toggle}>
        <div class="btn-text">
          <span class="hiragana">あ</span>
          /
          <span class="romaji">A</span>
        </div>
      </button>
    `}};O.styles=[v`
  button {
    position: relative;
    padding: .4rem .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color .3s,
                border-color .3s,
                padding .3s .3s,
                font-size .3s .3s !important;
  }
  :host([injected]) button {
    width: 100%;
    height: 100%;
    border: none !important;
  }
  :host([expand]) button {
    padding: .6rem .75rem;
    font-size: .875rem;
    user-select: none;
  }
  .btn-text {
    display: flex;
    align-items: baseline;
    color: var(--default-tx-color);
  }
  .btn-text, .hiragana, .romaji {
    transition: transform .3s;
  }
  .hiragana {
    transform-origin: right bottom;
  }
  .romaji {
    transform-origin: left bottom;
  }
  :host([hiragana-mode]) .btn-text {
    transform: translateX(2px);
  }
  :host([romaji-mode]) .btn-text {
    transform: translateX(-2px);
  }
  :host([hiragana-mode]) .hiragana,
  :host([romaji-mode]) .romaji {
    transform: scale(1.25);
  }
  :host([hiragana-mode]) .romaji,
  :host([romaji-mode]) .hiragana {
    transform: scale(.85);
  }
  `,bt];ot([p({type:Boolean,reflect:!0})],O.prototype,"expand",2);ot([p({type:Boolean,attribute:"hiragana-mode",reflect:!0})],O.prototype,"hiraganaMode",2);ot([p({type:Boolean,attribute:"romaji-mode",reflect:!0})],O.prototype,"romajiMode",2);O=ot([A("notation-toggle")],O);var K=(r=>(r[r.light=0]="light",r[r.dark=1]="dark",r[r.auto=2]="auto",r))(K||{});const Tt=new Map([[0,"日间"],[1,"夜间"],[2,"自动"]]);function Oe(r){function t(e){document.body.classList.toggle("dark",e),document.body.classList.toggle("light",!e)}t(r===2?tt.isPreferedDarkTheme:r===1)}const M=class M{constructor(){this.themeToggleCallbacks=[Oe],this.theme=Number(localStorage.getItem("theme"))??2,M.darkModeMediaQuery&&(M.darkModeMediaQuery.addEventListener("change",()=>this.systemThemeToggleCallback()),this.systemThemeToggleCallback(),window.addEventListener("beforeunload",()=>localStorage.setItem("theme",this.theme.toString())))}static get isPreferedDarkTheme(){return M.darkModeMediaQuery.matches}manuallyToggle(t){t===void 0&&(t=(this.theme+1)%3),this.theme=t;for(const e of this.themeToggleCallbacks)e(t)}systemThemeToggleCallback(){for(const t of this.themeToggleCallbacks)t(this.theme)}};M.darkModeMediaQuery=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");let tt=M;const V=new tt;window.addEventListener("load",()=>Jt(V.theme));function Re(){return V.theme}function Jt(r){return V.manuallyToggle(r),V.theme}function Ue(r){V.themeToggleCallbacks.push(r)}var ze=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,nt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ne(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&ze(t,e,s),s};let R=class extends b{constructor(){super(),this.expand=!1,this.injected=!1,this.themeName=Tt.get(Re()),Ue(r=>{this.themeName=Tt.get(r),this.toggleAttribute("light",r===K.light),this.toggleAttribute("dark",r===K.dark),this.toggleAttribute("auto",r===K.auto)})}toggleTheme(){Jt()}render(){return g`
      <button class="normal" @click=${this.toggleTheme}>
        <img class="icon-light dark-invert" src="/light_mode.svg" />
        <img class="icon-dark dark-invert"  src="/dark_mode.svg" />
        <img class="icon-auto dark-invert"  src="/auto_mode.svg" />
        <span class="mode-name">${this.themeName}</span>
      </button>
    `}};R.styles=[v`
  button {
    position: relative;
    padding: .4rem .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color .3s,
                border-color .3s,
                padding .3s .3s,
                font-size .3s .3s !important;
  }
  :host([injected]) button {
    width: 100%;
    height: 100%;
    border: none !important;
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
  }`,bt,it];nt([p({type:Boolean,reflect:!0})],R.prototype,"expand",2);nt([p({type:Boolean,reflect:!0})],R.prototype,"injected",2);nt([ft()],R.prototype,"themeName",2);R=nt([A("theme-toggle")],R);function He(r,t){let e=null;return function(...i){e&&clearTimeout(e),e=setTimeout(()=>r(...i),t)}}var Be=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Kt=(r,t,e,i)=>{for(var s=i>1?void 0:i?De(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Be(t,e,s),s};let et=class extends b{constructor(){super(),this.showResult=!1,this.inputRef=T(),this.debouncedInputHandler=He(()=>{const r=/^[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]+$/u,t=this.inputRef.value.value;r.test(t)&&this.dispatchEvent(new qt(t))},100),window.addEventListener("load",()=>{var r;return(r=this.inputRef.value)==null?void 0:r.focus()})}clear(){this.inputRef.value.value="",this.dispatchEvent(new CustomEvent("clear"))}render(){return g`
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
            ${T(this.inputRef)}
            @input=${this.debouncedInputHandler}
          />
          <button class="icon clear" @click=${this.clear}>
            <img class="dark-invert" src="/clear.svg" />
          </button>
        </div>
      </div>
    `}};et.styles=[v`
    :host {
      display: grid;
      grid-template-columns: auto 0fr;
      width: 100%;
      padding: .6rem 0 1rem;
      margin-bottom: 8rem;
      justify-self: center;
      align-self: center;
      transition: margin .6s,
                  grid-template-columns .45s;
    }
    :host([show-result]) {
      margin-bottom: 0;
      grid-template-columns: auto 1fr;
      transition: margin .6s,
                  grid-template-columns .45s .25s;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.2rem;
      margin: 0 1.25rem;
    }

    .logo {
      display: flex;
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
      transition: max-width .45s,
                  padding .45s;
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
      transition: max-width .3s,
                  padding .3s;
    }
    @media screen and (min-width: 1024px) {
      input {
        width: 12rem;
        max-width: 12rem;
      }
      :host([show-result]) input {
        max-width: 8rem;
      }
    }
    @media screen and (max-width: 767px) {
      input {
        max-width: 6rem;
      }
      :host([show-result]) input {
        max-width: 4rem;
      }
    }
  `,it];Kt([p(vt)],et.prototype,"showResult",2);et=Kt([A("input-box")],et);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=Symbol();class Ie{get taskComplete(){return this.t||(this.i===1?this.t=new Promise((t,e)=>{this.o=t,this.h=e}):this.i===3?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,e,i){var o;this.p=0,this.i=0,(this._=t).addController(this);const s=typeof e=="object"?e:{task:e,args:i};this.v=s.task,this.j=s.args,this.m=s.argsEqual??Ve,this.k=s.onComplete,this.A=s.onError,this.autoRun=s.autoRun??!0,"initialValue"in s&&(this.u=s.initialValue,this.i=2,this.O=(o=this.T)==null?void 0:o.call(this))}hostUpdate(){this.autoRun===!0&&this.S()}hostUpdated(){this.autoRun==="afterUpdate"&&this.S()}T(){if(this.j===void 0)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),e=this.O;this.O=t,t===e||t===void 0||e!==void 0&&this.m(e,t)||await this.run(t)}async run(t){var n,l,a,c,u;let e,i;t??(t=this.T()),this.O=t,this.i===1?(n=this.q)==null||n.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this._.requestUpdate()):this._.requestUpdate();const s=++this.p;this.q=new AbortController;let o=!1;try{e=await this.v(t,{signal:this.q.signal})}catch(h){o=!0,i=h}if(this.p===s){if(e===Le)this.i=0;else{if(o===!1){try{(l=this.k)==null||l.call(this,e)}catch{}this.i=2,(a=this.o)==null||a.call(this,e)}else{try{(c=this.A)==null||c.call(this,i)}catch{}this.i=3,(u=this.h)==null||u.call(this,i)}this.u=e,this.l=i}this._.requestUpdate()}}abort(t){var e;this.i===1&&((e=this.q)==null||e.abort(t))}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){var e,i,s,o;switch(this.i){case 0:return(e=t.initial)==null?void 0:e.call(t);case 1:return(i=t.pending)==null?void 0:i.call(t);case 2:return(s=t.complete)==null?void 0:s.call(t,this.value);case 3:return(o=t.error)==null?void 0:o.call(t,this.error);default:throw Error("Unexpected status: "+this.i)}}}const Ve=(r,t)=>r===t||r.length===t.length&&r.every((e,i)=>!st(e,t[i]));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ut extends It{constructor(t){if(super(t),this.it=d,t.type!==Dt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this._t=void 0,this.it=t;if(t===j)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ut.directiveName="unsafeHTML",ut.resultType=1;const W=Lt(ut);function qe(r){const t=r.codePointAt(0),e=t>>8&255,i=t&255;return e.toString(16).padStart(2,"0").toUpperCase()+i.toString(16).padStart(2,"0").toUpperCase()}const Ye={叶:["葉"],亚:["亜"],爱:["愛"],恶:["悪"],苇:["葦"],压:["圧"],伟:["偉"],围:["囲"],为:["為"],异:["異"],维:["維"],纬:["緯"],违:["違"],遗:["遺"],壹:["壱"],稻:["稲"],员:["員"],饮:["飲"],阴:["陰"],隐:["隠"],韵:["韻"],涡:["渦"],运:["運"],营:["営"],荣:["栄"],卫:["衛"],咏:["詠"],锐:["鋭"],驿:["駅"],谒:["謁"],阅:["閲"],园:["園"],烟:["煙"],缘:["縁"],远:["遠"],铅:["鉛"],盐:["塩"],污:["汚"],应:["応"],冲:["衝"],亿:["億"],忆:["憶"],稳:["穏"],假:["仮"],价:["価"],祸:["禍"],华:["華"],课:["課"],货:["貨"],过:["過"],贺:["賀"],饿:["餓"],块:["塊"],坏:["壊"],怀:["懐"],绘:["絵"],开:["開"],阶:["階"],贝:["貝"],该:["該"],吓:["嚇"],扩:["拡"],壳:["殻"],确:["確"],觉:["覚"],较:["較"],阁:["閣"],乐:["楽"],额:["額"],挂:["掛"],舄:["潟"],渴:["渇"],辖:["轄"],劝:["勧"],卷:["巻"],唤:["喚"],奸:["姦"],宽:["寛"],惯:["慣"],换:["換"],欢:["歓"],汉:["漢"],环:["環"],监:["監"],简:["簡"],缓:["緩"],舰:["艦"],观:["観"],贯:["貫"],还:["還"],鉴:["鑑"],间:["間"],闲:["閑"],关:["関"],陷:["陥"],馆:["館"],顽:["頑"],颜:["顔"],愿:["願"],几:["幾"],挥:["揮"],弃:["棄"],归:["帰"],气:["気"],纪:["紀"],规:["規"],记:["記"],贵:["貴"],轨:["軌"],辉:["輝"],饥:["飢"],骑:["騎"],伪:["偽"],仪:["儀"],戏:["戯"],拟:["擬"],义:["義"],议:["議"],诘:["詰"],宫:["宮"],穷:["窮"],级:["級"],纠:["糾"],给:["給"],举:["挙"],许:["許"],渔:["漁"],鱼:["魚"],竞:["競"],协:["協"],强:["強"],桥:["橋"],况:["況"],矫:["矯"],胁:["脅"],兴:["興"],乡:["郷"],镜:["鏡"],响:["響"],惊:["驚"],晓:["暁"],业:["業"],极:["極"],紧:["緊"],谨:["謹"],银:["銀"],驱:["駆"],缲:["繰"],勋:["勲"],熏:["薫"],训:["訓"],军:["軍"],倾:["傾"],启:["啓"],惠:["恵"],庆:["慶"],揭:["掲"],溪:["渓"],经:["経"],继:["継"],萤:["蛍"],计:["計"],轻:["軽"],鸡:["鶏"],鲸:["鯨"],剧:["劇"],击:["撃"],杰:["傑"],决:["決"],洁:["潔"],结:["結"],俭:["倹"],剑:["剣"],圈:["圏"],坚:["堅"],宪:["憲"],悬:["懸"],检:["検"],权:["権"],绢:["絹"],见:["見"],谦:["謙"],贤:["賢"],轩:["軒"],险:["険"],显:["顕"],验:["験"],严:["厳"],减:["減"],现:["現"],个:["個"],库:["庫"],户:["戸"],夸:["誇"],顾:["顧"],吴:["呉"],娱:["娯"],语:["語"],误:["誤"],护:["護"],效:["効"],广:["広"],构:["構"],沟:["溝"],红:["紅"],绞:["絞"],纲:["綱"],讲:["講"],贡:["貢"],购:["購"],矿:["鉱"],钢:["鋼"],项:["項"],刚:["剛"],黑:["黒"],狱:["獄"],垦:["墾"],恳:["懇"],绀:["紺"],查:["査"],诈:["詐"],锁:["鎖"],债:["債"],岁:["歳"],济:["済"],灾:["災"],碎:["砕"],斋:["斎"],细:["細"],载:["載"],际:["際"],剂:["剤"],财:["財"],错:["錯"],樱:["桜"],册:["冊"],杀:["殺"],杂:["雑"],伞:["傘"],栈:["桟"],暂:["暫"],姊:["姉"],师:["師"],纟:["糸"],纸:["紙"],视:["視"],词:["詞"],诗:["詩"],试:["試"],咨:["諮"],资:["資"],赐:["賜"],饲:["飼"],齿:["歯"],儿:["児"],时:["時"],玺:["璽"],识:["識"],轴:["軸"],执:["執"],质:["質"],实:["実"],舍:["舎"],谢:["謝"],车:["車"],释:["釈"],种:["種"],树:["樹"],收:["収"],终:["終"],习:["習"],袭:["襲"],从:["従"],涩:["渋"],兽:["獣"],纵:["縦"],铳:["銃"],缩:["縮"],肃:["粛"],术:["術"],润:["潤"],纯:["純"],顺:["順"],绪:["緒"],书:["書"],诸:["諸"],伤:["傷"],偿:["償"],胜:["勝"],奖:["奨"],涉:["渉"],烧:["焼"],绍:["紹"],讼:["訟"],诏:["詔"],详:["詳"],赏:["賞"],钟:["鐘"],乘:["乗"],剩:["剰"],场:["場"],壤:["壌"],娘:["嬢"],净:["浄"],叠:["畳"],让:["譲"],酿:["醸"],锭:["錠"],饰:["飾"],织:["織"],职:["職"],审:["審"],绅:["紳"],亲:["親"],诊:["診"],进:["進"],针:["針"],寻:["尋"],阵:["陣"],图:["図"],帅:["帥"],粹:["粋"],醉:["酔"],锤:["錘"],髓:["髄"],濑:["瀬"],亩:["畝"],势:["勢"],圣:["聖"],诚:["誠"],请:["請"],齐:["斉"],积:["積"],绩:["績"],责:["責"],迹:["跡"],摄:["摂"],设:["設"],节:["節"],绝:["絶"],专:["専"],战:["戦"],缐:["線"],纤:["繊"],荐:["薦"],选:["選"],迁:["遷"],钱:["銭"],铣:["銑"],鲜:["鮮"],渐:["漸"],缮:["繕"],础:["礎"],组:["組"],诉:["訴"],创:["創"],仓:["倉"],丧:["喪"],层:["層"],搜:["捜"],扫:["掃"],插:["挿"],巢:["巣"],窗:["窓"],总:["総"],骚:["騒"],增:["増"],脏:["臓"],藏:["蔵"],赠:["贈"],侧:["側"],则:["則"],测:["測"],贼:["賊"],续:["続"],孙:["孫"],损:["損"],驮:["駄"],对:["対"],带:["帯"],态:["態"],贷:["貸"],队:["隊"],题:["題"],泷:["瀧"],择:["択"],泽:["沢","澤"],浊:["濁"],诺:["諾"],达:["達"],夺:["奪"],单:["単"],叹:["嘆"],诞:["誕"],锻:["鍛"],团:["団"],坛:["壇"],弹:["弾"],谈:["談"],值:["値"],耻:["恥"],迟:["遅"],驻:["駐"],贮:["貯"],帐:["帳"],厅:["庁"],张:["張"],惩:["懲"],听:["聴"],胀:["脹"],肠:["腸"],调:["調"],长:["長"],顶:["頂"],鸟:["鳥"],敕:["勅"],赁:["賃"],镇:["鎮"],陈:["陳"],坠:["墜"],冢:["塚"],渍:["漬"],钓:["釣"],侦:["偵"],贞:["貞"],缔:["締"],订:["訂"],递:["逓"],敌:["敵"],适:["適"],彻:["徹"],转:["転"],传:["伝"],电:["電"],涂:["塗"],冻:["凍"],岛:["島"],东:["東"],栋:["棟"],汤:["湯"],统:["統"],讨:["討"],誊:["謄"],头:["頭"],腾:["騰"],动:["動","働"],导:["導"],铜:["銅"],德:["徳"],笃:["篤"],读:["読"],昙:["曇"],钝:["鈍"],绳:["縄"],软:["軟"],难:["難"],贰:["弐"],认:["認"],宁:["寧"],热:["熱"],恼:["悩"],浓:["濃"],纳:["納"],脑:["脳"],农:["農"],霸:["覇"],马:["馬"],废:["廃"],拜:["拝"],败:["敗"],辈:["輩"],买:["買"],卖:["売"],赔:["賠"],缚:["縛"],发:["発","髪"],罚:["罰"],拔:["抜"],阀:["閥"],贩:["販"],范:["範"],烦:["煩"],颁:["頒"],饭:["飯"],盘:["盤"],罢:["罷"],费:["費"],飞:["飛"],备:["備"],笔:["筆"],标:["標"],冰:["氷"],评:["評"],贫:["貧"],宾:["賓"],频:["頻"],妇:["婦"],肤:["膚"],谱:["譜"],负:["負"],赋:["賦"],风:["風"],复:["復","複"],拂:["払"],佛:["仏"],喷:["噴"],坟:["墳"],愤:["憤"],奋:["奮"],纷:["紛"],氛:["雰"],闻:["聞"],币:["幣"],并:["並"],闭:["閉"],别:["別"],变:["変"],编:["編"],边:["辺"],铺:["鋪"],步:["歩"],补:["補"],穗:["穂"],报:["報"],缝:["縫"],访:["訪"],饱:["飽"],纺:["紡"],谋:["謀"],贸:["貿"],仆:["僕"],扑:["撲"],每:["毎"],茧:["繭"],满:["満"],脉:["脈"],务:["務"],梦:["夢"],无:["無"],雾:["霧"],铭:["銘"],鸣:["鳴"],灭:["滅"],绵:["綿"],网:["網"],默:["黙"],问:["問"],闷:["悶"],纹:["紋"],门:["門"],约:["約"],药:["薬"],译:["訳"],跃:["躍"],谕:["諭"],输:["輸"],优:["優"],忧:["憂"],犹:["猶"],诱:["誘"],游:["遊"],邮:["郵"],预:["預"],扬:["揚"],摇:["揺"],拥:["擁"],杨:["楊"],样:["様"],窑:["窯"],谣:["謡"],阳:["陽"],养:["養"],罗:["羅"],赖:["頼"],络:["絡"],栏:["欄"],滥:["濫"],览:["覧"],里:["裏","裡","里"],离:["離"],陆:["陸"],虑:["慮"],虏:["虜"],两:["両"],凉:["涼"],猎:["猟"],疗:["療"],粮:["糧"],领:["領"],绿:["緑"],伦:["倫"],临:["臨"],轮:["輪"],垒:["塁"],泪:["涙"],类:["類"],铃:["鈴"],灵:["霊"],丽:["麗"],龄:["齢"],历:["暦"],练:["練"],连:["連"],炼:["錬"],劳:["労"],录:["録"],论:["論"],话:["話"],贿:["賄"],绚:["絢"],绫:["綾"],谓:["謂"],荫:["陰","蔭"],乌:["烏"],窥:["窺"],呗:["唄"],鳗:["鰻"],闰:["閏"],饵:["餌"],婴:["嬰"],颖:["穎"],颕:["頴"],厌:["厭"],焰:["焔"],艳:["艶"],鸳:["鴛"],于:["於"],袄:["襖"],莺:["鴬"],哗:["嘩"],卧:["臥"],驾:["駕"],凯:["凱"],盖:["蓋"],铠:["鎧"],钩:["鈎"],划:["劃"],搅:["撹"],获:["獲"],顎:["鰍"],鲣:["鰹"],桦:["樺"],鸭:["鴨"],涧:["澗"],韩:["韓"],赝:["贋"],龟:["亀"],牺:["犠"],蚁:["蟻"],谊:["誼"],锯:["鋸"],侨:["僑"],乔:["喬"],荞:["蕎"],飨:["饗"],仅:["僅"],锦:["錦"],钦:["欽"],俱:["倶"],驹:["駒"],栉:["櫛"],钏:["釧"],辔:["轡"],洼:["窪"],锹:["鍬"],诣:["詣"],诀:["訣"],牵:["牽"],砚:["硯"],县:["県"],键:["鍵"],谚:["諺"],钴:["鈷"],鲤:["鯉"],纮:["紘"],鸿:["鴻"],轰:["轟"],鹄:["鵠"],顷:["頃"],鹭:["鷺"],栅:["柵"],鲑:["鮭"],萨:["薩"],鲭:["鯖"],锖:["錆"],鲛:["鮫"],灿:["燦"],产:["産"],赞:["賛"],斩:["斬"],尸:["屍"],狮:["獅"],尔:["爾"],莳:["蒔"],缟:["縞"],纱:["紗"],锡:["錫"],肿:["腫"],绶:["綬"],众:["衆"],辑:["輯"],骏:["駿"],准:["準","准"],处:["処"],锄:["鋤"],尝:["嘗"],厂:["廠"],证:["証"],酱:["醤"],钲:["鉦"],扰:["擾"],烛:["蝕"],尘:["塵"],肾:["腎"],讯:["訊"],诹:["諏"],须:["須"],锥:["錐"],趋:["趨"],雏:["雛"],颇:["頗"],栖:["棲","栖"],硕:["碩"],说:["説"],诠:["詮"],贱:["賎"],闪:["閃"],苏:["蘇"],丛:["叢"],枪:["槍"],综:["綜"],苍:["蒼"],逊:["遜"],鲷:["鯛"],鹰:["鷹"],托:["託"],铎:["鐸"],竖:["竪"],鳕:["鱈"],谁:["誰"],绽:["綻"],驰:["馳"],铸:["鋳"],苎:["苧"],宠:["寵"],畅:["暢"],谍:["諜"],铫:["銚"],茑:["蔦"],缀:["綴"],溃:["潰"],壶:["壺"],鹤:["鶴"],祯:["禎"],谛:["諦"],郑:["鄭"],钉:["釘"],镝:["鏑"],辙:["轍"],铁:["鉄"],缠:["纏"],贴:["貼"],颠:["顛"],淀:["澱"],兔:["兎"],赌:["賭"],镀:["鍍"],荡:["蕩"],镫:["鐙"],鸨:["鴇"],秃:["禿"],鸢:["鳶"],吨:["噸"],顿:["頓"],谜:["謎"],滩:["灘"],锅:["鍋"],驯:["馴"],赈:["賑"],祢:["禰","祢"],脓:["膿"],骂:["罵"],狈:["狽"],这:["這"],驳:["駁"],栌:["櫨"],钵:["鉢"],鸠:["鳩"],绯:["緋"],诽:["誹"],毕:["畢"],纽:["紐"],谬:["謬"],庙:["廟"],锚:["錨"],鳍:["鰭"],濒:["瀕"],抚:["撫"],芜:["蕪"],枫:["楓"],渊:["淵"],鲋:["鮒"],粪:["糞"],页:["頁"],辅:["輔"],仿:["倣"],丰:["豊"],锋:["鋒"],凤:["鳳"],鹏:["鵬"],颊:["頬"],鲔:["鮪"],鳟:["鱒"],鹉:["鵡"],缅:["緬"],储:["儲"],饼:["餅"],贳:["貰"],爷:["爺"],涌:["湧","涌"],舆:["輿"],佣:["傭"],欲:["欲","慾"],岚:["嵐"],蓝:["藍"],兰:["蘭"],刘:["劉"],龙:["竜","龍"],侣:["侶"],谅:["諒"],邻:["隣"],鳞:["鱗"],岭:["嶺"],隶:["隷"],涟:["漣"],帘:["簾"],怜:["怜","憐"],联:["聯"],莲:["蓮"],吕:["呂"],鲁:["魯"],橹:["櫓"],赂:["賂"],娄:["婁"],聋:["聾"],鹫:["鷲"],鳄:["鰐"],诧:["詫"],干:["干","乾"],机:["機","机"]},We=new Map(Object.entries(Ye));function Qt(r){var t=r.split(""),e="",i={"う゛ぁ":"va","う゛ぃ":"vi","う゛ぅ":"vu","う゛ぇ":"ve","う゛ぉ":"vo",ヴぁ:"va",ヴぃ:"vi",ヴ:"vu",ヴぇ:"ve",ヴぉ:"vo"},s={きゃ:"kya",キャ:"kya",きゅ:"kyu",キュ:"kyu",きょ:"kyo",キョ:"kyo",ぎゃ:"gya",ギャ:"gya",ぎゅ:"gyu",ギュ:"gyu",ぎょ:"gyo",ギョ:"gyo",しゃ:"sha",シャ:"sha",しゅ:"shu",シュ:"shu",しょ:"sho",ショ:"sho",じゃ:"ja",ジャ:"ja",じゅ:"ju",ジュ:"ju",じょ:"jo",ジョ:"jo",ちゃ:"cha",チャ:"cha",ちゅ:"chu",チュ:"chu",ちょ:"cho",チョ:"cho",ぢゃ:"dya",ヂャ:"dya",ぢゅ:"dyu",ヂュ:"dyu",ぢょ:"dyo",ヂョ:"dyo",でゃ:"dha",デャ:"dha",でゅ:"dhu",デュ:"dhu",でょ:"dho",デョ:"dho",にゃ:"nya",ニャ:"nya",にゅ:"nyu",ニュ:"nyu",にょ:"nyo",ニョ:"nyo",ひゃ:"hya",ヒャ:"hya",ひゅ:"hyu",ヒュ:"hyu",ひょ:"hyo",ヒョ:"hyo",びゃ:"pya",ビャ:"pya",びゅ:"byu",ビュ:"byu",びょ:"byo",ビョ:"byo",みゃ:"mya",ミャ:"mya",みゅ:"myu",ミュ:"myu",みょ:"myo",ミョ:"myo",りゃ:"rya",リャ:"rya",りゅ:"ryu",リュ:"ryu",りょ:"ryo",リョ:"ryo",てぁ:"tha",テァ:"tha",てぃ:"thi",ティ:"thi",てぇ:"tee",テェ:"tee","う゛":"vu","ウ゛":"vu","あ゛":'a"',"ア゛":'a"',っか:"kka",ッカ:"kka",っき:"kki",ッキ:"kki",っく:"kku",ック:"kku",っけ:"kke",ッケ:"kke",っこ:"kko",ッコ:"kko",っさ:"ssa",ッサ:"ssa",っし:"sshi",ッシ:"sshi",っす:"ssu",ッス:"ssu",っせ:"sse",ッセ:"sse",っそ:"sso",ッソ:"sso",った:"tta",ッタ:"tta",っち:"cchi",ッチ:"cchi",っつ:"ttu",ッツ:"ttu",って:"tte",ッテ:"tte",っと:"tto",ット:"tto",っな:"nna",ッナ:"nna",っに:"nni",ッニ:"nni",っぬ:"nnu",ッヌ:"nnu",っね:"nne",ッネ:"nne",っの:"nno",ッノ:"nno",っは:"hha",ッハ:"hha",っひ:"hhi",ッヒ:"hhi",っふ:"ffu",ッフ:"ffu",っへ:"hhe",ッヘ:"hhe",っほ:"hho",ッホ:"hho",っま:"mma",ッマ:"mma",っみ:"mmi",ッミ:"mmi",っむ:"mmu",ッム:"mmu",っめ:"mme",ッメ:"mme",っも:"mmo",ッモ:"mmo",っや:"yya",ッヤ:"yya",っゆ:"yyu",ッユ:"yyu",っよ:"yyo",ッヨ:"yyo",っら:"rra",ッラ:"rra",っり:"rri",ッリ:"rri",っる:"rru",ッル:"rru",っれ:"rre",ッレ:"rre",っろ:"rro",ッロ:"rro",っわ:"wwa",ッワ:"wwa",っが:"gga",ッガ:"gga",っぎ:"ggi",ッギ:"ggi",っぐ:"ggu",ッグ:"ggu",っげ:"gge",ッゲ:"gge",っご:"ggo",ッゴ:"ggo",っざ:"zza",ッザ:"zza",っじ:"jji",ッジ:"jji",っず:"zzu",ッズ:"zzu",っぜ:"zze",ッゼ:"zze",っぞ:"zzo",ッゾ:"zzo",っだ:"dda",ッダ:"dda",っぢ:"ddi",ッヂ:"ddi",っづ:"ddu",ッヅ:"ddu",っで:"dde",ッデ:"dde",っど:"ddo",ッド:"ddo",っば:"bba",ッバ:"bba",っび:"bbi",ッビ:"bbi",っぶ:"bbu",ッブ:"bbu",っべ:"bbe",ッベ:"bbe",っぼ:"bbo",ッボ:"bbo",っぱ:"ppa",ッパ:"ppa",っぴ:"ppi",ッピ:"ppi",っぷ:"ppu",ップ:"ppu",っぺ:"ppe",ッペ:"ppe",っぽ:"ppo",ッポ:"ppo"},o={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"wo",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"di",づ:"du",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ぁ:"xa",ぃ:"xi",ぅ:"xu",ぇ:"xe",ぉ:"xo",ゃ:"xya",ゅ:"xyu",ょ:"xyo",っ:"xtsu",ア:"a",イ:"i",ウ:"u",エ:"e",オ:"o",カ:"ka",キ:"ki",ク:"ku",ケ:"ke",コ:"ko",サ:"sa",シ:"shi",ス:"su",セ:"se",ソ:"so",タ:"ta",チ:"chi",ツ:"tsu",テ:"te",ト:"to",ナ:"na",ニ:"ni",ヌ:"nu",ネ:"ne",ノ:"no",ハ:"ha",ヒ:"hi",フ:"fu",ヘ:"he",ホ:"ho",マ:"ma",ミ:"mi",ム:"mu",メ:"me",モ:"mo",ヤ:"ya",ユ:"yu",ヨ:"yo",ラ:"ra",リ:"ri",ル:"ru",レ:"re",ロ:"ro",ワ:"wa",ヲ:"wo",ン:"n",ガ:"ga",ギ:"gi",グ:"gu",ゲ:"ge",ゴ:"go",ザ:"za",ジ:"ji",ズ:"zu",ゼ:"ze",ゾ:"zo",ダ:"da",ヂ:"di",ヅ:"du",デ:"de",ド:"do",バ:"ba",ビ:"bi",ブ:"bu",ベ:"be",ボ:"bo",パ:"pa",ピ:"pi",プ:"pu",ペ:"pe",ポ:"po",ァ:"xa",ィ:"xi",ゥ:"xu",ェ:"xe",ォ:"xo",ャ:"xya",ュ:"xyu",ョ:"xyo",ッ:"xtsu"};if(i[r]!==void 0)return i[r];if(s[r]!==void 0)return s[r];var n=new Object;for(var l in s){var a=l.split("");n[a[0]]=!0}var c=new Object;for(var u in i){var a=u.split("");c[a[0]+a[1]]=!0,n[a[0]]=!0}for(var h="",m=0;m<t.length;m++){var f=t[m];h+=f,h.length==3?i[h]!==void 0?e+=i[h]:(a=h.split(""),e+=s[a[0]+a[1]],e+=o[a[2]]===void 0?a[2]:o[a[2]]):h.length==2?c[h]!==void 0||(s[h]!==void 0?(e+=s[h],h=""):(a=h.split(""),e+=o[a[0]],e+=o[a[1]]===void 0?a[1]:o[a[1]],h="")):n[h]!==void 0||(e+=o[f]===void 0?f:o[f],h="")}return e+=h!==""?o[h]:"",e=e.replace(/([aiueo])ー/gi,"$1"),e=e.replace(".",""),e}function $t(r,t){return t===void 0?`<span>${r}</span>`:`
    <ruby data-notation="${t}">${r}
      <rp>(</rp>
      <rt>${t}</rt>
      <rp>)</rp>
    </ruby>
  `}function Ot(r){const t=Qt(r);return $t(r,t)}function Je(r){const t=/\[([^\|]+)\|([^\]]+)\]/g;return r.replace(t,(i,s,o)=>$t(s,o.split("|").join("")))}var Ke=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,y=(r,t,e,i)=>{for(var s=i>1?void 0:i?Qe(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Ke(t,e,s),s};let _=class extends b{constructor(){super(...arguments),this._character="",this.showMoreUsage=!1,this.showMoreSentence=!1,this.hiraganaMode=!1,this.romajiMode=!1,this.loadCharData=new Ie(this,{task:async([r],{signal:t})=>{const e=await fetch(`/characters/${r}.json`,{signal:t});if(!e.ok)throw new Error(`Character data loading error: ${e.status}.`);return await e.json()},args:()=>[this.character]})}get character(){return this._character}set character(r){const t=this._character;this._character=r,this.requestUpdate("myProp",t),this.showMoreUsage=!1,this.showMoreSentence=!1}copyCharacter(){navigator.clipboard.writeText(this.character)}render(){return g`
      <div class="char-info">
        <div class="character-container">
          <div class="character-box">
            <div class="horizontal-line-wrapper"><div class="horizontal-line"></div></div>
            <div class="vertical-line-wrapper"><div class="vertical-line"></div></div>
            <div class="character">${this.character}</div>
          </div>
          <div class="character-actions">
            <a class="action-btn" target="blank_" href="https://kanji.jitenon.jp/cat/search?getdata=${qe(this.character)}&search=contain&how=漢字">📖 字典</a>
            <button class="action-btn" @click=${this.copyCharacter}>📋 复制</button>
          </div>
        </div>

        <div class="pronunciation">
          ${this.loadCharData.render({pending:()=>g`<p>加载中...</p>`,error:()=>g`<p>发音信息加载失败，请重试。</p>`,complete:r=>{const t="無",e="、",i=n=>`<span>${n}</span>`;let s=t,o=t;return r.on&&(this.hiraganaMode?s=r.on.map(i).join(e):s=r.on.map(Ot).join(e)),r.kun&&(this.hiraganaMode?o=r.kun.map(i).join(e):o=r.kun.map(Ot).join(e)),s=W(s),o=W(o),g`
                <div class="on" ><b>音読：</b>${s}</div>
                <div class="kun"><b>訓読：</b>${o}</div>
              `}})}
        </div>

        <div class="informations">
          ${this.loadCharData.render({pending:()=>g`<p>加载中...</p>`,error:()=>g`<p>发音信息加载失败，请重试。</p>`,complete:r=>{const t="無";let e=t;r.usages&&(e=W(r.usages.map(({slug:s,japanese:[{reading:o}]})=>{const n=this.hiraganaMode?o:Qt(o);return`
                    <span class="usage-item">
                      ${$t(s,n)}
                    </span>
                  `}).join("")));let i=t;return i&&(i=W(r.sentences.map(({furigana:s,translation_zh_CN:o})=>`
                    <div class="sentence">
                      <div class="origin">${Je(s)}</div>
                      <div class="translation">${o}</div>
                    </div>
                  `).join(""))),g`
                <div class="usages">
                  <b>用法：</b>
                  ${e}
                  ${r.usages&&r.usages.length>4&&g`
                    <div
                      class="show-more-usage-btn"
                      @click=${()=>this.showMoreUsage=!0}>
                      展开更多 <img class="dark-invert" src="/down.svg" />
                    </div>
                  `}
                </div>
                <div class="sentences">
                  <b>例句：</b>
                  <div class="sentence-list">${i}</div>
                  ${r.sentences&&r.sentences.length>2&&g`
                    <div
                      class="show-more-sentence-btn"
                      @click=${()=>this.showMoreSentence=!0}>
                      展开更多 <img class="dark-invert" src="/down.svg" />
                    </div>
                  `}
                </div>
            `}})}
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
    `}};_.styles=[v`
    .not-found {
      text-align: center;
    }

    .char-info {
      display: grid;
      column-gap: 1rem;
      row-gap: 1rem;
      grid-template-rows: auto auto auto;
      grid-template-areas: "char"
                           "pron"
                           "info";
    }
    @media screen and (min-width: 768px) {
      .char-info {
        column-gap: 1.6rem;
        grid-template-rows: auto 1fr;
        grid-template-columns: auto 1fr;
        grid-template-areas: "char pron"
                             "char info";
      }
    }

    .character-container {
      grid-area: char;
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
      --size: 10rem;
      position: relative;
      width: var(--size);
      line-height: 1;
      font-size: var(--size);
      font-family: var(--chinese-serif-font);
    }
    .character-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    @media screen and (max-width: 767px) {
      .character-box {
        margin: 0 auto;
      }
      .character {
        --size: 16rem;
      }
      .character-actions {
        justify-content: center;
      }
    }

    .pronunciation {
      display: flex;
      align-items: baseline;
      column-gap: 1rem;
      row-gap: .4rem;
      flex-wrap: wrap;
      height: fit-content;
      grid-area: pron;
    }
    .pronunciation .on,
    .pronunciation .kun {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
    }

    .informations {
      grid-area: info;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: baseline;
      height: fit-content;
    }
    b {
      user-select: none;
      font-size: 1.025rem;
    }
    .usages {
      display: flex;
      flex-wrap: wrap;
      flex-basis: 100%;
      align-items: baseline;
      row-gap: .4rem;
    }
    .usages .usage-item {
      display: inline-flex;
      align-items: baseline;
    }
    .show-more-usage-btn {
      flex-basis: 100%;
    }
    .usages .usage-item:not(:last-of-type)::after {
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
      align-items: center;
      user-select: none;
      cursor: pointer;
    }
    .show-more-sentence-btn {
      margin-top: .6rem;
    }
    .sentences b {
      display: block;
      margin-bottom: .2rem;
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

  `,it,Ee,je,Se];y([p({type:String})],_.prototype,"character",1);y([p({type:Boolean,attribute:"show-more-usage",reflect:!0})],_.prototype,"showMoreUsage",2);y([p({type:Boolean,attribute:"show-more-sentence",reflect:!0})],_.prototype,"showMoreSentence",2);y([p({type:Boolean})],_.prototype,"hiraganaMode",2);y([p({type:Boolean})],_.prototype,"romajiMode",2);_=y([A("result-item")],_);let x=class extends b{constructor(){super(...arguments),this.lastSearched="",this.searchResult=[],this.showResult=!1,this.hiraganaMode=!1,this.romajiMode=!1,this.scrollViewRef=T()}connectedCallback(){super.connectedCallback(),this.addEventListener("search",this.searchEventHandler)}disconnectedCallback(){this.removeEventListener("search",this.searchEventHandler),super.disconnectedCallback()}resultUpdateCallback(){var r;(r=this.scrollViewRef.value)==null||r.scrollTo({top:0})}searchEventHandler(r){const{searchQuery:t}=r.detail;if(t!==this.lastSearched){this.searchResult=[];for(const e of t){const i=We.get(e);i!==void 0&&(this.searchResult=this.searchResult.concat(i))}this.searchResult.length&&this.resultUpdateCallback(),this.lastSearched=t}}render(){const r=g`<h1 class="not-found">未找到对应漢字</h1>`;return g`
      <div class="container">
        <div class="scroll-view" ${T(this.scrollViewRef)}>
          ${this.searchResult.length===0?r:this.searchResult.map(t=>g`
              <result-item
                character=${t}
                .hiraganaMode=${this.hiraganaMode}
                .romajiMode=${this.romajiMode}
              ></result-item>
            `)}
        </div>
      </div>
    `}};x.styles=v`
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
      display: flex;
      flex-direction: column;
      row-gap: 4rem;
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
  `;y([ft()],x.prototype,"lastSearched",2);y([ft()],x.prototype,"searchResult",2);y([p(vt)],x.prototype,"showResult",2);y([p({type:Boolean})],x.prototype,"hiraganaMode",2);y([p({type:Boolean})],x.prototype,"romajiMode",2);x=y([A("result-view")],x);
