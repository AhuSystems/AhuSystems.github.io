import{F as k,G as O,H as A,I as M,b as P,h as I,J as b,K as $,L as C,N as W,O as T,P as g,Q as D,R as j,S as v,T as q,V as B,W as F,X as G,Y as J,Z as K,_ as Q,$ as X,a as Z,a0 as E,p as z,a1 as U}from"./runtime.YEOS7twa.js";import{b as x}from"./disclose-version.Ckdmr7vr.js";const L=new Set,S=new Set;function sr(r){for(var a=0;a<r.length;a++)L.add(r[a]);for(var n of S)n(r)}function m(r){var R;var a=this,n=a.ownerDocument,_=r.type,i=((R=r.composedPath)==null?void 0:R.call(r))||[],e=i[0]||r.target,d=0,h=r.__root;if(h){var u=i.indexOf(h);if(u!==-1&&(a===document||a===window)){r.__root=a;return}var l=i.indexOf(a);if(l===-1)return;u<=l&&(d=u)}if(e=i[d]||r.target,e!==a){k(r,"currentTarget",{configurable:!0,get(){return e||n}});var w=P,o=I;O(null),A(null);try{for(var t,s=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var c=e["__"+_];if(c!==void 0&&!e.disabled)if(M(c)){var[H,...Y]=c;H.apply(e,[r,...Y])}else c.call(e,r)}catch(y){t?s.push(y):t=y}if(r.cancelBubble||f===a||f===null)break;e=f}if(t){for(let y of s)queueMicrotask(()=>{throw y});throw t}}finally{r.__root=a,delete r.currentTarget,O(w),A(o)}}}const rr=["touchstart","touchmove"];function ar(r){return rr.includes(r)}function or(r,a){var n=a==null?"":typeof a=="object"?a+"":a;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function er(r,a){return V(r,a)}function ir(r,a){b(),a.intro=a.intro??!1;const n=a.target,_=E,i=v;try{for(var e=$(n);e&&(e.nodeType!==8||e.data!==C);)e=W(e);if(!e)throw T;g(!0),D(e),j();const d=V(r,{...a,anchor:e});if(v===null||v.nodeType!==8||v.data!==q)throw B(),T;return g(!1),d}catch(d){if(d===T)return a.recover===!1&&F(),b(),G(n),g(!1),er(r,a);throw d}finally{g(_),D(i)}}const p=new Map;function V(r,{target:a,anchor:n,props:_={},events:i,context:e,intro:d=!0}){b();var h=new Set,u=o=>{for(var t=0;t<o.length;t++){var s=o[t];if(!h.has(s)){h.add(s);var f=ar(s);a.addEventListener(s,m,{passive:f});var c=p.get(s);c===void 0?(document.addEventListener(s,m,{passive:f}),p.set(s,1)):p.set(s,c+1)}}};u(J(L)),S.add(u);var l=void 0,w=K(()=>{var o=n??a.appendChild(Q());return X(()=>{if(e){Z({});var t=U;t.c=e}i&&(_.$$events=i),E&&x(o,null),l=r(o,_)||{},E&&(I.nodes_end=v),e&&z()}),()=>{var f;for(var t of h){a.removeEventListener(t,m);var s=p.get(t);--s===0?(document.removeEventListener(t,m),p.delete(t)):p.set(t,s)}S.delete(u),N.delete(l),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return N.set(l,w),l}let N=new WeakMap;function fr(r){const a=N.get(r);a&&a()}export{sr as d,ir as h,er as m,or as s,fr as u};