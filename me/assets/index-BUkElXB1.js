import{b as he,i as Ae,b7 as He,f as g,l as L,a as e,w as W,b8 as Oe,j as ge,aM as Pe,k as ze,p as Ve,a0 as Re,b9 as De,ba as Ge,g as pe,d as Z,u as ye,ar as Ue,o as $,c as R,v as ce,x as Q,ag as X,s as O,n as P,aa as q,z as J,E as ve,ay as je,aL as Y,aE as fe,q as j,az as Fe,r as Ie,t as Ce,I as Ke,J as We,D as qe,_ as _e,h as Je,m as Xe,bb as Ye,aR as Qe,G as Ze,H as xe}from"./index-DFPMoMCa.js";import{u as et}from"./index-BctufpOW.js";import{t as de}from"./index-Ww4EvrqK.js";const tt=he({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),at={change:(a,u)=>[a,u].every(Ae)},be=Symbol("carouselContextKey"),le="ElCarouselItem",me=300,st=(a,u,p)=>{const{children:l,addChild:A,removeChild:y}=et(pe(),le),S=He(),s=g(-1),I=g(null),b=g(!1),v=g(),k=g(0),_=g(!0),f=g(!0),C=g(!1),D=L(()=>a.arrow!=="never"&&!e(M)),z=L(()=>l.value.some(t=>t.props.label.toString().length>0)),N=L(()=>a.type==="card"),M=L(()=>a.direction==="vertical"),n=L(()=>a.height!=="auto"?{height:a.height}:{height:`${k.value}px`,overflow:"hidden"}),o=de(t=>{E(t)},me,{trailing:!0}),d=de(t=>{V(t)},me),m=t=>_.value?s.value<=1?t<=1:t>1:!0;function h(){I.value&&(clearInterval(I.value),I.value=null)}function T(){a.interval<=0||!a.autoplay||I.value||(I.value=setInterval(()=>w(),a.interval))}const w=()=>{f.value||(C.value=!0),f.value=!1,s.value<l.value.length-1?s.value=s.value+1:a.loop?s.value=0:C.value=!1};function E(t){if(f.value||(C.value=!0),f.value=!1,Re(t)){const H=l.value.filter(U=>U.props.name===t);H.length>0&&(t=l.value.indexOf(H[0]))}if(t=Number(t),Number.isNaN(t)||t!==Math.floor(t))return;const i=l.value.length,B=s.value;t<0?s.value=a.loop?i-1:0:t>=i?s.value=a.loop?0:i-1:s.value=t,B===s.value&&r(B),oe()}function r(t){l.value.forEach((i,B)=>{i.translateItem(B,s.value,t)})}function F(t,i){var B,H,U,re;const K=e(l),ie=K.length;if(ie===0||!t.states.inStage)return!1;const Te=i+1,Ee=i-1,ue=ie-1,Ne=K[ue].states.active,Be=K[0].states.active,$e=(H=(B=K[Te])==null?void 0:B.states)==null?void 0:H.active,Le=(re=(U=K[Ee])==null?void 0:U.states)==null?void 0:re.active;return i===ue&&Be||$e?"left":i===0&&Ne||Le?"right":!1}function x(){b.value=!0,a.pauseOnHover&&h()}function ee(){b.value=!1,T()}function te(){C.value=!1}function c(t){e(M)||l.value.forEach((i,B)=>{t===F(i,B)&&(i.states.hover=!0)})}function ne(){e(M)||l.value.forEach(t=>{t.states.hover=!1})}function G(t){t!==s.value&&(f.value||(C.value=!0)),s.value=t}function V(t){a.trigger==="hover"&&t!==s.value&&(s.value=t,f.value||(C.value=!0))}function ae(){E(s.value-1)}function Se(){E(s.value+1)}function oe(){h(),a.pauseOnHover||T()}function ke(t){a.height==="auto"&&(k.value=t)}function Me(){var t;const i=(t=S.default)==null?void 0:t.call(S);if(!i)return null;const H=De(i).filter(U=>Ge(U)&&U.type.name===le);return(H==null?void 0:H.length)===2&&a.loop&&!N.value?(_.value=!0,H):(_.value=!1,null)}W(()=>s.value,(t,i)=>{r(i),_.value&&(t=t%2,i=i%2),i>-1&&u("change",t,i)}),W(()=>a.autoplay,t=>{t?T():h()}),W(()=>a.loop,()=>{E(s.value)}),W(()=>a.interval,()=>{oe()});const se=Oe();return ge(()=>{W(()=>l.value,()=>{l.value.length>0&&E(a.initialIndex)},{immediate:!0}),se.value=Pe(v.value,()=>{r()}),T()}),ze(()=>{h(),v.value&&se.value&&se.value.stop()}),Ve(be,{root:v,isCardType:N,isVertical:M,items:l,loop:a.loop,cardScale:a.cardScale,addItem:A,removeItem:y,setActiveItem:E,setContainerHeight:ke}),{root:v,activeIndex:s,arrowDisplay:D,hasLabel:z,hover:b,isCardType:N,isTransitioning:C,items:l,isVertical:M,containerStyle:n,isItemsTwoLength:_,handleButtonEnter:c,handleTransitionEnd:te,handleButtonLeave:ne,handleIndicatorClick:G,handleMouseEnter:x,handleMouseLeave:ee,setActiveItem:E,prev:ae,next:Se,PlaceholderItem:Me,isTwoLengthShow:m,throttledArrowClick:o,throttledIndicatorHover:d}},lt="ElCarousel",nt=Z({name:lt}),ot=Z({...nt,props:tt,emits:at,setup(a,{expose:u,emit:p}){const l=a,{root:A,activeIndex:y,arrowDisplay:S,hasLabel:s,hover:I,isCardType:b,items:v,isVertical:k,containerStyle:_,handleButtonEnter:f,handleButtonLeave:C,isTransitioning:D,handleIndicatorClick:z,handleMouseEnter:N,handleMouseLeave:M,handleTransitionEnd:n,setActiveItem:o,prev:d,next:m,PlaceholderItem:h,isTwoLengthShow:T,throttledArrowClick:w,throttledIndicatorHover:E}=st(l,p),r=ye("carousel"),{t:F}=Ue(),x=L(()=>{const c=[r.b(),r.m(l.direction)];return e(b)&&c.push(r.m("card")),c}),ee=L(()=>{const c=[r.e("container")];return l.motionBlur&&e(D)&&v.value.length>1&&c.push(e(k)?`${r.namespace.value}-transitioning-vertical`:`${r.namespace.value}-transitioning`),c}),te=L(()=>{const c=[r.e("indicators"),r.em("indicators",l.direction)];return e(s)&&c.push(r.em("indicators","labels")),l.indicatorPosition==="outside"&&c.push(r.em("indicators","outside")),e(k)&&c.push(r.em("indicators","right")),c});return u({activeIndex:y,setActiveItem:o,prev:d,next:m}),(c,ne)=>($(),R("div",{ref_key:"root",ref:A,class:P(e(x)),onMouseenter:q(e(N),["stop"]),onMouseleave:q(e(M),["stop"])},[e(S)?($(),ce(fe,{key:0,name:"carousel-arrow-left",persisted:""},{default:Q(()=>[X(O("button",{type:"button",class:P([e(r).e("arrow"),e(r).em("arrow","left")]),"aria-label":e(F)("el.carousel.leftArrow"),onMouseenter:G=>e(f)("left"),onMouseleave:e(C),onClick:q(G=>e(w)(e(y)-1),["stop"])},[J(e(ve),null,{default:Q(()=>[J(e(je))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[Y,(c.arrow==="always"||e(I))&&(l.loop||e(y)>0)]])]),_:1})):j("v-if",!0),e(S)?($(),ce(fe,{key:1,name:"carousel-arrow-right",persisted:""},{default:Q(()=>[X(O("button",{type:"button",class:P([e(r).e("arrow"),e(r).em("arrow","right")]),"aria-label":e(F)("el.carousel.rightArrow"),onMouseenter:G=>e(f)("right"),onMouseleave:e(C),onClick:q(G=>e(w)(e(y)+1),["stop"])},[J(e(ve),null,{default:Q(()=>[J(e(Fe))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[Y,(c.arrow==="always"||e(I))&&(l.loop||e(y)<e(v).length-1)]])]),_:1})):j("v-if",!0),O("div",{class:P(e(ee)),style:Ce(e(_)),onTransitionend:e(n)},[J(e(h)),Ie(c.$slots,"default")],46,["onTransitionend"]),c.indicatorPosition!=="none"?($(),R("ul",{key:2,class:P(e(te))},[($(!0),R(Ke,null,We(e(v),(G,V)=>X(($(),R("li",{key:V,class:P([e(r).e("indicator"),e(r).em("indicator",c.direction),e(r).is("active",V===e(y))]),onMouseenter:ae=>e(E)(V),onClick:q(ae=>e(z)(V),["stop"])},[O("button",{class:P(e(r).e("button")),"aria-label":e(F)("el.carousel.indicator",{index:V+1})},[e(s)?($(),R("span",{key:0},qe(G.props.label),1)):j("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[Y,e(T)(V)]])),128))],2)):j("v-if",!0),l.motionBlur?($(),R("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[O("defs",null,[O("filter",{id:"elCarouselHorizontal"},[O("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),O("filter",{id:"elCarouselVertical"},[O("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):j("v-if",!0)],42,["onMouseenter","onMouseleave"]))}});var rt=_e(ot,[["__file","carousel.vue"]]);const it=he({name:{type:String,default:""},label:{type:[String,Number],default:""}}),ut=a=>{const u=Je(be),p=pe(),l=g(),A=g(!1),y=g(0),S=g(1),s=g(!1),I=g(!1),b=g(!1),v=g(!1),{isCardType:k,isVertical:_,cardScale:f}=u;function C(n,o,d){const m=d-1,h=o-1,T=o+1,w=d/2;return o===0&&n===m?-1:o===m&&n===0?d:n<h&&o-n>=w?d+1:n>T&&n-o>=w?-2:n}function D(n,o){var d,m;const h=e(_)?((d=u.root.value)==null?void 0:d.offsetHeight)||0:((m=u.root.value)==null?void 0:m.offsetWidth)||0;return b.value?h*((2-f)*(n-o)+1)/4:n<o?-(1+f)*h/4:(3+f)*h/4}function z(n,o,d){const m=u.root.value;return m?((d?m.offsetHeight:m.offsetWidth)||0)*(n-o):0}const N=(n,o,d)=>{var m;const h=e(k),T=(m=u.items.value.length)!=null?m:Number.NaN,w=n===o;!h&&!Qe(d)&&(v.value=w||n===d),!w&&T>2&&u.loop&&(n=C(n,o,T));const E=e(_);s.value=w,h?(b.value=Math.round(Math.abs(n-o))<=1,y.value=D(n,o),S.value=e(s)?1:f):y.value=z(n,o,E),I.value=!0,w&&l.value&&u.setContainerHeight(l.value.offsetHeight)};function M(){if(u&&e(k)){const n=u.items.value.findIndex(({uid:o})=>o===p.uid);u.setActiveItem(n)}}return ge(()=>{u.addItem({props:a,states:Xe({hover:A,translate:y,scale:S,active:s,ready:I,inStage:b,animating:v}),uid:p.uid,translateItem:N})}),Ye(()=>{u.removeItem(p.uid)}),{carouselItemRef:l,active:s,animating:v,hover:A,inStage:b,isVertical:_,translate:y,isCardType:k,scale:S,ready:I,handleItemClick:M}},ct=Z({name:le}),vt=Z({...ct,props:it,setup(a){const u=a,p=ye("carousel"),{carouselItemRef:l,active:A,animating:y,hover:S,inStage:s,isVertical:I,translate:b,isCardType:v,scale:k,ready:_,handleItemClick:f}=ut(u),C=L(()=>[p.e("item"),p.is("active",A.value),p.is("in-stage",s.value),p.is("hover",S.value),p.is("animating",y.value),{[p.em("item","card")]:v.value,[p.em("item","card-vertical")]:v.value&&I.value}]),D=L(()=>{const N=`${`translate${e(I)?"Y":"X"}`}(${e(b)}px)`,M=`scale(${e(k)})`;return{transform:[N,M].join(" ")}});return(z,N)=>X(($(),R("div",{ref_key:"carouselItemRef",ref:l,class:P(e(C)),style:Ce(e(D)),onClick:e(f)},[e(v)?X(($(),R("div",{key:0,class:P(e(p).e("mask"))},null,2)),[[Y,!e(A)]]):j("v-if",!0),Ie(z.$slots,"default")],14,["onClick"])),[[Y,e(_)]])}});var we=_e(vt,[["__file","carousel-item.vue"]]);const ht=Ze(rt,{CarouselItem:we}),gt=xe(we);export{gt as E,ht as a};
