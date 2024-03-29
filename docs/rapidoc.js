
/**
* @preserve
* RapiDoc 9.3.5-beta - WebComponent to View OpenAPI docs
* License: MIT
* Repo   : https://github.com/rapi-doc/RapiDoc
* Author : Mrinmoy Majumdar
*/
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 601:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: JsonSchemaViewer, OAuthReceiver, RapiDocMini, default

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const css_tag_t=window,e=css_tag_t.ShadowRoot&&(void 0===css_tag_t.ShadyCSS||css_tag_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new o("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o(n,t,s)},S=(s,n)=>{e?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=css_tag_t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)}))},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var reactive_element_s;const reactive_element_e=window,reactive_element_r=reactive_element_e.trustedTypes,h=reactive_element_r?reactive_element_r.emptyScript:"",reactive_element_o=reactive_element_e.reactiveElementPolyfillSupport,reactive_element_n={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:reactive_element_n,reflect:!1,hasChanged:a},d="finalized";class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty(d))return!1;this[d]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c(i))}else void 0!==i&&s.push(c(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:reactive_element_n).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:reactive_element_n;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}u[d]=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==reactive_element_o||reactive_element_o({ReactiveElement:u}),(null!==(reactive_element_s=reactive_element_e.reactiveElementVersions)&&void 0!==reactive_element_s?reactive_element_s:reactive_element_e.reactiveElementVersions=[]).push("1.6.2");
//# sourceMappingURL=reactive-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lit_html_t;const lit_html_i=window,lit_html_s=lit_html_i.trustedTypes,lit_html_e=lit_html_s?lit_html_s.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_o="$lit$",lit_html_n=`lit$${(Math.random()+"").slice(9)}$`,lit_html_l="?"+lit_html_n,lit_html_h=`<${lit_html_l}>`,lit_html_r=document,lit_html_d=()=>lit_html_r.createComment(""),lit_html_u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,lit_html_c=Array.isArray,v=t=>lit_html_c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),lit_html_a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${lit_html_a}(?:([^\\s"'>=/]+)(${lit_html_a}*=${lit_html_a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),lit_html_x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=lit_html_r.createTreeWalker(lit_html_r,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f?s+lit_html_h:v>=0?(l.push(e),s.slice(0,v)+lit_html_o+s.slice(v)+lit_html_n+w):s+lit_html_n+(-2===v?(l.push(void 0),i):w)}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==lit_html_e?lit_html_e.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(lit_html_o)||i.startsWith(lit_html_n)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+lit_html_o).split(lit_html_n),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R})}else v.push({type:6,index:r})}for(const i of t)h.removeAttribute(i)}if(y.test(h.tagName)){const t=h.textContent.split(lit_html_n),i=t.length-1;if(i>0){h.textContent=lit_html_s?lit_html_s.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],lit_html_d()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],lit_html_d())}}}else if(8===h.nodeType)if(h.data===lit_html_l)v.push({type:2,index:r});else{let t=-1;for(;-1!==(t=h.data.indexOf(lit_html_n,t+1));)v.push({type:7,index:r}),t+=lit_html_n.length-1}r++}}static createElement(t,i){const s=lit_html_r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=lit_html_u(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class lit_html_S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:lit_html_r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h]}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++)}return C.currentNode=lit_html_r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),lit_html_u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&lit_html_u(this._$AH)?this._$AA.nextSibling.data=t:this.$(lit_html_r.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else{const t=new lit_html_S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){lit_html_c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(lit_html_d()),this.k(lit_html_d()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!lit_html_u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!lit_html_u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const H=lit_html_s?lit_html_s.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z={O:lit_html_o,P:lit_html_n,A:lit_html_l,C:1,M:P,L:lit_html_S,D:v,R:N,I:M,V:R,H:I,N:L,U:k,F:z},j=lit_html_i.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(lit_html_t=lit_html_i.litHtmlVersions)&&void 0!==lit_html_t?lit_html_t:lit_html_i.litHtmlVersions=[]).push("2.7.4");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(lit_html_d(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l};
//# sourceMappingURL=lit-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lit_element_l,lit_element_o;const lit_element_r=(/* unused pure expression or super */ null && (t));class lit_element_s extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}lit_element_s.finalized=!0,lit_element_s._$litElement$=!0,null===(lit_element_l=globalThis.litElementHydrateSupport)||void 0===lit_element_l||lit_element_l.call(globalThis,{LitElement:lit_element_s});const lit_element_n=globalThis.litElementPolyfillSupport;null==lit_element_n||lit_element_n({LitElement:lit_element_s});const lit_element_h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(lit_element_o=globalThis.litElementVersions)&&void 0!==lit_element_o?lit_element_o:globalThis.litElementVersions=[]).push("3.3.2");
//# sourceMappingURL=lit-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit/index.js

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/marked/lib/marked.esm.js
/**
 * marked v5.1.0 - a markdown parser
 * Copyright (c) 2011-2023, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

function getDefaults() {
  return {
    async: false,
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    hooks: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

let defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = new RegExp(escapeTest.source, 'g');
const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, 'g');
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function marked_esm_escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

/**
 * @param {string} html
 */
function marked_esm_unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

const caret = /(^|[^\[])\^/g;

/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */
function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(marked_esm_unescape(href))
        .replace(nonWordAndColonTest, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

/**
 * @param {string} base
 * @param {string} href
 */
function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

const noopTest = { exec: function noopTest() {} };

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;

  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) { cells.shift(); }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) { cells.pop(); }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.slice(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkDeprecations(opt, callback) {
  if (!opt || opt.silent) {
    return;
  }

  if (callback) {
    console.warn('marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async');
  }

  if (opt.sanitize || opt.sanitizer) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }

  if (opt.highlight || opt.langPrefix !== 'language-') {
    console.warn('marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.');
  }

  if (opt.mangle) {
    console.warn('marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.');
  }

  if (opt.baseUrl) {
    console.warn('marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.');
  }

  if (opt.smartypants) {
    console.warn('marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.');
  }

  if (opt.xhtml) {
    console.warn('marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.');
  }

  if (opt.headerIds || opt.headerPrefix) {
    console.warn('marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.');
  }
}

function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? marked_esm_escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    const token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text)
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: 'image',
    raw,
    href,
    title,
    text: marked_esm_escape(text)
  };
}

function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  const indentToCode = matchIndentToCode[1];

  return text
    .split('\n')
    .map(node => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }

      const [indentInNode] = matchIndentInNode;

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    })
    .join('\n');
}

/**
 * Tokenizer
 */
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }

  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }

  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic
          ? rtrim(text, '\n')
          : text
      };
    }
  }

  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || '');

      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, '$1') : cap[2],
        text
      };
    }
  }

  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();

      // remove trailing #s
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, '#');
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }

      return {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }

  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }

  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, '');
      const top = this.lexer.state.top;
      this.lexer.state.top = true;
      const tokens = this.lexer.blockTokens(text);
      this.lexer.state.top = top;
      return {
        type: 'blockquote',
        raw: cap[0],
        tokens,
        text
      };
    }
  }

  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine,
        line, nextLine, rawLine, itemContents, endEarly;

      let bull = cap[1].trim();
      const isordered = bull.length > 1;

      const list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };

      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;

      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      }

      // Get next list item
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);

      // Check if current bullet point can start a new List Item
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }

        if (this.rules.block.hr.test(src)) { // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }

        raw = cap[0];
        src = src.substring(raw.length);

        line = cap[2].split('\n', 1)[0].replace(/^\t+/, (t) => ' '.repeat(3 * t.length));
        nextLine = src.split('\n', 1)[0];

        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char
          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }

        blankLine = false;

        if (!line && /^ *$/.test(nextLine)) { // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }

        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);

          // Check if following lines should be included in List Item
          while (src) {
            rawLine = src.split('\n', 1)[0];
            nextLine = rawLine;

            // Re-align to follow commonmark nesting rules
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            }

            // End list item if found code fences
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }

            // End list item if found start of new heading
            if (headingBeginRegex.test(nextLine)) {
              break;
            }

            // End list item if found start of new bullet
            if (nextBulletRegex.test(nextLine)) {
              break;
            }

            // Horizontal rule found
            if (hrRegex.test(src)) {
              break;
            }

            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) { // Dedent if possible
              itemContents += '\n' + nextLine.slice(indent);
            } else {
              // not enough indentation
              if (blankLine) {
                break;
              }

              // paragraph continuation unless last line was a different block level element
              if (line.search(/[^ ]/) >= 4) { // indented code block
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }

              itemContents += '\n' + nextLine;
            }

            if (!blankLine && !nextLine.trim()) { // Check if current line is blank
              blankLine = true;
            }

            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }

        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }

        // Check for task list items
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }

        list.items.push({
          type: 'list_item',
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });

        list.raw += raw;
      }

      // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();

      const l = list.items.length;

      // Item child tokens handled here at end because we needed to have the final item to trim it first
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);

        if (!list.loose) {
          // Check if list should be loose
          const spacers = list.items[i].tokens.filter(t => t.type === 'space');
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some(t => /\n.*\n/.test(t.raw));

          list.loose = hasMultipleLineBreaks;
        }
      }

      // Set all items to loose if list is loose
      if (list.loose) {
        for (i = 0; i < l; i++) {
          list.items[i].loose = true;
        }
      }

      return list;
    }
  }

  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: 'html',
        block: true,
        raw: cap[0],
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };
      if (this.options.sanitize) {
        const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : marked_esm_escape(cap[0]);
        token.type = 'paragraph';
        token.text = text;
        token.tokens = this.lexer.inline(text);
      }
      return token;
    }
  }

  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline._escapes, '$1') : '';
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, '$1') : cap[3];
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href,
        title
      };
    }
  }

  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: 'table',
        header: splitCells(cap[1]).map(c => { return { text: c }; }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        item.raw = cap[0];

        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => { return { text: c }; });
        }

        // parse child tokens inside headers and cells

        // header child tokens
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = this.lexer.inline(item.header[j].text);
        }

        // cell child tokens
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = this.lexer.inline(row[k].text);
          }
        }

        return item;
      }
    }
  }

  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }

  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === '\n'
        ? cap[1].slice(0, -1)
        : cap[1];
      return {
        type: 'paragraph',
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }

  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }

  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: marked_esm_escape(cap[1])
      };
    }
  }

  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }

      return {
        type: this.options.sanitize
          ? 'text'
          : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: this.options.sanitize
          ? (this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : marked_esm_escape(cap[0]))
          : cap[0]
      };
    }
  }

  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!(/>$/.test(trimmedUrl))) {
          return;
        }

        // ending angle bracket cannot be escaped
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        const lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }
      let href = cap[2];
      let title = '';
      if (this.options.pedantic) {
        // split pedantic href and title
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !(/>$/.test(trimmedUrl))) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }

  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src))
        || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link) {
        const text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }

  emStrong(src, maskedSrc, prevChar = '') {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;

    // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;

    const nextChar = match[1] || match[2] || '';

    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;

      const endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;

      // Clip maskedSrc to same section of string as src (move to lexer?)
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];

        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;

        if (match[3] || match[4]) { // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) { // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;

        if (delimTotal > 0) continue; // Haven't found enough closing delimiters

        // Remove extra characters. *a*** -> *a*
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);

        const raw = src.slice(0, lLength + match.index + rLength + 1);

        // Create `em` if smallest delimiter has odd char count. *a***
        if (Math.min(lLength, rLength) % 2) {
          const text = raw.slice(1, -1);
          return {
            type: 'em',
            raw,
            text,
            tokens: this.lexer.inlineTokens(text)
          };
        }

        // Create 'strong' if smallest delimiter has even char count. **a***
        const text = raw.slice(2, -2);
        return {
          type: 'strong',
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }

  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, ' ');
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = marked_esm_escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }

  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }

  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }

  autolink(src, mangle) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === '@') {
        text = marked_esm_escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = marked_esm_escape(cap[1]);
        href = text;
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  url(src, mangle) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === '@') {
        text = marked_esm_escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = marked_esm_escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  inlineText(src, smartypants) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : marked_esm_escape(cap[0])) : cap[0];
      } else {
        text = marked_esm_escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }
      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }
}

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */)
  .replace('bull', block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.lheading = edit(block.lheading)
  .replace(/bull/g, block.bullet) // lists can interrupt
  .getRegex();

block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = { ...block };

/**
 * GFM Block Grammar
 */

block.gfm = {
  ...block.normal,
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
    + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
};

block.gfm.table = edit(block.gfm.table)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();

block.gfm.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('table', block.gfm.table) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = {
  ...block.normal,
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest, // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
};

/**
 * Inline-Level Grammar
 */
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    //         (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //         | Skip orphan inside strong      | Consume to delim | (1) #***              | (2) a***#, a***                    | (3) #***a, ***a                  | (4) ***#                 | (5) #***#                         | (6) a***a
    rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/ // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^((?![*_])[\spunctuation])/
};

// list of unicode punctuation marks, plus any missing characters from CommonMark spec
inline._punctuation = '\\p{P}$+<=>`^|~';
inline.punctuation = edit(inline.punctuation, 'u').replace(/punctuation/g, inline._punctuation).getRegex();

// sequences em should skip over [title](link), `code`, <html>
inline.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
inline.anyPunctuation = /\\[punct]/g;
inline._escapes = /\\([punct])/g;

inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();

inline.emStrong.lDelim = edit(inline.emStrong.lDelim, 'u')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'gu')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'gu')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.anyPunctuation = edit(inline.anyPunctuation, 'gu')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline._escapes = edit(inline._escapes, 'gu')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', inline._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .replace('ref', block._label)
  .getRegex();

inline.nolink = edit(inline.nolink)
  .replace('ref', block._label)
  .getRegex();

inline.reflinkSearch = edit(inline.reflinkSearch, 'g')
  .replace('reflink', inline.reflink)
  .replace('nolink', inline.nolink)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = { ...inline };

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = {
  ...inline.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
};

/**
 * GFM Inline Grammar
 */

inline.gfm = {
  ...inline.normal,
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = {
  ...inline.gfm,
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
};

/**
 * smartypants text replacement
 * @param {string} text
 */
function smartypants(text) {
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
}

/**
 * mangle email addresses
 * @param {string} text
 */
function mangle(text) {
  let out = '',
    i,
    ch;

  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
}

/**
 * Block Lexer
 */
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };

    const rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }

  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }

  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }

  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }

  /**
   * Preprocessing
   */
  lex(src) {
    src = src
      .replace(/\r\n|\r/g, '\n');

    this.blockTokens(src, this.tokens);

    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }

    return this.tokens;
  }

  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + '    '.repeat(tabs.length);
      });
    }

    let token, lastToken, cutSrc, lastParagraphClipped;

    while (src) {
      if (this.options.extensions
        && this.options.extensions.block
        && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // newline
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }
        continue;
      }

      // code
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // fences
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // heading
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // hr
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // blockquote
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // list
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // html
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // def
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }

      // table (gfm)
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // lheading
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = (cutSrc.length !== src.length);
        src = src.substring(token.raw.length);
        continue;
      }

      // text
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    this.state.top = true;
    return tokens;
  }

  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }

  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;

    // String with links masked to avoid interference with em and strong
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;

    // Mask out reflinks
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    // Mask out other blocks
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }

    // Mask out escaped characters
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }

    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }
      keepPrevChar = false;

      // extensions
      if (this.options.extensions
        && this.options.extensions.inline
        && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // escape
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // tag
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // link
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // reflink, nolink
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // em & strong
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // code
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // br
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // del (gfm)
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // autolink
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // url (gfm)
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== '_') { // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    return tokens;
  }
}

/**
 * Renderer
 */
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }

  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    code = code.replace(/\n$/, '') + '\n';

    if (!lang) {
      return '<pre><code>'
        + (escaped ? code : marked_esm_escape(code, true))
        + '</code></pre>\n';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + marked_esm_escape(lang)
      + '">'
      + (escaped ? code : marked_esm_escape(code, true))
      + '</code></pre>\n';
  }

  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>\n${quote}</blockquote>\n`;
  }

  html(html, block) {
    return html;
  }

  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    }

    // ignore IDs
    return `<h${level}>${text}</h${level}>\n`;
  }

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  }

  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }

  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>\n`;
  }

  checkbox(checked) {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox"'
      + (this.options.xhtml ? ' /' : '')
      + '> ';
  }

  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>\n`;
  }

  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;

    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + body
      + '</table>\n';
  }

  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>\n${content}</tr>\n`;
  }

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align
      ? `<${type} align="${flags.align}">`
      : `<${type}>`;
    return tag + content + `</${type}>\n`;
  }

  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }

  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }

  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }

  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }

    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  }

  text(text) {
    return text;
  }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  html(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }
}

/**
 * Slugger generates header id
 */
class Slugger {
  constructor() {
    this.seen = {};
  }

  /**
   * @param {string} value
   */
  serialize(value) {
    return value
      .toLowerCase()
      .trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '')
      // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');
  }

  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }

  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}

/**
 * Parsing & Compiling
 */
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }

  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }

  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }

  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = '',
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'space': {
          continue;
        }
        case 'hr': {
          out += this.renderer.hr();
          continue;
        }
        case 'heading': {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            marked_esm_unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger);
          continue;
        }
        case 'code': {
          out += this.renderer.code(token.text,
            token.lang,
            token.escaped);
          continue;
        }
        case 'table': {
          header = '';

          // header
          cell = '';
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: true, align: token.align[j] }
            );
          }
          header += this.renderer.tablerow(cell);

          body = '';
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];

            cell = '';
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: false, align: token.align[k] }
              );
            }

            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case 'blockquote': {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case 'list': {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;

          body = '';
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;

            itemBody = '';
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                  item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                    item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: 'text',
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }

            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }

          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case 'html': {
          out += this.renderer.html(token.text, token.block);
          continue;
        }
        case 'paragraph': {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case 'text': {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === 'text') {
            token = tokens[++i];
            body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }

        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }

    return out;
  }

  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = '',
      i,
      token,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'escape': {
          out += renderer.text(token.text);
          break;
        }
        case 'html': {
          out += renderer.html(token.text);
          break;
        }
        case 'link': {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case 'image': {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case 'strong': {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'em': {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'codespan': {
          out += renderer.codespan(token.text);
          break;
        }
        case 'br': {
          out += renderer.br();
          break;
        }
        case 'del': {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'text': {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}

class Hooks {
  constructor(options) {
    this.options = options || defaults;
  }

  static passThroughHooks = new Set([
    'preprocess',
    'postprocess'
  ]);

  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }

  /**
   * Process HTML after marked is finished
   */
  postprocess(html) {
    return html;
  }
}

class Marked {
  defaults = getDefaults();
  options = this.setOptions;

  parse = this.#parseMarkdown(Lexer.lex, Parser.parse);
  parseInline = this.#parseMarkdown(Lexer.lexInline, Parser.parseInline);

  Parser = Parser;
  parser = Parser.parse;
  Renderer = Renderer;
  TextRenderer = TextRenderer;
  Lexer = Lexer;
  lexer = Lexer.lex;
  Tokenizer = Tokenizer;
  Slugger = Slugger;
  Hooks = Hooks;

  constructor(...args) {
    this.use(...args);
  }

  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case 'table': {
          for (const cell of token.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of token.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case 'list': {
          values = values.concat(this.walkTokens(token.items, callback));
          break;
        }
        default: {
          if (this.defaults.extensions && this.defaults.extensions.childTokens && this.defaults.extensions.childTokens[token.type]) { // Walk any extensions
            this.defaults.extensions.childTokens[token.type].forEach((childTokens) => {
              values = values.concat(this.walkTokens(token[childTokens], callback));
            });
          } else if (token.tokens) {
            values = values.concat(this.walkTokens(token.tokens, callback));
          }
        }
      }
    }
    return values;
  }

  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };

    args.forEach((pack) => {
      // copy options to new object
      const opts = { ...pack };

      // set async to true if it was set to true before
      opts.async = this.defaults.async || opts.async || false;

      // ==-- Parse "addon" extensions --== //
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error('extension name required');
          }
          if (ext.renderer) { // Renderer extensions
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              // Replace extension with func to run new extension but fall back if false
              extensions.renderers[ext.name] = function(...args) {
                let ret = ext.renderer.apply(this, args);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if (ext.tokenizer) { // Tokenizer Extensions
            if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            if (extensions[ext.level]) {
              extensions[ext.level].unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) { // Function to check for start of token
              if (ext.level === 'block') {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === 'inline') {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if (ext.childTokens) { // Child tokens to be visited by walkTokens
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }

      // ==-- Parse "overwrite" extensions --== //
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new Renderer(this.defaults);
        for (const prop in pack.renderer) {
          const prevRenderer = renderer[prop];
          // Replace renderer with func to run extension, but fall back if false
          renderer[prop] = (...args) => {
            let ret = pack.renderer[prop].apply(renderer, args);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args);
            }
            return ret;
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          const prevTokenizer = tokenizer[prop];
          // Replace tokenizer with func to run extension, but fall back if false
          tokenizer[prop] = (...args) => {
            let ret = pack.tokenizer[prop].apply(tokenizer, args);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }

      // ==-- Parse Hooks extensions --== //
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new Hooks();
        for (const prop in pack.hooks) {
          const prevHook = hooks[prop];
          if (Hooks.passThroughHooks.has(prop)) {
            hooks[prop] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(pack.hooks[prop].call(hooks, arg)).then(ret => {
                  return prevHook.call(hooks, ret);
                });
              }

              const ret = pack.hooks[prop].call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[prop] = (...args) => {
              let ret = pack.hooks[prop].apply(hooks, args);
              if (ret === false) {
                ret = prevHook.apply(hooks, args);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }

      // ==-- Parse WalkTokens extensions --== //
      if (pack.walkTokens) {
        const walkTokens = this.defaults.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(pack.walkTokens.call(this, token));
          if (walkTokens) {
            values = values.concat(walkTokens.call(this, token));
          }
          return values;
        };
      }

      this.defaults = { ...this.defaults, ...opts };
    });

    return this;
  }

  setOptions(opt) {
    this.defaults = { ...this.defaults, ...opt };
    return this;
  }

  #parseMarkdown(lexer, parser) {
    return (src, opt, callback) => {
      if (typeof opt === 'function') {
        callback = opt;
        opt = null;
      }

      const origOpt = { ...opt };
      opt = { ...this.defaults, ...origOpt };
      const throwError = this.#onError(opt.silent, opt.async, callback);

      // throw error in case of non string input
      if (typeof src === 'undefined' || src === null) {
        return throwError(new Error('marked(): input parameter is undefined or null'));
      }
      if (typeof src !== 'string') {
        return throwError(new Error('marked(): input parameter is of type '
          + Object.prototype.toString.call(src) + ', string expected'));
      }

      checkDeprecations(opt, callback);

      if (opt.hooks) {
        opt.hooks.options = opt;
      }

      if (callback) {
        const highlight = opt.highlight;
        let tokens;

        try {
          if (opt.hooks) {
            src = opt.hooks.preprocess(src);
          }
          tokens = lexer(src, opt);
        } catch (e) {
          return throwError(e);
        }

        const done = (err) => {
          let out;

          if (!err) {
            try {
              if (opt.walkTokens) {
                this.walkTokens(tokens, opt.walkTokens);
              }
              out = parser(tokens, opt);
              if (opt.hooks) {
                out = opt.hooks.postprocess(out);
              }
            } catch (e) {
              err = e;
            }
          }

          opt.highlight = highlight;

          return err
            ? throwError(err)
            : callback(null, out);
        };

        if (!highlight || highlight.length < 3) {
          return done();
        }

        delete opt.highlight;

        if (!tokens.length) return done();

        let pending = 0;
        this.walkTokens(tokens, (token) => {
          if (token.type === 'code') {
            pending++;
            setTimeout(() => {
              highlight(token.text, token.lang, (err, code) => {
                if (err) {
                  return done(err);
                }
                if (code != null && code !== token.text) {
                  token.text = code;
                  token.escaped = true;
                }

                pending--;
                if (pending === 0) {
                  done();
                }
              });
            }, 0);
          }
        });

        if (pending === 0) {
          done();
        }

        return;
      }

      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src)
          .then(src => lexer(src, opt))
          .then(tokens => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens)
          .then(tokens => parser(tokens, opt))
          .then(html => opt.hooks ? opt.hooks.postprocess(html) : html)
          .catch(throwError);
      }

      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        const tokens = lexer(src, opt);
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html = parser(tokens, opt);
        if (opt.hooks) {
          html = opt.hooks.postprocess(html);
        }
        return html;
      } catch (e) {
        return throwError(e);
      }
    };
  }

  #onError(silent, async, callback) {
    return (e) => {
      e.message += '\nPlease report this to https://github.com/markedjs/this.';

      if (silent) {
        const msg = '<p>An error occurred:</p><pre>'
          + marked_esm_escape(e.message + '', true)
          + '</pre>';
        if (async) {
          return Promise.resolve(msg);
        }
        if (callback) {
          callback(null, msg);
          return;
        }
        return msg;
      }

      if (async) {
        return Promise.reject(e);
      }
      if (callback) {
        callback(e);
        return;
      }
      throw e;
    };
  }
}

const markedInstance = new Marked(defaults);

/**
 * Marked
 */
function marked(src, opt, callback) {
  return markedInstance.parse(src, opt, callback);
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  markedInstance.setOptions(opt);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;

marked.defaults = defaults;

/**
 * Use Extension
 */

marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};

/**
 * Run callback for every token
 */

marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};

/**
 * Parse Inline
 * @param {string} src
 */
marked.parseInline = markedInstance.parseInline;

/**
 * Expose
 */
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.Hooks = Hooks;
marked.parse = marked;

const options = marked.options;
const setOptions = marked.setOptions;
const use = marked.use;
const walkTokens = marked.walkTokens;
const parseInline = marked.parseInline;
const parse = (/* unused pure expression or super */ null && (marked));
const parser = Parser.parse;
const lexer = Lexer.lex;



// EXTERNAL MODULE: ./node_modules/prismjs/prism.js
var prism = __webpack_require__(660);
var prism_default = /*#__PURE__*/__webpack_require__.n(prism);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-css.js
var prism_css = __webpack_require__(251);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-yaml.js
var prism_yaml = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-go.js
var prism_go = __webpack_require__(46);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-java.js
var prism_java = __webpack_require__(503);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-json.js
var prism_json = __webpack_require__(277);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-bash.js
var prism_bash = __webpack_require__(874);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-python.js
var prism_python = __webpack_require__(366);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-http.js
var prism_http = __webpack_require__(57);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-csharp.js
var prism_csharp = __webpack_require__(16);
;// CONCATENATED MODULE: ./src/styles/font-styles.js

/* harmony default export */ const font_styles = (i`
  .hover-bg:hover{
    background: var(--bg3);
  }
  ::selection {
    background: var(--selection-bg);
    color: var(--selection-fg);
  }
  .regular-font{ 
    font-family:var(--font-regular); 
  }
  .mono-font { 
    font-family:var(--font-mono); 
  }
  .title { 
    font-size: calc(var(--font-size-small) + 18px);
    font-weight: normal 
  }
  .sub-title{ font-size: 20px;}
  .req-res-title {
    font-family: var(--font-regular);
    font-size: calc(var(--font-size-small) + 4px);
    font-weight:bold;
    margin-bottom:8px;
    text-align:left;
  }
  .tiny-title { 
    font-size:calc(var(--font-size-small) + 1px); 
    font-weight:bold; 
  }
  .regular-font-size { font-size: var(--font-size-regular); }
  .small-font-size { font-size: var(--font-size-small); }
  .upper { text-transform: uppercase; }
  .primary-text{ color: var(--primary-color); }
  .bold-text { font-weight:bold; }
  .gray-text { color: var(--light-fg); }
  .red-text {color: var(--red)}
  .blue-text {color: var(--blue)}
  .multiline {
    overflow: scroll;
    max-height: var(--resp-area-height, 400px);
    color: var(--fg3);  
  }
  .method-fg.put { color: var(--orange); }
  .method-fg.post { color: var(--green); }
  .method-fg.get { color: var(--blue); }
  .method-fg.delete { color: var(--red); }
  .method-fg.options, 
  .method-fg.head, 
  .method-fg.patch { 
    color: var(--yellow); 
  }

  h1{ font-family:var(--font-regular); font-size:28px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h2{ font-family:var(--font-regular); font-size:24px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h3{ font-family:var(--font-regular); font-size:18px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h4{ font-family:var(--font-regular); font-size:16px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h5{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h6{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }

  h1,h2,h3,h4,h5,h5{
    margin-block-end: 0.2em;
  }
  p { margin-block-start: 0.5em; }
  a { color: var(--blue); cursor:pointer; }
  a.inactive-link { 
    color:var(--fg);
    text-decoration: none;
    cursor:text;
  }
  
  code,
  pre {
    margin: 0px;
    font-family: var(--font-mono);
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown,
  .m-markdown-small {
    display:block;
  }

  .m-markdown p,
  .m-markdown span {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 8px);
  }
  .m-markdown li {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 10px);
  }
  
  .m-markdown-small p,
  .m-markdown-small span,
  .m-markdown-small li {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 6px);
  }
  .m-markdown-small li {
    line-height: calc(var(--font-size-small) + 8px);
  }

  .m-markdown p:not(:first-child) {
    margin-block-start: 24px;
  }

  .m-markdown-small p:not(:first-child) {
    margin-block-start: 12px;
  }
  .m-markdown-small p:first-child {
    margin-block-start: 0;
  }

  .m-markdown p,
  .m-markdown-small p {
    margin-block-end: 0
  }

  .m-markdown code span {
    font-size:var(--font-size-mono);
  }

  .m-markdown-small code,
  .m-markdown code {
    padding: 1px 6px;
    border-radius: 2px;
    color: var(--inline-code-fg);
    background-color: var(--bg3);
    font-size: calc(var(--font-size-mono));
    line-height: 1.2;
  }

  .m-markdown-small code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown-small pre,
  .m-markdown pre {
    white-space: pre-wrap;
    overflow-x: auto;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid var(--code-border-color);
  }

  .m-markdown pre {
    padding: 12px;
    background-color: var(--code-bg);
    color:var(--code-fg);
  }

  .m-markdown-small pre {
    margin-top: 4px;
    padding: 2px 4px;
    background-color: var(--bg3);
    color: var(--fg2);
  }

  .m-markdown-small pre code,
  .m-markdown pre code {
    border:none;
    padding:0;
  }

  .m-markdown pre code {
    color: var(--code-fg);
    background-color: var(--code-bg);
    background-color: transparent;
  }

  .m-markdown-small pre code {
    color: var(--fg2);
    background-color: var(--bg3);
  }

  .m-markdown ul,
  .m-markdown ol {
    padding-inline-start: 30px;
  }

  .m-markdown-small ul,
  .m-markdown-small ol {
    padding-inline-start: 20px;
  }

  .m-markdown-small a,
  .m-markdown a {
    color:var(--blue);
  }

  .m-markdown-small img,
  .m-markdown img { 
    max-width: 100%; 
  }

  /* Markdown table */

  .m-markdown-small table,
  .m-markdown table {
    border-spacing: 0;
    margin: 10px 0;
    border-collapse: separate;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: calc(var(--font-size-small) + 1px);
    line-height: calc(var(--font-size-small) + 4px);
    max-width: 100%;
  }

  .m-markdown-small table {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 2px);
    margin: 8px 0;
  }

  .m-markdown-small td, 
  .m-markdown-small th,
  .m-markdown td, 
  .m-markdown th {
    vertical-align: top;
    border-top: 1px solid var(--border-color);
    line-height: calc(var(--font-size-small) + 4px);
  }

  .m-markdown-small tr:first-child th,
  .m-markdown tr:first-child th {
    border-top: 0 none;
  }

  .m-markdown th, 
  .m-markdown td { 
    padding: 10px 12px; 
  }

  .m-markdown-small th,
  .m-markdown-small td { 
    padding: 8px 8px; 
  }

  .m-markdown th,
  .m-markdown-small th {
    font-weight: 600;
    background-color: var(--bg2);
    vertical-align: middle;
  }

  .m-markdown-small table code {
    font-size: calc(var(--font-size-mono) - 2px);
  }

  .m-markdown table code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown blockquote,
  .m-markdown-small blockquote {
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 3px solid var(--border-color);
    padding: 6px 0 6px 6px;
  }
  .m-markdown hr{
    border: 1px solid var(--border-color);
  }
`);
;// CONCATENATED MODULE: ./src/styles/input-styles.js


/* eslint-disable max-len */
/* harmony default export */ const input_styles = (i`
/* Button */
.m-btn {
  border-radius: var(--border-radius);
  font-weight: 600;
  display: inline-block;
  padding: 6px 16px;
  font-size: var(--font-size-small);
  outline: 0;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border: 2px solid var(--primary-color);
  background-color:transparent;
  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.m-btn.primary {
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.thin-border { border-width: 1px; }
.m-btn.large { padding:8px 14px; }
.m-btn.small { padding:5px 12px; }
.m-btn.tiny { padding:5px 6px; }
.m-btn.circle { border-radius: 50%; }
.m-btn:hover { 
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.nav { border: 2px solid var(--nav-accent-color); }
.m-btn.nav:hover { 
  background-color: var(--nav-accent-color);
}
.m-btn:disabled{ 
  background-color: var(--bg3);
  color: var(--fg3);
  border-color: var(--fg3);
  cursor: not-allowed;
  opacity: 0.4;
}
.toolbar-btn{
  cursor: pointer;
  padding: 4px;
  margin:0 2px;
  font-size: var(--font-size-small);
  min-width: 50px;
  color: var(--primary-color-invert);
  border-radius: 2px;
  border: none;
  background-color: var(--primary-color);
}

input, textarea, select, button, pre {
  color:var(--fg);
  outline: none;
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}
button {
  font-family: var(--font-regular);
}

/* Form Inputs */
pre,
select,
textarea,
input[type="file"],
input[type="text"],
input[type="password"] {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: var(--font-size-small);
  transition: border .2s;
  padding: 6px 5px;
}

select {
  font-family: var(--font-regular);
  padding: 5px 30px 5px 5px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%3Cpath%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3A1%201%200%2000.3%204.7l5%205a1%201%200%20001.4%200l5-5a1%201%200%2010-1.4-1.4z%22%20fill%3D%22%23777777%22%2F%3E%3C%2Fsvg%3E"); 
  background-position: calc(100% - 5px) center;
  background-repeat: no-repeat;  
  background-size: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

select:hover {
  border-color: var(--primary-color);
}

textarea::placeholder,
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: var(--placeholder-color);
  opacity:1;
}


input[type="file"]{
  font-family: var(--font-regular);
  padding:2px;
  cursor:pointer;
  border: 1px solid var(--primary-color);
  min-height: calc(var(--font-size-small) + 18px);
}

input[type="file"]::-webkit-file-upload-button {
  font-family: var(--font-regular);
  font-size: var(--font-size-small);
  outline: none;
  cursor:pointer;
  padding: 3px 8px;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
  border-radius: var(--border-radius);;
  -webkit-appearance: none;
}

pre,
textarea {
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) var(--input-bg);
}

pre::-webkit-scrollbar,
textarea::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

pre::-webkit-scrollbar-track,
textarea::-webkit-scrollbar-track {
  background:var(--input-bg);
}
 
pre::-webkit-scrollbar-thumb,
textarea::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--border-color);
}

.link {
  font-size:var(--font-size-small);
  text-decoration: underline;
  color:var(--blue);
  font-family:var(--font-mono);
  margin-bottom:2px;
}

/* Toggle Body */
input[type="checkbox"] {
  appearance: none;
  display: inline-block;
  background-color: var(--light-bg);
  border: 1px solid var(--light-bg);
  border-radius: 9px;
  cursor: pointer;
  height: 18px;
  position: relative;
  transition: border .25s .15s, box-shadow .25s .3s, padding .25s;
  min-width: 36px;
  width: 36px;
  vertical-align: top;
}
/* Toggle Thumb */
input[type="checkbox"]:after {
  position: absolute;
  background-color: var(--bg);
  border: 1px solid var(--light-bg);
  border-radius: 8px;
  content: '';
  top: 0px;
  left: 0px;
  right: 16px;
  display: block;
  height: 16px;
  transition: border .25s .15s, left .25s .1s, right .15s .175s;
}

/* Toggle Body - Checked */
input[type="checkbox"]:checked {
  background-color: var(--green);
  border-color: var(--green);
}
/* Toggle Thumb - Checked*/
input[type="checkbox"]:checked:after {
  border: 1px solid var(--green);
  left: 16px;
  right: 1px;
  transition: border .25s, left .15s .25s, right .25s .175s;
}`);
;// CONCATENATED MODULE: ./src/styles/flex-styles.js

/* harmony default export */ const flex_styles = (i`
.row, .col{
  display:flex;
} 
.row {
  align-items:center;
  flex-direction: row;
}
.col {
  align-items:stretch;
  flex-direction: column;
}
`);
;// CONCATENATED MODULE: ./src/styles/table-styles.js

/* harmony default export */ const table_styles = (i`
.m-table {
  border-spacing: 0;  
  border-collapse: separate;
  border: 1px solid var(--light-border-color);
  border-radius: var(--border-radius);
  margin: 0;
  max-width: 100%;
  direction: ltr;
}
.m-table tr:first-child td,
.m-table tr:first-child th {
    border-top: 0 none;
}
.m-table td, 
.m-table th {
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 4px);
  padding: 4px 5px 4px;
  vertical-align: top;
}

.m-table.padded-12 td, 
.m-table.padded-12 th {
  padding: 12px;
}

.m-table td:not([align]), 
.m-table th:not([align]) {
  text-align: left;
}

.m-table th {
  color: var(--fg2);
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 18px);
  font-weight: 600;
  letter-spacing: normal;
  background-color: var(--bg2);
  vertical-align: bottom;
  border-bottom: 1px solid var(--light-border-color);
}

.m-table > tbody > tr > td,
.m-table > tr > td {
  border-top: 1px solid var(--light-border-color);
  text-overflow: ellipsis;
  overflow: hidden;
}
.table-title {
  font-size:var(--font-size-small);
  font-weight:bold;
  vertical-align: middle;
  margin: 12px 0 4px 0;
}
`);
;// CONCATENATED MODULE: ./src/styles/endpoint-styles.js

/* harmony default export */ const endpoint_styles = (i`
.only-large-screen { display:none; }
.endpoint-head .path{
  display: flex;
  font-family:var(--font-mono);
  font-size: var(--font-size-small);
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
}

.endpoint-head .descr {
  font-size: var(--font-size-small);
  color:var(--light-fg);
  font-weight:400;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
  display:none;
}

.m-endpoint.expanded{margin-bottom:16px; }
.m-endpoint > .endpoint-head{
  border-width:1px 1px 1px 5px;
  border-style:solid;
  border-color:transparent;
  border-top-color:var(--light-border-color);
  display:flex;
  padding:6px 16px;
  align-items: center;
  cursor: pointer;
}
.m-endpoint > .endpoint-head.put:hover,
.m-endpoint > .endpoint-head.put.expanded{
  border-color:var(--orange); 
  background-color:var(--light-orange); 
}
.m-endpoint > .endpoint-head.post:hover,
.m-endpoint > .endpoint-head.post.expanded {
  border-color:var(--green); 
  background-color:var(--light-green); 
}
.m-endpoint > .endpoint-head.get:hover,
.m-endpoint > .endpoint-head.get.expanded {
  border-color:var(--blue); 
  background-color:var(--light-blue); 
}
.m-endpoint > .endpoint-head.delete:hover,
.m-endpoint > .endpoint-head.delete.expanded {
  border-color:var(--red); 
  background-color:var(--light-red); 
}

.m-endpoint > .endpoint-head.head:hover,
.m-endpoint > .endpoint-head.head.expanded,
.m-endpoint > .endpoint-head.patch:hover,
.m-endpoint > .endpoint-head.patch.expanded,
.m-endpoint > .endpoint-head.options:hover,
.m-endpoint > .endpoint-head.options.expanded {
  border-color:var(--yellow); 
  background-color:var(--light-yellow); 
}

.m-endpoint > .endpoint-head.deprecated:hover,
.m-endpoint > .endpoint-head.deprecated.expanded {
  border-color:var(--border-color); 
  filter:opacity(0.6);
}

.m-endpoint .endpoint-body {
  flex-wrap:wrap;
  padding:16px 0px 0 0px;
  border-width:0px 1px 1px 5px;
  border-style:solid;
  box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.15);
}
.m-endpoint .endpoint-body.delete{ border-color:var(--red); }
.m-endpoint .endpoint-body.put{ border-color:var(--orange); }
.m-endpoint .endpoint-body.post{border-color:var(--green);}
.m-endpoint .endpoint-body.get{ border-color:var(--blue); }
.m-endpoint .endpoint-body.head,
.m-endpoint .endpoint-body.patch,
.m-endpoint .endpoint-body.options { 
  border-color:var(--yellow); 
}

.m-endpoint .endpoint-body.deprecated{ 
  border-color:var(--border-color);
  filter:opacity(0.6);
}

.endpoint-head .deprecated{
  color: var(--light-fg);
  filter:opacity(0.6);
}

.summary{
  padding:8px 8px;
}
.summary .title{
  font-size:calc(var(--font-size-regular) + 2px);
  margin-bottom: 6px;
  word-break: break-all;
}

.endpoint-head .method{
  padding:2px 5px;
  vertical-align: middle;
  font-size:var(--font-size-small);
  height: calc(var(--font-size-small) + 16px);
  line-height: calc(var(--font-size-small) + 8px);
  width: 60px;
  border-radius: 2px;
  display:inline-block;
  text-align: center;
  font-weight: bold;
  text-transform:uppercase;
  margin-right:5px;
}
.endpoint-head .method.delete{ border: 2px solid var(--red);}
.endpoint-head .method.put{ border: 2px solid var(--orange); }
.endpoint-head .method.post{ border: 2px solid var(--green); }
.endpoint-head .method.get{ border: 2px solid var(--blue); }
.endpoint-head .method.get.deprecated{ border: 2px solid var(--border-color); }
.endpoint-head .method.head,
.endpoint-head .method.patch,
.endpoint-head .method.options { 
  border: 2px solid var(--yellow); 
}

.req-resp-container {
  display: flex;
  margin-top:16px;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: column;
  border-top:1px solid var(--light-border-color);
}

.view-mode-request,
api-response.view-mode {
  flex:1; 
  min-height:100px;
  padding:16px 8px;
  overflow:hidden;
}
.view-mode-request {
  border-width:0 0 1px 0;
  border-style:dashed;
}

.head .view-mode-request,
.patch .view-mode-request,
.options .view-mode-request { 
  border-color:var(--yellow); 
}
.put .view-mode-request { 
  border-color:var(--orange); 
}
.post .view-mode-request { 
  border-color:var(--green); 
}
.get .view-mode-request { 
  border-color:var(--blue); 
}
.delete .view-mode-request { 
  border-color:var(--red); 
}

@media only screen and (min-width: 1024px) {
  .only-large-screen { display:block; }
  .endpoint-head .path{
    font-size: var(--font-size-regular);
  }
  .endpoint-head .descr{
    display: flex;
  }
  .endpoint-head .m-markdown-small,
  .descr .m-markdown-small{
    display:block;
  }
  .req-resp-container{
    flex-direction: var(--layout, row);
    flex-wrap: nowrap;
  }
  api-response.view-mode {
    padding:16px;
  }
  .view-mode-request.row-layout {
    border-width:0 1px 0 0;
    padding:16px;
  }
  .summary{
    padding:8px 16px;
  }
}
`);
;// CONCATENATED MODULE: ./src/styles/prism-styles.js

/* harmony default export */ const prism_styles = (i`
code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 2;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--light-fg)
}

.token.punctuation {
  color: var(--fg);
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color:var(--pink);
}

.token.function-name {
  color: var(--blue);
}

.token.boolean,
.token.number,
.token.function {
  color: var(--red);
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: var(--code-property-color);
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: var(--code-keyword-color);
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable { 
  color: var(--green);
}

.token.operator,
.token.entity,
.token.url {
  color: var(--code-operator-color);
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
`);
;// CONCATENATED MODULE: ./src/styles/tab-styles.js

/* harmony default export */ const tab_styles = (i`
.tab-panel {
  border: none;
}
.tab-buttons {
  height:30px;
  padding: 4px 4px 0 4px;
  border-bottom: 1px solid var(--light-border-color) ;
  align-items: stretch;
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: thin;
}
.tab-buttons::-webkit-scrollbar {
  height: 1px;
  background-color: var(--border-color);
}
.tab-btn {
  border: none;
  border-bottom: 3px solid transparent; 
  color: var(--light-fg);
  background-color: transparent;
  white-space: nowrap;
  cursor:pointer;
  outline:none;
  font-family:var(--font-regular); 
  font-size:var(--font-size-small);
  margin-right:16px;
  padding:1px;
}
.tab-btn.active {
  border-bottom: 3px solid var(--primary-color); 
  font-weight:bold;
  color:var(--primary-color);
}

.tab-btn:hover {
  color:var(--primary-color);
}
.tab-content {
  margin:-1px 0 0 0;
  position:relative;
  min-height: 50px;
}
`);
;// CONCATENATED MODULE: ./src/styles/nav-styles.js

/* harmony default export */ const nav_styles = (i`
.nav-bar-info:focus-visible,
.nav-bar-tag:focus-visible,
.nav-bar-path:focus-visible {
  outline: 1px solid;
  box-shadow: none;
  outline-offset: -4px;
}
.nav-bar-expand-all:focus-visible,
.nav-bar-collapse-all:focus-visible,
.nav-bar-tag-icon:focus-visible {
  outline: 1px solid;
  box-shadow: none;
  outline-offset: 2px;
}
.nav-bar {
  width:0;
  height:100%;
  overflow: hidden;
  color:var(--nav-text-color);
  background-color: var(--nav-bg-color);
  background-blend-mode: multiply;
  line-height: calc(var(--font-size-small) + 4px);
  display:none;
  position:relative;
  flex-direction:column;
  flex-wrap:nowrap;
  word-break:break-word;
}
::slotted([slot=nav-logo]){
  padding:16px 16px 0 16px;
}
.nav-scroll {
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;
  scrollbar-width: thin;
  scrollbar-color: var(--nav-hover-bg-color) transparent;
}

.nav-bar-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.nav-bar.read .nav-bar-tag-icon {
  display:none;
}
.nav-bar-paths-under-tag {
  overflow:hidden;
  transition: max-height .2s ease-out, visibility .3s;
}
.collapsed .nav-bar-paths-under-tag {
  visibility: hidden;
}

.nav-bar-expand-all {
  transform: rotate(90deg); 
  cursor:pointer; 
  margin-right:10px;
}
.nav-bar-collapse-all {
  transform: rotate(270deg); 
  cursor:pointer;
}
.nav-bar-expand-all:hover, .nav-bar-collapse-all:hover {
  color: var(--primary-color);
}

.nav-bar-tag-icon {
  color: var(--nav-text-color);
  font-size: 20px; 
}
.nav-bar-tag-icon:hover {
  color:var(--nav-hover-text-color);
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transform: rotate(-90deg);
  transition: transform 0.2s ease-out 0s;
}
.nav-bar.focused .nav-bar-tag-and-paths.expanded .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transition: transform 0.2s ease-out 0s;
}
.nav-scroll::-webkit-scrollbar {
  width: var(--scroll-bar-width, 8px);
}
.nav-scroll::-webkit-scrollbar-track {
  background:transparent;
}
.nav-scroll::-webkit-scrollbar-thumb {
  background-color: var(--nav-hover-bg-color);
}

.nav-bar-tag {
  font-size: var(--font-size-regular);
  color: var(--nav-accent-color);
  border-left:4px solid transparent;
  font-weight:bold;
  padding: 15px 15px 15px 10px;
  text-transform: capitalize;
}

.nav-bar-components,
.nav-bar-h1,
.nav-bar-h2,
.nav-bar-info,
.nav-bar-tag,
.nav-bar-path {
  display:flex;
  cursor: pointer;
  width: 100%;
  border: none;
  border-radius:4px; 
  color: var(--nav-text-color);
  background: transparent;
  border-left:4px solid transparent;
}

.nav-bar-h1,
.nav-bar-h2,
.nav-bar-path {
  font-size: calc(var(--font-size-small) + 1px);
  padding: var(--nav-item-padding);
}
.nav-bar-path.small-font {
  font-size: var(--font-size-small);
}

.nav-bar-info {
  font-size: var(--font-size-regular);
  padding: 16px 10px;
  font-weight:bold;
}
.nav-bar-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--font-size-small);
  color: var(--nav-text-color);
  padding: var(--nav-item-padding);
  font-weight:bold;
}
.nav-bar-section.operations {
  cursor:pointer;
}
.nav-bar-section.operations:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}

.nav-bar-section:first-child {
  display: none;
}
.nav-bar-h2 {margin-left:12px;}

.nav-bar-h1.left-bar.active,
.nav-bar-h2.left-bar.active,
.nav-bar-info.left-bar.active,
.nav-bar-tag.left-bar.active,
.nav-bar-path.left-bar.active,
.nav-bar-section.left-bar.operations.active {
  border-left:4px solid var(--nav-accent-color);
  color:var(--nav-hover-text-color);
}

.nav-bar-h1.colored-block.active,
.nav-bar-h2.colored-block.active,
.nav-bar-info.colored-block.active,
.nav-bar-tag.colored-block.active,
.nav-bar-path.colored-block.active,
.nav-bar-section.colored-block.operations.active {
  background-color: var(--nav-accent-color);
  color: var(--nav-accent-text-color);
  border-radius: 0;
}

.nav-bar-h1:hover,
.nav-bar-h2:hover,
.nav-bar-info:hover,
.nav-bar-tag:hover,
.nav-bar-path:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}
`);
;// CONCATENATED MODULE: ./src/styles/info-styles.js

/* harmony default export */ const info_styles = (i`
#api-info {
  font-size: calc(var(--font-size-regular) - 1px);
  margin-top: 8px;
  margin-left: -15px;
}

#api-info span:before {
  content: "|";
  display: inline-block;
  opacity: 0.5;
  width: 15px;
  text-align: center;
}
#api-info span:first-child:before {
  content: "";
  width: 0px;
}
`);
;// CONCATENATED MODULE: ./src/styles/custom-styles.js


/*
This file is reserved for any custom css that developers want to add to
customize their theme. Simply add your css to this file and yarn build.
*/

/* harmony default export */ const custom_styles = (i`

`);
;// CONCATENATED MODULE: ./src/utils/common-utils.js
/* For Delayed Event Handler Execution */
function debounce(fn, delay) {
  let timeoutID = null;
  return (...args) => {
    clearTimeout(timeoutID);
    const that = this;
    timeoutID = setTimeout(() => {
      fn.apply(that, args);
    }, delay);
  };
}
const invalidCharsRegEx = /[\s#:?&={}]/g; // used for generating valid html element ids by replacing the invalid chars with hyphen (-)
const rapidocApiKey = '_rapidoc_api_key';
function sleep(ms) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise(resolve => setTimeout(resolve, ms));
}
function copyToClipboard(data, e) {
  const btnEl = e.target;
  const textArea = document.createElement('textarea');
  textArea.value = data;
  textArea.style.position = 'fixed'; // avoid scrolling to bottom
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    btnEl.innerText = 'Copied';
    setTimeout(() => {
      btnEl.innerText = 'Copy';
    }, 5000);
  } catch (err) {
    console.error('Unable to copy', err); // eslint-disable-line no-console
  }

  document.body.removeChild(textArea);
}
function getBaseUrlFromUrl(url) {
  const pathArray = url.split('/');
  return `${pathArray[0]}//${pathArray[2]}`;
}
async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
function componentIsInSearch(searchVal, component) {
  return component.name.toLowerCase().includes(searchVal.toLowerCase());
}
function pathIsInSearch(searchVal, path, matchType = 'includes') {
  if (matchType === 'includes') {
    const stringToSearch = `${path.method} ${path.path} ${path.summary || path.description || ''} ${path.operationId || ''}`.toLowerCase();
    return stringToSearch.includes(searchVal.toLowerCase());
  }
  const regex = new RegExp(searchVal, 'i');
  return regex.test(`${path.method} ${path.path}`);
}
function schemaKeys(schemaProps, result = new Set()) {
  if (!schemaProps) {
    return result;
  }
  Object.keys(schemaProps).forEach(key => {
    var _schemaProps$key$item;
    result.add(key);
    if (schemaProps[key].properties) {
      schemaKeys(schemaProps[key].properties, result);
    } else if ((_schemaProps$key$item = schemaProps[key].items) !== null && _schemaProps$key$item !== void 0 && _schemaProps$key$item.properties) {
      var _schemaProps$key$item2;
      schemaKeys((_schemaProps$key$item2 = schemaProps[key].items) === null || _schemaProps$key$item2 === void 0 ? void 0 : _schemaProps$key$item2.properties, result);
    }
  });
  return result;
}
function advancedSearch(searchVal, allSpecTags, searchOptions = []) {
  if (!searchVal.trim() || searchOptions.length === 0) {
    return;
  }
  const pathsMatched = [];
  allSpecTags.forEach(tag => {
    tag.paths.forEach(path => {
      let stringToSearch = '';
      if (searchOptions.includes('search-api-path')) {
        stringToSearch = path.path;
      }
      if (searchOptions.includes('search-api-descr')) {
        stringToSearch = `${stringToSearch} ${path.summary || path.description || ''}`;
      }
      if (searchOptions.includes('search-api-params')) {
        var _path$parameters;
        stringToSearch = `${stringToSearch} ${((_path$parameters = path.parameters) === null || _path$parameters === void 0 ? void 0 : _path$parameters.map(v => v.name).join(' ')) || ''}`;
      }
      if (searchOptions.includes('search-api-request-body') && path.requestBody) {
        let schemaKeySet = new Set();
        for (const contentType in (_path$requestBody = path.requestBody) === null || _path$requestBody === void 0 ? void 0 : _path$requestBody.content) {
          var _path$requestBody, _path$requestBody$con;
          if ((_path$requestBody$con = path.requestBody.content[contentType].schema) !== null && _path$requestBody$con !== void 0 && _path$requestBody$con.properties) {
            var _path$requestBody$con2;
            schemaKeySet = schemaKeys((_path$requestBody$con2 = path.requestBody.content[contentType].schema) === null || _path$requestBody$con2 === void 0 ? void 0 : _path$requestBody$con2.properties);
          }
          stringToSearch = `${stringToSearch} ${[...schemaKeySet].join(' ')}`;
        }
      }
      if (searchOptions.includes('search-api-resp-descr')) {
        stringToSearch = `${stringToSearch} ${Object.values(path.responses).map(v => v.description || '').join(' ')}`;
      }
      if (stringToSearch.toLowerCase().includes(searchVal.trim().toLowerCase())) {
        pathsMatched.push({
          elementId: path.elementId,
          method: path.method,
          path: path.path,
          summary: path.summary || path.description || '',
          deprecated: path.deprecated
        });
      }
    });
  });
  return pathsMatched;
}

/*
export function prettyXml(sourceXmlString) {
  const xmlDoc = new DOMParser().parseFromString(sourceXmlString, 'text/xml');
  const xsltDoc = new DOMParser().parseFromString([
    // describes how we want to modify the XML - indent everything
    `<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
      <xsl:strip-space elements="*"/>
        <xsl:template match="para[content-style][not(text())]">
          <xsl:value-of select="normalize-space(.)"/>
        </xsl:template>
        <xsl:template match="node()|@*">
          <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>
        </xsl:template>
        <xsl:output indent="yes"/>
      </xsl:stylesheet>`,
  ].join('\n'), 'application/xml');
  const xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(xsltDoc);
  const resultDoc = xsltProcessor.transformToDocument(xmlDoc);
  return new XMLSerializer().serializeToString(resultDoc);
}
*/

function downloadResource(url, fileName) {
  if (url) {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.download = fileName;
    a.click();
    a.remove();
  }
}
function viewResource(url) {
  if (url) {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.target = '_blank';
    a.click();
    a.remove();
  }
}
;// CONCATENATED MODULE: ./node_modules/js-yaml/dist/js-yaml.mjs

/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


var isNothing_1      = isNothing;
var isObject_1       = isObject;
var toArray_1        = toArray;
var repeat_1         = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1         = extend;

var common = {
	isNothing: isNothing_1,
	isObject: isObject_1,
	toArray: toArray_1,
	repeat: repeat_1,
	isNegativeZero: isNegativeZero_1,
	extend: extend_1
};

// YAML error class. http://stackoverflow.com/questions/8458984


function formatError(exception, compact) {
  var where = '', message = exception.reason || '(unknown reason)';

  if (!exception.mark) return message;

  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }

  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';

  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }

  return message + ' ' + where;
}


function YAMLException$1(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;


YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


var exception = YAMLException$1;

// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;

  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  };
}


function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}


function makeSnippet(mark, options) {
  options = Object.create(options || null);

  if (!mark.buffer) return null;

  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent      !== 'number') options.indent      = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter  !== 'number') options.linesAfter  = 2;

  var re = /\r?\n|\r|\0/g;
  var lineStarts = [ 0 ];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;

  var result = '', i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);

  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result;
  }

  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';

  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n';
  }

  return result.replace(/\n$/, '');
}


var snippet = makeSnippet;

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'multi',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'representName',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type$1(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.options       = options; // keep original options in case user wants to extend this type later
  this.tag           = tag;
  this.kind          = options['kind']          || null;
  this.resolve       = options['resolve']       || function () { return true; };
  this.construct     = options['construct']     || function (data) { return data; };
  this.instanceOf    = options['instanceOf']    || null;
  this.predicate     = options['predicate']     || null;
  this.represent     = options['represent']     || null;
  this.representName = options['representName'] || null;
  this.defaultStyle  = options['defaultStyle']  || null;
  this.multi         = options['multi']         || false;
  this.styleAliases  = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

var type = Type$1;

/*eslint-disable max-len*/





function compileList(schema, name) {
  var result = [];

  schema[name].forEach(function (currentType) {
    var newIndex = result.length;

    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag &&
          previousType.kind === currentType.kind &&
          previousType.multi === currentType.multi) {

        newIndex = previousIndex;
      }
    });

    result[newIndex] = currentType;
  });

  return result;
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;

  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema$1(definition) {
  return this.extend(definition);
}


Schema$1.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];

  if (definition instanceof type) {
    // Schema.extend(type)
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    // Schema.extend([ type1, type2, ... ])
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);

  } else {
    throw new exception('Schema.extend argument should be a Type, [ Type ], ' +
      'or a schema definition ({ implicit: [...], explicit: [...] })');
  }

  implicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    if (type$1.loadKind && type$1.loadKind !== 'scalar') {
      throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }

    if (type$1.multi) {
      throw new exception('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });

  explicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });

  var result = Object.create(Schema$1.prototype);

  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);

  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap  = compileMap(result.compiledImplicit, result.compiledExplicit);

  return result;
};


var schema = Schema$1;

var str = new type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

var seq = new type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

var map = new type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

var _null = new type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; },
    empty:     function () { return '';     }
  },
  defaultStyle: 'lowercase'
});

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

var bool = new type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'o') {
      // base 8
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  // base 10 (except 0)

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  return true;
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch;

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

var js_yaml_int = new type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

var js_yaml_float = new type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    js_yaml_int,
    js_yaml_float
  ]
});

var core = json;

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

var timestamp = new type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

var merge = new type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/*eslint-disable no-bitwise*/





// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  return new Uint8Array(result);
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(obj) {
  return Object.prototype.toString.call(obj) ===  '[object Uint8Array]';
}

var binary = new type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString$2.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

var omap = new type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

var _toString$1 = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString$1.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

var pairs = new type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

var set = new type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});

/*eslint-disable max-len,no-use-before-define*/







var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var js_yaml_i = 0; js_yaml_i < 256; js_yaml_i++) {
  simpleEscapeCheck[js_yaml_i] = simpleEscapeSequence(js_yaml_i) ? 1 : 0;
  simpleEscapeMap[js_yaml_i] = simpleEscapeSequence(js_yaml_i);
}


function State$1(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || _default;
  this.onWarning = options['onWarning'] || null;
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy    = options['legacy']    || false;

  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line:     state.line,
    column:   state.position - state.lineStart
  };

  mark.snippet = snippet(mark);

  return new exception(message, mark);
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {

  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty$1.call(overridableKeys, keyNode) &&
        _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    // used for this specific key only because Object.defineProperty is slow
    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _lineStart,
      _pos,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = Object.create(null),
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; // Save the current line.
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _keyLine,
      _keyLineStart,
      _keyPos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = Object.create(null),
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      typeList,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      // looking for multi type
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];

      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State$1(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load$1(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception('expected a single document in the stream, but found more');
}


var loadAll_1 = loadAll$1;
var load_1    = load$1;

var loader = {
	loadAll: loadAll_1,
	load: load_1
};

/*eslint-disable no-use-before-define*/





var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}


var QUOTING_TYPE_SINGLE = 1,
    QUOTING_TYPE_DOUBLE = 2;

function State(options) {
  this.schema        = options['schema'] || _default;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;
  this.quotingType   = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes   = options['forceQuotes'] || false;
  this.replacer      = typeof options['replacer'] === 'function' ? options['replacer'] : null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    // - b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    inblock ? // c = flow-in
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    // ns-plain-char
    && c !== CHAR_SHARP // false on '#'
    && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) // change to true on '[^ ]#'
    || (prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
  // just not whitespace or colon, it will be checked to be plain character later
  return !isWhitespace(c) && c !== CHAR_COLON;
}

// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? ('"' + string + '"') : ("'" + string + "'");
      }
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth,
      testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {

      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;

  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];

    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level, value, false, false) ||
        (typeof value === 'undefined' &&
         writeNode(state, level, null, false, false))) {

      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level + 1, value, true, true, false, true) ||
        (typeof value === 'undefined' &&
         writeNode(state, level + 1, null, true, true, false, true))) {

      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new exception('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      // Need to encode all characters except those allowed by the spec:
      //
      // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
      // [36] ns-hex-digit    ::=  ns-dec-digit
      //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
      // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
      // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
      // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
      //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
      //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
      //
      // Also need to encode '!' because it has special meaning (end of tag prefix).
      //
      tagStr = encodeURI(
        state.tag[0] === '!' ? state.tag.slice(1) : state.tag
      ).replace(/!/g, '%21');

      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }

      state.dump = tagStr + ' ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump$1(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  var value = input;

  if (state.replacer) {
    value = state.replacer.call({ '': value }, '', value);
  }

  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';

  return '';
}

var dump_1 = dump$1;

var dumper = {
	dump: dump_1
};

function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' +
      'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}


var Type                = type;
var Schema              = schema;
var FAILSAFE_SCHEMA     = failsafe;
var JSON_SCHEMA         = json;
var CORE_SCHEMA         = core;
var DEFAULT_SCHEMA      = _default;
var load                = loader.load;
var loadAll             = loader.loadAll;
var dump                = dumper.dump;
var YAMLException       = exception;

// Re-export all types in case user wants to create custom schema
var types = {
  binary:    binary,
  float:     js_yaml_float,
  map:       map,
  null:      _null,
  pairs:     pairs,
  set:       set,
  timestamp: timestamp,
  bool:      bool,
  int:       js_yaml_int,
  merge:     merge,
  omap:      omap,
  seq:       seq,
  str:       str
};

// Removed functions from JS-YAML 3.0.x
var safeLoad            = renamed('safeLoad', 'load');
var safeLoadAll         = renamed('safeLoadAll', 'loadAll');
var safeDump            = renamed('safeDump', 'dump');

var jsYaml = {
	Type: Type,
	Schema: Schema,
	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
	JSON_SCHEMA: JSON_SCHEMA,
	CORE_SCHEMA: CORE_SCHEMA,
	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
	load: load,
	loadAll: loadAll,
	dump: dump,
	YAMLException: YAMLException,
	types: types,
	safeLoad: safeLoad,
	safeLoadAll: safeLoadAll,
	safeDump: safeDump
};

/* harmony default export */ const js_yaml = ((/* unused pure expression or super */ null && (jsYaml)));


;// CONCATENATED MODULE: ./src/utils/spec-parser.js
/* eslint-disable no-use-before-define */
// import OpenApiParser from '@apitools/openapi-parser';



async function ProcessSpec(specUrl, generateMissingTags = false, sortTags = false, sortEndpointsBy = '', attrApiKey = '', attrApiKeyLocation = '', attrApiKeyValue = '', serverUrl = '') {
  var _jsonParsedSpec$info, _jsonParsedSpec$compo;
  let jsonParsedSpec;
  try {
    var _specMeta$resolvedSpe, _specMeta$resolvedSpe2;
    this.requestUpdate(); // important to show the initial loader
    let specMeta;
    if (typeof specUrl === 'string') {
      const resp = await fetch(specUrl);
      try {
        var _resp$headers$get;
        if (specUrl.endsWith('yaml') || specUrl.endsWith('yml') || (_resp$headers$get = resp.headers.get('content-type')) !== null && _resp$headers$get !== void 0 && _resp$headers$get.includes('yaml')) {
          const yaml = await resp.text();
          const json = load(yaml);
          specMeta = {
            resolvedSpec: json,
            spec: json
          };
        } else {
          const json = await resp.json();
          specMeta = {
            resolvedSpec: json,
            spec: json
          };
        }
      } catch (error) {
        specMeta = {};
      }
      // specMeta = await OpenApiParser.resolve({ url: specUrl, allowMetaPatches: false }); // Swagger(specUrl);
    } else {
      specMeta = {
        spec: specUrl
      };
      // specMeta = await OpenApiParser.resolve({ spec: specUrl, allowMetaPatches: false }); // Swagger({ spec: specUrl });
    }

    await sleep(0); // important to show the initial loader (allows for rendering updates)

    // If  JSON Schema Viewer
    if ((_specMeta$resolvedSpe = specMeta.resolvedSpec) !== null && _specMeta$resolvedSpe !== void 0 && _specMeta$resolvedSpe.jsonSchemaViewer && (_specMeta$resolvedSpe2 = specMeta.resolvedSpec) !== null && _specMeta$resolvedSpe2 !== void 0 && _specMeta$resolvedSpe2.schemaAndExamples) {
      this.dispatchEvent(new CustomEvent('before-render', {
        detail: {
          spec: specMeta.resolvedSpec
        }
      }));
      const schemaAndExamples = Object.entries(specMeta.resolvedSpec.schemaAndExamples).map(v => ({
        show: true,
        expanded: true,
        selectedExample: null,
        name: v[0],
        elementId: v[0].replace(invalidCharsRegEx, '-'),
        ...v[1]
      }));
      const parsedSpec = {
        specLoadError: false,
        isSpecLoading: false,
        info: specMeta.resolvedSpec.info,
        schemaAndExamples
      };
      return parsedSpec;
    }
    if (specMeta.spec && (specMeta.spec.components || specMeta.spec.info || specMeta.spec.servers || specMeta.spec.tags || specMeta.spec.paths)) {
      jsonParsedSpec = specMeta.spec;
      this.dispatchEvent(new CustomEvent('before-render', {
        detail: {
          spec: jsonParsedSpec
        }
      }));
    } else {
      var _specMeta$response, _specMeta$response2, _specMeta$response3, _specMeta$response4;
      console.info('RapiDoc: %c There was an issue while parsing the spec %o ', 'color:orangered', specMeta); // eslint-disable-line no-console
      return {
        specLoadError: true,
        isSpecLoading: false,
        info: {
          title: 'Error loading the spec',
          description: (_specMeta$response = specMeta.response) !== null && _specMeta$response !== void 0 && _specMeta$response.url ? `${(_specMeta$response2 = specMeta.response) === null || _specMeta$response2 === void 0 ? void 0 : _specMeta$response2.url} ┃ ${(_specMeta$response3 = specMeta.response) === null || _specMeta$response3 === void 0 ? void 0 : _specMeta$response3.status}  ${(_specMeta$response4 = specMeta.response) === null || _specMeta$response4 === void 0 ? void 0 : _specMeta$response4.statusText}` : 'Unable to load the Spec',
          version: ' '
        },
        tags: []
      };
    }
  } catch (err) {
    console.info('RapiDoc: %c There was an issue while parsing the spec %o ', 'color:orangered', err); // eslint-disable-line no-console
  }

  // const pathGroups = groupByPaths(jsonParsedSpec);

  // Tags with Paths and WebHooks
  const tags = groupByTags(jsonParsedSpec, sortEndpointsBy, generateMissingTags, sortTags);

  // Components
  const components = getComponents(jsonParsedSpec);

  // Info Description Headers
  const infoDescriptionHeaders = (_jsonParsedSpec$info = jsonParsedSpec.info) !== null && _jsonParsedSpec$info !== void 0 && _jsonParsedSpec$info.description ? getHeadersFromMarkdown(jsonParsedSpec.info.description) : [];

  // Security Scheme
  const securitySchemes = [];
  if ((_jsonParsedSpec$compo = jsonParsedSpec.components) !== null && _jsonParsedSpec$compo !== void 0 && _jsonParsedSpec$compo.securitySchemes) {
    const securitySchemeSet = new Set();
    Object.entries(jsonParsedSpec.components.securitySchemes).forEach(kv => {
      if (!securitySchemeSet.has(kv[0])) {
        securitySchemeSet.add(kv[0]);
        const securityObj = {
          securitySchemeId: kv[0],
          ...kv[1]
        };
        securityObj.value = '';
        securityObj.finalKeyValue = '';
        if (kv[1].type === 'apiKey' || kv[1].type === 'http') {
          securityObj.in = kv[1].in || 'header';
          securityObj.name = kv[1].name || 'Authorization';
          securityObj.user = '';
          securityObj.password = '';
        } else if (kv[1].type === 'oauth2') {
          securityObj.in = 'header';
          securityObj.name = 'Authorization';
          securityObj.clientId = '';
          securityObj.clientSecret = '';
        }
        securitySchemes.push(securityObj);
      }
    });
  }
  if (attrApiKey && attrApiKeyLocation && attrApiKeyValue) {
    securitySchemes.push({
      securitySchemeId: rapidocApiKey,
      description: 'api-key provided in rapidoc element attributes',
      type: 'apiKey',
      oAuthFlow: '',
      name: attrApiKey,
      in: attrApiKeyLocation,
      value: attrApiKeyValue,
      finalKeyValue: attrApiKeyValue
    });
  }

  // Updated Security Type Display Text based on Type
  securitySchemes.forEach(v => {
    if (v.type === 'http') {
      v.typeDisplay = v.scheme === 'basic' ? 'HTTP Basic' : 'HTTP Bearer';
    } else if (v.type === 'apiKey') {
      v.typeDisplay = `API Key (${v.name})`;
    } else if (v.type === 'oauth2') {
      v.typeDisplay = `OAuth (${v.securitySchemeId})`;
    } else {
      v.typeDisplay = v.type || 'None';
    }
  });

  // Servers
  let servers = [];
  if (jsonParsedSpec.servers && Array.isArray(jsonParsedSpec.servers)) {
    jsonParsedSpec.servers.forEach(v => {
      let computedUrl = v.url.trim();
      if (!(computedUrl.startsWith('http') || computedUrl.startsWith('//') || computedUrl.startsWith('{'))) {
        if (window.location.origin.startsWith('http')) {
          v.url = window.location.origin + v.url;
          computedUrl = v.url;
        }
      }
      // Apply server-variables to generate final computed-url
      if (v.variables) {
        Object.entries(v.variables).forEach(kv => {
          const regex = new RegExp(`{${kv[0]}}`, 'g');
          computedUrl = computedUrl.replace(regex, kv[1].default || '');
          kv[1].value = kv[1].default || '';
        });
      }
      v.computedUrl = computedUrl;
    });
    if (serverUrl) {
      jsonParsedSpec.servers.push({
        url: serverUrl,
        computedUrl: serverUrl
      });
    }
  } else if (serverUrl) {
    jsonParsedSpec.servers = [{
      url: serverUrl,
      computedUrl: serverUrl
    }];
  } else if (window.location.origin.startsWith('http')) {
    jsonParsedSpec.servers = [{
      url: window.location.origin,
      computedUrl: window.location.origin
    }];
  } else {
    jsonParsedSpec.servers = [{
      url: 'http://localhost',
      computedUrl: 'http://localhost'
    }];
  }
  servers = jsonParsedSpec.servers;
  const parsedSpec = {
    specLoadError: false,
    isSpecLoading: false,
    info: jsonParsedSpec.info,
    infoDescriptionHeaders,
    tags,
    components,
    externalDocs: jsonParsedSpec.externalDocs,
    securitySchemes,
    servers
  };
  return parsedSpec;
}
function getHeadersFromMarkdown(markdownContent) {
  const tokens = marked.lexer(markdownContent);
  const headers = tokens.filter(v => v.type === 'heading' && v.depth <= 2);
  return headers || [];
}
function getComponents(openApiSpec) {
  if (!openApiSpec.components) {
    return [];
  }
  const components = [];
  for (const component in openApiSpec.components) {
    const subComponents = [];
    for (const sComponent in openApiSpec.components[component]) {
      const scmp = {
        show: true,
        id: `${component.toLowerCase()}-${sComponent.toLowerCase()}`.replace(invalidCharsRegEx, '-'),
        name: sComponent,
        component: openApiSpec.components[component][sComponent]
      };
      subComponents.push(scmp);
    }
    let cmpDescription = component;
    let cmpName = component;
    switch (component) {
      case 'schemas':
        cmpName = 'Schemas';
        cmpDescription = 'Schemas allows the definition of input and output data types. These types can be objects, but also primitives and arrays.';
        break;
      case 'responses':
        cmpName = 'Responses';
        cmpDescription = 'Describes responses from an API Operation, including design-time, static links to operations based on the response.';
        break;
      case 'parameters':
        cmpName = 'Parameters';
        cmpDescription = 'Describes operation parameters. A unique parameter is defined by a combination of a name and location.';
        break;
      case 'examples':
        cmpName = 'Examples';
        cmpDescription = 'List of Examples for operations, can be requests, responses and objects examples.';
        break;
      case 'requestBodies':
        cmpName = 'Request Bodies';
        cmpDescription = 'Describes common request bodies that are used across the API operations.';
        break;
      case 'headers':
        cmpName = 'Headers';
        cmpDescription = 'Headers follows the structure of the Parameters but they are explicitly in "header"';
        break;
      case 'securitySchemes':
        cmpName = 'Security Schemes';
        // eslint-disable-next-line max-len
        cmpDescription = 'Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2\'s common flows(implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.';
        break;
      case 'links':
        cmpName = 'Links';
        cmpDescription = 'Links represent a possible design-time link for a response. The presence of a link does not guarantee the caller\'s ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.';
        break;
      case 'callbacks':
        cmpName = 'Callbacks';
        // eslint-disable-next-line max-len
        cmpDescription = 'A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.';
        break;
      default:
        cmpName = component;
        cmpDescription = component;
        break;
    }
    const cmp = {
      show: true,
      name: cmpName,
      description: cmpDescription,
      subComponents
    };
    components.push(cmp);
  }
  return components || [];
}
function groupByTags(openApiSpec, sortEndpointsBy, generateMissingTags = false, sortTags = false) {
  const supportedMethods = ['get', 'put', 'post', 'delete', 'patch', 'head', 'options']; // this is also used for ordering endpoints by methods
  const tags = openApiSpec.tags && Array.isArray(openApiSpec.tags) ? openApiSpec.tags.map(v => ({
    show: true,
    elementId: `tag--${v.name.replace(invalidCharsRegEx, '-')}`,
    name: v.name,
    description: v.description || '',
    headers: v.description ? getHeadersFromMarkdown(v.description) : [],
    paths: [],
    expanded: v['x-tag-expanded'] !== false
  })) : [];
  const pathsAndWebhooks = openApiSpec.paths || {};
  if (openApiSpec.webhooks) {
    for (const [key, value] of Object.entries(openApiSpec.webhooks)) {
      value._type = 'webhook'; // eslint-disable-line no-underscore-dangle
      pathsAndWebhooks[key] = value;
    }
  }
  // For each path find the tag and push it into the corresponding tag
  for (const pathOrHookName in pathsAndWebhooks) {
    const commonParams = pathsAndWebhooks[pathOrHookName].parameters;
    const commonPathProp = {
      servers: pathsAndWebhooks[pathOrHookName].servers || [],
      parameters: pathsAndWebhooks[pathOrHookName].parameters || []
    };
    const isWebhook = pathsAndWebhooks[pathOrHookName]._type === 'webhook'; // eslint-disable-line no-underscore-dangle
    supportedMethods.forEach(methodName => {
      if (pathsAndWebhooks[pathOrHookName][methodName]) {
        const pathOrHookObj = openApiSpec.paths[pathOrHookName][methodName];
        // If path.methods are tagged, else generate it from path
        const pathTags = pathOrHookObj.tags || [];
        if (pathTags.length === 0) {
          if (generateMissingTags) {
            const pathOrHookNameKey = pathOrHookName.replace(/^\/+|\/+$/g, '');
            const firstWordEndIndex = pathOrHookNameKey.indexOf('/');
            if (firstWordEndIndex === -1) {
              pathTags.push(pathOrHookNameKey);
            } else {
              // firstWordEndIndex -= 1;
              pathTags.push(pathOrHookNameKey.substr(0, firstWordEndIndex));
            }
          } else {
            pathTags.push('General ⦂');
          }
        }
        pathTags.forEach(tag => {
          let tagObj;
          let specTagsItem;
          if (openApiSpec.tags) {
            specTagsItem = openApiSpec.tags.find(v => v.name.toLowerCase() === tag.toLowerCase());
          }
          tagObj = tags.find(v => v.name === tag);
          if (!tagObj) {
            var _specTagsItem, _specTagsItem2;
            tagObj = {
              show: true,
              elementId: `tag--${tag.replace(invalidCharsRegEx, '-')}`,
              name: tag,
              description: ((_specTagsItem = specTagsItem) === null || _specTagsItem === void 0 ? void 0 : _specTagsItem.description) || '',
              headers: (_specTagsItem2 = specTagsItem) !== null && _specTagsItem2 !== void 0 && _specTagsItem2.description ? getHeadersFromMarkdown(specTagsItem.description) : [],
              paths: [],
              expanded: specTagsItem ? specTagsItem['x-tag-expanded'] !== false : true
            };
            tags.push(tagObj);
          }

          // Generate a short summary which is broken
          let shortSummary = (pathOrHookObj.summary || pathOrHookObj.description || `${methodName.toUpperCase()} ${pathOrHookName}`).trim();
          if (shortSummary.length > 100) {
            [shortSummary] = shortSummary.split(/[.|!|?]\s|[\r?\n]/); // take the first line (period or carriage return)
          }
          // Merge Common Parameters with This methods parameters
          let finalParameters = [];
          if (commonParams) {
            if (pathOrHookObj.parameters) {
              finalParameters = commonParams.filter(commonParam => {
                if (!pathOrHookObj.parameters.some(param => commonParam.name === param.name && commonParam.in === param.in)) {
                  return commonParam;
                }
              }).concat(pathOrHookObj.parameters);
            } else {
              finalParameters = commonParams.slice(0);
            }
          } else {
            finalParameters = pathOrHookObj.parameters ? pathOrHookObj.parameters.slice(0) : [];
          }

          // Filter callbacks to contain only objects.
          if (pathOrHookObj.callbacks) {
            for (const [callbackName, callbackConfig] of Object.entries(pathOrHookObj.callbacks)) {
              const filteredCallbacks = Object.entries(callbackConfig).filter(entry => typeof entry[1] === 'object') || [];
              pathOrHookObj.callbacks[callbackName] = Object.fromEntries(filteredCallbacks);
            }
          }

          // Update Responses
          tagObj.paths.push({
            show: true,
            expanded: false,
            isWebhook,
            expandedAtLeastOnce: false,
            summary: pathOrHookObj.summary || '',
            description: pathOrHookObj.description || '',
            externalDocs: pathOrHookObj.externalDocs,
            shortSummary,
            method: methodName,
            path: pathOrHookName,
            operationId: pathOrHookObj.operationId,
            elementId: `${methodName}-${pathOrHookName.replace(invalidCharsRegEx, '-')}`,
            servers: pathOrHookObj.servers ? commonPathProp.servers.concat(pathOrHookObj.servers) : commonPathProp.servers,
            parameters: finalParameters,
            requestBody: pathOrHookObj.requestBody,
            responses: pathOrHookObj.responses,
            callbacks: pathOrHookObj.callbacks,
            deprecated: pathOrHookObj.deprecated,
            security: pathOrHookObj.security,
            // commonSummary: commonPathProp.summary,
            // commonDescription: commonPathProp.description,
            xBadges: pathOrHookObj['x-badges'] || undefined,
            xCodeSamples: pathOrHookObj['x-codeSamples'] || pathOrHookObj['x-code-samples'] || ''
          });
        }); // End of tag path create
      }
    }); // End of Methods
  }

  const tagsWithSortedPaths = tags.filter(tag => tag.paths && tag.paths.length > 0);
  tagsWithSortedPaths.forEach(tag => {
    if (sortEndpointsBy === 'method') {
      tag.paths.sort((a, b) => supportedMethods.indexOf(a.method).toString().localeCompare(supportedMethods.indexOf(b.method)));
    } else if (sortEndpointsBy === 'summary') {
      tag.paths.sort((a, b) => a.shortSummary.localeCompare(b.shortSummary));
    } else if (sortEndpointsBy === 'path') {
      tag.paths.sort((a, b) => a.path.localeCompare(b.path));
    } else if (sortEndpointsBy === 'none') {
      // don't sort if sortEndpointsBy is 'none'
    }
    tag.firstPathId = tag.paths[0].elementId;
  });
  return sortTags ? tagsWithSortedPaths.sort((a, b) => a.name.localeCompare(b.name)) : tagsWithSortedPaths;
}
;// CONCATENATED MODULE: ./node_modules/lit-html/directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const directive_t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},directive_e=t=>(...e)=>({_$litDirective$:t,values:e});class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directives/unsafe-html.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class unsafe_html_e extends directive_i{constructor(i){if(super(i),this.et=A,i.type!==directive_t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===A||null==r)return this.ft=void 0,this.et=r;if(r===T)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.ft;this.et=r;const s=[r];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const unsafe_html_o=directive_e(unsafe_html_e);
//# sourceMappingURL=unsafe-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/unsafe-html.js

//# sourceMappingURL=unsafe-html.js.map

;// CONCATENATED MODULE: ./src/templates/security-scheme-template.js
/* provided dependency */ var Buffer = __webpack_require__(764)["lW"];
/* eslint-disable arrow-body-style */

 // eslint-disable-line import/extensions

const codeVerifier = '731DB1C3F7EA533B85E29492D26AA-1234567890-1234567890';
const codeChallenge = '4FatVDBJKPAo4JgLLaaQFMUcQPn5CrPRvLlaob9PTYc'; // Base64 encoded SHA-256

const localStorageKey = 'rapidoc';
function applyApiKey(securitySchemeId, username = '', password = '', providedApikeyVal = '') {
  var _this$resolvedSpec$se, _securityObj$scheme;
  const securityObj = (_this$resolvedSpec$se = this.resolvedSpec.securitySchemes) === null || _this$resolvedSpec$se === void 0 ? void 0 : _this$resolvedSpec$se.find(v => v.securitySchemeId === securitySchemeId);
  if (!securityObj) {
    return false;
  }
  let finalApiKeyValue = '';
  if (((_securityObj$scheme = securityObj.scheme) === null || _securityObj$scheme === void 0 ? void 0 : _securityObj$scheme.toLowerCase()) === 'basic') {
    if (username) {
      finalApiKeyValue = `Basic ${Buffer.from(`${username}:${password}`, 'utf8').toString('base64')}`;
    }
  } else if (providedApikeyVal) {
    var _securityObj$scheme2;
    securityObj.value = providedApikeyVal;
    finalApiKeyValue = `${((_securityObj$scheme2 = securityObj.scheme) === null || _securityObj$scheme2 === void 0 ? void 0 : _securityObj$scheme2.toLowerCase()) === 'bearer' ? 'Bearer ' : ''}${providedApikeyVal}`;
  }
  if (finalApiKeyValue) {
    securityObj.finalKeyValue = finalApiKeyValue;
    this.requestUpdate();
    return true;
  }
  return false;
}
function onClearAllApiKeys() {
  var _this$resolvedSpec$se2;
  (_this$resolvedSpec$se2 = this.resolvedSpec.securitySchemes) === null || _this$resolvedSpec$se2 === void 0 ? void 0 : _this$resolvedSpec$se2.forEach(v => {
    v.user = '';
    v.password = '';
    v.value = '';
    v.finalKeyValue = '';
  });
  this.requestUpdate();
}
function getPersistedApiKeys() {
  return JSON.parse(localStorage.getItem(localStorageKey)) || {};
}
function setPersistedApiKeys(obj) {
  localStorage.setItem(localStorageKey, JSON.stringify(obj));
}
function recoverPersistedApiKeys() {
  const rapidocLs = getPersistedApiKeys.call(this);
  Object.values(rapidocLs).forEach(p => {
    applyApiKey.call(this, p.securitySchemeId, p.username, p.password, p.value);
  });
}
function onApiKeyChange(securitySchemeId) {
  let apiKeyValue = '';
  const securityObj = this.resolvedSpec.securitySchemes.find(v => v.securitySchemeId === securitySchemeId);
  if (securityObj) {
    const trEl = this.shadowRoot.getElementById(`security-scheme-${securitySchemeId}`);
    if (trEl) {
      if (securityObj.type && securityObj.scheme && securityObj.type === 'http' && securityObj.scheme.toLowerCase() === 'basic') {
        const userVal = trEl.querySelector('.api-key-user').value.trim();
        const passwordVal = trEl.querySelector('.api-key-password').value.trim();
        applyApiKey.call(this, securitySchemeId, userVal, passwordVal);
      } else {
        apiKeyValue = trEl.querySelector('.api-key-input').value.trim();
        applyApiKey.call(this, securitySchemeId, '', '', apiKeyValue);
      }
      if (this.persistAuth === 'true') {
        const rapidocLs = getPersistedApiKeys.call(this);
        rapidocLs[securitySchemeId] = securityObj;
        setPersistedApiKeys.call(this, rapidocLs);
      }
    }
  }
}

// Updates the OAuth Access Token (API key), so it reflects in UI and gets used in TRY calls
function updateOAuthKey(securitySchemeId, accessToken, tokenType = 'Bearer') {
  const securityObj = this.resolvedSpec.securitySchemes.find(v => v.securitySchemeId === securitySchemeId);
  securityObj.finalKeyValue = `${tokenType.toLowerCase() === 'bearer' ? 'Bearer' : tokenType.toLowerCase() === 'mac' ? 'MAC' : tokenType} ${accessToken}`;
  this.requestUpdate();
}

/* eslint-disable no-console */
// Gets Access-Token in exchange of Authorization Code
async function fetchAccessToken(tokenUrl, clientId, clientSecret, redirectUrl, grantType, authCode, securitySchemeId, authFlowDivEl, sendClientSecretIn = 'header', scopes = null, username = null, password = null) {
  const respDisplayEl = authFlowDivEl ? authFlowDivEl.querySelector('.oauth-resp-display') : undefined;
  const urlFormParams = new URLSearchParams();
  const headers = new Headers();
  urlFormParams.append('grant_type', grantType);
  if (grantType === 'authorization_code') {
    urlFormParams.append('client_id', clientId);
    urlFormParams.append('client_secret', clientSecret);
  }
  if (grantType !== 'client_credentials' && grantType !== 'password') {
    urlFormParams.append('redirect_uri', redirectUrl);
  }
  if (authCode) {
    urlFormParams.append('code', authCode);
    urlFormParams.append('code_verifier', codeVerifier); // for PKCE
  }

  if (sendClientSecretIn === 'header') {
    headers.set('Authorization', `Basic ${Buffer.from(`${clientId}:${clientSecret}`, 'utf8').toString('base64')}`);
  } else if (grantType !== 'authorization_code') {
    urlFormParams.append('client_id', clientId);
    urlFormParams.append('client_secret', clientSecret);
  }
  if (grantType === 'password') {
    urlFormParams.append('username', username);
    urlFormParams.append('password', password);
  }
  if (scopes) {
    urlFormParams.append('scope', scopes);
  }
  try {
    const resp = await fetch(tokenUrl, {
      method: 'POST',
      headers,
      body: urlFormParams
    });
    const tokenResp = await resp.json();
    if (resp.ok) {
      if (tokenResp.token_type && tokenResp.access_token) {
        updateOAuthKey.call(this, securitySchemeId, tokenResp.access_token, tokenResp.token_type);
        if (respDisplayEl) {
          respDisplayEl.innerHTML = '<span style="color:var(--green)">Access Token Received</span>';
        }
        return true;
      }
    } else {
      if (respDisplayEl) {
        respDisplayEl.innerHTML = `<span style="color:var(--red)">${tokenResp.error_description || tokenResp.error_description || 'Unable to get access token'}</span>`;
      }
      return false;
    }
  } catch (err) {
    if (respDisplayEl) {
      respDisplayEl.innerHTML = '<span style="color:var(--red)">Failed to get access token</span>';
    }
    return false;
  }
}

// Gets invoked when it receives the Authorization Code from the other window via message-event
async function onWindowMessageEvent(msgEvent, winObj, tokenUrl, clientId, clientSecret, redirectUrl, grantType, sendClientSecretIn, securitySchemeId, authFlowDivEl) {
  sessionStorage.removeItem('winMessageEventActive');
  winObj.close();
  if (msgEvent.data.fake) {
    return;
  }
  if (!msgEvent.data) {
    console.warn('RapiDoc: Received no data with authorization message');
  }
  if (msgEvent.data.error) {
    console.warn('RapiDoc: Error while receiving data');
  }
  if (msgEvent.data) {
    if (msgEvent.data.responseType === 'code') {
      // Authorization Code flow
      fetchAccessToken.call(this, tokenUrl, clientId, clientSecret, redirectUrl, grantType, msgEvent.data.code, securitySchemeId, authFlowDivEl, sendClientSecretIn);
    } else if (msgEvent.data.responseType === 'token') {
      // Implicit flow
      updateOAuthKey.call(this, securitySchemeId, msgEvent.data.access_token, msgEvent.data.token_type);
    }
  }
}

// code_challenge generator for PKCE flow
// TODO: Implement dynamic generation of code-challenge based on code-verifier
/*
async function generateCodeChallenge() {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const sha256Hash = await window.crypto.subtle.digest('SHA-256', data); // returns Unit8Array
  // const utf8Decoder = new TextDecoder();
  // const b64EncodedSha256 = btoa(utf8Decoder.decode(sha256Hash));
  const b64EncodedSha256 = base64encode(sha256Hash);
  return b64EncodedSha256;
}
*/

async function onInvokeOAuthFlow(securitySchemeId, flowType, authUrl, tokenUrl, e) {
  const authFlowDivEl = e.target.closest('.oauth-flow');
  const clientId = authFlowDivEl.querySelector('.oauth-client-id') ? authFlowDivEl.querySelector('.oauth-client-id').value.trim() : '';
  const clientSecret = authFlowDivEl.querySelector('.oauth-client-secret') ? authFlowDivEl.querySelector('.oauth-client-secret').value.trim() : '';
  const username = authFlowDivEl.querySelector('.api-key-user') ? authFlowDivEl.querySelector('.api-key-user').value.trim() : '';
  const password = authFlowDivEl.querySelector('.api-key-password') ? authFlowDivEl.querySelector('.api-key-password').value.trim() : '';
  const sendClientSecretIn = authFlowDivEl.querySelector('.oauth-send-client-secret-in') ? authFlowDivEl.querySelector('.oauth-send-client-secret-in').value.trim() : 'header';
  const checkedScopeEls = [...authFlowDivEl.querySelectorAll('.scope-checkbox:checked')];
  const pkceCheckboxEl = authFlowDivEl.querySelector(`#${securitySchemeId}-pkce`);
  const state = `${Math.random().toString(36).slice(2, 9)}random${Math.random().toString(36).slice(2, 9)}`;
  const nonce = `${Math.random().toString(36).slice(2, 9)}random${Math.random().toString(36).slice(2, 9)}`;
  // const codeChallenge = await generateCodeChallenge(codeVerifier);
  const redirectUrlObj = new URL(`${window.location.origin}${window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'))}/${this.oauthReceiver}`);
  let grantType = '';
  let responseType = '';
  let newWindow;

  // clear previous error messages
  const errEls = [...authFlowDivEl.parentNode.querySelectorAll('.oauth-resp-display')];
  errEls.forEach(v => {
    v.innerHTML = '';
  });
  if (flowType === 'authorizationCode' || flowType === 'implicit') {
    const authUrlObj = new URL(authUrl);
    if (flowType === 'authorizationCode') {
      grantType = 'authorization_code';
      responseType = 'code';
    } else if (flowType === 'implicit') {
      responseType = 'token';
    }
    const authCodeParams = new URLSearchParams(authUrlObj.search);
    const selectedScopes = checkedScopeEls.map(v => v.value).join(' ');
    if (selectedScopes) {
      authCodeParams.set('scope', selectedScopes);
    }
    authCodeParams.set('client_id', clientId);
    authCodeParams.set('redirect_uri', redirectUrlObj.toString());
    authCodeParams.set('response_type', responseType);
    authCodeParams.set('state', state);
    authCodeParams.set('nonce', nonce);
    if (pkceCheckboxEl && pkceCheckboxEl.checked) {
      authCodeParams.set('code_challenge', codeChallenge);
      authCodeParams.set('code_challenge_method', 'S256');
    }
    authCodeParams.set('show_dialog', true);
    authUrlObj.search = authCodeParams.toString();
    // If any older message-event-listener is active then fire a fake message to remove it (these are single time listeners)
    if (sessionStorage.getItem('winMessageEventActive') === 'true') {
      window.postMessage({
        fake: true
      }, this);
    }
    setTimeout(() => {
      newWindow = window.open(authUrlObj.toString());
      if (!newWindow) {
        console.error(`RapiDoc: Unable to open ${authUrlObj.toString()} in a new window`);
      } else {
        sessionStorage.setItem('winMessageEventActive', 'true');
        window.addEventListener('message', msgEvent => onWindowMessageEvent.call(this, msgEvent, newWindow, tokenUrl, clientId, clientSecret, redirectUrlObj.toString(), grantType, sendClientSecretIn, securitySchemeId, authFlowDivEl), {
          once: true
        });
      }
    }, 10);
  } else if (flowType === 'clientCredentials') {
    grantType = 'client_credentials';
    const selectedScopes = checkedScopeEls.map(v => v.value).join(' ');
    fetchAccessToken.call(this, tokenUrl, clientId, clientSecret, redirectUrlObj.toString(), grantType, '', securitySchemeId, authFlowDivEl, sendClientSecretIn, selectedScopes);
  } else if (flowType === 'password') {
    grantType = 'password';
    const selectedScopes = checkedScopeEls.map(v => v.value).join(' ');
    fetchAccessToken.call(this, tokenUrl, clientId, clientSecret, redirectUrlObj.toString(), grantType, '', securitySchemeId, authFlowDivEl, sendClientSecretIn, selectedScopes, username, password);
  }
}
/* eslint-enable no-console */

/* eslint-disable indent */

function oAuthFlowTemplate(flowName, clientId, clientSecret, securitySchemeId, authFlow, defaultScopes = [], receiveTokenIn = 'header', receiveTokenInOptions = undefined) {
  let {
    authorizationUrl,
    tokenUrl,
    refreshUrl
  } = authFlow;
  const pkceOnly = authFlow['x-pkce-only'] || false;
  const isUrlAbsolute = url => url.indexOf('://') > 0 || url.indexOf('//') === 0;
  // Calculcate base URL
  const url = new URL(this.selectedServer.computedUrl);
  const baseUrl = url.origin;
  if (refreshUrl && !isUrlAbsolute(refreshUrl)) {
    refreshUrl = `${baseUrl}/${refreshUrl.replace(/^\//, '')}`;
  }
  if (tokenUrl && !isUrlAbsolute(tokenUrl)) {
    tokenUrl = `${baseUrl}/${tokenUrl.replace(/^\//, '')}`;
  }
  if (authorizationUrl && !isUrlAbsolute(authorizationUrl)) {
    authorizationUrl = `${baseUrl}/${authorizationUrl.replace(/^\//, '')}`;
  }
  let flowNameDisplay;
  if (flowName === 'authorizationCode') {
    flowNameDisplay = 'Authorization Code Flow';
  } else if (flowName === 'clientCredentials') {
    flowNameDisplay = 'Client Credentials Flow';
  } else if (flowName === 'implicit') {
    flowNameDisplay = 'Implicit Flow';
  } else if (flowName === 'password') {
    flowNameDisplay = 'Password Flow';
  } else {
    flowNameDisplay = flowName;
  }
  return lit_html_x`
    <div class="oauth-flow ${flowName}" style="padding: 12px 0; margin-bottom:12px;">
      <div class="tiny-title upper" style="margin-bottom:8px;">${flowNameDisplay}</div>
      ${authorizationUrl ? lit_html_x`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Auth URL</span> <span class="mono-font"> ${authorizationUrl} </span></div>` : ''}
      ${tokenUrl ? lit_html_x`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Token URL</span> <span class="mono-font">${tokenUrl}</span></div>` : ''}
      ${refreshUrl ? lit_html_x`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Refresh URL</span> <span class="mono-font">${refreshUrl}</span></div>` : ''}
      ${flowName === 'authorizationCode' || flowName === 'clientCredentials' || flowName === 'implicit' || flowName === 'password' ? lit_html_x`
          ${authFlow.scopes ? lit_html_x`
              <span> Scopes </span>
              <div class= "oauth-scopes" part="section-auth-scopes" style = "width:100%; display:flex; flex-direction:column; flex-wrap:wrap; margin:0 0 10px 24px">
                ${Object.entries(authFlow.scopes).map((scopeAndDescr, index) => lit_html_x`
                  <div class="m-checkbox" style="display:inline-flex; align-items:center">
                    <input type="checkbox" part="checkbox checkbox-auth-scope" class="scope-checkbox" id="${securitySchemeId}${flowName}${index}" ?checked="${defaultScopes.includes(scopeAndDescr[0])}" value="${scopeAndDescr[0]}">
                    <label for="${securitySchemeId}${flowName}${index}" style="margin-left:5px; cursor:pointer">
                      <span class="mono-font">${scopeAndDescr[0]}</span>
                        ${scopeAndDescr[0] !== scopeAndDescr[1] ? ` - ${scopeAndDescr[1] || ''}` : ''}
                    </label>
                  </div>
                `)}
              </div>
            ` : ''}
          ${flowName === 'password' ? lit_html_x`
              <div style="margin:5px 0">
                <input type="text" value = "" placeholder="username" spellcheck="false" class="oauth2 ${flowName} ${securitySchemeId} api-key-user" part="textbox textbox-username">
                <input type="password" value = "" placeholder="password" spellcheck="false" class="oauth2 ${flowName} ${securitySchemeId} api-key-password" style = "margin:0 5px;" part="textbox textbox-password">
              </div>` : ''}
          <div>
            ${flowName === 'authorizationCode' ? lit_html_x`
                <div style="margin: 16px 0 4px">
                  <input type="checkbox" part="checkbox checkbox-auth-scope" id="${securitySchemeId}-pkce" checked ?disabled=${pkceOnly}>
                  <label for="${securitySchemeId}-pkce" style="margin:0 16px 0 4px; line-height:24px; cursor:pointer">
                   Send Proof Key for Code Exchange (PKCE)
                  </label>
                </div>
              ` : ''}
            <input type="text" part="textbox textbox-auth-client-id" value = "${clientId || ''}" placeholder="client-id" spellcheck="false" class="oauth2 ${flowName} ${securitySchemeId} oauth-client-id">
            ${flowName === 'authorizationCode' || flowName === 'clientCredentials' || flowName === 'password' ? lit_html_x`
                <input
                  type="password" part="textbox textbox-auth-client-secret"
                  value = "${clientSecret || ''}" placeholder="client-secret" spellcheck="false"
                  class="oauth2 ${flowName} ${securitySchemeId}
                  oauth-client-secret"
                  style = "margin:0 5px;${pkceOnly ? 'display:none;' : ''}"
                >
                <select style="margin-right:5px;${pkceOnly ? 'display:none;' : ''}" class="${flowName} ${securitySchemeId} oauth-send-client-secret-in">
                   ${!receiveTokenInOptions || receiveTokenInOptions.includes('header') ? lit_html_x`<option value = 'header' .selected = ${receiveTokenIn === 'header'} > Authorization Header </option>` : ''}
                   ${!receiveTokenInOptions || receiveTokenInOptions.includes('request-body') ? lit_html_x` <option value = 'request-body' .selected = ${receiveTokenIn === 'request-body'}> Request Body </option>` : ''}
                </select>` : ''}
            ${flowName === 'authorizationCode' || flowName === 'clientCredentials' || flowName === 'implicit' || flowName === 'password' ? lit_html_x`
                <button class="m-btn thin-border" part="btn btn-outline"
                  @click="${e => {
    onInvokeOAuthFlow.call(this, securitySchemeId, flowName, authorizationUrl, tokenUrl, e);
  }}"
                > GET TOKEN </button>` : ''}
          </div>
          <div class="oauth-resp-display red-text small-font-size"></div>
          ` : ''}
    </div>
  `;
}
function removeApiKey(securitySchemeId) {
  var _this$resolvedSpec$se3;
  const securityObj = (_this$resolvedSpec$se3 = this.resolvedSpec.securitySchemes) === null || _this$resolvedSpec$se3 === void 0 ? void 0 : _this$resolvedSpec$se3.find(v => v.securitySchemeId === securitySchemeId);
  securityObj.user = '';
  securityObj.password = '';
  securityObj.value = '';
  securityObj.finalKeyValue = '';
  if (this.persistAuth === 'true') {
    const rapidocLs = getPersistedApiKeys.call(this);
    delete rapidocLs[securityObj.securitySchemeId];
    setPersistedApiKeys.call(this, rapidocLs);
  }
  this.requestUpdate();
}
function securitySchemeTemplate() {
  var _this$resolvedSpec$se4;
  if (!this.resolvedSpec) {
    return '';
  }
  const providedApiKeys = (_this$resolvedSpec$se4 = this.resolvedSpec.securitySchemes) === null || _this$resolvedSpec$se4 === void 0 ? void 0 : _this$resolvedSpec$se4.filter(v => v.finalKeyValue);
  if (!providedApiKeys) {
    return;
  }
  return lit_html_x`
  <section id='auth' part="section-auth" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class = 'observe-me ${'read focused'.includes(this.renderStyle) ? 'section-gap--read-mode' : 'section-gap '}'>
    <div class='sub-title regular-font'> AUTHENTICATION </div>

    <div class="small-font-size" style="display:flex; align-items: center; min-height:30px">
      ${providedApiKeys.length > 0 ? lit_html_x`
          <div class="blue-text"> ${providedApiKeys.length} API key applied </div>
          <div style="flex:1"></div>
          <button class="m-btn thin-border" part="btn btn-outline" @click=${() => {
    onClearAllApiKeys.call(this);
  }}>CLEAR ALL API KEYS</button>` : lit_html_x`<div class="red-text">No API key applied</div>`}
    </div>
    ${this.resolvedSpec.securitySchemes && this.resolvedSpec.securitySchemes.length > 0 ? lit_html_x`
        <table role="presentation" id="auth-table" class='m-table padded-12' style="width:100%;">
          ${this.resolvedSpec.securitySchemes.map(v => lit_html_x`
            <tr id="security-scheme-${v.securitySchemeId}" class="${v.type.toLowerCase()}">
              <td style="max-width:500px; overflow-wrap: break-word;">
                <div style="line-height:28px; margin-bottom:5px;">
                  <span style="font-weight:bold; font-size:var(--font-size-regular)">${v.typeDisplay}</span>
                  ${v.finalKeyValue ? lit_html_x`
                      <span class='blue-text'>  ${v.finalKeyValue ? 'Key Applied' : ''} </span>
                      <button class="m-btn thin-border small" part="btn btn-outline" @click=${() => {
    removeApiKey.call(this, v.securitySchemeId);
  }}>REMOVE</button>
                      ` : ''}
                </div>
                ${v.description ? lit_html_x`
                    <div class="m-markdown">
                      ${unsafe_html_o(marked(v.description || ''))}
                    </div>` : ''}

                ${v.type.toLowerCase() === 'apikey' || v.type.toLowerCase() === 'http' && v.scheme.toLowerCase() === 'bearer' ? lit_html_x`
                    <div style="margin-bottom:5px">
                      ${v.type.toLowerCase() === 'apikey' ? lit_html_x`Send <code>${v.name}</code> in <code>${v.in}</code>` : lit_html_x`Send <code>Authorization</code> in <code>header</code> containing the word <code>Bearer</code> followed by a space and a Token String.`}
                    </div>
                    <div style="max-height:28px;">
                      ${v.in !== 'cookie' ? lit_html_x`
                          <input type = "text" value = "${v.value}" class="${v.type} ${v.securitySchemeId} api-key-input" placeholder = "api-token" spellcheck = "false">
                          <button class="m-btn thin-border" style = "margin-left:5px;"
                            part = "btn btn-outline"
                            @click="${e => {
    onApiKeyChange.call(this, v.securitySchemeId, e);
  }}">
                            ${v.finalKeyValue ? 'UPDATE' : 'SET'}
                          </button>` : lit_html_x`<span class="gray-text" style="font-size::var(--font-size-small)"> cookies cannot be set from here</span>`}
                    </div>` : ''}
                ${v.type.toLowerCase() === 'http' && v.scheme.toLowerCase() === 'basic' ? lit_html_x`
                    <div style="margin-bottom:5px">
                      Send <code>Authorization</code> in <code>header</code> containing the word <code>Basic</code> followed by a space and a base64 encoded string of <code>username:password</code>.
                    </div>
                    <div>
                      <input type="text" value = "${v.user}" placeholder="username" spellcheck="false" class="${v.type} ${v.securitySchemeId} api-key-user" style="width:100px">
                      <input type="password" value = "${v.password}" placeholder="password" spellcheck="false" class="${v.type} ${v.securitySchemeId} api-key-password" style = "width:100px; margin:0 5px;">
                      <button class="m-btn thin-border"
                        @click="${e => {
    onApiKeyChange.call(this, v.securitySchemeId, e);
  }}"
                        part = "btn btn-outline"
                      >
                        ${v.finalKeyValue ? 'UPDATE' : 'SET'}
                      </button>
                    </div>` : ''}
              </td>
            </tr>
            ${v.type.toLowerCase() === 'oauth2' ? lit_html_x`
                <tr>
                  <td style="border:none; padding-left:48px">
                    ${Object.keys(v.flows).map(f => oAuthFlowTemplate.call(this, f, v.flows[f]['x-client-id'] || v['x-client-id'] || '', v.flows[f]['x-client-secret'] || v['x-client-secret'] || '', v.securitySchemeId, v.flows[f], v.flows[f]['x-default-scopes'] || v['x-default-scopes'], v.flows[f]['x-receive-token-in'] || v['x-receive-token-in'], v.flows[f]['x-receive-token-in-options'] || v['x-receive-token-in-options']))}
                  </td>
                </tr>
                ` : ''}
          `)}
        </table>` : ''}
    <slot name="auth"></slot>
  </section>
`;
}
function pathSecurityTemplate(pathSecurity) {
  if (this.resolvedSpec.securitySchemes && pathSecurity) {
    const orSecurityKeys1 = [];
    if (Array.isArray(pathSecurity)) {
      if (pathSecurity.length === 0) {
        return '';
      }
    } else {
      return '';
    }
    pathSecurity.forEach(pSecurity => {
      const andSecurityKeys1 = [];
      const andKeyTypes = [];
      if (Object.keys(pSecurity).length === 0) {
        orSecurityKeys1.push({
          securityTypes: 'None',
          securityDefs: []
        });
      } else {
        Object.keys(pSecurity).forEach(pathSecurityKey => {
          let pathScopes = '';
          const s = this.resolvedSpec.securitySchemes.find(ss => ss.securitySchemeId === pathSecurityKey);
          if (pSecurity[pathSecurityKey] && Array.isArray(pSecurity[pathSecurityKey])) {
            pathScopes = pSecurity[pathSecurityKey].join(', ');
          }
          if (s) {
            andKeyTypes.push(s.typeDisplay);
            andSecurityKeys1.push({
              ...s,
              ...{
                scopes: pathScopes
              }
            });
          }
        });
        orSecurityKeys1.push({
          securityTypes: andKeyTypes.length > 1 ? `${andKeyTypes[0]} + ${andKeyTypes.length - 1} more` : andKeyTypes[0],
          securityDefs: andSecurityKeys1
        });
      }
    });
    return lit_html_x`<div style="position:absolute; top:3px; right:2px; font-size:var(--font-size-small); line-height: 1.5;">
      <div style="position:relative; display:flex; min-width:350px; max-width:700px; justify-content: flex-end;">
        <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" style="stroke:var(--fg3)"> <rect x="5" y="11" width="14" height="10" rx="2" /> <circle cx="12" cy="16" r="1" /> <path d="M8 11v-4a4 4 0 0 1 8 0v4" /></svg>
          ${orSecurityKeys1.map((orSecurityItem1, i) => lit_html_x`
          ${orSecurityItem1.securityTypes ? lit_html_x`
              ${i !== 0 ? lit_html_x`<div style="padding:3px 4px;"> OR </div>` : ''}
              <div class="tooltip">
                <div style = "padding:2px 4px; white-space:nowrap; text-overflow:ellipsis;max-width:150px; overflow:hidden;">
                  ${this.updateRoute === 'true' && this.allowAuthentication === 'true' ? lit_html_x`<a part="anchor anchor-operation-security" href="#auth"> ${orSecurityItem1.securityTypes} </a>` : lit_html_x`${orSecurityItem1.securityTypes}`}
                </div>
                <div class="tooltip-text" style="position:absolute; color: var(--fg); top:26px; right:0; border:1px solid var(--border-color);padding:2px 4px; display:block;">
                  ${orSecurityItem1.securityDefs.length > 1 ? lit_html_x`<div>Requires <b>all</b> of the following </div>` : ''}
                  <div style="padding-left: 8px">
                    ${orSecurityItem1.securityDefs.map((andSecurityItem, j) => {
      const scopeHtml = lit_html_x`${andSecurityItem.scopes !== '' ? lit_html_x`
                          <div>
                            <b>Required scopes:</b>
                            <br/>
                            <div style="margin-left:8px">
                              ${andSecurityItem.scopes.split(',').map((scope, cnt) => lit_html_x`${cnt === 0 ? '' : '┃'}<span>${scope}</span>`)}
                            </div>
                          </div>` : ''}`;
      return lit_html_x`
                      ${andSecurityItem.type === 'oauth2' ? lit_html_x`
                          <div>
                            ${orSecurityItem1.securityDefs.length > 1 ? lit_html_x`<b>${j + 1}.</b> &nbsp;` : 'Needs'}
                            OAuth Token <span style="font-family:var(--font-mono); color:var(--primary-color);">${andSecurityItem.securitySchemeId}</span> in <b>Authorization header</b>
                            ${scopeHtml}
                          </div>` : andSecurityItem.type === 'http' ? lit_html_x`
                            <div>
                              ${orSecurityItem1.securityDefs.length > 1 ? lit_html_x`<b>${j + 1}.</b> &nbsp;` : lit_html_x`Requires`}
                              ${andSecurityItem.scheme === 'basic' ? 'Base 64 encoded username:password' : 'Bearer Token'} in <b>Authorization header</b>
                              ${scopeHtml}
                            </div>` : lit_html_x`
                            <div>
                              ${orSecurityItem1.securityDefs.length > 1 ? lit_html_x`<b>${j + 1}.</b> &nbsp;` : lit_html_x`Requires`}
                              Token in <b>${andSecurityItem.name} ${andSecurityItem.in}</b>
                              ${scopeHtml}
                            </div>`}`;
    })}
                  </div>
                </div>
              </div>
            ` : ''}
        `)}
      </div>
    `;
  }
  return '';
}

/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/code-samples-template.js

 // eslint-disable-line import/extensions



/* eslint-disable indent */
function codeSamplesTemplate(xCodeSamples) {
  return lit_html_x`
  <section class="table-title" style="margin-top:24px;">CODE SAMPLES</div>
  <div class="tab-panel col"
    @click="${e => {
    if (!e.target.classList.contains('tab-btn')) {
      return;
    }
    const clickedTab = e.target.dataset.tab;
    const tabButtons = [...e.currentTarget.querySelectorAll('.tab-btn')];
    const tabContents = [...e.currentTarget.querySelectorAll('.tab-content')];
    tabButtons.forEach(tabBtnEl => tabBtnEl.classList[tabBtnEl.dataset.tab === clickedTab ? 'add' : 'remove']('active'));
    tabContents.forEach(tabBodyEl => {
      tabBodyEl.style.display = tabBodyEl.dataset.tab === clickedTab ? 'block' : 'none';
    });
  }}">
    <div class="tab-buttons row" style="width:100; overflow">
      ${xCodeSamples.map((v, i) => lit_html_x`<button class="tab-btn ${i === 0 ? 'active' : ''}" data-tab = '${v.lang}${i}'> ${v.label || v.lang} </button>`)}
    </div>
    ${xCodeSamples.map((v, i) => {
    var _v$lang, _v$lang2, _v$lang3;
    return lit_html_x`
      <div class="tab-content m-markdown" style= "display:${i === 0 ? 'block' : 'none'}" data-tab = '${v.lang}${i}'>
        <button class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e => {
      copyToClipboard(v.source, e);
    }}'> Copy </button>
        <pre><code class="language">${(prism_default()).languages[(_v$lang = v.lang) === null || _v$lang === void 0 ? void 0 : _v$lang.toLowerCase()] ? unsafe_html_o(prism_default().highlight(v.source, (prism_default()).languages[(_v$lang2 = v.lang) === null || _v$lang2 === void 0 ? void 0 : _v$lang2.toLowerCase()], (_v$lang3 = v.lang) === null || _v$lang3 === void 0 ? void 0 : _v$lang3.toLowerCase())) : v.source}</code></pre>
      </div>`;
  })}
  </div>  
  </section>`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/callback-template.js


/* eslint-disable indent */
function callbackTemplate(callbacks) {
  return lit_html_x`
    <div class="req-res-title" style="margin-top:12px">CALLBACKS</div>
    ${Object.entries(callbacks).map(kv => lit_html_x`
      <div class="tiny-title" style="padding: 12px; border:1px solid var(--light-border-color)"> 
        ${kv[0]}
        ${Object.entries(kv[1]).map(pathObj => lit_html_x`
          <div class="mono-font small-font-size" style="display:flex; margin-left:16px;">
            <div style="width:100%"> 
              ${Object.entries(pathObj[1]).map(method => {
    var _method$, _method$2, _method$3;
    return lit_html_x`
                <div>
                  <div style="margin-top:12px;">
                    <div class="method method-fg ${method[0]}" style="width:70px; border:none; margin:0; padding:0; line-height:20px; vertical-align: baseline;text-align:left"> 
                      <span style="font-size:20px;"> &#x2944; </span> 
                      ${method[0]} 
                    </div>
                    <span style="line-height:20px; vertical-align: baseline;">${pathObj[0]} </span>
                  </div>  
                  <div class='expanded-req-resp-container'>
                    <api-request
                      class = "${this.renderStyle}-mode callback"  
                      style = "width:100%;"
                      callback = "true"
                      method = "${method[0] || ''}", 
                      path = "${pathObj[0] || ''}" 
                      .parameters = "${((_method$ = method[1]) === null || _method$ === void 0 ? void 0 : _method$.parameters) || ''}" 
                      .request_body = "${((_method$2 = method[1]) === null || _method$2 === void 0 ? void 0 : _method$2.requestBody) || ''}"
                      fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
                      allow-try = "false"
                      render-style="${this.renderStyle}" 
                      schema-style = "${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      schema-hide-read-only = "false"
                      schema-hide-write-only = "${this.schemaHideWriteOnly === 'never' ? 'false' : 'true'}"
                      fetch-credentials = "${this.fetchCredentials}"
                      exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                        file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                        anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                      > </api-request>

                    <api-response
                      style = "width:100%;"
                      class = "${this.renderStyle}-mode"
                      callback = "true"
                      .responses="${(_method$3 = method[1]) === null || _method$3 === void 0 ? void 0 : _method$3.responses}"
                      render-style="${this.renderStyle}"
                      schema-style="${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      schema-hide-read-only = "${this.schemaHideReadOnly === 'never' ? 'false' : 'true'}"
                      schema-hide-write-only = "false"
                      exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
                      schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                    > </api-response>
                  </div>
                </div>  
              `;
  })}
            </div>  
          </div>  
        `)}
      </div>  
    `)}
  `;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./node_modules/lit-html/directives/guard.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const guard_e={},guard_i=directive_e(class extends directive_i{constructor(){super(...arguments),this.st=guard_e}render(r,t){return t()}update(t,[s,e]){if(Array.isArray(s)){if(Array.isArray(this.st)&&this.st.length===s.length&&s.every(((r,t)=>r===this.st[t])))return T}else if(this.st===s)return T;return this.st=Array.isArray(s)?Array.from(s):s,this.render(s,e)}});
//# sourceMappingURL=guard.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/guard.js

//# sourceMappingURL=guard.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directive-helpers.js

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:directive_helpers_l}=Z,directive_helpers_t=o=>null===o||"object"!=typeof o&&"function"!=typeof o,directive_helpers_i={HTML:1,SVG:2},directive_helpers_n=(o,l)=>void 0===l?void 0!==(null==o?void 0:o._$litType$):(null==o?void 0:o._$litType$)===l,directive_helpers_d=o=>void 0!==(null==o?void 0:o._$litDirective$),directive_helpers_v=o=>null==o?void 0:o._$litDirective$,directive_helpers_e=o=>void 0===o.strings,directive_helpers_c=()=>document.createComment(""),directive_helpers_r=(o,t,i)=>{var n;const d=o._$AA.parentNode,v=void 0===t?o._$AB:t._$AA;if(void 0===i){const t=d.insertBefore(directive_helpers_c(),v),n=d.insertBefore(directive_helpers_c(),v);i=new directive_helpers_l(t,n,o,o.options)}else{const l=i._$AB.nextSibling,t=i._$AM,e=t!==o;if(e){let l;null===(n=i._$AQ)||void 0===n||n.call(i,o),i._$AM=o,void 0!==i._$AP&&(l=o._$AU)!==t._$AU&&i._$AP(l)}if(l!==v||e){let o=i._$AA;for(;o!==l;){const l=o.nextSibling;d.insertBefore(o,v),o=l}}}return i},directive_helpers_u=(o,l,t=o)=>(o._$AI(l,t),o),directive_helpers_f={},directive_helpers_s=(o,l=directive_helpers_f)=>o._$AH=l,directive_helpers_m=o=>o._$AH,directive_helpers_p=o=>{var l;null===(l=o._$AP)||void 0===l||l.call(o,!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}},directive_helpers_a=o=>{o._$AR()};
//# sourceMappingURL=directive-helpers.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directives/live.js

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const live_l=directive_e(class extends directive_i{constructor(r){if(super(r),r.type!==directive_t.PROPERTY&&r.type!==directive_t.ATTRIBUTE&&r.type!==directive_t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!directive_helpers_e(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t]){if(t===T||t===A)return t;const o=i.element,l=i.name;if(i.type===directive_t.PROPERTY){if(t===o[l])return T}else if(i.type===directive_t.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(l))return T}else if(i.type===directive_t.ATTRIBUTE&&o.getAttribute(l)===t+"")return T;return directive_helpers_s(i),t}});
//# sourceMappingURL=live.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/live.js

//# sourceMappingURL=live.js.map

// EXTERNAL MODULE: ./node_modules/xml-but-prettier/dist/index.js
var dist = __webpack_require__(131);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/styles/border-styles.js

/* harmony default export */ const border_styles = (i`
.border-top {
  border-top:1px solid var(--border-color);
}
.border{
  border:1px solid var(--border-color);
  border-radius: var(--border-radius);
}
.light-border{
  border:1px solid var(--light-border-color);
  border-radius: var(--border-radius);
}
.pad-8-16{
  padding: 8px 16px;
}
.pad-top-8{
  padding-top: 8px;
}
.mar-top-8{
  margin-top: 8px;
}
`);
;// CONCATENATED MODULE: ./src/utils/schema-utils.js
// Takes a value as input and provides a printable string to replresent null values, spaces, blankstring etc
function getPrintableVal(val) {
  if (val === undefined) {
    return '';
  }
  if (val === null) {
    return 'null';
  }
  if (val === '') {
    return '∅';
  }
  if (typeof val === 'boolean' || typeof val === 'number') {
    return `${val}`;
  }
  if (Array.isArray(val)) {
    return val.map(v => v === null ? 'null' : v === '' ? '∅' : v.toString().replace(/^ +| +$/g, m => '●'.repeat(m.length)) || '').join(', ');
  }
  if (typeof val === 'object') {
    const keys = Object.keys(val);
    return `{ ${keys[0]}:${val[keys[0]]}${keys.length > 1 ? ',' : ''} ... }`;
  }
  return val.toString().replace(/^ +| +$/g, m => '●'.repeat(m.length)) || '';
}

/* Generates an schema object containing type and constraint info */
function getTypeInfo(schema) {
  if (!schema) {
    return;
  }
  let dataType = '';
  let constrain = '';
  // let examples;

  if (schema.$ref) {
    const n = schema.$ref.lastIndexOf('/');
    const schemaNode = schema.$ref.substring(n + 1);
    dataType = `{recursive: ${schemaNode}} `;
  } else if (schema.type) {
    dataType = Array.isArray(schema.type) ? schema.type.join(schema.length === 2 ? ' or ' : '┃') : schema.type;
    if (schema.format || schema.enum || schema.const) {
      dataType = dataType.replace('string', schema.enum ? 'enum' : schema.const ? 'const' : schema.format);
    }
    if (schema.nullable) {
      dataType += '┃null';
    }
  } else if (schema.const) {
    dataType = 'const';
  } else if (Object.keys(schema).length === 0) {
    dataType = 'any';
  } else {
    dataType = '{missing-type-info}';
  }
  const info = {
    type: dataType,
    format: schema.format || '',
    pattern: schema.pattern && !schema.enum ? schema.pattern : '',
    readOrWriteOnly: schema.readOnly ? '🆁' : schema.writeOnly ? '🆆' : '',
    deprecated: schema.deprecated ? '❌' : '',
    examples: schema.examples || schema.example,
    default: getPrintableVal(schema.default),
    description: schema.description || '',
    constrain: '',
    allowedValues: '',
    arrayType: '',
    html: ''
  };
  if (info.type === '{recursive}') {
    info.description = schema.$ref.substring(schema.$ref.lastIndexOf('/') + 1);
  } else if (info.type === '{missing-type-info}' || info.type === 'any') {
    info.description = info.description || '';
  }
  // Set Allowed Values
  info.allowedValues = schema.const ? schema.const : Array.isArray(schema.enum) ? schema.enum.map(v => getPrintableVal(v)).join('┃') : '';
  if (dataType === 'array' && schema.items) {
    var _schema$items, _schema$items2;
    const arrayItemType = (_schema$items = schema.items) === null || _schema$items === void 0 ? void 0 : _schema$items.type;
    const arrayItemDefault = getPrintableVal(schema.items.default);
    info.arrayType = `${schema.type} of ${Array.isArray(arrayItemType) ? arrayItemType.join('') : arrayItemType}`;
    info.default = arrayItemDefault;
    info.allowedValues = schema.items.const ? schema.const : Array.isArray((_schema$items2 = schema.items) === null || _schema$items2 === void 0 ? void 0 : _schema$items2.enum) ? schema.items.enum.map(v => getPrintableVal(v)).join('┃') : '';
  }
  if (dataType.match(/integer|number/g)) {
    if (schema.minimum !== undefined || schema.exclusiveMinimum !== undefined) {
      constrain += schema.minimum !== undefined ? `Min ${schema.minimum}` : `More than ${schema.exclusiveMinimum}`;
    }
    if (schema.maximum !== undefined || schema.exclusiveMaximum !== undefined) {
      constrain += schema.maximum !== undefined ? `${constrain ? '┃' : ''}Max ${schema.maximum}` : `${constrain ? '┃' : ''}Less than ${schema.exclusiveMaximum}`;
    }
    if (schema.multipleOf !== undefined) {
      constrain += `${constrain ? '┃' : ''} multiple of ${schema.multipleOf}`;
    }
  }
  if (dataType.match(/string/g)) {
    if (schema.minLength !== undefined && schema.maxLength !== undefined) {
      constrain += `${constrain ? '┃' : ''}${schema.minLength} to ${schema.maxLength} chars`;
    } else if (schema.minLength !== undefined) {
      constrain += `${constrain ? '┃' : ''}Min ${schema.minLength} chars`;
    } else if (schema.maxLength !== undefined) {
      constrain += `Max ${constrain ? '┃' : ''}${schema.maxLength} chars`;
    }
  }
  info.constrain = constrain;
  info.html = `${info.type}~|~${info.readOrWriteOnly}~|~${info.constrain}~|~${info.default}~|~${info.allowedValues}~|~${info.pattern}~|~${info.description}~|~${schema.title || ''}~|~${info.deprecated ? 'deprecated' : ''}`;
  return info;
}
function nestExampleIfPresent(example) {
  if (typeof example === 'boolean' || typeof example === 'number') {
    return {
      Example: {
        value: `${example}`
      }
    };
  }
  if (example === '') {
    return {
      Example: {
        value: ''
      }
    };
  }
  return example ? {
    Example: {
      value: example
    }
  } : example;
}

/**
 *  Normalize example object in the following format (List of object which is used to render example links and fill the input boxes)
 *  [{
 *     exampleVal  : 'value to be rendered on the input control (text-box)',
 *     exampleList : [
 *       value         : '',
 *       printableValue: '',
 *       summary       : '',
 *       description   : ''
 *     ]
 *  }]
 * */
function normalizeExamples(examples, dataType = 'string') {
  if (!examples) {
    return {
      exampleVal: '',
      exampleList: []
    };
  }
  if (examples.constructor === Object) {
    const exampleList = Object.values(examples).filter(v => v['x-example-show-value'] !== false).map(v => ({
      value: typeof v.value === 'boolean' || typeof v.value === 'number' ? `${v.value}` : v.value || '',
      printableValue: getPrintableVal(v.value),
      summary: v.summary || '',
      description: v.description || ''
    }));
    const exampleVal = exampleList.length > 0 ? exampleList[0].value : '';
    return {
      exampleVal,
      exampleList
    };
  }

  // This is non-standard way to provide example but will support for now
  if (!Array.isArray(examples)) {
    examples = examples ? [examples] : [];
  }
  if (examples.length === 0) {
    return {
      exampleVal: '',
      exampleList: []
    };
  }
  if (dataType === 'array') {
    const [exampleVal] = examples;
    const exampleList = examples.map(v => ({
      value: v,
      printableValue: getPrintableVal(v)
    }));
    return {
      exampleVal,
      exampleList
    };
  }
  const exampleVal = examples[0].toString();
  const exampleList = examples.map(v => ({
    value: v.toString(),
    printableValue: getPrintableVal(v)
  }));
  return {
    exampleVal,
    exampleList
  };
}
function anyExampleWithSummaryOrDescription(examples) {
  return examples.some(x => {
    var _x$summary, _x$description;
    return ((_x$summary = x.summary) === null || _x$summary === void 0 ? void 0 : _x$summary.length) > 0 || ((_x$description = x.description) === null || _x$description === void 0 ? void 0 : _x$description.length) > 0;
  });
}
function getSampleValueByType(schemaObj) {
  const example = schemaObj.examples ? schemaObj.examples[0] : schemaObj.example === null ? null : schemaObj.example || undefined;
  if (example === '') {
    return '';
  }
  if (example === null) {
    return null;
  }
  if (example === 0) {
    return 0;
  }
  if (example === false) {
    return false;
  }
  if (example instanceof Date) {
    switch (schemaObj.format.toLowerCase()) {
      case 'date':
        return example.toISOString().split('T')[0];
      case 'time':
        return example.toISOString().split('T')[1];
      default:
        return example.toISOString();
    }
  }
  if (example) {
    return example;
  }
  if (Object.keys(schemaObj).length === 0) {
    return null;
  }
  if (schemaObj.$ref) {
    // Indicates a Circular ref
    return schemaObj.$ref;
  }
  if (schemaObj.const === false || schemaObj.const === 0 || schemaObj.const === null || schemaObj.const === '') {
    return schemaObj.const;
  }
  if (schemaObj.const) {
    return schemaObj.const;
  }
  const typeValue = Array.isArray(schemaObj.type) ? schemaObj.type[0] : schemaObj.type;
  if (!typeValue) {
    return '?';
  }
  if (typeValue.match(/^integer|^number/g)) {
    const multipleOf = Number.isNaN(Number(schemaObj.multipleOf)) ? undefined : Number(schemaObj.multipleOf);
    const maximum = Number.isNaN(Number(schemaObj.maximum)) ? undefined : Number(schemaObj.maximum);
    const minimumPossibleVal = Number.isNaN(Number(schemaObj.minimum)) ? Number.isNaN(Number(schemaObj.exclusiveMinimum)) ? maximum || 0 : Number(schemaObj.exclusiveMinimum) + (typeValue.startsWith('integer') ? 1 : 0.001) : Number(schemaObj.minimum);
    const finalVal = multipleOf ? multipleOf >= minimumPossibleVal ? multipleOf : minimumPossibleVal % multipleOf === 0 ? minimumPossibleVal : Math.ceil(minimumPossibleVal / multipleOf) * multipleOf : minimumPossibleVal;
    return finalVal;
  }
  if (typeValue.match(/^boolean/g)) {
    return false;
  }
  if (typeValue.match(/^null/g)) {
    return null;
  }
  if (typeValue.match(/^string/g)) {
    if (schemaObj.enum) {
      return schemaObj.enum[0];
    }
    if (schemaObj.const) {
      return schemaObj.const;
    }
    if (schemaObj.pattern) {
      return schemaObj.pattern;
    }
    if (schemaObj.format) {
      const u = `${Date.now().toString(16)}${Math.random().toString(16)}0`.repeat(16);
      switch (schemaObj.format.toLowerCase()) {
        case 'url':
        case 'uri':
          return 'http://example.com';
        case 'date':
          return new Date(0).toISOString().split('T')[0];
        case 'time':
          return new Date(0).toISOString().split('T')[1];
        case 'date-time':
          return new Date(0).toISOString();
        case 'duration':
          return 'P3Y6M4DT12H30M5S';
        // P=Period 3-Years 6-Months 4-Days 12-Hours 30-Minutes 5-Seconds
        case 'email':
        case 'idn-email':
          return 'user@example.com';
        case 'hostname':
        case 'idn-hostname':
          return 'www.example.com';
        case 'ipv4':
          return '198.51.100.42';
        case 'ipv6':
          return '2001:0db8:5b96:0000:0000:426f:8e17:642a';
        case 'uuid':
          return [u.substr(0, 8), u.substr(8, 4), `4000-8${u.substr(13, 3)}`, u.substr(16, 12)].join('-');
        case 'byte':
          return 'ZXhhbXBsZQ==';
        // 'example' base64 encoded. See https://spec.openapis.org/oas/v3.0.0#data-types
        default:
          return '';
      }
    } else {
      const minLength = Number.isNaN(schemaObj.minLength) ? undefined : Number(schemaObj.minLength);
      const maxLength = Number.isNaN(schemaObj.maxLength) ? undefined : Number(schemaObj.maxLength);
      const finalLength = minLength || (maxLength > 6 ? 6 : maxLength || undefined);
      return finalLength ? 'A'.repeat(finalLength) : 'string';
    }
  }
  // If type cannot be determined
  return '?';
}

/*
json2xml- TestCase
  {
    'prop1' : 'one',
    'prop2' : 'two',
    'prop3' : [ 'a', 'b', 'c' ],
    'prop4' : {
      'ob1' : 'val-1',
      'ob2' : 'val-2'
    }
  }
  <root>
    <prop1>simple</prop1>
    <prop2>
      <0>a</0>
      <1>b</1>
      <2>c</2>
    </prop2>
    <prop3>
      <ob1>val-1</ob1>
      <ob2>val-2</ob2>
    </prop3>
  </root>
*/
function json2xml(obj, level = 1) {
  const indent = '  '.repeat(level);
  let xmlText = '';
  if (level === 1 && typeof obj !== 'object') {
    return `\n${indent}${obj.toString()}`;
  }
  for (const prop in obj) {
    const tagNameOrProp = obj[prop]['::XML_TAG'] || prop;
    let tagName = '';
    if (Array.isArray(obj[prop])) {
      tagName = tagNameOrProp[0]['::XML_TAG'] || `${prop}`;
    } else {
      tagName = tagNameOrProp;
    }
    if (prop.startsWith('::')) {
      continue;
    }
    if (Array.isArray(obj[prop])) {
      xmlText = `${xmlText}\n${indent}<${tagName}>${json2xml(obj[prop], level + 1)}\n${indent}</${tagName}>`;
    } else if (typeof obj[prop] === 'object') {
      xmlText = `${xmlText}\n${indent}<${tagName}>${json2xml(obj[prop], level + 1)}\n${indent}</${tagName}>`;
    } else {
      xmlText = `${xmlText}\n${indent}<${tagName}>${obj[prop].toString()}</${tagName}>`;
    }
  }
  return xmlText;
}
function addSchemaInfoToExample(schema, obj) {
  var _schema$xml, _schema$xml3;
  if (typeof obj !== 'object' || obj === null) {
    return;
  }
  if (schema.title) {
    obj['::TITLE'] = schema.title;
  }
  if (schema.description) {
    obj['::DESCRIPTION'] = schema.description;
  }
  if ((_schema$xml = schema.xml) !== null && _schema$xml !== void 0 && _schema$xml.name) {
    var _schema$xml2;
    obj['::XML_TAG'] = (_schema$xml2 = schema.xml) === null || _schema$xml2 === void 0 ? void 0 : _schema$xml2.name;
  }
  if ((_schema$xml3 = schema.xml) !== null && _schema$xml3 !== void 0 && _schema$xml3.wrapped) {
    var _schema$xml4;
    obj['::XML_WRAP'] = (_schema$xml4 = schema.xml) === null || _schema$xml4 === void 0 ? void 0 : _schema$xml4.wrapped.toString();
  }
}
function removeTitlesAndDescriptions(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }
  delete obj['::TITLE'];
  delete obj['::DESCRIPTION'];
  delete obj['::XML_TAG'];
  delete obj['::XML_WRAP'];
  for (const k in obj) {
    removeTitlesAndDescriptions(obj[k]);
  }
}
function addPropertyExampleToObjectExamples(example, obj, propertyKey) {
  for (const key in obj) {
    obj[key][propertyKey] = example;
  }
}
function mergePropertyExamples(obj, propertyName, propExamples) {
  // Create an example for each variant of the propertyExample, merging them with the current (parent) example
  let i = 0;
  const maxCombinations = 10;
  const mergedObj = {};
  for (const exampleKey in obj) {
    for (const propExampleKey in propExamples) {
      mergedObj[`example-${i}`] = {
        ...obj[exampleKey]
      };
      mergedObj[`example-${i}`][propertyName] = propExamples[propExampleKey];
      i++;
      if (i >= maxCombinations) {
        break;
      }
    }
    if (i >= maxCombinations) {
      break;
    }
  }
  return mergedObj;
}

/* For changing JSON-Schema to a Sample Object, as per the schema (to generate examples based on schema) */
function schemaToSampleObj(schema, config = {}) {
  let obj = {};
  if (!schema) {
    return;
  }
  if (schema.allOf) {
    var _schema$allOf$, _schema$allOf$2;
    const objWithAllProps = {};
    if (schema.allOf.length === 1 && !((_schema$allOf$ = schema.allOf[0]) !== null && _schema$allOf$ !== void 0 && _schema$allOf$.properties) && !((_schema$allOf$2 = schema.allOf[0]) !== null && _schema$allOf$2 !== void 0 && _schema$allOf$2.items)) {
      // If allOf has single item and the type is not an object or array, then its a primitive
      if (schema.allOf[0].$ref) {
        return '{  }';
      }
      if (schema.allOf[0].readOnly && config.includeReadOnly) {
        const tempSchema = schema.allOf[0];
        return getSampleValueByType(tempSchema);
      }
      return;
    }
    schema.allOf.forEach(v => {
      if (v.type === 'object' || v.properties || v.allOf || v.anyOf || v.oneOf) {
        const partialObj = schemaToSampleObj(v, config);
        Object.assign(objWithAllProps, partialObj);
      } else if (v.type === 'array' || v.items) {
        const partialObj = [schemaToSampleObj(v, config)];
        Object.assign(objWithAllProps, partialObj);
      } else if (v.type) {
        const prop = `prop${Object.keys(objWithAllProps).length}`;
        objWithAllProps[prop] = getSampleValueByType(v);
      } else {
        return '';
      }
    });
    obj = objWithAllProps;
  } else if (schema.oneOf) {
    // 1. First create example with scheme.properties
    const objWithSchemaProps = {};
    if (schema.properties) {
      for (const propertyName in schema.properties) {
        var _schema$properties$pr;
        if (schema.properties[propertyName].properties || (_schema$properties$pr = schema.properties[propertyName].properties) !== null && _schema$properties$pr !== void 0 && _schema$properties$pr.items) {
          objWithSchemaProps[propertyName] = schemaToSampleObj(schema.properties[propertyName], config);
        } else {
          objWithSchemaProps[propertyName] = getSampleValueByType(schema.properties[propertyName]);
        }
      }
    }
    if (schema.oneOf.length > 0) {
      /*
      oneOf:
        - type: object
          properties:
            option1_PropA:
              type: string
            option1_PropB:
              type: string
        - type: object
          properties:
            option2_PropX:
              type: string
      properties:
        prop1:
          type: string
        prop2:
          type: string
          minLength: 10
       The aboove Schem should generate the following 2 examples
       Example-1
      {
        prop1: 'string',
        prop2: 'AAAAAAAAAA',       <-- min-length 10
        option1_PropA: 'string',
        option1_PropB: 'string'
      }
       Example-2
      {
        prop1: 'string',
        prop2: 'AAAAAAAAAA',       <-- min-length 10
        option2_PropX: 'string'
      }
      */
      let i = 0;
      // Merge all examples of each oneOf-schema
      for (const key in schema.oneOf) {
        const oneOfSamples = schemaToSampleObj(schema.oneOf[key], config);
        for (const sampleKey in oneOfSamples) {
          // 2. In the final example include a one-of item along with properties
          let finalExample;
          if (Object.keys(objWithSchemaProps).length > 0) {
            if (oneOfSamples[sampleKey] === null || typeof oneOfSamples[sampleKey] !== 'object') {
              // This doesn't really make sense since every oneOf schema _should_ be an object if there are common properties, so we'll skip this
              continue;
            } else {
              finalExample = Object.assign(oneOfSamples[sampleKey], objWithSchemaProps);
            }
          } else {
            finalExample = oneOfSamples[sampleKey];
          }
          obj[`example-${i}`] = finalExample;
          addSchemaInfoToExample(schema.oneOf[key], obj[`example-${i}`]);
          i++;
        }
      }
    }
  } else if (schema.anyOf) {
    // First generate values for regular properties
    let commonObj;
    if (schema.type === 'object' || schema.properties) {
      commonObj = {
        'example-0': {}
      };
      for (const propertyName in schema.properties) {
        if (schema.example) {
          commonObj = schema;
          break;
        }
        if (schema.properties[propertyName].deprecated && !config.includeDeprecated) {
          continue;
        }
        if (schema.properties[propertyName].readOnly && !config.includeReadOnly) {
          continue;
        }
        if (schema.properties[propertyName].writeOnly && !config.includeWriteOnly) {
          continue;
        }
        commonObj = mergePropertyExamples(commonObj, propertyName, schemaToSampleObj(schema.properties[propertyName], config));
      }
    }

    // Combine every variant of the regular properties with every variant of the anyOf samples
    let i = 0;
    for (const key in schema.anyOf) {
      const anyOfSamples = schemaToSampleObj(schema.anyOf[key], config);
      for (const sampleKey in anyOfSamples) {
        if (typeof commonObj !== 'undefined') {
          for (const commonKey in commonObj) {
            obj[`example-${i}`] = {
              ...commonObj[commonKey],
              ...anyOfSamples[sampleKey]
            };
          }
        } else {
          obj[`example-${i}`] = anyOfSamples[sampleKey];
        }
        addSchemaInfoToExample(schema.anyOf[key], obj[`example-${i}`]);
        i++;
      }
    }
  } else if (schema.type === 'object' || schema.properties) {
    obj['example-0'] = {};
    addSchemaInfoToExample(schema, obj['example-0']);
    if (schema.example) {
      obj['example-0'] = schema.example;
    } else {
      for (const propertyName in schema.properties) {
        var _schema$properties$pr2, _schema$properties$pr3, _schema$properties$pr4, _schema$properties$pr5, _schema$properties$pr6;
        if ((_schema$properties$pr2 = schema.properties[propertyName]) !== null && _schema$properties$pr2 !== void 0 && _schema$properties$pr2.deprecated && !config.includeDeprecated) {
          continue;
        }
        if ((_schema$properties$pr3 = schema.properties[propertyName]) !== null && _schema$properties$pr3 !== void 0 && _schema$properties$pr3.readOnly && !config.includeReadOnly) {
          continue;
        }
        if ((_schema$properties$pr4 = schema.properties[propertyName]) !== null && _schema$properties$pr4 !== void 0 && _schema$properties$pr4.writeOnly && !config.includeWriteOnly) {
          continue;
        }
        if (((_schema$properties$pr5 = schema.properties[propertyName]) === null || _schema$properties$pr5 === void 0 ? void 0 : _schema$properties$pr5.type) === 'array' || (_schema$properties$pr6 = schema.properties[propertyName]) !== null && _schema$properties$pr6 !== void 0 && _schema$properties$pr6.items) {
          var _schema$properties$pr7, _schema$properties$pr8;
          if (schema.properties[propertyName].example) {
            addPropertyExampleToObjectExamples(schema.properties[propertyName].example, obj, propertyName);
          } else if ((_schema$properties$pr7 = schema.properties[propertyName]) !== null && _schema$properties$pr7 !== void 0 && (_schema$properties$pr8 = _schema$properties$pr7.items) !== null && _schema$properties$pr8 !== void 0 && _schema$properties$pr8.example) {
            // schemas and properties support single example but not multiple examples.
            addPropertyExampleToObjectExamples([schema.properties[propertyName].items.example], obj, propertyName);
          } else {
            const itemSamples = schemaToSampleObj(schema.properties[propertyName].items, config);
            if (config.useXmlTagForProp) {
              var _schema$properties$pr9, _schema$properties$pr10;
              const xmlTagName = ((_schema$properties$pr9 = schema.properties[propertyName].xml) === null || _schema$properties$pr9 === void 0 ? void 0 : _schema$properties$pr9.name) || propertyName;
              if ((_schema$properties$pr10 = schema.properties[propertyName].xml) !== null && _schema$properties$pr10 !== void 0 && _schema$properties$pr10.wrapped) {
                const wrappedItemSample = JSON.parse(`{ "${xmlTagName}" : { "${xmlTagName}" : ${JSON.stringify(itemSamples['example-0'])} } }`);
                obj = mergePropertyExamples(obj, xmlTagName, wrappedItemSample);
              } else {
                obj = mergePropertyExamples(obj, xmlTagName, itemSamples);
              }
            } else {
              const arraySamples = [];
              for (const key in itemSamples) {
                arraySamples[key] = [itemSamples[key]];
              }
              obj = mergePropertyExamples(obj, propertyName, arraySamples);
            }
          }
          continue;
        }
        obj = mergePropertyExamples(obj, propertyName, schemaToSampleObj(schema.properties[propertyName], config));
      }
    }
  } else if (schema.type === 'array' || schema.items) {
    if (schema.items || schema.example) {
      var _schema$items3;
      if (schema.example) {
        obj['example-0'] = schema.example;
      } else if ((_schema$items3 = schema.items) !== null && _schema$items3 !== void 0 && _schema$items3.example) {
        // schemas and properties support single example but not multiple examples.
        obj['example-0'] = [schema.items.example];
      } else {
        const samples = schemaToSampleObj(schema.items, config);
        let i = 0;
        for (const key in samples) {
          obj[`example-${i}`] = [samples[key]];
          addSchemaInfoToExample(schema.items, obj[`example-${i}`]);
          i++;
        }
      }
    } else {
      obj['example-0'] = [];
    }
  } else {
    return {
      'example-0': getSampleValueByType(schema)
    };
  }
  return obj;
}
function generateMarkdownForArrayAndObjectDescription(schema, level = 0) {
  var _schema$items4;
  let markdown = (schema.description || schema.title) && (schema.minItems || schema.maxItems) ? '<span class="descr-expand-toggle">➔</span>' : '';
  if (schema.title) {
    if (schema.description) {
      markdown = `${markdown} <b>${schema.title}:</b> ${schema.description}<br/>`;
    } else {
      markdown = `${markdown} ${schema.title}<br/>`;
    }
  } else if (schema.description) {
    markdown = `${markdown} ${schema.description}<br/>`;
  }
  if (schema.minItems) {
    markdown = `${markdown} <b>Min Items:</b> ${schema.minItems}`;
  }
  if (schema.maxItems) {
    markdown = `${markdown} <b>Max Items:</b> ${schema.maxItems}`;
  }
  if (level > 0 && (_schema$items4 = schema.items) !== null && _schema$items4 !== void 0 && _schema$items4.description) {
    let itemsMarkdown = '';
    if (schema.items.minProperties) {
      itemsMarkdown = `<b>Min Properties:</b> ${schema.items.minProperties}`;
    }
    if (schema.items.maxProperties) {
      itemsMarkdown = `${itemsMarkdown} <b>Max Properties:</b> ${schema.items.maxProperties}`;
    }
    markdown = `${markdown} ⮕ ${itemsMarkdown} [ ${schema.items.description} ] `;
  }
  return markdown;
}
/**
 * For changing OpenAPI-Schema to an Object Notation,
 * This Object would further be an input to UI Components to generate an Object-Tree
 * @param {object} schema - Schema object from OpenAPI spec
 * @param {object} obj - recursivly pass this object to generate object notation
 * @param {number} level - recursion level
 * @param {string} suffix - used for suffixing property names to avoid duplicate props during object composion
 */
function schemaInObjectNotation(schema, obj, level = 0, suffix = '') {
  if (!schema) {
    return;
  }
  if (schema.allOf) {
    const objWithAllProps = {};
    if (schema.allOf.length === 1 && !schema.allOf[0].properties && !schema.allOf[0].items) {
      // If allOf has single item and the type is not an object or array, then its a primitive
      const tempSchema = schema.allOf[0];
      return `${getTypeInfo(tempSchema).html}`;
    }
    // If allOf is an array of multiple elements, then all the keys makes a single object
    schema.allOf.map((v, i) => {
      if (v.type === 'object' || v.properties || v.allOf || v.anyOf || v.oneOf) {
        const propSuffix = (v.anyOf || v.oneOf) && i > 0 ? i : '';
        const partialObj = schemaInObjectNotation(v, {}, level + 1, propSuffix);
        Object.assign(objWithAllProps, partialObj);
      } else if (v.type === 'array' || v.items) {
        const partialObj = schemaInObjectNotation(v, {}, level + 1);
        Object.assign(objWithAllProps, partialObj);
      } else if (v.type) {
        const prop = `prop${Object.keys(objWithAllProps).length}`;
        const typeObj = getTypeInfo(v);
        objWithAllProps[prop] = `${typeObj.html}`;
      } else {
        return '';
      }
    });
    obj = objWithAllProps;
  } else if (schema.anyOf || schema.oneOf) {
    obj['::description'] = schema.description || '';
    // 1. First iterate the regular properties
    if (schema.type === 'object' || schema.properties) {
      obj['::description'] = schema.description || '';
      obj['::type'] = 'object';
      // obj['::deprecated'] = schema.deprecated || false;
      for (const key in schema.properties) {
        if (schema.required && schema.required.includes(key)) {
          obj[`${key}*`] = schemaInObjectNotation(schema.properties[key], {}, level + 1);
        } else {
          obj[key] = schemaInObjectNotation(schema.properties[key], {}, level + 1);
        }
      }
    }
    // 2. Then show allof/anyof objects
    const objWithAnyOfProps = {};
    const xxxOf = schema.anyOf ? 'anyOf' : 'oneOf';
    schema[xxxOf].forEach((v, index) => {
      if (v.type === 'object' || v.properties || v.allOf || v.anyOf || v.oneOf) {
        const partialObj = schemaInObjectNotation(v, {});
        objWithAnyOfProps[`::OPTION~${index + 1}${v.title ? `~${v.title}` : ''}`] = partialObj;
        objWithAnyOfProps[`::OPTION~${index + 1}${v.title ? `~${v.title}` : ''}`]['::readwrite'] = ''; // xxx-options cannot be read or write only
        objWithAnyOfProps['::type'] = 'xxx-of-option';
      } else if (v.type === 'array' || v.items) {
        // This else-if block never seems to get executed
        const partialObj = schemaInObjectNotation(v, {});
        objWithAnyOfProps[`::OPTION~${index + 1}${v.title ? `~${v.title}` : ''}`] = partialObj;
        objWithAnyOfProps[`::OPTION~${index + 1}${v.title ? `~${v.title}` : ''}`]['::readwrite'] = ''; // xxx-options cannot be read or write only
        objWithAnyOfProps['::type'] = 'xxx-of-array';
      } else {
        const prop = `::OPTION~${index + 1}${v.title ? `~${v.title}` : ''}`;
        objWithAnyOfProps[prop] = `${getTypeInfo(v).html}`;
        objWithAnyOfProps['::type'] = 'xxx-of-option';
      }
    });
    obj[schema.anyOf ? `::ANY~OF ${suffix}` : `::ONE~OF ${suffix}`] = objWithAnyOfProps;
    // obj['::type'] = 'object';
    obj['::type'] = 'object';
  } else if (Array.isArray(schema.type)) {
    // When a property has multiple types, then check further if any of the types are array or object, if yes then modify the schema using one-of
    // Clone the schema - as it will be modified to replace multi-data-types with one-of;
    const subSchema = JSON.parse(JSON.stringify(schema));
    const primitiveType = [];
    const complexTypes = [];
    subSchema.type.forEach(v => {
      var _subSchema$items, _subSchema$items2;
      if (v.match(/integer|number|string|null|boolean/g)) {
        primitiveType.push(v);
      } else if (v === 'array' && typeof ((_subSchema$items = subSchema.items) === null || _subSchema$items === void 0 ? void 0 : _subSchema$items.type) === 'string' && (_subSchema$items2 = subSchema.items) !== null && _subSchema$items2 !== void 0 && _subSchema$items2.type.match(/integer|number|string|null|boolean/g)) {
        // Array with primitive types should also be treated as primitive type
        if (subSchema.items.type === 'string' && subSchema.items.format) {
          primitiveType.push(`[${subSchema.items.format}]`);
        } else {
          primitiveType.push(`[${subSchema.items.type}]`);
        }
      } else {
        complexTypes.push(v);
      }
    });
    let multiPrimitiveTypes;
    if (primitiveType.length > 0) {
      subSchema.type = primitiveType.join(primitiveType.length === 2 ? ' or ' : '┃');
      multiPrimitiveTypes = getTypeInfo(subSchema);
      if (complexTypes.length === 0) {
        var _multiPrimitiveTypes;
        return `${((_multiPrimitiveTypes = multiPrimitiveTypes) === null || _multiPrimitiveTypes === void 0 ? void 0 : _multiPrimitiveTypes.html) || ''}`;
      }
    }
    if (complexTypes.length > 0) {
      var _multiPrimitiveTypes2;
      obj['::type'] = 'object';
      const multiTypeOptions = {
        '::type': 'xxx-of-option'
      };

      // Generate ONE-OF options for complexTypes
      complexTypes.forEach((v, i) => {
        if (v === 'null') {
          multiTypeOptions[`::OPTION~${i + 1}`] = 'NULL~|~~|~~|~~|~~|~~|~~|~~|~';
        } else if ('integer, number, string, boolean,'.includes(`${v},`)) {
          subSchema.type = Array.isArray(v) ? v.join('┃') : v;
          const primitiveTypeInfo = getTypeInfo(subSchema);
          multiTypeOptions[`::OPTION~${i + 1}`] = primitiveTypeInfo.html;
        } else if (v === 'object') {
          // If object type iterate all the properties and create an object-type-option
          const objTypeOption = {
            '::title': schema.title || '',
            '::description': schema.description || '',
            '::type': 'object',
            '::deprecated': schema.deprecated || false
          };
          for (const key in schema.properties) {
            if (schema.required && schema.required.includes(key)) {
              objTypeOption[`${key}*`] = schemaInObjectNotation(schema.properties[key], {}, level + 1);
            } else {
              objTypeOption[key] = schemaInObjectNotation(schema.properties[key], {}, level + 1);
            }
          }
          multiTypeOptions[`::OPTION~${i + 1}`] = objTypeOption;
        } else if (v === 'array') {
          multiTypeOptions[`::OPTION~${i + 1}`] = {
            '::title': schema.title || '',
            '::description': schema.description || '',
            '::type': 'array',
            '::props': schemaInObjectNotation(schema.items, {}, level + 1)
          };
        }
      });
      multiTypeOptions[`::OPTION~${complexTypes.length + 1}`] = ((_multiPrimitiveTypes2 = multiPrimitiveTypes) === null || _multiPrimitiveTypes2 === void 0 ? void 0 : _multiPrimitiveTypes2.html) || '';
      obj['::ONE~OF'] = multiTypeOptions;
    }
  } else if (schema.type === 'object' || schema.properties) {
    // If Object
    obj['::title'] = schema.title || '';
    obj['::description'] = generateMarkdownForArrayAndObjectDescription(schema, level);
    obj['::type'] = 'object';
    if (Array.isArray(schema.type) && schema.type.includes('null') || schema.nullable) {
      obj['::dataTypeLabel'] = 'object or null';
      obj['::nullable'] = true;
    }
    obj['::deprecated'] = schema.deprecated || false;
    obj['::readwrite'] = schema.readOnly ? 'readonly' : schema.writeOnly ? 'writeonly' : '';
    for (const key in schema.properties) {
      if (schema.required && schema.required.includes(key)) {
        obj[`${key}*`] = schemaInObjectNotation(schema.properties[key], {}, level + 1);
      } else {
        obj[key] = schemaInObjectNotation(schema.properties[key], {}, level + 1);
      }
    }
    for (const key in schema.patternProperties) {
      obj[`[pattern: ${key}]`] = schemaInObjectNotation(schema.patternProperties[key], obj, level + 1);
    }
    if (schema.additionalProperties) {
      obj['[any-key]'] = schemaInObjectNotation(schema.additionalProperties, {});
    }
  } else if (schema.type === 'array' || schema.items) {
    var _schema$items5;
    // If Array
    obj['::title'] = schema.title || '';
    obj['::description'] = generateMarkdownForArrayAndObjectDescription(schema, level);
    obj['::type'] = 'array';
    if (Array.isArray(schema.type) && schema.type.includes('null') || schema.nullable) {
      obj['::dataTypeLabel'] = 'array or null';
      obj['::nullable'] = true;
    }
    obj['::deprecated'] = schema.deprecated || false;
    obj['::readwrite'] = schema.readOnly ? 'readonly' : schema.writeOnly ? 'writeonly' : '';
    if ((_schema$items5 = schema.items) !== null && _schema$items5 !== void 0 && _schema$items5.items) {
      obj['::array-type'] = schema.items.items.type;
    }
    obj['::props'] = schemaInObjectNotation(schema.items, {}, level + 1);
  } else {
    const typeObj = getTypeInfo(schema);
    if (typeObj !== null && typeObj !== void 0 && typeObj.html) {
      return `${typeObj.html}`;
    }
    return '';
  }
  return obj;
}

/* Create Example object */
function generateExample(schema, mimeType, examples = '', example = '', includeReadOnly = true, includeWriteOnly = true, outputType = 'json', includeGeneratedExample = false) {
  const finalExamples = [];
  // First check if examples is provided
  if (examples) {
    for (const eg in examples) {
      let egContent = '';
      let egFormat = 'json';
      if (mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('json')) {
        if (outputType === 'text') {
          egContent = typeof examples[eg].value === 'string' ? examples[eg].value : JSON.stringify(examples[eg].value, undefined, 2);
          egFormat = 'text';
        } else {
          egContent = examples[eg].value;
          if (typeof examples[eg].value === 'string') {
            try {
              // const fixedJsonString = examples[eg].value.replace((/([\w]+)(:)/g), '"$1"$2').replace((/'/g), '"');
              const fixedJsonString = examples[eg].value;
              egContent = JSON.parse(fixedJsonString);
              egFormat = 'json';
            } catch (err) {
              egFormat = 'text';
              egContent = examples[eg].value;
            }
          }
        }
      } else {
        egContent = examples[eg].value;
        egFormat = 'text';
      }
      finalExamples.push({
        exampleId: eg,
        exampleSummary: examples[eg].summary || eg,
        exampleDescription: examples[eg].description || '',
        exampleType: mimeType,
        exampleValue: egContent,
        exampleFormat: egFormat
      });
    }
  } else if (example) {
    let egContent = '';
    let egFormat = 'json';
    if (mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('json')) {
      if (outputType === 'text') {
        egContent = typeof example === 'string' ? example : JSON.stringify(example, undefined, 2);
        egFormat = 'text';
      } else if (typeof example === 'object') {
        egContent = example;
        egFormat = 'json';
      } else if (typeof example === 'string') {
        try {
          egContent = JSON.parse(example);
          egFormat = 'json';
        } catch (err) {
          egFormat = 'text';
          egContent = example;
        }
      }
    } else {
      egContent = example;
      egFormat = 'text';
    }
    finalExamples.push({
      exampleId: 'Example',
      exampleSummary: '',
      exampleDescription: '',
      exampleType: mimeType,
      exampleValue: egContent,
      exampleFormat: egFormat
    });
  }
  // If schema-level examples are not provided or includeGeneratedExample === true then generate one based on the schema field types
  if (finalExamples.length === 0 || includeGeneratedExample === true) {
    if (schema) {
      if (schema.example) {
        // Note: Deprecated: The 'example' property has been deprecated in 3.1.0 in favor of the JSON Schema 'examples' keyword
        finalExamples.push({
          exampleId: 'Example',
          exampleSummary: '',
          exampleDescription: '',
          exampleType: mimeType,
          exampleValue: schema.example,
          exampleFormat: mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('json') && typeof schema.example === 'object' ? 'json' : 'text'
        });
      } else if (mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('json') || mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('text') || mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('*/*') || mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('xml')) {
        let xmlRootStart = '';
        let xmlRootEnd = '';
        let exampleFormat = '';
        let exampleValue = '';
        if (mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('xml')) {
          var _schema$xml5, _schema$xml6;
          xmlRootStart = (_schema$xml5 = schema.xml) !== null && _schema$xml5 !== void 0 && _schema$xml5.name ? `<${schema.xml.name} ${schema.xml.namespace ? `xmlns="${schema.xml.namespace}"` : ''}>` : '<root>';
          xmlRootEnd = (_schema$xml6 = schema.xml) !== null && _schema$xml6 !== void 0 && _schema$xml6.name ? `</${schema.xml.name}>` : '</root>';
          exampleFormat = 'text';
        } else {
          exampleFormat = outputType;
        }
        const samples = schemaToSampleObj(schema, {
          includeReadOnly,
          includeWriteOnly,
          deprecated: true,
          useXmlTagForProp: mimeType === null || mimeType === void 0 ? void 0 : mimeType.toLowerCase().includes('xml')
        });
        let i = 0;
        for (const samplesKey in samples) {
          if (!samples[samplesKey]) {
            continue;
          }
          const summary = samples[samplesKey]['::TITLE'] || `Example ${++i}`;
          const description = samples[samplesKey]['::DESCRIPTION'] || '';
          if (mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('xml')) {
            exampleValue = `<?xml version="1.0" encoding="UTF-8"?>\n${xmlRootStart}${json2xml(samples[samplesKey], 1)}\n${xmlRootEnd}`;
          } else {
            removeTitlesAndDescriptions(samples[samplesKey]);
            exampleValue = outputType === 'text' ? JSON.stringify(samples[samplesKey], null, 2) : samples[samplesKey];
          }
          finalExamples.push({
            exampleId: samplesKey,
            exampleSummary: summary,
            exampleDescription: description,
            exampleType: mimeType,
            exampleFormat,
            exampleValue
          });
        }
      } else if (mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('jose')) {
        finalExamples.push({
          exampleId: 'Example',
          exampleSummary: 'Base64 Encoded',
          exampleDescription: '',
          exampleType: mimeType,
          exampleValue: schema.pattern || 'bXJpbg==',
          exampleFormat: 'text'
        });
      } else {
        finalExamples.push({
          exampleId: 'Example',
          exampleSummary: '',
          exampleDescription: '',
          exampleType: mimeType,
          exampleValue: '',
          exampleFormat: 'text'
        });
      }
    } else {
      // No Example or Schema provided (should never reach here)
      finalExamples.push({
        exampleId: 'Example',
        exampleSummary: '',
        exampleDescription: '',
        exampleType: mimeType,
        exampleValue: '',
        exampleFormat: 'text'
      });
    }
  }
  return finalExamples;
}
function getSerializeStyleForContentType(contentType) {
  if (contentType === 'application/json') {
    return 'json';
  }
  if (contentType === 'application/xml') {
    return 'xml';
  }
  return null;
}
function getSchemaFromParam(param) {
  if (param.schema) {
    return [param.schema, null, null];
  }
  if (param.content) {
    // we gonna use the first content-encoding
    for (const contentType of Object.keys(param.content)) {
      if (param.content[contentType].schema) {
        return [param.content[contentType].schema, getSerializeStyleForContentType(contentType), param.content[contentType]];
      }
    }
  }
  return [null, null, null];
}
;// CONCATENATED MODULE: ./src/components/json-tree.js






class JsonTree extends lit_element_s {
  static get properties() {
    return {
      data: {
        type: Object
      },
      renderStyle: {
        type: String,
        attribute: 'render-style'
      }
    };
  }
  static get styles() {
    return [font_styles, border_styles, input_styles, i`
      :host{
        display:flex;
      }
      :where(button, input[type="checkbox"], [tabindex="0"]):focus-visible { box-shadow: var(--focus-shadow); }
      :where(input[type="text"], input[type="password"], select, textarea):focus-visible { border-color: var(--primary-color); }
      .json-tree {
        position: relative;
        font-family: var(--font-mono);
        font-size: var(--font-size-small);
        display:inline-block;
        overflow:hidden;
        word-break: break-all;
        flex:1;
        line-height: calc(var(--font-size-small) + 6px);
        min-height: 40px;
        direction: ltr; 
        text-align: left;
      }

      .open-bracket {
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .close-bracket {
        border: 1px solid transparent;
        border-radius:3px;
        display:inline-block;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .open-bracket.expanded:hover ~ .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .open-bracket.expanded:hover ~ .close-bracket {
        color:var(--primary-color);
      }
      .inside-bracket {
        padding-left:12px;
        overflow: hidden;
        border-left:1px dotted var(--border-color);
      }
      .open-bracket.collapsed + .inside-bracket,
      .open-bracket.collapsed + .inside-bracket + .close-bracket {
        display:none;
      }

      .string{color:var(--green);}
      .number{color:var(--blue);}
      .null{color:var(--red);}
      .boolean{color:var(--purple);}
      .object{color:var(--fg)}
      .toolbar {
        position: absolute;
        top:5px;
        right:6px;
        display:flex;
        padding:2px;
        align-items: center;
      }`, custom_styles];
  }

  /* eslint-disable indent */
  render() {
    return lit_html_x`
      <div class = "json-tree"  @click='${e => {
      if (e.target.classList.contains('btn-copy')) {
        copyToClipboard(JSON.stringify(this.data, null, 2), e);
      } else {
        this.toggleExpand(e);
      }
    }}'>
        <div class='toolbar'> 
          <button class="toolbar-btn btn-copy" part="btn btn-fill btn-copy"> Copy </button>
        </div>
          ${this.generateTree(this.data, true)}
      </div>  
    `;
  }
  generateTree(data, isLast = false) {
    if (data === null) {
      return lit_html_x`<div class="null" style="display:inline;">null</div>`;
    }
    if (typeof data === 'object' && data instanceof Date === false) {
      const detailType = Array.isArray(data) ? 'array' : 'pure_object';
      if (Object.keys(data).length === 0) {
        return lit_html_x`${Array.isArray(data) ? '[ ],' : '{ },'}`;
      }
      return lit_html_x`
      <div class="open-bracket expanded ${detailType === 'array' ? 'array' : 'object'}" > ${detailType === 'array' ? '[' : '{'}</div>
      <div class="inside-bracket">
        ${Object.keys(data).map((key, i, a) => lit_html_x`
          <div class="item"> 
            ${detailType === 'pure_object' ? lit_html_x`"${key}":` : ''}
            ${this.generateTree(data[key], i === a.length - 1)}
          </div>`)}
      </div>
      <div class="close-bracket">${detailType === 'array' ? ']' : '}'}${isLast ? '' : ','}</div>
      `;
    }
    return typeof data === 'string' || data instanceof Date ? lit_html_x`<span class="${typeof data}">"${data}"</span>${isLast ? '' : ','}` : lit_html_x`<span class="${typeof data}">${data}</span>${isLast ? '' : ','}`;
  }
  /* eslint-enable indent */

  toggleExpand(e) {
    const openBracketEl = e.target;
    if (e.target.classList.contains('open-bracket')) {
      if (openBracketEl.classList.contains('expanded')) {
        openBracketEl.classList.replace('expanded', 'collapsed');
        e.target.innerHTML = e.target.classList.contains('array') ? '[...]' : '{...}';
      } else {
        openBracketEl.classList.replace('collapsed', 'expanded');
        e.target.innerHTML = e.target.classList.contains('array') ? '[' : '{';
      }
    }
  }
}
// Register the element with the browser
customElements.define('json-tree', JsonTree);
;// CONCATENATED MODULE: ./src/styles/schema-styles.js

/* harmony default export */ const schema_styles = (i`

*, *:before, *:after { box-sizing: border-box; }

.tr {
  display: flex;
  flex: none;
  width: 100%;
  box-sizing: content-box;
  border-bottom: 1px dotted transparent;
  transition: max-height 0.3s ease-out;
}
.td {
  display: block;
  flex: 0 0 auto;
}
.key {
  font-family: var(--font-mono);
  white-space: normal;
  word-break: break-all;
}

.collapsed-all-descr .key {
  overflow:hidden;
}
.expanded-all-descr .key-descr .descr-expand-toggle {
  display:none;
}

.key-descr .descr-expand-toggle {
  display:inline-block;
  user-select:none;
  color: var(--fg);
  cursor: pointer;
  transform: rotate(45deg);
  transition: transform .2s ease;
}

.expanded-descr .key-descr .descr-expand-toggle {
  transform: rotate(270deg)
}

.key-descr .descr-expand-toggle:hover {
  color: var(--primary-color);
}

.expanded-descr .more-content { display:none; }

.key-descr {
  font-family:var(--font-regular);
  color:var(--light-fg);
  flex-shrink: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  display: none;
}
.expanded-descr .key-descr{
  max-height:auto;
  overflow:hidden;
  display: none;
}

.xxx-of-key {
  font-size: calc(var(--font-size-small) - 2px); 
  font-weight:bold; 
  background-color:var(--primary-color); 
  color:var(--primary-color-invert); 
  border-radius:2px;
  line-height:calc(var(--font-size-small) + 6px);
  padding:0px 5px; 
  margin-bottom:1px; 
  display:inline-block;
}

.xxx-of-descr {
  font-family: var(--font-regular);
  color: var(--primary-color);
  font-size: calc(var(--font-size-small) - 1px);
  margin-left: 2px;
}

.stri, .string, .uri, .url, .byte, .bina, .date, .pass, .ipv4, .ipv4, .uuid, .emai, .host {color:var(--green);}
.inte, .numb, .number, .int6, .int3, .floa, .doub, .deci .blue {color:var(--blue);}
.null {color:var(--red);}
.bool, .boolean{color:var(--orange)}
.enum {color:var(--purple)}
.cons {color:var(--purple)}
.recu {color:var(--brown)}
.toolbar {
  display:flex;
  width:100%;
  padding: 2px 0;
  color:var(--primary-color);
}
.toolbar-item {
  cursor:pointer;
  padding:5px 0;
  margin:0 2px;
}
.schema-root-type {
  cursor:auto;
  color:var(--fg2);
  font-weight: bold;
  text-transform: uppercase;
}
.toolbar-item:first-of-type { margin:0 2px 0 0;}

@media only screen and (min-width: 500px) {
  .key-descr {
    display: block;
  }
  .expanded-descr .key-descr{
    display: block;
  }
}
`);
;// CONCATENATED MODULE: ./src/components/schema-tree.js

 // eslint-disable-line import/extensions





class SchemaTree extends lit_element_s {
  static get properties() {
    return {
      data: {
        type: Object
      },
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      allowSchemaDescriptionExpandToggle: {
        type: String,
        attribute: 'allow-schema-description-expand-toggle'
      },
      schemaHideReadOnly: {
        type: String,
        attribute: 'schema-hide-read-only'
      },
      schemaHideWriteOnly: {
        type: String,
        attribute: 'schema-hide-write-only'
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.schemaExpandLevel || this.schemaExpandLevel < 1) {
      this.schemaExpandLevel = 99999;
    }
    if (!this.schemaDescriptionExpanded || !'true false'.includes(this.schemaDescriptionExpanded)) {
      this.schemaDescriptionExpanded = 'false';
    }
    if (!this.schemaHideReadOnly || !'true false'.includes(this.schemaHideReadOnly)) {
      this.schemaHideReadOnly = 'true';
    }
    if (!this.schemaHideWriteOnly || !'true false'.includes(this.schemaHideWriteOnly)) {
      this.schemaHideWriteOnly = 'true';
    }
  }
  static get styles() {
    return [font_styles, schema_styles, border_styles, i`
      .tree {
        font-size:var(--font-size-small);
        text-align: left;
        direction: ltr;
        line-height:calc(var(--font-size-small) + 6px);
      }
      .tree .tr:hover{
        background-color:var(--hover-color);
      }
      .collapsed-all-descr .tr:not(.expanded-descr) {
        overflow: hidden;
        max-height:calc(var(--font-size-small) + 8px);
      }
      .tree .key {
        max-width: 300px;
      }
      .key.deprecated .key-label {
        color: var(--red);
      }
      .tr.expanded:hover > .td.key > .open-bracket {
        color: var(--primary-color);
      }
      .tr.expanded:hover + .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .tr.expanded:hover + .inside-bracket + .close-bracket {
        color: var(--primary-color);
      }
      .inside-bracket.xxx-of-option {
        border-left: 1px solid transparent;
      }
      .open-bracket{
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .close-bracket{
        display:inline-block;
        font-family: var(--font-mono);
      }
      .tr.collapsed + .inside-bracket,
      .tr.collapsed + .inside-bracket + .close-bracket{
        overflow: hidden;
        display:none;
      }
      .inside-bracket.object,
      .inside-bracket.array {
        border-left: 1px dotted var(--border-color);
      }`, custom_styles];
  }

  /* eslint-disable indent */
  render() {
    var _this$data, _this$data2, _this$data3;
    return lit_html_x`
      <div class="tree ${this.schemaDescriptionExpanded === 'true' ? 'expanded-all-descr' : 'collapsed-all-descr'}" @click="${e => this.handleAllEvents(e)}">
        <div class="toolbar">
          <div class="toolbar-item schema-root-type ${((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data['::type']) || ''} "> ${((_this$data2 = this.data) === null || _this$data2 === void 0 ? void 0 : _this$data2['::type']) || ''} </div>
          ${this.allowSchemaDescriptionExpandToggle === 'true' ? lit_html_x`
              <div style="flex:1"></div>
              <div part="schema-toolbar-item schema-multiline-toggle" class='toolbar-item schema-multiline-toggle'> 
                ${this.schemaDescriptionExpanded === 'true' ? 'Single line description' : 'Multiline description'}
              </div>` : ''}
        </div>
        <span part="schema-description" class='m-markdown'> ${unsafe_html_o(marked(((_this$data3 = this.data) === null || _this$data3 === void 0 ? void 0 : _this$data3['::description']) || ''))}</span>
        ${this.data ? lit_html_x`
            ${this.generateTree(this.data['::type'] === 'array' ? this.data['::props'] : this.data, this.data['::type'], this.data['::array-type'] || '')}` : lit_html_x`<span class='mono-font' style='color:var(--red)'> Schema not found </span>`}
      </div>  
    `;
  }
  generateTree(data, dataType = 'object', arrayType = '', key = '', description = '', schemaLevel = 0, indentLevel = 0, readOrWrite = '') {
    var _data$Type;
    if (this.schemaHideReadOnly === 'true') {
      if (dataType === 'array') {
        if (readOrWrite === 'readonly') {
          return;
        }
      }
      if ((data === null || data === void 0 ? void 0 : data['::readwrite']) === 'readonly') {
        return;
      }
    }
    if (this.schemaHideWriteOnly === 'true') {
      if (dataType === 'array') {
        if (readOrWrite === 'writeonly') {
          return;
        }
      }
      if ((data === null || data === void 0 ? void 0 : data['::readwrite']) === 'writeonly') {
        return;
      }
    }
    if (!data) {
      return lit_html_x`<div class="null" style="display:inline;">
        <span class="key-label xxx-of-key"> ${key.replace('::OPTION~', '')}</span>
        ${dataType === 'array' ? lit_html_x`<span class='mono-font'> [ ] </span>` : dataType === 'object' ? lit_html_x`<span class='mono-font'> { } </span>` : lit_html_x`<span class='mono-font'> schema undefined </span>`}
      </div>`;
    }
    if (Object.keys(data).length === 0) {
      return lit_html_x`<span class="key object">${key}:{ }</span>`;
    }
    let keyLabel = '';
    let keyDescr = '';
    if (key.startsWith('::ONE~OF') || key.startsWith('::ANY~OF')) {
      keyLabel = key.replace('::', '').replace('~', ' ');
    } else if (key.startsWith('::OPTION')) {
      const parts = key.split('~');
      [, keyLabel, keyDescr] = parts;
    } else {
      keyLabel = key;
    }
    const leftPadding = 12;
    const minFieldColWidth = 400 - indentLevel * leftPadding;
    let openBracket = '';
    let closeBracket = '';
    const newSchemaLevel = (_data$Type = data['::type']) !== null && _data$Type !== void 0 && _data$Type.startsWith('xxx-of') ? schemaLevel : schemaLevel + 1;
    // const newIndentLevel = dataType === 'xxx-of-option' || data['::type'] === 'xxx-of-option' ? indentLevel : (indentLevel + 1);
    const newIndentLevel = dataType === 'xxx-of-option' || data['::type'] === 'xxx-of-option' || key.startsWith('::OPTION') ? indentLevel : indentLevel + 1;
    if (data['::type'] === 'object') {
      if (dataType === 'array') {
        if (schemaLevel < this.schemaExpandLevel) {
          openBracket = lit_html_x`<span class="open-bracket array-of-object" >[{</span>`;
        } else {
          openBracket = lit_html_x`<span class="open-bracket array-of-object">[{...}]</span>`;
        }
        closeBracket = '}]';
      } else {
        if (schemaLevel < this.schemaExpandLevel) {
          openBracket = lit_html_x`<span class="open-bracket object">${data['::nullable'] ? 'null┃' : ''}{</span>`;
        } else {
          openBracket = lit_html_x`<span class="open-bracket object">${data['::nullable'] ? 'null┃' : ''}{...}</span>`;
        }
        closeBracket = '}';
      }
    } else if (data['::type'] === 'array') {
      if (dataType === 'array') {
        const arrType = arrayType !== 'object' ? arrayType : '';
        if (schemaLevel < this.schemaExpandLevel) {
          openBracket = lit_html_x`<span class="open-bracket array-of-array" data-array-type="${arrType}">[[ ${arrType} </span>`;
        } else {
          openBracket = lit_html_x`<span class="open-bracket array-of-array"  data-array-type="${arrType}">[[...]]</span>`;
        }
        closeBracket = ']]';
      } else {
        if (schemaLevel < this.schemaExpandLevel) {
          openBracket = lit_html_x`<span class="open-bracket array">[</span>`;
        } else {
          openBracket = lit_html_x`<span class="open-bracket array">[...]</span>`;
        }
        closeBracket = ']';
      }
    }
    if (typeof data === 'object') {
      var _data$Type2;
      return lit_html_x`
        <div class="tr ${schemaLevel < this.schemaExpandLevel || (_data$Type2 = data['::type']) !== null && _data$Type2 !== void 0 && _data$Type2.startsWith('xxx-of') ? 'expanded' : 'collapsed'} ${data['::type'] || 'no-type-info'}${data['::nullable'] ? ' nullable' : ''}" title="${data['::deprecated'] ? 'Deprecated' : ''}">
          <div class="td key ${data['::deprecated'] ? 'deprecated' : ''}" style='min-width:${minFieldColWidth}px'>
            ${data['::type'] === 'xxx-of-option' || data['::type'] === 'xxx-of-array' || key.startsWith('::OPTION') ? lit_html_x`<span class='key-label xxx-of-key'> ${keyLabel}</span><span class="xxx-of-descr">${keyDescr}</span>` : keyLabel === '::props' || keyLabel === '::ARRAY~OF' ? '' : schemaLevel > 0 ? lit_html_x`<span class="key-label" title="${readOrWrite === 'readonly' ? 'Read-Only' : readOrWrite === 'writeonly' ? 'Write-Only' : ''}">
                      ${data['::deprecated'] ? '✗' : ''}
                      ${keyLabel.replace(/\*$/, '')}${keyLabel.endsWith('*') ? lit_html_x`<span style="color:var(--red)">*</span>` : ''}${readOrWrite === 'readonly' ? lit_html_x` 🆁` : readOrWrite === 'writeonly' ? lit_html_x` 🆆` : readOrWrite}:
                    </span>` : ''}
            ${openBracket}
          </div>
          <div class='td key-descr m-markdown-small'>${unsafe_html_o(marked(description || ''))}</div>
        </div>
        <div class='inside-bracket ${data['::type'] || 'no-type-info'}' style='padding-left:${data['::type'] === 'xxx-of-option' || data['::type'] === 'xxx-of-array' ? 0 : leftPadding}px;'>
          ${Array.isArray(data) && data[0] ? lit_html_x`${this.generateTree(data[0], 'xxx-of-option', '', '::ARRAY~OF', '', newSchemaLevel, newIndentLevel, data[0]['::readwrite'])}` : lit_html_x`
              ${Object.keys(data).map(dataKey => {
        var _data$dataKey;
        return lit_html_x`
                ${['::title', '::description', '::type', '::props', '::deprecated', '::array-type', '::readwrite', '::dataTypeLabel', '::nullable'].includes(dataKey) ? data[dataKey]['::type'] === 'array' || data[dataKey]['::type'] === 'object' ? lit_html_x`${this.generateTree(data[dataKey]['::type'] === 'array' ? data[dataKey]['::props'] : data[dataKey], data[dataKey]['::type'], data[dataKey]['::array-type'] || '', dataKey, data[dataKey]['::description'], newSchemaLevel, newIndentLevel, data[dataKey]['::readwrite'] ? data[dataKey]['::readwrite'] : '')}` : '' : lit_html_x`${this.generateTree(data[dataKey]['::type'] === 'array' ? data[dataKey]['::props'] : data[dataKey], data[dataKey]['::type'], data[dataKey]['::array-type'] || '', dataKey, ((_data$dataKey = data[dataKey]) === null || _data$dataKey === void 0 ? void 0 : _data$dataKey['::description']) || '', newSchemaLevel, newIndentLevel, data[dataKey]['::readwrite'] ? data[dataKey]['::readwrite'] : '')}`}
              `;
      })}
            `}
        </div>
        ${data['::type'] && data['::type'].includes('xxx-of') ? '' : lit_html_x`<div class='close-bracket'> ${closeBracket} </div>`}
      `;
    }

    // For Primitive types and array of Primitives
    // eslint-disable-next-line no-unused-vars
    const [type, primitiveReadOrWrite, constraint, defaultValue, allowedValues, pattern, schemaDescription, schemaTitle, deprecated] = data.split('~|~');
    if (primitiveReadOrWrite === '🆁' && this.schemaHideReadOnly === 'true') {
      return;
    }
    if (primitiveReadOrWrite === '🆆' && this.schemaHideWriteOnly === 'true') {
      return;
    }
    const dataTypeCss = type.replace(/┃.*/g, '').replace(/[^a-zA-Z0-9+]/g, '').substring(0, 4).toLowerCase();
    const descrExpander = `${constraint || defaultValue || allowedValues || pattern ? `<span class="descr-expand-toggle ${this.schemaDescriptionExpanded === 'true' ? 'expanded-descr' : ''}">➔</span>` : ''}`;
    let finalReadWriteText = '';
    let finalReadWriteTip = '';
    if (dataType === 'array') {
      if (readOrWrite === 'readonly') {
        finalReadWriteText = '🆁';
        finalReadWriteTip = 'Read-Only';
      } else if (readOrWrite === 'writeonly') {
        finalReadWriteText = '🆆';
        finalReadWriteTip = 'Write-Only';
      }
    } else if (primitiveReadOrWrite === '🆁') {
      finalReadWriteText = '🆁';
      finalReadWriteTip = 'Read-Only';
    } else if (primitiveReadOrWrite === '🆆') {
      finalReadWriteText = '🆆';
      finalReadWriteTip = 'Write-Only';
    }
    return lit_html_x`
      <div class = "tr primitive" title="${deprecated ? 'Deprecated' : ''}">
        <div class="td key ${deprecated}" style='min-width:${minFieldColWidth}px'>
          ${deprecated ? lit_html_x`<span style='color:var(--red);'>✗</span>` : ''}
          ${keyLabel.endsWith('*') ? lit_html_x`<span class="key-label">${keyLabel.substring(0, keyLabel.length - 1)}</span><span style='color:var(--red);'>*</span>:` : key.startsWith('::OPTION') ? lit_html_x`<span class='key-label xxx-of-key'>${keyLabel}</span><span class="xxx-of-descr">${keyDescr}</span>` : lit_html_x`<span class="key-label">${keyLabel}:</span>`}
          <span class="${dataTypeCss}" title="${finalReadWriteTip}"> 
            ${dataType === 'array' ? `[${type}]` : `${type}`}
            ${finalReadWriteText}
          </span>
        </div>
        <div class='td key-descr'>
          ${description || schemaTitle || schemaDescription ? lit_html_x`${lit_html_x`<span class="m-markdown-small">
                ${unsafe_html_o(marked(dataType === 'array' ? `${descrExpander} ${description}` : schemaTitle ? `${descrExpander} <b>${schemaTitle}:</b> ${schemaDescription}` : `${descrExpander} ${schemaDescription}`))}
              </span>`}` : ''}  
          ${constraint ? lit_html_x`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Constraints: </span>${constraint}</div>` : ''}
          ${defaultValue ? lit_html_x`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Default: </span>${defaultValue}</div>` : ''}
          ${allowedValues ? lit_html_x`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>${type === 'const' ? 'Value' : 'Allowed'}: </span>${allowedValues}</div>` : ''}
          ${pattern ? lit_html_x`<div style='display:inline-block; line-break: anywhere; margin-right:8px'><span class='bold-text'>Pattern: </span>${pattern}</div>` : ''}
        </div>
      </div>
    `;
  }
  /* eslint-enable indent */

  handleAllEvents(e) {
    if (e.target.classList.contains('open-bracket')) {
      this.toggleObjectExpand(e);
    } else if (e.target.classList.contains('schema-multiline-toggle')) {
      this.schemaDescriptionExpanded = this.schemaDescriptionExpanded === 'true' ? 'false' : 'true';
    } else if (e.target.classList.contains('descr-expand-toggle')) {
      const trEl = e.target.closest('.tr');
      if (trEl) {
        trEl.classList.toggle('expanded-descr');
        trEl.style.maxHeight = trEl.scrollHeight;
      }
    }
  }
  toggleObjectExpand(e) {
    const rowEl = e.target.closest('.tr');
    const nullable = rowEl.classList.contains('nullable');
    if (rowEl.classList.contains('expanded')) {
      rowEl.classList.replace('expanded', 'collapsed');
      e.target.innerHTML = e.target.classList.contains('array-of-object') ? '[{...}]' : e.target.classList.contains('array-of-array') ? '[[...]]' : e.target.classList.contains('array') ? '[...]' : `${nullable ? 'null┃' : ''}{...}`;
    } else {
      rowEl.classList.replace('collapsed', 'expanded');
      e.target.innerHTML = e.target.classList.contains('array-of-object') ? '[{' : e.target.classList.contains('array-of-array') ? `[[ ${e.target.dataset.arrayType}` : e.target.classList.contains('object') ? `${nullable ? 'null┃' : ''}{` : '[';
    }
  }
}
customElements.define('schema-tree', SchemaTree);
;// CONCATENATED MODULE: ./src/components/tag-input.js

class TagInput extends lit_element_s {
  /* eslint-disable indent */
  render() {
    let tagItemTmpl = '';
    if (Array.isArray(this.value)) {
      tagItemTmpl = lit_html_x`${this.value.filter(v => typeof v === 'string' && v.trim() !== '').map(v => lit_html_x`<span class='tag'>${v}</span>`)}`;
    }
    return lit_html_x`
      <div class='tags'>
        ${tagItemTmpl}
        <input type="text" class='editor' @paste="${e => this.afterPaste(e)}" @keydown="${this.afterKeyDown}" @blur="${this.onBlur}" placeholder="${this.placeholder || ''}">
      </div>
    `;
  }
  /* eslint-enable indent */

  static get properties() {
    return {
      placeholder: {
        type: String
      },
      value: {
        type: Array,
        attribute: 'value'
      }
    };
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'value') {
      if (newVal && oldVal !== newVal) {
        this.value = newVal.split(',').filter(v => v.trim() !== '');
      }
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }
  afterPaste(e) {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');
    const pastedArray = pastedData ? pastedData.split(',').filter(v => v.trim() !== '') : '';
    if (pastedArray) {
      if (Array.isArray(this.value)) {
        this.value = [...this.value, ...pastedArray];
      } else {
        this.value = pastedArray;
      }
    }
    e.preventDefault();
  }
  afterKeyDown(e) {
    if (e.keyCode === 13) {
      e.stopPropagation();
      e.preventDefault();
      if (e.target.value) {
        if (Array.isArray(this.value)) {
          this.value = [...this.value, e.target.value];
        } else {
          this.value = [e.target.value];
        }
        e.target.value = '';
      }
    } else if (e.keyCode === 8) {
      if (e.target.value.length === 0) {
        if (Array.isArray(this.value) && this.value.length > 0) {
          this.value.splice(-1);
          this.value = [...this.value];
        }
      }
    }
  }
  onBlur(e) {
    if (e.target.value) {
      if (Array.isArray(this.value)) {
        this.value = [...this.value, e.target.value];
      } else {
        this.value = [e.target.value];
      }
      e.target.value = '';
    }
  }
  static get styles() {
    return [i`
      .tags {
        display:flex;
        flex-wrap: wrap;
        outline: none;
        padding:0;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        cursor:text;
        overflow:hidden;
        background:var(--input-bg);
      }
      .tag, .editor {
        padding:3px;
        margin:2px;
      }
      .tag{
        border:1px solid var(--border-color);
        background-color:var(--bg3);
        color:var(--fg3);
        border-radius:var(--border-radius);
        word-break: break-all;
        font-size: var(--font-size-small);
      }
      .tag:hover ~ #cursor {
        display: block;
      }
      .editor {
        flex:1;
        border:1px solid transparent;
        color:var(--fg);
        min-width:60px;
        outline: none;
        line-height: inherit;
        font-family:inherit;
        background:transparent;
        font-size: calc(var(--font-size-small) + 1px);
      }
      .editor:focus-visible {
        outline: 1px solid;
      }
      .editor::placeholder {
        color: var(--placeholder-color);
        opacity:1;
      }
    `];
  }
}
// Register the element with the browser
customElements.define('tag-input', TagInput);
;// CONCATENATED MODULE: ./src/components/api-request.js

 // eslint-disable-line import/extensions
 // eslint-disable-line import/extensions
 // eslint-disable-line import/extensions
















class ApiRequest extends lit_element_s {
  constructor() {
    super();
    this.responseMessage = '';
    this.responseStatus = 'success';
    this.responseHeaders = '';
    this.responseText = '';
    this.responseUrl = '';
    this.curlSyntax = '';
    this.activeResponseTab = 'response'; // allowed values: response, headers, curl
    this.selectedRequestBodyType = '';
    this.selectedRequestBodyExample = '';
    this.activeParameterSchemaTabs = {};
  }
  static get properties() {
    return {
      serverUrl: {
        type: String,
        attribute: 'server-url'
      },
      servers: {
        type: Array
      },
      method: {
        type: String
      },
      path: {
        type: String
      },
      security: {
        type: Array
      },
      parameters: {
        type: Array
      },
      request_body: {
        type: Object
      },
      api_keys: {
        type: Array
      },
      parser: {
        type: Object
      },
      accept: {
        type: String
      },
      callback: {
        type: String
      },
      webhook: {
        type: String
      },
      responseMessage: {
        type: String,
        attribute: false
      },
      responseText: {
        type: String,
        attribute: false
      },
      responseHeaders: {
        type: String,
        attribute: false
      },
      responseStatus: {
        type: String,
        attribute: false
      },
      responseUrl: {
        type: String,
        attribute: false
      },
      curlSyntax: {
        type: String,
        attribute: false
      },
      fillRequestFieldsWithExample: {
        type: String,
        attribute: 'fill-request-fields-with-example'
      },
      allowTry: {
        type: String,
        attribute: 'allow-try'
      },
      showCurlBeforeTry: {
        type: String,
        attribute: 'show-curl-before-try'
      },
      renderStyle: {
        type: String,
        attribute: 'render-style'
      },
      schemaStyle: {
        type: String,
        attribute: 'schema-style'
      },
      activeSchemaTab: {
        type: String,
        attribute: 'active-schema-tab'
      },
      activeParameterSchemaTabs: {
        type: Object,
        converter: {
          fromAttribute: attr => JSON.parse(attr),
          toAttribute: prop => JSON.stringify(prop)
        },
        attribute: 'active-parameter-schema-tabs'
      },
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      allowSchemaDescriptionExpandToggle: {
        type: String,
        attribute: 'allow-schema-description-expand-toggle'
      },
      schemaHideReadOnly: {
        type: String,
        attribute: 'schema-hide-read-only'
      },
      schemaHideWriteOnly: {
        type: String,
        attribute: 'schema-hide-write-only'
      },
      fetchCredentials: {
        type: String,
        attribute: 'fetch-credentials'
      },
      // properties for internal tracking
      activeResponseTab: {
        type: String
      },
      // internal tracking of response-tab not exposed as a attribute
      selectedRequestBodyType: {
        type: String,
        attribute: 'selected-request-body-type'
      },
      // internal tracking of selected request-body type
      selectedRequestBodyExample: {
        type: String,
        attribute: 'selected-request-body-example'
      } // internal tracking of selected request-body example
    };
  }

  static get styles() {
    return [table_styles, input_styles, font_styles, flex_styles, border_styles, tab_styles, prism_styles, i`
        *, *:before, *:after { box-sizing: border-box; }
        :where(button, input[type="checkbox"], [tabindex="0"]):focus-visible { box-shadow: var(--focus-shadow); }
        :where(input[type="text"], input[type="password"], select, textarea):focus-visible { border-color: var(--primary-color); }
        tag-input:focus-within { outline: 1px solid;}
        .read-mode {
          margin-top: 24px;
        }
        .param-name,
        .param-type {
          margin: 1px 0;
          text-align: right;
          line-height: var(--font-size-small);
        }
        .param-name {
          color: var(--fg); 
          font-family: var(--font-mono);
        }
        .param-name.deprecated { 
          color: var(--red);
        }
        .param-type{
          color: var(--light-fg); 
          font-family: var(--font-regular);
        }
        .param-constraint{
          min-width:100px;
        }
        .param-constraint:empty{
          display:none;
        }
        .top-gap{margin-top:24px;}

        .textarea {
          min-height:220px; 
          padding:5px;
          resize:vertical;
          direction: ltr;
        }
        .example:first-child {
          margin-top: -9px;
        }

        .response-message{
          font-weight:bold;
          text-overflow: ellipsis;
        }
        .response-message.error {
          color:var(--red);
        }
        .response-message.success {
          color:var(--blue);
        }

        .file-input-container {
          align-items:flex-end;
        }
        .file-input-container .input-set:first-child .file-input-remove-btn{
          visibility:hidden;
        }

        .file-input-remove-btn{
          font-size:16px;
          color:var(--red);
          outline: none;
          border: none;
          background:none;
          cursor:pointer;
        }

        .v-tab-btn {
          font-size: var(--smal-font-size);
          height:24px; 
          border:none; 
          background:none; 
          opacity: 0.3;
          cursor: pointer;
          padding: 4px 8px;
        }
        .v-tab-btn.active {
          font-weight: bold;
          background: var(--bg);
          opacity: 1;
        }

        @media only screen and (min-width: 768px) {
          .textarea {
            padding:8px;
          }
        }

        @media only screen and (max-width: 470px) {
          .hide-in-small-screen {
            display:none;
          }
        }
      `, custom_styles];
  }
  render() {
    return lit_html_x`
    <div class="col regular-font request-panel ${'read focused'.includes(this.renderStyle) || this.callback === 'true' ? 'read-mode' : 'view-mode'}">
      <div class=" ${this.callback === 'true' ? 'tiny-title' : 'req-res-title'} "> 
        ${this.callback === 'true' ? 'CALLBACK REQUEST' : 'REQUEST'}
      </div>
      <div>
        ${guard_i([this.method, this.path, this.allowTry, this.parameters, this.activeParameterSchemaTabs], () => this.inputParametersTemplate('path'))}
        ${guard_i([this.method, this.path, this.allowTry, this.parameters, this.activeParameterSchemaTabs], () => this.inputParametersTemplate('query'))}
        ${this.requestBodyTemplate()}
        ${guard_i([this.method, this.path, this.allowTry, this.parameters, this.activeParameterSchemaTabs], () => this.inputParametersTemplate('header'))}
        ${guard_i([this.method, this.path, this.allowTry, this.parameters, this.activeParameterSchemaTabs], () => this.inputParametersTemplate('cookie'))}
        ${this.allowTry === 'false' ? '' : lit_html_x`${this.apiCallTemplate()}`}
      </div>  
    </div>
    `;
  }
  async updated() {
    if (this.showCurlBeforeTry === 'true') {
      this.applyCURLSyntax(this.shadowRoot);
    }

    // In focused mode after rendering the request component, update the text-areas(which contains examples) using
    // the original values from hidden textareas
    // This is done coz, user may update the dom by editing the textarea's and once the DOM is updated externally change detection wont happen, therefore update the values manually

    // if (this.renderStyle === 'focused') {
    //   if (changedProperties.size === 1 && changedProperties.has('activeSchemaTab')) {
    //     // dont update example as only tabs is switched
    //   } else {
    //     this.requestUpdate();
    //   }
    // }

    if (this.webhook === 'true') {
      this.allowTry = 'false';
    }
  }
  async saveExampleState() {
    if (this.renderStyle === 'focused') {
      const reqBodyTextAreaEls = [...this.shadowRoot.querySelectorAll('textarea.request-body-param-user-input')];
      reqBodyTextAreaEls.forEach(el => {
        el.dataset.user_example = el.value;
      });
      const exampleTextAreaEls = [...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')];
      exampleTextAreaEls.forEach(el => {
        el.dataset.user_example = el.value;
      });
      this.requestUpdate();
    }
  }
  async updateExamplesFromDataAttr() {
    // In focused mode after rendering the request component, update the text-areas(which contains examples) using
    // the original values from hidden textareas
    // This is done coz, user may update the dom by editing the textarea's and once the DOM is updated externally change detection wont happen, therefore update the values manually
    if (this.renderStyle === 'focused') {
      const reqBodyTextAreaEls = [...this.shadowRoot.querySelectorAll('textarea.request-body-param-user-input')];
      reqBodyTextAreaEls.forEach(el => {
        el.value = el.dataset.user_example || el.dataset.example;
      });
      const exampleTextAreaEls = [...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')];
      exampleTextAreaEls.forEach(el => {
        el.value = el.dataset.user_example || el.dataset.example;
      });
      this.requestUpdate();
    }
  }

  /* eslint-disable indent */
  renderExample(example, paramType, paramName) {
    var _example$value, _example$value2;
    return lit_html_x`
      ${paramType === 'array' ? '[' : ''}
      <a
        part="anchor anchor-param-example"
        style="display:inline-block; min-width:24px; text-align:center"
        class="${this.allowTry === 'true' ? '' : 'inactive-link'}"
        data-example-type="${paramType === 'array' ? paramType : 'string'}"
        data-example="${example.value && Array.isArray(example.value) ? (_example$value = example.value) === null || _example$value === void 0 ? void 0 : _example$value.join('~|~') : (typeof example.value === 'object' ? JSON.stringify(example.value, null, 2) : example.value) || ''}"
        title="${example.value && Array.isArray(example.value) ? (_example$value2 = example.value) === null || _example$value2 === void 0 ? void 0 : _example$value2.join('~|~') : (typeof example.value === 'object' ? JSON.stringify(example.value, null, 2) : example.value) || ''}"
        @click="${e => {
      const inputEl = e.target.closest('table').querySelector(`[data-pname="${paramName}"]`);
      if (inputEl) {
        inputEl.value = e.target.dataset.exampleType === 'array' ? e.target.dataset.example.split('~|~') : e.target.dataset.example;
      }
    }}"
      > ${example.printableValue || example.value} </a>
      ${paramType === 'array' ? '] ' : ''}
    `;
  }
  renderShortFormatExamples(examples, paramType, paramName) {
    return lit_html_x`${examples.map((x, i) => lit_html_x`
      ${i === 0 ? '' : '┃'}
      ${this.renderExample(x, paramType, paramName)}`)}`;
  }
  renderLongFormatExamples(exampleList, paramType, paramName) {
    return lit_html_x` <ul style="list-style-type: disclosure-closed;">
      ${exampleList.map(v => {
      var _v$summary, _v$description;
      return lit_html_x`
          <li>
            ${this.renderExample(v, paramType, paramName)}
            ${((_v$summary = v.summary) === null || _v$summary === void 0 ? void 0 : _v$summary.length) > 0 ? lit_html_x`<span>&lpar;${v.summary}&rpar;</span>` : ''}
            ${((_v$description = v.description) === null || _v$description === void 0 ? void 0 : _v$description.length) > 0 ? lit_html_x`<p>${unsafe_html_o(marked(v.description))}</p>` : ''}
          </li>
        `;
    })}
    </ul>`;
  }
  exampleListTemplate(paramName, paramType, exampleList = []) {
    return lit_html_x` ${exampleList.length > 0 ? lit_html_x`<span style="font-weight:bold">Examples: </span>
          ${anyExampleWithSummaryOrDescription(exampleList) ? this.renderLongFormatExamples(exampleList, paramType, paramName) : this.renderShortFormatExamples(exampleList, paramType, paramName)}` : ''}`;
  }
  inputParametersTemplate(paramType) {
    const filteredParams = this.parameters ? this.parameters.filter(param => param.in === paramType) : [];
    if (filteredParams.length === 0) {
      return '';
    }
    let title = '';
    if (paramType === 'path') {
      title = 'PATH PARAMETERS';
    } else if (paramType === 'query') {
      title = 'QUERY-STRING PARAMETERS';
    } else if (paramType === 'header') {
      title = 'REQUEST HEADERS';
    } else if (paramType === 'cookie') {
      title = 'COOKIES';
    }
    const tableRows = [];
    for (const param of filteredParams) {
      const [declaredParamSchema, serializeStyle, mimeTypeElem] = getSchemaFromParam(param);
      if (!declaredParamSchema) {
        continue;
      }
      const paramSchema = getTypeInfo(declaredParamSchema);
      if (!paramSchema) {
        continue; // eslint-disable-line no-continue
      }

      const schemaAsObj = schemaInObjectNotation(declaredParamSchema, {});
      // let exampleVal = '';
      // let exampleList = [];
      let paramStyle = 'form';
      let paramExplode = true;
      let paramAllowReserved = false;
      if (paramType === 'query') {
        if (param.style && 'form spaceDelimited pipeDelimited'.includes(param.style)) {
          paramStyle = param.style;
        } else if (serializeStyle) {
          paramStyle = serializeStyle;
        }
        if (typeof param.explode === 'boolean') {
          paramExplode = param.explode;
        }
        if (typeof param.allowReserved === 'boolean') {
          paramAllowReserved = param.allowReserved;
        }
      }
      // openapi 3.1.0 spec based examples (which must be Object(string : { value:any, summary?: string, description?: string})
      const example = normalizeExamples(param.examples || nestExampleIfPresent(param.example) || nestExampleIfPresent(mimeTypeElem === null || mimeTypeElem === void 0 ? void 0 : mimeTypeElem.example) || (mimeTypeElem === null || mimeTypeElem === void 0 ? void 0 : mimeTypeElem.examples) || nestExampleIfPresent(paramSchema.examples) || nestExampleIfPresent(paramSchema.example), paramSchema.type);
      if (!example.exampleVal && paramSchema.type === 'object') {
        example.exampleVal = generateExample(declaredParamSchema, serializeStyle || 'json', '', '', this.callback === 'true' || this.webhook === 'true' ? true : false,
        // eslint-disable-line no-unneeded-ternary
        this.callback === 'true' || this.webhook === 'true' ? false : true,
        // eslint-disable-line no-unneeded-ternary
        true, 'text', false)[0].exampleValue;
      }
      const labelColWidth = 'read focused'.includes(this.renderStyle) ? '200px' : '160px';
      tableRows.push(lit_html_x`
      <tr title="${param.deprecated ? 'Deprecated' : ''}"> 
        <td rowspan="${this.allowTry === 'true' ? '1' : '2'}" style="width:${labelColWidth}; min-width:100px;">
          <div class="param-name ${param.deprecated ? 'deprecated' : ''}" >
            ${param.deprecated ? lit_html_x`<span style='color:var(--red);'>✗</span>` : ''}
            ${param.required ? lit_html_x`<span style='color:var(--red)'>*</span>` : ''}
            ${param.name}
          </div>
          <div class="param-type">
            ${paramSchema.type === 'array' ? `${paramSchema.arrayType}` : `${paramSchema.format ? paramSchema.format : paramSchema.type}`}
          </div>
        </td>  
        ${this.allowTry === 'true' ? lit_html_x`
            <td style="min-width:100px;" colspan="${paramSchema.default || paramSchema.constrain || paramSchema.allowedValues || paramSchema.pattern ? '1' : '2'}">
              ${paramSchema.type === 'array' ? lit_html_x`
                  <tag-input class="request-param" 
                    style = "width:100%" 
                    data-ptype = "${paramType}"
                    data-pname = "${param.name}"
                    data-example = "${Array.isArray(example.exampleVal) ? example.exampleVal.join('~|~') : example.exampleVal}"
                    data-param-serialize-style = "${paramStyle}"
                    data-param-serialize-explode = "${paramExplode}"
                    data-param-allow-reserved = "${paramAllowReserved}"
                    data-x-fill-example = "${param['x-fill-example'] || 'yes'}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value="${param['x-fill-example'] === 'no' ? [] : live_l(this.fillRequestFieldsWithExample === 'true' ? Array.isArray(example.exampleVal) ? example.exampleVal : [example.exampleVal] : [])}"
                  >
                  </tag-input>` : paramSchema.type === 'object' ? lit_html_x`
                    <div class="tab-panel col" style="border-width:0 0 1px 0;">
                      <div class="tab-buttons row" @click="${e => {
        if (e.target.tagName.toLowerCase() === 'button') {
          const newState = {
            ...this.activeParameterSchemaTabs
          };
          newState[param.name] = e.target.dataset.tab;
          this.activeParameterSchemaTabs = newState;
        }
      }}">
                        <button class="tab-btn ${this.activeParameterSchemaTabs[param.name] === 'example' ? 'active' : ''}" data-tab = 'example'>EXAMPLE </button>
                        <button class="tab-btn ${this.activeParameterSchemaTabs[param.name] !== 'example' ? 'active' : ''}" data-tab = 'schema'>SCHEMA</button>
                      </div>
                      ${this.activeParameterSchemaTabs[param.name] === 'example' ? lit_html_x`<div class="tab-content col">
                          <textarea 
                            class = "textarea request-param"
                            part = "textarea textarea-param"
                            data-ptype = "${paramType}-object"
                            data-pname = "${param.name}"
                            data-example = "${example.exampleVal}"
                            data-param-serialize-style = "${paramStyle}"
                            data-param-serialize-explode = "${paramExplode}"
                            data-param-allow-reserved = "${paramAllowReserved}"
                            data-x-fill-example = "${param['x-fill-example'] || 'yes'}"
                            spellcheck = "false"
                            .textContent="${param['x-fill-example'] === 'no' ? '' : live_l(this.fillRequestFieldsWithExample === 'true' ? typeof example.exampleVal === 'object' ? JSON.stringify(example.exampleVal, null, 2) : example.exampleVal : '')}"
                            style = "resize:vertical; width:100%; height: ${'read focused'.includes(this.renderStyle) ? '180px' : '120px'};"
                            @input=${e => {
        const requestPanelEl = this.getRequestPanel(e);
        this.liveCURLSyntaxUpdate(requestPanelEl);
      }}
                          ></textarea>
                        </div>` : lit_html_x`
                          <div class="tab-content col">
                            <schema-tree
                              class = 'json'
                              style = 'display: block'
                              .data = '${schemaAsObj}'
                              schema-expand-level = "${this.schemaExpandLevel}"
                              schema-description-expanded = "${this.schemaDescriptionExpanded}"
                              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                              schema-hide-read-only = "${this.schemaHideReadOnly.includes(this.method)}"
                              schema-hide-write-only = "${this.schemaHideWriteOnly.includes(this.method)}"
                              exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                                file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                                anchor:anchor, anchor-param-example:anchor-param-example"
                            > </schema-tree>
                          </div>`}
                    </div>` : lit_html_x`
                    <input type="${paramSchema.format === 'password' ? 'password' : 'text'}" spellcheck="false" style="width:100%" 
                      class="request-param"
                      part="textbox textbox-param"
                      data-ptype="${paramType}"
                      data-pname="${param.name}" 
                      data-example="${Array.isArray(example.exampleVal) ? example.exampleVal.join('~|~') : example.exampleVal}"
                      data-param-allow-reserved = "${paramAllowReserved}"
                      data-x-fill-example = "${param['x-fill-example'] || 'yes'}"
                      data-array="false"
                      .value="${param['x-fill-example'] === 'no' ? '' : live_l(this.fillRequestFieldsWithExample === 'true' ? example.exampleVal : '')}"
                      @input=${e => {
        const requestPanelEl = this.getRequestPanel(e);
        this.liveCURLSyntaxUpdate(requestPanelEl);
      }}
                    />`}
            </td>` : ''}
        ${paramSchema.default || paramSchema.constrain || paramSchema.allowedValues || paramSchema.pattern ? lit_html_x`
            <td colspan="${this.allowTry === 'true' ? '1' : '2'}">
              <div class="param-constraint">
                ${paramSchema.default ? lit_html_x`<span style="font-weight:bold">Default: </span>${paramSchema.default}<br/>` : ''}
                ${paramSchema.pattern ? lit_html_x`<span style="font-weight:bold">Pattern: </span>${paramSchema.pattern}<br/>` : ''}
                ${paramSchema.constrain ? lit_html_x`${paramSchema.constrain}<br/>` : ''}
                ${paramSchema.allowedValues && paramSchema.allowedValues.split('┃').map((v, i) => lit_html_x`
                  ${i > 0 ? '┃' : lit_html_x`<span style="font-weight:bold">Allowed: </span>`}
                  ${lit_html_x`
                    <a part="anchor anchor-param-constraint" class = "${this.allowTry === 'true' ? '' : 'inactive-link'}"
                      data-type="${paramSchema.type === 'array' ? paramSchema.type : 'string'}"
                      data-enum="${v.trim()}"
                      @click="${e => {
        const inputEl = e.target.closest('table').querySelector(`[data-pname="${param.name}"]`);
        if (inputEl) {
          if (e.target.dataset.type === 'array') {
            inputEl.value = [e.target.dataset.enum];
          } else {
            inputEl.value = e.target.dataset.enum;
          }
        }
      }}"
                    >${v}</a>`}`)}
              </div>
            </td>` : lit_html_x`<td></td>`}
      </tr>
      <tr>
        ${this.allowTry === 'true' ? lit_html_x`<td style="border:none"> </td>` : ''}
        <td colspan="2" style="border:none">
          <span class="m-markdown-small">${unsafe_html_o(marked(param.description || ''))}</span>
          ${this.exampleListTemplate.call(this, param.name, paramSchema.type, example.exampleList)}
        </td>
      </tr>
    `);
    }
    return lit_html_x`
    <div class="table-title top-gap">${title}</div>
    <div style="display:block; overflow-x:auto; max-width:100%;">
      <table role="presentation" class="m-table" style="width:100%; word-break:break-word;">
        ${tableRows}
      </table>
    </div>`;
  }

  // This method is called before navigation change in focused mode
  async beforeNavigationFocusedMode() {
    // this.saveExampleState();
  }

  // This method is called after navigation change in focused mode
  async afterNavigationFocusedMode() {
    this.selectedRequestBodyType = '';
    this.selectedRequestBodyExample = '';
    this.updateExamplesFromDataAttr();
    this.clearResponseData();
  }

  // Request-Body Event Handlers
  onSelectExample(e) {
    this.selectedRequestBodyExample = e.target.value;
    const exampleDropdownEl = e.target;
    window.setTimeout(selectEl => {
      const readOnlyExampleEl = selectEl.closest('.example-panel').querySelector('.request-body-param');
      const userInputExampleTextareaEl = selectEl.closest('.example-panel').querySelector('.request-body-param-user-input');
      userInputExampleTextareaEl.value = readOnlyExampleEl.innerText;
      const requestPanelEl = this.getRequestPanel({
        target: selectEl
      });
      this.liveCURLSyntaxUpdate(requestPanelEl);
    }, 0, exampleDropdownEl);
  }
  onMimeTypeChange(e) {
    this.selectedRequestBodyType = e.target.value;
    const mimeDropdownEl = e.target;
    this.selectedRequestBodyExample = '';
    window.setTimeout(selectEl => {
      const readOnlyExampleEl = selectEl.closest('.request-body-container').querySelector('.request-body-param');
      if (readOnlyExampleEl) {
        const userInputExampleTextareaEl = selectEl.closest('.request-body-container').querySelector('.request-body-param-user-input');
        userInputExampleTextareaEl.value = readOnlyExampleEl.innerText;
      }
    }, 0, mimeDropdownEl);
  }
  requestBodyTemplate() {
    if (!this.request_body) {
      return '';
    }
    if (Object.keys(this.request_body).length === 0) {
      return '';
    }

    // Variable to store partial HTMLs
    let reqBodyTypeSelectorHtml = '';
    let reqBodyFileInputHtml = '';
    let reqBodyFormHtml = '';
    let reqBodySchemaHtml = '';
    let reqBodyExampleHtml = '';
    const requestBodyTypes = [];
    const {
      content
    } = this.request_body;
    for (const mimeType in content) {
      requestBodyTypes.push({
        mimeType,
        schema: content[mimeType].schema,
        example: content[mimeType].example,
        examples: content[mimeType].examples
      });
      if (!this.selectedRequestBodyType) {
        this.selectedRequestBodyType = mimeType;
      }
    }
    // MIME Type selector
    reqBodyTypeSelectorHtml = requestBodyTypes.length === 1 ? '' : lit_html_x`
        <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change = '${e => this.onMimeTypeChange(e)}'>
          ${requestBodyTypes.map(reqBody => lit_html_x`
            <option value = '${reqBody.mimeType}' ?selected = '${reqBody.mimeType === this.selectedRequestBodyType}'>
              ${reqBody.mimeType}
            </option> `)}
        </select>
      `;

    // For Loop - Main
    requestBodyTypes.forEach(reqBody => {
      let schemaAsObj;
      let reqBodyExamples = [];
      if (this.selectedRequestBodyType.includes('json') || this.selectedRequestBodyType.includes('xml') || this.selectedRequestBodyType.includes('text') || this.selectedRequestBodyType.includes('jose')) {
        // Generate Example
        if (reqBody.mimeType === this.selectedRequestBodyType) {
          reqBodyExamples = generateExample(reqBody.schema, reqBody.mimeType, reqBody.examples, reqBody.example, this.callback === 'true' || this.webhook === 'true' ? true : false,
          // eslint-disable-line no-unneeded-ternary
          this.callback === 'true' || this.webhook === 'true' ? false : true,
          // eslint-disable-line no-unneeded-ternary
          'text', false);
          if (!this.selectedRequestBodyExample) {
            this.selectedRequestBodyExample = reqBodyExamples.length > 0 ? reqBodyExamples[0].exampleId : '';
          }
          reqBodyExampleHtml = lit_html_x`
            ${reqBodyExampleHtml}
            <div class = 'example-panel border-top pad-top-8'>
              ${reqBodyExamples.length === 1 ? '' : lit_html_x`
                  <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change='${e => this.onSelectExample(e)}'>
                    ${reqBodyExamples.map(v => lit_html_x`<option value="${v.exampleId}" ?selected=${v.exampleId === this.selectedRequestBodyExample} > 
                      ${v.exampleSummary.length > 80 ? v.exampleId : v.exampleSummary ? v.exampleSummary : v.exampleId} 
                    </option>`)}
                  </select>
                `}
              ${reqBodyExamples.filter(v => v.exampleId === this.selectedRequestBodyExample).map(v => lit_html_x`
                <div class="example ${v.exampleId === this.selectedRequestBodyExample ? 'example-selected' : ''}" data-example = '${v.exampleId}'>
                  ${v.exampleSummary && v.exampleSummary.length > 80 ? lit_html_x`<div style="padding: 4px 0"> ${v.exampleSummary} </div>` : ''}
                  ${v.exampleDescription ? lit_html_x`<div class="m-markdown-small" style="padding: 4px 0"> ${unsafe_html_o(marked(v.exampleDescription || ''))} </div>` : ''}
                  <!-- This pre(hidden) is to store the original example value, this will remain unchanged when users switches from one example to another, its is used to populate the editable textarea -->
                  <pre 
                    class = "textarea is-hidden request-body-param ${reqBody.mimeType.substring(reqBody.mimeType.indexOf('/') + 1)}" 
                    spellcheck = "false"
                    data-ptype = "${reqBody.mimeType}" 
                    style="width:100%; resize:vertical; display:none"
                  >${v.exampleFormat === 'text' ? v.exampleValue : JSON.stringify(v.exampleValue, null, 2)}</pre>

                  <!-- this textarea is for user to edit the example -->
                  <textarea 
                    class = "textarea request-body-param-user-input"
                    part = "textarea textarea-param"
                    spellcheck = "false"
                    data-ptype = "${reqBody.mimeType}" 
                    data-example = "${v.exampleFormat === 'text' ? v.exampleValue : JSON.stringify(v.exampleValue, null, 2)}"
                    data-example-format = "${v.exampleFormat}"
                    style="width:100%; resize:vertical;"
                    .textContent = "${this.fillRequestFieldsWithExample === 'true' ? v.exampleFormat === 'text' ? v.exampleValue : JSON.stringify(v.exampleValue, null, 2) : ''}"
                    @input=${e => {
            const requestPanelEl = this.getRequestPanel(e);
            this.liveCURLSyntaxUpdate(requestPanelEl);
          }}
                  ></textarea>
                </div>  
              `)}

            </div>
          `;
        }
      } else if (this.selectedRequestBodyType.includes('form-urlencoded') || this.selectedRequestBodyType.includes('form-data')) {
        if (reqBody.mimeType === this.selectedRequestBodyType) {
          const ex = generateExample(reqBody.schema, reqBody.mimeType, reqBody.examples, reqBody.example, this.callback === 'true' || this.webhook === 'true' ? true : false,
          // eslint-disable-line no-unneeded-ternary
          this.callback === 'true' || this.webhook === 'true' ? false : true,
          // eslint-disable-line no-unneeded-ternary
          'text', false);
          if (reqBody.schema) {
            reqBodyFormHtml = this.formDataTemplate(reqBody.schema, reqBody.mimeType, ex[0] ? ex[0].exampleValue : '');
          }
        }
      } else if (/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(this.selectedRequestBodyType)) {
        if (reqBody.mimeType === this.selectedRequestBodyType) {
          reqBodyFileInputHtml = lit_html_x`
            <div class = "small-font-size bold-text row">
              <input type="file" part="file-input" style="max-width:100%" class="request-body-param-file" data-ptype="${reqBody.mimeType}" spellcheck="false" />
            </div>  
          `;
        }
      }

      // Generate Schema
      if (reqBody.mimeType.includes('json') || reqBody.mimeType.includes('xml') || reqBody.mimeType.includes('text') || this.selectedRequestBodyType.includes('jose')) {
        schemaAsObj = schemaInObjectNotation(reqBody.schema, {});
        if (this.schemaStyle === 'table') {
          reqBodySchemaHtml = lit_html_x`
            ${reqBodySchemaHtml}
            <schema-table
              class = '${reqBody.mimeType.substring(reqBody.mimeType.indexOf('/') + 1)}'
              style = 'display: ${this.selectedRequestBodyType === reqBody.mimeType ? 'block' : 'none'};'
              .data = '${schemaAsObj}'
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-table>
          `;
        } else if (this.schemaStyle === 'tree') {
          reqBodySchemaHtml = lit_html_x`
            ${reqBodySchemaHtml}
            <schema-tree
              class = "${reqBody.mimeType.substring(reqBody.mimeType.indexOf('/') + 1)}"
              style = "display: ${this.selectedRequestBodyType === reqBody.mimeType ? 'block' : 'none'};"
              .data = "${schemaAsObj}"
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-tree>
          `;
        }
      }
    });
    return lit_html_x`
      <div class='request-body-container' data-selected-request-body-type="${this.selectedRequestBodyType}">
        <div class="table-title top-gap row">
          REQUEST BODY ${this.request_body.required ? lit_html_x`<span class="mono-font" style='color:var(--red)'>*</span>` : ''} 
          <span style = "font-weight:normal; margin-left:5px"> ${this.selectedRequestBodyType}</span>
          <span style="flex:1"></span>
          ${reqBodyTypeSelectorHtml}
        </div>
        ${this.request_body.description ? lit_html_x`<div class="m-markdown" style="margin-bottom:12px">${unsafe_html_o(marked(this.request_body.description))}</div>` : ''}
        
        ${this.selectedRequestBodyType.includes('json') || this.selectedRequestBodyType.includes('xml') || this.selectedRequestBodyType.includes('text') || this.selectedRequestBodyType.includes('jose') ? lit_html_x`
            <div class="tab-panel col" style="border-width:0 0 1px 0;">
              <div class="tab-buttons row" @click="${e => {
      if (e.target.tagName.toLowerCase() === 'button') {
        this.activeSchemaTab = e.target.dataset.tab;
      }
    }}">
                <button class="tab-btn ${this.activeSchemaTab === 'example' ? 'active' : ''}" data-tab = 'example'>EXAMPLE</button>
                <button class="tab-btn ${this.activeSchemaTab !== 'example' ? 'active' : ''}" data-tab = 'schema'>SCHEMA</button>
              </div>
              ${lit_html_x`<div class="tab-content col" style="display:${this.activeSchemaTab === 'example' ? 'block' : 'none'};"> ${reqBodyExampleHtml}</div>`}
              ${lit_html_x`<div class="tab-content col" style="display:${this.activeSchemaTab === 'example' ? 'none' : 'block'};"> ${reqBodySchemaHtml}</div>`}
            </div>` : lit_html_x`  
            ${reqBodyFileInputHtml}
            ${reqBodyFormHtml}`}
      </div>  
    `;
  }
  formDataParamAsObjectTemplate(fieldName, fieldSchema, mimeType) {
    var _formdataPartExample$;
    // This template is used when form-data param should be send as a object (application/json, application/xml)
    const formdataPartSchema = schemaInObjectNotation(fieldSchema, {});
    const formdataPartExample = generateExample(fieldSchema, 'json', fieldSchema.examples, fieldSchema.example, this.callback === 'true' || this.webhook === 'true' ? true : false,
    // eslint-disable-line no-unneeded-ternary
    this.callback === 'true' || this.webhook === 'true' ? false : true,
    // eslint-disable-line no-unneeded-ternary
    'text', false);
    return lit_html_x`
      <div class="tab-panel row" style="min-height:220px; border-left: 6px solid var(--light-border-color); align-items: stretch;">
        <div style="width:24px; background-color:var(--light-border-color)">
          <div class="row" style="flex-direction:row-reverse; width:160px; height:24px; transform:rotate(270deg) translateX(-160px); transform-origin:top left; display:block;" @click="${e => {
      if (e.target.classList.contains('v-tab-btn')) {
        const {
          tab
        } = e.target.dataset;
        if (tab) {
          const tabPanelEl = e.target.closest('.tab-panel');
          const selectedTabBtnEl = tabPanelEl.querySelector(`.v-tab-btn[data-tab="${tab}"]`);
          const otherTabBtnEl = [...tabPanelEl.querySelectorAll(`.v-tab-btn:not([data-tab="${tab}"])`)];
          const selectedTabContentEl = tabPanelEl.querySelector(`.tab-content[data-tab="${tab}"]`);
          const otherTabContentEl = [...tabPanelEl.querySelectorAll(`.tab-content:not([data-tab="${tab}"])`)];
          selectedTabBtnEl.classList.add('active');
          selectedTabContentEl.style.display = 'block';
          otherTabBtnEl.forEach(el => {
            el.classList.remove('active');
          });
          otherTabContentEl.forEach(el => {
            el.style.display = 'none';
          });
        }
      }
      if (e.target.tagName.toLowerCase() === 'button') {
        this.activeSchemaTab = e.target.dataset.tab;
      }
    }}">
          <button class="v-tab-btn ${this.activeSchemaTab === 'example' ? 'active' : ''}" data-tab = 'example'>EXAMPLE</button>
          <button class="v-tab-btn ${this.activeSchemaTab !== 'example' ? 'active' : ''}" data-tab = 'schema'>SCHEMA</button>
        </div>
      </div>
      ${lit_html_x`
        <div class="tab-content col" data-tab = 'example' style="display:${this.activeSchemaTab === 'example' ? 'block' : 'none'}; padding-left:5px; width:100%"> 
          <textarea 
            class = "textarea"
            part = "textarea textarea-param"
            style = "width:100%; border:none; resize:vertical;" 
            data-array = "false" 
            data-ptype = "${mimeType.includes('form-urlencode') ? 'form-urlencode' : 'form-data'}"
            data-pname = "${fieldName}"
            data-example = "${((_formdataPartExample$ = formdataPartExample[0]) === null || _formdataPartExample$ === void 0 ? void 0 : _formdataPartExample$.exampleValue) || ''}"
            .textContent = "${this.fillRequestFieldsWithExample === 'true' ? formdataPartExample[0].exampleValue : ''}"
            spellcheck = "false"
          ></textarea>
        </div>`}
      ${lit_html_x`
        <div class="tab-content col" data-tab = 'schema' style="display:${this.activeSchemaTab !== 'example' ? 'block' : 'none'}; padding-left:5px; width:100%;"> 
          <schema-tree
            .data = '${formdataPartSchema}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
          > </schema-tree>
        </div>`}
      </div>
    `;
  }
  formDataTemplate(schema, mimeType, exampleValue = '') {
    const formDataTableRows = [];
    if (schema.properties) {
      for (const fieldName in schema.properties) {
        var _schema$required, _fieldSchema$items;
        const fieldSchema = schema.properties[fieldName];
        if (fieldSchema.readOnly) {
          continue;
        }
        const fieldExamples = fieldSchema.examples || fieldSchema.example || '';
        const fieldType = fieldSchema.type;
        const paramSchema = getTypeInfo(fieldSchema);
        const labelColWidth = 'read focused'.includes(this.renderStyle) ? '200px' : '160px';
        const example = normalizeExamples(paramSchema.examples || paramSchema.example, paramSchema.type);
        formDataTableRows.push(lit_html_x`
        <tr title="${fieldSchema.deprecated ? 'Deprecated' : ''}"> 
          <td style="width:${labelColWidth}; min-width:100px;">
            <div class="param-name ${fieldSchema.deprecated ? 'deprecated' : ''}">
              ${fieldName}${(_schema$required = schema.required) !== null && _schema$required !== void 0 && _schema$required.includes(fieldName) || fieldSchema.required ? lit_html_x`<span style='color:var(--red);'>*</span>` : ''}
            </div>
            <div class="param-type">${paramSchema.type}</div>
          </td>  
          <td 
            style="${fieldType === 'object' ? 'width:100%; padding:0;' : this.allowTry === 'true' ? '' : 'display:none;'} min-width:100px;" 
            colspan="${fieldType === 'object' ? 2 : 1}">
            ${fieldType === 'array' ? ((_fieldSchema$items = fieldSchema.items) === null || _fieldSchema$items === void 0 ? void 0 : _fieldSchema$items.format) === 'binary' ? lit_html_x`
                <div class="file-input-container col" style='align-items:flex-end;' @click="${e => this.onAddRemoveFileInput(e, fieldName, mimeType)}">
                  <div class='input-set row'>
                    <input 
                      type = "file"
                      part = "file-input"
                      style = "width:100%" 
                      data-pname = "${fieldName}" 
                      data-ptype = "${mimeType.includes('form-urlencode') ? 'form-urlencode' : 'form-data'}"
                      data-array = "false" 
                      data-file-array = "true" 
                    />
                    <button class="file-input-remove-btn"> &#x2715; </button>
                  </div>  
                  <button class="m-btn primary file-input-add-btn" part="btn btn-fill" style="margin:2px 25px 0 0; padding:2px 6px;">ADD</button>
                </div>  
                ` : lit_html_x`
                  <tag-input
                    style = "width:100%" 
                    data-ptype = "${mimeType.includes('form-urlencode') ? 'form-urlencode' : 'form-data'}"
                    data-pname = "${fieldName}"
                    data-example = "${Array.isArray(fieldExamples) ? fieldExamples.join('~|~') : fieldExamples}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(fieldExamples) ? Array.isArray(fieldExamples[0]) ? fieldExamples[0] : fieldExamples : []}"
                  >
                  </tag-input>
                ` : lit_html_x`
                ${fieldType === 'object' ? this.formDataParamAsObjectTemplate.call(this, fieldName, fieldSchema, mimeType) : lit_html_x`
                    ${this.allowTry === 'true' ? lit_html_x`<input
                          .value = "${this.fillRequestFieldsWithExample === 'true' ? example.exampleVal : ''}"
                          spellcheck = "false"
                          type = "${fieldSchema.format === 'binary' ? 'file' : fieldSchema.format === 'password' ? 'password' : 'text'}"
                          part = "textbox textbox-param"
                          style = "width:100%"
                          data-ptype = "${mimeType.includes('form-urlencode') ? 'form-urlencode' : 'form-data'}"
                          data-pname = "${fieldName}"
                          data-example = "${Array.isArray(fieldExamples) ? fieldExamples[0] : fieldExamples}"
                          data-array = "false"
                        />` : ''}
                    `}`}
          </td>
          ${fieldType === 'object' ? '' : lit_html_x`
              <td>
                ${paramSchema.default || paramSchema.constrain || paramSchema.allowedValues || paramSchema.pattern ? lit_html_x`
                    <div class="param-constraint">
                      ${paramSchema.default ? lit_html_x`<span style="font-weight:bold">Default: </span>${paramSchema.default}<br/>` : ''}
                      ${paramSchema.pattern ? lit_html_x`<span style="font-weight:bold">Pattern: </span>${paramSchema.pattern}<br/>` : ''}
                      ${paramSchema.constrain ? lit_html_x`${paramSchema.constrain}<br/>` : ''}
                      ${paramSchema.allowedValues && paramSchema.allowedValues.split('┃').map((v, i) => lit_html_x`
                        ${i > 0 ? '┃' : lit_html_x`<span style="font-weight:bold">Allowed: </span>`}
                        ${lit_html_x`
                          <a part="anchor anchor-param-constraint" class = "${this.allowTry === 'true' ? '' : 'inactive-link'}"
                            data-type="${paramSchema.type === 'array' ? paramSchema.type : 'string'}"
                            data-enum="${v.trim()}"
                            @click="${e => {
          const inputEl = e.target.closest('table').querySelector(`[data-pname="${fieldName}"]`);
          if (inputEl) {
            if (e.target.dataset.type === 'array') {
              inputEl.value = [e.target.dataset.enum];
            } else {
              inputEl.value = e.target.dataset.enum;
            }
          }
        }}"
                          > 
                            ${v} 
                          </a>`}`)}
                    </div>` : ''}
              </td>`}
        </tr>
        ${fieldType === 'object' ? '' : lit_html_x`
            <tr>
              <td style="border:none"> </td>
              <td colspan="2" style="border:none; margin-top:0; padding:0 5px 8px 5px;"> 
                <span class="m-markdown-small">${unsafe_html_o(marked(fieldSchema.description || ''))}</span>
                ${this.exampleListTemplate.call(this, fieldName, paramSchema.type, example.exampleList)}
              </td>
            </tr>
          `}`);
      }
      return lit_html_x`
        <table role="presentation" style="width:100%;" class="m-table">
          ${formDataTableRows}
        </table>
      `;
    }
    return lit_html_x`
      <textarea
        class = "textarea dynamic-form-param ${mimeType}"
        part = "textarea textarea-param"
        spellcheck = "false"
        data-pname="dynamic-form" 
        data-ptype="${mimeType}"
        .textContent = "${exampleValue}"
        style="width:100%"
      ></textarea>
      ${schema.description ? lit_html_x`<span class="m-markdown-small">${unsafe_html_o(marked(schema.description))}</span>` : ''}
    `;
  }
  curlSyntaxTemplate(display = 'flex') {
    return lit_html_x`
      <div class="col m-markdown" style="flex:1; display:${display}; position:relative; max-width: 100%;">
        <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e => {
      copyToClipboard(this.curlSyntax.replace(/\\$/, ''), e);
    }}' part="btn btn-fill"> Copy </button>
        <pre style="white-space:pre"><code>${unsafe_html_o(prism_default().highlight(this.curlSyntax.trim().replace(/\\$/, ''), (prism_default()).languages.shell, 'shell'))}</code></pre>
      </div>
      `;
  }
  apiResponseTabTemplate() {
    let responseFormat = '';
    let responseContent = '';
    if (!this.responseIsBlob) {
      if (this.responseHeaders.includes('application/x-ndjson')) {
        responseFormat = 'json';
        const prismLines = this.responseText.split('\n').map(q => prism_default().highlight(q, (prism_default()).languages[responseFormat], responseFormat)).join('\n');
        responseContent = lit_html_x`<code>${unsafe_html_o(prismLines)}</code>`;
      } else if (this.responseHeaders.includes('json')) {
        responseFormat = 'json';
        responseContent = lit_html_x`<code>${unsafe_html_o(prism_default().highlight(this.responseText, (prism_default()).languages[responseFormat], responseFormat))}</code>`;
      } else if (this.responseHeaders.includes('html') || this.responseHeaders.includes('xml')) {
        responseFormat = 'html';
        responseContent = lit_html_x`<code>${unsafe_html_o(prism_default().highlight(this.responseText, (prism_default()).languages[responseFormat], responseFormat))}</code>`;
      } else {
        responseFormat = 'text';
        responseContent = lit_html_x`<code>${this.responseText}</code>`;
      }
    }
    return lit_html_x`
      <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
        <div class="response-message ${this.responseStatus}">Response Status: ${this.responseMessage}</div>
        <div style="flex:1"></div>
        <button class="m-btn" part="btn btn-outline btn-clear-response" @click="${this.clearResponseData}">CLEAR RESPONSE</button>
      </div>
      <div class="tab-panel col" style="border-width:0 0 1px 0;">
        <div id="tab_buttons" class="tab-buttons row" @click="${e => {
      if (e.target.classList.contains('tab-btn') === false) {
        return;
      }
      this.activeResponseTab = e.target.dataset.tab;
    }}">
          <button class="tab-btn ${this.activeResponseTab === 'response' ? 'active' : ''}" data-tab = 'response' > RESPONSE</button>
          <button class="tab-btn ${this.activeResponseTab === 'headers' ? 'active' : ''}"  data-tab = 'headers' > RESPONSE HEADERS</button>
          ${this.showCurlBeforeTry === 'true' ? '' : lit_html_x`<button class="tab-btn ${this.activeResponseTab === 'curl' ? 'active' : ''}" data-tab = 'curl'>CURL</button>`}
        </div>
        ${this.responseIsBlob ? lit_html_x`
            <div class="tab-content col" style="flex:1; display:${this.activeResponseTab === 'response' ? 'flex' : 'none'};">
              ${this.responseBlobType === 'image' ? lit_html_x`<img style="max-height:var(--resp-area-height, 400px); object-fit:contain;" class="mar-top-8" src="${this.responseBlobUrl}"></img>` : ''}  
              <button class="m-btn thin-border mar-top-8" style="width:135px" @click='${e => {
      downloadResource(this.responseBlobUrl, this.respContentDisposition, e);
    }}' part="btn btn-outline">
                DOWNLOAD
              </button>
              ${this.responseBlobType === 'view' || this.responseBlobType === 'image' ? lit_html_x`<button class="m-btn thin-border mar-top-8" style="width:135px"  @click='${e => {
      viewResource(this.responseBlobUrl, e);
    }}' part="btn btn-outline">VIEW (NEW TAB)</button>` : ''}
            </div>` : lit_html_x`
            <div class="tab-content col m-markdown" style="flex:1; display:${this.activeResponseTab === 'response' ? 'flex' : 'none'};" >
              <button class="toolbar-btn" style="position:absolute; top:12px; right:8px" @click='${e => {
      copyToClipboard(this.responseText, e);
    }}' part="btn btn-fill"> Copy </button>
              <pre style="white-space:pre; min-height:50px; height:var(--resp-area-height, 400px); resize:vertical; overflow:auto">${responseContent}</pre>
            </div>`}
        <div class="tab-content col m-markdown" style="flex:1; display:${this.activeResponseTab === 'headers' ? 'flex' : 'none'};" >
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e => {
      copyToClipboard(this.responseHeaders, e);
    }}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${unsafe_html_o(prism_default().highlight(this.responseHeaders, (prism_default()).languages.css, 'css'))}</code></pre>
        </div>
        ${this.showCurlBeforeTry === 'true' ? '' : this.curlSyntaxTemplate(this.activeResponseTab === 'curl' ? 'flex' : 'none')}
      </div>`;
  }
  apiCallTemplate() {
    var _this$security, _this$api_keys$;
    let selectServerDropdownHtml = '';
    if (this.servers && this.servers.length > 0) {
      selectServerDropdownHtml = lit_html_x`
        <select style="min-width:100px;" @change='${e => {
        this.serverUrl = e.target.value;
      }}'>
          ${this.servers.map(v => lit_html_x`<option value = "${v.url}"> ${v.url} - ${v.description} </option>`)}
        </select>
      `;
    }
    const selectedServerHtml = lit_html_x`
      <div style="display:flex; flex-direction:column;">
        ${selectServerDropdownHtml}
        ${this.serverUrl ? lit_html_x`
            <div style="display:flex; align-items:baseline;">
              <div style="font-weight:bold; padding-right:5px;">API Server</div> 
              <span class = "gray-text"> ${this.serverUrl} </span>
            </div>
          ` : ''}
      </div>  
    `;
    return lit_html_x`
    <div style="display:flex; align-items:flex-end; margin:16px 0; font-size:var(--font-size-small);" part="wrap-request-btn">
      <div class="hide-in-small-screen" style="flex-direction:column; margin:0; width:calc(100% - 60px);">
        <div style="display:flex; flex-direction:row; align-items:center; overflow:hidden;"> 
          ${selectedServerHtml}
        </div>
        <div style="display:flex;">
          <div style="font-weight:bold; padding-right:5px;">Authentication</div>
          ${((_this$security = this.security) === null || _this$security === void 0 ? void 0 : _this$security.length) > 0 ? lit_html_x`
              ${this.api_keys.length > 0 ? lit_html_x`<div style="color:var(--blue); overflow:hidden;"> 
                    ${this.api_keys.length === 1 ? `${(_this$api_keys$ = this.api_keys[0]) === null || _this$api_keys$ === void 0 ? void 0 : _this$api_keys$.typeDisplay} in ${this.api_keys[0].in}` : `${this.api_keys.length} API keys applied`} 
                  </div>` : lit_html_x`<div class="gray-text">Required  <span style="color:var(--red)">(None Applied)</span>`}` : lit_html_x`<span class="gray-text"> Not Required </span>`}
        </div>
      </div>
      ${this.parameters.length > 0 || this.request_body ? lit_html_x`
            <button class="m-btn thin-border" part="btn btn-outline btn-fill" style="margin-right:5px;" @click="${this.onFillRequestData}" title="Fills with example data (if provided)">
              FILL EXAMPLE
            </button>
            <button class="m-btn thin-border" part="btn btn-outline btn-clear" style="margin-right:5px;" @click="${this.onClearRequestData}">
              CLEAR
            </button>` : ''}
      <button class="m-btn primary thin-border" part="btn btn-try" @click="${this.onTryClick}">TRY</button>
    </div>
    <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
      ${this.showCurlBeforeTry === 'true' ? this.curlSyntaxTemplate() : ''}
    </div>
    ${this.responseMessage === '' ? '' : this.apiResponseTabTemplate()}
    `;
  }
  /* eslint-enable indent */

  async onFillRequestData(e) {
    const requestPanelEl = e.target.closest('.request-panel');
    const requestPanelInputEls = [...requestPanelEl.querySelectorAll('input, tag-input, textarea:not(.is-hidden)')];
    requestPanelInputEls.forEach(el => {
      if (el.dataset.example) {
        if (el.tagName.toUpperCase() === 'TAG-INPUT') {
          el.value = el.dataset.example.split('~|~');
        } else {
          el.value = el.dataset.example;
        }
      }
    });
  }
  async onClearRequestData(e) {
    const requestPanelEl = e.target.closest('.request-panel');
    const requestPanelInputEls = [...requestPanelEl.querySelectorAll('input, tag-input, textarea:not(.is-hidden)')];
    requestPanelInputEls.forEach(el => {
      el.value = '';
    });
  }
  buildFetchURL(requestPanelEl) {
    let fetchUrl;
    const pathParamEls = [...requestPanelEl.querySelectorAll("[data-ptype='path']")];
    const queryParamEls = [...requestPanelEl.querySelectorAll("[data-ptype='query']")];
    const queryParamObjTypeEls = [...requestPanelEl.querySelectorAll("[data-ptype='query-object']")];
    fetchUrl = this.path;
    // Generate URL using Path Params
    pathParamEls.map(el => {
      fetchUrl = fetchUrl.replace(`{${el.dataset.pname}}`, encodeURIComponent(el.value));
    });

    // Query Params
    const urlQueryParamsMap = new Map();
    const queryParamsWithReservedCharsAllowed = [];
    if (queryParamEls.length > 0) {
      queryParamEls.forEach(el => {
        const queryParam = new URLSearchParams();
        if (el.dataset.paramAllowReserved === 'true') {
          queryParamsWithReservedCharsAllowed.push(el.dataset.pname);
        }
        if (el.dataset.array === 'false') {
          if (el.value !== '') {
            queryParam.append(el.dataset.pname, el.value);
          }
        } else {
          const {
            paramSerializeStyle,
            paramSerializeExplode
          } = el.dataset;
          let vals = el.value && Array.isArray(el.value) ? el.value : [];
          vals = Array.isArray(vals) ? vals.filter(v => v !== '') : [];
          if (vals.length > 0) {
            if (paramSerializeStyle === 'spaceDelimited') {
              queryParam.append(el.dataset.pname, vals.join(' ').replace(/^\s|\s$/g, ''));
            } else if (paramSerializeStyle === 'pipeDelimited') {
              queryParam.append(el.dataset.pname, vals.join('|').replace(/^\||\|$/g, ''));
            } else {
              if (paramSerializeExplode === 'true') {
                // eslint-disable-line no-lonely-if
                vals.forEach(v => {
                  queryParam.append(el.dataset.pname, v);
                });
              } else {
                queryParam.append(el.dataset.pname, vals.join(',').replace(/^,|,$/g, ''));
              }
            }
          }
        }
        if (queryParam.toString()) {
          urlQueryParamsMap.set(el.dataset.pname, queryParam);
        }
      });
    }

    // Query Params (Dynamic - create from JSON)
    if (queryParamObjTypeEls.length > 0) {
      queryParamObjTypeEls.map(el => {
        const queryParam = new URLSearchParams();
        try {
          let queryParamObj = {};
          const {
            paramSerializeStyle,
            paramSerializeExplode,
            pname
          } = el.dataset;
          queryParamObj = Object.assign(queryParamObj, JSON.parse(el.value.replace(/\s+/g, ' ')));
          if (el.dataset.paramAllowReserved === 'true') {
            queryParamsWithReservedCharsAllowed.push(el.dataset.pname);
          }
          if ('json xml'.includes(paramSerializeStyle)) {
            if (paramSerializeStyle === 'json') {
              queryParam.append(el.dataset.pname, JSON.stringify(queryParamObj));
            } else if (paramSerializeStyle === 'xml') {
              queryParam.append(el.dataset.pname, json2xml(queryParamObj));
            }
          } else {
            for (const key in queryParamObj) {
              const pKey = `${pname}[${key}]`;
              if (typeof queryParamObj[key] === 'object') {
                if (Array.isArray(queryParamObj[key])) {
                  if (paramSerializeStyle === 'spaceDelimited') {
                    queryParam.append(pKey, queryParamObj[key].join(' '));
                  } else if (paramSerializeStyle === 'pipeDelimited') {
                    queryParam.append(pKey, queryParamObj[key].join('|'));
                  } else {
                    if (paramSerializeExplode === 'true') {
                      // eslint-disable-line no-lonely-if
                      queryParamObj[key].forEach(v => {
                        queryParam.append(pKey, v);
                      });
                    } else {
                      queryParam.append(pKey, queryParamObj[key]);
                    }
                  }
                }
              } else {
                queryParam.append(pKey, queryParamObj[key]);
              }
            }
          }
        } catch (err) {
          console.error('RapiDoc: unable to parse %s into object', el.value); // eslint-disable-line no-console
        }

        if (queryParam.toString()) {
          urlQueryParamsMap.set(el.dataset.pname, queryParam);
        }
      });
    }
    let urlQueryParamString = '';
    if (urlQueryParamsMap.size) {
      urlQueryParamsMap.forEach((val, pname) => {
        if (queryParamsWithReservedCharsAllowed.includes(pname)) {
          urlQueryParamString += `${pname}=`;
          urlQueryParamString += val.getAll(pname).join(`&${pname}=`);
          urlQueryParamString += '&';
        } else {
          urlQueryParamString += `${val.toString()}&`;
        }
      });
      urlQueryParamString = urlQueryParamString.slice(0, -1);
    }
    if (urlQueryParamString.length !== 0) {
      fetchUrl = `${fetchUrl}${fetchUrl.includes('?') ? '&' : '?'}${urlQueryParamString}`;
    }

    // Add authentication Query-Param if provided
    this.api_keys.filter(v => v.in === 'query').forEach(v => {
      fetchUrl = `${fetchUrl}${fetchUrl.includes('?') ? '&' : '?'}${v.name}=${encodeURIComponent(v.finalKeyValue)}`;
    });
    fetchUrl = `${this.serverUrl.replace(/\/$/, '')}${fetchUrl}`;
    return fetchUrl;
  }
  buildFetchHeaders(requestPanelEl) {
    var _this$closest;
    const respEl = (_this$closest = this.closest('.expanded-req-resp-container, .req-resp-container')) === null || _this$closest === void 0 ? void 0 : _this$closest.getElementsByTagName('api-response')[0];
    const headerParamEls = [...requestPanelEl.querySelectorAll("[data-ptype='header']")];
    const requestBodyContainerEl = requestPanelEl.querySelector('.request-body-container');
    const acceptHeader = respEl === null || respEl === void 0 ? void 0 : respEl.selectedMimeType;
    const reqHeaders = new Headers();
    if (acceptHeader) {
      // Uses the acceptHeader from Response panel
      reqHeaders.append('Accept', acceptHeader);
    } else if (this.accept) {
      reqHeaders.append('Accept', this.accept);
    }

    // Add Authentication Header if provided
    this.api_keys.filter(v => v.in === 'header').forEach(v => {
      reqHeaders.append(v.name, v.finalKeyValue);
    });

    // Add Header Params
    headerParamEls.map(el => {
      if (el.value) {
        reqHeaders.append(el.dataset.pname, el.value);
      }
    });
    if (requestBodyContainerEl) {
      const requestBodyType = requestBodyContainerEl.dataset.selectedRequestBodyType;
      // Common for all request-body
      if (!requestBodyType.includes('form-data')) {
        // For multipart/form-data dont set the content-type to allow creation of browser generated part boundaries
        reqHeaders.append('Content-Type', requestBodyType);
      }
    }
    return reqHeaders;
  }
  buildFetchBodyOptions(requestPanelEl) {
    const requestBodyContainerEl = requestPanelEl.querySelector('.request-body-container');
    const fetchOptions = {
      method: this.method.toUpperCase()
    };
    if (requestBodyContainerEl) {
      const requestBodyType = requestBodyContainerEl.dataset.selectedRequestBodyType;
      if (requestBodyType.includes('form-urlencoded')) {
        // url-encoded Form Params (dynamic) - Parse JSON and generate Params
        const formUrlDynamicTextAreaEl = requestPanelEl.querySelector("[data-ptype='dynamic-form']");
        if (formUrlDynamicTextAreaEl) {
          const val = formUrlDynamicTextAreaEl.value;
          const formUrlDynParams = new URLSearchParams();
          let proceed = true;
          let tmpObj;
          if (val) {
            try {
              tmpObj = JSON.parse(val);
            } catch (err) {
              proceed = false;
              console.warn('RapiDoc: Invalid JSON provided', err); // eslint-disable-line no-console
            }
          } else {
            proceed = false;
          }
          if (proceed) {
            for (const prop in tmpObj) {
              formUrlDynParams.append(prop, JSON.stringify(tmpObj[prop]));
            }
            fetchOptions.body = formUrlDynParams;
          }
        } else {
          // url-encoded Form Params (regular)
          const formUrlEls = [...requestPanelEl.querySelectorAll("[data-ptype='form-urlencode']")];
          const formUrlParams = new URLSearchParams();
          formUrlEls.filter(v => v.type !== 'file').forEach(el => {
            if (el.dataset.array === 'false') {
              if (el.value) {
                formUrlParams.append(el.dataset.pname, el.value);
              }
            } else {
              const vals = el.value && Array.isArray(el.value) ? el.value.join(',') : '';
              formUrlParams.append(el.dataset.pname, vals);
            }
          });
          fetchOptions.body = formUrlParams;
        }
      } else if (requestBodyType.includes('form-data')) {
        const formDataParams = new FormData();
        const formDataEls = [...requestPanelEl.querySelectorAll("[data-ptype='form-data']")];
        formDataEls.forEach(el => {
          if (el.dataset.array === 'false') {
            if (el.type === 'file' && el.files[0]) {
              formDataParams.append(el.dataset.pname, el.files[0], el.files[0].name);
            } else if (el.value) {
              formDataParams.append(el.dataset.pname, el.value);
            }
          } else if (el.value && Array.isArray(el.value)) {
            formDataParams.append(el.dataset.pname, el.value.join(','));
          }
        });
        fetchOptions.body = formDataParams;
      } else if (/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(requestBodyType)) {
        const bodyParamFileEl = requestPanelEl.querySelector('.request-body-param-file');
        if (bodyParamFileEl !== null && bodyParamFileEl !== void 0 && bodyParamFileEl.files[0]) {
          fetchOptions.body = bodyParamFileEl.files[0]; // eslint-disable-line prefer-destructuring
        }
      } else if (requestBodyType.includes('json') || requestBodyType.includes('xml') || requestBodyType.includes('text')) {
        const exampleTextAreaEl = requestPanelEl.querySelector('.request-body-param-user-input');
        if (exampleTextAreaEl !== null && exampleTextAreaEl !== void 0 && exampleTextAreaEl.value) {
          fetchOptions.body = exampleTextAreaEl.value;
        }
      }
    }
    return fetchOptions;
  }
  async onTryClick(e) {
    const tryBtnEl = e.target;
    const requestPanelEl = tryBtnEl.closest('.request-panel');
    const fetchUrl = this.buildFetchURL(requestPanelEl);
    const fetchOptions = this.buildFetchBodyOptions(requestPanelEl);
    const reqHeaders = this.buildFetchHeaders(requestPanelEl);
    this.responseUrl = '';
    this.responseHeaders = [];
    this.curlSyntax = this.generateCURLSyntax(fetchUrl, reqHeaders, fetchOptions, requestPanelEl);
    this.responseStatus = 'success';
    this.responseIsBlob = false;
    this.respContentDisposition = '';
    if (this.responseBlobUrl) {
      URL.revokeObjectURL(this.responseBlobUrl);
      this.responseBlobUrl = '';
    }
    if (this.fetchCredentials) {
      fetchOptions.credentials = this.fetchCredentials;
    }
    const controller = new AbortController();
    const {
      signal
    } = controller;
    fetchOptions.headers = reqHeaders;
    const tempRequest = {
      url: fetchUrl,
      ...fetchOptions
    };
    this.dispatchEvent(new CustomEvent('before-try', {
      bubbles: true,
      composed: true,
      detail: {
        request: tempRequest,
        controller
      }
    }));
    const updatedFetchOptions = {
      method: tempRequest.method,
      headers: tempRequest.headers,
      credentials: tempRequest.credentials,
      body: tempRequest.body
    };
    const fetchRequest = new Request(tempRequest.url, updatedFetchOptions);
    let fetchResponse;
    let responseClone;
    try {
      let respBlob;
      let respJson;
      let respText;
      tryBtnEl.disabled = true;
      this.responseText = '⌛';
      this.responseMessage = '';
      this.requestUpdate();
      const startTime = performance.now();
      fetchResponse = await fetch(fetchRequest, {
        signal
      });
      const endTime = performance.now();
      // Allow to modify response
      // let resolveModifiedResponse; // Create a promise that will be resolved from the event listener
      // const modifiedResponsePromise = new Promise((resolve) => {
      //   resolveModifiedResponse = resolve;
      // });
      // this.dispatchEvent(new CustomEvent('fetched-try', {
      //   bubbles: true,
      //   composed: true,
      //   detail: {
      //     request: fetchRequest,
      //     response: fetchResponse,
      //     resolveModifiedResponse, // pass the resolver function
      //   },
      // }));
      // fetchResponse = await modifiedResponsePromise; // Wait for the modified response
      responseClone = fetchResponse.clone(); // create a response clone to allow reading response body again (response.json, response.text etc)
      tryBtnEl.disabled = false;
      this.responseMessage = lit_html_x`${fetchResponse.statusText ? `${fetchResponse.statusText}:${fetchResponse.status}` : fetchResponse.status} <div style="color:var(--light-fg)"> Took ${Math.round(endTime - startTime)} milliseconds </div>`;
      this.responseUrl = fetchResponse.url;
      const respHeadersObj = {};
      fetchResponse.headers.forEach((hdrVal, hdr) => {
        respHeadersObj[hdr] = hdrVal;
        this.responseHeaders = `${this.responseHeaders}${hdr}: ${hdrVal}\n`;
      });
      const contentType = fetchResponse.headers.get('content-type');
      const respEmpty = (await fetchResponse.clone().text()).length === 0;
      if (respEmpty) {
        this.responseText = '';
      } else if (contentType) {
        if (contentType === 'application/x-ndjson') {
          this.responseText = await fetchResponse.text();
        } else if (contentType.includes('json')) {
          if (/charset=[^"']+/.test(contentType)) {
            const encoding = contentType.split('charset=')[1];
            const buffer = await fetchResponse.arrayBuffer();
            try {
              respText = new TextDecoder(encoding).decode(buffer);
            } catch {
              respText = new TextDecoder('utf-8').decode(buffer);
            }
            try {
              respJson = JSON.parse(respText);
              this.responseText = JSON.stringify(respJson, null, 2);
            } catch {
              this.responseText = respText;
            }
          } else {
            respJson = await fetchResponse.json();
            this.responseText = JSON.stringify(respJson, null, 2);
          }
          // eslint-disable-next-line no-useless-escape
        } else if (/^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$|^application\/vnd\./.test(contentType)) {
          this.responseIsBlob = true;
          this.responseBlobType = 'download';
        } else if (/^image/.test(contentType)) {
          this.responseIsBlob = true;
          this.responseBlobType = 'image';
        } else if (/^audio|^image|^video/.test(contentType)) {
          this.responseIsBlob = true;
          this.responseBlobType = 'view';
        } else {
          respText = await fetchResponse.text();
          if (contentType.includes('xml')) {
            this.responseText = dist_default()(respText, {
              textNodesOnSameLine: true,
              indentor: '  '
            });
          } else {
            this.responseText = respText;
          }
        }
        if (this.responseIsBlob) {
          const contentDisposition = fetchResponse.headers.get('content-disposition');
          this.respContentDisposition = contentDisposition ? contentDisposition.split('filename=')[1].replace(/"|'/g, '') : 'filename';
          respBlob = await fetchResponse.blob();
          this.responseBlobUrl = URL.createObjectURL(respBlob);
        }
      } else {
        respText = await fetchResponse.text();
        this.responseText = respText;
      }
      this.dispatchEvent(new CustomEvent('after-try', {
        bubbles: true,
        composed: true,
        detail: {
          request: fetchRequest,
          response: responseClone,
          responseHeaders: respHeadersObj,
          responseBody: respJson || respText || respBlob,
          responseStatus: responseClone.ok
        }
      }));
    } catch (err) {
      tryBtnEl.disabled = false;
      if (err.name === 'AbortError') {
        this.dispatchEvent(new CustomEvent('request-aborted', {
          bubbles: true,
          composed: true,
          detail: {
            err,
            request: fetchRequest
          }
        }));
        this.responseMessage = 'Request Aborted';
        this.responseText = 'Request Aborted';
      } else {
        this.dispatchEvent(new CustomEvent('after-try', {
          bubbles: true,
          composed: true,
          detail: {
            err,
            request: fetchRequest
          }
        }));
        this.responseMessage = `${err.message} (CORS or Network Issue)`;
      }
    }
    this.requestUpdate();
  }
  liveCURLSyntaxUpdate(requestPanelEl) {
    this.applyCURLSyntax(requestPanelEl);
    this.requestUpdate();
  }
  onGenerateCURLClick(e) {
    const requestPanelEl = this.getRequestPanel(e);
    this.applyCURLSyntax(requestPanelEl);
  }
  getRequestPanel(e) {
    return e.target.closest('.request-panel');
  }
  applyCURLSyntax(requestPanelEl) {
    const fetchUrl = this.buildFetchURL(requestPanelEl);
    const fetchOptions = this.buildFetchBodyOptions(requestPanelEl);
    const fetchHeaders = this.buildFetchHeaders(requestPanelEl);
    this.curlSyntax = this.generateCURLSyntax(fetchUrl, fetchHeaders, fetchOptions, requestPanelEl);
  }
  generateCURLSyntax(fetchUrl, fetchHeaders, fetchOptions, requestPanelEl) {
    let curlUrl;
    let curl = '';
    let curlHeaders = '';
    let curlData = '';
    let curlForm = '';
    const requestBodyContainerEl = requestPanelEl.querySelector('.request-body-container');
    if (fetchUrl.startsWith('http') === false) {
      const url = new URL(fetchUrl, window.location.href);
      curlUrl = url.href;
    } else {
      curlUrl = fetchUrl;
    }
    curl = `curl -X ${this.method.toUpperCase()} "${curlUrl}" \\\n`;
    curlHeaders = Array.from(fetchHeaders).map(([key, value]) => ` -H "${key}: ${value}"`).join('\\\n');
    if (curlHeaders) {
      curlHeaders = `${curlHeaders} \\\n`;
    }
    if (fetchOptions.body instanceof URLSearchParams) {
      curlData = ` -d ${fetchOptions.body.toString()} \\\n`;
    } else if (fetchOptions.body instanceof File) {
      curlData = ` --data-binary @${fetchOptions.body.name} \\\n`;
    } else if (fetchOptions.body instanceof FormData) {
      curlForm = Array.from(fetchOptions.body).reduce((aggregator, [key, value]) => {
        if (value instanceof File) {
          return [...aggregator, ` -F "${key}=@${value.name}"`];
        }
        const multiple = value.match(/([^,],)/gm);
        if (multiple) {
          const multipleResults = multiple.map(one => `-F "${key}[]=${one}"`);
          return [...aggregator, ...multipleResults];
        }
        return [...aggregator, ` -F "${key}=${value}"`];
      }, []).join('\\\n');
    } else if (requestBodyContainerEl && requestBodyContainerEl.dataset.selectedRequestBodyType) {
      const requestBodyType = requestBodyContainerEl.dataset.selectedRequestBodyType;
      const exampleTextAreaEl = requestPanelEl.querySelector('.request-body-param-user-input');
      if (exampleTextAreaEl !== null && exampleTextAreaEl !== void 0 && exampleTextAreaEl.value) {
        fetchOptions.body = exampleTextAreaEl.value;
        if (requestBodyType.includes('json')) {
          try {
            curlData = ` -d '${JSON.stringify(JSON.parse(exampleTextAreaEl.value))}' \\\n`;
          } catch (err) {
            // Ignore.
          }
        }
        if (!curlData) {
          curlData = ` -d '${exampleTextAreaEl.value.replace(/'/g, '\'"\'"\'')}' \\\n`;
        }
      }
    }
    return `${curl}${curlHeaders}${curlData}${curlForm}`;
  }
  onAddRemoveFileInput(e, pname, ptype) {
    if (e.target.tagName.toLowerCase() !== 'button') {
      return;
    }
    if (e.target.classList.contains('file-input-remove-btn')) {
      // Remove File Input Set
      const el = e.target.closest('.input-set');
      el.remove();
      return;
    }
    const el = e.target.closest('.file-input-container');

    // Add File Input Set

    // Container
    const newInputContainerEl = document.createElement('div');
    newInputContainerEl.setAttribute('class', 'input-set row');

    // File Input
    const newInputEl = document.createElement('input');
    newInputEl.type = 'file';
    newInputEl.style = 'width:200px; margin-top:2px;';
    newInputEl.setAttribute('data-pname', pname);
    newInputEl.setAttribute('data-ptype', ptype.includes('form-urlencode') ? 'form-urlencode' : 'form-data');
    newInputEl.setAttribute('data-array', 'false');
    newInputEl.setAttribute('data-file-array', 'true');

    // Remover Button
    const newRemoveBtnEl = document.createElement('button');
    newRemoveBtnEl.setAttribute('class', 'file-input-remove-btn');
    newRemoveBtnEl.innerHTML = '&#x2715;';
    newInputContainerEl.appendChild(newInputEl);
    newInputContainerEl.appendChild(newRemoveBtnEl);
    el.insertBefore(newInputContainerEl, e.target);
    // el.appendChild(newInputContainerEl);
  }

  clearResponseData() {
    this.responseUrl = '';
    this.responseHeaders = '';
    this.responseText = '';
    this.responseStatus = 'success';
    this.responseMessage = '';
    this.responseIsBlob = false;
    this.responseBlobType = '';
    this.respContentDisposition = '';
    if (this.responseBlobUrl) {
      URL.revokeObjectURL(this.responseBlobUrl);
      this.responseBlobUrl = '';
    }
  }
  disconnectedCallback() {
    this.curlSyntax = '';
    // Cleanup ObjectURL for the blob data if this component created one
    if (this.responseBlobUrl) {
      URL.revokeObjectURL(this.responseBlobUrl);
      this.responseBlobUrl = '';
    }
    super.disconnectedCallback();
  }
}

// Register the element with the browser
customElements.define('api-request', ApiRequest);
;// CONCATENATED MODULE: ./src/components/schema-table.js

 // eslint-disable-line import/extensions




class SchemaTable extends lit_element_s {
  static get properties() {
    return {
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      allowSchemaDescriptionExpandToggle: {
        type: String,
        attribute: 'allow-schema-description-expand-toggle'
      },
      schemaHideReadOnly: {
        type: String,
        attribute: 'schema-hide-read-only'
      },
      schemaHideWriteOnly: {
        type: String,
        attribute: 'schema-hide-write-only'
      },
      data: {
        type: Object
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.schemaExpandLevel || this.schemaExpandLevel < 1) {
      this.schemaExpandLevel = 99999;
    }
    if (!this.schemaDescriptionExpanded || !'true false'.includes(this.schemaDescriptionExpanded)) {
      this.schemaDescriptionExpanded = 'false';
    }
    if (!this.schemaHideReadOnly || !'true false'.includes(this.schemaHideReadOnly)) {
      this.schemaHideReadOnly = 'true';
    }
    if (!this.schemaHideWriteOnly || !'true false'.includes(this.schemaHideWriteOnly)) {
      this.schemaHideWriteOnly = 'true';
    }
  }
  static get styles() {
    return [font_styles, schema_styles, i`
      .table {
        font-size: var(--font-size-small);
        text-align: left;
        line-height: calc(var(--font-size-small) + 6px);
      }
      .table .tr {
        width: calc(100% - 5px);
        padding: 0 0 0 5px;
        border-bottom: 1px dotted var(--light-border-color);
      }
      .table .td {
        padding: 4px 0;
      }
      .table .key {
        width: 240px;
      }
      .key .key-label {
        font-size: var(--font-size-mono);
      }
      .key.deprecated .key-label {
        color: var(--red);
      }

      .table .key-type {
        white-space: normal;
        width: 150px;
      }
      .collapsed-all-descr .tr:not(.expanded-descr) {
        max-height: calc(var(--font-size-small) + var(--font-size-small));
      }

      .obj-toggle {
        padding: 0 2px;
        border-radius:2px;
        border: 1px solid transparent;
        display: inline-block;
        margin-left: -16px;
        color:var(--primary-color);
        cursor:pointer;
        font-size: calc(var(--font-size-small) + 4px);
        font-family: var(--font-mono);
        background-clip: border-box;
      }
      .obj-toggle:hover {
        border-color: var(--primary-color);
      }
      .tr.expanded + .object-body {
        display:block;
      }
      .tr.collapsed + .object-body {
        display:none;
      }`, custom_styles];
  }

  /* eslint-disable indent */
  render() {
    var _this$data, _this$data2, _this$data3;
    return lit_html_x`
      <div class="table ${this.schemaDescriptionExpanded === 'true' ? 'expanded-all-descr' : 'collapsed-all-descr'}" @click="${e => this.handleAllEvents(e)}">
        <div class='toolbar'>
          <div class="toolbar-item schema-root-type ${((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data['::type']) || ''} "> ${((_this$data2 = this.data) === null || _this$data2 === void 0 ? void 0 : _this$data2['::type']) || ''} </div>
          ${this.allowSchemaDescriptionExpandToggle === 'true' ? lit_html_x`
              <div style="flex:1"></div>
              <div part="schema-multiline-toggle" class='toolbar-item schema-multiline-toggle' > 
                ${this.schemaDescriptionExpanded === 'true' ? 'Single line description' : 'Multiline description'}
              </div>
            ` : ''}
        </div>
        <span part="schema-description" class='m-markdown'> ${unsafe_html_o(marked(((_this$data3 = this.data) === null || _this$data3 === void 0 ? void 0 : _this$data3['::description']) || ''))} </span>
        <div style = 'border:1px solid var(--light-border-color)'>
          <div style='display:flex; background-color: var(--bg2); padding:8px 4px; border-bottom:1px solid var(--light-border-color);'>
            <div class='key' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Field </div>
            <div class='key-type' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Type </div>
            <div class='key-descr' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Description </div>
          </div>
          ${this.data ? lit_html_x`
              ${this.generateTree(this.data['::type'] === 'array' ? this.data['::props'] : this.data, this.data['::type'], this.data['::array-type'])}` : ''}  
        </div>
      </div>  
    `;
  }
  generateTree(data, dataType = 'object', arrayType = '', key = '', description = '', schemaLevel = 0, indentLevel = 0, readOrWrite = '') {
    var _data$Type, _keyLabel;
    if (this.schemaHideReadOnly === 'true') {
      if (dataType === 'array') {
        if (readOrWrite === 'readonly') {
          return;
        }
      }
      if (data && data['::readwrite'] === 'readonly') {
        return;
      }
    }
    if (this.schemaHideWriteOnly === 'true') {
      if (dataType === 'array') {
        if (readOrWrite === 'writeonly') {
          return;
        }
      }
      if (data && data['::readwrite'] === 'writeonly') {
        return;
      }
    }
    if (!data) {
      return lit_html_x`<div class="null" style="display:inline;">
        <span style='margin-left:${(schemaLevel + 1) * 16}px'> &nbsp; </span>
        <span class="key-label xxx-of-key"> ${key.replace('::OPTION~', '')}</span>
        ${dataType === 'array' ? lit_html_x`<span class='mono-font'> [ ] </span>` : dataType === 'object' ? lit_html_x`<span class='mono-font'> { } </span>` : lit_html_x`<span class='mono-font'> schema undefined </span>`}
      </div>`;
    }
    const newSchemaLevel = (_data$Type = data['::type']) !== null && _data$Type !== void 0 && _data$Type.startsWith('xxx-of') ? schemaLevel : schemaLevel + 1;
    const newIndentLevel = dataType === 'xxx-of-option' || data['::type'] === 'xxx-of-option' || key.startsWith('::OPTION') ? indentLevel : indentLevel + 1;
    const leftPadding = 16 * newIndentLevel; // 2 space indentation at each level
    if (Object.keys(data).length === 0) {
      return lit_html_x`<span class="td key object" style='padding-left:${leftPadding}px'>${key}</span>`;
    }
    let keyLabel = '';
    let keyDescr = '';
    let isOneOfLabel = false;
    if (key.startsWith('::ONE~OF') || key.startsWith('::ANY~OF')) {
      keyLabel = key.replace('::', '').replace('~', ' ');
      isOneOfLabel = true;
    } else if (key.startsWith('::OPTION')) {
      const parts = key.split('~');
      keyLabel = parts[1]; // eslint-disable-line prefer-destructuring
      keyDescr = parts[2]; // eslint-disable-line prefer-destructuring
    } else {
      keyLabel = key;
    }
    let detailObjType = '';
    if (data['::type'] === 'object') {
      if (dataType === 'array') {
        detailObjType = 'array of object'; // Array of Object
      } else {
        detailObjType = data['::dataTypeLabel'] || data['::type'];
      }
    } else if (data['::type'] === 'array') {
      if (dataType === 'array') {
        // detailObjType = 'array of array'; // Array of array
        detailObjType = `array of array ${arrayType !== 'object' ? `of ${arrayType}` : ''}`; // Array of array
      } else {
        detailObjType = data['::dataTypeLabel'] || data['::type'];
      }
    }
    if (typeof data === 'object') {
      return lit_html_x`
        ${newSchemaLevel >= 0 && key ? lit_html_x`
            <div class='tr ${newSchemaLevel <= this.schemaExpandLevel ? 'expanded' : 'collapsed'} ${data['::type']}' data-obj='${keyLabel}' title="${data['::deprecated'] ? 'Deprecated' : ''}">
              <div class="td key ${data['::deprecated'] ? 'deprecated' : ''}" style='padding-left:${leftPadding}px'>
                ${keyLabel || keyDescr ? lit_html_x`
                    <span class='obj-toggle ${newSchemaLevel < this.schemaExpandLevel ? 'expanded' : 'collapsed'}' data-obj='${keyLabel}'>
                      ${schemaLevel < this.schemaExpandLevel ? '-' : '+'}
                    </span>` : ''}
                ${data['::type'] === 'xxx-of-option' || data['::type'] === 'xxx-of-array' || key.startsWith('::OPTION') ? lit_html_x`<span class="xxx-of-key" style="margin-left:-6px">${keyLabel}</span><span class="${isOneOfLabel ? 'xxx-of-key' : 'xxx-of-descr'}">${keyDescr}</span>` : keyLabel.endsWith('*') ? lit_html_x`<span class="key-label" style="display:inline-block; margin-left:-6px;">${data['::deprecated'] ? '✗' : ''} ${keyLabel.substring(0, keyLabel.length - 1)}</span><span style='color:var(--red);'>*</span>` : lit_html_x`<span class="key-label" style="display:inline-block; margin-left:-6px;">${data['::deprecated'] ? '✗' : ''} ${keyLabel === '::props' ? '' : keyLabel}</span>`}
                ${data['::type'] === 'xxx-of' && dataType === 'array' ? lit_html_x`<span style="color:var(--primary-color)">ARRAY</span>` : ''} 
              </div>
              <div class='td key-type' title="${data['::readwrite'] === 'readonly' ? 'Read-Only' : data['::readwrite'] === 'writeonly' ? 'Write-Only' : ''}">
                ${(data['::type'] || '').includes('xxx-of') ? '' : detailObjType}
                ${data['::readwrite'] === 'readonly' ? ' 🆁' : data['::readwrite'] === 'writeonly' ? ' 🆆' : ''}
              </div>
              <div class='td key-descr m-markdown-small' style='line-height:1.7'>${unsafe_html_o(marked(description || ''))}</div>
            </div>` : lit_html_x`
            ${data['::type'] === 'array' && dataType === 'array' ? lit_html_x`
                <div class='tr'> 
                  <div class='td key'></div> 
                  <div class='td key-type'>
                    ${arrayType && arrayType !== 'object' ? `${dataType} of ${arrayType}` : dataType}
                  </div> 
                  <div class='td key-descr'></div> 
                </div>` : ''}`}
        <div class='object-body'>
        ${Array.isArray(data) && data[0] ? lit_html_x`${this.generateTree(data[0], 'xxx-of-option', '', '::ARRAY~OF', '', newSchemaLevel, newIndentLevel, '')}` : lit_html_x`
            ${Object.keys(data).map(dataKey => {
        var _data$dataKey;
        return lit_html_x`
              ${['::title', '::description', '::type', '::props', '::deprecated', '::array-type', '::readwrite', '::dataTypeLabel', '::nullable'].includes(dataKey) ? data[dataKey]['::type'] === 'array' || data[dataKey]['::type'] === 'object' ? lit_html_x`${this.generateTree(data[dataKey]['::type'] === 'array' ? data[dataKey]['::props'] : data[dataKey], data[dataKey]['::type'], data[dataKey]['::array-type'] || '', dataKey, data[dataKey]['::description'], newSchemaLevel, newIndentLevel, data[dataKey]['::readwrite'] ? data[dataKey]['::readwrite'] : '')}` : '' : lit_html_x`${this.generateTree(data[dataKey]['::type'] === 'array' ? data[dataKey]['::props'] : data[dataKey], data[dataKey]['::type'], data[dataKey]['::array-type'] || '', dataKey, ((_data$dataKey = data[dataKey]) === null || _data$dataKey === void 0 ? void 0 : _data$dataKey['::description']) || '', newSchemaLevel, newIndentLevel, data[dataKey]['::readwrite'] ? data[dataKey]['::readwrite'] : '')}`}
            `;
      })}
          `}
        <div>
      `;
    }

    // For Primitive Data types
    // eslint-disable-next-line no-unused-vars
    const [type, readOrWriteOnly, constraint, defaultValue, allowedValues, pattern, schemaDescription, schemaTitle, deprecated] = data.split('~|~');
    if (readOrWriteOnly === '🆁' && this.schemaHideReadOnly === 'true') {
      return;
    }
    if (readOrWriteOnly === '🆆' && this.schemaHideWriteOnly === 'true') {
      return;
    }
    const dataTypeCss = type.replace(/┃.*/g, '').replace(/[^a-zA-Z0-9+]/g, '').substring(0, 4).toLowerCase();
    const descrExpander = `${constraint || defaultValue || allowedValues || pattern ? '<span class="descr-expand-toggle">➔</span>' : ''}`;
    let dataTypeHtml = '';
    if (dataType === 'array') {
      dataTypeHtml = lit_html_x` 
        <div class='td key-type ${dataTypeCss}' title="${readOrWrite === 'readonly' ? 'Read-Only' : readOrWriteOnly === 'writeonly' ? 'Write-Only' : ''}">
          [${type}] ${readOrWrite === 'readonly' ? '🆁' : readOrWrite === 'writeonly' ? '🆆' : ''}
        </div>`;
    } else {
      dataTypeHtml = lit_html_x` 
        <div class='td key-type ${dataTypeCss}' title="${readOrWriteOnly === '🆁' ? 'Read-Only' : readOrWriteOnly === '🆆' ? 'Write-Only' : ''}">
          ${type} ${readOrWriteOnly}
        </div>`;
    }
    return lit_html_x`
      <div class = "tr primitive" title="${deprecated ? 'Deprecated' : ''}">
        <div class="td key ${deprecated}" style='padding-left:${leftPadding}px'>
          ${deprecated ? lit_html_x`<span style='color:var(--red);'>✗</span>` : ''}
          ${(_keyLabel = keyLabel) !== null && _keyLabel !== void 0 && _keyLabel.endsWith('*') ? lit_html_x`
              <span class="key-label">${keyLabel.substring(0, keyLabel.length - 1)}</span>
              <span style='color:var(--red);'>*</span>` : key.startsWith('::OPTION') ? lit_html_x`<span class='xxx-of-key'>${keyLabel}</span><span class="xxx-of-descr">${keyDescr}</span>` : lit_html_x`${keyLabel ? lit_html_x`<span class="key-label"> ${keyLabel}</span>` : lit_html_x`<span class="xxx-of-descr">${schemaTitle}</span>`}`}
        </div>
        ${dataTypeHtml}
        <div class='td key-descr' style='font-size: var(--font-size-small)'>
          ${lit_html_x`<span class="m-markdown-small">
            ${unsafe_html_o(marked(dataType === 'array' ? `${descrExpander} ${description}` : schemaTitle ? `${descrExpander} <b>${schemaTitle}:</b> ${schemaDescription}` : `${descrExpander} ${schemaDescription}`))}
          </span>`}
          ${constraint ? lit_html_x`<div class='' style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Constraints: </span> ${constraint}</div>` : ''}
          ${defaultValue ? lit_html_x`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Default: </span>${defaultValue}</div>` : ''}
          ${allowedValues ? lit_html_x`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>${type === 'const' ? 'Value' : 'Allowed'}: </span>${allowedValues}</div>` : ''}
          ${pattern ? lit_html_x`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Pattern: </span>${pattern}</div>` : ''}
        </div>
      </div>
    `;
  }
  /* eslint-enable indent */

  handleAllEvents(e) {
    if (e.target.classList.contains('obj-toggle')) {
      this.toggleObjectExpand(e);
    } else if (e.target.classList.contains('schema-multiline-toggle')) {
      this.schemaDescriptionExpanded = this.schemaDescriptionExpanded === 'true' ? 'false' : 'true';
    } else if (e.target.classList.contains('descr-expand-toggle')) {
      const trEl = e.target.closest('.tr');
      if (trEl) {
        trEl.classList.toggle('expanded-descr');
        trEl.style.maxHeight = trEl.scrollHeight;
      }
    }
  }
  toggleObjectExpand(e) {
    const rowEl = e.target.closest('.tr');
    if (rowEl.classList.contains('expanded')) {
      rowEl.classList.add('collapsed');
      rowEl.classList.remove('expanded');
      e.target.innerText = '+';
    } else {
      rowEl.classList.remove('collapsed');
      rowEl.classList.add('expanded');
      e.target.innerText = '-';
    }
  }
}
customElements.define('schema-table', SchemaTable);
;// CONCATENATED MODULE: ./src/components/api-response.js

 // eslint-disable-line import/extensions












class ApiResponse extends lit_element_s {
  constructor() {
    super();
    this.selectedStatus = '';
    this.headersForEachRespStatus = {};
    this.mimeResponsesForEachStatus = {};
    this.activeSchemaTab = 'schema';
  }
  static get properties() {
    return {
      callback: {
        type: String
      },
      webhook: {
        type: String
      },
      responses: {
        type: Object
      },
      parser: {
        type: Object
      },
      schemaStyle: {
        type: String,
        attribute: 'schema-style'
      },
      renderStyle: {
        type: String,
        attribute: 'render-style'
      },
      selectedStatus: {
        type: String,
        attribute: 'selected-status'
      },
      selectedMimeType: {
        type: String,
        attribute: 'selected-mime-type'
      },
      activeSchemaTab: {
        type: String,
        attribute: 'active-schema-tab'
      },
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      allowSchemaDescriptionExpandToggle: {
        type: String,
        attribute: 'allow-schema-description-expand-toggle'
      },
      schemaHideReadOnly: {
        type: String,
        attribute: 'schema-hide-read-only'
      },
      schemaHideWriteOnly: {
        type: String,
        attribute: 'schema-hide-write-only'
      }
    };
  }
  static get styles() {
    return [font_styles, flex_styles, tab_styles, table_styles, input_styles, border_styles, i`
      :where(button, input[type="checkbox"], [tabindex="0"]):focus-visible { box-shadow: var(--focus-shadow); }
      :where(input[type="text"], input[type="password"], select, textarea):focus-visible { border-color: var(--primary-color); }
      .resp-head{
        vertical-align: middle;
        padding:16px 0 8px;
      }
      .resp-head.divider{
        border-top: 1px solid var(--border-color);
        margin-top:10px;
      }
      .resp-status{ 
        font-weight:bold;
        font-size:calc(var(--font-size-small) + 1px);
      }
      .resp-descr{
        font-size:calc(var(--font-size-small) + 1px);
        color:var(--light-fg);
        text-align:left;
      }
      .top-gap{margin-top:16px;}
      .example-panel{
        font-size:var(--font-size-small);
        margin:0;
      }
      .focused-mode,
      .read-mode {
        padding-top:24px;
        margin-top:12px;
        border-top: 1px dashed var(--border-color);
      }`, custom_styles];
  }
  render() {
    return lit_html_x`
    <div class="col regular-font response-panel ${this.renderStyle}-mode">
      <div class=" ${this.callback === 'true' ? 'tiny-title' : 'req-res-title'} "> 
        ${this.callback === 'true' ? 'CALLBACK RESPONSE' : 'RESPONSE'}
      </div>
      <div>
        ${this.responseTemplate()}
      <div>  
    </div>  
    `;
  }
  resetSelection() {
    this.selectedStatus = '';
    this.selectedMimeType = '';
  }

  /* eslint-disable indent */
  responseTemplate() {
    if (!this.responses) {
      return '';
    }
    for (const statusCode in this.responses) {
      if (!this.selectedStatus) {
        this.selectedStatus = statusCode;
      }
      const allMimeResp = {};
      for (const mimeResp in (_this$responses$statu = this.responses[statusCode]) === null || _this$responses$statu === void 0 ? void 0 : _this$responses$statu.content) {
        var _this$responses$statu, _respExamples$;
        const mimeRespObj = this.responses[statusCode].content[mimeResp];
        if (!this.selectedMimeType) {
          this.selectedMimeType = mimeResp;
        }
        // Generate Schema
        const schemaTree = schemaInObjectNotation(mimeRespObj.schema, {});
        // Generate Example
        const respExamples = generateExample(mimeRespObj.schema, mimeResp, mimeRespObj.examples, mimeRespObj.example, this.callback === 'true' || this.webhook === 'true' ? false : true,
        // eslint-disable-line no-unneeded-ternary
        this.callback === 'true' || this.webhook === 'true' ? true : false,
        // eslint-disable-line no-unneeded-ternary
        mimeResp.includes('json') ? 'json' : 'text');
        allMimeResp[mimeResp] = {
          description: this.responses[statusCode].description,
          examples: respExamples,
          selectedExample: ((_respExamples$ = respExamples[0]) === null || _respExamples$ === void 0 ? void 0 : _respExamples$.exampleId) || '',
          schemaTree
        };
      }
      // Headers for each response status
      const tempHeaders = [];
      for (const key in (_this$responses$statu2 = this.responses[statusCode]) === null || _this$responses$statu2 === void 0 ? void 0 : _this$responses$statu2.headers) {
        var _this$responses$statu2;
        tempHeaders.push({
          name: key,
          ...this.responses[statusCode].headers[key]
        });
      }
      this.headersForEachRespStatus[statusCode] = tempHeaders;
      this.mimeResponsesForEachStatus[statusCode] = allMimeResp;
    }
    return lit_html_x`
      ${Object.keys(this.responses).length > 1 ? lit_html_x`<div class='row' style='flex-wrap:wrap'>
          ${Object.keys(this.responses).map(respStatus => lit_html_x`
            ${respStatus === '$$ref' // Swagger-Client parser creates '$$ref' object if JSON references are used to create responses - this should be ignored
    ? '' : lit_html_x`
                <button 
                  @click="${() => {
      this.selectedStatus = respStatus;
      if (this.responses[respStatus].content && Object.keys(this.responses[respStatus].content)[0]) {
        this.selectedMimeType = Object.keys(this.responses[respStatus].content)[0]; // eslint-disable-line prefer-destructuring
      } else {
        this.selectedMimeType = undefined;
      }
    }}"
                  class='m-btn small ${this.selectedStatus === respStatus ? 'primary' : ''}'
                  part="btn ${this.selectedStatus === respStatus ? 'btn-response-status btn-selected-response-status' : ' btn-response-status'}"
                  style='margin: 8px 4px 0 0'
                > 
                  ${respStatus} 
                </button>`}`)}` : lit_html_x`<span>${Object.keys(this.responses)[0]}</span>`}
      </div>

      ${Object.keys(this.responses).map(status => {
      var _this$responses$statu3, _this$headersForEachR;
      return lit_html_x`
        <div style = 'display: ${status === this.selectedStatus ? 'block' : 'none'}' >
          <div class="top-gap">
            <span class="resp-descr m-markdown ">${unsafe_html_o(marked(((_this$responses$statu3 = this.responses[status]) === null || _this$responses$statu3 === void 0 ? void 0 : _this$responses$statu3.description) || ''))}</span>
            ${this.headersForEachRespStatus[status] && ((_this$headersForEachR = this.headersForEachRespStatus[status]) === null || _this$headersForEachR === void 0 ? void 0 : _this$headersForEachR.length) > 0 ? lit_html_x`${this.responseHeaderListTemplate(this.headersForEachRespStatus[status])}` : ''}
          </div>
          ${Object.keys(this.mimeResponsesForEachStatus[status]).length === 0 ? '' : lit_html_x`  
              <div class="tab-panel col">
                <div class="tab-buttons row" @click="${e => {
        if (e.target.tagName.toLowerCase() === 'button') {
          this.activeSchemaTab = e.target.dataset.tab;
        }
      }}" >
                  <button class="tab-btn ${this.activeSchemaTab === 'example' ? 'active' : ''}" data-tab = 'example'>EXAMPLE </button>
                  <button class="tab-btn ${this.activeSchemaTab !== 'example' ? 'active' : ''}" data-tab = 'schema' >SCHEMA</button>
                  <div style="flex:1"></div>
                  ${Object.keys(this.mimeResponsesForEachStatus[status]).length === 1 ? lit_html_x`<span class='small-font-size gray-text' style='align-self:center; margin-top:8px;'> ${Object.keys(this.mimeResponsesForEachStatus[status])[0]} </span>` : lit_html_x`${this.mimeTypeDropdownTemplate(Object.keys(this.mimeResponsesForEachStatus[status]))}`}
                </div>
                ${this.activeSchemaTab === 'example' ? lit_html_x`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeExampleTemplate(this.mimeResponsesForEachStatus[status][this.selectedMimeType])}
                    </div>` : lit_html_x`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeSchemaTemplate(this.mimeResponsesForEachStatus[status][this.selectedMimeType])}
                    </div>`}
              </div>
            `}`;
    })}
    `;
  }
  responseHeaderListTemplate(respHeaders) {
    return lit_html_x`
      <div style="padding:16px 0 8px 0" class="resp-headers small-font-size bold-text">RESPONSE HEADERS</div> 
      <table role="presentation" style="border-collapse: collapse; margin-bottom:16px; border:1px solid var(--border-color); border-radius: var(--border-radius)" class="small-font-size mono-font">
        ${respHeaders.map(v => {
      var _v$schema, _v$schema2;
      return lit_html_x`
          <tr>
            <td style="padding:8px; vertical-align: baseline; min-width:120px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${v.name || ''}
            </td> 
            <td style="padding:4px; vertical-align: baseline; padding:0 5px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${((_v$schema = v.schema) === null || _v$schema === void 0 ? void 0 : _v$schema.type) || ''}
            </td> 
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color);text-overflow: ellipsis;">
              <div class="m-markdown-small regular-font" >${unsafe_html_o(marked(v.description || ''))}</div>
            </td>
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${((_v$schema2 = v.schema) === null || _v$schema2 === void 0 ? void 0 : _v$schema2.example) || ''}
            </td>
          </tr>
        `;
    })}
    </table>`;
  }
  mimeTypeDropdownTemplate(mimeTypes) {
    return lit_html_x`
      <select aria-label='mime types' @change="${e => {
      this.selectedMimeType = e.target.value;
    }}" style='margin-bottom: -1px; z-index:1'>
        ${mimeTypes.map(mimeType => lit_html_x`<option value='${mimeType}' ?selected = '${mimeType === this.selectedMimeType}'> ${mimeType} </option>`)}
      </select>`;
  }
  onSelectExample(e) {
    const exampleContainerEl = e.target.closest('.example-panel');
    const exampleEls = [...exampleContainerEl.querySelectorAll('.example')];
    exampleEls.forEach(v => {
      v.style.display = v.dataset.example === e.target.value ? 'block' : 'none';
    });
  }
  mimeExampleTemplate(mimeRespDetails) {
    if (!mimeRespDetails) {
      return lit_html_x`
        <pre style='color:var(--red)' class = '${this.renderStyle === 'read' ? 'read example-panel border pad-8-16' : 'example-panel border-top'}'> No example provided </pre>
      `;
    }
    return lit_html_x`
      ${mimeRespDetails.examples.length === 1 ? lit_html_x`
          ${mimeRespDetails.examples[0].exampleFormat === 'json' ? lit_html_x`
              ${mimeRespDetails.examples[0].exampleSummary && mimeRespDetails.examples[0].exampleSummary.length > 80 ? lit_html_x`<div style="padding: 4px 0"> ${mimeRespDetails.examples[0].exampleSummary} </div>` : ''}
              ${mimeRespDetails.examples[0].exampleDescription ? lit_html_x`<div class="m-markdown-small" style="padding: 4px 0"> ${unsafe_html_o(marked(mimeRespDetails.examples[0].exampleDescription || ''))} </div>` : ''}
              <json-tree 
                render-style = '${this.renderStyle}'
                .data="${mimeRespDetails.examples[0].exampleValue}"
                class = 'example-panel ${this.renderStyle === 'read' ? 'border pad-8-16' : 'border-top pad-top-8'}'
                exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
              ></json-tree>` : lit_html_x`
              ${mimeRespDetails.examples[0].exampleSummary && mimeRespDetails.examples[0].exampleSummary.length > 80 ? lit_html_x`<div style="padding: 4px 0"> ${mimeRespDetails.examples[0].exampleSummary} </div>` : ''}
              ${mimeRespDetails.examples[0].exampleDescription ? lit_html_x`<div class="m-markdown-small" style="padding: 4px 0"> ${unsafe_html_o(marked(mimeRespDetails.examples[0].exampleDescription || ''))} </div>` : ''}
              <pre class = 'example-panel ${this.renderStyle === 'read' ? 'border pad-8-16' : 'border-top pad-top-8'}'>${mimeRespDetails.examples[0].exampleValue}</pre>
            `}` : lit_html_x`
          <span class = 'example-panel ${this.renderStyle === 'read' ? 'border pad-8-16' : 'border-top pad-top-8'}'>
            <select aria-label='response examples' style="min-width:100px; max-width:100%" @change='${e => this.onSelectExample(e)}'>
              ${mimeRespDetails.examples.map(v => lit_html_x`<option value="${v.exampleId}" ?selected=${v.exampleId === mimeRespDetails.selectedExample} > 
                ${v.exampleSummary.length > 80 ? v.exampleId : v.exampleSummary} 
              </option>`)}
            </select>
            ${mimeRespDetails.examples.map(v => lit_html_x`
              <div class="example" data-example = '${v.exampleId}' style = "display: ${v.exampleId === mimeRespDetails.selectedExample ? 'block' : 'none'}">
                ${v.exampleSummary && v.exampleSummary.length > 80 ? lit_html_x`<div style="padding: 4px 0"> ${v.exampleSummary} </div>` : ''}
                ${v.exampleDescription ? lit_html_x`<div class="m-markdown-small"  style="padding: 4px 0"> ${unsafe_html_o(marked(v.exampleDescription || ''))} </div>` : ''}
                ${v.exampleFormat === 'json' ? lit_html_x`
                    <json-tree 
                      render-style = '${this.renderStyle}'
                      .data = '${v.exampleValue}'
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
                    ></json-tree>` : lit_html_x`<pre>${v.exampleValue}</pre>`}
              </div>  
            `)}
          </span>  
        `}
    `;
  }
  mimeSchemaTemplate(mimeRespDetails) {
    if (!mimeRespDetails) {
      return lit_html_x`
        <pre style='color:var(--red)' class = '${this.renderStyle === 'read' ? 'border pad-8-16' : 'border-top'}'> Schema not found</pre>
      `;
    }
    return lit_html_x`
      ${this.schemaStyle === 'table' ? lit_html_x`
          <schema-table
            .data = "${mimeRespDetails.schemaTree}"
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
            exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </schema-table> ` : lit_html_x`
          <schema-tree
            .data = '${mimeRespDetails.schemaTree}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
            exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </schema-tree>`}`;
  }
  /* eslint-enable indent */
}

// Register the element with the browser
customElements.define('api-response', ApiResponse);
;// CONCATENATED MODULE: ./src/templates/expanded-endpoint-template.js

 // eslint-disable-line import/extensions








/* eslint-disable indent */
function headingRenderer(tagElementId) {
  const renderer = new marked.Renderer();
  renderer.heading = (text, level, raw, slugger) => `<h${level} class="observe-me" id="${tagElementId}--${slugger.slug(raw)}">${text}</h${level}>`;
  return renderer;
}
function expandCollapseTagDescription(e) {
  const tagDescriptionEl = e.target.closest('.tag-container').querySelector('.tag-description');
  const tagIconEl = e.target.closest('.tag-container').querySelector('.tag-icon');
  if (tagDescriptionEl && tagIconEl) {
    const isExpanded = tagDescriptionEl.classList.contains('expanded');
    if (isExpanded) {
      tagDescriptionEl.style.maxHeight = 0;
      tagDescriptionEl.classList.replace('expanded', 'collapsed');
      tagIconEl.classList.replace('expanded', 'collapsed');
    } else {
      tagDescriptionEl.style.maxHeight = `${tagDescriptionEl.scrollHeight}px`;
      tagDescriptionEl.classList.replace('collapsed', 'expanded');
      tagIconEl.classList.replace('collapsed', 'expanded');
    }
  }
}
function expandedEndpointBodyTemplate(path, tagName = '', tagDescription = '') {
  var _path$xBadges, _path$externalDocs, _path$externalDocs2, _path$externalDocs3, _path$externalDocs4, _path$externalDocs5, _path$externalDocs6, _path$servers, _path$servers$;
  const acceptContentTypes = new Set();
  for (const respStatus in path.responses) {
    for (const acceptContentType in (_path$responses$respS = path.responses[respStatus]) === null || _path$responses$respS === void 0 ? void 0 : _path$responses$respS.content) {
      var _path$responses$respS;
      acceptContentTypes.add(acceptContentType.trim());
    }
  }
  const accept = [...acceptContentTypes].join(', ');

  // Filter API Keys that are non-empty and are applicable to the the path
  const nonEmptyApiKeys = this.resolvedSpec.securitySchemes.filter(v => {
    var _path$security;
    return v.finalKeyValue && ((_path$security = path.security) === null || _path$security === void 0 ? void 0 : _path$security.some(ps => v.securitySchemeId in ps));
  }) || [];

  // If a RapiDoc API Key is specified on the element and its value is not hyphen(-) then include it for all paths
  const rapiDocApiKey = this.resolvedSpec.securitySchemes.find(v => v.securitySchemeId === rapidocApiKey && v.value !== '-');
  if (rapiDocApiKey) {
    nonEmptyApiKeys.push(rapiDocApiKey);
  }
  const codeSampleTabPanel = path.xCodeSamples ? codeSamplesTemplate.call(this, path.xCodeSamples) : '';
  return lit_html_x`
    ${this.renderStyle === 'read' ? lit_html_x`<div class='divider' part="operation-divider"></div>` : ''}
    <div class='expanded-endpoint-body observe-me ${path.method} ${path.deprecated ? 'deprecated' : ''} ' part="section-operation ${path.elementId}" id='${path.elementId}'>
      ${this.renderStyle === 'focused' && tagName !== 'General ⦂' ? lit_html_x`
          <div class="tag-container" part="section-operation-tag"> 
            <span class="upper" style="font-weight:bold; font-size:18px;"> ${tagName} </span>
            ${tagDescription ? lit_html_x`
                <svg class="tag-icon collapsed" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" fill="none" style="stroke:var(--primary-color); vertical-align:top; cursor:pointer"
                @click="${e => {
    expandCollapseTagDescription.call(this, e);
  }}"
                >
                  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"></path><path d="M18 4v17"></path><path d="M15 18l3 3l3 -3"></path>
                </svg>
                <div class="tag-description collapsed" style="max-height:0px; overflow:hidden; margin-top:16px; border:1px solid var(--border-color)"> 
                  <div class="m-markdown" style="padding:8px"> ${unsafe_html_o(marked(tagDescription))}</div>  
                </div>` : ''}  
          </div>
        ` : ''}
      ${path.deprecated ? lit_html_x`<div class="bold-text red-text"> DEPRECATED </div>` : ''}
      ${lit_html_x`
        ${path.xBadges && ((_path$xBadges = path.xBadges) === null || _path$xBadges === void 0 ? void 0 : _path$xBadges.length) > 0 ? lit_html_x`
            <div style="display:flex; flex-wrap:wrap; margin-bottom: -24px; font-size: var(--font-size-small);">
              ${path.xBadges.map(v => lit_html_x`<span style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${v.color}, var(--input-bg)); color:var(--${v.color}); border:1px solid var(--${v.color})">${v.label}</span>`)}
            </div>
            ` : ''}
        <h2 part="section-operation-summary"> ${path.shortSummary || `${path.method.toUpperCase()} ${path.path}`}</h2>
        ${path.isWebhook ? lit_html_x`<span part="section-operation-webhook" style="color:var(--primary-color); font-weight:bold; font-size: var(--font-size-regular);"> WEBHOOK </span>` : lit_html_x`
            <div part="section-operation-webhook-method" class="mono-font regular-font-size" style="text-align:left; direction:ltr; padding: 8px 0; color:var(--fg3)"> 
              <span part="label-operation-method" class="regular-font upper method-fg bold-text ${path.method}">${path.method}</span> 
              <span part="label-operation-path">${path.path}</span>
            </div>
          `}
        <slot name="${path.elementId}"></slot>`}
      ${path.description ? lit_html_x`<div class="m-markdown"> ${unsafe_html_o(marked(path.description))}</div>` : ''}
      ${pathSecurityTemplate.call(this, path.security)}
      ${(_path$externalDocs = path.externalDocs) !== null && _path$externalDocs !== void 0 && _path$externalDocs.url || (_path$externalDocs2 = path.externalDocs) !== null && _path$externalDocs2 !== void 0 && _path$externalDocs2.description ? lit_html_x`<div style="background-color:var(--bg3); padding:2px 8px 8px 8px; margin:8px 0; border-radius:var(--border-radius)"> 
            <div class="m-markdown"> ${unsafe_html_o(marked(((_path$externalDocs3 = path.externalDocs) === null || _path$externalDocs3 === void 0 ? void 0 : _path$externalDocs3.description) || ''))} </div>
            ${(_path$externalDocs4 = path.externalDocs) !== null && _path$externalDocs4 !== void 0 && _path$externalDocs4.url ? lit_html_x`<a style="font-family:var(--font-mono); font-size:var(--font-size-small)" href="${(_path$externalDocs5 = path.externalDocs) === null || _path$externalDocs5 === void 0 ? void 0 : _path$externalDocs5.url}" target="_blank">
                  ${(_path$externalDocs6 = path.externalDocs) === null || _path$externalDocs6 === void 0 ? void 0 : _path$externalDocs6.url} <div style="transform: rotate(270deg) scale(1.5); display: inline-block; margin-left:5px">⇲</div>
                </a>` : ''}
          </div>` : ''}
      ${codeSampleTabPanel}
      <div class='expanded-req-resp-container'>
        <api-request
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${path.isWebhook}"
          method = "${path.method}"
          path = "${path.path}"
          .security = "${path.security}"
          .parameters = "${path.parameters}"
          .request_body = "${path.requestBody}"
          .api_keys = "${nonEmptyApiKeys}"
          .servers = "${path.servers}"
          server-url = "${((_path$servers = path.servers) === null || _path$servers === void 0 ? void 0 : (_path$servers$ = _path$servers[0]) === null || _path$servers$ === void 0 ? void 0 : _path$servers$.url) || this.selectedServer.computedUrl}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          show-curl-before-try = "${this.showCurlBeforeTry}"
          accept = "${accept}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly === 'never' ? 'false' : path.isWebhook ? 'false' : 'true'}"
          schema-hide-write-only = "${this.schemaHideWriteOnly === 'never' ? 'false' : path.isWebhook ? 'true' : 'false'}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-request>

        ${path.callbacks ? callbackTemplate.call(this, path.callbacks) : ''}

        <api-response
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${path.isWebhook}"
          .responses = "${path.responses}"
          render-style = "${this.renderStyle}"
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly === 'never' ? 'false' : path.isWebhook ? 'true' : 'false'}"
          schema-hide-write-only = "${this.schemaHideWriteOnly === 'never' ? 'false' : path.isWebhook ? 'false' : 'true'}"
          selected-status = "${Object.keys(path.responses || {})[0] || ''}"
          exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-response>
      </div>
    </div>
  `;
}
function expandedEndpointTemplate() {
  if (!this.resolvedSpec) {
    return '';
  }
  return lit_html_x`
  ${this.resolvedSpec.tags.map(tag => lit_html_x`
    <section id="${tag.elementId}" part="section-tag" class="regular-font section-gap--read-mode observe-me" style="border-top:1px solid var(--primary-color);">
      <div class="title tag" part="section-tag-title label-tag-title">${tag.name}</div>
      <slot name="${tag.elementId}"></slot>
      <div class="regular-font-size">
      ${unsafe_html_o(`
          <div class="m-markdown regular-font">
          ${marked(tag.description || '', this.infoDescriptionHeadingsInNavBar === 'true' ? {
    renderer: headingRenderer(tag.elementId)
  } : undefined)}
        </div>`)}
      </div>
    </section>
    <section class="regular-font section-gap--read-mode" part="section-operations-in-tag">
      ${tag.paths.map(path => expandedEndpointBodyTemplate.call(this, path))}
    </section>
    `)}
`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/components-template.js

 // eslint-disable-line import/extensions





function schemaBodyTemplate(sComponent) {
  return lit_html_x`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${sComponent.name}' id='cmp--${sComponent.id}' >
    <div style="font-weight:bold"> ${sComponent.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400;"> Schema </span></div>
  ${this.schemaStyle === 'table' ? lit_html_x`
      <schema-table
        .data = '${schemaInObjectNotation(sComponent.component, {})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-table>` : lit_html_x`
      <schema-tree
        .data = '${schemaInObjectNotation(sComponent.component, {})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-tree>`}
  </div>`;
}
function componentBodyTemplate(sComponent, componentType) {
  if (sComponent.id.indexOf('schemas-') !== -1) {
    return schemaBodyTemplate.call(this, sComponent);
  }
  return lit_html_x`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${sComponent.name}' id='cmp--${sComponent.id}' >
    ${lit_html_x`
      <div style="font-weight:bold"> ${sComponent.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400"> ${componentType} </span> </div>
      ${sComponent.component ? lit_html_x`
      <div class='mono-font regular-font-size' style='padding: 8px 0; color:var(--fg2)'> 
        <json-tree class="border tree" render-style='${this.renderStyle}' .data="${sComponent.component}"> </json-tree>
      </div>` : ''}
    `}
  </div>
  `;
}
function componentsTemplate() {
  if (!this.resolvedSpec) {
    return '';
  }
  return lit_html_x`
  ${this.resolvedSpec.components.map(component => lit_html_x`
    <div id="cmp--${component.name.toLowerCase()}" class='regular-font section-gap--read-mode observe-me' style="border-top:1px solid var(--primary-color);">
      <div class="title tag">${component.name}</div>
      <div class="regular-font-size">
        ${unsafe_html_o(`<div class='m-markdown regular-font'>${marked(component.description ? component.description : '')}</div>`)}
      </div>
    </div>
    <div class='regular-font section-gap--read-mode'>
      ${component.subComponents.filter(c => c.expanded !== false).map(sComponent => componentBodyTemplate.call(this, sComponent, component.name))}
    </div>
    `)}
`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/overview-template.js

 // eslint-disable-line import/extensions



/* eslint-disable indent */
function overview_template_headingRenderer() {
  const renderer = new marked.Renderer();
  renderer.heading = (text, level, raw, slugger) => `<h${level} class="observe-me" id="overview--${slugger.slug(raw)}">${text}</h${level}>`;
  return renderer;
}
function overviewTemplate() {
  var _this$resolvedSpec, _this$resolvedSpec$in, _this$resolvedSpec$in2, _this$specUrl;
  return lit_html_x`
    <section id="overview" part="section-overview"
      class="observe-me ${this.renderStyle === 'view' ? 'section-gap' : 'section-gap--read-mode'}">
      ${(_this$resolvedSpec = this.resolvedSpec) !== null && _this$resolvedSpec !== void 0 && _this$resolvedSpec.info ? lit_html_x`
          <div id="api-title" part="section-overview-title" style="font-size:32px">
            ${this.resolvedSpec.info.title}
            ${!this.resolvedSpec.info.version ? '' : lit_html_x`
              <span style = 'font-size:var(--font-size-small);font-weight:bold'>
                ${this.resolvedSpec.info.version}
              </span>`}
          </div>
          <div id="api-info" style="font-size:calc(var(--font-size-regular) - 1px); margin-top:8px;">
            ${(_this$resolvedSpec$in = this.resolvedSpec.info.contact) !== null && _this$resolvedSpec$in !== void 0 && _this$resolvedSpec$in.email ? lit_html_x`<span>${this.resolvedSpec.info.contact.name || 'Email'}: 
                <a href="mailto:${this.resolvedSpec.info.contact.email}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.email}</a>
              </span>` : ''}
            ${(_this$resolvedSpec$in2 = this.resolvedSpec.info.contact) !== null && _this$resolvedSpec$in2 !== void 0 && _this$resolvedSpec$in2.url ? lit_html_x`<span>URL: <a href="${this.resolvedSpec.info.contact.url}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.url}</a></span>` : ''}
            ${this.resolvedSpec.info.license ? lit_html_x`<span>License: 
                ${this.resolvedSpec.info.license.url ? lit_html_x`<a href="${this.resolvedSpec.info.license.url}" part="anchor anchor-overview">${this.resolvedSpec.info.license.name}</a>` : this.resolvedSpec.info.license.name} </span>` : ''}
            ${this.resolvedSpec.info.termsOfService ? lit_html_x`<span><a href="${this.resolvedSpec.info.termsOfService}" part="anchor anchor-overview">Terms of Service</a></span>` : ''}
            ${this.specUrl && this.allowSpecFileDownload === 'true' ? lit_html_x`
                <div style="display:flex; margin:12px 0; gap:8px; justify-content: start;">
                  <button class="m-btn thin-border" style="min-width:170px" part="btn btn-outline" @click='${e => {
    downloadResource(this.specUrl, 'openapi-spec', e);
  }}'>Download OpenAPI spec</button>
                  ${(_this$specUrl = this.specUrl) !== null && _this$specUrl !== void 0 && _this$specUrl.trim().toLowerCase().endsWith('json') ? lit_html_x`<button class="m-btn thin-border" style="width:200px" part="btn btn-outline" @click='${e => {
    viewResource(this.specUrl, e);
  }}'>View OpenAPI spec (New Tab)</button>` : ''}
                </div>` : ''}
          </div>
          <slot name="overview"></slot>
          <div id="api-description">
          ${this.resolvedSpec.info.description ? lit_html_x`${unsafe_html_o(`
                <div class="m-markdown regular-font">
                ${marked(this.resolvedSpec.info.description, this.infoDescriptionHeadingsInNavBar === 'true' ? {
    renderer: overview_template_headingRenderer()
  } : undefined)}
              </div>`)}` : ''}
          </div>
        ` : ''}
    </section>
  `;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/server-template.js

 // eslint-disable-line import/extensions

function setApiServer(serverUrl) {
  var _this$resolvedSpec;
  const serverObj = (_this$resolvedSpec = this.resolvedSpec) === null || _this$resolvedSpec === void 0 ? void 0 : _this$resolvedSpec.servers.find(s => s.url === serverUrl);
  if (!serverObj) {
    return false;
  }
  this.selectedServer = serverObj;
  this.requestUpdate();
  this.dispatchEvent(new CustomEvent('api-server-change', {
    bubbles: true,
    composed: true,
    detail: {
      selectedServer: serverObj
    }
  }));
  return true;
}
function onApiServerVarChange(e, serverObj) {
  const inputEls = [...e.currentTarget.closest('table').querySelectorAll('input, select')];
  let tempUrl = serverObj.url;
  inputEls.forEach(v => {
    const regex = new RegExp(`{${v.dataset.var}}`, 'g');
    tempUrl = tempUrl.replace(regex, v.value);
  });
  serverObj.computedUrl = tempUrl;
  this.requestUpdate();
}

/* eslint-disable indent */
function serverVarsTemplate() {
  // const selectedServerObj = this.resolvedSpec.servers.find((v) => (v.url === this.selectedServer));
  return this.selectedServer && this.selectedServer.variables ? lit_html_x`
    <div class="table-title">SERVER VARIABLES</div>
    <table class='m-table' role='presentation'>
      ${Object.entries(this.selectedServer.variables).map(kv => lit_html_x`
        <tr>
          <td style="vertical-align: middle;" >${kv[0]}</td>
          <td>
            ${kv[1].enum ? lit_html_x`
            <select
              data-var = "${kv[0]}"
              @input = ${e => {
    onApiServerVarChange.call(this, e, this.selectedServer);
  }}
            >
            ${Object.entries(kv[1].enum).map(e => kv[1].default === e[1] ? lit_html_x`
              <option
                selected
                label = ${e[1]}
                value = ${e[1]}
              />` : lit_html_x`
              <option
                label = ${e[1]}
                value = ${e[1]}
              />`)}
            </select>` : lit_html_x`
            <input
              type = "text"
              part="textbox textbox-server-var"
              spellcheck = "false"
              data-var = "${kv[0]}"
              value = "${kv[1].default}"
              @input = ${e => {
    onApiServerVarChange.call(this, e, this.selectedServer);
  }}
            />`}
          </td>
        </tr>
        ${kv[1].description ? lit_html_x`<tr><td colspan="2" style="border:none"><span class="m-markdown-small"> ${unsafe_html_o(marked(kv[1].description))} </span></td></tr>` : ''}
      `)}
    </table>
    ` : '';
}
function serverTemplate() {
  var _this$resolvedSpec$se, _this$resolvedSpec2, _this$selectedServer;
  if (!this.resolvedSpec || this.resolvedSpec.specLoadError) {
    return '';
  }
  return lit_html_x`
  <section id = 'servers' part="section-servers" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class='regular-font observe-me ${'read focused'.includes(this.renderStyle) ? 'section-gap--read-mode' : 'section-gap'}'>
    <div part = "section-servers-title" class = "sub-title">API SERVER</div>
    <div class = 'mono-font' style='margin: 12px 0; font-size:calc(var(--font-size-small) + 1px);'>
      ${!this.resolvedSpec.servers || ((_this$resolvedSpec$se = this.resolvedSpec.servers) === null || _this$resolvedSpec$se === void 0 ? void 0 : _this$resolvedSpec$se.length) === 0 ? '' : lit_html_x`
          ${(_this$resolvedSpec2 = this.resolvedSpec) === null || _this$resolvedSpec2 === void 0 ? void 0 : _this$resolvedSpec2.servers.map((server, i) => lit_html_x`
            <input type = 'radio'
              name = 'api_server'
              id = 'srvr-opt-${i}'
              value = '${server.url}'
              @change = ${() => {
    setApiServer.call(this, server.url);
  }}
              .checked = '${this.selectedServer.url === server.url}'
              style = 'margin:4px 0; cursor:pointer'
            />
              <label style='cursor:pointer' for='srvr-opt-${i}'>
                ${server.url} ${server.description ? lit_html_x`- <span class='regular-font'>${server.description} </span>` : ''}
              </label>
            <br/>
          `)}
      `}
      <div class="table-title primary-text" part="label-selected-server"> SELECTED: ${((_this$selectedServer = this.selectedServer) === null || _this$selectedServer === void 0 ? void 0 : _this$selectedServer.computedUrl) || 'none'}</div>
    </div>
    <slot name="servers"></slot>
    ${serverVarsTemplate.call(this)}
  </section>`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/navbar-template.js



function expandCollapseNavBarTag(navLinkEl, action = 'toggle') {
  const tagAndPathEl = navLinkEl === null || navLinkEl === void 0 ? void 0 : navLinkEl.closest('.nav-bar-tag-and-paths');
  const pathsUnderTagEl = tagAndPathEl === null || tagAndPathEl === void 0 ? void 0 : tagAndPathEl.querySelector('.nav-bar-paths-under-tag');
  if (tagAndPathEl) {
    const isExpanded = tagAndPathEl.classList.contains('expanded');
    if (isExpanded && (action === 'toggle' || action === 'collapse')) {
      pathsUnderTagEl.style.maxHeight = 0;
      tagAndPathEl.classList.replace('expanded', 'collapsed');
    } else if (!isExpanded && (action === 'toggle' || action === 'expand')) {
      tagAndPathEl.classList.replace('collapsed', 'expanded');
      pathsUnderTagEl.style.maxHeight = `${pathsUnderTagEl.scrollHeight}px`;
    }
  }
}
function expandCollapseAll(event, action = 'expand-all') {
  if (!(event.type === 'click' || event.type === 'keyup' && event.keyCode === 13)) {
    return;
  }
  const navEl = event.target.closest('.nav-scroll');
  const elList = [...navEl.querySelectorAll('.nav-bar-tag-and-paths')];
  if (action === 'expand-all') {
    elList.forEach(el => {
      const navBarPathsUnderTagEl = el.querySelector('.nav-bar-paths-under-tag');
      el.classList.replace('collapsed', 'expanded');
      navBarPathsUnderTagEl.style.maxHeight = `${navBarPathsUnderTagEl === null || navBarPathsUnderTagEl === void 0 ? void 0 : navBarPathsUnderTagEl.scrollHeight}px`;
    });
  } else {
    elList.forEach(el => {
      el.classList.replace('expanded', 'collapsed');
      el.querySelector('.nav-bar-paths-under-tag').style.maxHeight = 0;
    });
  }
}
function navBarClickAndEnterHandler(event) {
  var _navEl$dataset, _navEl$dataset2, _navEl$dataset3, _navEl$dataset4;
  if (!(event.type === 'click' || event.type === 'keyup' && event.keyCode === 13)) {
    return;
  }
  const navEl = event.target;
  event.stopPropagation();
  if (((_navEl$dataset = navEl.dataset) === null || _navEl$dataset === void 0 ? void 0 : _navEl$dataset.action) === 'navigate') {
    this.scrollToEventTarget(event, false);
  } else if (((_navEl$dataset2 = navEl.dataset) === null || _navEl$dataset2 === void 0 ? void 0 : _navEl$dataset2.action) === 'expand-all' || ((_navEl$dataset3 = navEl.dataset) === null || _navEl$dataset3 === void 0 ? void 0 : _navEl$dataset3.action) === 'collapse-all') {
    expandCollapseAll(event, navEl.dataset.action);
  } else if (((_navEl$dataset4 = navEl.dataset) === null || _navEl$dataset4 === void 0 ? void 0 : _navEl$dataset4.action) === 'expand-collapse-tag') {
    expandCollapseNavBarTag(navEl, 'toggle');
  }
}

/* eslint-disable indent */
function navbarTemplate() {
  var _this$resolvedSpec$in, _this$resolvedSpec$in2, _this$resolvedSpec$in3, _this$resolvedSpec$in4;
  if (!this.resolvedSpec || this.resolvedSpec.specLoadError) {
    return lit_html_x`
      <nav class='nav-bar' part='section-navbar'>
        <slot name='nav-logo' class='logo'></slot>
      </nav>
    `;
  }
  return lit_html_x`
  <nav class='nav-bar ${this.renderStyle}' part='section-navbar'>
    <slot name='nav-logo' class='logo'></slot>
    ${this.allowSearch === 'false' && this.allowAdvancedSearch === 'false' ? '' : lit_html_x`
        <div style='display:flex; flex-direction:row; justify-content:center; align-items:stretch; padding:8px 24px 12px 24px; ${this.allowAdvancedSearch === 'false' ? 'border-bottom: 1px solid var(--nav-hover-bg-color)' : ''}' part='section-navbar-search'>
          ${this.allowSearch === 'false' ? '' : lit_html_x`
              <div style = 'display:flex; flex:1; line-height:22px;'>
                <input id = 'nav-bar-search' 
                  part = 'textbox textbox-nav-filter'
                  style = 'width:100%; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)'
                  type = 'text'
                  placeholder = 'Filter' 
                  @change = '${this.onSearchChange}'
                  spellcheck = 'false'
                >
                <div style='margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;'>&#x21a9;</div>
              </div>  
              ${this.matchPaths ? lit_html_x`
                  <button @click = '${this.onClearSearch}' class='m-btn thin-border' style='margin-left:5px; color:var(--nav-text-color); width:75px; padding:6px 8px;' part='btn btn-outline btn-clear-filter'>
                    CLEAR
                  </button>` : ''}
            `}
          ${this.allowAdvancedSearch === 'false' || this.matchPaths ? '' : lit_html_x`
              <button class='m-btn primary' part='btn btn-fill btn-search' style='margin-left:5px; padding:6px 8px; width:75px' @click='${this.onShowSearchModalClicked}'>
                SEARCH
              </button>
            `}
        </div>
      `}
    ${lit_html_x`<nav class='nav-scroll' tabindex='-1' part='section-navbar-scroll' @click='${e => navBarClickAndEnterHandler.call(this, e)}' @keyup='${e => navBarClickAndEnterHandler.call(this, e)}' >
      ${this.showInfo === 'false' || !this.resolvedSpec.info ? '' : lit_html_x`
          ${this.infoDescriptionHeadingsInNavBar === 'true' ? lit_html_x`
              ${this.resolvedSpec.infoDescriptionHeaders.length > 0 ? lit_html_x`<div class='nav-bar-info ${this.navActiveItemMarker}' id='link-overview' data-content-id='overview' data-action='navigate' tabindex='0' part='section-navbar-item section-navbar-overview'> 
                    ${((_this$resolvedSpec$in = this.resolvedSpec.info) === null || _this$resolvedSpec$in === void 0 ? void 0 : (_this$resolvedSpec$in2 = _this$resolvedSpec$in.title) === null || _this$resolvedSpec$in2 === void 0 ? void 0 : _this$resolvedSpec$in2.trim()) || 'Overview'}
                  </div>` : ''}
              <div class='overview-headers'>
                ${this.resolvedSpec.infoDescriptionHeaders.map(header => lit_html_x`
                  <div
                    class='nav-bar-h${header.depth} ${this.navActiveItemMarker}' 
                    id='link-overview--${new marked.Slugger().slug(header.text)}'
                    data-action='navigate' 
                    data-content-id='overview--${new marked.Slugger().slug(header.text)}' 
                  >
                    ${header.text}
                  </div>`)}
              </div>
              ${this.resolvedSpec.infoDescriptionHeaders.length > 0 ? lit_html_x`<hr style='border-top: 1px solid var(--nav-hover-bg-color); border-width:1px 0 0 0; margin: 15px 0 0 0'/>` : ''}
            ` : lit_html_x`<div class='nav-bar-info ${this.navActiveItemMarker}' id='link-overview' data-action='navigate' data-content-id='overview' tabindex='0'> 
              ${((_this$resolvedSpec$in3 = this.resolvedSpec.info) === null || _this$resolvedSpec$in3 === void 0 ? void 0 : (_this$resolvedSpec$in4 = _this$resolvedSpec$in3.title) === null || _this$resolvedSpec$in4 === void 0 ? void 0 : _this$resolvedSpec$in4.trim()) || 'Overview'}
            </div>`}
        `}
    
      ${this.allowServerSelection === 'false' ? '' : lit_html_x`<div class='nav-bar-info ${this.navActiveItemMarker}' id='link-servers' data-action='navigate' data-content-id='servers' tabindex='0' part='section-navbar-item section-navbar-servers'> API Servers </div>`}
      ${this.allowAuthentication === 'false' || !this.resolvedSpec.securitySchemes ? '' : lit_html_x`<div class='nav-bar-info ${this.navActiveItemMarker}' id='link-auth' data-action='navigate' data-content-id='auth' tabindex='0' part='section-navbar-item section-navbar-auth'> Authentication </div>`}

      <div id='link-operations-top' class='nav-bar-section operations' data-action='navigate' data-content-id='${this.renderStyle === 'focused' ? '' : 'operations-top'}' part='section-navbar-item section-navbar-operations-top'>
        <div style='font-size:16px; display:flex; margin-left:10px;'>
          ${this.renderStyle === 'focused' ? lit_html_x`
              <div class='nav-bar-expand-all'
                data-action='expand-all'
                tabindex='0' 
                title='Expand all'
              >▸</div>
              <div class='nav-bar-collapse-all'
                data-action='collapse-all'
                tabindex='0' 
                title='Collapse all'
              >▸</div>` : ''}  
        </div>
        <div class='nav-bar-section-title'> OPERATIONS </div>
      </div>

      <!-- TAGS AND PATHS-->
      ${this.resolvedSpec.tags.filter(tag => tag.paths.filter(path => pathIsInSearch(this.matchPaths, path, this.matchType)).length).map(tag => {
    var _tag$paths;
    return lit_html_x`
          <div class='nav-bar-tag-and-paths ${this.renderStyle === 'read' ? 'expanded' : tag.expanded ? 'expanded' : 'collapsed'}' >
            ${tag.name === 'General ⦂' ? lit_html_x`<hr style='border:none; border-top: 1px dotted var(--nav-text-color); opacity:0.3; margin:-1px 0 0 0;'/>` : lit_html_x`
                <div 
                  class='nav-bar-tag ${this.navActiveItemMarker}'
                  part='section-navbar-item section-navbar-tag'
                  id='link-${tag.elementId}'
                  data-action='${(this.renderStyle === 'read' ? 'navigate' : this.onNavTagClick === 'show-description') ? 'navigate' : 'expand-collapse-tag'}'
                  data-content-id='${(this.renderStyle === 'read' ? `${tag.elementId}` : this.onNavTagClick === 'show-description') ? `${tag.elementId}` : ''}'
                  data-first-path-id='${tag.firstPathId}'
                  tabindex='0'
                >
                  <div style="pointer-events:none;">${tag.name}</div>
                  <div class='nav-bar-tag-icon' tabindex='0' data-action='expand-collapse-tag'></div>
                </div>
              `}
            ${this.infoDescriptionHeadingsInNavBar === 'true' ? lit_html_x`
                ${this.renderStyle === 'focused' && this.onNavTagClick === 'expand-collapse' ? '' : lit_html_x`
                    <div class='tag-headers'>
                      ${tag.headers.map(header => lit_html_x`
                      <div
                        class='nav-bar-h${header.depth} ${this.navActiveItemMarker}'
                        part='section-navbar-item section-navbar-h${header.depth}'
                        id='link-${tag.elementId}--${new marked.Slugger().slug(header.text)}'
                        data-action='navigate'
                        data-content-id='${tag.elementId}--${new marked.Slugger().slug(header.text)}'
                        tabindex='0'
                      > ${header.text}</div>`)}
                    </div>`}` : ''}
            <div class='nav-bar-paths-under-tag' style='max-height:${tag.expanded || this.renderStyle === 'read' ? (((_tag$paths = tag.paths) === null || _tag$paths === void 0 ? void 0 : _tag$paths.length) || 1) * 50 : 0}px;'>
              <!-- Paths in each tag (endpoints) -->
              ${tag.paths.filter(v => {
      if (this.matchPaths) {
        return pathIsInSearch(this.matchPaths, v, this.matchType);
      }
      return true;
    }).map(p => lit_html_x`
              <div 
                class='nav-bar-path ${this.navActiveItemMarker} ${this.usePathInNavBar === 'true' ? 'small-font' : ''}'
                part='section-navbar-item section-navbar-path'
                data-action='navigate'
                data-content-id='${p.elementId}'
                id='link-${p.elementId}'
                tabindex='0'
              >
                <span style = 'display:flex; pointer-events: none; align-items:start; ${p.deprecated ? 'filter:opacity(0.5)' : ''}'>
                  ${lit_html_x`<span class='nav-method ${this.showMethodInNavBar} ${p.method}' style='pointer-events: none;'>
                      ${this.showMethodInNavBar === 'as-colored-block' ? p.method.substring(0, 3).toUpperCase() : p.method.toUpperCase()}
                    </span>`}
                  ${p.isWebhook ? lit_html_x`<span style='font-weight:bold; pointer-events: none; margin-right:8px; font-size: calc(var(--font-size-small) - 2px)'>WEBHOOK</span>` : ''}
                  ${this.usePathInNavBar === 'true' ? lit_html_x`<span style='pointer-events: none;' class='mono-font'>${p.path}</span>` : p.summary || p.shortSummary}
                </span>
              </div>`)}
            </div>
          </div>
        `;
  })}

      <!-- COMPONENTS -->
      ${this.resolvedSpec.components && this.showComponents === 'true' && this.renderStyle === 'focused' ? lit_html_x`
          <div id='link-components' class='nav-bar-section components'>
            <div></div>
            <div class='nav-bar-section-title'>COMPONENTS</div>
          </div>
          ${this.resolvedSpec.components.map(component => component.subComponents.length ? lit_html_x`
              <div class='nav-bar-tag'
                part='section-navbar-item section-navbar-tag'
                data-action='navigate' 
                data-content-id='cmp--${component.name.toLowerCase()}' 
                id='link-cmp--${component.name.toLowerCase()}'
              >
                ${component.name}
              </div>
              ${component.subComponents.filter(p => p.expanded !== false).map(p => lit_html_x`
                <div class='nav-bar-path' data-action='navigate' data-content-id='cmp--${p.id}' id='link-cmp--${p.id}'>
                  <span style = 'pointer-events: none;'> ${p.name} </span>
                </div>`)}` : '')}` : ''}
    </nav>`}
</nav>
`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/focused-endpoint-template.js

 // eslint-disable-line import/extensions









function focused_endpoint_template_headingRenderer(tagElementId) {
  const renderer = new marked.Renderer();
  renderer.heading = (text, level, raw, slugger) => `<h${level} class="observe-me" id="${tagElementId}--${slugger.slug(raw)}">${text}</h${level}>`;
  return renderer;
}
function wrapFocusedTemplate(templateToWrap) {
  return lit_html_x`
    <div class='regular-font section-gap--focused-mode' part="section-operations-in-tag">
      ${templateToWrap}
    </div>`;
}
function defaultContentTemplate() {
  var _this$resolvedSpec$ta;
  // In focused mode default content is overview or first path
  if (this.showInfo === 'true') {
    return wrapFocusedTemplate(overviewTemplate.call(this));
  }
  const selectedTagObj = this.resolvedSpec.tags[0];
  const selectedPathObj = (_this$resolvedSpec$ta = this.resolvedSpec.tags[0]) === null || _this$resolvedSpec$ta === void 0 ? void 0 : _this$resolvedSpec$ta.paths[0];
  return selectedTagObj && selectedPathObj ? wrapFocusedTemplate(expandedEndpointBodyTemplate.call(this, selectedPathObj, selectedTagObj.name)) : wrapFocusedTemplate('');
}

/* eslint-disable indent */
function focusedTagBodyTemplate(tag) {
  return lit_html_x`
    <h1 id="${tag.elementId}">${tag.name}</h1>
    ${this.onNavTagClick === 'show-description' && tag.description ? lit_html_x`
        <div class="m-markdown">
          ${unsafe_html_o(`
            <div class="m-markdown regular-font">
              ${marked(tag.description || '', this.infoDescriptionHeadingsInNavBar === 'true' ? {
    renderer: focused_endpoint_template_headingRenderer(tag.elementId)
  } : undefined)}
            </div>`)}
        </div>` : ''}
  `;
}
function focusedEndpointTemplate() {
  if (!this.focusedElementId || !this.resolvedSpec) {
    return;
  }
  const focusElId = this.focusedElementId;
  let selectedPathObj = null;
  let selectedTagObj = null;
  let focusedTemplate;
  let i = 0;
  if (focusElId.startsWith('overview') && this.showInfo === 'true') {
    focusedTemplate = overviewTemplate.call(this);
  } else if (focusElId === 'auth' && this.allowAuthentication === 'true') {
    focusedTemplate = securitySchemeTemplate.call(this);
  } else if (focusElId === 'servers' && this.allowServerSelection === 'true') {
    focusedTemplate = serverTemplate.call(this);
  } else if (focusElId === 'operations-top') {
    focusedTemplate = lit_html_x`
    <div id="operations-top" class="observe-me">
      <slot name="operations-top"></slot>
    </div>`;
  } else if (focusElId.startsWith('cmp--') && this.showComponents === 'true') {
    focusedTemplate = componentsTemplate.call(this);
  } else if (focusElId.startsWith('tag--')) {
    const idToFocus = focusElId.indexOf('--', 4) > 0 ? focusElId.substring(0, focusElId.indexOf('--', 5)) : focusElId;
    selectedTagObj = this.resolvedSpec.tags.find(v => v.elementId === idToFocus);
    if (selectedTagObj) {
      focusedTemplate = wrapFocusedTemplate.call(this, focusedTagBodyTemplate.call(this, selectedTagObj));
    } else {
      focusedTemplate = defaultContentTemplate.call(this);
    }
  } else {
    for (i = 0; i < this.resolvedSpec.tags.length; i += 1) {
      selectedTagObj = this.resolvedSpec.tags[i];
      selectedPathObj = this.resolvedSpec.tags[i].paths.find(v => `${v.elementId}` === focusElId);
      if (selectedPathObj) {
        break;
      }
    }
    if (selectedPathObj) {
      // In focused mode we must expand the nav-bar tag element if it is collapsed
      const newNavEl = this.shadowRoot.getElementById(`link-${focusElId}`);
      expandCollapseNavBarTag(newNavEl, 'expand');
      focusedTemplate = wrapFocusedTemplate.call(this, expandedEndpointBodyTemplate.call(this, selectedPathObj, selectedTagObj.name || '', selectedTagObj.description || ''));
    } else {
      // if focusedElementId is not found then show the default content (overview or first-path)
      focusedTemplate = defaultContentTemplate.call(this);
    }
  }
  return focusedTemplate;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/endpoint-template.js

 // eslint-disable-line import/extensions







function toggleExpand(path) {
  if (path.expanded) {
    path.expanded = false; // collapse
    if (this.updateRoute === 'true') {
      this.replaceHistoryState('');
    }
  } else {
    path.expanded = true; // Expand
    if (this.updateRoute === 'true') {
      const newHash = `${this.routePrefix || '#'}${path.elementId}`;
      if (window.location.hash !== newHash) {
        this.replaceHistoryState(path.elementId);
      }
    }
  }
  this.requestUpdate();
}
function endpoint_template_expandCollapseAll(operationsRootEl, action = 'expand-all') {
  const elList = [...operationsRootEl.querySelectorAll('.section-tag')];
  if (action === 'expand-all') {
    elList.map(el => {
      el.classList.replace('collapsed', 'expanded');
    });
  } else {
    elList.map(el => {
      el.classList.replace('expanded', 'collapsed');
    });
  }
}
function onExpandCollapseAll(e, action = 'expand-all') {
  endpoint_template_expandCollapseAll.call(this, e.target.closest('.operations-root'), action);
}

/* eslint-disable indent */
function endpointHeadTemplate(path, pathsExpanded = false) {
  return lit_html_x`
  <summary @click="${e => {
    toggleExpand.call(this, path, e);
  }}" part="section-endpoint-head-${path.expanded ? 'expanded' : 'collapsed'}" class='endpoint-head ${path.method} ${path.deprecated ? 'deprecated' : ''} ${pathsExpanded || path.expanded ? 'expanded' : 'collapsed'}'>
    <div part="section-endpoint-head-method" class="method ${path.method} ${path.deprecated ? 'deprecated' : ''}"> ${path.method} </div> 
    <div  part="section-endpoint-head-path" class="path ${path.deprecated ? 'deprecated' : ''}"> 
      ${path.path} 
      ${path.isWebhook ? lit_html_x`<span style="font-family: var(--font-regular); font-size: var(--); font-size: var(--font-size-small); color:var(--primary-color); margin-left: 16px"> Webhook</span>` : ''}
    </div>
    ${path.deprecated ? lit_html_x`
        <span style="font-size:var(--font-size-small); text-transform:uppercase; font-weight:bold; color:var(--red); margin:2px 0 0 5px;"> 
          deprecated 
        </span>` : ''}
    ${this.showSummaryWhenCollapsed ? lit_html_x`
        <div class="only-large-screen" style="min-width:60px; flex:1"></div>
        <div part="section-endpoint-head-description" class="descr">${path.summary || path.shortSummary} </div>` : ''}
  </summary>
  `;
}
function endpointBodyTemplate(path) {
  var _path$xBadges, _path$externalDocs, _path$externalDocs2, _path$externalDocs3, _path$externalDocs4, _path$externalDocs5, _path$externalDocs6;
  const acceptContentTypes = new Set();
  for (const respStatus in path.responses) {
    for (const acceptContentType in (_path$responses$respS = path.responses[respStatus]) === null || _path$responses$respS === void 0 ? void 0 : _path$responses$respS.content) {
      var _path$responses$respS;
      acceptContentTypes.add(acceptContentType.trim());
    }
  }
  const accept = [...acceptContentTypes].join(', ');
  // Filter API Keys that are non-empty and are applicable to the the path
  const nonEmptyApiKeys = this.resolvedSpec.securitySchemes.filter(v => {
    var _path$security;
    return v.finalKeyValue && ((_path$security = path.security) === null || _path$security === void 0 ? void 0 : _path$security.some(ps => v.securitySchemeId in ps));
  }) || [];

  // If a RapiDoc API Key is specified on the element and its value is not hyphen(-) then include it for all paths
  const rapiDocApiKey = this.resolvedSpec.securitySchemes.find(v => v.securitySchemeId === rapidocApiKey && v.value !== '-');
  if (rapiDocApiKey) {
    nonEmptyApiKeys.push(rapiDocApiKey);
  }
  const codeSampleTabPanel = path.xCodeSamples ? codeSamplesTemplate(path.xCodeSamples) : '';
  return lit_html_x`
  <div part="section-endpoint-body-${path.expanded ? 'expanded' : 'collapsed'}" class='endpoint-body ${path.method} ${path.deprecated ? 'deprecated' : ''}'>
    <div class="summary">
      ${path.summary ? lit_html_x`<div class="title" part="section-endpoint-body-title">${path.summary}<div>` : path.shortSummary !== path.description ? lit_html_x`<div class="title" part="section-endpoint-body-title">${path.shortSummary}</div>` : ''}
      ${path.xBadges && ((_path$xBadges = path.xBadges) === null || _path$xBadges === void 0 ? void 0 : _path$xBadges.length) > 0 ? lit_html_x`
          <div style="display:flex; flex-wrap:wrap;font-size: var(--font-size-small);">
            ${path.xBadges.map(v => lit_html_x`<span part="endpoint-badge" style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${v.color}, var(--input-bg)); color:var(--${v.color}); border:1px solid var(--${v.color})">${v.label}</span>`)}
          </div>
          ` : ''}

      ${path.description ? lit_html_x`<div part="section-endpoint-body-description" class="m-markdown"> ${unsafe_html_o(marked(path.description))}</div>` : ''}
      ${(_path$externalDocs = path.externalDocs) !== null && _path$externalDocs !== void 0 && _path$externalDocs.url || (_path$externalDocs2 = path.externalDocs) !== null && _path$externalDocs2 !== void 0 && _path$externalDocs2.description ? lit_html_x`<div style="background-color:var(--bg3); padding:2px 8px 8px 8px; margin:8px 0; border-radius:var(--border-radius)"> 
            <div class="m-markdown"> ${unsafe_html_o(marked(((_path$externalDocs3 = path.externalDocs) === null || _path$externalDocs3 === void 0 ? void 0 : _path$externalDocs3.description) || ''))} </div>
            ${(_path$externalDocs4 = path.externalDocs) !== null && _path$externalDocs4 !== void 0 && _path$externalDocs4.url ? lit_html_x`<a style="font-family:var(--font-mono); font-size:var(--font-size-small)" href="${(_path$externalDocs5 = path.externalDocs) === null || _path$externalDocs5 === void 0 ? void 0 : _path$externalDocs5.url}" target="_blank"> 
                  ${(_path$externalDocs6 = path.externalDocs) === null || _path$externalDocs6 === void 0 ? void 0 : _path$externalDocs6.url} <div style="transform: rotate(270deg) scale(1.5); display: inline-block; margin-left:5px">⇲</div>
                </a>` : ''}
          </div>` : ''}
      <slot name="${path.elementId}"></slot>
      ${pathSecurityTemplate.call(this, path.security)}
      ${codeSampleTabPanel}
    </div>  
    <div class='req-resp-container'> 
      <div style="display:flex; flex-direction:column" class="view-mode-request ${this.layout}-layout">
        <api-request
          class = "${this.renderStyle}-mode ${this.layout}-layout"
          style = "width:100%;"
          webhook = "${path.isWebhook}"
          method = "${path.method}"
          path = "${path.path}"
          .security = "${path.security}"
          .parameters = "${path.parameters}"
          .request_body = "${path.requestBody}"
          .api_keys = "${nonEmptyApiKeys}"
          .servers = "${path.servers}" 
          server-url = "${path.servers && path.servers.length > 0 ? path.servers[0].url : this.selectedServer.computedUrl}" 
          active-schema-tab = "${this.defaultSchemaTab}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          show-curl-before-try = "${this.showCurlBeforeTry}"
          accept = "${accept}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}" 
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly === 'never' ? 'false' : path.isWebhook ? 'false' : 'true'}"
          schema-hide-write-only = "${this.schemaHideWriteOnly === 'never' ? 'false' : path.isWebhook ? 'true' : 'false'}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </api-request>

          ${path.callbacks ? callbackTemplate.call(this, path.callbacks) : ''}
        </div>  

        <api-response
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${path.isWebhook}"
          .responses="${path.responses}"
          active-schema-tab = "${this.defaultSchemaTab}" 
          render-style="${this.renderStyle}" 
          schema-style="${this.schemaStyle}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly === 'never' ? 'false' : path.isWebhook ? 'true' : 'false'}"
          schema-hide-write-only = "${this.schemaHideWriteOnly === 'never' ? 'false' : path.isWebhook ? 'false' : 'true'}"
          selected-status = "${Object.keys(path.responses || {})[0] || ''}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, file-input:file-input, 
          textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, anchor:anchor, anchor-param-example:anchor-param-example, btn-clear-resp:btn-clear-resp,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-response>
      </div>
  </div>`;
}
function endpointTemplate(showExpandCollapse = true, showTags = true, pathsExpanded = false) {
  if (!this.resolvedSpec) {
    return '';
  }
  return lit_html_x`
    ${showExpandCollapse ? lit_html_x`
        <div style="display:flex; justify-content:flex-end;"> 
          <span @click="${e => onExpandCollapseAll(e, 'expand-all')}" style="color:var(--primary-color); cursor:pointer;">
            Expand all
          </span> 
          &nbsp;|&nbsp; 
          <span @click="${e => onExpandCollapseAll(e, 'collapse-all')}" style="color:var(--primary-color); cursor:pointer;" >
            Collapse all
          </span> 
          &nbsp; sections
        </div>` : ''}
    ${this.resolvedSpec.tags.map(tag => lit_html_x`
      ${showTags ? lit_html_x` 
          <div class='regular-font section-gap section-tag ${tag.expanded ? 'expanded' : 'collapsed'}'> 
            <div class='section-tag-header' @click="${() => {
    tag.expanded = !tag.expanded;
    this.requestUpdate();
  }}">
              <div id='${tag.elementId}' class="sub-title tag" style="color:var(--primary-color)">${tag.name}</div>
            </div>
            <div class='section-tag-body'>
              <slot name="${tag.elementId}"></slot>
              <div class="regular-font regular-font-size m-markdown" style="padding-bottom:12px">
                ${unsafe_html_o(marked(tag.description || ''))}
              </div>
              ${tag.paths.filter(v => {
    if (this.matchPaths) {
      return pathIsInSearch(this.matchPaths, v, this.matchType);
    }
    return true;
  }).map(path => lit_html_x`
                <section part="section-endpoint" id='${path.elementId}' class='m-endpoint regular-font ${path.method} ${pathsExpanded || path.expanded ? 'expanded' : 'collapsed'}'>
                  ${endpointHeadTemplate.call(this, path, pathsExpanded)}      
                  ${pathsExpanded || path.expanded ? endpointBodyTemplate.call(this, path) : ''}
                </section>`)}
            </div>
          </div>` : lit_html_x`
          <div class='section-tag-body'>
          ${tag.paths.filter(v => {
    if (this.matchPaths) {
      return pathIsInSearch(this.matchPaths, v, this.matchType);
    }
    return true;
  }).map(path => lit_html_x`
            <section id='${path.elementId}' class='m-endpoint regular-font ${path.method} ${pathsExpanded || path.expanded ? 'expanded' : 'collapsed'}'>
              ${endpointHeadTemplate.call(this, path, pathsExpanded)}      
              ${pathsExpanded || path.expanded ? endpointBodyTemplate.call(this, path) : ''}
            </section>`)}
          </div>
        `}
  `)}`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/logo-template.js


/* eslint-disable indent */
function logoTemplate(style) {
  return lit_html_x`
  <div style=${style}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511 512">
      <path d="M351 411a202 202 0 01-350 0 203 203 0 01333-24 203 203 0 0117 24zm0 0" fill="#adc165"/>
      <path d="M334 387a202 202 0 01-216-69 202 202 0 01216 69zm78 32H85a8 8 0 01-8-8 8 8 0 018-8h327a8 8 0 017 8 8 8 0 01-7 8zm0 0" fill="#99aa52"/>
      <path d="M374 338l-5 30a202 202 0 01-248-248 203 203 0 01253 218zm0 0" fill="#ffc73b"/>
      <path d="M374 338a202 202 0 01-100-197 203 203 0 01100 197zm38 81l-6-2-231-231a8 8 0 0111-11l231 230a8 8 0 01-5 14zm0 0" fill="#efb025"/>
      <path d="M311 175c0 75 40 140 101 175a202 202 0 000-350 202 202 0 00-101 175zm0 0" fill="#ff903e"/>
      <path d="M412 419a8 8 0 01-8-8V85a8 8 0 0115 0v326a8 8 0 01-7 8zm0 0" fill="#e87425"/>
    </svg>
  </div>    
`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/header-template.js



/* eslint-disable indent */
function headerTemplate() {
  return lit_html_x`
  <header class="row main-header regular-font" part="section-header" style="padding:8px 4px 8px 4px;min-height:48px;">
    <div class="only-large-screen-flex" style="align-items: center;">
      <slot name="logo" class="logo" part="section-logo">
        ${logoTemplate('height:36px;width:36px;margin-left:5px')}
        <!-- m-logo style="height:36px;width:36px;margin-left:5px"></m-logo -->
      </slot>  
      <div class="header-title" part="label-header-title">${this.headingText}</div>
    </div>  
    <div style="margin: 0px 8px;display:flex;flex:1">
      ${this.allowSpecUrlLoad === 'false' ? '' : lit_html_x`
          <input id="spec-url" 
            type="text" 
            style="font-size:var(--font-size-small)" 
            class="header-input mono-font"
            part="textbox textbox-spec-url" 
            placeholder="Spec URL" 
            value="${this.specUrl || ''}" 
            @change="${this.onSpecUrlChange}" 
            spellcheck="false"
          >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div> 
        `} 
      ${this.allowSpecFileLoad === 'false' ? '' : lit_html_x`
          <input id="spec-file" 
            part = "file-input"
            type="file" 
            style="display:none" 
            value="${this.specFile || ''}" 
            @change="${this.onSpecFileChange}" 
            spellcheck="false"
           >
          <button class="m-btn primary only-large-screen" style="margin-left:10px;" part="btn btn-fill" @click="${this.onFileLoadClick}"> LOCAL JSON FILE </button>
        `}
      <slot name="header"></slot>
      ${this.allowSearch === 'false' || 'read focused'.includes(this.renderStyle) ? '' : lit_html_x`  
          <input id="search" class="header-input" type="text" part="textbox textbox-header-filter" placeholder="Filter" @change="${this.onSearchChange}" style="max-width:130px;margin-left:10px;" spellcheck="false" >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
        `}
      
      ${this.allowAdvancedSearch === 'false' || 'read focused'.includes(this.renderStyle) ? '' : lit_html_x`
          <button class="m-btn primary only-large-screen" part="btn btn-fill btn-search" style="margin-left:10px;" @click="${this.onShowSearchModalClicked}">
            Search
          </button>
        `}
    </div>
    </header>`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/styles/dialog-box-styles.js

/* harmony default export */ const dialog_box_styles = (i`
  *, *:before, *:after { box-sizing: border-box; }

  .dialog-box-overlay {
    background-color: var(--overlay-bg);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: var(--dialog-z-index);
  }
  
  .dialog-box {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: var(--bg2);
    color: var(--fg2);
    border-radius: 4px;
    max-height: 500px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  .dialog-box-header {
    position: sticky;
    top: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    min-height: 60px;
    max-height: 60px;
    border-bottom: 1px solid var(--light-border-color);
    overflow: hidden;
  }
  
  .dialog-box-header button {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: var(--fg);
    border: none;
    outline: none;
    background-color: transparent;
    cursor:pointer;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: -8px;
  }
  .dialog-box-header button:hover {
    border-color: var(--primary-color);
  }

  .dialog-box-content {
    padding: 16px;
    display:block;
    overflow: auto;
    height: 100%;
  }

  .dialog-box-title {
    flex-grow: 1;
    font-size:24px;
  }
`);
;// CONCATENATED MODULE: ./src/components/dialog-box.js


class DialogBox extends lit_element_s {
  static get properties() {
    return {
      heading: {
        type: String,
        attribute: 'heading'
      },
      show: {
        type: String,
        attribute: 'show'
      }
    };
  }
  static get styles() {
    return [dialog_box_styles];
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.onClose();
      }
    });
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      if (name === 'heading') {
        this.heading = newVal;
      }
      if (name === 'show') {
        this.show = newVal;
        if (newVal === 'true') {
          document.dispatchEvent(new CustomEvent('open', {
            bubbles: true,
            composed: true,
            detail: this
          }));
        }
      }
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  /* eslint-disable indent */
  render() {
    return lit_html_x`
    ${this.show === 'true' ? lit_html_x`
        <div class="dialog-box-overlay">
          <div class="dialog-box">
            <header class="dialog-box-header">
              <span class="dialog-box-title">${this.heading}</span>
              <button type="button" @click="${this.onClose}">&times;</button>
            </header>
            <div class="dialog-box-content">
              <slot></slot>
            </div>
          </div>
        </div>` : ''}`;
  }
  /* eslint-enable indent */

  onClose() {
    document.dispatchEvent(new CustomEvent('close', {
      bubbles: true,
      composed: true
    }));
  }
}
customElements.define('dialog-box', DialogBox);
;// CONCATENATED MODULE: ./src/templates/advance-search-template.js



/* eslint-disable indent */
function searchByPropertiesModalTemplate() {
  var _this$advancedSearchM;
  document.addEventListener('close', () => {
    this.showAdvancedSearchDialog = false;
  });
  document.addEventListener('open', this.onOpenSearchDialog);
  return lit_html_x`
    <dialog-box 
      heading="Search" 
      show="${!!this.showAdvancedSearchDialog}"
    >
      <span class="advanced-search-options">
        <input
          style="width:100%; padding-right:20px;"
          type="text"
          part="textbox textbox-search-dialog"
          placeholder="search text..."
          spellcheck="false"
          @keyup = "${e => this.onAdvancedSearch(e, 400)}"
        >
        <div style="display:flex; margin:8px 0 24px;">
          <div>
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-path" checked @change = "${e => this.onAdvancedSearch(e, 0)}">
            <label for="search-api-path" style="cursor:pointer;"> API Path </label>
            </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-descr" checked @change = "${e => this.onAdvancedSearch(e, 0)}">
            <label style="cursor:pointer;" for="search-api-descr"> API Description </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-params" @change = "${e => this.onAdvancedSearch(e, 0)}">
            <label style="cursor:pointer;" for="search-api-params"> API Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-request-body" @change = "${e => this.onAdvancedSearch(e, 0)}">
            <label style="cursor:pointer;" for="search-api-request-body"> Request Body Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-resp-descr" @change = "${e => this.onAdvancedSearch(e, 0)}">
            <label style="cursor:pointer;" for="search-api-resp-descr"> Response Description </label>
          </div>
        </div>
      </span>
      
      ${(_this$advancedSearchM = this.advancedSearchMatches) === null || _this$advancedSearchM === void 0 ? void 0 : _this$advancedSearchM.map(path => lit_html_x`
      <div
        class="mono-font small-font-size hover-bg"
        style='padding: 5px; cursor: pointer; border-bottom: 1px solid var(--light-border-color); ${path.deprecated ? 'filter:opacity(0.5);' : ''}' 
        data-content-id='${path.elementId}'
        tabindex = '0'
        @click="${e => {
    this.matchPaths = ''; // clear quick filter if applied
    this.showAdvancedSearchDialog = false; // Hide Search Dialog
    this.requestUpdate();
    this.scrollToEventTarget(e, true);
  }}"
      > 
        <span class="upper bold-text method-fg ${path.method}">${path.method}</span> 
        <span>${path.path}</span>
        <span class="regular-font gray-text">${path.summary}</span>
      </div>
    `)}
    </dialog-box>
  `;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/utils/color-utils.js
/* harmony default export */ const color_utils = ({
  color: {
    inputReverseFg: '#fff',
    inputReverseBg: '#333',
    headerBg: '#444',
    getRgb(hex) {
      if (hex.indexOf('#') === 0) {
        hex = hex.slice(1, 7);
      }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3 || hex.length === 4) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
      }
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16)
      };
    },
    luminanace(hexColorCode) {
      const rgb = this.getRgb(hexColorCode);
      return rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114;
    },
    invert(hexColorCode) {
      return this.luminanace(hexColorCode) > 135 ? '#000' : '#fff'; // compare with `>=128`, but giving little more preference to white over black
    },

    opacity(hex, opacity) {
      const rgb = this.getRgb(hex);
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
    },
    brightness(hex, amt) {
      const rgb = this.getRgb(hex);
      rgb.r += amt;
      rgb.g += amt;
      rgb.b += amt;
      if (rgb.r > 255) rgb.r = 255;else if (rgb.r < 0) rgb.r = 0;
      if (rgb.g > 255) rgb.g = 255;else if (rgb.g < 0) rgb.g = 0;
      if (rgb.b > 255) rgb.b = 255;else if (rgb.b < 0) rgb.b = 0;
      return `#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`;
    },
    hasGoodContrast(hexColorCode1, hexColorCode2) {
      const lum1 = this.luminanace(hexColorCode1);
      const lum2 = this.luminanace(hexColorCode2);
      return lum1 - lum2;
    }
  }
});
function isValidHexColor(colorCode) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/i.test(colorCode);
}
;// CONCATENATED MODULE: ./src/utils/theme.js


/* Generates an schema object containing type and constraint info */
function setTheme(baseTheme, theme = {}) {
  let newTheme = {};

  // Common Theme colors
  const primaryColor = theme.primaryColor ? theme.primaryColor : baseTheme === 'dark' ? '#f76b39' : '#ff591e';
  const primaryColorInvert = color_utils.color.invert(primaryColor);
  const primaryColorTrans = color_utils.color.opacity(primaryColor, '0.4');

  // Dark and Light Theme colors
  if (baseTheme === 'dark') {
    const bg1 = theme.bg1 ? theme.bg1 : '#2a2b2c';
    const fg1 = theme.fg1 ? theme.fg1 : '#bbb';
    const bg2 = theme.bg2 ? theme.bg2 : color_utils.color.brightness(bg1, 5); // or #383838;
    const bg3 = theme.bg3 ? theme.bg3 : color_utils.color.brightness(bg1, 17); // or #444;
    const lightBg = theme.bg3 ? theme.bg3 : color_utils.color.brightness(bg1, 35);
    const fg2 = theme.fg2 ? theme.fg2 : color_utils.color.brightness(fg1, -15); // or #ababab
    const fg3 = theme.fg3 ? theme.fg3 : color_utils.color.brightness(fg1, -20); // or #aaa
    const lightFg = theme.fg3 ? theme.fg3 : color_utils.color.brightness(fg1, -65); // or #777
    const inlineCodeFg = theme.inlineCodeFg ? theme.inlineCodeFg : '#aaa';
    const selectionBg = '#bbb';
    const selectionFg = '#eee';
    const headerColor = theme.headerColor ? theme.headerColor : color_utils.color.brightness(bg1, 10);
    const navBgColor = theme.navBgColor ? theme.navBgColor : color_utils.color.brightness(bg1, 10);
    const navTextColor = theme.navTextColor ? theme.navTextColor : color_utils.color.opacity(color_utils.color.invert(navBgColor), '0.50');
    const navHoverBgColor = theme.navHoverBgColor ? theme.navHoverBgColor : color_utils.color.brightness(navBgColor, -15);
    const navHoverTextColor = theme.navHoverTextColor ? theme.navHoverTextColor : color_utils.color.invert(navBgColor);
    const navAccentColor = theme.navAccentColor ? theme.navAccentColor : color_utils.color.brightness(primaryColor, 25);
    const navAccentTextColor = theme.navAccentTextColor ? theme.navAccenttextColor : color_utils.color.invert(navAccentColor);
    const overlayBg = 'rgba(80, 80, 80, 0.4)';
    newTheme = {
      bg1,
      bg2,
      bg3,
      lightBg,
      fg1,
      fg2,
      fg3,
      lightFg,
      inlineCodeFg,
      primaryColor,
      primaryColorTrans,
      primaryColorInvert,
      selectionBg,
      selectionFg,
      overlayBg,
      navBgColor,
      navTextColor,
      navHoverBgColor,
      navHoverTextColor,
      navAccentColor,
      navAccentTextColor,
      headerColor,
      headerColorInvert: color_utils.color.invert(headerColor),
      headerColorDarker: color_utils.color.brightness(headerColor, -20),
      headerColorBorder: color_utils.color.brightness(headerColor, 10),
      borderColor: theme.borderColor || color_utils.color.brightness(bg1, 20),
      // #555
      lightBorderColor: theme.lightBorderColor || color_utils.color.brightness(bg1, 15),
      // #444
      codeBorderColor: theme.codeBorderColor || color_utils.color.brightness(bg1, 30),
      inputBg: theme.inputBg || color_utils.color.brightness(bg1, -5),
      // #2f2f2f
      placeHolder: theme.placeHolder || color_utils.color.opacity(fg1, '0.3'),
      hoverColor: theme.hoverColor || color_utils.color.brightness(bg1, -10),
      // #2a2a2a

      red: theme.red ? theme.red : '#F06560',
      lightRed: theme.lightRed ? theme.lightRed : color_utils.color.brightness(bg1, -10),
      // #2a2a2a

      pink: theme.pink ? theme.pink : '#ffb2b2',
      lightPink: theme.lightPink || color_utils.color.brightness(bg1, -10),
      green: theme.green || '#7ec699',
      lightGreen: theme.lightGreen || color_utils.color.brightness(bg1, -10),
      // #2a2a2a

      blue: theme.blue || '#71b7ff',
      lightBlue: theme.lightBlue || color_utils.color.brightness(bg1, -10),
      // #2a2a2a

      orange: theme.orange ? theme.orange : '#f08d49',
      lightOrange: theme.lightOrange || color_utils.color.brightness(bg1, -10),
      // #2a2a2a

      yellow: theme.yellow || '#827717',
      lightYellow: theme.lightYellow || color_utils.color.brightness(bg1, -10),
      // #2a2a2a

      purple: theme.purple || '#786FF1',
      brown: theme.brown || '#D4AC0D',
      codeBg: theme.codeBg || color_utils.color.opacity(color_utils.color.brightness(bg1, -15), 0.7),
      codeFg: theme.codeFg || '#aaa',
      codePropertyColor: theme.codePropertyColor || '#f8c555',
      codeKeywordColor: theme.codeKeywordColor || '#cc99cd',
      codeOperatorColor: theme.codeOperatorColor || '#67cdcc'
    };
  } else {
    const bg1 = theme.bg1 ? theme.bg1 : '#fafbfc';
    const fg1 = theme.fg1 ? theme.fg1 : '#444444';
    const bg2 = theme.bg2 ? theme.bg2 : color_utils.color.brightness(bg1, -5); // or '#fafafa'
    const bg3 = theme.bg3 ? theme.bg3 : color_utils.color.brightness(bg1, -15); // or '#f6f6f6'
    const lightBg = theme.bg3 ? theme.bg3 : color_utils.color.brightness(bg1, -45);
    const fg2 = theme.fg2 ? theme.fg2 : color_utils.color.brightness(fg1, 17); // or '#555'
    const fg3 = theme.fg3 ? theme.fg3 : color_utils.color.brightness(fg1, 30); // or #666
    const lightFg = theme.fg3 ? theme.fg3 : color_utils.color.brightness(fg1, 70); // or #999
    const inlineCodeFg = theme.inlineCodeFg ? theme.inlineCodeFg : 'brown';
    const selectionBg = '#444';
    const selectionFg = '#eee';
    const headerColor = theme.headerColor ? theme.headerColor : color_utils.color.brightness(bg1, -180);

    /*
    const navBgColor = theme.navBgColor ? theme.navBgColor : ColorUtils.color.brightness(bg1, -10);
    const navTextColor = theme.navTextColor ? theme.navTextColor : ColorUtils.color.brightness(fg1, 5);
    const navHoverBgColor = theme.navHoverBgColor ? theme.navHoverBgColor : bg1;
    const navHoverTextColor = theme.navHoverTextColor ? theme.navHoverTextColor : primaryColor;
    const navAccentColor = theme.navAccentColor ? theme.navAccentColor : primaryColor;
    */
    const navBgColor = theme.navBgColor ? theme.navBgColor : color_utils.color.brightness(bg1, -200);
    const navTextColor = theme.navTextColor ? theme.navTextColor : color_utils.color.opacity(color_utils.color.invert(navBgColor), '0.65');
    const navHoverBgColor = theme.navHoverBgColor ? theme.navHoverBgColor : color_utils.color.brightness(navBgColor, -15);
    const navHoverTextColor = theme.navHoverTextColor ? theme.navHoverTextColor : color_utils.color.invert(navBgColor);
    const navAccentColor = theme.navAccentColor ? theme.navAccentColor : color_utils.color.brightness(primaryColor, 25);
    const navAccentTextColor = theme.navAccentTextColor ? theme.navAccenttextColor : color_utils.color.invert(navAccentColor);
    const overlayBg = 'rgba(0, 0, 0, 0.4)';
    newTheme = {
      bg1,
      bg2,
      bg3,
      lightBg,
      fg1,
      fg2,
      fg3,
      lightFg,
      inlineCodeFg,
      primaryColor,
      primaryColorTrans,
      primaryColorInvert,
      selectionBg,
      selectionFg,
      overlayBg,
      navBgColor,
      navTextColor,
      navHoverBgColor,
      navHoverTextColor,
      navAccentColor,
      navAccentTextColor,
      headerColor,
      headerColorInvert: color_utils.color.invert(headerColor),
      headerColorDarker: color_utils.color.brightness(headerColor, -20),
      headerColorBorder: color_utils.color.brightness(headerColor, 10),
      borderColor: theme.borderColor || color_utils.color.brightness(bg1, -38),
      lightBorderColor: theme.lightBorderColor || color_utils.color.brightness(bg1, -23),
      codeBorderColor: theme.codeBorderColor || 'transparent',
      inputBg: theme.inputBg || color_utils.color.brightness(bg1, 10),
      // #fff
      placeHolder: theme.placeHolder || color_utils.color.brightness(lightFg, 20),
      // #dedede
      hoverColor: theme.hoverColor || color_utils.color.brightness(bg1, -5),
      // # f1f1f1

      red: theme.red || '#F06560',
      lightRed: theme.lightRed || '#fff0f0',
      pink: theme.pink ? theme.pink : '#990055',
      lightPink: theme.lightPink ? theme.lightPink : '#ffb2b2',
      green: theme.green || '#690',
      lightGreen: theme.lightGreen || '#fbfff0',
      blue: theme.blue || '#47AFE8',
      lightBlue: theme.lightBlue || '#eff8fd',
      orange: theme.orange || '#FF9900',
      lightOrange: theme.lightOrange || '#fff5e6',
      yellow: theme.yellow || '#827717',
      lightYellow: theme.lightYellow || '#fff5cc',
      purple: theme.purple || '#786FF1',
      brown: theme.brown || '#D4AC0D',
      codeBg: theme.codeBg || color_utils.color.opacity(color_utils.color.brightness(bg1, -15), 0.7),
      codeFg: theme.codeFg || '#666',
      codePropertyColor: theme.codePropertyColor || '#905',
      codeKeywordColor: theme.codeKeywordColor || '#07a',
      codeOperatorColor: theme.codeOperatorColor || '#9a6e3a'
    };
  }
  return lit_html_x`
  <style>
  *, *:before, *:after { box-sizing: border-box; }
  
  :host {
    /* Common Styles - irrespective of themes */  
    --border-radius: 2px;
    --layout: ${this.layout || 'row'};
    --font-mono: ${this.monoFont || 'Monaco, "Andale Mono", "Roboto Mono", Consolas, monospace'};
    --font-regular: ${this.regularFont || '"Open Sans", Avenir, "Segoe UI", Arial, sans-serif'};
    --scroll-bar-width: 8px;
    --nav-item-padding: ${this.navItemSpacing === 'relaxed' ? '10px 16px 10px 10px' : this.navItemSpacing === 'compact' ? '5px 16px 5px 10px' : '7px 16px 7px 10px'};
    
    --resp-area-height: ${this.responseAreaHeight};
    --font-size-small: ${this.fontSize === 'default' ? '12px' : this.fontSize === 'large' ? '13px' : '14px'};
    --font-size-mono: ${this.fontSize === 'default' ? '13px' : this.fontSize === 'large' ? '14px' : '15px'};
    --font-size-regular: ${this.fontSize === 'default' ? '14px' : this.fontSize === 'large' ? '15px' : '16px'};
    --dialog-z-index: 1000;

    --focus-shadow: 0 0 0 1px transparent, 0 0 0 3px ${newTheme.primaryColorTrans};

    /* Theme specific styles */  
    --bg:${newTheme.bg1};
    --bg2:${newTheme.bg2};
    --bg3:${newTheme.bg3};
    --light-bg:${newTheme.lightBg};
    --fg:${newTheme.fg1};
    --fg2:${newTheme.fg2};
    --fg3:${newTheme.fg3};
    --light-fg:${newTheme.lightFg};
    --selection-bg:${newTheme.selectionBg};
    --selection-fg:${newTheme.selectionFg};
    --overlay-bg:${newTheme.overlayBg};
    
    /* Border Colors */
    --border-color:${newTheme.borderColor};
    --light-border-color:${newTheme.lightBorderColor};
    --code-border-color:${newTheme.codeBorderColor};

    --input-bg:${newTheme.inputBg};
    --placeholder-color:${newTheme.placeHolder};
    --hover-color:${newTheme.hoverColor};
    --red:${newTheme.red};
    --light-red:${newTheme.lightRed};
    --pink:${newTheme.pink};
    --light-pink:${newTheme.lightPink};
    --green:${newTheme.green};
    --light-green:${newTheme.lightGreen};
    --blue:${newTheme.blue};
    --light-blue:${newTheme.lightBlue};
    --orange:${newTheme.orange};
    --light-orange:${newTheme.lightOrange};
    --yellow:${newTheme.yellow};
    --light-yellow:${newTheme.lightYellow};
    --purple:${newTheme.purple};
    --brown:${newTheme.brown};

    /* Header Color */
    --header-bg:${newTheme.headerColor};
    --header-fg:${newTheme.headerColorInvert};
    --header-color-darker:${newTheme.headerColorDarker};
    --header-color-border:${newTheme.headerColorBorder};

    /* Nav Colors */  
    --nav-bg-color:${newTheme.navBgColor};
    --nav-text-color:${newTheme.navTextColor};
    --nav-hover-bg-color:${newTheme.navHoverBgColor};
    --nav-hover-text-color:${newTheme.navHoverTextColor};
    --nav-accent-color:${newTheme.navAccentColor};
    --nav-accent-text-color:${newTheme.navAccentTextColor};

    /* Nav API Method Colors*/
    --nav-get-color:${newTheme.blue};
    --nav-put-color:${newTheme.orange};
    --nav-post-color:${newTheme.green};
    --nav-delete-color:${newTheme.red};
    --nav-head-color:${newTheme.yellow};

    /* Primary Colors */  
    --primary-color:${newTheme.primaryColor};
    --primary-color-invert:${newTheme.primaryColorInvert};
    --primary-color-trans:${newTheme.primaryColorTrans};

    /*Code Syntax Color*/
    --code-bg:${newTheme.codeBg};
    --code-fg:${newTheme.codeFg};
    --inline-code-fg:${newTheme.inlineCodeFg};
    --code-property-color:${newTheme.codePropertyColor};
    --code-keyword-color:${newTheme.codeKeywordColor};
    --code-operator-color:${newTheme.codeOperatorColor};
  }
  </style>`;
}
;// CONCATENATED MODULE: ./src/templates/main-body-template.js


// Templates











function mainBodyTemplate(isMini = false, showExpandCollapse = true, showTags = true, pathsExpanded = false) {
  if (!this.resolvedSpec) {
    return '';
  }
  if (this.persistAuth === 'true') {
    recoverPersistedApiKeys.call(this);
  }
  const newTheme = {
    bg1: isValidHexColor(this.bgColor) ? this.bgColor : '',
    fg1: isValidHexColor(this.textColor) ? this.textColor : '',
    headerColor: isValidHexColor(this.headerColor) ? this.headerColor : '',
    primaryColor: isValidHexColor(this.primaryColor) ? this.primaryColor : '',
    navBgColor: isValidHexColor(this.navBgColor) ? this.navBgColor : '',
    navTextColor: isValidHexColor(this.navTextColor) ? this.navTextColor : '',
    navHoverBgColor: isValidHexColor(this.navHoverBgColor) ? this.navHoverBgColor : '',
    navHoverTextColor: isValidHexColor(this.navHoverTextColor) ? this.navHoverTextColor : '',
    navAccentColor: isValidHexColor(this.navAccentColor) ? this.navAccentColor : '',
    navAccentTextColor: isValidHexColor(this.navAccentTextColor) ? this.navAccentTextColor : ''
  };
  /* eslint-disable indent */
  if (this.resolvedSpec.specLoadError) {
    if (isMini) {
      return lit_html_x`
        ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}
        <div style='display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)'> ${this.resolvedSpec.info.description} </div>
      `;
    }
    return lit_html_x`
      ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}
      <!-- Header -->
      ${headerTemplate.call(this)}
      <main class='main-content regular-font' part='section-main-content'>
        <slot></slot>
        <div style='margin:24px; text-align: center;'>
          <h1 style='color: var(--red)'> ${this.resolvedSpec.info.title} </h1>
          <div style='font-family:var(--font-mono)'> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `;
  }
  if (this.resolvedSpec.isSpecLoading) {
    return lit_html_x`
      ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}
      <main class='main-content regular-font' part='section-main-content'>
        <slot></slot>
        <div class='main-content-inner--${this.renderStyle}-mode'>
          <div class='loader'></div>
        </div>
      </main>
    `;
  }
  return lit_html_x`
    ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}

    <!-- Header -->
    ${this.showHeader === 'false' ? '' : headerTemplate.call(this)}
    
    <!-- Advanced Search -->
    ${this.allowAdvancedSearch === 'false' ? '' : searchByPropertiesModalTemplate.call(this)}

    <div id='the-main-body' class='body ${this.cssClasses}' dir='${this.pageDirection}' >
      <!-- Side Nav -->
      ${(this.renderStyle === 'read' || this.renderStyle === 'focused') && this.showSideNav === 'true' && this.resolvedSpec ? navbarTemplate.call(this) : ''}

      <!-- Main Content -->
      <main class='main-content regular-font' tabindex='-1' part='section-main-content'>
        <slot></slot>
        <div class='main-content-inner--${this.renderStyle}-mode'>
          ${this.loading === true ? lit_html_x`<div class='loader'></div>` : lit_html_x`
              ${this.loadFailed === true ? lit_html_x`<div style='text-align: center;margin: 16px;'> Unable to load the Spec</div>` : lit_html_x`
                  <div class='operations-root' @click='${e => {
    this.handleHref(e);
  }}'>
                  ${this.renderStyle === 'focused' ? lit_html_x`${focusedEndpointTemplate.call(this)}` : lit_html_x`
                      ${this.showInfo === 'true' ? overviewTemplate.call(this) : ''}
                      ${this.allowServerSelection === 'true' ? serverTemplate.call(this) : ''}
                      ${this.allowAuthentication === 'true' ? securitySchemeTemplate.call(this) : ''}
                      <div id='operations-top' class='observe-me'>
                        <slot name='operations-top'></slot>
                      </div>  
                      ${this.renderStyle === 'read' ? expandedEndpointTemplate.call(this) : endpointTemplate.call(this, showExpandCollapse, showTags, pathsExpanded)}
                    `}
                  </div>
                `}`}
        </div>
        <slot name='footer'></slot>
      </main>
    </div>  
  `;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/rapidoc.js













// Styles










// import { expandCollapseNavBarTag } from '@/templates/navbar-template';





class RapiDoc extends lit_element_s {
  constructor() {
    super();
    const intersectionObserverOptions = {
      root: this.getRootNode().host,
      rootMargin: '-50px 0px -50px 0px',
      // when the element is visible 100px from bottom
      threshold: 0
    };
    this.showSummaryWhenCollapsed = true;
    // Will activate intersection observer only after spec load and hash analyze
    // to scroll to the proper element without being reverted by observer behavior
    this.isIntersectionObserverActive = false;
    this.intersectionObserver = new IntersectionObserver(entries => {
      this.onIntersect(entries);
    }, intersectionObserverOptions);
  }
  static get properties() {
    return {
      // Heading
      headingText: {
        type: String,
        attribute: 'heading-text'
      },
      gotoPath: {
        type: String,
        attribute: 'goto-path'
      },
      // Spec
      updateRoute: {
        type: String,
        attribute: 'update-route'
      },
      routePrefix: {
        type: String,
        attribute: 'route-prefix'
      },
      specUrl: {
        type: String,
        attribute: 'spec-url'
      },
      sortTags: {
        type: String,
        attribute: 'sort-tags'
      },
      generateMissingTags: {
        type: String,
        attribute: 'generate-missing-tags'
      },
      sortEndpointsBy: {
        type: String,
        attribute: 'sort-endpoints-by'
      },
      specFile: {
        type: String,
        attribute: false
      },
      // UI Layouts
      layout: {
        type: String
      },
      renderStyle: {
        type: String,
        attribute: 'render-style'
      },
      defaultSchemaTab: {
        type: String,
        attribute: 'default-schema-tab'
      },
      responseAreaHeight: {
        type: String,
        attribute: 'response-area-height'
      },
      fillRequestFieldsWithExample: {
        type: String,
        attribute: 'fill-request-fields-with-example'
      },
      persistAuth: {
        type: String,
        attribute: 'persist-auth'
      },
      onNavTagClick: {
        type: String,
        attribute: 'on-nav-tag-click'
      },
      // Schema Styles
      schemaStyle: {
        type: String,
        attribute: 'schema-style'
      },
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      schemaHideReadOnly: {
        type: String,
        attribute: 'schema-hide-read-only'
      },
      schemaHideWriteOnly: {
        type: String,
        attribute: 'schema-hide-write-only'
      },
      // API Server
      apiKeyName: {
        type: String,
        attribute: 'api-key-name'
      },
      apiKeyLocation: {
        type: String,
        attribute: 'api-key-location'
      },
      apiKeyValue: {
        type: String,
        attribute: 'api-key-value'
      },
      defaultApiServerUrl: {
        type: String,
        attribute: 'default-api-server'
      },
      serverUrl: {
        type: String,
        attribute: 'server-url'
      },
      oauthReceiver: {
        type: String,
        attribute: 'oauth-receiver'
      },
      // Hide/Show Sections & Enable Disable actions
      showHeader: {
        type: String,
        attribute: 'show-header'
      },
      showSideNav: {
        type: String,
        attribute: 'show-side-nav'
      },
      showInfo: {
        type: String,
        attribute: 'show-info'
      },
      allowAuthentication: {
        type: String,
        attribute: 'allow-authentication'
      },
      allowTry: {
        type: String,
        attribute: 'allow-try'
      },
      showCurlBeforeTry: {
        type: String,
        attribute: 'show-curl-before-try'
      },
      allowSpecUrlLoad: {
        type: String,
        attribute: 'allow-spec-url-load'
      },
      allowSpecFileLoad: {
        type: String,
        attribute: 'allow-spec-file-load'
      },
      allowSpecFileDownload: {
        type: String,
        attribute: 'allow-spec-file-download'
      },
      allowSearch: {
        type: String,
        attribute: 'allow-search'
      },
      allowAdvancedSearch: {
        type: String,
        attribute: 'allow-advanced-search'
      },
      allowServerSelection: {
        type: String,
        attribute: 'allow-server-selection'
      },
      allowSchemaDescriptionExpandToggle: {
        type: String,
        attribute: 'allow-schema-description-expand-toggle'
      },
      showComponents: {
        type: String,
        attribute: 'show-components'
      },
      pageDirection: {
        type: String,
        attribute: 'page-direction'
      },
      scrollBehavior: {
        type: String,
        attribute: 'scroll-behavior'
      },
      // Main Colors and Font
      theme: {
        type: String
      },
      bgColor: {
        type: String,
        attribute: 'bg-color'
      },
      textColor: {
        type: String,
        attribute: 'text-color'
      },
      headerColor: {
        type: String,
        attribute: 'header-color'
      },
      primaryColor: {
        type: String,
        attribute: 'primary-color'
      },
      fontSize: {
        type: String,
        attribute: 'font-size'
      },
      regularFont: {
        type: String,
        attribute: 'regular-font'
      },
      monoFont: {
        type: String,
        attribute: 'mono-font'
      },
      loadFonts: {
        type: String,
        attribute: 'load-fonts'
      },
      cssFile: {
        type: String,
        attribute: 'css-file'
      },
      cssClasses: {
        type: String,
        attribute: 'css-classes'
      },
      // Nav Bar Colors
      navBgColor: {
        type: String,
        attribute: 'nav-bg-color'
      },
      navTextColor: {
        type: String,
        attribute: 'nav-text-color'
      },
      navHoverBgColor: {
        type: String,
        attribute: 'nav-hover-bg-color'
      },
      navHoverTextColor: {
        type: String,
        attribute: 'nav-hover-text-color'
      },
      navAccentColor: {
        type: String,
        attribute: 'nav-accent-color'
      },
      navAccentTextColor: {
        type: String,
        attribute: 'nav-accent-text-color'
      },
      navActiveItemMarker: {
        type: String,
        attribute: 'nav-active-item-marker'
      },
      navItemSpacing: {
        type: String,
        attribute: 'nav-item-spacing'
      },
      showMethodInNavBar: {
        type: String,
        attribute: 'show-method-in-nav-bar'
      },
      usePathInNavBar: {
        type: String,
        attribute: 'use-path-in-nav-bar'
      },
      infoDescriptionHeadingsInNavBar: {
        type: String,
        attribute: 'info-description-headings-in-navbar'
      },
      // Fetch Options
      fetchCredentials: {
        type: String,
        attribute: 'fetch-credentials'
      },
      // Filters
      matchPaths: {
        type: String,
        attribute: 'match-paths'
      },
      matchType: {
        type: String,
        attribute: 'match-type'
      },
      // Internal Properties
      loading: {
        type: Boolean
      },
      // indicates spec is being loaded
      focusedElementId: {
        type: String
      },
      // updating the focusedElementId will automatically render appropriate section in focused mode
      showAdvancedSearchDialog: {
        type: Boolean
      },
      advancedSearchMatches: {
        type: Object
      }
    };
  }
  static get styles() {
    return [font_styles, input_styles, flex_styles, table_styles, endpoint_styles, prism_styles, tab_styles, nav_styles, info_styles, i`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      :where(button, input[type="checkbox"], [tabindex="0"]):focus-visible { box-shadow: var(--focus-shadow); }
      :where(input[type="text"], input[type="password"], select, textarea):focus-visible { border-color: var(--primary-color); }
    .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }
      .main-content { 
        margin:0;
        padding: 0; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }

      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }

      .section-gap.section-tag {
        border-bottom:1px solid var(--border-color);
      }
      .section-gap,
      .section-gap--focused-mode,
      .section-gap--read-mode { 
        padding: 0px 4px; 
      }
      .section-tag-header {
        position:relative;
        cursor: n-resize;
        padding: 12px 0;
      }
      .collapsed .section-tag-header:hover{
        cursor: s-resize;
      }

      .section-tag-header:hover{
        background-image: linear-gradient(to right, rgba(0,0,0,0), var(--border-color), rgba(0,0,0,0));
      }

      .section-tag-header:hover::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color:var(--primary-color);
        content: '⬆'; 
      }

      .collapsed .section-tag-header::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color: var(--border-color);
        content: '⬇'; 
      }
      .collapsed .section-tag-header:hover::after {
        color:var(--primary-color);
      }

      .collapsed .section-tag-body {
        display:none;
      }

      .logo {
        height:36px;
        width:36px;
        margin-left:5px; 
      }
      .only-large-screen-flex,
      .only-large-screen{
        display:none;
      }
      .tag.title {
        text-transform: uppercase;
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      .expanded-endpoint-body { 
        position: relative;
        padding: 6px 0px; 
      }
      .expanded-endpoint-body .tag-description {
        background: var(--code-bg);
        border-radius: var(--border-radius);
        transition: max-height .2s ease-out;
      }
      .expanded-endpoint-body .tag-icon {
        transition: transform .2s ease-out;
      }
      .expanded-endpoint-body .tag-icon.expanded {
        transform: rotate(180deg);
      }
      .divider { 
        border-top: 2px solid var(--border-color);
        margin: 24px 0;
        width:100%;
      }

      .tooltip {
        cursor:pointer;
        border: 1px solid var(--border-color);
        border-left-width: 4px;
        margin-left:2px;
      }
      .tooltip a {
        color: var(--fg2);
        text-decoration: none;
      }
      .tooltip-text {
        color: var(--fg2);
        max-width: 400px;
        position: absolute;
        z-index:1;
        background-color: var(--bg2);
        visibility: hidden;

        overflow-wrap: break-word;
      }
      .tooltip:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }
      .tooltip:hover a:hover {
        color: var(--primary-color);
      }

      .tooltip:hover .tooltip-text {
        visibility: visible;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .nav-method { font-weight: bold; margin-right: 4px; font-size: calc(var(--font-size-small) - 2px); white-space: nowrap; }
      .nav-method.false { display: none; }

      .nav-method.as-colored-text.get { color:var(--nav-get-color); }
      .nav-method.as-colored-text.put { color:var(--nav-put-color); }
      .nav-method.as-colored-text.post { color:var(--nav-post-color); }
      .nav-method.as-colored-text.delete { color:var(--nav-delete-color); }
      .nav-method.as-colored-text.head, .nav-method.as-colored-text.patch, .nav-method.as-colored-text.options { color:var(--nav-head-color); }
      
      .nav-method.as-colored-block {
        padding: 1px 4px;
        min-width: 30px;
        border-radius: 4px 0 0 4px;
        color: #000;
      }
      .colored-block .nav-method.as-colored-block {
        outline: 1px solid;
      }

      .nav-method.as-colored-block.get { background-color: var(--blue); }
      .nav-method.as-colored-block.put { background-color: var(--orange); }
      .nav-method.as-colored-block.post { background-color: var(--green); }
      .nav-method.as-colored-block.delete { background-color: var(--red); }
      .nav-method.as-colored-block.head, .nav-method.as-colored-block.patch , .nav-method.as-colored-block.options { 
        background-color: var(--yellow); 
      }

      @media only screen and (min-width: 768px) {
        .nav-bar {
          width: 260px;
          display:flex;
        }
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
        .section-gap { 
          padding: 0 0 0 24px; 
        }
        .section-gap--focused-mode {
          padding: 24px 8px; 
        }
        .section-gap--read-mode { 
          padding: 24px 8px; 
        }
        .endpoint-body {
          position: relative;
          padding:36px 0 48px 0;
        }
      }

      @media only screen and (min-width: 1024px) {
        .nav-bar {
          width: ${r(this.fontSize === 'default' ? '300px' : this.fontSize === 'large' ? '315px' : '330px')};
          display:flex;
        }
        .section-gap--focused-mode { 
          padding: 12px 80px 12px 80px; 
        }
        .section-gap--read-mode { 
          padding: 24px 80px 12px 80px; 
        }
      }`, custom_styles];
  }

  // Startup
  connectedCallback() {
    super.connectedCallback();
    const parent = this.parentElement;
    if (parent) {
      if (parent.offsetWidth === 0 && parent.style.width === '') {
        parent.style.width = '100vw';
      }
      if (parent.offsetHeight === 0 && parent.style.height === '') {
        parent.style.height = '100vh';
      }
      if (parent.tagName === 'BODY') {
        if (!parent.style.marginTop) {
          parent.style.marginTop = '0';
        }
        if (!parent.style.marginRight) {
          parent.style.marginRight = '0';
        }
        if (!parent.style.marginBottom) {
          parent.style.marginBottom = '0';
        }
        if (!parent.style.marginLeft) {
          parent.style.marginLeft = '0';
        }
      }
    }
    if (this.loadFonts !== 'false') {
      const fontDescriptor = {
        family: 'Open Sans',
        style: 'normal',
        weight: '300',
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
      };
      const fontWeight300 = new FontFace('Open Sans', "url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')", fontDescriptor);
      fontDescriptor.weight = '600';
      const fontWeight600 = new FontFace('Open Sans', "url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')", fontDescriptor);
      fontWeight300.load().then(font => {
        document.fonts.add(font);
      });
      fontWeight600.load().then(font => {
        document.fonts.add(font);
      });
    }
    if (!this.layout || !'row, column,'.includes(`${this.layout},`)) {
      this.layout = 'row';
    }
    if (!this.renderStyle || !'read, view, focused,'.includes(`${this.renderStyle},`)) {
      this.renderStyle = 'focused';
    }
    if (!this.schemaStyle || !'tree, table,'.includes(`${this.schemaStyle},`)) {
      this.schemaStyle = 'tree';
    }
    if (!this.theme || !'light, dark,'.includes(`${this.theme},`)) {
      this.theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    if (!this.defaultSchemaTab || !'example, schema, model,'.includes(`${this.defaultSchemaTab},`)) {
      this.defaultSchemaTab = 'example';
    } else if (this.defaultSchemaTab === 'model') {
      this.defaultSchemaTab = 'schema';
    }
    if (!this.schemaExpandLevel || this.schemaExpandLevel < 1) {
      this.schemaExpandLevel = 99999;
    }
    if (!this.schemaDescriptionExpanded || !'true, false,'.includes(`${this.schemaDescriptionExpanded},`)) {
      this.schemaDescriptionExpanded = 'false';
    }
    if (!this.schemaHideReadOnly || !'default, never,'.includes(`${this.schemaHideReadOnly},`)) {
      this.schemaHideReadOnly = 'default';
    }
    if (!this.schemaHideWriteOnly || !'default, never,'.includes(`${this.schemaHideWriteOnly},`)) {
      this.schemaHideWriteOnly = 'default';
    }
    if (!this.fillRequestFieldsWithExample || !'true, false,'.includes(`${this.fillRequestFieldsWithExample},`)) {
      this.fillRequestFieldsWithExample = 'true';
    }
    if (!this.persistAuth || !'true, false,'.includes(`${this.persistAuth},`)) {
      this.persistAuth = 'false';
    }
    if (!this.responseAreaHeight) {
      this.responseAreaHeight = '400px';
    }
    if (!this.allowSearch || !'true, false,'.includes(`${this.allowSearch},`)) {
      this.allowSearch = 'true';
    }
    if (!this.allowAdvancedSearch || !'true, false,'.includes(`${this.allowAdvancedSearch},`)) {
      this.allowAdvancedSearch = 'true';
    }
    if (!this.allowTry || !'true, false,'.includes(`${this.allowTry},`)) {
      this.allowTry = 'true';
    }
    if (!this.apiKeyValue) {
      this.apiKeyValue = '-';
    }
    if (!this.apiKeyLocation) {
      this.apiKeyLocation = 'header';
    }
    if (!this.apiKeyName) {
      this.apiKeyName = '';
    }
    if (!this.oauthReceiver) {
      this.oauthReceiver = 'oauth-receiver.html';
    }
    if (!this.updateRoute || !'true, false,'.includes(`${this.updateRoute},`)) {
      this.updateRoute = 'true';
    }
    if (!this.routePrefix) {
      this.routePrefix = '#';
    }
    if (!this.sortTags || !'true, false,'.includes(`${this.sortTags},`)) {
      this.sortTags = 'false';
    }
    if (!this.generateMissingTags || !'true, false,'.includes(`${this.generateMissingTags},`)) {
      this.generateMissingTags = 'false';
    }
    if (!this.sortEndpointsBy || !'method, path, summary, none,'.includes(`${this.sortEndpointsBy},`)) {
      this.sortEndpointsBy = 'path';
    }
    if (!this.onNavTagClick || !'expand-collapse, show-description,'.includes(`${this.onNavTagClick},`)) {
      this.onNavTagClick = 'expand-collapse';
    }
    if (!this.navItemSpacing || !'compact, relaxed, default,'.includes(`${this.navItemSpacing},`)) {
      this.navItemSpacing = 'default';
    }
    if (!this.showMethodInNavBar || !'false, as-plain-text, as-colored-text, as-colored-block,'.includes(`${this.showMethodInNavBar},`)) {
      this.showMethodInNavBar = 'false';
    }
    if (!this.usePathInNavBar || !'true, false,'.includes(`${this.usePathInNavBar},`)) {
      this.usePathInNavBar = 'false';
    }
    if (!this.navActiveItemMarker || !'left-bar, colored-block'.includes(`${this.navActiveItemMarker},`)) {
      this.navActiveItemMarker = 'left-bar';
    }
    if (!this.fontSize || !'default, large, largest,'.includes(`${this.fontSize},`)) {
      this.fontSize = 'default';
    }
    if (!this.showInfo || !'true, false,'.includes(`${this.showInfo},`)) {
      this.showInfo = 'true';
    }
    if (!this.allowServerSelection || !'true, false,'.includes(`${this.allowServerSelection},`)) {
      this.allowServerSelection = 'true';
    }
    if (!this.allowAuthentication || !'true, false,'.includes(`${this.allowAuthentication},`)) {
      this.allowAuthentication = 'true';
    }
    if (!this.allowSchemaDescriptionExpandToggle || !'true, false,'.includes(`${this.allowSchemaDescriptionExpandToggle},`)) {
      this.allowSchemaDescriptionExpandToggle = 'true';
    }
    if (!this.showSideNav || !'true false'.includes(this.showSideNav)) {
      this.showSideNav = 'true';
    }
    if (!this.showComponents || !'true false'.includes(this.showComponents)) {
      this.showComponents = 'false';
    }
    if (!this.infoDescriptionHeadingsInNavBar || !'true, false,'.includes(`${this.infoDescriptionHeadingsInNavBar},`)) {
      this.infoDescriptionHeadingsInNavBar = 'false';
    }
    if (!this.fetchCredentials || !'omit, same-origin, include,'.includes(`${this.fetchCredentials},`)) {
      this.fetchCredentials = '';
    }
    if (!this.matchType || !'includes regex'.includes(this.matchType)) {
      this.matchType = 'includes';
    }
    if (!this.scrollBehavior || !'smooth, auto,'.includes(`${this.scrollBehavior},`)) {
      this.scrollBehavior = 'auto';
    }
    if (!this.showAdvancedSearchDialog) {
      this.showAdvancedSearchDialog = false;
    }
    if (!this.cssFile) {
      this.cssFile = null;
    }
    if (!this.cssClasses) {
      this.cssClasses = '';
    }
    marked.setOptions({
      highlight: (code, lang) => {
        if ((prism_default()).languages[lang]) {
          return prism_default().highlight(code, (prism_default()).languages[lang], lang);
        }
        return code;
      }
    });
    window.addEventListener('hashchange', () => {
      this.scrollToPath(this.getElementIDFromURL());
    }, true);
  }

  // Cleanup
  disconnectedCallback() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    super.disconnectedCallback();
  }
  infoDescriptionHeadingRenderer() {
    const renderer = new marked.Renderer();
    renderer.heading = (text, level, raw, slugger) => `<h${level} class="observe-me" id="${slugger.slug(raw)}">${text}</h${level}>`;
    return renderer;
  }
  render() {
    // return render(mainBodyTemplate(this), this.shadowRoot, { eventContext: this });
    const cssLinkEl = document.querySelector(`link[href*="${this.cssFile}"]`);
    // adding custom style for RapiDoc
    if (cssLinkEl) {
      this.shadowRoot.appendChild(cssLinkEl.cloneNode());
    }
    return mainBodyTemplate.call(this);
  }
  observeExpandedContent() {
    // Main Container
    const observeOverviewEls = this.shadowRoot.querySelectorAll('.observe-me');
    observeOverviewEls.forEach(targetEl => {
      this.intersectionObserver.observe(targetEl);
    });
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'spec-url') {
      if (oldVal !== newVal) {
        // put it at the end of event-loop to load all the attributes
        window.setTimeout(async () => {
          await this.loadSpec(newVal);
          // If goto-path is provided and no location-hash is present then try to scroll there
          if (this.gotoPath && !window.location.hash) {
            this.scrollToPath(this.gotoPath);
          }
        }, 0);
      }
    }
    if (name === 'render-style') {
      if (newVal === 'read') {
        window.setTimeout(() => {
          this.observeExpandedContent();
        }, 100);
      } else {
        this.intersectionObserver.disconnect();
      }
    }
    if (name === 'api-key-name' || name === 'api-key-location' || name === 'api-key-value') {
      let updateSelectedApiKey = false;
      let apiKeyName = '';
      let apiKeyLocation = '';
      let apiKeyValue = '';
      if (name === 'api-key-name') {
        if (this.getAttribute('api-key-location') && this.getAttribute('api-key-value')) {
          apiKeyName = newVal;
          apiKeyLocation = this.getAttribute('api-key-location');
          apiKeyValue = this.getAttribute('api-key-value');
          updateSelectedApiKey = true;
        }
      } else if (name === 'api-key-location') {
        if (this.getAttribute('api-key-name') && this.getAttribute('api-key-value')) {
          apiKeyLocation = newVal;
          apiKeyName = this.getAttribute('api-key-name');
          apiKeyValue = this.getAttribute('api-key-value');
          updateSelectedApiKey = true;
        }
      } else if (name === 'api-key-value') {
        if (this.getAttribute('api-key-name') && this.getAttribute('api-key-location')) {
          apiKeyValue = newVal;
          apiKeyLocation = this.getAttribute('api-key-location');
          apiKeyName = this.getAttribute('api-key-name');
          updateSelectedApiKey = true;
        }
      }
      if (updateSelectedApiKey) {
        if (this.resolvedSpec) {
          const rapiDocApiKey = this.resolvedSpec.securitySchemes.find(v => v.securitySchemeId === rapidocApiKey);
          if (!rapiDocApiKey) {
            this.resolvedSpec.securitySchemes.push({
              securitySchemeId: rapidocApiKey,
              description: 'api-key provided in rapidoc element attributes',
              type: 'apiKey',
              name: apiKeyName,
              in: apiKeyLocation,
              value: apiKeyValue,
              finalKeyValue: apiKeyValue
            });
          } else {
            rapiDocApiKey.name = apiKeyName;
            rapiDocApiKey.in = apiKeyLocation;
            rapiDocApiKey.value = apiKeyValue;
            rapiDocApiKey.finalKeyValue = apiKeyValue;
          }
          this.requestUpdate();
        }
      }
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }
  onSpecUrlChange() {
    this.setAttribute('spec-url', this.shadowRoot.getElementById('spec-url').value);
  }
  onSpecFileChange(e) {
    this.setAttribute('spec-file', this.shadowRoot.getElementById('spec-file').value);
    const specFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const specObj = JSON.parse(reader.result);
        this.loadSpec(specObj);
        this.shadowRoot.getElementById('spec-url').value = '';
      } catch (err) {
        console.error('RapiDoc: Unable to read or parse json'); // eslint-disable-line no-console
      }
    };
    // Read the Text file
    reader.readAsText(specFile);
  }
  onFileLoadClick() {
    this.shadowRoot.getElementById('spec-file').click();
  }
  onSearchChange(e) {
    this.matchPaths = e.target.value;
    this.resolvedSpec.tags.forEach(tag => tag.paths.filter(v => {
      if (this.matchPaths) {
        // v.expanded = false;
        if (pathIsInSearch(this.matchPaths, v, this.matchType)) {
          tag.expanded = true;
        }
      }
    }));
    this.resolvedSpec.components.forEach(component => component.subComponents.filter(v => {
      v.expanded = false;
      if (!this.matchPaths || componentIsInSearch(this.matchPaths, v)) {
        v.expanded = true;
      }
    }));
    this.requestUpdate();
  }
  onClearSearch() {
    const searchEl = this.shadowRoot.getElementById('nav-bar-search');
    searchEl.value = '';
    this.matchPaths = '';
    this.resolvedSpec.components.forEach(component => component.subComponents.filter(v => {
      v.expanded = true;
    }));
  }
  onShowSearchModalClicked() {
    this.showAdvancedSearchDialog = true;
  }

  // Event Handler on Dialog-Box is opened
  async onOpenSearchDialog(e) {
    // Set focus to text input
    const inputEl = e.detail.querySelector('input');
    await sleep(0);
    if (inputEl) {
      inputEl.focus();
    }
  }

  // Public Method
  async loadSpec(specUrl) {
    if (!specUrl) {
      return;
    }
    this.matchPaths = '';
    try {
      this.resolvedSpec = {
        specLoadError: false,
        isSpecLoading: true,
        tags: []
      };
      this.loading = true;
      this.loadFailed = false;
      const spec = await ProcessSpec.call(this, specUrl, this.generateMissingTags === 'true', this.sortTags === 'true', this.getAttribute('sort-endpoints-by'), this.getAttribute('api-key-name'), this.getAttribute('api-key-location'), this.getAttribute('api-key-value'), this.getAttribute('server-url'));
      this.loading = false;
      this.afterSpecParsedAndValidated(spec);
    } catch (err) {
      this.loading = false;
      this.loadFailed = true;
      this.resolvedSpec = null;
      console.error(`RapiDoc: Unable to resolve the API spec..  ${err.message}`); // eslint-disable-line no-console
    }
  }

  async afterSpecParsedAndValidated(spec) {
    this.resolvedSpec = spec;
    this.selectedServer = undefined;
    if (this.defaultApiServerUrl) {
      if (this.defaultApiServerUrl === this.serverUrl) {
        this.selectedServer = {
          url: this.serverUrl,
          computedUrl: this.serverUrl
        };
      } else if (this.resolvedSpec.servers) {
        this.selectedServer = this.resolvedSpec.servers.find(v => v.url === this.defaultApiServerUrl);
      }
    }
    if (!this.selectedServer) {
      if (this.resolvedSpec.servers) {
        this.selectedServer = this.resolvedSpec.servers[0]; // eslint-disable-line prefer-destructuring
      }
    }

    this.requestUpdate();
    // eslint-disable-next-line no-await-in-loop
    while (!(await this.updateComplete));
    const specLoadedEvent = new CustomEvent('spec-loaded', {
      detail: spec
    });
    this.dispatchEvent(specLoadedEvent);

    // Initiate IntersectionObserver and put it at the end of event loop, to allow loading all the child elements (must for larger specs)
    this.intersectionObserver.disconnect();
    if (this.renderStyle === 'read') {
      await sleep(100);
      this.observeExpandedContent(); // This will auto-highlight the selected nav-item in read-mode
    }

    this.isIntersectionObserverActive = true;

    // On first time Spec load, try to navigate to location hash if provided
    const elementId = this.getElementIDFromURL();
    if (elementId) {
      if (this.renderStyle === 'view') {
        this.expandAndGotoOperation(elementId, true, true);
      } else {
        this.scrollToPath(elementId);
      }
    } else if (this.renderStyle === 'focused') {
      // If goto-path is provided and no location-hash is present then try to scroll to default element
      if (!this.gotoPath) {
        var _this$resolvedSpec$ta;
        const defaultElementId = this.showInfo ? 'overview' : (_this$resolvedSpec$ta = this.resolvedSpec.tags[0]) === null || _this$resolvedSpec$ta === void 0 ? void 0 : _this$resolvedSpec$ta.paths[0];
        this.scrollToPath(defaultElementId);
      }
    }
  }

  /**
   * Return the URL from where is served the RapiDoc component, removing any hash and route prefix
   */
  getComponentBaseURL() {
    const {
      href
    } = window.location;

    // Remove end of string # or /
    const cleanRouterPrefix = this.routePrefix.replace(/(#|\/)$/, '');
    if (!cleanRouterPrefix) {
      return href.split('#')[0];
    }
    const indexOfRoutePrefix = href.lastIndexOf(cleanRouterPrefix);
    if (indexOfRoutePrefix === -1) {
      return href;
    }
    return href.slice(0, indexOfRoutePrefix);
  }

  /**
   * From the URL return the ID of the element whether it is in the hash or if used a router prefix without a hash
   */
  getElementIDFromURL() {
    const baseURL = this.getComponentBaseURL();
    const elementId = window.location.href.replace(baseURL + this.routePrefix, '');
    return elementId;
  }
  replaceHistoryState(hashId) {
    const baseURL = this.getComponentBaseURL();
    window.history.replaceState(null, null, `${baseURL}${this.routePrefix || '#'}${hashId}`);
  }
  expandAndGotoOperation(elementId, scrollToElement = true) {
    if (!this.resolvedSpec) {
      return;
    }
    // Expand full operation and tag
    let isExpandingNeeded = true;
    const tmpElementId = elementId.indexOf('#') === -1 ? elementId : elementId.substring(1);
    if (tmpElementId.startsWith('overview') || tmpElementId === 'servers' || tmpElementId === 'auth') {
      isExpandingNeeded = false;
    } else {
      for (let i = 0; i < ((_this$resolvedSpec$ta2 = this.resolvedSpec.tags) === null || _this$resolvedSpec$ta2 === void 0 ? void 0 : _this$resolvedSpec$ta2.length); i++) {
        var _this$resolvedSpec$ta2, _tag$paths;
        const tag = this.resolvedSpec.tags[i];
        const path = (_tag$paths = tag.paths) === null || _tag$paths === void 0 ? void 0 : _tag$paths.find(p => p.elementId === elementId);
        if (path) {
          if (path.expanded && tag.expanded) {
            isExpandingNeeded = false;
          } else {
            path.expanded = true;
            tag.expanded = true;
          }
        }
      }
    }
    if (scrollToElement) {
      // requestUpdate() and delay required, else we cant find element
      if (isExpandingNeeded) {
        this.requestUpdate();
      }
      window.setTimeout(() => {
        const gotoEl = this.shadowRoot.getElementById(tmpElementId);
        if (gotoEl) {
          gotoEl.scrollIntoView({
            behavior: this.scrollBehavior,
            block: 'start'
          });
          if (this.updateRoute === 'true') {
            this.replaceHistoryState(tmpElementId);
          }
        }
      }, isExpandingNeeded ? 150 : 0);
    }
  }
  isValidTopId(id) {
    return id.startsWith('overview') || id === 'servers' || id === 'auth';
  }
  isValidPathId(id) {
    var _this$resolvedSpec2, _this$resolvedSpec2$t;
    if (id === 'overview' && this.showInfo) {
      return true;
    }
    if (id === 'servers' && this.allowServerSelection) {
      return true;
    }
    if (id === 'auth' && this.allowAuthentication) {
      return true;
    }
    if (id.startsWith('tag--')) {
      var _this$resolvedSpec, _this$resolvedSpec$ta3;
      return (_this$resolvedSpec = this.resolvedSpec) === null || _this$resolvedSpec === void 0 ? void 0 : (_this$resolvedSpec$ta3 = _this$resolvedSpec.tags) === null || _this$resolvedSpec$ta3 === void 0 ? void 0 : _this$resolvedSpec$ta3.find(tag => tag.elementId === id);
    }
    return (_this$resolvedSpec2 = this.resolvedSpec) === null || _this$resolvedSpec2 === void 0 ? void 0 : (_this$resolvedSpec2$t = _this$resolvedSpec2.tags) === null || _this$resolvedSpec2$t === void 0 ? void 0 : _this$resolvedSpec2$t.find(tag => tag.paths.find(path => path.elementId === id));
  }
  onIntersect(entries) {
    if (this.isIntersectionObserverActive === false) {
      return;
    }
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        const oldNavEl = this.shadowRoot.querySelector('.nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active');
        const newNavEl = this.shadowRoot.getElementById(`link-${entry.target.id}`);

        // Add active class in the new element
        if (newNavEl) {
          if (this.updateRoute === 'true') {
            this.replaceHistoryState(entry.target.id);
          }
          newNavEl.scrollIntoView({
            behavior: this.scrollBehavior,
            block: 'center'
          });
          newNavEl.classList.add('active');
          newNavEl.part.add('section-navbar-active-item');
        }

        // Remove active class from previous element
        // if it is different from the new one (edge case on loading in read render style)
        if (oldNavEl && oldNavEl !== newNavEl) {
          oldNavEl.classList.remove('active');
          oldNavEl.part.remove('section-navbar-active-item');
        }
      }
    });
  }

  // Called by anchor tags created using markdown
  handleHref(e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      if (e.target.getAttribute('href').startsWith('#')) {
        const gotoEl = this.shadowRoot.getElementById(e.target.getAttribute('href').replace('#', ''));
        if (gotoEl) {
          gotoEl.scrollIntoView({
            behavior: this.scrollBehavior,
            block: 'start'
          });
        }
      }
    }
  }

  /**
   * Called by
   *  - onClick of Navigation Bar
   *  - onClick of Advanced Search items
   *
   * Functionality:
   *  1. First deactivate IntersectionObserver
   *  2. Scroll to the element
   *  3. Activate IntersectionObserver (after little delay)
   *
  */
  async scrollToEventTarget(event, scrollNavItemToView = true) {
    if (!(event.type === 'click' || event.type === 'keyup' && event.keyCode === 13)) {
      return;
    }
    const navEl = event.target;
    if (!navEl.dataset.contentId) {
      return;
    }
    this.isIntersectionObserverActive = false;
    if (this.renderStyle === 'focused') {
      const requestEl = this.shadowRoot.querySelector('api-request');
      if (requestEl) {
        requestEl.beforeNavigationFocusedMode();
      }
    }
    this.scrollToPath(navEl.dataset.contentId, true, scrollNavItemToView);
    setTimeout(() => {
      this.isIntersectionObserverActive = true;
    }, 300);
  }

  // Public Method (scrolls to a given path and highlights the left-nav selection)
  async scrollToPath(elementId, expandPath = true, scrollNavItemToView = true) {
    if (this.renderStyle === 'focused') {
      // for focused mode update this.focusedElementId to update the rendering, else it wont find the needed html elements
      // focusedElementId will get validated in the template
      this.focusedElementId = elementId;
      await sleep(0);
    }
    if (this.renderStyle === 'view') {
      this.expandAndGotoOperation(elementId, expandPath, true);
    } else {
      let isValidElementId = false;
      const contentEl = this.shadowRoot.getElementById(elementId);
      if (contentEl) {
        isValidElementId = true;
        contentEl.scrollIntoView({
          behavior: this.scrollBehavior,
          block: 'start'
        });
      } else {
        isValidElementId = false;
      }
      if (isValidElementId) {
        // for focused style it is important to reset request-body-selection and response selection which maintains the state for in case of multiple req-body or multiple response mime-type
        if (this.renderStyle === 'focused') {
          const requestEl = this.shadowRoot.querySelector('api-request');
          if (requestEl) {
            requestEl.afterNavigationFocusedMode();
          }
          const responseEl = this.shadowRoot.querySelector('api-response');
          if (responseEl) {
            responseEl.resetSelection();
          }
        }

        // Update Location Hash
        if (this.updateRoute === 'true') {
          this.replaceHistoryState(elementId);
        }

        // Update NavBar View and Styles
        const newNavEl = this.shadowRoot.getElementById(`link-${elementId}`);
        if (newNavEl) {
          if (scrollNavItemToView) {
            newNavEl.scrollIntoView({
              behavior: this.scrollBehavior,
              block: 'center'
            });
          }
          await sleep(0);
          const oldNavEl = this.shadowRoot.querySelector('.nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active');
          if (oldNavEl) {
            oldNavEl.classList.remove('active');
            oldNavEl.part.remove('active');
            oldNavEl.part.remove('section-navbar-active-item');
          }
          newNavEl.classList.add('active'); // must add the class after scrolling
          newNavEl.part.add('section-navbar-active-item');
          // this.requestUpdate();
        }
      }
    }
  }

  // Public Method - to update security-scheme of type http
  setHttpUserNameAndPassword(securitySchemeId, username, password) {
    return applyApiKey.call(this, securitySchemeId, username, password);
  }

  // Public Method - to update security-scheme of type apiKey or OAuth
  setApiKey(securitySchemeId, apiKeyValue) {
    return applyApiKey.call(this, securitySchemeId, '', '', apiKeyValue);
  }

  // Public Method
  removeAllSecurityKeys() {
    return onClearAllApiKeys.call(this);
  }

  // Public Method
  setApiServer(apiServerUrl) {
    // return apiServerUrl;
    return setApiServer.call(this, apiServerUrl);
  }

  // Event handler for Advanced Search text-inputs and checkboxes
  onAdvancedSearch(ev, delay) {
    const eventTargetEl = ev.target;
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      let searchInputEl;
      if (eventTargetEl.type === 'text') {
        searchInputEl = eventTargetEl;
      } else {
        searchInputEl = eventTargetEl.closest('.advanced-search-options').querySelector('input[type=text]');
      }
      const searchOptions = [...eventTargetEl.closest('.advanced-search-options').querySelectorAll('input:checked')].map(v => v.id);
      this.advancedSearchMatches = advancedSearch(searchInputEl.value, this.resolvedSpec.tags, searchOptions);
    }, delay);
  }
}
customElements.define('rapi-doc', RapiDoc);
;// CONCATENATED MODULE: ./src/rapidoc-mini.js













// Styles














class RapiDocMini extends lit_element_s {
  constructor() {
    super();
    this.isMini = true;
    this.updateRoute = 'false';
    this.renderStyle = 'view';
    this.showHeader = 'false';
    this.allowAdvancedSearch = 'false';
  }
  static get properties() {
    return {
      // Spec
      specUrl: {
        type: String,
        attribute: 'spec-url'
      },
      sortEndpointsBy: {
        type: String,
        attribute: 'sort-endpoints-by'
      },
      // UI Layouts
      layout: {
        type: String
      },
      pathsExpanded: {
        type: String,
        attribute: 'paths-expanded'
      },
      defaultSchemaTab: {
        type: String,
        attribute: 'default-schema-tab'
      },
      responseAreaHeight: {
        type: String,
        attribute: 'response-area-height'
      },
      showSummaryWhenCollapsed: {
        type: String,
        attribute: 'show-summary-when-collapsed'
      },
      fillRequestFieldsWithExample: {
        type: String,
        attribute: 'fill-request-fields-with-example'
      },
      persistAuth: {
        type: String,
        attribute: 'persist-auth'
      },
      // Schema Styles
      schemaStyle: {
        type: String,
        attribute: 'schema-style'
      },
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      // API Server
      apiKeyName: {
        type: String,
        attribute: 'api-key-name'
      },
      apiKeyLocation: {
        type: String,
        attribute: 'api-key-location'
      },
      apiKeyValue: {
        type: String,
        attribute: 'api-key-value'
      },
      defaultApiServerUrl: {
        type: String,
        attribute: 'default-api-server'
      },
      serverUrl: {
        type: String,
        attribute: 'server-url'
      },
      oauthReceiver: {
        type: String,
        attribute: 'oauth-receiver'
      },
      allowTry: {
        type: String,
        attribute: 'allow-try'
      },
      // Main Colors and Font
      theme: {
        type: String
      },
      bgColor: {
        type: String,
        attribute: 'bg-color'
      },
      textColor: {
        type: String,
        attribute: 'text-color'
      },
      primaryColor: {
        type: String,
        attribute: 'primary-color'
      },
      fontSize: {
        type: String,
        attribute: 'font-size'
      },
      regularFont: {
        type: String,
        attribute: 'regular-font'
      },
      monoFont: {
        type: String,
        attribute: 'mono-font'
      },
      loadFonts: {
        type: String,
        attribute: 'load-fonts'
      },
      // Fetch Options
      fetchCredentials: {
        type: String,
        attribute: 'fetch-credentials'
      },
      // Filters
      matchPaths: {
        type: String,
        attribute: 'match-paths'
      },
      matchType: {
        type: String,
        attribute: 'match-type'
      },
      // Internal Properties
      loading: {
        type: Boolean
      } // indicates spec is being loaded
    };
  }

  static get styles() {
    return [font_styles, input_styles, flex_styles, table_styles, endpoint_styles, prism_styles, tab_styles, nav_styles, info_styles, i`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }

      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`];
  }

  // Startup
  connectedCallback() {
    super.connectedCallback();
    if (this.loadFonts !== 'false') {
      const fontDescriptor = {
        family: 'Open Sans',
        style: 'normal',
        weight: '300',
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
      };
      const fontWeight300 = new FontFace('Open Sans', "url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')", fontDescriptor);
      fontDescriptor.weight = '600';
      const fontWeight600 = new FontFace('Open Sans', "url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')", fontDescriptor);
      fontWeight300.load().then(font => {
        document.fonts.add(font);
      });
      fontWeight600.load().then(font => {
        document.fonts.add(font);
      });
    }
    if (!this.showSummaryWhenCollapsed || !'true, false,'.includes(`${this.showSummaryWhenCollapsed},`)) {
      this.showSummaryWhenCollapsed = 'true';
    }
    if (!this.layout || !'row, column,'.includes(`${this.layout},`)) {
      this.layout = 'row';
    }
    if (!this.schemaStyle || !'tree, table,'.includes(`${this.schemaStyle},`)) {
      this.schemaStyle = 'tree';
    }
    if (!this.theme || !'light, dark,'.includes(`${this.theme},`)) {
      this.theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    if (!this.defaultSchemaTab || !'example, schema, model,'.includes(`${this.defaultSchemaTab},`)) {
      this.defaultSchemaTab = 'example';
    } else if (this.defaultSchemaTab === 'model') {
      this.defaultSchemaTab = 'schema';
    }
    this.pathsExpanded = this.pathsExpanded === 'true';
    if (!this.schemaExpandLevel || this.schemaExpandLevel < 1) {
      this.schemaExpandLevel = 99999;
    }
    if (!this.schemaDescriptionExpanded || !'true, false,'.includes(`${this.schemaDescriptionExpanded},`)) {
      this.schemaDescriptionExpanded = 'false';
    }
    if (!this.fillRequestFieldsWithExample || !'true, false,'.includes(`${this.fillRequestFieldsWithExample},`)) {
      this.fillRequestFieldsWithExample = 'true';
    }
    if (!this.persistAuth || !'true, false,'.includes(`${this.persistAuth},`)) {
      this.persistAuth = 'false';
    }
    if (!this.responseAreaHeight) {
      this.responseAreaHeight = '300px';
    }
    if (!this.allowTry || !'true, false,'.includes(`${this.allowTry},`)) {
      this.allowTry = 'true';
    }
    if (!this.apiKeyValue) {
      this.apiKeyValue = '-';
    }
    if (!this.apiKeyLocation) {
      this.apiKeyLocation = 'header';
    }
    if (!this.apiKeyName) {
      this.apiKeyName = '';
    }
    if (!this.oauthReceiver) {
      this.oauthReceiver = 'oauth-receiver.html';
    }
    if (!this.sortTags || !'true, false,'.includes(`${this.sortTags},`)) {
      this.sortTags = 'false';
    }
    if (!this.sortEndpointsBy || !'method, path, summary,'.includes(`${this.sortEndpointsBy},`)) {
      this.sortEndpointsBy = 'path';
    }
    if (!this.fontSize || !'default, large, largest,'.includes(`${this.fontSize},`)) {
      this.fontSize = 'default';
    }
    if (!this.matchType || !'includes regex'.includes(this.matchType)) {
      this.matchType = 'includes';
    }
    if (!this.allowSchemaDescriptionExpandToggle || !'true, false,'.includes(`${this.allowSchemaDescriptionExpandToggle},`)) {
      this.allowSchemaDescriptionExpandToggle = 'true';
    }
    if (!this.fetchCredentials || !'omit, same-origin, include,'.includes(`${this.fetchCredentials},`)) {
      this.fetchCredentials = '';
    }
    marked.setOptions({
      highlight: (code, lang) => {
        if ((prism_default()).languages[lang]) {
          return prism_default().highlight(code, (prism_default()).languages[lang], lang);
        }
        return code;
      }
    });
  }
  render() {
    return mainBodyTemplate.call(this, true, false, false, this.pathsExpanded);
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'spec-url') {
      if (oldVal !== newVal) {
        // put it at the end of event-loop to load all the attributes
        window.setTimeout(async () => {
          await this.loadSpec(newVal);
        }, 0);
      }
    }
    if (name === 'api-key-name' || name === 'api-key-location' || name === 'api-key-value') {
      let updateSelectedApiKey = false;
      let apiKeyName = '';
      let apiKeyLocation = '';
      let apiKeyValue = '';
      if (name === 'api-key-name') {
        if (this.getAttribute('api-key-location') && this.getAttribute('api-key-value')) {
          apiKeyName = newVal;
          apiKeyLocation = this.getAttribute('api-key-location');
          apiKeyValue = this.getAttribute('api-key-value');
          updateSelectedApiKey = true;
        }
      } else if (name === 'api-key-location') {
        if (this.getAttribute('api-key-name') && this.getAttribute('api-key-value')) {
          apiKeyLocation = newVal;
          apiKeyName = this.getAttribute('api-key-name');
          apiKeyValue = this.getAttribute('api-key-value');
          updateSelectedApiKey = true;
        }
      } else if (name === 'api-key-value') {
        if (this.getAttribute('api-key-name') && this.getAttribute('api-key-location')) {
          apiKeyValue = newVal;
          apiKeyLocation = this.getAttribute('api-key-location');
          apiKeyName = this.getAttribute('api-key-name');
          updateSelectedApiKey = true;
        }
      }
      if (updateSelectedApiKey) {
        if (this.resolvedSpec) {
          const rapiDocApiKey = this.resolvedSpec.securitySchemes.find(v => v.securitySchemeId === rapidocApiKey);
          if (!rapiDocApiKey) {
            this.resolvedSpec.securitySchemes.push({
              apiKeyId: rapidocApiKey,
              description: 'api-key provided in rapidoc element attributes',
              type: 'apiKey',
              name: apiKeyName,
              in: apiKeyLocation,
              value: apiKeyValue,
              finalKeyValue: apiKeyValue
            });
          } else {
            rapiDocApiKey.name = apiKeyName;
            rapiDocApiKey.in = apiKeyLocation;
            rapiDocApiKey.value = apiKeyValue;
            rapiDocApiKey.finalKeyValue = apiKeyValue;
          }
          this.requestUpdate();
        }
      }
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }
  onSpecUrlChange() {
    this.setAttribute('spec-url', this.shadowRoot.getElementById('spec-url').value);
  }

  // Public Method
  async loadSpec(specUrl) {
    if (!specUrl) {
      return;
    }
    try {
      this.resolvedSpec = {
        specLoadError: false,
        isSpecLoading: true,
        tags: []
      };
      this.loading = true;
      this.loadFailed = false;
      this.requestUpdate();
      const spec = await ProcessSpec.call(this, specUrl, this.generateMissingTags === 'true', this.sortTags === 'true', this.getAttribute('sort-endpoints-by'), this.getAttribute('api-key-name'), this.getAttribute('api-key-location'), this.getAttribute('api-key-value'), this.getAttribute('server-url'));
      this.loading = false;
      this.afterSpecParsedAndValidated(spec);
    } catch (err) {
      this.loading = false;
      this.loadFailed = true;
      this.resolvedSpec = null;
      console.error(`RapiDoc: Unable to resolve the API spec..  ${err.message}`); // eslint-disable-line no-console
    }
  }

  // Public Method - to update security-scheme of type http
  setHttpUserNameAndPassword(securitySchemeId, username, password) {
    return applyApiKey.call(this, securitySchemeId, username, password);
  }

  // Public Method - to update security-scheme of type apiKey or OAuth
  setApiKey(securitySchemeId, apiKeyValue) {
    return applyApiKey.call(this, securitySchemeId, '', '', apiKeyValue);
  }

  // Public Method
  removeAllSecurityKeys() {
    return onClearAllApiKeys.call(this);
  }

  // Public Method
  setApiServer(apiServerUrl) {
    // return apiServerUrl;
    return setApiServer.call(this, apiServerUrl);
  }
  async afterSpecParsedAndValidated(spec) {
    this.resolvedSpec = spec;
    this.selectedServer = undefined;
    if (this.defaultApiServerUrl) {
      if (this.defaultApiServerUrl === this.serverUrl) {
        this.selectedServer = {
          url: this.serverUrl,
          computedUrl: this.serverUrl
        };
      } else if (this.resolvedSpec.servers) {
        this.selectedServer = this.resolvedSpec.servers.find(v => v.url === this.defaultApiServerUrl);
      }
    }
    if (!this.selectedServer) {
      if (this.resolvedSpec.servers) {
        this.selectedServer = this.resolvedSpec.servers[0]; // eslint-disable-line prefer-destructuring
      }
    }

    this.requestUpdate();
    // eslint-disable-next-line no-await-in-loop
    while (!(await this.updateComplete));
    const specLoadedEvent = new CustomEvent('spec-loaded', {
      detail: spec
    });
    this.dispatchEvent(specLoadedEvent);
  }

  // Called by anchor tags created using markdown
  handleHref(e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      if (e.target.getAttribute('href').startsWith('#')) {
        const gotoEl = this.shadowRoot.getElementById(e.target.getAttribute('href').replace('#', ''));
        if (gotoEl) {
          gotoEl.scrollIntoView({
            behavior: 'auto',
            block: 'start'
          });
        }
      }
    }
  }
}
customElements.define('rapi-doc-mini', RapiDocMini);
;// CONCATENATED MODULE: ./src/oauth-receiver.js
class OauthReceiver extends HTMLElement {
  connectedCallback() {
    this.receiveAuthParms();
    window.addEventListener('storage', e => this.receiveStorage(e), true);
  }

  /**
   * Read OAuth2 parameters and sends them off
   * to the window opener through `window.postMessage`.
   */
  receiveAuthParms() {
    let authData = {};
    if (document.location.search) {
      // Applies to authorizationCode flow
      const params = new URLSearchParams(document.location.search);
      const code = params.get('code');
      const error = params.get('error');
      const state = params.get('state');
      authData = {
        code,
        error,
        state,
        responseType: 'code'
      };
    } else if (window.location.hash) {
      // Applies to Implicit flow
      const token_type = this.parseQueryString(window.location.hash.substring(1), 'token_type'); // eslint-disable-line camelcase
      const access_token = this.parseQueryString(window.location.hash.substring(1), 'access_token'); // eslint-disable-line camelcase
      authData = {
        token_type,
        access_token,
        responseType: 'token'
      }; // eslint-disable-line camelcase
    }

    if (window.opener) {
      window.opener.postMessage(authData, this.target);
      return;
    }
    sessionStorage.setItem('rapidoc-oauth-data', JSON.stringify(authData)); // Fallback to session storage if window.opener dont exist
  }

  relayAuthParams(e) {
    if (window.parent) {
      if (e.key === 'rapidoc-oauth-data') {
        const authData = JSON.parse(e.newValue);
        window.parent.postMessage(authData, this.target);
      }
    }
  }
  parseQueryString(queryString, key) {
    const vars = queryString.split('&');
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) === key) {
        return decodeURIComponent(pair[1]);
      }
    }
  }
}
customElements.define('oauth-receiver', OauthReceiver);
;// CONCATENATED MODULE: ./src/templates/json-schema-viewer-template.js

 // eslint-disable-line import/extensions


// Templates








/* eslint-disable indent */
// Json Schema Nav Template
function jsonSchemaNavTemplate() {
  return lit_html_x`
  <nav class='nav-bar' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    <div style="display:flex;line-height:22px; padding:8px">
      <input id="nav-bar-search" 
        part = "textbox textbox-nav-filter"
        style = "width:100%; height: 26px; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
        type = "text"
        placeholder = "Filter" 
        @change = "${this.onSearchChange}"  
        spellcheck = "false" 
      >
      <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
    </div>
    <nav style="flex:1" class='nav-scroll' part="section-navbar-scroll">
      ${this.resolvedSpec.schemaAndExamples.map(v => lit_html_x`
        <div class='nav-bar-path' data-content-id='${v.elementId}' id='link-${v.elementId}'
          @click = '${e => {
    this.scrollToEventTarget(e, false);
  }}'
        > 
          ${v.name}
        </div>`)}
    </nav>  
  </nav>
  `;
}

// Json Schema Body Template
function jsonSchemaBodyTemplate() {
  return lit_html_x`
    ${this.showInfo === 'true' ? overviewTemplate.call(this) : ''}
    <div style="font-size:var(--font-size-regular);">
    ${this.resolvedSpec.schemaAndExamples.map(jSchemaBody => {
    var _examplesObj$;
    const examplesObj = generateExample(jSchemaBody.schema, 'json', jSchemaBody.examples, jSchemaBody.example, true, false, 'json', true);
    jSchemaBody.selectedExample = (_examplesObj$ = examplesObj[0]) === null || _examplesObj$ === void 0 ? void 0 : _examplesObj$.exampleId;
    return lit_html_x`
        <section id='${jSchemaBody.elementId}' class='json-schema-and-example regular-font' style="display:flex; flex-direction: column; border:1px solid var(--border-color); margin-bottom:32px; border-top: 5px solid var(--border-color)">
          <div style="padding:16px; border-bottom: 1px solid var(--border-color)">
            <div style="font-size:var(--font-size-small); font-weight:bold">${jSchemaBody.name}</div>
            <span class="json-schema-description m-markdown ">${unsafe_html_o(marked(jSchemaBody.description || ''))}</span>
          </div>  
          <div style="display:flex; flex-direction: row; gap:16px;">
            <div class="json-schema-def" style="flex:1; padding:16px 0 16px 16px; ">
              <schema-tree
                .data = "${schemaInObjectNotation(jSchemaBody.schema, {})}"
                schema-expand-level = "${this.schemaExpandLevel}"
                schema-description-expanded = "${this.schemaDescriptionExpanded}"
                allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                schema-hide-read-only = "false"
                schema-hide-write-only = "false"
              > </schema-tree>
            </div>
            <div class="json-schema-example-panel" style="width:400px; background-color: var(--input-bg); padding:16px 0 16px 16px; border-left: 1px dashed var(--border-color);">
              ${examplesObj.length > 1 ? lit_html_x`<select style="min-width:100px; max-width:100%" @change='${e => this.onSelectExample(e, jSchemaBody)}'>
                    ${examplesObj.map(v => lit_html_x`
                      <option value="${v.exampleId}" ?selected=${v.exampleId === jSchemaBody.selectedExample}> 
                        ${v.exampleSummary.length > 80 ? v.exampleId : v.exampleSummary}
                      </option>`)}
                  </select>` : lit_html_x`<div style="font-size: var(--font-size-small);font-weight:700; margin:5px 0"> ${examplesObj[0].exampleSummary}</div>`}
              ${examplesObj.map(v => lit_html_x`
                <json-tree 
                  .data = "${v.exampleValue}"
                  data-example = "${v.exampleId}"
                  class = "example"
                  style = "margin-top:16px; display: ${v.exampleId === jSchemaBody.selectedExample ? 'flex' : 'none'}"
                ></json-tree>`)}
            </div>
          </div>
        </section>`;
  })}
    </div>
  `;
}
/* eslint-enable indent */

// Json Schema Root Template
function jsonSchemaViewerTemplate(isMini = false) {
  // export default function jsonSchemaViewerTemplate(isMini = false, showExpandCollapse = true, showTags = true, pathsExpanded = false) {
  if (!this.resolvedSpec) {
    return '';
  }
  const newTheme = {
    bg1: isValidHexColor(this.bgColor) ? this.bgColor : '',
    fg1: isValidHexColor(this.textColor) ? this.textColor : '',
    headerColor: isValidHexColor(this.headerColor) ? this.headerColor : '',
    primaryColor: isValidHexColor(this.primaryColor) ? this.primaryColor : '',
    navBgColor: isValidHexColor(this.navBgColor) ? this.navBgColor : '',
    navTextColor: isValidHexColor(this.navTextColor) ? this.navTextColor : '',
    navHoverBgColor: isValidHexColor(this.navHoverBgColor) ? this.navHoverBgColor : '',
    navHoverTextColor: isValidHexColor(this.navHoverTextColor) ? this.navHoverTextColor : '',
    navAccentColor: isValidHexColor(this.navAccentColor) ? this.navAccentColor : '',
    navAccenttextColor: isValidHexColor(this.navAccentTextColor) ? this.navAccentTextColor : ''
  };
  /* eslint-disable indent */
  if (this.resolvedSpec.specLoadError) {
    if (isMini) {
      return lit_html_x`
        ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `;
    }
    return lit_html_x`
      ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}
      <!-- Header -->
      ${headerTemplate.call(this)}
      <h1> Header </h1>
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `;
  }
  if (this.resolvedSpec.isSpecLoading) {
    return lit_html_x`
      ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `;
  }
  return lit_html_x`
    ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}

    <!-- Header -->
    ${this.showHeader === 'false' ? '' : headerTemplate.call(this)}
    
    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection}>

      <!-- Side Nav -->
      ${jsonSchemaNavTemplate.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${this.loading === true ? lit_html_x`<div class="loader"></div>` : lit_html_x`
              ${this.loadFailed === true ? lit_html_x`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>` : lit_html_x`
                  <div class="operations-root" @click="${e => {
    this.handleHref(e);
  }}">
                    ${jsonSchemaBodyTemplate.call(this)}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/json-schema-viewer.js













// Styles











class JsonSchemaViewer extends lit_element_s {
  constructor() {
    super();
    this.isMini = false;
    this.updateRoute = 'false';
    this.renderStyle = 'focused';
    this.showHeader = 'true';
    this.allowAdvancedSearch = 'false';
    this.selectedExampleForEachSchema = {};
  }
  static get properties() {
    return {
      // Spec
      specUrl: {
        type: String,
        attribute: 'spec-url'
      },
      // Schema Styles
      schemaStyle: {
        type: String,
        attribute: 'schema-style'
      },
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      allowSchemaDescriptionExpandToggle: {
        type: String,
        attribute: 'allow-schema-description-expand-toggle'
      },
      // Hide/show Sections
      showHeader: {
        type: String,
        attribute: 'show-header'
      },
      showSideNav: {
        type: String,
        attribute: 'show-side-nav'
      },
      showInfo: {
        type: String,
        attribute: 'show-info'
      },
      // Allow or restrict features
      allowSpecUrlLoad: {
        type: String,
        attribute: 'allow-spec-url-load'
      },
      allowSpecFileLoad: {
        type: String,
        attribute: 'allow-spec-file-load'
      },
      allowSpecFileDownload: {
        type: String,
        attribute: 'allow-spec-file-download'
      },
      allowSearch: {
        type: String,
        attribute: 'allow-search'
      },
      // Main Colors and Font
      theme: {
        type: String
      },
      bgColor: {
        type: String,
        attribute: 'bg-color'
      },
      textColor: {
        type: String,
        attribute: 'text-color'
      },
      primaryColor: {
        type: String,
        attribute: 'primary-color'
      },
      fontSize: {
        type: String,
        attribute: 'font-size'
      },
      regularFont: {
        type: String,
        attribute: 'regular-font'
      },
      monoFont: {
        type: String,
        attribute: 'mono-font'
      },
      loadFonts: {
        type: String,
        attribute: 'load-fonts'
      },
      // Internal Properties
      loading: {
        type: Boolean
      } // indicates spec is being loaded
    };
  }

  static get styles() {
    return [font_styles, input_styles, flex_styles, table_styles, endpoint_styles, prism_styles, tab_styles, nav_styles, info_styles, i`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }
      .nav-bar {
        width: 230px;
        display:flex;
      }

      .main-content { 
        margin:0;
        padding: 16px; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }
      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`];
  }

  // Startup
  connectedCallback() {
    super.connectedCallback();
    const parent = this.parentElement;
    if (parent) {
      if (parent.offsetWidth === 0 && parent.style.width === '') {
        parent.style.width = '100vw';
      }
      if (parent.offsetHeight === 0 && parent.style.height === '') {
        parent.style.height = '100vh';
      }
      if (parent.tagName === 'BODY') {
        if (!parent.style.marginTop) {
          parent.style.marginTop = '0';
        }
        if (!parent.style.marginRight) {
          parent.style.marginRight = '0';
        }
        if (!parent.style.marginBottom) {
          parent.style.marginBottom = '0';
        }
        if (!parent.style.marginLeft) {
          parent.style.marginLeft = '0';
        }
      }
    }
    if (this.loadFonts !== 'false') {
      const fontDescriptor = {
        family: 'Open Sans',
        style: 'normal',
        weight: '300',
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
      };
      const fontWeight300 = new FontFace('Open Sans', "url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')", fontDescriptor);
      fontDescriptor.weight = '600';
      const fontWeight600 = new FontFace('Open Sans', "url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')", fontDescriptor);
      fontWeight300.load().then(font => {
        document.fonts.add(font);
      });
      fontWeight600.load().then(font => {
        document.fonts.add(font);
      });
    }
    this.renderStyle = 'focused';
    this.pathsExpanded = this.pathsExpanded === 'true';
    if (!this.showInfo || !'true, false,'.includes(`${this.showInfo},`)) {
      this.showInfo = 'true';
    }
    if (!this.showSideNav || !'true false'.includes(this.showSideNav)) {
      this.showSideNav = 'true';
    }
    if (!this.showHeader || !'true, false,'.includes(`${this.showHeader},`)) {
      this.showHeader = 'true';
    }
    if (!this.schemaStyle || !'tree, table,'.includes(`${this.schemaStyle},`)) {
      this.schemaStyle = 'tree';
    }
    if (!this.theme || !'light, dark,'.includes(`${this.theme},`)) {
      this.theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    if (!this.allowSearch || !'true, false,'.includes(`${this.allowSearch},`)) {
      this.allowSearch = 'true';
    }
    if (!this.schemaExpandLevel || this.schemaExpandLevel < 1) {
      this.schemaExpandLevel = 99999;
    }
    if (!this.schemaDescriptionExpanded || !'true, false,'.includes(`${this.schemaDescriptionExpanded},`)) {
      this.schemaDescriptionExpanded = 'false';
    }
    if (!this.fontSize || !'default, large, largest,'.includes(`${this.fontSize},`)) {
      this.fontSize = 'default';
    }
    if (!this.matchType || !'includes regex'.includes(this.matchType)) {
      this.matchType = 'includes';
    }
    if (!this.allowSchemaDescriptionExpandToggle || !'true, false,'.includes(`${this.allowSchemaDescriptionExpandToggle},`)) {
      this.allowSchemaDescriptionExpandToggle = 'true';
    }
    marked.setOptions({
      highlight: (code, lang) => {
        if ((prism_default()).languages[lang]) {
          return prism_default().highlight(code, (prism_default()).languages[lang], lang);
        }
        return code;
      }
    });
  }
  render() {
    return jsonSchemaViewerTemplate.call(this, true, false, false, this.pathsExpanded);
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'spec-url') {
      if (oldVal !== newVal) {
        // put it at the end of event-loop to load all the attributes
        window.setTimeout(async () => {
          await this.loadSpec(newVal);
        }, 0);
      }
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }
  onSpecUrlChange() {
    this.setAttribute('spec-url', this.shadowRoot.getElementById('spec-url').value);
  }
  onSearchChange(e) {
    // Todo: Filter Search
    this.matchPaths = e.target.value;
  }

  // Public Method
  async loadSpec(specUrl) {
    if (!specUrl) {
      return;
    }
    try {
      this.resolvedSpec = {
        specLoadError: false,
        isSpecLoading: true,
        tags: []
      };
      this.loading = true;
      this.loadFailed = false;
      this.requestUpdate();
      const spec = await ProcessSpec.call(this, specUrl, this.generateMissingTags === 'true', this.sortTags === 'true', this.getAttribute('sort-endpoints-by'));
      this.loading = false;
      this.afterSpecParsedAndValidated(spec);
    } catch (err) {
      this.loading = false;
      this.loadFailed = true;
      this.resolvedSpec = null;
      console.error(`RapiDoc: Unable to resolve the API spec..  ${err.message}`); // eslint-disable-line no-console
    }
  }

  async afterSpecParsedAndValidated(spec) {
    this.resolvedSpec = spec;
    const specLoadedEvent = new CustomEvent('spec-loaded', {
      detail: spec
    });
    this.dispatchEvent(specLoadedEvent);
  }

  // Called by anchor tags created using markdown
  handleHref(e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      if (e.target.getAttribute('href').startsWith('#')) {
        const gotoEl = this.shadowRoot.getElementById(e.target.getAttribute('href').replace('#', ''));
        if (gotoEl) {
          gotoEl.scrollIntoView({
            behavior: 'auto',
            block: 'start'
          });
        }
      }
    }
  }

  // Example Dropdown @change Handler
  onSelectExample(e) {
    const exampleContainerEl = e.target.closest('.json-schema-example-panel');
    const exampleEls = [...exampleContainerEl.querySelectorAll('.example')];
    exampleEls.forEach(v => {
      v.style.display = v.dataset.example === e.target.value ? 'flex' : 'none';
    });
  }
  async scrollToEventTarget(event) {
    const navEl = event.currentTarget;
    if (!navEl.dataset.contentId) {
      return;
    }
    const contentEl = this.shadowRoot.getElementById(navEl.dataset.contentId);
    if (contentEl) {
      contentEl.scrollIntoView({
        behavior: 'auto',
        block: 'start'
      });
    }
  }
}
customElements.define('json-schema-viewer', JsonSchemaViewer);
;// CONCATENATED MODULE: ./src/index.js




/* harmony default export */ const src = ({
  RapiDoc: RapiDoc
});


/***/ }),

/***/ 742:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(742)
const ieee754 = __webpack_require__(645)
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.lW = Buffer
__webpack_unused_export__ = SlowBuffer
exports.h2 = 50

const K_MAX_LENGTH = 0x7fffffff
__webpack_unused_export__ = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.h2
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ 645:
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 874:
/***/ (() => {

(function (Prism) {
	// $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
	// + LC_ALL, RANDOM, REPLY, SECONDS.
	// + make sure PS1..4 are here as they are not always set,
	// - some useless things.
	var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';

	var commandAfterHeredoc = {
		pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
		lookbehind: true,
		alias: 'punctuation', // this looks reasonably well in all themes
		inside: null // see below
	};

	var insideString = {
		'bash': commandAfterHeredoc,
		'environment': {
			pattern: RegExp('\\$' + envVars),
			alias: 'constant'
		},
		'variable': [
			// [0]: Arithmetic Environment
			{
				pattern: /\$?\(\([\s\S]+?\)\)/,
				greedy: true,
				inside: {
					// If there is a $ sign at the beginning highlight $(( and )) as variable
					'variable': [
						{
							pattern: /(^\$\(\([\s\S]+)\)\)/,
							lookbehind: true
						},
						/^\$\(\(/
					],
					'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
					// Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
					'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
					// If there is no $ sign at the beginning highlight (( and )) as punctuation
					'punctuation': /\(\(?|\)\)?|,|;/
				}
			},
			// [1]: Command Substitution
			{
				pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
				greedy: true,
				inside: {
					'variable': /^\$\(|^`|\)$|`$/
				}
			},
			// [2]: Brace expansion
			{
				pattern: /\$\{[^}]+\}/,
				greedy: true,
				inside: {
					'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
					'punctuation': /[\[\]]/,
					'environment': {
						pattern: RegExp('(\\{)' + envVars),
						lookbehind: true,
						alias: 'constant'
					}
				}
			},
			/\$(?:\w+|[#?*!@$])/
		],
		// Escape sequences from echo and printf's manuals, and escaped quotes.
		'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
	};

	Prism.languages.bash = {
		'shebang': {
			pattern: /^#!\s*\/.*/,
			alias: 'important'
		},
		'comment': {
			pattern: /(^|[^"{\\$])#.*/,
			lookbehind: true
		},
		'function-name': [
			// a) function foo {
			// b) foo() {
			// c) function foo() {
			// but not “foo {”
			{
				// a) and c)
				pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
				lookbehind: true,
				alias: 'function'
			},
			{
				// b)
				pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
				alias: 'function'
			}
		],
		// Highlight variable names as variables in for and select beginnings.
		'for-or-select': {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: 'variable',
			lookbehind: true
		},
		// Highlight variable names as variables in the left-hand part
		// of assignments (“=” and “+=”).
		'assign-left': {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
			inside: {
				'environment': {
					pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
					lookbehind: true,
					alias: 'constant'
				}
			},
			alias: 'variable',
			lookbehind: true
		},
		// Highlight parameter names as variables
		'parameter': {
			pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
			alias: 'variable',
			lookbehind: true
		},
		'string': [
			// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
			{
				pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			// Here-document with quotes around the tag
			// → No expansion (so no “inside”).
			{
				pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
				lookbehind: true,
				greedy: true,
				inside: {
					'bash': commandAfterHeredoc
				}
			},
			// “Normal” string
			{
				// https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
				pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			{
				// https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
				pattern: /(^|[^$\\])'[^']*'/,
				lookbehind: true,
				greedy: true
			},
			{
				// https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
				pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
				greedy: true,
				inside: {
					'entity': insideString.entity
				}
			}
		],
		'environment': {
			pattern: RegExp('\\$?' + envVars),
			alias: 'constant'
		},
		'variable': insideString.variable,
		'function': {
			pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		'keyword': {
			pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		// https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
		'builtin': {
			pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
			lookbehind: true,
			// Alias added to make those easier to distinguish from strings.
			alias: 'class-name'
		},
		'boolean': {
			pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		'file-descriptor': {
			pattern: /\B&\d\b/,
			alias: 'important'
		},
		'operator': {
			// Lots of redirections here, but not just that.
			pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
			inside: {
				'file-descriptor': {
					pattern: /^\d/,
					alias: 'important'
				}
			}
		},
		'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		'number': {
			pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
			lookbehind: true
		}
	};

	commandAfterHeredoc.inside = Prism.languages.bash;

	/* Patterns in command substitution. */
	var toBeCopied = [
		'comment',
		'function-name',
		'for-or-select',
		'assign-left',
		'parameter',
		'string',
		'environment',
		'function',
		'keyword',
		'builtin',
		'boolean',
		'file-descriptor',
		'operator',
		'punctuation',
		'number'
	];
	var inside = insideString.variable[1].inside;
	for (var i = 0; i < toBeCopied.length; i++) {
		inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
	}

	Prism.languages.sh = Prism.languages.bash;
	Prism.languages.shell = Prism.languages.bash;
}(Prism));


/***/ }),

/***/ 16:
/***/ (() => {

(function (Prism) {

	/**
	 * Replaces all placeholders "<<n>>" of given pattern with the n-th replacement (zero based).
	 *
	 * Note: This is a simple text based replacement. Be careful when using backreferences!
	 *
	 * @param {string} pattern the given pattern.
	 * @param {string[]} replacements a list of replacement which can be inserted into the given pattern.
	 * @returns {string} the pattern with all placeholders replaced with their corresponding replacements.
	 * @example replace(/a<<0>>a/.source, [/b+/.source]) === /a(?:b+)a/.source
	 */
	function replace(pattern, replacements) {
		return pattern.replace(/<<(\d+)>>/g, function (m, index) {
			return '(?:' + replacements[+index] + ')';
		});
	}
	/**
	 * @param {string} pattern
	 * @param {string[]} replacements
	 * @param {string} [flags]
	 * @returns {RegExp}
	 */
	function re(pattern, replacements, flags) {
		return RegExp(replace(pattern, replacements), flags || '');
	}

	/**
	 * Creates a nested pattern where all occurrences of the string `<<self>>` are replaced with the pattern itself.
	 *
	 * @param {string} pattern
	 * @param {number} depthLog2
	 * @returns {string}
	 */
	function nested(pattern, depthLog2) {
		for (var i = 0; i < depthLog2; i++) {
			pattern = pattern.replace(/<<self>>/g, function () { return '(?:' + pattern + ')'; });
		}
		return pattern.replace(/<<self>>/g, '[^\\s\\S]');
	}

	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/
	var keywordKinds = {
		// keywords which represent a return or variable type
		type: 'bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void',
		// keywords which are used to declare a type
		typeDeclaration: 'class enum interface record struct',
		// contextual keywords
		// ("var" and "dynamic" are missing because they are used like types)
		contextual: 'add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)',
		// all other keywords
		other: 'abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield'
	};

	// keywords
	function keywordsToPattern(words) {
		return '\\b(?:' + words.trim().replace(/ /g, '|') + ')\\b';
	}
	var typeDeclarationKeywords = keywordsToPattern(keywordKinds.typeDeclaration);
	var keywords = RegExp(keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.typeDeclaration + ' ' + keywordKinds.contextual + ' ' + keywordKinds.other));
	var nonTypeKeywords = keywordsToPattern(keywordKinds.typeDeclaration + ' ' + keywordKinds.contextual + ' ' + keywordKinds.other);
	var nonContextualKeywords = keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.typeDeclaration + ' ' + keywordKinds.other);

	// types
	var generic = nested(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2); // the idea behind the other forbidden characters is to prevent false positives. Same for tupleElement.
	var nestedRound = nested(/\((?:[^()]|<<self>>)*\)/.source, 2);
	var name = /@?\b[A-Za-z_]\w*\b/.source;
	var genericName = replace(/<<0>>(?:\s*<<1>>)?/.source, [name, generic]);
	var identifier = replace(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [nonTypeKeywords, genericName]);
	var array = /\[\s*(?:,\s*)*\]/.source;
	var typeExpressionWithoutTuple = replace(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [identifier, array]);
	var tupleElement = replace(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [generic, nestedRound, array]);
	var tuple = replace(/\(<<0>>+(?:,<<0>>+)+\)/.source, [tupleElement]);
	var typeExpression = replace(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [tuple, identifier, array]);

	var typeInside = {
		'keyword': keywords,
		'punctuation': /[<>()?,.:[\]]/
	};

	// strings & characters
	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#character-literals
	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#string-literals
	var character = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source; // simplified pattern
	var regularString = /"(?:\\.|[^\\"\r\n])*"/.source;
	var verbatimString = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;


	Prism.languages.csharp = Prism.languages.extend('clike', {
		'string': [
			{
				pattern: re(/(^|[^$\\])<<0>>/.source, [verbatimString]),
				lookbehind: true,
				greedy: true
			},
			{
				pattern: re(/(^|[^@$\\])<<0>>/.source, [regularString]),
				lookbehind: true,
				greedy: true
			}
		],
		'class-name': [
			{
				// Using static
				// using static System.Math;
				pattern: re(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [identifier]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Using alias (type)
				// using Project = PC.MyCompany.Project;
				pattern: re(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [name, typeExpression]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Using alias (alias)
				// using Project = PC.MyCompany.Project;
				pattern: re(/(\busing\s+)<<0>>(?=\s*=)/.source, [name]),
				lookbehind: true
			},
			{
				// Type declarations
				// class Foo<A, B>
				// interface Foo<out A, B>
				pattern: re(/(\b<<0>>\s+)<<1>>/.source, [typeDeclarationKeywords, genericName]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Single catch exception declaration
				// catch(Foo)
				// (things like catch(Foo e) is covered by variable declaration)
				pattern: re(/(\bcatch\s*\(\s*)<<0>>/.source, [identifier]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Name of the type parameter of generic constraints
				// where Foo : class
				pattern: re(/(\bwhere\s+)<<0>>/.source, [name]),
				lookbehind: true
			},
			{
				// Casts and checks via as and is.
				// as Foo<A>, is Bar<B>
				// (things like if(a is Foo b) is covered by variable declaration)
				pattern: re(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [typeExpressionWithoutTuple]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Variable, field and parameter declaration
				// (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
				pattern: re(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [typeExpression, nonContextualKeywords, name]),
				inside: typeInside
			}
		],
		'keyword': keywords,
		// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
		'number': /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
		'operator': />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
		'punctuation': /\?\.?|::|[{}[\];(),.:]/
	});

	Prism.languages.insertBefore('csharp', 'number', {
		'range': {
			pattern: /\.\./,
			alias: 'operator'
		}
	});

	Prism.languages.insertBefore('csharp', 'punctuation', {
		'named-parameter': {
			pattern: re(/([(,]\s*)<<0>>(?=\s*:)/.source, [name]),
			lookbehind: true,
			alias: 'punctuation'
		}
	});

	Prism.languages.insertBefore('csharp', 'class-name', {
		'namespace': {
			// namespace Foo.Bar {}
			// using Foo.Bar;
			pattern: re(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [name]),
			lookbehind: true,
			inside: {
				'punctuation': /\./
			}
		},
		'type-expression': {
			// default(Foo), typeof(Foo<Bar>), sizeof(int)
			pattern: re(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [nestedRound]),
			lookbehind: true,
			alias: 'class-name',
			inside: typeInside
		},
		'return-type': {
			// Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
			// int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
			// int Foo => 0; int Foo { get; set } = 0;
			pattern: re(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [typeExpression, identifier]),
			inside: typeInside,
			alias: 'class-name'
		},
		'constructor-invocation': {
			// new List<Foo<Bar[]>> { }
			pattern: re(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [typeExpression]),
			lookbehind: true,
			inside: typeInside,
			alias: 'class-name'
		},
		/*'explicit-implementation': {
			// int IFoo<Foo>.Bar => 0; void IFoo<Foo<Foo>>.Foo<T>();
			pattern: replace(/\b<<0>>(?=\.<<1>>)/, className, methodOrPropertyDeclaration),
			inside: classNameInside,
			alias: 'class-name'
		},*/
		'generic-method': {
			// foo<Bar>()
			pattern: re(/<<0>>\s*<<1>>(?=\s*\()/.source, [name, generic]),
			inside: {
				'function': re(/^<<0>>/.source, [name]),
				'generic': {
					pattern: RegExp(generic),
					alias: 'class-name',
					inside: typeInside
				}
			}
		},
		'type-list': {
			// The list of types inherited or of generic constraints
			// class Foo<F> : Bar, IList<FooBar>
			// where F : Bar, IList<int>
			pattern: re(
				/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
				[typeDeclarationKeywords, genericName, name, typeExpression, keywords.source, nestedRound, /\bnew\s*\(\s*\)/.source]
			),
			lookbehind: true,
			inside: {
				'record-arguments': {
					pattern: re(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [genericName, nestedRound]),
					lookbehind: true,
					greedy: true,
					inside: Prism.languages.csharp
				},
				'keyword': keywords,
				'class-name': {
					pattern: RegExp(typeExpression),
					greedy: true,
					inside: typeInside
				},
				'punctuation': /[,()]/
			}
		},
		'preprocessor': {
			pattern: /(^[\t ]*)#.*/m,
			lookbehind: true,
			alias: 'property',
			inside: {
				// highlight preprocessor directives as keywords
				'directive': {
					pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
					lookbehind: true,
					alias: 'keyword'
				}
			}
		}
	});

	// attributes
	var regularStringOrCharacter = regularString + '|' + character;
	var regularStringCharacterOrComment = replace(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [regularStringOrCharacter]);
	var roundExpression = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);

	// https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/#attribute-targets
	var attrTarget = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source;
	var attr = replace(/<<0>>(?:\s*\(<<1>>*\))?/.source, [identifier, roundExpression]);

	Prism.languages.insertBefore('csharp', 'class-name', {
		'attribute': {
			// Attributes
			// [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
			pattern: re(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [attrTarget, attr]),
			lookbehind: true,
			greedy: true,
			inside: {
				'target': {
					pattern: re(/^<<0>>(?=\s*:)/.source, [attrTarget]),
					alias: 'keyword'
				},
				'attribute-arguments': {
					pattern: re(/\(<<0>>*\)/.source, [roundExpression]),
					inside: Prism.languages.csharp
				},
				'class-name': {
					pattern: RegExp(identifier),
					inside: {
						'punctuation': /\./
					}
				},
				'punctuation': /[:,]/
			}
		}
	});


	// string interpolation
	var formatString = /:[^}\r\n]+/.source;
	// multi line
	var mInterpolationRound = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);
	var mInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [mInterpolationRound, formatString]);
	// single line
	var sInterpolationRound = nested(replace(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [regularStringOrCharacter]), 2);
	var sInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [sInterpolationRound, formatString]);

	function createInterpolationInside(interpolation, interpolationRound) {
		return {
			'interpolation': {
				pattern: re(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [interpolation]),
				lookbehind: true,
				inside: {
					'format-string': {
						pattern: re(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [interpolationRound, formatString]),
						lookbehind: true,
						inside: {
							'punctuation': /^:/
						}
					},
					'punctuation': /^\{|\}$/,
					'expression': {
						pattern: /[\s\S]+/,
						alias: 'language-csharp',
						inside: Prism.languages.csharp
					}
				}
			},
			'string': /[\s\S]+/
		};
	}

	Prism.languages.insertBefore('csharp', 'string', {
		'interpolation-string': [
			{
				pattern: re(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [mInterpolation]),
				lookbehind: true,
				greedy: true,
				inside: createInterpolationInside(mInterpolation, mInterpolationRound),
			},
			{
				pattern: re(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [sInterpolation]),
				lookbehind: true,
				greedy: true,
				inside: createInterpolationInside(sInterpolation, sInterpolationRound),
			}
		],
		'char': {
			pattern: RegExp(character),
			greedy: true
		}
	});

	Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp;

}(Prism));


/***/ }),

/***/ 251:
/***/ (() => {

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));


/***/ }),

/***/ 46:
/***/ (() => {

Prism.languages.go = Prism.languages.extend('clike', {
	'string': {
		pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
		lookbehind: true,
		greedy: true
	},
	'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
	'boolean': /\b(?:_|false|iota|nil|true)\b/,
	'number': [
		// binary and octal integers
		/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
		// hexadecimal integers and floats
		/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
		// decimal integers and floats
		/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
	],
	'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
	'builtin': /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});

Prism.languages.insertBefore('go', 'string', {
	'char': {
		pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
		greedy: true
	}
});

delete Prism.languages.go['class-name'];


/***/ }),

/***/ 57:
/***/ (() => {

(function (Prism) {

	/**
	 * @param {string} name
	 * @returns {RegExp}
	 */
	function headerValueOf(name) {
		return RegExp('(^(?:' + name + '):[ \t]*(?![ \t]))[^]+', 'i');
	}

	Prism.languages.http = {
		'request-line': {
			pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
			inside: {
				// HTTP Method
				'method': {
					pattern: /^[A-Z]+\b/,
					alias: 'property'
				},
				// Request Target e.g. http://example.com, /path/to/file
				'request-target': {
					pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
					lookbehind: true,
					alias: 'url',
					inside: Prism.languages.uri
				},
				// HTTP Version
				'http-version': {
					pattern: /^(\s)HTTP\/[\d.]+/,
					lookbehind: true,
					alias: 'property'
				},
			}
		},
		'response-status': {
			pattern: /^HTTP\/[\d.]+ \d+ .+/m,
			inside: {
				// HTTP Version
				'http-version': {
					pattern: /^HTTP\/[\d.]+/,
					alias: 'property'
				},
				// Status Code
				'status-code': {
					pattern: /^(\s)\d+(?=\s)/,
					lookbehind: true,
					alias: 'number'
				},
				// Reason Phrase
				'reason-phrase': {
					pattern: /^(\s).+/,
					lookbehind: true,
					alias: 'string'
				}
			}
		},
		'header': {
			pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
			inside: {
				'header-value': [
					{
						pattern: headerValueOf(/Content-Security-Policy/.source),
						lookbehind: true,
						alias: ['csp', 'languages-csp'],
						inside: Prism.languages.csp
					},
					{
						pattern: headerValueOf(/Public-Key-Pins(?:-Report-Only)?/.source),
						lookbehind: true,
						alias: ['hpkp', 'languages-hpkp'],
						inside: Prism.languages.hpkp
					},
					{
						pattern: headerValueOf(/Strict-Transport-Security/.source),
						lookbehind: true,
						alias: ['hsts', 'languages-hsts'],
						inside: Prism.languages.hsts
					},
					{
						pattern: headerValueOf(/[^:]+/.source),
						lookbehind: true
					}
				],
				'header-name': {
					pattern: /^[^:]+/,
					alias: 'keyword'
				},
				'punctuation': /^:/
			}
		}
	};

	// Create a mapping of Content-Type headers to language definitions
	var langs = Prism.languages;
	var httpLanguages = {
		'application/javascript': langs.javascript,
		'application/json': langs.json || langs.javascript,
		'application/xml': langs.xml,
		'text/xml': langs.xml,
		'text/html': langs.html,
		'text/css': langs.css,
		'text/plain': langs.plain
	};

	// Declare which types can also be suffixes
	var suffixTypes = {
		'application/json': true,
		'application/xml': true
	};

	/**
	 * Returns a pattern for the given content type which matches it and any type which has it as a suffix.
	 *
	 * @param {string} contentType
	 * @returns {string}
	 */
	function getSuffixPattern(contentType) {
		var suffix = contentType.replace(/^[a-z]+\//, '');
		var suffixPattern = '\\w+/(?:[\\w.-]+\\+)+' + suffix + '(?![+\\w.-])';
		return '(?:' + contentType + '|' + suffixPattern + ')';
	}

	// Insert each content type parser that has its associated language
	// currently loaded.
	var options;
	for (var contentType in httpLanguages) {
		if (httpLanguages[contentType]) {
			options = options || {};

			var pattern = suffixTypes[contentType] ? getSuffixPattern(contentType) : contentType;
			options[contentType.replace(/\//g, '-')] = {
				pattern: RegExp(
					'(' + /content-type:\s*/.source + pattern + /(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source + ')' +
					// This is a little interesting:
					// The HTTP format spec required 1 empty line before the body to make everything unambiguous.
					// However, when writing code by hand (e.g. to display on a website) people can forget about this,
					// so we want to be liberal here. We will allow the empty line to be omitted if the first line of
					// the body does not start with a [\w-] character (as headers do).
					/[^ \t\w-][\s\S]*/.source,
					'i'
				),
				lookbehind: true,
				inside: httpLanguages[contentType]
			};
		}
	}
	if (options) {
		Prism.languages.insertBefore('http', 'header', options);
	}

}(Prism));


/***/ }),

/***/ 503:
/***/ (() => {

(function (Prism) {

	var keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;

	// full package (optional) + parent classes (optional)
	var classNamePrefix = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;

	// based on the java naming conventions
	var className = {
		pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
		lookbehind: true,
		inside: {
			'namespace': {
				pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
				inside: {
					'punctuation': /\./
				}
			},
			'punctuation': /\./
		}
	};

	Prism.languages.java = Prism.languages.extend('clike', {
		'string': {
			pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
			lookbehind: true,
			greedy: true
		},
		'class-name': [
			className,
			{
				// variables, parameters, and constructor references
				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
				pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
				lookbehind: true,
				inside: className.inside
			},
			{
				// class names based on keyword
				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
				pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + classNamePrefix + /[A-Z]\w*\b/.source),
				lookbehind: true,
				inside: className.inside
			}
		],
		'keyword': keywords,
		'function': [
			Prism.languages.clike.function,
			{
				pattern: /(::\s*)[a-z_]\w*/,
				lookbehind: true
			}
		],
		'number': /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
		'operator': {
			pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
			lookbehind: true
		},
		'constant': /\b[A-Z][A-Z_\d]+\b/
	});

	Prism.languages.insertBefore('java', 'string', {
		'triple-quoted-string': {
			// http://openjdk.java.net/jeps/355#Description
			pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
			greedy: true,
			alias: 'string'
		},
		'char': {
			pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
			greedy: true
		}
	});

	Prism.languages.insertBefore('java', 'class-name', {
		'annotation': {
			pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
			lookbehind: true,
			alias: 'punctuation'
		},
		'generics': {
			pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
			inside: {
				'class-name': className,
				'keyword': keywords,
				'punctuation': /[<>(),.:]/,
				'operator': /[?&|]/
			}
		},
		'import': [
			{
				pattern: RegExp(/(\bimport\s+)/.source + classNamePrefix + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
				lookbehind: true,
				inside: {
					'namespace': className.inside.namespace,
					'punctuation': /\./,
					'operator': /\*/,
					'class-name': /\w+/
				}
			},
			{
				pattern: RegExp(/(\bimport\s+static\s+)/.source + classNamePrefix + /(?:\w+|\*)(?=\s*;)/.source),
				lookbehind: true,
				alias: 'static',
				inside: {
					'namespace': className.inside.namespace,
					'static': /\b\w+$/,
					'punctuation': /\./,
					'operator': /\*/,
					'class-name': /\w+/
				}
			}
		],
		'namespace': {
			pattern: RegExp(
				/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/
					.source.replace(/<keyword>/g, function () { return keywords.source; })),
			lookbehind: true,
			inside: {
				'punctuation': /\./,
			}
		}
	});
}(Prism));


/***/ }),

/***/ 277:
/***/ (() => {

// https://www.json.org/json-en.html
Prism.languages.json = {
	'property': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'string': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'comment': {
		pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: true
	},
	'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	'punctuation': /[{}[\],]/,
	'operator': /:/,
	'boolean': /\b(?:false|true)\b/,
	'null': {
		pattern: /\bnull\b/,
		alias: 'keyword'
	}
};

Prism.languages.webmanifest = Prism.languages.json;


/***/ }),

/***/ 366:
/***/ (() => {

Prism.languages.python = {
	'comment': {
		pattern: /(^|[^\\])#.*/,
		lookbehind: true,
		greedy: true
	},
	'string-interpolation': {
		pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
		greedy: true,
		inside: {
			'interpolation': {
				// "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
				pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
				lookbehind: true,
				inside: {
					'format-spec': {
						pattern: /(:)[^:(){}]+(?=\}$)/,
						lookbehind: true
					},
					'conversion-option': {
						pattern: /![sra](?=[:}]$)/,
						alias: 'punctuation'
					},
					rest: null
				}
			},
			'string': /[\s\S]+/
		}
	},
	'triple-quoted-string': {
		pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
		greedy: true,
		alias: 'string'
	},
	'string': {
		pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
		greedy: true
	},
	'function': {
		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
		lookbehind: true
	},
	'class-name': {
		pattern: /(\bclass\s+)\w+/i,
		lookbehind: true
	},
	'decorator': {
		pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
		lookbehind: true,
		alias: ['annotation', 'punctuation'],
		inside: {
			'punctuation': /\./
		}
	},
	'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
	'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
	'boolean': /\b(?:False|None|True)\b/,
	'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
	'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
	'punctuation': /[{}[\];(),.:]/
};

Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;

Prism.languages.py = Prism.languages.python;


/***/ }),

/***/ 358:
/***/ (() => {

(function (Prism) {

	// https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
	// https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
	var anchorOrAlias = /[*&][^\s[\]{},]+/;
	// https://yaml.org/spec/1.2/spec.html#c-ns-tag-property
	var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
	// https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)
	var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|'
		+ anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)';
	// https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
	// This is a simplified version that doesn't support "#" and multiline keys
	// All these long scarry character classes are simplified versions of YAML's characters
	var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source
		.replace(/<PLAIN>/g, function () { return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source; });
	var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

	/**
	 *
	 * @param {string} value
	 * @param {string} [flags]
	 * @returns {RegExp}
	 */
	function createValuePattern(value, flags) {
		flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag
		var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
			.replace(/<<prop>>/g, function () { return properties; }).replace(/<<value>>/g, function () { return value; });
		return RegExp(pattern, flags);
	}

	Prism.languages.yaml = {
		'scalar': {
			pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source
				.replace(/<<prop>>/g, function () { return properties; })),
			lookbehind: true,
			alias: 'string'
		},
		'comment': /#.*/,
		'key': {
			pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
				.replace(/<<prop>>/g, function () { return properties; })
				.replace(/<<key>>/g, function () { return '(?:' + plainKey + '|' + string + ')'; })),
			lookbehind: true,
			greedy: true,
			alias: 'atrule'
		},
		'directive': {
			pattern: /(^[ \t]*)%.+/m,
			lookbehind: true,
			alias: 'important'
		},
		'datetime': {
			pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
			lookbehind: true,
			alias: 'number'
		},
		'boolean': {
			pattern: createValuePattern(/false|true/.source, 'i'),
			lookbehind: true,
			alias: 'important'
		},
		'null': {
			pattern: createValuePattern(/null|~/.source, 'i'),
			lookbehind: true,
			alias: 'important'
		},
		'string': {
			pattern: createValuePattern(string),
			lookbehind: true,
			greedy: true
		},
		'number': {
			pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
			lookbehind: true
		},
		'tag': tag,
		'important': anchorOrAlias,
		'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
	};

	Prism.languages.yml = Prism.languages.yaml;

}(Prism));


/***/ }),

/***/ 660:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		/**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all `language-xxxx` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new `language-xxxx` class
				// (using `classList` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			_.util.setLanguage(element, language);

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				_.util.setLanguage(parent, language);
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			if (!env.grammar) {
				throw new Error('The language "' + env.language + '" has no grammar.');
			}
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
	__webpack_require__.g.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: true
	},
	'prolog': {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: true
	},
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/i,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: true
	},
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	'boolean': /\b(?:false|true)\b/,
	'function': /\b\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': {
		pattern: RegExp(
			/(^|[^\w$])/.source +
			'(?:' +
			(
				// constant
				/NaN|Infinity/.source +
				'|' +
				// binary integer
				/0[bB][01]+(?:_[01]+)*n?/.source +
				'|' +
				// octal integer
				/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
				'|' +
				// hexadecimal integer
				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
				'|' +
				// decimal bigint
				/\d+(?:_\d+)*n/.source +
				'|' +
				// decimal number (integer or float) but no bigint
				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
			) +
			')' +
			/(?![\w$])/.source
		),
		lookbehind: true
	},
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: RegExp(
			// lookbehind
			// eslint-disable-next-line regexp/no-dupe-characters-character-class
			/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
			// Regex pattern:
			// There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
			// classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
			// with the only syntax, so we have to define 2 different regex patterns.
			/\//.source +
			'(?:' +
			/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
			'|' +
			// `v` flag syntax. This supports 3 levels of nested character classes.
			/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
			')' +
			// lookahead
			/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
		),
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	},
	'string-property': {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	}
});

Prism.languages.insertBefore('javascript', 'operator', {
	'literal-property': {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: true,
		alias: 'property'
	},
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	var LOADING_MESSAGE = 'Loading…';
	var FAILURE_MESSAGE = function (status, message) {
		return '✖ Error ' + status + ' while fetching file: ' + message;
	};
	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

	var EXTENSIONS = {
		'js': 'javascript',
		'py': 'python',
		'rb': 'ruby',
		'ps1': 'powershell',
		'psm1': 'powershell',
		'sh': 'bash',
		'bat': 'batch',
		'h': 'c',
		'tex': 'latex'
	};

	var STATUS_ATTR = 'data-src-status';
	var STATUS_LOADING = 'loading';
	var STATUS_LOADED = 'loaded';
	var STATUS_FAILED = 'failed';

	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

	/**
	 * Loads the given file.
	 *
	 * @param {string} src The URL or path of the source file to load.
	 * @param {(result: string) => void} success
	 * @param {(reason: string) => void} error
	 */
	function loadFile(src, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', src, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status < 400 && xhr.responseText) {
					success(xhr.responseText);
				} else {
					if (xhr.status >= 400) {
						error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
					} else {
						error(FAILURE_EMPTY_MESSAGE);
					}
				}
			}
		};
		xhr.send(null);
	}

	/**
	 * Parses the given range.
	 *
	 * This returns a range with inclusive ends.
	 *
	 * @param {string | null | undefined} range
	 * @returns {[number, number | undefined] | undefined}
	 */
	function parseRange(range) {
		var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
		if (m) {
			var start = Number(m[1]);
			var comma = m[2];
			var end = m[3];

			if (!comma) {
				return [start, start];
			}
			if (!end) {
				return [start, undefined];
			}
			return [start, Number(end)];
		}
		return undefined;
	}

	Prism.hooks.add('before-highlightall', function (env) {
		env.selector += ', ' + SELECTOR;
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = /** @type {HTMLPreElement} */ (env.element);
		if (pre.matches(SELECTOR)) {
			env.code = ''; // fast-path the whole thing and go to complete

			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

			// add code element with loading message
			var code = pre.appendChild(document.createElement('CODE'));
			code.textContent = LOADING_MESSAGE;

			var src = pre.getAttribute('data-src');

			var language = env.language;
			if (language === 'none') {
				// the language might be 'none' because there is no language set;
				// in this case, we want to use the extension as the language
				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
				language = EXTENSIONS[extension] || extension;
			}

			// set language classes
			Prism.util.setLanguage(code, language);
			Prism.util.setLanguage(pre, language);

			// preload the language
			var autoloader = Prism.plugins.autoloader;
			if (autoloader) {
				autoloader.loadLanguages(language);
			}

			// load file
			loadFile(
				src,
				function (text) {
					// mark as loaded
					pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

					// handle data-range
					var range = parseRange(pre.getAttribute('data-range'));
					if (range) {
						var lines = text.split(/\r\n?|\n/g);

						// the range is one-based and inclusive on both ends
						var start = range[0];
						var end = range[1] == null ? lines.length : range[1];

						if (start < 0) { start += lines.length; }
						start = Math.max(0, Math.min(start - 1, lines.length));
						if (end < 0) { end += lines.length; }
						end = Math.max(0, Math.min(end, lines.length));

						text = lines.slice(start, end).join('\n');

						// add data-start for line numbers
						if (!pre.hasAttribute('data-start')) {
							pre.setAttribute('data-start', String(start + 1));
						}
					}

					// highlight code
					code.textContent = text;
					Prism.highlightElement(code);
				},
				function (error) {
					// mark as failed
					pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

					code.textContent = error;
				}
			);
		}
	});

	Prism.plugins.fileHighlight = {
		/**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */
		highlight: function highlight(container) {
			var elements = (container || document).querySelectorAll(SELECTOR);

			for (var i = 0, element; (element = elements[i++]);) {
				Prism.highlightElement(element);
			}
		}
	};

	var logged = false;
	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
	Prism.fileHighlight = function () {
		if (!logged) {
			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
			logged = true;
		}
		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
	};

}());


/***/ }),

/***/ 464:
/***/ ((module) => {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),

/***/ 131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var repeat = __webpack_require__(464);

var splitOnTags = function splitOnTags(str) {
  return str.split(/(<\/?[^>]+>)/g).filter(function (line) {
    return line.trim() !== '';
  });
};
var isTag = function isTag(str) {
  return (/<[^>!]+>/.test(str)
  );
};
var isClosingTag = function isClosingTag(str) {
  return (/<\/+[^>]+>/.test(str)
  );
};
var isSelfClosingTag = function isSelfClosingTag(str) {
  return (/<[^>]+\/>/.test(str)
  );
};
var isOpeningTag = function isOpeningTag(str) {
  return isTag(str) && !isClosingTag(str) && !isSelfClosingTag(str);
};

module.exports = function (xml) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var indentor = config.indentor,
      textNodesOnSameLine = config.textNodesOnSameLine;

  var depth = 0;
  var indicesToRemove = [];
  indentor = indentor || '    ';

  var rawResult = lexer(xml).map(function (element, i, arr) {
    var value = element.value,
        type = element.type;

    if (type === 'ClosingTag') {
      depth--;
    }

    var indentation = repeat(indentor, depth);
    var line = indentation + value;

    if (type === 'OpeningTag') {
      depth++;
    }

    if (textNodesOnSameLine) {
      // Lookbehind for [OpeningTag][Text][ClosingTag]
      var oneBefore = arr[i - 1];
      var twoBefore = arr[i - 2];

      if (type === "ClosingTag" && oneBefore.type === "Text" && twoBefore.type === "OpeningTag") {
        // collapse into a single line
        line = '' + indentation + twoBefore.value + oneBefore.value + value;
        indicesToRemove.push(i - 2, i - 1);
      }
    }

    return line;
  });

  indicesToRemove.forEach(function (idx) {
    return rawResult[idx] = null;
  });

  return rawResult.filter(function (val) {
    return !!val;
  }).join('\n');
};

function lexer(xmlStr) {
  var values = splitOnTags(xmlStr);
  return values.map(function (value) {
    return {
      value: value,
      type: getType(value)
    };
  });
}

// Helpers

function getType(str) {
  if (isClosingTag(str)) {
    return 'ClosingTag';
  }

  if (isOpeningTag(str)) {
    return 'OpeningTag';
  }

  if (isSelfClosingTag(str)) {
    return 'SelfClosingTag';
  }

  return 'Text';
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e420045cc044bf5f5f0f")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "rapidoc:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdaterapidoc"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(601);
/******/ 	
/******/ })()
;