!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!O[e]||!g[e])return;for(var r in g[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(y[r]=n[r]);0==--b&&0===m&&E()}(e,r),n&&n(e,r)};var r,t=!0,o="93bbddac1c1495fde828",i=1e4,c={},d=[],a=[];function l(e){var n=x[e];if(!n)return H;var t=function(t){return n.hot.active?(x[t]?-1===x[t].parents.indexOf(e)&&x[t].parents.push(e):(d=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),H(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(n){H[e]=n}}};for(var i in H)Object.prototype.hasOwnProperty.call(H,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,o(i));return t.e=function(e){return"ready"===p&&f("prepare"),m++,H.e(e).then(n,function(e){throw n(),e});function n(){m--,"prepare"===p&&(w[e]||D(e),0===m&&0===b&&E())}},t.t=function(e,n){return 1&n&&(e=t(e)),H.t(e,-2&n)},t}function s(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:j,apply:P,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:c[e]};return r=void 0,n}var u=[],p="idle";function f(e){p=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var h,y,v,b=0,m=0,w={},g={},O={};function _(e){return+e+""===e?+e:e}function j(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return t=e,f("check"),(n=i,n=n||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=H.p+"hot/hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}})).then(function(e){if(!e)return f("idle"),null;g={},w={},O=e.c,v=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});y={};return D(0),"prepare"===p&&0===m&&0===b&&E(),n});var n}function D(e){var n;O[e]?(g[e]=!0,b++,(n=document.createElement("script")).charset="utf-8",n.src=H.p+"hot/hot-update.js",document.head.appendChild(n)):w[e]=!0}function E(){f("ready");var e=h;if(h=null,e)if(t)Promise.resolve().then(function(){return P(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&n.push(_(r));e.resolve(n)}}function P(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var r,t,i,a,l;function s(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,c=o.chain;if((a=x[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var l=a.parents[d],s=x[l];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===n.indexOf(l)&&(s.hot._acceptedDependencies[i]?(r[l]||(r[l]=[]),u(r[l],[i])):(delete r[l],n.push(l),t.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function u(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var h={},b=[],m={},w=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var j;l=_(g);var D=!1,E=!1,P=!1,I="";switch((j=y[g]?s(l):{type:"disposed",moduleId:g}).chain&&(I="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(D=new Error("Aborted because of self decline: "+j.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(D=new Error("Aborted because "+l+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(j),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),P=!0;break;default:throw new Error("Unexception type "+j.type)}if(D)return f("abort"),Promise.reject(D);if(E)for(l in m[l]=y[l],u(b,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,l)&&(h[l]||(h[l]=[]),u(h[l],j.outdatedDependencies[l]));P&&(u(b,[j.moduleId]),m[l]=w)}var S,k=[];for(t=0;t<b.length;t++)l=b[t],x[l]&&x[l].hot._selfAccepted&&k.push({module:l,errorHandler:x[l].hot._selfAccepted});f("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var A,M,q=b.slice();q.length>0;)if(l=q.pop(),a=x[l]){var T={},U=a.hot._disposeHandlers;for(i=0;i<U.length;i++)(r=U[i])(T);for(c[l]=T,a.hot.active=!1,delete x[l],delete h[l],i=0;i<a.children.length;i++){var C=x[a.children[i]];C&&((S=C.parents.indexOf(l))>=0&&C.parents.splice(S,1))}}for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(a=x[l]))for(M=h[l],i=0;i<M.length;i++)A=M[i],(S=a.children.indexOf(A))>=0&&a.children.splice(S,1);for(l in f("apply"),o=v,m)Object.prototype.hasOwnProperty.call(m,l)&&(e[l]=m[l]);var L=null;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(a=x[l])){M=h[l];var R=[];for(t=0;t<M.length;t++)if(A=M[t],r=a.hot._acceptedDependencies[A]){if(-1!==R.indexOf(r))continue;R.push(r)}for(t=0;t<R.length;t++){r=R[t];try{r(M)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:M[t],error:e}),n.ignoreErrored||L||(L=e)}}}for(t=0;t<k.length;t++){var N=k[t];l=N.module,d=[l];try{H(l)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:r,originalError:e}),n.ignoreErrored||L||(L=r),L||(L=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||L||(L=e)}}return L?(f("fail"),Promise.reject(L)):(f("idle"),new Promise(function(e){e(b)}))}var x={};function H(n){if(x[n])return x[n].exports;var r=x[n]={i:n,l:!1,exports:{},hot:s(n),parents:(a=d,d=[],a),children:[]};return e[n].call(r.exports,r,r.exports,l(n)),r.l=!0,r.exports}H.m=e,H.c=x,H.d=function(e,n,r){H.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,n){if(1&n&&(e=H(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(H.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)H.d(r,t,function(n){return e[n]}.bind(null,t));return r},H.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(n,"a",n),n},H.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},H.p="/resources/themes/sdlt/dist/img/",H.h=function(){return o},l(312)(H.s=312)}({312:function(e,n,r){"use strict";function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}r.r(n),function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,o;return n=e,o=[{key:"init",value:function(){window.addEventListener("load",function(e){var n=sessionStorage.getItem("SiteAlertClosed"),r=document.querySelector("#site-alert"),t=document.querySelector("body");"true"!==n&&(r.style.display="flex",t.style.paddingTop=r.offsetHeight+"px"),document.querySelector("#site-alert .close-icon").addEventListener("click",function(){sessionStorage.setItem("SiteAlertClosed","true"),r.style.display="none",t.style.paddingTop=0})})}}],(r=null)&&t(n.prototype,r),o&&t(n,o),e}().init()}});
//# sourceMappingURL=common.bundle.js.map