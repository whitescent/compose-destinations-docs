"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[9783],{7688:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(4848),a=t(8453);const o={sidebar_position:1,slug:"/"},s="Overview",r={id:"overview",title:"Overview",description:"A KSP library that processes annotations and generates code that uses Official Jetpack Compose Navigation under the hood. It hides the complex, non-type-safe and boilerplate code you would have to write otherwise.",source:"@site/versioned_docs/version-1.x/overview.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,unlisted:!1,editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/versioned_docs/version-1.x/overview.md",tags:[],version:"1.x",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Migrating to v2",permalink:"/migrating-to-v2"}},l={},d=[{value:"Main features",id:"main-features",level:2},{value:"Materials",id:"materials",level:2},{value:"Community",id:"community",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"1. Annotate your screen Composables with <code>@Destination</code>",id:"1-annotate-your-screen-composables-with-destination",level:3},{value:"2. Add navigation arguments to the function declaration",id:"2-add-navigation-arguments-to-the-function-declaration",level:3},{value:"3. Build the project",id:"3-build-the-project",level:3},{value:"4. Use the generated Destination invoke method to navigate to it",id:"4-use-the-generated-destination-invoke-method-to-navigate-to-it",level:3},{value:"5. Finally, add the NavHost call",id:"5-finally-add-the-navhost-call",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{width:"250",height:"250",src:"/img/logo.svg"})}),"\n",(0,i.jsx)("div",{style:{textAlign:"center",padding:30}}),"\n",(0,i.jsxs)(n.p,{children:["A KSP library that processes annotations and generates code that uses Official Jetpack Compose Navigation under the hood. It hides the complex, non-type-safe and boilerplate code you would have to write otherwise.",(0,i.jsx)(n.br,{}),"\n","No need to learn a whole new framework to navigate - most APIs are either the same as with the Jetpack Components or inspired by them."]}),"\n",(0,i.jsx)(n.h2,{id:"main-features",children:"Main features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Typesafe navigation arguments"}),"\n",(0,i.jsx)(n.li,{children:"Simple but configurable navigation graphs setup"}),"\n",(0,i.jsx)(n.li,{children:"Navigating back with a result in a simple and type-safe way"}),"\n",(0,i.jsxs)(n.li,{children:["Getting the navigation arguments from the ",(0,i.jsx)(n.code,{children:"SavedStateHandle"})," (useful in ViewModels) and ",(0,i.jsx)(n.code,{children:"NavBackStackEntry"})," in a type-safe way"]}),"\n",(0,i.jsxs)(n.li,{children:["Navigation animations through integration with ",(0,i.jsx)(n.a,{href:"https://github.com/google/accompanist/tree/main/navigation-animation",children:"Accompanist Navigation-Animation"})]}),"\n",(0,i.jsxs)(n.li,{children:["Bottom sheet screens through integration with ",(0,i.jsx)(n.a,{href:"https://github.com/google/accompanist/tree/main/navigation-material",children:"Accompanist Navigation-Material"})]}),"\n",(0,i.jsx)(n.li,{children:"Easy deep linking to screens"}),"\n",(0,i.jsx)(n.li,{children:"All you can do with Official Jetpack Compose Navigation but in a simpler safer way!"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"materials",children:"Materials"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Alex Styl's quick introduction videos ",(0,i.jsx)(n.a,{href:"https://www.composables.co/courses/destination-compose",children:(0,i.jsx)(n.em,{children:"Navigate using the Compose Destinations library"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Philipp Lackner's Youtube video ",(0,i.jsxs)(n.a,{href:"https://www.youtube.com/watch?v=Q3iZyW2etm4",children:[(0,i.jsx)(n.em,{children:"Compose Navigation Just Got SO MUCH EASIER"})," \ud83d\ude31"]})]}),"\n",(0,i.jsxs)(n.li,{children:["Rafael Costa's blog post ",(0,i.jsx)(n.a,{href:"https://proandroiddev.com/compose-destinations-simpler-and-safer-navigation-in-compose-with-no-compromises-74a59c6b727d",children:(0,i.jsx)(n.em,{children:"Compose Destinations: simpler and safer navigation in Compose with no compromises"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Yanneck Rei\xdf's blog post ",(0,i.jsx)(n.a,{href:"https://medium.com/codex/type-save-navigation-with-jetpack-compose-destinations-610514e85370",children:(0,i.jsx)(n.em,{children:"Type Safe Navigation With Jetpack Compose Destinations"})})]}),"\n",(0,i.jsxs)(n.li,{children:["Google Dev Expert Kenji Abe's blog post ",(0,i.jsx)(n.a,{href:"https://star-zero.medium.com/navigation-compose%E3%82%92%E4%BE%BF%E5%88%A9%E3%81%AB%E3%81%97%E3%81%A6%E3%81%8F%E3%82%8C%E3%82%8B%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA-c2d0133b3e84",children:(0,i.jsx)(n.em,{children:"Navigation Compose\u3092\u4fbf\u5229\u306b\u3057\u3066\u304f\u308c\u308b\u30e9\u30a4\u30d6\u30e9\u30ea"})})]}),"\n",(0,i.jsxs)(n.li,{children:["aseem wangoo's blog post (and Youtube video inside): ",(0,i.jsx)(n.a,{href:"https://flatteredwithflutter.com/using-compose-destinations%ef%bf%bc/",children:(0,i.jsx)(n.em,{children:"Using compose destinations"})})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"community",children:"Community"}),"\n",(0,i.jsxs)(n.p,{children:["Please join the community at Kotlin slack channel: ",(0,i.jsx)(n.a,{href:"https://kotlinlang.slack.com/archives/C06CS4UCQ10",children:"#compose-destinations"}),(0,i.jsx)(n.br,{}),"\n","Ask questions, suggest improvements, or anything else related to the library."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsxs)(n.h3,{id:"1-annotate-your-screen-composables-with-destination",children:["1. Annotate your screen Composables with ",(0,i.jsx)(n.code,{children:"@Destination"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Destination\n@Composable\nfun ProfileScreen() { /*...*/ }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-add-navigation-arguments-to-the-function-declaration",children:"2. Add navigation arguments to the function declaration"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Parcelable"}),", ",(0,i.jsx)(n.code,{children:"Serializable"}),", ",(0,i.jsx)(n.code,{children:"Enum"})," types and classes annotated with ",(0,i.jsx)(n.a,{href:"https://github.com/Kotlin/kotlinx.serialization",children:(0,i.jsx)(n.code,{children:"@kotlinx.serialization.Serializable"})})," (as well as ",(0,i.jsx)(n.code,{children:"Array"}),"s and ",(0,i.jsx)(n.code,{children:"ArrayList"}),"s of these) are allowed with no additional setup!",(0,i.jsx)(n.br,{}),"\n","Besides, you can make any type a navigation argument type with a ",(0,i.jsx)(n.a,{href:"destination-arguments/navigation-arguments#custom-navigation-argument-types",children:"one-time simple setup"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Destination\n@Composable\nfun ProfileScreen(\n   id: Int, // <-- required navigation argument\n   groupName: String?, // <-- optional navigation argument\n   isOwnUser: Boolean = false // <-- optional navigation argument\n) { /*...*/ }\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["There is an alternative way to define the destination arguments in case you don't need to use them\ninside the Composable (as is likely the case when using ViewModel). Read more ",(0,i.jsx)(n.a,{href:"destination-arguments/navigation-arguments#navigation-arguments-class-delegate",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"3-build-the-project",children:"3. Build the project"}),"\n",(0,i.jsxs)(n.p,{children:["Or ",(0,i.jsx)(n.code,{children:"./gradlew kspDebugKotlin"}),", which should be faster, to generate all the Destinations. With the above annotated composable, a ",(0,i.jsx)(n.code,{children:"ProfileScreenDestination"})," file (that we'll use in step 4) would be generated."]}),"\n",(0,i.jsx)(n.h3,{id:"4-use-the-generated-destination-invoke-method-to-navigate-to-it",children:"4. Use the generated Destination invoke method to navigate to it"}),"\n",(0,i.jsx)(n.p,{children:"It will have the correct typed arguments."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'@RootNavGraph(start = true) // sets this as the start destination of the default nav graph\n@Destination\n@Composable\nfun HomeScreen(\n   navigator: DestinationsNavigator\n) {\n   /*...*/\n   navigator.navigate(ProfileScreenDestination(id = 7, groupName = "Kotlin programmers"))\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["DestinationsNavigator is a wrapper interface to NavController that if declared as a parameter, will be provided for free by the library. NavController can also be provided in the exact same way, but it ties your composables to a specific implementation which will make it harder to test and preview. Read more ",(0,i.jsx)(n.a,{href:"navigation/basics",children:"here"})]})}),"\n",(0,i.jsx)(n.h3,{id:"5-finally-add-the-navhost-call",children:"5. Finally, add the NavHost call"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"DestinationsNavHost(navGraph = NavGraphs.root)\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NavGraphs"}),' is a generated file that describes your navigation graphs and their destinations. By default all destinations will belong to "root" (@RootNavGraph), but you can create your own nav graphs annotations to have certain screens in other navigation graphs.']})}),"\n",(0,i.jsx)(n.p,{children:"This call adds all annotated Composable functions as destinations of the Navigation Host."}),"\n",(0,i.jsx)(n.p,{children:"That's it! No need to worry about routes, NavTypes, bundles and strings. All that redundant and error-prone code gets generated for you."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);