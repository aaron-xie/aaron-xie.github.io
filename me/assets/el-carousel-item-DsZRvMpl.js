import{g as ve,i as Ee,aT as Fe,q as h,x as _,u as e,j as Y,aU as We,t as fe,aa as Ue,v as Ge,p as Ye,at as _e,aV as Ze,aW as qe,l as Le,d as q,h as de,a0 as Te,o as E,c as $,B as ie,w as te,a8 as ae,a as V,n as H,Z as x,b as ee,F as we,aO as Je,a9 as le,$ as Ie,z as R,aP as Xe,r as ne,A as Me,L as ue,M as Qe,I as Ne,k as me,s as xe,y as et,aX as tt,ai as at,J as $e,K as lt,am as Z,av as re,aJ as nt,aY as st,aZ as ot,a_ as rt,ag as it,a$ as Ce,a7 as ut,b0 as ct,b1 as vt,b2 as be,b3 as ft}from"./index-60xw3530.js";import{u as dt}from"./index-nJKMIUQu.js";import{t as Se,E as mt}from"./index-ktyUppU-.js";const ht=ve({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),gt={change:(l,o)=>[l,o].every(Ee)},Be=Symbol("carouselContextKey"),ce="ElCarouselItem",ke=300,pt=(l,o,r)=>{const{children:n,addChild:P,removeChild:v}=dt(Le(),ce),B=Fe(),s=h(-1),S=h(null),L=h(!1),d=h(),I=h(0),k=h(!0),g=h(!0),f=h(!1),j=_(()=>l.arrow!=="never"&&!e(z)),O=_(()=>n.value.some(a=>a.props.label.toString().length>0)),T=_(()=>l.type==="card"),z=_(()=>l.direction==="vertical"),i=_(()=>l.height!=="auto"?{height:l.height}:{height:`${I.value}px`,overflow:"hidden"}),u=Se(a=>{N(a)},ke,{trailing:!0}),C=Se(a=>{b(a)},ke),w=a=>k.value?s.value<=1?a<=1:a>1:!0;function p(){S.value&&(clearInterval(S.value),S.value=null)}function A(){l.interval<=0||!l.autoplay||S.value||(S.value=setInterval(()=>M(),l.interval))}const M=()=>{g.value||(f.value=!0),g.value=!1,s.value<n.value.length-1?s.value=s.value+1:l.loop?s.value=0:f.value=!1};function N(a){if(g.value||(f.value=!0),g.value=!1,_e(a)){const K=n.value.filter(W=>W.props.name===a);K.length>0&&(a=n.value.indexOf(K[0]))}if(a=Number(a),Number.isNaN(a)||a!==Math.floor(a))return;const m=n.value.length,D=s.value;a<0?s.value=l.loop?m-1:0:a>=m?s.value=l.loop?0:m-1:s.value=a,D===s.value&&c(D),he()}function c(a){n.value.forEach((m,D)=>{m.translateItem(D,s.value,a)})}function F(a,m){var D,K,W,ge;const Q=e(n),pe=Q.length;if(pe===0||!a.states.inStage)return!1;const Pe=m+1,Ve=m-1,ye=pe-1,Re=Q[ye].states.active,De=Q[0].states.active,je=(K=(D=Q[Pe])==null?void 0:D.states)==null?void 0:K.active,Ke=(ge=(W=Q[Ve])==null?void 0:W.states)==null?void 0:ge.active;return m===ye&&De||je?"left":m===0&&Re||Ke?"right":!1}function U(){L.value=!0,l.pauseOnHover&&p()}function J(){L.value=!1,A()}function X(){f.value=!1}function y(a){e(z)||n.value.forEach((m,D)=>{a===F(m,D)&&(m.states.hover=!0)})}function se(){e(z)||n.value.forEach(a=>{a.states.hover=!1})}function t(a){a!==s.value&&(g.value||(f.value=!0)),s.value=a}function b(a){l.trigger==="hover"&&a!==s.value&&(s.value=a,g.value||(f.value=!0))}function G(){N(s.value-1)}function Ae(){N(s.value+1)}function he(){p(),l.pauseOnHover||A()}function Oe(a){l.height==="auto"&&(I.value=a)}function He(){var a;const m=(a=B.default)==null?void 0:a.call(B);if(!m)return null;const K=Ze(m).filter(W=>qe(W)&&W.type.name===ce);return(K==null?void 0:K.length)===2&&l.loop&&!T.value?(k.value=!0,K):(k.value=!1,null)}Y(()=>s.value,(a,m)=>{c(m),k.value&&(a=a%2,m=m%2),m>-1&&o("change",a,m)}),Y(()=>l.autoplay,a=>{a?A():p()}),Y(()=>l.loop,()=>{N(s.value)}),Y(()=>l.interval,()=>{he()});const oe=We();return fe(()=>{Y(()=>n.value,()=>{n.value.length>0&&N(l.initialIndex)},{immediate:!0}),oe.value=Ue(d.value,()=>{c()}),A()}),Ge(()=>{p(),d.value&&oe.value&&oe.value.stop()}),Ye(Be,{root:d,isCardType:T,isVertical:z,items:n,loop:l.loop,cardScale:l.cardScale,addItem:P,removeItem:v,setActiveItem:N,setContainerHeight:Oe}),{root:d,activeIndex:s,arrowDisplay:j,hasLabel:O,hover:L,isCardType:T,isTransitioning:f,items:n,isVertical:z,containerStyle:i,isItemsTwoLength:k,handleButtonEnter:y,handleTransitionEnd:X,handleButtonLeave:se,handleIndicatorClick:t,handleMouseEnter:U,handleMouseLeave:J,setActiveItem:N,prev:G,next:Ae,PlaceholderItem:He,isTwoLengthShow:w,throttledArrowClick:u,throttledIndicatorHover:C}},yt="ElCarousel",wt=q({name:yt}),It=q({...wt,props:ht,emits:gt,setup(l,{expose:o,emit:r}){const n=l,{root:P,activeIndex:v,arrowDisplay:B,hasLabel:s,hover:S,isCardType:L,items:d,isVertical:I,containerStyle:k,handleButtonEnter:g,handleButtonLeave:f,isTransitioning:j,handleIndicatorClick:O,handleMouseEnter:T,handleMouseLeave:z,handleTransitionEnd:i,setActiveItem:u,prev:C,next:w,PlaceholderItem:p,isTwoLengthShow:A,throttledArrowClick:M,throttledIndicatorHover:N}=pt(n,r),c=de("carousel"),{t:F}=Te(),U=_(()=>{const y=[c.b(),c.m(n.direction)];return e(L)&&y.push(c.m("card")),y}),J=_(()=>{const y=[c.e("container")];return n.motionBlur&&e(j)&&d.value.length>1&&y.push(e(I)?`${c.namespace.value}-transitioning-vertical`:`${c.namespace.value}-transitioning`),y}),X=_(()=>{const y=[c.e("indicators"),c.em("indicators",n.direction)];return e(s)&&y.push(c.em("indicators","labels")),n.indicatorPosition==="outside"&&y.push(c.em("indicators","outside")),e(I)&&y.push(c.em("indicators","right")),y});return o({activeIndex:v,setActiveItem:u,prev:C,next:w}),(y,se)=>(E(),$("div",{ref_key:"root",ref:P,class:H(e(U)),onMouseenter:x(e(T),["stop"]),onMouseleave:x(e(z),["stop"])},[e(B)?(E(),ie(Ie,{key:0,name:"carousel-arrow-left",persisted:""},{default:te(()=>[ae(V("button",{type:"button",class:H([e(c).e("arrow"),e(c).em("arrow","left")]),"aria-label":e(F)("el.carousel.leftArrow"),onMouseenter:t=>e(g)("left"),onMouseleave:e(f),onClick:x(t=>e(M)(e(v)-1),["stop"])},[ee(e(we),null,{default:te(()=>[ee(e(Je))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[le,(y.arrow==="always"||e(S))&&(n.loop||e(v)>0)]])]),_:1})):R("v-if",!0),e(B)?(E(),ie(Ie,{key:1,name:"carousel-arrow-right",persisted:""},{default:te(()=>[ae(V("button",{type:"button",class:H([e(c).e("arrow"),e(c).em("arrow","right")]),"aria-label":e(F)("el.carousel.rightArrow"),onMouseenter:t=>e(g)("right"),onMouseleave:e(f),onClick:x(t=>e(M)(e(v)+1),["stop"])},[ee(e(we),null,{default:te(()=>[ee(e(Xe))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[le,(y.arrow==="always"||e(S))&&(n.loop||e(v)<e(d).length-1)]])]),_:1})):R("v-if",!0),V("div",{class:H(e(J)),style:Me(e(k)),onTransitionend:e(i)},[ee(e(p)),ne(y.$slots,"default")],46,["onTransitionend"]),y.indicatorPosition!=="none"?(E(),$("ul",{key:2,class:H(e(X))},[(E(!0),$(ue,null,Qe(e(d),(t,b)=>ae((E(),$("li",{key:b,class:H([e(c).e("indicator"),e(c).em("indicator",y.direction),e(c).is("active",b===e(v))]),onMouseenter:G=>e(N)(b),onClick:x(G=>e(O)(b),["stop"])},[V("button",{class:H(e(c).e("button")),"aria-label":e(F)("el.carousel.indicator",{index:b+1})},[e(s)?(E(),$("span",{key:0},Ne(t.props.label),1)):R("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[le,e(A)(b)]])),128))],2)):R("v-if",!0),n.motionBlur?(E(),$("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[V("defs",null,[V("filter",{id:"elCarouselHorizontal"},[V("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),V("filter",{id:"elCarouselVertical"},[V("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):R("v-if",!0)],42,["onMouseenter","onMouseleave"]))}});var Ct=me(It,[["__file","carousel.vue"]]);const bt=ve({name:{type:String,default:""},label:{type:[String,Number],default:""}}),St=l=>{const o=xe(Be),r=Le(),n=h(),P=h(!1),v=h(0),B=h(1),s=h(!1),S=h(!1),L=h(!1),d=h(!1),{isCardType:I,isVertical:k,cardScale:g}=o;function f(i,u,C){const w=C-1,p=u-1,A=u+1,M=C/2;return u===0&&i===w?-1:u===w&&i===0?C:i<p&&u-i>=M?C+1:i>A&&i-u>=M?-2:i}function j(i,u){var C,w;const p=e(k)?((C=o.root.value)==null?void 0:C.offsetHeight)||0:((w=o.root.value)==null?void 0:w.offsetWidth)||0;return L.value?p*((2-g)*(i-u)+1)/4:i<u?-(1+g)*p/4:(3+g)*p/4}function O(i,u,C){const w=o.root.value;return w?((C?w.offsetHeight:w.offsetWidth)||0)*(i-u):0}const T=(i,u,C)=>{var w;const p=e(I),A=(w=o.items.value.length)!=null?w:Number.NaN,M=i===u;!p&&!at(C)&&(d.value=M||i===C),!M&&A>2&&o.loop&&(i=f(i,u,A));const N=e(k);s.value=M,p?(L.value=Math.round(Math.abs(i-u))<=1,v.value=j(i,u),B.value=e(s)?1:g):v.value=O(i,u,N),S.value=!0,M&&n.value&&o.setContainerHeight(n.value.offsetHeight)};function z(){if(o&&e(I)){const i=o.items.value.findIndex(({uid:u})=>u===r.uid);o.setActiveItem(i)}}return fe(()=>{o.addItem({props:l,states:et({hover:P,translate:v,scale:B,active:s,ready:S,inStage:L,animating:d}),uid:r.uid,translateItem:T})}),tt(()=>{o.removeItem(r.uid)}),{carouselItemRef:n,active:s,animating:d,hover:P,inStage:L,isVertical:k,translate:v,isCardType:I,scale:B,ready:S,handleItemClick:z}},kt=q({name:ce}),Et=q({...kt,props:bt,setup(l){const o=l,r=de("carousel"),{carouselItemRef:n,active:P,animating:v,hover:B,inStage:s,isVertical:S,translate:L,isCardType:d,scale:I,ready:k,handleItemClick:g}=St(o),f=_(()=>[r.e("item"),r.is("active",P.value),r.is("in-stage",s.value),r.is("hover",B.value),r.is("animating",v.value),{[r.em("item","card")]:d.value,[r.em("item","card-vertical")]:d.value&&S.value}]),j=_(()=>{const T=`${`translate${e(S)?"Y":"X"}`}(${e(L)}px)`,z=`scale(${e(I)})`;return{transform:[T,z].join(" ")}});return(O,T)=>ae((E(),$("div",{ref_key:"carouselItemRef",ref:n,class:H(e(f)),style:Me(e(j)),onClick:e(g)},[e(d)?ae((E(),$("div",{key:0,class:H(e(r).e("mask"))},null,2)),[[le,!e(P)]]):R("v-if",!0),ne(O.$slots,"default")],14,["onClick"])),[[le,e(k)]])}});var ze=me(Et,[["__file","carousel-item.vue"]]);const Ot=$e(Ct,{CarouselItem:ze}),Ht=lt(ze),_t=(l,o)=>{if(!Z||!l||!o)return!1;const r=l.getBoundingClientRect();let n;return o instanceof Element?n=o.getBoundingClientRect():n={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},r.top<n.bottom&&r.bottom>n.top&&r.right>n.left&&r.left<n.right},Lt=ve({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:re([String,Object])},previewSrcList:{type:re(Array),default:()=>nt([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:re(String)}}),Tt={load:l=>l instanceof Event,error:l=>l instanceof Event,switch:l=>Ee(l),close:()=>!0,show:()=>!0},Mt=q({name:"ElImage",inheritAttrs:!1}),Nt=q({...Mt,props:Lt,emits:Tt,setup(l,{emit:o}){const r=l;let n="";const{t:P}=Te(),v=de("image"),B=st(),s=_(()=>ot(Object.entries(B).filter(([t])=>/^(data-|on[A-Z])/i.test(t)||["id","style"].includes(t)))),S=rt({excludeListeners:!0,excludeKeys:_(()=>Object.keys(s.value))}),L=h(),d=h(!1),I=h(!0),k=h(!1),g=h(),f=h(),j=Z&&"loading"in HTMLImageElement.prototype;let O,T;const z=_(()=>[v.e("inner"),u.value&&v.e("preview"),I.value&&v.is("loading")]),i=_(()=>{const{fit:t}=r;return Z&&t?{objectFit:t}:{}}),u=_(()=>{const{previewSrcList:t}=r;return it(t)&&t.length>0}),C=_(()=>{const{previewSrcList:t,initialIndex:b}=r;let G=b;return b>t.length-1&&(G=0),G}),w=_(()=>r.loading==="eager"?!1:!j&&r.loading==="lazy"||r.lazy),p=()=>{Z&&(I.value=!0,d.value=!1,L.value=r.src)};function A(t){I.value=!1,d.value=!1,o("load",t)}function M(t){I.value=!1,d.value=!0,o("error",t)}function N(){_t(g.value,f.value)&&(p(),U())}const c=ft(N,200,!0);async function F(){var t;if(!Z)return;await ut();const{scrollContainer:b}=r;ct(b)?f.value=b:_e(b)&&b!==""?f.value=(t=document.querySelector(b))!=null?t:void 0:g.value&&(f.value=vt(g.value)),f.value&&(O=be(f,"scroll",c),setTimeout(()=>N(),100))}function U(){!Z||!f.value||!c||(O==null||O(),f.value=void 0)}function J(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function X(){u.value&&(T=be("wheel",J,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",k.value=!0,o("show"))}function y(){T==null||T(),document.body.style.overflow=n,k.value=!1,o("close")}function se(t){o("switch",t)}return Y(()=>r.src,()=>{w.value?(I.value=!0,d.value=!1,U(),F()):p()}),fe(()=>{w.value?F():p()}),(t,b)=>(E(),$("div",Ce({ref_key:"container",ref:g},e(s),{class:[e(v).b(),t.$attrs.class]}),[d.value?ne(t.$slots,"error",{key:0},()=>[V("div",{class:H(e(v).e("error"))},Ne(e(P)("el.image.error")),3)]):(E(),$(ue,{key:1},[L.value!==void 0?(E(),$("img",Ce({key:0},e(S),{src:L.value,loading:t.loading,style:e(i),class:e(z),crossorigin:t.crossorigin,onClick:X,onLoad:A,onError:M}),null,16,["src","loading","crossorigin"])):R("v-if",!0),I.value?(E(),$("div",{key:1,class:H(e(v).e("wrapper"))},[ne(t.$slots,"placeholder",{},()=>[V("div",{class:H(e(v).e("placeholder"))},null,2)])],2)):R("v-if",!0)],64)),e(u)?(E(),$(ue,{key:2},[k.value?(E(),ie(e(mt),{key:0,"z-index":t.zIndex,"initial-index":e(C),infinite:t.infinite,"zoom-rate":t.zoomRate,"min-scale":t.minScale,"max-scale":t.maxScale,"url-list":t.previewSrcList,crossorigin:t.crossorigin,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:y,onSwitch:se},{default:te(()=>[t.$slots.viewer?(E(),$("div",{key:0},[ne(t.$slots,"viewer")])):R("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):R("v-if",!0)],64)):R("v-if",!0)],16))}});var $t=me(Nt,[["__file","image.vue"]]);const Pt=$e($t);export{Pt as E,Ht as a,Ot as b};
