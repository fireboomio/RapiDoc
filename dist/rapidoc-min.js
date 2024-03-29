/*! RapiDoc 9.3.5-beta | Author - Mrinmoy Majumdar | License information can be found in rapidoc-min.js.LICENSE.txt  */
(()=>{var e,t,r={601:(e,t,r)=>{"use strict";const a=window,n=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(t,e))}return e}toString(){return this.cssText}}const l=e=>new o("string"==typeof e?e:e+"",void 0,i),c=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[a+1]),e[0]);return new o(r,e,i)},d=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return l(t)})(e):e;var p;const h=window,u=h.trustedTypes,m=u?u.emptyScript:"",f=h.reactiveElementPolyfillSupport,g={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},v=(e,t)=>t!==e&&(t==t||e==e),b={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:v},y="finalized";class x extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const a=this._$Ep(r,t);void 0!==a&&(this._$Ev.set(a,r),e.push(a))})),e}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,a=this.getPropertyDescriptor(e,r,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(a){const n=this[e];this[t]=a,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||b}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Ep(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{n?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style"),n=a.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=t.cssText,e.appendChild(r)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=b){var a;const n=this.constructor._$Ep(e,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==(null===(a=r.converter)||void 0===a?void 0:a.toAttribute)?r.converter:g).toAttribute(t,r.type);this._$El=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$El=null}}_$AK(e,t){var r;const a=this.constructor,n=a._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=a.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(r=e.converter)||void 0===r?void 0:r.fromAttribute)?e.converter:g;this._$El=n,this[n]=i.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,r){let a=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||v)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var w;x[y]=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:x}),(null!==(p=h.reactiveElementVersions)&&void 0!==p?p:h.reactiveElementVersions=[]).push("1.6.2");const $=window,k=$.trustedTypes,S=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,T="?"+E,C=`<${T}>`,O=document,I=()=>O.createComment(""),_=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,L=e=>R(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),B="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,j=/>/g,D=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,P=/"/g,N=/^(?:script|style|textarea|title)$/i,q=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),H=q(1),M=(q(2),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),V=new WeakMap,K=O.createTreeWalker(O,129,null,!1),G=(e,t)=>{const r=e.length-1,a=[];let n,i=2===t?"<svg>":"",s=z;for(let t=0;t<r;t++){const r=e[t];let o,l,c=-1,d=0;for(;d<r.length&&(s.lastIndex=d,l=s.exec(r),null!==l);)d=s.lastIndex,s===z?"!--"===l[1]?s=U:void 0!==l[1]?s=j:void 0!==l[2]?(N.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=D):void 0!==l[3]&&(s=D):s===D?">"===l[0]?(s=null!=n?n:z,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?D:'"'===l[3]?P:F):s===P||s===F?s=D:s===U||s===j?s=z:(s=D,n=void 0);const p=s===D&&e[t+1].startsWith("/>")?" ":"";i+=s===z?r+C:c>=0?(a.push(o),r.slice(0,c)+A+r.slice(c)+E+p):r+E+(-2===c?(a.push(void 0),t):p)}const o=i+(e[r]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==S?S.createHTML(o):o,a]};class Z{constructor({strings:e,_$litType$:t},r){let a;this.parts=[];let n=0,i=0;const s=e.length-1,o=this.parts,[l,c]=G(e,t);if(this.el=Z.createElement(l,r),K.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(a=K.nextNode())&&o.length<s;){if(1===a.nodeType){if(a.hasAttributes()){const e=[];for(const t of a.getAttributeNames())if(t.endsWith(A)||t.startsWith(E)){const r=c[i++];if(e.push(t),void 0!==r){const e=a.getAttribute(r.toLowerCase()+A).split(E),t=/([.?@])?(.*)/.exec(r);o.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?ee:"?"===t[1]?re:"@"===t[1]?ae:Q})}else o.push({type:6,index:n})}for(const t of e)a.removeAttribute(t)}if(N.test(a.tagName)){const e=a.textContent.split(E),t=e.length-1;if(t>0){a.textContent=k?k.emptyScript:"";for(let r=0;r<t;r++)a.append(e[r],I()),K.nextNode(),o.push({type:2,index:++n});a.append(e[t],I())}}}else if(8===a.nodeType)if(a.data===T)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf(E,e+1));)o.push({type:7,index:n}),e+=E.length-1}n++}}static createElement(e,t){const r=O.createElement("template");return r.innerHTML=e,r}}function Y(e,t,r=e,a){var n,i,s,o;if(t===M)return t;let l=void 0!==a?null===(n=r._$Co)||void 0===n?void 0:n[a]:r._$Cl;const c=_(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,r,a)),void 0!==a?(null!==(s=(o=r)._$Co)&&void 0!==s?s:o._$Co=[])[a]=l:r._$Cl=l),void 0!==l&&(t=Y(e,l._$AS(e,t.values),l,a)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:a}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:O).importNode(r,!0);K.currentNode=n;let i=K.nextNode(),s=0,o=0,l=a[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new X(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new ne(i,this,e)),this._$AV.push(t),l=a[++o]}s!==(null==l?void 0:l.index)&&(i=K.nextNode(),s++)}return K.currentNode=O,n}v(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class X{constructor(e,t,r,a){var n;this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=a,this._$Cp=null===(n=null==a?void 0:a.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),_(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==M&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):L(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==W&&_(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:a}=e,n="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=Z.createElement(a.h,this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.v(r);else{const e=new J(n,this),t=e.u(this.options);e.v(r),this.$(t),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new Z(e)),t}T(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,a=0;for(const n of e)a===t.length?t.push(r=new X(this.k(I()),this.k(I()),this,this.options)):r=t[a],r._$AI(n),a++;a<t.length&&(this._$AR(r&&r._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Q{constructor(e,t,r,a,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=W}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,a){const n=this.strings;let i=!1;if(void 0===n)e=Y(this,e,t,0),i=!_(e)||e!==this._$AH&&e!==M,i&&(this._$AH=e);else{const a=e;let s,o;for(e=n[0],s=0;s<n.length-1;s++)o=Y(this,a[r+s],t,s),o===M&&(o=this._$AH[s]),i||(i=!_(o)||o!==this._$AH[s]),o===W?e=W:e!==W&&(e+=(null!=o?o:"")+n[s+1]),this._$AH[s]=o}i&&!a&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class ee extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}const te=k?k.emptyScript:"";class re extends Q{constructor(){super(...arguments),this.type=4}j(e){e&&e!==W?this.element.setAttribute(this.name,te):this.element.removeAttribute(this.name)}}class ae extends Q{constructor(e,t,r,a,n){super(e,t,r,a,n),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=Y(this,e,t,0))&&void 0!==r?r:W)===M)return;const a=this._$AH,n=e===W&&a!==W||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,i=e!==W&&(a===W||n);n&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const ie={O:A,P:E,A:T,C:1,M:G,L:J,D:L,R:Y,I:X,V:Q,H:re,N:ae,U:ee,F:ne},se=$.litHtmlPolyfillSupport;null==se||se(Z,X),(null!==(w=$.litHtmlVersions)&&void 0!==w?w:$.litHtmlVersions=[]).push("2.7.4");var oe,le;class ce extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{var a,n;const i=null!==(a=null==r?void 0:r.renderBefore)&&void 0!==a?a:t;let s=i._$litPart$;if(void 0===s){const e=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;i._$litPart$=s=new X(t.insertBefore(I(),e),e,void 0,null!=r?r:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return M}}ce.finalized=!0,ce._$litElement$=!0,null===(oe=globalThis.litElementHydrateSupport)||void 0===oe||oe.call(globalThis,{LitElement:ce});const de=globalThis.litElementPolyfillSupport;null==de||de({LitElement:ce});function pe(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}(null!==(le=globalThis.litElementVersions)&&void 0!==le?le:globalThis.litElementVersions=[]).push("3.3.2");let he={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};function ue(e){he=e}const me=/[&<>"']/,fe=new RegExp(me.source,"g"),ge=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ve=new RegExp(ge.source,"g"),be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ye=e=>be[e];function xe(e,t){if(t){if(me.test(e))return e.replace(fe,ye)}else if(ge.test(e))return e.replace(ve,ye);return e}const we=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function $e(e){return e.replace(we,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const ke=/(^|[^\[])\^/g;function Se(e,t){e="string"==typeof e?e:e.source,t=t||"";const r={replace:(t,a)=>(a=(a=a.source||a).replace(ke,"$1"),e=e.replace(t,a),r),getRegex:()=>new RegExp(e,t)};return r}const Ae=/[^\w:]/g,Ee=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Te(e,t,r){if(e){let e;try{e=decodeURIComponent($e(r)).replace(Ae,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!Ee.test(r)&&(r=function(e,t){Ce[" "+e]||(Oe.test(e)?Ce[" "+e]=e+"/":Ce[" "+e]=Be(e,"/",!0));e=Ce[" "+e];const r=-1===e.indexOf(":");return"//"===t.substring(0,2)?r?t:e.replace(Ie,"$1")+t:"/"===t.charAt(0)?r?t:e.replace(_e,"$1")+t:e+t}(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch(e){return null}return r}const Ce={},Oe=/^[^:]+:\/*[^/]*$/,Ie=/^([^:]+:)[\s\S]*$/,_e=/^([^:]+:\/*[^/]*)[\s\S]*$/;const Re={exec:function(){}};function Le(e,t){const r=e.replace(/\|/g,((e,t,r)=>{let a=!1,n=t;for(;--n>=0&&"\\"===r[n];)a=!a;return a?"|":" |"})),a=r.split(/ \|/);let n=0;if(a[0].trim()||a.shift(),a.length>0&&!a[a.length-1].trim()&&a.pop(),a.length>t)a.splice(t);else for(;a.length<t;)a.push("");for(;n<a.length;n++)a[n]=a[n].trim().replace(/\\\|/g,"|");return a}function Be(e,t,r){const a=e.length;if(0===a)return"";let n=0;for(;n<a;){const i=e.charAt(a-n-1);if(i!==t||r){if(i===t||!r)break;n++}else n++}return e.slice(0,a-n)}function ze(e,t,r,a){const n=t.href,i=t.title?xe(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){a.state.inLink=!0;const e={type:"link",raw:r,href:n,title:i,text:s,tokens:a.inlineTokens(s)};return a.state.inLink=!1,e}return{type:"image",raw:r,href:n,title:i,text:xe(s)}}class Ue{constructor(e){this.options=e||he}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:Be(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],r=function(e,t){const r=e.match(/^(\s+)(?:```)/);if(null===r)return t;const a=r[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[r]=t;return r.length>=a.length?e.slice(a.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=Be(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,""),r=this.lexer.state.top;this.lexer.state.top=!0;const a=this.lexer.blockTokens(e);return this.lexer.state.top=r,{type:"blockquote",raw:t[0],tokens:a,text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,a,n,i,s,o,l,c,d,p,h,u,m=t[1].trim();const f=m.length>1,g={type:"list",raw:"",ordered:f,start:f?+m.slice(0,-1):"",loose:!1,items:[]};m=f?`\\d{1,9}\\${m.slice(-1)}`:`\\${m}`,this.options.pedantic&&(m=f?m:"[*+-]");const v=new RegExp(`^( {0,3}${m})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(u=!1,t=v.exec(e))&&!this.rules.block.hr.test(e);){if(r=t[0],e=e.substring(r.length),c=t[2].split("\n",1)[0].replace(/^\t+/,(e=>" ".repeat(3*e.length))),d=e.split("\n",1)[0],this.options.pedantic?(i=2,h=c.trimLeft()):(i=t[2].search(/[^ ]/),i=i>4?1:i,h=c.slice(i),i+=t[1].length),o=!1,!c&&/^ *$/.test(d)&&(r+=d+"\n",e=e.substring(d.length+1),u=!0),!u){const t=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),a=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),n=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),s=new RegExp(`^ {0,${Math.min(3,i-1)}}#`);for(;e&&(p=e.split("\n",1)[0],d=p,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!n.test(d))&&!s.test(d)&&!t.test(d)&&!a.test(e);){if(d.search(/[^ ]/)>=i||!d.trim())h+="\n"+d.slice(i);else{if(o)break;if(c.search(/[^ ]/)>=4)break;if(n.test(c))break;if(s.test(c))break;if(a.test(c))break;h+="\n"+d}o||d.trim()||(o=!0),r+=p+"\n",e=e.substring(p.length+1),c=d.slice(i)}}g.loose||(l?g.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(h),a&&(n="[ ] "!==a[0],h=h.replace(/^\[[ xX]\] +/,""))),g.items.push({type:"list_item",raw:r,task:!!a,checked:n,loose:!1,text:h}),g.raw+=r}g.items[g.items.length-1].raw=r.trimRight(),g.items[g.items.length-1].text=h.trimRight(),g.raw=g.raw.trimRight();const b=g.items.length;for(s=0;s<b;s++)if(this.lexer.state.top=!1,g.items[s].tokens=this.lexer.blockTokens(g.items[s].text,[]),!g.loose){const e=g.items[s].tokens.filter((e=>"space"===e.type)),t=e.length>0&&e.some((e=>/\n.*\n/.test(e.raw)));g.loose=t}if(g.loose)for(s=0;s<b;s++)g.items[s].loose=!0;return g}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",block:!0,raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};if(this.options.sanitize){const r=this.options.sanitizer?this.options.sanitizer(t[0]):xe(t[0]);e.type="paragraph",e.text=r,e.tokens=this.lexer.inline(r)}return e}}def(e){const t=this.rules.block.def.exec(e);if(t){const e=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:r,title:a}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:Le(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let r,a,n,i,s=e.align.length;for(r=0;r<s;r++)/^ *-+: *$/.test(e.align[r])?e.align[r]="right":/^ *:-+: *$/.test(e.align[r])?e.align[r]="center":/^ *:-+ *$/.test(e.align[r])?e.align[r]="left":e.align[r]=null;for(s=e.rows.length,r=0;r<s;r++)e.rows[r]=Le(e.rows[r],e.header.length).map((e=>({text:e})));for(s=e.header.length,a=0;a<s;a++)e.header[a].tokens=this.lexer.inline(e.header[a].text);for(s=e.rows.length,a=0;a<s;a++)for(i=e.rows[a],n=0;n<i.length;n++)i[n].tokens=this.lexer.inline(i[n].text);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:xe(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):xe(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=Be(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const r=e.length;let a=0,n=0;for(;n<r;n++)if("\\"===e[n])n++;else if(e[n]===t[0])a++;else if(e[n]===t[1]&&(a--,a<0))return n;return-1}(t[2],"()");if(e>-1){const r=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],a="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);e&&(r=e[1],a=e[3])}else a=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(e)?r.slice(1):r.slice(1,-1)),ze(t,{href:r?r.replace(this.rules.inline._escapes,"$1"):r,title:a?a.replace(this.rules.inline._escapes,"$1"):a},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let e=(r[2]||r[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e){const e=r[0].charAt(0);return{type:"text",raw:e,text:e}}return ze(r,e,r[0],this.lexer)}}emStrong(e,t,r=""){let a=this.rules.inline.emStrong.lDelim.exec(e);if(!a)return;if(a[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(a[1]||a[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const r=a[0].length-1;let n,i,s=r,o=0;const l="*"===a[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+r);null!=(a=l.exec(t));){if(n=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!n)continue;if(i=n.length,a[3]||a[4]){s+=i;continue}if((a[5]||a[6])&&r%3&&!((r+i)%3)){o+=i;continue}if(s-=i,s>0)continue;i=Math.min(i,i+s+o);const t=e.slice(0,r+a.index+i+1);if(Math.min(r,i)%2){const e=t.slice(1,-1);return{type:"em",raw:t,text:e,tokens:this.lexer.inlineTokens(e)}}const l=t.slice(2,-2);return{type:"strong",raw:t,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const r=/[^ ]/.test(e),a=/^ /.test(e)&&/ $/.test(e);return r&&a&&(e=e.substring(1,e.length-1)),e=xe(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const r=this.rules.inline.autolink.exec(e);if(r){let e,a;return"@"===r[2]?(e=xe(this.options.mangle?t(r[1]):r[1]),a="mailto:"+e):(e=xe(r[1]),a=e),{type:"link",raw:r[0],text:e,href:a,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let e,a;if("@"===r[2])e=xe(this.options.mangle?t(r[0]):r[0]),a="mailto:"+e;else{let t;do{t=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0]}while(t!==r[0]);e=xe(r[0]),a="www."===r[1]?"http://"+r[0]:r[0]}return{type:"link",raw:r[0],text:e,href:a,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const r=this.rules.inline.text.exec(e);if(r){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):xe(r[0]):r[0]:xe(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}}const je={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Re,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};je.def=Se(je.def).replace("label",je._label).replace("title",je._title).getRegex(),je.bullet=/(?:[*+-]|\d{1,9}[.)])/,je.listItemStart=Se(/^( *)(bull) */).replace("bull",je.bullet).getRegex(),je.list=Se(je.list).replace(/bull/g,je.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+je.def.source+")").getRegex(),je._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",je._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,je.html=Se(je.html,"i").replace("comment",je._comment).replace("tag",je._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),je.lheading=Se(je.lheading).replace(/bull/g,je.bullet).getRegex(),je.paragraph=Se(je._paragraph).replace("hr",je.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",je._tag).getRegex(),je.blockquote=Se(je.blockquote).replace("paragraph",je.paragraph).getRegex(),je.normal={...je},je.gfm={...je.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},je.gfm.table=Se(je.gfm.table).replace("hr",je.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",je._tag).getRegex(),je.gfm.paragraph=Se(je._paragraph).replace("hr",je.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",je.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",je._tag).getRegex(),je.pedantic={...je.normal,html:Se("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",je._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Re,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Se(je.normal._paragraph).replace("hr",je.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",je.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const De={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Re,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Re,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};function Fe(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Pe(e){let t,r,a="";const n=e.length;for(t=0;t<n;t++)r=e.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),a+="&#"+r+";";return a}De._punctuation="\\p{P}$+<=>`^|~",De.punctuation=Se(De.punctuation,"u").replace(/punctuation/g,De._punctuation).getRegex(),De.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,De.anyPunctuation=/\\[punct]/g,De._escapes=/\\([punct])/g,De._comment=Se(je._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),De.emStrong.lDelim=Se(De.emStrong.lDelim,"u").replace(/punct/g,De._punctuation).getRegex(),De.emStrong.rDelimAst=Se(De.emStrong.rDelimAst,"gu").replace(/punct/g,De._punctuation).getRegex(),De.emStrong.rDelimUnd=Se(De.emStrong.rDelimUnd,"gu").replace(/punct/g,De._punctuation).getRegex(),De.anyPunctuation=Se(De.anyPunctuation,"gu").replace(/punct/g,De._punctuation).getRegex(),De._escapes=Se(De._escapes,"gu").replace(/punct/g,De._punctuation).getRegex(),De._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,De._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,De.autolink=Se(De.autolink).replace("scheme",De._scheme).replace("email",De._email).getRegex(),De._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,De.tag=Se(De.tag).replace("comment",De._comment).replace("attribute",De._attribute).getRegex(),De._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,De._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,De._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,De.link=Se(De.link).replace("label",De._label).replace("href",De._href).replace("title",De._title).getRegex(),De.reflink=Se(De.reflink).replace("label",De._label).replace("ref",je._label).getRegex(),De.nolink=Se(De.nolink).replace("ref",je._label).getRegex(),De.reflinkSearch=Se(De.reflinkSearch,"g").replace("reflink",De.reflink).replace("nolink",De.nolink).getRegex(),De.normal={...De},De.pedantic={...De.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Se(/^!?\[(label)\]\((.*?)\)/).replace("label",De._label).getRegex(),reflink:Se(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",De._label).getRegex()},De.gfm={...De.normal,escape:Se(De.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},De.gfm.url=Se(De.gfm.url,"i").replace("email",De.gfm._extended_email).getRegex(),De.breaks={...De.gfm,br:Se(De.br).replace("{2,}","*").getRegex(),text:Se(De.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Ne{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||he,this.options.tokenizer=this.options.tokenizer||new Ue,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:je.normal,inline:De.normal};this.options.pedantic?(t.block=je.pedantic,t.inline=De.pedantic):this.options.gfm&&(t.block=je.gfm,this.options.breaks?t.inline=De.breaks:t.inline=De.gfm),this.tokenizer.rules=t}static get rules(){return{block:je,inline:De}}static lex(e,t){return new Ne(t).lex(e)}static lexInline(e,t){return new Ne(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let r,a,n,i;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,((e,t,r)=>t+"    ".repeat(r.length)));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((a=>!!(r=a.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),1===r.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),a=t[t.length-1],!a||"paragraph"!==a.type&&"text"!==a.type?t.push(r):(a.raw+="\n"+r.raw,a.text+="\n"+r.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.list(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.def(e))e=e.substring(r.raw.length),a=t[t.length-1],!a||"paragraph"!==a.type&&"text"!==a.type?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(a.raw+="\n"+r.raw,a.text+="\n"+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else{if(n=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const r=e.slice(1);let a;this.options.extensions.startBlock.forEach((function(e){a=e.call({lexer:this},r),"number"==typeof a&&a>=0&&(t=Math.min(t,a))})),t<1/0&&t>=0&&(n=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(n)))a=t[t.length-1],i&&"paragraph"===a.type?(a.raw+="\n"+r.raw,a.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(r),i=n.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),a=t[t.length-1],a&&"text"===a.type?(a.raw+="\n"+r.raw,a.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r,a,n,i,s,o,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.anyPunctuation.exec(l));)l=l.slice(0,i.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(s||(o=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((a=>!!(r=a.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e))e=e.substring(r.raw.length),a=t[t.length-1],a&&"text"===r.type&&"text"===a.type?(a.raw+=r.raw,a.text+=r.text):t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),a=t[t.length-1],a&&"text"===r.type&&"text"===a.type?(a.raw+=r.raw,a.text+=r.text):t.push(r);else if(r=this.tokenizer.emStrong(e,l,o))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.autolink(e,Pe))e=e.substring(r.raw.length),t.push(r);else if(this.state.inLink||!(r=this.tokenizer.url(e,Pe))){if(n=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const r=e.slice(1);let a;this.options.extensions.startInline.forEach((function(e){a=e.call({lexer:this},r),"number"==typeof a&&a>=0&&(t=Math.min(t,a))})),t<1/0&&t>=0&&(n=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(n,Fe))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(o=r.raw.slice(-1)),s=!0,a=t[t.length-1],a&&"text"===a.type?(a.raw+=r.raw,a.text+=r.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(r.raw.length),t.push(r);return t}}class qe{constructor(e){this.options=e||he}code(e,t,r){const a=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,a);null!=t&&t!==e&&(r=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",a?'<pre><code class="'+this.options.langPrefix+xe(a)+'">'+(r?e:xe(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:xe(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e,t){return e}heading(e,t,r,a){if(this.options.headerIds){return`<h${t} id="${this.options.headerPrefix+a.slug(r)}">${e}</h${t}>\n`}return`<h${t}>${e}</h${t}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,r){const a=t?"ol":"ul";return"<"+a+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+a+">\n"}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(null===(e=Te(this.options.sanitize,this.options.baseUrl,e)))return r;let a='<a href="'+e+'"';return t&&(a+=' title="'+t+'"'),a+=">"+r+"</a>",a}image(e,t,r){if(null===(e=Te(this.options.sanitize,this.options.baseUrl,e)))return r;let a=`<img src="${e}" alt="${r}"`;return t&&(a+=` title="${t}"`),a+=this.options.xhtml?"/>":">",a}text(e){return e}}class He{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Me{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,a=0;if(this.seen.hasOwnProperty(r)){a=this.seen[e];do{a++,r=e+"-"+a}while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=a,this.seen[r]=0),r}slug(e,t={}){const r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}class We{constructor(e){this.options=e||he,this.options.renderer=this.options.renderer||new qe,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new He,this.slugger=new Me}static parse(e,t){return new We(t).parse(e)}static parseInline(e,t){return new We(t).parseInline(e)}parse(e,t=!0){let r,a,n,i,s,o,l,c,d,p,h,u,m,f,g,v,b,y,x,w="";const $=e.length;for(r=0;r<$;r++)if(p=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(x=this.options.extensions.renderers[p.type].call({parser:this},p),!1!==x||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type)))w+=x||"";else switch(p.type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(p.tokens),p.depth,$e(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(c="",l="",i=p.header.length,a=0;a<i;a++)l+=this.renderer.tablecell(this.parseInline(p.header[a].tokens),{header:!0,align:p.align[a]});for(c+=this.renderer.tablerow(l),d="",i=p.rows.length,a=0;a<i;a++){for(o=p.rows[a],l="",s=o.length,n=0;n<s;n++)l+=this.renderer.tablecell(this.parseInline(o[n].tokens),{header:!1,align:p.align[n]});d+=this.renderer.tablerow(l)}w+=this.renderer.table(c,d);continue;case"blockquote":d=this.parse(p.tokens),w+=this.renderer.blockquote(d);continue;case"list":for(h=p.ordered,u=p.start,m=p.loose,i=p.items.length,d="",a=0;a<i;a++)g=p.items[a],v=g.checked,b=g.task,f="",g.task&&(y=this.renderer.checkbox(v),m?g.tokens.length>0&&"paragraph"===g.tokens[0].type?(g.tokens[0].text=y+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&"text"===g.tokens[0].tokens[0].type&&(g.tokens[0].tokens[0].text=y+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:y}):f+=y),f+=this.parse(g.tokens,m),d+=this.renderer.listitem(f,b,v);w+=this.renderer.list(d,h,u);continue;case"html":w+=this.renderer.html(p.text,p.block);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(d=p.tokens?this.parseInline(p.tokens):p.text;r+1<$&&"text"===e[r+1].type;)p=e[++r],d+="\n"+(p.tokens?this.parseInline(p.tokens):p.text);w+=t?this.renderer.paragraph(d):d;continue;default:{const e='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return w}parseInline(e,t){t=t||this.renderer;let r,a,n,i="";const s=e.length;for(r=0;r<s;r++)if(a=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(n=this.options.extensions.renderers[a.type].call({parser:this},a),!1!==n||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)))i+=n||"";else switch(a.type){case"escape":case"text":i+=t.text(a.text);break;case"html":i+=t.html(a.text);break;case"link":i+=t.link(a.href,a.title,this.parseInline(a.tokens,t));break;case"image":i+=t.image(a.href,a.title,a.text);break;case"strong":i+=t.strong(this.parseInline(a.tokens,t));break;case"em":i+=t.em(this.parseInline(a.tokens,t));break;case"codespan":i+=t.codespan(a.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(a.tokens,t));break;default:{const e='Token with "'+a.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return i}}class Ve{constructor(e){this.options=e||he}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(e){return e}postprocess(e){return e}}const Ke=new class{defaults={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};options=this.setOptions;parse=this.#e(Ne.lex,We.parse);parseInline=this.#e(Ne.lexInline,We.parseInline);Parser=We;parser=We.parse;Renderer=qe;TextRenderer=He;Lexer=Ne;lexer=Ne.lex;Tokenizer=Ue;Slugger=Me;Hooks=Ve;constructor(...e){this.use(...e)}walkTokens(e,t){let r=[];for(const a of e)switch(r=r.concat(t.call(this,a)),a.type){case"table":for(const e of a.header)r=r.concat(this.walkTokens(e.tokens,t));for(const e of a.rows)for(const a of e)r=r.concat(this.walkTokens(a.tokens,t));break;case"list":r=r.concat(this.walkTokens(a.items,t));break;default:this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[a.type]?this.defaults.extensions.childTokens[a.type].forEach((e=>{r=r.concat(this.walkTokens(a[e],t))})):a.tokens&&(r=r.concat(this.walkTokens(a.tokens,t)))}return r}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach((e=>{const r={...e};if(r.async=this.defaults.async||r.async||!1,e.extensions&&(e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const r=t.renderers[e.name];t.renderers[e.name]=r?function(...t){let a=e.renderer.apply(this,t);return!1===a&&(a=r.apply(this,t)),a}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");t[e.level]?t[e.level].unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}e.childTokens&&(t.childTokens[e.name]=e.childTokens)})),r.extensions=t),e.renderer){const t=this.defaults.renderer||new qe(this.defaults);for(const r in e.renderer){const a=t[r];t[r]=(...n)=>{let i=e.renderer[r].apply(t,n);return!1===i&&(i=a.apply(t,n)),i}}r.renderer=t}if(e.tokenizer){const t=this.defaults.tokenizer||new Ue(this.defaults);for(const r in e.tokenizer){const a=t[r];t[r]=(...n)=>{let i=e.tokenizer[r].apply(t,n);return!1===i&&(i=a.apply(t,n)),i}}r.tokenizer=t}if(e.hooks){const t=this.defaults.hooks||new Ve;for(const r in e.hooks){const a=t[r];Ve.passThroughHooks.has(r)?t[r]=n=>{if(this.defaults.async)return Promise.resolve(e.hooks[r].call(t,n)).then((e=>a.call(t,e)));const i=e.hooks[r].call(t,n);return a.call(t,i)}:t[r]=(...n)=>{let i=e.hooks[r].apply(t,n);return!1===i&&(i=a.apply(t,n)),i}}r.hooks=t}if(e.walkTokens){const t=this.defaults.walkTokens;r.walkTokens=function(r){let a=[];return a.push(e.walkTokens.call(this,r)),t&&(a=a.concat(t.call(this,r))),a}}this.defaults={...this.defaults,...r}})),this}setOptions(e){return this.defaults={...this.defaults,...e},this}#e(e,t){return(r,a,n)=>{"function"==typeof a&&(n=a,a=null);const i={...a};a={...this.defaults,...i};const s=this.#t(a.silent,a.async,n);if(null==r)return s(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof r)return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(function(e,t){e&&!e.silent&&(t&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(e.sanitize||e.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(e.highlight||"language-"!==e.langPrefix)&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),e.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),e.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),e.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),e.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(e.headerIds||e.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}(a,n),a.hooks&&(a.hooks.options=a),n){const i=a.highlight;let o;try{a.hooks&&(r=a.hooks.preprocess(r)),o=e(r,a)}catch(e){return s(e)}const l=e=>{let r;if(!e)try{a.walkTokens&&this.walkTokens(o,a.walkTokens),r=t(o,a),a.hooks&&(r=a.hooks.postprocess(r))}catch(t){e=t}return a.highlight=i,e?s(e):n(null,r)};if(!i||i.length<3)return l();if(delete a.highlight,!o.length)return l();let c=0;return this.walkTokens(o,(e=>{"code"===e.type&&(c++,setTimeout((()=>{i(e.text,e.lang,((t,r)=>{if(t)return l(t);null!=r&&r!==e.text&&(e.text=r,e.escaped=!0),c--,0===c&&l()}))}),0))})),void(0===c&&l())}if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(r):r).then((t=>e(t,a))).then((e=>a.walkTokens?Promise.all(this.walkTokens(e,a.walkTokens)).then((()=>e)):e)).then((e=>t(e,a))).then((e=>a.hooks?a.hooks.postprocess(e):e)).catch(s);try{a.hooks&&(r=a.hooks.preprocess(r));const n=e(r,a);a.walkTokens&&this.walkTokens(n,a.walkTokens);let i=t(n,a);return a.hooks&&(i=a.hooks.postprocess(i)),i}catch(e){return s(e)}}}#t(e,t,r){return a=>{if(a.message+="\nPlease report this to https://github.com/markedjs/this.",e){const e="<p>An error occurred:</p><pre>"+xe(a.message+"",!0)+"</pre>";return t?Promise.resolve(e):r?void r(null,e):e}if(t)return Promise.reject(a);if(!r)throw a;r(a)}}}(he);function Ge(e,t,r){return Ke.parse(e,t,r)}Ge.options=Ge.setOptions=function(e){return Ke.setOptions(e),Ge.defaults=Ke.defaults,ue(Ge.defaults),Ge},Ge.getDefaults=pe,Ge.defaults=he,Ge.use=function(...e){return Ke.use(...e),Ge.defaults=Ke.defaults,ue(Ge.defaults),Ge},Ge.walkTokens=function(e,t){return Ke.walkTokens(e,t)},Ge.parseInline=Ke.parseInline,Ge.Parser=We,Ge.parser=We.parse,Ge.Renderer=qe,Ge.TextRenderer=He,Ge.Lexer=Ne,Ge.lexer=Ne.lex,Ge.Tokenizer=Ue,Ge.Slugger=Me,Ge.Hooks=Ve,Ge.parse=Ge;Ge.options,Ge.setOptions,Ge.use,Ge.walkTokens,Ge.parseInline;var Ze=r(660),Ye=r.n(Ze);r(251),r(358),r(46),r(503),r(277),r(874),r(366),r(57),r(16);const Je=c`
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
`,Xe=c`
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
}`,Qe=c`
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
`,et=c`
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
`,tt=c`
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
`,rt=c`
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
`,at=c`
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
`,nt=c`
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
`,it=c`
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
`,st=c`

`;const ot=/[\s#:?&={}]/g,lt="_rapidoc_api_key";function ct(e){return new Promise((t=>setTimeout(t,e)))}function dt(e,t){const r=t.target,a=document.createElement("textarea");a.value=e,a.style.position="fixed",document.body.appendChild(a),a.focus(),a.select();try{document.execCommand("copy"),r.innerText="Copied",setTimeout((()=>{r.innerText="Copy"}),5e3)}catch(e){console.error("Unable to copy",e)}document.body.removeChild(a)}function pt(e,t,r="includes"){if("includes"===r){return`${t.method} ${t.path} ${t.summary||t.description||""} ${t.operationId||""}`.toLowerCase().includes(e.toLowerCase())}return new RegExp(e,"i").test(`${t.method} ${t.path}`)}function ht(e,t=new Set){return e?(Object.keys(e).forEach((r=>{var a;if(t.add(r),e[r].properties)ht(e[r].properties,t);else if(null!==(a=e[r].items)&&void 0!==a&&a.properties){var n;ht(null===(n=e[r].items)||void 0===n?void 0:n.properties,t)}})),t):t}function ut(e,t){if(e){const r=document.createElement("a");document.body.appendChild(r),r.style="display: none",r.href=e,r.download=t,r.click(),r.remove()}}function mt(e){if(e){const t=document.createElement("a");document.body.appendChild(t),t.style="display: none",t.href=e,t.target="_blank",t.click(),t.remove()}}function ft(e){return null==e}var gt={isNothing:ft,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:ft(e)?[]:[e]},repeat:function(e,t){var r,a="";for(r=0;r<t;r+=1)a+=e;return a},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var r,a,n,i;if(t)for(r=0,a=(i=Object.keys(t)).length;r<a;r+=1)e[n=i[r]]=t[n];return e}};function vt(e,t){var r="",a=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(r+='in "'+e.mark.name+'" '),r+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(r+="\n\n"+e.mark.snippet),a+" "+r):a}function bt(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=vt(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}bt.prototype=Object.create(Error.prototype),bt.prototype.constructor=bt,bt.prototype.toString=function(e){return this.name+": "+vt(this,e)};var yt=bt;function xt(e,t,r,a,n){var i="",s="",o=Math.floor(n/2)-1;return a-t>o&&(t=a-o+(i=" ... ").length),r-a>o&&(r=a+o-(s=" ...").length),{str:i+e.slice(t,r).replace(/\t/g,"→")+s,pos:a-t+i.length}}function wt(e,t){return gt.repeat(" ",t-e.length)+e}var $t=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var r,a=/\r?\n|\r|\0/g,n=[0],i=[],s=-1;r=a.exec(e.buffer);)i.push(r.index),n.push(r.index+r[0].length),e.position<=r.index&&s<0&&(s=n.length-2);s<0&&(s=n.length-1);var o,l,c="",d=Math.min(e.line+t.linesAfter,i.length).toString().length,p=t.maxLength-(t.indent+d+3);for(o=1;o<=t.linesBefore&&!(s-o<0);o++)l=xt(e.buffer,n[s-o],i[s-o],e.position-(n[s]-n[s-o]),p),c=gt.repeat(" ",t.indent)+wt((e.line-o+1).toString(),d)+" | "+l.str+"\n"+c;for(l=xt(e.buffer,n[s],i[s],e.position,p),c+=gt.repeat(" ",t.indent)+wt((e.line+1).toString(),d)+" | "+l.str+"\n",c+=gt.repeat("-",t.indent+d+3+l.pos)+"^\n",o=1;o<=t.linesAfter&&!(s+o>=i.length);o++)l=xt(e.buffer,n[s+o],i[s+o],e.position-(n[s]-n[s+o]),p),c+=gt.repeat(" ",t.indent)+wt((e.line+o+1).toString(),d)+" | "+l.str+"\n";return c.replace(/\n$/,"")},kt=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],St=["scalar","sequence","mapping"];var At=function(e,t){if(t=t||{},Object.keys(t).forEach((function(t){if(-1===kt.indexOf(t))throw new yt('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach((function(r){e[r].forEach((function(e){t[String(e)]=r}))})),t}(t.styleAliases||null),-1===St.indexOf(this.kind))throw new yt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function Et(e,t){var r=[];return e[t].forEach((function(e){var t=r.length;r.forEach((function(r,a){r.tag===e.tag&&r.kind===e.kind&&r.multi===e.multi&&(t=a)})),r[t]=e})),r}function Tt(e){return this.extend(e)}Tt.prototype.extend=function(e){var t=[],r=[];if(e instanceof At)r.push(e);else if(Array.isArray(e))r=r.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new yt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(r=r.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof At))throw new yt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new yt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new yt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),r.forEach((function(e){if(!(e instanceof At))throw new yt("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var a=Object.create(Tt.prototype);return a.implicit=(this.implicit||[]).concat(t),a.explicit=(this.explicit||[]).concat(r),a.compiledImplicit=Et(a,"implicit"),a.compiledExplicit=Et(a,"explicit"),a.compiledTypeMap=function(){var e,t,r={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function a(e){e.multi?(r.multi[e.kind].push(e),r.multi.fallback.push(e)):r[e.kind][e.tag]=r.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(a);return r}(a.compiledImplicit,a.compiledExplicit),a};var Ct=Tt,Ot=new At("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),It=new At("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),_t=new At("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),Rt=new Ct({explicit:[Ot,It,_t]});var Lt=new At("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var Bt=new At("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function zt(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Ut(e){return 48<=e&&e<=55}function jt(e){return 48<=e&&e<=57}var Dt=new At("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r=e.length,a=0,n=!1;if(!r)return!1;if("-"!==(t=e[a])&&"+"!==t||(t=e[++a]),"0"===t){if(a+1===r)return!0;if("b"===(t=e[++a])){for(a++;a<r;a++)if("_"!==(t=e[a])){if("0"!==t&&"1"!==t)return!1;n=!0}return n&&"_"!==t}if("x"===t){for(a++;a<r;a++)if("_"!==(t=e[a])){if(!zt(e.charCodeAt(a)))return!1;n=!0}return n&&"_"!==t}if("o"===t){for(a++;a<r;a++)if("_"!==(t=e[a])){if(!Ut(e.charCodeAt(a)))return!1;n=!0}return n&&"_"!==t}}if("_"===t)return!1;for(;a<r;a++)if("_"!==(t=e[a])){if(!jt(e.charCodeAt(a)))return!1;n=!0}return!(!n||"_"===t)},construct:function(e){var t,r=e,a=1;if(-1!==r.indexOf("_")&&(r=r.replace(/_/g,"")),"-"!==(t=r[0])&&"+"!==t||("-"===t&&(a=-1),t=(r=r.slice(1))[0]),"0"===r)return 0;if("0"===t){if("b"===r[1])return a*parseInt(r.slice(2),2);if("x"===r[1])return a*parseInt(r.slice(2),16);if("o"===r[1])return a*parseInt(r.slice(2),8)}return a*parseInt(r,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!gt.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ft=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var Pt=/^[-+]?[0-9]+e/;var Nt=new At("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!Ft.test(e)||"_"===e[e.length-1])},construct:function(e){var t,r;return r="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===r?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:r*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||gt.isNegativeZero(e))},represent:function(e,t){var r;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(gt.isNegativeZero(e))return"-0.0";return r=e.toString(10),Pt.test(r)?r.replace("e",".e"):r},defaultStyle:"lowercase"}),qt=Rt.extend({implicit:[Lt,Bt,Dt,Nt]}),Ht=qt,Mt=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Wt=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var Vt=new At("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==Mt.exec(e)||null!==Wt.exec(e))},construct:function(e){var t,r,a,n,i,s,o,l,c=0,d=null;if(null===(t=Mt.exec(e))&&(t=Wt.exec(e)),null===t)throw new Error("Date resolve error");if(r=+t[1],a=+t[2]-1,n=+t[3],!t[4])return new Date(Date.UTC(r,a,n));if(i=+t[4],s=+t[5],o=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(d=-d)),l=new Date(Date.UTC(r,a,n,i,s,o,c)),d&&l.setTime(l.getTime()-d),l},instanceOf:Date,represent:function(e){return e.toISOString()}});var Kt=new At("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),Gt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var Zt=new At("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,r,a=0,n=e.length,i=Gt;for(r=0;r<n;r++)if(!((t=i.indexOf(e.charAt(r)))>64)){if(t<0)return!1;a+=6}return a%8==0},construct:function(e){var t,r,a=e.replace(/[\r\n=]/g,""),n=a.length,i=Gt,s=0,o=[];for(t=0;t<n;t++)t%4==0&&t&&(o.push(s>>16&255),o.push(s>>8&255),o.push(255&s)),s=s<<6|i.indexOf(a.charAt(t));return 0===(r=n%4*6)?(o.push(s>>16&255),o.push(s>>8&255),o.push(255&s)):18===r?(o.push(s>>10&255),o.push(s>>2&255)):12===r&&o.push(s>>4&255),new Uint8Array(o)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,r,a="",n=0,i=e.length,s=Gt;for(t=0;t<i;t++)t%3==0&&t&&(a+=s[n>>18&63],a+=s[n>>12&63],a+=s[n>>6&63],a+=s[63&n]),n=(n<<8)+e[t];return 0===(r=i%3)?(a+=s[n>>18&63],a+=s[n>>12&63],a+=s[n>>6&63],a+=s[63&n]):2===r?(a+=s[n>>10&63],a+=s[n>>4&63],a+=s[n<<2&63],a+=s[64]):1===r&&(a+=s[n>>2&63],a+=s[n<<4&63],a+=s[64],a+=s[64]),a}}),Yt=Object.prototype.hasOwnProperty,Jt=Object.prototype.toString;var Xt=new At("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,r,a,n,i,s=[],o=e;for(t=0,r=o.length;t<r;t+=1){if(a=o[t],i=!1,"[object Object]"!==Jt.call(a))return!1;for(n in a)if(Yt.call(a,n)){if(i)return!1;i=!0}if(!i)return!1;if(-1!==s.indexOf(n))return!1;s.push(n)}return!0},construct:function(e){return null!==e?e:[]}}),Qt=Object.prototype.toString;var er=new At("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,r,a,n,i,s=e;for(i=new Array(s.length),t=0,r=s.length;t<r;t+=1){if(a=s[t],"[object Object]"!==Qt.call(a))return!1;if(1!==(n=Object.keys(a)).length)return!1;i[t]=[n[0],a[n[0]]]}return!0},construct:function(e){if(null===e)return[];var t,r,a,n,i,s=e;for(i=new Array(s.length),t=0,r=s.length;t<r;t+=1)a=s[t],n=Object.keys(a),i[t]=[n[0],a[n[0]]];return i}}),tr=Object.prototype.hasOwnProperty;var rr=new At("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,r=e;for(t in r)if(tr.call(r,t)&&null!==r[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),ar=Ht.extend({implicit:[Vt,Kt],explicit:[Zt,Xt,er,rr]}),nr=Object.prototype.hasOwnProperty,ir=1,sr=2,or=3,lr=4,cr=1,dr=2,pr=3,hr=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ur=/[\x85\u2028\u2029]/,mr=/[,\[\]\{\}]/,fr=/^(?:!|!!|![a-z\-]+!)$/i,gr=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function vr(e){return Object.prototype.toString.call(e)}function br(e){return 10===e||13===e}function yr(e){return 9===e||32===e}function xr(e){return 9===e||32===e||10===e||13===e}function wr(e){return 44===e||91===e||93===e||123===e||125===e}function $r(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function kr(e){return 120===e?2:117===e?4:85===e?8:0}function Sr(e){return 48<=e&&e<=57?e-48:-1}function Ar(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function Er(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var Tr=new Array(256),Cr=new Array(256),Or=0;Or<256;Or++)Tr[Or]=Ar(Or)?1:0,Cr[Or]=Ar(Or);function Ir(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||ar,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function _r(e,t){var r={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return r.snippet=$t(r),new yt(t,r)}function Rr(e,t){throw _r(e,t)}function Lr(e,t){e.onWarning&&e.onWarning.call(null,_r(e,t))}var Br={YAML:function(e,t,r){var a,n,i;null!==e.version&&Rr(e,"duplication of %YAML directive"),1!==r.length&&Rr(e,"YAML directive accepts exactly one argument"),null===(a=/^([0-9]+)\.([0-9]+)$/.exec(r[0]))&&Rr(e,"ill-formed argument of the YAML directive"),n=parseInt(a[1],10),i=parseInt(a[2],10),1!==n&&Rr(e,"unacceptable YAML version of the document"),e.version=r[0],e.checkLineBreaks=i<2,1!==i&&2!==i&&Lr(e,"unsupported YAML version of the document")},TAG:function(e,t,r){var a,n;2!==r.length&&Rr(e,"TAG directive accepts exactly two arguments"),a=r[0],n=r[1],fr.test(a)||Rr(e,"ill-formed tag handle (first argument) of the TAG directive"),nr.call(e.tagMap,a)&&Rr(e,'there is a previously declared suffix for "'+a+'" tag handle'),gr.test(n)||Rr(e,"ill-formed tag prefix (second argument) of the TAG directive");try{n=decodeURIComponent(n)}catch(t){Rr(e,"tag prefix is malformed: "+n)}e.tagMap[a]=n}};function zr(e,t,r,a){var n,i,s,o;if(t<r){if(o=e.input.slice(t,r),a)for(n=0,i=o.length;n<i;n+=1)9===(s=o.charCodeAt(n))||32<=s&&s<=1114111||Rr(e,"expected valid JSON character");else hr.test(o)&&Rr(e,"the stream contains non-printable characters");e.result+=o}}function Ur(e,t,r,a){var n,i,s,o;for(gt.isObject(r)||Rr(e,"cannot merge mappings; the provided source object is unacceptable"),s=0,o=(n=Object.keys(r)).length;s<o;s+=1)i=n[s],nr.call(t,i)||(t[i]=r[i],a[i]=!0)}function jr(e,t,r,a,n,i,s,o,l){var c,d;if(Array.isArray(n))for(c=0,d=(n=Array.prototype.slice.call(n)).length;c<d;c+=1)Array.isArray(n[c])&&Rr(e,"nested arrays are not supported inside keys"),"object"==typeof n&&"[object Object]"===vr(n[c])&&(n[c]="[object Object]");if("object"==typeof n&&"[object Object]"===vr(n)&&(n="[object Object]"),n=String(n),null===t&&(t={}),"tag:yaml.org,2002:merge"===a)if(Array.isArray(i))for(c=0,d=i.length;c<d;c+=1)Ur(e,t,i[c],r);else Ur(e,t,i,r);else e.json||nr.call(r,n)||!nr.call(t,n)||(e.line=s||e.line,e.lineStart=o||e.lineStart,e.position=l||e.position,Rr(e,"duplicated mapping key")),"__proto__"===n?Object.defineProperty(t,n,{configurable:!0,enumerable:!0,writable:!0,value:i}):t[n]=i,delete r[n];return t}function Dr(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):Rr(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function Fr(e,t,r){for(var a=0,n=e.input.charCodeAt(e.position);0!==n;){for(;yr(n);)9===n&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),n=e.input.charCodeAt(++e.position);if(t&&35===n)do{n=e.input.charCodeAt(++e.position)}while(10!==n&&13!==n&&0!==n);if(!br(n))break;for(Dr(e),n=e.input.charCodeAt(e.position),a++,e.lineIndent=0;32===n;)e.lineIndent++,n=e.input.charCodeAt(++e.position)}return-1!==r&&0!==a&&e.lineIndent<r&&Lr(e,"deficient indentation"),a}function Pr(e){var t,r=e.position;return!(45!==(t=e.input.charCodeAt(r))&&46!==t||t!==e.input.charCodeAt(r+1)||t!==e.input.charCodeAt(r+2)||(r+=3,0!==(t=e.input.charCodeAt(r))&&!xr(t)))}function Nr(e,t){1===t?e.result+=" ":t>1&&(e.result+=gt.repeat("\n",t-1))}function qr(e,t){var r,a,n=e.tag,i=e.anchor,s=[],o=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=s),a=e.input.charCodeAt(e.position);0!==a&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,Rr(e,"tab characters must not be used in indentation")),45===a)&&xr(e.input.charCodeAt(e.position+1));)if(o=!0,e.position++,Fr(e,!0,-1)&&e.lineIndent<=t)s.push(null),a=e.input.charCodeAt(e.position);else if(r=e.line,Wr(e,t,or,!1,!0),s.push(e.result),Fr(e,!0,-1),a=e.input.charCodeAt(e.position),(e.line===r||e.lineIndent>t)&&0!==a)Rr(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!o&&(e.tag=n,e.anchor=i,e.kind="sequence",e.result=s,!0)}function Hr(e){var t,r,a,n,i=!1,s=!1;if(33!==(n=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&Rr(e,"duplication of a tag property"),60===(n=e.input.charCodeAt(++e.position))?(i=!0,n=e.input.charCodeAt(++e.position)):33===n?(s=!0,r="!!",n=e.input.charCodeAt(++e.position)):r="!",t=e.position,i){do{n=e.input.charCodeAt(++e.position)}while(0!==n&&62!==n);e.position<e.length?(a=e.input.slice(t,e.position),n=e.input.charCodeAt(++e.position)):Rr(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==n&&!xr(n);)33===n&&(s?Rr(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),fr.test(r)||Rr(e,"named tag handle cannot contain such characters"),s=!0,t=e.position+1)),n=e.input.charCodeAt(++e.position);a=e.input.slice(t,e.position),mr.test(a)&&Rr(e,"tag suffix cannot contain flow indicator characters")}a&&!gr.test(a)&&Rr(e,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch(t){Rr(e,"tag name is malformed: "+a)}return i?e.tag=a:nr.call(e.tagMap,r)?e.tag=e.tagMap[r]+a:"!"===r?e.tag="!"+a:"!!"===r?e.tag="tag:yaml.org,2002:"+a:Rr(e,'undeclared tag handle "'+r+'"'),!0}function Mr(e){var t,r;if(38!==(r=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&Rr(e,"duplication of an anchor property"),r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!xr(r)&&!wr(r);)r=e.input.charCodeAt(++e.position);return e.position===t&&Rr(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function Wr(e,t,r,a,n){var i,s,o,l,c,d,p,h,u,m=1,f=!1,g=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,i=s=o=lr===r||or===r,a&&Fr(e,!0,-1)&&(f=!0,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)),1===m)for(;Hr(e)||Mr(e);)Fr(e,!0,-1)?(f=!0,o=i,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)):o=!1;if(o&&(o=f||n),1!==m&&lr!==r||(h=ir===r||sr===r?t:t+1,u=e.position-e.lineStart,1===m?o&&(qr(e,u)||function(e,t,r){var a,n,i,s,o,l,c,d=e.tag,p=e.anchor,h={},u=Object.create(null),m=null,f=null,g=null,v=!1,b=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=h),c=e.input.charCodeAt(e.position);0!==c;){if(v||-1===e.firstTabInLine||(e.position=e.firstTabInLine,Rr(e,"tab characters must not be used in indentation")),a=e.input.charCodeAt(e.position+1),i=e.line,63!==c&&58!==c||!xr(a)){if(s=e.line,o=e.lineStart,l=e.position,!Wr(e,r,sr,!1,!0))break;if(e.line===i){for(c=e.input.charCodeAt(e.position);yr(c);)c=e.input.charCodeAt(++e.position);if(58===c)xr(c=e.input.charCodeAt(++e.position))||Rr(e,"a whitespace character is expected after the key-value separator within a block mapping"),v&&(jr(e,h,u,m,f,null,s,o,l),m=f=g=null),b=!0,v=!1,n=!1,m=e.tag,f=e.result;else{if(!b)return e.tag=d,e.anchor=p,!0;Rr(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!b)return e.tag=d,e.anchor=p,!0;Rr(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(v&&(jr(e,h,u,m,f,null,s,o,l),m=f=g=null),b=!0,v=!0,n=!0):v?(v=!1,n=!0):Rr(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=a;if((e.line===i||e.lineIndent>t)&&(v&&(s=e.line,o=e.lineStart,l=e.position),Wr(e,t,lr,!0,n)&&(v?f=e.result:g=e.result),v||(jr(e,h,u,m,f,g,s,o,l),m=f=g=null),Fr(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===i||e.lineIndent>t)&&0!==c)Rr(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return v&&jr(e,h,u,m,f,null,s,o,l),b&&(e.tag=d,e.anchor=p,e.kind="mapping",e.result=h),b}(e,u,h))||function(e,t){var r,a,n,i,s,o,l,c,d,p,h,u,m=!0,f=e.tag,g=e.anchor,v=Object.create(null);if(91===(u=e.input.charCodeAt(e.position)))s=93,c=!1,i=[];else{if(123!==u)return!1;s=125,c=!0,i={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),u=e.input.charCodeAt(++e.position);0!==u;){if(Fr(e,!0,t),(u=e.input.charCodeAt(e.position))===s)return e.position++,e.tag=f,e.anchor=g,e.kind=c?"mapping":"sequence",e.result=i,!0;m?44===u&&Rr(e,"expected the node content, but found ','"):Rr(e,"missed comma between flow collection entries"),h=null,o=l=!1,63===u&&xr(e.input.charCodeAt(e.position+1))&&(o=l=!0,e.position++,Fr(e,!0,t)),r=e.line,a=e.lineStart,n=e.position,Wr(e,t,ir,!1,!0),p=e.tag,d=e.result,Fr(e,!0,t),u=e.input.charCodeAt(e.position),!l&&e.line!==r||58!==u||(o=!0,u=e.input.charCodeAt(++e.position),Fr(e,!0,t),Wr(e,t,ir,!1,!0),h=e.result),c?jr(e,i,v,p,d,h,r,a,n):o?i.push(jr(e,null,v,p,d,h,r,a,n)):i.push(d),Fr(e,!0,t),44===(u=e.input.charCodeAt(e.position))?(m=!0,u=e.input.charCodeAt(++e.position)):m=!1}Rr(e,"unexpected end of the stream within a flow collection")}(e,h)?g=!0:(s&&function(e,t){var r,a,n,i,s=cr,o=!1,l=!1,c=t,d=0,p=!1;if(124===(i=e.input.charCodeAt(e.position)))a=!1;else{if(62!==i)return!1;a=!0}for(e.kind="scalar",e.result="";0!==i;)if(43===(i=e.input.charCodeAt(++e.position))||45===i)cr===s?s=43===i?pr:dr:Rr(e,"repeat of a chomping mode identifier");else{if(!((n=Sr(i))>=0))break;0===n?Rr(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?Rr(e,"repeat of an indentation width identifier"):(c=t+n-1,l=!0)}if(yr(i)){do{i=e.input.charCodeAt(++e.position)}while(yr(i));if(35===i)do{i=e.input.charCodeAt(++e.position)}while(!br(i)&&0!==i)}for(;0!==i;){for(Dr(e),e.lineIndent=0,i=e.input.charCodeAt(e.position);(!l||e.lineIndent<c)&&32===i;)e.lineIndent++,i=e.input.charCodeAt(++e.position);if(!l&&e.lineIndent>c&&(c=e.lineIndent),br(i))d++;else{if(e.lineIndent<c){s===pr?e.result+=gt.repeat("\n",o?1+d:d):s===cr&&o&&(e.result+="\n");break}for(a?yr(i)?(p=!0,e.result+=gt.repeat("\n",o?1+d:d)):p?(p=!1,e.result+=gt.repeat("\n",d+1)):0===d?o&&(e.result+=" "):e.result+=gt.repeat("\n",d):e.result+=gt.repeat("\n",o?1+d:d),o=!0,l=!0,d=0,r=e.position;!br(i)&&0!==i;)i=e.input.charCodeAt(++e.position);zr(e,r,e.position,!1)}}return!0}(e,h)||function(e,t){var r,a,n;if(39!==(r=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,a=n=e.position;0!==(r=e.input.charCodeAt(e.position));)if(39===r){if(zr(e,a,e.position,!0),39!==(r=e.input.charCodeAt(++e.position)))return!0;a=e.position,e.position++,n=e.position}else br(r)?(zr(e,a,n,!0),Nr(e,Fr(e,!1,t)),a=n=e.position):e.position===e.lineStart&&Pr(e)?Rr(e,"unexpected end of the document within a single quoted scalar"):(e.position++,n=e.position);Rr(e,"unexpected end of the stream within a single quoted scalar")}(e,h)||function(e,t){var r,a,n,i,s,o;if(34!==(o=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,r=a=e.position;0!==(o=e.input.charCodeAt(e.position));){if(34===o)return zr(e,r,e.position,!0),e.position++,!0;if(92===o){if(zr(e,r,e.position,!0),br(o=e.input.charCodeAt(++e.position)))Fr(e,!1,t);else if(o<256&&Tr[o])e.result+=Cr[o],e.position++;else if((s=kr(o))>0){for(n=s,i=0;n>0;n--)(s=$r(o=e.input.charCodeAt(++e.position)))>=0?i=(i<<4)+s:Rr(e,"expected hexadecimal character");e.result+=Er(i),e.position++}else Rr(e,"unknown escape sequence");r=a=e.position}else br(o)?(zr(e,r,a,!0),Nr(e,Fr(e,!1,t)),r=a=e.position):e.position===e.lineStart&&Pr(e)?Rr(e,"unexpected end of the document within a double quoted scalar"):(e.position++,a=e.position)}Rr(e,"unexpected end of the stream within a double quoted scalar")}(e,h)?g=!0:!function(e){var t,r,a;if(42!==(a=e.input.charCodeAt(e.position)))return!1;for(a=e.input.charCodeAt(++e.position),t=e.position;0!==a&&!xr(a)&&!wr(a);)a=e.input.charCodeAt(++e.position);return e.position===t&&Rr(e,"name of an alias node must contain at least one character"),r=e.input.slice(t,e.position),nr.call(e.anchorMap,r)||Rr(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],Fr(e,!0,-1),!0}(e)?function(e,t,r){var a,n,i,s,o,l,c,d,p=e.kind,h=e.result;if(xr(d=e.input.charCodeAt(e.position))||wr(d)||35===d||38===d||42===d||33===d||124===d||62===d||39===d||34===d||37===d||64===d||96===d)return!1;if((63===d||45===d)&&(xr(a=e.input.charCodeAt(e.position+1))||r&&wr(a)))return!1;for(e.kind="scalar",e.result="",n=i=e.position,s=!1;0!==d;){if(58===d){if(xr(a=e.input.charCodeAt(e.position+1))||r&&wr(a))break}else if(35===d){if(xr(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&Pr(e)||r&&wr(d))break;if(br(d)){if(o=e.line,l=e.lineStart,c=e.lineIndent,Fr(e,!1,-1),e.lineIndent>=t){s=!0,d=e.input.charCodeAt(e.position);continue}e.position=i,e.line=o,e.lineStart=l,e.lineIndent=c;break}}s&&(zr(e,n,i,!1),Nr(e,e.line-o),n=i=e.position,s=!1),yr(d)||(i=e.position+1),d=e.input.charCodeAt(++e.position)}return zr(e,n,i,!1),!!e.result||(e.kind=p,e.result=h,!1)}(e,h,ir===r)&&(g=!0,null===e.tag&&(e.tag="?")):(g=!0,null===e.tag&&null===e.anchor||Rr(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===m&&(g=o&&qr(e,u))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&Rr(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),l=0,c=e.implicitTypes.length;l<c;l+=1)if((p=e.implicitTypes[l]).resolve(e.result)){e.result=p.construct(e.result),e.tag=p.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(nr.call(e.typeMap[e.kind||"fallback"],e.tag))p=e.typeMap[e.kind||"fallback"][e.tag];else for(p=null,l=0,c=(d=e.typeMap.multi[e.kind||"fallback"]).length;l<c;l+=1)if(e.tag.slice(0,d[l].tag.length)===d[l].tag){p=d[l];break}p||Rr(e,"unknown tag !<"+e.tag+">"),null!==e.result&&p.kind!==e.kind&&Rr(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+p.kind+'", not "'+e.kind+'"'),p.resolve(e.result,e.tag)?(e.result=p.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):Rr(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||g}function Vr(e){var t,r,a,n,i=e.position,s=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(n=e.input.charCodeAt(e.position))&&(Fr(e,!0,-1),n=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==n));){for(s=!0,n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!xr(n);)n=e.input.charCodeAt(++e.position);for(a=[],(r=e.input.slice(t,e.position)).length<1&&Rr(e,"directive name must not be less than one character in length");0!==n;){for(;yr(n);)n=e.input.charCodeAt(++e.position);if(35===n){do{n=e.input.charCodeAt(++e.position)}while(0!==n&&!br(n));break}if(br(n))break;for(t=e.position;0!==n&&!xr(n);)n=e.input.charCodeAt(++e.position);a.push(e.input.slice(t,e.position))}0!==n&&Dr(e),nr.call(Br,r)?Br[r](e,r,a):Lr(e,'unknown document directive "'+r+'"')}Fr(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,Fr(e,!0,-1)):s&&Rr(e,"directives end mark is expected"),Wr(e,e.lineIndent-1,lr,!1,!0),Fr(e,!0,-1),e.checkLineBreaks&&ur.test(e.input.slice(i,e.position))&&Lr(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Pr(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,Fr(e,!0,-1)):e.position<e.length-1&&Rr(e,"end of the stream or a document separator is expected")}function Kr(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var r=new Ir(e,t),a=e.indexOf("\0");for(-1!==a&&(r.position=a,Rr(r,"null byte is not allowed in input")),r.input+="\0";32===r.input.charCodeAt(r.position);)r.lineIndent+=1,r.position+=1;for(;r.position<r.length-1;)Vr(r);return r.documents}var Gr=function(e,t,r){null!==t&&"object"==typeof t&&void 0===r&&(r=t,t=null);var a=Kr(e,r);if("function"!=typeof t)return a;for(var n=0,i=a.length;n<i;n+=1)t(a[n])},Zr=function(e,t){var r=Kr(e,t);if(0!==r.length){if(1===r.length)return r[0];throw new yt("expected a single document in the stream, but found more")}},Yr={loadAll:Gr,load:Zr};Object.prototype.toString,Object.prototype.hasOwnProperty;function Jr(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var Xr=Yr.load;Jr("safeLoad","load"),Jr("safeLoadAll","loadAll"),Jr("safeDump","dump");async function Qr(e,t=!1,r=!1,a="",n="",i="",s="",o=""){var l,c;let d;try{var p,h;let t;if(this.requestUpdate(),"string"==typeof e){const r=await fetch(e);try{var u;if(e.endsWith("yaml")||e.endsWith("yml")||null!==(u=r.headers.get("content-type"))&&void 0!==u&&u.includes("yaml")){const e=await r.text(),a=Xr(e);t={resolvedSpec:a,spec:a}}else{const e=await r.json();t={resolvedSpec:e,spec:e}}}catch(e){t={}}}else t={spec:e};if(await ct(0),null!==(p=t.resolvedSpec)&&void 0!==p&&p.jsonSchemaViewer&&null!==(h=t.resolvedSpec)&&void 0!==h&&h.schemaAndExamples){this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:t.resolvedSpec}}));const e=Object.entries(t.resolvedSpec.schemaAndExamples).map((e=>({show:!0,expanded:!0,selectedExample:null,name:e[0],elementId:e[0].replace(ot,"-"),...e[1]})));return{specLoadError:!1,isSpecLoading:!1,info:t.resolvedSpec.info,schemaAndExamples:e}}var m,f,g,v;if(!t.spec||!(t.spec.components||t.spec.info||t.spec.servers||t.spec.tags||t.spec.paths))return console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",t),{specLoadError:!0,isSpecLoading:!1,info:{title:"Error loading the spec",description:null!==(m=t.response)&&void 0!==m&&m.url?`${null===(f=t.response)||void 0===f?void 0:f.url} ┃ ${null===(g=t.response)||void 0===g?void 0:g.status}  ${null===(v=t.response)||void 0===v?void 0:v.statusText}`:"Unable to load the Spec",version:" "},tags:[]};d=t.spec,this.dispatchEvent(new CustomEvent("before-render",{detail:{spec:d}}))}catch(e){console.info("RapiDoc: %c There was an issue while parsing the spec %o ","color:orangered",e)}const b=function(e,t,r=!1,a=!1){const n=["get","put","post","delete","patch","head","options"],i=e.tags&&Array.isArray(e.tags)?e.tags.map((e=>({show:!0,elementId:`tag--${e.name.replace(ot,"-")}`,name:e.name,description:e.description||"",headers:e.description?ea(e.description):[],paths:[],expanded:!1!==e["x-tag-expanded"]}))):[],s=e.paths||{};if(e.webhooks)for(const[t,r]of Object.entries(e.webhooks))r._type="webhook",s[t]=r;for(const t in s){const a=s[t].parameters,o={servers:s[t].servers||[],parameters:s[t].parameters||[]},l="webhook"===s[t]._type;n.forEach((n=>{if(s[t][n]){const s=e.paths[t][n],c=s.tags||[];if(0===c.length)if(r){const e=t.replace(/^\/+|\/+$/g,""),r=e.indexOf("/");-1===r?c.push(e):c.push(e.substr(0,r))}else c.push("General ⦂");c.forEach((r=>{let c,d;var p,h;(e.tags&&(d=e.tags.find((e=>e.name.toLowerCase()===r.toLowerCase()))),c=i.find((e=>e.name===r)),c)||(c={show:!0,elementId:`tag--${r.replace(ot,"-")}`,name:r,description:(null===(p=d)||void 0===p?void 0:p.description)||"",headers:null!==(h=d)&&void 0!==h&&h.description?ea(d.description):[],paths:[],expanded:!d||!1!==d["x-tag-expanded"]},i.push(c));let u=(s.summary||s.description||`${n.toUpperCase()} ${t}`).trim();u.length>100&&([u]=u.split(/[.|!|?]\s|[\r?\n]/));let m=[];if(m=a?s.parameters?a.filter((e=>{if(!s.parameters.some((t=>e.name===t.name&&e.in===t.in)))return e})).concat(s.parameters):a.slice(0):s.parameters?s.parameters.slice(0):[],s.callbacks)for(const[e,t]of Object.entries(s.callbacks)){const r=Object.entries(t).filter((e=>"object"==typeof e[1]))||[];s.callbacks[e]=Object.fromEntries(r)}c.paths.push({show:!0,expanded:!1,isWebhook:l,expandedAtLeastOnce:!1,summary:s.summary||"",description:s.description||"",externalDocs:s.externalDocs,shortSummary:u,method:n,path:t,operationId:s.operationId,elementId:`${n}-${t.replace(ot,"-")}`,servers:s.servers?o.servers.concat(s.servers):o.servers,parameters:m,requestBody:s.requestBody,responses:s.responses,callbacks:s.callbacks,deprecated:s.deprecated,security:s.security,xBadges:s["x-badges"]||void 0,xCodeSamples:s["x-codeSamples"]||s["x-code-samples"]||""})}))}}))}const o=i.filter((e=>e.paths&&e.paths.length>0));return o.forEach((e=>{"method"===t?e.paths.sort(((e,t)=>n.indexOf(e.method).toString().localeCompare(n.indexOf(t.method)))):"summary"===t?e.paths.sort(((e,t)=>e.shortSummary.localeCompare(t.shortSummary))):"path"===t&&e.paths.sort(((e,t)=>e.path.localeCompare(t.path))),e.firstPathId=e.paths[0].elementId})),a?o.sort(((e,t)=>e.name.localeCompare(t.name))):o}(d,a,t,r),y=function(e){if(!e.components)return[];const t=[];for(const r in e.components){const a=[];for(const t in e.components[r]){const n={show:!0,id:`${r.toLowerCase()}-${t.toLowerCase()}`.replace(ot,"-"),name:t,component:e.components[r][t]};a.push(n)}let n=r,i=r;switch(r){case"schemas":i="Schemas",n="Schemas allows the definition of input and output data types. These types can be objects, but also primitives and arrays.";break;case"responses":i="Responses",n="Describes responses from an API Operation, including design-time, static links to operations based on the response.";break;case"parameters":i="Parameters",n="Describes operation parameters. A unique parameter is defined by a combination of a name and location.";break;case"examples":i="Examples",n="List of Examples for operations, can be requests, responses and objects examples.";break;case"requestBodies":i="Request Bodies",n="Describes common request bodies that are used across the API operations.";break;case"headers":i="Headers",n='Headers follows the structure of the Parameters but they are explicitly in "header"';break;case"securitySchemes":i="Security Schemes",n="Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows(implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.";break;case"links":i="Links",n="Links represent a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.";break;case"callbacks":i="Callbacks",n="A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.";break;default:i=r,n=r}const s={show:!0,name:i,description:n,subComponents:a};t.push(s)}return t||[]}(d),x=null!==(l=d.info)&&void 0!==l&&l.description?ea(d.info.description):[],w=[];if(null!==(c=d.components)&&void 0!==c&&c.securitySchemes){const e=new Set;Object.entries(d.components.securitySchemes).forEach((t=>{if(!e.has(t[0])){e.add(t[0]);const r={securitySchemeId:t[0],...t[1]};r.value="",r.finalKeyValue="","apiKey"===t[1].type||"http"===t[1].type?(r.in=t[1].in||"header",r.name=t[1].name||"Authorization",r.user="",r.password=""):"oauth2"===t[1].type&&(r.in="header",r.name="Authorization",r.clientId="",r.clientSecret=""),w.push(r)}}))}n&&i&&s&&w.push({securitySchemeId:lt,description:"api-key provided in rapidoc element attributes",type:"apiKey",oAuthFlow:"",name:n,in:i,value:s,finalKeyValue:s}),w.forEach((e=>{"http"===e.type?e.typeDisplay="basic"===e.scheme?"HTTP Basic":"HTTP Bearer":"apiKey"===e.type?e.typeDisplay=`API Key (${e.name})`:"oauth2"===e.type?e.typeDisplay=`OAuth (${e.securitySchemeId})`:e.typeDisplay=e.type||"None"}));let $=[];d.servers&&Array.isArray(d.servers)?(d.servers.forEach((e=>{let t=e.url.trim();t.startsWith("http")||t.startsWith("//")||t.startsWith("{")||window.location.origin.startsWith("http")&&(e.url=window.location.origin+e.url,t=e.url),e.variables&&Object.entries(e.variables).forEach((e=>{const r=new RegExp(`{${e[0]}}`,"g");t=t.replace(r,e[1].default||""),e[1].value=e[1].default||""})),e.computedUrl=t})),o&&d.servers.push({url:o,computedUrl:o})):o?d.servers=[{url:o,computedUrl:o}]:window.location.origin.startsWith("http")?d.servers=[{url:window.location.origin,computedUrl:window.location.origin}]:d.servers=[{url:"http://localhost",computedUrl:"http://localhost"}],$=d.servers;return{specLoadError:!1,isSpecLoading:!1,info:d.info,infoDescriptionHeaders:x,tags:b,components:y,externalDocs:d.externalDocs,securitySchemes:w,servers:$}}function ea(e){const t=Ge.lexer(e).filter((e=>"heading"===e.type&&e.depth<=2));return t||[]}const ta=1,ra=2,aa=3,na=4,ia=e=>(...t)=>({_$litDirective$:e,values:t});class sa{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class oa extends sa{constructor(e){if(super(e),this.et=W,e.type!==ra)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===W||null==e)return this.ft=void 0,this.et=e;if(e===M)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}oa.directiveName="unsafeHTML",oa.resultType=1;const la=ia(oa);var ca=r(764).lW;const da="731DB1C3F7EA533B85E29492D26AA-1234567890-1234567890",pa="4FatVDBJKPAo4JgLLaaQFMUcQPn5CrPRvLlaob9PTYc",ha="rapidoc";function ua(e,t="",r="",a=""){var n,i;const s=null===(n=this.resolvedSpec.securitySchemes)||void 0===n?void 0:n.find((t=>t.securitySchemeId===e));if(!s)return!1;let o="";if("basic"===(null===(i=s.scheme)||void 0===i?void 0:i.toLowerCase()))t&&(o=`Basic ${ca.from(`${t}:${r}`,"utf8").toString("base64")}`);else if(a){var l;s.value=a,o=`${"bearer"===(null===(l=s.scheme)||void 0===l?void 0:l.toLowerCase())?"Bearer ":""}${a}`}return!!o&&(s.finalKeyValue=o,this.requestUpdate(),!0)}function ma(){var e;null===(e=this.resolvedSpec.securitySchemes)||void 0===e||e.forEach((e=>{e.user="",e.password="",e.value="",e.finalKeyValue=""})),this.requestUpdate()}function fa(){return JSON.parse(localStorage.getItem(ha))||{}}function ga(e){localStorage.setItem(ha,JSON.stringify(e))}function va(){const e=fa.call(this);Object.values(e).forEach((e=>{ua.call(this,e.securitySchemeId,e.username,e.password,e.value)}))}function ba(e){let t="";const r=this.resolvedSpec.securitySchemes.find((t=>t.securitySchemeId===e));if(r){const a=this.shadowRoot.getElementById(`security-scheme-${e}`);if(a){if(r.type&&r.scheme&&"http"===r.type&&"basic"===r.scheme.toLowerCase()){const t=a.querySelector(".api-key-user").value.trim(),r=a.querySelector(".api-key-password").value.trim();ua.call(this,e,t,r)}else t=a.querySelector(".api-key-input").value.trim(),ua.call(this,e,"","",t);if("true"===this.persistAuth){const t=fa.call(this);t[e]=r,ga.call(this,t)}}}}function ya(e,t,r="Bearer"){const a=this.resolvedSpec.securitySchemes.find((t=>t.securitySchemeId===e));a.finalKeyValue=`${"bearer"===r.toLowerCase()?"Bearer":"mac"===r.toLowerCase()?"MAC":r} ${t}`,this.requestUpdate()}async function xa(e,t,r,a,n,i,s,o,l="header",c=null,d=null,p=null){const h=o?o.querySelector(".oauth-resp-display"):void 0,u=new URLSearchParams,m=new Headers;u.append("grant_type",n),"authorization_code"===n&&(u.append("client_id",t),u.append("client_secret",r)),"client_credentials"!==n&&"password"!==n&&u.append("redirect_uri",a),i&&(u.append("code",i),u.append("code_verifier",da)),"header"===l?m.set("Authorization",`Basic ${ca.from(`${t}:${r}`,"utf8").toString("base64")}`):"authorization_code"!==n&&(u.append("client_id",t),u.append("client_secret",r)),"password"===n&&(u.append("username",d),u.append("password",p)),c&&u.append("scope",c);try{const t=await fetch(e,{method:"POST",headers:m,body:u}),r=await t.json();if(!t.ok)return h&&(h.innerHTML=`<span style="color:var(--red)">${r.error_description||r.error_description||"Unable to get access token"}</span>`),!1;if(r.token_type&&r.access_token)return ya.call(this,s,r.access_token,r.token_type),h&&(h.innerHTML='<span style="color:var(--green)">Access Token Received</span>'),!0}catch(e){return h&&(h.innerHTML='<span style="color:var(--red)">Failed to get access token</span>'),!1}}async function wa(e,t,r,a,n,i,s,o,l,c){sessionStorage.removeItem("winMessageEventActive"),t.close(),e.data.fake||(e.data||console.warn("RapiDoc: Received no data with authorization message"),e.data.error&&console.warn("RapiDoc: Error while receiving data"),e.data&&("code"===e.data.responseType?xa.call(this,r,a,n,i,s,e.data.code,l,c,o):"token"===e.data.responseType&&ya.call(this,l,e.data.access_token,e.data.token_type)))}async function $a(e,t,r,a,n){const i=n.target.closest(".oauth-flow"),s=i.querySelector(".oauth-client-id")?i.querySelector(".oauth-client-id").value.trim():"",o=i.querySelector(".oauth-client-secret")?i.querySelector(".oauth-client-secret").value.trim():"",l=i.querySelector(".api-key-user")?i.querySelector(".api-key-user").value.trim():"",c=i.querySelector(".api-key-password")?i.querySelector(".api-key-password").value.trim():"",d=i.querySelector(".oauth-send-client-secret-in")?i.querySelector(".oauth-send-client-secret-in").value.trim():"header",p=[...i.querySelectorAll(".scope-checkbox:checked")],h=i.querySelector(`#${e}-pkce`),u=`${Math.random().toString(36).slice(2,9)}random${Math.random().toString(36).slice(2,9)}`,m=`${Math.random().toString(36).slice(2,9)}random${Math.random().toString(36).slice(2,9)}`,f=new URL(`${window.location.origin}${window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/"))}/${this.oauthReceiver}`);let g,v="",b="";if([...i.parentNode.querySelectorAll(".oauth-resp-display")].forEach((e=>{e.innerHTML=""})),"authorizationCode"===t||"implicit"===t){const n=new URL(r);"authorizationCode"===t?(v="authorization_code",b="code"):"implicit"===t&&(b="token");const l=new URLSearchParams(n.search),c=p.map((e=>e.value)).join(" ");c&&l.set("scope",c),l.set("client_id",s),l.set("redirect_uri",f.toString()),l.set("response_type",b),l.set("state",u),l.set("nonce",m),h&&h.checked&&(l.set("code_challenge",pa),l.set("code_challenge_method","S256")),l.set("show_dialog",!0),n.search=l.toString(),"true"===sessionStorage.getItem("winMessageEventActive")&&window.postMessage({fake:!0},this),setTimeout((()=>{g=window.open(n.toString()),g?(sessionStorage.setItem("winMessageEventActive","true"),window.addEventListener("message",(t=>wa.call(this,t,g,a,s,o,f.toString(),v,d,e,i)),{once:!0})):console.error(`RapiDoc: Unable to open ${n.toString()} in a new window`)}),10)}else if("clientCredentials"===t){v="client_credentials";const t=p.map((e=>e.value)).join(" ");xa.call(this,a,s,o,f.toString(),v,"",e,i,d,t)}else if("password"===t){v="password";const t=p.map((e=>e.value)).join(" ");xa.call(this,a,s,o,f.toString(),v,"",e,i,d,t,l,c)}}function ka(e,t,r,a,n,i=[],s="header",o=void 0){let{authorizationUrl:l,tokenUrl:c,refreshUrl:d}=n;const p=n["x-pkce-only"]||!1,h=e=>e.indexOf("://")>0||0===e.indexOf("//"),u=new URL(this.selectedServer.computedUrl).origin;let m;return d&&!h(d)&&(d=`${u}/${d.replace(/^\//,"")}`),c&&!h(c)&&(c=`${u}/${c.replace(/^\//,"")}`),l&&!h(l)&&(l=`${u}/${l.replace(/^\//,"")}`),m="authorizationCode"===e?"Authorization Code Flow":"clientCredentials"===e?"Client Credentials Flow":"implicit"===e?"Implicit Flow":"password"===e?"Password Flow":e,H`
    <div class="oauth-flow ${e}" style="padding: 12px 0; margin-bottom:12px;">
      <div class="tiny-title upper" style="margin-bottom:8px;">${m}</div>
      ${l?H`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Auth URL</span> <span class="mono-font"> ${l} </span></div>`:""}
      ${c?H`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Token URL</span> <span class="mono-font">${c}</span></div>`:""}
      ${d?H`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Refresh URL</span> <span class="mono-font">${d}</span></div>`:""}
      ${"authorizationCode"===e||"clientCredentials"===e||"implicit"===e||"password"===e?H`
          ${n.scopes?H`
              <span> Scopes </span>
              <div class= "oauth-scopes" part="section-auth-scopes" style = "width:100%; display:flex; flex-direction:column; flex-wrap:wrap; margin:0 0 10px 24px">
                ${Object.entries(n.scopes).map(((t,r)=>H`
                  <div class="m-checkbox" style="display:inline-flex; align-items:center">
                    <input type="checkbox" part="checkbox checkbox-auth-scope" class="scope-checkbox" id="${a}${e}${r}" ?checked="${i.includes(t[0])}" value="${t[0]}">
                    <label for="${a}${e}${r}" style="margin-left:5px; cursor:pointer">
                      <span class="mono-font">${t[0]}</span>
                        ${t[0]!==t[1]?` - ${t[1]||""}`:""}
                    </label>
                  </div>
                `))}
              </div>
            `:""}
          ${"password"===e?H`
              <div style="margin:5px 0">
                <input type="text" value = "" placeholder="username" spellcheck="false" class="oauth2 ${e} ${a} api-key-user" part="textbox textbox-username">
                <input type="password" value = "" placeholder="password" spellcheck="false" class="oauth2 ${e} ${a} api-key-password" style = "margin:0 5px;" part="textbox textbox-password">
              </div>`:""}
          <div>
            ${"authorizationCode"===e?H`
                <div style="margin: 16px 0 4px">
                  <input type="checkbox" part="checkbox checkbox-auth-scope" id="${a}-pkce" checked ?disabled=${p}>
                  <label for="${a}-pkce" style="margin:0 16px 0 4px; line-height:24px; cursor:pointer">
                   Send Proof Key for Code Exchange (PKCE)
                  </label>
                </div>
              `:""}
            <input type="text" part="textbox textbox-auth-client-id" value = "${t||""}" placeholder="client-id" spellcheck="false" class="oauth2 ${e} ${a} oauth-client-id">
            ${"authorizationCode"===e||"clientCredentials"===e||"password"===e?H`
                <input
                  type="password" part="textbox textbox-auth-client-secret"
                  value = "${r||""}" placeholder="client-secret" spellcheck="false"
                  class="oauth2 ${e} ${a}
                  oauth-client-secret"
                  style = "margin:0 5px;${p?"display:none;":""}"
                >
                <select style="margin-right:5px;${p?"display:none;":""}" class="${e} ${a} oauth-send-client-secret-in">
                   ${!o||o.includes("header")?H`<option value = 'header' .selected = ${"header"===s} > Authorization Header </option>`:""}
                   ${!o||o.includes("request-body")?H` <option value = 'request-body' .selected = ${"request-body"===s}> Request Body </option>`:""}
                </select>`:""}
            ${"authorizationCode"===e||"clientCredentials"===e||"implicit"===e||"password"===e?H`
                <button class="m-btn thin-border" part="btn btn-outline"
                  @click="${t=>{$a.call(this,a,e,l,c,t)}}"
                > GET TOKEN </button>`:""}
          </div>
          <div class="oauth-resp-display red-text small-font-size"></div>
          `:""}
    </div>
  `}function Sa(e){var t;const r=null===(t=this.resolvedSpec.securitySchemes)||void 0===t?void 0:t.find((t=>t.securitySchemeId===e));if(r.user="",r.password="",r.value="",r.finalKeyValue="","true"===this.persistAuth){const e=fa.call(this);delete e[r.securitySchemeId],ga.call(this,e)}this.requestUpdate()}function Aa(){var e;if(!this.resolvedSpec)return"";const t=null===(e=this.resolvedSpec.securitySchemes)||void 0===e?void 0:e.filter((e=>e.finalKeyValue));return t?H`
  <section id='auth' part="section-auth" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class = 'observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap "}'>
    <div class='sub-title regular-font'> AUTHENTICATION </div>

    <div class="small-font-size" style="display:flex; align-items: center; min-height:30px">
      ${t.length>0?H`
          <div class="blue-text"> ${t.length} API key applied </div>
          <div style="flex:1"></div>
          <button class="m-btn thin-border" part="btn btn-outline" @click=${()=>{ma.call(this)}}>CLEAR ALL API KEYS</button>`:H`<div class="red-text">No API key applied</div>`}
    </div>
    ${this.resolvedSpec.securitySchemes&&this.resolvedSpec.securitySchemes.length>0?H`
        <table role="presentation" id="auth-table" class='m-table padded-12' style="width:100%;">
          ${this.resolvedSpec.securitySchemes.map((e=>H`
            <tr id="security-scheme-${e.securitySchemeId}" class="${e.type.toLowerCase()}">
              <td style="max-width:500px; overflow-wrap: break-word;">
                <div style="line-height:28px; margin-bottom:5px;">
                  <span style="font-weight:bold; font-size:var(--font-size-regular)">${e.typeDisplay}</span>
                  ${e.finalKeyValue?H`
                      <span class='blue-text'>  ${e.finalKeyValue?"Key Applied":""} </span>
                      <button class="m-btn thin-border small" part="btn btn-outline" @click=${()=>{Sa.call(this,e.securitySchemeId)}}>REMOVE</button>
                      `:""}
                </div>
                ${e.description?H`
                    <div class="m-markdown">
                      ${la(Ge(e.description||""))}
                    </div>`:""}

                ${"apikey"===e.type.toLowerCase()||"http"===e.type.toLowerCase()&&"bearer"===e.scheme.toLowerCase()?H`
                    <div style="margin-bottom:5px">
                      ${"apikey"===e.type.toLowerCase()?H`Send <code>${e.name}</code> in <code>${e.in}</code>`:H`Send <code>Authorization</code> in <code>header</code> containing the word <code>Bearer</code> followed by a space and a Token String.`}
                    </div>
                    <div style="max-height:28px;">
                      ${"cookie"!==e.in?H`
                          <input type = "text" value = "${e.value}" class="${e.type} ${e.securitySchemeId} api-key-input" placeholder = "api-token" spellcheck = "false">
                          <button class="m-btn thin-border" style = "margin-left:5px;"
                            part = "btn btn-outline"
                            @click="${t=>{ba.call(this,e.securitySchemeId,t)}}">
                            ${e.finalKeyValue?"UPDATE":"SET"}
                          </button>`:H`<span class="gray-text" style="font-size::var(--font-size-small)"> cookies cannot be set from here</span>`}
                    </div>`:""}
                ${"http"===e.type.toLowerCase()&&"basic"===e.scheme.toLowerCase()?H`
                    <div style="margin-bottom:5px">
                      Send <code>Authorization</code> in <code>header</code> containing the word <code>Basic</code> followed by a space and a base64 encoded string of <code>username:password</code>.
                    </div>
                    <div>
                      <input type="text" value = "${e.user}" placeholder="username" spellcheck="false" class="${e.type} ${e.securitySchemeId} api-key-user" style="width:100px">
                      <input type="password" value = "${e.password}" placeholder="password" spellcheck="false" class="${e.type} ${e.securitySchemeId} api-key-password" style = "width:100px; margin:0 5px;">
                      <button class="m-btn thin-border"
                        @click="${t=>{ba.call(this,e.securitySchemeId,t)}}"
                        part = "btn btn-outline"
                      >
                        ${e.finalKeyValue?"UPDATE":"SET"}
                      </button>
                    </div>`:""}
              </td>
            </tr>
            ${"oauth2"===e.type.toLowerCase()?H`
                <tr>
                  <td style="border:none; padding-left:48px">
                    ${Object.keys(e.flows).map((t=>ka.call(this,t,e.flows[t]["x-client-id"]||e["x-client-id"]||"",e.flows[t]["x-client-secret"]||e["x-client-secret"]||"",e.securitySchemeId,e.flows[t],e.flows[t]["x-default-scopes"]||e["x-default-scopes"],e.flows[t]["x-receive-token-in"]||e["x-receive-token-in"],e.flows[t]["x-receive-token-in-options"]||e["x-receive-token-in-options"])))}
                  </td>
                </tr>
                `:""}
          `))}
        </table>`:""}
    <slot name="auth"></slot>
  </section>
`:void 0}function Ea(e){if(this.resolvedSpec.securitySchemes&&e){const t=[];return Array.isArray(e)?0===e.length?"":(e.forEach((e=>{const r=[],a=[];0===Object.keys(e).length?t.push({securityTypes:"None",securityDefs:[]}):(Object.keys(e).forEach((t=>{let n="";const i=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===t));e[t]&&Array.isArray(e[t])&&(n=e[t].join(", ")),i&&(a.push(i.typeDisplay),r.push({...i,scopes:n}))})),t.push({securityTypes:a.length>1?`${a[0]} + ${a.length-1} more`:a[0],securityDefs:r}))})),H`<div style="position:absolute; top:3px; right:2px; font-size:var(--font-size-small); line-height: 1.5;">
      <div style="position:relative; display:flex; min-width:350px; max-width:700px; justify-content: flex-end;">
        <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" style="stroke:var(--fg3)"> <rect x="5" y="11" width="14" height="10" rx="2" /> <circle cx="12" cy="16" r="1" /> <path d="M8 11v-4a4 4 0 0 1 8 0v4" /></svg>
          ${t.map(((e,t)=>H`
          ${e.securityTypes?H`
              ${0!==t?H`<div style="padding:3px 4px;"> OR </div>`:""}
              <div class="tooltip">
                <div style = "padding:2px 4px; white-space:nowrap; text-overflow:ellipsis;max-width:150px; overflow:hidden;">
                  ${"true"===this.updateRoute&&"true"===this.allowAuthentication?H`<a part="anchor anchor-operation-security" href="#auth"> ${e.securityTypes} </a>`:H`${e.securityTypes}`}
                </div>
                <div class="tooltip-text" style="position:absolute; color: var(--fg); top:26px; right:0; border:1px solid var(--border-color);padding:2px 4px; display:block;">
                  ${e.securityDefs.length>1?H`<div>Requires <b>all</b> of the following </div>`:""}
                  <div style="padding-left: 8px">
                    ${e.securityDefs.map(((t,r)=>{const a=H`${""!==t.scopes?H`
                          <div>
                            <b>Required scopes:</b>
                            <br/>
                            <div style="margin-left:8px">
                              ${t.scopes.split(",").map(((e,t)=>H`${0===t?"":"┃"}<span>${e}</span>`))}
                            </div>
                          </div>`:""}`;return H`
                      ${"oauth2"===t.type?H`
                          <div>
                            ${e.securityDefs.length>1?H`<b>${r+1}.</b> &nbsp;`:"Needs"}
                            OAuth Token <span style="font-family:var(--font-mono); color:var(--primary-color);">${t.securitySchemeId}</span> in <b>Authorization header</b>
                            ${a}
                          </div>`:"http"===t.type?H`
                            <div>
                              ${e.securityDefs.length>1?H`<b>${r+1}.</b> &nbsp;`:H`Requires`}
                              ${"basic"===t.scheme?"Base 64 encoded username:password":"Bearer Token"} in <b>Authorization header</b>
                              ${a}
                            </div>`:H`
                            <div>
                              ${e.securityDefs.length>1?H`<b>${r+1}.</b> &nbsp;`:H`Requires`}
                              Token in <b>${t.name} ${t.in}</b>
                              ${a}
                            </div>`}`}))}
                  </div>
                </div>
              </div>
            `:""}
        `))}
      </div>
    `):""}return""}function Ta(e){return H`
  <section class="table-title" style="margin-top:24px;">CODE SAMPLES</div>
  <div class="tab-panel col"
    @click="${e=>{if(!e.target.classList.contains("tab-btn"))return;const t=e.target.dataset.tab,r=[...e.currentTarget.querySelectorAll(".tab-btn")],a=[...e.currentTarget.querySelectorAll(".tab-content")];r.forEach((e=>e.classList[e.dataset.tab===t?"add":"remove"]("active"))),a.forEach((e=>{e.style.display=e.dataset.tab===t?"block":"none"}))}}">
    <div class="tab-buttons row" style="width:100; overflow">
      ${e.map(((e,t)=>H`<button class="tab-btn ${0===t?"active":""}" data-tab = '${e.lang}${t}'> ${e.label||e.lang} </button>`))}
    </div>
    ${e.map(((e,t)=>{var r,a,n;return H`
      <div class="tab-content m-markdown" style= "display:${0===t?"block":"none"}" data-tab = '${e.lang}${t}'>
        <button class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${t=>{dt(e.source,t)}}'> Copy </button>
        <pre><code class="language">${Ye().languages[null===(r=e.lang)||void 0===r?void 0:r.toLowerCase()]?la(Ye().highlight(e.source,Ye().languages[null===(a=e.lang)||void 0===a?void 0:a.toLowerCase()],null===(n=e.lang)||void 0===n?void 0:n.toLowerCase())):e.source}</code></pre>
      </div>`}))}
  </div>  
  </section>`}function Ca(e){return H`
    <div class="req-res-title" style="margin-top:12px">CALLBACKS</div>
    ${Object.entries(e).map((e=>H`
      <div class="tiny-title" style="padding: 12px; border:1px solid var(--light-border-color)"> 
        ${e[0]}
        ${Object.entries(e[1]).map((e=>H`
          <div class="mono-font small-font-size" style="display:flex; margin-left:16px;">
            <div style="width:100%"> 
              ${Object.entries(e[1]).map((t=>{var r,a,n;return H`
                <div>
                  <div style="margin-top:12px;">
                    <div class="method method-fg ${t[0]}" style="width:70px; border:none; margin:0; padding:0; line-height:20px; vertical-align: baseline;text-align:left"> 
                      <span style="font-size:20px;"> &#x2944; </span> 
                      ${t[0]} 
                    </div>
                    <span style="line-height:20px; vertical-align: baseline;">${e[0]} </span>
                  </div>  
                  <div class='expanded-req-resp-container'>
                    <api-request
                      class = "${this.renderStyle}-mode callback"  
                      style = "width:100%;"
                      callback = "true"
                      method = "${t[0]||""}", 
                      path = "${e[0]||""}" 
                      .parameters = "${(null===(r=t[1])||void 0===r?void 0:r.parameters)||""}" 
                      .request_body = "${(null===(a=t[1])||void 0===a?void 0:a.requestBody)||""}"
                      fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
                      allow-try = "false"
                      render-style="${this.renderStyle}" 
                      schema-style = "${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      schema-hide-read-only = "false"
                      schema-hide-write-only = "${"never"===this.schemaHideWriteOnly?"false":"true"}"
                      fetch-credentials = "${this.fetchCredentials}"
                      exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                        file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                        anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                      > </api-request>

                    <api-response
                      style = "width:100%;"
                      class = "${this.renderStyle}-mode"
                      callback = "true"
                      .responses="${null===(n=t[1])||void 0===n?void 0:n.responses}"
                      render-style="${this.renderStyle}"
                      schema-style="${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      schema-hide-read-only = "${"never"===this.schemaHideReadOnly?"false":"true"}"
                      schema-hide-write-only = "false"
                      exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
                      schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                    > </api-response>
                  </div>
                </div>  
              `}))}
            </div>  
          </div>  
        `))}
      </div>  
    `))}
  `}const Oa={},Ia=ia(class extends sa{constructor(){super(...arguments),this.st=Oa}render(e,t){return t()}update(e,[t,r]){if(Array.isArray(t)){if(Array.isArray(this.st)&&this.st.length===t.length&&t.every(((e,t)=>e===this.st[t])))return M}else if(this.st===t)return M;return this.st=Array.isArray(t)?Array.from(t):t,this.render(t,r)}}),{I:_a}=ie,Ra={},La=ia(class extends sa{constructor(e){if(super(e),e.type!==aa&&e.type!==ta&&e.type!==na)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===M||t===W)return t;const r=e.element,a=e.name;if(e.type===aa){if(t===r[a])return M}else if(e.type===na){if(!!t===r.hasAttribute(a))return M}else if(e.type===ta&&r.getAttribute(a)===t+"")return M;return((e,t=Ra)=>{e._$AH=t})(e),t}});var Ba=r(131),za=r.n(Ba);const Ua=c`
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
`;function ja(e){if(void 0===e)return"";if(null===e)return"null";if(""===e)return"∅";if("boolean"==typeof e||"number"==typeof e)return`${e}`;if(Array.isArray(e))return e.map((e=>null===e?"null":""===e?"∅":e.toString().replace(/^ +| +$/g,(e=>"●".repeat(e.length)))||"")).join(", ");if("object"==typeof e){const t=Object.keys(e);return`{ ${t[0]}:${e[t[0]]}${t.length>1?",":""} ... }`}return e.toString().replace(/^ +| +$/g,(e=>"●".repeat(e.length)))||""}function Da(e){if(!e)return;let t="",r="";if(e.$ref){const r=e.$ref.lastIndexOf("/");t=`{recursive: ${e.$ref.substring(r+1)}} `}else e.type?(t=Array.isArray(e.type)?e.type.join(2===e.length?" or ":"┃"):e.type,(e.format||e.enum||e.const)&&(t=t.replace("string",e.enum?"enum":e.const?"const":e.format)),e.nullable&&(t+="┃null")):t=e.const?"const":0===Object.keys(e).length?"any":"{missing-type-info}";const a={type:t,format:e.format||"",pattern:e.pattern&&!e.enum?e.pattern:"",readOrWriteOnly:e.readOnly?"🆁":e.writeOnly?"🆆":"",deprecated:e.deprecated?"❌":"",examples:e.examples||e.example,default:ja(e.default),description:e.description||"",constrain:"",allowedValues:"",arrayType:"",html:""};if("{recursive}"===a.type?a.description=e.$ref.substring(e.$ref.lastIndexOf("/")+1):"{missing-type-info}"!==a.type&&"any"!==a.type||(a.description=a.description||""),a.allowedValues=e.const?e.const:Array.isArray(e.enum)?e.enum.map((e=>ja(e))).join("┃"):"","array"===t&&e.items){var n,i;const t=null===(n=e.items)||void 0===n?void 0:n.type,r=ja(e.items.default);a.arrayType=`${e.type} of ${Array.isArray(t)?t.join(""):t}`,a.default=r,a.allowedValues=e.items.const?e.const:Array.isArray(null===(i=e.items)||void 0===i?void 0:i.enum)?e.items.enum.map((e=>ja(e))).join("┃"):""}return t.match(/integer|number/g)&&(void 0===e.minimum&&void 0===e.exclusiveMinimum||(r+=void 0!==e.minimum?`Min ${e.minimum}`:`More than ${e.exclusiveMinimum}`),void 0===e.maximum&&void 0===e.exclusiveMaximum||(r+=void 0!==e.maximum?`${r?"┃":""}Max ${e.maximum}`:`${r?"┃":""}Less than ${e.exclusiveMaximum}`),void 0!==e.multipleOf&&(r+=`${r?"┃":""} multiple of ${e.multipleOf}`)),t.match(/string/g)&&(void 0!==e.minLength&&void 0!==e.maxLength?r+=`${r?"┃":""}${e.minLength} to ${e.maxLength} chars`:void 0!==e.minLength?r+=`${r?"┃":""}Min ${e.minLength} chars`:void 0!==e.maxLength&&(r+=`Max ${r?"┃":""}${e.maxLength} chars`)),a.constrain=r,a.html=`${a.type}~|~${a.readOrWriteOnly}~|~${a.constrain}~|~${a.default}~|~${a.allowedValues}~|~${a.pattern}~|~${a.description}~|~${e.title||""}~|~${a.deprecated?"deprecated":""}`,a}function Fa(e){return"boolean"==typeof e||"number"==typeof e?{Example:{value:`${e}`}}:""===e?{Example:{value:""}}:e?{Example:{value:e}}:e}function Pa(e,t="string"){if(!e)return{exampleVal:"",exampleList:[]};if(e.constructor===Object){const t=Object.values(e).filter((e=>!1!==e["x-example-show-value"])).map((e=>({value:"boolean"==typeof e.value||"number"==typeof e.value?`${e.value}`:e.value||"",printableValue:ja(e.value),summary:e.summary||"",description:e.description||""})));return{exampleVal:t.length>0?t[0].value:"",exampleList:t}}if(Array.isArray(e)||(e=e?[e]:[]),0===e.length)return{exampleVal:"",exampleList:[]};if("array"===t){const[t]=e,r=e.map((e=>({value:e,printableValue:ja(e)})));return{exampleVal:t,exampleList:r}}const r=e[0].toString(),a=e.map((e=>({value:e.toString(),printableValue:ja(e)})));return{exampleVal:r,exampleList:a}}function Na(e){const t=e.examples?e.examples[0]:null===e.example?null:e.example||void 0;if(""===t)return"";if(null===t)return null;if(0===t)return 0;if(!1===t)return!1;if(t instanceof Date)switch(e.format.toLowerCase()){case"date":return t.toISOString().split("T")[0];case"time":return t.toISOString().split("T")[1];default:return t.toISOString()}if(t)return t;if(0===Object.keys(e).length)return null;if(e.$ref)return e.$ref;if(!1===e.const||0===e.const||null===e.const||""===e.const)return e.const;if(e.const)return e.const;const r=Array.isArray(e.type)?e.type[0]:e.type;if(!r)return"?";if(r.match(/^integer|^number/g)){const t=Number.isNaN(Number(e.multipleOf))?void 0:Number(e.multipleOf),a=Number.isNaN(Number(e.maximum))?void 0:Number(e.maximum),n=Number.isNaN(Number(e.minimum))?Number.isNaN(Number(e.exclusiveMinimum))?a||0:Number(e.exclusiveMinimum)+(r.startsWith("integer")?1:.001):Number(e.minimum);return t?t>=n?t:n%t==0?n:Math.ceil(n/t)*t:n}if(r.match(/^boolean/g))return!1;if(r.match(/^null/g))return null;if(r.match(/^string/g)){if(e.enum)return e.enum[0];if(e.const)return e.const;if(e.pattern)return e.pattern;if(!e.format){const t=Number.isNaN(e.minLength)?void 0:Number(e.minLength),r=Number.isNaN(e.maxLength)?void 0:Number(e.maxLength),a=t||(r>6?6:r||void 0);return a?"A".repeat(a):"string"}{const t=`${Date.now().toString(16)}${Math.random().toString(16)}0`.repeat(16);switch(e.format.toLowerCase()){case"url":case"uri":return"http://example.com";case"date":return new Date(0).toISOString().split("T")[0];case"time":return new Date(0).toISOString().split("T")[1];case"date-time":return new Date(0).toISOString();case"duration":return"P3Y6M4DT12H30M5S";case"email":case"idn-email":return"user@example.com";case"hostname":case"idn-hostname":return"www.example.com";case"ipv4":return"198.51.100.42";case"ipv6":return"2001:0db8:5b96:0000:0000:426f:8e17:642a";case"uuid":return[t.substr(0,8),t.substr(8,4),`4000-8${t.substr(13,3)}`,t.substr(16,12)].join("-");case"byte":return"ZXhhbXBsZQ==";default:return""}}}return"?"}function qa(e,t=1){const r="  ".repeat(t);let a="";if(1===t&&"object"!=typeof e)return`\n${r}${e.toString()}`;for(const n in e){const i=e[n]["::XML_TAG"]||n;let s="";s=Array.isArray(e[n])?i[0]["::XML_TAG"]||`${n}`:i,n.startsWith("::")||(a=Array.isArray(e[n])||"object"==typeof e[n]?`${a}\n${r}<${s}>${qa(e[n],t+1)}\n${r}</${s}>`:`${a}\n${r}<${s}>${e[n].toString()}</${s}>`)}return a}function Ha(e,t){var r,a;if("object"==typeof t&&null!==t){var n,i;if(e.title&&(t["::TITLE"]=e.title),e.description&&(t["::DESCRIPTION"]=e.description),null!==(r=e.xml)&&void 0!==r&&r.name)t["::XML_TAG"]=null===(n=e.xml)||void 0===n?void 0:n.name;if(null!==(a=e.xml)&&void 0!==a&&a.wrapped)t["::XML_WRAP"]=null===(i=e.xml)||void 0===i?void 0:i.wrapped.toString()}}function Ma(e){if("object"==typeof e&&null!==e){delete e["::TITLE"],delete e["::DESCRIPTION"],delete e["::XML_TAG"],delete e["::XML_WRAP"];for(const t in e)Ma(e[t])}}function Wa(e,t,r){for(const a in t)t[a][r]=e}function Va(e,t,r){let a=0;const n={};for(const i in e){for(const s in r)if(n[`example-${a}`]={...e[i]},n[`example-${a}`][t]=r[s],a++,a>=10)break;if(a>=10)break}return n}function Ka(e,t={}){let r={};if(e){if(e.allOf){var a,n;const i={};if(!(1!==e.allOf.length||null!==(a=e.allOf[0])&&void 0!==a&&a.properties||null!==(n=e.allOf[0])&&void 0!==n&&n.items)){if(e.allOf[0].$ref)return"{  }";if(e.allOf[0].readOnly&&t.includeReadOnly){return Na(e.allOf[0])}return}e.allOf.forEach((e=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const r=Ka(e,t);Object.assign(i,r)}else if("array"===e.type||e.items){const r=[Ka(e,t)];Object.assign(i,r)}else{if(!e.type)return"";{const t=`prop${Object.keys(i).length}`;i[t]=Na(e)}}})),r=i}else if(e.oneOf){const a={};if(e.properties)for(const r in e.properties){var i;e.properties[r].properties||null!==(i=e.properties[r].properties)&&void 0!==i&&i.items?a[r]=Ka(e.properties[r],t):a[r]=Na(e.properties[r])}if(e.oneOf.length>0){let n=0;for(const i in e.oneOf){const s=Ka(e.oneOf[i],t);for(const t in s){let o;if(Object.keys(a).length>0){if(null===s[t]||"object"!=typeof s[t])continue;o=Object.assign(s[t],a)}else o=s[t];r[`example-${n}`]=o,Ha(e.oneOf[i],r[`example-${n}`]),n++}}}}else if(e.anyOf){let a;if("object"===e.type||e.properties){a={"example-0":{}};for(const r in e.properties){if(e.example){a=e;break}e.properties[r].deprecated&&!t.includeDeprecated||(e.properties[r].readOnly&&!t.includeReadOnly||e.properties[r].writeOnly&&!t.includeWriteOnly||(a=Va(a,r,Ka(e.properties[r],t))))}}let n=0;for(const i in e.anyOf){const s=Ka(e.anyOf[i],t);for(const t in s){if(void 0!==a)for(const e in a)r[`example-${n}`]={...a[e],...s[t]};else r[`example-${n}`]=s[t];Ha(e.anyOf[i],r[`example-${n}`]),n++}}}else if("object"===e.type||e.properties)if(r["example-0"]={},Ha(e,r["example-0"]),e.example)r["example-0"]=e.example;else for(const a in e.properties){var s,o,l,c,d,p,h;if(null===(s=e.properties[a])||void 0===s||!s.deprecated||t.includeDeprecated)if(null===(o=e.properties[a])||void 0===o||!o.readOnly||t.includeReadOnly)if(null===(l=e.properties[a])||void 0===l||!l.writeOnly||t.includeWriteOnly)if("array"===(null===(c=e.properties[a])||void 0===c?void 0:c.type)||null!==(d=e.properties[a])&&void 0!==d&&d.items)if(e.properties[a].example)Wa(e.properties[a].example,r,a);else if(null!==(p=e.properties[a])&&void 0!==p&&null!==(h=p.items)&&void 0!==h&&h.example)Wa([e.properties[a].items.example],r,a);else{const n=Ka(e.properties[a].items,t);if(t.useXmlTagForProp){var u,m;const t=(null===(u=e.properties[a].xml)||void 0===u?void 0:u.name)||a;if(null!==(m=e.properties[a].xml)&&void 0!==m&&m.wrapped){r=Va(r,t,JSON.parse(`{ "${t}" : { "${t}" : ${JSON.stringify(n["example-0"])} } }`))}else r=Va(r,t,n)}else{const e=[];for(const t in n)e[t]=[n[t]];r=Va(r,a,e)}}else r=Va(r,a,Ka(e.properties[a],t))}else{if("array"!==e.type&&!e.items)return{"example-0":Na(e)};var f;if(e.items||e.example)if(e.example)r["example-0"]=e.example;else if(null!==(f=e.items)&&void 0!==f&&f.example)r["example-0"]=[e.items.example];else{const a=Ka(e.items,t);let n=0;for(const t in a)r[`example-${n}`]=[a[t]],Ha(e.items,r[`example-${n}`]),n++}else r["example-0"]=[]}return r}}function Ga(e,t=0){var r;let a=(e.description||e.title)&&(e.minItems||e.maxItems)?'<span class="descr-expand-toggle">➔</span>':"";if(e.title?a=e.description?`${a} <b>${e.title}:</b> ${e.description}<br/>`:`${a} ${e.title}<br/>`:e.description&&(a=`${a} ${e.description}<br/>`),e.minItems&&(a=`${a} <b>Min Items:</b> ${e.minItems}`),e.maxItems&&(a=`${a} <b>Max Items:</b> ${e.maxItems}`),t>0&&null!==(r=e.items)&&void 0!==r&&r.description){let t="";e.items.minProperties&&(t=`<b>Min Properties:</b> ${e.items.minProperties}`),e.items.maxProperties&&(t=`${t} <b>Max Properties:</b> ${e.items.maxProperties}`),a=`${a} ⮕ ${t} [ ${e.items.description} ] `}return a}function Za(e,t,r=0,a=""){if(e){if(e.allOf){const a={};if(1===e.allOf.length&&!e.allOf[0].properties&&!e.allOf[0].items){return`${Da(e.allOf[0]).html}`}e.allOf.map(((e,t)=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const n=(e.anyOf||e.oneOf)&&t>0?t:"",i=Za(e,{},r+1,n);Object.assign(a,i)}else if("array"===e.type||e.items){const t=Za(e,{},r+1);Object.assign(a,t)}else{if(!e.type)return"";{const t=`prop${Object.keys(a).length}`,r=Da(e);a[t]=`${r.html}`}}})),t=a}else if(e.anyOf||e.oneOf){if(t["::description"]=e.description||"","object"===e.type||e.properties){t["::description"]=e.description||"",t["::type"]="object";for(const a in e.properties)e.required&&e.required.includes(a)?t[`${a}*`]=Za(e.properties[a],{},r+1):t[a]=Za(e.properties[a],{},r+1)}const n={},i=e.anyOf?"anyOf":"oneOf";e[i].forEach(((e,t)=>{if("object"===e.type||e.properties||e.allOf||e.anyOf||e.oneOf){const r=Za(e,{});n[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]=r,n[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]["::readwrite"]="",n["::type"]="xxx-of-option"}else if("array"===e.type||e.items){const r=Za(e,{});n[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]=r,n[`::OPTION~${t+1}${e.title?`~${e.title}`:""}`]["::readwrite"]="",n["::type"]="xxx-of-array"}else{const r=`::OPTION~${t+1}${e.title?`~${e.title}`:""}`;n[r]=`${Da(e).html}`,n["::type"]="xxx-of-option"}})),t[e.anyOf?`::ANY~OF ${a}`:`::ONE~OF ${a}`]=n,t["::type"]="object"}else if(Array.isArray(e.type)){const a=JSON.parse(JSON.stringify(e)),s=[],o=[];let l;var n;if(a.type.forEach((e=>{var t,r;e.match(/integer|number|string|null|boolean/g)?s.push(e):"array"===e&&"string"==typeof(null===(t=a.items)||void 0===t?void 0:t.type)&&null!==(r=a.items)&&void 0!==r&&r.type.match(/integer|number|string|null|boolean/g)?"string"===a.items.type&&a.items.format?s.push(`[${a.items.format}]`):s.push(`[${a.items.type}]`):o.push(e)})),s.length>0)if(a.type=s.join(2===s.length?" or ":"┃"),l=Da(a),0===o.length)return`${(null===(n=l)||void 0===n?void 0:n.html)||""}`;if(o.length>0){var i;t["::type"]="object";const n={"::type":"xxx-of-option"};o.forEach(((t,i)=>{if("null"===t)n[`::OPTION~${i+1}`]="NULL~|~~|~~|~~|~~|~~|~~|~~|~";else if("integer, number, string, boolean,".includes(`${t},`)){a.type=Array.isArray(t)?t.join("┃"):t;const e=Da(a);n[`::OPTION~${i+1}`]=e.html}else if("object"===t){const t={"::title":e.title||"","::description":e.description||"","::type":"object","::deprecated":e.deprecated||!1};for(const a in e.properties)e.required&&e.required.includes(a)?t[`${a}*`]=Za(e.properties[a],{},r+1):t[a]=Za(e.properties[a],{},r+1);n[`::OPTION~${i+1}`]=t}else"array"===t&&(n[`::OPTION~${i+1}`]={"::title":e.title||"","::description":e.description||"","::type":"array","::props":Za(e.items,{},r+1)})})),n[`::OPTION~${o.length+1}`]=(null===(i=l)||void 0===i?void 0:i.html)||"",t["::ONE~OF"]=n}}else if("object"===e.type||e.properties){t["::title"]=e.title||"",t["::description"]=Ga(e,r),t["::type"]="object",(Array.isArray(e.type)&&e.type.includes("null")||e.nullable)&&(t["::dataTypeLabel"]="object or null",t["::nullable"]=!0),t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"";for(const a in e.properties)e.required&&e.required.includes(a)?t[`${a}*`]=Za(e.properties[a],{},r+1):t[a]=Za(e.properties[a],{},r+1);for(const a in e.patternProperties)t[`[pattern: ${a}]`]=Za(e.patternProperties[a],t,r+1);e.additionalProperties&&(t["[any-key]"]=Za(e.additionalProperties,{}))}else{if("array"!==e.type&&!e.items){const t=Da(e);return null!=t&&t.html?`${t.html}`:""}var s;t["::title"]=e.title||"",t["::description"]=Ga(e,r),t["::type"]="array",(Array.isArray(e.type)&&e.type.includes("null")||e.nullable)&&(t["::dataTypeLabel"]="array or null",t["::nullable"]=!0),t["::deprecated"]=e.deprecated||!1,t["::readwrite"]=e.readOnly?"readonly":e.writeOnly?"writeonly":"",null!==(s=e.items)&&void 0!==s&&s.items&&(t["::array-type"]=e.items.items.type),t["::props"]=Za(e.items,{},r+1)}return t}}function Ya(e,t,r="",a="",n=!0,i=!0,s="json",o=!1){const l=[];if(r)for(const e in r){let a="",n="json";if(null!=t&&t.toLowerCase().includes("json")){if("text"===s)a="string"==typeof r[e].value?r[e].value:JSON.stringify(r[e].value,void 0,2),n="text";else if(a=r[e].value,"string"==typeof r[e].value)try{const t=r[e].value;a=JSON.parse(t),n="json"}catch(t){n="text",a=r[e].value}}else a=r[e].value,n="text";l.push({exampleId:e,exampleSummary:r[e].summary||e,exampleDescription:r[e].description||"",exampleType:t,exampleValue:a,exampleFormat:n})}else if(a){let e="",r="json";if(null!=t&&t.toLowerCase().includes("json")){if("text"===s)e="string"==typeof a?a:JSON.stringify(a,void 0,2),r="text";else if("object"==typeof a)e=a,r="json";else if("string"==typeof a)try{e=JSON.parse(a),r="json"}catch(t){r="text",e=a}}else e=a,r="text";l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e,exampleFormat:r})}if(0===l.length||!0===o)if(e)if(e.example)l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:e.example,exampleFormat:null!=t&&t.toLowerCase().includes("json")&&"object"==typeof e.example?"json":"text"});else if(null!=t&&t.toLowerCase().includes("json")||null!=t&&t.toLowerCase().includes("text")||null!=t&&t.toLowerCase().includes("*/*")||null!=t&&t.toLowerCase().includes("xml")){let r="",a="",o="",p="";var c,d;if(null!=t&&t.toLowerCase().includes("xml"))r=null!==(c=e.xml)&&void 0!==c&&c.name?`<${e.xml.name} ${e.xml.namespace?`xmlns="${e.xml.namespace}"`:""}>`:"<root>",a=null!==(d=e.xml)&&void 0!==d&&d.name?`</${e.xml.name}>`:"</root>",o="text";else o=s;const h=Ka(e,{includeReadOnly:n,includeWriteOnly:i,deprecated:!0,useXmlTagForProp:null==t?void 0:t.toLowerCase().includes("xml")});let u=0;for(const e in h){if(!h[e])continue;const n=h[e]["::TITLE"]||"Example "+ ++u,i=h[e]["::DESCRIPTION"]||"";null!=t&&t.toLowerCase().includes("xml")?p=`<?xml version="1.0" encoding="UTF-8"?>\n${r}${qa(h[e],1)}\n${a}`:(Ma(h[e]),p="text"===s?JSON.stringify(h[e],null,2):h[e]),l.push({exampleId:e,exampleSummary:n,exampleDescription:i,exampleType:t,exampleFormat:o,exampleValue:p})}}else null!=t&&t.toLowerCase().includes("jose")?l.push({exampleId:"Example",exampleSummary:"Base64 Encoded",exampleDescription:"",exampleType:t,exampleValue:e.pattern||"bXJpbg==",exampleFormat:"text"}):l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});else l.push({exampleId:"Example",exampleSummary:"",exampleDescription:"",exampleType:t,exampleValue:"",exampleFormat:"text"});return l}function Ja(e){return"application/json"===e?"json":"application/xml"===e?"xml":null}function Xa(e){if(e.schema)return[e.schema,null,null];if(e.content)for(const t of Object.keys(e.content))if(e.content[t].schema)return[e.content[t].schema,Ja(t),e.content[t]];return[null,null,null]}customElements.define("json-tree",class extends ce{static get properties(){return{data:{type:Object},renderStyle:{type:String,attribute:"render-style"}}}static get styles(){return[Je,Ua,Xe,c`
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
      }`,st]}render(){return H`
      <div class = "json-tree"  @click='${e=>{e.target.classList.contains("btn-copy")?dt(JSON.stringify(this.data,null,2),e):this.toggleExpand(e)}}'>
        <div class='toolbar'> 
          <button class="toolbar-btn btn-copy" part="btn btn-fill btn-copy"> Copy </button>
        </div>
          ${this.generateTree(this.data,!0)}
      </div>  
    `}generateTree(e,t=!1){if(null===e)return H`<div class="null" style="display:inline;">null</div>`;if("object"==typeof e&&e instanceof Date==!1){const r=Array.isArray(e)?"array":"pure_object";return 0===Object.keys(e).length?H`${Array.isArray(e)?"[ ],":"{ },"}`:H`
      <div class="open-bracket expanded ${"array"===r?"array":"object"}" > ${"array"===r?"[":"{"}</div>
      <div class="inside-bracket">
        ${Object.keys(e).map(((t,a,n)=>H`
          <div class="item"> 
            ${"pure_object"===r?H`"${t}":`:""}
            ${this.generateTree(e[t],a===n.length-1)}
          </div>`))}
      </div>
      <div class="close-bracket">${"array"===r?"]":"}"}${t?"":","}</div>
      `}return"string"==typeof e||e instanceof Date?H`<span class="${typeof e}">"${e}"</span>${t?"":","}`:H`<span class="${typeof e}">${e}</span>${t?"":","}`}toggleExpand(e){const t=e.target;e.target.classList.contains("open-bracket")&&(t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array")?"[...]":"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array")?"[":"{"))}});const Qa=c`

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
`;customElements.define("schema-tree",class extends ce{static get properties(){return{data:{type:Object},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[Je,Qa,Ua,c`
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
      }`,st]}render(){var e,t,r;return H`
      <div class="tree ${"true"===this.schemaDescriptionExpanded?"expanded-all-descr":"collapsed-all-descr"}" @click="${e=>this.handleAllEvents(e)}">
        <div class="toolbar">
          <div class="toolbar-item schema-root-type ${(null===(e=this.data)||void 0===e?void 0:e["::type"])||""} "> ${(null===(t=this.data)||void 0===t?void 0:t["::type"])||""} </div>
          ${"true"===this.allowSchemaDescriptionExpandToggle?H`
              <div style="flex:1"></div>
              <div part="schema-toolbar-item schema-multiline-toggle" class='toolbar-item schema-multiline-toggle'> 
                ${"true"===this.schemaDescriptionExpanded?"Single line description":"Multiline description"}
              </div>`:""}
        </div>
        <span part="schema-description" class='m-markdown'> ${la(Ge((null===(r=this.data)||void 0===r?void 0:r["::description"])||""))}</span>
        ${this.data?H`
            ${this.generateTree("array"===this.data["::type"]?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"]||"")}`:H`<span class='mono-font' style='color:var(--red)'> Schema not found </span>`}
      </div>  
    `}generateTree(e,t="object",r="",a="",n="",i=0,s=0,o=""){var l;if("true"===this.schemaHideReadOnly){if("array"===t&&"readonly"===o)return;if("readonly"===(null==e?void 0:e["::readwrite"]))return}if("true"===this.schemaHideWriteOnly){if("array"===t&&"writeonly"===o)return;if("writeonly"===(null==e?void 0:e["::readwrite"]))return}if(!e)return H`<div class="null" style="display:inline;">
        <span class="key-label xxx-of-key"> ${a.replace("::OPTION~","")}</span>
        ${"array"===t?H`<span class='mono-font'> [ ] </span>`:"object"===t?H`<span class='mono-font'> { } </span>`:H`<span class='mono-font'> schema undefined </span>`}
      </div>`;if(0===Object.keys(e).length)return H`<span class="key object">${a}:{ }</span>`;let c="",d="";if(a.startsWith("::ONE~OF")||a.startsWith("::ANY~OF"))c=a.replace("::","").replace("~"," ");else if(a.startsWith("::OPTION")){const e=a.split("~");[,c,d]=e}else c=a;const p=400-12*s;let h="",u="";const m=null!==(l=e["::type"])&&void 0!==l&&l.startsWith("xxx-of")?i:i+1,f="xxx-of-option"===t||"xxx-of-option"===e["::type"]||a.startsWith("::OPTION")?s:s+1;if("object"===e["::type"])"array"===t?(h=i<this.schemaExpandLevel?H`<span class="open-bracket array-of-object" >[{</span>`:H`<span class="open-bracket array-of-object">[{...}]</span>`,u="}]"):(h=i<this.schemaExpandLevel?H`<span class="open-bracket object">${e["::nullable"]?"null┃":""}{</span>`:H`<span class="open-bracket object">${e["::nullable"]?"null┃":""}{...}</span>`,u="}");else if("array"===e["::type"])if("array"===t){const e="object"!==r?r:"";h=i<this.schemaExpandLevel?H`<span class="open-bracket array-of-array" data-array-type="${e}">[[ ${e} </span>`:H`<span class="open-bracket array-of-array"  data-array-type="${e}">[[...]]</span>`,u="]]"}else h=i<this.schemaExpandLevel?H`<span class="open-bracket array">[</span>`:H`<span class="open-bracket array">[...]</span>`,u="]";var g;if("object"==typeof e)return H`
        <div class="tr ${i<this.schemaExpandLevel||null!==(g=e["::type"])&&void 0!==g&&g.startsWith("xxx-of")?"expanded":"collapsed"} ${e["::type"]||"no-type-info"}${e["::nullable"]?" nullable":""}" title="${e["::deprecated"]?"Deprecated":""}">
          <div class="td key ${e["::deprecated"]?"deprecated":""}" style='min-width:${p}px'>
            ${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]||a.startsWith("::OPTION")?H`<span class='key-label xxx-of-key'> ${c}</span><span class="xxx-of-descr">${d}</span>`:"::props"===c||"::ARRAY~OF"===c?"":i>0?H`<span class="key-label" title="${"readonly"===o?"Read-Only":"writeonly"===o?"Write-Only":""}">
                      ${e["::deprecated"]?"✗":""}
                      ${c.replace(/\*$/,"")}${c.endsWith("*")?H`<span style="color:var(--red)">*</span>`:""}${"readonly"===o?H` 🆁`:"writeonly"===o?H` 🆆`:o}:
                    </span>`:""}
            ${h}
          </div>
          <div class='td key-descr m-markdown-small'>${la(Ge(n||""))}</div>
        </div>
        <div class='inside-bracket ${e["::type"]||"no-type-info"}' style='padding-left:${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]?0:12}px;'>
          ${Array.isArray(e)&&e[0]?H`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",m,f,e[0]["::readwrite"])}`:H`
              ${Object.keys(e).map((t=>{var r;return H`
                ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite","::dataTypeLabel","::nullable"].includes(t)?"array"===e[t]["::type"]||"object"===e[t]["::type"]?H`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],m,f,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`:"":H`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,(null===(r=e[t])||void 0===r?void 0:r["::description"])||"",m,f,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`}
              `}))}
            `}
        </div>
        ${e["::type"]&&e["::type"].includes("xxx-of")?"":H`<div class='close-bracket'> ${u} </div>`}
      `;const[v,b,y,x,w,$,k,S,A]=e.split("~|~");if("🆁"===b&&"true"===this.schemaHideReadOnly)return;if("🆆"===b&&"true"===this.schemaHideWriteOnly)return;const E=v.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase(),T=""+(y||x||w||$?`<span class="descr-expand-toggle ${"true"===this.schemaDescriptionExpanded?"expanded-descr":""}">➔</span>`:"");let C="",O="";return"array"===t?"readonly"===o?(C="🆁",O="Read-Only"):"writeonly"===o&&(C="🆆",O="Write-Only"):"🆁"===b?(C="🆁",O="Read-Only"):"🆆"===b&&(C="🆆",O="Write-Only"),H`
      <div class = "tr primitive" title="${A?"Deprecated":""}">
        <div class="td key ${A}" style='min-width:${p}px'>
          ${A?H`<span style='color:var(--red);'>✗</span>`:""}
          ${c.endsWith("*")?H`<span class="key-label">${c.substring(0,c.length-1)}</span><span style='color:var(--red);'>*</span>:`:a.startsWith("::OPTION")?H`<span class='key-label xxx-of-key'>${c}</span><span class="xxx-of-descr">${d}</span>`:H`<span class="key-label">${c}:</span>`}
          <span class="${E}" title="${O}"> 
            ${"array"===t?`[${v}]`:`${v}`}
            ${C}
          </span>
        </div>
        <div class='td key-descr'>
          ${n||S||k?H`${H`<span class="m-markdown-small">
                ${la(Ge("array"===t?`${T} ${n}`:S?`${T} <b>${S}:</b> ${k}`:`${T} ${k}`))}
              </span>`}`:""}  
          ${y?H`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Constraints: </span>${y}</div>`:""}
          ${x?H`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Default: </span>${x}</div>`:""}
          ${w?H`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>${"const"===v?"Value":"Allowed"}: </span>${w}</div>`:""}
          ${$?H`<div style='display:inline-block; line-break: anywhere; margin-right:8px'><span class='bold-text'>Pattern: </span>${$}</div>`:""}
        </div>
      </div>
    `}handleAllEvents(e){if(e.target.classList.contains("open-bracket"))this.toggleObjectExpand(e);else if(e.target.classList.contains("schema-multiline-toggle"))this.schemaDescriptionExpanded="true"===this.schemaDescriptionExpanded?"false":"true";else if(e.target.classList.contains("descr-expand-toggle")){const t=e.target.closest(".tr");t&&(t.classList.toggle("expanded-descr"),t.style.maxHeight=t.scrollHeight)}}toggleObjectExpand(e){const t=e.target.closest(".tr"),r=t.classList.contains("nullable");t.classList.contains("expanded")?(t.classList.replace("expanded","collapsed"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{...}]":e.target.classList.contains("array-of-array")?"[[...]]":e.target.classList.contains("array")?"[...]":(r?"null┃":"")+"{...}"):(t.classList.replace("collapsed","expanded"),e.target.innerHTML=e.target.classList.contains("array-of-object")?"[{":e.target.classList.contains("array-of-array")?`[[ ${e.target.dataset.arrayType}`:e.target.classList.contains("object")?(r?"null┃":"")+"{":"[")}});customElements.define("tag-input",class extends ce{render(){let e="";return Array.isArray(this.value)&&(e=H`${this.value.filter((e=>"string"==typeof e&&""!==e.trim())).map((e=>H`<span class='tag'>${e}</span>`))}`),H`
      <div class='tags'>
        ${e}
        <input type="text" class='editor' @paste="${e=>this.afterPaste(e)}" @keydown="${this.afterKeyDown}" @blur="${this.onBlur}" placeholder="${this.placeholder||""}">
      </div>
    `}static get properties(){return{placeholder:{type:String},value:{type:Array,attribute:"value"}}}attributeChangedCallback(e,t,r){"value"===e&&r&&t!==r&&(this.value=r.split(",").filter((e=>""!==e.trim()))),super.attributeChangedCallback(e,t,r)}afterPaste(e){const t=(e.clipboardData||window.clipboardData).getData("Text"),r=t?t.split(",").filter((e=>""!==e.trim())):"";r&&(Array.isArray(this.value)?this.value=[...this.value,...r]:this.value=r),e.preventDefault()}afterKeyDown(e){13===e.keyCode?(e.stopPropagation(),e.preventDefault(),e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")):8===e.keyCode&&0===e.target.value.length&&Array.isArray(this.value)&&this.value.length>0&&(this.value.splice(-1),this.value=[...this.value])}onBlur(e){e.target.value&&(Array.isArray(this.value)?this.value=[...this.value,e.target.value]:this.value=[e.target.value],e.target.value="")}static get styles(){return[c`
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
    `]}});customElements.define("api-request",class extends ce{constructor(){super(),this.responseMessage="",this.responseStatus="success",this.responseHeaders="",this.responseText="",this.responseUrl="",this.curlSyntax="",this.activeResponseTab="response",this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.activeParameterSchemaTabs={}}static get properties(){return{serverUrl:{type:String,attribute:"server-url"},servers:{type:Array},method:{type:String},path:{type:String},security:{type:Array},parameters:{type:Array},request_body:{type:Object},api_keys:{type:Array},parser:{type:Object},accept:{type:String},callback:{type:String},webhook:{type:String},responseMessage:{type:String,attribute:!1},responseText:{type:String,attribute:!1},responseHeaders:{type:String,attribute:!1},responseStatus:{type:String,attribute:!1},responseUrl:{type:String,attribute:!1},curlSyntax:{type:String,attribute:!1},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},allowTry:{type:String,attribute:"allow-try"},showCurlBeforeTry:{type:String,attribute:"show-curl-before-try"},renderStyle:{type:String,attribute:"render-style"},schemaStyle:{type:String,attribute:"schema-style"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},activeParameterSchemaTabs:{type:Object,converter:{fromAttribute:e=>JSON.parse(e),toAttribute:e=>JSON.stringify(e)},attribute:"active-parameter-schema-tabs"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},fetchCredentials:{type:String,attribute:"fetch-credentials"},activeResponseTab:{type:String},selectedRequestBodyType:{type:String,attribute:"selected-request-body-type"},selectedRequestBodyExample:{type:String,attribute:"selected-request-body-example"}}}static get styles(){return[et,Xe,Je,Qe,Ua,at,rt,c`
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
      `,st]}render(){return H`
    <div class="col regular-font request-panel ${"read focused".includes(this.renderStyle)||"true"===this.callback?"read-mode":"view-mode"}">
      <div class=" ${"true"===this.callback?"tiny-title":"req-res-title"} "> 
        ${"true"===this.callback?"CALLBACK REQUEST":"REQUEST"}
      </div>
      <div>
        ${Ia([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("path")))}
        ${Ia([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("query")))}
        ${this.requestBodyTemplate()}
        ${Ia([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("header")))}
        ${Ia([this.method,this.path,this.allowTry,this.parameters,this.activeParameterSchemaTabs],(()=>this.inputParametersTemplate("cookie")))}
        ${"false"===this.allowTry?"":H`${this.apiCallTemplate()}`}
      </div>  
    </div>
    `}async updated(){"true"===this.showCurlBeforeTry&&this.applyCURLSyntax(this.shadowRoot),"true"===this.webhook&&(this.allowTry="false")}async saveExampleState(){if("focused"===this.renderStyle){[...this.shadowRoot.querySelectorAll("textarea.request-body-param-user-input")].forEach((e=>{e.dataset.user_example=e.value}));[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach((e=>{e.dataset.user_example=e.value})),this.requestUpdate()}}async updateExamplesFromDataAttr(){if("focused"===this.renderStyle){[...this.shadowRoot.querySelectorAll("textarea.request-body-param-user-input")].forEach((e=>{e.value=e.dataset.user_example||e.dataset.example}));[...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')].forEach((e=>{e.value=e.dataset.user_example||e.dataset.example})),this.requestUpdate()}}renderExample(e,t,r){var a,n;return H`
      ${"array"===t?"[":""}
      <a
        part="anchor anchor-param-example"
        style="display:inline-block; min-width:24px; text-align:center"
        class="${"true"===this.allowTry?"":"inactive-link"}"
        data-example-type="${"array"===t?t:"string"}"
        data-example="${e.value&&Array.isArray(e.value)?null===(a=e.value)||void 0===a?void 0:a.join("~|~"):("object"==typeof e.value?JSON.stringify(e.value,null,2):e.value)||""}"
        title="${e.value&&Array.isArray(e.value)?null===(n=e.value)||void 0===n?void 0:n.join("~|~"):("object"==typeof e.value?JSON.stringify(e.value,null,2):e.value)||""}"
        @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${r}"]`);t&&(t.value="array"===e.target.dataset.exampleType?e.target.dataset.example.split("~|~"):e.target.dataset.example)}}"
      > ${e.printableValue||e.value} </a>
      ${"array"===t?"] ":""}
    `}renderShortFormatExamples(e,t,r){return H`${e.map(((e,a)=>H`
      ${0===a?"":"┃"}
      ${this.renderExample(e,t,r)}`))}`}renderLongFormatExamples(e,t,r){return H` <ul style="list-style-type: disclosure-closed;">
      ${e.map((e=>{var a,n;return H`
          <li>
            ${this.renderExample(e,t,r)}
            ${(null===(a=e.summary)||void 0===a?void 0:a.length)>0?H`<span>&lpar;${e.summary}&rpar;</span>`:""}
            ${(null===(n=e.description)||void 0===n?void 0:n.length)>0?H`<p>${la(Ge(e.description))}</p>`:""}
          </li>
        `}))}
    </ul>`}exampleListTemplate(e,t,r=[]){return H` ${r.length>0?H`<span style="font-weight:bold">Examples: </span>
          ${a=r,a.some((e=>{var t,r;return(null===(t=e.summary)||void 0===t?void 0:t.length)>0||(null===(r=e.description)||void 0===r?void 0:r.length)>0}))?this.renderLongFormatExamples(r,t,e):this.renderShortFormatExamples(r,t,e)}`:""}`;var a}inputParametersTemplate(e){const t=this.parameters?this.parameters.filter((t=>t.in===e)):[];if(0===t.length)return"";let r="";"path"===e?r="PATH PARAMETERS":"query"===e?r="QUERY-STRING PARAMETERS":"header"===e?r="REQUEST HEADERS":"cookie"===e&&(r="COOKIES");const a=[];for(const r of t){const[t,n,i]=Xa(r);if(!t)continue;const s=Da(t);if(!s)continue;const o=Za(t,{});let l="form",c=!0,d=!1;"query"===e&&(r.style&&"form spaceDelimited pipeDelimited".includes(r.style)?l=r.style:n&&(l=n),"boolean"==typeof r.explode&&(c=r.explode),"boolean"==typeof r.allowReserved&&(d=r.allowReserved));const p=Pa(r.examples||Fa(r.example)||Fa(null==i?void 0:i.example)||(null==i?void 0:i.examples)||Fa(s.examples)||Fa(s.example),s.type);p.exampleVal||"object"!==s.type||(p.exampleVal=Ya(t,n||"json","","","true"===this.callback||"true"===this.webhook,"true"!==this.callback&&"true"!==this.webhook,!0,"text")[0].exampleValue);const h="read focused".includes(this.renderStyle)?"200px":"160px";a.push(H`
      <tr title="${r.deprecated?"Deprecated":""}"> 
        <td rowspan="${"true"===this.allowTry?"1":"2"}" style="width:${h}; min-width:100px;">
          <div class="param-name ${r.deprecated?"deprecated":""}" >
            ${r.deprecated?H`<span style='color:var(--red);'>✗</span>`:""}
            ${r.required?H`<span style='color:var(--red)'>*</span>`:""}
            ${r.name}
          </div>
          <div class="param-type">
            ${"array"===s.type?`${s.arrayType}`:`${s.format?s.format:s.type}`}
          </div>
        </td>  
        ${"true"===this.allowTry?H`
            <td style="min-width:100px;" colspan="${s.default||s.constrain||s.allowedValues||s.pattern?"1":"2"}">
              ${"array"===s.type?H`
                  <tag-input class="request-param" 
                    style = "width:100%" 
                    data-ptype = "${e}"
                    data-pname = "${r.name}"
                    data-example = "${Array.isArray(p.exampleVal)?p.exampleVal.join("~|~"):p.exampleVal}"
                    data-param-serialize-style = "${l}"
                    data-param-serialize-explode = "${c}"
                    data-param-allow-reserved = "${d}"
                    data-x-fill-example = "${r["x-fill-example"]||"yes"}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value="${"no"===r["x-fill-example"]?[]:La("true"===this.fillRequestFieldsWithExample?Array.isArray(p.exampleVal)?p.exampleVal:[p.exampleVal]:[])}"
                  >
                  </tag-input>`:"object"===s.type?H`
                    <div class="tab-panel col" style="border-width:0 0 1px 0;">
                      <div class="tab-buttons row" @click="${e=>{if("button"===e.target.tagName.toLowerCase()){const t={...this.activeParameterSchemaTabs};t[r.name]=e.target.dataset.tab,this.activeParameterSchemaTabs=t}}}">
                        <button class="tab-btn ${"example"===this.activeParameterSchemaTabs[r.name]?"active":""}" data-tab = 'example'>EXAMPLE </button>
                        <button class="tab-btn ${"example"!==this.activeParameterSchemaTabs[r.name]?"active":""}" data-tab = 'schema'>SCHEMA</button>
                      </div>
                      ${"example"===this.activeParameterSchemaTabs[r.name]?H`<div class="tab-content col">
                          <textarea 
                            class = "textarea request-param"
                            part = "textarea textarea-param"
                            data-ptype = "${e}-object"
                            data-pname = "${r.name}"
                            data-example = "${p.exampleVal}"
                            data-param-serialize-style = "${l}"
                            data-param-serialize-explode = "${c}"
                            data-param-allow-reserved = "${d}"
                            data-x-fill-example = "${r["x-fill-example"]||"yes"}"
                            spellcheck = "false"
                            .textContent="${"no"===r["x-fill-example"]?"":La("true"===this.fillRequestFieldsWithExample?"object"==typeof p.exampleVal?JSON.stringify(p.exampleVal,null,2):p.exampleVal:"")}"
                            style = "resize:vertical; width:100%; height: ${"read focused".includes(this.renderStyle)?"180px":"120px"};"
                            @input=${e=>{const t=this.getRequestPanel(e);this.liveCURLSyntaxUpdate(t)}}
                          ></textarea>
                        </div>`:H`
                          <div class="tab-content col">
                            <schema-tree
                              class = 'json'
                              style = 'display: block'
                              .data = '${o}'
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
                    </div>`:H`
                    <input type="${"password"===s.format?"password":"text"}" spellcheck="false" style="width:100%" 
                      class="request-param"
                      part="textbox textbox-param"
                      data-ptype="${e}"
                      data-pname="${r.name}" 
                      data-example="${Array.isArray(p.exampleVal)?p.exampleVal.join("~|~"):p.exampleVal}"
                      data-param-allow-reserved = "${d}"
                      data-x-fill-example = "${r["x-fill-example"]||"yes"}"
                      data-array="false"
                      .value="${"no"===r["x-fill-example"]?"":La("true"===this.fillRequestFieldsWithExample?p.exampleVal:"")}"
                      @input=${e=>{const t=this.getRequestPanel(e);this.liveCURLSyntaxUpdate(t)}}
                    />`}
            </td>`:""}
        ${s.default||s.constrain||s.allowedValues||s.pattern?H`
            <td colspan="${"true"===this.allowTry?"1":"2"}">
              <div class="param-constraint">
                ${s.default?H`<span style="font-weight:bold">Default: </span>${s.default}<br/>`:""}
                ${s.pattern?H`<span style="font-weight:bold">Pattern: </span>${s.pattern}<br/>`:""}
                ${s.constrain?H`${s.constrain}<br/>`:""}
                ${s.allowedValues&&s.allowedValues.split("┃").map(((e,t)=>H`
                  ${t>0?"┃":H`<span style="font-weight:bold">Allowed: </span>`}
                  ${H`
                    <a part="anchor anchor-param-constraint" class = "${"true"===this.allowTry?"":"inactive-link"}"
                      data-type="${"array"===s.type?s.type:"string"}"
                      data-enum="${e.trim()}"
                      @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${r.name}"]`);t&&("array"===e.target.dataset.type?t.value=[e.target.dataset.enum]:t.value=e.target.dataset.enum)}}"
                    >${e}</a>`}`))}
              </div>
            </td>`:H`<td></td>`}
      </tr>
      <tr>
        ${"true"===this.allowTry?H`<td style="border:none"> </td>`:""}
        <td colspan="2" style="border:none">
          <span class="m-markdown-small">${la(Ge(r.description||""))}</span>
          ${this.exampleListTemplate.call(this,r.name,s.type,p.exampleList)}
        </td>
      </tr>
    `)}return H`
    <div class="table-title top-gap">${r}</div>
    <div style="display:block; overflow-x:auto; max-width:100%;">
      <table role="presentation" class="m-table" style="width:100%; word-break:break-word;">
        ${a}
      </table>
    </div>`}async beforeNavigationFocusedMode(){}async afterNavigationFocusedMode(){this.selectedRequestBodyType="",this.selectedRequestBodyExample="",this.updateExamplesFromDataAttr(),this.clearResponseData()}onSelectExample(e){this.selectedRequestBodyExample=e.target.value;const t=e.target;window.setTimeout((e=>{const t=e.closest(".example-panel").querySelector(".request-body-param");e.closest(".example-panel").querySelector(".request-body-param-user-input").value=t.innerText;const r=this.getRequestPanel({target:e});this.liveCURLSyntaxUpdate(r)}),0,t)}onMimeTypeChange(e){this.selectedRequestBodyType=e.target.value;const t=e.target;this.selectedRequestBodyExample="",window.setTimeout((e=>{const t=e.closest(".request-body-container").querySelector(".request-body-param");if(t){e.closest(".request-body-container").querySelector(".request-body-param-user-input").value=t.innerText}}),0,t)}requestBodyTemplate(){if(!this.request_body)return"";if(0===Object.keys(this.request_body).length)return"";let e="",t="",r="",a="",n="";const i=[],{content:s}=this.request_body;for(const e in s)i.push({mimeType:e,schema:s[e].schema,example:s[e].example,examples:s[e].examples}),this.selectedRequestBodyType||(this.selectedRequestBodyType=e);return e=1===i.length?"":H`
        <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change = '${e=>this.onMimeTypeChange(e)}'>
          ${i.map((e=>H`
            <option value = '${e.mimeType}' ?selected = '${e.mimeType===this.selectedRequestBodyType}'>
              ${e.mimeType}
            </option> `))}
        </select>
      `,i.forEach((e=>{let i,s=[];if(this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose"))e.mimeType===this.selectedRequestBodyType&&(s=Ya(e.schema,e.mimeType,e.examples,e.example,"true"===this.callback||"true"===this.webhook,"true"!==this.callback&&"true"!==this.webhook,"text",!1),this.selectedRequestBodyExample||(this.selectedRequestBodyExample=s.length>0?s[0].exampleId:""),n=H`
            ${n}
            <div class = 'example-panel border-top pad-top-8'>
              ${1===s.length?"":H`
                  <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change='${e=>this.onSelectExample(e)}'>
                    ${s.map((e=>H`<option value="${e.exampleId}" ?selected=${e.exampleId===this.selectedRequestBodyExample} > 
                      ${e.exampleSummary.length>80?e.exampleId:e.exampleSummary?e.exampleSummary:e.exampleId} 
                    </option>`))}
                  </select>
                `}
              ${s.filter((e=>e.exampleId===this.selectedRequestBodyExample)).map((t=>H`
                <div class="example ${t.exampleId===this.selectedRequestBodyExample?"example-selected":""}" data-example = '${t.exampleId}'>
                  ${t.exampleSummary&&t.exampleSummary.length>80?H`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                  ${t.exampleDescription?H`<div class="m-markdown-small" style="padding: 4px 0"> ${la(Ge(t.exampleDescription||""))} </div>`:""}
                  <!-- This pre(hidden) is to store the original example value, this will remain unchanged when users switches from one example to another, its is used to populate the editable textarea -->
                  <pre 
                    class = "textarea is-hidden request-body-param ${e.mimeType.substring(e.mimeType.indexOf("/")+1)}" 
                    spellcheck = "false"
                    data-ptype = "${e.mimeType}" 
                    style="width:100%; resize:vertical; display:none"
                  >${"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2)}</pre>

                  <!-- this textarea is for user to edit the example -->
                  <textarea 
                    class = "textarea request-body-param-user-input"
                    part = "textarea textarea-param"
                    spellcheck = "false"
                    data-ptype = "${e.mimeType}" 
                    data-example = "${"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2)}"
                    data-example-format = "${t.exampleFormat}"
                    style="width:100%; resize:vertical;"
                    .textContent = "${"true"===this.fillRequestFieldsWithExample?"text"===t.exampleFormat?t.exampleValue:JSON.stringify(t.exampleValue,null,2):""}"
                    @input=${e=>{const t=this.getRequestPanel(e);this.liveCURLSyntaxUpdate(t)}}
                  ></textarea>
                </div>  
              `))}

            </div>
          `);else if(this.selectedRequestBodyType.includes("form-urlencoded")||this.selectedRequestBodyType.includes("form-data")){if(e.mimeType===this.selectedRequestBodyType){const t=Ya(e.schema,e.mimeType,e.examples,e.example,"true"===this.callback||"true"===this.webhook,"true"!==this.callback&&"true"!==this.webhook,"text",!1);e.schema&&(r=this.formDataTemplate(e.schema,e.mimeType,t[0]?t[0].exampleValue:""))}}else/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(this.selectedRequestBodyType)&&e.mimeType===this.selectedRequestBodyType&&(t=H`
            <div class = "small-font-size bold-text row">
              <input type="file" part="file-input" style="max-width:100%" class="request-body-param-file" data-ptype="${e.mimeType}" spellcheck="false" />
            </div>  
          `);(e.mimeType.includes("json")||e.mimeType.includes("xml")||e.mimeType.includes("text")||this.selectedRequestBodyType.includes("jose"))&&(i=Za(e.schema,{}),"table"===this.schemaStyle?a=H`
            ${a}
            <schema-table
              class = '${e.mimeType.substring(e.mimeType.indexOf("/")+1)}'
              style = 'display: ${this.selectedRequestBodyType===e.mimeType?"block":"none"};'
              .data = '${i}'
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-table>
          `:"tree"===this.schemaStyle&&(a=H`
            ${a}
            <schema-tree
              class = "${e.mimeType.substring(e.mimeType.indexOf("/")+1)}"
              style = "display: ${this.selectedRequestBodyType===e.mimeType?"block":"none"};"
              .data = "${i}"
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-tree>
          `))})),H`
      <div class='request-body-container' data-selected-request-body-type="${this.selectedRequestBodyType}">
        <div class="table-title top-gap row">
          REQUEST BODY ${this.request_body.required?H`<span class="mono-font" style='color:var(--red)'>*</span>`:""} 
          <span style = "font-weight:normal; margin-left:5px"> ${this.selectedRequestBodyType}</span>
          <span style="flex:1"></span>
          ${e}
        </div>
        ${this.request_body.description?H`<div class="m-markdown" style="margin-bottom:12px">${la(Ge(this.request_body.description))}</div>`:""}
        
        ${this.selectedRequestBodyType.includes("json")||this.selectedRequestBodyType.includes("xml")||this.selectedRequestBodyType.includes("text")||this.selectedRequestBodyType.includes("jose")?H`
            <div class="tab-panel col" style="border-width:0 0 1px 0;">
              <div class="tab-buttons row" @click="${e=>{"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}">
                <button class="tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE</button>
                <button class="tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema'>SCHEMA</button>
              </div>
              ${H`<div class="tab-content col" style="display:${"example"===this.activeSchemaTab?"block":"none"};"> ${n}</div>`}
              ${H`<div class="tab-content col" style="display:${"example"===this.activeSchemaTab?"none":"block"};"> ${a}</div>`}
            </div>`:H`  
            ${t}
            ${r}`}
      </div>  
    `}formDataParamAsObjectTemplate(e,t,r){var a;const n=Za(t,{}),i=Ya(t,"json",t.examples,t.example,"true"===this.callback||"true"===this.webhook,"true"!==this.callback&&"true"!==this.webhook,"text",!1);return H`
      <div class="tab-panel row" style="min-height:220px; border-left: 6px solid var(--light-border-color); align-items: stretch;">
        <div style="width:24px; background-color:var(--light-border-color)">
          <div class="row" style="flex-direction:row-reverse; width:160px; height:24px; transform:rotate(270deg) translateX(-160px); transform-origin:top left; display:block;" @click="${e=>{if(e.target.classList.contains("v-tab-btn")){const{tab:t}=e.target.dataset;if(t){const r=e.target.closest(".tab-panel"),a=r.querySelector(`.v-tab-btn[data-tab="${t}"]`),n=[...r.querySelectorAll(`.v-tab-btn:not([data-tab="${t}"])`)],i=r.querySelector(`.tab-content[data-tab="${t}"]`),s=[...r.querySelectorAll(`.tab-content:not([data-tab="${t}"])`)];a.classList.add("active"),i.style.display="block",n.forEach((e=>{e.classList.remove("active")})),s.forEach((e=>{e.style.display="none"}))}}"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}">
          <button class="v-tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE</button>
          <button class="v-tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema'>SCHEMA</button>
        </div>
      </div>
      ${H`
        <div class="tab-content col" data-tab = 'example' style="display:${"example"===this.activeSchemaTab?"block":"none"}; padding-left:5px; width:100%"> 
          <textarea 
            class = "textarea"
            part = "textarea textarea-param"
            style = "width:100%; border:none; resize:vertical;" 
            data-array = "false" 
            data-ptype = "${r.includes("form-urlencode")?"form-urlencode":"form-data"}"
            data-pname = "${e}"
            data-example = "${(null===(a=i[0])||void 0===a?void 0:a.exampleValue)||""}"
            .textContent = "${"true"===this.fillRequestFieldsWithExample?i[0].exampleValue:""}"
            spellcheck = "false"
          ></textarea>
        </div>`}
      ${H`
        <div class="tab-content col" data-tab = 'schema' style="display:${"example"!==this.activeSchemaTab?"block":"none"}; padding-left:5px; width:100%;"> 
          <schema-tree
            .data = '${n}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
          > </schema-tree>
        </div>`}
      </div>
    `}formDataTemplate(e,t,r=""){const a=[];if(e.properties){for(const r in e.properties){var n,i;const s=e.properties[r];if(s.readOnly)continue;const o=s.examples||s.example||"",l=s.type,c=Da(s),d="read focused".includes(this.renderStyle)?"200px":"160px",p=Pa(c.examples||c.example,c.type);a.push(H`
        <tr title="${s.deprecated?"Deprecated":""}"> 
          <td style="width:${d}; min-width:100px;">
            <div class="param-name ${s.deprecated?"deprecated":""}">
              ${r}${null!==(n=e.required)&&void 0!==n&&n.includes(r)||s.required?H`<span style='color:var(--red);'>*</span>`:""}
            </div>
            <div class="param-type">${c.type}</div>
          </td>  
          <td 
            style="${"object"===l?"width:100%; padding:0;":"true"===this.allowTry?"":"display:none;"} min-width:100px;" 
            colspan="${"object"===l?2:1}">
            ${"array"===l?"binary"===(null===(i=s.items)||void 0===i?void 0:i.format)?H`
                <div class="file-input-container col" style='align-items:flex-end;' @click="${e=>this.onAddRemoveFileInput(e,r,t)}">
                  <div class='input-set row'>
                    <input 
                      type = "file"
                      part = "file-input"
                      style = "width:100%" 
                      data-pname = "${r}" 
                      data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                      data-array = "false" 
                      data-file-array = "true" 
                    />
                    <button class="file-input-remove-btn"> &#x2715; </button>
                  </div>  
                  <button class="m-btn primary file-input-add-btn" part="btn btn-fill" style="margin:2px 25px 0 0; padding:2px 6px;">ADD</button>
                </div>  
                `:H`
                  <tag-input
                    style = "width:100%" 
                    data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                    data-pname = "${r}"
                    data-example = "${Array.isArray(o)?o.join("~|~"):o}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(o)?Array.isArray(o[0])?o[0]:o:[]}"
                  >
                  </tag-input>
                `:H`
                ${"object"===l?this.formDataParamAsObjectTemplate.call(this,r,s,t):H`
                    ${"true"===this.allowTry?H`<input
                          .value = "${"true"===this.fillRequestFieldsWithExample?p.exampleVal:""}"
                          spellcheck = "false"
                          type = "${"binary"===s.format?"file":"password"===s.format?"password":"text"}"
                          part = "textbox textbox-param"
                          style = "width:100%"
                          data-ptype = "${t.includes("form-urlencode")?"form-urlencode":"form-data"}"
                          data-pname = "${r}"
                          data-example = "${Array.isArray(o)?o[0]:o}"
                          data-array = "false"
                        />`:""}
                    `}`}
          </td>
          ${"object"===l?"":H`
              <td>
                ${c.default||c.constrain||c.allowedValues||c.pattern?H`
                    <div class="param-constraint">
                      ${c.default?H`<span style="font-weight:bold">Default: </span>${c.default}<br/>`:""}
                      ${c.pattern?H`<span style="font-weight:bold">Pattern: </span>${c.pattern}<br/>`:""}
                      ${c.constrain?H`${c.constrain}<br/>`:""}
                      ${c.allowedValues&&c.allowedValues.split("┃").map(((e,t)=>H`
                        ${t>0?"┃":H`<span style="font-weight:bold">Allowed: </span>`}
                        ${H`
                          <a part="anchor anchor-param-constraint" class = "${"true"===this.allowTry?"":"inactive-link"}"
                            data-type="${"array"===c.type?c.type:"string"}"
                            data-enum="${e.trim()}"
                            @click="${e=>{const t=e.target.closest("table").querySelector(`[data-pname="${r}"]`);t&&("array"===e.target.dataset.type?t.value=[e.target.dataset.enum]:t.value=e.target.dataset.enum)}}"
                          > 
                            ${e} 
                          </a>`}`))}
                    </div>`:""}
              </td>`}
        </tr>
        ${"object"===l?"":H`
            <tr>
              <td style="border:none"> </td>
              <td colspan="2" style="border:none; margin-top:0; padding:0 5px 8px 5px;"> 
                <span class="m-markdown-small">${la(Ge(s.description||""))}</span>
                ${this.exampleListTemplate.call(this,r,c.type,p.exampleList)}
              </td>
            </tr>
          `}`)}return H`
        <table role="presentation" style="width:100%;" class="m-table">
          ${a}
        </table>
      `}return H`
      <textarea
        class = "textarea dynamic-form-param ${t}"
        part = "textarea textarea-param"
        spellcheck = "false"
        data-pname="dynamic-form" 
        data-ptype="${t}"
        .textContent = "${r}"
        style="width:100%"
      ></textarea>
      ${e.description?H`<span class="m-markdown-small">${la(Ge(e.description))}</span>`:""}
    `}curlSyntaxTemplate(e="flex"){return H`
      <div class="col m-markdown" style="flex:1; display:${e}; position:relative; max-width: 100%;">
        <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e=>{dt(this.curlSyntax.replace(/\\$/,""),e)}}' part="btn btn-fill"> Copy </button>
        <pre style="white-space:pre"><code>${la(Ye().highlight(this.curlSyntax.trim().replace(/\\$/,""),Ye().languages.shell,"shell"))}</code></pre>
      </div>
      `}apiResponseTabTemplate(){let e="",t="";if(!this.responseIsBlob)if(this.responseHeaders.includes("application/x-ndjson")){e="json";const r=this.responseText.split("\n").map((t=>Ye().highlight(t,Ye().languages[e],e))).join("\n");t=H`<code>${la(r)}</code>`}else this.responseHeaders.includes("json")?(e="json",t=H`<code>${la(Ye().highlight(this.responseText,Ye().languages[e],e))}</code>`):this.responseHeaders.includes("html")||this.responseHeaders.includes("xml")?(e="html",t=H`<code>${la(Ye().highlight(this.responseText,Ye().languages[e],e))}</code>`):(e="text",t=H`<code>${this.responseText}</code>`);return H`
      <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
        <div class="response-message ${this.responseStatus}">Response Status: ${this.responseMessage}</div>
        <div style="flex:1"></div>
        <button class="m-btn" part="btn btn-outline btn-clear-response" @click="${this.clearResponseData}">CLEAR RESPONSE</button>
      </div>
      <div class="tab-panel col" style="border-width:0 0 1px 0;">
        <div id="tab_buttons" class="tab-buttons row" @click="${e=>{!1!==e.target.classList.contains("tab-btn")&&(this.activeResponseTab=e.target.dataset.tab)}}">
          <button class="tab-btn ${"response"===this.activeResponseTab?"active":""}" data-tab = 'response' > RESPONSE</button>
          <button class="tab-btn ${"headers"===this.activeResponseTab?"active":""}"  data-tab = 'headers' > RESPONSE HEADERS</button>
          ${"true"===this.showCurlBeforeTry?"":H`<button class="tab-btn ${"curl"===this.activeResponseTab?"active":""}" data-tab = 'curl'>CURL</button>`}
        </div>
        ${this.responseIsBlob?H`
            <div class="tab-content col" style="flex:1; display:${"response"===this.activeResponseTab?"flex":"none"};">
              ${"image"===this.responseBlobType?H`<img style="max-height:var(--resp-area-height, 400px); object-fit:contain;" class="mar-top-8" src="${this.responseBlobUrl}"></img>`:""}  
              <button class="m-btn thin-border mar-top-8" style="width:135px" @click='${e=>{ut(this.responseBlobUrl,this.respContentDisposition)}}' part="btn btn-outline">
                DOWNLOAD
              </button>
              ${"view"===this.responseBlobType||"image"===this.responseBlobType?H`<button class="m-btn thin-border mar-top-8" style="width:135px"  @click='${e=>{mt(this.responseBlobUrl)}}' part="btn btn-outline">VIEW (NEW TAB)</button>`:""}
            </div>`:H`
            <div class="tab-content col m-markdown" style="flex:1; display:${"response"===this.activeResponseTab?"flex":"none"};" >
              <button class="toolbar-btn" style="position:absolute; top:12px; right:8px" @click='${e=>{dt(this.responseText,e)}}' part="btn btn-fill"> Copy </button>
              <pre style="white-space:pre; min-height:50px; height:var(--resp-area-height, 400px); resize:vertical; overflow:auto">${t}</pre>
            </div>`}
        <div class="tab-content col m-markdown" style="flex:1; display:${"headers"===this.activeResponseTab?"flex":"none"};" >
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e=>{dt(this.responseHeaders,e)}}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${la(Ye().highlight(this.responseHeaders,Ye().languages.css,"css"))}</code></pre>
        </div>
        ${"true"===this.showCurlBeforeTry?"":this.curlSyntaxTemplate("curl"===this.activeResponseTab?"flex":"none")}
      </div>`}apiCallTemplate(){var e,t;let r="";this.servers&&this.servers.length>0&&(r=H`
        <select style="min-width:100px;" @change='${e=>{this.serverUrl=e.target.value}}'>
          ${this.servers.map((e=>H`<option value = "${e.url}"> ${e.url} - ${e.description} </option>`))}
        </select>
      `);const a=H`
      <div style="display:flex; flex-direction:column;">
        ${r}
        ${this.serverUrl?H`
            <div style="display:flex; align-items:baseline;">
              <div style="font-weight:bold; padding-right:5px;">API Server</div> 
              <span class = "gray-text"> ${this.serverUrl} </span>
            </div>
          `:""}
      </div>  
    `;return H`
    <div style="display:flex; align-items:flex-end; margin:16px 0; font-size:var(--font-size-small);" part="wrap-request-btn">
      <div class="hide-in-small-screen" style="flex-direction:column; margin:0; width:calc(100% - 60px);">
        <div style="display:flex; flex-direction:row; align-items:center; overflow:hidden;"> 
          ${a}
        </div>
        <div style="display:flex;">
          <div style="font-weight:bold; padding-right:5px;">Authentication</div>
          ${(null===(e=this.security)||void 0===e?void 0:e.length)>0?H`
              ${this.api_keys.length>0?H`<div style="color:var(--blue); overflow:hidden;"> 
                    ${1===this.api_keys.length?`${null===(t=this.api_keys[0])||void 0===t?void 0:t.typeDisplay} in ${this.api_keys[0].in}`:`${this.api_keys.length} API keys applied`} 
                  </div>`:H`<div class="gray-text">Required  <span style="color:var(--red)">(None Applied)</span>`}`:H`<span class="gray-text"> Not Required </span>`}
        </div>
      </div>
      ${this.parameters.length>0||this.request_body?H`
            <button class="m-btn thin-border" part="btn btn-outline btn-fill" style="margin-right:5px;" @click="${this.onFillRequestData}" title="Fills with example data (if provided)">
              FILL EXAMPLE
            </button>
            <button class="m-btn thin-border" part="btn btn-outline btn-clear" style="margin-right:5px;" @click="${this.onClearRequestData}">
              CLEAR
            </button>`:""}
      <button class="m-btn primary thin-border" part="btn btn-try" @click="${this.onTryClick}">TRY</button>
    </div>
    <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
      ${"true"===this.showCurlBeforeTry?this.curlSyntaxTemplate():""}
    </div>
    ${""===this.responseMessage?"":this.apiResponseTabTemplate()}
    `}async onFillRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach((e=>{e.dataset.example&&("TAG-INPUT"===e.tagName.toUpperCase()?e.value=e.dataset.example.split("~|~"):e.value=e.dataset.example)}))}async onClearRequestData(e){[...e.target.closest(".request-panel").querySelectorAll("input, tag-input, textarea:not(.is-hidden)")].forEach((e=>{e.value=""}))}buildFetchURL(e){let t;const r=[...e.querySelectorAll("[data-ptype='path']")],a=[...e.querySelectorAll("[data-ptype='query']")],n=[...e.querySelectorAll("[data-ptype='query-object']")];t=this.path,r.map((e=>{t=t.replace(`{${e.dataset.pname}}`,encodeURIComponent(e.value))}));const i=new Map,s=[];a.length>0&&a.forEach((e=>{const t=new URLSearchParams;if("true"===e.dataset.paramAllowReserved&&s.push(e.dataset.pname),"false"===e.dataset.array)""!==e.value&&t.append(e.dataset.pname,e.value);else{const{paramSerializeStyle:r,paramSerializeExplode:a}=e.dataset;let n=e.value&&Array.isArray(e.value)?e.value:[];n=Array.isArray(n)?n.filter((e=>""!==e)):[],n.length>0&&("spaceDelimited"===r?t.append(e.dataset.pname,n.join(" ").replace(/^\s|\s$/g,"")):"pipeDelimited"===r?t.append(e.dataset.pname,n.join("|").replace(/^\||\|$/g,"")):"true"===a?n.forEach((r=>{t.append(e.dataset.pname,r)})):t.append(e.dataset.pname,n.join(",").replace(/^,|,$/g,"")))}t.toString()&&i.set(e.dataset.pname,t)})),n.length>0&&n.map((e=>{const t=new URLSearchParams;try{let r={};const{paramSerializeStyle:a,paramSerializeExplode:n,pname:i}=e.dataset;if(r=Object.assign(r,JSON.parse(e.value.replace(/\s+/g," "))),"true"===e.dataset.paramAllowReserved&&s.push(e.dataset.pname),"json xml".includes(a))"json"===a?t.append(e.dataset.pname,JSON.stringify(r)):"xml"===a&&t.append(e.dataset.pname,qa(r));else for(const e in r){const s=`${i}[${e}]`;"object"==typeof r[e]?Array.isArray(r[e])&&("spaceDelimited"===a?t.append(s,r[e].join(" ")):"pipeDelimited"===a?t.append(s,r[e].join("|")):"true"===n?r[e].forEach((e=>{t.append(s,e)})):t.append(s,r[e])):t.append(s,r[e])}}catch(t){console.error("RapiDoc: unable to parse %s into object",e.value)}t.toString()&&i.set(e.dataset.pname,t)}));let o="";return i.size&&(i.forEach(((e,t)=>{s.includes(t)?(o+=`${t}=`,o+=e.getAll(t).join(`&${t}=`),o+="&"):o+=`${e.toString()}&`})),o=o.slice(0,-1)),0!==o.length&&(t=`${t}${t.includes("?")?"&":"?"}${o}`),this.api_keys.filter((e=>"query"===e.in)).forEach((e=>{t=`${t}${t.includes("?")?"&":"?"}${e.name}=${encodeURIComponent(e.finalKeyValue)}`})),t=`${this.serverUrl.replace(/\/$/,"")}${t}`,t}buildFetchHeaders(e){var t;const r=null===(t=this.closest(".expanded-req-resp-container, .req-resp-container"))||void 0===t?void 0:t.getElementsByTagName("api-response")[0],a=[...e.querySelectorAll("[data-ptype='header']")],n=e.querySelector(".request-body-container"),i=null==r?void 0:r.selectedMimeType,s=new Headers;if(i?s.append("Accept",i):this.accept&&s.append("Accept",this.accept),this.api_keys.filter((e=>"header"===e.in)).forEach((e=>{s.append(e.name,e.finalKeyValue)})),a.map((e=>{e.value&&s.append(e.dataset.pname,e.value)})),n){const e=n.dataset.selectedRequestBodyType;e.includes("form-data")||s.append("Content-Type",e)}return s}buildFetchBodyOptions(e){const t=e.querySelector(".request-body-container"),r={method:this.method.toUpperCase()};if(t){const a=t.dataset.selectedRequestBodyType;if(a.includes("form-urlencoded")){const t=e.querySelector("[data-ptype='dynamic-form']");if(t){const e=t.value,a=new URLSearchParams;let n,i=!0;if(e)try{n=JSON.parse(e)}catch(e){i=!1,console.warn("RapiDoc: Invalid JSON provided",e)}else i=!1;if(i){for(const e in n)a.append(e,JSON.stringify(n[e]));r.body=a}}else{const t=[...e.querySelectorAll("[data-ptype='form-urlencode']")],a=new URLSearchParams;t.filter((e=>"file"!==e.type)).forEach((e=>{if("false"===e.dataset.array)e.value&&a.append(e.dataset.pname,e.value);else{const t=e.value&&Array.isArray(e.value)?e.value.join(","):"";a.append(e.dataset.pname,t)}})),r.body=a}}else if(a.includes("form-data")){const t=new FormData;[...e.querySelectorAll("[data-ptype='form-data']")].forEach((e=>{"false"===e.dataset.array?"file"===e.type&&e.files[0]?t.append(e.dataset.pname,e.files[0],e.files[0].name):e.value&&t.append(e.dataset.pname,e.value):e.value&&Array.isArray(e.value)&&t.append(e.dataset.pname,e.value.join(","))})),r.body=t}else if(/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(a)){const t=e.querySelector(".request-body-param-file");null!=t&&t.files[0]&&(r.body=t.files[0])}else if(a.includes("json")||a.includes("xml")||a.includes("text")){const t=e.querySelector(".request-body-param-user-input");null!=t&&t.value&&(r.body=t.value)}}return r}async onTryClick(e){const t=e.target,r=t.closest(".request-panel"),a=this.buildFetchURL(r),n=this.buildFetchBodyOptions(r),i=this.buildFetchHeaders(r);this.responseUrl="",this.responseHeaders=[],this.curlSyntax=this.generateCURLSyntax(a,i,n,r),this.responseStatus="success",this.responseIsBlob=!1,this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),this.fetchCredentials&&(n.credentials=this.fetchCredentials);const s=new AbortController,{signal:o}=s;n.headers=i;const l={url:a,...n};this.dispatchEvent(new CustomEvent("before-try",{bubbles:!0,composed:!0,detail:{request:l,controller:s}}));const c={method:l.method,headers:l.headers,credentials:l.credentials,body:l.body},d=new Request(l.url,c);let p,h;try{let e,r,a;t.disabled=!0,this.responseText="⌛",this.responseMessage="",this.requestUpdate();const n=performance.now();p=await fetch(d,{signal:o});const i=performance.now();let s;const l=new Promise((e=>{s=e}));this.dispatchEvent(new CustomEvent("fetched-try",{bubbles:!0,composed:!0,detail:{request:d,response:p,resolveModifiedResponse:s}})),p=await l,h=p.clone(),t.disabled=!1,this.responseMessage=H`${p.statusText?`${p.statusText}:${p.status}`:p.status} <div style="color:var(--light-fg)"> Took ${Math.round(i-n)} milliseconds </div>`,this.responseUrl=p.url;const c={};p.headers.forEach(((e,t)=>{c[t]=e,this.responseHeaders=`${this.responseHeaders}${t}: ${e}\n`}));const u=p.headers.get("content-type");if(0===(await p.clone().text()).length)this.responseText="";else if(u){if("application/x-ndjson"===u)this.responseText=await p.text();else if(u.includes("json"))if(/charset=[^"']+/.test(u)){const e=u.split("charset=")[1],t=await p.arrayBuffer();try{a=new TextDecoder(e).decode(t)}catch{a=new TextDecoder("utf-8").decode(t)}try{r=JSON.parse(a),this.responseText=JSON.stringify(r,null,2)}catch{this.responseText=a}}else r=await p.json(),this.responseText=JSON.stringify(r,null,2);else/^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$|^application\/vnd\./.test(u)?(this.responseIsBlob=!0,this.responseBlobType="download"):/^image/.test(u)?(this.responseIsBlob=!0,this.responseBlobType="image"):/^audio|^image|^video/.test(u)?(this.responseIsBlob=!0,this.responseBlobType="view"):(a=await p.text(),u.includes("xml")?this.responseText=za()(a,{textNodesOnSameLine:!0,indentor:"  "}):this.responseText=a);if(this.responseIsBlob){const t=p.headers.get("content-disposition");this.respContentDisposition=t?t.split("filename=")[1].replace(/"|'/g,""):"filename",e=await p.blob(),this.responseBlobUrl=URL.createObjectURL(e)}}else a=await p.text(),this.responseText=a;this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{request:d,response:h,responseHeaders:c,responseBody:r||a||e,responseStatus:h.ok}}))}catch(e){t.disabled=!1,"AbortError"===e.name?(this.dispatchEvent(new CustomEvent("request-aborted",{bubbles:!0,composed:!0,detail:{err:e,request:d}})),this.responseMessage="Request Aborted",this.responseText="Request Aborted"):(this.dispatchEvent(new CustomEvent("after-try",{bubbles:!0,composed:!0,detail:{err:e,request:d}})),this.responseMessage=`${e.message} (CORS or Network Issue)`)}this.requestUpdate()}liveCURLSyntaxUpdate(e){this.applyCURLSyntax(e),this.requestUpdate()}onGenerateCURLClick(e){const t=this.getRequestPanel(e);this.applyCURLSyntax(t)}getRequestPanel(e){return e.target.closest(".request-panel")}applyCURLSyntax(e){const t=this.buildFetchURL(e),r=this.buildFetchBodyOptions(e),a=this.buildFetchHeaders(e);this.curlSyntax=this.generateCURLSyntax(t,a,r,e)}generateCURLSyntax(e,t,r,a){let n,i="",s="",o="",l="";const c=a.querySelector(".request-body-container");if(!1===e.startsWith("http")){n=new URL(e,window.location.href).href}else n=e;if(i=`curl -X ${this.method.toUpperCase()} "${n}" \\\n`,s=Array.from(t).map((([e,t])=>` -H "${e}: ${t}"`)).join("\\\n"),s&&(s=`${s} \\\n`),r.body instanceof URLSearchParams)o=` -d ${r.body.toString()} \\\n`;else if(r.body instanceof File)o=` --data-binary @${r.body.name} \\\n`;else if(r.body instanceof FormData)l=Array.from(r.body).reduce(((e,[t,r])=>{if(r instanceof File)return[...e,` -F "${t}=@${r.name}"`];const a=r.match(/([^,],)/gm);if(a){const r=a.map((e=>`-F "${t}[]=${e}"`));return[...e,...r]}return[...e,` -F "${t}=${r}"`]}),[]).join("\\\n");else if(c&&c.dataset.selectedRequestBodyType){const e=c.dataset.selectedRequestBodyType,t=a.querySelector(".request-body-param-user-input");if(null!=t&&t.value){if(r.body=t.value,e.includes("json"))try{o=` -d '${JSON.stringify(JSON.parse(t.value))}' \\\n`}catch(e){}o||(o=` -d '${t.value.replace(/'/g,"'\"'\"'")}' \\\n`)}}return`${i}${s}${o}${l}`}onAddRemoveFileInput(e,t,r){if("button"!==e.target.tagName.toLowerCase())return;if(e.target.classList.contains("file-input-remove-btn")){return void e.target.closest(".input-set").remove()}const a=e.target.closest(".file-input-container"),n=document.createElement("div");n.setAttribute("class","input-set row");const i=document.createElement("input");i.type="file",i.style="width:200px; margin-top:2px;",i.setAttribute("data-pname",t),i.setAttribute("data-ptype",r.includes("form-urlencode")?"form-urlencode":"form-data"),i.setAttribute("data-array","false"),i.setAttribute("data-file-array","true");const s=document.createElement("button");s.setAttribute("class","file-input-remove-btn"),s.innerHTML="&#x2715;",n.appendChild(i),n.appendChild(s),a.insertBefore(n,e.target)}clearResponseData(){this.responseUrl="",this.responseHeaders="",this.responseText="",this.responseStatus="success",this.responseMessage="",this.responseIsBlob=!1,this.responseBlobType="",this.respContentDisposition="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl="")}disconnectedCallback(){this.curlSyntax="",this.responseBlobUrl&&(URL.revokeObjectURL(this.responseBlobUrl),this.responseBlobUrl=""),super.disconnectedCallback()}});customElements.define("schema-table",class extends ce{static get properties(){return{schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},data:{type:Object}}}connectedCallback(){super.connectedCallback(),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true false".includes(this.schemaDescriptionExpanded)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"true false".includes(this.schemaHideReadOnly)||(this.schemaHideReadOnly="true"),this.schemaHideWriteOnly&&"true false".includes(this.schemaHideWriteOnly)||(this.schemaHideWriteOnly="true")}static get styles(){return[Je,Qa,c`
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
      }`,st]}render(){var e,t,r;return H`
      <div class="table ${"true"===this.schemaDescriptionExpanded?"expanded-all-descr":"collapsed-all-descr"}" @click="${e=>this.handleAllEvents(e)}">
        <div class='toolbar'>
          <div class="toolbar-item schema-root-type ${(null===(e=this.data)||void 0===e?void 0:e["::type"])||""} "> ${(null===(t=this.data)||void 0===t?void 0:t["::type"])||""} </div>
          ${"true"===this.allowSchemaDescriptionExpandToggle?H`
              <div style="flex:1"></div>
              <div part="schema-multiline-toggle" class='toolbar-item schema-multiline-toggle' > 
                ${"true"===this.schemaDescriptionExpanded?"Single line description":"Multiline description"}
              </div>
            `:""}
        </div>
        <span part="schema-description" class='m-markdown'> ${la(Ge((null===(r=this.data)||void 0===r?void 0:r["::description"])||""))} </span>
        <div style = 'border:1px solid var(--light-border-color)'>
          <div style='display:flex; background-color: var(--bg2); padding:8px 4px; border-bottom:1px solid var(--light-border-color);'>
            <div class='key' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Field </div>
            <div class='key-type' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Type </div>
            <div class='key-descr' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Description </div>
          </div>
          ${this.data?H`
              ${this.generateTree("array"===this.data["::type"]?this.data["::props"]:this.data,this.data["::type"],this.data["::array-type"])}`:""}  
        </div>
      </div>  
    `}generateTree(e,t="object",r="",a="",n="",i=0,s=0,o=""){var l,c;if("true"===this.schemaHideReadOnly){if("array"===t&&"readonly"===o)return;if(e&&"readonly"===e["::readwrite"])return}if("true"===this.schemaHideWriteOnly){if("array"===t&&"writeonly"===o)return;if(e&&"writeonly"===e["::readwrite"])return}if(!e)return H`<div class="null" style="display:inline;">
        <span style='margin-left:${16*(i+1)}px'> &nbsp; </span>
        <span class="key-label xxx-of-key"> ${a.replace("::OPTION~","")}</span>
        ${"array"===t?H`<span class='mono-font'> [ ] </span>`:"object"===t?H`<span class='mono-font'> { } </span>`:H`<span class='mono-font'> schema undefined </span>`}
      </div>`;const d=null!==(l=e["::type"])&&void 0!==l&&l.startsWith("xxx-of")?i:i+1,p="xxx-of-option"===t||"xxx-of-option"===e["::type"]||a.startsWith("::OPTION")?s:s+1,h=16*p;if(0===Object.keys(e).length)return H`<span class="td key object" style='padding-left:${h}px'>${a}</span>`;let u="",m="",f=!1;if(a.startsWith("::ONE~OF")||a.startsWith("::ANY~OF"))u=a.replace("::","").replace("~"," "),f=!0;else if(a.startsWith("::OPTION")){const e=a.split("~");u=e[1],m=e[2]}else u=a;let g="";if("object"===e["::type"]?g="array"===t?"array of object":e["::dataTypeLabel"]||e["::type"]:"array"===e["::type"]&&(g="array"===t?"array of array "+("object"!==r?`of ${r}`:""):e["::dataTypeLabel"]||e["::type"]),"object"==typeof e)return H`
        ${d>=0&&a?H`
            <div class='tr ${d<=this.schemaExpandLevel?"expanded":"collapsed"} ${e["::type"]}' data-obj='${u}' title="${e["::deprecated"]?"Deprecated":""}">
              <div class="td key ${e["::deprecated"]?"deprecated":""}" style='padding-left:${h}px'>
                ${u||m?H`
                    <span class='obj-toggle ${d<this.schemaExpandLevel?"expanded":"collapsed"}' data-obj='${u}'>
                      ${i<this.schemaExpandLevel?"-":"+"}
                    </span>`:""}
                ${"xxx-of-option"===e["::type"]||"xxx-of-array"===e["::type"]||a.startsWith("::OPTION")?H`<span class="xxx-of-key" style="margin-left:-6px">${u}</span><span class="${f?"xxx-of-key":"xxx-of-descr"}">${m}</span>`:u.endsWith("*")?H`<span class="key-label" style="display:inline-block; margin-left:-6px;">${e["::deprecated"]?"✗":""} ${u.substring(0,u.length-1)}</span><span style='color:var(--red);'>*</span>`:H`<span class="key-label" style="display:inline-block; margin-left:-6px;">${e["::deprecated"]?"✗":""} ${"::props"===u?"":u}</span>`}
                ${"xxx-of"===e["::type"]&&"array"===t?H`<span style="color:var(--primary-color)">ARRAY</span>`:""} 
              </div>
              <div class='td key-type' title="${"readonly"===e["::readwrite"]?"Read-Only":"writeonly"===e["::readwrite"]?"Write-Only":""}">
                ${(e["::type"]||"").includes("xxx-of")?"":g}
                ${"readonly"===e["::readwrite"]?" 🆁":"writeonly"===e["::readwrite"]?" 🆆":""}
              </div>
              <div class='td key-descr m-markdown-small' style='line-height:1.7'>${la(Ge(n||""))}</div>
            </div>`:H`
            ${"array"===e["::type"]&&"array"===t?H`
                <div class='tr'> 
                  <div class='td key'></div> 
                  <div class='td key-type'>
                    ${r&&"object"!==r?`${t} of ${r}`:t}
                  </div> 
                  <div class='td key-descr'></div> 
                </div>`:""}`}
        <div class='object-body'>
        ${Array.isArray(e)&&e[0]?H`${this.generateTree(e[0],"xxx-of-option","","::ARRAY~OF","",d,p,"")}`:H`
            ${Object.keys(e).map((t=>{var r;return H`
              ${["::title","::description","::type","::props","::deprecated","::array-type","::readwrite","::dataTypeLabel","::nullable"].includes(t)?"array"===e[t]["::type"]||"object"===e[t]["::type"]?H`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,e[t]["::description"],d,p,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`:"":H`${this.generateTree("array"===e[t]["::type"]?e[t]["::props"]:e[t],e[t]["::type"],e[t]["::array-type"]||"",t,(null===(r=e[t])||void 0===r?void 0:r["::description"])||"",d,p,e[t]["::readwrite"]?e[t]["::readwrite"]:"")}`}
            `}))}
          `}
        <div>
      `;const[v,b,y,x,w,$,k,S,A]=e.split("~|~");if("🆁"===b&&"true"===this.schemaHideReadOnly)return;if("🆆"===b&&"true"===this.schemaHideWriteOnly)return;const E=v.replace(/┃.*/g,"").replace(/[^a-zA-Z0-9+]/g,"").substring(0,4).toLowerCase(),T=""+(y||x||w||$?'<span class="descr-expand-toggle">➔</span>':"");let C="";return C="array"===t?H` 
        <div class='td key-type ${E}' title="${"readonly"===o?"Read-Only":"writeonly"===b?"Write-Only":""}">
          [${v}] ${"readonly"===o?"🆁":"writeonly"===o?"🆆":""}
        </div>`:H` 
        <div class='td key-type ${E}' title="${"🆁"===b?"Read-Only":"🆆"===b?"Write-Only":""}">
          ${v} ${b}
        </div>`,H`
      <div class = "tr primitive" title="${A?"Deprecated":""}">
        <div class="td key ${A}" style='padding-left:${h}px'>
          ${A?H`<span style='color:var(--red);'>✗</span>`:""}
          ${null!==(c=u)&&void 0!==c&&c.endsWith("*")?H`
              <span class="key-label">${u.substring(0,u.length-1)}</span>
              <span style='color:var(--red);'>*</span>`:a.startsWith("::OPTION")?H`<span class='xxx-of-key'>${u}</span><span class="xxx-of-descr">${m}</span>`:H`${u?H`<span class="key-label"> ${u}</span>`:H`<span class="xxx-of-descr">${S}</span>`}`}
        </div>
        ${C}
        <div class='td key-descr' style='font-size: var(--font-size-small)'>
          ${H`<span class="m-markdown-small">
            ${la(Ge("array"===t?`${T} ${n}`:S?`${T} <b>${S}:</b> ${k}`:`${T} ${k}`))}
          </span>`}
          ${y?H`<div class='' style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Constraints: </span> ${y}</div>`:""}
          ${x?H`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Default: </span>${x}</div>`:""}
          ${w?H`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>${"const"===v?"Value":"Allowed"}: </span>${w}</div>`:""}
          ${$?H`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Pattern: </span>${$}</div>`:""}
        </div>
      </div>
    `}handleAllEvents(e){if(e.target.classList.contains("obj-toggle"))this.toggleObjectExpand(e);else if(e.target.classList.contains("schema-multiline-toggle"))this.schemaDescriptionExpanded="true"===this.schemaDescriptionExpanded?"false":"true";else if(e.target.classList.contains("descr-expand-toggle")){const t=e.target.closest(".tr");t&&(t.classList.toggle("expanded-descr"),t.style.maxHeight=t.scrollHeight)}}toggleObjectExpand(e){const t=e.target.closest(".tr");t.classList.contains("expanded")?(t.classList.add("collapsed"),t.classList.remove("expanded"),e.target.innerText="+"):(t.classList.remove("collapsed"),t.classList.add("expanded"),e.target.innerText="-")}});function en(e){const t=new Ge.Renderer;return t.heading=(t,r,a,n)=>`<h${r} class="observe-me" id="${e}--${n.slug(a)}">${t}</h${r}>`,t}function tn(e){const t=e.target.closest(".tag-container").querySelector(".tag-description"),r=e.target.closest(".tag-container").querySelector(".tag-icon");if(t&&r){t.classList.contains("expanded")?(t.style.maxHeight=0,t.classList.replace("expanded","collapsed"),r.classList.replace("expanded","collapsed")):(t.style.maxHeight=`${t.scrollHeight}px`,t.classList.replace("collapsed","expanded"),r.classList.replace("collapsed","expanded"))}}function rn(e,t="",r=""){var a,n,i,s,o,l,c,d,p;const h=new Set;for(const t in e.responses)for(const r in null===(u=e.responses[t])||void 0===u?void 0:u.content){var u;h.add(r.trim())}const m=[...h].join(", "),f=this.resolvedSpec.securitySchemes.filter((t=>{var r;return t.finalKeyValue&&(null===(r=e.security)||void 0===r?void 0:r.some((e=>t.securitySchemeId in e)))}))||[],g=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===lt&&"-"!==e.value));g&&f.push(g);const v=e.xCodeSamples?Ta.call(this,e.xCodeSamples):"";return H`
    ${"read"===this.renderStyle?H`<div class='divider' part="operation-divider"></div>`:""}
    <div class='expanded-endpoint-body observe-me ${e.method} ${e.deprecated?"deprecated":""} ' part="section-operation ${e.elementId}" id='${e.elementId}'>
      ${"focused"===this.renderStyle&&"General ⦂"!==t?H`
          <div class="tag-container" part="section-operation-tag"> 
            <span class="upper" style="font-weight:bold; font-size:18px;"> ${t} </span>
            ${r?H`
                <svg class="tag-icon collapsed" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" fill="none" style="stroke:var(--primary-color); vertical-align:top; cursor:pointer"
                @click="${e=>{tn.call(this,e)}}"
                >
                  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"></path><path d="M18 4v17"></path><path d="M15 18l3 3l3 -3"></path>
                </svg>
                <div class="tag-description collapsed" style="max-height:0px; overflow:hidden; margin-top:16px; border:1px solid var(--border-color)"> 
                  <div class="m-markdown" style="padding:8px"> ${la(Ge(r))}</div>  
                </div>`:""}  
          </div>
        `:""}
      ${e.deprecated?H`<div class="bold-text red-text"> DEPRECATED </div>`:""}
      ${H`
        ${e.xBadges&&(null===(a=e.xBadges)||void 0===a?void 0:a.length)>0?H`
            <div style="display:flex; flex-wrap:wrap; margin-bottom: -24px; font-size: var(--font-size-small);">
              ${e.xBadges.map((e=>H`<span style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${e.color}, var(--input-bg)); color:var(--${e.color}); border:1px solid var(--${e.color})">${e.label}</span>`))}
            </div>
            `:""}
        <h2 part="section-operation-summary"> ${e.shortSummary||`${e.method.toUpperCase()} ${e.path}`}</h2>
        ${e.isWebhook?H`<span part="section-operation-webhook" style="color:var(--primary-color); font-weight:bold; font-size: var(--font-size-regular);"> WEBHOOK </span>`:H`
            <div part="section-operation-webhook-method" class="mono-font regular-font-size" style="text-align:left; direction:ltr; padding: 8px 0; color:var(--fg3)"> 
              <span part="label-operation-method" class="regular-font upper method-fg bold-text ${e.method}">${e.method}</span> 
              <span part="label-operation-path">${e.path}</span>
            </div>
          `}
        <slot name="${e.elementId}"></slot>`}
      ${e.description?H`<div class="m-markdown"> ${la(Ge(e.description))}</div>`:""}
      ${Ea.call(this,e.security)}
      ${null!==(n=e.externalDocs)&&void 0!==n&&n.url||null!==(i=e.externalDocs)&&void 0!==i&&i.description?H`<div style="background-color:var(--bg3); padding:2px 8px 8px 8px; margin:8px 0; border-radius:var(--border-radius)"> 
            <div class="m-markdown"> ${la(Ge((null===(s=e.externalDocs)||void 0===s?void 0:s.description)||""))} </div>
            ${null!==(o=e.externalDocs)&&void 0!==o&&o.url?H`<a style="font-family:var(--font-mono); font-size:var(--font-size-small)" href="${null===(l=e.externalDocs)||void 0===l?void 0:l.url}" target="_blank">
                  ${null===(c=e.externalDocs)||void 0===c?void 0:c.url} <div style="transform: rotate(270deg) scale(1.5); display: inline-block; margin-left:5px">⇲</div>
                </a>`:""}
          </div>`:""}
      ${v}
      <div class='expanded-req-resp-container'>
        <api-request
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          method = "${e.method}"
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${f}"
          .servers = "${e.servers}"
          server-url = "${(null===(d=e.servers)||void 0===d||null===(p=d[0])||void 0===p?void 0:p.url)||this.selectedServer.computedUrl}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          show-curl-before-try = "${this.showCurlBeforeTry}"
          accept = "${m}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${"never"===this.schemaHideReadOnly||e.isWebhook?"false":"true"}"
          schema-hide-write-only = "${"never"===this.schemaHideWriteOnly?"false":e.isWebhook?"true":"false"}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-request>

        ${e.callbacks?Ca.call(this,e.callbacks):""}

        <api-response
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          .responses = "${e.responses}"
          render-style = "${this.renderStyle}"
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${"never"===this.schemaHideReadOnly?"false":e.isWebhook?"true":"false"}"
          schema-hide-write-only = "${"never"===this.schemaHideWriteOnly||e.isWebhook?"false":"true"}"
          selected-status = "${Object.keys(e.responses||{})[0]||""}"
          exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-response>
      </div>
    </div>
  `}function an(){return this.resolvedSpec?H`
  ${this.resolvedSpec.tags.map((e=>H`
    <section id="${e.elementId}" part="section-tag" class="regular-font section-gap--read-mode observe-me" style="border-top:1px solid var(--primary-color);">
      <div class="title tag" part="section-tag-title label-tag-title">${e.name}</div>
      <slot name="${e.elementId}"></slot>
      <div class="regular-font-size">
      ${la(`\n          <div class="m-markdown regular-font">\n          ${Ge(e.description||"","true"===this.infoDescriptionHeadingsInNavBar?{renderer:en(e.elementId)}:void 0)}\n        </div>`)}
      </div>
    </section>
    <section class="regular-font section-gap--read-mode" part="section-operations-in-tag">
      ${e.paths.map((e=>rn.call(this,e)))}
    </section>
    `))}
`:""}function nn(e){return H`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400;"> Schema </span></div>
  ${"table"===this.schemaStyle?H`
      <schema-table
        .data = '${Za(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-table>`:H`
      <schema-tree
        .data = '${Za(e.component,{})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-tree>`}
  </div>`}function sn(e,t){return-1!==e.id.indexOf("schemas-")?nn.call(this,e):H`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${e.name}' id='cmp--${e.id}' >
    ${H`
      <div style="font-weight:bold"> ${e.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400"> ${t} </span> </div>
      ${e.component?H`
      <div class='mono-font regular-font-size' style='padding: 8px 0; color:var(--fg2)'> 
        <json-tree class="border tree" render-style='${this.renderStyle}' .data="${e.component}"> </json-tree>
      </div>`:""}
    `}
  </div>
  `}function on(){return this.resolvedSpec?H`
  ${this.resolvedSpec.components.map((e=>H`
    <div id="cmp--${e.name.toLowerCase()}" class='regular-font section-gap--read-mode observe-me' style="border-top:1px solid var(--primary-color);">
      <div class="title tag">${e.name}</div>
      <div class="regular-font-size">
        ${la(`<div class='m-markdown regular-font'>${Ge(e.description?e.description:"")}</div>`)}
      </div>
    </div>
    <div class='regular-font section-gap--read-mode'>
      ${e.subComponents.filter((e=>!1!==e.expanded)).map((t=>sn.call(this,t,e.name)))}
    </div>
    `))}
`:""}function ln(){const e=new Ge.Renderer;return e.heading=(e,t,r,a)=>`<h${t} class="observe-me" id="overview--${a.slug(r)}">${e}</h${t}>`,e}function cn(){var e,t,r,a;return H`
    <section id="overview" part="section-overview"
      class="observe-me ${"view"===this.renderStyle?"section-gap":"section-gap--read-mode"}">
      ${null!==(e=this.resolvedSpec)&&void 0!==e&&e.info?H`
          <div id="api-title" part="section-overview-title" style="font-size:32px">
            ${this.resolvedSpec.info.title}
            ${this.resolvedSpec.info.version?H`
              <span style = 'font-size:var(--font-size-small);font-weight:bold'>
                ${this.resolvedSpec.info.version}
              </span>`:""}
          </div>
          <div id="api-info" style="font-size:calc(var(--font-size-regular) - 1px); margin-top:8px;">
            ${null!==(t=this.resolvedSpec.info.contact)&&void 0!==t&&t.email?H`<span>${this.resolvedSpec.info.contact.name||"Email"}: 
                <a href="mailto:${this.resolvedSpec.info.contact.email}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.email}</a>
              </span>`:""}
            ${null!==(r=this.resolvedSpec.info.contact)&&void 0!==r&&r.url?H`<span>URL: <a href="${this.resolvedSpec.info.contact.url}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.url}</a></span>`:""}
            ${this.resolvedSpec.info.license?H`<span>License: 
                ${this.resolvedSpec.info.license.url?H`<a href="${this.resolvedSpec.info.license.url}" part="anchor anchor-overview">${this.resolvedSpec.info.license.name}</a>`:this.resolvedSpec.info.license.name} </span>`:""}
            ${this.resolvedSpec.info.termsOfService?H`<span><a href="${this.resolvedSpec.info.termsOfService}" part="anchor anchor-overview">Terms of Service</a></span>`:""}
            ${this.specUrl&&"true"===this.allowSpecFileDownload?H`
                <div style="display:flex; margin:12px 0; gap:8px; justify-content: start;">
                  <button class="m-btn thin-border" style="min-width:170px" part="btn btn-outline" @click='${e=>{ut(this.specUrl,"openapi-spec")}}'>Download OpenAPI spec</button>
                  ${null!==(a=this.specUrl)&&void 0!==a&&a.trim().toLowerCase().endsWith("json")?H`<button class="m-btn thin-border" style="width:200px" part="btn btn-outline" @click='${e=>{mt(this.specUrl)}}'>View OpenAPI spec (New Tab)</button>`:""}
                </div>`:""}
          </div>
          <slot name="overview"></slot>
          <div id="api-description">
          ${this.resolvedSpec.info.description?H`${la(`\n                <div class="m-markdown regular-font">\n                ${Ge(this.resolvedSpec.info.description,"true"===this.infoDescriptionHeadingsInNavBar?{renderer:ln()}:void 0)}\n              </div>`)}`:""}
          </div>
        `:""}
    </section>
  `}function dn(e){var t;const r=null===(t=this.resolvedSpec)||void 0===t?void 0:t.servers.find((t=>t.url===e));return!!r&&(this.selectedServer=r,this.requestUpdate(),this.dispatchEvent(new CustomEvent("api-server-change",{bubbles:!0,composed:!0,detail:{selectedServer:r}})),!0)}function pn(e,t){const r=[...e.currentTarget.closest("table").querySelectorAll("input, select")];let a=t.url;r.forEach((e=>{const t=new RegExp(`{${e.dataset.var}}`,"g");a=a.replace(t,e.value)})),t.computedUrl=a,this.requestUpdate()}function hn(){return this.selectedServer&&this.selectedServer.variables?H`
    <div class="table-title">SERVER VARIABLES</div>
    <table class='m-table' role='presentation'>
      ${Object.entries(this.selectedServer.variables).map((e=>H`
        <tr>
          <td style="vertical-align: middle;" >${e[0]}</td>
          <td>
            ${e[1].enum?H`
            <select
              data-var = "${e[0]}"
              @input = ${e=>{pn.call(this,e,this.selectedServer)}}
            >
            ${Object.entries(e[1].enum).map((t=>e[1].default===t[1]?H`
              <option
                selected
                label = ${t[1]}
                value = ${t[1]}
              />`:H`
              <option
                label = ${t[1]}
                value = ${t[1]}
              />`))}
            </select>`:H`
            <input
              type = "text"
              part="textbox textbox-server-var"
              spellcheck = "false"
              data-var = "${e[0]}"
              value = "${e[1].default}"
              @input = ${e=>{pn.call(this,e,this.selectedServer)}}
            />`}
          </td>
        </tr>
        ${e[1].description?H`<tr><td colspan="2" style="border:none"><span class="m-markdown-small"> ${la(Ge(e[1].description))} </span></td></tr>`:""}
      `))}
    </table>
    `:""}function un(){var e,t,r;return!this.resolvedSpec||this.resolvedSpec.specLoadError?"":H`
  <section id = 'servers' part="section-servers" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class='regular-font observe-me ${"read focused".includes(this.renderStyle)?"section-gap--read-mode":"section-gap"}'>
    <div part = "section-servers-title" class = "sub-title">API SERVER</div>
    <div class = 'mono-font' style='margin: 12px 0; font-size:calc(var(--font-size-small) + 1px);'>
      ${this.resolvedSpec.servers&&0!==(null===(e=this.resolvedSpec.servers)||void 0===e?void 0:e.length)?H`
          ${null===(t=this.resolvedSpec)||void 0===t?void 0:t.servers.map(((e,t)=>H`
            <input type = 'radio'
              name = 'api_server'
              id = 'srvr-opt-${t}'
              value = '${e.url}'
              @change = ${()=>{dn.call(this,e.url)}}
              .checked = '${this.selectedServer.url===e.url}'
              style = 'margin:4px 0; cursor:pointer'
            />
              <label style='cursor:pointer' for='srvr-opt-${t}'>
                ${e.url} ${e.description?H`- <span class='regular-font'>${e.description} </span>`:""}
              </label>
            <br/>
          `))}
      `:""}
      <div class="table-title primary-text" part="label-selected-server"> SELECTED: ${(null===(r=this.selectedServer)||void 0===r?void 0:r.computedUrl)||"none"}</div>
    </div>
    <slot name="servers"></slot>
    ${hn.call(this)}
  </section>`}function mn(e,t="toggle"){const r=null==e?void 0:e.closest(".nav-bar-tag-and-paths"),a=null==r?void 0:r.querySelector(".nav-bar-paths-under-tag");if(r){const e=r.classList.contains("expanded");!e||"toggle"!==t&&"collapse"!==t?e||"toggle"!==t&&"expand"!==t||(r.classList.replace("collapsed","expanded"),a.style.maxHeight=`${a.scrollHeight}px`):(a.style.maxHeight=0,r.classList.replace("expanded","collapsed"))}}function fn(e){var t,r,a,n;if("click"!==e.type&&("keyup"!==e.type||13!==e.keyCode))return;const i=e.target;e.stopPropagation(),"navigate"===(null===(t=i.dataset)||void 0===t?void 0:t.action)?this.scrollToEventTarget(e,!1):"expand-all"===(null===(r=i.dataset)||void 0===r?void 0:r.action)||"collapse-all"===(null===(a=i.dataset)||void 0===a?void 0:a.action)?function(e,t="expand-all"){if("click"!==e.type&&("keyup"!==e.type||13!==e.keyCode))return;const r=[...e.target.closest(".nav-scroll").querySelectorAll(".nav-bar-tag-and-paths")];"expand-all"===t?r.forEach((e=>{const t=e.querySelector(".nav-bar-paths-under-tag");e.classList.replace("collapsed","expanded"),t.style.maxHeight=`${null==t?void 0:t.scrollHeight}px`})):r.forEach((e=>{e.classList.replace("expanded","collapsed"),e.querySelector(".nav-bar-paths-under-tag").style.maxHeight=0}))}(e,i.dataset.action):"expand-collapse-tag"===(null===(n=i.dataset)||void 0===n?void 0:n.action)&&mn(i,"toggle")}function gn(){var e,t,r,a;return!this.resolvedSpec||this.resolvedSpec.specLoadError?H`
      <nav class='nav-bar' part='section-navbar'>
        <slot name='nav-logo' class='logo'></slot>
      </nav>
    `:H`
  <nav class='nav-bar ${this.renderStyle}' part='section-navbar'>
    <slot name='nav-logo' class='logo'></slot>
    ${"false"===this.allowSearch&&"false"===this.allowAdvancedSearch?"":H`
        <div style='display:flex; flex-direction:row; justify-content:center; align-items:stretch; padding:8px 24px 12px 24px; ${"false"===this.allowAdvancedSearch?"border-bottom: 1px solid var(--nav-hover-bg-color)":""}' part='section-navbar-search'>
          ${"false"===this.allowSearch?"":H`
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
              ${this.matchPaths?H`
                  <button @click = '${this.onClearSearch}' class='m-btn thin-border' style='margin-left:5px; color:var(--nav-text-color); width:75px; padding:6px 8px;' part='btn btn-outline btn-clear-filter'>
                    CLEAR
                  </button>`:""}
            `}
          ${"false"===this.allowAdvancedSearch||this.matchPaths?"":H`
              <button class='m-btn primary' part='btn btn-fill btn-search' style='margin-left:5px; padding:6px 8px; width:75px' @click='${this.onShowSearchModalClicked}'>
                SEARCH
              </button>
            `}
        </div>
      `}
    ${H`<nav class='nav-scroll' tabindex='-1' part='section-navbar-scroll' @click='${e=>fn.call(this,e)}' @keyup='${e=>fn.call(this,e)}' >
      ${"false"!==this.showInfo&&this.resolvedSpec.info?H`
          ${"true"===this.infoDescriptionHeadingsInNavBar?H`
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?H`<div class='nav-bar-info ${this.navActiveItemMarker}' id='link-overview' data-content-id='overview' data-action='navigate' tabindex='0' part='section-navbar-item section-navbar-overview'> 
                    ${(null===(e=this.resolvedSpec.info)||void 0===e||null===(t=e.title)||void 0===t?void 0:t.trim())||"Overview"}
                  </div>`:""}
              <div class='overview-headers'>
                ${this.resolvedSpec.infoDescriptionHeaders.map((e=>H`
                  <div
                    class='nav-bar-h${e.depth} ${this.navActiveItemMarker}' 
                    id='link-overview--${(new Ge.Slugger).slug(e.text)}'
                    data-action='navigate' 
                    data-content-id='overview--${(new Ge.Slugger).slug(e.text)}' 
                  >
                    ${e.text}
                  </div>`))}
              </div>
              ${this.resolvedSpec.infoDescriptionHeaders.length>0?H`<hr style='border-top: 1px solid var(--nav-hover-bg-color); border-width:1px 0 0 0; margin: 15px 0 0 0'/>`:""}
            `:H`<div class='nav-bar-info ${this.navActiveItemMarker}' id='link-overview' data-action='navigate' data-content-id='overview' tabindex='0'> 
              ${(null===(r=this.resolvedSpec.info)||void 0===r||null===(a=r.title)||void 0===a?void 0:a.trim())||"Overview"}
            </div>`}
        `:""}
    
      ${"false"===this.allowServerSelection?"":H`<div class='nav-bar-info ${this.navActiveItemMarker}' id='link-servers' data-action='navigate' data-content-id='servers' tabindex='0' part='section-navbar-item section-navbar-servers'> API Servers </div>`}
      ${"false"!==this.allowAuthentication&&this.resolvedSpec.securitySchemes?H`<div class='nav-bar-info ${this.navActiveItemMarker}' id='link-auth' data-action='navigate' data-content-id='auth' tabindex='0' part='section-navbar-item section-navbar-auth'> Authentication </div>`:""}

      <div id='link-operations-top' class='nav-bar-section operations' data-action='navigate' data-content-id='${"focused"===this.renderStyle?"":"operations-top"}' part='section-navbar-item section-navbar-operations-top'>
        <div style='font-size:16px; display:flex; margin-left:10px;'>
          ${"focused"===this.renderStyle?H`
              <div class='nav-bar-expand-all'
                data-action='expand-all'
                tabindex='0' 
                title='Expand all'
              >▸</div>
              <div class='nav-bar-collapse-all'
                data-action='collapse-all'
                tabindex='0' 
                title='Collapse all'
              >▸</div>`:""}  
        </div>
        <div class='nav-bar-section-title'> OPERATIONS </div>
      </div>

      <!-- TAGS AND PATHS-->
      ${this.resolvedSpec.tags.filter((e=>e.paths.filter((e=>pt(this.matchPaths,e,this.matchType))).length)).map((e=>{var t;return H`
          <div class='nav-bar-tag-and-paths ${"read"===this.renderStyle||e.expanded?"expanded":"collapsed"}' >
            ${"General ⦂"===e.name?H`<hr style='border:none; border-top: 1px dotted var(--nav-text-color); opacity:0.3; margin:-1px 0 0 0;'/>`:H`
                <div 
                  class='nav-bar-tag ${this.navActiveItemMarker}'
                  part='section-navbar-item section-navbar-tag'
                  id='link-${e.elementId}'
                  data-action='${"read"===this.renderStyle||"show-description"===this.onNavTagClick?"navigate":"expand-collapse-tag"}'
                  data-content-id='${("read"===this.renderStyle?`${e.elementId}`:"show-description"===this.onNavTagClick)?`${e.elementId}`:""}'
                  data-first-path-id='${e.firstPathId}'
                  tabindex='0'
                >
                  <div style="pointer-events:none;">${e.name}</div>
                  <div class='nav-bar-tag-icon' tabindex='0' data-action='expand-collapse-tag'></div>
                </div>
              `}
            ${"true"===this.infoDescriptionHeadingsInNavBar?H`
                ${"focused"===this.renderStyle&&"expand-collapse"===this.onNavTagClick?"":H`
                    <div class='tag-headers'>
                      ${e.headers.map((t=>H`
                      <div
                        class='nav-bar-h${t.depth} ${this.navActiveItemMarker}'
                        part='section-navbar-item section-navbar-h${t.depth}'
                        id='link-${e.elementId}--${(new Ge.Slugger).slug(t.text)}'
                        data-action='navigate'
                        data-content-id='${e.elementId}--${(new Ge.Slugger).slug(t.text)}'
                        tabindex='0'
                      > ${t.text}</div>`))}
                    </div>`}`:""}
            <div class='nav-bar-paths-under-tag' style='max-height:${e.expanded||"read"===this.renderStyle?50*((null===(t=e.paths)||void 0===t?void 0:t.length)||1):0}px;'>
              <!-- Paths in each tag (endpoints) -->
              ${e.paths.filter((e=>!this.matchPaths||pt(this.matchPaths,e,this.matchType))).map((e=>H`
              <div 
                class='nav-bar-path ${this.navActiveItemMarker} ${"true"===this.usePathInNavBar?"small-font":""}'
                part='section-navbar-item section-navbar-path'
                data-action='navigate'
                data-content-id='${e.elementId}'
                id='link-${e.elementId}'
                tabindex='0'
              >
                <span style = 'display:flex; pointer-events: none; align-items:start; ${e.deprecated?"filter:opacity(0.5)":""}'>
                  ${H`<span class='nav-method ${this.showMethodInNavBar} ${e.method}' style='pointer-events: none;'>
                      ${"as-colored-block"===this.showMethodInNavBar?e.method.substring(0,3).toUpperCase():e.method.toUpperCase()}
                    </span>`}
                  ${e.isWebhook?H`<span style='font-weight:bold; pointer-events: none; margin-right:8px; font-size: calc(var(--font-size-small) - 2px)'>WEBHOOK</span>`:""}
                  ${"true"===this.usePathInNavBar?H`<span style='pointer-events: none;' class='mono-font'>${e.path}</span>`:e.summary||e.shortSummary}
                </span>
              </div>`))}
            </div>
          </div>
        `}))}

      <!-- COMPONENTS -->
      ${this.resolvedSpec.components&&"true"===this.showComponents&&"focused"===this.renderStyle?H`
          <div id='link-components' class='nav-bar-section components'>
            <div></div>
            <div class='nav-bar-section-title'>COMPONENTS</div>
          </div>
          ${this.resolvedSpec.components.map((e=>e.subComponents.length?H`
              <div class='nav-bar-tag'
                part='section-navbar-item section-navbar-tag'
                data-action='navigate' 
                data-content-id='cmp--${e.name.toLowerCase()}' 
                id='link-cmp--${e.name.toLowerCase()}'
              >
                ${e.name}
              </div>
              ${e.subComponents.filter((e=>!1!==e.expanded)).map((e=>H`
                <div class='nav-bar-path' data-action='navigate' data-content-id='cmp--${e.id}' id='link-cmp--${e.id}'>
                  <span style = 'pointer-events: none;'> ${e.name} </span>
                </div>`))}`:""))}`:""}
    </nav>`}
</nav>
`}function vn(e){const t=new Ge.Renderer;return t.heading=(t,r,a,n)=>`<h${r} class="observe-me" id="${e}--${n.slug(a)}">${t}</h${r}>`,t}function bn(e){return H`
    <div class='regular-font section-gap--focused-mode' part="section-operations-in-tag">
      ${e}
    </div>`}function yn(){var e;if("true"===this.showInfo)return bn(cn.call(this));const t=this.resolvedSpec.tags[0],r=null===(e=this.resolvedSpec.tags[0])||void 0===e?void 0:e.paths[0];return bn(t&&r?rn.call(this,r,t.name):"")}function xn(e){return H`
    <h1 id="${e.elementId}">${e.name}</h1>
    ${"show-description"===this.onNavTagClick&&e.description?H`
        <div class="m-markdown">
          ${la(`\n            <div class="m-markdown regular-font">\n              ${Ge(e.description||"","true"===this.infoDescriptionHeadingsInNavBar?{renderer:vn(e.elementId)}:void 0)}\n            </div>`)}
        </div>`:""}
  `}function wn(){if(!this.focusedElementId||!this.resolvedSpec)return;const e=this.focusedElementId;let t,r=null,a=null,n=0;if(e.startsWith("overview")&&"true"===this.showInfo)t=cn.call(this);else if("auth"===e&&"true"===this.allowAuthentication)t=Aa.call(this);else if("servers"===e&&"true"===this.allowServerSelection)t=un.call(this);else if("operations-top"===e)t=H`
    <div id="operations-top" class="observe-me">
      <slot name="operations-top"></slot>
    </div>`;else if(e.startsWith("cmp--")&&"true"===this.showComponents)t=on.call(this);else if(e.startsWith("tag--")){const r=e.indexOf("--",4)>0?e.substring(0,e.indexOf("--",5)):e;a=this.resolvedSpec.tags.find((e=>e.elementId===r)),t=a?bn.call(this,xn.call(this,a)):yn.call(this)}else{for(n=0;n<this.resolvedSpec.tags.length&&(a=this.resolvedSpec.tags[n],r=this.resolvedSpec.tags[n].paths.find((t=>`${t.elementId}`===e)),!r);n+=1);if(r){mn(this.shadowRoot.getElementById(`link-${e}`),"expand"),t=bn.call(this,rn.call(this,r,a.name||"",a.description||""))}else t=yn.call(this)}return t}function $n(e){if(e.expanded)e.expanded=!1,"true"===this.updateRoute&&this.replaceHistoryState("");else if(e.expanded=!0,"true"===this.updateRoute){const t=`${this.routePrefix||"#"}${e.elementId}`;window.location.hash!==t&&this.replaceHistoryState(e.elementId)}this.requestUpdate()}function kn(e,t="expand-all"){const r=[...e.querySelectorAll(".section-tag")];"expand-all"===t?r.map((e=>{e.classList.replace("collapsed","expanded")})):r.map((e=>{e.classList.replace("expanded","collapsed")}))}function Sn(e,t="expand-all"){kn.call(this,e.target.closest(".operations-root"),t)}function An(e,t=!1){return H`
  <summary @click="${t=>{$n.call(this,e,t)}}" part="section-endpoint-head-${e.expanded?"expanded":"collapsed"}" class='endpoint-head ${e.method} ${e.deprecated?"deprecated":""} ${t||e.expanded?"expanded":"collapsed"}'>
    <div part="section-endpoint-head-method" class="method ${e.method} ${e.deprecated?"deprecated":""}"> ${e.method} </div> 
    <div  part="section-endpoint-head-path" class="path ${e.deprecated?"deprecated":""}"> 
      ${e.path} 
      ${e.isWebhook?H`<span style="font-family: var(--font-regular); font-size: var(--); font-size: var(--font-size-small); color:var(--primary-color); margin-left: 16px"> Webhook</span>`:""}
    </div>
    ${e.deprecated?H`
        <span style="font-size:var(--font-size-small); text-transform:uppercase; font-weight:bold; color:var(--red); margin:2px 0 0 5px;"> 
          deprecated 
        </span>`:""}
    ${this.showSummaryWhenCollapsed?H`
        <div class="only-large-screen" style="min-width:60px; flex:1"></div>
        <div part="section-endpoint-head-description" class="descr">${e.summary||e.shortSummary} </div>`:""}
  </summary>
  `}function En(e){var t,r,a,n,i,s,o;const l=new Set;for(const t in e.responses)for(const r in null===(c=e.responses[t])||void 0===c?void 0:c.content){var c;l.add(r.trim())}const d=[...l].join(", "),p=this.resolvedSpec.securitySchemes.filter((t=>{var r;return t.finalKeyValue&&(null===(r=e.security)||void 0===r?void 0:r.some((e=>t.securitySchemeId in e)))}))||[],h=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===lt&&"-"!==e.value));h&&p.push(h);const u=e.xCodeSamples?Ta(e.xCodeSamples):"";return H`
  <div part="section-endpoint-body-${e.expanded?"expanded":"collapsed"}" class='endpoint-body ${e.method} ${e.deprecated?"deprecated":""}'>
    <div class="summary">
      ${e.summary?H`<div class="title" part="section-endpoint-body-title">${e.summary}<div>`:e.shortSummary!==e.description?H`<div class="title" part="section-endpoint-body-title">${e.shortSummary}</div>`:""}
      ${e.xBadges&&(null===(t=e.xBadges)||void 0===t?void 0:t.length)>0?H`
          <div style="display:flex; flex-wrap:wrap;font-size: var(--font-size-small);">
            ${e.xBadges.map((e=>H`<span part="endpoint-badge" style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${e.color}, var(--input-bg)); color:var(--${e.color}); border:1px solid var(--${e.color})">${e.label}</span>`))}
          </div>
          `:""}

      ${e.description?H`<div part="section-endpoint-body-description" class="m-markdown"> ${la(Ge(e.description))}</div>`:""}
      ${null!==(r=e.externalDocs)&&void 0!==r&&r.url||null!==(a=e.externalDocs)&&void 0!==a&&a.description?H`<div style="background-color:var(--bg3); padding:2px 8px 8px 8px; margin:8px 0; border-radius:var(--border-radius)"> 
            <div class="m-markdown"> ${la(Ge((null===(n=e.externalDocs)||void 0===n?void 0:n.description)||""))} </div>
            ${null!==(i=e.externalDocs)&&void 0!==i&&i.url?H`<a style="font-family:var(--font-mono); font-size:var(--font-size-small)" href="${null===(s=e.externalDocs)||void 0===s?void 0:s.url}" target="_blank"> 
                  ${null===(o=e.externalDocs)||void 0===o?void 0:o.url} <div style="transform: rotate(270deg) scale(1.5); display: inline-block; margin-left:5px">⇲</div>
                </a>`:""}
          </div>`:""}
      <slot name="${e.elementId}"></slot>
      ${Ea.call(this,e.security)}
      ${u}
    </div>  
    <div class='req-resp-container'> 
      <div style="display:flex; flex-direction:column" class="view-mode-request ${this.layout}-layout">
        <api-request
          class = "${this.renderStyle}-mode ${this.layout}-layout"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          method = "${e.method}"
          path = "${e.path}"
          .security = "${e.security}"
          .parameters = "${e.parameters}"
          .request_body = "${e.requestBody}"
          .api_keys = "${p}"
          .servers = "${e.servers}" 
          server-url = "${e.servers&&e.servers.length>0?e.servers[0].url:this.selectedServer.computedUrl}" 
          active-schema-tab = "${this.defaultSchemaTab}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          show-curl-before-try = "${this.showCurlBeforeTry}"
          accept = "${d}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}" 
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${"never"===this.schemaHideReadOnly||e.isWebhook?"false":"true"}"
          schema-hide-write-only = "${"never"===this.schemaHideWriteOnly?"false":e.isWebhook?"true":"false"}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </api-request>

          ${e.callbacks?Ca.call(this,e.callbacks):""}
        </div>  

        <api-response
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${e.isWebhook}"
          .responses="${e.responses}"
          active-schema-tab = "${this.defaultSchemaTab}" 
          render-style="${this.renderStyle}" 
          schema-style="${this.schemaStyle}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${"never"===this.schemaHideReadOnly?"false":e.isWebhook?"true":"false"}"
          schema-hide-write-only = "${"never"===this.schemaHideWriteOnly||e.isWebhook?"false":"true"}"
          selected-status = "${Object.keys(e.responses||{})[0]||""}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, file-input:file-input, 
          textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, anchor:anchor, anchor-param-example:anchor-param-example, btn-clear-resp:btn-clear-resp,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-response>
      </div>
  </div>`}function Tn(e=!0,t=!0,r=!1){return this.resolvedSpec?H`
    ${e?H`
        <div style="display:flex; justify-content:flex-end;"> 
          <span @click="${e=>Sn(e,"expand-all")}" style="color:var(--primary-color); cursor:pointer;">
            Expand all
          </span> 
          &nbsp;|&nbsp; 
          <span @click="${e=>Sn(e,"collapse-all")}" style="color:var(--primary-color); cursor:pointer;" >
            Collapse all
          </span> 
          &nbsp; sections
        </div>`:""}
    ${this.resolvedSpec.tags.map((e=>H`
      ${t?H` 
          <div class='regular-font section-gap section-tag ${e.expanded?"expanded":"collapsed"}'> 
            <div class='section-tag-header' @click="${()=>{e.expanded=!e.expanded,this.requestUpdate()}}">
              <div id='${e.elementId}' class="sub-title tag" style="color:var(--primary-color)">${e.name}</div>
            </div>
            <div class='section-tag-body'>
              <slot name="${e.elementId}"></slot>
              <div class="regular-font regular-font-size m-markdown" style="padding-bottom:12px">
                ${la(Ge(e.description||""))}
              </div>
              ${e.paths.filter((e=>!this.matchPaths||pt(this.matchPaths,e,this.matchType))).map((e=>H`
                <section part="section-endpoint" id='${e.elementId}' class='m-endpoint regular-font ${e.method} ${r||e.expanded?"expanded":"collapsed"}'>
                  ${An.call(this,e,r)}      
                  ${r||e.expanded?En.call(this,e):""}
                </section>`))}
            </div>
          </div>`:H`
          <div class='section-tag-body'>
          ${e.paths.filter((e=>!this.matchPaths||pt(this.matchPaths,e,this.matchType))).map((e=>H`
            <section id='${e.elementId}' class='m-endpoint regular-font ${e.method} ${r||e.expanded?"expanded":"collapsed"}'>
              ${An.call(this,e,r)}      
              ${r||e.expanded?En.call(this,e):""}
            </section>`))}
          </div>
        `}
  `))}`:""}function Cn(){return H`
  <header class="row main-header regular-font" part="section-header" style="padding:8px 4px 8px 4px;min-height:48px;">
    <div class="only-large-screen-flex" style="align-items: center;">
      <slot name="logo" class="logo" part="section-logo">
        ${e="height:36px;width:36px;margin-left:5px",H`
  <div style=${e}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511 512">
      <path d="M351 411a202 202 0 01-350 0 203 203 0 01333-24 203 203 0 0117 24zm0 0" fill="#adc165"/>
      <path d="M334 387a202 202 0 01-216-69 202 202 0 01216 69zm78 32H85a8 8 0 01-8-8 8 8 0 018-8h327a8 8 0 017 8 8 8 0 01-7 8zm0 0" fill="#99aa52"/>
      <path d="M374 338l-5 30a202 202 0 01-248-248 203 203 0 01253 218zm0 0" fill="#ffc73b"/>
      <path d="M374 338a202 202 0 01-100-197 203 203 0 01100 197zm38 81l-6-2-231-231a8 8 0 0111-11l231 230a8 8 0 01-5 14zm0 0" fill="#efb025"/>
      <path d="M311 175c0 75 40 140 101 175a202 202 0 000-350 202 202 0 00-101 175zm0 0" fill="#ff903e"/>
      <path d="M412 419a8 8 0 01-8-8V85a8 8 0 0115 0v326a8 8 0 01-7 8zm0 0" fill="#e87425"/>
    </svg>
  </div>    
`}
        <!-- m-logo style="height:36px;width:36px;margin-left:5px"></m-logo -->
      </slot>  
      <div class="header-title" part="label-header-title">${this.headingText}</div>
    </div>  
    <div style="margin: 0px 8px;display:flex;flex:1">
      ${"false"===this.allowSpecUrlLoad?"":H`
          <input id="spec-url" 
            type="text" 
            style="font-size:var(--font-size-small)" 
            class="header-input mono-font"
            part="textbox textbox-spec-url" 
            placeholder="Spec URL" 
            value="${this.specUrl||""}" 
            @change="${this.onSpecUrlChange}" 
            spellcheck="false"
          >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div> 
        `} 
      ${"false"===this.allowSpecFileLoad?"":H`
          <input id="spec-file" 
            part = "file-input"
            type="file" 
            style="display:none" 
            value="${this.specFile||""}" 
            @change="${this.onSpecFileChange}" 
            spellcheck="false"
           >
          <button class="m-btn primary only-large-screen" style="margin-left:10px;" part="btn btn-fill" @click="${this.onFileLoadClick}"> LOCAL JSON FILE </button>
        `}
      <slot name="header"></slot>
      ${"false"===this.allowSearch||"read focused".includes(this.renderStyle)?"":H`  
          <input id="search" class="header-input" type="text" part="textbox textbox-header-filter" placeholder="Filter" @change="${this.onSearchChange}" style="max-width:130px;margin-left:10px;" spellcheck="false" >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
        `}
      
      ${"false"===this.allowAdvancedSearch||"read focused".includes(this.renderStyle)?"":H`
          <button class="m-btn primary only-large-screen" part="btn btn-fill btn-search" style="margin-left:10px;" @click="${this.onShowSearchModalClicked}">
            Search
          </button>
        `}
    </div>
    </header>`;var e}customElements.define("api-response",class extends ce{constructor(){super(),this.selectedStatus="",this.headersForEachRespStatus={},this.mimeResponsesForEachStatus={},this.activeSchemaTab="schema"}static get properties(){return{callback:{type:String},webhook:{type:String},responses:{type:Object},parser:{type:Object},schemaStyle:{type:String,attribute:"schema-style"},renderStyle:{type:String,attribute:"render-style"},selectedStatus:{type:String,attribute:"selected-status"},selectedMimeType:{type:String,attribute:"selected-mime-type"},activeSchemaTab:{type:String,attribute:"active-schema-tab"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"}}}static get styles(){return[Je,Qe,at,et,Xe,Ua,c`
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
      }`,st]}render(){return H`
    <div class="col regular-font response-panel ${this.renderStyle}-mode">
      <div class=" ${"true"===this.callback?"tiny-title":"req-res-title"} "> 
        ${"true"===this.callback?"CALLBACK RESPONSE":"RESPONSE"}
      </div>
      <div>
        ${this.responseTemplate()}
      <div>  
    </div>  
    `}resetSelection(){this.selectedStatus="",this.selectedMimeType=""}responseTemplate(){if(!this.responses)return"";for(const a in this.responses){this.selectedStatus||(this.selectedStatus=a);const n={};for(const r in null===(e=this.responses[a])||void 0===e?void 0:e.content){var e,t;const i=this.responses[a].content[r];this.selectedMimeType||(this.selectedMimeType=r);const s=Za(i.schema,{}),o=Ya(i.schema,r,i.examples,i.example,"true"!==this.callback&&"true"!==this.webhook,"true"===this.callback||"true"===this.webhook,r.includes("json")?"json":"text");n[r]={description:this.responses[a].description,examples:o,selectedExample:(null===(t=o[0])||void 0===t?void 0:t.exampleId)||"",schemaTree:s}}const i=[];for(const e in null===(r=this.responses[a])||void 0===r?void 0:r.headers){var r;i.push({name:e,...this.responses[a].headers[e]})}this.headersForEachRespStatus[a]=i,this.mimeResponsesForEachStatus[a]=n}return H`
      ${Object.keys(this.responses).length>1?H`<div class='row' style='flex-wrap:wrap'>
          ${Object.keys(this.responses).map((e=>H`
            ${"$$ref"===e?"":H`
                <button 
                  @click="${()=>{this.selectedStatus=e,this.responses[e].content&&Object.keys(this.responses[e].content)[0]?this.selectedMimeType=Object.keys(this.responses[e].content)[0]:this.selectedMimeType=void 0}}"
                  class='m-btn small ${this.selectedStatus===e?"primary":""}'
                  part="btn ${this.selectedStatus===e?"btn-response-status btn-selected-response-status":" btn-response-status"}"
                  style='margin: 8px 4px 0 0'
                > 
                  ${e} 
                </button>`}`))}`:H`<span>${Object.keys(this.responses)[0]}</span>`}
      </div>

      ${Object.keys(this.responses).map((e=>{var t,r;return H`
        <div style = 'display: ${e===this.selectedStatus?"block":"none"}' >
          <div class="top-gap">
            <span class="resp-descr m-markdown ">${la(Ge((null===(t=this.responses[e])||void 0===t?void 0:t.description)||""))}</span>
            ${this.headersForEachRespStatus[e]&&(null===(r=this.headersForEachRespStatus[e])||void 0===r?void 0:r.length)>0?H`${this.responseHeaderListTemplate(this.headersForEachRespStatus[e])}`:""}
          </div>
          ${0===Object.keys(this.mimeResponsesForEachStatus[e]).length?"":H`  
              <div class="tab-panel col">
                <div class="tab-buttons row" @click="${e=>{"button"===e.target.tagName.toLowerCase()&&(this.activeSchemaTab=e.target.dataset.tab)}}" >
                  <button class="tab-btn ${"example"===this.activeSchemaTab?"active":""}" data-tab = 'example'>EXAMPLE </button>
                  <button class="tab-btn ${"example"!==this.activeSchemaTab?"active":""}" data-tab = 'schema' >SCHEMA</button>
                  <div style="flex:1"></div>
                  ${1===Object.keys(this.mimeResponsesForEachStatus[e]).length?H`<span class='small-font-size gray-text' style='align-self:center; margin-top:8px;'> ${Object.keys(this.mimeResponsesForEachStatus[e])[0]} </span>`:H`${this.mimeTypeDropdownTemplate(Object.keys(this.mimeResponsesForEachStatus[e]))}`}
                </div>
                ${"example"===this.activeSchemaTab?H`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeExampleTemplate(this.mimeResponsesForEachStatus[e][this.selectedMimeType])}
                    </div>`:H`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeSchemaTemplate(this.mimeResponsesForEachStatus[e][this.selectedMimeType])}
                    </div>`}
              </div>
            `}`}))}
    `}responseHeaderListTemplate(e){return H`
      <div style="padding:16px 0 8px 0" class="resp-headers small-font-size bold-text">RESPONSE HEADERS</div> 
      <table role="presentation" style="border-collapse: collapse; margin-bottom:16px; border:1px solid var(--border-color); border-radius: var(--border-radius)" class="small-font-size mono-font">
        ${e.map((e=>{var t,r;return H`
          <tr>
            <td style="padding:8px; vertical-align: baseline; min-width:120px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${e.name||""}
            </td> 
            <td style="padding:4px; vertical-align: baseline; padding:0 5px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${(null===(t=e.schema)||void 0===t?void 0:t.type)||""}
            </td> 
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color);text-overflow: ellipsis;">
              <div class="m-markdown-small regular-font" >${la(Ge(e.description||""))}</div>
            </td>
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${(null===(r=e.schema)||void 0===r?void 0:r.example)||""}
            </td>
          </tr>
        `}))}
    </table>`}mimeTypeDropdownTemplate(e){return H`
      <select aria-label='mime types' @change="${e=>{this.selectedMimeType=e.target.value}}" style='margin-bottom: -1px; z-index:1'>
        ${e.map((e=>H`<option value='${e}' ?selected = '${e===this.selectedMimeType}'> ${e} </option>`))}
      </select>`}onSelectExample(e){[...e.target.closest(".example-panel").querySelectorAll(".example")].forEach((t=>{t.style.display=t.dataset.example===e.target.value?"block":"none"}))}mimeExampleTemplate(e){return e?H`
      ${1===e.examples.length?H`
          ${"json"===e.examples[0].exampleFormat?H`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?H`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?H`<div class="m-markdown-small" style="padding: 4px 0"> ${la(Ge(e.examples[0].exampleDescription||""))} </div>`:""}
              <json-tree 
                render-style = '${this.renderStyle}'
                .data="${e.examples[0].exampleValue}"
                class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'
                exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
              ></json-tree>`:H`
              ${e.examples[0].exampleSummary&&e.examples[0].exampleSummary.length>80?H`<div style="padding: 4px 0"> ${e.examples[0].exampleSummary} </div>`:""}
              ${e.examples[0].exampleDescription?H`<div class="m-markdown-small" style="padding: 4px 0"> ${la(Ge(e.examples[0].exampleDescription||""))} </div>`:""}
              <pre class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'>${e.examples[0].exampleValue}</pre>
            `}`:H`
          <span class = 'example-panel ${"read"===this.renderStyle?"border pad-8-16":"border-top pad-top-8"}'>
            <select aria-label='response examples' style="min-width:100px; max-width:100%" @change='${e=>this.onSelectExample(e)}'>
              ${e.examples.map((t=>H`<option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample} > 
                ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary} 
              </option>`))}
            </select>
            ${e.examples.map((t=>H`
              <div class="example" data-example = '${t.exampleId}' style = "display: ${t.exampleId===e.selectedExample?"block":"none"}">
                ${t.exampleSummary&&t.exampleSummary.length>80?H`<div style="padding: 4px 0"> ${t.exampleSummary} </div>`:""}
                ${t.exampleDescription?H`<div class="m-markdown-small"  style="padding: 4px 0"> ${la(Ge(t.exampleDescription||""))} </div>`:""}
                ${"json"===t.exampleFormat?H`
                    <json-tree 
                      render-style = '${this.renderStyle}'
                      .data = '${t.exampleValue}'
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
                    ></json-tree>`:H`<pre>${t.exampleValue}</pre>`}
              </div>  
            `))}
          </span>  
        `}
    `:H`
        <pre style='color:var(--red)' class = '${"read"===this.renderStyle?"read example-panel border pad-8-16":"example-panel border-top"}'> No example provided </pre>
      `}mimeSchemaTemplate(e){return e?H`
      ${"table"===this.schemaStyle?H`
          <schema-table
            .data = "${e.schemaTree}"
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
            exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </schema-table> `:H`
          <schema-tree
            .data = '${e.schemaTree}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
            exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </schema-tree>`}`:H`
        <pre style='color:var(--red)' class = '${"read"===this.renderStyle?"border pad-8-16":"border-top"}'> Schema not found</pre>
      `}});const On=c`
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
`;function In(){var e;return document.addEventListener("close",(()=>{this.showAdvancedSearchDialog=!1})),document.addEventListener("open",this.onOpenSearchDialog),H`
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
          @keyup = "${e=>this.onAdvancedSearch(e,400)}"
        >
        <div style="display:flex; margin:8px 0 24px;">
          <div>
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-path" checked @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label for="search-api-path" style="cursor:pointer;"> API Path </label>
            </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-descr" checked @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-descr"> API Description </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-params" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-params"> API Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-request-body" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-request-body"> Request Body Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-resp-descr" @change = "${e=>this.onAdvancedSearch(e,0)}">
            <label style="cursor:pointer;" for="search-api-resp-descr"> Response Description </label>
          </div>
        </div>
      </span>
      
      ${null===(e=this.advancedSearchMatches)||void 0===e?void 0:e.map((e=>H`
      <div
        class="mono-font small-font-size hover-bg"
        style='padding: 5px; cursor: pointer; border-bottom: 1px solid var(--light-border-color); ${e.deprecated?"filter:opacity(0.5);":""}' 
        data-content-id='${e.elementId}'
        tabindex = '0'
        @click="${e=>{this.matchPaths="",this.showAdvancedSearchDialog=!1,this.requestUpdate(),this.scrollToEventTarget(e,!0)}}"
      > 
        <span class="upper bold-text method-fg ${e.method}">${e.method}</span> 
        <span>${e.path}</span>
        <span class="regular-font gray-text">${e.summary}</span>
      </div>
    `))}
    </dialog-box>
  `}customElements.define("dialog-box",class extends ce{static get properties(){return{heading:{type:String,attribute:"heading"},show:{type:String,attribute:"show"}}}static get styles(){return[On]}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",(e=>{"Escape"===e.code&&this.onClose()}))}attributeChangedCallback(e,t,r){t!==r&&("heading"===e&&(this.heading=r),"show"===e&&(this.show=r,"true"===r&&document.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0,detail:this})))),super.attributeChangedCallback(e,t,r)}render(){return H`
    ${"true"===this.show?H`
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
        </div>`:""}`}onClose(){document.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}});const _n={color:{inputReverseFg:"#fff",inputReverseBg:"#333",headerBg:"#444",getRgb(e){if(0===e.indexOf("#")&&(e=e.slice(1,7)),3!==e.length&&4!==e.length||(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}},luminanace(e){const t=this.getRgb(e);return.299*t.r+.587*t.g+.114*t.b},invert(e){return this.luminanace(e)>135?"#000":"#fff"},opacity(e,t){const r=this.getRgb(e);return`rgba(${r.r}, ${r.g}, ${r.b}, ${t})`},brightness(e,t){const r=this.getRgb(e);return r.r+=t,r.g+=t,r.b+=t,r.r>255?r.r=255:r.r<0&&(r.r=0),r.g>255?r.g=255:r.g<0&&(r.g=0),r.b>255?r.b=255:r.b<0&&(r.b=0),`#${r.r.toString(16).padStart(2,"0")}${r.g.toString(16).padStart(2,"0")}${r.b.toString(16).padStart(2,"0")}`},hasGoodContrast(e,t){return this.luminanace(e)-this.luminanace(t)}}};function Rn(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/i.test(e)}function Ln(e,t={}){let r={};const a=t.primaryColor?t.primaryColor:"dark"===e?"#f76b39":"#ff591e",n=_n.color.invert(a),i=_n.color.opacity(a,"0.4");if("dark"===e){const e=t.bg1?t.bg1:"#2a2b2c",s=t.fg1?t.fg1:"#bbb",o=t.bg2?t.bg2:_n.color.brightness(e,5),l=t.bg3?t.bg3:_n.color.brightness(e,17),c=t.bg3?t.bg3:_n.color.brightness(e,35),d=t.fg2?t.fg2:_n.color.brightness(s,-15),p=t.fg3?t.fg3:_n.color.brightness(s,-20),h=t.fg3?t.fg3:_n.color.brightness(s,-65),u=t.inlineCodeFg?t.inlineCodeFg:"#aaa",m="#bbb",f="#eee",g=t.headerColor?t.headerColor:_n.color.brightness(e,10),v=t.navBgColor?t.navBgColor:_n.color.brightness(e,10),b=t.navTextColor?t.navTextColor:_n.color.opacity(_n.color.invert(v),"0.50"),y=t.navHoverBgColor?t.navHoverBgColor:_n.color.brightness(v,-15),x=t.navHoverTextColor?t.navHoverTextColor:_n.color.invert(v),w=t.navAccentColor?t.navAccentColor:_n.color.brightness(a,25);r={bg1:e,bg2:o,bg3:l,lightBg:c,fg1:s,fg2:d,fg3:p,lightFg:h,inlineCodeFg:u,primaryColor:a,primaryColorTrans:i,primaryColorInvert:n,selectionBg:m,selectionFg:f,overlayBg:"rgba(80, 80, 80, 0.4)",navBgColor:v,navTextColor:b,navHoverBgColor:y,navHoverTextColor:x,navAccentColor:w,navAccentTextColor:t.navAccentTextColor?t.navAccenttextColor:_n.color.invert(w),headerColor:g,headerColorInvert:_n.color.invert(g),headerColorDarker:_n.color.brightness(g,-20),headerColorBorder:_n.color.brightness(g,10),borderColor:t.borderColor||_n.color.brightness(e,20),lightBorderColor:t.lightBorderColor||_n.color.brightness(e,15),codeBorderColor:t.codeBorderColor||_n.color.brightness(e,30),inputBg:t.inputBg||_n.color.brightness(e,-5),placeHolder:t.placeHolder||_n.color.opacity(s,"0.3"),hoverColor:t.hoverColor||_n.color.brightness(e,-10),red:t.red?t.red:"#F06560",lightRed:t.lightRed?t.lightRed:_n.color.brightness(e,-10),pink:t.pink?t.pink:"#ffb2b2",lightPink:t.lightPink||_n.color.brightness(e,-10),green:t.green||"#7ec699",lightGreen:t.lightGreen||_n.color.brightness(e,-10),blue:t.blue||"#71b7ff",lightBlue:t.lightBlue||_n.color.brightness(e,-10),orange:t.orange?t.orange:"#f08d49",lightOrange:t.lightOrange||_n.color.brightness(e,-10),yellow:t.yellow||"#827717",lightYellow:t.lightYellow||_n.color.brightness(e,-10),purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||_n.color.opacity(_n.color.brightness(e,-15),.7),codeFg:t.codeFg||"#aaa",codePropertyColor:t.codePropertyColor||"#f8c555",codeKeywordColor:t.codeKeywordColor||"#cc99cd",codeOperatorColor:t.codeOperatorColor||"#67cdcc"}}else{const e=t.bg1?t.bg1:"#fafbfc",s=t.fg1?t.fg1:"#444444",o=t.bg2?t.bg2:_n.color.brightness(e,-5),l=t.bg3?t.bg3:_n.color.brightness(e,-15),c=t.bg3?t.bg3:_n.color.brightness(e,-45),d=t.fg2?t.fg2:_n.color.brightness(s,17),p=t.fg3?t.fg3:_n.color.brightness(s,30),h=t.fg3?t.fg3:_n.color.brightness(s,70),u=t.inlineCodeFg?t.inlineCodeFg:"brown",m="#444",f="#eee",g=t.headerColor?t.headerColor:_n.color.brightness(e,-180),v=t.navBgColor?t.navBgColor:_n.color.brightness(e,-200),b=t.navTextColor?t.navTextColor:_n.color.opacity(_n.color.invert(v),"0.65"),y=t.navHoverBgColor?t.navHoverBgColor:_n.color.brightness(v,-15),x=t.navHoverTextColor?t.navHoverTextColor:_n.color.invert(v),w=t.navAccentColor?t.navAccentColor:_n.color.brightness(a,25);r={bg1:e,bg2:o,bg3:l,lightBg:c,fg1:s,fg2:d,fg3:p,lightFg:h,inlineCodeFg:u,primaryColor:a,primaryColorTrans:i,primaryColorInvert:n,selectionBg:m,selectionFg:f,overlayBg:"rgba(0, 0, 0, 0.4)",navBgColor:v,navTextColor:b,navHoverBgColor:y,navHoverTextColor:x,navAccentColor:w,navAccentTextColor:t.navAccentTextColor?t.navAccenttextColor:_n.color.invert(w),headerColor:g,headerColorInvert:_n.color.invert(g),headerColorDarker:_n.color.brightness(g,-20),headerColorBorder:_n.color.brightness(g,10),borderColor:t.borderColor||_n.color.brightness(e,-38),lightBorderColor:t.lightBorderColor||_n.color.brightness(e,-23),codeBorderColor:t.codeBorderColor||"transparent",inputBg:t.inputBg||_n.color.brightness(e,10),placeHolder:t.placeHolder||_n.color.brightness(h,20),hoverColor:t.hoverColor||_n.color.brightness(e,-5),red:t.red||"#F06560",lightRed:t.lightRed||"#fff0f0",pink:t.pink?t.pink:"#990055",lightPink:t.lightPink?t.lightPink:"#ffb2b2",green:t.green||"#690",lightGreen:t.lightGreen||"#fbfff0",blue:t.blue||"#47AFE8",lightBlue:t.lightBlue||"#eff8fd",orange:t.orange||"#FF9900",lightOrange:t.lightOrange||"#fff5e6",yellow:t.yellow||"#827717",lightYellow:t.lightYellow||"#fff5cc",purple:t.purple||"#786FF1",brown:t.brown||"#D4AC0D",codeBg:t.codeBg||_n.color.opacity(_n.color.brightness(e,-15),.7),codeFg:t.codeFg||"#666",codePropertyColor:t.codePropertyColor||"#905",codeKeywordColor:t.codeKeywordColor||"#07a",codeOperatorColor:t.codeOperatorColor||"#9a6e3a"}}return H`
  <style>
  *, *:before, *:after { box-sizing: border-box; }
  
  :host {
    /* Common Styles - irrespective of themes */  
    --border-radius: 2px;
    --layout: ${this.layout||"row"};
    --font-mono: ${this.monoFont||'Monaco, "Andale Mono", "Roboto Mono", Consolas, monospace'};
    --font-regular: ${this.regularFont||'"Open Sans", Avenir, "Segoe UI", Arial, sans-serif'};
    --scroll-bar-width: 8px;
    --nav-item-padding: ${"relaxed"===this.navItemSpacing?"10px 16px 10px 10px":"compact"===this.navItemSpacing?"5px 16px 5px 10px":"7px 16px 7px 10px"};
    
    --resp-area-height: ${this.responseAreaHeight};
    --font-size-small: ${"default"===this.fontSize?"12px":"large"===this.fontSize?"13px":"14px"};
    --font-size-mono: ${"default"===this.fontSize?"13px":"large"===this.fontSize?"14px":"15px"};
    --font-size-regular: ${"default"===this.fontSize?"14px":"large"===this.fontSize?"15px":"16px"};
    --dialog-z-index: 1000;

    --focus-shadow: 0 0 0 1px transparent, 0 0 0 3px ${r.primaryColorTrans};

    /* Theme specific styles */  
    --bg:${r.bg1};
    --bg2:${r.bg2};
    --bg3:${r.bg3};
    --light-bg:${r.lightBg};
    --fg:${r.fg1};
    --fg2:${r.fg2};
    --fg3:${r.fg3};
    --light-fg:${r.lightFg};
    --selection-bg:${r.selectionBg};
    --selection-fg:${r.selectionFg};
    --overlay-bg:${r.overlayBg};
    
    /* Border Colors */
    --border-color:${r.borderColor};
    --light-border-color:${r.lightBorderColor};
    --code-border-color:${r.codeBorderColor};

    --input-bg:${r.inputBg};
    --placeholder-color:${r.placeHolder};
    --hover-color:${r.hoverColor};
    --red:${r.red};
    --light-red:${r.lightRed};
    --pink:${r.pink};
    --light-pink:${r.lightPink};
    --green:${r.green};
    --light-green:${r.lightGreen};
    --blue:${r.blue};
    --light-blue:${r.lightBlue};
    --orange:${r.orange};
    --light-orange:${r.lightOrange};
    --yellow:${r.yellow};
    --light-yellow:${r.lightYellow};
    --purple:${r.purple};
    --brown:${r.brown};

    /* Header Color */
    --header-bg:${r.headerColor};
    --header-fg:${r.headerColorInvert};
    --header-color-darker:${r.headerColorDarker};
    --header-color-border:${r.headerColorBorder};

    /* Nav Colors */  
    --nav-bg-color:${r.navBgColor};
    --nav-text-color:${r.navTextColor};
    --nav-hover-bg-color:${r.navHoverBgColor};
    --nav-hover-text-color:${r.navHoverTextColor};
    --nav-accent-color:${r.navAccentColor};
    --nav-accent-text-color:${r.navAccentTextColor};

    /* Nav API Method Colors*/
    --nav-get-color:${r.blue};
    --nav-put-color:${r.orange};
    --nav-post-color:${r.green};
    --nav-delete-color:${r.red};
    --nav-head-color:${r.yellow};

    /* Primary Colors */  
    --primary-color:${r.primaryColor};
    --primary-color-invert:${r.primaryColorInvert};
    --primary-color-trans:${r.primaryColorTrans};

    /*Code Syntax Color*/
    --code-bg:${r.codeBg};
    --code-fg:${r.codeFg};
    --inline-code-fg:${r.inlineCodeFg};
    --code-property-color:${r.codePropertyColor};
    --code-keyword-color:${r.codeKeywordColor};
    --code-operator-color:${r.codeOperatorColor};
  }
  </style>`}function Bn(e=!1,t=!0,r=!0,a=!1){if(!this.resolvedSpec)return"";"true"===this.persistAuth&&va.call(this);const n={bg1:Rn(this.bgColor)?this.bgColor:"",fg1:Rn(this.textColor)?this.textColor:"",headerColor:Rn(this.headerColor)?this.headerColor:"",primaryColor:Rn(this.primaryColor)?this.primaryColor:"",navBgColor:Rn(this.navBgColor)?this.navBgColor:"",navTextColor:Rn(this.navTextColor)?this.navTextColor:"",navHoverBgColor:Rn(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:Rn(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:Rn(this.navAccentColor)?this.navAccentColor:"",navAccentTextColor:Rn(this.navAccentTextColor)?this.navAccentTextColor:""};return this.resolvedSpec.specLoadError?e?H`
        ${"dark"===this.theme?Ln.call(this,"dark",n):Ln.call(this,"light",n)}
        <div style='display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)'> ${this.resolvedSpec.info.description} </div>
      `:H`
      ${"dark"===this.theme?Ln.call(this,"dark",n):Ln.call(this,"light",n)}
      <!-- Header -->
      ${Cn.call(this)}
      <main class='main-content regular-font' part='section-main-content'>
        <slot></slot>
        <div style='margin:24px; text-align: center;'>
          <h1 style='color: var(--red)'> ${this.resolvedSpec.info.title} </h1>
          <div style='font-family:var(--font-mono)'> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?H`
      ${"dark"===this.theme?Ln.call(this,"dark",n):Ln.call(this,"light",n)}
      <main class='main-content regular-font' part='section-main-content'>
        <slot></slot>
        <div class='main-content-inner--${this.renderStyle}-mode'>
          <div class='loader'></div>
        </div>
      </main>
    `:H`
    ${"dark"===this.theme?Ln.call(this,"dark",n):Ln.call(this,"light",n)}

    <!-- Header -->
    ${"false"===this.showHeader?"":Cn.call(this)}
    
    <!-- Advanced Search -->
    ${"false"===this.allowAdvancedSearch?"":In.call(this)}

    <div id='the-main-body' class='body ${this.cssClasses}' dir='${this.pageDirection}' >
      <!-- Side Nav -->
      ${"read"!==this.renderStyle&&"focused"!==this.renderStyle||"true"!==this.showSideNav||!this.resolvedSpec?"":gn.call(this)}

      <!-- Main Content -->
      <main class='main-content regular-font' tabindex='-1' part='section-main-content'>
        <slot></slot>
        <div class='main-content-inner--${this.renderStyle}-mode'>
          ${!0===this.loading?H`<div class='loader'></div>`:H`
              ${!0===this.loadFailed?H`<div style='text-align: center;margin: 16px;'> Unable to load the Spec</div>`:H`
                  <div class='operations-root' @click='${e=>{this.handleHref(e)}}'>
                  ${"focused"===this.renderStyle?H`${wn.call(this)}`:H`
                      ${"true"===this.showInfo?cn.call(this):""}
                      ${"true"===this.allowServerSelection?un.call(this):""}
                      ${"true"===this.allowAuthentication?Aa.call(this):""}
                      <div id='operations-top' class='observe-me'>
                        <slot name='operations-top'></slot>
                      </div>  
                      ${"read"===this.renderStyle?an.call(this):Tn.call(this,t,r,a)}
                    `}
                  </div>
                `}`}
        </div>
        <slot name='footer'></slot>
      </main>
    </div>  
  `}class zn extends ce{constructor(){super();const e={root:this.getRootNode().host,rootMargin:"-50px 0px -50px 0px",threshold:0};this.showSummaryWhenCollapsed=!0,this.isIntersectionObserverActive=!1,this.intersectionObserver=new IntersectionObserver((e=>{this.onIntersect(e)}),e)}static get properties(){return{headingText:{type:String,attribute:"heading-text"},gotoPath:{type:String,attribute:"goto-path"},updateRoute:{type:String,attribute:"update-route"},routePrefix:{type:String,attribute:"route-prefix"},specUrl:{type:String,attribute:"spec-url"},sortTags:{type:String,attribute:"sort-tags"},generateMissingTags:{type:String,attribute:"generate-missing-tags"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},specFile:{type:String,attribute:!1},layout:{type:String},renderStyle:{type:String,attribute:"render-style"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},persistAuth:{type:String,attribute:"persist-auth"},onNavTagClick:{type:String,attribute:"on-nav-tag-click"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},schemaHideReadOnly:{type:String,attribute:"schema-hide-read-only"},schemaHideWriteOnly:{type:String,attribute:"schema-hide-write-only"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowAuthentication:{type:String,attribute:"allow-authentication"},allowTry:{type:String,attribute:"allow-try"},showCurlBeforeTry:{type:String,attribute:"show-curl-before-try"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},allowAdvancedSearch:{type:String,attribute:"allow-advanced-search"},allowServerSelection:{type:String,attribute:"allow-server-selection"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showComponents:{type:String,attribute:"show-components"},pageDirection:{type:String,attribute:"page-direction"},scrollBehavior:{type:String,attribute:"scroll-behavior"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},headerColor:{type:String,attribute:"header-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},cssFile:{type:String,attribute:"css-file"},cssClasses:{type:String,attribute:"css-classes"},navBgColor:{type:String,attribute:"nav-bg-color"},navTextColor:{type:String,attribute:"nav-text-color"},navHoverBgColor:{type:String,attribute:"nav-hover-bg-color"},navHoverTextColor:{type:String,attribute:"nav-hover-text-color"},navAccentColor:{type:String,attribute:"nav-accent-color"},navAccentTextColor:{type:String,attribute:"nav-accent-text-color"},navActiveItemMarker:{type:String,attribute:"nav-active-item-marker"},navItemSpacing:{type:String,attribute:"nav-item-spacing"},showMethodInNavBar:{type:String,attribute:"show-method-in-nav-bar"},usePathInNavBar:{type:String,attribute:"use-path-in-nav-bar"},infoDescriptionHeadingsInNavBar:{type:String,attribute:"info-description-headings-in-navbar"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean},focusedElementId:{type:String},showAdvancedSearchDialog:{type:Boolean},advancedSearchMatches:{type:Object}}}static get styles(){return[Je,Xe,Qe,et,tt,rt,at,nt,it,c`
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
          width: ${l("default"===this.fontSize?"300px":"large"===this.fontSize?"315px":"330px")};
          display:flex;
        }
        .section-gap--focused-mode { 
          padding: 12px 80px 12px 80px; 
        }
        .section-gap--read-mode { 
          padding: 24px 80px 12px 80px; 
        }
      }`,st]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(0===e.offsetWidth&&""===e.style.width&&(e.style.width="100vw"),0===e.offsetHeight&&""===e.style.height&&(e.style.height="100vh"),"BODY"===e.tagName&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.renderStyle&&"read, view, focused,".includes(`${this.renderStyle},`)||(this.renderStyle="focused"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?"model"===this.defaultSchemaTab&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.schemaHideReadOnly&&"default, never,".includes(`${this.schemaHideReadOnly},`)||(this.schemaHideReadOnly="default"),this.schemaHideWriteOnly&&"default, never,".includes(`${this.schemaHideWriteOnly},`)||(this.schemaHideWriteOnly="default"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.responseAreaHeight||(this.responseAreaHeight="400px"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),this.allowAdvancedSearch&&"true, false,".includes(`${this.allowAdvancedSearch},`)||(this.allowAdvancedSearch="true"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.updateRoute&&"true, false,".includes(`${this.updateRoute},`)||(this.updateRoute="true"),this.routePrefix||(this.routePrefix="#"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.generateMissingTags&&"true, false,".includes(`${this.generateMissingTags},`)||(this.generateMissingTags="false"),this.sortEndpointsBy&&"method, path, summary, none,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.onNavTagClick&&"expand-collapse, show-description,".includes(`${this.onNavTagClick},`)||(this.onNavTagClick="expand-collapse"),this.navItemSpacing&&"compact, relaxed, default,".includes(`${this.navItemSpacing},`)||(this.navItemSpacing="default"),this.showMethodInNavBar&&"false, as-plain-text, as-colored-text, as-colored-block,".includes(`${this.showMethodInNavBar},`)||(this.showMethodInNavBar="false"),this.usePathInNavBar&&"true, false,".includes(`${this.usePathInNavBar},`)||(this.usePathInNavBar="false"),this.navActiveItemMarker&&"left-bar, colored-block".includes(`${this.navActiveItemMarker},`)||(this.navActiveItemMarker="left-bar"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.allowServerSelection&&"true, false,".includes(`${this.allowServerSelection},`)||(this.allowServerSelection="true"),this.allowAuthentication&&"true, false,".includes(`${this.allowAuthentication},`)||(this.allowAuthentication="true"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showComponents&&"true false".includes(this.showComponents)||(this.showComponents="false"),this.infoDescriptionHeadingsInNavBar&&"true, false,".includes(`${this.infoDescriptionHeadingsInNavBar},`)||(this.infoDescriptionHeadingsInNavBar="false"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.scrollBehavior&&"smooth, auto,".includes(`${this.scrollBehavior},`)||(this.scrollBehavior="auto"),this.showAdvancedSearchDialog||(this.showAdvancedSearchDialog=!1),this.cssFile||(this.cssFile=null),this.cssClasses||(this.cssClasses=""),Ge.setOptions({highlight:(e,t)=>Ye().languages[t]?Ye().highlight(e,Ye().languages[t],t):e}),window.addEventListener("hashchange",(()=>{this.scrollToPath(this.getElementIDFromURL())}),!0)}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback()}infoDescriptionHeadingRenderer(){const e=new Ge.Renderer;return e.heading=(e,t,r,a)=>`<h${t} class="observe-me" id="${a.slug(r)}">${e}</h${t}>`,e}render(){const e=document.querySelector(`link[href*="${this.cssFile}"]`);return e&&this.shadowRoot.appendChild(e.cloneNode()),Bn.call(this)}observeExpandedContent(){this.shadowRoot.querySelectorAll(".observe-me").forEach((e=>{this.intersectionObserver.observe(e)}))}attributeChangedCallback(e,t,r){if("spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r),this.gotoPath&&!window.location.hash&&this.scrollToPath(this.gotoPath)}),0),"render-style"===e&&("read"===r?window.setTimeout((()=>{this.observeExpandedContent()}),100):this.intersectionObserver.disconnect()),"api-key-name"===e||"api-key-location"===e||"api-key-value"===e){let t=!1,a="",n="",i="";if("api-key-name"===e?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(a=r,n=this.getAttribute("api-key-location"),i=this.getAttribute("api-key-value"),t=!0):"api-key-location"===e?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(n=r,a=this.getAttribute("api-key-name"),i=this.getAttribute("api-key-value"),t=!0):"api-key-value"===e&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(i=r,n=this.getAttribute("api-key-location"),a=this.getAttribute("api-key-name"),t=!0),t&&this.resolvedSpec){const e=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===lt));e?(e.name=a,e.in=n,e.value=i,e.finalKeyValue=i):this.resolvedSpec.securitySchemes.push({securitySchemeId:lt,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:a,in:n,value:i,finalKeyValue:i}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSpecUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSpecFileChange(e){this.setAttribute("spec-file",this.shadowRoot.getElementById("spec-file").value);const t=e.target.files[0],r=new FileReader;r.onload=()=>{try{const e=JSON.parse(r.result);this.loadSpec(e),this.shadowRoot.getElementById("spec-url").value=""}catch(e){console.error("RapiDoc: Unable to read or parse json")}},r.readAsText(t)}onFileLoadClick(){this.shadowRoot.getElementById("spec-file").click()}onSearchChange(e){this.matchPaths=e.target.value,this.resolvedSpec.tags.forEach((e=>e.paths.filter((t=>{this.matchPaths&&pt(this.matchPaths,t,this.matchType)&&(e.expanded=!0)})))),this.resolvedSpec.components.forEach((e=>e.subComponents.filter((e=>{e.expanded=!1,this.matchPaths&&!function(e,t){return t.name.toLowerCase().includes(e.toLowerCase())}(this.matchPaths,e)||(e.expanded=!0)})))),this.requestUpdate()}onClearSearch(){this.shadowRoot.getElementById("nav-bar-search").value="",this.matchPaths="",this.resolvedSpec.components.forEach((e=>e.subComponents.filter((e=>{e.expanded=!0}))))}onShowSearchModalClicked(){this.showAdvancedSearchDialog=!0}async onOpenSearchDialog(e){const t=e.detail.querySelector("input");await ct(0),t&&t.focus()}async loadSpec(e){if(e){this.matchPaths="";try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1;const t=await Qr.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}}async afterSpecParsedAndValidated(e){for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find((e=>e.url===this.defaultApiServerUrl)))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t),this.intersectionObserver.disconnect(),"read"===this.renderStyle&&(await ct(100),this.observeExpandedContent()),this.isIntersectionObserverActive=!0;const r=this.getElementIDFromURL();if(r)"view"===this.renderStyle?this.expandAndGotoOperation(r,!0,!0):this.scrollToPath(r);else if("focused"===this.renderStyle&&!this.gotoPath){var a;const e=this.showInfo?"overview":null===(a=this.resolvedSpec.tags[0])||void 0===a?void 0:a.paths[0];this.scrollToPath(e)}}getComponentBaseURL(){const{href:e}=window.location,t=this.routePrefix.replace(/(#|\/)$/,"");if(!t)return e.split("#")[0];const r=e.lastIndexOf(t);return-1===r?e:e.slice(0,r)}getElementIDFromURL(){const e=this.getComponentBaseURL();return window.location.href.replace(e+this.routePrefix,"")}replaceHistoryState(e){const t=this.getComponentBaseURL();window.history.replaceState(null,null,`${t}${this.routePrefix||"#"}${e}`)}expandAndGotoOperation(e,t=!0){if(!this.resolvedSpec)return;let r=!0;const a=-1===e.indexOf("#")?e:e.substring(1);if(a.startsWith("overview")||"servers"===a||"auth"===a)r=!1;else for(let t=0;t<(null===(n=this.resolvedSpec.tags)||void 0===n?void 0:n.length);t++){var n,i;const a=this.resolvedSpec.tags[t],s=null===(i=a.paths)||void 0===i?void 0:i.find((t=>t.elementId===e));s&&(s.expanded&&a.expanded?r=!1:(s.expanded=!0,a.expanded=!0))}t&&(r&&this.requestUpdate(),window.setTimeout((()=>{const e=this.shadowRoot.getElementById(a);e&&(e.scrollIntoView({behavior:this.scrollBehavior,block:"start"}),"true"===this.updateRoute&&this.replaceHistoryState(a))}),r?150:0))}isValidTopId(e){return e.startsWith("overview")||"servers"===e||"auth"===e}isValidPathId(e){var t,r,a,n;return!("overview"!==e||!this.showInfo)||(!("servers"!==e||!this.allowServerSelection)||(!("auth"!==e||!this.allowAuthentication)||(e.startsWith("tag--")?null===(a=this.resolvedSpec)||void 0===a||null===(n=a.tags)||void 0===n?void 0:n.find((t=>t.elementId===e)):null===(t=this.resolvedSpec)||void 0===t||null===(r=t.tags)||void 0===r?void 0:r.find((t=>t.paths.find((t=>t.elementId===e)))))))}onIntersect(e){!1!==this.isIntersectionObserverActive&&e.forEach((e=>{if(e.isIntersecting&&e.intersectionRatio>0){const t=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active"),r=this.shadowRoot.getElementById(`link-${e.target.id}`);r&&("true"===this.updateRoute&&this.replaceHistoryState(e.target.id),r.scrollIntoView({behavior:this.scrollBehavior,block:"center"}),r.classList.add("active"),r.part.add("section-navbar-active-item")),t&&t!==r&&(t.classList.remove("active"),t.part.remove("section-navbar-active-item"))}}))}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:this.scrollBehavior,block:"start"})}}async scrollToEventTarget(e,t=!0){if("click"!==e.type&&("keyup"!==e.type||13!==e.keyCode))return;const r=e.target;if(r.dataset.contentId){if(this.isIntersectionObserverActive=!1,"focused"===this.renderStyle){const e=this.shadowRoot.querySelector("api-request");e&&e.beforeNavigationFocusedMode()}this.scrollToPath(r.dataset.contentId,!0,t),setTimeout((()=>{this.isIntersectionObserverActive=!0}),300)}}async scrollToPath(e,t=!0,r=!0){if("focused"===this.renderStyle&&(this.focusedElementId=e,await ct(0)),"view"===this.renderStyle)this.expandAndGotoOperation(e,t,!0);else{let t=!1;const a=this.shadowRoot.getElementById(e);if(a?(t=!0,a.scrollIntoView({behavior:this.scrollBehavior,block:"start"})):t=!1,t){if("focused"===this.renderStyle){const e=this.shadowRoot.querySelector("api-request");e&&e.afterNavigationFocusedMode();const t=this.shadowRoot.querySelector("api-response");t&&t.resetSelection()}"true"===this.updateRoute&&this.replaceHistoryState(e);const t=this.shadowRoot.getElementById(`link-${e}`);if(t){r&&t.scrollIntoView({behavior:this.scrollBehavior,block:"center"}),await ct(0);const e=this.shadowRoot.querySelector(".nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active");e&&(e.classList.remove("active"),e.part.remove("active"),e.part.remove("section-navbar-active-item")),t.classList.add("active"),t.part.add("section-navbar-active-item")}}}}setHttpUserNameAndPassword(e,t,r){return ua.call(this,e,t,r)}setApiKey(e,t){return ua.call(this,e,"","",t)}removeAllSecurityKeys(){return ma.call(this)}setApiServer(e){return dn.call(this,e)}onAdvancedSearch(e,t){const r=e.target;clearTimeout(this.timeoutId),this.timeoutId=setTimeout((()=>{let e;e="text"===r.type?r:r.closest(".advanced-search-options").querySelector("input[type=text]");const t=[...r.closest(".advanced-search-options").querySelectorAll("input:checked")].map((e=>e.id));this.advancedSearchMatches=function(e,t,r=[]){if(!e.trim()||0===r.length)return;const a=[];return t.forEach((t=>{t.paths.forEach((t=>{let n="";var i;if(r.includes("search-api-path")&&(n=t.path),r.includes("search-api-descr")&&(n=`${n} ${t.summary||t.description||""}`),r.includes("search-api-params")&&(n=`${n} ${(null===(i=t.parameters)||void 0===i?void 0:i.map((e=>e.name)).join(" "))||""}`),r.includes("search-api-request-body")&&t.requestBody){let e=new Set;for(const r in null===(s=t.requestBody)||void 0===s?void 0:s.content){var s,o,l;null!==(o=t.requestBody.content[r].schema)&&void 0!==o&&o.properties&&(e=ht(null===(l=t.requestBody.content[r].schema)||void 0===l?void 0:l.properties)),n=`${n} ${[...e].join(" ")}`}}r.includes("search-api-resp-descr")&&(n=`${n} ${Object.values(t.responses).map((e=>e.description||"")).join(" ")}`),n.toLowerCase().includes(e.trim().toLowerCase())&&a.push({elementId:t.elementId,method:t.method,path:t.path,summary:t.summary||t.description||"",deprecated:t.deprecated})}))})),a}(e.value,this.resolvedSpec.tags,t)}),t)}}customElements.define("rapi-doc",zn);customElements.define("rapi-doc-mini",class extends ce{constructor(){super(),this.isMini=!0,this.updateRoute="false",this.renderStyle="view",this.showHeader="false",this.allowAdvancedSearch="false"}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},sortEndpointsBy:{type:String,attribute:"sort-endpoints-by"},layout:{type:String},pathsExpanded:{type:String,attribute:"paths-expanded"},defaultSchemaTab:{type:String,attribute:"default-schema-tab"},responseAreaHeight:{type:String,attribute:"response-area-height"},showSummaryWhenCollapsed:{type:String,attribute:"show-summary-when-collapsed"},fillRequestFieldsWithExample:{type:String,attribute:"fill-request-fields-with-example"},persistAuth:{type:String,attribute:"persist-auth"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},apiKeyName:{type:String,attribute:"api-key-name"},apiKeyLocation:{type:String,attribute:"api-key-location"},apiKeyValue:{type:String,attribute:"api-key-value"},defaultApiServerUrl:{type:String,attribute:"default-api-server"},serverUrl:{type:String,attribute:"server-url"},oauthReceiver:{type:String,attribute:"oauth-receiver"},allowTry:{type:String,attribute:"allow-try"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},fetchCredentials:{type:String,attribute:"fetch-credentials"},matchPaths:{type:String,attribute:"match-paths"},matchType:{type:String,attribute:"match-type"},loading:{type:Boolean}}}static get styles(){return[Je,Xe,Qe,et,tt,rt,at,nt,it,c`
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
      }`]}connectedCallback(){if(super.connectedCallback(),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.showSummaryWhenCollapsed&&"true, false,".includes(`${this.showSummaryWhenCollapsed},`)||(this.showSummaryWhenCollapsed="true"),this.layout&&"row, column,".includes(`${this.layout},`)||(this.layout="row"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.defaultSchemaTab&&"example, schema, model,".includes(`${this.defaultSchemaTab},`)?"model"===this.defaultSchemaTab&&(this.defaultSchemaTab="schema"):this.defaultSchemaTab="example",this.pathsExpanded="true"===this.pathsExpanded,(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fillRequestFieldsWithExample&&"true, false,".includes(`${this.fillRequestFieldsWithExample},`)||(this.fillRequestFieldsWithExample="true"),this.persistAuth&&"true, false,".includes(`${this.persistAuth},`)||(this.persistAuth="false"),this.responseAreaHeight||(this.responseAreaHeight="300px"),this.allowTry&&"true, false,".includes(`${this.allowTry},`)||(this.allowTry="true"),this.apiKeyValue||(this.apiKeyValue="-"),this.apiKeyLocation||(this.apiKeyLocation="header"),this.apiKeyName||(this.apiKeyName=""),this.oauthReceiver||(this.oauthReceiver="oauth-receiver.html"),this.sortTags&&"true, false,".includes(`${this.sortTags},`)||(this.sortTags="false"),this.sortEndpointsBy&&"method, path, summary,".includes(`${this.sortEndpointsBy},`)||(this.sortEndpointsBy="path"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),this.fetchCredentials&&"omit, same-origin, include,".includes(`${this.fetchCredentials},`)||(this.fetchCredentials=""),Ge.setOptions({highlight:(e,t)=>Ye().languages[t]?Ye().highlight(e,Ye().languages[t],t):e})}render(){return Bn.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){if("spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r)}),0),"api-key-name"===e||"api-key-location"===e||"api-key-value"===e){let t=!1,a="",n="",i="";if("api-key-name"===e?this.getAttribute("api-key-location")&&this.getAttribute("api-key-value")&&(a=r,n=this.getAttribute("api-key-location"),i=this.getAttribute("api-key-value"),t=!0):"api-key-location"===e?this.getAttribute("api-key-name")&&this.getAttribute("api-key-value")&&(n=r,a=this.getAttribute("api-key-name"),i=this.getAttribute("api-key-value"),t=!0):"api-key-value"===e&&this.getAttribute("api-key-name")&&this.getAttribute("api-key-location")&&(i=r,n=this.getAttribute("api-key-location"),a=this.getAttribute("api-key-name"),t=!0),t&&this.resolvedSpec){const e=this.resolvedSpec.securitySchemes.find((e=>e.securitySchemeId===lt));e?(e.name=a,e.in=n,e.value=i,e.finalKeyValue=i):this.resolvedSpec.securitySchemes.push({apiKeyId:lt,description:"api-key provided in rapidoc element attributes",type:"apiKey",name:a,in:n,value:i,finalKeyValue:i}),this.requestUpdate()}}super.attributeChangedCallback(e,t,r)}onSpecUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await Qr.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"),this.getAttribute("api-key-name"),this.getAttribute("api-key-location"),this.getAttribute("api-key-value"),this.getAttribute("server-url"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}setHttpUserNameAndPassword(e,t,r){return ua.call(this,e,t,r)}setApiKey(e,t){return ua.call(this,e,"","",t)}removeAllSecurityKeys(){return ma.call(this)}setApiServer(e){return dn.call(this,e)}async afterSpecParsedAndValidated(e){for(this.resolvedSpec=e,this.selectedServer=void 0,this.defaultApiServerUrl&&(this.defaultApiServerUrl===this.serverUrl?this.selectedServer={url:this.serverUrl,computedUrl:this.serverUrl}:this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers.find((e=>e.url===this.defaultApiServerUrl)))),this.selectedServer||this.resolvedSpec.servers&&(this.selectedServer=this.resolvedSpec.servers[0]),this.requestUpdate();!await this.updateComplete;);const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}});class Un extends HTMLElement{connectedCallback(){this.receiveAuthParms(),window.addEventListener("storage",(e=>this.receiveStorage(e)),!0)}receiveAuthParms(){let e={};if(document.location.search){const t=new URLSearchParams(document.location.search);e={code:t.get("code"),error:t.get("error"),state:t.get("state"),responseType:"code"}}else if(window.location.hash){e={token_type:this.parseQueryString(window.location.hash.substring(1),"token_type"),access_token:this.parseQueryString(window.location.hash.substring(1),"access_token"),responseType:"token"}}window.opener?window.opener.postMessage(e,this.target):sessionStorage.setItem("rapidoc-oauth-data",JSON.stringify(e))}relayAuthParams(e){if(window.parent&&"rapidoc-oauth-data"===e.key){const t=JSON.parse(e.newValue);window.parent.postMessage(t,this.target)}}parseQueryString(e,t){const r=e.split("&");for(let e=0;e<r.length;e++){const a=r[e].split("=");if(decodeURIComponent(a[0])===t)return decodeURIComponent(a[1])}}}function jn(){return H`
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
      ${this.resolvedSpec.schemaAndExamples.map((e=>H`
        <div class='nav-bar-path' data-content-id='${e.elementId}' id='link-${e.elementId}'
          @click = '${e=>{this.scrollToEventTarget(e,!1)}}'
        > 
          ${e.name}
        </div>`))}
    </nav>  
  </nav>
  `}function Dn(){return H`
    ${"true"===this.showInfo?cn.call(this):""}
    <div style="font-size:var(--font-size-regular);">
    ${this.resolvedSpec.schemaAndExamples.map((e=>{var t;const r=Ya(e.schema,"json",e.examples,e.example,!0,!1,"json",!0);return e.selectedExample=null===(t=r[0])||void 0===t?void 0:t.exampleId,H`
        <section id='${e.elementId}' class='json-schema-and-example regular-font' style="display:flex; flex-direction: column; border:1px solid var(--border-color); margin-bottom:32px; border-top: 5px solid var(--border-color)">
          <div style="padding:16px; border-bottom: 1px solid var(--border-color)">
            <div style="font-size:var(--font-size-small); font-weight:bold">${e.name}</div>
            <span class="json-schema-description m-markdown ">${la(Ge(e.description||""))}</span>
          </div>  
          <div style="display:flex; flex-direction: row; gap:16px;">
            <div class="json-schema-def" style="flex:1; padding:16px 0 16px 16px; ">
              <schema-tree
                .data = "${Za(e.schema,{})}"
                schema-expand-level = "${this.schemaExpandLevel}"
                schema-description-expanded = "${this.schemaDescriptionExpanded}"
                allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                schema-hide-read-only = "false"
                schema-hide-write-only = "false"
              > </schema-tree>
            </div>
            <div class="json-schema-example-panel" style="width:400px; background-color: var(--input-bg); padding:16px 0 16px 16px; border-left: 1px dashed var(--border-color);">
              ${r.length>1?H`<select style="min-width:100px; max-width:100%" @change='${t=>this.onSelectExample(t,e)}'>
                    ${r.map((t=>H`
                      <option value="${t.exampleId}" ?selected=${t.exampleId===e.selectedExample}> 
                        ${t.exampleSummary.length>80?t.exampleId:t.exampleSummary}
                      </option>`))}
                  </select>`:H`<div style="font-size: var(--font-size-small);font-weight:700; margin:5px 0"> ${r[0].exampleSummary}</div>`}
              ${r.map((t=>H`
                <json-tree 
                  .data = "${t.exampleValue}"
                  data-example = "${t.exampleId}"
                  class = "example"
                  style = "margin-top:16px; display: ${t.exampleId===e.selectedExample?"flex":"none"}"
                ></json-tree>`))}
            </div>
          </div>
        </section>`}))}
    </div>
  `}function Fn(e=!1){if(!this.resolvedSpec)return"";const t={bg1:Rn(this.bgColor)?this.bgColor:"",fg1:Rn(this.textColor)?this.textColor:"",headerColor:Rn(this.headerColor)?this.headerColor:"",primaryColor:Rn(this.primaryColor)?this.primaryColor:"",navBgColor:Rn(this.navBgColor)?this.navBgColor:"",navTextColor:Rn(this.navTextColor)?this.navTextColor:"",navHoverBgColor:Rn(this.navHoverBgColor)?this.navHoverBgColor:"",navHoverTextColor:Rn(this.navHoverTextColor)?this.navHoverTextColor:"",navAccentColor:Rn(this.navAccentColor)?this.navAccentColor:"",navAccenttextColor:Rn(this.navAccentTextColor)?this.navAccentTextColor:""};return this.resolvedSpec.specLoadError?e?H`
        ${"dark"===this.theme?Ln.call(this,"dark",t):Ln.call(this,"light",t)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `:H`
      ${"dark"===this.theme?Ln.call(this,"dark",t):Ln.call(this,"light",t)}
      <!-- Header -->
      ${Cn.call(this)}
      <h1> Header </h1>
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `:this.resolvedSpec.isSpecLoading?H`
      ${"dark"===this.theme?Ln.call(this,"dark",t):Ln.call(this,"light",t)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `:H`
    ${"dark"===this.theme?Ln.call(this,"dark",t):Ln.call(this,"light",t)}

    <!-- Header -->
    ${"false"===this.showHeader?"":Cn.call(this)}
    
    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection}>

      <!-- Side Nav -->
      ${jn.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${!0===this.loading?H`<div class="loader"></div>`:H`
              ${!0===this.loadFailed?H`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>`:H`
                  <div class="operations-root" @click="${e=>{this.handleHref(e)}}">
                    ${Dn.call(this)}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `}customElements.define("oauth-receiver",Un);customElements.define("json-schema-viewer",class extends ce{constructor(){super(),this.isMini=!1,this.updateRoute="false",this.renderStyle="focused",this.showHeader="true",this.allowAdvancedSearch="false",this.selectedExampleForEachSchema={}}static get properties(){return{specUrl:{type:String,attribute:"spec-url"},schemaStyle:{type:String,attribute:"schema-style"},schemaExpandLevel:{type:Number,attribute:"schema-expand-level"},schemaDescriptionExpanded:{type:String,attribute:"schema-description-expanded"},allowSchemaDescriptionExpandToggle:{type:String,attribute:"allow-schema-description-expand-toggle"},showHeader:{type:String,attribute:"show-header"},showSideNav:{type:String,attribute:"show-side-nav"},showInfo:{type:String,attribute:"show-info"},allowSpecUrlLoad:{type:String,attribute:"allow-spec-url-load"},allowSpecFileLoad:{type:String,attribute:"allow-spec-file-load"},allowSpecFileDownload:{type:String,attribute:"allow-spec-file-download"},allowSearch:{type:String,attribute:"allow-search"},theme:{type:String},bgColor:{type:String,attribute:"bg-color"},textColor:{type:String,attribute:"text-color"},primaryColor:{type:String,attribute:"primary-color"},fontSize:{type:String,attribute:"font-size"},regularFont:{type:String,attribute:"regular-font"},monoFont:{type:String,attribute:"mono-font"},loadFonts:{type:String,attribute:"load-fonts"},loading:{type:Boolean}}}static get styles(){return[Je,Xe,Qe,et,tt,rt,at,nt,it,c`
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
      }`]}connectedCallback(){super.connectedCallback();const e=this.parentElement;if(e&&(0===e.offsetWidth&&""===e.style.width&&(e.style.width="100vw"),0===e.offsetHeight&&""===e.style.height&&(e.style.height="100vh"),"BODY"===e.tagName&&(e.style.marginTop||(e.style.marginTop="0"),e.style.marginRight||(e.style.marginRight="0"),e.style.marginBottom||(e.style.marginBottom="0"),e.style.marginLeft||(e.style.marginLeft="0"))),"false"!==this.loadFonts){const e={family:"Open Sans",style:"normal",weight:"300",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},t=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')",e);e.weight="600";const r=new FontFace("Open Sans","url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')",e);t.load().then((e=>{document.fonts.add(e)})),r.load().then((e=>{document.fonts.add(e)}))}this.renderStyle="focused",this.pathsExpanded="true"===this.pathsExpanded,this.showInfo&&"true, false,".includes(`${this.showInfo},`)||(this.showInfo="true"),this.showSideNav&&"true false".includes(this.showSideNav)||(this.showSideNav="true"),this.showHeader&&"true, false,".includes(`${this.showHeader},`)||(this.showHeader="true"),this.schemaStyle&&"tree, table,".includes(`${this.schemaStyle},`)||(this.schemaStyle="tree"),this.theme&&"light, dark,".includes(`${this.theme},`)||(this.theme=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),this.allowSearch&&"true, false,".includes(`${this.allowSearch},`)||(this.allowSearch="true"),(!this.schemaExpandLevel||this.schemaExpandLevel<1)&&(this.schemaExpandLevel=99999),this.schemaDescriptionExpanded&&"true, false,".includes(`${this.schemaDescriptionExpanded},`)||(this.schemaDescriptionExpanded="false"),this.fontSize&&"default, large, largest,".includes(`${this.fontSize},`)||(this.fontSize="default"),this.matchType&&"includes regex".includes(this.matchType)||(this.matchType="includes"),this.allowSchemaDescriptionExpandToggle&&"true, false,".includes(`${this.allowSchemaDescriptionExpandToggle},`)||(this.allowSchemaDescriptionExpandToggle="true"),Ge.setOptions({highlight:(e,t)=>Ye().languages[t]?Ye().highlight(e,Ye().languages[t],t):e})}render(){return Fn.call(this,!0,!1,!1,this.pathsExpanded)}attributeChangedCallback(e,t,r){"spec-url"===e&&t!==r&&window.setTimeout((async()=>{await this.loadSpec(r)}),0),super.attributeChangedCallback(e,t,r)}onSpecUrlChange(){this.setAttribute("spec-url",this.shadowRoot.getElementById("spec-url").value)}onSearchChange(e){this.matchPaths=e.target.value}async loadSpec(e){if(e)try{this.resolvedSpec={specLoadError:!1,isSpecLoading:!0,tags:[]},this.loading=!0,this.loadFailed=!1,this.requestUpdate();const t=await Qr.call(this,e,"true"===this.generateMissingTags,"true"===this.sortTags,this.getAttribute("sort-endpoints-by"));this.loading=!1,this.afterSpecParsedAndValidated(t)}catch(e){this.loading=!1,this.loadFailed=!0,this.resolvedSpec=null,console.error(`RapiDoc: Unable to resolve the API spec..  ${e.message}`)}}async afterSpecParsedAndValidated(e){this.resolvedSpec=e;const t=new CustomEvent("spec-loaded",{detail:e});this.dispatchEvent(t)}handleHref(e){if("a"===e.target.tagName.toLowerCase()&&e.target.getAttribute("href").startsWith("#")){const t=this.shadowRoot.getElementById(e.target.getAttribute("href").replace("#",""));t&&t.scrollIntoView({behavior:"auto",block:"start"})}}onSelectExample(e){[...e.target.closest(".json-schema-example-panel").querySelectorAll(".example")].forEach((t=>{t.style.display=t.dataset.example===e.target.value?"flex":"none"}))}async scrollToEventTarget(e){const t=e.currentTarget;if(!t.dataset.contentId)return;const r=this.shadowRoot.getElementById(t.dataset.contentId);r&&r.scrollIntoView({behavior:"auto",block:"start"})}})},742:(e,t)=>{"use strict";t.byteLength=function(e){var t=o(e),r=t[0],a=t[1];return 3*(r+a)/4-a},t.toByteArray=function(e){var t,r,i=o(e),s=i[0],l=i[1],c=new n(function(e,t,r){return 3*(t+r)/4-r}(0,s,l)),d=0,p=l>0?s-4:s;for(r=0;r<p;r+=4)t=a[e.charCodeAt(r)]<<18|a[e.charCodeAt(r+1)]<<12|a[e.charCodeAt(r+2)]<<6|a[e.charCodeAt(r+3)],c[d++]=t>>16&255,c[d++]=t>>8&255,c[d++]=255&t;2===l&&(t=a[e.charCodeAt(r)]<<2|a[e.charCodeAt(r+1)]>>4,c[d++]=255&t);1===l&&(t=a[e.charCodeAt(r)]<<10|a[e.charCodeAt(r+1)]<<4|a[e.charCodeAt(r+2)]>>2,c[d++]=t>>8&255,c[d++]=255&t);return c},t.fromByteArray=function(e){for(var t,a=e.length,n=a%3,i=[],s=16383,o=0,c=a-n;o<c;o+=s)i.push(l(e,o,o+s>c?c:o+s));1===n?(t=e[a-1],i.push(r[t>>2]+r[t<<4&63]+"==")):2===n&&(t=(e[a-2]<<8)+e[a-1],i.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="));return i.join("")};for(var r=[],a=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0;s<64;++s)r[s]=i[s],a[i.charCodeAt(s)]=s;function o(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function l(e,t,a){for(var n,i,s=[],o=t;o<a;o+=3)n=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(r[(i=n)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63},764:(e,t,r)=>{"use strict";const a=r(742),n=r(645),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.lW=l,t.h2=50;const s=2147483647;function o(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return c(e,t,r)}function c(e,t,r){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!l.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|f(e,t);let a=o(r);const n=a.write(e,t);n!==r&&(a=a.slice(0,n));return a}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Z(e,Uint8Array)){const t=new Uint8Array(e);return u(t.buffer,t.byteOffset,t.byteLength)}return h(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Z(e,ArrayBuffer)||e&&Z(e.buffer,ArrayBuffer))return u(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(Z(e,SharedArrayBuffer)||e&&Z(e.buffer,SharedArrayBuffer)))return u(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const a=e.valueOf&&e.valueOf();if(null!=a&&a!==e)return l.from(a,t,r);const n=function(e){if(l.isBuffer(e)){const t=0|m(e.length),r=o(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||Y(e.length)?o(0):h(e);if("Buffer"===e.type&&Array.isArray(e.data))return h(e.data)}(e);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function d(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return d(e),o(e<0?0:0|m(e))}function h(e){const t=e.length<0?0:0|m(e.length),r=o(t);for(let a=0;a<t;a+=1)r[a]=255&e[a];return r}function u(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let a;return a=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(a,l.prototype),a}function m(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|e}function f(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Z(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,a=arguments.length>2&&!0===arguments[2];if(!a&&0===r)return 0;let n=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return K(e).length;default:if(n)return a?-1:V(e).length;t=(""+t).toLowerCase(),n=!0}}function g(e,t,r){let a=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return I(this,t,r);case"utf8":case"utf-8":return E(this,t,r);case"ascii":return C(this,t,r);case"latin1":case"binary":return O(this,t,r);case"base64":return A(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,t,r);default:if(a)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),a=!0}}function v(e,t,r){const a=e[t];e[t]=e[r],e[r]=a}function b(e,t,r,a,n){if(0===e.length)return-1;if("string"==typeof r?(a=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Y(r=+r)&&(r=n?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(n)return-1;r=e.length-1}else if(r<0){if(!n)return-1;r=0}if("string"==typeof t&&(t=l.from(t,a)),l.isBuffer(t))return 0===t.length?-1:y(e,t,r,a,n);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?n?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):y(e,[t],r,a,n);throw new TypeError("val must be string, number or Buffer")}function y(e,t,r,a,n){let i,s=1,o=e.length,l=t.length;if(void 0!==a&&("ucs2"===(a=String(a).toLowerCase())||"ucs-2"===a||"utf16le"===a||"utf-16le"===a)){if(e.length<2||t.length<2)return-1;s=2,o/=2,l/=2,r/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(n){let a=-1;for(i=r;i<o;i++)if(c(e,i)===c(t,-1===a?0:i-a)){if(-1===a&&(a=i),i-a+1===l)return a*s}else-1!==a&&(i-=i-a),a=-1}else for(r+l>o&&(r=o-l),i=r;i>=0;i--){let r=!0;for(let a=0;a<l;a++)if(c(e,i+a)!==c(t,a)){r=!1;break}if(r)return i}return-1}function x(e,t,r,a){r=Number(r)||0;const n=e.length-r;a?(a=Number(a))>n&&(a=n):a=n;const i=t.length;let s;for(a>i/2&&(a=i/2),s=0;s<a;++s){const a=parseInt(t.substr(2*s,2),16);if(Y(a))return s;e[r+s]=a}return s}function w(e,t,r,a){return G(V(t,e.length-r),e,r,a)}function $(e,t,r,a){return G(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,a)}function k(e,t,r,a){return G(K(t),e,r,a)}function S(e,t,r,a){return G(function(e,t){let r,a,n;const i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),a=r>>8,n=r%256,i.push(n),i.push(a);return i}(t,e.length-r),e,r,a)}function A(e,t,r){return 0===t&&r===e.length?a.fromByteArray(e):a.fromByteArray(e.slice(t,r))}function E(e,t,r){r=Math.min(e.length,r);const a=[];let n=t;for(;n<r;){const t=e[n];let i=null,s=t>239?4:t>223?3:t>191?2:1;if(n+s<=r){let r,a,o,l;switch(s){case 1:t<128&&(i=t);break;case 2:r=e[n+1],128==(192&r)&&(l=(31&t)<<6|63&r,l>127&&(i=l));break;case 3:r=e[n+1],a=e[n+2],128==(192&r)&&128==(192&a)&&(l=(15&t)<<12|(63&r)<<6|63&a,l>2047&&(l<55296||l>57343)&&(i=l));break;case 4:r=e[n+1],a=e[n+2],o=e[n+3],128==(192&r)&&128==(192&a)&&128==(192&o)&&(l=(15&t)<<18|(63&r)<<12|(63&a)<<6|63&o,l>65535&&l<1114112&&(i=l))}}null===i?(i=65533,s=1):i>65535&&(i-=65536,a.push(i>>>10&1023|55296),i=56320|1023&i),a.push(i),n+=s}return function(e){const t=e.length;if(t<=T)return String.fromCharCode.apply(String,e);let r="",a=0;for(;a<t;)r+=String.fromCharCode.apply(String,e.slice(a,a+=T));return r}(a)}l.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return c(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return function(e,t,r){return d(e),e<=0?o(e):void 0!==t?"string"==typeof r?o(e).fill(t,r):o(e).fill(t):o(e)}(e,t,r)},l.allocUnsafe=function(e){return p(e)},l.allocUnsafeSlow=function(e){return p(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(Z(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),Z(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,a=t.length;for(let n=0,i=Math.min(r,a);n<i;++n)if(e[n]!==t[n]){r=e[n],a=t[n];break}return r<a?-1:a<r?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const a=l.allocUnsafe(t);let n=0;for(r=0;r<e.length;++r){let t=e[r];if(Z(t,Uint8Array))n+t.length>a.length?(l.isBuffer(t)||(t=l.from(t)),t.copy(a,n)):Uint8Array.prototype.set.call(a,t,n);else{if(!l.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(a,n)}n+=t.length}return a},l.byteLength=f,l.prototype._isBuffer=!0,l.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)v(this,t,t+1);return this},l.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2);return this},l.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4);return this},l.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?E(this,0,e):g.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){let e="";const r=t.h2;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},i&&(l.prototype[i]=l.prototype.inspect),l.prototype.compare=function(e,t,r,a,n){if(Z(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===a&&(a=0),void 0===n&&(n=this.length),t<0||r>e.length||a<0||n>this.length)throw new RangeError("out of range index");if(a>=n&&t>=r)return 0;if(a>=n)return-1;if(t>=r)return 1;if(this===e)return 0;let i=(n>>>=0)-(a>>>=0),s=(r>>>=0)-(t>>>=0);const o=Math.min(i,s),c=this.slice(a,n),d=e.slice(t,r);for(let e=0;e<o;++e)if(c[e]!==d[e]){i=c[e],s=d[e];break}return i<s?-1:s<i?1:0},l.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return b(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return b(this,e,t,r,!1)},l.prototype.write=function(e,t,r,a){if(void 0===t)a="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)a=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===a&&(a="utf8")):(a=r,r=void 0)}const n=this.length-t;if((void 0===r||r>n)&&(r=n),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");let i=!1;for(;;)switch(a){case"hex":return x(this,e,t,r);case"utf8":case"utf-8":return w(this,e,t,r);case"ascii":case"latin1":case"binary":return $(this,e,t,r);case"base64":return k(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),i=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const T=4096;function C(e,t,r){let a="";r=Math.min(e.length,r);for(let n=t;n<r;++n)a+=String.fromCharCode(127&e[n]);return a}function O(e,t,r){let a="";r=Math.min(e.length,r);for(let n=t;n<r;++n)a+=String.fromCharCode(e[n]);return a}function I(e,t,r){const a=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>a)&&(r=a);let n="";for(let a=t;a<r;++a)n+=J[e[a]];return n}function _(e,t,r){const a=e.slice(t,r);let n="";for(let e=0;e<a.length-1;e+=2)n+=String.fromCharCode(a[e]+256*a[e+1]);return n}function R(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function L(e,t,r,a,n,i){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>n||t<i)throw new RangeError('"value" argument is out of bounds');if(r+a>e.length)throw new RangeError("Index out of range")}function B(e,t,r,a,n){q(t,a,n,e,r,7);let i=Number(t&BigInt(4294967295));e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,r}function z(e,t,r,a,n){q(t,a,n,e,r,7);let i=Number(t&BigInt(4294967295));e[r+7]=i,i>>=8,e[r+6]=i,i>>=8,e[r+5]=i,i>>=8,e[r+4]=i;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=s,s>>=8,e[r+2]=s,s>>=8,e[r+1]=s,s>>=8,e[r]=s,r+8}function U(e,t,r,a,n,i){if(r+a>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(e,t,r,a,i){return t=+t,r>>>=0,i||U(e,0,r,4),n.write(e,t,r,a,23,4),r+4}function D(e,t,r,a,i){return t=+t,r>>>=0,i||U(e,0,r,8),n.write(e,t,r,a,52,8),r+8}l.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const a=this.subarray(e,t);return Object.setPrototypeOf(a,l.prototype),a},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||R(e,t,this.length);let a=this[e],n=1,i=0;for(;++i<t&&(n*=256);)a+=this[e+i]*n;return a},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||R(e,t,this.length);let a=this[e+--t],n=1;for(;t>0&&(n*=256);)a+=this[e+--t]*n;return a},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||R(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||R(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||R(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||R(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||R(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readBigUInt64LE=X((function(e){H(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||M(e,this.length-8);const a=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,n=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(a)+(BigInt(n)<<BigInt(32))})),l.prototype.readBigUInt64BE=X((function(e){H(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||M(e,this.length-8);const a=t*2**24+65536*this[++e]+256*this[++e]+this[++e],n=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(a)<<BigInt(32))+BigInt(n)})),l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||R(e,t,this.length);let a=this[e],n=1,i=0;for(;++i<t&&(n*=256);)a+=this[e+i]*n;return n*=128,a>=n&&(a-=Math.pow(2,8*t)),a},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||R(e,t,this.length);let a=t,n=1,i=this[e+--a];for(;a>0&&(n*=256);)i+=this[e+--a]*n;return n*=128,i>=n&&(i-=Math.pow(2,8*t)),i},l.prototype.readInt8=function(e,t){return e>>>=0,t||R(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||R(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||R(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||R(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||R(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readBigInt64LE=X((function(e){H(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||M(e,this.length-8);const a=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(a)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),l.prototype.readBigInt64BE=X((function(e){H(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||M(e,this.length-8);const a=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(a)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),l.prototype.readFloatLE=function(e,t){return e>>>=0,t||R(e,4,this.length),n.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||R(e,4,this.length),n.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||R(e,8,this.length),n.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||R(e,8,this.length),n.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,r,a){if(e=+e,t>>>=0,r>>>=0,!a){L(this,e,t,r,Math.pow(2,8*r)-1,0)}let n=1,i=0;for(this[t]=255&e;++i<r&&(n*=256);)this[t+i]=e/n&255;return t+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,r,a){if(e=+e,t>>>=0,r>>>=0,!a){L(this,e,t,r,Math.pow(2,8*r)-1,0)}let n=r-1,i=1;for(this[t+n]=255&e;--n>=0&&(i*=256);)this[t+n]=e/i&255;return t+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigUInt64LE=X((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeBigUInt64BE=X((function(e,t=0){return z(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeIntLE=function(e,t,r,a){if(e=+e,t>>>=0,!a){const a=Math.pow(2,8*r-1);L(this,e,t,r,a-1,-a)}let n=0,i=1,s=0;for(this[t]=255&e;++n<r&&(i*=256);)e<0&&0===s&&0!==this[t+n-1]&&(s=1),this[t+n]=(e/i>>0)-s&255;return t+r},l.prototype.writeIntBE=function(e,t,r,a){if(e=+e,t>>>=0,!a){const a=Math.pow(2,8*r-1);L(this,e,t,r,a-1,-a)}let n=r-1,i=1,s=0;for(this[t+n]=255&e;--n>=0&&(i*=256);)e<0&&0===s&&0!==this[t+n+1]&&(s=1),this[t+n]=(e/i>>0)-s&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||L(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigInt64LE=X((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeBigInt64BE=X((function(e,t=0){return z(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeFloatLE=function(e,t,r){return j(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return j(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return D(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return D(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,a){if(!l.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),a||0===a||(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<r&&(a=r),a===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-r&&(a=e.length-t+r);const n=a-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,a):Uint8Array.prototype.set.call(e,this.subarray(r,a),t),n},l.prototype.fill=function(e,t,r,a){if("string"==typeof e){if("string"==typeof t?(a=t,t=0,r=this.length):"string"==typeof r&&(a=r,r=this.length),void 0!==a&&"string"!=typeof a)throw new TypeError("encoding must be a string");if("string"==typeof a&&!l.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(1===e.length){const t=e.charCodeAt(0);("utf8"===a&&t<128||"latin1"===a)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let n;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(n=t;n<r;++n)this[n]=e;else{const i=l.isBuffer(e)?e:l.from(e,a),s=i.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<r-t;++n)this[n+t]=i[n%s]}return this};const F={};function P(e,t,r){F[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function N(e){let t="",r=e.length;const a="-"===e[0]?1:0;for(;r>=a+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function q(e,t,r,a,n,i){if(e>r||e<t){const a="bigint"==typeof t?"n":"";let n;throw n=i>3?0===t||t===BigInt(0)?`>= 0${a} and < 2${a} ** ${8*(i+1)}${a}`:`>= -(2${a} ** ${8*(i+1)-1}${a}) and < 2 ** ${8*(i+1)-1}${a}`:`>= ${t}${a} and <= ${r}${a}`,new F.ERR_OUT_OF_RANGE("value",n,e)}!function(e,t,r){H(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||M(t,e.length-(r+1))}(a,n,i)}function H(e,t){if("number"!=typeof e)throw new F.ERR_INVALID_ARG_TYPE(t,"number",e)}function M(e,t,r){if(Math.floor(e)!==e)throw H(e,r),new F.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new F.ERR_BUFFER_OUT_OF_BOUNDS;throw new F.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}P("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),P("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),P("ERR_OUT_OF_RANGE",(function(e,t,r){let a=`The value of "${e}" is out of range.`,n=r;return Number.isInteger(r)&&Math.abs(r)>2**32?n=N(String(r)):"bigint"==typeof r&&(n=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(n=N(n)),n+="n"),a+=` It must be ${t}. Received ${n}`,a}),RangeError);const W=/[^+/0-9A-Za-z-_]/g;function V(e,t){let r;t=t||1/0;const a=e.length;let n=null;const i=[];for(let s=0;s<a;++s){if(r=e.charCodeAt(s),r>55295&&r<57344){if(!n){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(s+1===a){(t-=3)>-1&&i.push(239,191,189);continue}n=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),n=r;continue}r=65536+(n-55296<<10|r-56320)}else n&&(t-=3)>-1&&i.push(239,191,189);if(n=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function K(e){return a.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(W,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function G(e,t,r,a){let n;for(n=0;n<a&&!(n+r>=t.length||n>=e.length);++n)t[n+r]=e[n];return n}function Z(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Y(e){return e!=e}const J=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const a=16*r;for(let n=0;n<16;++n)t[a+n]=e[r]+e[n]}return t}();function X(e){return"undefined"==typeof BigInt?Q:e}function Q(){throw new Error("BigInt not supported")}},645:(e,t)=>{t.read=function(e,t,r,a,n){var i,s,o=8*n-a-1,l=(1<<o)-1,c=l>>1,d=-7,p=r?n-1:0,h=r?-1:1,u=e[t+p];for(p+=h,i=u&(1<<-d)-1,u>>=-d,d+=o;d>0;i=256*i+e[t+p],p+=h,d-=8);for(s=i&(1<<-d)-1,i>>=-d,d+=a;d>0;s=256*s+e[t+p],p+=h,d-=8);if(0===i)i=1-c;else{if(i===l)return s?NaN:1/0*(u?-1:1);s+=Math.pow(2,a),i-=c}return(u?-1:1)*s*Math.pow(2,i-a)},t.write=function(e,t,r,a,n,i){var s,o,l,c=8*i-n-1,d=(1<<c)-1,p=d>>1,h=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,u=a?0:i-1,m=a?1:-1,f=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(o=isNaN(t)?1:0,s=d):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),(t+=s+p>=1?h/l:h*Math.pow(2,1-p))*l>=2&&(s++,l/=2),s+p>=d?(o=0,s=d):s+p>=1?(o=(t*l-1)*Math.pow(2,n),s+=p):(o=t*Math.pow(2,p-1)*Math.pow(2,n),s=0));n>=8;e[r+u]=255&o,u+=m,o/=256,n-=8);for(s=s<<n|o,c+=n;c>0;e[r+u]=255&s,u+=m,s/=256,c-=8);e[r+u-m]|=128*f}},874:()=>{!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:r,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=e.languages.bash;for(var n=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=a.variable[1].inside,s=0;s<n.length;s++)i[n[s]]=e.languages.bash[n[s]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash}(Prism)},16:()=>{!function(e){function t(e,t){return e.replace(/<<(\d+)>>/g,(function(e,r){return"(?:"+t[+r]+")"}))}function r(e,r,a){return RegExp(t(e,r),a||"")}function a(e,t){for(var r=0;r<t;r++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var n="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",i="class enum interface record struct",s="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",o="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var c=l(i),d=RegExp(l(n+" "+i+" "+s+" "+o)),p=l(i+" "+s+" "+o),h=l(n+" "+i+" "+o),u=a(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),m=a(/\((?:[^()]|<<self>>)*\)/.source,2),f=/@?\b[A-Za-z_]\w*\b/.source,g=t(/<<0>>(?:\s*<<1>>)?/.source,[f,u]),v=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[p,g]),b=/\[\s*(?:,\s*)*\]/.source,y=t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[v,b]),x=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[u,m,b]),w=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[x]),$=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[w,v,b]),k={keyword:d,punctuation:/[<>()?,.:[\]]/},S=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,A=/"(?:\\.|[^\\"\r\n])*"/.source,E=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[E]),lookbehind:!0,greedy:!0},{pattern:r(/(^|[^@$\\])<<0>>/.source,[A]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[v]),lookbehind:!0,inside:k},{pattern:r(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[f,$]),lookbehind:!0,inside:k},{pattern:r(/(\busing\s+)<<0>>(?=\s*=)/.source,[f]),lookbehind:!0},{pattern:r(/(\b<<0>>\s+)<<1>>/.source,[c,g]),lookbehind:!0,inside:k},{pattern:r(/(\bcatch\s*\(\s*)<<0>>/.source,[v]),lookbehind:!0,inside:k},{pattern:r(/(\bwhere\s+)<<0>>/.source,[f]),lookbehind:!0},{pattern:r(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[y]),lookbehind:!0,inside:k},{pattern:r(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[$,h,f]),inside:k}],keyword:d,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:r(/([(,]\s*)<<0>>(?=\s*:)/.source,[f]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:r(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[f]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:r(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[m]),lookbehind:!0,alias:"class-name",inside:k},"return-type":{pattern:r(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[$,v]),inside:k,alias:"class-name"},"constructor-invocation":{pattern:r(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[$]),lookbehind:!0,inside:k,alias:"class-name"},"generic-method":{pattern:r(/<<0>>\s*<<1>>(?=\s*\()/.source,[f,u]),inside:{function:r(/^<<0>>/.source,[f]),generic:{pattern:RegExp(u),alias:"class-name",inside:k}}},"type-list":{pattern:r(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[c,g,f,$,d.source,m,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:r(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[g,m]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:d,"class-name":{pattern:RegExp($),greedy:!0,inside:k},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var T=A+"|"+S,C=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[T]),O=a(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[C]),2),I=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,_=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[v,O]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:r(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[I,_]),lookbehind:!0,greedy:!0,inside:{target:{pattern:r(/^<<0>>(?=\s*:)/.source,[I]),alias:"keyword"},"attribute-arguments":{pattern:r(/\(<<0>>*\)/.source,[O]),inside:e.languages.csharp},"class-name":{pattern:RegExp(v),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var R=/:[^}\r\n]+/.source,L=a(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[C]),2),B=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[L,R]),z=a(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[T]),2),U=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[z,R]);function j(t,a){return{interpolation:{pattern:r(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[t]),lookbehind:!0,inside:{"format-string":{pattern:r(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[a,R]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:r(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[B]),lookbehind:!0,greedy:!0,inside:j(B,L)},{pattern:r(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[U]),lookbehind:!0,greedy:!0,inside:j(U,z)}],char:{pattern:RegExp(S),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp}(Prism)},251:()=>{!function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(Prism)},46:()=>{Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Prism.languages.go["class-name"]},57:()=>{!function(e){function t(e){return RegExp("(^(?:"+e+"):[ \t]*(?![ \t]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:t(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:t(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:t(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:t(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var r,a=e.languages,n={"application/javascript":a.javascript,"application/json":a.json||a.javascript,"application/xml":a.xml,"text/xml":a.xml,"text/html":a.html,"text/css":a.css,"text/plain":a.plain},i={"application/json":!0,"application/xml":!0};function s(e){var t=e.replace(/^[a-z]+\//,"");return"(?:"+e+"|"+("\\w+/(?:[\\w.-]+\\+)+"+t+"(?![+\\w.-])")+")"}for(var o in n)if(n[o]){r=r||{};var l=i[o]?s(o):o;r[o.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:n[o]}}r&&e.languages.insertBefore("http","header",r)}(Prism)},503:()=>{!function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,r=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,a={pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[a,{pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:a.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+r+/[A-Z]\w*\b/.source),lookbehind:!0,inside:a.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":a,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+r+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:a.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+r+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:a.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)},277:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},366:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},358:()=>{!function(e){var t=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+r.source+"(?:[ \t]+"+t.source+")?|"+t.source+"(?:[ \t]+"+r.source+")?)",n=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,(function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source})),i=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function s(e,t){t=(t||"").replace(/m/g,"")+"m";var r=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,(function(){return a})).replace(/<<value>>/g,(function(){return e}));return RegExp(r,t)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,(function(){return a}))),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,(function(){return a})).replace(/<<key>>/g,(function(){return"(?:"+n+"|"+i+")"}))),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:s(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:s(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:s(i),lookbehind:!0,greedy:!0},number:{pattern:s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml}(Prism)},660:(e,t,r)=>{var a=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,a={},n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++r}),e.__id},clone:function e(t,r){var a,i;switch(r=r||{},n.util.type(t)){case"Object":if(i=n.util.objId(t),r[i])return r[i];for(var s in a={},r[i]=a,t)t.hasOwnProperty(s)&&(a[s]=e(t[s],r));return a;case"Array":return i=n.util.objId(t),r[i]?r[i]:(a=[],r[i]=a,t.forEach((function(t,n){a[n]=e(t,r)})),a);default:return t}},getLanguage:function(e){for(;e;){var r=t.exec(e.className);if(r)return r[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,r){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+r)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==e)return t[r]}return null}},isActive:function(e,t,r){for(var a="no-"+t;e;){var n=e.classList;if(n.contains(t))return!0;if(n.contains(a))return!1;e=e.parentElement}return!!r}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,t){var r=n.util.clone(n.languages[e]);for(var a in t)r[a]=t[a];return r},insertBefore:function(e,t,r,a){var i=(a=a||n.languages)[e],s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var l in r)r.hasOwnProperty(l)&&(s[l]=r[l]);r.hasOwnProperty(o)||(s[o]=i[o])}var c=a[e];return a[e]=s,n.languages.DFS(n.languages,(function(t,r){r===c&&t!=e&&(this[t]=s)})),s},DFS:function e(t,r,a,i){i=i||{};var s=n.util.objId;for(var o in t)if(t.hasOwnProperty(o)){r.call(t,o,t[o],a||o);var l=t[o],c=n.util.type(l);"Object"!==c||i[s(l)]?"Array"!==c||i[s(l)]||(i[s(l)]=!0,e(l,r,o,i)):(i[s(l)]=!0,e(l,r,null,i))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var a={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),n.hooks.run("before-all-elements-highlight",a);for(var i,s=0;i=a.elements[s++];)n.highlightElement(i,!0===t,a.callback)},highlightElement:function(t,r,a){var i=n.util.getLanguage(t),s=n.languages[i];n.util.setLanguage(t,i);var o=t.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&n.util.setLanguage(o,i);var l={element:t,language:i,grammar:s,code:t.textContent};function c(e){l.highlightedCode=e,n.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,n.hooks.run("after-highlight",l),n.hooks.run("complete",l),a&&a.call(l.element)}if(n.hooks.run("before-sanity-check",l),(o=l.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!l.code)return n.hooks.run("complete",l),void(a&&a.call(l.element));if(n.hooks.run("before-highlight",l),l.grammar)if(r&&e.Worker){var d=new Worker(n.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else c(n.highlight(l.code,l.grammar,l.language));else c(n.util.encode(l.code))},highlight:function(e,t,r){var a={code:e,grammar:t,language:r};if(n.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=n.tokenize(a.code,a.grammar),n.hooks.run("after-tokenize",a),i.stringify(n.util.encode(a.tokens),a.language)},tokenize:function(e,t){var r=t.rest;if(r){for(var a in r)t[a]=r[a];delete t.rest}var n=new l;return c(n,n.head,e),o(e,n,t,n.head,0),function(e){var t=[],r=e.head.next;for(;r!==e.tail;)t.push(r.value),r=r.next;return t}(n)},hooks:{all:{},add:function(e,t){var r=n.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=n.hooks.all[e];if(r&&r.length)for(var a,i=0;a=r[i++];)a(t)}},Token:i};function i(e,t,r,a){this.type=e,this.content=t,this.alias=r,this.length=0|(a||"").length}function s(e,t,r,a){e.lastIndex=t;var n=e.exec(r);if(n&&a&&n[1]){var i=n[1].length;n.index+=i,n[0]=n[0].slice(i)}return n}function o(e,t,r,a,l,p){for(var h in r)if(r.hasOwnProperty(h)&&r[h]){var u=r[h];u=Array.isArray(u)?u:[u];for(var m=0;m<u.length;++m){if(p&&p.cause==h+","+m)return;var f=u[m],g=f.inside,v=!!f.lookbehind,b=!!f.greedy,y=f.alias;if(b&&!f.pattern.global){var x=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,x+"g")}for(var w=f.pattern||f,$=a.next,k=l;$!==t.tail&&!(p&&k>=p.reach);k+=$.value.length,$=$.next){var S=$.value;if(t.length>e.length)return;if(!(S instanceof i)){var A,E=1;if(b){if(!(A=s(w,k,e,v))||A.index>=e.length)break;var T=A.index,C=A.index+A[0].length,O=k;for(O+=$.value.length;T>=O;)O+=($=$.next).value.length;if(k=O-=$.value.length,$.value instanceof i)continue;for(var I=$;I!==t.tail&&(O<C||"string"==typeof I.value);I=I.next)E++,O+=I.value.length;E--,S=e.slice(k,O),A.index-=k}else if(!(A=s(w,0,S,v)))continue;T=A.index;var _=A[0],R=S.slice(0,T),L=S.slice(T+_.length),B=k+S.length;p&&B>p.reach&&(p.reach=B);var z=$.prev;if(R&&(z=c(t,z,R),k+=R.length),d(t,z,E),$=c(t,z,new i(h,g?n.tokenize(_,g):_,y,_)),L&&c(t,$,L),E>1){var U={cause:h+","+m,reach:B};o(e,t,r,$.prev,k,U),p&&U.reach>p.reach&&(p.reach=U.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,r){var a=t.next,n={value:r,prev:t,next:a};return t.next=n,a.prev=n,e.length++,n}function d(e,t,r){for(var a=t.next,n=0;n<r&&a!==e.tail;n++)a=a.next;t.next=a,a.prev=t,e.length-=n}if(e.Prism=n,i.stringify=function e(t,r){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,r)})),a}var i={type:t.type,content:e(t.content,r),tag:"span",classes:["token",t.type],attributes:{},language:r},s=t.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(i.classes,s):i.classes.push(s)),n.hooks.run("wrap",i);var o="";for(var l in i.attributes)o+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var r=JSON.parse(t.data),a=r.language,i=r.code,s=r.immediateClose;e.postMessage(n.highlight(i,n.languages[a],a)),s&&e.close()}),!1),n):n;var p=n.util.currentScript();function h(){n.manual||n.highlightAll()}if(p&&(n.filename=p.src,p.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){var u=document.readyState;"loading"===u||"interactive"===u&&p&&p.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return n}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==r.g&&(r.g.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};n["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:n},a.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(e,t){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:a.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(void 0!==a&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",r="loading",n="loaded",i="pre[data-src]:not(["+t+'="'+n+'"]):not(['+t+'="'+r+'"])';a.hooks.add("before-highlightall",(function(e){e.selector+=", "+i})),a.hooks.add("before-sanity-check",(function(s){var o=s.element;if(o.matches(i)){s.code="",o.setAttribute(t,r);var l=o.appendChild(document.createElement("CODE"));l.textContent="Loading…";var c=o.getAttribute("data-src"),d=s.language;if("none"===d){var p=(/\.(\w+)$/.exec(c)||[,"none"])[1];d=e[p]||p}a.util.setLanguage(l,d),a.util.setLanguage(o,d);var h=a.plugins.autoloader;h&&h.loadLanguages(d),function(e,t,r){var a=new XMLHttpRequest;a.open("GET",e,!0),a.onreadystatechange=function(){4==a.readyState&&(a.status<400&&a.responseText?t(a.responseText):a.status>=400?r("✖ Error "+a.status+" while fetching file: "+a.statusText):r("✖ Error: File does not exist or is empty"))},a.send(null)}(c,(function(e){o.setAttribute(t,n);var r=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var r=Number(t[1]),a=t[2],n=t[3];return a?n?[r,Number(n)]:[r,void 0]:[r,r]}}(o.getAttribute("data-range"));if(r){var i=e.split(/\r\n?|\n/g),s=r[0],c=null==r[1]?i.length:r[1];s<0&&(s+=i.length),s=Math.max(0,Math.min(s-1,i.length)),c<0&&(c+=i.length),c=Math.max(0,Math.min(c,i.length)),e=i.slice(s,c).join("\n"),o.hasAttribute("data-start")||o.setAttribute("data-start",String(s+1))}l.textContent=e,a.highlightElement(l)}),(function(e){o.setAttribute(t,"failed"),l.textContent=e}))}})),a.plugins.fileHighlight={highlight:function(e){for(var t,r=(e||document).querySelectorAll(i),n=0;t=r[n++];)a.highlightElement(t)}};var s=!1;a.fileHighlight=function(){s||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),s=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}}()},464:e=>{"use strict";var t,r="";e.exports=function(e,a){if("string"!=typeof e)throw new TypeError("expected a string");if(1===a)return e;if(2===a)return e+e;var n=e.length*a;if(t!==e||void 0===t)t=e,r="";else if(r.length>=n)return r.substr(0,n);for(;n>r.length&&a>1;)1&a&&(r+=e),a>>=1,e+=e;return r=(r+=e).substr(0,n)}},131:(e,t,r)=>{"use strict";var a=r(464),n=function(e){return/<\/+[^>]+>/.test(e)},i=function(e){return/<[^>]+\/>/.test(e)},s=function(e){return function(e){return/<[^>!]+>/.test(e)}(e)&&!n(e)&&!i(e)};function o(e){return n(e)?"ClosingTag":s(e)?"OpeningTag":i(e)?"SelfClosingTag":"Text"}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.indentor,n=t.textNodesOnSameLine,i=0,s=[];r=r||"    ";var l,c,d=(l=e,(c=l,c.split(/(<\/?[^>]+>)/g).filter((function(e){return""!==e.trim()}))).map((function(e){return{value:e,type:o(e)}}))).map((function(e,t,o){var l=e.value,c=e.type;"ClosingTag"===c&&i--;var d=a(r,i),p=d+l;if("OpeningTag"===c&&i++,n){var h=o[t-1],u=o[t-2];"ClosingTag"===c&&"Text"===h.type&&"OpeningTag"===u.type&&(p=""+d+u.value+h.value+l,s.push(t-2,t-1))}return p}));return s.forEach((function(e){return d[e]=null})),d.filter((function(e){return!!e})).join("\n")}}},a={};function n(e){var t=a[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var i=a[e]={exports:{}};try{var s={id:e,module:i,factory:r[e],require:n};n.i.forEach((function(e){e(s)})),i=s.module,s.factory.call(i.exports,i,i.exports,s.require)}catch(e){throw i.error=e,e}return i.exports}n.m=r,n.c=a,n.i=[],n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.hu=e=>e+"."+n.h()+".hot-update.js",n.hmrF=()=>"main."+n.h()+".hot-update.json",n.h=()=>"bc9d351fe70994a98665",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="rapidoc:",n.l=(r,a,i,s)=>{if(e[r])e[r].push(a);else{var o,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var p=c[d];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+i){o=p;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+i),o.src=r),e[r]=[a];var h=(t,a)=>{o.onerror=o.onload=null,clearTimeout(u);var n=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(a))),t)return t(a)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=h.bind(null,o.onerror),o.onload=h.bind(null,o.onload),l&&document.head.appendChild(o)}},(()=>{var e,t,r,a={},i=n.c,s=[],o=[],l="idle",c=0,d=[];function p(e){l=e;for(var t=[],r=0;r<o.length;r++)t[r]=o[r].call(null,e);return Promise.all(t)}function h(){0==--c&&p("ready").then((function(){if(0===c){var e=d;d=[];for(var t=0;t<e.length;t++)e[t]()}}))}function u(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return p("check").then(n.hmrM).then((function(r){return r?p("prepare").then((function(){var a=[];return t=[],Promise.all(Object.keys(n.hmrC).reduce((function(e,i){return n.hmrC[i](r.c,r.r,r.m,e,t,a),e}),[])).then((function(){return t=function(){return e?f(e):p("ready").then((function(){return a}))},0===c?t():new Promise((function(e){d.push((function(){e(t())}))}));var t}))})):p(g()?"ready":"idle").then((function(){return null}))}))}function m(e){return"ready"!==l?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+l+")")})):f(e)}function f(e){e=e||{},g();var a=t.map((function(t){return t(e)}));t=void 0;var n=a.map((function(e){return e.error})).filter(Boolean);if(n.length>0)return p("abort").then((function(){throw n[0]}));var i=p("dispose");a.forEach((function(e){e.dispose&&e.dispose()}));var s,o=p("apply"),l=function(e){s||(s=e)},c=[];return a.forEach((function(e){if(e.apply){var t=e.apply(l);if(t)for(var r=0;r<t.length;r++)c.push(t[r])}})),Promise.all([i,o]).then((function(){return s?p("fail").then((function(){throw s})):r?f(e).then((function(e){return c.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):p("idle").then((function(){return c}))}))}function g(){if(r)return t||(t=[]),Object.keys(n.hmrI).forEach((function(e){r.forEach((function(r){n.hmrI[e](r,t)}))})),r=void 0,!0}n.hmrD=a,n.i.push((function(d){var f,g,v,b,y=d.module,x=function(t,r){var a=i[r];if(!a)return t;var n=function(n){if(a.hot.active){if(i[n]){var o=i[n].parents;-1===o.indexOf(r)&&o.push(r)}else s=[r],e=n;-1===a.children.indexOf(n)&&a.children.push(n)}else console.warn("[HMR] unexpected require("+n+") from disposed module "+r),s=[];return t(n)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var d in t)Object.prototype.hasOwnProperty.call(t,d)&&"e"!==d&&Object.defineProperty(n,d,o(d));return n.e=function(e){return function(e){switch(l){case"ready":p("prepare");case"prepare":return c++,e.then(h,h),e;default:return e}}(t.e(e))},n}(d.require,d.id);y.hot=(f=d.id,g=y,b={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:v=e!==f,_requireSelf:function(){s=g.parents.slice(),e=v?void 0:f,n(f)},active:!0,accept:function(e,t,r){if(void 0===e)b._selfAccepted=!0;else if("function"==typeof e)b._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var a=0;a<e.length;a++)b._acceptedDependencies[e[a]]=t||function(){},b._acceptedErrorHandlers[e[a]]=r;else b._acceptedDependencies[e]=t||function(){},b._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)b._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)b._declinedDependencies[e[t]]=!0;else b._declinedDependencies[e]=!0},dispose:function(e){b._disposeHandlers.push(e)},addDisposeHandler:function(e){b._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=b._disposeHandlers.indexOf(e);t>=0&&b._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":t=[],Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](f,t)})),p("ready");break;case"ready":Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](f,t)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(f)}},check:u,apply:m,status:function(e){if(!e)return l;o.push(e)},addStatusHandler:function(e){o.push(e)},removeStatusHandler:function(e){var t=o.indexOf(e);t>=0&&o.splice(t,1)},data:a[f]},e=void 0,b),y.parents=s,y.children=[],s=[],d.require=x})),n.hmrC={},n.hmrI={}})(),n.p="",(()=>{var e,t,r,a,i,s=n.hmrS_jsonp=n.hmrS_jsonp||{179:0},o={};function l(t,r){return e=r,new Promise(((e,r)=>{o[t]=e;var a=n.p+n.hu(t),i=new Error;n.l(a,(e=>{if(o[t]){o[t]=void 0;var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;i.message="Loading hot update chunk "+t+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,r(i)}}))}))}function c(e){function o(e){for(var t=[e],r={},a=t.map((function(e){return{chain:[e],id:e}}));a.length>0;){var i=a.pop(),s=i.id,o=i.chain,c=n.c[s];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:s};if(c.hot._main)return{type:"unaccepted",chain:o,moduleId:s};for(var d=0;d<c.parents.length;d++){var p=c.parents[d],h=n.c[p];if(h){if(h.hot._declinedDependencies[s])return{type:"declined",chain:o.concat([p]),moduleId:s,parentId:p};-1===t.indexOf(p)&&(h.hot._acceptedDependencies[s]?(r[p]||(r[p]=[]),l(r[p],[s])):(delete r[p],t.push(p),a.push({chain:o.concat([p]),id:p})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function l(e,t){for(var r=0;r<t.length;r++){var a=t[r];-1===e.indexOf(a)&&e.push(a)}}n.f&&delete n.f.jsonpHmr,t=void 0;var c={},d=[],p={},h=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var u in r)if(n.o(r,u)){var m,f=r[u],g=!1,v=!1,b=!1,y="";switch((m=f?o(u):{type:"disposed",moduleId:u}).chain&&(y="\nUpdate propagation: "+m.chain.join(" -> ")),m.type){case"self-declined":e.onDeclined&&e.onDeclined(m),e.ignoreDeclined||(g=new Error("Aborted because of self decline: "+m.moduleId+y));break;case"declined":e.onDeclined&&e.onDeclined(m),e.ignoreDeclined||(g=new Error("Aborted because of declined dependency: "+m.moduleId+" in "+m.parentId+y));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(m),e.ignoreUnaccepted||(g=new Error("Aborted because "+u+" is not accepted"+y));break;case"accepted":e.onAccepted&&e.onAccepted(m),v=!0;break;case"disposed":e.onDisposed&&e.onDisposed(m),b=!0;break;default:throw new Error("Unexception type "+m.type)}if(g)return{error:g};if(v)for(u in p[u]=f,l(d,m.outdatedModules),m.outdatedDependencies)n.o(m.outdatedDependencies,u)&&(c[u]||(c[u]=[]),l(c[u],m.outdatedDependencies[u]));b&&(l(d,[m.moduleId]),p[u]=h)}r=void 0;for(var x,w=[],$=0;$<d.length;$++){var k=d[$],S=n.c[k];S&&(S.hot._selfAccepted||S.hot._main)&&p[k]!==h&&!S.hot._selfInvalidated&&w.push({module:k,require:S.hot._requireSelf,errorHandler:S.hot._selfAccepted})}return{dispose:function(){var e;a.forEach((function(e){delete s[e]})),a=void 0;for(var t,r=d.slice();r.length>0;){var i=r.pop(),o=n.c[i];if(o){var l={},p=o.hot._disposeHandlers;for($=0;$<p.length;$++)p[$].call(null,l);for(n.hmrD[i]=l,o.hot.active=!1,delete n.c[i],delete c[i],$=0;$<o.children.length;$++){var h=n.c[o.children[$]];h&&((e=h.parents.indexOf(i))>=0&&h.parents.splice(e,1))}}}for(var u in c)if(n.o(c,u)&&(o=n.c[u]))for(x=c[u],$=0;$<x.length;$++)t=x[$],(e=o.children.indexOf(t))>=0&&o.children.splice(e,1)},apply:function(t){for(var r in p)n.o(p,r)&&(n.m[r]=p[r]);for(var a=0;a<i.length;a++)i[a](n);for(var s in c)if(n.o(c,s)){var o=n.c[s];if(o){x=c[s];for(var l=[],h=[],u=[],m=0;m<x.length;m++){var f=x[m],g=o.hot._acceptedDependencies[f],v=o.hot._acceptedErrorHandlers[f];if(g){if(-1!==l.indexOf(g))continue;l.push(g),h.push(v),u.push(f)}}for(var b=0;b<l.length;b++)try{l[b].call(null,x)}catch(r){if("function"==typeof h[b])try{h[b](r,{moduleId:s,dependencyId:u[b]})}catch(a){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:s,dependencyId:u[b],error:a,originalError:r}),e.ignoreErrored||(t(a),t(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:s,dependencyId:u[b],error:r}),e.ignoreErrored||t(r)}}}for(var y=0;y<w.length;y++){var $=w[y],k=$.module;try{$.require(k)}catch(r){if("function"==typeof $.errorHandler)try{$.errorHandler(r,{moduleId:k,module:n.c[k]})}catch(a){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:a,originalError:r}),e.ignoreErrored||(t(a),t(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:k,error:r}),e.ignoreErrored||t(r)}}return d}}}self.webpackHotUpdaterapidoc=(t,a,s)=>{for(var l in a)n.o(a,l)&&(r[l]=a[l],e&&e.push(l));s&&i.push(s),o[t]&&(o[t](),o[t]=void 0)},n.hmrI.jsonp=function(e,t){r||(r={},i=[],a=[],t.push(c)),n.o(r,e)||(r[e]=n.m[e])},n.hmrC.jsonp=function(e,o,d,p,h,u){h.push(c),t={},a=o,r=d.reduce((function(e,t){return e[t]=!1,e}),{}),i=[],e.forEach((function(e){n.o(s,e)&&void 0!==s[e]?(p.push(l(e,u)),t[e]=!0):t[e]=!1})),n.f&&(n.f.jsonpHmr=function(e,r){t&&n.o(t,e)&&!t[e]&&(r.push(l(e)),t[e]=!0)})},n.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(n.p+n.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})();n(601)})();
//# sourceMappingURL=rapidoc-min.js.map