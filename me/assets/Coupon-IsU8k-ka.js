import{d as E,q as c,t as x,x as v,c as r,a,b as u,w as m,u as o,B as y,L as g,M as C,bw as h,e as w,o as s,f as D,cn as N,E as k,n as B,I as n,_ as O}from"./index-BJxxO0O0.js";/* empty css                      *//* empty css                    *//* empty css               */import"./el-tooltip-l0sNRNKZ.js";/* empty css                    *//* empty css                        */import{E as f,a as V}from"./index-Cdr77tML.js";import{E as M}from"./index-EXMuJ9aY.js";import"./index-CCdSJLRb.js";const H=""+new URL("coupon_empty-B5c33fjs.png",import.meta.url).href,L={class:"page-coupon"},R={class:"flex"},W={class:"page-content"},F={key:1,class:"coupon-list"},T={class:"code"},U={class:"value"},$={class:"expires"},I={class:"value"},S=E({__name:"Coupon",setup(j){h(),w();const i=c("available"),d=c(),_=()=>{const t=[{id:1,expires:17331552e5,value:15,code:"NEWHOME",type:"once"},{id:2,expires:17671536e5,value:15,code:"NEWHOME",type:"once"},{id:3,expires:17671536e5,value:25,code:"NEWHOME",type:"once"},{id:3,expires:17356176e5,value:25,code:"NEWHOME",type:"once"}];d.value=t||[]};x(()=>{_()});const p=v(()=>{var t;return(t=d.value)==null?void 0:t.filter(e=>{if(i.value==="unavailable")return e.available=!1,e.expires<Date.now();if(i.value==="available")return e.available=!0,e.expires>=Date.now()})}),b=v(()=>{var t;return(t=d.value)==null?void 0:t.filter(e=>e.expires>=Date.now()).length});return(t,e)=>(s(),r("section",L,[a("header",R,[e[2]||(e[2]=a("h1",null,"Coupon Center",-1)),u(o(k),{link:"",icon:o(N)},{default:m(()=>e[1]||(e[1]=[D("Rules")])),_:1},8,["icon"])]),u(o(V),{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=l=>i.value=l)},{default:m(()=>[u(o(f),{label:`Available(${b.value})`,name:"available"},null,8,["label"]),u(o(f),{label:"Unavailable",name:"unavailable"})]),_:1},8,["modelValue"]),a("div",W,[!p.value||p.value.length===0?(s(),y(o(M),{key:0,image:o(H),description:"No orders yet."},null,8,["image"])):(s(),r("div",F,[(s(!0),r(g,null,C(p.value,l=>(s(),r("div",{class:B(["item flex",{available:l.available}]),key:l.id},[a("header",null," $"+n(l.value)+" OFF ",1),a("ul",null,[a("li",T,[e[3]||(e[3]=a("h5",null,"CODE:",-1)),a("div",U,n(l.code),1)]),a("li",null,"Order over $"+n(l.value),1),a("li",null,"available "+n(l.type),1),a("li",$,[e[4]||(e[4]=a("h5",null,"Validity period:",-1)),a("div",I,n(new Date(l.expires).toLocaleString()),1)])])],2))),128))]))])]))}}),Z=O(S,[["__scopeId","data-v-4a00f496"]]);export{Z as default};
