import{d as B,f as m,j as W,c as i,s as e,z as a,x as d,a as r,D as c,I as p,J as v,v as U,q as x,T as V,M as F,L,V as M,o,F as g,S as N,n as z,U as G}from"./index-DFPMoMCa.js";/* empty css                      */import"./el-breadcrumb-item-l0sNRNKZ.js";import{E as Q}from"./el-carousel-item-BO8_GJ24.js";/* empty css                        */import{E as y,a as q}from"./index-BA3VJ6P-.js";import{E as A,a as H}from"./index-BUkElXB1.js";import{E as O}from"./index-Ww4EvrqK.js";import"./index-BctufpOW.js";import"./debounce-Dr_Sptyb.js";const f=V+"#arrow-left",j={class:"page-goods"},R={class:"breadcrumb-wrap"},J={class:"page-body"},K={class:"goods-detail"},Y={key:0,class:"page-body"},X={class:"info"},Z={class:"item price"},ee={class:"value"},te={class:"item wholesale"},se={class:"value"},le={class:"border"},oe={class:"img"},ne={class:"main"},ie=["onClick"],re=["src"],ae={class:"desc"},ue={class:"page-body"},de=["innerHTML"],ce={class:"similar-patches"},me={class:"page-body"},pe={class:"goodslist"},ve=["onClick"],he={class:"img"},ge=["src","alt"],ye={class:"van-ellipsis"},fe=B({__name:"Goods",setup(_e){const w=F(),$=L();function I(n){w.push(`/product/${n}`)}const l=m(),E=async()=>{const{id:n}=$.params,{data:t}=await M(`product/GetProductByProductId?id=${n}`);return t};W(async()=>{const n=await E();l.value=n});const _=m(!1),C=m(),P=m(),T=n=>{var t;(t=C.value)==null||t.setActiveItem(n)},k=m(0),D=n=>{var s,u,b;if(!l.value)return;k.value=n;const t=(((s=P.value)==null?void 0:s.scrollWidth)||0)/((u=l.value.ProductPictures)==null?void 0:u.length),h=Math.max((n-3)*t,0);(b=P.value)==null||b.scrollTo(h,0)},S=m([{id:"1",name:"Unfinished yet to be determined",img:"/products/gallery/g1.png"},{id:"2",name:"Unfinished yet to be determined",img:"/products/gallery/g2.png"},{id:"3",name:"Unfinished yet to be determined",img:"/products/gallery/g3.png"},{id:"4",name:"Unfinished yet to be determined",img:"/products/gallery/g4.png"}]);return(n,t)=>{var h;return o(),i("main",j,[e("header",R,[e("div",J,[a(r(q),null,{default:d(()=>[a(r(y),{to:"/home"},{default:d(()=>t[3]||(t[3]=[g("Home")])),_:1}),a(r(y),{to:"/patches"},{default:d(()=>t[4]||(t[4]=[g("In stock")])),_:1}),a(r(y),{to:"/patches"},{default:d(()=>t[5]||(t[5]=[g("Stock Lapel Pins")])),_:1}),a(r(y),null,{default:d(()=>t[6]||(t[6]=[g("Animal Pins")])),_:1})]),_:1})])]),e("div",K,[l.value?(o(),i("div",Y,[e("section",X,[e("hgroup",null,[e("h1",null,c(l.value.name),1),e("p",null,"SKU: "+c(l.value.sku),1)]),e("div",Z,[t[7]||(t[7]=e("h5",null,"Unit Price: ",-1)),e("div",ee,"USD $ "+c(l.value.TierPrices[l.value.TierPrices.length-1].Price)+"-"+c(l.value.TierPrices[0].Price),1)]),e("div",te,[t[8]||(t[8]=e("h5",null,"Wholesale Price: ",-1)),e("div",se,[e("table",le,[e("tbody",null,[e("tr",null,[(o(!0),i(p,null,v(l.value.TierPrices,s=>(o(),i("td",{key:s.Quantity},c(s.Quantity)+"+",1))),128))]),e("tr",null,[(o(!0),i(p,null,v(l.value.TierPrices,s=>(o(),i("td",{key:s.Quantity},"$"+c(s.Price),1))),128))])])])])]),e("div",{class:"btn btn-block btn-contact",onClick:t[0]||(t[0]=s=>r(w).push("/contact"))},"Contact Us"),a(N,{title:"What We Offer",data:["shipping","qty"]}),t[9]||(t[9]=e("div",{class:"details-list"},[e("details",null,[e("summary",null,[e("h4",null,"Free Design & Consultation"),e("svg",null,[e("use",{"xlink:href":f})])]),e("p",null,"Upon placing an order, you’ll receive free mockups from our designer until you’re completely satisfied. Whether you have vector-ready artwork or just an idea, our designers will bring your vision to life.")]),e("details",null,[e("summary",null,[e("h4",null,"Factory Direct Sales"),e("svg",null,[e("use",{"xlink:href":f})])]),e("p",null,"By sourcing directly from trustedmanufacturers and streamliningour operations, we pass on thecost savings to our customers.ensuring that you get the bestvalue for your money whenshopping with us.")]),e("details",null,[e("summary",null,[e("h4",null,"Guaranteed Quality"),e("svg",null,[e("use",{"xlink:href":f})])]),e("p",null,"We ensure top-notch quality control by manually inspecting every product we anufacture, adhering to the high standards of luxury brands. If your product doesn’t meet specifications, we’ll remake it at no additional cost.")]),e("details",null,[e("summary",null,[e("h4",null,"As Fast as You Need"),e("svg",null,[e("use",{"xlink:href":f})])]),e("p",null,"With a 99.8% on-time delivery record, we meet any deadline, ensuring your product arrives on time for your event. Our customer support team is ready to assist with any delivery concerns.")])],-1))]),e("div",oe,[e("div",ne,[a(r(H),{ref_key:"$swiper",ref:C,height:"100%",onChange:D,autoplay:!1,loop:!1,"indicator-position":"none"},{default:d(()=>[(o(!0),i(p,null,v(l.value.ProductPictures,s=>(o(),U(r(A),{key:s.PictureUrl,onClickPassive:t[1]||(t[1]=u=>_.value=!0)},{default:d(()=>[a(r(Q),{src:s.PictureUrl,fit:"scale-down",loading:"lazy"},null,8,["src"])]),_:2},1024))),128))]),_:1},512),_.value?(o(),U(r(O),{key:0,"url-list":l.value.ProductPictures.map(s=>s.PictureUrl),"initial-index":k.value,"z-index":1e3,onClose:t[2]||(t[2]=s=>_.value=!1),teleported:""},null,8,["url-list","initial-index"])):x("",!0)]),e("div",{class:"thumbs",ref_key:"$thumbs",ref:P},[e("ul",null,[(o(!0),i(p,null,v(l.value.ProductPictures,(s,u)=>(o(),i("li",{key:s.PictureUrl,class:z({active:u===k.value}),onClick:b=>T(u)},[e("img",{src:s.PictureUrl},null,8,re)],10,ie))),128))])],512)])])):x("",!0)]),e("div",ae,[e("div",ue,[t[10]||(t[10]=e("header",null,[e("h2",null,"Description")],-1)),e("div",{class:"page-content",innerHTML:(h=l.value)==null?void 0:h.ShortDescription},null,8,de)])]),e("div",ce,[e("div",me,[t[11]||(t[11]=e("h2",null,"Similar Patches",-1)),e("ul",pe,[(o(!0),i(p,null,v(S.value,s=>(o(),i("li",{key:s.id,onClick:u=>I(s.id)},[e("div",he,[e("img",{src:s.img,alt:s.name},null,8,ge)]),e("h4",ye,c(s.name),1)],8,ve))),128))])])])])}}}),Te=G(fe,[["__scopeId","data-v-580801d1"]]);export{Te as default};
