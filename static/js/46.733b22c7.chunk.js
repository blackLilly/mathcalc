(this.webpackJsonpmathcalc=this.webpackJsonpmathcalc||[]).push([[46],{287:function(e,t,a){"use strict";var r=a(45),i=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),c=(0,r(a(47)).default)(n.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=c},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a(0);var r=a(7),i=a(290),n=a(34),c=a(126),s=a(287),l=a.n(s),o=a(1),m=Object(c.a)((function(e){return{link:{color:"#3f51b5",cursor:"pointer","& hover":{textDecoration:"underline"}},hr:{height:"1px",backgroundColor:"#c5c5c5",margin:"1.5rem 0 0 0"}}}));function d(e){var t=m();return Object(o.jsxs)("section",{className:"hero","data-v-23847e07":!0,children:[Object(o.jsx)("div",{style:{padding:"2rem 0.5rem 0rem 0.5rem"},children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{style:{margin:"0px"},className:"subtitle is-uppercase has-text-weight-bold",children:Object(o.jsxs)(i.a,{className:"subtitle is-uppercase has-text-weight-bold",separator:Object(o.jsx)(l.a,{fontSize:"small"}),"aria-label":"breadcrumb",children:[e.links?e.links.map((function(e,a){return Object(o.jsx)(r.b,{className:t.link,to:e.url,children:e.urlName},a)})):Object(o.jsx)(o.Fragment,{}),e.pageTitle?Object(o.jsx)(n.a,{component:"h1",className:"",children:e.pageTitle}):Object(o.jsx)(o.Fragment,{})]})}),e.txtTitle?Object(o.jsx)("h1",{style:{marginTop:"1rem"},children:e.txtTitle}):Object(o.jsx)(o.Fragment,{})]})}),Object(o.jsx)("hr",{className:t.hr})]})}},290:function(e,t,a){"use strict";var r=a(2),i=a(42),n=a(3),c=a(0),s=(a(79),a(4),a(5)),l=a(6),o=a(34),m=a(17),d=a(29),x=Object(d.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),u=a(77);var p=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(n.a)(e,["classes"]);return c.createElement(u.a,Object(r.a)({component:"li",className:t.root,focusRipple:!0},a),c.createElement(x,{className:t.icon}))}));var h=c.forwardRef((function(e,t){var a=e.children,l=e.classes,m=e.className,d=e.component,x=void 0===d?"nav":d,u=e.expandText,h=void 0===u?"Show path":u,b=e.itemsAfterCollapse,j=void 0===b?1:b,f=e.itemsBeforeCollapse,g=void 0===f?1:f,O=e.maxItems,v=void 0===O?8:O,y=e.separator,N=void 0===y?"/":y,w=Object(n.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),L=c.useState(!1),k=L[0],C=L[1],S=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return c.createElement(o.a,Object(r.a)({ref:t,component:x,color:"textSecondary",className:Object(s.a)(l.root,m)},w),c.createElement("ol",{className:l.ol},function(e,t,a){return e.reduce((function(r,i,n){return n<e.length-1?r=r.concat(i,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(n),className:t},a)):r.push(i),r}),[])}(k||v&&S.length<=v?S:function(e){return g+j>=e.length?e:[].concat(Object(i.a)(e.slice(0,g)),[c.createElement(p,{"aria-label":h,key:"ellipsis",onClick:function(e){C(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(i.a)(e.slice(e.length-j,e.length)))}(S),l.separator,N)))}));t.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)},299:function(e,t,a){"use strict";a(0);var r=a(1);t.a=function(e){return Object(r.jsxs)("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:e.style,children:[Object(r.jsx)("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z",fill:"#F23030"}),Object(r.jsx)("path",{d:"M7.68718 7.68718L15.8787 9.73507L16 9.76539L16.1213 9.73507L24.3128 7.68718L22.2649 15.8787L22.2346 16L22.2649 16.1213L24.3128 24.3128L16.1213 22.2649L16 22.2346L15.8787 22.2649L7.68718 24.3128L9.73507 16.1213L9.76539 16L9.73507 15.8787L7.68718 7.68718Z",stroke:"white"})]})}},606:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));a(0);var r=a(119),i=a(268),n=a(276),c=a(299),s=a(67),l=a(90),o=a(7),m=a(288),d=a(1),x=Object(r.a)((function(e){return{root:{flexGrow:1},control:{padding:e.spacing(2)},divcalc:{textDecoration:"none",border:"1px solid #e6ecf1",margin:"10px",padding:"16px",boxSizing:"border-box",cursor:"pointer",position:"relative",display:"inline-flex",flexDirection:"row",alignItems:"center",placeSelf:"stretch",color:"#242a31",backgroundColor:"#fff",borderRadius:"3px",boxShadow:"0 3px 8px 0 rgb(216 216 216)",minWidth:"250px",maxWidth:"100%",minHeight:"100px"},calcHeader:{fontStyle:"normal",fontSize:"22px",lineHeight:"39px",textAlign:"center",marginTop:"20px",marginBottom:"10px",fontWeight:"600"},calcContent:{display:"flex",flexWrap:"wrap",padding:"0px",justifyContent:"center"}}}));function u(){var e=x();return Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsxs)(s.b,{children:[Object(d.jsx)("title",{children:"Matrix calculators online"}),Object(d.jsx)("meta",{name:"keywords",content:"mathcalc, matrix, matrix 2x2, matrix 3x3, inverse , add, subtract, multiplication, inverse, trace, determinant"}),Object(d.jsx)("meta",{name:"description",content:"Mathcalc-Online matrix calculator to do matrix operations like addition, subtraction, multiplication and more"}),Object(d.jsx)("meta",{name:"author",content:"mathcalc"}),Object(d.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),Object(d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),Object(d.jsx)(i.a,{maxWidth:"xl",children:Object(d.jsxs)(n.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(d.jsxs)(n.a,{item:!0,lg:8,md:8,sm:12,children:[Object(d.jsx)(m.a,{links:[{url:"/maths/",urlName:"Mathematics"}],pageTitle:"Matrix CALCULATORS ONLINE"}),Object(d.jsx)("section",{className:"hero","data-v-23847e07":!0,children:Object(d.jsx)("div",{style:{padding:"2rem 0.5rem"},children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("p",{className:"  has-text-grey",children:"In mathematics, a matrix is a rectangular array or table of numbers, symbols, or expressions, arranged in rows and columns."})})})}),Object(d.jsx)("div",{className:e.calcContent,children:[{url:"/maths/matrices/add",title:"Add matrices"},{url:"/maths/matrices/subtract",title:"Subtract matrices"},{url:"/maths/matrix/multiplication",title:"Multiplication of matrices"},{url:"/maths/matrix/trace",title:"Trace of a matrix"},{url:"/maths/matrix/determinant",title:"Determinant of a matrix"},{url:"/maths/matrix/matrix-inverse",title:"Inverse of a matrix"},{url:"/maths/matrix/matrix-transpose",title:"Transpose of a matrix"},{url:"/maths/matrix/matrix-rank",title:"Rank of a matrix"}].map((function(e){return Object(d.jsxs)(o.b,{to:e.url,className:"divLink",children:[Object(d.jsx)(c.a,{style:{width:"30px",margin:"0px 16px 0px 16px"}})," ",Object(d.jsx)("span",{children:e.title})]},e.url)}))})]}),Object(d.jsx)(n.a,{item:!0,lg:4,md:4,sm:!1})]})}),Object(d.jsx)(l.a,{})]})}}}]);
//# sourceMappingURL=46.733b22c7.chunk.js.map