!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("functions",[],e):"object"==typeof exports?exports.functions=e():n.functions=e()}(window,function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}({0:function(n,e,t){window,n.exports=function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var r=function(){var n=[null,null,null],e=null,t=!1;function r(e,t){n[t]||(n[t]=[]),n[t].push(e)}function o(e,t){var r=n[t];r&&r.length>0&&(e(r),n[t]=null)}return{readAndExecute:function(i){return t=!0,function(e){for(var t=n.length,r=0;r<t;r++)o(e,r)}(i),t=!1,function(){var n=e?e.length:0;if(n>0)for(var t=0;t<n;t++){var o=e[t];r(o.func,o.level)}return e=null,0==n}()},reset:function(){t=!1,n=[null,null,null],e=[]},add:function(n,o){t?function(n,t){e||(e=[]),e.push({func:n,level:t})}(n,o):r(n,o)},isMemoryEmpty:function(){for(var e=n.length,t=0;t<e;t++){var r=n[t];if(r&&r.length>0)return!1}return!0}}}(),o=function(n){var e=0,t=0,o=100;function i(n){for(var e=0;e<n.length;e++){var t=n[e];t.call(t.this)}}function u(){++t<o?r.readAndExecute(i)?l():c():(console.warn("Animation frame loop executed to its set limit: ",o),l())}function c(){e=window?window.requestAnimationFrame(u):setTimeout(u)}function l(){t=0,r.reset(),window?window.cancelAnimationFrame(e):clearTimeout(e)}return function(n,e){r.isMemoryEmpty()&&c(),r.add(n,e)}}(),i=function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.progressCallback,this.doneCallback,this.errorCallback};function u(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function c(n){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function l(n){if(!n)throw new Error("Ticker: instance can't be null");if(!(n instanceof a)){var e=n.constructor?n.constructor.name:c(n);throw new Error("Ticker: Expecting instance of TickEntry got ".concat(e))}if(!n.func)throw new Error("Ticker: function can't be undefined")}i.prototype.onError=function(n){return this.errorCallback=n,this},i.prototype.onProgress=function(n){return this.progressCallback=n,this},i.prototype.onDone=function(n){return this.doneCallback=n,this};var a=function(){function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.context=t,this.func=e,this.priority=r,this.executionCount=0,this.notifier=new i,l(this)}var e,t;return e=n,(t=[{key:"onDone",value:function(n){return this.notifier.doneCallback=n,this.notifier}},{key:"onError",value:function(n){return this.notifier.errorCallback=n,this.notifier}},{key:"dispose",value:function(){this.context=null,this.func=null,this.priority=null,this.executionCount=NaN,this.notifier=null}},{key:"executeInCycle",value:function(){l(this);var n=this,e=n.func,t=n.context,r=n.priority;return o(function(){var r=n.notifier,o=r.doneCallback,i=r.errorCallback;try{var u=e.call(t);n.executionCount++,o&&o(u)}catch(e){i&&i(e),n.dispose()}},r),this.notifier.onProgress=void 0,this.notifier}},{key:"executeAsSmallLoopsInCycle",value:function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(void 0===n||"number"!=typeof n)throw new Error("Maximum Loop Per Frame has to be a number");if(void 0===e||"number"!=typeof e)throw new Error("End Index has to be a number");if("number"!=typeof t)throw new Error("Start Index has to be a number");l(this);var r=this,i=r.func,u=r.context,c=r.priority,a=n,f=t;return o(function t(){for(var l,s=r.notifier,h=s.doneCallback,d=s.errorCallback,v=s.progressCallback;f<a;f++)try{l=i.call(u,f)}catch(n){return d&&d(n),void r.dispose()}a<e?(a+=n,v&&v(f,l),o(t,c)):f===e&&(r.executionCount++,h&&h(l))},c),this.notifier}}])&&u(e.prototype,t),n}();a.HIGH=0,a.NORMAL=1,a.LOW=2,a.allowedTickCount=100,e.default=a}])},5:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r);function i(n,e,t,r){!function i(){if(n()){var u=e();t&&t(u)}else{var c=new o.a(i,null,2);r&&c.onError(r),c.executeInCycle()}}()}function u(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=[],r=0;return n.forEach(function(n,o){n.func?(e&&(r+=1),n.func.apply(n.context||n.func.this)):t.push(o)}),c(t,n),r}function c(n,e){"number"==typeof n?e.splice(n,1):n.forEach(function(n){e.splice(n,1)})}function l(n,e,t){return t?n[e].context:n[e]}function a(n,e,t,r){for(var o=0;o<t.length;o++){var i=l(t,o,r);if(i&&i.func&&i.func===n&&i.context===e)return t[o].dispose(),void c(o,t)}}var f=function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.context=t,this.func=e};function s(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}f.prototype.dispose=function(){this.context instanceof o.a&&this.context.dispose(),this.context=null,this.func=null};var h=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._entries=[],this._tickerEntries=[],this.remainingEntries=0,this.connector=e,this._enableConnector=!0}var e,t,r;return e=n,(t=[{key:"executeWhenIdle",value:function(n,e,t){var r=this;t||(t=function(n){return console.log(n)}),i(function(){if(r.remainingEntries<0)throw new Error("There can't be negative entries");return 0===r.remainingEntries},n,e,t)}},{key:"trigger",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this;this.executeWhenIdle(function(){var n=e._entries,t=e._tickerEntries;e.shouldExecuteFunctions()&&(e.functionsWillExecute(),n.length>0&&u(n),t.length>0&&(e.remainingEntries=u(t,!0)))},function t(){0===e.remainingEntries?(n&&n(),e.functionsDidExecute()):e.executeWhenIdle(t)})}},{key:"addFunction",value:function(n){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.executeWhenIdle(function(){var l=new f(n,t,i);r?(l=function(n,e,t,r,i){var u=new o.a(n,e,t);return u.onDone(function(){i.remainingEntries=i.remainingEntries-1}).onError(r),new f(u.executeInCycle,u)}(n,t,i,c,e),e._tickerEntries.push(l)):(l=new f(n,t),e._entries.push(l)),u&&u(l)})}},{key:"removeFunction",value:function(n){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.executeWhenIdle(function(){var o=e._tickerEntries,i=e._entries;a(n,t,i),a(n,t,o,!0),r&&r()})}},{key:"functionsWillExecute",value:function(){}},{key:"shouldExecuteFunctions",value:function(){return!0}},{key:"functionsDidExecute",value:function(){this._enableConnector&&this.connector&&this.connector()}},{key:"setConnector",value:function(n){var e=this;this.executeWhenIdle(function(){e.connector=n})}},{key:"removeConnector",value:function(){var n=this;this.executeWhenIdle(function(){n.connector=null})}},{key:"linkConnector",value:function(){var n=this;this.executeWhenIdle(function(){n._enableConnector=!0})}},{key:"unLinkConnector",value:function(){var n=this;this.executeWhenIdle(function(){n._enableConnector=!1})}}])&&s(e.prototype,t),r&&s(e,r),n}();t.d(e,"default",function(){return h}),t.d(e,"executeInSyncOrAsync",function(){return i})}})});