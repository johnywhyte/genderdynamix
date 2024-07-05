"use strict";exports.id=74,exports.ids=[74],exports.modules={7074:(e,t,i)=>{let s,r;i.r(t),i.d(t,{default:()=>S});var l=i(9510),n=i(1159),a=i(7710),c=i(2728),o=n.forwardRef((e,t)=>{let{children:i,...s}=e,r=n.Children.toArray(i),a=r.find(x);if(a){let e=a.props.children,i=r.map(t=>t!==a?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,l.jsx)(d,{...s,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,i):null})}return(0,l.jsx)(d,{...s,ref:t,children:i})});o.displayName="Slot";var d=n.forwardRef((e,t)=>{let{children:i,...s}=e;if(n.isValidElement(i)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,i=t&&"isReactWarning"in t&&t.isReactWarning;return i?e.ref:(i=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(i);return n.cloneElement(i,{...function(e,t){let i={...t};for(let s in t){let r=e[s],l=t[s];/^on[A-Z]/.test(s)?r&&l?i[s]=(...e)=>{l(...e),r(...e)}:r&&(i[s]=r):"style"===s?i[s]={...r,...l}:"className"===s&&(i[s]=[r,l].filter(Boolean).join(" "))}return{...e,...i}}(s,i.props),ref:t?function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(t,e):e})}return n.Children.count(i)>1?n.Children.only(null):null});d.displayName="SlotClone";var m=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function x(e){return n.isValidElement(e)&&e.type===m}let u=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,h=function(){for(var e,t,i=0,s="";i<arguments.length;)(e=arguments[i++])&&(t=function e(t){var i,s,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t))for(i=0;i<t.length;i++)t[i]&&(s=e(t[i]))&&(r&&(r+=" "),r+=s);else for(i in t)t[i]&&(r&&(r+=" "),r+=i)}return r}(e))&&(s&&(s+=" "),s+=t);return s};var f=i(2840);let p=(s="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",r={variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}},e=>{var t;if((null==r?void 0:r.variants)==null)return h(s,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:i,defaultVariants:l}=r,n=Object.keys(i).map(t=>{let s=null==e?void 0:e[t],r=null==l?void 0:l[t];if(null===s)return null;let n=u(s)||u(r);return i[t][n]}),a=e&&Object.entries(e).reduce((e,t)=>{let[i,s]=t;return void 0===s||(e[i]=s),e},{});return h(s,n,null==r?void 0:null===(t=r.compoundVariants)||void 0===t?void 0:t.reduce((e,t)=>{let{class:i,className:s,...r}=t;return Object.entries(r).every(e=>{let[t,i]=e;return Array.isArray(i)?i.includes({...l,...a}[t]):({...l,...a})[t]===i})?[...e,i,s]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)}),g=n.forwardRef(({className:e,variant:t,size:i,asChild:s=!1,...r},n)=>{let a=s?o:"button";return l.jsx(a,{className:(0,f.cn)(p({variant:t,size:i,className:e})),ref:n,...r})});g.displayName="Button";let j=function(){return l.jsx("div",{className:" ",children:(0,l.jsxs)("div",{className:" h-[92vh]",children:[l.jsx("header",{className:"z-10 top-0 left-0 right-0 absolute py-4   w-full ",children:l.jsx(c.Z,{children:(0,l.jsxs)("div",{className:"flex w-full items-center justify-between",children:[l.jsx("div",{className:"relative h-[6rem] w-[15rem] cursor-pointer",children:l.jsx(a.default,{src:"/images/logo.png",alt:"genderdynamics Logo",fill:!0,className:"object-contain",priority:!0})}),l.jsx("div",{className:"hidden lg:flex",children:(0,l.jsxs)("nav",{className:"flex space-x-4",children:[l.jsx(g,{variant:"link",className:" text-white  ",children:"Home"}),l.jsx(g,{variant:"link",className:" text-white ",children:"About"}),l.jsx(g,{variant:"link",className:" text-white ",children:"Services"}),l.jsx(g,{variant:"link",className:" text-white ",children:"Project"}),l.jsx(g,{variant:"link",className:" text-white ",children:"Contact"})]})})]})})}),l.jsx(a.default,{src:"/images/heroimg.png",alt:"",fill:!0,className:"object-cover"}),l.jsx(c.Z,{children:l.jsx("div",{className:" absolute  lg:top-[14rem]  justify-center ",children:(0,l.jsxs)("div",{className:" px-4 mt-2 lg:mt-[4rem] max-w-[55rem]",children:[l.jsx("h1",{className:" text-white uppercase lg:text-7xl lg:pb-2 cinzel  text-4xl font-[700] tracking-tight leading-[1.5]",children:"Transforming Communities, Empowering Lives."}),l.jsx(g,{variant:"default",size:"lg",className:" rounded-full text-white ",children:"Learn More"})]})})})]})})},v=function({imgUrl:e,alt:t}){return l.jsx("div",{className:"relative h-[6rem] w-[13rem] cursor-pointer",children:l.jsx(a.default,{src:e,alt:t,fill:!0,className:"object-contain",priority:!0,sizes:"100vw"})})},N=function(){return l.jsx("div",{className:"flex w-full justify-center",children:(0,l.jsxs)("div",{className:"md:flex items-center",children:[l.jsx(v,{imgUrl:"/images/1.png",alt:""}),l.jsx(v,{imgUrl:"/images/2.png",alt:""}),l.jsx(v,{imgUrl:"/images/3.png",alt:""}),l.jsx(v,{imgUrl:"/images/4.png",alt:""}),l.jsx(v,{imgUrl:"/images/5.png",alt:""})]})})};a.default;let y=function(){return l.jsx("div",{className:"my-20",children:l.jsx(c.Z,{children:(0,l.jsxs)("div",{className:" md:flex items-center",children:[(0,l.jsxs)("div",{className:"md:w-1/3 pt-20 pb-20",children:[(0,l.jsxs)("h2",{className:"text-6xl font-[700] cinzel",children:["WHO ",l.jsx("br",{})," WE ARE"]}),l.jsx("p",{children:"Nigerias GESI powerhouse. Gender Dynamix. Women. Innovation. Equality. We craft solutions across health, education, and sustainability for a more equitable tomorrow."})]}),l.jsx("div",{className:"relative md:w-2/3",children:l.jsx(a.default,{src:"/images/waw.png",alt:"",width:1e3,height:1e3})})]})})})},b=function({title:e,desc:t}){return(0,l.jsxs)("div",{className:"text-white flex flex-col ",children:[l.jsx("h3",{className:"text-2xl font-normal",children:e}),l.jsx("p",{className:"font-light",children:t})]})},w=function(){return l.jsx("div",{className:"mt-8 bg-[#831DEA] py-28",children:l.jsx(c.Z,{children:(0,l.jsxs)("div",{className:"md:flex gap-16 items-center ",children:[l.jsx("div",{className:"relative md:w-1/2 ",children:l.jsx(a.default,{src:"/images/servicesface.png",alt:"",width:1e3,height:1e3,className:" rounded-full border-[20px] border-white"})}),(0,l.jsxs)("div",{className:"md:w-1/2 text-white pt-20",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{className:"text-6xl font-[700] cinzel",children:["WHO ",l.jsx("br",{})," WE ARE"]}),l.jsx("p",{children:"Nigerias GESI powerhouse. Gender Dynamix. Women. Innovation. Equality. We craft solutions across health, education, and sustainability for a more equitable tomorrow."})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 mt-20",children:[l.jsx(b,{title:"Advisory Services",desc:"We provide strategic guidance on developing and implementing gender-responsive policies, programs, and initiatives."}),l.jsx(b,{title:"Capacity Building",desc:"We equip organizations with the knowledge and skills necessary to integrate GESI principles into their operations."}),l.jsx(b,{title:"Management Services",desc:"We ensure effective project management and implementation of GESI strategies."}),l.jsx(b,{title:"Advisory Services",desc:"Our team offers specialized technical support on GESI mainstreaming across various sectors."})]})]})]})})})},E=function(){return l.jsx("div",{className:" w-full",children:(0,l.jsxs)("div",{className:"relative h-[480px]",children:[l.jsx(a.default,{src:"/images/qoute.png",alt:"genderdynamics Logo",fill:!0,className:"object-cover",priority:!0}),l.jsx(c.Z,{children:(0,l.jsxs)("div",{className:" absolute px-4 mt-2 lg:top-[8rem]  max-w-[30rem]",children:[l.jsx("h1",{className:" text-white   lg:text-3xl lg:pb-2   text-4xl font-light tracking-tight leading-[1.5]",children:"The single biggest difference we can make in the developing world is to educate and empower women."}),(0,l.jsxs)("div",{children:[l.jsx("p",{className:"text-primary font-semibold text-4xl",children:"Melinda Gates"}),l.jsx("p",{className:"text-primary",children:"(Co-founder, Bill & Melinda Gates Foundation)"})]})]})})]})})},G=function({title:e,desc:t,imgUrl:i,alt:s}){return(0,l.jsxs)("div",{className:" relative w-[100%] h-[23rem]",children:[l.jsx(a.default,{src:i,alt:s,fill:!0}),(0,l.jsxs)("div",{className:" absolute px-4 mt-2 bottom-[2rem]  max-w-[30rem]",children:[l.jsx("p",{className:"text-white",children:e}),l.jsx("p",{className:"text-primary",children:t})]})]})},k=function(){return(0,l.jsxs)("div",{children:[l.jsx(c.Z,{children:(0,l.jsxs)("div",{className:"md:flex  gap-20 lg:px-20 py-14 lg:py-32",children:[l.jsx("h1",{className:"cinzel text-8xl mb-4 font-[700]",children:"Projects "}),(0,l.jsxs)("div",{children:[l.jsx("p",{className:"pb-4",children:"Gender Dynamix Consult actively tackles gender inequality across various sectors. We have deployed our expertise on projects like The Gambia Gender in Education Programme and a UN Women project focused on access to GBV services. Our team excels in gender analysis, capacity building, and policy development, ensuring impactful results for our clients."}),l.jsx(g,{variant:"default",size:"lg",className:" rounded-full text-white ",children:"Learn More"})]})]})}),(0,l.jsxs)("div",{className:"w-[100%]  md:flex",children:[l.jsx(G,{title:"The Gambia on “Identification and formulation of The Gambia Gender in Education Programme” (2023)",desc:"GENDER DYNAMIX CONSULT, EVENT",imgUrl:"/images/p1.png",alt:"project 1"}),l.jsx(G,{title:"The Gambia on “Identification and formulation of The Gambia Gender in Education Programme” (2023)",desc:"GENDER DYNAMIX CONSULT, EVENT",imgUrl:"/images/p2.png",alt:"project 1"}),l.jsx(G,{title:"The Gambia on “Identification and formulation of The Gambia Gender in Education Programme” (2023)",desc:"GENDER DYNAMIX CONSULT, EVENT",imgUrl:"/images/p3.png",alt:"project 1"})]})]})},W=function(){return l.jsx("div",{children:(0,l.jsxs)("div",{className:"lg:max-w-[45rem] md:py-12 my-8 p-8 lg:px-24 lg:m-6 bg-[#831DEA] text-white text-sm rounded-3xl",children:[l.jsx("p",{className:"pb-6",children:"We partnered with Gender Dynamix Consult to address gender barriers in our agricultural project. Their capacity building workshops equipped our staff with the tools to create a more inclusive environment. As a result, more women are now actively participating in the agricultural value chain."}),l.jsx("p",{className:"text-3xl font-normal",children:"Ellena Affah"}),l.jsx("p",{children:"Synergos, Niger State"})]})})},A=function(){return l.jsx("div",{children:l.jsx("div",{className:"flex justify-center pt-20",children:(0,l.jsxs)("div",{className:"flex flex-col ",children:[(0,l.jsxs)("div",{children:[l.jsx("h6",{className:"text-center ",children:" What they say about us"}),l.jsx("h1",{className:"font-[700] text-6xl text-center cinzel",children:"Testimonials"})]}),l.jsx(c.Z,{children:l.jsx(W,{})})]})})})},T=function(){return l.jsx("div",{className:"flex  lg:mx-[16rem] relative justify-center max-[700px] lg:my-16",children:(0,l.jsxs)("div",{className:" h-[22rem]",children:[l.jsx(a.default,{src:"/images/cu2.png",alt:"",fill:!0,className:"hidden lg:block"}),l.jsx(a.default,{src:"/images/ctabg.png",alt:"",fill:!0,className:"lg:hidden rounded-3xl"}),(0,l.jsxs)("div",{className:" absolute left-[1rem] lg:left-[5rem] top-[4rem] px-4 ",children:[l.jsx("p",{className:" pb-2 lg:pb-6 text-4xl text-white font-semibold max-w-[30rem]",children:"Lets work together to create a more equitable and inclusive future!"}),l.jsx(g,{variant:"default",size:"lg",className:" rounded-full text-white ",children:"Learn More"})]})]})})},S=function(){return(0,l.jsxs)("div",{children:[l.jsx(j,{}),l.jsx(N,{}),l.jsx(y,{}),l.jsx(w,{}),l.jsx(E,{}),l.jsx(k,{}),l.jsx(A,{}),l.jsx(T,{})]})}}};