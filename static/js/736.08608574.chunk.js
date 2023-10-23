"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,c,i=t(5861),s=t(9439),u=t(4687),o=t.n(u),p=t(2791),f=t(7689),l=t(168),d=t(9256),h=d.ZP.li(r||(r=(0,l.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: start;\n  export const MovieList = styled(Link);\n  text-decoration: none;\n  &:hover {\n    color: #404bbf;\n  }\n"]))),v=d.ZP.section(a||(a=(0,l.Z)(["\n  padding: 15px 10;\n"]))),x=d.ZP.ul(c||(c=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n"]))),m=t(9067),g=t(2851),k=t(184),w=function(){var n=(0,f.UO)().movieId,e=(0,p.useState)(!1),t=(0,s.Z)(e,2),r=t[0],a=t[1],c=(0,p.useState)(null),u=(0,s.Z)(c,2),l=u[0],d=u[1];if((0,p.useEffect)((function(){var e=function(){var e=(0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,(0,m.Jh)(n);case 4:t=e.sent,d(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,a(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),l)return(0,k.jsxs)(v,{children:[r?(0,k.jsx)("div",{children:"Loading..."}):(0,k.jsx)(x,{children:l.map((function(n){var e=n.id,t=n.profile_path,r=n.name,a=n.character,c=t?"https://image.tmdb.org/t/p/w500"+t:g;return(0,k.jsxs)(h,{children:[(0,k.jsx)("img",{src:c,alt:r,width:200,height:300}),(0,k.jsxs)("div",{children:[(0,k.jsx)("p",{children:(0,k.jsx)("span",{children:r})}),a?(0,k.jsxs)("p",{children:[(0,k.jsx)("b",{children:"Character:"}),(0,k.jsxs)("span",{children:[" ",a]})]}):(0,k.jsxs)("p",{children:[(0,k.jsx)("b",{children:"Character:"}),(0,k.jsx)("span",{children:" Unknown"})]})]})]},e)}))}),!l.length&&(0,k.jsx)("p",{children:"There is no information about the cast of this film yet. Sorry..."})]})}},9067:function(n,e,t){t.d(e,{Df:function(){return u},IR:function(){return l},Jh:function(){return p},Pg:function(){return o},_r:function(){return f}});var r=t(5861),a=t(4687),c=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="8d9abe3c80967729f620b46c4ecff176",u=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(s)).catch((function(n){throw new Error("Oops... seems like an error occured.")}));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2851:function(n,e,t){n.exports=t.p+"static/media/blank_profile.c3f945216dc12c9498dc.png"}}]);
//# sourceMappingURL=736.08608574.chunk.js.map