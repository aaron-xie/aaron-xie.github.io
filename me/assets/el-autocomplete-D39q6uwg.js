import{b as he,a2 as Y,bF as ye,b1 as Ee,a3 as $e,a4 as T,a6 as L,a7 as U,C as te,aL as Se,d as se,bs as we,bq as Ce,ab as Ae,u as Be,f as u,aO as Ie,l as A,cQ as Ne,k as Te,j as ke,o as B,v as De,x as v,s as Z,n as I,a as t,t as x,z as N,c as M,r as h,E as Fe,N as Pe,J as Ve,K as Ke,F as Oe,D as _e,ar as Le,bi as Me,ae as S,af as ee,bM as Re,ap as Ue,_ as We,aB as R,ai as Ge,G as He,cK as qe,I as ae}from"./index-xf_L3rL2.js";import{E as ze}from"./index-BrIf_SDW.js";import{d as je}from"./debounce-B05V5LEe.js";const Je=he({valueKey:{type:String,default:"value"},modelValue:{type:[String,Number],default:""},debounce:{type:Number,default:300},placement:{type:Y(String),values:["top","top-start","top-end","bottom","bottom-start","bottom-end"],default:"bottom-start"},fetchSuggestions:{type:Y([Function,Array]),default:ye},popperClass:{type:String,default:""},triggerOnFocus:{type:Boolean,default:!0},selectWhenUnmatched:{type:Boolean,default:!1},hideLoading:{type:Boolean,default:!1},teleported:Ee.teleported,highlightFirstItem:{type:Boolean,default:!1},fitInputWidth:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:String,...$e(["ariaLabel"])}),Qe={[T]:o=>L(o),[U]:o=>L(o),[te]:o=>L(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,select:o=>Se(o)},le="ElAutocomplete",Xe=se({name:le,inheritAttrs:!1}),Ye=se({...Xe,props:Je,emits:Qe,setup(o,{expose:w,emit:r}){const s=o,k=we(),D=Ce(),y=Ae(),i=Be("autocomplete"),a=u(),p=u(),F=u(),W=u();let G=!1,P=!1;const d=u([]),n=u(-1),H=u(""),f=u(!1),C=u(!1),m=u(!1),E=Ie(),oe=A(()=>D.style),g=A(()=>(d.value.length>0||m.value)&&f.value),q=A(()=>!s.hideLoading&&m.value),ne=A(()=>a.value?Array.from(a.value.$el.querySelectorAll("input")):[]),re=()=>{g.value&&(H.value=`${a.value.$el.offsetWidth}px`)},ue=()=>{n.value=-1},z=async e=>{if(C.value)return;const l=c=>{m.value=!1,!C.value&&(R(c)?(d.value=c,n.value=s.highlightFirstItem?0:-1):Ge(le,"autocomplete suggestions must be an array"))};if(m.value=!0,R(s.fetchSuggestions))l(s.fetchSuggestions);else{const c=await s.fetchSuggestions(e,l);R(c)&&l(c)}},j=je(z,s.debounce),ie=e=>{const l=!!e;if(r(U,e),r(T,e),C.value=!1,f.value||(f.value=l),!s.triggerOnFocus&&!e){C.value=!0,d.value=[];return}j(e)},ce=e=>{var l;y.value||(((l=e.target)==null?void 0:l.tagName)!=="INPUT"||ne.value.includes(document.activeElement))&&(f.value=!0)},de=e=>{r(te,e)},fe=e=>{P?P=!1:(f.value=!0,r("focus",e),s.triggerOnFocus&&!G&&j(String(s.modelValue)))},pe=e=>{setTimeout(()=>{var l;if((l=F.value)!=null&&l.isFocusInsideContent()){P=!0;return}f.value&&$(),r("blur",e)})},ve=()=>{f.value=!1,r(T,""),r("clear")},J=async()=>{g.value&&n.value>=0&&n.value<d.value.length?V(d.value[n.value]):s.selectWhenUnmatched&&(r("select",{value:s.modelValue}),d.value=[],n.value=-1)},ge=e=>{g.value&&(e.preventDefault(),e.stopPropagation(),$())},$=()=>{f.value=!1},me=()=>{var e;(e=a.value)==null||e.focus()},be=()=>{var e;(e=a.value)==null||e.blur()},V=async e=>{r(U,e[s.valueKey]),r(T,e[s.valueKey]),r("select",e),d.value=[],n.value=-1},K=e=>{if(!g.value||m.value)return;if(e<0){n.value=-1;return}e>=d.value.length&&(e=d.value.length-1);const l=p.value.querySelector(`.${i.be("suggestion","wrap")}`),b=l.querySelectorAll(`.${i.be("suggestion","list")} li`)[e],O=l.scrollTop,{offsetTop:X,scrollHeight:_}=b;X+_>O+l.clientHeight&&(l.scrollTop+=_),X<O&&(l.scrollTop-=_),n.value=e,a.value.ref.setAttribute("aria-activedescendant",`${E.value}-item-${n.value}`)},Q=Ne(W,()=>{g.value&&$()});return Te(()=>{Q==null||Q()}),ke(()=>{a.value.ref.setAttribute("role","textbox"),a.value.ref.setAttribute("aria-autocomplete","list"),a.value.ref.setAttribute("aria-controls","id"),a.value.ref.setAttribute("aria-activedescendant",`${E.value}-item-${n.value}`),G=a.value.ref.hasAttribute("readonly")}),w({highlightedIndex:n,activated:f,loading:m,inputRef:a,popperRef:F,suggestions:d,handleSelect:V,handleKeyEnter:J,focus:me,blur:be,close:$,highlight:K,getData:z}),(e,l)=>(B(),De(t(Ue),{ref_key:"popperRef",ref:F,visible:t(g),placement:e.placement,"fallback-placements":["bottom-start","top-start"],"popper-class":[t(i).e("popper"),e.popperClass],teleported:e.teleported,"gpu-acceleration":!1,pure:"","manual-mode":"",effect:"light",trigger:"click",transition:`${t(i).namespace.value}-zoom-in-top`,persistent:"",role:"listbox",onBeforeShow:re,onHide:ue},{content:v(()=>[Z("div",{ref_key:"regionRef",ref:p,class:I([t(i).b("suggestion"),t(i).is("loading",t(q))]),style:x({[e.fitInputWidth?"width":"minWidth"]:H.value,outline:"none"}),role:"region"},[N(t(ze),{id:t(E),tag:"ul","wrap-class":t(i).be("suggestion","wrap"),"view-class":t(i).be("suggestion","list"),role:"listbox"},{default:v(()=>[t(q)?(B(),M("li",{key:0},[h(e.$slots,"loading",{},()=>[N(t(Fe),{class:I(t(i).is("loading"))},{default:v(()=>[N(t(Pe))]),_:1},8,["class"])])])):(B(!0),M(Ve,{key:1},Ke(d.value,(c,b)=>(B(),M("li",{id:`${t(E)}-item-${b}`,key:b,class:I({highlighted:n.value===b}),role:"option","aria-selected":n.value===b,onClick:O=>V(c)},[h(e.$slots,"default",{item:c},()=>[Oe(_e(c[e.valueKey]),1)])],10,["id","aria-selected","onClick"]))),128))]),_:3},8,["id","wrap-class","view-class"])],6)]),default:v(()=>[Z("div",{ref_key:"listboxRef",ref:W,class:I([t(i).b(),e.$attrs.class]),style:x(t(oe)),role:"combobox","aria-haspopup":"listbox","aria-expanded":t(g),"aria-owns":t(E)},[N(t(Le),Me({ref_key:"inputRef",ref:a},t(k),{clearable:e.clearable,disabled:t(y),name:e.name,"model-value":e.modelValue,"aria-label":e.ariaLabel,onInput:ie,onChange:de,onFocus:fe,onBlur:pe,onClear:ve,onKeydown:[S(ee(c=>K(n.value-1),["prevent"]),["up"]),S(ee(c=>K(n.value+1),["prevent"]),["down"]),S(J,["enter"]),S($,["tab"]),S(ge,["esc"])],onMousedown:ce}),Re({_:2},[e.$slots.prepend?{name:"prepend",fn:v(()=>[h(e.$slots,"prepend")])}:void 0,e.$slots.append?{name:"append",fn:v(()=>[h(e.$slots,"append")])}:void 0,e.$slots.prefix?{name:"prefix",fn:v(()=>[h(e.$slots,"prefix")])}:void 0,e.$slots.suffix?{name:"suffix",fn:v(()=>[h(e.$slots,"suffix")])}:void 0]),1040,["clearable","disabled","name","model-value","aria-label","onKeydown"])],14,["aria-expanded","aria-owns"])]),_:3},8,["visible","placement","popper-class","teleported","transition"]))}});var Ze=We(Ye,[["__file","autocomplete.vue"]]);const ta=He(Ze),sa=qe("common",()=>{const o=u(),w=u(),r=u([]),s=u();async function k(){console.log("getCountry");const a=await ae("/customer/GetAllCountry");return a.status===200&&(o.value=a.data),a.data}async function D(a){const p=await ae("/customer/GetStateProvinceByCountryid",{countryId:a});return p.status===200&&(w.value=p.data),p.data}async function y(){const a=[{name:"USD",symbol:"$",ratio:1},{name:"RMB",symbol:"￥",ratio:7.2}];return r.value=a,s.value=a[0],a}function i(a){s.value=r.value.find(p=>p.name===a)}return s.value||y(),{currency:s,currencyData:r,getCurrency:y,changeCurrency:i,countryData:o,getCountry:k,provinceData:w,getProvince:D}});export{ta as E,sa as u};
