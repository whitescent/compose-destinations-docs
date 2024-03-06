"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[84],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(r,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=c;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(3117),i=(n(7294),n(3905));const o={sidebar_position:8},s="Styles and Animations",l={unversionedId:"styles-and-animations",id:"version-1.x/styles-and-animations",title:"Styles and Animations",description:"Compose Destinations allows you to define different styles for your Composable screens.",source:"@site/versioned_docs/version-1.x/styles-and-animations.md",sourceDirName:".",slug:"/styles-and-animations",permalink:"/styles-and-animations",draft:!1,editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/versioned_docs/version-1.x/styles-and-animations.md",tags:[],version:"1.x",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Defining your Navigation Graphs",permalink:"/defining-navgraphs"},next:{title:"Deep links",permalink:"/deeplinks"}},r={},p=[{value:"Default Style",id:"default-style",level:2},{value:"Dialog Style",id:"dialog-style",level:2},{value:"BottomSheet Style",id:"bottomsheet-style",level:2},{value:"Animated Style",id:"animated-style",level:2},{value:"Animations / Bottom Sheet setup",id:"animations--bottom-sheet-setup",level:3},{value:"Runtime Style",id:"runtime-style",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"styles-and-animations"},"Styles and Animations"),(0,i.kt)("p",null,"Compose Destinations allows you to define different styles for your Composable screens. ",(0,i.kt)("br",null),'\nThese "styles" describe the way the Composable enters and leaves the screen or how it is shown.'),(0,i.kt)("p",null,"Each destination can have one of these styles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#default-style"},"Default")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dialog-style"},"Dialog")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#bottomsheet-style"},"BottomSheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#animated-style"},"Animated")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#runtime-style"},"Runtime"))),(0,i.kt)("p",null,"See also: ",(0,i.kt)("a",{parentName:"p",href:"#animations-setup"},"Common setup for Animations and Bottom Sheets")),(0,i.kt)("p",null,"The way you can choose this is by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"style")," argument to the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Destination")," annotation, example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination(style = DestinationStyle.Dialog::class)\n@Composable\nfun SomeScreen() { /*...*/ }\n")),(0,i.kt)("p",null,"The class has to be a subclass of the ",(0,i.kt)("inlineCode",{parentName:"p"},"sealed interface DestinationStyle"),"."),(0,i.kt)("h2",{id:"default-style"},"Default Style"),(0,i.kt)("p",null,"As you probably have guessed, this is the style that's going to be applied to all Destinations that don't explicitly use another style.\nThis usually means that no animation and no other special style is used when navigating to it, but, if you're using Compose Destinations ",(0,i.kt)("inlineCode",{parentName:"p"},"animations-core"),", you will be able to change this default to actually have a custom animation. That is done through the arguments of ",(0,i.kt)("inlineCode",{parentName:"p"},"rememberNavHostEngine")," call, which you need to do to pass the returned ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimatedNavHostEngine")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationsNavHost"),"."),(0,i.kt)("h2",{id:"dialog-style"},"Dialog Style"),(0,i.kt)("p",null,"This style will make your Composable be displayed as a dialog above the previous screen. ",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationStyle.Dialog")," is also an interface with a ",(0,i.kt)("inlineCode",{parentName:"p"},"DialogProperties")," field. This enables you to create specific configurations of Dialogs subclassing it with an ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),". Then you can pass that object's class to the style argument, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"object NonDismissableDialog : DestinationStyle.Dialog {\n    override val properties = DialogProperties(\n        dismissOnClickOutside = false,\n        dismissOnBackPress = false,\n    )\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination(style = NonDismissableDialog::class)\n@Composable\nfun SomeDialogScreen() { /*...*/ }\n")),(0,i.kt)("p",null,"If you declare the style as ",(0,i.kt)("inlineCode",{parentName:"p"},"style = DestinationStyle.Dialog::class"),", then the default ",(0,i.kt)("inlineCode",{parentName:"p"},"DialogProperties")," will be used."),(0,i.kt)("h2",{id:"bottomsheet-style"},"BottomSheet Style"),(0,i.kt)("p",null,"This style requires you to use ",(0,i.kt)("inlineCode",{parentName:"p"},"io.github.raamcosta.compose-destinations:animations-core")," instead of the normal ",(0,i.kt)("inlineCode",{parentName:"p"},"core"),". There is a compile-time check that will throw an error if you don't.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationStyle.BottomSheet")," is a simple object that you can use to set this style."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination(style = DestinationStyleBottomSheet::class)\n@Composable\nfun ColumnScope.SomeBottomSheetScreen() { /*...*/ }\n")),(0,i.kt)("p",null,"Notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"ColumnScope")," receiver. This is optional if you're using the bottom sheet style and the reason is that the bottom sheet is internally placed inside a Column, so you can potentially do things that are only possible within that type of scope without needing another Column."),(0,i.kt)("p",null,"Just as if you were working with Accompanist Navigation-Material directly, you will need to wrap your top-most Composable with a ",(0,i.kt)("inlineCode",{parentName:"p"},"ModalBottomSheetLayout"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val navController = rememberNavController()\n\nval bottomSheetNavigator = rememberBottomSheetNavigator()\nnavController.navigatorProvider += bottomSheetNavigator\n\nModalBottomSheetLayout(\n    bottomSheetNavigator = bottomSheetNavigator,\n    // other configuration for you bottom sheet screens, like:\n    sheetShape = RoundedCornerShape(16.dp),\n) {\n    // ...\n    DestinationsNavHost(\n        navController = navController\n        // ...\n    )\n}\n")),(0,i.kt)("h2",{id:"animated-style"},"Animated Style"),(0,i.kt)("p",null,"The animated style enables you to define custom animations for your screen transitions. It requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"io.github.raamcosta.compose-destinations:animations-core")," dependency. With this, you can then subclass ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationStyle.Animated")," interface with an object class and define the enter and exit transitions with normal animation APIs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=ProfileTransitions.kt",title:"ProfileTransitions.kt"},"@OptIn(ExperimentalAnimationApi::class)\nobject ProfileTransitions : DestinationStyle.Animated {\n\n    override fun AnimatedContentScope<NavBackStackEntry>.enterTransition(): EnterTransition? {\n    //...\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"(expand to see the rest of ProfileTransitions.kt)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"    //...\n\n        return when (initialState.appDestination()) {\n            GreetingScreenDestination ->\n                slideInHorizontally(\n                    initialOffsetX = { 1000 },\n                    animationSpec = tween(700)\n                )\n            else -> null\n        }\n    }\n\n    override fun AnimatedContentScope<NavBackStackEntry>.exitTransition(): ExitTransition? {\n\n        return when (targetState.appDestination()) {\n            GreetingScreenDestination ->\n                slideOutHorizontally(\n                    targetOffsetX = { -1000 },\n                    animationSpec = tween(700)\n                )\n            else -> null\n        }\n    }\n\n    override fun AnimatedContentScope<NavBackStackEntry>.popEnterTransition(): EnterTransition? {\n\n        return when (initialState.appDestination()) {\n            GreetingScreenDestination ->\n                slideInHorizontally(\n                    initialOffsetX = { -1000 },\n                    animationSpec = tween(700)\n                )\n            else -> null\n        }\n    }\n\n    override fun AnimatedContentScope<NavBackStackEntry>.popExitTransition(): ExitTransition? {\n\n        return when (targetState.appDestination()) {\n            GreetingScreenDestination ->\n                slideOutHorizontally(\n                    targetOffsetX = { 1000 },\n                    animationSpec = tween(700)\n                )\n            else -> null\n        }\n    }\n}\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination(style = ProfileTransitions::class)\n@Composable\nfun AnimatedVisibilityScope.ProfileScreen() { /*...*/ }\n")),(0,i.kt)("p",null,"Notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimatedVisibilityScope"),' receiver. This scope is available to all "non dialog" and "non bottom sheet" Composables in the nav graph once you\'re using the ',(0,i.kt)("inlineCode",{parentName:"p"},"animations-core")," dependency instead of the normal ",(0,i.kt)("inlineCode",{parentName:"p"},"core"),"."),(0,i.kt)("h3",{id:"animations--bottom-sheet-setup"},"Animations / Bottom Sheet setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you want to use bottom sheet styled screens, you need to replace the normal ",(0,i.kt)("inlineCode",{parentName:"p"},"core")," dependency with the ",(0,i.kt)("inlineCode",{parentName:"p"},"animations-core")," (",(0,i.kt)("inlineCode",{parentName:"p"},"io.github.raamcosta.compose-destinations:animations-core"),") in your module's build.gradle file.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rememberNavHostEngine")," has a parameter to define the default animations. This will make it so that all destinations with no specified style, will actually enter and exit as defined in that parameter.\nBesides, you can also override this default for specific nested navigation graphs. If you want to do that use the ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultAnimationsForNestedNavGraph: Map<NavGraph, NestedNavGraphDefaultAnimations>")," by mapping with navigation graphs to specific default animation parameters.\n",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationsNavHost")," contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"contentAlignment")," parameter which you can also pass in this call as the ",(0,i.kt)("inlineCode",{parentName:"p"},"navHostContentAlignment"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val navHostEngine = rememberNavHostEngine(\n    navHostContentAlignment = Alignment.TopCenter,\n    rootDefaultAnimations = RootNavGraphDefaultAnimations.ACCOMPANIST_FADING, //default `rootDefaultAnimations` means no animations\n    defaultAnimationsForNestedNavGraph = mapOf(\n        NavGraphs.settings to NestedNavGraphDefaultAnimations(\n            enterTransition = { fadeIn(animationSpec = tween(2000)) },\n            exitTransition = { fadeOut(animationSpec = tween(2000)) }\n        ),\n        NavGraphs.otherNestedGraph to NestedNavGraphDefaultAnimations.ACCOMPANIST_FADING\n    ) // all other nav graphs not specified in this map, will get their animations from the `rootDefaultAnimations` above.\n)\n")),(0,i.kt)("h2",{id:"runtime-style"},"Runtime Style"),(0,i.kt)("p",null,"This style is just a marker for KSP task to keep the style of a Destination open at compile time. When using it, you need to manualy call the setter of the style on the corresponding generated Destination at runtime before calling ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationsNavHost"),". If you don't, it will crash with appropriate error message."),(0,i.kt)("p",null,"This feature is useful when you want to use style classes defined on different modules, which might be the only option when for example the style is ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated")," and you need to reference Destinations from other modules."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination(style = DestinationStyle.Runtime::class)\n@Composable\nfun YourScreen(\n    //...\n) { /*...*/ }\n")),(0,i.kt)("p",null,"And then wherever you call ",(0,i.kt)("inlineCode",{parentName:"p"},"DestinationsNavHost")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"// YourScreenTransitions being an object that implements DestinationStyle.Animated (for example)\nYourScreenDestination.style = YourScreenTransitions\n\nDestinationsNavHost(\n    //...\n)\n")))}d.isMDXComponent=!0}}]);