"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[153],{9067:function(n,e,t){t.d(e,{Df:function(){return o},IR:function(){return l},Jh:function(){return p},Pg:function(){return u},_r:function(){return d}});var r=t(5861),a=t(4687),c=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="8d9abe3c80967729f620b46c4ecff176",o=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/day?api_key=".concat(s));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(s)).catch((function(n){throw new Error("Oops... seems like an error occured.")}));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},5153:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,c,i,s,o,u,p,d,l,x,f=t(5861),h=t(9439),v=t(4687),g=t.n(v),m=t(2791),b=t(7689),Z=t(6036),j=t(9067),w=t(2851),k=t(168),y=t(9256),_=t(1087),P=y.ZP.section(r||(r=(0,k.Z)(["\n  padding-top: 15px;\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14);\n"]))),S=y.ZP.div(a||(a=(0,k.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  padding: 10px 0 10px 10px;\n"]))),U=(0,y.ZP)(_.rU)(c||(c=(0,k.Z)(["\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n\n  :hover {\n    color: #ab47bc;\n  }\n"]))),C=y.ZP.li(i||(i=(0,k.Z)(["\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),O=y.ZP.h2(s||(s=(0,k.Z)(["\n  margin-bottom: 10px;\n"]))),R=y.ZP.div(o||(o=(0,k.Z)(["\n  width: 270px;\n"]))),q=y.ZP.div(u||(u=(0,k.Z)(["\n  margin-top: 10px;\n  padding: 10px;\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14);\n"]))),D=y.ZP.li(p||(p=(0,k.Z)(["\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),E=y.ZP.h3(d||(d=(0,k.Z)(["\n  margin-bottom: 10px;\n"]))),G=y.ZP.div(l||(l=(0,k.Z)(["\n  width: 500px;\n  text-align: justify;\n"]))),I=y.ZP.button(x||(x=(0,k.Z)(["\n  border-radius: 6px;\n  padding: 7px 10px;\n  border: transparent;\n  outline: none;\n  margin-left: 10px;\n  font-weight: 600;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  background-color: #ab47bc;\n  color: white;\n  text-decoration: none;\n  &:hover {\n    background-color: #773183;\n  }\n"]))),L=t(184),A=function(){var n,e=(0,b.UO)().movieId,t=(0,m.useState)(null),r=(0,h.Z)(t,2),a=r[0],c=r[1],i=(0,m.useState)(!1),s=(0,h.Z)(i,2),o=s[0],u=s[1],p=(0,b.TH)(),d=(0,b.s0)();(0,m.useEffect)((function(){var n=function(){var n=(0,f.Z)(g().mark((function n(){var t;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.prev=1,n.next=4,(0,j.Pg)(e);case 4:t=n.sent,c(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,u(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]);if(a){var l=a.genres,x=a.title,v=a.release_date,k=a.overview,y=a.vote_average,_=a.poster_path,A=_?"https://image.tmdb.org/t/p/w500/"+_:w,F=Math.round(100*Number(y)/10),H=l.map((function(n){return n.name})).join(" "),J=v.slice(0,4);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(P,{children:[(null===(n=p.state)||void 0===n?void 0:n.from)&&(0,L.jsxs)(I,{onClick:function(){d(p.state.from)},children:[(0,L.jsx)(Z.Dqv,{}),(0,L.jsx)("span",{children:"Go back"})]}),o?(0,L.jsx)("div",{children:"Loading..."}):(0,L.jsxs)(S,{children:[(0,L.jsx)(R,{children:(0,L.jsx)("img",{src:"".concat(A),alt:x})}),(0,L.jsxs)(G,{children:[(0,L.jsxs)(O,{children:[x," ",J&&"(".concat(J,")")]}),(0,L.jsxs)("ul",{children:[(0,L.jsx)(C,{children:F>0&&(0,L.jsxs)("p",{children:["User Score: ",F,"%"]})}),(0,L.jsxs)(C,{children:[(0,L.jsx)("b",{children:"Overview"}),(0,L.jsx)("p",{children:k})]}),(0,L.jsxs)(C,{children:[(0,L.jsx)("b",{children:"Genres"}),(0,L.jsx)("p",{children:H||" - "})]})]})]})]})]}),(0,L.jsxs)(q,{children:[(0,L.jsx)(E,{children:" Additional information"}),(0,L.jsx)("div",{children:(0,L.jsxs)("ul",{children:[(0,L.jsx)(D,{children:(0,L.jsx)(U,{to:"cast",state:p.state,children:"Cast"})}),(0,L.jsx)(D,{children:(0,L.jsx)(U,{to:"reviews",state:p.state,children:"Reviews"})})]})})]}),(0,L.jsx)(m.Suspense,{children:(0,L.jsx)(b.j3,{})})]})}}},2851:function(n,e,t){n.exports=t.p+"static/media/blank_profile.c3f945216dc12c9498dc.png"}}]);
//# sourceMappingURL=153.831a4aff.chunk.js.map