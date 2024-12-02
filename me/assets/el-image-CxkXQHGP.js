import{Q as W,R as Fe,g as fe,i as Ee,S as We,q as h,x as _,u as e,j as q,T as Ue,t as ve,U as Ge,v as Ye,p as qe,V as _e,W as Xe,l as Le,d as X,h as de,X as Te,o as E,c as B,B as ie,w as te,Y as ae,a as V,n as P,Z as x,b as ee,F as we,$ as Ze,a0 as ne,a1 as Ie,z as R,a2 as Je,r as le,A as Me,L as ue,M as Qe,I as Ne,k as me,s as xe,y as et,a3 as tt,a4 as at,J as Be,K as nt,a5 as re,a6 as lt,a7 as ot,a8 as st,a9 as rt,aa as it,ab as Ce,ac as ut,ad as ct,ae as Se,af as ft}from"./index-xiEWGraw.js";import{u as vt}from"./index-D3GulhLu.js";import{f as dt}from"./vnode-BflcI9Xd.js";import{t as be,E as mt}from"./index-DNBzY9sI.js";const ht=(a,s)=>{if(!W)return!1;const l={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(s)],o=Fe(a,l);return["scroll","auto","overlay"].some($=>o.includes($))},pt=(a,s)=>{if(!W)return;let l=a;for(;l;){if([window,document,document.documentElement].includes(l))return window;if(ht(l,s))return l;l=l.parentNode}return l},gt=fe({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),yt={change:(a,s)=>[a,s].every(Ee)},$e=Symbol("carouselContextKey"),ce="ElCarouselItem",ke=300,wt=(a,s,l)=>{const{children:o,addChild:$,removeChild:f}=vt(Le(),ce),z=We(),r=h(-1),b=h(null),L=h(!1),d=h(),I=h(0),k=h(!0),p=h(!0),v=h(!1),j=_(()=>a.arrow!=="never"&&!e(A)),O=_(()=>o.value.some(n=>n.props.label.toString().length>0)),T=_(()=>a.type==="card"),A=_(()=>a.direction==="vertical"),i=_(()=>a.height!=="auto"?{height:a.height}:{height:`${I.value}px`,overflow:"hidden"}),u=be(n=>{N(n)},ke,{trailing:!0}),C=be(n=>{S(n)},ke),w=n=>k.value?r.value<=1?n<=1:n>1:!0;function g(){b.value&&(clearInterval(b.value),b.value=null)}function H(){a.interval<=0||!a.autoplay||b.value||(b.value=setInterval(()=>M(),a.interval))}const M=()=>{p.value||(v.value=!0),p.value=!1,r.value<o.value.length-1?r.value=r.value+1:a.loop?r.value=0:v.value=!1};function N(n){if(p.value||(v.value=!0),p.value=!1,_e(n)){const K=o.value.filter(U=>U.props.name===n);K.length>0&&(n=o.value.indexOf(K[0]))}if(n=Number(n),Number.isNaN(n)||n!==Math.floor(n))return;const m=o.value.length,D=r.value;n<0?r.value=a.loop?m-1:0:n>=m?r.value=a.loop?0:m-1:r.value=n,D===r.value&&c(D),he()}function c(n){o.value.forEach((m,D)=>{m.translateItem(D,r.value,n)})}function F(n,m){var D,K,U,pe;const Q=e(o),ge=Q.length;if(ge===0||!n.states.inStage)return!1;const Pe=m+1,Ve=m-1,ye=ge-1,Re=Q[ye].states.active,De=Q[0].states.active,je=(K=(D=Q[Pe])==null?void 0:D.states)==null?void 0:K.active,Ke=(pe=(U=Q[Ve])==null?void 0:U.states)==null?void 0:pe.active;return m===ye&&De||je?"left":m===0&&Re||Ke?"right":!1}function G(){L.value=!0,a.pauseOnHover&&g()}function Z(){L.value=!1,H()}function J(){v.value=!1}function y(n){e(A)||o.value.forEach((m,D)=>{n===F(m,D)&&(m.states.hover=!0)})}function oe(){e(A)||o.value.forEach(n=>{n.states.hover=!1})}function t(n){n!==r.value&&(p.value||(v.value=!0)),r.value=n}function S(n){a.trigger==="hover"&&n!==r.value&&(r.value=n,p.value||(v.value=!0))}function Y(){N(r.value-1)}function Ae(){N(r.value+1)}function he(){g(),a.pauseOnHover||H()}function He(n){a.height==="auto"&&(I.value=n)}function Oe(){var n;const m=(n=z.default)==null?void 0:n.call(z);if(!m)return null;const K=dt(m).filter(U=>Xe(U)&&U.type.name===ce);return(K==null?void 0:K.length)===2&&a.loop&&!T.value?(k.value=!0,K):(k.value=!1,null)}q(()=>r.value,(n,m)=>{c(m),k.value&&(n=n%2,m=m%2),m>-1&&s("change",n,m)}),q(()=>a.autoplay,n=>{n?H():g()}),q(()=>a.loop,()=>{N(r.value)}),q(()=>a.interval,()=>{he()});const se=Ue();return ve(()=>{q(()=>o.value,()=>{o.value.length>0&&N(a.initialIndex)},{immediate:!0}),se.value=Ge(d.value,()=>{c()}),H()}),Ye(()=>{g(),d.value&&se.value&&se.value.stop()}),qe($e,{root:d,isCardType:T,isVertical:A,items:o,loop:a.loop,cardScale:a.cardScale,addItem:$,removeItem:f,setActiveItem:N,setContainerHeight:He}),{root:d,activeIndex:r,arrowDisplay:j,hasLabel:O,hover:L,isCardType:T,isTransitioning:v,items:o,isVertical:A,containerStyle:i,isItemsTwoLength:k,handleButtonEnter:y,handleTransitionEnd:J,handleButtonLeave:oe,handleIndicatorClick:t,handleMouseEnter:G,handleMouseLeave:Z,setActiveItem:N,prev:Y,next:Ae,PlaceholderItem:Oe,isTwoLengthShow:w,throttledArrowClick:u,throttledIndicatorHover:C}},It="ElCarousel",Ct=X({name:It}),St=X({...Ct,props:gt,emits:yt,setup(a,{expose:s,emit:l}){const o=a,{root:$,activeIndex:f,arrowDisplay:z,hasLabel:r,hover:b,isCardType:L,items:d,isVertical:I,containerStyle:k,handleButtonEnter:p,handleButtonLeave:v,isTransitioning:j,handleIndicatorClick:O,handleMouseEnter:T,handleMouseLeave:A,handleTransitionEnd:i,setActiveItem:u,prev:C,next:w,PlaceholderItem:g,isTwoLengthShow:H,throttledArrowClick:M,throttledIndicatorHover:N}=wt(o,l),c=de("carousel"),{t:F}=Te(),G=_(()=>{const y=[c.b(),c.m(o.direction)];return e(L)&&y.push(c.m("card")),y}),Z=_(()=>{const y=[c.e("container")];return o.motionBlur&&e(j)&&d.value.length>1&&y.push(e(I)?`${c.namespace.value}-transitioning-vertical`:`${c.namespace.value}-transitioning`),y}),J=_(()=>{const y=[c.e("indicators"),c.em("indicators",o.direction)];return e(r)&&y.push(c.em("indicators","labels")),o.indicatorPosition==="outside"&&y.push(c.em("indicators","outside")),e(I)&&y.push(c.em("indicators","right")),y});return s({activeIndex:f,setActiveItem:u,prev:C,next:w}),(y,oe)=>(E(),B("div",{ref_key:"root",ref:$,class:P(e(G)),onMouseenter:x(e(T),["stop"]),onMouseleave:x(e(A),["stop"])},[e(z)?(E(),ie(Ie,{key:0,name:"carousel-arrow-left",persisted:""},{default:te(()=>[ae(V("button",{type:"button",class:P([e(c).e("arrow"),e(c).em("arrow","left")]),"aria-label":e(F)("el.carousel.leftArrow"),onMouseenter:t=>e(p)("left"),onMouseleave:e(v),onClick:x(t=>e(M)(e(f)-1),["stop"])},[ee(e(we),null,{default:te(()=>[ee(e(Ze))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[ne,(y.arrow==="always"||e(b))&&(o.loop||e(f)>0)]])]),_:1})):R("v-if",!0),e(z)?(E(),ie(Ie,{key:1,name:"carousel-arrow-right",persisted:""},{default:te(()=>[ae(V("button",{type:"button",class:P([e(c).e("arrow"),e(c).em("arrow","right")]),"aria-label":e(F)("el.carousel.rightArrow"),onMouseenter:t=>e(p)("right"),onMouseleave:e(v),onClick:x(t=>e(M)(e(f)+1),["stop"])},[ee(e(we),null,{default:te(()=>[ee(e(Je))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[ne,(y.arrow==="always"||e(b))&&(o.loop||e(f)<e(d).length-1)]])]),_:1})):R("v-if",!0),V("div",{class:P(e(Z)),style:Me(e(k)),onTransitionend:e(i)},[ee(e(g)),le(y.$slots,"default")],46,["onTransitionend"]),y.indicatorPosition!=="none"?(E(),B("ul",{key:2,class:P(e(J))},[(E(!0),B(ue,null,Qe(e(d),(t,S)=>ae((E(),B("li",{key:S,class:P([e(c).e("indicator"),e(c).em("indicator",y.direction),e(c).is("active",S===e(f))]),onMouseenter:Y=>e(N)(S),onClick:x(Y=>e(O)(S),["stop"])},[V("button",{class:P(e(c).e("button")),"aria-label":e(F)("el.carousel.indicator",{index:S+1})},[e(r)?(E(),B("span",{key:0},Ne(t.props.label),1)):R("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[ne,e(H)(S)]])),128))],2)):R("v-if",!0),o.motionBlur?(E(),B("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[V("defs",null,[V("filter",{id:"elCarouselHorizontal"},[V("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),V("filter",{id:"elCarouselVertical"},[V("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):R("v-if",!0)],42,["onMouseenter","onMouseleave"]))}});var bt=me(St,[["__file","carousel.vue"]]);const kt=fe({name:{type:String,default:""},label:{type:[String,Number],default:""}}),Et=a=>{const s=xe($e),l=Le(),o=h(),$=h(!1),f=h(0),z=h(1),r=h(!1),b=h(!1),L=h(!1),d=h(!1),{isCardType:I,isVertical:k,cardScale:p}=s;function v(i,u,C){const w=C-1,g=u-1,H=u+1,M=C/2;return u===0&&i===w?-1:u===w&&i===0?C:i<g&&u-i>=M?C+1:i>H&&i-u>=M?-2:i}function j(i,u){var C,w;const g=e(k)?((C=s.root.value)==null?void 0:C.offsetHeight)||0:((w=s.root.value)==null?void 0:w.offsetWidth)||0;return L.value?g*((2-p)*(i-u)+1)/4:i<u?-(1+p)*g/4:(3+p)*g/4}function O(i,u,C){const w=s.root.value;return w?((C?w.offsetHeight:w.offsetWidth)||0)*(i-u):0}const T=(i,u,C)=>{var w;const g=e(I),H=(w=s.items.value.length)!=null?w:Number.NaN,M=i===u;!g&&!at(C)&&(d.value=M||i===C),!M&&H>2&&s.loop&&(i=v(i,u,H));const N=e(k);r.value=M,g?(L.value=Math.round(Math.abs(i-u))<=1,f.value=j(i,u),z.value=e(r)?1:p):f.value=O(i,u,N),b.value=!0,M&&o.value&&s.setContainerHeight(o.value.offsetHeight)};function A(){if(s&&e(I)){const i=s.items.value.findIndex(({uid:u})=>u===l.uid);s.setActiveItem(i)}}return ve(()=>{s.addItem({props:a,states:et({hover:$,translate:f,scale:z,active:r,ready:b,inStage:L,animating:d}),uid:l.uid,translateItem:T})}),tt(()=>{s.removeItem(l.uid)}),{carouselItemRef:o,active:r,animating:d,hover:$,inStage:L,isVertical:k,translate:f,isCardType:I,scale:z,ready:b,handleItemClick:A}},_t=X({name:ce}),Lt=X({..._t,props:kt,setup(a){const s=a,l=de("carousel"),{carouselItemRef:o,active:$,animating:f,hover:z,inStage:r,isVertical:b,translate:L,isCardType:d,scale:I,ready:k,handleItemClick:p}=Et(s),v=_(()=>[l.e("item"),l.is("active",$.value),l.is("in-stage",r.value),l.is("hover",z.value),l.is("animating",f.value),{[l.em("item","card")]:d.value,[l.em("item","card-vertical")]:d.value&&b.value}]),j=_(()=>{const T=`${`translate${e(b)?"Y":"X"}`}(${e(L)}px)`,A=`scale(${e(I)})`;return{transform:[T,A].join(" ")}});return(O,T)=>ae((E(),B("div",{ref_key:"carouselItemRef",ref:o,class:P(e(v)),style:Me(e(j)),onClick:e(p)},[e(d)?ae((E(),B("div",{key:0,class:P(e(l).e("mask"))},null,2)),[[ne,!e($)]]):R("v-if",!0),le(O.$slots,"default")],14,["onClick"])),[[ne,e(k)]])}});var ze=me(Lt,[["__file","carousel-item.vue"]]);const Vt=Be(bt,{CarouselItem:ze}),Rt=nt(ze),Tt=(a,s)=>{if(!W||!a||!s)return!1;const l=a.getBoundingClientRect();let o;return s instanceof Element?o=s.getBoundingClientRect():o={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<o.bottom&&l.bottom>o.top&&l.right>o.left&&l.left<o.right},Mt=fe({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:re([String,Object])},previewSrcList:{type:re(Array),default:()=>lt([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:re(String)}}),Nt={load:a=>a instanceof Event,error:a=>a instanceof Event,switch:a=>Ee(a),close:()=>!0,show:()=>!0},Bt=X({name:"ElImage",inheritAttrs:!1}),$t=X({...Bt,props:Mt,emits:Nt,setup(a,{emit:s}){const l=a;let o="";const{t:$}=Te(),f=de("image"),z=ot(),r=_(()=>st(Object.entries(z).filter(([t])=>/^(data-|on[A-Z])/i.test(t)||["id","style"].includes(t)))),b=rt({excludeListeners:!0,excludeKeys:_(()=>Object.keys(r.value))}),L=h(),d=h(!1),I=h(!0),k=h(!1),p=h(),v=h(),j=W&&"loading"in HTMLImageElement.prototype;let O,T;const A=_(()=>[f.e("inner"),u.value&&f.e("preview"),I.value&&f.is("loading")]),i=_(()=>{const{fit:t}=l;return W&&t?{objectFit:t}:{}}),u=_(()=>{const{previewSrcList:t}=l;return it(t)&&t.length>0}),C=_(()=>{const{previewSrcList:t,initialIndex:S}=l;let Y=S;return S>t.length-1&&(Y=0),Y}),w=_(()=>l.loading==="eager"?!1:!j&&l.loading==="lazy"||l.lazy),g=()=>{W&&(I.value=!0,d.value=!1,L.value=l.src)};function H(t){I.value=!1,d.value=!1,s("load",t)}function M(t){I.value=!1,d.value=!0,s("error",t)}function N(){Tt(p.value,v.value)&&(g(),G())}const c=ft(N,200,!0);async function F(){var t;if(!W)return;await ut();const{scrollContainer:S}=l;ct(S)?v.value=S:_e(S)&&S!==""?v.value=(t=document.querySelector(S))!=null?t:void 0:p.value&&(v.value=pt(p.value)),v.value&&(O=Se(v,"scroll",c),setTimeout(()=>N(),100))}function G(){!W||!v.value||!c||(O==null||O(),v.value=void 0)}function Z(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function J(){u.value&&(T=Se("wheel",Z,{passive:!1}),o=document.body.style.overflow,document.body.style.overflow="hidden",k.value=!0,s("show"))}function y(){T==null||T(),document.body.style.overflow=o,k.value=!1,s("close")}function oe(t){s("switch",t)}return q(()=>l.src,()=>{w.value?(I.value=!0,d.value=!1,G(),F()):g()}),ve(()=>{w.value?F():g()}),(t,S)=>(E(),B("div",Ce({ref_key:"container",ref:p},e(r),{class:[e(f).b(),t.$attrs.class]}),[d.value?le(t.$slots,"error",{key:0},()=>[V("div",{class:P(e(f).e("error"))},Ne(e($)("el.image.error")),3)]):(E(),B(ue,{key:1},[L.value!==void 0?(E(),B("img",Ce({key:0},e(b),{src:L.value,loading:t.loading,style:e(i),class:e(A),crossorigin:t.crossorigin,onClick:J,onLoad:H,onError:M}),null,16,["src","loading","crossorigin"])):R("v-if",!0),I.value?(E(),B("div",{key:1,class:P(e(f).e("wrapper"))},[le(t.$slots,"placeholder",{},()=>[V("div",{class:P(e(f).e("placeholder"))},null,2)])],2)):R("v-if",!0)],64)),e(u)?(E(),B(ue,{key:2},[k.value?(E(),ie(e(mt),{key:0,"z-index":t.zIndex,"initial-index":e(C),infinite:t.infinite,"zoom-rate":t.zoomRate,"min-scale":t.minScale,"max-scale":t.maxScale,"url-list":t.previewSrcList,crossorigin:t.crossorigin,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:y,onSwitch:oe},{default:te(()=>[t.$slots.viewer?(E(),B("div",{key:0},[le(t.$slots,"viewer")])):R("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):R("v-if",!0)],64)):R("v-if",!0)],16))}});var zt=me($t,[["__file","image.vue"]]);const Dt=Be(zt);export{Dt as E,Rt as a,Vt as b};
