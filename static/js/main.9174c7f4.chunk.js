(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);for(var a=n(3),s=n.n(a),c=n(4),r=n(5),u=n(7),i=n(6),o=n(1),l=n.n(o),d=(n(12),n(0)),b=function(t){t.preventDefault(),t.target.classList.remove("animate"),t.target.classList.add("animate"),setTimeout((function(){t.target.classList.remove("animate")}),700)},p=document.getElementsByClassName("bubbly-button"),h=0;h<p.length;h++)p[h].addEventListener("click",b,!1);var j=function(t){Object(u.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={result:0},t.addOne=function(){t.setState((function(t){return{result:t.result+1}}))},t.add100=function(){t.setState((function(t){return{result:t.result+100}}))},t.increase=function(){return t.state.result%5===0?t.add100()+t.addOne():t.addOne()},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.result;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"App__title",children:"Current age: ".concat(t)}),Object(d.jsxs)("div",{className:"App__button-container",children:[Object(d.jsx)("button",{onClick:this.addOne,type:"button",className:"App__button",children:"Add1"}),Object(d.jsx)("button",{onClick:this.add100,type:"button",className:"App__button",children:"Add100"}),Object(d.jsx)("button",{onClick:this.increase,type:"button",className:"App__button",children:"Increase"})]})]})}}]),n}(l.a.Component),m=j;s.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9174c7f4.chunk.js.map