"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[172],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),c=o,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),o=t(4334);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(3117),o=t(7294),i=t(4334),r=t(2466),s=t(6775),l=t(1980),p=t(7392),u=t(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function m(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function c(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=m(e),[r,s]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[l,p]=h({queryString:t,groupId:a}),[d,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),k=(()=>{const e=l??d;return c({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),g(e)}),[p,g,i]),tabValues:i}}var k=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),m=e=>{const n=e.currentTarget,t=u.indexOf(n),a=p[t].value;a!==s&&(d(n),l(a))},c=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>u.push(e),onKeyDown:c,onClick:m},r,{className:(0,i.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=g(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},o.createElement(v,(0,a.Z)({},e,n)),o.createElement(y,(0,a.Z)({},e,n)))}function b(e){const n=(0,k.Z)();return o.createElement(N,(0,a.Z)({key:String(n)},e))}},6072:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=t(3117),o=(t(7294),t(3905)),i=t(4866),r=t(5162);const s={sidebar_position:2},l="Migrating to v2",p={unversionedId:"migrating-to-v2",id:"version-1.x/migrating-to-v2",title:"Migrating to v2",description:"Follow these steps to migrate to v2.",source:"@site/versioned_docs/version-1.x/migrating-to-v2.md",sourceDirName:".",slug:"/migrating-to-v2",permalink:"/migrating-to-v2",draft:!1,editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/versioned_docs/version-1.x/migrating-to-v2.md",tags:[],version:"1.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"Setup",permalink:"/setup"}},u={},d=[{value:"1. RootNavGraph annotation was renamed to RootGraph",id:"1-rootnavgraph-annotation-was-renamed-to-rootgraph",level:3},{value:"2. Destination annotation now requires a navigation graph type argument.",id:"2-destination-annotation-now-requires-a-navigation-graph-type-argument",level:3},{value:"3. Small package name and name changes",id:"3-small-package-name-and-name-changes",level:3},{value:"4. If using your own NavGraph annotations",id:"4-if-using-your-own-navgraph-annotations",level:3},{value:"5. If using bottom sheet destinations",id:"5-if-using-bottom-sheet-destinations",level:3},{value:"6. If you have set &quot;compose-destinations.mode&quot; on gradle ksp config",id:"6-if-you-have-set-compose-destinationsmode-on-gradle-ksp-config",level:3},{value:"7. If you have set &quot;compose-destinations.useComposableVisibility&quot; on gradle ksp config",id:"7-if-you-have-set-compose-destinationsusecomposablevisibility-on-gradle-ksp-config",level:3},{value:"8. If using <code>route</code> param Destination annotation",id:"8-if-using-route-param-destination-annotation",level:3},{value:"9. If using <code>DestinationStyle.Runtime</code>",id:"9-if-using-destinationstyleruntime",level:3},{value:"10. If have any custom implementation of a DestinationStyle type",id:"10-if-have-any-custom-implementation-of-a-destinationstyle-type",level:3},{value:"11. If you are defining Nav graph level animations on <code>rememberAnimatedNavHostEngine</code> call",id:"11-if-you-are-defining-nav-graph-level-animations-on-rememberanimatednavhostengine-call",level:3},{value:"12. If you are still using the deprecated &quot;navGraph&quot; param of <code>Destination</code> annotation",id:"12-if-you-are-still-using-the-deprecated-navgraph-param-of-destination-annotation",level:3},{value:"13. If you are passing dependencies via <code>dependenciesContainerBuilder</code> param of <code>DestinationsNavHost</code> call",id:"13-if-you-are-passing-dependencies-via-dependenciescontainerbuilder-param-of-destinationsnavhost-call",level:3},{value:"14. If using &quot;routedIn&quot;, &quot;within&quot; or &quot;withDeepLinks&quot; APIs",id:"14-if-using-routedin-within-or-withdeeplinks-apis",level:3},{value:"15. If implementing <code>NavGraphSpec</code> in a multi module setup to aggregate graphs and destinations from other modules",id:"15-if-implementing-navgraphspec-in-a-multi-module-setup-to-aggregate-graphs-and-destinations-from-other-modules",level:3}],m={toc:d},c="wrapper";function h(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrating-to-v2"},"Migrating to v2"),(0,o.kt)("p",null,"Follow these steps to migrate to v2. "),(0,o.kt)("p",null,"Please, if you find you had to do something which is not covered in this page or it's not clear,\nopen an issue on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/raamcosta/compose-destinations"},"here"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/raamcosta/compose-destinations-docs"},"here")," or write a message on kotlin slack ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.slack.com/archives/C06CS4UCQ10"},"#compose-destinations channel"),".",(0,o.kt)("br",{parentName:"p"}),"\n",'You can also quickly open a PR to improve documentation by using "Edit this page" button at the end of each page.'),(0,o.kt)("p",null,'The ones that start with "If", you can skip if you don\'t meet that criteria. Otherwise expand it and go through the steps explained.'),(0,o.kt)("h3",{id:"1-rootnavgraph-annotation-was-renamed-to-rootgraph"},"1. RootNavGraph annotation was renamed to RootGraph"),(0,o.kt)("p",null,'Going forward, the convention for navigation graph annotations is to call them "SomethingGraph". This will generate "SomethingNavGraph" classes so we end up with different names. Classes in your code can be used for any number of things, so making their name the more specific one makes sense. While nav graph annotations will always be used in the same context, so just "Graph" suffix is enough.'),(0,o.kt)("h3",{id:"2-destination-annotation-now-requires-a-navigation-graph-type-argument"},"2. Destination annotation now requires a navigation graph type argument."),(0,o.kt)("p",null,"If you're not using any custom navigation graphs, then you just need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"<RootGraph>")," to all ",(0,o.kt)("inlineCode",{parentName:"p"},"@Destination")," usages and delete ",(0,o.kt)("inlineCode",{parentName:"p"},"@RootNavGraph"),' annotations.\nIf you do have custom navigation graph annotations, then use the annotation name instead of "RootGraph".\nExample:'),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"v1",label:"v1",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination\n@Composable\nfun MyScreen() { /*...*/ }\n\n@RootNavGraph(start = true)\n@Destination\n@Composable\nfun MyStartScreen() { /*...*/ }\n\n@MyGraph(start = true)\n@Destination\n@Composable\nfun AnotherScreen() { /*...*/ }\n"))),(0,o.kt)(r.Z,{value:"v2",label:"v2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination<RootGraph>\n@Composable\nfun MyScreen() { /*...*/ }\n\n@Destination<RootGraph>(start = true)\n@Composable\nfun MyStartScreen() { /*...*/ }\n\n@Destination<MyGraph>(start = true)\n@Composable\nfun AnotherScreen() { /*...*/ }\n"))),(0,o.kt)(r.Z,{value:"diff",label:"diff",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-@Destination\n+@Destination<RootGraph>\n @Composable\n fun MyScreen() { /*...*/ }\n \n-@RootNavGraph(start = true)\n-@Destination\n+@Destination<RootGraph>(start = true)\n @Composable\n fun MyStartScreen() { /*...*/ }\n \n-@MyGraph(start = true)\n-@Destination\n+@Destination<MyGraph>(start = true)\n @Composable\n fun AnotherScreen() { /*...*/ }\n")))),(0,o.kt)("h3",{id:"3-small-package-name-and-name-changes"},"3. Small package name and name changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"SingleModuleExtensions.kt")," file, no longer generated, so:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appDestination()")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"destination()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appCurrentDestinationFlow")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"currentDestinationFlow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"appCurrentDestinationAsState()")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"currentDestinationAsState()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"startAppDestination")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"startDestination")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NavGraph")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"NavGraphSpec")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Destination.kt")," file is no longer generated, so: (note that replacements are not sealed)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"sealed ",(0,o.kt)("inlineCode",{parentName:"li"},"Destination")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"DestinationSpec")," "),(0,o.kt)("li",{parentName:"ul"},"sealed ",(0,o.kt)("inlineCode",{parentName:"li"},"DirectionDestination")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"DirectionDestinationSpec")),(0,o.kt)("li",{parentName:"ul"},"sealed ",(0,o.kt)("inlineCode",{parentName:"li"},"TypedDestination<T>")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"TypedDestinationSpec<T>")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"navArgsDelegate")," parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"@Destination")," renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"navArgs"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DestinationSpec<T>")," renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"TypedDestinationSpec<T>")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DestinationSpec<*>")," renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"DestinationSpec"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Some core APIs changed package name. If you have some red imports, try deleting the import and importing it again.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Generated code is now on ",(0,o.kt)("inlineCode",{parentName:"p"},"com.ramcosta.composedestinations.generated"),' package by default, instead of getting the common part of all destination\'s package names. If you use "moduleName", then that is suffixed to the above package name.\nSo you will have to either set the current package name used on v1 by the library as your "codeGenPackageName" or, you\'ll need to re-import all Destinations.'))),(0,o.kt)("p",null,'To set the "codeGenPackageName" do this in your build.gradle(.kts) file'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'    ksp {\n        arg("compose-destinations.codeGenPackageName", "your.preferred.package.name") // replace package name!\n    }\n')),(0,o.kt)("h3",{id:"4-if-using-your-own-navgraph-annotations"},"4. If using your own NavGraph annotations"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand"),(0,o.kt)("h3",null,"Nav graph annotations now requires a parent navigation graph type argument."),(0,o.kt)("p",null,"Same as with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Destination<MyGraph>"),", custom navigation graph annotations now need to identify their parent nav graph in its type argument rather than annotating it."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"v1",label:"v1",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@RootNavGraph\n@NavGraph\nannotation class MyGraph(\n    val start: Boolean = false\n)\n\n@MyGraph(start = true)\n@NavGraph\nannotation class AnotherGraph(\n    val start: Boolean = false\n)\n"))),(0,o.kt)(r.Z,{value:"v2",label:"v2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@NavGraph<RootGraph>\nannotation class MyGraph\n\n@NavGraph<MyGraph>(start = true)\nannotation class AnotherGraph\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'In the above example (both before and after), we\'re making a "MyGraph" that is nested in "Root" and a "AnotherGraph" that is nested in "MyGraph" and is its start route.')),(0,o.kt)("h3",null,"Navigation graphs with no parent (used to pass to DestinationsNavHost) should now be annotated with @NavHostGraph"),(0,o.kt)("p",null,"This will generate a special ",(0,o.kt)("inlineCode",{parentName:"p"},"NavHostGraph")," object which has slightly different characteristics (also the annotation has different parameters) then a normal navigation graph.",(0,o.kt)("br",{parentName:"p"}),"\n","Also, ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraph")," parameter (which was usually used in these graphs) no longer exists, so you do have to be explicit in all ",(0,o.kt)("inlineCode",{parentName:"p"},"@Destination")," and add the graph you want it to belong to (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"@Destination<MyGraph>"),")."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"v1",label:"v1",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@NavGraph(default = true)\nannotation class MyMainGraph(\n    val start: Boolean = false\n)\n\n@MyMainGraph(start = true)\n@Destination\n@Composable\nfun MyStartScreen() { /*...*/ }\n\n@Destination //because default = true on MyMainGraph, when absent, Destination would belong to that graph\n@Composable\nfun AnotherScreen() { /*...*/ }\n"))),(0,o.kt)(r.Z,{value:"v2",label:"v2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@NavHostGraph\nannotation class MyMainGraph\n\n@Destination<MyMainGraph>(start = true)\n@Composable\nfun MyStartScreen() { /*...*/ }\n\n@Destination<MyMainGraph>\n@Composable\nfun AnotherScreen() { /*...*/ }\n"))))),(0,o.kt)("h3",{id:"5-if-using-bottom-sheet-destinations"},"5. If using bottom sheet destinations"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand"),(0,o.kt)("h3",null,"Animations core is now a bottom sheet that you add alongside the core, not instead of."),(0,o.kt)("p",null,"So the core dependency should now be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'ksp("io.github.raamcosta.compose-destinations:ksp:<version>")\nimplementation("io.github.raamcosta.compose-destinations:core:<version>")\n')),(0,o.kt)("p",null,"And when using bottom sheet destinations, add also this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("io.github.raamcosta.compose-destinations:bottom-sheet:<version>")\n'))),(0,o.kt)("h3",{id:"6-if-you-have-set-compose-destinationsmode-on-gradle-ksp-config"},'6. If you have set "compose-destinations.mode" on gradle ksp config'),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand"),(0,o.kt)("p",null,"There's no \"mode\" anymore. Let's talk about each mode we had on v1:"),(0,o.kt)("h3",null,'"destinations"'),(0,o.kt)("p",null,'You can set "generateNavGraphs" to false to have a similar output for that module'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'ksp {\n    arg("compose-destinations.generateNavGraphs", "false")\n}\n')),(0,o.kt)("p",null,"The output is slightly different, on v2 there's an object that contains the list of destinations instead of the field list being top level.\nYou can import all destinations to certain nav graph defined in another module by using ",(0,o.kt)("inlineCode",{parentName:"p"},"@ExternalDestiantion<ModuleDestinationsOutputObject>")," in companion object of that nav graph annotation class."),(0,o.kt)("h3",null,'"navgraphs" & "singlemodule"'),(0,o.kt)("p",null,"These existed to control generation of certain files that are no longer generated, so if you had these, you should be safe to just delete it.")),(0,o.kt)("h3",{id:"7-if-you-have-set-compose-destinationsusecomposablevisibility-on-gradle-ksp-config"},'7. If you have set "compose-destinations.useComposableVisibility" on gradle ksp config'),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand"),(0,o.kt)("p",null,"The approach on v1 was not great because it wouldn't allow you to have internal Composable with public generated Destination, which is what makes sense\non multi module projects."),(0,o.kt)("p",null,"On v2, you can have any combination though since the annotation lets you control the visibility of the generated Destination.\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination(\n    visibility = CodeGenVisibility.INTERNAL // or PUBLIC\n)\n@Composable\ninternal fun MyScreen() { /*...*/ }\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can create your own Destination annotations if you want to simplify this for the whole module, like:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination<AnyGraph>(visibility = CodeGenVisibility.INTERNAL)\nannotation class InternalDestination<T: Annotation>(\n    //copy all fields from Destination annotation you want usages of this one to be able to use, like\n    val route: String = COMPOSABLE_NAME,\n    val start: Boolean = false,\n    val navArgs: KClass<*> = Nothing::class,\n    val deepLinks: Array<DeepLink> = [],\n    val style: KClass<out DestinationStyle> = DestinationStyle.Default::class,\n    val wrappers: Array<KClass<out DestinationWrapper>> = []\n)\n")))),(0,o.kt)("h3",{id:"8-if-using-route-param-destination-annotation"},"8. If using ",(0,o.kt)("inlineCode",{parentName:"h3"},"route")," param Destination annotation"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand"),(0,o.kt)("p",null,"Generated destinations class name is now based of the route and not the Composable name. By default, routes are also set based on the composable name, so, by default, there should be no difference. However, if you're setting any manual routes, then the generated Destination object will likely have a different name.\nGiven this, for those cases, you'll need to change the usages to the new name.")),(0,o.kt)("h3",{id:"9-if-using-destinationstyleruntime"},"9. If using ",(0,o.kt)("inlineCode",{parentName:"h3"},"DestinationStyle.Runtime")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand"),(0,o.kt)("p",null,"This was removed. Depending on the reason for using it, we have new and better ways to solve the same issue:",(0,o.kt)("br",{parentName:"p"}),"\n","If using it,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"for changing style when using destinations from different modules",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"There's now a way to do that with annotation ",(0,o.kt)("inlineCode",{parentName:"li"},"@ExternalDestination<MyDestinationFromAnotherModule>(style = MyStyle::class)"),"\nExample:")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"// navigation module\n@NavHostGraph // or @NavGraph<ParentGraph>\nannotation class MyGraph {\n\n    @ExternalDestination<MyDestinationFromAnotherModule>(style = MyStyle::class)\n    companion object Includes\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"for other reasons",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"MyDestination animateWith MyAnimation")," or passing in lambdas (as in the official lib) on ",(0,o.kt)("inlineCode",{parentName:"li"},"manualComposableCallsBuilder")," param of DestinationsNavHost")))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"DestinationsNavHost(\n    //...\n) {\n    // works for default transitions on NavGraphs as well!\n    ProfileScreenDestination animateWith MyAnimatedStyle\n    // OR\n    ProfileScreenDestination.animateWith(\n        enterTransition = { /*...*/},\n        exitTransition = { /*...*/},\n        popEnterTransition = { /*...*/},\n        popExitTransition = { /*...*/}\n    )\n}\n"))),(0,o.kt)("h3",{id:"10-if-have-any-custom-implementation-of-a-destinationstyle-type"},"10. If have any custom implementation of a DestinationStyle type"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DestinationStyle"),' is now an abstract class instead of an interface, so extending it requires "()"',(0,o.kt)("br",{parentName:"p"}),"\n","Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"object ProfileTransitions : DestinationStyle.Animated() {\n    //...\n}\n"))),(0,o.kt)("h3",{id:"11-if-you-are-defining-nav-graph-level-animations-on-rememberanimatednavhostengine-call"},"11. If you are defining Nav graph level animations on ",(0,o.kt)("inlineCode",{parentName:"h3"},"rememberAnimatedNavHostEngine")," call"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand"),(0,o.kt)("p",null,"On v2 ",(0,o.kt)("inlineCode",{parentName:"p"},"rememberNavHostEngine")," doesn't have these options.\nInstead, you can define default animations for navigation graphs at the annotation level or when importing a navigation graph from another module.\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@NavGraph<RootGraph>(\n    defaultTransitions = MyAnimatedDestinationStyle::class\n)\nannotation class MyGraph {\n\n    // or when importing\n    @ExternalNavGraph<AnotherModuleGraph>(\n        defaultTransitions = MyAnimatedDestinationStyle::class\n    )\n    companion object Includes\n\n}\n")),(0,o.kt)("p",null,"OR"),(0,o.kt)("p",null,"If you need to have logic on your animations based on any runtime state, you can do so in the ",(0,o.kt)("inlineCode",{parentName:"p"},"manualComposableCallsBuilder"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"DestinationsNavHost(\n    //...\n) {\n    MyGraph.animateWith(\n        enterTransition = { /*...*/ },\n        exitTransition = { /*...*/ },\n        popEnterTransition = { /*...*/ },\n        popExitTransition = { /*...*/ },\n    )\n}\n\n"))),(0,o.kt)("h3",{id:"12-if-you-are-still-using-the-deprecated-navgraph-param-of-destination-annotation"},'12. If you are still using the deprecated "navGraph" param of ',(0,o.kt)("inlineCode",{parentName:"h3"},"Destination")," annotation"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand"),(0,o.kt)("p",null,"Firstly, create an annotation class for each navigation graph you need, defining ",(0,o.kt)("inlineCode",{parentName:"p"},"RootGraph")," as its parent, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@NavGraph<RootGraph>\nannotation class MyGraph\n\n@NavGraph<RootGraph>\nannotation class AnotherGraph\n\n//...\n")),(0,o.kt)("p",null,"Then, use those in your destinations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination<MyGraph>\n@Composable\nfun MyScreen() { /*...*/ }\n\n@Destination<AnotherGraph>\n@Composable\nfun AnotherScreen() { /*...*/ }\n"))),(0,o.kt)("h3",{id:"13-if-you-are-passing-dependencies-via-dependenciescontainerbuilder-param-of-destinationsnavhost-call"},"13. If you are passing dependencies via ",(0,o.kt)("inlineCode",{parentName:"h3"},"dependenciesContainerBuilder")," param of ",(0,o.kt)("inlineCode",{parentName:"h3"},"DestinationsNavHost")," call"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"v1",label:"v1",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"DestinationsNavHost(\n    //...\n    dependenciesContainerBuilder = {\n        dependency(aDependencyForEveryDestination)\n\n        dependency(ProfileScreenDestination) { anotherDependency }\n        dependency(ProfileScreenDestination) { someOtherDependency }\n\n        dependency(NavGraphs.settings) {\n            val parentEntry = remember(navBackStackEntry) {\n                navController.getBackStackEntry(NavGraphs.settings.route)\n            }\n            viewModel<SettingsViewModel>(parentEntry)\n        }   \n\n        dependency(NavGraphs.settings) { anotherDependencyForSettingsGraph }   \n    }\n)\n"))),(0,o.kt)(r.Z,{value:"v2",label:"v2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"DestinationsNavHost(\n    //...\n    dependenciesContainerBuilder = {\n        dependency(aDependencyForEveryDestination)\n\n        destination(ProfileScreenDestination) {\n             dependency(anotherDependency)\n             dependency(someOtherDependency)\n        }\n\n        navgraph(NavGraphs.settings) {\n            val parentEntry = remember(navBackStackEntry) {\n                navController.getBackStackEntry(NavGraphs.settings.route)\n            }\n            \n            dependency(viewModel<SettingsViewModel>(parentEntry))\n            dependency(anotherDependencyForSettingsGraph)\n        }   \n    }\n)\n"))),(0,o.kt)(r.Z,{value:"diff",label:"diff",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"DestinationsNavHost(\n     //...\n     dependenciesContainerBuilder = {\n         dependency(aDependencyForEveryDestination)\n-\n-        dependency(ProfileScreenDestination) { anotherDependency }\n-        dependency(ProfileScreenDestination) { someOtherDependency }\n-\n-        dependency(NavGraphs.settings) {\n+    \n+        destination(ProfileScreenDestination) {\n+            dependency(anotherDependency)\n+            dependency(someOtherDependency)\n+        }\n+    \n+        navgraph(NavGraphs.settings) {\n             val parentEntry = remember(navBackStackEntry) {\n                 navController.getBackStackEntry(NavGraphs.settings.route)\n             }\n-            viewModel<SettingsViewModel>(parentEntry)\n-        }\n-\n-        dependency(NavGraphs.settings) { anotherDependencyForSettingsGraph }\n+    \n+            dependency(viewModel<SettingsViewModel>(parentEntry))\n+            dependency(anotherDependencyForSettingsGraph)\n+        }\n     }\n )\n"))))),(0,o.kt)("h3",{id:"14-if-using-routedin-within-or-withdeeplinks-apis"},'14. If using "routedIn", "within" or "withDeepLinks" APIs'),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand"),(0,o.kt)("p",null,"These APIs were removed on v2. There are new and better ways to achieve the same thing."),(0,o.kt)("h4",null,"To import destinations from another module while setting different deep links"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@NavGraph<RootGraph>\nannotation class MyGraph {\n\n    @ExternalDestination<AnotherModuleDestination>(\n        deepLinks = [\n            DeepLink(uriPattern = "..."),\n            DeepLink(uriPattern = "...")\n        ]\n    )\n    companion object Includes\n}\n')),(0,o.kt)("h4",null,"To have a destination be part of multiple graphs"),(0,o.kt)("p",null,"You can use multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"@Destination<Graph>")," in your Composable. Compose Destinations will generate a Destination for each ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination")," annotations, in this case, preffixing the Destination class name with the name of the graph."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination<GraphOne>\n@Destination<GraphTwo>\n@Composable\nfun MyScreen() { /*...*/ }\n")),(0,o.kt)("p",null,"This would generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphOneMyScreenDestination")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphTwoMyScreenDestination"),"."),(0,o.kt)("admonition",{title:"Multi module case",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that a Destination generated on module A cannot be imported to multiple nav graphs of module B. If you find yourself wanting to do this, consider\nremoving Compose Destinations from module A and just exposing a normal Composable. Then on module B you can create a Composable annotated with multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination")," (like the example above) and just call module A's Composable."))),(0,o.kt)("h3",{id:"15-if-implementing-navgraphspec-in-a-multi-module-setup-to-aggregate-graphs-and-destinations-from-other-modules"},"15. If implementing ",(0,o.kt)("inlineCode",{parentName:"h3"},"NavGraphSpec")," in a multi module setup to aggregate graphs and destinations from other modules"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand"),(0,o.kt)("p",null,"There's no longer a need to do that, in fact, you shouldn't. Because doing it that way, won't let Compose Destinations know at compile\ntime how the navigation graphs look like, and so, it cannot be as helpful."),(0,o.kt)("p",null,'So, on v2, if you want to include destinations or navigation graphs from other modules in a graph called "MainNavGraph", you should do:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@NavHostGraph\nannotation class MainGraph {\n\n    @ExternalNavGraph<FeatureXNavGraph>\n    @ExternalModuleDestinations<SomeModuleDestinations>\n    @ExternalDestination<AnotherModuleDestination>\n    companion object Includes\n}\n")),(0,o.kt)("admonition",{title:"Above example",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Assumes you want to pass MainNavGraph to DestinationsNavHost, otherwise you could also use ",(0,o.kt)("inlineCode",{parentName:"li"},"@NavGraph<RootGraph>")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"@NavHostGraph")),(0,o.kt)("li",{parentName:"ul"},"On all ",(0,o.kt)("inlineCode",{parentName:"li"},"ExternalNavGraph"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ExternalDestination")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ExternalModuleDestinations"),", you can call the annotation's constructor to override (or add depending on the field) stuff like deep links, wrappers, default animations etc."),(0,o.kt)("li",{parentName:"ul"},"The most common and better way to split navigation graphs on modules is to have feature modules espose a single NavGraph (internally it can contain multiple others) and import it here with ",(0,o.kt)("inlineCode",{parentName:"li"},"@ExternalNavGraph")," as seen above. Other annotations on above example should be less common practices.")))))}h.isMDXComponent=!0}}]);