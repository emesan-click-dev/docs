import{d as y,W as f,K as t,b as a,c as r,Y as h,w as u,g as m,e as p,t as i,f as l,ai as k,a2 as g,G as w,aj as N,l as C}from"./entry.f25b2287.js";const B={key:0,class:"docs-prev-next"},D={class:"wrapper"},P={key:0,class:"directory"},V={class:"title"},j={key:1},F={class:"wrapper"},I={key:0,class:"directory"},b={class:"title"},E=y({__name:"DocsPrevNext",setup(G){const{prev:e,next:s,navigation:v}=f(),{navDirFromPath:x}=N(),_=d=>{var n;const c=x(d._path,v.value||[]);if(c&&c[0])return((n=c[0])==null?void 0:n._path)??"";{const o=d.split("/");return(o.length>1?o[o.length-2]:"").split("-").map(k).join(" ")}};return(d,c)=>{const n=g,o=w;return t(e)||t(s)?(a(),r("div",B,[t(e)&&t(e)._path?(a(),h(o,{key:0,to:t(e)._path,class:"prev"},{default:u(()=>[m(n,{name:"heroicons-outline:arrow-sm-left",class:"icon"}),p("div",D,[_(t(e)._path)?(a(),r("span",P,i(_(t(e)._path)),1)):l("",!0),p("span",V,i(t(e).title),1)])]),_:1},8,["to"])):(a(),r("span",j)),t(s)&&t(s)._path?(a(),h(o,{key:2,to:t(s)._path,class:"next"},{default:u(()=>[p("div",F,[_(t(s)._path)?(a(),r("span",I,i(_(t(s)._path)),1)):l("",!0),p("span",b,i(t(s).title),1)]),m(n,{name:"heroicons-outline:arrow-sm-right",class:"icon"})]),_:1},8,["to"])):l("",!0)])):l("",!0)}}});const L=C(E,[["__scopeId","data-v-30e1aea1"]]);export{L as default};