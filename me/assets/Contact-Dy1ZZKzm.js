import{d as q,f as i,m as I,j as T,c as U,s as l,z as o,x as t,a as s,F as u,o as y,bo as m,am as v,E as M,bm as P,v as B,q as N,N as k,bn as R,bz as S,br as _,U as z}from"./index-DFPMoMCa.js";import"./el-breadcrumb-item-l0sNRNKZ.js";/* empty css                      *//* empty css                    *//* empty css                        */import{E as w,a as L}from"./index-BA3VJ6P-.js";import{E as A}from"./index-CEBlHd3c.js";import{E as D}from"./index-Ww4EvrqK.js";import"./debounce-Dr_Sptyb.js";const F={class:"page-contact"},Y={class:"page-body"},j={class:"form"},H=q({__name:"Contact",setup(O){const d=i([{name:"product",url:"/products/Challenge Coins/7200.jpg"}]),E=(r,e)=>{console.log(r,e)},p=i(0),f=i(!1),h=d.value.map(r=>r.url),V=r=>{console.log("handlePreview",r),p.value=d.value.findIndex(e=>e.url===r.url),f.value=!0,console.log("index",p.value)},n=I({name:"",email:"",message:""}),x={name:[{required:!0,message:"This field is required"}],email:[{required:!0,message:"This field is required"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}],message:[{required:!0,message:"This field is required"}]},c=i(),C=()=>{c.value&&c.value.validate(async r=>{if(r){const{message:e,...a}=n,b=await S("/customer/ContactUS",{...a,comment:e});_({type:b.status===200?"success":"error",message:b.msg})}else console.log("error submit!")})},g=i("right");return T(()=>{window.scrollY>0&&window.scrollTo(0,0),new ResizeObserver((r,e)=>{r.forEach(a=>{a.contentRect.width<750?g.value="top":g.value="right"})}).observe(document.body)}),(r,e)=>(y(),U("main",F,[l("article",Y,[o(s(L),null,{default:t(()=>[o(s(w),{to:"/home"},{default:t(()=>e[5]||(e[5]=[u("Home")])),_:1}),o(s(w),null,{default:t(()=>e[6]||(e[6]=[u("Contact Us")])),_:1})]),_:1}),e[11]||(e[11]=l("header",null,[l("h1",null,"CONTACT US"),l("p",null,[u("We are always ready to help you. MAXEMBLEM.Com is here to assist you in any way we can."),l("br"),u(" If you have questions about our products or services, don't hesitate to contact us. ")])],-1)),l("section",j,[e[10]||(e[10]=l("h2",null,"Email Us",-1)),o(s(R),{"label-position":g.value,"label-width":"10em",ref_key:"formRef",ref:c,model:n,rules:x},{default:t(()=>[o(s(m),{label:"Name",prop:"name",required:""},{default:t(()=>[o(s(v),{modelValue:n.name,"onUpdate:modelValue":e[0]||(e[0]=a=>n.name=a)},null,8,["modelValue"])]),_:1}),o(s(m),{label:"Email",prop:"email",type:"email",required:""},{default:t(()=>[o(s(v),{modelValue:n.email,"onUpdate:modelValue":e[1]||(e[1]=a=>n.email=a)},null,8,["modelValue"])]),_:1}),o(s(m),{label:"Your Message",prop:"message",required:""},{default:t(()=>[o(s(v),{type:"textarea",modelValue:n.message,"onUpdate:modelValue":e[2]||(e[2]=a=>n.message=a),maxlength:"5000","show-word-limit":"",rows:5,placeholder:"Please enter your detailed instructions"},null,8,["modelValue"])]),_:1}),o(s(m),{label:"Image"},{default:t(()=>[o(s(A),{"file-list":d.value,"onUpdate:fileList":e[3]||(e[3]=a=>d.value=a),multiple:"","on-preview":V,"on-remove":E,limit:3,"list-type":"picture-card",accept:"image/*","auto-upload":!1},{default:t(()=>[o(s(M),null,{default:t(()=>[o(s(P))]),_:1})]),_:1},8,["file-list"]),e[7]||(e[7]=l("p",{class:"tips"},"In order to help you better solve the problem, please be sure to upload valid credentials. ",-1)),f.value?(y(),B(s(D),{key:0,"url-list":s(h),"initial-index":p.value,"z-index":1e3,onClose:e[4]||(e[4]=a=>f.value=!1),teleported:""},null,8,["url-list","initial-index"])):N("",!0)]),_:1}),o(s(m),{class:"send"},{default:t(()=>[o(s(k),{type:"primary",class:"btn-send",onClick:C},{default:t(()=>e[8]||(e[8]=[u("Send Email")])),_:1}),e[9]||(e[9]=l("p",{class:"tips"},"You should receive a response from one of our representatives within 24 hours.",-1))]),_:1})]),_:1},8,["label-position","model"])]),e[12]||(e[12]=l("footer",{class:"contact-info"},[l("ul",null,[l("li",null,[l("h5",null,"Tel: 00-000-0000-0000"),l("p",null,"Monday - Friday 8:30 AM to 5:30 PM Pacific Time (PT)")]),l("li",null,[l("h5",null,"Email: info@maxemblem.com"),l("p",null,"We'll answer your questions in 24 hours.")]),l("li",null,[l("h5",null,"Address:"),l("p",null,"248-2 Hua Qing Da Dao, Longhua Qu, Shenzhen Shi, Guangdong Shen")])])],-1))])]))}}),le=z(H,[["__scopeId","data-v-b2e14560"]]);export{le as default};
