import{a$ as be,g as _e,a5 as Z,a6 as ke,i as K,d as ae,b0 as G,b1 as we,b2 as he,W as Ie,h as xe,b3 as Ce,q as x,b4 as ye,R as Ee,x as w,j as J,ac as Ne,t as ze,o as N,B as U,w as c,b as r,a0 as Re,a as v,n as u,u as a,A as Q,b5 as Oe,Y as Te,z,F as _,H as Le,c as A,L as ee,Z as Se,a1 as Me,b6 as $e,aS as Ae,D as Xe,b7 as Ve,b8 as Ye,M as Fe,X as Be,$ as De,r as Pe,b9 as He,af as L,k as We,ba as C,bb as je,J as qe}from"./index-BntcRlxg.js";import{d as Ze}from"./debounce-Bjved5R2.js";var Ke="Expected a function";function X(p,R,d){var h=!0,n=!0;if(typeof p!="function")throw new TypeError(Ke);return be(d)&&(h="leading"in d?!!d.leading:h,n="trailing"in d?!!d.trailing:n),Ze(p,R,{leading:h,maxWait:R,trailing:n})}const Ge=_e({urlList:{type:Z(Array),default:()=>ke([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),Je={close:()=>!0,switch:p=>K(p),rotate:p=>K(p)},Ue=ae({name:"ElImageViewer"}),Qe=ae({...Ue,props:Ge,emits:Je,setup(p,{expose:R,emit:d}){var h;const n=p,y={CONTAIN:{name:"contain",icon:G(we)},ORIGINAL:{name:"original",icon:G(he)}},{t:te}=Ie(),s=xe("image-viewer"),{nextZIndex:ne}=Ce(),S=x(),V=x([]),Y=ye(),I=x(!0),g=x(n.initialIndex),O=Ee(y.CONTAIN),o=x({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),se=x((h=n.zIndex)!=null?h:ne()),oe=w(()=>{const{urlList:e}=n;return e.length<=1}),F=w(()=>g.value===0),B=w(()=>g.value===n.urlList.length-1),le=w(()=>n.urlList[g.value]),re=w(()=>[s.e("btn"),s.e("prev"),s.is("disabled",!n.infinite&&F.value)]),ie=w(()=>[s.e("btn"),s.e("next"),s.is("disabled",!n.infinite&&B.value)]),ce=w(()=>{const{scale:e,deg:l,offsetX:t,offsetY:i,enableTransition:f}=o.value;let m=t/e,b=i/e;const E=l*Math.PI/180,j=Math.cos(E),q=Math.sin(E);m=m*j+b*q,b=b*j-t/e*q;const $={transform:`scale(${e}) rotate(${l}deg) translate(${m}px, ${b}px)`,transition:f?"transform .3s":""};return O.value.name===y.CONTAIN.name&&($.maxWidth=$.maxHeight="100%"),$});function T(){de(),d("close")}function ue(){const e=X(t=>{switch(t.code){case C.esc:n.closeOnPressEscape&&T();break;case C.space:P();break;case C.left:H();break;case C.up:k("zoomIn");break;case C.right:W();break;case C.down:k("zoomOut");break}}),l=X(t=>{const i=t.deltaY||t.deltaX;k(i<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});Y.run(()=>{L(document,"keydown",e),L(document,"wheel",l)})}function de(){Y.stop()}function fe(){I.value=!1}function me(e){I.value=!1,e.target.alt=te("el.image.error")}function ve(e){if(I.value||e.button!==0||!S.value)return;o.value.enableTransition=!1;const{offsetX:l,offsetY:t}=o.value,i=e.pageX,f=e.pageY,m=X(E=>{o.value={...o.value,offsetX:l+E.pageX-i,offsetY:t+E.pageY-f}}),b=L(document,"mousemove",m);L(document,"mouseup",()=>{b()}),e.preventDefault()}function D(){o.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function P(){if(I.value)return;const e=je(y),l=Object.values(y),t=O.value.name,f=(l.findIndex(m=>m.name===t)+1)%e.length;O.value=y[e[f]],D()}function M(e){const l=n.urlList.length;g.value=(e+l)%l}function H(){F.value&&!n.infinite||M(g.value-1)}function W(){B.value&&!n.infinite||M(g.value+1)}function k(e,l={}){if(I.value)return;const{minScale:t,maxScale:i}=n,{zoomRate:f,rotateDeg:m,enableTransition:b}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...l};switch(e){case"zoomOut":o.value.scale>t&&(o.value.scale=Number.parseFloat((o.value.scale/f).toFixed(3)));break;case"zoomIn":o.value.scale<i&&(o.value.scale=Number.parseFloat((o.value.scale*f).toFixed(3)));break;case"clockwise":o.value.deg+=m,d("rotate",o.value.deg);break;case"anticlockwise":o.value.deg-=m,d("rotate",o.value.deg);break}o.value.enableTransition=b}function pe(e){var l;((l=e.detail)==null?void 0:l.focusReason)==="pointer"&&e.preventDefault()}function ge(){n.closeOnPressEscape&&T()}return J(le,()=>{Ne(()=>{const e=V.value[0];e!=null&&e.complete||(I.value=!0)})}),J(g,e=>{D(),d("switch",e)}),ze(()=>{ue()}),R({setActiveItem:M}),(e,l)=>(N(),U(a(He),{to:"body",disabled:!e.teleported},{default:c(()=>[r(Re,{name:"viewer-fade",appear:""},{default:c(()=>[v("div",{ref_key:"wrapper",ref:S,tabindex:-1,class:u(a(s).e("wrapper")),style:Q({zIndex:se.value})},[r(a(Oe),{loop:"",trapped:"","focus-trap-el":S.value,"focus-start-el":"container",onFocusoutPrevented:pe,onReleaseRequested:ge},{default:c(()=>[v("div",{class:u(a(s).e("mask")),onClick:Te(t=>e.hideOnClickModal&&T(),["self"])},null,10,["onClick"]),z(" CLOSE "),v("span",{class:u([a(s).e("btn"),a(s).e("close")]),onClick:T},[r(a(_),null,{default:c(()=>[r(a(Le))]),_:1})],2),z(" ARROW "),a(oe)?z("v-if",!0):(N(),A(ee,{key:0},[v("span",{class:u(a(re)),onClick:H},[r(a(_),null,{default:c(()=>[r(a(Se))]),_:1})],2),v("span",{class:u(a(ie)),onClick:W},[r(a(_),null,{default:c(()=>[r(a(Me))]),_:1})],2)],64)),z(" ACTIONS "),v("div",{class:u([a(s).e("btn"),a(s).e("actions")])},[v("div",{class:u(a(s).e("actions__inner"))},[r(a(_),{onClick:t=>k("zoomOut")},{default:c(()=>[r(a($e))]),_:1},8,["onClick"]),r(a(_),{onClick:t=>k("zoomIn")},{default:c(()=>[r(a(Ae))]),_:1},8,["onClick"]),v("i",{class:u(a(s).e("actions__divider"))},null,2),r(a(_),{onClick:P},{default:c(()=>[(N(),U(Xe(a(O).icon)))]),_:1}),v("i",{class:u(a(s).e("actions__divider"))},null,2),r(a(_),{onClick:t=>k("anticlockwise")},{default:c(()=>[r(a(Ve))]),_:1},8,["onClick"]),r(a(_),{onClick:t=>k("clockwise")},{default:c(()=>[r(a(Ye))]),_:1},8,["onClick"])],2)],2),z(" CANVAS "),v("div",{class:u(a(s).e("canvas"))},[(N(!0),A(ee,null,Fe(e.urlList,(t,i)=>Be((N(),A("img",{ref_for:!0,ref:f=>V.value[i]=f,key:t,src:t,style:Q(a(ce)),class:u(a(s).e("img")),crossorigin:e.crossorigin,onLoad:fe,onError:me,onMousedown:ve},null,46,["src","crossorigin"])),[[De,i===g.value]])),128))],2),Pe(e.$slots,"default")]),_:3},8,["focus-trap-el"])],6)]),_:3})]),_:3},8,["disabled"]))}});var ea=We(Qe,[["__file","image-viewer.vue"]]);const na=qe(ea);export{na as E,X as t};
