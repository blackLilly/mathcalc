(this.webpackJsonpmathcalc=this.webpackJsonpmathcalc||[]).push([[41],{287:function(e,t,a){"use strict";var n=a(45),s=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a(0)),c=(0,n(a(47)).default)(r.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=c},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a(0);var n=a(7),s=a(289),r=a(34),c=a(126),l=a(287),i=a.n(l),o=a(1),d=Object(c.a)((function(e){return{link:{color:"#3f51b5",cursor:"pointer","& hover":{textDecoration:"underline"}},hr:{height:"1px",backgroundColor:"#c5c5c5",margin:"1.5rem 0 0 0"}}}));function m(e){var t=d();return Object(o.jsxs)("section",{className:"hero","data-v-23847e07":!0,children:[Object(o.jsx)("div",{style:{padding:"2rem 0.5rem 0rem 0.5rem"},children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{style:{margin:"0px"},className:"subtitle is-uppercase has-text-weight-bold",children:Object(o.jsxs)(s.a,{className:"subtitle is-uppercase has-text-weight-bold",separator:Object(o.jsx)(i.a,{fontSize:"small"}),"aria-label":"breadcrumb",children:[e.links?e.links.map((function(e,a){return Object(o.jsx)(n.b,{className:t.link,to:e.url,children:e.urlName},a)})):Object(o.jsx)(o.Fragment,{}),e.pageTitle?Object(o.jsx)(r.a,{component:"h1",className:"",children:e.pageTitle}):Object(o.jsx)(o.Fragment,{})]})}),e.txtTitle?Object(o.jsx)("h1",{style:{marginTop:"1rem"},children:e.txtTitle}):Object(o.jsx)(o.Fragment,{})]})}),Object(o.jsx)("hr",{className:t.hr})]})}},289:function(e,t,a){"use strict";var n=a(2),s=a(42),r=a(3),c=a(0),l=(a(79),a(4),a(5)),i=a(6),o=a(34),d=a(17),m=a(29),j=Object(m.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),u=a(77);var x=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(d.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(r.a)(e,["classes"]);return c.createElement(u.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),c.createElement(j,{className:t.icon}))}));var b=c.forwardRef((function(e,t){var a=e.children,i=e.classes,d=e.className,m=e.component,j=void 0===m?"nav":m,u=e.expandText,b=void 0===u?"Show path":u,h=e.itemsAfterCollapse,p=void 0===h?1:h,f=e.itemsBeforeCollapse,O=void 0===f?1:f,v=e.maxItems,g=void 0===v?8:v,y=e.separator,N=void 0===y?"/":y,w=Object(r.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=c.useState(!1),E=C[0],T=C[1],R=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return c.createElement(o.a,Object(n.a)({ref:t,component:j,color:"textSecondary",className:Object(l.a)(i.root,d)},w),c.createElement("ol",{className:i.ol},function(e,t,a){return e.reduce((function(n,s,r){return r<e.length-1?n=n.concat(s,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(r),className:t},a)):n.push(s),n}),[])}(E||g&&R.length<=g?R:function(e){return O+p>=e.length?e:[].concat(Object(s.a)(e.slice(0,O)),[c.createElement(x,{"aria-label":b,key:"ellipsis",onClick:function(e){T(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(s.a)(e.slice(e.length-p,e.length)))}(R),i.separator,N)))}));t.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(b)},290:function(e,t,a){"use strict";var n=a(45),s=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a(0)),c=(0,n(a(47)).default)(r.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.default=c},305:function(e,t,a){"use strict";var n=a(45),s=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a(0)),c=(0,n(a(47)).default)(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"}),"InfoRounded");t.default=c},615:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(81),s=a(35),r=a(22),c=a(0),l=a.n(c),i=a(119),o=a(268),d=a(269),m=a(276),j=a(34),u=a(203),x=a(281),b=a(290),h=a.n(b),p=a(305),f=a.n(p),O=a(67),v=a(288),g=a(88),y=a(1),N=Object(i.a)((function(e){return{root:{flexGrow:1,overflow:"hidden"},divcalc:{borderRadius:"12px",padding:"1em",color:"#314259"},button:Object(r.a)({height:40,fontSize:15,color:"white",marginTop:14,padding:"20px"},e.breakpoints.down("xs"),{minWidth:"146px",fontSize:"13px"}),formelems:{"& > *":{margin:"10px 0px 10px 0px"}},row:{margin:"10px"},imgcenter:{marginLeft:"55px"}}}));function w(){var e=N(),t=l.a.useState(null),a=Object(s.a)(t,2),c=a[0],i=a[1],b=l.a.useState(null),p=Object(s.a)(b,2),w=p[0],C=p[1],E=l.a.useState({noofRows:2,noofCols:2,showResult:!1}),T=Object(s.a)(E,2),R=T[0],S=T[1];function k(e,t){for(var a=[],n=0;n<t;++n){for(var s=[],r=0;r<e;++r)s.push(r);a.push(s)}return a}l.a.useEffect((function(){A(R.noofRows,R.noofCols)}),[R.noofRows,R.noofCols]);var M=function(){try{for(var e=[],t=0;t<R.noofRows;++t){for(var a=[],s=0;s<R.noofCols;++s){var r=document.getElementById("matrix".concat("matrixa",t.toString(),s.toString())).value;r=""===r?0:r,a.push(r)}e.push(a)}var c=function(e){var t=k(R.noofRows,R.noofCols);console.log(e),console.log(k(R.noofRows,R.noofCols));for(var a=0;a<R.noofRows;a++)for(var n=0;n<R.noofCols;n++)e[a]&&t[n]&&(t[n][a]=e[a][n]);return t}(e);console.log(c);for(var l=0;l<R.noofCols;++l)for(var i=0;i<R.noofRows;++i){var o=document.getElementById("matrix".concat("matrixatrans",l.toString(),i.toString()));o.value=c[l][i],o.setAttribute("disabled","disabled")}S(Object(n.a)(Object(n.a)({},R),{},{showResult:!0}))}catch(d){console.log(d)}},z=function(e){(e.target.value>9||e.target.value<1)&&""!==e.target.value?(i(!0),C("Enter no of rows or columns between 1 and 9")):S(Object(n.a)(Object(n.a)({},R),{},Object(r.a)({},e.target.id,e.target.value)))},I=function(e,t,a){try{var n=document.createElement("fieldset");n.className="mattrixarea";for(var s=0;s<e;++s){var r=document.createElement("div");r.className="column";for(var c=0;c<t;++c){var l=document.createElement("input");l.id="matrix"+a+s+c,l.className="matrixinput",l.placeholder=""+(s+1)+(c+1),l.type="number",r.appendChild(l)}n.append(r)}for(var i=document.getElementById(a);i.lastElementChild;)i.removeChild(i.lastElementChild);i.append(n)}catch(o){}},A=function(e,t){I(e,t,"matrixa"),I(t,e,"matrixatrans")};return Object(y.jsxs)("div",{className:e.root,children:[Object(y.jsx)(g.a,{open:c,msg:w,handleClose:function(e){i(null),C(null)}}),Object(y.jsxs)(O.b,{children:[Object(y.jsx)("title",{children:"Transpose of a matrix online | mathcalc"}),Object(y.jsx)("meta",{name:"keywords",content:" Transpose of a matrix, matrix  Transpose,  Transpose, modulas of a matrix"}),Object(y.jsx)("meta",{name:"description",content:"Calculate the  Transpose of a matrix online 2x2 matrix, 3x3 matrix, 4x4matrix and more - Mathcalc"}),Object(y.jsx)("meta",{name:"author",content:"mathcalc"}),Object(y.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),Object(y.jsxs)(o.a,{maxWidth:"xl",children:[Object(y.jsx)(v.a,{pageTitle:"Transpose of a matrix",links:[{url:"/maths/",urlName:"Mathematics"},{url:"/maths/matrices",urlName:"Matrix"}]}),Object(y.jsx)("section",{className:"hero",children:Object(y.jsx)("div",{style:{padding:"2rem 0.5rem",fontSize:"1rem",lineHeight:"27px"},children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h1",{className:"subtitle is-spaced is-uppercase has-text-weight-bold",children:"Transpose OF A MATRIX"}),Object(y.jsx)("p",{className:"  has-text-grey",children:"Calculate the  Transpose of a matrix online"})]})})}),Object(y.jsxs)(d.a,{elevation:1,className:"box",children:[Object(y.jsx)("h2",{className:"title is-5",children:"Select the Matrix Dimention"}),Object(y.jsx)("p",{className:"title is-6",children:"M x N "}),Object(y.jsxs)(m.a,{container:!0,spacing:1,children:[Object(y.jsxs)(m.a,{item:!0,children:[Object(y.jsx)("span",{children:Object(y.jsx)("strong",{children:"M"})}),Object(y.jsx)("br",{}),Object(y.jsx)(x.a,{className:e.formelems,onChange:z,placeholder:"Enter the no of rows",value:R.noofRows,id:"noofRows",variant:"outlined",type:"number"}),Object(y.jsx)("br",{})]}),Object(y.jsxs)(m.a,{item:!0,children:[Object(y.jsx)("span",{children:Object(y.jsx)("strong",{children:"N"})}),Object(y.jsx)("br",{}),Object(y.jsx)(x.a,{className:e.formelems,onChange:z,value:R.noofCols,id:"noofCols",variant:"outlined",type:"number"}),Object(y.jsx)("br",{})]})]}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)(f.a,{color:"primary"}),Object(y.jsx)("p",{children:"\xa0 Empty fields considered as Zero (0)"})]})]}),Object(y.jsxs)(d.a,{elevation:1,className:"box",children:[Object(y.jsx)("br",{}),Object(y.jsxs)(m.a,{container:!0,spacing:2,justify:"space-evenly",children:[Object(y.jsx)(m.a,{item:!0,style:{display:"flex"},children:Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",justifyItems:"center"},children:[Object(y.jsx)("div",{children:Object(y.jsx)(j.a,{children:"A = \xa0"})}),Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("div",{id:"matrixa"})})]})}),Object(y.jsx)(m.a,{item:!0,style:{display:"flex"},children:Object(y.jsx)("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"center",minWidth:"50px",minHeight:"50px"},children:Object(y.jsxs)("div",{children:[Object(y.jsx)("br",{}),Object(y.jsx)(u.a,{variant:"contained",color:"primary",className:e.button,startIcon:Object(y.jsx)(h.a,{}),onClick:function(){M()},children:"Transpose"})]})})}),Object(y.jsx)(m.a,{item:!0,style:{display:"flex"},children:Object(y.jsxs)("div",{style:{display:R.showResult?"flex":"none",alignItems:"center",justifyContent:"center",justifyItems:"center"},children:[Object(y.jsx)("div",{children:Object(y.jsxs)(j.a,{children:["A",Object(y.jsx)("sup",{children:"T"}),"\xa0=\xa0"]})}),Object(y.jsx)("div",{children:Object(y.jsx)("div",{id:"matrixatrans"})})]})})]}),Object(y.jsx)("br",{})]}),Object(y.jsx)("br",{}),Object(y.jsxs)(d.a,{elevation:1,className:"box",children:[Object(y.jsx)("h1",{className:"title is-5",children:" Transpose of a Matrix"}),Object(y.jsx)("p",{children:"The transpose of a matrix is simply a flipped version of the original matrix."}),Object(y.jsx)("br",{}),Object(y.jsx)("p",{children:"We can transpose a matrix by switching its rows with its columns.  "})]}),Object(y.jsx)("br",{})]})]})}}}]);
//# sourceMappingURL=41.8b477f45.chunk.js.map