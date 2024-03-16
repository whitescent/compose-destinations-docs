"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[5962],{1447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(4848),i=t(8453);const o={sidebar_position:2},a="Navigating back with a result",l={id:"navigation/backresult",title:"Navigating back with a result",description:"You can send results back in a type-safe and simple way.",source:"@site/docs/navigation/backresult.md",sourceDirName:"navigation",slug:"/navigation/backresult",permalink:"/v2/navigation/backresult",draft:!1,unlisted:!1,editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/docs/navigation/backresult.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/v2/navigation/basics"},next:{title:"Navigation Host Composables",permalink:"/v2/navhosts"}},r={},c=[{value:"Multi module result back case",id:"multi-module-result-back-case",level:2}];function d(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"navigating-back-with-a-result",children:"Navigating back with a result"}),"\n",(0,s.jsx)(n.p,{children:"You can send results back in a type-safe and simple way.\nLet's see how:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Add a ",(0,s.jsx)(n.code,{children:"ResultBackNavigator"})," parameter to the screen that will send results back:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"@Destination(style = AppDialog::class)\n@Composable\nfun GoToProfileConfirmation(\n    resultNavigator: ResultBackNavigator<Boolean>\n) { /*...*/ }\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ResultBackNavigator"})," has a type argument that is corresponding to the type of result you want to send back."]}),"\n",(0,s.jsx)(n.li,{children:"The above example is a Dialog. Modal destinations (dialogs, bottom sheet) are good examples of screens that usually want to send a result to previous screens."}),"\n"]})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["When the screen is done, call ",(0,s.jsx)(n.code,{children:"navigateBack"})," function passing in the result:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"resultNavigator.navigateBack(result = true)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will finish the current screen (same as calling ",(0,s.jsx)(n.code,{children:"navigateUp"})," on normal navigator) and pass ",(0,s.jsx)(n.code,{children:"true"})," to the previous screen."]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Get a result back from such a Destination:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'@Composable\nfun GreetingScreen(\n    navigator: DestinationsNavigator,\n    resultRecipient: ResultRecipient<GoToProfileConfirmationDestination, Boolean>\n) {\n    resultRecipient.onResult(\n        onValue = { resultValue ->\n            println("result received from GoToProfileConfirmationDestination = ${resultValue}")\n            // Do whatever with the result received!\n            // Think of it like a button click, usually you want to call\n            // a view model method here or navigate somewhere\n        },\n        onCancelled = {\n            // `GoToProfileConfirmationDestination` was shown but it was canceled\n            // and no value was set (example: dialog/bottom sheet dismissed)\n            println("did not get result")\n        }\n    )\n\n    // OR  if you don\'t care about onCancelled\n    resultRecipient.onResult { resultValue ->\n        println("got result $resultValue")\n    }\n\n    // Navigate normally to the other screen, example:\n    Button(\n        onClick = {\n            navigator.navigate(GoToProfileConfirmationDestination)\n        }\n    ) { /*...*/ }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Notice the type arguments of ",(0,s.jsx)(n.code,{children:"ResultRecipient"}),". The first is the ",(0,s.jsx)(n.code,{children:"Destination"})," that is going to send results to the recipient and the second is the type of result the recipient is expecting.",(0,s.jsx)(n.br,{}),"\n","The ",(0,s.jsx)(n.code,{children:"onResult"})," listener will be called every time the ",(0,s.jsx)(n.code,{children:"GoToProfileConfirmation"})," (in this case) calls ",(0,s.jsx)(n.code,{children:"navigateBack"})," on its ",(0,s.jsx)(n.code,{children:"ResultBackNavigator"})," and receives the result sent through that call.\nIf ",(0,s.jsx)(n.code,{children:"GoToProfileConfirmation"})," screen is shown and then gets popped out of the back stack and no result is set (examples: it calls ",(0,s.jsx)(n.code,{children:"navigateBack"})," with no result set; it is a dialog and it gets dismissed; etc), then the ",(0,s.jsx)(n.code,{children:"onResult"}),"'s ",(0,s.jsx)(n.code,{children:"onCancelled"})," gets called so that you can react to this."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Safety enforced at compile time:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Screens can have at most one ",(0,s.jsx)(n.code,{children:"ResultBackNavigator"})," argument."]}),"\n",(0,s.jsxs)(n.li,{children:["Screens can have at most one ",(0,s.jsx)(n.code,{children:"ResultRecipient"})," per ",(0,s.jsx)(n.code,{children:"Destination"})," type. This means you can have multiple recipients only if they are related to different Destinations."]}),"\n",(0,s.jsxs)(n.li,{children:["Result type must be one of ",(0,s.jsx)(n.code,{children:"String"}),", ",(0,s.jsx)(n.code,{children:"Boolean"}),", ",(0,s.jsx)(n.code,{children:"Float"}),", ",(0,s.jsx)(n.code,{children:"Int"}),", ",(0,s.jsx)(n.code,{children:"Long"}),", or ",(0,s.jsx)(n.code,{children:"Parcelable"}),". They can be nullable but in the case of Serializables and Parcelables, they cannot contain type arguments."]}),"\n",(0,s.jsxs)(n.li,{children:["For every ",(0,s.jsx)(n.code,{children:"ResultRecipient"})," of a result type ",(0,s.jsx)(n.code,{children:"R"}),", the corresponding destination must also have a ",(0,s.jsx)(n.code,{children:"ResultBackNavigator"})," of that same ",(0,s.jsx)(n.code,{children:"R"})," type."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"multi-module-result-back-case",children:"Multi module result back case"}),"\n",(0,s.jsxs)(n.p,{children:['In multi module apps, you may find a scenario where there is no dependency between result "sender" and result "recipient". In those scenarios, you need to use ',(0,s.jsx)(n.code,{children:"OpenResultRecipient<Boolean>"})," (example) instead of ",(0,s.jsx)(n.code,{children:"ResultRecipient<YourConfirmationDestination, Boolean>"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["After this though, there is no way for the library to know how to pass these recipient to your destination, so you need to pass it manually by calling the destinations asking for this kind of ",(0,s.jsx)(n.code,{children:"OpenResultRecipient"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"DestinationsNavHost(\n//...\n) {\n    composable(YourRecipientScreenDestination) {\n        YourRecipientScreen(\n            //...\n            resultRecipient = resultRecipient<YourConfirmationDestination, Boolean>()\n        )\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"As you can see, the place that calls DestinationsNavHost is the one that decides where the result comes from. This way we can use this for multi module apps where there is no dependency between recipient and result destinations."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"There is no check at compile time, and it's a bit of manual setup to use this feature. So always prefer to use the type-safe approach unless you can't - usually only when the destinations at play belong to different modules."})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);