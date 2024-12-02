import{g as G,C as H,i as R,d as P,h as W,j as I,p as se,o as l,c as u,r as E,n as r,u as t,k as q,l as M,m as te,q as b,s as ae,t as ie,v as oe,x as m,y as le,z as k,a as s,A as x,B as D,w as p,D as re,F as j,b as v,G as ne,H as pe,I as _,f as y,J as de,K as ue,L as O,M as U,N as ce,e as me,O as ve,P as ge,_ as fe}from"./index-xiEWGraw.js";/* empty css                      */import{E as F,a as he}from"./index-CCuXq1E_.js";import{u as ye}from"./index-D3GulhLu.js";import"./vnode-BflcI9Xd.js";const we=G({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),Se={[H]:(w,f)=>[w,f].every(R)},_e=P({name:"ElSteps"}),Ce=P({..._e,props:we,emits:Se,setup(w,{emit:f}){const i=w,d=W("steps"),{children:g,addChild:c,removeChild:e}=ye(M(),"ElStep");return I(g,()=>{g.value.forEach((o,n)=>{o.setIndex(n)})}),se("ElSteps",{props:i,steps:g,addStep:c,removeStep:e}),I(()=>i.active,(o,n)=>{f(H,o,n)}),(o,n)=>(l(),u("div",{class:r([t(d).b(),t(d).m(o.simple?"simple":o.direction)])},[E(o.$slots,"default")],2))}});var be=q(Ce,[["__file","steps.vue"]]);const Pe=G({title:{type:String,default:""},icon:{type:te},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),ke=P({name:"ElStep"}),De=P({...ke,props:Pe,setup(w){const f=w,i=W("step"),d=b(-1),g=b({}),c=b(""),e=ae("ElSteps"),o=M();ie(()=>{I([()=>e.props.active,()=>e.props.processStatus,()=>e.props.finishStatus],([a])=>{ee(a)},{immediate:!0})}),oe(()=>{e.removeStep(V.uid)});const n=m(()=>f.status||c.value),Q=m(()=>{const a=e.steps.value[d.value-1];return a?a.currentStatus:"wait"}),$=m(()=>e.props.alignCenter),A=m(()=>e.props.direction==="vertical"),h=m(()=>e.props.simple),N=m(()=>e.steps.value.length),z=m(()=>{var a;return((a=e.steps.value[N.value-1])==null?void 0:a.uid)===(o==null?void 0:o.uid)}),C=m(()=>h.value?"":e.props.space),J=m(()=>[i.b(),i.is(h.value?"simple":e.props.direction),i.is("flex",z.value&&!C.value&&!$.value),i.is("center",$.value&&!A.value&&!h.value)]),Y=m(()=>{const a={flexBasis:R(C.value)?`${C.value}px`:C.value?C.value:`${100/(N.value-($.value?0:1))}%`};return A.value||z.value&&(a.maxWidth=`${100/N.value}%`),a}),X=a=>{d.value=a},Z=a=>{const S=a==="wait",T={transitionDelay:`${S?"-":""}${150*d.value}ms`},L=a===e.props.processStatus||S?0:100;T.borderWidth=L&&!h.value?"1px":0,T[e.props.direction==="vertical"?"height":"width"]=`${L}%`,g.value=T},ee=a=>{a>d.value?c.value=e.props.finishStatus:a===d.value&&Q.value!=="error"?c.value=e.props.processStatus:c.value="wait";const S=e.steps.value[d.value-1];S&&S.calcProgress(c.value)},V=le({uid:o.uid,currentStatus:n,setIndex:X,calcProgress:Z});return e.addStep(V),(a,S)=>(l(),u("div",{style:x(t(Y)),class:r(t(J))},[k(" icon & line "),s("div",{class:r([t(i).e("head"),t(i).is(t(n))])},[t(h)?k("v-if",!0):(l(),u("div",{key:0,class:r(t(i).e("line"))},[s("i",{class:r(t(i).e("line-inner")),style:x(g.value)},null,6)],2)),s("div",{class:r([t(i).e("icon"),t(i).is(a.icon||a.$slots.icon?"icon":"text")])},[E(a.$slots,"icon",{},()=>[a.icon?(l(),D(t(j),{key:0,class:r(t(i).e("icon-inner"))},{default:p(()=>[(l(),D(re(a.icon)))]),_:1},8,["class"])):t(n)==="success"?(l(),D(t(j),{key:1,class:r([t(i).e("icon-inner"),t(i).is("status")])},{default:p(()=>[v(t(ne))]),_:1},8,["class"])):t(n)==="error"?(l(),D(t(j),{key:2,class:r([t(i).e("icon-inner"),t(i).is("status")])},{default:p(()=>[v(t(pe))]),_:1},8,["class"])):t(h)?k("v-if",!0):(l(),u("div",{key:3,class:r(t(i).e("icon-inner"))},_(d.value+1),3))])],2)],2),k(" title & description "),s("div",{class:r(t(i).e("main"))},[s("div",{class:r([t(i).e("title"),t(i).is(t(n))])},[E(a.$slots,"title",{},()=>[y(_(a.title),1)])],2),t(h)?(l(),u("div",{key:0,class:r(t(i).e("arrow"))},null,2)):(l(),u("div",{key:1,class:r([t(i).e("description"),t(i).is(t(n))])},[E(a.$slots,"description",{},()=>[y(_(a.description),1)])],2))],2)],6))}});var K=q(De,[["__file","item.vue"]]);const Ee=de(be,{Step:K}),B=ue(K),$e=""+new URL("step1-B2n7Uy3E.png",import.meta.url).href,Ne=""+new URL("step2-An8aGwRL.png",import.meta.url).href,Te=""+new URL("step3-DrsCDhOs.png",import.meta.url).href,je=ge+"#arrow-right",Be={class:"page-patches"},Ie={class:"patches"},Ae={class:"page-body"},ze={class:"img"},Ve=["src","alt","onClick"],Le={class:"flex"},xe={class:"price"},Oe=["onClick"],Ue={class:"gallery"},Fe={class:"page-body"},Ge={class:"list"},He={class:"img"},Re=["src","alt"],We={class:"create-steps"},qe={class:"page-body"},Me={class:"characteristic"},Ke=P({__name:"Patches",setup(w){const f=me(),i=c=>{f.push(`/product/${c}`)},d=b([{id:"1",name:"Embroidery",img:"/products/patches/Embroidery.jpg",lowest:.39},{id:"2",name:"Woven",img:"/products/patches/Woven.jpg",lowest:.39},{id:"3",name:"Print",img:"/products/patches/Print.jpg",lowest:.39},{id:"4",name:"Chenille",img:"/products/patches/Chenille.jpg",lowest:.51},{id:"5",name:"PVC",img:"/products/patches/PVC.jpg",lowest:.46},{id:"6",name:"Leather",img:"/products/patches/Leather.jpg",lowest:.88},{id:"7",name:"3D Embroidery",img:"/products/patches/3D.jpg",lowest:1.23},{id:"8",name:"Silicon",img:"/products/patches/Silicon.jpg",lowest:.39},{id:"9",name:"TPU",img:"/products/patches/TPU.jpg",lowest:.39}]),g=b([{id:"1",name:"Air Force Design Template",img:"/products/gallery/g1.png",lowest:.39},{id:"2",name:"Army Design Template",img:"/products/gallery/g2.png",lowest:.39},{id:"3",name:"Holiday Patches Design Template",img:"/products/gallery/g3.png",lowest:.51},{id:"4",name:"Army Design Template",img:"/products/gallery/g4.png",lowest:.69},{id:"5",name:"Marine Corps Design Template",img:"/products/gallery/g5.png",lowest:1.39},{id:"6",name:"Navy Patches Design Template",img:"/products/gallery/g6.png",lowest:.39},{id:"7",name:"Police Design Template",img:"/products/gallery/g7.png",lowest:.59},{id:"8",name:"Holiday Patches Design Template",img:"/products/gallery/g8.png",lowest:.88}]);return(c,e)=>(l(),u("main",Be,[s("div",Ie,[s("article",Ae,[v(t(he),null,{default:p(()=>[v(t(F),{to:"/home"},{default:p(()=>e[0]||(e[0]=[y("Home")])),_:1}),v(t(F),null,{default:p(()=>e[1]||(e[1]=[y("Custom Patches")])),_:1})]),_:1}),e[4]||(e[4]=s("hgroup",null,[s("h1",null,"Customizable Patch Types"),s("p",null,"Our patches offer incredible value with low per-item costs, high margins, and endless customization options. Ideal for fashion brands, corporate promotions, law enforcement, fire departments, military units, and more, these patches are versatile. Of course, it is also possible to create your own custom patches for clothing, hats, or backpacks, etc.;")],-1)),s("ul",null,[(l(!0),u(O,null,U(d.value,o=>(l(),u("li",{key:o.id},[s("div",ze,[s("img",{src:o.img,alt:o.name,onClick:n=>i(o.id)},null,8,Ve)]),s("footer",Le,[s("section",null,[s("h4",null,_(o.name)+" Patches",1),s("p",null,[e[2]||(e[2]=y("As low as ")),s("strong",xe,[s("span",null,_(o.lowest),1)]),e[3]||(e[3]=y(" ea"))])]),s("div",{class:"btn",onClick:n=>i(o.id)},"Free Quote",8,Oe)])]))),128))])])]),s("div",Ue,[s("article",Fe,[e[7]||(e[7]=s("h2",null,"Custom Patchess Gallery",-1)),s("ul",Ge,[(l(!0),u(O,null,U(g.value,o=>(l(),u("li",{key:o.id},[s("div",He,[s("img",{src:o.img,alt:o.name},null,8,Re)]),s("section",null,[s("h4",null,_(o.name),1),e[5]||(e[5]=s("p",null,"Order From 1Pc",-1)),e[6]||(e[6]=s("a",{href:"#"},[y(" Free Design & Quote "),s("svg",null,[s("use",{"xlink:href":je})])],-1))])]))),128))])])]),e[15]||(e[15]=ce('<div class="ad" data-v-d69f88a0><article class="page-body" data-v-d69f88a0><h2 data-v-d69f88a0><strong data-v-d69f88a0>$0.01 USD</strong> for a patch sample with $6.99 S/H.</h2><p data-v-d69f88a0>All samples ship with a random design to help you evaluate the decorated product.</p></article></div><div class="custom-patches" data-v-d69f88a0><div class="page-body" data-v-d69f88a0><div class="video" data-v-d69f88a0></div><div class="page-content" data-v-d69f88a0><h2 data-v-d69f88a0>Getting Started with Custom Patches</h2><p data-v-d69f88a0>Custom embroidered patches offer the high-quality look of direct embroidery without the high cost. In addition, you get the flexibility of adding your customized design to any article of clothing regardless of size, shape, or fabric.</p><div class="btn" data-v-d69f88a0>View Custom Patches</div></div></div></div>',2)),s("div",We,[s("div",qe,[e[14]||(e[14]=s("hgroup",null,[s("h2",null,"Create Patches Artwork, As Easy As 1.2.3…"),s("p",null,"Create your very own unique patches! You just need to provide a little idea or a draft of your personalized patch design. Our professional design team will provide you a mockup of your patch for your approval, and then make as many tweaks as it takes until you are 100% satisfied.")],-1)),v(t(Ee),{active:3,"align-center":""},{default:p(()=>[v(t(B),{title:"Done"},{title:p(()=>e[8]||(e[8]=[s("p",null,"Send your idea or inspiration.",-1)])),description:p(()=>e[9]||(e[9]=[s("img",{src:$e},null,-1)])),_:1}),v(t(B),{title:"Processing"},{title:p(()=>e[10]||(e[10]=[s("p",null,"Receive a digital 2-D proof for approval.",-1)])),description:p(()=>e[11]||(e[11]=[s("img",{src:Ne},null,-1)])),_:1}),v(t(B),{title:"Step 3"},{title:p(()=>e[12]||(e[12]=[s("p",null,"Get a free real-life rendering.",-1)])),description:p(()=>e[13]||(e[13]=[s("img",{src:Te},null,-1)])),_:1})]),_:1})])]),s("div",Me,[v(ve,{theme:"light"})])]))}}),es=fe(Ke,[["__scopeId","data-v-d69f88a0"]]);export{es as default};
