console.groupCollapsed("%c    🗄️  SIDEBAR-ORGANIZER  🗄️    %c    · v3.1.0 ·    ","background: linear-gradient(90deg, #02343F,#02343F 80%,#F0EDCC 100%);color: #F0EDCC;padding: 2px 0px; border: 0.5px solid; text-shadow: 0 2px 2px rgba(1, 1, 1, 0.2); font-family: Roboto,Verdana,Geneva,sans-serif; border-color: #F0EDCC;border-right: none; border-radius: 6px 0 0 6px;","background: linear-gradient(90deg, #F0EDCC 100%,#02343F 80%,#02343F);color: #02343F;padding: 2px 0px; border: 0.5px solid; text-shadow: 0 2px 2px rgba(1, 1, 1, 0.2); font-family: Roboto,Verdana,Geneva,sans-serif; border-color: #F0EDCC;border-left: none; border-radius: 0 6px 6px 0;"),console.info("Customize the sidebar in Home Assistant"),console.info("Github: https://github.com/ngocjohn/sidebar-organizer"),console.info("If you like the plugin, consider supporting the developer: https://github.com/sponsors/ngocjohn"),console.groupEnd();var e,t,i,n,o,s,r,a,l,c="3.1.0",d={url:"https://github.com/ngocjohn/sidebar-organizer"},h={version:c,repository:d};!function(e){e.SIDEBAR_SCROLLBAR="ha-md-list.ha-scrollbar",e.SPACER=".spacer",e.USER=".user",e.MENU=".menu",e.MENU_TITLE=".title",e.DIVIDER=".divider",e.DIVIDER_ADDED="div.divider[added]",e.SIDEBAR_CONFIG_DIALOG="#sidebar-organizer-config-dialog",e.SELECTED=".selected",e.HEADER_TOGGLE_ICON="ha-icon.collapse-toggle",e.ADDED_CONTENT=".added-content",e.BADGE=".badge",e.NOTIFY_ICON="ha-icon.badge",e.HA_SVG_ICON="ha-svg-icon",e.ITEM_TEXT=".item-text",e.ITEM_PROFILE='ha-md-list-item[href="/profile"]',e.DEV_TOOLS='ha-md-list-item[data-panel="developer-tools"]',e.USER_ITEM="ha-md-list-item.user",e.ACTION_SLOT='div[slot="actions"]',e.HA_DIALOG_FOOTER="ha-dialog-footer",e.FOOTER="footer",e.PANELS_LIST=".panels-list",e.BEFORE_SPACER=".before-spacer",e.AFTER_SPACER="ha-md-list.after-spacer",e.GRID_CONTAINER=".grid-container",e.SETTINGS_ITEM=".panels-list > ha-md-list > ha-md-list-item.configuration",e.CONTENT=".content"}(e||(e={})),function(e){e.ITEM="ha-md-list-item",e.HA_SVG_ICON="ha-svg-icon",e.HA_ICON="ha-icon",e.HA_ICON_BUTTON="ha-icon-button",e.ANCHOR="a",e.BUTTON="button",e.MD_RIPPLE="md-ripple",e.USER_BADGE="ha-user-badge",e.SIDEBAR_CONFIG_DIALOG="sidebar-organizer-config-dialog",e.SIDEBAR_CONFIG_DIALOG_WRAPPER="sidebar-organizer-dialog",e.SIDEBAR_CONFIG_DIALOG_WA="sidebar-organizer-dialog-wa",e.HA_BUTTON="ha-button",e.ADDED_DIVIDER="div.divider[added]",e.DIVIDER="div.divider",e.CONFIG_DASHBOARDS="ha-config-lovelace-dashboards",e.DIALOG_EDIT_SIDEBAR="dialog-edit-sidebar",e.ITEMS_DISPLAY_EDITOR="ha-items-display-editor",e.HA_MD_LIST="ha-md-list",e.HA_SIDEBAR="ha-sidebar",e.PROFILE_GENERAL="ha-profile-section-general",e.SO_PROFILE_SECTION="so-profile-section"}(t||(t={})),function(e){e.COLLAPSED="collapsed",e.SELECTED="selected",e.SPACER="spacer",e.BADGE="badge",e.LARGE_BADGE="large-badge",e.NO_VISIBLE="no-visible",e.BADGE_NUMBER="badge-number",e.COLLAPSE_TOGGLE="collapse-toggle",e.ACTIVE="active",e.ADDED_CONTENT="added-content"}(i||(i={})),function(e){e.ROLE="role",e.PROCESSED="data-processed",e.TAB_INDEX="tabindex",e.DISABLED="disabled",e.HREF="href",e.SLOT="slot",e.TYPE="type",e.DATA_NOTIFICATION="data-notification",e.DATA_PANEL="data-panel",e.NEW_ITEM="new-item",e.GRID_ITEM="grid-item",e.BOTTOM="bottom",e.MOVED="moved",e.UNGROUPED="ungrouped",e.GROUP="group",e.ADDED="added",e.EXPANDED="expanded"}(n||(n={})),function(e){e.PRIMARY_ACTION="primaryAction",e.SECONDARY_ACTION="secondaryAction"}(o||(o={})),function(e){e.CONFIG_DIFF="config-diff",e.UI_EDITOR="ui-editor"}(s||(s={})),function(e){e.MOUSEENTER="mouseenter",e.MOUSELEAVE="mouseleave",e.TOUCHSTART="touchstart",e.MOUSEDOWN="mousedown"}(r||(r={})),function(e){e.PLUS="mdi:plus",e.MINUS="mdi:minus"}(a||(a={})),function(e){e.NOT_RUNNING="NOT_RUNNING",e.STARTING="STARTING",e.RUNNING="RUNNING",e.STOPPING="STOPPING",e.FINAL_WRITE="FINAL_WRITE"}(l||(l={}));const u="sidebar-organizer",f="Sidebar Organizer",p=`v${c}`,g=`${d.url}`,m="sidebar-organizer",_="/local/sidebar-organizer.yaml",b=/\/profile(\/general)?$/;var y,v,w,A;!function(e){e.LOVELACE_DASHBOARD="/config/lovelace/dashboards",e.PROFILE_GENERAL="/profile/general",e.PROFILE="/profile"}(y||(y={})),function(e){e.BASE="base",e.CODE="codeEditor"}(v||(v={})),function(e){e.UI_CONFIG="sidebarOrganizerConfig",e.USE_CONFIG_FILE="sidebarOrganizerUseConfigFile",e.PANEL_ORDER="sidebarPanelOrder",e.COLLAPSE="sidebarCollapsedGroups",e.HIDDEN_PANELS="sidebarHiddenPanels",e.HA_VERSION="ha-version",e.BLOCK_SIDEBAR_EDIT="blockSidebarEdit"}(w||(w={})),function(e){e.SETTHEME="settheme",e.DEFAULT_PANEL="hass-default-panel",e.DIALOG_CLOSED="dialog-closed",e.LOCATION_CHANGED="location-changed",e.SHOW_DIALOG="show-dialog",e.SIDEBAR_CONFIG_SAVED="save-sidebar-organizer-config",e.HASS_EDIT_SIDEBAR="hass-edit-sidebar"}(A||(A={}));const E=[{value:"background_color",label:"Background Color"},{value:"border_top_color",label:"Border Top Color"},{value:"divider_color",label:"Divider line color"},{value:"scrollbar_thumb_color",label:"Scrollbar thumb color"},{value:"custom_sidebar_background_color",label:"Sidebar background color"}],C={bottom_items:[],custom_groups:{},hide_header_toggle:!1,default_collapsed:[],hidden_items:[],new_items:[]},O={ITEMS_DIFFERENT:"The items in config file do not match the items in the sidebar. Check console for more details.",CONFIG_VALID:"The configuration is valid.",CONFIG_INVALID:"The configuration is invalid. Below are the errors found in the configuration.",INFO_EDIT_UPLOAD_CONFIG:"You can edit invalid items in the editor and validate the configuration again. You can also upload a new config file.",CONFIG_EMPTY:"You dont have any configuration yet.",USE_CONFIG_FILE:"Currently Sidebar Organizer uses the config file. If config is valid, you can save and migrate it to the browser's local storage.",NAME_EXISTS:"The name already exists. Choose another name.",CONFIRM_DELETE:"Are you sure you want to delete the current configuration?",NOT_COMPATIBLE:"Sidebar Organizer is not compatible with this version of Home Assistant",VERSION_INFO:`More info: ${g}/issues/16`,HAS_SIDEBAR_CONFIG_WARNING:"You have a saved sidebar configuration in your browser's local storage. Modifying the sidebar using the built-in Home Assistant dialog will disable Sidebar Organizer configuration and reset the sidebar to its default state. Do you want to edit the sidebar using Sidebar Organizer instead?",INVALID_UPLOADED_CONFIG:"The uploaded config is invalid with some errors. Fix them in the editor or upload a new config file.",CONFIG_CHANGED:"The configuration has been changed. Do you want to save it?",CLEAN_USER_DATA:"For using sidebar organizer you need to clear your synced settings in this user's Home Assistant profile.",CLEAN_SUCCESS_RELOAD:"Your synced settings have been cleared successfully.  Click 'OK' reload the page to apply the changes.",LEGACY_EDIT_WARNING:"You have Sidebar Organizer installed. It is recommended to use Sidebar Organizer Dialog to edit the sidebar. Do you want to open Sidebar Organizer Dialog instead?",FRONTEND_MODULE:"You may experience issues when plugin is not loaded as a module.",INSTALLATION_LINK:`See: ${g}#installation`,UPLOAD_SUCCESS_VALID_RELOAD:"Config uploaded successfully and is valid. Click OK to reload the page and apply the new configuration."},S=["none","capitalize","uppercase","lowercase"];var x;!function(e){e.CUSTOM="custom_groups",e.BOTTOM="bottom_items",e.BOTTOM_GRID="bottom_grid_items",e.HIDDEN="hidden_items"}(x||(x={}));const I=(e,t)=>{const i={...Object.keys(e).filter(e=>"modes"!==e).reduce((t,i)=>(t[i]=e[i],t),{}),...e.modes&&"object"==typeof e.modes?e.modes[t]:{}};return"sidebar-text-color"in i||(i["sidebar-text-color"]="var(--primary-text-color)"),"sidebar-icon-color"in i||(i["sidebar-icon-color"]=" rgba(var(--rgb-primary-text-color), 0.6)"),i},k=(e,t,i,n)=>{if(!e)return;const o=t.themes.themes[i];if(o){n||(n=t.themes.darkMode?"dark":"light");const s=I(o,n),r={default_theme:t.themes.default_theme,themes:{[i]:s}};N(e,r,i,!1)}},N=(e,t,i,n=!1)=>{e._themes||(e._themes={});let o=t.default_theme;("default"===i||i&&t.themes[i])&&(o=i);const s={...e._themes};if("default"!==o){const i=t.themes[o];Object.keys(i).forEach(t=>{const n="--"+t;e._themes[n]="",s[n]=i[t]})}if(window.ShadyCSS)window.ShadyCSS.styleSubtree(e,s);else for(const t in s)null===t?e.style.removeProperty(t):e.style.setProperty(t,s[t]);if(!n)return;const r=document.querySelector("meta[name=theme-color]");if(r){r.hasAttribute("default-content")||r.setAttribute("default-content",r.getAttribute("content"));const e=s["--primary-color"]||r.getAttribute("default-content");r.setAttribute("content",e)}},T=(e,t)=>{const i=t.themes.themes;if(!(e in i))return!1;const n=i[e];return!(!n.modes||!n.modes.light&&!n.modes.dark)},$=(e,t)=>T(e,t)?Object.keys(t.themes.themes[e].modes):[],L=(e,t)=>{const i=e?.custom_theme,n=i?.theme||t.themes.theme,o=i?.mode,s=$(n,t);let r=t.themes.darkMode;return r=s.length?!("dark"!==o||!s.includes("dark"))||("light"!==o||!s.includes("light"))&&(!!s.includes("dark")&&t.themes.darkMode):t.themes.darkMode,r};var D=function(e,t,i){var n;void 0===i&&(i={});var o=i.retries,s=void 0===o?10:o,r=i.delay,a=void 0===r?10:r,l=i.shouldReject,c=void 0===l||l,d=null!==(n=i.rejectMessage)&&void 0!==n?n:"Could not get the result after {{ retries }} retries";return new Promise(function(i,n){var o=0,r=function(){var l=e();t(l)?i(l):++o<s?setTimeout(r,a):c?n(new Error(d.replace(/\{\{\s*retries\s*\}\}/g,"".concat(s)))):i(l)};r()})};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,P=M.ShadowRoot&&(void 0===M.ShadyCSS||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol(),B=new WeakMap;let j=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==R)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(P&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=B.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&B.set(t,e))}return e}toString(){return this.cssText}};const H=e=>new j("string"==typeof e?e:e+"",void 0,R),G=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new j(i,e,R)},U=(e,t)=>{if(P)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),n=M.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=i.cssText,e.appendChild(t)}},F=P?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return H(t)})(e):e,{is:V,defineProperty:z,getOwnPropertyDescriptor:q,getOwnPropertyNames:K,getOwnPropertySymbols:W,getPrototypeOf:Y}=Object,J=globalThis,X=J.trustedTypes,Q=X?X.emptyScript:"",Z=J.reactiveElementPolyfillSupport,ee=(e,t)=>e,te={toAttribute(e,t){switch(t){case Boolean:e=e?Q:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},ie=(e,t)=>!V(e,t),ne={attribute:!0,type:String,converter:te,reflect:!1,useDefault:!1,hasChanged:ie};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),J.litPropertyMetadata??=new WeakMap;let oe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&z(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:o}=q(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const s=n?.call(this);o?.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ne}static _$Ei(){if(this.hasOwnProperty(ee("elementProperties")))return;const e=Y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ee("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee("properties"))){const e=this.properties,t=[...K(e),...W(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(F(e))}else void 0!==e&&t.push(F(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return U(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:te).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:te;this._$Em=n;const s=o.fromAttribute(t,e.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const n=this.constructor,o=this[e];if(i??=n.getPropertyOptions(e),!((i.hasChanged??ie)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:o},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==o||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,i,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};oe.elementStyles=[],oe.shadowRootOptions={mode:"open"},oe[ee("elementProperties")]=new Map,oe[ee("finalized")]=new Map,Z?.({ReactiveElement:oe}),(J.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se=globalThis,re=se.trustedTypes,ae=re?re.createPolicy("lit-html",{createHTML:e=>e}):void 0,le="$lit$",ce=`lit$${Math.random().toFixed(9).slice(2)}$`,de="?"+ce,he=`<${de}>`,ue=document,fe=()=>ue.createComment(""),pe=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ge=Array.isArray,me=e=>ge(e)||"function"==typeof e?.[Symbol.iterator],_e="[ \t\n\f\r]",be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,ve=/>/g,we=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Ae=/'/g,Ee=/"/g,Ce=/^(?:script|style|textarea|title)$/i,Oe=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Se=Oe(1),xe=Symbol.for("lit-noChange"),Ie=Symbol.for("lit-nothing"),ke=new WeakMap,Ne=ue.createTreeWalker(ue,129);function Te(e,t){if(!ge(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ae?ae.createHTML(t):t}const $e=(e,t)=>{const i=e.length-1,n=[];let o,s=2===t?"<svg>":3===t?"<math>":"",r=be;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===be?"!--"===l[1]?r=ye:void 0!==l[1]?r=ve:void 0!==l[2]?(Ce.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=we):void 0!==l[3]&&(r=we):r===we?">"===l[0]?(r=o??be,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?we:'"'===l[3]?Ee:Ae):r===Ee||r===Ae?r=we:r===ye||r===ve?r=be:(r=we,o=void 0);const h=r===we&&e[t+1].startsWith("/>")?" ":"";s+=r===be?i+he:c>=0?(n.push(a),i.slice(0,c)+le+i.slice(c)+ce+h):i+ce+(-2===c?t:h)}return[Te(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};let Le=class e{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const a=t.length-1,l=this.parts,[c,d]=$e(t,i);if(this.el=e.createElement(c,n),Ne.currentNode=this.el.content,2===i||3===i){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Ne.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(le)){const t=d[r++],i=o.getAttribute(e).split(ce),n=/([.?@])?(.*)/.exec(t);l.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?Be:"?"===n[1]?je:"@"===n[1]?He:Re}),o.removeAttribute(e)}else e.startsWith(ce)&&(l.push({type:6,index:s}),o.removeAttribute(e));if(Ce.test(o.tagName)){const e=o.textContent.split(ce),t=e.length-1;if(t>0){o.textContent=re?re.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],fe()),Ne.nextNode(),l.push({type:2,index:++s});o.append(e[t],fe())}}}else if(8===o.nodeType)if(o.data===de)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(ce,e+1));)l.push({type:7,index:s}),e+=ce.length-1}s++}}static createElement(e,t){const i=ue.createElement("template");return i.innerHTML=e,i}};function De(e,t,i=e,n){if(t===xe)return t;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const s=pe(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(e),o._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(t=De(e,o._$AS(e,t.values),o,n)),t}let Me=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??ue).importNode(t,!0);Ne.currentNode=n;let o=Ne.nextNode(),s=0,r=0,a=i[0];for(;void 0!==a;){if(s===a.index){let t;2===a.type?t=new Pe(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new Ge(o,this,e)),this._$AV.push(t),a=i[++r]}s!==a?.index&&(o=Ne.nextNode(),s++)}return Ne.currentNode=ue,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Pe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=Ie,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=De(this,e,t),pe(e)?e===Ie||null==e||""===e?(this._$AH!==Ie&&this._$AR(),this._$AH=Ie):e!==this._$AH&&e!==xe&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):me(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ie&&pe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ue.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Le.createElement(Te(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new Me(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=ke.get(e.strings);return void 0===t&&ke.set(e.strings,t=new Le(e)),t}k(t){ge(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new e(this.O(fe()),this.O(fe()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}},Re=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,o){this.type=1,this._$AH=Ie,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ie}_$AI(e,t=this,i,n){const o=this.strings;let s=!1;if(void 0===o)e=De(this,e,t,0),s=!pe(e)||e!==this._$AH&&e!==xe,s&&(this._$AH=e);else{const n=e;let r,a;for(e=o[0],r=0;r<o.length-1;r++)a=De(this,n[i+r],t,r),a===xe&&(a=this._$AH[r]),s||=!pe(a)||a!==this._$AH[r],a===Ie?e=Ie:e!==Ie&&(e+=(a??"")+o[r+1]),this._$AH[r]=a}s&&!n&&this.j(e)}j(e){e===Ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Be=class extends Re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ie?void 0:e}},je=class extends Re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ie)}},He=class extends Re{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){if((e=De(this,e,t,0)??Ie)===xe)return;const i=this._$AH,n=e===Ie&&i!==Ie||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Ie&&(i===Ie||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ge=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){De(this,e)}};const Ue={I:Pe},Fe=se.litHtmlPolyfillSupport;Fe?.(Le,Pe),(se.litHtmlVersions??=[]).push("3.3.1");const Ve=(e,t,i)=>{const n=i?.renderBefore??t;let o=n._$litPart$;if(void 0===o){const e=i?.renderBefore??null;n._$litPart$=o=new Pe(t.insertBefore(fe(),e),e,void 0,i??{})}return o._$AI(e),o
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */},ze=globalThis;let qe=class extends oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return xe}};qe._$litElement$=!0,qe.finalized=!0,ze.litElementHydrateSupport?.({LitElement:qe});const Ke=ze.litElementPolyfillSupport;Ke?.({LitElement:qe}),(ze.litElementVersions??=[]).push("4.2.1");const We=300,Ye=/sidebar-organizer.js/i,Je=({content:e,options:t})=>{const i=t.darkBg?"background-color: rgba(0, 0, 0, 0.2);":"";return Se`
    <ha-expansion-panel
      style=${"margin-bottom: var(--side-dialog-padding); --expansion-panel-content-padding: 0;"}
      .outlined=${!0}
      .expanded=${t?.expanded||!1}
      .header=${t.header}
      .secondary=${t?.secondary||""}
      .leftChevron=${!1}
    >
      ${t.icon?Se`<ha-icon icon=${t.icon} slot="leading-icon" style="color: var(--secondary-text-color)"></ha-icon>`:""}
      <div style="padding: 1em; ${i}">${e}</div>
    </ha-expansion-panel>
  `};function Xe(e,t,i){let n,o=!1,s=!1;const r=e=>{e.stopPropagation(),e instanceof MouseEvent&&0!==e.button||(o=!0,s=!1,n=setTimeout(()=>{o&&t&&(s=!0,t())},We))},a=e=>{e.stopPropagation(),n&&clearTimeout(n),o=!1,s&&(e.preventDefault(),s=!1)};["touchstart","mousedown"].forEach(t=>{e.addEventListener(t,r,{passive:!0})}),["touchend","mouseup"].forEach(t=>{e.addEventListener(t,a)})}const Qe=(e,n)=>{const o=Array.from(n?.querySelectorAll(t.ITEM)),s=o.find(t=>e===t.href),r=s?null:o.reduce((t,i)=>(e.startsWith(i.href)&&(!t||i.href.length>t.href.length)&&(t=i),t),null);o.forEach(e=>{const t=s&&s===e||!s&&r===e;e.classList.toggle(i.SELECTED,t),e.tabIndex=t?0:-1});const a=n?.querySelectorAll("div.divider");0!==a.length&&a.forEach(e=>{const o=e.getAttribute("group"),s=n?.querySelectorAll(`${t.ITEM}[group="${o}"]`),r=Object.values(s).some(e=>e.classList.contains(i.SELECTED));e.classList.toggle("child-selected",r),e.setAttribute("aria-selected",r.toString())})},Ze=async e=>await D(()=>e.shadowRoot?.querySelector("dialog-edit-sidebar"),e=>void 0!==e,{retries:100,delay:50,shouldReject:!1}),et=e=>{const t=[];for(const i of Array.from(e))if(i?.innerText?.trim()?.startsWith("import(")){const e=i.innerText.split(";")?.map(e=>e.trim());for(const i of e)t.push(i.replace(/^import\(\"/,"").replace(/\"\)/,""))}const i=t.find(e=>Ye.test(e))||null;return i},tt=(e,t="")=>{const i=document.createElement("a");i.target="_blank",i.href=e,i.download=t,i.style.display="none",document.body.appendChild(i),i.dispatchEvent(new MouseEvent("click")),document.body.removeChild(i)},it=async()=>{if(window.caches)try{const e=(await window.caches.keys()).map(e=>window.caches.delete(e));await Promise.all(e),window.location.reload()}catch(e){window.location.reload()}else window.location.reload()},nt=e=>{requestAnimationFrame(()=>setTimeout(e,0))},ot=()=>new Promise(e=>{nt(e)}),st=e=>{let t=0;for(const i of e)t=(t<<5)-t+i.charCodeAt(0),t|=0;return t},rt=/sidebar-organizer.js/i,at=/\/hacsfiles.*$/,lt=/[?&]hacstag=(\d+)/,ct=document.scripts,dt=await D(()=>{const e=Array.from(ct).find(e=>rt.test(e.src));return e?.src||""},e=>e.length>0,{retries:100,delay:50,shouldReject:!1});function ht(e){const t=et(ct);if(!dt||!t)return;const i=dt?.match(at)?.[0];if(!i)return;const n=dt.match(lt)?.[1],o=t.match(lt)?.[1];n&&o&&(n===o||ut(n,o,e))}function ut(e,t,i){if(window.so_hacstag_warning)return;window.so_hacstag_warning=!0;const n=`${u.toUpperCase()} (${h.version}) WARNING`,o=["Plugin is being loaded twice with different resource URLs.","Update resource URLs including hacstag to match exactly."],s=[`Dashboard resource URL: ?hacstag=${e}`,`Config resource URL: ?hacstag=${t}`];console.groupCollapsed(`%c${n}Plugin already loaded from frontend module!`,"color: red; font-weight: bold;"),[...o,...s].forEach(e=>console.info(e)),console.groupEnd();const r=`${o.join(" ")}\n\n${s.map(e=>"**"+e+"**").join("\n\n")}\n\nSee [documentation](${h.repository.url}#installation) for more info.`,a="so_hacstag_warning_"+st(i.user?.id||"unknown");i.callService("persistent_notification","create",{notification_id:a,title:n,message:r})}function ft(e,t,i,n){var o,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,i,r):o(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},gt={attribute:!0,type:String,converter:te,reflect:!1,hasChanged:ie},mt=(e=gt,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,o,e)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];t.call(this,i),this.requestUpdate(n,o,e)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(e){return(t,i)=>"object"==typeof i?mt(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(e){return _t({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt(e,t){return(t,i,n)=>yt(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}let wt=class extends qe{constructor(){super(...arguments),this.group="",this.expanded=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this._observer.disconnect(),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),this.expanded=this.haSidebar.alwaysExpand,this._observer=new MutationObserver(e=>{e.forEach(({attributeName:e})=>{e===n.EXPANDED&&(this.expanded=this.haSidebar.alwaysExpand)})}),this._observer.observe(this.haSidebar,{attributes:!0})}render(){return Se`
      ${this.expanded?Se`<ha-icon icon="mdi:chevron-down"></ha-icon><span>${this.group.trim()}</span>`:Se` <ha-icon custom .icon=${this.customIcon}> </ha-icon> `}
    `}};ft([_t({attribute:!1})],wt.prototype,"haSidebar",void 0),ft([_t({attribute:"group"})],wt.prototype,"group",void 0),ft([_t({attribute:"custom-icon"})],wt.prototype,"customIcon",void 0),ft([bt()],wt.prototype,"expanded",void 0),ft([bt()],wt.prototype,"_observer",void 0),wt=ft([pt("so-group-divider")],wt);var At=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function Et(e,t){return e===t||!(!At(e)||!At(t))}function Ct(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!Et(e[i],t[i]))return!1;return!0}function Ot(e,t){void 0===t&&(t=Ct);var i=null;function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(i&&i.lastThis===this&&t(n,i.lastArgs))return i.lastResult;var s=e.apply(this,n);return i={lastResult:s,lastArgs:n,lastThis:this},s}return n.clear=function(){i=null},n}const St=Ot(e=>new Intl.Collator(e));Ot(e=>new Intl.Collator(e,{sensitivity:"accent"}));const xt=(e,t)=>e<t?-1:e>t?1:0,It=(e,t,i=void 0)=>Intl?.Collator?St(i).compare(e,t):xt(e,t),kt=async(e,t)=>(await e.sendMessagePromise({type:"frontend/get_user_data",key:t})).value,Nt=async(e,t,i)=>e.sendMessagePromise({type:"frontend/set_user_data",key:t,value:i}),Tt=async e=>await Nt(e,"sidebar",{}),$t=(e,t,i)=>e.subscribeMessage(i,{type:"frontend/subscribe_user_data",key:t});function Lt(e){return void 0!==e&&"none"!==e.action}function Dt(e){return void 0!==e&&Object.keys(e).filter(e=>"entity"!==e).some(t=>Lt(e[t]))}function Mt(e,t){if(!Number.isInteger(t)||t<=0)throw new Error("Size must be an integer greater than zero.");const i=Math.ceil(e.length/t),n=Array(i);for(let o=0;o<i;o++){const i=o*t,s=i+t;n[o]=e.slice(i,s)}return n}function Pt(e){return Number.isSafeInteger(e)&&e>=0}function Rt(e){return null!=e&&"function"!=typeof e&&Pt(e.length)}function Bt(e){const t=[];for(let i=0;i<e.length;i++){const n=e[i];n&&t.push(n)}return t}function jt(e,t=1){const i=[],n=Math.floor(t),o=(e,t)=>{for(let s=0;s<e.length;s++){const r=e[s];Array.isArray(r)&&t<n?o(r,t+1):i.push(r)}};return o(e,0),i}function Ht(e){return e}function Gt(e){return"__proto__"===e}function Ut(e){switch(typeof e){case"number":case"symbol":return!1;case"string":return e.includes(".")||e.includes("[")||e.includes("]")}}function Ft(e){return"string"==typeof e||"symbol"==typeof e?e:Object.is(e?.valueOf?.(),-0)?"-0":String(e)}function Vt(e){if(null==e)return"";if("string"==typeof e)return e;if(Array.isArray(e))return e.map(Vt).join(",");const t=String(e);return"0"===t&&Object.is(Number(e),-0)?"-0":t}function zt(e){if(Array.isArray(e))return e.map(Ft);if("symbol"==typeof e)return[e];const t=[],i=(e=Vt(e)).length;if(0===i)return t;let n=0,o="",s="",r=!1;for(46===e.charCodeAt(0)&&(t.push(""),n++);n<i;){const a=e[n];s?"\\"===a&&n+1<i?(n++,o+=e[n]):a===s?s="":o+=a:r?'"'===a||"'"===a?s=a:"]"===a?(r=!1,t.push(o),o=""):o+=a:"["===a?(r=!0,o&&(t.push(o),o="")):"."===a?o&&(t.push(o),o=""):o+=a,n++}return o&&t.push(o),t}function qt(e,t,i){if(null==e)return i;switch(typeof t){case"string":{if(Gt(t))return i;const n=e[t];return void 0===n?Ut(t)?qt(e,zt(t),i):i:n}case"number":case"symbol":{"number"==typeof t&&(t=Ft(t));const n=e[t];return void 0===n?i:n}default:{if(Array.isArray(t))return Kt(e,t,i);if(Gt(t=Object.is(t?.valueOf(),-0)?"-0":String(t)))return i;const n=e[t];return void 0===n?i:n}}}function Kt(e,t,i){if(0===t.length)return i;let n=e;for(let e=0;e<t.length;e++){if(null==n)return i;if(Gt(t[e]))return i;n=n[t[e]]}return void 0===n?i:n}function Wt(e){return function(t){return qt(t,e)}}function Yt(e){return null!==e&&("object"==typeof e||"function"==typeof e)}function Jt(e){return null==e||"object"!=typeof e&&"function"!=typeof e}function Xt(e,t){return e===t||Number.isNaN(e)&&Number.isNaN(t)}function Qt(e,t,i){return"function"!=typeof i?Qt(e,t,()=>{}):Zt(e,t,function e(t,n,o,s,r,a){const l=i(t,n,o,s,r,a);return void 0!==l?Boolean(l):Zt(t,n,e,a)},new Map)}function Zt(e,t,i,n){if(t===e)return!0;switch(typeof t){case"object":return ei(e,t,i,n);case"function":return Object.keys(t).length>0?Zt(e,{...t},i,n):Xt(e,t);default:return Yt(e)?"string"!=typeof t||""===t:Xt(e,t)}}function ei(e,t,i,n){if(null==t)return!0;if(Array.isArray(t))return ii(e,t,i,n);if(t instanceof Map)return ti(e,t,i,n);if(t instanceof Set)return ni(e,t,i,n);const o=Object.keys(t);if(null==e||Jt(e))return 0===o.length;if(0===o.length)return!0;if(n?.has(t))return n.get(t)===e;n?.set(t,e);try{for(let s=0;s<o.length;s++){const r=o[s];if(!Jt(e)&&!(r in e))return!1;if(void 0===t[r]&&void 0!==e[r])return!1;if(null===t[r]&&null!==e[r])return!1;if(!i(e[r],t[r],r,e,t,n))return!1}return!0}finally{n?.delete(t)}}function ti(e,t,i,n){if(0===t.size)return!0;if(!(e instanceof Map))return!1;for(const[o,s]of t.entries()){if(!1===i(e.get(o),s,o,e,t,n))return!1}return!0}function ii(e,t,i,n){if(0===t.length)return!0;if(!Array.isArray(e))return!1;const o=new Set;for(let s=0;s<t.length;s++){const r=t[s];let a=!1;for(let l=0;l<e.length;l++){if(o.has(l))continue;let c=!1;if(i(e[l],r,s,e,t,n)&&(c=!0),c){o.add(l),a=!0;break}}if(!a)return!1}return!0}function ni(e,t,i,n){return 0===t.size||e instanceof Set&&ii([...e],[...t],i,n)}function oi(e,t){return Qt(e,t,()=>{})}function si(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}function ri(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const ai="[object RegExp]",li="[object String]",ci="[object Number]",di="[object Boolean]",hi="[object Arguments]",ui="[object Symbol]",fi="[object Date]",pi="[object Map]",gi="[object Set]",mi="[object Array]",_i="[object ArrayBuffer]",bi="[object Object]",yi="[object DataView]",vi="[object Uint8Array]",wi="[object Uint8ClampedArray]",Ai="[object Uint16Array]",Ei="[object Uint32Array]",Ci="[object Int8Array]",Oi="[object Int16Array]",Si="[object Int32Array]",xi="[object Float32Array]",Ii="[object Float64Array]";function ki(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ni(e,t){return Ti(e,void 0,e,new Map,t)}function Ti(e,t,i,n=new Map,o=void 0){const s=o?.(e,t,i,n);if(void 0!==s)return s;if(Jt(e))return e;if(n.has(e))return n.get(e);if(Array.isArray(e)){const t=new Array(e.length);n.set(e,t);for(let s=0;s<e.length;s++)t[s]=Ti(e[s],s,i,n,o);return Object.hasOwn(e,"index")&&(t.index=e.index),Object.hasOwn(e,"input")&&(t.input=e.input),t}if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp){const t=new RegExp(e.source,e.flags);return t.lastIndex=e.lastIndex,t}if(e instanceof Map){const t=new Map;n.set(e,t);for(const[s,r]of e)t.set(s,Ti(r,s,i,n,o));return t}if(e instanceof Set){const t=new Set;n.set(e,t);for(const s of e)t.add(Ti(s,void 0,i,n,o));return t}if("undefined"!=typeof Buffer&&Buffer.isBuffer(e))return e.subarray();if(ki(e)){const t=new(Object.getPrototypeOf(e).constructor)(e.length);n.set(e,t);for(let s=0;s<e.length;s++)t[s]=Ti(e[s],s,i,n,o);return t}if(e instanceof ArrayBuffer||"undefined"!=typeof SharedArrayBuffer&&e instanceof SharedArrayBuffer)return e.slice(0);if(e instanceof DataView){const t=new DataView(e.buffer.slice(0),e.byteOffset,e.byteLength);return n.set(e,t),$i(t,e,i,n,o),t}if("undefined"!=typeof File&&e instanceof File){const t=new File([e],e.name,{type:e.type});return n.set(e,t),$i(t,e,i,n,o),t}if("undefined"!=typeof Blob&&e instanceof Blob){const t=new Blob([e],{type:e.type});return n.set(e,t),$i(t,e,i,n,o),t}if(e instanceof Error){const t=new e.constructor;return n.set(e,t),t.message=e.message,t.name=e.name,t.stack=e.stack,t.cause=e.cause,$i(t,e,i,n,o),t}if(e instanceof Boolean){const t=new Boolean(e.valueOf());return n.set(e,t),$i(t,e,i,n,o),t}if(e instanceof Number){const t=new Number(e.valueOf());return n.set(e,t),$i(t,e,i,n,o),t}if(e instanceof String){const t=new String(e.valueOf());return n.set(e,t),$i(t,e,i,n,o),t}if("object"==typeof e&&Li(e)){const t=Object.create(Object.getPrototypeOf(e));return n.set(e,t),$i(t,e,i,n,o),t}return e}function $i(e,t,i=e,n,o){const s=[...Object.keys(t),...si(t)];for(let r=0;r<s.length;r++){const a=s[r],l=Object.getOwnPropertyDescriptor(e,a);(null==l||l.writable)&&(e[a]=Ti(t[a],a,i,n,o))}}function Li(e){switch(ri(e)){case hi:case mi:case _i:case yi:case di:case fi:case xi:case Ii:case Ci:case Oi:case Si:case pi:case ci:case bi:case ai:case gi:case li:case ui:case vi:case wi:case Ai:case Ei:return!0;default:return!1}}function Di(e){return Ti(e,void 0,e,new Map,void 0)}function Mi(e){return e=Di(e),t=>oi(t,e)}function Pi(e,t){return Ni(e,(t,i,n,o)=>{if("object"==typeof e)switch(Object.prototype.toString.call(e)){case ci:case li:case di:{const t=new e.constructor(e?.valueOf());return $i(t,e),t}case hi:{const t={};return $i(t,e),t.length=e.length,t[Symbol.iterator]=e[Symbol.iterator],t}default:return}})}function Ri(e){return Pi(e)}const Bi=/^(?:0|[1-9]\d*)$/;function ji(e,t=Number.MAX_SAFE_INTEGER){switch(typeof e){case"number":return Number.isInteger(e)&&e>=0&&e<t;case"symbol":return!1;case"string":return Bi.test(e)}}function Hi(e){return null!==e&&"object"==typeof e&&"[object Arguments]"===ri(e)}function Gi(e,t){let i;if(i=Array.isArray(t)?t:"string"==typeof t&&Ut(t)&&null==e?.[t]?zt(t):[t],0===i.length)return!1;let n=e;for(let e=0;e<i.length;e++){const t=i[e];if(null==n||!Object.hasOwn(n,t)){if(!((Array.isArray(n)||Hi(n))&&ji(t)&&t<n.length))return!1}n=n[t]}return!0}function Ui(e,t){switch(typeof e){case"object":Object.is(e?.valueOf(),-0)&&(e="-0");break;case"number":e=Ft(e)}return t=Ri(t),function(i){const n=qt(i,e);return void 0===n?Gi(i,e):void 0===t?void 0===n:oi(n,t)}}function Fi(e){if(null==e)return Ht;switch(typeof e){case"function":return e;case"object":return Array.isArray(e)&&2===e.length?Ui(e[0],e[1]):Mi(e);case"string":case"symbol":case"number":return Wt(e)}}function Vi(e,t){const i=new Set(t);return e.filter(e=>!i.has(e))}function zi(e){return e[e.length-1]}function qi(e,t,i){const n=new Set(t.map(e=>i(e)));return e.filter(e=>!n.has(i(e)))}function Ki(e,t,i){return e.filter(e=>t.every(t=>!i(e,t)))}function Wi(e,t){return t=Math.max(t,0),e.slice(t)}function Yi(e){return"symbol"==typeof e||e instanceof Symbol}function Ji(e){return Yi(e)?NaN:Number(e)}function Xi(e){if(!e)return 0===e?e:0;if((e=Ji(e))===1/0||e===-1/0){return(e<0?-1:1)*Number.MAX_VALUE}return e==e?e:0}function Qi(e){const t=Xi(e),i=t%1;return i?t-i:t}function Zi(e,t){return 0===(t=Math.min(-t,0))?e.slice():e.slice(0,t)}function en(e,t){for(let i=e.length-1;i>=0;i--)if(!t(e[i],i,e))return e.slice(0,i+1);return[]}function tn(e,t){const i=e.findIndex((e,i,n)=>!t(e,i,n));return-1===i?[]:e.slice(i)}function nn(e,t,i=1){if(null==t&&(t=e,e=0),!Number.isInteger(i)||0===i)throw new Error("The step value must be a non-zero integer.");const n=Math.max(Math.ceil((t-e)/i),0),o=new Array(n);for(let t=0;t<n;t++)o[t]=e+t*i;return o}function on(e,t=Ht){if(!e)return e;const i=Rt(e)||Array.isArray(e)?nn(0,e.length):Object.keys(e);for(let n=0;n<i.length;n++){const o=i[n];if(!1===t(e[o],o,e))break}return e}function sn(e,t,i=0,n=e.length){const o=e.length,s=Math.max(i>=0?i:o+i,0),r=Math.min(n>=0?n:o+n,o);for(let i=s;i<r;i++)e[i]=t;return e}function rn(e){return e[0]}function an(e,t){const i={};for(let n=0;n<e.length;n++){const o=e[n],s=t(o);Object.hasOwn(i,s)||(i[s]=[]),i[s].push(o)}return i}function ln(e){return e.slice(0,-1)}function cn(e,t){const i=new Set(t);return e.filter(e=>i.has(e))}function dn(e){return[...new Set(e)]}function hn(e,t,i){const n=[],o=new Set(t.map(i));for(let t=0;t<e.length;t++){const s=e[t],r=i(s);o.has(r)&&(n.push(s),o.delete(r))}return n}function un(e,t,i){return e.filter(e=>t.some(t=>i(e,t)))}const fn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pn=/^\w*$/;function gn(e,t){return!Array.isArray(e)&&(!("number"!=typeof e&&"boolean"!=typeof e&&null!=e&&!Yi(e))||("string"==typeof e&&(pn.test(e)||!fn.test(e))||null!=t&&Object.hasOwn(t,e)))}function mn(e,t){const i=new Set(t);let n=0;for(let t=0;t<e.length;t++)i.has(e[t])||(Object.hasOwn(e,t)?e[n++]=e[t]:delete e[n++]);return e.length=n,e}function _n(e,t){const i=e.slice(),n=[];let o=0;for(let s=0;s<e.length;s++)t(e[s],s,i)?n.push(e[s]):Object.hasOwn(e,s)?e[o++]=e[s]:delete e[o++];return e.length=o,n}function bn(e){return e[Math.floor(Math.random()*e.length)]}function yn(e,t){if(null==t&&(t=e,e=0),e>=t)throw new Error("Invalid input: The maximum value must be greater than the minimum value.");return Math.random()*(t-e)+e}function vn(e,t){return Math.floor(yn(e,t))}function wn(e,t){if(t>e.length)throw new Error("Size must be less than or equal to the length of array.");const i=new Array(t),n=new Set;for(let o=e.length-t,s=0;o<e.length;o++,s++){let t=vn(0,o+1);n.has(t)&&(t=o),n.add(t),i[s]=e[t]}return i}function An(e){const t=e.slice();for(let e=t.length-1;e>=1;e--){const i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}function En(e){return null==e}function Cn(e){return e}function On(e){return e.slice(1)}function Sn(e,t,i){return t=i||void 0===t?1:Qi(t),e.slice(0,t)}function xn(e,t,i){return(t=i||void 0===t?1:Qi(t))<=0||0===e.length?[]:e.slice(-t)}function In(e,t){const i=new Map;for(let n=0;n<e.length;n++){const o=e[n],s=t(o);i.has(s)||i.set(s,o)}return Array.from(i.values())}function kn(e,t){const i=[];for(let n=0;n<e.length;n++){const o=e[n],s=i.every(e=>!t(e,o));s&&i.push(o)}return i}function Nn(e){let t=0;for(let i=0;i<e.length;i++)e[i].length>t&&(t=e[i].length);const i=new Array(t);for(let n=0;n<t;n++){i[n]=new Array(e.length);for(let t=0;t<e.length;t++)i[n][t]=e[t][n]}return i}function Tn(e,...t){return Vi(e,t)}function $n(e,t,i=1,{partialWindows:n=!1}={}){if(t<=0||!Number.isInteger(t))throw new Error("Size must be a positive integer.");if(i<=0||!Number.isInteger(i))throw new Error("Step must be a positive integer.");const o=[],s=n?e.length:e.length-t+1;for(let n=0;n<s;n+=i)o.push(e.slice(n,n+t));return o}function Ln(...e){let t=0;for(let i=0;i<e.length;i++)e[i].length>t&&(t=e[i].length);const i=e.length,n=Array(t);for(let o=0;o<t;++o){const t=Array(i);for(let n=0;n<i;++n)t[n]=e[n][o];n[o]=t}return n}const Dn=(e,t,i)=>{const n=e[t];Object.hasOwn(e,t)&&Xt(n,i)&&(void 0!==i||t in e)||(e[t]=i)};function Mn(e,t,i,n){if(null==e&&!Yt(e))return e;let o;o=gn(t,e)?[t]:Array.isArray(t)?t:zt(t);const s=i(qt(e,o));let r=e;for(let t=0;t<o.length&&null!=r;t++){const i=Ft(o[t]);if(Gt(i))continue;let a;if(t===o.length-1)a=s;else{const s=r[i],l=n?.(s,i,e);a=void 0!==l?l:Yt(s)?s:ji(o[t+1])?[]:{}}Dn(r,i,a),r=r[i]}return e}function Pn(e,t,i){return Mn(e,t,()=>i,()=>{})}function Rn(e,t){if(0===e.length)return;let i=e[0],n=t(i);for(let o=1;o<e.length;o++){const s=e[o],r=t(s);r>n&&(n=r,i=s)}return i}function Bn(e,t){if(0===e.length)return;let i=e[0],n=t(i);for(let o=1;o<e.length;o++){const s=e[o],r=t(s);r<n&&(n=r,i=s)}return i}function jn(e){const t=e?.constructor;return e===("function"==typeof t?t.prototype:Object.prototype)}function Hn(e){return ki(e)}function Gn(e,t){return Object.keys(e).find(i=>t(e[i],i,e))}function Un(e,t){if(!Yt(e))return;return Gn(e,Fi(t??Cn))}function Fn(e,...t){if(En(e))return{};const i={};for(let n=0;n<t.length;n++){let o=t[n];switch(typeof o){case"object":Array.isArray(o)||(o=Rt(o)?Array.from(o):[o]);break;case"string":case"symbol":case"number":o=[o]}for(const t of o){const n=qt(e,t);(void 0!==n||Gi(e,t))&&("string"==typeof t&&Object.hasOwn(e,t)?i[t]=n:Pn(i,t,n))}}return i}function Vn(e){if(null==e)return!0;if(Rt(e))return!!("function"==typeof e.splice||"string"==typeof e||"undefined"!=typeof Buffer&&Buffer.isBuffer(e)||Hn(e)||Hi(e))&&0===e.length;if("object"==typeof e){if(e instanceof Map||e instanceof Set)return 0===e.size;const t=Object.keys(e);return jn(e)?0===t.filter(e=>"constructor"!==e).length:0===t.length}return!0}function zn(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function qn(e){return zn(Vt(e))}const Kn=["tap_action","hold_action","double_tap_action"],Wn=e=>Fn(e,["entity",...Kn]);function Yn(e,t){const i=new Xn(e,t,Jn);e.addEventListener("pointerdown",i.handleStart.bind(i)),e.addEventListener("pointerup",i.handleEnd.bind(i)),e.addEventListener("contextmenu",e=>e.preventDefault()),e.addEventListener("click",e=>{e.preventDefault(),e.stopImmediatePropagation()}),e.addEventListener("keydown",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),i.handleStart(e),i.handleEnd(e))}),e.style.cursor="pointer"}function Jn(e,t,i){setTimeout(()=>{const n=new CustomEvent("hass-action",{detail:{action:i,config:t},bubbles:!0,composed:!0});e.dispatchEvent(n)},1)}class Xn{constructor(e,t,i){this.startX=null,this.startY=null,this.element=e,this.config=t,this.sendAction=i,this.tapTimeout=null,this.lastTap=0,this.startTime=null,this.isSwiping=!1}handleEnd(e){if(null===this.startTime)return;const t=Date.now(),i=t-this.startTime,n=Math.abs((e.clientX||0)-(this.startX||0)),o=Math.abs((e.clientY||0)-(this.startY||0));if(n>20||o>20)return this.isSwiping=!0,void(this.startTime=null);const s=t-this.lastTap;this.lastTap=t,this.startTime=null,i>500?this.sendAction(this.element,this.config,"hold"):s<300?this.sendAction(this.element,this.config,"double_tap"):this.tapTimeout=window.setTimeout(()=>{this.sendAction(this.element,this.config,"tap")},300)}handleStart(e){e.preventDefault(),this.startTime=Date.now(),this.startX=e.clientX,this.startY=e.clientY,this.isSwiping=!1,clearTimeout(this.tapTimeout)}}const Qn="home",Zn=e=>Boolean(e.panels.lovelace?.config),eo=()=>{const e=window.localStorage.getItem("defaultPanel");return e?JSON.parse(e):null},to=e=>{const t=e.userData?.default_panel||e.systemData?.default_panel||eo()||Qn;return"lovelace"!==t||Zn(e)?t:Qn},io=e=>{const t=to(e);return(t?e.panels[t]:void 0)??e.panels[Qn]},no=e=>"profile"===e.url_path?"panel.profile":`panel.${e.title}`,oo=(e,t)=>{const i=no(t);return e.localize(i)||t.title||void 0},so=(e,t)=>{if(!e.panels)return;const i=Object.values(e.panels).find(e=>e.url_path===t);return i?oo(e,i):void 0},ro=e=>{if(!e.icon)switch(e.component_name){case"profile":return"mdi:account";case"lovelace":return"mdi:view-dashboard"}return e.icon||void 0},ao=["profile","config"],lo=["developer-tools"],co=["home","light","climate","security"],ho=e=>co.includes(e),uo=e=>e.startsWith("/"),fo=e=>({action:"navigate",navigation_path:e.url_path}),po=(e,i,o=!1)=>{let s=i.title,r=i.icon,a=i.url_path;const l=Wn(i),c=Dt(l),d=Kn.find(e=>"url"===l[e]?.action&&uo(l[e].url_path??""));c&&d&&(l[d]=fo(l[d])),o&&(s=oo(e,i)||s,r=i.icon,a=`/${i.url_path}`);const h=document.createElement(t.ITEM);h.setAttribute(n.TYPE,"link"),h.href=c?"#":a??"#",h.target=i.target??"",h.setAttribute(n.DATA_PANEL,o?i.url_path:s),h.setAttribute(n.NEW_ITEM,""),h.setAttribute("has-action",c.toString()),h.tabIndex=-1;const u=document.createElement("span");u.classList.add("item-text"),u.setAttribute("slot","headline"),u.innerText=s??"unknown",h.appendChild(u);const f=document.createElement(t.HA_ICON);return f.setAttribute(n.SLOT,"start"),f.icon=r??"mdi:bookmark-outline",h.prepend(f),c&&Yn(h,l),h},go=()=>{const e=document.createElement("span");return e.classList.add(i.BADGE),e.classList.add(i.NO_VISIBLE),e.setAttribute(n.SLOT,"end"),e},mo=()=>{const e=document.createElement("ha-icon");return e.classList.add(i.BADGE),e.classList.add(i.NO_VISIBLE),e.setAttribute(n.SLOT,"end"),e};var _o=Object.freeze({__proto__:null,BUILT_IN_PANELS:co,DEFAULT_PANEL:Qn,FIXED_PANELS:ao,SHOW_AFTER_SPACER_PANELS:lo,computeBadge:go,computeNewItem:po,computeNotifyIcon:mo,getDefaultPanel:io,getDefaultPanelUrlPath:to,getLegacyDefaultPanelUrlPath:eo,getPanelIcon:ro,getPanelNameTranslationKey:no,getPanelTitle:oo,getPanelTitleFromUrlPath:so,hasLegacyOverviewPanel:Zn,isBuiltInPanel:ho});const bo=e=>window.localStorage.getItem(e),yo=(e,t)=>window.localStorage.setItem(e,JSON.stringify(t)),vo=e=>window.localStorage.removeItem(e),wo=()=>{const e=window.localStorage.getItem(w.HIDDEN_PANELS);return e&&"null"!==e&&"undefined"!==e?JSON.parse(e):[]},Ao=()=>{const e=window.localStorage.getItem(w.USE_CONFIG_FILE)||'""';return"true"===JSON.parse(e)},Eo=()=>{const e=window.localStorage.getItem(w.UI_CONFIG);if(e&&0!==JSON.parse(e).length)return JSON.parse(e)},Co=()=>{const e=window.localStorage.getItem(w.PANEL_ORDER);return!e||0===JSON.parse(e).length},Oo={energy:1,map:2,logbook:3,history:4,"developer-tools":9,config:11},So=(e,t,i,n,o)=>{const s=e.indexOf(i.url_path),r=e.indexOf(n.url_path);return s!==r?s<r?1:-1:xo(t,i,n,o)},xo=(e,t,i,n)=>{const o="lovelace"===t.component_name,s="lovelace"===i.component_name;if(t.url_path===e)return-1;if(i.url_path===e)return 1;if(o&&s)return It(t.title,i.title,n);if(o&&!s)return-1;if(s)return 1;const r=t.url_path in Oo,a=i.url_path in Oo;return r&&a?Oo[t.url_path]-Oo[i.url_path]:r?-1:a?1:It(t.title,i.title,n)},Io=Ot((e,t,i,n,o)=>{if(!e)return[[],[]];const s=[],r=[];Object.values(e).filter(e=>!ao.includes(e.url_path)&&e.title&&(!("show_in_sidebar"in e)||e.show_in_sidebar)).forEach(e=>{(e.url_path===t||e.title&&!n.includes(e.url_path)&&(!1!==e.default_visible||i.includes(e.url_path)))&&(lo.includes(e.url_path)?r:s).push(e)});const a=[...i].reverse();return s.sort((e,i)=>So(a,t,e,i,o.language)),r.sort((e,i)=>So(a,t,e,i,o.language)),[s,r]}),ko=(e,t,i)=>{if(!e)return{beforeSpacer:[],builtInDefaultNotVisible:[]};const n=[],o=[];Object.values(e).filter(e=>![...ao].includes(e.url_path)).forEach(e=>{(e.url_path===t||e.title&&(!1!==e.default_visible||co.includes(e.url_path)))&&(co.includes(e.url_path)?o:n).push(e)});const s=[...Object.keys(e)].reverse();return n.sort((e,n)=>So(s,t,e,n,i.language)),{beforeSpacer:n,builtInDefaultNotVisible:o}},No=async(e,t)=>e?Object.values(e).filter(e=>co.includes(e.url_path)&&e.url_path!==t):[],To=async e=>{let t,i;try{const n=await kt(e.connection,"sidebar");if(t=n?.panelOrder,i=n?.hiddenPanels,!t){const e=bo(w.PANEL_ORDER);t=JSON.parse(e||"null")||[]}if(!i){const e=bo(w.HIDDEN_PANELS);i=JSON.parse(e||"null")||[]}}catch(e){}return{panelOrder:t,hiddenPanels:i}},$o=async e=>{const{panelOrder:t,hiddenPanels:i}=await To(e),n=to(e),[o]=Io(e.panels,n,t||[],i||[],e.locale),s=e.panels?Object.values(e.panels):[],r=new Set(t||[]),a=new Set(i||[]);for(const e of s)!1!==e.default_visible||r.has(e.url_path)||a.has(e.url_path)||a.add(e.url_path);a.has(n)&&a.delete(n);const l=Array.from(a),c=[...o,...s.filter(e=>l.includes(e.url_path))].map(e=>e.url_path);return{order:c,hidden:l}},Lo=e=>{const t=to(e);return Io(e.panels,t,[],[],e.locale)},Do=e=>{const t=e.panels;if(!t)return[];const i=Object.values(t).filter(e=>!ao.includes(e.url_path)&&(!e.title||"show_in_sidebar"in e&&!e.show_in_sidebar&&e.title)).map(e=>e.url_path);return i},Mo=e=>{if(!e)return[];const t=Object.values(e).filter(e=>!(ao.includes(e.url_path)||e.title&&!1!==e.show_in_sidebar)).map(e=>e.url_path);return t};var Po=Object.freeze({__proto__:null,computeInitialPanelOrder:ko,computePanels:Io,getBasePanelData:To,getBuiltInPanels:No,getHiddenBuiltInPanels:Do,getPanelItems:$o,getPanelsFromHass:Lo,getPanelsNotShownInSidebar:Mo});const Ro=(e,t)=>e.filter(e=>!t.has(e));function Bo(e,t){const i=t instanceof Set?t:new Set(t),n={};return on(e,(e,t)=>{Array.isArray(e)?n[t]=Ro(e,i):(n[t]={},on(e,(e,o)=>{n[t][o]=Ro(e,i)}))}),n}const jo={warn:["color: #ff9800","font-weight: bold"].join(";"),info:["color: #8bc34a","font-weight: bold"].join(";"),debug:["color: #2196f3","font-weight: bold"].join(";")};function Ho(e,...t){Fo(e,jo.info,console.info,...t)}function Go(e,...t){Fo(e,jo.warn,console.warn,...t)}function Uo(e,...t){Fo(e,jo.debug,console.log,...t)}function Fo(e,t,i,...n){const[o,s]=Vo(e,t);n.length>0?i(o,s,...n):i(o,s)}const Vo=(e,t)=>[`%c${e}`,t],zo=e=>{Ho("sidebar-organizer:",[O.FRONTEND_MODULE,e?`hacs path: ${e}`:"",O.INSTALLATION_LINK].filter(e=>e).join("\n"))},qo=["duplicateItems","invalidItems","noTitleItems","hasDefaultInGroupsOrBottom"],Ko={duplicateItems:"Duplicated items",invalidItems:"Items not exist",noTitleItems:"Items not showing in sidebar",hasDefaultInGroupsOrBottom:"Default panel included"},Wo=(e,t)=>{const i=t||wo();if(!i.length)return e;const n=Bo(Fn(e,[x.CUSTOM,x.BOTTOM,x.BOTTOM_GRID]),i);let o=[...e.default_collapsed||[]];o=o.filter(e=>n.custom_groups?.[e]);return{...e,...n,...o.length>0&&{default_collapsed:o},hidden_items:i}},Yo=e=>{const t=Array.from(e.new_items||[]).map(e=>e.title);return[...Object.values(e.custom_groups||{}).flat(),...e.bottom_items||[],...e.bottom_grid_items||[],...e.hidden_items||[]].filter(e=>!t.includes(e))},Jo=(e,t,i)=>{let n=[];const o={};return[...e,...t,...i].forEach(e=>{o[e]=(o[e]||0)+1}),n=Object.keys(o).filter(e=>o[e]>1),n},Xo=(e,t,i,n)=>Boolean(e&&(t.includes(e)||i.includes(e)||n.includes(e))),Qo=(e,t,i=!1)=>{let n=[...Object.values(e.custom_groups||{}).flat(),...e.bottom_items||[],...e.bottom_grid_items||[],...e.hidden_items||[]];if(0===n.length)return!i||{valid:!0,config:e};const o=Array.from(e.new_items||[]).map(e=>e.title);n=n.filter(e=>!o.includes(e));const s=io(t).url_path,r=Object.values(e.custom_groups||{}).flat(),a=e.bottom_items||[],l=e.bottom_grid_items||[],c=Xo(s,r,a,l),d=Jo(r,a,l),h=Mo(t.panels)||[],u=Object.keys(t.panels),f=n.filter(e=>!u.includes(e)),p=n.filter(e=>h.includes(e)),g=0===d.length&&0===f.length&&0===p.length&&!c,_={valid:g,config:e,duplicateItems:d,invalidItems:f,noTitleItems:p,hasDefaultInGroupsOrBottom:c};if(!g){const e=`${m}: Config is not valid.`;console.groupCollapsed(`%c${e}`,"color: #ff9800; font-weight: bold;"),qo.forEach(e=>{const t=_[e];t&&t.length>0&&Uo(`${Ko[e]}:`,t)}),c&&Uo(`Default panel "${s}" should not be included in custom groups or bottom items.`),console.groupEnd()}return i?_:g},Zo=(e,t)=>{const i=Object.keys(t.panels);let n=Yo(e);const o=io(t).url_path,s=Object.values(e.custom_groups||{}).flat(),r=e.bottom_items||[],a=e.bottom_grid_items||[],l=Jo(s,r,a),c=Xo(o,s,r,a),d=Mo(t.panels)||[],h=n.filter(e=>!i.includes(e)),u=n.filter(e=>d.includes(e)),f=new Set([...h,...u]);c&&o&&f.add(o);const p={duplicateItems:l,diffItems:h,noTitleItems:u,invalidItems:Array.from(f),allItems:n,hasDefaultInGroupsOrBottom:c},g=Bo(Fn(e,[x.CUSTOM,x.BOTTOM,x.BOTTOM_GRID,x.HIDDEN]),f);let m=g.custom_groups||{};l.length>0&&(m=Bo({custom_groups:m},[...l]).custom_groups||{});const _={...e,...g,custom_groups:m};return console.debug("Config validation result:",p,{originalConfig:e,correctedConfig:_}),_},es=e=>{if(Ao())return;const t=Eo();JSON.stringify(t)!==JSON.stringify(e)&&yo(w.UI_CONFIG,e)},ts=Symbol.for("yaml.alias"),is=Symbol.for("yaml.document"),ns=Symbol.for("yaml.map"),os=Symbol.for("yaml.pair"),ss=Symbol.for("yaml.scalar"),rs=Symbol.for("yaml.seq"),as=Symbol.for("yaml.node.type"),ls=e=>!!e&&"object"==typeof e&&e[as]===ts,cs=e=>!!e&&"object"==typeof e&&e[as]===is,ds=e=>!!e&&"object"==typeof e&&e[as]===ns,hs=e=>!!e&&"object"==typeof e&&e[as]===os,us=e=>!!e&&"object"==typeof e&&e[as]===ss,fs=e=>!!e&&"object"==typeof e&&e[as]===rs;function ps(e){if(e&&"object"==typeof e)switch(e[as]){case ns:case rs:return!0}return!1}function gs(e){if(e&&"object"==typeof e)switch(e[as]){case ts:case ns:case ss:case rs:return!0}return!1}const ms=e=>(us(e)||ps(e))&&!!e.anchor,_s=Symbol("break visit"),bs=Symbol("skip children"),ys=Symbol("remove node");function vs(e,t){const i=Cs(t);if(cs(e)){ws(null,e.contents,i,Object.freeze([e]))===ys&&(e.contents=null)}else ws(null,e,i,Object.freeze([]))}function ws(e,t,i,n){const o=Os(e,t,i,n);if(gs(o)||hs(o))return Ss(e,n,o),ws(e,o,i,n);if("symbol"!=typeof o)if(ps(t)){n=Object.freeze(n.concat(t));for(let e=0;e<t.items.length;++e){const o=ws(e,t.items[e],i,n);if("number"==typeof o)e=o-1;else{if(o===_s)return _s;o===ys&&(t.items.splice(e,1),e-=1)}}}else if(hs(t)){n=Object.freeze(n.concat(t));const e=ws("key",t.key,i,n);if(e===_s)return _s;e===ys&&(t.key=null);const o=ws("value",t.value,i,n);if(o===_s)return _s;o===ys&&(t.value=null)}return o}async function As(e,t){const i=Cs(t);if(cs(e)){await Es(null,e.contents,i,Object.freeze([e]))===ys&&(e.contents=null)}else await Es(null,e,i,Object.freeze([]))}async function Es(e,t,i,n){const o=await Os(e,t,i,n);if(gs(o)||hs(o))return Ss(e,n,o),Es(e,o,i,n);if("symbol"!=typeof o)if(ps(t)){n=Object.freeze(n.concat(t));for(let e=0;e<t.items.length;++e){const o=await Es(e,t.items[e],i,n);if("number"==typeof o)e=o-1;else{if(o===_s)return _s;o===ys&&(t.items.splice(e,1),e-=1)}}}else if(hs(t)){n=Object.freeze(n.concat(t));const e=await Es("key",t.key,i,n);if(e===_s)return _s;e===ys&&(t.key=null);const o=await Es("value",t.value,i,n);if(o===_s)return _s;o===ys&&(t.value=null)}return o}function Cs(e){return"object"==typeof e&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function Os(e,t,i,n){return"function"==typeof i?i(e,t,n):ds(t)?i.Map?.(e,t,n):fs(t)?i.Seq?.(e,t,n):hs(t)?i.Pair?.(e,t,n):us(t)?i.Scalar?.(e,t,n):ls(t)?i.Alias?.(e,t,n):void 0}function Ss(e,t,i){const n=t[t.length-1];if(ps(n))n.items[e]=i;else if(hs(n))"key"===e?n.key=i:n.value=i;else{if(!cs(n)){const e=ls(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${e} parent`)}n.contents=i}}vs.BREAK=_s,vs.SKIP=bs,vs.REMOVE=ys,As.BREAK=_s,As.SKIP=bs,As.REMOVE=ys;const xs={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Is=e=>e.replace(/[!,[\]{}]/g,e=>xs[e]);class ks{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},ks.defaultYaml,e),this.tags=Object.assign({},ks.defaultTags,t)}clone(){const e=new ks(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new ks(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:ks.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},ks.defaultTags)}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:ks.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},ks.defaultTags),this.atNextDocument=!1);const i=e.trim().split(/[ \t]+/),n=i.shift();switch(n){case"%TAG":{if(2!==i.length&&(t(0,"%TAG directive should contain exactly two parts"),i.length<2))return!1;const[e,n]=i;return this.tags[e]=n,!0}case"%YAML":{if(this.yaml.explicit=!0,1!==i.length)return t(0,"%YAML directive should contain exactly one part"),!1;const[e]=i;if("1.1"===e||"1.2"===e)return this.yaml.version=e,!0;return t(6,`Unsupported YAML version ${e}`,/^\d+\.\d+$/.test(e)),!1}default:return t(0,`Unknown directive ${n}`,!0),!1}}tagName(e,t){if("!"===e)return"!";if("!"!==e[0])return t(`Not a valid tag: ${e}`),null;if("<"===e[1]){const i=e.slice(2,-1);return"!"===i||"!!"===i?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(">"!==e[e.length-1]&&t("Verbatim tags must end with a >"),i)}const[,i,n]=e.match(/^(.*!)([^!]*)$/s);n||t(`The ${e} tag has no suffix`);const o=this.tags[i];if(o)try{return o+decodeURIComponent(n)}catch(e){return t(String(e)),null}return"!"===i?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,i]of Object.entries(this.tags))if(e.startsWith(i))return t+Is(e.substring(i.length));return"!"===e[0]?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],i=Object.entries(this.tags);let n;if(e&&i.length>0&&gs(e.contents)){const t={};vs(e.contents,(e,i)=>{gs(i)&&i.tag&&(t[i.tag]=!0)}),n=Object.keys(t)}else n=[];for(const[o,s]of i)"!!"===o&&"tag:yaml.org,2002:"===s||e&&!n.some(e=>e.startsWith(s))||t.push(`%TAG ${o} ${s}`);return t.join("\n")}}function Ns(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const t=JSON.stringify(e);throw new Error(`Anchor must not contain whitespace or control characters: ${t}`)}return!0}function Ts(e){const t=new Set;return vs(e,{Value(e,i){i.anchor&&t.add(i.anchor)}}),t}function $s(e,t){for(let i=1;;++i){const n=`${e}${i}`;if(!t.has(n))return n}}function Ls(e,t){const i=[],n=new Map;let o=null;return{onAnchor:n=>{i.push(n),o??(o=Ts(e));const s=$s(t,o);return o.add(s),s},setAnchors:()=>{for(const e of i){const t=n.get(e);if("object"!=typeof t||!t.anchor||!us(t.node)&&!ps(t.node)){const t=new Error("Failed to resolve repeated object (this should not happen)");throw t.source=e,t}t.node.anchor=t.anchor}},sourceObjects:n}}function Ds(e,t,i,n){if(n&&"object"==typeof n)if(Array.isArray(n))for(let t=0,i=n.length;t<i;++t){const i=n[t],o=Ds(e,n,String(t),i);void 0===o?delete n[t]:o!==i&&(n[t]=o)}else if(n instanceof Map)for(const t of Array.from(n.keys())){const i=n.get(t),o=Ds(e,n,t,i);void 0===o?n.delete(t):o!==i&&n.set(t,o)}else if(n instanceof Set)for(const t of Array.from(n)){const i=Ds(e,n,t,t);void 0===i?n.delete(t):i!==t&&(n.delete(t),n.add(i))}else for(const[t,i]of Object.entries(n)){const o=Ds(e,n,t,i);void 0===o?delete n[t]:o!==i&&(n[t]=o)}return e.call(t,i,n)}function Ms(e,t,i){if(Array.isArray(e))return e.map((e,t)=>Ms(e,String(t),i));if(e&&"function"==typeof e.toJSON){if(!i||!ms(e))return e.toJSON(t,i);const n={aliasCount:0,count:1,res:void 0};i.anchors.set(e,n),i.onCreate=e=>{n.res=e,delete i.onCreate};const o=e.toJSON(t,i);return i.onCreate&&i.onCreate(o),o}return"bigint"!=typeof e||i?.keep?e:Number(e)}ks.defaultYaml={explicit:!1,version:"1.2"},ks.defaultTags={"!!":"tag:yaml.org,2002:"};class Ps{constructor(e){Object.defineProperty(this,as,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:i,onAnchor:n,reviver:o}={}){if(!cs(e))throw new TypeError("A document argument is required");const s={anchors:new Map,doc:e,keep:!0,mapAsMap:!0===t,mapKeyWarned:!1,maxAliasCount:"number"==typeof i?i:100},r=Ms(this,"",s);if("function"==typeof n)for(const{count:e,res:t}of s.anchors.values())n(t,e);return"function"==typeof o?Ds(o,{"":r},"",r):r}}class Rs extends Ps{constructor(e){super(ts),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){let i,n;t?.aliasResolveCache?i=t.aliasResolveCache:(i=[],vs(e,{Node:(e,t)=>{(ls(t)||ms(t))&&i.push(t)}}),t&&(t.aliasResolveCache=i));for(const e of i){if(e===this)break;e.anchor===this.source&&(n=e)}return n}toJSON(e,t){if(!t)return{source:this.source};const{anchors:i,doc:n,maxAliasCount:o}=t,s=this.resolve(n,t);if(!s){const e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(e)}let r=i.get(s);if(r||(Ms(s,null,t),r=i.get(s)),void 0===r?.res){throw new ReferenceError("This should not happen: Alias anchor was not resolved?")}if(o>=0&&(r.count+=1,0===r.aliasCount&&(r.aliasCount=Bs(n,s,i)),r.count*r.aliasCount>o)){throw new ReferenceError("Excessive alias count indicates a resource exhaustion attack")}return r.res}toString(e,t,i){const n=`*${this.source}`;if(e){if(Ns(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(e)}if(e.implicitKey)return`${n} `}return n}}function Bs(e,t,i){if(ls(t)){const n=t.resolve(e),o=i&&n&&i.get(n);return o?o.count*o.aliasCount:0}if(ps(t)){let n=0;for(const o of t.items){const t=Bs(e,o,i);t>n&&(n=t)}return n}if(hs(t)){const n=Bs(e,t.key,i),o=Bs(e,t.value,i);return Math.max(n,o)}return 1}const js=e=>!e||"function"!=typeof e&&"object"!=typeof e;class Hs extends Ps{constructor(e){super(ss),this.value=e}toJSON(e,t){return t?.keep?this.value:Ms(this.value,e,t)}toString(){return String(this.value)}}Hs.BLOCK_FOLDED="BLOCK_FOLDED",Hs.BLOCK_LITERAL="BLOCK_LITERAL",Hs.PLAIN="PLAIN",Hs.QUOTE_DOUBLE="QUOTE_DOUBLE",Hs.QUOTE_SINGLE="QUOTE_SINGLE";const Gs="tag:yaml.org,2002:";function Us(e,t,i){if(t){const e=i.filter(e=>e.tag===t),n=e.find(e=>!e.format)??e[0];if(!n)throw new Error(`Tag ${t} not found`);return n}return i.find(t=>t.identify?.(e)&&!t.format)}function Fs(e,t,i){if(cs(e)&&(e=e.contents),gs(e))return e;if(hs(e)){const t=i.schema[ns].createNode?.(i.schema,null,i);return t.items.push(e),t}(e instanceof String||e instanceof Number||e instanceof Boolean||"undefined"!=typeof BigInt&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:n,onAnchor:o,onTagObj:s,schema:r,sourceObjects:a}=i;let l;if(n&&e&&"object"==typeof e){if(l=a.get(e),l)return l.anchor??(l.anchor=o(e)),new Rs(l.anchor);l={anchor:null,node:null},a.set(e,l)}t?.startsWith("!!")&&(t=Gs+t.slice(2));let c=Us(e,t,r.tags);if(!c){if(e&&"function"==typeof e.toJSON&&(e=e.toJSON()),!e||"object"!=typeof e){const t=new Hs(e);return l&&(l.node=t),t}c=e instanceof Map?r[ns]:Symbol.iterator in Object(e)?r[rs]:r[ns]}s&&(s(c),delete i.onTagObj);const d=c?.createNode?c.createNode(i.schema,e,i):"function"==typeof c?.nodeClass?.from?c.nodeClass.from(i.schema,e,i):new Hs(e);return t?d.tag=t:c.default||(d.tag=c.tag),l&&(l.node=d),d}function Vs(e,t,i){let n=i;for(let e=t.length-1;e>=0;--e){const i=t[e];if("number"==typeof i&&Number.isInteger(i)&&i>=0){const e=[];e[i]=n,n=e}else n=new Map([[i,n]])}return Fs(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const zs=e=>null==e||"object"==typeof e&&!!e[Symbol.iterator]().next().done;class qs extends Ps{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(t=>gs(t)||hs(t)?t.clone(e):t),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(zs(e))this.add(t);else{const[i,...n]=e,o=this.get(i,!0);if(ps(o))o.addIn(n,t);else{if(void 0!==o||!this.schema)throw new Error(`Expected YAML collection at ${i}. Remaining path: ${n}`);this.set(i,Vs(this.schema,n,t))}}}deleteIn(e){const[t,...i]=e;if(0===i.length)return this.delete(t);const n=this.get(t,!0);if(ps(n))return n.deleteIn(i);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${i}`)}getIn(e,t){const[i,...n]=e,o=this.get(i,!0);return 0===n.length?!t&&us(o)?o.value:o:ps(o)?o.getIn(n,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!hs(t))return!1;const i=t.value;return null==i||e&&us(i)&&null==i.value&&!i.commentBefore&&!i.comment&&!i.tag})}hasIn(e){const[t,...i]=e;if(0===i.length)return this.has(t);const n=this.get(t,!0);return!!ps(n)&&n.hasIn(i)}setIn(e,t){const[i,...n]=e;if(0===n.length)this.set(i,t);else{const e=this.get(i,!0);if(ps(e))e.setIn(n,t);else{if(void 0!==e||!this.schema)throw new Error(`Expected YAML collection at ${i}. Remaining path: ${n}`);this.set(i,Vs(this.schema,n,t))}}}}const Ks=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function Ws(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const Ys=(e,t,i)=>e.endsWith("\n")?Ws(i,t):i.includes("\n")?"\n"+Ws(i,t):(e.endsWith(" ")?"":" ")+i,Js="flow",Xs="block",Qs="quoted";function Zs(e,t,i="flow",{indentAtStart:n,lineWidth:o=80,minContentWidth:s=20,onFold:r,onOverflow:a}={}){if(!o||o<0)return e;o<s&&(s=0);const l=Math.max(1+s,1+o-t.length);if(e.length<=l)return e;const c=[],d={};let h,u,f=o-t.length;"number"==typeof n&&(n>o-Math.max(2,s)?c.push(0):f=o-n);let p=!1,g=-1,m=-1,_=-1;i===Xs&&(g=er(e,g,t.length),-1!==g&&(f=g+l));for(let n;n=e[g+=1];){if(i===Qs&&"\\"===n){switch(m=g,e[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}_=g}if("\n"===n)i===Xs&&(g=er(e,g,t.length)),f=g+t.length+l,h=void 0;else{if(" "===n&&u&&" "!==u&&"\n"!==u&&"\t"!==u){const t=e[g+1];t&&" "!==t&&"\n"!==t&&"\t"!==t&&(h=g)}if(g>=f)if(h)c.push(h),f=h+l,h=void 0;else if(i===Qs){for(;" "===u||"\t"===u;)u=n,n=e[g+=1],p=!0;const t=g>_+1?g-2:m-1;if(d[t])return e;c.push(t),d[t]=!0,f=t+l,h=void 0}else p=!0}u=n}if(p&&a&&a(),0===c.length)return e;r&&r();let b=e.slice(0,c[0]);for(let n=0;n<c.length;++n){const o=c[n],s=c[n+1]||e.length;0===o?b=`\n${t}${e.slice(0,s)}`:(i===Qs&&d[o]&&(b+=`${e[o]}\\`),b+=`\n${t}${e.slice(o+1,s)}`)}return b}function er(e,t,i){let n=t,o=t+1,s=e[o];for(;" "===s||"\t"===s;)if(t<o+i)s=e[++t];else{do{s=e[++t]}while(s&&"\n"!==s);n=t,o=t+1,s=e[o]}return n}const tr=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),ir=e=>/^(%|---|\.\.\.)/m.test(e);function nr(e,t,i){if(!t||t<0)return!1;const n=t-i,o=e.length;if(o<=n)return!1;for(let t=0,i=0;t<o;++t)if("\n"===e[t]){if(t-i>n)return!0;if(i=t+1,o-i<=n)return!1}return!0}function or(e,t){const i=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return i;const{implicitKey:n}=t,o=t.options.doubleQuotedMinMultiLineLength,s=t.indent||(ir(e)?"  ":"");let r="",a=0;for(let e=0,t=i[e];t;t=i[++e])if(" "===t&&"\\"===i[e+1]&&"n"===i[e+2]&&(r+=i.slice(a,e)+"\\ ",e+=1,a=e,t="\\"),"\\"===t)switch(i[e+1]){case"u":{r+=i.slice(a,e);const t=i.substr(e+2,4);switch(t){case"0000":r+="\\0";break;case"0007":r+="\\a";break;case"000b":r+="\\v";break;case"001b":r+="\\e";break;case"0085":r+="\\N";break;case"00a0":r+="\\_";break;case"2028":r+="\\L";break;case"2029":r+="\\P";break;default:"00"===t.substr(0,2)?r+="\\x"+t.substr(2):r+=i.substr(e,6)}e+=5,a=e+1}break;case"n":if(n||'"'===i[e+2]||i.length<o)e+=1;else{for(r+=i.slice(a,e)+"\n\n";"\\"===i[e+2]&&"n"===i[e+3]&&'"'!==i[e+4];)r+="\n",e+=2;r+=s," "===i[e+2]&&(r+="\\"),e+=1,a=e+1}break;default:e+=1}return r=a?r+i.slice(a):i,n?r:Zs(r,s,Qs,tr(t,!1))}function sr(e,t){if(!1===t.options.singleQuote||t.implicitKey&&e.includes("\n")||/[ \t]\n|\n[ \t]/.test(e))return or(e,t);const i=t.indent||(ir(e)?"  ":""),n="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&\n${i}`)+"'";return t.implicitKey?n:Zs(n,i,Js,tr(t,!1))}function rr(e,t){const{singleQuote:i}=t.options;let n;if(!1===i)n=or;else{const t=e.includes('"'),o=e.includes("'");n=t&&!o?sr:o&&!t?or:i?sr:or}return n(e,t)}let ar;try{ar=new RegExp("(^|(?<!\n))\n+(?!\n|$)","g")}catch{ar=/\n+(?!\n|$)/g}function lr({comment:e,type:t,value:i},n,o,s){const{blockQuote:r,commentString:a,lineWidth:l}=n.options;if(!r||/\n[\t ]+$/.test(i))return rr(i,n);const c=n.indent||(n.forceBlockIndent||ir(i)?"  ":""),d="literal"===r||"folded"!==r&&t!==Hs.BLOCK_FOLDED&&(t===Hs.BLOCK_LITERAL||!nr(i,l,c.length));if(!i)return d?"|\n":">\n";let h,u;for(u=i.length;u>0;--u){const e=i[u-1];if("\n"!==e&&"\t"!==e&&" "!==e)break}let f=i.substring(u);const p=f.indexOf("\n");-1===p?h="-":i===f||p!==f.length-1?(h="+",s&&s()):h="",f&&(i=i.slice(0,-f.length),"\n"===f[f.length-1]&&(f=f.slice(0,-1)),f=f.replace(ar,`$&${c}`));let g,m=!1,_=-1;for(g=0;g<i.length;++g){const e=i[g];if(" "===e)m=!0;else{if("\n"!==e)break;_=g}}let b=i.substring(0,_<g?_+1:g);b&&(i=i.substring(b.length),b=b.replace(/\n+/g,`$&${c}`));let y=(m?c?"2":"1":"")+h;if(e&&(y+=" "+a(e.replace(/ ?[\r\n]+/g," ")),o&&o()),!d){const e=i.replace(/\n+/g,"\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let o=!1;const s=tr(n,!0);"folded"!==r&&t!==Hs.BLOCK_FOLDED&&(s.onOverflow=()=>{o=!0});const a=Zs(`${b}${e}${f}`,c,Xs,s);if(!o)return`>${y}\n${c}${a}`}return`|${y}\n${c}${b}${i=i.replace(/\n+/g,`$&${c}`)}${f}`}function cr(e,t,i,n){const{type:o,value:s}=e,{actualString:r,implicitKey:a,indent:l,indentStep:c,inFlow:d}=t;if(a&&s.includes("\n")||d&&/[[\]{},]/.test(s))return rr(s,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(s))return a||d||!s.includes("\n")?rr(s,t):lr(e,t,i,n);if(!a&&!d&&o!==Hs.PLAIN&&s.includes("\n"))return lr(e,t,i,n);if(ir(s)){if(""===l)return t.forceBlockIndent=!0,lr(e,t,i,n);if(a&&l===c)return rr(s,t)}const h=s.replace(/\n+/g,`$&\n${l}`);if(r){const e=e=>e.default&&"tag:yaml.org,2002:str"!==e.tag&&e.test?.test(h),{compat:i,tags:n}=t.doc.schema;if(n.some(e)||i?.some(e))return rr(s,t)}return a?h:Zs(h,l,Js,tr(t,!1))}function dr(e,t,i,n){const{implicitKey:o,inFlow:s}=t,r="string"==typeof e.value?e:Object.assign({},e,{value:String(e.value)});let{type:a}=e;a!==Hs.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(r.value)&&(a=Hs.QUOTE_DOUBLE);const l=e=>{switch(e){case Hs.BLOCK_FOLDED:case Hs.BLOCK_LITERAL:return o||s?rr(r.value,t):lr(r,t,i,n);case Hs.QUOTE_DOUBLE:return or(r.value,t);case Hs.QUOTE_SINGLE:return sr(r.value,t);case Hs.PLAIN:return cr(r,t,i,n);default:return null}};let c=l(a);if(null===c){const{defaultKeyType:e,defaultStringType:i}=t.options,n=o&&e||i;if(c=l(n),null===c)throw new Error(`Unsupported default string type ${n}`)}return c}function hr(e,t){const i=Object.assign({blockQuote:!0,commentString:Ks,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let n;switch(i.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:e,flowCollectionPadding:i.flowCollectionPadding?" ":"",indent:"",indentStep:"number"==typeof i.indent?" ".repeat(i.indent):"  ",inFlow:n,options:i}}function ur(e,t){if(t.tag){const i=e.filter(e=>e.tag===t.tag);if(i.length>0)return i.find(e=>e.format===t.format)??i[0]}let i,n;if(us(t)){n=t.value;let o=e.filter(e=>e.identify?.(n));if(o.length>1){const e=o.filter(e=>e.test);e.length>0&&(o=e)}i=o.find(e=>e.format===t.format)??o.find(e=>!e.format)}else n=t,i=e.find(e=>e.nodeClass&&n instanceof e.nodeClass);if(!i){throw new Error(`Tag not resolved for ${n?.constructor?.name??(null===n?"null":typeof n)} value`)}return i}function fr(e,t,{anchors:i,doc:n}){if(!n.directives)return"";const o=[],s=(us(e)||ps(e))&&e.anchor;s&&Ns(s)&&(i.add(s),o.push(`&${s}`));const r=e.tag??(t.default?null:t.tag);return r&&o.push(n.directives.tagString(r)),o.join(" ")}function pr(e,t,i,n){if(hs(e))return e.toString(t,i,n);if(ls(e)){if(t.doc.directives)return e.toString(t);if(t.resolvedAliases?.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let o;const s=gs(e)?e:t.doc.createNode(e,{onTagObj:e=>o=e});o??(o=ur(t.doc.schema.tags,s));const r=fr(s,o,t);r.length>0&&(t.indentAtStart=(t.indentAtStart??0)+r.length+1);const a="function"==typeof o.stringify?o.stringify(s,t,i,n):us(s)?dr(s,t,i,n):s.toString(t,i,n);return r?us(s)||"{"===a[0]||"["===a[0]?`${r} ${a}`:`${r}\n${t.indent}${a}`:a}function gr({key:e,value:t},i,n,o){const{allNullValues:s,doc:r,indent:a,indentStep:l,options:{commentString:c,indentSeq:d,simpleKeys:h}}=i;let u=gs(e)&&e.comment||null;if(h){if(u)throw new Error("With simple keys, key nodes cannot have comments");if(ps(e)||!gs(e)&&"object"==typeof e){throw new Error("With simple keys, collection cannot be used as a key value")}}let f=!h&&(!e||u&&null==t&&!i.inFlow||ps(e)||(us(e)?e.type===Hs.BLOCK_FOLDED||e.type===Hs.BLOCK_LITERAL:"object"==typeof e));i=Object.assign({},i,{allNullValues:!1,implicitKey:!f&&(h||!s),indent:a+l});let p,g,m,_=!1,b=!1,y=pr(e,i,()=>_=!0,()=>b=!0);if(!f&&!i.inFlow&&y.length>1024){if(h)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");f=!0}if(i.inFlow){if(s||null==t)return _&&n&&n(),""===y?"?":f?`? ${y}`:y}else if(s&&!h||null==t&&f)return y=`? ${y}`,u&&!_?y+=Ys(y,i.indent,c(u)):b&&o&&o(),y;_&&(u=null),f?(u&&(y+=Ys(y,i.indent,c(u))),y=`? ${y}\n${a}:`):(y=`${y}:`,u&&(y+=Ys(y,i.indent,c(u)))),gs(t)?(p=!!t.spaceBefore,g=t.commentBefore,m=t.comment):(p=!1,g=null,m=null,t&&"object"==typeof t&&(t=r.createNode(t))),i.implicitKey=!1,f||u||!us(t)||(i.indentAtStart=y.length+1),b=!1,d||!(l.length>=2)||i.inFlow||f||!fs(t)||t.flow||t.tag||t.anchor||(i.indent=i.indent.substring(2));let v=!1;const w=pr(t,i,()=>v=!0,()=>b=!0);let A=" ";if(u||p||g){if(A=p?"\n":"",g){A+=`\n${Ws(c(g),i.indent)}`}""!==w||i.inFlow?A+=`\n${i.indent}`:"\n"===A&&m&&(A="\n\n")}else if(!f&&ps(t)){const e=w[0],n=w.indexOf("\n"),o=-1!==n,s=i.inFlow??t.flow??0===t.items.length;if(o||!s){let t=!1;if(o&&("&"===e||"!"===e)){let i=w.indexOf(" ");"&"===e&&-1!==i&&i<n&&"!"===w[i+1]&&(i=w.indexOf(" ",i+1)),(-1===i||n<i)&&(t=!0)}t||(A=`\n${i.indent}`)}}else""!==w&&"\n"!==w[0]||(A="");return y+=A+w,i.inFlow?v&&n&&n():m&&!v?y+=Ys(y,i.indent,c(m)):b&&o&&o(),y}function mr(e,t){"debug"!==e&&"warn"!==e||console.warn(t)}const _r="<<",br={identify:e=>e===_r||"symbol"==typeof e&&e.description===_r,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new Hs(Symbol(_r)),{addToJSMap:vr}),stringify:()=>_r},yr=(e,t)=>(br.identify(t)||us(t)&&(!t.type||t.type===Hs.PLAIN)&&br.identify(t.value))&&e?.doc.schema.tags.some(e=>e.tag===br.tag&&e.default);function vr(e,t,i){if(i=e&&ls(i)?i.resolve(e.doc):i,fs(i))for(const n of i.items)wr(e,t,n);else if(Array.isArray(i))for(const n of i)wr(e,t,n);else wr(e,t,i)}function wr(e,t,i){const n=e&&ls(i)?i.resolve(e.doc):i;if(!ds(n))throw new Error("Merge sources must be maps or map aliases");const o=n.toJSON(null,e,Map);for(const[e,i]of o)t instanceof Map?t.has(e)||t.set(e,i):t instanceof Set?t.add(e):Object.prototype.hasOwnProperty.call(t,e)||Object.defineProperty(t,e,{value:i,writable:!0,enumerable:!0,configurable:!0});return t}function Ar(e,t,{key:i,value:n}){if(gs(i)&&i.addToJSMap)i.addToJSMap(e,t,n);else if(yr(e,i))vr(e,t,n);else{const o=Ms(i,"",e);if(t instanceof Map)t.set(o,Ms(n,o,e));else if(t instanceof Set)t.add(o);else{const s=Er(i,o,e),r=Ms(n,s,e);s in t?Object.defineProperty(t,s,{value:r,writable:!0,enumerable:!0,configurable:!0}):t[s]=r}}return t}function Er(e,t,i){if(null===t)return"";if("object"!=typeof t)return String(t);if(gs(e)&&i?.doc){const t=hr(i.doc,{});t.anchors=new Set;for(const e of i.anchors.keys())t.anchors.add(e.anchor);t.inFlow=!0,t.inStringifyKey=!0;const n=e.toString(t);if(!i.mapKeyWarned){let e=JSON.stringify(n);e.length>40&&(e=e.substring(0,36)+'..."'),mr(i.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`),i.mapKeyWarned=!0}return n}return JSON.stringify(t)}function Cr(e,t,i){const n=Fs(e,void 0,i),o=Fs(t,void 0,i);return new Or(n,o)}class Or{constructor(e,t=null){Object.defineProperty(this,as,{value:os}),this.key=e,this.value=t}clone(e){let{key:t,value:i}=this;return gs(t)&&(t=t.clone(e)),gs(i)&&(i=i.clone(e)),new Or(t,i)}toJSON(e,t){return Ar(t,t?.mapAsMap?new Map:{},this)}toString(e,t,i){return e?.doc?gr(this,e,t,i):JSON.stringify(this)}}function Sr(e,t,i){return(t.inFlow??e.flow?Ir:xr)(e,t,i)}function xr({comment:e,items:t},i,{blockItemPrefix:n,flowChars:o,itemIndent:s,onChompKeep:r,onComment:a}){const{indent:l,options:{commentString:c}}=i,d=Object.assign({},i,{indent:s,type:null});let h=!1;const u=[];for(let e=0;e<t.length;++e){const o=t[e];let r=null;if(gs(o))!h&&o.spaceBefore&&u.push(""),kr(i,u,o.commentBefore,h),o.comment&&(r=o.comment);else if(hs(o)){const e=gs(o.key)?o.key:null;e&&(!h&&e.spaceBefore&&u.push(""),kr(i,u,e.commentBefore,h))}h=!1;let a=pr(o,d,()=>r=null,()=>h=!0);r&&(a+=Ys(a,s,c(r))),h&&r&&(h=!1),u.push(n+a)}let f;if(0===u.length)f=o.start+o.end;else{f=u[0];for(let e=1;e<u.length;++e){const t=u[e];f+=t?`\n${l}${t}`:"\n"}}return e?(f+="\n"+Ws(c(e),l),a&&a()):h&&r&&r(),f}function Ir({items:e},t,{flowChars:i,itemIndent:n}){const{indent:o,indentStep:s,flowCollectionPadding:r,options:{commentString:a}}=t;n+=s;const l=Object.assign({},t,{indent:n,inFlow:!0,type:null});let c=!1,d=0;const h=[];for(let i=0;i<e.length;++i){const o=e[i];let s=null;if(gs(o))o.spaceBefore&&h.push(""),kr(t,h,o.commentBefore,!1),o.comment&&(s=o.comment);else if(hs(o)){const e=gs(o.key)?o.key:null;e&&(e.spaceBefore&&h.push(""),kr(t,h,e.commentBefore,!1),e.comment&&(c=!0));const i=gs(o.value)?o.value:null;i?(i.comment&&(s=i.comment),i.commentBefore&&(c=!0)):null==o.value&&e?.comment&&(s=e.comment)}s&&(c=!0);let r=pr(o,l,()=>s=null);i<e.length-1&&(r+=","),s&&(r+=Ys(r,n,a(s))),!c&&(h.length>d||r.includes("\n"))&&(c=!0),h.push(r),d=h.length}const{start:u,end:f}=i;if(0===h.length)return u+f;if(!c){const e=h.reduce((e,t)=>e+t.length+2,2);c=t.options.lineWidth>0&&e>t.options.lineWidth}if(c){let e=u;for(const t of h)e+=t?`\n${s}${o}${t}`:"\n";return`${e}\n${o}${f}`}return`${u}${r}${h.join(" ")}${r}${f}`}function kr({indent:e,options:{commentString:t}},i,n,o){if(n&&o&&(n=n.replace(/^\n+/,"")),n){const o=Ws(t(n),e);i.push(o.trimStart())}}function Nr(e,t){const i=us(t)?t.value:t;for(const n of e)if(hs(n)){if(n.key===t||n.key===i)return n;if(us(n.key)&&n.key.value===i)return n}}class Tr extends qs{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(ns,e),this.items=[]}static from(e,t,i){const{keepUndefined:n,replacer:o}=i,s=new this(e),r=(e,r)=>{if("function"==typeof o)r=o.call(t,e,r);else if(Array.isArray(o)&&!o.includes(e))return;(void 0!==r||n)&&s.items.push(Cr(e,r,i))};if(t instanceof Map)for(const[e,i]of t)r(e,i);else if(t&&"object"==typeof t)for(const e of Object.keys(t))r(e,t[e]);return"function"==typeof e.sortMapEntries&&s.items.sort(e.sortMapEntries),s}add(e,t){let i;i=hs(e)?e:e&&"object"==typeof e&&"key"in e?new Or(e.key,e.value):new Or(e,e?.value);const n=Nr(this.items,i.key),o=this.schema?.sortMapEntries;if(n){if(!t)throw new Error(`Key ${i.key} already set`);us(n.value)&&js(i.value)?n.value.value=i.value:n.value=i.value}else if(o){const e=this.items.findIndex(e=>o(i,e)<0);-1===e?this.items.push(i):this.items.splice(e,0,i)}else this.items.push(i)}delete(e){const t=Nr(this.items,e);if(!t)return!1;return this.items.splice(this.items.indexOf(t),1).length>0}get(e,t){const i=Nr(this.items,e),n=i?.value;return(!t&&us(n)?n.value:n)??void 0}has(e){return!!Nr(this.items,e)}set(e,t){this.add(new Or(e,t),!0)}toJSON(e,t,i){const n=i?new i:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(n);for(const e of this.items)Ar(t,n,e);return n}toString(e,t,i){if(!e)return JSON.stringify(this);for(const e of this.items)if(!hs(e))throw new Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Sr(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:i,onComment:t})}}const $r={collection:"map",default:!0,nodeClass:Tr,tag:"tag:yaml.org,2002:map",resolve:(e,t)=>(ds(e)||t("Expected a mapping for this tag"),e),createNode:(e,t,i)=>Tr.from(e,t,i)};class Lr extends qs{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(rs,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=Dr(e);if("number"!=typeof t)return!1;return this.items.splice(t,1).length>0}get(e,t){const i=Dr(e);if("number"!=typeof i)return;const n=this.items[i];return!t&&us(n)?n.value:n}has(e){const t=Dr(e);return"number"==typeof t&&t<this.items.length}set(e,t){const i=Dr(e);if("number"!=typeof i)throw new Error(`Expected a valid index, not ${e}.`);const n=this.items[i];us(n)&&js(t)?n.value=t:this.items[i]=t}toJSON(e,t){const i=[];t?.onCreate&&t.onCreate(i);let n=0;for(const e of this.items)i.push(Ms(e,String(n++),t));return i}toString(e,t,i){return e?Sr(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:i,onComment:t}):JSON.stringify(this)}static from(e,t,i){const{replacer:n}=i,o=new this(e);if(t&&Symbol.iterator in Object(t)){let e=0;for(let s of t){if("function"==typeof n){const i=t instanceof Set?s:String(e++);s=n.call(t,i,s)}o.items.push(Fs(s,void 0,i))}}return o}}function Dr(e){let t=us(e)?e.value:e;return t&&"string"==typeof t&&(t=Number(t)),"number"==typeof t&&Number.isInteger(t)&&t>=0?t:null}const Mr={collection:"seq",default:!0,nodeClass:Lr,tag:"tag:yaml.org,2002:seq",resolve:(e,t)=>(fs(e)||t("Expected a sequence for this tag"),e),createNode:(e,t,i)=>Lr.from(e,t,i)},Pr={identify:e=>"string"==typeof e,default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:(e,t,i,n)=>dr(e,t=Object.assign({actualString:!0},t),i,n)},Rr={identify:e=>null==e,createNode:()=>new Hs(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Hs(null),stringify:({source:e},t)=>"string"==typeof e&&Rr.test.test(e)?e:t.options.nullStr},Br={identify:e=>"boolean"==typeof e,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new Hs("t"===e[0]||"T"===e[0]),stringify({source:e,value:t},i){if(e&&Br.test.test(e)){if(t===("t"===e[0]||"T"===e[0]))return e}return t?i.options.trueStr:i.options.falseStr}};function jr({format:e,minFractionDigits:t,tag:i,value:n}){if("bigint"==typeof n)return String(n);const o="number"==typeof n?n:Number(n);if(!isFinite(o))return isNaN(o)?".nan":o<0?"-.inf":".inf";let s=Object.is(n,-0)?"-0":JSON.stringify(n);if(!e&&t&&(!i||"tag:yaml.org,2002:float"===i)&&/^\d/.test(s)){let e=s.indexOf(".");e<0&&(e=s.length,s+=".");let i=t-(s.length-e-1);for(;i-- >0;)s+="0"}return s}const Hr={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>"nan"===e.slice(-3).toLowerCase()?NaN:"-"===e[0]?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:jr},Gr={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():jr(e)}},Ur={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new Hs(parseFloat(e)),i=e.indexOf(".");return-1!==i&&"0"===e[e.length-1]&&(t.minFractionDigits=e.length-i-1),t},stringify:jr},Fr=e=>"bigint"==typeof e||Number.isInteger(e),Vr=(e,t,i,{intAsBigInt:n})=>n?BigInt(e):parseInt(e.substring(t),i);function zr(e,t,i){const{value:n}=e;return Fr(n)&&n>=0?i+n.toString(t):jr(e)}const qr={identify:e=>Fr(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,i)=>Vr(e,2,8,i),stringify:e=>zr(e,8,"0o")},Kr={identify:Fr,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,i)=>Vr(e,0,10,i),stringify:jr},Wr={identify:e=>Fr(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,i)=>Vr(e,2,16,i),stringify:e=>zr(e,16,"0x")},Yr=[$r,Mr,Pr,Rr,Br,qr,Kr,Wr,Hr,Gr,Ur];function Jr(e){return"bigint"==typeof e||Number.isInteger(e)}const Xr=({value:e})=>JSON.stringify(e),Qr=[{identify:e=>"string"==typeof e,default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:Xr},{identify:e=>null==e,createNode:()=>new Hs(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Xr},{identify:e=>"boolean"==typeof e,default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>"true"===e,stringify:Xr},{identify:Jr,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:i})=>i?BigInt(e):parseInt(e,10),stringify:({value:e})=>Jr(e)?e.toString():JSON.stringify(e)},{identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:Xr}],Zr={default:!0,tag:"",test:/^/,resolve:(e,t)=>(t(`Unresolved plain scalar ${JSON.stringify(e)}`),e)},ea=[$r,Mr].concat(Qr,Zr),ta={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if("function"==typeof atob){const t=atob(e.replace(/[\n\r]/g,"")),i=new Uint8Array(t.length);for(let e=0;e<t.length;++e)i[e]=t.charCodeAt(e);return i}return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:i},n,o,s){if(!i)return"";const r=i;let a;if("function"!=typeof btoa)throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");{let e="";for(let t=0;t<r.length;++t)e+=String.fromCharCode(r[t]);a=btoa(e)}if(t??(t=Hs.BLOCK_LITERAL),t!==Hs.QUOTE_DOUBLE){const e=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),i=Math.ceil(a.length/e),o=new Array(i);for(let t=0,n=0;t<i;++t,n+=e)o[t]=a.substr(n,e);a=o.join(t===Hs.BLOCK_LITERAL?"\n":" ")}return dr({comment:e,type:t,value:a},n,o,s)}};function ia(e,t){if(fs(e))for(let i=0;i<e.items.length;++i){let n=e.items[i];if(!hs(n)){if(ds(n)){n.items.length>1&&t("Each pair must have its own sequence indicator");const e=n.items[0]||new Or(new Hs(null));if(n.commentBefore&&(e.key.commentBefore=e.key.commentBefore?`${n.commentBefore}\n${e.key.commentBefore}`:n.commentBefore),n.comment){const t=e.value??e.key;t.comment=t.comment?`${n.comment}\n${t.comment}`:n.comment}n=e}e.items[i]=hs(n)?n:new Or(n)}}else t("Expected a sequence for this tag");return e}function na(e,t,i){const{replacer:n}=i,o=new Lr(e);o.tag="tag:yaml.org,2002:pairs";let s=0;if(t&&Symbol.iterator in Object(t))for(let e of t){let r,a;if("function"==typeof n&&(e=n.call(t,String(s++),e)),Array.isArray(e)){if(2!==e.length)throw new TypeError(`Expected [key, value] tuple: ${e}`);r=e[0],a=e[1]}else if(e&&e instanceof Object){const t=Object.keys(e);if(1!==t.length)throw new TypeError(`Expected tuple with one key, not ${t.length} keys`);r=t[0],a=e[r]}else r=e;o.items.push(Cr(r,a,i))}return o}const oa={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:ia,createNode:na};class sa extends Lr{constructor(){super(),this.add=Tr.prototype.add.bind(this),this.delete=Tr.prototype.delete.bind(this),this.get=Tr.prototype.get.bind(this),this.has=Tr.prototype.has.bind(this),this.set=Tr.prototype.set.bind(this),this.tag=sa.tag}toJSON(e,t){if(!t)return super.toJSON(e);const i=new Map;t?.onCreate&&t.onCreate(i);for(const e of this.items){let n,o;if(hs(e)?(n=Ms(e.key,"",t),o=Ms(e.value,n,t)):n=Ms(e,"",t),i.has(n))throw new Error("Ordered maps must not include duplicate keys");i.set(n,o)}return i}static from(e,t,i){const n=na(e,t,i),o=new this;return o.items=n.items,o}}sa.tag="tag:yaml.org,2002:omap";const ra={collection:"seq",identify:e=>e instanceof Map,nodeClass:sa,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const i=ia(e,t),n=[];for(const{key:e}of i.items)us(e)&&(n.includes(e.value)?t(`Ordered maps must not include duplicate keys: ${e.value}`):n.push(e.value));return Object.assign(new sa,i)},createNode:(e,t,i)=>sa.from(e,t,i)};function aa({value:e,source:t},i){return t&&(e?la:ca).test.test(t)?t:e?i.options.trueStr:i.options.falseStr}const la={identify:e=>!0===e,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Hs(!0),stringify:aa},ca={identify:e=>!1===e,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Hs(!1),stringify:aa},da={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>"nan"===e.slice(-3).toLowerCase()?NaN:"-"===e[0]?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:jr},ha={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():jr(e)}},ua={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new Hs(parseFloat(e.replace(/_/g,""))),i=e.indexOf(".");if(-1!==i){const n=e.substring(i+1).replace(/_/g,"");"0"===n[n.length-1]&&(t.minFractionDigits=n.length)}return t},stringify:jr},fa=e=>"bigint"==typeof e||Number.isInteger(e);function pa(e,t,i,{intAsBigInt:n}){const o=e[0];if("-"!==o&&"+"!==o||(t+=1),e=e.substring(t).replace(/_/g,""),n){switch(i){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`}const t=BigInt(e);return"-"===o?BigInt(-1)*t:t}const s=parseInt(e,i);return"-"===o?-1*s:s}function ga(e,t,i){const{value:n}=e;if(fa(n)){const e=n.toString(t);return n<0?"-"+i+e.substr(1):i+e}return jr(e)}const ma={identify:fa,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,i)=>pa(e,2,2,i),stringify:e=>ga(e,2,"0b")},_a={identify:fa,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,i)=>pa(e,1,8,i),stringify:e=>ga(e,8,"0")},ba={identify:fa,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,i)=>pa(e,0,10,i),stringify:jr},ya={identify:fa,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,i)=>pa(e,2,16,i),stringify:e=>ga(e,16,"0x")};class va extends Tr{constructor(e){super(e),this.tag=va.tag}add(e){let t;t=hs(e)?e:e&&"object"==typeof e&&"key"in e&&"value"in e&&null===e.value?new Or(e.key,null):new Or(e,null);Nr(this.items,t.key)||this.items.push(t)}get(e,t){const i=Nr(this.items,e);return!t&&hs(i)?us(i.key)?i.key.value:i.key:i}set(e,t){if("boolean"!=typeof t)throw new Error("Expected boolean value for set(key, value) in a YAML set, not "+typeof t);const i=Nr(this.items,e);i&&!t?this.items.splice(this.items.indexOf(i),1):!i&&t&&this.items.push(new Or(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,i){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,i);throw new Error("Set items must all have null values")}static from(e,t,i){const{replacer:n}=i,o=new this(e);if(t&&Symbol.iterator in Object(t))for(let e of t)"function"==typeof n&&(e=n.call(t,e,e)),o.items.push(Cr(e,null,i));return o}}va.tag="tag:yaml.org,2002:set";const wa={collection:"map",identify:e=>e instanceof Set,nodeClass:va,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,t,i)=>va.from(e,t,i),resolve(e,t){if(ds(e)){if(e.hasAllNullValues(!0))return Object.assign(new va,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e}};function Aa(e,t){const i=e[0],n="-"===i||"+"===i?e.substring(1):e,o=e=>t?BigInt(e):Number(e),s=n.replace(/_/g,"").split(":").reduce((e,t)=>e*o(60)+o(t),o(0));return"-"===i?o(-1)*s:s}function Ea(e){let{value:t}=e,i=e=>e;if("bigint"==typeof t)i=e=>BigInt(e);else if(isNaN(t)||!isFinite(t))return jr(e);let n="";t<0&&(n="-",t*=i(-1));const o=i(60),s=[t%o];return t<60?s.unshift(0):(t=(t-s[0])/o,s.unshift(t%o),t>=60&&(t=(t-s[0])/o,s.unshift(t))),n+s.map(e=>String(e).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Ca={identify:e=>"bigint"==typeof e||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:i})=>Aa(e,i),stringify:Ea},Oa={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>Aa(e,!1),stringify:Ea},Sa={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(Sa.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,i,n,o,s,r,a]=t.map(Number),l=t[7]?Number((t[7]+"00").substr(1,3)):0;let c=Date.UTC(i,n-1,o,s||0,r||0,a||0,l);const d=t[8];if(d&&"Z"!==d){let e=Aa(d,!1);Math.abs(e)<30&&(e*=60),c-=6e4*e}return new Date(c)},stringify:({value:e})=>e?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},xa=[$r,Mr,Pr,Rr,la,ca,ma,_a,ba,ya,da,ha,ua,ta,br,ra,oa,wa,Ca,Oa,Sa],Ia=new Map([["core",Yr],["failsafe",[$r,Mr,Pr]],["json",ea],["yaml11",xa],["yaml-1.1",xa]]),ka={binary:ta,bool:Br,float:Ur,floatExp:Gr,floatNaN:Hr,floatTime:Oa,int:Kr,intHex:Wr,intOct:qr,intTime:Ca,map:$r,merge:br,null:Rr,omap:ra,pairs:oa,seq:Mr,set:wa,timestamp:Sa},Na={"tag:yaml.org,2002:binary":ta,"tag:yaml.org,2002:merge":br,"tag:yaml.org,2002:omap":ra,"tag:yaml.org,2002:pairs":oa,"tag:yaml.org,2002:set":wa,"tag:yaml.org,2002:timestamp":Sa};function Ta(e,t,i){const n=Ia.get(t);if(n&&!e)return i&&!n.includes(br)?n.concat(br):n.slice();let o=n;if(!o){if(!Array.isArray(e)){const e=Array.from(Ia.keys()).filter(e=>"yaml11"!==e).map(e=>JSON.stringify(e)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`)}o=[]}if(Array.isArray(e))for(const t of e)o=o.concat(t);else"function"==typeof e&&(o=e(o.slice()));return i&&(o=o.concat(br)),o.reduce((e,t)=>{const i="string"==typeof t?ka[t]:t;if(!i){const e=JSON.stringify(t),i=Object.keys(ka).map(e=>JSON.stringify(e)).join(", ");throw new Error(`Unknown custom tag ${e}; use one of ${i}`)}return e.includes(i)||e.push(i),e},[])}const $a=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class La{constructor({compat:e,customTags:t,merge:i,resolveKnownTags:n,schema:o,sortMapEntries:s,toStringDefaults:r}){this.compat=Array.isArray(e)?Ta(e,"compat"):e?Ta(null,e):null,this.name="string"==typeof o&&o||"core",this.knownTags=n?Na:{},this.tags=Ta(t,this.name,i),this.toStringOptions=r??null,Object.defineProperty(this,ns,{value:$r}),Object.defineProperty(this,ss,{value:Pr}),Object.defineProperty(this,rs,{value:Mr}),this.sortMapEntries="function"==typeof s?s:!0===s?$a:null}clone(){const e=Object.create(La.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Da(e,t){const i=[];let n=!0===t.directives;if(!1!==t.directives&&e.directives){const t=e.directives.toString(e);t?(i.push(t),n=!0):e.directives.docStart&&(n=!0)}n&&i.push("---");const o=hr(e,t),{commentString:s}=o.options;if(e.commentBefore){1!==i.length&&i.unshift("");const t=s(e.commentBefore);i.unshift(Ws(t,""))}let r=!1,a=null;if(e.contents){if(gs(e.contents)){if(e.contents.spaceBefore&&n&&i.push(""),e.contents.commentBefore){const t=s(e.contents.commentBefore);i.push(Ws(t,""))}o.forceBlockIndent=!!e.comment,a=e.contents.comment}const t=a?void 0:()=>r=!0;let l=pr(e.contents,o,()=>a=null,t);a&&(l+=Ys(l,"",s(a))),"|"!==l[0]&&">"!==l[0]||"---"!==i[i.length-1]?i.push(l):i[i.length-1]=`--- ${l}`}else i.push(pr(e.contents,o));if(e.directives?.docEnd)if(e.comment){const t=s(e.comment);t.includes("\n")?(i.push("..."),i.push(Ws(t,""))):i.push(`... ${t}`)}else i.push("...");else{let t=e.comment;t&&r&&(t=t.replace(/^\n+/,"")),t&&(r&&!a||""===i[i.length-1]||i.push(""),i.push(Ws(s(t),"")))}return i.join("\n")+"\n"}let Ma=class e{constructor(e,t,i){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,as,{value:is});let n=null;"function"==typeof t||Array.isArray(t)?n=t:void 0===i&&t&&(i=t,t=void 0);const o=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},i);this.options=o;let{version:s}=o;i?._directives?(this.directives=i._directives.atDocument(),this.directives.yaml.explicit&&(s=this.directives.yaml.version)):this.directives=new ks({version:s}),this.setSchema(s,i),this.contents=void 0===e?null:this.createNode(e,n,i)}clone(){const t=Object.create(e.prototype,{[as]:{value:is}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=gs(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(e){Pa(this.contents)&&this.contents.add(e)}addIn(e,t){Pa(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const i=Ts(this);e.anchor=!t||i.has(t)?$s(t||"a",i):t}return new Rs(e.anchor)}createNode(e,t,i){let n;if("function"==typeof t)e=t.call({"":e},"",e),n=t;else if(Array.isArray(t)){const e=e=>"number"==typeof e||e instanceof String||e instanceof Number,i=t.filter(e).map(String);i.length>0&&(t=t.concat(i)),n=t}else void 0===i&&t&&(i=t,t=void 0);const{aliasDuplicateObjects:o,anchorPrefix:s,flow:r,keepUndefined:a,onTagObj:l,tag:c}=i??{},{onAnchor:d,setAnchors:h,sourceObjects:u}=Ls(this,s||"a"),f=Fs(e,c,{aliasDuplicateObjects:o??!0,keepUndefined:a??!1,onAnchor:d,onTagObj:l,replacer:n,schema:this.schema,sourceObjects:u});return r&&ps(f)&&(f.flow=!0),h(),f}createPair(e,t,i={}){const n=this.createNode(e,null,i),o=this.createNode(t,null,i);return new Or(n,o)}delete(e){return!!Pa(this.contents)&&this.contents.delete(e)}deleteIn(e){return zs(e)?null!=this.contents&&(this.contents=null,!0):!!Pa(this.contents)&&this.contents.deleteIn(e)}get(e,t){return ps(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return zs(e)?!t&&us(this.contents)?this.contents.value:this.contents:ps(this.contents)?this.contents.getIn(e,t):void 0}has(e){return!!ps(this.contents)&&this.contents.has(e)}hasIn(e){return zs(e)?void 0!==this.contents:!!ps(this.contents)&&this.contents.hasIn(e)}set(e,t){null==this.contents?this.contents=Vs(this.schema,[e],t):Pa(this.contents)&&this.contents.set(e,t)}setIn(e,t){zs(e)?this.contents=t:null==this.contents?this.contents=Vs(this.schema,Array.from(e),t):Pa(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){let i;switch("number"==typeof e&&(e=String(e)),e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new ks({version:"1.1"}),i={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new ks({version:e}),i={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,i=null;break;default:{const t=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`)}}if(t.schema instanceof Object)this.schema=t.schema;else{if(!i)throw new Error("With a null YAML version, the { schema: Schema } option is required");this.schema=new La(Object.assign(i,t))}}toJS({json:e,jsonArg:t,mapAsMap:i,maxAliasCount:n,onAnchor:o,reviver:s}={}){const r={anchors:new Map,doc:this,keep:!e,mapAsMap:!0===i,mapKeyWarned:!1,maxAliasCount:"number"==typeof n?n:100},a=Ms(this.contents,t??"",r);if("function"==typeof o)for(const{count:e,res:t}of r.anchors.values())o(t,e);return"function"==typeof s?Ds(s,{"":a},"",a):a}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return Da(this,e)}};function Pa(e){if(ps(e))return!0;throw new Error("Expected a YAML collection as document contents")}class Ra extends Error{constructor(e,t,i,n){super(),this.name=e,this.code=i,this.message=n,this.pos=t}}class Ba extends Ra{constructor(e,t,i){super("YAMLParseError",e,t,i)}}class ja extends Ra{constructor(e,t,i){super("YAMLWarning",e,t,i)}}const Ha=(e,t)=>i=>{if(-1===i.pos[0])return;i.linePos=i.pos.map(e=>t.linePos(e));const{line:n,col:o}=i.linePos[0];i.message+=` at line ${n}, column ${o}`;let s=o-1,r=e.substring(t.lineStarts[n-1],t.lineStarts[n]).replace(/[\n\r]+$/,"");if(s>=60&&r.length>80){const e=Math.min(s-39,r.length-79);r="…"+r.substring(e),s-=e-1}if(r.length>80&&(r=r.substring(0,79)+"…"),n>1&&/^ *$/.test(r.substring(0,s))){let i=e.substring(t.lineStarts[n-2],t.lineStarts[n-1]);i.length>80&&(i=i.substring(0,79)+"…\n"),r=i+r}if(/[^ ]/.test(r)){let e=1;const t=i.linePos[1];t?.line===n&&t.col>o&&(e=Math.max(1,Math.min(t.col-o,80-s)));const a=" ".repeat(s)+"^".repeat(e);i.message+=`:\n\n${r}\n${a}\n`}};function Ga(e,{flow:t,indicator:i,next:n,offset:o,onError:s,parentIndent:r,startOnNewline:a}){let l=!1,c=a,d=a,h="",u="",f=!1,p=!1,g=null,m=null,_=null,b=null,y=null,v=null,w=null;for(const o of e)switch(p&&("space"!==o.type&&"newline"!==o.type&&"comma"!==o.type&&s(o.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),p=!1),g&&(c&&"comment"!==o.type&&"newline"!==o.type&&s(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),g=null),o.type){case"space":t||"doc-start"===i&&"flow-collection"===n?.type||!o.source.includes("\t")||(g=o),d=!0;break;case"comment":{d||s(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const e=o.source.substring(1)||" ";h?h+=u+e:h=e,u="",c=!1;break}case"newline":c?h?h+=o.source:v&&"seq-item-ind"===i||(l=!0):u+=o.source,c=!0,f=!0,(m||_)&&(b=o),d=!0;break;case"anchor":m&&s(o,"MULTIPLE_ANCHORS","A node can have at most one anchor"),o.source.endsWith(":")&&s(o.offset+o.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),m=o,w??(w=o.offset),c=!1,d=!1,p=!0;break;case"tag":_&&s(o,"MULTIPLE_TAGS","A node can have at most one tag"),_=o,w??(w=o.offset),c=!1,d=!1,p=!0;break;case i:(m||_)&&s(o,"BAD_PROP_ORDER",`Anchors and tags must be after the ${o.source} indicator`),v&&s(o,"UNEXPECTED_TOKEN",`Unexpected ${o.source} in ${t??"collection"}`),v=o,c="seq-item-ind"===i||"explicit-key-ind"===i,d=!1;break;case"comma":if(t){y&&s(o,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),y=o,c=!1,d=!1;break}default:s(o,"UNEXPECTED_TOKEN",`Unexpected ${o.type} token`),c=!1,d=!1}const A=e[e.length-1],E=A?A.offset+A.source.length:o;return p&&n&&"space"!==n.type&&"newline"!==n.type&&"comma"!==n.type&&("scalar"!==n.type||""!==n.source)&&s(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g&&(c&&g.indent<=r||"block-map"===n?.type||"block-seq"===n?.type)&&s(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:y,found:v,spaceBefore:l,comment:h,hasNewline:f,anchor:m,tag:_,newlineAfterProp:b,end:E,start:w??E}}function Ua(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes("\n"))return!0;if(e.end)for(const t of e.end)if("newline"===t.type)return!0;return!1;case"flow-collection":for(const t of e.items){for(const e of t.start)if("newline"===e.type)return!0;if(t.sep)for(const e of t.sep)if("newline"===e.type)return!0;if(Ua(t.key)||Ua(t.value))return!0}return!1;default:return!0}}function Fa(e,t,i){if("flow-collection"===t?.type){const n=t.end[0];if(n.indent===e&&("]"===n.source||"}"===n.source)&&Ua(t)){i(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}}function Va(e,t,i){const{uniqueKeys:n}=e.options;if(!1===n)return!1;const o="function"==typeof n?n:(e,t)=>e===t||us(e)&&us(t)&&e.value===t.value;return t.some(e=>o(e.key,i))}const za="All mapping items must start at the same column";function qa({composeNode:e,composeEmptyNode:t},i,n,o,s){const r=new(s?.nodeClass??Tr)(i.schema);i.atRoot&&(i.atRoot=!1);let a=n.offset,l=null;for(const s of n.items){const{start:c,key:d,sep:h,value:u}=s,f=Ga(c,{indicator:"explicit-key-ind",next:d??h?.[0],offset:a,onError:o,parentIndent:n.indent,startOnNewline:!0}),p=!f.found;if(p){if(d&&("block-seq"===d.type?o(a,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in d&&d.indent!==n.indent&&o(a,"BAD_INDENT",za)),!f.anchor&&!f.tag&&!h){l=f.end,f.comment&&(r.comment?r.comment+="\n"+f.comment:r.comment=f.comment);continue}(f.newlineAfterProp||Ua(d))&&o(d??c[c.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else f.found?.indent!==n.indent&&o(a,"BAD_INDENT",za);i.atKey=!0;const g=f.end,m=d?e(i,d,f,o):t(i,g,c,null,f,o);i.schema.compat&&Fa(n.indent,d,o),i.atKey=!1,Va(i,r.items,m)&&o(g,"DUPLICATE_KEY","Map keys must be unique");const _=Ga(h??[],{indicator:"map-value-ind",next:u,offset:m.range[2],onError:o,parentIndent:n.indent,startOnNewline:!d||"block-scalar"===d.type});if(a=_.end,_.found){p&&("block-map"!==u?.type||_.hasNewline||o(a,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),i.options.strict&&f.start<_.found.offset-1024&&o(m.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const l=u?e(i,u,_,o):t(i,a,h,null,_,o);i.schema.compat&&Fa(n.indent,u,o),a=l.range[2];const c=new Or(m,l);i.options.keepSourceTokens&&(c.srcToken=s),r.items.push(c)}else{p&&o(m.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),_.comment&&(m.comment?m.comment+="\n"+_.comment:m.comment=_.comment);const e=new Or(m);i.options.keepSourceTokens&&(e.srcToken=s),r.items.push(e)}}return l&&l<a&&o(l,"IMPOSSIBLE","Map comment with trailing content"),r.range=[n.offset,a,l??a],r}function Ka({composeNode:e,composeEmptyNode:t},i,n,o,s){const r=new(s?.nodeClass??Lr)(i.schema);i.atRoot&&(i.atRoot=!1),i.atKey&&(i.atKey=!1);let a=n.offset,l=null;for(const{start:s,value:c}of n.items){const d=Ga(s,{indicator:"seq-item-ind",next:c,offset:a,onError:o,parentIndent:n.indent,startOnNewline:!0});if(!d.found){if(!(d.anchor||d.tag||c)){l=d.end,d.comment&&(r.comment=d.comment);continue}"block-seq"===c?.type?o(d.end,"BAD_INDENT","All sequence items must start at the same column"):o(a,"MISSING_CHAR","Sequence item without - indicator")}const h=c?e(i,c,d,o):t(i,d.end,s,null,d,o);i.schema.compat&&Fa(n.indent,c,o),a=h.range[2],r.items.push(h)}return r.range=[n.offset,a,l??a],r}function Wa(e,t,i,n){let o="";if(e){let s=!1,r="";for(const a of e){const{source:e,type:l}=a;switch(l){case"space":s=!0;break;case"comment":{i&&!s&&n(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const t=e.substring(1)||" ";o?o+=r+t:o=t,r="";break}case"newline":o&&(r+=e),s=!0;break;default:n(a,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}t+=e.length}}return{comment:o,offset:t}}const Ya="Block collections are not allowed within flow collections",Ja=e=>e&&("block-map"===e.type||"block-seq"===e.type);function Xa({composeNode:e,composeEmptyNode:t},i,n,o,s){const r="{"===n.start.source,a=r?"flow map":"flow sequence",l=new(s?.nodeClass??(r?Tr:Lr))(i.schema);l.flow=!0;const c=i.atRoot;c&&(i.atRoot=!1),i.atKey&&(i.atKey=!1);let d=n.offset+n.start.source.length;for(let s=0;s<n.items.length;++s){const c=n.items[s],{start:h,key:u,sep:f,value:p}=c,g=Ga(h,{flow:a,indicator:"explicit-key-ind",next:u??f?.[0],offset:d,onError:o,parentIndent:n.indent,startOnNewline:!1});if(!g.found){if(!(g.anchor||g.tag||f||p)){0===s&&g.comma?o(g.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):s<n.items.length-1&&o(g.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),g.comment&&(l.comment?l.comment+="\n"+g.comment:l.comment=g.comment),d=g.end;continue}!r&&i.options.strict&&Ua(u)&&o(u,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(0===s)g.comma&&o(g.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(g.comma||o(g.start,"MISSING_CHAR",`Missing , between ${a} items`),g.comment){let e="";e:for(const t of h)switch(t.type){case"comma":case"space":break;case"comment":e=t.source.substring(1);break e;default:break e}if(e){let t=l.items[l.items.length-1];hs(t)&&(t=t.value??t.key),t.comment?t.comment+="\n"+e:t.comment=e,g.comment=g.comment.substring(e.length+1)}}if(r||f||g.found){i.atKey=!0;const s=g.end,m=u?e(i,u,g,o):t(i,s,h,null,g,o);Ja(u)&&o(m.range,"BLOCK_IN_FLOW",Ya),i.atKey=!1;const _=Ga(f??[],{flow:a,indicator:"map-value-ind",next:p,offset:m.range[2],onError:o,parentIndent:n.indent,startOnNewline:!1});if(_.found){if(!r&&!g.found&&i.options.strict){if(f)for(const e of f){if(e===_.found)break;if("newline"===e.type){o(e,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}g.start<_.found.offset-1024&&o(_.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else p&&("source"in p&&":"===p.source?.[0]?o(p,"MISSING_CHAR",`Missing space after : in ${a}`):o(_.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const b=p?e(i,p,_,o):_.found?t(i,_.end,f,null,_,o):null;b?Ja(p)&&o(b.range,"BLOCK_IN_FLOW",Ya):_.comment&&(m.comment?m.comment+="\n"+_.comment:m.comment=_.comment);const y=new Or(m,b);if(i.options.keepSourceTokens&&(y.srcToken=c),r){const e=l;Va(i,e.items,m)&&o(s,"DUPLICATE_KEY","Map keys must be unique"),e.items.push(y)}else{const e=new Tr(i.schema);e.flow=!0,e.items.push(y);const t=(b??m).range;e.range=[m.range[0],t[1],t[2]],l.items.push(e)}d=b?b.range[2]:_.end}else{const n=p?e(i,p,g,o):t(i,g.end,f,null,g,o);l.items.push(n),d=n.range[2],Ja(p)&&o(n.range,"BLOCK_IN_FLOW",Ya)}}const h=r?"}":"]",[u,...f]=n.end;let p=d;if(u?.source===h)p=u.offset+u.source.length;else{const e=a[0].toUpperCase()+a.substring(1);o(d,c?"MISSING_CHAR":"BAD_INDENT",c?`${e} must end with a ${h}`:`${e} in block collection must be sufficiently indented and end with a ${h}`),u&&1!==u.source.length&&f.unshift(u)}if(f.length>0){const e=Wa(f,p,i.options.strict,o);e.comment&&(l.comment?l.comment+="\n"+e.comment:l.comment=e.comment),l.range=[n.offset,p,e.offset]}else l.range=[n.offset,p,p];return l}function Qa(e,t,i,n,o,s){const r="block-map"===i.type?qa(e,t,i,n,s):"block-seq"===i.type?Ka(e,t,i,n,s):Xa(e,t,i,n,s),a=r.constructor;return"!"===o||o===a.tagName?(r.tag=a.tagName,r):(o&&(r.tag=o),r)}function Za(e,t,i,n,o){const s=n.tag,r=s?t.directives.tagName(s.source,e=>o(s,"TAG_RESOLVE_FAILED",e)):null;if("block-seq"===i.type){const{anchor:e,newlineAfterProp:t}=n,i=e&&s?e.offset>s.offset?e:s:e??s;if(i&&(!t||t.offset<i.offset)){o(i,"MISSING_CHAR","Missing newline after block sequence props")}}const a="block-map"===i.type?"map":"block-seq"===i.type?"seq":"{"===i.start.source?"map":"seq";if(!s||!r||"!"===r||r===Tr.tagName&&"map"===a||r===Lr.tagName&&"seq"===a)return Qa(e,t,i,o,r);let l=t.schema.tags.find(e=>e.tag===r&&e.collection===a);if(!l){const n=t.schema.knownTags[r];if(n?.collection!==a)return n?o(s,"BAD_COLLECTION_TYPE",`${n.tag} used for ${a} collection, but expects ${n.collection??"scalar"}`,!0):o(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,!0),Qa(e,t,i,o,r);t.schema.tags.push(Object.assign({},n,{default:!1})),l=n}const c=Qa(e,t,i,o,r,l),d=l.resolve?.(c,e=>o(s,"TAG_RESOLVE_FAILED",e),t.options)??c,h=gs(d)?d:new Hs(d);return h.range=c.range,h.tag=r,l?.format&&(h.format=l.format),h}function el(e,t,i){const n=t.offset,o=tl(t,e.options.strict,i);if(!o)return{value:"",type:null,comment:"",range:[n,n,n]};const s=">"===o.mode?Hs.BLOCK_FOLDED:Hs.BLOCK_LITERAL,r=t.source?il(t.source):[];let a=r.length;for(let e=r.length-1;e>=0;--e){const t=r[e][1];if(""!==t&&"\r"!==t)break;a=e}if(0===a){const e="+"===o.chomp&&r.length>0?"\n".repeat(Math.max(1,r.length-1)):"";let i=n+o.length;return t.source&&(i+=t.source.length),{value:e,type:s,comment:o.comment,range:[n,i,i]}}let l=t.indent+o.indent,c=t.offset+o.length,d=0;for(let t=0;t<a;++t){const[n,s]=r[t];if(""!==s&&"\r"!==s){if(n.length<l){const e="Block scalars with more-indented leading empty lines must use an explicit indentation indicator";i(c+n.length,"MISSING_CHAR",e)}if(0===o.indent&&(l=n.length),d=t,0===l&&!e.atRoot){i(c,"BAD_INDENT","Block scalar values in collections must be indented")}break}0===o.indent&&n.length>l&&(l=n.length),c+=n.length+s.length+1}for(let e=r.length-1;e>=a;--e)r[e][0].length>l&&(a=e+1);let h="",u="",f=!1;for(let e=0;e<d;++e)h+=r[e][0].slice(l)+"\n";for(let e=d;e<a;++e){let[t,n]=r[e];c+=t.length+n.length+1;const a="\r"===n[n.length-1];if(a&&(n=n.slice(0,-1)),n&&t.length<l){const e=`Block scalar lines must not be less indented than their ${o.indent?"explicit indentation indicator":"first line"}`;i(c-n.length-(a?2:1),"BAD_INDENT",e),t=""}s===Hs.BLOCK_LITERAL?(h+=u+t.slice(l)+n,u="\n"):t.length>l||"\t"===n[0]?(" "===u?u="\n":f||"\n"!==u||(u="\n\n"),h+=u+t.slice(l)+n,u="\n",f=!0):""===n?"\n"===u?h+="\n":u="\n":(h+=u+n,u=" ",f=!1)}switch(o.chomp){case"-":break;case"+":for(let e=a;e<r.length;++e)h+="\n"+r[e][0].slice(l);"\n"!==h[h.length-1]&&(h+="\n");break;default:h+="\n"}const p=n+o.length+t.source.length;return{value:h,type:s,comment:o.comment,range:[n,p,p]}}function tl({offset:e,props:t},i,n){if("block-scalar-header"!==t[0].type)return n(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:o}=t[0],s=o[0];let r=0,a="",l=-1;for(let t=1;t<o.length;++t){const i=o[t];if(a||"-"!==i&&"+"!==i){const n=Number(i);!r&&n?r=n:-1===l&&(l=e+t)}else a=i}-1!==l&&n(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${o}`);let c=!1,d="",h=o.length;for(let e=1;e<t.length;++e){const o=t[e];switch(o.type){case"space":c=!0;case"newline":h+=o.source.length;break;case"comment":if(i&&!c){n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters")}h+=o.source.length,d=o.source.substring(1);break;case"error":n(o,"UNEXPECTED_TOKEN",o.message),h+=o.source.length;break;default:{n(o,"UNEXPECTED_TOKEN",`Unexpected token in block scalar header: ${o.type}`);const e=o.source;e&&"string"==typeof e&&(h+=e.length)}}}return{mode:s,indent:r,chomp:a,comment:d,length:h}}function il(e){const t=e.split(/\n( *)/),i=t[0],n=i.match(/^( *)/),o=[n?.[1]?[n[1],i.slice(n[1].length)]:["",i]];for(let e=1;e<t.length;e+=2)o.push([t[e],t[e+1]]);return o}function nl(e,t,i){const{offset:n,type:o,source:s,end:r}=e;let a,l;const c=(e,t,o)=>i(n+e,t,o);switch(o){case"scalar":a=Hs.PLAIN,l=ol(s,c);break;case"single-quoted-scalar":a=Hs.QUOTE_SINGLE,l=sl(s,c);break;case"double-quoted-scalar":a=Hs.QUOTE_DOUBLE,l=al(s,c);break;default:return i(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${o}`),{value:"",type:null,comment:"",range:[n,n+s.length,n+s.length]}}const d=n+s.length,h=Wa(r,d,t,i);return{value:l,type:a,comment:h.comment,range:[n,d,h.offset]}}function ol(e,t){let i="";switch(e[0]){case"\t":i="a tab character";break;case",":i="flow indicator character ,";break;case"%":i="directive indicator character %";break;case"|":case">":i=`block scalar indicator ${e[0]}`;break;case"@":case"`":i=`reserved character ${e[0]}`}return i&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${i}`),rl(e)}function sl(e,t){return"'"===e[e.length-1]&&1!==e.length||t(e.length,"MISSING_CHAR","Missing closing 'quote"),rl(e.slice(1,-1)).replace(/''/g,"'")}function rl(e){let t,i;try{t=new RegExp("(.*?)(?<![ \t])[ \t]*\r?\n","sy"),i=new RegExp("[ \t]*(.*?)(?:(?<![ \t])[ \t]*)?\r?\n","sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,i=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=t.exec(e);if(!n)return e;let o=n[1],s=" ",r=t.lastIndex;for(i.lastIndex=r;n=i.exec(e);)""===n[1]?"\n"===s?o+=s:s="\n":(o+=s+n[1],s=" "),r=i.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=r,n=a.exec(e),o+s+(n?.[1]??"")}function al(e,t){let i="";for(let n=1;n<e.length-1;++n){const o=e[n];if("\r"!==o||"\n"!==e[n+1])if("\n"===o){const{fold:t,offset:o}=ll(e,n);i+=t,n=o}else if("\\"===o){let o=e[++n];const s=cl[o];if(s)i+=s;else if("\n"===o)for(o=e[n+1];" "===o||"\t"===o;)o=e[1+ ++n];else if("\r"===o&&"\n"===e[n+1])for(o=e[1+ ++n];" "===o||"\t"===o;)o=e[1+ ++n];else if("x"===o||"u"===o||"U"===o){const s={x:2,u:4,U:8}[o];i+=dl(e,n+1,s,t),n+=s}else{const o=e.substr(n-1,2);t(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),i+=o}}else if(" "===o||"\t"===o){const t=n;let s=e[n+1];for(;" "===s||"\t"===s;)s=e[1+ ++n];"\n"===s||"\r"===s&&"\n"===e[n+2]||(i+=n>t?e.slice(t,n+1):o)}else i+=o}return'"'===e[e.length-1]&&1!==e.length||t(e.length,"MISSING_CHAR",'Missing closing "quote'),i}function ll(e,t){let i="",n=e[t+1];for(;!(" "!==n&&"\t"!==n&&"\n"!==n&&"\r"!==n||"\r"===n&&"\n"!==e[t+2]);)"\n"===n&&(i+="\n"),n=e[(t+=1)+1];return i||(i=" "),{fold:i,offset:t}}const cl={0:"\0",a:"",b:"\b",e:"",f:"\f",n:"\n",r:"\r",t:"\t",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","\t":"\t"};function dl(e,t,i,n){const o=e.substr(t,i),s=o.length===i&&/^[0-9a-fA-F]+$/.test(o)?parseInt(o,16):NaN;if(isNaN(s)){const o=e.substr(t-2,i+2);return n(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(s)}function hl(e,t,i,n){const{value:o,type:s,comment:r,range:a}="block-scalar"===t.type?el(e,t,n):nl(t,e.options.strict,n),l=i?e.directives.tagName(i.source,e=>n(i,"TAG_RESOLVE_FAILED",e)):null;let c,d;c=e.options.stringKeys&&e.atKey?e.schema[ss]:l?ul(e.schema,o,l,i,n):"scalar"===t.type?fl(e,o,t,n):e.schema[ss];try{const s=c.resolve(o,e=>n(i??t,"TAG_RESOLVE_FAILED",e),e.options);d=us(s)?s:new Hs(s)}catch(e){const s=e instanceof Error?e.message:String(e);n(i??t,"TAG_RESOLVE_FAILED",s),d=new Hs(o)}return d.range=a,d.source=o,s&&(d.type=s),l&&(d.tag=l),c.format&&(d.format=c.format),r&&(d.comment=r),d}function ul(e,t,i,n,o){if("!"===i)return e[ss];const s=[];for(const t of e.tags)if(!t.collection&&t.tag===i){if(!t.default||!t.test)return t;s.push(t)}for(const e of s)if(e.test?.test(t))return e;const r=e.knownTags[i];return r&&!r.collection?(e.tags.push(Object.assign({},r,{default:!1,test:void 0})),r):(o(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${i}`,"tag:yaml.org,2002:str"!==i),e[ss])}function fl({atKey:e,directives:t,schema:i},n,o,s){const r=i.tags.find(t=>(!0===t.default||e&&"key"===t.default)&&t.test?.test(n))||i[ss];if(i.compat){const e=i.compat.find(e=>e.default&&e.test?.test(n))??i[ss];if(r.tag!==e.tag){s(o,"TAG_RESOLVE_FAILED",`Value may be parsed as either ${t.tagString(r.tag)} or ${t.tagString(e.tag)}`,!0)}}return r}function pl(e,t,i){if(t){i??(i=t.length);for(let n=i-1;n>=0;--n){let i=t[n];switch(i.type){case"space":case"comment":case"newline":e-=i.source.length;continue}for(i=t[++n];"space"===i?.type;)e+=i.source.length,i=t[++n];break}}return e}const gl={composeNode:ml,composeEmptyNode:_l};function ml(e,t,i,n){const o=e.atKey,{spaceBefore:s,comment:r,anchor:a,tag:l}=i;let c,d=!0;switch(t.type){case"alias":c=bl(e,t,n),(a||l)&&n(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=hl(e,t,l,n),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=Za(gl,e,t,i,n),a&&(c.anchor=a.source.substring(1));break;default:n(t,"UNEXPECTED_TOKEN","error"===t.type?t.message:`Unsupported token (type: ${t.type})`),c=_l(e,t.offset,void 0,null,i,n),d=!1}if(a&&""===c.anchor&&n(a,"BAD_ALIAS","Anchor cannot be an empty string"),o&&e.options.stringKeys&&(!us(c)||"string"!=typeof c.value||c.tag&&"tag:yaml.org,2002:str"!==c.tag)){n(l??t,"NON_STRING_KEY","With stringKeys, all keys must be strings")}return s&&(c.spaceBefore=!0),r&&("scalar"===t.type&&""===t.source?c.comment=r:c.commentBefore=r),e.options.keepSourceTokens&&d&&(c.srcToken=t),c}function _l(e,t,i,n,{spaceBefore:o,comment:s,anchor:r,tag:a,end:l},c){const d=hl(e,{type:"scalar",offset:pl(t,i,n),indent:-1,source:""},a,c);return r&&(d.anchor=r.source.substring(1),""===d.anchor&&c(r,"BAD_ALIAS","Anchor cannot be an empty string")),o&&(d.spaceBefore=!0),s&&(d.comment=s,d.range[2]=l),d}function bl({options:e},{offset:t,source:i,end:n},o){const s=new Rs(i.substring(1));""===s.source&&o(t,"BAD_ALIAS","Alias cannot be an empty string"),s.source.endsWith(":")&&o(t+i.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const r=t+i.length,a=Wa(n,r,e.strict,o);return s.range=[t,r,a.offset],a.comment&&(s.comment=a.comment),s}function yl(e,t,{offset:i,start:n,value:o,end:s},r){const a=Object.assign({_directives:t},e),l=new Ma(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},d=Ga(n,{indicator:"doc-start",next:o??s?.[0],offset:i,onError:r,parentIndent:0,startOnNewline:!0});d.found&&(l.directives.docStart=!0,!o||"block-map"!==o.type&&"block-seq"!==o.type||d.hasNewline||r(d.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=o?ml(c,o,d,r):_l(c,d.end,n,null,d,r);const h=l.contents.range[2],u=Wa(s,h,!1,r);return u.comment&&(l.comment=u.comment),l.range=[i,h,u.offset],l}function vl(e){if("number"==typeof e)return[e,e+1];if(Array.isArray(e))return 2===e.length?e:[e[0],e[1]];const{offset:t,source:i}=e;return[t,t+("string"==typeof i?i.length:1)]}function wl(e){let t="",i=!1,n=!1;for(let o=0;o<e.length;++o){const s=e[o];switch(s[0]){case"#":t+=(""===t?"":n?"\n\n":"\n")+(s.substring(1)||" "),i=!0,n=!1;break;case"%":"#"!==e[o+1]?.[0]&&(o+=1),i=!1;break;default:i||(n=!0),i=!1}}return{comment:t,afterEmptyLine:n}}class Al{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(e,t,i,n)=>{const o=vl(e);n?this.warnings.push(new ja(o,t,i)):this.errors.push(new Ba(o,t,i))},this.directives=new ks({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:i,afterEmptyLine:n}=wl(this.prelude);if(i){const o=e.contents;if(t)e.comment=e.comment?`${e.comment}\n${i}`:i;else if(n||e.directives.docStart||!o)e.commentBefore=i;else if(ps(o)&&!o.flow&&o.items.length>0){let e=o.items[0];hs(e)&&(e=e.key);const t=e.commentBefore;e.commentBefore=t?`${i}\n${t}`:i}else{const e=o.commentBefore;o.commentBefore=e?`${i}\n${e}`:i}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:wl(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,i=-1){for(const t of e)yield*this.next(t);yield*this.end(t,i)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,i,n)=>{const o=vl(e);o[0]+=t,this.onError(o,"BAD_DIRECTIVE",i,n)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=yl(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,i=new Ba(vl(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(i):this.doc.errors.push(i);break}case"doc-end":{if(!this.doc){const t="Unexpected doc-end without preceding document";this.errors.push(new Ba(vl(e),"UNEXPECTED_TOKEN",t));break}this.doc.directives.docEnd=!0;const t=Wa(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const e=this.doc.comment;this.doc.comment=e?`${e}\n${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new Ba(vl(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const e=Object.assign({_directives:this.directives},this.options),i=new Ma(void 0,e);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}}function El(e,t=!0,i){if(e){const n=(e,t,n)=>{const o="number"==typeof e?e:Array.isArray(e)?e[0]:e.offset;if(!i)throw new Ba([o,o+1],t,n);i(o,t,n)};switch(e.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return nl(e,t,n);case"block-scalar":return el({options:{strict:t}},e,n)}}return null}function Cl(e,t){const{implicitKey:i=!1,indent:n,inFlow:o=!1,offset:s=-1,type:r="PLAIN"}=t,a=dr({type:r,value:e},{implicitKey:i,indent:n>0?" ".repeat(n):"",inFlow:o,options:{blockQuote:!0,lineWidth:-1}}),l=t.end??[{type:"newline",offset:-1,indent:n,source:"\n"}];switch(a[0]){case"|":case">":{const e=a.indexOf("\n"),t=a.substring(0,e),i=a.substring(e+1)+"\n",o=[{type:"block-scalar-header",offset:s,indent:n,source:t}];return xl(o,l)||o.push({type:"newline",offset:-1,indent:n,source:"\n"}),{type:"block-scalar",offset:s,indent:n,props:o,source:i}}case'"':return{type:"double-quoted-scalar",offset:s,indent:n,source:a,end:l};case"'":return{type:"single-quoted-scalar",offset:s,indent:n,source:a,end:l};default:return{type:"scalar",offset:s,indent:n,source:a,end:l}}}function Ol(e,t,i={}){let{afterKey:n=!1,implicitKey:o=!1,inFlow:s=!1,type:r}=i,a="indent"in e?e.indent:null;if(n&&"number"==typeof a&&(a+=2),!r)switch(e.type){case"single-quoted-scalar":r="QUOTE_SINGLE";break;case"double-quoted-scalar":r="QUOTE_DOUBLE";break;case"block-scalar":{const t=e.props[0];if("block-scalar-header"!==t.type)throw new Error("Invalid block scalar header");r=">"===t.source[0]?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:r="PLAIN"}const l=dr({type:r,value:t},{implicitKey:o||null===a,indent:null!==a&&a>0?" ".repeat(a):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}});switch(l[0]){case"|":case">":Sl(e,l);break;case'"':Il(e,l,"double-quoted-scalar");break;case"'":Il(e,l,"single-quoted-scalar");break;default:Il(e,l,"scalar")}}function Sl(e,t){const i=t.indexOf("\n"),n=t.substring(0,i),o=t.substring(i+1)+"\n";if("block-scalar"===e.type){const t=e.props[0];if("block-scalar-header"!==t.type)throw new Error("Invalid block scalar header");t.source=n,e.source=o}else{const{offset:t}=e,i="indent"in e?e.indent:-1,s=[{type:"block-scalar-header",offset:t,indent:i,source:n}];xl(s,"end"in e?e.end:void 0)||s.push({type:"newline",offset:-1,indent:i,source:"\n"});for(const t of Object.keys(e))"type"!==t&&"offset"!==t&&delete e[t];Object.assign(e,{type:"block-scalar",indent:i,props:s,source:o})}}function xl(e,t){if(t)for(const i of t)switch(i.type){case"space":case"comment":e.push(i);break;case"newline":return e.push(i),!0}return!1}function Il(e,t,i){switch(e.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":e.type=i,e.source=t;break;case"block-scalar":{const n=e.props.slice(1);let o=t.length;"block-scalar-header"===e.props[0].type&&(o-=e.props[0].source.length);for(const e of n)e.offset+=o;delete e.props,Object.assign(e,{type:i,source:t,end:n});break}case"block-map":case"block-seq":{const n={type:"newline",offset:e.offset+t.length,indent:e.indent,source:"\n"};delete e.items,Object.assign(e,{type:i,source:t,end:[n]});break}default:{const n="indent"in e?e.indent:-1,o="end"in e&&Array.isArray(e.end)?e.end.filter(e=>"space"===e.type||"comment"===e.type||"newline"===e.type):[];for(const t of Object.keys(e))"type"!==t&&"offset"!==t&&delete e[t];Object.assign(e,{type:i,indent:n,source:t,end:o})}}}const kl=e=>"type"in e?Nl(e):Tl(e);function Nl(e){switch(e.type){case"block-scalar":{let t="";for(const i of e.props)t+=Nl(i);return t+e.source}case"block-map":case"block-seq":{let t="";for(const i of e.items)t+=Tl(i);return t}case"flow-collection":{let t=e.start.source;for(const i of e.items)t+=Tl(i);for(const i of e.end)t+=i.source;return t}case"document":{let t=Tl(e);if(e.end)for(const i of e.end)t+=i.source;return t}default:{let t=e.source;if("end"in e&&e.end)for(const i of e.end)t+=i.source;return t}}}function Tl({start:e,key:t,sep:i,value:n}){let o="";for(const t of e)o+=t.source;if(t&&(o+=Nl(t)),i)for(const e of i)o+=e.source;return n&&(o+=Nl(n)),o}const $l=Symbol("break visit"),Ll=Symbol("skip children"),Dl=Symbol("remove item");function Ml(e,t){"type"in e&&"document"===e.type&&(e={start:e.start,value:e.value}),Pl(Object.freeze([]),e,t)}function Pl(e,t,i){let n=i(t,e);if("symbol"==typeof n)return n;for(const o of["key","value"]){const s=t[o];if(s&&"items"in s){for(let t=0;t<s.items.length;++t){const n=Pl(Object.freeze(e.concat([[o,t]])),s.items[t],i);if("number"==typeof n)t=n-1;else{if(n===$l)return $l;n===Dl&&(s.items.splice(t,1),t-=1)}}"function"==typeof n&&"key"===o&&(n=n(t,e))}}return"function"==typeof n?n(t,e):n}Ml.BREAK=$l,Ml.SKIP=Ll,Ml.REMOVE=Dl,Ml.itemAtPath=(e,t)=>{let i=e;for(const[e,n]of t){const t=i?.[e];if(!t||!("items"in t))return;i=t.items[n]}return i},Ml.parentCollection=(e,t)=>{const i=Ml.itemAtPath(e,t.slice(0,-1)),n=t[t.length-1][0],o=i?.[n];if(o&&"items"in o)return o;throw new Error("Parent collection not found")};const Rl="\ufeff",Bl="",jl="",Hl="",Gl=e=>!!e&&"items"in e,Ul=e=>!!e&&("scalar"===e.type||"single-quoted-scalar"===e.type||"double-quoted-scalar"===e.type||"block-scalar"===e.type);function Fl(e){switch(e){case Rl:return"<BOM>";case Bl:return"<DOC>";case jl:return"<FLOW_END>";case Hl:return"<SCALAR>";default:return JSON.stringify(e)}}function Vl(e){switch(e){case Rl:return"byte-order-mark";case Bl:return"doc-mode";case jl:return"flow-error-end";case Hl:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case"\n":case"\r\n":return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"\t":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}var zl=Object.freeze({__proto__:null,BOM:Rl,DOCUMENT:Bl,FLOW_END:jl,SCALAR:Hl,createScalarToken:Cl,isCollection:Gl,isScalar:Ul,prettyToken:Fl,resolveAsScalar:El,setScalarValue:Ol,stringify:kl,tokenType:Vl,visit:Ml});function ql(e){switch(e){case void 0:case" ":case"\n":case"\r":case"\t":return!0;default:return!1}}const Kl=new Set("0123456789ABCDEFabcdef"),Wl=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Yl=new Set(",[]{}"),Jl=new Set(" ,[]{}\n\r\t"),Xl=e=>!e||Jl.has(e);class Ql{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if("string"!=typeof e)throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let i=this.next??"stream";for(;i&&(t||this.hasChars(1));)i=yield*this.parseNext(i)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;" "===t||"\t"===t;)t=this.buffer[++e];return!t||"#"===t||"\n"===t||"\r"===t&&"\n"===this.buffer[e+1]}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let i=0;for(;" "===t;)t=this.buffer[++i+e];if("\r"===t){const t=this.buffer[i+e+1];if("\n"===t||!t&&!this.atEnd)return e+i+1}return"\n"===t||i>=this.indentNext||!t&&!this.atEnd?e+i:-1}if("-"===t||"."===t){const t=this.buffer.substr(e,3);if(("---"===t||"..."===t)&&ql(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return("number"!=typeof e||-1!==e&&e<this.pos)&&(e=this.buffer.indexOf("\n",this.pos),this.lineEndPos=e),-1===e?this.atEnd?this.buffer.substring(this.pos):null:("\r"===this.buffer[e-1]&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(null===e)return this.setNext("stream");if(e[0]===Rl&&(yield*this.pushCount(1),e=e.substring(1)),"%"===e[0]){let t=e.length,i=e.indexOf("#");for(;-1!==i;){const n=e[i-1];if(" "===n||"\t"===n){t=i-1;break}i=e.indexOf("#",i+1)}for(;;){const i=e[t-1];if(" "!==i&&"\t"!==i)break;t-=1}const n=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-n),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield Bl,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if("-"===e||"."===e){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const e=this.peek(3);if(("---"===e||"..."===e)&&ql(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,"---"===e?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!ql(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if(("-"===e||"?"===e||":"===e)&&ql(t)){const e=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=e,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(null===e)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Xl),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=(yield*this.parseBlockScalarHeader()),t+=(yield*this.pushSpaces(!0)),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,i=-1;do{e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=i=t):t=0,t+=(yield*this.pushSpaces(!0))}while(e+t>0);const n=this.getLine();if(null===n)return this.setNext("flow");if(-1!==i&&i<this.indentNext&&"#"!==n[0]||0===i&&(n.startsWith("---")||n.startsWith("..."))&&ql(n[3])){if(!(i===this.indentNext-1&&1===this.flowLevel&&("]"===n[0]||"}"===n[0])))return this.flowLevel=0,yield jl,yield*this.parseLineStart()}let o=0;for(;","===n[o];)o+=(yield*this.pushCount(1)),o+=(yield*this.pushSpaces(!0)),this.flowKey=!1;switch(o+=(yield*this.pushIndicators()),n[o]){case void 0:return"flow";case"#":return yield*this.pushCount(n.length-o),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Xl),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const e=this.charAt(1);if(this.flowKey||ql(e)||","===e)return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if("'"===e)for(;-1!==t&&"'"===this.buffer[t+1];)t=this.buffer.indexOf("'",t+2);else for(;-1!==t;){let e=0;for(;"\\"===this.buffer[t-1-e];)e+=1;if(e%2==0)break;t=this.buffer.indexOf('"',t+1)}const i=this.buffer.substring(0,t);let n=i.indexOf("\n",this.pos);if(-1!==n){for(;-1!==n;){const e=this.continueScalar(n+1);if(-1===e)break;n=i.indexOf("\n",e)}-1!==n&&(t=n-("\r"===i[n-1]?2:1))}if(-1===t){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if("+"===t)this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if("-"!==t)break}return yield*this.pushUntil(e=>ql(e)||"#"===e)}*parseBlockScalar(){let e,t=this.pos-1,i=0;e:for(let n=this.pos;e=this.buffer[n];++n)switch(e){case" ":i+=1;break;case"\n":t=n,i=0;break;case"\r":{const e=this.buffer[n+1];if(!e&&!this.atEnd)return this.setNext("block-scalar");if("\n"===e)break}default:break e}if(!e&&!this.atEnd)return this.setNext("block-scalar");if(i>=this.indentNext){-1===this.blockScalarIndent?this.indentNext=i:this.indentNext=this.blockScalarIndent+(0===this.indentNext?1:this.indentNext);do{const e=this.continueScalar(t+1);if(-1===e)break;t=this.buffer.indexOf("\n",e)}while(-1!==t);if(-1===t){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}let n=t+1;for(e=this.buffer[n];" "===e;)e=this.buffer[++n];if("\t"===e){for(;"\t"===e||" "===e||"\r"===e||"\n"===e;)e=this.buffer[++n];t=n-1}else if(!this.blockScalarKeep)for(;;){let e=t-1,n=this.buffer[e];"\r"===n&&(n=this.buffer[--e]);const o=e;for(;" "===n;)n=this.buffer[--e];if(!("\n"===n&&e>=this.pos&&e+1+i>o))break;t=e}return yield Hl,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t,i=this.pos-1,n=this.pos-1;for(;t=this.buffer[++n];)if(":"===t){const t=this.buffer[n+1];if(ql(t)||e&&Yl.has(t))break;i=n}else if(ql(t)){let o=this.buffer[n+1];if("\r"===t&&("\n"===o?(n+=1,t="\n",o=this.buffer[n+1]):i=n),"#"===o||e&&Yl.has(o))break;if("\n"===t){const e=this.continueScalar(n+1);if(-1===e)break;n=Math.max(n,e-2)}}else{if(e&&Yl.has(t))break;i=n}return t||this.atEnd?(yield Hl,yield*this.pushToIndex(i+1,!0),e?"flow":"doc"):this.setNext("plain-scalar")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const i=this.buffer.slice(this.pos,e);return i?(yield i,this.pos+=i.length,i.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Xl))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,t=this.charAt(1);if(ql(t)||e&&Yl.has(t))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if("<"===this.charAt(1)){let e=this.pos+2,t=this.buffer[e];for(;!ql(t)&&">"!==t;)t=this.buffer[++e];return yield*this.pushToIndex(">"===t?e+1:e,!1)}{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Wl.has(t))t=this.buffer[++e];else{if("%"!==t||!Kl.has(this.buffer[e+1])||!Kl.has(this.buffer[e+2]))break;t=this.buffer[e+=3]}return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return"\n"===e?yield*this.pushCount(1):"\r"===e&&"\n"===this.charAt(1)?yield*this.pushCount(2):0}*pushSpaces(e){let t,i=this.pos-1;do{t=this.buffer[++i]}while(" "===t||e&&"\t"===t);const n=i-this.pos;return n>0&&(yield this.buffer.substr(this.pos,n),this.pos=i),n}*pushUntil(e){let t=this.pos,i=this.buffer[t];for(;!e(i);)i=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Zl{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,i=this.lineStarts.length;for(;t<i;){const n=t+i>>1;this.lineStarts[n]<e?t=n+1:i=n}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(0===t)return{line:0,col:e};return{line:t,col:e-this.lineStarts[t-1]+1}}}}function ec(e,t){for(let i=0;i<e.length;++i)if(e[i].type===t)return!0;return!1}function tc(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function ic(e){switch(e?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function nc(e){switch(e.type){case"document":return e.start;case"block-map":{const t=e.items[e.items.length-1];return t.sep??t.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function oc(e){if(0===e.length)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;"space"===e[++t]?.type;);return e.splice(t,e.length)}function sc(e){if("flow-seq-start"===e.start.type)for(const t of e.items)!t.sep||t.value||ec(t.start,"explicit-key-ind")||ec(t.sep,"map-value-ind")||(t.key&&(t.value=t.key),delete t.key,ic(t.value)?t.value.end?Array.prototype.push.apply(t.value.end,t.sep):t.value.end=t.sep:Array.prototype.push.apply(t.start,t.sep),delete t.sep)}class rc{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Ql,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&0===this.offset&&this.onNewLine(0);for(const i of this.lexer.lex(e,t))yield*this.next(i);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar)return this.atScalar=!1,yield*this.step(),void(this.offset+=e.length);const t=Vl(e);if(t)if("scalar"===t)this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&" "===e[0]&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const t=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:t,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if("doc-end"!==this.type||"doc-end"===e?.type){if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}else{for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source})}}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(t)if(0===this.stack.length)yield t;else{const e=this.peek(1);switch("block-scalar"===t.type?t.indent="indent"in e?e.indent:0:"flow-collection"===t.type&&"document"===e.type&&(t.indent=0),"flow-collection"===t.type&&sc(t),e.type){case"document":e.value=t;break;case"block-scalar":e.props.push(t);break;case"block-map":{const i=e.items[e.items.length-1];if(i.value)return e.items.push({start:[],key:t,sep:[]}),void(this.onKeyLine=!0);if(!i.sep)return Object.assign(i,{key:t,sep:[]}),void(this.onKeyLine=!i.explicitKey);i.value=t;break}case"block-seq":{const i=e.items[e.items.length-1];i.value?e.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{const i=e.items[e.items.length-1];return void(!i||i.value?e.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]}))}default:yield*this.pop(),yield*this.pop(t)}if(!("document"!==e.type&&"block-map"!==e.type&&"block-seq"!==e.type||"block-map"!==t.type&&"block-seq"!==t.type)){const i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&-1===tc(i.start)&&(0===t.indent||i.start.every(e=>"comment"!==e.type||e.indent<t.indent))&&("document"===e.type?e.end=i.start:e.items.push({start:i.start}),t.items.splice(-1,1))}}else{const e="Tried to pop an empty stack";yield{type:"error",offset:this.offset,source:"",message:e}}}*stream(){switch(this.type){case"directive-line":return void(yield{type:"directive",offset:this.offset,source:this.source});case"byte-order-mark":case"space":case"comment":case"newline":return void(yield this.sourceToken);case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};return"doc-start"===this.type&&e.start.push(this.sourceToken),void this.stack.push(e)}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":return void(-1!==tc(e.start)?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken));case"anchor":case"tag":case"space":case"comment":case"newline":return void e.start.push(this.sourceToken)}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if("map-value-ind"===this.type){const t=oc(nc(this.peek(2)));let i;e.end?(i=e.end,i.push(this.sourceToken),delete e.end):i=[this.sourceToken];const n={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:t,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=n}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":return void e.props.push(this.sourceToken);case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let e=this.source.indexOf("\n")+1;for(;0!==e;)this.onNewLine(this.offset+e),e=this.source.indexOf("\n",e)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const i="end"in t.value?t.value.end:void 0,n=Array.isArray(i)?i[i.length-1]:void 0;"comment"===n?.type?i?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2],n=i?.value?.end;if(Array.isArray(n))return Array.prototype.push.apply(n,t.start),n.push(this.sourceToken),void e.items.pop()}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const i=!this.onKeyLine&&this.indent===e.indent,n=i&&(t.sep||t.explicitKey)&&"seq-item-ind"!==this.type;let o=[];if(n&&t.sep&&!t.value){const i=[];for(let n=0;n<t.sep.length;++n){const o=t.sep[n];switch(o.type){case"newline":i.push(n);break;case"space":break;case"comment":o.indent>e.indent&&(i.length=0);break;default:i.length=0}}i.length>=2&&(o=t.sep.splice(i[1]))}switch(this.type){case"anchor":case"tag":return void(n||t.value?(o.push(this.sourceToken),e.items.push({start:o}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken));case"explicit-key-ind":return t.sep||t.explicitKey?n||t.value?(o.push(this.sourceToken),e.items.push({start:o,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}):(t.start.push(this.sourceToken),t.explicitKey=!0),void(this.onKeyLine=!0);case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(ec(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]});else if(ic(t.key)&&!ec(t.sep,"newline")){const e=oc(t.start),i=t.key,n=t.sep;n.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:e,key:i,sep:n}]})}else o.length>0?t.sep=t.sep.concat(o,this.sourceToken):t.sep.push(this.sourceToken);else if(ec(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const e=oc(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:e,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||n?e.items.push({start:o,key:null,sep:[this.sourceToken]}):ec(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return void(this.onKeyLine=!0);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);return void(n||t.value?(e.items.push({start:o,key:i,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(i):(Object.assign(t,{key:i,sep:[]}),this.onKeyLine=!0))}default:{const n=this.startBlockValue(e);if(n){if("block-seq"===n.type){if(!t.explicitKey&&t.sep&&!ec(t.sep,"newline"))return void(yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source}))}else i&&e.items.push({start:o});return void this.stack.push(n)}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const i="end"in t.value?t.value.end:void 0,n=Array.isArray(i)?i[i.length-1]:void 0;"comment"===n?.type?i?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2],n=i?.value?.end;if(Array.isArray(n))return Array.prototype.push.apply(n,t.start),n.push(this.sourceToken),void e.items.pop()}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;return void t.start.push(this.sourceToken);case"seq-item-ind":if(this.indent!==e.indent)break;return void(t.value||ec(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken))}if(this.indent>e.indent){const t=this.startBlockValue(e);if(t)return void this.stack.push(t)}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if("flow-error-end"===this.type){let e;do{yield*this.pop(),e=this.peek(1)}while("flow-collection"===e?.type)}else if(0===e.end.length){switch(this.type){case"comma":case"explicit-key-ind":return void(!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken));case"map-value-ind":return void(!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]}));case"space":case"comment":case"newline":case"anchor":case"tag":return void(!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken));case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);return void(!t||t.value?e.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]}))}case"flow-map-end":case"flow-seq-end":return void e.end.push(this.sourceToken)}const i=this.startBlockValue(e);i?this.stack.push(i):(yield*this.pop(),yield*this.step())}else{const t=this.peek(2);if("block-map"===t.type&&("map-value-ind"===this.type&&t.indent===e.indent||"newline"===this.type&&!t.items[t.items.length-1].sep))yield*this.pop(),yield*this.step();else if("map-value-ind"===this.type&&"flow-collection"!==t.type){const i=oc(nc(t));sc(e);const n=e.end.splice(1,e.end.length);n.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:n}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let e=this.source.indexOf("\n")+1;for(;0!==e;)this.onNewLine(this.offset+e),e=this.source.indexOf("\n",e)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=oc(nc(e));return t.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:t,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=oc(nc(e));return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:t,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return"comment"===this.type&&(!(this.indent<=t)&&e.every(e=>"newline"===e.type||"space"===e.type))}*documentEnd(e){"doc-mode"!==this.type&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],"newline"===this.type&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],"newline"===this.type&&(yield*this.pop())}}}function ac(e){const t=!1!==e.prettyErrors;return{lineCounter:e.lineCounter||t&&new Zl||null,prettyErrors:t}}function lc(e,t={}){const{lineCounter:i,prettyErrors:n}=ac(t),o=new rc(i?.addNewLine),s=new Al(t),r=Array.from(s.compose(o.parse(e)));if(n&&i)for(const t of r)t.errors.forEach(Ha(e,i)),t.warnings.forEach(Ha(e,i));return r.length>0?r:Object.assign([],{empty:!0},s.streamInfo())}function cc(e,t={}){const{lineCounter:i,prettyErrors:n}=ac(t),o=new rc(i?.addNewLine),s=new Al(t);let r=null;for(const t of s.compose(o.parse(e),!0,e.length))if(r){if("silent"!==r.options.logLevel){r.errors.push(new Ba(t.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}}else r=t;return n&&i&&(r.errors.forEach(Ha(e,i)),r.warnings.forEach(Ha(e,i))),r}function dc(e,t,i){let n;"function"==typeof t?n=t:void 0===i&&t&&"object"==typeof t&&(i=t);const o=cc(e,i);if(!o)return null;if(o.warnings.forEach(e=>mr(o.options.logLevel,e)),o.errors.length>0){if("silent"!==o.options.logLevel)throw o.errors[0];o.errors=[]}return o.toJS(Object.assign({reviver:n},i))}function hc(e,t,i){let n=null;if("function"==typeof t||Array.isArray(t)?n=t:void 0===i&&t&&(i=t),"string"==typeof i&&(i=i.length),"number"==typeof i){const e=Math.round(i);i=e<1?void 0:e>8?{indent:8}:{indent:e}}if(void 0===e){const{keepUndefined:e}=i??t??{};if(!e)return}return cs(e)&&!n?e.toString(i):new Ma(e,n,i).toString(i)}var uc=Object.freeze({__proto__:null,Alias:Rs,CST:zl,Composer:Al,Document:Ma,Lexer:Ql,LineCounter:Zl,Pair:Or,Parser:rc,Scalar:Hs,Schema:La,YAMLError:Ra,YAMLMap:Tr,YAMLParseError:Ba,YAMLSeq:Lr,YAMLWarning:ja,isAlias:ls,isCollection:ps,isDocument:cs,isMap:ds,isNode:gs,isPair:hs,isScalar:us,isSeq:fs,parse:dc,parseAllDocuments:lc,parseDocument:cc,stringify:hc,visit:vs,visitAsync:As});const fc=()=>Math.random().toString(16).slice(2),pc=async()=>{const e=`${_}?hash=${fc()}`;try{const t=await fetch(e,{cache:"no-store"}),i=await t.text();return uc.parse(i)}catch(e){return}},gc=async e=>{let t=Ao()?await pc():Eo();if(t){t={...C,...t};let i=Qo(t,e,!0);if("object"==typeof i&&(i=i.valid),!i&&!Ao())return t=Zo(t,e),yo(w.UI_CONFIG,t),yo(w.HIDDEN_PANELS,t.hidden_items||[]),t;if(!i&&Ao())return t=C,t;t=Wo(t),es(t)}if(t)return t},mc=/^[a-z0-9]+:[a-z0-9\-]+$/,_c=e=>mc.test(e),bc=e=>e&&0!==e.length?`mdi:alpha-${e[0].toLowerCase()}-box`:"mdi:alpha-a-box",yc=(e={},t=[])=>{const i=JSON.parse(bo(w.COLLAPSE)||"[]"),n=Object.keys(e),o=i.filter(e=>n.includes(e));o.length!==i.length&&yo(w.COLLAPSE,o);return new Set([...o,...t])},vc=(e,t,i,n)=>{const[o,s,r]=e.split(".",3);return Number(o)>t||Number(o)===t&&Number(s)>=i||void 0!==n};function wc(){(async()=>{new Promise(e=>{[w.UI_CONFIG,w.PANEL_ORDER,w.COLLAPSE,w.HIDDEN_PANELS].forEach(e=>{window.localStorage.removeItem(e)}),e()})})().then(()=>{})}const Ac=e=>{if(!e)return{};const t={};for(const[i,n]of Object.entries(e))t[i]=!0===n?{icon:bc(i)}:{icon:n.icon};return t};function Ec(e){return Ec="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ec(e)}var Cc=/^\s+/,Oc=/\s+$/;function Sc(e,t){if(t=t||{},(e=e||"")instanceof Sc)return e;if(!(this instanceof Sc))return new Sc(e,t);var i=xc(e);this._originalInput=e,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||i.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function xc(e){var t={r:0,g:0,b:0},i=1,n=null,o=null,s=null,r=!1,a=!1;return"string"==typeof e&&(e=cd(e)),"object"==Ec(e)&&(ld(e.r)&&ld(e.g)&&ld(e.b)?(t=Ic(e.r,e.g,e.b),r=!0,a="%"===String(e.r).substr(-1)?"prgb":"rgb"):ld(e.h)&&ld(e.s)&&ld(e.v)?(n=od(e.s),o=od(e.v),t=$c(e.h,n,o),r=!0,a="hsv"):ld(e.h)&&ld(e.s)&&ld(e.l)&&(n=od(e.s),s=od(e.l),t=Nc(e.h,n,s),r=!0,a="hsl"),e.hasOwnProperty("a")&&(i=e.a)),i=Xc(i),{ok:r,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:i}}function Ic(e,t,i){return{r:255*Qc(e,255),g:255*Qc(t,255),b:255*Qc(i,255)}}function kc(e,t,i){e=Qc(e,255),t=Qc(t,255),i=Qc(i,255);var n,o,s=Math.max(e,t,i),r=Math.min(e,t,i),a=(s+r)/2;if(s==r)n=o=0;else{var l=s-r;switch(o=a>.5?l/(2-s-r):l/(s+r),s){case e:n=(t-i)/l+(t<i?6:0);break;case t:n=(i-e)/l+2;break;case i:n=(e-t)/l+4}n/=6}return{h:n,s:o,l:a}}function Nc(e,t,i){var n,o,s;function r(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*(t-e)*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}if(e=Qc(e,360),t=Qc(t,100),i=Qc(i,100),0===t)n=o=s=i;else{var a=i<.5?i*(1+t):i+t-i*t,l=2*i-a;n=r(l,a,e+1/3),o=r(l,a,e),s=r(l,a,e-1/3)}return{r:255*n,g:255*o,b:255*s}}function Tc(e,t,i){e=Qc(e,255),t=Qc(t,255),i=Qc(i,255);var n,o,s=Math.max(e,t,i),r=Math.min(e,t,i),a=s,l=s-r;if(o=0===s?0:l/s,s==r)n=0;else{switch(s){case e:n=(t-i)/l+(t<i?6:0);break;case t:n=(i-e)/l+2;break;case i:n=(e-t)/l+4}n/=6}return{h:n,s:o,v:a}}function $c(e,t,i){e=6*Qc(e,360),t=Qc(t,100),i=Qc(i,100);var n=Math.floor(e),o=e-n,s=i*(1-t),r=i*(1-o*t),a=i*(1-(1-o)*t),l=n%6;return{r:255*[i,r,s,s,a,i][l],g:255*[a,i,i,r,s,s][l],b:255*[s,s,a,i,i,r][l]}}function Lc(e,t,i,n){var o=[nd(Math.round(e).toString(16)),nd(Math.round(t).toString(16)),nd(Math.round(i).toString(16))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Dc(e,t,i,n,o){var s=[nd(Math.round(e).toString(16)),nd(Math.round(t).toString(16)),nd(Math.round(i).toString(16)),nd(sd(n))];return o&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)&&s[3].charAt(0)==s[3].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function Mc(e,t,i,n){return[nd(sd(n)),nd(Math.round(e).toString(16)),nd(Math.round(t).toString(16)),nd(Math.round(i).toString(16))].join("")}function Pc(e,t){t=0===t?0:t||10;var i=Sc(e).toHsl();return i.s-=t/100,i.s=Zc(i.s),Sc(i)}function Rc(e,t){t=0===t?0:t||10;var i=Sc(e).toHsl();return i.s+=t/100,i.s=Zc(i.s),Sc(i)}function Bc(e){return Sc(e).desaturate(100)}function jc(e,t){t=0===t?0:t||10;var i=Sc(e).toHsl();return i.l+=t/100,i.l=Zc(i.l),Sc(i)}function Hc(e,t){t=0===t?0:t||10;var i=Sc(e).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-t/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-t/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-t/100*255))),Sc(i)}function Gc(e,t){t=0===t?0:t||10;var i=Sc(e).toHsl();return i.l-=t/100,i.l=Zc(i.l),Sc(i)}function Uc(e,t){var i=Sc(e).toHsl(),n=(i.h+t)%360;return i.h=n<0?360+n:n,Sc(i)}function Fc(e){var t=Sc(e).toHsl();return t.h=(t.h+180)%360,Sc(t)}function Vc(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var i=Sc(e).toHsl(),n=[Sc(e)],o=360/t,s=1;s<t;s++)n.push(Sc({h:(i.h+s*o)%360,s:i.s,l:i.l}));return n}function zc(e){var t=Sc(e).toHsl(),i=t.h;return[Sc(e),Sc({h:(i+72)%360,s:t.s,l:t.l}),Sc({h:(i+216)%360,s:t.s,l:t.l})]}function qc(e,t,i){t=t||6,i=i||30;var n=Sc(e).toHsl(),o=360/i,s=[Sc(e)];for(n.h=(n.h-(o*t>>1)+720)%360;--t;)n.h=(n.h+o)%360,s.push(Sc(n));return s}function Kc(e,t){t=t||6;for(var i=Sc(e).toHsv(),n=i.h,o=i.s,s=i.v,r=[],a=1/t;t--;)r.push(Sc({h:n,s:o,v:s})),s=(s+a)%1;return r}Sc.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,i,n=this.toRgb();return e=n.r/255,t=n.g/255,i=n.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(e){return this._a=Xc(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Tc(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Tc(this._r,this._g,this._b),t=Math.round(360*e.h),i=Math.round(100*e.s),n=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+i+"%, "+n+"%)":"hsva("+t+", "+i+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=kc(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=kc(this._r,this._g,this._b),t=Math.round(360*e.h),i=Math.round(100*e.s),n=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+i+"%, "+n+"%)":"hsla("+t+", "+i+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return Lc(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return Dc(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Qc(this._r,255))+"%",g:Math.round(100*Qc(this._g,255))+"%",b:Math.round(100*Qc(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*Qc(this._r,255))+"%, "+Math.round(100*Qc(this._g,255))+"%, "+Math.round(100*Qc(this._b,255))+"%)":"rgba("+Math.round(100*Qc(this._r,255))+"%, "+Math.round(100*Qc(this._g,255))+"%, "+Math.round(100*Qc(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(Yc[Lc(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+Mc(this._r,this._g,this._b,this._a),i=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var o=Sc(e);i="#"+Mc(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+i+")"},toString:function(e){var t=!!e;e=e||this._format;var i=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(i=this.toRgbString()),"prgb"===e&&(i=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(i=this.toHexString()),"hex3"===e&&(i=this.toHexString(!0)),"hex4"===e&&(i=this.toHex8String(!0)),"hex8"===e&&(i=this.toHex8String()),"name"===e&&(i=this.toName()),"hsl"===e&&(i=this.toHslString()),"hsv"===e&&(i=this.toHsvString()),i||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return Sc(this.toString())},_applyModification:function(e,t){var i=e.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(jc,arguments)},brighten:function(){return this._applyModification(Hc,arguments)},darken:function(){return this._applyModification(Gc,arguments)},desaturate:function(){return this._applyModification(Pc,arguments)},saturate:function(){return this._applyModification(Rc,arguments)},greyscale:function(){return this._applyModification(Bc,arguments)},spin:function(){return this._applyModification(Uc,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(qc,arguments)},complement:function(){return this._applyCombination(Fc,arguments)},monochromatic:function(){return this._applyCombination(Kc,arguments)},splitcomplement:function(){return this._applyCombination(zc,arguments)},triad:function(){return this._applyCombination(Vc,[3])},tetrad:function(){return this._applyCombination(Vc,[4])}},Sc.fromRatio=function(e,t){if("object"==Ec(e)){var i={};for(var n in e)e.hasOwnProperty(n)&&(i[n]="a"===n?e[n]:od(e[n]));e=i}return Sc(e,t)},Sc.equals=function(e,t){return!(!e||!t)&&Sc(e).toRgbString()==Sc(t).toRgbString()},Sc.random=function(){return Sc.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},Sc.mix=function(e,t,i){i=0===i?0:i||50;var n=Sc(e).toRgb(),o=Sc(t).toRgb(),s=i/100;return Sc({r:(o.r-n.r)*s+n.r,g:(o.g-n.g)*s+n.g,b:(o.b-n.b)*s+n.b,a:(o.a-n.a)*s+n.a})},Sc.readability=function(e,t){var i=Sc(e),n=Sc(t);return(Math.max(i.getLuminance(),n.getLuminance())+.05)/(Math.min(i.getLuminance(),n.getLuminance())+.05)},Sc.isReadable=function(e,t,i){var n,o,s=Sc.readability(e,t);switch(o=!1,(n=dd(i)).level+n.size){case"AAsmall":case"AAAlarge":o=s>=4.5;break;case"AAlarge":o=s>=3;break;case"AAAsmall":o=s>=7}return o},Sc.mostReadable=function(e,t,i){var n,o,s,r,a=null,l=0;o=(i=i||{}).includeFallbackColors,s=i.level,r=i.size;for(var c=0;c<t.length;c++)(n=Sc.readability(e,t[c]))>l&&(l=n,a=Sc(t[c]));return Sc.isReadable(e,a,{level:s,size:r})||!o?a:(i.includeFallbackColors=!1,Sc.mostReadable(e,["#fff","#000"],i))};var Wc=Sc.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Yc=Sc.hexNames=Jc(Wc);function Jc(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function Xc(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Qc(e,t){td(e)&&(e="100%");var i=id(e);return e=Math.min(t,Math.max(0,parseFloat(e))),i&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function Zc(e){return Math.min(1,Math.max(0,e))}function ed(e){return parseInt(e,16)}function td(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function id(e){return"string"==typeof e&&-1!=e.indexOf("%")}function nd(e){return 1==e.length?"0"+e:""+e}function od(e){return e<=1&&(e=100*e+"%"),e}function sd(e){return Math.round(255*parseFloat(e)).toString(16)}function rd(e){return ed(e)/255}var ad=function(){var e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",t="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",i="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function ld(e){return!!ad.CSS_UNIT.exec(e)}function cd(e){e=e.replace(Cc,"").replace(Oc,"").toLowerCase();var t,i=!1;if(Wc[e])e=Wc[e],i=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=ad.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=ad.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=ad.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=ad.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=ad.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=ad.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=ad.hex8.exec(e))?{r:ed(t[1]),g:ed(t[2]),b:ed(t[3]),a:rd(t[4]),format:i?"name":"hex8"}:(t=ad.hex6.exec(e))?{r:ed(t[1]),g:ed(t[2]),b:ed(t[3]),format:i?"name":"hex"}:(t=ad.hex4.exec(e))?{r:ed(t[1]+""+t[1]),g:ed(t[2]+""+t[2]),b:ed(t[3]+""+t[3]),a:rd(t[4]+""+t[4]),format:i?"name":"hex8"}:!!(t=ad.hex3.exec(e))&&{r:ed(t[1]+""+t[1]),g:ed(t[2]+""+t[2]),b:ed(t[3]+""+t[3]),format:i?"name":"hex"}}function dd(e){var t,i;return"AA"!==(t=((e=e||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==t&&(t="AA"),"small"!==(i=(e.size||"small").toLowerCase())&&"large"!==i&&(i="small"),{level:t,size:i}}const hd=(e,t=1)=>{const i=Sc(e);if(!i.isValid())return;return i.setAlpha(i.getAlpha()/t).toRgbString()},ud=e=>{if(!e)return;return e.replace(/\s*!important/g,"").replace(/;/g,"").replace(/:/g,"")},fd=e=>{if(!e||0===Object.keys(e).length)return null;let t=":host {";return Object.entries(e).forEach(([e,i])=>{null!=i&&(t+=`${e}: ${ud(i)} !important;`)}),t+="}",t},pd=e=>{if(!e||0===Object.keys(e).length)return null;const t={};return Object.entries(e).forEach(([e,i])=>{null!=i&&(t[e]=`${ud(i)} !important`)}),t},gd=e=>{const t=window.getComputedStyle(e??document.documentElement),i=t.getPropertyValue("--divider-color"),n=t.getPropertyValue("--scrollbar-thumb-color"),o=hd(i,3)||i,s=i,r=hd(i,3)||n,a=t.getPropertyValue("--sidebar-text-color"),l=t.getPropertyValue("--primary-text-color");return{divider_color:i,background_color:o,border_top_color:s,scrollbar_thumb_color:r,custom_sidebar_background_color:t.getPropertyValue("--sidebar-background-color"),divider_text_color:a||l,sidebar_icon_color:t.getPropertyValue("--sidebar-icon-color")}},md=(e,t,i,n)=>{n=n||{},i=null==i?{}:i;const o=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,e.dispatchEvent(o),o};var _d;!function(e){e.CONFIRM="confirm",e.PROMPT="prompt",e.ALERT="alert"}(_d||(_d={}));const bd=async(e,t,i,n)=>{if("function"==typeof window.loadCardHelpers){const o=await window.loadCardHelpers();return await o.showConfirmationDialog(e,{title:f,text:t,confirmText:i,dismissText:n||"Cancel"})}return new Promise(e=>{e(window.confirm(`${f}\n\n${t}`))})},yd=async(e,t,i,n,o)=>{if("function"==typeof window.loadCardHelpers){const s=await window.loadCardHelpers();return await s.showPromptDialog(e,{title:f,text:t,placeholder:i,confirmText:n,inputType:"string",defaultValue:"",cancelText:o||"Cancel",confirmation:!0})}return new Promise(e=>{e(window.prompt(`${f}\n\n${t}`,i))})},vd=async(e,t,i)=>{if("function"==typeof window.loadCardHelpers){const n=await window.loadCardHelpers();return void await n.showAlertDialog(e,{title:f,text:t,confirmText:i})}return new Promise(e=>{window.alert(`${f}\n\n${t}`),e()})},wd=(e,t)=>({...t,title:t.title??f,confirmation:"confirm"===e,prompt:"prompt"===e}),Ad=async(e,t,i)=>{if("function"==typeof window.loadCardHelpers){const n=await window.loadCardHelpers();switch(t){case"confirm":return await n.showConfirmationDialog(e,wd(t,i));case"prompt":return await n.showPromptDialog(e,wd(t,i));case"alert":return await n.showAlertDialog(e,wd(t,i))}}const n=wd(t,i);switch(t){case"confirm":return window.confirm(`${n.title}\n\n${n.text}`);case"prompt":const e=i;return window.prompt(`${n.title}\n\n${n.text}`,e.placeholder||e.defaultValue||"");case"alert":return void window.alert(`${n.title}\n\n${n.text}`)}},Ed=[{headline:"Settings dialog",supportingText:"Open the settings dialog to customize your sidebar.",action:"open_dialog",btnText:"Open",canDisable:!1},{headline:"Clear frontend cache",supportingText:"Clear the frontend cache to fix potential issues.",action:"clear_cache",btnText:"Clear",canDisable:!1},{headline:"Download configuration",supportingText:"Download the current configuration as a yaml file.",action:"download_config",btnText:"Download",canDisable:!0},{headline:"Delete saved configuration",supportingText:"Delete the saved configuration in the browser's local storage.",action:"delete_config",btnText:"Delete",variant:"danger",canDisable:!0}];let Cd=class extends qe{constructor(){super(...arguments),this._handleAction=async e=>{switch(e){case"open_dialog":this.organizer._dialogManager._showConfigDialogEditor();break;case"delete_config":await this.organizer._dialogManager._confirm("Are you sure you want to delete the saved configuration? This action cannot be undone.","Delete","Cancel")&&(wc(),this.organizer._hasSidebarConfig||this.organizer._reloadWindow(3e3));break;case"clear_cache":it();break;case"download_config":const e=uc.stringify(this.organizer._config),t=new Blob([e],{type:"application/x-yaml"}),i=URL.createObjectURL(t),n=m+"_"+(new Date).toISOString().replace(/:/g,"-").split(".",1).join()+".yaml";tt(i,n),setTimeout(()=>{URL.revokeObjectURL(i)},0)}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return Se`
      <ha-card .header=${f}>
        <div class="card-content">
          The following settings are used to control the behavior of the Sidebar Organizer plugin.
        </div>
        <ha-md-list>
          ${Ed.map(e=>{const t=e.canDisable&&!this.organizer._hasSidebarConfig;return Se`
              ${"delete_config"===e.action?Se`<wa-divider style="--spacing: 0;"></wa-divider>`:""}
              <ha-md-list-item>
                <span slot="headline">${e.headline}</span>
                ${e.supportingText?Se`<span slot="supporting-text">${e.supportingText}</span>`:""}
                <ha-button
                  slot="end"
                  appearance="plain"
                  size="small"
                  variant=${e.variant||"brand"}
                  .disabled=${t}
                  @click=${()=>this._handleAction(e.action)}
                >
                  ${e.btnText}
                </ha-button>
              </ha-md-list-item>
            `})}
        </ha-md-list>
      </ha-card>
    `}};ft([_t({attribute:!1})],Cd.prototype,"organizer",void 0),Cd=ft([pt("so-profile-section")],Cd);const Od=()=>Promise.resolve().then(function(){return Hg}),Sd=()=>Promise.resolve().then(function(){return Ug}),xd=(e,i,n=!1)=>{md(e,"show-dialog",{dialogTag:n?t.SIDEBAR_CONFIG_DIALOG_WA:t.SIDEBAR_CONFIG_DIALOG_WRAPPER,dialogImport:n?Sd:Od,dialogParams:i})};class Id{constructor(e,i,n){this._checkStorageOrder=async()=>{if(!Co())return;if(this._organizer._baseOrder.length>0)return void yo(w.PANEL_ORDER,[...this._organizer._baseOrder]);const{order:e,hidden:t}=await $o(this.hass);yo(w.PANEL_ORDER,[...e]),yo(w.HIDDEN_PANELS,[...t])},this._showConfigDialogEditor=async()=>{const e=vc(this.hass.config.version,2026,3);this._haDrawer.open=!1,this._organizer.HaSidebar.editMode=!1,await this._checkStorageOrder(),xd(this.haElement,{config:this._organizer._config},e)},this._createProfileSectionComponent=async()=>{const e=document.createElement(t.SO_PROFILE_SECTION);return e.organizer=this._organizer,e},this._haDrawer=e,this.haElement=i,this._organizer=n,this.hass=i.hass}async _showDialogBox(e,t){return await Ad(this._haDrawer,e,t)}async _alert(e,t){return await this._showDialogBox("alert",{text:e,confirmText:t})}async _confirm(e,t="OK",i){return await this._showDialogBox("confirm",{text:e,confirmText:t,dismissText:i})}async _prompt(e,t,i="OK",n="Cancel"){return await this._showDialogBox("prompt",{text:e,placeholder:t,confirmText:i,dismissText:n,inputType:"string",defaultValue:""})}async _addDialogUserDataClear(){if(await this._confirm(O.CLEAN_USER_DATA,"Clear Data","Cancel"))try{const e=await $o(this.hass);await Tt(this.hass.connection).then(()=>{yo(w.PANEL_ORDER,[...e.order]),yo(w.HIDDEN_PANELS,[...e.hidden])}),await this._alert("Sidebar user data cleared successfully","Show Organizer Dialog"),this._showConfigDialogEditor()}catch(e){await this._alert("Error clearing sidebar user data. See console for details.","OK")}}async _addLegacyEditWarning(){if(await this._confirm(O.LEGACY_EDIT_WARNING,"Edit with Organizer","System Dialog"))return this._showConfigDialogEditor()}async _handleEditModeAttempt(){const e=await this._waitForSidebarDialog();if(!e)return;e._open=!1;if(Boolean(!this._organizer._userHasSidebarSettings&&this._organizer._hasSidebarConfig)){if(await this._confirm(O.HAS_SIDEBAR_CONFIG_WARNING,"Edit with Organizer","Continue"))return e.remove(),this._showConfigDialogEditor()}e._open=!0,this._injectOrganizerButton(e)}_injectOrganizerButton(t){setTimeout(()=>{const i=this._createButtonToOpenOrganizer(t),n=t.shadowRoot?.querySelector(e.ACTION_SLOT)??t.shadowRoot?.querySelector(e.HA_DIALOG_FOOTER).shadowRoot?.querySelector(e.FOOTER);n&&!n.querySelector("ha-button")&&n.prepend(i)},100)}_createButtonToOpenOrganizer(e){const t=document.createElement("ha-button");return t.slot="actions",t.innerText="Switch to Sidebar Organizer",t.addEventListener("click",async()=>{e.closeDialog(),e.remove(),this._organizer._userHasSidebarSettings?this._addDialogUserDataClear():this._showConfigDialogEditor()}),t}async _waitForSidebarDialog(){let e=null;for(let t=0;t<10&&!e;t++)e=await Ze(this.haElement),e||await new Promise(e=>setTimeout(e,100));return e}async _injectSidebarOrganizerElement(i){const n=i.querySelector(t.PROFILE_GENERAL)?.shadowRoot?.querySelector(e.CONTENT);if(n&&!n.querySelector(t.SO_PROFILE_SECTION)){const e=await this._createProfileSectionComponent();n.appendChild(e),n.querySelector(t.SO_PROFILE_SECTION)}}sidebarDispatchEvent(e,t){md(this.haElement,e,t)}}const kd=e=>e.callWS({type:"lovelace/dashboards/list"}),Nd=(e,t)=>e.callWS({type:"lovelace/dashboards/create",...t}),Td=(e,t,i)=>e.callWS({type:"lovelace/dashboards/update",dashboard_id:t,...i}),$d=(e,t)=>e.callWS({type:"lovelace/dashboards/delete",dashboard_id:t});async function Ld(e){return await kd(e).then(e=>{const t=[],i=[];return e.forEach(e=>{e.show_in_sidebar?t.push(e.url_path):i.push(e.url_path)}),{inSidebar:t,notInSidebar:i}})}const Dd=async(e,t)=>{const i=await Ld(e),n=Do(e)||[],o=i.inSidebar.filter(e=>!t.includes(e)),s=[i.notInSidebar,n].flat().filter(e=>t.includes(e));return{currentItems:i,added:o,removed:s}};var Md=Object.freeze({__proto__:null,_getCurrentDashboardItems:Ld,compareDashboardItems:Dd,createDashboard:Nd,deleteDashboard:$d,fetchDashboards:kd,updateDashboard:Td});const Pd=(e,t)=>{if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let i,n;if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(i=n;0!==i--;)if(e[i]!==t[i])return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;for(i of e.entries())if(i[1]!==t.get(i[0]))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i of e.entries())if(!t.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!==t.length)return!1;for(i=n;0!==i--;)if(e[i]!==t[i])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const o=Object.keys(e);if(n=o.length,n!==Object.keys(t).length)return!1;for(i=n;0!==i--;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=n;0!==i--;){const n=o[i];if(e[n]!==t[n])return!1}return!0}return e!=e&&t!=t},Rd=(e,t)=>md(e,"hass-notification",t),Bd=async e=>e.callWS({type:"config/auth/list"});class jd{constructor(e,t){this._panelHelper=_o,this._computePanels=Po,this._dashboardState={},this._getUsers=async()=>await Bd(this.hass),this._needReloadToast=()=>{const e={id:"sidebar-organizer-panels-changed-reload",message:`${u.toUpperCase()}: Changes detected in sidebar panels. Reload page to apply changes.`,action:{text:"Reload",action:()=>this._organizer._reloadWindow()},duration:-1,dismissable:!1};Rd(this.haElement,e)},this._showToast=(e,t=1e3)=>{Rd(this.haElement,{message:`${u.toUpperCase()}: ${e}`,duration:t})},this._haNotRunningToast=()=>{const e={id:"sidebar-organizer-ha-not-running",message:`${u.toUpperCase()}: Home Assistant is still starting up. Reload page after Home Assistant has fully started.`,duration:-1,dismissable:!1,action:{text:"Reload",action:()=>this._organizer._reloadWindow()}};Rd(this.haElement,e)},this.haElement=e,this._organizer=t,this.hass=e.hass}_subscribeUserDefaultPanel(){Boolean(this._organizer._userHasSidebarSettings||!this._organizer._hasSidebarConfig)||(this.unsubData=$t(this.hass.connection,"core",({value:e})=>{if(null!==e){const t=e.default_panel;if(t&&this._organizer._baseOrder[0]!==t){const e=so(this.hass,t)||t,i={id:"sidebar-organizer-default-panel-changed",message:`${u.toUpperCase()}: Default panel changed to ${e}. Reload page to apply changes.`,action:{text:"Reload",action:()=>this._handleDefaultPanelChange(t)},duration:-1,dismissable:!1};Rd(this.haElement,i)}}}))}async _subscribeDashboardData(){const e={};e.dashboards=await kd(this.hass),e.defaultPanel=io(this.hass),this._dashboardState=e}async _handleDashboardUpdate(){let e=!1;const{dashboards:t,defaultPanel:i}=this._dashboardState||{},{_baseOrder:n,_config:o}=this._organizer,s=io(this.hass),r=!Pd(i,s),{currentItems:a,added:l,removed:c}=await Dd(this.hass,n),d=Object.values(a).flat().length,h=Boolean(l.length>0||t?.length!==d||t?.length<d);if(r||c.length>0){const t=[...c,i?.url_path||""].filter(Boolean),n={...o},s=Fn(n,[x.CUSTOM,x.BOTTOM,x.BOTTOM_GRID,x.HIDDEN]),r=Bo(s,t);if(!Pd(s,r)){const t={...n,...r};yo(w.UI_CONFIG,t),e=!0}}else h&&(e=!0);return e}_handleDefaultPanelChange(e){const t={...this._organizer._config},i=Bo(Fn(t,[x.CUSTOM,x.BOTTOM,x.BOTTOM_GRID,x.HIDDEN]),[e]),n={...t,...i};yo(w.UI_CONFIG,n),this._organizer._reloadWindow()}resetDashboardState(){this._dashboardState=void 0,this.unsubData=void 0}}const Hd=(e,t,i)=>e.subscribeMessage(e=>t(e),{type:"render_template",...i}),Gd=/{%|{{/,Ud=e=>Gd.test(e),Fd=e=>{if(!e)return!1;if("string"==typeof e)return Ud(e);if("object"==typeof e){return(Array.isArray(e)?e:Object.values(e)).some(e=>e&&Fd(e))}return!1};var Vd=function(){return Vd=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Vd.apply(this,arguments)};function zd(e,t,i,n){return new(i||(i=Promise))(function(t,o){function s(e){try{a(n.next(e))}catch(e){o(e)}}function r(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i(function(e){e(n)})).then(s,r)}a((n=n.apply(e,[])).next())})}function qd(e,t){var i,n,o,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},r=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return r.next=a(0),r.throw=a(1),r.return=a(2),"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(a){return function(l){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(s=0)),s;)try{if(i=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{i=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}"function"==typeof SuppressedError&&SuppressedError;var Kd="$",Wd=":host",Yd="invalid selector",Jd=10,Xd=10,Qd=function(e){var t,i=e[0],n=e[1];return(t=i)&&(t instanceof Document||t instanceof Element||t instanceof ShadowRoot)&&"string"==typeof n};function Zd(e,t){return function(e){return e.split(",").map(function(e){return e.trim()})}(e).map(function(e){var i=function(e){return e.split(Kd).map(function(e){return e.trim()})}(e);return t(i)})}function eh(e,t){var i=t?" If you want to select a shadowRoot, use ".concat(t," instead."):"";return"".concat(e," cannot be used with a selector ending in a shadowRoot (").concat(Kd,").").concat(i)}function th(e){return e instanceof Promise?e:Promise.resolve(e)}function ih(){return"You can not select a shadowRoot (".concat(Kd,") of the document.")}function nh(){return"You can not select a shadowRoot (".concat(Kd,") of a shadowRoot.")}function oh(e,t){for(var i,n,o=null,s=e.length,r=0;r<s;r++){if(0===r)if(e[r].length)o=t.querySelector(e[r]);else{if(t instanceof Document)throw new SyntaxError(ih());if(t instanceof ShadowRoot)throw new SyntaxError(nh());o=(null===(i=t.shadowRoot)||void 0===i?void 0:i.querySelector(e[++r]))||null}else o=(null===(n=o.shadowRoot)||void 0===n?void 0:n.querySelector("".concat(Wd," ").concat(e[r])))||null;if(null===o)return null}return o}function sh(e,t){var i,n=function(e,t){for(var i,n=0,o=t.length;n<o;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return[].concat(i||Array.prototype.slice.call(t))}(0,e),o=n.pop();if(!n.length)return t.querySelectorAll(o);var s=oh(n,t);return(null===(i=null==s?void 0:s.shadowRoot)||void 0===i?void 0:i.querySelectorAll("".concat(Wd," ").concat(o)))||null}function rh(e,t){if(1===e.length&&!e[0].length){if(t instanceof Document)throw new SyntaxError(ih());if(t instanceof ShadowRoot)throw new SyntaxError(nh());return t.shadowRoot}var i=oh(e,t);return(null==i?void 0:i.shadowRoot)||null}function ah(e,t,i,n){for(var o=Zd(e,function(e){if(!e[e.length-1].length)throw new SyntaxError(eh(i,n));return e}),s=o.length,r=0;r<s;r++){var a=oh(o[r],t);if(a)return a}return null}function lh(e,t,i){for(var n=Zd(e,function(e){if(!e[e.length-1].length)throw new SyntaxError(eh(i));return e}),o=n.length,s=0;s<o;s++){var r=sh(n[s],t);if(null==r?void 0:r.length)return r}return document.querySelectorAll(Yd)}function ch(e,t,i,n){for(var o=Zd(e,function(e){if(e.pop().length)throw new SyntaxError(function(e,t){return"".concat(e," must be used with a selector ending in a shadowRoot (").concat(Kd,"). If you don't want to select a shadowRoot, use ").concat(t," instead.")}(i,n));return e}),s=o.length,r=0;r<s;r++){var a=rh(o[r],t);if(a)return a}return null}function dh(e,t,i,n){return zd(this,void 0,void 0,function(){return qd(this,function(o){return[2,D(function(){return ah(e,t,"asyncQuerySelector","asyncShadowRootQuerySelector")},function(e){return!!e},{retries:i,delay:n,shouldReject:!1})]})})}function hh(e,t,i,n){return zd(this,void 0,void 0,function(){return qd(this,function(o){return[2,D(function(){return lh(e,t,"asyncQuerySelectorAll")},function(e){return!!e.length},{retries:i,delay:n,shouldReject:!1})]})})}function uh(e,t,i,n){return zd(this,void 0,void 0,function(){return qd(this,function(o){return[2,D(function(){return ch(e,t,"asyncShadowRootQuerySelector","asyncQuerySelector")},function(e){return!!e},{retries:i,delay:n,shouldReject:!1})]})})}var fh=function(e,t){var i=e.querySelectorAll(t);if(i.length)return i;if(e instanceof Element&&e.shadowRoot){var n=fh(e.shadowRoot,t);if(n.length)return n}for(var o=0,s=Array.from(e.querySelectorAll("*"));o<s.length;o++){var r=s[o],a=fh(r,t);if(a.length)return a}return document.querySelectorAll(Yd)},ph=function(e,t,i,n){return D(function(){return fh(e,t)},function(e){return!!e.length},{retries:i,delay:n,shouldReject:!1})};function gh(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return zd(this,void 0,void 0,function(){var t,i,n,o,s;return qd(this,function(r){switch(r.label){case 0:return Qd(e)?(t=e[0],i=e[1],n=e[2],[4,dh(i,t,(null==n?void 0:n.retries)||Jd,(null==n?void 0:n.delay)||Xd)]):[3,2];case 1:case 3:return[2,r.sent()];case 2:return o=e[0],s=e[1],[4,dh(o,document,(null==s?void 0:s.retries)||Jd,(null==s?void 0:s.delay)||Xd)]}})})}function mh(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return zd(this,void 0,void 0,function(){var t,i,n,o,s;return qd(this,function(r){switch(r.label){case 0:return Qd(e)?(t=e[0],i=e[1],n=e[2],[4,hh(i,t,(null==n?void 0:n.retries)||Jd,(null==n?void 0:n.delay)||Xd)]):[3,2];case 1:return[2,r.sent()];case 2:return o=e[0],s=e[1],[2,hh(o,document,(null==s?void 0:s.retries)||Jd,(null==s?void 0:s.delay)||Xd)]}})})}function _h(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return zd(this,void 0,void 0,function(){var t,i,n,o,s;return qd(this,function(r){switch(r.label){case 0:return Qd(e)?(t=e[0],i=e[1],n=e[2],[4,uh(i,t,(null==n?void 0:n.retries)||Jd,(null==n?void 0:n.delay)||Xd)]):[3,2];case 1:return[2,r.sent()];case 2:return o=e[0],s=e[1],[2,uh(o,document,(null==s?void 0:s.retries)||Jd,(null==s?void 0:s.delay)||Xd)]}})})}var bh=function(){function e(e,t){e instanceof Node||e instanceof Promise?(this._element=e,this._asyncParams=Vd({retries:Jd,delay:Xd},t||{})):(this._element=document,this._asyncParams=Vd({retries:Jd,delay:Xd},e||{}))}return Object.defineProperty(e.prototype,"element",{get:function(){return th(this._element).then(function(e){return e instanceof NodeList?e[0]||null:e})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"$",{get:function(){var t=this;return new e(th(this._element).then(function(e){return e instanceof Document||e instanceof ShadowRoot||null===e||e instanceof NodeList&&0===e.length?null:e instanceof NodeList?_h(e[0],Kd,t._asyncParams):_h(e,Kd,t._asyncParams)}),this._asyncParams)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"all",{get:function(){return th(this._element).then(function(e){return e instanceof NodeList?e:document.querySelectorAll(Yd)})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"asyncParams",{get:function(){return this._asyncParams},enumerable:!1,configurable:!0}),e.prototype.eq=function(e){return zd(this,void 0,void 0,function(){return qd(this,function(t){return[2,th(this._element).then(function(t){return t instanceof NodeList&&t[e]||null})]})})},e.prototype.query=function(t){var i=this;return new e(th(this._element).then(function(e){return null===e||e instanceof NodeList&&0===e.length?null:e instanceof NodeList?mh(e[0],t,i._asyncParams):mh(e,t,i._asyncParams)}),this._asyncParams)},e.prototype.deepQuery=function(t){var i=this;return new e(th(this._element).then(function(e){return null===e||e instanceof NodeList&&0===e.length?null:e instanceof NodeList?Promise.race(Array.from(e).map(function(e){return ph(e,t,i._asyncParams.retries,i._asyncParams.delay)})):ph(e,t,i._asyncParams.retries,i._asyncParams.delay)}),this._asyncParams)},e}(),yh=function(e,t){return yh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},yh(e,t)},vh=function(){return vh=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},vh.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var wh,Ah,Eh,Ch,Oh,Sh,xh,Ih,kh,Nh,Th,$h,Lh,Dh,Mh,Ph,Rh="$",Bh={retries:100,delay:50,eventThreshold:450};!function(e){e.HOME_ASSISTANT="HOME_ASSISTANT",e.HOME_ASSISTANT_MAIN="HOME_ASSISTANT_MAIN",e.HA_DRAWER="HA_DRAWER",e.HA_SIDEBAR="HA_SIDEBAR",e.PARTIAL_PANEL_RESOLVER="PARTIAL_PANEL_RESOLVER"}(wh||(wh={})),function(e){e.HA_PANEL_LOVELACE="HA_PANEL_LOVELACE",e.HUI_ROOT="HUI_ROOT",e.HEADER="HEADER",e.HUI_VIEW="HUI_VIEW"}(Ah||(Ah={})),function(e){e.HA_MORE_INFO_DIALOG="HA_MORE_INFO_DIALOG",e.HA_DIALOG="HA_DIALOG",e.HA_DIALOG_CONTENT="HA_DIALOG_CONTENT",e.HA_MORE_INFO_DIALOG_INFO="HA_MORE_INFO_DIALOG_INFO",e.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK="HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK",e.HA_DIALOG_MORE_INFO_SETTINGS="HA_DIALOG_MORE_INFO_SETTINGS"}(Eh||(Eh={})),function(e){e.ON_LISTEN="onListen",e.ON_PANEL_LOAD="onPanelLoad",e.ON_LOVELACE_PANEL_LOAD="onLovelacePanelLoad",e.ON_MORE_INFO_DIALOG_OPEN="onMoreInfoDialogOpen",e.ON_HISTORY_AND_LOGBOOK_DIALOG_OPEN="onHistoryAndLogBookDialogOpen",e.ON_SETTINGS_DIALOG_OPEN="onSettingsDialogOpen"}(Ch||(Ch={})),function(e){e.HOME_ASSISTANT="home-assistant",e.HOME_ASSISTANT_MAIN="home-assistant-main",e.HA_DRAWER="ha-drawer",e.HA_SIDEBAR="ha-sidebar",e.PARTIAL_PANEL_RESOLVER="partial-panel-resolver",e.HA_PANEL_LOVELACE="ha-panel-lovelace",e.HUI_ROOT="hui-root",e.HEADER=".header",e.HUI_VIEW="hui-view",e.HA_MORE_INFO_DIALOG="ha-more-info-dialog",e.HA_DIALOG="ha-dialog",e.HA_DIALOG_CONTENT=".content",e.HA_MORE_INFO_DIALOG_INFO="ha-more-info-info",e.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK="ha-more-info-history-and-logbook",e.HA_DIALOG_MORE_INFO_SETTINGS="ha-more-info-settings"}(Ph||(Ph={}));var jh=((Oh={})[wh.HOME_ASSISTANT]={selector:Ph.HOME_ASSISTANT,children:{shadowRoot:{selector:Rh,children:(Sh={},Sh[wh.HOME_ASSISTANT_MAIN]={selector:Ph.HOME_ASSISTANT_MAIN,children:{shadowRoot:{selector:Rh,children:(xh={},xh[wh.HA_DRAWER]={selector:Ph.HA_DRAWER,children:(Ih={},Ih[wh.HA_SIDEBAR]={selector:Ph.HA_SIDEBAR,children:{shadowRoot:{selector:Rh}}},Ih[wh.PARTIAL_PANEL_RESOLVER]={selector:Ph.PARTIAL_PANEL_RESOLVER},Ih)},xh)}}},Sh)}}},Oh),Hh=((kh={})[Ah.HA_PANEL_LOVELACE]={selector:Ph.HA_PANEL_LOVELACE,children:{shadowRoot:{selector:Rh,children:(Nh={},Nh[Ah.HUI_ROOT]={selector:Ph.HUI_ROOT,children:{shadowRoot:{selector:Rh,children:(Th={},Th[Ah.HEADER]={selector:Ph.HEADER},Th[Ah.HUI_VIEW]={selector:Ph.HUI_VIEW},Th)}}},Nh)}}},kh),Gh={shadowRoot:{selector:Rh,children:($h={},$h[Eh.HA_MORE_INFO_DIALOG]={selector:Ph.HA_MORE_INFO_DIALOG,children:{shadowRoot:{selector:Rh,children:(Lh={},Lh[Eh.HA_DIALOG]={selector:Ph.HA_DIALOG,children:(Dh={},Dh[Eh.HA_DIALOG_CONTENT]={selector:Ph.HA_DIALOG_CONTENT,children:(Mh={},Mh[Eh.HA_MORE_INFO_DIALOG_INFO]={selector:Ph.HA_MORE_INFO_DIALOG_INFO},Mh[Eh.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK]={selector:Ph.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK},Mh[Eh.HA_DIALOG_MORE_INFO_SETTINGS]={selector:Ph.HA_DIALOG_MORE_INFO_SETTINGS},Mh)},Dh)},Lh)}}},$h)}},Uh=function(e,t,i,n){return void 0===i&&(i=null),void 0===n&&(n=!1),Object.entries(t||{}).reduce(function(t,o){var s=o[0],r=o[1];if(r.selector===Rh&&i)return r.children?vh(vh({},t),Uh(e,r.children,i,!0)):t;var a=i?i.then(function(t){return t?gh(t,(i=r.selector,n?"$ "+i:i),e):null;var i}):gh(r.selector,e);return t[s]={element:a,children:Uh(e,r.children,a),selector:new bh(a,e)},t},{})},Fh=function(e,t){for(var i=0,n=Object.entries(t);i<n.length;i++){var o=n[i];if(o[0]===e)return o[1];var s=Fh(e,o[1].children);if(s)return s}},Vh=function(e,t){return Object.keys(e).reduce(function(e,i){var n=Fh(i,t);n.children;var o=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i}(n,["children"]);return e[i]=vh({},o),e},{})},zh=function(){function e(){this.delegate=document.createDocumentFragment()}return e.prototype.addEventListener=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];(e=this.delegate).addEventListener.apply(e,t)},e.prototype.dispatchEvent=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return(e=this.delegate).dispatchEvent.apply(e,t)},e.prototype.removeEventListener=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return(e=this.delegate).removeEventListener.apply(e,t)},e}(),qh=function(e){function t(t){void 0===t&&(t={});var i=e.call(this)||this;return i._config=vh(vh({},Bh),t),i._timestaps={},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}yh(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.prototype._dispatchEvent=function(e,t){var i=Date.now();i-this._timestaps[e]<this._config.eventThreshold||(this._timestaps[e]=i,this.dispatchEvent(new CustomEvent(e,{detail:t})))},t.prototype._updateDialogElements=function(e){var t,i=this;void 0===e&&(e=Eh.HA_MORE_INFO_DIALOG_INFO),this._dialogTree=Uh(this._config,Gh,this._haRootElements.HOME_ASSISTANT.element);var n=Vh(Eh,this._dialogTree);n.HA_DIALOG_CONTENT.element.then(function(e){i._dialogsContentObserver.disconnect(),i._dialogsContentObserver.observe(e,{childList:!0})}),this._haDialogElements=function(e,t){return[Eh.HA_MORE_INFO_DIALOG,Eh.HA_DIALOG,Eh.HA_DIALOG_CONTENT,t].reduce(function(t,i){return t[i]=e[i],t},{})}(n,e);var o=((t={})[Eh.HA_MORE_INFO_DIALOG_INFO]=Ch.ON_MORE_INFO_DIALOG_OPEN,t[Eh.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK]=Ch.ON_HISTORY_AND_LOGBOOK_DIALOG_OPEN,t[Eh.HA_DIALOG_MORE_INFO_SETTINGS]=Ch.ON_SETTINGS_DIALOG_OPEN,t);this._dispatchEvent(o[e],this._haDialogElements)},t.prototype._updateRootElements=function(){var e=this;this._homeAssistantRootTree=Uh(this._config,jh),this._haRootElements=Vh(wh,this._homeAssistantRootTree),this._haRootElements[wh.HOME_ASSISTANT].selector.$.element.then(function(t){e._dialogsObserver.disconnect(),e._dialogsObserver.observe(t,{childList:!0})}),this._haRootElements[wh.PARTIAL_PANEL_RESOLVER].element.then(function(t){e._panelResolverObserver.disconnect(),t&&e._panelResolverObserver.observe(t,{subtree:!0,childList:!0})}),this._dispatchEvent(Ch.ON_LISTEN,this._haRootElements),this._dispatchEvent(Ch.ON_PANEL_LOAD,this._haRootElements)},t.prototype._updateLovelaceElements=function(){var e=this;this._homeAssistantResolverTree=Uh(this._config,Hh,this._haRootElements[wh.HA_DRAWER].element),this._haResolverElements=Vh(Ah,this._homeAssistantResolverTree),this._haResolverElements[Ah.HA_PANEL_LOVELACE].element.then(function(t){e._lovelaceObserver.disconnect(),t&&(e._lovelaceObserver.observe(t.shadowRoot,{childList:!0}),e._dispatchEvent(Ch.ON_LOVELACE_PANEL_LOAD,vh(vh({},e._haRootElements),e._haResolverElements)))})},t.prototype._watchDialogs=function(e){var t=this;e.forEach(function(e){e.addedNodes.forEach(function(e){e.localName===Ph.HA_MORE_INFO_DIALOG&&t._updateDialogElements()})})},t.prototype._watchDialogsContent=function(e){var t=this;e.forEach(function(e){e.addedNodes.forEach(function(e){var i,n=((i={})[Ph.HA_MORE_INFO_DIALOG_INFO]=Eh.HA_MORE_INFO_DIALOG_INFO,i[Ph.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK]=Eh.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK,i[Ph.HA_DIALOG_MORE_INFO_SETTINGS]=Eh.HA_DIALOG_MORE_INFO_SETTINGS,i);if(e.localName&&e.localName in n){var o=e.localName;t._updateDialogElements(n[o])}})})},t.prototype._watchDashboards=function(e){var t=this;e.forEach(function(e){e.addedNodes.forEach(function(e){t._dispatchEvent(Ch.ON_PANEL_LOAD,t._haRootElements),e.localName===Ph.HA_PANEL_LOVELACE&&t._updateLovelaceElements()})})},t.prototype._watchLovelace=function(e){var t=this;e.forEach(function(e){e.addedNodes.forEach(function(e){e.localName===Ph.HUI_ROOT&&t._updateLovelaceElements()})})},t.prototype.listen=function(){this._watchDialogsBinded=this._watchDialogs.bind(this),this._watchDialogsContentBinded=this._watchDialogsContent.bind(this),this._watchDashboardsBinded=this._watchDashboards.bind(this),this._watchLovelaceBinded=this._watchLovelace.bind(this),this._dialogsObserver=new MutationObserver(this._watchDialogsBinded),this._dialogsContentObserver=new MutationObserver(this._watchDialogsContentBinded),this._panelResolverObserver=new MutationObserver(this._watchDashboardsBinded),this._lovelaceObserver=new MutationObserver(this._watchLovelaceBinded),this._updateRootElements(),this._updateLovelaceElements()},t.prototype.addEventListener=function(t,i,n){e.prototype.addEventListener.call(this,t,i,n)},t}(zh),Kh=/([A-Z])([a-z0-9_-]+)/g,Wh=function(e){return Object.entries(e).map(function(e){var t=e[0],i=e[1];return"".concat(function(e){return e.replace(Kh,function(e,t,i,n){var o=t.toLocaleLowerCase();return n?"-".concat(o).concat(i):"--".concat(o).concat(i)})}(t),":").concat(i)}).join(";")+";"},Yh=function(e){return(Array.isArray(e)?e:[e]).map(function(e){return"string"==typeof e?e:Object.entries(e).map(function(e){var t=e[0],i=e[1];return!1===i?"".concat(t,"{display: none !important}"):"".concat(t,"{").concat(Wh(i),"}")}).join("")}).join("")},Jh=function(e,t){return"".concat(t,"_").concat(e)},Xh=function(e){return e instanceof ShadowRoot?e.host.localName:e.localName},Qh=function(e,t){var i=Jh(Xh(e),t);return e.querySelector("#".concat(i))},Zh=function(){function e(e){var t,i,n;void 0===e&&(e={}),this._prefix=null!==(t=e.prefix)&&void 0!==t?t:"ha-styles-manager",this._namespace=null!==(i=e.namespace)&&void 0!==i?i:"home-assistant-styles-manager",this._throwWarnings=null===(n=e.throwWarnings)||void 0===n||n}return e.prototype.getStyleElement=function(e){return Qh(e,this._prefix)},e.prototype.addStyle=function(e,t){!function(e,t,i,n,o){if(t){var s=Qh(t,i);if(!s){var r=Jh(Xh(t),i);(s=document.createElement("style")).setAttribute("id",r),t.appendChild(s)}s.innerHTML="string"==typeof e?e:Yh(e)}else o&&console.warn("".concat(n,': no element has been provided calling "addStyle"'))}(e,t,this._prefix,this._namespace,this._throwWarnings)},e.prototype.removeStyle=function(e){!function(e,t,i,n){if(e){var o=Qh(e,t);o?o.remove():n&&console.warn("".concat(i,': no style to remove calling "removeStyle"'))}else n&&console.warn("".concat(i,': no element has been provided calling "removeStyle"'))}(e,this._prefix,this._namespace,this._throwWarnings)},e}();const eu=G`
  :host .ha-scrollbar {
    padding: 0;
  }
  :host([expanded]) .divider {
    padding: 10px 0;
  }
  :host .divider[ungrouped] {
    padding: 0;
  }

  :host .divider::before {
    content: ' ';
    display: block;
    height: 1px;
    background-color: var(--divider-color);
  }
  :host .divider[bottom] {
    padding: 0;
  }

  :host .collapse-toggle {
    color: var(--primary-color);
    transition: transform 0.3s ease;
    cursor: pointer;
    opacity: 0.5;
    margin-right: 4px;
  }
  :host .collapse-toggle.active {
    color: var(--sidebar-icon-color);
    transform: rotate(90deg);
    transition: transform 0.3s ease;
  }
  :host .collapse-toggle:hover {
    color: var(--primary-color);
    opacity: 1;
  }

  :host([expanded]) .title.toggle {
    display: flex !important;
    justify-content: space-between;
    margin: 0;
  }

  :host([expanded]) .divider[added] {
    padding: 0;
    box-sizing: border-box;
    margin: var(--divider-margin-radius);
    width: 248px;
  }
  :host(:not([expanded])) .divider[added] {
    margin: 0 !important;
  }

  :host .ha-scrollbar .divider[ungrouped] {
    padding-top: 1px;
    opacity: 0.5;
  }

  :host ha-md-list-item > ha-icon.badge {
    --mdc-icon-size: 20px !important;
  }

  :host([expanded]) .grid-container > ha-md-list-item[grid-item] > ha-icon.badge,
  :host([expanded]) .grid-container > ha-md-list-item[grid-item] > span.badge {
    position: absolute;
    top: 0;
    left: 26px;
    border-radius: var(--ha-border-radius-md);
    font-size: 0.65em;
    line-height: var(--ha-line-height-expanded);
    padding: 0 var(--ha-space-1);
  }
  :host(:not([expanded])) ha-md-list-item[data-notification='true'] > ha-icon.badge,
  :host(:not([expanded])) ha-md-list-item[data-notification='true'] > span.badge {
    position: absolute;
    inset-inline-start: 20px;
    inset-inline-end: initial;
    left: auto;
    max-width: 30px;
    top: 0px;
  }

  :host(:not([expanded])) ha-md-list-item[data-notification='true'] > ha-icon.badge,
  :host(:not([expanded])) ha-md-list-item[data-notification='true'] > span.badge.badge-number {
    inset-inline-end: 4px !important;
  }
  :host(:not([expanded])) ha-md-list-item[data-notification='true'] > span.badge.large-badge {
    transform: translateX(50%);
    right: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ha-md-list-item[data-notification='true'] span.badge.no-visible {
    visibility: hidden !important;
    opacity: 0 !important;
  }
  ha-md-list-item[data-notification='true'] > ha-icon.badge {
    padding: 0 !important;
    color: var(--accent-color);
    background-color: transparent;
  }

  ha-md-list-item[data-notification='true'] > span.badge {
    /* padding: 0 5px !important; */
    border-radius: 20px;
    font-size: 0.85em;
  }
  :host([expanded]) .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(25% - 4px));
    padding: 0;
    margin: 0;
    overflow: clip;
    /* max-height: fit-content; */
    justify-content: center;
    grid-gap: 4px 4px;
  }
  :host([expanded]) .grid-container > ha-md-list-item[grid-item] {
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    margin: auto auto;
  }

  :host .divider[added] .added-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--side-divider-text-color, var(--sidebar-text-color));
    background-color: var(--divider-bg-color);
    letter-spacing: 1px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
    border-top: 1px solid var(--divider-border-top-color);
    border-radius: var(--divider-border-radius, none);
    box-sizing: border-box;
    padding-left: 12px;
    padding-inline-end: initial;
    min-height: 40px;
    text-transform: var(--sidebar-text-transform, 'capitalize');
    &:hover {
      color: var(--primary-color);
      background-color: rgb(from var(--primary-color) r g b / 0.1);
    }
  }

  :host .divider.collapsed[added][aria-selected='true'] {
    background-color: rgb(from var(--sidebar-selected-icon-color) r g b / 0.12);
  }

  :host .divider[added] .added-content span,
  :host .divider[added] .added-content ha-icon {
    pointer-events: none;
    transition: all 150ms ease;
  }

  :host .divider[added] .added-content.collapsed ha-icon:not([custom]) {
    transform: rotate(-90deg);
  }

  :host .divider[added] .added-content span {
    transform: translateX(30px);
  }
  :host .divider[added]:hover .added-content.collapsed > span {
    transform: translateX(30px);
  }
  :host .divider[added] .added-content.collapsed > span {
    transform: translateX(10px);
  }

  :host([expanded]) .ha-scrollbar .divider[added]::before {
    display: none !important;
  }

  :host(:not([expanded])) .divider.collapsed[added]::before {
    content: '';
    display: none;
  }
  :host(:not([expanded])) .divider[added]::before {
    content: '';
    opacity: 0;
  }

  :host(:not([expanded])) .divider .added-content.default {
    display: none;
  }

  :host(:not([expanded])) .divider[added] .added-content {
    padding-inline-start: 2px;
    align-items: center;
    justify-content: center;
    border-left: 2px groove rgb(from var(--sidebar-selected-icon-color) r g b / 0.5);
    box-sizing: content-box;
    &.collapsed {
      border-left: hidden;
    }
  }

  :host(:not([expanded])) .divider[added] .added-content > ha-icon[custom] {
    margin: 0;
    padding: 0;
    color: var(--sidebar-icon-color);
  }

  a:not(.iron-selected):hover > paper-icon-item {
    background-color: rgb(from var(--sidebar-selected-icon-color) r g b / 0.2);
  }

  :host ha-md-list-item:has([group]) {
    transition: all;
  }
  :host ha-md-list-item.selected[grid-item]::before {
    margin-block: 2px;
  }
  :host ha-md-list-item.collapsed {
    max-height: 0px !important;
    overflow: hidden;
    opacity: 0;
    padding: 0;
    margin: 0;
    border: none;
  }

  :host a[aria-selected='false']::before,
  :host a.configuration-container[aria-selected='false']::before {
    display: none;
  }

  :host(:not([expanded])) a.collapsed.iron-selected {
    max-height: 1000px;
  }

  :host ha-md-list-item.slideIn {
    animation-name: slideIn;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  @keyframes slideIn {
    from {
      max-height: 0px;
      opacity: 0.3;
    }
    to {
      max-height: 40px;
      opacity: 1;
    }
  }

  :host ha-md-list-item.slideOut {
    animation-name: slideOut;
    animation-duration: 0.3s;
  }
  @keyframes slideOut {
    from {
      max-height: 40px;
      opacity: 1;
    }
    to {
      max-height: 0px;
      opacity: 0;
    }
  }
`,tu=G`
  ha-dialog {
    --mdc-dialog-max-width: 90vw;
    --mdc-dialog-min-height: 700px;
    /* --mdc-dialog-min-height: calc(90vh - 72px); */
    --dialog-backdrop-filter: blur(2px);
    --justify-action-buttons: space-between;
    --dialog-content-padding: 0 1rem;
  }
  sidebar-organizer-config-dialog {
    width: calc(90vw - 48px);
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
  }
  :host([large]) ha-dialog {
    --mdc-dialog-min-width: 90vw;
    --mdc-dialog-max-width: 90vw;
  }
  :host([large]) ha-dialog sidebar-organizer-config-dialog {
    max-width: none;
    width: 100%;
  }

  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog {
      height: 100%;
      --mdc-dialog-max-height: 100%;
      --dialog-surface-top: 0px;
      --mdc-dialog-max-width: 100vw;
    }
    sidebar-organizer-config-dialog {
      width: 100%;
      max-width: 100%;
    }
  }
  @media all and (min-width: 451px) and (min-height: 501px) {
    :host([large]) ha-dialog sidebar-organizer-config-dialog {
      max-width: none;
      width: 100%;
    }
  }
  @media all and (max-width: 600px), all and (max-height: 500px) {
    ha-dialog,
    ha-dialog[large] {
      --mdc-dialog-min-width: 100vw;
      --mdc-dialog-max-width: 100vw;
      --mdc-dialog-min-height: 100%;
      --mdc-dialog-max-height: 100%;
      --vertical-align-dialog: flex-end;
      --ha-dialog-border-radius: 0;
    }
    sidebar-organizer-config-dialog {
      width: 100%;
      max-width: none;
    }
  }
`;class iu{constructor(){this._notCompatible=!1,this._blockEditModeChange=!1,this._config={},this._delayTimeout=null,this._diffCheck=!1,this._configPanelMap=new Map,this._pinnedGroups={},this._prevPath=null,this._userHasSidebarSettings=!1,this.collapsedItems=new Set,this.firstSetUpDone=!1,this.setupConfigDone=!1,this._baseOrder=[],this._hiddenPanels=[],this._baseColorFromTheme={},this._createDivider=e=>{const t=document.createElement("div");return t.classList.add("divider"),e&&t.setAttribute(e,""),t},this._createDividerWithGroup=(e,t=!1)=>{const o=this._createDivider();o.setAttribute(n.GROUP,e),o.setAttribute(n.ADDED,""),o.classList.toggle(i.COLLAPSED,t);const s=this._createAddedGroupContent(e,t);return o.appendChild(s),o.addEventListener("click",this._toggleGroup.bind(this)),o},this._createAddedGroupContent=(e,t=!1)=>{if(this._pinnedGroups[e]){const o=document.createElement("so-group-divider");return o.classList.add(i.ADDED_CONTENT),o.setAttribute(n.GROUP,e),o.classList.toggle(i.COLLAPSED,t),o.customIcon=this._pinnedGroups[e].icon,o.haSidebar=this.HaSidebar,o}const o=document.createElement("div");return o.classList.add(i.ADDED_CONTENT),o.classList.add("default"),o.setAttribute(n.GROUP,e),o.innerHTML=`<ha-icon icon="mdi:chevron-down"></ha-icon><span>${e.trim()}</span>`,o.classList.toggle(i.COLLAPSED,t),o},this._checkDiffs=()=>{const e=this._baseOrder,t=Array.from(this._sidebarItems).map(e=>e.dataset.panel),i=Array.from(this._sidebarItems).find(e=>!this._compareDatasetWithHref(e)),n=!Pd(e,t);if(n||null!=i){this._diffCheck=!1;Go("Changes detected:",{orderDiff:n,baseOrder:e,itemsNamed:t,notValidItem:i}),this._store._needReloadToast()}else this._diffCheck=!0},this._getGroupOfPanel=e=>{const t=[...this._configPanelMap.entries()].find(([,t])=>t.includes(e));return t?t[0]:null};const e=new qh;e.addEventListener(Ch.ON_LISTEN,async e=>{const{HOME_ASSISTANT:t,HA_DRAWER:i,HA_SIDEBAR:n}=e.detail;this.ha=await t.element,this._haDrawer=await i.element,this.HaSidebar=await n.element,this.sideBarRoot=await n.selector.$.element,this._store=new jd(this.ha,this),this._dialogManager=new Id(this._haDrawer,this.ha,this),this.run()}),e.addEventListener(Ch.ON_LISTEN,e=>{this._panelResolver=e.detail.PARTIAL_PANEL_RESOLVER,this._sidebar=e.detail.HA_SIDEBAR,this._haMain=e.detail.HOME_ASSISTANT_MAIN,this._homeAssistant=e.detail.HOME_ASSISTANT},{once:!0}),e.addEventListener(Ch.ON_PANEL_LOAD,()=>{this._panelLoaded()}),e.listen(),this._styleManager=new Zh({prefix:u,throwWarnings:!1}),window.addEventListener("storage",this._storageListener.bind(this)),[A.SETTHEME,A.DEFAULT_PANEL,A.DIALOG_CLOSED,A.LOCATION_CHANGED,A.SHOW_DIALOG,A.SIDEBAR_CONFIG_SAVED,A.HASS_EDIT_SIDEBAR].forEach(e=>{window.addEventListener(e,this._handleHaEvents.bind(this))}),this._sidebarItems=[],this._currentPath=window.location.pathname,this._watchPathChanges(),this._mouseEnterBinded=this._mouseEnter.bind(this),this._mouseLeaveBinded=this._mouseLeave.bind(this)}get hass(){return this.ha.hass}get darkMode(){return L(this._config.color_config,this.hass)}get _panelsList(){return this.sideBarRoot?.querySelector(e.PANELS_LIST)}get _scrollbar(){return this.sideBarRoot?.querySelector(e.SIDEBAR_SCROLLBAR)}get _scrollbarItems(){return this._scrollbar.querySelectorAll(t.ITEM)}get _hasSidebarConfig(){const e=localStorage.getItem(w.UI_CONFIG);return Ao()||null!=e}async run(){if(this.hass&&this.hass.config?.state===l.RUNNING){if(!vc(this.hass.config.version,2026,2)){this._notCompatible=!0;const e=`${O.NOT_COMPATIBLE}: ${this.hass.config.version}.\nPlease upgrade Home Assistant to 2026.2 or later.`;return this._store._showToast(e,1e4),void Go(e)}await this._checkHacsTagMismatch(),await this._checkUserSidebarSettings(),await this._watchEditLegacySidebar(),this._setupConfigBtn(),!this.firstSetUpDone&&this._hasSidebarConfig&&(this._watchHaSidebarShouldUpdate(),vc(this.hass.config.version,2026,3)||await this._getDataDashboards(),this.firstSetUpDone=!0),this.firstSetUpDone&&!this._userHasSidebarSettings&&(await this._getConfig(),this._processConfig())}else this._store._haNotRunningToast()}async _watchEditLegacySidebar(){if(!this._hasSidebarConfig)return;const e=customElements.get("home-assistant-main");e?(Object.defineProperty(e.prototype,"_sidebarEditMode",{get:()=>!1,set(){},configurable:!0}),this._blockEditModeChange=!0):console.warn("home-assistant-main is not yet defined")}_watchPathChanges(){const e=()=>{this._delayTimeout&&clearTimeout(this._delayTimeout),this._delayTimeout=window.setTimeout(()=>{const e=window.location.pathname;this._checkProfileSection(),e!==this._currentPath&&(this._prevPath=this._currentPath,this._currentPath=e,null!==this._prevPath&&this._prevPath===y.LOVELACE_DASHBOARD&&this._currentPath!==y.LOVELACE_DASHBOARD&&this._checkDashboardChange())},200)},t=history.pushState,i=history.replaceState;history.pushState=function(...i){t.apply(this,i),e()},history.replaceState=function(...t){i.apply(this,t),e()},window.addEventListener("popstate",e)}async _checkDashboardChange(){if(this._userHasSidebarSettings||!this._baseOrder.length)return;await this._store._handleDashboardUpdate()?this._reloadWindow():this._store.resetDashboardState()}async _panelLoaded(){if(this._notCompatible)return;const e=await this._panelResolver.element,t=e.route?.path||"",i=this._panelsList;t&&i&&setTimeout(()=>{this._diffCheck&&this.firstSetUpDone&&this.setupConfigDone&&(Qe(t,i),t===y.LOVELACE_DASHBOARD&&this._store._subscribeDashboardData())},100)}async _checkProfileSection(){const e=await this._panelResolver.element,t=e?.route?.path??window.location.pathname;t&&b.test(t)&&this._dialogManager&&await this._dialogManager._injectSidebarOrganizerElement(e)}async _checkHacsTagMismatch(){ht(this.hass)}async _checkUserSidebarSettings(){const e=await kt(this.hass.connection,"sidebar");this._userHasSidebarSettings=e?.panelOrder&&e.panelOrder.length>0||!1,this._store._subscribeUserDefaultPanel()}async _setupConfigBtn(){let t=this.sideBarRoot?.querySelector(e.ITEM_PROFILE);t||(t=this.sideBarRoot?.querySelector(e.USER_ITEM)),t&&(this._userHasSidebarSettings?Xe(t,this._dialogManager._addDialogUserDataClear.bind(this._dialogManager)):Xe(t,this._dialogManager._showConfigDialogEditor.bind(this._dialogManager)))}async _getDataDashboards(){const e=to(this.hass);await No(this.hass.panels,e).then(e=>{this._addBuiltInPanelsToSidebar(e)})}_processConfig(){this._config&&0!==Object.keys(this._config).length&&this._getElements().then(e=>{const[t,o]=e;this._sidebarItems=Array.from(o);const{notification:s}=this._config,r=new Map(Object.entries(s||{}));for(const e of Array.from(o)){e.hasAttribute(n.NEW_ITEM)||e.setAttribute(n.DATA_PANEL,e.href.replace("/",""))}this._hiddenPanels&&this._hiddenPanels.length>0&&this._hiddenPanels.forEach(e=>{const t=this._sidebarItems.find(t=>t.getAttribute(n.DATA_PANEL)===e);t&&(t.style.display="none")});const a=Array.from(o).map(e=>e.getAttribute(n.DATA_PANEL)||e.href.replace("/","")),l=this._reorderPanelItemsByConfig(a);this._baseOrder=l,this._sidebarItems=this._sidebarItems.sort((e,t)=>l.indexOf(e.getAttribute(n.DATA_PANEL)||e.href.replace("/",""))-l.indexOf(t.getAttribute(n.DATA_PANEL)||t.href.replace("/","")));const c=t.firstChild?.nextSibling||null;this._sidebarItems.forEach(e=>{const s=e.getAttribute(n.DATA_PANEL)||"",a=this._getGroupOfPanel(s),l=r.get(s),d=Array.from(o).find(t=>t.getAttribute(n.DATA_PANEL)===e.getAttribute(n.DATA_PANEL));if(d&&t.insertBefore(d,c),void 0!==l&&this._subscribeNotification(e,l),a&&a!==x.BOTTOM&&a!==x.BOTTOM_GRID){const o=this.collapsedItems.has(a);if(this._configPanelMap.get(a)?.[0]===s){const i=this._createDividerWithGroup(a,o);t.insertBefore(i,e)}e.setAttribute(n.GROUP,a),e.classList.toggle(i.COLLAPSED,o)}}),this._addBottomItems(),this._reorderGroupedSidebar(),this._handleSidebarHeader(),this.setupConfigDone=!0,this._panelLoaded()})}async _getElements(){const i=await this._sidebar.selector.$.query(e.SIDEBAR_SCROLLBAR).element,n=await D(()=>i.querySelectorAll(t.ITEM),t=>Array.from(t).every(t=>{const i=t.querySelector(e.ITEM_TEXT);return(i?i.innerText.trim():"").length>0}),{retries:100,delay:50,shouldReject:!1});return[i,n]}_storageListener(e){if(e.key===w.COLLAPSE){const t=JSON.parse(e.newValue);this.collapsedItems=new Set(t),this._handleCollapsed(this.collapsedItems)}}async _handleHaEvents(e){if(this._notCompatible)return;e.stopPropagation();const{type:i,detail:n}=e;if(i&&n)switch(i){case A.HASS_EDIT_SIDEBAR:!0!==n.editMode||this._hasSidebarConfig||this._dialogManager._addLegacyEditWarning();break;case A.SETTHEME:this._styleManager.removeStyle(this.sideBarRoot),setTimeout(()=>{this._addAdditionalStyles(this._config.color_config)},100);break;case A.DEFAULT_PANEL:this._store._handleDefaultPanelChange(n.defaultPanel);break;case A.SHOW_DIALOG:n.dialogTag===t.DIALOG_EDIT_SIDEBAR&&this._dialogManager._handleEditModeAttempt();break;case A.SIDEBAR_CONFIG_SAVED:this._handleNewConfig(n.config,n.useConfigFile)}}async _getConfig(){const e=await gc(this.hass);e&&e&&(this._config=e,this._setupInitialConfig())}_setupInitialConfig(){const{new_items:e,default_collapsed:t,custom_groups:i,hidden_items:n,color_config:o,bottom_items:s,bottom_grid_items:r,move_settings_from_fixed:a,pinned_groups:l}=this._config;this._configPanelMap=new Map(Object.entries(i||{})),this._configPanelMap.set(x.BOTTOM,s||[]),this._configPanelMap.set(x.BOTTOM_GRID,r||[]),this._pinnedGroups=Ac(l||{}),this.collapsedItems=yc(i,t),this._handleHidden(n||[]),this._addNewItems(e||[]),this._moveSettingsFromFixed(a||!1),this._addAdditionalStyles(o)}_handleSidebarHeader(){const n=this.sideBarRoot?.querySelector(e.MENU),o=n?.querySelector(e.MENU_TITLE);if(!o)return;const s=this._config.header_title;if(s&&(o.innerText=s),o.classList.add("toggle"),this._config.hide_header_toggle)return;const r=Object.keys(this._config?.custom_groups||{}),l=Object.values(this._config.custom_groups||{}).flat().length>0;if(0===r.length||!l)return;const c=this.collapsedItems.size===r.length,d=document.createElement(t.HA_ICON);d.icon=c?a.PLUS:a.MINUS,d.classList.add(i.COLLAPSE_TOGGLE),d.classList.toggle(i.ACTIVE,c),d.style.touchAction="manipulation";d.addEventListener("pointerup",e=>{e.stopPropagation(),e.cancelable&&e.preventDefault(),this.collapsedItems.size===r.length?this.collapsedItems.clear():this.collapsedItems=new Set(r),this._handleCollapsed(this.collapsedItems)},{passive:!1}),o.querySelector(`.${i.COLLAPSE_TOGGLE}`)?.remove(),o.appendChild(d)}_handleCollapsedChange(){const t=this.sideBarRoot?.querySelector(e.HEADER_TOGGLE_ICON);if(!t)return;const n=this.collapsedItems.size===Object.keys(this._config?.custom_groups||{}).length;t.classList.toggle(i.ACTIVE,n),t.setAttribute("icon",n?a.PLUS:a.MINUS)}_handleHidden(e){e&&0!==e.length&&(this._hiddenPanels=e)}_addNewItems(t){if(!t||0===t.length)return;const i=this._scrollbar,n=i.querySelector(e.SPACER);Array.from(t).map(e=>{const t=this._createNewItem(e);t&&i.insertBefore(t,n)})}_addBuiltInPanelsToSidebar(t){if(!t||0===t.length)return;const i=Array.from(this._scrollbarItems),o=this._scrollbar.querySelector(e.SPACER),s=[];t.map(e=>{if(i.find(t=>(t.getAttribute(n.DATA_PANEL)||t.href.replace("/",""))===e.url_path))return;const t=this._createNewItem(e,!0);t&&(this._scrollbar.insertBefore(t,o),s.push(e.url_path))}),s.length}_moveSettingsFromFixed(t=!1){if(!t)return;const i=this.sideBarRoot?.querySelector(e.SETTINGS_ITEM);if(!i)return;const n=this._scrollbar.querySelector(e.SPACER);this._scrollbar.insertBefore(i,n)}_subscribeTemplate(e,t){this.hass&&Fd(e)&&Hd(this.hass.connection,e=>{t(e.result)},{template:e,variables:{config:e,user:this.hass.user.name},strict:!0})}_addBottomItems(){const t=this._configPanelMap.get(x.BOTTOM)||[],i=this._configPanelMap.get(x.BOTTOM_GRID)||[];if(0===t.length&&0===i.length)return;const o=this._panelsList,s=Array.from(this._sidebarItems),a=o.querySelector(e.AFTER_SPACER);if((()=>{const t=o.querySelectorAll(e.GRID_CONTAINER),i=o.querySelectorAll(`${e.DIVIDER}[${n.BOTTOM}]`);(t.length>0||i.length>0)&&(t.forEach(e=>e.remove()),i.forEach(e=>e.remove()))})(),t.length>0){const e=t.map(e=>s.find(t=>t.getAttribute(n.DATA_PANEL)===e)).filter(Boolean);if(0===e.length)return;e.forEach(e=>{e.setAttribute(n.MOVED,""),o.insertBefore(e,a)});const i=this._createDivider(n.BOTTOM);o.insertBefore(i,a)}if(i.length>0){const e=document.createElement("div");if(e.classList.add("grid-container"),i.forEach(t=>{const i=s.find(e=>e.getAttribute(n.DATA_PANEL)===t);i&&(i.setAttribute(n.GRID_ITEM,""),i.addEventListener(r.MOUSEENTER,this._mouseEnterBinded),i.addEventListener(r.MOUSELEAVE,this._mouseLeaveBinded),e.appendChild(i))}),e.children.length>0){const t=this._createDivider(n.BOTTOM);o.insertBefore(e,a),o.insertBefore(t,a)}}}_handleNewConfig(e,t){if(t)return void this._reloadWindow();return JSON.stringify(e)!==JSON.stringify(this._config)?(yo(w.UI_CONFIG,e),this._config=e,void this._reloadWindow()):void 0}async _handleCollapsed(t){yo(w.COLLAPSE,[...t]),await ot(),this._handleCollapsedChange(),Array.from(this._sidebarItems).filter(e=>e.hasAttribute(n.GROUP)).forEach(e=>{const o=e.getAttribute(n.GROUP),s=t.has(o);e.classList.toggle(i.COLLAPSED,s)}),this._scrollbar.querySelectorAll(e.DIVIDER_ADDED).forEach(o=>{const s=o.getAttribute(n.GROUP),r=t.has(s);o.classList.toggle(i.COLLAPSED,r),o.querySelector(e.ADDED_CONTENT)?.classList.toggle(i.COLLAPSED,r)})}_addAdditionalStyles(e,t){t=t||(this.darkMode?"dark":"light");const i=e?.custom_theme?.theme||void 0;i&&k(this.HaSidebar,this.hass,i,t);const n=e?.[t]||{},o=e?.border_radius?`${e.border_radius}px`:void 0,s=o?"4px 4px":"1px 4px 0px",r=this._config?.text_transformation||"capitalize",a=n.custom_styles||[],l=fd(a)||"",c=gd(void 0!==i?this.HaSidebar:void 0);this._baseColorFromTheme=c;const d=e=>n?.[e]?`${n[e]} !important`:this._baseColorFromTheme[e],h={"--divider-color":d("divider_color"),"--divider-bg-color":d("background_color"),"--divider-border-top-color":d("border_top_color"),"--scrollbar-thumb-color":d("scrollbar_thumb_color"),"--sidebar-background-color":d("custom_sidebar_background_color"),"--divider-border-radius":o,"--divider-margin-radius":s,"--sidebar-text-color":d("divider_text_color"),"--sidebar-text-transform":r},u=`:host {${Object.entries(h).map(([e,t])=>`${e}: ${t};`).join("")}}`;this._styleManager.addStyle([u,l,eu.toString()],this.sideBarRoot)}_reorderPanelItemsByConfig(e){const t=to(this.hass),i=this._config.custom_groups||{},n=this._config.bottom_items||[],o=this._config.bottom_grid_items||[],s=!0!==this._config.move_settings_from_fixed,r=Object.values(i).flat().filter(t=>e.includes(t)),a=e.filter(e=>!r.includes(e)&&!n.includes(e)&&!o.includes(e)),l=a.find(e=>e===t);l&&(a.splice(a.indexOf(l),1),r.unshift(l));const c=[...r,...a,...n,...o];return s&&c.includes("config")&&c.splice(c.indexOf("config"),1),c}_reorderGroupedSidebar(){const e=Array.from(this._scrollbarItems).findLast(e=>e.hasAttribute("group"));if(e){const t=this._createDivider(n.UNGROUPED);this._scrollbar.insertBefore(t,e.nextSibling)}setTimeout(()=>this._checkDiffs(),50)}_compareDatasetWithHref(e){const t=e.dataset.panel,i=e.href?.replace("/","");return"#"===i||t===i}_watchHaSidebarShouldUpdate(){this.hass&&customElements.get(t.HA_SIDEBAR)&&customElements.whenDefined(t.HA_SIDEBAR).then(e=>{const t=e.prototype.shouldUpdate;e.prototype.shouldUpdate=function(e){return this.hass.config.state===l.RUNNING&&t.call(this,e)}})}_createNewItem(e,t=!1){const i=po(this.hass,e,t);return void 0!==e.notification&&this._subscribeNotification(i,e.notification),i.addEventListener(r.MOUSEENTER,this._mouseEnterBinded),i.addEventListener(r.MOUSELEAVE,this._mouseLeaveBinded),i}async _mouseEnter(e){const t=await this._sidebar.element,i=e.currentTarget.hasAttribute("grid-item");t.alwaysExpand&&!i||(t._mouseLeaveTimeout&&(clearTimeout(t._mouseLeaveTimeout),t._mouseLeaveTimeout=void 0),t._showTooltip(e.currentTarget))}async _mouseLeave(){const e=await this._sidebar.element;e._mouseLeaveTimeout&&clearTimeout(e._mouseLeaveTimeout),e._mouseLeaveTimeout=window.setTimeout(()=>{e._hideTooltip()},500)}_subscribeNotification(t,o){let s=t.querySelector(e.BADGE)??go(),r=t.querySelector(e.NOTIFY_ICON)??mo();const a=t.querySelector(e.ITEM_TEXT);t.insertBefore(s,a.nextElementSibling),t.insertBefore(r,a),t.setAttribute(n.DATA_NOTIFICATION,"true");this._subscribeTemplate(o,e=>{null!=e&&""!==String(e).trim()?"string"==typeof e&&_c(e)?(r.classList.toggle(i.NO_VISIBLE,!1),r.setAttribute("icon",e),s.classList.toggle(i.NO_VISIBLE,!0),s.remove()):(s.innerHTML=e,s.classList.toggle(i.NO_VISIBLE,!1),s.classList.toggle(i.BADGE_NUMBER,!isNaN(e)),s.classList.toggle(i.LARGE_BADGE,e.length>=3),r.classList.toggle(i.NO_VISIBLE,!0),r.removeAttribute("icon"),r.remove()):(r.classList.toggle(i.NO_VISIBLE,!0),r.removeAttribute("icon"),s.innerHTML="",s.classList.toggle(i.NO_VISIBLE,!0))})}_toggleGroup(e){e.stopPropagation();const t=this._config?.animation_off||!1,n=this._config?.animation_delay||50,o=e.target,s=o.getAttribute("group"),r=Array.from(this._scrollbarItems).filter(e=>e.getAttribute("group")===s&&!e.hasAttribute("moved"));if(!r.length)return;const a=r[0].classList.contains(i.COLLAPSED);this._setItemToLocalStorage(s,!a),o.classList.toggle(i.COLLAPSED,!a),o.parentElement?.classList.toggle(i.COLLAPSED,!a),t?r.forEach(e=>{e.classList.toggle(i.COLLAPSED,!a)}):r.forEach((e,t)=>{const i=a?"slideIn":"slideOut";e.style.animationDelay=t*n+"ms",e.classList.add(i),e.addEventListener("animationend",()=>{e.classList.toggle("collapsed",!a),e.classList.remove(i)},{once:!0})})}_setItemToLocalStorage(e,t){t?this.collapsedItems.add(e):this.collapsedItems.delete(e),yo(w.COLLAPSE,[...this.collapsedItems]),this._handleCollapsedChange()}_reloadWindow(e=2e3){this._store._showToast("Reloading window to apply changes..."),setTimeout(()=>{window.location.reload()},e)}_removeSidebarConfigFromStorage(){return wc()}_removeUserSidebarData(){return Tt(this.hass.connection)}}window.SidebarOrganizer||(window.SidebarOrganizer=new iu);const nu=/sidebar-organizer.js/i,ou=Array.from(document.scripts),su=[];for(const e of ou)if(e?.innerText?.trim()?.startsWith("import(")){const t=e.innerText.split(";")?.map(e=>e.trim());for(const e of t)su.push(e.replace(/^import\(\"/,"").replace(/\"\)/,""))}if(su.some(e=>nu.test(e)));else{const e=ou.find(e=>nu.test(e.src))?.src,t=e?.match(/\/hacsfiles.*$/)?.[0];zo(t)}var ru="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z",au="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",lu="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",cu="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",du="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z",hu="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z",uu="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z",fu="M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z",pu="M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z",gu="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",mu="M22 7V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2H14.1C14 2.3 14 2.7 14 3S14 3.7 14.1 4H4V16H20V7.9C20.7 7.8 21.4 7.4 22 7M16 3C16 4.7 17.3 6 19 6S22 4.7 22 3 20.7 0 19 0 16 1.3 16 3Z",_u="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z",bu="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",yu="M9.25,5L12.5,1.75L15.75,5H9.25M15.75,19L12.5,22.25L9.25,19H15.75M8.89,14.3H6L5.28,17H2.91L6,7H9L12.13,17H9.67L8.89,14.3M6.33,12.68H8.56L7.93,10.56L7.67,9.59L7.42,8.63H7.39L7.17,9.6L6.93,10.58L6.33,12.68M13.05,17V15.74L17.8,8.97V8.91H13.5V7H20.73V8.34L16.09,15V15.08H20.8V17H13.05Z";function vu(e,t){const i=new Array(t.length),n=e.length;for(let o=0;o<t.length;o++){let s=t[o];s=Number.isInteger(s)?s:Math.trunc(s)||0,s<0&&(s+=n),i[o]=e[s]}return i}function wu(e,t){const i={};for(let n=0;n<e.length;n++){const o=t(e[n]);i[o]=(i[o]??0)+1}return i}class Au{capacity;available;deferredTasks=[];constructor(e){this.capacity=e,this.available=e}async acquire(){if(!(this.available>0))return new Promise(e=>{this.deferredTasks.push(e)});this.available--}release(){const e=this.deferredTasks.shift();null==e?this.available<this.capacity&&this.available++:e()}}function Eu(e,t){const i=new Au(t);return async function(...t){try{return await i.acquire(),await e.apply(this,t)}finally{i.release()}}}async function Cu(e,t,i){null!=i?.concurrency&&(t=Eu(t,i.concurrency));const n=await Promise.all(e.map(t));return e.filter((e,t)=>n[t])}function Ou(e,t,i=1){return jt(e.map(e=>t(e)),i)}async function Su(e,t,i){null!=i?.concurrency&&(t=Eu(t,i.concurrency));return jt(await Promise.all(e.map(t)))}function xu(e){return jt(e,1/0)}function Iu(e,t){return xu(e.map(e=>t(e)))}async function ku(e,t,i){null!=i?.concurrency&&(t=Eu(t,i.concurrency)),await Promise.all(e.map(t))}function Nu(e,t){for(let i=e.length-1;i>=0;i--){t(e[i],i,e)}}function Tu(e,t){return 0===Vi(t,e).length}function $u(e,t,i){return 0===Ki(t,e,i).length}function Lu(e,t){const i={};for(let n=0;n<e.length;n++){const o=e[n];i[t(o)]=o}return i}function Du(e,t,i){return null!=i?.concurrency&&(t=Eu(t,i.concurrency)),Promise.all(e.map(t))}function Mu(e,t,i){return e<t?"asc"===i?-1:1:e>t?"asc"===i?1:-1:0}function Pu(e,t,i){return e.slice().sort((e,n)=>{const o=i.length;for(let s=0;s<t.length;s++){const r=o>s?i[s]:i[o-1],a=t[s],l="function"==typeof a,c=Mu(l?a(e):e[a],l?a(n):n[a],r);if(0!==c)return c}return 0})}function Ru(e,t){const i=[],n=[];for(let o=0;o<e.length;o++){const s=e[o];t(s)?i.push(s):n.push(s)}return[i,n]}function Bu(e,t){const i=vu(e,t),n=new Set(t.slice().sort((e,t)=>t-e));for(const t of n)e.splice(t,1);return i}async function ju(e,t,i){let n=0;null==i&&(i=e[0],n=1);let o=i;for(let i=n;i<e.length;i++)o=await t(o,e[i],i,e);return o}function Hu(e,t){return Pu(e,t,["asc"])}function Gu(e,t){for(let i=e.length-1;i>=0;i--)if(!t(e[i]))return e.slice(i+1);return e.slice()}function Uu(e,t){const i=[];for(let n=0;n<e.length;n++){const o=e[n];if(!t(o))break;i.push(o)}return i}function Fu(e,t,i=0,n=e.length){const o=e.length,s=Math.max(i>=0?i:o+i,0),r=Math.min(n>=0?n:o+n,o),a=e.slice();for(let e=s;e<r;e++)a[e]=t;return a}function Vu(e,t){return dn(e.concat(t))}function zu(e,t,i){return In(e.concat(t),i)}function qu(e,t,i){return kn(e.concat(t),i)}function Ku(e,t){const i=Math.max(...e.map(e=>e.length)),n=new Array(i);for(let o=0;o<i;o++){const i=new Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t][o];n[o]=t(...i)}return n}function Wu(e,t){return Vi(Vu(e,t),cn(e,t))}function Yu(e,t,i){return qi(zu(e,t,i),hn(e,t,i),i)}function Ju(e,t,i){return Ki(qu(e,t,i),un(e,t,i),i)}function Xu(e,t){const i={};for(let n=0;n<e.length;n++)i[e[n]]=t[n];return i}function Qu(e,...t){const i=[e,...t.slice(0,-1)],n=t[t.length-1],o=Math.max(...i.map(e=>e.length)),s=Array(o);for(let e=0;e<o;e++){const t=i.map(t=>t[e]);s[e]=n(...t)}return s}var Zu,ef,tf,nf,of,sf=Object.freeze({__proto__:null,at:vu,chunk:Mt,compact:Bt,countBy:wu,difference:Vi,differenceBy:qi,differenceWith:Ki,drop:Wi,dropRight:Zi,dropRightWhile:en,dropWhile:tn,fill:sn,filterAsync:Cu,flatMap:Ou,flatMapAsync:Su,flatMapDeep:Iu,flatten:jt,flattenDeep:xu,forEachAsync:ku,forEachRight:Nu,groupBy:an,head:rn,initial:ln,intersection:cn,intersectionBy:hn,intersectionWith:un,isSubset:Tu,isSubsetWith:$u,keyBy:Lu,last:zi,limitAsync:Eu,mapAsync:Du,maxBy:Rn,minBy:Bn,orderBy:Pu,partition:Ru,pull:mn,pullAt:Bu,reduceAsync:ju,remove:_n,sample:bn,sampleSize:wn,shuffle:An,sortBy:Hu,tail:On,take:Sn,takeRight:xn,takeRightWhile:Gu,takeWhile:Uu,toFilled:Fu,union:Vu,unionBy:zu,unionWith:qu,uniq:dn,uniqBy:In,uniqWith:kn,unzip:Nn,unzipWith:Ku,windowed:$n,without:Tn,xor:Wu,xorBy:Yu,xorWith:Ju,zip:Ln,zipObject:Xu,zipWith:Qu}),rf={},af=[],lf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
/*!
 * iro.js v5.5.2
 * 2016-2021 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */function cf(e,t){for(var i in t)e[i]=t[i];return e}function df(e){var t=e.parentNode;t&&t.removeChild(e)}function hf(e,t,i){var n,o,s,r,a=arguments;if(t=cf({},t),arguments.length>3)for(i=[i],n=3;n<arguments.length;n++)i.push(a[n]);if(null!=i&&(t.children=i),null!=e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===t[o]&&(t[o]=e.defaultProps[o]);return r=t.key,null!=(s=t.ref)&&delete t.ref,null!=r&&delete t.key,uf(e,t,r,s)}function uf(e,t,i,n){var o={type:e,props:t,key:i,ref:n,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return Zu.vnode&&Zu.vnode(o),o}function ff(e){return e.children}function pf(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return uf(null,e,null,null);if(null!=e.__e||null!=e.__c){var t=uf(e.type,e.props,e.key,null);return t.__e=e.__e,t}return e}function gf(e,t){this.props=e,this.context=t}function mf(e,t){if(null==t)return e.__p?mf(e.__p,e.__p.__k.indexOf(e)+1):null;for(var i;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e)return i.__e;return"function"==typeof e.type?mf(e):null}function _f(e){var t,i;if(null!=(e=e.__p)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e){e.__e=e.__c.base=i.__e;break}return _f(e)}}function bf(e){(!e.__d&&(e.__d=!0)&&1===ef.push(e)||nf!==Zu.debounceRendering)&&(nf=Zu.debounceRendering,(Zu.debounceRendering||tf)(yf))}function yf(){var e,t,i,n,o,s,r,a;for(ef.sort(function(e,t){return t.__v.__b-e.__v.__b});e=ef.pop();)e.__d&&(i=void 0,n=void 0,s=(o=(t=e).__v).__e,r=t.__P,a=t.u,t.u=!1,r&&(i=[],n=Sf(r,o,cf({},o),t.__n,void 0!==r.ownerSVGElement,null,i,a,null==s?mf(o):s),xf(i,o),n!=s&&_f(o)))}function vf(e,t,i,n,o,s,r,a,l){var c,d,h,u,f,p,g,m=i&&i.__k||af,_=m.length;if(a==rf&&(a=null!=s?s[0]:_?mf(i,0):null),c=0,t.__k=wf(t.__k,function(i){if(null!=i){if(i.__p=t,i.__b=t.__b+1,null===(h=m[c])||h&&i.key==h.key&&i.type===h.type)m[c]=void 0;else for(d=0;d<_;d++){if((h=m[d])&&i.key==h.key&&i.type===h.type){m[d]=void 0;break}h=null}if(u=Sf(e,i,h=h||rf,n,o,s,r,null,a,l),(d=i.ref)&&h.ref!=d&&(g||(g=[])).push(d,i.__c||u,i),null!=u){if(null==p&&(p=u),null!=i.l)u=i.l,i.l=null;else if(s==h||u!=a||null==u.parentNode){e:if(null==a||a.parentNode!==e)e.appendChild(u);else{for(f=a,d=0;(f=f.nextSibling)&&d<_;d+=2)if(f==u)break e;e.insertBefore(u,a)}"option"==t.type&&(e.value="")}a=u.nextSibling,"function"==typeof t.type&&(t.l=u)}}return c++,i}),t.__e=p,null!=s&&"function"!=typeof t.type)for(c=s.length;c--;)null!=s[c]&&df(s[c]);for(c=_;c--;)null!=m[c]&&Nf(m[c],m[c]);if(g)for(c=0;c<g.length;c++)kf(g[c],g[++c],g[++c])}function wf(e,t,i){if(null==i&&(i=[]),null==e||"boolean"==typeof e)t&&i.push(t(null));else if(Array.isArray(e))for(var n=0;n<e.length;n++)wf(e[n],t,i);else i.push(t?t(pf(e)):e);return i}function Af(e,t,i,n,o){var s;for(s in i)s in t||Cf(e,s,null,i[s],n);for(s in t)o&&"function"!=typeof t[s]||"value"===s||"checked"===s||i[s]===t[s]||Cf(e,s,t[s],i[s],n)}function Ef(e,t,i){"-"===t[0]?e.setProperty(t,i):e[t]="number"==typeof i&&!1===lf.test(t)?i+"px":null==i?"":i}function Cf(e,t,i,n,o){var s,r,a,l,c;if("key"===(t=o?"className"===t?"class":t:"class"===t?"className":t)||"children"===t);else if("style"===t)if(s=e.style,"string"==typeof i)s.cssText=i;else{if("string"==typeof n&&(s.cssText="",n=null),n)for(r in n)i&&r in i||Ef(s,r,"");if(i)for(a in i)n&&i[a]===n[a]||Ef(s,a,i[a])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),i?(n||e.addEventListener(t,Of,l),(e.t||(e.t={}))[t]=i):e.removeEventListener(t,Of,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&!o&&t in e?e[t]=null==i?"":i:"function"!=typeof i&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==i||!1===i?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),i):null==i||!1===i?e.removeAttribute(t):e.setAttribute(t,i))}function Of(e){return this.t[e.type](Zu.event?Zu.event(e):e)}function Sf(e,t,i,n,o,s,r,a,l,c){var d,h,u,f,p,g,m,_,b,y,v=t.type;if(void 0!==t.constructor)return null;(d=Zu.__b)&&d(t);try{e:if("function"==typeof v){if(_=t.props,b=(d=v.contextType)&&n[d.__c],y=d?b?b.props.value:d.__p:n,i.__c?m=(h=t.__c=i.__c).__p=h.__E:("prototype"in v&&v.prototype.render?t.__c=h=new v(_,y):(t.__c=h=new gf(_,y),h.constructor=v,h.render=Tf),b&&b.sub(h),h.props=_,h.state||(h.state={}),h.context=y,h.__n=n,u=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=v.getDerivedStateFromProps&&cf(h.__s==h.state?h.__s=cf({},h.__s):h.__s,v.getDerivedStateFromProps(_,h.__s)),u)null==v.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&r.push(h);else{if(null==v.getDerivedStateFromProps&&null==a&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(_,y),!a&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(_,h.__s,y)){for(h.props=_,h.state=h.__s,h.__d=!1,h.__v=t,t.__e=null!=l?l!==i.__e?l:i.__e:null,t.__k=i.__k,d=0;d<t.__k.length;d++)t.__k[d]&&(t.__k[d].__p=t);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(_,h.__s,y)}for(f=h.props,p=h.state,h.context=y,h.props=_,h.state=h.__s,(d=Zu.__r)&&d(t),h.__d=!1,h.__v=t,h.__P=e,d=h.render(h.props,h.state,h.context),t.__k=wf(null!=d&&d.type==ff&&null==d.key?d.props.children:d),null!=h.getChildContext&&(n=cf(cf({},n),h.getChildContext())),u||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(f,p)),vf(e,t,i,n,o,s,r,l,c),h.base=t.__e;d=h.__h.pop();)h.__s&&(h.state=h.__s),d.call(h);u||null==f||null==h.componentDidUpdate||h.componentDidUpdate(f,p,g),m&&(h.__E=h.__p=null)}else t.__e=If(i.__e,t,i,n,o,s,r,c);(d=Zu.diffed)&&d(t)}catch(e){Zu.__e(e,t,i)}return t.__e}function xf(e,t){for(var i;i=e.pop();)try{i.componentDidMount()}catch(e){Zu.__e(e,i.__v)}Zu.__c&&Zu.__c(t)}function If(e,t,i,n,o,s,r,a){var l,c,d,h,u=i.props,f=t.props;if(o="svg"===t.type||o,null==e&&null!=s)for(l=0;l<s.length;l++)if(null!=(c=s[l])&&(null===t.type?3===c.nodeType:c.localName===t.type)){e=c,s[l]=null;break}if(null==e){if(null===t.type)return document.createTextNode(f);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),s=null}return null===t.type?u!==f&&(null!=s&&(s[s.indexOf(e)]=null),e.data=f):t!==i&&(null!=s&&(s=af.slice.call(e.childNodes)),d=(u=i.props||rf).dangerouslySetInnerHTML,h=f.dangerouslySetInnerHTML,a||(h||d)&&(h&&d&&h.__html==d.__html||(e.innerHTML=h&&h.__html||"")),Af(e,f,u,o,a),t.__k=t.props.children,h||vf(e,t,i,n,"foreignObject"!==t.type&&o,s,r,rf,a),a||("value"in f&&void 0!==f.value&&f.value!==e.value&&(e.value=null==f.value?"":f.value),"checked"in f&&void 0!==f.checked&&f.checked!==e.checked&&(e.checked=f.checked))),e}function kf(e,t,i){try{"function"==typeof e?e(t):e.current=t}catch(e){Zu.__e(e,i)}}function Nf(e,t,i){var n,o,s;if(Zu.unmount&&Zu.unmount(e),(n=e.ref)&&kf(n,null,t),i||"function"==typeof e.type||(i=null!=(o=e.__e)),e.__e=e.l=null,null!=(n=e.__c)){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(e){Zu.__e(e,t)}n.base=n.__P=null}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&Nf(n[s],t,i);null!=o&&df(o)}function Tf(e,t,i){return this.constructor(e,i)}function $f(e,t,i){var n,o,s;Zu.__p&&Zu.__p(e,t),o=(n=i===of)?null:t.__k,e=hf(ff,null,[e]),s=[],Sf(t,t.__k=e,o||rf,rf,void 0!==t.ownerSVGElement,o?null:af.slice.call(t.childNodes),s,!1,rf,n),xf(s,e)}function Lf(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Df(e,t,i){return t&&Lf(e.prototype,t),e}function Mf(){return Mf=Object.assign||function(e){for(var t=arguments,i=1;i<arguments.length;i++){var n=t[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Mf.apply(this,arguments)}Zu={},gf.prototype.setState=function(e,t){var i=this.__s!==this.state&&this.__s||(this.__s=cf({},this.state));("function"!=typeof e||(e=e(i,this.props)))&&cf(i,e),null!=e&&this.__v&&(this.u=!1,t&&this.__h.push(t),bf(this))},gf.prototype.forceUpdate=function(e){this.__v&&(e&&this.__h.push(e),this.u=!0,bf(this))},gf.prototype.render=ff,ef=[],tf="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nf=Zu.debounceRendering,Zu.__e=function(e,t,i){for(var n;t=t.__p;)if((n=t.__c)&&!n.__p)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(e));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(e)}return bf(n.__E=n)}catch(t){e=t}throw e},of=rf;var Pf="[-\\+]?\\d+%?",Rf="[-\\+]?\\d*\\.\\d+%?",Bf="(?:"+Rf+")|(?:"+Pf+")",jf="[\\s|\\(]+("+Bf+")[,|\\s]+("+Bf+")[,|\\s]+("+Bf+")\\s*\\)?",Hf="[\\s|\\(]+("+Bf+")[,|\\s]+("+Bf+")[,|\\s]+("+Bf+")[,|\\s]+("+Bf+")\\s*\\)?",Gf=new RegExp("rgb"+jf),Uf=new RegExp("rgba"+Hf),Ff=new RegExp("hsl"+jf),Vf=new RegExp("hsla"+Hf),zf="^(?:#?|0x?)",qf="([0-9a-fA-F]{1})",Kf="([0-9a-fA-F]{2})",Wf=new RegExp(zf+qf+qf+qf+"$"),Yf=new RegExp(zf+qf+qf+qf+qf+"$"),Jf=new RegExp(zf+Kf+Kf+Kf+"$"),Xf=new RegExp(zf+Kf+Kf+Kf+Kf+"$"),Qf=2e3,Zf=4e4,ep=Math.log,tp=Math.round,ip=Math.floor;function np(e,t,i){return Math.min(Math.max(e,t),i)}function op(e,t){var i=e.indexOf("%")>-1,n=parseFloat(e);return i?t/100*n:n}function sp(e){return parseInt(e,16)}function rp(e){return e.toString(16).padStart(2,"0")}var ap=function(){function e(e,t){this.$={h:0,s:0,v:0,a:1},e&&this.set(e),this.onChange=t,this.initialValue=Mf({},this.$)}var t=e.prototype;return t.set=function(t){if("string"==typeof t)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t)?this.hexString=t:/^rgba?/.test(t)?this.rgbString=t:/^hsla?/.test(t)&&(this.hslString=t);else{if("object"!=typeof t)throw new Error("Invalid color value");t instanceof e?this.hsva=t.hsva:"r"in t&&"g"in t&&"b"in t?this.rgb=t:"h"in t&&"s"in t&&"v"in t?this.hsv=t:"h"in t&&"s"in t&&"l"in t?this.hsl=t:"kelvin"in t&&(this.kelvin=t.kelvin)}},t.setChannel=function(e,t,i){var n;this[e]=Mf({},this[e],((n={})[t]=i,n))},t.reset=function(){this.hsva=this.initialValue},t.clone=function(){return new e(this)},t.unbind=function(){this.onChange=void 0},e.hsvToRgb=function(e){var t=e.h/60,i=e.s/100,n=e.v/100,o=ip(t),s=t-o,r=n*(1-i),a=n*(1-s*i),l=n*(1-(1-s)*i),c=o%6,d=[l,n,n,a,r,r][c],h=[r,r,l,n,n,a][c];return{r:np(255*[n,a,r,r,l,n][c],0,255),g:np(255*d,0,255),b:np(255*h,0,255)}},e.rgbToHsv=function(e){var t=e.r/255,i=e.g/255,n=e.b/255,o=Math.max(t,i,n),s=Math.min(t,i,n),r=o-s,a=0,l=o,c=0===o?0:r/o;switch(o){case s:a=0;break;case t:a=(i-n)/r+(i<n?6:0);break;case i:a=(n-t)/r+2;break;case n:a=(t-i)/r+4}return{h:60*a%360,s:np(100*c,0,100),v:np(100*l,0,100)}},e.hsvToHsl=function(e){var t=e.s/100,i=e.v/100,n=(2-t)*i,o=n<=1?n:2-n,s=o<1e-9?0:t*i/o;return{h:e.h,s:np(100*s,0,100),l:np(50*n,0,100)}},e.hslToHsv=function(e){var t=2*e.l,i=e.s*(t<=100?t:200-t)/100,n=t+i<1e-9?0:2*i/(t+i);return{h:e.h,s:np(100*n,0,100),v:np((t+i)/2,0,100)}},e.kelvinToRgb=function(e){var t,i,n,o=e/100;return o<66?(t=255,i=-155.25485562709179-.44596950469579133*(i=o-2)+104.49216199393888*ep(i),n=o<20?0:.8274096064007395*(n=o-10)-254.76935184120902+115.67994401066147*ep(n)):(t=351.97690566805693+.114206453784165*(t=o-55)-40.25366309332127*ep(t),i=325.4494125711974+.07943456536662342*(i=o-50)-28.0852963507957*ep(i),n=255),{r:np(ip(t),0,255),g:np(ip(i),0,255),b:np(ip(n),0,255)}},e.rgbToKelvin=function(t){for(var i,n=t.r,o=t.b,s=Qf,r=Zf;r-s>.4;){i=.5*(r+s);var a=e.kelvinToRgb(i);a.b/a.r>=o/n?r=i:s=i}return i},Df(e,[{key:"hsv",get:function(){var e=this.$;return{h:e.h,s:e.s,v:e.v}},set:function(e){var t=this.$;if(e=Mf({},t,e),this.onChange){var i={h:!1,v:!1,s:!1,a:!1};for(var n in t)i[n]=e[n]!=t[n];this.$=e,(i.h||i.s||i.v||i.a)&&this.onChange(this,i)}else this.$=e}},{key:"hsva",get:function(){return Mf({},this.$)},set:function(e){this.hsv=e}},{key:"hue",get:function(){return this.$.h},set:function(e){this.hsv={h:e}}},{key:"saturation",get:function(){return this.$.s},set:function(e){this.hsv={s:e}}},{key:"value",get:function(){return this.$.v},set:function(e){this.hsv={v:e}}},{key:"alpha",get:function(){return this.$.a},set:function(e){this.hsv=Mf({},this.hsv,{a:e})}},{key:"kelvin",get:function(){return e.rgbToKelvin(this.rgb)},set:function(t){this.rgb=e.kelvinToRgb(t)}},{key:"red",get:function(){return this.rgb.r},set:function(e){this.rgb=Mf({},this.rgb,{r:e})}},{key:"green",get:function(){return this.rgb.g},set:function(e){this.rgb=Mf({},this.rgb,{g:e})}},{key:"blue",get:function(){return this.rgb.b},set:function(e){this.rgb=Mf({},this.rgb,{b:e})}},{key:"rgb",get:function(){var t=e.hsvToRgb(this.$),i=t.r,n=t.g,o=t.b;return{r:tp(i),g:tp(n),b:tp(o)}},set:function(t){this.hsv=Mf({},e.rgbToHsv(t),{a:void 0===t.a?1:t.a})}},{key:"rgba",get:function(){return Mf({},this.rgb,{a:this.alpha})},set:function(e){this.rgb=e}},{key:"hsl",get:function(){var t=e.hsvToHsl(this.$),i=t.h,n=t.s,o=t.l;return{h:tp(i),s:tp(n),l:tp(o)}},set:function(t){this.hsv=Mf({},e.hslToHsv(t),{a:void 0===t.a?1:t.a})}},{key:"hsla",get:function(){return Mf({},this.hsl,{a:this.alpha})},set:function(e){this.hsl=e}},{key:"rgbString",get:function(){var e=this.rgb;return"rgb("+e.r+", "+e.g+", "+e.b+")"},set:function(e){var t,i,n,o,s=1;if((t=Gf.exec(e))?(i=op(t[1],255),n=op(t[2],255),o=op(t[3],255)):(t=Uf.exec(e))&&(i=op(t[1],255),n=op(t[2],255),o=op(t[3],255),s=op(t[4],1)),!t)throw new Error("Invalid rgb string");this.rgb={r:i,g:n,b:o,a:s}}},{key:"rgbaString",get:function(){var e=this.rgba;return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"},set:function(e){this.rgbString=e}},{key:"hexString",get:function(){var e=this.rgb;return"#"+rp(e.r)+rp(e.g)+rp(e.b)},set:function(e){var t,i,n,o,s=255;if((t=Wf.exec(e))?(i=17*sp(t[1]),n=17*sp(t[2]),o=17*sp(t[3])):(t=Yf.exec(e))?(i=17*sp(t[1]),n=17*sp(t[2]),o=17*sp(t[3]),s=17*sp(t[4])):(t=Jf.exec(e))?(i=sp(t[1]),n=sp(t[2]),o=sp(t[3])):(t=Xf.exec(e))&&(i=sp(t[1]),n=sp(t[2]),o=sp(t[3]),s=sp(t[4])),!t)throw new Error("Invalid hex string");this.rgb={r:i,g:n,b:o,a:s/255}}},{key:"hex8String",get:function(){var e=this.rgba;return"#"+rp(e.r)+rp(e.g)+rp(e.b)+rp(ip(255*e.a))},set:function(e){this.hexString=e}},{key:"hslString",get:function(){var e=this.hsl;return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},set:function(e){var t,i,n,o,s=1;if((t=Ff.exec(e))?(i=op(t[1],360),n=op(t[2],100),o=op(t[3],100)):(t=Vf.exec(e))&&(i=op(t[1],360),n=op(t[2],100),o=op(t[3],100),s=op(t[4],1)),!t)throw new Error("Invalid hsl string");this.hsl={h:i,s:n,l:o,a:s}}},{key:"hslaString",get:function(){var e=this.hsla;return"hsla("+e.h+", "+e.s+"%, "+e.l+"%, "+e.a+")"},set:function(e){this.hslString=e}}]),e}(),lp={sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3};function cp(e){var t,i=e.width,n=e.sliderSize,o=e.borderWidth,s=e.handleRadius,r=e.padding,a=e.sliderShape,l="horizontal"===e.layoutDirection;return n=null!=(t=n)?t:2*r+2*s,"circle"===a?{handleStart:e.padding+e.handleRadius,handleRange:i-2*r-2*s,width:i,height:i,cx:i/2,cy:i/2,radius:i/2-o/2}:{handleStart:n/2,handleRange:i-n,radius:n/2,x:0,y:0,width:l?n:i,height:l?i:n}}function dp(e,t){var i=t.hsva,n=t.rgb;switch(e.sliderType){case"red":return n.r/2.55;case"green":return n.g/2.55;case"blue":return n.b/2.55;case"alpha":return 100*i.a;case"kelvin":var o=e.minTemperature,s=e.maxTemperature-o,r=(t.kelvin-o)/s*100;return Math.max(0,Math.min(r,100));case"hue":return i.h/=3.6;case"saturation":return i.s;default:return i.v}}function hp(e,t,i){var n,o=cp(e),s=o.handleRange,r=o.handleStart;n="horizontal"===e.layoutDirection?-1*i+s+r:t-r,n=Math.max(Math.min(n,s),0);var a=Math.round(100/s*n);switch(e.sliderType){case"kelvin":var l=e.minTemperature;return l+(e.maxTemperature-l)*(a/100);case"alpha":return a/100;case"hue":return 3.6*a;case"red":case"blue":case"green":return 2.55*a;default:return a}}function up(e,t){var i=cp(e),n=i.width,o=i.height,s=i.handleRange,r=i.handleStart,a="horizontal"===e.layoutDirection,l=a?n/2:o/2,c=r+dp(e,t)/100*s;return a&&(c=-1*c+s+2*r),{x:a?l:c,y:a?c:l}}function fp(e,t){var i=t.hsv,n=t.rgb;switch(e.sliderType){case"red":return[[0,"rgb(0,"+n.g+","+n.b+")"],[100,"rgb(255,"+n.g+","+n.b+")"]];case"green":return[[0,"rgb("+n.r+",0,"+n.b+")"],[100,"rgb("+n.r+",255,"+n.b+")"]];case"blue":return[[0,"rgb("+n.r+","+n.g+",0)"],[100,"rgb("+n.r+","+n.g+",255)"]];case"alpha":return[[0,"rgba("+n.r+","+n.g+","+n.b+",0)"],[100,"rgb("+n.r+","+n.g+","+n.b+")"]];case"kelvin":for(var o=[],s=e.minTemperature,r=e.maxTemperature,a=r-s,l=s,c=0;l<r;l+=a/8,c+=1){var d=ap.kelvinToRgb(l),h=d.r,u=d.g,f=d.b;o.push([12.5*c,"rgb("+h+","+u+","+f+")"])}return o;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var p=ap.hsvToHsl({h:i.h,s:0,v:i.v}),g=ap.hsvToHsl({h:i.h,s:100,v:i.v});return[[0,"hsl("+p.h+","+p.s+"%,"+p.l+"%)"],[100,"hsl("+g.h+","+g.s+"%,"+g.l+"%)"]];default:var m=ap.hsvToHsl({h:i.h,s:i.s,v:100});return[[0,"#000"],[100,"hsl("+m.h+","+m.s+"%,"+m.l+"%)"]]}}var pp,gp=2*Math.PI,mp=function(e,t){return(e%t+t)%t},_p=function(e,t){return Math.sqrt(e*e+t*t)};function bp(e){return e.width/2-e.padding-e.handleRadius-e.borderWidth}function yp(e,t,i){var n=vp(e),o=n.cx,s=n.cy,r=e.width/2;return _p(o-t,s-i)<r}function vp(e){var t=e.width/2;return{width:e.width,radius:t-e.borderWidth,cx:t,cy:t}}function wp(e,t,i){var n=e.wheelAngle,o=e.wheelDirection;return i&&"clockwise"===o?t=n+t:"clockwise"===o?t=360-n+t:i&&"anticlockwise"===o?t=n+180-t:"anticlockwise"===o&&(t=n-t),mp(t,360)}function Ap(e,t){var i=t.hsv,n=vp(e),o=n.cx,s=n.cy,r=bp(e),a=(180+wp(e,i.h,!0))*(gp/360),l=i.s/100*r,c="clockwise"===e.wheelDirection?-1:1;return{x:o+l*Math.cos(a)*c,y:s+l*Math.sin(a)*c}}function Ep(e,t,i){var n=vp(e),o=n.cx,s=n.cy,r=bp(e);t=o-t,i=s-i;var a=wp(e,Math.atan2(-i,-t)*(360/gp)),l=Math.min(_p(t,i),r);return{h:Math.round(a),s:Math.round(100/r*l)}}function Cp(e){var t=e.width,i=e.boxHeight;return{width:t,height:null!=i?i:t,radius:e.padding+e.handleRadius}}function Op(e,t,i){var n=Cp(e),o=n.width,s=n.height,r=n.radius,a=(t-r)/(o-2*r)*100,l=(i-r)/(s-2*r)*100;return{s:Math.max(0,Math.min(a,100)),v:Math.max(0,Math.min(100-l,100))}}function Sp(e,t){var i=Cp(e),n=i.width,o=i.height,s=i.radius,r=t.hsv,a=s,l=n-2*s,c=o-2*s;return{x:a+r.s/100*l,y:a+(c-r.v/100*c)}}function xp(e,t){return[[[0,"#fff"],[100,"hsl("+t.hue+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]]}function Ip(e){pp||(pp=document.getElementsByTagName("base"));var t=window.navigator.userAgent,i=/^((?!chrome|android).)*safari/i.test(t),n=/iPhone|iPod|iPad/i.test(t),o=window.location;return(i||n)&&pp.length>0?o.protocol+"//"+o.host+o.pathname+o.search+e:e}function kp(e,t,i,n){for(var o=0;o<n.length;o++){var s=n[o].x-t,r=n[o].y-i;if(Math.sqrt(s*s+r*r)<e.handleRadius)return o}return null}function Np(e){return{boxSizing:"border-box",border:e.borderWidth+"px solid "+e.borderColor}}function Tp(e,t,i){return e+"-gradient("+t+", "+i.map(function(e){var t=e[0];return e[1]+" "+t+"%"}).join(",")+")"}function $p(e){return"string"==typeof e?e:e+"px"}var Lp={width:300,height:300,color:"#fff",colors:[],padding:6,layoutDirection:"vertical",borderColor:"#fff",borderWidth:0,handleRadius:8,activeHandleRadius:null,handleSvg:null,handleProps:{x:0,y:0},wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",sliderSize:null,sliderMargin:12,boxHeight:null},Dp=["mousemove","touchmove","mouseup","touchend"],Mp=function(e){function t(t){e.call(this,t),this.uid=(Math.random()+1).toString(36).substring(5)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(e){var t=this.handleEvent.bind(this),i={onMouseDown:t,ontouchstart:t},n="horizontal"===e.layoutDirection,o=null===e.margin?e.sliderMargin:e.margin,s={overflow:"visible",display:n?"inline-block":"block"};return e.index>0&&(s[n?"marginLeft":"marginTop"]=o),hf(ff,null,e.children(this.uid,i,s))},t.prototype.handleEvent=function(e){var t=this,i=this.props.onInput,n=this.base.getBoundingClientRect();e.preventDefault();var o=e.touches?e.changedTouches[0]:e,s=o.clientX-n.left,r=o.clientY-n.top;switch(e.type){case"mousedown":case"touchstart":!1!==i(s,r,0)&&Dp.forEach(function(e){document.addEventListener(e,t,{passive:!1})});break;case"mousemove":case"touchmove":i(s,r,1);break;case"mouseup":case"touchend":i(s,r,2),Dp.forEach(function(e){document.removeEventListener(e,t,{passive:!1})})}},t}(gf);function Pp(e){var t=e.r,i=e.url,n=t,o=t;return hf("svg",{className:"IroHandle IroHandle--"+e.index+" "+(e.isActive?"IroHandle--isActive":""),style:{"-webkit-tap-highlight-color":"rgba(0, 0, 0, 0);",transform:"translate("+$p(e.x)+", "+$p(e.y)+")",willChange:"transform",top:$p(-t),left:$p(-t),width:$p(2*t),height:$p(2*t),position:"absolute",overflow:"visible"}},i&&hf("use",Object.assign({xlinkHref:Ip(i)},e.props)),!i&&hf("circle",{cx:n,cy:o,r:t,fill:"none","stroke-width":2,stroke:"#000"}),!i&&hf("circle",{cx:n,cy:o,r:t-2,fill:e.fill,"stroke-width":2,stroke:"#fff"}))}function Rp(e){var t=e.activeIndex,i=void 0!==t&&t<e.colors.length?e.colors[t]:e.color,n=cp(e),o=n.width,s=n.height,r=n.radius,a=up(e,i),l=fp(e,i);return hf(Mp,Object.assign({},e,{onInput:function(t,n,o){var s=hp(e,t,n);e.parent.inputActive=!0,i[e.sliderType]=s,e.onInput(o,e.id)}}),function(t,n,c){return hf("div",Object.assign({},n,{className:"IroSlider",style:Object.assign({},{position:"relative",width:$p(o),height:$p(s),borderRadius:$p(r),background:"conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",backgroundSize:"8px 8px"},c)}),hf("div",{className:"IroSliderGradient",style:Object.assign({},{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:$p(r),background:Tp("linear","horizontal"===e.layoutDirection?"to top":"to right",l)},Np(e))}),hf(Pp,{isActive:!0,index:i.index,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:a.x,y:a.y}))})}function Bp(e){var t=Cp(e),i=t.width,n=t.height,o=t.radius,s=e.colors,r=e.parent,a=e.activeIndex,l=void 0!==a&&a<e.colors.length?e.colors[a]:e.color,c=xp(e,l),d=s.map(function(t){return Sp(e,t)});return hf(Mp,Object.assign({},e,{onInput:function(t,i,n){if(0===n){var o=kp(e,t,i,d);null!==o?r.setActiveColor(o):(r.inputActive=!0,l.hsv=Op(e,t,i),e.onInput(n,e.id))}else 1===n&&(r.inputActive=!0,l.hsv=Op(e,t,i));e.onInput(n,e.id)}}),function(t,r,a){return hf("div",Object.assign({},r,{className:"IroBox",style:Object.assign({},{width:$p(i),height:$p(n),position:"relative"},a)}),hf("div",{className:"IroBox",style:Object.assign({},{width:"100%",height:"100%",borderRadius:$p(o)},Np(e),{background:Tp("linear","to bottom",c[1])+","+Tp("linear","to right",c[0])})}),s.filter(function(e){return e!==l}).map(function(t){return hf(Pp,{isActive:!1,index:t.index,fill:t.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:d[t.index].x,y:d[t.index].y})}),hf(Pp,{isActive:!0,index:l.index,fill:l.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:d[l.index].x,y:d[l.index].y}))})}Pp.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}},Rp.defaultProps=Object.assign({},lp);var jp="conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",Hp="conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";function Gp(e){var t=vp(e).width,i=e.colors;e.borderWidth;var n=e.parent,o=e.color,s=o.hsv,r=i.map(function(t){return Ap(e,t)}),a={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",boxSizing:"border-box"};return hf(Mp,Object.assign({},e,{onInput:function(t,i,s){if(0===s){if(!yp(e,t,i))return!1;var a=kp(e,t,i,r);null!==a?n.setActiveColor(a):(n.inputActive=!0,o.hsv=Ep(e,t,i),e.onInput(s,e.id))}else 1===s&&(n.inputActive=!0,o.hsv=Ep(e,t,i));e.onInput(s,e.id)}}),function(n,l,c){return hf("div",Object.assign({},l,{className:"IroWheel",style:Object.assign({},{width:$p(t),height:$p(t),position:"relative"},c)}),hf("div",{className:"IroWheelHue",style:Object.assign({},a,{transform:"rotateZ("+(e.wheelAngle+90)+"deg)",background:"clockwise"===e.wheelDirection?jp:Hp})}),hf("div",{className:"IroWheelSaturation",style:Object.assign({},a,{background:"radial-gradient(circle closest-side, #fff, transparent)"})}),e.wheelLightness&&hf("div",{className:"IroWheelLightness",style:Object.assign({},a,{background:"#000",opacity:1-s.v/100})}),hf("div",{className:"IroWheelBorder",style:Object.assign({},a,Np(e))}),i.filter(function(e){return e!==o}).map(function(t){return hf(Pp,{isActive:!1,index:t.index,fill:t.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:r[t.index].x,y:r[t.index].y})}),hf(Pp,{isActive:!0,index:o.index,fill:o.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:r[o.index].x,y:r[o.index].y}))})}function Up(e){var t=function(t,i){var n,o=document.createElement("div");function s(){var e=t instanceof Element?t:document.querySelector(t);e.appendChild(n.base),n.onMount(e)}return $f(hf(e,Object.assign({},{ref:function(e){return n=e}},i)),o),"loading"!==document.readyState?s():document.addEventListener("DOMContentLoaded",s),n};return t.prototype=e.prototype,Object.assign(t,e),t.__component=e,t}var Fp=function(e){function t(t){var i=this;e.call(this,t),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=t.id,(t.colors.length>0?t.colors:[t.color]).forEach(function(e){return i.addColor(e)}),this.setActiveColor(0),this.state=Object.assign({},t,{color:this.color,colors:this.colors,layout:t.layout})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.addColor=function(e,t){void 0===t&&(t=this.colors.length);var i=new ap(e,this.onColorChange.bind(this));this.colors.splice(t,0,i),this.colors.forEach(function(e,t){return e.index=t}),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",i)},t.prototype.removeColor=function(e){var t=this.colors.splice(e,1)[0];t.unbind(),this.colors.forEach(function(e,t){return e.index=t}),this.state&&this.setState({colors:this.colors}),t.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",t)},t.prototype.setActiveColor=function(e){this.color=this.colors[e],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},t.prototype.setColors=function(e,t){var i=this;void 0===t&&(t=0),this.colors.forEach(function(e){return e.unbind()}),this.colors=[],e.forEach(function(e){return i.addColor(e)}),this.setActiveColor(t),this.emit("color:setAll",this.colors)},t.prototype.on=function(e,t){var i=this,n=this.events;(Array.isArray(e)?e:[e]).forEach(function(e){(n[e]||(n[e]=[])).push(t),i.deferredEvents[e]&&(i.deferredEvents[e].forEach(function(e){t.apply(null,e)}),i.deferredEvents[e]=[])})},t.prototype.off=function(e,t){var i=this;(Array.isArray(e)?e:[e]).forEach(function(e){var n=i.events[e];n&&n.splice(n.indexOf(t),1)})},t.prototype.emit=function(e){for(var t=this,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var o=this.activeEvents;!!o.hasOwnProperty(e)&&o[e]||(o[e]=!0,(this.events[e]||[]).forEach(function(e){return e.apply(t,i)}),o[e]=!1)},t.prototype.deferredEmit=function(e){for(var t,i=[],n=arguments.length-1;n-- >0;)i[n]=arguments[n+1];var o=this.deferredEvents;(t=this).emit.apply(t,[e].concat(i)),(o[e]||(o[e]=[])).push(i)},t.prototype.setOptions=function(e){this.setState(e)},t.prototype.resize=function(e){this.setOptions({width:e})},t.prototype.reset=function(){this.colors.forEach(function(e){return e.reset()}),this.setState({colors:this.colors})},t.prototype.onMount=function(e){this.el=e,this.deferredEmit("mount",this)},t.prototype.onColorChange=function(e,t){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",e,t)),this.emit("color:change",e,t)},t.prototype.emitInputEvent=function(e,t){0===e?this.emit("input:start",this.color,t):1===e?this.emit("input:move",this.color,t):2===e&&this.emit("input:end",this.color,t)},t.prototype.render=function(e,t){var i=this,n=t.layout;return Array.isArray(n)||(n=[{component:Gp},{component:Rp}],t.transparency&&n.push({component:Rp,options:{sliderType:"alpha"}})),hf("div",{class:"IroColorPicker",id:t.id,style:{display:t.display}},n.map(function(e,n){var o=e.component,s=e.options;return hf(o,Object.assign({},t,s,{ref:void 0,onInput:i.emitInputEvent.bind(i),parent:i,index:n}))}))},t}(gf);Fp.defaultProps=Object.assign({},Lp,{colors:[],display:"block",id:null,layout:"default",margin:null});var Vp,zp=Up(Fp);!function(e){var t;e.version="5.5.2",e.Color=ap,e.ColorPicker=zp,(t=e.ui||(e.ui={})).h=hf,t.ComponentBase=Mp,t.Handle=Pp,t.Slider=Rp,t.Wheel=Gp,t.Box=Bp}(Vp||(Vp={}));var qp=Vp;const Kp=(e,t,i,n)=>{const o=i??{...e._sidebarConfig},s=e.hass||e._hass;return Se` <ha-form
    .hass="${s}"
    .data="${o}"
    .schema="${t}"
    .configKey="${n?.configKey}"
    .computeLabel="${Wp}"
    .computeHelper="${Yp}"
    @value-changed="${t=>e._valueChanged(t)}"
  ></ha-form>`};function Wp(e){if("entity"===e.name&&!e.context?.group_entity)return;return qn((e.label||e.name||e.title||"").replace(/_/g," "))}function Yp(e){return e.helper||void 0}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jp={ATTRIBUTE:1,CHILD:2},Xp=e=>(...t)=>({_$litDirective$:e,values:t});let Qp=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zp="important",eg=" !"+Zp,tg=Xp(class extends Qp{constructor(e){if(super(e),e.type!==Jp.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return null==n?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const n=t[e];if(null!=n){this.ft.add(e);const t="string"==typeof n&&n.endsWith(eg);e.includes("-")||t?i.setProperty(e,t?n.slice(0,-11):n,t?Zp:""):i[e]=n}}return xe}}),ig=Ot(e=>[{title:"Appearance Settings",type:"expandable",expanded:!0,flatten:!0,icon:"mdi:format-text",schema:[{type:"grid",schema:[{name:"header_title",type:"string"},{name:"hide_header_toggle",type:"boolean",helper:"Toggle button for collapsing/expanding groups",default:!1},{name:"animation_off",label:"Disable Animation",type:"boolean",helper:"Disable slide-in/slide-out animation for group toggling",default:!1},{name:"animation_delay",label:"Animation Delay (ms)",type:"integer",helper:"Delay for each item (default: 50ms)",default:50,disabled:!0===e?.animation_off,valueMin:0,valueMax:100},{name:"text_transformation",label:"Text Transformation",default:"capitalize",selector:{select:{mode:"dropdown",options:[...S.map(e=>({value:e,label:e.charAt(0).toUpperCase()+e.slice(1)}))]}}},{name:"move_settings_from_fixed",label:"Move Settings item from Fixed",type:"boolean",helper:"Move the Settings item from the fixed panels to be user-configurable",default:!1}]}]}]),ng=["light","dark"],og=(e=!1)=>[{name:"custom_theme",title:"Custom Theme & Force Mode",icon:"mdi:palette",type:"expandable",expanded:!0,flatten:!1,schema:[{name:"",type:"grid",flatten:!1,schema:[{name:"theme",label:"Custom Theme",required:!1,selector:{theme:{include_default:!1}}},{name:"mode",label:"Force Mode",required:!1,disabled:e,selector:{select:{mode:"dropdown",options:ng.map(e=>({value:e,label:e.charAt(0).toUpperCase()+e.slice(1)}))}}}]}]}],sg=["more-info","toggle","navigate","url","perform-action","assist","none"],rg={tap_action:"Tap behavior",hold_action:"Hold behavior",double_tap_action:"Double tap behavior",icon_tap_action:"Icon tap behavior",icon_hold_action:"Icon hold behavior",icon_double_tap_action:"Icon double tap behavior"},ag=(e=!1)=>[{name:"",type:"optional_actions",flatten:!0,schema:(e?["hold_action","double_tap_action"]:["tap_action","hold_action","double_tap_action"]).map(e=>({name:e,label:rg[e],selector:{ui_action:{actions:sg,default_action:"none"}}}))}];var lg;!function(e){e[e.LOADING=1]="LOADING",e[e.READY=2]="READY",e[e.ERROR=3]="ERROR"}(lg||(lg={}));const cg=["header_title","hide_header_toggle","animation_off","animation_delay","text_transformation","move_settings_from_fixed"];let dg=class extends qe{constructor(){super(...arguments),this._picker=null,this._baseColorFromTheme={},this._state=lg.LOADING,this._initColor="",this._initCustomStyles={},this._supportedModes=[]}connectedCallback(){super.connectedCallback()}firstUpdated(e){if(super.firstUpdated(e),!this._sidebarConfig)return;const t=L(this._sidebarConfig.color_config,this.hass);this._colorConfigMode=t?"dark":"light"}shouldUpdate(e){return!e.has("_colorConfigMode")||void 0===this._colorConfigMode||(this._setTheme(this._colorConfigMode),this._state=lg.LOADING,this._initCustomStyles={...this._sidebarConfig.color_config?.[this._colorConfigMode]?.custom_styles||{}},setTimeout(()=>{this._state=lg.READY},200),!0)}updated(e){if(super.updated(e),e.has("_currentConfigValue")&&void 0!==this._currentConfigValue?setTimeout(()=>{this._initColorPicker()},50):e.has("_currentConfigValue")&&void 0===this._currentConfigValue&&this._destroyColorPicker(),e.has("_state")&&this._state===lg.READY&&this._getYamlEditor(),e.has("_sidebarConfig")&&this._sidebarConfig){const t=e.get("_sidebarConfig")?.color_config?.custom_theme,i=this._sidebarConfig.color_config?.custom_theme;if(t&&i&&t.theme&&t.theme!==i.theme)if(this._supportsMode(i.theme)){const e=this._getSupportedModes(i.theme);this._supportedModes=e,1===e.length?this._colorConfigMode=e[0]:this._colorConfigMode=i.mode||(this.hass.themes.darkMode?"dark":"light")}else{const e=/dark/i,t=/light/i.test(i.theme),n=e.test(i.theme);this._colorConfigMode=t?"light":n||this.hass.themes.darkMode?"dark":"light",this._supportedModes=[]}t&&i&&t.mode!==i.mode&&(this._colorConfigMode=i.mode||(this.hass.themes.darkMode?"dark":"light"))}}_supportsMode(e){return e in this.hass.themes.themes&&(void 0!==this.hass.themes.themes[e].modes&&("modes"in this.hass.themes.themes[e]&&this.hass.themes.themes[e].modes&&Object.keys(this.hass.themes.themes[e].modes).length>0))}_getSupportedModes(e){return this._supportsMode(e)?Object.keys(this.hass.themes.themes[e].modes):[]}_getYamlEditor(){const e=this.shadowRoot?.querySelector("ha-yaml-editor");e&&(this._yamlEditor=e)}_getDefaultColors(){const e=this.shadowRoot?.getElementById("theme-container");if(!e)return;const t=gd(e);this._baseColorFromTheme=t}_destroyColorPicker(){this._picker=null;const e=this.shadowRoot?.querySelector(".picker-wrapper"),t=this.shadowRoot?.getElementById("picker");e&&t&&(e.setAttribute("hidden",""),t.innerHTML="")}_initColorPicker(){const e=void 0!==this._currentConfigValue,t=this.shadowRoot?.querySelector(".picker-wrapper"),i=this.shadowRoot?.getElementById("picker");if(!t||!i)return;t.toggleAttribute("hidden",!e);const n=this._colorConfigMode,o=this._sidebarConfig.color_config?.[n]||{},s=this._currentConfigValue,r=Sc(o[s]||this._baseColorFromTheme[s]),a="hex"===r.getFormat()?r.toHex8String():r.toRgbString();this._initColor=o[s]??void 0,this._picker=qp.ColorPicker(i,{width:150,color:a,borderWidth:1,borderColor:"#fff",layoutDirection:"horizontal",layout:[{component:qp.ui.Wheel,options:{}},{component:qp.ui.Slider,options:{sliderType:"hue"}},{component:qp.ui.Slider,options:{sliderType:"saturation"}},{component:qp.ui.Slider,options:{sliderType:"value"}},{component:qp.ui.Slider,options:{sliderType:"alpha"}}]}),this._picker.on(["color:init","color:change"],e=>{this._currentConfigValue=s;const t=this._picker?.props.color,i="hex"===Sc(t).getFormat()?e.hex8String:e.rgbaString;this._handleConfigChange(this._currentConfigValue,i)})}_handleConfigChange(e,t){const i=this._colorConfigMode,n={...this._sidebarConfig.color_config||{}},o={...n[i]||{}};o[e]=t,this._sidebarConfig={...this._sidebarConfig,color_config:{...n,[i]:o}},this._dispatchConfig(this._sidebarConfig)}_setTheme(e){const t=this._sidebarConfig?.color_config?.custom_theme?.theme||this.hass.themes.theme,i=this.shadowRoot?.getElementById("theme-container");k(i,this.hass,t,e),setTimeout(()=>{this._getDefaultColors(),this._initCustomStyles=this._sidebarConfig.color_config?.[e]?.custom_styles||[]},0),this._dialog._dialogPreview&&this._dialog._dialogPreview._colorConfigMode!==e&&(this._dialog._dialogPreview._colorConfigMode=e)}render(){const e=Fn({...this._sidebarConfig||{}},[...cg]);return Se`
      <div id="theme-container"></div>
      ${Kp(this,ig(e),e,{configKey:"appearance"})}
      <div class="color-container">${this._renderColorConfigFields()}</div>
    `}_renderBorderRadiusField(){return Se`
      <div class="color-item">
        <div class="header-row">
          <ha-icon
            ?hidden=${void 0===this._sidebarConfig?.color_config?.border_radius}
            icon="mdi:refresh"
            @click=${()=>this._resetColorConfig("border_radius")}
          ></ha-icon>
          ${this._createPicker({label:"Border Radius (px)",value:this._sidebarConfig?.color_config?.border_radius||"",placeHolder:0,configValue:"border_radius",pickerType:"border_radius",modeConfig:"light"})}
        </div>
      </div>
    `}_renderColorConfigFields(){const e=void 0!==this._currentConfigValue,t=this._renderThemePickerRow(),i=this._colorConfigMode,n=this._sidebarConfig?.color_config?.[i],o=n&&Object.keys(n).some(e=>!Vn(n[e])),s=Se`<div class="header-row" ?hidden=${e}>
      <div class="title">
        Theme: ${this._sidebarConfig?.color_config?.custom_theme?.theme||this.hass.themes.theme}
      </div>
      <ha-button
        appearance="plain"
        size="small"
        variant="warning"
        .disabled=${!o}
        @click=${()=>this._resetColorConfig("currentMode")}
        >RESET ALL</ha-button
      >
    </div> `,r=Se` <div class="header-row">
      <ha-button appearance="plain" size="small" variant="warning" @click=${()=>this._picker?.color.reset()}
        >Reset</ha-button
      >
      <ha-button appearance="plain" size="small" @click=${()=>this._handleColorPicker("cancel")}>Cancel</ha-button>
      <ha-button appearance="outlined" size="small" @click=${()=>this._handleColorPicker("save")}>Save</ha-button>
    </div>`,a=Se`
      <div class="config-colors grid">
        ${E.map(e=>this._renderDividerColor(e.value,e.label))}
        ${this._renderBorderRadiusField()} ${this._renderCustomStylesField()}
      </div>
      <div class="picker-wrapper" hidden>
        <div id="picker"></div>
        ${r}
      </div>
    `,l=Je({content:a,options:{expanded:!1,header:"Custom colors and styles",darkBg:!0}}),c=Se`
      <div>${t} ${s}</div>
      ${l}
    `;return Je({content:c,options:{expanded:!0,header:"Color Configuration",icon:"mdi:palette",secondary:"Customize the colors of the sidebar"}})}_renderThemePickerRow(){const e={...this._sidebarConfig?.color_config?.custom_theme||{}},t=this._colorConfigMode,i={custom_theme:{...e}},n=this._supportedModes,o=e=>n.length>0&&!n.includes(e),s=Se` <div class="header-row">
      <div class="title">Select mode to edit:</div>
      <div class="inputs">
        <ha-formfield .label=${"Light Mode"} .disabled=${o("light")}>
          <ha-radio
            @change=${e=>{this._colorConfigMode=e.target.value}}
            name="light_mode"
            value="light"
            .checked=${"light"===t}
            .disabled=${o("light")}
          >
          </ha-radio>
        </ha-formfield>
        <ha-formfield .label=${"Dark Mode"} .disabled=${o("dark")}>
          <ha-radio
            @change=${e=>{this._colorConfigMode=e.target.value}}
            name="dark_mode"
            value="dark"
            .checked=${"dark"===t}
            .disabled=${o("dark")}
          >
          </ha-radio>
        </ha-formfield>
      </div>
    </div>`;return Se`${Kp(this,og(2!==n.length),i,{configKey:"custom_theme"})}
    ${n.length?s:Ie}`}_handleColorPicker(e){const t=this._picker?.color;if(!t)return;const i=this._currentConfigValue;switch(e){case"cancel":const e=this._initColor;this._toggleColorPicker(i),this._handleConfigChange(i,e),this._initColor="";break;case"save":this._toggleColorPicker(i),this._initColor="";break;case"hex":const n=t.hex8String;this._handleConfigChange(i,n),this._picker?.color.set(n);break;case"rgb":const o=t.rgbaString;this._picker?.color.set(o),this._handleConfigChange(i,o)}}_renderDividerColor(e,t){if(!this._sidebarConfig)return Se``;const i=this._colorConfigMode,n=(this._sidebarConfig?.color_config||{})[i]||{},o=this._baseColorFromTheme,s=n[e]??o[e],r=n[e]||"",a=void 0===n[e]||n[e]===o[e],l=e=>{if(!e)return;let t=Sc(e);const i=t.getAlpha()<=.5,s=n.custom_sidebar_background_color||o.custom_sidebar_background_color;return i&&(t=Sc(s)),t.isLight()?"#000":"#fff"},c={backgroundColor:s,color:l(s),borderColor:Sc(l(s)).setAlpha(.2).toString()};return Se`
      <div class="color-item" id=${e}>
        <div class="header-row config-item">
          <ha-icon-button
            ?hidden=${a||void 0!==this._currentConfigValue}
            .path=${bu}
            color="var(--sidebar-text-color)"
            @click=${()=>this._resetColorConfig(e)}
          ></ha-icon-button>

          ${this._createPicker({label:t,value:r,configValue:e,placeHolder:o[e],modeConfig:i,pickerType:"text"})}
          ${this._currentConfigValue===e?Se` <div class="change-format">
                <ha-button appearance="plain" size="small" @click=${()=>this._handleColorPicker("hex")}
                  >HEX</ha-button
                >
                <ha-button appearance="plain" size="small" @click=${()=>this._handleColorPicker("rgb")}
                  >RGBA</ha-button
                >
              </div>`:Se` <a
                class="color-picker-box"
                style=${tg(c)}
                @click=${()=>this._toggleColorPicker(e)}
              >
                <ha-icon icon="mdi:format-color-fill"></ha-icon>
              </a>`}
        </div>
      </div>
    `}_renderCustomStylesField(){if(!this._sidebarConfig||!this._colorConfigMode)return Se``;if(this._state===lg.LOADING)return Se`<ha-fade-in .delay=${500}><ha-spinner size="large"></ha-spinner></ha-fade-in>`;const e=this._colorConfigMode,t=this._sidebarConfig?.color_config?.[e]?.custom_styles,i=!Vn(t),n={custom_styles:this._initCustomStyles};return Se`
      <div class="color-item" id="custom_styles">
        ${Kp(this,[{name:"custom_styles",helper:"Define custom CSS styles for the sidebar.",selector:{object:{}}}],n,{configKey:"custom_styles"})}
        <ha-button
          appearance="plain"
          size="small"
          slot="extra-actions"
          .disabled=${!i}
          style="float: inline-end;"
          @click=${()=>this._resetColorConfig("custom_styles")}
          >Reset</ha-button
        >
      </div>
    `}_toggleColorPicker(e){const t=this.shadowRoot?.querySelectorAll(".color-item");t&&(t.forEach(t=>{const i=t.getAttribute("id"),n=t.hasAttribute("selected");i===e?(t.toggleAttribute("selected",!n),this._currentConfigValue=n?void 0:e):t.toggleAttribute("hidden",!n)}),[...t].some(e=>e.hasAttribute("selected"))||t.forEach(e=>e.removeAttribute("hidden")))}_createPicker({label:e,value:t,configValue:i,placeHolder:n,pickerType:o,modeConfig:s}){const r=`${i}_${o}`;return Se`
      <ha-selector
        style="width: 100%;"
        .hass=${this.hass}
        .label=${e}
        .placeholder=${n}
        .selector=${{text:{selector:{text:{selector:{text:{}}}},flexStyle:!0,required:!0},border_radius:{selector:{number:{min:0,max:100,step:1,mode:"box"}},flexStyle:!0,required:!1,classList:"color-picker",helper:"Enter a value for border radius (px)"},boolean:{selector:{boolean:{}}}}[o].selector}
        .required=${!1}
        .value=${t}
        .configValue=${i}
        .modeConfig=${s}
        .configType=${r}
        @value-changed=${this._handleColorChange}
      >
      </ha-selector>
    `}_resetColorConfig(e){if(!this._sidebarConfig.color_config)return;const t=this._colorConfigMode,i={...this._sidebarConfig.color_config||{}},n={...i[t]||{}};"border_radius"===e?delete i.border_radius:"currentMode"===e?delete i[t]:"custom_styles"===e?(this._initCustomStyles={},delete n.custom_styles,i[t]=n):(delete n[e],i[t]=n),this._sidebarConfig={...this._sidebarConfig,color_config:i},this._dispatchConfig(this._sidebarConfig)}_dispatchConfig(e){const t=new CustomEvent("sidebar-changed",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}_handleColorChange(e){e.stopPropagation();const t=e.target.configValue,i=e.target.configType,n=e.target.modeConfig,o=e.detail.value,s={};let r={...this._sidebarConfig.color_config||{}},a={...r[n]||{}};i.includes("_text")?o&&""!==o&&void 0!==o?(a[t]=o,s[n]=a):(delete a[t],s[n]=a):"border_radius"===t&&(o&&""!==o&&void 0!==o?(r[t]=o,s.border_radius=o):delete r[t]),Object.keys(s).length>0&&(this._sidebarConfig={...this._sidebarConfig,color_config:{...r,...s}}),this._dispatchConfig(this._sidebarConfig)}_valueChanged(e){if(e.stopPropagation(),!this._sidebarConfig)return;const t={...this._sidebarConfig||{}},i=e.target.configKey,n={...e.detail.value};let o={};if(i&&"appearance"===i){const e=Fn(t,cg);JSON.stringify(e)!==JSON.stringify(n)&&Object.keys(n).forEach(e=>{o[e]=n[e]})}else if(i&&"custom_theme"===i){const e={...t.color_config?.custom_theme||{}};if(JSON.stringify(e)!==JSON.stringify(n.custom_theme)){const e={...this._sidebarConfig.color_config||{}};e.custom_theme={...e.custom_theme,...n.custom_theme},o.color_config=e}}else if(i&&"custom_styles"===i){const e=n.custom_styles;return this._initCustomStyles=e||{},void this._handleCustomStylesChange()}Object.keys(o).length>0&&(this._sidebarConfig={...this._sidebarConfig,...o},this._dispatchConfig(this._sidebarConfig))}_handleCustomStylesChange(){const e=this._colorConfigMode,t={...this._sidebarConfig.color_config||{}};let i={...t[e]||{}};i.custom_styles={...this._initCustomStyles||{}},t[e]=i,this._sidebarConfig={...this._sidebarConfig,color_config:{...t}},md(this,"sidebar-config-changed",{config:this._sidebarConfig})}static get styles(){return[G`
        :host *[hidden] {
          display: none !important;
        }
        :host {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          --form-grid-column-count: 2;
        }
        @media (max-width: 600px) {
          :host {
            --form-grid-column-count: unset;
          }
        }
        /* .color-container {
          display: flex;
          flex: auto;
          height: 100%;
          flex-direction: column;
          gap: 1em;
        } */

        /* .color-container {
          display: block;
          border: 1px solid var(--divider-color);
          flex: auto;
          height: 100%;
        } */

        .header-row {
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          --mdc-icon-button-size: 42px;
          /* padding-block: 0.5rem; */
        }
        .header-row.center {
          justify-content: center;
        }

        .header-row.config-item {
          place-items: anchor-center;
          color: var(--secondary-text-color);
        }
        .header-row.config-item ha-icon:hover {
          cursor: pointer;
          color: var(--primary-color);
        }
        .primary {
          font-size: 1.2rem;
          font-weight: 500;
          background: var(--app-header-background-color);
          padding-block: 0.5rem;
          text-transform: uppercase;
        }
        .title {
          font-size: 1.05rem;
          margin-block: 0.5rem;
          line-height: 100%;
        }

        .config-colors {
          display: grid;
          gap: var(--side-dialog-gutter);
          padding-block: var(--side-dialog-gutter);
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        .config-colors.grid > *:nth-last-child(1) {
          grid-column: 1 / -1; /* Spans all columns */
        }

        .config-colors .color-item {
          display: flex;
        }
        #custom_styles.color-item {
          display: block;
        }
        .change-format {
          display: inline-block;
          flex: 0;
          width: fit-content;
        }

        a.color-picker-box {
          width: fit-content;
          position: relative;
          display: inline-block;
          box-sizing: border-box;
          padding: 0.5rem 0.5rem;
          min-height: 2em;
          border: 1px solid;
          outline: none;
          overflow: visible;
          color: var(--sidebar-text-color);
          background-color: var(--divider-bg-color);
          text-align: center;
          cursor: pointer;
          text-decoration: none;
          margin-inline: 0.5rem;
          border-radius: inherit;
          transition: all 0.3s ease;
        }

        .picker-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: var(--side-dialog-padding);
          flex-direction: column;
          gap: var(--side-dialog-padding);
        }

        .picker-buttons {
          display: flex;
          width: 100%;
          justify-content: space-around;
          align-items: center;
        }
        .inputs {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 0 12px;
          flex: 1;
        }
      `]}};ft([_t({attribute:!1})],dg.prototype,"hass",void 0),ft([_t({attribute:!1})],dg.prototype,"_dialog",void 0),ft([_t({attribute:!1})],dg.prototype,"_sidebarConfig",void 0),ft([bt()],dg.prototype,"_colorConfigMode",void 0),ft([bt()],dg.prototype,"_picker",void 0),ft([bt()],dg.prototype,"_currentConfigValue",void 0),ft([bt()],dg.prototype,"_baseColorFromTheme",void 0),ft([bt()],dg.prototype,"_state",void 0),ft([bt()],dg.prototype,"_initCustomStyles",void 0),ft([bt()],dg.prototype,"_yamlEditor",void 0),ft([bt()],dg.prototype,"_colorConfigByMode",void 0),ft([bt()],dg.prototype,"_supportedModes",void 0),dg=ft([pt("sidebar-dialog-colors")],dg);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:hg}=Ue,ug=()=>document.createComment(""),fg=(e,t,i)=>{const n=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=n.insertBefore(ug(),o),s=n.insertBefore(ug(),o);i=new hg(t,s,e,e.options)}else{const t=i._$AB.nextSibling,s=i._$AM,r=s!==e;if(r){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==s._$AU&&i._$AP(t)}if(t!==o||r){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;n.insertBefore(e,o),e=t}}}return i},pg=(e,t,i=e)=>(e._$AI(t,i),e),gg={},mg=(e,t=gg)=>e._$AH=t,_g=e=>e._$AH,bg=e=>{e._$AR(),e._$AA.remove()},yg=(e,t,i)=>{const n=new Map;for(let o=t;o<=i;o++)n.set(e[o],o);return n},vg=Xp(class extends Qp{constructor(e){if(super(e),e.type!==Jp.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let n;void 0===i?i=t:void 0!==t&&(n=t);const o=[],s=[];let r=0;for(const t of e)o[r]=n?n(t,r):r,s[r]=i(t,r),r++;return{values:s,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,n]){const o=_g(e),{values:s,keys:r}=this.dt(t,i,n);if(!Array.isArray(o))return this.ut=r,s;const a=this.ut??=[],l=[];let c,d,h=0,u=o.length-1,f=0,p=s.length-1;for(;h<=u&&f<=p;)if(null===o[h])h++;else if(null===o[u])u--;else if(a[h]===r[f])l[f]=pg(o[h],s[f]),h++,f++;else if(a[u]===r[p])l[p]=pg(o[u],s[p]),u--,p--;else if(a[h]===r[p])l[p]=pg(o[h],s[p]),fg(e,l[p+1],o[h]),h++,p--;else if(a[u]===r[f])l[f]=pg(o[u],s[f]),fg(e,o[h],o[u]),u--,f++;else if(void 0===c&&(c=yg(r,f,p),d=yg(a,h,u)),c.has(a[h]))if(c.has(a[u])){const t=d.get(r[f]),i=void 0!==t?o[t]:null;if(null===i){const t=fg(e,o[h]);pg(t,s[f]),l[f]=t}else l[f]=pg(i,s[f]),fg(e,o[h],i),o[t]=null;f++}else bg(o[u]),u--;else bg(o[h]),h++;for(;f<=p;){const t=fg(e,l[p+1]);pg(t,s[f]),l[f++]=t}for(;h<=u;){const e=o[h++];null!==e&&bg(e)}return this.ut=r,mg(e,l),xe}}),wg=G`
  :host *[hidden] {
    display: none;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :host ha-expansion-panel .container.expanded {
    background-color: var(--primary-background-color) !important;
  }

  .config-content {
    display: flex;
    flex-direction: column;
    gap: var(--side-dialog-gutter);
    margin-top: 1rem;
    min-height: 250px;
  }

  .group-list {
    /* border-block: solid 1px var(--divider-color); */
    border-block: 0.5px solid var(--divider-color);
    --mdc-icon-button-size: 42px;
  }

  .group-item-row {
    position: relative;
    /* width: 100%; */
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-block: var(--side-dialog-gutter);
  }

  .group-item-row .handle {
    cursor: grab;
    color: var(--secondary-text-color);
    margin-inline-end: var(--side-dialog-padding);
    flex: 0 0 42px;
  }
  .group-name {
    flex: 1 1 auto;
    gap: var(--side-dialog-padding);
    display: flex;
    align-items: center;
  }
  .group-name:hover * {
    cursor: pointer;
    color: var(--primary-color) !important;
  }
  .group-name > ha-icon {
    color: var(--secondary-text-color);
  }
  .group-name-items {
    display: flex;
    flex-direction: column;
  }

  .group-name-items span {
    font-size: 0.8rem;
    color: var(--secondary-text-color);
    line-height: 0.8rem;
  }

  .group-actions {
    display: flex;
    /* gap: 8px; */
    align-items: center;
    /* opacity: 1 !important; */
    margin-inline: var(--side-dialog-gutter);
    color: var(--secondary-text-color);
  }

  /* .group-actions > ha-icon-button {
    color: var(--secondary-text-color);
    --mdc-icon-button-size: 36px;
  } */
  .header-row {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    --mdc-icon-button-size: 42px;
    height: auto;
  }
  .header-row.center {
    justify-content: center;
  }
  .header-row.flex-end {
    justify-content: flex-end;
  }

  .header-row.flex-icon {
    justify-content: flex-end;
    background-color: var(--divider-color);
    min-height: 42px;
  }
  .header-row.flex-icon > span {
    margin-inline-start: 0.5rem;
    flex: 1;
  }
  .header-row.flex-icon > ha-icon {
    margin-inline-end: 0.5rem;
    flex: 0;
  }

  .sortable-ghost {
    opacity: 0.5;
    background-color: var(--primary-color);
  }

  #items-preview-wrapper {
    display: flex;
    flex-direction: row;
    gap: var(--side-dialog-gutter);
    justify-content: center;
  }
  @media all and (max-width: 700px), all and (max-height: 500px) {
    #items-preview-wrapper {
      flex-wrap: wrap;
    }
  }
  .items-container {
    display: block;
    border: 1px solid var(--divider-color);
    flex: 1 1 100%;
    height: 100%;
  }
  .selector-container {
    display: block;
    max-height: 300px;
    overflow: auto;
    padding: 6px 4px;
  }
  .preview-container {
    min-width: 230px;
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid var(--divider-color);
    /* display: block; */
  }
  ul.selected-items {
    list-style-type: none;
    padding-inline-start: 0px;
    font-family: monospace;
    color: var(--codemirror-atom);
    text-align: center;
    line-height: 150%;
    margin: 0;
  }
  ul.selected-items li {
    padding: 0.5rem;
    border-bottom: 0.5px solid var(--divider-color);
    display: flex;
    align-items: anchor-center;
  }
  ul.selected-items li:last-child {
    border-bottom: none;
  }

  ul.selected-items li .handle {
    cursor: grab;
    flex: 0 0 42px;
    color: var(--secondary-text-color);
    margin-inline-end: var(--side-dialog-padding);
  }
  ul.selected-items li .handle:hover {
    cursor: grabbing;
  }

  code {
    font-family: monospace;
    background-color: var(--code-editor-background-color);
    color: var(--codemirror-atom);
    border: 0.5px solid var(--divider-color);
    padding: 2px 4px;
    font-size: inherit;
    text-align: center;
    line-height: 150%;
  }

  pre.rendered {
    clear: both;
    white-space: pre-wrap;
    background-color: var(--secondary-background-color);
    padding: 8px;
    margin-top: 0px;
    margin-bottom: 0px;
    direction: ltr;
    overflow: auto;
    max-height: calc(var(--code-mirror-max-height) - 30px);
  }
  /* .card-content {

	} */
`,Ag=["bottomPanel","customGroup","hiddenItems","notification"],Eg=["bottom_items","bottom_grid_items"],Cg={bottomPanel:"Bottom Panels",customGroup:"Custom Groups",hiddenItems:"Hidden Items",notification:"Notification",bottom_items:"Bottom Items",bottom_grid_items:"Bottom Grid Items"};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Og,Sg;!function(e){e.BOTTOM_PANEL="bottomPanel",e.CUSTOM_GROUP="customGroup",e.HIDDEN_ITEMS="hiddenItems",e.NOTIFICATION="notification"}(Og||(Og={})),function(e){e.BOTTOM="bottom_items",e.BOTTOM_GRID="bottom_grid_items"}(Sg||(Sg={}));let xg=class extends qe{constructor(){super(...arguments),this._selectedTab=Og.BOTTOM_PANEL,this._selectedBottom=Sg.BOTTOM,this._selectedGroup=null,this._selectedNotification=null,this._reloadItems=!1,this._reloadPanelItems=!1,this._handleSubItemAction=e=>{e.stopPropagation();const t=e.detail?.item?.data,i=e.detail?.item?.value;this._handleGroupAction(t.action,i)},this._groupMoved=e=>{e.stopPropagation();const{oldIndex:t,newIndex:i}=e.detail,n=Object.entries(this._sidebarConfig.custom_groups||{}).concat();n.splice(i,0,n.splice(t,1)[0]);const o=Object.fromEntries(n);this._sidebarConfig={...this._sidebarConfig,custom_groups:o},this._dispatchConfig(this._sidebarConfig)},this._handleGroupAction=async(e,t)=>{const i=[...this._sidebarConfig?.default_collapsed||[]],n={...this._sidebarConfig.custom_groups||{}},o={...this._sidebarConfig.pinned_groups||{}},s=e=>{this._sidebarConfig={...this._sidebarConfig,...e},this._dispatchConfig(this._sidebarConfig),this.requestUpdate()},r={};switch(e){case"edit-items":this._selectedGroup=t;break;case"rename":let e=await yd(this,"Enter new group name",t,"Rename");if(null===e||""===e)return;if(Object.keys(n).includes(e))return void await vd(this,`${O.NAME_EXISTS}`);if(i.includes(t)){const n=i.filter(e=>e!==t);n.push(e),r.default_collapsed=n}const a=Object.fromEntries(Object.entries(n).map(([i,n])=>[i===t?e:i,n]));r.custom_groups=a,s(r);break;case"collapsed-group":i.includes(t)?r.default_collapsed=i.filter(e=>e!==t):r.default_collapsed=[...i,t],s(r);break;case"delete":if(!await bd(this,`Are you sure you want to delete this group? ${t}`,"Delete"))return;i.includes(t)&&(r.default_collapsed=i.filter(e=>e!==t)),delete n[t],r.custom_groups=n,s(r);break;case"pinned-group":o.hasOwnProperty(t)?delete o[t]:o[t]=!0,r.pinned_groups=o,s(r);break;case"preview":this._dialog._dialogPreview._toggleGroup(t,"show");break;case"preview-item":this._dialog._dialogPreview._toggleGroup(t)}},this._itemMoved=e=>{if(e.stopPropagation(),!this._sidebarConfig)return;const{oldIndex:t,newIndex:i}=e.detail,n=e=>{this._sidebarConfig={...this._sidebarConfig,...e},this._dispatchConfig(this._sidebarConfig)};switch(this._selectedTab){case Og.BOTTOM_PANEL:const e=this._selectedBottom,o=[...this._sidebarConfig[e]||[]].concat();o.splice(i,0,o.splice(t,1)[0]),n({[e]:o});break;case Og.CUSTOM_GROUP:const s={...this._sidebarConfig.custom_groups||{}},r=this._selectedGroup;if(r){const e=[...s[r]||[]].concat();e.splice(i,0,e.splice(t,1)[0]),s[r]=e,n({custom_groups:s})}}},this._togglePromptNewGroup=async()=>{const e={...this._sidebarConfig.custom_groups||{}},t=await yd(this,"Enter new group name","Some Group Name","Create");var i;null!==t&&(i=(i=t).trim().toLowerCase(),Object.keys(e).map(e=>e.trim().toLowerCase()).includes(i)?await vd(this,"Group name already exists. Please choose a different one."):(e[t]=[],this._sidebarConfig={...this._sidebarConfig,custom_groups:e},this._dispatchConfig(this._sidebarConfig),this.requestUpdate()))},this._handlePinGroupChange=e=>{e.stopPropagation();const t=e.target.groupName,i=e.detail.value,n={...this._sidebarConfig?.pinned_groups||{}};i.is_pinned?i.icon?n[t]={icon:i.icon}:n[t]=!0:delete n[t],this._sidebarConfig={...this._sidebarConfig,pinned_groups:n},this._dispatchConfig(this._sidebarConfig)}}updated(e){if(e.has("_selectedTab")&&void 0!==this._selectedTab){this._selectedTab!==Og.CUSTOM_GROUP&&(this._selectedGroup=null)}if(e.has("_selectedBottom")&&void 0!==this._selectedBottom){const e=this._selectedBottom;this._dialog._dialogPreview._toggleBottomPanel(e)}if(e.has("_selectedGroup")&&this._dialog._dialogPreview._toggleGroup(this._selectedGroup),e.has("_selectedNotification")){const e=this._selectedNotification||"";e||this._dialog._dialogPreview._toggleGroup(e);const t=this._sidebarConfig.custom_groups||{},i=this._sidebarConfig.bottom_items||[];let n="";const o=Object.keys(t).find(i=>t[i].includes(e)),s=i.includes(e);o?n=o:s&&(n="bottom_items"),this._dialog._dialogPreview._toggleGroup(n)}}render(){const e=Ag.map(e=>({value:e,label:Cg[e]})),t=Se` <ha-control-select
      .value=${this._selectedTab}
      .options=${e}
      @value-changed=${e=>{this._selectedTab=e.detail.value}}
    ></ha-control-select>`,i=this._renderBottomItems(),n=this._renderHiddenItems(),o=null===this._selectedGroup?this._renderCustomGroupList():this._renderEditGroup(),s=this._renderNotificationConfig();return Se`
      ${t}
      <div class="config-content">${{bottomPanel:i,customGroup:o,hiddenItems:n,notification:s}[this._selectedTab]}</div>
    `}_renderHiddenItems(){const e=this._sidebarConfig?.hidden_items||[],t=this._sidebarConfig?.new_items?.map(e=>e.title)||[],i=this._dialog._initCombiPanels.filter(e=>!t.includes(e)),n=this._createSelectorOptions(i,"dropdown"),o=Object.entries(e).map(([,e])=>e);return Se` <div class="items-container" style="flex: none">
      <div class="header-row flex-icon">
        <span>HIDDEN ITEMS</span>
      </div>
      <ha-selector
        .hass=${this.hass}
        .selector=${n}
        .value=${o}
        .required=${!1}
        id="customSelectorHidden"
        @value-changed=${this._handleHiddenItemsChange}
      >
      </ha-selector>
      ${this._renderSpacer()}
    </div>`}_renderNotificationConfig(){const e=this.hass?.panels,t=this._sidebarConfig?.new_items?.map(e=>e.title)||[],i=this._dialog._initCombiPanels.filter(e=>!t.includes(e)).map(t=>({value:t,label:so(this.hass,t),icon:e[t]?.icon||"mdi:view-dashboard"})),n=this._sidebarConfig.notification||{},o=Object.keys(n),s={select:{multiple:!1,custom_value:!1,mode:"dropdown",options:i.filter(e=>!o.includes(e.value)),sort:!0,required:!1}},r=this._sidebarConfig.notification||{},a=i.filter(e=>Object.keys(r).includes(e.value)),l=Se`
      <div class="group-list">
        ${vg(a,e=>e,e=>Se`
              <div class="group-item-row" style="padding-inline-start: 1rem">
                <div class="group-name" @click=${()=>this._selectedNotification=e.value}>
                  <ha-icon icon=${e.icon}></ha-icon>
                  <div class="group-name-items">
                    ${e.label}
                    <span>${e.value}</span>
                  </div>
                </div>
                <div class="group-actions">
                  <ha-icon-button .label=${"Edit item"} @click=${()=>this._selectedNotification=e.value}
                    ><ha-icon icon="mdi:pencil"></ha-icon
                  ></ha-icon-button>
                  <wa-divider orientation="vertical"></wa-divider>
                  <ha-icon-button
                    .label=${"Delete item"}
                    @click=${async()=>{if(!await bd(this,`Are you sure you want to delete this notification? ${e.label}`,"Delete"))return;const t={...this._sidebarConfig.notification||{}};delete t[e.value],this._sidebarConfig={...this._sidebarConfig,notification:t},this._dispatchConfig(this._sidebarConfig)}}
                    ><ha-icon icon="mdi:trash-can-outline"></ha-icon
                  ></ha-icon-button>
                </div>
              </div>
            `)}
      </div>
    `;return null===this._selectedNotification?Se`
          <ha-selector
            .hass=${this.hass}
            .selector=${s}
            .value=${this._selectedNotification??""}
            .required=${!1}
            .label=${"Select panel for configuration"}
            .placeholder=${"Select panel"}
            @value-changed=${e=>{this._selectedNotification=e.detail.value}}
          ></ha-selector>
          ${l}
        `:this._renderNotifyConfig()}_renderNotifyConfig(){if(!this._selectedNotification)return Ie;const e=this._selectedNotification,t=so(this.hass,e)||e,i=(this._sidebarConfig.notification||{})[e]||"",n=Se`<div class="header-row ">
      <ha-icon-button .path=${au} @click=${()=>this._selectedNotification=null}> </ha-icon-button>
      ${t.toUpperCase()}
      <ha-button
        appearance="plain"
        size="small"
        @click=${()=>{this._selectedNotification=null}}
        >Done</ha-button
      >
    </div>`;return Se`
      ${n}
      <ha-selector
        .hass=${this.hass}
        .value=${i}
        .configValue=${e}
        .helper=${"Use Jinja template to configure the notification. Result can be icon or text."}
        .selector=${{template:{preview:!0}}}
        .required=${!1}
        @value-changed=${this._handleNotifyConfigChange}
      ></ha-selector>
    `}_renderCustomGroupList(){const e=Object.keys(this._sidebarConfig.custom_groups||{}),t=Se`
      <ha-button appearance="plain" size="small" @click=${this._togglePromptNewGroup}>Add New Group</ha-button>
    `,i=e=>this._sidebarConfig?.default_collapsed?.includes(e)??!1,n=e=>this._sidebarConfig?.pinned_groups?.hasOwnProperty(e)??!1,o=[{title:"Edit items",action:"edit-items",icon:"mdi:pencil"},{title:"Rename",action:"rename",icon:"mdi:alphabetical"},{title:"Show in preview",action:"preview-item",icon:"mdi:information-outline"},{title:"Collapse by default",action:"collapsed-group",icon:"mdi:eye-minus-outline"},{title:"Add to pinned groups",action:"pinned-group",icon:"mdi:pin-outline"},{title:"Delete",action:"delete",icon:"mdi:trash-can-outline"}],s=0===e.length?Se`<div>No custom groups found</div>`:Se`<ha-spinner .size=${"small"}></ha-spinner>`,r=this._sidebarConfig?.text_transformation??"capitalize";return Se`
      ${!e.length||this._reloadItems?s:Se`
            <ha-sortable handle-selector=".handle" @item-moved=${this._groupMoved}>
              <div class="group-list" id="group-list">
                ${vg(e||[],e=>e,(e,t)=>{const s=e;let a=i(s),l=n(s);const c=this._sidebarConfig.custom_groups[s].length;return Se` <div class="group-item-row" data-group=${s} data-index=${t}>
                      <div class="handle">
                        <ha-icon-button .path=${du}></ha-icon-button>
                      </div>
                      <div class="group-name" @click=${()=>this._handleGroupAction("edit-items",s)}>
                        <ha-icon icon=${`mdi:numeric-${t+1}-box`}></ha-icon>
                        <div class="group-name-items" style="text-transform: ${r}">
                          ${s}
                          <span>${c} ${c>1?"items":"item"}</span>
                        </div>
                      </div>
                      <div class="group-actions">
                        <ha-icon-button
                          class="action-btn"
                          .path=${hu}
                          ?is-selected=${i(s)}
                          @click=${()=>this._handleGroupAction("collapsed-group",s)}
                        >
                        </ha-icon-button>
                        <wa-divider orientation="vertical"></wa-divider>
                        <ha-icon-button
                          class="action-btn"
                          .path=${_u}
                          ?is-selected=${l}
                          @click=${()=>this._handleGroupAction("pinned-group",s)}
                        ></ha-icon-button>
                        <wa-divider orientation="vertical"></wa-divider>
                        <ha-dropdown @wa-select=${this._handleSubItemAction}>
                          <ha-icon-button slot="trigger" .path=${cu} hide-title></ha-icon-button>
                          ${o.map(e=>Se` ${["delete"].includes(e.action)?Se`<wa-divider></wa-divider>`:Ie}
                              <ha-dropdown-item
                                .value=${s}
                                .data=${e}
                                .type=${"collapsed-group"===e.action||"pinned-group"===e.action?"checkbox":void 0}
                                .checked=${"collapsed-group"===e.action?a:"pinned-group"===e.action?l:void 0}
                                .variant=${"delete"===e.action?"danger":void 0}
                                ><ha-icon slot="icon" icon=${e.icon}></ha-icon> ${e.title}</ha-dropdown-item
                              >`)}
                        </ha-dropdown>
                      </div>
                    </div>`})}
              </div>
              ${this._renderSpacer()}
            </ha-sortable>
          `}
      <div class="header-row flex-end">${t}</div>
    `}_handleNotifyConfigChange(e){const t=e.target.configValue,i=e.detail.value,n={...this._sidebarConfig.notification||{}};i&&""!==i||delete n[t],i&&""!==i&&(n[t]=i),this._sidebarConfig={...this._sidebarConfig,notification:n},this._dispatchConfig(this._sidebarConfig)}_renderEditGroup(){if(!this._selectedGroup)return Ie;const e=Se`<div class="header-row ">
      <ha-icon-button .path=${au} @click=${()=>this._selectedGroup=null}> </ha-icon-button>
      ${this._selectedGroup.toLocaleUpperCase()}
      <ha-button
        appearance="plain"
        size="small"
        @click=${()=>this._handleGroupAction("preview",this._selectedGroup)}
      >
        PREVIEW
      </ha-button>
    </div>`,t=this._renderPanelSelector("customGroup",this._selectedGroup);return Se` ${e} ${t}`}_renderBottomItems(){if(this._selectedTab!==Og.BOTTOM_PANEL)return Ie;const e=Eg.map(e=>({value:e,label:Cg[e]})),t=Se` <ha-control-select
      .value=${this._selectedBottom}
      .options=${e}
      @value-changed=${e=>{this._selectedBottom=e.detail.value}}
    ></ha-control-select>`,i={[Sg.BOTTOM]:this._renderPanelSelector(x.BOTTOM),[Sg.BOTTOM_GRID]:this._renderPanelSelector(x.BOTTOM_GRID)};return Se`
      ${t}
      <div class="config-content">${i[this._selectedBottom]}</div>
    `}_renderPanelSelector(e,t){const i=to(this.hass),n=this._sidebarConfig?.hidden_items||[],o=this._dialog._initCombiPanels.filter(e=>!n.includes(e)&&e!==i),s=this._dialog.pickedItems,r=t||e,a=t?this._sidebarConfig.custom_groups[t]||[]:this._sidebarConfig[e]||[],l=Object.entries(a).map(([,e])=>e),c=s.filter(e=>!l.includes(e)),d=o.filter(e=>!c.includes(e)),h=this._createSelectorOptions(d),u=this._renderSelectedItems(r,l),f=t?this._renderPinGroupForms(t):Ie;return Se`
      ${f}
      <div id="items-preview-wrapper">
        <div class="items-container">
          <div class="header-row flex-icon">
            <span>SELECT ITEMS</span>
          </div>
          <div class="selector-container">
            <ha-selector
              .hass=${this.hass}
              .selector=${h}
              .value=${l}
              .label=${"Add item"}
              .configValue=${e}
              .customGroup=${t}
              .required=${!1}
              id="customSelector"
              @value-changed=${this._handleValueChange}
            >
            </ha-selector>
          </div>
          ${this._renderSpacer()}
        </div>
        <div class="preview-container" ?grid=${e===x.BOTTOM_GRID} ?hidden=${!l.length}>
          ${u}
        </div>
      </div>
    `}_renderPinGroupForms(e){const t=this._sidebarConfig?.pinned_groups||{},i={is_pinned:t.hasOwnProperty(e),icon:"object"==typeof t[e]?t[e].icon:""},n=[{name:"",type:"grid",schema:[{name:"is_pinned",label:"Pin this group",type:"boolean",default:!1},{name:"icon",label:"Icon (optional)",disabled:!i.is_pinned,selector:{icon:{}}}]}];return Se`
      <ha-form
        .hass=${this.hass}
        .schema=${n}
        .data=${i}
        .groupName=${e}
        .computeLabel=${e=>e.label}
        @value-changed=${this._handlePinGroupChange}
      ></ha-form>
    `}_renderSelectedItems(e,t){const i=this.hass?.panels,n=e=>this._dialog._newItemMap.get(e)?.icon||i[e]?.icon||"",o=t.map(e=>({key:e,title:this.hass.localize(`panel.${i[e]?.title}`)||i[e]?.title||i[e]?.url_path||e,icon:n(e)})),s=e.replace(/_/g," ").toUpperCase();return Se`
      <div class="header-row flex-icon">
        <span>GROUP: ${s} - ORDER </span>
        <ha-icon-button .path=${yu} @click=${()=>this._sortItems(e)}>
        </ha-icon-button>
      </div>

      ${this._reloadPanelItems?Se`<ha-spinner .size=${"small"}></ha-spinner> `:Se` <ha-sortable handle-selector=".handle" @item-moved=${this._itemMoved}>
            <div class="selected-items-preview" id="selected-items" ?grid=${e===x.BOTTOM_GRID}>
              ${vg(o,e=>e.key,(t,i)=>((t,i)=>Se`
        <a data-panel=${t.key} data-index=${i}>
          <div class="icon-item handle" ?grid-item=${e===x.BOTTOM_GRID}>
            <ha-icon .icon=${t.icon}></ha-icon><span class="item-text">${t.title}</span>
          </div>
        </a>
      `)(t,i))}
            </div></ha-sortable
          >`}
    `}_renderSpacer(){return Se`<div style="flex: 1"></div>`}_sortItems(e){const t=this.hass?.panels,i=(e===x.BOTTOM||e===x.BOTTOM_GRID?this._sidebarConfig[e]||[]:this._sidebarConfig.custom_groups?.[e]||[]).map(e=>({key:e,title:this.hass.localize(`panel.${t[e]?.title}`)||t[e]?.title||t[e]?.url_path||e})),n=[...i].sort((e,t)=>{const i=e.title.toUpperCase(),n=t.title.toUpperCase();return i.localeCompare(n)});let o;o=i.every((e,t)=>e.key===n[t].key)?[...i].sort((e,t)=>{const i=e.title.toUpperCase();return t.title.toUpperCase().localeCompare(i)}):n;const s=o.map(e=>e.key),r={};if(e===x.BOTTOM||e===x.BOTTOM_GRID){const t=e;let i=[...this._sidebarConfig[t]||[]];i=s,r[t]=i}else{let t={...this._sidebarConfig.custom_groups||{}},i=[...t[e]||[]];i=s,t[e]=i,r.custom_groups=t}Object.keys(r).length>0&&(this._sidebarConfig={...this._sidebarConfig,...r},this._dispatchConfig(this._sidebarConfig))}_createSelectorOptions(e,t="list"){const i=to(this.hass);return{select:{multiple:!0,mode:t,options:e.map(e=>{const t=e===i;return{value:e,label:(so(this.hass,e)||e)+(t?" (default)":"")}}),sort:!0,reorder:!0}}}_handleValueChange(e){e.stopPropagation();const t=e.target.configValue,i=e.target.customGroup,n=e.detail.value,o={};if([x.BOTTOM,x.BOTTOM_GRID].includes(t)){const e=t;let i=[...this._sidebarConfig[e]||[]];i=n,o[e]=i}else if("customGroup"===t){const e=i;let t={...this._sidebarConfig.custom_groups||{}},s=[...t[e]||[]];s=n,t[e]=s,o.custom_groups=t}Object.keys(o).length>0&&(this._sidebarConfig={...this._sidebarConfig,...o}),this._dispatchConfig(this._sidebarConfig),this.requestUpdate()}_handleHiddenItemsChange(e){e.stopPropagation();const t=e.detail.value;this._updatePanels(t);const i=Wo(this._sidebarConfig,t);this._sidebarConfig={...this._sidebarConfig,...i},this._dispatchConfig(this._sidebarConfig)}_updatePanels(e){const t=this._dialog._initCombiPanels;let i=[...this._dialog._initPanelOrder||[]];i=t.filter(t=>!e.includes(t)),this._dialog._initPanelOrder=i}_dispatchConfig(e){const t=new CustomEvent("sidebar-changed",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}clickedPanelInPreview(e,t){t&&(t===x.BOTTOM_GRID||t===x.BOTTOM?(this._selectedTab=Og.BOTTOM_PANEL,this._selectedGroup=null,this._selectedBottom=t===x.BOTTOM_GRID?Sg.BOTTOM_GRID:Sg.BOTTOM):(this._selectedTab=Og.CUSTOM_GROUP,this._selectedGroup=t))}static get styles(){return[G`
        .selected-items-preview {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          overflow-y: auto;
          scrollbar-color: var(--scrollbar-thumb-color) transparent;
          scrollbar-width: thin;
        }
        .selected-items-preview[grid] {
          display: grid;
          grid-template-columns: repeat(auto-fit, 25%);
          /* gap: 8px; */
          align-items: center;
          /* justify-content: center; */
          /* align-content: center; */
          overflow: hidden;
        }
        .selected-items-preview[grid] a {
          width: inherit;
        }

        a {
          text-decoration: none;
          color: var(--sidebar-text-color);
          font-weight: 500;
          font-size: 14px;
          position: relative;
          display: block;
          outline: 0;
          border-radius: 4px;
          /* width: 248px; */
          cursor: pointer;
        }
        a:hover > .icon-item {
          background-color: var(--secondary-background-color);
        }
        .icon-item {
          box-sizing: border-box;
          margin: 4px;
          padding-left: 12px;
          padding-inline-start: 12px;
          padding-inline-end: initial;
          border-radius: 4px;
          display: flex;
          min-height: 40px;
          align-items: center;
          padding: 0 16px;
        }
        .icon-item > ha-icon {
          width: 56px;
          color: var(--sidebar-icon-color);
        }
        .icon-item span.item-text {
          display: block;
          max-width: calc(100% - 56px);
        }
        .icon-item[grid-item] {
          /* text-align: center; */
          display: flex;
          width: 100%;
          margin: 8px auto;
          padding: 0;
          max-height: 80px;
          flex-direction: column;
        }
        .icon-item[grid-item] ha-icon {
          /* width: 40px; */
          height: 40px;
          /* margin-bottom: 4px; */
          flex: 0 1 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-item[grid-item] span.item-text {
          display: block;
          white-space: nowrap;
          flex: 1 1 auto;
          text-overflow: ellipsis;
          overflow: clip;
          max-width: 100%;
        }
        ha-icon-button.action-btn {
          opacity: 0.3;
          color: var(--disabled-text-color);
        }
        ha-icon-button.action-btn:hover {
          opacity: 1;
          color: var(--sidebar-text-color);
        }
        ha-icon-button.action-btn[is-selected] {
          color: var(--ha-color-on-primary-normal, var(--primary-color)) !important;
          opacity: 1 !important;
        }
      `,wg]}};var Ig;ft([_t({attribute:!1})],xg.prototype,"hass",void 0),ft([_t({attribute:!1})],xg.prototype,"_dialog",void 0),ft([_t({attribute:!1})],xg.prototype,"_sidebarConfig",void 0),ft([bt()],xg.prototype,"_selectedTab",void 0),ft([bt()],xg.prototype,"_selectedBottom",void 0),ft([bt()],xg.prototype,"_selectedGroup",void 0),ft([bt()],xg.prototype,"_selectedNotification",void 0),ft([bt()],xg.prototype,"_reloadItems",void 0),ft([bt()],xg.prototype,"_reloadPanelItems",void 0),xg=ft([pt("sidebar-dialog-groups")],xg),function(e){e.UI_COMMON="ui.common.",e.UI_LOVELACE="ui.panel.lovelace."}(Ig||(Ig={}));const kg={BTN_LABEL:{CANCEL:"Cancel",DELETE:"Delete",SAVE:"Save",DOWNLOAD:"Download",SHOW_CODE_EDITOR:"Show code editor",SHOW_VISUAL_EDITOR:"Show visual editor",UPLOAD:"Upload Config File",USE_CONFIG_FILE:"Use Config File",COPY_TO_CLIPBOARD:"Copy to Clipboard",CHECK_VALIDITY:"Check validity",AUTO_CORRECT:"Auto-correct",SAVE_MIGRATE:"Save & Migrate to storage"}};let Ng=class extends qe{constructor(){super(...arguments),this._sidebarConfig={},this._handleBtnAction=async e=>{switch(e){case"download":let e=await yd(this,"Enter the filename","sidebar-organizer","Download","Cancel");if(null===e)return;""===e&&(e=""+(m+"_"+(new Date).toISOString().replace(/:/g,"-").split(".",1).join()));const t=uc.stringify(this._sidebarConfig),i=new Blob([t],{type:"application/x-yaml"}),n=URL.createObjectURL(i);tt(n,`${e}.yaml`),setTimeout(()=>URL.revokeObjectURL(n),0);break;case"copy":navigator.clipboard.writeText(uc.stringify(this._sidebarConfig)).then(()=>{});break;case"delete":const o="Delete";await bd(this,O.CONFIRM_DELETE,o)&&([w.UI_CONFIG,w.PANEL_ORDER,w.COLLAPSE,w.HIDDEN_PANELS].forEach(e=>{vo(e)}),setTimeout(()=>{window.location.reload()},200))}}}updated(e){super.updated(e)}static get styles(){return G`
      :host {
        --code-mirror-max-height: calc(var(--mdc-dialog-min-height) / 1.2);
      }
      :host *[hidden] {
        display: none;
      }
      .header-row {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        --mdc-icon-button-size: 42px;
      }
      .header-row.center {
        justify-content: center;
      }
    `}render(){const e=kg.BTN_LABEL,t=this._sidebarConfig,i=0===Object.keys(t).length,n=Se`<ha-alert alertType="info">${O.CONFIG_EMPTY}</ha-alert>`;return Se` ${i?n:Ie}
      <ha-yaml-editor
        .hass=${this.hass}
        .defaultValue=${this._sidebarConfig}
        .copyToClipboard=${!0}
        .hasExtraActions=${!0}
        .required=${!0}
        in-dialog
        @value-changed=${this._handleConfigChange}
      >
        <div class="header-row" slot="extra-actions" ?hidden=${i}>
          <div>
            <ha-button appearance="plain" size="small" @click=${()=>this._handleBtnAction("download")}
              >${e.DOWNLOAD}</ha-button
            >
            <ha-button appearance="plain" size="small" size="small" @click=${()=>this._handleBtnAction("copy")}
              >${e.COPY_TO_CLIPBOARD}</ha-button
            >
          </div>
          <ha-button appearance="plain" size="small" variant="warning" @click=${()=>this._handleBtnAction("delete")}
            >${e.DELETE}</ha-button
          >
        </div>
      </ha-yaml-editor>`}_handleConfigChange(e){const{isValid:t,value:i}=e.detail;t&&(this._sidebarConfig=i,this._dispatchConfig(this._sidebarConfig))}_dispatchConfig(e){const t=new CustomEvent("sidebar-changed",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}};ft([_t({attribute:!1})],Ng.prototype,"hass",void 0),ft([_t({attribute:!1})],Ng.prototype,"_dialog",void 0),ft([_t({attribute:!1})],Ng.prototype,"_sidebarConfig",void 0),ft([vt("ha-yaml-editor")],Ng.prototype,"_yamlEditor",void 0),Ng=ft([pt("sidebar-dialog-code-editor")],Ng);let Tg=class extends qe{constructor(){super(...arguments),this._sidebarConfig={},this.invalidConfig=!1,this._colorConfigMode="",this._baseColorFromTheme={},this._previewPanels={},this._collapsedGroups=new Set,this._ready=!1,this._toggleColapsed=e=>{this._collapsedGroups.has(e)?this._collapsedGroups.delete(e):this._collapsedGroups.add(e),this.requestUpdate()},this._toggleGroup=(e,t)=>{const i=this._previewPanels?.custom_groups?Object.keys(this._previewPanels.custom_groups):[];this._collapsedGroups=new Set(i.filter(t=>t!==e)),this.requestUpdate(),this.updateComplete.then(()=>{const i=this._groupsContainer.children,n=this._groupsContainer.querySelectorAll("div.divider-container"),o=Array.from(n).find(t=>t.getAttribute("group")===e);if(o){o.querySelector("div.added-content").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}const s=this._groupsContainer.querySelectorAll("div.group-items"),r=Array.from(s).find(t=>t.getAttribute("group")===e);if(r&&!t&&(r.classList.add("hight-light"),r.addEventListener("animationend",()=>{r.classList.remove("hight-light")})),t){(()=>{const t=Array.from(i).filter(t=>t.getAttribute("group")!==e),n=this._groupsContainer.querySelector(`div.group-items[group="${e}"]`),o=n.hasAttribute("selected");n.toggleAttribute("selected",!o),t.forEach(e=>e.toggleAttribute("dimmed",!o))})()}null===e&&(this._groupsContainer.querySelectorAll("div.group-items").forEach(e=>e.removeAttribute("selected")),Array.from(i).forEach(e=>e.removeAttribute("dimmed")))})}}willUpdate(e){e.has("_sidebarConfig")&&this._sidebarConfig&&Vn(this._previewPanels)&&(this._previewPanels=this._computePreviewPanels(),Vn(this._previewPanels))}firstUpdated(){if(this._sidebarConfig){this._collapsedGroups=new Set(this._sidebarConfig.default_collapsed||[]);const e=L(this._sidebarConfig.color_config,this.hass);this._colorConfigMode=e?"dark":"light",setTimeout(()=>{this._setTheme(this._colorConfigMode)},0)}this._addNotification()}shouldUpdate(e){return e.has("invalidConfig")&&!0===this.invalidConfig&&(this.invalidConfig=!0),!0}updated(e){if(super.updated(e),e.has("_previewPanels")&&this._previewPanels&&(this._ready=!0),e.has("_sidebarConfig")&&this._sidebarConfig){const t=e.get("_sidebarConfig"),i=this._sidebarConfig;t&&i&&(this._updatePanelConfig(t,i),this._updateThemeChange(t,i),this._updateNotificationChange(t,i))}if(e.has("_colorConfigMode")&&this._colorConfigMode){const t=e.get("_colorConfigMode"),i=this._colorConfigMode;t&&i&&t!==i&&this._setTheme(i)}e.has("_ready")&&this._ready&&this._handleNotifyChange()}_updatePanelConfig(e,t){const i=["custom_groups","bottom_items","bottom_grid_items","hidden_items","new_items"].reduce((i,n)=>(i[n]=!Pd(e[n],t[n]),i),{}),n=e.move_settings_from_fixed!==t.move_settings_from_fixed;(Object.values(i).some(Boolean)||n)&&this._updateListbox(t)}_updateThemeChange(e,t){const i=e.color_config?.custom_theme?.theme,n=t.color_config?.custom_theme?.theme;if(!Pd(i,n))return void 0===n?(this.style="",void setTimeout(()=>this._setTheme("default"),200)):void this._setTheme(this._colorConfigMode)}_updateNotificationChange(e,t){const i=!Pd(e.notification,t.notification),n=JSON.parse(JSON.stringify(e.new_items?.every(e=>e.notification)!==t.new_items?.every(e=>e.notification)));(i||n)&&this._handleNotifyChange()}_addNotification(){if(!this._ready)return;const e=this._groupsContainer.querySelectorAll("a"),{new_items:t,notification:i}=this._sidebarConfig||{},n={...i||{},...Array.from(t||[]).filter(e=>void 0!==e.notification).reduce((e,t)=>(e[t.title]=t.notification,e),{})};n&&Object.keys(n).length>0&&Object.entries(n).forEach(([t,i])=>{const n=Array.from(e).find(e=>e.getAttribute("data-panel")===t);n&&this._subscribeNotification(n,i)})}_subscribeNotification(e,t){let i=e.querySelector("span.notification-badge"),n=e.querySelector("ha-icon.notification-badge");i||n||(i=document.createElement("span"),i.classList.add("notification-badge"),e.querySelector("div.icon-item")?.appendChild(i),n=document.createElement("ha-icon"),n.classList.add("notification-badge"),e.querySelector("div.icon-item")?.appendChild(n));this._subscribeTemplate(t,e=>{e?"string"==typeof e&&_c(e)?(i.remove(),n.setAttribute("icon",e)):(n.remove(),i.innerHTML=e):(i.remove(),n.remove())})}_subscribeTemplate(e,t){this.hass&&Fd(e)&&Hd(this.hass.connection,e=>{t(e.result)},{template:e??"",variables:{config:e,user:this.hass.user.name},strict:!0})}_handleNotifyChange(){const e=this.shadowRoot?.querySelector("div.groups-container"),t=e?.querySelectorAll(".notification-badge");t&&(t.forEach(e=>e.remove()),setTimeout(()=>{this._addNotification()},0))}_updateListbox(e){e||(e=this._sidebarConfig),this._ready=!1,this._previewPanels=this._computePreviewPanels()}_computePreviewPanels(){const e={},{custom_groups:t,bottom_items:i,bottom_grid_items:n}=this._sidebarConfig||{};return t&&(e.custom_groups={},Object.entries(t).forEach(([t,i])=>{e.custom_groups[t]=i.map(e=>this._getPanelInfo(e))})),i&&(e.bottom_items=i.map(e=>this._getPanelInfo(e))),n&&(e.bottom_grid_items=n.map(e=>this._getPanelInfo(e))),e}_getPanelInfo(e){const t=this.hass,i=t.panels;return this._dialog?._newItemMap?.has(e)?{...this._dialog._newItemMap.get(e),component_name:e}:{...i[e],component_name:e,title:so(t,e)||i[e]?.title||e}}_setTheme(e){let t=this.hass.themes.theme;const i=this._sidebarConfig?.color_config?.custom_theme?.theme||void 0;i&&(t=i),k(this,this.hass,t,e),setTimeout(()=>{this._getDefaultColors()},200)}_getDefaultColors(){const e=gd(this);this._baseColorFromTheme=e}render(){const e=to(this.hass);return Se` <div class="divider-preview" style=${this._computePreviewStyle()}>
      ${this._renderHeader()}
      <div class="panels-list">
        <div class="wrapper">
          <div class="groups-container before-spacer">
            ${(()=>{const t=this._getPanelInfo(e);return this._renderPanel(t)})()} ${this._renderCustomGroups()} ${this._renderUngroupedPanels()}
          </div>
        </div>
        <div class="spacer"></div>
        <div class="after-spacer">
          ${Vn(this._previewPanels?.bottom_items)?Ie:Se`
                <div class="divider"></div>
                <div class="bottom-panel">${this._renderBottomPanels()}</div>
              `}
          ${Vn(this._previewPanels?.bottom_grid_items)?Ie:Se`
                <div class="divider"></div>
                <div class="bottom-grid-panel">${this._renderBottomGridPanels()}</div>
              `}
          ${this._dialog._settingItemMoved?Ie:Se`<div class="divider"></div>
                ${this._renderPanel(this._getPanelInfo("config"))}`}
        </div>
      </div>
    </div>`}_renderCustomGroups(){const e=this._previewPanels?.custom_groups;return e?Object.entries(e).map(([e,t])=>{const i=this._collapsedGroups.has(e);return Se`<div class="divider-container" group=${e} @click=${()=>this._toggleColapsed(e)}>
          <div class="added-content" group=${e} ?collapsed=${i}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
            <span>${e.trim()}</span>
          </div>
        </div>
        <div class="group-items" ?collapsed=${i} group=${e}>
          ${t.map(e=>this._renderPanel(e))}
        </div>`}):[]}_renderBottomPanels(){const e=this._previewPanels?.bottom_items;return e?e.map(e=>this._renderPanel(e)):[]}_renderUngroupedPanels(){const e=this._dialog.ungroupedItems||[];if(0===e.length)return[];return e.map(e=>this._getPanelInfo(e)).map(e=>this._renderPanel(e))}_renderBottomGridPanels(){const e=this._previewPanels?.bottom_grid_items;return e?e.map(e=>this._renderPanel(e,!0)):[]}_renderPanel(e,t=!1){const{icon:i,title:n,component_name:o}=e;return Se`<a data-panel=${o} @click=${()=>{this._dispatchEvent("item-clicked",e.component_name)}}>
      <div class="icon-item" ?grid-item=${t}>
        <ha-icon .icon=${i}> </ha-icon><span class="item-text">${n}</span>
      </div>
    </a>`}_renderHeader(){const{header_title:e,hide_header_toggle:t,custom_groups:i}=this._sidebarConfig||{},n=i?Object.keys(i):[],o=this._collapsedGroups.size===n.length;return Se`<div class="menu-title">
      ${e||"Home Assistant"}
      ${t||0===n.length?Ie:Se`<ha-icon
            .icon=${o?"mdi:plus":"mdi:minus"}
            class="collapse-toggle"
            @click=${()=>this._handleCollapsedToggle()}
          ></ha-icon>`}
    </div>`}_handleCollapsedToggle(){const e=this._sidebarConfig?.custom_groups;if(!e)return;const t=Object.keys(e);this._collapsedGroups.size===t.length?this._collapsedGroups=new Set:this._collapsedGroups=new Set(t),this.requestUpdate()}_toggleBottomPanel(e,t=!0){this._collapsedGroups=new Set(Object.keys(this._previewPanels?.custom_groups||{})),this.requestUpdate(),this.updateComplete.then(()=>{let i;i="bottom_items"===e?this.shadowRoot?.querySelector("div.bottom-panel"):this.shadowRoot?.querySelector("div.bottom-grid-panel"),i&&(this._groupsContainer.scrollTo(0,this._groupsContainer.scrollHeight-i.scrollHeight),i.toggleAttribute("selected",e&&!t),e&&t&&(i.classList.add("hight-light"),i.addEventListener("animationend",()=>{i.classList.remove("hight-light")})))})}_dispatchEvent(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}_computePreviewStyle(){const e=this._sidebarConfig?.text_transformation||"capitalize",t=this._colorConfigMode,i=this._sidebarConfig?.color_config||{},n=i?.border_radius||0,o=i?.[t]||{},s=pd(o?.custom_styles||{}),r=e=>o?.[e]?`${o[e]} !important`:this._baseColorFromTheme[e],a={"--divider-color":r("divider_color"),"--divider-bg-color":r("background_color"),"--divider-border-top-color":r("border_top_color"),"--scrollbar-thumb-color":r("scrollbar_thumb_color"),"--sidebar-background-color":r("custom_sidebar_background_color"),"--divider-border-radius":`${n}px`,"--sidebar-text-color":r("divider_text_color"),"--sidebar-icon-color":r("sidebar_icon_color"),"--sidebar-text-transform":e,...s};return tg(a)}_setCustomTheme(e,t){this.style="",k(this,this.hass,e,t),setTimeout(()=>{this._getDefaultColors()},200)}static get styles(){return[G`
        :host([invalid-config]) {
          filter: blur(5px) grayscale(1);
          pointer-events: none;
        }

        :host *[hidden] {
          display: none !important;
        }
        :host *[dimmed] {
          opacity: 0.1;
          pointer-events: none;
        }

        :host {
          --preview-header-height: 56px;
          --selected-container-color: rgb(from var(--primary-color) r g b / 0.4);
          background-color: var(--clear-background-color, rgba(0, 0, 0, 0.2));
          min-height: 100%;
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          box-sizing: border-box;
          /* max-height: calc(var(--mdc-dialog-min-height, 700px) - 40px); */
        }

        :host ha-spinner {
          display: flex;
          place-self: center;
        }
        .menu-title {
          display: flex;
          height: var(--preview-header-height);
          width: 100%;
          color: var(--sidebar-text-color);
          border-bottom: 1px solid var(--divider-color);
          font-size: 20px;
          align-items: center;
          padding-inline-start: 0.5em;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .panels-list {
          display: flex;
          flex-direction: column;
          height: calc(
            var(--config-section-height, var(--mdc-dialog-min-height, 700px)) - var(--preview-header-height)
          );
          max-height: calc(100% - var(--preview-header-height));
        }
        .wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 0;
          flex: 1;
        }
        .groups-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-color: var(--scrollbar-thumb-color) transparent;
          scrollbar-width: thin;
        }
        .groups-container.before-spacer {
          padding-bottom: 0;
        }
        .after-spacer {
          padding-top: 0;
          min-height: fit-content;
        }

        .divider-preview {
          display: block;
          /* margin: 1rem auto; */
          align-items: center;
          /* min-height: calc(var(--mdc-dialog-min-height, 700px) - 50px); */
          /* max-height: max-content; */
          max-width: 260px;
          height: auto;
          width: 100%;
          background-color: var(--sidebar-background-color);
          overflow: hidden;
          margin: 0.5rem auto;
        }

        @media all and (max-width: 800px), all and (max-height: 500px) {
          .divider-preview {
            margin: 10px auto 0;
            max-height: 580px;
          }
        }

        .divider-container {
          padding: 0;
          margin-top: 1px;
          box-sizing: border-box;
        }

        .added-content {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: var(--sidebar-text-color);
          background-color: var(--divider-bg-color);
          letter-spacing: 1px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border-top: 1px solid var(--divider-border-top-color);
          border-radius: var(--divider-border-radius, none);
          box-sizing: border-box;
          padding-left: 12px;
          padding-inline-end: initial;
          min-height: 40px;
          text-transform: var(--sidebar-text-transform, capitalize);
          &:hover {
            color: var(--primary-color);
            background-color: rgb(from var(--primary-color) r g b / 0.1);
          }
        }

        .added-content > span,
        .added-content > ha-icon {
          pointer-events: none;
          transition: all 150ms ease;
        }

        .divider-container:hover .added-content > span {
          transform: translateX(30px);
          transition: all 150ms ease;
        }

        .added-content > span {
          transform: translateX(30px);
        }
        .added-content[collapsed] > span,
        .added-content.collapsed > span {
          transform: translateX(10px);
        }
        .added-content[collapsed] > ha-icon,
        .added-content.collapsed > ha-icon {
          transform: rotate(-90deg);
        }

        .group-items {
          max-height: 1000px;
          display: block;
          /* transition: all 0.3s ease; */
        }
        .bottom-panel {
          display: block;
        }
        .bottom-panel[selected],
        .group-items[selected] {
          border: 1px solid var(--selected-container-color);
        }
        .group-items[collapsed],
        .group-items.collapsed {
          max-height: 0px;
          overflow: hidden;
        }

        .divider {
          /* padding: 10px 0; */
          display: block;
        }

        .divider::before {
          content: '';
          display: block;
          height: 1px;
          background-color: var(--divider-color);
        }
        .spacer {
          margin-top: auto;
          pointer-events: none;
          /* flex: 1; */
        }
        a {
          text-decoration: none;
          color: var(--sidebar-text-color);
          font-weight: 500;
          font-size: 14px;
          position: relative;
          display: block;
          outline: 0;
          border-radius: 4px;
          /* width: 248px; */
          cursor: pointer;
        }
        a:hover > .icon-item {
          background-color: var(--secondary-background-color);
        }
        .icon-item {
          box-sizing: border-box;
          margin: 4px;
          padding-left: 12px;
          padding-inline-start: 12px;
          padding-inline-end: initial;
          border-radius: 4px;
          display: flex;
          min-height: 40px;
          align-items: center;
          /* padding: 0 16px; */
        }
        .icon-item > ha-icon {
          width: 56px;
          color: var(--sidebar-icon-color);
        }
        .icon-item span.item-text {
          display: block;
          max-width: calc(100% - 56px);
          text-transform: capitalize;
        }

        .hight-light {
          animation: highLight 1s ease-in-out infinite;
          animation-iteration-count: 3;
          animation-fill-mode: forwards;
        }

        @keyframes highLight {
          0% {
            box-shadow: 0 0 10px 0 var(--selected-container-color);
          }

          50% {
            box-shadow: 0 0 20px 0 var(--selected-container-color);
          }

          100% {
            box-shadow: 0 0 10px 0 var(--selected-container-color);
          }
        }
        .collapse-toggle {
          color: var(--primary-color);
          transition: transform 0.3s ease;
          cursor: pointer;
          opacity: 0.5;
          margin-right: 4px;
        }
        .collapse-toggle.active {
          color: var(--sidebar-icon-color);
          transform: rotate(90deg);
          transition: transform 0.3s ease;
        }
        .collapse-toggle:hover {
          color: var(--primary-color);
          opacity: 1;
        }

        .bottom-grid-panel {
          display: grid;
          grid-template-columns: repeat(auto-fill, 25%);
          padding: 0;
          max-height: fit-content;
        }
        .bottom-grid-panel a {
          width: calc(249px / 4 - 0px);
          display: flex;
        }
        .icon-item[grid-item] {
          /* padding: 0; */
          padding-inline-start: 0;
          /* margin: auto auto; */
          width: 100%;
          display: flex;
          height: 48px;
        }
        .icon-item[grid-item] > ha-icon {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .icon-item[grid-item] > span.item-text {
          display: none !important;
        }

        .icon-item[grid-item] > ha-icon.notification-badge {
          left: 32px;
          width: 22px;
          top: 8px;
        }

        .notification-badge {
          position: absolute;
          left: calc(var(--app-drawer-width, 248px) - 42px);
          inset-inline-start: calc(var(--app-drawer-width, 248px) - 42px);
          inset-inline-end: initial;
          min-width: 20px;
          box-sizing: border-box;
          border-radius: 20px;
          font-weight: 400;
          background-color: var(--accent-color);
          line-height: 20px;
          text-align: center;
          padding: 0px 5px;
          color: var(--text-accent-color, var(--text-primary-color));
        }
        ha-icon.notification-badge {
          padding: 0 !important;
          color: var(--accent-color);
          background-color: transparent;
          width: auto;
        }
      `]}};ft([_t({attribute:!1})],Tg.prototype,"hass",void 0),ft([_t({attribute:!1})],Tg.prototype,"_dialog",void 0),ft([_t({attribute:!1})],Tg.prototype,"_sidebarConfig",void 0),ft([_t({type:Boolean,reflect:!0,attribute:"invalid-config"})],Tg.prototype,"invalidConfig",void 0),ft([bt()],Tg.prototype,"_colorConfigMode",void 0),ft([bt()],Tg.prototype,"_baseColorFromTheme",void 0),ft([bt()],Tg.prototype,"_previewPanels",void 0),ft([bt()],Tg.prototype,"_collapsedGroups",void 0),ft([bt()],Tg.prototype,"_ready",void 0),ft([vt(".divider-preview")],Tg.prototype,"_previewContainer",void 0),ft([vt(".groups-container")],Tg.prototype,"_groupsContainer",void 0),Tg=ft([pt("sidebar-dialog-preview")],Tg);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $g=e=>e??Ie;let Lg=class extends qe{constructor(){super(...arguments),this.active=!1,this.narrow=!1}render(){return Se`
      <div
        tabindex="0"
        role="tab"
        aria-selected=${this.active}
        aria-label=${$g(this.name)}
        @keydown=${this._handleKeyDown}
      >
        ${this.narrow?Se`<slot name="icon"></slot>`:""}
        <span class="name">${this.name}</span>
        <ha-ripple></ha-ripple>
      </div>
    `}_handleKeyDown(e){"Enter"===e.key&&e.target.click()}};Lg.styles=G`
    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: var(--header-height);
      cursor: pointer;
      position: relative;
      outline: none;
    }

    .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }

    :host([active]) {
      color: var(--primary-color);
    }

    :host(:not([narrow])[active]) div {
      border-bottom: 2px solid var(--primary-color);
    }

    :host([narrow]) {
      min-width: 0;
      display: flex;
      justify-content: center;
      overflow: hidden;
    }

    :host([narrow]) div {
      padding: 0 4px;
    }

    div:focus-visible:before {
      position: absolute;
      display: block;
      content: '';
      inset: 0;
      background-color: var(--secondary-text-color);
      opacity: 0.08;
    }
  `,ft([_t({type:Boolean,reflect:!0})],Lg.prototype,"active",void 0),ft([_t({type:Boolean,reflect:!0})],Lg.prototype,"narrow",void 0),ft([_t()],Lg.prototype,"name",void 0),Lg=ft([pt("sidebar-organizer-tab")],Lg);const Dg=e=>e?qn(e.trim()):"Ungrouped";let Mg=class extends qe{constructor(){super(...arguments),this._selectedItemIndex=null,this._selectedItem=null,this._yamlMode=!1,this._actionsSchema=[{title:"Interaction",type:"expandable",flatten:!0,iconPath:pu,schema:[{name:"entity",selector:{entity:{}},helper:"Entity to control when the button is pressed"},...ag()]}],this._notificationSchema=[{type:"expandable",title:"Notification badge template",iconPath:mu,expanded:!1,schema:[{name:"notification",selector:{template:{}}}]}],this._configSchema=Ot(e=>[{type:"grid",schema:[{name:"icon",label:"Item Icon",selector:{icon:{}}},{name:"group",label:"Item Group",required:!1,selector:{select:{mode:"dropdown",options:e.length?e:[{value:"",label:"Ungrouped"}]}}}]}]),this._computeLabel=e=>{if("entity"===e.name&&!e.context?.group_entity)return;return qn((e.label||e.name||e.title||"").replace(/_/g," "))},this._computeHelper=e=>e.helper||void 0,this._handleDeleteItem=async e=>{const t=this._sidebarConfig.new_items[e].title;if(!await bd(this,`Are you sure you want to delete the item "${t}"?`,"Delete"))return;const i=[...this._sidebarConfig.new_items||[]];i.splice(e,1),this._sidebarConfig={...this._sidebarConfig,new_items:i},this._handleRemoveItem(t),this._dispatchConfig(this._sidebarConfig),this.requestUpdate()},this._handleRemoveItem=e=>{const t=this.getGroupKey(e);if(t){const i=t=>{const i=t.indexOf(e);-1!==i&&t.splice(i,1)},n={...this._sidebarConfig},o={...n};if("bottom_items"===t){const e=[...n.bottom_items||[]];i(e),o.bottom_items=e}else{const e={...n.custom_groups},s=e[t]||[];i(s),e[t]=s,o.custom_groups=e}this._sidebarConfig=o}},this._toggleRenameItem=async e=>{const t=this._sidebarConfig.new_items[e].title;let i=await yd(this,"Enter new item title","Rename Item","Rename","Cancel");if(!i||""===i)return;if(i=i.trim(),this._sidebarConfig.new_items?.some(e=>e.title===i))return void await bd(this,"Item with this name already exists. Do you want to edit it?","Edit","Cancel");const n=this.getGroupKey(t);if(n){const e={...this._sidebarConfig};if("bottom_items"===n){const n=[...this._sidebarConfig.bottom_items||[]],o=n.indexOf(t);-1!==o&&(n[o]=i),e.bottom_items=n}else{const o={...this._sidebarConfig.custom_groups},s=o[n]||[],r=s.indexOf(t);-1!==r&&(s[r]=i),o[n]=s,e.custom_groups=o}this._sidebarConfig=e}const o=[...this._sidebarConfig.new_items||[]];o[e]={...o[e],title:i},this._sidebarConfig={...this._sidebarConfig,new_items:o},this._dispatchConfig(this._sidebarConfig),this._selectedItemIndex=e,this.requestUpdate()},this._togglePromptNewItem=async()=>{let e=await yd(this,"Enter new item title","New Item","Add","Cancel");if(!e||""===e)return;if(e=e.trim(),this._sidebarConfig.new_items?.some(t=>t.title===e))return void await bd(this,"Item with this name already exists. Do you want to edit it?","Edit","Cancel");const t={title:e,icon:`mdi:alpha-${e.charAt(0).toLowerCase()}-circle`},i=[...this._sidebarConfig.new_items||[]];i.push(t),this._sidebarConfig={...this._sidebarConfig,new_items:i},this._dispatchConfig(this._sidebarConfig),this._selectedItemIndex=i.length-1,this.requestUpdate()}}firstUpdated(e){super.firstUpdated(e)}updated(e){super.updated(e),e.has("_selectedItemIndex")&&(null!==this._selectedItemIndex?(this._selectedItem=this._sidebarConfig.new_items[this._selectedItemIndex],this._toggleItemInPreview(this._selectedItem.title)):(this._selectedItem=null,this._yamlMode=!1))}get groupKeys(){const e=this._sidebarConfig?.custom_groups||{};return[{value:"bottom_items",label:"BOTTOM"},...Object.keys(e).map(e=>({value:e,label:e.replace(/_/g," ").toUpperCase()}))]}render(){if(!this.hass||!this._sidebarConfig)return Se`<div>Loading...</div>`;const e=this._renderNewItemsList(),t=this._renderSelectedItem();return Se` <div class="config-content">${null===this._selectedItemIndex?e:t}</div> `}_renderNewItemsList(){if(null!==this._selectedItemIndex)return Ie;const e=Se` <ha-button size="small" @click=${this._togglePromptNewItem}>Add new item </ha-button> `,t=this._sidebarConfig?.new_items||[],i=Se`
      ${t.length?Se`
            <div class="group-list">
              ${vg(t,e=>e.title,(e,t)=>{const{icon:i,title:n}=e;return Se`
                    <div class="group-item-row" style="padding-inline-start: 1rem">
                      <div class="group-name" @click=${()=>this._selectedItemIndex=t}>
                        <ha-icon icon=${i}></ha-icon>
                        <div class="group-name-items">
                          ${n}
                          <span>${Dg(this.getGroupKey(n))}</span>
                        </div>
                      </div>
                      <div class="group-actions">
                        <ha-icon-button .label=${"Edit item"} @click=${()=>this._selectedItemIndex=t}>
                          <ha-icon icon="mdi:pencil"></ha-icon
                        ></ha-icon-button>
                        <ha-icon-button .label=${"Delete item"} @click=${this._handleDeleteItem.bind(this,t)}>
                          <ha-icon icon="mdi:trash-can-outline"></ha-icon
                        ></ha-icon-button>
                      </div>
                    </div>
                  `})}
            </div>
          `:Se`<div>No new items added yet</div>`}
    `;return Se`
      <div class="config-content">
        ${i}
        <div class="header-row flex-end">${e}</div>
      </div>
    `}_renderSelectedItem(){if(null===this._selectedItemIndex)return Ie;const e=kg.BTN_LABEL,t=this._sidebarConfig.new_items[this._selectedItemIndex],i=Se` <div class="header-row">
      <ha-icon-button .path=${au} @click=${()=>this._selectedItemIndex=null}> </ha-icon-button>
    </div>`,n={...t},o=this.getGroupKey(t.title),s=Dg(o),r={icon:n?.icon,group:o},a=Fn(n,["entity","tap_action","hold_action","double_tap_action"]),l={notification:n.notification},c=this.groupKeys,d=this._configSchema(c),h=this._actionsSchema,u=this._notificationSchema;return Se`
      ${i}
      <div class="config-content">
        ${this._yamlMode?Se`
              <ha-yaml-editor
                .hass=${this.hass}
                .defaultValue=${n}
                .copyToClipboard=${!0}
                .required=${!0}
                @value-changed=${e=>{const{isValid:t,value:i}=e.detail;t&&(this._sidebarConfig.new_items[this._selectedItemIndex]=i,this._dispatchConfig(this._sidebarConfig))}}
              ></ha-yaml-editor>
            `:Se`
              <div class="group-item-row item-name-row">
                <div class="group-name">
                  <ha-icon icon=${t.icon}></ha-icon>
                  <div class="group-name-items">
                    ${t.title}
                    <span>${s}</span>
                  </div>
                </div>
                <div class="group-actions">
                  <ha-button
                    appearance="plain"
                    size="small"
                    @click=${this._toggleRenameItem.bind(this,this._selectedItemIndex)}
                    >Rename</ha-button
                  >
                </div>
              </div>

              ${this._createHaForm(r,d,"base")}
              ${this._createHaForm(a,h,"actions")}
              ${this._createHaForm(l,u,"notification","notification-form")}
            `}
        <div class="header-row flex-end">
          <ha-button
            appearance="plain"
            size="small"
            @click=${()=>{this._yamlMode=!this._yamlMode}}
            >${this._yamlMode?e.SHOW_VISUAL_EDITOR:e.SHOW_CODE_EDITOR}</ha-button
          >
        </div>
      </div>
    `}getGroupKey(e){const{custom_groups:t={},bottom_items:i=[],bottom_grid_items:n=[]}=this._sidebarConfig;return Un({...t,bottom_items:i,bottom_grid_items:n},t=>t.includes(e))}_toggleItemInPreview(e){const t=this._dialog._getGroupOfPanel(e);t&&null!==t&&["bottom_items","bottom_grid_items"].includes(t)?this._dialog._dialogPreview._toggleBottomPanel(t):this._dialog._dialogPreview._toggleGroup(t)}_createHaForm(e,t,i,n){return Se`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${t}
        .configKey=${i}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
        id=${n||Ie}
      >
      </ha-form>
    `}_valueChanged(e){if(e.stopPropagation(),null===this._selectedItemIndex)return;const t=this._selectedItemIndex,i={...this._sidebarConfig.new_items[t]},n=e.detail.value,o=e.target.configKey;let s={};if("base"===o){const e=n?.group,t=i.title;s={...n},this._handleGroupChange(t,e)}else if("actions"===o){const e=Fn(i,["entity","tap_action","hold_action","double_tap_action"]);JSON.stringify(e)!==JSON.stringify(n)&&(s={...n})}else"notification"===o&&JSON.stringify(i.notification)!==JSON.stringify(n.notification)&&(s={notification:n.notification});if(Object.keys(s).length>0){const e={...i,...s},n=[...this._sidebarConfig.new_items||[]];n[t]=e,this._sidebarConfig={...this._sidebarConfig,new_items:n},this._selectedItem={...e},this._dispatchConfig(this._sidebarConfig)}}_handleGroupChange(e,t){const i=this.getGroupKey(e);if(!(i===t||""===i&&!t||!i&&!t||"bottom_items"===i&&"bottom"===t))if(t&&""!==t){if(i!==t){if(this._handleRemoveItem(e),"bottom"===t){const t=[...this._sidebarConfig.bottom_items||[]];return void(t.includes(e)||(t.push(e),this._sidebarConfig={...this._sidebarConfig,bottom_items:t}))}const i={...this._sidebarConfig.custom_groups};return i[t]||(i[t]=[]),i[t].push(e),void(this._sidebarConfig={...this._sidebarConfig,custom_groups:i})}}else this._handleRemoveItem(e)}_dispatchConfig(e){const t=new CustomEvent("sidebar-changed",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}static get styles(){return[G`
        .item-name-row {
          padding: 0.5em;
          border: 1px solid var(--divider-color);
          border-radius: 4px;
          background-color: var(--secondary-background-color);
        }
      `,wg]}};ft([_t({attribute:!1})],Mg.prototype,"hass",void 0),ft([_t({attribute:!1})],Mg.prototype,"_dialog",void 0),ft([_t({attribute:!1})],Mg.prototype,"_sidebarConfig",void 0),ft([bt()],Mg.prototype,"_selectedItemIndex",void 0),ft([bt()],Mg.prototype,"_selectedItem",void 0),ft([bt()],Mg.prototype,"_yamlMode",void 0),Mg=ft([pt("sidebar-dialog-new-items")],Mg);const Pg=["appearance","panels","newItems"];let Rg=class extends qe{constructor(){super(...arguments),this.fullscreen=!1,this._connected=!1,this._sidebarConfig={},this._useConfigFile=!1,this._tabState=v.BASE,this._configLoaded=!1,this._currTab=Pg[0],this._initPanelOrder=[],this._initCombiPanels=[],this._newItemMap=new Map,this._newItems=[],this._panelConfigMap=new Map,this._pinnedGroupsMap=new Map,this._settingItemMoved=!1,this._uploading=!1,this._styleManager=new Zh({prefix:"sidebar-dialog"}),this._dashboardUtils=Md,this._arrayUtils=sf,this._setupInitConfig=async()=>{this._validateStoragePanels(),this._validateConfigFile()},this._validateStoragePanels=async()=>{if(this._useConfigFile)return;const e=JSON.parse(bo(w.PANEL_ORDER)||"[]"),t=wo(),i=Vu(e,t),{added:n,removed:o}=await Dd(this.hass,i);Boolean(n.length||o.length)?window.location.reload():(this._sidebarConfig=Eo()||{},vo(w.HIDDEN_PANELS),this._updateSidebarItems(e,t))},this._validateConfigFile=async()=>{if(!this._useConfigFile)return;const e=await pc();if(!e)return;const t=Qo(e,this.hass,!0);"object"==typeof t&&null!==t&&(this._invalidConfig=t),this._configLoaded=!0},this._handleInvalidConfig=async e=>{if(this._invalidConfig&&0!==Object.keys(this._invalidConfig).length)switch(e){case"check":const e=this._invalidConfig.config,t=Qo(e,this.hass,!0);"object"==typeof t&&null!==t&&(this._invalidConfig=t,this.requestUpdate());break;case"auto-correct":const i=Zo(this._invalidConfig.config,this.hass);this._invalidConfig={...this._invalidConfig,config:i},this._handleInvalidConfig("check"),this.requestUpdate();break;case"save":if(!Qo(this._invalidConfig.config,this.hass))return void await vd(this,O.CONFIG_INVALID);this._sidebarConfig=this._invalidConfig.config,this._invalidConfig=void 0,this._useConfigFile=!1,this._mainDialog._configValid=!0,yo(w.USE_CONFIG_FILE,"false"),yo(w.UI_CONFIG,this._sidebarConfig),this.requestUpdate()}else console.warn("No invalid config to handle")},this._updateSidebarItems=(e,t)=>{let i={...this._sidebarConfig||{}};const n=to(this.hass),o=dn([...t,...i.hidden_items||[],n]);i=Wo(i,o);const s=Tn(i.hidden_items||[],n);i.hidden_items=dn(s),Vn(i.hidden_items)&&delete i.hidden_items;JSON.stringify(this._sidebarConfig)!==JSON.stringify(i)&&(this._sidebarConfig=i,yo(w.UI_CONFIG,this._sidebarConfig));const r=dn(e),a=this._sidebarConfig?.new_items||[];this._newItems=a.map(e=>e.title),this._initCombiPanels=Vu(r,s),this._initPanelOrder=[...r],this._configLoaded=!0},this._cleanItemsFromGroups=(e,t)=>Bo(e,t),this._getGroupOfPanel=e=>{const t=[...this._panelConfigMap.entries()].find(([,t])=>t.includes(e));return t?t[0]:null}}connectedCallback(){super.connectedCallback(),this._connected=!0,this._useConfigFile=Ao(),this._tabState=!0===this._useConfigFile?v.CODE:v.BASE,this.addEventListener("sidebar-config-changed",this._sidebarConfigChanged),window.sidebarDialog=this}disconnectedCallback(){super.disconnectedCallback(),this._connected=!1,this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=void 0)}get GUImode(){return this._tabState===v.BASE}get _currentConfig(){return this._sidebarConfig}willUpdate(e){if(e.has("_connected")&&this._connected&&this._setupInitConfig(),e.has("_useConfigFile")&&(this._useConfigFile?this._validateConfigFile():this._useConfigFile||void 0===this._invalidConfig||(this._invalidConfig=void 0,this._validateStoragePanels(),this._mainDialog._configValid=this.isValidConfig,this.requestUpdate())),e.has("_invalidConfig")&&this._invalidConfig){const e=this.isValidConfig;this._mainDialog._configValid=e,this.requestUpdate()}if(e.has("_settingItemMoved"))if(this._settingItemMoved&&!this._initCombiPanels.includes("config"))this._initCombiPanels.push("config");else if(!this._settingItemMoved){const e={...this._sidebarConfig},t=Bo(Fn(e,[x.CUSTOM,x.BOTTOM,x.HIDDEN,x.BOTTOM_GRID]),["config"]);this._sidebarConfig={...e,...t},this._initCombiPanels=this._initCombiPanels.filter(e=>"config"!==e)}e.has("_configLoaded")&&!0===this._configLoaded&&!this._resizeObserver&&setTimeout(()=>{this._measureConfigSection()},100)}shouldUpdate(e){return e.has("_sidebarConfig")&&this._sidebarConfig,!0}get isValidConfig(){let e=!this._invalidConfig||0===Object.keys(this._invalidConfig).length;return this._useConfigFile&&(e=!1!==this._invalidConfig?.valid),e}updated(e){if(this._configLoaded&&e.has("_sidebarConfig")&&this._sidebarConfig){const t=e.get("_sidebarConfig"),i=this._sidebarConfig;if(void 0!==t&&i){JSON.stringify(t.new_items)!==JSON.stringify(i.new_items)&&i.new_items&&(this._newItemMap=new Map(i.new_items.map(e=>[e.title,e])));JSON.stringify(t.pinned_groups)!==JSON.stringify(i.pinned_groups)&&i.pinned_groups&&(this._pinnedGroupsMap=new Map(Object.entries(Ac(i.pinned_groups)))),this._settingItemMoved=!0===i.move_settings_from_fixed}const n=[...this._newItems];JSON.stringify(n)!==JSON.stringify(i.new_items?.map(e=>e.title)||[])&&(this._newItems=i.new_items?.map(e=>e.title)||[],this._initCombiPanels=this._initCombiPanels.filter(e=>!n.includes(e)),this._initCombiPanels=[...this._initCombiPanels,...Array.from(this._newItems)]);const o={...i.custom_groups||{},bottom_items:i.bottom_items||[],bottom_grid_items:i.bottom_grid_items||[]};this._panelConfigMap=new Map(Object.entries(o));const s=JSON.stringify(this._initConfig)!==JSON.stringify(i);this._mainDialog._saveDisabled=!s}}_measureConfigSection(){const e=this.shadowRoot?.getElementById("sidebar-config");e&&(this._resizeObserver=new ResizeObserver(e=>{for(const t of e){const{height:e}=t.contentRect;e>800&&!this.fullscreen?this._dialogPreview.style.setProperty("--config-section-height",`${Math.round(e)}px`):this._dialogPreview.style.removeProperty("--config-section-height")}}),this._resizeObserver.observe(e))}render(){if(!this._configLoaded)return Se`
        <div class="loading-content">
          <ha-fade-in .delay=${500}><ha-spinner size="large"></ha-spinner></ha-fade-in>
        </div>
      `;const e=this._renderMainConfig(),t=this._renderSidebarPreview();return Se` <div id="sidebar-dialog-wrapper" class="dialog-content">${e} ${t}</div> `}_renderMainConfig(){if(this._tabState!==v.BASE)return this._renderCodeEditor();const e=[{key:"appearance",label:"Appearance",content:this._renderBaseConfig()},{key:"panels",label:"Panels",content:this._renderPanelConfig()},{key:"newItems",label:"New Items",content:this._renderNewItemsConfig()}],t=Pg.indexOf(this._currTab);return Se`
      <div id="sidebar-config">
        <div id="tabbar">
          ${e.map(e=>Se`<sidebar-organizer-tab
                .name=${e.label}
                .active=${this._currTab===e.key}
                class="tab-item"
                @click=${()=>this._changeTab(e.key)}
              ></sidebar-organizer-tab>`)}
        </div>
        <div>${e[t]?.content||Se`<p>Error: Invalid tab</p>`}</div>
      </div>
    `}_changeTab(e){this._currTab!==e&&(this._currTab=e)}_renderSidebarPreview(){return Se`
      <div id="sidebar-preview">
        <sidebar-dialog-preview
          .invalidConfig=${!this.isValidConfig}
          .hass=${this.hass}
          ._dialog=${this}
          ._sidebarConfig=${this._sidebarConfig}
          @item-clicked=${this._handleItemClicked}
        ></sidebar-dialog-preview>
      </div>
    `}_renderBaseConfig(){return Se` <sidebar-dialog-colors
      .hass=${this.hass}
      ._dialog=${this}
      ._sidebarConfig=${this._sidebarConfig}
      @sidebar-changed=${this._handleSidebarChanged}
    ></sidebar-dialog-colors>`}_renderPanelConfig(){return Se` <sidebar-dialog-groups
      .hass=${this.hass}
      ._dialog=${this}
      ._sidebarConfig=${this._sidebarConfig}
      @sidebar-changed=${this._handleSidebarChanged}
    ></sidebar-dialog-groups>`}_renderNewItemsConfig(){return Se`
      <sidebar-dialog-new-items
        .hass=${this.hass}
        ._dialog=${this}
        ._sidebarConfig=${this._sidebarConfig}
        @sidebar-changed=${this._handleSidebarChanged}
        @item-clicked=${this._handleItemClicked}
      ></sidebar-dialog-new-items>
    `}_toggleCodeEditor(){this._tabState=this._tabState===v.BASE?v.CODE:v.BASE}_renderCodeEditor(){return Se`
      <div class="config-content">
        ${this._invalidConfig&&Object.keys(this._invalidConfig).length>0?Se``:this._uploading?Se`<ha-spinner .size=${"large"}></ha-spinner>`:Se`
                <sidebar-dialog-code-editor
                  .hass=${this.hass}
                  ._sidebarConfig=${this._sidebarConfig}
                  @sidebar-changed=${this._handleSidebarChanged}
                ></sidebar-dialog-code-editor>
              `}
        ${this._renderUseConfigFile()}
      </div>
    `}_renderInvalidConfig(){if(!this._invalidConfig||0===Object.keys(this._invalidConfig).length)return Ie;const e=kg.BTN_LABEL,t=this._invalidConfig,i=!0===this._invalidConfig.valid;return Se`
      <div class="invalid-config" .hidden=${this._useConfigFile} style="--code-mirror-max-height: 250px;">
        <ha-alert alert-type="info">${O.INFO_EDIT_UPLOAD_CONFIG}</ha-alert>
        <ha-yaml-editor
          .label=${"EDITOR FOR INVALID CONFIG"}
          .hass=${this.hass}
          .defaultValue=${this._invalidConfig.config}
          .hasExtraActions=${!0}
          .readOnly=${i}
          @value-changed=${e=>{e.stopPropagation();const{isValid:i,value:n}=e.detail;i&&(this._invalidConfig={...t,config:n},this.requestUpdate())}}
        >
          <div slot="extra-actions" style="${"display: flex;  width: auto; justify-content: space-between;"}">
            <ha-button
              appearance="plain"
              size="small"
              .disabled=${i}
              @click=${()=>this._handleInvalidConfig("auto-correct")}
              >${e.AUTO_CORRECT}</ha-button
            >
            <ha-button
              appearance="plain"
              size="small"
              destructive
              .label=${i?e.SAVE_MIGRATE:e.CHECK_VALIDITY}
              @click=${()=>this._handleInvalidConfig(i?"save":"check")}
              >${i?e.SAVE_MIGRATE:e.CHECK_VALIDITY}</ha-button
            >
          </div>
        </ha-yaml-editor>

        <ha-alert alert-type=${t.valid?"success":"warning"}
          >${i?O.CONFIG_VALID:O.CONFIG_INVALID}</ha-alert
        >
        <div class="invalid-config-content" ?hidden=${i}>
          ${qo.map(e=>{const i=t[e];return(Array.isArray(i)?i.length>0:Boolean(i))?Se`
                  <div>
                    <h2>${Ko[e]}</h2>
                    <ul>
                      ${Array.isArray(i)?i.map(e=>Se`<li>${e}</li>`):Se`<li>True</li>`}
                    </ul>
                  </div>
                `:Ie})}
        </div>
      </div>
    `}_renderUseConfigFile(){const e=kg.BTN_LABEL,t=this._useConfigFile;return Se`
      <div class="overlay">
        <ha-alert alert-type="info" .hidden=${!t}> ${O.USE_CONFIG_FILE} </ha-alert>
        ${this._renderInvalidConfig()}

        <div class="header-row">
          <ha-button
            appearance="filled"
            size="small"
            .label=${e.UPLOAD}
            @click=${()=>this._uploadConfigFile()}
            >${e.UPLOAD}</ha-button
          >
          <ha-formfield label="Use YAML File" style="min-height: 48px;">
            <ha-switch
              .label=${e.USE_CONFIG_FILE}
              .checked=${t}
              @change=${e=>{const t=e.target.checked;this._useConfigFile=t,yo(w.USE_CONFIG_FILE,t.toString())}}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `}_uploadConfigFile(){const e=document.createElement("input");e.type="file",e.accept=".yaml",e.style.display="none",e.onchange=()=>{const t=e.files?.[0];if(!t)return;this._uploading=!0;const i=new FileReader;i.onload=async e=>{try{const t=e.target?.result,i=uc.parse(t),n=Qo(i,this.hass,!0);if("object"!=typeof n||null===n)return;if(n.valid){this._invalidConfig=void 0,this._uploading=!1;if(!await bd(this,O.UPLOAD_SUCCESS_VALID_RELOAD,"OK"))return;this._sidebarConfig=i;const e=()=>new Promise(e=>{yo(w.UI_CONFIG,this._sidebarConfig),localStorage.removeItem(w.PANEL_ORDER),localStorage.removeItem(w.HIDDEN_PANELS),e()});await e(),window.location.reload()}else this._invalidConfig=n,await vd(this,O.INVALID_UPLOADED_CONFIG),this._uploading=!1,this.requestUpdate()}catch(e){}},i.readAsText(t)},document.body.appendChild(e),e.click(),document.body.removeChild(e)}_handleSidebarChanged(e){e.stopPropagation();const t=e.detail;this._sidebarConfig=t}_sidebarConfigChanged(e){e.stopPropagation();const t=e.detail.config;this._sidebarConfig=t}get pickedItems(){return Array.from(this._panelConfigMap.values()).flat()}get ungroupedItems(){const e=to(this.hass),t=new Set([...this.pickedItems,...this._sidebarConfig?.hidden_items||[],e]);return this._initCombiPanels.filter(e=>!t.has(e))}_handleItemClicked(e){e.stopPropagation();const t=e.detail,i=this._getGroupOfPanel(t);this._dialogGroups&&this._dialogGroups.clickedPanelInPreview(t,i)}static get styles(){return[G`
        :host {
          --side-dialog-gutter: 0.5rem;
          --side-dialog-padding: 1rem;
          max-width: 1400px;
          display: flex;
          margin: 0 auto;
        }
        .loading-content {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }
        #sidebar-dialog-wrapper {
          display: flex;
          flex-direction: row;
          gap: var(--side-dialog-padding);
          justify-content: center;
          position: relative;
          width: 100%;
        }
        @media all and (max-width: 800px), all and (max-height: 500px) {
          #sidebar-dialog-wrapper {
            flex-direction: column;
          }
          #sidebar-preview {
            max-width: none !important;
            width: 100%;
            min-height: 600px;
          }
        }

        .dialog-content > * {
          flex-basis: 0;
          flex-grow: 1;
          flex-shrink: 1;
          min-width: 0;
        }

        #sidebar-config {
          display: block;
          height: max-content;
        }

        #tabbar {
          display: flex;
          font-size: 1rem;
          overflow: hidden;
          text-transform: uppercase;
          margin-bottom: var(--side-dialog-padding);
          align-content: stretch;
          justify-content: space-around;
          align-items: stretch;
          font-weight: 500;
        }
        .tab-item {
          width: 100%;
          flex: 1 1 0%;
        }
        .tab-item[active] {
          background-color: #9b9b9b10;
        }
        :host([fullscreen]) #sidebar-preview {
          height: calc(var(--mdc-dialog-min-height) - 128px - 7px);
        }

        #sidebar-preview {
          position: sticky;
          top: 0px;
          padding: 0px;
          justify-items: center;
          max-width: 300px;
          max-height: fit-content;
          overflow: hidden;
          align-content: center;
          /* background-color: rgba(0, 0, 0, 0.2); */
          background-color: var(--clear-background-color, rgba(0, 0, 0, 0.2));
        }

        .config-content {
          display: flex;
          flex-direction: column;
          gap: var(--side-dialog-gutter);
          margin-top: 1rem;
          min-height: 250px;
          justify-content: space-between;
          flex: 1;
        }

        .header-row {
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          --mdc-icon-button-size: 42px;
          gap: var(--side-dialog-gutter);
        }
        .header-row.center {
          justify-content: center;
        }
        .flex {
          flex: 1;
        }

        .overlay {
          display: flex;
          align-items: stretch;
          justify-content: flex-end;
          flex-direction: column;
          /* padding-inline: 0.5rem; */
        }

        .overlay[expanded] {
          display: flex;
          position: absolute;
          width: -webkit-fill-available;
          height: -webkit-fill-available;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 2rem;
          background: var(--card-background-color);
          z-index: 100;
          padding: 1rem;
          top: 0;
          left: 0;
        }

        .invalid-config {
          display: flex;
          width: inherit;
          /* background: var(--clear-background-color); */
          place-items: center;
          flex-direction: column;
          align-items: stretch;
          gap: 1em;
          padding: 0.5em;
        }
        .invalid-config-content {
          display: flex;
          flex-direction: row;
          gap: var(--side-dialog-gutter);
          width: 100%;
          justify-content: space-around;
          background: var(--disabled-color);
        }
      `]}};ft([_t({attribute:!1})],Rg.prototype,"hass",void 0),ft([_t({attribute:!1})],Rg.prototype,"_mainDialog",void 0),ft([_t({attribute:!1})],Rg.prototype,"_initConfig",void 0),ft([_t({type:Boolean,reflect:!0,attribute:"fullscreen"})],Rg.prototype,"fullscreen",void 0),ft([bt()],Rg.prototype,"_connected",void 0),ft([bt()],Rg.prototype,"_sidebarConfig",void 0),ft([bt()],Rg.prototype,"_useConfigFile",void 0),ft([bt()],Rg.prototype,"_tabState",void 0),ft([bt()],Rg.prototype,"_configLoaded",void 0),ft([bt()],Rg.prototype,"_currTab",void 0),ft([bt()],Rg.prototype,"_initPanelOrder",void 0),ft([bt()],Rg.prototype,"_initCombiPanels",void 0),ft([bt()],Rg.prototype,"_newItemMap",void 0),ft([bt()],Rg.prototype,"_newItems",void 0),ft([bt()],Rg.prototype,"_panelConfigMap",void 0),ft([bt()],Rg.prototype,"_pinnedGroupsMap",void 0),ft([bt()],Rg.prototype,"_settingItemMoved",void 0),ft([bt()],Rg.prototype,"_uploading",void 0),ft([bt()],Rg.prototype,"_invalidConfig",void 0),ft([vt("sidebar-dialog-colors")],Rg.prototype,"_dialogColors",void 0),ft([vt("sidebar-dialog-groups")],Rg.prototype,"_dialogGroups",void 0),ft([vt("sidebar-dialog-preview")],Rg.prototype,"_dialogPreview",void 0),ft([vt("sidebar-dialog-code-editor")],Rg.prototype,"_dialogCodeEditor",void 0),ft([vt("sidebar-dialog-new-items")],Rg.prototype,"_dialogNewItems",void 0),Rg=ft([pt("sidebar-organizer-config-dialog")],Rg);let Bg=window.matchMedia("(min-width: 1000px) and (max-width: 1440px)"),jg=class extends qe{constructor(){super(...arguments),this.large=!1,this._open=!1,this._configValid=!0,this._saveDisabled=!0,this._GUImode=!0}connectedCallback(){super.connectedCallback(),window._sidebarOrganizerDialog=this}disconnectedCallback(){super.disconnectedCallback(),window._sidebarOrganizerDialog=void 0}async showDialog(e){this._open=!0,this._params=e,this._initConfig=Ri(e.config),Bg.matches&&(this.large=!0)}closeDialog(){return this._isConfigChanged?(this._handleClose(),!1):(this._open=!1,this._params=void 0,md(this,"dialog-closed",{dialog:this.localName}),!0)}_dialogClosed(){this._params=void 0,this._open=!1,md(this,"dialog-closed",{dialog:this.localName})}get _canSaveConfig(){return void 0===this._configDialog._invalidConfig||this._configValid&&0!==Object.keys(this._configDialog._sidebarConfig).length}get _isConfigChanged(){return!(!this._params||!this._configDialog||this._configDialog._useConfigFile)&&JSON.stringify(this._initConfig)!==JSON.stringify(this._configDialog._sidebarConfig)}async _handleClose(){await bd(this,O.CONFIG_CHANGED,"SAVE","DISCARD")?this._handleSaveConfig():(Vn(this._initConfig)&&Eo()&&wc(),this._dialogClosed())}_showSuccessToast(){Rd(this,{message:"Test config saved successfully."})}async _handleSaveConfig(){if(!this._canSaveConfig)return console.warn("Cannot save config, it is not valid or has unsaved changes."),void Rd(this,{message:"Cannot save config, it is not valid or has unsaved changes.",duration:5e3});this._configDialog._useConfigFile&&this._configValid&&(await this._configDialog._handleInvalidConfig("save"),this._showSuccessToast());const e={config:this._configDialog._sidebarConfig,useConfigFile:this._configDialog._useConfigFile};md(this,A.SIDEBAR_CONFIG_SAVED,e),this._dialogClosed()}_renderContent(){return Se`
      <sidebar-organizer-config-dialog
        .hass=${this.hass}
        ._mainDialog=${this}
        ._initConfig=${this._initConfig}
      ></sidebar-organizer-config-dialog>
    `}render(){if(!this._open)return Ie;const e=kg.BTN_LABEL,t=Se`<div slot="actionItems">
      <ha-icon-button .label=${"Toggle large"} .path=${ru} @click=${this._enlarge}> </ha-icon-button>
      <ha-icon-button
        .label=${"Documentation"}
        .path=${gu}
        @click=${()=>window.open(g)}
      ></ha-icon-button>
    </div>`,i=Se`<span slot="title" .title=${u} @click=${this._enlarge}> ${f} </span>
      <span slot="subtitle">(${p})</span> `;return Se`
      <ha-dialog
        open
        scrimClickAction
        escapeKeyAction
        @keydown=${this._ignoreKeydown}
        @closed=${this._dialogClosed}
        .hideActions=${!1}
        .flexContent=${!0}
        .heading=${f}
      >
        <ha-dialog-header slot="heading">
          <ha-icon-button
            slot="navigationIcon"
            @click=${this.closeDialog}
            .label=${this.hass.localize("ui.common.close")}
            .path=${lu}
          ></ha-icon-button>
          ${i} ${t}
        </ha-dialog-header>

        ${this._renderContent()}

        <ha-button appearance="plain" size="small" slot=${o.SECONDARY_ACTION} @click=${this._toggleCodeUi}
          >${this._GUImode?kg.BTN_LABEL.SHOW_CODE_EDITOR:kg.BTN_LABEL.SHOW_VISUAL_EDITOR}
        </ha-button>
        <div slot=${o.PRIMARY_ACTION}>
          <ha-button appearance="plain" size="small" .label=${e.CANCEL} @click=${this.closeDialog}>
            ${e.CANCEL}
          </ha-button>
          <ha-button
            appearance="plain"
            size="small"
            .label=${e.SAVE}
            @click=${this._handleSaveConfig}
            .disabled=${this._saveDisabled}
          >
            ${e.SAVE}
          </ha-button>
        </div>
      </ha-dialog>
    `}_toggleCodeUi(){this._configDialog._toggleCodeEditor(),this._GUImode=this._configDialog.GUImode}_enlarge(){this.large=!this.large}_ignoreKeydown(e){e.stopPropagation()}static get styles(){return tu}};ft([_t({attribute:!1})],jg.prototype,"hass",void 0),ft([_t({type:Boolean,reflect:!0})],jg.prototype,"large",void 0),ft([bt()],jg.prototype,"_params",void 0),ft([bt()],jg.prototype,"_initConfig",void 0),ft([bt()],jg.prototype,"_open",void 0),ft([bt()],jg.prototype,"_configValid",void 0),ft([bt()],jg.prototype,"_saveDisabled",void 0),ft([bt()],jg.prototype,"_GUImode",void 0),ft([vt("ha-dialog")],jg.prototype,"_dialog",void 0),ft([vt("sidebar-organizer-config-dialog")],jg.prototype,"_configDialog",void 0),jg=ft([pt("sidebar-organizer-dialog")],jg);var Hg=Object.freeze({__proto__:null,get SidebarOrganizerDialog(){return jg}});let Gg=class extends qe{constructor(){super(...arguments),this.large=!1,this._open=!1,this._configValid=!0,this._saveDisabled=!0,this._GUImode=!0}connectedCallback(){super.connectedCallback(),window._sidebarOrganizerDialogWA=this}disconnectedCallback(){super.disconnectedCallback(),window._sidebarOrganizerDialogWA=void 0}async showDialog(e){this._open=!0,this._params=e,this.large=!1,this._initConfig=Ri(e.config)}closeDialog(){return this._isConfigChanged?(this._handleClose(),!1):(this._open=!1,this._params=void 0,md(this,"dialog-closed",{dialog:this.localName}),!0)}_dialogClosed(){this._params=void 0,this._open=!1,md(this,"dialog-closed",{dialog:this.localName})}get _canSaveConfig(){return void 0===this._configDialog._invalidConfig||this._configValid&&0!==Object.keys(this._configDialog._sidebarConfig).length}get _isConfigChanged(){return!(!this._params||!this._configDialog||this._configDialog._useConfigFile)&&JSON.stringify(this._initConfig)!==JSON.stringify(this._configDialog._sidebarConfig)}async _handleClose(){await bd(this,O.CONFIG_CHANGED,"SAVE","DISCARD")?this._handleSaveConfig():(Vn(this._initConfig)&&Eo()&&wc(),this._dialogClosed())}_showSuccessToast(){Rd(this,{message:"Test config saved successfully."})}async _handleSaveConfig(){if(!this._canSaveConfig)return console.warn("Cannot save config, it is not valid or has unsaved changes."),void Rd(this,{message:"Cannot save config, it is not valid or has unsaved changes.",duration:5e3});this._configDialog._useConfigFile&&this._configValid&&(await this._configDialog._handleInvalidConfig("save"),this._showSuccessToast());const e={config:this._configDialog._sidebarConfig,useConfigFile:this._configDialog._useConfigFile};md(this,A.SIDEBAR_CONFIG_SAVED,e),this._dialogClosed()}_renderContent(){return Se`
      <sidebar-organizer-config-dialog
        ?fullscreen=${this.large}
        .hass=${this.hass}
        ._mainDialog=${this}
        ._initConfig=${this._initConfig}
      ></sidebar-organizer-config-dialog>
    `}render(){if(!this._open)return Ie;const e=kg.BTN_LABEL,t=Se` <span slot="headerTitle">${f}</span>
      <ha-icon-button
        slot="headerNavigationIcon"
        @click=${this.closeDialog}
        .label=${this.hass.localize("ui.common.close")}
        .path=${lu}
      ></ha-icon-button>
      <ha-icon-button
        slot="headerActionItems"
        .label=${"Toggle large"}
        .path=${this.large?fu:uu}
        @click=${this._enlarge}
      >
      </ha-icon-button>
      <ha-icon-button
        slot="headerActionItems"
        .label=${"Documentation"}
        .path=${gu}
        @click=${()=>window.open(g)}
      ></ha-icon-button>`;return Se`
      <ha-dialog
        .hass=${this.hass}
        .open=${this._open}
        .width=${this.large?"full":"large"}
        prevent-scrim-close
        @keydown=${this._ignoreKeydown}
        @closed=${this._dialogClosed}
        .headerSubtitle=${p}
        .headerSubtitlePosition=${"below"}
      >
        ${t}
        <div class="content">${this._renderContent()}</div>
        <ha-dialog-footer slot="footer">
          <ha-button
            appearance="plain"
            size="small"
            class="gui-mode-button"
            slot=${o.SECONDARY_ACTION}
            @click=${this._toggleCodeUi}
          >
            ${this._GUImode?e.SHOW_CODE_EDITOR:e.SHOW_VISUAL_EDITOR}
          </ha-button>
          <ha-button appearance="plain" size="small" slot=${o.SECONDARY_ACTION} @click=${this.closeDialog}>
            ${e.CANCEL}
          </ha-button>

          <ha-button
            appearance="plain"
            size="small"
            slot=${o.PRIMARY_ACTION}
            .label=${e.SAVE}
            @click=${this._handleSaveConfig}
            .disabled=${this._saveDisabled}
          >
            ${e.SAVE}
          </ha-button>
        </ha-dialog-footer>
      </ha-dialog>
    `}_toggleCodeUi(){this._configDialog._toggleCodeEditor(),this._GUImode=this._configDialog.GUImode}_enlarge(){this.large=!this.large}_ignoreKeydown(e){e.stopPropagation()}static get styles(){return[G`
        ha-dialog {
          --ha-dialog-width-full: 100vw;
          --ha-dialog-scrim-backdrop-filter: blur(4px) brightness(30%);
          --mdc-dialog-max-width: 90vw;
          --mdc-dialog-min-height: 700px;
          --ha-dialog-min-height: 700px;
          /* --mdc-dialog-min-height: calc(90vh - 72px); */
          --ha-dialog-surface-backdrop-filter: blur(2px);
          --dialog-backdrop-filter: blur(2px);
          --dialog-content-padding: 0 1rem;
        }
        ha-dialog[width='full'] {
          --width: var(--full-width);
          --mdc-dialog-min-height: 100vh;
          --mdc-dialog-max-height: 100vh;
          --ha-dialog-min-height: 100vh;
          --ha-dialog-max-height: 100vh;
          --ha-dialog-border-radius: 0;
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-dialog {
            height: 100vh;
            --mdc-dialog-max-height: 100vh;
            --dialog-surface-top: 0px;
            --mdc-dialog-max-width: 100vw;
          }
          sidebar-organizer-config-dialog {
            width: 100%;
            max-width: 100%;
          }
        }

        @media all and (max-width: 600px), all and (max-height: 500px) {
          :host([large]) .content {
            max-width: none;
          }
          ha-dialog,
          ha-dialog[large] {
            --mdc-dialog-min-width: 100vw;
            --mdc-dialog-max-width: 100vw;
            --mdc-dialog-min-height: 100vh;
            --mdc-dialog-max-height: 100vh;
            --vertical-align-dialog: flex-end;
            --ha-dialog-border-radius: 0;
          }
          sidebar-organizer-config-dialog {
            width: 100%;
            max-width: none;
          }
        }
        .content {
          width: 100%;
          max-width: 100%;
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          .content {
            width: 100%;
            max-width: 100%;
          }
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          :host([large]) .content {
            max-width: none;
          }
        }
        .gui-mode-button {
          margin-right: auto;
          margin-inline-end: auto;
          margin-inline-start: initial;
        }
        ha-dialog ha-icon-button[slot='headerActionItems'] {
          color: var(--secondary-text-color);
        }
      `]}};ft([_t({attribute:!1})],Gg.prototype,"hass",void 0),ft([_t({type:Boolean,reflect:!0})],Gg.prototype,"large",void 0),ft([bt()],Gg.prototype,"_params",void 0),ft([bt()],Gg.prototype,"_initConfig",void 0),ft([bt()],Gg.prototype,"_open",void 0),ft([bt()],Gg.prototype,"_configValid",void 0),ft([bt()],Gg.prototype,"_saveDisabled",void 0),ft([bt()],Gg.prototype,"_GUImode",void 0),ft([vt("sidebar-organizer-config-dialog")],Gg.prototype,"_configDialog",void 0),Gg=ft([pt("sidebar-organizer-dialog-wa")],Gg);var Ug=Object.freeze({__proto__:null,get SidebarOrganizerDialogWA(){return Gg}});
