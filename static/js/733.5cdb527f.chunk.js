"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{603:function(e,n,t){t.d(n,{au:function(){return s},fh:function(){return r},q5:function(){return c},z1:function(){return o}});var i=t(294).Z.create({baseURL:"https://api.themoviedb.org/3"}),a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFjNzI1MTA4Mjc2ZDkyM2RlMjQzOTE4NzUwNjJjNSIsInN1YiI6IjY1YjUwMjhhNGYzM2FkMDE3YTBiYTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVikyztACIvDZrPSWL56RBOBtNnjH3jDZKwNSqkZN54"}},r=function(e){return i.get("/movie/".concat(e,"?language=en-US&api_key=d4ac725108276d923de24391875062c5"),a)},s=function(e){return i.get("/movie/".concat(e,"/credits?language=en-US&api_key=d4ac725108276d923de24391875062c5"),a)},c=function(e){return i.get("/movie/".concat(e,"/reviews?language=en-US&api_key=d4ac725108276d923de24391875062c5"),a)},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(n,"&api_key=d4ac725108276d923de24391875062c5"),a)}},733:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var i=t(861),a=t(439),r=t(757),s=t.n(r),c=t(791),o=t(689),l=t(87),d=t(603),u=t(119),h={moviecontainer:"movie-details-page_moviecontainer__yVJGB",title:"movie-details-page_title__lvyVs",btn:"movie-details-page_btn__PzWul",addinfo:"movie-details-page_addinfo__4mrBI",infolink:"movie-details-page_infolink__wbpwY"},f=t(184),m=function(){var e,n=(0,c.useState)([]),t=(0,a.Z)(n,2),r=t[0],m=t[1],v=(0,c.useState)(!1),j=(0,a.Z)(v,2),p=j[0],x=j[1],g=(0,c.useState)(null),_=(0,a.Z)(g,2),k=_[0],N=_[1],w=(0,o.UO)().id,b=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/",y=(0,o.s0)();(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,d.fh)(w);case 4:n=e.sent,t=n.data,m(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),N(e.t0.message);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]);var I=r||{},Z=I.title,S=I.poster_path,U=I.overview,J=I.vote_average,z=I.genres;return(0,f.jsxs)("div",{children:[p&&(0,f.jsx)(u.Z,{}),k&&(0,f.jsxs)("p",{children:["Error: ",k]}),(0,f.jsx)("button",{className:h.btn,onClick:function(){return y(b)},type:"button",children:"Go back"}),r&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:h.moviecontainer,children:[(0,f.jsx)("img",{src:S?"https://image.tmdb.org/t/p/w300"+S:"",alt:Z}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:Z}),(0,f.jsx)("h2",{className:h.title,children:"User Score:"}),(0,f.jsxs)("p",{children:[Math.round(10*J),"%"]}),(0,f.jsx)("h2",{className:h.title,children:"Overview: "}),(0,f.jsx)("p",{children:U}),(0,f.jsx)("h2",{className:h.title,children:"Genres:"}),(0,f.jsx)("p",{className:h.genres,children:z&&z.map((function(e){return e.name})).join(", ")})]})]}),(0,f.jsxs)("div",{className:h.infocontainer,children:[(0,f.jsx)("h3",{className:h.title,children:"Additional information"}),(0,f.jsxs)("ul",{className:h.addinfo,children:[(0,f.jsx)("li",{children:(0,f.jsx)(l.rU,{className:h.infolink,to:"cast",state:{from:b},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(l.rU,{className:h.infolink,to:"reviews",state:{from:b},children:"Reviews"})})]}),(0,f.jsx)(c.Suspense,{fallback:(0,f.jsx)(u.Z,{}),children:(0,f.jsx)(o.j3,{})})]})]})]})}}}]);
//# sourceMappingURL=733.5cdb527f.chunk.js.map