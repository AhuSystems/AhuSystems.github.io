import{S as I,o as S,e as T,g as q,h as _,U as u,i as P,j as A,k as E,l as K,m as L,q as M,u as U,v as B,w as Y}from"./runtime.CO8kbWjU.js";import{c as y,d as g}from"./disclose-version.ehenhU4p.js";function w(r,v=null,b){if(typeof r!="object"||r===null||I in r)return r;const N=K(r);if(N!==S&&N!==T)return r;var i=new Map,d=L(r),O=y(0);d&&i.set("length",y(r.length));var c;return new Proxy(r,{defineProperty(s,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&q();var f=i.get(e);return f===void 0?(f=y(t.value),i.set(e,f)):g(f,w(t.value,c)),!0},deleteProperty(s,e){var t=i.get(e);if(t===void 0)e in s&&i.set(e,y(u));else{if(d&&typeof e=="string"){var f=i.get("length"),n=Number(e);Number.isInteger(n)&&n<f.v&&g(f,n)}g(t,u),k(O)}return!0},get(s,e,t){var l;if(e===I)return r;var f=i.get(e),n=e in s;if(f===void 0&&(!n||(l=_(s,e))!=null&&l.writable)&&(f=y(w(n?s[e]:u,c)),i.set(e,f)),f!==void 0){var a=P(f);return a===u?void 0:a}return Reflect.get(s,e,t)},getOwnPropertyDescriptor(s,e){var t=Reflect.getOwnPropertyDescriptor(s,e);if(t&&"value"in t){var f=i.get(e);f&&(t.value=P(f))}else if(t===void 0){var n=i.get(e),a=n==null?void 0:n.v;if(n!==void 0&&a!==u)return{enumerable:!0,configurable:!0,value:a,writable:!0}}return t},has(s,e){var a;if(e===I)return!0;var t=i.get(e),f=t!==void 0&&t.v!==u||Reflect.has(s,e);if(t!==void 0||A!==null&&(!f||(a=_(s,e))!=null&&a.writable)){t===void 0&&(t=y(f?w(s[e],c):u),i.set(e,t));var n=P(t);if(n===u)return!1}return f},set(s,e,t,f){var j;var n=i.get(e),a=e in s;if(d&&e==="length")for(var l=t;l<n.v;l+=1){var h=i.get(l+"");h!==void 0?g(h,u):l in s&&(h=y(u),i.set(l+"",h))}n===void 0?(!a||(j=_(s,e))!=null&&j.writable)&&(n=y(void 0),g(n,w(t,c)),i.set(e,n)):(a=n.v!==u,g(n,w(t,c)));var x=Reflect.getOwnPropertyDescriptor(s,e);if(x!=null&&x.set&&x.set.call(f,t),!a){if(d&&typeof e=="string"){var D=i.get("length"),R=Number(e);Number.isInteger(R)&&R>=D.v&&g(D,R+1)}k(O)}return!0},ownKeys(s){P(O);var e=Reflect.ownKeys(s).filter(n=>{var a=i.get(n);return a===void 0||a.v!==u});for(var[t,f]of i)f.v!==u&&!(t in s)&&e.push(t);return e},setPrototypeOf(){E()}})}function k(r,v=1){g(r,r.v+v)}function m(r,v){return r===v||(r==null?void 0:r[I])===v}function z(r={},v,b,N){return M(()=>{var i,d;return U(()=>{i=d,d=[],B(()=>{r!==b(...d)&&(v(r,...d),i&&m(b(...i),r)&&v(null,...i))})}),()=>{Y(()=>{d&&m(b(...d),r)&&v(null,...d)})}}),r}export{z as b,w as p};
