"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4758],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(5773),r=(n(7378),n(5318));const l={sidebar_position:3,title:"Installing from a compressed tar file",description:"You can install Podman Desktop on Linux from a compressed tar file.",tags:["podman-desktop","installing","linux","restricted-environment"],keywords:["podman desktop","podman","containers","installing","installation","linux","restricted-environment"]},o="Installing Podman Desktop from a compressed tar file",i={unversionedId:"Installation/linux-install/installing-podman-desktop-from-a-compressed-tar-file",id:"Installation/linux-install/installing-podman-desktop-from-a-compressed-tar-file",title:"Installing from a compressed tar file",description:"You can install Podman Desktop on Linux from a compressed tar file.",source:"@site/docs/Installation/linux-install/installing-podman-desktop-from-a-compressed-tar-file.md",sourceDirName:"Installation/linux-install",slug:"/Installation/linux-install/installing-podman-desktop-from-a-compressed-tar-file",permalink:"/docs/Installation/linux-install/installing-podman-desktop-from-a-compressed-tar-file",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/linux-install/installing-podman-desktop-from-a-compressed-tar-file.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"installing",permalink:"/docs/tags/installing"},{label:"linux",permalink:"/docs/tags/linux"},{label:"restricted-environment",permalink:"/docs/tags/restricted-environment"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Installing from a compressed tar file",description:"You can install Podman Desktop on Linux from a compressed tar file.",tags:["podman-desktop","installing","linux","restricted-environment"],keywords:["podman desktop","podman","containers","installing","installation","linux","restricted-environment"]},sidebar:"mySidebar",previous:{title:"Installing from a Flatpak bundle",permalink:"/docs/Installation/linux-install/installing-podman-desktop-from-a-flatpak-bundle"},next:{title:"Custom Podman machine",permalink:"/docs/Installation/creating-a-podman-machine-with-podman-desktop"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Next steps",id:"next-steps",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"archive"},"Installing Podman Desktop from a compressed tar file"),(0,r.kt)("p",null,"Consider installing from an archive rather than ",(0,r.kt)("a",{parentName:"p",href:"../linux-install"},"from Flathub"),", or ",(0,r.kt)("a",{parentName:"p",href:"installing-podman-desktop-from-a-flatpak-bundle"},"from a Flatpak bundle")," when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You cannot use Flatpak."),(0,r.kt)("li",{parentName:"ul"},"You install in a restricted environment.")),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://podman.io/whatis.html"},"Podman")," stable version")),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the\n",(0,r.kt)("inlineCode",{parentName:"li"},"podman-desktop-<version>.tar.gz")," archive from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/releases"},"Git repository release assets"),"."),(0,r.kt)("li",{parentName:"ol"},"Extract the content."),(0,r.kt)("li",{parentName:"ol"},"Go to the extracted directory."),(0,r.kt)("li",{parentName:"ol"},"Double-click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"podman-desktop")," executable file.")),(0,r.kt)("h4",{id:"next-steps"},"Next steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../getting-started/getting-started"},"Getting started"))))}m.isMDXComponent=!0}}]);