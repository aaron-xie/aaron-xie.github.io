import{d as x,q as m,t as k,c as d,a as e,B,u as o,b as u,w as p,f as v,I as t,N as E,L as f,M as y,e as I,bc as T,o as n,bd as O,F as g,be as F,E as b,_ as $}from"./index-BntcRlxg.js";/* empty css                      *//* empty css                   *//* empty css                      *//* empty css                    *//* empty css                        */import{E as q}from"./index-D5GE0lHh.js";import{E as M}from"./index-BAEInASc.js";function P(h){navigator.clipboard.writeText(h)}const w={class:"page-order"},V={class:"page-body"},z={key:1,class:"page-content"},H={class:"flex"},L={class:"flex"},U={class:"date"},j={class:"order-number"},A={class:"order-status"},G={class:"btns"},R={class:"details flex"},W={class:"shipping"},Y={class:"addr"},J={class:"flex"},K={class:"phone-number"},Q={class:"payment"},X={class:"order-info"},Z={class:"kv-list"},ee={class:"value"},ae={class:"shipment"},te={class:"img"},se=["src"],le={class:"kv-list"},oe={class:"value"},ne={class:"flex"},ie=x({__name:"OrderDetail",setup(h){I();const S=T(),{id:N}=S.params,l=m(),C=()=>{console.log("orderid",N);const c={id:"1",orderDate:"15 Nov 2024",orderNo:"20241122",orderStatus:"pending",goodslist:[{id:"1",name:"Embroidered Patches",img:"/products/Challenge Coins/7200.jpg",qty:2,price:5.9,fee:.5,attrs:[{name:"Number of Colors",value:"1 ~ 9 Colors"},{name:"Size",value:"3 Inches"},{name:"Select Shape",value:"Custom Shape"},{name:"Backing",value:"Adhesive"},{name:"Border",value:"Heat Cut"},{name:"More Options",value:"Button Loop"},{name:"Intended Use",value:"For Hat"},{name:"Delivery Date",value:"10 business days for production, 3 days shipping.",editable:!0},{name:"Comments",value:"",editable:!0,editType:"textarea"}]},{id:"2",name:"Embroidered Patches",img:"/products/Challenge Coins/7200.jpg",qty:1,price:10.9,fee:.5,attrs:[{name:"Number of Colors",value:"1 ~ 9 Colors"},{name:"Size",value:"3 Inches"},{name:"Select Shape",value:"Custom Shape"},{name:"Backing",value:"Adhesive"},{name:"Border",value:"Heat Cut"},{name:"More Options",value:"Button Loop"},{name:"Intended Use",value:"For Hat"},{name:"Delivery Date",value:"10 business days for production, 3 days shipping.",editable:!0},{name:"Comments",value:"",editable:!0,editType:"textarea"}]}]};l.value=c};k(()=>{C()});const i=m({id:2,firstName:"Velar",lastName:"Cassandra",phoneNumber:"7865028305",address1:"Florida, 13531 SW 96th St.",address2:"Miami, Florida, United States",zip:"33186"}),_=m({type:"Paypal",payTime:"12/3/2024"}),D=c=>{P(c),M({message:"Copy Success",type:"success",plain:!0})};return(c,a)=>(n(),d("main",w,[e("article",V,[a[9]||(a[9]=e("h1",null,"Order Detail",-1)),l.value?(n(),d("div",z,[e("header",H,[e("ul",L,[e("li",U,[u(o(g),null,{default:p(()=>[u(o(O))]),_:1}),v(" "+t(l.value.orderDate),1)]),e("li",j,[v("Order No: "+t(l.value.orderNo)+" ",1),u(o(g),null,{default:p(()=>[u(o(F),{onClick:a[0]||(a[0]=s=>D(l.value.orderNo))})]),_:1})]),e("li",A,"Order Status: "+t(l.value.orderStatus),1)]),e("div",G,[u(o(b),{type:"primary"},{default:p(()=>a[1]||(a[1]=[v("Go To Pay")])),_:1})])]),e("ul",R,[e("li",W,[a[2]||(a[2]=e("h3",null,"Shipping Information",-1)),e("section",Y,[e("header",J,[e("h4",null,t(i.value.firstName)+" "+t(i.value.lastName),1),e("div",K,t(i.value.phoneNumber),1)]),e("p",null,t(i.value.address1),1),e("p",null,t(i.value.address2)+","+t(i.value.zip),1)]),a[3]||(a[3]=e("div",{class:"note"},"Note: Your order will not ship until we receive payment.",-1))]),e("li",Q,[a[4]||(a[4]=e("h3",null,"Payment Method",-1)),e("p",null,t(_.value.type),1),e("p",null,"Payment Time: "+t(_.value.payTime),1)]),e("li",X,[a[7]||(a[7]=e("h3",null,"Order Summary",-1)),e("ul",Z,[e("li",null,[a[5]||(a[5]=e("h5",null,"Item(s) Subtotal:",-1)),e("div",ee,"$"+t(l.value.goodslist.reduce((s,r)=>s+r.price*r.qty,0).toFixed(2)),1)]),a[6]||(a[6]=E('<li data-v-cf5c1521><h5 data-v-cf5c1521>Item(s) Discount:</h5><div class="value" data-v-cf5c1521>-$15.0</div></li><li data-v-cf5c1521><h5 data-v-cf5c1521>Shipping Fee:</h5><div class="value" data-v-cf5c1521>$9.5</div></li><li data-v-cf5c1521><h5 data-v-cf5c1521>Sales Tax:</h5><div class="value" data-v-cf5c1521>$9.5</div></li><li data-v-cf5c1521><h5 data-v-cf5c1521>Grand Total:</h5><div class="value" data-v-cf5c1521>$29.5</div></li>',4))])])]),e("section",ae,[e("h2",null,"ShipmentDetail( "+t(l.value.goodslist.length)+" Items )",1),e("ul",null,[(n(!0),d(f,null,y(l.value.goodslist,s=>(n(),d("li",{key:s.id,class:"flex"},[e("div",te,[e("img",{src:s.img},null,8,se)]),e("section",null,[e("h4",null,t(s.name),1),e("ul",le,[(n(!0),d(f,null,y(s.attrs,r=>(n(),d("li",{key:r.name},[e("h5",null,t(r.name),1),e("div",oe,t(r.value),1)]))),128))])]),e("footer",ne,[u(o(b),{type:"primary",link:"",class:"btn-track"},{default:p(()=>a[8]||(a[8]=[v("Track Order")])),_:1}),e("ul",null,[e("li",null,"Unit Price: $"+t(s.price),1),e("li",null,"qty: "+t(s.qty),1),e("li",null,"$"+t(s.price*s.qty),1)])])]))),128))])])])):(n(),B(o(q),{key:0,description:"No Data"}))])]))}}),_e=$(ie,[["__scopeId","data-v-cf5c1521"]]);export{_e as default};
