(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"5PM/":function(e,t,n){},"81Wo":function(e,t,n){"use strict";var a=n("1QO0"),r=n.n(a),l=n("bIC1"),o=n.n(l);n("VfxR");function c(e,t){return m(e)||s(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function m(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),i=c(l,2),u=i[0],d=i[1],s=Object(a["useState"])(!1),m=c(s,2),f=m[0],E=m[1];return Object(a["useEffect"])((function(){var e=n.current,t=o()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f},"9aee":function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("GOam"),o=n("MZF8"),c=n("+Snw"),i=n("Ljn0");n("5PM/");function u(e,t){return E(e)||f(e,t)||s(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function E(e){if(Array.isArray(e))return e}function b(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var v=function(e){var t,n,d,s=Object(a["useRef"])(),m=Object(a["useContext"])(c["context"]),f=m.locale,E=Object(c["useLocaleProps"])(f,e),v=Object(c["useDemoUrl"])(E.identifier),p=E.demoUrl||v,h=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(E.identifier),y=1===Object.keys(E.sources).length,_=Object(c["useCodeSandbox"])((null===(t=E.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:E),w=Object(c["useRiddle"])((null===(n=E.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:E),k=Object(c["useMotions"])(E.motions||[],s.current),g=u(k,2),O=g[0],j=g[1],N=Object(c["useCopy"])(),x=u(N,2),A=x[0],S=x[1],C=Object(a["useState"])((function(){return E.sources._?"_":Object.keys(E.sources)[0]})),L=u(C,2),I=L[0],R=L[1],M=Object(a["useState"])(b(I,E.sources[I])),P=u(M,2),T=P[0],U=P[1],F=Object(a["useState"])(Boolean(E.defaultShowCode)),$=u(F,2),z=$[0],B=$[1],W=Object(a["useState"])(Math.random()),D=u(W,2),J=D[0],Q=D[1],V=E.sources[I][T]||E.sources[I].content,G=Object(c["useTSPlaygroundUrl"])(f,V),H=Object(a["useRef"])(),X=Object(c["usePrefersColor"])(),Z=u(X,1),K=Z[0],q=E.actionBarRender,Y=void 0===q?function(e){return e}:q;function ee(e){R(e),U(b(e,E.sources[e]))}return Object(a["useEffect"])((function(){Q(Math.random())}),[K]),r.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:J,src:p,ref:H}):E.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&r.a.createElement(c["AnchorLink"],{to:"#".concat(E.identifier)},E.title),E.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},Y(r.a.createElement(r.a.Fragment,null,_&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),w&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:w}),E.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return O()}}),E.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return Q(Math.random())}}),!(null===(d=E.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&r.a.createElement(c["Link"],{target:"_blank",to:p},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":S,onClick:function(){return A(V)}}),"tsx"===T&&z&&r.a.createElement(c["Link"],{target:"_blank",to:G},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(z?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return B(!z)}})))),z&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&r.a.createElement(l["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:ee},Object.keys(E.sources).map((function(e){return r.a.createElement(l["a"],{tab:"_"===e?"index.".concat(b(e,E.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(i["a"],{code:V,lang:T,showCopy:!1}))))};t["default"]=v},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},VfxR:function(e,t,n){},zRRz:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("+Snw"),o=n("9aee"),c=n("Ljn0"),i=n("81Wo"),u=r.a.memo((e=>{var t=e.demos,n=t["docs-demo01-13"].component,a=t["docs-demo02-7"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"useinterval"},r.a.createElement(l["AnchorLink"],{to:"#useinterval","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useInterval"),r.a.createElement("p",null,"\u4e00\u4e2a\u53ef\u4ee5\u5904\u7406 setInterval \u7684 Hook\u3002"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(o["default"],t["docs-demo01-13"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u8fdb\u9636\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u8fdb\u9636\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u8fdb\u9636\u7528\u6cd5")),r.a.createElement(o["default"],t["docs-demo02-7"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{code:"useInterval(\n  fn: () => void, \n  delay?: number,\n  options?: Options,\n)",lang:"ts"}),r.a.createElement("h2",{id:"params"},r.a.createElement(l["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Params"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"fn"),r.a.createElement("td",null,"\u8981\u5b9a\u65f6\u8c03\u7528\u7684\u51fd\u6570"),r.a.createElement("td",null,r.a.createElement("code",null,"() => void"))),r.a.createElement("tr",null,r.a.createElement("td",null,"delay"),r.a.createElement("td",null,"\u95f4\u9694\u65f6\u95f4\uff0c\u5f53\u53d6\u503c undefined \u65f6\u4f1a\u505c\u6b62\u8ba1\u65f6\u5668"),r.a.createElement("td",null,r.a.createElement("code",null,"number")," | ",r.a.createElement("code",null,"undefined"))),r.a.createElement("tr",null,r.a.createElement("td",null,"options"),r.a.createElement("td",null,"\u914d\u7f6e\u5b9a\u65f6\u5668\u7684\u884c\u4e3a"),r.a.createElement("td",null,r.a.createElement("code",null,"Options"))))),r.a.createElement("h2",{id:"options"},r.a.createElement(l["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Options"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"immediate"),r.a.createElement("td",null,"\u662f\u5426\u5728\u9996\u6b21\u6e32\u67d3\u65f6\u7acb\u5373\u6267\u884c"),r.a.createElement("td",null,r.a.createElement("code",null,"boolean")),r.a.createElement("td",null,r.a.createElement("code",null,"false"))))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(u,{demos:n})}}}]);