"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[802],{802:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(439),s=n(791),c="movieDetails_movieDetails__RUUHi",r="movieDetails_linkList__2wChI",a=n(689),l=n(87),o=n(184),d=(0,s.lazy)((function(){return n.e(392).then(n.bind(n,392))})),h=(0,s.lazy)((function(){return n.e(571).then(n.bind(n,571))}));var u=function(){var e=(0,s.useState)(null),t=(0,i.Z)(e,2),n=t[0],u=t[1],m=(0,s.useState)(!0),j=(0,i.Z)(m,2),f=j[0],v=j[1],x=(0,a.UO)().movieId,p="605d61cf3adf4a00957fd8ad779797b5",_=(0,a.s0)();return(0,s.useEffect)((function(){v(!0),fetch("https://api.themoviedb.org/3//movie/".concat(x,"?api_key=").concat(p)).then((function(e){return e.json()})).then((function(e){u(e),v(!1)})).catch((function(e){return console.log(e)}))}),[x,p]),f?(0,o.jsx)("div",{children:"Loading..."}):(0,o.jsxs)("div",{className:c,children:[(0,o.jsx)("button",{onClick:function(){return _(-1)},children:"Back"}),(0,o.jsx)("h1",{children:n.title}),(0,o.jsx)("p",{children:n.overview}),(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:n.title}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:["Release Date: ",n.release_date]}),(0,o.jsxs)("li",{children:["Runtime: ",n.runtime," minutes"]}),(0,o.jsxs)("li",{children:["Genres: ",n.genres.map((function(e){return e.name})).join(", ")]})]}),(0,o.jsxs)("div",{className:r,children:[(0,o.jsx)(l.rU,{to:"/movies/".concat(n.id,"/cast"),children:" View Cast "}),(0,o.jsx)(l.rU,{to:"/movies/".concat(n.id,"/reviews"),children:"View Reviews "})]}),(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsxs)(a.Z5,{children:[(0,o.jsx)(a.AW,{path:"cast",element:(0,o.jsx)(d,{})}),(0,o.jsx)(a.AW,{path:"reviews",element:(0,o.jsx)(h,{})})]})})]})}}}]);
//# sourceMappingURL=802.ac52c814.chunk.js.map