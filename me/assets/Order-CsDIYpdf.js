import{d as S,q as C,ay as w,t as B,x as D,y as V,c as m,b as t,w as n,u as e,a,B as I,L as T,M as k,bc as $,e as A,aA as M,o as p,bd as U,F as N,f as c,I as u,E as O,n as R,bz as j,_ as z}from"./index-BntcRlxg.js";/* empty css                      *//* empty css                    *//* empty css               */import"./el-tooltip-l0sNRNKZ.js";/* empty css                    *//* empty css                        */import{E as g,a as Y}from"./index-ChtxTNFg.js";import{E as G}from"./index-D5GE0lHh.js";import{E as i,a as H}from"./index-BswRpq78.js";import"./index-CkVAEzLc.js";import"./debounce-Bjved5R2.js";import"./index-DZ_jMB1e.js";const K=""+new URL("No_Order_Yet-B62TK_-o.png",import.meta.url).href,Q={class:"page-order"},X={class:"page-content"},J={class:"flex"},W={class:"flex"},Z={class:"date"},ee={class:"order-number"},te={class:"order-status"},ae={class:"btns"},re={class:"info flex"},oe=["src"],le={class:"total"},se=S({__name:"Order",setup(ne){const b=$(),v=A();console.log(b,"route");const f=C("all");w(()=>{const{status:o="all"}=b.query;f.value=o});const E=C(),F=()=>{const o=[{id:"1",orderDate:"15 Nov 2024",orderNo:"20241122",orderStatus:"pending",goodslist:[{id:"1",name:"50% Embroidered Patches",img:"/products/Challenge Coins/7200.jpg",price:8.02,qty:1,fee:2.99,efee:1.99,rfee:.99,attrs:[{name:"shipping",value:"Free shipping"}]},{id:"2",name:"50% Embroidered Patches",img:"/products/Challenge Coins/7200.jpg",price:8.02,qty:1,fee:2.99,efee:1.99,rfee:.99,attrs:[{name:"shipping",value:"Free shipping"}]}]},{id:"2",orderDate:"15 Nov 2024",orderNo:"20241122",orderStatus:"paid",goodslist:[{id:"1",name:"50% Embroidered Patches",img:"/products/Challenge Coins/7200.jpg",price:8.02,qty:1,fee:2.99,efee:1.99,rfee:.99,attrs:[{name:"shipping",value:"Free shipping"}]}]}];E.value=o||[]};B(()=>{F()});const _=D(()=>{var o;return(o=E.value)==null?void 0:o.filter(l=>f.value==="all"?!0:l.orderStatus===f.value)}),h=V([]),q=o=>{console.log(666),h[o]=!h[o]},x=o=>{v.push("/cart")},L=o=>{v.push("/payment")};return(o,l)=>{const P=M("RouterLink");return p(),m("section",Q,[t(e(Y),{modelValue:f.value,"onUpdate:modelValue":l[0]||(l[0]=s=>f.value=s)},{default:n(()=>[t(e(g),{label:"All Orders",name:"all"}),t(e(g),{label:"Pending",name:"pending"}),t(e(g),{label:"Paid",name:"paid"}),t(e(g),{label:"Refund",name:"refund"})]),_:1},8,["modelValue"]),a("div",X,[!_.value||_.value.length===0?(p(),I(e(G),{key:0,image:e(K),description:"No orders yet."},null,8,["image"])):(p(!0),m(T,{key:1},k(_.value,(s,y)=>(p(),m("div",{class:"order-item",key:s.id},[a("header",J,[a("ul",W,[a("li",Z,[t(e(N),null,{default:n(()=>[t(e(U))]),_:1}),c(" "+u(s.orderDate),1)]),a("li",ee,"Order No: "+u(s.orderNo),1),a("li",te,"Order Status: "+u(s.orderStatus),1)]),a("div",ae,[t(e(O),{type:"primary",onClick:r=>x(s.id)},{default:n(()=>l[1]||(l[1]=[c("Re-Order")])),_:2},1032,["onClick"]),t(e(O),{type:"primary",onClick:r=>L(s.id)},{default:n(()=>l[2]||(l[2]=[c("Go To Pay")])),_:2},1032,["onClick"])])]),t(e(H),{data:s.goodslist,class:R({collaps:h[y]})},{default:n(()=>[t(e(i),{label:"ITEM(s)"},{default:n(({row:r})=>[a("div",re,[a("img",{src:r.img},null,8,oe),a("div",null,[a("h4",null,u(r.name),1),a("ul",null,[(p(!0),m(T,null,k(r.attrs,d=>(p(),m("li",{key:d.name,class:R(d.name)},u(d.value),3))),128))])])])]),_:1}),t(e(i),{prop:"qty",label:"QTY",width:"100",align:"center"}),t(e(i),{prop:"price",label:"UNIT PRICE",width:"110",align:"center"}),t(e(i),{prop:"fee",label:"MOLD FEE",width:"100",align:"center"}),t(e(i),{prop:"efee",label:"EXTRA FEE",width:"100",align:"center"}),t(e(i),{prop:"rfee",label:"RUSH FEE",width:"100",align:"center"}),t(e(i),{label:"TOTAL",width:"100",align:"center"},{default:n(({row:r})=>[c(" $"+u(r.price*r.qty+r.fee+r.efee+r.rfee),1)]),_:1}),t(e(i),{width:"30",align:"center"},{header:n(()=>[t(e(N),{onClick:r=>q(y),class:"control"},{default:n(()=>[t(e(j))]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["data","class"]),a("footer",null,[t(P,{to:`/order/${s.id}`},{default:n(()=>l[3]||(l[3]=[c("View order details")])),_:2},1032,["to"]),a("div",le,[l[4]||(l[4]=c(" TOTAL: ")),a("strong",null,"$"+u(s.goodslist.reduce((r,d)=>r+d.price*d.qty+d.fee+d.efee+d.rfee,0).toFixed(2)),1)])])]))),128))])])}}}),ye=z(se,[["__scopeId","data-v-9b72d94e"]]);export{ye as default};
