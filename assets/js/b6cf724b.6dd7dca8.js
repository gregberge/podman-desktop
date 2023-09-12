"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8940],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,k=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(25773),o=(n(27378),n(35318));const i={sidebar_position:11,title:"Custom Podman machine",description:"Podman Desktop can assist you to create custom Podman machine on Windows and macOS.",tags:["podman-desktop","podman","installing","windows","macOS"],keywords:["podman desktop","containers","podman","installing","installation","windows","macos","podman machine"]},r="Creating a Podman machine with Podman Desktop",s={unversionedId:"Installation/creating-a-podman-machine-with-podman-desktop",id:"Installation/creating-a-podman-machine-with-podman-desktop",title:"Custom Podman machine",description:"Podman Desktop can assist you to create custom Podman machine on Windows and macOS.",source:"@site/docs/Installation/creating-a-podman-machine-with-podman-desktop.md",sourceDirName:"Installation",slug:"/Installation/creating-a-podman-machine-with-podman-desktop",permalink:"/docs/Installation/creating-a-podman-machine-with-podman-desktop",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/creating-a-podman-machine-with-podman-desktop.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"podman",permalink:"/docs/tags/podman"},{label:"installing",permalink:"/docs/tags/installing"},{label:"windows",permalink:"/docs/tags/windows"},{label:"macOS",permalink:"/docs/tags/mac-os"}],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Custom Podman machine",description:"Podman Desktop can assist you to create custom Podman machine on Windows and macOS.",tags:["podman-desktop","podman","installing","windows","macOS"],keywords:["podman desktop","containers","podman","installing","installation","windows","macos","podman machine"]},sidebar:"mySidebar",previous:{title:"Custom Lima instance",permalink:"/docs/Installation/creating-a-lima-instance-with-podman-desktop"},next:{title:"Getting Started with Podman Desktop",permalink:"/docs/getting-started/getting-started"}},l={},m=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4}],p={toc:m};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-podman-machine-with-podman-desktop"},"Creating a Podman machine with Podman Desktop"),(0,o.kt)("p",null,"On macOS and Windows, running the Podman container engine requires running a Linux virtual machine."),(0,o.kt)("p",null,"By default, Podman Desktop initializes a Podman machine with a standard configuration."),(0,o.kt)("p",null,"Consider creating a custom Podman machine to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Control the assigned resources: CPUs, memory, and disk size."),(0,o.kt)("li",{parentName:"ul"},"Use a custom boot image."),(0,o.kt)("li",{parentName:"ul"},"Use the rootful connection by default, for example to run Kind.")),(0,o.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Podman executable is installed.")),(0,o.kt)("h4",{id:"procedure"},"Procedure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Settings > Resources"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Podman")," tile, click ",(0,o.kt)("strong",{parentName:"p"},"Create new"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Create a Podman machine")," screen:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Name"),":\nEnter a name, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"podman-machine-default"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"CPU(s)"),":\nSelect the number of CPUs."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Memory"),":\nSelect the memory size."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Disk size"),":\nSelect the disk size."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Image path (Optional)"),":\nSelect a bootable image containing a virtual machine with Podman."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Machine with root privileges"),":\nEnable to use the rootful connection by default.\nRequired to use Kind on Windows."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Create a Podman machine",src:n(7227).Z,width:"793",height:"822"})))))}c.isMDXComponent=!0},7227:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-a-podman-machine-a6f4842fe7949259324fc2bebe9952ff.png"}}]);