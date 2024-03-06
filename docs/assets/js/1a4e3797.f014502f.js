"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[920],{3607:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(7294),n=a(2263),s=a(5924),l=a(5742),c=a(9960),o=a(5999);const u=["zero","one","two","few","many","other"];function m(e){return u.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:m(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:m(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function p(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),s=a.pluralForms.indexOf(n);return r[Math.min(s,r.length-1)]}(a,t,e)}}var d=a(6775),g=a(412);const f=function(){const e=(0,d.k6)(),t=(0,d.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)();return{searchValue:g.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const r=new URLSearchParams(t.search);a?r.set("q",a):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var y=a(22),E=a(8202),I=a(2539),S=a(726),R=a(1073),w=a(311);const P={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};var b=a(3926);function _(e){let{searchResult:{document:t,type:a,page:n,tokens:s,metadata:l}}=e;const o=0===a,u=2===a,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;return o||m.push(n.t),r.createElement("article",{className:P.searchResultItem},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,I.C)(h,s):(0,S.o)(h,(0,R.m)(l,"t"),s,100)}})),m.length>0&&r.createElement("p",{className:P.searchResultItemPath},(0,b.e)(m)),u&&r.createElement("p",{className:P.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,S.o)(t.t,(0,R.m)(l,"t"),s,100)}}))}const v=function(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=p(),{searchValue:a,updateSearchPath:c}=f(),[u,m]=(0,r.useState)(a),[h,i]=(0,r.useState)(),[d,g]=(0,r.useState)(),I=(0,r.useMemo)((()=>u?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:u}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[u]);(0,r.useEffect)((()=>{c(u),h&&(u?h(u,(e=>{g(e)})):g(void 0))}),[u,h]);const S=(0,r.useCallback)((e=>{m(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==u&&m(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,y.w)(e);i((()=>(0,E.v)(t,a,100)))}()}),[e]),r.createElement(s.Z,null,r.createElement(l.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,I)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,I),r.createElement("input",{type:"search",name:"q",className:P.searchQueryInput,"aria-label":"Search",onChange:S,value:u,autoComplete:"off",autoFocus:!0}),!h&&u&&r.createElement("div",null,r.createElement(w.Z,null)),d&&(d.length>0?r.createElement("p",null,t(d.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:d.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,d&&d.map((e=>r.createElement(_,{key:e.document.i,searchResult:e}))))))}}}]);