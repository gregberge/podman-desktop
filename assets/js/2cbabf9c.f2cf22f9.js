"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3832],{35318:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=d(n),k=r,g=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46691:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(25773),r=(n(27378),n(35318));const o={sidebar_position:20,title:"Onboarding for containers",description:"To run container workloads with Podman Desktop, set up at least one container engine.",tags:["podman-desktop","onboarding"],keywords:["podman desktop","containers","podman","onboarding"]},i="Onboarding for container workloads",l={unversionedId:"onboarding-for-containers/index",id:"onboarding-for-containers/index",title:"Onboarding for containers",description:"To run container workloads with Podman Desktop, set up at least one container engine.",source:"@site/docs/onboarding-for-containers/index.md",sourceDirName:"onboarding-for-containers",slug:"/onboarding-for-containers/",permalink:"/docs/onboarding-for-containers/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/onboarding-for-containers/index.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"onboarding",permalink:"/docs/tags/onboarding"}],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Onboarding for containers",description:"To run container workloads with Podman Desktop, set up at least one container engine.",tags:["podman-desktop","onboarding"],keywords:["podman desktop","containers","podman","onboarding"]},sidebar:"mySidebar",previous:{title:"Podman behind a VPN on Windows",permalink:"/docs/proxy/using-a-vpn-on-windows"},next:{title:"Installing Podman",permalink:"/docs/onboarding-for-containers/installing-podman"}},p={},d=[{value:"Procedure",id:"procedure",level:4}],s={toc:d};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"onboarding-for-container-workloads"},"Onboarding for container workloads"),(0,r.kt)("p",null,"To run container workloads, set up at least one container engine."),(0,r.kt)("p",null,"Podman Desktop does not automatically set up container engine resources that you might not need."),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select a container engine supporting your workload."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Workload"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Podman"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Native Docker"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Docker Desktop"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Rootless containers"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Rootful containers"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Compose"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Pods"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c no")))),(0,r.kt)("p",{parentName:"li"},"Podman supports rootless container and pods, in addition to rootful containers and Compose.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select an execution environment supporting your container engine and your operating system."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select a Podman execution environment:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Host operating system"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Native containers"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Podman Machine"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Lima instance"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Windows"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c experimental")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"macOS"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Linux"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c disabled in Podman Desktop"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select a Docker execution environment:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Host operating system"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Native containers"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Docker Desktop"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Lima instance"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Windows"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c experimental")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"macOS"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c no"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Linux"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 yes"))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setup your container engine."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Podman Desktop assists you to set up Podman and Podman machines on Windows and macOS."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/onboarding-for-containers/installing-podman"},"Installing Podman"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/onboarding-for-containers/installing-podman-with-openshift-local-on-windows"},"Installing Podman with OpenShift Local on Windows"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/onboarding-for-containers/creating-a-podman-machine-with-podman-desktop"},"Creating a Podman machine with Podman Desktop"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Podman Desktop consumes your native containers, Lima instance or Docker setup."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/onboarding-for-containers/creating-a-lima-instance-with-podman-desktop"},"Creating a Lima instance"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://podman.io/docs/installation#installing-on-linux"},"Installing Podman on Linux"),".")))))))}m.isMDXComponent=!0}}]);