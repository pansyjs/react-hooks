(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"5PM/":function(e,t,n){},"81Wo":function(e,t,n){"use strict";var a=n("1QO0"),r=n.n(a),l=n("bIC1"),o=n.n(l);n("VfxR");function c(e,t){return m(e)||s(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function m(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),i=c(l,2),u=i[0],d=i[1],s=Object(a["useState"])(!1),m=c(s,2),f=m[0],E=m[1];return Object(a["useEffect"])((function(){var e=n.current,t=o()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f},"9aee":function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("GOam"),o=n("MZF8"),c=n("+Snw"),i=n("Ljn0");n("5PM/");function u(e,t){return E(e)||f(e,t)||s(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function E(e){if(Array.isArray(e))return e}function b(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var p=function(e){var t,n,d,s=Object(a["useRef"])(),m=Object(a["useContext"])(c["context"]),f=m.locale,E=Object(c["useLocaleProps"])(f,e),p=Object(c["useDemoUrl"])(E.identifier),v=E.demoUrl||p,h=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(E.identifier),y=1===Object.keys(E.sources).length,_=Object(c["useCodeSandbox"])((null===(t=E.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:E),w=Object(c["useRiddle"])((null===(n=E.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:E),g=Object(c["useMotions"])(E.motions||[],s.current),k=u(g,2),O=k[0],j=k[1],x=Object(c["useCopy"])(),N=u(x,2),A=N[0],S=N[1],C=Object(a["useState"])((function(){return E.sources._?"_":Object.keys(E.sources)[0]})),L=u(C,2),I=L[0],R=L[1],M=Object(a["useState"])(b(I,E.sources[I])),T=u(M,2),P=T[0],U=T[1],F=Object(a["useState"])(Boolean(E.defaultShowCode)),$=u(F,2),B=$[0],W=$[1],D=Object(a["useState"])(Math.random()),J=u(D,2),Q=J[0],V=J[1],z=E.sources[I][P]||E.sources[I].content,G=Object(c["useTSPlaygroundUrl"])(f,z),X=Object(a["useRef"])(),Z=Object(c["usePrefersColor"])(),H=u(Z,1),K=H[0],q=E.actionBarRender,Y=void 0===q?function(e){return e}:q;function ee(e){R(e),U(b(e,E.sources[e]))}return Object(a["useEffect"])((function(){V(Math.random())}),[K]),r.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:Q,src:v,ref:X}):E.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&r.a.createElement(c["AnchorLink"],{to:"#".concat(E.identifier)},E.title),E.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},Y(r.a.createElement(r.a.Fragment,null,_&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),w&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:w}),E.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return O()}}),E.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return V(Math.random())}}),!(null===(d=E.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&r.a.createElement(c["Link"],{target:"_blank",to:v},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":S,onClick:function(){return A(z)}}),"tsx"===P&&B&&r.a.createElement(c["Link"],{target:"_blank",to:G},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(B?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return W(!B)}})))),B&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&r.a.createElement(l["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:ee},Object.keys(E.sources).map((function(e){return r.a.createElement(l["a"],{tab:"_"===e?"index.".concat(b(e,E.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(i["a"],{code:z,lang:P,showCopy:!1}))))};t["default"]=p},In5w:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("+Snw"),o=n("9aee"),c=n("Ljn0"),i=n("81Wo"),u=r.a.memo((e=>{var t=e.demos,n=t["docs-demo01-30"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"usetitle"},r.a.createElement(l["AnchorLink"],{to:"#usetitle","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useTitle"),r.a.createElement("p",null,"\u7528\u4e8e\u8bbe\u7f6e\u9875\u9762\u6807\u9898\u3002"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(o["default"],t["docs-demo01-30"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{code:"useTitle(title: string, options?: Options);",lang:"ts"}),r.a.createElement("h3",{id:"params"},r.a.createElement(l["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Params"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"title"),r.a.createElement("td",null,"\u9875\u9762\u6807\u9898"),r.a.createElement("td",null,r.a.createElement("code",null,"string")),r.a.createElement("td",null,"-")))),r.a.createElement("h3",{id:"options"},r.a.createElement(l["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Options"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"restoreOnUnmount"),r.a.createElement("td",null,"\u7ec4\u4ef6\u5378\u8f7d\u65f6\uff0c\u662f\u5426\u6062\u590d\u4e0a\u4e00\u4e2a\u9875\u9762\u6807\u9898"),r.a.createElement("td",null,r.a.createElement("code",null,"boolean")),r.a.createElement("td",null,r.a.createElement("code",null,"false"))))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(u,{demos:n})}},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},VfxR:function(e,t,n){}}]);