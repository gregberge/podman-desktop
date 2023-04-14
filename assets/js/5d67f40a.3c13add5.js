"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5723],{5318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(5773),o=(n(7378),n(5318));const a={sidebar_position:10,title:"Creating a pod",description:"Creating a pod from containers.",keywords:["podman desktop","podman","containers","pods"],tags:["pods"]},i="Creating a pod from containers",p={unversionedId:"getting-started/creating-a-pod",id:"getting-started/creating-a-pod",title:"Creating a pod",description:"Creating a pod from containers.",source:"@site/docs/getting-started/creating-a-pod.md",sourceDirName:"getting-started",slug:"/getting-started/creating-a-pod",permalink:"/docs/getting-started/creating-a-pod",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/getting-started/creating-a-pod.md",tags:[{label:"pods",permalink:"/docs/tags/pods"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Creating a pod",description:"Creating a pod from containers.",keywords:["podman desktop","podman","containers","pods"],tags:["pods"]},sidebar:"mySidebar",previous:{title:"Getting Started with Podman Desktop",permalink:"/docs/getting-started/getting-started"},next:{title:"Migrating from Docker",permalink:"/docs/migrating-from-docker/"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-pod-from-containers"},"Creating a pod from containers"),(0,o.kt)("p",null,"With Podman Desktop, you can create a pod from your containers, and run it on the Podman container engine."),(0,o.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are using the Podman container engine."),(0,o.kt)("li",{parentName:"ul"},"Your containers, running or stopped, are available on the ",(0,o.kt)("strong",{parentName:"li"},"Containers")," page. For example: ",(0,o.kt)("em",{parentName:"li"},"<your_frontend_container>")," and ",(0,o.kt)("em",{parentName:"li"},"<your_backend_container>"),".")),(0,o.kt)("h4",{id:"procedure"},"Procedure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Podman Desktop dashboard > Containers"),"."),(0,o.kt)("li",{parentName:"ol"},"Click the checkboxes to select your containers."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," to create a pod with the selected containers."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Copy containers to a pod")," screen",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Name of the pod"),": edit the pod name ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"<my_pod>")),"."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Create pod using these containers")," button.")))),(0,o.kt)("h4",{id:"verification"},"Verification"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Pods")),(0,o.kt)("li",{parentName:"ol"},"Your pod ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"em"},"<my_pod>"))," is in the list.")))}d.isMDXComponent=!0}}]);