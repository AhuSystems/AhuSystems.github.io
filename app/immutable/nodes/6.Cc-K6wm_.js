import{a as v,t as l}from"../chunks/disclose-version.CJDMvett.js";import{h as _,al as p,aC as u,B as h,C as n,F as y,D as i,z as j,A as w,N as d}from"../chunks/runtime.n64P4fcG.js";import{e as b,i as k}from"../chunks/each.C-qD9X21.js";import{s as x}from"../chunks/render.C3obOBDS.js";import{d as N}from"../chunks/events.C4ePU7uU.js";import{g as f}from"../chunks/entry.CBbJtVw9.js";function A(r,t,e,s){var a=r.__attributes??(r.__attributes={});if(_){a[t]=r.getAttribute(t);return}a[t]!==(a[t]=e)&&(e==null?r.removeAttribute(t):typeof e!="string"&&D(r).includes(t)?r[t]=e:r.setAttribute(t,e))}var m=new Map;function D(r){var t=m.get(r.nodeName);if(t)return t;m.set(r.nodeName,t=[]);for(var e,s=p(r),a=Element.prototype;a!==s;){e=u(s);for(var o in e)e[o].set&&t.push(o);s=p(s)}return t}var E=(r,t)=>f(`/project?id=${t}`),C=(r,t)=>{(r.key==="Enter"||r.key===" ")&&f(`/project?id=${t}`)},L=l('<div class="project-summary svelte-ntg48w" role="button" tabindex="0"><img class="thumbnail svelte-ntg48w" alt="Project Thumbnail"> <div class="project-details svelte-ntg48w"><h3> </h3></div></div>');function P(r,t){h(t,!0);let e=0;var s=L();s.__click=[E,e],s.__keydown=[C,e];var a=n(s),o=y(a,2),c=n(o),g=n(c,!0);i(c),i(o),i(s),j(()=>{A(a,"src",t.thumbnailUrl),x(g,t.projectName)}),v(r,s),w()}N(["click","keydown"]);var U=l('<div class="projects-column svelte-1gqn133"></div>');function T(r){const t=[{name:"LED display shader effect",thumbnail:"/LED-Display2.jpg"}];var e=U();b(e,21,()=>t,k,(s,a)=>{P(s,{get projectName(){return d(a).name},get thumbnailUrl(){return d(a).thumbnail}})}),i(e),v(r,e)}export{T as component};
