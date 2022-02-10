(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"8CHk":function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),r=a.n(n),c=a("Ip/e"),o=a("upm9"),l=a("/kL3"),i=r.a.memo((e=>{var t=e.demos,a=t["useupdateeffect-demo01"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"useupdateeffect"},r.a.createElement(c["AnchorLink"],{to:"#useupdateeffect","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useUpdateEffect"),r.a.createElement("p",null,r.a.createElement("code",null,"useUpdateEffect")," \u7528\u6cd5\u7b49\u540c\u4e8e ",r.a.createElement("code",null,"useEffect"),"\uff0c\u4f46\u662f\u4f1a\u5ffd\u7565\u9996\u6b21\u6267\u884c\uff0c\u53ea\u5728\u4f9d\u8d56\u66f4\u65b0\u65f6\u6267\u884c\u3002"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(c["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(c["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(o["default"],t["useupdateeffect-demo01"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(c["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement("p",null,"API \u4e0e ",r.a.createElement("code",null,"React.useEffect")," \u5b8c\u5168\u4e00\u81f4\u3002"),r.a.createElement(l["a"],{code:"useUpdateEffect(\n  effect: React.EffectCallback,\n  deps?: React.DependencyList,\n)",lang:"typescript"}))))}));t["default"]=e=>{var t=r.a.useContext(c["context"]),a=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:a})}},KjXW:function(e,t,a){},MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")},upm9:function(e,t,a){"use strict";a.r(t);var n=a("1QO0"),r=a.n(n),c=a("VqeS"),o=a("MZF8"),l=a("Ip/e"),i=a("/kL3");a("KjXW");function u(e,t){return p(e)||f(e,t)||s(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function f(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,c=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(n=a.next()).done);o=!0)if(c.push(n.value),t&&c.length===t)break}catch(i){l=!0,r=i}finally{try{o||null==a["return"]||a["return"]()}finally{if(l)throw r}}return c}}function p(e){if(Array.isArray(e))return e}function b(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var E=function(e){var t,a,d,s=Object(n["useRef"])(),m=Object(n["useContext"])(l["context"]),f=m.locale,p=Object(l["useLocaleProps"])(f,e),E=Object(l["useDemoUrl"])(p.identifier),v=p.demoUrl||E,h=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(p.identifier),_=1===Object.keys(p.sources).length,y=Object(l["useCodeSandbox"])((null===(t=p.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:p),k=Object(l["useRiddle"])((null===(a=p.hideActions)||void 0===a?void 0:a.includes("RIDDLE"))?null:p),g=Object(l["useMotions"])(p.motions||[],s.current),w=u(g,2),j=w[0],O=w[1],N=Object(l["useCopy"])(),x=u(N,2),C=x[0],A=x[1],S=Object(n["useState"])((function(){return p.sources._?"_":Object.keys(p.sources)[0]})),I=u(S,2),L=I[0],R=I[1],U=Object(n["useState"])(b(L,p.sources[L])),M=u(U,2),P=M[0],T=M[1],D=Object(n["useState"])(Boolean(p.defaultShowCode)),F=u(D,2),X=F[0],$=F[1],B=Object(n["useState"])(Math.random()),J=u(B,2),K=J[0],H=J[1],Q=p.sources[L][P]||p.sources[L].content,V=Object(l["useTSPlaygroundUrl"])(f,Q),W=Object(n["useRef"])(),Z=Object(l["usePrefersColor"])(),q=u(Z,1),G=q[0];function z(e){R(e),T(b(e,p.sources[e]))}return Object(n["useEffect"])((function(){H(Math.random())}),[G]),r.a.createElement("div",{style:p.style,className:[p.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:p.identifier,"data-debug":p.debug||void 0,"data-iframe":p.iframe||void 0},p.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:p.transform?"translate(0, 0)":void 0,padding:p.compact||p.iframe&&!1!==p.compact?"0":void 0,background:p.background}},p.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(p.iframe).replace(/(\d)$/,"$1px")},key:K,src:v,ref:W}):p.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":p.title},p.title&&r.a.createElement(l["AnchorLink"],{to:"#".concat(p.identifier)},p.title),p.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},y&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:y}),k&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:k}),p.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:O,onClick:function(){return j()}}),p.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return H(Math.random())}}),!(null===(d=p.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&r.a.createElement(l["Link"],{target:"_blank",to:v},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":A,onClick:function(){return C(Q)}}),"tsx"===P&&X&&r.a.createElement(l["Link"],{target:"_blank",to:V},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(X?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return $(!X)}})),X&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!_&&r.a.createElement(c["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:L,onChange:z},Object.keys(p.sources).map((function(e){return r.a.createElement(c["a"],{tab:"_"===e?"index.".concat(b(e,p.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(i["a"],{code:Q,lang:P,showCopy:!1}))))};t["default"]=E}}]);