(this.webpackJsonpmathcalc=this.webpackJsonpmathcalc||[]).push([[38],{287:function(e,t,a){"use strict";var r=a(45),n=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),c=(0,r(a(47)).default)(s.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=c},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));a(0);var r=a(7),n=a(289),s=a(34),c=a(126),l=a(287),i=a.n(l),o=a(1),d=Object(c.a)((function(e){return{link:{color:"#3f51b5",cursor:"pointer","& hover":{textDecoration:"underline"}},hr:{height:"1px",backgroundColor:"#c5c5c5",margin:"1.5rem 0 0 0"}}}));function j(e){var t=d();return Object(o.jsxs)("section",{className:"hero","data-v-23847e07":!0,children:[Object(o.jsx)("div",{style:{padding:"2rem 0.5rem 0rem 0.5rem"},children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{style:{margin:"0px"},className:"subtitle is-uppercase has-text-weight-bold",children:Object(o.jsxs)(n.a,{className:"subtitle is-uppercase has-text-weight-bold",separator:Object(o.jsx)(i.a,{fontSize:"small"}),"aria-label":"breadcrumb",children:[e.links?e.links.map((function(e,a){return Object(o.jsx)(r.b,{className:t.link,to:e.url,children:e.urlName},a)})):Object(o.jsx)(o.Fragment,{}),e.pageTitle?Object(o.jsx)(s.a,{component:"h1",className:"",children:e.pageTitle}):Object(o.jsx)(o.Fragment,{})]})}),e.txtTitle?Object(o.jsx)("h1",{style:{marginTop:"1rem"},children:e.txtTitle}):Object(o.jsx)(o.Fragment,{})]})}),Object(o.jsx)("hr",{className:t.hr})]})}},289:function(e,t,a){"use strict";var r=a(2),n=a(42),s=a(3),c=a(0),l=(a(79),a(4),a(5)),i=a(6),o=a(34),d=a(17),j=a(29),m=Object(j.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),b=a(77);var h=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(d.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(s.a)(e,["classes"]);return c.createElement(b.a,Object(r.a)({component:"li",className:t.root,focusRipple:!0},a),c.createElement(m,{className:t.icon}))}));var x=c.forwardRef((function(e,t){var a=e.children,i=e.classes,d=e.className,j=e.component,m=void 0===j?"nav":j,b=e.expandText,x=void 0===b?"Show path":b,u=e.itemsAfterCollapse,f=void 0===u?1:u,p=e.itemsBeforeCollapse,O=void 0===p?1:p,v=e.maxItems,g=void 0===v?8:v,y=e.separator,N=void 0===y?"/":y,k=Object(s.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),w=c.useState(!1),C=w[0],R=w[1],E=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return c.createElement(o.a,Object(r.a)({ref:t,component:m,color:"textSecondary",className:Object(l.a)(i.root,d)},k),c.createElement("ol",{className:i.ol},function(e,t,a){return e.reduce((function(r,n,s){return s<e.length-1?r=r.concat(n,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(s),className:t},a)):r.push(n),r}),[])}(C||g&&E.length<=g?E:function(e){return O+f>=e.length?e:[].concat(Object(n.a)(e.slice(0,O)),[c.createElement(h,{"aria-label":x,key:"ellipsis",onClick:function(e){R(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(n.a)(e.slice(e.length-f,e.length)))}(E),i.separator,N)))}));t.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(x)},290:function(e,t,a){"use strict";var r=a(45),n=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),c=(0,r(a(47)).default)(s.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.default=c},305:function(e,t,a){"use strict";var r=a(45),n=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(0)),c=(0,r(a(47)).default)(s.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"}),"InfoRounded");t.default=c},616:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var r=a(81),n=a(35),s=a(22),c=a(0),l=a.n(c),i=a(119),o=a(268),d=a(269),j=a(276),m=a(34),b=a(203),h=a(281),x=a(290),u=a.n(x),f=a(305),p=a.n(f),O=a(67),v=a(288),g=a(88),y=a(1),N=Object(i.a)((function(e){return{root:{flexGrow:1,overflow:"hidden"},divcalc:{borderRadius:"12px",padding:"1em",color:"#314259"},button:Object(s.a)({height:40,fontSize:15,color:"white",marginTop:14,padding:"20px"},e.breakpoints.down("xs"),{minWidth:"146px",fontSize:"13px"}),formelems:{"& > *":{margin:"10px 0px 10px 0px"}},row:{margin:"10px"},imgcenter:{marginLeft:"55px"},ulElem:{listStyle:"disc !important",padding:"1.5rem",borderBottom:"solid",borderTop:"solid","& li":{listStyleType:"disc"}}}}));function k(){var e=N(),t=l.a.useState(null),a=Object(n.a)(t,2),c=a[0],i=a[1],x=l.a.useState(null),f=Object(n.a)(x,2),k=f[0],w=f[1],C=l.a.useState({noofRows:2,noofCols:2,resultvalue:"",showResult:!1}),R=Object(n.a)(C,2),E=R[0],S=R[1];l.a.useEffect((function(){L(E.noofRows,E.noofCols)}),[E.noofRows,E.noofCols]);var M=E.noofRows,z=E.noofCols;function T(e,t,a,r){for(var n=0;n<r;n++){var s=e[t][n];e[t][n]=e[a][n],e[a][n]=s}}var A=function(){try{for(var e=[],t=0;t<E.noofRows;++t){for(var a=[],n=0;n<E.noofCols;++n){var s=document.getElementById("matrix".concat("matrixa",t.toString(),n.toString())).value;s=""===s?0:s,a.push(s)}e.push(a)}var c=function(e){for(var t=z,a=0;a<t;a++)if(e[a]&&e[a][a]&&0!==e[a][a]){for(var r=0;r<M;r++)if(r!==a)for(var n=e[r][a]/e[a][a],s=0;s<t;s++)e[r][s]-=n*e[a][s]}else{for(var c=!0,l=a+1;l<M;l++)if(0!==e[l][a]){T(e,a,l,t),c=!1;break}if(c)for(t--,l=0;l<M;l++)e[l][a]=e[l][t];a--}return t}(e);B(E.noofRows,E.noofCols,"matrixresult");for(var l=0;l<E.noofRows;++l)for(var i=0;i<E.noofCols;++i){var o=document.getElementById("matrix".concat("matrixresult",l.toString(),i.toString()));o.value=Math.round(e[l][i]),o.setAttribute("disabled","disabled")}S(Object(r.a)(Object(r.a)({},E),{},{showResult:!0,resultvalue:c}))}catch(d){console.log(d)}},I=function(e){var t;(e.target.value>9||e.target.value<1)&&""!==e.target.value?(i(!0),w("Enter no of rows or columns between 1 and 9")):(i(!1),S(Object(r.a)(Object(r.a)({},E),{},(t={},Object(s.a)(t,e.target.id,e.target.value),Object(s.a)(t,"resultvalue",""),Object(s.a)(t,"showResult",!1),t))))},B=function(e,t,a){try{var r=document.createElement("fieldset");r.className="mattrixarea";for(var n=0;n<e;++n){var s=document.createElement("div");s.className="column";for(var c=0;c<t;++c){var l=document.createElement("input");l.id="matrix"+a+n+c,l.className="matrixinput",l.placeholder=""+(n+1)+(c+1),l.type="number",s.appendChild(l)}r.append(s)}for(var i=document.getElementById(a);i.lastElementChild;)i.removeChild(i.lastElementChild);i.append(r)}catch(o){}},L=function(e,t){B(e,t,"matrixa")};return Object(y.jsxs)("div",{className:e.root,children:[Object(y.jsx)(g.a,{open:c,msg:k,handleClose:function(e){i(null),w(null)}}),Object(y.jsxs)(O.b,{children:[Object(y.jsx)("title",{children:"Rank of a matrix online | mathcalc"}),Object(y.jsx)("meta",{name:"keywords",content:" Rank of a matrix,algebra, mathematics, matrix  Rank,  Rank, modulas of a matrix"}),Object(y.jsx)("meta",{name:"description",content:"Calculate the  Rank of a matrix online 2x2 matrix, 3x3 matrix, 4x4matrix and more - Mathcalc"}),Object(y.jsx)("meta",{name:"author",content:"mathcalc"}),Object(y.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),Object(y.jsxs)(o.a,{maxWidth:"xl",children:[Object(y.jsx)(v.a,{pageTitle:"Rank of a matrix",links:[{url:"/maths/",urlName:"Mathematics"},{url:"/maths/matrices",urlName:"Matrix"}]}),Object(y.jsx)("section",{className:"hero",children:Object(y.jsx)("div",{style:{padding:"2rem 0.5rem",fontSize:"1rem",lineHeight:"27px"},children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h1",{className:"subtitle is-spaced is-uppercase has-text-weight-bold",children:"RANK OF A MATRIX"}),Object(y.jsx)("p",{className:"  has-text-grey",children:"Calculate the  rank of a matrix online"})]})})}),Object(y.jsxs)(d.a,{elevation:1,className:"box",children:[Object(y.jsx)("h2",{className:"title is-5",children:"Select the Matrix Dimention"}),Object(y.jsx)("p",{className:"title is-6",children:"M x N "}),Object(y.jsxs)(j.a,{container:!0,spacing:1,children:[Object(y.jsxs)(j.a,{item:!0,children:[Object(y.jsx)("span",{children:Object(y.jsx)("strong",{children:"M"})}),Object(y.jsx)("br",{}),Object(y.jsx)(h.a,{className:e.formelems,onChange:I,placeholder:"Enter the no of rows",value:E.noofRows,id:"noofRows",variant:"outlined",type:"number"}),Object(y.jsx)("br",{})]}),Object(y.jsxs)(j.a,{item:!0,children:[Object(y.jsx)("span",{children:Object(y.jsx)("strong",{children:"N"})}),Object(y.jsx)("br",{}),Object(y.jsx)(h.a,{className:e.formelems,onChange:I,value:E.noofCols,id:"noofCols",variant:"outlined",type:"number"}),Object(y.jsx)("br",{})]})]}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)(p.a,{color:"primary"}),Object(y.jsx)("p",{children:"\xa0 Empty fields considered as Zero (0)"})]})]}),Object(y.jsxs)(d.a,{elevation:1,className:"box",children:[Object(y.jsx)("br",{}),Object(y.jsxs)(j.a,{container:!0,spacing:2,justify:"space-evenly",children:[Object(y.jsx)(j.a,{item:!0,style:{display:"flex"},children:Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",justifyItems:"center"},children:[Object(y.jsx)("div",{children:Object(y.jsx)(m.a,{children:"A = \xa0"})}),Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("div",{id:"matrixa"})})]})}),Object(y.jsx)(j.a,{item:!0,style:{display:"flex"},children:Object(y.jsx)("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"50px",minHeight:"50px"},children:Object(y.jsxs)("div",{children:[Object(y.jsx)("br",{}),Object(y.jsx)(b.a,{variant:"contained",color:"primary",className:e.button,startIcon:Object(y.jsx)(u.a,{}),onClick:function(){A()},children:"Rank of A"})]})})}),Object(y.jsx)(j.a,{item:!0,style:{display:"flex"},children:Object(y.jsx)("div",{style:{display:E.showResult?"flex":"none",alignItems:"center",justifyContent:"center",justifyItems:"center"},children:Object(y.jsxs)(m.a,{variant:"h1",className:"title is-5",children:["Result :",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"\u03c1(A) \xa0 \xa0=\xa0 \xa0  ",E.resultvalue]})})})]}),Object(y.jsx)("br",{})]}),"  ",Object(y.jsx)("br",{}),Object(y.jsx)(d.a,{style:{display:E.showResult?"block":"none"},elevation:1,className:"box",children:Object(y.jsx)(j.a,{container:!0,justify:"space-evenly",children:Object(y.jsx)(j.a,{item:!0,style:{display:"flex"},children:Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",justifyItems:"center"},children:[Object(y.jsx)("div",{children:Object(y.jsx)(m.a,{children:"Echelon form of Matrix A = \xa0"})}),Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("div",{id:"matrixresult"})})]})})})}),Object(y.jsx)("br",{}),Object(y.jsxs)(d.a,{elevation:1,className:"box",children:[Object(y.jsx)("h1",{className:"title is-5",children:" Rank of a Matrix"}),Object(y.jsx)("p",{children:"The rank of the matrix refers to the number of linearly independent rows or columns in the matrix. \u03c1(A) is used to denote the rank of matrix A. A matrix is said to be of rank zero when all of its elements become zero."}),Object(y.jsx)("br",{}),Object(y.jsx)("p",{children:"The rank of the matrix is the dimension of the vector space  obtained by its columns. The rank of a matrix cannot exceed more than the number of its rows or columns. The rank of the null matrix is zero."}),Object(y.jsx)("br",{}),Object(y.jsx)("h1",{className:"title is-5",children:"Nullity of a Matrix"}),Object(y.jsx)("p",{children:"The nullity of a matrix is defined as the number of vectors present in the null space of a given matrix."}),Object(y.jsx)("br",{}),Object(y.jsx)("p",{children:"In other words, it can be defined as the dimension of the null space of matrix A called the nullity of A. Rank+Nullity is the number of all columns in matrix A"}),Object(y.jsx)("br",{}),Object(y.jsx)("h1",{className:"title is-5",children:"Properties of the Rank of the matrix"}),Object(y.jsxs)("ul",{className:e.ulElem,children:[Object(y.jsx)("li",{children:Object(y.jsx)("p",{children:"Rank Linear algebra refers to finding column rank or row rank collectively known as the rank of the matrix."})}),Object(y.jsx)("br",{}),Object(y.jsx)("li",{children:Object(y.jsx)("p",{children:"Zero matrices have no non-zero row. Hence it has an independent row (or column). So, the rank of the zero matrix is zero."})}),Object(y.jsx)("br",{}),Object(y.jsx)("li",{children:Object(y.jsx)("p",{children:"When the rank equals the smallest dimension it is called full rank matrix."})})]})]}),Object(y.jsx)("br",{})]})]})}}}]);
//# sourceMappingURL=38.0dbfc431.chunk.js.map