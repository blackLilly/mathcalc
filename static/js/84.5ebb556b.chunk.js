(this.webpackJsonpmathcalc=this.webpackJsonpmathcalc||[]).push([[84],{288:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));a(0);var n=a(7),o=a(289),s=a(34),r=a(126),c=a(287),i=a.n(c),l=a(1),d=Object(r.a)((function(e){return{link:{color:"#3f51b5",cursor:"pointer","& hover":{textDecoration:"underline"}},hr:{height:"1px",backgroundColor:"#c5c5c5",margin:"1.5rem 0 0 0"}}}));function h(e){var t=d();return Object(l.jsxs)("section",{className:"hero","data-v-23847e07":!0,children:[Object(l.jsx)("div",{style:{padding:"2rem 0.5rem 0rem 0.5rem"},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{style:{margin:"0px"},className:"subtitle is-uppercase has-text-weight-bold",children:Object(l.jsxs)(o.a,{className:"subtitle is-uppercase has-text-weight-bold",separator:Object(l.jsx)(i.a,{fontSize:"small"}),"aria-label":"breadcrumb",children:[e.links?e.links.map((function(e,a){return Object(l.jsx)(n.b,{className:t.link,to:e.url,children:e.urlName},a)})):Object(l.jsx)(l.Fragment,{}),e.pageTitle?Object(l.jsx)(s.a,{component:"h1",className:"",children:e.pageTitle}):Object(l.jsx)(l.Fragment,{})]})}),e.txtTitle?Object(l.jsx)("h1",{style:{marginTop:"1rem"},children:e.txtTitle}):Object(l.jsx)(l.Fragment,{})]})}),Object(l.jsx)("hr",{className:t.hr})]})}},624:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Y}));var n=a(35),o=a(22),s=a(0),r=a.n(s),c=a(6),i=a(119),l=a(67),d=a(160),h=a(306),u=a(268),j=a(276),b=a(269),m=a(203),x=a(536),g=a(275),O=a(34),y=a(357),p=a.n(y),f=a(534),w=a(333),v=a(653),k=a(88),D=a(338),S=a(339),T=a(341),N=a(337),A=a(527),M=a(340),C=a(288),I=a(1),F=Object(c.a)((function(e){return{head:{backgroundColor:"#e5a400",borderRadius:"3px 3px 0px 0px",color:e.palette.common.white},body:{fontSize:14,width:"35%",border:"0.1rem solid #e2e2e2",textAlign:"left"}}}))(T.a),H=Object(c.a)((function(e){return{root:{overflow:"hidden"}}}))(M.a),z=Object(i.a)((function(e){return{root:{flexGrow:1,overflow:"hidden"},button:Object(o.a)({height:40,minWidth:"243px !important",background:"transparent linear-gradient(180deg, rgb(0 85 255) 0%, #1962BF 100%) 0% 0% no-repeat padding-box",fontSize:15,color:"#fff",marginTop:14,padding:"26px",position:"relative",width:"100%"},e.breakpoints.down("xs"),{minWidth:"146px",fontSize:"13px"}),backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},input:{width:"100%"}}}));function Y(){var e=z(),t=r.a.useState(null),a=Object(n.a)(t,2),o=a[0],s=a[1],c=r.a.useState(null),i=Object(n.a)(c,2),y=i[0],T=i[1],Y=r.a.useState((new Date).toLocaleDateString().substr(0,9)),J=Object(n.a)(Y,2),W=J[0],B=J[1],L=r.a.useState((new Date).toLocaleDateString().substr(0,9)),q=Object(n.a)(L,2),G=q[0],R=q[1],E=r.a.useState(0),P=Object(n.a)(E,2),U=P[0],V=P[1],X=r.a.useState(!1),K=Object(n.a)(X,2),Q=K[0],Z=K[1];return Object(I.jsxs)("div",{className:e.root,children:[Object(I.jsx)(k.a,{open:o,msg:y,handleClose:function(e){s(null),T(null)}}),Object(I.jsx)(d.a,{className:e.backdrop,open:Q,children:Object(I.jsx)(h.a,{color:"inherit"})}),Object(I.jsxs)(l.a,{children:[Object(I.jsx)("meta",{charSet:"utf-8"}),Object(I.jsx)("title",{children:"Age calculator - mathcalc"}),Object(I.jsx)("meta",{name:"keywords",content:"mathcalc, age calculator, free online calculator, free age calculator, age , age calculation"}),Object(I.jsx)("meta",{name:"description",content:"Use Mathcalc age calculator for calculating the the difference between two dates online for free"}),Object(I.jsx)("meta",{name:"author",content:"Mathcalc"}),Object(I.jsx)("meta",{name:"copyright",content:"Mathcalc Inc. Copyright (c) 2021"}),Object(I.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"})]}),Object(I.jsx)(u.a,{maxWidth:"xl",children:Object(I.jsxs)(j.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(I.jsxs)(j.a,{item:!0,lg:8,md:8,sm:12,children:[Object(I.jsx)(C.a,{pageTitle:"Age Calculator",links:[{url:"/general/",urlName:"General"}]}),Object(I.jsx)("br",{}),Object(I.jsxs)(b.a,{raised:!0,elevation:1,className:"box",children:[Object(I.jsx)("h2",{className:"title is-5",children:"Age calculator"}),Object(I.jsx)("p",{children:"The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years, months, weeks, days, hours, minutes, and seconds"}),Object(I.jsx)("br",{}),Object(I.jsx)(w.a,{utils:f.a,children:Object(I.jsxs)(j.a,{container:!0,spacing:4,justify:"center",children:[Object(I.jsx)(j.a,{item:!0,xs:12,sm:6,md:6,lg:6,children:Object(I.jsx)(v.a,{disableToolbar:!0,autoOk:!0,label:"Date of Birth",inputVariant:"outlined",variant:"inline",id:"selectedFrom",value:W,openTo:"year",views:["year","month","date"],format:"DD-MM-yyyy",onChange:function(e){V(0),new Date(e)>new Date(G)?(s(!0),B((new Date).toLocaleDateString().substr(0,9)),T("Choose Date of birth less than the age at the date of"),setTimeout((function(){s(!1)}),2e3)):B(e)},className:e.input})}),Object(I.jsx)(j.a,{item:!0,xs:12,sm:6,md:6,lg:6,children:Object(I.jsx)(v.a,{disableToolbar:!0,autoOk:!0,label:"Age at the Date of",inputVariant:"outlined",variant:"inline",value:G,id:"selectedTo",openTo:"year",views:["year","month","date"],format:"DD-MM-yyyy",onChange:function(e){V(0),new Date(e)<new Date(W)?(s(!0),R((new Date).toLocaleDateString().substr(0,9)),T("Choose Date of birth less than the age at the date of"),setTimeout((function(){s(!1)}),2e3)):R(e)},className:e.input})}),Object(I.jsx)(j.a,{item:!0,xs:12,sm:6,md:6,lg:6,children:Object(I.jsx)(m.a,{variant:"contained",color:"primary",className:e.button,startIcon:Object(I.jsx)(p.a,{}),onClick:function(){!function(e){Z(!0);var t=Math.abs(new Date(G)-new Date(W)),a=Math.floor(U/31536e6)/4;V(t+24*a*60*60*1e3),setTimeout((function(){Z(!1)}),250)}()},children:"Calculate"})})]})}),Object(I.jsx)(x.a,{in:!0,timeout:"auto",unmountOnExit:!0,children:Object(I.jsxs)(g.a,{children:[Object(I.jsx)(O.a,{paragraph:!0,children:Object(I.jsx)("strong",{children:"Result:"})}),Object(I.jsx)(N.a,{style:{overflow:"hidden"},children:Object(I.jsxs)(D.a,{className:e.table,"aria-label":"customized table",children:[Object(I.jsx)(A.a,{children:Object(I.jsx)(M.a,{children:Object(I.jsx)(F,{colSpan:2,children:"Age Calculation"})})}),Object(I.jsxs)(S.a,{children:[Object(I.jsxs)(H,{children:[Object(I.jsx)(F,{children:"Your Age is"}),Object(I.jsx)(F,{align:"right",children:Math.floor(U/31536e6)+" years "+Math.floor(U%31536e6/26352e5)+" Months, and "+Math.floor(U%26352e5/864e5)+" Days"})]}),Object(I.jsxs)(H,{children:[Object(I.jsx)(F,{children:"Your Age in weeks"}),Object(I.jsx)(F,{align:"right",children:Math.floor(U/6048e5)+" weeks "+U%6048e5/864e5+" Days"})]}),Object(I.jsxs)(H,{children:[Object(I.jsx)(F,{children:"Your Age Days"}),Object(I.jsx)(F,{align:"right",children:U/864e5+" Days"})]}),Object(I.jsxs)(H,{children:[Object(I.jsx)(F,{children:"Your Age in Hours"}),Object(I.jsx)(F,{align:"right",children:U/36e5+" Hours"})]}),Object(I.jsxs)(H,{children:[Object(I.jsx)(F,{children:"Your Age in Minutes"}),Object(I.jsx)(F,{align:"right",children:U/6e4+" Minutes"})]}),Object(I.jsxs)(H,{children:[Object(I.jsx)(F,{children:"Your Age in Seconds"}),Object(I.jsx)(F,{align:"right",children:U/1e3+" Seconds"})]})]})]})})]})})]}),Object(I.jsx)("br",{}),Object(I.jsxs)(b.a,{className:"box",elevation:1,children:[Object(I.jsx)("h2",{className:"title is-5",children:"How old am I today?"}),Object(I.jsxs)("p",{children:["If you want to know exactly how old you are today,",Object(I.jsxs)("strong",{children:[" "," "+(new Date).toDateString()+" "]}),"this is possible using mathematical calculation or using my calculator. With my age calculator, you can find out how many years, months, weeks, days and hours have passed since you were born. If you know the time of your birth, enter it into the second box for an even more precise result."]}),Object(I.jsx)("br",{}),Object(I.jsx)("h2",{className:"title is-5",children:"  How old was I on X date?"}),Object(I.jsx)("p",{children:"Should you want to know how old you were on a certain date in past history, or how old you will be at a future date, we've got you covered. Simply make use of our 'Age at Date' option to enter a date in either the past or future. Our calculator will then make a calculation based upon that date."}),Object(I.jsx)("br",{}),Object(I.jsx)("h2",{className:"title is-5",children:"How many days old am I?"}),Object(I.jsx)("p",{children:"People regularly ask how they can work out how many days they've been alive for and I point them to this calculator (it's one of the reasons I created it). Although you can have a rough guess by multiplying your age in years by 365, you could still be out by up to several hundred days. This will in most part be because you'll be working on the basis of your age at your last birthday, and therefore excluding the days since."}),Object(I.jsx)("p",{children:"  There's also leap years to take into consideration. These occur once every four years and mean an extra day in the calendar (366 days in the year). Your best way to get an accurate calculation to how old you are in days is, therefore, to use the age calculator tool provided."}),Object(I.jsx)("br",{}),Object(I.jsx)("h2",{className:"title is-5",children:"  How old was the oldest person ever?"}),Object(I.jsx)("p",{children:"The oldest person ever recorded was Jeanne Calment, a woman from France. She was born on February 21, 1875 and lived until the age of 122 years and 164 days before passing away on August 4, 1997. (ref)"}),Object(I.jsx)("p",{children:" Of the top 10 oldest people ever, all 10 are currently women. The oldest man ever is currently recorded as being Jiroemon Kimura from Japan, who lived until the age of 116 years and 54 days. He passed away on June 12, 2013."}),Object(I.jsx)("p",{children:"With that said, Fredie Blom, a South African man born on 8 May 1904, was recorded as 'unofficially' the world's oldest man ('unofficial' because he wasn't listed in the Guinness Book of World Records). Fredie died on 22 August 2020 at a said age of 116 years, 3 months, and 14 days."}),Object(I.jsx)("br",{}),Object(I.jsx)("h2",{className:"title is-5",children:" How to age well"}),Object(I.jsx)("p",{children:"A government researcher once quipped that \"Age is an issue of mind over matter. If you don't mind, it doesn't matter.\" Luis Bunuel, the Spanish filmmaker, joked that \"Age is something that doesn't matter unless you're a cheese\". Perhaps we can also add 'wine' to that? These quotes are, of course, meant to be whimsical. There's little doubt that while you can't control your age, or predict what might happen to you, you can take actions to keep yourself healthy and give yourself the best chance of reaching a ripe old age."})]}),Object(I.jsx)("br",{})]}),Object(I.jsx)(j.a,{item:!0,lg:4,md:4,sm:!1})]})})]})}}}]);
//# sourceMappingURL=84.5ebb556b.chunk.js.map