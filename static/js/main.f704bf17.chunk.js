(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{140:function(e,t,a){e.exports=a.p+"static/media/poll_hero.5268775a.svg"},148:function(e,t,a){e.exports=a.p+"static/media/poll_creator.57a833b4.svg"},156:function(e,t,a){e.exports=a.p+"static/media/real_time.c1b27570.svg"},158:function(e,t,a){e.exports=a.p+"static/media/pie-chart.b98ba7d1.svg"},164:function(e,t,a){e.exports=a(339)},169:function(e,t,a){},170:function(e,t,a){},332:function(e,t){},337:function(e,t,a){},339:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),l=a.n(o),c=(a(169),a(170),a(37)),i=a(5),s=a(95),m=a(140),u=a.n(m),p=function(){return r.a.createElement("div",{className:"landing"},r.a.createElement("div",{className:"landing__header"},r.a.createElement("h2",null,"Real Time Polling for any of your Question"),r.a.createElement("div",{className:"landing__btn"},r.a.createElement(c.b,{to:"/create"},r.a.createElement(s.a,null,"Create A New Poll Now")))),r.a.createElement("div",{className:"landing__image"},r.a.createElement("img",{src:u.a,alt:"hero"})))},d=a(10),f=a.n(d),E=a(25),v=a(30),g=a(344),_=a(64),h=a.n(_),b="http://voteforbest.herokuapp.com/",y=function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(b,"poll"),{title:t.title,question:t.question,answers:t.answers});case 2:return a=e.sent,e.abrupt("return",a.data.poll);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=a(342),x=a(343),w=a(341),O=a(346),k=a(347),C=a(162),j=function(){var e=function(e,t){var a=t.add,n=t.remove;return r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement(w.a,{key:Object(C.a)(),style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:8},align:"center"},r.a.createElement(N.a.Item,{name:[e.name,"text"],fieldKey:[e.fieldKey,"text"],rules:[{required:!0,message:"Enter Option ".concat(t+1)}]},r.a.createElement(x.a,{className:"create-poll__option",placeholder:"Option ".concat(t+1)})),function(e,t,a){if(e>1)return r.a.createElement(O.a,{style:{marginLeft:8},onClick:function(){a(t.name)}})}(t,e,n))})),r.a.createElement(N.a.Item,{style:{textAlign:"left"}},r.a.createElement(s.a,{type:"dashed",onClick:function(){a()}},r.a.createElement(k.a,null)," Add Option")))};return r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement(N.a.List,{name:"questions"},e))};function q(e){var t=e.onFinish,a=e.loader;return n.createElement(N.a,{className:"create-poll__form",onFinish:t},n.createElement(N.a.Item,{name:"title",rules:[{required:!0,message:"Enter Title"}]},n.createElement(x.a,{className:"create-poll__input",placeholder:"Title",autoComplete:"off"})),n.createElement(N.a.Item,{name:"question",rules:[{required:!0,message:"Enter Question"}]},n.createElement(x.a,{className:"create-poll__input",placeholder:"Enter Question",autoComplete:"off"})),n.createElement(j,null),n.createElement(N.a.Item,{style:{textAlign:"right"}},n.createElement(s.a,{className:"create-poll__btn",loading:a,htmlType:"submit"},"Submit")))}var S=a(148),I=a.n(S),T=function(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),a=t[0],o=t[1],l=Object(i.e)(),c=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),a={title:t.title,question:t.question,answers:t.questions.map((function(e){return e.text}))},e.prev=2,e.next=5,y(a);case 5:n=e.sent,o(!1),l.push("/poll/".concat(n._id)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),o(!1);case 13:case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"create-poll"},r.a.createElement(q,{onFinish:function(e){!e.questions||e.questions.length<2?g.a.error({message:"Please add at least 2 options"}):c(e)},loader:a}),r.a.createElement("div",{className:"create-poll__image"},r.a.createElement("img",{src:I.a,alt:"creator"})))},A=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(b,"get-poll/").concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=a(348),J=function(e){var t=e.poll,a=e.io,o=e.copyToClipboard,l=t.question,c=t.title,i=t.answers,m=t._id,u=Object(n.useState)(),p=Object(v.a)(u,2),d=p[0],f=p[1];return r.a.createElement("div",{className:"poll"},r.a.createElement("h3",null,c[0].toUpperCase()+c.slice(1)),r.a.createElement("h2",null,"Q) ",l[0].toUpperCase()+l.slice(1)),function(){var e=i.reduce((function(e,t){return e+t.votes}),0);return i.map((function(t,a){var n=t.text,o=t.votes/(e||1)*100;return r.a.createElement("label",{key:a,htmlFor:"".concat(a),className:"poll__options"},r.a.createElement("div",{className:"poll__options__content"},r.a.createElement("input",{id:"".concat(a),name:"option",onChange:function(){return f(a)},type:"radio"})),r.a.createElement("div",{className:"poll__options__text poll__options__content"},n),r.a.createElement("div",{className:"poll__options__content"},o.toPrecision(4),"%"),r.a.createElement("div",{className:"poll__options__votes",style:{width:"".concat(o,"%")}}))}))}(),r.a.createElement("div",{className:"poll__vote"},r.a.createElement(s.a,{className:"poll__btn--copy",onClick:o,type:"primary"},r.a.createElement(F.a,null)),r.a.createElement(s.a,{className:"poll__btn",onClick:function(){console.log(m&&d),void 0!==m&&void 0!==d?function(e,t,a){localStorage.getItem(t)?g.a.error({message:"You have Already Voted"}):(localStorage.setItem(t,"true"),e.emit("add-vote",JSON.stringify({id:t,option:a})),g.a.success({message:"Thanks for Your Vote!"}))}(a,m,d):g.a.error({message:"Option Not Selected!"})},type:"primary"},"Vote")))},L=a(155),P=a.n(L)()("http://voteforbest.herokuapp.com/"),Q=a(156),B=a.n(Q),V=a(345),K=a(47),U=function(){var e=Object(n.useState)(),t=Object(v.a)(e,2),a=t[0],o=t[1],l=Object(i.f)().id;Object(n.useEffect)((function(){return console.log(window.location.href),A(l).then((function(e){o(e),function(e,t){e.emit("get-poll",t)}(P,l),P.on("refresh-data",(function(e){var t=JSON.parse(e);o(t)}))})).catch((function(e){o(null)})),function(){P.disconnect()}}),[]);return void 0===a?r.a.createElement("p",null,'"...Loading"'):null===a?r.a.createElement("div",{className:"poll-page"},r.a.createElement(K.a,null)):r.a.createElement("div",{className:"poll-page"},r.a.createElement(J,{poll:a,io:P,copyToClipboard:function(){var e=window.location.href;console.log("text",e);var t=document.createElement("textarea");t.innerText=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),V.b.success("Link Copied Successfully!")}}),r.a.createElement("div",{className:"poll-page__image"},r.a.createElement("img",{src:B.a,alt:"real-time"})))},W=a(158),Y=a.n(W),M=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/"}," ",r.a.createElement("img",{className:"nav__logo",src:Y.a,alt:"logo"})))};var R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(M,null),r.a.createElement(i.a,{path:"/",exact:!0,component:p}),r.a.createElement(i.a,{path:"/create",exact:!0,component:T}),r.a.createElement(i.a,{path:"/poll/:id",exact:!0,component:U})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(337),a(338);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[164,1,2]]]);
//# sourceMappingURL=main.f704bf17.chunk.js.map