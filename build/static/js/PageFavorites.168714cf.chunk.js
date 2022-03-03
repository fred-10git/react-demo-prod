"use strict";(self.webpackChunk_02_projet_films=self.webpackChunk_02_projet_films||[]).push([[762],{1283:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r=t(2791),i=t(5671),u=t(3144),o=t(9340),a=t(5716),c="Favorite_container__4jKLa",f="Favorite_image__XRRBf",l=t(184),s=function(n){(0,o.Z)(t,n);var e=(0,a.Z)(t);function t(){return(0,i.Z)(this,t),e.apply(this,arguments)}return(0,u.Z)(t,[{key:"render",value:function(){var n=this.props.favorite;return(0,l.jsxs)("div",{className:"d-flex bg-light "+c,children:[(0,l.jsx)("div",{className:f,children:(0,l.jsx)("img",{src:n.img,alt:"poster-film"})}),(0,l.jsxs)("div",{className:"d-flex d-fill flex-column p-3",children:[(0,l.jsx)("h5",{children:n.title}),(0,l.jsx)("hr",{className:"w-100"}),(0,l.jsx)("p",{className:"flex-fill",children:n.details}),(0,l.jsx)("div",{className:"d-flex flex-row justify-content-end",children:(0,l.jsx)("button",{onClick:this.props.removeFavorite,className:"btn btn-small btn-danger",children:"Supprimer"})})]})]})}}]),t}(r.Component),p=function(n){(0,o.Z)(t,n);var e=(0,a.Z)(t);function t(){return(0,i.Z)(this,t),e.apply(this,arguments)}return(0,u.Z)(t,[{key:"render",value:function(){var n=this;return(0,l.jsx)("div",{className:"w-100 p-4 border d-flex flex-row flex-wrap justify-content-center align-content-start",children:this.props.favorites.map((function(e,t){return(0,l.jsx)(s,{favorite:e,removeFavorite:function(){return n.props.removeFavorite(e.id)}},e.id)}))})}}]),t}(r.Component),v=t(5291),d=t(6338),h=t(9673),m=(0,t(364).$j)((function(n){return{favorites:(0,d.tK)(n),isLoading:(0,d.lH)(n)}}),{tryRemoveFavorite:h.hr})((function(n){return(0,l.jsx)(l.Fragment,{children:n.isLoading?(0,l.jsx)(v.Z,{}):(0,l.jsx)("div",{className:"d-flex flex-row flex-fill pt-4 p-2",children:(0,l.jsx)(p,{favorites:n.favorites,removeFavorite:n.tryRemoveFavorite})})})}))},6338:function(n,e,t){t.d(e,{lH:function(){return s},wz:function(){return p},tK:function(){return l},Np:function(){return u},AA:function(){return o},Dd:function(){return c}});var r=t(6916),i=function(n){return n.movies},u=(0,r.P1)([i],(function(n){return n.isLoading})),o=(0,r.P1)([i],(function(n){return n.data})),a=(0,r.P1)([i],(function(n){return n.selectedMovie})),c=(0,r.P1)([o,a],(function(n,e){return n[e]})),f=function(n){return n.favorites},l=(0,r.P1)([f],(function(n){return n.data})),s=(0,r.P1)([f],(function(n){return n.isLoading})),p=(0,r.P1)([l],(function(n){return n.map((function(n){return n.id}))}))},6916:function(n,e,t){t.d(e,{P1:function(){return c}});var r="NOT_FOUND";var i=function(n,e){return n===e};function u(n,e){var t="object"===typeof e?e:{equalityCheck:e},u=t.equalityCheck,o=void 0===u?i:u,a=t.maxSize,c=void 0===a?1:a,f=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(o),s=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function i(n){var i=t.findIndex((function(t){return e(n,t.key)}));if(i>-1){var u=t[i];return i>0&&(t.splice(i,1),t.unshift(u)),u.value}return r}return{get:i,put:function(e,u){i(e)===r&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function p(){var e=s.get(arguments);if(e===r){if(e=n.apply(null,arguments),f){var t=s.getEntries(),i=t.find((function(n){return f(n.value,e)}));i&&(e=i.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function o(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function a(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var u,a=0,c={memoizeOptions:void 0},f=r.pop();if("object"===typeof f&&(c=f,f=r.pop()),"function"!==typeof f)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var l=c,s=l.memoizeOptions,p=void 0===s?t:s,v=Array.isArray(p)?p:[p],d=o(r),h=n.apply(void 0,[function(){return a++,f.apply(null,arguments)}].concat(v)),m=n((function(){for(var n=[],e=d.length,t=0;t<e;t++)n.push(d[t].apply(null,arguments));return u=h.apply(null,n)}));return Object.assign(m,{resultFunc:f,memoizedResultFunc:h,dependencies:d,lastResult:function(){return u},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return i}var c=a(u)}}]);
//# sourceMappingURL=PageFavorites.168714cf.chunk.js.map