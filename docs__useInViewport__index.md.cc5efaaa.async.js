(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{EK4X:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),l=n.n(a),r=n("Ip/e"),c=n("upm9"),o=n("/kL3"),i=n("peP+"),u=l.a.memo((e=>{var t=e.demos,n=t["useinviewport-demo01"].component,a=t["useinviewport-demo02"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"useinviewport"},l.a.createElement(r["AnchorLink"],{to:"#useinviewport","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useInViewport"),l.a.createElement("p",null,"\u89c2\u5bdf\u5143\u7d20\u662f\u5426\u5728\u53ef\u89c1\u533a\u57df\uff0c\u4ee5\u53ca\u5143\u7d20\u53ef\u89c1\u6bd4\u4f8b\u3002\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",l.a.createElement(r["Link"],{to:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API"},"Intersection Observer API"),"\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(c["default"],t["useinviewport-demo01"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u76d1\u542c\u5143\u7d20\u53ef\u89c1\u533a\u57df\u6bd4\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u76d1\u542c\u5143\u7d20\u53ef\u89c1\u533a\u57df\u6bd4\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u76d1\u542c\u5143\u7d20\u53ef\u89c1\u533a\u57df\u6bd4\u4f8b")),l.a.createElement(c["default"],t["useinviewport-demo02"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],{code:"const [inViewport, ratio] = useInViewport(\n  target, \n  options?: Options\n);",lang:"typescript"}),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"target"),l.a.createElement("td",null,"DOM \u8282\u70b9\u6216\u8005 ref"),l.a.createElement("td",null,l.a.createElement("code",null,"Element")," | ",l.a.createElement("code",null,"() => Element")," | ",l.a.createElement("code",null,"MutableRefObject<Element>")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"options"),l.a.createElement("td",null,"\u8bbe\u7f6e"),l.a.createElement("td",null,l.a.createElement("code",null,"Options")),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"options"},l.a.createElement(r["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Options"),l.a.createElement("p",null,"\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",l.a.createElement(r["Link"],{to:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API"},"Intersection Observer API")),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"threshold"),l.a.createElement("td",null,"\u53ef\u4ee5\u662f\u5355\u4e00\u7684 number \u4e5f\u53ef\u4ee5\u662f number \u6570\u7ec4\uff0ctarget \u5143\u7d20\u548c root \u5143\u7d20\u76f8\u4ea4\u7a0b\u5ea6\u8fbe\u5230\u8be5\u503c\u7684\u65f6\u5019 ratio \u4f1a\u88ab\u66f4\u65b0"),l.a.createElement("td",null,l.a.createElement("code",null,"number")," | ",l.a.createElement("code",null,"number[]")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"rootMargin"),l.a.createElement("td",null,"\u6839(root)\u5143\u7d20\u7684\u5916\u8fb9\u8ddd"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"root"),l.a.createElement("td",null,"\u6307\u5b9a\u6839(root)\u5143\u7d20\uff0c\u7528\u4e8e\u68c0\u67e5\u76ee\u6807\u7684\u53ef\u89c1\u6027\u3002\u5fc5\u987b\u662f\u76ee\u6807\u5143\u7d20\u7684\u7236\u7ea7\u5143\u7d20\uff0c\u5982\u679c\u672a\u6307\u5b9a\u6216\u8005\u4e3anull\uff0c\u5219\u9ed8\u8ba4\u4e3a\u6d4f\u89c8\u5668\u89c6\u7a97\u3002"),l.a.createElement("td",null,l.a.createElement("code",null,"Element")," | ",l.a.createElement("code",null,"Document")," | ",l.a.createElement("code",null,"() => (Element/Document)")," | ",l.a.createElement("code",null,"MutableRefObject<Element>")),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"inViewport"),l.a.createElement("td",null,"\u662f\u5426\u53ef\u89c1"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")," | ",l.a.createElement("code",null,"undefined"))),l.a.createElement("tr",null,l.a.createElement("td",null,"ratio"),l.a.createElement("td",null,"\u5f53\u524d\u53ef\u89c1\u6bd4\u4f8b\uff0c\u5728\u6bcf\u6b21\u5230\u8fbe ",l.a.createElement("code",null,"options.threshold")," \u8bbe\u7f6e\u8282\u70b9\u65f6\u66f4\u65b0"),l.a.createElement("td",null,l.a.createElement("code",null,"number")," | ",l.a.createElement("code",null,"undefined"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:n})}},KjXW:function(e,t,n){},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},Z5Qm:function(e,t,n){},"peP+":function(e,t,n){"use strict";var a=n("1QO0"),l=n.n(a),r=n("bIC1"),c=n.n(r);n("Z5Qm");function o(e,t){return s(e)||d(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),i=o(r,2),u=i[0],m=i[1],d=Object(a["useState"])(!1),s=o(d,2),E=s[0],f=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},upm9:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),l=n.n(a),r=n("VqeS"),c=n("MZF8"),o=n("Ip/e"),i=n("/kL3");n("KjXW");function u(e,t){return f(e)||E(e,t)||d(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function E(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function f(e){if(Array.isArray(e))return e}function p(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var b=function(e){var t,n,m,d=Object(a["useRef"])(),s=Object(a["useContext"])(o["context"]),E=s.locale,f=Object(o["useLocaleProps"])(E,e),b=Object(o["useDemoUrl"])(f.identifier),h=f.demoUrl||b,v=(null===c["a"]||void 0===c["a"]?void 0:c["a"].location.hash)==="#".concat(f.identifier),y=1===Object.keys(f.sources).length,_=Object(o["useCodeSandbox"])((null===(t=f.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:f),w=Object(o["useRiddle"])((null===(n=f.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:f),k=Object(o["useMotions"])(f.motions||[],d.current),g=u(k,2),O=g[0],j=g[1],A=Object(o["useCopy"])(),I=u(A,2),N=I[0],x=I[1],L=Object(a["useState"])((function(){return f.sources._?"_":Object.keys(f.sources)[0]})),S=u(L,2),C=S[0],P=S[1],M=Object(a["useState"])(p(C,f.sources[C])),R=u(M,2),T=R[0],U=R[1],z=Object(a["useState"])(Boolean(f.defaultShowCode)),D=u(z,2),V=D[0],W=D[1],Q=Object(a["useState"])(Math.random()),X=u(Q,2),$=X[0],F=X[1],K=f.sources[C][T]||f.sources[C].content,Z=Object(o["useTSPlaygroundUrl"])(E,K),B=Object(a["useRef"])(),J=Object(o["usePrefersColor"])(),q=u(J,1),G=q[0];function H(e){P(e),U(p(e,f.sources[e]))}return Object(a["useEffect"])((function(){F(Math.random())}),[G]),l.a.createElement("div",{style:f.style,className:[f.className,"__dumi-default-previewer",v?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:f.identifier,"data-debug":f.debug||void 0,"data-iframe":f.iframe||void 0},f.iframe&&l.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),l.a.createElement("div",{ref:d,className:"__dumi-default-previewer-demo",style:{transform:f.transform?"translate(0, 0)":void 0,padding:f.compact||f.iframe&&!1!==f.compact?"0":void 0,background:f.background}},f.iframe?l.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(f.iframe).replace(/(\d)$/,"$1px")},key:$,src:h,ref:B}):f.children),l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":f.title},f.title&&l.a.createElement(o["AnchorLink"],{to:"#".concat(f.identifier)},f.title),f.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:f.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},_&&l.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),w&&l.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:w}),f.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return O()}}),f.iframe&&l.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return F(Math.random())}}),!(null===(m=f.hideActions)||void 0===m?void 0:m.includes("EXTERNAL"))&&l.a.createElement(o["Link"],{target:"_blank",to:h},l.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),l.a.createElement("span",null),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:function(){return N(K)}}),"tsx"===T&&V&&l.a.createElement(o["Link"],{target:"_blank",to:Z},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),l.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(V?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return W(!V)}})),V&&l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&l.a.createElement(r["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:C,onChange:H},Object.keys(f.sources).map((function(e){return l.a.createElement(r["a"],{tab:"_"===e?"index.".concat(p(e,f.sources[e])):e,key:e})}))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(i["a"],{code:K,lang:T,showCopy:!1}))))};t["default"]=b}}]);