(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"1r5y":function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("aLr2"),o=n("GqfL"),c=n("5c5H"),i=n("ReUR"),u=r.a.memo((e=>{var t=e.demos,n=t["docs-demo01-20"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"usemount"},r.a.createElement(l["AnchorLink"],{to:"#usemount","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useMount"),r.a.createElement("p",null,"\u53ea\u5728\u7ec4\u4ef6\u521d\u59cb\u5316\u65f6\u6267\u884c\u7684 Hook\u3002"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u672c\u793a\u4f8b"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u672c\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u793a\u4f8b")),r.a.createElement(o["default"],t["docs-demo01-20"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{code:"useMount(fn: () => void );",lang:"ts"}),r.a.createElement("h3",{id:"params"},r.a.createElement(l["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Params"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"fn"),r.a.createElement("td",null,"\u521d\u59cb\u5316\u65f6\u6267\u884c\u7684\u51fd\u6570"),r.a.createElement("td",null,r.a.createElement("code",null,"() => void"))))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(u,{demos:n})}},"5pq4":function(e,t,n){},A9BD:function(e,t,n){},GqfL:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("VqeS"),o=n("MZF8"),c=n("aLr2"),i=n("5c5H");n("5pq4");function u(e,t){return b(e)||f(e,t)||s(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function b(e){if(Array.isArray(e))return e}function v(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var p=function(e){var t,n,d,s=Object(a["useRef"])(),m=Object(a["useContext"])(c["context"]),f=m.locale,b=Object(c["useLocaleProps"])(f,e),p=Object(c["useDemoUrl"])(b.identifier),E=b.demoUrl||p,h=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(b.identifier),y=1===Object.keys(b.sources).length,_=Object(c["useCodeSandbox"])((null===(t=b.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:b),g=Object(c["useRiddle"])((null===(n=b.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:b),w=Object(c["useMotions"])(b.motions||[],s.current),k=u(w,2),O=k[0],j=k[1],A=Object(c["useCopy"])(),N=u(A,2),S=N[0],x=N[1],C=Object(a["useState"])((function(){return b.sources._?"_":Object.keys(b.sources)[0]})),L=u(C,2),I=L[0],R=L[1],M=Object(a["useState"])(v(I,b.sources[I])),U=u(M,2),T=U[0],P=U[1],B=Object(a["useState"])(Boolean(b.defaultShowCode)),q=u(B,2),D=q[0],F=q[1],$=Object(a["useState"])(Math.random()),H=u($,2),G=H[0],J=H[1],Q=b.sources[I][T]||b.sources[I].content,z=Object(c["useTSPlaygroundUrl"])(f,Q),V=Object(a["useRef"])(),W=Object(c["usePrefersColor"])(),X=u(W,1),Z=X[0],K=b.actionBarRender,Y=void 0===K?function(e){return e}:K;function ee(e){R(e),P(v(e,b.sources[e]))}return Object(a["useEffect"])((function(){J(Math.random())}),[Z]),r.a.createElement("div",{style:b.style,className:[b.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:b.identifier,"data-debug":b.debug||void 0,"data-iframe":b.iframe||void 0},b.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:b.transform?"translate(0, 0)":void 0,padding:b.compact||b.iframe&&!1!==b.compact?"0":void 0,background:b.background}},b.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(b.iframe).replace(/(\d)$/,"$1px")},key:G,src:E,ref:V}):b.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":b.title},b.title&&r.a.createElement(c["AnchorLink"],{to:"#".concat(b.identifier)},b.title),b.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:b.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},Y(r.a.createElement(r.a.Fragment,null,_&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),g&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),b.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return O()}}),b.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return J(Math.random())}}),!(null===(d=b.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&r.a.createElement(c["Link"],{target:"_blank",to:E},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:function(){return S(Q)}}),"tsx"===T&&D&&r.a.createElement(c["Link"],{target:"_blank",to:z},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(D?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return F(!D)}})))),D&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&r.a.createElement(l["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:ee},Object.keys(b.sources).map((function(e){return r.a.createElement(l["a"],{tab:"_"===e?"index.".concat(v(e,b.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(i["a"],{code:Q,lang:T,showCopy:!1}))))};t["default"]=p},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},ReUR:function(e,t,n){"use strict";var a=n("1QO0"),r=n.n(a),l=n("bIC1"),o=n.n(l);n("A9BD");function c(e,t){return m(e)||s(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function m(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),i=c(l,2),u=i[0],d=i[1],s=Object(a["useState"])(!1),m=c(s,2),f=m[0],b=m[1];return Object(a["useEffect"])((function(){var e=n.current,t=o()((function(){d(e.scrollLeft>0),b(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f}}]);