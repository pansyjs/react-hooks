(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"83MP":function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("Ip/e"),o=n("upm9"),c=n("/kL3"),i=n("peP+"),u=r.a.memo((e=>{var t=e.demos,n=t["usefavicon-demo01"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"usefavicon"},r.a.createElement(l["AnchorLink"],{to:"#usefavicon","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useFavicon"),r.a.createElement("p",null,"\u8bbe\u7f6e\u9875\u9762\u7684 favicon hook\u3002"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(o["default"],t["usefavicon-demo01"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{code:"useFavicon(href: string)",lang:"ts"}),r.a.createElement("h3",{id:"params"},r.a.createElement(l["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Params"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"href"),r.a.createElement("td",null,"favicon\u5730\u5740, \u652f\u6301 ",r.a.createElement("code",null,"svg"),"/",r.a.createElement("code",null,"png"),"/",r.a.createElement("code",null,"ico"),"/",r.a.createElement("code",null,"gif")," \u540e\u7f00\u7684\u56fe\u7247"),r.a.createElement("td",null,r.a.createElement("code",null,"string")),r.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(u,{demos:n})}},KjXW:function(e,t,n){},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},Z5Qm:function(e,t,n){},"peP+":function(e,t,n){"use strict";var a=n("1QO0"),r=n.n(a),l=n("bIC1"),o=n.n(l);n("Z5Qm");function c(e,t){return m(e)||d(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function m(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),i=c(l,2),u=i[0],s=i[1],d=Object(a["useState"])(!1),m=c(d,2),f=m[0],v=m[1];return Object(a["useEffect"])((function(){var e=n.current,t=o()((function(){s(e.scrollLeft>0),v(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f},upm9:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("VqeS"),o=n("MZF8"),c=n("Ip/e"),i=n("/kL3");n("KjXW");function u(e,t){return v(e)||f(e,t)||d(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function v(e){if(Array.isArray(e))return e}function b(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var p=function(e){var t,n,s,d=Object(a["useRef"])(),m=Object(a["useContext"])(c["context"]),f=m.locale,v=Object(c["useLocaleProps"])(f,e),p=Object(c["useDemoUrl"])(v.identifier),E=v.demoUrl||p,h=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(v.identifier),y=1===Object.keys(v.sources).length,_=Object(c["useCodeSandbox"])((null===(t=v.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:v),g=Object(c["useRiddle"])((null===(n=v.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:v),k=Object(c["useMotions"])(v.motions||[],d.current),w=u(k,2),j=w[0],O=w[1],N=Object(c["useCopy"])(),A=u(N,2),S=A[0],x=A[1],C=Object(a["useState"])((function(){return v.sources._?"_":Object.keys(v.sources)[0]})),L=u(C,2),I=L[0],M=L[1],P=Object(a["useState"])(b(I,v.sources[I])),R=u(P,2),T=R[0],U=R[1],F=Object(a["useState"])(Boolean(v.defaultShowCode)),Q=u(F,2),$=Q[0],W=Q[1],X=Object(a["useState"])(Math.random()),Z=u(X,2),B=Z[0],D=Z[1],J=v.sources[I][T]||v.sources[I].content,K=Object(c["useTSPlaygroundUrl"])(f,J),z=Object(a["useRef"])(),V=Object(c["usePrefersColor"])(),q=u(V,1),G=q[0];function H(e){M(e),U(b(e,v.sources[e]))}return Object(a["useEffect"])((function(){D(Math.random())}),[G]),r.a.createElement("div",{style:v.style,className:[v.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:v.identifier,"data-debug":v.debug||void 0,"data-iframe":v.iframe||void 0},v.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:d,className:"__dumi-default-previewer-demo",style:{transform:v.transform?"translate(0, 0)":void 0,padding:v.compact||v.iframe&&!1!==v.compact?"0":void 0,background:v.background}},v.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(v.iframe).replace(/(\d)$/,"$1px")},key:B,src:E,ref:z}):v.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":v.title},v.title&&r.a.createElement(c["AnchorLink"],{to:"#".concat(v.identifier)},v.title),v.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:v.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},_&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),g&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),v.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:O,onClick:function(){return j()}}),v.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return D(Math.random())}}),!(null===(s=v.hideActions)||void 0===s?void 0:s.includes("EXTERNAL"))&&r.a.createElement(c["Link"],{target:"_blank",to:E},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:function(){return S(J)}}),"tsx"===T&&$&&r.a.createElement(c["Link"],{target:"_blank",to:K},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat($?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return W(!$)}})),$&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&r.a.createElement(l["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:H},Object.keys(v.sources).map((function(e){return r.a.createElement(l["a"],{tab:"_"===e?"index.".concat(b(e,v.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(i["a"],{code:J,lang:T,showCopy:!1}))))};t["default"]=p}}]);