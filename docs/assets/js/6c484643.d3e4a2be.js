"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[550],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return t?a.createElement(g,r(r({ref:n},d),{},{components:t})):a.createElement(g,r({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8967:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(3117),o=(t(7294),t(3905));const i={sidebar_position:10},r="Code generation configs",s={unversionedId:"codegenconfigs",id:"version-1.x/codegenconfigs",title:"Code generation configs",description:"Generated files package name",source:"@site/versioned_docs/version-1.x/codegenconfigs.md",sourceDirName:".",slug:"/codegenconfigs",permalink:"/codegenconfigs",draft:!1,editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/versioned_docs/version-1.x/codegenconfigs.md",tags:[],version:"1.x",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Deep links",permalink:"/deeplinks"},next:{title:"Bottom bar navigation",permalink:"/common-use-cases/bottom-bar-navigation"}},l={},p=[{value:"Generated files package name",id:"generated-files-package-name",level:2},{value:"Disabling NavGraphs generation",id:"disabling-navgraphs-generation",level:2},{value:"Multi module configs",id:"multi-module-configs",level:2}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-generation-configs"},"Code generation configs"),(0,o.kt)("h2",{id:"generated-files-package-name"},"Generated files package name"),(0,o.kt)("p",null,"If you want the generated files to be placed in a specific package name, you can configure it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'ksp {\n    arg("compose-destinations.codeGenPackageName", "your.preferred.packagename")\n}\n')),(0,o.kt)("h2",{id:"disabling-navgraphs-generation"},"Disabling NavGraphs generation"),(0,o.kt)("p",null,"You can disable the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraphs")," generated object like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'ksp {\n    arg("compose-destinations.generateNavGraphs", "false")\n}\n')),(0,o.kt)("p",null,"This config is only meant for the default (",(0,o.kt)("inlineCode",{parentName:"p"},'"singlemodule"'),") mode. See more about modes on next section.\nIt will make ",(0,o.kt)("inlineCode",{parentName:"p"},"@NavGraph")," annotations ignored in the code generating process since these are hints only used in the generating of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraphs")," object. KSP task will log some warnings about this.\nRead more about when you might want to do this ",(0,o.kt)("a",{parentName:"p",href:"defining-navgraphs#manually-defining-navigation-graphs"},"here"),"."),(0,o.kt)("h2",{id:"multi-module-configs"},"Multi module configs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'ksp {\n   arg("compose-destinations.mode", "[GENERATION_MODE_FOR_MODULE]")\n   arg("compose-destinations.moduleName", "[YOUR_MODULE_NAME")\n}\n')),(0,o.kt)("p",null,"For multi-module apps, you can now use the above two configs in each module's ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," where you are going to use Compose Destinations ",(0,o.kt)("inlineCode",{parentName:"p"},"ksp")," dependency (in other words where you will annotate composables with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Destination"),"). ",(0,o.kt)("inlineCode",{parentName:"p"},"GENERATION_MODE_FOR_MODULE")," can be replaced with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'"destinations"'),':\nKSP will generate the destinations of the module and expose a list with all of them. Doesn\'t generate any nav graphs. The nav graphs should then be manually built in the "navigation module" where you call the ',(0,o.kt)("inlineCode",{parentName:"p"},"DestinationsNavHost"),".\nThis is useful if your module wants to expose single or multiple destinations but they should belong to a navigation graph that also contains destinations from other modules.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Example of usage:")," Chris Banes tivi project - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/raamcosta/tivi"},"https://github.com/raamcosta/tivi"),(0,o.kt)("br",{parentName:"p"}),"\n","Note also that you don't necessarily need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"routedIn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"withIn")," methods like we do in this repository.\nThat is only needed if you want some ",(0,o.kt)("inlineCode",{parentName:"p"},"Destinations")," to belong to multiple navigation graphs.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'"navgraphs"'),":\nThe module will generate a nav graph and its destinations (or graphs if you use ",(0,o.kt)("inlineCode",{parentName:"p"},"@NavGraph"),' annotations on some destination).\nThis should be used if your module generates one or multiple navigation graphs that will then be consumed in another module, usually the "navigation module" that calls ',(0,o.kt)("inlineCode",{parentName:"p"},"DestinationsNavHost"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Example of usage:")," Philipp Lackner project - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/raamcosta/CalorieTracker"},"https://github.com/raamcosta/CalorieTracker"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'"singlemodule"')," (default if none is specified):\nMeant for apps where navigation-related code is in a single module. It generates a ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraphs"),' object with all nav graphs inside and it nests all of them inside the "root" one. It is also the only mode that generates a ',(0,o.kt)("inlineCode",{parentName:"p"},"SingleModuleExtensions.kt")," file (this is basically a file with utilities that you can always create yourself if you need to. These utilities use the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraphs.root")," and/or expose the (generated) sealed version of a Destination instead of the DestinationSpec from the core module)."))))}u.isMDXComponent=!0}}]);