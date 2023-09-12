"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6623],{35318:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>d});var n=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return o?n.createElement(f,a(a({ref:t},l),{},{components:o})):n.createElement(f,a({ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},97559:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(25773),r=(o(27378),o(35318));const i={title:"Running Compose files",description:"With Podman Desktop, you can manage multi-container applications defined in Compose files.",sidebar_position:3,keywords:["compose"],tags:["compose"]},a=void 0,s={unversionedId:"compose/running-compose",id:"compose/running-compose",title:"Running Compose files",description:"With Podman Desktop, you can manage multi-container applications defined in Compose files.",source:"@site/docs/compose/running-compose.md",sourceDirName:"compose",slug:"/compose/running-compose",permalink:"/docs/compose/running-compose",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/compose/running-compose.md",tags:[{label:"compose",permalink:"/docs/tags/compose"}],version:"current",sidebarPosition:3,frontMatter:{title:"Running Compose files",description:"With Podman Desktop, you can manage multi-container applications defined in Compose files.",sidebar_position:3,keywords:["compose"],tags:["compose"]},sidebar:"mySidebar",previous:{title:"Setting up Compose",permalink:"/docs/compose/setting-up-compose"},next:{title:"Extensions",permalink:"/docs/extensions/"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Additional resources",id:"additional-resources",level:4}],l={toc:c};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With Podman Desktop, you can manage multi-container applications defined in a Compose file."),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"setting-up-compose"},"You have set up a Compose engine"),"."),(0,r.kt)("li",{parentName:"ul"},"You have a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md#compose-file"},"Compose file"),", such as ",(0,r.kt)("inlineCode",{parentName:"li"},"compose.yaml"),".")),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the command in a terminal:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ docker-compose --file compose.yaml up --detach\n")))),(0,r.kt)("h4",{id:"verification"},"Verification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Podman Desktop ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("icon",{icon:"fa-solid fa-cube",size:"lg"})," Containers")," list displays the containers created by Compose grouped in a container group with a ",(0,r.kt)("inlineCode",{parentName:"p"},"(compose)")," suffix, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"flask-redis (compose)"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"img2",src:o(64228).Z,width:"1017",height:"742"})))),(0,r.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/compose-spec/compose-spec/blob/master/spec.md#compose-file"},"Compose file specification"))))}m.isMDXComponent=!0},64228:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/compose-in-containers-view-b93a1a1667842a10985bf3203a035f3b.png"}}]);