(this.webpackJsonpmathcalc=this.webpackJsonpmathcalc||[]).push([[86],{281:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));a(0);var s=a(7),n=a(283),i=a(34),r=a(121),o=a(280),c=a.n(o),l=a(1),d=Object(r.a)((function(e){return{link:{color:"#3f51b5",cursor:"pointer","& hover":{textDecoration:"underline"}},hr:{height:"1px",backgroundColor:"#c5c5c5",margin:"1.5rem 0 0 0"}}}));function h(e){var t=d();return Object(l.jsxs)("section",{className:"hero","data-v-23847e07":!0,children:[Object(l.jsx)("div",{style:{padding:"2rem 0.5rem 0rem 0.5rem"},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{style:{margin:"0px"},className:"subtitle is-uppercase has-text-weight-bold",children:Object(l.jsxs)(n.a,{className:"subtitle is-uppercase has-text-weight-bold",separator:Object(l.jsx)(c.a,{fontSize:"small"}),"aria-label":"breadcrumb",children:[e.links?e.links.map((function(e,a){return Object(l.jsx)(s.b,{className:t.link,to:e.url,children:e.urlName},a)})):Object(l.jsx)(l.Fragment,{}),e.pageTitle?Object(l.jsx)(i.a,{component:"h1",className:"",children:e.pageTitle}):Object(l.jsx)(l.Fragment,{})]})}),e.txtTitle?Object(l.jsx)("h1",{style:{marginTop:"1rem"},children:e.txtTitle}):Object(l.jsx)(l.Fragment,{})]})}),Object(l.jsx)("hr",{className:t.hr})]})}},561:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var s=a(35),n=a(22),i=a(80),r=a(0),o=a.n(r),c=a(116),l=a(66),d=a(5),h=a(634),u=a(153),b=a(302),j=a(261),m=a(269),p=a(262),f=a(266),x=a(562),g=a(322),O=a(87),y=a(281),w=a(1);function v(e){var t=k();return Object(w.jsx)(h.a,Object(i.a)({className:t.root,disableRipple:!0,color:"default",checkedIcon:Object(w.jsx)("span",{className:Object(d.a)(t.icon,t.checkedIcon)}),icon:Object(w.jsx)("span",{className:t.icon})},e))}var k=Object(c.a)((function(e){return{root:{flexGrow:1,overflow:"hidden"},button:Object(n.a)({height:40,minWidth:"175px",background:"transparent linear-gradient(180deg, rgb(0 85 255) 0%, #1962BF 100%) 0% 0% no-repeat padding-box",fontSize:15,color:"white",marginTop:14,padding:"26px",position:"relative"},e.breakpoints.down("xs"),{minWidth:"146px",fontSize:"13px"}),backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},table:{"& td":{padding:"15px",border:"1px solid #e2e2e2"},"& th":{padding:"14px",backgroundColor:"#e5a400",border:"1px solid #e2e2e2",color:e.palette.common.white}},tableCalc:{"& th,td":{padding:"4px"}},icon:{borderRadius:"50%",width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}}}}));function N(){var e=k(),t=o.a.useState(null),a=Object(s.a)(t,2),c=a[0],d=a[1],h=o.a.useState(null),N=Object(s.a)(h,2),S=N[0],I=N[1],T=Object(r.useState)({startDay:0,startHour:0,startMinute:0,startSec:0,opDay:0,opHour:0,opMinute:0,opSec:0,resultDay:0,resultHour:0,resultMinute:0,resultSec:0,operation:"add",resInsecs:0}),C=Object(s.a)(T,2),M=C[0],H=C[1],D=function(e){H(Object(i.a)(Object(i.a)({},M),{},Object(n.a)({},e.target.id,e.target.value)))},E=function(e){e.target.value<=59&&H(Object(i.a)(Object(i.a)({},M),{},Object(n.a)({},e.target.id,e.target.value)))},z=function(e){e.target.value<=23&&H(Object(i.a)(Object(i.a)({},M),{},Object(n.a)({},e.target.id,e.target.value)))};Object(r.useEffect)((function(){!function(e){q(!0);var t,a,s,n,r,o,c=""===M.startDay?0:parseFloat(M.startDay),l=""===M.startHour?0:parseFloat(M.startHour),h=""===M.startMinute?0:parseFloat(M.startMinute),u=(""===M.startSec?0:parseFloat(M.startSec))+60*h+60*l*60+24*c*60*60,b=""===M.opDay?0:parseFloat(M.opDay),j=""===M.opHour?0:parseFloat(M.opHour),m=""===M.opMinute?0:parseFloat(M.opMinute),p=(""===M.opSec?0:parseFloat(M.opSec))+60*m+60*j*60+24*b*60*60,f=0;"add"===M.operation?f=u+p:(p>u&&(d(!0),I("Start Time should be greater than End time")),f=u-p),t=(f-f%86400)/86400,a=((r=f%86400)-r%3600)/3600,s=((o=r%3600)-o%60)/60,n=o%60,H(Object(i.a)(Object(i.a)({},M),{},{resultDay:t,resultHour:a,resultMinute:s,resultSec:n,resInsecs:f})),setTimeout((function(){q(!1)}),250)}()}),[M.startDay,M.startHour,M.startMinute,M.startSec,M.opDay,M.opHour,M.opMinute,M.opSec,M.operation]);var A=o.a.useState(!1),F=Object(s.a)(A,2),L=F[0],q=F[1];return Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)(O.a,{open:c,msg:S,handleClose:function(e){d(null),I(null)}}),Object(w.jsx)(u.a,{className:e.backdrop,open:L,children:Object(w.jsx)(b.a,{color:"inherit"})}),Object(w.jsxs)(l.a,{children:[Object(w.jsx)("meta",{charSet:"utf-8"}),Object(w.jsx)("title",{children:"Time calculator - mathcalc"}),Object(w.jsx)("meta",{name:"keywords",content:"mathcalc,time calculator, online time calculator, online free time calculator, time"}),Object(w.jsx)("meta",{name:"description",content:"Time calculator can be used to add or subtract two time values."}),Object(w.jsx)("meta",{name:"author",content:"Mathcalc"}),Object(w.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"})]}),Object(w.jsx)(j.a,{maxWidth:"xl",children:Object(w.jsx)("div",{className:e.root,children:Object(w.jsxs)(m.a,{container:!0,children:[Object(w.jsxs)(m.a,{item:!0,lg:8,md:8,sm:12,children:[Object(w.jsx)(y.a,{pageTitle:"Time Calculator",links:[{url:"/general/",urlName:"General"}]}),Object(w.jsx)("section",{className:"hero","data-v-23847e07":!0,children:Object(w.jsx)("div",{style:{padding:"2rem 0.5rem"},children:Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("h1",{className:"subtitle is-spaced is-uppercase has-text-weight-bold",children:"ONLINE FREE TIME CALCULATOR"}),Object(w.jsx)("p",{style:{lineHeight:"27px"},className:"  has-text-grey subtitle is-6",children:'This calculator can be used to "add" or "subtract" two time values. Input fields can be left blank, which will be taken as 0 by default.   '})]})})}),Object(w.jsx)(p.a,{raised:!0,className:"box",elevation:1,children:Object(w.jsxs)("table",{className:e.tableCalc,children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Days\xa0"}),Object(w.jsx)("th",{children:"Hour"}),Object(w.jsx)("th",{children:"Minute"}),Object(w.jsx)("th",{children:"Second"})]})}),Object(w.jsxs)("tbody",{children:[Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:Object(w.jsx)("input",{id:"startDay",type:"number",onChange:D,value:M.startDay,className:"input"})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{id:"startHour",max:"23",type:"number",onChange:z,value:M.startHour,className:"input"})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{id:"startMinute",max:"59",type:"number",onChange:E,value:M.startMinute,className:"input"})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{id:"startSec",max:"59",type:"number",onChange:E,value:M.startSec,className:"input"})})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{colSpan:"1"}),Object(w.jsx)("td",{colSpan:"2",children:Object(w.jsx)(f.a,{component:"fieldset",children:Object(w.jsxs)(x.a,{style:{flexWrap:"nowrap",flexDirection:"row",alignItems:"center"},id:"operation",defaultValue:"add",name:"customized-radios",children:[Object(w.jsx)(g.a,{value:"add",control:Object(w.jsx)(v,{id:"operation",onChange:D}),label:"Add"}),Object(w.jsx)(g.a,{value:"subtract",control:Object(w.jsx)(v,{id:"operation",onChange:D}),label:"Subtract"})]})})}),Object(w.jsx)("td",{colSpan:"1"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:Object(w.jsx)("input",{id:"opDay",type:"number",onChange:D,value:M.opDay,className:"input"})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{id:"opHour",max:"24",type:"number",onChange:z,value:M.opHour,className:"input"})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{id:"opMinute",max:"59",type:"number",onChange:E,value:M.opMinute,className:"input"})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{id:"opSec",max:"59",type:"number",onChange:E,value:M.opSec,className:"input"})})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{colSpan:"2"}),Object(w.jsx)("td",{colSpan:"2",style:{fontSize:"20px"},children:"="}),Object(w.jsx)("td",{colSpan:"2"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:Object(w.jsx)("input",{disabled:!0,className:"input",value:M.resultDay})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{disabled:!0,className:"input",value:M.resultHour})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{disabled:!0,className:"input",value:M.resultMinute})}),Object(w.jsx)("td",{children:Object(w.jsx)("input",{disabled:!0,className:"input",value:M.resultSec})})]}),Object(w.jsx)("tr",{children:Object(w.jsxs)("td",{colSpan:"6",children:["= \xa0",M.resInsecs+" Seconds"," "]})}),Object(w.jsx)("tr",{children:Object(w.jsxs)("td",{colSpan:"6",children:["= \xa0",Math.floor(M.resInsecs/60)+" Minutes "+M.resInsecs%60+" Seconds"," "]})}),Object(w.jsx)("tr",{children:Object(w.jsxs)("td",{colSpan:"6",children:["= \xa0",Math.floor(M.resInsecs/3600)+" Hours "+Math.floor(M.resInsecs%3600/60)+" Minutes "+M.resInsecs%3600%60+" Seconds"," "]})}),Object(w.jsx)("tr",{children:Object(w.jsxs)("td",{colSpan:"6",children:["= \xa0",(M.resInsecs-M.resInsecs%86400)/86400+" Days "+Math.floor(M.resInsecs%86400/3600)+" Hours "+Math.floor(M.resInsecs%3600/60)+" Minutes "+M.resInsecs%3600%60+" Seconds"," "]})})]})]})}),Object(w.jsx)("br",{}),Object(w.jsxs)(p.a,{raised:!0,className:"box",elevation:1,children:[Object(w.jsx)("h3",{className:"title is-4",children:"Time Calculator"}),Object(w.jsx)("p",{children:' This calculator can be used to "add" or "subtract" two time values. Input fields can be left blank, which will be taken as 0 by default.'}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{children:"Like other numbers, time can be added or subtracted. However, due to how time is defined, there exist differences in how calculations must be computed when compared to decimal numbers. The following table shows some common units of time."}),Object(w.jsx)("br",{}),Object(w.jsxs)("table",{className:e.table,children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Unit"}),Object(w.jsx)("th",{children:"Definition"})]})}),Object(w.jsxs)("tbody",{children:[Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:" millennium"}),Object(w.jsx)("td",{children:" 1,000 years"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"century"}),Object(w.jsx)("td",{children:"100 years"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"decade"}),Object(w.jsx)("td",{children:"10 years"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"year (average)"}),Object(w.jsx)("td",{children:"365.242 days or 12 months"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"common year"}),Object(w.jsx)("td",{children:" 365 days or 12 months"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"leap year"}),Object(w.jsx)("td",{children:" 366 days or 12 months"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"quarter"}),Object(w.jsx)("td",{children:" 3 months"})," "]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"month"}),Object(w.jsx)("td",{children:" 28-31 days Jan., Mar., May, Jul., Aug. Oct., Dec.\u201431 days Apr., Jun., Sep., Nov.\u201430 days. Feb.\u201428 days for common year and 29 days for leap year"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"  week"}),Object(w.jsx)("td",{children:"  7 days"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:" day"}),Object(w.jsx)("td",{children:" 24 hours or 1,440 minutes or 86,400 seconds"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"hour"}),Object(w.jsx)("td",{children:"60 minutes or 3,600 seconds"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"minute"}),Object(w.jsx)("td",{children:"60 seconds"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"second"}),Object(w.jsx)("td",{children:" base unit"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"millisecond"}),Object(w.jsx)("td",{children:" 10-3 second"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"microsecond"}),Object(w.jsx)("td",{children:" 10-6 second"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"nanosecond"}),Object(w.jsx)("td",{children:"10-9 second"})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"picosecond"}),Object(w.jsx)("td",{children:" 10-12 second"})]})]})]}),Object(w.jsx)("br",{}),Object(w.jsx)("h3",{className:"title",children:" Concepts of Time:"}),Object(w.jsx)("h3",{className:"title is-4",children:"Ancient Greece"}),Object(w.jsx)("p",{children:"There exist various concepts of time that have been postulated by different philosophers and scientists over an extensive period of human history. One of the earlier views was presented by the ancient Greek philosopher Aristotle (384-322 BC), who defined time as \"a number of movement in respect of the before and after.\" Essentially, Aristotle's view of time defined it as a measurement of change requiring the existence of some kind of motion or change. He also believed that time was infinite and continuous, and that the universe always did, and always will exist. Interestingly, he was also one of, if not the first person to frame the idea that time existing of two different kinds of non-existence, makes time existing at all, questionable. Aristotle's view is solely one amongst many in the discussion of time, the most controversial of which began with Sir Isaac Newton, and Gottfried Leibniz."}),Object(w.jsx)("br",{}),Object(w.jsx)("h3",{className:"title is-4",children:"Newton & Leibniz"}),Object(w.jsxs)("p",{children:['In Newton\'s Philosophi\xe6 Naturalis Principia Mathematica, Newton tackled the concepts of space and time as absolutes. He argued that absolute time exists and flows without any regard to external factors, and called this "duration." According to Newton, absolute time can only be understood mathematically, since it is imperceptible. Relative time on the other hand, is what humans actually perceive and is a measurement of "duration" through the motion of objects, such as the sun and the moon. Newton\'s realist view is sometimes referred to as Newtonian time.',Object(w.jsx)("br",{}),"Contrary to Newton's assertions, Leibniz believed that time only makes sense in the presence of objects with which it can interact. According to Leibniz, time is nothing more than a concept similar to space and numbers that allows humans to compare and sequence events. Within this argument, known as relational time, time itself cannot be measured. It is simply the way in which humans subjectively perceive and sequence the objects, events and experiences accumulated throughout their lifetimes.",Object(w.jsx)("br",{}),"One of the prominent arguments that arose from the correspondence between Newton's spokesman Samuel Clarke and Leibniz is referred to as the bucket argument, or Newton's bucket. In this argument, water in a bucket hanging stationary from a rope begins with a flat surface, which becomes concave as the water and bucket are made to spin. If the bucket's rotation is then stopped, the water remains concave during the period it continues to spin. Since this example showed that the concavity of the water was not based on an interaction between the bucket and the water, Newton claimed that the water was rotating in relation to a third entity, absolute space. He argued that absolute space was necessary in order to account for cases where a relationalist perspective could not fully explain an object's rotation and acceleration. Despite Leibniz's efforts, this Newtonian concept of physics remained prevalent for nearly two centuries.",Object(w.jsx)("br",{})]}),Object(w.jsx)("br",{}),Object(w.jsx)("h3",{className:"title is-4",children:"Einstein"}),Object(w.jsxs)("p",{children:["While many scientists including Ernst Mach, Albert A. Michelson, Hendrik Lorentz, and Henri Poincare among others contributed to what would ultimately transform theoretical physics and astronomy, the scientist credited with compiling and describing the theory of relativity and the Lorenz Transformation was Albert Einstein. Unlike Newton, who believed that time moved identically for all observers regardless of frame of reference, Einstein, building on Leibniz's view that time is relative, introduced the idea of spacetime as connected, rather than separate concepts of space and time. Einstein posited that the speed of light, c, in vacuum, is the same for all observers, independent of the motion of the light source, and relates distances measured in space with distances measured in time. Essentially, for observers within different inertial frames of reference (different relative velocities), both the shape of space as well as the measurement of time simultaneously change due to the invariance of the speed of light \u2013 a view vastly different from Newton's. A common example depicting this involves a spaceship moving near the speed of light. To an observer on another spaceship moving at a different speed, time would move slower on the spaceship travelling at near the speed of light, and would theoretically stop if the spaceship could actually reach the speed of light.",Object(w.jsx)("br",{}),"To put it simply, if an object moves faster through space, it will move slower through time, and if an object moves slower through space, it will move faster through time. This has to occur in order for the speed of light to remain constant.",Object(w.jsx)("br",{}),"It is worth noting that Einstein's theory of general relativity, after nearly two centuries, finally gave answer to Newton's bucket argument. Within general relativity, an inertial frame of reference is one that follows a geodesic of spacetime, where a geodesic generalizes the idea of a straight line to that of curved spacetime. General relativity states: an object moving against a geodesic experiences a force, an object in free fall does not experience a force because it is following a geodesic, and an object on earth does experience a force because the surface of the planet applies a force against the geodesic to hold the object in place. As such, rather than rotating with respect to \"absolute space\" or with respect to distant stars (as postulated by Ernst Mach), the water in the bucket is concave because it is rotating with respect to a geodesic.",Object(w.jsx)("br",{}),"The various concepts of time that have prevailed throughout different periods of history make it evident that even the most well-conceived theories can be overturned. Despite all of the advances made in quantum physics and other areas of science, time is still not fully understood. It may only be a matter of time before Einstein's absolute constant of light is revoked, and humanity succeeds in traveling to the past!"]}),Object(w.jsx)("br",{}),Object(w.jsx)("h3",{className:"title is-4",children:"How we measure time:"}),Object(w.jsx)("p",{children:"There are two distinct forms of measurement typically used today to determine time: the calendar and the clock. These measurements of time are based on the sexagesimal numeral system which uses 60 as its base. This system originated from ancient Sumer within the 3rd millennium BC, and was adopted by the Babylonians. It is now used in a modified form for measuring time, as well as angles and geographic coordinates. Base 60 is used due to the number 60's status as a superior highly composite number having 12 factors. A superior highly composite number is a natural number, that relative to any other number scaled to some power of itself, has more divisors. The number 60, having as many factors as it does, simplifies many fractions involving sexagesimal numbers, and its mathematical advantage is one of the contributing factors to its continued use today. For example, 1 hour, or 60 minutes, can be evenly divided into 30, 20, 15, 12, 10, 6, 5, 4, 3, 2, and 1 minute, illustrating some of the reasoning behind the sexagesimal system's use in measuring time."}),Object(w.jsx)("br",{}),Object(w.jsx)("h3",{className:"title is-4",children:"Development of the second, minute, and concept of a 24-hour day:"}),"                            ",Object(w.jsxs)("p",{children:[Object(w.jsx)("br",{}),"The Egyptian civilization is often credited as being the first civilization that divided the day into smaller parts, due to documented evidence of their use of sundials. The earliest sundials divided the period between sunrise and sunset into 12 parts. Since sundials could not be used after sunset, measuring the passage of night was more difficult. Egyptian astronomers noticed patterns in a set of stars however, and used 12 of those stars to create 12 divisions of night. Having these two 12 part divisions of day and night is one theory behind where the concept of a 24-hour day originated. The divisions created by the Egyptians however, varied based on the time of the year, with summer hours being much longer than those of winter. It was not until later, around 147 to 127 BC that a Greek astronomer Hipparchus proposed dividing the day into 12 hours of daylight and 12 hours of darkness based on the days of the equinox. This constituted the 24 hours that would later be known as equinoctial hours and would result in days with hours of equal length. Despite this, fixed length hours only became commonplace during the 14th century along with the advent of mechanical clocks.",Object(w.jsx)("br",{}),"Hipparchus also developed a system of longitude lines encompassing 360 degrees, which was later subdivided into 360 degrees of latitude and longitude by Claudius Ptolemy. Each degree was divided into 60 parts, each of which was again divided into 60 smaller parts that became known as the minute and second respectively.",Object(w.jsx)("br",{}),"While many different calendar systems were developed by various civilizations over long periods of time, the calendar most commonly used worldwide is the Gregorian calendar. It was introduced by Pope Gregory XIII in 1582 and is largely based on the Julian calendar, a Roman solar calendar proposed by Julius Caesar in 45 BC. The Julian calendar was inaccurate and allowed the astronomical equinoxes and solstices to advance against it by approximately 11 minutes per year. The Gregorian calendar significantly improved upon this discrepancy. Refer to the date calculator for further details on the history of the Gregorian calendar."]}),Object(w.jsx)("br",{}),Object(w.jsx)("h3",{className:"title is-4",children:"Early timekeeping devices:"}),Object(w.jsxs)("p",{children:["Early devices for measuring time were highly varied based on culture and location, and generally were intended to divide the day or night into different periods meant to regulate work or religious practices. Some of these include oil lamps and candle clocks which were used to mark the passage of time from one event to another, rather than actually tell the time of the day. The water clock, also known as a clepsydra, is arguably the most accurate clock of the ancient world. Clepsydras function based on the regulated flow of water from, or into a container where the water is then measured to determine the passage of time. In the 14th century, hourglasses, also known as sandglasses, first appeared and were originally similar in purpose to oil lamps and candle clocks. Eventually, as clocks became more accurate, they were used to calibrate hourglasses to measure specific periods of time.",Object(w.jsx)("br",{}),'The first pendulum mechanical clock was created by Christiaan Huygens in 1656, and was the first clock regulated by a mechanism with a "natural" period of oscillation. Huygens managed to refine his pendulum clock to have errors of fewer than 10 seconds a day. Today however, atomic clocks are the most accurate devices for time measurement. Atomic clocks use an electronic oscillator to keep track of passing time based on cesium atomic resonance. While other types of atomic clocks exist, cesium atomic clocks are the most common and accurate. The second, the SI unit of time, is also calibrated based on measuring periods of the radiation of a cesium atom.']})]}),Object(w.jsx)("br",{})]}),Object(w.jsx)(m.a,{item:!0,lg:4,md:4,sm:!1})]})})})]})}}}]);
//# sourceMappingURL=86.3c1cad3f.chunk.js.map