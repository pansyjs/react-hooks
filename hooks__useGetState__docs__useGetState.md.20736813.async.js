(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18,6],{JvMI:function(e,t,r){},MZF8:function(e,t,r){"use strict";var n=r("ogwx");r.d(t,"a",(function(){return n["b"]}));r("VCU9")},R9z9:function(e,t,r){"use strict";r.r(t);var n=r("1QO0"),a=r.n(n),o=r("37jz"),l=r("lMkJ"),c=r("BgHv"),i=a.a.memo((e=>{var t=e.demos,r=t["docs-demo01-11"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"usegetstate"},a.a.createElement(o["AnchorLink"],{to:"#usegetstate","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"useGetState"),a.a.createElement("p",null,"\u7ed9 ",a.a.createElement("code",null,"React.useState")," \u589e\u52a0\u4e86\u4e00\u4e2a getter \u65b9\u6cd5\uff0c\u4ee5\u83b7\u53d6\u5f53\u524d\u6700\u65b0\u503c\u3002"),a.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},a.a.createElement(o["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),a.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},a.a.createElement(o["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),a.a.createElement(l["default"],t["docs-demo01-11"].previewerProps,a.a.createElement(r,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(o["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement(c["a"],{code:"const [state, setState, getState] = useGetState<S>(initialState: S | (() => S)): [S, (nextState: S | ((prevState: S) => S)) => void, () => S]",lang:"ts"}))))}));t["default"]=e=>{var t=a.a.useContext(o["context"]),r=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(i,{demos:r})}},REGO:function(e,t,r){(function(e,n){n(t,r("1QO0"))})(0,(function(e,t){"use strict";function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t["default"]=e,Object.freeze(t)}var n=r(t);function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,a(e,t)}var l=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=[]),e.length!==t.length||e.some((function(e,r){return!Object.is(e,t[r])}))},c={error:null},i=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,t.state=c,t.resetErrorBoundary=function(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];null==t.props.onReset||(e=t.props).onReset.apply(e,n),t.reset()},t}o(t,e),t.getDerivedStateFromError=function(e){return{error:e}};var r=t.prototype;return r.reset=function(){this.setState(c)},r.componentDidCatch=function(e,t){var r,n;null==(r=(n=this.props).onError)||r.call(n,e,t)},r.componentDidUpdate=function(e,t){var r,n,a=this.state.error,o=this.props.resetKeys;null!==a&&null!==t.error&&l(e.resetKeys,o)&&(null==(r=(n=this.props).onResetKeysChange)||r.call(n,e.resetKeys,o),this.reset())},r.render=function(){var e=this.state.error,t=this.props,r=t.fallbackRender,a=t.FallbackComponent,o=t.fallback;if(null!==e){var l={error:e,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(o))return o;if("function"===typeof r)return r(l);if(a)return n.createElement(a,l);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},t}(n.Component);function u(e,t){var r=function(r){return n.createElement(i,t,n.createElement(e,r))},a=e.displayName||e.name||"Unknown";return r.displayName="withErrorBoundary("+a+")",r}function s(e){var t=n.useState(null),r=t[0],a=t[1];if(null!=e)throw e;if(null!=r)throw r;return a}e.ErrorBoundary=i,e.useErrorHandler=s,e.withErrorBoundary=u,Object.defineProperty(e,"__esModule",{value:!0})}))},VkEy:function(e,t,r){"use strict";var n=r("1QO0"),a=r.n(n);r("JvMI");function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}t["a"]=function(e){return a.a.createElement("div",o({className:"__dumi-default-alert"},e))}},lMkJ:function(e,t,r){"use strict";r.r(t);var n=r("1QO0"),a=r.n(n),o=r("F4Ld"),l=r("REGO"),c=r("MZF8"),i=r("37jz"),u=r("BgHv"),s=r("VkEy");r("shXn");function d(e,t){return v(e)||b(e,t)||f(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done);l=!0)if(o.push(n.value),t&&o.length===t)break}catch(i){c=!0,a=i}finally{try{l||null==r["return"]||r["return"]()}finally{if(c)throw a}}return o}}function v(e){if(Array.isArray(e))return e}function h(e,t){var r,n=null===(r=e.match(/\.(\w+)$/))||void 0===r?void 0:r[1];return n||(n=t.tsx?"tsx":"jsx"),n}var E=function(e){var t,r,m,f=Object(n["useRef"])(),p=Object(n["useContext"])(i["context"]),b=p.locale,v=Object(i["useLocaleProps"])(b,e),E=Object(i["useDemoUrl"])(v.identifier),y=v.demoUrl||E,_=(null===c["a"]||void 0===c["a"]?void 0:c["a"].location.hash)==="#".concat(v.identifier),g=1===Object.keys(v.sources).length,k=Object(i["useCodeSandbox"])((null===(t=v.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:v),O=Object(i["useRiddle"])((null===(r=v.hideActions)||void 0===r?void 0:r.includes("RIDDLE"))?null:v),w=Object(i["useMotions"])(v.motions||[],f.current),j=d(w,2),S=j[0],N=j[1],C=Object(i["useCopy"])(),x=d(C,2),A=x[0],R=x[1],I=Object(n["useState"])((function(){return v.sources._?"_":Object.keys(v.sources)[0]})),M=d(I,2),B=M[0],L=M[1],P=Object(n["useState"])(h(B,v.sources[B])),F=d(P,2),T=F[0],U=F[1],D=Object(n["useState"])(Boolean(v.defaultShowCode)),J=d(D,2),G=J[0],K=J[1],z=Object(n["useState"])(Math.random()),H=d(z,2),Q=H[0],V=H[1],X=v.sources[B][T]||v.sources[B].content,$=Object(i["useTSPlaygroundUrl"])(b,X),Z=Object(n["useRef"])(),q=Object(i["usePrefersColor"])(),W=d(q,1),Y=W[0],ee=v.actionBarRender,te=void 0===ee?function(e){return e}:ee;function re(e){L(e),U(h(e,v.sources[e]))}return Object(n["useEffect"])((function(){V(Math.random())}),[Y]),a.a.createElement("div",{style:v.style,className:[v.className,"__dumi-default-previewer",_?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:v.identifier,"data-debug":v.debug||void 0,"data-iframe":v.iframe||void 0},v.iframe&&a.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),a.a.createElement("div",{ref:f,className:"__dumi-default-previewer-demo",style:{transform:v.transform?"translate(0, 0)":void 0,padding:v.compact||v.iframe&&!1!==v.compact?"0":void 0,background:v.background}},v.iframe?a.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(v.iframe).replace(/(\d)$/,"$1px")},key:Q,src:y,ref:Z}):a.a.createElement(l["ErrorBoundary"],{fallbackRender:function(e){var t=e.error;return a.a.createElement(s["a"],{type:"error"},a.a.createElement("h4",null,t.message||"This demo has been crashed."),t.stack&&a.a.createElement("details",null,a.a.createElement("summary",null,"Error stack"),a.a.createElement("pre",null,t.stack)))}},v.children)),a.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":v.title},v.title&&a.a.createElement(i["AnchorLink"],{to:"#".concat(v.identifier)},v.title),v.description&&a.a.createElement("div",{dangerouslySetInnerHTML:{__html:v.description}})),a.a.createElement("div",{className:"__dumi-default-previewer-actions"},te(a.a.createElement(a.a.Fragment,null,k&&a.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:k}),O&&a.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:O}),v.motions&&a.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:N,onClick:function(){return S()}}),v.iframe&&a.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return V(Math.random())}}),!(null===(m=v.hideActions)||void 0===m?void 0:m.includes("EXTERNAL"))&&a.a.createElement(i["Link"],{target:"_blank",to:y},a.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),a.a.createElement("span",null),a.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":R,onClick:function(){return A(X)}}),"tsx"===T&&G&&a.a.createElement(i["Link"],{target:"_blank",to:$},a.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),a.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(G?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return K(!G)}})))),G&&a.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!g&&a.a.createElement(o["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:B,onChange:re},Object.keys(v.sources).map((function(e){return a.a.createElement(o["a"],{tab:"_"===e?"index.".concat(h(e,v.sources[e])):e,key:e})}))),a.a.createElement("div",{className:"__dumi-default-previewer-source"},a.a.createElement(u["a"],{code:X,lang:T,showCopy:!1}))))};t["default"]=E},shXn:function(e,t,r){}}]);