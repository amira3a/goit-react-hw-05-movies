"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[571],{571:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(439),c=n(791),i="reviews_reviewList__rIalO",s=n(689),a=n(184);var o=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],o=t[1],u=(0,c.useState)(!1),h=(0,r.Z)(u,2),d=h[0],l=h[1],f=(0,s.UO)().movieId;return(0,c.useEffect)((function(){l(!0),fetch("https://api.themoviedb.org/3/movie/".concat(f,"/reviews?api_key=").concat("605d61cf3adf4a00957fd8ad779797b5")).then((function(e){return e.json()})).then((function(e){o(e.results),l(!1)})).catch((function(e){return console.log(e)}))}),[f]),d?(0,a.jsx)("div",{children:"Loading..."}):(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Reviews"}),(0,a.jsx)("ul",{className:i,children:n.map((function(e){return(0,a.jsxs)("li",{children:[(0,a.jsx)("h2",{children:e.author}),(0,a.jsx)("p",{children:e.content})]},e.id)}))})]})}}}]);
//# sourceMappingURL=571.0032c4a6.chunk.js.map