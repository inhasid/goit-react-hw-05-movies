"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[974],{603:function(e,n,t){t.d(n,{au:function(){return s},fh:function(){return r},q5:function(){return c},z1:function(){return o}});var i=t(294).Z.create({baseURL:"https://api.themoviedb.org/3"}),a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFjNzI1MTA4Mjc2ZDkyM2RlMjQzOTE4NzUwNjJjNSIsInN1YiI6IjY1YjUwMjhhNGYzM2FkMDE3YTBiYTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVikyztACIvDZrPSWL56RBOBtNnjH3jDZKwNSqkZN54"}},r=function(e){return i.get("/movie/".concat(e,"?language=en-US&api_key=d4ac725108276d923de24391875062c5"),a)},s=function(e){return i.get("/movie/".concat(e,"/credits?language=en-US&api_key=d4ac725108276d923de24391875062c5"),a)},c=function(e){return i.get("/movie/".concat(e,"/reviews?language=en-US&api_key=d4ac725108276d923de24391875062c5"),a)},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(n,"&api_key=d4ac725108276d923de24391875062c5"),a)}},974:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var i=t(861),a=t(439),r=t(757),s=t.n(r),c=t(791),o=t(689),l=t(87),d=t(603),u={moviecontainer:"movie-details_moviecontainer__yB+EN",title:"movie-details_title__0HjVA",btn:"movie-details_btn__7lR9k",addinfo:"movie-details_addinfo__DQp8z",infolink:"movie-details_infolink__0vAZv"},h=t(184),f=function(){var e,n=(0,c.useState)([]),t=(0,a.Z)(n,2),r=t[0],f=t[1],v=(0,c.useState)(!1),j=(0,a.Z)(v,2),m=j[0],p=j[1],x=(0,c.useState)(null),g=(0,a.Z)(x,2),_=g[0],k=g[1],N=(0,o.UO)().id,b=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/",w=(0,o.s0)();(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,(0,d.fh)(N);case 4:n=e.sent,t=n.data,f(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k(e.t0.message);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[N]);var y=r||{},I=y.title,S=y.poster_path,U=y.overview,Z=y.vote_average,z=y.genres;return(0,h.jsxs)("div",{children:[m&&(0,h.jsx)("p",{children:"...Loading"}),_&&(0,h.jsxs)("p",{children:["Error: ",_]}),(0,h.jsx)("button",{className:u.btn,onClick:function(){return w(b)},type:"button",children:"Go back"}),r&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:u.moviecontainer,children:[(0,h.jsx)("img",{src:S?"https://image.tmdb.org/t/p/w300"+S:"",alt:I}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:I}),(0,h.jsx)("h2",{className:u.title,children:"User Score:"}),(0,h.jsxs)("p",{children:[Math.round(10*Z),"%"]}),(0,h.jsx)("h2",{className:u.title,children:"Overview: "}),(0,h.jsx)("p",{children:U}),(0,h.jsx)("h2",{className:u.title,children:"Genres:"}),(0,h.jsx)("p",{className:u.genres,children:z&&z.map((function(e){return e.name})).join(", ")})]})]}),(0,h.jsxs)("div",{className:u.infocontainer,children:[(0,h.jsx)("h3",{className:u.title,children:"Additional information"}),(0,h.jsxs)("ul",{className:u.addinfo,children:[(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{className:u.infolink,to:"cast",state:{from:b},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{className:u.infolink,to:"reviews",state:{from:b},children:"Reviews"})})]}),(0,h.jsx)(c.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(o.j3,{})})]})]})]})},v=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(f,{})})}}}]);
//# sourceMappingURL=974.90a54a2d.chunk.js.map