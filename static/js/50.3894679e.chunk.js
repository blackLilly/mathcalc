(this.webpackJsonpmathcalc=this.webpackJsonpmathcalc||[]).push([[50],{287:function(e,t,a){"use strict";var c=a(45),s=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a(0)),n=(0,c(a(47)).default)(r.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=n},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));a(0);var c=a(7),s=a(289),r=a(34),n=a(126),i=a(287),l=a.n(i),o=a(1),d=Object(n.a)((function(e){return{link:{color:"#3f51b5",cursor:"pointer","& hover":{textDecoration:"underline"}},hr:{height:"1px",backgroundColor:"#c5c5c5",margin:"1.5rem 0 0 0"}}}));function j(e){var t=d();return Object(o.jsxs)("section",{className:"hero","data-v-23847e07":!0,children:[Object(o.jsx)("div",{style:{padding:"2rem 0.5rem 0rem 0.5rem"},children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{style:{margin:"0px"},className:"subtitle is-uppercase has-text-weight-bold",children:Object(o.jsxs)(s.a,{className:"subtitle is-uppercase has-text-weight-bold",separator:Object(o.jsx)(l.a,{fontSize:"small"}),"aria-label":"breadcrumb",children:[e.links?e.links.map((function(e,a){return Object(o.jsx)(c.b,{className:t.link,to:e.url,children:e.urlName},a)})):Object(o.jsx)(o.Fragment,{}),e.pageTitle?Object(o.jsx)(r.a,{component:"h1",className:"",children:e.pageTitle}):Object(o.jsx)(o.Fragment,{})]})}),e.txtTitle?Object(o.jsx)("h1",{style:{marginTop:"1rem"},children:e.txtTitle}):Object(o.jsx)(o.Fragment,{})]})}),Object(o.jsx)("hr",{className:t.hr})]})}},289:function(e,t,a){"use strict";var c=a(2),s=a(42),r=a(3),n=a(0),i=(a(79),a(4),a(5)),l=a(6),o=a(34),d=a(17),j=a(29),u=Object(j.a)(n.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=a(77);var b=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(d.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(r.a)(e,["classes"]);return n.createElement(m.a,Object(c.a)({component:"li",className:t.root,focusRipple:!0},a),n.createElement(u,{className:t.icon}))}));var h=n.forwardRef((function(e,t){var a=e.children,l=e.classes,d=e.className,j=e.component,u=void 0===j?"nav":j,m=e.expandText,h=void 0===m?"Show path":m,x=e.itemsAfterCollapse,p=void 0===x?1:x,O=e.itemsBeforeCollapse,f=void 0===O?1:O,g=e.maxItems,v=void 0===g?8:g,N=e.separator,C=void 0===N?"/":N,y=Object(r.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),w=n.useState(!1),T=w[0],k=w[1],E=n.Children.toArray(a).filter((function(e){return n.isValidElement(e)})).map((function(e,t){return n.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return n.createElement(o.a,Object(c.a)({ref:t,component:u,color:"textSecondary",className:Object(i.a)(l.root,d)},y),n.createElement("ol",{className:l.ol},function(e,t,a){return e.reduce((function(c,s,r){return r<e.length-1?c=c.concat(s,n.createElement("li",{"aria-hidden":!0,key:"separator-".concat(r),className:t},a)):c.push(s),c}),[])}(T||v&&E.length<=v?E:function(e){return f+p>=e.length?e:[].concat(Object(s.a)(e.slice(0,f)),[n.createElement(b,{"aria-label":h,key:"ellipsis",onClick:function(e){k(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(s.a)(e.slice(e.length-p,e.length)))}(E),l.separator,C)))}));t.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)},290:function(e,t,a){"use strict";var c=a(45),s=a(46);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a(0)),n=(0,c(a(47)).default)(r.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.default=n},601:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var c=a(22),s=a(81),r=a(35),n=a(0),i=a.n(n),l=a(119),o=a(268),d=a(269),j=a(34),u=a(203),m=a(290),b=a.n(m),h=a(67),x=a(288),p=a(1),O=Object(l.a)((function(e){return{root:{flexGrow:1,overflow:"hidden"},divcalc:{borderRadius:"12px",padding:"1em",color:"#314259"},formelems:{"& > *":{margin:"10px 0px 10px 0px"}},row:{margin:"10px"},imgcenter:{marginLeft:"55px"}}}));function f(){var e=i.a.useState({resulttext:"",originalText:"",noOfCharswithspace:"0",noOfCharswithoutspace:"0"}),t=Object(r.a)(e,2),a=t[0],n=t[1];var l=O();return Object(p.jsxs)("div",{className:l.root,children:[Object(p.jsxs)(h.b,{children:[Object(p.jsx)("title",{children:"Count letters online | mathcalc"}),Object(p.jsx)("meta",{name:"keywords",content:"count, number, amount, quantity, letters, characters, chars"}),Object(p.jsx)("meta",{name:"description",content:"Counts the number of characters or letters in a text"})]}),Object(p.jsxs)(o.a,{maxWidth:"xl",children:[Object(p.jsx)(x.a,{pageTitle:"Count Letters",links:[{url:"/text-lists/",urlName:"Text and Lists"}]}),Object(p.jsx)("section",{className:"hero","data-v-23847e07":!0,children:Object(p.jsx)("div",{style:{padding:"2rem 0.5rem"},children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"subtitle is-spaced is-uppercase has-text-weight-bold",children:"COUNT LETTERS ONLINE"}),Object(p.jsx)("p",{className:"  has-text-grey",children:"Counts the number of characters or letters in a text"})]})})}),Object(p.jsxs)("div",{className:"container","data-v-14591542":!0,children:[Object(p.jsxs)("div",{className:"columns","data-v-14591542":!0,children:[Object(p.jsx)("div",{className:"column is-6","data-v-14591542":!0,children:Object(p.jsxs)(d.a,{elevation:1,className:"box","data-v-14591542":!0,children:[Object(p.jsxs)("div",{className:"content","data-v-14591542":!0,children:[Object(p.jsx)(j.a,{variant:"h6",className:"text-option",children:"Input Text"}),Object(p.jsx)("br",{}),Object(p.jsx)("textarea",{className:"input",id:"originalText",style:{resize:"none",minWidth:"255px",minHeight:"220px"},value:a.originalText,onChange:function(e){n(Object(s.a)(Object(s.a)({},a),{},Object(c.a)({},e.target.id,e.target.value)))}}),Object(p.jsx)("br",{})]}),Object(p.jsx)(u.a,{variant:"contained",style:{margin:"5px"},className:"shade_me button is-success",startIcon:Object(p.jsx)(b.a,{}),onClick:function(){var e=a.originalText,t=e.toString().length,c=e.toString().replaceAll(" ","").length;n(Object(s.a)(Object(s.a)({},a),{},{noOfCharswithoutspace:c,noOfCharswithspace:t}));var r,i=document.getElementsByClassName("resultDiv")[0];r=i,window.scroll(0,function(e){var t=0;if(e.offsetParent){do{t+=e.offsetTop}while(e=e.offsetParent);return[t]}}(r)),i.className="resultDiv blink_me",setTimeout((function(){i.className="resultDiv"}),1e3)},children:"Count Letters"}),Object(p.jsx)(u.a,{variant:"contained",style:{margin:"5px"},className:"button is-info",onClick:function(){n(Object(s.a)(Object(s.a)({},a),{},{originalText:""}))},children:"Clear"})]})}),Object(p.jsx)("div",{className:"column is-6","data-v-14591542":!0,children:Object(p.jsx)(d.a,{className:"box ","data-v-14591542":!0,children:Object(p.jsxs)("div",{className:"content","data-v-14591542":!0,children:[Object(p.jsx)(j.a,{variant:"h6",className:"text-option",children:"NUMBER OF CHARACTERS/LETTERS"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"resultDiv",children:[Object(p.jsxs)("span",{children:[Object(p.jsxs)("strong",{children:[a.noOfCharswithspace," Characters "]}),"(including whitespaces)"]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("strong",{children:[a.noOfCharswithoutspace," Letters "]}),"(including whitespaces)"]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{})]})})})]}),Object(p.jsx)("br",{})]})]})]})}}}]);
//# sourceMappingURL=50.3894679e.chunk.js.map