"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7363],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(25773),i=(n(27378),n(35318));const o={sidebar_position:70,title:"Writing extensions",description:"Writing or deploying extensions.",keywords:["podman desktop","podman","extension"],tags:["migrating-to-kubernetes"]},s="Podman Desktop extensions",a={unversionedId:"extensions/index",id:"extensions/index",title:"Writing extensions",description:"Writing or deploying extensions.",source:"@site/docs/extensions/index.md",sourceDirName:"extensions",slug:"/extensions/",permalink:"/docs/extensions/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/extensions/index.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"}],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"Writing extensions",description:"Writing or deploying extensions.",keywords:["podman desktop","podman","extension"],tags:["migrating-to-kubernetes"]},sidebar:"mySidebar",previous:{title:"Push an image to Minikube",permalink:"/docs/kubernetes/minikube/pushing-an-image-to-minikube"},next:{title:"Writing",permalink:"/docs/extensions/write/"}},p={},l=[{value:"Next steps",id:"next-steps",level:4}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"podman-desktop-extensions"},"Podman Desktop extensions"),(0,i.kt)("p",null,"Podman Desktop extensions contribute to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Container engine support, such as Podman, Docker."),(0,i.kt)("li",{parentName:"ul"},"Virtual machine support, such as Lima."),(0,i.kt)("li",{parentName:"ul"},"Podman Desktop extension points such as tray icon menu, status bar items, icons, menus, and commands."),(0,i.kt)("li",{parentName:"ul"},"Integration with third parties tools, such as Kind or Compose.")),(0,i.kt)("h4",{id:"next-steps"},"Next steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/extensions/write"},"Writing a Podman Desktop extension entry point")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/extensions/publish"},"Publishing a Podman Desktop extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/extensions/install"},"Installing a Podman Desktop extension"))))}u.isMDXComponent=!0}}]);