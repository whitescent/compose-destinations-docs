"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[543],{7613:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=i(4848),s=i(8453);const a={sidebar_position:3},o="Defining Destinations",r={id:"defining-destinations",title:"Defining Destinations",description:'The first step when using Compose Destinations is to mark the Composables you want to navigate to as "Destinations".',source:"@site/versioned_docs/version-1.x/defining-destinations.md",sourceDirName:".",slug:"/defining-destinations",permalink:"/defining-destinations",draft:!1,unlisted:!1,editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/versioned_docs/version-1.x/defining-destinations.md",tags:[],version:"1.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/setup"},next:{title:"Navigation arguments",permalink:"/destination-arguments/navigation-arguments"}},d={},l=[{value:"Destination annotation",id:"destination-annotation",level:2},{value:"Generated Destination object",id:"generated-destination-object",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"defining-destinations",children:"Defining Destinations"}),"\n",(0,t.jsxs)(n.p,{children:['The first step when using Compose Destinations is to mark the Composables you want to navigate to as "Destinations".\nThis will trigger the annotation processor to generate a ',(0,t.jsx)(n.code,{children:"Destination"})," object with all needed information to include the Composable in the navigation graph."]}),"\n",(0,t.jsx)(n.h2,{id:"destination-annotation",children:"Destination annotation"}),"\n",(0,t.jsxs)(n.p,{children:["To mark a Composable as a destination, use the ",(0,t.jsx)(n.code,{children:"@Destination"})," annotation:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"@Destination\n@Composable\nfun WelcomeScreen() {\n    //...\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As is, this will create an entry in the navigation graph with no navigation arguments (check how you declare those ",(0,t.jsx)(n.a,{href:"destination-arguments/navigation-arguments",children:"here"}),'), with route "welcome_screen".']}),"\n",(0,t.jsx)(n.p,{children:"There are a lot of ways to configure this destination.\nLets start with an example where all those are used:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'const val PROFILE_SCREEN_ROUTE = "profile/main"\nconst val PROFILE_NAV_GRAPH = "profile"\n\n@Destination(\n    route = PROFILE_SCREEN_ROUTE,\n    start = true, // \u2757\ufe0f DEPRECATED, read below!\n    navGraph = PROFILE_NAV_GRAPH, // \u2757\ufe0f DEPRECATED, read below!\n    navArgsDelegate = ProfileScreenNavArgs::class,\n    deepLinks = [DeepLink(uriPattern = "https://destinationssample.com/$FULL_ROUTE_PLACEHOLDER")],\n    style = ProfileScreenTransitions::class\n)\n@Composable\nfun ProfileScreen() {\n    //...\n}\n\ndata class ProfileScreenNavArgs(\n    val arg1: Long,\n    val arg2: String\n)\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"route"}),' - This is a way to override the default route for this destination (which would be "profile_screen" in this case)']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"defining-navgraphs#generating-navigation-graphs",children:"(DEPRECATED - read here)"})," ",(0,t.jsx)(n.code,{children:"start"}),' - If true (default is false), marks this destination as the start of its navigation graph. In this case, since this would belong to the "profile" navigation graph (as defined in the ',(0,t.jsx)(n.code,{children:"navGraph"}),") when navigating to that nested navigation graph, this screen would be shown.\nEach navigation graph needs one and only one start destination. A compile-time check is in place to ensure this."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"defining-navgraphs#generating-navigation-graphs",children:"(DEPRECATED - read here)"})," ",(0,t.jsx)(n.code,{children:"navGraph"}),' - By default it will be "root". All destinations that do not specify other with this argument, will belong to the "root" navigation graph. In the case of the example, the destination would belong to the "profile" navigation graph which will be nested in the "root" one. All other destinations with the same ',(0,t.jsx)(n.code,{children:"navGraph"})," argument would also belong to it. You can read more about nested navigation graphs ",(0,t.jsx)(n.a,{href:"defining-navgraphs",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"navArgsDelegate"})," - a way to delegate the navigation arguments to some other data class. Read more ",(0,t.jsx)(n.a,{href:"destination-arguments/navigation-arguments#navigation-arguments-class-delegate",children:"here"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"deepLinks"})," - define deep links to this destination. Read more ",(0,t.jsx)(n.a,{href:"deeplinks",children:"here"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"style"})," - class that defines the style the destination is shown in or is animated when entering or leaving the screen. Read more ",(0,t.jsx)(n.a,{href:"styles-and-animations",children:"here"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"generated-destination-object",children:"Generated Destination object"}),"\n",(0,t.jsxs)(n.p,{children:["Each annotated Composable will generate a ",(0,t.jsx)(n.code,{children:"Destination"})," object. These objects will automatically be used when ",(0,t.jsx)(n.code,{children:"DestinationsNavHost"})," is called.\nHere is an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:"title=ProfileScreenDestination.kt",children:'object ProfileScreenDestination : TypedDestination<ProfileScreenNavArgs> {\n\n    override operator fun invoke(navArgs: ProfileScreenNavArgs): Direction {\n        //...\n    }\n    \n    operator fun invoke(\n        arg1: Long,\n        arg2: String,\n    ): Direction {\n        //...\n    }\n\n    override val route: String = "profile_screen/{arg1}/{arg2}"\n    \n    override val arguments get() = listOf(\n        navArgument("arg1") {\n            //...\n        },\n        navArgument("arg2") {\n            //...\n        }\n    )\n\n    override val deepLinks get() = listOf(\n        navDeepLink {\n            //...\n        }\n    )\n\n    override val style = //...\n\n    @Composable\n    override fun DestinationScope<ProfileScreenNavArgs>.Content(\n        dependenciesContainerBuilder: DependenciesContainerBuilder<ProfileScreenNavArgs>.() -> Unit\n    ) {\n        //...\n    }\n                    \n    override fun argsFrom(navBackStackEntry: NavBackStackEntry): ProfileScreenNavArgs {\n        //...\n    }\n                \n    override fun argsFrom(savedStateHandle: SavedStateHandle): ProfileScreenNavArgs {\n        //...\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Some points about generated Destinations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can invoke these ",(0,t.jsx)(n.code,{children:"Destinations"})," to create a valid ",(0,t.jsx)(n.code,{children:"Direction"})," object you can then pass to the navigators. Read more about navigation ",(0,t.jsx)(n.a,{href:"navigation/basics",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Another reason to interact with ",(0,t.jsx)(n.code,{children:"Destinations"})," is when using the ",(0,t.jsx)(n.code,{children:"argsFrom"})," methods which can be used to get the navigation arguments in the form of a ",(0,t.jsx)(n.code,{children:"data class"})," from either a ",(0,t.jsx)(n.code,{children:"NavBackStackEntry"})," or a ",(0,t.jsx)(n.code,{children:"SavedStateHandle"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If not using ",(0,t.jsx)(n.code,{children:"navArgsDelegate"})," in the annotation, a generated class with name ",(0,t.jsx)(n.code,{children:"NavArgs"})," will be nested in the ",(0,t.jsx)(n.code,{children:"Destination"}),". Either way, the ",(0,t.jsx)(n.code,{children:"argsFrom"})," method will return that data class containing your navigation arguments."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The other fields/methods from ",(0,t.jsx)(n.code,{children:"Destination"})," interface are used to build the navigation graph when calling ",(0,t.jsx)(n.code,{children:"DestinationsNavHost"}),". Usually, there are no reasons to use them in your code. If you feel like you need to use them it might be an indication that there are better ways to do it in the library."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can get the ",(0,t.jsx)(n.code,{children:"Destination"})," correspondent to a certain ",(0,t.jsx)(n.code,{children:"NavBackStackEntry"})," with the ",(0,t.jsx)(n.code,{children:"appDestination"})," extensions which can be found in ",(0,t.jsx)(n.code,{children:"SingleModuleExtensions.kt"}),". Or, in case of multi module setup, just ",(0,t.jsx)(n.code,{children:"destination()"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Besides, on single navigation module apps, ",(0,t.jsx)(n.code,{children:"Destination"})," is a sealed interface, which opens possibilities for your logic to make sure is applied to all of them.\nA nice example of using it is to make some extension functions/properties, like this:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"@get:StringRes\nval Destination.title\n    get(): Int {\n        return when (this) {\n            GreetingScreenDestination -> R.string.greeting_screen\n            ProfileScreenDestination -> R.string.profile_screen\n            SettingsDestination -> R.string.settings_screen\n            FeedDestination -> R.string.feed_screen\n            ThemeSettingsDestination -> R.string.theme_settings_screen\n        }\n    }\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(6540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);