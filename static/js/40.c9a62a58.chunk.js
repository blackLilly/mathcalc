(this.webpackJsonpmathcalc=this.webpackJsonpmathcalc||[]).push([[40],{287:function(e,t,a){"use strict";var c=a(45),r=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),s=(0,c(a(47)).default)(n.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=s},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a(0);var c=a(7),r=a(289),n=a(34),s=a(126),i=a(287),l=a.n(i),o=a(1),d=Object(s.a)((function(e){return{link:{color:"#3f51b5",cursor:"pointer","& hover":{textDecoration:"underline"}},hr:{height:"1px",backgroundColor:"#c5c5c5",margin:"1.5rem 0 0 0"}}}));function m(e){var t=d();return Object(o.jsxs)("section",{className:"hero","data-v-23847e07":!0,children:[Object(o.jsx)("div",{style:{padding:"2rem 0.5rem 0rem 0.5rem"},children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{style:{margin:"0px"},className:"subtitle is-uppercase has-text-weight-bold",children:Object(o.jsxs)(r.a,{className:"subtitle is-uppercase has-text-weight-bold",separator:Object(o.jsx)(l.a,{fontSize:"small"}),"aria-label":"breadcrumb",children:[e.links?e.links.map((function(e,a){return Object(o.jsx)(c.b,{className:t.link,to:e.url,children:e.urlName},a)})):Object(o.jsx)(o.Fragment,{}),e.pageTitle?Object(o.jsx)(n.a,{component:"h1",className:"",children:e.pageTitle}):Object(o.jsx)(o.Fragment,{})]})}),e.txtTitle?Object(o.jsx)("h1",{style:{marginTop:"1rem"},children:e.txtTitle}):Object(o.jsx)(o.Fragment,{})]})}),Object(o.jsx)("hr",{className:t.hr})]})}},289:function(e,t,a){"use strict";var c=a(2),r=a(42),n=a(3),s=a(0),i=(a(79),a(4),a(5)),l=a(6),o=a(34),d=a(17),m=a(29),j=Object(m.a)(s.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),u=a(77);var b=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(d.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(n.a)(e,["classes"]);return s.createElement(u.a,Object(c.a)({component:"li",className:t.root,focusRipple:!0},a),s.createElement(j,{className:t.icon}))}));var h=s.forwardRef((function(e,t){var a=e.children,l=e.classes,d=e.className,m=e.component,j=void 0===m?"nav":m,u=e.expandText,h=void 0===u?"Show path":u,x=e.itemsAfterCollapse,p=void 0===x?1:x,f=e.itemsBeforeCollapse,O=void 0===f?1:f,v=e.maxItems,g=void 0===v?8:v,y=e.separator,N=void 0===y?"/":y,w=Object(n.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=s.useState(!1),E=C[0],R=C[1],S=s.Children.toArray(a).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return s.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return s.createElement(o.a,Object(c.a)({ref:t,component:j,color:"textSecondary",className:Object(i.a)(l.root,d)},w),s.createElement("ol",{className:l.ol},function(e,t,a){return e.reduce((function(c,r,n){return n<e.length-1?c=c.concat(r,s.createElement("li",{"aria-hidden":!0,key:"separator-".concat(n),className:t},a)):c.push(r),c}),[])}(E||g&&S.length<=g?S:function(e){return O+p>=e.length?e:[].concat(Object(r.a)(e.slice(0,O)),[s.createElement(b,{"aria-label":h,key:"ellipsis",onClick:function(e){R(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-p,e.length)))}(S),l.separator,N)))}));t.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)},290:function(e,t,a){"use strict";var c=a(45),r=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),s=(0,c(a(47)).default)(n.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.default=s},305:function(e,t,a){"use strict";var c=a(45),r=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),s=(0,c(a(47)).default)(n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"}),"InfoRounded");t.default=s},611:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var c=a(81),r=a(35),n=a(22),s=a(0),i=a.n(s),l=a(119),o=a(268),d=a(269),m=a(276),j=a(34),u=a(203),b=a(281),h=a(290),x=a.n(h),p=a(305),f=a.n(p),O=a(67),v=a(288),g=a(88),y=a(1),N=Object(l.a)((function(e){return{root:{flexGrow:1,overflow:"hidden"},divcalc:{borderRadius:"12px",padding:"1em",color:"#314259"},button:Object(n.a)({height:40,fontSize:15,color:"white",marginTop:14,padding:"20px"},e.breakpoints.down("xs"),{minWidth:"146px",fontSize:"13px"}),formelems:{"& > *":{margin:"10px 0px 10px 0px"}},row:{margin:"10px"},imgcenter:{marginLeft:"55px"}}}));function w(){var e=N(),t=i.a.useState(null),a=Object(r.a)(t,2),s=a[0],l=a[1],h=i.a.useState(null),p=Object(r.a)(h,2),w=p[0],C=p[1],E=i.a.useState({noofRows:2,resultvalue:"",showResult:!1}),R=Object(r.a)(E,2),S=R[0],M=R[1];i.a.useEffect((function(){k(S.noofRows)}),[]);var T=function(){try{for(var e=0,t="",a=0;a<S.noofRows;++a)for(var r=0;r<S.noofRows;++r)if(a===r){var n=document.getElementById("matrix".concat("matrixa",a.toString(),"",r.toString())).value;t+=(n=""===n?0:n)<0?"("+n.toString()+") + ":n.toString()+" + ",e+=parseFloat(n)}M(Object(c.a)(Object(c.a)({},S),{},{showResult:!0,resultvalue:t.slice(0,t.length-2)+" = "+e})),s=document.getElementById("matrixresult"),window.scroll(0,function(e){var t=0;if(e.offsetParent){do{t+=e.offsetTop}while(e=e.offsetParent);return[t-70]}}(s))}catch(i){}var s},k=function(e){!function(e,t,a){try{var c=document.createElement("fieldset");c.className="mattrixarea";for(var r=0;r<e;++r){var n=document.createElement("div");n.className="column";for(var s=0;s<t;++s){var i=document.createElement("input");i.id="matrix"+a+r+s,i.className="matrixinput",i.placeholder=""+(r+1)+(s+1),i.type="number",n.appendChild(i)}c.append(n)}for(var l=document.getElementById(a);l.lastElementChild;)l.removeChild(l.lastElementChild);l.append(c)}catch(o){}}(e,e,"matrixa")};return Object(y.jsxs)("div",{className:e.root,children:[Object(y.jsx)(g.a,{open:s,msg:w,handleClose:function(e){l(null),C(null)}}),Object(y.jsxs)(O.b,{children:[Object(y.jsx)("title",{children:"Trace of a matrix online | mathcalc"}),Object(y.jsx)("meta",{name:"keywords",content:"trace, trace of matrix,matrix calculation, online matrix,mathcalc, mathematics"}),Object(y.jsx)("meta",{name:"description",content:"Calculate the trace of a 2x2 matrix, 3x3 matrix, 4x4matrix and more - Mathcalc"}),Object(y.jsx)("meta",{name:"author",content:"mathcalc"}),Object(y.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),Object(y.jsxs)(o.a,{maxWidth:"xl",children:[Object(y.jsx)(v.a,{pageTitle:"Trace of a matrix",links:[{url:"/maths/",urlName:"Mathematics"},{url:"/maths/matrices",urlName:"Matrix"}]}),Object(y.jsx)("section",{className:"hero",children:Object(y.jsx)("div",{style:{padding:"2rem 0.5rem",fontSize:"1rem",lineHeight:"27px"},children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h1",{className:"subtitle is-spaced is-uppercase has-text-weight-bold",children:"TRACE OF A MATRIX"}),Object(y.jsx)("p",{className:"  has-text-grey",children:"Calculate the trace of a matrix online"})]})})}),Object(y.jsxs)(d.a,{elevation:1,className:"box",children:[Object(y.jsx)("h2",{className:"title is-5",children:"Select the Matrix Dimention"}),Object(y.jsx)("p",{className:"title is-6",children:"M x N  and M == N "}),Object(y.jsxs)(m.a,{container:!0,spacing:1,children:[Object(y.jsxs)(m.a,{item:!0,children:[Object(y.jsx)("span",{children:Object(y.jsx)("strong",{children:"M"})}),Object(y.jsx)("br",{}),Object(y.jsx)(b.a,{className:e.formelems,onChange:function(e){e.target.value>9?(l(!0),C("Enter no of rows less than 10")):(l(!1),M(Object(c.a)(Object(c.a)({},S),{},{showResult:!1,noofRows:e.target.value})),k(e.target.value))},placeholder:"Enter the no of rows",value:S.noofRows,id:"inputVal",variant:"outlined",type:"number"}),Object(y.jsx)("br",{})]}),Object(y.jsxs)(m.a,{item:!0,children:[Object(y.jsx)("span",{children:Object(y.jsx)("strong",{children:"N"})}),Object(y.jsx)("br",{}),Object(y.jsx)(b.a,{className:e.formelems,onChange:function(e){M(Object(c.a)(Object(c.a)({},S),{},Object(n.a)({},e.target.id,e.target.value)))},value:S.noofRows,id:"inputVal",disabled:!0,variant:"outlined",type:"number"}),Object(y.jsx)("br",{})]})]}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)(f.a,{color:"primary"}),Object(y.jsx)("p",{children:"\xa0 Empty fields considered as Zero (0)"})]})]}),Object(y.jsx)(d.a,{elevation:1,className:"box",children:Object(y.jsxs)(m.a,{container:!0,spacing:2,justify:"space-evenly",children:[Object(y.jsxs)(m.a,{item:!0,children:[Object(y.jsx)(j.a,{children:"Matrix A"}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("div",{id:"matrixa"})})]}),Object(y.jsx)(m.a,{item:!0,style:{display:"flex"},children:Object(y.jsx)("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"50px",minHeight:"50px"},children:Object(y.jsxs)("div",{children:[Object(y.jsx)("br",{}),Object(y.jsx)(u.a,{variant:"contained",color:"primary",className:e.button,startIcon:Object(y.jsx)(x.a,{}),onClick:function(){T()},children:"Calculate"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),S.showResult?Object(y.jsxs)(j.a,{variant:"h1",className:"title is-5",children:["Result :",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"tr(A) =  ",S.resultvalue]}):Object(y.jsx)(y.Fragment,{}),Object(y.jsx)("br",{})]})})})]})}),Object(y.jsx)("br",{}),Object(y.jsxs)(d.a,{elevation:1,className:"box",children:[Object(y.jsx)("h1",{className:"title is-5",children:"Trace of a Matrix"}),Object(y.jsx)("p",{children:"In linear algebra, the trace of a square matrix A, denoted tr(A), is defined to be the sum of elements on the main diagonal (from the upper left to the lower right) of A."}),Object(y.jsx)("br",{}),Object(y.jsx)("p",{children:"The trace of a matrix is the sum of its (complex) eigenvalues (counted with multiplicities), and it is invariant with respect to a change of basis. This characterization can be used to define the trace of a linear operator in general. The trace is only defined for a square matrix (n \xd7 n)."})]}),Object(y.jsx)("br",{})]})]})}}}]);
//# sourceMappingURL=40.c9a62a58.chunk.js.map