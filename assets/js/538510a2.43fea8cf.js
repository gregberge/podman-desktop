"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4770],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=m(n),u=r,d=g["".concat(s,".").concat(u)]||g[u]||p[u]||a;return n?i.createElement(d,o(o({ref:t},c),{},{components:n})):i.createElement(d,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},57095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=n(25773),r=(n(27378),n(35318));const a={sidebar_position:10,title:"Building an image",description:"Building an image on your container engine.",keywords:["podman desktop","podman","containers","images"],tags:["images"]},o="Building an image on your container engine",l={unversionedId:"getting-started/building-an-image",id:"getting-started/building-an-image",title:"Building an image",description:"Building an image on your container engine.",source:"@site/docs/getting-started/building-an-image.md",sourceDirName:"getting-started",slug:"/getting-started/building-an-image",permalink:"/docs/getting-started/building-an-image",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/getting-started/building-an-image.md",tags:[{label:"images",permalink:"/docs/tags/images"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Building an image",description:"Building an image on your container engine.",keywords:["podman desktop","podman","containers","images"],tags:["images"]},sidebar:"mySidebar",previous:{title:"Authenticating to a registry",permalink:"/docs/getting-started/authenticating-to-a-preconfigured-registry"},next:{title:"Creating a pod",permalink:"/docs/getting-started/creating-a-pod"}},s={},m=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],c={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-an-image-on-your-container-engine"},"Building an image on your container engine"),(0,r.kt)("p",null,"With Podman Desktop, you can build an image from a Containerfile on your container engine."),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your Containerfile: ",(0,r.kt)("inlineCode",{parentName:"li"},"Containerfile")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile"),".")),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-cube",size:"lg"})," Build an image"),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Build Image from Containerfile")," screen",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Containerfile path"),": select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Containerfile")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile")," to build."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Image Name"),": enter your image name, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"my-image"),". If you want to push the image to a registry, use the fully qualified image name that your registry requires, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"quay.io/my-repository/my-image"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ghcr.io/my-repository/my-image"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"docker.io/my-repository/my-image"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Build"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Done"),".")))),(0,r.kt)("h4",{id:"verification"},"Verification"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-search",size:"lg"})),": Enter your image name, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"quay.io/my-repository/my-image"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ghcr.io/my-repository/my-image"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"docker.io/my-repository/my-image"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the line with your image name."),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"History"),".",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Click the content area to activate it."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("kbd",null,"Ctrl")," + ",(0,r.kt)("kbd",null,"F")," on Windows and Linux, or ",(0,r.kt)("kbd",null,"\u2318")," + ",(0,r.kt)("kbd",null,"F")," on macOS to start searching in the content."))),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Inspect"),".",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Click the content area to activate it."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("kbd",null,"Ctrl")," + ",(0,r.kt)("kbd",null,"F")," on Windows and Linux, or ",(0,r.kt)("kbd",null,"\u2318")," + ",(0,r.kt)("kbd",null,"F")," on macOS to start searching in the content."))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-play",size:"lg"})),"..",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"You see the ",(0,r.kt)("strong",{parentName:"li"},"Create a container")," screen.")))))}p.isMDXComponent=!0}}]);