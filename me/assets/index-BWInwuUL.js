import{g as _,m as C,d as c,a0 as E,h as y,q as v,p as P,t as S,o,c as u,r as k,n,u as e,k as B,av as $,s as w,a as x,B as f,w as D,D as K,F as N,I as j,l as q,J as A,K as T}from"./index-60xw3530.js";const I=Symbol("breadcrumbKey"),z=_({separator:{type:String,default:"/"},separatorIcon:{type:C}}),F=c({name:"ElBreadcrumb"}),J=c({...F,props:z,setup(l){const s=l,{t:p}=E(),t=y("breadcrumb"),r=v();return P(I,s),S(()=>{const a=r.value.querySelectorAll(`.${t.e("item")}`);a.length&&a[a.length-1].setAttribute("aria-current","page")}),(a,i)=>(o(),u("div",{ref_key:"breadcrumb",ref:r,class:n(e(t).b()),"aria-label":e(p)("el.breadcrumb.label"),role:"navigation"},[k(a.$slots,"default")],10,["aria-label"]))}});var L=B(J,[["__file","breadcrumb.vue"]]);const M=_({to:{type:$([String,Object]),default:""},replace:Boolean}),O=c({name:"ElBreadcrumbItem"}),V=c({...O,props:M,setup(l){const s=l,p=q(),t=w(I,void 0),r=y("breadcrumb"),a=p.appContext.config.globalProperties.$router,i=v(),h=()=>{!s.to||!a||(s.replace?a.replace(s.to):a.push(s.to))};return(b,G)=>{var m,d;return o(),u("span",{class:n(e(r).e("item"))},[x("span",{ref_key:"link",ref:i,class:n([e(r).e("inner"),e(r).is("link",!!b.to)]),role:"link",onClick:h},[k(b.$slots,"default")],2),(m=e(t))!=null&&m.separatorIcon?(o(),f(e(N),{key:0,class:n(e(r).e("separator"))},{default:D(()=>[(o(),f(K(e(t).separatorIcon)))]),_:1},8,["class"])):(o(),u("span",{key:1,class:n(e(r).e("separator")),role:"presentation"},j((d=e(t))==null?void 0:d.separator),3))],2)}}});var g=B(V,[["__file","breadcrumb-item.vue"]]);const Q=A(L,{BreadcrumbItem:g}),R=T(g);export{R as E,Q as a};
