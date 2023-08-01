(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const ae=(e,t)=>e===t,fe=Symbol("solid-track"),R={equals:ae};let ee=le;const I=1,U=2,te={owned:null,cleanups:null,context:null,owner:null};var b=null;let X=null,p=null,y=null,E=null,H=0;function D(e,t){const n=p,s=b,i=e.length===0,l=i?te:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},o=i?e:()=>e(()=>T(()=>V(l)));b=l,p=null;try{return O(o,!0)}finally{p=n,b=s}}function q(e,t){t=t?Object.assign({},R,t):R;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),ie(n,i));return[se.bind(n),s]}function k(e,t,n){const s=K(e,t,!1,I);j(s)}function ne(e,t,n){ee=ge;const s=K(e,t,!1,I);(!n||!n.render)&&(s.user=!0),E?E.push(s):j(s)}function J(e,t,n){n=n?Object.assign({},R,n):R;const s=K(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,j(s),se.bind(s)}function T(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function ue(e){ne(()=>T(e))}function de(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function se(){if(this.sources&&this.state)if(this.state===I)j(this);else{const e=y;y=null,O(()=>F(this),!1),y=e}if(p){const e=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(e)):(p.sources=[this],p.sourceSlots=[e]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function ie(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&O(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],o=X&&X.running;o&&X.disposed.has(l),(o?!l.tState:!l.state)&&(l.pure?y.push(l):E.push(l),l.observers&&re(l)),o||(l.state=I)}if(y.length>1e6)throw y=[],new Error},!1)),t}function j(e){if(!e.fn)return;V(e);const t=b,n=p,s=H;p=b=e,he(e,e.value,s),p=n,b=t}function he(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=I,e.owned&&e.owned.forEach(V),e.owned=null),e.updatedAt=n+1,oe(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ie(e,s):e.value=s,e.updatedAt=n)}function K(e,t,n,s=I,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:n};return b===null||b!==te&&(b.owned?b.owned.push(l):b.owned=[l]),l}function W(e){if(e.state===0)return;if(e.state===U)return F(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<H);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===I)j(e);else if(e.state===U){const s=y;y=null,O(()=>F(e,t[0]),!1),y=s}}function O(e,t){if(y)return e();let n=!1;t||(y=[]),E?n=!0:E=[],H++;try{const s=e();return pe(n),s}catch(s){n||(E=null),y=null,oe(s)}}function pe(e){if(y&&(le(y),y=null),e)return;const t=E;E=null,t.length&&O(()=>ee(t),!1)}function le(e){for(let t=0;t<e.length;t++)W(e[t])}function ge(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:W(s)}for(t=0;t<n;t++)W(e[t])}function F(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===I?s!==t&&(!s.updatedAt||s.updatedAt<H)&&W(s):i===U&&F(s,t)}}}function re(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=U,n.pure?y.push(n):E.push(n),n.observers&&re(n))}}function V(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),o=n.observerSlots.pop();s<i.length&&(l.sourceSlots[o]=s,i[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)V(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function oe(e){throw e}const me=Symbol("fallback");function z(e){for(let t=0;t<e.length;t++)e[t]()}function be(e,t,n={}){let s=[],i=[],l=[],o=0,r=t.length>1?[]:null;return de(()=>z(l)),()=>{let a=e()||[],f,c;return a[fe],T(()=>{let u=a.length,$,d,m,x,M,S,A,C,L;if(u===0)o!==0&&(z(l),l=[],s=[],i=[],o=0,r&&(r=[])),n.fallback&&(s=[me],i[0]=D(ce=>(l[0]=ce,n.fallback())),o=1);else if(o===0){for(i=new Array(u),c=0;c<u;c++)s[c]=a[c],i[c]=D(h);o=u}else{for(m=new Array(u),x=new Array(u),r&&(M=new Array(u)),S=0,A=Math.min(o,u);S<A&&s[S]===a[S];S++);for(A=o-1,C=u-1;A>=S&&C>=S&&s[A]===a[C];A--,C--)m[C]=i[A],x[C]=l[A],r&&(M[C]=r[A]);for($=new Map,d=new Array(C+1),c=C;c>=S;c--)L=a[c],f=$.get(L),d[c]=f===void 0?-1:f,$.set(L,c);for(f=S;f<=A;f++)L=s[f],c=$.get(L),c!==void 0&&c!==-1?(m[c]=i[f],x[c]=l[f],r&&(M[c]=r[f]),c=d[c],$.set(L,c)):l[f]();for(c=S;c<u;c++)c in m?(i[c]=m[c],l[c]=x[c],r&&(r[c]=M[c],r[c](c))):i[c]=D(h);i=i.slice(0,o=u),s=a.slice(0)}return i});function h(u){if(l[c]=u,r){const[$,d]=q(c);return r[c]=d,t(a[c],$)}return t(a[c])}}}function v(e,t){return T(()=>e(t||{}))}const ye=e=>`Stale read from <${e}>.`;function B(e){const t="fallback"in e&&{fallback:()=>e.fallback};return J(be(()=>e.each,e.children,t||void 0))}function we(e){const t=e.keyed,n=J(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return J(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?T(()=>i(t?s:()=>{if(!T(n))throw ye("Show");return e.when})):i}return e.fallback},void 0,void 0)}function $e(e,t,n){let s=n.length,i=t.length,l=s,o=0,r=0,a=t[i-1].nextSibling,f=null;for(;o<i||r<l;){if(t[o]===n[r]){o++,r++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===o){const c=l<s?r?n[r-1].nextSibling:n[l-r]:a;for(;r<l;)e.insertBefore(n[r++],c)}else if(l===r)for(;o<i;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[r]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--l],c),t[i]=n[l]}else{if(!f){f=new Map;let h=r;for(;h<l;)f.set(n[h],h++)}const c=f.get(t[o]);if(c!=null)if(r<c&&c<l){let h=o,u=1,$;for(;++h<i&&h<l&&!(($=f.get(t[h]))==null||$!==c+u);)u++;if(u>c-r){const d=t[o];for(;r<c;)e.insertBefore(n[r++],d)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const Q="_$DX_DELEGATE";function xe(e,t,n,s={}){let i;return D(l=>{i=l,t===document?e():g(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function w(e,t,n){let s;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},l=t?()=>T(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function ve(e,t=window.document){const n=t[Q]||(t[Q]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,Ae))}}function _(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function _e(e,t){t==null?e.removeAttribute("class"):e.className=t}function Se(e,t,n){if(!t)return n?_(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,l;for(l in n)t[l]==null&&s.removeProperty(l),delete n[l];for(l in t)i=t[l],i!==n[l]&&(s.setProperty(l,i),n[l]=i);return n}function N(e,t,n){return T(()=>e(t,n))}function g(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return G(e,t,s,n);k(i=>G(e,t(),i,n),s)}function Ae(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function G(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=P(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=P(e,n,s);else{if(l==="function")return k(()=>{let r=t();for(;typeof r=="function";)r=r();n=G(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],a=n&&Array.isArray(n);if(Y(r,t,n,i))return k(()=>n=G(e,r,n,s,!0)),()=>n;if(r.length===0){if(n=P(e,n,s),o)return n}else a?n.length===0?Z(e,r,s):$e(e,n,r):(n&&P(e),Z(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=P(e,n,s,t);P(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Y(e,t,n,s){let i=!1;for(let l=0,o=t.length;l<o;l++){let r=t[l],a=n&&n[l],f;if(!(r==null||r===!0||r===!1))if((f=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))i=Y(e,r,a)||i;else if(f==="function")if(s){for(;typeof r=="function";)r=r();i=Y(e,Array.isArray(r)?r:[r],Array.isArray(a)?a:[a])||i}else e.push(r),i=!0;else{const c=String(r);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return i}function Z(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function P(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const a=r.parentNode===e;!l&&!o?a?e.replaceChild(i,r):e.insertBefore(i,n):a&&r.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const Ce=w('<header class="h-screen p-4 font-bold flex items-end"><hgroup><h1 class="text-3xl w-min translate-x-[calc(-100%-1rem)] transition-transform duration-[2000ms]">Nicholas&nbsp;Epps<div class="w-full h-0.5 bg-gunmetal my-2 md:my-3 origin-right scale-x-0 transition-transform duration-[2000ms]"></div></h1><p class="text-xl translate-x-[calc(-100%-1rem)] transition-transform duration-[2000ms] delay-500">Computer &amp; Information Science</p><p class="text-xl translate-x-[calc(-100%-1rem)] transition-transform duration-[2000ms] delay-1000">Music Minor'),Ee=()=>{const e=[];let t;return setTimeout(()=>e.forEach(n=>n.style.transform="translateX(0)"),200),(()=>{const n=Ce(),s=n.firstChild,i=s.firstChild,l=i.firstChild,o=l.nextSibling,r=i.nextSibling,a=r.nextSibling,f=e[0];typeof f=="function"?N(f,i):e[0]=i;const c=t;typeof c=="function"?N(c,o):t=o;const h=e[1];typeof h=="function"?N(h,r):e[1]=r,a.addEventListener("transitionend",()=>t?.classList?.add("scale-x-100"));const u=e[2];return typeof u=="function"?N(u,a):e[2]=a,n})()},Te="/assets/eleanorMund-85135800.png",ke="/assets/whereTheBoysAt-fe714fe0.png",Ie="/assets/forcastr-8d15c0d5.png",Me=[{imageSrc:Te,imageAlt:"Eleanor Mund homepage",title:"Portfolio Project - Eleanor Mund",description:"This website was for a group project in my web development class at Messiah University. We decided to make a portfolio website for one of our team members, Eleanor Mund, a theater major. We had lots of fun and learned a lot about creating and implementing a design in a team setting. The site was built using HTML, CSS and JavaScript.",links:[{href:"https://replit.com/@eleanorgmund/Portfolio",text:"Replit page"},{href:"https://portfolio.eleanorgmund.repl.co/",text:"live site"}]},{imageSrc:ke,imageAlt:"whereTheBoysAt website game",title:"Where The Boys At?",description:"This site was inspired by the popular puzzle books, Where's Waldo. Users are given 3 random characters to search for in a mirage of familiar internet meme characters. When finished, the user has the option to submit their name and time into a database where it is displayed on a scoreboard. This website was built using Solid.js, TailWindCSS, and Supabase.",links:[{href:"https://github.com/nickslick03/WhereTheBoysAt",text:"Github"},{href:"https://wheretheboysat.netlify.app/#/",text:"live site"}]},{imageSrc:Ie,imageAlt:"forcastr homepage",title:"ForcastR",description:"This site pulls from the openWeatherMap and IPInfo APIs to create a curated weather report for the user. A search function is included to show weather reports in different locations. The site was built using HTML, CSS and JavaScript.",links:[{href:"https://github.com/nickslick03/forcastR",text:"Github"},{href:"https://nickslick03.github.io/forcastR/",text:"live site"}]}],Le=w('<article class="lg:flex"><div class="lg:w-1/2 lg:shrink-0 lg:flex lg:items-start lg:justify-center"><img loading="lazy" class="block shadow-lg shadow-[rgba(0,0,0,0.4)] w-full"></div><div class="lg:mr-8 lg:-order-1"><h2 class="text-2xl font-bold mt-8 mb-4 lg:mt-0"></h2><p class="mb-4">'),Pe=w('<a class="block underline hover:text-tiffanyBlue lg:inline lg:mr-4">'),Ne=w('<div class="flex flex-col gap-16 lg:gap-32 py-8">'),Be=({project:e})=>(()=>{const t=Le(),n=t.firstChild,s=n.firstChild,i=n.nextSibling,l=i.firstChild,o=l.nextSibling;return g(l,()=>e.title),g(o,()=>e.description),g(i,v(B,{get each(){return e.links},children:r=>(()=>{const a=Pe();return g(a,()=>r.text),k(()=>_(a,"href",r.href)),a})()}),null),k(r=>{const a=e.imageSrc,f=e.imageAlt;return a!==r._v$&&_(s,"src",r._v$=a),f!==r._v$2&&_(s,"alt",r._v$2=f),r},{_v$:void 0,_v$2:void 0}),t})(),je=()=>(()=>{const e=Ne();return g(e,v(B,{each:Me,children:t=>v(Be,{project:t})})),e})(),Oe=w("<div><p>I am an artist; the blank HTML page is my canvas. My passion is creating tools and applications that provide a meaningful service to others, all with an aesthetic interface. While I am independently driven, I find working in a team both an essential and gratifying experience. The leadership positions I've held on the road to Eagle Scout and experience as an Resident Assistant at Messiah University have given me the skills and insights to work in a team setting.</p><br><p>I am currently a student at Messiah University, majoring in Computer Science with a concentration in web development and a minor in music."),De=()=>Oe(),Re="/assets/resume-a400725d.pdf",Ue=w('<div class="flex justify-center"><object type="application/pdf" class="w-8/12 aspect-[16/21]">'),We=()=>(()=>{const e=Ue(),t=e.firstChild;return _(t,"data",Re),e})(),Fe=w('<div class="fixed top-0 w-full pt-4 md:pt-6 flex flex-col items-center"><button class="w-6 h-6 aspect-square opacity-0 transition-opacity duration-1000"><svg width="24" height="24"></svg></button><nav class="absolute top-0 w-full pt-4 md:pt-6 pb-12 bg-gradient-to-b from-gunmetal to-transparent transition-transform duration-1000"><ul class="text-tiffanyBlue flex flex-col items-center gap-8 text-xl"><li class="w-7 h-7 bg-slate-700 bg-opacity-40 rounded-full select-none flex justify-center items-center cursor-pointer"><button><svg width="12" height="12"><line x1="0" y1="0" x2="12" y2="12" stroke="#ADEBE9" stroke-width="2"></line><line x1="0" y1="12" x2="12" y2="0" stroke="#ADEBE9" stroke-width="2">'),Ge=w('<svg><rect width="100%" height="2"></svg>',!1,!0),He=w('<li class="select-none cursor-pointer"><button>'),Ve=e=>{const[t,n]=q(!1),[s,i]=q(!1);document.addEventListener("scroll",()=>n(!0),{once:!0});const l=()=>{i(!1),document.removeEventListener("scroll",l)};ne(()=>{s()&&document.addEventListener("scroll",l)});const o=r=>{document.getElementById(r)?.scrollIntoView({behavior:"smooth"}),i(!1)};return(()=>{const r=Fe(),a=r.firstChild,f=a.firstChild,c=a.nextSibling,h=c.firstChild,u=h.firstChild,$=u.firstChild;return a.$$click=()=>i(!0),g(f,v(B,{each:[0,11,22],children:d=>(()=>{const m=Ge();return _(m,"y",d),m})()})),g(h,v(B,{get each(){return e.elementIDs},children:d=>(()=>{const m=He(),x=m.firstChild;return m.$$click=()=>o(d),g(x,d),k(()=>_(x,"tabindex",s()?0:-1)),m})()}),u),u.$$click=()=>i(!1),k(d=>{const m="filter: drop-shadow(2px 4px 6px black); "+(t()&&!s()?"opacity: 1":""),x=`translateY(${s()?"0":"-100"}%)`,M=s()?0:-1;return d._v$=Se(a,m,d._v$),x!==d._v$2&&((d._v$2=x)!=null?c.style.setProperty("transform",x):c.style.removeProperty("transform")),M!==d._v$3&&_($,"tabindex",d._v$3=M),d},{_v$:void 0,_v$2:void 0,_v$3:void 0}),r})()};ve(["click"]);const Xe=w('<div class="h-screen flex flex-col justify-center items-center gap-10"><h2 class="text-2xl font-bold">Get in Touch.</h2><ul class="flex gap-8 items-center">'),qe=w('<li><a><img class="w-20 transition-transform duration-200 hover:scale-110">'),Je=[{href:"mailto:ne1180@messiah.edu",src:"https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/439/aiga_mail-512.png",alt:"mail"},{href:"https://github.com/nickslick03",src:"https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",alt:"Github"},{href:"https://www.youtube.com/channel/UC1NJcOgEFw5GwjjMpVl9biA",src:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",alt:"Youtube"}],Ye=()=>(()=>{const e=Xe(),t=e.firstChild,n=t.nextSibling;return g(n,v(B,{each:Je,children:s=>(()=>{const i=qe(),l=i.firstChild,o=l.firstChild;return k(r=>{const a=s.href,f=s.src,c=s.alt;return a!==r._v$&&_(l,"href",r._v$=a),f!==r._v$2&&_(o,"src",r._v$2=f),c!==r._v$3&&_(o,"alt",r._v$3=c),r},{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})()})),e})(),Ke=w('<main class="flex flex-col">'),ze=w('<h2 class="w-min text-2xl font-bold first-letter:capitalize"><div class="w-full h-0.5 mb-8 bg-gunmetal origin-left transition-transform duration-[2000ms]" style="transform:scaleX(0)">'),Qe=w('<section><div class="max-w-4xl mx-auto">'),Ze=()=>{const e=[{id:"about",hasTitle:!0,background:!0,Element:De},{id:"projects",hasTitle:!0,background:!1,Element:je},{id:"resume",hasTitle:!0,background:!0,Element:We},{id:"contact",hasTitle:!1,background:!1,Element:Ye}],t=()=>new IntersectionObserver(l=>{if(!l[0].isIntersecting)return;const o=n.indexOf(l[0].target);i===o||!s[o]||(i!==void 0&&(s[i].style.transform="scaleX(0)"),s[o].style.transform="scaleX(1)",console.log(s[o]),i=o)},{rootMargin:"-15% 0px -80% 0px"}),n=[],s=[];let i;return ue(()=>{n.forEach(l=>{t().observe(l)})}),(()=>{const l=Ke();return g(l,v(Ve,{get elementIDs(){return e.map(({id:o})=>o)}}),null),g(l,v(B,{each:e,children:({id:o,hasTitle:r,background:a,Element:f},c)=>(()=>{const h=Qe(),u=h.firstChild,$=n[c()];return typeof $=="function"?N($,h):n[c()]=h,_e(h,(r?"px-4 py-8 ":"")+(a?"bg-slate-700 bg-opacity-40 shadow-section":"")),_(h,"id",o),g(u,v(we,{when:r,get children(){const d=ze(),m=d.firstChild;g(d,o,m);const x=s[c()];return typeof x=="function"?N(x,m):s[c()]=m,d}}),null),g(u,v(f,{}),null),h})()}),null),l})()},et=w('<footer class="bg-slate-700 bg-opacity-40 shadow-inset text-center"><div class="py-6">© <!> Nicholas Epps'),tt=()=>{const e=new Date().getFullYear();return(()=>{const t=et(),n=t.firstChild,s=n.firstChild,i=s.nextSibling;return i.nextSibling,g(n,e,i),t})()},nt=w('<div class="font-Montserrat text-gunmetal bg-graident-three bg-fixed">'),st=()=>(()=>{const e=nt();return g(e,v(Ee,{}),null),g(e,v(Ze,{}),null),g(e,v(tt,{}),null),e})(),it=document.getElementById("root");xe(()=>v(st,{}),it);
