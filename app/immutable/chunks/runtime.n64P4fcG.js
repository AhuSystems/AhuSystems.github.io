var ur=Array.isArray,lr=Array.from,or=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,ir=Object.getOwnPropertyDescriptors,fr=Object.prototype,_r=Array.prototype,cr=Object.getPrototypeOf;const vr=()=>{};function Ft(t){for(var r=0;r<t.length;r++)t[r]()}const O=2,st=4,M=8,ut=16,w=32,K=64,C=128,U=256,h=512,L=1024,$=2048,k=4096,H=8192,Pt=16384,lt=32768,bt=1<<18,ot=1<<19,pr=Symbol("$state"),hr=Symbol("legacy props");function qt(t){return t===this.v}function Mt(t,r){return t!=t?r==r:t!==r||t!==null&&typeof t=="object"||typeof t=="function"}function dr(t){return!Mt(t,this.v)}function Lt(t){throw new Error("effect_in_teardown")}function Ht(){throw new Error("effect_in_unowned_derived")}function Yt(t){throw new Error("effect_orphan")}function Bt(){throw new Error("effect_update_depth_exceeded")}function Er(){throw new Error("hydration_failed")}function wr(t){throw new Error("props_invalid_value")}function yr(){throw new Error("state_descriptors_fixed")}function Tr(){throw new Error("state_prototype_fixed")}function Ut(){throw new Error("state_unsafe_local_read")}function mr(){throw new Error("state_unsafe_mutation")}let jt=!1;const Ar=1,xr=2,Rr=16,Ir=1,Dr=4,Sr=8,gr=16,Or=1,kr=2,Vt="[",Gt="[!",Kt="]",it={},Cr=Symbol();function ft(t){console.warn("hydration_mismatch")}let A=!1;function Nr(t){A=t}let d;function P(t){if(t===null)throw ft(),it;return d=t}function Fr(){return P(x(d))}function Pr(t){if(A){if(x(d)!==null)throw ft(),it;d=t}}function br(t=1){if(A){for(var r=t,n=d;r--;)n=x(n);d=n}}function qr(){for(var t=0,r=d;;){if(r.nodeType===8){var n=r.data;if(n===Kt){if(t===0)return r;t-=1}else(n===Vt||n===Gt)&&(t+=1)}var e=x(r);r.remove(),r=e}}var nt,_t,ct;function Mr(){if(nt===void 0){nt=window;var t=Element.prototype,r=Node.prototype;_t=rt(r,"firstChild").get,ct=rt(r,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function z(t=""){return document.createTextNode(t)}function W(t){return _t.call(t)}function x(t){return ct.call(t)}function Lr(t,r){if(!A)return W(t);var n=W(d);if(n===null)n=d.appendChild(z());else if(r&&n.nodeType!==3){var e=z();return n==null||n.before(e),P(e),e}return P(n),n}function Hr(t,r){if(!A){var n=W(t);return n instanceof Comment&&n.data===""?x(n):n}return d}function Yr(t,r=1,n=!1){let e=A?d:t;for(var a;r--;)a=e,e=x(e);if(!A)return e;var s=e==null?void 0:e.nodeType;if(n&&s!==3){var u=z();return e===null?a==null||a.after(u):e.before(u),P(u),u}return P(e),e}function Br(t){t.textContent=""}function Ur(t){var r=O|L;o===null?r|=C:o.f|=ot;const n={children:null,ctx:p,deps:null,equals:qt,f:r,fn:t,reactions:null,v:null,version:0,parent:o};if(l!==null&&l.f&O){var e=l;(e.children??(e.children=[])).push(n)}return n}function vt(t){var r=t.children;if(r!==null){t.children=null;for(var n=0;n<r.length;n+=1){var e=r[n];e.f&O?J(e):F(e)}}}function pt(t){var r,n=o;G(t.parent);try{vt(t),r=St(t)}finally{G(n)}return r}function ht(t){var r=pt(t),n=(R||t.f&C)&&t.deps!==null?$:h;T(t,n),t.equals(r)||(t.v=r,t.version=tr())}function J(t){vt(t),q(t,0),T(t,H),t.v=t.children=t.deps=t.ctx=t.reactions=null}function dt(t){o===null&&l===null&&Yt(),l!==null&&l.f&C&&Ht(),Q&&Lt()}function $t(t,r){var n=r.last;n===null?r.last=r.first=t:(n.next=t,t.prev=n,r.last=t)}function N(t,r,n,e=!0){var a=(t&K)!==0,s=o,u={ctx:p,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|L,first:null,fn:r,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(n){var i=I;try{et(!0),Z(u),u.f|=Pt}catch(f){throw F(u),f}finally{et(i)}}else r!==null&&kt(u);var E=n&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&ot)===0;if(!E&&!a&&e&&(s!==null&&$t(u,s),l!==null&&l.f&O)){var y=l;(y.children??(y.children=[])).push(u)}return u}function jr(t){const r=N(M,null,!1);return T(r,h),r.teardown=t,r}function Vr(t){dt();var r=o!==null&&(o.f&w)!==0&&p!==null&&!p.m;if(r){var n=p;(n.e??(n.e=[])).push({fn:t,effect:o,reaction:l})}else{var e=Et(t);return e}}function Gr(t){return dt(),Zt(t)}function Kr(t){const r=N(K,t,!0);return()=>{F(r)}}function Et(t){return N(st,t,!1)}function Zt(t){return N(M,t,!0)}function $r(t){return zt(t)}function zt(t,r=0){return N(M|ut|r,t,!0)}function Zr(t,r=!0){return N(M|w,t,!0,r)}function wt(t){var r=t.teardown;if(r!==null){const n=Q,e=l;at(!0),V(null);try{r.call(null)}finally{at(n),V(e)}}}function yt(t){var r=t.deriveds;if(r!==null){t.deriveds=null;for(var n=0;n<r.length;n+=1)J(r[n])}}function Tt(t,r=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var e=n.next;F(n,r),n=e}}function Wt(t){for(var r=t.first;r!==null;){var n=r.next;r.f&w||F(r),r=n}}function F(t,r=!0){var n=!1;if((r||t.f&bt)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var s=e===a?null:x(e);e.remove(),e=s}n=!0}Tt(t,r&&!n),yt(t),q(t,0),T(t,H);var u=t.transitions;if(u!==null)for(const E of u)E.stop();wt(t);var i=t.parent;i!==null&&i.first!==null&&mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function mt(t){var r=t.parent,n=t.prev,e=t.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),r!==null&&(r.first===t&&(r.first=e),r.last===t&&(r.last=n))}function zr(t,r){var n=[];At(t,n,!0),Xt(n,()=>{F(t),r&&r()})}function Xt(t,r){var n=t.length;if(n>0){var e=()=>--n||r();for(var a of t)a.out(e)}else r()}function At(t,r,n){if(!(t.f&k)){if(t.f^=k,t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&r.push(u);for(var e=t.first;e!==null;){var a=e.next,s=(e.f&lt)!==0||(e.f&w)!==0;At(e,r,s?n:!1),e=a}}}function Wr(t){xt(t,!0)}function xt(t,r){if(t.f&k){Y(t)&&Z(t),t.f^=k;for(var n=t.first;n!==null;){var e=n.next,a=(n.f&lt)!==0||(n.f&w)!==0;xt(n,a?r:!1),n=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&s.in()}}let j=!1,X=[];function Rt(){j=!1;const t=X.slice();X=[],Ft(t)}function Xr(t){j||(j=!0,queueMicrotask(Rt)),X.push(t)}function Jt(){j&&Rt()}const It=0,Qt=1;let B=It,b=!1,I=!1,Q=!1;function et(t){I=t}function at(t){Q=t}let m=[],D=0;let l=null;function V(t){l=t}let o=null;function G(t){o=t}let S=null;function Jr(t){S=t}let c=null,v=0,g=null;function Qr(t){g=t}let Dt=0,R=!1,p=null;function tr(){return++Dt}function tn(){return!jt}function Y(t){var u,i;var r=t.f;if(r&L)return!0;if(r&$){var n=t.deps,e=(r&C)!==0;if(n!==null){var a;if(r&U){for(a=0;a<n.length;a++)((u=n[a]).reactions??(u.reactions=[])).push(t);t.f^=U}for(a=0;a<n.length;a++){var s=n[a];if(Y(s)&&ht(s),e&&o!==null&&!R&&!((i=s==null?void 0:s.reactions)!=null&&i.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}e||T(t,h)}return!1}function rr(t,r,n){throw t}function St(t){var tt;var r=c,n=v,e=g,a=l,s=R,u=S,i=p,E=t.f;c=null,v=0,g=null,l=E&(w|K)?null:t,R=!I&&(E&C)!==0,S=null,p=t.ctx;try{var y=(0,t.fn)(),f=t.deps;if(c!==null){var _;if(q(t,v),f!==null&&v>0)for(f.length=v+c.length,_=0;_<c.length;_++)f[v+_]=c[_];else t.deps=f=c;if(!R)for(_=v;_<f.length;_++)((tt=f[_]).reactions??(tt.reactions=[])).push(t)}else f!==null&&v<f.length&&(q(t,v),f.length=v);return y}finally{c=r,v=n,g=e,l=a,R=s,S=u,p=i}}function nr(t,r){let n=r.reactions;if(n!==null){var e=n.indexOf(t);if(e!==-1){var a=n.length-1;a===0?n=r.reactions=null:(n[e]=n[a],n.pop())}}n===null&&r.f&O&&(c===null||!c.includes(r))&&(T(r,$),r.f&(C|U)||(r.f^=U),q(r,0))}function q(t,r){var n=t.deps;if(n!==null)for(var e=r;e<n.length;e++)nr(t,n[e])}function Z(t){var r=t.f;if(!(r&H)){T(t,h);var n=o;o=t;try{r&ut?Wt(t):Tt(t),yt(t),wt(t);var e=St(t);t.teardown=typeof e=="function"?e:null,t.version=Dt}catch(a){rr(a)}finally{o=n}}}function gt(){D>1e3&&(D=0,Bt()),D++}function Ot(t){var r=t.length;if(r!==0){gt();var n=I;I=!0;try{for(var e=0;e<r;e++){var a=t[e];a.f&h||(a.f^=h);var s=[];Ct(a,s),er(s)}}finally{I=n}}}function er(t){var r=t.length;if(r!==0)for(var n=0;n<r;n++){var e=t[n];!(e.f&(H|k))&&Y(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?mt(e):e.fn=null))}}function ar(){if(b=!1,D>1001)return;const t=m;m=[],Ot(t),b||(D=0)}function kt(t){B===It&&(b||(b=!0,queueMicrotask(ar)));for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(n&(K|w)){if(!(n&h))return;r.f^=h}}m.push(r)}function Ct(t,r){var n=t.first,e=[];t:for(;n!==null;){var a=n.f,s=(a&w)!==0,u=s&&(a&h)!==0;if(!u&&!(a&k))if(a&M){s?n.f^=h:Y(n)&&Z(n);var i=n.first;if(i!==null){n=i;continue}}else a&st&&e.push(n);var E=n.next;if(E===null){let _=n.parent;for(;_!==null;){if(t===_)break t;var y=_.next;if(y!==null){n=y;continue t}_=_.parent}}n=E}for(var f=0;f<e.length;f++)i=e[f],r.push(i),Ct(i,r)}function Nt(t){var r=B,n=m;try{gt();const a=[];B=Qt,m=a,b=!1,Ot(n);var e=t==null?void 0:t();return Jt(),(m.length>0||a.length>0)&&Nt(),D=0,e}finally{B=r,m=n}}async function rn(){await Promise.resolve(),Nt()}function nn(t){var i;var r=t.f,n=(r&O)!==0;if(n&&r&H){var e=pt(t);return J(t),e}if(l!==null){S!==null&&S.includes(t)&&Ut();var a=l.deps;c===null&&a!==null&&a[v]===t?v++:c===null?c=[t]:c.push(t),g!==null&&o!==null&&o.f&h&&!(o.f&w)&&g.includes(t)&&(T(o,L),kt(o))}else if(n&&t.deps===null){var s=t,u=s.parent;u!==null&&!((i=u.deriveds)!=null&&i.includes(s))&&(u.deriveds??(u.deriveds=[])).push(s)}return n&&(s=t,Y(s)&&ht(s)),t.v}function en(t){const r=l;try{return l=null,t()}finally{l=r}}const sr=~(L|$|h);function T(t,r){t.f=t.f&sr|r}function an(t,r=!1,n){p={p,c:null,e:null,m:!1,s:t,x:null,l:null}}function sn(t){const r=p;if(r!==null){t!==void 0&&(r.x=t);const u=r.e;if(u!==null){var n=o,e=l;r.e=null;try{for(var a=0;a<u.length;a++){var s=u[a];G(s.effect),V(s.reaction),Et(s.fn)}}finally{G(n),V(e)}}p=r.p,r.m=!0}return t||{}}export{h as $,sn as A,an as B,Lr as C,Pr as D,xr as E,Yr as F,p as G,Gt as H,k as I,Vr as J,en as K,vr as L,jr as M,nn as N,Mr as O,Vt as P,it as Q,ft as R,Er as S,Kr as T,qt as U,O as V,tn as W,ut as X,S as Y,mr as Z,tr as _,Fr as a,w as a0,L as a1,T as a2,C as a3,kt as a4,Jr as a5,c as a6,g as a7,Qr as a8,$ as a9,Or as aA,kr as aB,ir as aC,Nt as aD,Gr as aE,rn as aF,Mt as aG,dr as aa,or as ab,V as ac,G as ad,pr as ae,fr as af,_r as ag,yr as ah,rt as ai,Cr as aj,Tr as ak,cr as al,Et as am,Zt as an,Xr as ao,wr as ap,Dr as aq,K as ar,Ir as as,jt as at,Sr as au,hr as av,Ur as aw,gr as ax,lt as ay,br as az,zt as b,z as c,lr as d,Nr as e,d as f,Wr as g,A as h,ur as i,Zr as j,o as k,At as l,Br as m,Xt as n,F as o,zr as p,W as q,qr as r,P as s,Kt as t,l as u,Ar as v,Rr as w,x,Hr as y,$r as z};