import{b as _,e as C,d as c,ax as E,u as y,f as v,p as x,j as P,o,c as u,r as k,n,a as e,_ as g,a2 as S,h as $,s as j,v as f,x as w,y as D,E as N,D as A,g as K,G as T,H as q}from"./index-BRm-_Hy6.js";const B=Symbol("breadcrumbKey"),z=_({separator:{type:String,default:"/"},separatorIcon:{type:C}}),G=c({name:"ElBreadcrumb"}),H=c({...G,props:z,setup(l){const s=l,{t:p}=E(),t=y("breadcrumb"),r=v();return x(B,s),P(()=>{const a=r.value.querySelectorAll(`.${t.e("item")}`);a.length&&a[a.length-1].setAttribute("aria-current","page")}),(a,i)=>(o(),u("div",{ref_key:"breadcrumb",ref:r,class:n(e(t).b()),"aria-label":e(p)("el.breadcrumb.label"),role:"navigation"},[k(a.$slots,"default")],10,["aria-label"]))}});var L=g(H,[["__file","breadcrumb.vue"]]);const M=_({to:{type:S([String,Object]),default:""},replace:Boolean}),O=c({name:"ElBreadcrumbItem"}),V=c({...O,props:M,setup(l){const s=l,p=K(),t=$(B,void 0),r=y("breadcrumb"),a=p.appContext.config.globalProperties.$router,i=v(),h=()=>{!s.to||!a||(s.replace?a.replace(s.to):a.push(s.to))};return(b,F)=>{var m,d;return o(),u("span",{class:n(e(r).e("item"))},[j("span",{ref_key:"link",ref:i,class:n([e(r).e("inner"),e(r).is("link",!!b.to)]),role:"link",onClick:h},[k(b.$slots,"default")],2),(m=e(t))!=null&&m.separatorIcon?(o(),f(e(N),{key:0,class:n(e(r).e("separator"))},{default:w(()=>[(o(),f(D(e(t).separatorIcon)))]),_:1},8,["class"])):(o(),u("span",{key:1,class:n(e(r).e("separator")),role:"presentation"},A((d=e(t))==null?void 0:d.separator),3))],2)}}});var I=g(V,[["__file","breadcrumb-item.vue"]]);const Q=T(L,{BreadcrumbItem:I}),R=q(I);export{R as E,Q as a};
