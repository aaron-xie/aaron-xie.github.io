import{d as P,f as l,aw as B,w as v,c as i,s as e,z as n,x as d,a as s,I as C,J as I,L as k,M as E,N as S,o as p,F as x,D as m,V as w}from"./index-BRm-_Hy6.js";/* empty css                   */import{E as q}from"./el-pagination-CE-wFCfw.js";/* empty css               */import"./el-select-BvOwiY8U.js";import"./el-breadcrumb-item-l0sNRNKZ.js";/* empty css                      *//* empty css                      *//* empty css                 *//* empty css                    *//* empty css                        */import{E as y,a as L}from"./index-DIlto3nt.js";import"./index-DjCrTEEu.js";import"./strings-vz0pyFxw.js";import"./debounce-C0144Bk0.js";import"./_baseIteratee-Cs3AK3w-.js";import"./index-DEKxqvHe.js";const V={class:"page-search"},D={class:"page-body"},R={class:"goodslist border mt-1"},T=["onClick"],F={class:"img"},M=["src","alt"],$={class:"price"},G={class:"flex flex-end mt-2"},H=P({__name:"Search",setup(J){const r=k(),N=E(),_=l(),g=l(0),f=l(Number(r.query.size)||16),c=l(Number(r.query.page)||1),b={sortBy:"default",pageSize:f.value,pageIndex:c.value},u=async(a={})=>{const{k:o}=r.query,{data:t,TotalRecords:h}=await S("product/GetSearchProducts",{...b,...a,searchTerms:o});_.value=t,g.value=h};B(()=>{u()}),v(r.query,(a,o)=>{a!==o&&u()}),v(c,a=>{u({pageIndex:a})});const z=a=>{c.value=a};return(a,o)=>(p(),i("main",V,[e("article",D,[e("header",null,[n(s(L),null,{default:d(()=>[n(s(y),{to:"/home"},{default:d(()=>o[0]||(o[0]=[x(" Home ")])),_:1}),n(s(y),null,{default:d(()=>o[1]||(o[1]=[x("search result")])),_:1})]),_:1})]),e("ul",R,[(p(!0),i(C,null,I(_.value,t=>(p(),i("li",{key:t.ProductId,onClick:h=>s(N).push(`/goods/${t.ProductId}`)},[e("div",F,[e("img",{src:t.PictureUrl,alt:t.LocalizedName},null,8,M)]),e("h5",null,m(t.LocalizedName),1),e("div",$,[e("span",null,m(t.Price),1),e("del",null,m(t.OldPrice),1)])],8,T))),128))]),e("div",G,[n(s(q),{"page-size":f.value,layout:"prev, pager, next",total:g.value,onCurrentChange:z},null,8,["page-size","total"])])])]))}}),ne=w(H,[["__scopeId","data-v-dcb43b5f"]]);export{ne as default};
