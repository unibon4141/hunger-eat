(this.webpackJsonpeat=this.webpackJsonpeat||[]).push([[0],{31:function(e,t,c){"use strict";c.r(t);var n=c(18),r=c(8),s=c.n(r),a=c(12),i=c(11),o=c(0),u=c(9),j=c(2),h=c(1),l="4f5844d2e0d6164077719809278ad2fe";function p(){return(p=Object(i.a)(s.a.mark((function e(){var t,c,n,r,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],c=0;case 2:if(!(c<9)){e.next=14;break}return n=0,e.next=6,fetch("https://foodish-api.herokuapp.com/api/images/pizza");case 6:return r=e.sent,e.next=9,r.json();case 9:for(a=e.sent,i=0;i<t.length;i++)t[i]===a.image&&n++;n||(c++,t.push(a.image)),e.next=2;break;case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"loading",children:"Loading..."})})}function d(e){return Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("img",{src:e.src,alt:"food",className:"".concat(e.foodType," food-item")})})},e.src)}function b(e){var t=e.urls,c=e.foodType;return null===t?Object(h.jsx)(f,{}):t.map((function(e){return Object(h.jsx)(d,{src:e,foodType:c})}))}function x(){return(x=Object(i.a)(s.a.mark((function e(){var t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],0,e.next=4,fetch("https://api.flickr.com/services/rest?api_key=".concat(l,"&method=flickr.photos.search&format=json&nojsoncallback=1&extras=url_c,date_taken.original_format&tags=ramen&user_id=41665184%40N08"));case 4:return c=e.sent,e.next=7,c.json();case 7:return e.sent.photos.photo.map((function(e){t.push(e.url_c)})),e.abrupt("return",t.slice(0,9));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(i.a)(s.a.mark((function e(){var t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],0,e.next=4,fetch("https://api.flickr.com/services/rest?api_key=".concat(l,"&method=flickr.photos.search&format=json&nojsoncallback=1&extras=url_c,date_taken&tags=wagyu&user_id=78797573%40N00"));case 4:return c=e.sent,e.next=7,c.json();case 7:return e.sent.photos.photo.map((function(e){t.push(e.url_c)})),e.abrupt("return",t.slice(0,9));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){var e=Object(o.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(o.useEffect)((function(){(function(){return x.apply(this,arguments)})().then((function(e){n(c=e)}))}),[]),Object(h.jsx)(b,{urls:c,foodType:"ramen"})}function k(){var e=Object(o.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(o.useEffect)((function(){(function(){return p.apply(this,arguments)})().then((function(e){n(c=e)}))}),[]),Object(h.jsx)(b,{urls:c,foodType:"pizza"})}function v(){var e=Object(o.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(o.useEffect)((function(){(function(){return O.apply(this,arguments)})().then((function(e){n(c=e)}))}),[]),Object(h.jsx)(b,{urls:c,foodType:"steak"})}var y=function(){return Object(h.jsx)(u.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("h1",{children:"\u98df\u6b32\u3092\u6e80\u305f\u3059\u30b5\u30a4\u30c8"})}),Object(h.jsxs)("nav",{children:[Object(h.jsx)(u.b,{className:"",to:"/pizza",children:"\u30d4\u30b6"}),Object(h.jsx)(u.b,{className:"",to:"/ramen",children:"\u30e9\u30fc\u30e1\u30f3"}),Object(h.jsx)(u.b,{className:"",to:"/steak",children:"\u8089"})]})]}),Object(h.jsx)("main",{id:"main",children:Object(h.jsx)("div",{className:"container cards",children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/",exact:!0,children:Object(h.jsx)(k,{})}),Object(h.jsx)(j.a,{path:"/ramen",children:Object(h.jsx)(m,{})}),Object(h.jsx)(j.a,{path:"/pizza",children:Object(h.jsx)(k,{})}),Object(h.jsx)(j.a,{path:"/steak",children:Object(h.jsx)(v,{})})]})})}),Object(h.jsxs)("footer",{id:"footer",children:["\u3053\u306e\u30b5\u30a4\u30c8\u3067\u306f",Object(h.jsx)("a",{href:"https://github.com/surhud004/Foodish#readme",children:"Foodish API"}),", ",Object(h.jsx)("a",{href:"https://www.flickr.com/services/api/",children:"Flickr API"}),"\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002"]})]})})};Object(n.render)(Object(h.jsx)(y,{}),document.querySelector("#content"))}},[[31,1,2]]]);
//# sourceMappingURL=main.81462a35.chunk.js.map