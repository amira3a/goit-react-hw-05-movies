"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{530:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(439),c=n(791),i="Movies_movieList__UibTY",s="Movies_searchForm__H4jJ4",a=n(87),u=n(184);var o=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],o=t[1],l=(0,c.useState)([]),h=(0,r.Z)(l,2),d=h[0],f=h[1],v=(0,c.useState)(!1),m=(0,r.Z)(v,2),p=m[0],_=m[1],j=(0,a.lr)(),x=(0,r.Z)(j,2),b=x[0],g=x[1];return(0,c.useEffect)((function(){var e=b.get("query");e&&(_(!0),fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat("605d61cf3adf4a00957fd8ad779797b5")).then((function(e){return e.json()})).then((function(e){f(e.results),_(!1)})).catch((function(e){return console.log(e)})))}),[b]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Search Movies"}),(0,u.jsxs)("form",{className:s,onSubmit:function(e){e.preventDefault(),e&&g({query:n})},children:[(0,u.jsx)("input",{type:"text",value:n,onChange:function(e){o(e.target.value)}}),(0,u.jsx)("button",{type:"submit",children:"Search"})]}),p?(0,u.jsx)("div",{children:"Loading..."}):(0,u.jsx)("ul",{className:i,children:d.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsxs)(a.rU,{to:"/movies/".concat(e.id),children:[e.title," (",e.release_date.substring(0,4),")"]})},e.id)}))})]})}}}]);
//# sourceMappingURL=530.0de3f683.chunk.js.map