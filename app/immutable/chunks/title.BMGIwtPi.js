import{e as u,s as d,a as z,t as _,b as w}from"./disclose-version.Cq8qypr0.js";import{t as b,p as j,b as L,c as i,g as f,d as o}from"./runtime.DDZGLVoS.js";import{o as $}from"./index-client.BWSlKGfN.js";import{w as P}from"./index.DYfoAV4t.js";function p(e,t,c){if(c){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}var C=_('<nav class="svelte-f7zkee"><a href="/" class="left svelte-f7zkee"><div class="title svelte-f7zkee"><img src="/robot-face-svgrepo-com.svg" alt="site-logo" class="svelte-f7zkee"> <h1 class="svelte-f7zkee">Ahu Systems</h1></div></a> <a href="/projects" class="right svelte-f7zkee"><h1 class="svelte-f7zkee">&lt/&gt</h1></a></nav>');function M(e,t){L(t,!0);const c=d(),n=()=>w(s,"$activePage",c),s=P("");function h(){s.set("home")}function g(){s.set("projects")}$(()=>{window.location.pathname==="/"?s.set("home"):window.location.pathname==="/projects"&&s.set("projects")});var l=C(),a=i(l);a.__click=h;var v=i(a),m=f(i(v),2);o(v),o(a);var r=f(a,2);r.__click=g;var k=i(r);o(r),o(l),b(()=>{p(m,"active",n()==="home"),p(k,"active",n()==="projects")}),z(e,l),j()}u(["click"]);export{M as T};