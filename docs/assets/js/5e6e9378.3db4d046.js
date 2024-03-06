"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[359],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=o,u=m["".concat(l,".").concat(c)]||m[c]||h[c]||i;return a?n.createElement(u,r(r({ref:t},d),{},{components:a})):n.createElement(u,r({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(3117),o=(a(7294),a(3905));const i={sidebar_position:6},r="Navigation Host Composables",s={unversionedId:"navhosts",id:"version-1.x/navhosts",title:"Navigation Host Composables",description:"Navigation Host Composables work as the holder for your screens and it's where they will be displayed.",source:"@site/versioned_docs/version-1.x/navhosts.md",sourceDirName:".",slug:"/navhosts",permalink:"/navhosts",draft:!1,editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/versioned_docs/version-1.x/navhosts.md",tags:[],version:"1.x",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Navigating back with a result",permalink:"/navigation/backresult"},next:{title:"Defining your Navigation Graphs",permalink:"/defining-navgraphs"}},l={},p=[{value:"DestinationsNavHost",id:"destinationsnavhost",level:2},{value:"Vanilla NavHosts",id:"vanilla-navhosts",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"navigation-host-composables"},"Navigation Host Composables"),(0,o.kt)("p",null,"Navigation Host Composables work as the holder for your screens and it's where they will be displayed."),(0,o.kt)("p",null,"Compose destinations has a recommended way to set up your ",(0,o.kt)("inlineCode",{parentName:"p"},"NavHosts")," and an alternative one. If you are not sure which to use and don't have much experience with Compose Navigation, go with the recommended ",(0,o.kt)("a",{parentName:"p",href:"#destinationsnavhost"},"DestinationsNavHost")," way. On the other hand, if you have a lot of experience with vanilla Compose Navigation and just want the type safety of Compose Destinations, you might prefer to use ",(0,o.kt)("a",{parentName:"p",href:"#vanilla-navhosts"},"NavHost / AnimatedNavHost"),"."),(0,o.kt)("h2",{id:"destinationsnavhost"},"DestinationsNavHost"),(0,o.kt)("p",null,'Compose Destinations has a "NavHost-like" Composable that you can use as a base for all your screens.'),(0,o.kt)("p",null,"It internally calls the Compose Navigation ",(0,o.kt)("inlineCode",{parentName:"p"},"NavHost")," but automatically adds all ",(0,o.kt)("inlineCode",{parentName:"p"},"@Destination")," annotated Composables of a given ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraph")," instance to the NavHost. When a destination gets navigated to, it calls the corresponding generated ",(0,o.kt)("inlineCode",{parentName:"p"},"Content")," method which prepares the navigation arguments and calls your annotated Composable."),(0,o.kt)("p",null,"Most times, using it is as simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"DestinationsNavHost(navGraph = NavGraphs.root)\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"NavGraphs"),' is a generated object that contains the definition of all your navigation graphs and their destinations. By default, all annotated composable will belong to the "root" navigation graph. But you can customize this however you want. Read more ',(0,o.kt)("a",{parentName:"p",href:"defining-navgraphs"},"here"))),(0,o.kt)("p",null,"However, you can override some defaults:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"navGraph: NavGraphSpec")," - By default ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraphs.root"),", but it can change depending on your ",(0,o.kt)("a",{parentName:"p",href:"defining-navgraphs"},"navigation graphs setup"),". Only destinations that belong to this navigation graph or its nested navigation graphs can be navigated to using the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavController")," connected to this navigation host.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"modifier: Modifier")," - modifier applied to this Composable. It affects the screen Composable.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"startRoute: Route"),": used to override the start route set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraph"),' "startRoute" parameter at runtime. If you have some condition upon which you want to start on some other screen, then pass it explicitly with this parameter. ',(0,o.kt)("inlineCode",{parentName:"p"},"Route")," is an interface only implemented by ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraph"),", since both are valid to start at (if you pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraph")," then that ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraph"),"'s start destination will be the first shown).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"engine: NavHostEngine")," - this is the engine that will do all the composable registering in the NavHost. The only reason to override the default here is when you're using ",(0,o.kt)("inlineCode",{parentName:"p"},"animations-core"),", i.e, when you want to animate between screens or have Bottom Sheet destinations. If that is your case, then call ",(0,o.kt)("inlineCode",{parentName:"p"},"rememberAnimatedNavHostEngine")," and pass the result here. Read more ",(0,o.kt)("a",{parentName:"p",href:"styles-and-animations"},"here"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"navController: NavHostController"),": If you need to get a hold of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavController"),", you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"rememberAnimatedNavController")," if you're using ",(0,o.kt)("inlineCode",{parentName:"p"},"animations-core")," and the normal ",(0,o.kt)("inlineCode",{parentName:"p"},"rememberNavController")," if you are not.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"dependenciesContainerBuilder")," offers a ",(0,o.kt)("inlineCode",{parentName:"p"},"DependenciesContainerBuilder")," where you can add dependencies by their class via ",(0,o.kt)("inlineCode",{parentName:"p"},"com.ramcosta.composedestinations.navigation.dependency()"),". The lambda will be called when a Composable screen gets navigated to and ",(0,o.kt)("inlineCode",{parentName:"p"},"DependenciesContainerBuilder")," also implements ",(0,o.kt)("inlineCode",{parentName:"p"},"com.ramcosta.composedestinations.manualcomposablecalls.DestinationScope")," so you can access all information about what ",(0,o.kt)("inlineCode",{parentName:"p"},"DestinationSpec")," is being navigated to. Read more ",(0,o.kt)("a",{parentName:"p",href:"destination-arguments/navhost-level-parameters#use-dependenciescontainerbuilder-to-prepare-dependencies"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"manualComposableCallsBuilder: ManualComposableCallsBuilder.() -> Unit"),": offers a ",(0,o.kt)("inlineCode",{parentName:"p"},"ManualComposableCallsBuilder")," scope where you can\nmake manual calls to specific Destination Composables which belong to the ",(0,o.kt)("inlineCode",{parentName:"p"},"navGraph")," passed in here. This can be useful if you need to pass non-navigation arguments to those specific Composables which the library cannot provide. Read more ",(0,o.kt)("a",{parentName:"p",href:"destination-arguments/navhost-level-parameters"},"here")))),(0,o.kt)("h2",{id:"vanilla-navhosts"},"Vanilla NavHosts"),(0,o.kt)("p",null,"If you are experienced with using Compose Navigation, you may prefer using the same NavHost Composables. This is mainly a preference thing, but, in my opinion, having a ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraphs")," object where you can check your app's destinations and where they belong without all the clutter from the arguments, Composables, etc is beneficial. Besides, being able to quickly and safely check at runtime which navigation graph some route belongs to and getting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavBackStackEntry")," can come in handy."),(0,o.kt)("p",null,"That said, ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination"),"s are still very nice to use with the vanilla NavHosts. There are extension functions on ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraphBuilder")," that will let you register those destinations in a type-safe way and with much less boilerplate.\nHere's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"NavHost( // Replace with AnimatedNavHost if you're using `animations-core`\n    navController = navController,\n    startDestination = GreetingScreenDestination.route,\n) {\n    // Replace with `animatedComposable` if you're using `animations-core`\n    composable(SomeScreenDestination) { // this: NavGraphBuilderDestinationScope<SomeScreenDestination.NavArgs>\n        SomeScreen(\n            arg1 = navArgs.arg1,\n            arg2 = navArgs.arg2,\n            navigator = destinationsNavigator(navController),\n            resultRecipient = resultRecipient(),\n            resultBackNavigator = resultBackNavigator(navController)\n        )\n    }\n\n    // Use `dialogComposable` if the destination has a `style = DestinationStyle.Dialog::class` or subclass\n\n    // Use `bottomSheetComposable` if the destination has a `style = DestinationStyle.BottomSheet::class`\n}\n")),(0,o.kt)("p",null,"If you do this, you should disable the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavGraph"),"s generation. Check ",(0,o.kt)("a",{parentName:"p",href:"defining-navgraphs#manually-defining-navigation-graphs"},"here")," out to do that."))}h.isMDXComponent=!0}}]);