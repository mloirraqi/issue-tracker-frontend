(this["webpackJsonpissue-tracker-frontend"]=this["webpackJsonpissue-tracker-frontend"]||[]).push([[8],{526:function(e,t,s){"use strict";var r=s(553),c=s.n(r),a=s(554),n=s.n(a),i="http://localhost:8080";i="https://mloi-ticket-tracker.herokuapp.com/";var o=c.a.create({baseURL:i,paramsSerializer:function(e){return n.a.stringify(e,{indices:!1})}});o.interceptors.request.use((function(e){var t=localStorage.getItem("jwt");return null!==t&&void 0!==t&&(e.headers={Authorization:"Bearer "+t}),e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return function(e){return 200===e.status?e:this.parseError(e.data.messages)}(e)}),(function(e){return console.warn("Error status",e.response),e.response?(t=e.response)?t instanceof Array?Promise.reject({messages:t}):Promise.reject({messages:[t]}):Promise.reject({messages:["--error--"]}):Promise.reject(e);var t})),t.a=o},555:function(e,t){},725:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},972:function(e,t,s){"use strict";s.r(t);var r=s(67),c=s(0),a=s(12),n=s(60),i=s(505),o=s(725),l=s(21),j=s(52),u=s(526),d=s(3);t.default=function(){var e=Object(l.g)(),t=Object(c.useState)(!1),s=Object(r.a)(t,2),h=s[0],m=s[1],b=Object(c.useState)(""),p=Object(r.a)(b,2),O=p[0],x=p[1],f=Object(c.useState)(""),g=Object(r.a)(f,2),v=g[0],w=g[1],N=Object(c.useState)(""),k=Object(r.a)(N,2),C=k[0],y=k[1];return Object(d.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(d.jsx)(a.o,{children:Object(d.jsx)(a.I,{className:"justify-content-center",children:Object(d.jsx)(a.n,{md:9,lg:7,xl:6,children:Object(d.jsx)(a.j,{className:"mx-4",children:Object(d.jsxs)(a.k,{className:"p-4",children:[Object(d.jsxs)(a.v,{children:[Object(d.jsx)("h1",{children:"Register"}),Object(d.jsx)("p",{className:"text-medium-emphasis",children:"Create your account"}),Object(d.jsxs)(a.D,{className:"mb-3",children:[Object(d.jsx)(a.E,{children:Object(d.jsx)(n.a,{icon:i.a})}),Object(d.jsx)(a.w,{valid:h,placeholder:"Username",autoComplete:"username",onChange:function(e){return function(e){x(e),""!==e?u.a.get("/auth/check/?username="+e).then((function(e){m(e.data)})):m(!1)}(e.target.value)}})]}),Object(d.jsxs)(a.D,{className:"mb-3",children:[Object(d.jsx)(a.E,{children:Object(d.jsx)(n.a,{icon:o.a})}),Object(d.jsx)(a.w,{type:"password",placeholder:"Password",autoComplete:"new-password",onChange:function(e){return w(e.target.value)}})]}),Object(d.jsxs)(a.D,{className:"mb-4",children:[Object(d.jsx)(a.E,{children:Object(d.jsx)(n.a,{icon:o.a})}),Object(d.jsx)(a.w,{valid:v===C&&""!==v,type:"password",placeholder:"Repeat password",autoComplete:"new-password",onChange:function(e){return y(e.target.value)}})]}),Object(d.jsx)("div",{className:"d-grid",children:Object(d.jsx)(a.i,{onClick:function(){return""!==O&&v===C&&""!==v||alert("Please fill up the form"),void u.a.post("/auth/join",{username:O,password:v}).then((function(t){!0===t.data?e.push("/login"):alert("Account creation failed\n")}))},color:"success",children:"Create Account"})})]}),Object(d.jsx)("div",{className:"h-10"}),Object(d.jsx)(j.b,{to:"/login",children:Object(d.jsx)("div",{className:"d-grid",children:Object(d.jsx)(a.i,{color:"primary",children:"Have an account?"})})})]})})})})})})}}}]);
//# sourceMappingURL=8.bc30dd5c.chunk.js.map