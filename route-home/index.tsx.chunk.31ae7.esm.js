(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{FA6U:function(e){e.exports={home:"MseGdYp2PYS2X87nWDjYm"}},FDtd:function(e,t,a){"use strict";function n(e){return e.map(e=>e.x+","+e.y).join(" ")}a.r(t);var r=a("hosL"),o=a("QRet"),c=e=>{var t,a,{n:o,pattern:c,offset:s,beat:i,width:l=400,height:b=400}=e,h=l/Math.PI,p=function(e,t){return Array.from(Array(e),(a,n)=>{var r=Math.PI-2*n*Math.PI/e;return{x:t*Math.sin(r),y:t*Math.cos(r)}})}(o,h).map((t=l/2,a=b/2,e=>({x:e.x+t,y:e.y+a}))),u=p.filter((e,t)=>Boolean(c[(t-s+o)%o])),m=e=>e===i?"red":1===c[e]?"black":"white";return Object(r.e)("svg",{viewBox:"0 0 "+l+" "+b,width:l,height:b,xmlns:"http://www.w3.org/2000/svg",style:{width:"30vw",height:"30vw"}},Object(r.e)("polygon",{points:n(p),fill:"none",stroke:"black"}),Object(r.e)("polygon",{points:n(u),fill:"none",stroke:"black","stroke-width":"2"}),p.map((e,t)=>Object(r.e)("circle",{key:"circle"+t,cx:e.x,cy:e.y,r:6,fill:m(t),stroke:"black"})))},s=a("XFgy"),i=e=>{var{value:t=0,onChange:a,label:n="",min:o=0,max:c=1,step:i=.01}=e;return Object(r.e)("div",{class:s.root},Object(r.e)("label",{for:""+n,class:s.label},n),Object(r.e)("input",{id:""+n,class:s.range,type:"range",min:o,max:c,step:i,value:t,onInput:e=>{e.preventDefault(),a(Number(e.target.value))}}))},l=a("PhT5"),b=a("oqkw"),h=a.n(b),p=e=>{var{track:t}=e,[a,n]=Object(o.c)(0),s=Object(o.a)(l.a);s.addEventListener("update",()=>n(e=>e+1));var{beat:b,pattern:p,k:u,n:m}=Object(l.d)()[t],v=Math.min(u,m),w=m;return Object(r.e)("div",{class:h.a.home},Object(r.e)(c,{n:w,pattern:p,offset:0,beat:b}),Object(r.e)("div",{class:h.a.header},"E("+v+", "+w+")"),Object(r.e)(i,{min:1,max:w,step:1,onChange:e=>{s.setK(t,e)},value:v}),Object(r.e)(i,{min:1,max:16,step:1,onChange:e=>{s.setN(t,e)},value:w}))},u=a("gIhm"),m=a("FA6U");t.default=()=>{var e=[u.b.KICK,u.b.SNARE,u.b.HIHAT];return Object(r.e)("div",{class:m.home},e.map(e=>Object(r.e)(p,{track:e})))}},XFgy:function(e){e.exports={root:"_3aO5CRh2wYbuhagmKQl1HR",range:"jLyU5gMc5228og_ZZtIoZ",label:"qG6-WTftQ-e3RteB2184m"}},oqkw:function(e){e.exports={home:"_2JwScd256DmIo2yAVuk2Oy",header:"_2UjwoAhB8NLBy3qA2NVzef"}}}]);
//# sourceMappingURL=index.tsx.chunk.31ae7.esm.js.map