import{g as Q,m as W,a5 as x,a6 as ee,a4 as R,bf as se,d as _,bg as ne,q as B,x as f,bh as O,t as oe,j as te,af as ae,S as le,o as m,B as h,w as M,X as re,a as D,n as y,u as a,A as ie,bi as ue,z as w,F,D as ce,r as de,c as $,I as pe,L as fe,Y as me,b as P,$ as ge,a0 as ye,k as ve,bj as Ce,bk as be,ba as he,T as H,V as U,aL as k,bl as V,i as E,ad as Te,bm as A,bn as we}from"./index-BntcRlxg.js";const c={},j=["success","info","warning","error"],r=ee({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:R?document.body:void 0}),Se=Q({customClass:{type:String,default:r.customClass},center:{type:Boolean,default:r.center},dangerouslyUseHTMLString:{type:Boolean,default:r.dangerouslyUseHTMLString},duration:{type:Number,default:r.duration},icon:{type:W,default:r.icon},id:{type:String,default:r.id},message:{type:x([String,Object,Function]),default:r.message},onClose:{type:x(Function),default:r.onClose},showClose:{type:Boolean,default:r.showClose},type:{type:String,values:j,default:r.type},plain:{type:Boolean,default:r.plain},offset:{type:Number,default:r.offset},zIndex:{type:Number,default:r.zIndex},grouping:{type:Boolean,default:r.grouping},repeatNum:{type:Number,default:r.repeatNum}}),Ne={destroy:()=>!0},u=se([]),Be=s=>{const n=u.findIndex(o=>o.id===s),e=u[n];let l;return n>0&&(l=u[n-1]),{current:e,prev:l}},Me=s=>{const{prev:n}=Be(s);return n?n.vm.exposed.bottom.value:0},ke=(s,n)=>u.findIndex(l=>l.id===s)>0?16:n,Ee=_({name:"ElMessage"}),Le=_({...Ee,props:Se,emits:Ne,setup(s,{expose:n}){const e=s,{Close:l}=Ce,{ns:o,zIndex:d}=ne("message"),{currentZIndex:i,nextZIndex:p}=d,g=B(),C=B(!1),b=B(0);let S;const Z=f(()=>e.type?e.type==="error"?"danger":e.type:"info"),G=f(()=>{const t=e.type;return{[o.bm("icon",t)]:t&&O[t]}}),L=f(()=>e.icon||O[e.type]||""),X=f(()=>Me(e.id)),z=f(()=>ke(e.id,e.offset)+X.value),Y=f(()=>b.value+z.value),J=f(()=>({top:`${z.value}px`,zIndex:i.value}));function N(){e.duration!==0&&({stop:S}=be(()=>{T()},e.duration))}function I(){S==null||S()}function T(){C.value=!1}function K({code:t}){t===he.esc&&T()}return oe(()=>{N(),p(),C.value=!0}),te(()=>e.repeatNum,()=>{I(),N()}),ae(document,"keydown",K),le(g,()=>{b.value=g.value.getBoundingClientRect().height}),n({visible:C,bottom:Y,close:T}),(t,Fe)=>(m(),h(ye,{name:a(o).b("fade"),onBeforeLeave:t.onClose,onAfterLeave:$e=>t.$emit("destroy"),persisted:""},{default:M(()=>[re(D("div",{id:t.id,ref_key:"messageRef",ref:g,class:y([a(o).b(),{[a(o).m(t.type)]:t.type},a(o).is("center",t.center),a(o).is("closable",t.showClose),a(o).is("plain",t.plain),t.customClass]),style:ie(a(J)),role:"alert",onMouseenter:I,onMouseleave:N},[t.repeatNum>1?(m(),h(a(ue),{key:0,value:t.repeatNum,type:a(Z),class:y(a(o).e("badge"))},null,8,["value","type","class"])):w("v-if",!0),a(L)?(m(),h(a(F),{key:1,class:y([a(o).e("icon"),a(G)])},{default:M(()=>[(m(),h(ce(a(L))))]),_:1},8,["class"])):w("v-if",!0),de(t.$slots,"default",{},()=>[t.dangerouslyUseHTMLString?(m(),$(fe,{key:1},[w(" Caution here, message could've been compromised, never use user's input as message "),D("p",{class:y(a(o).e("content")),innerHTML:t.message},null,10,["innerHTML"])],2112)):(m(),$("p",{key:0,class:y(a(o).e("content"))},pe(t.message),3))]),t.showClose?(m(),h(a(F),{key:2,class:y(a(o).e("closeBtn")),onClick:me(T,["stop"])},{default:M(()=>[P(a(l))]),_:1},8,["class","onClick"])):w("v-if",!0)],46,["id"]),[[ge,C.value]])]),_:3},8,["name","onBeforeLeave","onAfterLeave"]))}});var ze=ve(Le,[["__file","message.vue"]]);let Ie=1;const q=s=>{const n=!s||H(s)||U(s)||k(s)?{message:s}:s,e={...r,...n};if(!e.appendTo)e.appendTo=document.body;else if(H(e.appendTo)){let l=document.querySelector(e.appendTo);Te(l)||(l=document.body),e.appendTo=l}return V(c.grouping)&&!e.grouping&&(e.grouping=c.grouping),E(c.duration)&&e.duration===3e3&&(e.duration=c.duration),E(c.offset)&&e.offset===16&&(e.offset=c.offset),V(c.showClose)&&!e.showClose&&(e.showClose=c.showClose),e},xe=s=>{const n=u.indexOf(s);if(n===-1)return;u.splice(n,1);const{handler:e}=s;e.close()},Oe=({appendTo:s,...n},e)=>{const l=`message_${Ie++}`,o=n.onClose,d=document.createElement("div"),i={...n,id:l,onClose:()=>{o==null||o(),xe(b)},onDestroy:()=>{A(null,d)}},p=P(ze,i,k(i.message)||U(i.message)?{default:k(i.message)?i.message:()=>i.message}:null);p.appContext=e||v._context,A(p,d),s.appendChild(d.firstElementChild);const g=p.component,b={id:l,vnode:p,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:p.component.props};return b},v=(s={},n)=>{if(!R)return{close:()=>{}};const e=q(s);if(e.grouping&&u.length){const o=u.find(({vnode:d})=>{var i;return((i=d.props)==null?void 0:i.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}if(E(c.max)&&u.length>=c.max)return{close:()=>{}};const l=Oe(e,n);return u.push(l),l.handler};j.forEach(s=>{v[s]=(n={},e)=>{const l=q(n);return v({...l,type:s},e)}});function De(s){for(const n of u)(!s||s===n.props.type)&&n.handler.close()}v.closeAll=De;v._context=null;const Ve=we(v,"$message");export{Ve as E};
