/**
 * @license
 * Copyright (c) 2022 Rahmat Agung Julians. All rights reserved.
 */
function diff(t,e,r){void 0===r&&(r=[]);let i=[];const p=Array.isArray(t),u=u=>{let a=t[u],f=p?+u:u;if(!(u in e))return i.push({type:"REMOVE",path:[f],oldValue:t[u]});let n=e[u],o="object"==typeof a&&"object"==typeof n;if(a!==n&&(!o||(isNaN(a)?a+""!=n+"":+a!=+n)))return i.push({path:[f],type:"CHANGE",value:n,oldValue:a});if(a&&n&&o&&!r.includes(a)){const t=diff(a,n,[]);return i.push.apply(i,t.map(t=>(t.path.unshift(f),t)))}};for(let e in t)u(e);const a=Array.isArray(e);for(let r in e)r in t||i.push({type:"CREATE",path:[a?+r:r],value:e[r]});return i}module.exports=diff;