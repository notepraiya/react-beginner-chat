(this["webpackJsonpreact-beginner-chat"]=this["webpackJsonpreact-beginner-chat"]||[]).push([[0],{64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a(2),s=a.n(n),i=a(37),r=a.n(i),j=(a(64),a(65),a(66),a(91)),o=a(41),b=a.n(o),d=a(42),h=a.n(d),l=a(43),O=a.n(l);var p=function(e){var t=e.user;return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"header_left",children:[Object(c.jsx)(j.a,{className:"header_avatar",alt:null===t||void 0===t?void 0:t.displayName,src:null===t||void 0===t?void 0:t.photoURL}),Object(c.jsx)(b.a,{})]}),Object(c.jsxs)("div",{className:"header_search",children:[Object(c.jsx)(h.a,{}),Object(c.jsx)("input",{placeholder:"Search"})]}),Object(c.jsx)("div",{className:"header_right",children:Object(c.jsx)(O.a,{})})]})},u=a(57),x=(a(71),a(44)),m=a.n(x),v=a(45),f=a.n(v);a(72);var g=function(e){var t=e.Icon,a=e.title;return Object(c.jsxs)("div",{className:"sidebarOption",children:[t&&Object(c.jsx)(t,{className:"sidebarOption_icon"}),t?Object(c.jsx)("h3",{children:a}):Object(c.jsxs)("h3",{className:"sidebarOption_channel",children:[Object(c.jsx)("span",{className:"sidebarOption_hash",children:"#"}),a]})]})},I=a(46),N=a.n(I),y=a(47),C=a.n(y),_=a(48),S=a.n(_),L=a(49),w=a.n(L),M=a(50),T=a.n(M),P=a(51),A=a.n(P),F=a(52),U=a.n(F),B=a(53),k=a.n(B),z=a(54),D=a.n(z),R=a(55),q=a.n(R),E=a(32),G=E.a.initializeApp({apiKey:"AIzaSyCpLuNDlfLmj7MXLzdhquCnmqM9yUTbTU8",authDomain:"react-beginner-chat.firebaseapp.com",databaseURL:"https://react-beginner-chat.firebaseio.com",projectId:"react-beginner-chat",storageBucket:"react-beginner-chat.appspot.com",messagingSenderId:"324749925709",appId:"1:324749925709:web:7a65ce74dcc4af60bb2b04",measurementId:"G-Y2M0MMPCB2"}),J=G.firestore(),K=(G.auth(),new E.a.auth.GoogleAuthProvider,J);var W=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){K.collection("rooms").onSnapshot((function(e){s(e.docs.map((function(e){return{id:e.id,name:e.data().name}})))}))}),[]),Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsxs)("div",{className:"sidebar_header",children:[Object(c.jsxs)("div",{className:"sidebar_info",children:[Object(c.jsx)("h2",{children:"Club Note"}),Object(c.jsxs)("h3",{children:[Object(c.jsx)(m.a,{}),"Note Praiya"]})]}),Object(c.jsx)(f.a,{})]}),Object(c.jsx)(g,{Icon:N.a,title:"Threads"}),Object(c.jsx)(g,{Icon:C.a,title:"Mentions & reactions"}),Object(c.jsx)(g,{Icon:S.a,title:"Saved Items"}),Object(c.jsx)(g,{Icon:w.a,title:"Channel browser"}),Object(c.jsx)(g,{Icon:T.a,title:"People & user groups"}),Object(c.jsx)(g,{Icon:A.a,title:"Apps"}),Object(c.jsx)(g,{Icon:U.a,title:"File browser"}),Object(c.jsx)(g,{Icon:k.a,title:"Show less"}),Object(c.jsx)("hr",{}),Object(c.jsx)(g,{Icon:D.a,title:"Channels"}),Object(c.jsx)("hr",{}),Object(c.jsx)(g,{Icon:q.a,title:"Add channel"}),a.map((function(e){var t=e.id,a=e.name;return Object(c.jsx)(g,{title:a,id:t},t)}))]})},X=a(56),Y=a(8);var H=function(){return Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(X.a,{basename:"https://notepraiya.github.io/react-beginner-chat",children:[Object(c.jsx)(p,{user:{displayName:"Tester1",photoURL:"https://avatars.dicebear.com/api/gridy/Tester1.svg"}}),Object(c.jsxs)("div",{className:"app_body",children:[Object(c.jsx)(W,{}),Object(c.jsxs)(Y.c,{children:[Object(c.jsx)(Y.a,{path:"/room/:roomId",children:Object(c.jsx)("h1",{children:"Chat roomId"})}),Object(c.jsx)(Y.a,{path:"/",children:Object(c.jsx)("h1",{children:"Welcome"})})]})]})]})})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,92)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(H,{})}),document.getElementById("root")),Q()}},[[78,1,2]]]);
//# sourceMappingURL=main.2b6d017f.chunk.js.map