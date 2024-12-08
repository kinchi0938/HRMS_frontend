exports.id=893,exports.ids=[893],exports.modules={5474:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,6313,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},2330:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,6013,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},4584:(e,t,r)=>{Promise.resolve().then(r.bind(r,5041))},8136:(e,t,r)=>{Promise.resolve().then(r.bind(r,5061))},5206:(e,t,r)=>{Promise.resolve().then(r.bind(r,3104))},478:(e,t,r)=>{Promise.resolve().then(r.bind(r,3352))},1794:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});let s=(0,r(7680).y)(),o={signup:e=>s.post("/signup",e),login:async e=>{let t=await s.post("/login",e);return t.token&&(localStorage.setItem("accessToken",t.token),localStorage.setItem("user",JSON.stringify(t.user))),t},logout:async()=>{try{localStorage.removeItem("accessToken"),localStorage.removeItem("user")}catch(e){throw console.error("Logout error:",e),e}}}},7680:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});let s="http://43.201.218.199",o=()=>({"Content-Type":"application/json",Accept:"application/json"}),n=()=>{let e=async e=>{let t=e.headers.get("content-type"),r=t?.includes("application/json"),s=r?await e.json():await e.text();if(!e.ok)throw{message:r?s.message:"An error occurred",status:e.status,errors:s.errors};return s};return{get:async t=>{try{let r=await fetch(`${s}${t}`,{method:"GET",headers:o(),credentials:"same-origin",mode:"cors",cache:"no-store"});return e(r)}catch(e){throw i(e)}},post:async(t,r)=>{try{let n=await fetch(`${s}${t}`,{method:"POST",headers:o(),credentials:"same-origin",mode:"cors",body:r?JSON.stringify(r):void 0});return e(n)}catch(e){throw i(e)}},put:async(t,r)=>{try{let n=await fetch(`${s}${t}`,{method:"PUT",headers:o(),credentials:"same-origin",mode:"cors",body:r?JSON.stringify(r):void 0});return e(n)}catch(e){throw i(e)}},delete:async t=>{try{let r=await fetch(`${s}${t}`,{method:"DELETE",headers:o(),credentials:"same-origin",mode:"cors"});return e(r)}catch(e){throw i(e)}}}},i=e=>{if(e instanceof TypeError&&"Failed to fetch"===e.message)throw Error("Network error occurred. Please check your connection.");if("status"in e)switch(e.status){case 401:throw localStorage.removeItem("token"),Error("Authentication failed. Please login again.");case 403:throw Error("You do not have permission to perform this action.");case 404:throw Error("The requested resource was not found.");case 422:throw Error(e.errors?Object.values(e.errors).flat().join(", "):e.message);default:throw Error(e.message||"An unexpected error occurred.")}throw e}},9966:(e,t,r)=>{"use strict";r.d(t,{R:()=>o});let s=(0,r(7680).y)(),o={getEmployeeList:async()=>await s.get("/employee"),getEmployee:async e=>await s.get(`/employee/${e}`),updateEmployee:async(e,t)=>await s.put(`/employee/edit/${e}`,t),deleteEmployee:async e=>await s.delete(`/employee/${e}`)}},5061:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(5512),o=r(636),n=r(1794),i=r(1010),a=r(4186),l=r(191),c=r(6008),d=r(9334);r(8009);var u=r(2273);function h({children:e}){let{isAuthenticated:t}=(0,o.A)(),r=(0,d.useRouter)(),h=(0,u.wA)(),m=(0,a.jE)(),p=(0,l.n)({mutationFn:n.Z.logout,onSuccess:()=>{h((0,i.ri)()),m.clear(),r.push("/login")},onError:e=>{console.error("Logout failed:",e),h((0,i.ri)()),r.push("/login")}}),y=()=>{p.mutate()};return t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("nav",{"data-testid":"test",className:"w-full min-w-[375px] z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400",children:(0,s.jsxs)("div",{className:"w-full min-w-min flex items-center justify-between mt-0 px-6 py-2",children:[(0,s.jsx)("div",{className:"flex items-center w-full order-3 md:order-1 text-blue-700",children:(0,s.jsx)(c.default,{href:"/employee",children:(0,s.jsx)("button",{className:"text-xs md:text-base bg-green-400 text-white  p-2 rounded  hover:bg-green-300 hover:text-gray-100",children:"See All the Employees"})})}),(0,s.jsx)("div",{className:"order-3 flex flex-wrap items-center justify-end mr-4",children:(0,s.jsxs)("div",{className:"flex items-center w-full md:w-full",children:[(0,s.jsx)(c.default,{href:"/employee/add",children:(0,s.jsx)("button",{className:"text-xs md:text-base bg-green-400 text-white mr-4 p-2 rounded  hover:bg-green-300 hover:text-gray-100",children:"Add New"})}),(0,s.jsx)(c.default,{href:"/",children:(0,s.jsx)("button",{className:"text-xs md:text-base bg-blue-600 text-white  p-2 rounded  hover:bg-blue-500 hover:text-gray-100",onClick:()=>y(),children:"Log out"})})]})})]})}),(0,s.jsx)("div",{children:e})]}):null}},3352:(e,t,r)=>{"use strict";r.d(t,{default:()=>f});var s=r(5512),o=r(7166),n=r(4186),i=r(8009),a=r(2273),l=r(2231),c=r(1010);let d=(0,l.Z0)({name:"user",initialState:{currentUser:null},reducers:{setUser:(e,t)=>{e.currentUser=t.payload},clearUser:e=>{e.currentUser=null}}}),{setUser:u,clearUser:h}=d.actions,m=d.reducer,p=(0,l.U1)({reducer:{auth:c.Ay,user:m}});function y({children:e}){let[t,r]=(0,i.useState)(!1);return(0,a.wA)(),t?e:null}function f({children:e}){let[t]=(0,i.useState)(()=>new o.E({defaultOptions:{queries:{staleTime:6e4,refetchOnWindowFocus:!1}}}));return(0,s.jsx)(a.Kq,{store:p,children:(0,s.jsx)(y,{children:(0,s.jsxs)(n.Ht,{client:t,children:[e,!1]})})})}r(6510)},636:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(8009),o=r(2273),n=r(1010);let i=()=>{let e=(0,o.wA)(),{isAuthenticated:t,token:r,user:i}=(0,o.d4)(e=>e.auth);return(0,s.useEffect)(()=>{e((0,n.T5)())},[e]),{isAuthenticated:t,token:r,user:i}}},9320:(e,t,r)=>{"use strict";r.d(t,{Sf:()=>l,WE:()=>c,uC:()=>a});var s=r(9633),o=r(4186),n=r(191),i=r(9966);let a=e=>(0,s.I)({queryKey:["employee",e],queryFn:()=>i.R.getEmployee(e),enabled:!!e,staleTime:0}),l=e=>{let t=(0,o.jE)();return(0,n.n)({mutationFn:t=>i.R.updateEmployee(e,t),onSuccess:()=>{t.invalidateQueries({queryKey:["employee",e]}),t.invalidateQueries({queryKey:["employees"]})}})},c=e=>{let t=(0,o.jE)();return(0,n.n)({mutationFn:()=>i.R.deleteEmployee(e),onSuccess:()=>{t.invalidateQueries({queryKey:["employee",e]}),t.invalidateQueries({queryKey:["employees"]})}})}},1010:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>d,LA:()=>a,T5:()=>c,ri:()=>l});var s=r(2231),o=r(6510);let n={token:(0,o.Lg)("accessToken"),isAuthenticated:!!(0,o.Lg)("accessToken"),user:null},i=(0,s.Z0)({name:"auth",initialState:n,reducers:{setCredentials:(e,t)=>{let{user:r,token:s}=t.payload;e.user=r,e.token=s,e.isAuthenticated=!0,(0,o.ZB)("accessToken",s),(0,o.ZB)("user",JSON.stringify(r))},logout:e=>{e.user=null,e.token=null,e.isAuthenticated=!1,(0,o.$1)("accessToken"),(0,o.$1)("user")},checkAuth:e=>{let t=(0,o.Lg)("accessToken"),r=JSON.parse((0,o.Lg)("user")||"null");e.isAuthenticated=!!t,e.user=r,e.token=t}}}),{setCredentials:a,logout:l,checkAuth:c}=i.actions,d=i.reducer},6510:(e,t,r)=>{"use strict";r.d(t,{$1:()=>n,Lg:()=>s,ZB:()=>o});let s=e=>null,o=(e,t)=>{},n=e=>{}},5041:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/hannes/Projects/hrms_nextjs/src/app/(afterLogin)/layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/hannes/Projects/hrms_nextjs/src/app/(afterLogin)/layout.tsx","default")},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>n});var s=r(2740);r(1135);var o=r(3104);let n={title:"HR Manage System with Nextjs",description:"Make your HR Managing easier",icons:{icon:"hr.svg"}};function i({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{children:(0,s.jsx)(o.default,{children:e})})})}},3104:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/hannes/Projects/hrms_nextjs/src/app/providers.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/hannes/Projects/hrms_nextjs/src/app/providers.tsx","default")},1135:()=>{}};