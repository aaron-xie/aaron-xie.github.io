import{b as he,i as He,bc as Le,f as g,l as A,a as e,w as F,bd as Oe,j as ge,aR as Pe,k as Ve,p as ze,a6 as Re,be as De,bf as Ge,g as pe,d as Z,u as ye,ay as Ke,o as $,c as R,v as ce,x as Y,al as Q,s as O,n as P,af as J,z as q,E as ve,aw as Ue,aQ as X,aJ as fe,q as U,av as We,r as Ie,t as Ce,J as je,K as Fe,D as Je,_ as _e,h as qe,m as Qe,bg as Xe,aW as Ye,G as Ze,H as xe}from"./index-xf_L3rL2.js";import{u as et}from"./index-CembtfCz.js";import{t as de}from"./index-9ySyCXJJ.js";const tt=he({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),at={change:(a,u)=>[a,u].every(He)},we=Symbol("carouselContextKey"),le="ElCarouselItem",me=300,st=(a,u,p)=>{const{children:l,addChild:H,removeChild:y}=et(pe(),le),S=Le(),s=g(-1),I=g(null),w=g(!1),v=g(),k=g(0),_=g(!0),f=g(!0),C=g(!1),D=A(()=>a.arrow!=="never"&&!e(M)),V=A(()=>l.value.some(t=>t.props.label.toString().length>0)),N=A(()=>a.type==="card"),M=A(()=>a.direction==="vertical"),n=A(()=>a.height!=="auto"?{height:a.height}:{height:`${k.value}px`,overflow:"hidden"}),o=de(t=>{E(t)},me,{trailing:!0}),d=de(t=>{z(t)},me),m=t=>_.value?s.value<=1?t<=1:t>1:!0;function h(){I.value&&(clearInterval(I.value),I.value=null)}function T(){a.interval<=0||!a.autoplay||I.value||(I.value=setInterval(()=>b(),a.interval))}const b=()=>{f.value||(C.value=!0),f.value=!1,s.value<l.value.length-1?s.value=s.value+1:a.loop?s.value=0:C.value=!1};function E(t){if(f.value||(C.value=!0),f.value=!1,Re(t)){const L=l.value.filter(K=>K.props.name===t);L.length>0&&(t=l.value.indexOf(L[0]))}if(t=Number(t),Number.isNaN(t)||t!==Math.floor(t))return;const i=l.value.length,B=s.value;t<0?s.value=a.loop?i-1:0:t>=i?s.value=a.loop?0:i-1:s.value=t,B===s.value&&r(B),oe()}function r(t){l.value.forEach((i,B)=>{i.translateItem(B,s.value,t)})}function W(t,i){var B,L,K,re;const j=e(l),ie=j.length;if(ie===0||!t.states.inStage)return!1;const Te=i+1,Ee=i-1,ue=ie-1,Ne=j[ue].states.active,Be=j[0].states.active,$e=(L=(B=j[Te])==null?void 0:B.states)==null?void 0:L.active,Ae=(re=(K=j[Ee])==null?void 0:K.states)==null?void 0:re.active;return i===ue&&Be||$e?"left":i===0&&Ne||Ae?"right":!1}function x(){w.value=!0,a.pauseOnHover&&h()}function ee(){w.value=!1,T()}function te(){C.value=!1}function c(t){e(M)||l.value.forEach((i,B)=>{t===W(i,B)&&(i.states.hover=!0)})}function ne(){e(M)||l.value.forEach(t=>{t.states.hover=!1})}function G(t){t!==s.value&&(f.value||(C.value=!0)),s.value=t}function z(t){a.trigger==="hover"&&t!==s.value&&(s.value=t,f.value||(C.value=!0))}function ae(){E(s.value-1)}function Se(){E(s.value+1)}function oe(){h(),a.pauseOnHover||T()}function ke(t){a.height==="auto"&&(k.value=t)}function Me(){var t;const i=(t=S.default)==null?void 0:t.call(S);if(!i)return null;const L=De(i).filter(K=>Ge(K)&&K.type.name===le);return(L==null?void 0:L.length)===2&&a.loop&&!N.value?(_.value=!0,L):(_.value=!1,null)}F(()=>s.value,(t,i)=>{r(i),_.value&&(t=t%2,i=i%2),i>-1&&u("change",t,i)}),F(()=>a.autoplay,t=>{t?T():h()}),F(()=>a.loop,()=>{E(s.value)}),F(()=>a.interval,()=>{oe()});const se=Oe();return ge(()=>{F(()=>l.value,()=>{l.value.length>0&&E(a.initialIndex)},{immediate:!0}),se.value=Pe(v.value,()=>{r()}),T()}),Ve(()=>{h(),v.value&&se.value&&se.value.stop()}),ze(we,{root:v,isCardType:N,isVertical:M,items:l,loop:a.loop,cardScale:a.cardScale,addItem:H,removeItem:y,setActiveItem:E,setContainerHeight:ke}),{root:v,activeIndex:s,arrowDisplay:D,hasLabel:V,hover:w,isCardType:N,isTransitioning:C,items:l,isVertical:M,containerStyle:n,isItemsTwoLength:_,handleButtonEnter:c,handleTransitionEnd:te,handleButtonLeave:ne,handleIndicatorClick:G,handleMouseEnter:x,handleMouseLeave:ee,setActiveItem:E,prev:ae,next:Se,PlaceholderItem:Me,isTwoLengthShow:m,throttledArrowClick:o,throttledIndicatorHover:d}},lt="ElCarousel",nt=Z({name:lt}),ot=Z({...nt,props:tt,emits:at,setup(a,{expose:u,emit:p}){const l=a,{root:H,activeIndex:y,arrowDisplay:S,hasLabel:s,hover:I,isCardType:w,items:v,isVertical:k,containerStyle:_,handleButtonEnter:f,handleButtonLeave:C,isTransitioning:D,handleIndicatorClick:V,handleMouseEnter:N,handleMouseLeave:M,handleTransitionEnd:n,setActiveItem:o,prev:d,next:m,PlaceholderItem:h,isTwoLengthShow:T,throttledArrowClick:b,throttledIndicatorHover:E}=st(l,p),r=ye("carousel"),{t:W}=Ke(),x=A(()=>{const c=[r.b(),r.m(l.direction)];return e(w)&&c.push(r.m("card")),c}),ee=A(()=>{const c=[r.e("container")];return l.motionBlur&&e(D)&&v.value.length>1&&c.push(e(k)?`${r.namespace.value}-transitioning-vertical`:`${r.namespace.value}-transitioning`),c}),te=A(()=>{const c=[r.e("indicators"),r.em("indicators",l.direction)];return e(s)&&c.push(r.em("indicators","labels")),l.indicatorPosition==="outside"&&c.push(r.em("indicators","outside")),e(k)&&c.push(r.em("indicators","right")),c});return u({activeIndex:y,setActiveItem:o,prev:d,next:m}),(c,ne)=>($(),R("div",{ref_key:"root",ref:H,class:P(e(x)),onMouseenter:J(e(N),["stop"]),onMouseleave:J(e(M),["stop"])},[e(S)?($(),ce(fe,{key:0,name:"carousel-arrow-left",persisted:""},{default:Y(()=>[Q(O("button",{type:"button",class:P([e(r).e("arrow"),e(r).em("arrow","left")]),"aria-label":e(W)("el.carousel.leftArrow"),onMouseenter:G=>e(f)("left"),onMouseleave:e(C),onClick:J(G=>e(b)(e(y)-1),["stop"])},[q(e(ve),null,{default:Y(()=>[q(e(Ue))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[X,(c.arrow==="always"||e(I))&&(l.loop||e(y)>0)]])]),_:1})):U("v-if",!0),e(S)?($(),ce(fe,{key:1,name:"carousel-arrow-right",persisted:""},{default:Y(()=>[Q(O("button",{type:"button",class:P([e(r).e("arrow"),e(r).em("arrow","right")]),"aria-label":e(W)("el.carousel.rightArrow"),onMouseenter:G=>e(f)("right"),onMouseleave:e(C),onClick:J(G=>e(b)(e(y)+1),["stop"])},[q(e(ve),null,{default:Y(()=>[q(e(We))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[X,(c.arrow==="always"||e(I))&&(l.loop||e(y)<e(v).length-1)]])]),_:1})):U("v-if",!0),O("div",{class:P(e(ee)),style:Ce(e(_)),onTransitionend:e(n)},[q(e(h)),Ie(c.$slots,"default")],46,["onTransitionend"]),c.indicatorPosition!=="none"?($(),R("ul",{key:2,class:P(e(te))},[($(!0),R(je,null,Fe(e(v),(G,z)=>Q(($(),R("li",{key:z,class:P([e(r).e("indicator"),e(r).em("indicator",c.direction),e(r).is("active",z===e(y))]),onMouseenter:ae=>e(E)(z),onClick:J(ae=>e(V)(z),["stop"])},[O("button",{class:P(e(r).e("button")),"aria-label":e(W)("el.carousel.indicator",{index:z+1})},[e(s)?($(),R("span",{key:0},Je(G.props.label),1)):U("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[X,e(T)(z)]])),128))],2)):U("v-if",!0),l.motionBlur?($(),R("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[O("defs",null,[O("filter",{id:"elCarouselHorizontal"},[O("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),O("filter",{id:"elCarouselVertical"},[O("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):U("v-if",!0)],42,["onMouseenter","onMouseleave"]))}});var rt=_e(ot,[["__file","carousel.vue"]]);const it=he({name:{type:String,default:""},label:{type:[String,Number],default:""}}),ut=a=>{const u=qe(we),p=pe(),l=g(),H=g(!1),y=g(0),S=g(1),s=g(!1),I=g(!1),w=g(!1),v=g(!1),{isCardType:k,isVertical:_,cardScale:f}=u;function C(n,o,d){const m=d-1,h=o-1,T=o+1,b=d/2;return o===0&&n===m?-1:o===m&&n===0?d:n<h&&o-n>=b?d+1:n>T&&n-o>=b?-2:n}function D(n,o){var d,m;const h=e(_)?((d=u.root.value)==null?void 0:d.offsetHeight)||0:((m=u.root.value)==null?void 0:m.offsetWidth)||0;return w.value?h*((2-f)*(n-o)+1)/4:n<o?-(1+f)*h/4:(3+f)*h/4}function V(n,o,d){const m=u.root.value;return m?((d?m.offsetHeight:m.offsetWidth)||0)*(n-o):0}const N=(n,o,d)=>{var m;const h=e(k),T=(m=u.items.value.length)!=null?m:Number.NaN,b=n===o;!h&&!Ye(d)&&(v.value=b||n===d),!b&&T>2&&u.loop&&(n=C(n,o,T));const E=e(_);s.value=b,h?(w.value=Math.round(Math.abs(n-o))<=1,y.value=D(n,o),S.value=e(s)?1:f):y.value=V(n,o,E),I.value=!0,b&&l.value&&u.setContainerHeight(l.value.offsetHeight)};function M(){if(u&&e(k)){const n=u.items.value.findIndex(({uid:o})=>o===p.uid);u.setActiveItem(n)}}return ge(()=>{u.addItem({props:a,states:Qe({hover:H,translate:y,scale:S,active:s,ready:I,inStage:w,animating:v}),uid:p.uid,translateItem:N})}),Xe(()=>{u.removeItem(p.uid)}),{carouselItemRef:l,active:s,animating:v,hover:H,inStage:w,isVertical:_,translate:y,isCardType:k,scale:S,ready:I,handleItemClick:M}},ct=Z({name:le}),vt=Z({...ct,props:it,setup(a){const u=a,p=ye("carousel"),{carouselItemRef:l,active:H,animating:y,hover:S,inStage:s,isVertical:I,translate:w,isCardType:v,scale:k,ready:_,handleItemClick:f}=ut(u),C=A(()=>[p.e("item"),p.is("active",H.value),p.is("in-stage",s.value),p.is("hover",S.value),p.is("animating",y.value),{[p.em("item","card")]:v.value,[p.em("item","card-vertical")]:v.value&&I.value}]),D=A(()=>{const N=`${`translate${e(I)?"Y":"X"}`}(${e(w)}px)`,M=`scale(${e(k)})`;return{transform:[N,M].join(" ")}});return(V,N)=>Q(($(),R("div",{ref_key:"carouselItemRef",ref:l,class:P(e(C)),style:Ce(e(D)),onClick:e(f)},[e(v)?Q(($(),R("div",{key:0,class:P(e(p).e("mask"))},null,2)),[[X,!e(H)]]):U("v-if",!0),Ie(V.$slots,"default")],14,["onClick"])),[[X,e(_)]])}});var be=_e(vt,[["__file","carousel-item.vue"]]);const ht=Ze(rt,{CarouselItem:be}),gt=xe(be);export{gt as E,ht as a};
