"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1335],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(25773),i=(r(27378),r(35318));const o={sidebar_position:10,title:"Working with Lima",description:"Lima is one way to get Kubernetes running on your workstation.",keywords:["podman desktop","containers","migrating","kubernetes","lima"],tags:["migrating-to-kubernetes","lima"]},a="Running Kubernetes on your workstation with Lima",s={unversionedId:"kubernetes/lima/index",id:"kubernetes/lima/index",title:"Working with Lima",description:"Lima is one way to get Kubernetes running on your workstation.",source:"@site/docs/kubernetes/lima/index.md",sourceDirName:"kubernetes/lima",slug:"/kubernetes/lima/",permalink:"/docs/kubernetes/lima/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/lima/index.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"lima",permalink:"/docs/tags/lima"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Working with Lima",description:"Lima is one way to get Kubernetes running on your workstation.",keywords:["podman desktop","containers","migrating","kubernetes","lima"],tags:["migrating-to-kubernetes","lima"]},sidebar:"mySidebar",previous:{title:"Push an image to Kind",permalink:"/docs/kubernetes/kind/pushing-an-image-to-kind"},next:{title:"Working with Minikube",permalink:"/docs/kubernetes/minikube/"}},u={},l=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-kubernetes-on-your-workstation-with-lima"},"Running Kubernetes on your workstation with Lima"),(0,i.kt)("p",null,"With Podman Desktop, you can work on ",(0,i.kt)("a",{parentName:"p",href:"https://lima-vm.io/"},"Lima-powered")," local Kubernetes clusters."),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/onboarding-for-kubernetes/lima"},"You onboarded a Lima cluster"),".")),(0,i.kt)("h4",{id:"procedure"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set your Kubernetes context to your local Lima-powered Kubernetes cluster")))}p.isMDXComponent=!0}}]);