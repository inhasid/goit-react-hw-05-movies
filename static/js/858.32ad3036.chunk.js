"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[858],{858:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(861),r=n(439),s=n(757),i=n.n(s),c=n(791),l=n(87),u=n(294).Z.create({baseURL:"https://api.themoviedb.org/3"}),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFjNzI1MTA4Mjc2ZDkyM2RlMjQzOTE4NzUwNjJjNSIsInN1YiI6IjY1YjUwMjhhNGYzM2FkMDE3YTBiYTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVikyztACIvDZrPSWL56RBOBtNnjH3jDZKwNSqkZN54"}},h=n(119),d={list:"trending_list__AWWyc"},p=n(184),j=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],j=(0,c.useState)(!1),m=(0,r.Z)(j,2),f=m[0],N=m[1],v=(0,c.useState)(null),k=(0,r.Z)(v,2),x=k[0],_=k[1];(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!0),e.next=4,u.get("/trending/movie/day?language=en-US&api_key=d4ac725108276d923de24391875062c5",o);case 4:t=e.sent,n=t.data.results,s(null!==n&&void 0!==n&&n.length?n:[]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),_(e.t0.message);case 12:return e.prev=12,N(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g=n.map((function(e){var t=e.id,n=e.title;return(0,p.jsx)("li",{className:d.item,children:(0,p.jsx)(l.rU,{className:d.link,to:"/movies/".concat(t),children:n})},t)}));return(0,p.jsxs)(p.Fragment,{children:[x&&(0,p.jsx)("p",{className:d.error,children:x}),f&&(0,p.jsx)(h.Z,{}),Boolean(g.length)&&(0,p.jsx)("ul",{className:d.list,children:g})]})},m="home-page_container__RaHax",f="home-page_title__fc3KH",N=function(){return(0,p.jsxs)("div",{className:m,children:[(0,p.jsx)("h1",{className:f,children:"Trending today"}),(0,p.jsx)(j,{})]})}}}]);
//# sourceMappingURL=858.32ad3036.chunk.js.map