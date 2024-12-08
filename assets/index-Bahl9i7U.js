(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,Z=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),Y=new WeakMap;let ce=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Z&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Y.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Y.set(t,e))}return e}toString(){return this.cssText}};const _e=r=>new ce(typeof r=="string"?r:r+"",void 0,G),U=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ce(t,r,G)},ve=(r,e)=>{if(Z)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},ee=Z?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return _e(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ye,defineProperty:Ae,getOwnPropertyDescriptor:be,getOwnPropertyNames:we,getOwnPropertySymbols:Ee,getPrototypeOf:Se}=Object,$=globalThis,te=$.trustedTypes,Pe=te?te.emptyScript:"",j=$.reactiveElementPolyfillSupport,P=(r,e)=>r,V={toAttribute(r,e){switch(e){case Boolean:r=r?Pe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},de=(r,e)=>!ye(r,e),se={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:de};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Ae(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=be(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const e=Se(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const t=this.properties,i=[...we(t),...Ee(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ee(s))}else e!==void 0&&t.push(ee(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ve(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var o;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:V).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:V;this._$Em=s,this[s]=l.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??de)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[P("elementProperties")]=new Map,A[P("finalized")]=new Map,j==null||j({ReactiveElement:A}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,N=x.trustedTypes,ie=N?N.createPolicy("lit-html",{createHTML:r=>r}):void 0,pe="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,ue="?"+g,xe=`<${ue}>`,y=document,C=()=>y.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",X=Array.isArray,Ce=r=>X(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",z=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,oe=/>/g,_=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ne=/'/g,ae=/"/g,fe=/^(?:script|style|textarea|title)$/i,Te=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),D=Te(1),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),he=new WeakMap,v=y.createTreeWalker(y,129);function ge(r,e){if(!X(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ie!==void 0?ie.createHTML(e):e}const Oe=(r,e)=>{const t=r.length-1,i=[];let s,o=e===2?"<svg>":e===3?"<math>":"",n=S;for(let l=0;l<t;l++){const a=r[l];let c,p,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=re:p[1]!==void 0?n=oe:p[2]!==void 0?(fe.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=_):p[3]!==void 0&&(n=_):n===_?p[0]===">"?(n=s??S,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?_:p[3]==='"'?ae:ne):n===ae||n===ne?n=_:n===re||n===oe?n=S:(n=_,s=void 0);const f=n===_&&r[l+1].startsWith("/>")?" ":"";o+=n===S?a+xe:h>=0?(i.push(c),a.slice(0,h)+pe+a.slice(h)+g+f):a+g+(h===-2?l:f)}return[ge(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class O{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[c,p]=Oe(e,t);if(this.el=O.createElement(c,i),v.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=v.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(pe)){const u=p[n++],f=s.getAttribute(h).split(g),k=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:k[2],strings:f,ctor:k[1]==="."?Me:k[1]==="?"?ke:k[1]==="@"?He:R}),s.removeAttribute(h)}else h.startsWith(g)&&(a.push({type:6,index:o}),s.removeAttribute(h));if(fe.test(s.tagName)){const h=s.textContent.split(g),u=h.length-1;if(u>0){s.textContent=N?N.emptyScript:"";for(let f=0;f<u;f++)s.append(h[f],C()),v.nextNode(),a.push({type:2,index:++o});s.append(h[u],C())}}}else if(s.nodeType===8)if(s.data===ue)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(g,h+1))!==-1;)a.push({type:7,index:o}),h+=g.length-1}o++}}static createElement(e,t){const i=y.createElement("template");return i.innerHTML=e,i}}function E(r,e,t=r,i){var n,l;if(e===w)return e;let s=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=T(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=E(r,s._$AS(r,e.values),s,i)),e}class Ue{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??y).importNode(t,!0);v.currentNode=s;let o=v.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new M(o,o.nextSibling,this,e):a.type===1?c=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(c=new Ne(o,this,e)),this._$AV.push(c),a=i[++l]}n!==(a==null?void 0:a.index)&&(o=v.nextNode(),n++)}return v.currentNode=y,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class M{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),T(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ce(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=O.createElement(ge(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const n=new Ue(s,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=he.get(e.strings);return t===void 0&&he.set(e.strings,t=new O(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new M(this.O(C()),this.O(C()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(o===void 0)e=E(this,e,t,0),n=!T(e)||e!==this._$AH&&e!==w,n&&(this._$AH=e);else{const l=e;let a,c;for(e=o[0],a=0;a<o.length-1;a++)c=E(this,l[i+a],t,a),c===w&&(c=this._$AH[a]),n||(n=!T(c)||c!==this._$AH[a]),c===d?e=d:e!==d&&(e+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!s&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Me extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class ke extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class He extends R{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??d)===w)return;const i=this._$AH,s=e===d&&i!==d||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const I=x.litHtmlPolyfillSupport;I==null||I(O,M),(x.litHtmlVersions??(x.litHtmlVersions=[])).push("3.2.1");const De=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new M(e.insertBefore(C(),o),o,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return w}}var le;m._$litElement$=!0,m.finalized=!0,(le=globalThis.litElementHydrateSupport)==null||le.call(globalThis,{LitElement:m});const B=globalThis.litElementPolyfillSupport;B==null||B({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var Re=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,je=(r,e,t,i)=>{for(var s=i>1?void 0:i?Le(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Re(e,t,s),s};let W=class extends m{render(){return D`
    <div id="root">
      <nav-bar></nav-bar>
      <slot></slot>
    </div>
    `}};W.styles=U`
    #root {
      display: grid;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background-color: var(--allpage-bg-color);
      grid-template-rows: auto 0;
    }
  `;W=je([L("app-root")],W);const $e=U`
  img.dark-invert {
    filter: var(--img-filter);
  }
`;var ze=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,Be=(r,e,t,i)=>{for(var s=i>1?void 0:i?Ie(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&ze(e,t,s),s};let Q=class extends m{render(){return D`
    <a href="https://github.com/BHznJNs/hanzi2kanji">
      <img class="dark-invert" src="/github-mark.svg" />
    </a>
    <theme-toggle></theme-toggle>
    `}};Q.styles=[U`
    :host {
      position: absolute;
      top: .6rem;
      right: 1rem;
      display: flex;
      align-items: center;
      gap: .4rem;
    }

    img {
      width: 20px;
      height: 20px;
    }
  `,$e];Q=Be([L("nav-bar")],Q);const b=class b{constructor(){this.themeToggleCallbacks=[],this.isActualDarkTheme=!1,b.darkModeMediaQuery&&(b.darkModeMediaQuery.addEventListener("change",this.darkModeToggleHandler),this.darkModeToggleHandler(),this.isActualDarkTheme=this.isPreferedDarkTheme)}get isPreferedDarkTheme(){return b.darkModeMediaQuery.matches}manuallyToggle(e=!this.isActualDarkTheme){this.isActualDarkTheme=e;for(const t of this.themeToggleCallbacks)t(e)}darkModeToggleHandler(){const e=this.isPreferedDarkTheme;this.isActualDarkTheme=e;for(const t of this.themeToggleCallbacks)t(e)}};b.darkModeMediaQuery=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");let q=b;const J=new q;me(r=>{document.body.classList.toggle("dark",r)});function Ve(r){return J.manuallyToggle(r),J.isActualDarkTheme}function me(r){J.themeToggleCallbacks.push(r)}var We=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,qe=(r,e,t,i)=>{for(var s=i>1?void 0:i?Qe(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&We(e,t,s),s};let K=class extends m{constructor(){super(),me(r=>{this.toggleAttribute("dark",r)})}toggleTheme(){Ve()}render(){return D`
    <button @click=${this.toggleTheme}>
      <img class="icon-light" src="/light_mode.svg" />
      <img class="icon-dark" src="/dark_mode.svg" />
    </button>
    `}};K.styles=U`
  :host {
    margin-left: .5rem;
  }
  button {
    position: relative;
    padding: 0.5rem;
    background: var(--allpage-bg-color);
    border: 2px solid var(--btn-bd-color);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s;
  }

  button:hover {
    background-color: var(--hovered-bg-color);
  }

  .icon-light,
  .icon-dark {
    width: 18px;
    height: 18px;
    transition: all 0.3s ease;
  }

  .icon-light {
    transform: rotate(0) scale(1);
  }

  .icon-dark {
    position: absolute;
    transform: rotate(90deg) scale(0);
  }

  :host([dark]) .icon-light {
    transform: rotate(-90deg) scale(0);
  }

  :host([dark]) .icon-dark {
    filter: invert(1);
    transform: rotate(0deg) scale(1);
  }
  `;K=qe([L("theme-toggle")],K);function Je(r,e){let t=null;return function(...i){t&&clearTimeout(t),t=setTimeout(()=>r(...i),e)}}var Ke=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,Ze=(r,e,t,i)=>{for(var s=i>1?void 0:i?Fe(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&Ke(e,t,s),s};let F=class extends m{constructor(){super(...arguments),this.searchQuery=""}inputHandler(r){this.searchQuery=r.target.value}render(){return D`
    <div class="logo">
      <img src="/favicon.svg" />
    </div>
    <div class="input-wrapper">
      <span class="icon">
        <img class="dark-invert" src="/search.svg" />
      </span>
      <input
        @input="${Je(this.inputHandler,1e3)}"
        type="search" 
        placeholder="在此输入要搜索的汉字"
      />
    </div>
    `}};F.styles=[U`
    :host {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      margin-bottom: 8rem;
      justify-self: center;
      align-self: center;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      margin: 1rem auto;
      width: fit-content;
      border: 1px solid var(--search-box-bd-color);
      background-color: var(--search-box-color);
      box-shadow: var(--shadow-sm);
      border-radius: 1.5rem;
      overflow: hidden;
    }
  
    .input-wrapper:focus-within {
      box-shadow: var(--shadow-md-1);
      background-color: var(--search-box-hovered-color);
    }

    input {
      max-width: 12rem;
      padding: .8rem 1.6rem .8rem 0;
      font-size: 1rem;
      color: var(--default-tx-color);
      background-color: transparent;
      border: none;
      outline: none;
    }
    input::placeholder {
      color: var(--placeholder-color);
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

    .icon {
      margin: 0 .4rem 0 .8rem;
      font-size: 0;
      opacity: .4;
      user-select: none;
    }
  `,$e];F=Ze([L("input-box")],F);
