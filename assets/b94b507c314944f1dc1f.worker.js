!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/",r(r.s=3)}([function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,r){var n=r(7),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},function(e,t,r){var n=r(1).Symbol;e.exports=n},function(e,t,r){"use strict";var n=c(r(4)),o=c(r(5)),i=c(r(15)),u=r(16),a=c(r(18));function c(e){return e&&e.__esModule?e:{default:e}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=new Map,s=new Map,p=new Set;var d=(0,o.default)((function(){0!==p.size&&(p.forEach((function(e){var t=s.get(e);t&&y(e,t)})),p.clear())}),100,{leading:!0,trailing:!0});function v(e,t){return e*(t||1)}function y(e,t){var r=t.query,o=t.limit,c=t.filters,f=t.blacklist,s=t.whitelist,p=null!=c&&c.strict&&c.guild||null,d=t.boosters||{},y=new RegExp("^"+i.default.escape(r),"i"),g=new RegExp(i.default.escape(r),"i"),m=[];if(""===r)return b(r,m,e);var h=r.toLocaleLowerCase();l.forEach((function(e,t){if(function(e,t,r,n,o){if(null!=n&&n.indexOf(e)>=0)return!1;if(null!=o&&o.indexOf(e)>=0)return!0;if(null!=r){var i=r.friends,u=r.guild;return!0===i&&!0===t.isFriend||null!=u&&(null!=t[u]||null===t[u])}return!0}(t,e,c,f,s)){var r,o=e.username;Object.keys(e).forEach((function(i){var a,c=e[i];"boolean"==typeof c||null==c||null!=p&&"username"!==i&&"friendNickname"!==i&&p!==i||(y.test(c)?a={comparator:c,score:v(10,d[t])}:g.test(c)?a={comparator:c,score:v(5,d[t])}:(0,n.default)(h,(0,u.stripDiacritics)(c.toLocaleLowerCase()))&&(a={comparator:c,score:v(1,d[t])}),a&&((null==r||r.score<a.score)&&(r=a),r.id=t,r.username=o))})),null!=r&&m.push(r)}})),m.sort(a.default),m.length>o&&(m.length=o),b(r,m,e)}function b(e,t,r){var n={type:"USER_RESULTS",uuid:r,payload:{query:e,results:t}};self.postMessage(n)}self.addEventListener("message",(function(e){var t,r,n,o=e.data;if(null==o||null==o.type)throw new Error("Invalid data");switch(o.type){case"UPDATE_USERS":return function(e){var t=e.payload,r=!1,n=new Set;t.forEach((function(e){var t=e.id,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["id"]),i=l.get(t)||null,u=f({},i,{},o);l.set(t,u),s.size>0&&(u.isFriend===(null==i?void 0:i.isFriend)&&u.friendNickname===(null==i?void 0:i.friendNickname)||(r=!0),Object.keys(u).forEach((function(e){"isBot"!==e&&"isFriend"!==e&&"username"!==e&&"friendNickname"!==e&&n.add(e)})))})),s.forEach((function(e,t){var o=e.filters;(null==o||o.friends===r||n.has(o.guild))&&p.add(t)})),d()}(o);case"QUERY_SET":return r=(t=o).uuid,n=t.payload,s.set(r,n),void y(r,n);case"QUERY_CLEAR":return function(e){var t=e.uuid;s.delete(t),p.delete(t),0===p.size&&d.cancel()}(o)}}))},function(e,t,r){"use strict";e.exports=function(e,t){var r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var o=0,i=0;o<n;o++){for(var u=e.charCodeAt(o);i<r;)if(t.charCodeAt(i++)===u)continue e;return!1}return!0}},function(e,t,r){var n=r(0),o=r(6),i=r(9),u=Math.max,a=Math.min;e.exports=function(e,t,r){var c,f,l,s,p,d,v=0,y=!1,b=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=c,n=f;return c=f=void 0,v=t,s=e.apply(n,r)}function h(e){return v=e,p=setTimeout(O,t),y?m(e):s}function j(e){var r=e-d;return void 0===d||r>=t||r<0||b&&e-v>=l}function O(){var e=o();if(j(e))return x(e);p=setTimeout(O,function(e){var r=t-(e-d);return b?a(r,l-(e-v)):r}(e))}function x(e){return p=void 0,g&&c?m(e):(c=f=void 0,s)}function w(){var e=o(),r=j(e);if(c=arguments,f=this,d=e,r){if(void 0===p)return h(d);if(b)return clearTimeout(p),p=setTimeout(O,t),m(d)}return void 0===p&&(p=setTimeout(O,t)),s}return t=i(t)||0,n(r)&&(y=!!r.leading,l=(b="maxWait"in r)?u(i(r.maxWait)||0,t):l,g="trailing"in r?!!r.trailing:g),w.cancel=function(){void 0!==p&&clearTimeout(p),v=0,c=d=f=p=void 0},w.flush=function(){return void 0===p?s:x(o())},w}},function(e,t,r){var n=r(1);e.exports=function(){return n.Date.now()}},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(8))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(0),o=r(10),i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=a.test(e);return r||c.test(e)?f(e.slice(2),r?2:8):u.test(e)?NaN:+e}},function(e,t,r){var n=r(11),o=r(14);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},function(e,t,r){var n=r(2),o=r(12),i=r(13),u=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?o(e):i(e)}},function(e,t,r){var n=r(2),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(e){}var o=u.call(e);return n&&(t?e[a]=r:delete e[a]),o}},function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={escape:function(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"upperCaseFirstChar",{enumerable:!0,get:function(){return n.upperCaseFirstChar}}),Object.defineProperty(t,"getAcronym",{enumerable:!0,get:function(){return n.getAcronym}}),Object.defineProperty(t,"cssValueToNumber",{enumerable:!0,get:function(){return n.cssValueToNumber}}),Object.defineProperty(t,"stripDiacritics",{enumerable:!0,get:function(){return n.stripDiacritics}});var n=r(17)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.upperCaseFirstChar=function(e){return null==e?"":""+e.charAt(0).toUpperCase()+e.slice(1)},t.getAcronym=function(e){return null!=e?e.replace(/'s /g," ").replace(/\w+/g,(function(e){return e[0]})).replace(/\s/g,""):""},t.cssValueToNumber=function(e){var t=parseInt(e,10);return isNaN(t)?0:t},t.stripDiacritics=void 0;var n=/[\u0300-\u036f]/g,o=null==String.prototype.normalize?function(e){return e}:function(e){return e.normalize("NFD").replace(n,"").normalize("NFC")};t.stripDiacritics=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.score===t.score){var r=(e.comparator||"").toLocaleLowerCase(),n=(t.comparator||"").toLocaleLowerCase();if(r<n)return-1;if(r>n)return 1}return t.score-e.score}}]);