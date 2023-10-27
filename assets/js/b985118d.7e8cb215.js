"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[899],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,k=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(25773),o=(n(27378),n(35318));const i={sidebar_position:3},r="MacOS",l={unversionedId:"installation/macos-install",id:"installation/macos-install",title:"MacOS",description:"This page contains information regarding installation of Podman Desktop on MacOS.",source:"@site/docs/installation/macos-install.md",sourceDirName:"installation",slug:"/installation/macos-install",permalink:"/docs/installation/macos-install",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/installation/macos-install.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mySidebar",previous:{title:"Installing with Winget",permalink:"/docs/installation/windows-install/installing-podman-desktop-with-winget"},next:{title:"Linux",permalink:"/docs/installation/linux-install/"}},s={},p=[{value:"Installing Podman Desktop on MacOS using .dmg file",id:"installing-podman-desktop-on-macos-using-dmg-file",level:2},{value:"Installing Podman Desktop on MacOS using brew",id:"installing-podman-desktop-on-macos-using-brew",level:2}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"macos"},"MacOS"),(0,o.kt)("p",null,"This page contains information regarding installation of Podman Desktop on MacOS."),(0,o.kt)("p",null,"You can install Podman Desktop on Mac:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using the .dmg file"),(0,o.kt)("li",{parentName:"ol"},"Using Brew")),(0,o.kt)("admonition",{title:"Prerequisite",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Podman Desktop requires ",(0,o.kt)("a",{parentName:"p",href:"https://docs.podman.io/en/latest/index.html"},"Podman Engine"),". If you don't have Podman Engine installed, Podman Desktop will prompt you to do so at a later stage.")),(0,o.kt)("h2",{id:"installing-podman-desktop-on-macos-using-dmg-file"},"Installing Podman Desktop on MacOS using .dmg file"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the ",(0,o.kt)("inlineCode",{parentName:"p"},".dmg")," file from the ",(0,o.kt)("a",{parentName:"p",href:"/downloads/macos"},"Downloads")," section of this website."),(0,o.kt)("p",{parentName:"li"},'While we recommend getting the "universal" binary file which will work irrespective of the chip architecture your Mac possesses, you also have the option to get the applicable .dmg file depending on your Mac Hardware Architecture (that is Intel or Apple M1).')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate the downloaded file, and double-click on it. (Usually, you will find the downloaded file in the Downloads folder)"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"img0",src:n(26778).Z,width:"1594",height:"786"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Drag Podman Desktop icon to the Applications folder."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"img1",src:n(52599).Z,width:"1037",height:"703"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start Podman Desktop from the 'Launchpad' or Mac's ",(0,o.kt)("inlineCode",{parentName:"p"},"Applications")," directory."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"img2",src:n(4583).Z,width:"674",height:"714"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install Podman from Podman Desktop, if not yet installed."),(0,o.kt)("p",{parentName:"li"},'When you open Podman Desktop for the first time, click on the "View detection checks" button to scan if all the prerequisites to use Podman Desktop are met. If it says ',(0,o.kt)("inlineCode",{parentName:"p"},"\u274c podman cli was not found in the PATH"),", then you need to install the Podman CLI/Engine which can be done within the application."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"img3",src:n(18578).Z,width:"2880",height:"1800"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on the "Install" button next to the "View detection checks" button, and follow the instructions on screen.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will be redirected to the Podman Installer. Follow the instructions on screen and enter your system password when asked."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"img4",src:n(92797).Z,width:"1265",height:"1149"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After the installation is complete, close the installation program. Podman Engine has been installed and you are now ready to use Podman Desktop."))),(0,o.kt)("h2",{id:"installing-podman-desktop-on-macos-using-brew"},"Installing Podman Desktop on MacOS using ",(0,o.kt)("a",{parentName:"h2",href:"https://brew.sh/"},"brew")),(0,o.kt)("admonition",{title:"Prerequisite",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew"),"\n:::")),(0,o.kt)("h3",{parentName:"admonition",id:"installation-steps"},"Installation steps"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a terminal on your Mac.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the command mentioned below."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew install podman-desktop\n")),(0,o.kt)("p",{parentName:"li"},"Brew will also install the Podman Engine along with the Podman Desktop application, in case you don't have it installed yet."),(0,o.kt)("p",{parentName:"li"},"After the command is executed, you can find the Podman Desktop Application within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Applications")," directory of the MacOS."))),(0,o.kt)("h2",{parentName:"admonition",id:"getting-started"},"Getting Started"),(0,o.kt)("p",{parentName:"admonition"},"Learn more on how to get started with Podman Desktop by clicking ",(0,o.kt)("a",{parentName:"p",href:"/docs/working-with-containers"},"here"),".")))}m.isMDXComponent=!0},52599:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/click-and-drag-862777e1ab1bfcafc559dd59f71a77e8.png"},26778:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/download-dmg-a847cf16a9f16dfddba0e46a4dbb3c2b.png"},18578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pd-before-podman-22ea6273dc67b3521d8836ce6fa717ec.png"},4583:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-desktop-app-9ea27077f1d767753acfb5c574657f27.png"},92797:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/system-pass-563b1bc0979f040e796c2e2eec40f11b.png"}}]);