(this.webpackJsonpreact_breakingbad_app=this.webpackJsonpreact_breakingbad_app||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logo.3795f66d.png"},30:function(e,t,a){e.exports=a.p+"static/media/spinner.235b9b3e.gif"},31:function(e,t,a){e.exports=a(60)},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),u=a(12),i=a.n(u),o=a(26),s=a(9),m=a(7),E=a(1),d=a(27),f=a.n(d),p=(a(54),a(28)),g=a.n(p),b=function(e){var t=e.getQueryValue;return r.a.createElement("header",{className:"center"},r.a.createElement(m.b,{to:"/",onClick:function(){return t("")}},r.a.createElement("img",{className:"logo",src:g.a,alt:"breaking bad"})))},h=function(e){var t=e.getQueryValue;return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/jesse",onClick:function(){return t("jesse")}},"Jesse")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/gustavo",onClick:function(){return t("gustavo")}},"Gustavo")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/skinny",onClick:function(){return t("skinny")}},"Skinny"))))},v=function(e){var t=e.getQueryValue,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],u=c[1];return r.a.createElement("form",{className:"search-form"},r.a.createElement("input",{type:"text",placeholder:"Search",value:l,onChange:function(e){return a=e.target.value,u(a),void t(a);var a},autoFocus:!0}))},k=function(e){var t=e.character;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,t.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:"),t.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:"),t.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday:"),t.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:"),t.status)))))},y=a(30),N=a.n(y),j=function(){return r.a.createElement("img",{src:N.a,style:{width:"200px",margin:"auto",display:"block"},alt:"loading"})},x=function(e){var t=e.isLoading,a=e.characters;return t?r.a.createElement(j,null):r.a.createElement("section",{className:"cards"},a.map((function(e){return r.a.createElement(k,{key:e.char_id,character:e})})))},O=function(){return r.a.createElement("li",{className:"not-found"},r.a.createElement("h1",null,"404 - Page Not Found "),r.a.createElement("hr",{className:"line"}),r.a.createElement("p",null,"Oops!  It looks like the page you're looking for ",r.a.createElement("strong",null,"does not exist.")))},w=function(){return r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"No Result Found"),r.a.createElement("hr",{className:"line"}),r.a.createElement("p",null,"You search did not return any results. Please try again."))};var S=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),u=Object(s.a)(l,2),d=u[0],p=u[1],g=Object(n.useState)(""),k=Object(s.a)(g,2),y=k[0],N=k[1];Object(n.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,f()("https://www.breakingbadapi.com/api/characters?name=".concat(y));case 3:t=e.sent,c(t.data),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[y]);var j=function(){return r.a.createElement(x,{isLoading:d,characters:a})};return r.a.createElement("div",{className:"container"},r.a.createElement(m.a,{basename:"/react-breakingbad-api"},r.a.createElement(b,{getQueryValue:function(e){return N(e)}}),r.a.createElement(v,{getQueryValue:function(e){return N(e)}}),r.a.createElement(h,{getQueryValue:function(e){return N(e)}}),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",render:function(){return""!==y&a.length<1?r.a.createElement(w,null):j()}}),r.a.createElement(E.a,{exact:!0,path:"/jesse",render:function(){return j()}}),r.a.createElement(E.a,{exact:!0,path:"/gustavo",render:function(){return j()}}),r.a.createElement(E.a,{exact:!0,path:"/skinny",render:function(){return j()}}),r.a.createElement(E.a,{component:O}))))};l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.bf60e5cb.chunk.js.map