(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"id":0,"name":"cisc275","prereq":"none","prof":"Dr. Bart","credits":3},{"id":1,"name":"cisc320","prereq":"none","prof":"Rui Zhang","credits":3},{"id":2,"name":"cisc372","prereq":"none","prof":"Dr. Sunitha","credits":3},{"id":3,"name":"cpeg470","prereq":"none","prof":"Dr. Andrew Novocin","credits":3}]')},23:function(e,c,t){},24:function(e,c,t){},28:function(e,c,t){"use strict";t.r(c);var n=t(1),r=t.n(n),a=t(16),s=t.n(a),o=(t(23),t(4)),i=t(3),j=(t(24),t(25),t(33)),d=t(32),l=t(15),u=t(29),m=t(0);function b(e){var c=e.course;return Object(m.jsxs)(u.a,{children:[Object(m.jsx)("h2",{children:"Class Select"}),Object(m.jsxs)("div",{children:["Class: ",c.name]}),Object(m.jsxs)("div",{children:["Professor: ",c.prof]}),Object(m.jsxs)("div",{children:["Prereq: ",c.prereq]}),Object(m.jsxs)("div",{children:["Credits: ",c.credits]})]})}var O=t(30),h=t(31);function f(e){var c=e.setCourse,t=e.courseVal,n=e.courseID,r=e.setID,a=e.courseDeck,s=e.addCourse,o=e.removeCourse,i=e.setSem,j=e.sem,d=e.addSem,l=e.removeSem,b=e.resetSems,f=e.clearSem,v=e.renameSem,x=e.semDeck,S=e.semIndex,C=e.setSemIndex;return Object(m.jsxs)(u.a,{children:[Object(m.jsx)("h2",{children:"Control Panel"}),Object(m.jsxs)(O.a,{children:[Object(m.jsx)(h.a,{variant:"outline-secondary",size:"sm",onClick:function(){0!=n&&(c(a[n-1]),r(n-1))},children:"Previous Class"}),Object(m.jsx)(h.a,{variant:"outline-secondary",size:"sm",onClick:function(){s(t)},children:"Add Class"}),Object(m.jsx)(h.a,{variant:"outline-secondary",size:"sm",onClick:function(){o(t)},children:"Remove Class"}),Object(m.jsx)(h.a,{variant:"outline-secondary",size:"sm",onClick:function(){n!=a.length-1&&(c(a[n+1]),r(n+1))},children:"Next Class"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)(O.a,{children:[Object(m.jsx)(h.a,{variant:"outline-secondary",size:"sm",onClick:function(){0!=S&&(i(x[S-1]),C(S-1))},children:"Previous Semester"}),Object(m.jsx)(h.a,{variant:"outline-secondary",size:"sm",onClick:function(){var e="",c=prompt("Enter Name:");null!=c&&(e=c),d({semName:e,courseLoad:[]})},children:"Add Semester "}),Object(m.jsx)(h.a,{variant:"outline-secondary",size:"sm",onClick:function(){f()},children:"Clear Semester"}),Object(m.jsx)(h.a,{variant:"outline-secondary",size:"sm",onClick:function(){S!=x.length-1&&(i(x[S+1]),C(S+1))},children:"Next Semester"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)(O.a,{children:[Object(m.jsx)(h.a,{variant:"outline-secondary",size:"sm",onClick:function(){v()},children:"Rename Semester"}),Object(m.jsx)(h.a,{variant:"outline-secondary",size:"sm",onClick:function(){l(j)},children:"Remove Semester"}),Object(m.jsx)(h.a,{variant:"outline-secondary",size:"sm",onClick:function(){b()},children:"Reset Semesters"})]})]})}var v=t(34);function x(e){var c=e.sem,t=0;for(var n in c.courseLoad)t+=c.courseLoad[n].credits;var r=c.courseLoad.map((function(e){return Object(m.jsx)(v.a.Item,{variant:"dark",children:e.name},e.id)}));return Object(m.jsxs)(d.a,{children:[Object(m.jsx)("h2",{children:"Semesters:"}),Object(m.jsxs)("h5",{children:["Total Credits: ",t]}),Object(m.jsx)("h6",{children:c.semName}),Object(m.jsx)(v.a,{children:r})]})}function S(e){var c=e.courseDeckVal,t=e.semDeck,n=[],r=[];for(var a in c){var s=!1;for(var i in t)for(var j in t[i].courseLoad)c[a]==t[i].courseLoad[j]&&(s=!0);0==s?n=[].concat(Object(o.a)(n),[c[a]]):r=[].concat(Object(o.a)(r),[c[a]])}var l=c.map((function(e){return Object(m.jsx)(v.a.Item,{variant:"dark",children:e.name},e.id)})),u=n.map((function(e){return Object(m.jsx)(v.a.Item,{variant:"dark",children:e.name},e.id)})),b=r.map((function(e){return Object(m.jsx)(v.a.Item,{variant:"dark",children:e.name},e.id)}));return Object(m.jsxs)(d.a,{children:[Object(m.jsx)("h1",{children:"Course List:"}),Object(m.jsx)(v.a,{horizontal:!0,className:"justify-content-center",children:l}),Object(m.jsx)("h2",{children:"Unfulfilled Requirements:"}),Object(m.jsx)(v.a,{horizontal:!0,className:"justify-content-center",children:u}),Object(m.jsx)("h2",{children:"Fulfilled Requirements:"}),Object(m.jsx)(v.a,{horizontal:!0,className:"justify-content-center",children:b})]})}var C=function(){document.title="UD CISC Scheduler Team 18";var e=Object(n.useState)(l),c=Object(i.a)(e,1)[0],t=Object(n.useState)([{semName:"New Semester",courseLoad:[]}]),r=Object(i.a)(t,2),a=r[0],s=r[1],u=Object(n.useState)(a[0]),O=Object(i.a)(u,2),h=O[0],v=O[1],C=Object(n.useState)(0),p=Object(i.a)(C,2),k=p[0],N=p[1],L=Object(n.useState)(l[0]),y=Object(i.a)(L,2),D=y[0],I=y[1],z=Object(n.useState)(0),g=Object(i.a)(z,2),q=g[0],P=g[1];return Object(m.jsxs)(j.a,{className:"App",children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)("h1",{children:"UD CIS Scheduler Team 18 Andrew McCracken"}),Object(m.jsx)(S,{courseDeckVal:c,semDeck:a})]}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(f,{setCourse:I,courseVal:D,courseID:q,setID:P,courseDeck:c,addCourse:function(e){var c=!1;for(var t in h.courseLoad)h.courseLoad[t]==e&&(c=!0);if(0==c){var n=[];for(var r in a)n=a[r]!=h?[].concat(Object(o.a)(n),[a[r]]):[].concat(Object(o.a)(n),[{semName:h.semName,courseLoad:[].concat(Object(o.a)(h.courseLoad),[e])}]);s(n),v(n[k])}else alert("Class already added!")},removeCourse:function(e){var c=[];for(var t in a)if(a[t]!=h)c=[].concat(Object(o.a)(c),[a[t]]);else{var n=[];for(var r in a[t].courseLoad)a[t].courseLoad[r]!=e&&(n=[].concat(Object(o.a)(n),[a[t].courseLoad[r]]));c=[].concat(Object(o.a)(c),[{semName:a[t].semName,courseLoad:n}])}s(c),v(c[k])},setSem:v,sem:h,addSem:function(e){s([].concat(Object(o.a)(a),[e]))},removeSem:function(e){if(1==a.length)alert("Only 1 Semester, cannot delete.");else{var c=[];for(var t in a)a[t].semName!=e.semName&&(c=[].concat(Object(o.a)(c),[a[t]]));s(c),v(c[0]),N(0)}},clearSem:function(){var e=[];for(var c in a)e=a[c]!=h?[].concat(Object(o.a)(e),[a[c]]):[].concat(Object(o.a)(e),[{semName:h.semName,courseLoad:[]}]);s(e),v(e[k])},resetSems:function(){var e=[{semName:"My New Semester",courseLoad:[]}];s(e),N(0),v(e[0])},renameSem:function(){var e=[],c="",t=prompt("Enter Name:");for(var n in null!=t&&(c=t),a)e=a[n]!=h?[].concat(Object(o.a)(e),[a[n]]):[].concat(Object(o.a)(e),[{semName:c,courseLoad:a[n].courseLoad}]);s(e),v(e[k])},semDeck:a,semIndex:k,setSemIndex:N}),Object(m.jsx)(b,{course:D})]}),Object(m.jsx)(x,{sem:h})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(c){var t=c.getCLS,n=c.getFID,r=c.getFCP,a=c.getLCP,s=c.getTTFB;t(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root")),p()}},[[28,1,2]]]);
//# sourceMappingURL=main.7e96a6f8.chunk.js.map