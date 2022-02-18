"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[303],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,c=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(c,r(r({ref:t},m),{},{components:a})):n.createElement(c,r({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},749:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={sidebar_position:6},l="Navigation Host Composables",p={unversionedId:"navhosts",id:"navhosts",title:"Navigation Host Composables",description:"Compose destinations has a recommended way to set up your NavHosts and an alternative one. If you are not sure which to use and don't have much experience with Compose Navigation, go with the recommended DestinationsNavHost way. On the other hand, if you have a lot of experience with vanilla Compose Navigation and just want the type safety of Compose Destinations, you might prefer to use NavHost / AnimatedNavHost.",source:"@site/docs/navhosts.md",sourceDirName:".",slug:"/navhosts",permalink:"/navhosts",editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/docs/navhosts.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Navigating back with a result",permalink:"/navigation/backresult"},next:{title:"Defining your Navigation Graphs",permalink:"/defining-navgraphs"}},m=[{value:"DestinationsNavHost",id:"destinationsnavhost",children:[],level:2},{value:"Vanilla NavHosts",id:"vanilla-navhosts",children:[],level:2}],h={toc:m};function u(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"navigation-host-composables"},"Navigation Host Composables"),(0,i.kt)("p",null,"Compose destinations has a recommended way to set up your ",(0,i.kt)("inlineCode",{parentName:"p"},"NavHosts")," and an alternative one. If you are not sure which to use and don't have much experience with Compose Navigation, go with the recommended ",(0,i.kt)("a",{parentName:"p",href:"#DestinationsNavHost"},"DestinationsNavHost")," way. On the other hand, if you have a lot of experience with vanilla Compose Navigation and just want the type safety of Compose Destinations, you might prefer to use ",(0,i.kt)("a",{parentName:"p",href:"#Vanilla-NavHosts"},"NavHost / AnimatedNavHost"),"."),(0,i.kt)("h2",{id:"destinationsnavhost"},"DestinationsNavHost"),(0,i.kt)("p",null,'Compose Destinations has a "NavHost-like" Composable that you can use as a base for all your screens.'),(0,i.kt)("p",null,"It internally calls the Compose Navigation ",(0,i.kt)("inlineCode",{parentName:"p"},"NavHost")," but automatically adds all ",(0,i.kt)("inlineCode",{parentName:"p"},"@Destination")," annotated Composables of a given ",(0,i.kt)("inlineCode",{parentName:"p"},"NavGraph")," instance to the NavHost. When a destination gets navigated to, it calls the corresponding generated ",(0,i.kt)("inlineCode",{parentName:"p"},"Content")," method which prepares the navigation arguments and calls your annotated Composable."),(0,i.kt)("p",null,"Most times, using it is as simple as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"DestinationsNavHost(navGraph = NavGraphs.root)\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"NavGraphs"),' is a generated object that contains the definition of all your navigation graphs and their destinations. By default, all annotated composable will belong to the "root" navigation graph. But you can customize this however you want. Read more ',(0,i.kt)("a",{parentName:"p",href:"defining-navgraphs"},"here")))),(0,i.kt)("p",null,"However, you can override some defaults:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"navGraph: NavGraphSpec")," - In case you have multiple top-level navigation graphs or ",(0,i.kt)("a",{parentName:"p",href:"defining-navgraphs#manually-defining-navigation-graphs"},"you have disabled the generation of ",(0,i.kt)("inlineCode",{parentName:"a"},"NavGraphs"))," you can pass a specific one here. If not, it will always be ",(0,i.kt)("inlineCode",{parentName:"p"},"NavGraphs.root"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modifier: Modifier")," - modifier applied to this Composable. It affects the screen Composable.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"startRoute: Route"),": used to override the start route set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"NavGraph"),' "startRoute" parameter at runtime. If you have some condition upon which you want to start on some other screen, then pass it explicitly with this parameter. ',(0,i.kt)("inlineCode",{parentName:"p"},"Route")," is an interface only implemented by ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NavGraph"),", since both are valid to start at (if you pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"NavGraph")," then that ",(0,i.kt)("inlineCode",{parentName:"p"},"NavGraph"),"'s start destination will be the first shown).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"engine: NavHostEngine")," - this is the engine that will do all the composable registering in the NavHost. The only reason to override the default here is when you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"animations-core"),", i.e, when you want to animate between screens or have Bottom Sheet destinations. If that is your case, then call ",(0,i.kt)("inlineCode",{parentName:"p"},"rememberAnimatedNavHostEngine")," and pass the result here. Read more ",(0,i.kt)("a",{parentName:"p",href:"styles-and-animations"},"here"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"navController: NavHostController"),": If you need to get a hold of the ",(0,i.kt)("inlineCode",{parentName:"p"},"NavController"),", you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"rememberAnimatedNavController")," if you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"animations-core")," and the normal ",(0,i.kt)("inlineCode",{parentName:"p"},"rememberNavController")," if you are not.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"manualComposableCallsBuilder: ManualComposableCallsBuilder.() -> Unit"),": offers a ",(0,i.kt)("inlineCode",{parentName:"p"},"ManualComposableCallsBuilder")," scope where you can\nmake manual calls to specific Destination Composables which belong to the ",(0,i.kt)("inlineCode",{parentName:"p"},"navGraph")," passed in here. This can be useful if you need to pass non-navigation arguments to those specific Composables which the library cannot provide. Read more ",(0,i.kt)("a",{parentName:"p",href:"destination-arguments/navhost-level-parameters"},"here")))),(0,i.kt)("h2",{id:"vanilla-navhosts"},"Vanilla NavHosts"),(0,i.kt)("p",null,"If you are experienced with using Compose Navigation, you may prefer using the same NavHost Composables. This is mainly a preference thing, but, in my opinion, having a ",(0,i.kt)("inlineCode",{parentName:"p"},"NavGraphs")," object where you can check your app's destinations and where they belong without all the clutter from the arguments, Composables, etc is beneficial. Besides, being able to quickly and safely check at runtime which navigation graph some route belongs to and getting the ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"NavBackStackEntry")," can come in handy."),(0,i.kt)("p",null,"That said, ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination"),"s are still very nice to use with the vanilla Composables. There are extension functions on ",(0,i.kt)("inlineCode",{parentName:"p"},"NavGraphBuilder")," that will let you register those destinations in a type-safe way and with much less boilerplate.\nHere's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"NavHost( // Replace with AnimatedNavHost if you're using `animations-core`\n    navController = navController,\n    startDestination = GreetingScreenDestination.route,\n) {\n    // Replace with `animatedComposable` if you're using `animations-core`\n    composable(GreetingScreenDestination) { args, navBackStackEntry ->\n        GreetingScreen(\n            arg1 = args.arg1,\n            arg2 = args.arg2,\n            //...\n        )\n    }\n    \n    composable(SomeScreenWithoutNavigationArgsDestination) { navBackStackEntry -> //no args param if the destination doesn't have them\n        SomeScreenWithoutNavigationArgs()\n    }\n\n    // Use `dialogComposable` if the destination has a `style = DestinationStyle.Dialog::class` or subclass\n\n    // Use `bottomSheetComposable` if the destination has a `style = DestinationStyle.BottomSheet::class`\n}\n")),(0,i.kt)("p",null,"If you do this, you should disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"NavGraph"),"s generation. Check ",(0,i.kt)("a",{parentName:"p",href:"defining-navgraphs#manually-defining-navigation-graphs"},"here")," out to do that."))}u.isMDXComponent=!0}}]);