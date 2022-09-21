(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"+aHU":function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),l=n.n(a),r=n("Qxc9"),c=n("lMkJ"),o=n("BgHv"),m=n("BXDS"),u=l.a.memo((e=>{var t=e.demos,n=t["docs-demo01-7"].component,a=t["docs-demo02-2"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"useeventlistener"},l.a.createElement(r["AnchorLink"],{to:"#useeventlistener","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useEventListener"),l.a.createElement("p",null,"\u4f18\u96c5\u7684\u4f7f\u7528 addEventListener\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(c["default"],t["docs-demo01-7"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u76d1\u542c-keydown-\u4e8b\u4ef6"},l.a.createElement(r["AnchorLink"],{to:"#\u76d1\u542c-keydown-\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u76d1\u542c keydown \u4e8b\u4ef6")),l.a.createElement(c["default"],t["docs-demo02-2"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],{code:"useEventListener(\n  eventName: string,\n  handler: (ev: Event) => void,\n  options?: Options,\n)",lang:"ts"}),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"eventName"),l.a.createElement("td",null,"\u4e8b\u4ef6\u540d\u79f0"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"handler"),l.a.createElement("td",null,"\u5904\u7406\u51fd\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"(ev: Event) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"options"),l.a.createElement("td",null,"\u8bbe\u7f6e(\u53ef\u9009)"),l.a.createElement("td",null,l.a.createElement("code",null,"Options")),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"options"},l.a.createElement(r["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Options"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"target"),l.a.createElement("td",null,"DOM \u8282\u70b9\u6216\u8005 ref"),l.a.createElement("td",null,l.a.createElement("code",null,"(() => Element)")," | ",l.a.createElement("code",null,"Element")," | ",l.a.createElement("code",null,"React.MutableRefObject<Element>")," | ",l.a.createElement("code",null,"Window")," | ",l.a.createElement("code",null,"Document")),l.a.createElement("td",null,l.a.createElement("code",null,"window"))),l.a.createElement("tr",null,l.a.createElement("td",null,"capture"),l.a.createElement("td",null,"\u53ef\u9009\u9879\uff0clistener \u4f1a\u5728\u8be5\u7c7b\u578b\u7684\u4e8b\u4ef6\u6355\u83b7\u9636\u6bb5\u4f20\u64ad\u5230\u8be5 EventTarget \u65f6\u89e6\u53d1\u3002"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"once"),l.a.createElement("td",null,"\u53ef\u9009\u9879\uff0clistener \u5728\u6dfb\u52a0\u4e4b\u540e\u6700\u591a\u53ea\u8c03\u7528\u4e00\u6b21\u3002\u5982\u679c\u662f true\uff0clistener \u4f1a\u5728\u5176\u88ab\u8c03\u7528\u4e4b\u540e\u81ea\u52a8\u79fb\u9664\u3002"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"passive"),l.a.createElement("td",null,"\u53ef\u9009\u9879\uff0c\u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u8868\u793a listener \u6c38\u8fdc\u4e0d\u4f1a\u8c03\u7528 preventDefault() \u3002\u5982\u679c listener \u4ecd\u7136\u8c03\u7528\u4e86\u8fd9\u4e2a\u51fd\u6570\uff0c\u5ba2\u6237\u7aef\u5c06\u4f1a\u5ffd\u7565\u5b83\u5e76\u629b\u51fa\u4e00\u4e2a\u63a7\u5236\u53f0\u8b66\u544a\u3002"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:n})}},BXDS:function(e,t,n){"use strict";var a=n("1QO0"),l=n.n(a),r=n("bIC1"),c=n.n(r);n("a2dQ");function o(e,t){return E(e)||i(e,t)||u(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function i(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(m){o=!0,l=m}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),m=o(r,2),u=m[0],d=m[1],i=Object(a["useState"])(!1),E=o(i,2),s=E[0],f=E[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":s||void 0},l.a.createElement("table",null,t)))};t["a"]=s},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},a2dQ:function(e,t,n){}}]);