(this["webpackJsonpissue-tracker-frontend"]=this["webpackJsonpissue-tracker-frontend"]||[]).push([[7],{526:function(e,t,r){"use strict";var s=r(553),c=r.n(s),n=r(554),a=r.n(n),i="http://localhost:8080";i="http://localhost:8080";var o=c.a.create({baseURL:i,paramsSerializer:function(e){return a.a.stringify(e,{indices:!1})}});o.interceptors.request.use((function(e){var t=localStorage.getItem("jwt");return null!==t&&void 0!==t&&(e.headers={Authorization:"Bearer "+t}),e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return function(e){return 200===e.status?e:this.parseError(e.data.messages)}(e)}),(function(e){return console.warn("Error status",e.response),e.response?(t=e.response)?t instanceof Array?Promise.reject({messages:t}):Promise.reject({messages:[t]}):Promise.reject({messages:["--error--"]}):Promise.reject(e);var t})),t.a=o},555:function(e,t){},725:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},971:function(e,t,r){"use strict";r.r(t);var s=r(67),c=r(0),n=r(21),a=r(52),i=r(12),o=r(60),l=r(505),j=r(725),u=r(526),d=r(3);t.default=function(){var e=Object(n.f)(),t=Object(c.useState)(""),r=Object(s.a)(t,2),h=r[0],b=r[1],m=Object(c.useState)(""),p=Object(s.a)(m,2),x=p[0],O=p[1];return Object(d.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(d.jsx)(i.o,{children:Object(d.jsx)(i.I,{className:"justify-content-center",children:Object(d.jsx)(i.n,{md:8,children:Object(d.jsxs)(i.l,{children:[Object(d.jsx)(i.j,{className:"p-4",children:Object(d.jsx)(i.k,{children:Object(d.jsxs)(i.v,{children:[Object(d.jsx)("h1",{children:"Login"}),Object(d.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),Object(d.jsxs)(i.D,{className:"mb-3",children:[Object(d.jsx)(i.E,{children:Object(d.jsx)(o.a,{icon:l.a})}),Object(d.jsx)(i.w,{placeholder:"Username",autoComplete:"username",onChange:function(e){return b(e.target.value)}})]}),Object(d.jsxs)(i.D,{className:"mb-4",children:[Object(d.jsx)(i.E,{children:Object(d.jsx)(o.a,{icon:j.a})}),Object(d.jsx)(i.w,{type:"password",placeholder:"Password",autoComplete:"current-password",onChange:function(e){return O(e.target.value)}})]}),Object(d.jsx)(i.I,{children:Object(d.jsx)(i.n,{xs:6,children:Object(d.jsx)(i.i,{color:"primary",className:"px-4",onClick:function(){u.a.post("/auth/login",{username:h,password:x}).then((function(t){void 0===t.data||""===t.data?alert("Login Error"):(localStorage.setItem("jwt",t.data),e.push("/"))})).catch((function(e){alert("Login Error\n"+e)}))},children:"Login"})})})]})})}),Object(d.jsx)(i.j,{className:"text-white bg-primary py-5",style:{width:"44%"},children:Object(d.jsx)(i.k,{className:"text-center",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Sign up"}),Object(d.jsx)("p",{children:"Help us grow.Join now."}),Object(d.jsx)("p",{children:"It's 100% free and quite easy."}),Object(d.jsx)(a.b,{to:"/register",children:Object(d.jsx)(i.i,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"Register Now!"})})]})})})]})})})})})}}}]);
//# sourceMappingURL=7.ff8d671d.chunk.js.map