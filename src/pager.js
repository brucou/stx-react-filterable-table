!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Pager=t(require("react")):e.Pager=t(e.react)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function o(){y&&d&&(y=!1,d.length?h=d.concat(h):v=-1,h.length&&u())}function u(){if(!y){var e=a(o);y=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,y=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function l(){}var c,f,p=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],y=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||y||a(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return function(){return e}}var a=function(){};a.thatReturns=r,a.thatReturnsFalse=r(!1),a.thatReturnsTrue=r(!0),a.thatReturnsNull=r(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},function(e,t,n){"use strict";(function(t){function n(e,t,n,a,i,o,u,s){if(r(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,a,i,o,u,s],f=0;l=new Error(t.replace(/%s/g,function(){return c[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";(function(t){var r=n(1),a=r;"production"!==t.env.NODE_ENV&&function(){var e=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=0,i="Warning: "+e.replace(/%s/g,function(){return n[a++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};a=function(t,n){if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==n.indexOf("Failed Composite propType: ")&&!t){for(var r=arguments.length,a=Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];e.apply(void 0,[n].concat(a))}}}(),e.exports=a}).call(t,n(0))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){for(var n=[],r=e;r<t;r++)n.push(r);return n}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(6),c=r(l),f=n(7),p=r(f),d={first:"First",prev:"«",prevSet:"...",nextSet:"...",next:"»",last:"Last"},h=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleFirstPage=n.handleFirstPage.bind(n),n.handlePreviousPage=n.handlePreviousPage.bind(n),n.handleNextPage=n.handleNextPage.bind(n),n.handleLastPage=n.handleLastPage.bind(n),n.handleMorePrevPages=n.handleMorePrevPages.bind(n),n.handleMoreNextPages=n.handleMoreNextPages.bind(n),n.handlePageChanged=n.handlePageChanged.bind(n),n}return o(t,e),s(t,[{key:"getTitles",value:function(e){return this.props.titles[e]||d[e]}},{key:"calcBlocks",value:function(){var e=this.props,t=e.total,n=e.visiblePages,r=e.current+1;return{total:Math.ceil(t/n),current:Math.ceil(r/n)-1,size:n}}},{key:"isPrevDisabled",value:function(){return this.props.current<=0}},{key:"isNextDisabled",value:function(){return this.props.current>=this.props.total-1}},{key:"isPrevMoreHidden",value:function(){var e=this.calcBlocks();return 1===e.total||0===e.current}},{key:"isNextMoreHidden",value:function(){var e=this.calcBlocks();return 1===e.total||e.current===e.total-1}},{key:"visibleRange",value:function(){var e=this.calcBlocks(),t=e.current*e.size,n=this.props.total-t;return[t+1,t+(n>e.size?e.size:n)+1]}},{key:"handleFirstPage",value:function(){this.isPrevDisabled()||this.handlePageChanged(0)}},{key:"handlePreviousPage",value:function(){this.isPrevDisabled()||this.handlePageChanged(this.props.current-1)}},{key:"handleNextPage",value:function(){this.isNextDisabled()||this.handlePageChanged(this.props.current+1)}},{key:"handleLastPage",value:function(){this.isNextDisabled()||this.handlePageChanged(this.props.total-1)}},{key:"handleMorePrevPages",value:function(){var e=this.calcBlocks();this.handlePageChanged(e.current*e.size-1)}},{key:"handleMoreNextPages",value:function(){var e=this.calcBlocks();this.handlePageChanged((e.current+1)*e.size)}},{key:"handlePageChanged",value:function(e){var t=this.props.onPageChanged;t&&t(e)}},{key:"renderPages",value:function(e){var t=this;return u(e[0],e[1]).map(function(e,n){var r=e-1,a=t.handlePageChanged.bind(t,r),i=t.props.current===r;return c.default.createElement(y,{key:n,index:n,isActive:i,className:"btn-numbered-page",onClick:a},e)})}},{key:"render",value:function(){var e=this.getTitles.bind(this),t="pagination";return this.props.className&&(t+=" "+this.props.className),c.default.createElement("nav",null,c.default.createElement("ul",{className:t},c.default.createElement(y,{className:"btn-first-page",key:"btn-first-page",isDisabled:this.isPrevDisabled(),onClick:this.handleFirstPage},e("first")),c.default.createElement(y,{className:"btn-prev-page",key:"btn-prev-page",isDisabled:this.isPrevDisabled(),onClick:this.handlePreviousPage},e("prev")),c.default.createElement(y,{className:"btn-prev-more",key:"btn-prev-more",isHidden:this.isPrevMoreHidden(),onClick:this.handleMorePrevPages},e("prevSet")),this.renderPages(this.visibleRange()),c.default.createElement(y,{className:"btn-next-more",key:"btn-next-more",isHidden:this.isNextMoreHidden(),onClick:this.handleMoreNextPages},e("nextSet")),c.default.createElement(y,{className:"btn-next-page",key:"btn-next-page",isDisabled:this.isNextDisabled(),onClick:this.handleNextPage},e("next")),c.default.createElement(y,{className:"btn-last-page",key:"btn-last-page",isDisabled:this.isNextDisabled(),onClick:this.handleLastPage},e("last"))))}}]),t}(c.default.Component);h.propTypes={current:p.default.number.isRequired,total:p.default.number.isRequired,visiblePages:p.default.number.isRequired,titles:p.default.object,onPageChanged:p.default.func},h.defaultProps={titles:d};var y=function(e){if(e.isHidden)return null;var t=e.className?e.className+" ":"",n=t+(e.isActive?" active":"")+(e.isDisabled?" disabled":"");return c.default.createElement("li",{key:e.index,className:n},c.default.createElement("a",{onClick:e.onClick},e.children))};y.propTypes={isHidden:p.default.bool,isActive:p.default.bool,isDisabled:p.default.bool,className:p.default.string,onClick:p.default.func},t.default=h},function(t,n){t.exports=e},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,a=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(8)(a,!0)}else e.exports=n(10)()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var r=n(1),a=n(2),i=n(4),o=n(3),u=n(9);e.exports=function(e,n){function s(e){var t=e&&(w&&e[w]||e[T]);if("function"==typeof t)return t}function l(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function c(e){this.message=e,this.stack=""}function f(e){function r(r,l,f,p,d,h,y){if(p=p||O,h=h||f,y!==o)if(n)a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var v=p+":"+f;!u[v]&&s<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,p),u[v]=!0,s++)}return null==l[f]?r?new c(null===l[f]?"The "+d+" `"+h+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+d+" `"+h+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(l,f,p,d,h)}if("production"!==t.env.NODE_ENV)var u={},s=0;var l=r.bind(null,!1);return l.isRequired=r.bind(null,!0),l}function p(e){function t(t,n,r,a,i,o){var u=t[n];if(x(u)!==e)return new c("Invalid "+a+" `"+i+"` of type `"+k(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return f(t)}function d(e){function t(t,n,r,a,i){if("function"!=typeof e)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new c("Invalid "+a+" `"+i+"` of type `"+x(u)+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<u.length;s++){var l=e(u,s,r,a,i+"["+s+"]",o);if(l instanceof Error)return l}return null}return f(t)}function h(e){function t(t,n,r,a,i){if(!(t[n]instanceof e)){var o=e.name||O;return new c("Invalid "+a+" `"+i+"` of type `"+N(t[n])+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}return null}return f(t)}function y(e){function n(t,n,r,a,i){for(var o=t[n],u=0;u<e.length;u++)if(l(o,e[u]))return null;return new c("Invalid "+a+" `"+i+"` of value `"+o+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?f(n):("production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function v(e){function t(t,n,r,a,i){if("function"!=typeof e)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],s=x(u);if("object"!==s)return new c("Invalid "+a+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(u.hasOwnProperty(l)){var f=e(u,l,r,a,i+"."+l,o);if(f instanceof Error)return f}return null}return f(t)}function g(e){function n(t,n,r,a,i){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,a,i,o))return null}return new c("Invalid "+a+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var a=0;a<e.length;a++){var u=e[a];if("function"!=typeof u)return i(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",E(u),a),r.thatReturnsNull}return f(n)}function b(e){function t(t,n,r,a,i){var u=t[n],s=x(u);if("object"!==s)return new c("Invalid "+a+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var f=e[l];if(f){var p=f(u,l,r,a,i+"."+l,o);if(p)return p}}return null}return f(t)}function m(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(m);if(null===t||e(t))return!0;var n=s(t);if(!n)return!1;var r,a=n.call(t);if(n!==t.entries){for(;!(r=a.next()).done;)if(!m(r.value))return!1}else for(;!(r=a.next()).done;){var i=r.value;if(i&&!m(i[1]))return!1}return!0;default:return!1}}function P(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function x(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":P(t,e)?"symbol":t}function k(e){if(void 0===e||null===e)return""+e;var t=x(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function E(e){var t=k(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function N(e){return e.constructor&&e.constructor.name?e.constructor.name:O}var w="function"==typeof Symbol&&Symbol.iterator,T="@@iterator",O="<<anonymous>>",_={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return f(r.thatReturnsNull)}(),arrayOf:d,element:function(){function t(t,n,r,a,i){var o=t[n];if(!e(o)){return new c("Invalid "+a+" `"+i+"` of type `"+x(o)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return f(t)}(),instanceOf:h,node:function(){function e(e,t,n,r,a){return m(e[t])?null:new c("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")}return f(e)}(),objectOf:v,oneOf:y,oneOfType:g,shape:b};return c.prototype=Error.prototype,_.checkPropTypes=u,_.PropTypes=_,_}}).call(t,n(0))},function(e,t,n){"use strict";(function(t){function r(e,n,r,s,l){if("production"!==t.env.NODE_ENV)for(var c in e)if(e.hasOwnProperty(c)){var f;try{a("function"==typeof e[c],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",s||"React class",r,c),f=e[c](n,c,s,r,null,o)}catch(e){f=e}if(i(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",r,c,typeof f),f instanceof Error&&!(f.message in u)){u[f.message]=!0;var p=l?l():"";i(!1,"Failed %s type: %s%s",r,f.message,null!=p?p:"")}}}if("production"!==t.env.NODE_ENV)var a=n(2),i=n(4),o=n(3),u={};e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";var r=n(1),a=n(2),i=n(3);e.exports=function(){function e(e,t,n,r,o,u){u!==i&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}}])});